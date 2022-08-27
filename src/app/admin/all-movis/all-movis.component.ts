import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';
import { ServicesService } from 'src/app/core/services.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';

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
  SearchData: any;
  Movidata: any;
  TotalPage: any;
  pageIndex: any;
  MovieBYid: any;
  SingleMoviData: any = []
  searchInput: any;
  loadings: boolean = true;
  isPagination: boolean = true;
  isshowSearhdata: boolean = false;
  pageSize: any;
  TotalSearchData: any;
  total_pages: any;
  sortByNameData: any;
  sortByDateData: any;
  isNodataFound: boolean = false;
  imgbaseurl = 'https://www.themoviedb.org/t/p/w220_and_h330_face'
  constructor(private service: ServicesService) { }
  async ngOnInit() {
    await this.getData(1)
  }
  async getData(pageno: number) {
    this.loadings = true;
    this.isPagination = true;
    await this.service.getData(pageno).subscribe(
      (valus) => {
        if (valus && valus.results.length > 0) {
          this.TotalPage = valus.total_pages
          this.Movidata = valus
          this.data = this.Movidata.results;
          console.log(this.data)
          this.loadings = false;
          this.isNodataFound = false;
        }
        else {
          this.loadings = false;
          this.isNodataFound = true;
        }
      },
      );

  }
  async onSearch() {
    if (this.searchInput != '' && this.searchInput !== undefined) {
      this.loadings = true;
      this.isPagination = false;
      this.isshowSearhdata = true;
      await this.service.search(this.searchInput).subscribe((res: any) => {
        if (res && res.results.length > 0) {
          console.log(res)
          this.Movidata = res;
          this.TotalSearchData = res.total_results;
          this.TotalPage = res.total_pages;
          this.SearchData = this.Movidata.results
          console.log(this.SearchData)
          this.loadings = false;
          this.isNodataFound = false;
        }
        else{
        this.isNodataFound = true;
        this.loadings = false;
        }
      })
    }
    else {
      alert('Please Enter your Search Text !')
      this.loadings = false;
    }
  }
  onSortByName() {
    if (this.isPagination) {
      this.loadings = true;
      this.sortByNameData = this.Movidata.results;
      this.sortByNameData.sort((a: any, b: any) => {
        let fa = a.title.toLowerCase(), fb = b.title.toLowerCase();
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      console.log(this.sortByNameData)
      this.loadings = false;
    }
    else {
      this.loadings = true;
      this.sortByNameData = this.Movidata.results;
      this.sortByNameData.sort((a: any, b: any) => {
        let fa = a.title.toLowerCase(), fb = b.title.toLowerCase();
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      console.log(this.sortByNameData)
      this.loadings = false;
    }
  }
  onSortByDate() {
    if (this.isPagination) {
      this.loadings = true;
      this.sortByDateData = this.Movidata.results;
      this.sortByDateData.sort((a: any, b: any) => {
        let fa = a.release_date, fb = b.release_date;
        console.log(fa)
        console.log(fb)
        if (fa < fb) {
          return 1;
        }
        if (fa > fb) {
          return -1;
        }
        return 0;
      })
      this.loadings = false;
    }
    else {
      this.loadings = true;
      this.sortByDateData = this.Movidata.results;
      this.sortByDateData.sort((a: any, b: any) => {
        let fa = a.release_date, fb = b.release_date;
        console.log(fa)
        console.log(fb)
        if (fa < fb) {
          return 1;
        }
        if (fa > fb) {
          return -1;
        }
        return 0;
      })
      this.loadings = false;
    }

  }

  async GetMoviDeatils(id: any) {
    this.loadings = true;
    console.log('id', id)
    await this.service.getById(id).subscribe(
      (item) => {
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
  async onSearchClear() {
    this.loadings = true;
    this.isPagination = true;
    await this.getData(1)
    this.searchInput = '';
    this.isshowSearhdata = false;
  }
  // onSearchTextEnterd(searchValue: string) {
  //   this.searchText = searchValue;
  //   console.log(this.searchText);
  // }

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
