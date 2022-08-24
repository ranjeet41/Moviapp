import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private base_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=321cdf347bce3146c729db059144da60&language=en-US&page=';
  private base_URLS = 'https://api.themoviedb.org/3/search/movie?api_key=321cdf347bce3146c729db059144da60&language=en-US&query='
  constructor(private http: HttpClient) {}

  getData(pageno:number):Observable<any>{
    return this.http.get(this.base_URL + pageno)
  }
  getById(id:number):Observable<any>{
     return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=321cdf347bce3146c729db059144da60&language=en-US`)
  }
   search(data:any){
    return this.http.get(this.base_URLS+data,{
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

//   async getSearchStudyMaterial(entity, key, type, search_text) {
//     let currentUser = await this.authService.getCurrentUser();
//     let params = new HttpParams().set('entity', entity).set('type', type).set('key', key).set('search_text', search_text);
//     return this.http.get(environment.baseUrl + 'search', {
//         headers: new HttpHeaders().set('Authorization', currentUser.token),
//         observe: 'response',
//         params: params
//     });
// }



}
