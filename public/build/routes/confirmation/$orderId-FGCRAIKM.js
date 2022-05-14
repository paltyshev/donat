import "/build/_shared/chunk-5YYGTQH6.js";
import {
  useBasket
} from "/build/_shared/chunk-FGM7SEZY.js";
import {
  React,
  __toESM,
  init_react,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-DVTHSMR5.js";

// browser-route-module:/home/aleksep/remix/donat/app/routes/confirmation/$orderId.tsx?browser
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
    className: "w-auto md:w-128 lg:w-128 p-10 bg-background3 mx-auto mt-20 text-text"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    className: "font-bold text-3xl mb-6"
  }, "\u0417\u0430\u043A\u0430\u0437 \u043F\u0440\u0438\u043D\u044F\u0442"), /* @__PURE__ */ React.createElement("p", {
    className: "mb-5"
  }, "\u041C\u044B \u0443\u0436\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u0432\u0430\u0448 \u0437\u0430\u043A\u0430\u0437 \u2116", order.id, "."), /* @__PURE__ */ React.createElement("div", null, cart.map((item, index) => {
    return /* @__PURE__ */ React.createElement("div", {
      key: index,
      className: "flex justify-between mb-4"
    }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, item.name, " x ", item.quantity)), /* @__PURE__ */ React.createElement("p", null, "$", item.price.gross * item.quantity));
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-3 border-t-2 pt-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between"
  }, /* @__PURE__ */ React.createElement("p", null, "\u0421\u0443\u043C\u043C\u0430"), /* @__PURE__ */ React.createElement("p", null, "$", total.gross)), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between"
  }, /* @__PURE__ */ React.createElement("p", null, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430"), /* @__PURE__ */ React.createElement("p", null, "$", total.net - total.gross)), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "font-bold"
  }, "\u0418\u0442\u043E\u0433\u043E"), /* @__PURE__ */ React.createElement("p", null, "$", total.net))))));
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
  }, /* @__PURE__ */ React.createElement("p", null, "\u0417\u0430\u043A\u0430\u0437 \u043E\u0444\u043E\u0440\u043C\u043B\u044F\u0435\u0442\u0441\u044F... \u041E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443.")));
};
var orderId_default = ConfirmationStripe;
export {
  orderId_default as default
};
//# sourceMappingURL=/build/routes/confirmation/$orderId-FGCRAIKM.js.map
