import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
 
@Injectable()
export class HttpService{
 
   headers: any =  new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
   url: string = 'http://serv.dance.local/api/';
   constructor(private http: Http){ }
     
   getObject(name: string, params:string = null){
       
        let result: Observable<Response> = this.http.post(this.url + name, params, {headers: this.headers})
                                                .map((resp:Response)=>resp.json())
                                                .catch((error:any) =>{return Observable.throw(error);});
        return result;
   }
   
   getDances(){
      return this.getObject('dances');
   }
   
   getHistory(){
       return this.getObject('history');
   }
   
   getGallery(){
       return this.getObject('gallery');
   }
   
   getNews(){
       return this.getObject('news');
   }
   
   getStaff(){
       return this.getObject('staff');
   }
   
   getPerson(id: string){
       let params = {'id':id};
       return this.getObject('staffbyid', JSON.stringify(params));
   }
   
   getDance(id: string){
       let params = {'id':id};
       return this.getObject('dancebyid', JSON.stringify(params));
   }
}