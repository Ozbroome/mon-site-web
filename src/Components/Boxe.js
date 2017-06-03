/**
 * Created by eric on 28/05/2017.
 */
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Boxe extends Component {




    render() {
        return (

        <Link to={this.props.details.lien}  className={'boxe '+ this.props.details.color}  onClick={this.props.function}>
            <div className="boxe-text">
                <h1>{this.props.details.titre}</h1>
                <p>{this.props.details.resume}</p>
            </div>
            <span><i className={this.props.details.icone + ' fa-3x'}></i></span>
        </Link>
        );
    }

}

export default Boxe;