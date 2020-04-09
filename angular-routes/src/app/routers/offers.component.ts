import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-offers',
    template: `<img src="../../assets/offers.png" alt="offers">`
})
export class offersComponent {
    constructor(private routerState: ActivatedRoute) { }
    ngOnInit() {

    }
}