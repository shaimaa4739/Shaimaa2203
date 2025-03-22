import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://mocki.io/v1/72e5ee70-4b07-4939-aa4b-3f5573e80f81';

  private branchesSubject = new BehaviorSubject<any>(null); 
  branches$ = this.branchesSubject.asObservable(); 

  private movieSubject = new BehaviorSubject<any>(null); 
  movie$ = this.branchesSubject.asObservable(); 

  constructor(private _http:HttpClient) { }

  getData() : Observable<any>{
    return this._http.get<any>(this.apiUrl);
  }

  setbranches(value: any): void {
    this.branchesSubject.next(value);
  }

  getbranches(): any {
    return this.branchesSubject.value;
  }

  setmovie(value: any): void {
    this.movieSubject.next(value);
  }

  getmovie(): any {
    return this.movieSubject.value;
  }
}
