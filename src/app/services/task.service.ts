import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../model/task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }


  //add task
  addTask(data:Task){
    return this.http.post<Task>("http://localhost:3000/posts",data)
  }


  //get task
  getTask(){
    return this.http.get<Task[]>("http://localhost:3000/posts")
  }
 //delete task
 deleteTask(id:number){
 return this.http.delete<Task>("http://localhost:3000/posts/"+id)
 }
  //fetch data
  fetchData(id:number){
    return this.http.get<Task>("http://localhost:3000/posts/"+id)
  }
  //update data
  updateTask(data:Task,id:number){
return this.http.put<Task>("http://localhost:3000/posts/"+id,data)
  }
  }
 