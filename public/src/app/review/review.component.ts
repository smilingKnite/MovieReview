import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  something: any;
  movie: any;
  movieT:any;
  review: any; //// = require("../../../server/models/schema.revModel");
  err: any;
  message: any;
  messag: any;
  message1: any;
  message2: any;
  message3: any;
  mess: string;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.getMovie(params.id);
    });
    // this.movie = { title: "", reviews: [{ reviewer: "", stars: 0, review: "" }] }/////
    // this.review = this.movie.reviews
    this.review = {reviewer: "", stars: 0, review: ""}

  }
  getMovie(id) {
    // console.log(id);//
    let something = this._httpService.getMovieById(id);
    something.subscribe(data => {
      console.log("got movie");
      console.log(data[0]);
      this.movie = data[0];
      this.movieT = this.movie.title;
      // return this.movie;
    });
  }
  onSubmit(){
    // console.log(this.movie);
    console.log(this.review);
    console.log("[][][][][hhh][][][");
    
    let temp = this._httpService.addRev(this.movie._id, this.review);
    temp.subscribe(data => {
      if (data["errors"]) {
        console.log(data["errors"]);
        // console.log(data["errors"]['review']['message']);
        // console.log(data["errors"]['stars']['message']);
        // console.log(data["errors"]['reviewer']['message']);

        if (data["errors"]['review'] && data["errors"]['reviewer'] && data["errors"]['stars']) {
          this.message1 = data["errors"]['review']['message'];
          this.message2 = data["errors"]['stars']['message'];
          this.message3 = data["errors"]['reviewer']['message'];
          this.message = [this.message1, this.message2, this.message3];

        } else if (data["errors"]['reviewer'] && data["errors"]['stars']) {
          this.message1 = data["errors"]['reviewer']['message'];
          this.message2 = data["errors"]['stars']['message'];
          this.message = [this.message1, this.message2];

        } else if (data["errors"]['reviewer'] && data["errors"]['review']) {
          this.message1 = data["errors"]['reviewer']['message'];
          this.message2 = data["errors"]['review']['message'];
          this.message = [this.message1, this.message2];

        } else if (data["errors"]['review'] && data["errors"]['stars']){
          this.message1 = data["errors"]['review']['message'];
          this.message2 = data["errors"]['stars']['message'];
          this.message = [this.message1, this.message2];

        } else if (data["errors"]['review']){
          this.message2 = data["errors"]['review']['message'];
          this.message = [this.message2];

        } else if (data["errors"]['reviewer']){
          this.message1 = data["errors"]['reviewer']['message'];
          this.message = [this.message1];

        } else {
          this.message1 = data["errors"]['stars']['message'];
          this.message = [this.message1];

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



