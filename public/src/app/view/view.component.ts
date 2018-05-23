import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  something: any;
  movie: any;
  movieT: String;
  message: String;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.getMovie(params.id);
    });
   
  }
  getMovie(id) {
    console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
    let something = this._httpService.getMovieById(id);
    something.subscribe(data => {
      console.log(data[0]);
      this.movie = data[0];
      this.movieT = data[0].title;
      // return this.movie;
    });
  }
  deleteMov(id){
    // console.log(id);
    let temp = this._httpService.delMov(id);
    temp.subscribe(data => {
      this.message = "Successfully deleted movie"
      console.log(data);
      return this._router.navigate(['/movies']);
    });
  }

}


