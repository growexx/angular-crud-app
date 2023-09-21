import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  data: any;
  constructor(private dataService : DataService, private router: Router, public route : ActivatedRoute, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.dataService.getItems().then((response: any) => {
      this.data = response.data;
    });
  }

  deleteItem(id : any){
    this.dataService.deleteItem(id).then((response: any) => {
      if (response) {
        this.toastr.success(response.message, 'Success');
        window.location.reload();
      }
    })
  }
}
