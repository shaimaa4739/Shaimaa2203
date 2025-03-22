import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { Data, Film } from 'src/app/shared/models/data';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie?: Film;
  categoryId: number | null= null;
  movieId: number | null= null;
  isTextCollapsed = true;


  constructor (
    private _ApiService: ApiService,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    // Note: BehaviorSubject so data disappear when refresh
    // this.getMovie();

    // This solution if user refersh page data will remain displayed
    this.getIds();
  }

  getIds(){
    this.route.queryParams.subscribe(params => {
      this.categoryId = Number(params['categoryId']);
      this.movieId = Number(params['movieId']); 
      this.findSelectedMovie();
    });
  }

  findSelectedMovie(){
    this._ApiService.getData()
    .subscribe(
      (response: Data)=>{
        if(response && this.categoryId){
          const CATEGORY = response.Categories?.find(category => category.CategoryID == this.categoryId);
          this.movie = CATEGORY?.Films?.find(film => film.FilmID == this.movieId);
        }
      }
    )
  }

  getMovie(){
    this.movie = this._ApiService.getmovie();
  }

  toggleCollapse() {
    this.isTextCollapsed = !this.isTextCollapsed;
  }
}
