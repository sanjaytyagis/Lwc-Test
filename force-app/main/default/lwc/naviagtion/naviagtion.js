import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

/*
In Lightning Web Components (LWC), navigation is typically handled using the NavigationMixin. 
This mixin allows you to navigate between different pages, records, or external links within Salesforce.
*/

export default class Naviagtion extends NavigationMixin(LightningElement) {

    navigateToRecord() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '001B000001UNpzhIAD', // Replace with a valid record ID
                objectApiName: 'Account',
                actionName: 'view'
            }
            /* Passing Parameters in Navigation
            state: {
                    c__customParam: 'myValue1',
                    c__customParam2: 'value2'      // Custom parameter
            }
            */
        });
    }

    navigateToObjectHome() { // will to go to list vbiew of account page
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',      // Object API name
                actionName: 'home'            // Actions: 'home', 'list'
            }
        });
    }

    navigateToListView() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',      // Object API name
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'          // Filter name (e.g., 'Recent', custom view ID)
            }
        });
    }

    navigateToExternalPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://www.salesforce.com'
            }
        });
    }
    
    navigateToLWC() {
        this[NavigationMixin.Navigate]({
            type: 'standard__component',
            attributes: {
                componentName: 'empApi' // Component's Developer Name
            },
            /*
            state: {
                // Pass any parameters here
                c__param1: 'value1',
                c__param2: 'value2'
            }
            */

            /*
                How to access this refrence in another LWC componenet

                import { CurrentPageReference } from 'lightning/navigation';

                export default class RetrieveParamsOnRecordPage extends LightningElement {
                     customParam1;
                     customParam2;

                    @wire(CurrentPageReference)
                    getPageReference(pageRef) {
                    if (pageRef) {
                            // Retrieve custom parameters
                        this.customParam1 = pageRef.state.c__customParam1 || 'Default Value 1';
                        this.customParam2 = pageRef.state.c__customParam2 || 'Default Value 2';
                    }
                    }
                }
            */
        });
    }

    navigateToApp() {
        this[NavigationMixin.Navigate]({
            type: 'standard__app',
            attributes: {
                appTarget: 'c__Sales'          // App's Developer Name
            }
        });
    }
    
}