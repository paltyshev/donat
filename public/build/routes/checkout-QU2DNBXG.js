import {
  serviceAPIClient
} from "/build/_shared/chunk-5YYGTQH6.js";
import {
  useBasket
} from "/build/_shared/chunk-FGM7SEZY.js";
import {
  Form,
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-DVTHSMR5.js";

// browser-route-module:/home/aleksep/remix/donat/app/routes/checkout.tsx?browser
init_react();

// app/routes/checkout.tsx
init_react();

// app/components/payments/index.ts
init_react();

// app/components/payments/payments.tsx
init_react();
var import_react2 = __toESM(require_react());

// app/components/payments/invoice.tsx
init_react();
var import_react = __toESM(require_react());

// app/service-api/invoice-create-order.generated.ts
init_react();
var InoicevCreateOrderDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "InoicevCreateOrder" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "checkoutModel" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "CheckoutModelInput" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "paymentProviders" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "invoice" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "createInvoice" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "checkoutModel" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "checkoutModel" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "success" } }, { "kind": "Field", "name": { "kind": "Name", "value": "orderId" } }] } }] } }] } }] } }] };

// app/components/payments/invoice.tsx
var InvoiceForm = ({
  checkoutModel,
  onError = (error) => console.log(error)
}) => {
  const [status, setStatus] = (0, import_react.useState)("idle");
  const handleSubmit = async (event) => {
    event.preventDefault();
    go();
    async function go() {
      setStatus("submitting");
      const response = await serviceAPIClient.request(InoicevCreateOrderDocument, {
        checkoutModel
      });
      const { success, orderId } = response.paymentProviders.invoice.createInvoice;
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
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    disabled: status !== "idle",
    className: "w-full bg-text text-primary py-3 font-semibold mt-5"
  }, status === "idle" ? "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437" : "\u041F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435..."));
};
var StripePayment = ({ checkoutModel, onSuccess }) => {
  return /* @__PURE__ */ React.createElement(InvoiceForm, {
    checkoutModel,
    onSuccess
  });
};
var Invoice = ({ checkoutModel, onSuccess }) => {
  return /* @__PURE__ */ React.createElement(StripePayment, {
    checkoutModel,
    onSuccess
  });
};

// app/components/payments/payments.tsx
var Payments = (props) => {
  const [payment, setPayment] = (0, import_react2.useState)("");
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Invoice, {
    ...props
  }));
};

// app/routes/checkout.tsx
var import_react3 = __toESM(require_react());
function Checkout() {
  const [state, setState] = (0, import_react3.useState)({
    firstName: "",
    lastName: "",
    phone: "",
    street: "",
    city: "",
    postalCode: ""
  });
  const { firstName, lastName, phone, street, city, postalCode } = state;
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
        { type: "billing", phone },
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
    className: "p-10 mx-auto bg-background1 w-auto md:w-128 lg:w-128 mt-20"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-text text-3xl font-bold mb-10 text-center"
  }, "\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430"), /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto"
  }, /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    className: "flex flex-wrap gap-5"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "\u0418\u043C\u044F",
    placeholder: "\u0418\u043C\u044F",
    className: "w-full",
    onChange: (e) => setState({ ...state, firstName: e.target.value })
  }), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F",
    placeholder: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F",
    className: "w-full",
    onChange: (e) => setState({ ...state, lastName: e.target.value })
  }), /* @__PURE__ */ React.createElement("input", {
    type: "tel",
    name: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    className: "w-full",
    onChange: (e) => setState({ ...state, phone: e.target.value })
  }), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "\u0410\u0434\u0440\u0435\u0441 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438",
    placeholder: "\u0410\u0434\u0440\u0435\u0441 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438",
    className: "w-full",
    onChange: (e) => setState({ ...state, street: e.target.value })
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
//# sourceMappingURL=/build/routes/checkout-QU2DNBXG.js.map
