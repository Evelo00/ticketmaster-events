const EvenItem = ({ info, id, name, image, onEventClick }) => {

    const handleSeeMoreClick = (eve) => {
        //detener la propagacion del evento
        eve.stopPropagation();
        onEventClick(id);
    };

  return (
    <div className="event-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{info}</p>
      <button onClick={handleSeeMoreClick}>Ver más</button>
    </div>
  );
};

export default EvenItem;
