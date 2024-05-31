import React from "react";
import "./Card2.css";
const Card = () => {
  return (
    <>
      <div className="main-card">
        {/* card-1   */}

        <section>
          <div className="main-1">
            <div class="card card-1">
              <div class="border"></div>
              <div class="content">
                <div class="logo">
                  <div class="logo1">
                    <div className="logo2">
                      <h1>Sport-Car</h1>
                    </div>
                  </div>
                  <span class="trail"></span>
                </div>
                <span class="logo-bottom-text">Krish.io</span>
              </div>
              <span class="bottom-text">Space.io</span>
            </div>
          </div>
        </section>
        {/* End-card-1 */}
        {/* Card-2 */}
        <section>
          <div className="main-1">
            <div class="card card-1">
              <div class="border"></div>
              <div class="content">
                <div class="logo">
                  <div class="logo2">
                    <div className="logo3">
                      <h1>Empty-Space</h1>
                    </div>
                  </div>
                  <span class="trail"></span>
                </div>
                <span class="logo-bottom-text">Krish.io</span>
              </div>
              <span class="bottom-text">Space.io</span>
            </div>
          </div>
        </section>
        {/* card-End-2 */}

        <section>
          {/* Card-3 */}

          <div className="main-1">
            <div class="card card-1">
              <div class="border"></div>
              <div class="content">
                <div class="logo">
                  <div class="logo1">
                    <div className="logo2">
                      <h1>Horror</h1>
                    </div>
                  </div>
                  <span class="trail"></span>
                </div>
                <span class="logo-bottom-text">Krish.io</span>
              </div>
              <span class="bottom-text">Space.io</span>
            </div>
          </div>

          {/* End-card-3 */}
        </section>
      </div>
    </>
  );
};

export default Card;
