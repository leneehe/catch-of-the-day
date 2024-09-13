import React from 'react';
import { format } from 'url';
import { getFunName } from '../helpers.js';
import history from '../history';

class StorePicker extends React.Component {
    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }

    goToStore(event) {
        event.preventDefault();
        console.log('You changed the URL');
        // grab the text from the box
        const storeId = this.storeInput.value
        console.log('Going to', storeId);
        
        history.push(`/store/${storeId}`)
        history.go();
    }
    
    render() {
        return (
            <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
                {/* Comment here */}
                <h2>Please Enter a Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input)=> { this.storeInput = input } }/>
                <button type="submit">Visit Store .→</button>
            </form>
        ) 
    }
}

export default StorePicker;