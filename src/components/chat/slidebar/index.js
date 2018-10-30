import React, { Component } from 'react';
import {getToken} from '@util/token';

import Icon from '@component/common/icon';
import Avator from '@component/common/avator';
import {showDialog} from '@component/common/dialog';
import './index.css';
export default class SlideBar extends Component {

    state = {
        showPanel: false
    }
    showAddRosterPanel = () => {
        // this.setState({
        //     showPanel: true
        // });

        showDialog({
            content:
                <div className="input-container">
                    <input type="text" className="input" placeholder="输入名字" ref={(input) => {this.nickname = input}}/>
                </div>,
           
            footer:<div className="footer">
                    <button className="button" onClick = {this.addRoster}>确定</button>
                </div>,
            title: '添加好友'
        })
    }
    addRoster = () => {
        if (this.nickname) {
            let value = this.nickname.value;
            if (!value.trim()) {
                alert('内容不能为空');
                return;
            }
        }
        sdk.conn.subscribe({
            to: this.nickname.value,
            message: '加个好友呗!'   
        });

        this.setState({
            showPanel: false
        });

    }
    render() {
        let tokenUser = getToken();
        let {showPanel} = this.state;
        let username = tokenUser ? tokenUser.user.username : '';
        return (
            <div className="slidebar">
                <div className="profile">
                    <div className="app-item">
                        <Avator />
                    </div>
                    {/*<span className="iconfont icon-usered" />*/}
                    <div className="name">{username}</div>
                </div>
                <div className="menus">
                    <div className="app-item chat">
                        <Icon type="chat" />
                    </div>
                    <div className="app-item group">
                        <Icon type="chat1" />
                    </div>
                </div>
                <div className="footer">
                    <div className="app-item setting" onClick = {this.showAddRosterPanel}  title="添加好友">
                        <Icon type="setting1" />
                    </div>
                </div>


            </div>
        );
    }
}


