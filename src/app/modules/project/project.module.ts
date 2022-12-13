import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { ProjectComponent } from "./components/project/project.component";
import { ViewKanbanComponent } from "./components/view-kanban/view-kanban.component";
import { ViewComponent } from "./components/view/view.component";
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { DevExtremeModule, DxButtonModule, DxPopupModule, DxScrollViewModule, DxSortableModule, DxTemplateModule } from "devextreme-angular";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [
    ProjectComponent,
    ViewComponent,
    ViewKanbanComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild([
      {
        path: '',
        component: SidebarComponent,
        children: [
          {
            path: ":projectId",
            component: ProjectComponent
          }
        ]
      }
    ]),
    DevExtremeModule,
    DxButtonModule,
    DxScrollViewModule,
    DxSortableModule,
    DxPopupModule,
    DxTemplateModule,
    NgxSkeletonLoaderModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
  ],
})
export class ProjectModule { }
