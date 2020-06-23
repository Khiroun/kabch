import React from "react";
import { sheep } from "../mocks";

const Preview = () => {
  return (
    <div className="preview-container">
      <div className="preview">
        <h2>Chouf</h2>
        <div className="cards">
          {sheep.map((sh, i) => {
            return (
              <div className="card" key={"sheep-" + i}>
                <img src={sh.image} alt="Sheep" />
                <h4>{sh.price} da</h4>
                <p>
                  {sh.wilaya}, {sh.ageCat}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Preview;
