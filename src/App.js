import React, { Component } from "react";
import "./App.css";
import { Scene } from "./components/scene.js";
import { SearchFiald } from "./components/search";
import { Aside } from "./components/aside.js";
import YouTubeSearch from "youtube-api-search";

const API_KEY = `AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI`;

export class App extends Component {
    constructor() {
        super();

        this.state = {
            inputValue: "",
            video: []
        };
    }

    inputChange = event => {
        this.setState({
            inputValue: event.target.value
        });
        this.searchFunction();
    };

    searchFunction = () => {
        const { inputValue } = this.state;
        YouTubeSearch({ key: API_KEY, term: inputValue }, data => {
            this.setState({
                video: data
            });
        });
    };
    changeVideo = (video, index) => {
        delete this.state.video[index + 1];
        this.state.video.unshift(video);

        this.setState({
            video: this.state.video
        });
    }
    render() {
        const { video } = this.state;

        return (
            <main className="container">
                <SearchFiald inputChange={this.inputChange}/>

                <div className="row">
                    <Scene video={video}  />
                    <Aside video={video} changeVideo={this.changeVideo} />
                </div>
            </main>
        );
    }
}