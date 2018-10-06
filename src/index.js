
export default class Theme extends Component {

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
