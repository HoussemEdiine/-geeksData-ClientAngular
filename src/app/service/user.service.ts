import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private  http : HttpClient) {

  }
    register(body:any) {
    return  this.http.post<User []>("http://localhost:8000/api/register",body)
  }
    login(body:any){
    return this.http.post("http://localhost:8000/api/login",body,{withCredentials:true})
  }
  getAllUsers(){
    return this.http.get<User []>("http://localhost:8000/api/users",{withCredentials : true})
  }
  deleteUser(id:any){
    return this.http.delete<User []>(`http://localhost:8000/api/user/${id}`,{withCredentials:true})
  }
  addUser(body:User) {
    return this.http.post<User []>('http://localhost:8000/api/add',body,{withCredentials:true})
  }
  updateUser(body: User,id:any){
    return this.http.put<User []>(`http://localhost:8000/api/updateuser/${id}`,body,{withCredentials: true})

  }
}
