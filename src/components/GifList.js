import React, { Component } from 'react';

class GifList extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                { this.props.gifs.map(gif => <div><img key={gif.url} src={gif.url} alt={gif.slug}/></div>)}
            </div>
         );
    }
}
 
export default GifList;