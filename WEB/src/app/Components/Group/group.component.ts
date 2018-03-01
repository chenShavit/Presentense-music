import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';
import * as myGlobals from '../../globals';
import InputChecker from '../../DataHelper/InputChecker';
import Translations from '../../Translations/Translations';


@Component({
    selector: 'group',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
    globals: any
    bigTitle: string
    type: string
    @Input() group: any = {}
    viralLink: any = ""
    showVirallink: boolean = false
    editGroup: any = null


    constructor(public dataService: DataService, private router: Router, private route: ActivatedRoute) {
    }
    ngOnInit(): void {
        this.globals = myGlobals
        if (!this.dataService.type)
            this.router.navigate(['', this.route.snapshot.params['type']]);
        this.type = this.dataService.type

        this.viralLink = document.location.host + '/' + this.dataService.user.viralLink + '&pass=1'
    }


    leaveGroup() {
        this.dataService.sendAnalyticsEvent('חברתי', 'איזור אישי', 'יציאה מקבוצה', 'auto_event')
        this.dataService
            .leaveGroup(this.group._id)
            .then((res) => {
                this.group = null;
            })
            .catch((e) => {
                console.log('e', e);
            });
    }



}
