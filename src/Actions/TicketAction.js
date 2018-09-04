import {All_Tickets, Create_Ticket, Find_Ticket, Update_Ticket, Delete_Ticket} from "./types"

export const allTickets = () => (dispatch) => {
	console.log('fetching...')
	fetch('http://localhost:8080/tickets?page=0&size=1sort=id')
	.then(res=>res.json())
	.then(tickets=>dispatch({
		type:All_Tickets,
		payload:tickets
	}));
}

export const createTicket = (ticketData) => (dispatch) => {
	console.log('action called');
	fetch('http://localhost:8080/tickets', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(ticketData)
        })
        .then(res=>res.json())
        .then(ticket=>dispatch({
			type:Create_Ticket,
			payload:ticket
		}));
}

export const findTicket= (id)=>(dispatch) => {
	fetch('http://localhost:8080/tickets/' + id, {
		method: 'GET',
		mode: 'CORS'
	}).then(res =>res.json())
	.then(ticket=>dispatch({
		type:Find_Ticket,
		payload:ticket
	})).catch(err => err);
}

export const updateTicket = (id, data) =>(dispatch) => {
    fetch('http://localhost:8080/tickets/' + id, {
        method: 'PUT',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
	}).then(ticket=>dispatch({
		type:Update_Ticket,
		payload:ticket
	})).catch(err => err);
}


