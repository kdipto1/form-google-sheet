import React from 'react';
import Particles from "react-particles";
import particlesConfig from './Config/particles-config.js';

const ParticlesBackground = () => {
  return (
    <div>
      <Particles params={particlesConfig}></Particles>
    </div>
  );
};

export default ParticlesBackground;