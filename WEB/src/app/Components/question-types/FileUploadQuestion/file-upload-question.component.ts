import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../data.service';
import { Router } from '@angular/router';
import * as myGlobals from '../../../globals';
import InputChecker from '../../../DataHelper/InputChecker';
import Translations from '../../../Translations/Translations';
import S3FileUpload from '../../../FileUpload/S3FileUpload'

@Component({
    selector: 'file-upload-question',
    templateUrl: './file-upload-question.component.html',
    styleUrls: ['./file-upload-question.component.css']
})
export class FileUploadQuestionComponent implements OnInit {

    globals: {}
    bigTitle: string
    type: string
    challengesData: any
    @Input() stage: any = {}
    @Input() hideSend?: boolean = false;
    @Input() answerData: any;
    @Output() answer = new EventEmitter<any>();
    answers: any = ''
    bucketName: string = 'pisa-answers';
    uploader: S3FileUpload;
    region = 'us-west-2';
    id = 'ed40a3cc-83bc-4a77-921a-f93dd7593e82';
    uploading: Boolean = false;
    file: File;
    // file: any = {name:"lkjahsfasf"};

    constructor(public dataService: DataService, public route: ActivatedRoute, private router: Router) {
        this.uploader = new S3FileUpload(this.region, this.id, this.bucketName);
    }

    ngOnInit(): void {
        if (this.dataService.type)
            this.type = this.dataService.type
    }

    shouldDisable(): boolean {
        return this.answers == ''
    }

    answered(): void {
        if (this.answers)
            this.answer.emit([this.answers])
    }


    get getAnswers() {
        return { stage: this.stage, answers: this.answers };
    }


    onFileChange(event: any) {
        var files = event.srcElement.files;

        this.file = files[0];
        if (this.file) {
            this.uploading = true;
            this.uploader.UploadFileAsync(files[0], (result: any) => {
                this.uploading = false;
                if (result.success) {
                    this.answers = result.url;
                    this.answer.emit([this.answers]);
                    this.dataService.showMessagePopup = true;
                } else {
                    console.log('upload failed', result);
                }
            });
        }

    }
}
