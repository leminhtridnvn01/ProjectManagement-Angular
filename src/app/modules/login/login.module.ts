import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DevExtremeModule, DxButtonModule, DxTextBoxModule, DxValidatorModule } from "devextreme-angular";
import { FormLoginComponent } from "./components/form-login/form-login.component";

@NgModule({
  declarations: [
    FormLoginComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: FormLoginComponent,
      }
    ]),
    
    DevExtremeModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxButtonModule,
  ]
})
export class LoginModule { }
