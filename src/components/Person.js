import React from "react";

const Person = ({ firstName, lastName, img, email, city, cell }) => {
  return (
    <div className="tc bg-light-green br3 pa3 ma2 grow bw2 shadow-5">
      <img
        className="br3"
        alt="person"
        src={img}
        srcSet={img + " 1x, "}
        sizes="50vw"
      />
      <div>
        <h2>
          {firstName} {lastName}
        </h2>
        <h3>City:{city}</h3>
        <p>Email:{email}</p>
        <p>Phone:{cell}</p>
      </div>
    </div>
  );
};

export default Person;
