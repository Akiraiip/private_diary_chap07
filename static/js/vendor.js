/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(T, e) {
    "use strict";
    var t = []
      , S = T.document
      , r = Object.getPrototypeOf
      , o = t.slice
      , m = t.concat
      , l = t.push
      , n = t.indexOf
      , i = {}
      , a = i.toString
      , f = i.hasOwnProperty
      , s = f.toString
      , u = s.call(Object)
      , g = {};
    function v(e, t) {
        var i = (t = t || S).createElement("script");
        i.text = e,
        t.head.appendChild(i).parentNode.removeChild(i)
    }
    var c = "3.2.1"
      , C = function(e, t) {
        return new C.fn.init(e,t)
    }
      , p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , d = /^-ms-/
      , h = /-([a-z])/g
      , y = function(e, t) {
        return t.toUpperCase()
    };
    function _(e) {
        var t = !!e && "length"in e && e.length
          , i = C.type(e);
        return "function" !== i && !C.isWindow(e) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    C.fn = C.prototype = {
        jquery: c,
        constructor: C,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = C.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return C.each(this, e)
        },
        map: function(i) {
            return this.pushStack(C.map(this, function(e, t) {
                return i.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
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
            return this.pushStack(0 <= i && i < t ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: t.sort,
        splice: t.splice
    },
    C.extend = C.fn.extend = function() {
        var e, t, i, r, n, a, s = arguments[0] || {}, o = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof s && (u = s,
        s = arguments[o] || {},
        o++),
        "object" == typeof s || C.isFunction(s) || (s = {}),
        o === l && (s = this,
        o--); o < l; o++)
            if (null != (e = arguments[o]))
                for (t in e)
                    i = s[t],
                    s !== (r = e[t]) && (u && r && (C.isPlainObject(r) || (n = Array.isArray(r))) ? (a = n ? (n = !1,
                    i && Array.isArray(i) ? i : []) : i && C.isPlainObject(i) ? i : {},
                    s[t] = C.extend(u, a, r)) : void 0 !== r && (s[t] = r));
        return s
    }
    ,
    C.extend({
        expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === C.type(e)
        },
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = C.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, i;
            return !(!e || "[object Object]" !== a.call(e) || (t = r(e)) && ("function" != typeof (i = f.call(t, "constructor") && t.constructor) || s.call(i) !== u))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[a.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            v(e)
        },
        camelCase: function(e) {
            return e.replace(d, "ms-").replace(h, y)
        },
        each: function(e, t) {
            var i, r = 0;
            if (_(e))
                for (i = e.length; r < i && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(p, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (_(Object(e)) ? C.merge(i, "string" == typeof e ? [e] : e) : l.call(i, e)),
            i
        },
        inArray: function(e, t, i) {
            return null == t ? -1 : n.call(t, e, i)
        },
        merge: function(e, t) {
            for (var i = +t.length, r = 0, n = e.length; r < i; r++)
                e[n++] = t[r];
            return e.length = n,
            e
        },
        grep: function(e, t, i) {
            for (var r = [], n = 0, a = e.length, s = !i; n < a; n++)
                !t(e[n], n) !== s && r.push(e[n]);
            return r
        },
        map: function(e, t, i) {
            var r, n, a = 0, s = [];
            if (_(e))
                for (r = e.length; a < r; a++)
                    null != (n = t(e[a], a, i)) && s.push(n);
            else
                for (a in e)
                    null != (n = t(e[a], a, i)) && s.push(n);
            return m.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var i, r, n;
            if ("string" == typeof t && (i = e[t],
            t = e,
            e = i),
            C.isFunction(e))
                return r = o.call(arguments, 2),
                (n = function() {
                    return e.apply(t || this, r.concat(o.call(arguments)))
                }
                ).guid = e.guid = e.guid || C.guid++,
                n
        },
        now: Date.now,
        support: g
    }),
    "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]),
    C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        i["[object " + t + "]"] = t.toLowerCase()
    });
    var x = function(i) {
        var e, h, x, a, n, f, p, m, w, l, u, b, T, s, S, g, o, c, v, C = "sizzle" + 1 * new Date, y = i.document, P = 0, r = 0, d = se(), _ = se(), k = se(), M = function(e, t) {
            return e === t && (u = !0),
            0
        }, E = {}.hasOwnProperty, t = [], A = t.pop, O = t.push, z = t.push, D = t.slice, R = function(e, t) {
            for (var i = 0, r = e.length; i < r; i++)
                if (e[i] === t)
                    return i;
            return -1
        }, I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", N = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", H = "\\[" + L + "*(" + N + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", F = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)", j = new RegExp(L + "+","g"), B = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$","g"), V = new RegExp("^" + L + "*," + L + "*"), X = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), q = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]","g"), W = new RegExp(F), Y = new RegExp("^" + N + "$"), G = {
            ID: new RegExp("^#(" + N + ")"),
            CLASS: new RegExp("^\\.(" + N + ")"),
            TAG: new RegExp("^(" + N + "|[*])"),
            ATTR: new RegExp("^" + H),
            PSEUDO: new RegExp("^" + F),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)","i"),
            bool: new RegExp("^(?:" + I + ")$","i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)","i")
        }, $ = /^(?:input|select|textarea|button)$/i, U = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/, J = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)","ig"), ee = function(e, t, i) {
            var r = "0x" + t - 65536;
            return r != r || i ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, re = function() {
            b()
        }, ne = ye(function(e) {
            return !0 === e.disabled && ("form"in e || "label"in e)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            z.apply(t = D.call(y.childNodes), y.childNodes),
            t[y.childNodes.length].nodeType
        } catch (e) {
            z = {
                apply: t.length ? function(e, t) {
                    O.apply(e, D.call(t))
                }
                : function(e, t) {
                    for (var i = e.length, r = 0; e[i++] = t[r++]; )
                        ;
                    e.length = i - 1
                }
            }
        }
        function ae(e, t, i, r) {
            var n, a, s, o, l, u, c, p = t && t.ownerDocument, d = t ? t.nodeType : 9;
            if (i = i || [],
            "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d)
                return i;
            if (!r && ((t ? t.ownerDocument || t : y) !== T && b(t),
            t = t || T,
            S)) {
                if (11 !== d && (l = Z.exec(e)))
                    if (n = l[1]) {
                        if (9 === d) {
                            if (!(s = t.getElementById(n)))
                                return i;
                            if (s.id === n)
                                return i.push(s),
                                i
                        } else if (p && (s = p.getElementById(n)) && v(t, s) && s.id === n)
                            return i.push(s),
                            i
                    } else {
                        if (l[2])
                            return z.apply(i, t.getElementsByTagName(e)),
                            i;
                        if ((n = l[3]) && h.getElementsByClassName && t.getElementsByClassName)
                            return z.apply(i, t.getElementsByClassName(n)),
                            i
                    }
                if (h.qsa && !k[e + " "] && (!g || !g.test(e))) {
                    if (1 !== d)
                        p = t,
                        c = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((o = t.getAttribute("id")) ? o = o.replace(te, ie) : t.setAttribute("id", o = C),
                        a = (u = f(e)).length; a--; )
                            u[a] = "#" + o + " " + ve(u[a]);
                        c = u.join(","),
                        p = K.test(e) && me(t.parentNode) || t
                    }
                    if (c)
                        try {
                            return z.apply(i, p.querySelectorAll(c)),
                            i
                        } catch (e) {} finally {
                            o === C && t.removeAttribute("id")
                        }
                }
            }
            return m(e.replace(B, "$1"), t, i, r)
        }
        function se() {
            var r = [];
            return function e(t, i) {
                return r.push(t + " ") > x.cacheLength && delete e[r.shift()],
                e[t + " "] = i
            }
        }
        function oe(e) {
            return e[C] = !0,
            e
        }
        function le(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function ue(e, t) {
            for (var i = e.split("|"), r = i.length; r--; )
                x.attrHandle[i[r]] = t
        }
        function ce(e, t) {
            var i = t && e
              , r = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (i)
                for (; i = i.nextSibling; )
                    if (i === t)
                        return -1;
            return e ? 1 : -1
        }
        function pe(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function de(i) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === i
            }
        }
        function he(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ne(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function fe(s) {
            return oe(function(a) {
                return a = +a,
                oe(function(e, t) {
                    for (var i, r = s([], e.length, a), n = r.length; n--; )
                        e[i = r[n]] && (e[i] = !(t[i] = e[i]))
                })
            })
        }
        function me(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in h = ae.support = {},
        n = ae.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        b = ae.setDocument = function(e) {
            var t, i, r = e ? e.ownerDocument || e : y;
            return r !== T && 9 === r.nodeType && r.documentElement && (s = (T = r).documentElement,
            S = !n(T),
            y !== T && (i = T.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)),
            h.attributes = le(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            h.getElementsByTagName = le(function(e) {
                return e.appendChild(T.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            h.getElementsByClassName = Q.test(T.getElementsByClassName),
            h.getById = le(function(e) {
                return s.appendChild(e).id = C,
                !T.getElementsByName || !T.getElementsByName(C).length
            }),
            h.getById ? (x.filter.ID = function(e) {
                var t = e.replace(J, ee);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && S) {
                    var i = t.getElementById(e);
                    return i ? [i] : []
                }
            }
            ) : (x.filter.ID = function(e) {
                var i = e.replace(J, ee);
                return function(e) {
                    var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === i
                }
            }
            ,
            x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && S) {
                    var i, r, n, a = t.getElementById(e);
                    if (a) {
                        if ((i = a.getAttributeNode("id")) && i.value === e)
                            return [a];
                        for (n = t.getElementsByName(e),
                        r = 0; a = n[r++]; )
                            if ((i = a.getAttributeNode("id")) && i.value === e)
                                return [a]
                    }
                    return []
                }
            }
            ),
            x.find.TAG = h.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var i, r = [], n = 0, a = t.getElementsByTagName(e);
                if ("*" !== e)
                    return a;
                for (; i = a[n++]; )
                    1 === i.nodeType && r.push(i);
                return r
            }
            ,
            x.find.CLASS = h.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && S)
                    return t.getElementsByClassName(e)
            }
            ,
            o = [],
            g = [],
            (h.qsa = Q.test(T.querySelectorAll)) && (le(function(e) {
                s.appendChild(e).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + L + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || g.push("\\[" + L + "*(?:value|" + I + ")"),
                e.querySelectorAll("[id~=" + C + "-]").length || g.push("~="),
                e.querySelectorAll(":checked").length || g.push(":checked"),
                e.querySelectorAll("a#" + C + "+*").length || g.push(".#.+[+~]")
            }),
            le(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = T.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && g.push("name" + L + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                s.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                g.push(",.*:")
            })),
            (h.matchesSelector = Q.test(c = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && le(function(e) {
                h.disconnectedMatch = c.call(e, "*"),
                c.call(e, "[s!='']:x"),
                o.push("!=", F)
            }),
            g = g.length && new RegExp(g.join("|")),
            o = o.length && new RegExp(o.join("|")),
            t = Q.test(s.compareDocumentPosition),
            v = t || Q.test(s.contains) ? function(e, t) {
                var i = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(i.contains ? i.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            M = t ? function(e, t) {
                if (e === t)
                    return u = !0,
                    0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === i ? e === T || e.ownerDocument === y && v(y, e) ? -1 : t === T || t.ownerDocument === y && v(y, t) ? 1 : l ? R(l, e) - R(l, t) : 0 : 4 & i ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return u = !0,
                    0;
                var i, r = 0, n = e.parentNode, a = t.parentNode, s = [e], o = [t];
                if (!n || !a)
                    return e === T ? -1 : t === T ? 1 : n ? -1 : a ? 1 : l ? R(l, e) - R(l, t) : 0;
                if (n === a)
                    return ce(e, t);
                for (i = e; i = i.parentNode; )
                    s.unshift(i);
                for (i = t; i = i.parentNode; )
                    o.unshift(i);
                for (; s[r] === o[r]; )
                    r++;
                return r ? ce(s[r], o[r]) : s[r] === y ? -1 : o[r] === y ? 1 : 0
            }
            ),
            T
        }
        ,
        ae.matches = function(e, t) {
            return ae(e, null, null, t)
        }
        ,
        ae.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== T && b(e),
            t = t.replace(q, "='$1']"),
            h.matchesSelector && S && !k[t + " "] && (!o || !o.test(t)) && (!g || !g.test(t)))
                try {
                    var i = c.call(e, t);
                    if (i || h.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return i
                } catch (e) {}
            return 0 < ae(t, T, null, [e]).length
        }
        ,
        ae.contains = function(e, t) {
            return (e.ownerDocument || e) !== T && b(e),
            v(e, t)
        }
        ,
        ae.attr = function(e, t) {
            (e.ownerDocument || e) !== T && b(e);
            var i = x.attrHandle[t.toLowerCase()]
              , r = i && E.call(x.attrHandle, t.toLowerCase()) ? i(e, t, !S) : void 0;
            return void 0 !== r ? r : h.attributes || !S ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        ae.escape = function(e) {
            return (e + "").replace(te, ie)
        }
        ,
        ae.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        ae.uniqueSort = function(e) {
            var t, i = [], r = 0, n = 0;
            if (u = !h.detectDuplicates,
            l = !h.sortStable && e.slice(0),
            e.sort(M),
            u) {
                for (; t = e[n++]; )
                    t === e[n] && (r = i.push(n));
                for (; r--; )
                    e.splice(i[r], 1)
            }
            return l = null,
            e
        }
        ,
        a = ae.getText = function(e) {
            var t, i = "", r = 0, n = e.nodeType;
            if (n) {
                if (1 === n || 9 === n || 11 === n) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        i += a(e)
                } else if (3 === n || 4 === n)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    i += a(t);
            return i
        }
        ,
        (x = ae.selectors = {
            cacheLength: 50,
            createPseudo: oe,
            match: G,
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
                    return e[1] = e[1].replace(J, ee),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(J, ee),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, i = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && W.test(i) && (t = f(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t),
                    e[2] = i.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(J, ee).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = d[e + " "];
                    return t || (t = new RegExp("(^|" + L + ")" + e + "(" + L + "|$)")) && d(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(i, r, n) {
                    return function(e) {
                        var t = ae.attr(e, i);
                        return null == t ? "!=" === r : !r || (t += "",
                        "=" === r ? t === n : "!=" === r ? t !== n : "^=" === r ? n && 0 === t.indexOf(n) : "*=" === r ? n && -1 < t.indexOf(n) : "$=" === r ? n && t.slice(-n.length) === n : "~=" === r ? -1 < (" " + t.replace(j, " ") + " ").indexOf(n) : "|=" === r && (t === n || t.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(f, e, t, m, g) {
                    var v = "nth" !== f.slice(0, 3)
                      , y = "last" !== f.slice(-4)
                      , _ = "of-type" === e;
                    return 1 === m && 0 === g ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, i) {
                        var r, n, a, s, o, l, u = v !== y ? "nextSibling" : "previousSibling", c = e.parentNode, p = _ && e.nodeName.toLowerCase(), d = !i && !_, h = !1;
                        if (c) {
                            if (v) {
                                for (; u; ) {
                                    for (s = e; s = s[u]; )
                                        if (_ ? s.nodeName.toLowerCase() === p : 1 === s.nodeType)
                                            return !1;
                                    l = u = "only" === f && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [y ? c.firstChild : c.lastChild],
                            y && d) {
                                for (h = (o = (r = (n = (a = (s = c)[C] || (s[C] = {}))[s.uniqueID] || (a[s.uniqueID] = {}))[f] || [])[0] === P && r[1]) && r[2],
                                s = o && c.childNodes[o]; s = ++o && s && s[u] || (h = o = 0) || l.pop(); )
                                    if (1 === s.nodeType && ++h && s === e) {
                                        n[f] = [P, o, h];
                                        break
                                    }
                            } else if (d && (h = o = (r = (n = (a = (s = e)[C] || (s[C] = {}))[s.uniqueID] || (a[s.uniqueID] = {}))[f] || [])[0] === P && r[1]),
                            !1 === h)
                                for (; (s = ++o && s && s[u] || (h = o = 0) || l.pop()) && ((_ ? s.nodeName.toLowerCase() !== p : 1 !== s.nodeType) || !++h || (d && ((n = (a = s[C] || (s[C] = {}))[s.uniqueID] || (a[s.uniqueID] = {}))[f] = [P, h]),
                                s !== e)); )
                                    ;
                            return (h -= g) === m || h % m == 0 && 0 <= h / m
                        }
                    }
                },
                PSEUDO: function(e, a) {
                    var t, s = x.pseudos[e] || x.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                    return s[C] ? s(a) : 1 < s.length ? (t = [e, e, "", a],
                    x.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function(e, t) {
                        for (var i, r = s(e, a), n = r.length; n--; )
                            e[i = R(e, r[n])] = !(t[i] = r[n])
                    }) : function(e) {
                        return s(e, 0, t)
                    }
                    ) : s
                }
            },
            pseudos: {
                not: oe(function(e) {
                    var r = []
                      , n = []
                      , o = p(e.replace(B, "$1"));
                    return o[C] ? oe(function(e, t, i, r) {
                        for (var n, a = o(e, null, r, []), s = e.length; s--; )
                            (n = a[s]) && (e[s] = !(t[s] = n))
                    }) : function(e, t, i) {
                        return r[0] = e,
                        o(r, null, i, n),
                        r[0] = null,
                        !n.pop()
                    }
                }),
                has: oe(function(t) {
                    return function(e) {
                        return 0 < ae(t, e).length
                    }
                }),
                contains: oe(function(t) {
                    return t = t.replace(J, ee),
                    function(e) {
                        return -1 < (e.textContent || e.innerText || a(e)).indexOf(t)
                    }
                }),
                lang: oe(function(i) {
                    return Y.test(i || "") || ae.error("unsupported lang: " + i),
                    i = i.replace(J, ee).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = S ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === i || 0 === t.indexOf(i + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = i.location && i.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === s
                },
                focus: function(e) {
                    return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: he(!1),
                disabled: he(!0),
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
                    return !x.pseudos.empty(e)
                },
                header: function(e) {
                    return U.test(e.nodeName)
                },
                input: function(e) {
                    return $.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: fe(function() {
                    return [0]
                }),
                last: fe(function(e, t) {
                    return [t - 1]
                }),
                eq: fe(function(e, t, i) {
                    return [i < 0 ? i + t : i]
                }),
                even: fe(function(e, t) {
                    for (var i = 0; i < t; i += 2)
                        e.push(i);
                    return e
                }),
                odd: fe(function(e, t) {
                    for (var i = 1; i < t; i += 2)
                        e.push(i);
                    return e
                }),
                lt: fe(function(e, t, i) {
                    for (var r = i < 0 ? i + t : i; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: fe(function(e, t, i) {
                    for (var r = i < 0 ? i + t : i; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = x.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            x.pseudos[e] = pe(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            x.pseudos[e] = de(e);
        function ge() {}
        function ve(e) {
            for (var t = 0, i = e.length, r = ""; t < i; t++)
                r += e[t].value;
            return r
        }
        function ye(o, e, t) {
            var l = e.dir
              , u = e.next
              , c = u || l
              , p = t && "parentNode" === c
              , d = r++;
            return e.first ? function(e, t, i) {
                for (; e = e[l]; )
                    if (1 === e.nodeType || p)
                        return o(e, t, i);
                return !1
            }
            : function(e, t, i) {
                var r, n, a, s = [P, d];
                if (i) {
                    for (; e = e[l]; )
                        if ((1 === e.nodeType || p) && o(e, t, i))
                            return !0
                } else
                    for (; e = e[l]; )
                        if (1 === e.nodeType || p)
                            if (n = (a = e[C] || (e[C] = {}))[e.uniqueID] || (a[e.uniqueID] = {}),
                            u && u === e.nodeName.toLowerCase())
                                e = e[l] || e;
                            else {
                                if ((r = n[c]) && r[0] === P && r[1] === d)
                                    return s[2] = r[2];
                                if ((n[c] = s)[2] = o(e, t, i))
                                    return !0
                            }
                return !1
            }
        }
        function _e(n) {
            return 1 < n.length ? function(e, t, i) {
                for (var r = n.length; r--; )
                    if (!n[r](e, t, i))
                        return !1;
                return !0
            }
            : n[0]
        }
        function xe(e, t, i, r, n) {
            for (var a, s = [], o = 0, l = e.length, u = null != t; o < l; o++)
                (a = e[o]) && (i && !i(a, r, n) || (s.push(a),
                u && t.push(o)));
            return s
        }
        function we(h, f, m, g, v, e) {
            return g && !g[C] && (g = we(g)),
            v && !v[C] && (v = we(v, e)),
            oe(function(e, t, i, r) {
                var n, a, s, o = [], l = [], u = t.length, c = e || function(e, t, i) {
                    for (var r = 0, n = t.length; r < n; r++)
                        ae(e, t[r], i);
                    return i
                }(f || "*", i.nodeType ? [i] : i, []), p = !h || !e && f ? c : xe(c, o, h, i, r), d = m ? v || (e ? h : u || g) ? [] : t : p;
                if (m && m(p, d, i, r),
                g)
                    for (n = xe(d, l),
                    g(n, [], i, r),
                    a = n.length; a--; )
                        (s = n[a]) && (d[l[a]] = !(p[l[a]] = s));
                if (e) {
                    if (v || h) {
                        if (v) {
                            for (n = [],
                            a = d.length; a--; )
                                (s = d[a]) && n.push(p[a] = s);
                            v(null, d = [], n, r)
                        }
                        for (a = d.length; a--; )
                            (s = d[a]) && -1 < (n = v ? R(e, s) : o[a]) && (e[n] = !(t[n] = s))
                    }
                } else
                    d = xe(d === t ? d.splice(u, d.length) : d),
                    v ? v(null, t, d, r) : z.apply(t, d)
            })
        }
        function be(e) {
            for (var n, t, i, r = e.length, a = x.relative[e[0].type], s = a || x.relative[" "], o = a ? 1 : 0, l = ye(function(e) {
                return e === n
            }, s, !0), u = ye(function(e) {
                return -1 < R(n, e)
            }, s, !0), c = [function(e, t, i) {
                var r = !a && (i || t !== w) || ((n = t).nodeType ? l(e, t, i) : u(e, t, i));
                return n = null,
                r
            }
            ]; o < r; o++)
                if (t = x.relative[e[o].type])
                    c = [ye(_e(c), t)];
                else {
                    if ((t = x.filter[e[o].type].apply(null, e[o].matches))[C]) {
                        for (i = ++o; i < r && !x.relative[e[i].type]; i++)
                            ;
                        return we(1 < o && _e(c), 1 < o && ve(e.slice(0, o - 1).concat({
                            value: " " === e[o - 2].type ? "*" : ""
                        })).replace(B, "$1"), t, o < i && be(e.slice(o, i)), i < r && be(e = e.slice(i)), i < r && ve(e))
                    }
                    c.push(t)
                }
            return _e(c)
        }
        return ge.prototype = x.filters = x.pseudos,
        x.setFilters = new ge,
        f = ae.tokenize = function(e, t) {
            var i, r, n, a, s, o, l, u = _[e + " "];
            if (u)
                return t ? 0 : u.slice(0);
            for (s = e,
            o = [],
            l = x.preFilter; s; ) {
                for (a in i && !(r = V.exec(s)) || (r && (s = s.slice(r[0].length) || s),
                o.push(n = [])),
                i = !1,
                (r = X.exec(s)) && (i = r.shift(),
                n.push({
                    value: i,
                    type: r[0].replace(B, " ")
                }),
                s = s.slice(i.length)),
                x.filter)
                    !(r = G[a].exec(s)) || l[a] && !(r = l[a](r)) || (i = r.shift(),
                    n.push({
                        value: i,
                        type: a,
                        matches: r
                    }),
                    s = s.slice(i.length));
                if (!i)
                    break
            }
            return t ? s.length : s ? ae.error(e) : _(e, o).slice(0)
        }
        ,
        p = ae.compile = function(e, t) {
            var i, g, v, y, _, r, n = [], a = [], s = k[e + " "];
            if (!s) {
                for (t || (t = f(e)),
                i = t.length; i--; )
                    (s = be(t[i]))[C] ? n.push(s) : a.push(s);
                (s = k(e, (g = a,
                y = 0 < (v = n).length,
                _ = 0 < g.length,
                r = function(e, t, i, r, n) {
                    var a, s, o, l = 0, u = "0", c = e && [], p = [], d = w, h = e || _ && x.find.TAG("*", n), f = P += null == d ? 1 : Math.random() || .1, m = h.length;
                    for (n && (w = t === T || t || n); u !== m && null != (a = h[u]); u++) {
                        if (_ && a) {
                            for (s = 0,
                            t || a.ownerDocument === T || (b(a),
                            i = !S); o = g[s++]; )
                                if (o(a, t || T, i)) {
                                    r.push(a);
                                    break
                                }
                            n && (P = f)
                        }
                        y && ((a = !o && a) && l--,
                        e && c.push(a))
                    }
                    if (l += u,
                    y && u !== l) {
                        for (s = 0; o = v[s++]; )
                            o(c, p, t, i);
                        if (e) {
                            if (0 < l)
                                for (; u--; )
                                    c[u] || p[u] || (p[u] = A.call(r));
                            p = xe(p)
                        }
                        z.apply(r, p),
                        n && !e && 0 < p.length && 1 < l + v.length && ae.uniqueSort(r)
                    }
                    return n && (P = f,
                    w = d),
                    c
                }
                ,
                y ? oe(r) : r))).selector = e
            }
            return s
        }
        ,
        m = ae.select = function(e, t, i, r) {
            var n, a, s, o, l, u = "function" == typeof e && e, c = !r && f(e = u.selector || e);
            if (i = i || [],
            1 === c.length) {
                if (2 < (a = c[0] = c[0].slice(0)).length && "ID" === (s = a[0]).type && 9 === t.nodeType && S && x.relative[a[1].type]) {
                    if (!(t = (x.find.ID(s.matches[0].replace(J, ee), t) || [])[0]))
                        return i;
                    u && (t = t.parentNode),
                    e = e.slice(a.shift().value.length)
                }
                for (n = G.needsContext.test(e) ? 0 : a.length; n-- && (s = a[n],
                !x.relative[o = s.type]); )
                    if ((l = x.find[o]) && (r = l(s.matches[0].replace(J, ee), K.test(a[0].type) && me(t.parentNode) || t))) {
                        if (a.splice(n, 1),
                        !(e = r.length && ve(a)))
                            return z.apply(i, r),
                            i;
                        break
                    }
            }
            return (u || p(e, c))(r, t, !S, i, !t || K.test(e) && me(t.parentNode) || t),
            i
        }
        ,
        h.sortStable = C.split("").sort(M).join("") === C,
        h.detectDuplicates = !!u,
        b(),
        h.sortDetached = le(function(e) {
            return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
        }),
        le(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || ue("type|href|height|width", function(e, t, i) {
            if (!i)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        h.attributes && le(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || ue("value", function(e, t, i) {
            if (!i && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        le(function(e) {
            return null == e.getAttribute("disabled")
        }) || ue(I, function(e, t, i) {
            var r;
            if (!i)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        ae
    }(T);
    C.find = x,
    C.expr = x.selectors,
    C.expr[":"] = C.expr.pseudos,
    C.uniqueSort = C.unique = x.uniqueSort,
    C.text = x.getText,
    C.isXMLDoc = x.isXML,
    C.contains = x.contains,
    C.escapeSelector = x.escape;
    var w = function(e, t, i) {
        for (var r = [], n = void 0 !== i; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (n && C(e).is(i))
                    break;
                r.push(e)
            }
        return r
    }
      , b = function(e, t) {
        for (var i = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && i.push(e);
        return i
    }
      , P = C.expr.match.needsContext;
    function k(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var M = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
      , E = /^.[^:#\[\.,]*$/;
    function A(e, i, r) {
        return C.isFunction(i) ? C.grep(e, function(e, t) {
            return !!i.call(e, t, e) !== r
        }) : i.nodeType ? C.grep(e, function(e) {
            return e === i !== r
        }) : "string" != typeof i ? C.grep(e, function(e) {
            return -1 < n.call(i, e) !== r
        }) : E.test(i) ? C.filter(i, e, r) : (i = C.filter(i, e),
        C.grep(e, function(e) {
            return -1 < n.call(i, e) !== r && 1 === e.nodeType
        }))
    }
    C.filter = function(e, t, i) {
        var r = t[0];
        return i && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    C.fn.extend({
        find: function(e) {
            var t, i, r = this.length, n = this;
            if ("string" != typeof e)
                return this.pushStack(C(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (C.contains(n[t], this))
                            return !0
                }));
            for (i = this.pushStack([]),
            t = 0; t < r; t++)
                C.find(e, n[t], i);
            return 1 < r ? C.uniqueSort(i) : i
        },
        filter: function(e) {
            return this.pushStack(A(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(A(this, e || [], !0))
        },
        is: function(e) {
            return !!A(this, "string" == typeof e && P.test(e) ? C(e) : e || [], !1).length
        }
    });
    var O, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (C.fn.init = function(e, t, i) {
        var r, n;
        if (!e)
            return this;
        if (i = i || O,
        "string" != typeof e)
            return e.nodeType ? (this[0] = e,
            this.length = 1,
            this) : C.isFunction(e) ? void 0 !== i.ready ? i.ready(e) : e(C) : C.makeArray(e, this);
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : z.exec(e)) || !r[1] && t)
            return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
        if (r[1]) {
            if (t = t instanceof C ? t[0] : t,
            C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : S, !0)),
            M.test(r[1]) && C.isPlainObject(t))
                for (r in t)
                    C.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
        }
        return (n = S.getElementById(r[2])) && (this[0] = n,
        this.length = 1),
        this
    }
    ).prototype = C.fn,
    O = C(S);
    var D = /^(?:parents|prev(?:Until|All))/
      , R = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function I(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    C.fn.extend({
        has: function(e) {
            var t = C(e, this)
              , i = t.length;
            return this.filter(function() {
                for (var e = 0; e < i; e++)
                    if (C.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var i, r = 0, n = this.length, a = [], s = "string" != typeof e && C(e);
            if (!P.test(e))
                for (; r < n; r++)
                    for (i = this[r]; i && i !== t; i = i.parentNode)
                        if (i.nodeType < 11 && (s ? -1 < s.index(i) : 1 === i.nodeType && C.find.matchesSelector(i, e))) {
                            a.push(i);
                            break
                        }
            return this.pushStack(1 < a.length ? C.uniqueSort(a) : a)
        },
        index: function(e) {
            return e ? "string" == typeof e ? n.call(C(e), this[0]) : n.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    C.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return w(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return w(e, "parentNode", i)
        },
        next: function(e) {
            return I(e, "nextSibling")
        },
        prev: function(e) {
            return I(e, "previousSibling")
        },
        nextAll: function(e) {
            return w(e, "nextSibling")
        },
        prevAll: function(e) {
            return w(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return w(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return w(e, "previousSibling", i)
        },
        siblings: function(e) {
            return b((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return b(e.firstChild)
        },
        contents: function(e) {
            return k(e, "iframe") ? e.contentDocument : (k(e, "template") && (e = e.content || e),
            C.merge([], e.childNodes))
        }
    }, function(r, n) {
        C.fn[r] = function(e, t) {
            var i = C.map(this, n, e);
            return "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (i = C.filter(t, i)),
            1 < this.length && (R[r] || C.uniqueSort(i),
            D.test(r) && i.reverse()),
            this.pushStack(i)
        }
    });
    var L = /[^\x20\t\r\n\f]+/g;
    function N(e) {
        return e
    }
    function H(e) {
        throw e
    }
    function F(e, t, i, r) {
        var n;
        try {
            e && C.isFunction(n = e.promise) ? n.call(e).done(t).fail(i) : e && C.isFunction(n = e.then) ? n.call(e, t, i) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            i.apply(void 0, [e])
        }
    }
    C.Callbacks = function(r) {
        var e, i;
        r = "string" == typeof r ? (e = r,
        i = {},
        C.each(e.match(L) || [], function(e, t) {
            i[t] = !0
        }),
        i) : C.extend({}, r);
        var n, t, a, s, o = [], l = [], u = -1, c = function() {
            for (s = s || r.once,
            a = n = !0; l.length; u = -1)
                for (t = l.shift(); ++u < o.length; )
                    !1 === o[u].apply(t[0], t[1]) && r.stopOnFalse && (u = o.length,
                    t = !1);
            r.memory || (t = !1),
            n = !1,
            s && (o = t ? [] : "")
        }, p = {
            add: function() {
                return o && (t && !n && (u = o.length - 1,
                l.push(t)),
                function i(e) {
                    C.each(e, function(e, t) {
                        C.isFunction(t) ? r.unique && p.has(t) || o.push(t) : t && t.length && "string" !== C.type(t) && i(t)
                    })
                }(arguments),
                t && !n && c()),
                this
            },
            remove: function() {
                return C.each(arguments, function(e, t) {
                    for (var i; -1 < (i = C.inArray(t, o, i)); )
                        o.splice(i, 1),
                        i <= u && u--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < C.inArray(e, o) : 0 < o.length
            },
            empty: function() {
                return o && (o = []),
                this
            },
            disable: function() {
                return s = l = [],
                o = t = "",
                this
            },
            disabled: function() {
                return !o
            },
            lock: function() {
                return s = l = [],
                t || n || (o = t = ""),
                this
            },
            locked: function() {
                return !!s
            },
            fireWith: function(e, t) {
                return s || (t = [e, (t = t || []).slice ? t.slice() : t],
                l.push(t),
                n || c()),
                this
            },
            fire: function() {
                return p.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!a
            }
        };
        return p
    }
    ,
    C.extend({
        Deferred: function(e) {
            var a = [["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2], ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]]
              , n = "pending"
              , s = {
                state: function() {
                    return n
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return s.then(null, e)
                },
                pipe: function() {
                    var n = arguments;
                    return C.Deferred(function(r) {
                        C.each(a, function(e, t) {
                            var i = C.isFunction(n[t[4]]) && n[t[4]];
                            o[t[1]](function() {
                                var e = i && i.apply(this, arguments);
                                e && C.isFunction(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, i ? [e] : arguments)
                            })
                        }),
                        n = null
                    }).promise()
                },
                then: function(t, i, r) {
                    var l = 0;
                    function u(n, a, s, o) {
                        return function() {
                            var i = this
                              , r = arguments
                              , e = function() {
                                var e, t;
                                if (!(n < l)) {
                                    if ((e = s.apply(i, r)) === a.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    C.isFunction(t) ? o ? t.call(e, u(l, a, N, o), u(l, a, H, o)) : (l++,
                                    t.call(e, u(l, a, N, o), u(l, a, H, o), u(l, a, N, a.notifyWith))) : (s !== N && (i = void 0,
                                    r = [e]),
                                    (o || a.resolveWith)(i, r))
                                }
                            }
                              , t = o ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, t.stackTrace),
                                    l <= n + 1 && (s !== H && (i = void 0,
                                    r = [e]),
                                    a.rejectWith(i, r))
                                }
                            }
                            ;
                            n ? t() : (C.Deferred.getStackHook && (t.stackTrace = C.Deferred.getStackHook()),
                            T.setTimeout(t))
                        }
                    }
                    return C.Deferred(function(e) {
                        a[0][3].add(u(0, e, C.isFunction(r) ? r : N, e.notifyWith)),
                        a[1][3].add(u(0, e, C.isFunction(t) ? t : N)),
                        a[2][3].add(u(0, e, C.isFunction(i) ? i : H))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? C.extend(e, s) : s
                }
            }
              , o = {};
            return C.each(a, function(e, t) {
                var i = t[2]
                  , r = t[5];
                s[t[1]] = i.add,
                r && i.add(function() {
                    n = r
                }, a[3 - e][2].disable, a[0][2].lock),
                i.add(t[3].fire),
                o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                }
                ,
                o[t[0] + "With"] = i.fireWith
            }),
            s.promise(o),
            e && e.call(o, o),
            o
        },
        when: function(e) {
            var i = arguments.length
              , t = i
              , r = Array(t)
              , n = o.call(arguments)
              , a = C.Deferred()
              , s = function(t) {
                return function(e) {
                    r[t] = this,
                    n[t] = 1 < arguments.length ? o.call(arguments) : e,
                    --i || a.resolveWith(r, n)
                }
            };
            if (i <= 1 && (F(e, a.done(s(t)).resolve, a.reject, !i),
            "pending" === a.state() || C.isFunction(n[t] && n[t].then)))
                return a.then();
            for (; t--; )
                F(n[t], s(t), a.reject);
            return a.promise()
        }
    });
    var j = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    C.Deferred.exceptionHook = function(e, t) {
        T.console && T.console.warn && e && j.test(e.name) && T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    C.readyException = function(e) {
        T.setTimeout(function() {
            throw e
        })
    }
    ;
    var B = C.Deferred();
    function V() {
        S.removeEventListener("DOMContentLoaded", V),
        T.removeEventListener("load", V),
        C.ready()
    }
    C.fn.ready = function(e) {
        return B.then(e).catch(function(e) {
            C.readyException(e)
        }),
        this
    }
    ,
    C.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --C.readyWait : C.isReady) || ((C.isReady = !0) !== e && 0 < --C.readyWait || B.resolveWith(S, [C]))
        }
    }),
    C.ready.then = B.then,
    "complete" === S.readyState || "loading" !== S.readyState && !S.documentElement.doScroll ? T.setTimeout(C.ready) : (S.addEventListener("DOMContentLoaded", V),
    T.addEventListener("load", V));
    var X = function(e, t, i, r, n, a, s) {
        var o = 0
          , l = e.length
          , u = null == i;
        if ("object" === C.type(i))
            for (o in n = !0,
            i)
                X(e, t, o, i[o], !0, a, s);
        else if (void 0 !== r && (n = !0,
        C.isFunction(r) || (s = !0),
        u && (t = s ? (t.call(e, r),
        null) : (u = t,
        function(e, t, i) {
            return u.call(C(e), i)
        }
        )),
        t))
            for (; o < l; o++)
                t(e[o], i, s ? r : r.call(e[o], o, t(e[o], i)));
        return n ? e : u ? t.call(e) : l ? t(e[0], i) : a
    }
      , q = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function W() {
        this.expando = C.expando + W.uid++
    }
    W.uid = 1,
    W.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, i) {
            var r, n = this.cache(e);
            if ("string" == typeof t)
                n[C.camelCase(t)] = i;
            else
                for (r in t)
                    n[C.camelCase(r)] = t[r];
            return n
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][C.camelCase(t)]
        },
        access: function(e, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i),
            void 0 !== i ? i : t)
        },
        remove: function(e, t) {
            var i, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    i = (t = Array.isArray(t) ? t.map(C.camelCase) : (t = C.camelCase(t))in r ? [t] : t.match(L) || []).length;
                    for (; i--; )
                        delete r[t[i]]
                }
                (void 0 === t || C.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !C.isEmptyObject(t)
        }
    };
    var Y = new W
      , G = new W
      , $ = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , U = /[A-Z]/g;
    function Q(e, t, i) {
        var r, n;
        if (void 0 === i && 1 === e.nodeType)
            if (r = "data-" + t.replace(U, "-$&").toLowerCase(),
            "string" == typeof (i = e.getAttribute(r))) {
                try {
                    i = "true" === (n = i) || "false" !== n && ("null" === n ? null : n === +n + "" ? +n : $.test(n) ? JSON.parse(n) : n)
                } catch (e) {}
                G.set(e, t, i)
            } else
                i = void 0;
        return i
    }
    C.extend({
        hasData: function(e) {
            return G.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, i) {
            return G.access(e, t, i)
        },
        removeData: function(e, t) {
            G.remove(e, t)
        },
        _data: function(e, t, i) {
            return Y.access(e, t, i)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }),
    C.fn.extend({
        data: function(i, e) {
            var t, r, n, a = this[0], s = a && a.attributes;
            if (void 0 !== i)
                return "object" == typeof i ? this.each(function() {
                    G.set(this, i)
                }) : X(this, function(e) {
                    var t;
                    if (a && void 0 === e) {
                        if (void 0 !== (t = G.get(a, i)))
                            return t;
                        if (void 0 !== (t = Q(a, i)))
                            return t
                    } else
                        this.each(function() {
                            G.set(this, i, e)
                        })
                }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (n = G.get(a),
            1 === a.nodeType && !Y.get(a, "hasDataAttrs"))) {
                for (t = s.length; t--; )
                    s[t] && (0 === (r = s[t].name).indexOf("data-") && (r = C.camelCase(r.slice(5)),
                    Q(a, r, n[r])));
                Y.set(a, "hasDataAttrs", !0)
            }
            return n
        },
        removeData: function(e) {
            return this.each(function() {
                G.remove(this, e)
            })
        }
    }),
    C.extend({
        queue: function(e, t, i) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = Y.get(e, t),
                i && (!r || Array.isArray(i) ? r = Y.access(e, t, C.makeArray(i)) : r.push(i)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = C.queue(e, t)
              , r = i.length
              , n = i.shift()
              , a = C._queueHooks(e, t);
            "inprogress" === n && (n = i.shift(),
            r--),
            n && ("fx" === t && i.unshift("inprogress"),
            delete a.stop,
            n.call(e, function() {
                C.dequeue(e, t)
            }, a)),
            !r && a && a.empty.fire()
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return Y.get(e, i) || Y.access(e, i, {
                empty: C.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", i])
                })
            })
        }
    }),
    C.fn.extend({
        queue: function(t, i) {
            var e = 2;
            return "string" != typeof t && (i = t,
            t = "fx",
            e--),
            arguments.length < e ? C.queue(this[0], t) : void 0 === i ? this : this.each(function() {
                var e = C.queue(this, t, i);
                C._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                C.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var i, r = 1, n = C.Deferred(), a = this, s = this.length, o = function() {
                --r || n.resolveWith(a, [a])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; s--; )
                (i = Y.get(a[s], e + "queueHooks")) && i.empty && (r++,
                i.empty.add(o));
            return o(),
            n.promise(t)
        }
    });
    var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , K = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$","i")
      , J = ["Top", "Right", "Bottom", "Left"]
      , ee = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && C.contains(e.ownerDocument, e) && "none" === C.css(e, "display")
    }
      , te = function(e, t, i, r) {
        var n, a, s = {};
        for (a in t)
            s[a] = e.style[a],
            e.style[a] = t[a];
        for (a in n = i.apply(e, r || []),
        t)
            e.style[a] = s[a];
        return n
    };
    function ie(e, t, i, r) {
        var n, a = 1, s = 20, o = r ? function() {
            return r.cur()
        }
        : function() {
            return C.css(e, t, "")
        }
        , l = o(), u = i && i[3] || (C.cssNumber[t] ? "" : "px"), c = (C.cssNumber[t] || "px" !== u && +l) && K.exec(C.css(e, t));
        if (c && c[3] !== u)
            for (u = u || c[3],
            i = i || [],
            c = +l || 1; c /= a = a || ".5",
            C.style(e, t, c + u),
            a !== (a = o() / l) && 1 !== a && --s; )
                ;
        return i && (c = +c || +l || 0,
        n = i[1] ? c + (i[1] + 1) * i[2] : +i[2],
        r && (r.unit = u,
        r.start = c,
        r.end = n)),
        n
    }
    var re = {};
    function ne(e, t) {
        for (var i, r, n = [], a = 0, s = e.length; a < s; a++)
            (r = e[a]).style && (i = r.style.display,
            t ? ("none" === i && (n[a] = Y.get(r, "display") || null,
            n[a] || (r.style.display = "")),
            "" === r.style.display && ee(r) && (n[a] = (p = u = l = void 0,
            u = (o = r).ownerDocument,
            c = o.nodeName,
            (p = re[c]) || (l = u.body.appendChild(u.createElement(c)),
            p = C.css(l, "display"),
            l.parentNode.removeChild(l),
            "none" === p && (p = "block"),
            re[c] = p)))) : "none" !== i && (n[a] = "none",
            Y.set(r, "display", i)));
        var o, l, u, c, p;
        for (a = 0; a < s; a++)
            null != n[a] && (e[a].style.display = n[a]);
        return e
    }
    C.fn.extend({
        show: function() {
            return ne(this, !0)
        },
        hide: function() {
            return ne(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ee(this) ? C(this).show() : C(this).hide()
            })
        }
    });
    var ae = /^(?:checkbox|radio)$/i
      , se = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , oe = /^$|\/(?:java|ecma)script/i
      , le = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ue(e, t) {
        var i;
        return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && k(e, t) ? C.merge([e], i) : i
    }
    function ce(e, t) {
        for (var i = 0, r = e.length; i < r; i++)
            Y.set(e[i], "globalEval", !t || Y.get(t[i], "globalEval"))
    }
    le.optgroup = le.option,
    le.tbody = le.tfoot = le.colgroup = le.caption = le.thead,
    le.th = le.td;
    var pe, de, he = /<|&#?\w+;/;
    function fe(e, t, i, r, n) {
        for (var a, s, o, l, u, c, p = t.createDocumentFragment(), d = [], h = 0, f = e.length; h < f; h++)
            if ((a = e[h]) || 0 === a)
                if ("object" === C.type(a))
                    C.merge(d, a.nodeType ? [a] : a);
                else if (he.test(a)) {
                    for (s = s || p.appendChild(t.createElement("div")),
                    o = (se.exec(a) || ["", ""])[1].toLowerCase(),
                    l = le[o] || le._default,
                    s.innerHTML = l[1] + C.htmlPrefilter(a) + l[2],
                    c = l[0]; c--; )
                        s = s.lastChild;
                    C.merge(d, s.childNodes),
                    (s = p.firstChild).textContent = ""
                } else
                    d.push(t.createTextNode(a));
        for (p.textContent = "",
        h = 0; a = d[h++]; )
            if (r && -1 < C.inArray(a, r))
                n && n.push(a);
            else if (u = C.contains(a.ownerDocument, a),
            s = ue(p.appendChild(a), "script"),
            u && ce(s),
            i)
                for (c = 0; a = s[c++]; )
                    oe.test(a.type || "") && i.push(a);
        return p
    }
    pe = S.createDocumentFragment().appendChild(S.createElement("div")),
    (de = S.createElement("input")).setAttribute("type", "radio"),
    de.setAttribute("checked", "checked"),
    de.setAttribute("name", "t"),
    pe.appendChild(de),
    g.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked,
    pe.innerHTML = "<textarea>x</textarea>",
    g.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue;
    var me = S.documentElement
      , ge = /^key/
      , ve = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , ye = /^([^.]*)(?:\.(.+)|)/;
    function _e() {
        return !0
    }
    function xe() {
        return !1
    }
    function we() {
        try {
            return S.activeElement
        } catch (e) {}
    }
    function be(e, t, i, r, n, a) {
        var s, o;
        if ("object" == typeof t) {
            for (o in "string" != typeof i && (r = r || i,
            i = void 0),
            t)
                be(e, o, i, r, t[o], a);
            return e
        }
        if (null == r && null == n ? (n = i,
        r = i = void 0) : null == n && ("string" == typeof i ? (n = r,
        r = void 0) : (n = r,
        r = i,
        i = void 0)),
        !1 === n)
            n = xe;
        else if (!n)
            return e;
        return 1 === a && (s = n,
        (n = function(e) {
            return C().off(e),
            s.apply(this, arguments)
        }
        ).guid = s.guid || (s.guid = C.guid++)),
        e.each(function() {
            C.event.add(this, t, n, r, i)
        })
    }
    C.event = {
        global: {},
        add: function(t, e, i, r, n) {
            var a, s, o, l, u, c, p, d, h, f, m, g = Y.get(t);
            if (g)
                for (i.handler && (i = (a = i).handler,
                n = a.selector),
                n && C.find.matchesSelector(me, n),
                i.guid || (i.guid = C.guid++),
                (l = g.events) || (l = g.events = {}),
                (s = g.handle) || (s = g.handle = function(e) {
                    return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                u = (e = (e || "").match(L) || [""]).length; u--; )
                    h = m = (o = ye.exec(e[u]) || [])[1],
                    f = (o[2] || "").split(".").sort(),
                    h && (p = C.event.special[h] || {},
                    h = (n ? p.delegateType : p.bindType) || h,
                    p = C.event.special[h] || {},
                    c = C.extend({
                        type: h,
                        origType: m,
                        data: r,
                        handler: i,
                        guid: i.guid,
                        selector: n,
                        needsContext: n && C.expr.match.needsContext.test(n),
                        namespace: f.join(".")
                    }, a),
                    (d = l[h]) || ((d = l[h] = []).delegateCount = 0,
                    p.setup && !1 !== p.setup.call(t, r, f, s) || t.addEventListener && t.addEventListener(h, s)),
                    p.add && (p.add.call(t, c),
                    c.handler.guid || (c.handler.guid = i.guid)),
                    n ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                    C.event.global[h] = !0)
        },
        remove: function(e, t, i, r, n) {
            var a, s, o, l, u, c, p, d, h, f, m, g = Y.hasData(e) && Y.get(e);
            if (g && (l = g.events)) {
                for (u = (t = (t || "").match(L) || [""]).length; u--; )
                    if (h = m = (o = ye.exec(t[u]) || [])[1],
                    f = (o[2] || "").split(".").sort(),
                    h) {
                        for (p = C.event.special[h] || {},
                        d = l[h = (r ? p.delegateType : p.bindType) || h] || [],
                        o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = a = d.length; a--; )
                            c = d[a],
                            !n && m !== c.origType || i && i.guid !== c.guid || o && !o.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(a, 1),
                            c.selector && d.delegateCount--,
                            p.remove && p.remove.call(e, c));
                        s && !d.length && (p.teardown && !1 !== p.teardown.call(e, f, g.handle) || C.removeEvent(e, h, g.handle),
                        delete l[h])
                    } else
                        for (h in l)
                            C.event.remove(e, h + t[u], i, r, !0);
                C.isEmptyObject(l) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, i, r, n, a, s, o = C.event.fix(e), l = new Array(arguments.length), u = (Y.get(this, "events") || {})[o.type] || [], c = C.event.special[o.type] || {};
            for (l[0] = o,
            t = 1; t < arguments.length; t++)
                l[t] = arguments[t];
            if (o.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, o)) {
                for (s = C.event.handlers.call(this, o, u),
                t = 0; (n = s[t++]) && !o.isPropagationStopped(); )
                    for (o.currentTarget = n.elem,
                    i = 0; (a = n.handlers[i++]) && !o.isImmediatePropagationStopped(); )
                        o.rnamespace && !o.rnamespace.test(a.namespace) || (o.handleObj = a,
                        o.data = a.data,
                        void 0 !== (r = ((C.event.special[a.origType] || {}).handle || a.handler).apply(n.elem, l)) && !1 === (o.result = r) && (o.preventDefault(),
                        o.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, o),
                o.result
            }
        },
        handlers: function(e, t) {
            var i, r, n, a, s, o = [], l = t.delegateCount, u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (a = [],
                        s = {},
                        i = 0; i < l; i++)
                            void 0 === s[n = (r = t[i]).selector + " "] && (s[n] = r.needsContext ? -1 < C(n, this).index(u) : C.find(n, this, null, [u]).length),
                            s[n] && a.push(r);
                        a.length && o.push({
                            elem: u,
                            handlers: a
                        })
                    }
            return u = this,
            l < t.length && o.push({
                elem: u,
                handlers: t.slice(l)
            }),
            o
        },
        addProp: function(t, e) {
            Object.defineProperty(C.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: C.isFunction(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[C.expando] ? e : new C.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== we() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === we() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && k(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return k(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    C.removeEvent = function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    }
    ,
    C.Event = function(e, t) {
        return this instanceof C.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? _e : xe,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && C.extend(this, t),
        this.timeStamp = e && e.timeStamp || C.now(),
        void (this[C.expando] = !0)) : new C.Event(e,t)
    }
    ,
    C.Event.prototype = {
        constructor: C.Event,
        isDefaultPrevented: xe,
        isPropagationStopped: xe,
        isImmediatePropagationStopped: xe,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = _e,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = _e,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = _e,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    C.each({
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
        char: !0,
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
            return null == e.which && ge.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ve.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, C.event.addProp),
    C.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, n) {
        C.event.special[e] = {
            delegateType: n,
            bindType: n,
            handle: function(e) {
                var t, i = e.relatedTarget, r = e.handleObj;
                return i && (i === this || C.contains(this, i)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = n),
                t
            }
        }
    }),
    C.fn.extend({
        on: function(e, t, i, r) {
            return be(this, e, t, i, r)
        },
        one: function(e, t, i, r) {
            return be(this, e, t, i, r, 1)
        },
        off: function(e, t, i) {
            var r, n;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" != typeof e)
                return !1 !== t && "function" != typeof t || (i = t,
                t = void 0),
                !1 === i && (i = xe),
                this.each(function() {
                    C.event.remove(this, e, i, t)
                });
            for (n in e)
                this.off(n, t, e[n]);
            return this
        }
    });
    var Te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , Se = /<script|<style|<link/i
      , Ce = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Pe = /^true\/(.*)/
      , ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Me(e, t) {
        return k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && C(">tbody", e)[0] || e
    }
    function Ee(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function Ae(e) {
        var t = Pe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function Oe(e, t) {
        var i, r, n, a, s, o, l, u;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (a = Y.access(e),
            s = Y.set(t, a),
            u = a.events))
                for (n in delete s.handle,
                s.events = {},
                u)
                    for (i = 0,
                    r = u[n].length; i < r; i++)
                        C.event.add(t, n, u[n][i]);
            G.hasData(e) && (o = G.access(e),
            l = C.extend({}, o),
            G.set(t, l))
        }
    }
    function ze(i, r, n, a) {
        r = m.apply([], r);
        var e, t, s, o, l, u, c = 0, p = i.length, d = p - 1, h = r[0], f = C.isFunction(h);
        if (f || 1 < p && "string" == typeof h && !g.checkClone && Ce.test(h))
            return i.each(function(e) {
                var t = i.eq(e);
                f && (r[0] = h.call(this, e, t.html())),
                ze(t, r, n, a)
            });
        if (p && (t = (e = fe(r, i[0].ownerDocument, !1, i, a)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || a)) {
            for (o = (s = C.map(ue(e, "script"), Ee)).length; c < p; c++)
                l = e,
                c !== d && (l = C.clone(l, !0, !0),
                o && C.merge(s, ue(l, "script"))),
                n.call(i[c], l, c);
            if (o)
                for (u = s[s.length - 1].ownerDocument,
                C.map(s, Ae),
                c = 0; c < o; c++)
                    l = s[c],
                    oe.test(l.type || "") && !Y.access(l, "globalEval") && C.contains(u, l) && (l.src ? C._evalUrl && C._evalUrl(l.src) : v(l.textContent.replace(ke, ""), u))
        }
        return i
    }
    function De(e, t, i) {
        for (var r, n = t ? C.filter(t, e) : e, a = 0; null != (r = n[a]); a++)
            i || 1 !== r.nodeType || C.cleanData(ue(r)),
            r.parentNode && (i && C.contains(r.ownerDocument, r) && ce(ue(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    C.extend({
        htmlPrefilter: function(e) {
            return e.replace(Te, "<$1></$2>")
        },
        clone: function(e, t, i) {
            var r, n, a, s, o, l, u, c = e.cloneNode(!0), p = C.contains(e.ownerDocument, e);
            if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                for (s = ue(c),
                r = 0,
                n = (a = ue(e)).length; r < n; r++)
                    o = a[r],
                    l = s[r],
                    void 0,
                    "input" === (u = l.nodeName.toLowerCase()) && ae.test(o.type) ? l.checked = o.checked : "input" !== u && "textarea" !== u || (l.defaultValue = o.defaultValue);
            if (t)
                if (i)
                    for (a = a || ue(e),
                    s = s || ue(c),
                    r = 0,
                    n = a.length; r < n; r++)
                        Oe(a[r], s[r]);
                else
                    Oe(e, c);
            return 0 < (s = ue(c, "script")).length && ce(s, !p && ue(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, i, r, n = C.event.special, a = 0; void 0 !== (i = e[a]); a++)
                if (q(i)) {
                    if (t = i[Y.expando]) {
                        if (t.events)
                            for (r in t.events)
                                n[r] ? C.event.remove(i, r) : C.removeEvent(i, r, t.handle);
                        i[Y.expando] = void 0
                    }
                    i[G.expando] && (i[G.expando] = void 0)
                }
        }
    }),
    C.fn.extend({
        detach: function(e) {
            return De(this, e, !0)
        },
        remove: function(e) {
            return De(this, e)
        },
        text: function(e) {
            return X(this, function(e) {
                return void 0 === e ? C.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return ze(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Me(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return ze(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Me(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return ze(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return ze(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (C.cleanData(ue(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return C.clone(this, e, t)
            })
        },
        html: function(e) {
            return X(this, function(e) {
                var t = this[0] || {}
                  , i = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Se.test(e) && !le[(se.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = C.htmlPrefilter(e);
                    try {
                        for (; i < r; i++)
                            1 === (t = this[i] || {}).nodeType && (C.cleanData(ue(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var i = [];
            return ze(this, arguments, function(e) {
                var t = this.parentNode;
                C.inArray(this, i) < 0 && (C.cleanData(ue(this)),
                t && t.replaceChild(e, this))
            }, i)
        }
    }),
    C.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        C.fn[e] = function(e) {
            for (var t, i = [], r = C(e), n = r.length - 1, a = 0; a <= n; a++)
                t = a === n ? this : this.clone(!0),
                C(r[a])[s](t),
                l.apply(i, t.get());
            return this.pushStack(i)
        }
    });
    var Re = /^margin/
      , Ie = new RegExp("^(" + Z + ")(?!px)[a-z%]+$","i")
      , Le = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = T),
        t.getComputedStyle(e)
    };
    function Ne(e, t, i) {
        var r, n, a, s, o = e.style;
        return (i = i || Le(e)) && ("" !== (s = i.getPropertyValue(t) || i[t]) || C.contains(e.ownerDocument, e) || (s = C.style(e, t)),
        !g.pixelMarginRight() && Ie.test(s) && Re.test(t) && (r = o.width,
        n = o.minWidth,
        a = o.maxWidth,
        o.minWidth = o.maxWidth = o.width = s,
        s = i.width,
        o.width = r,
        o.minWidth = n,
        o.maxWidth = a)),
        void 0 !== s ? s + "" : s
    }
    function He(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    !function() {
        function e() {
            if (s) {
                s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                s.innerHTML = "",
                me.appendChild(a);
                var e = T.getComputedStyle(s);
                t = "1%" !== e.top,
                n = "2px" === e.marginLeft,
                i = "4px" === e.width,
                s.style.marginRight = "50%",
                r = "4px" === e.marginRight,
                me.removeChild(a),
                s = null
            }
        }
        var t, i, r, n, a = S.createElement("div"), s = S.createElement("div");
        s.style && (s.style.backgroundClip = "content-box",
        s.cloneNode(!0).style.backgroundClip = "",
        g.clearCloneStyle = "content-box" === s.style.backgroundClip,
        a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        a.appendChild(s),
        C.extend(g, {
            pixelPosition: function() {
                return e(),
                t
            },
            boxSizingReliable: function() {
                return e(),
                i
            },
            pixelMarginRight: function() {
                return e(),
                r
            },
            reliableMarginLeft: function() {
                return e(),
                n
            }
        }))
    }();
    var Fe = /^(none|table(?!-c[ea]).+)/
      , je = /^--/
      , Be = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ve = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Xe = ["Webkit", "Moz", "ms"]
      , qe = S.createElement("div").style;
    function We(e) {
        var t = C.cssProps[e];
        return t || (t = C.cssProps[e] = function(e) {
            if (e in qe)
                return e;
            for (var t = e[0].toUpperCase() + e.slice(1), i = Xe.length; i--; )
                if ((e = Xe[i] + t)in qe)
                    return e
        }(e) || e),
        t
    }
    function Ye(e, t, i) {
        var r = K.exec(t);
        return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t
    }
    function Ge(e, t, i, r, n) {
        var a, s = 0;
        for (a = i === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; a < 4; a += 2)
            "margin" === i && (s += C.css(e, i + J[a], !0, n)),
            r ? ("content" === i && (s -= C.css(e, "padding" + J[a], !0, n)),
            "margin" !== i && (s -= C.css(e, "border" + J[a] + "Width", !0, n))) : (s += C.css(e, "padding" + J[a], !0, n),
            "padding" !== i && (s += C.css(e, "border" + J[a] + "Width", !0, n)));
        return s
    }
    function $e(e, t, i) {
        var r, n = Le(e), a = Ne(e, t, n), s = "border-box" === C.css(e, "boxSizing", !1, n);
        return Ie.test(a) ? a : (r = s && (g.boxSizingReliable() || a === e.style[t]),
        "auto" === a && (a = e["offset" + t[0].toUpperCase() + t.slice(1)]),
        (a = parseFloat(a) || 0) + Ge(e, t, i || (s ? "border" : "content"), r, n) + "px")
    }
    function Ue(e, t, i, r, n) {
        return new Ue.prototype.init(e,t,i,r,n)
    }
    C.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = Ne(e, "opacity");
                        return "" === i ? "1" : i
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
            float: "cssFloat"
        },
        style: function(e, t, i, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var n, a, s, o = C.camelCase(t), l = je.test(t), u = e.style;
                return l || (t = We(o)),
                s = C.cssHooks[t] || C.cssHooks[o],
                void 0 === i ? s && "get"in s && void 0 !== (n = s.get(e, !1, r)) ? n : u[t] : ("string" === (a = typeof i) && (n = K.exec(i)) && n[1] && (i = ie(e, t, n),
                a = "number"),
                void (null != i && i == i && ("number" === a && (i += n && n[3] || (C.cssNumber[o] ? "" : "px")),
                g.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                s && "set"in s && void 0 === (i = s.set(e, i, r)) || (l ? u.setProperty(t, i) : u[t] = i))))
            }
        },
        css: function(e, t, i, r) {
            var n, a, s, o = C.camelCase(t);
            return je.test(t) || (t = We(o)),
            (s = C.cssHooks[t] || C.cssHooks[o]) && "get"in s && (n = s.get(e, !0, i)),
            void 0 === n && (n = Ne(e, t, r)),
            "normal" === n && t in Ve && (n = Ve[t]),
            "" === i || i ? (a = parseFloat(n),
            !0 === i || isFinite(a) ? a || 0 : n) : n
        }
    }),
    C.each(["height", "width"], function(e, s) {
        C.cssHooks[s] = {
            get: function(e, t, i) {
                if (t)
                    return !Fe.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? $e(e, s, i) : te(e, Be, function() {
                        return $e(e, s, i)
                    })
            },
            set: function(e, t, i) {
                var r, n = i && Le(e), a = i && Ge(e, s, i, "border-box" === C.css(e, "boxSizing", !1, n), n);
                return a && (r = K.exec(t)) && "px" !== (r[3] || "px") && (e.style[s] = t,
                t = C.css(e, s)),
                Ye(0, t, a)
            }
        }
    }),
    C.cssHooks.marginLeft = He(g.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Ne(e, "marginLeft")) || e.getBoundingClientRect().left - te(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    C.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, a) {
        C.cssHooks[n + a] = {
            expand: function(e) {
                for (var t = 0, i = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    i[n + J[t] + a] = r[t] || r[t - 2] || r[0];
                return i
            }
        },
        Re.test(n) || (C.cssHooks[n + a].set = Ye)
    }),
    C.fn.extend({
        css: function(e, t) {
            return X(this, function(e, t, i) {
                var r, n, a = {}, s = 0;
                if (Array.isArray(t)) {
                    for (r = Le(e),
                    n = t.length; s < n; s++)
                        a[t[s]] = C.css(e, t[s], !1, r);
                    return a
                }
                return void 0 !== i ? C.style(e, t, i) : C.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((C.Tween = Ue).prototype = {
        constructor: Ue,
        init: function(e, t, i, r, n, a) {
            this.elem = e,
            this.prop = i,
            this.easing = n || C.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = a || (C.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = Ue.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ue.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = Ue.propHooks[this.prop];
            return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            i && i.set ? i.set(this) : Ue.propHooks._default.set(this),
            this
        }
    }).init.prototype = Ue.prototype,
    (Ue.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Ue.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    C.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    C.fx = Ue.prototype.init,
    C.fx.step = {};
    var Qe, Ze, Ke, Je, et = /^(?:toggle|show|hide)$/, tt = /queueHooks$/;
    function it() {
        Ze && (!1 === S.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(it) : T.setTimeout(it, C.fx.interval),
        C.fx.tick())
    }
    function rt() {
        return T.setTimeout(function() {
            Qe = void 0
        }),
        Qe = C.now()
    }
    function nt(e, t) {
        var i, r = 0, n = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            n["margin" + (i = J[r])] = n["padding" + i] = e;
        return t && (n.opacity = n.width = e),
        n
    }
    function at(e, t, i) {
        for (var r, n = (st.tweeners[t] || []).concat(st.tweeners["*"]), a = 0, s = n.length; a < s; a++)
            if (r = n[a].call(i, t, e))
                return r
    }
    function st(a, e, t) {
        var i, s, r = 0, n = st.prefilters.length, o = C.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (s)
                return !1;
            for (var e = Qe || rt(), t = Math.max(0, u.startTime + u.duration - e), i = 1 - (t / u.duration || 0), r = 0, n = u.tweens.length; r < n; r++)
                u.tweens[r].run(i);
            return o.notifyWith(a, [u, i, t]),
            i < 1 && n ? t : (n || o.notifyWith(a, [u, 1, 0]),
            o.resolveWith(a, [u]),
            !1)
        }, u = o.promise({
            elem: a,
            props: C.extend({}, e),
            opts: C.extend(!0, {
                specialEasing: {},
                easing: C.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: Qe || rt(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var i = C.Tween(a, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(i),
                i
            },
            stop: function(e) {
                var t = 0
                  , i = e ? u.tweens.length : 0;
                if (s)
                    return this;
                for (s = !0; t < i; t++)
                    u.tweens[t].run(1);
                return e ? (o.notifyWith(a, [u, 1, 0]),
                o.resolveWith(a, [u, e])) : o.rejectWith(a, [u, e]),
                this
            }
        }), c = u.props;
        for (function(e, t) {
            var i, r, n, a, s;
            for (i in e)
                if (n = t[r = C.camelCase(i)],
                a = e[i],
                Array.isArray(a) && (n = a[1],
                a = e[i] = a[0]),
                i !== r && (e[r] = a,
                delete e[i]),
                (s = C.cssHooks[r]) && "expand"in s)
                    for (i in a = s.expand(a),
                    delete e[r],
                    a)
                        i in e || (e[i] = a[i],
                        t[i] = n);
                else
                    t[r] = n
        }(c, u.opts.specialEasing); r < n; r++)
            if (i = st.prefilters[r].call(u, a, c, u.opts))
                return C.isFunction(i.stop) && (C._queueHooks(u.elem, u.opts.queue).stop = C.proxy(i.stop, i)),
                i;
        return C.map(c, at, u),
        C.isFunction(u.opts.start) && u.opts.start.call(a, u),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
        C.fx.timer(C.extend(l, {
            elem: a,
            anim: u,
            queue: u.opts.queue
        })),
        u
    }
    C.Animation = C.extend(st, {
        tweeners: {
            "*": [function(e, t) {
                var i = this.createTween(e, t);
                return ie(i.elem, e, K.exec(t), i),
                i
            }
            ]
        },
        tweener: function(e, t) {
            for (var i, r = 0, n = (e = C.isFunction(e) ? (t = e,
            ["*"]) : e.match(L)).length; r < n; r++)
                i = e[r],
                st.tweeners[i] = st.tweeners[i] || [],
                st.tweeners[i].unshift(t)
        },
        prefilters: [function(e, t, i) {
            var r, n, a, s, o, l, u, c, p = "width"in t || "height"in t, d = this, h = {}, f = e.style, m = e.nodeType && ee(e), g = Y.get(e, "fxshow");
            for (r in i.queue || (null == (s = C._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
            o = s.empty.fire,
            s.empty.fire = function() {
                s.unqueued || o()
            }
            ),
            s.unqueued++,
            d.always(function() {
                d.always(function() {
                    s.unqueued--,
                    C.queue(e, "fx").length || s.empty.fire()
                })
            })),
            t)
                if (n = t[r],
                et.test(n)) {
                    if (delete t[r],
                    a = a || "toggle" === n,
                    n === (m ? "hide" : "show")) {
                        if ("show" !== n || !g || void 0 === g[r])
                            continue;
                        m = !0
                    }
                    h[r] = g && g[r] || C.style(e, r)
                }
            if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(h))
                for (r in p && 1 === e.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY],
                null == (u = g && g.display) && (u = Y.get(e, "display")),
                "none" === (c = C.css(e, "display")) && (u ? c = u : (ne([e], !0),
                u = e.style.display || u,
                c = C.css(e, "display"),
                ne([e]))),
                ("inline" === c || "inline-block" === c && null != u) && "none" === C.css(e, "float") && (l || (d.done(function() {
                    f.display = u
                }),
                null == u && (c = f.display,
                u = "none" === c ? "" : c)),
                f.display = "inline-block")),
                i.overflow && (f.overflow = "hidden",
                d.always(function() {
                    f.overflow = i.overflow[0],
                    f.overflowX = i.overflow[1],
                    f.overflowY = i.overflow[2]
                })),
                l = !1,
                h)
                    l || (g ? "hidden"in g && (m = g.hidden) : g = Y.access(e, "fxshow", {
                        display: u
                    }),
                    a && (g.hidden = !m),
                    m && ne([e], !0),
                    d.done(function() {
                        for (r in m || ne([e]),
                        Y.remove(e, "fxshow"),
                        h)
                            C.style(e, r, h[r])
                    })),
                    l = at(m ? g[r] : 0, r, d),
                    r in g || (g[r] = l.start,
                    m && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? st.prefilters.unshift(e) : st.prefilters.push(e)
        }
    }),
    C.speed = function(e, t, i) {
        var r = e && "object" == typeof e ? C.extend({}, e) : {
            complete: i || !i && t || C.isFunction(e) && e,
            duration: e,
            easing: i && t || t && !C.isFunction(t) && t
        };
        return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            C.isFunction(r.old) && r.old.call(this),
            r.queue && C.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    C.fn.extend({
        fadeTo: function(e, t, i, r) {
            return this.filter(ee).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, i, r)
        },
        animate: function(t, e, i, r) {
            var n = C.isEmptyObject(t)
              , a = C.speed(e, i, r)
              , s = function() {
                var e = st(this, C.extend({}, t), a);
                (n || Y.get(this, "finish")) && e.stop(!0)
            };
            return s.finish = s,
            n || !1 === a.queue ? this.each(s) : this.queue(a.queue, s)
        },
        stop: function(n, e, a) {
            var s = function(e) {
                var t = e.stop;
                delete e.stop,
                t(a)
            };
            return "string" != typeof n && (a = e,
            e = n,
            n = void 0),
            e && !1 !== n && this.queue(n || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != n && n + "queueHooks"
                  , i = C.timers
                  , r = Y.get(this);
                if (t)
                    r[t] && r[t].stop && s(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && tt.test(t) && s(r[t]);
                for (t = i.length; t--; )
                    i[t].elem !== this || null != n && i[t].queue !== n || (i[t].anim.stop(a),
                    e = !1,
                    i.splice(t, 1));
                !e && a || C.dequeue(this, n)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"),
            this.each(function() {
                var e, t = Y.get(this), i = t[s + "queue"], r = t[s + "queueHooks"], n = C.timers, a = i ? i.length : 0;
                for (t.finish = !0,
                C.queue(this, s, []),
                r && r.stop && r.stop.call(this, !0),
                e = n.length; e--; )
                    n[e].elem === this && n[e].queue === s && (n[e].anim.stop(!0),
                    n.splice(e, 1));
                for (e = 0; e < a; e++)
                    i[e] && i[e].finish && i[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    C.each(["toggle", "show", "hide"], function(e, r) {
        var n = C.fn[r];
        C.fn[r] = function(e, t, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(nt(r, !0), e, t, i)
        }
    }),
    C.each({
        slideDown: nt("show"),
        slideUp: nt("hide"),
        slideToggle: nt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        C.fn[e] = function(e, t, i) {
            return this.animate(r, e, t, i)
        }
    }),
    C.timers = [],
    C.fx.tick = function() {
        var e, t = 0, i = C.timers;
        for (Qe = C.now(); t < i.length; t++)
            (e = i[t])() || i[t] !== e || i.splice(t--, 1);
        i.length || C.fx.stop(),
        Qe = void 0
    }
    ,
    C.fx.timer = function(e) {
        C.timers.push(e),
        C.fx.start()
    }
    ,
    C.fx.interval = 13,
    C.fx.start = function() {
        Ze || (Ze = !0,
        it())
    }
    ,
    C.fx.stop = function() {
        Ze = null
    }
    ,
    C.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    C.fn.delay = function(r, e) {
        return r = C.fx && C.fx.speeds[r] || r,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var i = T.setTimeout(e, r);
            t.stop = function() {
                T.clearTimeout(i)
            }
        })
    }
    ,
    Ke = S.createElement("input"),
    Je = S.createElement("select").appendChild(S.createElement("option")),
    Ke.type = "checkbox",
    g.checkOn = "" !== Ke.value,
    g.optSelected = Je.selected,
    (Ke = S.createElement("input")).value = "t",
    Ke.type = "radio",
    g.radioValue = "t" === Ke.value;
    var ot, lt = C.expr.attrHandle;
    C.fn.extend({
        attr: function(e, t) {
            return X(this, C.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                C.removeAttr(this, e)
            })
        }
    }),
    C.extend({
        attr: function(e, t, i) {
            var r, n, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a)
                return void 0 === e.getAttribute ? C.prop(e, t, i) : (1 === a && C.isXMLDoc(e) || (n = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? ot : void 0)),
                void 0 !== i ? null === i ? void C.removeAttr(e, t) : n && "set"in n && void 0 !== (r = n.set(e, i, t)) ? r : (e.setAttribute(t, i + ""),
                i) : n && "get"in n && null !== (r = n.get(e, t)) ? r : null == (r = C.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!g.radioValue && "radio" === t && k(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t),
                        i && (e.value = i),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var i, r = 0, n = t && t.match(L);
            if (n && 1 === e.nodeType)
                for (; i = n[r++]; )
                    e.removeAttribute(i)
        }
    }),
    ot = {
        set: function(e, t, i) {
            return !1 === t ? C.removeAttr(e, i) : e.setAttribute(i, i),
            i
        }
    },
    C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = lt[t] || C.find.attr;
        lt[t] = function(e, t, i) {
            var r, n, a = t.toLowerCase();
            return i || (n = lt[a],
            lt[a] = r,
            r = null != s(e, t, i) ? a : null,
            lt[a] = n),
            r
        }
    });
    var ut = /^(?:input|select|textarea|button)$/i
      , ct = /^(?:a|area)$/i;
    function pt(e) {
        return (e.match(L) || []).join(" ")
    }
    function dt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    C.fn.extend({
        prop: function(e, t) {
            return X(this, C.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[C.propFix[e] || e]
            })
        }
    }),
    C.extend({
        prop: function(e, t, i) {
            var r, n, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a)
                return 1 === a && C.isXMLDoc(e) || (t = C.propFix[t] || t,
                n = C.propHooks[t]),
                void 0 !== i ? n && "set"in n && void 0 !== (r = n.set(e, i, t)) ? r : e[t] = i : n && "get"in n && null !== (r = n.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = C.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ut.test(e.nodeName) || ct.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    g.optSelected || (C.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        C.propFix[this.toLowerCase()] = this
    }),
    C.fn.extend({
        addClass: function(t) {
            var e, i, r, n, a, s, o, l = 0;
            if (C.isFunction(t))
                return this.each(function(e) {
                    C(this).addClass(t.call(this, e, dt(this)))
                });
            if ("string" == typeof t && t)
                for (e = t.match(L) || []; i = this[l++]; )
                    if (n = dt(i),
                    r = 1 === i.nodeType && " " + pt(n) + " ") {
                        for (s = 0; a = e[s++]; )
                            r.indexOf(" " + a + " ") < 0 && (r += a + " ");
                        n !== (o = pt(r)) && i.setAttribute("class", o)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, r, n, a, s, o, l = 0;
            if (C.isFunction(t))
                return this.each(function(e) {
                    C(this).removeClass(t.call(this, e, dt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(L) || []; i = this[l++]; )
                    if (n = dt(i),
                    r = 1 === i.nodeType && " " + pt(n) + " ") {
                        for (s = 0; a = e[s++]; )
                            for (; -1 < r.indexOf(" " + a + " "); )
                                r = r.replace(" " + a + " ", " ");
                        n !== (o = pt(r)) && i.setAttribute("class", o)
                    }
            return this
        },
        toggleClass: function(n, t) {
            var a = typeof n;
            return "boolean" == typeof t && "string" === a ? t ? this.addClass(n) : this.removeClass(n) : C.isFunction(n) ? this.each(function(e) {
                C(this).toggleClass(n.call(this, e, dt(this), t), t)
            }) : this.each(function() {
                var e, t, i, r;
                if ("string" === a)
                    for (t = 0,
                    i = C(this),
                    r = n.match(L) || []; e = r[t++]; )
                        i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                else
                    void 0 !== n && "boolean" !== a || ((e = dt(this)) && Y.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === n ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, i, r = 0;
            for (t = " " + e + " "; i = this[r++]; )
                if (1 === i.nodeType && -1 < (" " + pt(dt(i)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var ht = /\r/g;
    C.fn.extend({
        val: function(i) {
            var r, e, n, t = this[0];
            return arguments.length ? (n = C.isFunction(i),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = n ? i.call(this, e, C(this).val()) : i) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = C.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (r = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set"in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get"in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(ht, "") : null == e ? "" : e : void 0
        }
    }),
    C.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = C.find.attr(e, "value");
                    return null != t ? t : pt(C.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, i, r, n = e.options, a = e.selectedIndex, s = "select-one" === e.type, o = s ? null : [], l = s ? a + 1 : n.length;
                    for (r = a < 0 ? l : s ? a : 0; r < l; r++)
                        if (((i = n[r]).selected || r === a) && !i.disabled && (!i.parentNode.disabled || !k(i.parentNode, "optgroup"))) {
                            if (t = C(i).val(),
                            s)
                                return t;
                            o.push(t)
                        }
                    return o
                },
                set: function(e, t) {
                    for (var i, r, n = e.options, a = C.makeArray(t), s = n.length; s--; )
                        ((r = n[s]).selected = -1 < C.inArray(C.valHooks.option.get(r), a)) && (i = !0);
                    return i || (e.selectedIndex = -1),
                    a
                }
            }
        }
    }),
    C.each(["radio", "checkbox"], function() {
        C.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < C.inArray(C(e).val(), t)
            }
        },
        g.checkOn || (C.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var ft = /^(?:focusinfocus|focusoutblur)$/;
    C.extend(C.event, {
        trigger: function(e, t, i, r) {
            var n, a, s, o, l, u, c, p = [i || S], d = f.call(e, "type") ? e.type : e, h = f.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = s = i = i || S,
            3 !== i.nodeType && 8 !== i.nodeType && !ft.test(d + C.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(),
            h.sort()),
            l = d.indexOf(":") < 0 && "on" + d,
            (e = e[C.expando] ? e : new C.Event(d,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = h.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = i),
            t = null == t ? [e] : C.makeArray(t, [e]),
            c = C.event.special[d] || {},
            r || !c.trigger || !1 !== c.trigger.apply(i, t))) {
                if (!r && !c.noBubble && !C.isWindow(i)) {
                    for (o = c.delegateType || d,
                    ft.test(o + d) || (a = a.parentNode); a; a = a.parentNode)
                        p.push(a),
                        s = a;
                    s === (i.ownerDocument || S) && p.push(s.defaultView || s.parentWindow || T)
                }
                for (n = 0; (a = p[n++]) && !e.isPropagationStopped(); )
                    e.type = 1 < n ? o : c.bindType || d,
                    (u = (Y.get(a, "events") || {})[e.type] && Y.get(a, "handle")) && u.apply(a, t),
                    (u = l && a[l]) && u.apply && q(a) && (e.result = u.apply(a, t),
                    !1 === e.result && e.preventDefault());
                return e.type = d,
                r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !q(i) || l && C.isFunction(i[d]) && !C.isWindow(i) && ((s = i[l]) && (i[l] = null),
                i[C.event.triggered = d](),
                C.event.triggered = void 0,
                s && (i[l] = s)),
                e.result
            }
        },
        simulate: function(e, t, i) {
            var r = C.extend(new C.Event, i, {
                type: e,
                isSimulated: !0
            });
            C.event.trigger(r, null, t)
        }
    }),
    C.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                C.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            if (i)
                return C.event.trigger(e, t, i, !0)
        }
    }),
    C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, i) {
        C.fn[i] = function(e, t) {
            return 0 < arguments.length ? this.on(i, null, e, t) : this.trigger(i)
        }
    }),
    C.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    g.focusin = "onfocusin"in T,
    g.focusin || C.each({
        focus: "focusin",
        blur: "focusout"
    }, function(i, r) {
        var n = function(e) {
            C.event.simulate(r, e.target, C.event.fix(e))
        };
        C.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this
                  , t = Y.access(e, r);
                t || e.addEventListener(i, n, !0),
                Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this
                  , t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(i, n, !0),
                Y.remove(e, r))
            }
        }
    });
    var mt = T.location
      , gt = C.now()
      , vt = /\?/;
    C.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new T.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e),
        t
    }
    ;
    var yt = /\[\]$/
      , _t = /\r?\n/g
      , xt = /^(?:submit|button|image|reset|file)$/i
      , wt = /^(?:input|select|textarea|keygen)/i;
    function bt(i, e, r, n) {
        var t;
        if (Array.isArray(e))
            C.each(e, function(e, t) {
                r || yt.test(i) ? n(i, t) : bt(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, n)
            });
        else if (r || "object" !== C.type(e))
            n(i, e);
        else
            for (t in e)
                bt(i + "[" + t + "]", e[t], r, n)
    }
    C.param = function(e, t) {
        var i, r = [], n = function(e, t) {
            var i = C.isFunction(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
        };
        if (Array.isArray(e) || e.jquery && !C.isPlainObject(e))
            C.each(e, function() {
                n(this.name, this.value)
            });
        else
            for (i in e)
                bt(i, e[i], t, n);
        return r.join("&")
    }
    ,
    C.fn.extend({
        serialize: function() {
            return C.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = C.prop(this, "elements");
                return e ? C.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !C(this).is(":disabled") && wt.test(this.nodeName) && !xt.test(e) && (this.checked || !ae.test(e))
            }).map(function(e, t) {
                var i = C(this).val();
                return null == i ? null : Array.isArray(i) ? C.map(i, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(_t, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(_t, "\r\n")
                }
            }).get()
        }
    });
    var Tt = /%20/g
      , St = /#.*$/
      , Ct = /([?&])_=[^&]*/
      , Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , kt = /^(?:GET|HEAD)$/
      , Mt = /^\/\//
      , Et = {}
      , At = {}
      , Ot = "*/".concat("*")
      , zt = S.createElement("a");
    function Dt(a) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var i, r = 0, n = e.toLowerCase().match(L) || [];
            if (C.isFunction(t))
                for (; i = n[r++]; )
                    "+" === i[0] ? (i = i.slice(1) || "*",
                    (a[i] = a[i] || []).unshift(t)) : (a[i] = a[i] || []).push(t)
        }
    }
    function Rt(t, n, a, s) {
        var o = {}
          , l = t === At;
        function u(e) {
            var r;
            return o[e] = !0,
            C.each(t[e] || [], function(e, t) {
                var i = t(n, a, s);
                return "string" != typeof i || l || o[i] ? l ? !(r = i) : void 0 : (n.dataTypes.unshift(i),
                u(i),
                !1)
            }),
            r
        }
        return u(n.dataTypes[0]) || !o["*"] && u("*")
    }
    function It(e, t) {
        var i, r, n = C.ajaxSettings.flatOptions || {};
        for (i in t)
            void 0 !== t[i] && ((n[i] ? e : r || (r = {}))[i] = t[i]);
        return r && C.extend(!0, e, r),
        e
    }
    zt.href = mt.href,
    C.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: mt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(mt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ot,
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
                "text xml": C.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? It(It(e, C.ajaxSettings), t) : It(C.ajaxSettings, e)
        },
        ajaxPrefilter: Dt(Et),
        ajaxTransport: Dt(At),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var c, p, d, i, h, r, f, m, n, a, g = C.ajaxSetup({}, t), v = g.context || g, y = g.context && (v.nodeType || v.jquery) ? C(v) : C.event, _ = C.Deferred(), x = C.Callbacks("once memory"), w = g.statusCode || {}, s = {}, o = {}, l = "canceled", b = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (f) {
                        if (!i)
                            for (i = {}; t = Pt.exec(d); )
                                i[t[1].toLowerCase()] = t[2];
                        t = i[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return f ? d : null
                },
                setRequestHeader: function(e, t) {
                    return null == f && (e = o[e.toLowerCase()] = o[e.toLowerCase()] || e,
                    s[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == f && (g.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (f)
                            b.always(e[b.status]);
                        else
                            for (t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || l;
                    return c && c.abort(t),
                    u(0, t),
                    this
                }
            };
            if (_.promise(b),
            g.url = ((e || g.url || mt.href) + "").replace(Mt, mt.protocol + "//"),
            g.type = t.method || t.type || g.method || g.type,
            g.dataTypes = (g.dataType || "*").toLowerCase().match(L) || [""],
            null == g.crossDomain) {
                r = S.createElement("a");
                try {
                    r.href = g.url,
                    r.href = r.href,
                    g.crossDomain = zt.protocol + "//" + zt.host != r.protocol + "//" + r.host
                } catch (e) {
                    g.crossDomain = !0
                }
            }
            if (g.data && g.processData && "string" != typeof g.data && (g.data = C.param(g.data, g.traditional)),
            Rt(Et, g, t, b),
            f)
                return b;
            for (n in (m = C.event && g.global) && 0 == C.active++ && C.event.trigger("ajaxStart"),
            g.type = g.type.toUpperCase(),
            g.hasContent = !kt.test(g.type),
            p = g.url.replace(St, ""),
            g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(Tt, "+")) : (a = g.url.slice(p.length),
            g.data && (p += (vt.test(p) ? "&" : "?") + g.data,
            delete g.data),
            !1 === g.cache && (p = p.replace(Ct, "$1"),
            a = (vt.test(p) ? "&" : "?") + "_=" + gt++ + a),
            g.url = p + a),
            g.ifModified && (C.lastModified[p] && b.setRequestHeader("If-Modified-Since", C.lastModified[p]),
            C.etag[p] && b.setRequestHeader("If-None-Match", C.etag[p])),
            (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && b.setRequestHeader("Content-Type", g.contentType),
            b.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Ot + "; q=0.01" : "") : g.accepts["*"]),
            g.headers)
                b.setRequestHeader(n, g.headers[n]);
            if (g.beforeSend && (!1 === g.beforeSend.call(v, b, g) || f))
                return b.abort();
            if (l = "abort",
            x.add(g.complete),
            b.done(g.success),
            b.fail(g.error),
            c = Rt(At, g, t, b)) {
                if (b.readyState = 1,
                m && y.trigger("ajaxSend", [b, g]),
                f)
                    return b;
                g.async && 0 < g.timeout && (h = T.setTimeout(function() {
                    b.abort("timeout")
                }, g.timeout));
                try {
                    f = !1,
                    c.send(s, u)
                } catch (e) {
                    if (f)
                        throw e;
                    u(-1, e)
                }
            } else
                u(-1, "No Transport");
            function u(e, t, i, r) {
                var n, a, s, o, l, u = t;
                f || (f = !0,
                h && T.clearTimeout(h),
                c = void 0,
                d = r || "",
                b.readyState = 0 < e ? 4 : 0,
                n = 200 <= e && e < 300 || 304 === e,
                i && (o = function(e, t, i) {
                    for (var r, n, a, s, o = e.contents, l = e.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (n in o)
                            if (o[n] && o[n].test(r)) {
                                l.unshift(n);
                                break
                            }
                    if (l[0]in i)
                        a = l[0];
                    else {
                        for (n in i) {
                            if (!l[0] || e.converters[n + " " + l[0]]) {
                                a = n;
                                break
                            }
                            s || (s = n)
                        }
                        a = a || s
                    }
                    if (a)
                        return a !== l[0] && l.unshift(a),
                        i[a]
                }(g, b, i)),
                o = function(e, t, i, r) {
                    var n, a, s, o, l, u = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (s in e.converters)
                            u[s.toLowerCase()] = e.converters[s];
                    for (a = c.shift(); a; )
                        if (e.responseFields[a] && (i[e.responseFields[a]] = t),
                        !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = a,
                        a = c.shift())
                            if ("*" === a)
                                a = l;
                            else if ("*" !== l && l !== a) {
                                if (!(s = u[l + " " + a] || u["* " + a]))
                                    for (n in u)
                                        if ((o = n.split(" "))[1] === a && (s = u[l + " " + o[0]] || u["* " + o[0]])) {
                                            !0 === s ? s = u[n] : !0 !== u[n] && (a = o[0],
                                            c.unshift(o[1]));
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
                                                error: s ? e : "No conversion from " + l + " to " + a
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(g, o, b, n),
                n ? (g.ifModified && ((l = b.getResponseHeader("Last-Modified")) && (C.lastModified[p] = l),
                (l = b.getResponseHeader("etag")) && (C.etag[p] = l)),
                204 === e || "HEAD" === g.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = o.state,
                a = o.data,
                n = !(s = o.error))) : (s = u,
                !e && u || (u = "error",
                e < 0 && (e = 0))),
                b.status = e,
                b.statusText = (t || u) + "",
                n ? _.resolveWith(v, [a, u, b]) : _.rejectWith(v, [b, u, s]),
                b.statusCode(w),
                w = void 0,
                m && y.trigger(n ? "ajaxSuccess" : "ajaxError", [b, g, n ? a : s]),
                x.fireWith(v, [b, u]),
                m && (y.trigger("ajaxComplete", [b, g]),
                --C.active || C.event.trigger("ajaxStop")))
            }
            return b
        },
        getJSON: function(e, t, i) {
            return C.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return C.get(e, void 0, t, "script")
        }
    }),
    C.each(["get", "post"], function(e, n) {
        C[n] = function(e, t, i, r) {
            return C.isFunction(t) && (r = r || i,
            i = t,
            t = void 0),
            C.ajax(C.extend({
                url: e,
                type: n,
                dataType: r,
                data: t,
                success: i
            }, C.isPlainObject(e) && e))
        }
    }),
    C._evalUrl = function(e) {
        return C.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    C.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (C.isFunction(e) && (e = e.call(this[0])),
            t = C(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(i) {
            return C.isFunction(i) ? this.each(function(e) {
                C(this).wrapInner(i.call(this, e))
            }) : this.each(function() {
                var e = C(this)
                  , t = e.contents();
                t.length ? t.wrapAll(i) : e.append(i)
            })
        },
        wrap: function(t) {
            var i = C.isFunction(t);
            return this.each(function(e) {
                C(this).wrapAll(i ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                C(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    C.expr.pseudos.hidden = function(e) {
        return !C.expr.pseudos.visible(e)
    }
    ,
    C.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    C.ajaxSettings.xhr = function() {
        try {
            return new T.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Lt = {
        0: 200,
        1223: 204
    }
      , Nt = C.ajaxSettings.xhr();
    g.cors = !!Nt && "withCredentials"in Nt,
    g.ajax = Nt = !!Nt,
    C.ajaxTransport(function(n) {
        var a, s;
        if (g.cors || Nt && !n.crossDomain)
            return {
                send: function(e, t) {
                    var i, r = n.xhr();
                    if (r.open(n.type, n.url, n.async, n.username, n.password),
                    n.xhrFields)
                        for (i in n.xhrFields)
                            r[i] = n.xhrFields[i];
                    for (i in n.mimeType && r.overrideMimeType && r.overrideMimeType(n.mimeType),
                    n.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        r.setRequestHeader(i, e[i]);
                    a = function(e) {
                        return function() {
                            a && (a = s = r.onload = r.onerror = r.onabort = r.onreadystatechange = null,
                            "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Lt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = a(),
                    s = r.onerror = a("error"),
                    void 0 !== r.onabort ? r.onabort = s : r.onreadystatechange = function() {
                        4 === r.readyState && T.setTimeout(function() {
                            a && s()
                        })
                    }
                    ,
                    a = a("abort");
                    try {
                        r.send(n.hasContent && n.data || null)
                    } catch (e) {
                        if (a)
                            throw e
                    }
                },
                abort: function() {
                    a && a()
                }
            }
    }),
    C.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    C.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return C.globalEval(e),
                e
            }
        }
    }),
    C.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    C.ajaxTransport("script", function(i) {
        var r, n;
        if (i.crossDomain)
            return {
                send: function(e, t) {
                    r = C("<script>").prop({
                        charset: i.scriptCharset,
                        src: i.url
                    }).on("load error", n = function(e) {
                        r.remove(),
                        n = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    S.head.appendChild(r[0])
                },
                abort: function() {
                    n && n()
                }
            }
    });
    var Ht, Ft = [], jt = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ft.pop() || C.expando + "_" + gt++;
            return this[e] = !0,
            e
        }
    }),
    C.ajaxPrefilter("json jsonp", function(e, t, i) {
        var r, n, a, s = !1 !== e.jsonp && (jt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && jt.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = C.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            s ? e[s] = e[s].replace(jt, "$1" + r) : !1 !== e.jsonp && (e.url += (vt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return a || C.error(r + " was not called"),
                a[0]
            }
            ,
            e.dataTypes[0] = "json",
            n = T[r],
            T[r] = function() {
                a = arguments
            }
            ,
            i.always(function() {
                void 0 === n ? C(T).removeProp(r) : T[r] = n,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                Ft.push(r)),
                a && C.isFunction(n) && n(a[0]),
                a = n = void 0
            }),
            "script"
    }),
    g.createHTMLDocument = ((Ht = S.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === Ht.childNodes.length),
    C.parseHTML = function(e, t, i) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t,
        t = !1),
        t || (g.createHTMLDocument ? ((r = (t = S.implementation.createHTMLDocument("")).createElement("base")).href = S.location.href,
        t.head.appendChild(r)) : t = S),
        a = !i && [],
        (n = M.exec(e)) ? [t.createElement(n[1])] : (n = fe([e], t, a),
        a && a.length && C(a).remove(),
        C.merge([], n.childNodes)));
        var r, n, a
    }
    ,
    C.fn.load = function(e, t, i) {
        var r, n, a, s = this, o = e.indexOf(" ");
        return -1 < o && (r = pt(e.slice(o)),
        e = e.slice(0, o)),
        C.isFunction(t) ? (i = t,
        t = void 0) : t && "object" == typeof t && (n = "POST"),
        0 < s.length && C.ajax({
            url: e,
            type: n || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            a = arguments,
            s.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e)
        }).always(i && function(e, t) {
            s.each(function() {
                i.apply(this, a || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        C.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    C.expr.pseudos.animated = function(t) {
        return C.grep(C.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    C.offset = {
        setOffset: function(e, t, i) {
            var r, n, a, s, o, l, u = C.css(e, "position"), c = C(e), p = {};
            "static" === u && (e.style.position = "relative"),
            o = c.offset(),
            a = C.css(e, "top"),
            l = C.css(e, "left"),
            n = ("absolute" === u || "fixed" === u) && -1 < (a + l).indexOf("auto") ? (s = (r = c.position()).top,
            r.left) : (s = parseFloat(a) || 0,
            parseFloat(l) || 0),
            C.isFunction(t) && (t = t.call(e, i, C.extend({}, o))),
            null != t.top && (p.top = t.top - o.top + s),
            null != t.left && (p.left = t.left - o.left + n),
            "using"in t ? t.using.call(e, p) : c.css(p)
        }
    },
    C.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    C.offset.setOffset(this, t, e)
                });
            var e, i, r, n, a = this[0];
            return a ? a.getClientRects().length ? (r = a.getBoundingClientRect(),
            i = (e = a.ownerDocument).documentElement,
            n = e.defaultView,
            {
                top: r.top + n.pageYOffset - i.clientTop,
                left: r.left + n.pageXOffset - i.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, i = this[0], r = {
                    top: 0,
                    left: 0
                };
                return "fixed" === C.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                k(e[0], "html") || (r = e.offset()),
                r = {
                    top: r.top + C.css(e[0], "borderTopWidth", !0),
                    left: r.left + C.css(e[0], "borderLeftWidth", !0)
                }),
                {
                    top: t.top - r.top - C.css(i, "marginTop", !0),
                    left: t.left - r.left - C.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === C.css(e, "position"); )
                    e = e.offsetParent;
                return e || me
            })
        }
    }),
    C.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var a = "pageYOffset" === n;
        C.fn[t] = function(e) {
            return X(this, function(e, t, i) {
                var r;
                return C.isWindow(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === i ? r ? r[n] : e[t] : void (r ? r.scrollTo(a ? r.pageXOffset : i, a ? i : r.pageYOffset) : e[t] = i)
            }, t, e, arguments.length)
        }
    }),
    C.each(["top", "left"], function(e, i) {
        C.cssHooks[i] = He(g.pixelPosition, function(e, t) {
            if (t)
                return t = Ne(e, i),
                Ie.test(t) ? C(e).position()[i] + "px" : t
        })
    }),
    C.each({
        Height: "height",
        Width: "width"
    }, function(s, o) {
        C.each({
            padding: "inner" + s,
            content: o,
            "": "outer" + s
        }, function(r, a) {
            C.fn[a] = function(e, t) {
                var i = arguments.length && (r || "boolean" != typeof e)
                  , n = r || (!0 === e || !0 === t ? "margin" : "border");
                return X(this, function(e, t, i) {
                    var r;
                    return C.isWindow(e) ? 0 === a.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + s], r["scroll" + s], e.body["offset" + s], r["offset" + s], r["client" + s])) : void 0 === i ? C.css(e, t, n) : C.style(e, t, i, n)
                }, o, i ? e : void 0, i)
            }
        })
    }),
    C.fn.extend({
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, r) {
            return this.on(t, e, i, r)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    }),
    C.holdReady = function(e) {
        e ? C.readyWait++ : C.ready(!0)
    }
    ,
    C.isArray = Array.isArray,
    C.parseJSON = JSON.parse,
    C.nodeName = k,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return C
    });
    var Bt = T.jQuery
      , Vt = T.$;
    return C.noConflict = function(e) {
        return T.$ === C && (T.$ = Vt),
        e && T.jQuery === C && (T.jQuery = Bt),
        C
    }
    ,
    e || (T.jQuery = T.$ = C),
    C
}),
jQuery.easing.jswing = jQuery.easing.swing,
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, t, i, r, n) {
        return jQuery.easing[jQuery.easing.def](e, t, i, r, n)
    },
    easeInQuad: function(e, t, i, r, n) {
        return r * (t /= n) * t + i
    },
    easeOutQuad: function(e, t, i, r, n) {
        return -r * (t /= n) * (t - 2) + i
    },
    easeInOutQuad: function(e, t, i, r, n) {
        return (t /= n / 2) < 1 ? r / 2 * t * t + i : -r / 2 * (--t * (t - 2) - 1) + i
    },
    easeInCubic: function(e, t, i, r, n) {
        return r * (t /= n) * t * t + i
    },
    easeOutCubic: function(e, t, i, r, n) {
        return r * ((t = t / n - 1) * t * t + 1) + i
    },
    easeInOutCubic: function(e, t, i, r, n) {
        return (t /= n / 2) < 1 ? r / 2 * t * t * t + i : r / 2 * ((t -= 2) * t * t + 2) + i
    },
    easeInQuart: function(e, t, i, r, n) {
        return r * (t /= n) * t * t * t + i
    },
    easeOutQuart: function(e, t, i, r, n) {
        return -r * ((t = t / n - 1) * t * t * t - 1) + i
    },
    easeInOutQuart: function(e, t, i, r, n) {
        return (t /= n / 2) < 1 ? r / 2 * t * t * t * t + i : -r / 2 * ((t -= 2) * t * t * t - 2) + i
    },
    easeInQuint: function(e, t, i, r, n) {
        return r * (t /= n) * t * t * t * t + i
    },
    easeOutQuint: function(e, t, i, r, n) {
        return r * ((t = t / n - 1) * t * t * t * t + 1) + i
    },
    easeInOutQuint: function(e, t, i, r, n) {
        return (t /= n / 2) < 1 ? r / 2 * t * t * t * t * t + i : r / 2 * ((t -= 2) * t * t * t * t + 2) + i
    },
    easeInSine: function(e, t, i, r, n) {
        return -r * Math.cos(t / n * (Math.PI / 2)) + r + i
    },
    easeOutSine: function(e, t, i, r, n) {
        return r * Math.sin(t / n * (Math.PI / 2)) + i
    },
    easeInOutSine: function(e, t, i, r, n) {
        return -r / 2 * (Math.cos(Math.PI * t / n) - 1) + i
    },
    easeInExpo: function(e, t, i, r, n) {
        return 0 == t ? i : r * Math.pow(2, 10 * (t / n - 1)) + i
    },
    easeOutExpo: function(e, t, i, r, n) {
        return t == n ? i + r : r * (1 - Math.pow(2, -10 * t / n)) + i
    },
    easeInOutExpo: function(e, t, i, r, n) {
        return 0 == t ? i : t == n ? i + r : (t /= n / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + i : r / 2 * (2 - Math.pow(2, -10 * --t)) + i
    },
    easeInCirc: function(e, t, i, r, n) {
        return -r * (Math.sqrt(1 - (t /= n) * t) - 1) + i
    },
    easeOutCirc: function(e, t, i, r, n) {
        return r * Math.sqrt(1 - (t = t / n - 1) * t) + i
    },
    easeInOutCirc: function(e, t, i, r, n) {
        return (t /= n / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + i : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
    },
    easeInElastic: function(e, t, i, r, n) {
        var a = 1.70158
          , s = 0
          , o = r;
        if (0 == t)
            return i;
        if (1 == (t /= n))
            return i + r;
        if (s || (s = .3 * n),
        o < Math.abs(r)) {
            o = r;
            a = s / 4
        } else
            a = s / (2 * Math.PI) * Math.asin(r / o);
        return -o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - a) * (2 * Math.PI) / s) + i
    },
    easeOutElastic: function(e, t, i, r, n) {
        var a = 1.70158
          , s = 0
          , o = r;
        if (0 == t)
            return i;
        if (1 == (t /= n))
            return i + r;
        if (s || (s = .3 * n),
        o < Math.abs(r)) {
            o = r;
            a = s / 4
        } else
            a = s / (2 * Math.PI) * Math.asin(r / o);
        return o * Math.pow(2, -10 * t) * Math.sin((t * n - a) * (2 * Math.PI) / s) + r + i
    },
    easeInOutElastic: function(e, t, i, r, n) {
        var a = 1.70158
          , s = 0
          , o = r;
        if (0 == t)
            return i;
        if (2 == (t /= n / 2))
            return i + r;
        if (s || (s = n * (.3 * 1.5)),
        o < Math.abs(r)) {
            o = r;
            a = s / 4
        } else
            a = s / (2 * Math.PI) * Math.asin(r / o);
        return t < 1 ? o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - a) * (2 * Math.PI) / s) * -.5 + i : o * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * n - a) * (2 * Math.PI) / s) * .5 + r + i
    },
    easeInBack: function(e, t, i, r, n, a) {
        return null == a && (a = 1.70158),
        r * (t /= n) * t * ((a + 1) * t - a) + i
    },
    easeOutBack: function(e, t, i, r, n, a) {
        return null == a && (a = 1.70158),
        r * ((t = t / n - 1) * t * ((a + 1) * t + a) + 1) + i
    },
    easeInOutBack: function(e, t, i, r, n, a) {
        return null == a && (a = 1.70158),
        (t /= n / 2) < 1 ? r / 2 * (t * t * ((1 + (a *= 1.525)) * t - a)) + i : r / 2 * ((t -= 2) * t * ((1 + (a *= 1.525)) * t + a) + 2) + i
    },
    easeInBounce: function(e, t, i, r, n) {
        return r - jQuery.easing.easeOutBounce(e, n - t, 0, r, n) + i
    },
    easeOutBounce: function(e, t, i, r, n) {
        return (t /= n) < 1 / 2.75 ? r * (7.5625 * t * t) + i : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
    },
    easeInOutBounce: function(e, t, i, r, n) {
        return t < n / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, r, n) + i : .5 * jQuery.easing.easeOutBounce(e, 2 * t - n, 0, r, n) + .5 * r + i
    }
}),
/*! VelocityJS.org (1.5.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
function(t) {
    "use strict";
    if (!t.jQuery) {
        var c = function(e, t) {
            return new c.fn.init(e,t)
        };
        c.isWindow = function(e) {
            return e && e === e.window
        }
        ,
        c.type = function(e) {
            return e ? "object" == typeof e || "function" == typeof e ? i[n.call(e)] || "object" : typeof e : e + ""
        }
        ,
        c.isArray = Array.isArray || function(e) {
            return "array" === c.type(e)
        }
        ,
        c.isPlainObject = function(e) {
            var t;
            if (!e || "object" !== c.type(e) || e.nodeType || c.isWindow(e))
                return !1;
            try {
                if (e.constructor && !r.call(e, "constructor") && !r.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (e) {
                return !1
            }
            for (t in e)
                ;
            return void 0 === t || r.call(e, t)
        }
        ,
        c.each = function(e, t, i) {
            var r = 0
              , n = e.length
              , a = o(e);
            if (i) {
                if (a)
                    for (; r < n && !1 !== t.apply(e[r], i); r++)
                        ;
                else
                    for (r in e)
                        if (e.hasOwnProperty(r) && !1 === t.apply(e[r], i))
                            break
            } else if (a)
                for (; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (e.hasOwnProperty(r) && !1 === t.call(e[r], r, e[r]))
                        break;
            return e
        }
        ,
        c.data = function(e, t, i) {
            if (void 0 === i) {
                var r = e[c.expando]
                  , n = r && s[r];
                if (void 0 === t)
                    return n;
                if (n && t in n)
                    return n[t]
            } else if (void 0 !== t) {
                var a = e[c.expando] || (e[c.expando] = ++c.uuid);
                return s[a] = s[a] || {},
                s[a][t] = i
            }
        }
        ,
        c.removeData = function(e, t) {
            var i = e[c.expando]
              , r = i && s[i];
            r && (t ? c.each(t, function(e, t) {
                delete r[t]
            }) : delete s[i])
        }
        ,
        c.extend = function() {
            var e, t, i, r, n, a, s = arguments[0] || {}, o = 1, l = arguments.length, u = !1;
            for ("boolean" == typeof s && (u = s,
            s = arguments[o] || {},
            o++),
            "object" != typeof s && "function" !== c.type(s) && (s = {}),
            o === l && (s = this,
            o--); o < l; o++)
                if (n = arguments[o])
                    for (r in n)
                        n.hasOwnProperty(r) && (e = s[r],
                        s !== (i = n[r]) && (u && i && (c.isPlainObject(i) || (t = c.isArray(i))) ? (a = t ? (t = !1,
                        e && c.isArray(e) ? e : []) : e && c.isPlainObject(e) ? e : {},
                        s[r] = c.extend(u, a, i)) : void 0 !== i && (s[r] = i)));
            return s
        }
        ,
        c.queue = function(e, t, i) {
            if (e) {
                t = (t || "fx") + "queue";
                var r, n, a, s = c.data(e, t);
                return i ? (!s || c.isArray(i) ? s = c.data(e, t, (a = n || [],
                (r = i) && (o(Object(r)) ? function(e, t) {
                    for (var i = +t.length, r = 0, n = e.length; r < i; )
                        e[n++] = t[r++];
                    if (i != i)
                        for (; void 0 !== t[r]; )
                            e[n++] = t[r++];
                    e.length = n
                }(a, "string" == typeof r ? [r] : r) : [].push.call(a, r)),
                a)) : s.push(i),
                s) : s || []
            }
        }
        ,
        c.dequeue = function(e, n) {
            c.each(e.nodeType ? [e] : e, function(e, t) {
                n = n || "fx";
                var i = c.queue(t, n)
                  , r = i.shift();
                "inprogress" === r && (r = i.shift()),
                r && ("fx" === n && i.unshift("inprogress"),
                r.call(t, function() {
                    c.dequeue(t, n)
                }))
            })
        }
        ,
        c.fn = c.prototype = {
            init: function(e) {
                if (e.nodeType)
                    return this[0] = e,
                    this;
                throw new Error("Not a DOM node.")
            },
            offset: function() {
                var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function() {
                var e = this[0]
                  , t = function(e) {
                    for (var t = e.offsetParent; t && "html" !== t.nodeName.toLowerCase() && t.style && "static" === t.style.position; )
                        t = t.offsetParent;
                    return t || document
                }(e)
                  , i = this.offset()
                  , r = /^(?:body|html)$/i.test(t.nodeName) ? {
                    top: 0,
                    left: 0
                } : c(t).offset();
                return i.top -= parseFloat(e.style.marginTop) || 0,
                i.left -= parseFloat(e.style.marginLeft) || 0,
                t.style && (r.top += parseFloat(t.style.borderTopWidth) || 0,
                r.left += parseFloat(t.style.borderLeftWidth) || 0),
                {
                    top: i.top - r.top,
                    left: i.left - r.left
                }
            }
        };
        var s = {};
        c.expando = "velocity" + (new Date).getTime(),
        c.uuid = 0;
        for (var i = {}, r = i.hasOwnProperty, n = i.toString, e = "Boolean Number String Function Array Date RegExp Object Error".split(" "), a = 0; a < e.length; a++)
            i["[object " + e[a] + "]"] = e[a].toLowerCase();
        c.fn.init.prototype = c.fn,
        t.Velocity = {
            Utilities: c
        }
    }
    function o(e) {
        var t = e.length
          , i = c.type(e);
        return "function" !== i && !c.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in e))
    }
}(window),
function(e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
}(function() {
    "use strict";
    return function(e, B, V, X) {
        var r, k = function() {
            if (V.documentMode)
                return V.documentMode;
            for (var e = 7; 4 < e; e--) {
                var t = V.createElement("div");
                if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e",
                t.getElementsByTagName("span").length)
                    return t = null,
                    e
            }
            return X
        }(), t = (r = 0,
        B.webkitRequestAnimationFrame || B.mozRequestAnimationFrame || function(e) {
            var t, i = (new Date).getTime();
            return t = Math.max(0, 16 - (i - r)),
            r = i + t,
            setTimeout(function() {
                e(i + t)
            }, t)
        }
        ), M = function() {
            var e = B.performance || {};
            if ("function" != typeof e.now) {
                var t = e.timing && e.timing.navigationStart ? e.timing.navigationStart : (new Date).getTime();
                e.now = function() {
                    return (new Date).getTime() - t
                }
            }
            return e
        }();
        var i = function() {
            var o = Array.prototype.slice;
            try {
                return o.call(V.documentElement),
                o
            } catch (e) {
                return function(e, t) {
                    var i = this.length;
                    if ("number" != typeof e && (e = 0),
                    "number" != typeof t && (t = i),
                    this.slice)
                        return o.call(this, e, t);
                    var r, n = [], a = 0 <= e ? e : Math.max(0, i + e), s = (t < 0 ? i + t : Math.min(t, i)) - a;
                    if (0 < s)
                        if (n = new Array(s),
                        this.charAt)
                            for (r = 0; r < s; r++)
                                n[r] = this.charAt(a + r);
                        else
                            for (r = 0; r < s; r++)
                                n[r] = this[a + r];
                    return n
                }
            }
        }()
          , q = function() {
            return Array.prototype.includes ? function(e, t) {
                return e.includes(t)
            }
            : Array.prototype.indexOf ? function(e, t) {
                return 0 <= e.indexOf(t)
            }
            : function(e, t) {
                for (var i = 0; i < e.length; i++)
                    if (e[i] === t)
                        return !0;
                return !1
            }
        };
        function m(e) {
            return Y.isWrapped(e) ? e = i.call(e) : Y.isNode(e) && (e = [e]),
            e
        }
        var W, Y = {
            isNumber: function(e) {
                return "number" == typeof e
            },
            isString: function(e) {
                return "string" == typeof e
            },
            isArray: Array.isArray || function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
            ,
            isFunction: function(e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            },
            isNode: function(e) {
                return e && e.nodeType
            },
            isWrapped: function(e) {
                return e && e !== B && Y.isNumber(e.length) && !Y.isString(e) && !Y.isFunction(e) && !Y.isNode(e) && (0 === e.length || Y.isNode(e[0]))
            },
            isSVG: function(e) {
                return B.SVGElement && e instanceof B.SVGElement
            },
            isEmptyObject: function(e) {
                for (var t in e)
                    if (e.hasOwnProperty(t))
                        return !1;
                return !0
            }
        }, n = !1;
        if (e.fn && e.fn.jquery ? (W = e,
        n = !0) : W = B.Velocity.Utilities,
        k <= 8 && !n)
            throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (!(k <= 7)) {
            var a = "swing"
              , G = {
                State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    isAndroid: /Android/i.test(navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                    isChrome: B.chrome,
                    isFirefox: /Firefox/i.test(navigator.userAgent),
                    prefixElement: V.createElement("div"),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: !1,
                    calls: [],
                    delayedElements: {
                        count: 0
                    }
                },
                CSS: {},
                Utilities: W,
                Redirects: {},
                Easings: {},
                Promise: B.Promise,
                defaults: {
                    queue: "",
                    duration: 400,
                    easing: a,
                    begin: X,
                    complete: X,
                    progress: X,
                    display: X,
                    visibility: X,
                    loop: !1,
                    delay: !1,
                    mobileHA: !0,
                    _cacheValues: !0,
                    promiseRejectEmpty: !0
                },
                init: function(e) {
                    W.data(e, "velocity", {
                        isSVG: Y.isSVG(e),
                        isAnimating: !1,
                        computedStyle: null,
                        tweensContainer: null,
                        rootPropertyValueCache: {},
                        transformCache: {}
                    })
                },
                hook: null,
                mock: !1,
                version: {
                    major: 1,
                    minor: 5,
                    patch: 0
                },
                debug: !1,
                timestamp: !0,
                pauseAll: function(i) {
                    var r = (new Date).getTime();
                    W.each(G.State.calls, function(e, t) {
                        if (t) {
                            if (i !== X && (t[2].queue !== i || !1 === t[2].queue))
                                return !0;
                            t[5] = {
                                resume: !1
                            }
                        }
                    }),
                    W.each(G.State.delayedElements, function(e, t) {
                        t && v(t, r)
                    })
                },
                resumeAll: function(i) {
                    var r = (new Date).getTime();
                    W.each(G.State.calls, function(e, t) {
                        if (t) {
                            if (i !== X && (t[2].queue !== i || !1 === t[2].queue))
                                return !0;
                            t[5] && (t[5].resume = !0)
                        }
                    }),
                    W.each(G.State.delayedElements, function(e, t) {
                        t && y(t, r)
                    })
                }
            };
            B.pageYOffset !== X ? (G.State.scrollAnchor = B,
            G.State.scrollPropertyLeft = "pageXOffset",
            G.State.scrollPropertyTop = "pageYOffset") : (G.State.scrollAnchor = V.documentElement || V.body.parentNode || V.body,
            G.State.scrollPropertyLeft = "scrollLeft",
            G.State.scrollPropertyTop = "scrollTop");
            var s = function() {
                function y(e) {
                    return -e.tension * e.x - e.friction * e.v
                }
                function _(e, t, i) {
                    var r = {
                        x: e.x + i.dx * t,
                        v: e.v + i.dv * t,
                        tension: e.tension,
                        friction: e.friction
                    };
                    return {
                        dx: r.v,
                        dv: y(r)
                    }
                }
                return function e(t, i, r) {
                    var n, a, s, o, l, u, c, p, d, h, f, m = {
                        x: -1,
                        v: 0,
                        tension: null,
                        friction: null
                    }, g = [0], v = 0;
                    for (t = parseFloat(t) || 500,
                    i = parseFloat(i) || 20,
                    r = r || null,
                    m.tension = t,
                    m.friction = i,
                    a = (n = null !== r) ? (v = e(t, i)) / r * .016 : .016; l = a,
                    void 0,
                    u = {
                        dx: (o = s || m).v,
                        dv: y(o)
                    },
                    c = _(o, .5 * l, u),
                    p = _(o, .5 * l, c),
                    d = _(o, l, p),
                    h = 1 / 6 * (u.dx + 2 * (c.dx + p.dx) + d.dx),
                    f = 1 / 6 * (u.dv + 2 * (c.dv + p.dv) + d.dv),
                    o.x = o.x + h * l,
                    o.v = o.v + f * l,
                    s = o,
                    g.push(1 + s.x),
                    v += 16,
                    1e-4 < Math.abs(s.x) && 1e-4 < Math.abs(s.v); )
                        ;
                    return n ? function(e) {
                        return g[e * (g.length - 1) | 0]
                    }
                    : v
                }
            }();
            G.Easings = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                spring: function(e) {
                    return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
                }
            },
            W.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function(e, t) {
                G.Easings[t[0]] = l.apply(null, t[1])
            });
            var $ = G.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
                    units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
                    colorNames: {
                        aliceblue: "240,248,255",
                        antiquewhite: "250,235,215",
                        aquamarine: "127,255,212",
                        aqua: "0,255,255",
                        azure: "240,255,255",
                        beige: "245,245,220",
                        bisque: "255,228,196",
                        black: "0,0,0",
                        blanchedalmond: "255,235,205",
                        blueviolet: "138,43,226",
                        blue: "0,0,255",
                        brown: "165,42,42",
                        burlywood: "222,184,135",
                        cadetblue: "95,158,160",
                        chartreuse: "127,255,0",
                        chocolate: "210,105,30",
                        coral: "255,127,80",
                        cornflowerblue: "100,149,237",
                        cornsilk: "255,248,220",
                        crimson: "220,20,60",
                        cyan: "0,255,255",
                        darkblue: "0,0,139",
                        darkcyan: "0,139,139",
                        darkgoldenrod: "184,134,11",
                        darkgray: "169,169,169",
                        darkgrey: "169,169,169",
                        darkgreen: "0,100,0",
                        darkkhaki: "189,183,107",
                        darkmagenta: "139,0,139",
                        darkolivegreen: "85,107,47",
                        darkorange: "255,140,0",
                        darkorchid: "153,50,204",
                        darkred: "139,0,0",
                        darksalmon: "233,150,122",
                        darkseagreen: "143,188,143",
                        darkslateblue: "72,61,139",
                        darkslategray: "47,79,79",
                        darkturquoise: "0,206,209",
                        darkviolet: "148,0,211",
                        deeppink: "255,20,147",
                        deepskyblue: "0,191,255",
                        dimgray: "105,105,105",
                        dimgrey: "105,105,105",
                        dodgerblue: "30,144,255",
                        firebrick: "178,34,34",
                        floralwhite: "255,250,240",
                        forestgreen: "34,139,34",
                        fuchsia: "255,0,255",
                        gainsboro: "220,220,220",
                        ghostwhite: "248,248,255",
                        gold: "255,215,0",
                        goldenrod: "218,165,32",
                        gray: "128,128,128",
                        grey: "128,128,128",
                        greenyellow: "173,255,47",
                        green: "0,128,0",
                        honeydew: "240,255,240",
                        hotpink: "255,105,180",
                        indianred: "205,92,92",
                        indigo: "75,0,130",
                        ivory: "255,255,240",
                        khaki: "240,230,140",
                        lavenderblush: "255,240,245",
                        lavender: "230,230,250",
                        lawngreen: "124,252,0",
                        lemonchiffon: "255,250,205",
                        lightblue: "173,216,230",
                        lightcoral: "240,128,128",
                        lightcyan: "224,255,255",
                        lightgoldenrodyellow: "250,250,210",
                        lightgray: "211,211,211",
                        lightgrey: "211,211,211",
                        lightgreen: "144,238,144",
                        lightpink: "255,182,193",
                        lightsalmon: "255,160,122",
                        lightseagreen: "32,178,170",
                        lightskyblue: "135,206,250",
                        lightslategray: "119,136,153",
                        lightsteelblue: "176,196,222",
                        lightyellow: "255,255,224",
                        limegreen: "50,205,50",
                        lime: "0,255,0",
                        linen: "250,240,230",
                        magenta: "255,0,255",
                        maroon: "128,0,0",
                        mediumaquamarine: "102,205,170",
                        mediumblue: "0,0,205",
                        mediumorchid: "186,85,211",
                        mediumpurple: "147,112,219",
                        mediumseagreen: "60,179,113",
                        mediumslateblue: "123,104,238",
                        mediumspringgreen: "0,250,154",
                        mediumturquoise: "72,209,204",
                        mediumvioletred: "199,21,133",
                        midnightblue: "25,25,112",
                        mintcream: "245,255,250",
                        mistyrose: "255,228,225",
                        moccasin: "255,228,181",
                        navajowhite: "255,222,173",
                        navy: "0,0,128",
                        oldlace: "253,245,230",
                        olivedrab: "107,142,35",
                        olive: "128,128,0",
                        orangered: "255,69,0",
                        orange: "255,165,0",
                        orchid: "218,112,214",
                        palegoldenrod: "238,232,170",
                        palegreen: "152,251,152",
                        paleturquoise: "175,238,238",
                        palevioletred: "219,112,147",
                        papayawhip: "255,239,213",
                        peachpuff: "255,218,185",
                        peru: "205,133,63",
                        pink: "255,192,203",
                        plum: "221,160,221",
                        powderblue: "176,224,230",
                        purple: "128,0,128",
                        red: "255,0,0",
                        rosybrown: "188,143,143",
                        royalblue: "65,105,225",
                        saddlebrown: "139,69,19",
                        salmon: "250,128,114",
                        sandybrown: "244,164,96",
                        seagreen: "46,139,87",
                        seashell: "255,245,238",
                        sienna: "160,82,45",
                        silver: "192,192,192",
                        skyblue: "135,206,235",
                        slateblue: "106,90,205",
                        slategray: "112,128,144",
                        snow: "255,250,250",
                        springgreen: "0,255,127",
                        steelblue: "70,130,180",
                        tan: "210,180,140",
                        teal: "0,128,128",
                        thistle: "216,191,216",
                        tomato: "255,99,71",
                        turquoise: "64,224,208",
                        violet: "238,130,238",
                        wheat: "245,222,179",
                        whitesmoke: "245,245,245",
                        white: "255,255,255",
                        yellowgreen: "154,205,50",
                        yellow: "255,255,0"
                    }
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function() {
                        for (var e = 0; e < $.Lists.colors.length; e++) {
                            var t = "color" === $.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                            $.Hooks.templates[$.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                        }
                        var i, r, n;
                        if (k)
                            for (i in $.Hooks.templates)
                                if ($.Hooks.templates.hasOwnProperty(i)) {
                                    n = (r = $.Hooks.templates[i])[0].split(" ");
                                    var a = r[1].match($.RegEx.valueSplit);
                                    "Color" === n[0] && (n.push(n.shift()),
                                    a.push(a.shift()),
                                    $.Hooks.templates[i] = [n.join(" "), a.join(" ")])
                                }
                        for (i in $.Hooks.templates)
                            if ($.Hooks.templates.hasOwnProperty(i))
                                for (var s in n = (r = $.Hooks.templates[i])[0].split(" "))
                                    if (n.hasOwnProperty(s)) {
                                        var o = i + n[s]
                                          , l = s;
                                        $.Hooks.registered[o] = [i, l]
                                    }
                    },
                    getRoot: function(e) {
                        var t = $.Hooks.registered[e];
                        return t ? t[0] : e
                    },
                    getUnit: function(e, t) {
                        var i = (e.substr(t || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
                        return i && q($.Lists.units) ? i : ""
                    },
                    fixColors: function(e) {
                        return e.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function(e, t, i) {
                            return $.Lists.colorNames.hasOwnProperty(i) ? (t || "rgba(") + $.Lists.colorNames[i] + (t ? "" : ",1)") : t + i
                        })
                    },
                    cleanRootPropertyValue: function(e, t) {
                        return $.RegEx.valueUnwrap.test(t) && (t = t.match($.RegEx.valueUnwrap)[1]),
                        $.Values.isCSSNullValue(t) && (t = $.Hooks.templates[e][1]),
                        t
                    },
                    extractValue: function(e, t) {
                        var i = $.Hooks.registered[e];
                        if (i) {
                            var r = i[0]
                              , n = i[1];
                            return (t = $.Hooks.cleanRootPropertyValue(r, t)).toString().match($.RegEx.valueSplit)[n]
                        }
                        return t
                    },
                    injectValue: function(e, t, i) {
                        var r = $.Hooks.registered[e];
                        if (r) {
                            var n, a = r[0], s = r[1];
                            return (n = (i = $.Hooks.cleanRootPropertyValue(a, i)).toString().match($.RegEx.valueSplit))[s] = t,
                            n.join(" ")
                        }
                        return i
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function(e, t, i) {
                            switch (e) {
                            case "name":
                                return "clip";
                            case "extract":
                                var r;
                                return r = $.RegEx.wrappedValueAlreadyExtracted.test(i) ? i : (r = i.toString().match($.RegEx.valueUnwrap)) ? r[1].replace(/,(\s+)?/g, " ") : i;
                            case "inject":
                                return "rect(" + i + ")"
                            }
                        },
                        blur: function(e, t, i) {
                            switch (e) {
                            case "name":
                                return G.State.isFirefox ? "filter" : "-webkit-filter";
                            case "extract":
                                var r = parseFloat(i);
                                if (!r && 0 !== r) {
                                    var n = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    r = n ? n[1] : 0
                                }
                                return r;
                            case "inject":
                                return parseFloat(i) ? "blur(" + i + ")" : "none"
                            }
                        },
                        opacity: function(e, t, i) {
                            if (k <= 8)
                                switch (e) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var r = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return i = r ? r[1] / 100 : 1;
                                case "inject":
                                    return (t.style.zoom = 1) <= parseFloat(i) ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                                }
                            else
                                switch (e) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                case "inject":
                                    return i
                                }
                        }
                    },
                    register: function() {
                        k && !(9 < k) || G.State.isGingerbread || ($.Lists.transformsBase = $.Lists.transformsBase.concat($.Lists.transforms3D));
                        for (var e = 0; e < $.Lists.transformsBase.length; e++)
                            !function() {
                                var n = $.Lists.transformsBase[e];
                                $.Normalizations.registered[n] = function(e, t, i) {
                                    switch (e) {
                                    case "name":
                                        return "transform";
                                    case "extract":
                                        return U(t) === X || U(t).transformCache[n] === X ? /^scale/i.test(n) ? 1 : 0 : U(t).transformCache[n].replace(/[()]/g, "");
                                    case "inject":
                                        var r = !1;
                                        switch (n.substr(0, n.length - 1)) {
                                        case "translate":
                                            r = !/(%|px|em|rem|vw|vh|\d)$/i.test(i);
                                            break;
                                        case "scal":
                                        case "scale":
                                            G.State.isAndroid && U(t).transformCache[n] === X && i < 1 && (i = 1),
                                            r = !/(\d)$/i.test(i);
                                            break;
                                        case "skew":
                                        case "rotate":
                                            r = !/(deg|\d)$/i.test(i)
                                        }
                                        return r || (U(t).transformCache[n] = "(" + i + ")"),
                                        U(t).transformCache[n]
                                    }
                                }
                            }();
                        for (var t = 0; t < $.Lists.colors.length; t++)
                            !function() {
                                var s = $.Lists.colors[t];
                                $.Normalizations.registered[s] = function(e, t, i) {
                                    switch (e) {
                                    case "name":
                                        return s;
                                    case "extract":
                                        var r;
                                        if ($.RegEx.wrappedValueAlreadyExtracted.test(i))
                                            r = i;
                                        else {
                                            var n, a = {
                                                black: "rgb(0, 0, 0)",
                                                blue: "rgb(0, 0, 255)",
                                                gray: "rgb(128, 128, 128)",
                                                green: "rgb(0, 128, 0)",
                                                red: "rgb(255, 0, 0)",
                                                white: "rgb(255, 255, 255)"
                                            };
                                            /^[A-z]+$/i.test(i) ? n = a[i] !== X ? a[i] : a.black : $.RegEx.isHex.test(i) ? n = "rgb(" + $.Values.hexToRgb(i).join(" ") + ")" : /^rgba?\(/i.test(i) || (n = a.black),
                                            r = (n || i).toString().match($.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                        }
                                        return (!k || 8 < k) && 3 === r.split(" ").length && (r += " 1"),
                                        r;
                                    case "inject":
                                        return /^rgb/.test(i) ? i : (k <= 8 ? 4 === i.split(" ").length && (i = i.split(/\s+/).slice(0, 3).join(" ")) : 3 === i.split(" ").length && (i += " 1"),
                                        (k <= 8 ? "rgb" : "rgba") + "(" + i.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")")
                                    }
                                }
                            }();
                        function a(e, t, i) {
                            if ("border-box" === $.getPropertyValue(t, "boxSizing").toString().toLowerCase() !== (i || !1))
                                return 0;
                            var r, n, a = 0, s = "width" === e ? ["Left", "Right"] : ["Top", "Bottom"], o = ["padding" + s[0], "padding" + s[1], "border" + s[0] + "Width", "border" + s[1] + "Width"];
                            for (r = 0; r < o.length; r++)
                                n = parseFloat($.getPropertyValue(t, o[r])),
                                isNaN(n) || (a += n);
                            return i ? -a : a
                        }
                        function i(r, n) {
                            return function(e, t, i) {
                                switch (e) {
                                case "name":
                                    return r;
                                case "extract":
                                    return parseFloat(i) + a(r, t, n);
                                case "inject":
                                    return parseFloat(i) - a(r, t, n) + "px"
                                }
                            }
                        }
                        $.Normalizations.registered.innerWidth = i("width", !0),
                        $.Normalizations.registered.innerHeight = i("height", !0),
                        $.Normalizations.registered.outerWidth = i("width"),
                        $.Normalizations.registered.outerHeight = i("height")
                    }
                },
                Names: {
                    camelCase: function(e) {
                        return e.replace(/-(\w)/g, function(e, t) {
                            return t.toUpperCase()
                        })
                    },
                    SVGAttribute: function(e) {
                        var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (k || G.State.isAndroid && !G.State.isChrome) && (t += "|transform"),
                        new RegExp("^(" + t + ")$","i").test(e)
                    },
                    prefixCheck: function(e) {
                        if (G.State.prefixMatches[e])
                            return [G.State.prefixMatches[e], !0];
                        for (var t = ["", "Webkit", "Moz", "ms", "O"], i = 0, r = t.length; i < r; i++) {
                            var n;
                            if (n = 0 === i ? e : t[i] + e.replace(/^\w/, function(e) {
                                return e.toUpperCase()
                            }),
                            Y.isString(G.State.prefixElement.style[n]))
                                return [G.State.prefixMatches[e] = n, !0]
                        }
                        return [e, !1]
                    }
                },
                Values: {
                    hexToRgb: function(e) {
                        var t;
                        return e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, i, r) {
                            return t + t + i + i + r + r
                        }),
                        (t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)) ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function(e) {
                        return !e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                    },
                    getUnitType: function(e) {
                        return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                    },
                    getDisplayType: function(e) {
                        var t = e && e.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                    },
                    addClass: function(e, t) {
                        if (e)
                            if (e.classList)
                                e.classList.add(t);
                            else if (Y.isString(e.className))
                                e.className += (e.className.length ? " " : "") + t;
                            else {
                                var i = e.getAttribute(k <= 7 ? "className" : "class") || "";
                                e.setAttribute("class", i + (i ? " " : "") + t)
                            }
                    },
                    removeClass: function(e, t) {
                        if (e)
                            if (e.classList)
                                e.classList.remove(t);
                            else if (Y.isString(e.className))
                                e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)","gi"), " ");
                            else {
                                var i = e.getAttribute(k <= 7 ? "className" : "class") || "";
                                e.setAttribute("class", i.replace(new RegExp("(^|s)" + t.split(" ").join("|") + "(s|$)","gi"), " "))
                            }
                    }
                },
                getPropertyValue: function(e, t, i, u) {
                    function c(e, t) {
                        var i = 0;
                        if (k <= 8)
                            i = W.css(e, t);
                        else {
                            var r = !1;
                            /^(width|height)$/.test(t) && 0 === $.getPropertyValue(e, "display") && (r = !0,
                            $.setPropertyValue(e, "display", $.Values.getDisplayType(e)));
                            var n, a = function() {
                                r && $.setPropertyValue(e, "display", "none")
                            };
                            if (!u) {
                                if ("height" === t && "border-box" !== $.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var s = e.offsetHeight - (parseFloat($.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat($.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat($.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat($.getPropertyValue(e, "paddingBottom")) || 0);
                                    return a(),
                                    s
                                }
                                if ("width" === t && "border-box" !== $.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var o = e.offsetWidth - (parseFloat($.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat($.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat($.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat($.getPropertyValue(e, "paddingRight")) || 0);
                                    return a(),
                                    o
                                }
                            }
                            n = U(e) === X ? B.getComputedStyle(e, null) : U(e).computedStyle ? U(e).computedStyle : U(e).computedStyle = B.getComputedStyle(e, null),
                            "borderColor" === t && (t = "borderTopColor"),
                            "" !== (i = 9 === k && "filter" === t ? n.getPropertyValue(t) : n[t]) && null !== i || (i = e.style[t]),
                            a()
                        }
                        if ("auto" === i && /^(top|right|bottom|left)$/i.test(t)) {
                            var l = c(e, "position");
                            ("fixed" === l || "absolute" === l && /top|left/i.test(t)) && (i = W(e).position()[t] + "px")
                        }
                        return i
                    }
                    var r;
                    if ($.Hooks.registered[t]) {
                        var n = t
                          , a = $.Hooks.getRoot(n);
                        i === X && (i = $.getPropertyValue(e, $.Names.prefixCheck(a)[0])),
                        $.Normalizations.registered[a] && (i = $.Normalizations.registered[a]("extract", e, i)),
                        r = $.Hooks.extractValue(n, i)
                    } else if ($.Normalizations.registered[t]) {
                        var s, o;
                        "transform" !== (s = $.Normalizations.registered[t]("name", e)) && (o = c(e, $.Names.prefixCheck(s)[0]),
                        $.Values.isCSSNullValue(o) && $.Hooks.templates[t] && (o = $.Hooks.templates[t][1])),
                        r = $.Normalizations.registered[t]("extract", e, o)
                    }
                    if (!/^[\d-]/.test(r)) {
                        var l = U(e);
                        if (l && l.isSVG && $.Names.SVGAttribute(t))
                            if (/^(height|width)$/i.test(t))
                                try {
                                    r = e.getBBox()[t]
                                } catch (e) {
                                    r = 0
                                }
                            else
                                r = e.getAttribute(t);
                        else
                            r = c(e, $.Names.prefixCheck(t)[0])
                    }
                    return $.Values.isCSSNullValue(r) && (r = 0),
                    2 <= G.debug && console.log("Get " + t + ": " + r),
                    r
                },
                setPropertyValue: function(e, t, i, r, n) {
                    var a = t;
                    if ("scroll" === t)
                        n.container ? n.container["scroll" + n.direction] = i : "Left" === n.direction ? B.scrollTo(i, n.alternateValue) : B.scrollTo(n.alternateValue, i);
                    else if ($.Normalizations.registered[t] && "transform" === $.Normalizations.registered[t]("name", e))
                        $.Normalizations.registered[t]("inject", e, i),
                        a = "transform",
                        i = U(e).transformCache[t];
                    else {
                        if ($.Hooks.registered[t]) {
                            var s = t
                              , o = $.Hooks.getRoot(t);
                            r = r || $.getPropertyValue(e, o),
                            i = $.Hooks.injectValue(s, i, r),
                            t = o
                        }
                        if ($.Normalizations.registered[t] && (i = $.Normalizations.registered[t]("inject", e, i),
                        t = $.Normalizations.registered[t]("name", e)),
                        a = $.Names.prefixCheck(t)[0],
                        k <= 8)
                            try {
                                e.style[a] = i
                            } catch (e) {
                                G.debug && console.log("Browser does not support [" + i + "] for [" + a + "]")
                            }
                        else {
                            var l = U(e);
                            l && l.isSVG && $.Names.SVGAttribute(t) ? e.setAttribute(t, i) : e.style[a] = i
                        }
                        2 <= G.debug && console.log("Set " + t + " (" + a + "): " + i)
                    }
                    return [a, i]
                },
                flushTransformCache: function(t) {
                    var i = ""
                      , e = U(t);
                    if ((k || G.State.isAndroid && !G.State.isChrome) && e && e.isSVG) {
                        var r = function(e) {
                            return parseFloat($.getPropertyValue(t, e))
                        }
                          , n = {
                            translate: [r("translateX"), r("translateY")],
                            skewX: [r("skewX")],
                            skewY: [r("skewY")],
                            scale: 1 !== r("scale") ? [r("scale"), r("scale")] : [r("scaleX"), r("scaleY")],
                            rotate: [r("rotateZ"), 0, 0]
                        };
                        W.each(U(t).transformCache, function(e) {
                            /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"),
                            n[e] && (i += e + "(" + n[e].join(" ") + ") ",
                            delete n[e])
                        })
                    } else {
                        var a, s;
                        W.each(U(t).transformCache, function(e) {
                            if (a = U(t).transformCache[e],
                            "transformPerspective" === e)
                                return s = a,
                                !0;
                            9 === k && "rotateZ" === e && (e = "rotate"),
                            i += e + a + " "
                        }),
                        s && (i = "perspective" + s + " " + i)
                    }
                    $.setPropertyValue(t, "transform", i)
                }
            };
            $.Hooks.register(),
            $.Normalizations.register(),
            G.hook = function(e, r, n) {
                var a;
                return e = m(e),
                W.each(e, function(e, t) {
                    if (U(t) === X && G.init(t),
                    n === X)
                        a === X && (a = $.getPropertyValue(t, r));
                    else {
                        var i = $.setPropertyValue(t, r, n);
                        "transform" === i[0] && G.CSS.flushTransformCache(t),
                        a = i
                    }
                }),
                a
            }
            ;
            var g = function() {
                var i;
                function e() {
                    return t ? E.promise || null : r
                }
                var t, r, n, P, k, M, a = arguments[0] && (arguments[0].p || W.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || Y.isString(arguments[0].properties));
                Y.isWrapped(this) ? (t = !1,
                n = 0,
                r = P = this) : (t = !0,
                n = 1,
                P = a ? arguments[0].elements || arguments[0].e : arguments[0]);
                var E = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                if (t && G.Promise && (E.promise = new G.Promise(function(e, t) {
                    E.resolver = e,
                    E.rejecter = t
                }
                )),
                M = a ? (k = arguments[0].properties || arguments[0].p,
                arguments[0].options || arguments[0].o) : (k = arguments[n],
                arguments[n + 1]),
                P = m(P)) {
                    var A, N = P.length, H = 0;
                    if (!/^(stop|finish|finishAll|pause|resume)$/i.test(k) && !W.isPlainObject(M)) {
                        M = {};
                        for (var s = n + 1; s < arguments.length; s++)
                            Y.isArray(arguments[s]) || !/^(fast|normal|slow)$/i.test(arguments[s]) && !/^\d/.test(arguments[s]) ? Y.isString(arguments[s]) || Y.isArray(arguments[s]) ? M.easing = arguments[s] : Y.isFunction(arguments[s]) && (M.complete = arguments[s]) : M.duration = arguments[s]
                    }
                    switch (k) {
                    case "scroll":
                        A = "scroll";
                        break;
                    case "reverse":
                        A = "reverse";
                        break;
                    case "pause":
                        var o = (new Date).getTime();
                        return W.each(P, function(e, t) {
                            v(t, o)
                        }),
                        W.each(G.State.calls, function(e, r) {
                            var n = !1;
                            r && W.each(r[1], function(e, i) {
                                var t = M === X ? "" : M;
                                return !0 !== t && r[2].queue !== t && (M !== X || !1 !== r[2].queue) || (W.each(P, function(e, t) {
                                    if (t === i)
                                        return r[5] = {
                                            resume: !1
                                        },
                                        !(n = !0)
                                }),
                                !n && void 0)
                            })
                        }),
                        e();
                    case "resume":
                        return W.each(P, function(e, t) {
                            y(t)
                        }),
                        W.each(G.State.calls, function(e, r) {
                            var n = !1;
                            r && W.each(r[1], function(e, i) {
                                var t = M === X ? "" : M;
                                return !0 !== t && r[2].queue !== t && (M !== X || !1 !== r[2].queue) || (!r[5] || (W.each(P, function(e, t) {
                                    if (t === i)
                                        return r[5].resume = !0,
                                        !(n = !0)
                                }),
                                !n && void 0))
                            })
                        }),
                        e();
                    case "finish":
                    case "finishAll":
                    case "stop":
                        W.each(P, function(e, t) {
                            U(t) && U(t).delayTimer && (clearTimeout(U(t).delayTimer.setTimeout),
                            U(t).delayTimer.next && U(t).delayTimer.next(),
                            delete U(t).delayTimer),
                            "finishAll" !== k || !0 !== M && !Y.isString(M) || (W.each(W.queue(t, Y.isString(M) ? M : ""), function(e, t) {
                                Y.isFunction(t) && t()
                            }),
                            W.queue(t, Y.isString(M) ? M : "", []))
                        });
                        var l = [];
                        return W.each(G.State.calls, function(a, s) {
                            s && W.each(s[1], function(e, r) {
                                var n = M === X ? "" : M;
                                if (!0 !== n && s[2].queue !== n && (M !== X || !1 !== s[2].queue))
                                    return !0;
                                W.each(P, function(e, t) {
                                    if (t === r)
                                        if ((!0 === M || Y.isString(M)) && (W.each(W.queue(t, Y.isString(M) ? M : ""), function(e, t) {
                                            Y.isFunction(t) && t(null, !0)
                                        }),
                                        W.queue(t, Y.isString(M) ? M : "", [])),
                                        "stop" === k) {
                                            var i = U(t);
                                            i && i.tweensContainer && !1 !== n && W.each(i.tweensContainer, function(e, t) {
                                                t.endValue = t.currentValue
                                            }),
                                            l.push(a)
                                        } else
                                            "finish" !== k && "finishAll" !== k || (s[2].duration = 1)
                                })
                            })
                        }),
                        "stop" === k && (W.each(l, function(e, t) {
                            O(t, !0)
                        }),
                        E.promise && E.resolver(P)),
                        e();
                    default:
                        if (!W.isPlainObject(k) || Y.isEmptyObject(k)) {
                            if (Y.isString(k) && G.Redirects[k]) {
                                var u = (i = W.extend({}, M)).duration
                                  , c = i.delay || 0;
                                return !0 === i.backwards && (P = W.extend(!0, [], P).reverse()),
                                W.each(P, function(e, t) {
                                    parseFloat(i.stagger) ? i.delay = c + parseFloat(i.stagger) * e : Y.isFunction(i.stagger) && (i.delay = c + i.stagger.call(t, e, N)),
                                    i.drag && (i.duration = parseFloat(u) || (/^(callout|transition)/.test(k) ? 1e3 : 400),
                                    i.duration = Math.max(i.duration * (i.backwards ? 1 - e / N : (e + 1) / N), .75 * i.duration, 200)),
                                    G.Redirects[k].call(t, t, i || {}, e, N, P, E.promise ? E : X)
                                }),
                                e()
                            }
                            var p = "Velocity: First argument (" + k + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return E.promise ? E.rejecter(new Error(p)) : B.console && console.log(p),
                            e()
                        }
                        A = "start"
                    }
                    var F = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null
                    }
                      , j = [];
                    W.each(P, function(e, t) {
                        Y.isNode(t) && function(D, C) {
                            var R, e, I = W.extend({}, G.defaults, M), L = {};
                            switch (U(D) === X && G.init(D),
                            parseFloat(I.delay) && !1 !== I.queue && W.queue(D, I.queue, function(e) {
                                G.velocityQueueEntryFlag = !0;
                                var t = G.State.delayedElements.count++;
                                G.State.delayedElements[t] = D;
                                var i, r = (i = t,
                                function() {
                                    G.State.delayedElements[i] = !1,
                                    e()
                                }
                                );
                                U(D).delayBegin = (new Date).getTime(),
                                U(D).delay = parseFloat(I.delay),
                                U(D).delayTimer = {
                                    setTimeout: setTimeout(e, parseFloat(I.delay)),
                                    next: r
                                }
                            }),
                            I.duration.toString().toLowerCase()) {
                            case "fast":
                                I.duration = 200;
                                break;
                            case "normal":
                                I.duration = 400;
                                break;
                            case "slow":
                                I.duration = 600;
                                break;
                            default:
                                I.duration = parseFloat(I.duration) || 1
                            }
                            function i(e) {
                                var O, z, t, i, r, n, a;
                                if (I.begin && 0 === H)
                                    try {
                                        I.begin.call(P, P)
                                    } catch (e) {
                                        setTimeout(function() {
                                            throw e
                                        }, 1)
                                    }
                                if ("scroll" === A) {
                                    var s, o, l, u = /^x$/i.test(I.axis) ? "Left" : "Top", c = parseFloat(I.offset) || 0;
                                    I.container ? Y.isWrapped(I.container) || Y.isNode(I.container) ? (I.container = I.container[0] || I.container,
                                    l = (s = I.container["scroll" + u]) + W(D).position()[u.toLowerCase()] + c) : I.container = null : (s = G.State.scrollAnchor[G.State["scrollProperty" + u]],
                                    o = G.State.scrollAnchor[G.State["scrollProperty" + ("Left" === u ? "Top" : "Left")]],
                                    l = W(D).offset()[u.toLowerCase()] + c),
                                    L = {
                                        scroll: {
                                            rootPropertyValue: !1,
                                            startValue: s,
                                            currentValue: s,
                                            endValue: l,
                                            unitType: "",
                                            easing: I.easing,
                                            scrollData: {
                                                container: I.container,
                                                direction: u,
                                                alternateValue: o
                                            }
                                        },
                                        element: D
                                    },
                                    G.debug && console.log("tweensContainer (scroll): ", L.scroll, D)
                                } else if ("reverse" === A) {
                                    if (!(O = U(D)))
                                        return;
                                    if (!O.tweensContainer)
                                        return void W.dequeue(D, I.queue);
                                    for (var p in "none" === O.opts.display && (O.opts.display = "auto"),
                                    "hidden" === O.opts.visibility && (O.opts.visibility = "visible"),
                                    O.opts.loop = !1,
                                    O.opts.begin = null,
                                    O.opts.complete = null,
                                    M.easing || delete I.easing,
                                    M.duration || delete I.duration,
                                    I = W.extend({}, O.opts, I),
                                    z = W.extend(!0, {}, O ? O.tweensContainer : null))
                                        if (z.hasOwnProperty(p) && "element" !== p) {
                                            var d = z[p].startValue;
                                            z[p].startValue = z[p].currentValue = z[p].endValue,
                                            z[p].endValue = d,
                                            Y.isEmptyObject(M) || (z[p].easing = I.easing),
                                            G.debug && console.log("reverse tweensContainer (" + p + "): " + JSON.stringify(z[p]), D)
                                        }
                                    L = z
                                } else if ("start" === A) {
                                    (O = U(D)) && O.tweensContainer && !0 === O.isAnimating && (z = O.tweensContainer);
                                    var h = function(e, t) {
                                        var i, r = $.Hooks.getRoot(e), n = !1, a = t[0], s = t[1], o = t[2];
                                        if (O && O.isSVG || "tween" === r || !1 !== $.Names.prefixCheck(r)[1] || $.Normalizations.registered[r] !== X) {
                                            (I.display !== X && null !== I.display && "none" !== I.display || I.visibility !== X && "hidden" !== I.visibility) && /opacity|filter/.test(e) && !o && 0 !== a && (o = 0),
                                            I._cacheValues && z && z[e] ? (o === X && (o = z[e].endValue + z[e].unitType),
                                            n = O.rootPropertyValueCache[r]) : $.Hooks.registered[e] ? o === X ? (n = $.getPropertyValue(D, r),
                                            o = $.getPropertyValue(D, e, n)) : n = $.Hooks.templates[r][1] : o === X && (o = $.getPropertyValue(D, e));
                                            var l, u, c, p = !1, d = function(e, t) {
                                                var i, r;
                                                return r = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                                                    return i = e,
                                                    ""
                                                }),
                                                i || (i = $.Values.getUnitType(e)),
                                                [r, i]
                                            };
                                            if (o !== a && Y.isString(o) && Y.isString(a)) {
                                                i = "";
                                                var h = 0
                                                  , f = 0
                                                  , m = []
                                                  , g = []
                                                  , v = 0
                                                  , y = 0
                                                  , _ = 0;
                                                for (o = $.Hooks.fixColors(o),
                                                a = $.Hooks.fixColors(a); h < o.length && f < a.length; ) {
                                                    var x = o[h]
                                                      , w = a[f];
                                                    if (/[\d\.-]/.test(x) && /[\d\.-]/.test(w)) {
                                                        for (var b = x, T = w, S = ".", C = "."; ++h < o.length; ) {
                                                            if ((x = o[h]) === S)
                                                                S = "..";
                                                            else if (!/\d/.test(x))
                                                                break;
                                                            b += x
                                                        }
                                                        for (; ++f < a.length; ) {
                                                            if ((w = a[f]) === C)
                                                                C = "..";
                                                            else if (!/\d/.test(w))
                                                                break;
                                                            T += w
                                                        }
                                                        var P = $.Hooks.getUnit(o, h)
                                                          , k = $.Hooks.getUnit(a, f);
                                                        if (h += P.length,
                                                        f += k.length,
                                                        P === k)
                                                            b === T ? i += b + P : (i += "{" + m.length + (y ? "!" : "") + "}" + P,
                                                            m.push(parseFloat(b)),
                                                            g.push(parseFloat(T)));
                                                        else {
                                                            var M = parseFloat(b)
                                                              , E = parseFloat(T);
                                                            i += (v < 5 ? "calc" : "") + "(" + (M ? "{" + m.length + (y ? "!" : "") + "}" : "0") + P + " + " + (E ? "{" + (m.length + (M ? 1 : 0)) + (y ? "!" : "") + "}" : "0") + k + ")",
                                                            M && (m.push(M),
                                                            g.push(0)),
                                                            E && (m.push(0),
                                                            g.push(E))
                                                        }
                                                    } else {
                                                        if (x !== w) {
                                                            v = 0;
                                                            break
                                                        }
                                                        i += x,
                                                        h++,
                                                        f++,
                                                        0 === v && "c" === x || 1 === v && "a" === x || 2 === v && "l" === x || 3 === v && "c" === x || 4 <= v && "(" === x ? v++ : (v && v < 5 || 4 <= v && ")" === x && --v < 5) && (v = 0),
                                                        0 === y && "r" === x || 1 === y && "g" === x || 2 === y && "b" === x || 3 === y && "a" === x || 3 <= y && "(" === x ? (3 === y && "a" === x && (_ = 1),
                                                        y++) : _ && "," === x ? 3 < ++_ && (y = _ = 0) : (_ && y < (_ ? 5 : 4) || (_ ? 4 : 3) <= y && ")" === x && --y < (_ ? 5 : 4)) && (y = _ = 0)
                                                    }
                                                }
                                                h === o.length && f === a.length || (G.debug && console.error('Trying to pattern match mis-matched strings ["' + a + '", "' + o + '"]'),
                                                i = X),
                                                i && (m.length ? (G.debug && console.log('Pattern found "' + i + '" -> ', m, g, "[" + o + "," + a + "]"),
                                                o = m,
                                                a = g,
                                                u = c = "") : i = X)
                                            }
                                            if (i || (o = (l = d(e, o))[0],
                                            c = l[1],
                                            a = (l = d(e, a))[0].replace(/^([+-\/*])=/, function(e, t) {
                                                return p = t,
                                                ""
                                            }),
                                            u = l[1],
                                            o = parseFloat(o) || 0,
                                            a = parseFloat(a) || 0,
                                            "%" === u && (/^(fontSize|lineHeight)$/.test(e) ? (a /= 100,
                                            u = "em") : /^scale/.test(e) ? (a /= 100,
                                            u = "") : /(Red|Green|Blue)$/i.test(e) && (a = a / 100 * 255,
                                            u = ""))),
                                            /[\/*]/.test(p))
                                                u = c;
                                            else if (c !== u && 0 !== o)
                                                if (0 === a)
                                                    u = c;
                                                else {
                                                    R = R || function() {
                                                        var e = {
                                                            myParent: D.parentNode || V.body,
                                                            position: $.getPropertyValue(D, "position"),
                                                            fontSize: $.getPropertyValue(D, "fontSize")
                                                        }
                                                          , t = e.position === F.lastPosition && e.myParent === F.lastParent
                                                          , i = e.fontSize === F.lastFontSize;
                                                        F.lastParent = e.myParent,
                                                        F.lastPosition = e.position,
                                                        F.lastFontSize = e.fontSize;
                                                        var r = {};
                                                        if (i && t)
                                                            r.emToPx = F.lastEmToPx,
                                                            r.percentToPxWidth = F.lastPercentToPxWidth,
                                                            r.percentToPxHeight = F.lastPercentToPxHeight;
                                                        else {
                                                            var n = O && O.isSVG ? V.createElementNS("http://www.w3.org/2000/svg", "rect") : V.createElement("div");
                                                            G.init(n),
                                                            e.myParent.appendChild(n),
                                                            W.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                                                G.CSS.setPropertyValue(n, t, "hidden")
                                                            }),
                                                            G.CSS.setPropertyValue(n, "position", e.position),
                                                            G.CSS.setPropertyValue(n, "fontSize", e.fontSize),
                                                            G.CSS.setPropertyValue(n, "boxSizing", "content-box"),
                                                            W.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                                                G.CSS.setPropertyValue(n, t, "100%")
                                                            }),
                                                            G.CSS.setPropertyValue(n, "paddingLeft", "100em"),
                                                            r.percentToPxWidth = F.lastPercentToPxWidth = (parseFloat($.getPropertyValue(n, "width", null, !0)) || 1) / 100,
                                                            r.percentToPxHeight = F.lastPercentToPxHeight = (parseFloat($.getPropertyValue(n, "height", null, !0)) || 1) / 100,
                                                            r.emToPx = F.lastEmToPx = (parseFloat($.getPropertyValue(n, "paddingLeft")) || 1) / 100,
                                                            e.myParent.removeChild(n)
                                                        }
                                                        return null === F.remToPx && (F.remToPx = parseFloat($.getPropertyValue(V.body, "fontSize")) || 16),
                                                        null === F.vwToPx && (F.vwToPx = parseFloat(B.innerWidth) / 100,
                                                        F.vhToPx = parseFloat(B.innerHeight) / 100),
                                                        r.remToPx = F.remToPx,
                                                        r.vwToPx = F.vwToPx,
                                                        r.vhToPx = F.vhToPx,
                                                        1 <= G.debug && console.log("Unit ratios: " + JSON.stringify(r), D),
                                                        r
                                                    }();
                                                    var A = /margin|padding|left|right|width|text|word|letter/i.test(e) || /X$/.test(e) || "x" === e ? "x" : "y";
                                                    switch (c) {
                                                    case "%":
                                                        o *= "x" === A ? R.percentToPxWidth : R.percentToPxHeight;
                                                        break;
                                                    case "px":
                                                        break;
                                                    default:
                                                        o *= R[c + "ToPx"]
                                                    }
                                                    switch (u) {
                                                    case "%":
                                                        o *= 1 / ("x" === A ? R.percentToPxWidth : R.percentToPxHeight);
                                                        break;
                                                    case "px":
                                                        break;
                                                    default:
                                                        o *= 1 / R[u + "ToPx"]
                                                    }
                                                }
                                            switch (p) {
                                            case "+":
                                                a = o + a;
                                                break;
                                            case "-":
                                                a = o - a;
                                                break;
                                            case "*":
                                                a *= o;
                                                break;
                                            case "/":
                                                a = o / a
                                            }
                                            L[e] = {
                                                rootPropertyValue: n,
                                                startValue: o,
                                                currentValue: o,
                                                endValue: a,
                                                unitType: u,
                                                easing: s
                                            },
                                            i && (L[e].pattern = i),
                                            G.debug && console.log("tweensContainer (" + e + "): " + JSON.stringify(L[e]), D)
                                        } else
                                            G.debug && console.log("Skipping [" + r + "] due to a lack of browser support.")
                                    };
                                    for (var f in k)
                                        if (k.hasOwnProperty(f)) {
                                            var m = $.Names.camelCase(f)
                                              , g = (t = k[f],
                                            a = n = r = i = void 0,
                                            Y.isFunction(t) && (t = t.call(D, C, N)),
                                            Y.isArray(t) ? (r = t[0],
                                            a = !Y.isArray(t[1]) && /^[\d-]/.test(t[1]) || Y.isFunction(t[1]) || $.RegEx.isHex.test(t[1]) ? t[1] : Y.isString(t[1]) && !$.RegEx.isHex.test(t[1]) && G.Easings[t[1]] || Y.isArray(t[1]) ? (n = i ? t[1] : Q(t[1], I.duration),
                                            t[2]) : t[1] || t[2]) : r = t,
                                            i || (n = n || I.easing),
                                            Y.isFunction(r) && (r = r.call(D, C, N)),
                                            Y.isFunction(a) && (a = a.call(D, C, N)),
                                            [r || 0, n, a]);
                                            if (q($.Lists.colors)) {
                                                var v = g[0]
                                                  , y = g[1]
                                                  , _ = g[2];
                                                if ($.RegEx.isHex.test(v)) {
                                                    for (var x = ["Red", "Green", "Blue"], w = $.Values.hexToRgb(v), b = _ ? $.Values.hexToRgb(_) : X, T = 0; T < x.length; T++) {
                                                        var S = [w[T]];
                                                        y && S.push(y),
                                                        b !== X && S.push(b[T]),
                                                        h(m + x[T], S)
                                                    }
                                                    continue
                                                }
                                            }
                                            h(m, g)
                                        }
                                    L.element = D
                                }
                                L.element && ($.Values.addClass(D, "velocity-animating"),
                                j.push(L),
                                (O = U(D)) && ("" === I.queue && (O.tweensContainer = L,
                                O.opts = I),
                                O.isAnimating = !0),
                                H === N - 1 ? (G.State.calls.push([j, P, I, null, E.resolver, null, 0]),
                                !1 === G.State.isTicking && (G.State.isTicking = !0,
                                Z())) : H++)
                            }
                            if (!1 !== G.mock && (!0 === G.mock ? I.duration = I.delay = 1 : (I.duration *= parseFloat(G.mock) || 1,
                            I.delay *= parseFloat(G.mock) || 1)),
                            I.easing = Q(I.easing, I.duration),
                            I.begin && !Y.isFunction(I.begin) && (I.begin = null),
                            I.progress && !Y.isFunction(I.progress) && (I.progress = null),
                            I.complete && !Y.isFunction(I.complete) && (I.complete = null),
                            I.display !== X && null !== I.display && (I.display = I.display.toString().toLowerCase(),
                            "auto" === I.display && (I.display = G.CSS.Values.getDisplayType(D))),
                            I.visibility !== X && null !== I.visibility && (I.visibility = I.visibility.toString().toLowerCase()),
                            I.mobileHA = I.mobileHA && G.State.isMobile && !G.State.isGingerbread,
                            !1 === I.queue)
                                if (I.delay) {
                                    var t = G.State.delayedElements.count++;
                                    G.State.delayedElements[t] = D;
                                    var r = (e = t,
                                    function() {
                                        G.State.delayedElements[e] = !1,
                                        i()
                                    }
                                    );
                                    U(D).delayBegin = (new Date).getTime(),
                                    U(D).delay = parseFloat(I.delay),
                                    U(D).delayTimer = {
                                        setTimeout: setTimeout(i, parseFloat(I.delay)),
                                        next: r
                                    }
                                } else
                                    i();
                            else
                                W.queue(D, I.queue, function(e, t) {
                                    if (!0 === t)
                                        return E.promise && E.resolver(P),
                                        !0;
                                    G.velocityQueueEntryFlag = !0,
                                    i()
                                });
                            "" !== I.queue && "fx" !== I.queue || "inprogress" === W.queue(D)[0] || W.dequeue(D)
                        }(t, e)
                    }),
                    (i = W.extend({}, G.defaults, M)).loop = parseInt(i.loop, 10);
                    var d = 2 * i.loop - 1;
                    if (i.loop)
                        for (var h = 0; h < d; h++) {
                            var f = {
                                delay: i.delay,
                                progress: i.progress
                            };
                            h === d - 1 && (f.display = i.display,
                            f.visibility = i.visibility,
                            f.complete = i.complete),
                            g(P, "reverse", f)
                        }
                    return e()
                }
                E.promise && (k && M && !1 === M.promiseRejectEmpty ? E.resolver() : E.rejecter())
            };
            (G = W.extend(g, G)).animate = g;
            var E = B.requestAnimationFrame || t;
            if (!G.State.isMobile && V.hidden !== X) {
                var o = function() {
                    V.hidden ? (E = function(e) {
                        return setTimeout(function() {
                            e(!0)
                        }, 16)
                    }
                    ,
                    Z()) : E = B.requestAnimationFrame || t
                };
                o(),
                V.addEventListener("visibilitychange", o)
            }
            return e.Velocity = G,
            e !== B && (e.fn.velocity = g,
            e.fn.velocity.defaults = G.defaults),
            W.each(["Down", "Up"], function(e, p) {
                G.Redirects["slide" + p] = function(i, e, r, t, n, a) {
                    var s = W.extend({}, e)
                      , o = s.begin
                      , l = s.complete
                      , u = {}
                      , c = {
                        height: "",
                        marginTop: "",
                        marginBottom: "",
                        paddingTop: "",
                        paddingBottom: ""
                    };
                    s.display === X && (s.display = "Down" === p ? "inline" === G.CSS.Values.getDisplayType(i) ? "inline-block" : "block" : "none"),
                    s.begin = function() {
                        for (var e in 0 === r && o && o.call(n, n),
                        c)
                            if (c.hasOwnProperty(e)) {
                                u[e] = i.style[e];
                                var t = $.getPropertyValue(i, e);
                                c[e] = "Down" === p ? [t, 0] : [0, t]
                            }
                        u.overflow = i.style.overflow,
                        i.style.overflow = "hidden"
                    }
                    ,
                    s.complete = function() {
                        for (var e in u)
                            u.hasOwnProperty(e) && (i.style[e] = u[e]);
                        r === t - 1 && (l && l.call(n, n),
                        a && a.resolver(n))
                    }
                    ,
                    G(i, c, s)
                }
            }),
            W.each(["In", "Out"], function(e, u) {
                G.Redirects["fade" + u] = function(e, t, i, r, n, a) {
                    var s = W.extend({}, t)
                      , o = s.complete
                      , l = {
                        opacity: "In" === u ? 1 : 0
                    };
                    0 !== i && (s.begin = null),
                    s.complete = i !== r - 1 ? null : function() {
                        o && o.call(n, n),
                        a && a.resolver(n)
                    }
                    ,
                    s.display === X && (s.display = "In" === u ? "auto" : "none"),
                    G(this, l, s)
                }
            }),
            G
        }
        function U(e) {
            var t = W.data(e, "velocity");
            return null === t ? X : t
        }
        function v(e, t) {
            var i = U(e);
            i && i.delayTimer && !i.delayPaused && (i.delayRemaining = i.delay - t + i.delayBegin,
            i.delayPaused = !0,
            clearTimeout(i.delayTimer.setTimeout))
        }
        function y(e, t) {
            var i = U(e);
            i && i.delayTimer && i.delayPaused && (i.delayPaused = !1,
            i.delayTimer.setTimeout = setTimeout(i.delayTimer.next, i.delayRemaining))
        }
        function l(s, t, o, i) {
            var l = 4
              , u = 1e-7
              , c = 10
              , p = 11
              , d = 1 / (p - 1)
              , e = "Float32Array"in B;
            if (4 !== arguments.length)
                return !1;
            for (var r = 0; r < 4; ++r)
                if ("number" != typeof arguments[r] || isNaN(arguments[r]) || !isFinite(arguments[r]))
                    return !1;
            s = Math.min(s, 1),
            o = Math.min(o, 1),
            s = Math.max(s, 0),
            o = Math.max(o, 0);
            var h = e ? new Float32Array(p) : new Array(p);
            function n(e, t) {
                return 1 - 3 * t + 3 * e
            }
            function a(e, t) {
                return 3 * t - 6 * e
            }
            function f(e) {
                return 3 * e
            }
            function m(e, t, i) {
                return ((n(t, i) * e + a(t, i)) * e + f(t)) * e
            }
            function g(e, t, i) {
                return 3 * n(t, i) * e * e + 2 * a(t, i) * e + f(t)
            }
            function v(e) {
                for (var t = 0, i = 1, r = p - 1; i !== r && h[i] <= e; ++i)
                    t += d;
                var n = t + (e - h[--i]) / (h[i + 1] - h[i]) * d
                  , a = g(n, s, o);
                return .001 <= a ? function(e, t) {
                    for (var i = 0; i < l; ++i) {
                        var r = g(t, s, o);
                        if (0 === r)
                            return t;
                        t -= (m(t, s, o) - e) / r
                    }
                    return t
                }(e, n) : 0 === a ? n : function(e, t, i) {
                    for (var r, n, a = 0; 0 < (r = m(n = t + (i - t) / 2, s, o) - e) ? i = n : t = n,
                    Math.abs(r) > u && ++a < c; )
                        ;
                    return n
                }(e, t, t + d)
            }
            var y = !1;
            function _() {
                y = !0,
                s === t && o === i || function() {
                    for (var e = 0; e < p; ++e)
                        h[e] = m(e * d, s, o)
                }()
            }
            var x = function(e) {
                return y || _(),
                s === t && o === i ? e : 0 === e ? 0 : 1 === e ? 1 : m(v(e), t, i)
            };
            x.getControlPoints = function() {
                return [{
                    x: s,
                    y: t
                }, {
                    x: o,
                    y: i
                }]
            }
            ;
            var w = "generateBezier(" + [s, t, o, i] + ")";
            return x.toString = function() {
                return w
            }
            ,
            x
        }
        function Q(e, t) {
            var i = e;
            return Y.isString(e) ? G.Easings[e] || (i = !1) : i = Y.isArray(e) && 1 === e.length ? function(t) {
                return function(e) {
                    return Math.round(e * t) * (1 / t)
                }
            }
            .apply(null, e) : Y.isArray(e) && 2 === e.length ? s.apply(null, e.concat([t])) : !(!Y.isArray(e) || 4 !== e.length) && l.apply(null, e),
            !1 === i && (i = G.Easings[G.defaults.easing] ? G.defaults.easing : a),
            i
        }
        function Z(e) {
            if (e) {
                var t = G.timestamp && !0 !== e ? e : M.now()
                  , i = G.State.calls.length;
                1e4 < i && (G.State.calls = function(e) {
                    for (var t = -1, i = e ? e.length : 0, r = []; ++t < i; ) {
                        var n = e[t];
                        n && r.push(n)
                    }
                    return r
                }(G.State.calls),
                i = G.State.calls.length);
                for (var r = 0; r < i; r++)
                    if (G.State.calls[r]) {
                        var n = G.State.calls[r]
                          , a = n[0]
                          , s = n[2]
                          , o = n[3]
                          , l = !!o
                          , u = null
                          , c = n[5]
                          , p = n[6];
                        if (o || (o = G.State.calls[r][3] = t - 16),
                        c) {
                            if (!0 !== c.resume)
                                continue;
                            o = n[3] = Math.round(t - p - 16),
                            n[5] = null
                        }
                        p = n[6] = t - o;
                        for (var d = Math.min(p / s.duration, 1), h = 0, f = a.length; h < f; h++) {
                            var m = a[h]
                              , g = m.element;
                            if (U(g)) {
                                var v = !1;
                                if (s.display !== X && null !== s.display && "none" !== s.display) {
                                    if ("flex" === s.display) {
                                        W.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], function(e, t) {
                                            $.setPropertyValue(g, "display", t)
                                        })
                                    }
                                    $.setPropertyValue(g, "display", s.display)
                                }
                                for (var y in s.visibility !== X && "hidden" !== s.visibility && $.setPropertyValue(g, "visibility", s.visibility),
                                m)
                                    if (m.hasOwnProperty(y) && "element" !== y) {
                                        var _, x = m[y], w = Y.isString(x.easing) ? G.Easings[x.easing] : x.easing;
                                        if (Y.isString(x.pattern)) {
                                            var b = 1 === d ? function(e, t, i) {
                                                var r = x.endValue[t];
                                                return i ? Math.round(r) : r
                                            }
                                            : function(e, t, i) {
                                                var r = x.startValue[t]
                                                  , n = x.endValue[t] - r
                                                  , a = r + n * w(d, s, n);
                                                return i ? Math.round(a) : a
                                            }
                                            ;
                                            _ = x.pattern.replace(/{(\d+)(!)?}/g, b)
                                        } else if (1 === d)
                                            _ = x.endValue;
                                        else {
                                            var T = x.endValue - x.startValue;
                                            _ = x.startValue + T * w(d, s, T)
                                        }
                                        if (!l && _ === x.currentValue)
                                            continue;
                                        if (x.currentValue = _,
                                        "tween" === y)
                                            u = _;
                                        else {
                                            var S;
                                            if ($.Hooks.registered[y]) {
                                                S = $.Hooks.getRoot(y);
                                                var C = U(g).rootPropertyValueCache[S];
                                                C && (x.rootPropertyValue = C)
                                            }
                                            var P = $.setPropertyValue(g, y, x.currentValue + (k < 9 && 0 === parseFloat(_) ? "" : x.unitType), x.rootPropertyValue, x.scrollData);
                                            $.Hooks.registered[y] && ($.Normalizations.registered[S] ? U(g).rootPropertyValueCache[S] = $.Normalizations.registered[S]("extract", null, P[1]) : U(g).rootPropertyValueCache[S] = P[1]),
                                            "transform" === P[0] && (v = !0)
                                        }
                                    }
                                s.mobileHA && U(g).transformCache.translate3d === X && (U(g).transformCache.translate3d = "(0px, 0px, 0px)",
                                v = !0),
                                v && $.flushTransformCache(g)
                            }
                        }
                        s.display !== X && "none" !== s.display && (G.State.calls[r][2].display = !1),
                        s.visibility !== X && "hidden" !== s.visibility && (G.State.calls[r][2].visibility = !1),
                        s.progress && s.progress.call(n[1], n[1], d, Math.max(0, o + s.duration - t), o, u),
                        1 === d && O(r)
                    }
            }
            G.State.isTicking && E(Z)
        }
        function O(e, t) {
            if (!G.State.calls[e])
                return !1;
            for (var i = G.State.calls[e][0], r = G.State.calls[e][1], n = G.State.calls[e][2], a = G.State.calls[e][4], s = !1, o = 0, l = i.length; o < l; o++) {
                var u = i[o].element;
                t || n.loop || ("none" === n.display && $.setPropertyValue(u, "display", n.display),
                "hidden" === n.visibility && $.setPropertyValue(u, "visibility", n.visibility));
                var c = U(u);
                if (!0 !== n.loop && (W.queue(u)[1] === X || !/\.velocityQueueEntryFlag/i.test(W.queue(u)[1])) && c) {
                    c.isAnimating = !1;
                    var p = !(c.rootPropertyValueCache = {});
                    W.each($.Lists.transforms3D, function(e, t) {
                        var i = /^scale/.test(t) ? 1 : 0
                          , r = c.transformCache[t];
                        c.transformCache[t] !== X && new RegExp("^\\(" + i + "[^.]").test(r) && (p = !0,
                        delete c.transformCache[t])
                    }),
                    n.mobileHA && (p = !0,
                    delete c.transformCache.translate3d),
                    p && $.flushTransformCache(u),
                    $.Values.removeClass(u, "velocity-animating")
                }
                if (!t && n.complete && !n.loop && o === l - 1)
                    try {
                        n.complete.call(r, r)
                    } catch (e) {
                        setTimeout(function() {
                            throw e
                        }, 1)
                    }
                a && !0 !== n.loop && a(r),
                c && !0 === n.loop && !t && (W.each(c.tweensContainer, function(e, t) {
                    if (/^rotate/.test(e) && (parseFloat(t.startValue) - parseFloat(t.endValue)) % 360 == 0) {
                        var i = t.startValue;
                        t.startValue = t.endValue,
                        t.endValue = i
                    }
                    /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0,
                    t.startValue = 100)
                }),
                G(u, "reverse", {
                    loop: !0,
                    delay: n.delay
                })),
                !1 !== n.queue && W.dequeue(u, n.queue)
            }
            G.State.calls[e] = !1;
            for (var d = 0, h = G.State.calls.length; d < h; d++)
                if (!1 !== G.State.calls[d]) {
                    s = !0;
                    break
                }
            !1 === s && (G.State.isTicking = !1,
            delete G.State.calls,
            G.State.calls = [])
        }
        jQuery.fn.velocity = jQuery.fn.animate
    }(window.jQuery || window.Zepto || window, window, window ? window.document : void 0)
});
/*!
 * VERSION: 1.20.2
 * DATE: 2017-06-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    var e, l, t, T, w, b, S, v, i, y, C, _, x, h, f, g, r;
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(r, c, y) {
        var g = function(e) {
            var t, i = [], r = e.length;
            for (t = 0; t !== r; i.push(e[t++]))
                ;
            return i
        }
          , v = function(e, t, i) {
            var r, n, a = e.cycle;
            for (r in a)
                n = a[r],
                e[r] = "function" == typeof n ? n(i, t[i]) : n[i % n.length];
            delete e.cycle
        }
          , _ = function(e, t, i) {
            y.call(this, e, t, i),
            this._cycle = 0,
            this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._dirty = !0,
            this.render = _.prototype.render
        }
          , x = 1e-10
          , w = y._internals
          , b = w.isSelector
          , T = w.isArray
          , e = _.prototype = y.to({}, .1, {})
          , S = [];
        _.version = "1.20.2",
        e.constructor = _,
        e.kill()._gc = !1,
        _.killTweensOf = _.killDelayedCallsTo = y.killTweensOf,
        _.getTweensOf = y.getTweensOf,
        _.lagSmoothing = y.lagSmoothing,
        _.ticker = y.ticker,
        _.render = y.render,
        e.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._yoyoEase = null,
            this._uncache(!0),
            y.prototype.invalidate.call(this)
        }
        ,
        e.updateTo = function(e, t) {
            var i, r = this.ratio, n = this.vars.immediateRender || e.immediateRender;
            for (i in t && this._startTime < this._timeline._time && (this._startTime = this._timeline._time,
            this._uncache(!1),
            this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)),
            e)
                this.vars[i] = e[i];
            if (this._initted || n)
                if (t)
                    this._initted = !1,
                    n && this.render(0, !0, !0);
                else if (this._gc && this._enabled(!0, !1),
                this._notifyPluginsOfEnabled && this._firstPT && y._onPluginEvent("_onDisable", this),
                .998 < this._time / this._duration) {
                    var a = this._totalTime;
                    this.render(0, !0, !1),
                    this._initted = !1,
                    this.render(a, !0, !1)
                } else if (this._initted = !1,
                this._init(),
                0 < this._time || n)
                    for (var s, o = 1 / (1 - r), l = this._firstPT; l; )
                        s = l.s + l.c,
                        l.c *= o,
                        l.s = s - l.c,
                        l = l._next;
            return this
        }
        ,
        e.render = function(e, t, i) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var r, n, a, s, o, l, u, c, p, d = this._dirty ? this.totalDuration() : this._totalDuration, h = this._time, f = this._totalTime, m = this._cycle, g = this._duration, v = this._rawPrevTime;
            if (d - 1e-7 <= e && 0 <= e ? (this._totalTime = d,
            this._cycle = this._repeat,
            this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
            this._reversed || (r = !0,
            n = "onComplete",
            i = i || this._timeline.autoRemoveChildren),
            0 === g && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0),
            (v < 0 || e <= 0 && -1e-7 <= e || v === x && "isPause" !== this.data) && v !== e && (i = !0,
            x < v && (n = "onReverseComplete")),
            this._rawPrevTime = c = !t || e || v === e ? e : x)) : e < 1e-7 ? (this._totalTime = this._time = this._cycle = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
            (0 !== f || 0 === g && 0 < v) && (n = "onReverseComplete",
            r = this._reversed),
            e < 0 && (this._active = !1,
            0 === g && (this._initted || !this.vars.lazy || i) && (0 <= v && (i = !0),
            this._rawPrevTime = c = !t || e || v === e ? e : x)),
            this._initted || (i = !0)) : (this._totalTime = this._time = e,
            0 !== this._repeat && (s = g + this._repeatDelay,
            this._cycle = this._totalTime / s >> 0,
            0 !== this._cycle && this._cycle === this._totalTime / s && f <= e && this._cycle--,
            this._time = this._totalTime - this._cycle * s,
            this._yoyo && 0 != (1 & this._cycle) && (this._time = g - this._time,
            (p = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== p || this._initted ? this._yoyoEase = p = !0 === p ? this._ease : p instanceof Ease ? p : Ease.map[p] : (p = this.vars.ease,
            this._yoyoEase = p = p ? p instanceof Ease ? p : "function" == typeof p ? new Ease(p,this.vars.easeParams) : Ease.map[p] || y.defaultEase : y.defaultEase)),
            this.ratio = p ? 1 - p.getRatio((g - this._time) / g) : 0)),
            this._time > g ? this._time = g : this._time < 0 && (this._time = 0)),
            this._easeType && !p ? (o = this._time / g,
            (1 === (l = this._easeType) || 3 === l && .5 <= o) && (o = 1 - o),
            3 === l && (o *= 2),
            1 === (u = this._easePower) ? o *= o : 2 === u ? o *= o * o : 3 === u ? o *= o * o * o : 4 === u && (o *= o * o * o * o),
            1 === l ? this.ratio = 1 - o : 2 === l ? this.ratio = o : this._time / g < .5 ? this.ratio = o / 2 : this.ratio = 1 - o / 2) : p || (this.ratio = this._ease.getRatio(this._time / g))),
            h !== this._time || i || m !== this._cycle) {
                if (!this._initted) {
                    if (this._init(),
                    !this._initted || this._gc)
                        return;
                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))
                        return this._time = h,
                        this._totalTime = f,
                        this._rawPrevTime = v,
                        this._cycle = m,
                        w.lazyTweens.push(this),
                        void (this._lazy = [e, t]);
                    !this._time || r || p ? r && this._ease._calcEnd && !p && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / g)
                }
                for (!1 !== this._lazy && (this._lazy = !1),
                this._active || !this._paused && this._time !== h && 0 <= e && (this._active = !0),
                0 === f && (2 === this._initted && 0 < e && this._init(),
                this._startAt && (0 <= e ? this._startAt.render(e, t, i) : n || (n = "_dummyGS")),
                this.vars.onStart && (0 !== this._totalTime || 0 === g) && (t || this._callback("onStart"))),
                a = this._firstPT; a; )
                    a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s,
                    a = a._next;
                this._onUpdate && (e < 0 && this._startAt && this._startTime && this._startAt.render(e, t, i),
                t || (this._totalTime !== f || n) && this._callback("onUpdate")),
                this._cycle !== m && (t || this._gc || this.vars.onRepeat && this._callback("onRepeat")),
                n && (!this._gc || i) && (e < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, i),
                r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !t && this.vars[n] && this._callback(n),
                0 === g && this._rawPrevTime === x && c !== x && (this._rawPrevTime = 0))
            } else
                f !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate"))
        }
        ,
        _.to = function(e, t, i) {
            return new _(e,t,i)
        }
        ,
        _.from = function(e, t, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new _(e,t,i)
        }
        ,
        _.fromTo = function(e, t, i, r) {
            return r.startAt = i,
            r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender,
            new _(e,t,r)
        }
        ,
        _.staggerTo = _.allTo = function(e, t, i, r, n, a, s) {
            r = r || 0;
            var o, l, u, c, p = 0, d = [], h = function() {
                i.onComplete && i.onComplete.apply(i.onCompleteScope || this, arguments),
                n.apply(s || i.callbackScope || this, a || S)
            }, f = i.cycle, m = i.startAt && i.startAt.cycle;
            for (T(e) || ("string" == typeof e && (e = y.selector(e) || e),
            b(e) && (e = g(e))),
            e = e || [],
            r < 0 && ((e = g(e)).reverse(),
            r *= -1),
            o = e.length - 1,
            u = 0; u <= o; u++) {
                for (c in l = {},
                i)
                    l[c] = i[c];
                if (f && (v(l, e, u),
                null != l.duration && (t = l.duration,
                delete l.duration)),
                m) {
                    for (c in m = l.startAt = {},
                    i.startAt)
                        m[c] = i.startAt[c];
                    v(l.startAt, e, u)
                }
                l.delay = p + (l.delay || 0),
                u === o && n && (l.onComplete = h),
                d[u] = new _(e[u],t,l),
                p += r
            }
            return d
        }
        ,
        _.staggerFrom = _.allFrom = function(e, t, i, r, n, a, s) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            _.staggerTo(e, t, i, r, n, a, s)
        }
        ,
        _.staggerFromTo = _.allFromTo = function(e, t, i, r, n, a, s, o) {
            return r.startAt = i,
            r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender,
            _.staggerTo(e, t, r, n, a, s, o)
        }
        ,
        _.delayedCall = function(e, t, i, r, n) {
            return new _(t,0,{
                delay: e,
                onComplete: t,
                onCompleteParams: i,
                callbackScope: r,
                onReverseComplete: t,
                onReverseCompleteParams: i,
                immediateRender: !1,
                useFrames: n,
                overwrite: 0
            })
        }
        ,
        _.set = function(e, t) {
            return new _(e,0,t)
        }
        ,
        _.isTweening = function(e) {
            return 0 < y.getTweensOf(e, !0).length
        }
        ;
        var a = function(e, t) {
            for (var i = [], r = 0, n = e._first; n; )
                n instanceof y ? i[r++] = n : (t && (i[r++] = n),
                r = (i = i.concat(a(n, t))).length),
                n = n._next;
            return i
        }
          , p = _.getAllTweens = function(e) {
            return a(r._rootTimeline, e).concat(a(r._rootFramesTimeline, e))
        }
        ;
        _.killAll = function(e, t, i, r) {
            null == t && (t = !0),
            null == i && (i = !0);
            var n, a, s, o = p(0 != r), l = o.length, u = t && i && r;
            for (s = 0; s < l; s++)
                a = o[s],
                (u || a instanceof c || (n = a.target === a.vars.onComplete) && i || t && !n) && (e ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
        }
        ,
        _.killChildTweensOf = function(e, t) {
            if (null != e) {
                var i, r, n, a, s, o = w.tweenLookup;
                if ("string" == typeof e && (e = y.selector(e) || e),
                b(e) && (e = g(e)),
                T(e))
                    for (a = e.length; -1 < --a; )
                        _.killChildTweensOf(e[a], t);
                else {
                    for (n in i = [],
                    o)
                        for (r = o[n].target.parentNode; r; )
                            r === e && (i = i.concat(o[n].tweens)),
                            r = r.parentNode;
                    for (s = i.length,
                    a = 0; a < s; a++)
                        t && i[a].totalTime(i[a].totalDuration()),
                        i[a]._enabled(!1, !1)
                }
            }
        }
        ;
        var n = function(e, t, i, r) {
            t = !1 !== t,
            i = !1 !== i;
            for (var n, a, s = p(r = !1 !== r), o = t && i && r, l = s.length; -1 < --l; )
                a = s[l],
                (o || a instanceof c || (n = a.target === a.vars.onComplete) && i || t && !n) && a.paused(e)
        };
        return _.pauseAll = function(e, t, i) {
            n(!0, e, t, i)
        }
        ,
        _.resumeAll = function(e, t, i) {
            n(!1, e, t, i)
        }
        ,
        _.globalTimeScale = function(e) {
            var t = r._rootTimeline
              , i = y.ticker.time;
            return arguments.length ? (e = e || x,
            t._startTime = i - (i - t._startTime) * t._timeScale / e,
            t = r._rootFramesTimeline,
            i = y.ticker.frame,
            t._startTime = i - (i - t._startTime) * t._timeScale / e,
            t._timeScale = r._rootTimeline._timeScale = e,
            e) : t._timeScale
        }
        ,
        e.progress = function(e, t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
        }
        ,
        e.totalProgress = function(e, t) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
        }
        ,
        e.time = function(e, t) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            e > this._duration && (e = this._duration),
            this._yoyo && 0 != (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)),
            this.totalTime(e, t)) : this._time
        }
        ,
        e.duration = function(e) {
            return arguments.length ? r.prototype.duration.call(this, e) : this._duration
        }
        ,
        e.totalDuration = function(e) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat,
            this._dirty = !1),
            this._totalDuration)
        }
        ,
        e.repeat = function(e) {
            return arguments.length ? (this._repeat = e,
            this._uncache(!0)) : this._repeat
        }
        ,
        e.repeatDelay = function(e) {
            return arguments.length ? (this._repeatDelay = e,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        e.yoyo = function(e) {
            return arguments.length ? (this._yoyo = e,
            this) : this._yoyo
        }
        ,
        _
    }, !0),
    _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(c, p, d) {
        var h = function(e) {
            p.call(this, e),
            this._labels = {},
            this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren,
            this.smoothChildTiming = !0 === this.vars.smoothChildTiming,
            this._sortChildren = !0,
            this._onUpdate = this.vars.onUpdate;
            var t, i, r = this.vars;
            for (i in r)
                t = r[i],
                g(t) && -1 !== t.join("").indexOf("{self}") && (r[i] = this._swapSelfInParams(t));
            g(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
        }
          , m = 1e-10
          , e = d._internals
          , t = h._internals = {}
          , f = e.isSelector
          , g = e.isArray
          , v = e.lazyTweens
          , y = e.lazyRender
          , s = _gsScope._gsDefine.globals
          , _ = function(e) {
            var t, i = {};
            for (t in e)
                i[t] = e[t];
            return i
        }
          , x = function(e, t, i) {
            var r, n, a = e.cycle;
            for (r in a)
                n = a[r],
                e[r] = "function" == typeof n ? n(i, t[i]) : n[i % n.length];
            delete e.cycle
        }
          , a = t.pauseCallback = function() {}
          , w = function(e) {
            var t, i = [], r = e.length;
            for (t = 0; t !== r; i.push(e[t++]))
                ;
            return i
        }
          , i = h.prototype = new p;
        return h.version = "1.20.2",
        i.constructor = h,
        i.kill()._gc = i._forcingPlayhead = i._hasPause = !1,
        i.to = function(e, t, i, r) {
            var n = i.repeat && s.TweenMax || d;
            return t ? this.add(new n(e,t,i), r) : this.set(e, i, r)
        }
        ,
        i.from = function(e, t, i, r) {
            return this.add((i.repeat && s.TweenMax || d).from(e, t, i), r)
        }
        ,
        i.fromTo = function(e, t, i, r, n) {
            var a = r.repeat && s.TweenMax || d;
            return t ? this.add(a.fromTo(e, t, i, r), n) : this.set(e, r, n)
        }
        ,
        i.staggerTo = function(e, t, i, r, n, a, s, o) {
            var l, u, c = new h({
                onComplete: a,
                onCompleteParams: s,
                callbackScope: o,
                smoothChildTiming: this.smoothChildTiming
            }), p = i.cycle;
            for ("string" == typeof e && (e = d.selector(e) || e),
            f(e = e || []) && (e = w(e)),
            (r = r || 0) < 0 && ((e = w(e)).reverse(),
            r *= -1),
            u = 0; u < e.length; u++)
                (l = _(i)).startAt && (l.startAt = _(l.startAt),
                l.startAt.cycle && x(l.startAt, e, u)),
                p && (x(l, e, u),
                null != l.duration && (t = l.duration,
                delete l.duration)),
                c.to(e[u], t, l, u * r);
            return this.add(c, n)
        }
        ,
        i.staggerFrom = function(e, t, i, r, n, a, s, o) {
            return i.immediateRender = 0 != i.immediateRender,
            i.runBackwards = !0,
            this.staggerTo(e, t, i, r, n, a, s, o)
        }
        ,
        i.staggerFromTo = function(e, t, i, r, n, a, s, o, l) {
            return r.startAt = i,
            r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender,
            this.staggerTo(e, t, r, n, a, s, o, l)
        }
        ,
        i.call = function(e, t, i, r) {
            return this.add(d.delayedCall(0, e, t, i), r)
        }
        ,
        i.set = function(e, t, i) {
            return i = this._parseTimeOrLabel(i, 0, !0),
            null == t.immediateRender && (t.immediateRender = i === this._time && !this._paused),
            this.add(new d(e,0,t), i)
        }
        ,
        h.exportRoot = function(e, t) {
            null == (e = e || {}).smoothChildTiming && (e.smoothChildTiming = !0);
            var i, r, n = new h(e), a = n._timeline;
            for (null == t && (t = !0),
            a._remove(n, !0),
            n._startTime = 0,
            n._rawPrevTime = n._time = n._totalTime = a._time,
            i = a._first; i; )
                r = i._next,
                t && i instanceof d && i.target === i.vars.onComplete || n.add(i, i._startTime - i._delay),
                i = r;
            return a.add(n, 0),
            n
        }
        ,
        i.add = function(e, t, i, r) {
            var n, a, s, o, l, u;
            if ("number" != typeof t && (t = this._parseTimeOrLabel(t, 0, !0, e)),
            !(e instanceof c)) {
                if (e instanceof Array || e && e.push && g(e)) {
                    for (i = i || "normal",
                    r = r || 0,
                    n = t,
                    a = e.length,
                    s = 0; s < a; s++)
                        g(o = e[s]) && (o = new h({
                            tweens: o
                        })),
                        this.add(o, n),
                        "string" != typeof o && "function" != typeof o && ("sequence" === i ? n = o._startTime + o.totalDuration() / o._timeScale : "start" === i && (o._startTime -= o.delay())),
                        n += r;
                    return this._uncache(!0)
                }
                if ("string" == typeof e)
                    return this.addLabel(e, t);
                if ("function" != typeof e)
                    throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                e = d.delayedCall(0, e)
            }
            if (p.prototype.add.call(this, e, t),
            e._time && e.render((this.rawTime() - e._startTime) * e._timeScale, !1, !1),
            (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                for (u = (l = this).rawTime() > e._startTime; l._timeline; )
                    u && l._timeline.smoothChildTiming ? l.totalTime(l._totalTime, !0) : l._gc && l._enabled(!0, !1),
                    l = l._timeline;
            return this
        }
        ,
        i.remove = function(e) {
            if (e instanceof c) {
                this._remove(e, !1);
                var t = e._timeline = e.vars.useFrames ? c._rootFramesTimeline : c._rootTimeline;
                return e._startTime = (e._paused ? e._pauseTime : t._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale,
                this
            }
            if (e instanceof Array || e && e.push && g(e)) {
                for (var i = e.length; -1 < --i; )
                    this.remove(e[i]);
                return this
            }
            return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
        }
        ,
        i._remove = function(e, t) {
            return p.prototype._remove.call(this, e, t),
            this._last ? this._time > this.duration() && (this._time = this._duration,
            this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
            this
        }
        ,
        i.append = function(e, t) {
            return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
        }
        ,
        i.insert = i.insertMultiple = function(e, t, i, r) {
            return this.add(e, t || 0, i, r)
        }
        ,
        i.appendMultiple = function(e, t, i, r) {
            return this.add(e, this._parseTimeOrLabel(null, t, !0, e), i, r)
        }
        ,
        i.addLabel = function(e, t) {
            return this._labels[e] = this._parseTimeOrLabel(t),
            this
        }
        ,
        i.addPause = function(e, t, i, r) {
            var n = d.delayedCall(0, a, i, r || this);
            return n.vars.onComplete = n.vars.onReverseComplete = t,
            n.data = "isPause",
            this._hasPause = !0,
            this.add(n, e)
        }
        ,
        i.removeLabel = function(e) {
            return delete this._labels[e],
            this
        }
        ,
        i.getLabelTime = function(e) {
            return null != this._labels[e] ? this._labels[e] : -1
        }
        ,
        i._parseTimeOrLabel = function(e, t, i, r) {
            var n, a;
            if (r instanceof c && r.timeline === this)
                this.remove(r);
            else if (r && (r instanceof Array || r.push && g(r)))
                for (a = r.length; -1 < --a; )
                    r[a]instanceof c && r[a].timeline === this && this.remove(r[a]);
            if (n = 99999999999 < this.duration() ? this.recent().endTime(!1) : this._duration,
            "string" == typeof t)
                return this._parseTimeOrLabel(t, i && "number" == typeof e && null == this._labels[t] ? e - n : 0, i);
            if (t = t || 0,
            "string" != typeof e || !isNaN(e) && null == this._labels[e])
                null == e && (e = n);
            else {
                if (-1 === (a = e.indexOf("=")))
                    return null == this._labels[e] ? i ? this._labels[e] = n + t : t : this._labels[e] + t;
                t = parseInt(e.charAt(a - 1) + "1", 10) * Number(e.substr(a + 1)),
                e = 1 < a ? this._parseTimeOrLabel(e.substr(0, a - 1), 0, i) : n
            }
            return Number(e) + t
        }
        ,
        i.seek = function(e, t) {
            return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), !1 !== t)
        }
        ,
        i.stop = function() {
            return this.paused(!0)
        }
        ,
        i.gotoAndPlay = function(e, t) {
            return this.play(e, t)
        }
        ,
        i.gotoAndStop = function(e, t) {
            return this.pause(e, t)
        }
        ,
        i.render = function(e, t, i) {
            this._gc && this._enabled(!0, !1);
            var r, n, a, s, o, l, u, c = this._dirty ? this.totalDuration() : this._totalDuration, p = this._time, d = this._startTime, h = this._timeScale, f = this._paused;
            if (c - 1e-7 <= e && 0 <= e)
                this._totalTime = this._time = c,
                this._reversed || this._hasPausedChild() || (n = !0,
                s = "onComplete",
                o = !!this._timeline.autoRemoveChildren,
                0 === this._duration && (e <= 0 && -1e-7 <= e || this._rawPrevTime < 0 || this._rawPrevTime === m) && this._rawPrevTime !== e && this._first && (o = !0,
                this._rawPrevTime > m && (s = "onReverseComplete"))),
                this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : m,
                e = c + 1e-4;
            else if (e < 1e-7)
                if (this._totalTime = this._time = 0,
                (0 !== p || 0 === this._duration && this._rawPrevTime !== m && (0 < this._rawPrevTime || e < 0 && 0 <= this._rawPrevTime)) && (s = "onReverseComplete",
                n = this._reversed),
                e < 0)
                    this._active = !1,
                    this._timeline.autoRemoveChildren && this._reversed ? (o = n = !0,
                    s = "onReverseComplete") : 0 <= this._rawPrevTime && this._first && (o = !0),
                    this._rawPrevTime = e;
                else {
                    if (this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : m,
                    0 === e && n)
                        for (r = this._first; r && 0 === r._startTime; )
                            r._duration || (n = !1),
                            r = r._next;
                    e = 0,
                    this._initted || (o = !0)
                }
            else {
                if (this._hasPause && !this._forcingPlayhead && !t) {
                    if (p <= e)
                        for (r = this._first; r && r._startTime <= e && !l; )
                            r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (l = r),
                            r = r._next;
                    else
                        for (r = this._last; r && r._startTime >= e && !l; )
                            r._duration || "isPause" === r.data && 0 < r._rawPrevTime && (l = r),
                            r = r._prev;
                    l && (this._time = e = l._startTime,
                    this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                this._totalTime = this._time = this._rawPrevTime = e
            }
            if (this._time !== p && this._first || i || o || l) {
                if (this._initted || (this._initted = !0),
                this._active || !this._paused && this._time !== p && 0 < e && (this._active = !0),
                0 === p && this.vars.onStart && (0 === this._time && this._duration || t || this._callback("onStart")),
                p <= (u = this._time))
                    for (r = this._first; r && (a = r._next,
                    u === this._time && (!this._paused || f)); )
                        (r._active || r._startTime <= u && !r._paused && !r._gc) && (l === r && this.pause(),
                        r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)),
                        r = a;
                else
                    for (r = this._last; r && (a = r._prev,
                    u === this._time && (!this._paused || f)); ) {
                        if (r._active || r._startTime <= p && !r._paused && !r._gc) {
                            if (l === r) {
                                for (l = r._prev; l && l.endTime() > this._time; )
                                    l.render(l._reversed ? l.totalDuration() - (e - l._startTime) * l._timeScale : (e - l._startTime) * l._timeScale, t, i),
                                    l = l._prev;
                                l = null,
                                this.pause()
                            }
                            r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)
                        }
                        r = a
                    }
                this._onUpdate && (t || (v.length && y(),
                this._callback("onUpdate"))),
                s && (this._gc || (d === this._startTime || h !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (n && (v.length && y(),
                this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !t && this.vars[s] && this._callback(s)))
            }
        }
        ,
        i._hasPausedChild = function() {
            for (var e = this._first; e; ) {
                if (e._paused || e instanceof h && e._hasPausedChild())
                    return !0;
                e = e._next
            }
            return !1
        }
        ,
        i.getChildren = function(e, t, i, r) {
            r = r || -9999999999;
            for (var n = [], a = this._first, s = 0; a; )
                a._startTime < r || (a instanceof d ? !1 !== t && (n[s++] = a) : (!1 !== i && (n[s++] = a),
                !1 !== e && (s = (n = n.concat(a.getChildren(!0, t, i))).length))),
                a = a._next;
            return n
        }
        ,
        i.getTweensOf = function(e, t) {
            var i, r, n = this._gc, a = [], s = 0;
            for (n && this._enabled(!0, !0),
            r = (i = d.getTweensOf(e)).length; -1 < --r; )
                (i[r].timeline === this || t && this._contains(i[r])) && (a[s++] = i[r]);
            return n && this._enabled(!1, !0),
            a
        }
        ,
        i.recent = function() {
            return this._recent
        }
        ,
        i._contains = function(e) {
            for (var t = e.timeline; t; ) {
                if (t === this)
                    return !0;
                t = t.timeline
            }
            return !1
        }
        ,
        i.shiftChildren = function(e, t, i) {
            i = i || 0;
            for (var r, n = this._first, a = this._labels; n; )
                n._startTime >= i && (n._startTime += e),
                n = n._next;
            if (t)
                for (r in a)
                    a[r] >= i && (a[r] += e);
            return this._uncache(!0)
        }
        ,
        i._kill = function(e, t) {
            if (!e && !t)
                return this._enabled(!1, !1);
            for (var i = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), r = i.length, n = !1; -1 < --r; )
                i[r]._kill(e, t) && (n = !0);
            return n
        }
        ,
        i.clear = function(e) {
            var t = this.getChildren(!1, !0, !0)
              , i = t.length;
            for (this._time = this._totalTime = 0; -1 < --i; )
                t[i]._enabled(!1, !1);
            return !1 !== e && (this._labels = {}),
            this._uncache(!0)
        }
        ,
        i.invalidate = function() {
            for (var e = this._first; e; )
                e.invalidate(),
                e = e._next;
            return c.prototype.invalidate.call(this)
        }
        ,
        i._enabled = function(e, t) {
            if (e === this._gc)
                for (var i = this._first; i; )
                    i._enabled(e, !0),
                    i = i._next;
            return p.prototype._enabled.call(this, e, t)
        }
        ,
        i.totalTime = function(e, t, i) {
            this._forcingPlayhead = !0;
            var r = c.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1,
            r
        }
        ,
        i.duration = function(e) {
            return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e),
            this) : (this._dirty && this.totalDuration(),
            this._duration)
        }
        ,
        i.totalDuration = function(e) {
            if (arguments.length)
                return e && this.totalDuration() ? this.timeScale(this._totalDuration / e) : this;
            if (this._dirty) {
                for (var t, i, r = 0, n = this._last, a = 999999999999; n; )
                    t = n._prev,
                    n._dirty && n.totalDuration(),
                    n._startTime > a && this._sortChildren && !n._paused ? this.add(n, n._startTime - n._delay) : a = n._startTime,
                    n._startTime < 0 && !n._paused && (r -= n._startTime,
                    this._timeline.smoothChildTiming && (this._startTime += n._startTime / this._timeScale),
                    this.shiftChildren(-n._startTime, !1, -9999999999),
                    a = 0),
                    r < (i = n._startTime + n._totalDuration / n._timeScale) && (r = i),
                    n = t;
                this._duration = this._totalDuration = r,
                this._dirty = !1
            }
            return this._totalDuration
        }
        ,
        i.paused = function(e) {
            if (!e)
                for (var t = this._first, i = this._time; t; )
                    t._startTime === i && "isPause" === t.data && (t._rawPrevTime = 0),
                    t = t._next;
            return c.prototype.paused.apply(this, arguments)
        }
        ,
        i.usesFrames = function() {
            for (var e = this._timeline; e._timeline; )
                e = e._timeline;
            return e === c._rootFramesTimeline
        }
        ,
        i.rawTime = function(e) {
            return e && (this._paused || this._repeat && 0 < this.time() && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(e) - this._startTime) * this._timeScale
        }
        ,
        h
    }, !0),
    _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, o, e) {
        var i = function(e) {
            t.call(this, e),
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._cycle = 0,
            this._yoyo = !0 === this.vars.yoyo,
            this._dirty = !0
        }
          , P = 1e-10
          , r = o._internals
          , k = r.lazyTweens
          , M = r.lazyRender
          , l = _gsScope._gsDefine.globals
          , u = new e(null,null,1,0)
          , n = i.prototype = new t;
        return n.constructor = i,
        n.kill()._gc = !1,
        i.version = "1.20.2",
        n.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            t.prototype.invalidate.call(this)
        }
        ,
        n.addCallback = function(e, t, i, r) {
            return this.add(o.delayedCall(0, e, i, r), t)
        }
        ,
        n.removeCallback = function(e, t) {
            if (e)
                if (null == t)
                    this._kill(null, e);
                else
                    for (var i = this.getTweensOf(e, !1), r = i.length, n = this._parseTimeOrLabel(t); -1 < --r; )
                        i[r]._startTime === n && i[r]._enabled(!1, !1);
            return this
        }
        ,
        n.removePause = function(e) {
            return this.removeCallback(t._internals.pauseCallback, e)
        }
        ,
        n.tweenTo = function(e, t) {
            t = t || {};
            var i, r, n, a = {
                ease: u,
                useFrames: this.usesFrames(),
                immediateRender: !1
            }, s = t.repeat && l.TweenMax || o;
            for (r in t)
                a[r] = t[r];
            return a.time = this._parseTimeOrLabel(e),
            i = Math.abs(Number(a.time) - this._time) / this._timeScale || .001,
            n = new s(this,i,a),
            a.onStart = function() {
                n.target.paused(!0),
                n.vars.time !== n.target.time() && i === n.duration() && n.duration(Math.abs(n.vars.time - n.target.time()) / n.target._timeScale),
                t.onStart && t.onStart.apply(t.onStartScope || t.callbackScope || n, t.onStartParams || [])
            }
            ,
            n
        }
        ,
        n.tweenFromTo = function(e, t, i) {
            i = i || {},
            e = this._parseTimeOrLabel(e),
            i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [e],
                callbackScope: this
            },
            i.immediateRender = !1 !== i.immediateRender;
            var r = this.tweenTo(t, i);
            return r.duration(Math.abs(r.vars.time - e) / this._timeScale || .001)
        }
        ,
        n.render = function(e, t, i) {
            this._gc && this._enabled(!0, !1);
            var r, n, a, s, o, l, u, c, p = this._dirty ? this.totalDuration() : this._totalDuration, d = this._duration, h = this._time, f = this._totalTime, m = this._startTime, g = this._timeScale, v = this._rawPrevTime, y = this._paused, _ = this._cycle;
            if (p - 1e-7 <= e && 0 <= e)
                this._locked || (this._totalTime = p,
                this._cycle = this._repeat),
                this._reversed || this._hasPausedChild() || (n = !0,
                s = "onComplete",
                o = !!this._timeline.autoRemoveChildren,
                0 === this._duration && (e <= 0 && -1e-7 <= e || v < 0 || v === P) && v !== e && this._first && (o = !0,
                P < v && (s = "onReverseComplete"))),
                this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : P,
                this._yoyo && 0 != (1 & this._cycle) ? this._time = e = 0 : e = (this._time = d) + 1e-4;
            else if (e < 1e-7)
                if (this._locked || (this._totalTime = this._cycle = 0),
                ((this._time = 0) !== h || 0 === d && v !== P && (0 < v || e < 0 && 0 <= v) && !this._locked) && (s = "onReverseComplete",
                n = this._reversed),
                e < 0)
                    this._active = !1,
                    this._timeline.autoRemoveChildren && this._reversed ? (o = n = !0,
                    s = "onReverseComplete") : 0 <= v && this._first && (o = !0),
                    this._rawPrevTime = e;
                else {
                    if (this._rawPrevTime = d || !t || e || this._rawPrevTime === e ? e : P,
                    0 === e && n)
                        for (r = this._first; r && 0 === r._startTime; )
                            r._duration || (n = !1),
                            r = r._next;
                    e = 0,
                    this._initted || (o = !0)
                }
            else if (0 === d && v < 0 && (o = !0),
            this._time = this._rawPrevTime = e,
            this._locked || (this._totalTime = e,
            0 !== this._repeat && (l = d + this._repeatDelay,
            this._cycle = this._totalTime / l >> 0,
            0 !== this._cycle && this._cycle === this._totalTime / l && f <= e && this._cycle--,
            this._time = this._totalTime - this._cycle * l,
            this._yoyo && 0 != (1 & this._cycle) && (this._time = d - this._time),
            this._time > d ? e = (this._time = d) + 1e-4 : this._time < 0 ? this._time = e = 0 : e = this._time)),
            this._hasPause && !this._forcingPlayhead && !t) {
                if (h <= (e = this._time) || this._repeat && _ !== this._cycle)
                    for (r = this._first; r && r._startTime <= e && !u; )
                        r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (u = r),
                        r = r._next;
                else
                    for (r = this._last; r && r._startTime >= e && !u; )
                        r._duration || "isPause" === r.data && 0 < r._rawPrevTime && (u = r),
                        r = r._prev;
                u && u._startTime < d && (this._time = e = u._startTime,
                this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
            }
            if (this._cycle !== _ && !this._locked) {
                var x = this._yoyo && 0 != (1 & _)
                  , w = x === (this._yoyo && 0 != (1 & this._cycle))
                  , b = this._totalTime
                  , T = this._cycle
                  , S = this._rawPrevTime
                  , C = this._time;
                if (this._totalTime = _ * d,
                this._cycle < _ ? x = !x : this._totalTime += d,
                this._time = h,
                this._rawPrevTime = 0 === d ? v - 1e-4 : v,
                this._cycle = _,
                this._locked = !0,
                h = x ? 0 : d,
                this.render(h, t, 0 === d),
                t || this._gc || this.vars.onRepeat && (this._cycle = T,
                this._locked = !1,
                this._callback("onRepeat")),
                h !== this._time)
                    return;
                if (w && (this._cycle = _,
                this._locked = !0,
                h = x ? d + 1e-4 : -1e-4,
                this.render(h, !0, !1)),
                this._locked = !1,
                this._paused && !y)
                    return;
                this._time = C,
                this._totalTime = b,
                this._cycle = T,
                this._rawPrevTime = S
            }
            if (this._time !== h && this._first || i || o || u) {
                if (this._initted || (this._initted = !0),
                this._active || !this._paused && this._totalTime !== f && 0 < e && (this._active = !0),
                0 === f && this.vars.onStart && (0 === this._totalTime && this._totalDuration || t || this._callback("onStart")),
                h <= (c = this._time))
                    for (r = this._first; r && (a = r._next,
                    c === this._time && (!this._paused || y)); )
                        (r._active || r._startTime <= this._time && !r._paused && !r._gc) && (u === r && this.pause(),
                        r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)),
                        r = a;
                else
                    for (r = this._last; r && (a = r._prev,
                    c === this._time && (!this._paused || y)); ) {
                        if (r._active || r._startTime <= h && !r._paused && !r._gc) {
                            if (u === r) {
                                for (u = r._prev; u && u.endTime() > this._time; )
                                    u.render(u._reversed ? u.totalDuration() - (e - u._startTime) * u._timeScale : (e - u._startTime) * u._timeScale, t, i),
                                    u = u._prev;
                                u = null,
                                this.pause()
                            }
                            r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)
                        }
                        r = a
                    }
                this._onUpdate && (t || (k.length && M(),
                this._callback("onUpdate"))),
                s && (this._locked || this._gc || (m === this._startTime || g !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (n && (k.length && M(),
                this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !t && this.vars[s] && this._callback(s)))
            } else
                f !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate"))
        }
        ,
        n.getActive = function(e, t, i) {
            null == e && (e = !0),
            null == t && (t = !0),
            null == i && (i = !1);
            var r, n, a = [], s = this.getChildren(e, t, i), o = 0, l = s.length;
            for (r = 0; r < l; r++)
                (n = s[r]).isActive() && (a[o++] = n);
            return a
        }
        ,
        n.getLabelAfter = function(e) {
            e || 0 !== e && (e = this._time);
            var t, i = this.getLabelsArray(), r = i.length;
            for (t = 0; t < r; t++)
                if (i[t].time > e)
                    return i[t].name;
            return null
        }
        ,
        n.getLabelBefore = function(e) {
            null == e && (e = this._time);
            for (var t = this.getLabelsArray(), i = t.length; -1 < --i; )
                if (t[i].time < e)
                    return t[i].name;
            return null
        }
        ,
        n.getLabelsArray = function() {
            var e, t = [], i = 0;
            for (e in this._labels)
                t[i++] = {
                    time: this._labels[e],
                    name: e
                };
            return t.sort(function(e, t) {
                return e.time - t.time
            }),
            t
        }
        ,
        n.invalidate = function() {
            return this._locked = !1,
            t.prototype.invalidate.call(this)
        }
        ,
        n.progress = function(e, t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration() || 0
        }
        ,
        n.totalProgress = function(e, t) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration() || 0
        }
        ,
        n.totalDuration = function(e) {
            return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this),
            this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat),
            this._totalDuration)
        }
        ,
        n.time = function(e, t) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            e > this._duration && (e = this._duration),
            this._yoyo && 0 != (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)),
            this.totalTime(e, t)) : this._time
        }
        ,
        n.repeat = function(e) {
            return arguments.length ? (this._repeat = e,
            this._uncache(!0)) : this._repeat
        }
        ,
        n.repeatDelay = function(e) {
            return arguments.length ? (this._repeatDelay = e,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        n.yoyo = function(e) {
            return arguments.length ? (this._yoyo = e,
            this) : this._yoyo
        }
        ,
        n.currentLabel = function(e) {
            return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
        }
        ,
        i
    }, !0),
    T = 180 / Math.PI,
    w = [],
    b = [],
    S = [],
    v = {},
    i = _gsScope._gsDefine.globals,
    y = function(e, t, i, r) {
        i === r && (i = r - (r - t) / 1e6),
        e === t && (t = e + (i - e) / 1e6),
        this.a = e,
        this.b = t,
        this.c = i,
        this.d = r,
        this.da = r - e,
        this.ca = i - e,
        this.ba = t - e
    }
    ,
    C = function(e, t, i, r) {
        var n = {
            a: e
        }
          , a = {}
          , s = {}
          , o = {
            c: r
        }
          , l = (e + t) / 2
          , u = (t + i) / 2
          , c = (i + r) / 2
          , p = (l + u) / 2
          , d = (u + c) / 2
          , h = (d - p) / 8;
        return n.b = l + (e - l) / 4,
        a.b = p + h,
        n.c = a.a = (n.b + a.b) / 2,
        a.c = s.a = (p + d) / 2,
        s.b = d - h,
        o.b = c + (r - c) / 4,
        s.c = o.a = (s.b + o.b) / 2,
        [n, a, s, o]
    }
    ,
    _ = function(e, t, i, r, n) {
        var a, s, o, l, u, c, p, d, h, f, m, g, v, y = e.length - 1, _ = 0, x = e[0].a;
        for (a = 0; a < y; a++)
            s = (u = e[_]).a,
            o = u.d,
            l = e[_ + 1].d,
            d = n ? (m = w[a],
            v = ((g = b[a]) + m) * t * .25 / (r ? .5 : S[a] || .5),
            o - ((c = o - (o - s) * (r ? .5 * t : 0 !== m ? v / m : 0)) + (((p = o + (l - o) * (r ? .5 * t : 0 !== g ? v / g : 0)) - c) * (3 * m / (m + g) + .5) / 4 || 0))) : o - ((c = o - (o - s) * t * .5) + (p = o + (l - o) * t * .5)) / 2,
            c += d,
            p += d,
            u.c = h = c,
            u.b = 0 !== a ? x : x = u.a + .6 * (u.c - u.a),
            u.da = o - s,
            u.ca = h - s,
            u.ba = x - s,
            i ? (f = C(s, x, h, o),
            e.splice(_, 1, f[0], f[1], f[2], f[3]),
            _ += 4) : _++,
            x = p;
        (u = e[_]).b = x,
        u.c = x + .4 * (u.d - x),
        u.da = u.d - u.a,
        u.ca = u.c - u.a,
        u.ba = x - u.a,
        i && (f = C(u.a, x, u.c, u.d),
        e.splice(_, 1, f[0], f[1], f[2], f[3]))
    }
    ,
    x = function(e, t, i, r) {
        var n, a, s, o, l, u, c = [];
        if (r)
            for (a = (e = [r].concat(e)).length; -1 < --a; )
                "string" == typeof (u = e[a][t]) && "=" === u.charAt(1) && (e[a][t] = r[t] + Number(u.charAt(0) + u.substr(2)));
        if ((n = e.length - 2) < 0)
            return c[0] = new y(e[0][t],0,0,e[0][t]),
            c;
        for (a = 0; a < n; a++)
            s = e[a][t],
            o = e[a + 1][t],
            c[a] = new y(s,0,0,o),
            i && (l = e[a + 2][t],
            w[a] = (w[a] || 0) + (o - s) * (o - s),
            b[a] = (b[a] || 0) + (l - o) * (l - o));
        return c[a] = new y(e[a][t],0,0,e[a + 1][t]),
        c
    }
    ,
    h = function(e, t, i, r, n, a) {
        var s, o, l, u, c, p, d, h, f = {}, m = [], g = a || e[0];
        for (o in n = "string" == typeof n ? "," + n + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
        null == t && (t = 1),
        e[0])
            m.push(o);
        if (1 < e.length) {
            for (h = e[e.length - 1],
            d = !0,
            s = m.length; -1 < --s; )
                if (o = m[s],
                .05 < Math.abs(g[o] - h[o])) {
                    d = !1;
                    break
                }
            d && (e = e.concat(),
            a && e.unshift(a),
            e.push(e[1]),
            a = e[e.length - 3])
        }
        for (w.length = b.length = S.length = 0,
        s = m.length; -1 < --s; )
            o = m[s],
            v[o] = -1 !== n.indexOf("," + o + ","),
            f[o] = x(e, o, v[o], a);
        for (s = w.length; -1 < --s; )
            w[s] = Math.sqrt(w[s]),
            b[s] = Math.sqrt(b[s]);
        if (!r) {
            for (s = m.length; -1 < --s; )
                if (v[o])
                    for (p = (l = f[m[s]]).length - 1,
                    u = 0; u < p; u++)
                        c = l[u + 1].da / b[u] + l[u].da / w[u] || 0,
                        S[u] = (S[u] || 0) + c * c;
            for (s = S.length; -1 < --s; )
                S[s] = Math.sqrt(S[s])
        }
        for (s = m.length,
        u = i ? 4 : 1; -1 < --s; )
            l = f[o = m[s]],
            _(l, t, i, r, v[o]),
            d && (l.splice(0, u),
            l.splice(l.length - u, u));
        return f
    }
    ,
    f = function(e, t, i) {
        for (var r, n, a, s, o, l, u, c, p, d, h, f = 1 / i, m = e.length; -1 < --m; )
            for (a = (d = e[m]).a,
            s = d.d - a,
            o = d.c - a,
            l = d.b - a,
            r = n = 0,
            c = 1; c <= i; c++)
                r = n - (n = ((u = f * c) * u * s + 3 * (p = 1 - u) * (u * o + p * l)) * u),
                t[h = m * i + c - 1] = (t[h] || 0) + r * r
    }
    ,
    g = _gsScope._gsDefine.plugin({
        propName: "bezier",
        priority: -1,
        version: "1.3.8",
        API: 2,
        global: !0,
        init: function(e, t, i) {
            this._target = e,
            t instanceof Array && (t = {
                values: t
            }),
            this._func = {},
            this._mod = {},
            this._props = [],
            this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
            var r, n, a, s, o, l = t.values || [], u = {}, c = l[0], p = t.autoRotate || i.vars.orientToBezier;
            for (r in this._autoRotate = p ? p instanceof Array ? p : [["x", "y", "rotation", !0 === p ? 0 : Number(p) || 0]] : null,
            c)
                this._props.push(r);
            for (a = this._props.length; -1 < --a; )
                r = this._props[a],
                this._overwriteProps.push(r),
                n = this._func[r] = "function" == typeof e[r],
                u[r] = n ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(e[r]),
                o || u[r] !== l[0][r] && (o = u);
            if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? h(l, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, o) : function(e, t, i) {
                var r, n, a, s, o, l, u, c, p, d, h, f = {}, m = "cubic" === (t = t || "soft") ? 3 : 2, g = "soft" === t, v = [];
                if (g && i && (e = [i].concat(e)),
                null == e || e.length < m + 1)
                    throw "invalid Bezier data";
                for (p in e[0])
                    v.push(p);
                for (l = v.length; -1 < --l; ) {
                    for (f[p = v[l]] = o = [],
                    d = 0,
                    c = e.length,
                    u = 0; u < c; u++)
                        r = null == i ? e[u][p] : "string" == typeof (h = e[u][p]) && "=" === h.charAt(1) ? i[p] + Number(h.charAt(0) + h.substr(2)) : Number(h),
                        g && 1 < u && u < c - 1 && (o[d++] = (r + o[d - 2]) / 2),
                        o[d++] = r;
                    for (c = d - m + 1,
                    u = d = 0; u < c; u += m)
                        r = o[u],
                        n = o[u + 1],
                        a = o[u + 2],
                        s = 2 === m ? 0 : o[u + 3],
                        o[d++] = h = 3 === m ? new y(r,n,a,s) : new y(r,(2 * n + r) / 3,(2 * n + a) / 3,a);
                    o.length = d
                }
                return f
            }(l, t.type, u),
            this._segCount = this._beziers[r].length,
            this._timeRes) {
                var d = function(e, t) {
                    var i, r, n, a, s = [], o = [], l = 0, u = 0, c = (t = t >> 0 || 6) - 1, p = [], d = [];
                    for (i in e)
                        f(e[i], s, t);
                    for (n = s.length,
                    r = 0; r < n; r++)
                        l += Math.sqrt(s[r]),
                        d[a = r % t] = l,
                        a === c && (u += l,
                        p[a = r / t >> 0] = d,
                        o[a] = u,
                        l = 0,
                        d = []);
                    return {
                        length: u,
                        lengths: o,
                        segments: p
                    }
                }(this._beziers, this._timeRes);
                this._length = d.length,
                this._lengths = d.lengths,
                this._segments = d.segments,
                this._l1 = this._li = this._s1 = this._si = 0,
                this._l2 = this._lengths[0],
                this._curSeg = this._segments[0],
                this._s2 = this._curSeg[0],
                this._prec = 1 / this._curSeg.length
            }
            if (p = this._autoRotate)
                for (this._initialRotations = [],
                p[0]instanceof Array || (this._autoRotate = p = [p]),
                a = p.length; -1 < --a; ) {
                    for (s = 0; s < 3; s++)
                        r = p[a][s],
                        this._func[r] = "function" == typeof e[r] && e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)];
                    r = p[a][2],
                    this._initialRotations[a] = (this._func[r] ? this._func[r].call(this._target) : this._target[r]) || 0,
                    this._overwriteProps.push(r)
                }
            return this._startRatio = i.vars.runBackwards ? 1 : 0,
            !0
        },
        set: function(e) {
            var t, i, r, n, a, s, o, l, u, c, p = this._segCount, d = this._func, h = this._target, f = e !== this._startRatio;
            if (this._timeRes) {
                if (u = this._lengths,
                c = this._curSeg,
                e *= this._length,
                r = this._li,
                e > this._l2 && r < p - 1) {
                    for (l = p - 1; r < l && (this._l2 = u[++r]) <= e; )
                        ;
                    this._l1 = u[r - 1],
                    this._li = r,
                    this._curSeg = c = this._segments[r],
                    this._s2 = c[this._s1 = this._si = 0]
                } else if (e < this._l1 && 0 < r) {
                    for (; 0 < r && (this._l1 = u[--r]) >= e; )
                        ;
                    0 === r && e < this._l1 ? this._l1 = 0 : r++,
                    this._l2 = u[r],
                    this._li = r,
                    this._curSeg = c = this._segments[r],
                    this._s1 = c[(this._si = c.length - 1) - 1] || 0,
                    this._s2 = c[this._si]
                }
                if (t = r,
                e -= this._l1,
                r = this._si,
                e > this._s2 && r < c.length - 1) {
                    for (l = c.length - 1; r < l && (this._s2 = c[++r]) <= e; )
                        ;
                    this._s1 = c[r - 1],
                    this._si = r
                } else if (e < this._s1 && 0 < r) {
                    for (; 0 < r && (this._s1 = c[--r]) >= e; )
                        ;
                    0 === r && e < this._s1 ? this._s1 = 0 : r++,
                    this._s2 = c[r],
                    this._si = r
                }
                s = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
            } else
                s = (e - (t = e < 0 ? 0 : 1 <= e ? p - 1 : p * e >> 0) * (1 / p)) * p;
            for (i = 1 - s,
            r = this._props.length; -1 < --r; )
                n = this._props[r],
                o = (s * s * (a = this._beziers[n][t]).da + 3 * i * (s * a.ca + i * a.ba)) * s + a.a,
                this._mod[n] && (o = this._mod[n](o, h)),
                d[n] ? h[n](o) : h[n] = o;
            if (this._autoRotate) {
                var m, g, v, y, _, x, w, b = this._autoRotate;
                for (r = b.length; -1 < --r; )
                    n = b[r][2],
                    x = b[r][3] || 0,
                    w = !0 === b[r][4] ? 1 : T,
                    a = this._beziers[b[r][0]],
                    m = this._beziers[b[r][1]],
                    a && m && (a = a[t],
                    m = m[t],
                    g = a.a + (a.b - a.a) * s,
                    g += ((y = a.b + (a.c - a.b) * s) - g) * s,
                    y += (a.c + (a.d - a.c) * s - y) * s,
                    v = m.a + (m.b - m.a) * s,
                    v += ((_ = m.b + (m.c - m.b) * s) - v) * s,
                    _ += (m.c + (m.d - m.c) * s - _) * s,
                    o = f ? Math.atan2(_ - v, y - g) * w + x : this._initialRotations[r],
                    this._mod[n] && (o = this._mod[n](o, h)),
                    d[n] ? h[n](o) : h[n] = o)
            }
        }
    }),
    r = g.prototype,
    g.bezierThrough = h,
    g.cubicToQuadratic = C,
    g._autoCSS = !0,
    g.quadraticToCubic = function(e, t, i) {
        return new y(e,(2 * t + e) / 3,(2 * t + i) / 3,i)
    }
    ,
    g._cssRegister = function() {
        var e = i.CSSPlugin;
        if (e) {
            var t = e._internals
              , h = t._parseToProxy
              , f = t._setPluginRatio
              , m = t.CSSPropTween;
            t._registerComplexSpecialProp("bezier", {
                parser: function(e, t, i, r, n, a) {
                    t instanceof Array && (t = {
                        values: t
                    }),
                    a = new g;
                    var s, o, l, u = t.values, c = u.length - 1, p = [], d = {};
                    if (c < 0)
                        return n;
                    for (s = 0; s <= c; s++)
                        l = h(e, u[s], r, n, a, c !== s),
                        p[s] = l.end;
                    for (o in t)
                        d[o] = t[o];
                    return d.values = p,
                    (n = new m(e,"bezier",0,0,l.pt,2)).data = l,
                    n.plugin = a,
                    n.setRatio = f,
                    0 === d.autoRotate && (d.autoRotate = !0),
                    !d.autoRotate || d.autoRotate instanceof Array || (s = !0 === d.autoRotate ? 0 : Number(d.autoRotate),
                    d.autoRotate = null != l.end.left ? [["left", "top", "rotation", s, !1]] : null != l.end.x && [["x", "y", "rotation", s, !1]]),
                    d.autoRotate && (r._transform || r._enableTransforms(!1),
                    l.autoRotate = r._target._gsTransform,
                    l.proxy.rotation = l.autoRotate.rotation || 0,
                    r._overwriteProps.push("rotation")),
                    a._onInitTween(l.proxy, d, r._tween),
                    n
                }
            })
        }
    }
    ,
    r._mod = function(e) {
        for (var t, i = this._overwriteProps, r = i.length; -1 < --r; )
            (t = e[i[r]]) && "function" == typeof t && (this._mod[i[r]] = t)
    }
    ,
    r._kill = function(e) {
        var t, i, r = this._props;
        for (t in this._beziers)
            if (t in e)
                for (delete this._beziers[t],
                delete this._func[t],
                i = r.length; -1 < --i; )
                    r[i] === t && r.splice(i, 1);
        if (r = this._autoRotate)
            for (i = r.length; -1 < --i; )
                e[r[i][2]] && r.splice(i, 1);
        return this._super._kill.call(this, e)
    }
    ,
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(a, j) {
        var f, S, P, m, B = function() {
            a.call(this, "css"),
            this._overwriteProps.length = 0,
            this.setRatio = B.prototype.setRatio
        }, u = _gsScope._gsDefine.globals, g = {}, e = B.prototype = new a("css");
        (e.constructor = B).version = "1.20.0",
        B.API = 2,
        B.defaultTransformPerspective = 0,
        B.defaultSkewType = "compensated",
        B.defaultSmoothOrigin = !0,
        e = "px",
        B.suffixMap = {
            top: e,
            right: e,
            bottom: e,
            left: e,
            width: e,
            height: e,
            fontSize: e,
            padding: e,
            margin: e,
            perspective: e,
            lineHeight: ""
        };
        var k, v, y, N, _, C, M, E, t, i, A = /(?:\-|\.|\b)(\d|\.|e\-)+/g, O = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, c = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, z = /(?:\d|\-|\+|=|#|\.)*/g, D = /opacity *= *([^)]*)/i, w = /opacity:([^;]*)/i, s = /alpha\(opacity *=.+?\)/i, b = /^(rgb|hsl)/, o = /([A-Z])/g, l = /-([a-z])/gi, T = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, p = function(e, t) {
            return t.toUpperCase()
        }, h = /(?:Left|Right|Width)/i, d = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, R = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, I = /,(?=[^\)]*(?:\(|$))/gi, L = /[\s,\(]/i, H = Math.PI / 180, V = 180 / Math.PI, F = {}, r = {
            style: {}
        }, X = _gsScope.document || {
            createElement: function() {
                return r
            }
        }, q = function(e, t) {
            return X.createElementNS ? X.createElementNS(t || "http://www.w3.org/1999/xhtml", e) : X.createElement(e)
        }, W = q("div"), Y = q("img"), n = B._internals = {
            _specialProps: g
        }, G = (_gsScope.navigator || {}).userAgent || "", $ = (t = G.indexOf("Android"),
        i = q("a"),
        y = -1 !== G.indexOf("Safari") && -1 === G.indexOf("Chrome") && (-1 === t || 3 < parseFloat(G.substr(t + 8, 2))),
        _ = y && parseFloat(G.substr(G.indexOf("Version/") + 8, 2)) < 6,
        N = -1 !== G.indexOf("Firefox"),
        (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(G) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(G)) && (C = parseFloat(RegExp.$1)),
        !!i && (i.style.cssText = "top:1px;opacity:.55;",
        /^0.55/.test(i.style.opacity))), U = function(e) {
            return D.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }, Q = function(e) {
            _gsScope.console && console.log(e)
        }, Z = "", K = "", J = function(e, t) {
            var i, r, n = (t = t || W).style;
            if (void 0 !== n[e])
                return e;
            for (e = e.charAt(0).toUpperCase() + e.substr(1),
            i = ["O", "Moz", "ms", "Ms", "Webkit"],
            r = 5; -1 < --r && void 0 === n[i[r] + e]; )
                ;
            return 0 <= r ? (Z = "-" + (K = 3 === r ? "ms" : i[r]).toLowerCase() + "-",
            K + e) : null
        }, ee = X.defaultView ? X.defaultView.getComputedStyle : function() {}
        , te = B.getStyle = function(e, t, i, r, n) {
            var a;
            return $ || "opacity" !== t ? (!r && e.style[t] ? a = e.style[t] : (i = i || ee(e)) ? a = i[t] || i.getPropertyValue(t) || i.getPropertyValue(t.replace(o, "-$1").toLowerCase()) : e.currentStyle && (a = e.currentStyle[t]),
            null == n || a && "none" !== a && "auto" !== a && "auto auto" !== a ? a : n) : U(e)
        }
        , ie = n.convertToPixels = function(e, t, i, r, n) {
            if ("px" === r || !r && "lineHeight" !== t)
                return i;
            if ("auto" === r || !i)
                return 0;
            var a, s, o, l = h.test(t), u = e, c = W.style, p = i < 0, d = 1 === i;
            if (p && (i = -i),
            d && (i *= 100),
            "lineHeight" !== t || r)
                if ("%" === r && -1 !== t.indexOf("border"))
                    a = i / 100 * (l ? e.clientWidth : e.clientHeight);
                else {
                    if (c.cssText = "border:0 solid red;position:" + te(e, "position") + ";line-height:0;",
                    "%" !== r && u.appendChild && "v" !== r.charAt(0) && "rem" !== r)
                        c[l ? "borderLeftWidth" : "borderTopWidth"] = i + r;
                    else {
                        if (u = e.parentNode || X.body,
                        -1 !== te(u, "display").indexOf("flex") && (c.position = "absolute"),
                        s = u._gsCache,
                        o = j.ticker.frame,
                        s && l && s.time === o)
                            return s.width * i / 100;
                        c[l ? "width" : "height"] = i + r
                    }
                    u.appendChild(W),
                    a = parseFloat(W[l ? "offsetWidth" : "offsetHeight"]),
                    u.removeChild(W),
                    l && "%" === r && !1 !== B.cacheWidths && ((s = u._gsCache = u._gsCache || {}).time = o,
                    s.width = a / i * 100),
                    0 !== a || n || (a = ie(e, t, i, r, !0))
                }
            else
                s = ee(e).lineHeight,
                e.style.lineHeight = i,
                a = parseFloat(ee(e).lineHeight),
                e.style.lineHeight = s;
            return d && (a /= 100),
            p ? -a : a
        }
        , re = n.calculateOffset = function(e, t, i) {
            if ("absolute" !== te(e, "position", i))
                return 0;
            var r = "left" === t ? "Left" : "Top"
              , n = te(e, "margin" + r, i);
            return e["offset" + r] - (ie(e, t, parseFloat(n), n.replace(z, "")) || 0)
        }
        , ne = function(e, t) {
            var i, r, n, a = {};
            if (t = t || ee(e, null))
                if (i = t.length)
                    for (; -1 < --i; )
                        (-1 === (n = t[i]).indexOf("-transform") || Ie === n) && (a[n.replace(l, p)] = t.getPropertyValue(n));
                else
                    for (i in t)
                        (-1 === i.indexOf("Transform") || Re === i) && (a[i] = t[i]);
            else if (t = e.currentStyle || e.style)
                for (i in t)
                    "string" == typeof i && void 0 === a[i] && (a[i.replace(l, p)] = t[i]);
            return $ || (a.opacity = U(e)),
            r = $e(e, t, !1),
            a.rotation = r.rotation,
            a.skewX = r.skewX,
            a.scaleX = r.scaleX,
            a.scaleY = r.scaleY,
            a.x = r.x,
            a.y = r.y,
            Ne && (a.z = r.z,
            a.rotationX = r.rotationX,
            a.rotationY = r.rotationY,
            a.scaleZ = r.scaleZ),
            a.filters && delete a.filters,
            a
        }, ae = function(e, t, i, r, n) {
            var a, s, o, l = {}, u = e.style;
            for (s in i)
                "cssText" !== s && "length" !== s && isNaN(s) && (t[s] !== (a = i[s]) || n && n[s]) && -1 === s.indexOf("Origin") && ("number" == typeof a || "string" == typeof a) && (l[s] = "auto" !== a || "left" !== s && "top" !== s ? "" !== a && "auto" !== a && "none" !== a || "string" != typeof t[s] || "" === t[s].replace(c, "") ? a : 0 : re(e, s),
                void 0 !== u[s] && (o = new xe(u,s,u[s],o)));
            if (r)
                for (s in r)
                    "className" !== s && (l[s] = r[s]);
            return {
                difs: l,
                firstMPT: o
            }
        }, se = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        }, oe = ["marginLeft", "marginRight", "marginTop", "marginBottom"], le = function(e, t, i) {
            if ("svg" === (e.nodeName + "").toLowerCase())
                return (i || ee(e))[t] || 0;
            if (e.getCTM && We(e))
                return e.getBBox()[t] || 0;
            var r = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight)
              , n = se[t]
              , a = n.length;
            for (i = i || ee(e, null); -1 < --a; )
                r -= parseFloat(te(e, "padding" + n[a], i, !0)) || 0,
                r -= parseFloat(te(e, "border" + n[a] + "Width", i, !0)) || 0;
            return r
        }, ue = function(e, t) {
            if ("contain" === e || "auto" === e || "auto auto" === e)
                return e + " ";
            (null == e || "" === e) && (e = "0 0");
            var i, r = e.split(" "), n = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : r[0], a = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : r[1];
            if (3 < r.length && !t) {
                for (r = e.split(", ").join(",").split(","),
                e = [],
                i = 0; i < r.length; i++)
                    e.push(ue(r[i]));
                return e.join(",")
            }
            return null == a ? a = "center" === n ? "50%" : "0" : "center" === a && (a = "50%"),
            ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"),
            e = n + " " + a + (2 < r.length ? " " + r[2] : ""),
            t && (t.oxp = -1 !== n.indexOf("%"),
            t.oyp = -1 !== a.indexOf("%"),
            t.oxr = "=" === n.charAt(1),
            t.oyr = "=" === a.charAt(1),
            t.ox = parseFloat(n.replace(c, "")),
            t.oy = parseFloat(a.replace(c, "")),
            t.v = e),
            t || e
        }, ce = function(e, t) {
            return "function" == typeof e && (e = e(E, M)),
            "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t) || 0
        }, pe = function(e, t) {
            return "function" == typeof e && (e = e(E, M)),
            null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e) || 0
        }, de = function(e, t, i, r) {
            var n, a, s, o, l;
            return "function" == typeof e && (e = e(E, M)),
            (o = null == e ? t : "number" == typeof e ? e : (n = 360,
            a = e.split("_"),
            s = ((l = "=" === e.charAt(1)) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(a[0].substr(2)) : parseFloat(a[0])) * (-1 === e.indexOf("rad") ? 1 : V) - (l ? 0 : t),
            a.length && (r && (r[i] = t + s),
            -1 !== e.indexOf("short") && ((s %= n) !== s % 180 && (s = s < 0 ? s + n : s - n)),
            -1 !== e.indexOf("_cw") && s < 0 ? s = (s + 3599999999640) % n - (s / n | 0) * n : -1 !== e.indexOf("ccw") && 0 < s && (s = (s - 3599999999640) % n - (s / n | 0) * n)),
            t + s)) < 1e-6 && -1e-6 < o && (o = 0),
            o
        }, he = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        }, fe = function(e, t, i) {
            return 255 * (6 * (e = e < 0 ? e + 1 : 1 < e ? e - 1 : e) < 1 ? t + (i - t) * e * 6 : e < .5 ? i : 3 * e < 2 ? t + (i - t) * (2 / 3 - e) * 6 : t) + .5 | 0
        }, me = B.parseColor = function(e, t) {
            var i, r, n, a, s, o, l, u, c, p, d;
            if (e)
                if ("number" == typeof e)
                    i = [e >> 16, e >> 8 & 255, 255 & e];
                else {
                    if ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)),
                    he[e])
                        i = he[e];
                    else if ("#" === e.charAt(0))
                        4 === e.length && (e = "#" + (r = e.charAt(1)) + r + (n = e.charAt(2)) + n + (a = e.charAt(3)) + a),
                        i = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & 255, 255 & e];
                    else if ("hsl" === e.substr(0, 3))
                        if (i = d = e.match(A),
                        t) {
                            if (-1 !== e.indexOf("="))
                                return e.match(O)
                        } else
                            s = Number(i[0]) % 360 / 360,
                            o = Number(i[1]) / 100,
                            r = 2 * (l = Number(i[2]) / 100) - (n = l <= .5 ? l * (o + 1) : l + o - l * o),
                            3 < i.length && (i[3] = Number(e[3])),
                            i[0] = fe(s + 1 / 3, r, n),
                            i[1] = fe(s, r, n),
                            i[2] = fe(s - 1 / 3, r, n);
                    else
                        i = e.match(A) || he.transparent;
                    i[0] = Number(i[0]),
                    i[1] = Number(i[1]),
                    i[2] = Number(i[2]),
                    3 < i.length && (i[3] = Number(i[3]))
                }
            else
                i = he.black;
            return t && !d && (r = i[0] / 255,
            n = i[1] / 255,
            a = i[2] / 255,
            l = ((u = Math.max(r, n, a)) + (c = Math.min(r, n, a))) / 2,
            u === c ? s = o = 0 : (p = u - c,
            o = .5 < l ? p / (2 - u - c) : p / (u + c),
            s = u === r ? (n - a) / p + (n < a ? 6 : 0) : u === n ? (a - r) / p + 2 : (r - n) / p + 4,
            s *= 60),
            i[0] = s + .5 | 0,
            i[1] = 100 * o + .5 | 0,
            i[2] = 100 * l + .5 | 0),
            i
        }
        , ge = function(e, t) {
            var i, r, n, a = e.match(ve) || [], s = 0, o = "";
            if (!a.length)
                return e;
            for (i = 0; i < a.length; i++)
                r = a[i],
                s += (n = e.substr(s, e.indexOf(r, s) - s)).length + r.length,
                3 === (r = me(r, t)).length && r.push(1),
                o += n + (t ? "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + r[3] : "rgba(" + r.join(",")) + ")";
            return o + e.substr(s)
        }, ve = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (e in he)
            ve += "|" + e + "\\b";
        ve = new RegExp(ve + ")","gi"),
        B.colorStringFilter = function(e) {
            var t, i = e[0] + " " + e[1];
            ve.test(i) && (t = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("),
            e[0] = ge(e[0], t),
            e[1] = ge(e[1], t)),
            ve.lastIndex = 0
        }
        ,
        j.defaultStringFilter || (j.defaultStringFilter = B.colorStringFilter);
        var ye = function(e, t, a, s) {
            if (null == e)
                return function(e) {
                    return e
                }
                ;
            var o, l = t ? (e.match(ve) || [""])[0] : "", u = e.split(l).join("").match(x) || [], c = e.substr(0, e.indexOf(u[0])), p = ")" === e.charAt(e.length - 1) ? ")" : "", d = -1 !== e.indexOf(" ") ? " " : ",", h = u.length, f = 0 < h ? u[0].replace(A, "") : "";
            return h ? o = t ? function(e) {
                var t, i, r, n;
                if ("number" == typeof e)
                    e += f;
                else if (s && I.test(e)) {
                    for (n = e.replace(I, "|").split("|"),
                    r = 0; r < n.length; r++)
                        n[r] = o(n[r]);
                    return n.join(",")
                }
                if (t = (e.match(ve) || [l])[0],
                r = (i = e.split(t).join("").match(x) || []).length,
                h > r--)
                    for (; ++r < h; )
                        i[r] = a ? i[(r - 1) / 2 | 0] : u[r];
                return c + i.join(d) + d + t + p + (-1 !== e.indexOf("inset") ? " inset" : "")
            }
            : function(e) {
                var t, i, r;
                if ("number" == typeof e)
                    e += f;
                else if (s && I.test(e)) {
                    for (i = e.replace(I, "|").split("|"),
                    r = 0; r < i.length; r++)
                        i[r] = o(i[r]);
                    return i.join(",")
                }
                if (r = (t = e.match(x) || []).length,
                h > r--)
                    for (; ++r < h; )
                        t[r] = a ? t[(r - 1) / 2 | 0] : u[r];
                return c + t.join(d) + p
            }
            : function(e) {
                return e
            }
        }
          , _e = function(u) {
            return u = u.split(","),
            function(e, t, i, r, n, a, s) {
                var o, l = (t + "").split(" ");
                for (s = {},
                o = 0; o < 4; o++)
                    s[u[o]] = l[o] = l[o] || l[(o - 1) / 2 >> 0];
                return r.parse(e, s, n, a)
            }
        }
          , xe = (n._setPluginRatio = function(e) {
            this.plugin.setRatio(e);
            for (var t, i, r, n, a, s = this.data, o = s.proxy, l = s.firstMPT; l; )
                t = o[l.v],
                l.r ? t = Math.round(t) : t < 1e-6 && -1e-6 < t && (t = 0),
                l.t[l.p] = t,
                l = l._next;
            if (s.autoRotate && (s.autoRotate.rotation = s.mod ? s.mod(o.rotation, this.t) : o.rotation),
            1 === e || 0 === e)
                for (l = s.firstMPT,
                a = 1 === e ? "e" : "b"; l; ) {
                    if ((i = l.t).type) {
                        if (1 === i.type) {
                            for (n = i.xs0 + i.s + i.xs1,
                            r = 1; r < i.l; r++)
                                n += i["xn" + r] + i["xs" + (r + 1)];
                            i[a] = n
                        }
                    } else
                        i[a] = i.s + i.xs0;
                    l = l._next
                }
        }
        ,
        function(e, t, i, r, n) {
            this.t = e,
            this.p = t,
            this.v = i,
            this.r = n,
            r && ((r._prev = this)._next = r)
        }
        )
          , we = (n._parseToProxy = function(e, t, i, r, n, a) {
            var s, o, l, u, c, p = r, d = {}, h = {}, f = i._transform, m = F;
            for (i._transform = null,
            F = t,
            r = c = i.parse(e, t, r, n),
            F = m,
            a && (i._transform = f,
            p && (p._prev = null,
            p._prev && (p._prev._next = null))); r && r !== p; ) {
                if (r.type <= 1 && (h[o = r.p] = r.s + r.c,
                d[o] = r.s,
                a || (u = new xe(r,"s",o,u,r.r),
                r.c = 0),
                1 === r.type))
                    for (s = r.l; 0 < --s; )
                        l = "xn" + s,
                        h[o = r.p + "_" + l] = r.data[l],
                        d[o] = r[l],
                        a || (u = new xe(r,l,o,u,r.rxp[l]));
                r = r._next
            }
            return {
                proxy: d,
                end: h,
                firstMPT: u,
                pt: c
            }
        }
        ,
        n.CSSPropTween = function(e, t, i, r, n, a, s, o, l, u, c) {
            this.t = e,
            this.p = t,
            this.s = i,
            this.c = r,
            this.n = s || t,
            e instanceof we || m.push(this.n),
            this.r = o,
            this.type = a || 0,
            l && (this.pr = l,
            f = !0),
            this.b = void 0 === u ? i : u,
            this.e = void 0 === c ? i + r : c,
            n && ((this._next = n)._prev = this)
        }
        )
          , be = function(e, t, i, r, n, a) {
            var s = new we(e,t,i,r - i,n,-1,a);
            return s.b = i,
            s.e = s.xs0 = r,
            s
        }
          , Te = B.parseComplex = function(e, t, i, r, n, a, s, o, l, u) {
            i = i || a || "",
            "function" == typeof r && (r = r(E, M)),
            s = new we(e,t,0,0,s,u ? 2 : 1,null,!1,o,i,r),
            r += "",
            n && ve.test(r + i) && (r = [i, r],
            B.colorStringFilter(r),
            i = r[0],
            r = r[1]);
            var c, p, d, h, f, m, g, v, y, _, x, w, b, T = i.split(", ").join(",").split(" "), S = r.split(", ").join(",").split(" "), C = T.length, P = !1 !== k;
            for ((-1 !== r.indexOf(",") || -1 !== i.indexOf(",")) && (T = T.join(" ").replace(I, ", ").split(" "),
            S = S.join(" ").replace(I, ", ").split(" "),
            C = T.length),
            C !== S.length && (C = (T = (a || "").split(" ")).length),
            s.plugin = l,
            s.setRatio = u,
            c = ve.lastIndex = 0; c < C; c++)
                if (h = T[c],
                f = S[c],
                (v = parseFloat(h)) || 0 === v)
                    s.appendXtra("", v, ce(f, v), f.replace(O, ""), P && -1 !== f.indexOf("px"), !0);
                else if (n && ve.test(h))
                    w = ")" + ((w = f.indexOf(")") + 1) ? f.substr(w) : ""),
                    b = -1 !== f.indexOf("hsl") && $,
                    _ = f,
                    h = me(h, b),
                    f = me(f, b),
                    (y = 6 < h.length + f.length) && !$ && 0 === f[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent",
                    s.e = s.e.split(S[c]).join("transparent")) : ($ || (y = !1),
                    b ? s.appendXtra(_.substr(0, _.indexOf("hsl")) + (y ? "hsla(" : "hsl("), h[0], ce(f[0], h[0]), ",", !1, !0).appendXtra("", h[1], ce(f[1], h[1]), "%,", !1).appendXtra("", h[2], ce(f[2], h[2]), y ? "%," : "%" + w, !1) : s.appendXtra(_.substr(0, _.indexOf("rgb")) + (y ? "rgba(" : "rgb("), h[0], f[0] - h[0], ",", !0, !0).appendXtra("", h[1], f[1] - h[1], ",", !0).appendXtra("", h[2], f[2] - h[2], y ? "," : w, !0),
                    y && (h = h.length < 4 ? 1 : h[3],
                    s.appendXtra("", h, (f.length < 4 ? 1 : f[3]) - h, w, !1))),
                    ve.lastIndex = 0;
                else if (m = h.match(A)) {
                    if (!(g = f.match(O)) || g.length !== m.length)
                        return s;
                    for (p = d = 0; p < m.length; p++)
                        x = m[p],
                        _ = h.indexOf(x, d),
                        s.appendXtra(h.substr(d, _ - d), Number(x), ce(g[p], x), "", P && "px" === h.substr(_ + x.length, 2), 0 === p),
                        d = _ + x.length;
                    s["xs" + s.l] += h.substr(d)
                } else
                    s["xs" + s.l] += s.l || s["xs" + s.l] ? " " + f : f;
            if (-1 !== r.indexOf("=") && s.data) {
                for (w = s.xs0 + s.data.s,
                c = 1; c < s.l; c++)
                    w += s["xs" + c] + s.data["xn" + c];
                s.e = w + s["xs" + c]
            }
            return s.l || (s.type = -1,
            s.xs0 = s.e),
            s.xfirst || s
        }
          , Se = 9;
        for ((e = we.prototype).l = e.pr = 0; 0 < --Se; )
            e["xn" + Se] = 0,
            e["xs" + Se] = "";
        e.xs0 = "",
        e._next = e._prev = e.xfirst = e.data = e.plugin = e.setRatio = e.rxp = null,
        e.appendXtra = function(e, t, i, r, n, a) {
            var s = this
              , o = s.l;
            return s["xs" + o] += a && (o || s["xs" + o]) ? " " + e : e || "",
            i || 0 === o || s.plugin ? (s.l++,
            s.type = s.setRatio ? 2 : 1,
            s["xs" + s.l] = r || "",
            0 < o ? (s.data["xn" + o] = t + i,
            s.rxp["xn" + o] = n,
            s["xn" + o] = t,
            s.plugin || (s.xfirst = new we(s,"xn" + o,t,i,s.xfirst || s,0,s.n,n,s.pr),
            s.xfirst.xs0 = 0)) : (s.data = {
                s: t + i
            },
            s.rxp = {},
            s.s = t,
            s.c = i,
            s.r = n)) : s["xs" + o] += t + (r || ""),
            s
        }
        ;
        var Ce = function(e, t) {
            t = t || {},
            this.p = t.prefix && J(e) || e,
            g[e] = g[this.p] = this,
            this.format = t.formatter || ye(t.defaultValue, t.color, t.collapsible, t.multi),
            t.parser && (this.parse = t.parser),
            this.clrs = t.color,
            this.multi = t.multi,
            this.keyword = t.keyword,
            this.dflt = t.defaultValue,
            this.pr = t.priority || 0
        }
          , Pe = n._registerComplexSpecialProp = function(e, t, i) {
            "object" != typeof t && (t = {
                parser: i
            });
            var r, n = e.split(","), a = t.defaultValue;
            for (i = i || [a],
            r = 0; r < n.length; r++)
                t.prefix = 0 === r && t.prefix,
                t.defaultValue = i[r] || a,
                new Ce(n[r],t)
        }
          , ke = n._registerPluginProp = function(e) {
            if (!g[e]) {
                var l = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                Pe(e, {
                    parser: function(e, t, i, r, n, a, s) {
                        var o = u.com.greensock.plugins[l];
                        return o ? (o._cssRegister(),
                        g[i].parse(e, t, i, r, n, a, s)) : (Q("Error: " + l + " js file not loaded."),
                        n)
                    }
                })
            }
        }
        ;
        (e = Ce.prototype).parseComplex = function(e, t, i, r, n, a) {
            var s, o, l, u, c, p, d = this.keyword;
            if (this.multi && (I.test(i) || I.test(t) ? (o = t.replace(I, "|").split("|"),
            l = i.replace(I, "|").split("|")) : d && (o = [t],
            l = [i])),
            l) {
                for (u = l.length > o.length ? l.length : o.length,
                s = 0; s < u; s++)
                    t = o[s] = o[s] || this.dflt,
                    i = l[s] = l[s] || this.dflt,
                    d && ((c = t.indexOf(d)) !== (p = i.indexOf(d)) && (-1 === p ? o[s] = o[s].split(d).join("") : -1 === c && (o[s] += " " + d)));
                t = o.join(", "),
                i = l.join(", ")
            }
            return Te(e, this.p, t, i, this.clrs, this.dflt, r, this.pr, n, a)
        }
        ,
        e.parse = function(e, t, i, r, n, a, s) {
            return this.parseComplex(e.style, this.format(te(e, this.p, P, !1, this.dflt)), this.format(t), n, a)
        }
        ,
        B.registerSpecialProp = function(e, l, u) {
            Pe(e, {
                parser: function(e, t, i, r, n, a, s) {
                    var o = new we(e,i,0,0,n,2,i,!1,u);
                    return o.plugin = a,
                    o.setRatio = l(e, t, r._tween, i),
                    o
                },
                priority: u
            })
        }
        ,
        B.useSVGTransformAttr = !0;
        var Me, Ee, Ae, Oe, ze, De = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), Re = J("transform"), Ie = Z + "transform", Le = J("transformOrigin"), Ne = null !== J("perspective"), He = n.Transform = function() {
            this.perspective = parseFloat(B.defaultTransformPerspective) || 0,
            this.force3D = !(!1 === B.defaultForce3D || !Ne) && (B.defaultForce3D || "auto")
        }
        , Fe = _gsScope.SVGElement, je = function(e, t, i) {
            var r, n = X.createElementNS("http://www.w3.org/2000/svg", e), a = /([a-z])([A-Z])/g;
            for (r in i)
                n.setAttributeNS(null, r.replace(a, "$1-$2").toLowerCase(), i[r]);
            return t.appendChild(n),
            n
        }, Be = X.documentElement || {}, Ve = (ze = C || /Android/i.test(G) && !_gsScope.chrome,
        X.createElementNS && !ze && (Ee = je("svg", Be),
        Oe = (Ae = je("rect", Ee, {
            width: 100,
            height: 50,
            x: 100
        })).getBoundingClientRect().width,
        Ae.style[Le] = "50% 50%",
        Ae.style[Re] = "scaleX(0.5)",
        ze = Oe === Ae.getBoundingClientRect().width && !(N && Ne),
        Be.removeChild(Ee)),
        ze), Xe = function(e, t, i, r, n, a) {
            var s, o, l, u, c, p, d, h, f, m, g, v, y, _, x = e._gsTransform, w = Ge(e, !0);
            x && (y = x.xOrigin,
            _ = x.yOrigin),
            (!r || (s = r.split(" ")).length < 2) && (0 === (d = e.getBBox()).x && 0 === d.y && d.width + d.height === 0 && (d = {
                x: parseFloat(e.hasAttribute("x") ? e.getAttribute("x") : e.hasAttribute("cx") ? e.getAttribute("cx") : 0) || 0,
                y: parseFloat(e.hasAttribute("y") ? e.getAttribute("y") : e.hasAttribute("cy") ? e.getAttribute("cy") : 0) || 0,
                width: 0,
                height: 0
            }),
            s = [(-1 !== (t = ue(t).split(" "))[0].indexOf("%") ? parseFloat(t[0]) / 100 * d.width : parseFloat(t[0])) + d.x, (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * d.height : parseFloat(t[1])) + d.y]),
            i.xOrigin = u = parseFloat(s[0]),
            i.yOrigin = c = parseFloat(s[1]),
            r && w !== Ye && (p = w[0],
            d = w[1],
            h = w[2],
            f = w[3],
            m = w[4],
            g = w[5],
            (v = p * f - d * h) && (o = u * (f / v) + c * (-h / v) + (h * g - f * m) / v,
            l = u * (-d / v) + c * (p / v) - (p * g - d * m) / v,
            u = i.xOrigin = s[0] = o,
            c = i.yOrigin = s[1] = l)),
            x && (a && (i.xOffset = x.xOffset,
            i.yOffset = x.yOffset,
            x = i),
            n || !1 !== n && !1 !== B.defaultSmoothOrigin ? (o = u - y,
            l = c - _,
            x.xOffset += o * w[0] + l * w[2] - o,
            x.yOffset += o * w[1] + l * w[3] - l) : x.xOffset = x.yOffset = 0),
            a || e.setAttribute("data-svg-origin", s.join(" "))
        }, qe = function(e) {
            var t, i = q("svg", this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, n = this.nextSibling, a = this.style.cssText;
            if (Be.appendChild(i),
            i.appendChild(this),
            this.style.display = "block",
            e)
                try {
                    t = this.getBBox(),
                    this._originalGetBBox = this.getBBox,
                    this.getBBox = qe
                } catch (e) {}
            else
                this._originalGetBBox && (t = this._originalGetBBox());
            return n ? r.insertBefore(this, n) : r.appendChild(this),
            Be.removeChild(i),
            this.style.cssText = a,
            t
        }, We = function(e) {
            return !(!(Fe && e.getCTM && function(t) {
                try {
                    return t.getBBox()
                } catch (e) {
                    return qe.call(t, !0)
                }
            }(e)) || e.parentNode && !e.ownerSVGElement)
        }, Ye = [1, 0, 0, 1, 0, 0], Ge = function(e, t) {
            var i, r, n, a, s, o, l = e._gsTransform || new He, u = e.style;
            if (Re ? r = te(e, Ie, null, !0) : e.currentStyle && (r = (r = e.currentStyle.filter.match(d)) && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), l.x || 0, l.y || 0].join(",") : ""),
            i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r,
            !Re || !(o = "none" === ee(e).display) && e.parentNode || (o && (a = u.display,
            u.display = "block"),
            e.parentNode || (s = 1,
            Be.appendChild(e)),
            i = !(r = te(e, Ie, null, !0)) || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r,
            a ? u.display = a : o && Ke(u, "display"),
            s && Be.removeChild(e)),
            (l.svg || e.getCTM && We(e)) && (i && -1 !== (u[Re] + "").indexOf("matrix") && (r = u[Re],
            i = 0),
            n = e.getAttribute("transform"),
            i && n && (-1 !== n.indexOf("matrix") ? (r = n,
            i = 0) : -1 !== n.indexOf("translate") && (r = "matrix(1,0,0,1," + n.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")",
            i = 0))),
            i)
                return Ye;
            for (n = (r || "").match(A) || [],
            Se = n.length; -1 < --Se; )
                a = Number(n[Se]),
                n[Se] = (s = a - (a |= 0)) ? (1e5 * s + (s < 0 ? -.5 : .5) | 0) / 1e5 + a : a;
            return t && 6 < n.length ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n
        }, $e = n.getTransform = function(e, t, i, r) {
            if (e._gsTransform && i && !r)
                return e._gsTransform;
            var n, a, s, o, l, u, c = i && e._gsTransform || new He, p = c.scaleX < 0, d = Ne && (parseFloat(te(e, Le, t, !1, "0 0 0").split(" ")[2]) || c.zOrigin) || 0, h = parseFloat(B.defaultTransformPerspective) || 0;
            if (c.svg = !(!e.getCTM || !We(e)),
            c.svg && (Xe(e, te(e, Le, t, !1, "50% 50%") + "", c, e.getAttribute("data-svg-origin")),
            Me = B.useSVGTransformAttr || Ve),
            (n = Ge(e)) !== Ye) {
                if (16 === n.length) {
                    var f, m, g, v, y, _ = n[0], x = n[1], w = n[2], b = n[3], T = n[4], S = n[5], C = n[6], P = n[7], k = n[8], M = n[9], E = n[10], A = n[12], O = n[13], z = n[14], D = n[11], R = Math.atan2(C, E);
                    c.zOrigin && (A = k * (z = -c.zOrigin) - n[12],
                    O = M * z - n[13],
                    z = E * z + c.zOrigin - n[14]),
                    c.rotationX = R * V,
                    R && (f = T * (v = Math.cos(-R)) + k * (y = Math.sin(-R)),
                    m = S * v + M * y,
                    g = C * v + E * y,
                    k = T * -y + k * v,
                    M = S * -y + M * v,
                    E = C * -y + E * v,
                    D = P * -y + D * v,
                    T = f,
                    S = m,
                    C = g),
                    R = Math.atan2(-w, E),
                    c.rotationY = R * V,
                    R && (m = x * (v = Math.cos(-R)) - M * (y = Math.sin(-R)),
                    g = w * v - E * y,
                    M = x * y + M * v,
                    E = w * y + E * v,
                    D = b * y + D * v,
                    _ = f = _ * v - k * y,
                    x = m,
                    w = g),
                    R = Math.atan2(x, _),
                    c.rotation = R * V,
                    R && (f = _ * (v = Math.cos(R)) + x * (y = Math.sin(R)),
                    m = T * v + S * y,
                    g = k * v + M * y,
                    x = x * v - _ * y,
                    S = S * v - T * y,
                    M = M * v - k * y,
                    _ = f,
                    T = m,
                    k = g),
                    c.rotationX && 359.9 < Math.abs(c.rotationX) + Math.abs(c.rotation) && (c.rotationX = c.rotation = 0,
                    c.rotationY = 180 - c.rotationY),
                    R = Math.atan2(T, S),
                    c.scaleX = (1e5 * Math.sqrt(_ * _ + x * x + w * w) + .5 | 0) / 1e5,
                    c.scaleY = (1e5 * Math.sqrt(S * S + C * C) + .5 | 0) / 1e5,
                    c.scaleZ = (1e5 * Math.sqrt(k * k + M * M + E * E) + .5 | 0) / 1e5,
                    _ /= c.scaleX,
                    T /= c.scaleY,
                    x /= c.scaleX,
                    S /= c.scaleY,
                    2e-5 < Math.abs(R) ? (c.skewX = R * V,
                    T = 0,
                    "simple" !== c.skewType && (c.scaleY *= 1 / Math.cos(R))) : c.skewX = 0,
                    c.perspective = D ? 1 / (D < 0 ? -D : D) : 0,
                    c.x = A,
                    c.y = O,
                    c.z = z,
                    c.svg && (c.x -= c.xOrigin - (c.xOrigin * _ - c.yOrigin * T),
                    c.y -= c.yOrigin - (c.yOrigin * x - c.xOrigin * S))
                } else if (!Ne || r || !n.length || c.x !== n[4] || c.y !== n[5] || !c.rotationX && !c.rotationY) {
                    var I = 6 <= n.length
                      , L = I ? n[0] : 1
                      , N = n[1] || 0
                      , H = n[2] || 0
                      , F = I ? n[3] : 1;
                    c.x = n[4] || 0,
                    c.y = n[5] || 0,
                    s = Math.sqrt(L * L + N * N),
                    o = Math.sqrt(F * F + H * H),
                    l = L || N ? Math.atan2(N, L) * V : c.rotation || 0,
                    u = H || F ? Math.atan2(H, F) * V + l : c.skewX || 0,
                    c.scaleX = s,
                    c.scaleY = o,
                    c.rotation = l,
                    c.skewX = u,
                    Ne && (c.rotationX = c.rotationY = c.z = 0,
                    c.perspective = h,
                    c.scaleZ = 1),
                    c.svg && (c.x -= c.xOrigin - (c.xOrigin * L + c.yOrigin * H),
                    c.y -= c.yOrigin - (c.xOrigin * N + c.yOrigin * F))
                }
                for (a in 90 < Math.abs(c.skewX) && Math.abs(c.skewX) < 270 && (p ? (c.scaleX *= -1,
                c.skewX += c.rotation <= 0 ? 180 : -180,
                c.rotation += c.rotation <= 0 ? 180 : -180) : (c.scaleY *= -1,
                c.skewX += c.skewX <= 0 ? 180 : -180)),
                c.zOrigin = d,
                c)
                    c[a] < 2e-5 && -2e-5 < c[a] && (c[a] = 0)
            }
            return i && ((e._gsTransform = c).svg && (Me && e.style[Re] ? j.delayedCall(.001, function() {
                Ke(e.style, Re)
            }) : !Me && e.getAttribute("transform") && j.delayedCall(.001, function() {
                e.removeAttribute("transform")
            }))),
            c
        }
        , Ue = function(e) {
            var t, i, r = this.data, n = -r.rotation * H, a = n + r.skewX * H, s = (Math.cos(n) * r.scaleX * 1e5 | 0) / 1e5, o = (Math.sin(n) * r.scaleX * 1e5 | 0) / 1e5, l = (Math.sin(a) * -r.scaleY * 1e5 | 0) / 1e5, u = (Math.cos(a) * r.scaleY * 1e5 | 0) / 1e5, c = this.t.style, p = this.t.currentStyle;
            if (p) {
                i = o,
                o = -l,
                l = -i,
                t = p.filter,
                c.filter = "";
                var d, h, f = this.t.offsetWidth, m = this.t.offsetHeight, g = "absolute" !== p.position, v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + s + ", M12=" + o + ", M21=" + l + ", M22=" + u, y = r.x + f * r.xPercent / 100, _ = r.y + m * r.yPercent / 100;
                if (null != r.ox && (y += (d = (r.oxp ? f * r.ox * .01 : r.ox) - f / 2) - (d * s + (h = (r.oyp ? m * r.oy * .01 : r.oy) - m / 2) * o),
                _ += h - (d * l + h * u)),
                g ? v += ", Dx=" + ((d = f / 2) - (d * s + (h = m / 2) * o) + y) + ", Dy=" + (h - (d * l + h * u) + _) + ")" : v += ", sizingMethod='auto expand')",
                -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? c.filter = t.replace(R, v) : c.filter = v + " " + t,
                (0 === e || 1 === e) && 1 === s && 0 === o && 0 === l && 1 === u && (g && -1 === v.indexOf("Dx=0, Dy=0") || D.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && c.removeAttribute("filter")),
                !g) {
                    var x, w, b, T = C < 8 ? 1 : -1;
                    for (d = r.ieOffsetX || 0,
                    h = r.ieOffsetY || 0,
                    r.ieOffsetX = Math.round((f - ((s < 0 ? -s : s) * f + (o < 0 ? -o : o) * m)) / 2 + y),
                    r.ieOffsetY = Math.round((m - ((u < 0 ? -u : u) * m + (l < 0 ? -l : l) * f)) / 2 + _),
                    Se = 0; Se < 4; Se++)
                        b = (i = -1 !== (x = p[w = oe[Se]]).indexOf("px") ? parseFloat(x) : ie(this.t, w, parseFloat(x), x.replace(z, "")) || 0) !== r[w] ? Se < 2 ? -r.ieOffsetX : -r.ieOffsetY : Se < 2 ? d - r.ieOffsetX : h - r.ieOffsetY,
                        c[w] = (r[w] = Math.round(i - b * (0 === Se || 2 === Se ? 1 : T))) + "px"
                }
            }
        }, Qe = n.set3DTransformRatio = n.setTransformRatio = function(e) {
            var t, i, r, n, a, s, o, l, u, c, p, d, h, f, m, g, v, y, _, x, w = this.data, b = this.t.style, T = w.rotation, S = w.rotationX, C = w.rotationY, P = w.scaleX, k = w.scaleY, M = w.scaleZ, E = w.x, A = w.y, O = w.z, z = w.svg, D = w.perspective, R = w.force3D, I = w.skewY, L = w.skewX;
            if (I && (L += I,
            T += I),
            !((1 !== e && 0 !== e || "auto" !== R || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && R || O || D || C || S || 1 !== M) || Me && z || !Ne)
                T || L || z ? (T *= H,
                x = L * H,
                1e5,
                i = Math.cos(T) * P,
                a = Math.sin(T) * P,
                r = Math.sin(T - x) * -k,
                s = Math.cos(T - x) * k,
                x && "simple" === w.skewType && (t = Math.tan(x - I * H),
                r *= t = Math.sqrt(1 + t * t),
                s *= t,
                I && (t = Math.tan(I * H),
                i *= t = Math.sqrt(1 + t * t),
                a *= t)),
                z && (E += w.xOrigin - (w.xOrigin * i + w.yOrigin * r) + w.xOffset,
                A += w.yOrigin - (w.xOrigin * a + w.yOrigin * s) + w.yOffset,
                Me && (w.xPercent || w.yPercent) && (m = this.t.getBBox(),
                E += .01 * w.xPercent * m.width,
                A += .01 * w.yPercent * m.height),
                E < (m = 1e-6) && -m < E && (E = 0),
                A < m && -m < A && (A = 0)),
                _ = (1e5 * i | 0) / 1e5 + "," + (1e5 * a | 0) / 1e5 + "," + (1e5 * r | 0) / 1e5 + "," + (1e5 * s | 0) / 1e5 + "," + E + "," + A + ")",
                z && Me ? this.t.setAttribute("transform", "matrix(" + _) : b[Re] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + _) : b[Re] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + P + ",0,0," + k + "," + E + "," + A + ")";
            else {
                if (N && (P < (m = 1e-4) && -m < P && (P = M = 2e-5),
                k < m && -m < k && (k = M = 2e-5),
                !D || w.z || w.rotationX || w.rotationY || (D = 0)),
                T || L)
                    T *= H,
                    g = i = Math.cos(T),
                    v = a = Math.sin(T),
                    L && (T -= L * H,
                    g = Math.cos(T),
                    v = Math.sin(T),
                    "simple" === w.skewType && (t = Math.tan((L - I) * H),
                    g *= t = Math.sqrt(1 + t * t),
                    v *= t,
                    w.skewY && (t = Math.tan(I * H),
                    i *= t = Math.sqrt(1 + t * t),
                    a *= t))),
                    r = -v,
                    s = g;
                else {
                    if (!(C || S || 1 !== M || D || z))
                        return void (b[Re] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) translate3d(" : "translate3d(") + E + "px," + A + "px," + O + "px)" + (1 !== P || 1 !== k ? " scale(" + P + "," + k + ")" : ""));
                    i = s = 1,
                    r = a = 0
                }
                c = 1,
                n = o = l = u = p = d = 0,
                h = D ? -1 / D : 0,
                f = w.zOrigin,
                m = 1e-6,
                ",",
                "0",
                (T = C * H) && (g = Math.cos(T),
                p = h * (l = -(v = Math.sin(T))),
                n = i * v,
                o = a * v,
                h *= c = g,
                i *= g,
                a *= g),
                (T = S * H) && (t = r * (g = Math.cos(T)) + n * (v = Math.sin(T)),
                y = s * g + o * v,
                u = c * v,
                d = h * v,
                n = r * -v + n * g,
                o = s * -v + o * g,
                c *= g,
                h *= g,
                r = t,
                s = y),
                1 !== M && (n *= M,
                o *= M,
                c *= M,
                h *= M),
                1 !== k && (r *= k,
                s *= k,
                u *= k,
                d *= k),
                1 !== P && (i *= P,
                a *= P,
                l *= P,
                p *= P),
                (f || z) && (f && (E += n * -f,
                A += o * -f,
                O += c * -f + f),
                z && (E += w.xOrigin - (w.xOrigin * i + w.yOrigin * r) + w.xOffset,
                A += w.yOrigin - (w.xOrigin * a + w.yOrigin * s) + w.yOffset),
                E < m && -m < E && (E = "0"),
                A < m && -m < A && (A = "0"),
                O < m && -m < O && (O = 0)),
                _ = w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix3d(" : "matrix3d(",
                _ += (i < m && -m < i ? "0" : i) + "," + (a < m && -m < a ? "0" : a) + "," + (l < m && -m < l ? "0" : l),
                _ += "," + (p < m && -m < p ? "0" : p) + "," + (r < m && -m < r ? "0" : r) + "," + (s < m && -m < s ? "0" : s),
                S || C || 1 !== M ? (_ += "," + (u < m && -m < u ? "0" : u) + "," + (d < m && -m < d ? "0" : d) + "," + (n < m && -m < n ? "0" : n),
                _ += "," + (o < m && -m < o ? "0" : o) + "," + (c < m && -m < c ? "0" : c) + "," + (h < m && -m < h ? "0" : h) + ",") : _ += ",0,0,0,0,1,0,",
                _ += E + "," + A + "," + O + "," + (D ? 1 + -O / D : 1) + ")",
                b[Re] = _
            }
        }
        ;
        (e = He.prototype).x = e.y = e.z = e.skewX = e.skewY = e.rotation = e.rotationX = e.rotationY = e.zOrigin = e.xPercent = e.yPercent = e.xOffset = e.yOffset = 0,
        e.scaleX = e.scaleY = e.scaleZ = 1,
        Pe("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function(e, t, i, r, n, a, s) {
                if (r._lastParsedTransform === s)
                    return n;
                var o, l = (r._lastParsedTransform = s).scale && "function" == typeof s.scale ? s.scale : 0;
                "function" == typeof s[i] && (o = s[i],
                s[i] = t),
                l && (s.scale = l(E, e));
                var u, c, p, d, h, f, m, g, v, y = e._gsTransform, _ = e.style, x = De.length, w = s, b = {}, T = "transformOrigin", S = $e(e, P, !0, w.parseTransform), C = w.transform && ("function" == typeof w.transform ? w.transform(E, M) : w.transform);
                if (S.skewType = w.skewType || S.skewType || B.defaultSkewType,
                r._transform = S,
                C && "string" == typeof C && Re)
                    (c = W.style)[Re] = C,
                    c.display = "block",
                    c.position = "absolute",
                    X.body.appendChild(W),
                    u = $e(W, null, !1),
                    "simple" === S.skewType && (u.scaleY *= Math.cos(u.skewX * H)),
                    S.svg && (f = S.xOrigin,
                    m = S.yOrigin,
                    u.x -= S.xOffset,
                    u.y -= S.yOffset,
                    (w.transformOrigin || w.svgOrigin) && (C = {},
                    Xe(e, ue(w.transformOrigin), C, w.svgOrigin, w.smoothOrigin, !0),
                    f = C.xOrigin,
                    m = C.yOrigin,
                    u.x -= C.xOffset - S.xOffset,
                    u.y -= C.yOffset - S.yOffset),
                    (f || m) && (g = Ge(W, !0),
                    u.x -= f - (f * g[0] + m * g[2]),
                    u.y -= m - (f * g[1] + m * g[3]))),
                    X.body.removeChild(W),
                    u.perspective || (u.perspective = S.perspective),
                    null != w.xPercent && (u.xPercent = pe(w.xPercent, S.xPercent)),
                    null != w.yPercent && (u.yPercent = pe(w.yPercent, S.yPercent));
                else if ("object" == typeof w) {
                    if (u = {
                        scaleX: pe(null != w.scaleX ? w.scaleX : w.scale, S.scaleX),
                        scaleY: pe(null != w.scaleY ? w.scaleY : w.scale, S.scaleY),
                        scaleZ: pe(w.scaleZ, S.scaleZ),
                        x: pe(w.x, S.x),
                        y: pe(w.y, S.y),
                        z: pe(w.z, S.z),
                        xPercent: pe(w.xPercent, S.xPercent),
                        yPercent: pe(w.yPercent, S.yPercent),
                        perspective: pe(w.transformPerspective, S.perspective)
                    },
                    null != (h = w.directionalRotation))
                        if ("object" == typeof h)
                            for (c in h)
                                w[c] = h[c];
                        else
                            w.rotation = h;
                    "string" == typeof w.x && -1 !== w.x.indexOf("%") && (u.x = 0,
                    u.xPercent = pe(w.x, S.xPercent)),
                    "string" == typeof w.y && -1 !== w.y.indexOf("%") && (u.y = 0,
                    u.yPercent = pe(w.y, S.yPercent)),
                    u.rotation = de("rotation"in w ? w.rotation : "shortRotation"in w ? w.shortRotation + "_short" : "rotationZ"in w ? w.rotationZ : S.rotation, S.rotation, "rotation", b),
                    Ne && (u.rotationX = de("rotationX"in w ? w.rotationX : "shortRotationX"in w ? w.shortRotationX + "_short" : S.rotationX || 0, S.rotationX, "rotationX", b),
                    u.rotationY = de("rotationY"in w ? w.rotationY : "shortRotationY"in w ? w.shortRotationY + "_short" : S.rotationY || 0, S.rotationY, "rotationY", b)),
                    u.skewX = de(w.skewX, S.skewX),
                    u.skewY = de(w.skewY, S.skewY)
                }
                for (Ne && null != w.force3D && (S.force3D = w.force3D,
                d = !0),
                (p = S.force3D || S.z || S.rotationX || S.rotationY || u.z || u.rotationX || u.rotationY || u.perspective) || null == w.scale || (u.scaleZ = 1); -1 < --x; )
                    (1e-6 < (C = u[v = De[x]] - S[v]) || C < -1e-6 || null != w[v] || null != F[v]) && (d = !0,
                    n = new we(S,v,S[v],C,n),
                    v in b && (n.e = b[v]),
                    n.xs0 = 0,
                    n.plugin = a,
                    r._overwriteProps.push(n.n));
                return C = w.transformOrigin,
                S.svg && (C || w.svgOrigin) && (f = S.xOffset,
                m = S.yOffset,
                Xe(e, ue(C), u, w.svgOrigin, w.smoothOrigin),
                n = be(S, "xOrigin", (y ? S : u).xOrigin, u.xOrigin, n, T),
                n = be(S, "yOrigin", (y ? S : u).yOrigin, u.yOrigin, n, T),
                (f !== S.xOffset || m !== S.yOffset) && (n = be(S, "xOffset", y ? f : S.xOffset, S.xOffset, n, T),
                n = be(S, "yOffset", y ? m : S.yOffset, S.yOffset, n, T)),
                C = "0px 0px"),
                (C || Ne && p && S.zOrigin) && (Re ? (d = !0,
                v = Le,
                C = (C || te(e, v, P, !1, "50% 50%")) + "",
                (n = new we(_,v,0,0,n,-1,T)).b = _[v],
                n.plugin = a,
                n.xs0 = n.e = Ne ? (c = S.zOrigin,
                C = C.split(" "),
                S.zOrigin = (2 < C.length && (0 === c || "0px" !== C[2]) ? parseFloat(C[2]) : c) || 0,
                n.xs0 = n.e = C[0] + " " + (C[1] || "50%") + " 0px",
                (n = new we(S,"zOrigin",0,0,n,-1,n.n)).b = c,
                S.zOrigin) : C) : ue(C + "", S)),
                d && (r._transformType = S.svg && Me || !p && 3 !== this._transformType ? 2 : 3),
                o && (s[i] = o),
                l && (s.scale = l),
                n
            },
            prefix: !0
        }),
        Pe("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }),
        Pe("borderRadius", {
            defaultValue: "0px",
            parser: function(e, t, i, r, n, a) {
                t = this.format(t);
                var s, o, l, u, c, p, d, h, f, m, g, v, y, _, x, w, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], T = e.style;
                for (f = parseFloat(e.offsetWidth),
                m = parseFloat(e.offsetHeight),
                s = t.split(" "),
                o = 0; o < b.length; o++)
                    this.p.indexOf("border") && (b[o] = J(b[o])),
                    -1 !== (c = u = te(e, b[o], P, !1, "0px")).indexOf(" ") && (c = (u = c.split(" "))[0],
                    u = u[1]),
                    p = l = s[o],
                    d = parseFloat(c),
                    v = c.substr((d + "").length),
                    "" === (g = (y = "=" === p.charAt(1)) ? (h = parseInt(p.charAt(0) + "1", 10),
                    p = p.substr(2),
                    h *= parseFloat(p),
                    p.substr((h + "").length - (h < 0 ? 1 : 0)) || "") : (h = parseFloat(p),
                    p.substr((h + "").length))) && (g = S[i] || v),
                    g !== v && (_ = ie(e, "borderLeft", d, v),
                    x = ie(e, "borderTop", d, v),
                    u = "%" === g ? (c = _ / f * 100 + "%",
                    x / m * 100 + "%") : "em" === g ? (c = _ / (w = ie(e, "borderLeft", 1, "em")) + "em",
                    x / w + "em") : (c = _ + "px",
                    x + "px"),
                    y && (p = parseFloat(c) + h + g,
                    l = parseFloat(u) + h + g)),
                    n = Te(T, b[o], c + " " + u, p + " " + l, !1, "0px", n);
                return n
            },
            prefix: !0,
            formatter: ye("0px 0px 0px 0px", !1, !0)
        }),
        Pe("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
            defaultValue: "0px",
            parser: function(e, t, i, r, n, a) {
                return Te(e.style, i, this.format(te(e, i, P, !1, "0px 0px")), this.format(t), !1, "0px", n)
            },
            prefix: !0,
            formatter: ye("0px 0px", !1, !0)
        }),
        Pe("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(e, t, i, r, n, a) {
                var s, o, l, u, c, p, d = "background-position", h = P || ee(e, null), f = this.format((h ? C ? h.getPropertyValue(d + "-x") + " " + h.getPropertyValue(d + "-y") : h.getPropertyValue(d) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"), m = this.format(t);
                if (-1 !== f.indexOf("%") != (-1 !== m.indexOf("%")) && m.split(",").length < 2 && ((p = te(e, "backgroundImage").replace(T, "")) && "none" !== p)) {
                    for (s = f.split(" "),
                    o = m.split(" "),
                    Y.setAttribute("src", p),
                    l = 2; -1 < --l; )
                        (u = -1 !== (f = s[l]).indexOf("%")) !== (-1 !== o[l].indexOf("%")) && (c = 0 === l ? e.offsetWidth - Y.width : e.offsetHeight - Y.height,
                        s[l] = u ? parseFloat(f) / 100 * c + "px" : parseFloat(f) / c * 100 + "%");
                    f = s.join(" ")
                }
                return this.parseComplex(e.style, f, m, n, a)
            },
            formatter: ue
        }),
        Pe("backgroundSize", {
            defaultValue: "0 0",
            formatter: function(e) {
                return ue(-1 === (e += "").indexOf(" ") ? e + " " + e : e)
            }
        }),
        Pe("perspective", {
            defaultValue: "0px",
            prefix: !0
        }),
        Pe("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }),
        Pe("transformStyle", {
            prefix: !0
        }),
        Pe("backfaceVisibility", {
            prefix: !0
        }),
        Pe("userSelect", {
            prefix: !0
        }),
        Pe("margin", {
            parser: _e("marginTop,marginRight,marginBottom,marginLeft")
        }),
        Pe("padding", {
            parser: _e("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }),
        Pe("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(e, t, i, r, n, a) {
                var s, o, l;
                return t = C < 9 ? (o = e.currentStyle,
                l = C < 8 ? " " : ",",
                s = "rect(" + o.clipTop + l + o.clipRight + l + o.clipBottom + l + o.clipLeft + ")",
                this.format(t).split(",").join(l)) : (s = this.format(te(e, this.p, P, !1, this.dflt)),
                this.format(t)),
                this.parseComplex(e.style, s, t, n, a)
            }
        }),
        Pe("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }),
        Pe("autoRound,strictUnits", {
            parser: function(e, t, i, r, n) {
                return n
            }
        }),
        Pe("border", {
            defaultValue: "0px solid #000",
            parser: function(e, t, i, r, n, a) {
                var s = te(e, "borderTopWidth", P, !1, "0px")
                  , o = this.format(t).split(" ")
                  , l = o[0].replace(z, "");
                return "px" !== l && (s = parseFloat(s) / ie(e, "borderTopWidth", 1, l) + l),
                this.parseComplex(e.style, this.format(s + " " + te(e, "borderTopStyle", P, !1, "solid") + " " + te(e, "borderTopColor", P, !1, "#000")), o.join(" "), n, a)
            },
            color: !0,
            formatter: function(e) {
                var t = e.split(" ");
                return t[0] + " " + (t[1] || "solid") + " " + (e.match(ve) || ["#000"])[0]
            }
        }),
        Pe("borderWidth", {
            parser: _e("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }),
        Pe("float,cssFloat,styleFloat", {
            parser: function(e, t, i, r, n, a) {
                var s = e.style
                  , o = "cssFloat"in s ? "cssFloat" : "styleFloat";
                return new we(s,o,0,0,n,-1,i,!1,0,s[o],t)
            }
        });
        var Ze = function(e) {
            var t, i = this.t, r = i.filter || te(this.data, "filter") || "", n = this.s + this.c * e | 0;
            100 === n && (t = -1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (i.removeAttribute("filter"),
            !te(this.data, "filter")) : (i.filter = r.replace(s, ""),
            !0)),
            t || (this.xn1 && (i.filter = r = r || "alpha(opacity=" + n + ")"),
            -1 === r.indexOf("pacity") ? 0 === n && this.xn1 || (i.filter = r + " alpha(opacity=" + n + ")") : i.filter = r.replace(D, "opacity=" + n))
        };
        Pe("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(e, t, i, r, n, a) {
                var s = parseFloat(te(e, "opacity", P, !1, "1"))
                  , o = e.style
                  , l = "autoAlpha" === i;
                return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + s),
                l && 1 === s && "hidden" === te(e, "visibility", P) && 0 !== t && (s = 0),
                $ ? n = new we(o,"opacity",s,t - s,n) : ((n = new we(o,"opacity",100 * s,100 * (t - s),n)).xn1 = l ? 1 : 0,
                o.zoom = 1,
                n.type = 2,
                n.b = "alpha(opacity=" + n.s + ")",
                n.e = "alpha(opacity=" + (n.s + n.c) + ")",
                n.data = e,
                n.plugin = a,
                n.setRatio = Ze),
                l && ((n = new we(o,"visibility",0,0,n,-1,null,!1,0,0 !== s ? "inherit" : "hidden",0 === t ? "hidden" : "inherit")).xs0 = "inherit",
                r._overwriteProps.push(n.n),
                r._overwriteProps.push(i)),
                n
            }
        });
        var Ke = function(e, t) {
            t && (e.removeProperty ? (("ms" === t.substr(0, 2) || "webkit" === t.substr(0, 6)) && (t = "-" + t),
            e.removeProperty(t.replace(o, "-$1").toLowerCase())) : e.removeAttribute(t))
        }
          , Je = function(e) {
            if (this.t._gsClassPT = this,
            1 === e || 0 === e) {
                this.t.setAttribute("class", 0 === e ? this.b : this.e);
                for (var t = this.data, i = this.t.style; t; )
                    t.v ? i[t.p] = t.v : Ke(i, t.p),
                    t = t._next;
                1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else
                this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        Pe("className", {
            parser: function(e, t, i, r, n, a, s) {
                var o, l, u, c, p, d = e.getAttribute("class") || "", h = e.style.cssText;
                if ((n = r._classNamePT = new we(e,i,0,0,n,2)).setRatio = Je,
                n.pr = -11,
                f = !0,
                n.b = d,
                l = ne(e, P),
                u = e._gsClassPT) {
                    for (c = {},
                    p = u.data; p; )
                        c[p.p] = 1,
                        p = p._next;
                    u.setRatio(1)
                }
                return (e._gsClassPT = n).e = "=" !== t.charAt(1) ? t : d.replace(new RegExp("(?:\\s|^)" + t.substr(2) + "(?![\\w-])"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""),
                e.setAttribute("class", n.e),
                o = ae(e, l, ne(e), s, c),
                e.setAttribute("class", d),
                n.data = o.firstMPT,
                e.style.cssText = h,
                n.xfirst = r.parse(e, o.difs, n, a)
            }
        });
        var et = function(e) {
            if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var t, i, r, n, a, s = this.t.style, o = g.transform.parse;
                if ("all" === this.e)
                    n = !(s.cssText = "");
                else
                    for (r = (t = this.e.split(" ").join("").split(",")).length; -1 < --r; )
                        i = t[r],
                        g[i] && (g[i].parse === o ? n = !0 : i = "transformOrigin" === i ? Le : g[i].p),
                        Ke(s, i);
                n && (Ke(s, Re),
                (a = this.t._gsTransform) && (a.svg && (this.t.removeAttribute("data-svg-origin"),
                this.t.removeAttribute("transform")),
                delete this.t._gsTransform))
            }
        };
        for (Pe("clearProps", {
            parser: function(e, t, i, r, n) {
                return (n = new we(e,i,0,0,n,2)).setRatio = et,
                n.e = t,
                n.pr = -10,
                n.data = r._tween,
                f = !0,
                n
            }
        }),
        e = "bezier,throwProps,physicsProps,physics2D".split(","),
        Se = e.length; Se--; )
            ke(e[Se]);
        (e = B.prototype)._firstPT = e._lastParsedTransform = e._transform = null,
        e._onInitTween = function(e, t, i, r) {
            if (!e.nodeType)
                return !1;
            this._target = M = e,
            this._tween = i,
            this._vars = t,
            E = r,
            k = t.autoRound,
            f = !1,
            S = t.suffixMap || B.suffixMap,
            P = ee(e, ""),
            m = this._overwriteProps;
            var n, a, s, o, l, u, c, p, d, h = e.style;
            if (v && "" === h.zIndex && (("auto" === (n = te(e, "zIndex", P)) || "" === n) && this._addLazySet(h, "zIndex", 0)),
            "string" == typeof t && (o = h.cssText,
            n = ne(e, P),
            h.cssText = o + ";" + t,
            n = ae(e, n, ne(e)).difs,
            !$ && w.test(t) && (n.opacity = parseFloat(RegExp.$1)),
            t = n,
            h.cssText = o),
            t.className ? this._firstPT = a = g.className.parse(e, t.className, "className", this, null, null, t) : this._firstPT = a = this.parse(e, t, null),
            this._transformType) {
                for (d = 3 === this._transformType,
                Re ? y && (v = !0,
                "" === h.zIndex && (("auto" === (c = te(e, "zIndex", P)) || "" === c) && this._addLazySet(h, "zIndex", 0)),
                _ && this._addLazySet(h, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (d ? "visible" : "hidden"))) : h.zoom = 1,
                s = a; s && s._next; )
                    s = s._next;
                p = new we(e,"transform",0,0,null,2),
                this._linkCSSP(p, null, s),
                p.setRatio = Re ? Qe : Ue,
                p.data = this._transform || $e(e, P, !0),
                p.tween = i,
                p.pr = -1,
                m.pop()
            }
            if (f) {
                for (; a; ) {
                    for (u = a._next,
                    s = o; s && s.pr > a.pr; )
                        s = s._next;
                    (a._prev = s ? s._prev : l) ? a._prev._next = a : o = a,
                    (a._next = s) ? s._prev = a : l = a,
                    a = u
                }
                this._firstPT = o
            }
            return !0
        }
        ,
        e.parse = function(e, t, i, r) {
            var n, a, s, o, l, u, c, p, d, h, f = e.style;
            for (n in t) {
                if ("function" == typeof (u = t[n]) && (u = u(E, M)),
                a = g[n])
                    i = a.parse(e, u, n, this, i, r, t);
                else {
                    if ("--" === n.substr(0, 2)) {
                        this._tween._propLookup[n] = this._addTween.call(this._tween, e.style, "setProperty", ee(e).getPropertyValue(n) + "", u + "", n, !1, n);
                        continue
                    }
                    l = te(e, n, P) + "",
                    d = "string" == typeof u,
                    "color" === n || "fill" === n || "stroke" === n || -1 !== n.indexOf("Color") || d && b.test(u) ? (d || (u = (3 < (u = me(u)).length ? "rgba(" : "rgb(") + u.join(",") + ")"),
                    i = Te(f, n, l, u, !0, "transparent", i, 0, r)) : d && L.test(u) ? i = Te(f, n, l, u, !0, null, i, 0, r) : (c = (s = parseFloat(l)) || 0 === s ? l.substr((s + "").length) : "",
                    ("" === l || "auto" === l) && (c = "width" === n || "height" === n ? (s = le(e, n, P),
                    "px") : "left" === n || "top" === n ? (s = re(e, n, P),
                    "px") : (s = "opacity" !== n ? 0 : 1,
                    "")),
                    "" === (p = (h = d && "=" === u.charAt(1)) ? (o = parseInt(u.charAt(0) + "1", 10),
                    u = u.substr(2),
                    o *= parseFloat(u),
                    u.replace(z, "")) : (o = parseFloat(u),
                    d ? u.replace(z, "") : "")) && (p = n in S ? S[n] : c),
                    u = o || 0 === o ? (h ? o + s : o) + p : t[n],
                    c !== p && ("" !== p || "lineHeight" === n) && (o || 0 === o) && s && (s = ie(e, n, s, c),
                    "%" === p ? (s /= ie(e, n, 100, "%") / 100,
                    !0 !== t.strictUnits && (l = s + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? s /= ie(e, n, 1, p) : "px" !== p && (o = ie(e, n, o, p),
                    p = "px"),
                    h && (o || 0 === o) && (u = o + s + p)),
                    h && (o += s),
                    !s && 0 !== s || !o && 0 !== o ? void 0 !== f[n] && (u || u + "" != "NaN" && null != u) ? (i = new we(f,n,o || s || 0,0,i,-1,n,!1,0,l,u)).xs0 = "none" !== u || "display" !== n && -1 === n.indexOf("Style") ? u : l : Q("invalid " + n + " tween value: " + t[n]) : (i = new we(f,n,s,o - s,i,0,n,!1 !== k && ("px" === p || "zIndex" === n),0,l,u)).xs0 = p)
                }
                r && i && !i.plugin && (i.plugin = r)
            }
            return i
        }
        ,
        e.setRatio = function(e) {
            var t, i, r, n = this._firstPT;
            if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                    for (; n; ) {
                        if (t = n.c * e + n.s,
                        n.r ? t = Math.round(t) : t < 1e-6 && -1e-6 < t && (t = 0),
                        n.type)
                            if (1 === n.type)
                                if (2 === (r = n.l))
                                    n.t[n.p] = n.xs0 + t + n.xs1 + n.xn1 + n.xs2;
                                else if (3 === r)
                                    n.t[n.p] = n.xs0 + t + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
                                else if (4 === r)
                                    n.t[n.p] = n.xs0 + t + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4;
                                else if (5 === r)
                                    n.t[n.p] = n.xs0 + t + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4 + n.xn4 + n.xs5;
                                else {
                                    for (i = n.xs0 + t + n.xs1,
                                    r = 1; r < n.l; r++)
                                        i += n["xn" + r] + n["xs" + (r + 1)];
                                    n.t[n.p] = i
                                }
                            else
                                -1 === n.type ? n.t[n.p] = n.xs0 : n.setRatio && n.setRatio(e);
                        else
                            n.t[n.p] = t + n.xs0;
                        n = n._next
                    }
                else
                    for (; n; )
                        2 !== n.type ? n.t[n.p] = n.b : n.setRatio(e),
                        n = n._next;
            else
                for (; n; ) {
                    if (2 !== n.type)
                        if (n.r && -1 !== n.type)
                            if (t = Math.round(n.s + n.c),
                            n.type) {
                                if (1 === n.type) {
                                    for (r = n.l,
                                    i = n.xs0 + t + n.xs1,
                                    r = 1; r < n.l; r++)
                                        i += n["xn" + r] + n["xs" + (r + 1)];
                                    n.t[n.p] = i
                                }
                            } else
                                n.t[n.p] = t + n.xs0;
                        else
                            n.t[n.p] = n.e;
                    else
                        n.setRatio(e);
                    n = n._next
                }
        }
        ,
        e._enableTransforms = function(e) {
            this._transform = this._transform || $e(this._target, P, !0),
            this._transformType = this._transform.svg && Me || !e && 3 !== this._transformType ? 2 : 3
        }
        ;
        var tt = function(e) {
            this.t[this.p] = this.e,
            this.data._linkCSSP(this, this._next, null, !0)
        };
        e._addLazySet = function(e, t, i) {
            var r = this._firstPT = new we(e,t,0,0,this._firstPT,2);
            r.e = i,
            r.setRatio = tt,
            r.data = this
        }
        ,
        e._linkCSSP = function(e, t, i, r) {
            return e && (t && (t._prev = e),
            e._next && (e._next._prev = e._prev),
            e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next,
            r = !0),
            i ? i._next = e : r || null !== this._firstPT || (this._firstPT = e),
            e._next = t,
            e._prev = i),
            e
        }
        ,
        e._mod = function(e) {
            for (var t = this._firstPT; t; )
                "function" == typeof e[t.p] && e[t.p] === Math.round && (t.r = 1),
                t = t._next
        }
        ,
        e._kill = function(e) {
            var t, i, r, n = e;
            if (e.autoAlpha || e.alpha) {
                for (i in n = {},
                e)
                    n[i] = e[i];
                n.opacity = 1,
                n.autoAlpha && (n.visibility = 1)
            }
            for (e.className && (t = this._classNamePT) && ((r = t.xfirst) && r._prev ? this._linkCSSP(r._prev, t._next, r._prev._prev) : r === this._firstPT && (this._firstPT = t._next),
            t._next && this._linkCSSP(t._next, t._next._next, r._prev),
            this._classNamePT = null),
            t = this._firstPT; t; )
                t.plugin && t.plugin !== i && t.plugin._kill && (t.plugin._kill(e),
                i = t.plugin),
                t = t._next;
            return a.prototype._kill.call(this, n)
        }
        ;
        var it = function(e, t, i) {
            var r, n, a, s;
            if (e.slice)
                for (n = e.length; -1 < --n; )
                    it(e[n], t, i);
            else
                for (n = (r = e.childNodes).length; -1 < --n; )
                    s = (a = r[n]).type,
                    a.style && (t.push(ne(a)),
                    i && i.push(a)),
                    1 !== s && 9 !== s && 11 !== s || !a.childNodes.length || it(a, t, i)
        };
        return B.cascadeTo = function(e, t, i) {
            var r, n, a, s, o = j.to(e, t, i), l = [o], u = [], c = [], p = [], d = j._internals.reservedProps;
            for (e = o._targets || o.target,
            it(e, u, p),
            o.render(t, !0, !0),
            it(e, c),
            o.render(0, !0, !0),
            o._enabled(!0),
            r = p.length; -1 < --r; )
                if ((n = ae(p[r], u[r], c[r])).firstMPT) {
                    for (a in n = n.difs,
                    i)
                        d[a] && (n[a] = i[a]);
                    for (a in s = {},
                    n)
                        s[a] = u[r][a];
                    l.push(j.fromTo(p[r], t, s, n))
                }
            return l
        }
        ,
        a.activate([B]),
        B
    }, !0),
    e = _gsScope._gsDefine.plugin({
        propName: "roundProps",
        version: "1.6.0",
        priority: -1,
        API: 2,
        init: function(e, t, i) {
            return this._tween = i,
            !0
        }
    }),
    l = function(e) {
        for (; e; )
            e.f || e.blob || (e.m = Math.round),
            e = e._next
    }
    ,
    (t = e.prototype)._onInitAllProps = function() {
        for (var e, t, i, r = this._tween, n = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), a = n.length, s = {}, o = r._propLookup.roundProps; -1 < --a; )
            s[n[a]] = Math.round;
        for (a = n.length; -1 < --a; )
            for (e = n[a],
            t = r._firstPT; t; )
                i = t._next,
                t.pg ? t.t._mod(s) : t.n === e && (2 === t.f && t.t ? l(t.t._firstPT) : (this._add(t.t, e, t.s, t.c),
                i && (i._prev = t._prev),
                t._prev ? t._prev._next = i : r._firstPT === t && (r._firstPT = i),
                t._next = t._prev = null,
                r._propLookup[e] = o)),
                t = i;
        return !1
    }
    ,
    t._add = function(e, t, i, r) {
        this._addTween(e, t, i, i + r, t, Math.round),
        this._overwriteProps.push(t)
    }
    ,
    _gsScope._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.6.1",
        init: function(e, t, i, r) {
            var n, a;
            if ("function" != typeof e.setAttribute)
                return !1;
            for (n in t)
                "function" == typeof (a = t[n]) && (a = a(r, e)),
                this._addTween(e, "setAttribute", e.getAttribute(n) + "", a + "", n, !1, n),
                this._overwriteProps.push(n);
            return !0
        }
    }),
    _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.3.1",
        API: 2,
        init: function(e, t, i, r) {
            "object" != typeof t && (t = {
                rotation: t
            }),
            this.finals = {};
            var n, a, s, o, l, u, c = !0 === t.useRadians ? 2 * Math.PI : 360;
            for (n in t)
                "useRadians" !== n && ("function" == typeof (o = t[n]) && (o = o(r, e)),
                a = (u = (o + "").split("_"))[0],
                s = parseFloat("function" != typeof e[n] ? e[n] : e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]()),
                l = (o = this.finals[n] = "string" == typeof a && "=" === a.charAt(1) ? s + parseInt(a.charAt(0) + "1", 10) * Number(a.substr(2)) : Number(a) || 0) - s,
                u.length && (-1 !== (a = u.join("_")).indexOf("short") && ((l %= c) !== l % (c / 2) && (l = l < 0 ? l + c : l - c)),
                -1 !== a.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * c) % c - (l / c | 0) * c : -1 !== a.indexOf("ccw") && 0 < l && (l = (l - 9999999999 * c) % c - (l / c | 0) * c)),
                (1e-6 < l || l < -1e-6) && (this._addTween(e, n, s, s + l, n),
                this._overwriteProps.push(n)));
            return !0
        },
        set: function(e) {
            var t;
            if (1 !== e)
                this._super.setRatio.call(this, e);
            else
                for (t = this._firstPT; t; )
                    t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p],
                    t = t._next
        }
    })._autoCSS = !0,
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(g) {
        var i, t, e, r = _gsScope.GreenSockGlobals || _gsScope, n = r.com.greensock, a = 2 * Math.PI, s = Math.PI / 2, o = n._class, l = function(e, t) {
            var i = o("easing." + e, function() {}, !0)
              , r = i.prototype = new g;
            return r.constructor = i,
            r.getRatio = t,
            i
        }, u = g.register || function() {}
        , c = function(e, t, i, r, n) {
            var a = o("easing." + e, {
                easeOut: new t,
                easeIn: new i,
                easeInOut: new r
            }, !0);
            return u(a, e),
            a
        }, v = function(e, t, i) {
            this.t = e,
            this.v = t,
            i && (((this.next = i).prev = this).c = i.v - t,
            this.gap = i.t - e)
        }, p = function(e, t) {
            var i = o("easing." + e, function(e) {
                this._p1 = e || 0 === e ? e : 1.70158,
                this._p2 = 1.525 * this._p1
            }, !0)
              , r = i.prototype = new g;
            return r.constructor = i,
            r.getRatio = t,
            r.config = function(e) {
                return new i(e)
            }
            ,
            i
        }, d = c("Back", p("BackOut", function(e) {
            return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
        }), p("BackIn", function(e) {
            return e * e * ((this._p1 + 1) * e - this._p1)
        }), p("BackInOut", function(e) {
            return (e *= 2) < 1 ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
        })), h = o("easing.SlowMo", function(e, t, i) {
            t = t || 0 === t ? t : .7,
            null == e ? e = .7 : 1 < e && (e = 1),
            this._p = 1 !== e ? t : 0,
            this._p1 = (1 - e) / 2,
            this._p2 = e,
            this._p3 = this._p1 + this._p2,
            this._calcEnd = !0 === i
        }, !0), f = h.prototype = new g;
        return f.constructor = h,
        f.getRatio = function(e) {
            var t = e + (.5 - e) * this._p;
            return e < this._p1 ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
        }
        ,
        h.ease = new h(.7,.7),
        f.config = h.config = function(e, t, i) {
            return new h(e,t,i)
        }
        ,
        (f = (i = o("easing.SteppedEase", function(e, t) {
            e = e || 1,
            this._p1 = 1 / e,
            this._p2 = e + (t ? 0 : 1),
            this._p3 = t ? 1 : 0
        }, !0)).prototype = new g).constructor = i,
        f.getRatio = function(e) {
            return e < 0 ? e = 0 : 1 <= e && (e = .999999999),
            ((this._p2 * e | 0) + this._p3) * this._p1
        }
        ,
        f.config = i.config = function(e, t) {
            return new i(e,t)
        }
        ,
        (f = (t = o("easing.RoughEase", function(e) {
            for (var t, i, r, n, a, s, o = (e = e || {}).taper || "none", l = [], u = 0, c = 0 | (e.points || 20), p = c, d = !1 !== e.randomize, h = !0 === e.clamp, f = e.template instanceof g ? e.template : null, m = "number" == typeof e.strength ? .4 * e.strength : .4; -1 < --p; )
                t = d ? Math.random() : 1 / c * p,
                i = f ? f.getRatio(t) : t,
                r = "none" === o ? m : "out" === o ? (n = 1 - t) * n * m : "in" === o ? t * t * m : (n = t < .5 ? 2 * t : 2 * (1 - t)) * n * .5 * m,
                d ? i += Math.random() * r - .5 * r : p % 2 ? i += .5 * r : i -= .5 * r,
                h && (1 < i ? i = 1 : i < 0 && (i = 0)),
                l[u++] = {
                    x: t,
                    y: i
                };
            for (l.sort(function(e, t) {
                return e.x - t.x
            }),
            s = new v(1,1,null),
            p = c; -1 < --p; )
                a = l[p],
                s = new v(a.x,a.y,s);
            this._prev = new v(0,0,0 !== s.t ? s : s.next)
        }, !0)).prototype = new g).constructor = t,
        f.getRatio = function(e) {
            var t = this._prev;
            if (e > t.t) {
                for (; t.next && e >= t.t; )
                    t = t.next;
                t = t.prev
            } else
                for (; t.prev && e <= t.t; )
                    t = t.prev;
            return (this._prev = t).v + (e - t.t) / t.gap * t.c
        }
        ,
        f.config = function(e) {
            return new t(e)
        }
        ,
        t.ease = new t,
        c("Bounce", l("BounceOut", function(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }), l("BounceIn", function(e) {
            return (e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : e < 2 / 2.75 ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
        }), l("BounceInOut", function(e) {
            var t = e < .5;
            return e = (e = t ? 1 - 2 * e : 2 * e - 1) < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375,
            t ? .5 * (1 - e) : .5 * e + .5
        })),
        c("Circ", l("CircOut", function(e) {
            return Math.sqrt(1 - (e -= 1) * e)
        }), l("CircIn", function(e) {
            return -(Math.sqrt(1 - e * e) - 1)
        }), l("CircInOut", function(e) {
            return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        })),
        c("Elastic", (e = function(e, t, i) {
            var r = o("easing." + e, function(e, t) {
                this._p1 = 1 <= e ? e : 1,
                this._p2 = (t || i) / (e < 1 ? e : 1),
                this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0),
                this._p2 = a / this._p2
            }, !0)
              , n = r.prototype = new g;
            return n.constructor = r,
            n.getRatio = t,
            n.config = function(e, t) {
                return new r(e,t)
            }
            ,
            r
        }
        )("ElasticOut", function(e) {
            return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
        }, .3), e("ElasticIn", function(e) {
            return -this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2)
        }, .3), e("ElasticInOut", function(e) {
            return (e *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * .5 + 1
        }, .45)),
        c("Expo", l("ExpoOut", function(e) {
            return 1 - Math.pow(2, -10 * e)
        }), l("ExpoIn", function(e) {
            return Math.pow(2, 10 * (e - 1)) - .001
        }), l("ExpoInOut", function(e) {
            return (e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
        })),
        c("Sine", l("SineOut", function(e) {
            return Math.sin(e * s)
        }), l("SineIn", function(e) {
            return 1 - Math.cos(e * s)
        }), l("SineInOut", function(e) {
            return -.5 * (Math.cos(Math.PI * e) - 1)
        })),
        o("easing.EaseLookup", {
            find: function(e) {
                return g.map[e]
            }
        }, !0),
        u(r.SlowMo, "SlowMo", "ease,"),
        u(t, "RoughEase", "ease,"),
        u(i, "SteppedEase", "ease,"),
        d
    }, !0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(d, h) {
    "use strict";
    var t, i, f = {}, r = d.document, m = d.GreenSockGlobals = d.GreenSockGlobals || d;
    if (!m.TweenLite) {
        var e, n, a, g, v, y = function(e) {
            var t, i = e.split("."), r = m;
            for (t = 0; t < i.length; t++)
                r[i[t]] = r = r[i[t]] || {};
            return r
        }, p = y("com.greensock"), _ = 1e-10, l = function(e) {
            var t, i = [], r = e.length;
            for (t = 0; t !== r; i.push(e[t++]))
                ;
            return i
        }, x = function() {}, w = (t = Object.prototype.toString,
        i = t.call([]),
        function(e) {
            return null != e && (e instanceof Array || "object" == typeof e && !!e.push && t.call(e) === i)
        }
        ), b = {}, T = function(o, l, u, c) {
            this.sc = b[o] ? b[o].sc : [],
            (b[o] = this).gsClass = null,
            this.func = u;
            var p = [];
            this.check = function(e) {
                for (var t, i, r, n, a = l.length, s = a; -1 < --a; )
                    (t = b[l[a]] || new T(l[a],[])).gsClass ? (p[a] = t.gsClass,
                    s--) : e && t.sc.push(this);
                if (0 === s && u) {
                    if (r = (i = ("com.greensock." + o).split(".")).pop(),
                    n = y(i.join("."))[r] = this.gsClass = u.apply(u, p),
                    c)
                        if (m[r] = f[r] = n,
                        "undefined" != typeof module && module.exports)
                            if (o === h)
                                for (a in module.exports = f[h] = n,
                                f)
                                    n[a] = f[a];
                            else
                                f[h] && (f[h][r] = n);
                        else
                            "function" == typeof define && define.amd && define((d.GreenSockAMDPath ? d.GreenSockAMDPath + "/" : "") + o.split(".").pop(), [], function() {
                                return n
                            });
                    for (a = 0; a < this.sc.length; a++)
                        this.sc[a].check()
                }
            }
            ,
            this.check(!0)
        }, s = d._gsDefine = function(e, t, i, r) {
            return new T(e,t,i,r)
        }
        , S = p._class = function(e, t, i) {
            return t = t || function() {}
            ,
            s(e, [], function() {
                return t
            }, i),
            t
        }
        ;
        s.globals = m;
        var o = [0, 0, 1, 1]
          , C = S("easing.Ease", function(e, t, i, r) {
            this._func = e,
            this._type = i || 0,
            this._power = r || 0,
            this._params = t ? o.concat(t) : o
        }, !0)
          , P = C.map = {}
          , u = C.register = function(e, t, i, r) {
            for (var n, a, s, o, l = t.split(","), u = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); -1 < --u; )
                for (a = l[u],
                n = r ? S("easing." + a, null, !0) : p.easing[a] || {},
                s = c.length; -1 < --s; )
                    o = c[s],
                    P[a + "." + o] = P[o + a] = n[o] = e.getRatio ? e : e[o] || new e
        }
        ;
        for ((a = C.prototype)._calcEnd = !1,
        a.getRatio = function(e) {
            if (this._func)
                return this._params[0] = e,
                this._func.apply(null, this._params);
            var t = this._type
              , i = this._power
              , r = 1 === t ? 1 - e : 2 === t ? e : e < .5 ? 2 * e : 2 * (1 - e);
            return 1 === i ? r *= r : 2 === i ? r *= r * r : 3 === i ? r *= r * r * r : 4 === i && (r *= r * r * r * r),
            1 === t ? 1 - r : 2 === t ? r : e < .5 ? r / 2 : 1 - r / 2
        }
        ,
        n = (e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; -1 < --n; )
            a = e[n] + ",Power" + n,
            u(new C(null,null,1,n), a, "easeOut", !0),
            u(new C(null,null,2,n), a, "easeIn" + (0 === n ? ",easeNone" : "")),
            u(new C(null,null,3,n), a, "easeInOut");
        P.linear = p.easing.Linear.easeIn,
        P.swing = p.easing.Quad.easeInOut;
        var k = S("events.EventDispatcher", function(e) {
            this._listeners = {},
            this._eventTarget = e || this
        });
        (a = k.prototype).addEventListener = function(e, t, i, r, n) {
            n = n || 0;
            var a, s, o = this._listeners[e], l = 0;
            for (this !== g || v || g.wake(),
            null == o && (this._listeners[e] = o = []),
            s = o.length; -1 < --s; )
                (a = o[s]).c === t && a.s === i ? o.splice(s, 1) : 0 === l && a.pr < n && (l = s + 1);
            o.splice(l, 0, {
                c: t,
                s: i,
                up: r,
                pr: n
            })
        }
        ,
        a.removeEventListener = function(e, t) {
            var i, r = this._listeners[e];
            if (r)
                for (i = r.length; -1 < --i; )
                    if (r[i].c === t)
                        return void r.splice(i, 1)
        }
        ,
        a.dispatchEvent = function(e) {
            var t, i, r, n = this._listeners[e];
            if (n)
                for (1 < (t = n.length) && (n = n.slice(0)),
                i = this._eventTarget; -1 < --t; )
                    (r = n[t]) && (r.up ? r.c.call(r.s || i, {
                        type: e,
                        target: i
                    }) : r.c.call(r.s || i))
        }
        ;
        var M = d.requestAnimationFrame
          , E = d.cancelAnimationFrame
          , A = Date.now || function() {
            return (new Date).getTime()
        }
          , O = A();
        for (n = (e = ["ms", "moz", "webkit", "o"]).length; -1 < --n && !M; )
            M = d[e[n] + "RequestAnimationFrame"],
            E = d[e[n] + "CancelAnimationFrame"] || d[e[n] + "CancelRequestAnimationFrame"];
        S("Ticker", function(e, t) {
            var n, a, s, o, l, u = this, c = A(), i = !(!1 === t || !M) && "auto", p = 500, d = 33, h = function(e) {
                var t, i, r = A() - O;
                p < r && (c += r - d),
                O += r,
                u.time = (O - c) / 1e3,
                t = u.time - l,
                (!n || 0 < t || !0 === e) && (u.frame++,
                l += t + (o <= t ? .004 : o - t),
                i = !0),
                !0 !== e && (s = a(h)),
                i && u.dispatchEvent("tick")
            };
            k.call(u),
            u.time = u.frame = 0,
            u.tick = function() {
                h(!0)
            }
            ,
            u.lagSmoothing = function(e, t) {
                p = e || 1e10,
                d = Math.min(t, p, 0)
            }
            ,
            u.sleep = function() {
                null != s && (i && E ? E(s) : clearTimeout(s),
                a = x,
                s = null,
                u === g && (v = !1))
            }
            ,
            u.wake = function(e) {
                null !== s ? u.sleep() : e ? c += -O + (O = A()) : 10 < u.frame && (O = A() - p + 5),
                a = 0 === n ? x : i && M ? M : function(e) {
                    return setTimeout(e, 1e3 * (l - u.time) + 1 | 0)
                }
                ,
                u === g && (v = !0),
                h(2)
            }
            ,
            u.fps = function(e) {
                return arguments.length ? (o = 1 / ((n = e) || 60),
                l = this.time + o,
                void u.wake()) : n
            }
            ,
            u.useRAF = function(e) {
                return arguments.length ? (u.sleep(),
                i = e,
                void u.fps(n)) : i
            }
            ,
            u.fps(e),
            setTimeout(function() {
                "auto" === i && u.frame < 5 && "hidden" !== r.visibilityState && u.useRAF(!1)
            }, 1500)
        }),
        (a = p.Ticker.prototype = new p.events.EventDispatcher).constructor = p.Ticker;
        var c = S("core.Animation", function(e, t) {
            if (this.vars = t = t || {},
            this._duration = this._totalDuration = e || 0,
            this._delay = Number(t.delay) || 0,
            this._timeScale = 1,
            this._active = !0 === t.immediateRender,
            this.data = t.data,
            this._reversed = !0 === t.reversed,
            Q) {
                v || g.wake();
                var i = this.vars.useFrames ? U : Q;
                i.add(this, i._time),
                this.vars.paused && this.paused(!0)
            }
        });
        g = c.ticker = new p.Ticker,
        (a = c.prototype)._dirty = a._gc = a._initted = a._paused = !1,
        a._totalTime = a._time = 0,
        a._rawPrevTime = -1,
        a._next = a._last = a._onUpdate = a._timeline = a.timeline = null,
        a._paused = !1;
        var z = function() {
            v && 2e3 < A() - O && "hidden" !== r.visibilityState && g.wake();
            var e = setTimeout(z, 2e3);
            e.unref && e.unref()
        };
        z(),
        a.play = function(e, t) {
            return null != e && this.seek(e, t),
            this.reversed(!1).paused(!1)
        }
        ,
        a.pause = function(e, t) {
            return null != e && this.seek(e, t),
            this.paused(!0)
        }
        ,
        a.resume = function(e, t) {
            return null != e && this.seek(e, t),
            this.paused(!1)
        }
        ,
        a.seek = function(e, t) {
            return this.totalTime(Number(e), !1 !== t)
        }
        ,
        a.restart = function(e, t) {
            return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, !1 !== t, !0)
        }
        ,
        a.reverse = function(e, t) {
            return null != e && this.seek(e || this.totalDuration(), t),
            this.reversed(!0).paused(!1)
        }
        ,
        a.render = function(e, t, i) {}
        ,
        a.invalidate = function() {
            return this._time = this._totalTime = 0,
            this._initted = this._gc = !1,
            this._rawPrevTime = -1,
            (this._gc || !this.timeline) && this._enabled(!0),
            this
        }
        ,
        a.isActive = function() {
            var e, t = this._timeline, i = this._startTime;
            return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime(!0)) >= i && e < i + this.totalDuration() / this._timeScale - 1e-7
        }
        ,
        a._enabled = function(e, t) {
            return v || g.wake(),
            this._gc = !e,
            this._active = this.isActive(),
            !0 !== t && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)),
            !1
        }
        ,
        a._kill = function(e, t) {
            return this._enabled(!1, !1)
        }
        ,
        a.kill = function(e, t) {
            return this._kill(e, t),
            this
        }
        ,
        a._uncache = function(e) {
            for (var t = e ? this : this.timeline; t; )
                t._dirty = !0,
                t = t.timeline;
            return this
        }
        ,
        a._swapSelfInParams = function(e) {
            for (var t = e.length, i = e.concat(); -1 < --t; )
                "{self}" === e[t] && (i[t] = this);
            return i
        }
        ,
        a._callback = function(e) {
            var t = this.vars
              , i = t[e]
              , r = t[e + "Params"]
              , n = t[e + "Scope"] || t.callbackScope || this;
            switch (r ? r.length : 0) {
            case 0:
                i.call(n);
                break;
            case 1:
                i.call(n, r[0]);
                break;
            case 2:
                i.call(n, r[0], r[1]);
                break;
            default:
                i.apply(n, r)
            }
        }
        ,
        a.eventCallback = function(e, t, i, r) {
            if ("on" === (e || "").substr(0, 2)) {
                var n = this.vars;
                if (1 === arguments.length)
                    return n[e];
                null == t ? delete n[e] : (n[e] = t,
                n[e + "Params"] = w(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i,
                n[e + "Scope"] = r),
                "onUpdate" === e && (this._onUpdate = t)
            }
            return this
        }
        ,
        a.delay = function(e) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay),
            this._delay = e,
            this) : this._delay
        }
        ,
        a.duration = function(e) {
            return arguments.length ? (this._duration = this._totalDuration = e,
            this._uncache(!0),
            this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0),
            this) : (this._dirty = !1,
            this._duration)
        }
        ,
        a.totalDuration = function(e) {
            return this._dirty = !1,
            arguments.length ? this.duration(e) : this._totalDuration
        }
        ,
        a.time = function(e, t) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
        }
        ,
        a.totalTime = function(e, t, i) {
            if (v || g.wake(),
            !arguments.length)
                return this._totalTime;
            if (this._timeline) {
                if (e < 0 && !i && (e += this.totalDuration()),
                this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var r = this._totalDuration
                      , n = this._timeline;
                    if (r < e && !i && (e = r),
                    this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? r - e : e) / this._timeScale,
                    n._dirty || this._uncache(!1),
                    n._timeline)
                        for (; n._timeline; )
                            n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0),
                            n = n._timeline
                }
                this._gc && this._enabled(!0, !1),
                (this._totalTime !== e || 0 === this._duration) && (L.length && K(),
                this.render(e, t, !1),
                L.length && K())
            }
            return this
        }
        ,
        a.progress = a.totalProgress = function(e, t) {
            var i = this.duration();
            return arguments.length ? this.totalTime(i * e, t) : i ? this._time / i : this.ratio
        }
        ,
        a.startTime = function(e) {
            return arguments.length ? (e !== this._startTime && (this._startTime = e,
            this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)),
            this) : this._startTime
        }
        ,
        a.endTime = function(e) {
            return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
        }
        ,
        a.timeScale = function(e) {
            if (!arguments.length)
                return this._timeScale;
            if (e = e || _,
            this._timeline && this._timeline.smoothChildTiming) {
                var t = this._pauseTime
                  , i = t || 0 === t ? t : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / e
            }
            return this._timeScale = e,
            this._uncache(!1)
        }
        ,
        a.reversed = function(e) {
            return arguments.length ? (e != this._reversed && (this._reversed = e,
            this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
            this) : this._reversed
        }
        ,
        a.paused = function(e) {
            if (!arguments.length)
                return this._paused;
            var t, i, r = this._timeline;
            return e != this._paused && r && (v || e || g.wake(),
            i = (t = r.rawTime()) - this._pauseTime,
            !e && r.smoothChildTiming && (this._startTime += i,
            this._uncache(!1)),
            this._pauseTime = e ? t : null,
            this._paused = e,
            this._active = this.isActive(),
            !e && 0 !== i && this._initted && this.duration() && (t = r.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale,
            this.render(t, t === this._totalTime, !0))),
            this._gc && !e && this._enabled(!0, !1),
            this
        }
        ;
        var D = S("core.SimpleTimeline", function(e) {
            c.call(this, 0, e),
            this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        (a = D.prototype = new c).constructor = D,
        a.kill()._gc = !1,
        a._first = a._last = a._recent = null,
        a._sortChildren = !1,
        a.add = a.insert = function(e, t, i, r) {
            var n, a;
            if (e._startTime = Number(t || 0) + e._delay,
            e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale),
            e.timeline && e.timeline._remove(e, !0),
            e.timeline = e._timeline = this,
            e._gc && e._enabled(!0, !0),
            n = this._last,
            this._sortChildren)
                for (a = e._startTime; n && n._startTime > a; )
                    n = n._prev;
            return n ? (e._next = n._next,
            n._next = e) : (e._next = this._first,
            this._first = e),
            e._next ? e._next._prev = e : this._last = e,
            e._prev = n,
            this._recent = e,
            this._timeline && this._uncache(!0),
            this
        }
        ,
        a._remove = function(e, t) {
            return e.timeline === this && (t || e._enabled(!1, !0),
            e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next),
            e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev),
            e._next = e._prev = e.timeline = null,
            e === this._recent && (this._recent = this._last),
            this._timeline && this._uncache(!0)),
            this
        }
        ,
        a.render = function(e, t, i) {
            var r, n = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = e; n; )
                r = n._next,
                (n._active || e >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)),
                n = r
        }
        ,
        a.rawTime = function() {
            return v || g.wake(),
            this._totalTime
        }
        ;
        var R = S("TweenLite", function(e, t, i) {
            if (c.call(this, t, i),
            this.render = R.prototype.render,
            null == e)
                throw "Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e : R.selector(e) || e;
            var r, n, a, s = e.jquery || e.length && e !== d && e[0] && (e[0] === d || e[0].nodeType && e[0].style && !e.nodeType), o = this.vars.overwrite;
            if (this._overwrite = o = null == o ? $[R.defaultOverwrite] : "number" == typeof o ? o >> 0 : $[o],
            (s || e instanceof Array || e.push && w(e)) && "number" != typeof e[0])
                for (this._targets = a = l(e),
                this._propLookup = [],
                this._siblings = [],
                r = 0; r < a.length; r++)
                    (n = a[r]) ? "string" != typeof n ? n.length && n !== d && n[0] && (n[0] === d || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1),
                    this._targets = a = a.concat(l(n))) : (this._siblings[r] = J(n, this, !1),
                    1 === o && 1 < this._siblings[r].length && te(n, this, null, 1, this._siblings[r])) : "string" == typeof (n = a[r--] = R.selector(n)) && a.splice(r + 1, 1) : a.splice(r--, 1);
            else
                this._propLookup = {},
                this._siblings = J(e, this, !1),
                1 === o && 1 < this._siblings.length && te(e, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === t && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -_,
            this.render(Math.min(0, -this._delay)))
        }, !0)
          , I = function(e) {
            return e && e.length && e !== d && e[0] && (e[0] === d || e[0].nodeType && e[0].style && !e.nodeType)
        };
        (a = R.prototype = new c).constructor = R,
        a.kill()._gc = !1,
        a.ratio = 0,
        a._firstPT = a._targets = a._overwrittenProps = a._startAt = null,
        a._notifyPluginsOfEnabled = a._lazy = !1,
        R.version = "1.20.2",
        R.defaultEase = a._ease = new C(null,null,1,1),
        R.defaultOverwrite = "auto",
        R.ticker = g,
        R.autoSleep = 120,
        R.lagSmoothing = function(e, t) {
            g.lagSmoothing(e, t)
        }
        ,
        R.selector = d.$ || d.jQuery || function(e) {
            var t = d.$ || d.jQuery;
            return t ? (R.selector = t)(e) : void 0 === r ? e : r.querySelectorAll ? r.querySelectorAll(e) : r.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
        }
        ;
        var L = []
          , N = {}
          , H = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
          , F = /[\+-]=-?[\.\d]/
          , j = function(e) {
            for (var t, i = this._firstPT; i; )
                t = i.blob ? 1 === e && this.end ? this.end : e ? this.join("") : this.start : i.c * e + i.s,
                i.m ? t = i.m(t, this._target || i.t) : t < 1e-6 && -1e-6 < t && !i.blob && (t = 0),
                i.f ? i.fp ? i.t[i.p](i.fp, t) : i.t[i.p](t) : i.t[i.p] = t,
                i = i._next
        }
          , B = function(e, t, i, r) {
            var n, a, s, o, l, u, c, p = [], d = 0, h = "", f = 0;
            for (p.start = e,
            p.end = t,
            e = p[0] = e + "",
            t = p[1] = t + "",
            i && (i(p),
            e = p[0],
            t = p[1]),
            p.length = 0,
            n = e.match(H) || [],
            a = t.match(H) || [],
            r && (r._next = null,
            r.blob = 1,
            p._firstPT = p._applyPT = r),
            l = a.length,
            o = 0; o < l; o++)
                c = a[o],
                h += (u = t.substr(d, t.indexOf(c, d) - d)) || !o ? u : ",",
                d += u.length,
                f ? f = (f + 1) % 5 : "rgba(" === u.substr(-5) && (f = 1),
                c === n[o] || n.length <= o ? h += c : (h && (p.push(h),
                h = ""),
                s = parseFloat(n[o]),
                p.push(s),
                p._firstPT = {
                    _next: p._firstPT,
                    t: p,
                    p: p.length - 1,
                    s: s,
                    c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - s) || 0,
                    f: 0,
                    m: f && f < 4 ? Math.round : 0
                }),
                d += c.length;
            return (h += t.substr(d)) && p.push(h),
            p.setRatio = j,
            F.test(t) && (p.end = 0),
            p
        }
          , V = function(e, t, i, r, n, a, s, o, l) {
            "function" == typeof r && (r = r(l || 0, e));
            var u = typeof e[t]
              , c = "function" !== u ? "" : t.indexOf("set") || "function" != typeof e["get" + t.substr(3)] ? t : "get" + t.substr(3)
              , p = "get" !== i ? i : c ? s ? e[c](s) : e[c]() : e[t]
              , d = "string" == typeof r && "=" === r.charAt(1)
              , h = {
                t: e,
                p: t,
                s: p,
                f: "function" === u,
                pg: 0,
                n: n || t,
                m: a ? "function" == typeof a ? a : Math.round : 0,
                pr: 0,
                c: d ? parseInt(r.charAt(0) + "1", 10) * parseFloat(r.substr(2)) : parseFloat(r) - p || 0
            };
            return ("number" != typeof p || "number" != typeof r && !d) && (s || isNaN(p) || !d && isNaN(r) || "boolean" == typeof p || "boolean" == typeof r ? (h.fp = s,
            h = {
                t: B(p, d ? parseFloat(h.s) + h.c : r, o || R.defaultStringFilter, h),
                p: "setRatio",
                s: 0,
                c: 1,
                f: 2,
                pg: 0,
                n: n || t,
                pr: 0,
                m: 0
            }) : (h.s = parseFloat(p),
            d || (h.c = parseFloat(r) - h.s || 0))),
            h.c ? ((h._next = this._firstPT) && (h._next._prev = h),
            this._firstPT = h) : void 0
        }
          , X = R._internals = {
            isArray: w,
            isSelector: I,
            lazyTweens: L,
            blobDif: B
        }
          , q = R._plugins = {}
          , W = X.tweenLookup = {}
          , Y = 0
          , G = X.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1,
            lazy: 1,
            onOverwrite: 1,
            callbackScope: 1,
            stringFilter: 1,
            id: 1,
            yoyoEase: 1
        }
          , $ = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            true: 1,
            false: 0
        }
          , U = c._rootFramesTimeline = new D
          , Q = c._rootTimeline = new D
          , Z = 30
          , K = X.lazyRender = function() {
            var e, t = L.length;
            for (N = {}; -1 < --t; )
                (e = L[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0),
                e._lazy = !1);
            L.length = 0
        }
        ;
        Q._startTime = g.time,
        U._startTime = g.frame,
        Q._active = U._active = !0,
        setTimeout(K, 1),
        c._updateRoot = R.render = function() {
            var e, t, i;
            if (L.length && K(),
            Q.render((g.time - Q._startTime) * Q._timeScale, !1, !1),
            U.render((g.frame - U._startTime) * U._timeScale, !1, !1),
            L.length && K(),
            g.frame >= Z) {
                for (i in Z = g.frame + (parseInt(R.autoSleep, 10) || 120),
                W) {
                    for (e = (t = W[i].tweens).length; -1 < --e; )
                        t[e]._gc && t.splice(e, 1);
                    0 === t.length && delete W[i]
                }
                if ((!(i = Q._first) || i._paused) && R.autoSleep && !U._first && 1 === g._listeners.tick.length) {
                    for (; i && i._paused; )
                        i = i._next;
                    i || g.sleep()
                }
            }
        }
        ,
        g.addEventListener("tick", c._updateRoot);
        var J = function(e, t, i) {
            var r, n, a = e._gsTweenID;
            if (W[a || (e._gsTweenID = a = "t" + Y++)] || (W[a] = {
                target: e,
                tweens: []
            }),
            t && ((r = W[a].tweens)[n = r.length] = t,
            i))
                for (; -1 < --n; )
                    r[n] === t && r.splice(n, 1);
            return W[a].tweens
        }
          , ee = function(e, t, i, r) {
            var n, a, s = e.vars.onOverwrite;
            return s && (n = s(e, t, i, r)),
            (s = R.onOverwrite) && (a = s(e, t, i, r)),
            !1 !== n && !1 !== a
        }
          , te = function(e, t, i, r, n) {
            var a, s, o, l;
            if (1 === r || 4 <= r) {
                for (l = n.length,
                a = 0; a < l; a++)
                    if ((o = n[a]) !== t)
                        o._gc || o._kill(null, e, t) && (s = !0);
                    else if (5 === r)
                        break;
                return s
            }
            var u, c = t._startTime + _, p = [], d = 0, h = 0 === t._duration;
            for (a = n.length; -1 < --a; )
                (o = n[a]) === t || o._gc || o._paused || (o._timeline !== t._timeline ? (u = u || ie(t, 0, h),
                0 === ie(o, u, h) && (p[d++] = o)) : o._startTime <= c && o._startTime + o.totalDuration() / o._timeScale > c && ((h || !o._initted) && c - o._startTime <= 2e-10 || (p[d++] = o)));
            for (a = d; -1 < --a; )
                if (o = p[a],
                2 === r && o._kill(i, e, t) && (s = !0),
                2 !== r || !o._firstPT && o._initted) {
                    if (2 !== r && !ee(o, t))
                        continue;
                    o._enabled(!1, !1) && (s = !0)
                }
            return s
        }
          , ie = function(e, t, i) {
            for (var r = e._timeline, n = r._timeScale, a = e._startTime; r._timeline; ) {
                if (a += r._startTime,
                n *= r._timeScale,
                r._paused)
                    return -100;
                r = r._timeline
            }
            return t < (a /= n) ? a - t : i && a === t || !e._initted && a - t < 2e-10 ? _ : (a += e.totalDuration() / e._timeScale / n) > t + _ ? 0 : a - t - _
        };
        a._init = function() {
            var e, t, i, r, n, a, s = this.vars, o = this._overwrittenProps, l = this._duration, u = !!s.immediateRender, c = s.ease;
            if (s.startAt) {
                for (r in this._startAt && (this._startAt.render(-1, !0),
                this._startAt.kill()),
                n = {},
                s.startAt)
                    n[r] = s.startAt[r];
                if (n.overwrite = !1,
                n.immediateRender = !0,
                n.lazy = u && !1 !== s.lazy,
                n.startAt = n.delay = null,
                n.onUpdate = s.onUpdate,
                n.onUpdateScope = s.onUpdateScope || s.callbackScope || this,
                this._startAt = R.to(this.target, 0, n),
                u)
                    if (0 < this._time)
                        this._startAt = null;
                    else if (0 !== l)
                        return
            } else if (s.runBackwards && 0 !== l)
                if (this._startAt)
                    this._startAt.render(-1, !0),
                    this._startAt.kill(),
                    this._startAt = null;
                else {
                    for (r in 0 !== this._time && (u = !1),
                    i = {},
                    s)
                        G[r] && "autoCSS" !== r || (i[r] = s[r]);
                    if (i.overwrite = 0,
                    i.data = "isFromStart",
                    i.lazy = u && !1 !== s.lazy,
                    i.immediateRender = u,
                    this._startAt = R.to(this.target, 0, i),
                    u) {
                        if (0 === this._time)
                            return
                    } else
                        this._startAt._init(),
                        this._startAt._enabled(!1),
                        this.vars.immediateRender && (this._startAt = null)
                }
            if (this._ease = c = c ? c instanceof C ? c : "function" == typeof c ? new C(c,s.easeParams) : P[c] || R.defaultEase : R.defaultEase,
            s.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, s.easeParams)),
            this._easeType = this._ease._type,
            this._easePower = this._ease._power,
            this._firstPT = null,
            this._targets)
                for (a = this._targets.length,
                e = 0; e < a; e++)
                    this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], o ? o[e] : null, e) && (t = !0);
            else
                t = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
            if (t && R._onPluginEvent("_onInitAllProps", this),
            o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)),
            s.runBackwards)
                for (i = this._firstPT; i; )
                    i.s += i.c,
                    i.c = -i.c,
                    i = i._next;
            this._onUpdate = s.onUpdate,
            this._initted = !0
        }
        ,
        a._initProps = function(e, t, i, r, n) {
            var a, s, o, l, u, c;
            if (null == e)
                return !1;
            for (a in N[e._gsTweenID] && K(),
            this.vars.css || e.style && e !== d && e.nodeType && q.css && !1 !== this.vars.autoCSS && function(e, t) {
                var i, r = {};
                for (i in e)
                    G[i] || i in t && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!q[i] || q[i] && q[i]._autoCSS) || (r[i] = e[i],
                    delete e[i]);
                e.css = r
            }(this.vars, e),
            this.vars)
                if (c = this.vars[a],
                G[a])
                    c && (c instanceof Array || c.push && w(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[a] = c = this._swapSelfInParams(c, this));
                else if (q[a] && (l = new q[a])._onInitTween(e, this.vars[a], this, n)) {
                    for (this._firstPT = u = {
                        _next: this._firstPT,
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 1,
                        n: a,
                        pg: 1,
                        pr: l._priority,
                        m: 0
                    },
                    s = l._overwriteProps.length; -1 < --s; )
                        t[l._overwriteProps[s]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (o = !0),
                    (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0),
                    u._next && (u._next._prev = u)
                } else
                    t[a] = V.call(this, e, a, "get", c, a, 0, null, this.vars.stringFilter, n);
            return r && this._kill(r, e) ? this._initProps(e, t, i, r, n) : 1 < this._overwrite && this._firstPT && 1 < i.length && te(e, this, t, this._overwrite, i) ? (this._kill(t, e),
            this._initProps(e, t, i, r, n)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (N[e._gsTweenID] = !0),
            o)
        }
        ,
        a.render = function(e, t, i) {
            var r, n, a, s, o = this._time, l = this._duration, u = this._rawPrevTime;
            if (l - 1e-7 <= e && 0 <= e)
                this._totalTime = this._time = l,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
                this._reversed || (r = !0,
                n = "onComplete",
                i = i || this._timeline.autoRemoveChildren),
                0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0),
                (u < 0 || e <= 0 && -1e-7 <= e || u === _ && "isPause" !== this.data) && u !== e && (i = !0,
                _ < u && (n = "onReverseComplete")),
                this._rawPrevTime = s = !t || e || u === e ? e : _);
            else if (e < 1e-7)
                this._totalTime = this._time = 0,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                (0 !== o || 0 === l && 0 < u) && (n = "onReverseComplete",
                r = this._reversed),
                e < 0 && (this._active = !1,
                0 === l && (this._initted || !this.vars.lazy || i) && (0 <= u && (u !== _ || "isPause" !== this.data) && (i = !0),
                this._rawPrevTime = s = !t || e || u === e ? e : _)),
                (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
            else if (this._totalTime = this._time = e,
            this._easeType) {
                var c = e / l
                  , p = this._easeType
                  , d = this._easePower;
                (1 === p || 3 === p && .5 <= c) && (c = 1 - c),
                3 === p && (c *= 2),
                1 === d ? c *= c : 2 === d ? c *= c * c : 3 === d ? c *= c * c * c : 4 === d && (c *= c * c * c * c),
                this.ratio = 1 === p ? 1 - c : 2 === p ? c : e / l < .5 ? c / 2 : 1 - c / 2
            } else
                this.ratio = this._ease.getRatio(e / l);
            if (this._time !== o || i) {
                if (!this._initted) {
                    if (this._init(),
                    !this._initted || this._gc)
                        return;
                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))
                        return this._time = this._totalTime = o,
                        this._rawPrevTime = u,
                        L.push(this),
                        void (this._lazy = [e, t]);
                    this._time && !r ? this.ratio = this._ease.getRatio(this._time / l) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (!1 !== this._lazy && (this._lazy = !1),
                this._active || !this._paused && this._time !== o && 0 <= e && (this._active = !0),
                0 === o && (this._startAt && (0 <= e ? this._startAt.render(e, t, i) : n || (n = "_dummyGS")),
                this.vars.onStart && (0 !== this._time || 0 === l) && (t || this._callback("onStart"))),
                a = this._firstPT; a; )
                    a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s,
                    a = a._next;
                this._onUpdate && (e < 0 && this._startAt && -1e-4 !== e && this._startAt.render(e, t, i),
                t || (this._time !== o || r || i) && this._callback("onUpdate")),
                n && (!this._gc || i) && (e < 0 && this._startAt && !this._onUpdate && -1e-4 !== e && this._startAt.render(e, t, i),
                r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !t && this.vars[n] && this._callback(n),
                0 === l && this._rawPrevTime === _ && s !== _ && (this._rawPrevTime = 0))
            }
        }
        ,
        a._kill = function(e, t, i) {
            if ("all" === e && (e = null),
            null == e && (null == t || t === this.target))
                return this._lazy = !1,
                this._enabled(!1, !1);
            t = "string" != typeof t ? t || this._targets || this.target : R.selector(t) || t;
            var r, n, a, s, o, l, u, c, p, d = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
            if ((w(t) || I(t)) && "number" != typeof t[0])
                for (r = t.length; -1 < --r; )
                    this._kill(e, t[r], i) && (l = !0);
            else {
                if (this._targets) {
                    for (r = this._targets.length; -1 < --r; )
                        if (t === this._targets[r]) {
                            o = this._propLookup[r] || {},
                            this._overwrittenProps = this._overwrittenProps || [],
                            n = this._overwrittenProps[r] = e ? this._overwrittenProps[r] || {} : "all";
                            break
                        }
                } else {
                    if (t !== this.target)
                        return !1;
                    o = this._propLookup,
                    n = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                }
                if (o) {
                    if (u = e || o,
                    c = e !== n && "all" !== n && e !== o && ("object" != typeof e || !e._tempKill),
                    i && (R.onOverwrite || this.vars.onOverwrite)) {
                        for (a in u)
                            o[a] && (p || (p = []),
                            p.push(a));
                        if ((p || !e) && !ee(this, i, t, p))
                            return !1
                    }
                    for (a in u)
                        (s = o[a]) && (d && (s.f ? s.t[s.p](s.s) : s.t[s.p] = s.s,
                        l = !0),
                        s.pg && s.t._kill(u) && (l = !0),
                        s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next),
                        s._next && (s._next._prev = s._prev),
                        s._next = s._prev = null),
                        delete o[a]),
                        c && (n[a] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return l
        }
        ,
        a.invalidate = function() {
            return this._notifyPluginsOfEnabled && R._onPluginEvent("_onDisable", this),
            this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,
            this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
            this._propLookup = this._targets ? {} : [],
            c.prototype.invalidate.call(this),
            this.vars.immediateRender && (this._time = -_,
            this.render(Math.min(0, -this._delay))),
            this
        }
        ,
        a._enabled = function(e, t) {
            if (v || g.wake(),
            e && this._gc) {
                var i, r = this._targets;
                if (r)
                    for (i = r.length; -1 < --i; )
                        this._siblings[i] = J(r[i], this, !0);
                else
                    this._siblings = J(this.target, this, !0)
            }
            return c.prototype._enabled.call(this, e, t),
            !(!this._notifyPluginsOfEnabled || !this._firstPT) && R._onPluginEvent(e ? "_onEnable" : "_onDisable", this)
        }
        ,
        R.to = function(e, t, i) {
            return new R(e,t,i)
        }
        ,
        R.from = function(e, t, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new R(e,t,i)
        }
        ,
        R.fromTo = function(e, t, i, r) {
            return r.startAt = i,
            r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender,
            new R(e,t,r)
        }
        ,
        R.delayedCall = function(e, t, i, r, n) {
            return new R(t,0,{
                delay: e,
                onComplete: t,
                onCompleteParams: i,
                callbackScope: r,
                onReverseComplete: t,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: n,
                overwrite: 0
            })
        }
        ,
        R.set = function(e, t) {
            return new R(e,0,t)
        }
        ,
        R.getTweensOf = function(e, t) {
            if (null == e)
                return [];
            var i, r, n, a;
            if (e = "string" != typeof e ? e : R.selector(e) || e,
            (w(e) || I(e)) && "number" != typeof e[0]) {
                for (i = e.length,
                r = []; -1 < --i; )
                    r = r.concat(R.getTweensOf(e[i], t));
                for (i = r.length; -1 < --i; )
                    for (a = r[i],
                    n = i; -1 < --n; )
                        a === r[n] && r.splice(i, 1)
            } else if (e._gsTweenID)
                for (i = (r = J(e).concat()).length; -1 < --i; )
                    (r[i]._gc || t && !r[i].isActive()) && r.splice(i, 1);
            return r || []
        }
        ,
        R.killTweensOf = R.killDelayedCallsTo = function(e, t, i) {
            "object" == typeof t && (i = t,
            t = !1);
            for (var r = R.getTweensOf(e, t), n = r.length; -1 < --n; )
                r[n]._kill(i, e)
        }
        ;
        var re = S("plugins.TweenPlugin", function(e, t) {
            this._overwriteProps = (e || "").split(","),
            this._propName = this._overwriteProps[0],
            this._priority = t || 0,
            this._super = re.prototype
        }, !0);
        if (a = re.prototype,
        re.version = "1.19.0",
        re.API = 2,
        a._firstPT = null,
        a._addTween = V,
        a.setRatio = j,
        a._kill = function(e) {
            var t, i = this._overwriteProps, r = this._firstPT;
            if (null != e[this._propName])
                this._overwriteProps = [];
            else
                for (t = i.length; -1 < --t; )
                    null != e[i[t]] && i.splice(t, 1);
            for (; r; )
                null != e[r.n] && (r._next && (r._next._prev = r._prev),
                r._prev ? (r._prev._next = r._next,
                r._prev = null) : this._firstPT === r && (this._firstPT = r._next)),
                r = r._next;
            return !1
        }
        ,
        a._mod = a._roundProps = function(e) {
            for (var t, i = this._firstPT; i; )
                (t = e[this._propName] || null != i.n && e[i.n.split(this._propName + "_").join("")]) && "function" == typeof t && (2 === i.f ? i.t._applyPT.m = t : i.m = t),
                i = i._next
        }
        ,
        R._onPluginEvent = function(e, t) {
            var i, r, n, a, s, o = t._firstPT;
            if ("_onInitAllProps" === e) {
                for (; o; ) {
                    for (s = o._next,
                    r = n; r && r.pr > o.pr; )
                        r = r._next;
                    (o._prev = r ? r._prev : a) ? o._prev._next = o : n = o,
                    (o._next = r) ? r._prev = o : a = o,
                    o = s
                }
                o = t._firstPT = n
            }
            for (; o; )
                o.pg && "function" == typeof o.t[e] && o.t[e]() && (i = !0),
                o = o._next;
            return i
        }
        ,
        re.activate = function(e) {
            for (var t = e.length; -1 < --t; )
                e[t].API === re.API && (q[(new e[t])._propName] = e[t]);
            return !0
        }
        ,
        s.plugin = function(e) {
            if (!(e && e.propName && e.init && e.API))
                throw "illegal plugin definition.";
            var t, i = e.propName, r = e.priority || 0, n = e.overwriteProps, a = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_mod",
                mod: "_mod",
                initAll: "_onInitAllProps"
            }, s = S("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                re.call(this, i, r),
                this._overwriteProps = n || []
            }, !0 === e.global), o = s.prototype = new re(i);
            for (t in (o.constructor = s).API = e.API,
            a)
                "function" == typeof e[t] && (o[a[t]] = e[t]);
            return s.version = e.version,
            re.activate([s]),
            s
        }
        ,
        e = d._gsQueue) {
            for (n = 0; n < e.length; n++)
                e[n]();
            for (a in b)
                b[a].func || d.console.log("GSAP encountered missing dependency: " + a)
        }
        v = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(d) {
    var t = /\+/g;
    function h(e) {
        if (m.raw)
            return e;
        try {
            return decodeURIComponent(e.replace(t, " "))
        } catch (e) {}
    }
    function f(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")),
        e = h(e);
        try {
            return m.json ? JSON.parse(e) : e
        } catch (e) {}
    }
    var m = d.cookie = function(e, t, i) {
        if (void 0 !== t) {
            if ("number" == typeof (i = d.extend({}, m.defaults, i)).expires) {
                var r = i.expires
                  , n = i.expires = new Date;
                n.setDate(n.getDate() + r)
            }
            return t = m.json ? JSON.stringify(t) : String(t),
            document.cookie = [m.raw ? e : encodeURIComponent(e), "=", m.raw ? t : encodeURIComponent(t), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
        }
        for (var a = e ? void 0 : {}, s = document.cookie ? document.cookie.split("; ") : [], o = 0, l = s.length; o < l; o++) {
            var u = s[o].split("=")
              , c = h(u.shift())
              , p = u.join("=");
            if (e && e === c) {
                a = f(p);
                break
            }
            e || void 0 === (p = f(p)) || (a[c] = p)
        }
        return a
    }
    ;
    m.defaults = {},
    d.removeCookie = function(e, t) {
        return void 0 !== d.cookie(e) && (d.cookie(e, "", d.extend({}, t, {
            expires: -1
        })),
        !0)
    }
}),
function() {
    "use strict";
    var L, e, t, i, r, n, a, s, o, N = function(e, l) {
        if (!(this instanceof N))
            return new N(e,l);
        var t = {
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            autoplayStopOnLast: !1,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            },
            flip: {
                slideShadows: !0,
                limitRotation: !0
            },
            cube: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            },
            fade: {
                crossFade: !1
            },
            parallax: !1,
            zoom: !1,
            zoomMax: 3,
            zoomMin: 1,
            zoomToggle: !0,
            scrollbar: null,
            scrollbarHide: !0,
            scrollbarDraggable: !1,
            scrollbarSnapOnRelease: !1,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelReleaseOnEdges: !1,
            mousewheelInvert: !1,
            mousewheelForceToAxis: !1,
            mousewheelSensitivity: 1,
            mousewheelEventsTarged: "container",
            hashnav: !1,
            hashnavWatchState: !1,
            history: !1,
            replaceState: !1,
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            onlyExternal: !1,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            pagination: null,
            paginationElement: "span",
            paginationClickable: !1,
            paginationHide: !1,
            paginationBulletRender: null,
            paginationProgressRender: null,
            paginationFractionRender: null,
            paginationCustomRender: null,
            paginationType: "bullets",
            resistance: !0,
            resistanceRatio: .85,
            nextButton: null,
            prevButton: null,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            lazyLoading: !1,
            lazyLoadingInPrevNext: !1,
            lazyLoadingInPrevNextAmount: 1,
            lazyLoadingOnTransitionStart: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            control: void 0,
            controlInverse: !1,
            controlBy: "slide",
            normalizeSlideIndex: !0,
            allowSwipeToPrev: !0,
            allowSwipeToNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            buttonDisabledClass: "swiper-button-disabled",
            paginationCurrentClass: "swiper-pagination-current",
            paginationTotalClass: "swiper-pagination-total",
            paginationHiddenClass: "swiper-pagination-hidden",
            paginationProgressbarClass: "swiper-pagination-progressbar",
            paginationClickableClass: "swiper-pagination-clickable",
            paginationModifierClass: "swiper-pagination-",
            lazyLoadingClass: "swiper-lazy",
            lazyStatusLoadingClass: "swiper-lazy-loading",
            lazyStatusLoadedClass: "swiper-lazy-loaded",
            lazyPreloaderClass: "swiper-lazy-preloader",
            notificationClass: "swiper-notification",
            preloaderClass: "preloader",
            zoomContainerClass: "swiper-zoom-container",
            observer: !1,
            observeParents: !1,
            a11y: !1,
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            runCallbacksOnInit: !0
        }
          , i = l && l.virtualTranslate;
        l = l || {};
        var r = {};
        for (var n in l)
            if ("object" != typeof l[n] || null === l[n] || (l[n].nodeType || l[n] === window || l[n] === document || "undefined" != typeof Dom7 && l[n]instanceof Dom7 || "undefined" != typeof jQuery && l[n]instanceof jQuery))
                r[n] = l[n];
            else
                for (var a in r[n] = {},
                l[n])
                    r[n][a] = l[n][a];
        for (var s in t)
            if (void 0 === l[s])
                l[s] = t[s];
            else if ("object" == typeof l[s])
                for (var o in t[s])
                    void 0 === l[s][o] && (l[s][o] = t[s][o]);
        var x = this;
        if (x.params = l,
        x.originalParams = r,
        x.classNames = [],
        void 0 !== L && "undefined" != typeof Dom7 && (L = Dom7),
        (void 0 !== L || (L = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (x.$ = L,
        x.currentBreakpoint = void 0,
        x.getActiveBreakpoint = function() {
            if (!x.params.breakpoints)
                return !1;
            var e, t = !1, i = [];
            for (e in x.params.breakpoints)
                x.params.breakpoints.hasOwnProperty(e) && i.push(e);
            i.sort(function(e, t) {
                return parseInt(e, 10) > parseInt(t, 10)
            });
            for (var r = 0; r < i.length; r++)
                (e = i[r]) >= window.innerWidth && !t && (t = e);
            return t || "max"
        }
        ,
        x.setBreakpoint = function() {
            var e = x.getActiveBreakpoint();
            if (e && x.currentBreakpoint !== e) {
                var t = e in x.params.breakpoints ? x.params.breakpoints[e] : x.originalParams
                  , i = x.params.loop && t.slidesPerView !== x.params.slidesPerView;
                for (var r in t)
                    x.params[r] = t[r];
                x.currentBreakpoint = e,
                i && x.destroyLoop && x.reLoop(!0)
            }
        }
        ,
        x.params.breakpoints && x.setBreakpoint(),
        x.container = L(e),
        0 !== x.container.length)) {
            if (1 < x.container.length) {
                var u = [];
                return x.container.each(function() {
                    u.push(new N(this,l))
                }),
                u
            }
            (x.container[0].swiper = x).container.data("swiper", x),
            x.classNames.push(x.params.containerModifierClass + x.params.direction),
            x.params.freeMode && x.classNames.push(x.params.containerModifierClass + "free-mode"),
            x.support.flexbox || (x.classNames.push(x.params.containerModifierClass + "no-flexbox"),
            x.params.slidesPerColumn = 1),
            x.params.autoHeight && x.classNames.push(x.params.containerModifierClass + "autoheight"),
            (x.params.parallax || x.params.watchSlidesVisibility) && (x.params.watchSlidesProgress = !0),
            x.params.touchReleaseOnEdges && (x.params.resistanceRatio = 0),
            0 <= ["cube", "coverflow", "flip"].indexOf(x.params.effect) && (x.support.transforms3d ? (x.params.watchSlidesProgress = !0,
            x.classNames.push(x.params.containerModifierClass + "3d")) : x.params.effect = "slide"),
            "slide" !== x.params.effect && x.classNames.push(x.params.containerModifierClass + x.params.effect),
            "cube" === x.params.effect && (x.params.resistanceRatio = 0,
            x.params.slidesPerView = 1,
            x.params.slidesPerColumn = 1,
            x.params.slidesPerGroup = 1,
            x.params.centeredSlides = !1,
            x.params.spaceBetween = 0,
            x.params.virtualTranslate = !0),
            "fade" !== x.params.effect && "flip" !== x.params.effect || (x.params.slidesPerView = 1,
            x.params.slidesPerColumn = 1,
            x.params.slidesPerGroup = 1,
            x.params.watchSlidesProgress = !0,
            void (x.params.spaceBetween = 0) === i && (x.params.virtualTranslate = !0)),
            x.params.grabCursor && x.support.touch && (x.params.grabCursor = !1),
            x.wrapper = x.container.children("." + x.params.wrapperClass),
            x.params.pagination && (x.paginationContainer = L(x.params.pagination),
            x.params.uniqueNavElements && "string" == typeof x.params.pagination && 1 < x.paginationContainer.length && 1 === x.container.find(x.params.pagination).length && (x.paginationContainer = x.container.find(x.params.pagination)),
            "bullets" === x.params.paginationType && x.params.paginationClickable ? x.paginationContainer.addClass(x.params.paginationModifierClass + "clickable") : x.params.paginationClickable = !1,
            x.paginationContainer.addClass(x.params.paginationModifierClass + x.params.paginationType)),
            (x.params.nextButton || x.params.prevButton) && (x.params.nextButton && (x.nextButton = L(x.params.nextButton),
            x.params.uniqueNavElements && "string" == typeof x.params.nextButton && 1 < x.nextButton.length && 1 === x.container.find(x.params.nextButton).length && (x.nextButton = x.container.find(x.params.nextButton))),
            x.params.prevButton && (x.prevButton = L(x.params.prevButton),
            x.params.uniqueNavElements && "string" == typeof x.params.prevButton && 1 < x.prevButton.length && 1 === x.container.find(x.params.prevButton).length && (x.prevButton = x.container.find(x.params.prevButton)))),
            x.isHorizontal = function() {
                return "horizontal" === x.params.direction
            }
            ,
            x.rtl = x.isHorizontal() && ("rtl" === x.container[0].dir.toLowerCase() || "rtl" === x.container.css("direction")),
            x.rtl && x.classNames.push(x.params.containerModifierClass + "rtl"),
            x.rtl && (x.wrongRTL = "-webkit-box" === x.wrapper.css("display")),
            1 < x.params.slidesPerColumn && x.classNames.push(x.params.containerModifierClass + "multirow"),
            x.device.android && x.classNames.push(x.params.containerModifierClass + "android"),
            x.container.addClass(x.classNames.join(" ")),
            x.translate = 0,
            x.progress = 0,
            x.velocity = 0,
            x.lockSwipeToNext = function() {
                (x.params.allowSwipeToNext = !1) === x.params.allowSwipeToPrev && x.params.grabCursor && x.unsetGrabCursor()
            }
            ,
            x.lockSwipeToPrev = function() {
                (x.params.allowSwipeToPrev = !1) === x.params.allowSwipeToNext && x.params.grabCursor && x.unsetGrabCursor()
            }
            ,
            x.lockSwipes = function() {
                x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !1,
                x.params.grabCursor && x.unsetGrabCursor()
            }
            ,
            x.unlockSwipeToNext = function() {
                (x.params.allowSwipeToNext = !0) === x.params.allowSwipeToPrev && x.params.grabCursor && x.setGrabCursor()
            }
            ,
            x.unlockSwipeToPrev = function() {
                (x.params.allowSwipeToPrev = !0) === x.params.allowSwipeToNext && x.params.grabCursor && x.setGrabCursor()
            }
            ,
            x.unlockSwipes = function() {
                x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !0,
                x.params.grabCursor && x.setGrabCursor()
            }
            ,
            x.setGrabCursor = function(e) {
                x.container[0].style.cursor = "move",
                x.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                x.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                x.container[0].style.cursor = e ? "grabbing" : "grab"
            }
            ,
            x.unsetGrabCursor = function() {
                x.container[0].style.cursor = ""
            }
            ,
            x.params.grabCursor && x.setGrabCursor(),
            x.imagesToLoad = [],
            x.imagesLoaded = 0,
            x.loadImage = function(e, t, i, r, n, a) {
                var s;
                function o() {
                    a && a()
                }
                e.complete && n ? o() : t ? ((s = new window.Image).onload = o,
                s.onerror = o,
                r && (s.sizes = r),
                i && (s.srcset = i),
                t && (s.src = t)) : o()
            }
            ,
            x.preloadImages = function() {
                function e() {
                    null != x && x && (void 0 !== x.imagesLoaded && x.imagesLoaded++,
                    x.imagesLoaded === x.imagesToLoad.length && (x.params.updateOnImagesReady && x.update(),
                    x.emit("onImagesReady", x)))
                }
                x.imagesToLoad = x.container.find("img");
                for (var t = 0; t < x.imagesToLoad.length; t++)
                    x.loadImage(x.imagesToLoad[t], x.imagesToLoad[t].currentSrc || x.imagesToLoad[t].getAttribute("src"), x.imagesToLoad[t].srcset || x.imagesToLoad[t].getAttribute("srcset"), x.imagesToLoad[t].sizes || x.imagesToLoad[t].getAttribute("sizes"), !0, e)
            }
            ,
            x.autoplayTimeoutId = void 0,
            x.autoplaying = !1,
            x.autoplayPaused = !1,
            x.startAutoplay = function() {
                return void 0 === x.autoplayTimeoutId && (!!x.params.autoplay && (!x.autoplaying && (x.autoplaying = !0,
                x.emit("onAutoplayStart", x),
                void y())))
            }
            ,
            x.stopAutoplay = function(e) {
                x.autoplayTimeoutId && (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId),
                x.autoplaying = !1,
                x.autoplayTimeoutId = void 0,
                x.emit("onAutoplayStop", x))
            }
            ,
            x.pauseAutoplay = function(e) {
                x.autoplayPaused || (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId),
                x.autoplayPaused = !0,
                0 === e ? (x.autoplayPaused = !1,
                y()) : x.wrapper.transitionEnd(function() {
                    x && (x.autoplayPaused = !1,
                    x.autoplaying ? y() : x.stopAutoplay())
                }))
            }
            ,
            x.minTranslate = function() {
                return -x.snapGrid[0]
            }
            ,
            x.maxTranslate = function() {
                return -x.snapGrid[x.snapGrid.length - 1]
            }
            ,
            x.updateAutoHeight = function() {
                var e, t = [], i = 0;
                if ("auto" !== x.params.slidesPerView && 1 < x.params.slidesPerView)
                    for (e = 0; e < Math.ceil(x.params.slidesPerView); e++) {
                        var r = x.activeIndex + e;
                        if (r > x.slides.length)
                            break;
                        t.push(x.slides.eq(r)[0])
                    }
                else
                    t.push(x.slides.eq(x.activeIndex)[0]);
                for (e = 0; e < t.length; e++)
                    if (void 0 !== t[e]) {
                        var n = t[e].offsetHeight;
                        i = i < n ? n : i
                    }
                i && x.wrapper.css("height", i + "px")
            }
            ,
            x.updateContainerSize = function() {
                var e, t;
                e = void 0 !== x.params.width ? x.params.width : x.container[0].clientWidth,
                t = void 0 !== x.params.height ? x.params.height : x.container[0].clientHeight,
                0 === e && x.isHorizontal() || 0 === t && !x.isHorizontal() || (e = e - parseInt(x.container.css("padding-left"), 10) - parseInt(x.container.css("padding-right"), 10),
                t = t - parseInt(x.container.css("padding-top"), 10) - parseInt(x.container.css("padding-bottom"), 10),
                x.width = e,
                x.height = t,
                x.size = x.isHorizontal() ? x.width : x.height)
            }
            ,
            x.updateSlidesSize = function() {
                x.slides = x.wrapper.children("." + x.params.slideClass),
                x.snapGrid = [],
                x.slidesGrid = [],
                x.slidesSizesGrid = [];
                var e, t = x.params.spaceBetween, i = -x.params.slidesOffsetBefore, r = 0, n = 0;
                if (void 0 !== x.size) {
                    var a, s;
                    "string" == typeof t && 0 <= t.indexOf("%") && (t = parseFloat(t.replace("%", "")) / 100 * x.size),
                    x.virtualSize = -t,
                    x.rtl ? x.slides.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : x.slides.css({
                        marginRight: "",
                        marginBottom: ""
                    }),
                    1 < x.params.slidesPerColumn && (a = Math.floor(x.slides.length / x.params.slidesPerColumn) === x.slides.length / x.params.slidesPerColumn ? x.slides.length : Math.ceil(x.slides.length / x.params.slidesPerColumn) * x.params.slidesPerColumn,
                    "auto" !== x.params.slidesPerView && "row" === x.params.slidesPerColumnFill && (a = Math.max(a, x.params.slidesPerView * x.params.slidesPerColumn)));
                    var o, l = x.params.slidesPerColumn, u = a / l, c = u - (x.params.slidesPerColumn * u - x.slides.length);
                    for (e = 0; e < x.slides.length; e++) {
                        s = 0;
                        var p, d, h, f = x.slides.eq(e);
                        if (1 < x.params.slidesPerColumn)
                            "column" === x.params.slidesPerColumnFill ? (h = e - (d = Math.floor(e / l)) * l,
                            (c < d || d === c && h === l - 1) && ++h >= l && (h = 0,
                            d++),
                            p = d + h * a / l,
                            f.css({
                                "-webkit-box-ordinal-group": p,
                                "-moz-box-ordinal-group": p,
                                "-ms-flex-order": p,
                                "-webkit-order": p,
                                order: p
                            })) : d = e - (h = Math.floor(e / u)) * u,
                            f.css("margin-" + (x.isHorizontal() ? "top" : "left"), 0 !== h && x.params.spaceBetween && x.params.spaceBetween + "px").attr("data-swiper-column", d).attr("data-swiper-row", h);
                        "none" !== f.css("display") && ("auto" === x.params.slidesPerView ? (s = x.isHorizontal() ? f.outerWidth(!0) : f.outerHeight(!0),
                        x.params.roundLengths && (s = v(s))) : (s = (x.size - (x.params.slidesPerView - 1) * t) / x.params.slidesPerView,
                        x.params.roundLengths && (s = v(s)),
                        x.isHorizontal() ? x.slides[e].style.width = s + "px" : x.slides[e].style.height = s + "px"),
                        x.slides[e].swiperSlideSize = s,
                        x.slidesSizesGrid.push(s),
                        x.params.centeredSlides ? (i = i + s / 2 + r / 2 + t,
                        0 === r && 0 !== e && (i = i - x.size / 2 - t),
                        0 === e && (i = i - x.size / 2 - t),
                        Math.abs(i) < .001 && (i = 0),
                        n % x.params.slidesPerGroup == 0 && x.snapGrid.push(i),
                        x.slidesGrid.push(i)) : (n % x.params.slidesPerGroup == 0 && x.snapGrid.push(i),
                        x.slidesGrid.push(i),
                        i = i + s + t),
                        x.virtualSize += s + t,
                        r = s,
                        n++)
                    }
                    if (x.virtualSize = Math.max(x.virtualSize, x.size) + x.params.slidesOffsetAfter,
                    x.rtl && x.wrongRTL && ("slide" === x.params.effect || "coverflow" === x.params.effect) && x.wrapper.css({
                        width: x.virtualSize + x.params.spaceBetween + "px"
                    }),
                    x.support.flexbox && !x.params.setWrapperSize || (x.isHorizontal() ? x.wrapper.css({
                        width: x.virtualSize + x.params.spaceBetween + "px"
                    }) : x.wrapper.css({
                        height: x.virtualSize + x.params.spaceBetween + "px"
                    })),
                    1 < x.params.slidesPerColumn && (x.virtualSize = (s + x.params.spaceBetween) * a,
                    x.virtualSize = Math.ceil(x.virtualSize / x.params.slidesPerColumn) - x.params.spaceBetween,
                    x.isHorizontal() ? x.wrapper.css({
                        width: x.virtualSize + x.params.spaceBetween + "px"
                    }) : x.wrapper.css({
                        height: x.virtualSize + x.params.spaceBetween + "px"
                    }),
                    x.params.centeredSlides)) {
                        for (o = [],
                        e = 0; e < x.snapGrid.length; e++)
                            x.snapGrid[e] < x.virtualSize + x.snapGrid[0] && o.push(x.snapGrid[e]);
                        x.snapGrid = o
                    }
                    if (!x.params.centeredSlides) {
                        for (o = [],
                        e = 0; e < x.snapGrid.length; e++)
                            x.snapGrid[e] <= x.virtualSize - x.size && o.push(x.snapGrid[e]);
                        x.snapGrid = o,
                        1 < Math.floor(x.virtualSize - x.size) - Math.floor(x.snapGrid[x.snapGrid.length - 1]) && x.snapGrid.push(x.virtualSize - x.size)
                    }
                    0 === x.snapGrid.length && (x.snapGrid = [0]),
                    0 !== x.params.spaceBetween && (x.isHorizontal() ? x.rtl ? x.slides.css({
                        marginLeft: t + "px"
                    }) : x.slides.css({
                        marginRight: t + "px"
                    }) : x.slides.css({
                        marginBottom: t + "px"
                    })),
                    x.params.watchSlidesProgress && x.updateSlidesOffset()
                }
            }
            ,
            x.updateSlidesOffset = function() {
                for (var e = 0; e < x.slides.length; e++)
                    x.slides[e].swiperSlideOffset = x.isHorizontal() ? x.slides[e].offsetLeft : x.slides[e].offsetTop
            }
            ,
            x.currentSlidesPerView = function() {
                var e, t, i = 1;
                if (x.params.centeredSlides) {
                    var r, n = x.slides[x.activeIndex].swiperSlideSize;
                    for (e = x.activeIndex + 1; e < x.slides.length; e++)
                        x.slides[e] && !r && (i++,
                        (n += x.slides[e].swiperSlideSize) > x.size && (r = !0));
                    for (t = x.activeIndex - 1; 0 <= t; t--)
                        x.slides[t] && !r && (i++,
                        (n += x.slides[t].swiperSlideSize) > x.size && (r = !0))
                } else
                    for (e = x.activeIndex + 1; e < x.slides.length; e++)
                        x.slidesGrid[e] - x.slidesGrid[x.activeIndex] < x.size && i++;
                return i
            }
            ,
            x.updateSlidesProgress = function(e) {
                if (void 0 === e && (e = x.translate || 0),
                0 !== x.slides.length) {
                    void 0 === x.slides[0].swiperSlideOffset && x.updateSlidesOffset();
                    var t = -e;
                    x.rtl && (t = e),
                    x.slides.removeClass(x.params.slideVisibleClass);
                    for (var i = 0; i < x.slides.length; i++) {
                        var r = x.slides[i]
                          , n = (t + (x.params.centeredSlides ? x.minTranslate() : 0) - r.swiperSlideOffset) / (r.swiperSlideSize + x.params.spaceBetween);
                        if (x.params.watchSlidesVisibility) {
                            var a = -(t - r.swiperSlideOffset)
                              , s = a + x.slidesSizesGrid[i];
                            (0 <= a && a < x.size || 0 < s && s <= x.size || a <= 0 && s >= x.size) && x.slides.eq(i).addClass(x.params.slideVisibleClass)
                        }
                        r.progress = x.rtl ? -n : n
                    }
                }
            }
            ,
            x.updateProgress = function(e) {
                void 0 === e && (e = x.translate || 0);
                var t = x.maxTranslate() - x.minTranslate()
                  , i = x.isBeginning
                  , r = x.isEnd;
                0 === t ? (x.progress = 0,
                x.isBeginning = x.isEnd = !0) : (x.progress = (e - x.minTranslate()) / t,
                x.isBeginning = x.progress <= 0,
                x.isEnd = 1 <= x.progress),
                x.isBeginning && !i && x.emit("onReachBeginning", x),
                x.isEnd && !r && x.emit("onReachEnd", x),
                x.params.watchSlidesProgress && x.updateSlidesProgress(e),
                x.emit("onProgress", x, x.progress)
            }
            ,
            x.updateActiveIndex = function() {
                var e, t, i, r = x.rtl ? x.translate : -x.translate;
                for (t = 0; t < x.slidesGrid.length; t++)
                    void 0 !== x.slidesGrid[t + 1] ? r >= x.slidesGrid[t] && r < x.slidesGrid[t + 1] - (x.slidesGrid[t + 1] - x.slidesGrid[t]) / 2 ? e = t : r >= x.slidesGrid[t] && r < x.slidesGrid[t + 1] && (e = t + 1) : r >= x.slidesGrid[t] && (e = t);
                x.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0),
                (i = Math.floor(e / x.params.slidesPerGroup)) >= x.snapGrid.length && (i = x.snapGrid.length - 1),
                e !== x.activeIndex && (x.snapIndex = i,
                x.previousIndex = x.activeIndex,
                x.activeIndex = e,
                x.updateClasses(),
                x.updateRealIndex())
            }
            ,
            x.updateRealIndex = function() {
                x.realIndex = parseInt(x.slides.eq(x.activeIndex).attr("data-swiper-slide-index") || x.activeIndex, 10)
            }
            ,
            x.updateClasses = function() {
                x.slides.removeClass(x.params.slideActiveClass + " " + x.params.slideNextClass + " " + x.params.slidePrevClass + " " + x.params.slideDuplicateActiveClass + " " + x.params.slideDuplicateNextClass + " " + x.params.slideDuplicatePrevClass);
                var e = x.slides.eq(x.activeIndex);
                e.addClass(x.params.slideActiveClass),
                l.loop && (e.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + x.realIndex + '"]').addClass(x.params.slideDuplicateActiveClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + x.realIndex + '"]').addClass(x.params.slideDuplicateActiveClass));
                var t = e.next("." + x.params.slideClass).addClass(x.params.slideNextClass);
                x.params.loop && 0 === t.length && (t = x.slides.eq(0)).addClass(x.params.slideNextClass);
                var i = e.prev("." + x.params.slideClass).addClass(x.params.slidePrevClass);
                if (x.params.loop && 0 === i.length && (i = x.slides.eq(-1)).addClass(x.params.slidePrevClass),
                l.loop && (t.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicateNextClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicateNextClass),
                i.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicatePrevClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicatePrevClass)),
                x.paginationContainer && 0 < x.paginationContainer.length) {
                    var r, n = x.params.loop ? Math.ceil((x.slides.length - 2 * x.loopedSlides) / x.params.slidesPerGroup) : x.snapGrid.length;
                    if (x.params.loop ? ((r = Math.ceil((x.activeIndex - x.loopedSlides) / x.params.slidesPerGroup)) > x.slides.length - 1 - 2 * x.loopedSlides && (r -= x.slides.length - 2 * x.loopedSlides),
                    n - 1 < r && (r -= n),
                    r < 0 && "bullets" !== x.params.paginationType && (r = n + r)) : r = void 0 !== x.snapIndex ? x.snapIndex : x.activeIndex || 0,
                    "bullets" === x.params.paginationType && x.bullets && 0 < x.bullets.length && (x.bullets.removeClass(x.params.bulletActiveClass),
                    1 < x.paginationContainer.length ? x.bullets.each(function() {
                        L(this).index() === r && L(this).addClass(x.params.bulletActiveClass)
                    }) : x.bullets.eq(r).addClass(x.params.bulletActiveClass)),
                    "fraction" === x.params.paginationType && (x.paginationContainer.find("." + x.params.paginationCurrentClass).text(r + 1),
                    x.paginationContainer.find("." + x.params.paginationTotalClass).text(n)),
                    "progress" === x.params.paginationType) {
                        var a = (r + 1) / n
                          , s = a
                          , o = 1;
                        x.isHorizontal() || (o = a,
                        s = 1),
                        x.paginationContainer.find("." + x.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + s + ") scaleY(" + o + ")").transition(x.params.speed)
                    }
                    "custom" === x.params.paginationType && x.params.paginationCustomRender && (x.paginationContainer.html(x.params.paginationCustomRender(x, r + 1, n)),
                    x.emit("onPaginationRendered", x, x.paginationContainer[0]))
                }
                x.params.loop || (x.params.prevButton && x.prevButton && 0 < x.prevButton.length && (x.isBeginning ? (x.prevButton.addClass(x.params.buttonDisabledClass),
                x.params.a11y && x.a11y && x.a11y.disable(x.prevButton)) : (x.prevButton.removeClass(x.params.buttonDisabledClass),
                x.params.a11y && x.a11y && x.a11y.enable(x.prevButton))),
                x.params.nextButton && x.nextButton && 0 < x.nextButton.length && (x.isEnd ? (x.nextButton.addClass(x.params.buttonDisabledClass),
                x.params.a11y && x.a11y && x.a11y.disable(x.nextButton)) : (x.nextButton.removeClass(x.params.buttonDisabledClass),
                x.params.a11y && x.a11y && x.a11y.enable(x.nextButton))))
            }
            ,
            x.updatePagination = function() {
                if (x.params.pagination && x.paginationContainer && 0 < x.paginationContainer.length) {
                    var e = "";
                    if ("bullets" === x.params.paginationType) {
                        for (var t = x.params.loop ? Math.ceil((x.slides.length - 2 * x.loopedSlides) / x.params.slidesPerGroup) : x.snapGrid.length, i = 0; i < t; i++)
                            x.params.paginationBulletRender ? e += x.params.paginationBulletRender(x, i, x.params.bulletClass) : e += "<" + x.params.paginationElement + ' class="' + x.params.bulletClass + '"></' + x.params.paginationElement + ">";
                        x.paginationContainer.html(e),
                        x.bullets = x.paginationContainer.find("." + x.params.bulletClass),
                        x.params.paginationClickable && x.params.a11y && x.a11y && x.a11y.initPagination()
                    }
                    "fraction" === x.params.paginationType && (e = x.params.paginationFractionRender ? x.params.paginationFractionRender(x, x.params.paginationCurrentClass, x.params.paginationTotalClass) : '<span class="' + x.params.paginationCurrentClass + '"></span> / <span class="' + x.params.paginationTotalClass + '"></span>',
                    x.paginationContainer.html(e)),
                    "progress" === x.params.paginationType && (e = x.params.paginationProgressRender ? x.params.paginationProgressRender(x, x.params.paginationProgressbarClass) : '<span class="' + x.params.paginationProgressbarClass + '"></span>',
                    x.paginationContainer.html(e)),
                    "custom" !== x.params.paginationType && x.emit("onPaginationRendered", x, x.paginationContainer[0])
                }
            }
            ,
            x.update = function(e) {
                var t;
                x && (x.updateContainerSize(),
                x.updateSlidesSize(),
                x.updateProgress(),
                x.updatePagination(),
                x.updateClasses(),
                x.params.scrollbar && x.scrollbar && x.scrollbar.set(),
                e ? (x.controller && x.controller.spline && (x.controller.spline = void 0),
                x.params.freeMode ? (i(),
                x.params.autoHeight && x.updateAutoHeight()) : (("auto" === x.params.slidesPerView || 1 < x.params.slidesPerView) && x.isEnd && !x.params.centeredSlides ? x.slideTo(x.slides.length - 1, 0, !1, !0) : x.slideTo(x.activeIndex, 0, !1, !0)) || i()) : x.params.autoHeight && x.updateAutoHeight());
                function i() {
                    x.rtl,
                    x.translate;
                    t = Math.min(Math.max(x.translate, x.maxTranslate()), x.minTranslate()),
                    x.setWrapperTranslate(t),
                    x.updateActiveIndex(),
                    x.updateClasses()
                }
            }
            ,
            x.onResize = function(e) {
                x.params.onBeforeResize && x.params.onBeforeResize(x),
                x.params.breakpoints && x.setBreakpoint();
                var t = x.params.allowSwipeToPrev
                  , i = x.params.allowSwipeToNext;
                x.params.allowSwipeToPrev = x.params.allowSwipeToNext = !0,
                x.updateContainerSize(),
                x.updateSlidesSize(),
                ("auto" === x.params.slidesPerView || x.params.freeMode || e) && x.updatePagination(),
                x.params.scrollbar && x.scrollbar && x.scrollbar.set(),
                x.controller && x.controller.spline && (x.controller.spline = void 0);
                var r = !1;
                if (x.params.freeMode) {
                    var n = Math.min(Math.max(x.translate, x.maxTranslate()), x.minTranslate());
                    x.setWrapperTranslate(n),
                    x.updateActiveIndex(),
                    x.updateClasses(),
                    x.params.autoHeight && x.updateAutoHeight()
                } else
                    x.updateClasses(),
                    r = ("auto" === x.params.slidesPerView || 1 < x.params.slidesPerView) && x.isEnd && !x.params.centeredSlides ? x.slideTo(x.slides.length - 1, 0, !1, !0) : x.slideTo(x.activeIndex, 0, !1, !0);
                x.params.lazyLoading && !r && x.lazy && x.lazy.load(),
                x.params.allowSwipeToPrev = t,
                x.params.allowSwipeToNext = i,
                x.params.onAfterResize && x.params.onAfterResize(x)
            }
            ,
            x.touchEventsDesktop = {
                start: "mousedown",
                move: "mousemove",
                end: "mouseup"
            },
            window.navigator.pointerEnabled ? x.touchEventsDesktop = {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled && (x.touchEventsDesktop = {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            }),
            x.touchEvents = {
                start: x.support.touch || !x.params.simulateTouch ? "touchstart" : x.touchEventsDesktop.start,
                move: x.support.touch || !x.params.simulateTouch ? "touchmove" : x.touchEventsDesktop.move,
                end: x.support.touch || !x.params.simulateTouch ? "touchend" : x.touchEventsDesktop.end
            },
            (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === x.params.touchEventsTarget ? x.container : x.wrapper).addClass("swiper-wp8-" + x.params.direction),
            x.initEvents = function(e) {
                var t = e ? "off" : "on"
                  , i = e ? "removeEventListener" : "addEventListener"
                  , r = "container" === x.params.touchEventsTarget ? x.container[0] : x.wrapper[0]
                  , n = x.support.touch ? r : document
                  , a = !!x.params.nested;
                if (x.browser.ie)
                    r[i](x.touchEvents.start, x.onTouchStart, !1),
                    n[i](x.touchEvents.move, x.onTouchMove, a),
                    n[i](x.touchEvents.end, x.onTouchEnd, !1);
                else {
                    if (x.support.touch) {
                        var s = !("touchstart" !== x.touchEvents.start || !x.support.passiveListener || !x.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        r[i](x.touchEvents.start, x.onTouchStart, s),
                        r[i](x.touchEvents.move, x.onTouchMove, a),
                        r[i](x.touchEvents.end, x.onTouchEnd, s)
                    }
                    (l.simulateTouch && !x.device.ios && !x.device.android || l.simulateTouch && !x.support.touch && x.device.ios) && (r[i]("mousedown", x.onTouchStart, !1),
                    document[i]("mousemove", x.onTouchMove, a),
                    document[i]("mouseup", x.onTouchEnd, !1))
                }
                window[i]("resize", x.onResize),
                x.params.nextButton && x.nextButton && 0 < x.nextButton.length && (x.nextButton[t]("click", x.onClickNext),
                x.params.a11y && x.a11y && x.nextButton[t]("keydown", x.a11y.onEnterKey)),
                x.params.prevButton && x.prevButton && 0 < x.prevButton.length && (x.prevButton[t]("click", x.onClickPrev),
                x.params.a11y && x.a11y && x.prevButton[t]("keydown", x.a11y.onEnterKey)),
                x.params.pagination && x.params.paginationClickable && (x.paginationContainer[t]("click", "." + x.params.bulletClass, x.onClickIndex),
                x.params.a11y && x.a11y && x.paginationContainer[t]("keydown", "." + x.params.bulletClass, x.a11y.onEnterKey)),
                (x.params.preventClicks || x.params.preventClicksPropagation) && r[i]("click", x.preventClicks, !0)
            }
            ,
            x.attachEvents = function() {
                x.initEvents()
            }
            ,
            x.detachEvents = function() {
                x.initEvents(!0)
            }
            ,
            x.allowClick = !0,
            x.preventClicks = function(e) {
                x.allowClick || (x.params.preventClicks && e.preventDefault(),
                x.params.preventClicksPropagation && x.animating && (e.stopPropagation(),
                e.stopImmediatePropagation()))
            }
            ,
            x.onClickNext = function(e) {
                e.preventDefault(),
                x.isEnd && !x.params.loop || x.slideNext()
            }
            ,
            x.onClickPrev = function(e) {
                e.preventDefault(),
                x.isBeginning && !x.params.loop || x.slidePrev()
            }
            ,
            x.onClickIndex = function(e) {
                e.preventDefault();
                var t = L(this).index() * x.params.slidesPerGroup;
                x.params.loop && (t += x.loopedSlides),
                x.slideTo(t)
            }
            ,
            x.updateClickedSlide = function(e) {
                var t = _(e, "." + x.params.slideClass)
                  , i = !1;
                if (t)
                    for (var r = 0; r < x.slides.length; r++)
                        x.slides[r] === t && (i = !0);
                if (!t || !i)
                    return x.clickedSlide = void 0,
                    void (x.clickedIndex = void 0);
                if (x.clickedSlide = t,
                x.clickedIndex = L(t).index(),
                x.params.slideToClickedSlide && void 0 !== x.clickedIndex && x.clickedIndex !== x.activeIndex) {
                    var n, a = x.clickedIndex, s = "auto" === x.params.slidesPerView ? x.currentSlidesPerView() : x.params.slidesPerView;
                    if (x.params.loop) {
                        if (x.animating)
                            return;
                        n = parseInt(L(x.clickedSlide).attr("data-swiper-slide-index"), 10),
                        x.params.centeredSlides ? a < x.loopedSlides - s / 2 || a > x.slides.length - x.loopedSlides + s / 2 ? (x.fixLoop(),
                        a = x.wrapper.children("." + x.params.slideClass + '[data-swiper-slide-index="' + n + '"]:not(.' + x.params.slideDuplicateClass + ")").eq(0).index(),
                        setTimeout(function() {
                            x.slideTo(a)
                        }, 0)) : x.slideTo(a) : a > x.slides.length - s ? (x.fixLoop(),
                        a = x.wrapper.children("." + x.params.slideClass + '[data-swiper-slide-index="' + n + '"]:not(.' + x.params.slideDuplicateClass + ")").eq(0).index(),
                        setTimeout(function() {
                            x.slideTo(a)
                        }, 0)) : x.slideTo(a)
                    } else
                        x.slideTo(a)
                }
            }
            ;
            var w, b, T, S, c, C, P, p, k, M, d, h, f = "input, select, textarea, button, video", E = Date.now(), A = [];
            for (var m in x.animating = !1,
            x.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            x.onTouchStart = function(e) {
                if (e.originalEvent && (e = e.originalEvent),
                (d = "touchstart" === e.type) || !("which"in e) || 3 !== e.which)
                    if (x.params.noSwiping && _(e, "." + x.params.noSwipingClass))
                        x.allowClick = !0;
                    else if (!x.params.swipeHandler || _(e, x.params.swipeHandler)) {
                        var t = x.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX
                          , i = x.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
                        if (!(x.device.ios && x.params.iOSEdgeSwipeDetection && t <= x.params.iOSEdgeSwipeThreshold)) {
                            if (T = !(b = !(w = !0)),
                            h = c = void 0,
                            x.touches.startX = t,
                            x.touches.startY = i,
                            S = Date.now(),
                            x.allowClick = !0,
                            x.updateContainerSize(),
                            x.swipeDirection = void 0,
                            0 < x.params.threshold && (p = !1),
                            "touchstart" !== e.type) {
                                var r = !0;
                                L(e.target).is(f) && (r = !1),
                                document.activeElement && L(document.activeElement).is(f) && document.activeElement.blur(),
                                r && e.preventDefault()
                            }
                            x.emit("onTouchStart", x, e)
                        }
                    }
            }
            ,
            x.onTouchMove = function(e) {
                if (e.originalEvent && (e = e.originalEvent),
                !d || "mousemove" !== e.type) {
                    if (e.preventedByNestedSwiper)
                        return x.touches.startX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                        void (x.touches.startY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY);
                    if (x.params.onlyExternal)
                        return x.allowClick = !1,
                        void (w && (x.touches.startX = x.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                        x.touches.startY = x.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                        S = Date.now()));
                    if (d && x.params.touchReleaseOnEdges && !x.params.loop)
                        if (x.isHorizontal()) {
                            if (x.touches.currentX < x.touches.startX && x.translate <= x.maxTranslate() || x.touches.currentX > x.touches.startX && x.translate >= x.minTranslate())
                                return
                        } else if (x.touches.currentY < x.touches.startY && x.translate <= x.maxTranslate() || x.touches.currentY > x.touches.startY && x.translate >= x.minTranslate())
                            return;
                    if (d && document.activeElement && e.target === document.activeElement && L(e.target).is(f))
                        return b = !0,
                        void (x.allowClick = !1);
                    if (T && x.emit("onTouchMove", x, e),
                    !(e.targetTouches && 1 < e.targetTouches.length)) {
                        var t;
                        if (x.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                        x.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                        void 0 === c)
                            c = !(x.isHorizontal() && x.touches.currentY === x.touches.startY || !x.isHorizontal() && x.touches.currentX === x.touches.startX) && (t = 180 * Math.atan2(Math.abs(x.touches.currentY - x.touches.startY), Math.abs(x.touches.currentX - x.touches.startX)) / Math.PI,
                            x.isHorizontal() ? t > x.params.touchAngle : 90 - t > x.params.touchAngle);
                        if (c && x.emit("onTouchMoveOpposite", x, e),
                        void 0 === h && (x.touches.currentX === x.touches.startX && x.touches.currentY === x.touches.startY || (h = !0)),
                        w)
                            if (c)
                                w = !1;
                            else if (h) {
                                x.allowClick = !1,
                                x.emit("onSliderMove", x, e),
                                e.preventDefault(),
                                x.params.touchMoveStopPropagation && !x.params.nested && e.stopPropagation(),
                                b || (l.loop && x.fixLoop(),
                                P = x.getWrapperTranslate(),
                                x.setWrapperTransition(0),
                                x.animating && x.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),
                                x.params.autoplay && x.autoplaying && (x.params.autoplayDisableOnInteraction ? x.stopAutoplay() : x.pauseAutoplay()),
                                M = !1,
                                !x.params.grabCursor || !0 !== x.params.allowSwipeToNext && !0 !== x.params.allowSwipeToPrev || x.setGrabCursor(!0)),
                                b = !0;
                                var i = x.touches.diff = x.isHorizontal() ? x.touches.currentX - x.touches.startX : x.touches.currentY - x.touches.startY;
                                i *= x.params.touchRatio,
                                x.rtl && (i = -i),
                                x.swipeDirection = 0 < i ? "prev" : "next",
                                C = i + P;
                                var r = !0;
                                if (0 < i && C > x.minTranslate() ? (r = !1,
                                x.params.resistance && (C = x.minTranslate() - 1 + Math.pow(-x.minTranslate() + P + i, x.params.resistanceRatio))) : i < 0 && C < x.maxTranslate() && (r = !1,
                                x.params.resistance && (C = x.maxTranslate() + 1 - Math.pow(x.maxTranslate() - P - i, x.params.resistanceRatio))),
                                r && (e.preventedByNestedSwiper = !0),
                                !x.params.allowSwipeToNext && "next" === x.swipeDirection && C < P && (C = P),
                                !x.params.allowSwipeToPrev && "prev" === x.swipeDirection && P < C && (C = P),
                                0 < x.params.threshold) {
                                    if (!(Math.abs(i) > x.params.threshold || p))
                                        return void (C = P);
                                    if (!p)
                                        return p = !0,
                                        x.touches.startX = x.touches.currentX,
                                        x.touches.startY = x.touches.currentY,
                                        C = P,
                                        void (x.touches.diff = x.isHorizontal() ? x.touches.currentX - x.touches.startX : x.touches.currentY - x.touches.startY)
                                }
                                x.params.followFinger && ((x.params.freeMode || x.params.watchSlidesProgress) && x.updateActiveIndex(),
                                x.params.freeMode && (0 === A.length && A.push({
                                    position: x.touches[x.isHorizontal() ? "startX" : "startY"],
                                    time: S
                                }),
                                A.push({
                                    position: x.touches[x.isHorizontal() ? "currentX" : "currentY"],
                                    time: (new window.Date).getTime()
                                })),
                                x.updateProgress(C),
                                x.setWrapperTranslate(C))
                            }
                    }
                }
            }
            ,
            x.onTouchEnd = function(e) {
                if (e.originalEvent && (e = e.originalEvent),
                T && x.emit("onTouchEnd", x, e),
                T = !1,
                w) {
                    x.params.grabCursor && b && w && (!0 === x.params.allowSwipeToNext || !0 === x.params.allowSwipeToPrev) && x.setGrabCursor(!1);
                    var t, i = Date.now(), r = i - S;
                    if (x.allowClick && (x.updateClickedSlide(e),
                    x.emit("onTap", x, e),
                    r < 300 && 300 < i - E && (k && clearTimeout(k),
                    k = setTimeout(function() {
                        x && (x.params.paginationHide && 0 < x.paginationContainer.length && !L(e.target).hasClass(x.params.bulletClass) && x.paginationContainer.toggleClass(x.params.paginationHiddenClass),
                        x.emit("onClick", x, e))
                    }, 300)),
                    r < 300 && i - E < 300 && (k && clearTimeout(k),
                    x.emit("onDoubleTap", x, e))),
                    E = Date.now(),
                    setTimeout(function() {
                        x && (x.allowClick = !0)
                    }, 0),
                    w && b && x.swipeDirection && 0 !== x.touches.diff && C !== P)
                        if (w = b = !1,
                        t = x.params.followFinger ? x.rtl ? x.translate : -x.translate : -C,
                        x.params.freeMode) {
                            if (t < -x.minTranslate())
                                return void x.slideTo(x.activeIndex);
                            if (t > -x.maxTranslate())
                                return void (x.slides.length < x.snapGrid.length ? x.slideTo(x.snapGrid.length - 1) : x.slideTo(x.slides.length - 1));
                            if (x.params.freeModeMomentum) {
                                if (1 < A.length) {
                                    var n = A.pop()
                                      , a = A.pop()
                                      , s = n.position - a.position
                                      , o = n.time - a.time;
                                    x.velocity = s / o,
                                    x.velocity = x.velocity / 2,
                                    Math.abs(x.velocity) < x.params.freeModeMinimumVelocity && (x.velocity = 0),
                                    (150 < o || 300 < (new window.Date).getTime() - n.time) && (x.velocity = 0)
                                } else
                                    x.velocity = 0;
                                x.velocity = x.velocity * x.params.freeModeMomentumVelocityRatio,
                                A.length = 0;
                                var l = 1e3 * x.params.freeModeMomentumRatio
                                  , u = x.velocity * l
                                  , c = x.translate + u;
                                x.rtl && (c = -c);
                                var p, d = !1, h = 20 * Math.abs(x.velocity) * x.params.freeModeMomentumBounceRatio;
                                if (c < x.maxTranslate())
                                    x.params.freeModeMomentumBounce ? (c + x.maxTranslate() < -h && (c = x.maxTranslate() - h),
                                    p = x.maxTranslate(),
                                    M = d = !0) : c = x.maxTranslate();
                                else if (c > x.minTranslate())
                                    x.params.freeModeMomentumBounce ? (c - x.minTranslate() > h && (c = x.minTranslate() + h),
                                    p = x.minTranslate(),
                                    M = d = !0) : c = x.minTranslate();
                                else if (x.params.freeModeSticky) {
                                    var f, m = 0;
                                    for (m = 0; m < x.snapGrid.length; m += 1)
                                        if (x.snapGrid[m] > -c) {
                                            f = m;
                                            break
                                        }
                                    c = Math.abs(x.snapGrid[f] - c) < Math.abs(x.snapGrid[f - 1] - c) || "next" === x.swipeDirection ? x.snapGrid[f] : x.snapGrid[f - 1],
                                    x.rtl || (c = -c)
                                }
                                if (0 !== x.velocity)
                                    l = x.rtl ? Math.abs((-c - x.translate) / x.velocity) : Math.abs((c - x.translate) / x.velocity);
                                else if (x.params.freeModeSticky)
                                    return void x.slideReset();
                                x.params.freeModeMomentumBounce && d ? (x.updateProgress(p),
                                x.setWrapperTransition(l),
                                x.setWrapperTranslate(c),
                                x.onTransitionStart(),
                                x.animating = !0,
                                x.wrapper.transitionEnd(function() {
                                    x && M && (x.emit("onMomentumBounce", x),
                                    x.setWrapperTransition(x.params.speed),
                                    x.setWrapperTranslate(p),
                                    x.wrapper.transitionEnd(function() {
                                        x && x.onTransitionEnd()
                                    }))
                                })) : x.velocity ? (x.updateProgress(c),
                                x.setWrapperTransition(l),
                                x.setWrapperTranslate(c),
                                x.onTransitionStart(),
                                x.animating || (x.animating = !0,
                                x.wrapper.transitionEnd(function() {
                                    x && x.onTransitionEnd()
                                }))) : x.updateProgress(c),
                                x.updateActiveIndex()
                            }
                            (!x.params.freeModeMomentum || r >= x.params.longSwipesMs) && (x.updateProgress(),
                            x.updateActiveIndex())
                        } else {
                            var g, v = 0, y = x.slidesSizesGrid[0];
                            for (g = 0; g < x.slidesGrid.length; g += x.params.slidesPerGroup)
                                void 0 !== x.slidesGrid[g + x.params.slidesPerGroup] ? t >= x.slidesGrid[g] && t < x.slidesGrid[g + x.params.slidesPerGroup] && (v = g,
                                y = x.slidesGrid[g + x.params.slidesPerGroup] - x.slidesGrid[g]) : t >= x.slidesGrid[g] && (v = g,
                                y = x.slidesGrid[x.slidesGrid.length - 1] - x.slidesGrid[x.slidesGrid.length - 2]);
                            var _ = (t - x.slidesGrid[v]) / y;
                            if (r > x.params.longSwipesMs) {
                                if (!x.params.longSwipes)
                                    return void x.slideTo(x.activeIndex);
                                "next" === x.swipeDirection && (_ >= x.params.longSwipesRatio ? x.slideTo(v + x.params.slidesPerGroup) : x.slideTo(v)),
                                "prev" === x.swipeDirection && (_ > 1 - x.params.longSwipesRatio ? x.slideTo(v + x.params.slidesPerGroup) : x.slideTo(v))
                            } else {
                                if (!x.params.shortSwipes)
                                    return void x.slideTo(x.activeIndex);
                                "next" === x.swipeDirection && x.slideTo(v + x.params.slidesPerGroup),
                                "prev" === x.swipeDirection && x.slideTo(v)
                            }
                        }
                    else
                        w = b = !1
                }
            }
            ,
            x._slideTo = function(e, t) {
                return x.slideTo(e, t, !0, !0)
            }
            ,
            x.slideTo = function(e, t, i, r) {
                void 0 === i && (i = !0),
                void 0 === e && (e = 0),
                e < 0 && (e = 0),
                x.snapIndex = Math.floor(e / x.params.slidesPerGroup),
                x.snapIndex >= x.snapGrid.length && (x.snapIndex = x.snapGrid.length - 1);
                var n = -x.snapGrid[x.snapIndex];
                if (x.params.autoplay && x.autoplaying && (r || !x.params.autoplayDisableOnInteraction ? x.pauseAutoplay(t) : x.stopAutoplay()),
                x.updateProgress(n),
                x.params.normalizeSlideIndex)
                    for (var a = 0; a < x.slidesGrid.length; a++)
                        -Math.floor(100 * n) >= Math.floor(100 * x.slidesGrid[a]) && (e = a);
                return !(!x.params.allowSwipeToNext && n < x.translate && n < x.minTranslate()) && (!(!x.params.allowSwipeToPrev && n > x.translate && n > x.maxTranslate() && (x.activeIndex || 0) !== e) && (void 0 === t && (t = x.params.speed),
                x.previousIndex = x.activeIndex || 0,
                x.activeIndex = e,
                x.updateRealIndex(),
                x.rtl && -n === x.translate || !x.rtl && n === x.translate ? (x.params.autoHeight && x.updateAutoHeight(),
                x.updateClasses(),
                "slide" !== x.params.effect && x.setWrapperTranslate(n),
                !1) : (x.updateClasses(),
                x.onTransitionStart(i),
                0 === t || x.browser.lteIE9 ? (x.setWrapperTranslate(n),
                x.setWrapperTransition(0),
                x.onTransitionEnd(i)) : (x.setWrapperTranslate(n),
                x.setWrapperTransition(t),
                x.animating || (x.animating = !0,
                x.wrapper.transitionEnd(function() {
                    x && x.onTransitionEnd(i)
                }))),
                !0)))
            }
            ,
            x.onTransitionStart = function(e) {
                void 0 === e && (e = !0),
                x.params.autoHeight && x.updateAutoHeight(),
                x.lazy && x.lazy.onTransitionStart(),
                e && (x.emit("onTransitionStart", x),
                x.activeIndex !== x.previousIndex && (x.emit("onSlideChangeStart", x),
                x.activeIndex > x.previousIndex ? x.emit("onSlideNextStart", x) : x.emit("onSlidePrevStart", x)))
            }
            ,
            x.onTransitionEnd = function(e) {
                x.animating = !1,
                x.setWrapperTransition(0),
                void 0 === e && (e = !0),
                x.lazy && x.lazy.onTransitionEnd(),
                e && (x.emit("onTransitionEnd", x),
                x.activeIndex !== x.previousIndex && (x.emit("onSlideChangeEnd", x),
                x.activeIndex > x.previousIndex ? x.emit("onSlideNextEnd", x) : x.emit("onSlidePrevEnd", x))),
                x.params.history && x.history && x.history.setHistory(x.params.history, x.activeIndex),
                x.params.hashnav && x.hashnav && x.hashnav.setHash()
            }
            ,
            x.slideNext = function(e, t, i) {
                if (x.params.loop) {
                    if (x.animating)
                        return !1;
                    x.fixLoop();
                    x.container[0].clientLeft;
                    return x.slideTo(x.activeIndex + x.params.slidesPerGroup, t, e, i)
                }
                return x.slideTo(x.activeIndex + x.params.slidesPerGroup, t, e, i)
            }
            ,
            x._slideNext = function(e) {
                return x.slideNext(!0, e, !0)
            }
            ,
            x.slidePrev = function(e, t, i) {
                if (x.params.loop) {
                    if (x.animating)
                        return !1;
                    x.fixLoop();
                    x.container[0].clientLeft;
                    return x.slideTo(x.activeIndex - 1, t, e, i)
                }
                return x.slideTo(x.activeIndex - 1, t, e, i)
            }
            ,
            x._slidePrev = function(e) {
                return x.slidePrev(!0, e, !0)
            }
            ,
            x.slideReset = function(e, t, i) {
                return x.slideTo(x.activeIndex, t, e)
            }
            ,
            x.disableTouchControl = function() {
                return x.params.onlyExternal = !0
            }
            ,
            x.enableTouchControl = function() {
                return !(x.params.onlyExternal = !1)
            }
            ,
            x.setWrapperTransition = function(e, t) {
                x.wrapper.transition(e),
                "slide" !== x.params.effect && x.effects[x.params.effect] && x.effects[x.params.effect].setTransition(e),
                x.params.parallax && x.parallax && x.parallax.setTransition(e),
                x.params.scrollbar && x.scrollbar && x.scrollbar.setTransition(e),
                x.params.control && x.controller && x.controller.setTransition(e, t),
                x.emit("onSetTransition", x, e)
            }
            ,
            x.setWrapperTranslate = function(e, t, i) {
                var r = 0
                  , n = 0;
                x.isHorizontal() ? r = x.rtl ? -e : e : n = e,
                x.params.roundLengths && (r = v(r),
                n = v(n)),
                x.params.virtualTranslate || (x.support.transforms3d ? x.wrapper.transform("translate3d(" + r + "px, " + n + "px, 0px)") : x.wrapper.transform("translate(" + r + "px, " + n + "px)")),
                x.translate = x.isHorizontal() ? r : n;
                var a = x.maxTranslate() - x.minTranslate();
                (0 === a ? 0 : (e - x.minTranslate()) / a) !== x.progress && x.updateProgress(e),
                t && x.updateActiveIndex(),
                "slide" !== x.params.effect && x.effects[x.params.effect] && x.effects[x.params.effect].setTranslate(x.translate),
                x.params.parallax && x.parallax && x.parallax.setTranslate(x.translate),
                x.params.scrollbar && x.scrollbar && x.scrollbar.setTranslate(x.translate),
                x.params.control && x.controller && x.controller.setTranslate(x.translate, i),
                x.emit("onSetTranslate", x, x.translate)
            }
            ,
            x.getTranslate = function(e, t) {
                var i, r, n, a;
                return void 0 === t && (t = "x"),
                x.params.virtualTranslate ? x.rtl ? -x.translate : x.translate : (n = window.getComputedStyle(e, null),
                window.WebKitCSSMatrix ? (6 < (r = n.transform || n.webkitTransform).split(",").length && (r = r.split(", ").map(function(e) {
                    return e.replace(",", ".")
                }).join(", ")),
                a = new window.WebKitCSSMatrix("none" === r ? "" : r)) : i = (a = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
                "x" === t && (r = window.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
                "y" === t && (r = window.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
                x.rtl && r && (r = -r),
                r || 0)
            }
            ,
            x.getWrapperTranslate = function(e) {
                return void 0 === e && (e = x.isHorizontal() ? "x" : "y"),
                x.getTranslate(x.wrapper[0], e)
            }
            ,
            x.observers = [],
            x.initObservers = function() {
                if (x.params.observeParents)
                    for (var e = x.container.parents(), t = 0; t < e.length; t++)
                        O(e[t]);
                O(x.container[0], {
                    childList: !1
                }),
                O(x.wrapper[0], {
                    attributes: !1
                })
            }
            ,
            x.disconnectObservers = function() {
                for (var e = 0; e < x.observers.length; e++)
                    x.observers[e].disconnect();
                x.observers = []
            }
            ,
            x.createLoop = function() {
                x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass).remove();
                var r = x.wrapper.children("." + x.params.slideClass);
                "auto" !== x.params.slidesPerView || x.params.loopedSlides || (x.params.loopedSlides = r.length),
                x.loopedSlides = parseInt(x.params.loopedSlides || x.params.slidesPerView, 10),
                x.loopedSlides = x.loopedSlides + x.params.loopAdditionalSlides,
                x.loopedSlides > r.length && (x.loopedSlides = r.length);
                var e, n = [], a = [];
                for (r.each(function(e, t) {
                    var i = L(this);
                    e < x.loopedSlides && a.push(t),
                    e < r.length && e >= r.length - x.loopedSlides && n.push(t),
                    i.attr("data-swiper-slide-index", e)
                }),
                e = 0; e < a.length; e++)
                    x.wrapper.append(L(a[e].cloneNode(!0)).addClass(x.params.slideDuplicateClass));
                for (e = n.length - 1; 0 <= e; e--)
                    x.wrapper.prepend(L(n[e].cloneNode(!0)).addClass(x.params.slideDuplicateClass))
            }
            ,
            x.destroyLoop = function() {
                x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass).remove(),
                x.slides.removeAttr("data-swiper-slide-index")
            }
            ,
            x.reLoop = function(e) {
                var t = x.activeIndex - x.loopedSlides;
                x.destroyLoop(),
                x.createLoop(),
                x.updateSlidesSize(),
                e && x.slideTo(t + x.loopedSlides, 0, !1)
            }
            ,
            x.fixLoop = function() {
                var e;
                x.activeIndex < x.loopedSlides ? (e = x.slides.length - 3 * x.loopedSlides + x.activeIndex,
                e += x.loopedSlides,
                x.slideTo(e, 0, !1, !0)) : ("auto" === x.params.slidesPerView && x.activeIndex >= 2 * x.loopedSlides || x.activeIndex > x.slides.length - 2 * x.params.slidesPerView) && (e = -x.slides.length + x.activeIndex + x.loopedSlides,
                e += x.loopedSlides,
                x.slideTo(e, 0, !1, !0))
            }
            ,
            x.appendSlide = function(e) {
                if (x.params.loop && x.destroyLoop(),
                "object" == typeof e && e.length)
                    for (var t = 0; t < e.length; t++)
                        e[t] && x.wrapper.append(e[t]);
                else
                    x.wrapper.append(e);
                x.params.loop && x.createLoop(),
                x.params.observer && x.support.observer || x.update(!0)
            }
            ,
            x.prependSlide = function(e) {
                x.params.loop && x.destroyLoop();
                var t = x.activeIndex + 1;
                if ("object" == typeof e && e.length) {
                    for (var i = 0; i < e.length; i++)
                        e[i] && x.wrapper.prepend(e[i]);
                    t = x.activeIndex + e.length
                } else
                    x.wrapper.prepend(e);
                x.params.loop && x.createLoop(),
                x.params.observer && x.support.observer || x.update(!0),
                x.slideTo(t, 0, !1)
            }
            ,
            x.removeSlide = function(e) {
                x.params.loop && (x.destroyLoop(),
                x.slides = x.wrapper.children("." + x.params.slideClass));
                var t, i = x.activeIndex;
                if ("object" == typeof e && e.length) {
                    for (var r = 0; r < e.length; r++)
                        t = e[r],
                        x.slides[t] && x.slides.eq(t).remove(),
                        t < i && i--;
                    i = Math.max(i, 0)
                } else
                    t = e,
                    x.slides[t] && x.slides.eq(t).remove(),
                    t < i && i--,
                    i = Math.max(i, 0);
                x.params.loop && x.createLoop(),
                x.params.observer && x.support.observer || x.update(!0),
                x.params.loop ? x.slideTo(i + x.loopedSlides, 0, !1) : x.slideTo(i, 0, !1)
            }
            ,
            x.removeAllSlides = function() {
                for (var e = [], t = 0; t < x.slides.length; t++)
                    e.push(t);
                x.removeSlide(e)
            }
            ,
            x.effects = {
                fade: {
                    setTranslate: function() {
                        for (var e = 0; e < x.slides.length; e++) {
                            var t = x.slides.eq(e)
                              , i = -t[0].swiperSlideOffset;
                            x.params.virtualTranslate || (i -= x.translate);
                            var r = 0;
                            x.isHorizontal() || (r = i,
                            i = 0);
                            var n = x.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                            t.css({
                                opacity: n
                            }).transform("translate3d(" + i + "px, " + r + "px, 0px)")
                        }
                    },
                    setTransition: function(e) {
                        if (x.slides.transition(e),
                        x.params.virtualTranslate && 0 !== e) {
                            var i = !1;
                            x.slides.transitionEnd(function() {
                                if (!i && x) {
                                    i = !0,
                                    x.animating = !1;
                                    for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++)
                                        x.wrapper.trigger(e[t])
                                }
                            })
                        }
                    }
                },
                flip: {
                    setTranslate: function() {
                        for (var e = 0; e < x.slides.length; e++) {
                            var t = x.slides.eq(e)
                              , i = t[0].progress;
                            x.params.flip.limitRotation && (i = Math.max(Math.min(t[0].progress, 1), -1));
                            var r = -180 * i
                              , n = 0
                              , a = -t[0].swiperSlideOffset
                              , s = 0;
                            if (x.isHorizontal() ? x.rtl && (r = -r) : (s = a,
                            n = -r,
                            r = a = 0),
                            t[0].style.zIndex = -Math.abs(Math.round(i)) + x.slides.length,
                            x.params.flip.slideShadows) {
                                var o = x.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top")
                                  , l = x.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                                0 === o.length && (o = L('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'),
                                t.append(o)),
                                0 === l.length && (l = L('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                t.append(l)),
                                o.length && (o[0].style.opacity = Math.max(-i, 0)),
                                l.length && (l[0].style.opacity = Math.max(i, 0))
                            }
                            t.transform("translate3d(" + a + "px, " + s + "px, 0px) rotateX(" + n + "deg) rotateY(" + r + "deg)")
                        }
                    },
                    setTransition: function(e) {
                        if (x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                        x.params.virtualTranslate && 0 !== e) {
                            var i = !1;
                            x.slides.eq(x.activeIndex).transitionEnd(function() {
                                if (!i && x && L(this).hasClass(x.params.slideActiveClass)) {
                                    i = !0,
                                    x.animating = !1;
                                    for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++)
                                        x.wrapper.trigger(e[t])
                                }
                            })
                        }
                    }
                },
                cube: {
                    setTranslate: function() {
                        var e, t = 0;
                        x.params.cube.shadow && (x.isHorizontal() ? (0 === (e = x.wrapper.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'),
                        x.wrapper.append(e)),
                        e.css({
                            height: x.width + "px"
                        })) : 0 === (e = x.container.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'),
                        x.container.append(e)));
                        for (var i = 0; i < x.slides.length; i++) {
                            var r = x.slides.eq(i)
                              , n = 90 * i
                              , a = Math.floor(n / 360);
                            x.rtl && (n = -n,
                            a = Math.floor(-n / 360));
                            var s = Math.max(Math.min(r[0].progress, 1), -1)
                              , o = 0
                              , l = 0
                              , u = 0;
                            i % 4 == 0 ? (o = 4 * -a * x.size,
                            u = 0) : (i - 1) % 4 == 0 ? (o = 0,
                            u = 4 * -a * x.size) : (i - 2) % 4 == 0 ? (o = x.size + 4 * a * x.size,
                            u = x.size) : (i - 3) % 4 == 0 && (o = -x.size,
                            u = 3 * x.size + 4 * x.size * a),
                            x.rtl && (o = -o),
                            x.isHorizontal() || (l = o,
                            o = 0);
                            var c = "rotateX(" + (x.isHorizontal() ? 0 : -n) + "deg) rotateY(" + (x.isHorizontal() ? n : 0) + "deg) translate3d(" + o + "px, " + l + "px, " + u + "px)";
                            if (s <= 1 && -1 < s && (t = 90 * i + 90 * s,
                            x.rtl && (t = 90 * -i - 90 * s)),
                            r.transform(c),
                            x.params.cube.slideShadows) {
                                var p = x.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top")
                                  , d = x.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                                0 === p.length && (p = L('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'),
                                r.append(p)),
                                0 === d.length && (d = L('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                r.append(d)),
                                p.length && (p[0].style.opacity = Math.max(-s, 0)),
                                d.length && (d[0].style.opacity = Math.max(s, 0))
                            }
                        }
                        if (x.wrapper.css({
                            "-webkit-transform-origin": "50% 50% -" + x.size / 2 + "px",
                            "-moz-transform-origin": "50% 50% -" + x.size / 2 + "px",
                            "-ms-transform-origin": "50% 50% -" + x.size / 2 + "px",
                            "transform-origin": "50% 50% -" + x.size / 2 + "px"
                        }),
                        x.params.cube.shadow)
                            if (x.isHorizontal())
                                e.transform("translate3d(0px, " + (x.width / 2 + x.params.cube.shadowOffset) + "px, " + -x.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + x.params.cube.shadowScale + ")");
                            else {
                                var h = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90)
                                  , f = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2)
                                  , m = x.params.cube.shadowScale
                                  , g = x.params.cube.shadowScale / f
                                  , v = x.params.cube.shadowOffset;
                                e.transform("scale3d(" + m + ", 1, " + g + ") translate3d(0px, " + (x.height / 2 + v) + "px, " + -x.height / 2 / g + "px) rotateX(-90deg)")
                            }
                        var y = x.isSafari || x.isUiWebView ? -x.size / 2 : 0;
                        x.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (x.isHorizontal() ? 0 : t) + "deg) rotateY(" + (x.isHorizontal() ? -t : 0) + "deg)")
                    },
                    setTransition: function(e) {
                        x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                        x.params.cube.shadow && !x.isHorizontal() && x.container.find(".swiper-cube-shadow").transition(e)
                    }
                },
                coverflow: {
                    setTranslate: function() {
                        for (var e = x.translate, t = x.isHorizontal() ? -e + x.width / 2 : -e + x.height / 2, i = x.isHorizontal() ? x.params.coverflow.rotate : -x.params.coverflow.rotate, r = x.params.coverflow.depth, n = 0, a = x.slides.length; n < a; n++) {
                            var s = x.slides.eq(n)
                              , o = x.slidesSizesGrid[n]
                              , l = (t - s[0].swiperSlideOffset - o / 2) / o * x.params.coverflow.modifier
                              , u = x.isHorizontal() ? i * l : 0
                              , c = x.isHorizontal() ? 0 : i * l
                              , p = -r * Math.abs(l)
                              , d = x.isHorizontal() ? 0 : x.params.coverflow.stretch * l
                              , h = x.isHorizontal() ? x.params.coverflow.stretch * l : 0;
                            Math.abs(h) < .001 && (h = 0),
                            Math.abs(d) < .001 && (d = 0),
                            Math.abs(p) < .001 && (p = 0),
                            Math.abs(u) < .001 && (u = 0),
                            Math.abs(c) < .001 && (c = 0);
                            var f = "translate3d(" + h + "px," + d + "px," + p + "px)  rotateX(" + c + "deg) rotateY(" + u + "deg)";
                            if (s.transform(f),
                            s[0].style.zIndex = 1 - Math.abs(Math.round(l)),
                            x.params.coverflow.slideShadows) {
                                var m = x.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top")
                                  , g = x.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                                0 === m.length && (m = L('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'),
                                s.append(m)),
                                0 === g.length && (g = L('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                s.append(g)),
                                m.length && (m[0].style.opacity = 0 < l ? l : 0),
                                g.length && (g[0].style.opacity = 0 < -l ? -l : 0)
                            }
                        }
                        x.browser.ie && (x.wrapper[0].style.perspectiveOrigin = t + "px 50%")
                    },
                    setTransition: function(e) {
                        x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                    }
                }
            },
            x.lazy = {
                initialImageLoaded: !1,
                loadImageInSlide: function(e, l) {
                    if (void 0 !== e && (void 0 === l && (l = !0),
                    0 !== x.slides.length)) {
                        var u = x.slides.eq(e)
                          , t = u.find("." + x.params.lazyLoadingClass + ":not(." + x.params.lazyStatusLoadedClass + "):not(." + x.params.lazyStatusLoadingClass + ")");
                        !u.hasClass(x.params.lazyLoadingClass) || u.hasClass(x.params.lazyStatusLoadedClass) || u.hasClass(x.params.lazyStatusLoadingClass) || (t = t.add(u[0])),
                        0 !== t.length && t.each(function() {
                            var r = L(this);
                            r.addClass(x.params.lazyStatusLoadingClass);
                            var n = r.attr("data-background")
                              , a = r.attr("data-src")
                              , s = r.attr("data-srcset")
                              , o = r.attr("data-sizes");
                            x.loadImage(r[0], a || n, s, o, !1, function() {
                                if (null != x && x) {
                                    if (n ? (r.css("background-image", 'url("' + n + '")'),
                                    r.removeAttr("data-background")) : (s && (r.attr("srcset", s),
                                    r.removeAttr("data-srcset")),
                                    o && (r.attr("sizes", o),
                                    r.removeAttr("data-sizes")),
                                    a && (r.attr("src", a),
                                    r.removeAttr("data-src"))),
                                    r.addClass(x.params.lazyStatusLoadedClass).removeClass(x.params.lazyStatusLoadingClass),
                                    u.find("." + x.params.lazyPreloaderClass + ", ." + x.params.preloaderClass).remove(),
                                    x.params.loop && l) {
                                        var e = u.attr("data-swiper-slide-index");
                                        if (u.hasClass(x.params.slideDuplicateClass)) {
                                            var t = x.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + x.params.slideDuplicateClass + ")");
                                            x.lazy.loadImageInSlide(t.index(), !1)
                                        } else {
                                            var i = x.wrapper.children("." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                            x.lazy.loadImageInSlide(i.index(), !1)
                                        }
                                    }
                                    x.emit("onLazyImageReady", x, u[0], r[0])
                                }
                            }),
                            x.emit("onLazyImageLoad", x, u[0], r[0])
                        })
                    }
                },
                load: function() {
                    var e, t = x.params.slidesPerView;
                    if ("auto" === t && (t = 0),
                    x.lazy.initialImageLoaded || (x.lazy.initialImageLoaded = !0),
                    x.params.watchSlidesVisibility)
                        x.wrapper.children("." + x.params.slideVisibleClass).each(function() {
                            x.lazy.loadImageInSlide(L(this).index())
                        });
                    else if (1 < t)
                        for (e = x.activeIndex; e < x.activeIndex + t; e++)
                            x.slides[e] && x.lazy.loadImageInSlide(e);
                    else
                        x.lazy.loadImageInSlide(x.activeIndex);
                    if (x.params.lazyLoadingInPrevNext)
                        if (1 < t || x.params.lazyLoadingInPrevNextAmount && 1 < x.params.lazyLoadingInPrevNextAmount) {
                            var i = x.params.lazyLoadingInPrevNextAmount
                              , r = t
                              , n = Math.min(x.activeIndex + r + Math.max(i, r), x.slides.length)
                              , a = Math.max(x.activeIndex - Math.max(r, i), 0);
                            for (e = x.activeIndex + t; e < n; e++)
                                x.slides[e] && x.lazy.loadImageInSlide(e);
                            for (e = a; e < x.activeIndex; e++)
                                x.slides[e] && x.lazy.loadImageInSlide(e)
                        } else {
                            var s = x.wrapper.children("." + x.params.slideNextClass);
                            0 < s.length && x.lazy.loadImageInSlide(s.index());
                            var o = x.wrapper.children("." + x.params.slidePrevClass);
                            0 < o.length && x.lazy.loadImageInSlide(o.index())
                        }
                },
                onTransitionStart: function() {
                    x.params.lazyLoading && (x.params.lazyLoadingOnTransitionStart || !x.params.lazyLoadingOnTransitionStart && !x.lazy.initialImageLoaded) && x.lazy.load()
                },
                onTransitionEnd: function() {
                    x.params.lazyLoading && !x.params.lazyLoadingOnTransitionStart && x.lazy.load()
                }
            },
            x.scrollbar = {
                isTouched: !1,
                setDragPosition: function(e) {
                    var t = x.scrollbar
                      , i = (x.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - t.track.offset()[x.isHorizontal() ? "left" : "top"] - t.dragSize / 2
                      , r = -x.minTranslate() * t.moveDivider
                      , n = -x.maxTranslate() * t.moveDivider;
                    i < r ? i = r : n < i && (i = n),
                    i = -i / t.moveDivider,
                    x.updateProgress(i),
                    x.setWrapperTranslate(i, !0)
                },
                dragStart: function(e) {
                    var t = x.scrollbar;
                    t.isTouched = !0,
                    e.preventDefault(),
                    e.stopPropagation(),
                    t.setDragPosition(e),
                    clearTimeout(t.dragTimeout),
                    t.track.transition(0),
                    x.params.scrollbarHide && t.track.css("opacity", 1),
                    x.wrapper.transition(100),
                    t.drag.transition(100),
                    x.emit("onScrollbarDragStart", x)
                },
                dragMove: function(e) {
                    var t = x.scrollbar;
                    t.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                    t.setDragPosition(e),
                    x.wrapper.transition(0),
                    t.track.transition(0),
                    t.drag.transition(0),
                    x.emit("onScrollbarDragMove", x))
                },
                dragEnd: function(e) {
                    var t = x.scrollbar;
                    t.isTouched && (t.isTouched = !1,
                    x.params.scrollbarHide && (clearTimeout(t.dragTimeout),
                    t.dragTimeout = setTimeout(function() {
                        t.track.css("opacity", 0),
                        t.track.transition(400)
                    }, 1e3)),
                    x.emit("onScrollbarDragEnd", x),
                    x.params.scrollbarSnapOnRelease && x.slideReset())
                },
                draggableEvents: !1 !== x.params.simulateTouch || x.support.touch ? x.touchEvents : x.touchEventsDesktop,
                enableDraggable: function() {
                    var e = x.scrollbar
                      , t = x.support.touch ? e.track : document;
                    L(e.track).on(e.draggableEvents.start, e.dragStart),
                    L(t).on(e.draggableEvents.move, e.dragMove),
                    L(t).on(e.draggableEvents.end, e.dragEnd)
                },
                disableDraggable: function() {
                    var e = x.scrollbar
                      , t = x.support.touch ? e.track : document;
                    L(e.track).off(e.draggableEvents.start, e.dragStart),
                    L(t).off(e.draggableEvents.move, e.dragMove),
                    L(t).off(e.draggableEvents.end, e.dragEnd)
                },
                set: function() {
                    if (x.params.scrollbar) {
                        var e = x.scrollbar;
                        e.track = L(x.params.scrollbar),
                        x.params.uniqueNavElements && "string" == typeof x.params.scrollbar && 1 < e.track.length && 1 === x.container.find(x.params.scrollbar).length && (e.track = x.container.find(x.params.scrollbar)),
                        e.drag = e.track.find(".swiper-scrollbar-drag"),
                        0 === e.drag.length && (e.drag = L('<div class="swiper-scrollbar-drag"></div>'),
                        e.track.append(e.drag)),
                        e.drag[0].style.width = "",
                        e.drag[0].style.height = "",
                        e.trackSize = x.isHorizontal() ? e.track[0].offsetWidth : e.track[0].offsetHeight,
                        e.divider = x.size / x.virtualSize,
                        e.moveDivider = e.divider * (e.trackSize / x.size),
                        e.dragSize = e.trackSize * e.divider,
                        x.isHorizontal() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px",
                        1 <= e.divider ? e.track[0].style.display = "none" : e.track[0].style.display = "",
                        x.params.scrollbarHide && (e.track[0].style.opacity = 0)
                    }
                },
                setTranslate: function() {
                    if (x.params.scrollbar) {
                        var e, t = x.scrollbar, i = (x.translate,
                        t.dragSize);
                        e = (t.trackSize - t.dragSize) * x.progress,
                        x.rtl && x.isHorizontal() ? 0 < (e = -e) ? (i = t.dragSize - e,
                        e = 0) : -e + t.dragSize > t.trackSize && (i = t.trackSize + e) : e < 0 ? (i = t.dragSize + e,
                        e = 0) : e + t.dragSize > t.trackSize && (i = t.trackSize - e),
                        x.isHorizontal() ? (x.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"),
                        t.drag[0].style.width = i + "px") : (x.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"),
                        t.drag[0].style.height = i + "px"),
                        x.params.scrollbarHide && (clearTimeout(t.timeout),
                        t.track[0].style.opacity = 1,
                        t.timeout = setTimeout(function() {
                            t.track[0].style.opacity = 0,
                            t.track.transition(400)
                        }, 1e3))
                    }
                },
                setTransition: function(e) {
                    x.params.scrollbar && x.scrollbar.drag.transition(e)
                }
            },
            x.controller = {
                LinearSpline: function(e, t) {
                    var i, r, n, a, s, o = function(e, t) {
                        for (r = -1,
                        i = e.length; 1 < i - r; )
                            e[n = i + r >> 1] <= t ? r = n : i = n;
                        return i
                    };
                    this.x = e,
                    this.y = t,
                    this.lastIndex = e.length - 1;
                    this.x.length;
                    this.interpolate = function(e) {
                        return e ? (s = o(this.x, e),
                        a = s - 1,
                        (e - this.x[a]) * (this.y[s] - this.y[a]) / (this.x[s] - this.x[a]) + this.y[a]) : 0
                    }
                },
                getInterpolateFunction: function(e) {
                    x.controller.spline || (x.controller.spline = x.params.loop ? new x.controller.LinearSpline(x.slidesGrid,e.slidesGrid) : new x.controller.LinearSpline(x.snapGrid,e.snapGrid))
                },
                setTranslate: function(t, e) {
                    var i, r, n = x.params.control;
                    function a(e) {
                        t = e.rtl && "horizontal" === e.params.direction ? -x.translate : x.translate,
                        "slide" === x.params.controlBy && (x.controller.getInterpolateFunction(e),
                        r = -x.controller.spline.interpolate(-t)),
                        r && "container" !== x.params.controlBy || (i = (e.maxTranslate() - e.minTranslate()) / (x.maxTranslate() - x.minTranslate()),
                        r = (t - x.minTranslate()) * i + e.minTranslate()),
                        x.params.controlInverse && (r = e.maxTranslate() - r),
                        e.updateProgress(r),
                        e.setWrapperTranslate(r, !1, x),
                        e.updateActiveIndex()
                    }
                    if (Array.isArray(n))
                        for (var s = 0; s < n.length; s++)
                            n[s] !== e && n[s]instanceof N && a(n[s]);
                    else
                        n instanceof N && e !== n && a(n)
                },
                setTransition: function(t, e) {
                    var i, r = x.params.control;
                    function n(e) {
                        e.setWrapperTransition(t, x),
                        0 !== t && (e.onTransitionStart(),
                        e.wrapper.transitionEnd(function() {
                            r && (e.params.loop && "slide" === x.params.controlBy && e.fixLoop(),
                            e.onTransitionEnd())
                        }))
                    }
                    if (Array.isArray(r))
                        for (i = 0; i < r.length; i++)
                            r[i] !== e && r[i]instanceof N && n(r[i]);
                    else
                        r instanceof N && e !== r && n(r)
                }
            },
            x.hashnav = {
                onHashCange: function(e, t) {
                    var i = document.location.hash.replace("#", "");
                    i !== x.slides.eq(x.activeIndex).attr("data-hash") && x.slideTo(x.wrapper.children("." + x.params.slideClass + '[data-hash="' + i + '"]').index())
                },
                attachEvents: function(e) {
                    var t = e ? "off" : "on";
                    L(window)[t]("hashchange", x.hashnav.onHashCange)
                },
                setHash: function() {
                    if (x.hashnav.initialized && x.params.hashnav)
                        if (x.params.replaceState && window.history && window.history.replaceState)
                            window.history.replaceState(null, null, "#" + x.slides.eq(x.activeIndex).attr("data-hash") || "");
                        else {
                            var e = x.slides.eq(x.activeIndex)
                              , t = e.attr("data-hash") || e.attr("data-history");
                            document.location.hash = t || ""
                        }
                },
                init: function() {
                    if (x.params.hashnav && !x.params.history) {
                        x.hashnav.initialized = !0;
                        var e = document.location.hash.replace("#", "");
                        if (e)
                            for (var t = 0, i = x.slides.length; t < i; t++) {
                                var r = x.slides.eq(t);
                                if ((r.attr("data-hash") || r.attr("data-history")) === e && !r.hasClass(x.params.slideDuplicateClass)) {
                                    var n = r.index();
                                    x.slideTo(n, 0, x.params.runCallbacksOnInit, !0)
                                }
                            }
                        x.params.hashnavWatchState && x.hashnav.attachEvents()
                    }
                },
                destroy: function() {
                    x.params.hashnavWatchState && x.hashnav.attachEvents(!0)
                }
            },
            x.history = {
                init: function() {
                    if (x.params.history) {
                        if (!window.history || !window.history.pushState)
                            return x.params.history = !1,
                            void (x.params.hashnav = !0);
                        x.history.initialized = !0,
                        this.paths = this.getPathValues(),
                        (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, x.params.runCallbacksOnInit),
                        x.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                    }
                },
                setHistoryPopState: function() {
                    x.history.paths = x.history.getPathValues(),
                    x.history.scrollToSlide(x.params.speed, x.history.paths.value, !1)
                },
                getPathValues: function() {
                    var e = window.location.pathname.slice(1).split("/")
                      , t = e.length;
                    return {
                        key: e[t - 2],
                        value: e[t - 1]
                    }
                },
                setHistory: function(e, t) {
                    if (x.history.initialized && x.params.history) {
                        var i = x.slides.eq(t)
                          , r = this.slugify(i.attr("data-history"));
                        window.location.pathname.includes(e) || (r = e + "/" + r),
                        x.params.replaceState ? window.history.replaceState(null, null, r) : window.history.pushState(null, null, r)
                    }
                },
                slugify: function(e) {
                    return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                },
                scrollToSlide: function(e, t, i) {
                    if (t)
                        for (var r = 0, n = x.slides.length; r < n; r++) {
                            var a = x.slides.eq(r);
                            if (this.slugify(a.attr("data-history")) === t && !a.hasClass(x.params.slideDuplicateClass)) {
                                var s = a.index();
                                x.slideTo(s, e, i)
                            }
                        }
                    else
                        x.slideTo(0, e, i)
                }
            },
            x.disableKeyboardControl = function() {
                x.params.keyboardControl = !1,
                L(document).off("keydown", z)
            }
            ,
            x.enableKeyboardControl = function() {
                x.params.keyboardControl = !0,
                L(document).on("keydown", z)
            }
            ,
            x.mousewheel = {
                event: !1,
                lastScrollTime: (new window.Date).getTime()
            },
            x.params.mousewheelControl && (x.mousewheel.event = -1 < navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
                var e = "onwheel"
                  , t = e in document;
                if (!t) {
                    var i = document.createElement("div");
                    i.setAttribute(e, "return;"),
                    t = "function" == typeof i[e]
                }
                return !t && document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "") && (t = document.implementation.hasFeature("Events.wheel", "3.0")),
                t
            }() ? "wheel" : "mousewheel"),
            x.disableMousewheelControl = function() {
                if (!x.mousewheel.event)
                    return !1;
                var e = x.container;
                return "container" !== x.params.mousewheelEventsTarged && (e = L(x.params.mousewheelEventsTarged)),
                e.off(x.mousewheel.event, D),
                !(x.params.mousewheelControl = !1)
            }
            ,
            x.enableMousewheelControl = function() {
                if (!x.mousewheel.event)
                    return !1;
                var e = x.container;
                return "container" !== x.params.mousewheelEventsTarged && (e = L(x.params.mousewheelEventsTarged)),
                e.on(x.mousewheel.event, D),
                x.params.mousewheelControl = !0
            }
            ,
            x.parallax = {
                setTranslate: function() {
                    x.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        R(this, x.progress)
                    }),
                    x.slides.each(function() {
                        var e = L(this);
                        e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            R(this, Math.min(Math.max(e[0].progress, -1), 1))
                        })
                    })
                },
                setTransition: function(i) {
                    void 0 === i && (i = x.params.speed),
                    x.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        var e = L(this)
                          , t = parseInt(e.attr("data-swiper-parallax-duration"), 10) || i;
                        0 === i && (t = 0),
                        e.transition(t)
                    })
                }
            },
            x.zoom = {
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    slide: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    image: void 0,
                    imageWrap: void 0,
                    zoomMax: x.params.zoomMax
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                },
                getDistanceBetweenTouches: function(e) {
                    if (e.targetTouches.length < 2)
                        return 1;
                    var t = e.targetTouches[0].pageX
                      , i = e.targetTouches[0].pageY
                      , r = e.targetTouches[1].pageX
                      , n = e.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(r - t, 2) + Math.pow(n - i, 2))
                },
                onGestureStart: function(e) {
                    var t = x.zoom;
                    if (!x.support.gestures) {
                        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
                            return;
                        t.gesture.scaleStart = t.getDistanceBetweenTouches(e)
                    }
                    t.gesture.slide && t.gesture.slide.length || (t.gesture.slide = L(this),
                    0 === t.gesture.slide.length && (t.gesture.slide = x.slides.eq(x.activeIndex)),
                    t.gesture.image = t.gesture.slide.find("img, svg, canvas"),
                    t.gesture.imageWrap = t.gesture.image.parent("." + x.params.zoomContainerClass),
                    t.gesture.zoomMax = t.gesture.imageWrap.attr("data-swiper-zoom") || x.params.zoomMax,
                    0 !== t.gesture.imageWrap.length) ? (t.gesture.image.transition(0),
                    t.isScaling = !0) : t.gesture.image = void 0
                },
                onGestureChange: function(e) {
                    var t = x.zoom;
                    if (!x.support.gestures) {
                        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                            return;
                        t.gesture.scaleMove = t.getDistanceBetweenTouches(e)
                    }
                    t.gesture.image && 0 !== t.gesture.image.length && (x.support.gestures ? t.scale = e.scale * t.currentScale : t.scale = t.gesture.scaleMove / t.gesture.scaleStart * t.currentScale,
                    t.scale > t.gesture.zoomMax && (t.scale = t.gesture.zoomMax - 1 + Math.pow(t.scale - t.gesture.zoomMax + 1, .5)),
                    t.scale < x.params.zoomMin && (t.scale = x.params.zoomMin + 1 - Math.pow(x.params.zoomMin - t.scale + 1, .5)),
                    t.gesture.image.transform("translate3d(0,0,0) scale(" + t.scale + ")"))
                },
                onGestureEnd: function(e) {
                    var t = x.zoom;
                    !x.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || t.gesture.image && 0 !== t.gesture.image.length && (t.scale = Math.max(Math.min(t.scale, t.gesture.zoomMax), x.params.zoomMin),
                    t.gesture.image.transition(x.params.speed).transform("translate3d(0,0,0) scale(" + t.scale + ")"),
                    t.currentScale = t.scale,
                    t.isScaling = !1,
                    1 === t.scale && (t.gesture.slide = void 0))
                },
                onTouchStart: function(e, t) {
                    var i = e.zoom;
                    i.gesture.image && 0 !== i.gesture.image.length && (i.image.isTouched || ("android" === e.device.os && t.preventDefault(),
                    i.image.isTouched = !0,
                    i.image.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX,
                    i.image.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
                },
                onTouchMove: function(e) {
                    var t = x.zoom;
                    if (t.gesture.image && 0 !== t.gesture.image.length && (x.allowClick = !1,
                    t.image.isTouched && t.gesture.slide)) {
                        t.image.isMoved || (t.image.width = t.gesture.image[0].offsetWidth,
                        t.image.height = t.gesture.image[0].offsetHeight,
                        t.image.startX = x.getTranslate(t.gesture.imageWrap[0], "x") || 0,
                        t.image.startY = x.getTranslate(t.gesture.imageWrap[0], "y") || 0,
                        t.gesture.slideWidth = t.gesture.slide[0].offsetWidth,
                        t.gesture.slideHeight = t.gesture.slide[0].offsetHeight,
                        t.gesture.imageWrap.transition(0),
                        x.rtl && (t.image.startX = -t.image.startX),
                        x.rtl && (t.image.startY = -t.image.startY));
                        var i = t.image.width * t.scale
                          , r = t.image.height * t.scale;
                        if (!(i < t.gesture.slideWidth && r < t.gesture.slideHeight)) {
                            if (t.image.minX = Math.min(t.gesture.slideWidth / 2 - i / 2, 0),
                            t.image.maxX = -t.image.minX,
                            t.image.minY = Math.min(t.gesture.slideHeight / 2 - r / 2, 0),
                            t.image.maxY = -t.image.minY,
                            t.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                            t.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                            !t.image.isMoved && !t.isScaling) {
                                if (x.isHorizontal() && Math.floor(t.image.minX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x < t.image.touchesStart.x || Math.floor(t.image.maxX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x > t.image.touchesStart.x)
                                    return void (t.image.isTouched = !1);
                                if (!x.isHorizontal() && Math.floor(t.image.minY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y < t.image.touchesStart.y || Math.floor(t.image.maxY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y > t.image.touchesStart.y)
                                    return void (t.image.isTouched = !1)
                            }
                            e.preventDefault(),
                            e.stopPropagation(),
                            t.image.isMoved = !0,
                            t.image.currentX = t.image.touchesCurrent.x - t.image.touchesStart.x + t.image.startX,
                            t.image.currentY = t.image.touchesCurrent.y - t.image.touchesStart.y + t.image.startY,
                            t.image.currentX < t.image.minX && (t.image.currentX = t.image.minX + 1 - Math.pow(t.image.minX - t.image.currentX + 1, .8)),
                            t.image.currentX > t.image.maxX && (t.image.currentX = t.image.maxX - 1 + Math.pow(t.image.currentX - t.image.maxX + 1, .8)),
                            t.image.currentY < t.image.minY && (t.image.currentY = t.image.minY + 1 - Math.pow(t.image.minY - t.image.currentY + 1, .8)),
                            t.image.currentY > t.image.maxY && (t.image.currentY = t.image.maxY - 1 + Math.pow(t.image.currentY - t.image.maxY + 1, .8)),
                            t.velocity.prevPositionX || (t.velocity.prevPositionX = t.image.touchesCurrent.x),
                            t.velocity.prevPositionY || (t.velocity.prevPositionY = t.image.touchesCurrent.y),
                            t.velocity.prevTime || (t.velocity.prevTime = Date.now()),
                            t.velocity.x = (t.image.touchesCurrent.x - t.velocity.prevPositionX) / (Date.now() - t.velocity.prevTime) / 2,
                            t.velocity.y = (t.image.touchesCurrent.y - t.velocity.prevPositionY) / (Date.now() - t.velocity.prevTime) / 2,
                            Math.abs(t.image.touchesCurrent.x - t.velocity.prevPositionX) < 2 && (t.velocity.x = 0),
                            Math.abs(t.image.touchesCurrent.y - t.velocity.prevPositionY) < 2 && (t.velocity.y = 0),
                            t.velocity.prevPositionX = t.image.touchesCurrent.x,
                            t.velocity.prevPositionY = t.image.touchesCurrent.y,
                            t.velocity.prevTime = Date.now(),
                            t.gesture.imageWrap.transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                        }
                    }
                },
                onTouchEnd: function(e, t) {
                    var i = e.zoom;
                    if (i.gesture.image && 0 !== i.gesture.image.length) {
                        if (!i.image.isTouched || !i.image.isMoved)
                            return i.image.isTouched = !1,
                            void (i.image.isMoved = !1);
                        i.image.isTouched = !1,
                        i.image.isMoved = !1;
                        var r = 300
                          , n = 300
                          , a = i.velocity.x * r
                          , s = i.image.currentX + a
                          , o = i.velocity.y * n
                          , l = i.image.currentY + o;
                        0 !== i.velocity.x && (r = Math.abs((s - i.image.currentX) / i.velocity.x)),
                        0 !== i.velocity.y && (n = Math.abs((l - i.image.currentY) / i.velocity.y));
                        var u = Math.max(r, n);
                        i.image.currentX = s,
                        i.image.currentY = l;
                        var c = i.image.width * i.scale
                          , p = i.image.height * i.scale;
                        i.image.minX = Math.min(i.gesture.slideWidth / 2 - c / 2, 0),
                        i.image.maxX = -i.image.minX,
                        i.image.minY = Math.min(i.gesture.slideHeight / 2 - p / 2, 0),
                        i.image.maxY = -i.image.minY,
                        i.image.currentX = Math.max(Math.min(i.image.currentX, i.image.maxX), i.image.minX),
                        i.image.currentY = Math.max(Math.min(i.image.currentY, i.image.maxY), i.image.minY),
                        i.gesture.imageWrap.transition(u).transform("translate3d(" + i.image.currentX + "px, " + i.image.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function(e) {
                    var t = e.zoom;
                    t.gesture.slide && e.previousIndex !== e.activeIndex && (t.gesture.image.transform("translate3d(0,0,0) scale(1)"),
                    t.gesture.imageWrap.transform("translate3d(0,0,0)"),
                    t.gesture.slide = t.gesture.image = t.gesture.imageWrap = void 0,
                    t.scale = t.currentScale = 1)
                },
                toggleZoom: function(e, t) {
                    var i, r, n, a, s, o, l, u, c, p, d, h, f, m, g, v, y = e.zoom;
                    (y.gesture.slide || (y.gesture.slide = e.clickedSlide ? L(e.clickedSlide) : e.slides.eq(e.activeIndex),
                    y.gesture.image = y.gesture.slide.find("img, svg, canvas"),
                    y.gesture.imageWrap = y.gesture.image.parent("." + e.params.zoomContainerClass)),
                    y.gesture.image && 0 !== y.gesture.image.length) && (r = void 0 === y.image.touchesStart.x && t ? (i = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX,
                    "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (i = y.image.touchesStart.x,
                    y.image.touchesStart.y),
                    y.scale && 1 !== y.scale ? (y.scale = y.currentScale = 1,
                    y.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),
                    y.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),
                    y.gesture.slide = void 0) : (y.scale = y.currentScale = y.gesture.imageWrap.attr("data-swiper-zoom") || e.params.zoomMax,
                    t ? (g = y.gesture.slide[0].offsetWidth,
                    v = y.gesture.slide[0].offsetHeight,
                    n = y.gesture.slide.offset().left + g / 2 - i,
                    a = y.gesture.slide.offset().top + v / 2 - r,
                    l = y.gesture.image[0].offsetWidth,
                    u = y.gesture.image[0].offsetHeight,
                    c = l * y.scale,
                    p = u * y.scale,
                    f = -(d = Math.min(g / 2 - c / 2, 0)),
                    m = -(h = Math.min(v / 2 - p / 2, 0)),
                    (s = n * y.scale) < d && (s = d),
                    f < s && (s = f),
                    (o = a * y.scale) < h && (o = h),
                    m < o && (o = m)) : o = s = 0,
                    y.gesture.imageWrap.transition(300).transform("translate3d(" + s + "px, " + o + "px,0)"),
                    y.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + y.scale + ")")))
                },
                attachEvents: function(e) {
                    var i = e ? "off" : "on";
                    if (x.params.zoom) {
                        x.slides;
                        var t = !("touchstart" !== x.touchEvents.start || !x.support.passiveListener || !x.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        x.support.gestures ? (x.slides[i]("gesturestart", x.zoom.onGestureStart, t),
                        x.slides[i]("gesturechange", x.zoom.onGestureChange, t),
                        x.slides[i]("gestureend", x.zoom.onGestureEnd, t)) : "touchstart" === x.touchEvents.start && (x.slides[i](x.touchEvents.start, x.zoom.onGestureStart, t),
                        x.slides[i](x.touchEvents.move, x.zoom.onGestureChange, t),
                        x.slides[i](x.touchEvents.end, x.zoom.onGestureEnd, t)),
                        x[i]("touchStart", x.zoom.onTouchStart),
                        x.slides.each(function(e, t) {
                            0 < L(t).find("." + x.params.zoomContainerClass).length && L(t)[i](x.touchEvents.move, x.zoom.onTouchMove)
                        }),
                        x[i]("touchEnd", x.zoom.onTouchEnd),
                        x[i]("transitionEnd", x.zoom.onTransitionEnd),
                        x.params.zoomToggle && x.on("doubleTap", x.zoom.toggleZoom)
                    }
                },
                init: function() {
                    x.zoom.attachEvents()
                },
                destroy: function() {
                    x.zoom.attachEvents(!0)
                }
            },
            x._plugins = [],
            x.plugins) {
                var g = x.plugins[m](x, x.params[m]);
                g && x._plugins.push(g)
            }
            return x.callPlugins = function(e) {
                for (var t = 0; t < x._plugins.length; t++)
                    e in x._plugins[t] && x._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }
            ,
            x.emitterEventListeners = {},
            x.emit = function(e) {
                var t;
                if (x.params[e] && x.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]),
                x.emitterEventListeners[e])
                    for (t = 0; t < x.emitterEventListeners[e].length; t++)
                        x.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                x.callPlugins && x.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }
            ,
            x.on = function(e, t) {
                return e = I(e),
                x.emitterEventListeners[e] || (x.emitterEventListeners[e] = []),
                x.emitterEventListeners[e].push(t),
                x
            }
            ,
            x.off = function(e, t) {
                var i;
                if (e = I(e),
                void 0 === t)
                    return x.emitterEventListeners[e] = [],
                    x;
                if (x.emitterEventListeners[e] && 0 !== x.emitterEventListeners[e].length) {
                    for (i = 0; i < x.emitterEventListeners[e].length; i++)
                        x.emitterEventListeners[e][i] === t && x.emitterEventListeners[e].splice(i, 1);
                    return x
                }
            }
            ,
            x.once = function(e, t) {
                e = I(e);
                var i = function() {
                    t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]),
                    x.off(e, i)
                };
                return x.on(e, i),
                x
            }
            ,
            x.a11y = {
                makeFocusable: function(e) {
                    return e.attr("tabIndex", "0"),
                    e
                },
                addRole: function(e, t) {
                    return e.attr("role", t),
                    e
                },
                addLabel: function(e, t) {
                    return e.attr("aria-label", t),
                    e
                },
                disable: function(e) {
                    return e.attr("aria-disabled", !0),
                    e
                },
                enable: function(e) {
                    return e.attr("aria-disabled", !1),
                    e
                },
                onEnterKey: function(e) {
                    13 === e.keyCode && (L(e.target).is(x.params.nextButton) ? (x.onClickNext(e),
                    x.isEnd ? x.a11y.notify(x.params.lastSlideMessage) : x.a11y.notify(x.params.nextSlideMessage)) : L(e.target).is(x.params.prevButton) && (x.onClickPrev(e),
                    x.isBeginning ? x.a11y.notify(x.params.firstSlideMessage) : x.a11y.notify(x.params.prevSlideMessage)),
                    L(e.target).is("." + x.params.bulletClass) && L(e.target)[0].click())
                },
                liveRegion: L('<span class="' + x.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function(e) {
                    var t = x.a11y.liveRegion;
                    0 !== t.length && (t.html(""),
                    t.html(e))
                },
                init: function() {
                    x.params.nextButton && x.nextButton && 0 < x.nextButton.length && (x.a11y.makeFocusable(x.nextButton),
                    x.a11y.addRole(x.nextButton, "button"),
                    x.a11y.addLabel(x.nextButton, x.params.nextSlideMessage)),
                    x.params.prevButton && x.prevButton && 0 < x.prevButton.length && (x.a11y.makeFocusable(x.prevButton),
                    x.a11y.addRole(x.prevButton, "button"),
                    x.a11y.addLabel(x.prevButton, x.params.prevSlideMessage)),
                    L(x.container).append(x.a11y.liveRegion)
                },
                initPagination: function() {
                    x.params.pagination && x.params.paginationClickable && x.bullets && x.bullets.length && x.bullets.each(function() {
                        var e = L(this);
                        x.a11y.makeFocusable(e),
                        x.a11y.addRole(e, "button"),
                        x.a11y.addLabel(e, x.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1))
                    })
                },
                destroy: function() {
                    x.a11y.liveRegion && 0 < x.a11y.liveRegion.length && x.a11y.liveRegion.remove()
                }
            },
            x.init = function() {
                x.params.loop && x.createLoop(),
                x.updateContainerSize(),
                x.updateSlidesSize(),
                x.updatePagination(),
                x.params.scrollbar && x.scrollbar && (x.scrollbar.set(),
                x.params.scrollbarDraggable && x.scrollbar.enableDraggable()),
                "slide" !== x.params.effect && x.effects[x.params.effect] && (x.params.loop || x.updateProgress(),
                x.effects[x.params.effect].setTranslate()),
                x.params.loop ? x.slideTo(x.params.initialSlide + x.loopedSlides, 0, x.params.runCallbacksOnInit) : (x.slideTo(x.params.initialSlide, 0, x.params.runCallbacksOnInit),
                0 === x.params.initialSlide && (x.parallax && x.params.parallax && x.parallax.setTranslate(),
                x.lazy && x.params.lazyLoading && (x.lazy.load(),
                x.lazy.initialImageLoaded = !0))),
                x.attachEvents(),
                x.params.observer && x.support.observer && x.initObservers(),
                x.params.preloadImages && !x.params.lazyLoading && x.preloadImages(),
                x.params.zoom && x.zoom && x.zoom.init(),
                x.params.autoplay && x.startAutoplay(),
                x.params.keyboardControl && x.enableKeyboardControl && x.enableKeyboardControl(),
                x.params.mousewheelControl && x.enableMousewheelControl && x.enableMousewheelControl(),
                x.params.hashnavReplaceState && (x.params.replaceState = x.params.hashnavReplaceState),
                x.params.history && x.history && x.history.init(),
                x.params.hashnav && x.hashnav && x.hashnav.init(),
                x.params.a11y && x.a11y && x.a11y.init(),
                x.emit("onInit", x)
            }
            ,
            x.cleanupStyles = function() {
                x.container.removeClass(x.classNames.join(" ")).removeAttr("style"),
                x.wrapper.removeAttr("style"),
                x.slides && x.slides.length && x.slides.removeClass([x.params.slideVisibleClass, x.params.slideActiveClass, x.params.slideNextClass, x.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),
                x.paginationContainer && x.paginationContainer.length && x.paginationContainer.removeClass(x.params.paginationHiddenClass),
                x.bullets && x.bullets.length && x.bullets.removeClass(x.params.bulletActiveClass),
                x.params.prevButton && L(x.params.prevButton).removeClass(x.params.buttonDisabledClass),
                x.params.nextButton && L(x.params.nextButton).removeClass(x.params.buttonDisabledClass),
                x.params.scrollbar && x.scrollbar && (x.scrollbar.track && x.scrollbar.track.length && x.scrollbar.track.removeAttr("style"),
                x.scrollbar.drag && x.scrollbar.drag.length && x.scrollbar.drag.removeAttr("style"))
            }
            ,
            x.destroy = function(e, t) {
                x.detachEvents(),
                x.stopAutoplay(),
                x.params.scrollbar && x.scrollbar && x.params.scrollbarDraggable && x.scrollbar.disableDraggable(),
                x.params.loop && x.destroyLoop(),
                t && x.cleanupStyles(),
                x.disconnectObservers(),
                x.params.zoom && x.zoom && x.zoom.destroy(),
                x.params.keyboardControl && x.disableKeyboardControl && x.disableKeyboardControl(),
                x.params.mousewheelControl && x.disableMousewheelControl && x.disableMousewheelControl(),
                x.params.a11y && x.a11y && x.a11y.destroy(),
                x.params.history && !x.params.replaceState && window.removeEventListener("popstate", x.history.setHistoryPopState),
                x.params.hashnav && x.hashnav && x.hashnav.destroy(),
                x.emit("onDestroy"),
                !1 !== e && (x = null)
            }
            ,
            x.init(),
            x
        }
        function v(e) {
            return Math.floor(e)
        }
        function y() {
            var e = x.params.autoplay
              , t = x.slides.eq(x.activeIndex);
            t.attr("data-swiper-autoplay") && (e = t.attr("data-swiper-autoplay") || x.params.autoplay),
            x.autoplayTimeoutId = setTimeout(function() {
                x.params.loop ? (x.fixLoop(),
                x._slideNext(),
                x.emit("onAutoplay", x)) : x.isEnd ? l.autoplayStopOnLast ? x.stopAutoplay() : (x._slideTo(0),
                x.emit("onAutoplay", x)) : (x._slideNext(),
                x.emit("onAutoplay", x))
            }, e)
        }
        function _(e, i) {
            var t = L(e.target);
            if (!t.is(i))
                if ("string" == typeof i)
                    t = t.parents(i);
                else if (i.nodeType) {
                    var r;
                    return t.parents().each(function(e, t) {
                        t === i && (r = i)
                    }),
                    r ? i : void 0
                }
            if (0 !== t.length)
                return t[0]
        }
        function O(e, t) {
            t = t || {};
            var i = new (window.MutationObserver || window.WebkitMutationObserver)(function(e) {
                e.forEach(function(e) {
                    x.onResize(!0),
                    x.emit("onObserverUpdate", x, e)
                })
            }
            );
            i.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }),
            x.observers.push(i)
        }
        function z(e) {
            e.originalEvent && (e = e.originalEvent);
            var t = e.keyCode || e.charCode;
            if (!x.params.allowSwipeToNext && (x.isHorizontal() && 39 === t || !x.isHorizontal() && 40 === t))
                return !1;
            if (!x.params.allowSwipeToPrev && (x.isHorizontal() && 37 === t || !x.isHorizontal() && 38 === t))
                return !1;
            if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === t || 39 === t || 38 === t || 40 === t) {
                    var i = !1;
                    if (0 < x.container.parents("." + x.params.slideClass).length && 0 === x.container.parents("." + x.params.slideActiveClass).length)
                        return;
                    var r = window.pageXOffset
                      , n = window.pageYOffset
                      , a = window.innerWidth
                      , s = window.innerHeight
                      , o = x.container.offset();
                    x.rtl && (o.left = o.left - x.container[0].scrollLeft);
                    for (var l = [[o.left, o.top], [o.left + x.width, o.top], [o.left, o.top + x.height], [o.left + x.width, o.top + x.height]], u = 0; u < l.length; u++) {
                        var c = l[u];
                        c[0] >= r && c[0] <= r + a && c[1] >= n && c[1] <= n + s && (i = !0)
                    }
                    if (!i)
                        return
                }
                x.isHorizontal() ? (37 !== t && 39 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
                (39 === t && !x.rtl || 37 === t && x.rtl) && x.slideNext(),
                (37 === t && !x.rtl || 39 === t && x.rtl) && x.slidePrev()) : (38 !== t && 40 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
                40 === t && x.slideNext(),
                38 === t && x.slidePrev()),
                x.emit("onKeyPress", x, t)
            }
        }
        function D(e) {
            e.originalEvent && (e = e.originalEvent);
            var t, i, r, n, a, s = 0, o = x.rtl ? -1 : 1, l = (a = n = r = i = 0,
            "detail"in (t = e) && (r = t.detail),
            "wheelDelta"in t && (r = -t.wheelDelta / 120),
            "wheelDeltaY"in t && (r = -t.wheelDeltaY / 120),
            "wheelDeltaX"in t && (i = -t.wheelDeltaX / 120),
            "axis"in t && t.axis === t.HORIZONTAL_AXIS && (i = r,
            r = 0),
            n = 10 * i,
            a = 10 * r,
            "deltaY"in t && (a = t.deltaY),
            "deltaX"in t && (n = t.deltaX),
            (n || a) && t.deltaMode && (1 === t.deltaMode ? (n *= 40,
            a *= 40) : (n *= 800,
            a *= 800)),
            n && !i && (i = n < 1 ? -1 : 1),
            a && !r && (r = a < 1 ? -1 : 1),
            {
                spinX: i,
                spinY: r,
                pixelX: n,
                pixelY: a
            });
            if (x.params.mousewheelForceToAxis)
                if (x.isHorizontal()) {
                    if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY)))
                        return;
                    s = l.pixelX * o
                } else {
                    if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX)))
                        return;
                    s = l.pixelY
                }
            else
                s = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * o : -l.pixelY;
            if (0 !== s) {
                if (x.params.mousewheelInvert && (s = -s),
                x.params.freeMode) {
                    var u = x.getWrapperTranslate() + s * x.params.mousewheelSensitivity
                      , c = x.isBeginning
                      , p = x.isEnd;
                    if (u >= x.minTranslate() && (u = x.minTranslate()),
                    u <= x.maxTranslate() && (u = x.maxTranslate()),
                    x.setWrapperTransition(0),
                    x.setWrapperTranslate(u),
                    x.updateProgress(),
                    x.updateActiveIndex(),
                    (!c && x.isBeginning || !p && x.isEnd) && x.updateClasses(),
                    x.params.freeModeSticky ? (clearTimeout(x.mousewheel.timeout),
                    x.mousewheel.timeout = setTimeout(function() {
                        x.slideReset()
                    }, 300)) : x.params.lazyLoading && x.lazy && x.lazy.load(),
                    x.emit("onScroll", x, e),
                    x.params.autoplay && x.params.autoplayDisableOnInteraction && x.stopAutoplay(),
                    0 === u || u === x.maxTranslate())
                        return
                } else {
                    if (60 < (new window.Date).getTime() - x.mousewheel.lastScrollTime)
                        if (s < 0)
                            if (x.isEnd && !x.params.loop || x.animating) {
                                if (x.params.mousewheelReleaseOnEdges)
                                    return !0
                            } else
                                x.slideNext(),
                                x.emit("onScroll", x, e);
                        else if (x.isBeginning && !x.params.loop || x.animating) {
                            if (x.params.mousewheelReleaseOnEdges)
                                return !0
                        } else
                            x.slidePrev(),
                            x.emit("onScroll", x, e);
                    x.mousewheel.lastScrollTime = (new window.Date).getTime()
                }
                return e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                !1
            }
        }
        function R(e, t) {
            var i, r, n;
            e = L(e);
            var a = x.rtl ? -1 : 1;
            i = e.attr("data-swiper-parallax") || "0",
            r = e.attr("data-swiper-parallax-x"),
            n = e.attr("data-swiper-parallax-y"),
            r || n ? (r = r || "0",
            n = n || "0") : x.isHorizontal() ? (r = i,
            n = "0") : (n = i,
            r = "0"),
            r = 0 <= r.indexOf("%") ? parseInt(r, 10) * t * a + "%" : r * t * a + "px",
            n = 0 <= n.indexOf("%") ? parseInt(n, 10) * t + "%" : n * t + "px",
            e.transform("translate3d(" + r + ", " + n + ",0px)")
        }
        function I(e) {
            return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e),
            e
        }
    };
    N.prototype = {
        isSafari: (o = window.navigator.userAgent.toLowerCase(),
        0 <= o.indexOf("safari") && o.indexOf("chrome") < 0 && o.indexOf("android") < 0),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
        isArray: function(e) {
            return "[object Array]" === Object.prototype.toString.apply(e)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && 1 < window.navigator.msMaxTouchPoints || window.navigator.pointerEnabled && 1 < window.navigator.maxTouchPoints,
            lteIE9: (s = document.createElement("div"),
            s.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e",
            1 === s.getElementsByTagName("i").length)
        },
        device: (t = window.navigator.userAgent,
        i = t.match(/(Android);?[\s\/]+([\d.]+)?/),
        r = t.match(/(iPad).*OS\s([\d_]+)/),
        n = t.match(/(iPod)(.*OS\s([\d_]+))?/),
        a = !r && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        {
            ios: r || a || n,
            android: i
        }),
        support: {
            touch: window.Modernizr && !0 === Modernizr.touch || !!("ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch),
            transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || (e = document.createElement("div").style,
            "webkitPerspective"in e || "MozPerspective"in e || "OPerspective"in e || "MsPerspective"in e || "perspective"in e),
            flexbox: function() {
                for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i++)
                    if (t[i]in e)
                        return !0
            }(),
            observer: "MutationObserver"in window || "WebkitMutationObserver"in window,
            passiveListener: function() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    window.addEventListener("testPassiveListener", null, t)
                } catch (e) {}
                return e
            }(),
            gestures: "ongesturestart"in window
        },
        plugins: {}
    };
    for (var l, u = ["jQuery", "Zepto", "Dom7"], c = 0; c < u.length; c++)
        window[u[c]] && p(window[u[c]]);
    function p(e) {
        e.fn.swiper = function(t) {
            var i;
            return e(this).each(function() {
                var e = new N(this,t);
                i || (i = e)
            }),
            i
        }
    }
    (l = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7) && ("transitionEnd"in l.fn || (l.fn.transitionEnd = function(t) {
        var i, r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = this;
        function a(e) {
            if (e.target === this)
                for (t.call(this, e),
                i = 0; i < r.length; i++)
                    n.off(r[i], a)
        }
        if (t)
            for (i = 0; i < r.length; i++)
                n.on(r[i], a);
        return this
    }
    ),
    "transform"in l.fn || (l.fn.transform = function(e) {
        for (var t = 0; t < this.length; t++) {
            var i = this[t].style;
            i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = e
        }
        return this
    }
    ),
    "transition"in l.fn || (l.fn.transition = function(e) {
        "string" != typeof e && (e += "ms");
        for (var t = 0; t < this.length; t++) {
            var i = this[t].style;
            i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = e
        }
        return this
    }
    ),
    "outerWidth"in l.fn || (l.fn.outerWidth = function(e) {
        return 0 < this.length ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
    }
    )),
    window.Swiper = N
}(),
"undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
    "use strict";
    return window.Swiper
}),
function(r) {
    r.fn.extend({
        smartpreload: function(e) {
            var i = r.extend({
                images: null,
                oneachimageload: null,
                onloadall: null
            }, e);
            return this.each(function() {
                for (var e = 0, t = 0; t < i.images.length; t++)
                    r("<img/>").addClass("preloading").css("display", "none").attr("src", i.images[t]).on("load", function() {
                        e++,
                        null != i.oneachimageload && i.oneachimageload(r(this).attr("src")),
                        e == i.images.length && null != i.onloadall && i.onloadall()
                    })
            })
        }
    })
}(jQuery),
/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function(d) {
    var h, f, e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], t = "onwheel"in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], m = Array.prototype.slice;
    if (d.event.fixHooks)
        for (var i = e.length; i; )
            d.event.fixHooks[e[--i]] = d.event.mouseHooks;
    var g = d.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var e = t.length; e; )
                    this.addEventListener(t[--e], r, !1);
            else
                this.onmousewheel = r;
            d.data(this, "mousewheel-line-height", g.getLineHeight(this)),
            d.data(this, "mousewheel-page-height", g.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var e = t.length; e; )
                    this.removeEventListener(t[--e], r, !1);
            else
                this.onmousewheel = null;
            d.removeData(this, "mousewheel-line-height"),
            d.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(e) {
            var t = d(e)
              , i = t["offsetParent"in d.fn ? "offsetParent" : "parent"]();
            return i.length || (i = d("body")),
            parseInt(i.css("fontSize"), 10) || parseInt(t.css("fontSize"), 10) || 16
        },
        getPageHeight: function(e) {
            return d(e).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    function r(e) {
        var t, i = e || window.event, r = m.call(arguments, 1), n = 0, a = 0, s = 0, o = 0, l = 0;
        if ((e = d.event.fix(i)).type = "mousewheel",
        "detail"in i && (s = -1 * i.detail),
        "wheelDelta"in i && (s = i.wheelDelta),
        "wheelDeltaY"in i && (s = i.wheelDeltaY),
        "wheelDeltaX"in i && (a = -1 * i.wheelDeltaX),
        "axis"in i && i.axis === i.HORIZONTAL_AXIS && (a = -1 * s,
        s = 0),
        n = 0 === s ? a : s,
        "deltaY"in i && (n = s = -1 * i.deltaY),
        "deltaX"in i && (a = i.deltaX,
        0 === s && (n = -1 * a)),
        0 !== s || 0 !== a) {
            if (1 === i.deltaMode) {
                var u = d.data(this, "mousewheel-line-height");
                n *= u,
                s *= u,
                a *= u
            } else if (2 === i.deltaMode) {
                var c = d.data(this, "mousewheel-page-height");
                n *= c,
                s *= c,
                a *= c
            }
            if (t = Math.max(Math.abs(s), Math.abs(a)),
            (!f || t < f) && y(i, f = t) && (f /= 40),
            y(i, t) && (n /= 40,
            a /= 40,
            s /= 40),
            n = Math[1 <= n ? "floor" : "ceil"](n / f),
            a = Math[1 <= a ? "floor" : "ceil"](a / f),
            s = Math[1 <= s ? "floor" : "ceil"](s / f),
            g.settings.normalizeOffset && this.getBoundingClientRect) {
                var p = this.getBoundingClientRect();
                o = e.clientX - p.left,
                l = e.clientY - p.top
            }
            return e.deltaX = a,
            e.deltaY = s,
            e.deltaFactor = f,
            e.offsetX = o,
            e.offsetY = l,
            e.deltaMode = 0,
            r.unshift(e, n, a, s),
            h && clearTimeout(h),
            h = setTimeout(v, 200),
            (d.event.dispatch || d.event.handle).apply(this, r)
        }
    }
    function v() {
        f = null
    }
    function y(e, t) {
        return g.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
    }
    d.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
}),
function(n, i, R, d) {
    "use strict";
    var a = R("html")
      , s = R(n)
      , u = R(i)
      , I = R.fancybox = function() {
        I.open.apply(this, arguments)
    }
      , o = navigator.userAgent.match(/msie/i)
      , l = null
      , c = i.createTouch !== d
      , h = function(e) {
        return e && e.hasOwnProperty && e instanceof R
    }
      , f = function(e) {
        return e && "string" === R.type(e)
    }
      , L = function(e) {
        return f(e) && 0 < e.indexOf("%")
    }
      , N = function(e, t) {
        var i = parseInt(e, 10) || 0;
        return t && L(e) && (i = I.getViewport()[t] / 100 * i),
        Math.ceil(i)
    }
      , H = function(e, t) {
        return N(e, t) + "px"
    };
    R.extend(I, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !c,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: .5,
            leftRatio: .5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3e3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": !0
                }
            },
            iframe: {
                scrolling: "auto",
                preload: !0
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13: "left",
                    34: "up",
                    39: "left",
                    40: "up"
                },
                prev: {
                    8: "right",
                    33: "down",
                    37: "right",
                    38: "down"
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (o ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: !0,
                title: !0
            },
            onCancel: R.noop,
            beforeLoad: R.noop,
            afterLoad: R.noop,
            beforeShow: R.noop,
            afterShow: R.noop,
            beforeChange: R.noop,
            beforeClose: R.noop,
            afterClose: R.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(c, p) {
            if (c && (R.isPlainObject(p) || (p = {}),
            !1 !== I.close(!0)))
                return R.isArray(c) || (c = h(c) ? R(c).get() : [c]),
                R.each(c, function(e, t) {
                    var i, r, n, a, s, o, l, u = {};
                    "object" === R.type(t) && (t.nodeType && (t = R(t)),
                    h(t) ? (u = {
                        href: t.data("fancybox-href") || t.attr("href"),
                        title: t.data("fancybox-title") || t.attr("title"),
                        isDom: !0,
                        element: t
                    },
                    R.metadata && R.extend(!0, u, t.metadata())) : u = t),
                    i = p.href || u.href || (f(t) ? t : null),
                    r = p.title !== d ? p.title : u.title || "",
                    !(a = (n = p.content || u.content) ? "html" : p.type || u.type) && u.isDom && ((a = t.data("fancybox-type")) || (a = (s = t.prop("class").match(/fancybox\.(\w+)/)) ? s[1] : null)),
                    f(i) && (a || (I.isImage(i) ? a = "image" : I.isSWF(i) ? a = "swf" : "#" === i.charAt(0) ? a = "inline" : f(t) && (a = "html",
                    n = t)),
                    "ajax" === a && (i = (o = i.split(/\s+/, 2)).shift(),
                    l = o.shift())),
                    n || ("inline" === a ? i ? n = R(f(i) ? i.replace(/.*(?=#[^\s]+$)/, "") : i) : u.isDom && (n = t) : "html" === a ? n = i : a || i || !u.isDom || (a = "inline",
                    n = t)),
                    R.extend(u, {
                        href: i,
                        type: a,
                        content: n,
                        title: r,
                        selector: l
                    }),
                    c[e] = u
                }),
                I.opts = R.extend(!0, {}, I.defaults, p),
                p.keys !== d && (I.opts.keys = !!p.keys && R.extend({}, I.defaults.keys, p.keys)),
                I.group = c,
                I._start(I.opts.index)
        },
        cancel: function() {
            var e = I.coming;
            e && !1 !== I.trigger("onCancel") && (I.hideLoading(),
            I.ajaxLoad && I.ajaxLoad.abort(),
            I.ajaxLoad = null,
            I.imgPreload && (I.imgPreload.onload = I.imgPreload.onerror = null),
            e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(),
            I.coming = null,
            I.current || I._afterZoomOut(e))
        },
        close: function(e) {
            I.cancel(),
            !1 !== I.trigger("beforeClose") && (I.unbindEvents(),
            I.isActive && (I.isOpen && !0 !== e ? (I.isOpen = I.isOpened = !1,
            I.isClosing = !0,
            R(".fancybox-item, .fancybox-nav").remove(),
            I.wrap.stop(!0, !0).removeClass("fancybox-opened"),
            I.transitions[I.current.closeMethod]()) : (R(".fancybox-wrap").stop(!0).trigger("onReset").remove(),
            I._afterZoomOut())))
        },
        play: function(e) {
            var t = function() {
                clearTimeout(I.player.timer)
            }
              , i = function() {
                t(),
                I.current && I.player.isActive && (I.player.timer = setTimeout(I.next, I.current.playSpeed))
            }
              , r = function() {
                t(),
                u.unbind(".player"),
                I.player.isActive = !1,
                I.trigger("onPlayEnd")
            };
            !0 === e || !I.player.isActive && !1 !== e ? I.current && (I.current.loop || I.current.index < I.group.length - 1) && (I.player.isActive = !0,
            u.bind({
                "onCancel.player beforeClose.player": r,
                "onUpdate.player": i,
                "beforeLoad.player": t
            }),
            i(),
            I.trigger("onPlayStart")) : r()
        },
        next: function(e) {
            var t = I.current;
            t && (f(e) || (e = t.direction.next),
            I.jumpto(t.index + 1, e, "next"))
        },
        prev: function(e) {
            var t = I.current;
            t && (f(e) || (e = t.direction.prev),
            I.jumpto(t.index - 1, e, "prev"))
        },
        jumpto: function(e, t, i) {
            var r = I.current;
            r && (e = N(e),
            I.direction = t || r.direction[e >= r.index ? "next" : "prev"],
            I.router = i || "jumpto",
            r.loop && (e < 0 && (e = r.group.length + e % r.group.length),
            e %= r.group.length),
            r.group[e] !== d && (I.cancel(),
            I._start(e)))
        },
        reposition: function(e, t) {
            var i, r = I.current, n = r ? r.wrap : null;
            n && (i = I._getPosition(t),
            e && "scroll" === e.type ? (delete i.position,
            n.stop(!0, !0).animate(i, 200)) : (n.css(i),
            r.pos = R.extend({}, r.dim, i)))
        },
        update: function(t) {
            var i = t && t.type
              , r = !i || "orientationchange" === i;
            r && (clearTimeout(l),
            l = null),
            I.isOpen && !l && (l = setTimeout(function() {
                var e = I.current;
                e && !I.isClosing && (I.wrap.removeClass("fancybox-tmp"),
                (r || "load" === i || "resize" === i && e.autoResize) && I._setDimension(),
                ("scroll" !== i || !e.canShrink) && I.reposition(t),
                I.trigger("onUpdate"),
                l = null)
            }, r && !c ? 0 : 300))
        },
        toggle: function(e) {
            I.isOpen && (I.current.fitToView = "boolean" === R.type(e) ? e : !I.current.fitToView,
            c && (I.wrap.removeAttr("style").addClass("fancybox-tmp"),
            I.trigger("onUpdate")),
            I.update())
        },
        hideLoading: function() {
            u.unbind(".loading"),
            R("#fancybox-loading").remove()
        },
        showLoading: function() {
            var e, t;
            I.hideLoading(),
            e = R('<div id="fancybox-loading"><div></div></div>').click(I.cancel).appendTo("body"),
            u.bind("keydown.loading", function(e) {
                27 === (e.which || e.keyCode) && (e.preventDefault(),
                I.cancel())
            }),
            I.defaults.fixed || (t = I.getViewport(),
            e.css({
                position: "absolute",
                top: .5 * t.h + t.y,
                left: .5 * t.w + t.x
            }))
        },
        getViewport: function() {
            var e = I.current && I.current.locked || !1
              , t = {
                x: s.scrollLeft(),
                y: s.scrollTop()
            };
            return t.h = e ? (t.w = e[0].clientWidth,
            e[0].clientHeight) : (t.w = c && n.innerWidth ? n.innerWidth : s.width(),
            c && n.innerHeight ? n.innerHeight : s.height()),
            t
        },
        unbindEvents: function() {
            I.wrap && h(I.wrap) && I.wrap.unbind(".fb"),
            u.unbind(".fb"),
            s.unbind(".fb")
        },
        bindEvents: function() {
            var t, l = I.current;
            l && (s.bind("orientationchange.fb" + (c ? "" : " resize.fb") + (l.autoCenter && !l.locked ? " scroll.fb" : ""), I.update),
            (t = l.keys) && u.bind("keydown.fb", function(i) {
                var r = i.which || i.keyCode
                  , e = i.target || i.srcElement;
                if (27 === r && I.coming)
                    return !1;
                !i.ctrlKey && !i.altKey && !i.shiftKey && !i.metaKey && (!e || !e.type && !R(e).is("[contenteditable]")) && R.each(t, function(e, t) {
                    return 1 < l.group.length && t[r] !== d ? (I[e](t[r]),
                    i.preventDefault(),
                    !1) : -1 < R.inArray(r, t) ? (I[e](),
                    i.preventDefault(),
                    !1) : void 0
                })
            }),
            R.fn.mousewheel && l.mouseWheel && I.wrap.bind("mousewheel.fb", function(e, t, i, r) {
                for (var n, a = e.target || null, s = R(a), o = !1; s.length && !(o || s.is(".fancybox-skin") || s.is(".fancybox-wrap")); )
                    o = (n = s[0]) && (!n.style.overflow || "hidden" !== n.style.overflow) && (n.clientWidth && n.scrollWidth > n.clientWidth || n.clientHeight && n.scrollHeight > n.clientHeight),
                    s = R(s).parent();
                0 !== t && !o && 1 < I.group.length && !l.canShrink && (0 < r || 0 < i ? I.prev(0 < r ? "down" : "left") : (r < 0 || i < 0) && I.next(r < 0 ? "up" : "right"),
                e.preventDefault())
            }))
        },
        trigger: function(i, e) {
            var t, r = e || I.coming || I.current;
            if (r) {
                if (R.isFunction(r[i]) && (t = r[i].apply(r, Array.prototype.slice.call(arguments, 1))),
                !1 === t)
                    return !1;
                r.helpers && R.each(r.helpers, function(e, t) {
                    t && I.helpers[e] && R.isFunction(I.helpers[e][i]) && I.helpers[e][i](R.extend(!0, {}, I.helpers[e].defaults, t), r)
                }),
                u.trigger(i)
            }
        },
        isImage: function(e) {
            return f(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function(e) {
            return f(e) && e.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function(e) {
            var t, i, r, n, a, s = {};
            if (e = N(e),
            !(t = I.group[e] || null))
                return !1;
            if (n = (s = R.extend(!0, {}, I.opts, t)).margin,
            a = s.padding,
            "number" === R.type(n) && (s.margin = [n, n, n, n]),
            "number" === R.type(a) && (s.padding = [a, a, a, a]),
            s.modal && R.extend(!0, s, {
                closeBtn: !1,
                closeClick: !1,
                nextClick: !1,
                arrows: !1,
                mouseWheel: !1,
                keys: null,
                helpers: {
                    overlay: {
                        closeClick: !1
                    }
                }
            }),
            s.autoSize && (s.autoWidth = s.autoHeight = !0),
            "auto" === s.width && (s.autoWidth = !0),
            "auto" === s.height && (s.autoHeight = !0),
            s.group = I.group,
            s.index = e,
            I.coming = s,
            !1 !== I.trigger("beforeLoad")) {
                if (r = s.type,
                i = s.href,
                !r)
                    return I.coming = null,
                    !(!I.current || !I.router || "jumpto" === I.router) && (I.current.index = e,
                    I[I.router](I.direction));
                if (I.isActive = !0,
                "image" !== r && "swf" !== r || (s.autoHeight = s.autoWidth = !1,
                s.scrolling = "visible"),
                "image" === r && (s.aspectRatio = !0),
                "iframe" === r && c && (s.scrolling = "scroll"),
                s.wrap = R(s.tpl.wrap).addClass("fancybox-" + (c ? "mobile" : "desktop") + " fancybox-type-" + r + " fancybox-tmp " + s.wrapCSS).appendTo(s.parent || "body"),
                R.extend(s, {
                    skin: R(".fancybox-skin", s.wrap),
                    outer: R(".fancybox-outer", s.wrap),
                    inner: R(".fancybox-inner", s.wrap)
                }),
                R.each(["Top", "Right", "Bottom", "Left"], function(e, t) {
                    s.skin.css("padding" + t, H(s.padding[e]))
                }),
                I.trigger("onReady"),
                "inline" === r || "html" === r) {
                    if (!s.content || !s.content.length)
                        return I._error("content")
                } else if (!i)
                    return I._error("href");
                "image" === r ? I._loadImage() : "ajax" === r ? I._loadAjax() : "iframe" === r ? I._loadIframe() : I._afterLoad()
            } else
                I.coming = null
        },
        _error: function(e) {
            R.extend(I.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: e,
                content: I.coming.tpl.error
            }),
            I._afterLoad()
        },
        _loadImage: function() {
            var e = I.imgPreload = new Image;
            e.onload = function() {
                this.onload = this.onerror = null,
                I.coming.width = this.width / I.opts.pixelRatio,
                I.coming.height = this.height / I.opts.pixelRatio,
                I._afterLoad()
            }
            ,
            e.onerror = function() {
                this.onload = this.onerror = null,
                I._error("image")
            }
            ,
            e.src = I.coming.href,
            !0 !== e.complete && I.showLoading()
        },
        _loadAjax: function() {
            var i = I.coming;
            I.showLoading(),
            I.ajaxLoad = R.ajax(R.extend({}, i.ajax, {
                url: i.href,
                error: function(e, t) {
                    I.coming && "abort" !== t ? I._error("ajax", e) : I.hideLoading()
                },
                success: function(e, t) {
                    "success" === t && (i.content = e,
                    I._afterLoad())
                }
            }))
        },
        _loadIframe: function() {
            var e = I.coming
              , t = R(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", c ? "auto" : e.iframe.scrolling).attr("src", e.href);
            R(e.wrap).bind("onReset", function() {
                try {
                    R(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (e) {}
            }),
            e.iframe.preload && (I.showLoading(),
            t.one("load", function() {
                R(this).data("ready", 1),
                c || R(this).bind("load.fb", I.update),
                R(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),
                I._afterLoad()
            })),
            e.content = t.appendTo(e.inner),
            e.iframe.preload || I._afterLoad()
        },
        _preloadImages: function() {
            var e, t, i = I.group, r = I.current, n = i.length, a = r.preload ? Math.min(r.preload, n - 1) : 0;
            for (t = 1; t <= a; t += 1)
                "image" === (e = i[(r.index + t) % n]).type && e.href && ((new Image).src = e.href)
        },
        _afterLoad: function() {
            var e, i, t, r, n, a, s = I.coming, o = I.current, l = "fancybox-placeholder";
            if (I.hideLoading(),
            s && !1 !== I.isActive) {
                if (!1 === I.trigger("afterLoad", s, o))
                    return s.wrap.stop(!0).trigger("onReset").remove(),
                    void (I.coming = null);
                switch (o && (I.trigger("beforeChange", o),
                o.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),
                I.unbindEvents(),
                i = (e = s).content,
                t = s.type,
                r = s.scrolling,
                R.extend(I, {
                    wrap: e.wrap,
                    skin: e.skin,
                    outer: e.outer,
                    inner: e.inner,
                    current: e,
                    previous: o
                }),
                n = e.href,
                t) {
                case "inline":
                case "ajax":
                case "html":
                    e.selector ? i = R("<div>").html(i).find(e.selector) : h(i) && (i.data(l) || i.data(l, R('<div class="' + l + '"></div>').insertAfter(i).hide()),
                    i = i.show().detach(),
                    e.wrap.bind("onReset", function() {
                        R(this).find(i).length && i.hide().replaceAll(i.data(l)).data(l, !1)
                    }));
                    break;
                case "image":
                    i = e.tpl.image.replace("{href}", n);
                    break;
                case "swf":
                    i = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + n + '"></param>',
                    a = "",
                    R.each(e.swf, function(e, t) {
                        i += '<param name="' + e + '" value="' + t + '"></param>',
                        a += " " + e + '="' + t + '"'
                    }),
                    i += '<embed src="' + n + '" type="application/x-shockwave-flash" width="100%" height="100%"' + a + "></embed></object>"
                }
                (!h(i) || !i.parent().is(e.inner)) && e.inner.append(i),
                I.trigger("beforeShow"),
                e.inner.css("overflow", "yes" === r ? "scroll" : "no" === r ? "hidden" : r),
                I._setDimension(),
                I.reposition(),
                I.isOpen = !1,
                I.coming = null,
                I.bindEvents(),
                I.isOpened ? o.prevMethod && I.transitions[o.prevMethod]() : R(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(),
                I.transitions[I.isOpened ? e.nextMethod : e.openMethod](),
                I._preloadImages()
            }
        },
        _setDimension: function() {
            var e, t, i, r, n, a, s, o, l, u, c, p, d, h, f, m, g, v = I.getViewport(), y = 0, _ = I.wrap, x = I.skin, w = I.inner, b = I.current, T = b.width, S = b.height, C = b.minWidth, P = b.minHeight, k = b.maxWidth, M = b.maxHeight, E = b.scrolling, A = b.scrollOutside ? b.scrollbarWidth : 0, O = b.margin, z = N(O[1] + O[3]), D = N(O[0] + O[2]);
            if (_.add(x).add(w).width("auto").height("auto").removeClass("fancybox-tmp"),
            n = z + (i = N(x.outerWidth(!0) - x.width())),
            a = D + (r = N(x.outerHeight(!0) - x.height())),
            s = L(T) ? (v.w - n) * N(T) / 100 : T,
            o = L(S) ? (v.h - a) * N(S) / 100 : S,
            "iframe" === b.type) {
                if (m = b.content,
                b.autoHeight && 1 === m.data("ready"))
                    try {
                        m[0].contentWindow.document.location && (w.width(s).height(9999),
                        g = m.contents().find("body"),
                        A && g.css("overflow-x", "hidden"),
                        o = g.outerHeight(!0))
                    } catch (e) {}
            } else
                (b.autoWidth || b.autoHeight) && (w.addClass("fancybox-tmp"),
                b.autoWidth || w.width(s),
                b.autoHeight || w.height(o),
                b.autoWidth && (s = w.width()),
                b.autoHeight && (o = w.height()),
                w.removeClass("fancybox-tmp"));
            if (T = N(s),
            S = N(o),
            c = s / o,
            C = N(L(C) ? N(C, "w") - n : C),
            k = N(L(k) ? N(k, "w") - n : k),
            P = N(L(P) ? N(P, "h") - a : P),
            l = k,
            u = M = N(L(M) ? N(M, "h") - a : M),
            b.fitToView && (k = Math.min(v.w - n, k),
            M = Math.min(v.h - a, M)),
            h = v.w - z,
            f = v.h - D,
            b.aspectRatio ? (k < T && (S = N((T = k) / c)),
            M < S && (T = N((S = M) * c)),
            T < C && (S = N((T = C) / c)),
            S < P && (T = N((S = P) * c))) : (T = Math.max(C, Math.min(T, k)),
            b.autoHeight && "iframe" !== b.type && (w.width(T),
            S = w.height()),
            S = Math.max(P, Math.min(S, M))),
            b.fitToView)
                if (w.width(T).height(S),
                _.width(T + i),
                p = _.width(),
                d = _.height(),
                b.aspectRatio)
                    for (; (h < p || f < d) && C < T && P < S && !(19 < y++); )
                        S = Math.max(P, Math.min(M, S - 10)),
                        (T = N(S * c)) < C && (S = N((T = C) / c)),
                        k < T && (S = N((T = k) / c)),
                        w.width(T).height(S),
                        _.width(T + i),
                        p = _.width(),
                        d = _.height();
                else
                    T = Math.max(C, Math.min(T, T - (p - h))),
                    S = Math.max(P, Math.min(S, S - (d - f)));
            A && "auto" === E && S < o && T + i + A < h && (T += A),
            w.width(T).height(S),
            _.width(T + i),
            p = _.width(),
            d = _.height(),
            e = (h < p || f < d) && C < T && P < S,
            t = b.aspectRatio ? T < l && S < u && T < s && S < o : (T < l || S < u) && (T < s || S < o),
            R.extend(b, {
                dim: {
                    width: H(p),
                    height: H(d)
                },
                origWidth: s,
                origHeight: o,
                canShrink: e,
                canExpand: t,
                wPadding: i,
                hPadding: r,
                wrapSpace: d - x.outerHeight(!0),
                skinSpace: x.height() - S
            }),
            !m && b.autoHeight && P < S && S < M && !t && w.height("auto")
        },
        _getPosition: function(e) {
            var t = I.current
              , i = I.getViewport()
              , r = t.margin
              , n = I.wrap.width() + r[1] + r[3]
              , a = I.wrap.height() + r[0] + r[2]
              , s = {
                position: "absolute",
                top: r[0],
                left: r[3]
            };
            return t.autoCenter && t.fixed && !e && a <= i.h && n <= i.w ? s.position = "fixed" : t.locked || (s.top += i.y,
            s.left += i.x),
            s.top = H(Math.max(s.top, s.top + (i.h - a) * t.topRatio)),
            s.left = H(Math.max(s.left, s.left + (i.w - n) * t.leftRatio)),
            s
        },
        _afterZoomIn: function() {
            var t = I.current;
            t && (I.isOpen = I.isOpened = !0,
            I.wrap.css("overflow", "visible").addClass("fancybox-opened"),
            I.update(),
            (t.closeClick || t.nextClick && 1 < I.group.length) && I.inner.css("cursor", "pointer").bind("click.fb", function(e) {
                R(e.target).is("a") || R(e.target).parent().is("a") || (e.preventDefault(),
                I[t.closeClick ? "close" : "next"]())
            }),
            t.closeBtn && R(t.tpl.closeBtn).appendTo(I.skin).bind("click.fb", function(e) {
                e.preventDefault(),
                I.close()
            }),
            t.arrows && 1 < I.group.length && ((t.loop || 0 < t.index) && R(t.tpl.prev).appendTo(I.outer).bind("click.fb", I.prev),
            (t.loop || t.index < I.group.length - 1) && R(t.tpl.next).appendTo(I.outer).bind("click.fb", I.next)),
            I.trigger("afterShow"),
            t.loop || t.index !== t.group.length - 1 ? I.opts.autoPlay && !I.player.isActive && (I.opts.autoPlay = !1,
            I.play()) : I.play(!1))
        },
        _afterZoomOut: function(e) {
            e = e || I.current,
            R(".fancybox-wrap").trigger("onReset").remove(),
            R.extend(I, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            }),
            I.trigger("afterClose", e)
        }
    }),
    I.transitions = {
        getOrigPosition: function() {
            var e = I.current
              , t = e.element
              , i = e.orig
              , r = {}
              , n = 50
              , a = 50
              , s = e.hPadding
              , o = e.wPadding
              , l = I.getViewport();
            return !i && e.isDom && t.is(":visible") && ((i = t.find("img:first")).length || (i = t)),
            h(i) ? (r = i.offset(),
            i.is("img") && (n = i.outerWidth(),
            a = i.outerHeight())) : (r.top = l.y + (l.h - a) * e.topRatio,
            r.left = l.x + (l.w - n) * e.leftRatio),
            ("fixed" === I.wrap.css("position") || e.locked) && (r.top -= l.y,
            r.left -= l.x),
            r = {
                top: H(r.top - s * e.topRatio),
                left: H(r.left - o * e.leftRatio),
                width: H(n + o),
                height: H(a + s)
            }
        },
        step: function(e, t) {
            var i, r, n = t.prop, a = I.current, s = a.wrapSpace, o = a.skinSpace;
            "width" !== n && "height" !== n || (i = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start),
            I.isClosing && (i = 1 - i),
            r = e - ("width" === n ? a.wPadding : a.hPadding),
            I.skin[n](N("width" === n ? r : r - s * i)),
            I.inner[n](N("width" === n ? r : r - s * i - o * i)))
        },
        zoomIn: function() {
            var e = I.current
              , t = e.pos
              , i = e.openEffect
              , r = "elastic" === i
              , n = R.extend({
                opacity: 1
            }, t);
            delete n.position,
            r ? (t = this.getOrigPosition(),
            e.openOpacity && (t.opacity = .1)) : "fade" === i && (t.opacity = .1),
            I.wrap.css(t).animate(n, {
                duration: "none" === i ? 0 : e.openSpeed,
                easing: e.openEasing,
                step: r ? this.step : null,
                complete: I._afterZoomIn
            })
        },
        zoomOut: function() {
            var e = I.current
              , t = e.closeEffect
              , i = "elastic" === t
              , r = {
                opacity: .1
            };
            i && (r = this.getOrigPosition(),
            e.closeOpacity && (r.opacity = .1)),
            I.wrap.animate(r, {
                duration: "none" === t ? 0 : e.closeSpeed,
                easing: e.closeEasing,
                step: i ? this.step : null,
                complete: I._afterZoomOut
            })
        },
        changeIn: function() {
            var e, t = I.current, i = t.nextEffect, r = t.pos, n = {
                opacity: 1
            }, a = I.direction;
            r.opacity = .1,
            "elastic" === i && (n[e = "down" === a || "up" === a ? "top" : "left"] = "down" === a || "right" === a ? (r[e] = H(N(r[e]) - 200),
            "+=200px") : (r[e] = H(N(r[e]) + 200),
            "-=200px")),
            "none" === i ? I._afterZoomIn() : I.wrap.css(r).animate(n, {
                duration: t.nextSpeed,
                easing: t.nextEasing,
                complete: I._afterZoomIn
            })
        },
        changeOut: function() {
            var e = I.previous
              , t = e.prevEffect
              , i = {
                opacity: .1
            }
              , r = I.direction;
            "elastic" === t && (i["down" === r || "up" === r ? "top" : "left"] = ("up" === r || "left" === r ? "-" : "+") + "=200px"),
            e.wrap.animate(i, {
                duration: "none" === t ? 0 : e.prevSpeed,
                easing: e.prevEasing,
                complete: function() {
                    R(this).trigger("onReset").remove()
                }
            })
        }
    },
    I.helpers.overlay = {
        defaults: {
            closeClick: !0,
            speedOut: 200,
            showEarly: !0,
            css: {},
            locked: !c,
            fixed: !0
        },
        overlay: null,
        fixed: !1,
        el: R("html"),
        create: function(e) {
            e = R.extend({}, this.defaults, e),
            this.overlay && this.close(),
            this.overlay = R('<div class="fancybox-overlay"></div>').appendTo(I.coming ? I.coming.parent : e.parent),
            this.fixed = !1,
            e.fixed && I.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"),
            this.fixed = !0)
        },
        open: function(e) {
            var t = this;
            e = R.extend({}, this.defaults, e),
            this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e),
            this.fixed || (s.bind("resize.overlay", R.proxy(this.update, this)),
            this.update()),
            e.closeClick && this.overlay.bind("click.overlay", function(e) {
                if (R(e.target).hasClass("fancybox-overlay"))
                    return I.isActive ? I.close() : t.close(),
                    !1
            }),
            this.overlay.css(e.css).show()
        },
        close: function() {
            var e, t;
            s.unbind("resize.overlay"),
            this.el.hasClass("fancybox-lock") && (R(".fancybox-margin").removeClass("fancybox-margin"),
            e = s.scrollTop(),
            t = s.scrollLeft(),
            this.el.removeClass("fancybox-lock"),
            s.scrollTop(e).scrollLeft(t)),
            R(".fancybox-overlay").remove().hide(),
            R.extend(this, {
                overlay: null,
                fixed: !1
            })
        },
        update: function() {
            var e, t = "100%";
            this.overlay.width(t).height("100%"),
            o ? (e = Math.max(i.documentElement.offsetWidth, i.body.offsetWidth),
            u.width() > e && (t = u.width())) : u.width() > s.width() && (t = u.width()),
            this.overlay.width(t).height(u.height())
        },
        onReady: function(e, t) {
            var i = this.overlay;
            R(".fancybox-overlay").stop(!0, !0),
            i || this.create(e),
            e.locked && this.fixed && t.fixed && (i || (this.margin = u.height() > s.height() && R("html").css("margin-right").replace("px", "")),
            t.locked = this.overlay.append(t.wrap),
            t.fixed = !1),
            !0 === e.showEarly && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function(e, t) {
            var i, r;
            t.locked && (!1 !== this.margin && (R("*").filter(function() {
                return "fixed" === R(this).css("position") && !R(this).hasClass("fancybox-overlay") && !R(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"),
            this.el.addClass("fancybox-margin")),
            i = s.scrollTop(),
            r = s.scrollLeft(),
            this.el.addClass("fancybox-lock"),
            s.scrollTop(i).scrollLeft(r)),
            this.open(e)
        },
        onUpdate: function() {
            this.fixed || this.update()
        },
        afterClose: function(e) {
            this.overlay && !I.coming && this.overlay.fadeOut(e.speedOut, R.proxy(this.close, this))
        }
    },
    I.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        },
        beforeShow: function(e) {
            var t, i, r = I.current, n = r.title, a = e.type;
            if (R.isFunction(n) && (n = n.call(r.element, r)),
            f(n) && "" !== R.trim(n)) {
                switch (t = R('<div class="fancybox-title fancybox-title-' + a + '-wrap">' + n + "</div>"),
                a) {
                case "inside":
                    i = I.skin;
                    break;
                case "outside":
                    i = I.wrap;
                    break;
                case "over":
                    i = I.inner;
                    break;
                default:
                    i = I.skin,
                    t.appendTo("body"),
                    o && t.width(t.width()),
                    t.wrapInner('<span class="child"></span>'),
                    I.current.margin[2] += Math.abs(N(t.css("margin-bottom")))
                }
                t["top" === e.position ? "prependTo" : "appendTo"](i)
            }
        }
    },
    R.fn.fancybox = function(a) {
        var s, o = R(this), l = this.selector || "", e = function(e) {
            var t, i, r = R(this).blur(), n = s;
            e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || r.is(".fancybox-wrap") || (t = a.groupAttr || "data-fancybox-group",
            (i = r.attr(t)) || (t = "rel",
            i = r.get(0)[t]),
            i && "" !== i && "nofollow" !== i && (n = (r = (r = l.length ? R(l) : o).filter("[" + t + '="' + i + '"]')).index(this)),
            a.index = n,
            !1 !== I.open(r, a) && e.preventDefault())
        };
        return s = (a = a || {}).index || 0,
        l && !1 !== a.live ? u.undelegate(l, "click.fb-start").delegate(l + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", e) : o.unbind("click.fb-start").bind("click.fb-start", e),
        this.filter("[data-fancybox-start=1]").trigger("click"),
        this
    }
    ,
    u.ready(function() {
        var e, t, i, r;
        R.scrollbarWidth === d && (R.scrollbarWidth = function() {
            var e = R('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body")
              , t = e.children()
              , i = t.innerWidth() - t.height(99).innerWidth();
            return e.remove(),
            i
        }
        ),
        R.support.fixedPosition === d && (R.support.fixedPosition = (i = R('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
        r = 20 === i[0].offsetTop || 15 === i[0].offsetTop,
        i.remove(),
        r)),
        R.extend(I.defaults, {
            scrollbarWidth: R.scrollbarWidth(),
            fixed: R.support.fixedPosition,
            parent: R("body")
        }),
        e = R(n).width(),
        a.addClass("fancybox-lock-test"),
        t = R(n).width(),
        a.removeClass("fancybox-lock-test"),
        R("<style type='text/css'>.fancybox-margin{margin-right:" + (t - e) + "px;}</style>").appendTo("head")
    })
}(window, document, jQuery);
