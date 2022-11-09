import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../components/model/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  url='http://localhost:3000/blogs'
  constructor(private httpService: HttpClient) { }

  //form the backend Side
  getAllBlog(){
    return this.httpService.get<Blog[]>(this.url);
  }
  addBlog(blog: Blog){
    return this.httpService.post(this.url,blog);
  }
  deleteBlog(id:number){
    return this.httpService.delete(this.url+id);
  }
 
}
