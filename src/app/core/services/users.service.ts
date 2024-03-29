import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  idNumber:BehaviorSubject<any> = new BehaviorSubject("")
  constructor(private _HttpClient:HttpClient) { }

  getAllUsers(num:number = 1):Observable<any>{
    return this._HttpClient.get(`https://reqres.in/api/users?page=${num}`)
  }
  getSpecUser(id:number):Observable<any>{
    return this._HttpClient.get(`https://reqres.in/api/users/${id}`)
  }
}
