var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// node_modules/remix/dist/index.js
var require_dist = __commonJS({
  "node_modules/remix/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createCookie", {
      enumerable: !0,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: !0,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: !0,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: !0,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createSession", {
      enumerable: !0,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: !0,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: !0,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: !0,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: !0,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: !0,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: !0,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: !0,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: !0,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: !0,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: !0,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: !0,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: !0,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: !0,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: !0,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: !0,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: !0,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: !0,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: !0,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: !0,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: !0,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: !0,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: !0,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: !0,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: !0,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: !0,
      get: function() {
        return react.useTransition;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: !0,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: !0,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: !0,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: !0,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: !0,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: !0,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: !0,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: !0,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: !0,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: !0,
      get: function() {
        return react.useSearchParams;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_remix = __toESM(require_dist()), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), dotenv = require("dotenv");
dotenv.config();
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix.RemixServer, {
      context: remixContext,
      url: request.url
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_remix3 = __toESM(require_dist());

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-F42LZ3GO.css";

// app/components/basket/index.tsx
var import_react = __toESM(require("react"));

// app/components/basket/cache.tsx
var cacheKey = "app-basket";
async function retrieveFromCache() {
  try {
    let cache = await localStorage.getItem(cacheKey);
    if (cache)
      return JSON.parse(cache);
  } catch {
  }
  return {};
}
function persistToCache(data) {
  try {
    return localStorage.setItem(cacheKey, JSON.stringify(data));
  } catch {
  }
}

// app/components/basket/reducer.ts
var import_immer = __toESM(require("immer")), initialState = {
  status: "not-hydrated",
  clientBasket: {
    cart: [],
    voucherCode: null,
    crystallizeOrderId: null,
    klarnaOrderId: null
  },
  serverBasket: null,
  attentionCartItem: {}
}, reducer_default = (0, import_immer.default)(function(draft, { action, ...rest }) {
  switch (draft.changeTriggeredByOtherTab = !1, action) {
    case "hydrate": {
      draft.status === "not-hydrated" && (rest.cart && (draft.clientBasket = rest || initialState.clientBasket, draft.clientBasket.cart || (draft.clientBasket.cart = initialState.clientBasket.cart)), draft.status = "server-basket-is-stale");
      break;
    }
    case "channel-update": {
      draft.clientBasket = rest.clientBasket, draft.serverBasket = rest.serverBasket, draft.changeTriggeredByOtherTab = !0, draft.status = "ready";
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
      draft.clientBasket = initialState.clientBasket, draft.status = "server-basket-is-stale";
      break;
    }
    case "add-item":
    case "remove-item":
    case "increment-item":
    case "decrement-item": {
      let { id, sku, path, priceVariantIdentifier = "default", stock } = rest;
      if (!sku || !path)
        throw new Error(`Please provide "sku" and "path" for ${action}`);
      let itemIndex = draft.clientBasket.cart.findIndex((i) => i.sku === sku);
      if (itemIndex !== -1)
        if (action === "remove-item")
          draft.clientBasket.cart.splice(itemIndex, 1);
        else {
          let item = draft.clientBasket.cart[itemIndex];
          action === "decrement-item" ? item.quantity -= 1 : item.quantity += 1;
        }
      else
        ["remove-item", "decrement-item"].includes(action) || draft.clientBasket.cart.push({
          id,
          sku,
          path,
          priceVariantIdentifier,
          quantity: 1,
          stock
        });
      draft.status = "server-basket-is-stale";
      break;
    }
    case "set-server-basket": {
      draft.serverBasket = rest.serverBasket, draft.status = "ready", window.ENV.NEXT_PUBLIC_CRYSTALLIZE_TENANT_IDENTIFIER !== "furniture" && window.ENV.SERVICE_API_URL === "https://remix-service-api.vercel.app/api/graphql" && (draft.clientBasket.cart = draft.serverBasket.cart.map(
        ({ id, sku, path, quantity, stock }) => ({
          id,
          sku,
          path,
          quantity,
          priceVariantIdentifier: "default",
          stock
        })
      ));
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
      draft.clientBasket.voucherCode = rest.voucherCode, draft.status = "server-basket-is-stale";
      break;
    }
    case "remove-voucher": {
      draft.clientBasket.voucherCode = initialState.clientBasket.voucherCode, draft.status = "server-basket-is-stale";
      break;
    }
    default:
      throw new Error(`Action ${action} not supported`);
  }
  draft.clientBasket.cart.length > 0 && (draft.clientBasket.cart = draft.clientBasket.cart.filter(
    function({ path, sku }) {
      return path && sku;
    }
  )), draft.totalQuantity = draft.clientBasket.cart.reduce(
    (acc, c) => acc + c.quantity,
    0
  );
});

// app/components/basket/shared-channel.ts
var channel;
typeof window < "u" && "BroadcastChannel" in window && (channel = new BroadcastChannel("app_basket"));
function getChannel() {
  return channel;
}

// app/components/basket/get-basket-query.ts
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
`, get_basket_query_default = GET_BASKET_QUERY;

// app/service-api.ts
async function serviceApi({
  uri = "https://remix-service-api.vercel.app/api/graphql",
  query,
  variables
}) {
  let body = JSON.stringify({ query, variables }), response = await fetch(uri, {
    method: "post",
    headers: {
      "content-type": "application/json"
    },
    body
  });
  if (!response.ok)
    throw new Error(await response.text());
  let json3 = await response.json();
  return json3.errors && console.error("Service API encountered an error", json3.errors), json3;
}

// app/components/basket/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), BasketContext = import_react.default.createContext(void 0), useBasket = () => import_react.default.useContext(BasketContext);
function clientCartItemForAPI({ id, sku, path, quantity, priceVariantIdentifier, stock }) {
  return { id, sku, path, quantity, priceVariantIdentifier, stock };
}
function BasketProvider({ locale: locale2, children }) {
  let [
    {
      status,
      clientBasket,
      serverBasket,
      totalQuantity,
      changeTriggeredByOtherTab,
      attentionCartItem
    },
    dispatch
  ] = (0, import_react.useReducer)(reducer_default, initialState), sharedChannelRef = (0, import_react.useRef)(getChannel());
  (0, import_react.useEffect)(() => {
    (async function() {
      let cache = await retrieveFromCache();
      dispatch({ action: "hydrate", ...cache });
    })(), sharedChannelRef.current && (sharedChannelRef.current.onmessage = function(event) {
      dispatch({ action: "channel-update", ...JSON.parse(event.data) });
    });
  }, []), (0, import_react.useEffect)(() => {
    status !== "not-hydrated" && persistToCache({
      ...clientBasket,
      cart: clientBasket.cart.map(clientCartItemForAPI)
    });
  }, [status, clientBasket]), (0, import_react.useEffect)(() => {
    var _a;
    status === "ready" && (changeTriggeredByOtherTab || (_a = sharedChannelRef.current) == null || _a.postMessage(
      JSON.stringify({
        clientBasket,
        serverBasket
      })
    ));
  }, [status, clientBasket, serverBasket, changeTriggeredByOtherTab]);
  let basketModel = (0, import_react.useMemo)(
    () => ({
      locale: locale2,
      cart: clientBasket.cart.map(clientCartItemForAPI),
      voucherCode: clientBasket.voucherCode,
      crystallizeOrderId: clientBasket.crystallizeOrderId,
      klarnaOrderId: clientBasket.klarnaOrderId
    }),
    [locale2, clientBasket]
  );
  (0, import_react.useEffect)(() => {
    let stale = !1;
    async function getServerBasket() {
      try {
        let response = await serviceApi({
          query: get_basket_query_default,
          variables: {
            basketModel
          }
        });
        !stale && response.data && dispatch({
          action: "set-server-basket",
          serverBasket: response.data.basket
        });
      } catch (error) {
        console.log(error), dispatch({
          action: "server-update-failed"
        });
      }
    }
    let timeout;
    return status === "server-basket-is-stale" && (timeout = setTimeout(getServerBasket, 250)), () => {
      stale = !0, clearTimeout(timeout);
    };
  }, [status, locale2.crystallizeCatalogueLanguage, basketModel]);
  function dispatchCartItemAction(action) {
    return (data) => dispatch({ action, ...data });
  }
  function withLocalState(item) {
    if (item.sku.startsWith("--voucher--"))
      return item;
    let clientBasketCartItem = clientBasket.cart.find(
      (c) => c.sku === item.sku
    );
    return clientBasketCartItem ? {
      ...item,
      quantity: clientBasketCartItem.quantity
    } : null;
  }
  let cart = ((serverBasket == null ? void 0 : serverBasket.cart) || []).map(withLocalState).filter(Boolean);
  return status === "server-update-failed" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    style: { margin: "0 auto", maxWidth: 400, padding: 50 },
    children: [
      "Oh-uh. Something went wrong when getting data from the Service API",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/components/basket/index.tsx",
        lineNumber: 168,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/components/basket/index.tsx",
        lineNumber: 169,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
        onClick: () => dispatch({ action: "retry-server-update" }),
        children: "Try again"
      }, void 0, !1, {
        fileName: "app/components/basket/index.tsx",
        lineNumber: 170,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/basket/index.tsx",
    lineNumber: 166,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BasketContext.Provider, {
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
    },
    children
  }, void 0, !1, {
    fileName: "app/components/basket/index.tsx",
    lineNumber: 178,
    columnNumber: 5
  }, this);
}

// app/config/locale.ts
var locale = {
  locale: "en",
  displayName: "English - US",
  appLanguage: "en-US",
  crystallizeCatalogueLanguage: "en",
  crystallizePriceVariant: "default"
};

// app/components/basket/basket-button.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), BasketButton = () => {
  let totalQuantity, basket = useBasket();
  return basket ? totalQuantity = basket.totalQuantity : totalQuantity = "0", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "relative",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
        width: "35",
        height: "30",
        viewBox: "0 0 46 41",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M39.5255 7.38001H24.4309C23.8251 7.38001 23.2441 7.59599 22.8157 7.98044C22.3873 8.36489 22.1467 8.88631 22.1467 9.43C22.1467 9.9737 22.3873 10.4951 22.8157 10.8796C23.2441 11.264 23.8251 11.48 24.4309 11.48H39.5255C39.7149 11.4785 39.9025 11.5146 40.0746 11.5856C40.2468 11.6566 40.3994 11.7608 40.5216 11.8908C40.6438 12.0207 40.7325 12.1733 40.7814 12.3376C40.8303 12.5019 40.8383 12.6738 40.8047 12.8412L37.3417 27.7406C37.29 28.0092 37.1342 28.2528 36.9018 28.4284C36.6694 28.6039 36.3754 28.7001 36.0716 28.7H21.2695C20.9657 28.7001 20.6717 28.6039 20.4393 28.4284C20.2069 28.2528 20.0511 28.0092 19.9994 27.7406L14.9466 1.64001C14.8448 1.17693 14.5667 0.760047 14.1599 0.46083C13.7532 0.161613 13.2431 -0.00130406 12.7171 7.86192e-06H2.28254C1.93447 0.000245256 1.59105 0.0718674 1.27853 0.209404C0.96601 0.346941 0.692643 0.546755 0.479311 0.793586C0.265979 1.04042 0.118323 1.32774 0.0476204 1.6336C-0.0230824 1.93947 -0.0149621 2.25579 0.0713611 2.55841C0.210204 3.01137 0.514338 3.40944 0.935098 3.68893C1.35586 3.96842 1.86892 4.11316 2.39219 4.10001H10.8532L15.5314 28.4376C15.7668 29.6528 16.4703 30.7553 17.519 31.5526C18.5677 32.3498 19.8951 32.7913 21.2695 32.8H36.0716C37.4523 32.799 38.7884 32.361 39.8446 31.5631C40.9009 30.7651 41.6097 29.6584 41.8463 28.4376L45.3093 13.53C45.4529 12.7745 45.411 12 45.1866 11.2606C44.9621 10.5212 44.5604 9.83463 44.0096 9.24896C43.4588 8.66329 42.7722 8.19261 41.9977 7.86979C41.2231 7.54698 40.3794 7.37983 39.5255 7.38001V7.38001Z",
            fill: "#373567"
          }, void 0, !1, {
            fileName: "app/components/basket/basket-button.tsx",
            lineNumber: 23,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M33.2367 18.8599C33.8425 18.8599 34.4235 18.6439 34.8519 18.2595C35.2803 17.875 35.521 17.3536 35.521 16.8099C35.521 16.2662 35.2803 15.7448 34.8519 15.3603C34.4235 14.9759 33.8425 14.7599 33.2367 14.7599H25.927C25.3212 14.7599 24.7401 14.9759 24.3118 15.3603C23.8834 15.7448 23.6427 16.2662 23.6427 16.8099C23.6427 17.3536 23.8834 17.875 24.3118 18.2595C24.7401 18.6439 25.3212 18.8599 25.927 18.8599H33.2367Z",
            fill: "#373567"
          }, void 0, !1, {
            fileName: "app/components/basket/basket-button.tsx",
            lineNumber: 27,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M22.2723 41.0001C24.0385 41.0001 25.4703 39.7152 25.4703 38.1301C25.4703 36.5451 24.0385 35.2601 22.2723 35.2601C20.5061 35.2601 19.0743 36.5451 19.0743 38.1301C19.0743 39.7152 20.5061 41.0001 22.2723 41.0001Z",
            fill: "#373567"
          }, void 0, !1, {
            fileName: "app/components/basket/basket-button.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M35.0643 41.0001C36.8305 41.0001 38.2623 39.7152 38.2623 38.1301C38.2623 36.5451 36.8305 35.2601 35.0643 35.2601C33.2981 35.2601 31.8663 36.5451 31.8663 38.1301C31.8663 39.7152 33.2981 41.0001 35.0643 41.0001Z",
            fill: "#373567"
          }, void 0, !1, {
            fileName: "app/components/basket/basket-button.tsx",
            lineNumber: 35,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/basket/basket-button.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "w-4 h-4 absolute bg-text rounded-full text-primary text-center -right-2 -top-2 text-xs",
        children: totalQuantity
      }, void 0, !1, {
        fileName: "app/components/basket/basket-button.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/basket/basket-button.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
};

// app/root.tsx
var import_react_query = require("react-query");

// app/components/404.tsx
var import_remix2 = __toESM(require_dist());

// assets/error.svg
var error_default = "/build/_assets/error-QFEJFKUP.svg";

// app/components/404.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ErrorComponent = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
  className: "lg:w-content w-full mx-auto flex flex-col mt-20 gap-5 items-center justify-center",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
      src: `${error_default}`
    }, void 0, !1, {
      fileName: "app/components/404.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
      className: "text-text text-center",
      children: "\u041F\u043E\u0445\u043E\u0436\u0435 \u044D\u0442\u043E \u043D\u0435 \u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430."
    }, void 0, !1, {
      fileName: "app/components/404.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix2.Link, {
      prefetch: "intent",
      to: "/",
      className: "bg-white font-semibold px-5 py-3 w-60 text-center",
      children: "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E"
    }, void 0, !1, {
      fileName: "app/components/404.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/404.tsx",
  lineNumber: 7,
  columnNumber: 5
}, this);

// app/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), queryClient = new import_react_query.QueryClient(), meta = () => ({ title: "Dounut" });
function links() {
  return [{ rel: "stylesheet", href: tailwind_default }];
}
var loader = () => ({
  ENV: {
    SERVICE_API_URL: process.env.SERVICE_API_URL,
    TENANT_IDENTIFIER: process.env.CRYSTALLIZE_TENANT_IDENTIFIER,
    NODE_EXECUTION_MODE: process.env.NODE_EXECUTION_MODE
  }
});
function App() {
  let data = (0, import_remix3.useLoaderData)();
  return typeof window < "u" && window.addEventListener("load", function() {
    navigator.serviceWorker.register("/sw.js").then(
      function(registration) {
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function(err) {
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "ru",
    className: "relative z-10",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            charSet: "utf-8"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 63,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            name: "viewport",
            content: "width=device-width,initial-scale=1"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 64,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            name: "apple-mobile-web-app-capable",
            content: "yes"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 65,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            name: "mobile-web-app-capable",
            content: "yes"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 66,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
            rel: "apple-touch-icon",
            href: "/icons/windows11/Square150x150Logo.scale-100.png"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 67,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
            rel: "icon",
            type: "image/png",
            href: "/icons/windows11/Square150x150Logo.scale-100.png"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 71,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            name: "msapplication-TileColor",
            content: "#ffffff"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 76,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            name: "msapplication-TileImage",
            content: "/icons/windows11/Square150x150Logo.scale-100.png"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 77,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            name: "theme-color",
            content: "#ffffff"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 81,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
            rel: "apple-touch-startup-image",
            href: "/images/icons/windows11/Square150x150Logo.scale-100.png"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 82,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            name: "apple-mobile-web-app-title",
            content: "Dounot"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 86,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
            rel: "manifest",
            href: "/manifest.json"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 87,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix3.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 89,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix3.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 90,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
            suppressHydrationWarning: !0,
            type: "text/css",
            children: '*,:after,:before{box-sizing:border-box;border:0 solid}:after,:before{--tw-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}body{margin:0;line-height:inherit}h2{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}figure,h2,p{margin:0}img,svg{display:block;vertical-align:middle}img{max-width:100%;height:auto}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em}*,:after,:before{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (max-width:1024px){#grid-item{grid-column:span 1!important}}.absolute{position:absolute}.relative{position:relative}.-right-2{right:-.5rem}.-top-2{top:-.5rem}.z-10{z-index:10}.mx-auto{margin-left:auto;margin-right:auto}.mt-4{margin-top:1rem}.flex{display:flex}.h-80{height:20rem}.h-full{height:100%}.h-5{height:1.25rem}.w-full{width:100%}.w-60{width:15rem}.w-5{width:1.25rem}.flex-col{flex-direction:column}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-evenly{justify-content:space-evenly}.gap-5{gap:1.25rem}.gap-1{gap:.25rem}.self-end{align-self:flex-end}.overflow-hidden{overflow:hidden}.rounded-xl{border-radius:.75rem}.rounded-2xl{border-radius:1rem}.rounded-full{border-radius:1000px}.rounded-r-xl{border-top-right-radius:.75rem;border-bottom-right-radius:.75rem}.bg-primary{--tw-bg-opacity:1;background-color:rgb(255 247 240/var(--tw-bg-opacity))}.bg-background1{--tw-bg-opacity:1;background-color:rgb(240 239 235/var(--tw-bg-opacity))}.bg-grey{background-color:#00000008}.bg-text{--tw-bg-opacity:1;background-color:rgb(55 53 103/var(--tw-bg-opacity))}.p-8{padding:2rem}.p-5{padding:1.25rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-7{padding-top:1.75rem;padding-bottom:1.75rem}.py-20{padding-top:5rem;padding-bottom:5rem}.text-center{text-align:center}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-bold{font-weight:700}.text-primary{--tw-text-opacity:1;color:rgb(255 247 240/var(--tw-text-opacity))}'
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 92,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
            defer: !0,
            src: "https://pim.crystallize.com/static/frontend-preview-listener.js"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 97,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_query.QueryClientProvider, {
            client: queryClient,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BasketProvider, {
              locale,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix3.Outlet, {}, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 106,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
                    dangerouslySetInnerHTML: {
                      __html: `window.ENV = ${JSON.stringify(data.ENV)}`
                    }
                  }, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 107,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix3.ScrollRestoration, {}, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 113,
                    columnNumber: 15
                  }, this),
                  data.ENV.NODE_EXECUTION_MODE === "development" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix3.LiveReload, {}, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 114,
                    columnNumber: 66
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/root.tsx",
                lineNumber: 105,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 104,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 103,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix3.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 118,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 102,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 61,
    columnNumber: 5
  }, this);
}
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "remix-app lg:w-content w-full mx-auto p-3 sm:px-3",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
        className: "remix-app__header",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "container remix-app__header-content flex justify-between",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix3.Link, {
              prefetch: "intent",
              to: "/",
              title: "Remix",
              className: "remix-app__header-home-link",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, {}, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 135,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 129,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix3.Link, {
              prefetch: "intent",
              to: "/cart",
              title: "Your cart",
              className: "remix-app__header-link",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BasketButton, {}, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 143,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 137,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 128,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 127,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "remix-app__main",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "container remix-app__main-content",
          children
        }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 148,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 147,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
        className: "remix-app__footer",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "container remix-app__footer-content mt-40",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix3.Link, {
            prefetch: "intent",
            to: "/",
            title: "Remix",
            className: "remix-app__header-home-link",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 158,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 152,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 151,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 150,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 126,
    columnNumber: 5
  }, this);
}
function Logo(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "35",
    height: "35",
    viewBox: "0 0 512 512",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            fill: "#16153B",
            d: `M282.946,479.473h-53.893c-7.442,0-13.474-6.032-13.474-13.474c0-7.442,6.032-13.474,13.474-13.474
		h53.893c7.442,0,13.474,6.032,13.474,13.474C296.42,473.441,290.388,479.473,282.946,479.473z`
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 178,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            fill: "#16153B",
            d: `M498.526,479.473h-53.893c-7.442,0-13.474-6.032-13.474-13.474c0-7.442,6.032-13.474,13.474-13.474
		h53.893c7.442,0,13.474,6.032,13.474,13.474C512,473.441,505.968,479.473,498.526,479.473z`
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 183,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            fill: "#16153B",
            d: `M67.366,479.473H13.474C6.032,479.473,0,473.441,0,465.999c0-7.442,6.032-13.474,13.474-13.474
		h53.893c7.442,0,13.474,6.032,13.474,13.474C80.84,473.441,74.808,479.473,67.366,479.473z`
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 188,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            fill: "#16153B",
            d: `M471.581,479.473h-68.083c-37.574,0-71.907-22.098-87.468-56.298l-29.442-64.708
		c-3.081-6.773-0.089-14.763,6.683-17.845c6.773-3.083,14.762-0.09,17.845,6.683l29.443,64.707
		c11.197,24.61,35.902,40.51,62.939,40.51h51.287l-42.099-189.445c-4.626-20.812-16.117-39.877-32.363-53.685L256,103.721
		L131.677,209.393c-16.245,13.808-27.737,32.872-32.363,53.685L57.215,452.526h51.287c27.037,0,51.742-15.902,62.939-40.51
		l72.109-158.48c2.025-4.879,6.834-8.309,12.446-8.309c4.582,0,8.854,2.328,11.334,6.182c2.479,3.852,2.835,8.701,0.938,12.873
		L195.97,423.176c-15.561,34.199-49.894,56.298-87.468,56.298H40.419c-4.087,0-7.952-1.854-10.51-5.043
		c-2.557-3.189-3.53-7.365-2.642-11.354l45.742-205.841c5.889-26.504,20.527-50.787,41.215-68.372l133.05-113.09
		c5.031-4.277,12.422-4.277,17.453,0l133.05,113.09c20.688,17.585,35.326,41.867,41.215,68.372l45.742,205.841
		c0.887,3.99-0.085,8.166-2.642,11.354C479.535,477.618,475.668,479.473,471.581,479.473z`
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 193,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            fill: "#16153B",
            d: `M236.176,116.642c-3.448,0-6.897-1.315-9.527-3.946c-5.262-5.262-5.262-13.793,0-19.056
		l57.167-57.167c5.262-5.262,13.793-5.262,19.056,0c5.262,5.262,5.262,13.793,0,19.056l-57.167,57.167
		C243.072,115.327,239.624,116.642,236.176,116.642z`
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 205,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            fill: "#16153B",
            d: `M275.824,116.642c-3.448,0-6.897-1.315-9.527-3.946L209.13,55.529
		c-5.262-5.262-5.262-13.793,0-19.056c5.262-5.262,13.793-5.262,19.056,0l57.167,57.167c5.262,5.262,5.262,13.793,0,19.056
		C282.721,115.327,279.273,116.642,275.824,116.642z`
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 211,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 177,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        fill: "#97C4E8",
        d: `M425.154,257.352c-5.658-22.679-18.258-43.053-36.106-58.222L255.999,86.04L122.95,199.13
	c-17.846,15.169-30.448,35.543-36.106,58.222L425.154,257.352L425.154,257.352z`
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 218,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        fill: "#16153B",
        d: `M425.156,270.826H86.846c-4.149,0-8.064-1.911-10.617-5.179c-2.555-3.269-3.459-7.532-2.455-11.556
	c6.389-25.608,20.378-48.164,40.452-65.228l133.049-113.09c5.031-4.277,12.422-4.277,17.453,0l133.05,113.09
	c20.075,17.065,34.063,39.618,40.452,65.228c1.004,4.025,0.098,8.286-2.455,11.556C433.22,268.915,429.303,270.826,425.156,270.826z
	 M105.71,243.878h300.581c-5.949-13.222-14.747-24.945-25.967-34.482L256.001,103.723L131.678,209.396
	C120.456,218.933,111.659,230.658,105.71,243.878z`
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 223,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 168,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    className: "bg-primary",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", {
            children: "Oh no!"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 239,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix3.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 240,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix3.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 241,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 238,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        style: { height: "100vh" },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorComponent, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 245,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 244,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix3.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 247,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 243,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 237,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    className: "bg-primary",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", {
            children: "Oh no!"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 257,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix3.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 258,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix3.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 259,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 256,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        style: { height: "100vh" },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorComponent, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 263,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 262,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix3.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 265,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 261,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 255,
    columnNumber: 5
  }, this);
}

// app/routes/confirmation/$orderId.tsx
var orderId_exports = {};
__export(orderId_exports, {
  ConfirmationInvoice: () => ConfirmationInvoice,
  default: () => orderId_default,
  loader: () => loader2
});

// app/clients.ts
var import_graphql_request = require("graphql-request"), CATALOGUE_API_URL = "https://api.crystallize.com/tsvetochki-test/catalogue", catalogueClient = new import_graphql_request.GraphQLClient(CATALOGUE_API_URL), serviceAPIClient = new import_graphql_request.GraphQLClient(
  "https://remix-service-api.vercel.app/api/graphql",
  {
    credentials: "include",
    mode: "cors"
  }
);

// app/service-api/get-order.generated.ts
var GetOrderDocument = { kind: "Document", definitions: [{ kind: "OperationDefinition", operation: "query", name: { kind: "Name", value: "GetOrder" }, variableDefinitions: [{ kind: "VariableDefinition", variable: { kind: "Variable", name: { kind: "Name", value: "id" } }, type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "orders" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "get" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "id" }, value: { kind: "Variable", name: { kind: "Name", value: "id" } } }] }] } }] } }] };

// app/routes/confirmation/$orderId.tsx
var import_remix4 = __toESM(require_dist());

// app/components/confirmation.tsx
var import_react2 = require("react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Confirmation({ order, success }) {
  let basket = useBasket();
  if (success && basket.actions.empty(), (0, import_react2.useEffect)(() => {
    if (!order) {
      let t = setTimeout(() => window.location.reload(), 5e3);
      return () => clearTimeout(t);
    }
  }, [order]), !order)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
      children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."
    }, void 0, !1, {
      fileName: "app/components/confirmation.tsx",
      lineNumber: 21,
      columnNumber: 12
    }, this);
  let cart = order.cart.map((item) => ({
    ...item,
    image: {
      url: item.imageUrl
    }
  })), { total } = order;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "w-auto md:w-128 lg:w-128 p-10 bg-background3 mx-auto mt-20 text-text",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
          className: "font-bold text-3xl mb-6",
          children: "\u0417\u0430\u043A\u0430\u0437 \u043F\u0440\u0438\u043D\u044F\u0442"
        }, void 0, !1, {
          fileName: "app/components/confirmation.tsx",
          lineNumber: 36,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          className: "mb-5",
          children: [
            "\u041C\u044B \u0443\u0436\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u0432\u0430\u0448 \u0437\u0430\u043A\u0430\u0437 \u2116",
            order.id,
            "."
          ]
        }, void 0, !0, {
          fileName: "app/components/confirmation.tsx",
          lineNumber: 37,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          children: [
            cart.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex justify-between mb-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                    children: [
                      item.name,
                      " x ",
                      item.quantity
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/confirmation.tsx",
                    lineNumber: 43,
                    columnNumber: 19
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/confirmation.tsx",
                  lineNumber: 42,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  children: [
                    "$",
                    item.price.gross * item.quantity
                  ]
                }, void 0, !0, {
                  fileName: "app/components/confirmation.tsx",
                  lineNumber: 47,
                  columnNumber: 17
                }, this)
              ]
            }, index, !0, {
              fileName: "app/components/confirmation.tsx",
              lineNumber: 41,
              columnNumber: 15
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex flex-col gap-3 border-t-2 pt-5",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex justify-between",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      children: "\u0421\u0443\u043C\u043C\u0430"
                    }, void 0, !1, {
                      fileName: "app/components/confirmation.tsx",
                      lineNumber: 53,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      children: [
                        "$",
                        total.gross
                      ]
                    }, void 0, !0, {
                      fileName: "app/components/confirmation.tsx",
                      lineNumber: 54,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/components/confirmation.tsx",
                  lineNumber: 52,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex justify-between",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      children: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430"
                    }, void 0, !1, {
                      fileName: "app/components/confirmation.tsx",
                      lineNumber: 57,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      children: [
                        "$",
                        total.net - total.gross
                      ]
                    }, void 0, !0, {
                      fileName: "app/components/confirmation.tsx",
                      lineNumber: 58,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/components/confirmation.tsx",
                  lineNumber: 56,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex justify-between",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      className: "font-bold",
                      children: "\u0418\u0442\u043E\u0433\u043E"
                    }, void 0, !1, {
                      fileName: "app/components/confirmation.tsx",
                      lineNumber: 61,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      children: [
                        "$",
                        total.net
                      ]
                    }, void 0, !0, {
                      fileName: "app/components/confirmation.tsx",
                      lineNumber: 62,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/components/confirmation.tsx",
                  lineNumber: 60,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/confirmation.tsx",
              lineNumber: 51,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/confirmation.tsx",
          lineNumber: 38,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/confirmation.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/confirmation.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// app/routes/confirmation/$orderId.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader2 = async ({ params }) => ({ data: await serviceAPIClient.request(GetOrderDocument, { id: params.orderId }) }), ConfirmationInvoice = () => {
  var _a, _b;
  let order = (_b = (_a = (0, import_remix4.useLoaderData)().data) == null ? void 0 : _a.orders) == null ? void 0 : _b.get;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: order ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Confirmation, {
      order,
      success: !0
    }, void 0, !1, {
      fileName: "app/routes/confirmation/$orderId.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "w-auth p-20 bg-background3 mx-auto mt-20 text-text",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: "\u0417\u0430\u043A\u0430\u0437 \u043E\u0444\u043E\u0440\u043C\u043B\u044F\u0435\u0442\u0441\u044F... \u041E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443."
      }, void 0, !1, {
        fileName: "app/routes/confirmation/$orderId.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/confirmation/$orderId.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/confirmation/$orderId.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}, orderId_default = ConfirmationInvoice;

// app/routes/shop/$product.tsx
var product_exports = {};
__export(product_exports, {
  default: () => Index,
  headers: () => headers,
  loader: () => loader3,
  meta: () => meta2
});
var import_remix7 = __toESM(require_dist());

// app/crystallize/fragments/content.generated.ts
var SingleLineFragmentDoc = { kind: "Document", definitions: [{ kind: "FragmentDefinition", name: { kind: "Name", value: "singleLine" }, typeCondition: { kind: "NamedType", name: { kind: "Name", value: "SingleLineContent" } }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "__typename" } }, { kind: "Field", name: { kind: "Name", value: "text" } }] } }] }, RichTextFragmentDoc = { kind: "Document", definitions: [{ kind: "FragmentDefinition", name: { kind: "Name", value: "richText" }, typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RichTextContent" } }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "__typename" } }, { kind: "Field", name: { kind: "Name", value: "json" } }, { kind: "Field", name: { kind: "Name", value: "html" } }, { kind: "Field", name: { kind: "Name", value: "plainText" } }] } }] }, BooleanFragmentDoc = { kind: "Document", definitions: [{ kind: "FragmentDefinition", name: { kind: "Name", value: "boolean" }, typeCondition: { kind: "NamedType", name: { kind: "Name", value: "BooleanContent" } }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "__typename" } }, { kind: "Field", name: { kind: "Name", value: "value" } }] } }] }, NumericFragmentDoc = { kind: "Document", definitions: [{ kind: "FragmentDefinition", name: { kind: "Name", value: "numeric" }, typeCondition: { kind: "NamedType", name: { kind: "Name", value: "NumericContent" } }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "__typename" } }, { kind: "Field", name: { kind: "Name", value: "number" } }, { kind: "Field", name: { kind: "Name", value: "unit" } }] } }] }, LocationFragmentDoc = { kind: "Document", definitions: [{ kind: "FragmentDefinition", name: { kind: "Name", value: "location" }, typeCondition: { kind: "NamedType", name: { kind: "Name", value: "LocationContent" } }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "__typename" } }, { kind: "Field", name: { kind: "Name", value: "lat" } }, { kind: "Field", name: { kind: "Name", value: "long" } }] } }] }, DateTimeFragmentDoc = { kind: "Document", definitions: [{ kind: "FragmentDefinition", name: { kind: "Name", value: "dateTime" }, typeCondition: { kind: "NamedType", name: { kind: "Name", value: "DatetimeContent" } }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "__typename" } }, { kind: "Field", name: { kind: "Name", value: "datetime" } }] } }] }, SelectionFragmentDoc = { kind: "Document", definitions: [{ kind: "FragmentDefinition", name: { kind: "Name", value: "selection" }, typeCondition: { kind: "NamedType", name: { kind: "Name", value: "SelectionContent" } }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "__typename" } }, { kind: "Field", name: { kind: "Name", value: "options" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "key" } }, { kind: "Field", name: { kind: "Name", value: "value" } }] } }] } }] }, ImageFragmentDoc = { kind: "Document", definitions: [{ kind: "FragmentDefinition", name: { kind: "Name", value: "image" }, typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Image" } }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "__typename" } }, { kind: "Field", name: { kind: "Name", value: "url" } }, { kind: "Field", name: { kind: "Name", value: "altText" } }, { kind: "Field", name: { kind: "Name", value: "key" } }, { kind: "Field", name: { kind: "Name", value: "variants" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "url" } }, { kind: "Field", name: { kind: "Name", value: "key" } }, { kind: "Field", name: { kind: "Name", value: "width" } }, { kind: "Field", name: { kind: "Name", value: "height" } }, { kind: "Field", name: { kind: "Name", value: "size" } }] } }] } }] }, ImagesFragmentDoc = { kind: "Document", definitions: [{ kind: "FragmentDefinition", name: { kind: "Name", value: "images" }, typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ImageContent" } }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "__typename" } }, { kind: "Field", name: { kind: "Name", value: "images" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "image" } }] } }] } }, ...ImageFragmentDoc.definitions] }, VideoFragmentDoc = { kind: "Document", definitions: [{ kind: "FragmentDefinition", name: { kind: "Name", value: "video" }, typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Video" } }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "__typename" } }, { kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "title" } }, { kind: "Field", name: { kind: "Name", value: "playlists" } }, { kind: "Field", name: { kind: "Name", value: "thumbnails" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "image" } }] } }] } }, ...ImageFragmentDoc.definitions] }, VideosFragmentDoc = { kind: "Document", definitions: [{ kind: "FragmentDefinition", name: { kind: "Name", value: "videos" }, typeCondition: { kind: "NamedType", name: { kind: "Name", value: "VideoContent" } }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "__typename" } }, { kind: "Field", name: { kind: "Name", value: "videos" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "video" } }] } }] } }, ...VideoFragmentDoc.definitions] }, ParagraphCollectionFragmentDoc = { kind: "Document", definitions: [{ kind: "FragmentDefinition", name: { kind: "Name", value: "paragraphCollection" }, typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ParagraphCollectionContent" } }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "__typename" } }, { kind: "Field", name: { kind: "Name", value: "paragraphs" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "title" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "singleLine" } }] } }, { kind: "Field", name: { kind: "Name", value: "body" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "richText" } }] } }, { kind: "Field", name: { kind: "Name", value: "images" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "image" } }, { kind: "Field", name: { kind: "Name", value: "caption" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "richText" } }] } }] } }, { kind: "Field", name: { kind: "Name", value: "videos" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "title" } }, { kind: "Field", name: { kind: "Name", value: "playlists" } }, { kind: "Field", name: { kind: "Name", value: "thumbnails" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "image" } }, { kind: "Field", name: { kind: "Name", value: "caption" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "richText" } }] } }] } }] } }] } }] } }, ...SingleLineFragmentDoc.definitions, ...RichTextFragmentDoc.definitions, ...ImageFragmentDoc.definitions] }, PropertiesTableFragmentDoc = { kind: "Document", definitions: [{ kind: "FragmentDefinition", name: { kind: "Name", value: "propertiesTable" }, typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PropertiesTableContent" } }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "__typename" } }, { kind: "Field", name: { kind: "Name", value: "sections" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "InlineFragment", typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PropertiesTableSection" } }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "__typename" } }, { kind: "Field", name: { kind: "Name", value: "title" } }, { kind: "Field", name: { kind: "Name", value: "properties" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "key" } }, { kind: "Field", name: { kind: "Name", value: "value" } }] } }] } }] } }] } }] }, ContentFragmentDoc = { kind: "Document", definitions: [{ kind: "FragmentDefinition", name: { kind: "Name", value: "content" }, typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ComponentContent" } }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "singleLine" } }, { kind: "FragmentSpread", name: { kind: "Name", value: "richText" } }, { kind: "FragmentSpread", name: { kind: "Name", value: "boolean" } }, { kind: "FragmentSpread", name: { kind: "Name", value: "numeric" } }, { kind: "FragmentSpread", name: { kind: "Name", value: "location" } }, { kind: "FragmentSpread", name: { kind: "Name", value: "dateTime" } }, { kind: "FragmentSpread", name: { kind: "Name", value: "selection" } }, { kind: "FragmentSpread", name: { kind: "Name", value: "images" } }, { kind: "FragmentSpread", name: { kind: "Name", value: "videos" } }, { kind: "FragmentSpread", name: { kind: "Name", value: "paragraphCollection" } }, { kind: "FragmentSpread", name: { kind: "Name", value: "propertiesTable" } }] } }, ...SingleLineFragmentDoc.definitions, ...RichTextFragmentDoc.definitions, ...BooleanFragmentDoc.definitions, ...NumericFragmentDoc.definitions, ...LocationFragmentDoc.definitions, ...DateTimeFragmentDoc.definitions, ...SelectionFragmentDoc.definitions, ...ImagesFragmentDoc.definitions, ...VideosFragmentDoc.definitions, ...ParagraphCollectionFragmentDoc.definitions, ...PropertiesTableFragmentDoc.definitions] }, ContentChunkFragmentDoc = { kind: "Document", definitions: [{ kind: "FragmentDefinition", name: { kind: "Name", value: "contentChunk" }, typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentChunkContent" } }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "__typename" } }, { kind: "Field", name: { kind: "Name", value: "chunks" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "content" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "content" } }] } }] } }] } }, ...ContentFragmentDoc.definitions] }, ComponentFragmentDoc = { kind: "Document", definitions: [{ kind: "FragmentDefinition", name: { kind: "Name", value: "component" }, typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Component" } }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "__typename" } }, { kind: "Field", name: { kind: "Name", value: "content" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "content" } }, { kind: "FragmentSpread", name: { kind: "Name", value: "contentChunk" } }] } }] } }, ...ContentFragmentDoc.definitions, ...ContentChunkFragmentDoc.definitions] };

// app/crystallize/queries/product.generated.ts
var ProductDocument = { kind: "Document", definitions: [{ kind: "OperationDefinition", operation: "query", name: { kind: "Name", value: "Product" }, variableDefinitions: [{ kind: "VariableDefinition", variable: { kind: "Variable", name: { kind: "Name", value: "path" } }, type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } } }, { kind: "VariableDefinition", variable: { kind: "Variable", name: { kind: "Name", value: "version" } }, type: { kind: "NamedType", name: { kind: "Name", value: "VersionLabel" } } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", alias: { kind: "Name", value: "product" }, name: { kind: "Name", value: "catalogue" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "path" }, value: { kind: "Variable", name: { kind: "Name", value: "path" } } }, { kind: "Argument", name: { kind: "Name", value: "language" }, value: { kind: "StringValue", value: "en", block: !1 } }, { kind: "Argument", name: { kind: "Name", value: "version" }, value: { kind: "Variable", name: { kind: "Name", value: "version" } } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", alias: { kind: "Name", value: "summary" }, name: { kind: "Name", value: "component" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "id" }, value: { kind: "StringValue", value: "brief", block: !1 } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "component" } }] } }, { kind: "Field", alias: { kind: "Name", value: "body" }, name: { kind: "Name", value: "component" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "id" }, value: { kind: "StringValue", value: "body", block: !1 } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "component" } }] } }, { kind: "Field", alias: { kind: "Name", value: "table" }, name: { kind: "Name", value: "component" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "id" }, value: { kind: "StringValue", value: "nutrition", block: !1 } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "component" } }] } }, { kind: "InlineFragment", typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Product" } }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "__typename" } }, { kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "name" } }, { kind: "Field", name: { kind: "Name", value: "type" } }, { kind: "Field", name: { kind: "Name", value: "path" } }, { kind: "Field", name: { kind: "Name", value: "defaultVariant" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "firstImage" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "url" } }, { kind: "Field", name: { kind: "Name", value: "altText" } }, { kind: "Field", name: { kind: "Name", value: "variants" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "url" } }, { kind: "Field", name: { kind: "Name", value: "key" } }, { kind: "Field", name: { kind: "Name", value: "width" } }, { kind: "Field", name: { kind: "Name", value: "height" } }, { kind: "Field", name: { kind: "Name", value: "size" } }] } }] } }] } }, { kind: "Field", name: { kind: "Name", value: "variants" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "name" } }, { kind: "Field", name: { kind: "Name", value: "sku" } }, { kind: "Field", name: { kind: "Name", value: "price" } }, { kind: "Field", name: { kind: "Name", value: "priceVariants" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "identifier" } }, { kind: "Field", name: { kind: "Name", value: "name" } }, { kind: "Field", name: { kind: "Name", value: "price" } }, { kind: "Field", name: { kind: "Name", value: "currency" } }] } }, { kind: "Field", name: { kind: "Name", value: "stock" } }, { kind: "Field", name: { kind: "Name", value: "isDefault" } }, { kind: "Field", name: { kind: "Name", value: "attributes" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "attribute" } }, { kind: "Field", name: { kind: "Name", value: "value" } }] } }, { kind: "Field", name: { kind: "Name", value: "images" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "url" } }, { kind: "Field", name: { kind: "Name", value: "altText" } }, { kind: "Field", name: { kind: "Name", value: "key" } }, { kind: "Field", name: { kind: "Name", value: "variants" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "url" } }, { kind: "Field", name: { kind: "Name", value: "key" } }, { kind: "Field", name: { kind: "Name", value: "width" } }, { kind: "Field", name: { kind: "Name", value: "height" } }, { kind: "Field", name: { kind: "Name", value: "size" } }] } }] } }] } }, { kind: "Field", name: { kind: "Name", value: "vatType" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "name" } }, { kind: "Field", name: { kind: "Name", value: "percent" } }] } }] } }, { kind: "Field", alias: { kind: "Name", value: "related" }, name: { kind: "Name", value: "component" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "id" }, value: { kind: "StringValue", value: "related", block: !1 } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "content" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "__typename" } }, { kind: "InlineFragment", typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ItemRelationsContent" } }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "items" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "path" } }, { kind: "Field", name: { kind: "Name", value: "name" } }, { kind: "Field", name: { kind: "Name", value: "topics" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "name" } }] } }, { kind: "InlineFragment", typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Product" } }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "__typename" } }, { kind: "Field", name: { kind: "Name", value: "defaultVariant" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "price" } }, { kind: "Field", name: { kind: "Name", value: "firstImage" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "url" } }, { kind: "Field", name: { kind: "Name", value: "altText" } }, { kind: "Field", name: { kind: "Name", value: "variants" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "url" } }, { kind: "Field", name: { kind: "Name", value: "key" } }, { kind: "Field", name: { kind: "Name", value: "width" } }, { kind: "Field", name: { kind: "Name", value: "height" } }, { kind: "Field", name: { kind: "Name", value: "size" } }] } }] } }] } }] } }] } }] } }] } }] } }] } }] } }, ...ComponentFragmentDoc.definitions] };

// app/crystallize/utils/normalizeDocumentNode.ts
var import_filter = __toESM(require("lodash/fp/filter")), import_pipe = __toESM(require("lodash/fp/pipe")), import_uniqBy = __toESM(require("lodash/fp/uniqBy"));
function isFragmentDefinition(def) {
  return def.kind === "FragmentDefinition";
}
var notFragments = (0, import_filter.default)(
  (def) => def.kind !== "FragmentDefinition"
), onlyUniqueFragments = (0, import_pipe.default)(
  (0, import_filter.default)(isFragmentDefinition),
  (0, import_uniqBy.default)((def) => def.name)
);
function normalizeDocumentNode(doc) {
  return "__normalized" in doc ? doc : Object.assign(doc, {
    __normalized: !0,
    definitions: [
      ...notFragments(doc.definitions),
      ...onlyUniqueFragments(doc.definitions)
    ]
  });
}

// app/components/product.tsx
var import_react_content_transformer2 = require("@crystallize/react-content-transformer"), import_react_image3 = require("@crystallize/react-image");

// app/crystallize/utils/componentContent.ts
var componentContent = (o, v) => o && o.__typename === v ? o : null;

// app/components/product-body.tsx
var import_react_content_transformer = require("@crystallize/react-content-transformer");
var import_react_image = require("@crystallize/react-image"), import_react_player = __toESM(require("react-player")), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ProductBody = ({ body, table }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
  className: "flex flex-col gap-3 w-full mx-auto z-10",
  children: [
    componentContent(
      body == null ? void 0 : body.content,
      "ParagraphCollectionContent"
    ).paragraphs.map((paragraph, index) => {
      var _a, _b;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col justify-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "my-3 text-text",
            children: [
              paragraph.title && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                className: "font-semibold text-2xl mb-4",
                children: paragraph == null ? void 0 : paragraph.title.text
              }, void 0, !1, {
                fileName: "app/components/product-body.tsx",
                lineNumber: 23,
                columnNumber: 15
              }, this),
              paragraph.body && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_content_transformer.ContentTransformer, {
                  json: (_a = paragraph.body) == null ? void 0 : _a.json
                }, void 0, !1, {
                  fileName: "app/components/product-body.tsx",
                  lineNumber: 29,
                  columnNumber: 17
                }, this)
              }, void 0, !1, {
                fileName: "app/components/product-body.tsx",
                lineNumber: 28,
                columnNumber: 15
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/product-body.tsx",
            lineNumber: 21,
            columnNumber: 11
          }, this),
          paragraph.images && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "my-5",
            children: (_b = paragraph == null ? void 0 : paragraph.images) == null ? void 0 : _b.map((image) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_image.Image, {
              ...image,
              sizes: "200px",
              className: "rounded-xl overflow-hidden",
              loading: "lazy"
            }, void 0, !1, {
              fileName: "app/components/product-body.tsx",
              lineNumber: 36,
              columnNumber: 17
            }, this))
          }, void 0, !1, {
            fileName: "app/components/product-body.tsx",
            lineNumber: 34,
            columnNumber: 13
          }, this),
          paragraph.videos && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "my-5",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_player.default, {
              controls: !0,
              url: (paragraph == null ? void 0 : paragraph.videos) && (paragraph == null ? void 0 : paragraph.videos.length) > 0 && (paragraph == null ? void 0 : paragraph.videos[0].playlists[1]),
              width: "100%",
              height: "100%",
              light: (paragraph == null ? void 0 : paragraph.videos) && (paragraph == null ? void 0 : paragraph.videos.length) > 0 && (paragraph == null ? void 0 : paragraph.videos[0].thumbnails) && (paragraph == null ? void 0 : paragraph.videos[0].thumbnails.length) > 0 && (paragraph == null ? void 0 : paragraph.videos[0].thumbnails[0].url),
              playing: !0
            }, void 0, !1, {
              fileName: "app/components/product-body.tsx",
              lineNumber: 47,
              columnNumber: 15
            }, this)
          }, void 0, !1, {
            fileName: "app/components/product-body.tsx",
            lineNumber: 46,
            columnNumber: 13
          }, this)
        ]
      }, index, !0, {
        fileName: "app/components/product-body.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this);
    }),
    componentContent(table == null ? void 0 : table.content, "PropertiesTableContent").sections.map(
      (section, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex lg:flex-row flex-col justify-between text-text my-20",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                className: "font-bold text-2xl py-2",
                children: section == null ? void 0 : section.title
              }, void 0, !1, {
                fileName: "app/components/product-body.tsx",
                lineNumber: 76,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "italic",
                children: "\u0431\u0443\u043A\u0435\u0442\u0430"
              }, void 0, !1, {
                fileName: "app/components/product-body.tsx",
                lineNumber: 77,
                columnNumber: 15
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/product-body.tsx",
            lineNumber: 75,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "lg:w-7/12 w-full",
            children: section.properties.map((property, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex justify-between my-3 even:bg-grey px-5 py-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  children: property.key
                }, void 0, !1, {
                  fileName: "app/components/product-body.tsx",
                  lineNumber: 85,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  children: property.value
                }, void 0, !1, {
                  fileName: "app/components/product-body.tsx",
                  lineNumber: 86,
                  columnNumber: 19
                }, this)
              ]
            }, index2, !0, {
              fileName: "app/components/product-body.tsx",
              lineNumber: 81,
              columnNumber: 17
            }, this))
          }, void 0, !1, {
            fileName: "app/components/product-body.tsx",
            lineNumber: 79,
            columnNumber: 13
          }, this)
        ]
      }, index, !0, {
        fileName: "app/components/product-body.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this)
    )
  ]
}, void 0, !0, {
  fileName: "app/components/product-body.tsx",
  lineNumber: 15,
  columnNumber: 5
}, this);

// app/components/variant-selector.tsx
var import_isEqual = __toESM(require("lodash/isEqual")), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function reduceAttributes(variants) {
  return variants.reduce((acc, variant) => {
    let attrs = acc;
    return variant.attributes.forEach(({ attribute, value }) => {
      let currentAttribute = attrs[attribute];
      if (!currentAttribute) {
        attrs[attribute] = [value];
        return;
      }
      currentAttribute.find((str) => str === value) || attrs[attribute].push(value);
    }), attrs;
  }, {});
}
function attributesToObject({ attributes }) {
  return Object.assign(
    {},
    ...attributes.map(({ attribute, value }) => ({ [attribute]: value }))
  );
}
var VariantSelector = ({
  variants,
  selectedVariant,
  onVariantChange
}) => {
  let attributes = reduceAttributes(variants);
  function onAttributeSelect({ attribute, value, e }) {
    let selectedAttributes = attributesToObject(selectedVariant);
    selectedAttributes[attribute] = value;
    let variant = variants.find((variant2) => !!(0, import_isEqual.default)(selectedAttributes, attributesToObject(variant2)));
    variant && onVariantChange(variant);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: Object.keys(attributes).map((attribute) => {
      let attr = attributes[attribute], selectedAttr = selectedVariant.attributes.find(
        (a) => a.attribute === attribute
      );
      return selectedAttr ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mt-10",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
              className: "text-sm text-gray-900 font-medium",
              children: attribute
            }, void 0, !1, {
              fileName: "app/components/variant-selector.tsx",
              lineNumber: 70,
              columnNumber: 15
            }, this)
          }, void 0, !1, {
            fileName: "app/components/variant-selector.tsx",
            lineNumber: 69,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex justify-between mb-5",
            children: attr.map((value) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              onClick: (e) => onAttributeSelect({
                attribute,
                value,
                e
              }),
              type: "button",
              className: "m-1 bg-white shadow-sm text-gray-900 cursor-pointer group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none flex-1",
              style: {
                border: value === selectedAttr.value ? "2px solid rgb(99 102 241)" : "1px solid rgb(197 222 221)"
              },
              children: value
            }, value, !1, {
              fileName: "app/components/variant-selector.tsx",
              lineNumber: 75,
              columnNumber: 17
            }, this))
          }, void 0, !1, {
            fileName: "app/components/variant-selector.tsx",
            lineNumber: 73,
            columnNumber: 13
          }, this)
        ]
      }, attribute, !0, {
        fileName: "app/components/variant-selector.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this) : null;
    })
  }, void 0, !1, {
    fileName: "app/components/variant-selector.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
};

// app/components/related-products.tsx
var import_react_image2 = require("@crystallize/react-image"), import_remix5 = __toESM(require_dist()), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), RelatedProducts = ({ related }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
  className: "flex w-full items-start flex-wrap gap-2",
  children: componentContent(related.content, "ItemRelationsContent").items.map(
    (item, index) => {
      var _a;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix5.Link, {
        prefetch: "intent",
        to: item.path,
        className: "bg-primary px-4 py-3 rounded-xl border-2 border-grey md:w-80 w-full h-80",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-col",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex justify-between",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex gap-1",
                  children: (_a = item.topics) == null ? void 0 : _a.map((topic) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "text-sm bg-grey px-2 py-1 rounded-2xl",
                    children: topic.name
                  }, topic.name, !1, {
                    fileName: "app/components/related-products.tsx",
                    lineNumber: 27,
                    columnNumber: 21
                  }, this))
                }, void 0, !1, {
                  fileName: "app/components/related-products.tsx",
                  lineNumber: 25,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: [
                    "$",
                    componentContent(item, "Product").defaultVariant.price
                  ]
                }, void 0, !0, {
                  fileName: "app/components/related-products.tsx",
                  lineNumber: 35,
                  columnNumber: 17
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/related-products.tsx",
              lineNumber: 24,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_image2.Image, {
              ...componentContent(item, "Product").defaultVariant.firstImage,
              sizes: "300px",
              loading: "lazy"
            }, void 0, !1, {
              fileName: "app/components/related-products.tsx",
              lineNumber: 40,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              className: "text-l text-center m-auto",
              children: item.name
            }, void 0, !1, {
              fileName: "app/components/related-products.tsx",
              lineNumber: 45,
              columnNumber: 15
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/related-products.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this)
      }, index, !1, {
        fileName: "app/components/related-products.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this);
    }
  )
}, void 0, !1, {
  fileName: "app/components/related-products.tsx",
  lineNumber: 14,
  columnNumber: 5
}, this);

// app/components/product.tsx
var import_react3 = require("react"), import_remix6 = __toESM(require_dist()), import_solid = require("@heroicons/react/20/solid"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Product = ({ product }) => {
  var _a;
  let item = componentContent(product, "Product"), navigate = (0, import_remix6.useNavigate)(), [selectedVariant, setSelectedVariant] = (0, import_react3.useState)(item.variants[0]), basket = useBasket(), onVariantChange = (variant) => setSelectedVariant(variant), buy = () => {
    var _a2;
    (_a2 = basket == null ? void 0 : basket.actions) == null || _a2.addItem({
      id: selectedVariant.id,
      sku: selectedVariant.sku,
      path: item.path,
      priceVariantIdentifier: "default",
      stock: selectedVariant.stock
    }), navigate("/cart", { replace: !1 });
  }, reviews = { href: "#", average: 4, totalCount: 17 };
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "py-5",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
        "aria-label": "Breadcrumb",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
          role: "list",
          className: "mx-auto flex items-center space-x-2 lg:max-w-7xl",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex items-center",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                    href: "/",
                    className: "mr-2 text-sm font-medium text-gray-900",
                    children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"
                  }, void 0, !1, {
                    fileName: "app/components/product.tsx",
                    lineNumber: 52,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                    width: 16,
                    height: 20,
                    viewBox: "0 0 16 20",
                    fill: "currentColor",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": "true",
                    className: "w-4 h-5 text-gray-300",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                      d: "M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"
                    }, void 0, !1, {
                      fileName: "app/components/product.tsx",
                      lineNumber: 64,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/product.tsx",
                    lineNumber: 55,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/product.tsx",
                lineNumber: 51,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/product.tsx",
              lineNumber: 50,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
              className: "text-sm",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                href: item.path,
                "aria-current": "page",
                className: "font-medium text-gray-500 hover:text-gray-600",
                children: item.name
              }, void 0, !1, {
                fileName: "app/components/product.tsx",
                lineNumber: 69,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/product.tsx",
              lineNumber: 68,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/product.tsx",
          lineNumber: 46,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/product.tsx",
        lineNumber: 45,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mt-6 mx-auto lg:max-w-7xl",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "sm:rounded-lg sm:overflow-hidden",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_image3.Image, {
            ...item.defaultVariant.firstImage,
            className: "w-full h-full object-center object-cover rounded-md overflow-hidden"
          }, void 0, !1, {
            fileName: "app/components/product.tsx",
            lineNumber: 83,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/product.tsx",
          lineNumber: 82,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/product.tsx",
        lineNumber: 81,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mx-auto pt-10 pb-16 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
              className: "text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl",
              children: item.name
            }, void 0, !1, {
              fileName: "app/components/product.tsx",
              lineNumber: 93,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/product.tsx",
            lineNumber: 92,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "mt-4 lg:mt-0 lg:row-span-3",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                className: "sr-only",
                children: "Product information"
              }, void 0, !1, {
                fileName: "app/components/product.tsx",
                lineNumber: 100,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "tracking-tight text-3xl text-gray-900 font-semibold",
                children: [
                  selectedVariant.price,
                  " \u20BD"
                ]
              }, void 0, !0, {
                fileName: "app/components/product.tsx",
                lineNumber: 101,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mt-6",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                    className: "sr-only",
                    children: "Reviews"
                  }, void 0, !1, {
                    fileName: "app/components/product.tsx",
                    lineNumber: 107,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex items-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex items-center",
                        children: [0, 1, 2, 3, 4].map((rating) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid.StarIcon, {
                          className: classNames(
                            reviews.average > rating ? "text-yellow-400" : "text-gray-200",
                            "h-5 w-5 flex-shrink-0"
                          ),
                          "aria-hidden": "true"
                        }, rating, !1, {
                          fileName: "app/components/product.tsx",
                          lineNumber: 111,
                          columnNumber: 19
                        }, this))
                      }, void 0, !1, {
                        fileName: "app/components/product.tsx",
                        lineNumber: 109,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                        className: "sr-only",
                        children: [
                          reviews.average,
                          " out of 5 stars"
                        ]
                      }, void 0, !0, {
                        fileName: "app/components/product.tsx",
                        lineNumber: 121,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                        href: reviews.href,
                        className: "ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500",
                        children: [
                          reviews.totalCount,
                          " \u043E\u0442\u0437\u044B\u0432\u043E\u0432"
                        ]
                      }, void 0, !0, {
                        fileName: "app/components/product.tsx",
                        lineNumber: 122,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/product.tsx",
                    lineNumber: 108,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/product.tsx",
                lineNumber: 106,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mt-10",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VariantSelector, {
                  variants: item.variants,
                  selectedVariant,
                  onVariantChange
                }, void 0, !1, {
                  fileName: "app/components/product.tsx",
                  lineNumber: 130,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/components/product.tsx",
                lineNumber: 129,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                onClick: () => buy(),
                className: "mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                children: "\u041A\u0443\u043F\u0438\u0442\u044C"
              }, void 0, !1, {
                fileName: "app/components/product.tsx",
                lineNumber: 137,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/product.tsx",
            lineNumber: 99,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                  className: "sr-only",
                  children: "Description"
                }, void 0, !1, {
                  fileName: "app/components/product.tsx",
                  lineNumber: 148,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "space-y-6 text-base text-gray-900",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_content_transformer2.ContentTransformer, {
                    json: (_a = componentContent(item.summary.content, "RichTextContent")) == null ? void 0 : _a.json
                  }, void 0, !1, {
                    fileName: "app/components/product.tsx",
                    lineNumber: 151,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/product.tsx",
                  lineNumber: 150,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductBody, {
                  body: item.body,
                  table: item.table
                }, void 0, !1, {
                  fileName: "app/components/product.tsx",
                  lineNumber: 158,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/product.tsx",
              lineNumber: 147,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/product.tsx",
            lineNumber: 145,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/product.tsx",
        lineNumber: 91,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          className: "text-text mb-4 font-semibold",
          children: "\u041F\u043E\u0445\u043E\u0436\u0438\u0435 \u0431\u0443\u043A\u0435\u0442\u044B"
        }, void 0, !1, {
          fileName: "app/components/product.tsx",
          lineNumber: 163,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/product.tsx",
        lineNumber: 162,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RelatedProducts, {
        related: item.related
      }, void 0, !1, {
        fileName: "app/components/product.tsx",
        lineNumber: 165,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/product.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
};

// app/http-cache-header-tagger.ts
var import_parse_duration = __toESM(require("parse-duration"));
function HttpCacheHeaderTagger(maxAge, sharedMaxAge, tags) {
  return process.env.HTTP_CACHE_SERVICE === "fastly" ? {
    headers: {
      "Cache-Control": `public, max-age=${(0, import_parse_duration.default)(maxAge, "s")}, s-maxage=${(0, import_parse_duration.default)(sharedMaxAge, "s")}, stale-while-revalidate=${(0, import_parse_duration.default)(maxAge, "s")}, stale-if-error=${(0, import_parse_duration.default)(sharedMaxAge, "s")}`,
      "Surrogate-Control": `max-age=${(0, import_parse_duration.default)(sharedMaxAge, "s")}, stale-while-revalidate=${(0, import_parse_duration.default)(sharedMaxAge, "s")}`,
      "Surrogate-Key": tags.join(",")
    }
  } : process.env.HTTP_CACHE_SERVICE === "varnish" ? {
    headers: {
      "Cache-Control": `public, max-age=${(0, import_parse_duration.default)(maxAge, "s")}, s-maxage=${(0, import_parse_duration.default)(sharedMaxAge, "s")}, stale-while-revalidate=${(0, import_parse_duration.default)(maxAge, "s")}`,
      xkey: tags.join(",")
    }
  } : {
    headers: {
      "Cache-Control": `public, max-age=${(0, import_parse_duration.default)(maxAge, "s")}, s-maxage=${(0, import_parse_duration.default)(sharedMaxAge, "s")}, stale-while-revalidate=${(0, import_parse_duration.default)(maxAge, "s")}`
    }
  };
}

// app/routes/shop/$product.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader3 = async ({ params, request }) => {
  let version = new URL(request.url).searchParams.get("preview") ? "draft" : "published", path = "/shop/" + params.product, data = await catalogueClient.request(
    normalizeDocumentNode(ProductDocument),
    { path, version }
  );
  return (0, import_remix7.json)(
    { ...data, path },
    HttpCacheHeaderTagger("30s", "1w", ["product", "product-" + params.product])
  );
}, meta2 = ({ data }) => {
  var _a, _b, _c;
  let { product } = data, description = (_b = componentContent(
    (_a = product == null ? void 0 : product.summary) == null ? void 0 : _a.content,
    "RichTextContent"
  )) == null ? void 0 : _b.plainText[0], image = (_c = product == null ? void 0 : product.defaultVariant) == null ? void 0 : _c.firstImage.url;
  return {
    title: `${product == null ? void 0 : product.name} | Dounut`,
    description: `${description}`,
    "og:description": `${description}`,
    "og:image": `${image}`
  };
};
function headers() {
  return HttpCacheHeaderTagger("1m", "1w", ["product", "product-index"]).headers;
}
function Index() {
  let data = (0, import_remix7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Product, {
      product: data.product
    }, void 0, !1, {
      fileName: "app/routes/shop/$product.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/shop/$product.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

// app/routes/checkout.tsx
var checkout_exports = {};
__export(checkout_exports, {
  default: () => Checkout
});
var import_remix9 = __toESM(require_dist());

// app/components/payments/payments.tsx
var import_react5 = require("react");

// app/components/payments/invoice.tsx
var import_react4 = require("react");

// app/service-api/invoice-create-order.generated.ts
var InoicevCreateOrderDocument = { kind: "Document", definitions: [{ kind: "OperationDefinition", operation: "mutation", name: { kind: "Name", value: "InoicevCreateOrder" }, variableDefinitions: [{ kind: "VariableDefinition", variable: { kind: "Variable", name: { kind: "Name", value: "checkoutModel" } }, type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "CheckoutModelInput" } } } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "paymentProviders" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "invoice" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "createInvoice" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "checkoutModel" }, value: { kind: "Variable", name: { kind: "Name", value: "checkoutModel" } } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "success" } }, { kind: "Field", name: { kind: "Name", value: "orderId" } }] } }] } }] } }] } }] };

// app/components/payments/invoice.tsx
var import_remix8 = __toESM(require_dist()), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), InvoiceForm = ({
  checkoutModel,
  onError = (error) => console.log(error)
}) => {
  let [status, setStatus] = (0, import_react4.useState)("idle");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix8.Form, {
    method: "post",
    onSubmit: async (event) => {
      event.preventDefault(), go();
      async function go() {
        setStatus("submitting");
        let response = await serviceAPIClient.request(InoicevCreateOrderDocument, {
          checkoutModel
        }), { success, orderId } = response.paymentProviders.invoice.createInvoice;
        success ? window.location.replace(`/confirmation/${orderId}`) : (setStatus("idle"), onError(new Error("Unknown")));
      }
    },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
      type: "submit",
      disabled: status !== "idle",
      className: "w-full bg-text text-primary py-3 font-semibold mt-5",
      children: status === "idle" ? "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437" : "\u041F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435..."
    }, void 0, !1, {
      fileName: "app/components/payments/invoice.tsx",
      lineNumber: 60,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/components/payments/invoice.tsx",
    lineNumber: 58,
    columnNumber: 3
  }, this);
}, StripePayment = ({ checkoutModel, onSuccess }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InvoiceForm, {
  checkoutModel,
  onSuccess
}, void 0, !1, {
  fileName: "app/components/payments/invoice.tsx",
  lineNumber: 74,
  columnNumber: 3
}, this), Invoice = ({ checkoutModel, onSuccess }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StripePayment, {
  checkoutModel,
  onSuccess
}, void 0, !1, {
  fileName: "app/components/payments/invoice.tsx",
  lineNumber: 82,
  columnNumber: 9
}, this);

// app/components/payments/payments.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Payments = (props) => {
  let [payment, setPayment] = (0, import_react5.useState)("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Invoice, {
      ...props
    }, void 0, !1, {
      fileName: "app/components/payments/payments.tsx",
      lineNumber: 12,
      columnNumber: 8
    }, this)
  }, void 0, !1, {
    fileName: "app/components/payments/payments.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
};

// app/routes/checkout.tsx
var import_react6 = require("react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Checkout() {
  let [state, setState] = (0, import_react6.useState)({
    firstName: "",
    lastName: "",
    phone: "",
    street: "",
    city: "",
    postalCode: ""
  }), { firstName, lastName, phone, street, city, postalCode } = state, basket = useBasket();
  function getURL(path) {
    return typeof window > "u" ? "" : `${location == null ? void 0 : location.protocol}//${location == null ? void 0 : location.host}${path}`;
  }
  let checkoutModel = {
    basketModel: basket.basketModel,
    customer: {
      firstName,
      lastName,
      addresses: [
        { type: "billing", phone },
        {
          type: "delivery",
          street,
          city,
          postalCode
        }
      ]
    },
    confirmationURL: getURL("/confirmation/{crystallizeOrderId}"),
    checkoutURL: getURL("/checkout"),
    termsURL: getURL("/terms")
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "p-10 mx-auto bg-background1 w-auto md:w-128 lg:w-128 mt-20",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: "text-text text-3xl font-bold mb-10 text-center",
        children: "\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430"
      }, void 0, !1, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 49,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mx-auto",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix9.Form, {
          method: "post",
          className: "flex flex-wrap gap-5",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              type: "text",
              name: "\u0418\u043C\u044F",
              placeholder: "\u0418\u043C\u044F",
              className: "w-full",
              onChange: (e) => setState({ ...state, firstName: e.target.value })
            }, void 0, !1, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 54,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              type: "text",
              name: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F",
              placeholder: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F",
              className: "w-full",
              onChange: (e) => setState({ ...state, lastName: e.target.value })
            }, void 0, !1, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 61,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              type: "tel",
              name: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
              placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
              className: "w-full",
              onChange: (e) => setState({ ...state, phone: e.target.value })
            }, void 0, !1, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 68,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              type: "text",
              name: "\u0410\u0434\u0440\u0435\u0441 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438",
              placeholder: "\u0410\u0434\u0440\u0435\u0441 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438",
              className: "w-full",
              onChange: (e) => setState({ ...state, street: e.target.value })
            }, void 0, !1, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 75,
              columnNumber: 12
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 53,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 52,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Payments, {
        checkoutModel,
        onSuccess: () => console.log("success"),
        onError: () => {
        }
      }, void 0, !1, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 84,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/checkout.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2,
  headers: () => headers2,
  loader: () => loader4,
  meta: () => meta3
});
var import_remix12 = __toESM(require_dist());

// app/crystallize/queries/frontpage.generated.ts
var FrontpageDocument = { kind: "Document", definitions: [{ kind: "OperationDefinition", operation: "query", name: { kind: "Name", value: "Frontpage" }, variableDefinitions: [{ kind: "VariableDefinition", variable: { kind: "Variable", name: { kind: "Name", value: "path" } }, type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } } }, { kind: "VariableDefinition", variable: { kind: "Variable", name: { kind: "Name", value: "version" } }, type: { kind: "NamedType", name: { kind: "Name", value: "VersionLabel" } } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "catalogue" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "path" }, value: { kind: "Variable", name: { kind: "Name", value: "path" } } }, { kind: "Argument", name: { kind: "Name", value: "language" }, value: { kind: "StringValue", value: "en", block: !1 } }, { kind: "Argument", name: { kind: "Name", value: "version" }, value: { kind: "Variable", name: { kind: "Name", value: "version" } } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", alias: { kind: "Name", value: "meta" }, name: { kind: "Name", value: "component" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "id" }, value: { kind: "StringValue", value: "meta", block: !1 } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "component" } }] } }, { kind: "Field", alias: { kind: "Name", value: "grid" }, name: { kind: "Name", value: "component" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "id" }, value: { kind: "StringValue", value: "grid", block: !1 } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "content" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "InlineFragment", typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GridRelationsContent" } }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "grids" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "rows" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "columns" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "layout" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "rowspan" } }, { kind: "Field", name: { kind: "Name", value: "colspan" } }] } }, { kind: "Field", name: { kind: "Name", value: "item" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "name" } }, { kind: "Field", name: { kind: "Name", value: "path" } }, { kind: "Field", name: { kind: "Name", value: "topics" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "name" } }] } }, { kind: "InlineFragment", typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Product" } }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "variants" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "images" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "image" } }] } }, { kind: "Field", name: { kind: "Name", value: "price" } }] } }] } }] } }] } }] } }] } }] } }] } }] } }] } }, { kind: "Field", alias: { kind: "Name", value: "donuts" }, name: { kind: "Name", value: "catalogue" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "path" }, value: { kind: "StringValue", value: "/shop", block: !1 } }, { kind: "Argument", name: { kind: "Name", value: "language" }, value: { kind: "StringValue", value: "en", block: !1 } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "children" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "topics" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "name" } }] } }, { kind: "Field", alias: { kind: "Name", value: "bundle" }, name: { kind: "Name", value: "component" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "id" }, value: { kind: "StringValue", value: "bundle", block: !1 } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "content" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "boolean" } }] } }] } }, { kind: "InlineFragment", typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Product" } }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "__typename" } }, { kind: "Field", name: { kind: "Name", value: "name" } }, { kind: "Field", name: { kind: "Name", value: "path" } }, { kind: "Field", name: { kind: "Name", value: "topics" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "name" } }] } }, { kind: "Field", name: { kind: "Name", value: "defaultVariant" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "firstImage" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "image" } }] } }, { kind: "Field", name: { kind: "Name", value: "price" } }] } }] } }] } }] } }] } }, ...ComponentFragmentDoc.definitions, ...ImageFragmentDoc.definitions, ...BooleanFragmentDoc.definitions] };

// app/routes/index.tsx
var import_react7 = __toESM(require("@crystallize/grid-renderer/react"));

// app/components/grid-item.tsx
var import_react_image4 = require("@crystallize/react-image"), import_remix10 = __toESM(require_dist()), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), GridItem = ({ cell }) => {
  var _a, _b, _c;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix10.Link, {
    to: cell.item.path,
    prefetch: "intent",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_image4.Image, {
            ...(_a = cell.item.variants[0]) == null ? void 0 : _a.images[0],
            loading: "lazy",
            className: "w-full h-full object-center object-cover"
          }, void 0, !1, {
            fileName: "app/components/grid-item.tsx",
            lineNumber: 9,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex justify-between place-items-end",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex gap-1 mb-1 ml-1",
              children: (_b = cell.item.topics) == null ? void 0 : _b.map((topic) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "text-xs bg-gray-100 px-2 py-1 rounded-2xl",
                children: topic.name
              }, topic.name, !1, {
                fileName: "app/components/grid-item.tsx",
                lineNumber: 17,
                columnNumber: 15
              }, this))
            }, void 0, !1, {
              fileName: "app/components/grid-item.tsx",
              lineNumber: 15,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/grid-item.tsx",
            lineNumber: 14,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/grid-item.tsx",
        lineNumber: 8,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
        className: "mt-1 text-sm text-gray-700 truncate ",
        children: cell.item.name
      }, void 0, !1, {
        fileName: "app/components/grid-item.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        className: "text-lg font-medium text-gray-900",
        children: [
          (_c = cell.item.variants[0]) == null ? void 0 : _c.price,
          " \u20BD"
        ]
      }, void 0, !0, {
        fileName: "app/components/grid-item.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/grid-item.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
};

// app/components/products.tsx
var import_react_image5 = require("@crystallize/react-image"), import_remix11 = __toESM(require_dist()), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Products = ({ donuts }) => {
  var _a;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "mt-20",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        className: "text-lg font-semibold mb-10",
        children: "Our do(u)nuts"
      }, void 0, !1, {
        fileName: "app/components/products.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex items-start flex-wrap lg:gap-1 gap-5",
        children: (_a = donuts == null ? void 0 : donuts.children) == null ? void 0 : _a.map(
          (donut, index) => {
            var _a2, _b, _c, _d, _e, _f;
            return !((_b = componentContent((_a2 = donut == null ? void 0 : donut.bundle) == null ? void 0 : _a2.content, "BooleanContent")) != null && _b.value) && donut.bundle ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix11.Link, {
              to: componentContent(donut, "Product").path,
              prefetch: "intent",
              className: "flex flex-col bg-primary rounded-xl lg:h-106 p-5 lg:w-80",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex justify-between items-start",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex gap-1",
                        children: (_c = donut == null ? void 0 : donut.topics) == null ? void 0 : _c.map((topic, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "text-sm bg-grey px-2 py-1 rounded-2xl",
                          children: topic.name
                        }, index2, !1, {
                          fileName: "app/components/products.tsx",
                          lineNumber: 29,
                          columnNumber: 23
                        }, this))
                      }, void 0, !1, {
                        fileName: "app/components/products.tsx",
                        lineNumber: 27,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                        className: "self-end",
                        children: [
                          "$",
                          (_d = componentContent(donut, "Product")) == null ? void 0 : _d.defaultVariant.price
                        ]
                      }, void 0, !0, {
                        fileName: "app/components/products.tsx",
                        lineNumber: 37,
                        columnNumber: 19
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/products.tsx",
                    lineNumber: 26,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_image5.Image, {
                    ...(_e = componentContent(donut, "Product")) == null ? void 0 : _e.defaultVariant.firstImage,
                    sizes: "(max-width: 1024px) 100vw, 400px"
                  }, void 0, !1, {
                    fileName: "app/components/products.tsx",
                    lineNumber: 41,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                    className: "text-3xl font-bold text-center m-auto w-40",
                    children: (_f = componentContent(donut, "Product")) == null ? void 0 : _f.name
                  }, void 0, !1, {
                    fileName: "app/components/products.tsx",
                    lineNumber: 46,
                    columnNumber: 17
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/products.tsx",
                lineNumber: 25,
                columnNumber: 15
              }, this)
            }, index, !1, {
              fileName: "app/components/products.tsx",
              lineNumber: 19,
              columnNumber: 13
            }, this) : null;
          }
        )
      }, void 0, !1, {
        fileName: "app/components/products.tsx",
        lineNumber: 15,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/products.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
};

// app/routes/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader4 = async ({ request }) => {
  let version = new URL(request.url).searchParams.get("preview") ? "draft" : "published", path = "/frontpage", data = await catalogueClient.request(
    normalizeDocumentNode(FrontpageDocument),
    { path, version }
  );
  return (0, import_remix12.json)(
    { ...data, path },
    HttpCacheHeaderTagger("30s", "1w", ["frontpage"])
  );
}, meta3 = ({ data }) => {
  var _a, _b;
  let {
    catalogue: { meta: meta4 }
  } = data, metaData = componentContent(meta4.content, "ContentChunkContent").chunks[0];
  return {
    title: `${componentContent(metaData[0].content, "SingleLineContent").text}`,
    description: `${componentContent(metaData[1].content, "RichTextContent").plainText[0]}`,
    "og:image": `${(_b = (_a = componentContent(metaData[2].content, "ImageContent")) == null ? void 0 : _a.images[0]) == null ? void 0 : _b.url}`
  };
};
function headers2() {
  return HttpCacheHeaderTagger("1m", "1w", ["index"]).headers;
}
function Index2() {
  let { catalogue, donuts } = (0, import_remix12.useLoaderData)(), { grid } = catalogue, children = ({ cells }) => cells.map((cell, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    style: {
      gridColumn: `span ${cell.layout.colspan}`,
      gridRow: `span ${cell.layout.rowspan}`
    },
    id: "grid-item",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, {
      cell
    }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this)
  }, "cell" + index, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 60,
    columnNumber: 7
  }, this));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "py-20",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.default, {
        model: grid.content.grids[0],
        className: "gap-3 sm:gap-5",
        children
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 75,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Products, {
        donuts
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 78,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}

// app/routes/cart.tsx
var cart_exports = {};
__export(cart_exports, {
  default: () => Cart
});
var import_remix13 = __toESM(require_dist()), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Cart() {
  let basket = useBasket();
  return basket.cart.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "py-20 text-text w-auto md:w-128 lg:w-128 mx-auto",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: "text-4xl font-bold  mb-10",
        children: [
          "\u0412\u0430\u0448\u0430 \u043A\u043E\u0440\u0437\u0438\u043D\u0430 (",
          basket.cart.length,
          ")"
        ]
      }, void 0, !0, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col gap-5 bg-background1 p-10",
        children: [
          basket.cart.map((item, index) => {
            var _a;
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex justify-between items-center",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex flex-col",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      className: "font-semibold text-xl",
                      children: [
                        item.name,
                        " \xD7 ",
                        item.quantity
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/cart.tsx",
                      lineNumber: 24,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex gap-3",
                      children: (_a = item.attributes) == null ? void 0 : _a.map((attr, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "even:after:content-['\\00a0-'] even:before:content-['-\\00a0']",
                        children: attr.value
                      }, index2, !1, {
                        fileName: "app/routes/cart.tsx",
                        lineNumber: 29,
                        columnNumber: 19
                      }, this))
                    }, void 0, !1, {
                      fileName: "app/routes/cart.tsx",
                      lineNumber: 27,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/cart.tsx",
                  lineNumber: 23,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  children: [
                    "$",
                    item.price.gross * item.quantity
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/cart.tsx",
                  lineNumber: 38,
                  columnNumber: 13
                }, this)
              ]
            }, index, !0, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 22,
              columnNumber: 11
            }, this);
          }),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex justify-between items-center border-t-2 border-text pt-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "font-semibold text-xl",
                children: "\u0418\u0442\u043E\u0433\u043E"
              }, void 0, !1, {
                fileName: "app/routes/cart.tsx",
                lineNumber: 42,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                children: [
                  "$",
                  basket.total.gross
                ]
              }, void 0, !0, {
                fileName: "app/routes/cart.tsx",
                lineNumber: 43,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix13.Link, {
            to: "/checkout",
            className: "bg-text text-primary py-3 mt-10 rounded font-semibold text-center",
            children: "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437"
          }, void 0, !1, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 45,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/cart.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "py-20",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
      className: "text-4xl font-bold text-text",
      children: "\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u0443\u0441\u0442\u0430."
    }, void 0, !1, {
      fileName: "app/routes/cart.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/cart.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "500e357e", entry: { module: "/build/entry.client-JGPSWDHB.js", imports: ["/build/_shared/chunk-LF6OR5BN.js", "/build/_shared/chunk-AMFLFMGS.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-EYLYLC2Y.js", imports: ["/build/_shared/chunk-6E6OLZTB.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/cart": { id: "routes/cart", parentId: "root", path: "cart", index: void 0, caseSensitive: void 0, module: "/build/routes/cart-UQQSJDFJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/checkout": { id: "routes/checkout", parentId: "root", path: "checkout", index: void 0, caseSensitive: void 0, module: "/build/routes/checkout-IQ4WLHVD.js", imports: ["/build/_shared/chunk-YZPNLZH7.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/confirmation/$orderId": { id: "routes/confirmation/$orderId", parentId: "root", path: "confirmation/:orderId", index: void 0, caseSensitive: void 0, module: "/build/routes/confirmation/$orderId-IJKTX5YN.js", imports: ["/build/_shared/chunk-YZPNLZH7.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-LHMIPQMY.js", imports: ["/build/_shared/chunk-L2Y367EV.js", "/build/_shared/chunk-YZPNLZH7.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/shop/$product": { id: "routes/shop/$product", parentId: "root", path: "shop/:product", index: void 0, caseSensitive: void 0, module: "/build/routes/shop/$product-T52LA4R5.js", imports: ["/build/_shared/chunk-L2Y367EV.js", "/build/_shared/chunk-YZPNLZH7.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-500E357E.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/confirmation/$orderId": {
    id: "routes/confirmation/$orderId",
    parentId: "root",
    path: "confirmation/:orderId",
    index: void 0,
    caseSensitive: void 0,
    module: orderId_exports
  },
  "routes/shop/$product": {
    id: "routes/shop/$product",
    parentId: "root",
    path: "shop/:product",
    index: void 0,
    caseSensitive: void 0,
    module: product_exports
  },
  "routes/checkout": {
    id: "routes/checkout",
    parentId: "root",
    path: "checkout",
    index: void 0,
    caseSensitive: void 0,
    module: checkout_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/cart": {
    id: "routes/cart",
    parentId: "root",
    path: "cart",
    index: void 0,
    caseSensitive: void 0,
    module: cart_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
/**
 * @remix-run/node v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=index.js.map
