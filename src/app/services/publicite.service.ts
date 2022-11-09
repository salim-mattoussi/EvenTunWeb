import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publicite } from '../components/model/publicite';

@Injectable({
  providedIn: 'root'
})
export class PubliciteService {
  url='  http://localhost:3000/Publicite'

  constructor(private httpService : HttpClient) { }

   //form the backend Side
 getAllPublicite(){
  return this.httpService.get<Publicite[]>(this.url)
}
addPublicite(publicite: Publicite){
  return this.httpService.post(this.url,publicite)
}
deletePublicite(id:number){
  return this.httpService.delete(this.url+id)
}

}
