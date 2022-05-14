import {
  require_react_dom
} from "/build/_shared/chunk-LXAEEAY6.js";
import {
  BasketProvider,
  useBasket
} from "/build/_shared/chunk-3DSF5OMX.js";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  React,
  Scripts,
  ScrollRestoration,
  __toESM,
  _extends,
  init_extends,
  init_react,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-I5ORBN7C.js";

// browser-route-module:/home/aleksep/remix/donat/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-RJFEJ6KD.css";

// app/config/locale.ts
init_react();
var locale = {
  locale: "en",
  displayName: "English - US",
  appLanguage: "en-US",
  crystallizeCatalogueLanguage: "en",
  crystallizePriceVariant: "default"
};

// app/components/basket/basket-button.tsx
init_react();
var BasketButton = () => {
  let totalQuantity;
  const basket = useBasket();
  if (basket) {
    totalQuantity = basket.totalQuantity;
  } else {
    totalQuantity = "0";
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React.createElement("svg", {
    width: "46",
    height: "41",
    viewBox: "0 0 46 41",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M39.5255 7.38001H24.4309C23.8251 7.38001 23.2441 7.59599 22.8157 7.98044C22.3873 8.36489 22.1467 8.88631 22.1467 9.43C22.1467 9.9737 22.3873 10.4951 22.8157 10.8796C23.2441 11.264 23.8251 11.48 24.4309 11.48H39.5255C39.7149 11.4785 39.9025 11.5146 40.0746 11.5856C40.2468 11.6566 40.3994 11.7608 40.5216 11.8908C40.6438 12.0207 40.7325 12.1733 40.7814 12.3376C40.8303 12.5019 40.8383 12.6738 40.8047 12.8412L37.3417 27.7406C37.29 28.0092 37.1342 28.2528 36.9018 28.4284C36.6694 28.6039 36.3754 28.7001 36.0716 28.7H21.2695C20.9657 28.7001 20.6717 28.6039 20.4393 28.4284C20.2069 28.2528 20.0511 28.0092 19.9994 27.7406L14.9466 1.64001C14.8448 1.17693 14.5667 0.760047 14.1599 0.46083C13.7532 0.161613 13.2431 -0.00130406 12.7171 7.86192e-06H2.28254C1.93447 0.000245256 1.59105 0.0718674 1.27853 0.209404C0.96601 0.346941 0.692643 0.546755 0.479311 0.793586C0.265979 1.04042 0.118323 1.32774 0.0476204 1.6336C-0.0230824 1.93947 -0.0149621 2.25579 0.0713611 2.55841C0.210204 3.01137 0.514338 3.40944 0.935098 3.68893C1.35586 3.96842 1.86892 4.11316 2.39219 4.10001H10.8532L15.5314 28.4376C15.7668 29.6528 16.4703 30.7553 17.519 31.5526C18.5677 32.3498 19.8951 32.7913 21.2695 32.8H36.0716C37.4523 32.799 38.7884 32.361 39.8446 31.5631C40.9009 30.7651 41.6097 29.6584 41.8463 28.4376L45.3093 13.53C45.4529 12.7745 45.411 12 45.1866 11.2606C44.9621 10.5212 44.5604 9.83463 44.0096 9.24896C43.4588 8.66329 42.7722 8.19261 41.9977 7.86979C41.2231 7.54698 40.3794 7.37983 39.5255 7.38001V7.38001Z",
    fill: "#373567"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M33.2367 18.8599C33.8425 18.8599 34.4235 18.6439 34.8519 18.2595C35.2803 17.875 35.521 17.3536 35.521 16.8099C35.521 16.2662 35.2803 15.7448 34.8519 15.3603C34.4235 14.9759 33.8425 14.7599 33.2367 14.7599H25.927C25.3212 14.7599 24.7401 14.9759 24.3118 15.3603C23.8834 15.7448 23.6427 16.2662 23.6427 16.8099C23.6427 17.3536 23.8834 17.875 24.3118 18.2595C24.7401 18.6439 25.3212 18.8599 25.927 18.8599H33.2367Z",
    fill: "#373567"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M22.2723 41.0001C24.0385 41.0001 25.4703 39.7152 25.4703 38.1301C25.4703 36.5451 24.0385 35.2601 22.2723 35.2601C20.5061 35.2601 19.0743 36.5451 19.0743 38.1301C19.0743 39.7152 20.5061 41.0001 22.2723 41.0001Z",
    fill: "#373567"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M35.0643 41.0001C36.8305 41.0001 38.2623 39.7152 38.2623 38.1301C38.2623 36.5451 36.8305 35.2601 35.0643 35.2601C33.2981 35.2601 31.8663 36.5451 31.8663 38.1301C31.8663 39.7152 33.2981 41.0001 35.0643 41.0001Z",
    fill: "#373567"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "w-5 h-5 absolute bg-text rounded-full text-primary text-center -right-2 -top-2 text-sm"
  }, totalQuantity));
};

// node_modules/react-query/es/index.js
init_react();

// node_modules/react-query/es/core/index.js
init_react();

// node_modules/react-query/es/core/retryer.js
init_react();

// node_modules/react-query/es/core/focusManager.js
init_react();

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
init_react();

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
init_react();
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

// node_modules/react-query/es/core/subscribable.js
init_react();
var Subscribable = /* @__PURE__ */ function() {
  function Subscribable2() {
    this.listeners = [];
  }
  var _proto = Subscribable2.prototype;
  _proto.subscribe = function subscribe(listener) {
    var _this = this;
    var callback = listener || function() {
      return void 0;
    };
    this.listeners.push(callback);
    this.onSubscribe();
    return function() {
      _this.listeners = _this.listeners.filter(function(x) {
        return x !== callback;
      });
      _this.onUnsubscribe();
    };
  };
  _proto.hasListeners = function hasListeners() {
    return this.listeners.length > 0;
  };
  _proto.onSubscribe = function onSubscribe() {
  };
  _proto.onUnsubscribe = function onUnsubscribe() {
  };
  return Subscribable2;
}();

// node_modules/react-query/es/core/utils.js
init_react();
init_extends();
var isServer = typeof window === "undefined";
function noop() {
  return void 0;
}
function functionalUpdate(updater, input) {
  return typeof updater === "function" ? updater(input) : updater;
}
function isValidTimeout(value) {
  return typeof value === "number" && value >= 0 && value !== Infinity;
}
function ensureQueryKeyArray(value) {
  return Array.isArray(value) ? value : [value];
}
function timeUntilStale(updatedAt, staleTime) {
  return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function parseQueryArgs(arg1, arg2, arg3) {
  if (!isQueryKey(arg1)) {
    return arg1;
  }
  if (typeof arg2 === "function") {
    return _extends({}, arg3, {
      queryKey: arg1,
      queryFn: arg2
    });
  }
  return _extends({}, arg2, {
    queryKey: arg1
  });
}
function parseFilterArgs(arg1, arg2, arg3) {
  return isQueryKey(arg1) ? [_extends({}, arg2, {
    queryKey: arg1
  }), arg3] : [arg1 || {}, arg2];
}
function mapQueryStatusFilter(active, inactive) {
  if (active === true && inactive === true || active == null && inactive == null) {
    return "all";
  } else if (active === false && inactive === false) {
    return "none";
  } else {
    var isActive = active != null ? active : !inactive;
    return isActive ? "active" : "inactive";
  }
}
function matchQuery(filters, query) {
  var active = filters.active, exact = filters.exact, fetching = filters.fetching, inactive = filters.inactive, predicate = filters.predicate, queryKey = filters.queryKey, stale = filters.stale;
  if (isQueryKey(queryKey)) {
    if (exact) {
      if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
        return false;
      }
    } else if (!partialMatchKey(query.queryKey, queryKey)) {
      return false;
    }
  }
  var queryStatusFilter = mapQueryStatusFilter(active, inactive);
  if (queryStatusFilter === "none") {
    return false;
  } else if (queryStatusFilter !== "all") {
    var isActive = query.isActive();
    if (queryStatusFilter === "active" && !isActive) {
      return false;
    }
    if (queryStatusFilter === "inactive" && isActive) {
      return false;
    }
  }
  if (typeof stale === "boolean" && query.isStale() !== stale) {
    return false;
  }
  if (typeof fetching === "boolean" && query.isFetching() !== fetching) {
    return false;
  }
  if (predicate && !predicate(query)) {
    return false;
  }
  return true;
}
function matchMutation(filters, mutation) {
  var exact = filters.exact, fetching = filters.fetching, predicate = filters.predicate, mutationKey = filters.mutationKey;
  if (isQueryKey(mutationKey)) {
    if (!mutation.options.mutationKey) {
      return false;
    }
    if (exact) {
      if (hashQueryKey(mutation.options.mutationKey) !== hashQueryKey(mutationKey)) {
        return false;
      }
    } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
      return false;
    }
  }
  if (typeof fetching === "boolean" && mutation.state.status === "loading" !== fetching) {
    return false;
  }
  if (predicate && !predicate(mutation)) {
    return false;
  }
  return true;
}
function hashQueryKeyByOptions(queryKey, options) {
  var hashFn = (options == null ? void 0 : options.queryKeyHashFn) || hashQueryKey;
  return hashFn(queryKey);
}
function hashQueryKey(queryKey) {
  var asArray = ensureQueryKeyArray(queryKey);
  return stableValueHash(asArray);
}
function stableValueHash(value) {
  return JSON.stringify(value, function(_, val) {
    return isPlainObject(val) ? Object.keys(val).sort().reduce(function(result, key) {
      result[key] = val[key];
      return result;
    }, {}) : val;
  });
}
function partialMatchKey(a, b) {
  return partialDeepEqual(ensureQueryKeyArray(a), ensureQueryKeyArray(b));
}
function partialDeepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (a && b && typeof a === "object" && typeof b === "object") {
    return !Object.keys(b).some(function(key) {
      return !partialDeepEqual(a[key], b[key]);
    });
  }
  return false;
}
function replaceEqualDeep(a, b) {
  if (a === b) {
    return a;
  }
  var array = Array.isArray(a) && Array.isArray(b);
  if (array || isPlainObject(a) && isPlainObject(b)) {
    var aSize = array ? a.length : Object.keys(a).length;
    var bItems = array ? b : Object.keys(b);
    var bSize = bItems.length;
    var copy = array ? [] : {};
    var equalItems = 0;
    for (var i = 0; i < bSize; i++) {
      var key = array ? i : bItems[i];
      copy[key] = replaceEqualDeep(a[key], b[key]);
      if (copy[key] === a[key]) {
        equalItems++;
      }
    }
    return aSize === bSize && equalItems === aSize ? a : copy;
  }
  return b;
}
function isPlainObject(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  }
  var ctor = o.constructor;
  if (typeof ctor === "undefined") {
    return true;
  }
  var prot = ctor.prototype;
  if (!hasObjectPrototype(prot)) {
    return false;
  }
  if (!prot.hasOwnProperty("isPrototypeOf")) {
    return false;
  }
  return true;
}
function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function isQueryKey(value) {
  return typeof value === "string" || Array.isArray(value);
}
function sleep(timeout) {
  return new Promise(function(resolve) {
    setTimeout(resolve, timeout);
  });
}
function scheduleMicrotask(callback) {
  Promise.resolve().then(callback).catch(function(error) {
    return setTimeout(function() {
      throw error;
    });
  });
}
function getAbortController() {
  if (typeof AbortController === "function") {
    return new AbortController();
  }
}

// node_modules/react-query/es/core/focusManager.js
var FocusManager = /* @__PURE__ */ function(_Subscribable) {
  _inheritsLoose(FocusManager2, _Subscribable);
  function FocusManager2() {
    var _this;
    _this = _Subscribable.call(this) || this;
    _this.setup = function(onFocus) {
      var _window;
      if (!isServer && ((_window = window) == null ? void 0 : _window.addEventListener)) {
        var listener = function listener2() {
          return onFocus();
        };
        window.addEventListener("visibilitychange", listener, false);
        window.addEventListener("focus", listener, false);
        return function() {
          window.removeEventListener("visibilitychange", listener);
          window.removeEventListener("focus", listener);
        };
      }
    };
    return _this;
  }
  var _proto = FocusManager2.prototype;
  _proto.onSubscribe = function onSubscribe() {
    if (!this.cleanup) {
      this.setEventListener(this.setup);
    }
  };
  _proto.onUnsubscribe = function onUnsubscribe() {
    if (!this.hasListeners()) {
      var _this$cleanup;
      (_this$cleanup = this.cleanup) == null ? void 0 : _this$cleanup.call(this);
      this.cleanup = void 0;
    }
  };
  _proto.setEventListener = function setEventListener(setup) {
    var _this$cleanup2, _this2 = this;
    this.setup = setup;
    (_this$cleanup2 = this.cleanup) == null ? void 0 : _this$cleanup2.call(this);
    this.cleanup = setup(function(focused) {
      if (typeof focused === "boolean") {
        _this2.setFocused(focused);
      } else {
        _this2.onFocus();
      }
    });
  };
  _proto.setFocused = function setFocused(focused) {
    this.focused = focused;
    if (focused) {
      this.onFocus();
    }
  };
  _proto.onFocus = function onFocus() {
    this.listeners.forEach(function(listener) {
      listener();
    });
  };
  _proto.isFocused = function isFocused() {
    if (typeof this.focused === "boolean") {
      return this.focused;
    }
    if (typeof document === "undefined") {
      return true;
    }
    return [void 0, "visible", "prerender"].includes(document.visibilityState);
  };
  return FocusManager2;
}(Subscribable);
var focusManager = new FocusManager();

// node_modules/react-query/es/core/onlineManager.js
init_react();
var OnlineManager = /* @__PURE__ */ function(_Subscribable) {
  _inheritsLoose(OnlineManager2, _Subscribable);
  function OnlineManager2() {
    var _this;
    _this = _Subscribable.call(this) || this;
    _this.setup = function(onOnline) {
      var _window;
      if (!isServer && ((_window = window) == null ? void 0 : _window.addEventListener)) {
        var listener = function listener2() {
          return onOnline();
        };
        window.addEventListener("online", listener, false);
        window.addEventListener("offline", listener, false);
        return function() {
          window.removeEventListener("online", listener);
          window.removeEventListener("offline", listener);
        };
      }
    };
    return _this;
  }
  var _proto = OnlineManager2.prototype;
  _proto.onSubscribe = function onSubscribe() {
    if (!this.cleanup) {
      this.setEventListener(this.setup);
    }
  };
  _proto.onUnsubscribe = function onUnsubscribe() {
    if (!this.hasListeners()) {
      var _this$cleanup;
      (_this$cleanup = this.cleanup) == null ? void 0 : _this$cleanup.call(this);
      this.cleanup = void 0;
    }
  };
  _proto.setEventListener = function setEventListener(setup) {
    var _this$cleanup2, _this2 = this;
    this.setup = setup;
    (_this$cleanup2 = this.cleanup) == null ? void 0 : _this$cleanup2.call(this);
    this.cleanup = setup(function(online) {
      if (typeof online === "boolean") {
        _this2.setOnline(online);
      } else {
        _this2.onOnline();
      }
    });
  };
  _proto.setOnline = function setOnline(online) {
    this.online = online;
    if (online) {
      this.onOnline();
    }
  };
  _proto.onOnline = function onOnline() {
    this.listeners.forEach(function(listener) {
      listener();
    });
  };
  _proto.isOnline = function isOnline() {
    if (typeof this.online === "boolean") {
      return this.online;
    }
    if (typeof navigator === "undefined" || typeof navigator.onLine === "undefined") {
      return true;
    }
    return navigator.onLine;
  };
  return OnlineManager2;
}(Subscribable);
var onlineManager = new OnlineManager();

// node_modules/react-query/es/core/retryer.js
function defaultRetryDelay(failureCount) {
  return Math.min(1e3 * Math.pow(2, failureCount), 3e4);
}
function isCancelable(value) {
  return typeof (value == null ? void 0 : value.cancel) === "function";
}
var CancelledError = function CancelledError2(options) {
  this.revert = options == null ? void 0 : options.revert;
  this.silent = options == null ? void 0 : options.silent;
};
function isCancelledError(value) {
  return value instanceof CancelledError;
}
var Retryer = function Retryer2(config) {
  var _this = this;
  var cancelRetry = false;
  var cancelFn;
  var continueFn;
  var promiseResolve;
  var promiseReject;
  this.abort = config.abort;
  this.cancel = function(cancelOptions) {
    return cancelFn == null ? void 0 : cancelFn(cancelOptions);
  };
  this.cancelRetry = function() {
    cancelRetry = true;
  };
  this.continueRetry = function() {
    cancelRetry = false;
  };
  this.continue = function() {
    return continueFn == null ? void 0 : continueFn();
  };
  this.failureCount = 0;
  this.isPaused = false;
  this.isResolved = false;
  this.isTransportCancelable = false;
  this.promise = new Promise(function(outerResolve, outerReject) {
    promiseResolve = outerResolve;
    promiseReject = outerReject;
  });
  var resolve = function resolve2(value) {
    if (!_this.isResolved) {
      _this.isResolved = true;
      config.onSuccess == null ? void 0 : config.onSuccess(value);
      continueFn == null ? void 0 : continueFn();
      promiseResolve(value);
    }
  };
  var reject = function reject2(value) {
    if (!_this.isResolved) {
      _this.isResolved = true;
      config.onError == null ? void 0 : config.onError(value);
      continueFn == null ? void 0 : continueFn();
      promiseReject(value);
    }
  };
  var pause = function pause2() {
    return new Promise(function(continueResolve) {
      continueFn = continueResolve;
      _this.isPaused = true;
      config.onPause == null ? void 0 : config.onPause();
    }).then(function() {
      continueFn = void 0;
      _this.isPaused = false;
      config.onContinue == null ? void 0 : config.onContinue();
    });
  };
  var run = function run2() {
    if (_this.isResolved) {
      return;
    }
    var promiseOrValue;
    try {
      promiseOrValue = config.fn();
    } catch (error) {
      promiseOrValue = Promise.reject(error);
    }
    cancelFn = function cancelFn2(cancelOptions) {
      if (!_this.isResolved) {
        reject(new CancelledError(cancelOptions));
        _this.abort == null ? void 0 : _this.abort();
        if (isCancelable(promiseOrValue)) {
          try {
            promiseOrValue.cancel();
          } catch (_unused) {
          }
        }
      }
    };
    _this.isTransportCancelable = isCancelable(promiseOrValue);
    Promise.resolve(promiseOrValue).then(resolve).catch(function(error) {
      var _config$retry, _config$retryDelay;
      if (_this.isResolved) {
        return;
      }
      var retry = (_config$retry = config.retry) != null ? _config$retry : 3;
      var retryDelay = (_config$retryDelay = config.retryDelay) != null ? _config$retryDelay : defaultRetryDelay;
      var delay = typeof retryDelay === "function" ? retryDelay(_this.failureCount, error) : retryDelay;
      var shouldRetry = retry === true || typeof retry === "number" && _this.failureCount < retry || typeof retry === "function" && retry(_this.failureCount, error);
      if (cancelRetry || !shouldRetry) {
        reject(error);
        return;
      }
      _this.failureCount++;
      config.onFail == null ? void 0 : config.onFail(_this.failureCount, error);
      sleep(delay).then(function() {
        if (!focusManager.isFocused() || !onlineManager.isOnline()) {
          return pause();
        }
      }).then(function() {
        if (cancelRetry) {
          reject(error);
        } else {
          run2();
        }
      });
    });
  };
  run();
};

// node_modules/react-query/es/core/queryCache.js
init_react();

// node_modules/react-query/es/core/query.js
init_react();
init_extends();

// node_modules/react-query/es/core/notifyManager.js
init_react();
var NotifyManager = /* @__PURE__ */ function() {
  function NotifyManager2() {
    this.queue = [];
    this.transactions = 0;
    this.notifyFn = function(callback) {
      callback();
    };
    this.batchNotifyFn = function(callback) {
      callback();
    };
  }
  var _proto = NotifyManager2.prototype;
  _proto.batch = function batch(callback) {
    var result;
    this.transactions++;
    try {
      result = callback();
    } finally {
      this.transactions--;
      if (!this.transactions) {
        this.flush();
      }
    }
    return result;
  };
  _proto.schedule = function schedule(callback) {
    var _this = this;
    if (this.transactions) {
      this.queue.push(callback);
    } else {
      scheduleMicrotask(function() {
        _this.notifyFn(callback);
      });
    }
  };
  _proto.batchCalls = function batchCalls(callback) {
    var _this2 = this;
    return function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this2.schedule(function() {
        callback.apply(void 0, args);
      });
    };
  };
  _proto.flush = function flush() {
    var _this3 = this;
    var queue = this.queue;
    this.queue = [];
    if (queue.length) {
      scheduleMicrotask(function() {
        _this3.batchNotifyFn(function() {
          queue.forEach(function(callback) {
            _this3.notifyFn(callback);
          });
        });
      });
    }
  };
  _proto.setNotifyFunction = function setNotifyFunction(fn) {
    this.notifyFn = fn;
  };
  _proto.setBatchNotifyFunction = function setBatchNotifyFunction(fn) {
    this.batchNotifyFn = fn;
  };
  return NotifyManager2;
}();
var notifyManager = new NotifyManager();

// node_modules/react-query/es/core/logger.js
init_react();
var logger = console;
function getLogger() {
  return logger;
}
function setLogger(newLogger) {
  logger = newLogger;
}

// node_modules/react-query/es/core/query.js
var Query = /* @__PURE__ */ function() {
  function Query2(config) {
    this.abortSignalConsumed = false;
    this.hadObservers = false;
    this.defaultOptions = config.defaultOptions;
    this.setOptions(config.options);
    this.observers = [];
    this.cache = config.cache;
    this.queryKey = config.queryKey;
    this.queryHash = config.queryHash;
    this.initialState = config.state || this.getDefaultState(this.options);
    this.state = this.initialState;
    this.meta = config.meta;
    this.scheduleGc();
  }
  var _proto = Query2.prototype;
  _proto.setOptions = function setOptions(options) {
    var _this$options$cacheTi;
    this.options = _extends({}, this.defaultOptions, options);
    this.meta = options == null ? void 0 : options.meta;
    this.cacheTime = Math.max(this.cacheTime || 0, (_this$options$cacheTi = this.options.cacheTime) != null ? _this$options$cacheTi : 5 * 60 * 1e3);
  };
  _proto.setDefaultOptions = function setDefaultOptions(options) {
    this.defaultOptions = options;
  };
  _proto.scheduleGc = function scheduleGc() {
    var _this = this;
    this.clearGcTimeout();
    if (isValidTimeout(this.cacheTime)) {
      this.gcTimeout = setTimeout(function() {
        _this.optionalRemove();
      }, this.cacheTime);
    }
  };
  _proto.clearGcTimeout = function clearGcTimeout() {
    clearTimeout(this.gcTimeout);
    this.gcTimeout = void 0;
  };
  _proto.optionalRemove = function optionalRemove() {
    if (!this.observers.length) {
      if (this.state.isFetching) {
        if (this.hadObservers) {
          this.scheduleGc();
        }
      } else {
        this.cache.remove(this);
      }
    }
  };
  _proto.setData = function setData(updater, options) {
    var _this$options$isDataE, _this$options;
    var prevData = this.state.data;
    var data = functionalUpdate(updater, prevData);
    if ((_this$options$isDataE = (_this$options = this.options).isDataEqual) == null ? void 0 : _this$options$isDataE.call(_this$options, prevData, data)) {
      data = prevData;
    } else if (this.options.structuralSharing !== false) {
      data = replaceEqualDeep(prevData, data);
    }
    this.dispatch({
      data,
      type: "success",
      dataUpdatedAt: options == null ? void 0 : options.updatedAt
    });
    return data;
  };
  _proto.setState = function setState(state, setStateOptions) {
    this.dispatch({
      type: "setState",
      state,
      setStateOptions
    });
  };
  _proto.cancel = function cancel(options) {
    var _this$retryer;
    var promise = this.promise;
    (_this$retryer = this.retryer) == null ? void 0 : _this$retryer.cancel(options);
    return promise ? promise.then(noop).catch(noop) : Promise.resolve();
  };
  _proto.destroy = function destroy() {
    this.clearGcTimeout();
    this.cancel({
      silent: true
    });
  };
  _proto.reset = function reset() {
    this.destroy();
    this.setState(this.initialState);
  };
  _proto.isActive = function isActive() {
    return this.observers.some(function(observer) {
      return observer.options.enabled !== false;
    });
  };
  _proto.isFetching = function isFetching() {
    return this.state.isFetching;
  };
  _proto.isStale = function isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(function(observer) {
      return observer.getCurrentResult().isStale;
    });
  };
  _proto.isStaleByTime = function isStaleByTime(staleTime) {
    if (staleTime === void 0) {
      staleTime = 0;
    }
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !timeUntilStale(this.state.dataUpdatedAt, staleTime);
  };
  _proto.onFocus = function onFocus() {
    var _this$retryer2;
    var observer = this.observers.find(function(x) {
      return x.shouldFetchOnWindowFocus();
    });
    if (observer) {
      observer.refetch();
    }
    (_this$retryer2 = this.retryer) == null ? void 0 : _this$retryer2.continue();
  };
  _proto.onOnline = function onOnline() {
    var _this$retryer3;
    var observer = this.observers.find(function(x) {
      return x.shouldFetchOnReconnect();
    });
    if (observer) {
      observer.refetch();
    }
    (_this$retryer3 = this.retryer) == null ? void 0 : _this$retryer3.continue();
  };
  _proto.addObserver = function addObserver(observer) {
    if (this.observers.indexOf(observer) === -1) {
      this.observers.push(observer);
      this.hadObservers = true;
      this.clearGcTimeout();
      this.cache.notify({
        type: "observerAdded",
        query: this,
        observer
      });
    }
  };
  _proto.removeObserver = function removeObserver(observer) {
    if (this.observers.indexOf(observer) !== -1) {
      this.observers = this.observers.filter(function(x) {
        return x !== observer;
      });
      if (!this.observers.length) {
        if (this.retryer) {
          if (this.retryer.isTransportCancelable || this.abortSignalConsumed) {
            this.retryer.cancel({
              revert: true
            });
          } else {
            this.retryer.cancelRetry();
          }
        }
        if (this.cacheTime) {
          this.scheduleGc();
        } else {
          this.cache.remove(this);
        }
      }
      this.cache.notify({
        type: "observerRemoved",
        query: this,
        observer
      });
    }
  };
  _proto.getObserversCount = function getObserversCount() {
    return this.observers.length;
  };
  _proto.invalidate = function invalidate() {
    if (!this.state.isInvalidated) {
      this.dispatch({
        type: "invalidate"
      });
    }
  };
  _proto.fetch = function fetch(options, fetchOptions) {
    var _this2 = this, _this$options$behavio, _context$fetchOptions, _abortController$abor;
    if (this.state.isFetching) {
      if (this.state.dataUpdatedAt && (fetchOptions == null ? void 0 : fetchOptions.cancelRefetch)) {
        this.cancel({
          silent: true
        });
      } else if (this.promise) {
        var _this$retryer4;
        (_this$retryer4 = this.retryer) == null ? void 0 : _this$retryer4.continueRetry();
        return this.promise;
      }
    }
    if (options) {
      this.setOptions(options);
    }
    if (!this.options.queryFn) {
      var observer = this.observers.find(function(x) {
        return x.options.queryFn;
      });
      if (observer) {
        this.setOptions(observer.options);
      }
    }
    var queryKey = ensureQueryKeyArray(this.queryKey);
    var abortController = getAbortController();
    var queryFnContext = {
      queryKey,
      pageParam: void 0,
      meta: this.meta
    };
    Object.defineProperty(queryFnContext, "signal", {
      enumerable: true,
      get: function get() {
        if (abortController) {
          _this2.abortSignalConsumed = true;
          return abortController.signal;
        }
        return void 0;
      }
    });
    var fetchFn = function fetchFn2() {
      if (!_this2.options.queryFn) {
        return Promise.reject("Missing queryFn");
      }
      _this2.abortSignalConsumed = false;
      return _this2.options.queryFn(queryFnContext);
    };
    var context = {
      fetchOptions,
      options: this.options,
      queryKey,
      state: this.state,
      fetchFn,
      meta: this.meta
    };
    if ((_this$options$behavio = this.options.behavior) == null ? void 0 : _this$options$behavio.onFetch) {
      var _this$options$behavio2;
      (_this$options$behavio2 = this.options.behavior) == null ? void 0 : _this$options$behavio2.onFetch(context);
    }
    this.revertState = this.state;
    if (!this.state.isFetching || this.state.fetchMeta !== ((_context$fetchOptions = context.fetchOptions) == null ? void 0 : _context$fetchOptions.meta)) {
      var _context$fetchOptions2;
      this.dispatch({
        type: "fetch",
        meta: (_context$fetchOptions2 = context.fetchOptions) == null ? void 0 : _context$fetchOptions2.meta
      });
    }
    this.retryer = new Retryer({
      fn: context.fetchFn,
      abort: abortController == null ? void 0 : (_abortController$abor = abortController.abort) == null ? void 0 : _abortController$abor.bind(abortController),
      onSuccess: function onSuccess(data) {
        _this2.setData(data);
        _this2.cache.config.onSuccess == null ? void 0 : _this2.cache.config.onSuccess(data, _this2);
        if (_this2.cacheTime === 0) {
          _this2.optionalRemove();
        }
      },
      onError: function onError(error) {
        if (!(isCancelledError(error) && error.silent)) {
          _this2.dispatch({
            type: "error",
            error
          });
        }
        if (!isCancelledError(error)) {
          _this2.cache.config.onError == null ? void 0 : _this2.cache.config.onError(error, _this2);
          getLogger().error(error);
        }
        if (_this2.cacheTime === 0) {
          _this2.optionalRemove();
        }
      },
      onFail: function onFail() {
        _this2.dispatch({
          type: "failed"
        });
      },
      onPause: function onPause() {
        _this2.dispatch({
          type: "pause"
        });
      },
      onContinue: function onContinue() {
        _this2.dispatch({
          type: "continue"
        });
      },
      retry: context.options.retry,
      retryDelay: context.options.retryDelay
    });
    this.promise = this.retryer.promise;
    return this.promise;
  };
  _proto.dispatch = function dispatch(action) {
    var _this3 = this;
    this.state = this.reducer(this.state, action);
    notifyManager.batch(function() {
      _this3.observers.forEach(function(observer) {
        observer.onQueryUpdate(action);
      });
      _this3.cache.notify({
        query: _this3,
        type: "queryUpdated",
        action
      });
    });
  };
  _proto.getDefaultState = function getDefaultState2(options) {
    var data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
    var hasInitialData = typeof options.initialData !== "undefined";
    var initialDataUpdatedAt = hasInitialData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
    var hasData = typeof data !== "undefined";
    return {
      data,
      dataUpdateCount: 0,
      dataUpdatedAt: hasData ? initialDataUpdatedAt != null ? initialDataUpdatedAt : Date.now() : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchMeta: null,
      isFetching: false,
      isInvalidated: false,
      isPaused: false,
      status: hasData ? "success" : "idle"
    };
  };
  _proto.reducer = function reducer2(state, action) {
    var _action$meta, _action$dataUpdatedAt;
    switch (action.type) {
      case "failed":
        return _extends({}, state, {
          fetchFailureCount: state.fetchFailureCount + 1
        });
      case "pause":
        return _extends({}, state, {
          isPaused: true
        });
      case "continue":
        return _extends({}, state, {
          isPaused: false
        });
      case "fetch":
        return _extends({}, state, {
          fetchFailureCount: 0,
          fetchMeta: (_action$meta = action.meta) != null ? _action$meta : null,
          isFetching: true,
          isPaused: false
        }, !state.dataUpdatedAt && {
          error: null,
          status: "loading"
        });
      case "success":
        return _extends({}, state, {
          data: action.data,
          dataUpdateCount: state.dataUpdateCount + 1,
          dataUpdatedAt: (_action$dataUpdatedAt = action.dataUpdatedAt) != null ? _action$dataUpdatedAt : Date.now(),
          error: null,
          fetchFailureCount: 0,
          isFetching: false,
          isInvalidated: false,
          isPaused: false,
          status: "success"
        });
      case "error":
        var error = action.error;
        if (isCancelledError(error) && error.revert && this.revertState) {
          return _extends({}, this.revertState);
        }
        return _extends({}, state, {
          error,
          errorUpdateCount: state.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: state.fetchFailureCount + 1,
          isFetching: false,
          isPaused: false,
          status: "error"
        });
      case "invalidate":
        return _extends({}, state, {
          isInvalidated: true
        });
      case "setState":
        return _extends({}, state, action.state);
      default:
        return state;
    }
  };
  return Query2;
}();

// node_modules/react-query/es/core/queryCache.js
var QueryCache = /* @__PURE__ */ function(_Subscribable) {
  _inheritsLoose(QueryCache2, _Subscribable);
  function QueryCache2(config) {
    var _this;
    _this = _Subscribable.call(this) || this;
    _this.config = config || {};
    _this.queries = [];
    _this.queriesMap = {};
    return _this;
  }
  var _proto = QueryCache2.prototype;
  _proto.build = function build(client, options, state) {
    var _options$queryHash;
    var queryKey = options.queryKey;
    var queryHash = (_options$queryHash = options.queryHash) != null ? _options$queryHash : hashQueryKeyByOptions(queryKey, options);
    var query = this.get(queryHash);
    if (!query) {
      query = new Query({
        cache: this,
        queryKey,
        queryHash,
        options: client.defaultQueryOptions(options),
        state,
        defaultOptions: client.getQueryDefaults(queryKey),
        meta: options.meta
      });
      this.add(query);
    }
    return query;
  };
  _proto.add = function add(query) {
    if (!this.queriesMap[query.queryHash]) {
      this.queriesMap[query.queryHash] = query;
      this.queries.push(query);
      this.notify({
        type: "queryAdded",
        query
      });
    }
  };
  _proto.remove = function remove(query) {
    var queryInMap = this.queriesMap[query.queryHash];
    if (queryInMap) {
      query.destroy();
      this.queries = this.queries.filter(function(x) {
        return x !== query;
      });
      if (queryInMap === query) {
        delete this.queriesMap[query.queryHash];
      }
      this.notify({
        type: "queryRemoved",
        query
      });
    }
  };
  _proto.clear = function clear() {
    var _this2 = this;
    notifyManager.batch(function() {
      _this2.queries.forEach(function(query) {
        _this2.remove(query);
      });
    });
  };
  _proto.get = function get(queryHash) {
    return this.queriesMap[queryHash];
  };
  _proto.getAll = function getAll() {
    return this.queries;
  };
  _proto.find = function find(arg1, arg2) {
    var _parseFilterArgs = parseFilterArgs(arg1, arg2), filters = _parseFilterArgs[0];
    if (typeof filters.exact === "undefined") {
      filters.exact = true;
    }
    return this.queries.find(function(query) {
      return matchQuery(filters, query);
    });
  };
  _proto.findAll = function findAll(arg1, arg2) {
    var _parseFilterArgs2 = parseFilterArgs(arg1, arg2), filters = _parseFilterArgs2[0];
    return Object.keys(filters).length > 0 ? this.queries.filter(function(query) {
      return matchQuery(filters, query);
    }) : this.queries;
  };
  _proto.notify = function notify(event) {
    var _this3 = this;
    notifyManager.batch(function() {
      _this3.listeners.forEach(function(listener) {
        listener(event);
      });
    });
  };
  _proto.onFocus = function onFocus() {
    var _this4 = this;
    notifyManager.batch(function() {
      _this4.queries.forEach(function(query) {
        query.onFocus();
      });
    });
  };
  _proto.onOnline = function onOnline() {
    var _this5 = this;
    notifyManager.batch(function() {
      _this5.queries.forEach(function(query) {
        query.onOnline();
      });
    });
  };
  return QueryCache2;
}(Subscribable);

// node_modules/react-query/es/core/queryClient.js
init_react();
init_extends();

// node_modules/react-query/es/core/mutationCache.js
init_react();

// node_modules/react-query/es/core/mutation.js
init_react();
init_extends();
var Mutation = /* @__PURE__ */ function() {
  function Mutation2(config) {
    this.options = _extends({}, config.defaultOptions, config.options);
    this.mutationId = config.mutationId;
    this.mutationCache = config.mutationCache;
    this.observers = [];
    this.state = config.state || getDefaultState();
    this.meta = config.meta;
  }
  var _proto = Mutation2.prototype;
  _proto.setState = function setState(state) {
    this.dispatch({
      type: "setState",
      state
    });
  };
  _proto.addObserver = function addObserver(observer) {
    if (this.observers.indexOf(observer) === -1) {
      this.observers.push(observer);
    }
  };
  _proto.removeObserver = function removeObserver(observer) {
    this.observers = this.observers.filter(function(x) {
      return x !== observer;
    });
  };
  _proto.cancel = function cancel() {
    if (this.retryer) {
      this.retryer.cancel();
      return this.retryer.promise.then(noop).catch(noop);
    }
    return Promise.resolve();
  };
  _proto.continue = function _continue() {
    if (this.retryer) {
      this.retryer.continue();
      return this.retryer.promise;
    }
    return this.execute();
  };
  _proto.execute = function execute() {
    var _this = this;
    var data;
    var restored = this.state.status === "loading";
    var promise = Promise.resolve();
    if (!restored) {
      this.dispatch({
        type: "loading",
        variables: this.options.variables
      });
      promise = promise.then(function() {
        _this.mutationCache.config.onMutate == null ? void 0 : _this.mutationCache.config.onMutate(_this.state.variables, _this);
      }).then(function() {
        return _this.options.onMutate == null ? void 0 : _this.options.onMutate(_this.state.variables);
      }).then(function(context) {
        if (context !== _this.state.context) {
          _this.dispatch({
            type: "loading",
            context,
            variables: _this.state.variables
          });
        }
      });
    }
    return promise.then(function() {
      return _this.executeMutation();
    }).then(function(result) {
      data = result;
      _this.mutationCache.config.onSuccess == null ? void 0 : _this.mutationCache.config.onSuccess(data, _this.state.variables, _this.state.context, _this);
    }).then(function() {
      return _this.options.onSuccess == null ? void 0 : _this.options.onSuccess(data, _this.state.variables, _this.state.context);
    }).then(function() {
      return _this.options.onSettled == null ? void 0 : _this.options.onSettled(data, null, _this.state.variables, _this.state.context);
    }).then(function() {
      _this.dispatch({
        type: "success",
        data
      });
      return data;
    }).catch(function(error) {
      _this.mutationCache.config.onError == null ? void 0 : _this.mutationCache.config.onError(error, _this.state.variables, _this.state.context, _this);
      getLogger().error(error);
      return Promise.resolve().then(function() {
        return _this.options.onError == null ? void 0 : _this.options.onError(error, _this.state.variables, _this.state.context);
      }).then(function() {
        return _this.options.onSettled == null ? void 0 : _this.options.onSettled(void 0, error, _this.state.variables, _this.state.context);
      }).then(function() {
        _this.dispatch({
          type: "error",
          error
        });
        throw error;
      });
    });
  };
  _proto.executeMutation = function executeMutation() {
    var _this2 = this, _this$options$retry;
    this.retryer = new Retryer({
      fn: function fn() {
        if (!_this2.options.mutationFn) {
          return Promise.reject("No mutationFn found");
        }
        return _this2.options.mutationFn(_this2.state.variables);
      },
      onFail: function onFail() {
        _this2.dispatch({
          type: "failed"
        });
      },
      onPause: function onPause() {
        _this2.dispatch({
          type: "pause"
        });
      },
      onContinue: function onContinue() {
        _this2.dispatch({
          type: "continue"
        });
      },
      retry: (_this$options$retry = this.options.retry) != null ? _this$options$retry : 0,
      retryDelay: this.options.retryDelay
    });
    return this.retryer.promise;
  };
  _proto.dispatch = function dispatch(action) {
    var _this3 = this;
    this.state = reducer(this.state, action);
    notifyManager.batch(function() {
      _this3.observers.forEach(function(observer) {
        observer.onMutationUpdate(action);
      });
      _this3.mutationCache.notify(_this3);
    });
  };
  return Mutation2;
}();
function getDefaultState() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    isPaused: false,
    status: "idle",
    variables: void 0
  };
}
function reducer(state, action) {
  switch (action.type) {
    case "failed":
      return _extends({}, state, {
        failureCount: state.failureCount + 1
      });
    case "pause":
      return _extends({}, state, {
        isPaused: true
      });
    case "continue":
      return _extends({}, state, {
        isPaused: false
      });
    case "loading":
      return _extends({}, state, {
        context: action.context,
        data: void 0,
        error: null,
        isPaused: false,
        status: "loading",
        variables: action.variables
      });
    case "success":
      return _extends({}, state, {
        data: action.data,
        error: null,
        status: "success",
        isPaused: false
      });
    case "error":
      return _extends({}, state, {
        data: void 0,
        error: action.error,
        failureCount: state.failureCount + 1,
        isPaused: false,
        status: "error"
      });
    case "setState":
      return _extends({}, state, action.state);
    default:
      return state;
  }
}

// node_modules/react-query/es/core/mutationCache.js
var MutationCache = /* @__PURE__ */ function(_Subscribable) {
  _inheritsLoose(MutationCache2, _Subscribable);
  function MutationCache2(config) {
    var _this;
    _this = _Subscribable.call(this) || this;
    _this.config = config || {};
    _this.mutations = [];
    _this.mutationId = 0;
    return _this;
  }
  var _proto = MutationCache2.prototype;
  _proto.build = function build(client, options, state) {
    var mutation = new Mutation({
      mutationCache: this,
      mutationId: ++this.mutationId,
      options: client.defaultMutationOptions(options),
      state,
      defaultOptions: options.mutationKey ? client.getMutationDefaults(options.mutationKey) : void 0,
      meta: options.meta
    });
    this.add(mutation);
    return mutation;
  };
  _proto.add = function add(mutation) {
    this.mutations.push(mutation);
    this.notify(mutation);
  };
  _proto.remove = function remove(mutation) {
    this.mutations = this.mutations.filter(function(x) {
      return x !== mutation;
    });
    mutation.cancel();
    this.notify(mutation);
  };
  _proto.clear = function clear() {
    var _this2 = this;
    notifyManager.batch(function() {
      _this2.mutations.forEach(function(mutation) {
        _this2.remove(mutation);
      });
    });
  };
  _proto.getAll = function getAll() {
    return this.mutations;
  };
  _proto.find = function find(filters) {
    if (typeof filters.exact === "undefined") {
      filters.exact = true;
    }
    return this.mutations.find(function(mutation) {
      return matchMutation(filters, mutation);
    });
  };
  _proto.findAll = function findAll(filters) {
    return this.mutations.filter(function(mutation) {
      return matchMutation(filters, mutation);
    });
  };
  _proto.notify = function notify(mutation) {
    var _this3 = this;
    notifyManager.batch(function() {
      _this3.listeners.forEach(function(listener) {
        listener(mutation);
      });
    });
  };
  _proto.onFocus = function onFocus() {
    this.resumePausedMutations();
  };
  _proto.onOnline = function onOnline() {
    this.resumePausedMutations();
  };
  _proto.resumePausedMutations = function resumePausedMutations() {
    var pausedMutations = this.mutations.filter(function(x) {
      return x.state.isPaused;
    });
    return notifyManager.batch(function() {
      return pausedMutations.reduce(function(promise, mutation) {
        return promise.then(function() {
          return mutation.continue().catch(noop);
        });
      }, Promise.resolve());
    });
  };
  return MutationCache2;
}(Subscribable);

// node_modules/react-query/es/core/infiniteQueryBehavior.js
init_react();
function infiniteQueryBehavior() {
  return {
    onFetch: function onFetch(context) {
      context.fetchFn = function() {
        var _context$fetchOptions, _context$fetchOptions2, _context$fetchOptions3, _context$fetchOptions4, _context$state$data, _context$state$data2;
        var refetchPage = (_context$fetchOptions = context.fetchOptions) == null ? void 0 : (_context$fetchOptions2 = _context$fetchOptions.meta) == null ? void 0 : _context$fetchOptions2.refetchPage;
        var fetchMore = (_context$fetchOptions3 = context.fetchOptions) == null ? void 0 : (_context$fetchOptions4 = _context$fetchOptions3.meta) == null ? void 0 : _context$fetchOptions4.fetchMore;
        var pageParam = fetchMore == null ? void 0 : fetchMore.pageParam;
        var isFetchingNextPage = (fetchMore == null ? void 0 : fetchMore.direction) === "forward";
        var isFetchingPreviousPage = (fetchMore == null ? void 0 : fetchMore.direction) === "backward";
        var oldPages = ((_context$state$data = context.state.data) == null ? void 0 : _context$state$data.pages) || [];
        var oldPageParams = ((_context$state$data2 = context.state.data) == null ? void 0 : _context$state$data2.pageParams) || [];
        var abortController = getAbortController();
        var abortSignal = abortController == null ? void 0 : abortController.signal;
        var newPageParams = oldPageParams;
        var cancelled = false;
        var queryFn = context.options.queryFn || function() {
          return Promise.reject("Missing queryFn");
        };
        var buildNewPages = function buildNewPages2(pages, param2, page, previous) {
          newPageParams = previous ? [param2].concat(newPageParams) : [].concat(newPageParams, [param2]);
          return previous ? [page].concat(pages) : [].concat(pages, [page]);
        };
        var fetchPage = function fetchPage2(pages, manual2, param2, previous) {
          if (cancelled) {
            return Promise.reject("Cancelled");
          }
          if (typeof param2 === "undefined" && !manual2 && pages.length) {
            return Promise.resolve(pages);
          }
          var queryFnContext = {
            queryKey: context.queryKey,
            signal: abortSignal,
            pageParam: param2,
            meta: context.meta
          };
          var queryFnResult = queryFn(queryFnContext);
          var promise2 = Promise.resolve(queryFnResult).then(function(page) {
            return buildNewPages(pages, param2, page, previous);
          });
          if (isCancelable(queryFnResult)) {
            var promiseAsAny = promise2;
            promiseAsAny.cancel = queryFnResult.cancel;
          }
          return promise2;
        };
        var promise;
        if (!oldPages.length) {
          promise = fetchPage([]);
        } else if (isFetchingNextPage) {
          var manual = typeof pageParam !== "undefined";
          var param = manual ? pageParam : getNextPageParam(context.options, oldPages);
          promise = fetchPage(oldPages, manual, param);
        } else if (isFetchingPreviousPage) {
          var _manual = typeof pageParam !== "undefined";
          var _param = _manual ? pageParam : getPreviousPageParam(context.options, oldPages);
          promise = fetchPage(oldPages, _manual, _param, true);
        } else {
          (function() {
            newPageParams = [];
            var manual2 = typeof context.options.getNextPageParam === "undefined";
            var shouldFetchFirstPage = refetchPage && oldPages[0] ? refetchPage(oldPages[0], 0, oldPages) : true;
            promise = shouldFetchFirstPage ? fetchPage([], manual2, oldPageParams[0]) : Promise.resolve(buildNewPages([], oldPageParams[0], oldPages[0]));
            var _loop = function _loop2(i2) {
              promise = promise.then(function(pages) {
                var shouldFetchNextPage = refetchPage && oldPages[i2] ? refetchPage(oldPages[i2], i2, oldPages) : true;
                if (shouldFetchNextPage) {
                  var _param2 = manual2 ? oldPageParams[i2] : getNextPageParam(context.options, pages);
                  return fetchPage(pages, manual2, _param2);
                }
                return Promise.resolve(buildNewPages(pages, oldPageParams[i2], oldPages[i2]));
              });
            };
            for (var i = 1; i < oldPages.length; i++) {
              _loop(i);
            }
          })();
        }
        var finalPromise = promise.then(function(pages) {
          return {
            pages,
            pageParams: newPageParams
          };
        });
        var finalPromiseAsAny = finalPromise;
        finalPromiseAsAny.cancel = function() {
          cancelled = true;
          abortController == null ? void 0 : abortController.abort();
          if (isCancelable(promise)) {
            promise.cancel();
          }
        };
        return finalPromise;
      };
    }
  };
}
function getNextPageParam(options, pages) {
  return options.getNextPageParam == null ? void 0 : options.getNextPageParam(pages[pages.length - 1], pages);
}
function getPreviousPageParam(options, pages) {
  return options.getPreviousPageParam == null ? void 0 : options.getPreviousPageParam(pages[0], pages);
}

// node_modules/react-query/es/core/queryClient.js
var QueryClient = /* @__PURE__ */ function() {
  function QueryClient2(config) {
    if (config === void 0) {
      config = {};
    }
    this.queryCache = config.queryCache || new QueryCache();
    this.mutationCache = config.mutationCache || new MutationCache();
    this.defaultOptions = config.defaultOptions || {};
    this.queryDefaults = [];
    this.mutationDefaults = [];
  }
  var _proto = QueryClient2.prototype;
  _proto.mount = function mount() {
    var _this = this;
    this.unsubscribeFocus = focusManager.subscribe(function() {
      if (focusManager.isFocused() && onlineManager.isOnline()) {
        _this.mutationCache.onFocus();
        _this.queryCache.onFocus();
      }
    });
    this.unsubscribeOnline = onlineManager.subscribe(function() {
      if (focusManager.isFocused() && onlineManager.isOnline()) {
        _this.mutationCache.onOnline();
        _this.queryCache.onOnline();
      }
    });
  };
  _proto.unmount = function unmount() {
    var _this$unsubscribeFocu, _this$unsubscribeOnli;
    (_this$unsubscribeFocu = this.unsubscribeFocus) == null ? void 0 : _this$unsubscribeFocu.call(this);
    (_this$unsubscribeOnli = this.unsubscribeOnline) == null ? void 0 : _this$unsubscribeOnli.call(this);
  };
  _proto.isFetching = function isFetching(arg1, arg2) {
    var _parseFilterArgs = parseFilterArgs(arg1, arg2), filters = _parseFilterArgs[0];
    filters.fetching = true;
    return this.queryCache.findAll(filters).length;
  };
  _proto.isMutating = function isMutating(filters) {
    return this.mutationCache.findAll(_extends({}, filters, {
      fetching: true
    })).length;
  };
  _proto.getQueryData = function getQueryData(queryKey, filters) {
    var _this$queryCache$find;
    return (_this$queryCache$find = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find.state.data;
  };
  _proto.getQueriesData = function getQueriesData(queryKeyOrFilters) {
    return this.getQueryCache().findAll(queryKeyOrFilters).map(function(_ref) {
      var queryKey = _ref.queryKey, state = _ref.state;
      var data = state.data;
      return [queryKey, data];
    });
  };
  _proto.setQueryData = function setQueryData(queryKey, updater, options) {
    var parsedOptions = parseQueryArgs(queryKey);
    var defaultedOptions = this.defaultQueryOptions(parsedOptions);
    return this.queryCache.build(this, defaultedOptions).setData(updater, options);
  };
  _proto.setQueriesData = function setQueriesData(queryKeyOrFilters, updater, options) {
    var _this2 = this;
    return notifyManager.batch(function() {
      return _this2.getQueryCache().findAll(queryKeyOrFilters).map(function(_ref2) {
        var queryKey = _ref2.queryKey;
        return [queryKey, _this2.setQueryData(queryKey, updater, options)];
      });
    });
  };
  _proto.getQueryState = function getQueryState(queryKey, filters) {
    var _this$queryCache$find2;
    return (_this$queryCache$find2 = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find2.state;
  };
  _proto.removeQueries = function removeQueries(arg1, arg2) {
    var _parseFilterArgs2 = parseFilterArgs(arg1, arg2), filters = _parseFilterArgs2[0];
    var queryCache = this.queryCache;
    notifyManager.batch(function() {
      queryCache.findAll(filters).forEach(function(query) {
        queryCache.remove(query);
      });
    });
  };
  _proto.resetQueries = function resetQueries(arg1, arg2, arg3) {
    var _this3 = this;
    var _parseFilterArgs3 = parseFilterArgs(arg1, arg2, arg3), filters = _parseFilterArgs3[0], options = _parseFilterArgs3[1];
    var queryCache = this.queryCache;
    var refetchFilters = _extends({}, filters, {
      active: true
    });
    return notifyManager.batch(function() {
      queryCache.findAll(filters).forEach(function(query) {
        query.reset();
      });
      return _this3.refetchQueries(refetchFilters, options);
    });
  };
  _proto.cancelQueries = function cancelQueries(arg1, arg2, arg3) {
    var _this4 = this;
    var _parseFilterArgs4 = parseFilterArgs(arg1, arg2, arg3), filters = _parseFilterArgs4[0], _parseFilterArgs4$ = _parseFilterArgs4[1], cancelOptions = _parseFilterArgs4$ === void 0 ? {} : _parseFilterArgs4$;
    if (typeof cancelOptions.revert === "undefined") {
      cancelOptions.revert = true;
    }
    var promises = notifyManager.batch(function() {
      return _this4.queryCache.findAll(filters).map(function(query) {
        return query.cancel(cancelOptions);
      });
    });
    return Promise.all(promises).then(noop).catch(noop);
  };
  _proto.invalidateQueries = function invalidateQueries(arg1, arg2, arg3) {
    var _ref3, _filters$refetchActiv, _filters$refetchInact, _this5 = this;
    var _parseFilterArgs5 = parseFilterArgs(arg1, arg2, arg3), filters = _parseFilterArgs5[0], options = _parseFilterArgs5[1];
    var refetchFilters = _extends({}, filters, {
      active: (_ref3 = (_filters$refetchActiv = filters.refetchActive) != null ? _filters$refetchActiv : filters.active) != null ? _ref3 : true,
      inactive: (_filters$refetchInact = filters.refetchInactive) != null ? _filters$refetchInact : false
    });
    return notifyManager.batch(function() {
      _this5.queryCache.findAll(filters).forEach(function(query) {
        query.invalidate();
      });
      return _this5.refetchQueries(refetchFilters, options);
    });
  };
  _proto.refetchQueries = function refetchQueries(arg1, arg2, arg3) {
    var _this6 = this;
    var _parseFilterArgs6 = parseFilterArgs(arg1, arg2, arg3), filters = _parseFilterArgs6[0], options = _parseFilterArgs6[1];
    var promises = notifyManager.batch(function() {
      return _this6.queryCache.findAll(filters).map(function(query) {
        return query.fetch(void 0, _extends({}, options, {
          meta: {
            refetchPage: filters == null ? void 0 : filters.refetchPage
          }
        }));
      });
    });
    var promise = Promise.all(promises).then(noop);
    if (!(options == null ? void 0 : options.throwOnError)) {
      promise = promise.catch(noop);
    }
    return promise;
  };
  _proto.fetchQuery = function fetchQuery(arg1, arg2, arg3) {
    var parsedOptions = parseQueryArgs(arg1, arg2, arg3);
    var defaultedOptions = this.defaultQueryOptions(parsedOptions);
    if (typeof defaultedOptions.retry === "undefined") {
      defaultedOptions.retry = false;
    }
    var query = this.queryCache.build(this, defaultedOptions);
    return query.isStaleByTime(defaultedOptions.staleTime) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
  };
  _proto.prefetchQuery = function prefetchQuery(arg1, arg2, arg3) {
    return this.fetchQuery(arg1, arg2, arg3).then(noop).catch(noop);
  };
  _proto.fetchInfiniteQuery = function fetchInfiniteQuery(arg1, arg2, arg3) {
    var parsedOptions = parseQueryArgs(arg1, arg2, arg3);
    parsedOptions.behavior = infiniteQueryBehavior();
    return this.fetchQuery(parsedOptions);
  };
  _proto.prefetchInfiniteQuery = function prefetchInfiniteQuery(arg1, arg2, arg3) {
    return this.fetchInfiniteQuery(arg1, arg2, arg3).then(noop).catch(noop);
  };
  _proto.cancelMutations = function cancelMutations() {
    var _this7 = this;
    var promises = notifyManager.batch(function() {
      return _this7.mutationCache.getAll().map(function(mutation) {
        return mutation.cancel();
      });
    });
    return Promise.all(promises).then(noop).catch(noop);
  };
  _proto.resumePausedMutations = function resumePausedMutations() {
    return this.getMutationCache().resumePausedMutations();
  };
  _proto.executeMutation = function executeMutation(options) {
    return this.mutationCache.build(this, options).execute();
  };
  _proto.getQueryCache = function getQueryCache() {
    return this.queryCache;
  };
  _proto.getMutationCache = function getMutationCache() {
    return this.mutationCache;
  };
  _proto.getDefaultOptions = function getDefaultOptions() {
    return this.defaultOptions;
  };
  _proto.setDefaultOptions = function setDefaultOptions(options) {
    this.defaultOptions = options;
  };
  _proto.setQueryDefaults = function setQueryDefaults(queryKey, options) {
    var result = this.queryDefaults.find(function(x) {
      return hashQueryKey(queryKey) === hashQueryKey(x.queryKey);
    });
    if (result) {
      result.defaultOptions = options;
    } else {
      this.queryDefaults.push({
        queryKey,
        defaultOptions: options
      });
    }
  };
  _proto.getQueryDefaults = function getQueryDefaults(queryKey) {
    var _this$queryDefaults$f;
    return queryKey ? (_this$queryDefaults$f = this.queryDefaults.find(function(x) {
      return partialMatchKey(queryKey, x.queryKey);
    })) == null ? void 0 : _this$queryDefaults$f.defaultOptions : void 0;
  };
  _proto.setMutationDefaults = function setMutationDefaults(mutationKey, options) {
    var result = this.mutationDefaults.find(function(x) {
      return hashQueryKey(mutationKey) === hashQueryKey(x.mutationKey);
    });
    if (result) {
      result.defaultOptions = options;
    } else {
      this.mutationDefaults.push({
        mutationKey,
        defaultOptions: options
      });
    }
  };
  _proto.getMutationDefaults = function getMutationDefaults(mutationKey) {
    var _this$mutationDefault;
    return mutationKey ? (_this$mutationDefault = this.mutationDefaults.find(function(x) {
      return partialMatchKey(mutationKey, x.mutationKey);
    })) == null ? void 0 : _this$mutationDefault.defaultOptions : void 0;
  };
  _proto.defaultQueryOptions = function defaultQueryOptions(options) {
    if (options == null ? void 0 : options._defaulted) {
      return options;
    }
    var defaultedOptions = _extends({}, this.defaultOptions.queries, this.getQueryDefaults(options == null ? void 0 : options.queryKey), options, {
      _defaulted: true
    });
    if (!defaultedOptions.queryHash && defaultedOptions.queryKey) {
      defaultedOptions.queryHash = hashQueryKeyByOptions(defaultedOptions.queryKey, defaultedOptions);
    }
    return defaultedOptions;
  };
  _proto.defaultQueryObserverOptions = function defaultQueryObserverOptions(options) {
    return this.defaultQueryOptions(options);
  };
  _proto.defaultMutationOptions = function defaultMutationOptions(options) {
    if (options == null ? void 0 : options._defaulted) {
      return options;
    }
    return _extends({}, this.defaultOptions.mutations, this.getMutationDefaults(options == null ? void 0 : options.mutationKey), options, {
      _defaulted: true
    });
  };
  _proto.clear = function clear() {
    this.queryCache.clear();
    this.mutationCache.clear();
  };
  return QueryClient2;
}();

// node_modules/react-query/es/react/index.js
init_react();

// node_modules/react-query/es/react/setBatchUpdatesFn.js
init_react();

// node_modules/react-query/es/react/reactBatchedUpdates.js
init_react();
var import_react_dom = __toESM(require_react_dom());
var unstable_batchedUpdates = import_react_dom.default.unstable_batchedUpdates;

// node_modules/react-query/es/react/setBatchUpdatesFn.js
notifyManager.setBatchNotifyFunction(unstable_batchedUpdates);

// node_modules/react-query/es/react/setLogger.js
init_react();

// node_modules/react-query/es/react/logger.js
init_react();
var logger2 = console;

// node_modules/react-query/es/react/setLogger.js
setLogger(logger2);

// node_modules/react-query/es/react/QueryClientProvider.js
init_react();
var import_react = __toESM(require_react());
var defaultContext = /* @__PURE__ */ import_react.default.createContext(void 0);
var QueryClientSharingContext = /* @__PURE__ */ import_react.default.createContext(false);
function getQueryClientContext(contextSharing) {
  if (contextSharing && typeof window !== "undefined") {
    if (!window.ReactQueryClientContext) {
      window.ReactQueryClientContext = defaultContext;
    }
    return window.ReactQueryClientContext;
  }
  return defaultContext;
}
var QueryClientProvider = function QueryClientProvider2(_ref) {
  var client = _ref.client, _ref$contextSharing = _ref.contextSharing, contextSharing = _ref$contextSharing === void 0 ? false : _ref$contextSharing, children = _ref.children;
  import_react.default.useEffect(function() {
    client.mount();
    return function() {
      client.unmount();
    };
  }, [client]);
  var Context = getQueryClientContext(contextSharing);
  return /* @__PURE__ */ import_react.default.createElement(QueryClientSharingContext.Provider, {
    value: contextSharing
  }, /* @__PURE__ */ import_react.default.createElement(Context.Provider, {
    value: client
  }, children));
};

// app/components/404.tsx
init_react();

// assets/error.svg
var error_default = "/build/_assets/error-QFEJFKUP.svg";

// app/components/404.tsx
var ErrorComponent = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "lg:w-content w-full mx-auto flex flex-col mt-20 gap-5 items-center justify-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: `${error_default}`
  }), /* @__PURE__ */ React.createElement("p", {
    className: "text-text text-center"
  }, "Someone ate the wrong doughnut."), /* @__PURE__ */ React.createElement(Link, {
    prefetch: "intent",
    to: "/",
    className: "bg-white font-semibold px-5 py-3 w-60 text-center"
  }, "Get me out of here"));
};

// app/root.tsx
var queryClient = new QueryClient();
var meta = () => {
  return { title: "Dounut" };
};
function links() {
  return [{ rel: "stylesheet", href: tailwind_default }];
}
function App() {
  const data = useLoaderData();
  if (typeof window !== "undefined") {
    window.addEventListener("load", function() {
      navigator.serviceWorker.register("/sw.js").then(function(registration) {
        console.log("ServiceWorker registration successful with scope: ", registration.scope);
      }, function(err) {
        console.log("ServiceWorker registration failed: ", err);
      });
    });
  }
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: "bg-primary relative z-10"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "apple-mobile-web-app-capable",
    content: "yes"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "mobile-web-app-capable",
    content: "yes"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "apple-touch-icon",
    href: "/icons/windows11/Square150x150Logo.scale-100.png"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: "/icons/windows11/Square150x150Logo.scale-100.png"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "msapplication-TileColor",
    content: "#ffffff"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "msapplication-TileImage",
    content: "/icons/windows11/Square150x150Logo.scale-100.png"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "theme-color",
    content: "#ffffff"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "apple-touch-startup-image",
    href: "/images/icons/windows11/Square150x150Logo.scale-100.png"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "apple-mobile-web-app-title",
    content: "Dounot"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "manifest",
    href: "/manifest.json"
  }), /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null), /* @__PURE__ */ React.createElement("script", {
    suppressHydrationWarning: true,
    type: "text/css"
  }, '*,:after,:before{box-sizing:border-box;border:0 solid}:after,:before{--tw-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}body{margin:0;line-height:inherit}h2{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}figure,h2,p{margin:0}img,svg{display:block;vertical-align:middle}img{max-width:100%;height:auto}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em}*,:after,:before{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (max-width:1024px){#grid-item{grid-column:span 3!important}}.absolute{position:absolute}.relative{position:relative}.-right-2{right:-.5rem}.-top-2{top:-.5rem}.z-10{z-index:10}.mx-auto{margin-left:auto;margin-right:auto}.mt-4{margin-top:1rem}.flex{display:flex}.h-80{height:20rem}.h-full{height:100%}.h-5{height:1.25rem}.w-full{width:100%}.w-60{width:15rem}.w-5{width:1.25rem}.flex-col{flex-direction:column}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-evenly{justify-content:space-evenly}.gap-5{gap:1.25rem}.gap-1{gap:.25rem}.self-end{align-self:flex-end}.overflow-hidden{overflow:hidden}.rounded-xl{border-radius:.75rem}.rounded-2xl{border-radius:1rem}.rounded-full{border-radius:1000px}.rounded-r-xl{border-top-right-radius:.75rem;border-bottom-right-radius:.75rem}.bg-primary{--tw-bg-opacity:1;background-color:rgb(255 247 240/var(--tw-bg-opacity))}.bg-background1{--tw-bg-opacity:1;background-color:rgb(240 239 235/var(--tw-bg-opacity))}.bg-grey{background-color:#00000008}.bg-text{--tw-bg-opacity:1;background-color:rgb(55 53 103/var(--tw-bg-opacity))}.p-8{padding:2rem}.p-5{padding:1.25rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-7{padding-top:1.75rem;padding-bottom:1.75rem}.py-20{padding-top:5rem;padding-bottom:5rem}.text-center{text-align:center}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-bold{font-weight:700}.text-primary{--tw-text-opacity:1;color:rgb(255 247 240/var(--tw-text-opacity))}'), /* @__PURE__ */ React.createElement("script", {
    defer: true,
    src: "https://pim.crystallize.com/static/frontend-preview-listener.js"
  })), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(QueryClientProvider, {
    client: queryClient
  }, /* @__PURE__ */ React.createElement(BasketProvider, {
    locale
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Outlet, null), /* @__PURE__ */ React.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `window.ENV = ${JSON.stringify(data.ENV)}`
    }
  }), /* @__PURE__ */ React.createElement(ScrollRestoration, null), data.ENV.NODE_EXECUTION_MODE === "development" && /* @__PURE__ */ React.createElement(LiveReload, null)))), /* @__PURE__ */ React.createElement(Scripts, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix-app lg:w-content w-full mx-auto p-8 sm:px-6"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "remix-app__header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container remix-app__header-content flex justify-between"
  }, /* @__PURE__ */ React.createElement(Link, {
    prefetch: "intent",
    to: "/",
    title: "Remix",
    className: "remix-app__header-home-link"
  }, /* @__PURE__ */ React.createElement(Logo, null)), /* @__PURE__ */ React.createElement(Link, {
    prefetch: "intent",
    to: "/cart",
    title: "Your cart",
    className: "remix-app__header-link"
  }, /* @__PURE__ */ React.createElement(BasketButton, null)))), /* @__PURE__ */ React.createElement("div", {
    className: "remix-app__main"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container remix-app__main-content"
  }, children)), /* @__PURE__ */ React.createElement("footer", {
    className: "remix-app__footer"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container remix-app__footer-content mt-40"
  }, /* @__PURE__ */ React.createElement(Link, {
    prefetch: "intent",
    to: "/",
    title: "Remix",
    className: "remix-app__header-home-link"
  }, /* @__PURE__ */ React.createElement(Logo, null)))));
}
function Logo(props) {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "49",
    height: "54",
    viewBox: "0 0 49 54",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M7.45312 18.0625H3.66797L3.69141 14.8984H7.45312C8.23438 14.8984 8.89453 14.7109 9.43359 14.3359C9.98047 13.9609 10.3945 13.4023 10.6758 12.6602C10.9648 11.9102 11.1094 10.9883 11.1094 9.89453V9.15625C11.1094 8.33594 11.0273 7.61719 10.8633 7C10.707 6.375 10.4727 5.85547 10.1602 5.44141C9.84766 5.01953 9.45703 4.70312 8.98828 4.49219C8.52734 4.28125 7.99609 4.17578 7.39453 4.17578H3.59766V1H7.39453C8.55078 1 9.60938 1.19922 10.5703 1.59766C11.5391 1.98828 12.375 2.55078 13.0781 3.28516C13.7891 4.01172 14.3359 4.875 14.7188 5.875C15.1094 6.86719 15.3047 7.96875 15.3047 9.17969V9.89453C15.3047 11.0977 15.1094 12.1992 14.7188 13.1992C14.3359 14.1992 13.793 15.0625 13.0898 15.7891C12.3867 16.5156 11.5547 17.0781 10.5938 17.4766C9.64062 17.8672 8.59375 18.0625 7.45312 18.0625ZM6.02344 1V18.0625H1.91016V1H6.02344ZM31.8867 9.19141V9.88281C31.8867 11.1875 31.7031 12.3594 31.3359 13.3984C30.9766 14.4297 30.4648 15.3125 29.8008 16.0469C29.1367 16.7734 28.3516 17.332 27.4453 17.7227C26.5391 18.1055 25.5391 18.2969 24.4453 18.2969C23.3438 18.2969 22.3359 18.1055 21.4219 17.7227C20.5156 17.332 19.7266 16.7734 19.0547 16.0469C18.3906 15.3125 17.875 14.4297 17.5078 13.3984C17.1484 12.3594 16.9688 11.1875 16.9688 9.88281V9.19141C16.9688 7.88672 17.1484 6.71484 17.5078 5.67578C17.875 4.63672 18.3867 3.75391 19.043 3.02734C19.707 2.29297 20.4922 1.73438 21.3984 1.35156C22.3125 0.960938 23.3203 0.765625 24.4219 0.765625C25.5156 0.765625 26.5156 0.960938 27.4219 1.35156C28.3359 1.73438 29.125 2.29297 29.7891 3.02734C30.4531 3.75391 30.9688 4.63672 31.3359 5.67578C31.7031 6.71484 31.8867 7.88672 31.8867 9.19141ZM27.7148 9.88281V9.16797C27.7148 8.32422 27.6406 7.58203 27.4922 6.94141C27.3516 6.29297 27.1406 5.75 26.8594 5.3125C26.5781 4.875 26.2305 4.54688 25.8164 4.32812C25.4102 4.10156 24.9453 3.98828 24.4219 3.98828C23.875 3.98828 23.3984 4.10156 22.9922 4.32812C22.5859 4.54688 22.2461 4.875 21.9727 5.3125C21.6992 5.75 21.4922 6.29297 21.3516 6.94141C21.2188 7.58203 21.1523 8.32422 21.1523 9.16797V9.88281C21.1523 10.7188 21.2188 11.4609 21.3516 12.1094C21.4922 12.75 21.6992 13.293 21.9727 13.7383C22.2539 14.1836 22.5977 14.5195 23.0039 14.7461C23.418 14.9727 23.8984 15.0859 24.4453 15.0859C24.9688 15.0859 25.4336 14.9727 25.8398 14.7461C26.2461 14.5195 26.5859 14.1836 26.8594 13.7383C27.1406 13.293 27.3516 12.75 27.4922 12.1094C27.6406 11.4609 27.7148 10.7188 27.7148 9.88281ZM45.1875 1H46.6289V12.5547C46.6289 13.8359 46.3594 14.9023 45.8203 15.7539C45.2812 16.6055 44.5547 17.2422 43.6406 17.6641C42.7344 18.0859 41.7305 18.2969 40.6289 18.2969C39.4961 18.2969 38.4766 18.0859 37.5703 17.6641C36.6641 17.2422 35.9453 16.6055 35.4141 15.7539C34.8906 14.9023 34.6289 13.8359 34.6289 12.5547V1H36.0586V12.5547C36.0586 13.5469 36.2539 14.3789 36.6445 15.0508C37.0352 15.7227 37.5742 16.2266 38.2617 16.5625C38.9492 16.8984 39.7383 17.0664 40.6289 17.0664C41.5117 17.0664 42.2969 16.8984 42.9844 16.5625C43.6719 16.2266 44.2109 15.7227 44.6016 15.0508C44.9922 14.3789 45.1875 13.5469 45.1875 12.5547V1ZM16.1602 20V37.0625H12.0586L6.02344 26.4453V37.0625H1.91016V20H6.02344L12.0586 30.6172V20H16.1602ZM33.1992 28.1914V28.8828C33.1992 30.1875 33.0156 31.3594 32.6484 32.3984C32.2891 33.4297 31.7773 34.3125 31.1133 35.0469C30.4492 35.7734 29.6641 36.332 28.7578 36.7227C27.8516 37.1055 26.8516 37.2969 25.7578 37.2969C24.6562 37.2969 23.6484 37.1055 22.7344 36.7227C21.8281 36.332 21.0391 35.7734 20.3672 35.0469C19.7031 34.3125 19.1875 33.4297 18.8203 32.3984C18.4609 31.3594 18.2812 30.1875 18.2812 28.8828V28.1914C18.2812 26.8867 18.4609 25.7148 18.8203 24.6758C19.1875 23.6367 19.6992 22.7539 20.3555 22.0273C21.0195 21.293 21.8047 20.7344 22.7109 20.3516C23.625 19.9609 24.6328 19.7656 25.7344 19.7656C26.8281 19.7656 27.8281 19.9609 28.7344 20.3516C29.6484 20.7344 30.4375 21.293 31.1016 22.0273C31.7656 22.7539 32.2812 23.6367 32.6484 24.6758C33.0156 25.7148 33.1992 26.8867 33.1992 28.1914ZM29.0273 28.8828V28.168C29.0273 27.3242 28.9531 26.582 28.8047 25.9414C28.6641 25.293 28.4531 24.75 28.1719 24.3125C27.8906 23.875 27.543 23.5469 27.1289 23.3281C26.7227 23.1016 26.2578 22.9883 25.7344 22.9883C25.1875 22.9883 24.7109 23.1016 24.3047 23.3281C23.8984 23.5469 23.5586 23.875 23.2852 24.3125C23.0117 24.75 22.8047 25.293 22.6641 25.9414C22.5312 26.582 22.4648 27.3242 22.4648 28.168V28.8828C22.4648 29.7188 22.5312 30.4609 22.6641 31.1094C22.8047 31.75 23.0117 32.293 23.2852 32.7383C23.5664 33.1836 23.9102 33.5195 24.3164 33.7461C24.7305 33.9727 25.2109 34.0859 25.7578 34.0859C26.2812 34.0859 26.7461 33.9727 27.1523 33.7461C27.5586 33.5195 27.8984 33.1836 28.1719 32.7383C28.4531 32.293 28.6641 31.75 28.8047 31.1094C28.9531 30.4609 29.0273 29.7188 29.0273 28.8828ZM42.5859 20V37.0625H38.4727V20H42.5859ZM47.7188 20V23.1758H33.457V20H47.7188Z",
    fill: "#373567"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M7.01233 51.2188C6.46025 51.2188 5.95243 51.1172 5.48889 50.9141C5.03056 50.7109 4.62952 50.4245 4.28577 50.0547C3.94722 49.6849 3.6842 49.2474 3.4967 48.7422C3.31441 48.2318 3.22327 47.6745 3.22327 47.0703V46.7344C3.22327 46.0833 3.31962 45.4948 3.51233 44.9688C3.70504 44.4427 3.97066 43.9922 4.3092 43.6172C4.64775 43.2422 5.03316 42.9557 5.46545 42.7578C5.90295 42.5547 6.36129 42.4531 6.84045 42.4531C7.37691 42.4531 7.85347 42.5495 8.27014 42.7422C8.68681 42.9297 9.03577 43.1979 9.31702 43.5469C9.60347 43.8906 9.81962 44.2995 9.96545 44.7734C10.1113 45.2422 10.1842 45.7604 10.1842 46.3281V46.8984H3.78577V46.1016H9.25452V45.9922C9.2441 45.5182 9.14775 45.0755 8.96545 44.6641C8.78837 44.2474 8.52275 43.9089 8.16858 43.6484C7.81441 43.388 7.3717 43.2578 6.84045 43.2578C6.44462 43.2578 6.08004 43.3411 5.7467 43.5078C5.41858 43.6745 5.13472 43.9141 4.89514 44.2266C4.66077 44.5339 4.47847 44.901 4.34827 45.3281C4.22327 45.75 4.16077 46.2188 4.16077 46.7344V47.0703C4.16077 47.5391 4.22847 47.9766 4.36389 48.3828C4.50452 48.7839 4.70243 49.138 4.95764 49.4453C5.21806 49.7526 5.52535 49.9922 5.87952 50.1641C6.23368 50.3359 6.62431 50.4219 7.05139 50.4219C7.55139 50.4219 7.9941 50.3307 8.37952 50.1484C8.76493 49.9609 9.11129 49.6667 9.41858 49.2656L10.0045 49.7188C9.82222 49.9896 9.59306 50.2396 9.31702 50.4688C9.04618 50.6979 8.72066 50.8802 8.34045 51.0156C7.96025 51.151 7.51754 51.2188 7.01233 51.2188ZM17.1686 49.5469V45.1875C17.1686 44.7865 17.0852 44.4401 16.9186 44.1484C16.7519 43.8568 16.5071 43.6328 16.1842 43.4766C15.8613 43.3203 15.4628 43.2422 14.9889 43.2422C14.5514 43.2422 14.1608 43.3203 13.817 43.4766C13.4785 43.6276 13.2102 43.8333 13.0123 44.0938C12.8196 44.349 12.7233 44.6328 12.7233 44.9453L11.7858 44.9375C11.7858 44.6198 11.8639 44.3125 12.0201 44.0156C12.1764 43.7188 12.3977 43.4531 12.6842 43.2188C12.9707 42.9844 13.3118 42.7995 13.7076 42.6641C14.1087 42.5234 14.5488 42.4531 15.028 42.4531C15.6321 42.4531 16.1634 42.5547 16.6217 42.7578C17.0852 42.9609 17.4472 43.2656 17.7076 43.6719C17.9681 44.0781 18.0983 44.5885 18.0983 45.2031V49.2891C18.0983 49.5807 18.1191 49.8828 18.1608 50.1953C18.2076 50.5078 18.2727 50.7656 18.3561 50.9688V51.0625H17.3639C17.3014 50.875 17.2519 50.6406 17.2155 50.3594C17.1842 50.0729 17.1686 49.8021 17.1686 49.5469ZM17.3873 46.1406L17.403 46.8594H15.567C15.0878 46.8594 14.6582 46.9036 14.278 46.9922C13.903 47.0755 13.5852 47.2005 13.3248 47.3672C13.0644 47.5286 12.8639 47.724 12.7233 47.9531C12.5878 48.1823 12.5201 48.4427 12.5201 48.7344C12.5201 49.0365 12.5957 49.3125 12.7467 49.5625C12.903 49.8125 13.1217 50.013 13.403 50.1641C13.6894 50.3099 14.028 50.3828 14.4186 50.3828C14.9394 50.3828 15.3977 50.2865 15.7936 50.0938C16.1946 49.901 16.5253 49.6484 16.7858 49.3359C17.0462 49.0234 17.2207 48.6823 17.3092 48.3125L17.7155 48.8516C17.6477 49.112 17.5227 49.3802 17.3405 49.6562C17.1634 49.9271 16.9316 50.1823 16.6451 50.4219C16.3587 50.6562 16.0201 50.849 15.6295 51C15.2441 51.1458 14.8066 51.2188 14.317 51.2188C13.7649 51.2188 13.2832 51.1146 12.8717 50.9062C12.4655 50.6979 12.1477 50.4141 11.9186 50.0547C11.6946 49.6901 11.5826 49.2786 11.5826 48.8203C11.5826 48.4036 11.6712 48.0312 11.8483 47.7031C12.0253 47.3698 12.2806 47.0885 12.6139 46.8594C12.9524 46.625 13.3587 46.4479 13.8326 46.3281C14.3118 46.2031 14.8483 46.1406 15.442 46.1406H17.3873ZM23.8014 42.6094V43.375H19.567V42.6094H23.8014ZM21.1217 40.4375H22.0514V49.0078C22.0514 49.3984 22.1035 49.6927 22.2076 49.8906C22.3118 50.0885 22.4472 50.2214 22.6139 50.2891C22.7806 50.3568 22.9602 50.3906 23.153 50.3906C23.2936 50.3906 23.429 50.3828 23.5592 50.3672C23.6894 50.3464 23.8066 50.3255 23.9108 50.3047L23.9498 51.0938C23.8352 51.1302 23.6868 51.1589 23.5045 51.1797C23.3222 51.2057 23.1399 51.2188 22.9576 51.2188C22.5983 51.2188 22.2806 51.1536 22.0045 51.0234C21.7285 50.888 21.5123 50.6589 21.3561 50.3359C21.1998 50.0078 21.1217 49.5625 21.1217 49V40.4375ZM34.8092 49.5469V45.1875C34.8092 44.7865 34.7259 44.4401 34.5592 44.1484C34.3925 43.8568 34.1477 43.6328 33.8248 43.4766C33.5019 43.3203 33.1035 43.2422 32.6295 43.2422C32.192 43.2422 31.8014 43.3203 31.4576 43.4766C31.1191 43.6276 30.8509 43.8333 30.653 44.0938C30.4602 44.349 30.3639 44.6328 30.3639 44.9453L29.4264 44.9375C29.4264 44.6198 29.5045 44.3125 29.6608 44.0156C29.817 43.7188 30.0384 43.4531 30.3248 43.2188C30.6113 42.9844 30.9524 42.7995 31.3483 42.6641C31.7493 42.5234 32.1894 42.4531 32.6686 42.4531C33.2727 42.4531 33.804 42.5547 34.2623 42.7578C34.7259 42.9609 35.0878 43.2656 35.3483 43.6719C35.6087 44.0781 35.7389 44.5885 35.7389 45.2031V49.2891C35.7389 49.5807 35.7597 49.8828 35.8014 50.1953C35.8483 50.5078 35.9134 50.7656 35.9967 50.9688V51.0625H35.0045C34.942 50.875 34.8925 50.6406 34.8561 50.3594C34.8248 50.0729 34.8092 49.8021 34.8092 49.5469ZM35.028 46.1406L35.0436 46.8594H33.2076C32.7285 46.8594 32.2988 46.9036 31.9186 46.9922C31.5436 47.0755 31.2259 47.2005 30.9655 47.3672C30.705 47.5286 30.5045 47.724 30.3639 47.9531C30.2285 48.1823 30.1608 48.4427 30.1608 48.7344C30.1608 49.0365 30.2363 49.3125 30.3873 49.5625C30.5436 49.8125 30.7623 50.013 31.0436 50.1641C31.33 50.3099 31.6686 50.3828 32.0592 50.3828C32.58 50.3828 33.0384 50.2865 33.4342 50.0938C33.8352 49.901 34.166 49.6484 34.4264 49.3359C34.6868 49.0234 34.8613 48.6823 34.9498 48.3125L35.3561 48.8516C35.2884 49.112 35.1634 49.3802 34.9811 49.6562C34.804 49.9271 34.5722 50.1823 34.2858 50.4219C33.9993 50.6562 33.6608 50.849 33.2701 51C32.8847 51.1458 32.4472 51.2188 31.9576 51.2188C31.4056 51.2188 30.9238 51.1146 30.5123 50.9062C30.1061 50.6979 29.7884 50.4141 29.5592 50.0547C29.3352 49.6901 29.2233 49.2786 29.2233 48.8203C29.2233 48.4036 29.3118 48.0312 29.4889 47.7031C29.666 47.3698 29.9212 47.0885 30.2545 46.8594C30.5931 46.625 30.9993 46.4479 31.4733 46.3281C31.9524 46.2031 32.4889 46.1406 33.0826 46.1406H35.028ZM39.2858 39.0625V51.0625H38.3561V39.0625H39.2858ZM42.8795 39.0625V51.0625H41.9498V39.0625H42.8795Z",
    fill: "#373567"
  }));
}
function ErrorBoundary() {
  return /* @__PURE__ */ React.createElement("html", {
    className: "bg-primary"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "Oh no!"), /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", {
    style: { height: "100vh" }
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(ErrorComponent, null)), /* @__PURE__ */ React.createElement(Scripts, null)));
}
function CatchBoundary() {
  return /* @__PURE__ */ React.createElement("html", {
    className: "bg-primary"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "Oh no!"), /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", {
    style: { height: "100vh" }
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(ErrorComponent, null)), /* @__PURE__ */ React.createElement(Scripts, null)));
}
export {
  CatchBoundary,
  ErrorBoundary,
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-YGZPMRMI.js.map
