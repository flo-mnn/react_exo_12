import React, {Component} from 'react';
import './Article.css';


class Article extends Component {

    render() {
        return(
            <div className="article">
                <div className="img">
                    <img src={this.props.img} alt="article-photo"/>
                </div>
                <div className="article-content">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.children}</p>
                </div>
            </div>
        );
    };
};

export default Article;