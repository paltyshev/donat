import {
  componentContent,
  require_dist
} from "/build/_shared/chunk-BDTSCXDZ.js";
import "/build/_shared/chunk-ABWSVWPG.js";
import {
  Link,
  React,
  __commonJS,
  __toESM,
  init_react,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-I5ORBN7C.js";

// node_modules/@crystallize/grid-renderer/dist/react.js
var require_react2 = __commonJS({
  "node_modules/@crystallize/grid-renderer/dist/react.js"(exports, module) {
    init_react();
    module.exports = function(e) {
      var t = {};
      function r(n) {
        if (t[n])
          return t[n].exports;
        var o = t[n] = { i: n, l: false, exports: {} };
        return e[n].call(o.exports, o, o.exports, r), o.l = true, o.exports;
      }
      return r.m = e, r.c = t, r.d = function(e2, t2, n) {
        r.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: n });
      }, r.r = function(e2) {
        typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      }, r.t = function(e2, t2) {
        if (1 & t2 && (e2 = r(e2)), 8 & t2)
          return e2;
        if (4 & t2 && typeof e2 == "object" && e2 && e2.__esModule)
          return e2;
        var n = /* @__PURE__ */ Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", { enumerable: true, value: e2 }), 2 & t2 && typeof e2 != "string")
          for (var o in e2)
            r.d(n, o, function(t3) {
              return e2[t3];
            }.bind(null, o));
        return n;
      }, r.n = function(e2) {
        var t2 = e2 && e2.__esModule ? function() {
          return e2.default;
        } : function() {
          return e2;
        };
        return r.d(t2, "a", t2), t2;
      }, r.o = function(e2, t2) {
        return Object.prototype.hasOwnProperty.call(e2, t2);
      }, r.p = "", r(r.s = 4);
    }([function(e, t, r) {
      e.exports = r(2)();
    }, function(e, t) {
      e.exports = require_react();
    }, function(e, t, r) {
      "use strict";
      var n = r(3);
      function o() {
      }
      function l() {
      }
      l.resetWarningCache = o, e.exports = function() {
        function e2(e3, t3, r3, o2, l2, a) {
          if (a !== n) {
            var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw c.name = "Invariant Violation", c;
          }
        }
        function t2() {
          return e2;
        }
        e2.isRequired = e2;
        var r2 = { array: e2, bool: e2, func: e2, number: e2, object: e2, string: e2, symbol: e2, any: e2, arrayOf: t2, element: e2, elementType: e2, instanceOf: t2, node: e2, objectOf: t2, oneOf: t2, oneOfType: t2, shape: t2, exact: t2, checkPropTypes: l, resetWarningCache: o };
        return r2.PropTypes = r2, r2;
      };
    }, function(e, t, r) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    }, function(e, t, r) {
      "use strict";
      r.r(t);
      var n = r(1), o = r.n(n), l = r(0), a = r.n(l);
      function c() {
        return (c = Object.assign || function(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var r2 = arguments[t2];
            for (var n2 in r2)
              Object.prototype.hasOwnProperty.call(r2, n2) && (e2[n2] = r2[n2]);
          }
          return e2;
        }).apply(this, arguments);
      }
      function i(e2, t2) {
        var r2 = Object.keys(e2);
        if (Object.getOwnPropertySymbols) {
          var n2 = Object.getOwnPropertySymbols(e2);
          t2 && (n2 = n2.filter(function(t3) {
            return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
          })), r2.push.apply(r2, n2);
        }
        return r2;
      }
      function u(e2) {
        for (var t2 = 1; t2 < arguments.length; t2++) {
          var r2 = arguments[t2] != null ? arguments[t2] : {};
          t2 % 2 ? i(r2, true).forEach(function(t3) {
            p(e2, t3, r2[t3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r2)) : i(r2).forEach(function(t3) {
            Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(r2, t3));
          });
        }
        return e2;
      }
      function p(e2, t2, r2) {
        return t2 in e2 ? Object.defineProperty(e2, t2, { value: r2, enumerable: true, configurable: true, writable: true }) : e2[t2] = r2, e2;
      }
      function f(e2, t2) {
        if (e2 == null)
          return {};
        var r2, n2, o2 = function(e3, t3) {
          if (e3 == null)
            return {};
          var r3, n3, o3 = {}, l3 = Object.keys(e3);
          for (n3 = 0; n3 < l3.length; n3++)
            r3 = l3[n3], t3.indexOf(r3) >= 0 || (o3[r3] = e3[r3]);
          return o3;
        }(e2, t2);
        if (Object.getOwnPropertySymbols) {
          var l2 = Object.getOwnPropertySymbols(e2);
          for (n2 = 0; n2 < l2.length; n2++)
            r2 = l2[n2], t2.indexOf(r2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, r2) && (o2[r2] = e2[r2]);
        }
        return o2;
      }
      var s = function(e2) {
        var t2 = e2.cellComponent, r2 = e2.cells, n2 = e2.children, l2 = e2.totalColSpan, a2 = l2 === void 0 ? 4 : l2, i2 = e2.style, p2 = f(e2, ["cellComponent", "cells", "children", "totalColSpan", "style"]), s2 = t2;
        return o.a.createElement("div", c({ style: u({ display: "grid", gridTemplateColumns: "repeat(".concat(a2, ", 1fr)") }, i2), className: "crystallize-grid crystallize-grid--css-grid" }, p2), n2 ? n2({ cells: r2, totalColSpan: a2 }) : r2.map(function(e3, t3) {
          return o.a.createElement("div", { key: "cell-".concat(t3), className: "crystallize-grid__cell", style: { gridColumn: "span ".concat(e3.layout.colspan), gridRow: "span ".concat(e3.layout.rowspan) } }, o.a.createElement(s2, { cell: e3, totalColSpan: a2 }));
        }));
      };
      s.propTypes = { cellComponent: a.a.oneOfType([a.a.node, a.a.func]), cells: a.a.arrayOf(a.a.object).isRequired, children: a.a.func, totalColSpan: a.a.number };
      var y = s;
      function d() {
        return (d = Object.assign || function(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var r2 = arguments[t2];
            for (var n2 in r2)
              Object.prototype.hasOwnProperty.call(r2, n2) && (e2[n2] = r2[n2]);
          }
          return e2;
        }).apply(this, arguments);
      }
      function b(e2, t2) {
        if (e2 == null)
          return {};
        var r2, n2, o2 = function(e3, t3) {
          if (e3 == null)
            return {};
          var r3, n3, o3 = {}, l3 = Object.keys(e3);
          for (n3 = 0; n3 < l3.length; n3++)
            r3 = l3[n3], t3.indexOf(r3) >= 0 || (o3[r3] = e3[r3]);
          return o3;
        }(e2, t2);
        if (Object.getOwnPropertySymbols) {
          var l2 = Object.getOwnPropertySymbols(e2);
          for (n2 = 0; n2 < l2.length; n2++)
            r2 = l2[n2], t2.indexOf(r2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, r2) && (o2[r2] = e2[r2]);
        }
        return o2;
      }
      var m = function(e2) {
        var t2 = e2.cellComponent, r2 = e2.children, n2 = e2.rows, l2 = e2.totalColSpan, a2 = l2 === void 0 ? 4 : l2, c2 = b(e2, ["cellComponent", "children", "rows", "totalColSpan"]), i2 = t2;
        return o.a.createElement("table", d({ className: "crystallize-grid crystallize-grid--table" }, c2), o.a.createElement("thead", null, o.a.createElement("tr", null, new Array(a2).fill(0).map(function(e3, t3) {
          return o.a.createElement("th", { key: "th-".concat(t3) });
        }))), o.a.createElement("tbody", null, r2 ? r2({ rows: n2, totalColSpan: a2 }) : n2.map(function(e3, t3) {
          return o.a.createElement("tr", { key: "row-".concat(t3) }, e3.columns.map(function(e4, r3) {
            return o.a.createElement("td", { key: "cell-".concat(t3, "-").concat(r3), className: "crystallize-grid__cell", rowSpan: e4.layout.rowspan, colSpan: e4.layout.colspan }, o.a.createElement(i2, { cell: e4, totalColSpan: a2 }));
          }));
        })));
      };
      m.propTypes = { cellComponent: a.a.oneOfType([a.a.node, a.a.func]), children: a.a.func, rows: a.a.arrayOf(a.a.object), totalColSpan: a.a.number };
      var O = m;
      function g() {
        return (g = Object.assign || function(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var r2 = arguments[t2];
            for (var n2 in r2)
              Object.prototype.hasOwnProperty.call(r2, n2) && (e2[n2] = r2[n2]);
          }
          return e2;
        }).apply(this, arguments);
      }
      function v(e2, t2) {
        if (e2 == null)
          return {};
        var r2, n2, o2 = function(e3, t3) {
          if (e3 == null)
            return {};
          var r3, n3, o3 = {}, l3 = Object.keys(e3);
          for (n3 = 0; n3 < l3.length; n3++)
            r3 = l3[n3], t3.indexOf(r3) >= 0 || (o3[r3] = e3[r3]);
          return o3;
        }(e2, t2);
        if (Object.getOwnPropertySymbols) {
          var l2 = Object.getOwnPropertySymbols(e2);
          for (n2 = 0; n2 < l2.length; n2++)
            r2 = l2[n2], t2.indexOf(r2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, r2) && (o2[r2] = e2[r2]);
        }
        return o2;
      }
      r.d(t, "CSSGrid", function() {
        return y;
      }), r.d(t, "Table", function() {
        return O;
      });
      var h = function(e2) {
        var t2 = e2.cellComponent, r2 = e2.children, n2 = e2.model, l2 = e2.type, a2 = l2 === void 0 ? "grid" : l2, c2 = v(e2, ["cellComponent", "children", "model", "type"]);
        if (!t2 && !r2)
          return console.error("@crystallize/grid-renderer: missing \xB4cellComponent` or children function"), null;
        var i2 = n2.rows;
        if (!i2.length)
          return null;
        var u2 = function(e3) {
          return { totalColSpan: e3[0].columns.reduce(function(e4, t3) {
            return e4 + t3.layout.colspan;
          }, 0) };
        }(i2).totalColSpan;
        if (a2 === "table")
          return o.a.createElement(O, g({ cellComponent: t2, rows: i2, totalColSpan: u2 }, c2), r2);
        var p2 = i2.map(function(e3) {
          return e3.columns;
        }), f2 = [].concat.apply([], p2);
        return o.a.createElement(y, g({ cellComponent: t2, cells: f2, totalColSpan: u2 }, c2), r2);
      };
      h.propTypes = { cellComponent: a.a.oneOfType([a.a.node, a.a.func]), children: a.a.func, model: a.a.oneOfType([a.a.object, a.a.arrayOf(a.a.object)]).isRequired, type: a.a.string };
      t.default = h;
    }]);
  }
});

// node_modules/@crystallize/grid-renderer/react.js
var require_react3 = __commonJS({
  "node_modules/@crystallize/grid-renderer/react.js"(exports, module) {
    init_react();
    module.exports = require_react2();
  }
});

// browser-route-module:/home/aleksep/remix/donat/remix/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var import_react = __toESM(require_react3());

// app/components/grid-item.tsx
init_react();
var import_react_image = __toESM(require_dist());
var GridItem = ({ cell }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  return cell.layout.colspan === 3 ? /* @__PURE__ */ React.createElement(Link, {
    to: (_a = cell == null ? void 0 : cell.item) == null ? void 0 : _a.path,
    prefetch: "intent"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex relative lg:flex-row flex-col"
  }, /* @__PURE__ */ React.createElement(import_react_image.Image, {
    ...(_c = (_b = cell.item) == null ? void 0 : _b.variants[0]) == null ? void 0 : _c.images[0],
    sizes: "(max-width: 700px) 300px, 500px",
    className: "lg:absolute lg:top-0 lg:bottom-0 lg:right-0  lg:w-8/12 overflow-hidden rounded-r-xl"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-evenly lg:w-128  px-5 bg-background1 h-80 p-5 rounded-xl w-full lg:items-start items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-60 lg:text-left text-center"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-3xl font-bold"
  }, (_d = cell == null ? void 0 : cell.item) == null ? void 0 : _d.name), /* @__PURE__ */ React.createElement("p", {
    className: "mt-4"
  }, "$", (_f = (_e = cell.item) == null ? void 0 : _e.variants[0]) == null ? void 0 : _f.price)), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-1"
  }, (_h = (_g = cell.item) == null ? void 0 : _g.topics) == null ? void 0 : _h.map((topic) => /* @__PURE__ */ React.createElement("div", {
    className: "text-sm bg-grey px-2 py-1 rounded-2xl",
    key: topic.name
  }, topic.name)))))) : /* @__PURE__ */ React.createElement(Link, {
    to: cell.item.path,
    prefetch: "intent"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col bg-background1 px-5 py-7 rounded-xl lg:h-106 h-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between items-start"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-1"
  }, (_i = cell.item.topics) == null ? void 0 : _i.map((topic) => /* @__PURE__ */ React.createElement("div", {
    className: "text-sm bg-grey px-2 py-1 rounded-2xl",
    key: topic.name
  }, topic.name))), /* @__PURE__ */ React.createElement("p", {
    className: "self-end"
  }, "$", (_j = cell.item.variants[0]) == null ? void 0 : _j.price)), /* @__PURE__ */ React.createElement(import_react_image.Image, {
    ...(_k = cell.item.variants[0]) == null ? void 0 : _k.images[0],
    sizes: "(max-width: 700px) 200px, 300px",
    loading: "lazy"
  }), /* @__PURE__ */ React.createElement("h2", {
    className: "text-3xl font-bold text-center w-40 m-auto"
  }, cell.item.name)));
};

// app/components/products.tsx
init_react();
var import_react_image2 = __toESM(require_dist());
var Products = ({ donuts }) => {
  var _a;
  return /* @__PURE__ */ React.createElement("div", {
    className: "mt-20"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-lg font-semibold mb-10"
  }, "Our do(u)nuts"), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-start flex-wrap lg:gap-1 gap-5"
  }, (_a = donuts == null ? void 0 : donuts.children) == null ? void 0 : _a.map((donut, index) => {
    var _a2, _b, _c, _d, _e, _f;
    return !((_b = componentContent((_a2 = donut == null ? void 0 : donut.bundle) == null ? void 0 : _a2.content, "BooleanContent")) == null ? void 0 : _b.value) && donut.bundle ? /* @__PURE__ */ React.createElement(Link, {
      to: componentContent(donut, "Product").path,
      prefetch: "intent",
      className: "flex flex-col bg-primary rounded-xl lg:h-106 p-5 lg:w-80",
      key: index
    }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
      className: "flex justify-between items-start"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "flex gap-1"
    }, (_c = donut == null ? void 0 : donut.topics) == null ? void 0 : _c.map((topic, index2) => /* @__PURE__ */ React.createElement("div", {
      className: "text-sm bg-grey px-2 py-1 rounded-2xl",
      key: index2
    }, topic.name))), /* @__PURE__ */ React.createElement("p", {
      className: "self-end"
    }, "$", (_d = componentContent(donut, "Product")) == null ? void 0 : _d.defaultVariant.price)), /* @__PURE__ */ React.createElement(import_react_image2.Image, {
      ...(_e = componentContent(donut, "Product")) == null ? void 0 : _e.defaultVariant.firstImage,
      sizes: "(max-width: 1024px) 100vw, 400px"
    }), /* @__PURE__ */ React.createElement("h2", {
      className: "text-3xl font-bold text-center m-auto w-40"
    }, (_f = componentContent(donut, "Product")) == null ? void 0 : _f.name))) : null;
  })));
};

// app/routes/index.tsx
var meta = ({ data }) => {
  var _a, _b;
  let {
    catalogue: { meta: meta2 }
  } = data;
  let metaData = componentContent(meta2.content, "ContentChunkContent").chunks[0];
  return {
    title: `${componentContent(metaData[0].content, "SingleLineContent").text}`,
    description: `${componentContent(metaData[1].content, "RichTextContent").plainText[0]}`,
    "og:image": `${(_b = (_a = componentContent(metaData[2].content, "ImageContent")) == null ? void 0 : _a.images[0]) == null ? void 0 : _b.url}`
  };
};
function Index() {
  let { catalogue, donuts } = useLoaderData();
  let { grid } = catalogue;
  const children = ({ cells }) => {
    return cells.map((cell, index) => /* @__PURE__ */ React.createElement("div", {
      style: {
        gridColumn: `span ${cell.layout.colspan}`,
        gridRow: `span ${cell.layout.rowspan}`
      },
      id: "grid-item",
      key: "cell" + index
    }, /* @__PURE__ */ React.createElement(GridItem, {
      cell
    })));
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "py-20"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-background5 z-0 absolute left-0 right-0 bottom-0 rounded-tl-full rounded-tr-full",
    style: {
      top: "45%",
      zIndex: "-1"
    }
  }), /* @__PURE__ */ React.createElement(import_react.default, {
    model: grid.content.grids[0],
    className: "gap-5"
  }, children), /* @__PURE__ */ React.createElement(Products, {
    donuts
  }));
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/index-YVEV42RO.js.map
