import react, {Component} from "react";

export default class Router extends Component {
    render(){
        return (
            <>
                <a href="/main">Main</a>
                <a href="/local">Specific Local (2)</a>
                <a href="/locals-list">Other link tests</a>
            </>
        );
    }
}