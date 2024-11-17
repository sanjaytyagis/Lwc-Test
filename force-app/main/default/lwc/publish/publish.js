import { LightningElement, api, wire, track } from 'lwc';
import { publish, MessageContext } from "lightning/messageService";
import MESSAGE_CHANNEL from '@salesforce/messageChannel/TestMsgChannel__c';

export default class Publish extends LightningElement {

    @api 
    firstName;
    @api 
    lastName;

    @wire(MessageContext)
    messageContext;

    handlefirstName(event){
        this.firstName = event.target.value;
    }
    handlelastName(event){
        this.lastName = event.target.value;
    }
    handleClick(){
        const messaage = {
            firstName: this.firstName,
            lastName: this.lastName
          };
        
          publish(this.messageContext, MESSAGE_CHANNEL, messaage);  
    }


}