export class Task {
    id: string = '';
    index: number = 0;
    name: string = '';
    isDoneable: boolean = false;
    stageId: number = 0;
    status: number = 0;
    todoId: number = 0;
    totalTodo: number = 0;
    totalTodoItem: number = 0;
    totalTodoItemIsDone: number = 0;
}

export class TaskDetail {
    id: number = 0;
    name: string = "";
    slug: string = "";
    status: number = 0;
    index: number = 0;
    finishDate: Date = new Date();
    isHasComment: boolean = false;
    labelIds = [];
    totalAttachment: number = 0;
    totalComment: number = 0;
    totalForm: number = 0;
    totalNote: number = 0;
}