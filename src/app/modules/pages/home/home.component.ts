import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { Data, Film } from 'src/app/shared/models/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data?: Data;
  activeCategoryId: number | null = null;
  activeCategoryMovies: Film[] = []

  constructor(
    private _ApiService: ApiService,
    private router: Router
  ){}

  ngOnInit(){
    this.getData()
  }

  getData(){
    this._ApiService.getData()
    .subscribe(
      (response: Data)=>{
        if(response){
          this.data = response
          this._ApiService.setbranches(this.data.Cinemas)
          if(this.data.Categories?.[0].Films && this.data.Categories?.[0].Films?.length>0){
            this.activeCategoryId = 1
            this.activeCategoryMovies = this.data?.Categories?.find(category => category.CategoryID === this.activeCategoryId)?.Films || [];
          }
        }
      }
    )
  }

  setActiveCategory(categoryId?: number) {
    this.activeCategoryId = categoryId?categoryId:null;
    this.activeCategoryMovies = this.data?.Categories?.find(category => category.CategoryID === this.activeCategoryId)?.Films || [];
  }

  selectMovie(movie: Film){
    // Note: Soultion 1 using Behaviour Subject
    // this._ApiService.setmovie(movie)
    // this.router.navigate(['/details']);

    // Note: Soultion 2 using Query Param
    this.router.navigate(['/details'],   { queryParams: { categoryId: this.activeCategoryId , movieId: movie.FilmID } });

  }
}
