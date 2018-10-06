import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Theme extends Component {


    static defaultProps = {
        name: undefined
    }

    constructor(props) {
        super(props);

        if (this.props.name) {
            require('bootswatch/dist/' + this.props.name + '/bootstrap.min.css');
        }
        else {
            require('bootstrap/dist/css/bootstrap.min.css');
        }

    }

    render() {
        return this.props.children;
    }
}
