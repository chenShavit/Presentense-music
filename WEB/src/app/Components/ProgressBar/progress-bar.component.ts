import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import * as myGlobals from '../../globals';
import InputChecker from '../../DataHelper/InputChecker';


@Component({
    selector: 'progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
    globals: {}
    bigTitle: string
    @Input() type: string
    @Input() stages: any
    @Input() currentStage: any
    @Input() contestStages: any

    constructor(public dataService: DataService, public route: ActivatedRoute) {
    }

    ngOnInit(): void {

       // this.stages = [''].concat(this.stages)
    }

    getStageBackground(stage: any): string {

        
        switch (this.type) {
            case '1':
                if (stage == this.currentStage && !this.contestStages[0].onPisa)
                    return 'images/Big-Progress.png'
                if (stage < this.currentStage || stage == this.currentStage && this.contestStages[0].onPisa)
                    return 'images/small-progress-background-checked-soccer.svg'
                else
                    return 'images/reg-progress.png'
            case '2':
                if (stage == this.currentStage && !this.contestStages[0].onPisa)
                    return 'images/big-desgin.png'
                if (stage < this.currentStage)
                    return 'images/small-desgin.png'
                else
                    return 'images/reg-progress.png'
            case '3':
                if (stage == this.currentStage && !this.contestStages[0].onPisa)
                    return 'images/big-tech.png'
                if (stage < this.currentStage)
                    return 'images/small-tech.png'
                else
                    return 'images/reg-progress.png'
            case '4':
                if (stage == this.currentStage && !this.contestStages[0].onPisa)
                    return 'images/big-social.png'
                if (stage < this.currentStage)
                return 'images/small-progress-background-checked-soccer.svg'
                else
                    return 'images/reg-progress.png'
            case '5':
            
                if (stage == this.currentStage && !this.contestStages[0].onPisa)
                    return 'images/Big-Progress.png'
                if (stage < this.currentStage)
                    return 'images/Big-music.png'
                else
                    return 'images/reg-progress.png'
        }
    }

    getStageBackgroundForPisa(stage: any): string {


        switch (this.type) {
            case '1':
            if (stage == this.currentStage && this.contestStages[0].onPisa)
                    return 'images/Big-Progress.png'
            else {
                    return 'images/small-progress-background-checked-soccer.svg'
            }
            case '2':
            if (stage == this.currentStage && this.contestStages[0].onPisa)
                    return 'images/big-desgin.png'
            else {
                    return 'images/small-desgin.png'
            }
            case '3':
            if (stage == this.currentStage && this.contestStages[0].onPisa)
                    return 'images/big-tech.png'
            else {
                    return 'images/small-tech.png'
            }
            case '4':
            if (stage == this.currentStage && this.contestStages[0].onPisa)
                    return 'images/big-social.png'
            else {
                return 'images/small-progress-background-checked-soccer.svg'
            }
            case '5':
            if (stage == this.currentStage && this.contestStages[0].onPisa)
                    return 'images/big-music.png'
            else {
                    return 'images/small-music.png'
            }
        }
    }

    getStageHoverBackground(stage: any): string {

        switch (this.type) {
            case '1':
                return 'images/progress-rectangle-soccer.svg'
            case '2':
                return 'images/progress-rectangle-design.svg'
            case '3':
                return 'images/progress-rectangle-tech.svg'
            case '4':
                return 'images/progress-rectangle-social.svg'
            case '5':
                return 'images/progress-rectangle-music.svg'
        }
    }

    getStageLastHoverBackground(stage: any): string {

        switch (this.type) {
            case '1':
                return 'images/progress-rectangle-last-soccer.svg'
            case '2':
                return 'images/progress-rectangle-last-design.svg'
            case '3':
                return 'images/progress-rectangle-last-tech.svg'
            case '4':
                return 'images/progress-rectangle-last-social.svg'
            case '5':
                return 'images/progress-rectangle-last-music.svg'
        }
    }

}
