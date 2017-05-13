import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'new-product-form',
  templateUrl: './new-product-form.component.html',
  styleUrls: ['./new-product-form.component.css']
})
export class NewProductFormComponent implements OnInit, OnChanges {
  form: FormGroup;

  @Input()
  initialValue:any;

  constructor(private fb:FormBuilder) {

      this.form = this.fb.group({
        name: ['', Validators.required],
        price: ['', Validators.required],
        location: ['', Validators.required],
        imageUrl: ['', Validators.required],
        longDescription: ['']
      });


  }


  ngOnChanges(changes:SimpleChanges) {
      if (changes['initialValue']) {
          this.form.patchValue(changes['initialValue'].currentValue);
      }
  }

  ngOnInit() {

  }

  isErrorVisible(field:string, error:string) {

      return this.form.controls[field].dirty
              && this.form.controls[field].errors &&
              this.form.controls[field].errors[error];

  }


  reset() {
      this.form.reset();
  }


  get valid() {
      return this.form.valid;
  }

  get value() {
      return this.form.value;
  }


}
