import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
@Injectable()

export class AppProviders{
    constructor(private http: Http){
        // this.http.post('http://128.199.151.97/phpapi/api.php/categories',{'id': 1,  'name': 'Internet'})
    }
    sendData(){
       return this.http.post('http://128.199.151.97/phpapi/api.php/categories',{id: '100',name: 'abc'})
    }
    getData(){
         return  this.http.get('http://128.199.151.97/phpapi/api.php/categories')
    }
}