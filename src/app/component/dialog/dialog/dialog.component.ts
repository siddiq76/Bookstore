import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {AdminserviceService} from '../../../adminservices/adminservice/adminservice.service'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  
  form: FormGroup;

  constructor(private admin : AdminserviceService, private formBuilder: FormBuilder) { 

  this.form= this.formBuilder.group({

    bookname : ['', [Validators.required]],
    author : ['',[Validators.required]],
    description : [' ', [Validators.required]],
    quantity : ['',[Validators.required]],
    price : ['', [Validators.required]],
    discount : ['',[Validators.required]]
  });
}
  ngOnInit(): void {
  }

  add(){
    if (this.form.valid) {
      console.log(this.form.value);
    }

    let reqObj = {

      bookName : this.form.value.bookname,
      author : this.form.value.author,
      description : this.form.value.description,
      quantity : this.form.value.quantity,
      price : this.form.value.price,
      discountPrice : this.form.value.discount
    }
  
    console.log(reqObj)
    this.admin.add(reqObj).subscribe((res)=>{
        console.log(res);
    },(error)=>{
        console.log(error);
    })

  }

}

  


