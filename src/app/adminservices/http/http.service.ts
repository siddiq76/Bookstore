import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class HttpService {
Baseurl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }
 
  post(url:any,data:any,token:any){
    
    return this.httpClient.post(this.Baseurl+url,data,token);
     
   }

  get(url:any,token:any){
    return this.httpClient.get(this.Baseurl+url,token);
  }

  delete(url: any,token : any){
    return this.httpClient.delete(this.Baseurl+url,token);
  }
}
