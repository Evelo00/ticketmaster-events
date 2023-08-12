import { useState } from "react";
import EvenItem from "./components/Evenitem";
import eventsJSON from "../../data/events.json";

// console.log(data)

const Events = ({ searchTerm }) => {
  const [data] = useState(eventsJSON);
  const {
    _embedded: { events },
  } = data;

  const handleEventitemclick = (id) => {
    console.log(`Event item with id ${id} was clicked`);
  };

  const renderEvents = () => {
    let eventsFiltered = events;

    if (searchTerm.length > 0) {
      eventsFiltered = eventsFiltered.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return eventsFiltered.map((eventItem) => (
      <EvenItem
        key={`event-item-${eventItem.id}`} // `event-item-${eventitem.id}` is a unique key for each event item
        name={eventItem.name}
        info={eventItem.info}
        image={eventItem.images[0].url}
        onEventClick={handleEventitemclick}
        id={eventItem.id}
      />
    ));
  };
  return (
    <div>
      Eventos
      {renderEvents()}
    </div>
  );
};

export default Events;
