import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {User} from "../model/user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users:User [] = []
  form : FormGroup = this.formBuilder.group({
    email :['',[Validators.required ,Validators.minLength(9) ]],
    password:['',[Validators.required,Validators.minLength(10)]],

  })

  constructor( private  userService:UserService, private  formBuilder:FormBuilder ,private  router:Router) { }

  ngOnInit(): void {
    window.localStorage.clear()
    this.form
    this.getUsers()
    this.users
    this.addUser()


  }
  public email(){
    return this.form.get('email')
  }
  public password(){
    return this.form.get('password')
  }
  public getUsers():void{
    this.userService.getAllUsers().subscribe(
      res => {
        this.users = res
        console.log(this.users)
      }

    )

  }
  public  deleteUser(id :any){
    this.userService.deleteUser(id).subscribe(res =>this.users=res)

  }
  public  addUser(){
    this.userService.addUser(this.form.getRawValue()).subscribe(res => this.users = res)
    this.form.get('email')?.setValue('')
    this.form.get('password')?.setValue('')


  }
  public  edit(id:any){
   window.localStorage.setItem('item', id)
    this.router.navigate(['/edit'])

  }



}
