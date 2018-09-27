import React, { Component } from "react";

export class SearchFiald extends Component {
    render() {
        const { inputChange } = this.props;
        return (
            <div className="search-bar navbar">
                <input
                    type="text"
                    placeholder="Search"

                    onInput={inputChange}
                />
            </div>
        );
    }
}
