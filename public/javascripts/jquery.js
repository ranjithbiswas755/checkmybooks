! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";

    function n(e, t) {
        t = t || nt;
        var n = t.createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function r(e) {
        var t = !!e && "length" in e && e.length,
            n = gt.type(e);
        return "function" !== n && !gt.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function i(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function o(e, t, n) {
        return gt.isFunction(t) ? gt.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? gt.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? gt.grep(e, function(e) {
            return st.call(t, e) > -1 !== n
        }) : kt.test(t) ? gt.filter(t, e, n) : (t = gt.filter(t, e), gt.grep(e, function(e) {
            return st.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }

    function a(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function s(e) {
        var t = {};
        return gt.each(e.match(qt) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function u(e) {
        return e
    }

    function l(e) {
        throw e
    }

    function c(e, t, n, r) {
        var i;
        try {
            e && gt.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && gt.isFunction(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    function f() {
        nt.removeEventListener("DOMContentLoaded", f), e.removeEventListener("load", f), gt.ready()
    }

    function p() {
        this.expando = gt.expando + p.uid++
    }

    function d(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Mt.test(e) ? JSON.parse(e) : e)
    }

    function h(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(It, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = d(n)
                } catch (i) {}
                Rt.set(e, t, n)
            } else n = void 0;
        return n
    }

    function g(e, t, n, r) {
        var i, o = 1,
            a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return gt.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (gt.cssNumber[t] ? "" : "px"),
            c = (gt.cssNumber[t] || "px" !== l && +u) && $t.exec(gt.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3], n = n || [], c = +u || 1;
            do o = o || ".5", c /= o, gt.style(e, t, c + l); while (o !== (o = s() / u) && 1 !== o && --a)
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    function m(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = Xt[r];
        return i ? i : (t = n.body.appendChild(n.createElement(r)), i = gt.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), Xt[r] = i, i)
    }

    function v(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; a > o; o++) r = e[o], r.style && (n = r.style.display, t ? ("none" === n && (i[o] = Pt.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && _t(r) && (i[o] = m(r))) : "none" !== n && (i[o] = "none", Pt.set(r, "display", n)));
        for (o = 0; a > o; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }

    function y(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && i(e, t) ? gt.merge([e], n) : n
    }

    function x(e, t) {
        for (var n = 0, r = e.length; r > n; n++) Pt.set(e[n], "globalEval", !t || Pt.get(t[n], "globalEval"))
    }

    function b(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; h > d; d++)
            if (o = e[d], o || 0 === o)
                if ("object" === gt.type(o)) gt.merge(p, o.nodeType ? [o] : o);
                else if (Qt.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (Vt.exec(o) || ["", ""])[1].toLowerCase(), u = Yt[s] || Yt._default, a.innerHTML = u[1] + gt.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
            gt.merge(p, a.childNodes), a = f.firstChild, a.textContent = ""
        } else p.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; o = p[d++];)
            if (r && gt.inArray(o, r) > -1) i && i.push(o);
            else if (l = gt.contains(o.ownerDocument, o), a = y(f.appendChild(o), "script"), l && x(a), n)
            for (c = 0; o = a[c++];) Gt.test(o.type || "") && n.push(o);
        return f
    }

    function w() {
        return !0
    }

    function T() {
        return !1
    }

    function C() {
        try {
            return nt.activeElement
        } catch (e) {}
    }

    function E(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) E(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = T;
        else if (!i) return e;
        return 1 === o && (a = i, i = function(e) {
            return gt().off(e), a.apply(this, arguments)
        }, i.guid = a.guid || (a.guid = gt.guid++)), e.each(function() {
            gt.event.add(this, t, i, r, n)
        })
    }

    function k(e, t) {
        return i(e, "table") && i(11 !== t.nodeType ? t : t.firstChild, "tr") ? gt(">tbody", e)[0] || e : e
    }

    function S(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function N(e) {
        var t = on.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function D(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Pt.hasData(e) && (o = Pt.access(e), a = Pt.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; r > n; n++) gt.event.add(t, i, l[i][n])
            }
            Rt.hasData(e) && (s = Rt.access(e), u = gt.extend({}, s), Rt.set(t, u))
        }
    }

    function j(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ut.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function A(e, t, r, i) {
        t = ot.apply([], t);
        var o, a, s, u, l, c, f = 0,
            p = e.length,
            d = p - 1,
            h = t[0],
            g = gt.isFunction(h);
        if (g || p > 1 && "string" == typeof h && !dt.checkClone && rn.test(h)) return e.each(function(n) {
            var o = e.eq(n);
            g && (t[0] = h.call(this, n, o.html())), A(o, t, r, i)
        });
        if (p && (o = b(t, e[0].ownerDocument, !1, e, i), a = o.firstChild, 1 === o.childNodes.length && (o = a), a || i)) {
            for (s = gt.map(y(o, "script"), S), u = s.length; p > f; f++) l = o, f !== d && (l = gt.clone(l, !0, !0), u && gt.merge(s, y(l, "script"))), r.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, gt.map(s, N), f = 0; u > f; f++) l = s[f], Gt.test(l.type || "") && !Pt.access(l, "globalEval") && gt.contains(c, l) && (l.src ? gt._evalUrl && gt._evalUrl(l.src) : n(l.textContent.replace(an, ""), c))
        }
        return e
    }

    function q(e, t, n) {
        for (var r, i = t ? gt.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || gt.cleanData(y(r)), r.parentNode && (n && gt.contains(r.ownerDocument, r) && x(y(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function L(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || ln(e), n && (a = n.getPropertyValue(t) || n[t], "" !== a || gt.contains(e.ownerDocument, e) || (a = gt.style(e, t)), !dt.pixelMarginRight() && un.test(a) && sn.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function H(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function F(e) {
        if (e in gn) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = hn.length; n--;)
            if (e = hn[n] + t, e in gn) return e
    }

    function O(e) {
        var t = gt.cssProps[e];
        return t || (t = gt.cssProps[e] = F(e) || e), t
    }

    function P(e, t, n) {
        var r = $t.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function R(e, t, n, r, i) {
        var o, a = 0;
        for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; 4 > o; o += 2) "margin" === n && (a += gt.css(e, n + Bt[o], !0, i)), r ? ("content" === n && (a -= gt.css(e, "padding" + Bt[o], !0, i)), "margin" !== n && (a -= gt.css(e, "border" + Bt[o] + "Width", !0, i))) : (a += gt.css(e, "padding" + Bt[o], !0, i), "padding" !== n && (a += gt.css(e, "border" + Bt[o] + "Width", !0, i)));
        return a
    }

    function M(e, t, n) {
        var r, i = ln(e),
            o = L(e, t, i),
            a = "border-box" === gt.css(e, "boxSizing", !1, i);
        return un.test(o) ? o : (r = a && (dt.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), o = parseFloat(o) || 0, o + R(e, t, n || (a ? "border" : "content"), r, i) + "px")
    }

    function I(e, t, n, r, i) {
        return new I.prototype.init(e, t, n, r, i)
    }

    function W() {
        vn && (nt.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(W) : e.setTimeout(W, gt.fx.interval), gt.fx.tick())
    }

    function $() {
        return e.setTimeout(function() {
            mn = void 0
        }), mn = gt.now()
    }

    function B(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Bt[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function _(e, t, n) {
        for (var r, i = (U.tweeners[t] || []).concat(U.tweeners["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function z(e, t, n) {
        var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && _t(e),
            m = Pt.get(e, "fxshow");
        n.queue || (a = gt._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
            a.unqueued || s()
        }), a.unqueued++, p.always(function() {
            p.always(function() {
                a.unqueued--, gt.queue(e, "fx").length || a.empty.fire()
            })
        }));
        for (r in t)
            if (i = t[r], yn.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !m || void 0 === m[r]) continue;
                    g = !0
                }
                d[r] = m && m[r] || gt.style(e, r)
            }
        if (u = !gt.isEmptyObject(t), u || !gt.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], l = m && m.display, null == l && (l = Pt.get(e, "display")), c = gt.css(e, "display"), "none" === c && (l ? c = l : (v([e], !0), l = e.style.display || l, c = gt.css(e, "display"), v([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === gt.css(e, "float") && (u || (p.done(function() {
                h.display = l
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), u = !1;
            for (r in d) u || (m ? "hidden" in m && (g = m.hidden) : m = Pt.access(e, "fxshow", {
                display: l
            }), o && (m.hidden = !g), g && v([e], !0), p.done(function() {
                g || v([e]), Pt.remove(e, "fxshow");
                for (r in d) gt.style(e, r, d[r])
            })), u = _(g ? m[r] : 0, r, p), r in m || (m[r] = u.start, g && (u.end = u.start, u.start = 0))
        }
    }

    function X(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = gt.camelCase(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = gt.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function U(e, t, n) {
        var r, i, o = 0,
            a = U.prefilters.length,
            s = gt.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                for (var t = mn || $(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
                return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (u || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: gt.extend({}, t),
                opts: gt.extend(!0, {
                    specialEasing: {},
                    easing: gt.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: mn || $(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = gt.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (X(c, l.opts.specialEasing); a > o; o++)
            if (r = U.prefilters[o].call(l, e, c, l.opts)) return gt.isFunction(r.stop) && (gt._queueHooks(l.elem, l.opts.queue).stop = gt.proxy(r.stop, r)), r;
        return gt.map(c, _, l), gt.isFunction(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), gt.fx.timer(gt.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l
    }

    function V(e) {
        var t = e.match(qt) || [];
        return t.join(" ")
    }

    function G(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function Y(e, t, n, r) {
        var i;
        if (Array.isArray(t)) gt.each(t, function(t, i) {
            n || jn.test(e) ? r(e, i) : Y(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== gt.type(t)) r(e, t);
        else
            for (i in t) Y(e + "[" + i + "]", t[i], n, r)
    }

    function Q(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(qt) || [];
            if (gt.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function J(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, gt.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }
        var o = {},
            a = e === $n;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function K(e, t) {
        var n, r, i = gt.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && gt.extend(!0, e, r), e
    }

    function Z(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }

    function et(e, t, n, r) {
        var i, o, a, s, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (a = l[u + " " + o] || l["* " + o], !a)
                for (i in l)
                    if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                        a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (f) {
                    return {
                        state: "parsererror",
                        error: a ? f : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    var tt = [],
        nt = e.document,
        rt = Object.getPrototypeOf,
        it = tt.slice,
        ot = tt.concat,
        at = tt.push,
        st = tt.indexOf,
        ut = {},
        lt = ut.toString,
        ct = ut.hasOwnProperty,
        ft = ct.toString,
        pt = ft.call(Object),
        dt = {},
        ht = "3.2.1",
        gt = function(e, t) {
            return new gt.fn.init(e, t)
        },
        mt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        vt = /^-ms-/,
        yt = /-([a-z])/g,
        xt = function(e, t) {
            return t.toUpperCase()
        };
    gt.fn = gt.prototype = {
        jquery: ht,
        constructor: gt,
        length: 0,
        toArray: function() {
            return it.call(this)
        },
        get: function(e) {
            return null == e ? it.call(this) : 0 > e ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = gt.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return gt.each(this, e)
        },
        map: function(e) {
            return this.pushStack(gt.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(it.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: at,
        sort: tt.sort,
        splice: tt.splice
    }, gt.extend = gt.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || gt.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], r = e[t], a !== r && (l && r && (gt.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && gt.isPlainObject(n) ? n : {}, a[t] = gt.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, gt.extend({
        expando: "jQuery" + (ht + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === gt.type(e)
        },
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = gt.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== lt.call(e) || (t = rt(e)) && (n = ct.call(t, "constructor") && t.constructor, "function" != typeof n || ft.call(n) !== pt))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ut[lt.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            n(e)
        },
        camelCase: function(e) {
            return e.replace(vt, "ms-").replace(yt, xt)
        },
        each: function(e, t) {
            var n, i = 0;
            if (r(e))
                for (n = e.length; n > i && t.call(e[i], i, e[i]) !== !1; i++);
            else
                for (i in e)
                    if (t.call(e[i], i, e[i]) === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(mt, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (r(Object(e)) ? gt.merge(n, "string" == typeof e ? [e] : e) : at.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : st.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var i, o, a = 0,
                s = [];
            if (r(e))
                for (i = e.length; i > a; a++) o = t(e[a], a, n), null != o && s.push(o);
            else
                for (a in e) o = t(e[a], a, n), null != o && s.push(o);
            return ot.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t], t = e, e = n), gt.isFunction(e) ? (r = it.call(arguments, 2), i = function() {
                return e.apply(t || this, r.concat(it.call(arguments)))
            }, i.guid = e.guid = e.guid || gt.guid++, i) : void 0
        },
        now: Date.now,
        support: dt
    }), "function" == typeof Symbol && (gt.fn[Symbol.iterator] = tt[Symbol.iterator]), gt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ut["[object " + t + "]"] = t.toLowerCase()
    });
    var bt = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, u, l, c, p = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!r && ((t ? t.ownerDocument || t : $) !== H && L(t), t = t || H, O)) {
                if (11 !== h && (u = vt.exec(e)))
                    if (i = u[1]) {
                        if (9 === h) {
                            if (!(a = t.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (p && (a = p.getElementById(i)) && I(t, a) && a.id === i) return n.push(a), n
                    } else {
                        if (u[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = u[3]) && T.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(i)), n
                    }
                if (!(!T.qsa || U[e + " "] || P && P.test(e))) {
                    if (1 !== h) p = t, c = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(wt, Tt) : t.setAttribute("id", s = W), l = S(e), o = l.length; o--;) l[o] = "#" + s + " " + d(l[o]);
                        c = l.join(","), p = yt.test(e) && f(t.parentNode) || t
                    }
                    if (c) try {
                        return K.apply(n, p.querySelectorAll(c)), n
                    } catch (g) {} finally {
                        s === W && t.removeAttribute("id")
                    }
                }
            }
            return D(e.replace(st, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[W] = !0, e
        }

        function i(e) {
            var t = H.createElement("fieldset");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) C.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Et(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function c(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function f(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function p() {}

        function d(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function h(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = _++;
            return t.first ? function(t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function(t, n, u) {
                var l, c, f, p = [B, s];
                if (u) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || a)
                            if (f = t[W] || (t[W] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((l = c[o]) && l[0] === B && l[1] === s) return p[2] = l[2];
                                if (c[o] = p, p[2] = e(t, n, u)) return !0
                            } return !1
            }
        }

        function g(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
            return r
        }

        function v(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function y(e, t, n, i, o, a) {
            return i && !i[W] && (i = y(i)), o && !o[W] && (o = y(o, a)), r(function(r, a, s, u) {
                var l, c, f, p = [],
                    d = [],
                    h = a.length,
                    g = r || m(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !r && t ? g : v(g, p, e, s, u),
                    x = n ? o || (r ? e : h || i) ? [] : a : y;
                if (n && n(y, x, s, u), i)
                    for (l = v(x, d), i(l, [], s, u), c = l.length; c--;)(f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = x.length; c--;)(f = x[c]) && l.push(y[c] = f);
                            o(null, x = [], l, u)
                        }
                        for (c = x.length; c--;)(f = x[c]) && (l = o ? et(r, f) : p[c]) > -1 && (r[l] = !(a[l] = f))
                    }
                } else x = v(x === a ? x.splice(h, x.length) : x), o ? o(null, a, x, u) : K.apply(a, x)
            })
        }

        function x(e) {
            for (var t, n, r, i = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, u = h(function(e) {
                    return e === t
                }, a, !0), l = h(function(e) {
                    return et(t, e) > -1
                }, a, !0), c = [function(e, n, r) {
                    var i = !o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                    return t = null, i
                }]; i > s; s++)
                if (n = C.relative[e[s].type]) c = [h(g(c), n)];
                else {
                    if (n = C.filter[e[s].type].apply(null, e[s].matches), n[W]) {
                        for (r = ++s; i > r && !C.relative[e[r].type]; r++);
                        return y(s > 1 && g(c), s > 1 && d(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(st, "$1"), n, r > s && x(e.slice(s, r)), i > r && x(e = e.slice(r)), i > r && d(e))
                    }
                    c.push(n)
                }
            return g(c)
        }

        function b(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                a = function(r, a, s, u, l) {
                    var c, f, p, d = 0,
                        h = "0",
                        g = r && [],
                        m = [],
                        y = j,
                        x = r || o && C.find.TAG("*", l),
                        b = B += null == y ? 1 : Math.random() || .1,
                        w = x.length;
                    for (l && (j = a === H || a || l); h !== w && null != (c = x[h]); h++) {
                        if (o && c) {
                            for (f = 0, a || c.ownerDocument === H || (L(c), s = !O); p = e[f++];)
                                if (p(c, a || H, s)) {
                                    u.push(c);
                                    break
                                }
                            l && (B = b)
                        }
                        i && ((c = !p && c) && d--, r && g.push(c))
                    }
                    if (d += h, i && h !== d) {
                        for (f = 0; p = n[f++];) p(g, m, a, s);
                        if (r) {
                            if (d > 0)
                                for (; h--;) g[h] || m[h] || (m[h] = Q.call(u));
                            m = v(m)
                        }
                        K.apply(u, m), l && !r && m.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                    }
                    return l && (B = b, j = y), g
                };
            return i ? r(a) : a
        }
        var w, T, C, E, k, S, N, D, j, A, q, L, H, F, O, P, R, M, I, W = "sizzle" + 1 * new Date,
            $ = e.document,
            B = 0,
            _ = 0,
            z = n(),
            X = n(),
            U = n(),
            V = function(e, t) {
                return e === t && (q = !0), 0
            },
            G = {}.hasOwnProperty,
            Y = [],
            Q = Y.pop,
            J = Y.push,
            K = Y.push,
            Z = Y.slice,
            et = function(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            rt = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",
            it = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + nt + "*\\]",
            ot = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)",
            at = new RegExp(nt + "+", "g"),
            st = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            ut = new RegExp("^" + nt + "*," + nt + "*"),
            lt = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
            ft = new RegExp(ot),
            pt = new RegExp("^" + rt + "$"),
            dt = {
                ID: new RegExp("^#(" + rt + ")"),
                CLASS: new RegExp("^\\.(" + rt + ")"),
                TAG: new RegExp("^(" + rt + "|[*])"),
                ATTR: new RegExp("^" + it),
                PSEUDO: new RegExp("^" + ot),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + tt + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            },
            ht = /^(?:input|select|textarea|button)$/i,
            gt = /^h\d$/i,
            mt = /^[^{]+\{\s*\[native \w/,
            vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            yt = /[+~]/,
            xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            bt = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            wt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            Tt = function(e, t) {
                return t ? "\x00" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            Ct = function() {
                L()
            },
            Et = h(function(e) {
                return e.disabled === !0 && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            K.apply(Y = Z.call($.childNodes), $.childNodes), Y[$.childNodes.length].nodeType
        } catch (kt) {
            K = {
                apply: Y.length ? function(e, t) {
                    J.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        T = t.support = {}, k = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, L = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : $;
            return r !== H && 9 === r.nodeType && r.documentElement ? (H = r, F = H.documentElement, O = !k(H), $ !== H && (n = H.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ct, !1) : n.attachEvent && n.attachEvent("onunload", Ct)), T.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), T.getElementsByTagName = i(function(e) {
                return e.appendChild(H.createComment("")), !e.getElementsByTagName("*").length
            }), T.getElementsByClassName = mt.test(H.getElementsByClassName), T.getById = i(function(e) {
                return F.appendChild(e).id = W, !H.getElementsByName || !H.getElementsByName(W).length
            }), T.getById ? (C.filter.ID = function(e) {
                var t = e.replace(xt, bt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, C.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && O) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (C.filter.ID = function(e) {
                var t = e.replace(xt, bt);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, C.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && O) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if (n = o.getAttributeNode("id"), n && n.value === e) return [o];
                        for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                            if (n = o.getAttributeNode("id"), n && n.value === e) return [o]
                    }
                    return []
                }
            }), C.find.TAG = T.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, C.find.CLASS = T.getElementsByClassName && function(e, t) {
                return "undefined" != typeof t.getElementsByClassName && O ? t.getElementsByClassName(e) : void 0
            }, R = [], P = [], (T.qsa = mt.test(H.querySelectorAll)) && (i(function(e) {
                F.appendChild(e).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + nt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || P.push("\\[" + nt + "*(?:value|" + tt + ")"), e.querySelectorAll("[id~=" + W + "-]").length || P.push("~="), e.querySelectorAll(":checked").length || P.push(":checked"), e.querySelectorAll("a#" + W + "+*").length || P.push(".#.+[+~]")
            }), i(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = H.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && P.push("name" + nt + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && P.push(":enabled", ":disabled"), F.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && P.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), P.push(",.*:")
            })), (T.matchesSelector = mt.test(M = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && i(function(e) {
                T.disconnectedMatch = M.call(e, "*"), M.call(e, "[s!='']:x"), R.push("!=", ot)
            }), P = P.length && new RegExp(P.join("|")), R = R.length && new RegExp(R.join("|")), t = mt.test(F.compareDocumentPosition), I = t || mt.test(F.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, V = t ? function(e, t) {
                if (e === t) return q = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !T.sortDetached && t.compareDocumentPosition(e) === n ? e === H || e.ownerDocument === $ && I($, e) ? -1 : t === H || t.ownerDocument === $ && I($, t) ? 1 : A ? et(A, e) - et(A, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return q = !0, 0;
                var n, r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    u = [t];
                if (!i || !o) return e === H ? -1 : t === H ? 1 : i ? -1 : o ? 1 : A ? et(A, e) - et(A, t) : 0;
                if (i === o) return a(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; s[r] === u[r];) r++;
                return r ? a(s[r], u[r]) : s[r] === $ ? -1 : u[r] === $ ? 1 : 0
            }, H) : H
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== H && L(e), n = n.replace(ct, "='$1']"), !(!T.matchesSelector || !O || U[n + " "] || R && R.test(n) || P && P.test(n))) try {
                var r = M.call(e, n);
                if (r || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {}
            return t(n, H, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== H && L(e), I(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== H && L(e);
            var n = C.attrHandle[t.toLowerCase()],
                r = n && G.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== r ? r : T.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.escape = function(e) {
            return (e + "").replace(wt, Tt)
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (q = !T.detectDuplicates, A = !T.sortStable && e.slice(0), e.sort(V), q) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return A = null, e
        }, E = t.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += E(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += E(t);
            return n
        }, C = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: dt,
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
                    return e[1] = e[1].replace(xt, bt), e[3] = (e[3] || e[4] || e[5] || "").replace(xt, bt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return dt.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ft.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(xt, bt).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && z(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(at, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !u && !s,
                            x = !1;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (p = t; p = p[g];)
                                        if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && y) {
                                for (p = m, f = p[W] || (p[W] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), l = c[e] || [], d = l[0] === B && l[1], x = d && l[2], p = d && m.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
                                    if (1 === p.nodeType && ++x && p === t) {
                                        c[e] = [B, d, x];
                                        break
                                    }
                            } else if (y && (p = t, f = p[W] || (p[W] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), l = c[e] || [], d = l[0] === B && l[1], x = d), x === !1)
                                for (;
                                    (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++x || (y && (f = p[W] || (p[W] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), c[e] = [B, x]), p !== t)););
                            return x -= i, x === r || x % r === 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[W] ? o(n) : o.length > 1 ? (i = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;) r = et(e, i[a]), e[r] = !(t[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = N(e.replace(st, "$1"));
                    return i[W] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(xt, bt),
                        function(t) {
                            return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
                        }
                }),
                lang: r(function(e) {
                    return pt.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xt, bt).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === F
                },
                focus: function(e) {
                    return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: l(!1),
                disabled: l(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !C.pseudos.empty(e)
                },
                header: function(e) {
                    return gt.test(e.nodeName)
                },
                input: function(e) {
                    return ht.test(e.nodeName)
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
                eq: c(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) C.pseudos[w] = s(w);
        for (w in {
                submit: !0,
                reset: !0
            }) C.pseudos[w] = u(w);
        return p.prototype = C.filters = C.pseudos, C.setFilters = new p, S = t.tokenize = function(e, n) {
            var r, i, o, a, s, u, l, c = X[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, u = [], l = C.preFilter; s;) {
                r && !(i = ut.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = lt.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(st, " ")
                }), s = s.slice(r.length));
                for (a in C.filter) !(i = dt[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : X(e, u).slice(0)
        }, N = t.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = U[e + " "];
            if (!o) {
                for (t || (t = S(e)), n = t.length; n--;) o = x(t[n]), o[W] ? r.push(o) : i.push(o);
                o = U(e, b(i, r)), o.selector = e
            }
            return o
        }, D = t.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && S(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && O && C.relative[o[1].type]) {
                    if (t = (C.find.ID(a.matches[0].replace(xt, bt), t) || [])[0], !t) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = dt.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !C.relative[s = a.type]);)
                    if ((u = C.find[s]) && (r = u(a.matches[0].replace(xt, bt), yt.test(o[0].type) && f(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && d(o), !e) return K.apply(n, r), n;
                        break
                    }
            }
            return (l || N(e, c))(r, t, !O, n, !t || yt.test(e) && f(t.parentNode) || t), n
        }, T.sortStable = W.split("").sort(V).join("") === W, T.detectDuplicates = !!q, L(), T.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(H.createElement("fieldset"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), T.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(tt, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    gt.find = bt, gt.expr = bt.selectors, gt.expr[":"] = gt.expr.pseudos, gt.uniqueSort = gt.unique = bt.uniqueSort, gt.text = bt.getText, gt.isXMLDoc = bt.isXML, gt.contains = bt.contains, gt.escapeSelector = bt.escape;
    var wt = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && gt(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        Tt = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        Ct = gt.expr.match.needsContext,
        Et = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        kt = /^.[^:#\[\.,]*$/;
    gt.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? gt.find.matchesSelector(r, e) ? [r] : [] : gt.find.matches(e, gt.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, gt.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(gt(e).filter(function() {
                for (t = 0; r > t; t++)
                    if (gt.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; r > t; t++) gt.find(e, i[t], n);
            return r > 1 ? gt.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(o(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(o(this, e || [], !0))
        },
        is: function(e) {
            return !!o(this, "string" == typeof e && Ct.test(e) ? gt(e) : e || [], !1).length
        }
    });
    var St, Nt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        Dt = gt.fn.init = function(e, t, n) {
            var r, i;
            if (!e) return this;
            if (n = n || St, "string" == typeof e) {
                if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Nt.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof gt ? t[0] : t, gt.merge(this, gt.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : nt, !0)), Et.test(r[1]) && gt.isPlainObject(t))
                        for (r in t) gt.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return i = nt.getElementById(r[2]), i && (this[0] = i, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : gt.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(gt) : gt.makeArray(e, this)
        };
    Dt.prototype = gt.fn, St = gt(nt);
    var jt = /^(?:parents|prev(?:Until|All))/,
        At = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    gt.fn.extend({
        has: function(e) {
            var t = gt(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (gt.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && gt(e);
            if (!Ct.test(e))
                for (; i > r; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && gt.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? gt.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? st.call(gt(e), this[0]) : st.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(gt.uniqueSort(gt.merge(this.get(), gt(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), gt.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return wt(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return wt(e, "parentNode", n)
        },
        next: function(e) {
            return a(e, "nextSibling")
        },
        prev: function(e) {
            return a(e, "previousSibling")
        },
        nextAll: function(e) {
            return wt(e, "nextSibling")
        },
        prevAll: function(e) {
            return wt(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return wt(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return wt(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Tt((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Tt(e.firstChild)
        },
        contents: function(e) {
            return i(e, "iframe") ? e.contentDocument : (i(e, "template") && (e = e.content || e), gt.merge([], e.childNodes))
        }
    }, function(e, t) {
        gt.fn[e] = function(n, r) {
            var i = gt.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = gt.filter(r, i)), this.length > 1 && (At[e] || gt.uniqueSort(i), jt.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var qt = /[^\x20\t\r\n\f]+/g;
    gt.Callbacks = function(e) {
        e = "string" == typeof e ? s(e) : gt.extend({}, e);
        var t, n, r, i, o = [],
            a = [],
            u = -1,
            l = function() {
                for (i = i || e.once, r = t = !0; a.length; u = -1)
                    for (n = a.shift(); ++u < o.length;) o[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = o.length, n = !1);
                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
            },
            c = {
                add: function() {
                    return o && (n && !t && (u = o.length - 1, a.push(n)), function r(t) {
                        gt.each(t, function(t, n) {
                            gt.isFunction(n) ? e.unique && c.has(n) || o.push(n) : n && n.length && "string" !== gt.type(n) && r(n)
                        })
                    }(arguments), n && !t && l()), this
                },
                remove: function() {
                    return gt.each(arguments, function(e, t) {
                        for (var n;
                            (n = gt.inArray(t, o, n)) > -1;) o.splice(n, 1), u >= n && u--
                    }), this
                },
                has: function(e) {
                    return e ? gt.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return i = a = [], o = n = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return i = a = [], n || t || (o = n = ""), this
                },
                locked: function() {
                    return !!i
                },
                fireWith: function(e, n) {
                    return i || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || l()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return c
    }, gt.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", gt.Callbacks("memory"), gt.Callbacks("memory"), 2],
                    ["resolve", "done", gt.Callbacks("once memory"), gt.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", gt.Callbacks("once memory"), gt.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return i.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return gt.Deferred(function(t) {
                            gt.each(n, function(n, r) {
                                var i = gt.isFunction(e[r[4]]) && e[r[4]];
                                o[r[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && gt.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, r, i) {
                        function o(t, n, r, i) {
                            return function() {
                                var s = this,
                                    c = arguments,
                                    f = function() {
                                        var e, f;
                                        if (!(a > t)) {
                                            if (e = r.apply(s, c), e === n.promise()) throw new TypeError("Thenable self-resolution");
                                            f = e && ("object" == typeof e || "function" == typeof e) && e.then, gt.isFunction(f) ? i ? f.call(e, o(a, n, u, i), o(a, n, l, i)) : (a++, f.call(e, o(a, n, u, i), o(a, n, l, i), o(a, n, u, n.notifyWith))) : (r !== u && (s = void 0, c = [e]), (i || n.resolveWith)(s, c))
                                        }
                                    },
                                    p = i ? f : function() {
                                        try {
                                            f()
                                        } catch (e) {
                                            gt.Deferred.exceptionHook && gt.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= a && (r !== l && (s = void 0, c = [e]), n.rejectWith(s, c))
                                        }
                                    };
                                t ? p() : (gt.Deferred.getStackHook && (p.stackTrace = gt.Deferred.getStackHook()), e.setTimeout(p))
                            }
                        }
                        var a = 0;
                        return gt.Deferred(function(e) {
                            n[0][3].add(o(0, e, gt.isFunction(i) ? i : u, e.notifyWith)), n[1][3].add(o(0, e, gt.isFunction(t) ? t : u)), n[2][3].add(o(0, e, gt.isFunction(r) ? r : l))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? gt.extend(e, i) : i
                    }
                },
                o = {};
            return gt.each(n, function(e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add(function() {
                    r = s
                }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = it.call(arguments),
                o = gt.Deferred(),
                a = function(e) {
                    return function(n) {
                        r[e] = this, i[e] = arguments.length > 1 ? it.call(arguments) : n, --t || o.resolveWith(r, i)
                    }
                };
            if (1 >= t && (c(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || gt.isFunction(i[n] && i[n].then))) return o.then();
            for (; n--;) c(i[n], a(n), o.reject);
            return o.promise()
        }
    });
    var Lt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    gt.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && Lt.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, gt.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var Ht = gt.Deferred();
    gt.fn.ready = function(e) {
        return Ht.then(e)["catch"](function(e) {
            gt.readyException(e)
        }), this
    }, gt.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (e === !0 ? --gt.readyWait : gt.isReady) || (gt.isReady = !0, e !== !0 && --gt.readyWait > 0 || Ht.resolveWith(nt, [gt]))
        }
    }), gt.ready.then = Ht.then, "complete" === nt.readyState || "loading" !== nt.readyState && !nt.documentElement.doScroll ? e.setTimeout(gt.ready) : (nt.addEventListener("DOMContentLoaded", f), e.addEventListener("load", f));
    var Ft = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === gt.type(n)) {
                i = !0;
                for (s in n) Ft(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, gt.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(gt(e), n)
                })), t))
                for (; u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        Ot = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    p.uid = 1, p.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Ot(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[gt.camelCase(t)] = n;
            else
                for (r in t) i[gt.camelCase(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][gt.camelCase(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(gt.camelCase) : (t = gt.camelCase(t), t = t in r ? [t] : t.match(qt) || []), n = t.length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || gt.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !gt.isEmptyObject(t)
        }
    };
    var Pt = new p,
        Rt = new p,
        Mt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        It = /[A-Z]/g;
    gt.extend({
        hasData: function(e) {
            return Rt.hasData(e) || Pt.hasData(e)
        },
        data: function(e, t, n) {
            return Rt.access(e, t, n)
        },
        removeData: function(e, t) {
            Rt.remove(e, t)
        },
        _data: function(e, t, n) {
            return Pt.access(e, t, n)
        },
        _removeData: function(e, t) {
            Pt.remove(e, t)
        }
    }), gt.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Rt.get(o), 1 === o.nodeType && !Pt.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = gt.camelCase(r.slice(5)), h(o, r, i[r])));
                    Pt.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                Rt.set(this, e)
            }) : Ft(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (n = Rt.get(o, e), void 0 !== n) return n;
                    if (n = h(o, e), void 0 !== n) return n
                } else this.each(function() {
                    Rt.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Rt.remove(this, e)
            })
        }
    }), gt.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = Pt.get(e, t), n && (!r || Array.isArray(n) ? r = Pt.access(e, t, gt.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = gt.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = gt._queueHooks(e, t),
                a = function() {
                    gt.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Pt.get(e, n) || Pt.access(e, n, {
                empty: gt.Callbacks("once memory").add(function() {
                    Pt.remove(e, [t + "queue", n])
                })
            })
        }
    }), gt.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? gt.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = gt.queue(this, e, t);
                gt._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && gt.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                gt.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = gt.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = Pt.get(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var Wt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        $t = new RegExp("^(?:([+-])=|)(" + Wt + ")([a-z%]*)$", "i"),
        Bt = ["Top", "Right", "Bottom", "Left"],
        _t = function(e, t) {
            return e = t || e, "none" === e.style.display || "" === e.style.display && gt.contains(e.ownerDocument, e) && "none" === gt.css(e, "display")
        },
        zt = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        },
        Xt = {};
    gt.fn.extend({
        show: function() {
            return v(this, !0)
        },
        hide: function() {
            return v(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                _t(this) ? gt(this).show() : gt(this).hide()
            })
        }
    });
    var Ut = /^(?:checkbox|radio)$/i,
        Vt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Gt = /^$|\/(?:java|ecma)script/i,
        Yt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Yt.optgroup = Yt.option, Yt.tbody = Yt.tfoot = Yt.colgroup = Yt.caption = Yt.thead, Yt.th = Yt.td;
    var Qt = /<|&#?\w+;/;
    ! function() {
        var e = nt.createDocumentFragment(),
            t = e.appendChild(nt.createElement("div")),
            n = nt.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), dt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", dt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Jt = nt.documentElement,
        Kt = /^key/,
        Zt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        en = /^([^.]*)(?:\.(.+)|)/;
    gt.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, m = Pt.get(e);
            if (m)
                for (n.handler && (o = n, n = o.handler, i = o.selector), i && gt.find.matchesSelector(Jt, i), n.guid || (n.guid = gt.guid++), (u = m.events) || (u = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
                        return "undefined" != typeof gt && gt.event.triggered !== t.type ? gt.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(qt) || [""], l = t.length; l--;) s = en.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d && (f = gt.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = gt.event.special[d] || {}, c = gt.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && gt.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), gt.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, m = Pt.hasData(e) && Pt.get(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(qt) || [""], l = t.length; l--;)
                    if (s = en.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        for (f = gt.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || gt.removeEvent(e, d, m.handle), delete u[d])
                    } else
                        for (d in u) gt.event.remove(e, d + t[l], n, r, !0);
                gt.isEmptyObject(u) && Pt.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = gt.event.fix(e),
                u = new Array(arguments.length),
                l = (Pt.get(this, "events") || {})[s.type] || [],
                c = gt.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, s) !== !1) {
                for (a = gt.event.handlers.call(this, s, l), t = 0;
                    (i = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, r = ((gt.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u), void 0 !== r && (s.result = r) === !1 && (s.preventDefault(), s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || l.disabled !== !0)) {
                        for (o = [], a = {}, n = 0; u > n; n++) r = t[n], i = r.selector + " ", void 0 === a[i] && (a[i] = r.needsContext ? gt(i, this).index(l) > -1 : gt.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(gt.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: gt.isFunction(t) ? function() {
                    return this.originalEvent ? t(this.originalEvent) : void 0
                } : function() {
                    return this.originalEvent ? this.originalEvent[e] : void 0
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[gt.expando] ? e : new gt.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== C() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === C() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && i(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return i(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, gt.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, gt.Event = function(e, t) {
        return this instanceof gt.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? w : T, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && gt.extend(this, t), this.timeStamp = e && e.timeStamp || gt.now(), void(this[gt.expando] = !0)) : new gt.Event(e, t)
    }, gt.Event.prototype = {
        constructor: gt.Event,
        isDefaultPrevented: T,
        isPropagationStopped: T,
        isImmediatePropagationStopped: T,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, gt.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Kt.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Zt.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, gt.event.addProp), gt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        gt.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || gt.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), gt.fn.extend({
        on: function(e, t, n, r) {
            return E(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return E(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, gt(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = T), this.each(function() {
                gt.event.remove(this, e, n, t)
            })
        }
    });
    var tn = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        nn = /<script|<style|<link/i,
        rn = /checked\s*(?:[^=]|=\s*.checked.)/i,
        on = /^true\/(.*)/,
        an = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    gt.extend({
        htmlPrefilter: function(e) {
            return e.replace(tn, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0),
                u = gt.contains(e.ownerDocument, e);
            if (!(dt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || gt.isXMLDoc(e)))
                for (a = y(s), o = y(e), r = 0, i = o.length; i > r; r++) j(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || y(e), a = a || y(s), r = 0, i = o.length; i > r; r++) D(o[r], a[r]);
                else D(e, s);
            return a = y(s, "script"), a.length > 0 && x(a, !u && y(e, "script")), s
        },
        cleanData: function(e) {
            for (var t, n, r, i = gt.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Ot(n)) {
                    if (t = n[Pt.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? gt.event.remove(n, r) : gt.removeEvent(n, r, t.handle);
                        n[Pt.expando] = void 0
                    }
                    n[Rt.expando] && (n[Rt.expando] = void 0)
                }
        }
    }), gt.fn.extend({
        detach: function(e) {
            return q(this, e, !0)
        },
        remove: function(e) {
            return q(this, e)
        },
        text: function(e) {
            return Ft(this, function(e) {
                return void 0 === e ? gt.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return A(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = k(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return A(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = k(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return A(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return A(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (gt.cleanData(y(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return gt.clone(this, e, t)
            })
        },
        html: function(e) {
            return Ft(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !nn.test(e) && !Yt[(Vt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = gt.htmlPrefilter(e);
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (gt.cleanData(y(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return A(this, arguments, function(t) {
                var n = this.parentNode;
                gt.inArray(this, e) < 0 && (gt.cleanData(y(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), gt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        gt.fn[e] = function(e) {
            for (var n, r = [], i = gt(e), o = i.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), gt(i[a])[t](n), at.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var sn = /^margin/,
        un = new RegExp("^(" + Wt + ")(?!px)[a-z%]+$", "i"),
        ln = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        };
    ! function() {
        function t() {
            if (s) {
                s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Jt.appendChild(a);
                var t = e.getComputedStyle(s);
                n = "1%" !== t.top, o = "2px" === t.marginLeft, r = "4px" === t.width, s.style.marginRight = "50%", i = "4px" === t.marginRight, Jt.removeChild(a), s = null
            }
        }
        var n, r, i, o, a = nt.createElement("div"),
            s = nt.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", dt.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), gt.extend(dt, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return t(), r
            },
            pixelMarginRight: function() {
                return t(), i
            },
            reliableMarginLeft: function() {
                return t(), o
            }
        }))
    }();
    var cn = /^(none|table(?!-c[ea]).+)/,
        fn = /^--/,
        pn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        dn = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        hn = ["Webkit", "Moz", "ms"],
        gn = nt.createElement("div").style;
    gt.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = L(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
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
            "float": "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = gt.camelCase(t),
                    u = fn.test(t),
                    l = e.style;
                return u || (t = O(s)), a = gt.cssHooks[t] || gt.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t] : (o = typeof n, "string" === o && (i = $t.exec(n)) && i[1] && (n = g(e, t, i), o = "number"), void(null != n && n === n && ("number" === o && (n += i && i[3] || (gt.cssNumber[s] ? "" : "px")), dt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = gt.camelCase(t),
                u = fn.test(t);
            return u || (t = O(s)), a = gt.cssHooks[t] || gt.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = L(e, t, r)), "normal" === i && t in dn && (i = dn[t]), "" === n || n ? (o = parseFloat(i), n === !0 || isFinite(o) ? o || 0 : i) : i
        }
    }), gt.each(["height", "width"], function(e, t) {
        gt.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? !cn.test(gt.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? M(e, t, r) : zt(e, pn, function() {
                    return M(e, t, r)
                }) : void 0
            },
            set: function(e, n, r) {
                var i, o = r && ln(e),
                    a = r && R(e, t, r, "border-box" === gt.css(e, "boxSizing", !1, o), o);
                return a && (i = $t.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = gt.css(e, t)), P(e, n, a)
            }
        }
    }), gt.cssHooks.marginLeft = H(dt.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(L(e, "marginLeft")) || e.getBoundingClientRect().left - zt(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px" : void 0
    }), gt.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        gt.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Bt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, sn.test(e) || (gt.cssHooks[e + t].set = P)
    }), gt.fn.extend({
        css: function(e, t) {
            return Ft(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = ln(e), i = t.length; i > a; a++) o[t[a]] = gt.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? gt.style(e, t, n) : gt.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), gt.Tween = I, I.prototype = {
        constructor: I,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || gt.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (gt.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = I.propHooks[this.prop];
            return e && e.get ? e.get(this) : I.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = I.propHooks[this.prop];
            return this.pos = t = this.options.duration ? gt.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this
        }
    }, I.prototype.init.prototype = I.prototype, I.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = gt.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                gt.fx.step[e.prop] ? gt.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[gt.cssProps[e.prop]] && !gt.cssHooks[e.prop] ? e.elem[e.prop] = e.now : gt.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, gt.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, gt.fx = I.prototype.init, gt.fx.step = {};
    var mn, vn, yn = /^(?:toggle|show|hide)$/,
        xn = /queueHooks$/;
    gt.Animation = gt.extend(U, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return g(n.elem, e, $t.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                gt.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(qt);
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], U.tweeners[n] = U.tweeners[n] || [], U.tweeners[n].unshift(t)
            },
            prefilters: [z],
            prefilter: function(e, t) {
                t ? U.prefilters.unshift(e) : U.prefilters.push(e)
            }
        }), gt.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? gt.extend({}, e) : {
                complete: n || !n && t || gt.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !gt.isFunction(t) && t
            };
            return gt.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration = r.duration in gt.fx.speeds ? gt.fx.speeds[r.duration] : gt.fx.speeds._default), null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                gt.isFunction(r.old) && r.old.call(this), r.queue && gt.dequeue(this, r.queue)
            }, r
        }, gt.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(_t).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = gt.isEmptyObject(e),
                    o = gt.speed(t, n, r),
                    a = function() {
                        var t = U(this, gt.extend({}, e), o);
                        (i || Pt.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = gt.timers,
                        a = Pt.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && xn.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || gt.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = Pt.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = gt.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, gt.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), gt.each(["toggle", "show", "hide"], function(e, t) {
            var n = gt.fn[t];
            gt.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(B(t, !0), e, r, i)
            }
        }), gt.each({
            slideDown: B("show"),
            slideUp: B("hide"),
            slideToggle: B("toggle"),
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
            gt.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), gt.timers = [], gt.fx.tick = function() {
            var e, t = 0,
                n = gt.timers;
            for (mn = gt.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || gt.fx.stop(), mn = void 0
        }, gt.fx.timer = function(e) {
            gt.timers.push(e), gt.fx.start()
        }, gt.fx.interval = 13, gt.fx.start = function() {
            vn || (vn = !0, W())
        }, gt.fx.stop = function() {
            vn = null
        }, gt.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, gt.fn.delay = function(t, n) {
            return t = gt.fx ? gt.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function() {
                    e.clearTimeout(i)
                }
            })
        },
        function() {
            var e = nt.createElement("input"),
                t = nt.createElement("select"),
                n = t.appendChild(nt.createElement("option"));
            e.type = "checkbox", dt.checkOn = "" !== e.value, dt.optSelected = n.selected, e = nt.createElement("input"), e.value = "t", e.type = "radio", dt.radioValue = "t" === e.value
        }();
    var bn, wn = gt.expr.attrHandle;
    gt.fn.extend({
        attr: function(e, t) {
            return Ft(this, gt.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                gt.removeAttr(this, e)
            })
        }
    }), gt.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            return 3 !== o && 8 !== o && 2 !== o ? "undefined" == typeof e.getAttribute ? gt.prop(e, t, n) : (1 === o && gt.isXMLDoc(e) || (i = gt.attrHooks[t.toLowerCase()] || (gt.expr.match.bool.test(t) ? bn : void 0)), void 0 !== n ? null === n ? void gt.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = gt.find.attr(e, t), null == r ? void 0 : r)) : void 0
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!dt.radioValue && "radio" === t && i(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(qt);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), bn = {
        set: function(e, t, n) {
            return t === !1 ? gt.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, gt.each(gt.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = wn[t] || gt.find.attr;
        wn[t] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = wn[a], wn[a] = i, i = null != n(e, t, r) ? a : null, wn[a] = o), i
        }
    });
    var Tn = /^(?:input|select|textarea|button)$/i,
        Cn = /^(?:a|area)$/i;
    gt.fn.extend({
        prop: function(e, t) {
            return Ft(this, gt.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[gt.propFix[e] || e]
            })
        }
    }), gt.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            return 3 !== o && 8 !== o && 2 !== o ? (1 === o && gt.isXMLDoc(e) || (t = gt.propFix[t] || t, i = gt.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = gt.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Tn.test(e.nodeName) || Cn.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), dt.optSelected || (gt.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), gt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        gt.propFix[this.toLowerCase()] = this
    }), gt.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (gt.isFunction(e)) return this.each(function(t) {
                gt(this).addClass(e.call(this, t, G(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(qt) || []; n = this[u++];)
                    if (i = G(n), r = 1 === n.nodeType && " " + V(i) + " ") {
                        for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        s = V(r), i !== s && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (gt.isFunction(e)) return this.each(function(t) {
                gt(this).removeClass(e.call(this, t, G(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(qt) || []; n = this[u++];)
                    if (i = G(n), r = 1 === n.nodeType && " " + V(i) + " ") {
                        for (a = 0; o = t[a++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        s = V(r), i !== s && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(gt.isFunction(e) ? function(n) {
                gt(this).toggleClass(e.call(this, n, G(this), t), t)
            } : function() {
                var t, r, i, o;
                if ("string" === n)
                    for (r = 0, i = gt(this), o = e.match(qt) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = G(this), t && Pt.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Pt.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + V(G(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var En = /\r/g;
    gt.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = gt.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, gt(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = gt.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), t = gt.valHooks[this.type] || gt.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = gt.valHooks[i.type] || gt.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(En, "") : null == n ? "" : n)) : void 0
        }
    }), gt.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = gt.find.attr(e, "value");
                    return null != t ? t : V(gt.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, o = e.options,
                        a = e.selectedIndex,
                        s = "select-one" === e.type,
                        u = s ? null : [],
                        l = s ? a + 1 : o.length;
                    for (r = 0 > a ? l : s ? a : 0; l > r; r++)
                        if (n = o[r], !(!n.selected && r !== a || n.disabled || n.parentNode.disabled && i(n.parentNode, "optgroup"))) {
                            if (t = gt(n).val(), s) return t;
                            u.push(t)
                        }
                    return u
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = gt.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = gt.inArray(gt.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), gt.each(["radio", "checkbox"], function() {
        gt.valHooks[this] = {
            set: function(e, t) {
                return Array.isArray(t) ? e.checked = gt.inArray(gt(e).val(), t) > -1 : void 0
            }
        }, dt.checkOn || (gt.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var kn = /^(?:focusinfocus|focusoutblur)$/;
    gt.extend(gt.event, {
        trigger: function(t, n, r, i) {
            var o, a, s, u, l, c, f, p = [r || nt],
                d = ct.call(t, "type") ? t.type : t,
                h = ct.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = r = r || nt, 3 !== r.nodeType && 8 !== r.nodeType && !kn.test(d + gt.event.triggered) && (d.indexOf(".") > -1 && (h = d.split("."), d = h.shift(), h.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[gt.expando] ? t : new gt.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : gt.makeArray(n, [t]), f = gt.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !gt.isWindow(r)) {
                    for (u = f.delegateType || d, kn.test(u + d) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
                    s === (r.ownerDocument || nt) && p.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0;
                    (a = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || d, c = (Pt.get(a, "events") || {})[t.type] && Pt.get(a, "handle"), c && c.apply(a, n), c = l && a[l], c && c.apply && Ot(a) && (t.result = c.apply(a, n), t.result === !1 && t.preventDefault());
                return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !Ot(r) || l && gt.isFunction(r[d]) && !gt.isWindow(r) && (s = r[l], s && (r[l] = null), gt.event.triggered = d, r[d](), gt.event.triggered = void 0, s && (r[l] = s)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = gt.extend(new gt.Event, n, {
                type: e,
                isSimulated: !0
            });
            gt.event.trigger(r, null, t)
        }
    }), gt.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                gt.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? gt.event.trigger(e, t, n, !0) : void 0
        }
    }), gt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        gt.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), gt.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), dt.focusin = "onfocusin" in e, dt.focusin || gt.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            gt.event.simulate(t, e.target, gt.event.fix(e))
        };
        gt.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = Pt.access(r, t);
                i || r.addEventListener(e, n, !0), Pt.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = Pt.access(r, t) - 1;
                i ? Pt.access(r, t, i) : (r.removeEventListener(e, n, !0), Pt.remove(r, t))
            }
        }
    });
    var Sn = e.location,
        Nn = gt.now(),
        Dn = /\?/;
    gt.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (r) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || gt.error("Invalid XML: " + t), n
    };
    var jn = /\[\]$/,
        An = /\r?\n/g,
        qn = /^(?:submit|button|image|reset|file)$/i,
        Ln = /^(?:input|select|textarea|keygen)/i;
    gt.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = gt.isFunction(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !gt.isPlainObject(e)) gt.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) Y(n, e[n], t, i);
        return r.join("&")
    }, gt.fn.extend({
        serialize: function() {
            return gt.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = gt.prop(this, "elements");
                return e ? gt.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !gt(this).is(":disabled") && Ln.test(this.nodeName) && !qn.test(e) && (this.checked || !Ut.test(e))
            }).map(function(e, t) {
                var n = gt(this).val();
                return null == n ? null : Array.isArray(n) ? gt.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(An, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(An, "\r\n")
                }
            }).get()
        }
    });
    var Hn = /%20/g,
        Fn = /#.*$/,
        On = /([?&])_=[^&]*/,
        Pn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Rn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mn = /^(?:GET|HEAD)$/,
        In = /^\/\//,
        Wn = {},
        $n = {},
        Bn = "*/".concat("*"),
        _n = nt.createElement("a");
    _n.href = Sn.href, gt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Sn.href,
            type: "GET",
            isLocal: Rn.test(Sn.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": gt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? K(K(e, gt.ajaxSettings), t) : K(gt.ajaxSettings, e)
        },
        ajaxPrefilter: Q(Wn),
        ajaxTransport: Q($n),
        ajax: function(t, n) {
            function r(t, n, r, s) {
                var l, p, d, b, w, T = n;
                c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", C.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, r && (b = Z(h, C, r)), b = et(h, b, C, l), l ? (h.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (gt.lastModified[o] = w), w = C.getResponseHeader("etag"), w && (gt.etag[o] = w)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, p = b.data, d = b.error, l = !d)) : (d = T, !t && T || (T = "error", 0 > t && (t = 0))), C.status = t, C.statusText = (n || T) + "", l ? v.resolveWith(g, [p, T, C]) : v.rejectWith(g, [C, T, d]), C.statusCode(x), x = void 0, f && m.trigger(l ? "ajaxSuccess" : "ajaxError", [C, h, l ? p : d]), y.fireWith(g, [C, T]), f && (m.trigger("ajaxComplete", [C, h]), --gt.active || gt.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, u, l, c, f, p, d, h = gt.ajaxSetup({}, n),
                g = h.context || h,
                m = h.context && (g.nodeType || g.jquery) ? gt(g) : gt.event,
                v = gt.Deferred(),
                y = gt.Callbacks("once memory"),
                x = h.statusCode || {},
                b = {},
                w = {},
                T = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!s)
                                for (s = {}; t = Pn.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return c ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) C.always(e[C.status]);
                            else
                                for (t in e) x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        return i && i.abort(t), r(0, t), this
                    }
                };
            if (v.promise(C), h.url = ((t || h.url || Sn.href) + "").replace(In, Sn.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(qt) || [""], null == h.crossDomain) {
                l = nt.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = _n.protocol + "//" + _n.host != l.protocol + "//" + l.host
                } catch (E) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = gt.param(h.data, h.traditional)), J(Wn, h, n, C), c) return C;
            f = gt.event && h.global, f && 0 === gt.active++ && gt.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mn.test(h.type), o = h.url.replace(Fn, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Hn, "+")) : (d = h.url.slice(o.length), h.data && (o += (Dn.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (o = o.replace(On, "$1"), d = (Dn.test(o) ? "&" : "?") + "_=" + Nn++ + d), h.url = o + d), h.ifModified && (gt.lastModified[o] && C.setRequestHeader("If-Modified-Since", gt.lastModified[o]), gt.etag[o] && C.setRequestHeader("If-None-Match", gt.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Bn + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) C.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (h.beforeSend.call(g, C, h) === !1 || c)) return C.abort();
            if (T = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), i = J($n, h, n, C)) {
                if (C.readyState = 1, f && m.trigger("ajaxSend", [C, h]), c) return C;
                h.async && h.timeout > 0 && (u = e.setTimeout(function() {
                    C.abort("timeout")
                }, h.timeout));
                try {
                    c = !1, i.send(b, r)
                } catch (E) {
                    if (c) throw E;
                    r(-1, E)
                }
            } else r(-1, "No Transport");
            return C
        },
        getJSON: function(e, t, n) {
            return gt.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return gt.get(e, void 0, t, "script")
        }
    }), gt.each(["get", "post"], function(e, t) {
        gt[t] = function(e, n, r, i) {
            return gt.isFunction(n) && (i = i || r, r = n, n = void 0), gt.ajax(gt.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, gt.isPlainObject(e) && e))
        }
    }), gt._evalUrl = function(e) {
        return gt.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, gt.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (gt.isFunction(e) && (e = e.call(this[0])), t = gt(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return this.each(gt.isFunction(e) ? function(t) {
                gt(this).wrapInner(e.call(this, t))
            } : function() {
                var t = gt(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = gt.isFunction(e);
            return this.each(function(n) {
                gt(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                gt(this).replaceWith(this.childNodes)
            }), this
        }
    }), gt.expr.pseudos.hidden = function(e) {
        return !gt.expr.pseudos.visible(e)
    }, gt.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, gt.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    };
    var zn = {
            0: 200,
            1223: 204
        },
        Xn = gt.ajaxSettings.xhr();
    dt.cors = !!Xn && "withCredentials" in Xn, dt.ajax = Xn = !!Xn, gt.ajaxTransport(function(t) {
        var n, r;
        return dt.cors || Xn && !t.crossDomain ? {
            send: function(i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i) s.setRequestHeader(a, i[a]);
                n = function(e) {
                    return function() {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(zn[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (u) {
                    if (n) throw u
                }
            },
            abort: function() {
                n && n()
            }
        } : void 0
    }), gt.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), gt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return gt.globalEval(e), e
            }
        }
    }), gt.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), gt.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = gt("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), nt.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Un = [],
        Vn = /(=)\?(?=&|$)|\?\?/;
    gt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Un.pop() || gt.expando + "_" + Nn++;
            return this[e] = !0, e
        }
    }), gt.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = t.jsonp !== !1 && (Vn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Vn.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = gt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Vn, "$1" + i) : t.jsonp !== !1 && (t.url += (Dn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || gt.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always(function() {
            void 0 === o ? gt(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Un.push(i)), a && gt.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), dt.createHTMLDocument = function() {
        var e = nt.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), gt.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var r, i, o;
        return t || (dt.createHTMLDocument ? (t = nt.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = nt.location.href, t.head.appendChild(r)) : t = nt), i = Et.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = b([e], t, o), o && o.length && gt(o).remove(), gt.merge([], i.childNodes))
    }, gt.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = V(e.slice(s)), e = e.slice(0, s)), gt.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && gt.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? gt("<div>").append(gt.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, gt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        gt.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), gt.expr.pseudos.animated = function(e) {
        return gt.grep(gt.timers, function(t) {
            return e === t.elem
        }).length
    }, gt.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l, c = gt.css(e, "position"),
                f = gt(e),
                p = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), o = gt.css(e, "top"), u = gt.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), gt.isFunction(t) && (t = t.call(e, n, gt.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, gt.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                gt.offset.setOffset(this, e, t)
            });
            var t, n, r, i, o = this[0];
            return o ? o.getClientRects().length ? (r = o.getBoundingClientRect(), t = o.ownerDocument, n = t.documentElement, i = t.defaultView, {
                top: r.top + i.pageYOffset - n.clientTop,
                left: r.left + i.pageXOffset - n.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === gt.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), i(e[0], "html") || (r = e.offset()), r = {
                    top: r.top + gt.css(e[0], "borderTopWidth", !0),
                    left: r.left + gt.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - r.top - gt.css(n, "marginTop", !0),
                    left: t.left - r.left - gt.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === gt.css(e, "position");) e = e.offsetParent;
                return e || Jt
            })
        }
    }), gt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        gt.fn[e] = function(r) {
            return Ft(this, function(e, r, i) {
                var o;
                return gt.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i ? o ? o[t] : e[r] : void(o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
            }, e, r, arguments.length)
        }
    }), gt.each(["top", "left"], function(e, t) {
        gt.cssHooks[t] = H(dt.pixelPosition, function(e, n) {
            return n ? (n = L(e, t), un.test(n) ? gt(e).position()[t] + "px" : n) : void 0
        })
    }), gt.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        gt.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            gt.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || o === !0 ? "margin" : "border");
                return Ft(this, function(t, n, i) {
                    var o;
                    return gt.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? gt.css(t, n, s) : gt.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }), gt.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), gt.holdReady = function(e) {
        e ? gt.readyWait++ : gt.ready(!0)
    }, gt.isArray = Array.isArray, gt.parseJSON = JSON.parse, gt.nodeName = i, "function" == typeof define && define.amd && define("jquery", [], function() {
        return gt
    });
    var Gn = e.jQuery,
        Yn = e.$;
    return gt.noConflict = function(t) {
        return e.$ === gt && (e.$ = Yn), t && e.jQuery === gt && (e.jQuery = Gn), gt
    }, t || (e.jQuery = e.$ = gt), gt
});