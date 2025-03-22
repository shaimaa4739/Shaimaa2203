import { ChangeDetectorRef, Component, ElementRef, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { Data, Film } from 'src/app/shared/models/data';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  @ViewChild('swiperEl', { static: false }) swiperEl!: ElementRef;

  data?: Data;
  activeCategoryId: number | null = null;
  activeCategoryMovies: Film[] = []

  constructor(
    private _ApiService: ApiService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(){
    this.getData()
  }

  ngAfterViewInit() {
    this.spinnerConfig()
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
    this.cdr.detectChanges();
    this.spinnerConfig()
  }

  selectMovie(movie: Film){
    // Note: Soultion 1 using Behaviour Subject
    // this._ApiService.setmovie(movie)
    // this.router.navigate(['/details']);

    // Note: Soultion 2 using Query Param
    this.router.navigate(['/details'],   { queryParams: { categoryId: this.activeCategoryId , movieId: movie.FilmID } });

  }

  spinnerConfig(){
    if (this.swiperEl?.nativeElement) {
      const SWIPER_ELEMENT = this.swiperEl.nativeElement;
      const SWIPER_PARAMS = {
        slidesPerView: 1,
        breakpoints: {
          1200: { slidesPerView: 10, },
          992: { slidesPerView: 7 },
          768: { slidesPerView: 5},
          0: { slidesPerView: 3}
        },
        on: {
          init() {
          },
        },
      };
      Object.assign(SWIPER_ELEMENT, SWIPER_PARAMS);
      SWIPER_ELEMENT.initialize();
    }
  }
}
