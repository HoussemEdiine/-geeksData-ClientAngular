import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  form : FormGroup = this.formBuilder.group({
    email :['',[Validators.required ,Validators.minLength(9) ]],
    password:['',[Validators.required,Validators.minLength(10)]],

  })
  constructor(private  formBuilder:FormBuilder ,private userService:UserService,private router:Router) { }

  public email(){
    return this.form.get('email')
  }
  public password(){
    return this.form.get('password')
  }

  ngOnInit(): void {
    this.form
  }
  public  eddituser(){

    this.userService.updateUser(this.form.getRawValue(),window.localStorage.getItem('item')).subscribe(
      () => this.router.navigate(['/dashboard'])
    )


  }

}
