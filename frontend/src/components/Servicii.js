import React from "react";

import AppNavbar from "./AppNavbar";
import Footer from "./Footer";

function Servicii() {
  return (
    <>
      <AppNavbar />

      <div class="prices">
        <h3>Vopsire</h3>
        <div class="prices__table">
          <p>Vopsire par culoare</p>
          <p>50 Lei</p>
        </div>
        <div class="prices__table">
          <p>Oxigenare</p>
          <p>40 Lei</p>
        </div>
        <div class="prices__table">
          <p>Bla bla</p>
          <p>30 Lei</p>
        </div>
        <div class="prices__table">
          <p>Tra la la</p>
          <p>60 Lei</p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Servicii;
