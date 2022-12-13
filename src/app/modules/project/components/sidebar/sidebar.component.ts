import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectByUser } from '../../models/project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  title = 'project-management';
  isShow = localStorage.getItem('ProjectCollapse');
  projectsByUser: ProjectByUser[] = [];

  constructor(public projectService: ProjectService
    , private router: Router) {
    
  }

  ngOnInit(): void {
    this.fetchProjectByUser()
  }

  fetchProjectByUser() {
    return this.projectService.getProjectByUser().subscribe(
      (response) => {
        this.projectsByUser = response
      }
    );
  }
  onClick(projectId: number) {
    this.router.navigate([`/project/${projectId}`]);
  }
  myAccFunc() {
    let x = document.getElementById("demoAcc");
    if (x?.className) {
      if (localStorage.getItem('ProjectCollapse') === " w3-hide") {
        localStorage.setItem('ProjectCollapse', " w3-show")

        console.log('haha ' + this.isShow)
      }
      else {
        localStorage.setItem('ProjectCollapse', " w3-hide")
        console.log('huhu ' + this.isShow)
      }
      this.isShow = localStorage.getItem('ProjectCollapse');
    }

  }
}
