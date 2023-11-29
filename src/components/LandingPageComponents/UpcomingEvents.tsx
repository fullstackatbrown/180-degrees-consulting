import { useEffect, useState } from "react";
import { firestore } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import "./styles/UpcomingEventsStyle.css";

type Event = {
  day: string;
  month: string;
  name: string;
  rsvplink: string;
};

function UpcomingEvents() {
  const [events, setEvents] = useState([] as Event[]);
  useEffect(() => {
    getDocs(collection(firestore, "upcoming-events")).then((querySnapshot) => {
      setEvents(
        querySnapshot.docs.map((doc) => {
          const event: Event = {
            day: doc.get("day"),
            month: doc.get("month"),
            name: doc.get("name"),
            rsvplink: doc.get("rsvp-link"),
          };
          return event;
        })
      );
    });
  }, []);

  return (
    <div id="LandingPageUpcomingEvents">
      <h2 id="Heading">UPCOMING EVENTS</h2>
      {events.map((evt) => (
        <div className="eventCard">
          <div className="eventDate">
            <p className="eventDay">{evt.day}</p>
            <p className="eventMonth">{evt.month}</p>
          </div>
          <span className="eventName">{evt.name}</span>
          <span className="rsvpLink">
            <a className="blackLink" href={evt.rsvplink}>
              RSVP Here
            </a>
          </span>
        </div>
      ))}
    </div>
  );
}

export default UpcomingEvents;
