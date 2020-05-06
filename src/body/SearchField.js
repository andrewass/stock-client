import React from "react";

class SearchField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue: "enter symbol name..."
        }
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(event) {
        const value = event.target.value
        this.setState({
            searchValue : value
        })
    }

    submitSearch(){
        this.props.updateSymbols(this.state.searchValue)
    }

    render() {
        const {searchValue} = this.state

        return (
            <form onSubmit={this.submitSearch}>
                <label>Symbol : </label>
                <input type="text" name="symbolName" value={searchValue} onChange={this.handleChange}/>
                <input type="submit" value="Submit" />
            </form>)
    }

}


export default SearchField