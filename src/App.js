import React from 'react';
import HandleUrl from './HandleUrl';


class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state =  {
            urls : ['Chris'],
            currentUrlItem: {text: '', key: ''}
        };
        
    }
    handleInput = (e) => {
        console.log('Testing!')
    }
    addUrl = () => {
        console.log('Testing 2!');
    }
      render () {
         return (
             <HandleUrl addUrl={this.addUrl}
             />
         );
      }
}


export default App