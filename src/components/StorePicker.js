import React from 'react';
import { format } from 'url';

class StorePicker extends React.Component {
    render() {
        return (
            <form className="store-selector">
                {/* Comment here */}
                <h2>Please Enter a Store</h2>
                <input type="text" required placeholder="Store Name" />
                <button type="submit">Visit Store →</button>
            </form>
        ) 
    }
}

export default StorePicker;