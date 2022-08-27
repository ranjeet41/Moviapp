import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/core/services.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-upcomming-movi',
  templateUrl: './upcomming-movi.component.html',
  styleUrls: ['./upcomming-movi.component.css']
})
export class UpcommingMoviComponent implements OnInit {
  title = "UpComming Movis"
  upcommingData : any = []
  TotalPage : any;
  pageIndex:any;
  p: any;
  randomImagepath:any;
  searchText:any;

  imagebaseUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face/'
  imageurl = 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib'

  constructor(private service: ServicesService) { }

  async ngOnInit(): Promise<void> {
    await this.upcommingMovi(1);
    
  }

  async upcommingMovi(pageno:number){
    this.service.upComming(pageno).subscribe(
      (value:any) => {
        this.TotalPage = value.total_pages;
        this.upcommingData = value.results;
        let x = Math.floor((Math.random() * 20) + 1);
        this.upcommingData.map((item:any,index:any)=>{
          if(index==x){
            this.randomImagepath=item.poster_path
            console.log('images',this.randomImagepath)
          }
          else{
            console.log('nodata match')
          }
        })
        console.log(value);
      }
    )
  }

  async onPageChange(pageno: number) {
    await this.upcommingMovi(pageno);
    this.pageIndex;
  }


  onClickSearch(){
    
  }

}
