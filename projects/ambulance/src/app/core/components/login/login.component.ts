import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'amb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  group: FormGroup
  lockIcon = true

  constructor() { 
    this.group = new FormGroup({
      correo: new FormControl(null,[Validators.required, Validators.email]),
      contraseña: new FormControl(null, Validators.required),
      recaptchaReactive: new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void {
  }

  login(){}

}
