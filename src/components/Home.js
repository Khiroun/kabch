import React from "react";
import sheepImg from "../images/sheep.png";

const Home = () => {
  return (
    <section className="home">
      <div className="showcase">
        <h2>Mabrouk l3yada</h2>
        <img src={sheepImg} alt="Sheep" />
        <p>Achri kebchek men darek w farah lmra w drari</p>
      </div>
    </section>
  );
};

export default Home;
