import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LocaleInterface } from 'src/app/models/locale.model';
import { ViewLocaleComponent } from '../view-locale/view-locale.component';

@Component({
  selector: 'app-delete-locale',
  templateUrl: './delete-locale.component.html',
  styleUrls: ['./delete-locale.component.css']
})
export class DeleteLocaleComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ViewLocaleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
