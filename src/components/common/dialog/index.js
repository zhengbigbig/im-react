import React, { Component } from 'react';
import classnames from 'classnames';
import Icon from '@component/common/icon';
import ReactDOM from 'react-dom';
import './index.css';
export default class Dialog extends Component{
    static defaultProps = {
        showMask: true         
    }

    state = {
        show: true
    }

    componentDidMount() {

    }

    close = () => {
        this.setState({
            show: false
        });
        let {onClose} = this.props;
        onClose && onClose();
    }

    render() {
        let {title, content, footer, showMask} = this.props;
        let {show} = this.state;
        return (
            <div>
            {show ? <div className="dialog-outer">
                    {showMask ? <div className="mask"></div> : null}
                    <div className="dialog-inner">
                        <div className="close" onClick = {this.close}>
                            <Icon type="close" />
                        </div>
                        <div className="title-container">
                            {title}
                        </div>
                        <div className="content-container">
                            {content}
                        </div>
                        <div className="footer-container">
                            {footer}
                        </div>
                    </div>
                </div>: null}
            </div>
        );
    }
}

let d;
export function showDialog(props) {
    if (d) {
        closeDialog();
    }
    d = document.createElement('div');
    document.body.appendChild(d);
    ReactDOM.render(<Dialog {...props}/>, d);
}

export function closeDialog() {
    if (d) {
        ReactDOM.unmountComponentAtNode(d); 
        d.parentNode.removeChild(d);
        d = null;
    }
}


