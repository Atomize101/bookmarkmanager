import React from 'react';
import HandleUrl from './HandleUrl';


class App extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            urls : []
    };
}

    onAddUrl(url) {
        console.log(url)
   
    }
    
    updateUrl = value => {
        this.setState({
            urls : value
        });
        console.log(this.state);
    }

    render () {
         return (
             <div className="ui container" style={{marginTop: '20px'}}>
                <HandleUrl onSubmit={this.updateUrl} />
                <ul>
                    <li key={this.state.urls}>
                        {this.state.urls} 
                    </li>
                </ul>
            </div>
         );
      }
}


export default App