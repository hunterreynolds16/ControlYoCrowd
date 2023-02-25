import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';

window.Webflow ||= [];
window.Webflow.push(() => {
  const calendarElement = document.querySelector<HTMLDivElement>('[data-element="calendar"]');
  if (!calendarElement) return;

  const calendar = new Calendar(calendarElement, {
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prevYear prev,next nextYear today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,listWeek',
    },

    events: [
      {
        title: 'BCH237',
        start: '2023-02-12T10:30:00',
        end: '2023-02-13T11:30:00',
        extendedProps: {
          department: 'BioChemistry',
        },
        description: 'Lecture',
      },
    ],

    className: 'testClass',
  });
  calendar.render();
});
