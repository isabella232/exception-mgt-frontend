import React, { Component } from 'react';
import { Badge, Button, Card, CardBody, CardHeader, Col,  Row, Table,  InputGroup, InputGroupText, InputGroupAddon, Input  } from 'reactstrap';
import { findTicket } from '../../../Actions/TicketAction';
import {connect} from 'react-redux'

class FindTicket extends Component {
  constructor(props){
		super(props);
		this.state={
			id:''
    };
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange = (event)=>{
    console.log('you typed', event.target.value);
    this.setState({ [event.target.name] : event.target.value});
    
  }

  onSubmit(e){
    e.preventDefault();
    const ticket = {
        id:this.state.id
    };
    findTicket(ticket.id)
    return alert('submitted');
    
    
  }

  render() {
    return (
      <div>
        <form >
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Search by Id</InputGroupText>
        </InputGroupAddon>
        <Input name="search" name="id" value={this.state.id} onChange={this.handleInputChange} />
        <Button md='4' active centered color="success" aria-pressed="true"  onClick={(e) => this.onSubmit(e)} >SUBMIT</Button>
      </InputGroup>
      <br /> 
      </form>        
        </div>  
    );
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//       onSubmit: (e) => {
//           dispatch(onClick(id)) // Need the input v alue here
//       }
//   }
// }

const mapStateToProps = (state) => {
  return {
    id: state.id,
  };
};

export default connect(mapStateToProps,{findTicket}) (FindTicket);
