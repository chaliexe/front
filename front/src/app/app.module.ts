import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { CalendarComponent } from './calendar/calendar.component';
import { AppComponent } from './app.component';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import { HomeComponent } from './home/home.component';
import { ShiftComponent } from './shift/shift.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    HomeComponent,
    ShiftComponent
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
