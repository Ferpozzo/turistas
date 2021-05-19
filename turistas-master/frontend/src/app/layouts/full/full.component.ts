import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { MenuItems } from '../../shared/menu-items/menu-items';


/** @title Responsive sidenav */
@Component({
  selector: 'app-full-layout',
  templateUrl: 'full.component.html',
  styleUrls: []
})
export class FullComponent implements OnDestroy, AfterViewInit {
  mobileQuery: MediaQueryList;
  loggedId: string | any = localStorage.getItem('userId')
  user: UserInterface | any
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems,
    private api: UserService,
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit() {
    if (this.loggedId) {
      this.api.getUser(this.loggedId).subscribe(
        data => {
          this.user = data
        },
        error => {
          console.log(error)
        }
      )
    }
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngAfterViewInit() { }
}
