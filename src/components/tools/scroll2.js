import React, { Component } from 'react';
export var Scrolled = true; 
export const reference = React.createRef();
const scrollToRef = () => 
reference.current.scrollIntoView({
  behavior: 'smooth',
  block: 'start',
}); 


export const executeScroll = () => scrollToRef(reference);
Scrolled = false;

