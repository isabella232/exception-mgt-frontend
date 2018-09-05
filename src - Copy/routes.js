import React from 'react';
import Loadable from 'react-loadable'
import ReactDOM from 'react-dom';
// import Ticket from './views/Ticket/Ticket';
// import TicketForm from './components/Tickets/TicketForm';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
// import {createStore, applyMiddleware} from 'redux';
import store from './store';

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const AddTicket = Loadable({
  loader: () => import('./views/Base/AddTicket'),
  loading: Loading,
});

// const UpdateTicket = Loadable({
//   loader: () => import('./views/Base/UpdateTicket'),
//   loading: Loading,
// });

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});

const Ticket = Loadable({
  loader: () => import('./views/Base/Ticket'),
  loading: Loading,
});

const FindTicket = Loadable({
  loader: () => import('./views/Base/FindTicket/FindTicket'),
  loading: Loading,
});


// const Ticket = Loadable({
//   loader: () => import('./views/Ticket/Ticket'),
//   loading: Loading,
// });

// const User = Loadable({
//   loader: () => import('./views/Users/User'),
//   loading: Loading,
// });


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/base', exact: true, name: 'Base', component: Ticket },
  // { path: '/base/updateTicket', name: 'UpdateTicket', component: UpdateTicket },
  { path: '/base/addticket', name: 'AddTicket', component: AddTicket },
  { path: '/base/Ticket', exact: true,  name: 'Ticket', component: Ticket },
  { path: '/base/findTicket', exact: true,  name: 'FindTicket', component: FindTicket },
  // { path: '/base/findTicket/:id', exact: true,  name: 'FindTicket', component: FindTicket },
  // { path: '/Ticket/:id', exact: true, name: 'User Details', component: User },
];
// const routes2 =
// <Provider store={store}>
// 	 <BrowserRouter>
// 	 <div>
// 		 <Route path={"/base/Ticket"}  name={Ticket}  exact component={Ticket} />
//      <Route path={"/"}   exact component={DefaultLayout} />
//      <Route path={"/dashboard"}  name={Dashboard}  exact component={Dashboard} />
//      <Route path={"/base/addticket"}  name={AddTicket}  exact component={AddTicket} />
//      {/* <Route path={"/Tickets"}  name={Ticket}  exact component={Ticket} /> */}
		
// 		 </div>
// 	 </BrowserRouter>
// 	 </Provider>
export default routes;

