import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project, ProjectByUser, ProjectInfo } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseUrl = "https://dev.cleeksy.com";
  constructor(private httpClient: HttpClient) { }

  public getProject(projectId: number): Observable<ProjectInfo> {
    return this.httpClient.get<ProjectInfo>(`${this.baseUrl}/api/work/projects/${projectId}/info`);
  }

  getProjectByUser(): Observable<any> {
    return this.httpClient.get<ProjectByUser[]>(`${this.baseUrl}/api/work/projects/projects-by-user`)
  }
}
