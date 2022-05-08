import {
  useQuery
} from "/build/_shared/chunk-VDXORLXC.js";
import "/build/_shared/chunk-LXAEEAY6.js";
import {
  serviceAPIClient
} from "/build/_shared/chunk-ABWSVWPG.js";
import {
  useBasket
} from "/build/_shared/chunk-YTNWCLYN.js";
import {
  Form,
  React,
  __commonJS,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-I5ORBN7C.js";

// node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js
var require_react_stripe_umd = __commonJS({
  "node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"(exports, module) {
    init_react();
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require_react()) : typeof define === "function" && define.amd ? define(["exports", "react"], factory) : (global = global || self, factory(global.ReactStripe = {}, global.React));
    })(exports, function(exports2, React2) {
      "use strict";
      React2 = React2 && Object.prototype.hasOwnProperty.call(React2, "default") ? React2["default"] : React2;
      function createCommonjsModule(fn, module2) {
        return module2 = { exports: {} }, fn(module2, module2.exports), module2.exports;
      }
      var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      var ReactPropTypesSecret_1 = ReactPropTypesSecret;
      function emptyFunction() {
      }
      function emptyFunctionWithReset() {
      }
      emptyFunctionWithReset.resetWarningCache = emptyFunction;
      var factoryWithThrowingShims = function() {
        function shim(props, propName, componentName, location2, propFullName, secret) {
          if (secret === ReactPropTypesSecret_1) {
            return;
          }
          var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          err.name = "Invariant Violation";
          throw err;
        }
        shim.isRequired = shim;
        function getShim() {
          return shim;
        }
        var ReactPropTypes = {
          array: shim,
          bool: shim,
          func: shim,
          number: shim,
          object: shim,
          string: shim,
          symbol: shim,
          any: shim,
          arrayOf: getShim,
          element: shim,
          elementType: shim,
          instanceOf: getShim,
          node: shim,
          objectOf: getShim,
          oneOf: getShim,
          oneOfType: getShim,
          shape: getShim,
          exact: getShim,
          checkPropTypes: emptyFunctionWithReset,
          resetWarningCache: emptyFunction
        };
        ReactPropTypes.PropTypes = ReactPropTypes;
        return ReactPropTypes;
      };
      var propTypes = createCommonjsModule(function(module2) {
        {
          module2.exports = factoryWithThrowingShims();
        }
      });
      function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly)
            symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(Object(source), true).forEach(function(key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(Object(source)).forEach(function(key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr))
          return arr;
      }
      function _iterableToArrayLimit(arr, i) {
        if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
          return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = void 0;
        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null)
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var usePrevious = function usePrevious2(value) {
        var ref = React2.useRef(value);
        React2.useEffect(function() {
          ref.current = value;
        }, [value]);
        return ref.current;
      };
      var isUnknownObject = function isUnknownObject2(raw) {
        return raw !== null && _typeof(raw) === "object";
      };
      var isPromise = function isPromise2(raw) {
        return isUnknownObject(raw) && typeof raw.then === "function";
      };
      var isStripe = function isStripe2(raw) {
        return isUnknownObject(raw) && typeof raw.elements === "function" && typeof raw.createToken === "function" && typeof raw.createPaymentMethod === "function" && typeof raw.confirmCardPayment === "function";
      };
      var PLAIN_OBJECT_STR = "[object Object]";
      var isEqual = function isEqual2(left, right) {
        if (!isUnknownObject(left) || !isUnknownObject(right)) {
          return left === right;
        }
        var leftArray = Array.isArray(left);
        var rightArray = Array.isArray(right);
        if (leftArray !== rightArray)
          return false;
        var leftPlainObject = Object.prototype.toString.call(left) === PLAIN_OBJECT_STR;
        var rightPlainObject = Object.prototype.toString.call(right) === PLAIN_OBJECT_STR;
        if (leftPlainObject !== rightPlainObject)
          return false;
        if (!leftPlainObject && !leftArray)
          return left === right;
        var leftKeys = Object.keys(left);
        var rightKeys = Object.keys(right);
        if (leftKeys.length !== rightKeys.length)
          return false;
        var keySet = {};
        for (var i = 0; i < leftKeys.length; i += 1) {
          keySet[leftKeys[i]] = true;
        }
        for (var _i = 0; _i < rightKeys.length; _i += 1) {
          keySet[rightKeys[_i]] = true;
        }
        var allKeys = Object.keys(keySet);
        if (allKeys.length !== leftKeys.length) {
          return false;
        }
        var l = left;
        var r = right;
        var pred = function pred2(key) {
          return isEqual2(l[key], r[key]);
        };
        return allKeys.every(pred);
      };
      var extractAllowedOptionsUpdates = function extractAllowedOptionsUpdates2(options, prevOptions, immutableKeys) {
        if (!isUnknownObject(options)) {
          return null;
        }
        return Object.keys(options).reduce(function(newOptions, key) {
          var isUpdated = !isUnknownObject(prevOptions) || !isEqual(options[key], prevOptions[key]);
          if (immutableKeys.includes(key)) {
            if (isUpdated) {
              console.warn("Unsupported prop change: options.".concat(key, " is not a mutable property."));
            }
            return newOptions;
          }
          if (!isUpdated) {
            return newOptions;
          }
          return _objectSpread2(_objectSpread2({}, newOptions || {}), {}, _defineProperty({}, key, options[key]));
        }, null);
      };
      var INVALID_STRIPE_ERROR = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.";
      var validateStripe = function validateStripe2(maybeStripe) {
        if (maybeStripe === null || isStripe(maybeStripe)) {
          return maybeStripe;
        }
        throw new Error(INVALID_STRIPE_ERROR);
      };
      var parseStripeProp = function parseStripeProp2(raw) {
        if (isPromise(raw)) {
          return {
            tag: "async",
            stripePromise: Promise.resolve(raw).then(validateStripe)
          };
        }
        var stripe = validateStripe(raw);
        if (stripe === null) {
          return {
            tag: "empty"
          };
        }
        return {
          tag: "sync",
          stripe
        };
      };
      var ElementsContext = /* @__PURE__ */ React2.createContext(null);
      ElementsContext.displayName = "ElementsContext";
      var parseElementsContext = function parseElementsContext2(ctx, useCase) {
        if (!ctx) {
          throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(useCase, " in an <Elements> provider."));
        }
        return ctx;
      };
      var Elements2 = function Elements3(_ref) {
        var rawStripeProp = _ref.stripe, options = _ref.options, children = _ref.children;
        var _final = React2.useRef(false);
        var isMounted = React2.useRef(true);
        var parsed = React2.useMemo(function() {
          return parseStripeProp(rawStripeProp);
        }, [rawStripeProp]);
        var _React$useState = React2.useState(function() {
          return {
            stripe: null,
            elements: null
          };
        }), _React$useState2 = _slicedToArray(_React$useState, 2), ctx = _React$useState2[0], setContext = _React$useState2[1];
        var prevStripe = usePrevious(rawStripeProp);
        if (prevStripe !== null) {
          if (prevStripe !== rawStripeProp) {
            console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.");
          }
        }
        if (!_final.current) {
          if (parsed.tag === "sync") {
            _final.current = true;
            setContext({
              stripe: parsed.stripe,
              elements: parsed.stripe.elements(options)
            });
          }
          if (parsed.tag === "async") {
            _final.current = true;
            parsed.stripePromise.then(function(stripe) {
              if (stripe && isMounted.current) {
                setContext({
                  stripe,
                  elements: stripe.elements(options)
                });
              }
            });
          }
        }
        var prevOptions = usePrevious(options);
        React2.useEffect(function() {
          if (!ctx.elements) {
            return;
          }
          var updates = extractAllowedOptionsUpdates(options, prevOptions, ["clientSecret", "fonts"]);
          if (updates) {
            ctx.elements.update(updates);
          }
        }, [options, prevOptions, ctx.elements]);
        React2.useEffect(function() {
          return function() {
            isMounted.current = false;
          };
        }, []);
        React2.useEffect(function() {
          var anyStripe = ctx.stripe;
          if (!anyStripe || !anyStripe._registerWrapper || !anyStripe.registerAppInfo) {
            return;
          }
          anyStripe._registerWrapper({
            name: "react-stripe-js",
            version: "1.7.0"
          });
          anyStripe.registerAppInfo({
            name: "react-stripe-js",
            version: "1.7.0",
            url: "https://stripe.com/docs/stripe-js/react"
          });
        }, [ctx.stripe]);
        return /* @__PURE__ */ React2.createElement(ElementsContext.Provider, {
          value: ctx
        }, children);
      };
      Elements2.propTypes = {
        stripe: propTypes.any,
        options: propTypes.object
      };
      var useElementsContextWithUseCase = function useElementsContextWithUseCase2(useCaseMessage) {
        var ctx = React2.useContext(ElementsContext);
        return parseElementsContext(ctx, useCaseMessage);
      };
      var useElements2 = function useElements3() {
        var _useElementsContextWi = useElementsContextWithUseCase("calls useElements()"), elements = _useElementsContextWi.elements;
        return elements;
      };
      var useStripe2 = function useStripe3() {
        var _useElementsContextWi2 = useElementsContextWithUseCase("calls useStripe()"), stripe = _useElementsContextWi2.stripe;
        return stripe;
      };
      var ElementsConsumer = function ElementsConsumer2(_ref2) {
        var children = _ref2.children;
        var ctx = useElementsContextWithUseCase("mounts <ElementsConsumer>");
        return children(ctx);
      };
      ElementsConsumer.propTypes = {
        children: propTypes.func.isRequired
      };
      var useCallbackReference = function useCallbackReference2(cb) {
        var ref = React2.useRef(cb);
        React2.useEffect(function() {
          ref.current = cb;
        }, [cb]);
        return function() {
          if (ref.current) {
            ref.current.apply(ref, arguments);
          }
        };
      };
      var noop = function noop2() {
      };
      var capitalized = function capitalized2(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };
      var createElementComponent = function createElementComponent2(type, isServer2) {
        var displayName = "".concat(capitalized(type), "Element");
        var ClientElement = function ClientElement2(_ref) {
          var id = _ref.id, className = _ref.className, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, _ref$onBlur = _ref.onBlur, onBlur = _ref$onBlur === void 0 ? noop : _ref$onBlur, _ref$onFocus = _ref.onFocus, onFocus = _ref$onFocus === void 0 ? noop : _ref$onFocus, _ref$onReady = _ref.onReady, onReady = _ref$onReady === void 0 ? noop : _ref$onReady, _ref$onChange = _ref.onChange, onChange = _ref$onChange === void 0 ? noop : _ref$onChange, _ref$onEscape = _ref.onEscape, onEscape = _ref$onEscape === void 0 ? noop : _ref$onEscape, _ref$onClick = _ref.onClick, onClick = _ref$onClick === void 0 ? noop : _ref$onClick;
          var _useElementsContextWi = useElementsContextWithUseCase("mounts <".concat(displayName, ">")), elements = _useElementsContextWi.elements;
          var elementRef = React2.useRef(null);
          var domNode = React2.useRef(null);
          var callOnReady = useCallbackReference(onReady);
          var callOnBlur = useCallbackReference(onBlur);
          var callOnFocus = useCallbackReference(onFocus);
          var callOnClick = useCallbackReference(onClick);
          var callOnChange = useCallbackReference(onChange);
          var callOnEscape = useCallbackReference(onEscape);
          React2.useLayoutEffect(function() {
            if (elementRef.current == null && elements && domNode.current != null) {
              var element = elements.create(type, options);
              elementRef.current = element;
              element.mount(domNode.current);
              element.on("ready", function() {
                return callOnReady(element);
              });
              element.on("change", callOnChange);
              element.on("blur", callOnBlur);
              element.on("focus", callOnFocus);
              element.on("escape", callOnEscape);
              element.on("click", callOnClick);
            }
          });
          var prevOptions = usePrevious(options);
          React2.useEffect(function() {
            if (!elementRef.current) {
              return;
            }
            var updates = extractAllowedOptionsUpdates(options, prevOptions, ["paymentRequest"]);
            if (updates) {
              elementRef.current.update(updates);
            }
          }, [options, prevOptions]);
          React2.useLayoutEffect(function() {
            return function() {
              if (elementRef.current) {
                elementRef.current.destroy();
              }
            };
          }, []);
          return /* @__PURE__ */ React2.createElement("div", {
            id,
            className,
            ref: domNode
          });
        };
        var ServerElement = function ServerElement2(props) {
          useElementsContextWithUseCase("mounts <".concat(displayName, ">"));
          var id = props.id, className = props.className;
          return /* @__PURE__ */ React2.createElement("div", {
            id,
            className
          });
        };
        var Element = isServer2 ? ServerElement : ClientElement;
        Element.propTypes = {
          id: propTypes.string,
          className: propTypes.string,
          onChange: propTypes.func,
          onBlur: propTypes.func,
          onFocus: propTypes.func,
          onReady: propTypes.func,
          onClick: propTypes.func,
          options: propTypes.object
        };
        Element.displayName = displayName;
        Element.__elementType = type;
        return Element;
      };
      var isServer = typeof window === "undefined";
      var AuBankAccountElement = createElementComponent("auBankAccount", isServer);
      var CardElement2 = createElementComponent("card", isServer);
      var CardNumberElement = createElementComponent("cardNumber", isServer);
      var CardExpiryElement = createElementComponent("cardExpiry", isServer);
      var CardCvcElement = createElementComponent("cardCvc", isServer);
      var FpxBankElement = createElementComponent("fpxBank", isServer);
      var IbanElement = createElementComponent("iban", isServer);
      var IdealBankElement = createElementComponent("idealBank", isServer);
      var P24BankElement = createElementComponent("p24Bank", isServer);
      var EpsBankElement = createElementComponent("epsBank", isServer);
      var PaymentElement = createElementComponent("payment", isServer);
      var PaymentRequestButtonElement = createElementComponent("paymentRequestButton", isServer);
      var LinkAuthenticationElement = createElementComponent("linkAuthentication", isServer);
      var ShippingAddressElement = createElementComponent("shippingAddress", isServer);
      var AffirmMessageElement = createElementComponent("affirmMessage", isServer);
      var AfterpayClearpayMessageElement = createElementComponent("afterpayClearpayMessage", isServer);
      exports2.AffirmMessageElement = AffirmMessageElement;
      exports2.AfterpayClearpayMessageElement = AfterpayClearpayMessageElement;
      exports2.AuBankAccountElement = AuBankAccountElement;
      exports2.CardCvcElement = CardCvcElement;
      exports2.CardElement = CardElement2;
      exports2.CardExpiryElement = CardExpiryElement;
      exports2.CardNumberElement = CardNumberElement;
      exports2.Elements = Elements2;
      exports2.ElementsConsumer = ElementsConsumer;
      exports2.EpsBankElement = EpsBankElement;
      exports2.FpxBankElement = FpxBankElement;
      exports2.IbanElement = IbanElement;
      exports2.IdealBankElement = IdealBankElement;
      exports2.LinkAuthenticationElement = LinkAuthenticationElement;
      exports2.P24BankElement = P24BankElement;
      exports2.PaymentElement = PaymentElement;
      exports2.PaymentRequestButtonElement = PaymentRequestButtonElement;
      exports2.ShippingAddressElement = ShippingAddressElement;
      exports2.useElements = useElements2;
      exports2.useStripe = useStripe2;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// browser-route-module:/home/aleksep/remix/donat/app/routes/checkout.tsx?browser
init_react();

// app/routes/checkout.tsx
init_react();

// app/components/payments/index.ts
init_react();

// app/components/payments/payments.tsx
init_react();
var import_react3 = __toESM(require_react());

// app/components/payments/stripe.tsx
init_react();
var import_react2 = __toESM(require_react());
var import_react_stripe_js2 = __toESM(require_react_stripe_umd());

// app/service-api/stripe-payment-intent.generated.ts
init_react();
var StripePaymentIntentDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "StripePaymentIntent" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "checkoutModel" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "CheckoutModelInput" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "paymentProviders" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "stripe" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "createPaymentIntent" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "checkoutModel" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "checkoutModel" } } }] }] } }] } }] } }] };

// app/service-api/stripe-confirm-order.generated.ts
init_react();
var ConfirmStripeOrderDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "confirmStripeOrder" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "checkoutModel" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "CheckoutModelInput" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "paymentIntentId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "paymentProviders" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "stripe" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "confirmOrder" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "checkoutModel" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "checkoutModel" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "paymentIntentId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "paymentIntentId" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "success" } }, { "kind": "Field", "name": { "kind": "Name", "value": "orderId" } }] } }] } }] } }] } }] };

// app/components/stripe-loader.tsx
init_react();
var import_react_stripe_js = __toESM(require_react_stripe_umd());

// app/hooks/useStripeConfig.ts
init_react();

// app/service-api/stripe-config.generated.ts
init_react();
var StripeConfigDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "StripeConfig" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "paymentProviders" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "stripe" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "config" } }] } }] } }] } }] };

// app/hooks/useStripeConfig.ts
function useStripeConfig() {
  const stripeConfig = useQuery("stripeConfig", () => serviceAPIClient.request(StripeConfigDocument));
  return stripeConfig;
}

// app/hooks/useStripeLoader.ts
init_react();
var import_react = __toESM(require_react());

// node_modules/@stripe/stripe-js/dist/stripe.esm.js
init_react();
var V3_URL = "https://js.stripe.com/v3";
var V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
var EXISTING_SCRIPT_MESSAGE = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used";
var findScript = function findScript2() {
  var scripts = document.querySelectorAll('script[src^="'.concat(V3_URL, '"]'));
  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];
    if (!V3_URL_REGEX.test(script.src)) {
      continue;
    }
    return script;
  }
  return null;
};
var injectScript = function injectScript2(params) {
  var queryString = params && !params.advancedFraudSignals ? "?advancedFraudSignals=false" : "";
  var script = document.createElement("script");
  script.src = "".concat(V3_URL).concat(queryString);
  var headOrBody = document.head || document.body;
  if (!headOrBody) {
    throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
  }
  headOrBody.appendChild(script);
  return script;
};
var registerWrapper = function registerWrapper2(stripe, startTime) {
  if (!stripe || !stripe._registerWrapper) {
    return;
  }
  stripe._registerWrapper({
    name: "stripe-js",
    version: "1.23.0",
    startTime
  });
};
var stripePromise = null;
var loadScript = function loadScript2(params) {
  if (stripePromise !== null) {
    return stripePromise;
  }
  stripePromise = new Promise(function(resolve, reject) {
    if (typeof window === "undefined") {
      resolve(null);
      return;
    }
    if (window.Stripe && params) {
      console.warn(EXISTING_SCRIPT_MESSAGE);
    }
    if (window.Stripe) {
      resolve(window.Stripe);
      return;
    }
    try {
      var script = findScript();
      if (script && params) {
        console.warn(EXISTING_SCRIPT_MESSAGE);
      } else if (!script) {
        script = injectScript(params);
      }
      script.addEventListener("load", function() {
        if (window.Stripe) {
          resolve(window.Stripe);
        } else {
          reject(new Error("Stripe.js not available"));
        }
      });
      script.addEventListener("error", function() {
        reject(new Error("Failed to load Stripe.js"));
      });
    } catch (error) {
      reject(error);
      return;
    }
  });
  return stripePromise;
};
var initStripe = function initStripe2(maybeStripe, args, startTime) {
  if (maybeStripe === null) {
    return null;
  }
  var stripe = maybeStripe.apply(void 0, args);
  registerWrapper(stripe, startTime);
  return stripe;
};
var stripePromise$1 = Promise.resolve().then(function() {
  return loadScript(null);
});
var loadCalled = false;
stripePromise$1["catch"](function(err) {
  if (!loadCalled) {
    console.warn(err);
  }
});
var loadStripe = function loadStripe2() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  loadCalled = true;
  var startTime = Date.now();
  return stripePromise$1.then(function(maybeStripe) {
    return initStripe(maybeStripe, args, startTime);
  });
};

// app/hooks/useStripeLoader.ts
function useStripeLoader(stripeConfig) {
  const [stripeLoader, setStripeLoader] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    if ((stripeConfig == null ? void 0 : stripeConfig.data) && !stripeLoader) {
      setStripeLoader(loadStripe(stripeConfig.data.paymentProviders.stripe.config.publishableKey));
    }
  }, [stripeConfig, stripeLoader]);
  return stripeLoader;
}

// app/components/stripe-loader.tsx
var StripeLoader = ({ loading, children }) => {
  const stripeConfig = useStripeConfig();
  const stripeLoader = useStripeLoader(stripeConfig);
  if (stripeConfig.isLoading || !stripeLoader) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, loading);
  }
  return /* @__PURE__ */ React.createElement(import_react_stripe_js.Elements, {
    stripe: stripeLoader
  }, children);
};

// app/components/payments/stripe.tsx
var StripeForm = ({
  stripeClientSecret,
  checkoutModel,
  onSuccess,
  onError = (error) => console.log(error)
}) => {
  const stripe = (0, import_react_stripe_js2.useStripe)();
  const elements = (0, import_react_stripe_js2.useElements)();
  const [status, setStatus] = (0, import_react2.useState)("idle");
  (0, import_react2.useEffect)(() => {
    if (stripe) {
      stripe.elements({
        fonts: [{ cssSrc: "https://fonts.googleapis.com/css?family=Roboto" }]
      });
    }
  }, [stripe]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    go();
    async function go() {
      setStatus("submitting");
      if (!stripe || !elements) {
        setTimeout(go, 100);
        console.log("checking in");
        return;
      }
      const { customer } = checkoutModel;
      const { error, paymentIntent } = await stripe.confirmCardPayment(stripeClientSecret, {
        payment_method: {
          card: elements.getElement(import_react_stripe_js2.CardElement),
          billing_details: {
            name: `${customer.firstName} ${customer.lastName}`
          }
        }
      });
      if (error) {
        onError(new Error(error.message));
        setStatus("idle");
        return;
      }
      if (paymentIntent.status !== "succeeded") {
        setStatus("idle");
        return;
      }
      const response = await serviceAPIClient.request(ConfirmStripeOrderDocument, {
        checkoutModel,
        paymentIntentId: paymentIntent.id
      });
      const { success, orderId } = response.paymentProviders.stripe.confirmOrder;
      if (success) {
        window.location.replace(`/confirmation/${orderId}`);
      } else {
        setStatus("idle");
        onError(new Error("Unknown"));
      }
    }
  };
  return /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement(import_react_stripe_js2.CardElement, {
    options: {
      style: {
        base: {
          color: "#000",
          fontSize: "14px"
        }
      }
    },
    className: "mt-8 mb-5 border-2 border-text p-5"
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    disabled: status !== "idle",
    className: "w-full bg-text text-primary py-3 font-semibold mt-5"
  }, status === "idle" ? "Pay" : "Hang on..."));
};
var StripePayment = ({ checkoutModel, onSuccess }) => {
  var _a, _b, _c, _d;
  const stripePaymentIntent = useQuery("paymentIntent", () => serviceAPIClient.request(StripePaymentIntentDocument, { checkoutModel }), { enabled: false });
  (0, import_react2.useEffect)(() => {
    stripePaymentIntent.refetch();
  }, []);
  const loading = /* @__PURE__ */ React.createElement("p", null, "Loading...");
  if (!stripePaymentIntent.data) {
    return loading;
  }
  const stripeClientSecret = (_d = (_c = (_b = (_a = stripePaymentIntent == null ? void 0 : stripePaymentIntent.data) == null ? void 0 : _a.paymentProviders) == null ? void 0 : _b.stripe) == null ? void 0 : _c.createPaymentIntent) == null ? void 0 : _d.client_secret;
  return /* @__PURE__ */ React.createElement(StripeLoader, {
    loading
  }, /* @__PURE__ */ React.createElement(StripeForm, {
    stripeClientSecret,
    checkoutModel,
    onSuccess
  }));
};
var Stripe = ({ checkoutModel, onSuccess }) => {
  return /* @__PURE__ */ React.createElement(StripePayment, {
    checkoutModel,
    onSuccess
  });
};

// app/components/payments/payments.tsx
var Payments = (props) => {
  const [payment, setPayment] = (0, import_react3.useState)("");
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    onClick: () => setPayment("stripe"),
    className: "w-full bg-text text-primary py-3 font-semibold mt-5"
  }, "Stripe")), payment === "stripe" && /* @__PURE__ */ React.createElement(Stripe, {
    ...props
  }));
};

// app/routes/checkout.tsx
var import_react4 = __toESM(require_react());
function Checkout() {
  const [state, setState] = (0, import_react4.useState)({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    postalCode: ""
  });
  const { firstName, lastName, email, street, city, postalCode } = state;
  const basket = useBasket();
  function getURL(path) {
    if (typeof window === "undefined")
      return "";
    return `${location == null ? void 0 : location.protocol}//${location == null ? void 0 : location.host}${path}`;
  }
  const checkoutModel = {
    basketModel: basket.basketModel,
    customer: {
      firstName,
      lastName,
      addresses: [
        { type: "billing", email },
        {
          type: "delivery",
          street,
          city,
          postalCode
        }
      ]
    },
    confirmationURL: getURL(`/confirmation/{crystallizeOrderId}`),
    checkoutURL: getURL(`/checkout`),
    termsURL: getURL(`/terms`)
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "p-10 mx-auto bg-background1 w-128 mt-20"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-text text-3xl font-bold mb-10 text-center"
  }, "Checkout"), /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto"
  }, /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    className: "flex flex-wrap gap-5"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "First Name",
    placeholder: "First name",
    className: "w-full",
    onChange: (e) => setState({ ...state, firstName: e.target.value })
  }), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "Last Name",
    placeholder: "Last name",
    className: "w-full",
    onChange: (e) => setState({ ...state, lastName: e.target.value })
  }), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "Email",
    placeholder: "Email",
    className: "w-full",
    onChange: (e) => setState({ ...state, email: e.target.value })
  }), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "Street",
    placeholder: "Street",
    className: "w-full",
    onChange: (e) => setState({ ...state, street: e.target.value })
  }), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "City",
    placeholder: "City",
    className: "w-full",
    onChange: (e) => setState({ ...state, city: e.target.value })
  }), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "Postal Code",
    placeholder: "Postal Code",
    className: "w-full",
    onChange: (e) => setState({ ...state, postalCode: e.target.value })
  }))), /* @__PURE__ */ React.createElement(Payments, {
    checkoutModel,
    onSuccess: () => console.log("success"),
    onError: () => {
    }
  }));
}
export {
  Checkout as default
};
//# sourceMappingURL=/build/routes/checkout-6M5HFMZU.js.map
