import { Component, OnInit } from '@angular/core';
import { AppProviders } from '../app.providers';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  payload;
  sidenavFrontImg;
  base64: any = [];
  nameAry = []
  imageFile: FormGroup;
  renderList = []

  constructor(
    private ap: AppProviders,
	 private router: Router,
    private http: Http,

    private fb: FormBuilder
  ) {
    this.imageFile = fb.group({
      'name': ['', Validators.required],
      'ids': ['', Validators.required]
    })

    this.ap.getData().subscribe((data) => {
      console.log(data.json());
      data.json()['categories']['records'].map((data) => {
        this.renderList.push({ id: data[0], name: data[1], image: data[2].replace('dataimage/jpegbase64/', 'data:image/jpeg;base64,/') })
        this.base64.push(data);
      })
    })
  }

// convert into base64
  getBase64(file, value) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log("base64orgina", reader.result);
      this.postReq(reader.result, value);
      return reader.result;
    }
    reader.onerror = (error) => {
      console.log('Error: ', error);
      return error
    };
  }

// getting data from form
  uploadImage(value) {
    let imgObj = document.getElementById('imgFile')['files'][0]
    console.log(imgObj, value);
    this.getBase64(imgObj, value);
    this.renderList.push({ id: value.ids, name: value.name, image: value.image});
  }




// post request method
  postReq(payload, value) {
    this.http.post('http://128.199.151.97/myapi/api.php/categories', {
      name: value.name, id: value.id, icon: payload
    })
      .subscribe((successForS3) => {
        console.log('RETRIEVED DATA', successForS3);
      }, (err) => {
        console.log('ERR ', err);
      });
  }
  
  //detail handsets
  gotoDetail(id): void {
  
  const link = ['/phoneList/:test'];
   
    this.router.navigate(link);
  }

  ngOnInit() {
  }

}
