import React, {Component} from 'react';
import istanbul from './img/istanbul.jpg';
import amman from './img/amman.jpg';
import Article from './Article';


class ArticleBox extends Component {
    render () {
        return(
            this.props.state.numberArt >=2 ? (
                <div id="articles">
                    <Article title="Sur les traces de Constantinople" img={istanbul}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ad consequatur error, consequuntur aut temporibus odit impedit vero magni iste? Et praesentium ad sint adipisci aspernatur atque, autem voluptatem temporibus!</Article>
                    <Article title="Les ruines romaines d'ailleurs" img={amman}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ad consequatur error, consequuntur aut temporibus odit impedit vero magni iste? Et praesentium ad sint adipisci aspernatur atque, autem voluptatem temporibus!</Article>
                  </div>
              ) : (
                <div>
                  <h1>Il n'y a pas d'article.</h1>
                </div>
            )
        )
    }
    
};

export default ArticleBox

