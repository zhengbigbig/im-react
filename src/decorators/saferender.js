export default function safeRender(config) {
    return function(target) {
        if (config.active) {
            [
                'render',
                'componentWillMount',
                'componentDidMount',
                'componentWillReceiveProps',
                'componentWillUpdate',
                'componentDidUpdate',
                'componentWillUnmount',
                'shouldComponentUpdate'
            ].forEach((method) => {
                let blankFn = method === 'shouldComponentUpdate' ? safeShouldComponentUpdate : function() {
                    return null;  //想要修饰的class可能没有定义
                };
                let unsafe = target.prototype[method] || blankFn;
                config.errorHandler =  config.errorHandler || function(report) {
                    console.error(report);
                };

                target.prototype[method] = function() {
                    try {
                        return unsafe.call(this, arguments);
                    }catch(e) {
                        let report = {
                            displayName: target.name,
                            method: method,
                            message: e.stack,
                            state: this.state,
                            props: this.props
                        }
                        config.errorHandler(report);
                        return blankFn.call(this, arguments);
                    }
                }
            });
        }
        
    }
}


function safeShouldComponentUpdate() {
    return true;
}