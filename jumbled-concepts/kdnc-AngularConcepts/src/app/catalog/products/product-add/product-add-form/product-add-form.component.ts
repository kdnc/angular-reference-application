import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../../../shared/models/domain/product/product';

@Component({
    selector: 'kdnc-product-add-form',
    templateUrl: './product-add-form.component.html',
    styleUrls: ['./product-add-form.component.css']
})
export class ProductAddFormComponent implements OnInit {

  @Output()
  newProductAdded = new EventEmitter<Product>();

  addProductForm: FormGroup;

  // Inject the formbuilder into the constructor
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Use the formbuilder to build the Form model
    this.addProductForm  = this.fb.group({
      title: ['', Validators.required],
    });
  }

  onAddProductFormSubmit() {
    const product = new Product();
    Object.assign(product, this.addProductForm.value);
    this.newProductAdded.emit(product);
  }
}
