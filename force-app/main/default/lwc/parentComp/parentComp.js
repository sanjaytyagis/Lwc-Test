import { LightningElement } from 'lwc';

export default class ParentComp extends LightningElement {
    
    msg = 'Sanjay Here!';

    receiveParentData(event){
        console.log('received data in Parent', event.detail);
        console.log('received data in Parent', JSON.stringify(event.detail));
    }
}