import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  data: any;
  constructor(private dataService : DataService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.dataService.findItem(this.route.snapshot.params['id']).then((response: any) => {
      this.data = response.data;
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.dataService.updateItem(this.route.snapshot.params['id'], form.value);
      this.router.navigateByUrl('item');
    } else {
      // Handle form validation errors.
      // You can access form.errors and form.controls to get specific error details.
    }
  }
}
