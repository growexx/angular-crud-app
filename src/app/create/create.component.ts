import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  constructor(private dataService : DataService, private router: Router, private toastr: ToastrService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.dataService.addItem(form.value).then((response: any) => {
        if (response) {
          this.toastr.success(response.message, 'Success');
          this.router.navigateByUrl('item');
        }
      });
    } else {
      // Handle form validation errors.
      // You can access form.errors and form.controls to get specific error details.
    }
  }

}
