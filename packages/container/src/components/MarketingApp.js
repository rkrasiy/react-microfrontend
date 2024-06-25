import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const anchorEl = useRef(null);
  
  useEffect(()=>{
    if(anchorEl) {
      mount(anchorEl.current);
    }
  }, []);

  return <div ref={anchorEl}></div>;
}