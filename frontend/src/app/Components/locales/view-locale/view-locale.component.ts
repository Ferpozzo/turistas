import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LocaleInterface } from 'src/app/models/locale.model';
import { LocaleService } from 'src/app/services/locale/locale.service';
import { v2 } from '@google-cloud/translate'
import { MatDialog } from '@angular/material/dialog';
import { DeleteLocaleComponent } from '../delete-locale/delete-locale.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-view-locale',
  templateUrl: './view-locale.component.html',
  styleUrls: ['./view-locale.component.css']
})
export class ViewLocaleComponent implements OnInit {
  displayedColumns = ['name', 'description', 'address', 'type', 'status', 'createdAt', 'updatedAt', 'detail', 'delete'];
  locales: LocaleInterface[] | any = [];
  dataSource = new MatTableDataSource()
  isLoadingResults = true;
  loggedId: string | any;
  constructor(
    private api: LocaleService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private changeDetectorRefs: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loggedId = localStorage.getItem('userId')
    this.api.getAllUserId(this.loggedId).subscribe(
      data => {
        this.locales = data
        this.dataSource = new MatTableDataSource(this.locales)
        this.isLoadingResults = false;
      },
      error => {
        console.log(error);
        this.isLoadingResults = false;
      });
  }
  openDeleteDialog(_id: string) {
    const dialogRef = this.dialog.open(DeleteLocaleComponent, {
      width: '250px',
      data: _id
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.api.deleteOne(_id).subscribe(
          data => {
            const index = this.locales.indexOf(_id)
            this.locales.splice(index, 1);
            this.dataSource._updateChangeSubscription()
            this._snackBar.open('Local deletado', 'Fechar', {
              duration: 1500,
              horizontalPosition: 'end',
              verticalPosition: 'top'
            })
          },
          error => {
            this._snackBar.open('Erro ao deletar local: ' + error.message, 'Fechar', {
              duration: 5000,
              horizontalPosition: 'end',
              verticalPosition: 'top'
            })
          }
        )
      }
    });
  }
}

