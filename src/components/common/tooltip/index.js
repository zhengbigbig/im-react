import React, { Component } from 'react';
import classnames from 'classnames';
import ReactDOM from 'react-dom';

import './index.css';
class Tooltip extends Component{
    static defaultProps = {
        time: 3000, // 3s后自动消失
        type: 'success', //默认是成功的样式
        content: '' //显示的内容
    }

    state = {

    }

    componentDidMount() {

    }

    render() {
        let {type, content} = this.props;
        let classNames = classnames({
            'tooltip': true,
            [type]: type
        });
        return (
            <div className={classNames}>
                <div>{content}</div>
            </div>
        );
    }
}

let d;
let timer = 0;
function show(props) {
    if (d) {
        close();
    }
    d = document.createElement('div');
    document.body.appendChild(d);
    ReactDOM.render(<Tooltip {...props}/>, d);
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(() => {
        close();
    }, props.time || 3000)
}
function close() {
    if (d) {
        ReactDOM.unmountComponentAtNode(d); 
        d.parentNode.removeChild(d);
        d = null;
    }
}
export default {
    show: show,
    close: close
}