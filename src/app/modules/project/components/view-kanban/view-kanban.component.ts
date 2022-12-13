import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {
  enableProdMode,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-view-kanban',
  templateUrl: './view-kanban.component.html',
  styleUrls: ['./view-kanban.component.css'],
  preserveWhitespaces: true,
})
export class ViewKanbanComponent {
  tasks: any;

  private _stages: any;
  get stages() {
    return this._stages;
  }
  @Input()
  set stages(value: any) {
    this._stages = value;
    const projectId = this.activateRoute.snapshot.params['projectId'];
    this._stages?.forEach((stage: any) => {
      this.fetchTasks(projectId, stage.id).pipe().subscribe( (response) => {
        this.tasks.set(stage.id, response ? response : []);
        if (response?.length > 0) {
          this.taskLoaded = false
        }
      })
    })
  }
  
  taskDetail: boolean = false;
  taskLoaded = true;
  currentTaskId: any;
  constructor(public projectComponent: ProjectComponent,
     public taskService: TaskService, 
     private readonly activateRoute: ActivatedRoute,
     private router: Router) {
    setTimeout(() => {
      this.taskLoaded = false;
    }, 4000)
  }

  getTaskDetail(id: any){
    const currentUrl = this.router.url;
    this.currentTaskId = id;
    this.taskDetail = true
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.tasks = new Map();
  }
  ngOnInit() {

  }

  fetchTasks(projectId: number, stageId: number) {
    return this.taskService.getTasksByStage(projectId, stageId)
  }

  closeTaskDetail(event: any) {
    this.taskDetail = false;
  }
  onListReorder(e: any) {
    const list = this.stages.splice(e.fromIndex, 1)[0];
    this.stages.splice(e.toIndex, 0, list);
  }

  onTaskDragStart(e: any) {
    e.itemData = e.fromData[e.fromIndex];
  }

  onTaskDrop(e: any) {
    e.fromData.splice(e.fromIndex, 1);
    e.toData.splice(e.toIndex, 0, e.itemData);
  }
}
