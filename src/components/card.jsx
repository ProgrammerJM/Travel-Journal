import React from 'react';
import '../styles/cards.css';

export default function Card(props) {
  return (
    <div className="cards">
      <img src={props.item.imageURL} className="image" />
      <div className="description">
        <div className="header">
          <img src="/images/location.png" className="location-icon" />
          <span className="location">{props.item.location}</span>
          <a href={props.item.googleMapsLink} className="view" target="_blank">
            View on Google Maps
          </a>
        </div>
        <h1 className="title">{props.item.Title}</h1>
        <br></br>
        <span className="date">
          {props.item.startDate} - {props.item.endDate}
        </span>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
}
