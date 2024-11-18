import { NgModule } from '@angular/core';
import { AppoinmentsComponent } from './appoinments.component';
import { Shared } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AppoinmentsComponent,

  ],
  imports: [
    Shared

  ],
  providers: [],
  bootstrap: []
})
export class AppoinmentsModule { }