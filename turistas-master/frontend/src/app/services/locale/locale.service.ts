import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocaleInterface } from 'src/app/models/locale.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  url = 'locales'
  constructor(
    private http: HttpClient
  ) { }
  getAll(): Observable<any> {
    return this.http.get(environment.backendURL + this.url,
      { headers: this.httpHeaders });
  }
  getAllUserId(_id: string): Observable<any> {
    return this.http.get(environment.backendURL + 'users/' + _id + '/' + this.url,
      { headers: this.httpHeaders });
  }
  getOne(_id: string): Observable<any> {
    return this.http.get(environment.backendURL + this.url + _id,
      { headers: this.httpHeaders });
  }
  createOne(locale: LocaleInterface): Observable<any> {
    return this.http.post(environment.backendURL + this.url, locale,
      { headers: this.httpHeaders });
  }
  deleteOne(_id: string): Observable<any> {
    return this.http.delete(environment.backendURL + this.url + _id + '/',
      { headers: this.httpHeaders });
  }
  updateOne(locale: LocaleInterface): Observable<any> {
    return this.http.patch(environment.backendURL + this.url + locale._id, locale,
      { headers: this.httpHeaders });
  }
}
