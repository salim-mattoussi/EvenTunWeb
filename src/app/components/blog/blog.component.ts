import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { PubliciteService } from 'src/app/services/publicite.service';
import { Blog } from '../model/blog';
import { Publicite } from '../model/publicite';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public list: Blog[];
  public blig: Blog;
  public liste: Publicite[];
  constructor(private blogService: BlogService , 
    private publiciteService: PubliciteService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.blogService.getAllBlog().subscribe(
      (data:Blog[])=>this.list=data
   );

   this.publiciteService.getAllPublicite().subscribe(
    (data:Publicite[])=>{this.liste=data}
 );

  }

}
