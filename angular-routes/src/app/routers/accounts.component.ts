import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { accounts, accountDetails} from '../accountData';


@Component({
    selector: 'app-accounts',
    templateUrl : './accounts.component.html',
    styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
    accountsList : accounts[];
    accountKeys : string[];
    constructor(private routerState: ActivatedRoute) { }
    ngOnInit() {
        this.accountsList = accountDetails;
        this.accountKeys = Object.keys(this.accountsList[0]);
        console.log(this.accountKeys);
    }
}