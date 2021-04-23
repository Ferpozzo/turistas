import { UserService } from './../../services/user/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('ngform', { static: true }) formGroupDirective: NgForm | any
  loginForm: FormGroup | any
  submitted = false
  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private api: UserService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    console.log(this.loginForm)
    this.submitted = true
    if (this.loginForm.invalid) {
      this._snackBar.open('Preencha todos os campos', 'Fechar', {
        duration: 2000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
      })
    } else {
      this.api.login(this.loginForm.value).subscribe(
        data => {
          console.log(data)
          localStorage.setItem('userId', data.user._id);
          this.router.navigateByUrl('dashboard')
        },
        error => {
          this._snackBar.open('Erro ao fazer login: ' + error.message, 'Fechar', {
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
    this.loginForm.reset();
  }
  get form() { return this.loginForm.controls; }
}
