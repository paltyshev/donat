import {
  useBasket
} from "/build/_shared/chunk-FGM7SEZY.js";
import {
  Link,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-DVTHSMR5.js";

// browser-route-module:/home/aleksep/remix/donat/app/routes/cart.tsx?browser
init_react();

// app/routes/cart.tsx
init_react();
var import_react = __toESM(require_react());
function Cart() {
  let basket = useBasket();
  if (!basket.cart.length) {
    return /* @__PURE__ */ import_react.default.createElement("div", {
      className: "py-20"
    }, /* @__PURE__ */ import_react.default.createElement("h1", {
      className: "text-4xl font-bold text-text"
    }, "\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u0443\u0441\u0442\u0430."));
  }
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "py-20 text-text w-auto md:w-128 lg:w-128 mx-auto"
  }, /* @__PURE__ */ import_react.default.createElement("h1", {
    className: "text-4xl font-bold  mb-10"
  }, "\u0412\u0430\u0448\u0430 \u043A\u043E\u0440\u0437\u0438\u043D\u0430 (", basket.cart.length, ")"), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "flex flex-col gap-5 bg-background1 p-10"
  }, basket.cart.map((item, index) => {
    var _a;
    return /* @__PURE__ */ import_react.default.createElement("div", {
      key: index,
      className: "flex justify-between items-center"
    }, /* @__PURE__ */ import_react.default.createElement("div", {
      className: "flex flex-col"
    }, /* @__PURE__ */ import_react.default.createElement("p", {
      className: "font-semibold text-xl"
    }, item.name, " \xD7 ", item.quantity), /* @__PURE__ */ import_react.default.createElement("div", {
      className: "flex gap-3"
    }, (_a = item.attributes) == null ? void 0 : _a.map((attr, index2) => /* @__PURE__ */ import_react.default.createElement("div", {
      className: "even:after:content-['\\00a0-'] even:before:content-['-\\00a0']",
      key: index2
    }, attr.value)))), /* @__PURE__ */ import_react.default.createElement("p", null, "$", item.price.gross * item.quantity));
  }), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "flex justify-between items-center border-t-2 border-text pt-4"
  }, /* @__PURE__ */ import_react.default.createElement("p", {
    className: "font-semibold text-xl"
  }, "\u0418\u0442\u043E\u0433\u043E"), /* @__PURE__ */ import_react.default.createElement("p", null, "$", basket.total.gross)), /* @__PURE__ */ import_react.default.createElement(Link, {
    to: "/checkout",
    className: "bg-text text-primary py-3 mt-10 rounded font-semibold text-center"
  }, "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437")));
}
export {
  Cart as default
};
//# sourceMappingURL=/build/routes/cart-4GJ3QUC5.js.map
