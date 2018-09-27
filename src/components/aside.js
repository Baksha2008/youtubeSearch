import React, { Component } from "react";

export class Aside extends Component {
    render() {
        console.log(this.props)
        const videos = this.props.video.slice(1)
        let videosArray = videos.map((elem, i) => {
            const { snippet } = elem;
            const { title, thumbnails } = snippet;
            return (
                <li className="list-group-item" key={i} onClick={()=>{this.props.changeVideo(elem,i)}}>
                    <div className="video-list media">
                        <div className="video-list media">
                            <div className="media-left">
                                <img
                                    className="media-object"
                                    src={thumbnails.default.url}
                                    alt =''
                                />
                            </div>
                        </div>
                        <div className="media-body">
                            <div className="media-heading">{title}</div>
                        </div>
                    </div>
                </li>
            );
        });

        return <ul className="col-md-4 list-group">{videosArray}</ul>;
    }
}
