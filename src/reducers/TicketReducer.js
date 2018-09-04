import {All_Tickets, Create_Ticket, Find_Ticket, Delete_Ticket} from '../Actions/types';

const initialState = {
    //represents the list of tickets we get
    // page:{},
    items:[],
    //represents the single ticket we add
    item:{},
    //reps the single ticket gotten
    ticket:{}
   
};

export default function(state = initialState, action) {
    switch(action.type){
        case All_Tickets: 
            // console.log('state is');
            // console.log(action.payload);
            // console.log(action.payload.content)
            // return (action.payload.content)
            console.log(state.items);
            return{
                ...state,
                items:action.payload.content    
            };
           
        case Create_Ticket:
        return{
            ...state,
            item:action.payload
        };

        case Find_Ticket:
        return{
            ...state,
            ticket:action.payload
        };
        default:
        return state;
    }
}