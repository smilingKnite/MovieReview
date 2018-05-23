import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  movie: Object;
  rev: object;

  constructor(private _http: HttpClient) {

  }
  getMovies() {
    return this._http.get('/movies');
  }
  getMovieById(id) {
    return this._http.get('/movie/' + id);
  }
  addMovie(data) {
    console.log("-----")
    console.log(data)
    return this._http.post('/newMovie', data);
  }
  addRev(id, rev) {
    // console.log("-=-=-=-=-");
    // console.log(rev);
    return this._http.post('/add-rev/movie/' + id, rev);
  }
  delMov(id) {
    // console.log(id);
    return this._http.delete("/delete/movie/" + id);
  }

}
