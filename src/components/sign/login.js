import React, { Component } from 'react';
import {connect} from 'react-redux';

import classnames from 'classnames';
import {login} from '@data/actions/sign';
import tooltip from '@component/common/tooltip';
import {Link} from 'react-router';
import history from '@history/history';
import {setToken} from '@util/token';

@connect(
    (state) => ({}),
    {
        login
    }
)
export default class Login extends Component {
    login = () => {
        let {login} = this.props;
        let userName = this.refs.name.value;
        let pwd = this.refs.auth.value;
        userName = userName.trim();
        pwd = pwd.trim();
        if (!userName || !pwd) {
            tooltip.show({
                type: 'error',
                content: '账号密码不能为空'
            });
            return;
        }
        let options = {
            apiUrl: WebIM.config.apiURL,
            appKey: WebIM.config.appkey,
            user: userName,
            pwd: pwd
        };
        login(options).then((token) => {
            //存起来，放到内存里面， 并且考虑安全性 
            //存放cookie
            //存放localStorage 里面
            setToken(token);
            history.push('/chat');
        }).catch(() => {
            //出现tooltip
            tooltip.show({
                type: 'error',
                content: '登录失败'
            });
        })
    };
    render() {
        let mainClassName = classnames({
            'sign': true,
            'login': true
        });
        return (
            <div className={mainClassName}>
                <h2>登入页面</h2>
                <input ref='name' 
                    name="name" 
                    className="input"
                    placeholder='输入用户名' 
                    autoFocus={true} 
                    />
                <input ref='auth' 
                    name="auth" 
                    className="input"
                    placeholder='输入密码' 
                    type='password' 
                    />
                <button className="button" onClick={this.login}>登录</button>
                <p>没有账号,
                    <Link to="/signup">请注册 </Link>
                </p>
            </div>
        );
    }
}


