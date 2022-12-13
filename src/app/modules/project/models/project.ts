import { Stage } from "./stage";
import { Member } from "./user";

export class Project {
    createdOn: string = '';
    icon: any;
    id: number = 0;
    isAllowSprintManagement: boolean = false;
    isRenderCategory: boolean = false;
    isShared: boolean = true;
    name: string = "";
    projectTypeId: number = 0;
    slug: string = "";
}

export class ProjectInfo {
    members: Member[] = [];
    project: Project = null as unknown as Project;
    stages: Stage[] = [];
}

export class ProjectByUser {
    id: number = 0  ;
    name: string = '';
    totalRows: number = 0;
    description: string ='';
}