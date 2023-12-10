import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";


const contact = () => {
  
  
  return (
    <div>
      <h1>CONTACT</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: "event 1", date: "2023-12-01" },
          { title: "event 32", date: "2023-12-02" },
          { title: "event 2", date: "2023-12-02" },
        ]}
      />
    </div>
  );
};

export default contact;
