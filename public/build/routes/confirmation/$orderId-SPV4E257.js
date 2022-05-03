import "/build/_shared/chunk-ABWSVWPG.js";
import {
  useBasket
} from "/build/_shared/chunk-LZH5CSIO.js";
import {
  React,
  __toESM,
  init_react,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-I5ORBN7C.js";

// browser-route-module:/home/aleksep/remix/donat/remix/app/routes/confirmation/$orderId.tsx?browser
init_react();

// app/routes/confirmation/$orderId.tsx
init_react();

// app/components/confirmation.tsx
init_react();
var import_react = __toESM(require_react());
function Confirmation({ order, success }) {
  const basket = useBasket();
  if (success) {
    basket.actions.empty();
  }
  (0, import_react.useEffect)(() => {
    if (!order) {
      const t = setTimeout(() => window.location.reload(), 5e3);
      return () => clearTimeout(t);
    }
  }, [order]);
  if (!order) {
    return /* @__PURE__ */ React.createElement("p", null, "Loading...");
  }
  const cart = order.cart.map((item) => ({
    ...item,
    image: {
      url: item.imageUrl
    }
  }));
  const { total } = order;
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-auth p-20 bg-background3 mx-auto mt-20 text-text"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    className: "font-bold text-3xl mb-6"
  }, "Order Confirmation"), /* @__PURE__ */ React.createElement("p", {
    className: "mb-5"
  }, "We\u2019ve received your order #", order.id, "."), /* @__PURE__ */ React.createElement("div", null, cart.map((item, index) => {
    return /* @__PURE__ */ React.createElement("div", {
      key: index,
      className: "flex justify-between mb-4"
    }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, item.name, " x ", item.quantity)), /* @__PURE__ */ React.createElement("p", null, "$", item.price.gross * item.quantity));
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-3 border-t-2 pt-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between"
  }, /* @__PURE__ */ React.createElement("p", null, "Subtotal"), /* @__PURE__ */ React.createElement("p", null, "$", total.gross)), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between"
  }, /* @__PURE__ */ React.createElement("p", null, "Tax"), /* @__PURE__ */ React.createElement("p", null, "$", total.net - total.gross)), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "font-bold"
  }, "Total"), /* @__PURE__ */ React.createElement("p", null, "$", total.net))))));
}

// app/routes/confirmation/$orderId.tsx
var ConfirmationStripe = () => {
  var _a, _b;
  const data = useLoaderData();
  const order = (_b = (_a = data.data) == null ? void 0 : _a.orders) == null ? void 0 : _b.get;
  return /* @__PURE__ */ React.createElement("div", null, order ? /* @__PURE__ */ React.createElement(Confirmation, {
    order,
    success: true
  }) : /* @__PURE__ */ React.createElement("div", {
    className: "w-auth p-20 bg-background3 mx-auto mt-20 text-text"
  }, /* @__PURE__ */ React.createElement("p", null, "Please wait for the order to be processed...")));
};
var orderId_default = ConfirmationStripe;
export {
  orderId_default as default
};
//# sourceMappingURL=/build/routes/confirmation/$orderId-SPV4E257.js.map
