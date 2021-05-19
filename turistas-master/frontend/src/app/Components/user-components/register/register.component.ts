import { UserService } from '../../../services/user/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TUserType, TUserGender, TUserStatus, UserInterface } from '../../../models/user.model'
import { Pipe } from "@angular/core";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('ngform', { static: true }) formGroupDirective: NgForm | any
  registerForm: FormGroup | any
  loggedId: any
  submitted = false
  userTypes = [{ action: 'Anunciar', value: 'Commercial' }, { action: 'Reservar', value: 'Consumer' }, { action: 'Ambos', value: 'Both' }]
  userGenders = [{ pt_br: 'Masculino', value: 'Male' }, { pt_br: 'Femenino', value: 'Female' }, { pt_br: 'Outro', value: 'Other' }]
  /*userStatus: TUserStatus[] = ['Active', 'Inactive', 'Banned'] */
  matcher = new MyErrorStateMatcher();
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private api: UserService) { }

  ngOnInit(): void {
    this.loggedId = localStorage.getItem('payload')
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(200)]],
      confirm_password: [''],
      phone: ['', [Validators.required]],
      gender: ['', Validators.required],
      documentId: [''],
      type: ['', Validators.required],
      status: ['Active', Validators.required]
      //metrica_coluna: this.formBuilder.array([], Validators.required),
    }, { validators: this.validatePasswords });
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
      this.api.createUser(this.registerForm.value).subscribe(
        data => {
          localStorage.setItem('userId', data.user._id);
          this.router.navigateByUrl('dashboard')
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