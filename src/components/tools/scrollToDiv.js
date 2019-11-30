import React, { Component } from 'react';
import {executeScroll, reference} from '../tools/scroll2.js';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

export const ref = reference;


export const handleScroll = () => {
	ref.current.scrollIntoViewIfNeeded({
  behavior: 'auto',
  block: 'start',
});



}
