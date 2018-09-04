import React from 'react';
import ReactDOM from 'react-dom';
import FindTicket from './FindTicket';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cards />, div);
  ReactDOM.unmountComponentAtNode(div);
});
