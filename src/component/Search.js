import React from 'react';

class SearchBar extends React.Component {
    onSearchSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="ui segment" style={{"marginTop": "10px"}}>
                <form className="ui form" onSubmit={(e) => this.onSearchSubmit(e)}>
                    <input type="text" placeholder="Search.."/>
                </form>
            </div>
        )
    }
}

export default SearchBar;