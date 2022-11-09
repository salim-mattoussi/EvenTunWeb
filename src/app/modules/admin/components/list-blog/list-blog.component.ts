import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/components/model/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.css']
})
export class ListBlogComponent implements OnInit {
  public title: string;
  public list: Blog[];
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getAllBlog().subscribe(
      (data:Blog[])=>{this.list=data}
   );
  }

  deleteBlog(blog:Blog) {
    let i= this.list.indexOf(blog);
    if(i!=-1){
      //cnx to backend service/api
      this.blogService.deleteBlog(blog.id).subscribe(
        ()=> this.list.splice(i,1)
      )

    }
  }
  updateBlog(){

  }


}
