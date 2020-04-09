import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-funds',
    template: `
        <h1>Funds Transfer</h1>
             
        <div>Over this new BillPay, you can now make online payments to over 260 billers across various categories including:
        <ul>
            <li> Electricity Bills. </li> 
            <li> Telephone and Mobile Bills. </li> 
            <li> Prepaid DTH/ Mobile Connection/ Data Card Recharge. </li> 
            <li> Gas Bills. </li> 
            <li> Mutual Funds. </li> 
            <li> Insurance Premiums. </li> 
            <li> Subscriptions.</li> 
            <li> Contribution to Charities. </li> 
            <li> Add billers and pay your bills through the enhanced BillPay service, powered by BillDesk. </li>
        </ul>        
    `
})
export class fundsTransferComponent {
    constructor(private routerState: ActivatedRoute) { }
    ngOnInit() {

    }
}