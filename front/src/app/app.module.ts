import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { CalendarComponent } from './calendar/calendar.component';
import { AppComponent } from './app.component';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    CalendarComponent,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
