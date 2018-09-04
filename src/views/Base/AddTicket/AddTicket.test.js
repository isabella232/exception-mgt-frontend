import React from 'react';
import ReactDOM from 'react-dom';
import AddTicket from './AddTicket';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddTicket />, div);
  ReactDOM.unmountComponentAtNode(div);
});
