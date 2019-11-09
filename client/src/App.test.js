import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ReactDOM from 'react-dom';
import App from './App';

afterEach(rtl.cleanup);

test('renders without crashing', () => {
  render(<App />);
});

test('renders search list', ()=> {
  render(document.getElementsByClassName('search-cards'))
});