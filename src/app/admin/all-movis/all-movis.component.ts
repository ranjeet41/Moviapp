import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';
import { ServicesService } from 'src/app/core/services.service';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-all-movis',
  templateUrl: './all-movis.component.html',
  styleUrls: ['./all-movis.component.css']
})
export class AllMovisComponent implements OnInit {

  title = 'MoviShow';
  searchText: any = '';
  p: any;
  data: any = [];
  Movidata: any;
  TotalPage: any;
  pageIndex: any;
  MovieBYid:any;
  SingleMoviData :any = []
  searchInput:any;
  loadings :boolean= true;
  imgbaseurl = 'https://www.themoviedb.org/t/p/w220_and_h330_face'
  constructor(private service: ServicesService) { }
  async ngOnInit() {
    await this.getData(1)
  }
  async getData(pageno: number) {
    this.loadings = true;
    await this.service.getData(pageno).subscribe(
      (valus) => {
        this.TotalPage = valus.total_pages
        this.Movidata = valus
        this.data = this.Movidata.results;
        console.log(this.data)
        this.loadings = false;

      }
    );
  }
 async onSearch(){
  this.loadings = true;
  if(this.searchInput != '' && this.searchInput !== undefined){
    await this.service.search(this.searchInput).subscribe((res:any)=>{
      console.log(res)
      this.Movidata = res
      this.data = this.Movidata.results
      console.log(this.data)
      this.loadings = false;
    })
  }
  else{
   alert('Please Enter your Search Text !')
  this.loadings= false;
  }

  }
  async GetMoviDeatils(id: any) {
    this.loadings = true;
    console.log('id', id)
    await this.service.getById(id).subscribe(
      (item)=>{
        this.MovieBYid = item;
        this.SingleMoviData = this.MovieBYid
        this.loadings = false;
      }
    )
  }
  async onPageChange(pageno: number) {
    this.loadings = true;
    await this.getData(pageno);
    this.pageIndex;
  }
  // onSearchTextEnterd(searchValue: string) {
  //   this.searchText = searchValue;
  //   console.log(this.searchText);
  // }
 
  async onSearchClear(){
    this.loadings = true;
    await this.getData(1)
    this.searchInput = '';
  }
  
  // onSearchClear(searchValues: string) {
  //   searchValues = '';
  //   this.searchText = '';
  // }
}
export class ProgressSpinnerConfigurableExample {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
}

