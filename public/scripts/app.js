'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('App.js is running');
var app = {
    title: 'Indecision App',
    subtitle: 'let the computer choose your fate!',
    options: ["Option one", "option two"]
};

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                )
            );
        }
    }]);

    return Header;
}(React.Component);

// class Action extends React.Component{


//     render(){

//         }
// }


var Action = function Action(props) {
    return React.createElement(
        'button',
        { disabled: !props.hasOptions, onClick: props.handlePick },
        'Decide my fate!'
    );
};

var Options = function (_React$Component2) {
    _inherits(Options, _React$Component2);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            {
                //    return this.prop.options.map((option)=>{
                //      return <p>{option}</p>
                //     });
                return React.createElement(
                    'ol',
                    null,
                    this.props.options.map(function (option) {
                        return React.createElement(Option, { key: option, optionText: option });
                    }),
                    '   '
                );
            }
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component3) {
    _inherits(Option, _React$Component3);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.props.optionText
            );
        }
    }]);

    return Option;
}(React.Component);

;

var AddOption = function (_React$Component4) {
    _inherits(AddOption, _React$Component4);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this4 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this4.handleAdd = _this4.handleAdd.bind(_this4);

        return _this4;
    }

    _createClass(AddOption, [{
        key: 'handleAdd',
        value: function handleAdd(e) {
            e.preventDefault();
            var option = e.target.elements.option.value;
            if (option) this.props.handleAdd(option);
            console.log("form submitted");
            return null;
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { onSubmit: this.handleAdd },
                React.createElement('input', { type: 'text', name: 'option' }),
                React.createElement(
                    'button',
                    null,
                    ' Add option'
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var RemoveAll = function (_React$Component5) {
    _inherits(RemoveAll, _React$Component5);

    function RemoveAll() {
        _classCallCheck(this, RemoveAll);

        return _possibleConstructorReturn(this, (RemoveAll.__proto__ || Object.getPrototypeOf(RemoveAll)).apply(this, arguments));
    }

    _createClass(RemoveAll, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'button',
                { disabled: !this.props.hasOptions,
                    onClick: this.props.handleRemoveAll },
                'Remove All'
            );
        }
    }]);

    return RemoveAll;
}(React.Component);

var IndecisionApp = function (_React$Component6) {
    _inherits(IndecisionApp, _React$Component6);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this6 = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this6.state = {
            options: [],
            pickDisabled: false
        };
        _this6.handleAdd = _this6.handleAdd.bind(_this6);
        _this6.handlePick = _this6.handlePick.bind(_this6);
        //    this.invertDisabled = this.invertDisabled.bind(this);
        _this6.handleRemoveAll = _this6.handleRemoveAll.bind(_this6);

        return _this6;
    }

    _createClass(IndecisionApp, [{
        key: 'handlePick',
        value: function handlePick() {
            var result = Math.floor(Math.random() * this.state.options.length);
            console.log(result);
        }
    }, {
        key: 'handleAdd',
        value: function handleAdd(option) {
            this.setState(function (prevState) {

                return {
                    options: prevState.options.concat([option])
                };
            });
            console.log("option added");
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log("Component Mounted");
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            console.log("Component Updated");
        }
    }, {
        key: 'handleRemoveAll',
        value: function handleRemoveAll() {
            var _this7 = this;

            console.log(this.props.options);
            this.setState(function () {
                return _this7.state.options = [];
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: 'Indecision App' }),
                React.createElement(Action, { handlePick: this.handlePick, hasOptions: this.state.options.length > 0 }),
                React.createElement(Options, { options: this.state.options }),
                React.createElement(AddOption, { handleAdd: this.handleAdd }),
                React.createElement(RemoveAll, { handleRemoveAll: this.handleRemoveAll, hasOptions: this.state.options.length > 0 })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var appRoot = document.getElementById('app');
ReactDOM.render(React.createElement(IndecisionApp, null), appRoot);
