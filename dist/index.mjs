var jt = Object.defineProperty;
var Tt = (r, t, n) => t in r ? jt(r, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[t] = n;
var I = (r, t, n) => (Tt(r, typeof t != "symbol" ? t + "" : t, n), n);
import W from "react";
import kt from "axios";
var se = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function Ot() {
  if (Ne)
    return $;
  Ne = 1;
  var r = W, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(y, E, j) {
    var b, T = {}, D = null, Y = null;
    j !== void 0 && (D = "" + j), E.key !== void 0 && (D = "" + E.key), E.ref !== void 0 && (Y = E.ref);
    for (b in E)
      o.call(E, b) && !l.hasOwnProperty(b) && (T[b] = E[b]);
    if (y && y.defaultProps)
      for (b in E = y.defaultProps, E)
        T[b] === void 0 && (T[b] = E[b]);
    return { $$typeof: t, type: y, key: D, ref: Y, props: T, _owner: a.current };
  }
  return $.Fragment = n, $.jsx = u, $.jsxs = u, $;
}
var B = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function Dt() {
  return Ae || (Ae = 1, process.env.NODE_ENV !== "production" && function() {
    var r = W, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), y = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), le = Symbol.iterator, Ve = "@@iterator";
    function Ke(e) {
      if (e === null || typeof e != "object")
        return null;
      var s = le && e[le] || e[Ve];
      return typeof s == "function" ? s : null;
    }
    var N = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var s = arguments.length, i = new Array(s > 1 ? s - 1 : 0), c = 1; c < s; c++)
          i[c - 1] = arguments[c];
        ze("error", e, i);
      }
    }
    function ze(e, s, i) {
      {
        var c = N.ReactDebugCurrentFrame, p = c.getStackAddendum();
        p !== "" && (s += "%s", i = i.concat([p]));
        var h = i.map(function(d) {
          return String(d);
        });
        h.unshift("Warning: " + s), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var He = !1, qe = !1, Je = !1, Ge = !1, Xe = !1, ce;
    ce = Symbol.for("react.module.reference");
    function Ze(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === l || Xe || e === a || e === j || e === b || Ge || e === Y || He || qe || Je || typeof e == "object" && e !== null && (e.$$typeof === D || e.$$typeof === T || e.$$typeof === u || e.$$typeof === y || e.$$typeof === E || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ce || e.getModuleId !== void 0));
    }
    function Qe(e, s, i) {
      var c = e.displayName;
      if (c)
        return c;
      var p = s.displayName || s.name || "";
      return p !== "" ? i + "(" + p + ")" : i;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case l:
          return "Profiler";
        case a:
          return "StrictMode";
        case j:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var s = e;
            return ue(s) + ".Consumer";
          case u:
            var i = e;
            return ue(i._context) + ".Provider";
          case E:
            return Qe(e, e.render, "ForwardRef");
          case T:
            var c = e.displayName || null;
            return c !== null ? c : O(e.type) || "Memo";
          case D: {
            var p = e, h = p._payload, d = p._init;
            try {
              return O(d(h));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, F = 0, fe, de, pe, he, me, ve, ge;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function et() {
      {
        if (F === 0) {
          fe = console.log, de = console.info, pe = console.warn, he = console.error, me = console.group, ve = console.groupCollapsed, ge = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function tt() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: fe
            }),
            info: P({}, e, {
              value: de
            }),
            warn: P({}, e, {
              value: pe
            }),
            error: P({}, e, {
              value: he
            }),
            group: P({}, e, {
              value: me
            }),
            groupCollapsed: P({}, e, {
              value: ve
            }),
            groupEnd: P({}, e, {
              value: ge
            })
          });
        }
        F < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = N.ReactCurrentDispatcher, X;
    function M(e, s, i) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (p) {
            var c = p.stack.trim().match(/\n( *(at )?)/);
            X = c && c[1] || "";
          }
        return `
` + X + e;
      }
    }
    var Z = !1, V;
    {
      var rt = typeof WeakMap == "function" ? WeakMap : Map;
      V = new rt();
    }
    function be(e, s) {
      if (!e || Z)
        return "";
      {
        var i = V.get(e);
        if (i !== void 0)
          return i;
      }
      var c;
      Z = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = G.current, G.current = null, et();
      try {
        if (s) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (R) {
              c = R;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (R) {
              c = R;
            }
            e.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            c = R;
          }
          e();
        }
      } catch (R) {
        if (R && c && typeof R.stack == "string") {
          for (var f = R.stack.split(`
`), C = c.stack.split(`
`), v = f.length - 1, g = C.length - 1; v >= 1 && g >= 0 && f[v] !== C[g]; )
            g--;
          for (; v >= 1 && g >= 0; v--, g--)
            if (f[v] !== C[g]) {
              if (v !== 1 || g !== 1)
                do
                  if (v--, g--, g < 0 || f[v] !== C[g]) {
                    var S = `
` + f[v].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, S), S;
                  }
                while (v >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        Z = !1, G.current = h, tt(), Error.prepareStackTrace = p;
      }
      var L = e ? e.displayName || e.name : "", w = L ? M(L) : "";
      return typeof e == "function" && V.set(e, w), w;
    }
    function nt(e, s, i) {
      return be(e, !1);
    }
    function ot(e) {
      var s = e.prototype;
      return !!(s && s.isReactComponent);
    }
    function K(e, s, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return be(e, ot(e));
      if (typeof e == "string")
        return M(e);
      switch (e) {
        case j:
          return M("Suspense");
        case b:
          return M("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            return nt(e.render);
          case T:
            return K(e.type, s, i);
          case D: {
            var c = e, p = c._payload, h = c._init;
            try {
              return K(h(p), s, i);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, ye = {}, xe = N.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var s = e._owner, i = K(e.type, e._source, s ? s.type : null);
        xe.setExtraStackFrame(i);
      } else
        xe.setExtraStackFrame(null);
    }
    function st(e, s, i, c, p) {
      {
        var h = Function.call.bind(U);
        for (var d in e)
          if (h(e, d)) {
            var f = void 0;
            try {
              if (typeof e[d] != "function") {
                var C = Error((c || "React class") + ": " + i + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              f = e[d](s, d, c, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              f = v;
            }
            f && !(f instanceof Error) && (z(p), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", i, d, typeof f), z(null)), f instanceof Error && !(f.message in ye) && (ye[f.message] = !0, z(p), _("Failed %s type: %s", i, f.message), z(null));
          }
      }
    }
    var at = Array.isArray;
    function Q(e) {
      return at(e);
    }
    function it(e) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, i = s && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function lt(e) {
      try {
        return _e(e), !1;
      } catch {
        return !0;
      }
    }
    function _e(e) {
      return "" + e;
    }
    function Ce(e) {
      if (lt(e))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", it(e)), _e(e);
    }
    var Re = N.ReactCurrentOwner, ct = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ie, Se;
    function ut(e) {
      if (U.call(e, "ref")) {
        var s = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ft(e) {
      if (U.call(e, "key")) {
        var s = Object.getOwnPropertyDescriptor(e, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function dt(e, s) {
      typeof e.ref == "string" && Re.current;
    }
    function pt(e, s) {
      {
        var i = function() {
          Ie || (Ie = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function ht(e, s) {
      {
        var i = function() {
          Se || (Se = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var mt = function(e, s, i, c, p, h, d) {
      var f = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: s,
        ref: i,
        props: d,
        // Record the component responsible for creating this element.
        _owner: h
      };
      return f._store = {}, Object.defineProperty(f._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(f, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.defineProperty(f, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    };
    function vt(e, s, i, c, p) {
      {
        var h, d = {}, f = null, C = null;
        i !== void 0 && (Ce(i), f = "" + i), ft(s) && (Ce(s.key), f = "" + s.key), ut(s) && (C = s.ref, dt(s, p));
        for (h in s)
          U.call(s, h) && !ct.hasOwnProperty(h) && (d[h] = s[h]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (h in v)
            d[h] === void 0 && (d[h] = v[h]);
        }
        if (f || C) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          f && pt(d, g), C && ht(d, g);
        }
        return mt(e, f, C, p, c, Re.current, d);
      }
    }
    var ee = N.ReactCurrentOwner, je = N.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var s = e._owner, i = K(e.type, e._source, s ? s.type : null);
        je.setExtraStackFrame(i);
      } else
        je.setExtraStackFrame(null);
    }
    var te;
    te = !1;
    function re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Te() {
      {
        if (ee.current) {
          var e = O(ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function gt(e) {
      return "";
    }
    var ke = {};
    function Et(e) {
      {
        var s = Te();
        if (!s) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (s = `

Check the top-level render call using <` + i + ">.");
        }
        return s;
      }
    }
    function Oe(e, s) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = Et(s);
        if (ke[i])
          return;
        ke[i] = !0;
        var c = "";
        e && e._owner && e._owner !== ee.current && (c = " It was passed a child from " + O(e._owner.type) + "."), A(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, c), A(null);
      }
    }
    function De(e, s) {
      {
        if (typeof e != "object")
          return;
        if (Q(e))
          for (var i = 0; i < e.length; i++) {
            var c = e[i];
            re(c) && Oe(c, s);
          }
        else if (re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var p = Ke(e);
          if (typeof p == "function" && p !== e.entries)
            for (var h = p.call(e), d; !(d = h.next()).done; )
              re(d.value) && Oe(d.value, s);
        }
      }
    }
    function bt(e) {
      {
        var s = e.type;
        if (s == null || typeof s == "string")
          return;
        var i;
        if (typeof s == "function")
          i = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === E || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === T))
          i = s.propTypes;
        else
          return;
        if (i) {
          var c = O(s);
          st(i, e.props, "prop", c, e);
        } else if (s.PropTypes !== void 0 && !te) {
          te = !0;
          var p = O(s);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function yt(e) {
      {
        for (var s = Object.keys(e.props), i = 0; i < s.length; i++) {
          var c = s[i];
          if (c !== "children" && c !== "key") {
            A(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    var Pe = {};
    function we(e, s, i, c, p, h) {
      {
        var d = Ze(e);
        if (!d) {
          var f = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = gt();
          C ? f += C : f += Te();
          var v;
          e === null ? v = "null" : Q(e) ? v = "array" : e !== void 0 && e.$$typeof === t ? (v = "<" + (O(e.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, f);
        }
        var g = vt(e, s, i, p, h);
        if (g == null)
          return g;
        if (d) {
          var S = s.children;
          if (S !== void 0)
            if (c)
              if (Q(S)) {
                for (var L = 0; L < S.length; L++)
                  De(S[L], e);
                Object.freeze && Object.freeze(S);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              De(S, e);
        }
        if (U.call(s, "key")) {
          var w = O(e), R = Object.keys(s).filter(function(St) {
            return St !== "key";
          }), ne = R.length > 0 ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Pe[w + ne]) {
            var It = R.length > 0 ? "{" + R.join(": ..., ") + ": ...}" : "{}";
            _(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ne, w, It, w), Pe[w + ne] = !0;
          }
        }
        return e === o ? yt(g) : bt(g), g;
      }
    }
    function xt(e, s, i) {
      return we(e, s, i, !0);
    }
    function _t(e, s, i) {
      return we(e, s, i, !1);
    }
    var Ct = _t, Rt = xt;
    B.Fragment = o, B.jsx = Ct, B.jsxs = Rt;
  }()), B;
}
process.env.NODE_ENV === "production" ? se.exports = Ot() : se.exports = Dt();
var x = se.exports;
class Pt extends W.Component {
  constructor(t) {
    super(t);
  }
  onClick(t, n) {
    debugger;
    console.log(this.props.onActionButtonClick), alert("sdjçflsjdflkdsjflçkdsj");
  }
  render() {
    const t = this.props.buttons.map((n, o) => /* @__PURE__ */ x.jsx(
      "span",
      {
        className: "action-button",
        onClick: this.props.onActionButtonClick ? this.props.onActionButtonClick.bind(this, this.props.item, n) : void 0,
        children: n
      },
      o
    ));
    return /* @__PURE__ */ x.jsxs("div", { className: "action-buttons-container", children: [
      /* @__PURE__ */ x.jsx("span", { className: "action-buttons-container-text", children: this.props.item.text }),
      t
    ] });
  }
}
const k = {
  CHECKED: 1,
  UNCHECKED: 2,
  UNDETERMINED: 3
}, J = (r, t) => r.state.selectedItem === t, wt = (r, t, n, o) => {
  const a = ["muaaz-react-treeview-item-container"];
  return a.push("unselectable"), t.root === !0 && r.props.showRoot === !1 ? a.push("hidden") : (a.push(r.state.theme), a.push("level-" + n), o && (a.push("select-row"), J(r, t) && a.push("selected"))), a.join(" ");
}, Nt = (r, t) => {
  const n = ["icon"];
  return r.props.showIcon === !1 ? n.push("hidden") : (t.isLeaf && !(t.children && t.children.length > 0) && n.push("isleaf"), t.expanded && n.push("expanded")), n.join(" ");
}, At = (r, t, n) => {
  const o = ["expand-button"];
  return (n.children && n.children.length > 0 || !n.isLeaf && r.props.lazyLoad) && (o.push("hasChild"), n.expanded ? o.push("expanded") : o.push("colapsed")), t.state.loading && o.push("loading"), J(r, n) && o.push("selected"), o.join(" ");
}, Lt = (r, t) => {
  const n = ["checkbox"];
  return r.props.showCheckbox ? (t.state === k.CHECKED ? n.push("checked") : t.state === k.UNDETERMINED && n.push("undetermined"), J(r, t) && n.push("selected")) : n.push("hidden"), n.join(" ");
}, Ft = (r, t, n) => {
  const o = ["icon-and-text"];
  return n && o.push("select-row"), !n && J(r, t) && o.push("selected"), o.join(" ");
}, Ut = (r, t) => r.props.actionButtons ? /* @__PURE__ */ x.jsx(
  Pt,
  {
    onActionButtonClick: r.props.onActionButtonClick,
    buttons: r.props.actionButtons,
    item: t
  }
) : r.props.onRenderItem ? r.props.onRenderItem(t, r) : t.text, $t = (r, t, n, o) => {
}, Bt = (r, t, n, o) => {
  if (r.state.selectedItem !== t) {
    const a = o.target, l = function() {
      r.setState({
        selectedItem: t
      });
    };
    (n || a.classList.contains("icon-and-text") || a.classList.contains("icon") || a.classList.contains("text-inner") || a.classList.contains("text") || a.classList.contains("action-buttons-container-text")) && l(), r.props.onSelectItem && (r.props.selectRow && a.classList.contains("muaaz-react-treeview-item-container") || !r.props.selectRow && a.classList.contains("text-inner")) && r.props.onSelectItem(t);
  }
}, Le = (r, t, n) => {
  const o = () => {
    n.expanded = !n.expanded, r.setState({ selectedItem: n }), r.setState({ loading: !1 }), t.setState({ loading: !1 });
  }, a = () => {
    r.props.onColapsed && r.props.onColapsed(n);
  }, l = () => {
    r.props.onExpanded && r.props.onExpanded(n);
  };
  n.expanded ? (o(), a()) : (r.props.lazyLoad ? (r.setState({ loading: !0 }), t.setState({ loading: !0 }), r.props.lazyLoad && r.props.onLazyLoad ? r.props.onLazyLoad(n, (u) => {
    r.api.loadData(r, u, n), o();
  }) : r.api.load(n).then((u) => o())) : o(), l());
}, Wt = (r, t) => {
  const n = () => {
    r.props.onCheckItem && r.props.onCheckItem(t);
  };
  Ue(t) ? Mt(r, t) : Yt(r, t), r.setState({
    selectedItem: t
  }), n();
}, Yt = (r, t) => {
  t.state = k.CHECKED, ae(t), ie(r);
}, Mt = (r, t) => {
  t.state = k.UNCHECKED, ae(t), ie(r);
}, ae = (r) => {
  r.children && r.children.forEach(function(t) {
    t.state = r.state, ae(t);
  });
}, Vt = (r) => {
  for (let t = 0; t < r.length; t++) {
    const n = r[t];
    if (!Ue(n))
      return !1;
  }
  return !0;
}, Kt = (r) => {
  for (let t = 0; t < r.length; t++) {
    const n = r[t];
    if (!zt(n))
      return !1;
  }
  return !0;
}, ie = (r) => {
  const t = r.props.parent;
  if (t) {
    const n = t.props.item.children;
    Vt(n) ? t.props.item.state = k.CHECKED : Kt(n) ? t.props.item.state = k.UNCHECKED : t.props.item.state = k.UNDETERMINED, ie(t);
  }
}, Ue = (r) => r.state === k.CHECKED, zt = (r) => r.state === k.UNCHECKED;
class $e extends W.Component {
  constructor(t) {
    super(t), this.state = { loading: !1 };
  }
  render() {
    const { treeview: t, item: n, level: o } = this.props, { selectRow: a, marginItems: l } = t.props, u = l ? parseInt(l.toString()) : 30, y = 5, E = o === 0 ? 0 : t.props.showRoot ? o * u : (o - 1) * u, j = {
      paddingLeft: y + E + "px"
    };
    !t.props.showRoot && this.props.root && (j.display = "none");
    const b = a || !1;
    return /* @__PURE__ */ x.jsxs(
      "div",
      {
        style: j,
        className: wt(t, n, o, b),
        onMouseDown: Bt.bind(this, this.props.treeview, n, b),
        onDoubleClick: $t.bind(this, Le, this.props.treeview, b),
        children: [
          /* @__PURE__ */ x.jsx(
            "div",
            {
              className: At(t, this, n),
              onMouseDown: Le.bind(this, this.props.treeview, this, n)
            }
          ),
          /* @__PURE__ */ x.jsx(
            "div",
            {
              className: Lt(t, n),
              onMouseDown: Wt.bind(this, this.props.treeview, n)
            }
          ),
          /* @__PURE__ */ x.jsxs("div", { className: Ft(t, n, b), children: [
            /* @__PURE__ */ x.jsx("div", { className: Nt(t, n) }),
            /* @__PURE__ */ x.jsx("div", { className: "text", children: /* @__PURE__ */ x.jsx("span", { className: "text-inner", children: Ut(t, n) }) })
          ] })
        ]
      }
    );
  }
}
class m {
}
I(m, "addItem", (t, n, o, a) => {
  const l = a || t.state.selectedItem || t.state.rootItem;
  if (!l)
    throw new Error("You must specify a parent node!");
  const u = {
    id: Math.random(),
    // Generate a unique ID
    text: n,
    children: [],
    isLeaf: o
  };
  return l.children = l.children || [], l.children.push(u), l.expanded = !0, Fe(t, u), u;
}), I(m, "findFolder", (t, n) => {
  if (!t.state.rootItem || !t.state.rootItem.children)
    throw new Error("No root item found!");
  const o = oe(n), a = H(t.state.rootItem.children, o);
  if (!a || o.isLeaf === !0)
    throw new Error("Folder not found!");
  return a;
}), I(m, "findItem", (t, n) => {
  if (!t.state.rootItem || !t.state.rootItem.children)
    throw new Error("No root item found!");
  const o = oe(n);
  o.isLeaf = !0;
  const a = H(t.state.rootItem.children, o);
  if (a)
    return a;
  throw new Error("Item not found!");
}), I(m, "findNode", (t, n) => {
  if (!t.state.rootItem || !t.state.rootItem.children)
    throw new Error("No root item found!");
  const o = oe(n), a = H(t.state.rootItem.children, o);
  if (a)
    return a;
  throw new Error("Node not found!");
}), I(m, "expandAll", (t) => {
  t.state.rootItem && Be(t.state.rootItem);
}), I(m, "getItems", (t) => {
  var n;
  return ((n = t.state.rootItem) == null ? void 0 : n.children) || [];
}), I(m, "getParentNode", (t, n) => {
  const o = n || t.state.selectedItem;
  if (o)
    return q(t, o);
}), I(m, "getRootItem", (t) => {
  if (!t.state.rootItem)
    throw new Error("No root item found!");
  return t.state.rootItem;
}), I(m, "getSelectedItem", (t) => t.state.selectedItem), I(m, "removeItem", (t, n) => {
  const o = t.api.findNode(n), a = q(t, o);
  if (a && a.children) {
    const l = a.children.findIndex((u) => u.id === o.id);
    a.children.splice(l, 1);
  }
  t.state.selectedItem && t.state.selectedItem.id === n && t.setState({
    selectedItem: void 0
  }), t.forceUpdate();
}), I(m, "selectItem", (t, n) => {
  const o = t.api.findNode(n);
  if (o)
    Fe(t, o);
  else
    throw new Error("Item not found.");
});
function H(r, t) {
  const n = t ? Object.keys(t) : [];
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    let l = !0;
    for (let u = 0; u < n.length; u++) {
      const y = n[u];
      a[y] !== t[y] && (l = !1);
    }
    if (l)
      return a;
    if (a.children) {
      const u = H(a.children, t);
      if (u)
        return u;
    }
  }
  return null;
}
function Ht(r, t) {
  const n = [];
  let o = t;
  for (; o = q(r, o), o; ) {
    if (o.root && !r.props.showRoot)
      break;
    n.push(o);
  }
  return n;
}
function q(r, t, n) {
  const o = n || r.state.rootItem;
  if (!o)
    return;
  const a = o.children;
  if (a)
    for (let l = 0; l < a.length; l++) {
      const u = a[l];
      if (u.id === t.id)
        return o;
      if (u.children) {
        const y = q(r, t, u);
        if (y)
          return y;
      }
    }
}
function oe(r) {
  let t = {};
  if (typeof r == "number" || typeof r == "string")
    t.id = r;
  else if (typeof r == "object")
    t = r;
  else
    throw new Error("Parameter set in a wrong way.");
  return t;
}
function Fe(r, t) {
  Ht(r, t).forEach(function(o) {
    o.expanded || (o.expanded = !0);
  }), r.setState({
    selectedItem: t
  }), setTimeout(() => {
    if (r.container) {
      let o = null;
      if (r.props.selectRow)
        o = r.container.querySelector(".muaaz-react-treeview-item-container.selected");
      else {
        const a = r.container.querySelector(".icon-and-text.selected");
        a && (o = a.closest(".muaaz-react-treeview-item-container"));
      }
      o && o.scrollIntoViewIfNeeded();
    }
  }), r.props.onSelectItem && r.props.onSelectItem(t);
}
function Be(r) {
  r.children && r.children.forEach((t) => {
    t.children && (t.expanded = !0, Be(t));
  });
}
const We = {
  id: -1,
  text: "root",
  expanded: !0,
  root: !0
}, qt = (r) => {
  r.props.url || r.props.json || r.props.lazyLoad ? r.props.autoLoad !== !1 && r.api.load() : r.props.items && r.api.loadData(r, r.props.items);
}, Ye = (r, t) => {
  const n = t || "classic";
  r.setState({ theme: n });
}, Jt = (r, t) => (r.setState({
  loading: !0
}), new Promise(function(n, o) {
  if (r.props.url || r.props.json) {
    let a = r.props.url || r.props.json;
    if (r.props.lazyLoad && a) {
      const l = t || r.state.rootItem || We;
      if (l) {
        const u = { ...l };
        delete u.children, a += "?lazyLoad=true&item=" + JSON.stringify(u);
      }
    }
    a && kt.get(a).then((l) => {
      r.setState({
        loading: !1
      }), r.api.loadData(r, l.data, t), n(l.data);
    }).catch((l) => {
      console.error(`Error loading data: ${l.message}`);
    });
  } else if (r.props.lazyLoad)
    r.setState({
      loading: !1
    }), o("TODO: under construction");
  else {
    r.setState({
      loading: !1
    });
    const a = "To use load function you must define lazyLoad:true or a valid url.";
    console.error(a), o(a);
  }
})), Gt = (r, t, n) => {
  const o = t || [];
  if (r.props.onBeforeLoad && r.props.onBeforeLoad(o, n), n)
    if (o instanceof Array)
      n.children = o;
    else
      throw new Error("When item param is set the data must be an array.");
  else {
    const a = Xt(o);
    a && r.setState({
      rootItem: a
    });
  }
  r.props.onAfterLoad && r.props.onAfterLoad(o, n);
};
function Xt(r) {
  let t = Object.assign({}, We);
  if (r) {
    if (r instanceof Array)
      t.children = r;
    else if (r instanceof Object)
      t = r;
    else
      throw new Error('Parameter "items" adjusted in a wrong way.');
    return t;
  }
  return null;
}
const Zt = (r) => ({
  //
  //
  //
  addItem: (t, n, o) => m.addItem(r, t, n, o),
  //
  // folderToFind can be passed as a "id" or as a "object" ex:
  //
  //  treeviewEl.api.findFolder(456) //456 is a id value or
  //  treeviewEl.api.findFolder({name: 'Brazil'}) //it will searches for the first folder that match the passed data and leaf is not true
  //
  findFolder: (t) => m.findFolder(r, t),
  //
  // Expand all the children from the rootItem recursively
  expandAll: () => {
    m.expandAll(r);
  },
  //
  // folderToFind can be passed as a "id" or as a "object" ex:
  //
  //  treeviewEl.api.findFolder(456) //456 is a id value or
  //  treeviewEl.api.findFolder({name: 'Brazil'}) //it will searches for the first folder that match the passed data and leaf is not true
  //
  findNode: (t) => m.findNode(r, t),
  //
  // itemToFind can be passed as a "id" or as a "object" ex:
  //
  //  treeviewEl.api.findItem(357) //357 is a id value or
  //  treeviewEl.api.findItem({name: 'Dog'}) //it will searches for the first item that match the passed data and leaf is true
  //
  findItem: (t) => m.findItem(r, t),
  //
  //
  //
  getItems: () => m.getItems(r),
  //
  //
  //
  getParentNode: (t) => m.getParentNode(r, t),
  //
  //
  //
  getRootItem: () => m.getRootItem(r),
  //
  //
  //
  getSelectedItem: () => m.getSelectedItem(r),
  //
  //
  //
  load: (t) => Jt(r, t),
  //
  //
  //
  loadData: Gt.bind(r),
  //
  //
  //
  removeItem: (t) => {
    m.removeItem(r, t);
  },
  //
  // itemToFind can be passed as a "id" or as a "object" ex:
  //
  //  treeviewEl.api.selectItem(357) //357 is a id value or
  //  treeviewEl.api.selectItem({name: 'Dog'}) //it will searches for the first item that match the passed data and leaf is true
  //
  selectItem: (t) => {
    m.selectItem(r, t);
  },
  //
  //
  //
  setTheme: (t) => {
    Ye(r, t);
  }
});
class rr extends W.Component {
  constructor(n) {
    super(n);
    I(this, "api");
    I(this, "container");
    this.state = {
      loading: !1,
      theme: n.theme || "classic",
      expandAll: n.expandAll
    }, this.expandAllFinished = this.expandAllFinished.bind(this);
  }
  componentDidUpdate(n, o) {
    const { items: a } = this.props, l = this.api.getRootItem();
    n.items !== a && (l.children = a), this.state.expandAll && this.expandAllFinished();
  }
  componentDidMount() {
    this.api = Zt(this), Ye(this, this.props.theme || "classic"), qt(this);
  }
  expandAllFinished() {
    this.setState({ expandAll: !1 });
  }
  render() {
    const n = this.api ? this.api.getRootItem() : void 0, o = /* @__PURE__ */ x.jsx($e, { root: !0, treeview: this, level: 0, item: n });
    let a = n && n.children;
    a && a.length === 0 && this.props.items && this.props.items.length > 0 && (a = this.props.items);
    let l = "muaaz-react-treeview-container unselectable " + this.state.theme;
    this.props.className && (l += " " + this.props.className);
    const u = a !== void 0 && a.length > 0;
    this.state.loading && (!this.props.lazyLoad || !u) && (l += " loading");
    const y = u && (!this.state.loading || this.props.lazyLoad), E = this.props.style || void 0;
    return y ? /* @__PURE__ */ x.jsxs("div", { ref: (j) => this.container = j, className: l, style: E, children: [
      o,
      Me(this, o, 1, a, this.state.expandAll)
    ] }) : /* @__PURE__ */ x.jsx("div", { className: l });
  }
}
function Me(r, t, n, o, a = !1) {
  return a && o && (o = o.map((l) => (l.expanded = !0, l))), /* @__PURE__ */ x.jsx("div", { children: t.props.item && t.props.item.expanded && o && o.length ? o.map(function(l) {
    const u = /* @__PURE__ */ x.jsx(
      $e,
      {
        expandAll: a,
        treeview: r,
        parent: t,
        level: n,
        item: l
      }
    );
    return /* @__PURE__ */ x.jsxs("div", { children: [
      u,
      Me(r, u, n + 1, l.children || void 0)
    ] }, String(l.id));
  }) : void 0 });
}
export {
  rr as default
};
//# sourceMappingURL=index.mjs.map
