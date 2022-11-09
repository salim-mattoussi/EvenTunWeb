import { Component, OnInit } from '@angular/core';
import { Publicite } from 'src/app/components/model/publicite';
import { PubliciteService } from 'src/app/services/publicite.service';

@Component({
  selector: 'app-list-publicite',
  templateUrl: './list-publicite.component.html',
  styleUrls: ['./list-publicite.component.css']
})
export class ListPubliciteComponent implements OnInit {
  public liste: Publicite[];
  constructor(private publiciteService: PubliciteService) { }

  ngOnInit(): void {
    this.publiciteService.getAllPublicite().subscribe(
      (data:Publicite[])=>{this.liste=data}
   );
  }

  deletePublicite(publicite:Publicite) {
    let i= this.liste.indexOf(publicite);
    if(i!=-1){
      //cnx to backend service/api
      this.publiciteService.deletePublicite(publicite.id).subscribe(
        ()=> this.liste.splice(i,1)
      )
  
    }
  }
    updatePublicite(){

    }

}
