import React from "react";
import "./sc.css";

const Schedule = () => {
  return (
    <div className="master">
      <div className="schedule_container">
        <div className="dolly">
          <h2 className="sc_title">You're invited to</h2>
          <h1 className="sc">Our Wedding Schedule</h1>

          <div className="sc_grid">
            <div className="sc_sub">
              <h2 className="sc_time      kopy ">01:00 PM</h2>
              <h2 className="event">Ceremony</h2>
            </div>

            <div className="sc_sub">
              <h2 className="sc_time   kopy">After Ceremony</h2>
              <h2 className="event">Photos</h2>
            </div>

            <div className="sc_sub">
              <h2 className="sc_time   kopy">05:30 PM</h2>
              <h2 className="event">Reception</h2>
            </div>

            <div className="sc_sub">
              <h2 className="sc_time   kopy">Evening</h2>
              <h2 className="event">Dinner & Dancing</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
