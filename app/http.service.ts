import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
 
@Injectable()
export class HttpService{
 
   headers: any =  new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
   url: string = 'http://serv.dance.local/api/';
   constructor(private http: Http){ }
     
   getFactorial(num: number){
       return this.http.get('http://localhost/server/getFactorial.php?number=' + num)
                       .map((resp:Response)=>resp.json())
                       .catch((error:any) =>{return Observable.throw(error);});
       
   }
   
   getDances(){
      let result: Observable<Response> = this.http.post(this.url + 'dances', null, {headers: this.headers})
                                                .map((resp:Response)=>resp.json())
                                                .catch((error:any) =>{return Observable.throw(error);});
                       
      return result;
   }
   
   getHistory(){
       let result: Observable<Response> = this.http.post(this.url + 'history', null, {headers: this.headers})
                                                .map((resp:Response)=>resp.json())
                                                .catch((error:any) =>{return Observable.throw(error);});
       return result;
   }
   
   getGallery(){
       let result: Observable<Response> = this.http.post(this.url + 'gallery', null, {headers: this.headers})
                                                .map((resp:Response)=>resp.json())
                                                .catch((error:any) =>{return Observable.throw(error);});
       return result;
   }
   getNews(){
       let result: Observable<Response> = this.http.post(this.url + 'news', null, {headers: this.headers})
                                                .map((resp:Response)=>resp.json())
                                                .catch((error:any) =>{return Observable.throw(error);});
       return result;
   }
   getStaff(){
       let result: Observable<Response> = this.http.post(this.url + 'staff', null, {headers: this.headers})
                                                .map((resp:Response)=>resp.json())
                                                .catch((error:any) =>{return Observable.throw(error);});
       return result;
   }
}