import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: any;
  items = [
    {
      name: 'Tổng quan'
    },
    {
      name: 'Công việc'
    },
    {
      name: 'Tài liệu'
    },
    {
      name: 'Biểu mẫu'
    }
  ]
  constructor(private projectsService: ProjectService
    , private readonly activateRoute: ActivatedRoute
    , private router: Router) {


    let projectId = this.activateRoute.snapshot.params['projectId'];
    if (this.router.events) {
      this.router.events
        // .pipe(filter((e) => e instanceof NavigationEnd))
        .subscribe((e) => {
          if (e instanceof NavigationEnd) {
            const projectId = this.activateRoute.snapshot.params['projectId'];
            this.fetchProject(projectId);
          }
        });
    }
    else {
      this.fetchProject(projectId);
    }

  }
  ngOnInit(): void {
    const projectId = this.activateRoute.snapshot.params['projectId'];
    this.fetchProject(projectId);

  }

  fetchProject(projectId: number) {
    return this.projectsService.getProject(projectId).subscribe(
      (response) => {
        // this._project.next(response);
        this.project = response;

      },
      (error) => {
        console.error(error);
      }
    );
  }

  showInfo() {
    alert('Inside Angular Component method');
  }
}
