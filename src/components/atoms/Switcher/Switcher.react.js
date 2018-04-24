import React from 'react';



class Switcher extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           active: 'false'
    };
        isActive = () => this.state.active === true;

        toggle = () => {
            this.setState({
            active: !this.isActive()
            });
        }
        this.css = `  
            html { filter: invert(100%); background: #fefefe; }  
            * { background-color: inherit }
            img:not([src*=".svg"]), video { filter: invert(100%) }`;
        }

    render() {
        return (
                <div>
                <button aria-pressed={this.isActive()} onClick={this.toggle}>
                dark theme:
                <span aria-hidden="true">{this.isActive() ? 'on' : 'off'}</span>
                </Button>
                <style media={this.isActive() ? 'screen' : 'none'}>
                {this.css}
                </style>
            </div>
        );
    }
}

export default Switcher;