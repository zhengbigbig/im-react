import React, { Component } from 'react';
import classnames from 'classnames';

export default class Icon extends Component {
    
    render() {
        let {type} = this.props;
         let classNames = classnames({
            'iconfont': true,
            ['icon-' + type] : true
        });
        return <span className= {classNames} />;
    }
}