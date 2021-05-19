import { Component, OnInit } from '@angular/core';
import { LocaleInterface } from 'src/app/models/locale.model';
import { LocaleService } from 'src/app/services/locale/locale.service';
import { v2 } from '@google-cloud/translate'
@Component({
  selector: 'app-view-locale',
  templateUrl: './view-locale.component.html',
  styleUrls: ['./view-locale.component.css']
})
export class ViewLocaleComponent implements OnInit {
  displayedColumns = ['name', 'description', 'address', 'type', 'status', 'createdAt', 'updatedAt', 'detail'];
  dataSource: LocaleInterface[] | any;
  isLoadingResults = true;
  loggedId: string | any;
  constructor(
    private api: LocaleService
  ) { }

  ngOnInit(): void {
    this.loggedId = localStorage.getItem('userId')
    this.api.getAllUserId(this.loggedId).subscribe(
      data => {
        this.dataSource = data;
        console.log(this.dataSource);
        this.isLoadingResults = false;
      },
      error => {
        console.log(error);
        this.isLoadingResults = false;
      });
  }
}

