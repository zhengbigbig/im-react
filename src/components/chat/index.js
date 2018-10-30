import React, { Component } from 'react';

import SlideBar from './slidebar';
import SessionList from './sessionlist';
import BubblePanel from './bubblepanel';
import {connect} from 'react-redux';


import {init} from '@data/actions/message';
import './index.css';

@connect(() => ({

}), {
    init
})
export default class Chat extends Component {


    componentWillMount() {
        this.props.init();
    }
    render() {
        let {params} = this.props;
        return (
            <div className="ctn-chat">
                <div>
                    <SlideBar />
                    <SessionList chatType = {params.chatType} chatId = {params.chatId}/>

                    {params.chatId ? <BubblePanel chatType = {params.chatType} chatId = {params.chatId}/> : null}
                    
                </div>
                
            </div>
        );
    }
}


