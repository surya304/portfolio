import React, { useEffect, useRef } from 'react';
import animationData from './Elim5_website_Minibots_Change_the_Narrative_V1.json';

const Test = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    if (animationContainer.current) {
      const lottie = window.lottie;
      lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div ref={animationContainer} style={{ width: 400, margin: '0 auto' }}></div>
    </div>
  );
};

export default Test;