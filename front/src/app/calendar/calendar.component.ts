import { Component,OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/daygrid';
import interactionGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es'


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit{

  public events: any[];
  public options:any;

  constructor() {}

  ngOnInit() {

      this.options = {
      plugins: [dayGridPlugin,timeGridPlugin,interactionGridPlugin],
      default : new Date(),
      locale: esLocale,
      header:{
      left:'prev,next',
      center:'title',
      rigth:'dayGridMonth,timeGrideWeek, timeGridDay'
      },
      editable: false 
    }
      this.events = [
        { 
          title: "Evento 1",
          start: new Date(),
          descripcion: "Evento 1"
        },
        {
          title: "Evento 2",
          start: new Date(),
          descripcion: "Evento 2"
        },
      ]
  }
}
