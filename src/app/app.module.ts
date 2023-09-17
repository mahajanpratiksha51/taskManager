import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
import { FilterPipe } from './filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    UpdateComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule,
  ReactiveFormsModule ,
  HttpClientModule,
  NgxPaginationModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
