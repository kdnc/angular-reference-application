import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../shared/services/product/product.service';

@Component({
    templateUrl: './product-add.component.html',
})
export class ProductAddComponent implements OnInit {

  // Property for the user
  private user: any;

  // Gender list for the select control element
  genderList: string[];
  signupForm: FormGroup;

  // Inject the formbuilder into the constructor
  constructor(private fb: FormBuilder, private productService: ProductService) {}

  ngOnInit() {

    this.genderList =  ['Male', 'Female', 'Others'];

    // Use the formbuilder to build the Form model
    this.signupForm  = this.fb.group({
      email: ['', [Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: this.fb.group({
        pwd: ['', [Validators.required,
          Validators.minLength(8)]],
        confirmPwd: ['', [Validators.required,
          Validators.minLength(8)]]
      }),
      gender: ['', Validators.required],
      terms: ['', Validators.requiredTrue]
    });

  }

  get email() { return this.signupForm.get('email'); }

  get password() { return this.signupForm.get('password'); }

  get gender() { return this.signupForm.get('gender'); }

  get terms() { return this.signupForm.get('terms'); }

  public onFormSubmit() {
    if (this.signupForm.valid) {
      this.user = this.signupForm.value;
      console.log(this.user);

      // this.productService.saveProduct(this.user).subscribe(res => {
      // }, error => {
      // });
    }
  }

}
