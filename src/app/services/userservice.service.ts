import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private apiUrl="http://localhost:8080/api/v1/client";
  constructor(private httpclient:HttpClient) { }


  public getClients():Observable<user[]>{
    return this.httpclient.get<user[]>(`${this.apiUrl}`);
  }

  public createClient(user:user): Observable<user>{
    return this.httpclient.post<user>(`${this.apiUrl}`, user);
  }
  
  public getClientById(id:number):Observable<user>{
    return this.httpclient.get<user>(`${this.apiUrl}/${id}`);
  }
public UpdateClient(id:number,user:user): Observable<Object>{
  return this.httpclient.put(`${this.apiUrl}/${id}`, user);
}

public deleteClient(id:number):Observable<Object>{
  return this.httpclient.delete(`${this.apiUrl}/${id}`);
}

public getClientss(){
  return this.httpclient.get(`${this.apiUrl}`);
}

}
