import React from 'react';
import HandleUrl from './HandleUrl';
import ProcessList from './ProcessList'


var urlList = [];

class App extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            urls : []
    };
}

    addUrl = value => {
        urlList.push(value)
        console.log(urlList);
        this.setState({
            urls : value
        });
    };

    deleteUrl = value => {
        urlList.pop(value);
        this.setState({
            urls : value
        });
        
    }

    render () {
         return (
             <div className="ui container" style={{marginTop: '20px'}}>
                <HandleUrl onSubmit={this.addUrl.bind(this)} deleteUrl={this.deleteUrl.bind(this)} />                
                <ProcessList list={urlList}  />
            </div>
         );
      }
}


export default App