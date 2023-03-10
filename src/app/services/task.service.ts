import { Injectable } from '@angular/core';
import {Observable,of} from "rxjs";
import {Task} from "../components/Task";
import {MockTask} from "../components/mock-task";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks'
  constructor(private http:HttpClient) { }

  getTasks():Observable<Task[]> {
     return this.http.get<Task[]>(this.apiUrl);

  }
}
