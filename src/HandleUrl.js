import React from 'react';

class HandleUrl extends React.Component {

    state = {url: ''};
    
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.url)
    }

    deleteUrl = (event) => {
        event.preventDefault();
        this.props.deleteUrl(this.state.url)
    }

    render () {
        return (
            <div className="App">
                <h1>Bookmark Manager</h1>
                <form onSubmit={this.onFormSubmit}>
                <button type="submit">Add</button>
                <input type="text" 
                value={this.state.url} 
                onChange={e => this.setState({url : e.target.value})}></input>
                <button type="submit">Delete</button>
                <input type="text"
                onSubmit={this.deleteUrl} />
                </form>
            </div>
        )
    }
}

export default HandleUrl