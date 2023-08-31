import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  constructor(private dataService : DataService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.dataService.addItem(form.value);
      this.router.navigateByUrl('item');
    } else {
      // Handle form validation errors.
      // You can access form.errors and form.controls to get specific error details.
    }
  }

}
