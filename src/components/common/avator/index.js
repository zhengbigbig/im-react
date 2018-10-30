import React, { Component } from 'react';
import classnames from 'classnames';
import Icon from '@component/common/icon';
import './index.css';
export default class Avator extends Component {
    
    render() {
        let {type, avatorUrl} = this.props;
        return <div className="avator">
                {avatorUrl ? <img src = {avatorUrl} /> : <Icon type="usered" /> }
            </div>;
    }
}