const EvenItem = ({ info, name, image}) => {
    return (
        <div className="event-item">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>{info}</p>
        </div>
    )
}

export default EvenItem