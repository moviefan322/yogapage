import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

const Calendar = () => {
  const handleEventClick = (info: any) => {
    // Prevent default behavior on event click
    info.jsEvent.preventDefault();
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, googleCalendarPlugin]}
      initialView="dayGridMonth"
      eventClick={handleEventClick}
      googleCalendarApiKey={process.env.NEXT_PUBLIC_GOOG_API}
      eventSources={[{ googleCalendarId: process.env.NEXT_PUBLIC_GOOG_CAL }]}
    />
  );
};

export default Calendar;
