import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private allmovi_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=321cdf347bce3146c729db059144da60&language=en-US&page=';
  private search_URLS = 'https://api.themoviedb.org/3/search/movie?api_key=321cdf347bce3146c729db059144da60&language=en-US&query=';
  private  upcomming_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=321cdf347bce3146c729db059144da60&language=en-US&page='
  constructor(private http: HttpClient) {}

  getData(pageno:number):Observable<any>{
    return this.http.get(this.allmovi_URL + pageno)
  }
  getById(id:number):Observable<any>{
     return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=321cdf347bce3146c729db059144da60&language=en-US`)
  }
  search(data:any){
    return this.http.get(this.search_URLS+data,{
      params:{
        action:'query',
        format:'json',
        list:'search',
        srsearch:data,
        origin:'*',
        srlimit:100
      }
    })
  }
  upComming(pageno:number){
    return this.http.get(this.upcomming_URL+pageno)
  }
}
