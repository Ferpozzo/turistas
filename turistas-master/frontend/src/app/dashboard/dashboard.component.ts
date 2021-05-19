import { UserService } from './../services/user/user.service';
import { Component, AfterViewInit } from '@angular/core';
import { UserInterface } from '../models/user.model';
import { ignoreElements } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
	loggedId: string | any = localStorage.getItem('userId')
	constructor(
		private api: UserService,
		private router: Router
	) {

	}
	ngOnInit() {
		if (this.loggedId) {
			this.api.getUser(this.loggedId).subscribe(
				data => {
					console.log(data)
				},
				error => {
					console.log(error)
				}
			)
		}
	}
	ngAfterViewInit() { }

}
