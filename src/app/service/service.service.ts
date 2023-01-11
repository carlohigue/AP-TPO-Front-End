import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

    url='https://api-myprojects-carlohigue.koyeb.app/api/project'

  constructor(private http: HttpClient) { }

  allProjects(): Observable<any>{
    return this.http.get(this.url);
  }

  getProject(id: String): Observable<any>{
    return this.http.get(this.url+'/'+id);
  }

  addProject(project: Project): Observable<any>{
    return this.http.post(this.url, project);
  }

  editProject(id: Number, project: Project): Observable<any>{
    return this.http.put(this.url+'/'+id, project);
  }

  deleteProject(id: Number): Observable<any>{
    return this.http.delete(this.url+'/'+id)
  }
}
