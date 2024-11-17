import { LightningElement, track } from 'lwc';
import {  subscribe, unsubscribe, onError, setDebugFlag, isEmpEnabled } from "lightning/empApi";

//EventBus.publish(new Training_Platform_Event__e(Status_Event__c = 'published data'));

export default class EmpApi extends LightningElement {
    
    @track messageBody = "";
  channelName = "/event/Training_Platform_Event__e";

  isSubscribeDisabled = false;
  isUnsubscribeDisabled = !this.isSubscribeDisabled;

  subscription = {};

  // Tracks changes to channelName text field
  handleChannelName(event) {
    this.channelName = event.target.value;
  }

  // Initializes the component
  connectedCallback() {
    // Register error listener
    this.registerErrorListener();
  }

  // Handles subscribe button click
  handleSubscribe() {
    
    // Callback invoked whenever a new event message is received
    const messageCallback = (response) => {

      this.messageBody = response.data.payload.Status_Event__c;

      console.log("###New message received ", response.data.payload.Status_Event__c);
      // Response contains the payload of the new message received
    };

    // Invoke subscribe method of empApi. Pass reference to messageCallback
    subscribe(this.channelName, -1, messageCallback).then((response) => {
      // Response contains the subscription information on subscribe call
      console.log( "Subscription request sent to: ",JSON.stringify(response.channel) );
      
      this.subscription = response;
      this.toggleSubscribeButton(true);
    });
  }

  // Handles unsubscribe button click
  handleUnsubscribe() {
    this.toggleSubscribeButton(false);

    // Invoke unsubscribe method of empApi
    unsubscribe(this.subscription, (response) => {
      console.log("unsubscribe() response: ", JSON.stringify(response));
      // Response is true for successful unsubscribe
    });
  }

  toggleSubscribeButton(enableSubscribe) {
    this.isSubscribeDisabled = enableSubscribe;
    this.isUnsubscribeDisabled = !enableSubscribe;
  }

  registerErrorListener() {
    // Invoke onError empApi method
    onError((error) => {
      console.log("Received error from server: ", JSON.stringify(error));
      // Error contains the server-side error
    });
  }
}