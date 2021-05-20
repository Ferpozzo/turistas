import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInterface } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('ngform', { static: true }) formGroupDirective: NgForm | any
  registerForm: FormGroup | any
  loggedId: any
  submitted = false
  userTypes = [{ action: 'Anunciar', value: 'Commercial' }, { action: 'Reservar', value: 'Consumer' }, { action: 'Ambos', value: 'Both' }]
  userGenders = [{ pt_br: 'Masculino', value: 'Male' }, { pt_br: 'Femenino', value: 'Female' }, { pt_br: 'Outro', value: 'Other' }]
  matcher = new MyErrorStateMatcher();
  user: UserInterface | any
  constructor(
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private api: UserService) { }

  ngOnInit(): void {
    this.loggedId = localStorage.getItem('userId')
    this.api.getUser(this.loggedId).subscribe(
      data => {
        console.log(data)
        this.user = data
        this.registerForm = this.formBuilder.group({
          _id: [this.user._id],
          name: [this.user.name, Validators.required],
          email: [this.user.email, [Validators.required, Validators.email]],
          phone: [this.user.phone, [Validators.required]],
          gender: [this.user.gender, Validators.required],
          documentId: [this.user.documentId],
          type: [this.user.type, Validators.required],
          status: [this.user.status, Validators.required]
          //metrica_coluna: this.formBuilder.array([], Validators.required),
        });
      },
      error => {

      }
    )
  }

  save() {
    console.log(this.registerForm)
    console.log(this.matcher)
    this.submitted = true
    if (this.registerForm.invalid) {
      this._snackBar.open('Preencha todos os campos', 'Fechar', {
        duration: 2000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
      })
    } else {
      this.api.updateUser(this.registerForm.value).subscribe(
        data => {
          this._snackBar.open('Alterações salvas: ', 'Fechar', {
            duration: 1000,
            horizontalPosition: 'end',
            verticalPosition: 'top'
          })
        },
        error => {
          this._snackBar.open('Erro ao alterar perfil: ' + error.message, 'Fechar', {
            duration: 5000,
            horizontalPosition: 'end',
            verticalPosition: 'top'
          })
          console.log(error)
        })

    }
  }
  validatePasswords(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirm_password = form.get('confirm_password')?.value;
    return password === confirm_password ? null : { notSame: true }
  }
  cancelClicked = () => {
    this.submitted = false;
    this.registerForm.reset();
  }
  get form() { return this.registerForm.controls; }

}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidParent = !!(
      control
      && control.parent
      && control.parent.invalid
      && control.parent.dirty
      && control.parent.hasError('notSame'));
    return (invalidParent);
  }
}