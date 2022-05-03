import {
  __commonJS,
  init_react,
  require_react
} from "/build/_shared/chunk-I5ORBN7C.js";

// node_modules/@crystallize/react-image/dist/react-image.cjs.development.js
var require_react_image_cjs_development = __commonJS({
  "node_modules/@crystallize/react-image/dist/react-image.cjs.development.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
    }
    var React2 = _interopDefault(require_react());
    function _wrapRegExp() {
      _wrapRegExp = function(re, groups) {
        return new BabelRegExp(re, void 0, groups);
      };
      var _super = RegExp.prototype;
      var _groups = /* @__PURE__ */ new WeakMap();
      function BabelRegExp(re, flags, groups) {
        var _this = new RegExp(re, flags);
        _groups.set(_this, groups || _groups.get(re));
        return _setPrototypeOf(_this, BabelRegExp.prototype);
      }
      _inherits(BabelRegExp, RegExp);
      BabelRegExp.prototype.exec = function(str) {
        var result = _super.exec.call(this, str);
        if (result)
          result.groups = buildGroups(result, this);
        return result;
      };
      BabelRegExp.prototype[Symbol.replace] = function(str, substitution) {
        if (typeof substitution === "string") {
          var groups = _groups.get(this);
          return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function(_, name) {
            return "$" + groups[name];
          }));
        } else if (typeof substitution === "function") {
          var _this = this;
          return _super[Symbol.replace].call(this, str, function() {
            var args = arguments;
            if (typeof args[args.length - 1] !== "object") {
              args = [].slice.call(args);
              args.push(buildGroups(args, _this));
            }
            return substitution.apply(this, args);
          });
        } else {
          return _super[Symbol.replace].call(this, str, substitution);
        }
      };
      function buildGroups(result, re) {
        var g = _groups.get(re);
        return Object.keys(g).reduce(function(groups, name) {
          groups[name] = result[g[name]];
          return groups;
        }, /* @__PURE__ */ Object.create(null));
      }
      return _wrapRegExp.apply(this, arguments);
    }
    function _extends() {
      _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    var _excluded = ["children"];
    var _excluded2 = ["src", "url", "sizes", "variants", "altText", "alt", "caption", "className", "media", "_availableSizes", "_availableFormats"];
    function getVariantSrc(variant) {
      return variant.url + " " + variant.width + "w";
    }
    var Image = function Image2(_ref) {
      var _biggestImage, _biggestImage2, _caption$html, _caption$plainText;
      var children = _ref.children, restOfAllProps = _objectWithoutPropertiesLoose(_ref, _excluded);
      var src = restOfAllProps.src, url = restOfAllProps.url, sizes = restOfAllProps.sizes, variants = restOfAllProps.variants, altText = restOfAllProps.altText, altPassed = restOfAllProps.alt, caption = restOfAllProps.caption, className = restOfAllProps.className, media = restOfAllProps.media, _availableSizes = restOfAllProps._availableSizes, _availableFormats = restOfAllProps._availableFormats, rest = _objectWithoutPropertiesLoose(restOfAllProps, _excluded2);
      var vars = (variants || []).filter(function(v) {
        return !!v;
      });
      var alt = typeof altPassed === "string" ? altPassed : altText;
      if (url && _availableSizes && _availableFormats) {
        vars = [];
        var urlWithoutFileExtension = url.replace(/\.[^/]+$/, "");
        var match = urlWithoutFileExtension.match(/(.+)(\/)([^/]+)$/);
        if (match) {
          var base = match[1], filename = match[3];
          _availableSizes.forEach(function(size) {
            _availableFormats.forEach(function(format) {
              vars.push({
                url: base + "/@" + size + "/" + filename + "." + format,
                width: size
              });
            });
          });
        }
      }
      var hasVariants = vars.length > 0;
      var biggestImage = vars[0];
      if (hasVariants) {
        biggestImage = vars.reduce(function(acc, v) {
          if (!acc.width || v.width > acc.width) {
            return v;
          }
          return acc;
        }, vars[0]);
      }
      var std = vars.filter(function(v) {
        return v.url && !v.url.endsWith(".webp") && !v.url.endsWith(".avif");
      });
      var webp = vars.filter(function(v) {
        return v.url && v.url.endsWith(".webp");
      });
      var avif = vars.filter(function(v) {
        return v.url && v.url.endsWith(".avif");
      });
      var srcSet = std.map(getVariantSrc).join(", ");
      var srcSetWebp = webp.map(getVariantSrc).join(", ");
      var srcSetAvif = avif.map(getVariantSrc).join(", ");
      var originalFileExtension = "jpeg";
      if (std.length > 0) {
        var _match$groups;
        var _match = std[0].url.match(/* @__PURE__ */ _wrapRegExp(/\.((?:(?!\.)[\s\S])+)$/, {
          name: 1
        }));
        originalFileExtension = (_match == null ? void 0 : (_match$groups = _match.groups) == null ? void 0 : _match$groups.name) || "jpeg";
        if (originalFileExtension === "jpg") {
          originalFileExtension = "jpeg";
        }
      }
      var commonProps = {
        src: src || url || (hasVariants ? std[0].url : void 0),
        alt,
        caption,
        width: (_biggestImage = biggestImage) == null ? void 0 : _biggestImage.width,
        height: (_biggestImage2 = biggestImage) == null ? void 0 : _biggestImage2.height
      };
      var useWebP = srcSetWebp.length > 0;
      var useAvif = srcSetAvif.length > 0;
      if (useWebP && useAvif) {
        var firstWebp = webp[0];
        var firstAvif = avif[0];
        if (firstWebp.size && firstAvif.size) {
          useAvif = firstWebp.size > firstAvif.size;
        }
      }
      if (children) {
        return children(_extends({
          srcSet,
          srcSetWebp,
          srcSetAvif,
          useAvif,
          useWebP,
          className,
          sizes,
          media
        }, commonProps, rest, {
          originalFileExtension
        }));
      }
      var captionString = (caption == null ? void 0 : (_caption$html = caption.html) == null ? void 0 : _caption$html[0]) || (caption == null ? void 0 : (_caption$plainText = caption.plainText) == null ? void 0 : _caption$plainText[0]) || "";
      return React2.createElement("figure", {
        className
      }, React2.createElement("picture", null, useAvif && React2.createElement("source", {
        srcSet: srcSetAvif,
        type: "image/avif",
        sizes,
        media
      }), useWebP && React2.createElement("source", {
        srcSet: srcSetWebp,
        type: "image/webp",
        sizes,
        media
      }), srcSet.length > 0 && React2.createElement("source", {
        srcSet,
        type: "image/" + originalFileExtension,
        sizes,
        media
      }), React2.createElement("img", Object.assign({}, commonProps, rest))), captionString && React2.createElement("figcaption", {
        dangerouslySetInnerHTML: {
          __html: captionString
        }
      }));
    };
    exports.Image = Image;
  }
});

// node_modules/@crystallize/react-image/dist/index.js
var require_dist = __commonJS({
  "node_modules/@crystallize/react-image/dist/index.js"(exports, module) {
    "use strict";
    init_react();
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_image_cjs_development();
    }
  }
});

// app/crystallize/utils/componentContent.ts
init_react();
var componentContent = (o, v) => {
  return o && o["__typename"] === v ? o : null;
};

export {
  require_dist,
  componentContent
};
//# sourceMappingURL=/build/_shared/chunk-BDTSCXDZ.js.map
