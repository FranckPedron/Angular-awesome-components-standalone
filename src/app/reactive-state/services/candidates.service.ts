import {Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Candidate} from "../models/candidate.model";
import {environment} from "../../../environements/environment";
import {tap} from "rxjs";

@Injectable()
export class CandidatesService {

  constructor(private http: HttpClient) {
  }

  loading = signal(false);

  candidates = signal<Candidate[]>([]);

  getCandidatesFromServer() {
    this.loading.set(true);
    this.http.get<Candidate[]>(`${environment.apiUrl}/candidates`).pipe(
      tap(candid => {
        this.candidates.set(candid);
        this.loading.set(false);
      })
    );
    // return this.candidates;
  }
}
