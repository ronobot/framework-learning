! function t(e, n, i) {
    function r(o, a) {
        if (!n[o]) {
            if (!e[o]) {
                var u = "function" == typeof require && require;
                if (!a && u) return u(o, !0);
                if (s) return s(o, !0);
                var h = new Error("Cannot find module '" + o + "'");
                throw h.code = "MODULE_NOT_FOUND", h
            }
            var c = n[o] = {
                exports: {}
            };
            e[o][0].call(c.exports, function(t) {
                var n = e[o][1][t];
                return r(n ? n : t)
            }, c, c.exports, t, e, n, i)
        }
        return n[o].exports
    }
    for (var s = "function" == typeof require && require, o = 0; o < i.length; o++) r(i[o]);
    return r
}({
    1: [function(t, e) {
        (function(n) {
            "use strict";
            var i = t("./stack.js"),
                r = t("./card.js");
            n.gajus = n.gajus || {}, n.gajus.Swing = {
                Stack: i,
                Card: r
            }, e.exports = {
                Stack: i,
                Card: r
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./card.js": 7,
        "./stack.js": 9
    }],
    2: [function(t, e) {
        function n() {
            if (!o) {
                o = !0;
                for (var t, e = s.length; e;) {
                    t = s, s = [];
                    for (var n = -1; ++n < e;) t[n]();
                    e = s.length
                }
                o = !1
            }
        }

        function i() {}
        var r = e.exports = {},
            s = [],
            o = !1;
        r.nextTick = function(t) {
            s.push(t), o || setTimeout(n, 0)
        }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.on = i, r.addListener = i, r.once = i, r.off = i, r.removeListener = i, r.removeAllListeners = i, r.emit = i, r.binding = function() {
            throw new Error("process.binding is not supported")
        }, r.cwd = function() {
            return "/"
        }, r.chdir = function() {
            throw new Error("process.chdir is not supported")
        }, r.umask = function() {
            return 0
        }
    }, {}],
    3: [function(t, e) {
        ! function(t, n, i, r) {
            "use strict";

            function s(t, e, n) {
                return setTimeout(l(t, n), e)
            }

            function o(t, e, n) {
                return Array.isArray(t) ? (a(t, n[e], n), !0) : !1
            }

            function a(t, e, n) {
                var i;
                if (t)
                    if (t.forEach) t.forEach(e, n);
                    else if (t.length !== r)
                    for (i = 0; i < t.length;) e.call(n, t[i], i, t), i++;
                else
                    for (i in t) t.hasOwnProperty(i) && e.call(n, t[i], i, t)
            }

            function u(t, e, n) {
                for (var i = Object.keys(e), s = 0; s < i.length;)(!n || n && t[i[s]] === r) && (t[i[s]] = e[i[s]]), s++;
                return t
            }

            function h(t, e) {
                return u(t, e, !0)
            }

            function c(t, e, n) {
                var i, r = e.prototype;
                i = t.prototype = Object.create(r), i.constructor = t, i._super = r, n && u(i, n)
            }

            function l(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            }

            function p(t, e) {
                return typeof t == le ? t.apply(e ? e[0] || r : r, e) : t
            }

            function f(t, e) {
                return t === r ? e : t
            }

            function d(t, e, n) {
                a(_(e), function(e) {
                    t.addEventListener(e, n, !1)
                })
            }

            function g(t, e, n) {
                a(_(e), function(e) {
                    t.removeEventListener(e, n, !1)
                })
            }

            function m(t, e) {
                for (; t;) {
                    if (t == e) return !0;
                    t = t.parentNode
                }
                return !1
            }

            function v(t, e) {
                return t.indexOf(e) > -1
            }

            function _(t) {
                return t.trim().split(/\s+/g)
            }

            function T(t, e, n) {
                if (t.indexOf && !n) return t.indexOf(e);
                for (var i = 0; i < t.length;) {
                    if (n && t[i][n] == e || !n && t[i] === e) return i;
                    i++
                }
                return -1
            }

            function S(t) {
                return Array.prototype.slice.call(t, 0)
            }

            function y(t, e, n) {
                for (var i = [], r = [], s = 0; s < t.length;) {
                    var o = e ? t[s][e] : t[s];
                    T(r, o) < 0 && i.push(t[s]), r[s] = o, s++
                }
                return n && (i = e ? i.sort(function(t, n) {
                    return t[e] > n[e]
                }) : i.sort()), i
            }

            function E(t, e) {
                for (var n, i, s = e[0].toUpperCase() + e.slice(1), o = 0; o < he.length;) {
                    if (n = he[o], i = n ? n + s : e, i in t) return i;
                    o++
                }
                return r
            }

            function w() {
                return ge++
            }

            function I(t) {
                var e = t.ownerDocument;
                return e.defaultView || e.parentWindow
            }

            function R(t, e) {
                var n = this;
                this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
                    p(t.options.enable, [t]) && n.handler(e)
                }, this.init()
            }

            function C(t) {
                var e, n = t.options.inputClass;
                return new(e = n ? n : _e ? U : Te ? q : ve ? j : X)(t, O)
            }

            function O(t, e, n) {
                var i = n.pointers.length,
                    r = n.changedPointers.length,
                    s = e & Re && i - r === 0,
                    o = e & (Oe | Ae) && i - r === 0;
                n.isFirst = !!s, n.isFinal = !!o, s && (t.session = {}), n.eventType = e, A(t, n), t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n
            }

            function A(t, e) {
                var n = t.session,
                    i = e.pointers,
                    r = i.length;
                n.firstInput || (n.firstInput = M(e)), r > 1 && !n.firstMultiple ? n.firstMultiple = M(e) : 1 === r && (n.firstMultiple = !1);
                var s = n.firstInput,
                    o = n.firstMultiple,
                    a = o ? o.center : s.center,
                    u = e.center = x(i);
                e.timeStamp = de(), e.deltaTime = e.timeStamp - s.timeStamp, e.angle = P(a, u), e.distance = F(a, u), D(n, e), e.offsetDirection = L(e.deltaX, e.deltaY), e.scale = o ? z(o.pointers, i) : 1, e.rotation = o ? N(o.pointers, i) : 0, V(n, e);
                var h = t.element;
                m(e.srcEvent.target, h) && (h = e.srcEvent.target), e.target = h
            }

            function D(t, e) {
                var n = e.center,
                    i = t.offsetDelta || {},
                    r = t.prevDelta || {},
                    s = t.prevInput || {};
                (e.eventType === Re || s.eventType === Oe) && (r = t.prevDelta = {
                    x: s.deltaX || 0,
                    y: s.deltaY || 0
                }, i = t.offsetDelta = {
                    x: n.x,
                    y: n.y
                }), e.deltaX = r.x + (n.x - i.x), e.deltaY = r.y + (n.y - i.y)
            }

            function V(t, e) {
                var n, i, s, o, a = t.lastInterval || e,
                    u = e.timeStamp - a.timeStamp;
                if (e.eventType != Ae && (u > Ie || a.velocity === r)) {
                    var h = a.deltaX - e.deltaX,
                        c = a.deltaY - e.deltaY,
                        l = b(u, h, c);
                    i = l.x, s = l.y, n = fe(l.x) > fe(l.y) ? l.x : l.y, o = L(h, c), t.lastInterval = e
                } else n = a.velocity, i = a.velocityX, s = a.velocityY, o = a.direction;
                e.velocity = n, e.velocityX = i, e.velocityY = s, e.direction = o
            }

            function M(t) {
                for (var e = [], n = 0; n < t.pointers.length;) e[n] = {
                    clientX: pe(t.pointers[n].clientX),
                    clientY: pe(t.pointers[n].clientY)
                }, n++;
                return {
                    timeStamp: de(),
                    pointers: e,
                    center: x(e),
                    deltaX: t.deltaX,
                    deltaY: t.deltaY
                }
            }

            function x(t) {
                var e = t.length;
                if (1 === e) return {
                    x: pe(t[0].clientX),
                    y: pe(t[0].clientY)
                };
                for (var n = 0, i = 0, r = 0; e > r;) n += t[r].clientX, i += t[r].clientY, r++;
                return {
                    x: pe(n / e),
                    y: pe(i / e)
                }
            }

            function b(t, e, n) {
                return {
                    x: e / t || 0,
                    y: n / t || 0
                }
            }

            function L(t, e) {
                return t === e ? De : fe(t) >= fe(e) ? t > 0 ? Ve : Me : e > 0 ? xe : be
            }

            function F(t, e, n) {
                n || (n = Ne);
                var i = e[n[0]] - t[n[0]],
                    r = e[n[1]] - t[n[1]];
                return Math.sqrt(i * i + r * r)
            }

            function P(t, e, n) {
                n || (n = Ne);
                var i = e[n[0]] - t[n[0]],
                    r = e[n[1]] - t[n[1]];
                return 180 * Math.atan2(r, i) / Math.PI
            }

            function N(t, e) {
                return P(e[1], e[0], ze) - P(t[1], t[0], ze)
            }

            function z(t, e) {
                return F(e[0], e[1], ze) / F(t[0], t[1], ze)
            }

            function X() {
                this.evEl = Ue, this.evWin = We, this.allow = !0, this.pressed = !1, R.apply(this, arguments)
            }

            function U() {
                this.evEl = He, this.evWin = je, R.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
            }

            function W() {
                this.evTarget = Ge, this.evWin = Be, this.started = !1, R.apply(this, arguments)
            }

            function Y(t, e) {
                var n = S(t.touches),
                    i = S(t.changedTouches);
                return e & (Oe | Ae) && (n = y(n.concat(i), "identifier", !0)), [n, i]
            }

            function q() {
                this.evTarget = $e, this.targetIds = {}, R.apply(this, arguments)
            }

            function H(t, e) {
                var n = S(t.touches),
                    i = this.targetIds;
                if (e & (Re | Ce) && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
                var r, s, o = S(t.changedTouches),
                    a = [],
                    u = this.target;
                if (s = n.filter(function(t) {
                        return m(t.target, u)
                    }), e === Re)
                    for (r = 0; r < s.length;) i[s[r].identifier] = !0, r++;
                for (r = 0; r < o.length;) i[o[r].identifier] && a.push(o[r]), e & (Oe | Ae) && delete i[o[r].identifier], r++;
                return a.length ? [y(s.concat(a), "identifier", !0), a] : void 0
            }

            function j() {
                R.apply(this, arguments);
                var t = l(this.handler, this);
                this.touch = new q(this.manager, t), this.mouse = new X(this.manager, t)
            }

            function k(t, e) {
                this.manager = t, this.set(e)
            }

            function G(t) {
                if (v(t, nn)) return nn;
                var e = v(t, rn),
                    n = v(t, sn);
                return e && n ? rn + " " + sn : e || n ? e ? rn : sn : v(t, en) ? en : tn
            }

            function B(t) {
                this.id = w(), this.manager = null, this.options = h(t || {}, this.defaults), this.options.enable = f(this.options.enable, !0), this.state = on, this.simultaneous = {}, this.requireFail = []
            }

            function Z(t) {
                return t & ln ? "cancel" : t & hn ? "end" : t & un ? "move" : t & an ? "start" : ""
            }

            function $(t) {
                return t == be ? "down" : t == xe ? "up" : t == Ve ? "left" : t == Me ? "right" : ""
            }

            function J(t, e) {
                var n = e.manager;
                return n ? n.get(t) : t
            }

            function K() {
                B.apply(this, arguments)
            }

            function Q() {
                K.apply(this, arguments), this.pX = null, this.pY = null
            }

            function te() {
                K.apply(this, arguments)
            }

            function ee() {
                B.apply(this, arguments), this._timer = null, this._input = null
            }

            function ne() {
                K.apply(this, arguments)
            }

            function ie() {
                K.apply(this, arguments)
            }

            function re() {
                B.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
            }

            function se(t, e) {
                return e = e || {}, e.recognizers = f(e.recognizers, se.defaults.preset), new oe(t, e)
            }

            function oe(t, e) {
                e = e || {}, this.options = h(e, se.defaults), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = t, this.input = C(this), this.touchAction = new k(this, this.options.touchAction), ae(this, !0), a(e.recognizers, function(t) {
                    var e = this.add(new t[0](t[1]));
                    t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
                }, this)
            }

            function ae(t, e) {
                var n = t.element;
                a(t.options.cssProps, function(t, i) {
                    n.style[E(n.style, i)] = e ? t : ""
                })
            }

            function ue(t, e) {
                var i = n.createEvent("Event");
                i.initEvent(t, !0, !0), i.gesture = e, e.target.dispatchEvent(i)
            }
            var he = ["", "webkit", "moz", "MS", "ms", "o"],
                ce = n.createElement("div"),
                le = "function",
                pe = Math.round,
                fe = Math.abs,
                de = Date.now,
                ge = 1,
                me = /mobile|tablet|ip(ad|hone|od)|android/i,
                ve = "ontouchstart" in t,
                _e = E(t, "PointerEvent") !== r,
                Te = ve && me.test(navigator.userAgent),
                Se = "touch",
                ye = "pen",
                Ee = "mouse",
                we = "kinect",
                Ie = 25,
                Re = 1,
                Ce = 2,
                Oe = 4,
                Ae = 8,
                De = 1,
                Ve = 2,
                Me = 4,
                xe = 8,
                be = 16,
                Le = Ve | Me,
                Fe = xe | be,
                Pe = Le | Fe,
                Ne = ["x", "y"],
                ze = ["clientX", "clientY"];
            R.prototype = {
                handler: function() {},
                init: function() {
                    this.evEl && d(this.element, this.evEl, this.domHandler), this.evTarget && d(this.target, this.evTarget, this.domHandler), this.evWin && d(I(this.element), this.evWin, this.domHandler)
                },
                destroy: function() {
                    this.evEl && g(this.element, this.evEl, this.domHandler), this.evTarget && g(this.target, this.evTarget, this.domHandler), this.evWin && g(I(this.element), this.evWin, this.domHandler)
                }
            };
            var Xe = {
                    mousedown: Re,
                    mousemove: Ce,
                    mouseup: Oe
                },
                Ue = "mousedown",
                We = "mousemove mouseup";
            c(X, R, {
                handler: function(t) {
                    var e = Xe[t.type];
                    e & Re && 0 === t.button && (this.pressed = !0), e & Ce && 1 !== t.which && (e = Oe), this.pressed && this.allow && (e & Oe && (this.pressed = !1), this.callback(this.manager, e, {
                        pointers: [t],
                        changedPointers: [t],
                        pointerType: Ee,
                        srcEvent: t
                    }))
                }
            });
            var Ye = {
                    pointerdown: Re,
                    pointermove: Ce,
                    pointerup: Oe,
                    pointercancel: Ae,
                    pointerout: Ae
                },
                qe = {
                    2: Se,
                    3: ye,
                    4: Ee,
                    5: we
                },
                He = "pointerdown",
                je = "pointermove pointerup pointercancel";
            t.MSPointerEvent && (He = "MSPointerDown", je = "MSPointerMove MSPointerUp MSPointerCancel"), c(U, R, {
                handler: function(t) {
                    var e = this.store,
                        n = !1,
                        i = t.type.toLowerCase().replace("ms", ""),
                        r = Ye[i],
                        s = qe[t.pointerType] || t.pointerType,
                        o = s == Se,
                        a = T(e, t.pointerId, "pointerId");
                    r & Re && (0 === t.button || o) ? 0 > a && (e.push(t), a = e.length - 1) : r & (Oe | Ae) && (n = !0), 0 > a || (e[a] = t, this.callback(this.manager, r, {
                        pointers: e,
                        changedPointers: [t],
                        pointerType: s,
                        srcEvent: t
                    }), n && e.splice(a, 1))
                }
            });
            var ke = {
                    touchstart: Re,
                    touchmove: Ce,
                    touchend: Oe,
                    touchcancel: Ae
                },
                Ge = "touchstart",
                Be = "touchstart touchmove touchend touchcancel";
            c(W, R, {
                handler: function(t) {
                    var e = ke[t.type];
                    if (e === Re && (this.started = !0), this.started) {
                        var n = Y.call(this, t, e);
                        e & (Oe | Ae) && n[0].length - n[1].length === 0 && (this.started = !1), this.callback(this.manager, e, {
                            pointers: n[0],
                            changedPointers: n[1],
                            pointerType: Se,
                            srcEvent: t
                        })
                    }
                }
            });
            var Ze = {
                    touchstart: Re,
                    touchmove: Ce,
                    touchend: Oe,
                    touchcancel: Ae
                },
                $e = "touchstart touchmove touchend touchcancel";
            c(q, R, {
                handler: function(t) {
                    var e = Ze[t.type],
                        n = H.call(this, t, e);
                    n && this.callback(this.manager, e, {
                        pointers: n[0],
                        changedPointers: n[1],
                        pointerType: Se,
                        srcEvent: t
                    })
                }
            }), c(j, R, {
                handler: function(t, e, n) {
                    var i = n.pointerType == Se,
                        r = n.pointerType == Ee;
                    if (i) this.mouse.allow = !1;
                    else if (r && !this.mouse.allow) return;
                    e & (Oe | Ae) && (this.mouse.allow = !0), this.callback(t, e, n)
                },
                destroy: function() {
                    this.touch.destroy(), this.mouse.destroy()
                }
            });
            var Je = E(ce.style, "touchAction"),
                Ke = Je !== r,
                Qe = "compute",
                tn = "auto",
                en = "manipulation",
                nn = "none",
                rn = "pan-x",
                sn = "pan-y";
            k.prototype = {
                set: function(t) {
                    t == Qe && (t = this.compute()), Ke && (this.manager.element.style[Je] = t), this.actions = t.toLowerCase().trim()
                },
                update: function() {
                    this.set(this.manager.options.touchAction)
                },
                compute: function() {
                    var t = [];
                    return a(this.manager.recognizers, function(e) {
                        p(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                    }), G(t.join(" "))
                },
                preventDefaults: function(t) {
                    if (!Ke) {
                        var e = t.srcEvent,
                            n = t.offsetDirection;
                        if (this.manager.session.prevented) return void e.preventDefault();
                        var i = this.actions,
                            r = v(i, nn),
                            s = v(i, sn),
                            o = v(i, rn);
                        return r || s && n & Le || o && n & Fe ? this.preventSrc(e) : void 0
                    }
                },
                preventSrc: function(t) {
                    this.manager.session.prevented = !0, t.preventDefault()
                }
            };
            var on = 1,
                an = 2,
                un = 4,
                hn = 8,
                cn = hn,
                ln = 16,
                pn = 32;
            B.prototype = {
                defaults: {},
                set: function(t) {
                    return u(this.options, t), this.manager && this.manager.touchAction.update(), this
                },
                recognizeWith: function(t) {
                    if (o(t, "recognizeWith", this)) return this;
                    var e = this.simultaneous;
                    return t = J(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
                },
                dropRecognizeWith: function(t) {
                    return o(t, "dropRecognizeWith", this) ? this : (t = J(t, this), delete this.simultaneous[t.id], this)
                },
                requireFailure: function(t) {
                    if (o(t, "requireFailure", this)) return this;
                    var e = this.requireFail;
                    return t = J(t, this), -1 === T(e, t) && (e.push(t), t.requireFailure(this)), this
                },
                dropRequireFailure: function(t) {
                    if (o(t, "dropRequireFailure", this)) return this;
                    t = J(t, this);
                    var e = T(this.requireFail, t);
                    return e > -1 && this.requireFail.splice(e, 1), this
                },
                hasRequireFailures: function() {
                    return this.requireFail.length > 0
                },
                canRecognizeWith: function(t) {
                    return !!this.simultaneous[t.id]
                },
                emit: function(t) {
                    function e(e) {
                        n.manager.emit(n.options.event + (e ? Z(i) : ""), t)
                    }
                    var n = this,
                        i = this.state;
                    hn > i && e(!0), e(), i >= hn && e(!0)
                },
                tryEmit: function(t) {
                    return this.canEmit() ? this.emit(t) : void(this.state = pn)
                },
                canEmit: function() {
                    for (var t = 0; t < this.requireFail.length;) {
                        if (!(this.requireFail[t].state & (pn | on))) return !1;
                        t++
                    }
                    return !0
                },
                recognize: function(t) {
                    var e = u({}, t);
                    return p(this.options.enable, [this, e]) ? (this.state & (cn | ln | pn) && (this.state = on), this.state = this.process(e), void(this.state & (an | un | hn | ln) && this.tryEmit(e))) : (this.reset(), void(this.state = pn))
                },
                process: function() {},
                getTouchAction: function() {},
                reset: function() {}
            }, c(K, B, {
                defaults: {
                    pointers: 1
                },
                attrTest: function(t) {
                    var e = this.options.pointers;
                    return 0 === e || t.pointers.length === e
                },
                process: function(t) {
                    var e = this.state,
                        n = t.eventType,
                        i = e & (an | un),
                        r = this.attrTest(t);
                    return i && (n & Ae || !r) ? e | ln : i || r ? n & Oe ? e | hn : e & an ? e | un : an : pn
                }
            }), c(Q, K, {
                defaults: {
                    event: "pan",
                    threshold: 10,
                    pointers: 1,
                    direction: Pe
                },
                getTouchAction: function() {
                    var t = this.options.direction,
                        e = [];
                    return t & Le && e.push(sn), t & Fe && e.push(rn), e
                },
                directionTest: function(t) {
                    var e = this.options,
                        n = !0,
                        i = t.distance,
                        r = t.direction,
                        s = t.deltaX,
                        o = t.deltaY;
                    return r & e.direction || (e.direction & Le ? (r = 0 === s ? De : 0 > s ? Ve : Me, n = s != this.pX, i = Math.abs(t.deltaX)) : (r = 0 === o ? De : 0 > o ? xe : be, n = o != this.pY, i = Math.abs(t.deltaY))), t.direction = r, n && i > e.threshold && r & e.direction
                },
                attrTest: function(t) {
                    return K.prototype.attrTest.call(this, t) && (this.state & an || !(this.state & an) && this.directionTest(t))
                },
                emit: function(t) {
                    this.pX = t.deltaX, this.pY = t.deltaY;
                    var e = $(t.direction);
                    e && this.manager.emit(this.options.event + e, t), this._super.emit.call(this, t)
                }
            }), c(te, K, {
                defaults: {
                    event: "pinch",
                    threshold: 0,
                    pointers: 2
                },
                getTouchAction: function() {
                    return [nn]
                },
                attrTest: function(t) {
                    return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & an)
                },
                emit: function(t) {
                    if (this._super.emit.call(this, t), 1 !== t.scale) {
                        var e = t.scale < 1 ? "in" : "out";
                        this.manager.emit(this.options.event + e, t)
                    }
                }
            }), c(ee, B, {
                defaults: {
                    event: "press",
                    pointers: 1,
                    time: 500,
                    threshold: 5
                },
                getTouchAction: function() {
                    return [tn]
                },
                process: function(t) {
                    var e = this.options,
                        n = t.pointers.length === e.pointers,
                        i = t.distance < e.threshold,
                        r = t.deltaTime > e.time;
                    if (this._input = t, !i || !n || t.eventType & (Oe | Ae) && !r) this.reset();
                    else if (t.eventType & Re) this.reset(), this._timer = s(function() {
                        this.state = cn, this.tryEmit()
                    }, e.time, this);
                    else if (t.eventType & Oe) return cn;
                    return pn
                },
                reset: function() {
                    clearTimeout(this._timer)
                },
                emit: function(t) {
                    this.state === cn && (t && t.eventType & Oe ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = de(), this.manager.emit(this.options.event, this._input)))
                }
            }), c(ne, K, {
                defaults: {
                    event: "rotate",
                    threshold: 0,
                    pointers: 2
                },
                getTouchAction: function() {
                    return [nn]
                },
                attrTest: function(t) {
                    return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & an)
                }
            }), c(ie, K, {
                defaults: {
                    event: "swipe",
                    threshold: 10,
                    velocity: .65,
                    direction: Le | Fe,
                    pointers: 1
                },
                getTouchAction: function() {
                    return Q.prototype.getTouchAction.call(this)
                },
                attrTest: function(t) {
                    var e, n = this.options.direction;
                    return n & (Le | Fe) ? e = t.velocity : n & Le ? e = t.velocityX : n & Fe && (e = t.velocityY), this._super.attrTest.call(this, t) && n & t.direction && t.distance > this.options.threshold && fe(e) > this.options.velocity && t.eventType & Oe
                },
                emit: function(t) {
                    var e = $(t.direction);
                    e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
                }
            }), c(re, B, {
                defaults: {
                    event: "tap",
                    pointers: 1,
                    taps: 1,
                    interval: 300,
                    time: 250,
                    threshold: 2,
                    posThreshold: 10
                },
                getTouchAction: function() {
                    return [en]
                },
                process: function(t) {
                    var e = this.options,
                        n = t.pointers.length === e.pointers,
                        i = t.distance < e.threshold,
                        r = t.deltaTime < e.time;
                    if (this.reset(), t.eventType & Re && 0 === this.count) return this.failTimeout();
                    if (i && r && n) {
                        if (t.eventType != Oe) return this.failTimeout();
                        var o = this.pTime ? t.timeStamp - this.pTime < e.interval : !0,
                            a = !this.pCenter || F(this.pCenter, t.center) < e.posThreshold;
                        this.pTime = t.timeStamp, this.pCenter = t.center, a && o ? this.count += 1 : this.count = 1, this._input = t;
                        var u = this.count % e.taps;
                        if (0 === u) return this.hasRequireFailures() ? (this._timer = s(function() {
                            this.state = cn, this.tryEmit()
                        }, e.interval, this), an) : cn
                    }
                    return pn
                },
                failTimeout: function() {
                    return this._timer = s(function() {
                        this.state = pn
                    }, this.options.interval, this), pn
                },
                reset: function() {
                    clearTimeout(this._timer)
                },
                emit: function() {
                    this.state == cn && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
                }
            }), se.VERSION = "2.0.4", se.defaults = {
                domEvents: !1,
                touchAction: Qe,
                enable: !0,
                inputTarget: null,
                inputClass: null,
                preset: [
                    [ne, {
                        enable: !1
                    }],
                    [te, {
                            enable: !1
                        },
                        ["rotate"]
                    ],
                    [ie, {
                        direction: Le
                    }],
                    [Q, {
                            direction: Le
                        },
                        ["swipe"]
                    ],
                    [re],
                    [re, {
                            event: "doubletap",
                            taps: 2
                        },
                        ["tap"]
                    ],
                    [ee]
                ],
                cssProps: {
                    userSelect: "none",
                    touchSelect: "none",
                    touchCallout: "none",
                    contentZooming: "none",
                    userDrag: "none",
                    tapHighlightColor: "rgba(0,0,0,0)"
                }
            };
            var fn = 1,
                dn = 2;
            oe.prototype = {
                set: function(t) {
                    return u(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
                },
                stop: function(t) {
                    this.session.stopped = t ? dn : fn
                },
                recognize: function(t) {
                    var e = this.session;
                    if (!e.stopped) {
                        this.touchAction.preventDefaults(t);
                        var n, i = this.recognizers,
                            r = e.curRecognizer;
                        (!r || r && r.state & cn) && (r = e.curRecognizer = null);
                        for (var s = 0; s < i.length;) n = i[s], e.stopped === dn || r && n != r && !n.canRecognizeWith(r) ? n.reset() : n.recognize(t), !r && n.state & (an | un | hn) && (r = e.curRecognizer = n), s++
                    }
                },
                get: function(t) {
                    if (t instanceof B) return t;
                    for (var e = this.recognizers, n = 0; n < e.length; n++)
                        if (e[n].options.event == t) return e[n];
                    return null
                },
                add: function(t) {
                    if (o(t, "add", this)) return this;
                    var e = this.get(t.options.event);
                    return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
                },
                remove: function(t) {
                    if (o(t, "remove", this)) return this;
                    var e = this.recognizers;
                    return t = this.get(t), e.splice(T(e, t), 1), this.touchAction.update(), this
                },
                on: function(t, e) {
                    var n = this.handlers;
                    return a(_(t), function(t) {
                        n[t] = n[t] || [], n[t].push(e)
                    }), this
                },
                off: function(t, e) {
                    var n = this.handlers;
                    return a(_(t), function(t) {
                        e ? n[t].splice(T(n[t], e), 1) : delete n[t]
                    }), this
                },
                emit: function(t, e) {
                    this.options.domEvents && ue(t, e);
                    var n = this.handlers[t] && this.handlers[t].slice();
                    if (n && n.length) {
                        e.type = t, e.preventDefault = function() {
                            e.srcEvent.preventDefault()
                        };
                        for (var i = 0; i < n.length;) n[i](e), i++
                    }
                },
                destroy: function() {
                    this.element && ae(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
                }
            }, u(se, {
                INPUT_START: Re,
                INPUT_MOVE: Ce,
                INPUT_END: Oe,
                INPUT_CANCEL: Ae,
                STATE_POSSIBLE: on,
                STATE_BEGAN: an,
                STATE_CHANGED: un,
                STATE_ENDED: hn,
                STATE_RECOGNIZED: cn,
                STATE_CANCELLED: ln,
                STATE_FAILED: pn,
                DIRECTION_NONE: De,
                DIRECTION_LEFT: Ve,
                DIRECTION_RIGHT: Me,
                DIRECTION_UP: xe,
                DIRECTION_DOWN: be,
                DIRECTION_HORIZONTAL: Le,
                DIRECTION_VERTICAL: Fe,
                DIRECTION_ALL: Pe,
                Manager: oe,
                Input: R,
                TouchAction: k,
                TouchInput: q,
                MouseInput: X,
                PointerEventInput: U,
                TouchMouseInput: j,
                SingleTouchInput: W,
                Recognizer: B,
                AttrRecognizer: K,
                Tap: re,
                Pan: Q,
                Swipe: ie,
                Pinch: te,
                Rotate: ne,
                Press: ee,
                on: d,
                off: g,
                each: a,
                merge: h,
                extend: u,
                inherit: c,
                bindFn: l,
                prefixed: E
            }), typeof define == le && define.amd ? define(function() {
                return se
            }) : "undefined" != typeof e && e.exports ? e.exports = se : t[i] = se
        }(window, document, "Hammer")
    }, {}],
    4: [function(t, e, n) {
        (function(t) {
            ! function() {
                function e(t, e) {
                    var n = t.indexOf(e); - 1 != n && t.splice(n, 1)
                }
                var i = {},
                    r = i.util = {},
                    s = Array.prototype.concat,
                    o = Array.prototype.slice;
                r.bind = function(t, e) {
                    return args = o.call(arguments, 2),
                        function() {
                            t.apply(e, s.call(args, o.call(arguments)))
                        }
                }, r.extend = function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                var a = i.SpringSystem = function(t) {
                    this._springRegistry = {}, this._activeSprings = [], this.listeners = [], this._idleSpringIndices = [], this.looper = t || new l, this.looper.springSystem = this
                };
                r.extend(a.prototype, {
                    _springRegistry: null,
                    _isIdle: !0,
                    _lastTimeMillis: -1,
                    _activeSprings: null,
                    listeners: null,
                    _idleSpringIndices: null,
                    setLooper: function(t) {
                        this.looper = t, t.springSystem = this
                    },
                    createSpring: function(t, e) {
                        var n = new u(this);
                        if (this.registerSpring(n), "undefined" == typeof t || "undefined" == typeof e) n.setSpringConfig(c.DEFAULT_ORIGAMI_SPRING_CONFIG);
                        else {
                            var i = c.fromOrigamiTensionAndFriction(t, e);
                            n.setSpringConfig(i)
                        }
                        return n
                    },
                    getIsIdle: function() {
                        return this._isIdle
                    },
                    getSpringById: function(t) {
                        return this._springRegistry[t]
                    },
                    getAllSprings: function() {
                        var t = [];
                        for (var e in this._springRegistry) this._springRegistry.hasOwnProperty(e) && t.push(this._springRegistry[e]);
                        return t
                    },
                    registerSpring: function(t) {
                        this._springRegistry[t.getId()] = t
                    },
                    deregisterSpring: function(t) {
                        e(this._activeSprings, t), delete this._springRegistry[t.getId()]
                    },
                    advance: function(t, e) {
                        for (; this._idleSpringIndices.length > 0;) this._idleSpringIndices.pop();
                        for (var n = 0, i = this._activeSprings.length; i > n; n++) {
                            var r = this._activeSprings[n];
                            r.systemShouldAdvance() ? r.advance(t / 1e3, e / 1e3) : this._idleSpringIndices.push(this._activeSprings.indexOf(r))
                        }
                        for (; this._idleSpringIndices.length > 0;) {
                            var s = this._idleSpringIndices.pop();
                            s >= 0 && this._activeSprings.splice(s, 1)
                        }
                    },
                    loop: function(t) {
                        var e; - 1 === this._lastTimeMillis && (this._lastTimeMillis = t - 1);
                        var n = t - this._lastTimeMillis;
                        this._lastTimeMillis = t;
                        var i = 0,
                            r = this.listeners.length;
                        for (i = 0; r > i; i++) {
                            var e = this.listeners[i];
                            e.onBeforeIntegrate && e.onBeforeIntegrate(this)
                        }
                        for (this.advance(t, n), 0 === this._activeSprings.length && (this._isIdle = !0, this._lastTimeMillis = -1), i = 0; r > i; i++) {
                            var e = this.listeners[i];
                            e.onAfterIntegrate && e.onAfterIntegrate(this)
                        }
                        this._isIdle || this.looper.run()
                    },
                    activateSpring: function(t) {
                        var e = this._springRegistry[t]; - 1 == this._activeSprings.indexOf(e) && this._activeSprings.push(e), this.getIsIdle() && (this._isIdle = !1, this.looper.run())
                    },
                    addListener: function(t) {
                        this.listeners.push(t)
                    },
                    removeListener: function(t) {
                        e(this.listeners, t)
                    },
                    removeAllListeners: function() {
                        this.listeners = []
                    }
                });
                var u = i.Spring = function m(t) {
                    this._id = "s" + m._ID++, this._springSystem = t, this.listeners = [], this._currentState = new h, this._previousState = new h, this._tempState = new h
                };
                r.extend(u, {
                    _ID: 0,
                    MAX_DELTA_TIME_SEC: .064,
                    SOLVER_TIMESTEP_SEC: .001
                }), r.extend(u.prototype, {
                    _id: 0,
                    _springConfig: null,
                    _overshootClampingEnabled: !1,
                    _currentState: null,
                    _previousState: null,
                    _tempState: null,
                    _startValue: 0,
                    _endValue: 0,
                    _wasAtRest: !0,
                    _restSpeedThreshold: .001,
                    _displacementFromRestThreshold: .001,
                    listeners: null,
                    _timeAccumulator: 0,
                    _springSystem: null,
                    destroy: function() {
                        this.listeners = [], this.frames = [], this._springSystem.deregisterSpring(this)
                    },
                    getId: function() {
                        return this._id
                    },
                    setSpringConfig: function(t) {
                        return this._springConfig = t, this
                    },
                    getSpringConfig: function() {
                        return this._springConfig
                    },
                    setCurrentValue: function(t, e) {
                        return this._startValue = t, this._currentState.position = t, e || this.setAtRest(), this.notifyPositionUpdated(!1, !1), this
                    },
                    getStartValue: function() {
                        return this._startValue
                    },
                    getCurrentValue: function() {
                        return this._currentState.position
                    },
                    getCurrentDisplacementDistance: function() {
                        return this.getDisplacementDistanceForState(this._currentState)
                    },
                    getDisplacementDistanceForState: function(t) {
                        return Math.abs(this._endValue - t.position)
                    },
                    setEndValue: function(t) {
                        if (this._endValue == t && this.isAtRest()) return this;
                        this._startValue = this.getCurrentValue(), this._endValue = t, this._springSystem.activateSpring(this.getId());
                        for (var e = 0, n = this.listeners.length; n > e; e++) {
                            var i = this.listeners[e];
                            i.onSpringEndStateChange && i.onSpringEndStateChange(this)
                        }
                        return this
                    },
                    getEndValue: function() {
                        return this._endValue
                    },
                    setVelocity: function(t) {
                        return t === this._currentState.velocity ? this : (this._currentState.velocity = t, this._springSystem.activateSpring(this.getId()), this)
                    },
                    getVelocity: function() {
                        return this._currentState.velocity
                    },
                    setRestSpeedThreshold: function(t) {
                        return this._restSpeedThreshold = t, this
                    },
                    getRestSpeedThreshold: function() {
                        return this._restSpeedThreshold
                    },
                    setRestDisplacementThreshold: function(t) {
                        this._displacementFromRestThreshold = t
                    },
                    getRestDisplacementThreshold: function() {
                        return this._displacementFromRestThreshold
                    },
                    setOvershootClampingEnabled: function(t) {
                        return this._overshootClampingEnabled = t, this
                    },
                    isOvershootClampingEnabled: function() {
                        return this._overshootClampingEnabled
                    },
                    isOvershooting: function() {
                        return this._springConfig.tension > 0 && (this._startValue < this._endValue && this.getCurrentValue() > this._endValue || this._startValue > this._endValue && this.getCurrentValue() < this._endValue)
                    },
                    advance: function(t, e) {
                        var n = this.isAtRest();
                        if (!n || !this._wasAtRest) {
                            var i = e;
                            e > u.MAX_DELTA_TIME_SEC && (i = u.MAX_DELTA_TIME_SEC), this._timeAccumulator += i;
                            for (var r, s, o, a, h, c, l, p, f, d, g = this._springConfig.tension, m = this._springConfig.friction, v = this._currentState.position, _ = this._currentState.velocity, T = this._tempState.position, S = this._tempState.velocity; this._timeAccumulator >= u.SOLVER_TIMESTEP_SEC;) this._timeAccumulator -= u.SOLVER_TIMESTEP_SEC, this._timeAccumulator < u.SOLVER_TIMESTEP_SEC && (this._previousState.position = v, this._previousState.velocity = _), r = _, s = g * (this._endValue - T) - m * _, T = v + r * u.SOLVER_TIMESTEP_SEC * .5, S = _ + s * u.SOLVER_TIMESTEP_SEC * .5, o = S, a = g * (this._endValue - T) - m * S, T = v + o * u.SOLVER_TIMESTEP_SEC * .5, S = _ + a * u.SOLVER_TIMESTEP_SEC * .5, h = S, c = g * (this._endValue - T) - m * S, T = v + h * u.SOLVER_TIMESTEP_SEC * .5, S = _ + c * u.SOLVER_TIMESTEP_SEC * .5, l = S, p = g * (this._endValue - T) - m * S, f = 1 / 6 * (r + 2 * (o + h) + l), d = 1 / 6 * (s + 2 * (a + c) + p), v += f * u.SOLVER_TIMESTEP_SEC, _ += d * u.SOLVER_TIMESTEP_SEC;
                            this._tempState.position = T, this._tempState.velocity = S, this._currentState.position = v, this._currentState.velocity = _, this._timeAccumulator > 0 && this.interpolate(this._timeAccumulator / u.SOLVER_TIMESTEP_SEC), (this.isAtRest() || this._overshootClampingEnabled && this.isOvershooting()) && (this._springConfig.tension > 0 ? (this._startValue = this._endValue, this._currentState.position = this._endValue) : (this._endValue = this._currentState.position, this._startValue = this._endValue), this.setVelocity(0), n = !0);
                            var y = !1;
                            this._wasAtRest && (this._wasAtRest = !1, y = !0);
                            var E = !1;
                            n && (this._wasAtRest = !0, E = !0), this.notifyPositionUpdated(y, E)
                        }
                    },
                    notifyPositionUpdated: function(t, e) {
                        for (var n = 0, i = this.listeners.length; i > n; n++) {
                            var r = this.listeners[n];
                            t && r.onSpringActivate && r.onSpringActivate(this), r.onSpringUpdate && r.onSpringUpdate(this), e && r.onSpringAtRest && r.onSpringAtRest(this)
                        }
                    },
                    systemShouldAdvance: function() {
                        return !this.isAtRest() || !this.wasAtRest()
                    },
                    wasAtRest: function() {
                        return this._wasAtRest
                    },
                    isAtRest: function() {
                        return Math.abs(this._currentState.velocity) < this._restSpeedThreshold && (this.getDisplacementDistanceForState(this._currentState) <= this._displacementFromRestThreshold || 0 === this._springConfig.tension)
                    },
                    setAtRest: function() {
                        return this._endValue = this._currentState.position, this._tempState.position = this._currentState.position, this._currentState.velocity = 0, this
                    },
                    interpolate: function(t) {
                        this._currentState.position = this._currentState.position * t + this._previousState.position * (1 - t), this._currentState.velocity = this._currentState.velocity * t + this._previousState.velocity * (1 - t)
                    },
                    getListeners: function() {
                        return this.listeners
                    },
                    addListener: function(t) {
                        return this.listeners.push(t), this
                    },
                    removeListener: function(t) {
                        return e(this.listeners, t), this
                    },
                    removeAllListeners: function() {
                        return this.listeners = [], this
                    },
                    currentValueIsApproximately: function(t) {
                        return Math.abs(this.getCurrentValue() - t) <= this.getRestDisplacementThreshold()
                    }
                });
                var h = function() {};
                r.extend(h.prototype, {
                    position: 0,
                    velocity: 0
                });
                var c = i.SpringConfig = function(t, e) {
                        this.tension = t, this.friction = e
                    },
                    l = i.AnimationLooper = function() {
                        this.springSystem = null;
                        var t = this,
                            e = function() {
                                t.springSystem.loop(Date.now())
                            };
                        this.run = function() {
                            r.onFrame(e)
                        }
                    },
                    p = (i.SimulationLooper = function(t) {
                        this.springSystem = null;
                        var e = 0,
                            n = !1;
                        t = t || 16.667, this.run = function() {
                            if (!n) {
                                for (n = !0; !this.springSystem.getIsIdle();) this.springSystem.loop(e += t);
                                n = !1
                            }
                        }
                    }, i.SteppingSimulationLooper = function() {
                        this.springSystem = null;
                        var t = 0;
                        this.run = function() {}, this.step = function(e) {
                            this.springSystem.loop(t += e)
                        }
                    }, i.OrigamiValueConverter = {
                        tensionFromOrigamiValue: function(t) {
                            return 3.62 * (t - 30) + 194
                        },
                        origamiValueFromTension: function(t) {
                            return (t - 194) / 3.62 + 30
                        },
                        frictionFromOrigamiValue: function(t) {
                            return 3 * (t - 8) + 25
                        },
                        origamiFromFriction: function(t) {
                            return (t - 25) / 3 + 8
                        }
                    });
                r.extend(c, {
                    fromOrigamiTensionAndFriction: function(t, e) {
                        return new c(p.tensionFromOrigamiValue(t), p.frictionFromOrigamiValue(e))
                    },
                    coastingConfigWithOrigamiFriction: function(t) {
                        return new c(0, p.frictionFromOrigamiValue(t))
                    }
                }), c.DEFAULT_ORIGAMI_SPRING_CONFIG = c.fromOrigamiTensionAndFriction(40, 7), r.extend(c.prototype, {
                    friction: 0,
                    tension: 0
                });
                var f = {};
                r.hexToRGB = function(t) {
                    if (f[t]) return f[t];
                    t = t.replace("#", ""), 3 === t.length && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
                    var e = t.match(/.{2}/g),
                        t = {
                            r: parseInt(e[0], 16),
                            g: parseInt(e[1], 16),
                            b: parseInt(e[2], 16)
                        };
                    return f[t] = t, t
                }, r.rgbToHex = function(t, e, n) {
                    return t = t.toString(16), e = e.toString(16), n = n.toString(16), t = t.length < 2 ? "0" + t : t, e = e.length < 2 ? "0" + e : e, n = n.length < 2 ? "0" + n : n, "#" + t + e + n
                };
                var d = i.MathUtil = {
                    mapValueInRange: function(t, e, n, i, r) {
                        var s = n - e,
                            o = r - i,
                            a = (t - e) / s;
                        return i + a * o
                    },
                    interpolateColor: function(t, e, n, i, s, o) {
                        i = "undefined" == typeof i ? 0 : i, s = "undefined" == typeof s ? 1 : s;
                        var e = r.hexToRGB(e),
                            n = r.hexToRGB(n),
                            a = Math.floor(r.mapValueInRange(t, i, s, e.r, n.r)),
                            u = Math.floor(r.mapValueInRange(t, i, s, e.g, n.g)),
                            h = Math.floor(r.mapValueInRange(t, i, s, e.b, n.b));
                        return o ? "rgb(" + a + "," + u + "," + h + ")" : r.rgbToHex(a, u, h)
                    },
                    degreesToRadians: function(t) {
                        return t * Math.PI / 180
                    },
                    radiansToDegrees: function(t) {
                        return 180 * t / Math.PI
                    }
                };
                r.extend(r, d);
                var g;
                "undefined" != typeof window && (g = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame), g || "undefined" == typeof t || "node" !== t.title || (g = setImmediate), r.onFrame = function(t) {
                    return g(t)
                }, "undefined" != typeof n ? r.extend(n, i) : "undefined" != typeof window && (window.rebound = i)
            }()
        }).call(this, t("_process"))
    }, {
        _process: 2
    }],
    5: [function(t, e) {
        (function(t) {
            function n() {
                var t = {},
                    e = {};
                return t.on = function(t, n) {
                    var i = {
                        name: t,
                        handler: n
                    };
                    return e[t] = e[t] || [], e[t].unshift(i), i
                }, t.off = function(t) {
                    var n = e[t.name].indexOf(t); - 1 != n && e[t.name].splice(n, 1)
                }, t.trigger = function(t, n) {
                    var i, r = e[t];
                    if (r)
                        for (i = r.length; i--;) r[i].handler(n)
                }, t
            }
            t.gajus = t.gajus || {}, t.gajus.Sister = n, e.exports = n
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    6: [function(t, e) {
        "use strict";

        function n(t) {
            return t in h ? h[t] : h[t] = i(t)
        }

        function i(t) {
            var e, n = t.replace(/-([a-z])/g, function(t, e) {
                    return e.toUpperCase()
                }),
                i = a.length;
            if (void 0 !== o[n]) return n;
            for (n = r(t); i--;)
                if (e = a[i] + n, void 0 !== o[e]) return e;
            throw new Error("unable to prefix " + t)
        }

        function r(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        }

        function s(t) {
            var e = n(t),
                i = /([A-Z])/g;
            return i.test(e) && (e = (u.test(e) ? "-" : "") + e.replace(i, "-$1")), e.toLowerCase()
        }
        var o = document.createElement("p").style,
            a = "O ms Moz webkit".split(" "),
            u = /^(o|ms|moz|webkit)/,
            h = {};
        e.exports = n, e.exports.dash = s
    }, {}],
    7: [function(t, e) {
        (function(n) {
            "use strict";
            var i, r, s = t("sister"),
                o = t("hammerjs"),
                a = t("rebound"),
                u = t("vendor-prefix"),
                h = t("./dom.js"),
                c = {};
            c.randomInt = function(t, e) {
                return Math.floor(Math.random() * (e - t + 1)) + t
            }, i = function l(t, e) {
                var i, u, h, c, p, f, d, g, m, v, _, T;
                return this instanceof l ? (i = this, u = l.config(t.config()), h = s(), c = t.springSystem(), p = c.createSpring(250, 10), f = c.createSpring(500, 20), d = {}, g = {
                    x: 0,
                    y: 0
                }, p.setRestSpeedThreshold(.05), p.setRestDisplacementThreshold(.05), f.setRestSpeedThreshold(.05), f.setRestDisplacementThreshold(.05), m = u.throwOutDistance(u.minThrowOutDistance, u.maxThrowOutDistance), T = new o.Manager(e, {
                    recognizers: [
                        [o.Pan, {
                            threshold: 2
                        }]
                    ]
                }), /* l.appendToParent(e),*/ l.insertBelow(e), h.on("_panstart", function() {
                    l.appendToParent(e), h.trigger("dragstart", {
                        target: e
                    })
                }), h.on("_panmove", function(t) {
                    var n = g.x + t.deltaX,
                        i = g.y + t.deltaY,
                        r = u.rotation(n, i, e, u.maxRotation);
                    u.transform(e, n, i, r), h.trigger("dragmove", {
                        target: e,
                        throwOutConfidence: u.throwOutConfidence(n, e),
                        throwDirection: 0 > n ? l.DIRECTION_LEFT : l.DIRECTION_RIGHT
                    })
                }), h.on("_panend", function(t) {
                    var n = g.x + t.deltaX,
                        r = g.y + t.deltaY;
                    u.isThrowOut(n, e, u.throwOutConfidence(n, e)) ? i.throwOut(n, r) : i.throwIn(n, r), h.trigger("dragend", {
                        target: e
                    })
                }), r() ? (e.addEventListener("touchstart", function() {
                    h.trigger("_panstart")
                }), function() {
                    var t;
                    e.addEventListener("touchstart", function() {
                        t = !0
                    }), e.addEventListener("touchend", function() {
                        t = !1
                    }), n.addEventListener("touchmove", function(e) {
                        t && e.preventDefault()
                    })
                }()) : e.addEventListener("mousedown", function() {
                    h.trigger("_panstart")
                }), T.on("panmove", function(t) {
                    h.trigger("_panmove", t)
                }), T.on("panend", function(t) {
                    h.trigger("_panend", t)
                }), p.addListener({
                    onSpringUpdate: function(t) {
                        var e = t.getCurrentValue(),
                            n = a.MathUtil.mapValueInRange(e, 0, 1, d.fromX, 0),
                            i = a.MathUtil.mapValueInRange(e, 0, 1, d.fromY, 0);
                        v(n, i)
                    },
                    onSpringAtRest: function() {
                        h.trigger("throwinend", {
                            target: e
                        })
                    }
                }), f.addListener({
                    onSpringUpdate: function(t) {
                        var e = t.getCurrentValue(),
                            n = a.MathUtil.mapValueInRange(e, 0, 1, d.fromX, m * d.direction),
                            i = d.fromY;
                        v(n, i)
                    },
                    onSpringAtRest: function() {
                        h.trigger("throwoutend", {
                            target: e
                        })
                    }
                }), v = function(t, n) {
                    var i = u.rotation(t, n, e, u.maxRotation);
                    g.x = t, g.y = n, l.transform(e, t, n, i)
                }, i.on = h.on, i._trigger = h.trigger, i.throwIn = function(t, e) {
                    _(l.THROW_IN, t, e)
                }, i.throwOut = function(t, e) {
                    _(l.THROW_OUT, t, e)
                }, i.destroy = function() {
                    T.destroy(), p.destroy(), f.destroy(), t._destroyCard(i)
                }, _ = function(t, n, i) {
                    if (d.fromX = n, d.fromY = i, d.direction = d.fromX < 0 ? l.DIRECTION_LEFT : l.DIRECTION_RIGHT, t === l.THROW_IN) p.setCurrentValue(0).setAtRest().setEndValue(1), h.trigger("throwin", {
                        target: e,
                        throwDirection: d.direction
                    });
                    else {
                        if (t !== l.THROW_OUT) throw new Error("Invalid throw event.");
                        f.setCurrentValue(0).setAtRest().setVelocity(100).setEndValue(1), h.trigger("throwout", {
                            target: e,
                            throwDirection: d.direction
                        }), d.direction === l.DIRECTION_LEFT ? h.trigger("throwoutleft", {
                            target: e,
                            throwDirection: d.direction
                        }) : h.trigger("throwoutright", {
                            target: e,
                            throwDirection: d.direction
                        })
                    }
                }, i) : new l(t, e)
            }, i.config = function(t) {
                return t = t || {}, t.isThrowOut = t.isThrowOut ? t.isThrowOut : i.isThrowOut, t.throwOutConfidence = t.throwOutConfidence ? t.throwOutConfidence : i.throwOutConfidence, t.throwOutDistance = t.throwOutDistance ? t.throwOutDistance : i.throwOutDistance, t.minThrowOutDistance = t.minThrowOutDistance ? t.minThrowOutDistance : 400, t.maxThrowOutDistance = t.maxThrowOutDistance ? t.maxThrowOutDistance : 500, t.rotation = t.rotation ? t.rotation : i.rotation, t.maxRotation = t.maxRotation ? t.maxRotation : 20, t.transform = t.transform ? t.transform : i.transform, t
            }, i.transform = function(t, e, n, i) {
                t.style[u("transform")] = "translate3d(0, 0, 0) translate(" + e + "px, " + n + "px) rotate(" + i + "deg)"
            }, i.appendToParent = function(t) {
                var e = t.parentNode,
                    n = h.elementChildren(e),
                    i = n.indexOf(t);
                i + 1 !== n.length && (e.removeChild(t), e.appendChild(t))
            }, i.insertBelow = function(t) {
                var e = t.parentNode;
                e.removeChild(t);
                e.insertBefore(t,e.firstChild);
                console.log("card insert");
            }, i.throwOutConfidence = function(t, e) {
                return Math.min(Math.abs(t) / e.offsetWidth, 1)
            }, i.isThrowOut = function(t, e, n) {
                return 1 === n
            }, i.throwOutDistance = function(t, e) {
                return c.randomInt(t, e)
            }, i.rotation = function(t, e, n, i) {
                var r = Math.min(Math.max(t / n.offsetWidth, -1), 1),
                    s = (e > 0 ? 1 : -1) * Math.min(Math.abs(e) / 100, 1),
                    o = r * s * i;
                return o
            }, r = function() {
                return "ontouchstart" in window || navigator.msMaxTouchPoints
            }, i.DIRECTION_LEFT = -1, i.DIRECTION_RIGHT = 1, i.THROW_IN = "in", i.THROW_OUT = "out", e.exports = i
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./dom.js": 8,
        hammerjs: 3,
        rebound: 4,
        sister: 5,
        "vendor-prefix": 6
    }],
    8: [function(t, e) {
        "use strict";
        var n = {};
        n.elementChildren = function(t) {
            for (var e = t.childNodes, n = [], i = e.length; i--;) 1 === e[i].nodeType && n.unshift(e[i]);
            return n
        }, e.exports = n
    }, {}],
    9: [function(t, e) {
        "use strict";
        var n, i = t("sister"),
            r = t("rebound"),
            s = t("./card.js");
        n = function o(t) {
            var e, n, a, u;
            return this instanceof o ? (e = this, n = new r.SpringSystem, a = i(), u = [], e.config = function() {
                return t
            }, e.springSystem = function() {
                return n
            }, e.on = function(t, e) {
                a.on(t, e)
            }, e.createCard = function(t) {
                var e = s(this, t),
                    n = ["throwout", "throwoutend", "throwoutleft", "throwoutright", "throwin", "throwinend", "dragstart", "dragmove", "dragend"];
                return n.forEach(function(t) {
                    e.on(t, function(e) {
                        a.trigger(t, e)
                    })
                }), u.push({
                    element: t,
                    card: e
                }), e
            }, e.getCard = function(t) {
                for (var e = u.length; e--;)
                    if (u[e].element === t) return u[e].card;
                return null
            }, e._destroyCard = function(t) {
                for (var e = u.length; e--;)
                    if (u[e].card === t) {
                        u.splice(e, 1);
                        break
                    }
            }, e) : new o(t)
        }, e.exports = n
    }, {
        "./card.js": 7,
        rebound: 4,
        sister: 5
    }]
}, {}, [1]);
//# sourceMappingURL=swing.min.js.map