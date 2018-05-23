import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
// import { MovieSchema, ReviewSchema } from '../../../../server/models/schema'


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  // movi = require("../../../../server/models/schema");
  review: any;
  newMovie: any;
  // newMovie2: any;
  message: any;
  messag: any;
  message1: any;
  message2: any;
  message3: any;
  mess: string;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    // this.newMovie2 = new this.movi.model();////
    this.review = { reviewer: "", stars: 0, review: "" };
    this.newMovie = { title: "", reviews: [ this.review ] };
  }
  onSubmit() {
    console.log('^-^-^-^-^-^-^-^-^-^-^-^-');
    console.log(this.newMovie);
    

    let temp = this._httpService.addMovie(this.newMovie);
    temp.subscribe(data => {
      if (data["errors"] ){
        console.log(data['errors'])
      
        if (data["errors"]['title'] && data["errors"]['reviews.0.reviewer'] && data["errors"]['reviews.0.review'] && data["errors"]['reviews.0.stars']){
          this.messag = data["errors"]['title'].message;
          this.message1 = data["errors"]['reviews.0.reviewer'].message;
          this.message2 = data["errors"]['reviews.0.stars'].message;
          this.message3 = data["errors"]['reviews.0.review'].message;
          this.message = [this.messag, this.message1, this.message2, this.message3];

        } else if (data["errors"]['title'] && data["errors"]['reviews.0.reviewer'] && data["errors"]['reviews.0.review']){
          this.messag = data["errors"]['title'].message;
          this.message1 = data["errors"]['reviews.0.reviewer'].message;
          this.message2 = data["errors"]['reviews.0.review'].message;
          this.message = [this.messag, this.message1, this.message2];

        } else if (data["errors"]['title'] && data["errors"]['reviews.0.reviewer'] && data["errors"]['reviews.0.stars']){
          this.messag = data["errors"]['title'].message;
          this.message1 = data["errors"]['reviews.0.reviewer'].message;
          this.message2 = data["errors"]['reviews.0.stars'].message;
          this.message = [this.messag, this.message1, this.message2];

        } else if (data["errors"]['title'] && data["errors"]['reviews.0.reviewer']){
          this.messag = data["errors"]['title'].message;
          this.message1 = data["errors"]['reviews.0.reviewer'].message;
          this.message = [this.messag, this.message1];

        } else if (data["errors"]['title'] && data["errors"]['reviews.0.review'] ){
          this.messag = data["errors"]['title'].message;
          this.message3 = data["errors"]['reviews.0.review'].message;
          this.message = [this.messag, this.message1];

        } else if (data["errors"]['title'] && data["errors"]['reviews.0.stars'] ){
          this.messag = data["errors"]['title'].message;
          this.message2 = data["errors"]['reviews.0.stars'].message;
          this.message = [this.messag, this.message2];

        } else if (data["errors"]['reviews.0.reviewer'] && data["errors"]['reviews.0.review'] && data["errors"]['reviews.0.stars']){
          this.message1 = data["errors"]['reviews.0.reviewer'].message;
          this.message3 = data["errors"]['reviews.0.review'].message;
          this.message2 = data["errors"]['reviews.0.stars'].message;
          this.message = [this.message1, this.message2, this.message3];

        } else if (data["errors"]['reviews.0.reviewer'] && data["errors"]['reviews.0.stars']){
          this.message1 = data["errors"]['reviews.0.reviewer'].message;
          this.message2 = data["errors"]['reviews.0.stars'].message;
          this.message = [this.message1, this.message2];

        } else if (data["errors"]['reviews.0.review'] && data["errors"]['reviews.0.stars']){
          this.message1 = data["errors"]['reviews.0.review'].message;
          this.message2 = data["errors"]['reviews.0.stars'].message;
          this.message = [this.message1, this.message2];

        } else if (data["errors"]['reviews.0.review'] ){
          this.message3 = data["errors"]['reviews.0.review'].message;
          this.message = [this.message3];
          
        } else if (data["errors"]['reviews.0.reviewer']){
          this.message3 = data["errors"]['reviews.0.reviewer'].message;
          this.message = [this.message3];
          
        } else {
          this.message3 = data["errors"]['reviews.0.stars'].message;
          this.message = [this.message3];

        }
        this.mess = "Oops, something went wrong.."
      } else {
        // console.log(data);
        this.mess = "Successfully submitted movie";
        return this._router.navigate(['/movies']);
      }
    });
  }

}


  
