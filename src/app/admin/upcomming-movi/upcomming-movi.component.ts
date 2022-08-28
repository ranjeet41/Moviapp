import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/core/services.service';
import { __values } from 'tslib';
import { Location } from '@angular/common'


@Component({
  selector: 'app-upcomming-movi',
  templateUrl: './upcomming-movi.component.html',
  styleUrls: ['./upcomming-movi.component.css']
})
export class UpcommingMoviComponent implements OnInit {
  title = "UpComming Movies";
  title2 = 'Searched All Movies Lists';
  upcommingData: any = [];
  TotalPage: any;
  pageIndex: any;
  p: any;
  randomImagepath: any;
  searchText: any;
  searchupcommingdta: any = [];
  totalsearchpageIndex: any;
  pageno: any;
  isPagination: boolean = true;
  isshowSearhdata: boolean = false;
  loadings: boolean = false;
  totaleSearchedCount: any;
  isNodataFound: boolean = false;
  MovieBYid:any;
  SingleMoviData:any;
  sortByNameData:any;
  imagebaseUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face/'
  imageurl = 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib'

  constructor(private service: ServicesService, 
       private location: Location
    ) { }

  async ngOnInit(): Promise<void> {
    await this.upcommingMovi(2);
  }
  async upcommingMovi(pageno: number) {
    this.loadings = true;
    this.service.upComming(pageno).subscribe(
      (value: any) => {
        if (value && value.results.length > 0) {
          this.TotalPage = value.total_pages;
          this.upcommingData = value.results;
          let x = Math.floor((Math.random() * 20) + 1);
          this.upcommingData.map((item: any, index: any) => {
            if (index == x) {
              this.randomImagepath = item.poster_path
              // console.log('images',this.randomImagepath)
            }
            else {
              // console.log('nodata match')
            }
          })
          this.loadings = false
        }
        else {
          this.loadings = false;
          this.isNodataFound = true;
        }
      }
    )
    this.loadings = false;
  }
  async onPageChange(pageno: number) {
    await this.upcommingMovi(pageno);
    this.pageIndex;
  };
  async AllSearchdataFun(searchText: any, pageno: any) {
    this.searchupcommingdta = [];
    this.loadings = true
    this.service.searchbytextAndpageindex(this.searchText, this.pageno).subscribe(async (searchdata: any) => {
      await this.searchupcommingdta.push(...searchdata.results);
      this.totaleSearchedCount = this.searchupcommingdta.length
      this.loadings = false
    })
  }
  async onClickSearch() {
    if (this.searchText != '' && this.searchText != null) {
      this.isshowSearhdata = true;
      this.totalsearchpageIndex = 0;
      this.isPagination = false;
      this.service.searchAndShowAllData(this.searchText).subscribe(async (res: any) => {
        if (res && res.results.length > 0) {
          if (res.total_pages > 1) {
            this.totalsearchpageIndex = res.total_pages;
            for (let i = 0; i <= this.totalsearchpageIndex; i++) {
              this.AllSearchdataFun(this.searchText, i);
            }
          }
        }
        else{
          this.isNodataFound = true;
          this.isshowSearhdata = false;
          this.loadings = false;
        }
      }
      )
    } else {
      alert('Please Enter Your Movi Name')
    }
  }
  async onSearchClear() {
    this.loadings = true;
    this.searchupcommingdta = [];
    this.isPagination = true;
    await this.upcommingMovi(1);
    this.isshowSearhdata = false;
    this.searchText = [];
    this.loadings = false;
    this.isNodataFound = false;
  }
  back(): void {
    this.location.back()
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


  onSortByName() {
    if (this.isPagination) {
      this.loadings = true;
      this.sortByNameData = this.upcommingData;
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
    else{
      this.loadings = true;
      this.sortByNameData = this.searchupcommingdta;
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
  




}
