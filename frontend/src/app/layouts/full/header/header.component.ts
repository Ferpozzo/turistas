import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {
  constructor(
    private router: Router
  ) {

  }
  @Input('user') user: string | any
  logout() {
    localStorage.removeItem('userId')
    this.router.navigateByUrl('login')
    console.log(localStorage.removeItem('userId'))
  }
}
