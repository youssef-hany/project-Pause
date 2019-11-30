import React, { Component } from 'react';
import {executeScroll, reference, Scrolled} from '../tools/scroll2.js';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

export const ref = reference;


export const handleScroll = () => {
	
	const ScrollFunc = ref.current.scrollIntoViewIfNeeded({
  behavior: 'auto',
  block: 'start',
});
	AwesomeDebouncePromise(ScrollFunc , 500);
}




  

