import React from "react";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";

const PhoneDetails = ({ phone }) => {
  const {
    id,
    name,
    manufacturer,
    description,
    color,
    price,
    imageFileName,
    screen,
    processor,
    ram,
  } = phone;
  return (
    <Popup
      trigger={<button className="button"> {name}Details </button>}
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> {name} </div>
          <div className="content">
            <div>{manufacturer}</div>
            <div>{description}</div>
            <div>{color}</div>
            <div>{price}</div>
            <div>{screen}</div>
            <div>{processor}</div>
            <div>{ram}</div>
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                close();
              }}
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

PhoneDetails.propTypes = {
  phone: PropTypes.object,
};

// PhoneDetails.propTypes = {
//   id: PropTypes.Number,
//   name: PropTypes.String,
//   manufacturer: PropTypes.String,
//   description: PropTypes.String,
//   color: PropTypes.String,
//   price: PropTypes.Number,
//   imageFileName: PropTypes.String,
//   screen: PropTypes.String,
//   processor: PropTypes.String,
//   ram: PropTypes.Number,
// };

export default PhoneDetails;
