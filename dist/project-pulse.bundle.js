define("4efaba52-a723-4514-97ba-4019de136aec_0.0.1", ["react","react-dom","@microsoft/sp-core-library","@microsoft/sp-webpart-base","projectPulseStrings","@microsoft/sp-http"], function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_12__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var ReactDom = __webpack_require__(2);
	var sp_core_library_1 = __webpack_require__(3);
	var sp_webpart_base_1 = __webpack_require__(4);
	var strings = __webpack_require__(5);
	var ProjectPulse_1 = __webpack_require__(6);
	var ProjectPulseWebPart = (function (_super) {
	    __extends(ProjectPulseWebPart, _super);
	    function ProjectPulseWebPart() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    ProjectPulseWebPart.prototype.render = function () {
	        var element = React.createElement(ProjectPulse_1.default, {
	            spHttpClient: this.context.spHttpClient,
	            siteUrl: this.context.pageContext.web.absoluteUrl,
	            listName: "Pulses"
	        });
	        ReactDom.render(element, this.domElement);
	    };
	    Object.defineProperty(ProjectPulseWebPart.prototype, "dataVersion", {
	        get: function () {
	            return sp_core_library_1.Version.parse('1.0');
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ProjectPulseWebPart.prototype.getPropertyPaneConfiguration = function () {
	        return {
	            pages: [
	                {
	                    header: {
	                        description: strings.PropertyPaneDescription
	                    },
	                    groups: [
	                        {
	                            groupName: strings.BasicGroupName,
	                            groupFields: [
	                                sp_webpart_base_1.PropertyPaneTextField('description', {
	                                    label: strings.DescriptionFieldLabel
	                                })
	                            ]
	                        }
	                    ]
	                }
	            ]
	        };
	    };
	    return ProjectPulseWebPart;
	}(sp_webpart_base_1.BaseClientSideWebPart));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ProjectPulseWebPart;



/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var ProjectPulse_module_scss_1 = __webpack_require__(7);
	var sp_http_1 = __webpack_require__(12);
	var sp_core_library_1 = __webpack_require__(3);
	var MockHttpClient_1 = __webpack_require__(13);
	var ProjectPulse = (function (_super) {
	    __extends(ProjectPulse, _super);
	    function ProjectPulse(props) {
	        var _this = _super.call(this, props) || this;
	        _this.listItemEntityTypeName = undefined;
	        _this.tempStyle = undefined;
	        _this.state = {
	            status: 'getPulse',
	            items: [],
	            showPulses: true,
	            showLoading: false,
	            showTemperature: false,
	            temperature: 0
	        };
	        //backgroundImage: 'url(' + imgUrl + ')',
	        _this.tempStyle = {
	            background: '-webkit-linear-gradient(top, #fff 0%, #fff ' + _this.state.temperature + '%, #db3f02 ' + _this.state.temperature + '%, #db3f02 100%)'
	        };
	        return _this;
	    }
	    ProjectPulse.prototype.render = function () {
	        var _this = this;
	        return (React.createElement("div", { className: ProjectPulse_module_scss_1.default.helloWorld },
	            React.createElement("div", { className: ProjectPulse_module_scss_1.default.container },
	                this.state.showPulses &&
	                    React.createElement("div", { className: "ms-Grid-row ms-bgColor-themeDark ms-fontColor-white " + ProjectPulse_module_scss_1.default.row },
	                        React.createElement("div", { className: "ms-Grid-col ms-u-lg12" },
	                            React.createElement("span", { className: "ms-font-xl ms-fontColor-white" }, "How do you feel today?")),
	                        React.createElement("div", { className: "ms-Grid-row ms-bgColor-themeDark ms-fontColor-white" },
	                            React.createElement("div", { onClick: function () { return _this.createItem('Happy'); }, role: "button", className: "ms-Grid-col ms-u-lg4 ms-font-su " + ProjectPulse_module_scss_1.default.feelingIcon },
	                                React.createElement("i", { className: "ms-Icon ms-Icon--Emoji2 " })),
	                            React.createElement("div", { onClick: function () { return _this.createItem('Meh'); }, role: "button", className: "ms-Grid-col ms-u-lg4 ms-font-su " + ProjectPulse_module_scss_1.default.feelingIcon },
	                                React.createElement("i", { className: "ms-Icon ms-Icon--EmojiNeutral" })),
	                            React.createElement("div", { onClick: function () { return _this.createItem('Sad'); }, role: "button", className: "ms-Grid-col ms-u-lg4 ms-font-su " + ProjectPulse_module_scss_1.default.feelingIcon },
	                                React.createElement("i", { className: "ms-Icon ms-Icon--Sad" })))),
	                this.state.showLoading &&
	                    React.createElement("div", { className: "ms-Grid-row ms-bgColor-themeDark ms-fontColor-white " + ProjectPulse_module_scss_1.default.row },
	                        React.createElement("div", { className: "ms-Grid-col ms-u-lg12" },
	                            React.createElement("span", { className: "ms-font-xl ms-fontColor-white" }, "Saving...")),
	                        React.createElement("div", { className: "ms-Grid-row ms-bgColor-themeDark ms-fontColor-white" },
	                            React.createElement("div", { className: "ms-Grid-col ms-u-lg4 ms-font-su " + ProjectPulse_module_scss_1.default.feelingIcon },
	                                React.createElement("i", { className: "ms-Icon ms-Icon--Sync" })))),
	                this.state.showTemperature &&
	                    React.createElement("div", { className: "ms-Grid-row ms-bgColor-themeDark ms-fontColor-white " + ProjectPulse_module_scss_1.default.row },
	                        React.createElement("div", { className: "ms-Grid-col ms-u-lg12" },
	                            React.createElement("span", { className: "ms-font-xl ms-fontColor-white" }, "Everyone else is feeling")),
	                        React.createElement("div", { className: "ms-Grid-row ms-bgColor-themeDark ms-fontColor-white " + ProjectPulse_module_scss_1.default.thermometerContainer },
	                            React.createElement("div", { className: "ms-Grid-col ms-u-lg4 ms-font-su " + ProjectPulse_module_scss_1.default.feelingIcon },
	                                React.createElement("span", { className: ProjectPulse_module_scss_1.default.thermometer, style: this.tempStyle },
	                                    this.state.temperature,
	                                    "%")))))));
	    };
	    ProjectPulse.prototype.createItem = function (feeling) {
	        var _this = this;
	        this.setState({
	            status: 'getPulse',
	            items: [],
	            showPulses: false,
	            showLoading: true,
	            showTemperature: false,
	            temperature: 0
	        });
	        this.getListItemEntityTypeName()
	            .then(function (listItemEntityTypeName) {
	            var body = JSON.stringify({
	                '__metadata': {
	                    'type': listItemEntityTypeName
	                },
	                'Title': feeling
	            });
	            if (sp_core_library_1.Environment.type === sp_core_library_1.EnvironmentType.Local) {
	                MockHttpClient_1.default.getMockListData().then(function (response) {
	                    //this._renderList(response.value);
	                    var score = 0;
	                    for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
	                        var pulse = response_1[_i];
	                        if (pulse.Title == 'Happy') {
	                            score += 1;
	                        }
	                        else if (pulse.Title == 'Meh') {
	                            score += 0.5;
	                        }
	                    }
	                    var tempPercentage = Number((100 - ((score / response.length) * 100)).toFixed(2));
	                    _this.tempStyle = {
	                        background: '-webkit-linear-gradient(top, #fff 0%, #fff ' + tempPercentage + '%, #db3f02 ' + tempPercentage + '%, #db3f02 100%)'
	                    };
	                    _this.setState({
	                        status: 'showTemperature',
	                        items: [],
	                        showPulses: false,
	                        showLoading: false,
	                        showTemperature: true,
	                        temperature: Number(((score / response.length) * 100).toFixed(2))
	                    });
	                });
	                return null;
	            }
	            else if (sp_core_library_1.Environment.type == sp_core_library_1.EnvironmentType.SharePoint ||
	                sp_core_library_1.Environment.type == sp_core_library_1.EnvironmentType.ClassicSharePoint) {
	                _this._getTodayPulses().then(function (pulses) {
	                    var score = 0;
	                    pulses.value.forEach(function (pulse) {
	                        if (pulse.Title == 'Happy') {
	                            score += 1;
	                        }
	                        else if (pulse.Title == 'Meh') {
	                            score += 0.5;
	                        }
	                    });
	                    var tempPercentage = 0;
	                    tempPercentage = Number((100 - ((score / pulses.value.length) * 100)).toFixed(2));
	                    var displayPercentage = Number(((score / pulses.value.length) * 100).toFixed(0));
	                    _this.tempStyle = {
	                        background: '-webkit-linear-gradient(top, #fff 0%, #fff ' + tempPercentage + '%, #db3f02 ' + tempPercentage + '%, #db3f02 100%)'
	                    };
	                    _this.setState({
	                        status: 'showTemperature',
	                        items: [],
	                        showPulses: false,
	                        showLoading: false,
	                        showTemperature: true,
	                        temperature: displayPercentage
	                    });
	                    return null;
	                });
	            }
	        });
	    };
	    ProjectPulse.prototype._getTodayPulses = function () {
	        return this.props.spHttpClient.get(this.props.siteUrl + "/_api/web/lists/getbytitle('" + this.props.listName + "')/items", sp_http_1.SPHttpClient.configurations.v1)
	            .then(function (response) {
	            return response.json();
	        });
	    };
	    ProjectPulse.prototype.getListItemEntityTypeName = function () {
	        var _this = this;
	        if (sp_core_library_1.Environment.type === sp_core_library_1.EnvironmentType.Local) {
	            return new Promise(function (resolve, reject) {
	                resolve('SP.ListItem');
	                return;
	            });
	        }
	        else if (sp_core_library_1.Environment.type == sp_core_library_1.EnvironmentType.SharePoint ||
	            sp_core_library_1.Environment.type == sp_core_library_1.EnvironmentType.ClassicSharePoint) {
	            return new Promise(function (resolve, reject) {
	                if (_this.listItemEntityTypeName) {
	                    resolve(_this.listItemEntityTypeName);
	                    return;
	                }
	                _this.props.spHttpClient.get(_this.props.siteUrl + "/_api/web/lists/getbytitle('" + _this.props.listName + "')?$select=ListItemEntityTypeFullName", sp_http_1.SPHttpClient.configurations.v1, {
	                    headers: {
	                        'Accept': 'application/json;odata=nometadata',
	                        'odata-version': ''
	                    }
	                })
	                    .then(function (response) {
	                    return response.json();
	                }, function (error) {
	                    reject(error);
	                })
	                    .then(function (response) {
	                    _this.listItemEntityTypeName = response.ListItemEntityTypeFullName;
	                    resolve(_this.listItemEntityTypeName);
	                });
	            });
	        }
	    };
	    return ProjectPulse;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ProjectPulse;



/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	__webpack_require__(8);
	var styles = {
	    helloWorld: 'helloWorld_02ac575a',
	    container: 'container_02ac575a',
	    row: 'row_02ac575a',
	    listItem: 'listItem_02ac575a',
	    feelingBlock: 'feelingBlock_02ac575a',
	    feelingIcon: 'feelingIcon_02ac575a',
	    pulseBox: 'pulseBox_02ac575a',
	    pulseBoxContent: 'pulseBoxContent_02ac575a',
	    thermometerContainer: 'thermometerContainer_02ac575a',
	    thermometer: 'thermometer_02ac575a',
	    button: 'button_02ac575a',
	    label: 'label_02ac575a',
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = styles;
	/* tslint:enable */ 
	


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var content = __webpack_require__(9);
	var loader = __webpack_require__(11);
	
	if(typeof content === "string") content = [[module.id, content]];
	
	// add the styles to the DOM
	for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1]);
	
	if(content.locals) module.exports = content.locals;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports
	
	
	// module
	exports.push([module.id, ".helloWorld_02ac575a .container_02ac575a{max-width:700px;margin:0 auto;box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.helloWorld_02ac575a .row_02ac575a{padding:20px}.helloWorld_02ac575a .listItem_02ac575a{max-width:715px;margin:5px auto 5px auto;box-shadow:0 0 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.helloWorld_02ac575a .feelingBlock_02ac575a{padding-right:10px}.helloWorld_02ac575a .feelingIcon_02ac575a{padding:20px;text-align:center}.helloWorld_02ac575a .pulseBox_02ac575a{height:150px}.helloWorld_02ac575a .pulseBoxContent_02ac575a{font-size:60px;text-align:center;cursor:pointer;vertical-align:middle}.helloWorld_02ac575a .thermometerContainer_02ac575a{height:250px}.helloWorld_02ac575a .thermometer_02ac575a{margin:50% 0 0 50%;left:-15px;top:-100px;width:22px;height:150px;display:block;text-indent:36px;background:-webkit-linear-gradient(top,#fff 0,#fff 50%,#db3f02 50%,#db3f02 100%);border-radius:22px 22px 0 0;border:5px solid #4a1c03;border-bottom:none;position:absolute}.helloWorld_02ac575a .thermometer_02ac575a:before{content:' ';width:44px;height:44px;display:block;position:absolute;top:142px;left:-16px;background:#db3f02;border-radius:44px;border:5px solid #4a1c03}.helloWorld_02ac575a .thermometer_02ac575a:after{content:' ';width:22px;height:10px;display:block;position:absolute;top:140px;background:#db3f02}.helloWorld_02ac575a .button_02ac575a{text-decoration:none;height:32px;min-width:80px;background-color:#0078d7;border-color:#0078d7;color:#fff;outline:transparent;position:relative;font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;border-width:0;text-align:center;cursor:pointer;display:inline-block;padding:0 16px}.helloWorld_02ac575a .button_02ac575a .label_02ac575a{font-weight:600;font-size:14px;height:32px;line-height:32px;margin:0 4px;vertical-align:top;display:inline-block}", ""]);
	
	// exports


/***/ },
/* 10 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 11 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
	 * to use if that slot is not specified by the theme.
	 */
	"use strict";
	// IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this
	// value will initialize as undefined, and later will be set once on first loadStyles injection.
	var _injectStylesWithCssText;
	// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
	// load-themed-styles hosted on the page.
	var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
	var _themeState = _root.__themeState__ = _root.__themeState__ || {
	    theme: undefined,
	    lastStyleElement: undefined,
	    registeredStyles: []
	};
	/**
	 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
	 */
	/* tslint:disable: max-line-length */
	var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
	/* tslint:enable: max-line-length */
	/** Maximum style text length, for supporting IE style restrictions. */
	var MAX_STYLE_CONTENT_SIZE = 10000;
	/**
	 * Loads a set of style text. If it is registered too early, we will register it when the window.load
	 * event is fired.
	 * @param {string | ThemableArray} styles Themable style text to register.
	 */
	function loadStyles(styles) {
	    var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
	    if (_injectStylesWithCssText === undefined) {
	        _injectStylesWithCssText = shouldUseCssText();
	    }
	    applyThemableStyles(styleParts);
	}
	exports.loadStyles = loadStyles;
	/**
	 * Allows for customizable loadStyles logic. e.g. for server side rendering application
	 * @param {(styles: string) => void} a loadStyles callback that gets called when styles are loaded or reloaded
	 */
	function configureLoadStyles(callback) {
	    _themeState.loadStyles = callback;
	}
	exports.configureLoadStyles = configureLoadStyles;
	/**
	 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
	 * is fired.
	 * @param {string} styleText Style to register.
	 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
	 */
	function applyThemableStyles(stylesArray, styleRecord) {
	    if (_themeState.loadStyles) {
	        var styles = resolveThemableArray(stylesArray);
	        _themeState.loadStyles(styles);
	    }
	    else {
	        _injectStylesWithCssText ?
	            registerStylesIE(stylesArray, styleRecord) :
	            registerStyles(stylesArray, styleRecord);
	    }
	}
	/**
	 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
	 * replaced.
	 * @param {theme} theme JSON object of theme tokens to values.
	 */
	function loadTheme(theme) {
	    _themeState.theme = theme;
	    // reload styles.
	    reloadStyles();
	}
	exports.loadTheme = loadTheme;
	/**
	 * Reloads styles.
	 */
	function reloadStyles() {
	    if (_themeState.theme) {
	        for (var _i = 0, _a = _themeState.registeredStyles; _i < _a.length; _i++) {
	            var styleRecord = _a[_i];
	            applyThemableStyles(styleRecord.themableStyle, styleRecord);
	        }
	    }
	}
	/**
	 * Find theme tokens and replaces them with provided theme values.
	 * @param {string} styles Tokenized styles to fix.
	 */
	function detokenize(styles) {
	    if (styles) {
	        styles = resolveThemableArray(splitStyles(styles));
	    }
	    return styles;
	}
	exports.detokenize = detokenize;
	/**
	 * Resolves ThemingInstruction objects in an array and joins the result into a string.
	 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
	 */
	function resolveThemableArray(splitStyleArray) {
	    var theme = _themeState.theme;
	    var resolvedCss;
	    if (splitStyleArray) {
	        // Resolve the array of theming instructions to an array of strings.
	        // Then join the array to produce the final CSS string.
	        var resolvedArray = splitStyleArray.map(function (currentValue) {
	            var themeSlot = currentValue.theme;
	            if (themeSlot) {
	                // A theming annotation. Resolve it.
	                var themedValue = theme ? theme[themeSlot] : undefined;
	                var defaultValue = currentValue.defaultValue;
	                // Warn to console if we hit an unthemed value even when themes are provided.
	                // Allow the themedValue to be undefined to explicitly request the default value.
	                if (theme && !themedValue && console && !(themeSlot in theme)) {
	                    /* tslint:disable: max-line-length */
	                    console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + (defaultValue || 'inherit') + "\".");
	                }
	                return themedValue || defaultValue || 'inherit';
	            }
	            else {
	                // A non-themable string. Preserve it.
	                return currentValue.rawString;
	            }
	        });
	        resolvedCss = resolvedArray.join('');
	    }
	    return resolvedCss;
	}
	/**
	 * Split tokenized CSS into an array of strings and theme specification objects
	 * @param {string} styles Tokenized styles to split.
	 */
	function splitStyles(styles) {
	    var result = [];
	    if (styles) {
	        var pos = 0; // Current position in styles.
	        var tokenMatch = void 0;
	        while (tokenMatch = _themeTokenRegex.exec(styles)) {
	            var matchIndex = tokenMatch.index;
	            if (matchIndex > pos) {
	                result.push({
	                    rawString: styles.substring(pos, matchIndex)
	                });
	            }
	            result.push({
	                theme: tokenMatch[1],
	                defaultValue: tokenMatch[2] // May be undefined
	            });
	            // index of the first character after the current match
	            pos = _themeTokenRegex.lastIndex;
	        }
	        // Push the rest of the string after the last match.
	        result.push({
	            rawString: styles.substring(pos)
	        });
	    }
	    return result;
	}
	exports.splitStyles = splitStyles;
	/**
	 * Registers a set of style text. If it is registered too early, we will register it when the
	 * window.load event is fired.
	 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
	 * @param {IStyleRecord} styleRecord May specify a style Element to update.
	 */
	function registerStyles(styleArray, styleRecord) {
	    var head = document.getElementsByTagName('head')[0];
	    var styleElement = document.createElement('style');
	    styleElement.type = 'text/css';
	    styleElement.appendChild(document.createTextNode(resolveThemableArray(styleArray)));
	    if (styleRecord) {
	        head.replaceChild(styleElement, styleRecord.styleElement);
	        styleRecord.styleElement = styleElement;
	    }
	    else {
	        head.appendChild(styleElement);
	    }
	    if (!styleRecord) {
	        _themeState.registeredStyles.push({
	            styleElement: styleElement,
	            themableStyle: styleArray
	        });
	    }
	}
	/**
	 * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need
	 * to register slightly differently.
	 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
	 * @param {IStyleRecord} styleRecord May specify a style Element to update.
	 */
	function registerStylesIE(styleArray, styleRecord) {
	    var head = document.getElementsByTagName('head')[0];
	    var lastStyleElement = _themeState.lastStyleElement, registeredStyles = _themeState.registeredStyles;
	    var stylesheet = lastStyleElement ? lastStyleElement.styleSheet : undefined;
	    var lastStyleContent = stylesheet ? stylesheet.cssText : '';
	    var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];
	    var resolvedStyleText = resolveThemableArray(styleArray);
	    if (!lastStyleElement || (lastStyleContent.length + resolvedStyleText.length) > MAX_STYLE_CONTENT_SIZE) {
	        lastStyleElement = document.createElement('style');
	        lastStyleElement.type = 'text/css';
	        if (styleRecord) {
	            head.replaceChild(lastStyleElement, styleRecord.styleElement);
	            styleRecord.styleElement = lastStyleElement;
	        }
	        else {
	            head.appendChild(lastStyleElement);
	        }
	        if (!styleRecord) {
	            lastRegisteredStyle = {
	                styleElement: lastStyleElement,
	                themableStyle: styleArray
	            };
	            registeredStyles.push(lastRegisteredStyle);
	        }
	    }
	    lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);
	    Array.prototype.push.apply(lastRegisteredStyle.themableStyle, styleArray); // concat in-place
	    // Preserve the theme state.
	    _themeState.lastStyleElement = lastStyleElement;
	}
	/**
	 * Checks to see if styleSheet exists as a property off of a style element.
	 * This will determine if style registration should be done via cssText (<= IE9) or not
	 */
	function shouldUseCssText() {
	    var useCSSText = false;
	    if (typeof document !== 'undefined') {
	        var emptyStyle = document.createElement('style');
	        emptyStyle.type = 'text/css';
	        useCSSText = !!emptyStyle.styleSheet;
	    }
	    return useCSSText;
	}
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	var MockHttpClient = (function () {
	    function MockHttpClient() {
	    }
	    MockHttpClient.getMockListData = function () {
	        return new Promise(function (resolve) {
	            resolve(MockHttpClient._items);
	        });
	    };
	    return MockHttpClient;
	}());
	MockHttpClient._items = [{ Title: 'Meh', Id: 1 },
	    { Title: 'Meh', Id: 2 },
	    { Title: 'Sad', Id: 3 }];
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = MockHttpClient;



/***/ }
/******/ ])});;
//# sourceMappingURL=project-pulse.bundle.js.map