import React, { Component } from 'react';
import { Badge, Card, CardBody, Button, CardHeader, Col, Row, Table, Pagination, PaginationItem, PaginationLink, } from 'reactstrap';
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

// else {
//   if(error.validationErrors) {
//     throw new SubmissionError(error.validationErrors);
//   }
}

// deleteHandler(i, e) {
//   e.preventDefault();
//   this.props.onDelete(this.props.tickets[i].id);
// };

  render() {
    // console.log('tickets');
    // console.log(this.props.allTickets);
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
        <td><Button  active block color="success" aria-pressed="true">Edit</Button></td>
        </tr>

    ));

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={20}>
          {/* <Col xs="12" sm="12"> */}
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> All TICKETS
              </CardHeader>
              <CardBody>
                {/* <Table responsive hover> */}
                <Table responsive hover bordered striped responsive style={{"fontSize":"10px"}} >
                        <thead>
                        <tr>
                            <th>Id </th>
                            <th>Terminal Id</th>
                            <th>Account No</th>
                            <th>Pan</th>
                            <th>Phone No</th>
                            <th>Transaction Date</th>
                            <th>Amount</th>
                            <th>Channel</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                        </tr>
                  </thead>
                  <tbody>
                    {ticketItems}
                    
                  </tbody>
                </Table>

  {/*           <nav>
                  <Pagination>
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                  </Pagination>
                </nav> */}

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