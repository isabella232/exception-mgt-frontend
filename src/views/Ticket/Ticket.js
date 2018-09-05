 import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { allTickets } from '../../Actions/TicketAction';
// import usersData from './UsersData'

// function UserRow(props) {
//   const user = props.user
//   const userLink = `#/users/${user.id}`

//   const getBadge = (status) => {
//     return status === 'Active' ? 'success' :
//       status === 'Inactive' ? 'secondary' :
//         status === 'Pending' ? 'warning' :
//           status === 'Banned' ? 'danger' :
//             'primary'
//   }

//   return (
//     <tr key={user.id.toString()}>
//         <th scope="row"><a href={userLink}>{user.id}</a></th>
//         <td><a href={userLink}>{user.name}</a></td>
//         <td>{user.registered}</td>
//         <td>{user.role}</td>
//         <td><Badge href={userLink} color={getBadge(user.status)}>{user.status}</Badge></td>
//     </tr>
//   )
// }

class Ticket extends Component {
  
  componentWillMount(){
    this.props.allTickets();
    
}
componentWillReceiveProps(nextProps){
    if(nextProps.createTicket){
        this.props.tickets.push(nextProps.createTicket);
    }
}

  render() {


    const ticketItems = this.props.tickets.map(ticket =>(
        <tr  key={ticket.id}>
        <td> {ticket.id}</td>
        <td> {ticket.terminalId}</td>
        <td> {ticket.accountNo}</td>
        <td> {ticket.pan}</td>
        <td> {ticket.phoneNumber}</td>
        <td>{ticket.transactionDate}</td>
        <td>{ticket.amount}</td>
        <td>{ticket.channel}</td>
        <td>{ticket.createdAt}</td>
        <td>{ticket.updatedAt}</td>
        </tr>

    ));

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={20}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> TICKETTING APP TICKETS
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">Acct No</th>
                      <th scope="col">PAN</th>
                      <th scope="col">Phone Number</th>
                      <th scope="col">Transaction Date</th>
                      <th scope="col">Ammount</th>
                      <th scope="col">Channel</th>
                      <th scope="col">Terminal ID</th>
                      <th scope="col">Log Date</th>
                      <th scope="col">Ticket ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ticketItems}
                    
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
Ticket.propTypes = {
  allTickets: PropTypes.object.isRequired,
  tickets: PropTypes.func.isRequired,
  createTicket:PropTypes.object

}

const mapStateToProps = state =>({
  
  tickets:state.tickets.items,
  createTicket:state.tickets.item
});

// export default Users;
export default connect(mapStateToProps, {allTickets})(Ticket);