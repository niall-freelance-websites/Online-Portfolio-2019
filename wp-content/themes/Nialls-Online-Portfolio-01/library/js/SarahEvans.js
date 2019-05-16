!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function i(e) {
        var t = "length"in e && e.length
          , i = ee.type(e);
        return "function" !== i && !ee.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }
    function n(e, t, i) {
        if (ee.isFunction(t))
            return ee.grep(e, function(e, n) {
                return !!t.call(e, n, e) !== i
            });
        if (t.nodeType)
            return ee.grep(e, function(e) {
                return e === t !== i
            });
        if ("string" == typeof t) {
            if (le.test(t))
                return ee.filter(t, e, i);
            t = ee.filter(t, e)
        }
        return ee.grep(e, function(e) {
            return Y.call(t, e) >= 0 !== i
        })
    }
    function o(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function r(e) {
        var t = he[e] = {};
        return ee.each(e.match(fe) || [], function(e, i) {
            t[i] = !0
        }),
        t
    }
    function s() {
        J.removeEventListener("DOMContentLoaded", s, !1),
        e.removeEventListener("load", s, !1),
        ee.ready()
    }
    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }),
        this.expando = ee.expando + a.uid++
    }
    function l(e, t, i) {
        var n;
        if (void 0 === i && 1 === e.nodeType)
            if (n = "data-" + t.replace(be, "-$1").toLowerCase(),
            "string" == typeof (i = e.getAttribute(n))) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : we.test(i) ? ee.parseJSON(i) : i)
                } catch (e) {}
                me.set(e, t, i)
            } else
                i = void 0;
        return i
    }
    function c() {
        return !0
    }
    function d() {
        return !1
    }
    function u() {
        try {
            return J.activeElement
        } catch (e) {}
    }
    function p(e, t) {
        return ee.nodeName(e, "table") && ee.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function f(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function h(e) {
        var t = qe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function g(e, t) {
        for (var i = 0, n = e.length; i < n; i++)
            ye.set(e[i], "globalEval", !t || ye.get(t[i], "globalEval"))
    }
    function v(e, t) {
        var i, n, o, r, s, a, l, c;
        if (1 === t.nodeType) {
            if (ye.hasData(e) && (r = ye.access(e),
            s = ye.set(t, r),
            c = r.events)) {
                delete s.handle,
                s.events = {};
                for (o in c)
                    for (i = 0,
                    n = c[o].length; i < n; i++)
                        ee.event.add(t, o, c[o][i])
            }
            me.hasData(e) && (a = me.access(e),
            l = ee.extend({}, a),
            me.set(t, l))
        }
    }
    function y(e, t) {
        var i = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && ee.nodeName(e, t) ? ee.merge([e], i) : i
    }
    function m(e, t) {
        var i = t.nodeName.toLowerCase();
        "input" === i && Se.test(e.type) ? t.checked = e.checked : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue)
    }
    function w(t, i) {
        var n, o = ee(i.createElement(t)).appendTo(i.body), r = e.getDefaultComputedStyle && (n = e.getDefaultComputedStyle(o[0])) ? n.display : ee.css(o[0], "display");
        return o.detach(),
        r
    }
    function b(e) {
        var t = J
          , i = Re[e];
        return i || (i = w(e, t),
        "none" !== i && i || (We = (We || ee("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
        t = We[0].contentDocument,
        t.write(),
        t.close(),
        i = w(e, t),
        We.detach()),
        Re[e] = i),
        i
    }
    function x(e, t, i) {
        var n, o, r, s, a = e.style;
        return i = i || Be(e),
        i && (s = i.getPropertyValue(t) || i[t]),
        i && ("" !== s || ee.contains(e.ownerDocument, e) || (s = ee.style(e, t)),
        ze.test(s) && Fe.test(t) && (n = a.width,
        o = a.minWidth,
        r = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = s,
        s = i.width,
        a.width = n,
        a.minWidth = o,
        a.maxWidth = r)),
        void 0 !== s ? s + "" : s
    }
    function k(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function T(e, t) {
        if (t in e)
            return t;
        for (var i = t[0].toUpperCase() + t.slice(1), n = t, o = Ge.length; o--; )
            if ((t = Ge[o] + i)in e)
                return t;
        return n
    }
    function S(e, t, i) {
        var n = Ue.exec(t);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
    }
    function C(e, t, i, n, o) {
        for (var r = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; r < 4; r += 2)
            "margin" === i && (s += ee.css(e, i + ke[r], !0, o)),
            n ? ("content" === i && (s -= ee.css(e, "padding" + ke[r], !0, o)),
            "margin" !== i && (s -= ee.css(e, "border" + ke[r] + "Width", !0, o))) : (s += ee.css(e, "padding" + ke[r], !0, o),
            "padding" !== i && (s += ee.css(e, "border" + ke[r] + "Width", !0, o)));
        return s
    }
    function E(e, t, i) {
        var n = !0
          , o = "width" === t ? e.offsetWidth : e.offsetHeight
          , r = Be(e)
          , s = "border-box" === ee.css(e, "boxSizing", !1, r);
        if (o <= 0 || null == o) {
            if (o = x(e, t, r),
            (o < 0 || null == o) && (o = e.style[t]),
            ze.test(o))
                return o;
            n = s && (K.boxSizingReliable() || o === e.style[t]),
            o = parseFloat(o) || 0
        }
        return o + C(e, t, i || (s ? "border" : "content"), n, r) + "px"
    }
    function A(e, t) {
        for (var i, n, o, r = [], s = 0, a = e.length; s < a; s++)
            n = e[s],
            n.style && (r[s] = ye.get(n, "olddisplay"),
            i = n.style.display,
            t ? (r[s] || "none" !== i || (n.style.display = ""),
            "" === n.style.display && Te(n) && (r[s] = ye.access(n, "olddisplay", b(n.nodeName)))) : (o = Te(n),
            "none" === i && o || ye.set(n, "olddisplay", o ? i : ee.css(n, "display"))));
        for (s = 0; s < a; s++)
            n = e[s],
            n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? r[s] || "" : "none"));
        return e
    }
    function N(e, t, i, n, o) {
        return new N.prototype.init(e,t,i,n,o)
    }
    function j() {
        return setTimeout(function() {
            Qe = void 0
        }),
        Qe = ee.now()
    }
    function D(e, t) {
        var i, n = 0, o = {
            height: e
        };
        for (t = t ? 1 : 0; n < 4; n += 2 - t)
            i = ke[n],
            o["margin" + i] = o["padding" + i] = e;
        return t && (o.opacity = o.width = e),
        o
    }
    function O(e, t, i) {
        for (var n, o = (it[t] || []).concat(it["*"]), r = 0, s = o.length; r < s; r++)
            if (n = o[r].call(i, t, e))
                return n
    }
    function L(e, t, i) {
        var n, o, r, s, a, l, c, d, u = this, p = {}, f = e.style, h = e.nodeType && Te(e), g = ye.get(e, "fxshow");
        i.queue || (a = ee._queueHooks(e, "fx"),
        null == a.unqueued && (a.unqueued = 0,
        l = a.empty.fire,
        a.empty.fire = function() {
            a.unqueued || l()
        }
        ),
        a.unqueued++,
        u.always(function() {
            u.always(function() {
                a.unqueued--,
                ee.queue(e, "fx").length || a.empty.fire()
            })
        })),
        1 === e.nodeType && ("height"in t || "width"in t) && (i.overflow = [f.overflow, f.overflowX, f.overflowY],
        c = ee.css(e, "display"),
        "inline" === (d = "none" === c ? ye.get(e, "olddisplay") || b(e.nodeName) : c) && "none" === ee.css(e, "float") && (f.display = "inline-block")),
        i.overflow && (f.overflow = "hidden",
        u.always(function() {
            f.overflow = i.overflow[0],
            f.overflowX = i.overflow[1],
            f.overflowY = i.overflow[2]
        }));
        for (n in t)
            if (o = t[n],
            Je.exec(o)) {
                if (delete t[n],
                r = r || "toggle" === o,
                o === (h ? "hide" : "show")) {
                    if ("show" !== o || !g || void 0 === g[n])
                        continue;
                    h = !0
                }
                p[n] = g && g[n] || ee.style(e, n)
            } else
                c = void 0;
        if (ee.isEmptyObject(p))
            "inline" === ("none" === c ? b(e.nodeName) : c) && (f.display = c);
        else {
            g ? "hidden"in g && (h = g.hidden) : g = ye.access(e, "fxshow", {}),
            r && (g.hidden = !h),
            h ? ee(e).show() : u.done(function() {
                ee(e).hide()
            }),
            u.done(function() {
                var t;
                ye.remove(e, "fxshow");
                for (t in p)
                    ee.style(e, t, p[t])
            });
            for (n in p)
                s = O(h ? g[n] : 0, n, u),
                n in g || (g[n] = s.start,
                h && (s.end = s.start,
                s.start = "width" === n || "height" === n ? 1 : 0))
        }
    }
    function H(e, t) {
        var i, n, o, r, s;
        for (i in e)
            if (n = ee.camelCase(i),
            o = t[n],
            r = e[i],
            ee.isArray(r) && (o = r[1],
            r = e[i] = r[0]),
            i !== n && (e[n] = r,
            delete e[i]),
            (s = ee.cssHooks[n]) && "expand"in s) {
                r = s.expand(r),
                delete e[n];
                for (i in r)
                    i in e || (e[i] = r[i],
                    t[i] = o)
            } else
                t[n] = o
    }
    function P(e, t, i) {
        var n, o, r = 0, s = tt.length, a = ee.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (o)
                return !1;
            for (var t = Qe || j(), i = Math.max(0, c.startTime + c.duration - t), n = i / c.duration || 0, r = 1 - n, s = 0, l = c.tweens.length; s < l; s++)
                c.tweens[s].run(r);
            return a.notifyWith(e, [c, r, i]),
            r < 1 && l ? i : (a.resolveWith(e, [c]),
            !1)
        }, c = a.promise({
            elem: e,
            props: ee.extend({}, t),
            opts: ee.extend(!0, {
                specialEasing: {}
            }, i),
            originalProperties: t,
            originalOptions: i,
            startTime: Qe || j(),
            duration: i.duration,
            tweens: [],
            createTween: function(t, i) {
                var n = ee.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(n),
                n
            },
            stop: function(t) {
                var i = 0
                  , n = t ? c.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; i < n; i++)
                    c.tweens[i].run(1);
                return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]),
                this
            }
        }), d = c.props;
        for (H(d, c.opts.specialEasing); r < s; r++)
            if (n = tt[r].call(c, e, d, c.opts))
                return n;
        return ee.map(d, O, c),
        ee.isFunction(c.opts.start) && c.opts.start.call(e, c),
        ee.fx.timer(ee.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    function q(e) {
        return function(t, i) {
            "string" != typeof t && (i = t,
            t = "*");
            var n, o = 0, r = t.toLowerCase().match(fe) || [];
            if (ee.isFunction(i))
                for (; n = r[o++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }
    function M(e, t, i, n) {
        function o(a) {
            var l;
            return r[a] = !0,
            ee.each(e[a] || [], function(e, a) {
                var c = a(t, i, n);
                return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c),
                o(c),
                !1)
            }),
            l
        }
        var r = {}
          , s = e === wt;
        return o(t.dataTypes[0]) || !r["*"] && o("*")
    }
    function I(e, t) {
        var i, n, o = ee.ajaxSettings.flatOptions || {};
        for (i in t)
            void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
        return n && ee.extend(!0, e, n),
        e
    }
    function W(e, t, i) {
        for (var n, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
            l.shift(),
            void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
        if (n)
            for (o in a)
                if (a[o] && a[o].test(n)) {
                    l.unshift(o);
                    break
                }
        if (l[0]in i)
            r = l[0];
        else {
            for (o in i) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                s || (s = o)
            }
            r = r || s
        }
        if (r)
            return r !== l[0] && l.unshift(r),
            i[r]
    }
    function R(e, t, i, n) {
        var o, r, s, a, l, c = {}, d = e.dataTypes.slice();
        if (d[1])
            for (s in e.converters)
                c[s.toLowerCase()] = e.converters[s];
        for (r = d.shift(); r; )
            if (e.responseFields[r] && (i[e.responseFields[r]] = t),
            !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            l = r,
            r = d.shift())
                if ("*" === r)
                    r = l;
                else if ("*" !== l && l !== r) {
                    if (!(s = c[l + " " + r] || c["* " + r]))
                        for (o in c)
                            if (a = o.split(" "),
                            a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0],
                                d.unshift(a[1]));
                                break
                            }
                    if (!0 !== s)
                        if (s && e.throws)
                            t = s(t);
                        else
                            try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + r
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function F(e, t, i, n) {
        var o;
        if (ee.isArray(t))
            ee.each(t, function(t, o) {
                i || St.test(e) ? n(e, o) : F(e + "[" + ("object" == typeof o ? t : "") + "]", o, i, n)
            });
        else if (i || "object" !== ee.type(t))
            n(e, t);
        else
            for (o in t)
                F(e + "[" + o + "]", t[o], i, n)
    }
    function z(e) {
        return ee.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var B = []
      , X = B.slice
      , U = B.concat
      , _ = B.push
      , Y = B.indexOf
      , V = {}
      , G = V.toString
      , Q = V.hasOwnProperty
      , K = {}
      , J = e.document
      , Z = "2.1.4"
      , ee = function(e, t) {
        return new ee.fn.init(e,t)
    }
      , te = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , ie = /^-ms-/
      , ne = /-([\da-z])/gi
      , oe = function(e, t) {
        return t.toUpperCase()
    };
    ee.fn = ee.prototype = {
        jquery: "2.1.4",
        constructor: ee,
        selector: "",
        length: 0,
        toArray: function() {
            return X.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : X.call(this)
        },
        pushStack: function(e) {
            var t = ee.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return ee.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(ee.map(this, function(t, i) {
                return e.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(X.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , i = +e + (e < 0 ? t : 0);
            return this.pushStack(i >= 0 && i < t ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: _,
        sort: B.sort,
        splice: B.splice
    },
    ee.extend = ee.fn.extend = function() {
        var e, t, i, n, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s,
        s = arguments[a] || {},
        a++),
        "object" == typeof s || ee.isFunction(s) || (s = {}),
        a === l && (s = this,
        a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    i = s[t],
                    n = e[t],
                    s !== n && (c && n && (ee.isPlainObject(n) || (o = ee.isArray(n))) ? (o ? (o = !1,
                    r = i && ee.isArray(i) ? i : []) : r = i && ee.isPlainObject(i) ? i : {},
                    s[t] = ee.extend(c, r, n)) : void 0 !== n && (s[t] = n));
        return s
    }
    ,
    ee.extend({
        expando: "jQuery" + ("2.1.4" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === ee.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !ee.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(e) {
            return "object" === ee.type(e) && !e.nodeType && !ee.isWindow(e) && !(e.constructor && !Q.call(e.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[G.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, i = eval;
            (e = ee.trim(e)) && (1 === e.indexOf("use strict") ? (t = J.createElement("script"),
            t.text = e,
            J.head.appendChild(t).parentNode.removeChild(t)) : i(e))
        },
        camelCase: function(e) {
            return e.replace(ie, "ms-").replace(ne, oe)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var o, r = 0, s = e.length, a = i(e);
            if (n) {
                if (a)
                    for (; r < s && !1 !== (o = t.apply(e[r], n)); r++)
                        ;
                else
                    for (r in e)
                        if (!1 === (o = t.apply(e[r], n)))
                            break
            } else if (a)
                for (; r < s && !1 !== (o = t.call(e[r], r, e[r])); r++)
                    ;
            else
                for (r in e)
                    if (!1 === (o = t.call(e[r], r, e[r])))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(te, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? ee.merge(n, "string" == typeof e ? [e] : e) : _.call(n, e)),
            n
        },
        inArray: function(e, t, i) {
            return null == t ? -1 : Y.call(t, e, i)
        },
        merge: function(e, t) {
            for (var i = +t.length, n = 0, o = e.length; n < i; n++)
                e[o++] = t[n];
            return e.length = o,
            e
        },
        grep: function(e, t, i) {
            for (var n, o = [], r = 0, s = e.length, a = !i; r < s; r++)
                (n = !t(e[r], r)) !== a && o.push(e[r]);
            return o
        },
        map: function(e, t, n) {
            var o, r = 0, s = e.length, a = i(e), l = [];
            if (a)
                for (; r < s; r++)
                    null != (o = t(e[r], r, n)) && l.push(o);
            else
                for (r in e)
                    null != (o = t(e[r], r, n)) && l.push(o);
            return U.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var i, n, o;
            if ("string" == typeof t && (i = e[t],
            t = e,
            e = i),
            ee.isFunction(e))
                return n = X.call(arguments, 2),
                o = function() {
                    return e.apply(t || this, n.concat(X.call(arguments)))
                }
                ,
                o.guid = e.guid = e.guid || ee.guid++,
                o
        },
        now: Date.now,
        support: K
    }),
    ee.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        V["[object " + t + "]"] = t.toLowerCase()
    });
    var re = function(e) {
        function t(e, t, i, n) {
            var o, r, s, a, l, c, u, f, h, g;
            if ((t ? t.ownerDocument || t : F) !== L && O(t),
            t = t || L,
            i = i || [],
            a = t.nodeType,
            "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a)
                return i;
            if (!n && P) {
                if (11 !== a && (o = we.exec(e)))
                    if (s = o[1]) {
                        if (9 === a) {
                            if (!(r = t.getElementById(s)) || !r.parentNode)
                                return i;
                            if (r.id === s)
                                return i.push(r),
                                i
                        } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(s)) && W(t, r) && r.id === s)
                            return i.push(r),
                            i
                    } else {
                        if (o[2])
                            return Z.apply(i, t.getElementsByTagName(e)),
                            i;
                        if ((s = o[3]) && x.getElementsByClassName)
                            return Z.apply(i, t.getElementsByClassName(s)),
                            i
                    }
                if (x.qsa && (!q || !q.test(e))) {
                    if (f = u = R,
                    h = t,
                    g = 1 !== a && e,
                    1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (c = C(e),
                        (u = t.getAttribute("id")) ? f = u.replace(xe, "\\$&") : t.setAttribute("id", f),
                        f = "[id='" + f + "'] ",
                        l = c.length; l--; )
                            c[l] = f + p(c[l]);
                        h = be.test(e) && d(t.parentNode) || t,
                        g = c.join(",")
                    }
                    if (g)
                        try {
                            return Z.apply(i, h.querySelectorAll(g)),
                            i
                        } catch (e) {} finally {
                            u || t.removeAttribute("id")
                        }
                }
            }
            return A(e.replace(ce, "$1"), t, i, n)
        }
        function i() {
            function e(i, n) {
                return t.push(i + " ") > k.cacheLength && delete e[t.shift()],
                e[i + " "] = n
            }
            var t = [];
            return e
        }
        function n(e) {
            return e[R] = !0,
            e
        }
        function o(e) {
            var t = L.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function r(e, t) {
            for (var i = e.split("|"), n = e.length; n--; )
                k.attrHandle[i[n]] = t
        }
        function s(e, t) {
            var i = t && e
              , n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (n)
                return n;
            if (i)
                for (; i = i.nextSibling; )
                    if (i === t)
                        return -1;
            return e ? 1 : -1
        }
        function a(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function l(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }
        function c(e) {
            return n(function(t) {
                return t = +t,
                n(function(i, n) {
                    for (var o, r = e([], i.length, t), s = r.length; s--; )
                        i[o = r[s]] && (i[o] = !(n[o] = i[o]))
                })
            })
        }
        function d(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        function u() {}
        function p(e) {
            for (var t = 0, i = e.length, n = ""; t < i; t++)
                n += e[t].value;
            return n
        }
        function f(e, t, i) {
            var n = t.dir
              , o = i && "parentNode" === n
              , r = B++;
            return t.first ? function(t, i, r) {
                for (; t = t[n]; )
                    if (1 === t.nodeType || o)
                        return e(t, i, r)
            }
            : function(t, i, s) {
                var a, l, c = [z, r];
                if (s) {
                    for (; t = t[n]; )
                        if ((1 === t.nodeType || o) && e(t, i, s))
                            return !0
                } else
                    for (; t = t[n]; )
                        if (1 === t.nodeType || o) {
                            if (l = t[R] || (t[R] = {}),
                            (a = l[n]) && a[0] === z && a[1] === r)
                                return c[2] = a[2];
                            if (l[n] = c,
                            c[2] = e(t, i, s))
                                return !0
                        }
            }
        }
        function h(e) {
            return e.length > 1 ? function(t, i, n) {
                for (var o = e.length; o--; )
                    if (!e[o](t, i, n))
                        return !1;
                return !0
            }
            : e[0]
        }
        function g(e, i, n) {
            for (var o = 0, r = i.length; o < r; o++)
                t(e, i[o], n);
            return n
        }
        function v(e, t, i, n, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
                (r = e[a]) && (i && !i(r, n, o) || (s.push(r),
                c && t.push(a)));
            return s
        }
        function y(e, t, i, o, r, s) {
            return o && !o[R] && (o = y(o)),
            r && !r[R] && (r = y(r, s)),
            n(function(n, s, a, l) {
                var c, d, u, p = [], f = [], h = s.length, y = n || g(t || "*", a.nodeType ? [a] : a, []), m = !e || !n && t ? y : v(y, p, e, a, l), w = i ? r || (n ? e : h || o) ? [] : s : m;
                if (i && i(m, w, a, l),
                o)
                    for (c = v(w, f),
                    o(c, [], a, l),
                    d = c.length; d--; )
                        (u = c[d]) && (w[f[d]] = !(m[f[d]] = u));
                if (n) {
                    if (r || e) {
                        if (r) {
                            for (c = [],
                            d = w.length; d--; )
                                (u = w[d]) && c.push(m[d] = u);
                            r(null, w = [], c, l)
                        }
                        for (d = w.length; d--; )
                            (u = w[d]) && (c = r ? te(n, u) : p[d]) > -1 && (n[c] = !(s[c] = u))
                    }
                } else
                    w = v(w === s ? w.splice(h, w.length) : w),
                    r ? r(null, s, w, l) : Z.apply(s, w)
            })
        }
        function m(e) {
            for (var t, i, n, o = e.length, r = k.relative[e[0].type], s = r || k.relative[" "], a = r ? 1 : 0, l = f(function(e) {
                return e === t
            }, s, !0), c = f(function(e) {
                return te(t, e) > -1
            }, s, !0), d = [function(e, i, n) {
                var o = !r && (n || i !== N) || ((t = i).nodeType ? l(e, i, n) : c(e, i, n));
                return t = null,
                o
            }
            ]; a < o; a++)
                if (i = k.relative[e[a].type])
                    d = [f(h(d), i)];
                else {
                    if (i = k.filter[e[a].type].apply(null, e[a].matches),
                    i[R]) {
                        for (n = ++a; n < o && !k.relative[e[n].type]; n++)
                            ;
                        return y(a > 1 && h(d), a > 1 && p(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ce, "$1"), i, a < n && m(e.slice(a, n)), n < o && m(e = e.slice(n)), n < o && p(e))
                    }
                    d.push(i)
                }
            return h(d)
        }
        function w(e, i) {
            var o = i.length > 0
              , r = e.length > 0
              , s = function(n, s, a, l, c) {
                var d, u, p, f = 0, h = "0", g = n && [], y = [], m = N, w = n || r && k.find.TAG("*", c), b = z += null == m ? 1 : Math.random() || .1, x = w.length;
                for (c && (N = s !== L && s); h !== x && null != (d = w[h]); h++) {
                    if (r && d) {
                        for (u = 0; p = e[u++]; )
                            if (p(d, s, a)) {
                                l.push(d);
                                break
                            }
                        c && (z = b)
                    }
                    o && ((d = !p && d) && f--,
                    n && g.push(d))
                }
                if (f += h,
                o && h !== f) {
                    for (u = 0; p = i[u++]; )
                        p(g, y, s, a);
                    if (n) {
                        if (f > 0)
                            for (; h--; )
                                g[h] || y[h] || (y[h] = K.call(l));
                        y = v(y)
                    }
                    Z.apply(l, y),
                    c && !n && y.length > 0 && f + i.length > 1 && t.uniqueSort(l)
                }
                return c && (z = b,
                N = m),
                g
            };
            return o ? n(s) : s
        }
        var b, x, k, T, S, C, E, A, N, j, D, O, L, H, P, q, M, I, W, R = "sizzle" + 1 * new Date, F = e.document, z = 0, B = 0, X = i(), U = i(), _ = i(), Y = function(e, t) {
            return e === t && (D = !0),
            0
        }, V = 1 << 31, G = {}.hasOwnProperty, Q = [], K = Q.pop, J = Q.push, Z = Q.push, ee = Q.slice, te = function(e, t) {
            for (var i = 0, n = e.length; i < n; i++)
                if (e[i] === t)
                    return i;
            return -1
        }, ie = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", oe = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", re = oe.replace("w", "w#"), se = "\\[" + ne + "*(" + oe + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", ae = ":(" + oe + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + se + ")*)|.*)\\)|)", le = new RegExp(ne + "+","g"), ce = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$","g"), de = new RegExp("^" + ne + "*," + ne + "*"), ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), pe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]","g"), fe = new RegExp(ae), he = new RegExp("^" + re + "$"), ge = {
            ID: new RegExp("^#(" + oe + ")"),
            CLASS: new RegExp("^\\.(" + oe + ")"),
            TAG: new RegExp("^(" + oe.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + se),
            PSEUDO: new RegExp("^" + ae),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)","i"),
            bool: new RegExp("^(?:" + ie + ")$","i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)","i")
        }, ve = /^(?:input|select|textarea|button)$/i, ye = /^h\d$/i, me = /^[^{]+\{\s*\[native \w/, we = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, be = /[+~]/, xe = /'|\\/g, ke = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)","ig"), Te = function(e, t, i) {
            var n = "0x" + t - 65536;
            return n !== n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        }, Se = function() {
            O()
        };
        try {
            Z.apply(Q = ee.call(F.childNodes), F.childNodes),
            Q[F.childNodes.length].nodeType
        } catch (e) {
            Z = {
                apply: Q.length ? function(e, t) {
                    J.apply(e, ee.call(t))
                }
                : function(e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++]; )
                        ;
                    e.length = i - 1
                }
            }
        }
        x = t.support = {},
        S = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        O = t.setDocument = function(e) {
            var t, i, n = e ? e.ownerDocument || e : F;
            return n !== L && 9 === n.nodeType && n.documentElement ? (L = n,
            H = n.documentElement,
            i = n.defaultView,
            i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", Se, !1) : i.attachEvent && i.attachEvent("onunload", Se)),
            P = !S(n),
            x.attributes = o(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            x.getElementsByTagName = o(function(e) {
                return e.appendChild(n.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            x.getElementsByClassName = me.test(n.getElementsByClassName),
            x.getById = o(function(e) {
                return H.appendChild(e).id = R,
                !n.getElementsByName || !n.getElementsByName(R).length
            }),
            x.getById ? (k.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && P) {
                    var i = t.getElementById(e);
                    return i && i.parentNode ? [i] : []
                }
            }
            ,
            k.filter.ID = function(e) {
                var t = e.replace(ke, Te);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete k.find.ID,
            k.filter.ID = function(e) {
                var t = e.replace(ke, Te);
                return function(e) {
                    var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return i && i.value === t
                }
            }
            ),
            k.find.TAG = x.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var i, n = [], o = 0, r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; i = r[o++]; )
                        1 === i.nodeType && n.push(i);
                    return n
                }
                return r
            }
            ,
            k.find.CLASS = x.getElementsByClassName && function(e, t) {
                if (P)
                    return t.getElementsByClassName(e)
            }
            ,
            M = [],
            q = [],
            (x.qsa = me.test(n.querySelectorAll)) && (o(function(e) {
                H.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\f]' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + ne + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || q.push("\\[" + ne + "*(?:value|" + ie + ")"),
                e.querySelectorAll("[id~=" + R + "-]").length || q.push("~="),
                e.querySelectorAll(":checked").length || q.push(":checked"),
                e.querySelectorAll("a#" + R + "+*").length || q.push(".#.+[+~]")
            }),
            o(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && q.push("name" + ne + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                q.push(",.*:")
            })),
            (x.matchesSelector = me.test(I = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && o(function(e) {
                x.disconnectedMatch = I.call(e, "div"),
                I.call(e, "[s!='']:x"),
                M.push("!=", ae)
            }),
            q = q.length && new RegExp(q.join("|")),
            M = M.length && new RegExp(M.join("|")),
            t = me.test(H.compareDocumentPosition),
            W = t || me.test(H.contains) ? function(e, t) {
                var i = 9 === e.nodeType ? e.documentElement : e
                  , n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            Y = t ? function(e, t) {
                if (e === t)
                    return D = !0,
                    0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                1 & i || !x.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === F && W(F, e) ? -1 : t === n || t.ownerDocument === F && W(F, t) ? 1 : j ? te(j, e) - te(j, t) : 0 : 4 & i ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return D = !0,
                    0;
                var i, o = 0, r = e.parentNode, a = t.parentNode, l = [e], c = [t];
                if (!r || !a)
                    return e === n ? -1 : t === n ? 1 : r ? -1 : a ? 1 : j ? te(j, e) - te(j, t) : 0;
                if (r === a)
                    return s(e, t);
                for (i = e; i = i.parentNode; )
                    l.unshift(i);
                for (i = t; i = i.parentNode; )
                    c.unshift(i);
                for (; l[o] === c[o]; )
                    o++;
                return o ? s(l[o], c[o]) : l[o] === F ? -1 : c[o] === F ? 1 : 0
            }
            ,
            n) : L
        }
        ,
        t.matches = function(e, i) {
            return t(e, null, null, i)
        }
        ,
        t.matchesSelector = function(e, i) {
            if ((e.ownerDocument || e) !== L && O(e),
            i = i.replace(pe, "='$1']"),
            x.matchesSelector && P && (!M || !M.test(i)) && (!q || !q.test(i)))
                try {
                    var n = I.call(e, i);
                    if (n || x.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {}
            return t(i, L, null, [e]).length > 0
        }
        ,
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== L && O(e),
            W(e, t)
        }
        ,
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== L && O(e);
            var i = k.attrHandle[t.toLowerCase()]
              , n = i && G.call(k.attrHandle, t.toLowerCase()) ? i(e, t, !P) : void 0;
            return void 0 !== n ? n : x.attributes || !P ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }
        ,
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        t.uniqueSort = function(e) {
            var t, i = [], n = 0, o = 0;
            if (D = !x.detectDuplicates,
            j = !x.sortStable && e.slice(0),
            e.sort(Y),
            D) {
                for (; t = e[o++]; )
                    t === e[o] && (n = i.push(o));
                for (; n--; )
                    e.splice(i[n], 1)
            }
            return j = null,
            e
        }
        ,
        T = t.getText = function(e) {
            var t, i = "", n = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        i += T(e)
                } else if (3 === o || 4 === o)
                    return e.nodeValue
            } else
                for (; t = e[n++]; )
                    i += T(t);
            return i
        }
        ,
        k = t.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: ge,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ke, Te),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(ke, Te),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, i = !e[6] && e[2];
                    return ge.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && fe.test(i) && (t = C(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t),
                    e[2] = i.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ke, Te).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = X[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && X(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, i, n) {
                    return function(o) {
                        var r = t.attr(o, e);
                        return null == r ? "!=" === i : !i || (r += "",
                        "=" === i ? r === n : "!=" === i ? r !== n : "^=" === i ? n && 0 === r.indexOf(n) : "*=" === i ? n && r.indexOf(n) > -1 : "$=" === i ? n && r.slice(-n.length) === n : "~=" === i ? (" " + r.replace(le, " ") + " ").indexOf(n) > -1 : "|=" === i && (r === n || r.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, i, n, o) {
                    var r = "nth" !== e.slice(0, 3)
                      , s = "last" !== e.slice(-4)
                      , a = "of-type" === t;
                    return 1 === n && 0 === o ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, i, l) {
                        var c, d, u, p, f, h, g = r !== s ? "nextSibling" : "previousSibling", v = t.parentNode, y = a && t.nodeName.toLowerCase(), m = !l && !a;
                        if (v) {
                            if (r) {
                                for (; g; ) {
                                    for (u = t; u = u[g]; )
                                        if (a ? u.nodeName.toLowerCase() === y : 1 === u.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? v.firstChild : v.lastChild],
                            s && m) {
                                for (d = v[R] || (v[R] = {}),
                                c = d[e] || [],
                                f = c[0] === z && c[1],
                                p = c[0] === z && c[2],
                                u = f && v.childNodes[f]; u = ++f && u && u[g] || (p = f = 0) || h.pop(); )
                                    if (1 === u.nodeType && ++p && u === t) {
                                        d[e] = [z, f, p];
                                        break
                                    }
                            } else if (m && (c = (t[R] || (t[R] = {}))[e]) && c[0] === z)
                                p = c[1];
                            else
                                for (; (u = ++f && u && u[g] || (p = f = 0) || h.pop()) && ((a ? u.nodeName.toLowerCase() !== y : 1 !== u.nodeType) || !++p || (m && ((u[R] || (u[R] = {}))[e] = [z, p]),
                                u !== t)); )
                                    ;
                            return (p -= o) === n || p % n == 0 && p / n >= 0
                        }
                    }
                },
                PSEUDO: function(e, i) {
                    var o, r = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[R] ? r(i) : r.length > 1 ? (o = [e, e, "", i],
                    k.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function(e, t) {
                        for (var n, o = r(e, i), s = o.length; s--; )
                            n = te(e, o[s]),
                            e[n] = !(t[n] = o[s])
                    }) : function(e) {
                        return r(e, 0, o)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: n(function(e) {
                    var t = []
                      , i = []
                      , o = E(e.replace(ce, "$1"));
                    return o[R] ? n(function(e, t, i, n) {
                        for (var r, s = o(e, null, n, []), a = e.length; a--; )
                            (r = s[a]) && (e[a] = !(t[a] = r))
                    }) : function(e, n, r) {
                        return t[0] = e,
                        o(t, null, r, i),
                        t[0] = null,
                        !i.pop()
                    }
                }),
                has: n(function(e) {
                    return function(i) {
                        return t(e, i).length > 0
                    }
                }),
                contains: n(function(e) {
                    return e = e.replace(ke, Te),
                    function(t) {
                        return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                    }
                }),
                lang: n(function(e) {
                    return he.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(ke, Te).toLowerCase(),
                    function(t) {
                        var i;
                        do {
                            if (i = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }),
                target: function(t) {
                    var i = e.location && e.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(e) {
                    return e === H
                },
                focus: function(e) {
                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return !1 === e.disabled
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !k.pseudos.empty(e)
                },
                header: function(e) {
                    return ye.test(e.nodeName)
                },
                input: function(e) {
                    return ve.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, i) {
                    return [i < 0 ? i + t : i]
                }),
                even: c(function(e, t) {
                    for (var i = 0; i < t; i += 2)
                        e.push(i);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var i = 1; i < t; i += 2)
                        e.push(i);
                    return e
                }),
                lt: c(function(e, t, i) {
                    for (var n = i < 0 ? i + t : i; --n >= 0; )
                        e.push(n);
                    return e
                }),
                gt: c(function(e, t, i) {
                    for (var n = i < 0 ? i + t : i; ++n < t; )
                        e.push(n);
                    return e
                })
            }
        },
        k.pseudos.nth = k.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            k.pseudos[b] = a(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            k.pseudos[b] = l(b);
        return u.prototype = k.filters = k.pseudos,
        k.setFilters = new u,
        C = t.tokenize = function(e, i) {
            var n, o, r, s, a, l, c, d = U[e + " "];
            if (d)
                return i ? 0 : d.slice(0);
            for (a = e,
            l = [],
            c = k.preFilter; a; ) {
                n && !(o = de.exec(a)) || (o && (a = a.slice(o[0].length) || a),
                l.push(r = [])),
                n = !1,
                (o = ue.exec(a)) && (n = o.shift(),
                r.push({
                    value: n,
                    type: o[0].replace(ce, " ")
                }),
                a = a.slice(n.length));
                for (s in k.filter)
                    !(o = ge[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(),
                    r.push({
                        value: n,
                        type: s,
                        matches: o
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return i ? a.length : a ? t.error(e) : U(e, l).slice(0)
        }
        ,
        E = t.compile = function(e, t) {
            var i, n = [], o = [], r = _[e + " "];
            if (!r) {
                for (t || (t = C(e)),
                i = t.length; i--; )
                    r = m(t[i]),
                    r[R] ? n.push(r) : o.push(r);
                r = _(e, w(o, n)),
                r.selector = e
            }
            return r
        }
        ,
        A = t.select = function(e, t, i, n) {
            var o, r, s, a, l, c = "function" == typeof e && e, u = !n && C(e = c.selector || e);
            if (i = i || [],
            1 === u.length) {
                if (r = u[0] = u[0].slice(0),
                r.length > 2 && "ID" === (s = r[0]).type && x.getById && 9 === t.nodeType && P && k.relative[r[1].type]) {
                    if (!(t = (k.find.ID(s.matches[0].replace(ke, Te), t) || [])[0]))
                        return i;
                    c && (t = t.parentNode),
                    e = e.slice(r.shift().value.length)
                }
                for (o = ge.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o],
                !k.relative[a = s.type]); )
                    if ((l = k.find[a]) && (n = l(s.matches[0].replace(ke, Te), be.test(r[0].type) && d(t.parentNode) || t))) {
                        if (r.splice(o, 1),
                        !(e = n.length && p(r)))
                            return Z.apply(i, n),
                            i;
                        break
                    }
            }
            return (c || E(e, u))(n, t, !P, i, be.test(e) && d(t.parentNode) || t),
            i
        }
        ,
        x.sortStable = R.split("").sort(Y).join("") === R,
        x.detectDuplicates = !!D,
        O(),
        x.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(L.createElement("div"))
        }),
        o(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(e, t, i) {
            if (!i)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        x.attributes && o(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || r("value", function(e, t, i) {
            if (!i && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        o(function(e) {
            return null == e.getAttribute("disabled")
        }) || r(ie, function(e, t, i) {
            var n;
            if (!i)
                return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }),
        t
    }(e);
    ee.find = re,
    ee.expr = re.selectors,
    ee.expr[":"] = ee.expr.pseudos,
    ee.unique = re.uniqueSort,
    ee.text = re.getText,
    ee.isXMLDoc = re.isXML,
    ee.contains = re.contains;
    var se = ee.expr.match.needsContext
      , ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , le = /^.[^:#\[\.,]*$/;
    ee.filter = function(e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"),
        1 === t.length && 1 === n.nodeType ? ee.find.matchesSelector(n, e) ? [n] : [] : ee.find.matches(e, ee.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    ee.fn.extend({
        find: function(e) {
            var t, i = this.length, n = [], o = this;
            if ("string" != typeof e)
                return this.pushStack(ee(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (ee.contains(o[t], this))
                            return !0
                }));
            for (t = 0; t < i; t++)
                ee.find(e, o[t], n);
            return n = this.pushStack(i > 1 ? ee.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + e : e,
            n
        },
        filter: function(e) {
            return this.pushStack(n(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(n(this, e || [], !0))
        },
        is: function(e) {
            return !!n(this, "string" == typeof e && se.test(e) ? ee(e) : e || [], !1).length
        }
    });
    var ce, de = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (ee.fn.init = function(e, t) {
        var i, n;
        if (!e)
            return this;
        if ("string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : de.exec(e)) || !i[1] && t)
                return !t || t.jquery ? (t || ce).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof ee ? t[0] : t,
                ee.merge(this, ee.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : J, !0)),
                ae.test(i[1]) && ee.isPlainObject(t))
                    for (i in t)
                        ee.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return n = J.getElementById(i[2]),
            n && n.parentNode && (this.length = 1,
            this[0] = n),
            this.context = J,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e,
        this.length = 1,
        this) : ee.isFunction(e) ? void 0 !== ce.ready ? ce.ready(e) : e(ee) : (void 0 !== e.selector && (this.selector = e.selector,
        this.context = e.context),
        ee.makeArray(e, this))
    }
    ).prototype = ee.fn,
    ce = ee(J);
    var ue = /^(?:parents|prev(?:Until|All))/
      , pe = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    ee.extend({
        dir: function(e, t, i) {
            for (var n = [], o = void 0 !== i; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (o && ee(e).is(i))
                        break;
                    n.push(e)
                }
            return n
        },
        sibling: function(e, t) {
            for (var i = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && i.push(e);
            return i
        }
    }),
    ee.fn.extend({
        has: function(e) {
            var t = ee(e, this)
              , i = t.length;
            return this.filter(function() {
                for (var e = 0; e < i; e++)
                    if (ee.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var i, n = 0, o = this.length, r = [], s = se.test(e) || "string" != typeof e ? ee(e, t || this.context) : 0; n < o; n++)
                for (i = this[n]; i && i !== t; i = i.parentNode)
                    if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && ee.find.matchesSelector(i, e))) {
                        r.push(i);
                        break
                    }
            return this.pushStack(r.length > 1 ? ee.unique(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? Y.call(ee(e), this[0]) : Y.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ee.unique(ee.merge(this.get(), ee(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    ee.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ee.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return ee.dir(e, "parentNode", i)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return ee.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return ee.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return ee.dir(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return ee.dir(e, "previousSibling", i)
        },
        siblings: function(e) {
            return ee.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ee.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || ee.merge([], e.childNodes)
        }
    }, function(e, t) {
        ee.fn[e] = function(i, n) {
            var o = ee.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i),
            n && "string" == typeof n && (o = ee.filter(n, o)),
            this.length > 1 && (pe[e] || ee.unique(o),
            ue.test(e) && o.reverse()),
            this.pushStack(o)
        }
    });
    var fe = /\S+/g
      , he = {};
    ee.Callbacks = function(e) {
        e = "string" == typeof e ? he[e] || r(e) : ee.extend({}, e);
        var t, i, n, o, s, a, l = [], c = !e.once && [], d = function(r) {
            for (t = e.memory && r,
            i = !0,
            a = o || 0,
            o = 0,
            s = l.length,
            n = !0; l && a < s; a++)
                if (!1 === l[a].apply(r[0], r[1]) && e.stopOnFalse) {
                    t = !1;
                    break
                }
            n = !1,
            l && (c ? c.length && d(c.shift()) : t ? l = [] : u.disable())
        }, u = {
            add: function() {
                if (l) {
                    var i = l.length;
                    !function t(i) {
                        ee.each(i, function(i, n) {
                            var o = ee.type(n);
                            "function" === o ? e.unique && u.has(n) || l.push(n) : n && n.length && "string" !== o && t(n)
                        })
                    }(arguments),
                    n ? s = l.length : t && (o = i,
                    d(t))
                }
                return this
            },
            remove: function() {
                return l && ee.each(arguments, function(e, t) {
                    for (var i; (i = ee.inArray(t, l, i)) > -1; )
                        l.splice(i, 1),
                        n && (i <= s && s--,
                        i <= a && a--)
                }),
                this
            },
            has: function(e) {
                return e ? ee.inArray(e, l) > -1 : !(!l || !l.length)
            },
            empty: function() {
                return l = [],
                s = 0,
                this
            },
            disable: function() {
                return l = c = t = void 0,
                this
            },
            disabled: function() {
                return !l
            },
            lock: function() {
                return c = void 0,
                t || u.disable(),
                this
            },
            locked: function() {
                return !c
            },
            fireWith: function(e, t) {
                return !l || i && !c || (t = t || [],
                t = [e, t.slice ? t.slice() : t],
                n ? c.push(t) : d(t)),
                this
            },
            fire: function() {
                return u.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return u
    }
    ,
    ee.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", ee.Callbacks("once memory"), "resolved"], ["reject", "fail", ee.Callbacks("once memory"), "rejected"], ["notify", "progress", ee.Callbacks("memory")]]
              , i = "pending"
              , n = {
                state: function() {
                    return i
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return ee.Deferred(function(i) {
                        ee.each(t, function(t, r) {
                            var s = ee.isFunction(e[t]) && e[t];
                            o[r[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && ee.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[r[0] + "With"](this === n ? i.promise() : this, s ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? ee.extend(e, n) : n
                }
            }
              , o = {};
            return n.pipe = n.then,
            ee.each(t, function(e, r) {
                var s = r[2]
                  , a = r[3];
                n[r[1]] = s.add,
                a && s.add(function() {
                    i = a
                }, t[1 ^ e][2].disable, t[2][2].lock),
                o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? n : this, arguments),
                    this
                }
                ,
                o[r[0] + "With"] = s.fireWith
            }),
            n.promise(o),
            e && e.call(o, o),
            o
        },
        when: function(e) {
            var t = 0, i = X.call(arguments), n = i.length, o = 1 !== n || e && ee.isFunction(e.promise) ? n : 0, r = 1 === o ? e : ee.Deferred(), s = function(e, t, i) {
                return function(n) {
                    t[e] = this,
                    i[e] = arguments.length > 1 ? X.call(arguments) : n,
                    i === a ? r.notifyWith(t, i) : --o || r.resolveWith(t, i)
                }
            }, a, l, c;
            if (n > 1)
                for (a = new Array(n),
                l = new Array(n),
                c = new Array(n); t < n; t++)
                    i[t] && ee.isFunction(i[t].promise) ? i[t].promise().done(s(t, c, i)).fail(r.reject).progress(s(t, l, a)) : --o;
            return o || r.resolveWith(c, i),
            r.promise()
        }
    });
    var ge;
    ee.fn.ready = function(e) {
        return ee.ready.promise().done(e),
        this
    }
    ,
    ee.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ee.readyWait++ : ee.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --ee.readyWait : ee.isReady) || (ee.isReady = !0,
            !0 !== e && --ee.readyWait > 0 || (ge.resolveWith(J, [ee]),
            ee.fn.triggerHandler && (ee(J).triggerHandler("ready"),
            ee(J).off("ready"))))
        }
    }),
    ee.ready.promise = function(t) {
        return ge || (ge = ee.Deferred(),
        "complete" === J.readyState ? setTimeout(ee.ready) : (J.addEventListener("DOMContentLoaded", s, !1),
        e.addEventListener("load", s, !1))),
        ge.promise(t)
    }
    ,
    ee.ready.promise();
    var ve = ee.access = function(e, t, i, n, o, r, s) {
        var a = 0
          , l = e.length
          , c = null == i;
        if ("object" === ee.type(i)) {
            o = !0;
            for (a in i)
                ee.access(e, t, a, i[a], !0, r, s)
        } else if (void 0 !== n && (o = !0,
        ee.isFunction(n) || (s = !0),
        c && (s ? (t.call(e, n),
        t = null) : (c = t,
        t = function(e, t, i) {
            return c.call(ee(e), i)
        }
        )),
        t))
            for (; a < l; a++)
                t(e[a], i, s ? n : n.call(e[a], a, t(e[a], i)));
        return o ? e : c ? t.call(e) : l ? t(e[0], i) : r
    }
    ;
    ee.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
    ,
    a.uid = 1,
    a.accepts = ee.acceptData,
    a.prototype = {
        key: function(e) {
            if (!a.accepts(e))
                return 0;
            var t = {}
              , i = e[this.expando];
            if (!i) {
                i = a.uid++;
                try {
                    t[this.expando] = {
                        value: i
                    },
                    Object.defineProperties(e, t)
                } catch (n) {
                    t[this.expando] = i,
                    ee.extend(e, t)
                }
            }
            return this.cache[i] || (this.cache[i] = {}),
            i
        },
        set: function(e, t, i) {
            var n, o = this.key(e), r = this.cache[o];
            if ("string" == typeof t)
                r[t] = i;
            else if (ee.isEmptyObject(r))
                ee.extend(this.cache[o], t);
            else
                for (n in t)
                    r[n] = t[n];
            return r
        },
        get: function(e, t) {
            var i = this.cache[this.key(e)];
            return void 0 === t ? i : i[t]
        },
        access: function(e, t, i) {
            var n;
            return void 0 === t || t && "string" == typeof t && void 0 === i ? (n = this.get(e, t),
            void 0 !== n ? n : this.get(e, ee.camelCase(t))) : (this.set(e, t, i),
            void 0 !== i ? i : t)
        },
        remove: function(e, t) {
            var i, n, o, r = this.key(e), s = this.cache[r];
            if (void 0 === t)
                this.cache[r] = {};
            else {
                ee.isArray(t) ? n = t.concat(t.map(ee.camelCase)) : (o = ee.camelCase(t),
                t in s ? n = [t, o] : (n = o,
                n = n in s ? [n] : n.match(fe) || [])),
                i = n.length;
                for (; i--; )
                    delete s[n[i]]
            }
        },
        hasData: function(e) {
            return !ee.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ye = new a
      , me = new a
      , we = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , be = /([A-Z])/g;
    ee.extend({
        hasData: function(e) {
            return me.hasData(e) || ye.hasData(e)
        },
        data: function(e, t, i) {
            return me.access(e, t, i)
        },
        removeData: function(e, t) {
            me.remove(e, t)
        },
        _data: function(e, t, i) {
            return ye.access(e, t, i)
        },
        _removeData: function(e, t) {
            ye.remove(e, t)
        }
    }),
    ee.fn.extend({
        data: function(e, t) {
            var i, n, o, r = this[0], s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = me.get(r),
                1 === r.nodeType && !ye.get(r, "hasDataAttrs"))) {
                    for (i = s.length; i--; )
                        s[i] && (n = s[i].name,
                        0 === n.indexOf("data-") && (n = ee.camelCase(n.slice(5)),
                        l(r, n, o[n])));
                    ye.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                me.set(this, e)
            }) : ve(this, function(t) {
                var i, n = ee.camelCase(e);
                if (r && void 0 === t) {
                    if (void 0 !== (i = me.get(r, e)))
                        return i;
                    if (void 0 !== (i = me.get(r, n)))
                        return i;
                    if (void 0 !== (i = l(r, n, void 0)))
                        return i
                } else
                    this.each(function() {
                        var i = me.get(this, n);
                        me.set(this, n, t),
                        -1 !== e.indexOf("-") && void 0 !== i && me.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                me.remove(this, e)
            })
        }
    }),
    ee.extend({
        queue: function(e, t, i) {
            var n;
            if (e)
                return t = (t || "fx") + "queue",
                n = ye.get(e, t),
                i && (!n || ee.isArray(i) ? n = ye.access(e, t, ee.makeArray(i)) : n.push(i)),
                n || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = ee.queue(e, t)
              , n = i.length
              , o = i.shift()
              , r = ee._queueHooks(e, t)
              , s = function() {
                ee.dequeue(e, t)
            };
            "inprogress" === o && (o = i.shift(),
            n--),
            o && ("fx" === t && i.unshift("inprogress"),
            delete r.stop,
            o.call(e, s, r)),
            !n && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return ye.get(e, i) || ye.access(e, i, {
                empty: ee.Callbacks("once memory").add(function() {
                    ye.remove(e, [t + "queue", i])
                })
            })
        }
    }),
    ee.fn.extend({
        queue: function(e, t) {
            var i = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            i--),
            arguments.length < i ? ee.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var i = ee.queue(this, e, t);
                ee._queueHooks(this, e),
                "fx" === e && "inprogress" !== i[0] && ee.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ee.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var i, n = 1, o = ee.Deferred(), r = this, s = this.length, a = function() {
                --n || o.resolveWith(r, [r])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; s--; )
                (i = ye.get(r[s], e + "queueHooks")) && i.empty && (n++,
                i.empty.add(a));
            return a(),
            o.promise(t)
        }
    });
    var xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ke = ["Top", "Right", "Bottom", "Left"]
      , Te = function(e, t) {
        return e = t || e,
        "none" === ee.css(e, "display") || !ee.contains(e.ownerDocument, e)
    }
      , Se = /^(?:checkbox|radio)$/i;
    !function() {
        var e = J.createDocumentFragment()
          , t = e.appendChild(J.createElement("div"))
          , i = J.createElement("input");
        i.setAttribute("type", "radio"),
        i.setAttribute("checked", "checked"),
        i.setAttribute("name", "t"),
        t.appendChild(i),
        K.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        t.innerHTML = "<textarea>x</textarea>",
        K.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ce = "undefined";
    K.focusinBubbles = "onfocusin"in e;
    var $e = /^key/
      , Ee = /^(?:mouse|pointer|contextmenu)|click/
      , Ae = /^(?:focusinfocus|focusoutblur)$/
      , Ne = /^([^.]*)(?:\.(.+)|)$/;
    ee.event = {
        global: {},
        add: function(e, t, i, n, o) {
            var r, s, a, l, c, d, u, p, f, h, g, v = ye.get(e);
            if (v)
                for (i.handler && (r = i,
                i = r.handler,
                o = r.selector),
                i.guid || (i.guid = ee.guid++),
                (l = v.events) || (l = v.events = {}),
                (s = v.handle) || (s = v.handle = function(t) {
                    return void 0 !== ee && ee.event.triggered !== t.type ? ee.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                t = (t || "").match(fe) || [""],
                c = t.length; c--; )
                    a = Ne.exec(t[c]) || [],
                    f = g = a[1],
                    h = (a[2] || "").split(".").sort(),
                    f && (u = ee.event.special[f] || {},
                    f = (o ? u.delegateType : u.bindType) || f,
                    u = ee.event.special[f] || {},
                    d = ee.extend({
                        type: f,
                        origType: g,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: o,
                        needsContext: o && ee.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, r),
                    (p = l[f]) || (p = l[f] = [],
                    p.delegateCount = 0,
                    u.setup && !1 !== u.setup.call(e, n, h, s) || e.addEventListener && e.addEventListener(f, s, !1)),
                    u.add && (u.add.call(e, d),
                    d.handler.guid || (d.handler.guid = i.guid)),
                    o ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                    ee.event.global[f] = !0)
        },
        remove: function(e, t, i, n, o) {
            var r, s, a, l, c, d, u, p, f, h, g, v = ye.hasData(e) && ye.get(e);
            if (v && (l = v.events)) {
                for (t = (t || "").match(fe) || [""],
                c = t.length; c--; )
                    if (a = Ne.exec(t[c]) || [],
                    f = g = a[1],
                    h = (a[2] || "").split(".").sort(),
                    f) {
                        for (u = ee.event.special[f] || {},
                        f = (n ? u.delegateType : u.bindType) || f,
                        p = l[f] || [],
                        a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = r = p.length; r--; )
                            d = p[r],
                            !o && g !== d.origType || i && i.guid !== d.guid || a && !a.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (p.splice(r, 1),
                            d.selector && p.delegateCount--,
                            u.remove && u.remove.call(e, d));
                        s && !p.length && (u.teardown && !1 !== u.teardown.call(e, h, v.handle) || ee.removeEvent(e, f, v.handle),
                        delete l[f])
                    } else
                        for (f in l)
                            ee.event.remove(e, f + t[c], i, n, !0);
                ee.isEmptyObject(l) && (delete v.handle,
                ye.remove(e, "events"))
            }
        },
        trigger: function(t, i, n, o) {
            var r, s, a, l, c, d, u, p = [n || J], f = Q.call(t, "type") ? t.type : t, h = Q.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = n = n || J,
            3 !== n.nodeType && 8 !== n.nodeType && !Ae.test(f + ee.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."),
            f = h.shift(),
            h.sort()),
            c = f.indexOf(":") < 0 && "on" + f,
            t = t[ee.expando] ? t : new ee.Event(f,"object" == typeof t && t),
            t.isTrigger = o ? 2 : 3,
            t.namespace = h.join("."),
            t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = n),
            i = null == i ? [t] : ee.makeArray(i, [t]),
            u = ee.event.special[f] || {},
            o || !u.trigger || !1 !== u.trigger.apply(n, i))) {
                if (!o && !u.noBubble && !ee.isWindow(n)) {
                    for (l = u.delegateType || f,
                    Ae.test(l + f) || (s = s.parentNode); s; s = s.parentNode)
                        p.push(s),
                        a = s;
                    a === (n.ownerDocument || J) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (r = 0; (s = p[r++]) && !t.isPropagationStopped(); )
                    t.type = r > 1 ? l : u.bindType || f,
                    d = (ye.get(s, "events") || {})[t.type] && ye.get(s, "handle"),
                    d && d.apply(s, i),
                    (d = c && s[c]) && d.apply && ee.acceptData(s) && (t.result = d.apply(s, i),
                    !1 === t.result && t.preventDefault());
                return t.type = f,
                o || t.isDefaultPrevented() || u._default && !1 !== u._default.apply(p.pop(), i) || !ee.acceptData(n) || c && ee.isFunction(n[f]) && !ee.isWindow(n) && (a = n[c],
                a && (n[c] = null),
                ee.event.triggered = f,
                n[f](),
                ee.event.triggered = void 0,
                a && (n[c] = a)),
                t.result
            }
        },
        dispatch: function(e) {
            e = ee.event.fix(e);
            var t, i, n, o, r, s = [], a = X.call(arguments), l = (ye.get(this, "events") || {})[e.type] || [], c = ee.event.special[e.type] || {};
            if (a[0] = e,
            e.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (s = ee.event.handlers.call(this, e, l),
                t = 0; (o = s[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = o.elem,
                    i = 0; (r = o.handlers[i++]) && !e.isImmediatePropagationStopped(); )
                        e.namespace_re && !e.namespace_re.test(r.namespace) || (e.handleObj = r,
                        e.data = r.data,
                        void 0 !== (n = ((ee.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (e.result = n) && (e.preventDefault(),
                        e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var i, n, o, r, s = [], a = t.delegateCount, l = e.target;
            if (a && l.nodeType && (!e.button || "click" !== e.type))
                for (; l !== this; l = l.parentNode || this)
                    if (!0 !== l.disabled || "click" !== e.type) {
                        for (n = [],
                        i = 0; i < a; i++)
                            r = t[i],
                            o = r.selector + " ",
                            void 0 === n[o] && (n[o] = r.needsContext ? ee(o, this).index(l) >= 0 : ee.find(o, this, null, [l]).length),
                            n[o] && n.push(r);
                        n.length && s.push({
                            elem: l,
                            handlers: n
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }),
            s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var i, n, o, r = t.button;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || J,
                n = i.documentElement,
                o = i.body,
                e.pageX = t.clientX + (n && n.scrollLeft || o && o.scrollLeft || 0) - (n && n.clientLeft || o && o.clientLeft || 0),
                e.pageY = t.clientY + (n && n.scrollTop || o && o.scrollTop || 0) - (n && n.clientTop || o && o.clientTop || 0)),
                e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
                e
            }
        },
        fix: function(e) {
            if (e[ee.expando])
                return e;
            var t, i, n, o = e.type, r = e, s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = Ee.test(o) ? this.mouseHooks : $e.test(o) ? this.keyHooks : {}),
            n = s.props ? this.props.concat(s.props) : this.props,
            e = new ee.Event(r),
            t = n.length; t--; )
                i = n[t],
                e[i] = r[i];
            return e.target || (e.target = J),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            s.filter ? s.filter(e, r) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== u() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === u() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && ee.nodeName(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return ee.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, i, n) {
            var o = ee.extend(new ee.Event, i, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? ee.event.trigger(o, null, t) : ee.event.dispatch.call(t, o),
            o.isDefaultPrevented() && i.preventDefault()
        }
    },
    ee.removeEvent = function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i, !1)
    }
    ,
    ee.Event = function(e, t) {
        if (!(this instanceof ee.Event))
            return new ee.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? c : d) : this.type = e,
        t && ee.extend(this, t),
        this.timeStamp = e && e.timeStamp || ee.now(),
        this[ee.expando] = !0
    }
    ,
    ee.Event.prototype = {
        isDefaultPrevented: d,
        isPropagationStopped: d,
        isImmediatePropagationStopped: d,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = c,
            e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = c,
            e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = c,
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    ee.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        ee.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var i, n = this, o = e.relatedTarget, r = e.handleObj;
                return o && (o === n || ee.contains(n, o)) || (e.type = r.origType,
                i = r.handler.apply(this, arguments),
                e.type = t),
                i
            }
        }
    }),
    K.focusinBubbles || ee.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var i = function(e) {
            ee.event.simulate(t, e.target, ee.event.fix(e), !0)
        };
        ee.event.special[t] = {
            setup: function() {
                var n = this.ownerDocument || this
                  , o = ye.access(n, t);
                o || n.addEventListener(e, i, !0),
                ye.access(n, t, (o || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this
                  , o = ye.access(n, t) - 1;
                o ? ye.access(n, t, o) : (n.removeEventListener(e, i, !0),
                ye.remove(n, t))
            }
        }
    }),
    ee.fn.extend({
        on: function(e, t, i, n, o) {
            var r, s;
            if ("object" == typeof e) {
                "string" != typeof t && (i = i || t,
                t = void 0);
                for (s in e)
                    this.on(s, t, i, e[s], o);
                return this
            }
            if (null == i && null == n ? (n = t,
            i = t = void 0) : null == n && ("string" == typeof t ? (n = i,
            i = void 0) : (n = i,
            i = t,
            t = void 0)),
            !1 === n)
                n = d;
            else if (!n)
                return this;
            return 1 === o && (r = n,
            n = function(e) {
                return ee().off(e),
                r.apply(this, arguments)
            }
            ,
            n.guid = r.guid || (r.guid = ee.guid++)),
            this.each(function() {
                ee.event.add(this, e, n, i, t)
            })
        },
        one: function(e, t, i, n) {
            return this.on(e, t, i, n, 1)
        },
        off: function(e, t, i) {
            var n, o;
            if (e && e.preventDefault && e.handleObj)
                return n = e.handleObj,
                ee(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler),
                this;
            if ("object" == typeof e) {
                for (o in e)
                    this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (i = t,
            t = void 0),
            !1 === i && (i = d),
            this.each(function() {
                ee.event.remove(this, e, i, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                ee.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            if (i)
                return ee.event.trigger(e, t, i, !0)
        }
    });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , De = /<([\w:]+)/
      , Oe = /<|&#?\w+;/
      , Le = /<(?:script|style|link)/i
      , He = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Pe = /^$|\/(?:java|ecma)script/i
      , qe = /^true\/(.*)/
      , Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , Ie = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Ie.optgroup = Ie.option,
    Ie.tbody = Ie.tfoot = Ie.colgroup = Ie.caption = Ie.thead,
    Ie.th = Ie.td,
    ee.extend({
        clone: function(e, t, i) {
            var n, o, r, s, a = e.cloneNode(!0), l = ee.contains(e.ownerDocument, e);
            if (!(K.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ee.isXMLDoc(e)))
                for (s = y(a),
                r = y(e),
                n = 0,
                o = r.length; n < o; n++)
                    m(r[n], s[n]);
            if (t)
                if (i)
                    for (r = r || y(e),
                    s = s || y(a),
                    n = 0,
                    o = r.length; n < o; n++)
                        v(r[n], s[n]);
                else
                    v(e, a);
            return s = y(a, "script"),
            s.length > 0 && g(s, !l && y(e, "script")),
            a
        },
        buildFragment: function(e, t, i, n) {
            for (var o, r, s, a, l, c, d = t.createDocumentFragment(), u = [], p = 0, f = e.length; p < f; p++)
                if ((o = e[p]) || 0 === o)
                    if ("object" === ee.type(o))
                        ee.merge(u, o.nodeType ? [o] : o);
                    else if (Oe.test(o)) {
                        for (r = r || d.appendChild(t.createElement("div")),
                        s = (De.exec(o) || ["", ""])[1].toLowerCase(),
                        a = Ie[s] || Ie._default,
                        r.innerHTML = a[1] + o.replace(je, "<$1></$2>") + a[2],
                        c = a[0]; c--; )
                            r = r.lastChild;
                        ee.merge(u, r.childNodes),
                        r = d.firstChild,
                        r.textContent = ""
                    } else
                        u.push(t.createTextNode(o));
            for (d.textContent = "",
            p = 0; o = u[p++]; )
                if ((!n || -1 === ee.inArray(o, n)) && (l = ee.contains(o.ownerDocument, o),
                r = y(d.appendChild(o), "script"),
                l && g(r),
                i))
                    for (c = 0; o = r[c++]; )
                        Pe.test(o.type || "") && i.push(o);
            return d
        },
        cleanData: function(e) {
            for (var t, i, n, o, r = ee.event.special, s = 0; void 0 !== (i = e[s]); s++) {
                if (ee.acceptData(i) && (o = i[ye.expando]) && (t = ye.cache[o])) {
                    if (t.events)
                        for (n in t.events)
                            r[n] ? ee.event.remove(i, n) : ee.removeEvent(i, n, t.handle);
                    ye.cache[o] && delete ye.cache[o]
                }
                delete me.cache[i[me.expando]]
            }
        }
    }),
    ee.fn.extend({
        text: function(e) {
            return ve(this, function(e) {
                return void 0 === e ? ee.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    p(this, e).appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var i, n = e ? ee.filter(e, this) : this, o = 0; null != (i = n[o]); o++)
                t || 1 !== i.nodeType || ee.cleanData(y(i)),
                i.parentNode && (t && ee.contains(i.ownerDocument, i) && g(y(i, "script")),
                i.parentNode.removeChild(i));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (ee.cleanData(y(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return ee.clone(this, e, t)
            })
        },
        html: function(e) {
            return ve(this, function(e) {
                var t = this[0] || {}
                  , i = 0
                  , n = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Le.test(e) && !Ie[(De.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(je, "<$1></$2>");
                    try {
                        for (; i < n; i++)
                            t = this[i] || {},
                            1 === t.nodeType && (ee.cleanData(y(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode,
                ee.cleanData(y(this)),
                e && e.replaceChild(t, this)
            }),
            e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = U.apply([], e);
            var i, n, o, r, s, a, l = 0, c = this.length, d = this, u = c - 1, p = e[0], g = ee.isFunction(p);
            if (g || c > 1 && "string" == typeof p && !K.checkClone && He.test(p))
                return this.each(function(i) {
                    var n = d.eq(i);
                    g && (e[0] = p.call(this, i, n.html())),
                    n.domManip(e, t)
                });
            if (c && (i = ee.buildFragment(e, this[0].ownerDocument, !1, this),
            n = i.firstChild,
            1 === i.childNodes.length && (i = n),
            n)) {
                for (o = ee.map(y(i, "script"), f),
                r = o.length; l < c; l++)
                    s = i,
                    l !== u && (s = ee.clone(s, !0, !0),
                    r && ee.merge(o, y(s, "script"))),
                    t.call(this[l], s, l);
                if (r)
                    for (a = o[o.length - 1].ownerDocument,
                    ee.map(o, h),
                    l = 0; l < r; l++)
                        s = o[l],
                        Pe.test(s.type || "") && !ye.access(s, "globalEval") && ee.contains(a, s) && (s.src ? ee._evalUrl && ee._evalUrl(s.src) : ee.globalEval(s.textContent.replace(Me, "")))
            }
            return this
        }
    }),
    ee.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ee.fn[e] = function(e) {
            for (var i, n = [], o = ee(e), r = o.length - 1, s = 0; s <= r; s++)
                i = s === r ? this : this.clone(!0),
                ee(o[s])[t](i),
                _.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var We, Re = {}, Fe = /^margin/, ze = new RegExp("^(" + xe + ")(?!px)[a-z%]+$","i"), Be = function(t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
    };
    !function() {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
            s.innerHTML = "",
            o.appendChild(r);
            var t = e.getComputedStyle(s, null);
            i = "1%" !== t.top,
            n = "4px" === t.width,
            o.removeChild(r)
        }
        var i, n, o = J.documentElement, r = J.createElement("div"), s = J.createElement("div");
        s.style && (s.style.backgroundClip = "content-box",
        s.cloneNode(!0).style.backgroundClip = "",
        K.clearCloneStyle = "content-box" === s.style.backgroundClip,
        r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",
        r.appendChild(s),
        e.getComputedStyle && ee.extend(K, {
            pixelPosition: function() {
                return t(),
                i
            },
            boxSizingReliable: function() {
                return null == n && t(),
                n
            },
            reliableMarginRight: function() {
                var t, i = s.appendChild(J.createElement("div"));
                return i.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                i.style.marginRight = i.style.width = "0",
                s.style.width = "1px",
                o.appendChild(r),
                t = !parseFloat(e.getComputedStyle(i, null).marginRight),
                o.removeChild(r),
                s.removeChild(i),
                t
            }
        }))
    }(),
    ee.swap = function(e, t, i, n) {
        var o, r, s = {};
        for (r in t)
            s[r] = e.style[r],
            e.style[r] = t[r];
        o = i.apply(e, n || []);
        for (r in t)
            e.style[r] = s[r];
        return o
    }
    ;
    var Xe = /^(none|table(?!-c[ea]).+)/
      , Ue = new RegExp("^(" + xe + ")(.*)$","i")
      , _e = new RegExp("^([+-])=(" + xe + ")","i")
      , Ye = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ve = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Ge = ["Webkit", "O", "Moz", "ms"];
    ee.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = x(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = ee.camelCase(t), l = e.style;
                if (t = ee.cssProps[a] || (ee.cssProps[a] = T(l, a)),
                s = ee.cssHooks[t] || ee.cssHooks[a],
                void 0 === i)
                    return s && "get"in s && void 0 !== (o = s.get(e, !1, n)) ? o : l[t];
                r = typeof i,
                "string" === r && (o = _e.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(ee.css(e, t)),
                r = "number"),
                null != i && i === i && ("number" !== r || ee.cssNumber[a] || (i += "px"),
                K.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                s && "set"in s && void 0 === (i = s.set(e, i, n)) || (l[t] = i))
            }
        },
        css: function(e, t, i, n) {
            var o, r, s, a = ee.camelCase(t);
            return t = ee.cssProps[a] || (ee.cssProps[a] = T(e.style, a)),
            s = ee.cssHooks[t] || ee.cssHooks[a],
            s && "get"in s && (o = s.get(e, !0, i)),
            void 0 === o && (o = x(e, t, n)),
            "normal" === o && t in Ve && (o = Ve[t]),
            "" === i || i ? (r = parseFloat(o),
            !0 === i || ee.isNumeric(r) ? r || 0 : o) : o
        }
    }),
    ee.each(["height", "width"], function(e, t) {
        ee.cssHooks[t] = {
            get: function(e, i, n) {
                if (i)
                    return Xe.test(ee.css(e, "display")) && 0 === e.offsetWidth ? ee.swap(e, Ye, function() {
                        return E(e, t, n)
                    }) : E(e, t, n)
            },
            set: function(e, i, n) {
                var o = n && Be(e);
                return S(e, i, n ? C(e, t, n, "border-box" === ee.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }),
    ee.cssHooks.marginRight = k(K.reliableMarginRight, function(e, t) {
        if (t)
            return ee.swap(e, {
                display: "inline-block"
            }, x, [e, "marginRight"])
    }),
    ee.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ee.cssHooks[e + t] = {
            expand: function(i) {
                for (var n = 0, o = {}, r = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++)
                    o[e + ke[n] + t] = r[n] || r[n - 2] || r[0];
                return o
            }
        },
        Fe.test(e) || (ee.cssHooks[e + t].set = S)
    }),
    ee.fn.extend({
        css: function(e, t) {
            return ve(this, function(e, t, i) {
                var n, o, r = {}, s = 0;
                if (ee.isArray(t)) {
                    for (n = Be(e),
                    o = t.length; s < o; s++)
                        r[t[s]] = ee.css(e, t[s], !1, n);
                    return r
                }
                return void 0 !== i ? ee.style(e, t, i) : ee.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return A(this, !0)
        },
        hide: function() {
            return A(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Te(this) ? ee(this).show() : ee(this).hide()
            })
        }
    }),
    ee.Tween = N,
    N.prototype = {
        constructor: N,
        init: function(e, t, i, n, o, r) {
            this.elem = e,
            this.prop = i,
            this.easing = o || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = n,
            this.unit = r || (ee.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = N.propHooks[this.prop];
            return e && e.get ? e.get(this) : N.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = N.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ee.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            i && i.set ? i.set(this) : N.propHooks._default.set(this),
            this
        }
    },
    N.prototype.init.prototype = N.prototype,
    N.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ee.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                ee.fx.step[e.prop] ? ee.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ee.cssProps[e.prop]] || ee.cssHooks[e.prop]) ? ee.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    N.propHooks.scrollTop = N.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    ee.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    },
    ee.fx = N.prototype.init,
    ee.fx.step = {};
    var Qe, Ke, Je = /^(?:toggle|show|hide)$/, Ze = new RegExp("^(?:([+-])=|)(" + xe + ")([a-z%]*)$","i"), et = /queueHooks$/, tt = [L], it = {
        "*": [function(e, t) {
            var i = this.createTween(e, t)
              , n = i.cur()
              , o = Ze.exec(t)
              , r = o && o[3] || (ee.cssNumber[e] ? "" : "px")
              , s = (ee.cssNumber[e] || "px" !== r && +n) && Ze.exec(ee.css(i.elem, e))
              , a = 1
              , l = 20;
            if (s && s[3] !== r) {
                r = r || s[3],
                o = o || [],
                s = +n || 1;
                do {
                    a = a || ".5",
                    s /= a,
                    ee.style(i.elem, e, s + r)
                } while (a !== (a = i.cur() / n) && 1 !== a && --l)
            }
            return o && (s = i.start = +s || +n || 0,
            i.unit = r,
            i.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]),
            i
        }
        ]
    };
    ee.Animation = ee.extend(P, {
        tweener: function(e, t) {
            ee.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.split(" ");
            for (var i, n = 0, o = e.length; n < o; n++)
                i = e[n],
                it[i] = it[i] || [],
                it[i].unshift(t)
        },
        prefilter: function(e, t) {
            t ? tt.unshift(e) : tt.push(e)
        }
    }),
    ee.speed = function(e, t, i) {
        var n = e && "object" == typeof e ? ee.extend({}, e) : {
            complete: i || !i && t || ee.isFunction(e) && e,
            duration: e,
            easing: i && t || t && !ee.isFunction(t) && t
        };
        return n.duration = ee.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in ee.fx.speeds ? ee.fx.speeds[n.duration] : ee.fx.speeds._default,
        null != n.queue && !0 !== n.queue || (n.queue = "fx"),
        n.old = n.complete,
        n.complete = function() {
            ee.isFunction(n.old) && n.old.call(this),
            n.queue && ee.dequeue(this, n.queue)
        }
        ,
        n
    }
    ,
    ee.fn.extend({
        fadeTo: function(e, t, i, n) {
            return this.filter(Te).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, i, n)
        },
        animate: function(e, t, i, n) {
            var o = ee.isEmptyObject(e)
              , r = ee.speed(t, i, n)
              , s = function() {
                var t = P(this, ee.extend({}, e), r);
                (o || ye.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s,
            o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function(e, t, i) {
            var n = function(e) {
                var t = e.stop;
                delete e.stop,
                t(i)
            };
            return "string" != typeof e && (i = t,
            t = e,
            e = void 0),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , o = null != e && e + "queueHooks"
                  , r = ee.timers
                  , s = ye.get(this);
                if (o)
                    s[o] && s[o].stop && n(s[o]);
                else
                    for (o in s)
                        s[o] && s[o].stop && et.test(o) && n(s[o]);
                for (o = r.length; o--; )
                    r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(i),
                    t = !1,
                    r.splice(o, 1));
                !t && i || ee.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each(function() {
                var t, i = ye.get(this), n = i[e + "queue"], o = i[e + "queueHooks"], r = ee.timers, s = n ? n.length : 0;
                for (i.finish = !0,
                ee.queue(this, e, []),
                o && o.stop && o.stop.call(this, !0),
                t = r.length; t--; )
                    r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0),
                    r.splice(t, 1));
                for (t = 0; t < s; t++)
                    n[t] && n[t].finish && n[t].finish.call(this);
                delete i.finish
            })
        }
    }),
    ee.each(["toggle", "show", "hide"], function(e, t) {
        var i = ee.fn[t];
        ee.fn[t] = function(e, n, o) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(D(t, !0), e, n, o)
        }
    }),
    ee.each({
        slideDown: D("show"),
        slideUp: D("hide"),
        slideToggle: D("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        ee.fn[e] = function(e, i, n) {
            return this.animate(t, e, i, n)
        }
    }),
    ee.timers = [],
    ee.fx.tick = function() {
        var e, t = 0, i = ee.timers;
        for (Qe = ee.now(); t < i.length; t++)
            (e = i[t])() || i[t] !== e || i.splice(t--, 1);
        i.length || ee.fx.stop(),
        Qe = void 0
    }
    ,
    ee.fx.timer = function(e) {
        ee.timers.push(e),
        e() ? ee.fx.start() : ee.timers.pop()
    }
    ,
    ee.fx.interval = 13,
    ee.fx.start = function() {
        Ke || (Ke = setInterval(ee.fx.tick, ee.fx.interval))
    }
    ,
    ee.fx.stop = function() {
        clearInterval(Ke),
        Ke = null
    }
    ,
    ee.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    ee.fn.delay = function(e, t) {
        return e = ee.fx ? ee.fx.speeds[e] || e : e,
        t = t || "fx",
        this.queue(t, function(t, i) {
            var n = setTimeout(t, e);
            i.stop = function() {
                clearTimeout(n)
            }
        })
    }
    ,
    function() {
        var e = J.createElement("input")
          , t = J.createElement("select")
          , i = t.appendChild(J.createElement("option"));
        e.type = "checkbox",
        K.checkOn = "" !== e.value,
        K.optSelected = i.selected,
        t.disabled = !0,
        K.optDisabled = !i.disabled,
        e = J.createElement("input"),
        e.value = "t",
        e.type = "radio",
        K.radioValue = "t" === e.value
    }();
    var nt, ot, rt = ee.expr.attrHandle;
    ee.fn.extend({
        attr: function(e, t) {
            return ve(this, ee.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ee.removeAttr(this, e)
            })
        }
    }),
    ee.extend({
        attr: function(e, t, i) {
            var n, o, r = e.nodeType;
            if (e && 3 !== r && 8 !== r && 2 !== r)
                return void 0 === e.getAttribute ? ee.prop(e, t, i) : (1 === r && ee.isXMLDoc(e) || (t = t.toLowerCase(),
                n = ee.attrHooks[t] || (ee.expr.match.bool.test(t) ? ot : void 0)),
                void 0 === i ? n && "get"in n && null !== (o = n.get(e, t)) ? o : (o = ee.find.attr(e, t),
                null == o ? void 0 : o) : null !== i ? n && "set"in n && void 0 !== (o = n.set(e, i, t)) ? o : (e.setAttribute(t, i + ""),
                i) : void ee.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var i, n, o = 0, r = t && t.match(fe);
            if (r && 1 === e.nodeType)
                for (; i = r[o++]; )
                    n = ee.propFix[i] || i,
                    ee.expr.match.bool.test(i) && (e[n] = !1),
                    e.removeAttribute(i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!K.radioValue && "radio" === t && ee.nodeName(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t),
                        i && (e.value = i),
                        t
                    }
                }
            }
        }
    }),
    ot = {
        set: function(e, t, i) {
            return !1 === t ? ee.removeAttr(e, i) : e.setAttribute(i, i),
            i
        }
    },
    ee.each(ee.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var i = rt[t] || ee.find.attr;
        rt[t] = function(e, t, n) {
            var o, r;
            return n || (r = rt[t],
            rt[t] = o,
            o = null != i(e, t, n) ? t.toLowerCase() : null,
            rt[t] = r),
            o
        }
    });
    var st = /^(?:input|select|textarea|button)$/i;
    ee.fn.extend({
        prop: function(e, t) {
            return ve(this, ee.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[ee.propFix[e] || e]
            })
        }
    }),
    ee.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(e, t, i) {
            var n, o, r, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)
                return r = 1 !== s || !ee.isXMLDoc(e),
                r && (t = ee.propFix[t] || t,
                o = ee.propHooks[t]),
                void 0 !== i ? o && "set"in o && void 0 !== (n = o.set(e, i, t)) ? n : e[t] = i : o && "get"in o && null !== (n = o.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || st.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }),
    K.optSelected || (ee.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        }
    }),
    ee.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ee.propFix[this.toLowerCase()] = this
    });
    var at = /[\t\r\n\f]/g;
    ee.fn.extend({
        addClass: function(e) {
            var t, i, n, o, r, s, a = "string" == typeof e && e, l = 0, c = this.length;
            if (ee.isFunction(e))
                return this.each(function(t) {
                    ee(this).addClass(e.call(this, t, this.className))
                });
            if (a)
                for (t = (e || "").match(fe) || []; l < c; l++)
                    if (i = this[l],
                    n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(at, " ") : " ")) {
                        for (r = 0; o = t[r++]; )
                            n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                        s = ee.trim(n),
                        i.className !== s && (i.className = s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, i, n, o, r, s, a = 0 === arguments.length || "string" == typeof e && e, l = 0, c = this.length;
            if (ee.isFunction(e))
                return this.each(function(t) {
                    ee(this).removeClass(e.call(this, t, this.className))
                });
            if (a)
                for (t = (e || "").match(fe) || []; l < c; l++)
                    if (i = this[l],
                    n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(at, " ") : "")) {
                        for (r = 0; o = t[r++]; )
                            for (; n.indexOf(" " + o + " ") >= 0; )
                                n = n.replace(" " + o + " ", " ");
                        s = e ? ee.trim(n) : "",
                        i.className !== s && (i.className = s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var i = typeof e;
            return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : ee.isFunction(e) ? this.each(function(i) {
                ee(this).toggleClass(e.call(this, i, this.className, t), t)
            }) : this.each(function() {
                if ("string" === i)
                    for (var t, n = 0, o = ee(this), r = e.match(fe) || []; t = r[n++]; )
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else
                    "undefined" !== i && "boolean" !== i || (this.className && ye.set(this, "__className__", this.className),
                    this.className = this.className || !1 === e ? "" : ye.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", i = 0, n = this.length; i < n; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(at, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        }
    });
    var lt = /\r/g;
    ee.fn.extend({
        val: function(e) {
            var t, i, n, o = this[0];
            {
                if (arguments.length)
                    return n = ee.isFunction(e),
                    this.each(function(i) {
                        var o;
                        1 === this.nodeType && (o = n ? e.call(this, i, ee(this).val()) : e,
                        null == o ? o = "" : "number" == typeof o ? o += "" : ee.isArray(o) && (o = ee.map(o, function(e) {
                            return null == e ? "" : e + ""
                        })),
                        (t = ee.valHooks[this.type] || ee.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                    });
                if (o)
                    return (t = ee.valHooks[o.type] || ee.valHooks[o.nodeName.toLowerCase()]) && "get"in t && void 0 !== (i = t.get(o, "value")) ? i : (i = o.value,
                    "string" == typeof i ? i.replace(lt, "") : null == i ? "" : i)
            }
        }
    }),
    ee.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ee.find.attr(e, "value");
                    return null != t ? t : ee.trim(ee.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, i, n = e.options, o = e.selectedIndex, r = "select-one" === e.type || o < 0, s = r ? null : [], a = r ? o + 1 : n.length, l = o < 0 ? a : r ? o : 0; l < a; l++)
                        if (i = n[l],
                        (i.selected || l === o) && (K.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !ee.nodeName(i.parentNode, "optgroup"))) {
                            if (t = ee(i).val(),
                            r)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var i, n, o = e.options, r = ee.makeArray(t), s = o.length; s--; )
                        n = o[s],
                        (n.selected = ee.inArray(n.value, r) >= 0) && (i = !0);
                    return i || (e.selectedIndex = -1),
                    r
                }
            }
        }
    }),
    ee.each(["radio", "checkbox"], function() {
        ee.valHooks[this] = {
            set: function(e, t) {
                if (ee.isArray(t))
                    return e.checked = ee.inArray(ee(e).val(), t) >= 0
            }
        },
        K.checkOn || (ee.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    ee.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        ee.fn[t] = function(e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    }),
    ee.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    });
    var ct = ee.now()
      , dt = /\?/;
    ee.parseJSON = function(e) {
        return JSON.parse(e + "")
    }
    ,
    ee.parseXML = function(e) {
        var t, i;
        if (!e || "string" != typeof e)
            return null;
        try {
            i = new DOMParser,
            t = i.parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || ee.error("Invalid XML: " + e),
        t
    }
    ;
    var ut = /#.*$/
      , pt = /([?&])_=[^&]*/
      , ft = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , gt = /^(?:GET|HEAD)$/
      , vt = /^\/\//
      , yt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
      , mt = {}
      , wt = {}
      , bt = "*/".concat("*")
      , xt = e.location.href
      , kt = yt.exec(xt.toLowerCase()) || [];
    ee.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xt,
            type: "GET",
            isLocal: ht.test(kt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": bt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ee.parseJSON,
                "text xml": ee.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? I(I(e, ee.ajaxSettings), t) : I(ee.ajaxSettings, e)
        },
        ajaxPrefilter: q(mt),
        ajaxTransport: q(wt),
        ajax: function(e, t) {
            function i(e, t, i, s) {
                var l, d, y, m, b, k = t;
                2 !== w && (w = 2,
                a && clearTimeout(a),
                n = void 0,
                r = s || "",
                x.readyState = e > 0 ? 4 : 0,
                l = e >= 200 && e < 300 || 304 === e,
                i && (m = W(u, x, i)),
                m = R(u, m, x, l),
                l ? (u.ifModified && (b = x.getResponseHeader("Last-Modified"),
                b && (ee.lastModified[o] = b),
                (b = x.getResponseHeader("etag")) && (ee.etag[o] = b)),
                204 === e || "HEAD" === u.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = m.state,
                d = m.data,
                y = m.error,
                l = !y)) : (y = k,
                !e && k || (k = "error",
                e < 0 && (e = 0))),
                x.status = e,
                x.statusText = (t || k) + "",
                l ? h.resolveWith(p, [d, k, x]) : h.rejectWith(p, [x, k, y]),
                x.statusCode(v),
                v = void 0,
                c && f.trigger(l ? "ajaxSuccess" : "ajaxError", [x, u, l ? d : y]),
                g.fireWith(p, [x, k]),
                c && (f.trigger("ajaxComplete", [x, u]),
                --ee.active || ee.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var n, o, r, s, a, l, c, d, u = ee.ajaxSetup({}, t), p = u.context || u, f = u.context && (p.nodeType || p.jquery) ? ee(p) : ee.event, h = ee.Deferred(), g = ee.Callbacks("once memory"), v = u.statusCode || {}, y = {}, m = {}, w = 0, b = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === w) {
                        if (!s)
                            for (s = {}; t = ft.exec(r); )
                                s[t[1].toLowerCase()] = t[2];
                        t = s[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === w ? r : null
                },
                setRequestHeader: function(e, t) {
                    var i = e.toLowerCase();
                    return w || (e = m[i] = m[i] || e,
                    y[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return w || (u.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (w < 2)
                            for (t in e)
                                v[t] = [v[t], e[t]];
                        else
                            x.always(e[x.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || b;
                    return n && n.abort(t),
                    i(0, t),
                    this
                }
            };
            if (h.promise(x).complete = g.add,
            x.success = x.done,
            x.error = x.fail,
            u.url = ((e || u.url || xt) + "").replace(ut, "").replace(vt, kt[1] + "//"),
            u.type = t.method || t.type || u.method || u.type,
            u.dataTypes = ee.trim(u.dataType || "*").toLowerCase().match(fe) || [""],
            null == u.crossDomain && (l = yt.exec(u.url.toLowerCase()),
            u.crossDomain = !(!l || l[1] === kt[1] && l[2] === kt[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (kt[3] || ("http:" === kt[1] ? "80" : "443")))),
            u.data && u.processData && "string" != typeof u.data && (u.data = ee.param(u.data, u.traditional)),
            M(mt, u, t, x),
            2 === w)
                return x;
            c = ee.event && u.global,
            c && 0 == ee.active++ && ee.event.trigger("ajaxStart"),
            u.type = u.type.toUpperCase(),
            u.hasContent = !gt.test(u.type),
            o = u.url,
            u.hasContent || (u.data && (o = u.url += (dt.test(o) ? "&" : "?") + u.data,
            delete u.data),
            !1 === u.cache && (u.url = pt.test(o) ? o.replace(pt, "$1_=" + ct++) : o + (dt.test(o) ? "&" : "?") + "_=" + ct++)),
            u.ifModified && (ee.lastModified[o] && x.setRequestHeader("If-Modified-Since", ee.lastModified[o]),
            ee.etag[o] && x.setRequestHeader("If-None-Match", ee.etag[o])),
            (u.data && u.hasContent && !1 !== u.contentType || t.contentType) && x.setRequestHeader("Content-Type", u.contentType),
            x.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + bt + "; q=0.01" : "") : u.accepts["*"]);
            for (d in u.headers)
                x.setRequestHeader(d, u.headers[d]);
            if (u.beforeSend && (!1 === u.beforeSend.call(p, x, u) || 2 === w))
                return x.abort();
            b = "abort";
            for (d in {
                success: 1,
                error: 1,
                complete: 1
            })
                x[d](u[d]);
            if (n = M(wt, u, t, x)) {
                x.readyState = 1,
                c && f.trigger("ajaxSend", [x, u]),
                u.async && u.timeout > 0 && (a = setTimeout(function() {
                    x.abort("timeout")
                }, u.timeout));
                try {
                    w = 1,
                    n.send(y, i)
                } catch (e) {
                    if (!(w < 2))
                        throw e;
                    i(-1, e)
                }
            } else
                i(-1, "No Transport");
            return x
        },
        getJSON: function(e, t, i) {
            return ee.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return ee.get(e, void 0, t, "script")
        }
    }),
    ee.each(["get", "post"], function(e, t) {
        ee[t] = function(e, i, n, o) {
            return ee.isFunction(i) && (o = o || n,
            n = i,
            i = void 0),
            ee.ajax({
                url: e,
                type: t,
                dataType: o,
                data: i,
                success: n
            })
        }
    }),
    ee._evalUrl = function(e) {
        return ee.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    ee.fn.extend({
        wrapAll: function(e) {
            var t;
            return ee.isFunction(e) ? this.each(function(t) {
                ee(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = ee(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this)
        },
        wrapInner: function(e) {
            return ee.isFunction(e) ? this.each(function(t) {
                ee(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = ee(this)
                  , i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ee.isFunction(e);
            return this.each(function(i) {
                ee(this).wrapAll(t ? e.call(this, i) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ee.nodeName(this, "body") || ee(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    ee.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }
    ,
    ee.expr.filters.visible = function(e) {
        return !ee.expr.filters.hidden(e)
    }
    ;
    var Tt = /%20/g
      , St = /\[\]$/
      , Ct = /\r?\n/g
      , $t = /^(?:submit|button|image|reset|file)$/i
      , Et = /^(?:input|select|textarea|keygen)/i;
    ee.param = function(e, t) {
        var i, n = [], o = function(e, t) {
            t = ee.isFunction(t) ? t() : null == t ? "" : t,
            n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = ee.ajaxSettings && ee.ajaxSettings.traditional),
        ee.isArray(e) || e.jquery && !ee.isPlainObject(e))
            ee.each(e, function() {
                o(this.name, this.value)
            });
        else
            for (i in e)
                F(i, e[i], t, o);
        return n.join("&").replace(Tt, "+")
    }
    ,
    ee.fn.extend({
        serialize: function() {
            return ee.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ee.prop(this, "elements");
                return e ? ee.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ee(this).is(":disabled") && Et.test(this.nodeName) && !$t.test(e) && (this.checked || !Se.test(e))
            }).map(function(e, t) {
                var i = ee(this).val();
                return null == i ? null : ee.isArray(i) ? ee.map(i, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ct, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(Ct, "\r\n")
                }
            }).get()
        }
    }),
    ee.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    }
    ;
    var At = 0
      , Nt = {}
      , jt = {
        0: 200,
        1223: 204
    }
      , Dt = ee.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in Nt)
            Nt[e]()
    }),
    K.cors = !!Dt && "withCredentials"in Dt,
    K.ajax = Dt = !!Dt,
    ee.ajaxTransport(function(e) {
        var t;
        if (K.cors || Dt && !e.crossDomain)
            return {
                send: function(i, n) {
                    var o, r = e.xhr(), s = ++At;
                    if (r.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                        for (o in e.xhrFields)
                            r[o] = e.xhrFields[o];
                    e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType),
                    e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (o in i)
                        r.setRequestHeader(o, i[o]);
                    t = function(e) {
                        return function() {
                            t && (delete Nt[s],
                            t = r.onload = r.onerror = null,
                            "abort" === e ? r.abort() : "error" === e ? n(r.status, r.statusText) : n(jt[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {
                                text: r.responseText
                            } : void 0, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = t(),
                    r.onerror = t("error"),
                    t = Nt[s] = t("abort");
                    try {
                        r.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t)
                            throw e
                    }
                },
                abort: function() {
                    t && t()
                }
            }
    }),
    ee.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return ee.globalEval(e),
                e
            }
        }
    }),
    ee.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    ee.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, i;
            return {
                send: function(n, o) {
                    t = ee("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", i = function(e) {
                        t.remove(),
                        i = null,
                        e && o("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    J.head.appendChild(t[0])
                },
                abort: function() {
                    i && i()
                }
            }
        }
    });
    var Ot = []
      , Lt = /(=)\?(?=&|$)|\?\?/;
    ee.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ot.pop() || ee.expando + "_" + ct++;
            return this[e] = !0,
            e
        }
    }),
    ee.ajaxPrefilter("json jsonp", function(t, i, n) {
        var o, r, s, a = !1 !== t.jsonp && (Lt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Lt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0])
            return o = t.jsonpCallback = ee.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            a ? t[a] = t[a].replace(Lt, "$1" + o) : !1 !== t.jsonp && (t.url += (dt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
            t.converters["script json"] = function() {
                return s || ee.error(o + " was not called"),
                s[0]
            }
            ,
            t.dataTypes[0] = "json",
            r = e[o],
            e[o] = function() {
                s = arguments
            }
            ,
            n.always(function() {
                e[o] = r,
                t[o] && (t.jsonpCallback = i.jsonpCallback,
                Ot.push(o)),
                s && ee.isFunction(r) && r(s[0]),
                s = r = void 0
            }),
            "script"
    }),
    ee.parseHTML = function(e, t, i) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (i = t,
        t = !1),
        t = t || J;
        var n = ae.exec(e)
          , o = !i && [];
        return n ? [t.createElement(n[1])] : (n = ee.buildFragment([e], t, o),
        o && o.length && ee(o).remove(),
        ee.merge([], n.childNodes))
    }
    ;
    var Ht = ee.fn.load;
    ee.fn.load = function(e, t, i) {
        if ("string" != typeof e && Ht)
            return Ht.apply(this, arguments);
        var n, o, r, s = this, a = e.indexOf(" ");
        return a >= 0 && (n = ee.trim(e.slice(a)),
        e = e.slice(0, a)),
        ee.isFunction(t) ? (i = t,
        t = void 0) : t && "object" == typeof t && (o = "POST"),
        s.length > 0 && ee.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments,
            s.html(n ? ee("<div>").append(ee.parseHTML(e)).find(n) : e)
        }).complete(i && function(e, t) {
            s.each(i, r || [e.responseText, t, e])
        }
        ),
        this
    }
    ,
    ee.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ee.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    ee.expr.filters.animated = function(e) {
        return ee.grep(ee.timers, function(t) {
            return e === t.elem
        }).length
    }
    ;
    var Pt = e.document.documentElement;
    ee.offset = {
        setOffset: function(e, t, i) {
            var n, o, r, s, a, l, c, d = ee.css(e, "position"), u = ee(e), p = {};
            "static" === d && (e.style.position = "relative"),
            a = u.offset(),
            r = ee.css(e, "top"),
            l = ee.css(e, "left"),
            c = ("absolute" === d || "fixed" === d) && (r + l).indexOf("auto") > -1,
            c ? (n = u.position(),
            s = n.top,
            o = n.left) : (s = parseFloat(r) || 0,
            o = parseFloat(l) || 0),
            ee.isFunction(t) && (t = t.call(e, i, a)),
            null != t.top && (p.top = t.top - a.top + s),
            null != t.left && (p.left = t.left - a.left + o),
            "using"in t ? t.using.call(e, p) : u.css(p)
        }
    },
    ee.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    ee.offset.setOffset(this, e, t)
                });
            var t, i, n = this[0], o = {
                top: 0,
                left: 0
            }, r = n && n.ownerDocument;
            if (r)
                return t = r.documentElement,
                ee.contains(t, n) ? (void 0 !== n.getBoundingClientRect && (o = n.getBoundingClientRect()),
                i = z(r),
                {
                    top: o.top + i.pageYOffset - t.clientTop,
                    left: o.left + i.pageXOffset - t.clientLeft
                }) : o
        },
        position: function() {
            if (this[0]) {
                var e, t, i = this[0], n = {
                    top: 0,
                    left: 0
                };
                return "fixed" === ee.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                ee.nodeName(e[0], "html") || (n = e.offset()),
                n.top += ee.css(e[0], "borderTopWidth", !0),
                n.left += ee.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - ee.css(i, "marginTop", !0),
                    left: t.left - n.left - ee.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Pt; e && !ee.nodeName(e, "html") && "static" === ee.css(e, "position"); )
                    e = e.offsetParent;
                return e || Pt
            })
        }
    }),
    ee.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var n = "pageYOffset" === i;
        ee.fn[t] = function(o) {
            return ve(this, function(t, o, r) {
                var s = z(t);
                if (void 0 === r)
                    return s ? s[i] : t[o];
                s ? s.scrollTo(n ? e.pageXOffset : r, n ? r : e.pageYOffset) : t[o] = r
            }, t, o, arguments.length, null)
        }
    }),
    ee.each(["top", "left"], function(e, t) {
        ee.cssHooks[t] = k(K.pixelPosition, function(e, i) {
            if (i)
                return i = x(e, t),
                ze.test(i) ? ee(e).position()[t] + "px" : i
        })
    }),
    ee.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        ee.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(i, n) {
            ee.fn[n] = function(n, o) {
                var r = arguments.length && (i || "boolean" != typeof n)
                  , s = i || (!0 === n || !0 === o ? "margin" : "border");
                return ve(this, function(t, i, n) {
                    var o;
                    return ee.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === n ? ee.css(t, i, s) : ee.style(t, i, n, s)
                }, t, r ? n : void 0, r, null)
            }
        })
    }),
    ee.fn.size = function() {
        return this.length
    }
    ,
    ee.fn.andSelf = ee.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return ee
    });
    var qt = e.jQuery
      , Mt = e.$;
    return ee.noConflict = function(t) {
        return e.$ === ee && (e.$ = Mt),
        t && e.jQuery === ee && (e.jQuery = qt),
        ee
    }
    ,
    void 0 === t && (e.jQuery = e.$ = ee),
    ee
});
var protocol = document.location.protocol;
"https:" != protocol && (protocol = "http:");
var count = document.createElement("script");
count.type = "text/javascript",
count.async = !0,
count.src = protocol + "//hello.myfonts.net/count/3707d9";
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(count, s);
var browserName, browserVersion, webfontType;
if (void 0 === woffEnabled)
    var woffEnabled = !0;
var svgEnabled = 0
  , woff2Enabled = 1;
if ("undefined" != typeof customPath)
    var path = customPath;
else {
    var scripts = document.getElementsByTagName("SCRIPT")
      , script = scripts[scripts.length - 1].src;
    script.match("://") || "/" == script.charAt(0) || (script = "./" + script),
    path = script.replace(/\\/g, "/").replace(/\/[^\/]*\/?$/, "")
}
var wfpath = path + "/webfonts/"
  , browsers = [{
    regex: "MSIE (\\d+\\.\\d+)",
    versionRegex: "new Number(RegExp.$1)",
    type: [{
        version: 9,
        type: "woff"
    }, {
        version: 5,
        type: "eot"
    }]
}, {
    regex: "Trident/(\\d+\\.\\d+); (.+)?rv:(\\d+\\.\\d+)",
    versionRegex: "new Number(RegExp.$3)",
    type: [{
        version: 11,
        type: "woff"
    }]
}, {
    regex: "Firefox[/s](\\d+\\.\\d+)",
    versionRegex: "new Number(RegExp.$1)",
    type: [{
        version: 3.6,
        type: "woff"
    }, {
        version: 3.5,
        type: "ttf"
    }]
}, {
    regex: "Edge/(\\d+\\.\\d+)",
    versionRegex: "new Number(RegExp.$1)",
    type: [{
        version: 12,
        type: "woff"
    }]
}, {
    regex: "Chrome/(\\d+\\.\\d+)",
    versionRegex: "new Number(RegExp.$1)",
    type: [{
        version: 36,
        type: "woff2"
    }, {
        version: 6,
        type: "woff"
    }, {
        version: 4,
        type: "ttf"
    }]
}, {
    regex: "Mozilla.*Android (\\d+\\.\\d+).*AppleWebKit.*Safari",
    versionRegex: "new Number(RegExp.$1)",
    type: [{
        version: 4.1,
        type: "woff"
    }, {
        version: 3.1,
        type: "svg#wf"
    }, {
        version: 2.2,
        type: "ttf"
    }]
}, {
    regex: "Mozilla.*(iPhone|iPad).* OS (\\d+)_(\\d+).* AppleWebKit.*Safari",
    versionRegex: "new Number(RegExp.$2) + (new Number(RegExp.$3) / 10)",
    unhinted: !0,
    type: [{
        version: 5,
        type: "woff"
    }, {
        version: 4.2,
        type: "ttf"
    }, {
        version: 1,
        type: "svg#wf"
    }]
}, {
    regex: "Mozilla.*(iPhone|iPad|BlackBerry).*AppleWebKit.*Safari",
    versionRegex: "1.0",
    type: [{
        version: 1,
        type: "svg#wf"
    }]
}, {
    regex: "Version/(\\d+\\.\\d+)(\\.\\d+)? Safari/(\\d+\\.\\d+)",
    versionRegex: "new Number(RegExp.$1)",
    type: [{
        version: 5.1,
        type: "woff"
    }, {
        version: 3.1,
        type: "ttf"
    }]
}, {
    regex: "Opera/(\\d+\\.\\d+)(.+)Version/(\\d+\\.\\d+)(\\.\\d+)?",
    versionRegex: "new Number(RegExp.$3)",
    type: [{
        version: 24,
        type: "woff2"
    }, {
        version: 11.1,
        type: "woff"
    }, {
        version: 10.1,
        type: "ttf"
    }]
}]
  , browLen = browsers.length
  , suffix = ""
  , i = 0;
e: for (; i < browLen; i++) {
    var regex = new RegExp(browsers[i].regex);
    if (regex.test(navigator.userAgent)) {
        browserVersion = eval(browsers[i].versionRegex);
        var typeLen = browsers[i].type.length;
        for (j = 0; j < typeLen; j++)
            if (browserVersion >= browsers[i].type[j].version && (1 == browsers[i].unhinted && (suffix = "_unhinted"),
            "woff" != (webfontType = browsers[i].type[j].type) || woffEnabled) && ("woff2" != webfontType || woff2Enabled) && ("svg#wf" != webfontType || svgEnabled))
                break e
    } else
        webfontType = "woff"
}
/(Macintosh|Android)/.test(navigator.userAgent) && "svg#wf" != webfontType && (suffix = "_unhinted");
var head = document.getElementsByTagName("head")[0]
  , stylesheet = document.createElement("style");
stylesheet.setAttribute("type", "text/css"),
head.appendChild(stylesheet);
for (var fonts = [{
    fontFamily: "CeraPRO-Bold",
    url: wfpath + "3707D9_0" + suffix + "_0." + webfontType
}, {
    fontFamily: "CeraPRO-Medium",
    url: wfpath + "3707D9_1" + suffix + "_0." + webfontType
}], len = fonts.length, css = "", i = 0; i < len; i++) {
    var format = "svg#wf" == webfontType ? 'format("svg")' : "ttf" == webfontType ? 'format("truetype")' : "eot" == webfontType ? "" : 'format("' + webfontType + '")'
      , css = css + "@font-face{font-family: " + fonts[i].fontFamily + ";src:url(" + fonts[i].url + ")" + format + ";";
    fonts[i].fontWeight && (css += "font-weight: " + fonts[i].fontWeight + ";"),
    fonts[i].fontStyle && (css += "font-style: " + fonts[i].fontStyle + ";"),
    css += "}"
}
stylesheet.styleSheet ? stylesheet.styleSheet.cssText = css : stylesheet.innerHTML = css,
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    "use strict";
    var t = window.Slick || {};
    t = function() {
        function t(t, n) {
            var o, r = this;
            r.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: e(t),
                appendDots: e(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(t, i) {
                    return e('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            },
            r.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            },
            e.extend(r, r.initials),
            r.activeBreakpoint = null,
            r.animType = null,
            r.animProp = null,
            r.breakpoints = [],
            r.breakpointSettings = [],
            r.cssTransitions = !1,
            r.focussed = !1,
            r.interrupted = !1,
            r.hidden = "hidden",
            r.paused = !0,
            r.positionProp = null,
            r.respondTo = null,
            r.rowCount = 1,
            r.shouldClick = !0,
            r.$slider = e(t),
            r.$slidesCache = null,
            r.transformType = null,
            r.transitionType = null,
            r.visibilityChange = "visibilitychange",
            r.windowWidth = 0,
            r.windowTimer = null,
            o = e(t).data("slick") || {},
            r.options = e.extend({}, r.defaults, n, o),
            r.currentSlide = r.options.initialSlide,
            r.originalSettings = r.options,
            void 0 !== document.mozHidden ? (r.hidden = "mozHidden",
            r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden",
            r.visibilityChange = "webkitvisibilitychange"),
            r.autoPlay = e.proxy(r.autoPlay, r),
            r.autoPlayClear = e.proxy(r.autoPlayClear, r),
            r.autoPlayIterator = e.proxy(r.autoPlayIterator, r),
            r.changeSlide = e.proxy(r.changeSlide, r),
            r.clickHandler = e.proxy(r.clickHandler, r),
            r.selectHandler = e.proxy(r.selectHandler, r),
            r.setPosition = e.proxy(r.setPosition, r),
            r.swipeHandler = e.proxy(r.swipeHandler, r),
            r.dragHandler = e.proxy(r.dragHandler, r),
            r.keyHandler = e.proxy(r.keyHandler, r),
            r.instanceUid = i++,
            r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            r.registerBreakpoints(),
            r.init(!0)
        }
        var i = 0;
        return t
    }(),
    t.prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    t.prototype.addSlide = t.prototype.slickAdd = function(t, i, n) {
        var o = this;
        if ("boolean" == typeof i)
            n = i,
            i = null;
        else if (0 > i || i >= o.slideCount)
            return !1;
        o.unload(),
        "number" == typeof i ? 0 === i && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : n ? e(t).insertBefore(o.$slides.eq(i)) : e(t).insertAfter(o.$slides.eq(i)) : !0 === n ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack),
        o.$slides = o.$slideTrack.children(this.options.slide),
        o.$slideTrack.children(this.options.slide).detach(),
        o.$slideTrack.append(o.$slides),
        o.$slides.each(function(t, i) {
            e(i).attr("data-slick-index", t)
        }),
        o.$slidesCache = o.$slides,
        o.reinit()
    }
    ,
    t.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }
    ,
    t.prototype.animateSlide = function(t, i) {
        var n = {}
          , o = this;
        o.animateHeight(),
        !0 === o.options.rtl && !1 === o.options.vertical && (t = -t),
        !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
            left: t
        }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
            top: t
        }, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
        e({
            animStart: o.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(e) {
                e = Math.ceil(e),
                !1 === o.options.vertical ? (n[o.animType] = "translate(" + e + "px, 0px)",
                o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + e + "px)",
                o.$slideTrack.css(n))
            },
            complete: function() {
                i && i.call()
            }
        })) : (o.applyTransition(),
        t = Math.ceil(t),
        !1 === o.options.vertical ? n[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + t + "px, 0px)",
        o.$slideTrack.css(n),
        i && setTimeout(function() {
            o.disableTransition(),
            i.call()
        }, o.options.speed))
    }
    ,
    t.prototype.getNavTarget = function() {
        var t = this
          , i = t.options.asNavFor;
        return i && null !== i && (i = e(i).not(t.$slider)),
        i
    }
    ,
    t.prototype.asNavFor = function(t) {
        var i = this
          , n = i.getNavTarget();
        null !== n && "object" == typeof n && n.each(function() {
            var i = e(this).slick("getSlick");
            i.unslicked || i.slideHandler(t, !0)
        })
    }
    ,
    t.prototype.applyTransition = function(e) {
        var t = this
          , i = {};
        !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase,
        !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }
    ,
    t.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(),
        e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }
    ,
    t.prototype.autoPlayClear = function() {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer)
    }
    ,
    t.prototype.autoPlayIterator = function() {
        var e = this
          , t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll,
        e.currentSlide - 1 == 0 && (e.direction = 1))),
        e.slideHandler(t))
    }
    ,
    t.prototype.buildArrows = function() {
        var t = this;
        !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"),
        t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"),
        t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows),
        t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows),
        !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    t.prototype.buildDots = function() {
        var t, i, n = this;
        if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
            for (n.$slider.addClass("slick-dotted"),
            i = e("<ul />").addClass(n.options.dotsClass),
            t = 0; t <= n.getDotCount(); t += 1)
                i.append(e("<li />").append(n.options.customPaging.call(this, n, t)));
            n.$dots = i.appendTo(n.options.appendDots),
            n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }
    ,
    t.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        t.slideCount = t.$slides.length,
        t.$slides.each(function(t, i) {
            e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
        }),
        t.$slider.addClass("slick-slider"),
        t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(),
        t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),
        t.$slideTrack.css("opacity", 0),
        (!0 === t.options.centerMode || !0 === t.options.swipeToSlide) && (t.options.slidesToScroll = 1),
        e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
        t.setupInfinite(),
        t.buildArrows(),
        t.buildDots(),
        t.updateDots(),
        t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
        !0 === t.options.draggable && t.$list.addClass("draggable")
    }
    ,
    t.prototype.buildRows = function() {
        var e, t, i, n, o, r, s, a = this;
        if (n = document.createDocumentFragment(),
        r = a.$slider.children(),
        a.options.rows > 1) {
            for (s = a.options.slidesPerRow * a.options.rows,
            o = Math.ceil(r.length / s),
            e = 0; o > e; e++) {
                var l = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var c = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var d = e * s + (t * a.options.slidesPerRow + i);
                        r.get(d) && c.appendChild(r.get(d))
                    }
                    l.appendChild(c)
                }
                n.appendChild(l)
            }
            a.$slider.empty().append(n),
            a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    t.prototype.checkResponsive = function(t, i) {
        var n, o, r, s = this, a = !1, l = s.$slider.width(), c = window.innerWidth || e(window).width();
        if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)),
        s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            o = null;
            for (n in s.breakpoints)
                s.breakpoints.hasOwnProperty(n) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[n] && (o = s.breakpoints[n]) : r > s.breakpoints[n] && (o = s.breakpoints[n]));
            null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || i) && (s.activeBreakpoint = o,
            "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]),
            !0 === t && (s.currentSlide = s.options.initialSlide),
            s.refresh(t)),
            a = o) : (s.activeBreakpoint = o,
            "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]),
            !0 === t && (s.currentSlide = s.options.initialSlide),
            s.refresh(t)),
            a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null,
            s.options = s.originalSettings,
            !0 === t && (s.currentSlide = s.options.initialSlide),
            s.refresh(t),
            a = o),
            t || !1 === a || s.$slider.trigger("breakpoint", [s, a])
        }
    }
    ,
    t.prototype.changeSlide = function(t, i) {
        var n, o, r, s = this, a = e(t.currentTarget);
        switch (a.is("a") && t.preventDefault(),
        a.is("li") || (a = a.closest("li")),
        r = s.slideCount % s.options.slidesToScroll != 0,
        n = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll,
        t.data.message) {
        case "previous":
            o = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n,
            s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, i);
            break;
        case "next":
            o = 0 === n ? s.options.slidesToScroll : n,
            s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, i);
            break;
        case "index":
            var l = 0 === t.data.index ? 0 : t.data.index || a.index() * s.options.slidesToScroll;
            s.slideHandler(s.checkNavigable(l), !1, i),
            a.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    t.prototype.checkNavigable = function(e) {
        var t, i;
        if (t = this.getNavigableIndexes(),
        i = 0,
        e > t[t.length - 1])
            e = t[t.length - 1];
        else
            for (var n in t) {
                if (e < t[n]) {
                    e = i;
                    break
                }
                i = t[n]
            }
        return e
    }
    ,
    t.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots && null !== t.$dots && e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
        t.$slider.off("focus.slick blur.slick"),
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
        t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)),
        t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
        t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
        t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
        t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
        t.$list.off("click.slick", t.clickHandler),
        e(document).off(t.visibilityChange, t.visibility),
        t.cleanUpSlideEvents(),
        !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler),
        !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler),
        e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange),
        e(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
        e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault),
        e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition),
        e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }
    ,
    t.prototype.cleanUpSlideEvents = function() {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
        t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }
    ,
    t.prototype.cleanUpRows = function() {
        var e, t = this;
        t.options.rows > 1 && (e = t.$slides.children().children(),
        e.removeAttr("style"),
        t.$slider.empty().append(e))
    }
    ,
    t.prototype.clickHandler = function(e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(),
        e.stopPropagation(),
        e.preventDefault())
    }
    ,
    t.prototype.destroy = function(t) {
        var i = this;
        i.autoPlayClear(),
        i.touchObject = {},
        i.cleanUpEvents(),
        e(".slick-cloned", i.$slider).detach(),
        i.$dots && i.$dots.remove(),
        i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()),
        i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()),
        i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            e(this).attr("style", e(this).data("originalStyling"))
        }),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slideTrack.detach(),
        i.$list.detach(),
        i.$slider.append(i.$slides)),
        i.cleanUpRows(),
        i.$slider.removeClass("slick-slider"),
        i.$slider.removeClass("slick-initialized"),
        i.$slider.removeClass("slick-dotted"),
        i.unslicked = !0,
        t || i.$slider.trigger("destroy", [i])
    }
    ,
    t.prototype.disableTransition = function(e) {
        var t = this
          , i = {};
        i[t.transitionType] = "",
        !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }
    ,
    t.prototype.fadeSlide = function(e, t) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(e).css({
            zIndex: i.options.zIndex
        }),
        i.$slides.eq(e).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e),
        i.$slides.eq(e).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }),
        t && setTimeout(function() {
            i.disableTransition(e),
            t.call()
        }, i.options.speed))
    }
    ,
    t.prototype.fadeSlideOut = function(e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e),
        t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }
    ,
    t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides,
        t.unload(),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slidesCache.filter(e).appendTo(t.$slideTrack),
        t.reinit())
    }
    ,
    t.prototype.focusHandler = function() {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
            i.stopImmediatePropagation();
            var n = e(this);
            setTimeout(function() {
                t.options.pauseOnFocus && (t.focussed = n.is(":focus"),
                t.autoPlay())
            }, 0)
        })
    }
    ,
    t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }
    ,
    t.prototype.getDotCount = function() {
        var e = this
          , t = 0
          , i = 0
          , n = 0;
        if (!0 === e.options.infinite)
            for (; t < e.slideCount; )
                ++n,
                t = i + e.options.slidesToScroll,
                i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (!0 === e.options.centerMode)
            n = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount; )
                ++n,
                t = i + e.options.slidesToScroll,
                i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else
            n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return n - 1
    }
    ,
    t.prototype.getLeft = function(e) {
        var t, i, n, o = this, r = 0;
        return o.slideOffset = 0,
        i = o.$slides.first().outerHeight(!0),
        !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1,
        r = i * o.options.slidesToShow * -1),
        o.slideCount % o.options.slidesToScroll != 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1,
        r = (o.options.slidesToShow - (e - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1,
        r = o.slideCount % o.options.slidesToScroll * i * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth,
        r = (e + o.options.slidesToShow - o.slideCount) * i),
        o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0,
        r = 0),
        !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0,
        o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)),
        t = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * i * -1 + r,
        !0 === o.options.variableWidth && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow),
        t = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0,
        !0 === o.options.centerMode && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1),
        t = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0,
        t += (o.$list.width() - n.outerWidth()) / 2)),
        t
    }
    ,
    t.prototype.getOption = t.prototype.slickGetOption = function(e) {
        return this.options[e]
    }
    ,
    t.prototype.getNavigableIndexes = function() {
        var e, t = this, i = 0, n = 0, o = [];
        for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll,
        n = -1 * t.options.slidesToScroll,
        e = 2 * t.slideCount); e > i; )
            o.push(i),
            i = n + t.options.slidesToScroll,
            n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o
    }
    ,
    t.prototype.getSlick = function() {
        return this
    }
    ,
    t.prototype.getSlideCount = function() {
        var t, i, n, o = this;
        return n = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0,
        !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(t, r) {
            return r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * o.swipeLeft ? (i = r,
            !1) : void 0
        }),
        t = Math.abs(e(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }
    ,
    t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }
    ,
    t.prototype.init = function(t) {
        var i = this;
        e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"),
        i.buildRows(),
        i.buildOut(),
        i.setProps(),
        i.startLoad(),
        i.loadSlider(),
        i.initializeEvents(),
        i.updateArrows(),
        i.updateDots(),
        i.checkResponsive(!0),
        i.focusHandler()),
        t && i.$slider.trigger("init", [i]),
        !0 === i.options.accessibility && i.initADA(),
        i.options.autoplay && (i.paused = !1,
        i.autoPlay())
    }
    ,
    t.prototype.initADA = function() {
        var t = this;
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        t.$slideTrack.attr("role", "listbox"),
        t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i) {
            e(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + t.instanceUid + i
            })
        }),
        null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(i) {
            e(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + t.instanceUid + i,
                id: "slick-slide" + t.instanceUid + i
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"),
        t.activateADA()
    }
    ,
    t.prototype.initArrowEvents = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide),
        e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide))
    }
    ,
    t.prototype.initDotEvents = function() {
        var t = this;
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide),
        !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }
    ,
    t.prototype.initSlideEvents = function() {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
        t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
    }
    ,
    t.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents(),
        t.initDotEvents(),
        t.initSlideEvents(),
        t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler),
        t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler),
        t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler),
        t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler),
        t.$list.on("click.slick", t.clickHandler),
        e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
        !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler),
        !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
        e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)),
        e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)),
        e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault),
        e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
        e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }
    ,
    t.prototype.initUI = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(),
        e.$nextArrow.show()),
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }
    ,
    t.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "next" : "previous"
            }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "previous" : "next"
            }
        }))
    }
    ,
    t.prototype.lazyLoad = function() {
        function t(t) {
            e("img[data-lazy]", t).each(function() {
                var t = e(this)
                  , i = e(this).attr("data-lazy")
                  , n = document.createElement("img");
                n.onload = function() {
                    t.animate({
                        opacity: 0
                    }, 100, function() {
                        t.attr("src", i).animate({
                            opacity: 1
                        }, 200, function() {
                            t.removeAttr("data-lazy").removeClass("slick-loading")
                        }),
                        s.$slider.trigger("lazyLoaded", [s, t, i])
                    })
                }
                ,
                n.onerror = function() {
                    t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    s.$slider.trigger("lazyLoadError", [s, t, i])
                }
                ,
                n.src = i
            })
        }
        var i, n, o, r, s = this;
        !0 === s.options.centerMode ? !0 === s.options.infinite ? (o = s.currentSlide + (s.options.slidesToShow / 2 + 1),
        r = o + s.options.slidesToShow + 2) : (o = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)),
        r = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (o = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide,
        r = Math.ceil(o + s.options.slidesToShow),
        !0 === s.options.fade && (o > 0 && o--,
        r <= s.slideCount && r++)),
        i = s.$slider.find(".slick-slide").slice(o, r),
        t(i),
        s.slideCount <= s.options.slidesToShow ? (n = s.$slider.find(".slick-slide"),
        t(n)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (n = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow),
        t(n)) : 0 === s.currentSlide && (n = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow),
        t(n))
    }
    ,
    t.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(),
        e.$slideTrack.css({
            opacity: 1
        }),
        e.$slider.removeClass("slick-loading"),
        e.initUI(),
        "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }
    ,
    t.prototype.next = t.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    t.prototype.orientationChange = function() {
        var e = this;
        e.checkResponsive(),
        e.setPosition()
    }
    ,
    t.prototype.pause = t.prototype.slickPause = function() {
        var e = this;
        e.autoPlayClear(),
        e.paused = !0
    }
    ,
    t.prototype.play = t.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(),
        e.options.autoplay = !0,
        e.paused = !1,
        e.focussed = !1,
        e.interrupted = !1
    }
    ,
    t.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]),
        t.animating = !1,
        t.setPosition(),
        t.swipeLeft = null,
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility && t.initADA())
    }
    ,
    t.prototype.prev = t.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    t.prototype.preventDefault = function(e) {
        e.preventDefault()
    }
    ,
    t.prototype.progressiveLazyLoad = function(t) {
        t = t || 1;
        var i, n, o, r = this, s = e("img[data-lazy]", r.$slider);
        s.length ? (i = s.first(),
        n = i.attr("data-lazy"),
        o = document.createElement("img"),
        o.onload = function() {
            i.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"),
            !0 === r.options.adaptiveHeight && r.setPosition(),
            r.$slider.trigger("lazyLoaded", [r, i, n]),
            r.progressiveLazyLoad()
        }
        ,
        o.onerror = function() {
            3 > t ? setTimeout(function() {
                r.progressiveLazyLoad(t + 1)
            }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            r.$slider.trigger("lazyLoadError", [r, i, n]),
            r.progressiveLazyLoad())
        }
        ,
        o.src = n) : r.$slider.trigger("allImagesLoaded", [r])
    }
    ,
    t.prototype.refresh = function(t) {
        var i, n, o = this;
        n = o.slideCount - o.options.slidesToShow,
        !o.options.infinite && o.currentSlide > n && (o.currentSlide = n),
        o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
        i = o.currentSlide,
        o.destroy(!0),
        e.extend(o, o.initials, {
            currentSlide: i
        }),
        o.init(),
        t || o.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }
    ,
    t.prototype.registerBreakpoints = function() {
        var t, i, n, o = this, r = o.options.responsive || null;
        if ("array" === e.type(r) && r.length) {
            o.respondTo = o.options.respondTo || "window";
            for (t in r)
                if (n = o.breakpoints.length - 1,
                i = r[t].breakpoint,
                r.hasOwnProperty(t)) {
                    for (; n >= 0; )
                        o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1),
                        n--;
                    o.breakpoints.push(i),
                    o.breakpointSettings[i] = r[t].settings
                }
            o.breakpoints.sort(function(e, t) {
                return o.options.mobileFirst ? e - t : t - e
            })
        }
    }
    ,
    t.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"),
        t.slideCount = t.$slides.length,
        t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
        t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
        t.registerBreakpoints(),
        t.setProps(),
        t.setupInfinite(),
        t.buildArrows(),
        t.updateArrows(),
        t.initArrowEvents(),
        t.buildDots(),
        t.updateDots(),
        t.initDotEvents(),
        t.cleanUpSlideEvents(),
        t.initSlideEvents(),
        t.checkResponsive(!1, !0),
        !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
        t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
        t.setPosition(),
        t.focusHandler(),
        t.paused = !t.options.autoplay,
        t.autoPlay(),
        t.$slider.trigger("reInit", [t])
    }
    ,
    t.prototype.resize = function() {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay),
        t.windowDelay = window.setTimeout(function() {
            t.windowWidth = e(window).width(),
            t.checkResponsive(),
            t.unslicked || t.setPosition()
        }, 50))
    }
    ,
    t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
        var n = this;
        return "boolean" == typeof e ? (t = e,
        e = !0 === t ? 0 : n.slideCount - 1) : e = !0 === t ? --e : e,
        !(n.slideCount < 1 || 0 > e || e > n.slideCount - 1) && (n.unload(),
        !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(),
        n.$slides = n.$slideTrack.children(this.options.slide),
        n.$slideTrack.children(this.options.slide).detach(),
        n.$slideTrack.append(n.$slides),
        n.$slidesCache = n.$slides,
        void n.reinit())
    }
    ,
    t.prototype.setCSS = function(e) {
        var t, i, n = this, o = {};
        !0 === n.options.rtl && (e = -e),
        t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px",
        i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px",
        o[n.positionProp] = e,
        !1 === n.transformsEnabled ? n.$slideTrack.css(o) : (o = {},
        !1 === n.cssTransitions ? (o[n.animType] = "translate(" + t + ", " + i + ")",
        n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)",
        n.$slideTrack.css(o)))
    }
    ,
    t.prototype.setDimensions = function() {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow),
        !0 === e.options.centerMode && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })),
        e.listWidth = e.$list.width(),
        e.listHeight = e.$list.height(),
        !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow),
        e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth),
        e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }
    ,
    t.prototype.setFade = function() {
        var t, i = this;
        i.$slides.each(function(n, o) {
            t = i.slideWidth * n * -1,
            !0 === i.options.rtl ? e(o).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : e(o).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            })
        }),
        i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    t.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }
    ,
    t.prototype.setOption = t.prototype.slickSetOption = function() {
        var t, i, n, o, r, s = this, a = !1;
        if ("object" === e.type(arguments[0]) ? (n = arguments[0],
        a = arguments[1],
        r = "multiple") : "string" === e.type(arguments[0]) && (n = arguments[0],
        o = arguments[1],
        a = arguments[2],
        "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")),
        "single" === r)
            s.options[n] = o;
        else if ("multiple" === r)
            e.each(n, function(e, t) {
                s.options[e] = t
            });
        else if ("responsive" === r)
            for (i in o)
                if ("array" !== e.type(s.options.responsive))
                    s.options.responsive = [o[i]];
                else {
                    for (t = s.options.responsive.length - 1; t >= 0; )
                        s.options.responsive[t].breakpoint === o[i].breakpoint && s.options.responsive.splice(t, 1),
                        t--;
                    s.options.responsive.push(o[i])
                }
        a && (s.unload(),
        s.reinit())
    }
    ,
    t.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(),
        e.setHeight(),
        !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(),
        e.$slider.trigger("setPosition", [e])
    }
    ,
    t.prototype.setProps = function() {
        var e = this
          , t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left",
        "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"),
        (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && !0 === e.options.useCSS && (e.cssTransitions = !0),
        e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex),
        void 0 !== t.OTransform && (e.animType = "OTransform",
        e.transformType = "-o-transform",
        e.transitionType = "OTransition",
        void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
        void 0 !== t.MozTransform && (e.animType = "MozTransform",
        e.transformType = "-moz-transform",
        e.transitionType = "MozTransition",
        void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)),
        void 0 !== t.webkitTransform && (e.animType = "webkitTransform",
        e.transformType = "-webkit-transform",
        e.transitionType = "webkitTransition",
        void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
        void 0 !== t.msTransform && (e.animType = "msTransform",
        e.transformType = "-ms-transform",
        e.transitionType = "msTransition",
        void 0 === t.msTransform && (e.animType = !1)),
        void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform",
        e.transformType = "transform",
        e.transitionType = "transition"),
        e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }
    ,
    t.prototype.setSlideClasses = function(e) {
        var t, i, n, o, r = this;
        i = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        r.$slides.eq(e).addClass("slick-current"),
        !0 === r.options.centerMode ? (t = Math.floor(r.options.slidesToShow / 2),
        !0 === r.options.infinite && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = r.options.slidesToShow + e,
        i.slice(n - t + 1, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")),
        0 === e ? i.eq(i.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && i.eq(r.options.slidesToShow).addClass("slick-center")),
        r.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= r.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow,
        n = !0 === r.options.infinite ? r.options.slidesToShow + e : e,
        r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? i.slice(n - (r.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")),
        "ondemand" === r.options.lazyLoad && r.lazyLoad()
    }
    ,
    t.prototype.setupInfinite = function() {
        var t, i, n, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1),
        !0 === o.options.infinite && !1 === o.options.fade && (i = null,
        o.slideCount > o.options.slidesToShow)) {
            for (n = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow,
            t = o.slideCount; t > o.slideCount - n; t -= 1)
                i = t - 1,
                e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (t = 0; n > t; t += 1)
                i = t,
                e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                e(this).attr("id", "")
            })
        }
    }
    ,
    t.prototype.interrupt = function(e) {
        var t = this;
        e || t.autoPlay(),
        t.interrupted = e
    }
    ,
    t.prototype.selectHandler = function(t) {
        var i = this
          , n = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide")
          , o = parseInt(n.attr("data-slick-index"));
        return o || (o = 0),
        i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(o),
        void i.asNavFor(o)) : void i.slideHandler(o)
    }
    ,
    t.prototype.slideHandler = function(e, t, i) {
        var n, o, r, s, a, l = null, c = this;
        return t = t || !1,
        !0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e || c.slideCount <= c.options.slidesToShow ? void 0 : (!1 === t && c.asNavFor(e),
        n = e,
        l = c.getLeft(n),
        s = c.getLeft(c.currentSlide),
        c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft,
        !1 === c.options.infinite && !1 === c.options.centerMode && (0 > e || e > c.getDotCount() * c.options.slidesToScroll) ? void (!1 === c.options.fade && (n = c.currentSlide,
        !0 !== i ? c.animateSlide(s, function() {
            c.postSlide(n)
        }) : c.postSlide(n))) : !1 === c.options.infinite && !0 === c.options.centerMode && (0 > e || e > c.slideCount - c.options.slidesToScroll) ? void (!1 === c.options.fade && (n = c.currentSlide,
        !0 !== i ? c.animateSlide(s, function() {
            c.postSlide(n)
        }) : c.postSlide(n))) : (c.options.autoplay && clearInterval(c.autoPlayTimer),
        o = 0 > n ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n,
        c.animating = !0,
        c.$slider.trigger("beforeChange", [c, c.currentSlide, o]),
        r = c.currentSlide,
        c.currentSlide = o,
        c.setSlideClasses(c.currentSlide),
        c.options.asNavFor && (a = c.getNavTarget(),
        a = a.slick("getSlick"),
        a.slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)),
        c.updateDots(),
        c.updateArrows(),
        !0 === c.options.fade ? (!0 !== i ? (c.fadeSlideOut(r),
        c.fadeSlide(o, function() {
            c.postSlide(o)
        })) : c.postSlide(o),
        void c.animateHeight()) : void (!0 !== i ? c.animateSlide(l, function() {
            c.postSlide(o)
        }) : c.postSlide(o))))
    }
    ,
    t.prototype.startLoad = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(),
        e.$nextArrow.hide()),
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(),
        e.$slider.addClass("slick-loading")
    }
    ,
    t.prototype.swipeDirection = function() {
        var e, t, i, n, o = this;
        return e = o.touchObject.startX - o.touchObject.curX,
        t = o.touchObject.startY - o.touchObject.curY,
        i = Math.atan2(t, e),
        n = Math.round(180 * i / Math.PI),
        0 > n && (n = 360 - Math.abs(n)),
        45 >= n && n >= 0 ? !1 === o.options.rtl ? "left" : "right" : 360 >= n && n >= 315 ? !1 === o.options.rtl ? "left" : "right" : n >= 135 && 225 >= n ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? n >= 35 && 135 >= n ? "down" : "up" : "vertical"
    }
    ,
    t.prototype.swipeEnd = function(e) {
        var t, i, n = this;
        if (n.dragging = !1,
        n.interrupted = !1,
        n.shouldClick = !(n.touchObject.swipeLength > 10),
        void 0 === n.touchObject.curX)
            return !1;
        if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]),
        n.touchObject.swipeLength >= n.touchObject.minSwipe) {
            switch (i = n.swipeDirection()) {
            case "left":
            case "down":
                t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(),
                n.currentDirection = 0;
                break;
            case "right":
            case "up":
                t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(),
                n.currentDirection = 1
            }
            "vertical" != i && (n.slideHandler(t),
            n.touchObject = {},
            n.$slider.trigger("swipe", [n, i]))
        } else
            n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide),
            n.touchObject = {})
    }
    ,
    t.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend"in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse")))
            switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1,
            t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold,
            !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
            e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
            }
    }
    ,
    t.prototype.swipeMove = function(e) {
        var t, i, n, o, r, s = this;
        return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null,
        !(!s.dragging || r && 1 !== r.length) && (t = s.getLeft(s.currentSlide),
        s.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX,
        s.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY,
        s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))),
        !0 === s.options.verticalSwiping && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))),
        i = s.swipeDirection(),
        "vertical" !== i ? (void 0 !== e.originalEvent && s.touchObject.swipeLength > 4 && e.preventDefault(),
        o = (!1 === s.options.rtl ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1),
        !0 === s.options.verticalSwiping && (o = s.touchObject.curY > s.touchObject.startY ? 1 : -1),
        n = s.touchObject.swipeLength,
        s.touchObject.edgeHit = !1,
        !1 === s.options.infinite && (0 === s.currentSlide && "right" === i || s.currentSlide >= s.getDotCount() && "left" === i) && (n = s.touchObject.swipeLength * s.options.edgeFriction,
        s.touchObject.edgeHit = !0),
        !1 === s.options.vertical ? s.swipeLeft = t + n * o : s.swipeLeft = t + n * (s.$list.height() / s.listWidth) * o,
        !0 === s.options.verticalSwiping && (s.swipeLeft = t + n * o),
        !0 !== s.options.fade && !1 !== s.options.touchMove && (!0 === s.animating ? (s.swipeLeft = null,
        !1) : void s.setCSS(s.swipeLeft))) : void 0)
    }
    ,
    t.prototype.swipeStart = function(e) {
        var t, i = this;
        return i.interrupted = !0,
        1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {},
        !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]),
        i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX,
        i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY,
        void (i.dragging = !0))
    }
    ,
    t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.appendTo(e.$slideTrack),
        e.reinit())
    }
    ,
    t.prototype.unload = function() {
        var t = this;
        e(".slick-cloned", t.$slider).remove(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(),
        t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(),
        t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    t.prototype.unslick = function(e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]),
        t.destroy()
    }
    ,
    t.prototype.updateArrows = function() {
        var e, t = this;
        e = Math.floor(t.options.slidesToShow / 2),
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    t.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"),
        e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }
    ,
    t.prototype.visibility = function() {
        var e = this;
        e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
    }
    ,
    e.fn.slick = function() {
        var e, i, n = this, o = arguments[0], r = Array.prototype.slice.call(arguments, 1), s = n.length;
        for (e = 0; s > e; e++)
            if ("object" == typeof o || void 0 === o ? n[e].slick = new t(n[e],o) : i = n[e].slick[o].apply(n[e].slick, r),
            void 0 !== i)
                return i;
        return n
    }
}),
$("#nav-icon").click(function() {
    $(".overlay").fadeToggle(200),
    $(this).toggleClass("open")
}),
$(".overlay").on("click", function() {
    $(".overlay").fadeToggle(200),
    $(".nav-button a").toggleClass("btn-open").toggleClass("btn-close"),
    open = !1
}),
$("a[href*=#]:not([href=#])").click(function() {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
        var e = $(this.hash);
        if (e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"),
        e.length)
            return $("html,body").animate({
                scrollTop: e.offset().top
            }, 1e3),
            !1
    }
}),
$.fn.moveIt = function() {
    var e = $(window)
      , t = [];
    $(this).each(function() {
        t.push(new moveItItem($(this)))
    }),
    window.addEventListener("scroll", function() {
        var i = e.scrollTop();
        t.forEach(function(e) {
            e.update(i)
        })
    }, {
        passive: !0
    })
}
,
window.matchMedia("screen and (max-width: 1100px)").matches && $(".oh").attr("data-scroll-speed", "3"),
window.matchMedia("screen and (max-width: 500px)").matches && $(".oh").attr("data-scroll-speed", "5");
var moveItItem = function(e) {
    this.el = $(e),
    this.speed = parseFloat(this.el.attr("data-scroll-speed"))
};
moveItItem.prototype.update = function(e) {
    this.el.css("transform", "translateY(" + -e / this.speed + "px)")
}
,
$(function() {
    $("[data-scroll-speed]").moveIt()
}),
$(".review-slider").slick({
    centerMode: !0,
    centerPadding: "0px",
    slidesToShow: 1,
    dots: !0,
    arrows: !1,
    autoplay: !0,
    autoplaySpeed: 1e4,
    fade: !0,
    cssEase: "linear",
    responsive: [{
        breakpoint: 480,
        settings: {
            arrows: !1,
            centerMode: !0,
            slidesToShow: 1
        }
    }]
}),
$(".slider-hero").slick({
    centerMode: !0,
    centerPadding: "0px",
    slidesToShow: 1,
    dots: !1,
    arrows: !0,
    autoplay: !0,
    autoplaySpeed: 1e4,
    fade: !0,
    cssEase: "linear",
    responsive: [{
        breakpoint: 999,
        settings: {
            arrows: !1,
            centerMode: !0,
            slidesToShow: 1
        }
    }]
}),
$(".accordion-button a").click(function(e) {
    e.preventDefault()
}),
$(".accordion-button").click(function() {
    $(".accordion-button").removeClass("on"),
    $(this).next().slideUp("slow"),
    1 == $(this).next().is(":hidden") && ($(this).addClass("on"),
    $(this).next().slideDown("slow"))
}),
$("#fields-marketingWebsiteExtras-field").hide(),
$("#fields-marketingWebsite-1").click(function() {
    $("#fields-marketingWebsite-1").is(":checked") ? $("#fields-marketingWebsiteExtras-field").fadeIn("slow") : $("#fields-marketingWebsiteExtras-field").hide()
}),
$("#fields-marketingWebsiteShopExtras-field").hide(),
$("#fields-marketingWebsiteShop-1").click(function() {
    $(this).is(":checked") ? $("#fields-marketingWebsiteShopExtras-field").fadeIn("slow") : $("#fields-marketingWebsiteShopExtras-field").hide()
}),
$("#fields-landingOrComingSoonPageExtras-field").hide(),
$("#fields-landingOrComingSoonPage-1").click(function() {
    $(this).is(":checked") ? $("#fields-landingOrComingSoonPageExtras-field").fadeIn("slow") : $("#fields-landingOrComingSoonPageExtras-field").hide()
}),
$("#fields-designVisualsDeliverables-field").hide(),
$("#fields-designVisuals-1").click(function() {
    $(this).is(":checked") ? $("#fields-designVisualsDeliverables-field").fadeIn("slow") : $("#fields-designVisualsDeliverables-field").hide()
}),
$(".form-help-open").click(function(e) {
    e.preventDefault()
}),
$(".form-help").hide(),
$(".form-help-open").click(function() {
    $(".form-help").slideToggle("slow", function() {})
}),
$("#aftercare-enquiry-form").hide(),
$(".jq-acenquire").click(function() {
    $("#aftercare-enquiry-form").show()
}),
$(".jq-essentials").click(function() {
    $("#fields-packageOfInterest-1").prop("checked", !0)
}),
$(".jq-standard").click(function() {
    $("#fields-packageOfInterest-2").prop("checked", !0)
}),
$(".jq-premium").click(function() {
    $("#fields-packageOfInterest-3").prop("checked", !0)
}),
$(".jq-marketing-website").click(function() {
    $("#fields-marketingWebsite-1").prop("checked", !0),
    $("#fields-marketingWebsiteExtras-field").fadeIn("slow")
}),
$(".jq-marketing-website-ecommerce").click(function() {
    $("#fields-marketingWebsiteShop-1").prop("checked", !0),
    $("#fields-marketingWebsiteShopExtras-field").fadeIn("slow")
}),
$(".jq-landing-or-coming-soon-page").click(function() {
    $("#fields-landingOrComingSoonPage-1").prop("checked", !0),
    $("#fields-landingOrComingSoonPageExtras-field").fadeIn("slow")
}),
$(".wrap-nav li a").removeClass("button");
