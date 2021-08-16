import React from 'react';

class SearchBar extends React.Component {

   state = {term : ''};

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSearchSubmit(this.state.term);
    }

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    }

    render() {
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search Term</label>
                        <input type="text" name="searchTerm"  placeholder="Enter your search term" 
                            value={this.state.term} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;