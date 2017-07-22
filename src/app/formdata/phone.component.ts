import { Component, OnInit } from '@angular/core';
import { AppProviders } from '../app.providers';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-formdata',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  payload;
  sidenavFrontImg;
  base64: any = [];
  nameAry = []
  imageFile: FormGroup;
  renderList = []

  constructor(
    private ap: AppProviders,
    private http: Http,
    private fb: FormBuilder
  ) {
    this.imageFile = fb.group({
      'name': ['', Validators.required],
	   'description': ['', Validators.required],
      'ids': ['', Validators.required]
    })

  
 
  

    
   
  }
//filter hand set details
search(searchBox) {
  let phoneid = searchBox
 console.log(searchBox);
this.http.get(`http://128.199.151.97/myapi/api.php/categories?filter[]=name,eq,${phoneid}&page=2`) .subscribe((data) => {
      console.log(data.json());
      data.json()['categories']['records'].map((data) => {
        this.renderList.push({ id: data[0], name: data[1],description:data[3], image: data[2].replace('dataimage/jpegbase64/', 'data:image/jpeg;base64,/') })
        this.base64.push(data);
      })
    })
}


  ngOnInit() {
  }
}

