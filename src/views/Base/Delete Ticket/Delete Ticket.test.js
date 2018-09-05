import React from 'react';
import ReactDOM from 'react-dom';
import DeleteTicket from './DeleteTicket';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DeleteTicket />, div);
  ReactDOM.unmountComponentAtNode(div);
});
