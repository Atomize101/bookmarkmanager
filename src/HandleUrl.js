import React from 'react';

const HandleUrl = (props) => {
    return (
        <div className="App">
        <h1>Bookmark Manager</h1>
            <form onSubmit={props.addUrl}>
            <button type="submit">Add</button>
            <input type="text"></input>
            </form>
        </div>
  )
}

export default HandleUrl