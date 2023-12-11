import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {ComplexFormValue} from "../models/complex-form-value.model";
import {environment} from "../../../environements/environment";

@Injectable()
export class ComplexFormServiceService {

  constructor(private http: HttpClient) {
  }

  saveUserInfo(formValue: ComplexFormValue): Observable<boolean> {
    return this.http.post(`${environment.apiUrl}/users`, formValue).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }
}
