import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Cinemas } from 'src/app/shared/models/data';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit {
  
  searchTerm: string = '';
  cinemaList: Cinemas[] = [];

  constructor (private _ApiService: ApiService){}

  ngOnInit(){
    // Note: BehaviorSubject so data disappear when refresh
    this.getBranches();
  }

  getBranches(){
    this.cinemaList = this._ApiService.getbranches();
  }
}
