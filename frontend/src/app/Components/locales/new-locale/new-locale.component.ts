import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { localeTypes } from 'src/app/models/locale.model';
import { FileQueueObject, FileUploadService } from 'src/app/services/file-upload/file-upload.service';
import { LocaleService } from 'src/app/services/locale/locale.service';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-new-locale',
  templateUrl: './new-locale.component.html',
  styleUrls: ['./new-locale.component.css']
})
export class NewLocaleComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({
    url: environment.backendURL + 'locales/',
    itemAlias: 'image'
  });
  registerForm: FormGroup | any
  loggedId: any
  submitted = false
  success = false
  localeTypes = localeTypes
  queue: Observable<FileQueueObject[]> | any;
  localeId: string = ''
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private api: LocaleService
  ) { }

  ngOnInit(): void {
    this.loggedId = localStorage.getItem('userId')
    this.registerForm = this.formBuilder.group({
      _userId: [this.loggedId, Validators.required],
      name: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(200), Validators.minLength(5)]],
      address: ['', [Validators.required, Validators.maxLength(200), Validators.minLength(5)]],
      type: ['', [Validators.required]],
      status: ['Active', Validators.required]
    })
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
      this.api.createOne(this.registerForm.value).subscribe(
        data => {
          this._snackBar.open('Local salvo', 'Fechar', {
            duration: 1500,
            horizontalPosition: 'end',
            verticalPosition: 'top'
          })
          this.localeId = data._id
          this.success = true
        },
        error => {
          this._snackBar.open('Erro ao registrar: ' + error.message, 'Fechar', {
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
