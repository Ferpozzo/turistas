import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LocaleInterface, localeTypes } from 'src/app/models/locale.model';
import { LocaleService } from 'src/app/services/locale/locale.service';

@Component({
  selector: 'app-detail-locale',
  templateUrl: './detail-locale.component.html',
  styleUrls: ['./detail-locale.component.css']
})
export class DetailLocaleComponent implements OnInit {
  registerForm: FormGroup | any
  loggedId: any
  submitted = false
  success = false
  localeTypes = localeTypes
  localeId: string = ''
  locale: LocaleInterface | any
  constructor(
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private api: LocaleService) { }

  ngOnInit(): void {
    this.loggedId = localStorage.getItem('userId')
    this.router.params.subscribe(
      data => {
        console.log(data)
        this.localeId = data.id
        this.api.getOne(this.localeId).subscribe(
          data => {
            console.log(data)
            this.locale = data
            this.registerForm = this.formBuilder.group({
              _id: [this.locale._id],
              _userId: [this.loggedId, Validators.required],
              name: [this.locale.name, Validators.required],
              description: [this.locale.description, [Validators.required, Validators.maxLength(200), Validators.minLength(5)]],
              address: [this.locale.address, [Validators.required, Validators.maxLength(200), Validators.minLength(5)]],
              type: [this.locale.type, [Validators.required]],
              status: [this.locale.status, Validators.required]
            })
          },
          error => {

          }
        )
      },
      error => {

      }
    )
  }
  save() {
    console.log(this.registerForm)
    this.submitted = true
    if (this.registerForm.invalid) {
      this._snackBar.open('Preencha todos os campos', 'Fechar', {
        duration: 2000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
      })
    } else {
      this.api.updateOne(this.registerForm.value).subscribe(
        data => {
          this._snackBar.open('Alterações salvas', 'Fechar', {
            duration: 1500,
            horizontalPosition: 'end',
            verticalPosition: 'top'
          })
          this.localeId = data._id
          this.success = true
        },
        error => {
          this._snackBar.open('Erro ao alterar: ' + error.message, 'Fechar', {
            duration: 5000,
            horizontalPosition: 'end',
            verticalPosition: 'top'
          })
          console.log(error)
        })
    }
  }
  cancelClicked = () => {
    this.submitted = false;
    this.registerForm.reset();
  }

  get form() { return this.registerForm.controls; }
}
