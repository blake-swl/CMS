import React from 'react';
import "./home.scss";

const Home = () => {
  return(
    <div id="home">
      <div className="home-left">
        <div className="title">
          {/* <div className="title-layer"> */}
          <h1>BLAKE S LEE</h1>
          <p>Software engineer, coffee addict, LeBron James fanatic.</p>
          <button>VISIT WEBSITE</button>
          {/* </div> */}
        </div>
        {/* <div className="description">
          <h3 className="heading">Heading</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="quick-links">

        </div> */}
      </div>
      <div className="home-right">

      </div>
    </div>
  )
};

export default Home;