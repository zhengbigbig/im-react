export default function safeRender(config) {
    config = config || {};
    config.errorHandler = config.errorHandler || function(e) {
        console.error(e);
    }

    function wrapperFunc(target, name, returnFn) {
        let blankFunc = name === 'shouldComponentUpdate' ? safeShouldComponentUpdate : function() {};
        let unsafe = target.prototype[name] || blankFunc;
        target.prototype[name] = function() {
            try{
                return unsafe.call(this, arguments)
            }catch(e) {
                var report = {
                    displayName: target.name,
                    method: name,
                    props: this.props,
                    state: this.state,
                    error: e
                };
                try {
                    config.errorHandler(report);
                    return returnFn ? returnFn() : null;
                } catch (err) {
                    return  null;
                }
            
            }
        }
    }

    return function(target) {
        [ 'render',
        'componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'componentWillUpdate',
        'componentDidUpdate',
        'componentWillUnmount'
        ].forEach(function (name) {
            wrapperFunc(target, name);
        });
        wrapperFunc(target, 'shouldComponentUpdate', safeShouldComponentUpdate)
    }
   
}


function safeShouldComponentUpdate() {
    return true;
}