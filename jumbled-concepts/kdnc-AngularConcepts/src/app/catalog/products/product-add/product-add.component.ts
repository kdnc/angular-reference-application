import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/domain/product/product';
import { ProductService } from '../../../shared/services/product/product.service';

@Component({
    templateUrl: './product-add.component.html',
    styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

    constructor(private productService: ProductService) { }

    ngOnInit(): void {
    }

  handleNewProductAdded(product: Product) {
    this.productService.saveProduct(product).subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    });
  }
}
