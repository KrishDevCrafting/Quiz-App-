import React from "react";
import "./Cards.css";
const Cards = () => {
  return (
    <>
      <section className="grand-parent">
        <div className="main-box">
          {/* box-1 */}

          <div class="card card-1">
            <div class="border"></div>
            <div class="content">
              <div class="logo">
                <div class="logo1">
                  <div className="logo2">
                    <h1>InterStellar</h1>
                  </div>
                </div>
                <span class="trail"></span>
              </div>
              <span class="logo-bottom-text">Krish.io</span>
            </div>
            <span class="bottom-text">Space.io</span>
          </div>
          {/* box-1-end */}
          {/* box-2-st */}
          <div class="card card-2">
            <div class="border"></div>
            <div class="content content-2">
              <div class="logo logo-2">
                <div class="logo1">
                  <div className="logo2">
                    <h1>Anime</h1>
                  </div>
                </div>
                <span class="trail"></span>
              </div>
              <span class="logo-bottom-text">Krish.io</span>
            </div>
            <span class="bottom-text">Space.io</span>
          </div>
          {/* box-2-end */}
          {/* box-3-st */}
          <div class="card card-3">
            <div class="border"></div>
            <div class="content content-3">
              <div class="logo logo-3">
                <div class="logo1">
                  <div className="logo2">
                    <h1>Computer Science</h1>
                  </div>
                </div>
                <span class="trail"></span>
              </div>
              <span class="logo-bottom-text">Krish.io</span>
            </div>
            <span class="bottom-text">Space.io</span>
          </div>
          {/* box-3-end */}
        </div>
      </section>
      {/* 
Different line */}
    </>
  );
};

export default Cards;
