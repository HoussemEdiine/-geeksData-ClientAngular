import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,  Validators} from "@angular/forms";
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],

  })

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.form
  }

  public email() {
    return this.form.get('email')
  }

  public password() {
    return this.form.get('password')
  }

  public submit() {
    this.userService.login(this.form.getRawValue()).subscribe(
      (res )=> {

           this.router.navigate(['/dashboard'])}
    )
  }
}


