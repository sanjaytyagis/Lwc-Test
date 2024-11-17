import { LightningElement, wire } from 'lwc';
import { subscribe, MessageContext } from "lightning/messageService";
import MESSAGE_CHANNEL from '@salesforce/messageChannel/TestMsgChannel__c';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class Subscribe extends LightningElement {

    subscription = null;

    @wire(MessageContext)
    messageContext;

    myfirstName = '';
    mylastName  = '';

    connectedCallback() {
        this.handleSubscribe();
    }

    handleSubscribe() {
        if (this.subscription) {
            return;
        }
        this.subscription = subscribe(this.messageContext, MESSAGE_CHANNEL, (message) => {
        this.myfirstName = message.firstName;
        this.mylastName = message.lastName;
        this.ShowToast('Success', 'Data Transfer Successfully', 'success', 'dismissable');
        });
    }

    ShowToast(title, message, variant, mode){
        const evt = new ShowToastEvent({
            title: title,
            message:message,
            variant: variant,
            mode: mode
        });
        this.dispatchEvent(evt);
    }
}