import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseUrl = "https://dev.cleeksy.com";
  constructor(private httpClient: HttpClient) { }

  public getTasksByStage(projectId: number, stageId: number): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${this.baseUrl}/api/work/projects/${projectId}/stages/${stageId}/tasks`);
  }
}
