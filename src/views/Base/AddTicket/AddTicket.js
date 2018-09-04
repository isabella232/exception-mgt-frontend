import React, { Component } from 'react';
import './addticket.css'
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';
import { connect } from 'react-redux';
import { createTicket } from '../../../Actions/TicketAction';
import PropTypes from 'prop-types';

class AddTicket extends Component {
  // constructor(props) {
  //   super(props);

  //   this.toggle = this.toggle.bind(this);
  //   this.toggleFade = this.toggleFade.bind(this);
  //   this.state = {
  //     collapse: true,
  //     fadeIn: true,
  //     timeout: 300
  //   };
  // }

  // toggle() {
  //   this.setState({ collapse: !this.state.collapse });
  // }

  // toggleFade() {
  //   this.setState((prevState) => { return { fadeIn: !prevState }});
  // }

  constructor(props){
    super(props);
    this.state = {
        terminalId:'',
        accountNo: '',
        pan: '',
        phoneNumber: '',
        transactionDate: '',
        amount: '',
        channel:'',
        createdAt:'',
        updatedAt:''
        
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}
onChange(e){
    this.setState({ [e.target.name] : e.target.value});
}
onSubmit(e){
    e.preventDefault();
     return alert('submitted');
    const ticket = {
        terminalId:this.state.terminalId,
        accountNo:this.state.accountNo ,
        pan:this.state.pan,
        phoneNumber:this.state.phoneNumber,
        transactionDate:this.state.transactionDate,
        amount: this.state.amount, 
        channel:this.state.channel,
        createdAt:this.state.createdAt,
        updatedAt:this.state.updatedAt

         
    }
  
    // database.push(ticket);
    //callaction
    this.props.createTicket(ticket);
} 

  render() {
    return (
      <div className="animated fadeIn">
        <Row className="ticket">
          <Col  md="8">
          {/* <Col xl={50}> xs="12" sm="12" md="12"*/}
            <Card>
              <CardHeader>
                <strong>CREATE TICKET</strong>
              </CardHeader>
              <CardBody >
                <form onSubmit={this.onSubmit}>
                <FormGroup  >
                  <Label htmlFor="account">Account Number</Label>
                  <Input md="8" type="text" id="account" placeholder="Enter your Account Number" name="accountNo"  value={this.state.accountNo} onChange={this.onChange} />
                  <FormFeedback valid>Sweet! that name is available</FormFeedback>
                   <FormText>Must be 10 digits(e.g 2058737518).</FormText>
                </FormGroup>
                <FormGroup >
                  <Label htmlFor="pan">PAN</Label>
                  <Input md="8" type="text" id="pan" placeholder="5344xxxxxxxxxxxxxx1412" name="pan" value={this.state.pan} onChange={this.onChange} />
                </FormGroup>
                <FormGroup >
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input md="8" type="text" id="phone" placeholder="Enter Phone Number" name="phoneNumber" value={this.state.phoneNumber} onChange={this.onChange}/>
                </FormGroup>
                <FormGroup md="8">
                      <Label htmlFor="Transaction">Transaction Date</Label>
                      <Input type="date" id="Transaction" placeholder="date"name="transactionDate" type="Date" value={this.state.transactionDate} onChange={this.onChange} />
                </FormGroup>
                <FormGroup md="8">
                      <Label htmlFor="amount">Amount</Label>
                      <Input type="text" id="amount" placeholder="Amount" name="amount" value={this.state.amount} onChange={this.onChange} />
                </FormGroup>
                <FormGroup md="8">
                      <Label htmlFor="channel">Channel</Label>
                      <Input type="select" name="select" id="select" >
                        <option value="0">Please select</option>
                        <option value={this.state.channel} onChange={this.onChange}>ATM</option>
                        <option value={this.state.channel} onChange={this.onChange}>ONLINE</option>
                      </Input>
                </FormGroup>
                <FormGroup md="8">
                  <Label htmlFor="Terminal">Terminal ID</Label>
                  <Input type="text" id="Terminal" placeholder="Enter Your Terminal ID" name="terminalId" value={this.state.terminalId} onChange={this.onChange} />
                </FormGroup>
                
                <Button md='4' active centered color="success" aria-pressed="true" >SUBMIT</Button>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
AddTicket.propTypes = {
  createTicket: PropTypes.func.isRequired,
 
};

export default connect(null, {createTicket})(AddTicket);

