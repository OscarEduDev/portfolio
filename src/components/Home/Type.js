import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Sitios rápidos en 24h",
          "Diseños personalizados",
          "Landing pages profesionales",
          "Desde sólo $30 USD",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
