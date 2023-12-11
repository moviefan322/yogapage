import React from "react";
import FullCalendar from "@fullcalendar/react";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

const GoogleCalendar = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, googleCalendarPlugin]}
      initialView="dayGridMonth"
      googleCalendarApiKey={process.env.GOOG_API}
      eventSources={[{ googleCalendarId: process.env.GOOG_CAL }]}
    />
  );
};

export default GoogleCalendar;
