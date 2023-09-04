import * as React from "react";
import ScrollChild from "../ScrollChild";

export default class ScrollExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChildActive: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        let scrollTop = window.scrollY;

        if (scrollTop > 200)
            this.setState({isChildActive: true});
        else
            this.setState({isChildActive: false});
    };

    render() {
        return (
            <div style={{height: 2000}}>
                Scroll down to show the EmailForm
                {
                    this.state.isChildActive ? <ScrollChild/> : null
                }
            </div>
        );
    }
}