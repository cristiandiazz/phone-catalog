import React from "react";
import PropTypes from "prop-types";
import PhoneDetails from "./PhoneDetails";

const PhoneCard = ({ phone }) => {
  const { name, manufacturer, price } = phone;

  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{manufacturer}</li>
        <li>{price}</li>
      </ul>
      <PhoneDetails phone={phone} />
    </div>
  );
};

PhoneCard.propTypes = {
  phone: PropTypes.object,
};

export default PhoneCard;
