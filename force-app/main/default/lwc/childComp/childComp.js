import { api, LightningElement } from 'lwc';

export default class ChildComp extends LightningElement {

    @api 
    message;

    fireEvent(event){

        console.log('event is fired', event.target.label);
        
        const customEvent = new CustomEvent('childevent', {
            detail : 
            [
                {id : 1, name: 'sanjay'},
                {id : 2, name: 'pakhi'} 
            ]
                
        });
    
            this.dispatchEvent(customEvent);
    }
     
        /*
            detail: {
                        user1: { id: 1, name: 'sanjay' },
                        user2: { id: 2, name: 'pakhi' }
                    }
        */
            
}