import {
  useBasket
} from "/build/_shared/chunk-3DSF5OMX.js";
import {
  Link,
  React,
  init_react
} from "/build/_shared/chunk-I5ORBN7C.js";

// browser-route-module:/home/aleksep/remix/donat/app/routes/cart.tsx?browser
init_react();

// app/routes/cart.tsx
init_react();
function Cart() {
  let basket = useBasket();
  if (!basket.cart.length) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "py-20"
    }, /* @__PURE__ */ React.createElement("h1", {
      className: "text-4xl font-bold text-text"
    }, "The cart is empty."));
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "py-20 text-text w-128 sm:w-auto mx-auto"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl font-bold  mb-10"
  }, "Your shopping cart (", basket.cart.length, ")"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-5 bg-background1 p-10"
  }, basket.cart.map((item, index) => {
    var _a;
    return /* @__PURE__ */ React.createElement("div", {
      key: index,
      className: "flex justify-between items-center"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "flex flex-col"
    }, /* @__PURE__ */ React.createElement("p", {
      className: "font-semibold text-xl"
    }, item.name, " \xD7 ", item.quantity), /* @__PURE__ */ React.createElement("div", {
      className: "flex gap-3"
    }, (_a = item.attributes) == null ? void 0 : _a.map((attr, index2) => /* @__PURE__ */ React.createElement("div", {
      className: "even:after:content-['\\00a0-'] even:before:content-['-\\00a0']",
      key: index2
    }, attr.value)))), /* @__PURE__ */ React.createElement("p", null, "$", item.price.gross * item.quantity));
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between items-center border-t-2 border-text pt-4"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "font-semibold text-xl"
  }, "Total"), /* @__PURE__ */ React.createElement("p", null, "$", basket.total.gross)), /* @__PURE__ */ React.createElement(Link, {
    to: "/checkout",
    className: "bg-text text-primary py-3 mt-10 rounded font-semibold text-center"
  }, "Go to Checkout")));
}
export {
  Cart as default
};
//# sourceMappingURL=/build/routes/cart-S5NA3J5D.js.map
