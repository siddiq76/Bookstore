import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AdminserviceService} from '../../adminservices/adminservice/adminservice.service'
import { Router } from '@angular/router'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  form: FormGroup;
  


  ngOnInit(): void {
 }


constructor(private formBuilder: FormBuilder, private adminservice: AdminserviceService, private router: Router) {
  // create our form group with all the inputs we will be using in the template
  this.form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
}

submit() {
  if (this.form.valid) {

    console.log(this.form.value);
    let reqObj = {
      email : this.form.value.email,
      password : this.form.value.password
    }
    let array=[] as any;
    this.adminservice.login(reqObj).subscribe((res)=>{
      console.log(res)
      array=res;
      localStorage.setItem('access',array.result.accessToken)

      this.router.navigate(['/dashboard'])
    },(error)=>{
      console.log(error)
    })
  }

}
}