import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskDetail } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit, OnDestroy {
  private _taskId: any;
  get taskId() {
    return this.taskId;
  }
  @Input()
  set taskId(value: any) {
    this._taskId = value;
    this.fetchTaskDetail(this._taskId)
  }
  @Output() closeTaskDetail = new EventEmitter();
  currentTask: TaskDetail = new TaskDetail();
  previousURL = "";

  popupVisible: any;

  doneButtonOptions: any;
  constructor(private router: Router
    , private readonly activateRoute: ActivatedRoute
    , public taskService: TaskService) {
    this.popupVisible = true;
    this.doneButtonOptions = {
      text: 'Hoàn thành',
      onClick(e: any) {
      }
    };

  }
  ngOnDestroy(): void {
    this.closeTaskDetail.emit(false);

  }
  ngOnInit(): void {

  }

  fetchTaskDetail(id: any) {
    const projectId = this.activateRoute.snapshot.params['projectId'];
    return this.taskService.getTaskDetail(projectId, id).subscribe(
      (response) => {
        this.currentTask = response
      },
      (error) => {
        console.error(error);
      }
    );
  }

  close() {
    this.popupVisible = false;
    this.closeTaskDetail.emit(false);

  }

  showInfo(employee: any) {
    this.popupVisible = true;
  }
}
