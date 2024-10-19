import React from 'react';

const Details = ({ genre, status }) => {
  return (
    <div className="details">
      <p>{genre}</p>
      <p>vivo:{status}</p>
    </div>
  );
};

export default Details;
