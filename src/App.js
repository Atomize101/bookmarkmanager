import React from 'react';
import HandleUrl from './HandleUrl';


class App extends React.Component {    
    
    onAddUrl(url) {
        console.log(url)
   
    }
    
    render () {
         return (
             <div className="ui container" style={{marginTop: '20px'}}>
                <HandleUrl onSubmit={this.onAddUrl} />
              </div>
         );
      }
}


export default App