import { LightningElement, api, wire, track } from 'lwc';
import getDataRecords from '@salesforce/apex/LwcTest.getdata';
/*
            detail: {
                        user1: { id: 1, name: 'sanjay' },
                        user2: { id: 2, name: 'pakhi' }
                    }

            detail : 
            [
                {id : 1, name: 'sanjay'},
                {id : 2, name: 'pakhi'} 
            ]
 */
       
export default class Testscenario extends LightningElement {

    @track datas;
    errors = null;
    
    arr = [1, 2, 3]; // Example array

    data = 
            {
                user1: { id: 1, name: 'sanjay' },
                user2: { id: 2, name: 'pakhi' },
                user3: { id: 3, name: 'Aarav' }
            }

    javaScriptMethodTest(event){
        
        // For Arrays Traversal

        this.arr.map(data => console.log('array Map data ', data)); // map() returns a new array
        this.arr.filter(n => n%2 == 0).forEach(data => console.log('array filter data ', data));
        this.arr.forEach(data => console.log('array for-each data ', data));

        for (let ele of this.arr) { // The for...of loop iterates over the values
            console.log('array data ', ele);
        }

        // for Storing data after traversal
          storeDataArray = [];

            this.arr.forEach(data => {
                console.log('Object data', data); 
                storeDataArray.push(data);  
            });

        // for Storing data after manipulation
        storeDataMap = this.arr.map(data => {
            console.log('array Map data ', data);
            return data;
        });

        // For Object ( //Object.keys(), Object.values(), and Object.entries() convert the object into an array)

        for (let ele in this.data){//The for...in loop iterates over the keys (or indices in the case of an array) of an object or array, not the values.
            console.log('object data ', this.data[ele]);
        }
        
        Object.keys(this.data).forEach(user => console.log('Object data',user))
        Object.values(this.data).forEach(user => console.log('Object data', user))
        Object.entries(this.data).forEach(([key, user]) => { console.log('Object data', key, user) } );

    }
    
    // Sorted 
    sortedData = [
        { id: 3, name: 'Sanjay' },
        { id: 2, name: 'Pakhi' },
        { id: 1, name: 'Aarav' }
    ];

    // Imperative Call Apex
    printData(event){
        console.log(event.target.value);
        getDataRecords().then(response => console.log(response)).catch(error => console.log(error));
    }
    
    // Wire Call Apex
    @wire(getDataRecords)
    wiredData( {error, data} ){
        if(data){
            this.datas = data;
            console.log(this.datas);
        }else if(error){
            this.errors = error;
            console.log(this.errors);
        }
    }

}