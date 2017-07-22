import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
@Injectable()

export class AppProviders{
    constructor(private http: Http){
       
    }
  //get data for the dashboard
    getData(){
         return  this.http.get('http://128.199.151.97/myapi/api.php/categories?order=id,desc&page=1,5')
    }
	
    //get all the data from web api
	 getDataall(){
         return  this.http.get('http://128.199.151.97/myapi/api.php/categories')
    }
	
	
}