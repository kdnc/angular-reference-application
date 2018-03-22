import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product/product.service';
import { Product } from '../../shared/models/domain/product/product';

@Component({
    templateUrl: './product-add.component.html',
})
export class ProductAddComponent implements OnInit {

  constructor(private productService: ProductService) {}

  ngOnInit() { }

  handleNewProductAdded(product: Product) {
    // this.productService.saveProduct(product).subscribe(res => {
    //   console.log(res);
    // }, error => {
    // });
  }

}
