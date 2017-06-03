
import React, { Component } from 'react';
import Header from './Header';
import Boxe from './Boxe';
import responsive from '../responsive.svg'
//Charger les boxes;
import boxes from '../boxes';
import About from './About';
import Realisations from './Realisations';
import Contact from './Contact';
import Competences from './Competences';
import {Link, Route, BrowserRouter as Router,Switch} from "react-router-dom";

class App extends Component {

    state = {
        boxes:boxes,
        page:""

    };

    slide = (page) => {
        let slide = document.querySelector('.slide');
        slide.style.transform = 'translateX(-2700px)';
        this.setState({page});

    }

    slideOff = (e) => {
        let slide = document.querySelector('.slide');
        slide.style.transform = "translateX(2700px)";
    }


    render() {


        const boxes = Object
            .keys(this.state.boxes)
            .map(key => <Boxe key={key} details={this.state.boxes[key]} function={ () => this.slide(this.state.boxes[key].page)}/>);


        return (
            <Router>
            <div className="container">
                <Header/>
                <section className="boxes">
                    {boxes}
                    <div className="responsive">
                        <img src={responsive} alt=""/>
                    </div>
                </section>
                <section className="slide">
                    <aside className="aside">
                        <Link to="/"  className="close"><span onClick={this.slideOff}><i className="fa fa-times-circle fa-3x"></i></span></Link>
                    </aside>
                    <article className="article">
                        <Route path="/About" component={About}/>
                        <Route path="/Realisations" component={Realisations}/>
                        <Route path="/Competences" component={Competences}/>
                        <Route path="/Contact" component={Contact}/>
                    </article>
                </section>
            </div>
            </Router>
        );
    }
}

export default App;