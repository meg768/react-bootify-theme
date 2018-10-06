import React from 'react';


export default class extends React.Component {

    constructor(props) {
        super(props);

        if (this.props.name) {
            require('bootswatch/dist/' + this.props.name + '/bootstrap.min.css');
        }
        else {
            require('bootstrap-css-only/css/bootstrap.min.css');
        }

    }

    render() {
        return this.props.children;
    }
}

/*
export class Bootstrap extends React.Component {

    constructor(props) {
        super(props);
        require('bootstrap-css-only/css/bootstrap.min.css');
    }

    render() {
        return this.props.children;
    }
}

export class Bootswatch extends React.Component {

    constructor(props) {
        super(props);

        if (this.props.name) {
            require('bootswatch/dist/' + this.props.name + '/bootstrap.min.css');
        }
        else {
            require('bootstrap-css-only/css/bootstrap.min.css');
        }

    }

    render() {
        return this.props.children;
    }
}
1
*/
