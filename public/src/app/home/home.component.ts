import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: any;
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    // console.log("ji")
    this.getAllMovies();
  }
  getAllMovies() {
    let tempObservable = this._httpService.getMovies();
    tempObservable.subscribe(data => {
      console.log("Got our movies!", data);
      this.movies = data;
      // console.log("======")
      // console.log(data);
      
    });
  }
}

