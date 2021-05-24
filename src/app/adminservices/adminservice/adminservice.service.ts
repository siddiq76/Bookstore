import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import{HttpService} from '../http/http.service'
@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http: HttpService) { }
  accessToken=localStorage.getItem('access');

    options = {
      headers: new HttpHeaders({
       
        'x-access-token': this.accessToken??"",
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }

  loginService(data: any){
    return this.http.post('user/login',data,'')

  }
  login(data:any){

    return this.http.post('admin/login',data,'');
  }
  add(data : any){

    return this.http.post('admin/add/book',data,this.options);
  }

  
  
}
