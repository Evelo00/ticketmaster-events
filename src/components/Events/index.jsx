import EvenItem from "./components/Evenitem"
import data from "../../data/events.json"

// console.log(data)

const events = data._embedded.events;

const Events = () => {

    const eventsComponents = events.map((eventItem) => (
        <EvenItem
            key={`event-item-${eventItem.id}`} // `event-item-${eventitem.id}` is a unique key for each event item
            name={eventItem.name}
            info={eventItem.info}
            image={eventItem.images[0].url}
        />
    ));
    return (
        <div>
            <h1>Events</h1>
            {eventsComponents}
        </div>
    )
}

export default Events