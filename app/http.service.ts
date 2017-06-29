import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
 
@Injectable()
export class HttpService{
 
   constructor(private http: Http){ }
     
   getFactorial(num: number){
       return this.http.get('http://localhost/server/getFactorial.php?number=' + num)
                       .map((resp:Response)=>resp.json())
                       .catch((error:any) =>{return Observable.throw(error);});
       
   }
   
   getDances(){
      
      let headers =  new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
      let result: Observable<Response> = this.http.post('http://serv.dance.local/api/dances', null, {headers: headers})
                                                .map((resp:Response)=>resp.json())
                                                .catch((error:any) =>{return Observable.throw(error);});
                       
      return result;
   }
}