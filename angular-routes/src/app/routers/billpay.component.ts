import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-billPay',
    template: `<img src="../../assets/billPay.png" alt="billPay">`
})
export class billPayComponent {
    constructor(private routerState: ActivatedRoute) { }
    ngOnInit() {

    }
}