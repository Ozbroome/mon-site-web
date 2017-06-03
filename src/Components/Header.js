/**
 * Created by eric on 28/05/2017.
 */
import React, { Component } from 'react';
import '../App.css';
import logo1 from '../logo1.png';

class Header extends Component {


    render() {
        return (
                <header className="App-header" onClick={this.slideOff}>
                    <img src={logo1} className="App-logo" alt="logo" />
                    <h1>ERIC RODRIGUEZ</h1>
                    <h2>Développeur web <span>|</span> front-end <span>|</span> back-end</h2>
                    <p>Hello, moi c'est Eric, je suis développeur web back et front. Je peux développer votre site web sur une base cms type wordpress ou bien en PHP à l'aide du framework Symfony et maîtrise les langages coté front, html, css, javascript ainsi qu'un certains nombre de leurs framework.
                        Vous avez un projet de site web, ou applications ? N'hésitez à m'en parler, au pire vous aurez obtenu quelques renseignements et un échange convivial, au mieux vous aurez trouvé un prestataire motivé qui va se plier en quatre pour réaliser votre projet.</p>
                </header>
        );
    }
}

export default Header;