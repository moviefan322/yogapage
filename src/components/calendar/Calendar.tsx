import React, { useRef, useEffect } from "react";
import Calendar from "@fullcalendar/react";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

const MyCalendar = () => {
    const calendarRef = useRef<any>(null);

    useEffect(() => {
      if (calendarRef.current) {
        const calendarApi = calendarRef.current.getApi();

        calendarApi.addPlugin(googleCalendarPlugin);
        calendarApi.setOption("googleCalendarApiKey", "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");

        calendarApi.addEventSource({
          googleCalendarId: "swampermovie@group.calendar.google.com",
          color: "blue", // Customize the color of events from this calendar
          textColor: "white", // Customize the text color of events
        });
      }
    }, []);

  return (
    <div>
      <h1>Google Calendar Integration</h1>
      <Calendar
        ref={calendarRef}
        plugins={[googleCalendarPlugin]}
        initialView="dayGridMonth"
        // Add other calendar options as needed
      />
    </div>
  );
};

export default MyCalendar;
