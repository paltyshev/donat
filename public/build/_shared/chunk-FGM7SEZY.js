import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-DVTHSMR5.js";

// app/components/basket/index.tsx
init_react();
var import_react = __toESM(require_react());

// app/components/basket/cache.tsx
init_react();
var cacheKey = "app-basket";
async function retrieveFromCache() {
  try {
    const cache = await localStorage.getItem(cacheKey);
    if (cache) {
      return JSON.parse(cache);
    }
  } catch (error) {
  }
  return {};
}
function persistToCache(data) {
  try {
    return localStorage.setItem(cacheKey, JSON.stringify(data));
  } catch (error) {
  }
}

// app/components/basket/reducer.ts
init_react();

// node_modules/immer/dist/immer.esm.js
init_react();
function n(n2) {
  for (var r2 = arguments.length, t2 = Array(r2 > 1 ? r2 - 1 : 0), e = 1; e < r2; e++)
    t2[e - 1] = arguments[e];
  if (true) {
    var i2 = Y[n2], o2 = i2 ? typeof i2 == "function" ? i2.apply(null, t2) : i2 : "unknown error nr: " + n2;
    throw Error("[Immer] " + o2);
  }
  throw Error("[Immer] minified error nr: " + n2 + (t2.length ? " " + t2.map(function(n3) {
    return "'" + n3 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function r(n2) {
  return !!n2 && !!n2[Q];
}
function t(n2) {
  return !!n2 && (function(n3) {
    if (!n3 || typeof n3 != "object")
      return false;
    var r2 = Object.getPrototypeOf(n3);
    if (r2 === null)
      return true;
    var t2 = Object.hasOwnProperty.call(r2, "constructor") && r2.constructor;
    return t2 === Object || typeof t2 == "function" && Function.toString.call(t2) === Z;
  }(n2) || Array.isArray(n2) || !!n2[L] || !!n2.constructor[L] || s(n2) || v(n2));
}
function i(n2, r2, t2) {
  t2 === void 0 && (t2 = false), o(n2) === 0 ? (t2 ? Object.keys : nn)(n2).forEach(function(e) {
    t2 && typeof e == "symbol" || r2(e, n2[e], n2);
  }) : n2.forEach(function(t3, e) {
    return r2(e, t3, n2);
  });
}
function o(n2) {
  var r2 = n2[Q];
  return r2 ? r2.i > 3 ? r2.i - 4 : r2.i : Array.isArray(n2) ? 1 : s(n2) ? 2 : v(n2) ? 3 : 0;
}
function u(n2, r2) {
  return o(n2) === 2 ? n2.has(r2) : Object.prototype.hasOwnProperty.call(n2, r2);
}
function a(n2, r2) {
  return o(n2) === 2 ? n2.get(r2) : n2[r2];
}
function f(n2, r2, t2) {
  var e = o(n2);
  e === 2 ? n2.set(r2, t2) : e === 3 ? (n2.delete(r2), n2.add(t2)) : n2[r2] = t2;
}
function c(n2, r2) {
  return n2 === r2 ? n2 !== 0 || 1 / n2 == 1 / r2 : n2 != n2 && r2 != r2;
}
function s(n2) {
  return X && n2 instanceof Map;
}
function v(n2) {
  return q && n2 instanceof Set;
}
function p(n2) {
  return n2.o || n2.t;
}
function l(n2) {
  if (Array.isArray(n2))
    return Array.prototype.slice.call(n2);
  var r2 = rn(n2);
  delete r2[Q];
  for (var t2 = nn(r2), e = 0; e < t2.length; e++) {
    var i2 = t2[e], o2 = r2[i2];
    o2.writable === false && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (r2[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2] });
  }
  return Object.create(Object.getPrototypeOf(n2), r2);
}
function d(n2, e) {
  return e === void 0 && (e = false), y(n2) || r(n2) || !t(n2) ? n2 : (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h), Object.freeze(n2), e && i(n2, function(n3, r2) {
    return d(r2, true);
  }, true), n2);
}
function h() {
  n(2);
}
function y(n2) {
  return n2 == null || typeof n2 != "object" || Object.isFrozen(n2);
}
function b(r2) {
  var t2 = tn[r2];
  return t2 || n(18, r2), t2;
}
function _() {
  return U || n(0), U;
}
function j(n2, r2) {
  r2 && (b("Patches"), n2.u = [], n2.s = [], n2.v = r2);
}
function O(n2) {
  g(n2), n2.p.forEach(S), n2.p = null;
}
function g(n2) {
  n2 === U && (U = n2.l);
}
function w(n2) {
  return U = { p: [], l: U, h: n2, m: true, _: 0 };
}
function S(n2) {
  var r2 = n2[Q];
  r2.i === 0 || r2.i === 1 ? r2.j() : r2.O = true;
}
function P(r2, e) {
  e._ = e.p.length;
  var i2 = e.p[0], o2 = r2 !== void 0 && r2 !== i2;
  return e.h.g || b("ES5").S(e, r2, o2), o2 ? (i2[Q].P && (O(e), n(4)), t(r2) && (r2 = M(e, r2), e.l || x(e, r2)), e.u && b("Patches").M(i2[Q].t, r2, e.u, e.s)) : r2 = M(e, i2, []), O(e), e.u && e.v(e.u, e.s), r2 !== H ? r2 : void 0;
}
function M(n2, r2, t2) {
  if (y(r2))
    return r2;
  var e = r2[Q];
  if (!e)
    return i(r2, function(i2, o3) {
      return A(n2, e, r2, i2, o3, t2);
    }, true), r2;
  if (e.A !== n2)
    return r2;
  if (!e.P)
    return x(n2, e.t, true), e.t;
  if (!e.I) {
    e.I = true, e.A._--;
    var o2 = e.i === 4 || e.i === 5 ? e.o = l(e.k) : e.o;
    i(e.i === 3 ? new Set(o2) : o2, function(r3, i2) {
      return A(n2, e, o2, r3, i2, t2);
    }), x(n2, o2, false), t2 && n2.u && b("Patches").R(e, t2, n2.u, n2.s);
  }
  return e.o;
}
function A(e, i2, o2, a2, c2, s2) {
  if (c2 === o2 && n(5), r(c2)) {
    var v2 = M(e, c2, s2 && i2 && i2.i !== 3 && !u(i2.D, a2) ? s2.concat(a2) : void 0);
    if (f(o2, a2, v2), !r(v2))
      return;
    e.m = false;
  }
  if (t(c2) && !y(c2)) {
    if (!e.h.F && e._ < 1)
      return;
    M(e, c2), i2 && i2.A.l || x(e, c2);
  }
}
function x(n2, r2, t2) {
  t2 === void 0 && (t2 = false), n2.h.F && n2.m && d(r2, t2);
}
function z(n2, r2) {
  var t2 = n2[Q];
  return (t2 ? p(t2) : n2)[r2];
}
function I(n2, r2) {
  if (r2 in n2)
    for (var t2 = Object.getPrototypeOf(n2); t2; ) {
      var e = Object.getOwnPropertyDescriptor(t2, r2);
      if (e)
        return e;
      t2 = Object.getPrototypeOf(t2);
    }
}
function k(n2) {
  n2.P || (n2.P = true, n2.l && k(n2.l));
}
function E(n2) {
  n2.o || (n2.o = l(n2.t));
}
function R(n2, r2, t2) {
  var e = s(r2) ? b("MapSet").N(r2, t2) : v(r2) ? b("MapSet").T(r2, t2) : n2.g ? function(n3, r3) {
    var t3 = Array.isArray(n3), e2 = { i: t3 ? 1 : 0, A: r3 ? r3.A : _(), P: false, I: false, D: {}, l: r3, t: n3, k: null, o: null, j: null, C: false }, i2 = e2, o2 = en;
    t3 && (i2 = [e2], o2 = on);
    var u2 = Proxy.revocable(i2, o2), a2 = u2.revoke, f2 = u2.proxy;
    return e2.k = f2, e2.j = a2, f2;
  }(r2, t2) : b("ES5").J(r2, t2);
  return (t2 ? t2.A : _()).p.push(e), e;
}
function D(e) {
  return r(e) || n(22, e), function n2(r2) {
    if (!t(r2))
      return r2;
    var e2, u2 = r2[Q], c2 = o(r2);
    if (u2) {
      if (!u2.P && (u2.i < 4 || !b("ES5").K(u2)))
        return u2.t;
      u2.I = true, e2 = F(r2, c2), u2.I = false;
    } else
      e2 = F(r2, c2);
    return i(e2, function(r3, t2) {
      u2 && a(u2.t, r3) === t2 || f(e2, r3, n2(t2));
    }), c2 === 3 ? new Set(e2) : e2;
  }(e);
}
function F(n2, r2) {
  switch (r2) {
    case 2:
      return new Map(n2);
    case 3:
      return Array.from(n2);
  }
  return l(n2);
}
var G;
var U;
var W = typeof Symbol != "undefined" && typeof Symbol("x") == "symbol";
var X = typeof Map != "undefined";
var q = typeof Set != "undefined";
var B = typeof Proxy != "undefined" && Proxy.revocable !== void 0 && typeof Reflect != "undefined";
var H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G);
var L = W ? Symbol.for("immer-draftable") : "__$immer_draftable";
var Q = W ? Symbol.for("immer-state") : "__$immer_state";
var V = typeof Symbol != "undefined" && Symbol.iterator || "@@iterator";
var Y = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(n2) {
  return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n2;
}, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(n2) {
  return "Cannot apply patch, path doesn't resolve: " + n2;
}, 16: 'Sets cannot have "replace" patches.', 17: function(n2) {
  return "Unsupported patch operation: " + n2;
}, 18: function(n2) {
  return "The plugin for '" + n2 + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n2 + "()` when initializing your application.";
}, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(n2) {
  return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n2 + "'";
}, 22: function(n2) {
  return "'current' expects a draft, got: " + n2;
}, 23: function(n2) {
  return "'original' expects a draft, got: " + n2;
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" };
var Z = "" + Object.prototype.constructor;
var nn = typeof Reflect != "undefined" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(n2) {
  return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
} : Object.getOwnPropertyNames;
var rn = Object.getOwnPropertyDescriptors || function(n2) {
  var r2 = {};
  return nn(n2).forEach(function(t2) {
    r2[t2] = Object.getOwnPropertyDescriptor(n2, t2);
  }), r2;
};
var tn = {};
var en = { get: function(n2, r2) {
  if (r2 === Q)
    return n2;
  var e = p(n2);
  if (!u(e, r2))
    return function(n3, r3, t2) {
      var e2, i3 = I(r3, t2);
      return i3 ? "value" in i3 ? i3.value : (e2 = i3.get) === null || e2 === void 0 ? void 0 : e2.call(n3.k) : void 0;
    }(n2, e, r2);
  var i2 = e[r2];
  return n2.I || !t(i2) ? i2 : i2 === z(n2.t, r2) ? (E(n2), n2.o[r2] = R(n2.A.h, i2, n2)) : i2;
}, has: function(n2, r2) {
  return r2 in p(n2);
}, ownKeys: function(n2) {
  return Reflect.ownKeys(p(n2));
}, set: function(n2, r2, t2) {
  var e = I(p(n2), r2);
  if (e == null ? void 0 : e.set)
    return e.set.call(n2.k, t2), true;
  if (!n2.P) {
    var i2 = z(p(n2), r2), o2 = i2 == null ? void 0 : i2[Q];
    if (o2 && o2.t === t2)
      return n2.o[r2] = t2, n2.D[r2] = false, true;
    if (c(t2, i2) && (t2 !== void 0 || u(n2.t, r2)))
      return true;
    E(n2), k(n2);
  }
  return n2.o[r2] === t2 && typeof t2 != "number" && (t2 !== void 0 || r2 in n2.o) || (n2.o[r2] = t2, n2.D[r2] = true, true);
}, deleteProperty: function(n2, r2) {
  return z(n2.t, r2) !== void 0 || r2 in n2.t ? (n2.D[r2] = false, E(n2), k(n2)) : delete n2.D[r2], n2.o && delete n2.o[r2], true;
}, getOwnPropertyDescriptor: function(n2, r2) {
  var t2 = p(n2), e = Reflect.getOwnPropertyDescriptor(t2, r2);
  return e ? { writable: true, configurable: n2.i !== 1 || r2 !== "length", enumerable: e.enumerable, value: t2[r2] } : e;
}, defineProperty: function() {
  n(11);
}, getPrototypeOf: function(n2) {
  return Object.getPrototypeOf(n2.t);
}, setPrototypeOf: function() {
  n(12);
} };
var on = {};
i(en, function(n2, r2) {
  on[n2] = function() {
    return arguments[0] = arguments[0][0], r2.apply(this, arguments);
  };
}), on.deleteProperty = function(r2, t2) {
  return isNaN(parseInt(t2)) && n(13), on.set.call(this, r2, t2, void 0);
}, on.set = function(r2, t2, e) {
  return t2 !== "length" && isNaN(parseInt(t2)) && n(14), en.set.call(this, r2[0], t2, e, r2[0]);
};
var un = function() {
  function e(r2) {
    var e2 = this;
    this.g = B, this.F = true, this.produce = function(r3, i3, o2) {
      if (typeof r3 == "function" && typeof i3 != "function") {
        var u2 = i3;
        i3 = r3;
        var a2 = e2;
        return function(n2) {
          var r4 = this;
          n2 === void 0 && (n2 = u2);
          for (var t2 = arguments.length, e3 = Array(t2 > 1 ? t2 - 1 : 0), o3 = 1; o3 < t2; o3++)
            e3[o3 - 1] = arguments[o3];
          return a2.produce(n2, function(n3) {
            var t3;
            return (t3 = i3).call.apply(t3, [r4, n3].concat(e3));
          });
        };
      }
      var f2;
      if (typeof i3 != "function" && n(6), o2 !== void 0 && typeof o2 != "function" && n(7), t(r3)) {
        var c2 = w(e2), s2 = R(e2, r3, void 0), v2 = true;
        try {
          f2 = i3(s2), v2 = false;
        } finally {
          v2 ? O(c2) : g(c2);
        }
        return typeof Promise != "undefined" && f2 instanceof Promise ? f2.then(function(n2) {
          return j(c2, o2), P(n2, c2);
        }, function(n2) {
          throw O(c2), n2;
        }) : (j(c2, o2), P(f2, c2));
      }
      if (!r3 || typeof r3 != "object") {
        if ((f2 = i3(r3)) === void 0 && (f2 = r3), f2 === H && (f2 = void 0), e2.F && d(f2, true), o2) {
          var p2 = [], l2 = [];
          b("Patches").M(r3, f2, p2, l2), o2(p2, l2);
        }
        return f2;
      }
      n(21, r3);
    }, this.produceWithPatches = function(n2, r3) {
      if (typeof n2 == "function")
        return function(r4) {
          for (var t3 = arguments.length, i4 = Array(t3 > 1 ? t3 - 1 : 0), o3 = 1; o3 < t3; o3++)
            i4[o3 - 1] = arguments[o3];
          return e2.produceWithPatches(r4, function(r5) {
            return n2.apply(void 0, [r5].concat(i4));
          });
        };
      var t2, i3, o2 = e2.produce(n2, r3, function(n3, r4) {
        t2 = n3, i3 = r4;
      });
      return typeof Promise != "undefined" && o2 instanceof Promise ? o2.then(function(n3) {
        return [n3, t2, i3];
      }) : [o2, t2, i3];
    }, typeof (r2 == null ? void 0 : r2.useProxies) == "boolean" && this.setUseProxies(r2.useProxies), typeof (r2 == null ? void 0 : r2.autoFreeze) == "boolean" && this.setAutoFreeze(r2.autoFreeze);
  }
  var i2 = e.prototype;
  return i2.createDraft = function(e2) {
    t(e2) || n(8), r(e2) && (e2 = D(e2));
    var i3 = w(this), o2 = R(this, e2, void 0);
    return o2[Q].C = true, g(i3), o2;
  }, i2.finishDraft = function(r2, t2) {
    var e2 = r2 && r2[Q];
    e2 && e2.C || n(9), e2.I && n(10);
    var i3 = e2.A;
    return j(i3, t2), P(void 0, i3);
  }, i2.setAutoFreeze = function(n2) {
    this.F = n2;
  }, i2.setUseProxies = function(r2) {
    r2 && !B && n(20), this.g = r2;
  }, i2.applyPatches = function(n2, t2) {
    var e2;
    for (e2 = t2.length - 1; e2 >= 0; e2--) {
      var i3 = t2[e2];
      if (i3.path.length === 0 && i3.op === "replace") {
        n2 = i3.value;
        break;
      }
    }
    e2 > -1 && (t2 = t2.slice(e2 + 1));
    var o2 = b("Patches").$;
    return r(n2) ? o2(n2, t2) : this.produce(n2, function(n3) {
      return o2(n3, t2);
    });
  }, e;
}();
var an = new un();
var fn = an.produce;
var cn = an.produceWithPatches.bind(an);
var sn = an.setAutoFreeze.bind(an);
var vn = an.setUseProxies.bind(an);
var pn = an.applyPatches.bind(an);
var ln = an.createDraft.bind(an);
var dn = an.finishDraft.bind(an);
var immer_esm_default = fn;

// app/components/basket/reducer.ts
var initialState = {
  status: "not-hydrated",
  clientBasket: {
    cart: [],
    voucherCode: null,
    crystallizeOrderId: null,
    klarnaOrderId: null
  },
  serverBasket: null,
  attentionCartItem: {}
};
var reducer_default = immer_esm_default(function reducer(draft, { action, ...rest }) {
  draft.changeTriggeredByOtherTab = false;
  switch (action) {
    case "hydrate": {
      if (draft.status === "not-hydrated") {
        if (rest.cart) {
          draft.clientBasket = rest || initialState.clientBasket;
          if (!draft.clientBasket.cart) {
            draft.clientBasket.cart = initialState.clientBasket.cart;
          }
        }
        draft.status = "server-basket-is-stale";
      }
      break;
    }
    case "channel-update": {
      draft.clientBasket = rest.clientBasket;
      draft.serverBasket = rest.serverBasket;
      draft.changeTriggeredByOtherTab = true;
      draft.status = "ready";
      break;
    }
    case "set-crystallize-order-id": {
      draft.clientBasket.crystallizeOrderId = rest.crystallizeOrderId;
      break;
    }
    case "set-klarna-order-id": {
      draft.clientBasket.klarnaOrderId = rest.klarnaOrderId;
      break;
    }
    case "server-update-failed": {
      draft.status = "server-update-failed";
      break;
    }
    case "retry-server-update": {
      draft.status = "server-basket-is-stale";
      break;
    }
    case "empty": {
      draft.clientBasket = initialState.clientBasket;
      draft.status = "server-basket-is-stale";
      break;
    }
    case "add-item":
    case "remove-item":
    case "increment-item":
    case "decrement-item": {
      const { id, sku, path, priceVariantIdentifier = "default", stock } = rest;
      if (!sku || !path) {
        throw new Error(`Please provide "sku" and "path" for ${action}`);
      }
      const itemIndex = draft.clientBasket.cart.findIndex((i2) => i2.sku === sku);
      if (itemIndex !== -1) {
        if (action === "remove-item") {
          draft.clientBasket.cart.splice(itemIndex, 1);
        } else {
          const item = draft.clientBasket.cart[itemIndex];
          if (action === "decrement-item") {
            item.quantity -= 1;
          } else {
            item.quantity += 1;
          }
        }
      } else {
        if (!["remove-item", "decrement-item"].includes(action)) {
          draft.clientBasket.cart.push({
            id,
            sku,
            path,
            priceVariantIdentifier,
            quantity: 1,
            stock
          });
        }
      }
      draft.status = "server-basket-is-stale";
      break;
    }
    case "set-server-basket": {
      draft.serverBasket = rest.serverBasket;
      draft.status = "ready";
      if (window.ENV.NEXT_PUBLIC_CRYSTALLIZE_TENANT_IDENTIFIER !== "furniture" && window.ENV.SERVICE_API_URL === "https://remix-service-api.vercel.app/api/graphql") {
        draft.clientBasket.cart = draft.serverBasket.cart.map(({ id, sku, path, quantity, stock }) => ({
          id,
          sku,
          path,
          quantity,
          priceVariantIdentifier: "default",
          stock
        }));
      }
      break;
    }
    case "draw-attention": {
      draft.attentionCartItem = {
        time: Date.now(),
        sku: rest.sku
      };
      break;
    }
    case "add-voucher": {
      draft.clientBasket.voucherCode = rest.voucherCode;
      draft.status = "server-basket-is-stale";
      break;
    }
    case "remove-voucher": {
      draft.clientBasket.voucherCode = initialState.clientBasket.voucherCode;
      draft.status = "server-basket-is-stale";
      break;
    }
    default: {
      throw new Error(`Action ${action} not supported`);
    }
  }
  if (draft.clientBasket.cart.length > 0) {
    draft.clientBasket.cart = draft.clientBasket.cart.filter(function validateCartItem({ path, sku }) {
      return path && sku;
    });
  }
  draft.totalQuantity = draft.clientBasket.cart.reduce((acc, c2) => acc + c2.quantity, 0);
});

// app/components/basket/shared-channel.ts
init_react();
var channel;
if (typeof window !== "undefined" && "BroadcastChannel" in window) {
  channel = new BroadcastChannel("app_basket");
}
function getChannel() {
  return channel;
}

// app/components/basket/get-basket-query.ts
init_react();
var GET_BASKET_QUERY = `
  query getServerBasket($basketModel: BasketModelInput!) {
    basket(basketModel: $basketModel) {
      total {
        gross
        net
        tax {
          name
          percent
        }
        currency
        discount
      }
      cart {
        sku
        name
        path
        quantity
        attributes {
          attribute
          value
        }
        price {
          gross
          currency
        }
        images {
          url
          variants {
            url
            width
            height
          }
        }
      }
    }
  }
`;
var get_basket_query_default = GET_BASKET_QUERY;

// app/service-api.ts
init_react();
async function serviceApi({
  uri = `https://remix-service-api.vercel.app/api/graphql`,
  query,
  variables
}) {
  const body = JSON.stringify({ query, variables });
  const response = await fetch(uri, {
    method: "post",
    headers: {
      "content-type": "application/json"
    },
    body
  });
  if (!response.ok) {
    throw new Error(await response.text());
  }
  const json = await response.json();
  if (json.errors) {
    console.error("Service API encountered an error", json.errors);
  }
  return json;
}

// app/components/basket/index.tsx
var BasketContext = import_react.default.createContext(void 0);
var useBasket = () => import_react.default.useContext(BasketContext);
function clientCartItemForAPI({ id, sku, path, quantity, priceVariantIdentifier, stock }) {
  return { id, sku, path, quantity, priceVariantIdentifier, stock };
}
function BasketProvider({ locale, children }) {
  const [
    {
      status,
      clientBasket,
      serverBasket,
      totalQuantity,
      changeTriggeredByOtherTab,
      attentionCartItem
    },
    dispatch
  ] = (0, import_react.useReducer)(reducer_default, initialState);
  const sharedChannelRef = (0, import_react.useRef)(getChannel());
  (0, import_react.useEffect)(() => {
    (async function init() {
      const cache = await retrieveFromCache();
      dispatch({ action: "hydrate", ...cache });
    })();
    if (sharedChannelRef.current) {
      sharedChannelRef.current.onmessage = function(event) {
        dispatch({ action: "channel-update", ...JSON.parse(event.data) });
      };
    }
  }, []);
  (0, import_react.useEffect)(() => {
    if (status !== "not-hydrated") {
      persistToCache({
        ...clientBasket,
        cart: clientBasket.cart.map(clientCartItemForAPI)
      });
    }
  }, [status, clientBasket]);
  (0, import_react.useEffect)(() => {
    var _a;
    if (status === "ready") {
      if (!changeTriggeredByOtherTab) {
        (_a = sharedChannelRef.current) == null ? void 0 : _a.postMessage(JSON.stringify({
          clientBasket,
          serverBasket
        }));
      }
    }
  }, [status, clientBasket, serverBasket, changeTriggeredByOtherTab]);
  const basketModel = (0, import_react.useMemo)(() => ({
    locale,
    cart: clientBasket.cart.map(clientCartItemForAPI),
    voucherCode: clientBasket.voucherCode,
    crystallizeOrderId: clientBasket.crystallizeOrderId,
    klarnaOrderId: clientBasket.klarnaOrderId
  }), [locale, clientBasket]);
  (0, import_react.useEffect)(() => {
    let stale = false;
    async function getServerBasket() {
      try {
        const response = await serviceApi({
          query: get_basket_query_default,
          variables: {
            basketModel
          }
        });
        if (!stale && response.data) {
          dispatch({
            action: "set-server-basket",
            serverBasket: response.data.basket
          });
        }
      } catch (error) {
        console.log(error);
        dispatch({
          action: "server-update-failed"
        });
      }
    }
    let timeout;
    if (status === "server-basket-is-stale") {
      timeout = setTimeout(getServerBasket, 250);
    }
    return () => {
      stale = true;
      clearTimeout(timeout);
    };
  }, [status, locale.crystallizeCatalogueLanguage, basketModel]);
  function dispatchCartItemAction(action) {
    return (data) => dispatch({ action, ...data });
  }
  function withLocalState(item) {
    if (item.sku.startsWith("--voucher--")) {
      return item;
    }
    const clientBasketCartItem = clientBasket.cart.find((c2) => c2.sku === item.sku);
    if (!clientBasketCartItem) {
      return null;
    }
    return {
      ...item,
      quantity: clientBasketCartItem.quantity
    };
  }
  const cart = ((serverBasket == null ? void 0 : serverBasket.cart) || []).map(withLocalState).filter(Boolean);
  if (status === "server-update-failed") {
    return /* @__PURE__ */ import_react.default.createElement("div", {
      style: { margin: "0 auto", maxWidth: 400, padding: 50 }
    }, "Oh-uh. Something went wrong when getting data from the Service API", /* @__PURE__ */ import_react.default.createElement("br", null), /* @__PURE__ */ import_react.default.createElement("br", null), /* @__PURE__ */ import_react.default.createElement("button", {
      onClick: () => dispatch({ action: "retry-server-update" })
    }, "Try again"));
  }
  return /* @__PURE__ */ import_react.default.createElement(BasketContext.Provider, {
    value: {
      status,
      basketModel,
      cart,
      total: (serverBasket == null ? void 0 : serverBasket.total) || {},
      totalQuantity,
      attentionCartItem,
      actions: {
        addVoucherCode: (voucherCode) => dispatch({ action: "add-voucher", voucherCode }),
        removeVoucherCode: () => dispatch({ action: "remove-voucher" }),
        empty: () => dispatch({ action: "empty" }),
        addItem: dispatchCartItemAction("add-item"),
        removeItem: dispatchCartItemAction("remove-item"),
        incrementItem: dispatchCartItemAction("increment-item"),
        decrementItem: dispatchCartItemAction("decrement-item"),
        drawAttention: (sku) => dispatch({ action: "draw-attention", sku }),
        setCrystallizeOrderId: (crystallizeOrderId) => dispatch({
          action: "set-crystallize-order-id",
          crystallizeOrderId
        }),
        setKlarnaOrderId: (klarnaOrderId) => dispatch({ action: "set-klarna-order-id", klarnaOrderId })
      }
    }
  }, children);
}

export {
  useBasket,
  BasketProvider
};
//# sourceMappingURL=/build/_shared/chunk-FGM7SEZY.js.map
