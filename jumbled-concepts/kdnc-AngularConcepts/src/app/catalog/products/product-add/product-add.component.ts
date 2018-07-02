import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './product-add.component.html',
    styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

    public selectedAddProductTabIndex = 0;

    constructor() { }

    ngOnInit(): void {
    }
}
