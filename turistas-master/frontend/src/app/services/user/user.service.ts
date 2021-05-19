import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface, UserLoginInterface } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(
    private http: HttpClient
  ) { }
  getUsers(_id: string): Observable<any> {
    return this.http.get(environment.backendURL + 'users',
      { headers: this.httpHeaders });
  }
  getUser(_id: string): Observable<any> {
    return this.http.get(environment.backendURL + 'users/' + _id,
      { headers: this.httpHeaders });
  }
  createUser(user: UserInterface): Observable<any> {
    return this.http.post(environment.backendURL + 'users/', user,
      { headers: this.httpHeaders });
  }
  deleteUser(_id: string): Observable<any> {
    return this.http.delete(environment.backendURL + 'users/' + _id + '/',
      { headers: this.httpHeaders });
  }
  updatePutUser(user: UserInterface): Observable<any> {
    return this.http.put(environment.backendURL + 'users/' + user._id, user,
      { headers: this.httpHeaders });
  }
  login(user: UserLoginInterface): Observable<any> {
    return this.http.post(environment.backendURL + 'auth/', user,
      { headers: this.httpHeaders });
  }
}
