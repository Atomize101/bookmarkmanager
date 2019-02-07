import React from 'react';

class ProcessList extends React.Component {
        render () {
        
            return (
             <ul>
                {this.props.list.map((name) => (
                  <li key={name}>
                   {name} 
                    </li>
                ))}
            </ul>
        )
    }
}

    export default ProcessList;