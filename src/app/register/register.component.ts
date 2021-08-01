import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,  Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";


@Component({
  selector: 'app-register',
  templateUrl:'./register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form : FormGroup = this.formbuilder.group({
    email :['',[Validators.required , Validators.minLength(9)]],
    password:['',[Validators.required, Validators.minLength(10)]],
    confirmPassword :['',Validators.required],
  })

  constructor(private  formbuilder:FormBuilder, private router : Router , private userService:UserService)  {

  }
public email(){
return this.form.get('email')
}
  public password(){
    return this.form.get('password')
  }
  public confirmPassword(){
    return this.form.get('confirmPassword')
  }
  public  match(){
    if(this.password()?.value !== this.confirmPassword()?.value){
      return  false
    }

    return true
  }


  ngOnInit(): void {
 this.form
  }
  submit() : void {
    if(this.match()){
      this.userService.register(this.form.getRawValue()).subscribe(
        () => this.router.navigate(['/auth'])

      )
    }


  }





}
