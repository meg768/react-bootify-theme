import React from 'react';

export default class extends React.Component {

    constructor(props) {
        super(props);

        var css = null;

        if (this.props.supplier == 'bootswatch' && this.props.name)
            css = require('bootswatch/dist/' + this.props.name + '/bootstrap.min.css');
        }

        if (css == null)
            css = require('bootstrap-css-only/css/bootstrap.min.css');
        }

    }

    render() {
        return this.props.children;
    }
}
