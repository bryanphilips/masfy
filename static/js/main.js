/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

( () => {
    var u = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t),
    t.exports);
    var Hi = u( () => {
        window.tram = function(e) {
            function t(f, T) {
                var A = new d.Bare;
                return A.init(f, T)
            }
            function r(f) {
                return f.replace(/[A-Z]/g, function(T) {
                    return "-" + T.toLowerCase()
                })
            }
            function n(f) {
                var T = parseInt(f.slice(1), 16)
                  , A = T >> 16 & 255
                  , L = T >> 8 & 255
                  , S = 255 & T;
                return [A, L, S]
            }
            function o(f, T, A) {
                return "#" + (1 << 24 | f << 16 | T << 8 | A).toString(16).slice(1)
            }
            function i() {}
            function a(f, T) {
                g("Type warning: Expected: [" + f + "] Got: [" + typeof T + "] " + T)
            }
            function s(f, T, A) {
                g("Units do not match [" + f + "]: " + T + ", " + A)
            }
            function c(f, T, A) {
                if (T !== void 0 && (A = T),
                f === void 0)
                    return A;
                var L = A;
                return xe.test(f) || !Fe.test(f) ? L = parseInt(f, 10) : Fe.test(f) && (L = 1e3 * parseFloat(f)),
                0 > L && (L = 0),
                L === L ? L : A
            }
            function g(f) {
                ne.debug && window && window.console.warn(f)
            }
            function y(f) {
                for (var T = -1, A = f ? f.length : 0, L = []; ++T < A; ) {
                    var S = f[T];
                    S && L.push(S)
                }
                return L
            }
            var p = function(f, T, A) {
                function L(se) {
                    return typeof se == "object"
                }
                function S(se) {
                    return typeof se == "function"
                }
                function q() {}
                function te(se, me) {
                    function Q() {
                        var Ge = new de;
                        return S(Ge.init) && Ge.init.apply(Ge, arguments),
                        Ge
                    }
                    function de() {}
                    me === A && (me = se,
                    se = Object),
                    Q.Bare = de;
                    var pe, we = q[f] = se[f], ut = de[f] = Q[f] = new q;
                    return ut.constructor = Q,
                    Q.mixin = function(Ge) {
                        return de[f] = Q[f] = te(Q, Ge)[f],
                        Q
                    }
                    ,
                    Q.open = function(Ge) {
                        if (pe = {},
                        S(Ge) ? pe = Ge.call(Q, ut, we, Q, se) : L(Ge) && (pe = Ge),
                        L(pe))
                            for (var Ar in pe)
                                T.call(pe, Ar) && (ut[Ar] = pe[Ar]);
                        return S(ut.init) || (ut.init = se),
                        Q
                    }
                    ,
                    Q.open(me)
                }
                return te
            }("prototype", {}.hasOwnProperty)
              , I = {
                ease: ["ease", function(f, T, A, L) {
                    var S = (f /= L) * f
                      , q = S * f;
                    return T + A * (-2.75 * q * S + 11 * S * S + -15.5 * q + 8 * S + .25 * f)
                }
                ],
                "ease-in": ["ease-in", function(f, T, A, L) {
                    var S = (f /= L) * f
                      , q = S * f;
                    return T + A * (-1 * q * S + 3 * S * S + -3 * q + 2 * S)
                }
                ],
                "ease-out": ["ease-out", function(f, T, A, L) {
                    var S = (f /= L) * f
                      , q = S * f;
                    return T + A * (.3 * q * S + -1.6 * S * S + 2.2 * q + -1.8 * S + 1.9 * f)
                }
                ],
                "ease-in-out": ["ease-in-out", function(f, T, A, L) {
                    var S = (f /= L) * f
                      , q = S * f;
                    return T + A * (2 * q * S + -5 * S * S + 2 * q + 2 * S)
                }
                ],
                linear: ["linear", function(f, T, A, L) {
                    return A * f / L + T
                }
                ],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(f, T, A, L) {
                    return A * (f /= L) * f + T
                }
                ],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(f, T, A, L) {
                    return -A * (f /= L) * (f - 2) + T
                }
                ],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(f, T, A, L) {
                    return (f /= L / 2) < 1 ? A / 2 * f * f + T : -A / 2 * (--f * (f - 2) - 1) + T
                }
                ],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(f, T, A, L) {
                    return A * (f /= L) * f * f + T
                }
                ],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(f, T, A, L) {
                    return A * ((f = f / L - 1) * f * f + 1) + T
                }
                ],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(f, T, A, L) {
                    return (f /= L / 2) < 1 ? A / 2 * f * f * f + T : A / 2 * ((f -= 2) * f * f + 2) + T
                }
                ],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(f, T, A, L) {
                    return A * (f /= L) * f * f * f + T
                }
                ],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(f, T, A, L) {
                    return -A * ((f = f / L - 1) * f * f * f - 1) + T
                }
                ],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(f, T, A, L) {
                    return (f /= L / 2) < 1 ? A / 2 * f * f * f * f + T : -A / 2 * ((f -= 2) * f * f * f - 2) + T
                }
                ],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(f, T, A, L) {
                    return A * (f /= L) * f * f * f * f + T
                }
                ],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(f, T, A, L) {
                    return A * ((f = f / L - 1) * f * f * f * f + 1) + T
                }
                ],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(f, T, A, L) {
                    return (f /= L / 2) < 1 ? A / 2 * f * f * f * f * f + T : A / 2 * ((f -= 2) * f * f * f * f + 2) + T
                }
                ],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(f, T, A, L) {
                    return -A * Math.cos(f / L * (Math.PI / 2)) + A + T
                }
                ],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(f, T, A, L) {
                    return A * Math.sin(f / L * (Math.PI / 2)) + T
                }
                ],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(f, T, A, L) {
                    return -A / 2 * (Math.cos(Math.PI * f / L) - 1) + T
                }
                ],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(f, T, A, L) {
                    return f === 0 ? T : A * Math.pow(2, 10 * (f / L - 1)) + T
                }
                ],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(f, T, A, L) {
                    return f === L ? T + A : A * (-Math.pow(2, -10 * f / L) + 1) + T
                }
                ],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(f, T, A, L) {
                    return f === 0 ? T : f === L ? T + A : (f /= L / 2) < 1 ? A / 2 * Math.pow(2, 10 * (f - 1)) + T : A / 2 * (-Math.pow(2, -10 * --f) + 2) + T
                }
                ],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(f, T, A, L) {
                    return -A * (Math.sqrt(1 - (f /= L) * f) - 1) + T
                }
                ],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(f, T, A, L) {
                    return A * Math.sqrt(1 - (f = f / L - 1) * f) + T
                }
                ],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(f, T, A, L) {
                    return (f /= L / 2) < 1 ? -A / 2 * (Math.sqrt(1 - f * f) - 1) + T : A / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + T
                }
                ],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(f, T, A, L, S) {
                    return S === void 0 && (S = 1.70158),
                    A * (f /= L) * f * ((S + 1) * f - S) + T
                }
                ],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(f, T, A, L, S) {
                    return S === void 0 && (S = 1.70158),
                    A * ((f = f / L - 1) * f * ((S + 1) * f + S) + 1) + T
                }
                ],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(f, T, A, L, S) {
                    return S === void 0 && (S = 1.70158),
                    (f /= L / 2) < 1 ? A / 2 * f * f * (((S *= 1.525) + 1) * f - S) + T : A / 2 * ((f -= 2) * f * (((S *= 1.525) + 1) * f + S) + 2) + T
                }
                ]
            }
              , _ = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            }
              , m = document
              , b = window
              , C = "bkwld-tram"
              , x = /[\-\.0-9]/g
              , N = /[A-Z]/
              , R = "number"
              , M = /^(rgb|#)/
              , D = /(em|cm|mm|in|pt|pc|px)$/
              , F = /(em|cm|mm|in|pt|pc|px|%)$/
              , j = /(deg|rad|turn)$/
              , $ = "unitless"
              , J = /(all|none) 0s ease 0s/
              , ae = /^(width|height)$/
              , re = " "
              , W = m.createElement("a")
              , O = ["Webkit", "Moz", "O", "ms"]
              , U = ["-webkit-", "-moz-", "-o-", "-ms-"]
              , k = function(f) {
                if (f in W.style)
                    return {
                        dom: f,
                        css: f
                    };
                var T, A, L = "", S = f.split("-");
                for (T = 0; T < S.length; T++)
                    L += S[T].charAt(0).toUpperCase() + S[T].slice(1);
                for (T = 0; T < O.length; T++)
                    if (A = O[T] + L,
                    A in W.style)
                        return {
                            dom: A,
                            css: U[T] + f
                        }
            }
              , H = t.support = {
                bind: Function.prototype.bind,
                transform: k("transform"),
                transition: k("transition"),
                backface: k("backface-visibility"),
                timing: k("transition-timing-function")
            };
            if (H.transition) {
                var ee = H.timing.dom;
                if (W.style[ee] = I["ease-in-back"][0],
                !W.style[ee])
                    for (var ie in _)
                        I[ie][0] = _[ie]
            }
            var V = t.frame = function() {
                var f = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame;
                return f && H.bind ? f.bind(b) : function(T) {
                    b.setTimeout(T, 16)
                }
            }()
              , K = t.now = function() {
                var f = b.performance
                  , T = f && (f.now || f.webkitNow || f.msNow || f.mozNow);
                return T && H.bind ? T.bind(f) : Date.now || function() {
                    return +new Date
                }
            }()
              , v = p(function(f) {
                function T(oe, he) {
                    var Te = y(("" + oe).split(re))
                      , ge = Te[0];
                    he = he || {};
                    var Ue = z[ge];
                    if (!Ue)
                        return g("Unsupported property: " + ge);
                    if (!he.weak || !this.props[ge]) {
                        var $e = Ue[0]
                          , He = this.props[ge];
                        return He || (He = this.props[ge] = new $e.Bare),
                        He.init(this.$el, Te, Ue, he),
                        He
                    }
                }
                function A(oe, he, Te) {
                    if (oe) {
                        var ge = typeof oe;
                        if (he || (this.timer && this.timer.destroy(),
                        this.queue = [],
                        this.active = !1),
                        ge == "number" && he)
                            return this.timer = new Y({
                                duration: oe,
                                context: this,
                                complete: q
                            }),
                            void (this.active = !0);
                        if (ge == "string" && he) {
                            switch (oe) {
                            case "hide":
                                Q.call(this);
                                break;
                            case "stop":
                                te.call(this);
                                break;
                            case "redraw":
                                de.call(this);
                                break;
                            default:
                                T.call(this, oe, Te && Te[1])
                            }
                            return q.call(this)
                        }
                        if (ge == "function")
                            return void oe.call(this, this);
                        if (ge == "object") {
                            var Ue = 0;
                            ut.call(this, oe, function(Se, Ly) {
                                Se.span > Ue && (Ue = Se.span),
                                Se.stop(),
                                Se.animate(Ly)
                            }, function(Se) {
                                "wait"in Se && (Ue = c(Se.wait, 0))
                            }),
                            we.call(this),
                            Ue > 0 && (this.timer = new Y({
                                duration: Ue,
                                context: this
                            }),
                            this.active = !0,
                            he && (this.timer.complete = q));
                            var $e = this
                              , He = !1
                              , pn = {};
                            V(function() {
                                ut.call($e, oe, function(Se) {
                                    Se.active && (He = !0,
                                    pn[Se.name] = Se.nextStyle)
                                }),
                                He && $e.$el.css(pn)
                            })
                        }
                    }
                }
                function L(oe) {
                    oe = c(oe, 0),
                    this.active ? this.queue.push({
                        options: oe
                    }) : (this.timer = new Y({
                        duration: oe,
                        context: this,
                        complete: q
                    }),
                    this.active = !0)
                }
                function S(oe) {
                    return this.active ? (this.queue.push({
                        options: oe,
                        args: arguments
                    }),
                    void (this.timer.complete = q)) : g("No active transition timer. Use start() or wait() before then().")
                }
                function q() {
                    if (this.timer && this.timer.destroy(),
                    this.active = !1,
                    this.queue.length) {
                        var oe = this.queue.shift();
                        A.call(this, oe.options, !0, oe.args)
                    }
                }
                function te(oe) {
                    this.timer && this.timer.destroy(),
                    this.queue = [],
                    this.active = !1;
                    var he;
                    typeof oe == "string" ? (he = {},
                    he[oe] = 1) : he = typeof oe == "object" && oe != null ? oe : this.props,
                    ut.call(this, he, Ge),
                    we.call(this)
                }
                function se(oe) {
                    te.call(this, oe),
                    ut.call(this, oe, Ar, Cy)
                }
                function me(oe) {
                    typeof oe != "string" && (oe = "block"),
                    this.el.style.display = oe
                }
                function Q() {
                    te.call(this),
                    this.el.style.display = "none"
                }
                function de() {
                    this.el.offsetHeight
                }
                function pe() {
                    te.call(this),
                    e.removeData(this.el, C),
                    this.$el = this.el = null
                }
                function we() {
                    var oe, he, Te = [];
                    this.upstream && Te.push(this.upstream);
                    for (oe in this.props)
                        he = this.props[oe],
                        he.active && Te.push(he.string);
                    Te = Te.join(","),
                    this.style !== Te && (this.style = Te,
                    this.el.style[H.transition.dom] = Te)
                }
                function ut(oe, he, Te) {
                    var ge, Ue, $e, He, pn = he !== Ge, Se = {};
                    for (ge in oe)
                        $e = oe[ge],
                        ge in ve ? (Se.transform || (Se.transform = {}),
                        Se.transform[ge] = $e) : (N.test(ge) && (ge = r(ge)),
                        ge in z ? Se[ge] = $e : (He || (He = {}),
                        He[ge] = $e));
                    for (ge in Se) {
                        if ($e = Se[ge],
                        Ue = this.props[ge],
                        !Ue) {
                            if (!pn)
                                continue;
                            Ue = T.call(this, ge)
                        }
                        he.call(this, Ue, $e)
                    }
                    Te && He && Te.call(this, He)
                }
                function Ge(oe) {
                    oe.stop()
                }
                function Ar(oe, he) {
                    oe.set(he)
                }
                function Cy(oe) {
                    this.$el.css(oe)
                }
                function Qe(oe, he) {
                    f[oe] = function() {
                        return this.children ? Ny.call(this, he, arguments) : (this.el && he.apply(this, arguments),
                        this)
                    }
                }
                function Ny(oe, he) {
                    var Te, ge = this.children.length;
                    for (Te = 0; ge > Te; Te++)
                        oe.apply(this.children[Te], he);
                    return this
                }
                f.init = function(oe) {
                    if (this.$el = e(oe),
                    this.el = this.$el[0],
                    this.props = {},
                    this.queue = [],
                    this.style = "",
                    this.active = !1,
                    ne.keepInherited && !ne.fallback) {
                        var he = B(this.el, "transition");
                        he && !J.test(he) && (this.upstream = he)
                    }
                    H.backface && ne.hideBackface && E(this.el, H.backface.css, "hidden")
                }
                ,
                Qe("add", T),
                Qe("start", A),
                Qe("wait", L),
                Qe("then", S),
                Qe("next", q),
                Qe("stop", te),
                Qe("set", se),
                Qe("show", me),
                Qe("hide", Q),
                Qe("redraw", de),
                Qe("destroy", pe)
            })
              , d = p(v, function(f) {
                function T(A, L) {
                    var S = e.data(A, C) || e.data(A, C, new v.Bare);
                    return S.el || S.init(A),
                    L ? S.start(L) : S
                }
                f.init = function(A, L) {
                    var S = e(A);
                    if (!S.length)
                        return this;
                    if (S.length === 1)
                        return T(S[0], L);
                    var q = [];
                    return S.each(function(te, se) {
                        q.push(T(se, L))
                    }),
                    this.children = q,
                    this
                }
            })
              , h = p(function(f) {
                function T() {
                    var q = this.get();
                    this.update("auto");
                    var te = this.get();
                    return this.update(q),
                    te
                }
                function A(q, te, se) {
                    return te !== void 0 && (se = te),
                    q in I ? q : se
                }
                function L(q) {
                    var te = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(q);
                    return (te ? o(te[1], te[2], te[3]) : q).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var S = {
                    duration: 500,
                    ease: "ease",
                    delay: 0
                };
                f.init = function(q, te, se, me) {
                    this.$el = q,
                    this.el = q[0];
                    var Q = te[0];
                    se[2] && (Q = se[2]),
                    Z[Q] && (Q = Z[Q]),
                    this.name = Q,
                    this.type = se[1],
                    this.duration = c(te[1], this.duration, S.duration),
                    this.ease = A(te[2], this.ease, S.ease),
                    this.delay = c(te[3], this.delay, S.delay),
                    this.span = this.duration + this.delay,
                    this.active = !1,
                    this.nextStyle = null,
                    this.auto = ae.test(this.name),
                    this.unit = me.unit || this.unit || ne.defaultUnit,
                    this.angle = me.angle || this.angle || ne.defaultAngle,
                    ne.fallback || me.fallback ? this.animate = this.fallback : (this.animate = this.transition,
                    this.string = this.name + re + this.duration + "ms" + (this.ease != "ease" ? re + I[this.ease][0] : "") + (this.delay ? re + this.delay + "ms" : ""))
                }
                ,
                f.set = function(q) {
                    q = this.convert(q, this.type),
                    this.update(q),
                    this.redraw()
                }
                ,
                f.transition = function(q) {
                    this.active = !0,
                    q = this.convert(q, this.type),
                    this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()),
                    this.redraw()),
                    q == "auto" && (q = T.call(this))),
                    this.nextStyle = q
                }
                ,
                f.fallback = function(q) {
                    var te = this.el.style[this.name] || this.convert(this.get(), this.type);
                    q = this.convert(q, this.type),
                    this.auto && (te == "auto" && (te = this.convert(this.get(), this.type)),
                    q == "auto" && (q = T.call(this))),
                    this.tween = new w({
                        from: te,
                        to: q,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                f.get = function() {
                    return B(this.el, this.name)
                }
                ,
                f.update = function(q) {
                    E(this.el, this.name, q)
                }
                ,
                f.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1,
                    this.nextStyle = null,
                    E(this.el, this.name, this.get()));
                    var q = this.tween;
                    q && q.context && q.destroy()
                }
                ,
                f.convert = function(q, te) {
                    if (q == "auto" && this.auto)
                        return q;
                    var se, me = typeof q == "number", Q = typeof q == "string";
                    switch (te) {
                    case R:
                        if (me)
                            return q;
                        if (Q && q.replace(x, "") === "")
                            return +q;
                        se = "number(unitless)";
                        break;
                    case M:
                        if (Q) {
                            if (q === "" && this.original)
                                return this.original;
                            if (te.test(q))
                                return q.charAt(0) == "#" && q.length == 7 ? q : L(q)
                        }
                        se = "hex or rgb string";
                        break;
                    case D:
                        if (me)
                            return q + this.unit;
                        if (Q && te.test(q))
                            return q;
                        se = "number(px) or string(unit)";
                        break;
                    case F:
                        if (me)
                            return q + this.unit;
                        if (Q && te.test(q))
                            return q;
                        se = "number(px) or string(unit or %)";
                        break;
                    case j:
                        if (me)
                            return q + this.angle;
                        if (Q && te.test(q))
                            return q;
                        se = "number(deg) or string(angle)";
                        break;
                    case $:
                        if (me || Q && F.test(q))
                            return q;
                        se = "number(unitless) or string(unit or %)"
                    }
                    return a(se, q),
                    q
                }
                ,
                f.redraw = function() {
                    this.el.offsetHeight
                }
            })
              , l = p(h, function(f, T) {
                f.init = function() {
                    T.init.apply(this, arguments),
                    this.original || (this.original = this.convert(this.get(), M))
                }
            })
              , P = p(h, function(f, T) {
                f.init = function() {
                    T.init.apply(this, arguments),
                    this.animate = this.fallback
                }
                ,
                f.get = function() {
                    return this.$el[this.name]()
                }
                ,
                f.update = function(A) {
                    this.$el[this.name](A)
                }
            })
              , X = p(h, function(f, T) {
                function A(L, S) {
                    var q, te, se, me, Q;
                    for (q in L)
                        me = ve[q],
                        se = me[0],
                        te = me[1] || q,
                        Q = this.convert(L[q], se),
                        S.call(this, te, Q, se)
                }
                f.init = function() {
                    T.init.apply(this, arguments),
                    this.current || (this.current = {},
                    ve.perspective && ne.perspective && (this.current.perspective = ne.perspective,
                    E(this.el, this.name, this.style(this.current)),
                    this.redraw()))
                }
                ,
                f.set = function(L) {
                    A.call(this, L, function(S, q) {
                        this.current[S] = q
                    }),
                    E(this.el, this.name, this.style(this.current)),
                    this.redraw()
                }
                ,
                f.transition = function(L) {
                    var S = this.values(L);
                    this.tween = new fe({
                        current: this.current,
                        values: S,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var q, te = {};
                    for (q in this.current)
                        te[q] = q in S ? S[q] : this.current[q];
                    this.active = !0,
                    this.nextStyle = this.style(te)
                }
                ,
                f.fallback = function(L) {
                    var S = this.values(L);
                    this.tween = new fe({
                        current: this.current,
                        values: S,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                f.update = function() {
                    E(this.el, this.name, this.style(this.current))
                }
                ,
                f.style = function(L) {
                    var S, q = "";
                    for (S in L)
                        q += S + "(" + L[S] + ") ";
                    return q
                }
                ,
                f.values = function(L) {
                    var S, q = {};
                    return A.call(this, L, function(te, se, me) {
                        q[te] = se,
                        this.current[te] === void 0 && (S = 0,
                        ~te.indexOf("scale") && (S = 1),
                        this.current[te] = this.convert(S, me))
                    }),
                    q
                }
            })
              , w = p(function(f) {
                function T(Q) {
                    se.push(Q) === 1 && V(A)
                }
                function A() {
                    var Q, de, pe, we = se.length;
                    if (we)
                        for (V(A),
                        de = K(),
                        Q = we; Q--; )
                            pe = se[Q],
                            pe && pe.render(de)
                }
                function L(Q) {
                    var de, pe = e.inArray(Q, se);
                    pe >= 0 && (de = se.slice(pe + 1),
                    se.length = pe,
                    de.length && (se = se.concat(de)))
                }
                function S(Q) {
                    return Math.round(Q * me) / me
                }
                function q(Q, de, pe) {
                    return o(Q[0] + pe * (de[0] - Q[0]), Q[1] + pe * (de[1] - Q[1]), Q[2] + pe * (de[2] - Q[2]))
                }
                var te = {
                    ease: I.ease[1],
                    from: 0,
                    to: 1
                };
                f.init = function(Q) {
                    this.duration = Q.duration || 0,
                    this.delay = Q.delay || 0;
                    var de = Q.ease || te.ease;
                    I[de] && (de = I[de][1]),
                    typeof de != "function" && (de = te.ease),
                    this.ease = de,
                    this.update = Q.update || i,
                    this.complete = Q.complete || i,
                    this.context = Q.context || this,
                    this.name = Q.name;
                    var pe = Q.from
                      , we = Q.to;
                    pe === void 0 && (pe = te.from),
                    we === void 0 && (we = te.to),
                    this.unit = Q.unit || "",
                    typeof pe == "number" && typeof we == "number" ? (this.begin = pe,
                    this.change = we - pe) : this.format(we, pe),
                    this.value = this.begin + this.unit,
                    this.start = K(),
                    Q.autoplay !== !1 && this.play()
                }
                ,
                f.play = function() {
                    this.active || (this.start || (this.start = K()),
                    this.active = !0,
                    T(this))
                }
                ,
                f.stop = function() {
                    this.active && (this.active = !1,
                    L(this))
                }
                ,
                f.render = function(Q) {
                    var de, pe = Q - this.start;
                    if (this.delay) {
                        if (pe <= this.delay)
                            return;
                        pe -= this.delay
                    }
                    if (pe < this.duration) {
                        var we = this.ease(pe, 0, 1, this.duration);
                        return de = this.startRGB ? q(this.startRGB, this.endRGB, we) : S(this.begin + we * this.change),
                        this.value = de + this.unit,
                        void this.update.call(this.context, this.value)
                    }
                    de = this.endHex || this.begin + this.change,
                    this.value = de + this.unit,
                    this.update.call(this.context, this.value),
                    this.complete.call(this.context),
                    this.destroy()
                }
                ,
                f.format = function(Q, de) {
                    if (de += "",
                    Q += "",
                    Q.charAt(0) == "#")
                        return this.startRGB = n(de),
                        this.endRGB = n(Q),
                        this.endHex = Q,
                        this.begin = 0,
                        void (this.change = 1);
                    if (!this.unit) {
                        var pe = de.replace(x, "")
                          , we = Q.replace(x, "");
                        pe !== we && s("tween", de, Q),
                        this.unit = pe
                    }
                    de = parseFloat(de),
                    Q = parseFloat(Q),
                    this.begin = this.value = de,
                    this.change = Q - de
                }
                ,
                f.destroy = function() {
                    this.stop(),
                    this.context = null,
                    this.ease = this.update = this.complete = i
                }
                ;
                var se = []
                  , me = 1e3
            })
              , Y = p(w, function(f) {
                f.init = function(T) {
                    this.duration = T.duration || 0,
                    this.complete = T.complete || i,
                    this.context = T.context,
                    this.play()
                }
                ,
                f.render = function(T) {
                    var A = T - this.start;
                    A < this.duration || (this.complete.call(this.context),
                    this.destroy())
                }
            })
              , fe = p(w, function(f, T) {
                f.init = function(A) {
                    this.context = A.context,
                    this.update = A.update,
                    this.tweens = [],
                    this.current = A.current;
                    var L, S;
                    for (L in A.values)
                        S = A.values[L],
                        this.current[L] !== S && this.tweens.push(new w({
                            name: L,
                            from: this.current[L],
                            to: S,
                            duration: A.duration,
                            delay: A.delay,
                            ease: A.ease,
                            autoplay: !1
                        }));
                    this.play()
                }
                ,
                f.render = function(A) {
                    var L, S, q = this.tweens.length, te = !1;
                    for (L = q; L--; )
                        S = this.tweens[L],
                        S.context && (S.render(A),
                        this.current[S.name] = S.value,
                        te = !0);
                    return te ? void (this.update && this.update.call(this.context)) : this.destroy()
                }
                ,
                f.destroy = function() {
                    if (T.destroy.call(this),
                    this.tweens) {
                        var A, L = this.tweens.length;
                        for (A = L; A--; )
                            this.tweens[A].destroy();
                        this.tweens = null,
                        this.current = null
                    }
                }
            })
              , ne = t.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !H.transition,
                agentTests: []
            };
            t.fallback = function(f) {
                if (!H.transition)
                    return ne.fallback = !0;
                ne.agentTests.push("(" + f + ")");
                var T = new RegExp(ne.agentTests.join("|"),"i");
                ne.fallback = T.test(navigator.userAgent)
            }
            ,
            t.fallback("6.0.[2-5] Safari"),
            t.tween = function(f) {
                return new w(f)
            }
            ,
            t.delay = function(f, T, A) {
                return new Y({
                    complete: T,
                    duration: f,
                    context: A
                })
            }
            ,
            e.fn.tram = function(f) {
                return t.call(null, this, f)
            }
            ;
            var E = e.style
              , B = e.css
              , Z = {
                transform: H.transform && H.transform.css
            }
              , z = {
                color: [l, M],
                background: [l, M, "background-color"],
                "outline-color": [l, M],
                "border-color": [l, M],
                "border-top-color": [l, M],
                "border-right-color": [l, M],
                "border-bottom-color": [l, M],
                "border-left-color": [l, M],
                "border-width": [h, D],
                "border-top-width": [h, D],
                "border-right-width": [h, D],
                "border-bottom-width": [h, D],
                "border-left-width": [h, D],
                "border-spacing": [h, D],
                "letter-spacing": [h, D],
                margin: [h, D],
                "margin-top": [h, D],
                "margin-right": [h, D],
                "margin-bottom": [h, D],
                "margin-left": [h, D],
                padding: [h, D],
                "padding-top": [h, D],
                "padding-right": [h, D],
                "padding-bottom": [h, D],
                "padding-left": [h, D],
                "outline-width": [h, D],
                opacity: [h, R],
                top: [h, F],
                right: [h, F],
                bottom: [h, F],
                left: [h, F],
                "font-size": [h, F],
                "text-indent": [h, F],
                "word-spacing": [h, F],
                width: [h, F],
                "min-width": [h, F],
                "max-width": [h, F],
                height: [h, F],
                "min-height": [h, F],
                "max-height": [h, F],
                "line-height": [h, $],
                "scroll-top": [P, R, "scrollTop"],
                "scroll-left": [P, R, "scrollLeft"]
            }
              , ve = {};
            H.transform && (z.transform = [X],
            ve = {
                x: [F, "translateX"],
                y: [F, "translateY"],
                rotate: [j],
                rotateX: [j],
                rotateY: [j],
                scale: [R],
                scaleX: [R],
                scaleY: [R],
                skew: [j],
                skewX: [j],
                skewY: [j]
            }),
            H.transform && H.backface && (ve.z = [F, "translateZ"],
            ve.rotateZ = [j],
            ve.scaleZ = [R],
            ve.perspective = [D]);
            var xe = /ms/
              , Fe = /s|\./;
            return e.tram = t
        }(window.jQuery)
    }
    );
    var Ns = u( (QV, Cs) => {
        var Py = window.$
          , qy = Hi() && Py.tram;
        Cs.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {}
              , r = Array.prototype
              , n = Object.prototype
              , o = Function.prototype
              , i = r.push
              , a = r.slice
              , s = r.concat
              , c = n.toString
              , g = n.hasOwnProperty
              , y = r.forEach
              , p = r.map
              , I = r.reduce
              , _ = r.reduceRight
              , m = r.filter
              , b = r.every
              , C = r.some
              , x = r.indexOf
              , N = r.lastIndexOf
              , R = Array.isArray
              , M = Object.keys
              , D = o.bind
              , F = e.each = e.forEach = function(O, U, k) {
                if (O == null)
                    return O;
                if (y && O.forEach === y)
                    O.forEach(U, k);
                else if (O.length === +O.length) {
                    for (var H = 0, ee = O.length; H < ee; H++)
                        if (U.call(k, O[H], H, O) === t)
                            return
                } else
                    for (var ie = e.keys(O), H = 0, ee = ie.length; H < ee; H++)
                        if (U.call(k, O[ie[H]], ie[H], O) === t)
                            return;
                return O
            }
            ;
            e.map = e.collect = function(O, U, k) {
                var H = [];
                return O == null ? H : p && O.map === p ? O.map(U, k) : (F(O, function(ee, ie, V) {
                    H.push(U.call(k, ee, ie, V))
                }),
                H)
            }
            ,
            e.find = e.detect = function(O, U, k) {
                var H;
                return j(O, function(ee, ie, V) {
                    if (U.call(k, ee, ie, V))
                        return H = ee,
                        !0
                }),
                H
            }
            ,
            e.filter = e.select = function(O, U, k) {
                var H = [];
                return O == null ? H : m && O.filter === m ? O.filter(U, k) : (F(O, function(ee, ie, V) {
                    U.call(k, ee, ie, V) && H.push(ee)
                }),
                H)
            }
            ;
            var j = e.some = e.any = function(O, U, k) {
                U || (U = e.identity);
                var H = !1;
                return O == null ? H : C && O.some === C ? O.some(U, k) : (F(O, function(ee, ie, V) {
                    if (H || (H = U.call(k, ee, ie, V)))
                        return t
                }),
                !!H)
            }
            ;
            e.contains = e.include = function(O, U) {
                return O == null ? !1 : x && O.indexOf === x ? O.indexOf(U) != -1 : j(O, function(k) {
                    return k === U
                })
            }
            ,
            e.delay = function(O, U) {
                var k = a.call(arguments, 2);
                return setTimeout(function() {
                    return O.apply(null, k)
                }, U)
            }
            ,
            e.defer = function(O) {
                return e.delay.apply(e, [O, 1].concat(a.call(arguments, 1)))
            }
            ,
            e.throttle = function(O) {
                var U, k, H;
                return function() {
                    U || (U = !0,
                    k = arguments,
                    H = this,
                    qy.frame(function() {
                        U = !1,
                        O.apply(H, k)
                    }))
                }
            }
            ,
            e.debounce = function(O, U, k) {
                var H, ee, ie, V, K, v = function() {
                    var d = e.now() - V;
                    d < U ? H = setTimeout(v, U - d) : (H = null,
                    k || (K = O.apply(ie, ee),
                    ie = ee = null))
                };
                return function() {
                    ie = this,
                    ee = arguments,
                    V = e.now();
                    var d = k && !H;
                    return H || (H = setTimeout(v, U)),
                    d && (K = O.apply(ie, ee),
                    ie = ee = null),
                    K
                }
            }
            ,
            e.defaults = function(O) {
                if (!e.isObject(O))
                    return O;
                for (var U = 1, k = arguments.length; U < k; U++) {
                    var H = arguments[U];
                    for (var ee in H)
                        O[ee] === void 0 && (O[ee] = H[ee])
                }
                return O
            }
            ,
            e.keys = function(O) {
                if (!e.isObject(O))
                    return [];
                if (M)
                    return M(O);
                var U = [];
                for (var k in O)
                    e.has(O, k) && U.push(k);
                return U
            }
            ,
            e.has = function(O, U) {
                return g.call(O, U)
            }
            ,
            e.isObject = function(O) {
                return O === Object(O)
            }
            ,
            e.now = Date.now || function() {
                return new Date().getTime()
            }
            ,
            e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var $ = /(.)^/
              , J = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }
              , ae = /\\|'|\r|\n|\u2028|\u2029/g
              , re = function(O) {
                return "\\" + J[O]
            }
              , W = /^\s*(\w|\$)+\s*$/;
            return e.template = function(O, U, k) {
                !U && k && (U = k),
                U = e.defaults({}, U, e.templateSettings);
                var H = RegExp([(U.escape || $).source, (U.interpolate || $).source, (U.evaluate || $).source].join("|") + "|$", "g")
                  , ee = 0
                  , ie = "__p+='";
                O.replace(H, function(d, h, l, P, X) {
                    return ie += O.slice(ee, X).replace(ae, re),
                    ee = X + d.length,
                    h ? ie += `'+
((__t=(` + h + `))==null?'':_.escape(__t))+
'` : l ? ie += `'+
((__t=(` + l + `))==null?'':__t)+
'` : P && (ie += `';
` + P + `
__p+='`),
                    d
                }),
                ie += `';
`;
                var V = U.variable;
                if (V) {
                    if (!W.test(V))
                        throw new Error("variable is not a bare identifier: " + V)
                } else
                    ie = `with(obj||{}){
` + ie + `}
`,
                    V = "obj";
                ie = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + ie + `return __p;
`;
                var K;
                try {
                    K = new Function(U.variable || "obj","_",ie)
                } catch (d) {
                    throw d.source = ie,
                    d
                }
                var v = function(d) {
                    return K.call(this, d, e)
                };
                return v.source = "function(" + V + `){
` + ie + "}",
                v
            }
            ,
            e
        }()
    }
    );
    var Xe = u( ($V, Us) => {
        var Ee = {}
          , Qt = {}
          , $t = []
          , ji = window.Webflow || []
          , bt = window.jQuery
          , Je = bt(window)
          , Dy = bt(document)
          , ct = bt.isFunction
          , Ze = Ee._ = Ns()
          , Ps = Ee.tram = Hi() && bt.tram
          , hn = !1
          , Ki = !1;
        Ps.config.hideBackface = !1;
        Ps.config.keepInherited = !0;
        Ee.define = function(e, t, r) {
            Qt[e] && Ds(Qt[e]);
            var n = Qt[e] = t(bt, Ze, r) || {};
            return qs(n),
            n
        }
        ;
        Ee.require = function(e) {
            return Qt[e]
        }
        ;
        function qs(e) {
            Ee.env() && (ct(e.design) && Je.on("__wf_design", e.design),
            ct(e.preview) && Je.on("__wf_preview", e.preview)),
            ct(e.destroy) && Je.on("__wf_destroy", e.destroy),
            e.ready && ct(e.ready) && My(e)
        }
        function My(e) {
            if (hn) {
                e.ready();
                return
            }
            Ze.contains($t, e.ready) || $t.push(e.ready)
        }
        function Ds(e) {
            ct(e.design) && Je.off("__wf_design", e.design),
            ct(e.preview) && Je.off("__wf_preview", e.preview),
            ct(e.destroy) && Je.off("__wf_destroy", e.destroy),
            e.ready && ct(e.ready) && Fy(e)
        }
        function Fy(e) {
            $t = Ze.filter($t, function(t) {
                return t !== e.ready
            })
        }
        Ee.push = function(e) {
            if (hn) {
                ct(e) && e();
                return
            }
            ji.push(e)
        }
        ;
        Ee.env = function(e) {
            var t = window.__wf_design
              , r = typeof t < "u";
            if (!e)
                return r;
            if (e === "design")
                return r && t;
            if (e === "preview")
                return r && !t;
            if (e === "slug")
                return r && window.__wf_slug;
            if (e === "editor")
                return window.WebflowEditor;
            if (e === "test")
                return window.__wf_test;
            if (e === "frame")
                return window !== window.top
        }
        ;
        var vn = navigator.userAgent.toLowerCase()
          , Ms = Ee.env.touch = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch
          , Gy = Ee.env.chrome = /chrome/.test(vn) && /Google/.test(navigator.vendor) && parseInt(vn.match(/chrome\/(\d+)\./)[1], 10)
          , Uy = Ee.env.ios = /(ipod|iphone|ipad)/.test(vn);
        Ee.env.safari = /safari/.test(vn) && !Gy && !Uy;
        var Bi;
        Ms && Dy.on("touchstart mousedown", function(e) {
            Bi = e.target
        });
        Ee.validClick = Ms ? function(e) {
            return e === Bi || bt.contains(e, Bi)
        }
        : function() {
            return !0
        }
        ;
        var Fs = "resize.webflow orientationchange.webflow load.webflow"
          , Xy = "scroll.webflow " + Fs;
        Ee.resize = zi(Je, Fs);
        Ee.scroll = zi(Je, Xy);
        Ee.redraw = zi();
        function zi(e, t) {
            var r = []
              , n = {};
            return n.up = Ze.throttle(function(o) {
                Ze.each(r, function(i) {
                    i(o)
                })
            }),
            e && t && e.on(t, n.up),
            n.on = function(o) {
                typeof o == "function" && (Ze.contains(r, o) || r.push(o))
            }
            ,
            n.off = function(o) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = Ze.filter(r, function(i) {
                    return i !== o
                })
            }
            ,
            n
        }
        Ee.location = function(e) {
            window.location = e
        }
        ;
        Ee.env() && (Ee.location = function() {}
        );
        Ee.ready = function() {
            hn = !0,
            Ki ? Wy() : Ze.each($t, Ls),
            Ze.each(ji, Ls),
            Ee.resize.up()
        }
        ;
        function Ls(e) {
            ct(e) && e()
        }
        function Wy() {
            Ki = !1,
            Ze.each(Qt, qs)
        }
        var Mt;
        Ee.load = function(e) {
            Mt.then(e)
        }
        ;
        function Gs() {
            Mt && (Mt.reject(),
            Je.off("load", Mt.resolve)),
            Mt = new bt.Deferred,
            Je.on("load", Mt.resolve)
        }
        Ee.destroy = function(e) {
            e = e || {},
            Ki = !0,
            Je.triggerHandler("__wf_destroy"),
            e.domready != null && (hn = e.domready),
            Ze.each(Qt, Ds),
            Ee.resize.off(),
            Ee.scroll.off(),
            Ee.redraw.off(),
            $t = [],
            ji = [],
            Mt.state() === "pending" && Gs()
        }
        ;
        bt(Ee.ready);
        Gs();
        Us.exports = window.Webflow = Ee
    }
    );
    var Vs = u( (ZV, Ws) => {
        var Xs = Xe();
        Xs.define("brand", Ws.exports = function(e) {
            var t = {}, r = document, n = e("html"), o = e("body"), i = ".w-webflow-badge", a = window.location, s = /PhantomJS/i.test(navigator.userAgent), c = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange", g;
            t.ready = function() {
                var _ = n.attr("data-wf-status")
                  , m = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(m) && a.hostname !== m && (_ = !0),
                _ && !s && (g = g || p(),
                I(),
                setTimeout(I, 500),
                e(r).off(c, y).on(c, y))
            }
            ;
            function y() {
                var _ = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(g).attr("style", _ ? "display: none !important;" : "")
            }
            function p() {
                var _ = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs")
                  , m = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt", "").css({
                    marginRight: "8px",
                    width: "16px"
                })
                  , b = e("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt", "Made in Webflow");
                return _.append(m, b),
                _[0]
            }
            function I() {
                var _ = o.children(i)
                  , m = _.length && _.get(0) === g
                  , b = Xs.env("editor");
                if (m) {
                    b && _.remove();
                    return
                }
                _.length && _.remove(),
                b || o.append(g)
            }
            return t
        }
        )
    }
    );
    var Hs = u( (JV, ks) => {
        var Yi = Xe();
        Yi.define("edit", ks.exports = function(e, t, r) {
            if (r = r || {},
            (Yi.env("test") || Yi.env("frame")) && !r.fixture && !Vy())
                return {
                    exit: 1
                };
            var n = {}, o = e(window), i = e(document.documentElement), a = document.location, s = "hashchange", c, g = r.load || I, y = !1;
            try {
                y = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            y ? g() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && g() : o.on(s, p).triggerHandler(s);
            function p() {
                c || /\?edit/.test(a.hash) && g()
            }
            function I() {
                c = !0,
                window.WebflowEditor = !0,
                o.off(s, p),
                N(function(M) {
                    e.ajax({
                        url: x("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: i.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: _(M)
                    })
                })
            }
            function _(M) {
                return function(D) {
                    if (!D) {
                        console.error("Could not load editor data");
                        return
                    }
                    D.thirdPartyCookiesSupported = M,
                    m(C(D.bugReporterScriptPath), function() {
                        m(C(D.scriptPath), function() {
                            window.WebflowEditor(D)
                        })
                    })
                }
            }
            function m(M, D) {
                e.ajax({
                    type: "GET",
                    url: M,
                    dataType: "script",
                    cache: !0
                }).then(D, b)
            }
            function b(M, D, F) {
                throw console.error("Could not load editor script: " + D),
                F
            }
            function C(M) {
                return M.indexOf("//") >= 0 ? M : x("https://editor-api.webflow.com" + M)
            }
            function x(M) {
                return M.replace(/([^:])\/\//g, "$1/")
            }
            function N(M) {
                var D = window.document.createElement("iframe");
                D.src = "https://webflow.com/site/third-party-cookie-check.html",
                D.style.display = "none",
                D.sandbox = "allow-scripts allow-same-origin";
                var F = function(j) {
                    j.data === "WF_third_party_cookies_unsupported" ? (R(D, F),
                    M(!1)) : j.data === "WF_third_party_cookies_supported" && (R(D, F),
                    M(!0))
                };
                D.onerror = function() {
                    R(D, F),
                    M(!1)
                }
                ,
                window.addEventListener("message", F, !1),
                window.document.body.appendChild(D)
            }
            function R(M, D) {
                window.removeEventListener("message", D, !1),
                M.remove()
            }
            return n
        }
        );
        function Vy() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    }
    );
    var js = u( (ek, Bs) => {
        var ky = Xe();
        ky.define("focus-visible", Bs.exports = function() {
            function e(r) {
                var n = !0
                  , o = !1
                  , i = null
                  , a = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };
                function s(R) {
                    return !!(R && R !== document && R.nodeName !== "HTML" && R.nodeName !== "BODY" && "classList"in R && "contains"in R.classList)
                }
                function c(R) {
                    var M = R.type
                      , D = R.tagName;
                    return !!(D === "INPUT" && a[M] && !R.readOnly || D === "TEXTAREA" && !R.readOnly || R.isContentEditable)
                }
                function g(R) {
                    R.getAttribute("data-wf-focus-visible") || R.setAttribute("data-wf-focus-visible", "true")
                }
                function y(R) {
                    R.getAttribute("data-wf-focus-visible") && R.removeAttribute("data-wf-focus-visible")
                }
                function p(R) {
                    R.metaKey || R.altKey || R.ctrlKey || (s(r.activeElement) && g(r.activeElement),
                    n = !0)
                }
                function I() {
                    n = !1
                }
                function _(R) {
                    s(R.target) && (n || c(R.target)) && g(R.target)
                }
                function m(R) {
                    s(R.target) && R.target.hasAttribute("data-wf-focus-visible") && (o = !0,
                    window.clearTimeout(i),
                    i = window.setTimeout(function() {
                        o = !1
                    }, 100),
                    y(R.target))
                }
                function b() {
                    document.visibilityState === "hidden" && (o && (n = !0),
                    C())
                }
                function C() {
                    document.addEventListener("mousemove", N),
                    document.addEventListener("mousedown", N),
                    document.addEventListener("mouseup", N),
                    document.addEventListener("pointermove", N),
                    document.addEventListener("pointerdown", N),
                    document.addEventListener("pointerup", N),
                    document.addEventListener("touchmove", N),
                    document.addEventListener("touchstart", N),
                    document.addEventListener("touchend", N)
                }
                function x() {
                    document.removeEventListener("mousemove", N),
                    document.removeEventListener("mousedown", N),
                    document.removeEventListener("mouseup", N),
                    document.removeEventListener("pointermove", N),
                    document.removeEventListener("pointerdown", N),
                    document.removeEventListener("pointerup", N),
                    document.removeEventListener("touchmove", N),
                    document.removeEventListener("touchstart", N),
                    document.removeEventListener("touchend", N)
                }
                function N(R) {
                    R.target.nodeName && R.target.nodeName.toLowerCase() === "html" || (n = !1,
                    x())
                }
                document.addEventListener("keydown", p, !0),
                document.addEventListener("mousedown", I, !0),
                document.addEventListener("pointerdown", I, !0),
                document.addEventListener("touchstart", I, !0),
                document.addEventListener("visibilitychange", b, !0),
                C(),
                r.addEventListener("focus", _, !0),
                r.addEventListener("blur", m, !0)
            }
            function t() {
                if (typeof document < "u")
                    try {
                        document.querySelector(":focus-visible")
                    } catch {
                        e(document)
                    }
            }
            return {
                ready: t
            }
        }
        )
    }
    );
    var Ys = u( (tk, zs) => {
        var Ks = Xe();
        Ks.define("focus", zs.exports = function() {
            var e = []
              , t = !1;
            function r(a) {
                t && (a.preventDefault(),
                a.stopPropagation(),
                a.stopImmediatePropagation(),
                e.unshift(a))
            }
            function n(a) {
                var s = a.target
                  , c = s.tagName;
                return /^a$/i.test(c) && s.href != null || /^(button|textarea)$/i.test(c) && s.disabled !== !0 || /^input$/i.test(c) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(c) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(c) || /^video$/i.test(c) && s.controls === !0
            }
            function o(a) {
                n(a) && (t = !0,
                setTimeout( () => {
                    for (t = !1,
                    a.target.focus(); e.length > 0; ) {
                        var s = e.pop();
                        s.target.dispatchEvent(new MouseEvent(s.type,s))
                    }
                }
                , 0))
            }
            function i() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Ks.env.safari && (document.addEventListener("mousedown", o, !0),
                document.addEventListener("mouseup", r, !0),
                document.addEventListener("click", r, !0))
            }
            return {
                ready: i
            }
        }
        )
    }
    );
    var Zs = u( (rk, $s) => {
        "use strict";
        var Qi = window.jQuery
          , lt = {}
          , gn = []
          , Qs = ".w-ix"
          , En = {
            reset: function(e, t) {
                t.__wf_intro = null
            },
            intro: function(e, t) {
                t.__wf_intro || (t.__wf_intro = !0,
                Qi(t).triggerHandler(lt.types.INTRO))
            },
            outro: function(e, t) {
                t.__wf_intro && (t.__wf_intro = null,
                Qi(t).triggerHandler(lt.types.OUTRO))
            }
        };
        lt.triggers = {};
        lt.types = {
            INTRO: "w-ix-intro" + Qs,
            OUTRO: "w-ix-outro" + Qs
        };
        lt.init = function() {
            for (var e = gn.length, t = 0; t < e; t++) {
                var r = gn[t];
                r[0](0, r[1])
            }
            gn = [],
            Qi.extend(lt.triggers, En)
        }
        ;
        lt.async = function() {
            for (var e in En) {
                var t = En[e];
                En.hasOwnProperty(e) && (lt.triggers[e] = function(r, n) {
                    gn.push([t, n])
                }
                )
            }
        }
        ;
        lt.async();
        $s.exports = lt
    }
    );
    var Rr = u( (nk, tu) => {
        "use strict";
        var $i = Zs();
        function Js(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null),
            e.dispatchEvent(r)
        }
        var Hy = window.jQuery
          , _n = {}
          , eu = ".w-ix"
          , By = {
            reset: function(e, t) {
                $i.triggers.reset(e, t)
            },
            intro: function(e, t) {
                $i.triggers.intro(e, t),
                Js(t, "COMPONENT_ACTIVE")
            },
            outro: function(e, t) {
                $i.triggers.outro(e, t),
                Js(t, "COMPONENT_INACTIVE")
            }
        };
        _n.triggers = {};
        _n.types = {
            INTRO: "w-ix-intro" + eu,
            OUTRO: "w-ix-outro" + eu
        };
        Hy.extend(_n.triggers, By);
        tu.exports = _n
    }
    );
    var ru = u( (ik, mt) => {
        function Zi(e) {
            return mt.exports = Zi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            mt.exports.__esModule = !0,
            mt.exports.default = mt.exports,
            Zi(e)
        }
        mt.exports = Zi,
        mt.exports.__esModule = !0,
        mt.exports.default = mt.exports
    }
    );
    var Ft = u( (ok, xr) => {
        var jy = ru().default;
        function nu(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (nu = function(o) {
                return o ? r : t
            }
            )(e)
        }
        function Ky(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || jy(e) !== "object" && typeof e != "function")
                return {
                    default: e
                };
            var r = nu(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
                    var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        xr.exports = Ky,
        xr.exports.__esModule = !0,
        xr.exports.default = xr.exports
    }
    );
    var et = u( (ak, Cr) => {
        function zy(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Cr.exports = zy,
        Cr.exports.__esModule = !0,
        Cr.exports.default = Cr.exports
    }
    );
    var Ie = u( (sk, iu) => {
        var mn = function(e) {
            return e && e.Math == Math && e
        };
        iu.exports = mn(typeof globalThis == "object" && globalThis) || mn(typeof window == "object" && window) || mn(typeof self == "object" && self) || mn(typeof global == "object" && global) || function() {
            return this
        }() || Function("return this")()
    }
    );
    var Zt = u( (uk, ou) => {
        ou.exports = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        }
    }
    );
    var Gt = u( (ck, au) => {
        var Yy = Zt();
        au.exports = !Yy(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        })
    }
    );
    var yn = u( (lk, su) => {
        var Nr = Function.prototype.call;
        su.exports = Nr.bind ? Nr.bind(Nr) : function() {
            return Nr.apply(Nr, arguments)
        }
    }
    );
    var fu = u(lu => {
        "use strict";
        var uu = {}.propertyIsEnumerable
          , cu = Object.getOwnPropertyDescriptor
          , Qy = cu && !uu.call({
            1: 2
        }, 1);
        lu.f = Qy ? function(t) {
            var r = cu(this, t);
            return !!r && r.enumerable
        }
        : uu
    }
    );
    var Ji = u( (dk, du) => {
        du.exports = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        }
    }
    );
    var tt = u( (pk, vu) => {
        var pu = Function.prototype
          , eo = pu.bind
          , to = pu.call
          , $y = eo && eo.bind(to);
        vu.exports = eo ? function(e) {
            return e && $y(to, e)
        }
        : function(e) {
            return e && function() {
                return to.apply(e, arguments)
            }
        }
    }
    );
    var Eu = u( (vk, gu) => {
        var hu = tt()
          , Zy = hu({}.toString)
          , Jy = hu("".slice);
        gu.exports = function(e) {
            return Jy(Zy(e), 8, -1)
        }
    }
    );
    var mu = u( (hk, _u) => {
        var eI = Ie()
          , tI = tt()
          , rI = Zt()
          , nI = Eu()
          , ro = eI.Object
          , iI = tI("".split);
        _u.exports = rI(function() {
            return !ro("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return nI(e) == "String" ? iI(e, "") : ro(e)
        }
        : ro
    }
    );
    var no = u( (gk, yu) => {
        var oI = Ie()
          , aI = oI.TypeError;
        yu.exports = function(e) {
            if (e == null)
                throw aI("Can't call method on " + e);
            return e
        }
    }
    );
    var Lr = u( (Ek, Iu) => {
        var sI = mu()
          , uI = no();
        Iu.exports = function(e) {
            return sI(uI(e))
        }
    }
    );
    var ft = u( (_k, Tu) => {
        Tu.exports = function(e) {
            return typeof e == "function"
        }
    }
    );
    var Jt = u( (mk, Ou) => {
        var cI = ft();
        Ou.exports = function(e) {
            return typeof e == "object" ? e !== null : cI(e)
        }
    }
    );
    var Pr = u( (yk, bu) => {
        var io = Ie()
          , lI = ft()
          , fI = function(e) {
            return lI(e) ? e : void 0
        };
        bu.exports = function(e, t) {
            return arguments.length < 2 ? fI(io[e]) : io[e] && io[e][t]
        }
    }
    );
    var Su = u( (Ik, wu) => {
        var dI = tt();
        wu.exports = dI({}.isPrototypeOf)
    }
    );
    var Ru = u( (Tk, Au) => {
        var pI = Pr();
        Au.exports = pI("navigator", "userAgent") || ""
    }
    );
    var Du = u( (Ok, qu) => {
        var Pu = Ie(), oo = Ru(), xu = Pu.process, Cu = Pu.Deno, Nu = xu && xu.versions || Cu && Cu.version, Lu = Nu && Nu.v8, rt, In;
        Lu && (rt = Lu.split("."),
        In = rt[0] > 0 && rt[0] < 4 ? 1 : +(rt[0] + rt[1]));
        !In && oo && (rt = oo.match(/Edge\/(\d+)/),
        (!rt || rt[1] >= 74) && (rt = oo.match(/Chrome\/(\d+)/),
        rt && (In = +rt[1])));
        qu.exports = In
    }
    );
    var ao = u( (bk, Fu) => {
        var Mu = Du()
          , vI = Zt();
        Fu.exports = !!Object.getOwnPropertySymbols && !vI(function() {
            var e = Symbol();
            return !String(e) || !(Object(e)instanceof Symbol) || !Symbol.sham && Mu && Mu < 41
        })
    }
    );
    var so = u( (wk, Gu) => {
        var hI = ao();
        Gu.exports = hI && !Symbol.sham && typeof Symbol.iterator == "symbol"
    }
    );
    var uo = u( (Sk, Uu) => {
        var gI = Ie()
          , EI = Pr()
          , _I = ft()
          , mI = Su()
          , yI = so()
          , II = gI.Object;
        Uu.exports = yI ? function(e) {
            return typeof e == "symbol"
        }
        : function(e) {
            var t = EI("Symbol");
            return _I(t) && mI(t.prototype, II(e))
        }
    }
    );
    var Wu = u( (Ak, Xu) => {
        var TI = Ie()
          , OI = TI.String;
        Xu.exports = function(e) {
            try {
                return OI(e)
            } catch {
                return "Object"
            }
        }
    }
    );
    var ku = u( (Rk, Vu) => {
        var bI = Ie()
          , wI = ft()
          , SI = Wu()
          , AI = bI.TypeError;
        Vu.exports = function(e) {
            if (wI(e))
                return e;
            throw AI(SI(e) + " is not a function")
        }
    }
    );
    var Bu = u( (xk, Hu) => {
        var RI = ku();
        Hu.exports = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : RI(r)
        }
    }
    );
    var Ku = u( (Ck, ju) => {
        var xI = Ie()
          , co = yn()
          , lo = ft()
          , fo = Jt()
          , CI = xI.TypeError;
        ju.exports = function(e, t) {
            var r, n;
            if (t === "string" && lo(r = e.toString) && !fo(n = co(r, e)) || lo(r = e.valueOf) && !fo(n = co(r, e)) || t !== "string" && lo(r = e.toString) && !fo(n = co(r, e)))
                return n;
            throw CI("Can't convert object to primitive value")
        }
    }
    );
    var Yu = u( (Nk, zu) => {
        zu.exports = !1
    }
    );
    var Tn = u( (Lk, $u) => {
        var Qu = Ie()
          , NI = Object.defineProperty;
        $u.exports = function(e, t) {
            try {
                NI(Qu, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                Qu[e] = t
            }
            return t
        }
    }
    );
    var On = u( (Pk, Ju) => {
        var LI = Ie()
          , PI = Tn()
          , Zu = "__core-js_shared__"
          , qI = LI[Zu] || PI(Zu, {});
        Ju.exports = qI
    }
    );
    var po = u( (qk, tc) => {
        var DI = Yu()
          , ec = On();
        (tc.exports = function(e, t) {
            return ec[e] || (ec[e] = t !== void 0 ? t : {})
        }
        )("versions", []).push({
            version: "3.19.0",
            mode: DI ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
        })
    }
    );
    var nc = u( (Dk, rc) => {
        var MI = Ie()
          , FI = no()
          , GI = MI.Object;
        rc.exports = function(e) {
            return GI(FI(e))
        }
    }
    );
    var wt = u( (Mk, ic) => {
        var UI = tt()
          , XI = nc()
          , WI = UI({}.hasOwnProperty);
        ic.exports = Object.hasOwn || function(t, r) {
            return WI(XI(t), r)
        }
    }
    );
    var vo = u( (Fk, oc) => {
        var VI = tt()
          , kI = 0
          , HI = Math.random()
          , BI = VI(1 .toString);
        oc.exports = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + BI(++kI + HI, 36)
        }
    }
    );
    var ho = u( (Gk, lc) => {
        var jI = Ie()
          , KI = po()
          , ac = wt()
          , zI = vo()
          , sc = ao()
          , cc = so()
          , er = KI("wks")
          , Ut = jI.Symbol
          , uc = Ut && Ut.for
          , YI = cc ? Ut : Ut && Ut.withoutSetter || zI;
        lc.exports = function(e) {
            if (!ac(er, e) || !(sc || typeof er[e] == "string")) {
                var t = "Symbol." + e;
                sc && ac(Ut, e) ? er[e] = Ut[e] : cc && uc ? er[e] = uc(t) : er[e] = YI(t)
            }
            return er[e]
        }
    }
    );
    var vc = u( (Uk, pc) => {
        var QI = Ie()
          , $I = yn()
          , fc = Jt()
          , dc = uo()
          , ZI = Bu()
          , JI = Ku()
          , eT = ho()
          , tT = QI.TypeError
          , rT = eT("toPrimitive");
        pc.exports = function(e, t) {
            if (!fc(e) || dc(e))
                return e;
            var r = ZI(e, rT), n;
            if (r) {
                if (t === void 0 && (t = "default"),
                n = $I(r, e, t),
                !fc(n) || dc(n))
                    return n;
                throw tT("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"),
            JI(e, t)
        }
    }
    );
    var go = u( (Xk, hc) => {
        var nT = vc()
          , iT = uo();
        hc.exports = function(e) {
            var t = nT(e, "string");
            return iT(t) ? t : t + ""
        }
    }
    );
    var _o = u( (Wk, Ec) => {
        var oT = Ie()
          , gc = Jt()
          , Eo = oT.document
          , aT = gc(Eo) && gc(Eo.createElement);
        Ec.exports = function(e) {
            return aT ? Eo.createElement(e) : {}
        }
    }
    );
    var mo = u( (Vk, _c) => {
        var sT = Gt()
          , uT = Zt()
          , cT = _o();
        _c.exports = !sT && !uT(function() {
            return Object.defineProperty(cT("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        })
    }
    );
    var yo = u(yc => {
        var lT = Gt()
          , fT = yn()
          , dT = fu()
          , pT = Ji()
          , vT = Lr()
          , hT = go()
          , gT = wt()
          , ET = mo()
          , mc = Object.getOwnPropertyDescriptor;
        yc.f = lT ? mc : function(t, r) {
            if (t = vT(t),
            r = hT(r),
            ET)
                try {
                    return mc(t, r)
                } catch {}
            if (gT(t, r))
                return pT(!fT(dT.f, t, r), t[r])
        }
    }
    );
    var qr = u( (Hk, Tc) => {
        var Ic = Ie()
          , _T = Jt()
          , mT = Ic.String
          , yT = Ic.TypeError;
        Tc.exports = function(e) {
            if (_T(e))
                return e;
            throw yT(mT(e) + " is not an object")
        }
    }
    );
    var Dr = u(wc => {
        var IT = Ie()
          , TT = Gt()
          , OT = mo()
          , Oc = qr()
          , bT = go()
          , wT = IT.TypeError
          , bc = Object.defineProperty;
        wc.f = TT ? bc : function(t, r, n) {
            if (Oc(t),
            r = bT(r),
            Oc(n),
            OT)
                try {
                    return bc(t, r, n)
                } catch {}
            if ("get"in n || "set"in n)
                throw wT("Accessors not supported");
            return "value"in n && (t[r] = n.value),
            t
        }
    }
    );
    var bn = u( (jk, Sc) => {
        var ST = Gt()
          , AT = Dr()
          , RT = Ji();
        Sc.exports = ST ? function(e, t, r) {
            return AT.f(e, t, RT(1, r))
        }
        : function(e, t, r) {
            return e[t] = r,
            e
        }
    }
    );
    var To = u( (Kk, Ac) => {
        var xT = tt()
          , CT = ft()
          , Io = On()
          , NT = xT(Function.toString);
        CT(Io.inspectSource) || (Io.inspectSource = function(e) {
            return NT(e)
        }
        );
        Ac.exports = Io.inspectSource
    }
    );
    var Cc = u( (zk, xc) => {
        var LT = Ie()
          , PT = ft()
          , qT = To()
          , Rc = LT.WeakMap;
        xc.exports = PT(Rc) && /native code/.test(qT(Rc))
    }
    );
    var Oo = u( (Yk, Lc) => {
        var DT = po()
          , MT = vo()
          , Nc = DT("keys");
        Lc.exports = function(e) {
            return Nc[e] || (Nc[e] = MT(e))
        }
    }
    );
    var wn = u( (Qk, Pc) => {
        Pc.exports = {}
    }
    );
    var Uc = u( ($k, Gc) => {
        var FT = Cc(), Fc = Ie(), bo = tt(), GT = Jt(), UT = bn(), wo = wt(), So = On(), XT = Oo(), WT = wn(), qc = "Object already initialized", Ro = Fc.TypeError, VT = Fc.WeakMap, Sn, Mr, An, kT = function(e) {
            return An(e) ? Mr(e) : Sn(e, {})
        }, HT = function(e) {
            return function(t) {
                var r;
                if (!GT(t) || (r = Mr(t)).type !== e)
                    throw Ro("Incompatible receiver, " + e + " required");
                return r
            }
        };
        FT || So.state ? (St = So.state || (So.state = new VT),
        Dc = bo(St.get),
        Ao = bo(St.has),
        Mc = bo(St.set),
        Sn = function(e, t) {
            if (Ao(St, e))
                throw new Ro(qc);
            return t.facade = e,
            Mc(St, e, t),
            t
        }
        ,
        Mr = function(e) {
            return Dc(St, e) || {}
        }
        ,
        An = function(e) {
            return Ao(St, e)
        }
        ) : (Xt = XT("state"),
        WT[Xt] = !0,
        Sn = function(e, t) {
            if (wo(e, Xt))
                throw new Ro(qc);
            return t.facade = e,
            UT(e, Xt, t),
            t
        }
        ,
        Mr = function(e) {
            return wo(e, Xt) ? e[Xt] : {}
        }
        ,
        An = function(e) {
            return wo(e, Xt)
        }
        );
        var St, Dc, Ao, Mc, Xt;
        Gc.exports = {
            set: Sn,
            get: Mr,
            has: An,
            enforce: kT,
            getterFor: HT
        }
    }
    );
    var Vc = u( (Zk, Wc) => {
        var xo = Gt()
          , BT = wt()
          , Xc = Function.prototype
          , jT = xo && Object.getOwnPropertyDescriptor
          , Co = BT(Xc, "name")
          , KT = Co && function() {}
        .name === "something"
          , zT = Co && (!xo || xo && jT(Xc, "name").configurable);
        Wc.exports = {
            EXISTS: Co,
            PROPER: KT,
            CONFIGURABLE: zT
        }
    }
    );
    var Kc = u( (Jk, jc) => {
        var YT = Ie()
          , kc = ft()
          , QT = wt()
          , Hc = bn()
          , $T = Tn()
          , ZT = To()
          , Bc = Uc()
          , JT = Vc().CONFIGURABLE
          , eO = Bc.get
          , tO = Bc.enforce
          , rO = String(String).split("String");
        (jc.exports = function(e, t, r, n) {
            var o = n ? !!n.unsafe : !1, i = n ? !!n.enumerable : !1, a = n ? !!n.noTargetGet : !1, s = n && n.name !== void 0 ? n.name : t, c;
            if (kc(r) && (String(s).slice(0, 7) === "Symbol(" && (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
            (!QT(r, "name") || JT && r.name !== s) && Hc(r, "name", s),
            c = tO(r),
            c.source || (c.source = rO.join(typeof s == "string" ? s : ""))),
            e === YT) {
                i ? e[t] = r : $T(t, r);
                return
            } else
                o ? !a && e[t] && (i = !0) : delete e[t];
            i ? e[t] = r : Hc(e, t, r)
        }
        )(Function.prototype, "toString", function() {
            return kc(this) && eO(this).source || ZT(this)
        })
    }
    );
    var No = u( (eH, zc) => {
        var nO = Math.ceil
          , iO = Math.floor;
        zc.exports = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? iO : nO)(t)
        }
    }
    );
    var Qc = u( (tH, Yc) => {
        var oO = No()
          , aO = Math.max
          , sO = Math.min;
        Yc.exports = function(e, t) {
            var r = oO(e);
            return r < 0 ? aO(r + t, 0) : sO(r, t)
        }
    }
    );
    var Zc = u( (rH, $c) => {
        var uO = No()
          , cO = Math.min;
        $c.exports = function(e) {
            return e > 0 ? cO(uO(e), 9007199254740991) : 0
        }
    }
    );
    var el = u( (nH, Jc) => {
        var lO = Zc();
        Jc.exports = function(e) {
            return lO(e.length)
        }
    }
    );
    var Lo = u( (iH, rl) => {
        var fO = Lr()
          , dO = Qc()
          , pO = el()
          , tl = function(e) {
            return function(t, r, n) {
                var o = fO(t), i = pO(o), a = dO(n, i), s;
                if (e && r != r) {
                    for (; i > a; )
                        if (s = o[a++],
                        s != s)
                            return !0
                } else
                    for (; i > a; a++)
                        if ((e || a in o) && o[a] === r)
                            return e || a || 0;
                return !e && -1
            }
        };
        rl.exports = {
            includes: tl(!0),
            indexOf: tl(!1)
        }
    }
    );
    var qo = u( (oH, il) => {
        var vO = tt()
          , Po = wt()
          , hO = Lr()
          , gO = Lo().indexOf
          , EO = wn()
          , nl = vO([].push);
        il.exports = function(e, t) {
            var r = hO(e), n = 0, o = [], i;
            for (i in r)
                !Po(EO, i) && Po(r, i) && nl(o, i);
            for (; t.length > n; )
                Po(r, i = t[n++]) && (~gO(o, i) || nl(o, i));
            return o
        }
    }
    );
    var Rn = u( (aH, ol) => {
        ol.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }
    );
    var sl = u(al => {
        var _O = qo()
          , mO = Rn()
          , yO = mO.concat("length", "prototype");
        al.f = Object.getOwnPropertyNames || function(t) {
            return _O(t, yO)
        }
    }
    );
    var cl = u(ul => {
        ul.f = Object.getOwnPropertySymbols
    }
    );
    var fl = u( (cH, ll) => {
        var IO = Pr()
          , TO = tt()
          , OO = sl()
          , bO = cl()
          , wO = qr()
          , SO = TO([].concat);
        ll.exports = IO("Reflect", "ownKeys") || function(t) {
            var r = OO.f(wO(t))
              , n = bO.f;
            return n ? SO(r, n(t)) : r
        }
    }
    );
    var pl = u( (lH, dl) => {
        var AO = wt()
          , RO = fl()
          , xO = yo()
          , CO = Dr();
        dl.exports = function(e, t) {
            for (var r = RO(t), n = CO.f, o = xO.f, i = 0; i < r.length; i++) {
                var a = r[i];
                AO(e, a) || n(e, a, o(t, a))
            }
        }
    }
    );
    var hl = u( (fH, vl) => {
        var NO = Zt()
          , LO = ft()
          , PO = /#|\.prototype\./
          , Fr = function(e, t) {
            var r = DO[qO(e)];
            return r == FO ? !0 : r == MO ? !1 : LO(t) ? NO(t) : !!t
        }
          , qO = Fr.normalize = function(e) {
            return String(e).replace(PO, ".").toLowerCase()
        }
          , DO = Fr.data = {}
          , MO = Fr.NATIVE = "N"
          , FO = Fr.POLYFILL = "P";
        vl.exports = Fr
    }
    );
    var El = u( (dH, gl) => {
        var Do = Ie()
          , GO = yo().f
          , UO = bn()
          , XO = Kc()
          , WO = Tn()
          , VO = pl()
          , kO = hl();
        gl.exports = function(e, t) {
            var r = e.target, n = e.global, o = e.stat, i, a, s, c, g, y;
            if (n ? a = Do : o ? a = Do[r] || WO(r, {}) : a = (Do[r] || {}).prototype,
            a)
                for (s in t) {
                    if (g = t[s],
                    e.noTargetGet ? (y = GO(a, s),
                    c = y && y.value) : c = a[s],
                    i = kO(n ? s : r + (o ? "." : "#") + s, e.forced),
                    !i && c !== void 0) {
                        if (typeof g == typeof c)
                            continue;
                        VO(g, c)
                    }
                    (e.sham || c && c.sham) && UO(g, "sham", !0),
                    XO(a, s, g, e)
                }
        }
    }
    );
    var ml = u( (pH, _l) => {
        var HO = qo()
          , BO = Rn();
        _l.exports = Object.keys || function(t) {
            return HO(t, BO)
        }
    }
    );
    var Il = u( (vH, yl) => {
        var jO = Gt()
          , KO = Dr()
          , zO = qr()
          , YO = Lr()
          , QO = ml();
        yl.exports = jO ? Object.defineProperties : function(t, r) {
            zO(t);
            for (var n = YO(r), o = QO(r), i = o.length, a = 0, s; i > a; )
                KO.f(t, s = o[a++], n[s]);
            return t
        }
    }
    );
    var Ol = u( (hH, Tl) => {
        var $O = Pr();
        Tl.exports = $O("document", "documentElement")
    }
    );
    var Nl = u( (gH, Cl) => {
        var ZO = qr(), JO = Il(), bl = Rn(), eb = wn(), tb = Ol(), rb = _o(), nb = Oo(), wl = ">", Sl = "<", Fo = "prototype", Go = "script", Rl = nb("IE_PROTO"), Mo = function() {}, xl = function(e) {
            return Sl + Go + wl + e + Sl + "/" + Go + wl
        }, Al = function(e) {
            e.write(xl("")),
            e.close();
            var t = e.parentWindow.Object;
            return e = null,
            t
        }, ib = function() {
            var e = rb("iframe"), t = "java" + Go + ":", r;
            return e.style.display = "none",
            tb.appendChild(e),
            e.src = String(t),
            r = e.contentWindow.document,
            r.open(),
            r.write(xl("document.F=Object")),
            r.close(),
            r.F
        }, xn, Cn = function() {
            try {
                xn = new ActiveXObject("htmlfile")
            } catch {}
            Cn = typeof document < "u" ? document.domain && xn ? Al(xn) : ib() : Al(xn);
            for (var e = bl.length; e--; )
                delete Cn[Fo][bl[e]];
            return Cn()
        };
        eb[Rl] = !0;
        Cl.exports = Object.create || function(t, r) {
            var n;
            return t !== null ? (Mo[Fo] = ZO(t),
            n = new Mo,
            Mo[Fo] = null,
            n[Rl] = t) : n = Cn(),
            r === void 0 ? n : JO(n, r)
        }
    }
    );
    var Pl = u( (EH, Ll) => {
        var ob = ho()
          , ab = Nl()
          , sb = Dr()
          , Uo = ob("unscopables")
          , Xo = Array.prototype;
        Xo[Uo] == null && sb.f(Xo, Uo, {
            configurable: !0,
            value: ab(null)
        });
        Ll.exports = function(e) {
            Xo[Uo][e] = !0
        }
    }
    );
    var ql = u( () => {
        "use strict";
        var ub = El()
          , cb = Lo().includes
          , lb = Pl();
        ub({
            target: "Array",
            proto: !0
        }, {
            includes: function(t) {
                return cb(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        lb("includes")
    }
    );
    var Ml = u( (yH, Dl) => {
        var fb = Ie()
          , db = tt();
        Dl.exports = function(e, t) {
            return db(fb[e].prototype[t])
        }
    }
    );
    var Gl = u( (IH, Fl) => {
        ql();
        var pb = Ml();
        Fl.exports = pb("Array", "includes")
    }
    );
    var Xl = u( (TH, Ul) => {
        var vb = Gl();
        Ul.exports = vb
    }
    );
    var Vl = u( (OH, Wl) => {
        var hb = Xl();
        Wl.exports = hb
    }
    );
    var Wo = u( (bH, kl) => {
        var gb = typeof global == "object" && global && global.Object === Object && global;
        kl.exports = gb
    }
    );
    var nt = u( (wH, Hl) => {
        var Eb = Wo()
          , _b = typeof self == "object" && self && self.Object === Object && self
          , mb = Eb || _b || Function("return this")();
        Hl.exports = mb
    }
    );
    var tr = u( (SH, Bl) => {
        var yb = nt()
          , Ib = yb.Symbol;
        Bl.exports = Ib
    }
    );
    var Yl = u( (AH, zl) => {
        var jl = tr()
          , Kl = Object.prototype
          , Tb = Kl.hasOwnProperty
          , Ob = Kl.toString
          , Gr = jl ? jl.toStringTag : void 0;
        function bb(e) {
            var t = Tb.call(e, Gr)
              , r = e[Gr];
            try {
                e[Gr] = void 0;
                var n = !0
            } catch {}
            var o = Ob.call(e);
            return n && (t ? e[Gr] = r : delete e[Gr]),
            o
        }
        zl.exports = bb
    }
    );
    var $l = u( (RH, Ql) => {
        var wb = Object.prototype
          , Sb = wb.toString;
        function Ab(e) {
            return Sb.call(e)
        }
        Ql.exports = Ab
    }
    );
    var At = u( (xH, ef) => {
        var Zl = tr()
          , Rb = Yl()
          , xb = $l()
          , Cb = "[object Null]"
          , Nb = "[object Undefined]"
          , Jl = Zl ? Zl.toStringTag : void 0;
        function Lb(e) {
            return e == null ? e === void 0 ? Nb : Cb : Jl && Jl in Object(e) ? Rb(e) : xb(e)
        }
        ef.exports = Lb
    }
    );
    var Vo = u( (CH, tf) => {
        function Pb(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        tf.exports = Pb
    }
    );
    var ko = u( (NH, rf) => {
        var qb = Vo()
          , Db = qb(Object.getPrototypeOf, Object);
        rf.exports = Db
    }
    );
    var yt = u( (LH, nf) => {
        function Mb(e) {
            return e != null && typeof e == "object"
        }
        nf.exports = Mb
    }
    );
    var Ho = u( (PH, af) => {
        var Fb = At()
          , Gb = ko()
          , Ub = yt()
          , Xb = "[object Object]"
          , Wb = Function.prototype
          , Vb = Object.prototype
          , of = Wb.toString
          , kb = Vb.hasOwnProperty
          , Hb = of.call(Object);
        function Bb(e) {
            if (!Ub(e) || Fb(e) != Xb)
                return !1;
            var t = Gb(e);
            if (t === null)
                return !0;
            var r = kb.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && of.call(r) == Hb
        }
        af.exports = Bb
    }
    );
    var sf = u(Bo => {
        "use strict";
        Object.defineProperty(Bo, "__esModule", {
            value: !0
        });
        Bo.default = jb;
        function jb(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"),
            r.observable = t) : t = "@@observable",
            t
        }
    }
    );
    var uf = u( (Ko, jo) => {
        "use strict";
        Object.defineProperty(Ko, "__esModule", {
            value: !0
        });
        var Kb = sf()
          , zb = Yb(Kb);
        function Yb(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var rr;
        typeof self < "u" ? rr = self : typeof window < "u" ? rr = window : typeof global < "u" ? rr = global : typeof jo < "u" ? rr = jo : rr = Function("return this")();
        var Qb = (0,
        zb.default)(rr);
        Ko.default = Qb
    }
    );
    var zo = u(Ur => {
        "use strict";
        Ur.__esModule = !0;
        Ur.ActionTypes = void 0;
        Ur.default = df;
        var $b = Ho()
          , Zb = ff($b)
          , Jb = uf()
          , cf = ff(Jb);
        function ff(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var lf = Ur.ActionTypes = {
            INIT: "@@redux/INIT"
        };
        function df(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t,
            t = void 0),
            typeof r < "u") {
                if (typeof r != "function")
                    throw new Error("Expected the enhancer to be a function.");
                return r(df)(e, t)
            }
            if (typeof e != "function")
                throw new Error("Expected the reducer to be a function.");
            var o = e
              , i = t
              , a = []
              , s = a
              , c = !1;
            function g() {
                s === a && (s = a.slice())
            }
            function y() {
                return i
            }
            function p(b) {
                if (typeof b != "function")
                    throw new Error("Expected listener to be a function.");
                var C = !0;
                return g(),
                s.push(b),
                function() {
                    if (C) {
                        C = !1,
                        g();
                        var N = s.indexOf(b);
                        s.splice(N, 1)
                    }
                }
            }
            function I(b) {
                if (!(0,
                Zb.default)(b))
                    throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof b.type > "u")
                    throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (c)
                    throw new Error("Reducers may not dispatch actions.");
                try {
                    c = !0,
                    i = o(i, b)
                } finally {
                    c = !1
                }
                for (var C = a = s, x = 0; x < C.length; x++)
                    C[x]();
                return b
            }
            function _(b) {
                if (typeof b != "function")
                    throw new Error("Expected the nextReducer to be a function.");
                o = b,
                I({
                    type: lf.INIT
                })
            }
            function m() {
                var b, C = p;
                return b = {
                    subscribe: function(N) {
                        if (typeof N != "object")
                            throw new TypeError("Expected the observer to be an object.");
                        function R() {
                            N.next && N.next(y())
                        }
                        R();
                        var M = C(R);
                        return {
                            unsubscribe: M
                        }
                    }
                },
                b[cf.default] = function() {
                    return this
                }
                ,
                b
            }
            return I({
                type: lf.INIT
            }),
            n = {
                dispatch: I,
                subscribe: p,
                getState: y,
                replaceReducer: _
            },
            n[cf.default] = m,
            n
        }
    }
    );
    var Qo = u(Yo => {
        "use strict";
        Yo.__esModule = !0;
        Yo.default = ew;
        function ew(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    }
    );
    var hf = u($o => {
        "use strict";
        $o.__esModule = !0;
        $o.default = ow;
        var pf = zo()
          , tw = Ho()
          , FH = vf(tw)
          , rw = Qo()
          , GH = vf(rw);
        function vf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function nw(e, t) {
            var r = t && t.type
              , n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }
        function iw(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t]
                  , n = r(void 0, {
                    type: pf.ActionTypes.INIT
                });
                if (typeof n > "u")
                    throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var o = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                    type: o
                }) > "u")
                    throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + pf.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }
        function ow(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var o = t[n];
                typeof e[o] == "function" && (r[o] = e[o])
            }
            var i = Object.keys(r);
            if (!1)
                var a;
            var s;
            try {
                iw(r)
            } catch (c) {
                s = c
            }
            return function() {
                var g = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0]
                  , y = arguments[1];
                if (s)
                    throw s;
                if (!1)
                    var p;
                for (var I = !1, _ = {}, m = 0; m < i.length; m++) {
                    var b = i[m]
                      , C = r[b]
                      , x = g[b]
                      , N = C(x, y);
                    if (typeof N > "u") {
                        var R = nw(b, y);
                        throw new Error(R)
                    }
                    _[b] = N,
                    I = I || N !== x
                }
                return I ? _ : g
            }
        }
    }
    );
    var Ef = u(Zo => {
        "use strict";
        Zo.__esModule = !0;
        Zo.default = aw;
        function gf(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }
        function aw(e, t) {
            if (typeof e == "function")
                return gf(e, t);
            if (typeof e != "object" || e === null)
                throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, o = 0; o < r.length; o++) {
                var i = r[o]
                  , a = e[i];
                typeof a == "function" && (n[i] = gf(a, t))
            }
            return n
        }
    }
    );
    var ea = u(Jo => {
        "use strict";
        Jo.__esModule = !0;
        Jo.default = sw;
        function sw() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            if (t.length === 0)
                return function(i) {
                    return i
                }
                ;
            if (t.length === 1)
                return t[0];
            var n = t[t.length - 1]
              , o = t.slice(0, -1);
            return function() {
                return o.reduceRight(function(i, a) {
                    return a(i)
                }, n.apply(void 0, arguments))
            }
        }
    }
    );
    var _f = u(ta => {
        "use strict";
        ta.__esModule = !0;
        var uw = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }
        ;
        ta.default = dw;
        var cw = ea()
          , lw = fw(cw);
        function fw(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function dw() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return function(n) {
                return function(o, i, a) {
                    var s = n(o, i, a)
                      , c = s.dispatch
                      , g = []
                      , y = {
                        getState: s.getState,
                        dispatch: function(I) {
                            return c(I)
                        }
                    };
                    return g = t.map(function(p) {
                        return p(y)
                    }),
                    c = lw.default.apply(void 0, g)(s.dispatch),
                    uw({}, s, {
                        dispatch: c
                    })
                }
            }
        }
    }
    );
    var ra = u(ze => {
        "use strict";
        ze.__esModule = !0;
        ze.compose = ze.applyMiddleware = ze.bindActionCreators = ze.combineReducers = ze.createStore = void 0;
        var pw = zo()
          , vw = nr(pw)
          , hw = hf()
          , gw = nr(hw)
          , Ew = Ef()
          , _w = nr(Ew)
          , mw = _f()
          , yw = nr(mw)
          , Iw = ea()
          , Tw = nr(Iw)
          , Ow = Qo()
          , kH = nr(Ow);
        function nr(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ze.createStore = vw.default;
        ze.combineReducers = gw.default;
        ze.bindActionCreators = _w.default;
        ze.applyMiddleware = yw.default;
        ze.compose = Tw.default
    }
    );
    var mf = u(Ne => {
        "use strict";
        Object.defineProperty(Ne, "__esModule", {
            value: !0
        });
        Ne.QuickEffectIds = Ne.QuickEffectDirectionConsts = Ne.EventTypeConsts = Ne.EventLimitAffectedElements = Ne.EventContinuousMouseAxes = Ne.EventBasedOn = Ne.EventAppliesTo = void 0;
        var bw = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        };
        Ne.EventTypeConsts = bw;
        var ww = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        };
        Ne.EventAppliesTo = ww;
        var Sw = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        };
        Ne.EventBasedOn = Sw;
        var Aw = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        };
        Ne.EventContinuousMouseAxes = Aw;
        var Rw = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        };
        Ne.EventLimitAffectedElements = Rw;
        var xw = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        };
        Ne.QuickEffectIds = xw;
        var Cw = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        };
        Ne.QuickEffectDirectionConsts = Cw
    }
    );
    var na = u(ir => {
        "use strict";
        Object.defineProperty(ir, "__esModule", {
            value: !0
        });
        ir.ActionTypeConsts = ir.ActionAppliesTo = void 0;
        var Nw = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        };
        ir.ActionTypeConsts = Nw;
        var Lw = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        };
        ir.ActionAppliesTo = Lw
    }
    );
    var yf = u(Nn => {
        "use strict";
        Object.defineProperty(Nn, "__esModule", {
            value: !0
        });
        Nn.InteractionTypeConsts = void 0;
        var Pw = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        };
        Nn.InteractionTypeConsts = Pw
    }
    );
    var If = u(Ln => {
        "use strict";
        Object.defineProperty(Ln, "__esModule", {
            value: !0
        });
        Ln.ReducedMotionTypes = void 0;
        var qw = na()
          , {TRANSFORM_MOVE: Dw, TRANSFORM_SCALE: Mw, TRANSFORM_ROTATE: Fw, TRANSFORM_SKEW: Gw, STYLE_SIZE: Uw, STYLE_FILTER: Xw, STYLE_FONT_VARIATION: Ww} = qw.ActionTypeConsts
          , Vw = {
            [Dw]: !0,
            [Mw]: !0,
            [Fw]: !0,
            [Gw]: !0,
            [Uw]: !0,
            [Xw]: !0,
            [Ww]: !0
        };
        Ln.ReducedMotionTypes = Vw
    }
    );
    var Tf = u(ce => {
        "use strict";
        Object.defineProperty(ce, "__esModule", {
            value: !0
        });
        ce.IX2_VIEWPORT_WIDTH_CHANGED = ce.IX2_TEST_FRAME_RENDERED = ce.IX2_STOP_REQUESTED = ce.IX2_SESSION_STOPPED = ce.IX2_SESSION_STARTED = ce.IX2_SESSION_INITIALIZED = ce.IX2_RAW_DATA_IMPORTED = ce.IX2_PREVIEW_REQUESTED = ce.IX2_PLAYBACK_REQUESTED = ce.IX2_PARAMETER_CHANGED = ce.IX2_MEDIA_QUERIES_DEFINED = ce.IX2_INSTANCE_STARTED = ce.IX2_INSTANCE_REMOVED = ce.IX2_INSTANCE_ADDED = ce.IX2_EVENT_STATE_CHANGED = ce.IX2_EVENT_LISTENER_ADDED = ce.IX2_ELEMENT_STATE_CHANGED = ce.IX2_CLEAR_REQUESTED = ce.IX2_ANIMATION_FRAME_CHANGED = ce.IX2_ACTION_LIST_PLAYBACK_CHANGED = void 0;
        var kw = "IX2_RAW_DATA_IMPORTED";
        ce.IX2_RAW_DATA_IMPORTED = kw;
        var Hw = "IX2_SESSION_INITIALIZED";
        ce.IX2_SESSION_INITIALIZED = Hw;
        var Bw = "IX2_SESSION_STARTED";
        ce.IX2_SESSION_STARTED = Bw;
        var jw = "IX2_SESSION_STOPPED";
        ce.IX2_SESSION_STOPPED = jw;
        var Kw = "IX2_PREVIEW_REQUESTED";
        ce.IX2_PREVIEW_REQUESTED = Kw;
        var zw = "IX2_PLAYBACK_REQUESTED";
        ce.IX2_PLAYBACK_REQUESTED = zw;
        var Yw = "IX2_STOP_REQUESTED";
        ce.IX2_STOP_REQUESTED = Yw;
        var Qw = "IX2_CLEAR_REQUESTED";
        ce.IX2_CLEAR_REQUESTED = Qw;
        var $w = "IX2_EVENT_LISTENER_ADDED";
        ce.IX2_EVENT_LISTENER_ADDED = $w;
        var Zw = "IX2_EVENT_STATE_CHANGED";
        ce.IX2_EVENT_STATE_CHANGED = Zw;
        var Jw = "IX2_ANIMATION_FRAME_CHANGED";
        ce.IX2_ANIMATION_FRAME_CHANGED = Jw;
        var eS = "IX2_PARAMETER_CHANGED";
        ce.IX2_PARAMETER_CHANGED = eS;
        var tS = "IX2_INSTANCE_ADDED";
        ce.IX2_INSTANCE_ADDED = tS;
        var rS = "IX2_INSTANCE_STARTED";
        ce.IX2_INSTANCE_STARTED = rS;
        var nS = "IX2_INSTANCE_REMOVED";
        ce.IX2_INSTANCE_REMOVED = nS;
        var iS = "IX2_ELEMENT_STATE_CHANGED";
        ce.IX2_ELEMENT_STATE_CHANGED = iS;
        var oS = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
        ce.IX2_ACTION_LIST_PLAYBACK_CHANGED = oS;
        var aS = "IX2_VIEWPORT_WIDTH_CHANGED";
        ce.IX2_VIEWPORT_WIDTH_CHANGED = aS;
        var sS = "IX2_MEDIA_QUERIES_DEFINED";
        ce.IX2_MEDIA_QUERIES_DEFINED = sS;
        var uS = "IX2_TEST_FRAME_RENDERED";
        ce.IX2_TEST_FRAME_RENDERED = uS
    }
    );
    var Of = u(G => {
        "use strict";
        Object.defineProperty(G, "__esModule", {
            value: !0
        });
        G.W_MOD_JS = G.W_MOD_IX = G.WILL_CHANGE = G.WIDTH = G.WF_PAGE = G.TRANSLATE_Z = G.TRANSLATE_Y = G.TRANSLATE_X = G.TRANSLATE_3D = G.TRANSFORM = G.SKEW_Y = G.SKEW_X = G.SKEW = G.SIBLINGS = G.SCALE_Z = G.SCALE_Y = G.SCALE_X = G.SCALE_3D = G.ROTATE_Z = G.ROTATE_Y = G.ROTATE_X = G.RENDER_TRANSFORM = G.RENDER_STYLE = G.RENDER_PLUGIN = G.RENDER_GENERAL = G.PRESERVE_3D = G.PLAIN_OBJECT = G.PARENT = G.OPACITY = G.IX2_ID_DELIMITER = G.IMMEDIATE_CHILDREN = G.HTML_ELEMENT = G.HEIGHT = G.FONT_VARIATION_SETTINGS = G.FLEX = G.FILTER = G.DISPLAY = G.CONFIG_Z_VALUE = G.CONFIG_Z_UNIT = G.CONFIG_Y_VALUE = G.CONFIG_Y_UNIT = G.CONFIG_X_VALUE = G.CONFIG_X_UNIT = G.CONFIG_VALUE = G.CONFIG_UNIT = G.COMMA_DELIMITER = G.COLOR = G.COLON_DELIMITER = G.CHILDREN = G.BOUNDARY_SELECTOR = G.BORDER_COLOR = G.BAR_DELIMITER = G.BACKGROUND_COLOR = G.BACKGROUND = G.AUTO = G.ABSTRACT_NODE = void 0;
        var cS = "|";
        G.IX2_ID_DELIMITER = cS;
        var lS = "data-wf-page";
        G.WF_PAGE = lS;
        var fS = "w-mod-js";
        G.W_MOD_JS = fS;
        var dS = "w-mod-ix";
        G.W_MOD_IX = dS;
        var pS = ".w-dyn-item";
        G.BOUNDARY_SELECTOR = pS;
        var vS = "xValue";
        G.CONFIG_X_VALUE = vS;
        var hS = "yValue";
        G.CONFIG_Y_VALUE = hS;
        var gS = "zValue";
        G.CONFIG_Z_VALUE = gS;
        var ES = "value";
        G.CONFIG_VALUE = ES;
        var _S = "xUnit";
        G.CONFIG_X_UNIT = _S;
        var mS = "yUnit";
        G.CONFIG_Y_UNIT = mS;
        var yS = "zUnit";
        G.CONFIG_Z_UNIT = yS;
        var IS = "unit";
        G.CONFIG_UNIT = IS;
        var TS = "transform";
        G.TRANSFORM = TS;
        var OS = "translateX";
        G.TRANSLATE_X = OS;
        var bS = "translateY";
        G.TRANSLATE_Y = bS;
        var wS = "translateZ";
        G.TRANSLATE_Z = wS;
        var SS = "translate3d";
        G.TRANSLATE_3D = SS;
        var AS = "scaleX";
        G.SCALE_X = AS;
        var RS = "scaleY";
        G.SCALE_Y = RS;
        var xS = "scaleZ";
        G.SCALE_Z = xS;
        var CS = "scale3d";
        G.SCALE_3D = CS;
        var NS = "rotateX";
        G.ROTATE_X = NS;
        var LS = "rotateY";
        G.ROTATE_Y = LS;
        var PS = "rotateZ";
        G.ROTATE_Z = PS;
        var qS = "skew";
        G.SKEW = qS;
        var DS = "skewX";
        G.SKEW_X = DS;
        var MS = "skewY";
        G.SKEW_Y = MS;
        var FS = "opacity";
        G.OPACITY = FS;
        var GS = "filter";
        G.FILTER = GS;
        var US = "font-variation-settings";
        G.FONT_VARIATION_SETTINGS = US;
        var XS = "width";
        G.WIDTH = XS;
        var WS = "height";
        G.HEIGHT = WS;
        var VS = "backgroundColor";
        G.BACKGROUND_COLOR = VS;
        var kS = "background";
        G.BACKGROUND = kS;
        var HS = "borderColor";
        G.BORDER_COLOR = HS;
        var BS = "color";
        G.COLOR = BS;
        var jS = "display";
        G.DISPLAY = jS;
        var KS = "flex";
        G.FLEX = KS;
        var zS = "willChange";
        G.WILL_CHANGE = zS;
        var YS = "AUTO";
        G.AUTO = YS;
        var QS = ",";
        G.COMMA_DELIMITER = QS;
        var $S = ":";
        G.COLON_DELIMITER = $S;
        var ZS = "|";
        G.BAR_DELIMITER = ZS;
        var JS = "CHILDREN";
        G.CHILDREN = JS;
        var eA = "IMMEDIATE_CHILDREN";
        G.IMMEDIATE_CHILDREN = eA;
        var tA = "SIBLINGS";
        G.SIBLINGS = tA;
        var rA = "PARENT";
        G.PARENT = rA;
        var nA = "preserve-3d";
        G.PRESERVE_3D = nA;
        var iA = "HTML_ELEMENT";
        G.HTML_ELEMENT = iA;
        var oA = "PLAIN_OBJECT";
        G.PLAIN_OBJECT = oA;
        var aA = "ABSTRACT_NODE";
        G.ABSTRACT_NODE = aA;
        var sA = "RENDER_TRANSFORM";
        G.RENDER_TRANSFORM = sA;
        var uA = "RENDER_GENERAL";
        G.RENDER_GENERAL = uA;
        var cA = "RENDER_STYLE";
        G.RENDER_STYLE = cA;
        var lA = "RENDER_PLUGIN";
        G.RENDER_PLUGIN = lA
    }
    );
    var Be = u(Ae => {
        "use strict";
        var bf = Ft().default;
        Object.defineProperty(Ae, "__esModule", {
            value: !0
        });
        var Pn = {
            IX2EngineActionTypes: !0,
            IX2EngineConstants: !0
        };
        Ae.IX2EngineConstants = Ae.IX2EngineActionTypes = void 0;
        var ia = mf();
        Object.keys(ia).forEach(function(e) {
            e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(Pn, e) || e in Ae && Ae[e] === ia[e] || Object.defineProperty(Ae, e, {
                enumerable: !0,
                get: function() {
                    return ia[e]
                }
            })
        });
        var oa = na();
        Object.keys(oa).forEach(function(e) {
            e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(Pn, e) || e in Ae && Ae[e] === oa[e] || Object.defineProperty(Ae, e, {
                enumerable: !0,
                get: function() {
                    return oa[e]
                }
            })
        });
        var aa = yf();
        Object.keys(aa).forEach(function(e) {
            e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(Pn, e) || e in Ae && Ae[e] === aa[e] || Object.defineProperty(Ae, e, {
                enumerable: !0,
                get: function() {
                    return aa[e]
                }
            })
        });
        var sa = If();
        Object.keys(sa).forEach(function(e) {
            e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(Pn, e) || e in Ae && Ae[e] === sa[e] || Object.defineProperty(Ae, e, {
                enumerable: !0,
                get: function() {
                    return sa[e]
                }
            })
        });
        var fA = bf(Tf());
        Ae.IX2EngineActionTypes = fA;
        var dA = bf(Of());
        Ae.IX2EngineConstants = dA
    }
    );
    var wf = u(qn => {
        "use strict";
        Object.defineProperty(qn, "__esModule", {
            value: !0
        });
        qn.ixData = void 0;
        var pA = Be()
          , {IX2_RAW_DATA_IMPORTED: vA} = pA.IX2EngineActionTypes
          , hA = (e=Object.freeze({}), t) => {
            switch (t.type) {
            case vA:
                return t.payload.ixData || Object.freeze({});
            default:
                return e
            }
        }
        ;
        qn.ixData = hA
    }
    );
    var or = u( (JH, It) => {
        function ua() {
            return It.exports = ua = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ,
            It.exports.__esModule = !0,
            It.exports.default = It.exports,
            ua.apply(this, arguments)
        }
        It.exports = ua,
        It.exports.__esModule = !0,
        It.exports.default = It.exports
    }
    );
    var ar = u(Oe => {
        "use strict";
        Object.defineProperty(Oe, "__esModule", {
            value: !0
        });
        var gA = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        Oe.clone = Mn;
        Oe.addLast = Rf;
        Oe.addFirst = xf;
        Oe.removeLast = Cf;
        Oe.removeFirst = Nf;
        Oe.insert = Lf;
        Oe.removeAt = Pf;
        Oe.replaceAt = qf;
        Oe.getIn = Fn;
        Oe.set = Gn;
        Oe.setIn = Un;
        Oe.update = Mf;
        Oe.updateIn = Ff;
        Oe.merge = Gf;
        Oe.mergeDeep = Uf;
        Oe.mergeIn = Xf;
        Oe.omit = Wf;
        Oe.addDefaults = Vf;
        var Sf = "INVALID_ARGS";
        function Af(e) {
            throw new Error(e)
        }
        function ca(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var EA = {}.hasOwnProperty;
        function Mn(e) {
            if (Array.isArray(e))
                return e.slice();
            for (var t = ca(e), r = {}, n = 0; n < t.length; n++) {
                var o = t[n];
                r[o] = e[o]
            }
            return r
        }
        function je(e, t, r) {
            var n = r;
            n == null && Af(Sf);
            for (var o = !1, i = arguments.length, a = Array(i > 3 ? i - 3 : 0), s = 3; s < i; s++)
                a[s - 3] = arguments[s];
            for (var c = 0; c < a.length; c++) {
                var g = a[c];
                if (g != null) {
                    var y = ca(g);
                    if (y.length)
                        for (var p = 0; p <= y.length; p++) {
                            var I = y[p];
                            if (!(e && n[I] !== void 0)) {
                                var _ = g[I];
                                t && Dn(n[I]) && Dn(_) && (_ = je(e, t, n[I], _)),
                                !(_ === void 0 || _ === n[I]) && (o || (o = !0,
                                n = Mn(n)),
                                n[I] = _)
                            }
                        }
                }
            }
            return n
        }
        function Dn(e) {
            var t = typeof e > "u" ? "undefined" : gA(e);
            return e != null && (t === "object" || t === "function")
        }
        function Rf(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }
        function xf(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }
        function Cf(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }
        function Nf(e) {
            return e.length ? e.slice(1) : e
        }
        function Lf(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }
        function Pf(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }
        function qf(e, t, r) {
            if (e[t] === r)
                return e;
            for (var n = e.length, o = Array(n), i = 0; i < n; i++)
                o[i] = e[i];
            return o[t] = r,
            o
        }
        function Fn(e, t) {
            if (!Array.isArray(t) && Af(Sf),
            e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var o = t[n];
                    if (r = r?.[o],
                    r === void 0)
                        return r
                }
                return r
            }
        }
        function Gn(e, t, r) {
            var n = typeof t == "number" ? [] : {}
              , o = e ?? n;
            if (o[t] === r)
                return o;
            var i = Mn(o);
            return i[t] = r,
            i
        }
        function Df(e, t, r, n) {
            var o = void 0
              , i = t[n];
            if (n === t.length - 1)
                o = r;
            else {
                var a = Dn(e) && Dn(e[i]) ? e[i] : typeof t[n + 1] == "number" ? [] : {};
                o = Df(a, t, r, n + 1)
            }
            return Gn(e, i, o)
        }
        function Un(e, t, r) {
            return t.length ? Df(e, t, r, 0) : r
        }
        function Mf(e, t, r) {
            var n = e?.[t]
              , o = r(n);
            return Gn(e, t, o)
        }
        function Ff(e, t, r) {
            var n = Fn(e, t)
              , o = r(n);
            return Un(e, t, o)
        }
        function Gf(e, t, r, n, o, i) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++)
                s[c - 6] = arguments[c];
            return s.length ? je.call.apply(je, [null, !1, !1, e, t, r, n, o, i].concat(s)) : je(!1, !1, e, t, r, n, o, i)
        }
        function Uf(e, t, r, n, o, i) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++)
                s[c - 6] = arguments[c];
            return s.length ? je.call.apply(je, [null, !1, !0, e, t, r, n, o, i].concat(s)) : je(!1, !0, e, t, r, n, o, i)
        }
        function Xf(e, t, r, n, o, i, a) {
            var s = Fn(e, t);
            s == null && (s = {});
            for (var c = void 0, g = arguments.length, y = Array(g > 7 ? g - 7 : 0), p = 7; p < g; p++)
                y[p - 7] = arguments[p];
            return y.length ? c = je.call.apply(je, [null, !1, !1, s, r, n, o, i, a].concat(y)) : c = je(!1, !1, s, r, n, o, i, a),
            Un(e, t, c)
        }
        function Wf(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, o = 0; o < r.length; o++)
                if (EA.call(e, r[o])) {
                    n = !0;
                    break
                }
            if (!n)
                return e;
            for (var i = {}, a = ca(e), s = 0; s < a.length; s++) {
                var c = a[s];
                r.indexOf(c) >= 0 || (i[c] = e[c])
            }
            return i
        }
        function Vf(e, t, r, n, o, i) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++)
                s[c - 6] = arguments[c];
            return s.length ? je.call.apply(je, [null, !0, !1, e, t, r, n, o, i].concat(s)) : je(!0, !1, e, t, r, n, o, i)
        }
        var _A = {
            clone: Mn,
            addLast: Rf,
            addFirst: xf,
            removeLast: Cf,
            removeFirst: Nf,
            insert: Lf,
            removeAt: Pf,
            replaceAt: qf,
            getIn: Fn,
            set: Gn,
            setIn: Un,
            update: Mf,
            updateIn: Ff,
            merge: Gf,
            mergeDeep: Uf,
            mergeIn: Xf,
            omit: Wf,
            addDefaults: Vf
        };
        Oe.default = _A
    }
    );
    var Hf = u(Xn => {
        "use strict";
        var mA = et().default;
        Object.defineProperty(Xn, "__esModule", {
            value: !0
        });
        Xn.ixRequest = void 0;
        var yA = mA(or())
          , IA = Be()
          , TA = ar()
          , {IX2_PREVIEW_REQUESTED: OA, IX2_PLAYBACK_REQUESTED: bA, IX2_STOP_REQUESTED: wA, IX2_CLEAR_REQUESTED: SA} = IA.IX2EngineActionTypes
          , AA = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        }
          , kf = Object.create(null, {
            [OA]: {
                value: "preview"
            },
            [bA]: {
                value: "playback"
            },
            [wA]: {
                value: "stop"
            },
            [SA]: {
                value: "clear"
            }
        })
          , RA = (e=AA, t) => {
            if (t.type in kf) {
                let r = [kf[t.type]];
                return (0,
                TA.setIn)(e, [r], (0,
                yA.default)({}, t.payload))
            }
            return e
        }
        ;
        Xn.ixRequest = RA
    }
    );
    var jf = u(Wn => {
        "use strict";
        Object.defineProperty(Wn, "__esModule", {
            value: !0
        });
        Wn.ixSession = void 0;
        var xA = Be()
          , dt = ar()
          , {IX2_SESSION_INITIALIZED: CA, IX2_SESSION_STARTED: NA, IX2_TEST_FRAME_RENDERED: LA, IX2_SESSION_STOPPED: PA, IX2_EVENT_LISTENER_ADDED: qA, IX2_EVENT_STATE_CHANGED: DA, IX2_ANIMATION_FRAME_CHANGED: MA, IX2_ACTION_LIST_PLAYBACK_CHANGED: FA, IX2_VIEWPORT_WIDTH_CHANGED: GA, IX2_MEDIA_QUERIES_DEFINED: UA} = xA.IX2EngineActionTypes
          , Bf = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        }
          , XA = 20
          , WA = (e=Bf, t) => {
            switch (t.type) {
            case CA:
                {
                    let {hasBoundaryNodes: r, reducedMotion: n} = t.payload;
                    return (0,
                    dt.merge)(e, {
                        hasBoundaryNodes: r,
                        reducedMotion: n
                    })
                }
            case NA:
                return (0,
                dt.set)(e, "active", !0);
            case LA:
                {
                    let {payload: {step: r=XA}} = t;
                    return (0,
                    dt.set)(e, "tick", e.tick + r)
                }
            case PA:
                return Bf;
            case MA:
                {
                    let {payload: {now: r}} = t;
                    return (0,
                    dt.set)(e, "tick", r)
                }
            case qA:
                {
                    let r = (0,
                    dt.addLast)(e.eventListeners, t.payload);
                    return (0,
                    dt.set)(e, "eventListeners", r)
                }
            case DA:
                {
                    let {stateKey: r, newState: n} = t.payload;
                    return (0,
                    dt.setIn)(e, ["eventState", r], n)
                }
            case FA:
                {
                    let {actionListId: r, isPlaying: n} = t.payload;
                    return (0,
                    dt.setIn)(e, ["playbackState", r], n)
                }
            case GA:
                {
                    let {width: r, mediaQueries: n} = t.payload
                      , o = n.length
                      , i = null;
                    for (let a = 0; a < o; a++) {
                        let {key: s, min: c, max: g} = n[a];
                        if (r >= c && r <= g) {
                            i = s;
                            break
                        }
                    }
                    return (0,
                    dt.merge)(e, {
                        viewportWidth: r,
                        mediaQueryKey: i
                    })
                }
            case UA:
                return (0,
                dt.set)(e, "hasDefinedMediaQueries", !0);
            default:
                return e
            }
        }
        ;
        Wn.ixSession = WA
    }
    );
    var zf = u( (nB, Kf) => {
        function VA() {
            this.__data__ = [],
            this.size = 0
        }
        Kf.exports = VA
    }
    );
    var Vn = u( (iB, Yf) => {
        function kA(e, t) {
            return e === t || e !== e && t !== t
        }
        Yf.exports = kA
    }
    );
    var Xr = u( (oB, Qf) => {
        var HA = Vn();
        function BA(e, t) {
            for (var r = e.length; r--; )
                if (HA(e[r][0], t))
                    return r;
            return -1
        }
        Qf.exports = BA
    }
    );
    var Zf = u( (aB, $f) => {
        var jA = Xr()
          , KA = Array.prototype
          , zA = KA.splice;
        function YA(e) {
            var t = this.__data__
              , r = jA(t, e);
            if (r < 0)
                return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : zA.call(t, r, 1),
            --this.size,
            !0
        }
        $f.exports = YA
    }
    );
    var ed = u( (sB, Jf) => {
        var QA = Xr();
        function $A(e) {
            var t = this.__data__
              , r = QA(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        Jf.exports = $A
    }
    );
    var rd = u( (uB, td) => {
        var ZA = Xr();
        function JA(e) {
            return ZA(this.__data__, e) > -1
        }
        td.exports = JA
    }
    );
    var id = u( (cB, nd) => {
        var e0 = Xr();
        function t0(e, t) {
            var r = this.__data__
              , n = e0(r, e);
            return n < 0 ? (++this.size,
            r.push([e, t])) : r[n][1] = t,
            this
        }
        nd.exports = t0
    }
    );
    var Wr = u( (lB, od) => {
        var r0 = zf()
          , n0 = Zf()
          , i0 = ed()
          , o0 = rd()
          , a0 = id();
        function sr(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        sr.prototype.clear = r0;
        sr.prototype.delete = n0;
        sr.prototype.get = i0;
        sr.prototype.has = o0;
        sr.prototype.set = a0;
        od.exports = sr
    }
    );
    var sd = u( (fB, ad) => {
        var s0 = Wr();
        function u0() {
            this.__data__ = new s0,
            this.size = 0
        }
        ad.exports = u0
    }
    );
    var cd = u( (dB, ud) => {
        function c0(e) {
            var t = this.__data__
              , r = t.delete(e);
            return this.size = t.size,
            r
        }
        ud.exports = c0
    }
    );
    var fd = u( (pB, ld) => {
        function l0(e) {
            return this.__data__.get(e)
        }
        ld.exports = l0
    }
    );
    var pd = u( (vB, dd) => {
        function f0(e) {
            return this.__data__.has(e)
        }
        dd.exports = f0
    }
    );
    var pt = u( (hB, vd) => {
        function d0(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        vd.exports = d0
    }
    );
    var la = u( (gB, hd) => {
        var p0 = At()
          , v0 = pt()
          , h0 = "[object AsyncFunction]"
          , g0 = "[object Function]"
          , E0 = "[object GeneratorFunction]"
          , _0 = "[object Proxy]";
        function m0(e) {
            if (!v0(e))
                return !1;
            var t = p0(e);
            return t == g0 || t == E0 || t == h0 || t == _0
        }
        hd.exports = m0
    }
    );
    var Ed = u( (EB, gd) => {
        var y0 = nt()
          , I0 = y0["__core-js_shared__"];
        gd.exports = I0
    }
    );
    var yd = u( (_B, md) => {
        var fa = Ed()
          , _d = function() {
            var e = /[^.]+$/.exec(fa && fa.keys && fa.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();
        function T0(e) {
            return !!_d && _d in e
        }
        md.exports = T0
    }
    );
    var da = u( (mB, Id) => {
        var O0 = Function.prototype
          , b0 = O0.toString;
        function w0(e) {
            if (e != null) {
                try {
                    return b0.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        Id.exports = w0
    }
    );
    var Od = u( (yB, Td) => {
        var S0 = la()
          , A0 = yd()
          , R0 = pt()
          , x0 = da()
          , C0 = /[\\^$.*+?()[\]{}|]/g
          , N0 = /^\[object .+?Constructor\]$/
          , L0 = Function.prototype
          , P0 = Object.prototype
          , q0 = L0.toString
          , D0 = P0.hasOwnProperty
          , M0 = RegExp("^" + q0.call(D0).replace(C0, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        function F0(e) {
            if (!R0(e) || A0(e))
                return !1;
            var t = S0(e) ? M0 : N0;
            return t.test(x0(e))
        }
        Td.exports = F0
    }
    );
    var wd = u( (IB, bd) => {
        function G0(e, t) {
            return e?.[t]
        }
        bd.exports = G0
    }
    );
    var Rt = u( (TB, Sd) => {
        var U0 = Od()
          , X0 = wd();
        function W0(e, t) {
            var r = X0(e, t);
            return U0(r) ? r : void 0
        }
        Sd.exports = W0
    }
    );
    var kn = u( (OB, Ad) => {
        var V0 = Rt()
          , k0 = nt()
          , H0 = V0(k0, "Map");
        Ad.exports = H0
    }
    );
    var Vr = u( (bB, Rd) => {
        var B0 = Rt()
          , j0 = B0(Object, "create");
        Rd.exports = j0
    }
    );
    var Nd = u( (wB, Cd) => {
        var xd = Vr();
        function K0() {
            this.__data__ = xd ? xd(null) : {},
            this.size = 0
        }
        Cd.exports = K0
    }
    );
    var Pd = u( (SB, Ld) => {
        function z0(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0,
            t
        }
        Ld.exports = z0
    }
    );
    var Dd = u( (AB, qd) => {
        var Y0 = Vr()
          , Q0 = "__lodash_hash_undefined__"
          , $0 = Object.prototype
          , Z0 = $0.hasOwnProperty;
        function J0(e) {
            var t = this.__data__;
            if (Y0) {
                var r = t[e];
                return r === Q0 ? void 0 : r
            }
            return Z0.call(t, e) ? t[e] : void 0
        }
        qd.exports = J0
    }
    );
    var Fd = u( (RB, Md) => {
        var eR = Vr()
          , tR = Object.prototype
          , rR = tR.hasOwnProperty;
        function nR(e) {
            var t = this.__data__;
            return eR ? t[e] !== void 0 : rR.call(t, e)
        }
        Md.exports = nR
    }
    );
    var Ud = u( (xB, Gd) => {
        var iR = Vr()
          , oR = "__lodash_hash_undefined__";
        function aR(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1,
            r[e] = iR && t === void 0 ? oR : t,
            this
        }
        Gd.exports = aR
    }
    );
    var Wd = u( (CB, Xd) => {
        var sR = Nd()
          , uR = Pd()
          , cR = Dd()
          , lR = Fd()
          , fR = Ud();
        function ur(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        ur.prototype.clear = sR;
        ur.prototype.delete = uR;
        ur.prototype.get = cR;
        ur.prototype.has = lR;
        ur.prototype.set = fR;
        Xd.exports = ur
    }
    );
    var Hd = u( (NB, kd) => {
        var Vd = Wd()
          , dR = Wr()
          , pR = kn();
        function vR() {
            this.size = 0,
            this.__data__ = {
                hash: new Vd,
                map: new (pR || dR),
                string: new Vd
            }
        }
        kd.exports = vR
    }
    );
    var jd = u( (LB, Bd) => {
        function hR(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        Bd.exports = hR
    }
    );
    var kr = u( (PB, Kd) => {
        var gR = jd();
        function ER(e, t) {
            var r = e.__data__;
            return gR(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        Kd.exports = ER
    }
    );
    var Yd = u( (qB, zd) => {
        var _R = kr();
        function mR(e) {
            var t = _R(this, e).delete(e);
            return this.size -= t ? 1 : 0,
            t
        }
        zd.exports = mR
    }
    );
    var $d = u( (DB, Qd) => {
        var yR = kr();
        function IR(e) {
            return yR(this, e).get(e)
        }
        Qd.exports = IR
    }
    );
    var Jd = u( (MB, Zd) => {
        var TR = kr();
        function OR(e) {
            return TR(this, e).has(e)
        }
        Zd.exports = OR
    }
    );
    var tp = u( (FB, ep) => {
        var bR = kr();
        function wR(e, t) {
            var r = bR(this, e)
              , n = r.size;
            return r.set(e, t),
            this.size += r.size == n ? 0 : 1,
            this
        }
        ep.exports = wR
    }
    );
    var Hn = u( (GB, rp) => {
        var SR = Hd()
          , AR = Yd()
          , RR = $d()
          , xR = Jd()
          , CR = tp();
        function cr(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        cr.prototype.clear = SR;
        cr.prototype.delete = AR;
        cr.prototype.get = RR;
        cr.prototype.has = xR;
        cr.prototype.set = CR;
        rp.exports = cr
    }
    );
    var ip = u( (UB, np) => {
        var NR = Wr()
          , LR = kn()
          , PR = Hn()
          , qR = 200;
        function DR(e, t) {
            var r = this.__data__;
            if (r instanceof NR) {
                var n = r.__data__;
                if (!LR || n.length < qR - 1)
                    return n.push([e, t]),
                    this.size = ++r.size,
                    this;
                r = this.__data__ = new PR(n)
            }
            return r.set(e, t),
            this.size = r.size,
            this
        }
        np.exports = DR
    }
    );
    var pa = u( (XB, op) => {
        var MR = Wr()
          , FR = sd()
          , GR = cd()
          , UR = fd()
          , XR = pd()
          , WR = ip();
        function lr(e) {
            var t = this.__data__ = new MR(e);
            this.size = t.size
        }
        lr.prototype.clear = FR;
        lr.prototype.delete = GR;
        lr.prototype.get = UR;
        lr.prototype.has = XR;
        lr.prototype.set = WR;
        op.exports = lr
    }
    );
    var sp = u( (WB, ap) => {
        var VR = "__lodash_hash_undefined__";
        function kR(e) {
            return this.__data__.set(e, VR),
            this
        }
        ap.exports = kR
    }
    );
    var cp = u( (VB, up) => {
        function HR(e) {
            return this.__data__.has(e)
        }
        up.exports = HR
    }
    );
    var fp = u( (kB, lp) => {
        var BR = Hn()
          , jR = sp()
          , KR = cp();
        function Bn(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.__data__ = new BR; ++t < r; )
                this.add(e[t])
        }
        Bn.prototype.add = Bn.prototype.push = jR;
        Bn.prototype.has = KR;
        lp.exports = Bn
    }
    );
    var pp = u( (HB, dp) => {
        function zR(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
                if (t(e[r], r, e))
                    return !0;
            return !1
        }
        dp.exports = zR
    }
    );
    var hp = u( (BB, vp) => {
        function YR(e, t) {
            return e.has(t)
        }
        vp.exports = YR
    }
    );
    var va = u( (jB, gp) => {
        var QR = fp()
          , $R = pp()
          , ZR = hp()
          , JR = 1
          , ex = 2;
        function tx(e, t, r, n, o, i) {
            var a = r & JR
              , s = e.length
              , c = t.length;
            if (s != c && !(a && c > s))
                return !1;
            var g = i.get(e)
              , y = i.get(t);
            if (g && y)
                return g == t && y == e;
            var p = -1
              , I = !0
              , _ = r & ex ? new QR : void 0;
            for (i.set(e, t),
            i.set(t, e); ++p < s; ) {
                var m = e[p]
                  , b = t[p];
                if (n)
                    var C = a ? n(b, m, p, t, e, i) : n(m, b, p, e, t, i);
                if (C !== void 0) {
                    if (C)
                        continue;
                    I = !1;
                    break
                }
                if (_) {
                    if (!$R(t, function(x, N) {
                        if (!ZR(_, N) && (m === x || o(m, x, r, n, i)))
                            return _.push(N)
                    })) {
                        I = !1;
                        break
                    }
                } else if (!(m === b || o(m, b, r, n, i))) {
                    I = !1;
                    break
                }
            }
            return i.delete(e),
            i.delete(t),
            I
        }
        gp.exports = tx
    }
    );
    var _p = u( (KB, Ep) => {
        var rx = nt()
          , nx = rx.Uint8Array;
        Ep.exports = nx
    }
    );
    var yp = u( (zB, mp) => {
        function ix(e) {
            var t = -1
              , r = Array(e.size);
            return e.forEach(function(n, o) {
                r[++t] = [o, n]
            }),
            r
        }
        mp.exports = ix
    }
    );
    var Tp = u( (YB, Ip) => {
        function ox(e) {
            var t = -1
              , r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }),
            r
        }
        Ip.exports = ox
    }
    );
    var Ap = u( (QB, Sp) => {
        var Op = tr()
          , bp = _p()
          , ax = Vn()
          , sx = va()
          , ux = yp()
          , cx = Tp()
          , lx = 1
          , fx = 2
          , dx = "[object Boolean]"
          , px = "[object Date]"
          , vx = "[object Error]"
          , hx = "[object Map]"
          , gx = "[object Number]"
          , Ex = "[object RegExp]"
          , _x = "[object Set]"
          , mx = "[object String]"
          , yx = "[object Symbol]"
          , Ix = "[object ArrayBuffer]"
          , Tx = "[object DataView]"
          , wp = Op ? Op.prototype : void 0
          , ha = wp ? wp.valueOf : void 0;
        function Ox(e, t, r, n, o, i, a) {
            switch (r) {
            case Tx:
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                    return !1;
                e = e.buffer,
                t = t.buffer;
            case Ix:
                return !(e.byteLength != t.byteLength || !i(new bp(e), new bp(t)));
            case dx:
            case px:
            case gx:
                return ax(+e, +t);
            case vx:
                return e.name == t.name && e.message == t.message;
            case Ex:
            case mx:
                return e == t + "";
            case hx:
                var s = ux;
            case _x:
                var c = n & lx;
                if (s || (s = cx),
                e.size != t.size && !c)
                    return !1;
                var g = a.get(e);
                if (g)
                    return g == t;
                n |= fx,
                a.set(e, t);
                var y = sx(s(e), s(t), n, o, i, a);
                return a.delete(e),
                y;
            case yx:
                if (ha)
                    return ha.call(e) == ha.call(t)
            }
            return !1
        }
        Sp.exports = Ox
    }
    );
    var jn = u( ($B, Rp) => {
        function bx(e, t) {
            for (var r = -1, n = t.length, o = e.length; ++r < n; )
                e[o + r] = t[r];
            return e
        }
        Rp.exports = bx
    }
    );
    var Le = u( (ZB, xp) => {
        var wx = Array.isArray;
        xp.exports = wx
    }
    );
    var ga = u( (JB, Cp) => {
        var Sx = jn()
          , Ax = Le();
        function Rx(e, t, r) {
            var n = t(e);
            return Ax(e) ? n : Sx(n, r(e))
        }
        Cp.exports = Rx
    }
    );
    var Lp = u( (e5, Np) => {
        function xx(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, o = 0, i = []; ++r < n; ) {
                var a = e[r];
                t(a, r, e) && (i[o++] = a)
            }
            return i
        }
        Np.exports = xx
    }
    );
    var Ea = u( (t5, Pp) => {
        function Cx() {
            return []
        }
        Pp.exports = Cx
    }
    );
    var _a = u( (r5, Dp) => {
        var Nx = Lp()
          , Lx = Ea()
          , Px = Object.prototype
          , qx = Px.propertyIsEnumerable
          , qp = Object.getOwnPropertySymbols
          , Dx = qp ? function(e) {
            return e == null ? [] : (e = Object(e),
            Nx(qp(e), function(t) {
                return qx.call(e, t)
            }))
        }
        : Lx;
        Dp.exports = Dx
    }
    );
    var Fp = u( (n5, Mp) => {
        function Mx(e, t) {
            for (var r = -1, n = Array(e); ++r < e; )
                n[r] = t(r);
            return n
        }
        Mp.exports = Mx
    }
    );
    var Up = u( (i5, Gp) => {
        var Fx = At()
          , Gx = yt()
          , Ux = "[object Arguments]";
        function Xx(e) {
            return Gx(e) && Fx(e) == Ux
        }
        Gp.exports = Xx
    }
    );
    var Hr = u( (o5, Vp) => {
        var Xp = Up()
          , Wx = yt()
          , Wp = Object.prototype
          , Vx = Wp.hasOwnProperty
          , kx = Wp.propertyIsEnumerable
          , Hx = Xp(function() {
            return arguments
        }()) ? Xp : function(e) {
            return Wx(e) && Vx.call(e, "callee") && !kx.call(e, "callee")
        }
        ;
        Vp.exports = Hx
    }
    );
    var Hp = u( (a5, kp) => {
        function Bx() {
            return !1
        }
        kp.exports = Bx
    }
    );
    var Kn = u( (Br, fr) => {
        var jx = nt()
          , Kx = Hp()
          , Kp = typeof Br == "object" && Br && !Br.nodeType && Br
          , Bp = Kp && typeof fr == "object" && fr && !fr.nodeType && fr
          , zx = Bp && Bp.exports === Kp
          , jp = zx ? jx.Buffer : void 0
          , Yx = jp ? jp.isBuffer : void 0
          , Qx = Yx || Kx;
        fr.exports = Qx
    }
    );
    var zn = u( (s5, zp) => {
        var $x = 9007199254740991
          , Zx = /^(?:0|[1-9]\d*)$/;
        function Jx(e, t) {
            var r = typeof e;
            return t = t ?? $x,
            !!t && (r == "number" || r != "symbol" && Zx.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        zp.exports = Jx
    }
    );
    var Yn = u( (u5, Yp) => {
        var eC = 9007199254740991;
        function tC(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= eC
        }
        Yp.exports = tC
    }
    );
    var $p = u( (c5, Qp) => {
        var rC = At()
          , nC = Yn()
          , iC = yt()
          , oC = "[object Arguments]"
          , aC = "[object Array]"
          , sC = "[object Boolean]"
          , uC = "[object Date]"
          , cC = "[object Error]"
          , lC = "[object Function]"
          , fC = "[object Map]"
          , dC = "[object Number]"
          , pC = "[object Object]"
          , vC = "[object RegExp]"
          , hC = "[object Set]"
          , gC = "[object String]"
          , EC = "[object WeakMap]"
          , _C = "[object ArrayBuffer]"
          , mC = "[object DataView]"
          , yC = "[object Float32Array]"
          , IC = "[object Float64Array]"
          , TC = "[object Int8Array]"
          , OC = "[object Int16Array]"
          , bC = "[object Int32Array]"
          , wC = "[object Uint8Array]"
          , SC = "[object Uint8ClampedArray]"
          , AC = "[object Uint16Array]"
          , RC = "[object Uint32Array]"
          , ye = {};
        ye[yC] = ye[IC] = ye[TC] = ye[OC] = ye[bC] = ye[wC] = ye[SC] = ye[AC] = ye[RC] = !0;
        ye[oC] = ye[aC] = ye[_C] = ye[sC] = ye[mC] = ye[uC] = ye[cC] = ye[lC] = ye[fC] = ye[dC] = ye[pC] = ye[vC] = ye[hC] = ye[gC] = ye[EC] = !1;
        function xC(e) {
            return iC(e) && nC(e.length) && !!ye[rC(e)]
        }
        Qp.exports = xC
    }
    );
    var Jp = u( (l5, Zp) => {
        function CC(e) {
            return function(t) {
                return e(t)
            }
        }
        Zp.exports = CC
    }
    );
    var tv = u( (jr, dr) => {
        var NC = Wo()
          , ev = typeof jr == "object" && jr && !jr.nodeType && jr
          , Kr = ev && typeof dr == "object" && dr && !dr.nodeType && dr
          , LC = Kr && Kr.exports === ev
          , ma = LC && NC.process
          , PC = function() {
            try {
                var e = Kr && Kr.require && Kr.require("util").types;
                return e || ma && ma.binding && ma.binding("util")
            } catch {}
        }();
        dr.exports = PC
    }
    );
    var Qn = u( (f5, iv) => {
        var qC = $p()
          , DC = Jp()
          , rv = tv()
          , nv = rv && rv.isTypedArray
          , MC = nv ? DC(nv) : qC;
        iv.exports = MC
    }
    );
    var ya = u( (d5, ov) => {
        var FC = Fp()
          , GC = Hr()
          , UC = Le()
          , XC = Kn()
          , WC = zn()
          , VC = Qn()
          , kC = Object.prototype
          , HC = kC.hasOwnProperty;
        function BC(e, t) {
            var r = UC(e)
              , n = !r && GC(e)
              , o = !r && !n && XC(e)
              , i = !r && !n && !o && VC(e)
              , a = r || n || o || i
              , s = a ? FC(e.length, String) : []
              , c = s.length;
            for (var g in e)
                (t || HC.call(e, g)) && !(a && (g == "length" || o && (g == "offset" || g == "parent") || i && (g == "buffer" || g == "byteLength" || g == "byteOffset") || WC(g, c))) && s.push(g);
            return s
        }
        ov.exports = BC
    }
    );
    var $n = u( (p5, av) => {
        var jC = Object.prototype;
        function KC(e) {
            var t = e && e.constructor
              , r = typeof t == "function" && t.prototype || jC;
            return e === r
        }
        av.exports = KC
    }
    );
    var uv = u( (v5, sv) => {
        var zC = Vo()
          , YC = zC(Object.keys, Object);
        sv.exports = YC
    }
    );
    var Zn = u( (h5, cv) => {
        var QC = $n()
          , $C = uv()
          , ZC = Object.prototype
          , JC = ZC.hasOwnProperty;
        function eN(e) {
            if (!QC(e))
                return $C(e);
            var t = [];
            for (var r in Object(e))
                JC.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        cv.exports = eN
    }
    );
    var Wt = u( (g5, lv) => {
        var tN = la()
          , rN = Yn();
        function nN(e) {
            return e != null && rN(e.length) && !tN(e)
        }
        lv.exports = nN
    }
    );
    var zr = u( (E5, fv) => {
        var iN = ya()
          , oN = Zn()
          , aN = Wt();
        function sN(e) {
            return aN(e) ? iN(e) : oN(e)
        }
        fv.exports = sN
    }
    );
    var pv = u( (_5, dv) => {
        var uN = ga()
          , cN = _a()
          , lN = zr();
        function fN(e) {
            return uN(e, lN, cN)
        }
        dv.exports = fN
    }
    );
    var gv = u( (m5, hv) => {
        var vv = pv()
          , dN = 1
          , pN = Object.prototype
          , vN = pN.hasOwnProperty;
        function hN(e, t, r, n, o, i) {
            var a = r & dN
              , s = vv(e)
              , c = s.length
              , g = vv(t)
              , y = g.length;
            if (c != y && !a)
                return !1;
            for (var p = c; p--; ) {
                var I = s[p];
                if (!(a ? I in t : vN.call(t, I)))
                    return !1
            }
            var _ = i.get(e)
              , m = i.get(t);
            if (_ && m)
                return _ == t && m == e;
            var b = !0;
            i.set(e, t),
            i.set(t, e);
            for (var C = a; ++p < c; ) {
                I = s[p];
                var x = e[I]
                  , N = t[I];
                if (n)
                    var R = a ? n(N, x, I, t, e, i) : n(x, N, I, e, t, i);
                if (!(R === void 0 ? x === N || o(x, N, r, n, i) : R)) {
                    b = !1;
                    break
                }
                C || (C = I == "constructor")
            }
            if (b && !C) {
                var M = e.constructor
                  , D = t.constructor;
                M != D && "constructor"in e && "constructor"in t && !(typeof M == "function" && M instanceof M && typeof D == "function" && D instanceof D) && (b = !1)
            }
            return i.delete(e),
            i.delete(t),
            b
        }
        hv.exports = hN
    }
    );
    var _v = u( (y5, Ev) => {
        var gN = Rt()
          , EN = nt()
          , _N = gN(EN, "DataView");
        Ev.exports = _N
    }
    );
    var yv = u( (I5, mv) => {
        var mN = Rt()
          , yN = nt()
          , IN = mN(yN, "Promise");
        mv.exports = IN
    }
    );
    var Tv = u( (T5, Iv) => {
        var TN = Rt()
          , ON = nt()
          , bN = TN(ON, "Set");
        Iv.exports = bN
    }
    );
    var Ia = u( (O5, Ov) => {
        var wN = Rt()
          , SN = nt()
          , AN = wN(SN, "WeakMap");
        Ov.exports = AN
    }
    );
    var Jn = u( (b5, Cv) => {
        var Ta = _v()
          , Oa = kn()
          , ba = yv()
          , wa = Tv()
          , Sa = Ia()
          , xv = At()
          , pr = da()
          , bv = "[object Map]"
          , RN = "[object Object]"
          , wv = "[object Promise]"
          , Sv = "[object Set]"
          , Av = "[object WeakMap]"
          , Rv = "[object DataView]"
          , xN = pr(Ta)
          , CN = pr(Oa)
          , NN = pr(ba)
          , LN = pr(wa)
          , PN = pr(Sa)
          , Vt = xv;
        (Ta && Vt(new Ta(new ArrayBuffer(1))) != Rv || Oa && Vt(new Oa) != bv || ba && Vt(ba.resolve()) != wv || wa && Vt(new wa) != Sv || Sa && Vt(new Sa) != Av) && (Vt = function(e) {
            var t = xv(e)
              , r = t == RN ? e.constructor : void 0
              , n = r ? pr(r) : "";
            if (n)
                switch (n) {
                case xN:
                    return Rv;
                case CN:
                    return bv;
                case NN:
                    return wv;
                case LN:
                    return Sv;
                case PN:
                    return Av
                }
            return t
        }
        );
        Cv.exports = Vt
    }
    );
    var Gv = u( (w5, Fv) => {
        var Aa = pa()
          , qN = va()
          , DN = Ap()
          , MN = gv()
          , Nv = Jn()
          , Lv = Le()
          , Pv = Kn()
          , FN = Qn()
          , GN = 1
          , qv = "[object Arguments]"
          , Dv = "[object Array]"
          , ei = "[object Object]"
          , UN = Object.prototype
          , Mv = UN.hasOwnProperty;
        function XN(e, t, r, n, o, i) {
            var a = Lv(e)
              , s = Lv(t)
              , c = a ? Dv : Nv(e)
              , g = s ? Dv : Nv(t);
            c = c == qv ? ei : c,
            g = g == qv ? ei : g;
            var y = c == ei
              , p = g == ei
              , I = c == g;
            if (I && Pv(e)) {
                if (!Pv(t))
                    return !1;
                a = !0,
                y = !1
            }
            if (I && !y)
                return i || (i = new Aa),
                a || FN(e) ? qN(e, t, r, n, o, i) : DN(e, t, c, r, n, o, i);
            if (!(r & GN)) {
                var _ = y && Mv.call(e, "__wrapped__")
                  , m = p && Mv.call(t, "__wrapped__");
                if (_ || m) {
                    var b = _ ? e.value() : e
                      , C = m ? t.value() : t;
                    return i || (i = new Aa),
                    o(b, C, r, n, i)
                }
            }
            return I ? (i || (i = new Aa),
            MN(e, t, r, n, o, i)) : !1
        }
        Fv.exports = XN
    }
    );
    var Ra = u( (S5, Wv) => {
        var WN = Gv()
          , Uv = yt();
        function Xv(e, t, r, n, o) {
            return e === t ? !0 : e == null || t == null || !Uv(e) && !Uv(t) ? e !== e && t !== t : WN(e, t, r, n, Xv, o)
        }
        Wv.exports = Xv
    }
    );
    var kv = u( (A5, Vv) => {
        var VN = pa()
          , kN = Ra()
          , HN = 1
          , BN = 2;
        function jN(e, t, r, n) {
            var o = r.length
              , i = o
              , a = !n;
            if (e == null)
                return !i;
            for (e = Object(e); o--; ) {
                var s = r[o];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0]in e))
                    return !1
            }
            for (; ++o < i; ) {
                s = r[o];
                var c = s[0]
                  , g = e[c]
                  , y = s[1];
                if (a && s[2]) {
                    if (g === void 0 && !(c in e))
                        return !1
                } else {
                    var p = new VN;
                    if (n)
                        var I = n(g, y, c, e, t, p);
                    if (!(I === void 0 ? kN(y, g, HN | BN, n, p) : I))
                        return !1
                }
            }
            return !0
        }
        Vv.exports = jN
    }
    );
    var xa = u( (R5, Hv) => {
        var KN = pt();
        function zN(e) {
            return e === e && !KN(e)
        }
        Hv.exports = zN
    }
    );
    var jv = u( (x5, Bv) => {
        var YN = xa()
          , QN = zr();
        function $N(e) {
            for (var t = QN(e), r = t.length; r--; ) {
                var n = t[r]
                  , o = e[n];
                t[r] = [n, o, YN(o)]
            }
            return t
        }
        Bv.exports = $N
    }
    );
    var Ca = u( (C5, Kv) => {
        function ZN(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        Kv.exports = ZN
    }
    );
    var Yv = u( (N5, zv) => {
        var JN = kv()
          , eL = jv()
          , tL = Ca();
        function rL(e) {
            var t = eL(e);
            return t.length == 1 && t[0][2] ? tL(t[0][0], t[0][1]) : function(r) {
                return r === e || JN(r, e, t)
            }
        }
        zv.exports = rL
    }
    );
    var Yr = u( (L5, Qv) => {
        var nL = At()
          , iL = yt()
          , oL = "[object Symbol]";
        function aL(e) {
            return typeof e == "symbol" || iL(e) && nL(e) == oL
        }
        Qv.exports = aL
    }
    );
    var ti = u( (P5, $v) => {
        var sL = Le()
          , uL = Yr()
          , cL = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
          , lL = /^\w*$/;
        function fL(e, t) {
            if (sL(e))
                return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || uL(e) ? !0 : lL.test(e) || !cL.test(e) || t != null && e in Object(t)
        }
        $v.exports = fL
    }
    );
    var eh = u( (q5, Jv) => {
        var Zv = Hn()
          , dL = "Expected a function";
        function Na(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function")
                throw new TypeError(dL);
            var r = function() {
                var n = arguments
                  , o = t ? t.apply(this, n) : n[0]
                  , i = r.cache;
                if (i.has(o))
                    return i.get(o);
                var a = e.apply(this, n);
                return r.cache = i.set(o, a) || i,
                a
            };
            return r.cache = new (Na.Cache || Zv),
            r
        }
        Na.Cache = Zv;
        Jv.exports = Na
    }
    );
    var rh = u( (D5, th) => {
        var pL = eh()
          , vL = 500;
        function hL(e) {
            var t = pL(e, function(n) {
                return r.size === vL && r.clear(),
                n
            })
              , r = t.cache;
            return t
        }
        th.exports = hL
    }
    );
    var ih = u( (M5, nh) => {
        var gL = rh()
          , EL = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
          , _L = /\\(\\)?/g
          , mL = gL(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""),
            e.replace(EL, function(r, n, o, i) {
                t.push(o ? i.replace(_L, "$1") : n || r)
            }),
            t
        });
        nh.exports = mL
    }
    );
    var La = u( (F5, oh) => {
        function yL(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
                o[r] = t(e[r], r, e);
            return o
        }
        oh.exports = yL
    }
    );
    var fh = u( (G5, lh) => {
        var ah = tr()
          , IL = La()
          , TL = Le()
          , OL = Yr()
          , bL = 1 / 0
          , sh = ah ? ah.prototype : void 0
          , uh = sh ? sh.toString : void 0;
        function ch(e) {
            if (typeof e == "string")
                return e;
            if (TL(e))
                return IL(e, ch) + "";
            if (OL(e))
                return uh ? uh.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -bL ? "-0" : t
        }
        lh.exports = ch
    }
    );
    var ph = u( (U5, dh) => {
        var wL = fh();
        function SL(e) {
            return e == null ? "" : wL(e)
        }
        dh.exports = SL
    }
    );
    var Qr = u( (X5, vh) => {
        var AL = Le()
          , RL = ti()
          , xL = ih()
          , CL = ph();
        function NL(e, t) {
            return AL(e) ? e : RL(e, t) ? [e] : xL(CL(e))
        }
        vh.exports = NL
    }
    );
    var vr = u( (W5, hh) => {
        var LL = Yr()
          , PL = 1 / 0;
        function qL(e) {
            if (typeof e == "string" || LL(e))
                return e;
            var t = e + "";
            return t == "0" && 1 / e == -PL ? "-0" : t
        }
        hh.exports = qL
    }
    );
    var ri = u( (V5, gh) => {
        var DL = Qr()
          , ML = vr();
        function FL(e, t) {
            t = DL(t, e);
            for (var r = 0, n = t.length; e != null && r < n; )
                e = e[ML(t[r++])];
            return r && r == n ? e : void 0
        }
        gh.exports = FL
    }
    );
    var ni = u( (k5, Eh) => {
        var GL = ri();
        function UL(e, t, r) {
            var n = e == null ? void 0 : GL(e, t);
            return n === void 0 ? r : n
        }
        Eh.exports = UL
    }
    );
    var mh = u( (H5, _h) => {
        function XL(e, t) {
            return e != null && t in Object(e)
        }
        _h.exports = XL
    }
    );
    var Ih = u( (B5, yh) => {
        var WL = Qr()
          , VL = Hr()
          , kL = Le()
          , HL = zn()
          , BL = Yn()
          , jL = vr();
        function KL(e, t, r) {
            t = WL(t, e);
            for (var n = -1, o = t.length, i = !1; ++n < o; ) {
                var a = jL(t[n]);
                if (!(i = e != null && r(e, a)))
                    break;
                e = e[a]
            }
            return i || ++n != o ? i : (o = e == null ? 0 : e.length,
            !!o && BL(o) && HL(a, o) && (kL(e) || VL(e)))
        }
        yh.exports = KL
    }
    );
    var Oh = u( (j5, Th) => {
        var zL = mh()
          , YL = Ih();
        function QL(e, t) {
            return e != null && YL(e, t, zL)
        }
        Th.exports = QL
    }
    );
    var wh = u( (K5, bh) => {
        var $L = Ra()
          , ZL = ni()
          , JL = Oh()
          , eP = ti()
          , tP = xa()
          , rP = Ca()
          , nP = vr()
          , iP = 1
          , oP = 2;
        function aP(e, t) {
            return eP(e) && tP(t) ? rP(nP(e), t) : function(r) {
                var n = ZL(r, e);
                return n === void 0 && n === t ? JL(r, e) : $L(t, n, iP | oP)
            }
        }
        bh.exports = aP
    }
    );
    var ii = u( (z5, Sh) => {
        function sP(e) {
            return e
        }
        Sh.exports = sP
    }
    );
    var Pa = u( (Y5, Ah) => {
        function uP(e) {
            return function(t) {
                return t?.[e]
            }
        }
        Ah.exports = uP
    }
    );
    var xh = u( (Q5, Rh) => {
        var cP = ri();
        function lP(e) {
            return function(t) {
                return cP(t, e)
            }
        }
        Rh.exports = lP
    }
    );
    var Nh = u( ($5, Ch) => {
        var fP = Pa()
          , dP = xh()
          , pP = ti()
          , vP = vr();
        function hP(e) {
            return pP(e) ? fP(vP(e)) : dP(e)
        }
        Ch.exports = hP
    }
    );
    var xt = u( (Z5, Lh) => {
        var gP = Yv()
          , EP = wh()
          , _P = ii()
          , mP = Le()
          , yP = Nh();
        function IP(e) {
            return typeof e == "function" ? e : e == null ? _P : typeof e == "object" ? mP(e) ? EP(e[0], e[1]) : gP(e) : yP(e)
        }
        Lh.exports = IP
    }
    );
    var qa = u( (J5, Ph) => {
        var TP = xt()
          , OP = Wt()
          , bP = zr();
        function wP(e) {
            return function(t, r, n) {
                var o = Object(t);
                if (!OP(t)) {
                    var i = TP(r, 3);
                    t = bP(t),
                    r = function(s) {
                        return i(o[s], s, o)
                    }
                }
                var a = e(t, r, n);
                return a > -1 ? o[i ? t[a] : a] : void 0
            }
        }
        Ph.exports = wP
    }
    );
    var Da = u( (ej, qh) => {
        function SP(e, t, r, n) {
            for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o; )
                if (t(e[i], i, e))
                    return i;
            return -1
        }
        qh.exports = SP
    }
    );
    var Mh = u( (tj, Dh) => {
        var AP = /\s/;
        function RP(e) {
            for (var t = e.length; t-- && AP.test(e.charAt(t)); )
                ;
            return t
        }
        Dh.exports = RP
    }
    );
    var Gh = u( (rj, Fh) => {
        var xP = Mh()
          , CP = /^\s+/;
        function NP(e) {
            return e && e.slice(0, xP(e) + 1).replace(CP, "")
        }
        Fh.exports = NP
    }
    );
    var oi = u( (nj, Wh) => {
        var LP = Gh()
          , Uh = pt()
          , PP = Yr()
          , Xh = 0 / 0
          , qP = /^[-+]0x[0-9a-f]+$/i
          , DP = /^0b[01]+$/i
          , MP = /^0o[0-7]+$/i
          , FP = parseInt;
        function GP(e) {
            if (typeof e == "number")
                return e;
            if (PP(e))
                return Xh;
            if (Uh(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Uh(t) ? t + "" : t
            }
            if (typeof e != "string")
                return e === 0 ? e : +e;
            e = LP(e);
            var r = DP.test(e);
            return r || MP.test(e) ? FP(e.slice(2), r ? 2 : 8) : qP.test(e) ? Xh : +e
        }
        Wh.exports = GP
    }
    );
    var Hh = u( (ij, kh) => {
        var UP = oi()
          , Vh = 1 / 0
          , XP = 17976931348623157e292;
        function WP(e) {
            if (!e)
                return e === 0 ? e : 0;
            if (e = UP(e),
            e === Vh || e === -Vh) {
                var t = e < 0 ? -1 : 1;
                return t * XP
            }
            return e === e ? e : 0
        }
        kh.exports = WP
    }
    );
    var Ma = u( (oj, Bh) => {
        var VP = Hh();
        function kP(e) {
            var t = VP(e)
              , r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        Bh.exports = kP
    }
    );
    var Kh = u( (aj, jh) => {
        var HP = Da()
          , BP = xt()
          , jP = Ma()
          , KP = Math.max;
        function zP(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n)
                return -1;
            var o = r == null ? 0 : jP(r);
            return o < 0 && (o = KP(n + o, 0)),
            HP(e, BP(t, 3), o)
        }
        jh.exports = zP
    }
    );
    var Fa = u( (sj, zh) => {
        var YP = qa()
          , QP = Kh()
          , $P = YP(QP);
        zh.exports = $P
    }
    );
    var si = u(We => {
        "use strict";
        var ZP = et().default;
        Object.defineProperty(We, "__esModule", {
            value: !0
        });
        We.withBrowser = We.TRANSFORM_STYLE_PREFIXED = We.TRANSFORM_PREFIXED = We.IS_BROWSER_ENV = We.FLEX_PREFIXED = We.ELEMENT_MATCHES = void 0;
        var JP = ZP(Fa())
          , Qh = typeof window < "u";
        We.IS_BROWSER_ENV = Qh;
        var ai = (e, t) => Qh ? e() : t;
        We.withBrowser = ai;
        var eq = ai( () => (0,
        JP.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype));
        We.ELEMENT_MATCHES = eq;
        var tq = ai( () => {
            let e = document.createElement("i")
              , t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"]
              , r = "";
            try {
                let {length: n} = t;
                for (let o = 0; o < n; o++) {
                    let i = t[o];
                    if (e.style.display = i,
                    e.style.display === i)
                        return i
                }
                return r
            } catch {
                return r
            }
        }
        , "flex");
        We.FLEX_PREFIXED = tq;
        var $h = ai( () => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"]
                  , r = "Transform"
                  , {length: n} = t;
                for (let o = 0; o < n; o++) {
                    let i = t[o] + r;
                    if (e.style[i] !== void 0)
                        return i
                }
            }
            return "transform"
        }
        , "transform");
        We.TRANSFORM_PREFIXED = $h;
        var Yh = $h.split("transform")[0]
          , rq = Yh ? Yh + "TransformStyle" : "transformStyle";
        We.TRANSFORM_STYLE_PREFIXED = rq
    }
    );
    var Ga = u( (cj, rg) => {
        var nq = 4
          , iq = .001
          , oq = 1e-7
          , aq = 10
          , $r = 11
          , ui = 1 / ($r - 1)
          , sq = typeof Float32Array == "function";
        function Zh(e, t) {
            return 1 - 3 * t + 3 * e
        }
        function Jh(e, t) {
            return 3 * t - 6 * e
        }
        function eg(e) {
            return 3 * e
        }
        function ci(e, t, r) {
            return ((Zh(t, r) * e + Jh(t, r)) * e + eg(t)) * e
        }
        function tg(e, t, r) {
            return 3 * Zh(t, r) * e * e + 2 * Jh(t, r) * e + eg(t)
        }
        function uq(e, t, r, n, o) {
            var i, a, s = 0;
            do
                a = t + (r - t) / 2,
                i = ci(a, n, o) - e,
                i > 0 ? r = a : t = a;
            while (Math.abs(i) > oq && ++s < aq);
            return a
        }
        function cq(e, t, r, n) {
            for (var o = 0; o < nq; ++o) {
                var i = tg(t, r, n);
                if (i === 0)
                    return t;
                var a = ci(t, r, n) - e;
                t -= a / i
            }
            return t
        }
        rg.exports = function(t, r, n, o) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
                throw new Error("bezier x values must be in [0, 1] range");
            var i = sq ? new Float32Array($r) : new Array($r);
            if (t !== r || n !== o)
                for (var a = 0; a < $r; ++a)
                    i[a] = ci(a * ui, t, n);
            function s(c) {
                for (var g = 0, y = 1, p = $r - 1; y !== p && i[y] <= c; ++y)
                    g += ui;
                --y;
                var I = (c - i[y]) / (i[y + 1] - i[y])
                  , _ = g + I * ui
                  , m = tg(_, t, n);
                return m >= iq ? cq(c, _, t, n) : m === 0 ? _ : uq(c, g, g + ui, t, n)
            }
            return function(g) {
                return t === r && n === o ? g : g === 0 ? 0 : g === 1 ? 1 : ci(s(g), r, o)
            }
        }
    }
    );
    var Ua = u(ue => {
        "use strict";
        var lq = et().default;
        Object.defineProperty(ue, "__esModule", {
            value: !0
        });
        ue.bounce = jq;
        ue.bouncePast = Kq;
        ue.easeOut = ue.easeInOut = ue.easeIn = ue.ease = void 0;
        ue.inBack = Fq;
        ue.inCirc = Pq;
        ue.inCubic = _q;
        ue.inElastic = Xq;
        ue.inExpo = Cq;
        ue.inOutBack = Uq;
        ue.inOutCirc = Dq;
        ue.inOutCubic = yq;
        ue.inOutElastic = Vq;
        ue.inOutExpo = Lq;
        ue.inOutQuad = Eq;
        ue.inOutQuart = Oq;
        ue.inOutQuint = Sq;
        ue.inOutSine = xq;
        ue.inQuad = hq;
        ue.inQuart = Iq;
        ue.inQuint = bq;
        ue.inSine = Aq;
        ue.outBack = Gq;
        ue.outBounce = Mq;
        ue.outCirc = qq;
        ue.outCubic = mq;
        ue.outElastic = Wq;
        ue.outExpo = Nq;
        ue.outQuad = gq;
        ue.outQuart = Tq;
        ue.outQuint = wq;
        ue.outSine = Rq;
        ue.swingFrom = Hq;
        ue.swingFromTo = kq;
        ue.swingTo = Bq;
        var li = lq(Ga())
          , Tt = 1.70158
          , fq = (0,
        li.default)(.25, .1, .25, 1);
        ue.ease = fq;
        var dq = (0,
        li.default)(.42, 0, 1, 1);
        ue.easeIn = dq;
        var pq = (0,
        li.default)(0, 0, .58, 1);
        ue.easeOut = pq;
        var vq = (0,
        li.default)(.42, 0, .58, 1);
        ue.easeInOut = vq;
        function hq(e) {
            return Math.pow(e, 2)
        }
        function gq(e) {
            return -(Math.pow(e - 1, 2) - 1)
        }
        function Eq(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
        }
        function _q(e) {
            return Math.pow(e, 3)
        }
        function mq(e) {
            return Math.pow(e - 1, 3) + 1
        }
        function yq(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
        }
        function Iq(e) {
            return Math.pow(e, 4)
        }
        function Tq(e) {
            return -(Math.pow(e - 1, 4) - 1)
        }
        function Oq(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
        }
        function bq(e) {
            return Math.pow(e, 5)
        }
        function wq(e) {
            return Math.pow(e - 1, 5) + 1
        }
        function Sq(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
        }
        function Aq(e) {
            return -Math.cos(e * (Math.PI / 2)) + 1
        }
        function Rq(e) {
            return Math.sin(e * (Math.PI / 2))
        }
        function xq(e) {
            return -.5 * (Math.cos(Math.PI * e) - 1)
        }
        function Cq(e) {
            return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
        }
        function Nq(e) {
            return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
        }
        function Lq(e) {
            return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
        }
        function Pq(e) {
            return -(Math.sqrt(1 - e * e) - 1)
        }
        function qq(e) {
            return Math.sqrt(1 - Math.pow(e - 1, 2))
        }
        function Dq(e) {
            return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        }
        function Mq(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }
        function Fq(e) {
            let t = Tt;
            return e * e * ((t + 1) * e - t)
        }
        function Gq(e) {
            let t = Tt;
            return (e -= 1) * e * ((t + 1) * e + t) + 1
        }
        function Uq(e) {
            let t = Tt;
            return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
        }
        function Xq(e) {
            let t = Tt
              , r = 0
              , n = 1;
            return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
            n < 1 ? (n = 1,
            t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
            -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
        }
        function Wq(e) {
            let t = Tt
              , r = 0
              , n = 1;
            return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
            n < 1 ? (n = 1,
            t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
            n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
        }
        function Vq(e) {
            let t = Tt
              , r = 0
              , n = 1;
            return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5),
            n < 1 ? (n = 1,
            t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
            e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
        }
        function kq(e) {
            let t = Tt;
            return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
        }
        function Hq(e) {
            let t = Tt;
            return e * e * ((t + 1) * e - t)
        }
        function Bq(e) {
            let t = Tt;
            return (e -= 1) * e * ((t + 1) * e + t) + 1
        }
        function jq(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }
        function Kq(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
        }
    }
    );
    var Wa = u(Zr => {
        "use strict";
        var zq = et().default
          , Yq = Ft().default;
        Object.defineProperty(Zr, "__esModule", {
            value: !0
        });
        Zr.applyEasing = Zq;
        Zr.createBezierEasing = $q;
        Zr.optimizeFloat = Xa;
        var ng = Yq(Ua())
          , Qq = zq(Ga());
        function Xa(e, t=5, r=10) {
            let n = Math.pow(r, t)
              , o = Number(Math.round(e * n) / n);
            return Math.abs(o) > 1e-4 ? o : 0
        }
        function $q(e) {
            return (0,
            Qq.default)(...e)
        }
        function Zq(e, t, r) {
            return t === 0 ? 0 : t === 1 ? 1 : Xa(r ? t > 0 ? r(t) : t : t > 0 && e && ng[e] ? ng[e](t) : t)
        }
    }
    );
    var sg = u(hr => {
        "use strict";
        Object.defineProperty(hr, "__esModule", {
            value: !0
        });
        hr.createElementState = ag;
        hr.ixElements = void 0;
        hr.mergeActionState = Va;
        var fi = ar()
          , og = Be()
          , {HTML_ELEMENT: dj, PLAIN_OBJECT: Jq, ABSTRACT_NODE: pj, CONFIG_X_VALUE: eD, CONFIG_Y_VALUE: tD, CONFIG_Z_VALUE: rD, CONFIG_VALUE: nD, CONFIG_X_UNIT: iD, CONFIG_Y_UNIT: oD, CONFIG_Z_UNIT: aD, CONFIG_UNIT: sD} = og.IX2EngineConstants
          , {IX2_SESSION_STOPPED: uD, IX2_INSTANCE_ADDED: cD, IX2_ELEMENT_STATE_CHANGED: lD} = og.IX2EngineActionTypes
          , ig = {}
          , fD = "refState"
          , dD = (e=ig, t={}) => {
            switch (t.type) {
            case uD:
                return ig;
            case cD:
                {
                    let {elementId: r, element: n, origin: o, actionItem: i, refType: a} = t.payload
                      , {actionTypeId: s} = i
                      , c = e;
                    return (0,
                    fi.getIn)(c, [r, n]) !== n && (c = ag(c, n, a, r, i)),
                    Va(c, r, s, o, i)
                }
            case lD:
                {
                    let {elementId: r, actionTypeId: n, current: o, actionItem: i} = t.payload;
                    return Va(e, r, n, o, i)
                }
            default:
                return e
            }
        }
        ;
        hr.ixElements = dD;
        function ag(e, t, r, n, o) {
            let i = r === Jq ? (0,
            fi.getIn)(o, ["config", "target", "objectId"]) : null;
            return (0,
            fi.mergeIn)(e, [n], {
                id: n,
                ref: t,
                refId: i,
                refType: r
            })
        }
        function Va(e, t, r, n, o) {
            let i = vD(o)
              , a = [t, fD, r];
            return (0,
            fi.mergeIn)(e, a, n, i)
        }
        var pD = [[eD, iD], [tD, oD], [rD, aD], [nD, sD]];
        function vD(e) {
            let {config: t} = e;
            return pD.reduce( (r, n) => {
                let o = n[0]
                  , i = n[1]
                  , a = t[o]
                  , s = t[i];
                return a != null && s != null && (r[i] = s),
                r
            }
            , {})
        }
    }
    );
    var ug = u(Pe => {
        "use strict";
        Object.defineProperty(Pe, "__esModule", {
            value: !0
        });
        Pe.renderPlugin = Pe.getPluginOrigin = Pe.getPluginDuration = Pe.getPluginDestination = Pe.getPluginConfig = Pe.createPluginInstance = Pe.clearPlugin = void 0;
        var hD = e => e.value;
        Pe.getPluginConfig = hD;
        var gD = (e, t) => {
            if (t.config.duration !== "auto")
                return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        }
        ;
        Pe.getPluginDuration = gD;
        var ED = e => e || {
            value: 0
        };
        Pe.getPluginOrigin = ED;
        var _D = e => ({
            value: e.value
        });
        Pe.getPluginDestination = _D;
        var mD = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(),
            t.setSubframe(!0),
            t
        }
        ;
        Pe.createPluginInstance = mD;
        var yD = (e, t, r) => {
            if (!e)
                return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        }
        ;
        Pe.renderPlugin = yD;
        var ID = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        }
        ;
        Pe.clearPlugin = ID
    }
    );
    var lg = u(qe => {
        "use strict";
        Object.defineProperty(qe, "__esModule", {
            value: !0
        });
        qe.renderPlugin = qe.getPluginOrigin = qe.getPluginDuration = qe.getPluginDestination = qe.getPluginConfig = qe.createPluginInstance = qe.clearPlugin = void 0;
        var TD = e => document.querySelector(`[data-w-id="${e}"]`)
          , OD = () => window.Webflow.require("spline")
          , bD = (e, t) => e.filter(r => !t.includes(r))
          , wD = (e, t) => e.value[t];
        qe.getPluginConfig = wD;
        var SD = () => null;
        qe.getPluginDuration = SD;
        var cg = Object.freeze({
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1
        })
          , AD = (e, t) => {
            let r = t.config.value
              , n = Object.keys(r);
            if (e) {
                let i = Object.keys(e)
                  , a = bD(n, i);
                return a.length ? a.reduce( (c, g) => (c[g] = cg[g],
                c), e) : e
            }
            return n.reduce( (i, a) => (i[a] = cg[a],
            i), {})
        }
        ;
        qe.getPluginOrigin = AD;
        var RD = e => e.value;
        qe.getPluginDestination = RD;
        var xD = (e, t) => {
            var r, n;
            let o = t == null || (r = t.config) === null || r === void 0 || (n = r.target) === null || n === void 0 ? void 0 : n.pluginElement;
            return o ? TD(o) : null
        }
        ;
        qe.createPluginInstance = xD;
        var CD = (e, t, r) => {
            let n = OD().getInstance(e)
              , o = r.config.target.objectId;
            if (!n || !o)
                return;
            let i = n.spline.findObjectById(o);
            if (!i)
                return;
            let {PLUGIN_SPLINE: a} = t;
            a.positionX != null && (i.position.x = a.positionX),
            a.positionY != null && (i.position.y = a.positionY),
            a.positionZ != null && (i.position.z = a.positionZ),
            a.rotationX != null && (i.rotation.x = a.rotationX),
            a.rotationY != null && (i.rotation.y = a.rotationY),
            a.rotationZ != null && (i.rotation.z = a.rotationZ),
            a.scaleX != null && (i.scale.x = a.scaleX),
            a.scaleY != null && (i.scale.y = a.scaleY),
            a.scaleZ != null && (i.scale.z = a.scaleZ)
        }
        ;
        qe.renderPlugin = CD;
        var ND = () => null;
        qe.clearPlugin = ND
    }
    );
    var vg = u(di => {
        "use strict";
        var pg = Ft().default
          , LD = et().default;
        Object.defineProperty(di, "__esModule", {
            value: !0
        });
        di.pluginMethodMap = void 0;
        var fg = LD(or())
          , dg = Be()
          , PD = pg(ug())
          , qD = pg(lg())
          , DD = new Map([[dg.ActionTypeConsts.PLUGIN_LOTTIE, (0,
        fg.default)({}, PD)], [dg.ActionTypeConsts.PLUGIN_SPLINE, (0,
        fg.default)({}, qD)]]);
        di.pluginMethodMap = DD
    }
    );
    var ka = u(Ce => {
        "use strict";
        Object.defineProperty(Ce, "__esModule", {
            value: !0
        });
        Ce.getPluginOrigin = Ce.getPluginDuration = Ce.getPluginDestination = Ce.getPluginConfig = Ce.createPluginInstance = Ce.clearPlugin = void 0;
        Ce.isPluginType = FD;
        Ce.renderPlugin = void 0;
        var MD = si()
          , hg = vg();
        function FD(e) {
            return hg.pluginMethodMap.has(e)
        }
        var kt = e => t => {
            if (!MD.IS_BROWSER_ENV)
                return () => null;
            let r = hg.pluginMethodMap.get(t);
            if (!r)
                throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n)
                throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }
          , GD = kt("getPluginConfig");
        Ce.getPluginConfig = GD;
        var UD = kt("getPluginOrigin");
        Ce.getPluginOrigin = UD;
        var XD = kt("getPluginDuration");
        Ce.getPluginDuration = XD;
        var WD = kt("getPluginDestination");
        Ce.getPluginDestination = WD;
        var VD = kt("createPluginInstance");
        Ce.createPluginInstance = VD;
        var kD = kt("renderPlugin");
        Ce.renderPlugin = kD;
        var HD = kt("clearPlugin");
        Ce.clearPlugin = HD
    }
    );
    var Eg = u( (mj, gg) => {
        function BD(e, t) {
            return e == null || e !== e ? t : e
        }
        gg.exports = BD
    }
    );
    var mg = u( (yj, _g) => {
        function jD(e, t, r, n) {
            var o = -1
              , i = e == null ? 0 : e.length;
            for (n && i && (r = e[++o]); ++o < i; )
                r = t(r, e[o], o, e);
            return r
        }
        _g.exports = jD
    }
    );
    var Ig = u( (Ij, yg) => {
        function KD(e) {
            return function(t, r, n) {
                for (var o = -1, i = Object(t), a = n(t), s = a.length; s--; ) {
                    var c = a[e ? s : ++o];
                    if (r(i[c], c, i) === !1)
                        break
                }
                return t
            }
        }
        yg.exports = KD
    }
    );
    var Og = u( (Tj, Tg) => {
        var zD = Ig()
          , YD = zD();
        Tg.exports = YD
    }
    );
    var Ha = u( (Oj, bg) => {
        var QD = Og()
          , $D = zr();
        function ZD(e, t) {
            return e && QD(e, t, $D)
        }
        bg.exports = ZD
    }
    );
    var Sg = u( (bj, wg) => {
        var JD = Wt();
        function eM(e, t) {
            return function(r, n) {
                if (r == null)
                    return r;
                if (!JD(r))
                    return e(r, n);
                for (var o = r.length, i = t ? o : -1, a = Object(r); (t ? i-- : ++i < o) && n(a[i], i, a) !== !1; )
                    ;
                return r
            }
        }
        wg.exports = eM
    }
    );
    var Ba = u( (wj, Ag) => {
        var tM = Ha()
          , rM = Sg()
          , nM = rM(tM);
        Ag.exports = nM
    }
    );
    var xg = u( (Sj, Rg) => {
        function iM(e, t, r, n, o) {
            return o(e, function(i, a, s) {
                r = n ? (n = !1,
                i) : t(r, i, a, s)
            }),
            r
        }
        Rg.exports = iM
    }
    );
    var Ng = u( (Aj, Cg) => {
        var oM = mg()
          , aM = Ba()
          , sM = xt()
          , uM = xg()
          , cM = Le();
        function lM(e, t, r) {
            var n = cM(e) ? oM : uM
              , o = arguments.length < 3;
            return n(e, sM(t, 4), r, o, aM)
        }
        Cg.exports = lM
    }
    );
    var Pg = u( (Rj, Lg) => {
        var fM = Da()
          , dM = xt()
          , pM = Ma()
          , vM = Math.max
          , hM = Math.min;
        function gM(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n)
                return -1;
            var o = n - 1;
            return r !== void 0 && (o = pM(r),
            o = r < 0 ? vM(n + o, 0) : hM(o, n - 1)),
            fM(e, dM(t, 3), o, !0)
        }
        Lg.exports = gM
    }
    );
    var Dg = u( (xj, qg) => {
        var EM = qa()
          , _M = Pg()
          , mM = EM(_M);
        qg.exports = mM
    }
    );
    var Fg = u(pi => {
        "use strict";
        Object.defineProperty(pi, "__esModule", {
            value: !0
        });
        pi.default = void 0;
        var yM = Object.prototype.hasOwnProperty;
        function Mg(e, t) {
            return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
        }
        function IM(e, t) {
            if (Mg(e, t))
                return !0;
            if (typeof e != "object" || e === null || typeof t != "object" || t === null)
                return !1;
            let r = Object.keys(e)
              , n = Object.keys(t);
            if (r.length !== n.length)
                return !1;
            for (let o = 0; o < r.length; o++)
                if (!yM.call(t, r[o]) || !Mg(e[r[o]], t[r[o]]))
                    return !1;
            return !0
        }
        var TM = IM;
        pi.default = TM
    }
    );
    var rE = u(_e => {
        "use strict";
        var Ei = et().default;
        Object.defineProperty(_e, "__esModule", {
            value: !0
        });
        _e.cleanupHTMLElement = y1;
        _e.clearAllStyles = m1;
        _e.clearObjectCache = XM;
        _e.getActionListProgress = T1;
        _e.getAffectedElements = Za;
        _e.getComputedStyle = zM;
        _e.getDestinationValues = t1;
        _e.getElementId = HM;
        _e.getInstanceId = VM;
        _e.getInstanceOrigin = $M;
        _e.getItemConfigByKey = void 0;
        _e.getMaxDurationItemIndex = tE;
        _e.getNamespacedParameterId = w1;
        _e.getRenderType = Zg;
        _e.getStyleProp = r1;
        _e.mediaQueriesEqual = A1;
        _e.observeStore = KM;
        _e.reduceListToGroup = O1;
        _e.reifyState = BM;
        _e.renderHTMLElement = n1;
        Object.defineProperty(_e, "shallowEqual", {
            enumerable: !0,
            get: function() {
                return Bg.default
            }
        });
        _e.shouldAllowMediaQuery = S1;
        _e.shouldNamespaceEventParameter = b1;
        _e.stringifyTarget = R1;
        var Ct = Ei(Eg())
          , za = Ei(Ng())
          , Ka = Ei(Dg())
          , Gg = ar()
          , Ht = Be()
          , Bg = Ei(Fg())
          , OM = Wa()
          , gt = ka()
          , Ve = si()
          , {BACKGROUND: bM, TRANSFORM: wM, TRANSLATE_3D: SM, SCALE_3D: AM, ROTATE_X: RM, ROTATE_Y: xM, ROTATE_Z: CM, SKEW: NM, PRESERVE_3D: LM, FLEX: PM, OPACITY: hi, FILTER: Jr, FONT_VARIATION_SETTINGS: en, WIDTH: vt, HEIGHT: ht, BACKGROUND_COLOR: jg, BORDER_COLOR: qM, COLOR: DM, CHILDREN: Ug, IMMEDIATE_CHILDREN: MM, SIBLINGS: Xg, PARENT: FM, DISPLAY: gi, WILL_CHANGE: gr, AUTO: Nt, COMMA_DELIMITER: tn, COLON_DELIMITER: GM, BAR_DELIMITER: ja, RENDER_TRANSFORM: Kg, RENDER_GENERAL: Ya, RENDER_STYLE: Qa, RENDER_PLUGIN: zg} = Ht.IX2EngineConstants
          , {TRANSFORM_MOVE: Er, TRANSFORM_SCALE: _r, TRANSFORM_ROTATE: mr, TRANSFORM_SKEW: rn, STYLE_OPACITY: Yg, STYLE_FILTER: nn, STYLE_FONT_VARIATION: on, STYLE_SIZE: yr, STYLE_BACKGROUND_COLOR: Ir, STYLE_BORDER: Tr, STYLE_TEXT_COLOR: Or, GENERAL_DISPLAY: _i, OBJECT_VALUE: UM} = Ht.ActionTypeConsts
          , Qg = e => e.trim()
          , $a = Object.freeze({
            [Ir]: jg,
            [Tr]: qM,
            [Or]: DM
        })
          , $g = Object.freeze({
            [Ve.TRANSFORM_PREFIXED]: wM,
            [jg]: bM,
            [hi]: hi,
            [Jr]: Jr,
            [vt]: vt,
            [ht]: ht,
            [en]: en
        })
          , vi = new Map;
        function XM() {
            vi.clear()
        }
        var WM = 1;
        function VM() {
            return "i" + WM++
        }
        var kM = 1;
        function HM(e, t) {
            for (let r in e) {
                let n = e[r];
                if (n && n.ref === t)
                    return n.id
            }
            return "e" + kM++
        }
        function BM({events: e, actionLists: t, site: r}={}) {
            let n = (0,
            za.default)(e, (a, s) => {
                let {eventTypeId: c} = s;
                return a[c] || (a[c] = {}),
                a[c][s.id] = s,
                a
            }
            , {})
              , o = r && r.mediaQueries
              , i = [];
            return o ? i = o.map(a => a.key) : (o = [],
            console.warn("IX2 missing mediaQueries in site data")),
            {
                ixData: {
                    events: e,
                    actionLists: t,
                    eventTypeMap: n,
                    mediaQueries: o,
                    mediaQueryKeys: i
                }
            }
        }
        var jM = (e, t) => e === t;
        function KM({store: e, select: t, onChange: r, comparator: n=jM}) {
            let {getState: o, subscribe: i} = e
              , a = i(c)
              , s = t(o());
            function c() {
                let g = t(o());
                if (g == null) {
                    a();
                    return
                }
                n(g, s) || (s = g,
                r(s, e))
            }
            return a
        }
        function Wg(e) {
            let t = typeof e;
            if (t === "string")
                return {
                    id: e
                };
            if (e != null && t === "object") {
                let {id: r, objectId: n, selector: o, selectorGuids: i, appliesTo: a, useEventTarget: s} = e;
                return {
                    id: r,
                    objectId: n,
                    selector: o,
                    selectorGuids: i,
                    appliesTo: a,
                    useEventTarget: s
                }
            }
            return {}
        }
        function Za({config: e, event: t, eventTarget: r, elementRoot: n, elementApi: o}) {
            var i, a, s;
            if (!o)
                throw new Error("IX2 missing elementApi");
            let {targets: c} = e;
            if (Array.isArray(c) && c.length > 0)
                return c.reduce( (k, H) => k.concat(Za({
                    config: {
                        target: H
                    },
                    event: t,
                    eventTarget: r,
                    elementRoot: n,
                    elementApi: o
                })), []);
            let {getValidDocument: g, getQuerySelector: y, queryDocument: p, getChildElements: I, getSiblingElements: _, matchSelector: m, elementContains: b, isSiblingNode: C} = o
              , {target: x} = e;
            if (!x)
                return [];
            let {id: N, objectId: R, selector: M, selectorGuids: D, appliesTo: F, useEventTarget: j} = Wg(x);
            if (R)
                return [vi.has(R) ? vi.get(R) : vi.set(R, {}).get(R)];
            if (F === Ht.EventAppliesTo.PAGE) {
                let k = g(N);
                return k ? [k] : []
            }
            let J = ((i = t == null || (a = t.action) === null || a === void 0 || (s = a.config) === null || s === void 0 ? void 0 : s.affectedElements) !== null && i !== void 0 ? i : {})[N || M] || {}, ae = !!(J.id || J.selector), re, W, O, U = t && y(Wg(t.target));
            if (ae ? (re = J.limitAffectedElements,
            W = U,
            O = y(J)) : W = O = y({
                id: N,
                selector: M,
                selectorGuids: D
            }),
            t && j) {
                let k = r && (O || j === !0) ? [r] : p(U);
                if (O) {
                    if (j === FM)
                        return p(O).filter(H => k.some(ee => b(H, ee)));
                    if (j === Ug)
                        return p(O).filter(H => k.some(ee => b(ee, H)));
                    if (j === Xg)
                        return p(O).filter(H => k.some(ee => C(ee, H)))
                }
                return k
            }
            return W == null || O == null ? [] : Ve.IS_BROWSER_ENV && n ? p(O).filter(k => n.contains(k)) : re === Ug ? p(W, O) : re === MM ? I(p(W)).filter(m(O)) : re === Xg ? _(p(W)).filter(m(O)) : p(O)
        }
        function zM({element: e, actionItem: t}) {
            if (!Ve.IS_BROWSER_ENV)
                return {};
            let {actionTypeId: r} = t;
            switch (r) {
            case yr:
            case Ir:
            case Tr:
            case Or:
            case _i:
                return window.getComputedStyle(e);
            default:
                return {}
            }
        }
        var Vg = /px/
          , YM = (e, t) => t.reduce( (r, n) => (r[n.type] == null && (r[n.type] = i1[n.type]),
        r), e || {})
          , QM = (e, t) => t.reduce( (r, n) => (r[n.type] == null && (r[n.type] = o1[n.type] || n.defaultValue || 0),
        r), e || {});
        function $M(e, t={}, r={}, n, o) {
            let {getStyle: i} = o
              , {actionTypeId: a} = n;
            if ((0,
            gt.isPluginType)(a))
                return (0,
                gt.getPluginOrigin)(a)(t[a], n);
            switch (n.actionTypeId) {
            case Er:
            case _r:
            case mr:
            case rn:
                return t[n.actionTypeId] || Ja[n.actionTypeId];
            case nn:
                return YM(t[n.actionTypeId], n.config.filters);
            case on:
                return QM(t[n.actionTypeId], n.config.fontVariations);
            case Yg:
                return {
                    value: (0,
                    Ct.default)(parseFloat(i(e, hi)), 1)
                };
            case yr:
                {
                    let s = i(e, vt), c = i(e, ht), g, y;
                    return n.config.widthUnit === Nt ? g = Vg.test(s) ? parseFloat(s) : parseFloat(r.width) : g = (0,
                    Ct.default)(parseFloat(s), parseFloat(r.width)),
                    n.config.heightUnit === Nt ? y = Vg.test(c) ? parseFloat(c) : parseFloat(r.height) : y = (0,
                    Ct.default)(parseFloat(c), parseFloat(r.height)),
                    {
                        widthValue: g,
                        heightValue: y
                    }
                }
            case Ir:
            case Tr:
            case Or:
                return g1({
                    element: e,
                    actionTypeId: n.actionTypeId,
                    computedStyle: r,
                    getStyle: i
                });
            case _i:
                return {
                    value: (0,
                    Ct.default)(i(e, gi), r.display)
                };
            case UM:
                return t[n.actionTypeId] || {
                    value: 0
                };
            default:
                return
            }
        }
        var ZM = (e, t) => (t && (e[t.type] = t.value || 0),
        e)
          , JM = (e, t) => (t && (e[t.type] = t.value || 0),
        e)
          , e1 = (e, t, r) => {
            if ((0,
            gt.isPluginType)(e))
                return (0,
                gt.getPluginConfig)(e)(r, t);
            switch (e) {
            case nn:
                {
                    let n = (0,
                    Ka.default)(r.filters, ({type: o}) => o === t);
                    return n ? n.value : 0
                }
            case on:
                {
                    let n = (0,
                    Ka.default)(r.fontVariations, ({type: o}) => o === t);
                    return n ? n.value : 0
                }
            default:
                return r[t]
            }
        }
        ;
        _e.getItemConfigByKey = e1;
        function t1({element: e, actionItem: t, elementApi: r}) {
            if ((0,
            gt.isPluginType)(t.actionTypeId))
                return (0,
                gt.getPluginDestination)(t.actionTypeId)(t.config);
            switch (t.actionTypeId) {
            case Er:
            case _r:
            case mr:
            case rn:
                {
                    let {xValue: n, yValue: o, zValue: i} = t.config;
                    return {
                        xValue: n,
                        yValue: o,
                        zValue: i
                    }
                }
            case yr:
                {
                    let {getStyle: n, setStyle: o, getProperty: i} = r
                      , {widthUnit: a, heightUnit: s} = t.config
                      , {widthValue: c, heightValue: g} = t.config;
                    if (!Ve.IS_BROWSER_ENV)
                        return {
                            widthValue: c,
                            heightValue: g
                        };
                    if (a === Nt) {
                        let y = n(e, vt);
                        o(e, vt, ""),
                        c = i(e, "offsetWidth"),
                        o(e, vt, y)
                    }
                    if (s === Nt) {
                        let y = n(e, ht);
                        o(e, ht, ""),
                        g = i(e, "offsetHeight"),
                        o(e, ht, y)
                    }
                    return {
                        widthValue: c,
                        heightValue: g
                    }
                }
            case Ir:
            case Tr:
            case Or:
                {
                    let {rValue: n, gValue: o, bValue: i, aValue: a} = t.config;
                    return {
                        rValue: n,
                        gValue: o,
                        bValue: i,
                        aValue: a
                    }
                }
            case nn:
                return t.config.filters.reduce(ZM, {});
            case on:
                return t.config.fontVariations.reduce(JM, {});
            default:
                {
                    let {value: n} = t.config;
                    return {
                        value: n
                    }
                }
            }
        }
        function Zg(e) {
            if (/^TRANSFORM_/.test(e))
                return Kg;
            if (/^STYLE_/.test(e))
                return Qa;
            if (/^GENERAL_/.test(e))
                return Ya;
            if (/^PLUGIN_/.test(e))
                return zg
        }
        function r1(e, t) {
            return e === Qa ? t.replace("STYLE_", "").toLowerCase() : null
        }
        function n1(e, t, r, n, o, i, a, s, c) {
            switch (s) {
            case Kg:
                return u1(e, t, r, o, a);
            case Qa:
                return E1(e, t, r, o, i, a);
            case Ya:
                return _1(e, o, a);
            case zg:
                {
                    let {actionTypeId: g} = o;
                    if ((0,
                    gt.isPluginType)(g))
                        return (0,
                        gt.renderPlugin)(g)(c, t, o)
                }
            }
        }
        var Ja = {
            [Er]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [_r]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [mr]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [rn]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        }
          , i1 = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        })
          , o1 = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        })
          , a1 = (e, t) => {
            let r = (0,
            Ka.default)(t.filters, ({type: n}) => n === e);
            if (r && r.unit)
                return r.unit;
            switch (e) {
            case "blur":
                return "px";
            case "hue-rotate":
                return "deg";
            default:
                return "%"
            }
        }
          , s1 = Object.keys(Ja);
        function u1(e, t, r, n, o) {
            let i = s1.map(s => {
                let c = Ja[s]
                  , {xValue: g=c.xValue, yValue: y=c.yValue, zValue: p=c.zValue, xUnit: I="", yUnit: _="", zUnit: m=""} = t[s] || {};
                switch (s) {
                case Er:
                    return `${SM}(${g}${I}, ${y}${_}, ${p}${m})`;
                case _r:
                    return `${AM}(${g}${I}, ${y}${_}, ${p}${m})`;
                case mr:
                    return `${RM}(${g}${I}) ${xM}(${y}${_}) ${CM}(${p}${m})`;
                case rn:
                    return `${NM}(${g}${I}, ${y}${_})`;
                default:
                    return ""
                }
            }
            ).join(" ")
              , {setStyle: a} = o;
            Bt(e, Ve.TRANSFORM_PREFIXED, o),
            a(e, Ve.TRANSFORM_PREFIXED, i),
            f1(n, r) && a(e, Ve.TRANSFORM_STYLE_PREFIXED, LM)
        }
        function c1(e, t, r, n) {
            let o = (0,
            za.default)(t, (a, s, c) => `${a} ${c}(${s}${a1(c, r)})`, "")
              , {setStyle: i} = n;
            Bt(e, Jr, n),
            i(e, Jr, o)
        }
        function l1(e, t, r, n) {
            let o = (0,
            za.default)(t, (a, s, c) => (a.push(`"${c}" ${s}`),
            a), []).join(", ")
              , {setStyle: i} = n;
            Bt(e, en, n),
            i(e, en, o)
        }
        function f1({actionTypeId: e}, {xValue: t, yValue: r, zValue: n}) {
            return e === Er && n !== void 0 || e === _r && n !== void 0 || e === mr && (t !== void 0 || r !== void 0)
        }
        var d1 = "\\(([^)]+)\\)"
          , p1 = /^rgb/
          , v1 = RegExp(`rgba?${d1}`);
        function h1(e, t) {
            let r = e.exec(t);
            return r ? r[1] : ""
        }
        function g1({element: e, actionTypeId: t, computedStyle: r, getStyle: n}) {
            let o = $a[t]
              , i = n(e, o)
              , a = p1.test(i) ? i : r[o]
              , s = h1(v1, a).split(tn);
            return {
                rValue: (0,
                Ct.default)(parseInt(s[0], 10), 255),
                gValue: (0,
                Ct.default)(parseInt(s[1], 10), 255),
                bValue: (0,
                Ct.default)(parseInt(s[2], 10), 255),
                aValue: (0,
                Ct.default)(parseFloat(s[3]), 1)
            }
        }
        function E1(e, t, r, n, o, i) {
            let {setStyle: a} = i;
            switch (n.actionTypeId) {
            case yr:
                {
                    let {widthUnit: s="", heightUnit: c=""} = n.config
                      , {widthValue: g, heightValue: y} = r;
                    g !== void 0 && (s === Nt && (s = "px"),
                    Bt(e, vt, i),
                    a(e, vt, g + s)),
                    y !== void 0 && (c === Nt && (c = "px"),
                    Bt(e, ht, i),
                    a(e, ht, y + c));
                    break
                }
            case nn:
                {
                    c1(e, r, n.config, i);
                    break
                }
            case on:
                {
                    l1(e, r, n.config, i);
                    break
                }
            case Ir:
            case Tr:
            case Or:
                {
                    let s = $a[n.actionTypeId]
                      , c = Math.round(r.rValue)
                      , g = Math.round(r.gValue)
                      , y = Math.round(r.bValue)
                      , p = r.aValue;
                    Bt(e, s, i),
                    a(e, s, p >= 1 ? `rgb(${c},${g},${y})` : `rgba(${c},${g},${y},${p})`);
                    break
                }
            default:
                {
                    let {unit: s=""} = n.config;
                    Bt(e, o, i),
                    a(e, o, r.value + s);
                    break
                }
            }
        }
        function _1(e, t, r) {
            let {setStyle: n} = r;
            switch (t.actionTypeId) {
            case _i:
                {
                    let {value: o} = t.config;
                    o === PM && Ve.IS_BROWSER_ENV ? n(e, gi, Ve.FLEX_PREFIXED) : n(e, gi, o);
                    return
                }
            }
        }
        function Bt(e, t, r) {
            if (!Ve.IS_BROWSER_ENV)
                return;
            let n = $g[t];
            if (!n)
                return;
            let {getStyle: o, setStyle: i} = r
              , a = o(e, gr);
            if (!a) {
                i(e, gr, n);
                return
            }
            let s = a.split(tn).map(Qg);
            s.indexOf(n) === -1 && i(e, gr, s.concat(n).join(tn))
        }
        function Jg(e, t, r) {
            if (!Ve.IS_BROWSER_ENV)
                return;
            let n = $g[t];
            if (!n)
                return;
            let {getStyle: o, setStyle: i} = r
              , a = o(e, gr);
            !a || a.indexOf(n) === -1 || i(e, gr, a.split(tn).map(Qg).filter(s => s !== n).join(tn))
        }
        function m1({store: e, elementApi: t}) {
            let {ixData: r} = e.getState()
              , {events: n={}, actionLists: o={}} = r;
            Object.keys(n).forEach(i => {
                let a = n[i]
                  , {config: s} = a.action
                  , {actionListId: c} = s
                  , g = o[c];
                g && kg({
                    actionList: g,
                    event: a,
                    elementApi: t
                })
            }
            ),
            Object.keys(o).forEach(i => {
                kg({
                    actionList: o[i],
                    elementApi: t
                })
            }
            )
        }
        function kg({actionList: e={}, event: t, elementApi: r}) {
            let {actionItemGroups: n, continuousParameterGroups: o} = e;
            n && n.forEach(i => {
                Hg({
                    actionGroup: i,
                    event: t,
                    elementApi: r
                })
            }
            ),
            o && o.forEach(i => {
                let {continuousActionGroups: a} = i;
                a.forEach(s => {
                    Hg({
                        actionGroup: s,
                        event: t,
                        elementApi: r
                    })
                }
                )
            }
            )
        }
        function Hg({actionGroup: e, event: t, elementApi: r}) {
            let {actionItems: n} = e;
            n.forEach( ({actionTypeId: o, config: i}) => {
                let a;
                (0,
                gt.isPluginType)(o) ? a = (0,
                gt.clearPlugin)(o) : a = eE({
                    effect: I1,
                    actionTypeId: o,
                    elementApi: r
                }),
                Za({
                    config: i,
                    event: t,
                    elementApi: r
                }).forEach(a)
            }
            )
        }
        function y1(e, t, r) {
            let {setStyle: n, getStyle: o} = r
              , {actionTypeId: i} = t;
            if (i === yr) {
                let {config: a} = t;
                a.widthUnit === Nt && n(e, vt, ""),
                a.heightUnit === Nt && n(e, ht, "")
            }
            o(e, gr) && eE({
                effect: Jg,
                actionTypeId: i,
                elementApi: r
            })(e)
        }
        var eE = ({effect: e, actionTypeId: t, elementApi: r}) => n => {
            switch (t) {
            case Er:
            case _r:
            case mr:
            case rn:
                e(n, Ve.TRANSFORM_PREFIXED, r);
                break;
            case nn:
                e(n, Jr, r);
                break;
            case on:
                e(n, en, r);
                break;
            case Yg:
                e(n, hi, r);
                break;
            case yr:
                e(n, vt, r),
                e(n, ht, r);
                break;
            case Ir:
            case Tr:
            case Or:
                e(n, $a[t], r);
                break;
            case _i:
                e(n, gi, r);
                break
            }
        }
        ;
        function I1(e, t, r) {
            let {setStyle: n} = r;
            Jg(e, t, r),
            n(e, t, ""),
            t === Ve.TRANSFORM_PREFIXED && n(e, Ve.TRANSFORM_STYLE_PREFIXED, "")
        }
        function tE(e) {
            let t = 0
              , r = 0;
            return e.forEach( (n, o) => {
                let {config: i} = n
                  , a = i.delay + i.duration;
                a >= t && (t = a,
                r = o)
            }
            ),
            r
        }
        function T1(e, t) {
            let {actionItemGroups: r, useFirstGroupAsInitialState: n} = e
              , {actionItem: o, verboseTimeElapsed: i=0} = t
              , a = 0
              , s = 0;
            return r.forEach( (c, g) => {
                if (n && g === 0)
                    return;
                let {actionItems: y} = c
                  , p = y[tE(y)]
                  , {config: I, actionTypeId: _} = p;
                o.id === p.id && (s = a + i);
                let m = Zg(_) === Ya ? 0 : I.duration;
                a += I.delay + m
            }
            ),
            a > 0 ? (0,
            OM.optimizeFloat)(s / a) : 0
        }
        function O1({actionList: e, actionItemId: t, rawData: r}) {
            let {actionItemGroups: n, continuousParameterGroups: o} = e
              , i = []
              , a = s => (i.push((0,
            Gg.mergeIn)(s, ["config"], {
                delay: 0,
                duration: 0
            })),
            s.id === t);
            return n && n.some( ({actionItems: s}) => s.some(a)),
            o && o.some(s => {
                let {continuousActionGroups: c} = s;
                return c.some( ({actionItems: g}) => g.some(a))
            }
            ),
            (0,
            Gg.setIn)(r, ["actionLists"], {
                [e.id]: {
                    id: e.id,
                    actionItemGroups: [{
                        actionItems: i
                    }]
                }
            })
        }
        function b1(e, {basedOn: t}) {
            return e === Ht.EventTypeConsts.SCROLLING_IN_VIEW && (t === Ht.EventBasedOn.ELEMENT || t == null) || e === Ht.EventTypeConsts.MOUSE_MOVE && t === Ht.EventBasedOn.ELEMENT
        }
        function w1(e, t) {
            return e + GM + t
        }
        function S1(e, t) {
            return t == null ? !0 : e.indexOf(t) !== -1
        }
        function A1(e, t) {
            return (0,
            Bg.default)(e && e.sort(), t && t.sort())
        }
        function R1(e) {
            if (typeof e == "string")
                return e;
            if (e.pluginElement && e.objectId)
                return e.pluginElement + ja + e.objectId;
            let {id: t="", selector: r="", useEventTarget: n=""} = e;
            return t + ja + r + ja + n
        }
    }
    );
    var jt = u(ke => {
        "use strict";
        var br = Ft().default;
        Object.defineProperty(ke, "__esModule", {
            value: !0
        });
        ke.IX2VanillaUtils = ke.IX2VanillaPlugins = ke.IX2ElementsReducer = ke.IX2Easings = ke.IX2EasingUtils = ke.IX2BrowserSupport = void 0;
        var x1 = br(si());
        ke.IX2BrowserSupport = x1;
        var C1 = br(Ua());
        ke.IX2Easings = C1;
        var N1 = br(Wa());
        ke.IX2EasingUtils = N1;
        var L1 = br(sg());
        ke.IX2ElementsReducer = L1;
        var P1 = br(ka());
        ke.IX2VanillaPlugins = P1;
        var q1 = br(rE());
        ke.IX2VanillaUtils = q1
    }
    );
    var aE = u(yi => {
        "use strict";
        Object.defineProperty(yi, "__esModule", {
            value: !0
        });
        yi.ixInstances = void 0;
        var nE = Be()
          , iE = jt()
          , wr = ar()
          , {IX2_RAW_DATA_IMPORTED: D1, IX2_SESSION_STOPPED: M1, IX2_INSTANCE_ADDED: F1, IX2_INSTANCE_STARTED: G1, IX2_INSTANCE_REMOVED: U1, IX2_ANIMATION_FRAME_CHANGED: X1} = nE.IX2EngineActionTypes
          , {optimizeFloat: mi, applyEasing: oE, createBezierEasing: W1} = iE.IX2EasingUtils
          , {RENDER_GENERAL: V1} = nE.IX2EngineConstants
          , {getItemConfigByKey: es, getRenderType: k1, getStyleProp: H1} = iE.IX2VanillaUtils
          , B1 = (e, t) => {
            let {position: r, parameterId: n, actionGroups: o, destinationKeys: i, smoothing: a, restingValue: s, actionTypeId: c, customEasingFn: g, skipMotion: y, skipToValue: p} = e
              , {parameters: I} = t.payload
              , _ = Math.max(1 - a, .01)
              , m = I[n];
            m == null && (_ = 1,
            m = s);
            let b = Math.max(m, 0) || 0
              , C = mi(b - r)
              , x = y ? p : mi(r + C * _)
              , N = x * 100;
            if (x === r && e.current)
                return e;
            let R, M, D, F;
            for (let $ = 0, {length: J} = o; $ < J; $++) {
                let {keyframe: ae, actionItems: re} = o[$];
                if ($ === 0 && (R = re[0]),
                N >= ae) {
                    R = re[0];
                    let W = o[$ + 1]
                      , O = W && N !== ae;
                    M = O ? W.actionItems[0] : null,
                    O && (D = ae / 100,
                    F = (W.keyframe - ae) / 100)
                }
            }
            let j = {};
            if (R && !M)
                for (let $ = 0, {length: J} = i; $ < J; $++) {
                    let ae = i[$];
                    j[ae] = es(c, ae, R.config)
                }
            else if (R && M && D !== void 0 && F !== void 0) {
                let $ = (x - D) / F
                  , J = R.config.easing
                  , ae = oE(J, $, g);
                for (let re = 0, {length: W} = i; re < W; re++) {
                    let O = i[re]
                      , U = es(c, O, R.config)
                      , ee = (es(c, O, M.config) - U) * ae + U;
                    j[O] = ee
                }
            }
            return (0,
            wr.merge)(e, {
                position: x,
                current: j
            })
        }
          , j1 = (e, t) => {
            let {active: r, origin: n, start: o, immediate: i, renderType: a, verbose: s, actionItem: c, destination: g, destinationKeys: y, pluginDuration: p, instanceDelay: I, customEasingFn: _, skipMotion: m} = e
              , b = c.config.easing
              , {duration: C, delay: x} = c.config;
            p != null && (C = p),
            x = I ?? x,
            a === V1 ? C = 0 : (i || m) && (C = x = 0);
            let {now: N} = t.payload;
            if (r && n) {
                let R = N - (o + x);
                if (s) {
                    let $ = N - o
                      , J = C + x
                      , ae = mi(Math.min(Math.max(0, $ / J), 1));
                    e = (0,
                    wr.set)(e, "verboseTimeElapsed", J * ae)
                }
                if (R < 0)
                    return e;
                let M = mi(Math.min(Math.max(0, R / C), 1))
                  , D = oE(b, M, _)
                  , F = {}
                  , j = null;
                return y.length && (j = y.reduce( ($, J) => {
                    let ae = g[J]
                      , re = parseFloat(n[J]) || 0
                      , O = (parseFloat(ae) - re) * D + re;
                    return $[J] = O,
                    $
                }
                , {})),
                F.current = j,
                F.position = M,
                M === 1 && (F.active = !1,
                F.complete = !0),
                (0,
                wr.merge)(e, F)
            }
            return e
        }
          , K1 = (e=Object.freeze({}), t) => {
            switch (t.type) {
            case D1:
                return t.payload.ixInstances || Object.freeze({});
            case M1:
                return Object.freeze({});
            case F1:
                {
                    let {instanceId: r, elementId: n, actionItem: o, eventId: i, eventTarget: a, eventStateKey: s, actionListId: c, groupIndex: g, isCarrier: y, origin: p, destination: I, immediate: _, verbose: m, continuous: b, parameterId: C, actionGroups: x, smoothing: N, restingValue: R, pluginInstance: M, pluginDuration: D, instanceDelay: F, skipMotion: j, skipToValue: $} = t.payload
                      , {actionTypeId: J} = o
                      , ae = k1(J)
                      , re = H1(ae, J)
                      , W = Object.keys(I).filter(U => I[U] != null)
                      , {easing: O} = o.config;
                    return (0,
                    wr.set)(e, r, {
                        id: r,
                        elementId: n,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: p,
                        destination: I,
                        destinationKeys: W,
                        immediate: _,
                        verbose: m,
                        current: null,
                        actionItem: o,
                        actionTypeId: J,
                        eventId: i,
                        eventTarget: a,
                        eventStateKey: s,
                        actionListId: c,
                        groupIndex: g,
                        renderType: ae,
                        isCarrier: y,
                        styleProp: re,
                        continuous: b,
                        parameterId: C,
                        actionGroups: x,
                        smoothing: N,
                        restingValue: R,
                        pluginInstance: M,
                        pluginDuration: D,
                        instanceDelay: F,
                        skipMotion: j,
                        skipToValue: $,
                        customEasingFn: Array.isArray(O) && O.length === 4 ? W1(O) : void 0
                    })
                }
            case G1:
                {
                    let {instanceId: r, time: n} = t.payload;
                    return (0,
                    wr.mergeIn)(e, [r], {
                        active: !0,
                        complete: !1,
                        start: n
                    })
                }
            case U1:
                {
                    let {instanceId: r} = t.payload;
                    if (!e[r])
                        return e;
                    let n = {}
                      , o = Object.keys(e)
                      , {length: i} = o;
                    for (let a = 0; a < i; a++) {
                        let s = o[a];
                        s !== r && (n[s] = e[s])
                    }
                    return n
                }
            case X1:
                {
                    let r = e
                      , n = Object.keys(e)
                      , {length: o} = n;
                    for (let i = 0; i < o; i++) {
                        let a = n[i]
                          , s = e[a]
                          , c = s.continuous ? B1 : j1;
                        r = (0,
                        wr.set)(r, a, c(s, t))
                    }
                    return r
                }
            default:
                return e
            }
        }
        ;
        yi.ixInstances = K1
    }
    );
    var sE = u(Ii => {
        "use strict";
        Object.defineProperty(Ii, "__esModule", {
            value: !0
        });
        Ii.ixParameters = void 0;
        var z1 = Be()
          , {IX2_RAW_DATA_IMPORTED: Y1, IX2_SESSION_STOPPED: Q1, IX2_PARAMETER_CHANGED: $1} = z1.IX2EngineActionTypes
          , Z1 = (e={}, t) => {
            switch (t.type) {
            case Y1:
                return t.payload.ixParameters || {};
            case Q1:
                return {};
            case $1:
                {
                    let {key: r, value: n} = t.payload;
                    return e[r] = n,
                    e
                }
            default:
                return e
            }
        }
        ;
        Ii.ixParameters = Z1
    }
    );
    var uE = u(Ti => {
        "use strict";
        Object.defineProperty(Ti, "__esModule", {
            value: !0
        });
        Ti.default = void 0;
        var J1 = ra()
          , eF = wf()
          , tF = Hf()
          , rF = jf()
          , nF = jt()
          , iF = aE()
          , oF = sE()
          , {ixElements: aF} = nF.IX2ElementsReducer
          , sF = (0,
        J1.combineReducers)({
            ixData: eF.ixData,
            ixRequest: tF.ixRequest,
            ixSession: rF.ixSession,
            ixElements: aF,
            ixInstances: iF.ixInstances,
            ixParameters: oF.ixParameters
        });
        Ti.default = sF
    }
    );
    var cE = u( (Mj, an) => {
        function uF(e, t) {
            if (e == null)
                return {};
            var r = {}, n = Object.keys(e), o, i;
            for (i = 0; i < n.length; i++)
                o = n[i],
                !(t.indexOf(o) >= 0) && (r[o] = e[o]);
            return r
        }
        an.exports = uF,
        an.exports.__esModule = !0,
        an.exports.default = an.exports
    }
    );
    var fE = u( (Fj, lE) => {
        var cF = At()
          , lF = Le()
          , fF = yt()
          , dF = "[object String]";
        function pF(e) {
            return typeof e == "string" || !lF(e) && fF(e) && cF(e) == dF
        }
        lE.exports = pF
    }
    );
    var pE = u( (Gj, dE) => {
        var vF = Pa()
          , hF = vF("length");
        dE.exports = hF
    }
    );
    var hE = u( (Uj, vE) => {
        var gF = "\\ud800-\\udfff"
          , EF = "\\u0300-\\u036f"
          , _F = "\\ufe20-\\ufe2f"
          , mF = "\\u20d0-\\u20ff"
          , yF = EF + _F + mF
          , IF = "\\ufe0e\\ufe0f"
          , TF = "\\u200d"
          , OF = RegExp("[" + TF + gF + yF + IF + "]");
        function bF(e) {
            return OF.test(e)
        }
        vE.exports = bF
    }
    );
    var bE = u( (Xj, OE) => {
        var EE = "\\ud800-\\udfff"
          , wF = "\\u0300-\\u036f"
          , SF = "\\ufe20-\\ufe2f"
          , AF = "\\u20d0-\\u20ff"
          , RF = wF + SF + AF
          , xF = "\\ufe0e\\ufe0f"
          , CF = "[" + EE + "]"
          , ts = "[" + RF + "]"
          , rs = "\\ud83c[\\udffb-\\udfff]"
          , NF = "(?:" + ts + "|" + rs + ")"
          , _E = "[^" + EE + "]"
          , mE = "(?:\\ud83c[\\udde6-\\uddff]){2}"
          , yE = "[\\ud800-\\udbff][\\udc00-\\udfff]"
          , LF = "\\u200d"
          , IE = NF + "?"
          , TE = "[" + xF + "]?"
          , PF = "(?:" + LF + "(?:" + [_E, mE, yE].join("|") + ")" + TE + IE + ")*"
          , qF = TE + IE + PF
          , DF = "(?:" + [_E + ts + "?", ts, mE, yE, CF].join("|") + ")"
          , gE = RegExp(rs + "(?=" + rs + ")|" + DF + qF, "g");
        function MF(e) {
            for (var t = gE.lastIndex = 0; gE.test(e); )
                ++t;
            return t
        }
        OE.exports = MF
    }
    );
    var SE = u( (Wj, wE) => {
        var FF = pE()
          , GF = hE()
          , UF = bE();
        function XF(e) {
            return GF(e) ? UF(e) : FF(e)
        }
        wE.exports = XF
    }
    );
    var RE = u( (Vj, AE) => {
        var WF = Zn()
          , VF = Jn()
          , kF = Wt()
          , HF = fE()
          , BF = SE()
          , jF = "[object Map]"
          , KF = "[object Set]";
        function zF(e) {
            if (e == null)
                return 0;
            if (kF(e))
                return HF(e) ? BF(e) : e.length;
            var t = VF(e);
            return t == jF || t == KF ? e.size : WF(e).length
        }
        AE.exports = zF
    }
    );
    var CE = u( (kj, xE) => {
        var YF = "Expected a function";
        function QF(e) {
            if (typeof e != "function")
                throw new TypeError(YF);
            return function() {
                var t = arguments;
                switch (t.length) {
                case 0:
                    return !e.call(this);
                case 1:
                    return !e.call(this, t[0]);
                case 2:
                    return !e.call(this, t[0], t[1]);
                case 3:
                    return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        xE.exports = QF
    }
    );
    var ns = u( (Hj, NE) => {
        var $F = Rt()
          , ZF = function() {
            try {
                var e = $F(Object, "defineProperty");
                return e({}, "", {}),
                e
            } catch {}
        }();
        NE.exports = ZF
    }
    );
    var is = u( (Bj, PE) => {
        var LE = ns();
        function JF(e, t, r) {
            t == "__proto__" && LE ? LE(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        PE.exports = JF
    }
    );
    var DE = u( (jj, qE) => {
        var e2 = is()
          , t2 = Vn()
          , r2 = Object.prototype
          , n2 = r2.hasOwnProperty;
        function i2(e, t, r) {
            var n = e[t];
            (!(n2.call(e, t) && t2(n, r)) || r === void 0 && !(t in e)) && e2(e, t, r)
        }
        qE.exports = i2
    }
    );
    var GE = u( (Kj, FE) => {
        var o2 = DE()
          , a2 = Qr()
          , s2 = zn()
          , ME = pt()
          , u2 = vr();
        function c2(e, t, r, n) {
            if (!ME(e))
                return e;
            t = a2(t, e);
            for (var o = -1, i = t.length, a = i - 1, s = e; s != null && ++o < i; ) {
                var c = u2(t[o])
                  , g = r;
                if (c === "__proto__" || c === "constructor" || c === "prototype")
                    return e;
                if (o != a) {
                    var y = s[c];
                    g = n ? n(y, c, s) : void 0,
                    g === void 0 && (g = ME(y) ? y : s2(t[o + 1]) ? [] : {})
                }
                o2(s, c, g),
                s = s[c]
            }
            return e
        }
        FE.exports = c2
    }
    );
    var XE = u( (zj, UE) => {
        var l2 = ri()
          , f2 = GE()
          , d2 = Qr();
        function p2(e, t, r) {
            for (var n = -1, o = t.length, i = {}; ++n < o; ) {
                var a = t[n]
                  , s = l2(e, a);
                r(s, a) && f2(i, d2(a, e), s)
            }
            return i
        }
        UE.exports = p2
    }
    );
    var VE = u( (Yj, WE) => {
        var v2 = jn()
          , h2 = ko()
          , g2 = _a()
          , E2 = Ea()
          , _2 = Object.getOwnPropertySymbols
          , m2 = _2 ? function(e) {
            for (var t = []; e; )
                v2(t, g2(e)),
                e = h2(e);
            return t
        }
        : E2;
        WE.exports = m2
    }
    );
    var HE = u( (Qj, kE) => {
        function y2(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e))
                    t.push(r);
            return t
        }
        kE.exports = y2
    }
    );
    var jE = u( ($j, BE) => {
        var I2 = pt()
          , T2 = $n()
          , O2 = HE()
          , b2 = Object.prototype
          , w2 = b2.hasOwnProperty;
        function S2(e) {
            if (!I2(e))
                return O2(e);
            var t = T2(e)
              , r = [];
            for (var n in e)
                n == "constructor" && (t || !w2.call(e, n)) || r.push(n);
            return r
        }
        BE.exports = S2
    }
    );
    var zE = u( (Zj, KE) => {
        var A2 = ya()
          , R2 = jE()
          , x2 = Wt();
        function C2(e) {
            return x2(e) ? A2(e, !0) : R2(e)
        }
        KE.exports = C2
    }
    );
    var QE = u( (Jj, YE) => {
        var N2 = ga()
          , L2 = VE()
          , P2 = zE();
        function q2(e) {
            return N2(e, P2, L2)
        }
        YE.exports = q2
    }
    );
    var ZE = u( (eK, $E) => {
        var D2 = La()
          , M2 = xt()
          , F2 = XE()
          , G2 = QE();
        function U2(e, t) {
            if (e == null)
                return {};
            var r = D2(G2(e), function(n) {
                return [n]
            });
            return t = M2(t),
            F2(e, r, function(n, o) {
                return t(n, o[0])
            })
        }
        $E.exports = U2
    }
    );
    var e_ = u( (tK, JE) => {
        var X2 = xt()
          , W2 = CE()
          , V2 = ZE();
        function k2(e, t) {
            return V2(e, W2(X2(t)))
        }
        JE.exports = k2
    }
    );
    var r_ = u( (rK, t_) => {
        var H2 = Zn()
          , B2 = Jn()
          , j2 = Hr()
          , K2 = Le()
          , z2 = Wt()
          , Y2 = Kn()
          , Q2 = $n()
          , $2 = Qn()
          , Z2 = "[object Map]"
          , J2 = "[object Set]"
          , eG = Object.prototype
          , tG = eG.hasOwnProperty;
        function rG(e) {
            if (e == null)
                return !0;
            if (z2(e) && (K2(e) || typeof e == "string" || typeof e.splice == "function" || Y2(e) || $2(e) || j2(e)))
                return !e.length;
            var t = B2(e);
            if (t == Z2 || t == J2)
                return !e.size;
            if (Q2(e))
                return !H2(e).length;
            for (var r in e)
                if (tG.call(e, r))
                    return !1;
            return !0
        }
        t_.exports = rG
    }
    );
    var i_ = u( (nK, n_) => {
        var nG = is()
          , iG = Ha()
          , oG = xt();
        function aG(e, t) {
            var r = {};
            return t = oG(t, 3),
            iG(e, function(n, o, i) {
                nG(r, o, t(n, o, i))
            }),
            r
        }
        n_.exports = aG
    }
    );
    var a_ = u( (iK, o_) => {
        function sG(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
                ;
            return e
        }
        o_.exports = sG
    }
    );
    var u_ = u( (oK, s_) => {
        var uG = ii();
        function cG(e) {
            return typeof e == "function" ? e : uG
        }
        s_.exports = cG
    }
    );
    var l_ = u( (aK, c_) => {
        var lG = a_()
          , fG = Ba()
          , dG = u_()
          , pG = Le();
        function vG(e, t) {
            var r = pG(e) ? lG : fG;
            return r(e, dG(t))
        }
        c_.exports = vG
    }
    );
    var d_ = u( (sK, f_) => {
        var hG = nt()
          , gG = function() {
            return hG.Date.now()
        };
        f_.exports = gG
    }
    );
    var h_ = u( (uK, v_) => {
        var EG = pt()
          , os = d_()
          , p_ = oi()
          , _G = "Expected a function"
          , mG = Math.max
          , yG = Math.min;
        function IG(e, t, r) {
            var n, o, i, a, s, c, g = 0, y = !1, p = !1, I = !0;
            if (typeof e != "function")
                throw new TypeError(_G);
            t = p_(t) || 0,
            EG(r) && (y = !!r.leading,
            p = "maxWait"in r,
            i = p ? mG(p_(r.maxWait) || 0, t) : i,
            I = "trailing"in r ? !!r.trailing : I);
            function _(F) {
                var j = n
                  , $ = o;
                return n = o = void 0,
                g = F,
                a = e.apply($, j),
                a
            }
            function m(F) {
                return g = F,
                s = setTimeout(x, t),
                y ? _(F) : a
            }
            function b(F) {
                var j = F - c
                  , $ = F - g
                  , J = t - j;
                return p ? yG(J, i - $) : J
            }
            function C(F) {
                var j = F - c
                  , $ = F - g;
                return c === void 0 || j >= t || j < 0 || p && $ >= i
            }
            function x() {
                var F = os();
                if (C(F))
                    return N(F);
                s = setTimeout(x, b(F))
            }
            function N(F) {
                return s = void 0,
                I && n ? _(F) : (n = o = void 0,
                a)
            }
            function R() {
                s !== void 0 && clearTimeout(s),
                g = 0,
                n = c = o = s = void 0
            }
            function M() {
                return s === void 0 ? a : N(os())
            }
            function D() {
                var F = os()
                  , j = C(F);
                if (n = arguments,
                o = this,
                c = F,
                j) {
                    if (s === void 0)
                        return m(c);
                    if (p)
                        return clearTimeout(s),
                        s = setTimeout(x, t),
                        _(c)
                }
                return s === void 0 && (s = setTimeout(x, t)),
                a
            }
            return D.cancel = R,
            D.flush = M,
            D
        }
        v_.exports = IG
    }
    );
    var E_ = u( (cK, g_) => {
        var TG = h_()
          , OG = pt()
          , bG = "Expected a function";
        function wG(e, t, r) {
            var n = !0
              , o = !0;
            if (typeof e != "function")
                throw new TypeError(bG);
            return OG(r) && (n = "leading"in r ? !!r.leading : n,
            o = "trailing"in r ? !!r.trailing : o),
            TG(e, t, {
                leading: n,
                maxWait: t,
                trailing: o
            })
        }
        g_.exports = wG
    }
    );
    var Oi = u(le => {
        "use strict";
        var SG = et().default;
        Object.defineProperty(le, "__esModule", {
            value: !0
        });
        le.viewportWidthChanged = le.testFrameRendered = le.stopRequested = le.sessionStopped = le.sessionStarted = le.sessionInitialized = le.rawDataImported = le.previewRequested = le.playbackRequested = le.parameterChanged = le.mediaQueriesDefined = le.instanceStarted = le.instanceRemoved = le.instanceAdded = le.eventStateChanged = le.eventListenerAdded = le.elementStateChanged = le.clearRequested = le.animationFrameChanged = le.actionListPlaybackChanged = void 0;
        var __ = SG(or())
          , m_ = Be()
          , AG = jt()
          , {IX2_RAW_DATA_IMPORTED: RG, IX2_SESSION_INITIALIZED: xG, IX2_SESSION_STARTED: CG, IX2_SESSION_STOPPED: NG, IX2_PREVIEW_REQUESTED: LG, IX2_PLAYBACK_REQUESTED: PG, IX2_STOP_REQUESTED: qG, IX2_CLEAR_REQUESTED: DG, IX2_EVENT_LISTENER_ADDED: MG, IX2_TEST_FRAME_RENDERED: FG, IX2_EVENT_STATE_CHANGED: GG, IX2_ANIMATION_FRAME_CHANGED: UG, IX2_PARAMETER_CHANGED: XG, IX2_INSTANCE_ADDED: WG, IX2_INSTANCE_STARTED: VG, IX2_INSTANCE_REMOVED: kG, IX2_ELEMENT_STATE_CHANGED: HG, IX2_ACTION_LIST_PLAYBACK_CHANGED: BG, IX2_VIEWPORT_WIDTH_CHANGED: jG, IX2_MEDIA_QUERIES_DEFINED: KG} = m_.IX2EngineActionTypes
          , {reifyState: zG} = AG.IX2VanillaUtils
          , YG = e => ({
            type: RG,
            payload: (0,
            __.default)({}, zG(e))
        });
        le.rawDataImported = YG;
        var QG = ({hasBoundaryNodes: e, reducedMotion: t}) => ({
            type: xG,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        });
        le.sessionInitialized = QG;
        var $G = () => ({
            type: CG
        });
        le.sessionStarted = $G;
        var ZG = () => ({
            type: NG
        });
        le.sessionStopped = ZG;
        var JG = ({rawData: e, defer: t}) => ({
            type: LG,
            payload: {
                defer: t,
                rawData: e
            }
        });
        le.previewRequested = JG;
        var eU = ({actionTypeId: e=m_.ActionTypeConsts.GENERAL_START_ACTION, actionListId: t, actionItemId: r, eventId: n, allowEvents: o, immediate: i, testManual: a, verbose: s, rawData: c}) => ({
            type: PG,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: a,
                eventId: n,
                allowEvents: o,
                immediate: i,
                verbose: s,
                rawData: c
            }
        });
        le.playbackRequested = eU;
        var tU = e => ({
            type: qG,
            payload: {
                actionListId: e
            }
        });
        le.stopRequested = tU;
        var rU = () => ({
            type: DG
        });
        le.clearRequested = rU;
        var nU = (e, t) => ({
            type: MG,
            payload: {
                target: e,
                listenerParams: t
            }
        });
        le.eventListenerAdded = nU;
        var iU = (e=1) => ({
            type: FG,
            payload: {
                step: e
            }
        });
        le.testFrameRendered = iU;
        var oU = (e, t) => ({
            type: GG,
            payload: {
                stateKey: e,
                newState: t
            }
        });
        le.eventStateChanged = oU;
        var aU = (e, t) => ({
            type: UG,
            payload: {
                now: e,
                parameters: t
            }
        });
        le.animationFrameChanged = aU;
        var sU = (e, t) => ({
            type: XG,
            payload: {
                key: e,
                value: t
            }
        });
        le.parameterChanged = sU;
        var uU = e => ({
            type: WG,
            payload: (0,
            __.default)({}, e)
        });
        le.instanceAdded = uU;
        var cU = (e, t) => ({
            type: VG,
            payload: {
                instanceId: e,
                time: t
            }
        });
        le.instanceStarted = cU;
        var lU = e => ({
            type: kG,
            payload: {
                instanceId: e
            }
        });
        le.instanceRemoved = lU;
        var fU = (e, t, r, n) => ({
            type: HG,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        });
        le.elementStateChanged = fU;
        var dU = ({actionListId: e, isPlaying: t}) => ({
            type: BG,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        });
        le.actionListPlaybackChanged = dU;
        var pU = ({width: e, mediaQueries: t}) => ({
            type: jG,
            payload: {
                width: e,
                mediaQueries: t
            }
        });
        le.viewportWidthChanged = pU;
        var vU = () => ({
            type: KG
        });
        le.mediaQueriesDefined = vU
    }
    );
    var T_ = u(De => {
        "use strict";
        Object.defineProperty(De, "__esModule", {
            value: !0
        });
        De.elementContains = SU;
        De.getChildElements = RU;
        De.getClosestElement = void 0;
        De.getProperty = IU;
        De.getQuerySelector = OU;
        De.getRefType = NU;
        De.getSiblingElements = xU;
        De.getStyle = yU;
        De.getValidDocument = bU;
        De.isSiblingNode = AU;
        De.matchSelector = TU;
        De.queryDocument = wU;
        De.setStyle = mU;
        var hU = jt()
          , gU = Be()
          , {ELEMENT_MATCHES: as} = hU.IX2BrowserSupport
          , {IX2_ID_DELIMITER: y_, HTML_ELEMENT: EU, PLAIN_OBJECT: _U, WF_PAGE: I_} = gU.IX2EngineConstants;
        function mU(e, t, r) {
            e.style[t] = r
        }
        function yU(e, t) {
            return e.style[t]
        }
        function IU(e, t) {
            return e[t]
        }
        function TU(e) {
            return t => t[as](e)
        }
        function OU({id: e, selector: t}) {
            if (e) {
                let r = e;
                if (e.indexOf(y_) !== -1) {
                    let n = e.split(y_)
                      , o = n[0];
                    if (r = n[1],
                    o !== document.documentElement.getAttribute(I_))
                        return null
                }
                return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
            }
            return t
        }
        function bU(e) {
            return e == null || e === document.documentElement.getAttribute(I_) ? document : null
        }
        function wU(e, t) {
            return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
        }
        function SU(e, t) {
            return e.contains(t)
        }
        function AU(e, t) {
            return e !== t && e.parentNode === t.parentNode
        }
        function RU(e) {
            let t = [];
            for (let r = 0, {length: n} = e || []; r < n; r++) {
                let {children: o} = e[r]
                  , {length: i} = o;
                if (i)
                    for (let a = 0; a < i; a++)
                        t.push(o[a])
            }
            return t
        }
        function xU(e=[]) {
            let t = []
              , r = [];
            for (let n = 0, {length: o} = e; n < o; n++) {
                let {parentNode: i} = e[n];
                if (!i || !i.children || !i.children.length || r.indexOf(i) !== -1)
                    continue;
                r.push(i);
                let a = i.firstElementChild;
                for (; a != null; )
                    e.indexOf(a) === -1 && t.push(a),
                    a = a.nextElementSibling
            }
            return t
        }
        var CU = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e))
                return null;
            let r = e;
            do {
                if (r[as] && r[as](t))
                    return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
        ;
        De.getClosestElement = CU;
        function NU(e) {
            return e != null && typeof e == "object" ? e instanceof Element ? EU : _U : null
        }
    }
    );
    var ss = u( (dK, b_) => {
        var LU = pt()
          , O_ = Object.create
          , PU = function() {
            function e() {}
            return function(t) {
                if (!LU(t))
                    return {};
                if (O_)
                    return O_(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0,
                r
            }
        }();
        b_.exports = PU
    }
    );
    var bi = u( (pK, w_) => {
        function qU() {}
        w_.exports = qU
    }
    );
    var Si = u( (vK, S_) => {
        var DU = ss()
          , MU = bi();
        function wi(e, t) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__chain__ = !!t,
            this.__index__ = 0,
            this.__values__ = void 0
        }
        wi.prototype = DU(MU.prototype);
        wi.prototype.constructor = wi;
        S_.exports = wi
    }
    );
    var C_ = u( (hK, x_) => {
        var A_ = tr()
          , FU = Hr()
          , GU = Le()
          , R_ = A_ ? A_.isConcatSpreadable : void 0;
        function UU(e) {
            return GU(e) || FU(e) || !!(R_ && e && e[R_])
        }
        x_.exports = UU
    }
    );
    var P_ = u( (gK, L_) => {
        var XU = jn()
          , WU = C_();
        function N_(e, t, r, n, o) {
            var i = -1
              , a = e.length;
            for (r || (r = WU),
            o || (o = []); ++i < a; ) {
                var s = e[i];
                t > 0 && r(s) ? t > 1 ? N_(s, t - 1, r, n, o) : XU(o, s) : n || (o[o.length] = s)
            }
            return o
        }
        L_.exports = N_
    }
    );
    var D_ = u( (EK, q_) => {
        var VU = P_();
        function kU(e) {
            var t = e == null ? 0 : e.length;
            return t ? VU(e, 1) : []
        }
        q_.exports = kU
    }
    );
    var F_ = u( (_K, M_) => {
        function HU(e, t, r) {
            switch (r.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, r[0]);
            case 2:
                return e.call(t, r[0], r[1]);
            case 3:
                return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        M_.exports = HU
    }
    );
    var X_ = u( (mK, U_) => {
        var BU = F_()
          , G_ = Math.max;
        function jU(e, t, r) {
            return t = G_(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, o = -1, i = G_(n.length - t, 0), a = Array(i); ++o < i; )
                    a[o] = n[t + o];
                o = -1;
                for (var s = Array(t + 1); ++o < t; )
                    s[o] = n[o];
                return s[t] = r(a),
                BU(e, this, s)
            }
        }
        U_.exports = jU
    }
    );
    var V_ = u( (yK, W_) => {
        function KU(e) {
            return function() {
                return e
            }
        }
        W_.exports = KU
    }
    );
    var B_ = u( (IK, H_) => {
        var zU = V_()
          , k_ = ns()
          , YU = ii()
          , QU = k_ ? function(e, t) {
            return k_(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: zU(t),
                writable: !0
            })
        }
        : YU;
        H_.exports = QU
    }
    );
    var K_ = u( (TK, j_) => {
        var $U = 800
          , ZU = 16
          , JU = Date.now;
        function eX(e) {
            var t = 0
              , r = 0;
            return function() {
                var n = JU()
                  , o = ZU - (n - r);
                if (r = n,
                o > 0) {
                    if (++t >= $U)
                        return arguments[0]
                } else
                    t = 0;
                return e.apply(void 0, arguments)
            }
        }
        j_.exports = eX
    }
    );
    var Y_ = u( (OK, z_) => {
        var tX = B_()
          , rX = K_()
          , nX = rX(tX);
        z_.exports = nX
    }
    );
    var $_ = u( (bK, Q_) => {
        var iX = D_()
          , oX = X_()
          , aX = Y_();
        function sX(e) {
            return aX(oX(e, void 0, iX), e + "")
        }
        Q_.exports = sX
    }
    );
    var em = u( (wK, J_) => {
        var Z_ = Ia()
          , uX = Z_ && new Z_;
        J_.exports = uX
    }
    );
    var rm = u( (SK, tm) => {
        function cX() {}
        tm.exports = cX
    }
    );
    var us = u( (AK, im) => {
        var nm = em()
          , lX = rm()
          , fX = nm ? function(e) {
            return nm.get(e)
        }
        : lX;
        im.exports = fX
    }
    );
    var am = u( (RK, om) => {
        var dX = {};
        om.exports = dX
    }
    );
    var cs = u( (xK, um) => {
        var sm = am()
          , pX = Object.prototype
          , vX = pX.hasOwnProperty;
        function hX(e) {
            for (var t = e.name + "", r = sm[t], n = vX.call(sm, t) ? r.length : 0; n--; ) {
                var o = r[n]
                  , i = o.func;
                if (i == null || i == e)
                    return o.name
            }
            return t
        }
        um.exports = hX
    }
    );
    var Ri = u( (CK, cm) => {
        var gX = ss()
          , EX = bi()
          , _X = 4294967295;
        function Ai(e) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__dir__ = 1,
            this.__filtered__ = !1,
            this.__iteratees__ = [],
            this.__takeCount__ = _X,
            this.__views__ = []
        }
        Ai.prototype = gX(EX.prototype);
        Ai.prototype.constructor = Ai;
        cm.exports = Ai
    }
    );
    var fm = u( (NK, lm) => {
        function mX(e, t) {
            var r = -1
              , n = e.length;
            for (t || (t = Array(n)); ++r < n; )
                t[r] = e[r];
            return t
        }
        lm.exports = mX
    }
    );
    var pm = u( (LK, dm) => {
        var yX = Ri()
          , IX = Si()
          , TX = fm();
        function OX(e) {
            if (e instanceof yX)
                return e.clone();
            var t = new IX(e.__wrapped__,e.__chain__);
            return t.__actions__ = TX(e.__actions__),
            t.__index__ = e.__index__,
            t.__values__ = e.__values__,
            t
        }
        dm.exports = OX
    }
    );
    var gm = u( (PK, hm) => {
        var bX = Ri()
          , vm = Si()
          , wX = bi()
          , SX = Le()
          , AX = yt()
          , RX = pm()
          , xX = Object.prototype
          , CX = xX.hasOwnProperty;
        function xi(e) {
            if (AX(e) && !SX(e) && !(e instanceof bX)) {
                if (e instanceof vm)
                    return e;
                if (CX.call(e, "__wrapped__"))
                    return RX(e)
            }
            return new vm(e)
        }
        xi.prototype = wX.prototype;
        xi.prototype.constructor = xi;
        hm.exports = xi
    }
    );
    var _m = u( (qK, Em) => {
        var NX = Ri()
          , LX = us()
          , PX = cs()
          , qX = gm();
        function DX(e) {
            var t = PX(e)
              , r = qX[t];
            if (typeof r != "function" || !(t in NX.prototype))
                return !1;
            if (e === r)
                return !0;
            var n = LX(r);
            return !!n && e === n[0]
        }
        Em.exports = DX
    }
    );
    var Tm = u( (DK, Im) => {
        var mm = Si()
          , MX = $_()
          , FX = us()
          , ls = cs()
          , GX = Le()
          , ym = _m()
          , UX = "Expected a function"
          , XX = 8
          , WX = 32
          , VX = 128
          , kX = 256;
        function HX(e) {
            return MX(function(t) {
                var r = t.length
                  , n = r
                  , o = mm.prototype.thru;
                for (e && t.reverse(); n--; ) {
                    var i = t[n];
                    if (typeof i != "function")
                        throw new TypeError(UX);
                    if (o && !a && ls(i) == "wrapper")
                        var a = new mm([],!0)
                }
                for (n = a ? n : r; ++n < r; ) {
                    i = t[n];
                    var s = ls(i)
                      , c = s == "wrapper" ? FX(i) : void 0;
                    c && ym(c[0]) && c[1] == (VX | XX | WX | kX) && !c[4].length && c[9] == 1 ? a = a[ls(c[0])].apply(a, c[3]) : a = i.length == 1 && ym(i) ? a[s]() : a.thru(i)
                }
                return function() {
                    var g = arguments
                      , y = g[0];
                    if (a && g.length == 1 && GX(y))
                        return a.plant(y).value();
                    for (var p = 0, I = r ? t[p].apply(this, g) : y; ++p < r; )
                        I = t[p].call(this, I);
                    return I
                }
            })
        }
        Im.exports = HX
    }
    );
    var bm = u( (MK, Om) => {
        var BX = Tm()
          , jX = BX();
        Om.exports = jX
    }
    );
    var Sm = u( (FK, wm) => {
        function KX(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r),
            t !== void 0 && (e = e >= t ? e : t)),
            e
        }
        wm.exports = KX
    }
    );
    var Rm = u( (GK, Am) => {
        var zX = Sm()
          , fs = oi();
        function YX(e, t, r) {
            return r === void 0 && (r = t,
            t = void 0),
            r !== void 0 && (r = fs(r),
            r = r === r ? r : 0),
            t !== void 0 && (t = fs(t),
            t = t === t ? t : 0),
            zX(fs(e), t, r)
        }
        Am.exports = YX
    }
    );
    var jm = u(qi => {
        "use strict";
        var Pi = et().default;
        Object.defineProperty(qi, "__esModule", {
            value: !0
        });
        qi.default = void 0;
        var Ye = Pi(or())
          , QX = Pi(bm())
          , $X = Pi(ni())
          , ZX = Pi(Rm())
          , Kt = Be()
          , ds = gs()
          , Ci = Oi()
          , JX = jt()
          , {MOUSE_CLICK: eW, MOUSE_SECOND_CLICK: tW, MOUSE_DOWN: rW, MOUSE_UP: nW, MOUSE_OVER: iW, MOUSE_OUT: oW, DROPDOWN_CLOSE: aW, DROPDOWN_OPEN: sW, SLIDER_ACTIVE: uW, SLIDER_INACTIVE: cW, TAB_ACTIVE: lW, TAB_INACTIVE: fW, NAVBAR_CLOSE: dW, NAVBAR_OPEN: pW, MOUSE_MOVE: vW, PAGE_SCROLL_DOWN: Fm, SCROLL_INTO_VIEW: Gm, SCROLL_OUT_OF_VIEW: hW, PAGE_SCROLL_UP: gW, SCROLLING_IN_VIEW: EW, PAGE_FINISH: Um, ECOMMERCE_CART_CLOSE: _W, ECOMMERCE_CART_OPEN: mW, PAGE_START: Xm, PAGE_SCROLL: yW} = Kt.EventTypeConsts
          , ps = "COMPONENT_ACTIVE"
          , Wm = "COMPONENT_INACTIVE"
          , {COLON_DELIMITER: xm} = Kt.IX2EngineConstants
          , {getNamespacedParameterId: Cm} = JX.IX2VanillaUtils
          , Vm = e => t => typeof t == "object" && e(t) ? !0 : t
          , un = Vm( ({element: e, nativeEvent: t}) => e === t.target)
          , IW = Vm( ({element: e, nativeEvent: t}) => e.contains(t.target))
          , Et = (0,
        QX.default)([un, IW])
          , km = (e, t) => {
            if (t) {
                let {ixData: r} = e.getState()
                  , {events: n} = r
                  , o = n[t];
                if (o && !OW[o.eventTypeId])
                    return o
            }
            return null
        }
          , TW = ({store: e, event: t}) => {
            let {action: r} = t
              , {autoStopEventId: n} = r.config;
            return !!km(e, n)
        }
          , Ke = ({store: e, event: t, element: r, eventStateKey: n}, o) => {
            let {action: i, id: a} = t
              , {actionListId: s, autoStopEventId: c} = i.config
              , g = km(e, c);
            return g && (0,
            ds.stopActionGroup)({
                store: e,
                eventId: c,
                eventTarget: r,
                eventStateKey: c + xm + n.split(xm)[1],
                actionListId: (0,
                $X.default)(g, "action.config.actionListId")
            }),
            (0,
            ds.stopActionGroup)({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }),
            (0,
            ds.startActionGroup)({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }),
            o
        }
          , it = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n
          , cn = {
            handler: it(Et, Ke)
        }
          , Hm = (0,
        Ye.default)({}, cn, {
            types: [ps, Wm].join(" ")
        })
          , vs = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }]
          , Nm = "mouseover mouseout"
          , hs = {
            types: vs
        }
          , OW = {
            PAGE_START: Xm,
            PAGE_FINISH: Um
        }
          , sn = ( () => {
            let e = window.pageXOffset !== void 0
              , r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0,
                ZX.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        }
        )()
          , bW = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top)
          , wW = ({element: e, nativeEvent: t}) => {
            let {type: r, target: n, relatedTarget: o} = t
              , i = e.contains(n);
            if (r === "mouseover" && i)
                return !0;
            let a = e.contains(o);
            return !!(r === "mouseout" && i && a)
        }
          , SW = e => {
            let {element: t, event: {config: r}} = e
              , {clientWidth: n, clientHeight: o} = sn()
              , i = r.scrollOffsetValue
              , c = r.scrollOffsetUnit === "PX" ? i : o * (i || 0) / 100;
            return bW(t.getBoundingClientRect(), {
                left: 0,
                top: c,
                right: n,
                bottom: o - c
            })
        }
          , Bm = e => (t, r) => {
            let {type: n} = t.nativeEvent
              , o = [ps, Wm].indexOf(n) !== -1 ? n === ps : r.isActive
              , i = (0,
            Ye.default)({}, r, {
                isActive: o
            });
            return (!r || i.isActive !== r.isActive) && e(t, i) || i
        }
          , Lm = e => (t, r) => {
            let n = {
                elementHovered: wW(t)
            };
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }
          , AW = e => (t, r) => {
            let n = (0,
            Ye.default)({}, r, {
                elementVisible: SW(t)
            });
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }
          , Pm = e => (t, r={}) => {
            let {stiffScrollTop: n, scrollHeight: o, innerHeight: i} = sn()
              , {event: {config: a, eventTypeId: s}} = t
              , {scrollOffsetValue: c, scrollOffsetUnit: g} = a
              , y = g === "PX"
              , p = o - i
              , I = Number((n / p).toFixed(2));
            if (r && r.percentTop === I)
                return r;
            let _ = (y ? c : i * (c || 0) / 100) / p, m, b, C = 0;
            r && (m = I > r.percentTop,
            b = r.scrollingDown !== m,
            C = b ? I : r.anchorTop);
            let x = s === Fm ? I >= C + _ : I <= C - _
              , N = (0,
            Ye.default)({}, r, {
                percentTop: I,
                inBounds: x,
                anchorTop: C,
                scrollingDown: m
            });
            return r && x && (b || N.inBounds !== r.inBounds) && e(t, N) || N
        }
          , RW = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom
          , xW = e => (t, r) => {
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(r && r.finshed) && e(t),
            n
        }
          , CW = e => (t, r) => {
            let n = {
                started: !0
            };
            return r || e(t),
            n
        }
          , qm = e => (t, r={
            clickCount: 0
        }) => {
            let n = {
                clickCount: r.clickCount % 2 + 1
            };
            return n.clickCount !== r.clickCount && e(t, n) || n
        }
          , Ni = (e=!0) => (0,
        Ye.default)({}, Hm, {
            handler: it(e ? Et : un, Bm( (t, r) => r.isActive ? cn.handler(t, r) : r))
        })
          , Li = (e=!0) => (0,
        Ye.default)({}, Hm, {
            handler: it(e ? Et : un, Bm( (t, r) => r.isActive ? r : cn.handler(t, r)))
        })
          , Dm = (0,
        Ye.default)({}, hs, {
            handler: AW( (e, t) => {
                let {elementVisible: r} = t
                  , {event: n, store: o} = e
                  , {ixData: i} = o.getState()
                  , {events: a} = i;
                return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === Gm === r ? (Ke(e),
                (0,
                Ye.default)({}, t, {
                    triggered: !0
                })) : t
            }
            )
        })
          , Mm = .05
          , NW = {
            [uW]: Ni(),
            [cW]: Li(),
            [sW]: Ni(),
            [aW]: Li(),
            [pW]: Ni(!1),
            [dW]: Li(!1),
            [lW]: Ni(),
            [fW]: Li(),
            [mW]: {
                types: "ecommerce-cart-open",
                handler: it(Et, Ke)
            },
            [_W]: {
                types: "ecommerce-cart-close",
                handler: it(Et, Ke)
            },
            [eW]: {
                types: "click",
                handler: it(Et, qm( (e, {clickCount: t}) => {
                    TW(e) ? t === 1 && Ke(e) : Ke(e)
                }
                ))
            },
            [tW]: {
                types: "click",
                handler: it(Et, qm( (e, {clickCount: t}) => {
                    t === 2 && Ke(e)
                }
                ))
            },
            [rW]: (0,
            Ye.default)({}, cn, {
                types: "mousedown"
            }),
            [nW]: (0,
            Ye.default)({}, cn, {
                types: "mouseup"
            }),
            [iW]: {
                types: Nm,
                handler: it(Et, Lm( (e, t) => {
                    t.elementHovered && Ke(e)
                }
                ))
            },
            [oW]: {
                types: Nm,
                handler: it(Et, Lm( (e, t) => {
                    t.elementHovered || Ke(e)
                }
                ))
            },
            [vW]: {
                types: "mousemove mouseout scroll",
                handler: ({store: e, element: t, eventConfig: r, nativeEvent: n, eventStateKey: o}, i={
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {basedOn: a, selectedAxis: s, continuousParameterGroupId: c, reverse: g, restingState: y=0} = r
                      , {clientX: p=i.clientX, clientY: I=i.clientY, pageX: _=i.pageX, pageY: m=i.pageY} = n
                      , b = s === "X_AXIS"
                      , C = n.type === "mouseout"
                      , x = y / 100
                      , N = c
                      , R = !1;
                    switch (a) {
                    case Kt.EventBasedOn.VIEWPORT:
                        {
                            x = b ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(I, window.innerHeight) / window.innerHeight;
                            break
                        }
                    case Kt.EventBasedOn.PAGE:
                        {
                            let {scrollLeft: M, scrollTop: D, scrollWidth: F, scrollHeight: j} = sn();
                            x = b ? Math.min(M + _, F) / F : Math.min(D + m, j) / j;
                            break
                        }
                    case Kt.EventBasedOn.ELEMENT:
                    default:
                        {
                            N = Cm(o, c);
                            let M = n.type.indexOf("mouse") === 0;
                            if (M && Et({
                                element: t,
                                nativeEvent: n
                            }) !== !0)
                                break;
                            let D = t.getBoundingClientRect()
                              , {left: F, top: j, width: $, height: J} = D;
                            if (!M && !RW({
                                left: p,
                                top: I
                            }, D))
                                break;
                            R = !0,
                            x = b ? (p - F) / $ : (I - j) / J;
                            break
                        }
                    }
                    return C && (x > 1 - Mm || x < Mm) && (x = Math.round(x)),
                    (a !== Kt.EventBasedOn.ELEMENT || R || R !== i.elementHovered) && (x = g ? 1 - x : x,
                    e.dispatch((0,
                    Ci.parameterChanged)(N, x))),
                    {
                        elementHovered: R,
                        clientX: p,
                        clientY: I,
                        pageX: _,
                        pageY: m
                    }
                }
            },
            [yW]: {
                types: vs,
                handler: ({store: e, eventConfig: t}) => {
                    let {continuousParameterGroupId: r, reverse: n} = t
                      , {scrollTop: o, scrollHeight: i, clientHeight: a} = sn()
                      , s = o / (i - a);
                    s = n ? 1 - s : s,
                    e.dispatch((0,
                    Ci.parameterChanged)(r, s))
                }
            },
            [EW]: {
                types: vs,
                handler: ({element: e, store: t, eventConfig: r, eventStateKey: n}, o={
                    scrollPercent: 0
                }) => {
                    let {scrollLeft: i, scrollTop: a, scrollWidth: s, scrollHeight: c, clientHeight: g} = sn()
                      , {basedOn: y, selectedAxis: p, continuousParameterGroupId: I, startsEntering: _, startsExiting: m, addEndOffset: b, addStartOffset: C, addOffsetValue: x=0, endOffsetValue: N=0} = r
                      , R = p === "X_AXIS";
                    if (y === Kt.EventBasedOn.VIEWPORT) {
                        let M = R ? i / s : a / c;
                        return M !== o.scrollPercent && t.dispatch((0,
                        Ci.parameterChanged)(I, M)),
                        {
                            scrollPercent: M
                        }
                    } else {
                        let M = Cm(n, I)
                          , D = e.getBoundingClientRect()
                          , F = (C ? x : 0) / 100
                          , j = (b ? N : 0) / 100;
                        F = _ ? F : 1 - F,
                        j = m ? j : 1 - j;
                        let $ = D.top + Math.min(D.height * F, g)
                          , ae = D.top + D.height * j - $
                          , re = Math.min(g + ae, c)
                          , O = Math.min(Math.max(0, g - $), re) / re;
                        return O !== o.scrollPercent && t.dispatch((0,
                        Ci.parameterChanged)(M, O)),
                        {
                            scrollPercent: O
                        }
                    }
                }
            },
            [Gm]: Dm,
            [hW]: Dm,
            [Fm]: (0,
            Ye.default)({}, hs, {
                handler: Pm( (e, t) => {
                    t.scrollingDown && Ke(e)
                }
                )
            }),
            [gW]: (0,
            Ye.default)({}, hs, {
                handler: Pm( (e, t) => {
                    t.scrollingDown || Ke(e)
                }
                )
            }),
            [Um]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: it(un, xW(Ke))
            },
            [Xm]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: it(un, CW(Ke))
            }
        };
        qi.default = NW
    }
    );
    var gs = u(Pt => {
        "use strict";
        var at = et().default
          , LW = Ft().default;
        Object.defineProperty(Pt, "__esModule", {
            value: !0
        });
        Pt.observeRequests = uV;
        Pt.startActionGroup = Ts;
        Pt.startEngine = Ui;
        Pt.stopActionGroup = Is;
        Pt.stopAllActionGroups = ty;
        Pt.stopEngine = Xi;
        var PW = at(or())
          , qW = at(cE())
          , DW = at(Fa())
          , Lt = at(ni())
          , MW = at(RE())
          , FW = at(e_())
          , GW = at(r_())
          , UW = at(i_())
          , ln = at(l_())
          , XW = at(E_())
          , ot = Be()
          , Ym = jt()
          , be = Oi()
          , Re = LW(T_())
          , WW = at(jm())
          , VW = ["store", "computedStyle"]
          , kW = Object.keys(ot.QuickEffectIds)
          , Es = e => kW.includes(e)
          , {COLON_DELIMITER: _s, BOUNDARY_SELECTOR: Di, HTML_ELEMENT: Qm, RENDER_GENERAL: HW, W_MOD_IX: Km} = ot.IX2EngineConstants
          , {getAffectedElements: Mi, getElementId: BW, getDestinationValues: ms, observeStore: zt, getInstanceId: jW, renderHTMLElement: KW, clearAllStyles: $m, getMaxDurationItemIndex: zW, getComputedStyle: YW, getInstanceOrigin: QW, reduceListToGroup: $W, shouldNamespaceEventParameter: ZW, getNamespacedParameterId: JW, shouldAllowMediaQuery: Fi, cleanupHTMLElement: eV, clearObjectCache: tV, stringifyTarget: rV, mediaQueriesEqual: nV, shallowEqual: iV} = Ym.IX2VanillaUtils
          , {isPluginType: Gi, createPluginInstance: ys, getPluginDuration: oV} = Ym.IX2VanillaPlugins
          , zm = navigator.userAgent
          , aV = zm.match(/iPad/i) || zm.match(/iPhone/)
          , sV = 12;
        function uV(e) {
            zt({
                store: e,
                select: ({ixRequest: t}) => t.preview,
                onChange: fV
            }),
            zt({
                store: e,
                select: ({ixRequest: t}) => t.playback,
                onChange: dV
            }),
            zt({
                store: e,
                select: ({ixRequest: t}) => t.stop,
                onChange: pV
            }),
            zt({
                store: e,
                select: ({ixRequest: t}) => t.clear,
                onChange: vV
            })
        }
        function cV(e) {
            zt({
                store: e,
                select: ({ixSession: t}) => t.mediaQueryKey,
                onChange: () => {
                    Xi(e),
                    $m({
                        store: e,
                        elementApi: Re
                    }),
                    Ui({
                        store: e,
                        allowEvents: !0
                    }),
                    Zm()
                }
            })
        }
        function lV(e, t) {
            let r = zt({
                store: e,
                select: ({ixSession: n}) => n.tick,
                onChange: n => {
                    t(n),
                    r()
                }
            })
        }
        function fV({rawData: e, defer: t}, r) {
            let n = () => {
                Ui({
                    store: r,
                    rawData: e,
                    allowEvents: !0
                }),
                Zm()
            }
            ;
            t ? setTimeout(n, 0) : n()
        }
        function Zm() {
            document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
        }
        function dV(e, t) {
            let {actionTypeId: r, actionListId: n, actionItemId: o, eventId: i, allowEvents: a, immediate: s, testManual: c, verbose: g=!0} = e
              , {rawData: y} = e;
            if (n && o && y && s) {
                let p = y.actionLists[n];
                p && (y = $W({
                    actionList: p,
                    actionItemId: o,
                    rawData: y
                }))
            }
            if (Ui({
                store: t,
                rawData: y,
                allowEvents: a,
                testManual: c
            }),
            n && r === ot.ActionTypeConsts.GENERAL_START_ACTION || Es(r)) {
                Is({
                    store: t,
                    actionListId: n
                }),
                ey({
                    store: t,
                    actionListId: n,
                    eventId: i
                });
                let p = Ts({
                    store: t,
                    eventId: i,
                    actionListId: n,
                    immediate: s,
                    verbose: g
                });
                g && p && t.dispatch((0,
                be.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !s
                }))
            }
        }
        function pV({actionListId: e}, t) {
            e ? Is({
                store: t,
                actionListId: e
            }) : ty({
                store: t
            }),
            Xi(t)
        }
        function vV(e, t) {
            Xi(t),
            $m({
                store: t,
                elementApi: Re
            })
        }
        function Ui({store: e, rawData: t, allowEvents: r, testManual: n}) {
            let {ixSession: o} = e.getState();
            t && e.dispatch((0,
            be.rawDataImported)(t)),
            o.active || (e.dispatch((0,
            be.sessionInitialized)({
                hasBoundaryNodes: !!document.querySelector(Di),
                reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
            })),
            r && (yV(e),
            hV(),
            e.getState().ixSession.hasDefinedMediaQueries && cV(e)),
            e.dispatch((0,
            be.sessionStarted)()),
            gV(e, n))
        }
        function hV() {
            let {documentElement: e} = document;
            e.className.indexOf(Km) === -1 && (e.className += ` ${Km}`)
        }
        function gV(e, t) {
            let r = n => {
                let {ixSession: o, ixParameters: i} = e.getState();
                o.active && (e.dispatch((0,
                be.animationFrameChanged)(n, i)),
                t ? lV(e, r) : requestAnimationFrame(r))
            }
            ;
            r(window.performance.now())
        }
        function Xi(e) {
            let {ixSession: t} = e.getState();
            if (t.active) {
                let {eventListeners: r} = t;
                r.forEach(EV),
                tV(),
                e.dispatch((0,
                be.sessionStopped)())
            }
        }
        function EV({target: e, listenerParams: t}) {
            e.removeEventListener.apply(e, t)
        }
        function _V({store: e, eventStateKey: t, eventTarget: r, eventId: n, eventConfig: o, actionListId: i, parameterGroup: a, smoothing: s, restingValue: c}) {
            let {ixData: g, ixSession: y} = e.getState()
              , {events: p} = g
              , I = p[n]
              , {eventTypeId: _} = I
              , m = {}
              , b = {}
              , C = []
              , {continuousActionGroups: x} = a
              , {id: N} = a;
            ZW(_, o) && (N = JW(t, N));
            let R = y.hasBoundaryNodes && r ? Re.getClosestElement(r, Di) : null;
            x.forEach(M => {
                let {keyframe: D, actionItems: F} = M;
                F.forEach(j => {
                    let {actionTypeId: $} = j
                      , {target: J} = j.config;
                    if (!J)
                        return;
                    let ae = J.boundaryMode ? R : null
                      , re = rV(J) + _s + $;
                    if (b[re] = mV(b[re], D, j),
                    !m[re]) {
                        m[re] = !0;
                        let {config: W} = j;
                        Mi({
                            config: W,
                            event: I,
                            eventTarget: r,
                            elementRoot: ae,
                            elementApi: Re
                        }).forEach(O => {
                            C.push({
                                element: O,
                                key: re
                            })
                        }
                        )
                    }
                }
                )
            }
            ),
            C.forEach( ({element: M, key: D}) => {
                let F = b[D]
                  , j = (0,
                Lt.default)(F, "[0].actionItems[0]", {})
                  , {actionTypeId: $} = j
                  , J = Gi($) ? ys($)(M, j) : null
                  , ae = ms({
                    element: M,
                    actionItem: j,
                    elementApi: Re
                }, J);
                Os({
                    store: e,
                    element: M,
                    eventId: n,
                    actionListId: i,
                    actionItem: j,
                    destination: ae,
                    continuous: !0,
                    parameterId: N,
                    actionGroups: F,
                    smoothing: s,
                    restingValue: c,
                    pluginInstance: J
                })
            }
            )
        }
        function mV(e=[], t, r) {
            let n = [...e], o;
            return n.some( (i, a) => i.keyframe === t ? (o = a,
            !0) : !1),
            o == null && (o = n.length,
            n.push({
                keyframe: t,
                actionItems: []
            })),
            n[o].actionItems.push(r),
            n
        }
        function yV(e) {
            let {ixData: t} = e.getState()
              , {eventTypeMap: r} = t;
            Jm(e),
            (0,
            ln.default)(r, (o, i) => {
                let a = WW.default[i];
                if (!a) {
                    console.warn(`IX2 event type not configured: ${i}`);
                    return
                }
                SV({
                    logic: a,
                    store: e,
                    events: o
                })
            }
            );
            let {ixSession: n} = e.getState();
            n.eventListeners.length && TV(e)
        }
        var IV = ["resize", "orientationchange"];
        function TV(e) {
            let t = () => {
                Jm(e)
            }
            ;
            IV.forEach(r => {
                window.addEventListener(r, t),
                e.dispatch((0,
                be.eventListenerAdded)(window, [r, t]))
            }
            ),
            t()
        }
        function Jm(e) {
            let {ixSession: t, ixData: r} = e.getState()
              , n = window.innerWidth;
            if (n !== t.viewportWidth) {
                let {mediaQueries: o} = r;
                e.dispatch((0,
                be.viewportWidthChanged)({
                    width: n,
                    mediaQueries: o
                }))
            }
        }
        var OV = (e, t) => (0,
        FW.default)((0,
        UW.default)(e, t), GW.default)
          , bV = (e, t) => {
            (0,
            ln.default)(e, (r, n) => {
                r.forEach( (o, i) => {
                    let a = n + _s + i;
                    t(o, n, a)
                }
                )
            }
            )
        }
          , wV = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return Mi({
                config: t,
                elementApi: Re
            })
        }
        ;
        function SV({logic: e, store: t, events: r}) {
            AV(r);
            let {types: n, handler: o} = e
              , {ixData: i} = t.getState()
              , {actionLists: a} = i
              , s = OV(r, wV);
            if (!(0,
            MW.default)(s))
                return;
            (0,
            ln.default)(s, (p, I) => {
                let _ = r[I]
                  , {action: m, id: b, mediaQueries: C=i.mediaQueryKeys} = _
                  , {actionListId: x} = m.config;
                nV(C, i.mediaQueryKeys) || t.dispatch((0,
                be.mediaQueriesDefined)()),
                m.actionTypeId === ot.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION && (Array.isArray(_.config) ? _.config : [_.config]).forEach(R => {
                    let {continuousParameterGroupId: M} = R
                      , D = (0,
                    Lt.default)(a, `${x}.continuousParameterGroups`, [])
                      , F = (0,
                    DW.default)(D, ({id: J}) => J === M)
                      , j = (R.smoothing || 0) / 100
                      , $ = (R.restingState || 0) / 100;
                    F && p.forEach( (J, ae) => {
                        let re = b + _s + ae;
                        _V({
                            store: t,
                            eventStateKey: re,
                            eventTarget: J,
                            eventId: b,
                            eventConfig: R,
                            actionListId: x,
                            parameterGroup: F,
                            smoothing: j,
                            restingValue: $
                        })
                    }
                    )
                }
                ),
                (m.actionTypeId === ot.ActionTypeConsts.GENERAL_START_ACTION || Es(m.actionTypeId)) && ey({
                    store: t,
                    actionListId: x,
                    eventId: b
                })
            }
            );
            let c = p => {
                let {ixSession: I} = t.getState();
                bV(s, (_, m, b) => {
                    let C = r[m]
                      , x = I.eventState[b]
                      , {action: N, mediaQueries: R=i.mediaQueryKeys} = C;
                    if (!Fi(R, I.mediaQueryKey))
                        return;
                    let M = (D={}) => {
                        let F = o({
                            store: t,
                            element: _,
                            event: C,
                            eventConfig: D,
                            nativeEvent: p,
                            eventStateKey: b
                        }, x);
                        iV(F, x) || t.dispatch((0,
                        be.eventStateChanged)(b, F))
                    }
                    ;
                    N.actionTypeId === ot.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(C.config) ? C.config : [C.config]).forEach(M) : M()
                }
                )
            }
              , g = (0,
            XW.default)(c, sV)
              , y = ({target: p=document, types: I, throttle: _}) => {
                I.split(" ").filter(Boolean).forEach(m => {
                    let b = _ ? g : c;
                    p.addEventListener(m, b),
                    t.dispatch((0,
                    be.eventListenerAdded)(p, [m, b]))
                }
                )
            }
            ;
            Array.isArray(n) ? n.forEach(y) : typeof n == "string" && y(e)
        }
        function AV(e) {
            if (!aV)
                return;
            let t = {}
              , r = "";
            for (let n in e) {
                let {eventTypeId: o, target: i} = e[n]
                  , a = Re.getQuerySelector(i);
                t[a] || (o === ot.EventTypeConsts.MOUSE_CLICK || o === ot.EventTypeConsts.MOUSE_SECOND_CLICK) && (t[a] = !0,
                r += a + "{cursor: pointer;touch-action: manipulation;}")
            }
            if (r) {
                let n = document.createElement("style");
                n.textContent = r,
                document.body.appendChild(n)
            }
        }
        function ey({store: e, actionListId: t, eventId: r}) {
            let {ixData: n, ixSession: o} = e.getState()
              , {actionLists: i, events: a} = n
              , s = a[r]
              , c = i[t];
            if (c && c.useFirstGroupAsInitialState) {
                let g = (0,
                Lt.default)(c, "actionItemGroups[0].actionItems", [])
                  , y = (0,
                Lt.default)(s, "mediaQueries", n.mediaQueryKeys);
                if (!Fi(y, o.mediaQueryKey))
                    return;
                g.forEach(p => {
                    var I;
                    let {config: _, actionTypeId: m} = p
                      , b = (_ == null || (I = _.target) === null || I === void 0 ? void 0 : I.useEventTarget) === !0 ? {
                        target: s.target,
                        targets: s.targets
                    } : _
                      , C = Mi({
                        config: b,
                        event: s,
                        elementApi: Re
                    })
                      , x = Gi(m);
                    C.forEach(N => {
                        let R = x ? ys(m)(N, p) : null;
                        Os({
                            destination: ms({
                                element: N,
                                actionItem: p,
                                elementApi: Re
                            }, R),
                            immediate: !0,
                            store: e,
                            element: N,
                            eventId: r,
                            actionItem: p,
                            actionListId: t,
                            pluginInstance: R
                        })
                    }
                    )
                }
                )
            }
        }
        function ty({store: e}) {
            let {ixInstances: t} = e.getState();
            (0,
            ln.default)(t, r => {
                if (!r.continuous) {
                    let {actionListId: n, verbose: o} = r;
                    bs(r, e),
                    o && e.dispatch((0,
                    be.actionListPlaybackChanged)({
                        actionListId: n,
                        isPlaying: !1
                    }))
                }
            }
            )
        }
        function Is({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: o}) {
            let {ixInstances: i, ixSession: a} = e.getState()
              , s = a.hasBoundaryNodes && r ? Re.getClosestElement(r, Di) : null;
            (0,
            ln.default)(i, c => {
                let g = (0,
                Lt.default)(c, "actionItem.config.target.boundaryMode")
                  , y = n ? c.eventStateKey === n : !0;
                if (c.actionListId === o && c.eventId === t && y) {
                    if (s && g && !Re.elementContains(s, c.element))
                        return;
                    bs(c, e),
                    c.verbose && e.dispatch((0,
                    be.actionListPlaybackChanged)({
                        actionListId: o,
                        isPlaying: !1
                    }))
                }
            }
            )
        }
        function Ts({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: o, groupIndex: i=0, immediate: a, verbose: s}) {
            var c;
            let {ixData: g, ixSession: y} = e.getState()
              , {events: p} = g
              , I = p[t] || {}
              , {mediaQueries: _=g.mediaQueryKeys} = I
              , m = (0,
            Lt.default)(g, `actionLists.${o}`, {})
              , {actionItemGroups: b, useFirstGroupAsInitialState: C} = m;
            if (!b || !b.length)
                return !1;
            i >= b.length && (0,
            Lt.default)(I, "config.loop") && (i = 0),
            i === 0 && C && i++;
            let N = (i === 0 || i === 1 && C) && Es((c = I.action) === null || c === void 0 ? void 0 : c.actionTypeId) ? I.config.delay : void 0
              , R = (0,
            Lt.default)(b, [i, "actionItems"], []);
            if (!R.length || !Fi(_, y.mediaQueryKey))
                return !1;
            let M = y.hasBoundaryNodes && r ? Re.getClosestElement(r, Di) : null
              , D = zW(R)
              , F = !1;
            return R.forEach( (j, $) => {
                let {config: J, actionTypeId: ae} = j
                  , re = Gi(ae)
                  , {target: W} = J;
                if (!W)
                    return;
                let O = W.boundaryMode ? M : null;
                Mi({
                    config: J,
                    event: I,
                    eventTarget: r,
                    elementRoot: O,
                    elementApi: Re
                }).forEach( (k, H) => {
                    let ee = re ? ys(ae)(k, j) : null
                      , ie = re ? oV(ae)(k, j) : null;
                    F = !0;
                    let V = D === $ && H === 0
                      , K = YW({
                        element: k,
                        actionItem: j
                    })
                      , v = ms({
                        element: k,
                        actionItem: j,
                        elementApi: Re
                    }, ee);
                    Os({
                        store: e,
                        element: k,
                        actionItem: j,
                        eventId: t,
                        eventTarget: r,
                        eventStateKey: n,
                        actionListId: o,
                        groupIndex: i,
                        isCarrier: V,
                        computedStyle: K,
                        destination: v,
                        immediate: a,
                        verbose: s,
                        pluginInstance: ee,
                        pluginDuration: ie,
                        instanceDelay: N
                    })
                }
                )
            }
            ),
            F
        }
        function Os(e) {
            var t;
            let {store: r, computedStyle: n} = e, o = (0,
            qW.default)(e, VW), {element: i, actionItem: a, immediate: s, pluginInstance: c, continuous: g, restingValue: y, eventId: p} = o, I = !g, _ = jW(), {ixElements: m, ixSession: b, ixData: C} = r.getState(), x = BW(m, i), {refState: N} = m[x] || {}, R = Re.getRefType(i), M = b.reducedMotion && ot.ReducedMotionTypes[a.actionTypeId], D;
            if (M && g)
                switch ((t = C.events[p]) === null || t === void 0 ? void 0 : t.eventTypeId) {
                case ot.EventTypeConsts.MOUSE_MOVE:
                case ot.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                    D = y;
                    break;
                default:
                    D = .5;
                    break
                }
            let F = QW(i, N, n, a, Re, c);
            if (r.dispatch((0,
            be.instanceAdded)((0,
            PW.default)({
                instanceId: _,
                elementId: x,
                origin: F,
                refType: R,
                skipMotion: M,
                skipToValue: D
            }, o))),
            ry(document.body, "ix2-animation-started", _),
            s) {
                RV(r, _);
                return
            }
            zt({
                store: r,
                select: ({ixInstances: j}) => j[_],
                onChange: ny
            }),
            I && r.dispatch((0,
            be.instanceStarted)(_, b.tick))
        }
        function bs(e, t) {
            ry(document.body, "ix2-animation-stopping", {
                instanceId: e.id,
                state: t.getState()
            });
            let {elementId: r, actionItem: n} = e
              , {ixElements: o} = t.getState()
              , {ref: i, refType: a} = o[r] || {};
            a === Qm && eV(i, n, Re),
            t.dispatch((0,
            be.instanceRemoved)(e.id))
        }
        function ry(e, t, r) {
            let n = document.createEvent("CustomEvent");
            n.initCustomEvent(t, !0, !0, r),
            e.dispatchEvent(n)
        }
        function RV(e, t) {
            let {ixParameters: r} = e.getState();
            e.dispatch((0,
            be.instanceStarted)(t, 0)),
            e.dispatch((0,
            be.animationFrameChanged)(performance.now(), r));
            let {ixInstances: n} = e.getState();
            ny(n[t], e)
        }
        function ny(e, t) {
            let {active: r, continuous: n, complete: o, elementId: i, actionItem: a, actionTypeId: s, renderType: c, current: g, groupIndex: y, eventId: p, eventTarget: I, eventStateKey: _, actionListId: m, isCarrier: b, styleProp: C, verbose: x, pluginInstance: N} = e
              , {ixData: R, ixSession: M} = t.getState()
              , {events: D} = R
              , F = D[p] || {}
              , {mediaQueries: j=R.mediaQueryKeys} = F;
            if (Fi(j, M.mediaQueryKey) && (n || r || o)) {
                if (g || c === HW && o) {
                    t.dispatch((0,
                    be.elementStateChanged)(i, s, g, a));
                    let {ixElements: $} = t.getState()
                      , {ref: J, refType: ae, refState: re} = $[i] || {}
                      , W = re && re[s];
                    (ae === Qm || Gi(s)) && KW(J, re, W, p, a, C, Re, c, N)
                }
                if (o) {
                    if (b) {
                        let $ = Ts({
                            store: t,
                            eventId: p,
                            eventTarget: I,
                            eventStateKey: _,
                            actionListId: m,
                            groupIndex: y + 1,
                            verbose: x
                        });
                        x && !$ && t.dispatch((0,
                        be.actionListPlaybackChanged)({
                            actionListId: m,
                            isPlaying: !1
                        }))
                    }
                    bs(e, t)
                }
            }
        }
    }
    );
    var oy = u(Ot => {
        "use strict";
        var xV = Ft().default
          , CV = et().default;
        Object.defineProperty(Ot, "__esModule", {
            value: !0
        });
        Ot.actions = void 0;
        Ot.destroy = iy;
        Ot.init = DV;
        Ot.setEnv = qV;
        Ot.store = void 0;
        Vl();
        var NV = ra()
          , LV = CV(uE())
          , ws = gs()
          , PV = xV(Oi());
        Ot.actions = PV;
        var Wi = (0,
        NV.createStore)(LV.default);
        Ot.store = Wi;
        function qV(e) {
            e() && (0,
            ws.observeRequests)(Wi)
        }
        function DV(e) {
            iy(),
            (0,
            ws.startEngine)({
                store: Wi,
                rawData: e,
                allowEvents: !0
            })
        }
        function iy() {
            (0,
            ws.stopEngine)(Wi)
        }
    }
    );
    var cy = u( (VK, uy) => {
        var ay = Xe()
          , sy = oy();
        sy.setEnv(ay.env);
        ay.define("ix2", uy.exports = function() {
            return sy
        }
        )
    }
    );
    var fy = u( (kK, ly) => {
        var Sr = Xe();
        Sr.define("links", ly.exports = function(e, t) {
            var r = {}, n = e(window), o, i = Sr.env(), a = window.location, s = document.createElement("a"), c = "w--current", g = /index\.(html|php)$/, y = /\/$/, p, I;
            r.ready = r.design = r.preview = _;
            function _() {
                o = i && Sr.env("design"),
                I = Sr.env("slug") || a.pathname || "",
                Sr.scroll.off(b),
                p = [];
                for (var x = document.links, N = 0; N < x.length; ++N)
                    m(x[N]);
                p.length && (Sr.scroll.on(b),
                b())
            }
            function m(x) {
                var N = o && x.getAttribute("href-disabled") || x.getAttribute("href");
                if (s.href = N,
                !(N.indexOf(":") >= 0)) {
                    var R = e(x);
                    if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                        if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash))
                            return;
                        var M = e(s.hash);
                        M.length && p.push({
                            link: R,
                            sec: M,
                            active: !1
                        });
                        return
                    }
                    if (!(N === "#" || N === "")) {
                        var D = s.href === a.href || N === I || g.test(N) && y.test(I);
                        C(R, c, D)
                    }
                }
            }
            function b() {
                var x = n.scrollTop()
                  , N = n.height();
                t.each(p, function(R) {
                    var M = R.link
                      , D = R.sec
                      , F = D.offset().top
                      , j = D.outerHeight()
                      , $ = N * .5
                      , J = D.is(":visible") && F + j - $ >= x && F + $ <= x + N;
                    R.active !== J && (R.active = J,
                    C(M, c, J))
                })
            }
            function C(x, N, R) {
                var M = x.hasClass(N);
                R && M || !R && !M || (R ? x.addClass(N) : x.removeClass(N))
            }
            return r
        }
        )
    }
    );
    var py = u( (HK, dy) => {
        var Vi = Xe();
        Vi.define("scroll", dy.exports = function(e) {
            var t = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll"
            }
              , r = window.location
              , n = m() ? null : window.history
              , o = e(window)
              , i = e(document)
              , a = e(document.body)
              , s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(W) {
                window.setTimeout(W, 15)
            }
              , c = Vi.env("editor") ? ".w-editor-body" : "body"
              , g = "header, " + c + " > .header, " + c + " > .w-nav:not([data-no-scroll])"
              , y = 'a[href="#"]'
              , p = 'a[href*="#"]:not(.w-tab-link):not(' + y + ")"
              , I = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
              , _ = document.createElement("style");
            _.appendChild(document.createTextNode(I));
            function m() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var b = /^#[a-zA-Z0-9][\w:.-]*$/;
            function C(W) {
                return b.test(W.hash) && W.host + W.pathname === r.host + r.pathname
            }
            let x = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
            function N() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || x.matches
            }
            function R(W, O) {
                var U;
                switch (O) {
                case "add":
                    U = W.attr("tabindex"),
                    U ? W.attr("data-wf-tabindex-swap", U) : W.attr("tabindex", "-1");
                    break;
                case "remove":
                    U = W.attr("data-wf-tabindex-swap"),
                    U ? (W.attr("tabindex", U),
                    W.removeAttr("data-wf-tabindex-swap")) : W.removeAttr("tabindex");
                    break
                }
                W.toggleClass("wf-force-outline-none", O === "add")
            }
            function M(W) {
                var O = W.currentTarget;
                if (!(Vi.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(O.className))) {
                    var U = C(O) ? O.hash : "";
                    if (U !== "") {
                        var k = e(U);
                        k.length && (W && (W.preventDefault(),
                        W.stopPropagation()),
                        D(U, W),
                        window.setTimeout(function() {
                            F(k, function() {
                                R(k, "add"),
                                k.get(0).focus({
                                    preventScroll: !0
                                }),
                                R(k, "remove")
                            })
                        }, W ? 0 : 300))
                    }
                }
            }
            function D(W) {
                if (r.hash !== W && n && n.pushState && !(Vi.env.chrome && r.protocol === "file:")) {
                    var O = n.state && n.state.hash;
                    O !== W && n.pushState({
                        hash: W
                    }, "", W)
                }
            }
            function F(W, O) {
                var U = o.scrollTop()
                  , k = j(W);
                if (U !== k) {
                    var H = $(W, U, k)
                      , ee = Date.now()
                      , ie = function() {
                        var V = Date.now() - ee;
                        window.scroll(0, J(U, k, V, H)),
                        V <= H ? s(ie) : typeof O == "function" && O()
                    };
                    s(ie)
                }
            }
            function j(W) {
                var O = e(g)
                  , U = O.css("position") === "fixed" ? O.outerHeight() : 0
                  , k = W.offset().top - U;
                if (W.data("scroll") === "mid") {
                    var H = o.height() - U
                      , ee = W.outerHeight();
                    ee < H && (k -= Math.round((H - ee) / 2))
                }
                return k
            }
            function $(W, O, U) {
                if (N())
                    return 0;
                var k = 1;
                return a.add(W).each(function(H, ee) {
                    var ie = parseFloat(ee.getAttribute("data-scroll-time"));
                    !isNaN(ie) && ie >= 0 && (k = ie)
                }),
                (472.143 * Math.log(Math.abs(O - U) + 125) - 2e3) * k
            }
            function J(W, O, U, k) {
                return U > k ? O : W + (O - W) * ae(U / k)
            }
            function ae(W) {
                return W < .5 ? 4 * W * W * W : (W - 1) * (2 * W - 2) * (2 * W - 2) + 1
            }
            function re() {
                var {WF_CLICK_EMPTY: W, WF_CLICK_SCROLL: O} = t;
                i.on(O, p, M),
                i.on(W, y, function(U) {
                    U.preventDefault()
                }),
                document.head.insertBefore(_, document.head.firstChild)
            }
            return {
                ready: re
            }
        }
        )
    }
    );
    var hy = u( (BK, vy) => {
        var MV = Xe();
        MV.define("touch", vy.exports = function(e) {
            var t = {}
              , r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            },
            t.init = function(i) {
                return i = typeof i == "string" ? e(i).get(0) : i,
                i ? new n(i) : null
            }
            ;
            function n(i) {
                var a = !1, s = !1, c = Math.min(Math.round(window.innerWidth * .04), 40), g, y;
                i.addEventListener("touchstart", p, !1),
                i.addEventListener("touchmove", I, !1),
                i.addEventListener("touchend", _, !1),
                i.addEventListener("touchcancel", m, !1),
                i.addEventListener("mousedown", p, !1),
                i.addEventListener("mousemove", I, !1),
                i.addEventListener("mouseup", _, !1),
                i.addEventListener("mouseout", m, !1);
                function p(C) {
                    var x = C.touches;
                    x && x.length > 1 || (a = !0,
                    x ? (s = !0,
                    g = x[0].clientX) : g = C.clientX,
                    y = g)
                }
                function I(C) {
                    if (a) {
                        if (s && C.type === "mousemove") {
                            C.preventDefault(),
                            C.stopPropagation();
                            return
                        }
                        var x = C.touches
                          , N = x ? x[0].clientX : C.clientX
                          , R = N - y;
                        y = N,
                        Math.abs(R) > c && r && String(r()) === "" && (o("swipe", C, {
                            direction: R > 0 ? "right" : "left"
                        }),
                        m())
                    }
                }
                function _(C) {
                    if (a && (a = !1,
                    s && C.type === "mouseup")) {
                        C.preventDefault(),
                        C.stopPropagation(),
                        s = !1;
                        return
                    }
                }
                function m() {
                    a = !1
                }
                function b() {
                    i.removeEventListener("touchstart", p, !1),
                    i.removeEventListener("touchmove", I, !1),
                    i.removeEventListener("touchend", _, !1),
                    i.removeEventListener("touchcancel", m, !1),
                    i.removeEventListener("mousedown", p, !1),
                    i.removeEventListener("mousemove", I, !1),
                    i.removeEventListener("mouseup", _, !1),
                    i.removeEventListener("mouseout", m, !1),
                    i = null
                }
                this.destroy = b
            }
            function o(i, a, s) {
                var c = e.Event(i, {
                    originalEvent: a
                });
                e(a.target).trigger(c, s)
            }
            return t.instance = t.init(document),
            t
        }
        )
    }
    );
    var _y = u( (jK, Ey) => {
        var Yt = Xe()
          , FV = Rr()
          , st = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            ESCAPE: 27,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        }
          , gy = !0
          , GV = /^#[a-zA-Z0-9\-_]+$/;
        Yt.define("dropdown", Ey.exports = function(e, t) {
            var r = t.debounce, n = {}, o = Yt.env(), i = !1, a, s = Yt.env.touch, c = ".w-dropdown", g = "w--open", y = FV.triggers, p = 900, I = "focusout" + c, _ = "keydown" + c, m = "mouseenter" + c, b = "mousemove" + c, C = "mouseleave" + c, x = (s ? "click" : "mouseup") + c, N = "w-close" + c, R = "setting" + c, M = e(document), D;
            n.ready = F,
            n.design = function() {
                i && O(),
                i = !1,
                F()
            }
            ,
            n.preview = function() {
                i = !0,
                F()
            }
            ;
            function F() {
                a = o && Yt.env("design"),
                D = M.find(c),
                D.each(j)
            }
            function j(l, P) {
                var X = e(P)
                  , w = e.data(P, c);
                w || (w = e.data(P, c, {
                    open: !1,
                    el: X,
                    config: {},
                    selectedIdx: -1
                })),
                w.toggle = w.el.children(".w-dropdown-toggle"),
                w.list = w.el.children(".w-dropdown-list"),
                w.links = w.list.find("a:not(.w-dropdown .w-dropdown a)"),
                w.complete = H(w),
                w.mouseLeave = ie(w),
                w.mouseUpOutside = k(w),
                w.mouseMoveOutside = V(w),
                $(w);
                var Y = w.toggle.attr("id")
                  , fe = w.list.attr("id");
                Y || (Y = "w-dropdown-toggle-" + l),
                fe || (fe = "w-dropdown-list-" + l),
                w.toggle.attr("id", Y),
                w.toggle.attr("aria-controls", fe),
                w.toggle.attr("aria-haspopup", "menu"),
                w.toggle.attr("aria-expanded", "false"),
                w.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"),
                w.toggle.prop("tagName") !== "BUTTON" && (w.toggle.attr("role", "button"),
                w.toggle.attr("tabindex") || w.toggle.attr("tabindex", "0")),
                w.list.attr("id", fe),
                w.list.attr("aria-labelledby", Y),
                w.links.each(function(E, B) {
                    B.hasAttribute("tabindex") || B.setAttribute("tabindex", "0"),
                    GV.test(B.hash) && B.addEventListener("click", W.bind(null, w))
                }),
                w.el.off(c),
                w.toggle.off(c),
                w.nav && w.nav.off(c);
                var ne = ae(w, gy);
                a && w.el.on(R, J(w)),
                a || (o && (w.hovering = !1,
                W(w)),
                w.config.hover && w.toggle.on(m, ee(w)),
                w.el.on(N, ne),
                w.el.on(_, K(w)),
                w.el.on(I, h(w)),
                w.toggle.on(x, ne),
                w.toggle.on(_, d(w)),
                w.nav = w.el.closest(".w-nav"),
                w.nav.on(N, ne))
            }
            function $(l) {
                var P = Number(l.el.css("z-index"));
                l.manageZ = P === p || P === p + 1,
                l.config = {
                    hover: l.el.attr("data-hover") === "true" && !s,
                    delay: l.el.attr("data-delay")
                }
            }
            function J(l) {
                return function(P, X) {
                    X = X || {},
                    $(l),
                    X.open === !0 && re(l, !0),
                    X.open === !1 && W(l, {
                        immediate: !0
                    })
                }
            }
            function ae(l, P) {
                return r(function(X) {
                    if (l.open || X && X.type === "w-close")
                        return W(l, {
                            forceClose: P
                        });
                    re(l)
                })
            }
            function re(l) {
                if (!l.open) {
                    U(l),
                    l.open = !0,
                    l.list.addClass(g),
                    l.toggle.addClass(g),
                    l.toggle.attr("aria-expanded", "true"),
                    y.intro(0, l.el[0]),
                    Yt.redraw.up(),
                    l.manageZ && l.el.css("z-index", p + 1);
                    var P = Yt.env("editor");
                    a || M.on(x, l.mouseUpOutside),
                    l.hovering && !P && l.el.on(C, l.mouseLeave),
                    l.hovering && P && M.on(b, l.mouseMoveOutside),
                    window.clearTimeout(l.delayId)
                }
            }
            function W(l, {immediate: P, forceClose: X}={}) {
                if (l.open && !(l.config.hover && l.hovering && !X)) {
                    l.toggle.attr("aria-expanded", "false"),
                    l.open = !1;
                    var w = l.config;
                    if (y.outro(0, l.el[0]),
                    M.off(x, l.mouseUpOutside),
                    M.off(b, l.mouseMoveOutside),
                    l.el.off(C, l.mouseLeave),
                    window.clearTimeout(l.delayId),
                    !w.delay || P)
                        return l.complete();
                    l.delayId = window.setTimeout(l.complete, w.delay)
                }
            }
            function O() {
                M.find(c).each(function(l, P) {
                    e(P).triggerHandler(N)
                })
            }
            function U(l) {
                var P = l.el[0];
                D.each(function(X, w) {
                    var Y = e(w);
                    Y.is(P) || Y.has(P).length || Y.triggerHandler(N)
                })
            }
            function k(l) {
                return l.mouseUpOutside && M.off(x, l.mouseUpOutside),
                r(function(P) {
                    if (l.open) {
                        var X = e(P.target);
                        if (!X.closest(".w-dropdown-toggle").length) {
                            var w = e.inArray(l.el[0], X.parents(c)) === -1
                              , Y = Yt.env("editor");
                            if (w) {
                                if (Y) {
                                    var fe = X.parents().length === 1 && X.parents("svg").length === 1
                                      , ne = X.parents(".w-editor-bem-EditorHoverControls").length;
                                    if (fe || ne)
                                        return
                                }
                                W(l)
                            }
                        }
                    }
                })
            }
            function H(l) {
                return function() {
                    l.list.removeClass(g),
                    l.toggle.removeClass(g),
                    l.manageZ && l.el.css("z-index", "")
                }
            }
            function ee(l) {
                return function() {
                    l.hovering = !0,
                    re(l)
                }
            }
            function ie(l) {
                return function() {
                    l.hovering = !1,
                    l.links.is(":focus") || W(l)
                }
            }
            function V(l) {
                return r(function(P) {
                    if (l.open) {
                        var X = e(P.target)
                          , w = e.inArray(l.el[0], X.parents(c)) === -1;
                        if (w) {
                            var Y = X.parents(".w-editor-bem-EditorHoverControls").length
                              , fe = X.parents(".w-editor-bem-RTToolbar").length
                              , ne = e(".w-editor-bem-EditorOverlay")
                              , E = ne.find(".w-editor-edit-outline").length || ne.find(".w-editor-bem-RTToolbar").length;
                            if (Y || fe || E)
                                return;
                            l.hovering = !1,
                            W(l)
                        }
                    }
                })
            }
            function K(l) {
                return function(P) {
                    if (!(a || !l.open))
                        switch (l.selectedIdx = l.links.index(document.activeElement),
                        P.keyCode) {
                        case st.HOME:
                            return l.open ? (l.selectedIdx = 0,
                            v(l),
                            P.preventDefault()) : void 0;
                        case st.END:
                            return l.open ? (l.selectedIdx = l.links.length - 1,
                            v(l),
                            P.preventDefault()) : void 0;
                        case st.ESCAPE:
                            return W(l),
                            l.toggle.focus(),
                            P.stopPropagation();
                        case st.ARROW_RIGHT:
                        case st.ARROW_DOWN:
                            return l.selectedIdx = Math.min(l.links.length - 1, l.selectedIdx + 1),
                            v(l),
                            P.preventDefault();
                        case st.ARROW_LEFT:
                        case st.ARROW_UP:
                            return l.selectedIdx = Math.max(-1, l.selectedIdx - 1),
                            v(l),
                            P.preventDefault()
                        }
                }
            }
            function v(l) {
                l.links[l.selectedIdx] && l.links[l.selectedIdx].focus()
            }
            function d(l) {
                var P = ae(l, gy);
                return function(X) {
                    if (!a) {
                        if (!l.open)
                            switch (X.keyCode) {
                            case st.ARROW_UP:
                            case st.ARROW_DOWN:
                                return X.stopPropagation()
                            }
                        switch (X.keyCode) {
                        case st.SPACE:
                        case st.ENTER:
                            return P(),
                            X.stopPropagation(),
                            X.preventDefault()
                        }
                    }
                }
            }
            function h(l) {
                return r(function(P) {
                    var {relatedTarget: X, target: w} = P
                      , Y = l.el[0]
                      , fe = Y.contains(X) || Y.contains(w);
                    return fe || W(l),
                    P.stopPropagation()
                })
            }
            return n
        }
        )
    }
    );
    var my = u(Ss => {
        "use strict";
        Object.defineProperty(Ss, "__esModule", {
            value: !0
        });
        Ss.default = UV;
        function UV(e, t, r, n, o, i, a, s, c, g, y, p, I) {
            return function(_) {
                e(_);
                var m = _.form
                  , b = {
                    name: m.attr("data-name") || m.attr("name") || "Untitled Form",
                    pageId: m.attr("data-wf-page-id") || "",
                    elementId: m.attr("data-wf-element-id") || "",
                    source: t.href,
                    test: r.env(),
                    fields: {},
                    fileUploads: {},
                    dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(m.html()),
                    trackingCookies: n()
                };
                let C = m.attr("data-wf-flow");
                C && (b.wfFlow = C),
                o(_);
                var x = i(m, b.fields);
                if (x)
                    return a(x);
                if (b.fileUploads = s(m),
                c(_),
                !g) {
                    y(_);
                    return
                }
                p.ajax({
                    url: I,
                    type: "POST",
                    data: b,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(N) {
                    N && N.code === 200 && (_.success = !0),
                    y(_)
                }).fail(function() {
                    y(_)
                })
            }
        }
    }
    );
    var Iy = u( (zK, yy) => {
        var ki = Xe();
        ki.define("forms", yy.exports = function(e, t) {
            var r = {}, n = e(document), o, i = window.location, a = window.XDomainRequest && !window.atob, s = ".w-form", c, g = /e(-)?mail/i, y = /^\S+@\S+$/, p = window.alert, I = ki.env(), _, m, b, C = /list-manage[1-9]?.com/i, x = t.debounce(function() {
                p("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);
            r.ready = r.design = r.preview = function() {
                N(),
                !I && !_ && M()
            }
            ;
            function N() {
                c = e("html").attr("data-wf-site"),
                m = "https://webflow.com/api/v1/form/" + c,
                a && m.indexOf("https://webflow.com") >= 0 && (m = m.replace("https://webflow.com", "https://formdata.webflow.com")),
                b = `${m}/signFile`,
                o = e(s + " form"),
                o.length && o.each(R)
            }
            function R(V, K) {
                var v = e(K)
                  , d = e.data(K, s);
                d || (d = e.data(K, s, {
                    form: v
                })),
                D(d);
                var h = v.closest("div.w-form");
                d.done = h.find("> .w-form-done"),
                d.fail = h.find("> .w-form-fail"),
                d.fileUploads = h.find(".w-file-upload"),
                d.fileUploads.each(function(X) {
                    H(X, d)
                });
                var l = d.form.attr("aria-label") || d.form.attr("data-name") || "Form";
                d.done.attr("aria-label") || d.form.attr("aria-label", l),
                d.done.attr("tabindex", "-1"),
                d.done.attr("role", "region"),
                d.done.attr("aria-label") || d.done.attr("aria-label", l + " success"),
                d.fail.attr("tabindex", "-1"),
                d.fail.attr("role", "region"),
                d.fail.attr("aria-label") || d.fail.attr("aria-label", l + " failure");
                var P = d.action = v.attr("action");
                if (d.handler = null,
                d.redirect = v.attr("data-redirect"),
                C.test(P)) {
                    d.handler = O;
                    return
                }
                if (!P) {
                    if (c) {
                        d.handler = ( () => {
                            let X = my().default;
                            return X(D, i, ki, ae, k, j, p, $, F, c, U, e, m)
                        }
                        )();
                        return
                    }
                    x()
                }
            }
            function M() {
                _ = !0,
                n.on("submit", s + " form", function(X) {
                    var w = e.data(this, s);
                    w.handler && (w.evt = X,
                    w.handler(w))
                });
                let V = ".w-checkbox-input"
                  , K = ".w-radio-input"
                  , v = "w--redirected-checked"
                  , d = "w--redirected-focus"
                  , h = "w--redirected-focus-visible"
                  , l = ":focus-visible, [data-wf-focus-visible]"
                  , P = [["checkbox", V], ["radio", K]];
                n.on("change", s + ' form input[type="checkbox"]:not(' + V + ")", X => {
                    e(X.target).siblings(V).toggleClass(v)
                }
                ),
                n.on("change", s + ' form input[type="radio"]', X => {
                    e(`input[name="${X.target.name}"]:not(${V})`).map( (Y, fe) => e(fe).siblings(K).removeClass(v));
                    let w = e(X.target);
                    w.hasClass("w-radio-input") || w.siblings(K).addClass(v)
                }
                ),
                P.forEach( ([X,w]) => {
                    n.on("focus", s + ` form input[type="${X}"]:not(` + w + ")", Y => {
                        e(Y.target).siblings(w).addClass(d),
                        e(Y.target).filter(l).siblings(w).addClass(h)
                    }
                    ),
                    n.on("blur", s + ` form input[type="${X}"]:not(` + w + ")", Y => {
                        e(Y.target).siblings(w).removeClass(`${d} ${h}`)
                    }
                    )
                }
                )
            }
            function D(V) {
                var K = V.btn = V.form.find(':input[type="submit"]');
                V.wait = V.btn.attr("data-wait") || null,
                V.success = !1,
                K.prop("disabled", !1),
                V.label && K.val(V.label)
            }
            function F(V) {
                var K = V.btn
                  , v = V.wait;
                K.prop("disabled", !0),
                v && (V.label = K.val(),
                K.val(v))
            }
            function j(V, K) {
                var v = null;
                return K = K || {},
                V.find(':input:not([type="submit"]):not([type="file"])').each(function(d, h) {
                    var l = e(h)
                      , P = l.attr("type")
                      , X = l.attr("data-name") || l.attr("name") || "Field " + (d + 1)
                      , w = l.val();
                    if (P === "checkbox")
                        w = l.is(":checked");
                    else if (P === "radio") {
                        if (K[X] === null || typeof K[X] == "string")
                            return;
                        w = V.find('input[name="' + l.attr("name") + '"]:checked').val() || null
                    }
                    typeof w == "string" && (w = e.trim(w)),
                    K[X] = w,
                    v = v || re(l, P, X, w)
                }),
                v
            }
            function $(V) {
                var K = {};
                return V.find(':input[type="file"]').each(function(v, d) {
                    var h = e(d)
                      , l = h.attr("data-name") || h.attr("name") || "File " + (v + 1)
                      , P = h.attr("data-value");
                    typeof P == "string" && (P = e.trim(P)),
                    K[l] = P
                }),
                K
            }
            let J = {
                _mkto_trk: "marketo"
            };
            function ae() {
                return document.cookie.split("; ").reduce(function(K, v) {
                    let d = v.split("=")
                      , h = d[0];
                    if (h in J) {
                        let l = J[h]
                          , P = d.slice(1).join("=");
                        K[l] = P
                    }
                    return K
                }, {})
            }
            function re(V, K, v, d) {
                var h = null;
                return K === "password" ? h = "Passwords cannot be submitted." : V.attr("required") ? d ? g.test(V.attr("type")) && (y.test(d) || (h = "Please enter a valid email address for: " + v)) : h = "Please fill out the required field: " + v : v === "g-recaptcha-response" && !d && (h = "Please confirm you\u2019re not a robot."),
                h
            }
            function W(V) {
                k(V),
                U(V)
            }
            function O(V) {
                D(V);
                var K = V.form
                  , v = {};
                if (/^https/.test(i.href) && !/^https/.test(V.action)) {
                    K.attr("method", "post");
                    return
                }
                k(V);
                var d = j(K, v);
                if (d)
                    return p(d);
                F(V);
                var h;
                t.each(v, function(w, Y) {
                    g.test(Y) && (v.EMAIL = w),
                    /^((full[ _-]?)?name)$/i.test(Y) && (h = w),
                    /^(first[ _-]?name)$/i.test(Y) && (v.FNAME = w),
                    /^(last[ _-]?name)$/i.test(Y) && (v.LNAME = w)
                }),
                h && !v.FNAME && (h = h.split(" "),
                v.FNAME = h[0],
                v.LNAME = v.LNAME || h[1]);
                var l = V.action.replace("/post?", "/post-json?") + "&c=?"
                  , P = l.indexOf("u=") + 2;
                P = l.substring(P, l.indexOf("&", P));
                var X = l.indexOf("id=") + 3;
                X = l.substring(X, l.indexOf("&", X)),
                v["b_" + P + "_" + X] = "",
                e.ajax({
                    url: l,
                    data: v,
                    dataType: "jsonp"
                }).done(function(w) {
                    V.success = w.result === "success" || /already/.test(w.msg),
                    V.success || console.info("MailChimp error: " + w.msg),
                    U(V)
                }).fail(function() {
                    U(V)
                })
            }
            function U(V) {
                var K = V.form
                  , v = V.redirect
                  , d = V.success;
                if (d && v) {
                    ki.location(v);
                    return
                }
                V.done.toggle(d),
                V.fail.toggle(!d),
                d ? V.done.focus() : V.fail.focus(),
                K.toggle(!d),
                D(V)
            }
            function k(V) {
                V.evt && V.evt.preventDefault(),
                V.evt = null
            }
            function H(V, K) {
                if (!K.fileUploads || !K.fileUploads[V])
                    return;
                var v, d = e(K.fileUploads[V]), h = d.find("> .w-file-upload-default"), l = d.find("> .w-file-upload-uploading"), P = d.find("> .w-file-upload-success"), X = d.find("> .w-file-upload-error"), w = h.find(".w-file-upload-input"), Y = h.find(".w-file-upload-label"), fe = Y.children(), ne = X.find(".w-file-upload-error-msg"), E = P.find(".w-file-upload-file"), B = P.find(".w-file-remove-link"), Z = E.find(".w-file-upload-file-name"), z = ne.attr("data-w-size-error"), ve = ne.attr("data-w-type-error"), xe = ne.attr("data-w-generic-error");
                if (I || Y.on("click keydown", function(S) {
                    S.type === "keydown" && S.which !== 13 && S.which !== 32 || (S.preventDefault(),
                    w.click())
                }),
                Y.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
                B.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
                I)
                    w.on("click", function(S) {
                        S.preventDefault()
                    }),
                    Y.on("click", function(S) {
                        S.preventDefault()
                    }),
                    fe.on("click", function(S) {
                        S.preventDefault()
                    });
                else {
                    B.on("click keydown", function(S) {
                        if (S.type === "keydown") {
                            if (S.which !== 13 && S.which !== 32)
                                return;
                            S.preventDefault()
                        }
                        w.removeAttr("data-value"),
                        w.val(""),
                        Z.html(""),
                        h.toggle(!0),
                        P.toggle(!1),
                        Y.focus()
                    }),
                    w.on("change", function(S) {
                        v = S.target && S.target.files && S.target.files[0],
                        v && (h.toggle(!1),
                        X.toggle(!1),
                        l.toggle(!0),
                        l.focus(),
                        Z.text(v.name),
                        L() || F(K),
                        K.fileUploads[V].uploading = !0,
                        ee(v, T))
                    });
                    var Fe = Y.outerHeight();
                    w.height(Fe),
                    w.width(1)
                }
                function f(S) {
                    var q = S.responseJSON && S.responseJSON.msg
                      , te = xe;
                    typeof q == "string" && q.indexOf("InvalidFileTypeError") === 0 ? te = ve : typeof q == "string" && q.indexOf("MaxFileSizeError") === 0 && (te = z),
                    ne.text(te),
                    w.removeAttr("data-value"),
                    w.val(""),
                    l.toggle(!1),
                    h.toggle(!0),
                    X.toggle(!0),
                    X.focus(),
                    K.fileUploads[V].uploading = !1,
                    L() || D(K)
                }
                function T(S, q) {
                    if (S)
                        return f(S);
                    var te = q.fileName
                      , se = q.postData
                      , me = q.fileId
                      , Q = q.s3Url;
                    w.attr("data-value", me),
                    ie(Q, se, v, te, A)
                }
                function A(S) {
                    if (S)
                        return f(S);
                    l.toggle(!1),
                    P.css("display", "inline-block"),
                    P.focus(),
                    K.fileUploads[V].uploading = !1,
                    L() || D(K)
                }
                function L() {
                    var S = K.fileUploads && K.fileUploads.toArray() || [];
                    return S.some(function(q) {
                        return q.uploading
                    })
                }
            }
            function ee(V, K) {
                var v = new URLSearchParams({
                    name: V.name,
                    size: V.size
                });
                e.ajax({
                    type: "GET",
                    url: `${b}?${v}`,
                    crossDomain: !0
                }).done(function(d) {
                    K(null, d)
                }).fail(function(d) {
                    K(d)
                })
            }
            function ie(V, K, v, d, h) {
                var l = new FormData;
                for (var P in K)
                    l.append(P, K[P]);
                l.append("file", v, d),
                e.ajax({
                    type: "POST",
                    url: V,
                    data: l,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    h(null)
                }).fail(function(X) {
                    h(X)
                })
            }
            return r
        }
        )
    }
    );
    var by = u( (YK, Oy) => {
        var As = Xe()
          , Ty = "w-condition-invisible"
          , XV = "." + Ty;
        function WV(e) {
            return e.filter(function(t) {
                return !dn(t)
            })
        }
        function dn(e) {
            return !!(e.$el && e.$el.closest(XV).length)
        }
        function Rs(e, t) {
            for (var r = e; r >= 0; r--)
                if (!dn(t[r]))
                    return r;
            return -1
        }
        function xs(e, t) {
            for (var r = e; r <= t.length - 1; r++)
                if (!dn(t[r]))
                    return r;
            return -1
        }
        function VV(e, t) {
            return Rs(e - 1, t) === -1
        }
        function kV(e, t) {
            return xs(e + 1, t) === -1
        }
        function fn(e, t) {
            e.attr("aria-label") || e.attr("aria-label", t)
        }
        function HV(e, t, r, n) {
            var o = r.tram, i = Array.isArray, a = "w-lightbox", s = a + "-", c = /(^|\s+)/g, g = [], y, p, I, _ = [];
            function m(d, h) {
                return g = i(d) ? d : [d],
                p || m.build(),
                WV(g).length > 1 && (p.items = p.empty,
                g.forEach(function(l, P) {
                    var X = K("thumbnail")
                      , w = K("item").prop("tabIndex", 0).attr("aria-controls", "w-lightbox-view").attr("role", "tab").append(X);
                    fn(w, `show item ${P + 1} of ${g.length}`),
                    dn(l) && w.addClass(Ty),
                    p.items = p.items.add(w),
                    ae(l.thumbnailUrl || l.url, function(Y) {
                        Y.prop("width") > Y.prop("height") ? H(Y, "wide") : H(Y, "tall"),
                        X.append(H(Y, "thumbnail-image"))
                    })
                }),
                p.strip.empty().append(p.items),
                H(p.content, "group")),
                o(ee(p.lightbox, "hide").trigger("focus")).add("opacity .3s").start({
                    opacity: 1
                }),
                H(p.html, "noscroll"),
                m.show(h || 0)
            }
            m.build = function() {
                return m.destroy(),
                p = {
                    html: r(t.documentElement),
                    empty: r()
                },
                p.arrowLeft = K("control left inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"),
                p.arrowRight = K("control right inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"),
                p.close = K("control close").attr("role", "button"),
                fn(p.arrowLeft, "previous image"),
                fn(p.arrowRight, "next image"),
                fn(p.close, "close lightbox"),
                p.spinner = K("spinner").attr("role", "progressbar").attr("aria-live", "polite").attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuemin", 0).attr("aria-valuemax", 100).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"),
                p.strip = K("strip").attr("role", "tablist"),
                I = new O(p.spinner,U("hide")),
                p.content = K("content").append(p.spinner, p.arrowLeft, p.arrowRight, p.close),
                p.container = K("container").append(p.content, p.strip),
                p.lightbox = K("backdrop hide").append(p.container),
                p.strip.on("click", k("item"), R),
                p.content.on("swipe", M).on("click", k("left"), C).on("click", k("right"), x).on("click", k("close"), N).on("click", k("image, caption"), x),
                p.container.on("click", k("view"), N).on("dragstart", k("img"), F),
                p.lightbox.on("keydown", j).on("focusin", D),
                r(n).append(p.lightbox),
                m
            }
            ,
            m.destroy = function() {
                p && (ee(p.html, "noscroll"),
                p.lightbox.remove(),
                p = void 0)
            }
            ,
            m.show = function(d) {
                if (d !== y) {
                    var h = g[d];
                    if (!h)
                        return m.hide();
                    if (dn(h)) {
                        if (d < y) {
                            var l = Rs(d - 1, g);
                            d = l > -1 ? l : d
                        } else {
                            var P = xs(d + 1, g);
                            d = P > -1 ? P : d
                        }
                        h = g[d]
                    }
                    var X = y;
                    y = d,
                    p.spinner.attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"),
                    I.show();
                    var w = h.html && v(h.width, h.height) || h.url;
                    return ae(w, function(Y) {
                        if (d !== y)
                            return;
                        var fe = K("figure", "figure").append(H(Y, "image")), ne = K("frame").append(fe), E = K("view").prop("tabIndex", 0).attr("id", "w-lightbox-view").append(ne), B, Z;
                        h.html && (B = r(h.html),
                        Z = B.is("iframe"),
                        Z && B.on("load", z),
                        fe.append(H(B, "embed"))),
                        h.caption && fe.append(K("caption", "figcaption").text(h.caption)),
                        p.spinner.before(E),
                        Z || z();
                        function z() {
                            if (p.spinner.attr("aria-hidden", !0).attr("aria-busy", !1).attr("aria-valuenow", 100).attr("aria-valuetext", "Loaded image"),
                            I.hide(),
                            d !== y) {
                                E.remove();
                                return
                            }
                            let ve = VV(d, g);
                            ie(p.arrowLeft, "inactive", ve),
                            V(p.arrowLeft, ve),
                            ve && p.arrowLeft.is(":focus") && p.arrowRight.focus();
                            let xe = kV(d, g);
                            if (ie(p.arrowRight, "inactive", xe),
                            V(p.arrowRight, xe),
                            xe && p.arrowRight.is(":focus") && p.arrowLeft.focus(),
                            p.view ? (o(p.view).add("opacity .3s").start({
                                opacity: 0
                            }).then(re(p.view)),
                            o(E).add("opacity .3s").add("transform .3s").set({
                                x: d > X ? "80px" : "-80px"
                            }).start({
                                opacity: 1,
                                x: 0
                            })) : E.css("opacity", 1),
                            p.view = E,
                            p.view.prop("tabIndex", 0),
                            p.items) {
                                ee(p.items, "active"),
                                p.items.removeAttr("aria-selected");
                                var Fe = p.items.eq(d);
                                H(Fe, "active"),
                                Fe.attr("aria-selected", !0),
                                W(Fe)
                            }
                        }
                    }),
                    p.close.prop("tabIndex", 0),
                    r(":focus").addClass("active-lightbox"),
                    _.length === 0 && (r("body").children().each(function() {
                        r(this).hasClass("w-lightbox-backdrop") || r(this).is("script") || (_.push({
                            node: r(this),
                            hidden: r(this).attr("aria-hidden"),
                            tabIndex: r(this).attr("tabIndex")
                        }),
                        r(this).attr("aria-hidden", !0).attr("tabIndex", -1))
                    }),
                    p.close.focus()),
                    m
                }
            }
            ,
            m.hide = function() {
                return o(p.lightbox).add("opacity .3s").start({
                    opacity: 0
                }).then(J),
                m
            }
            ,
            m.prev = function() {
                var d = Rs(y - 1, g);
                d > -1 && m.show(d)
            }
            ,
            m.next = function() {
                var d = xs(y + 1, g);
                d > -1 && m.show(d)
            }
            ;
            function b(d) {
                return function(h) {
                    this === h.target && (h.stopPropagation(),
                    h.preventDefault(),
                    d())
                }
            }
            var C = b(m.prev)
              , x = b(m.next)
              , N = b(m.hide)
              , R = function(d) {
                var h = r(this).index();
                d.preventDefault(),
                m.show(h)
            }
              , M = function(d, h) {
                d.preventDefault(),
                h.direction === "left" ? m.next() : h.direction === "right" && m.prev()
            }
              , D = function() {
                this.focus()
            };
            function F(d) {
                d.preventDefault()
            }
            function j(d) {
                var h = d.keyCode;
                h === 27 || $(h, "close") ? m.hide() : h === 37 || $(h, "left") ? m.prev() : h === 39 || $(h, "right") ? m.next() : $(h, "item") && r(":focus").click()
            }
            function $(d, h) {
                if (d !== 13 && d !== 32)
                    return !1;
                var l = r(":focus").attr("class")
                  , P = U(h).trim();
                return l.includes(P)
            }
            function J() {
                p && (p.strip.scrollLeft(0).empty(),
                ee(p.html, "noscroll"),
                H(p.lightbox, "hide"),
                p.view && p.view.remove(),
                ee(p.content, "group"),
                H(p.arrowLeft, "inactive"),
                H(p.arrowRight, "inactive"),
                y = p.view = void 0,
                _.forEach(function(d) {
                    var h = d.node;
                    h && (d.hidden ? h.attr("aria-hidden", d.hidden) : h.removeAttr("aria-hidden"),
                    d.tabIndex ? h.attr("tabIndex", d.tabIndex) : h.removeAttr("tabIndex"))
                }),
                _ = [],
                r(".active-lightbox").removeClass("active-lightbox").focus())
            }
            function ae(d, h) {
                var l = K("img", "img");
                return l.one("load", function() {
                    h(l)
                }),
                l.attr("src", d),
                l
            }
            function re(d) {
                return function() {
                    d.remove()
                }
            }
            function W(d) {
                var h = d.get(0), l = p.strip.get(0), P = h.offsetLeft, X = h.clientWidth, w = l.scrollLeft, Y = l.clientWidth, fe = l.scrollWidth - Y, ne;
                P < w ? ne = Math.max(0, P + X - Y) : P + X > Y + w && (ne = Math.min(P, fe)),
                ne != null && o(p.strip).add("scroll-left 500ms").start({
                    "scroll-left": ne
                })
            }
            function O(d, h, l) {
                this.$element = d,
                this.className = h,
                this.delay = l || 200,
                this.hide()
            }
            O.prototype.show = function() {
                var d = this;
                d.timeoutId || (d.timeoutId = setTimeout(function() {
                    d.$element.removeClass(d.className),
                    delete d.timeoutId
                }, d.delay))
            }
            ,
            O.prototype.hide = function() {
                var d = this;
                if (d.timeoutId) {
                    clearTimeout(d.timeoutId),
                    delete d.timeoutId;
                    return
                }
                d.$element.addClass(d.className)
            }
            ;
            function U(d, h) {
                return d.replace(c, (h ? " ." : " ") + s)
            }
            function k(d) {
                return U(d, !0)
            }
            function H(d, h) {
                return d.addClass(U(h))
            }
            function ee(d, h) {
                return d.removeClass(U(h))
            }
            function ie(d, h, l) {
                return d.toggleClass(U(h), l)
            }
            function V(d, h) {
                return d.attr("aria-hidden", h).attr("tabIndex", h ? -1 : 0)
            }
            function K(d, h) {
                return H(r(t.createElement(h || "div")), d)
            }
            function v(d, h) {
                var l = '<svg xmlns="http://www.w3.org/2000/svg" width="' + d + '" height="' + h + '"/>';
                return "data:image/svg+xml;charset=utf-8," + encodeURI(l)
            }
            return function() {
                var d = e.navigator.userAgent
                  , h = /(iPhone|iPad|iPod);[^OS]*OS (\d)/
                  , l = d.match(h)
                  , P = d.indexOf("Android ") > -1 && d.indexOf("Chrome") === -1;
                if (!P && (!l || l[2] > 7))
                    return;
                var X = t.createElement("style");
                t.head.appendChild(X),
                e.addEventListener("resize", w, !0);
                function w() {
                    var Y = e.innerHeight
                      , fe = e.innerWidth
                      , ne = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + Y + "px}.w-lightbox-view {width:" + fe + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * Y + "px}.w-lightbox-image {max-width:" + fe + "px;max-height:" + Y + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * Y + "px}.w-lightbox-strip {padding: 0 " + .01 * Y + "px}.w-lightbox-item {width:" + .1 * Y + "px;padding:" + .02 * Y + "px " + .01 * Y + "px}.w-lightbox-thumbnail {height:" + .1 * Y + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * Y + "px}.w-lightbox-content {margin-top:" + .02 * Y + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * Y + "px}.w-lightbox-image {max-width:" + .96 * fe + "px;max-height:" + .96 * Y + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * fe + "px;max-height:" + .84 * Y + "px}}";
                    X.textContent = ne
                }
                w()
            }(),
            m
        }
        As.define("lightbox", Oy.exports = function(e) {
            var t = {}, r = As.env(), n = HV(window, document, e, r ? "#lightbox-mountpoint" : "body"), o = e(document), i, a, s = ".w-lightbox", c;
            t.ready = t.design = t.preview = g;
            function g() {
                a = r && As.env("design"),
                n.destroy(),
                c = {},
                i = o.find(s),
                i.webflowLightBox(),
                i.each(function() {
                    fn(e(this), "open lightbox"),
                    e(this).attr("aria-haspopup", "dialog")
                })
            }
            jQuery.fn.extend({
                webflowLightBox: function() {
                    var _ = this;
                    e.each(_, function(m, b) {
                        var C = e.data(b, s);
                        C || (C = e.data(b, s, {
                            el: e(b),
                            mode: "images",
                            images: [],
                            embed: ""
                        })),
                        C.el.off(s),
                        y(C),
                        a ? C.el.on("setting" + s, y.bind(null, C)) : C.el.on("click" + s, p(C)).on("click" + s, function(x) {
                            x.preventDefault()
                        })
                    })
                }
            });
            function y(_) {
                var m = _.el.children(".w-json").html(), b, C;
                if (!m) {
                    _.items = [];
                    return
                }
                try {
                    m = JSON.parse(m)
                } catch (x) {
                    console.error("Malformed lightbox JSON configuration.", x)
                }
                I(m),
                m.items.forEach(function(x) {
                    x.$el = _.el
                }),
                b = m.group,
                b ? (C = c[b],
                C || (C = c[b] = []),
                _.items = C,
                m.items.length && (_.index = C.length,
                C.push.apply(C, m.items))) : (_.items = m.items,
                _.index = 0)
            }
            function p(_) {
                return function() {
                    _.items.length && n(_.items, _.index || 0)
                }
            }
            function I(_) {
                _.images && (_.images.forEach(function(m) {
                    m.type = "image"
                }),
                _.items = _.images),
                _.embed && (_.embed.type = "video",
                _.items = [_.embed]),
                _.groupId && (_.group = _.groupId)
            }
            return t
        }
        )
    }
    );
    var Sy = u( (QK, wy) => {
        var qt = Xe()
          , BV = Rr()
          , Me = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            ESCAPE: 27,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        };
        qt.define("navbar", wy.exports = function(e, t) {
            var r = {}, n = e.tram, o = e(window), i = e(document), a = t.debounce, s, c, g, y, p = qt.env(), I = '<div class="w-nav-overlay" data-wf-ignore />', _ = ".w-nav", m = "w--open", b = "w--nav-dropdown-open", C = "w--nav-dropdown-toggle-open", x = "w--nav-dropdown-list-open", N = "w--nav-link-open", R = BV.triggers, M = e();
            r.ready = r.design = r.preview = D,
            r.destroy = function() {
                M = e(),
                F(),
                c && c.length && c.each(ae)
            }
            ;
            function D() {
                g = p && qt.env("design"),
                y = qt.env("editor"),
                s = e(document.body),
                c = i.find(_),
                c.length && (c.each(J),
                F(),
                j())
            }
            function F() {
                qt.resize.off($)
            }
            function j() {
                qt.resize.on($)
            }
            function $() {
                c.each(h)
            }
            function J(E, B) {
                var Z = e(B)
                  , z = e.data(B, _);
                z || (z = e.data(B, _, {
                    open: !1,
                    el: Z,
                    config: {},
                    selectedIdx: -1
                })),
                z.menu = Z.find(".w-nav-menu"),
                z.links = z.menu.find(".w-nav-link"),
                z.dropdowns = z.menu.find(".w-dropdown"),
                z.dropdownToggle = z.menu.find(".w-dropdown-toggle"),
                z.dropdownList = z.menu.find(".w-dropdown-list"),
                z.button = Z.find(".w-nav-button"),
                z.container = Z.find(".w-container"),
                z.overlayContainerId = "w-nav-overlay-" + E,
                z.outside = v(z);
                var ve = Z.find(".w-nav-brand");
                ve && ve.attr("href") === "/" && ve.attr("aria-label") == null && ve.attr("aria-label", "home"),
                z.button.attr("style", "-webkit-user-select: text;"),
                z.button.attr("aria-label") == null && z.button.attr("aria-label", "menu"),
                z.button.attr("role", "button"),
                z.button.attr("tabindex", "0"),
                z.button.attr("aria-controls", z.overlayContainerId),
                z.button.attr("aria-haspopup", "menu"),
                z.button.attr("aria-expanded", "false"),
                z.el.off(_),
                z.button.off(_),
                z.menu.off(_),
                O(z),
                g ? (re(z),
                z.el.on("setting" + _, U(z))) : (W(z),
                z.button.on("click" + _, V(z)),
                z.menu.on("click" + _, "a", K(z)),
                z.button.on("keydown" + _, k(z)),
                z.el.on("keydown" + _, H(z))),
                h(E, B)
            }
            function ae(E, B) {
                var Z = e.data(B, _);
                Z && (re(Z),
                e.removeData(B, _))
            }
            function re(E) {
                E.overlay && (ne(E, !0),
                E.overlay.remove(),
                E.overlay = null)
            }
            function W(E) {
                E.overlay || (E.overlay = e(I).appendTo(E.el),
                E.overlay.attr("id", E.overlayContainerId),
                E.parent = E.menu.parent(),
                ne(E, !0))
            }
            function O(E) {
                var B = {}
                  , Z = E.config || {}
                  , z = B.animation = E.el.attr("data-animation") || "default";
                B.animOver = /^over/.test(z),
                B.animDirect = /left$/.test(z) ? -1 : 1,
                Z.animation !== z && E.open && t.defer(ie, E),
                B.easing = E.el.attr("data-easing") || "ease",
                B.easing2 = E.el.attr("data-easing2") || "ease";
                var ve = E.el.attr("data-duration");
                B.duration = ve != null ? Number(ve) : 400,
                B.docHeight = E.el.attr("data-doc-height"),
                E.config = B
            }
            function U(E) {
                return function(B, Z) {
                    Z = Z || {};
                    var z = o.width();
                    O(E),
                    Z.open === !0 && Y(E, !0),
                    Z.open === !1 && ne(E, !0),
                    E.open && t.defer(function() {
                        z !== o.width() && ie(E)
                    })
                }
            }
            function k(E) {
                return function(B) {
                    switch (B.keyCode) {
                    case Me.SPACE:
                    case Me.ENTER:
                        return V(E)(),
                        B.preventDefault(),
                        B.stopPropagation();
                    case Me.ESCAPE:
                        return ne(E),
                        B.preventDefault(),
                        B.stopPropagation();
                    case Me.ARROW_RIGHT:
                    case Me.ARROW_DOWN:
                    case Me.HOME:
                    case Me.END:
                        return E.open ? (B.keyCode === Me.END ? E.selectedIdx = E.links.length - 1 : E.selectedIdx = 0,
                        ee(E),
                        B.preventDefault(),
                        B.stopPropagation()) : (B.preventDefault(),
                        B.stopPropagation())
                    }
                }
            }
            function H(E) {
                return function(B) {
                    if (E.open)
                        switch (E.selectedIdx = E.links.index(document.activeElement),
                        B.keyCode) {
                        case Me.HOME:
                        case Me.END:
                            return B.keyCode === Me.END ? E.selectedIdx = E.links.length - 1 : E.selectedIdx = 0,
                            ee(E),
                            B.preventDefault(),
                            B.stopPropagation();
                        case Me.ESCAPE:
                            return ne(E),
                            E.button.focus(),
                            B.preventDefault(),
                            B.stopPropagation();
                        case Me.ARROW_LEFT:
                        case Me.ARROW_UP:
                            return E.selectedIdx = Math.max(-1, E.selectedIdx - 1),
                            ee(E),
                            B.preventDefault(),
                            B.stopPropagation();
                        case Me.ARROW_RIGHT:
                        case Me.ARROW_DOWN:
                            return E.selectedIdx = Math.min(E.links.length - 1, E.selectedIdx + 1),
                            ee(E),
                            B.preventDefault(),
                            B.stopPropagation()
                        }
                }
            }
            function ee(E) {
                if (E.links[E.selectedIdx]) {
                    var B = E.links[E.selectedIdx];
                    B.focus(),
                    K(B)
                }
            }
            function ie(E) {
                E.open && (ne(E, !0),
                Y(E, !0))
            }
            function V(E) {
                return a(function() {
                    E.open ? ne(E) : Y(E)
                })
            }
            function K(E) {
                return function(B) {
                    var Z = e(this)
                      , z = Z.attr("href");
                    if (!qt.validClick(B.currentTarget)) {
                        B.preventDefault();
                        return
                    }
                    z && z.indexOf("#") === 0 && E.open && ne(E)
                }
            }
            function v(E) {
                return E.outside && i.off("click" + _, E.outside),
                function(B) {
                    var Z = e(B.target);
                    y && Z.closest(".w-editor-bem-EditorOverlay").length || d(E, Z)
                }
            }
            var d = a(function(E, B) {
                if (E.open) {
                    var Z = B.closest(".w-nav-menu");
                    E.menu.is(Z) || ne(E)
                }
            });
            function h(E, B) {
                var Z = e.data(B, _)
                  , z = Z.collapsed = Z.button.css("display") !== "none";
                if (Z.open && !z && !g && ne(Z, !0),
                Z.container.length) {
                    var ve = P(Z);
                    Z.links.each(ve),
                    Z.dropdowns.each(ve)
                }
                Z.open && fe(Z)
            }
            var l = "max-width";
            function P(E) {
                var B = E.container.css(l);
                return B === "none" && (B = ""),
                function(Z, z) {
                    z = e(z),
                    z.css(l, ""),
                    z.css(l) === "none" && z.css(l, B)
                }
            }
            function X(E, B) {
                B.setAttribute("data-nav-menu-open", "")
            }
            function w(E, B) {
                B.removeAttribute("data-nav-menu-open")
            }
            function Y(E, B) {
                if (E.open)
                    return;
                E.open = !0,
                E.menu.each(X),
                E.links.addClass(N),
                E.dropdowns.addClass(b),
                E.dropdownToggle.addClass(C),
                E.dropdownList.addClass(x),
                E.button.addClass(m);
                var Z = E.config
                  , z = Z.animation;
                (z === "none" || !n.support.transform || Z.duration <= 0) && (B = !0);
                var ve = fe(E)
                  , xe = E.menu.outerHeight(!0)
                  , Fe = E.menu.outerWidth(!0)
                  , f = E.el.height()
                  , T = E.el[0];
                if (h(0, T),
                R.intro(0, T),
                qt.redraw.up(),
                g || i.on("click" + _, E.outside),
                B) {
                    S();
                    return
                }
                var A = "transform " + Z.duration + "ms " + Z.easing;
                if (E.overlay && (M = E.menu.prev(),
                E.overlay.show().append(E.menu)),
                Z.animOver) {
                    n(E.menu).add(A).set({
                        x: Z.animDirect * Fe,
                        height: ve
                    }).start({
                        x: 0
                    }).then(S),
                    E.overlay && E.overlay.width(Fe);
                    return
                }
                var L = f + xe;
                n(E.menu).add(A).set({
                    y: -L
                }).start({
                    y: 0
                }).then(S);
                function S() {
                    E.button.attr("aria-expanded", "true")
                }
            }
            function fe(E) {
                var B = E.config
                  , Z = B.docHeight ? i.height() : s.height();
                return B.animOver ? E.menu.height(Z) : E.el.css("position") !== "fixed" && (Z -= E.el.outerHeight(!0)),
                E.overlay && E.overlay.height(Z),
                Z
            }
            function ne(E, B) {
                if (!E.open)
                    return;
                E.open = !1,
                E.button.removeClass(m);
                var Z = E.config;
                if ((Z.animation === "none" || !n.support.transform || Z.duration <= 0) && (B = !0),
                R.outro(0, E.el[0]),
                i.off("click" + _, E.outside),
                B) {
                    n(E.menu).stop(),
                    T();
                    return
                }
                var z = "transform " + Z.duration + "ms " + Z.easing2
                  , ve = E.menu.outerHeight(!0)
                  , xe = E.menu.outerWidth(!0)
                  , Fe = E.el.height();
                if (Z.animOver) {
                    n(E.menu).add(z).start({
                        x: xe * Z.animDirect
                    }).then(T);
                    return
                }
                var f = Fe + ve;
                n(E.menu).add(z).start({
                    y: -f
                }).then(T);
                function T() {
                    E.menu.height(""),
                    n(E.menu).set({
                        x: 0,
                        y: 0
                    }),
                    E.menu.each(w),
                    E.links.removeClass(N),
                    E.dropdowns.removeClass(b),
                    E.dropdownToggle.removeClass(C),
                    E.dropdownList.removeClass(x),
                    E.overlay && E.overlay.children().length && (M.length ? E.menu.insertAfter(M) : E.menu.prependTo(E.parent),
                    E.overlay.attr("style", "").hide()),
                    E.el.triggerHandler("w-close"),
                    E.button.attr("aria-expanded", "false")
                }
            }
            return r
        }
        )
    }
    );
    var xy = u( ($K, Ry) => {
        var Dt = Xe()
          , jV = Rr()
          , _t = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        }
          , Ay = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        Dt.define("slider", Ry.exports = function(e, t) {
            var r = {}, n = e.tram, o = e(document), i, a, s = Dt.env(), c = ".w-slider", g = '<div class="w-slider-dot" data-wf-ignore />', y = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />', p = "w-slider-force-show", I = jV.triggers, _, m = !1;
            r.ready = function() {
                a = Dt.env("design"),
                b()
            }
            ,
            r.design = function() {
                a = !0,
                setTimeout(b, 1e3)
            }
            ,
            r.preview = function() {
                a = !1,
                b()
            }
            ,
            r.redraw = function() {
                m = !0,
                b(),
                m = !1
            }
            ,
            r.destroy = C;
            function b() {
                i = o.find(c),
                i.length && (i.each(R),
                !_ && (C(),
                x()))
            }
            function C() {
                Dt.resize.off(N),
                Dt.redraw.off(r.redraw)
            }
            function x() {
                Dt.resize.on(N),
                Dt.redraw.on(r.redraw)
            }
            function N() {
                i.filter(":visible").each(H)
            }
            function R(v, d) {
                var h = e(d)
                  , l = e.data(d, c);
                l || (l = e.data(d, c, {
                    index: 0,
                    depth: 1,
                    hasFocus: {
                        keyboard: !1,
                        mouse: !1
                    },
                    el: h,
                    config: {}
                })),
                l.mask = h.children(".w-slider-mask"),
                l.left = h.children(".w-slider-arrow-left"),
                l.right = h.children(".w-slider-arrow-right"),
                l.nav = h.children(".w-slider-nav"),
                l.slides = l.mask.children(".w-slide"),
                l.slides.each(I.reset),
                m && (l.maskWidth = 0),
                h.attr("role") === void 0 && h.attr("role", "region"),
                h.attr("aria-label") === void 0 && h.attr("aria-label", "carousel");
                var P = l.mask.attr("id");
                if (P || (P = "w-slider-mask-" + v,
                l.mask.attr("id", P)),
                !a && !l.ariaLiveLabel && (l.ariaLiveLabel = e(y).appendTo(l.mask)),
                l.left.attr("role", "button"),
                l.left.attr("tabindex", "0"),
                l.left.attr("aria-controls", P),
                l.left.attr("aria-label") === void 0 && l.left.attr("aria-label", "previous slide"),
                l.right.attr("role", "button"),
                l.right.attr("tabindex", "0"),
                l.right.attr("aria-controls", P),
                l.right.attr("aria-label") === void 0 && l.right.attr("aria-label", "next slide"),
                !n.support.transform) {
                    l.left.hide(),
                    l.right.hide(),
                    l.nav.hide(),
                    _ = !0;
                    return
                }
                l.el.off(c),
                l.left.off(c),
                l.right.off(c),
                l.nav.off(c),
                M(l),
                a ? (l.el.on("setting" + c, O(l)),
                W(l),
                l.hasTimer = !1) : (l.el.on("swipe" + c, O(l)),
                l.left.on("click" + c, $(l)),
                l.right.on("click" + c, J(l)),
                l.left.on("keydown" + c, j(l, $)),
                l.right.on("keydown" + c, j(l, J)),
                l.nav.on("keydown" + c, "> div", O(l)),
                l.config.autoplay && !l.hasTimer && (l.hasTimer = !0,
                l.timerCount = 1,
                re(l)),
                l.el.on("mouseenter" + c, F(l, !0, "mouse")),
                l.el.on("focusin" + c, F(l, !0, "keyboard")),
                l.el.on("mouseleave" + c, F(l, !1, "mouse")),
                l.el.on("focusout" + c, F(l, !1, "keyboard"))),
                l.nav.on("click" + c, "> div", O(l)),
                s || l.mask.contents().filter(function() {
                    return this.nodeType === 3
                }).remove();
                var X = h.filter(":hidden");
                X.addClass(p);
                var w = h.parents(":hidden");
                w.addClass(p),
                m || H(v, d),
                X.removeClass(p),
                w.removeClass(p)
            }
            function M(v) {
                var d = {};
                d.crossOver = 0,
                d.animation = v.el.attr("data-animation") || "slide",
                d.animation === "outin" && (d.animation = "cross",
                d.crossOver = .5),
                d.easing = v.el.attr("data-easing") || "ease";
                var h = v.el.attr("data-duration");
                if (d.duration = h != null ? parseInt(h, 10) : 500,
                D(v.el.attr("data-infinite")) && (d.infinite = !0),
                D(v.el.attr("data-disable-swipe")) && (d.disableSwipe = !0),
                D(v.el.attr("data-hide-arrows")) ? d.hideArrows = !0 : v.config.hideArrows && (v.left.show(),
                v.right.show()),
                D(v.el.attr("data-autoplay"))) {
                    d.autoplay = !0,
                    d.delay = parseInt(v.el.attr("data-delay"), 10) || 2e3,
                    d.timerMax = parseInt(v.el.attr("data-autoplay-limit"), 10);
                    var l = "mousedown" + c + " touchstart" + c;
                    a || v.el.off(l).one(l, function() {
                        W(v)
                    })
                }
                var P = v.right.width();
                d.edge = P ? P + 40 : 100,
                v.config = d
            }
            function D(v) {
                return v === "1" || v === "true"
            }
            function F(v, d, h) {
                return function(l) {
                    if (d)
                        v.hasFocus[h] = d;
                    else if (e.contains(v.el.get(0), l.relatedTarget) || (v.hasFocus[h] = d,
                    v.hasFocus.mouse && h === "keyboard" || v.hasFocus.keyboard && h === "mouse"))
                        return;
                    d ? (v.ariaLiveLabel.attr("aria-live", "polite"),
                    v.hasTimer && W(v)) : (v.ariaLiveLabel.attr("aria-live", "off"),
                    v.hasTimer && re(v))
                }
            }
            function j(v, d) {
                return function(h) {
                    switch (h.keyCode) {
                    case _t.SPACE:
                    case _t.ENTER:
                        return d(v)(),
                        h.preventDefault(),
                        h.stopPropagation()
                    }
                }
            }
            function $(v) {
                return function() {
                    k(v, {
                        index: v.index - 1,
                        vector: -1
                    })
                }
            }
            function J(v) {
                return function() {
                    k(v, {
                        index: v.index + 1,
                        vector: 1
                    })
                }
            }
            function ae(v, d) {
                var h = null;
                d === v.slides.length && (b(),
                ee(v)),
                t.each(v.anchors, function(l, P) {
                    e(l.els).each(function(X, w) {
                        e(w).index() === d && (h = P)
                    })
                }),
                h != null && k(v, {
                    index: h,
                    immediate: !0
                })
            }
            function re(v) {
                W(v);
                var d = v.config
                  , h = d.timerMax;
                h && v.timerCount++ > h || (v.timerId = window.setTimeout(function() {
                    v.timerId == null || a || (J(v)(),
                    re(v))
                }, d.delay))
            }
            function W(v) {
                window.clearTimeout(v.timerId),
                v.timerId = null
            }
            function O(v) {
                return function(d, h) {
                    h = h || {};
                    var l = v.config;
                    if (a && d.type === "setting") {
                        if (h.select === "prev")
                            return $(v)();
                        if (h.select === "next")
                            return J(v)();
                        if (M(v),
                        ee(v),
                        h.select == null)
                            return;
                        ae(v, h.select);
                        return
                    }
                    if (d.type === "swipe")
                        return l.disableSwipe || Dt.env("editor") ? void 0 : h.direction === "left" ? J(v)() : h.direction === "right" ? $(v)() : void 0;
                    if (v.nav.has(d.target).length) {
                        var P = e(d.target).index();
                        if (d.type === "click" && k(v, {
                            index: P
                        }),
                        d.type === "keydown")
                            switch (d.keyCode) {
                            case _t.ENTER:
                            case _t.SPACE:
                                {
                                    k(v, {
                                        index: P
                                    }),
                                    d.preventDefault();
                                    break
                                }
                            case _t.ARROW_LEFT:
                            case _t.ARROW_UP:
                                {
                                    U(v.nav, Math.max(P - 1, 0)),
                                    d.preventDefault();
                                    break
                                }
                            case _t.ARROW_RIGHT:
                            case _t.ARROW_DOWN:
                                {
                                    U(v.nav, Math.min(P + 1, v.pages)),
                                    d.preventDefault();
                                    break
                                }
                            case _t.HOME:
                                {
                                    U(v.nav, 0),
                                    d.preventDefault();
                                    break
                                }
                            case _t.END:
                                {
                                    U(v.nav, v.pages),
                                    d.preventDefault();
                                    break
                                }
                            default:
                                return
                            }
                    }
                }
            }
            function U(v, d) {
                var h = v.children().eq(d).focus();
                v.children().not(h)
            }
            function k(v, d) {
                d = d || {};
                var h = v.config
                  , l = v.anchors;
                v.previous = v.index;
                var P = d.index
                  , X = {};
                P < 0 ? (P = l.length - 1,
                h.infinite && (X.x = -v.endX,
                X.from = 0,
                X.to = l[0].width)) : P >= l.length && (P = 0,
                h.infinite && (X.x = l[l.length - 1].width,
                X.from = -l[l.length - 1].x,
                X.to = X.from - X.x)),
                v.index = P;
                var w = v.nav.children().eq(P).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
                v.nav.children().not(w).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"),
                h.hideArrows && (v.index === l.length - 1 ? v.right.hide() : v.right.show(),
                v.index === 0 ? v.left.hide() : v.left.show());
                var Y = v.offsetX || 0
                  , fe = v.offsetX = -l[v.index].x
                  , ne = {
                    x: fe,
                    opacity: 1,
                    visibility: ""
                }
                  , E = e(l[v.index].els)
                  , B = e(l[v.previous] && l[v.previous].els)
                  , Z = v.slides.not(E)
                  , z = h.animation
                  , ve = h.easing
                  , xe = Math.round(h.duration)
                  , Fe = d.vector || (v.index > v.previous ? 1 : -1)
                  , f = "opacity " + xe + "ms " + ve
                  , T = "transform " + xe + "ms " + ve;
                if (E.find(Ay).removeAttr("tabindex"),
                E.removeAttr("aria-hidden"),
                E.find("*").removeAttr("aria-hidden"),
                Z.find(Ay).attr("tabindex", "-1"),
                Z.attr("aria-hidden", "true"),
                Z.find("*").attr("aria-hidden", "true"),
                a || (E.each(I.intro),
                Z.each(I.outro)),
                d.immediate && !m) {
                    n(E).set(ne),
                    S();
                    return
                }
                if (v.index === v.previous)
                    return;
                if (a || v.ariaLiveLabel.text(`Slide ${P + 1} of ${l.length}.`),
                z === "cross") {
                    var A = Math.round(xe - xe * h.crossOver)
                      , L = Math.round(xe - A);
                    f = "opacity " + A + "ms " + ve,
                    n(B).set({
                        visibility: ""
                    }).add(f).start({
                        opacity: 0
                    }),
                    n(E).set({
                        visibility: "",
                        x: fe,
                        opacity: 0,
                        zIndex: v.depth++
                    }).add(f).wait(L).then({
                        opacity: 1
                    }).then(S);
                    return
                }
                if (z === "fade") {
                    n(B).set({
                        visibility: ""
                    }).stop(),
                    n(E).set({
                        visibility: "",
                        x: fe,
                        opacity: 0,
                        zIndex: v.depth++
                    }).add(f).start({
                        opacity: 1
                    }).then(S);
                    return
                }
                if (z === "over") {
                    ne = {
                        x: v.endX
                    },
                    n(B).set({
                        visibility: ""
                    }).stop(),
                    n(E).set({
                        visibility: "",
                        zIndex: v.depth++,
                        x: fe + l[v.index].width * Fe
                    }).add(T).start({
                        x: fe
                    }).then(S);
                    return
                }
                h.infinite && X.x ? (n(v.slides.not(B)).set({
                    visibility: "",
                    x: X.x
                }).add(T).start({
                    x: fe
                }),
                n(B).set({
                    visibility: "",
                    x: X.from
                }).add(T).start({
                    x: X.to
                }),
                v.shifted = B) : (h.infinite && v.shifted && (n(v.shifted).set({
                    visibility: "",
                    x: Y
                }),
                v.shifted = null),
                n(v.slides).set({
                    visibility: ""
                }).add(T).start({
                    x: fe
                }));
                function S() {
                    E = e(l[v.index].els),
                    Z = v.slides.not(E),
                    z !== "slide" && (ne.visibility = "hidden"),
                    n(Z).set(ne)
                }
            }
            function H(v, d) {
                var h = e.data(d, c);
                if (h) {
                    if (V(h))
                        return ee(h);
                    a && K(h) && ee(h)
                }
            }
            function ee(v) {
                var d = 1
                  , h = 0
                  , l = 0
                  , P = 0
                  , X = v.maskWidth
                  , w = X - v.config.edge;
                w < 0 && (w = 0),
                v.anchors = [{
                    els: [],
                    x: 0,
                    width: 0
                }],
                v.slides.each(function(fe, ne) {
                    l - h > w && (d++,
                    h += X,
                    v.anchors[d - 1] = {
                        els: [],
                        x: l,
                        width: 0
                    }),
                    P = e(ne).outerWidth(!0),
                    l += P,
                    v.anchors[d - 1].width += P,
                    v.anchors[d - 1].els.push(ne);
                    var E = fe + 1 + " of " + v.slides.length;
                    e(ne).attr("aria-label", E),
                    e(ne).attr("role", "group")
                }),
                v.endX = l,
                a && (v.pages = null),
                v.nav.length && v.pages !== d && (v.pages = d,
                ie(v));
                var Y = v.index;
                Y >= d && (Y = d - 1),
                k(v, {
                    immediate: !0,
                    index: Y
                })
            }
            function ie(v) {
                var d = [], h, l = v.el.attr("data-nav-spacing");
                l && (l = parseFloat(l) + "px");
                for (var P = 0, X = v.pages; P < X; P++)
                    h = e(g),
                    h.attr("aria-label", "Show slide " + (P + 1) + " of " + X).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"),
                    v.nav.hasClass("w-num") && h.text(P + 1),
                    l != null && h.css({
                        "margin-left": l,
                        "margin-right": l
                    }),
                    d.push(h);
                v.nav.empty().append(d)
            }
            function V(v) {
                var d = v.mask.width();
                return v.maskWidth !== d ? (v.maskWidth = d,
                !0) : !1
            }
            function K(v) {
                var d = 0;
                return v.slides.each(function(h, l) {
                    d += e(l).outerWidth(!0)
                }),
                v.slidesWidth !== d ? (v.slidesWidth = d,
                !0) : !1
            }
            return r
        }
        )
    }
    );
    Vs();
    Hs();
    js();
    Ys();
    Rr();
    cy();
    fy();
    py();
    hy();
    _y();
    Iy();
    by();
    Sy();
    xy();
}
)();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e-2": {
            "id": "e-2",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2639badcbe9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2639badcbe9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1584983832676
        },
        "e-3": {
            "id": "e-3",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc244daadcbb8",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc244daadcbb8",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1584983841156
        },
        "e-4": {
            "id": "e-4",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2367fadcbab",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2367fadcbab",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1584984718196
        },
        "e-130": {
            "id": "e-130",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-131"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "112cb757-dd50-cc08-b256-c2dd9d545435",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "112cb757-dd50-cc08-b256-c2dd9d545435",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586331178405
        },
        "e-132": {
            "id": "e-132",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "112cb757-dd50-cc08-b256-c2dd9d545435",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "112cb757-dd50-cc08-b256-c2dd9d545435",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-26-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1586331545347
        },
        "e-133": {
            "id": "e-133",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-134"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2a669adcb95",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a669adcb95",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586331847201
        },
        "e-195": {
            "id": "e-195",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-196"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "d00a688c-564d-e5ce-7410-68910fa49bc6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d00a688c-564d-e5ce-7410-68910fa49bc6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586338639661
        },
        "e-196": {
            "id": "e-196",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-195"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "d00a688c-564d-e5ce-7410-68910fa49bc6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d00a688c-564d-e5ce-7410-68910fa49bc6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586338639661
        },
        "e-197": {
            "id": "e-197",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-198"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "d00a688c-564d-e5ce-7410-68910fa49bc8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d00a688c-564d-e5ce-7410-68910fa49bc8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586338639661
        },
        "e-198": {
            "id": "e-198",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-197"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "d00a688c-564d-e5ce-7410-68910fa49bc8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d00a688c-564d-e5ce-7410-68910fa49bc8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586338639661
        },
        "e-209": {
            "id": "e-209",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-210"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc222fcadcbaf|1eeb7bc4-e738-6f4e-e259-ab1b317f327c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc222fcadcbaf|1eeb7bc4-e738-6f4e-e259-ab1b317f327c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586342777205
        },
        "e-225": {
            "id": "e-225",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc21a68adcbb1|665feca0-2f9d-28b7-db09-eb54e4f4cfaf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc21a68adcbb1|665feca0-2f9d-28b7-db09-eb54e4f4cfaf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-30-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-30-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1586345254908
        },
        "e-226": {
            "id": "e-226",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-227"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc21a68adcbb1|665feca0-2f9d-28b7-db09-eb54e4f4cfaf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc21a68adcbb1|665feca0-2f9d-28b7-db09-eb54e4f4cfaf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586345310812
        },
        "e-227": {
            "id": "e-227",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-226"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc21a68adcbb1|665feca0-2f9d-28b7-db09-eb54e4f4cfaf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc21a68adcbb1|665feca0-2f9d-28b7-db09-eb54e4f4cfaf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586345310817
        },
        "e-228": {
            "id": "e-228",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-229"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc21a68adcbb1|665feca0-2f9d-28b7-db09-eb54e4f4cfaf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc21a68adcbb1|665feca0-2f9d-28b7-db09-eb54e4f4cfaf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586345322310
        },
        "e-229": {
            "id": "e-229",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-228"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc21a68adcbb1|665feca0-2f9d-28b7-db09-eb54e4f4cfaf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc21a68adcbb1|665feca0-2f9d-28b7-db09-eb54e4f4cfaf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586345322347
        },
        "e-230": {
            "id": "e-230",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-231"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc21a68adcbb1|3994face-2345-e8d6-66a7-6f2a9362a16b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc21a68adcbb1|3994face-2345-e8d6-66a7-6f2a9362a16b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586345497920
        },
        "e-231": {
            "id": "e-231",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-230"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc21a68adcbb1|3994face-2345-e8d6-66a7-6f2a9362a16b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc21a68adcbb1|3994face-2345-e8d6-66a7-6f2a9362a16b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586345497926
        },
        "e-234": {
            "id": "e-234",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-235"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2656cadcbbb|208d2855-8ea4-ce38-d32f-9798468fa81e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2656cadcbbb|208d2855-8ea4-ce38-d32f-9798468fa81e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586346632702
        },
        "e-236": {
            "id": "e-236",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-237"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2656cadcbbb|208d2855-8ea4-ce38-d32f-9798468fa825",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2656cadcbbb|208d2855-8ea4-ce38-d32f-9798468fa825",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586346632702
        },
        "e-238": {
            "id": "e-238",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2656cadcbbb|208d2855-8ea4-ce38-d32f-9798468fa82c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2656cadcbbb|208d2855-8ea4-ce38-d32f-9798468fa82c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-20-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-20-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1586346632702
        },
        "e-239": {
            "id": "e-239",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-240"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2656cadcbbb|208d2855-8ea4-ce38-d32f-9798468fa82c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2656cadcbbb|208d2855-8ea4-ce38-d32f-9798468fa82c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586346632702
        },
        "e-240": {
            "id": "e-240",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-239"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2656cadcbbb|208d2855-8ea4-ce38-d32f-9798468fa82c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2656cadcbbb|208d2855-8ea4-ce38-d32f-9798468fa82c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586346632702
        },
        "e-295": {
            "id": "e-295",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-296"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "db19bd53-0cf4-cacc-9271-775e2c524e48",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "db19bd53-0cf4-cacc-9271-775e2c524e48",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586359432505
        },
        "e-297": {
            "id": "e-297",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-298"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "db19bd53-0cf4-cacc-9271-775e2c524e4c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "db19bd53-0cf4-cacc-9271-775e2c524e4c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586359432505
        },
        "e-299": {
            "id": "e-299",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-300"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "db19bd53-0cf4-cacc-9271-775e2c524e4d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "db19bd53-0cf4-cacc-9271-775e2c524e4d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586359432505
        },
        "e-300": {
            "id": "e-300",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-299"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "db19bd53-0cf4-cacc-9271-775e2c524e4d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "db19bd53-0cf4-cacc-9271-775e2c524e4d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586359432505
        },
        "e-301": {
            "id": "e-301",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "db19bd53-0cf4-cacc-9271-775e2c524e4d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "db19bd53-0cf4-cacc-9271-775e2c524e4d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-36-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-36-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1586359432505
        },
        "e-315": {
            "id": "e-315",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-316"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2a723adcbb2|c40ee0ef-c377-4db4-c011-b925bb8188a1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a723adcbb2|c40ee0ef-c377-4db4-c011-b925bb8188a1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586364576041
        },
        "e-317": {
            "id": "e-317",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "63e9323160afc2a723adcbb2|c40ee0ef-c377-4db4-c011-b925bb8188a1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a723adcbb2|c40ee0ef-c377-4db4-c011-b925bb8188a1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-28-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1586364576041
        },
        "e-318": {
            "id": "e-318",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-319"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2a723adcbb2|c40ee0ef-c377-4db4-c011-b925bb8188ae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a723adcbb2|c40ee0ef-c377-4db4-c011-b925bb8188ae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586364576041
        },
        "e-320": {
            "id": "e-320",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "63e9323160afc2a723adcbb2|c40ee0ef-c377-4db4-c011-b925bb8188ae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a723adcbb2|c40ee0ef-c377-4db4-c011-b925bb8188ae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-28-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1586364576041
        },
        "e-321": {
            "id": "e-321",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "63e9323160afc2a723adcbb2|c40ee0ef-c377-4db4-c011-b925bb8188bb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a723adcbb2|c40ee0ef-c377-4db4-c011-b925bb8188bb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-28-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1586364576041
        },
        "e-322": {
            "id": "e-322",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-323"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2a723adcbb2|c40ee0ef-c377-4db4-c011-b925bb8188bb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a723adcbb2|c40ee0ef-c377-4db4-c011-b925bb8188bb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586364576041
        },
        "e-368": {
            "id": "e-368",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-369"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "edd194f5-6de6-b0fa-7090-49ecb5bd5ce7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "edd194f5-6de6-b0fa-7090-49ecb5bd5ce7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586792122039
        },
        "e-369": {
            "id": "e-369",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-368"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "edd194f5-6de6-b0fa-7090-49ecb5bd5ce7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "edd194f5-6de6-b0fa-7090-49ecb5bd5ce7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586792122048
        },
        "e-370": {
            "id": "e-370",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-371"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".nav-link",
                "originalId": "d598ea94-4cb3-2810-1aa5-41161f063d00",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".nav-link",
                "originalId": "d598ea94-4cb3-2810-1aa5-41161f063d00",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586792956878
        },
        "e-371": {
            "id": "e-371",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-42",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-370"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".nav-link",
                "originalId": "d598ea94-4cb3-2810-1aa5-41161f063d00",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".nav-link",
                "originalId": "d598ea94-4cb3-2810-1aa5-41161f063d00",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586792956911
        },
        "e-372": {
            "id": "e-372",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-373"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "edd194f5-6de6-b0fa-7090-49ecb5bd5ce7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "edd194f5-6de6-b0fa-7090-49ecb5bd5ce7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586793674200
        },
        "e-373": {
            "id": "e-373",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-42",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-372"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "edd194f5-6de6-b0fa-7090-49ecb5bd5ce7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "edd194f5-6de6-b0fa-7090-49ecb5bd5ce7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586793674209
        },
        "e-374": {
            "id": "e-374",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-375"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "756334c3-b1a8-da51-b948-3d81558d02ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "756334c3-b1a8-da51-b948-3d81558d02ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586793919320
        },
        "e-375": {
            "id": "e-375",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-374"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "756334c3-b1a8-da51-b948-3d81558d02ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "756334c3-b1a8-da51-b948-3d81558d02ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586793919333
        },
        "e-376": {
            "id": "e-376",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-377"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8ab5b2a1-d042-4c67-7106-0de3edb5da0f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8ab5b2a1-d042-4c67-7106-0de3edb5da0f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586793985996
        },
        "e-377": {
            "id": "e-377",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-376"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8ab5b2a1-d042-4c67-7106-0de3edb5da0f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8ab5b2a1-d042-4c67-7106-0de3edb5da0f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586793986008
        },
        "e-378": {
            "id": "e-378",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-379"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8a9e49ec-cccd-b8bf-c140-58b3c184288b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8a9e49ec-cccd-b8bf-c140-58b3c184288b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586793996742
        },
        "e-379": {
            "id": "e-379",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-378"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8a9e49ec-cccd-b8bf-c140-58b3c184288b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8a9e49ec-cccd-b8bf-c140-58b3c184288b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586793996752
        },
        "e-380": {
            "id": "e-380",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-381"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "328a35fe-0097-2dbe-b150-a3d33e51b5fb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "328a35fe-0097-2dbe-b150-a3d33e51b5fb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586794008652
        },
        "e-381": {
            "id": "e-381",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-380"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "328a35fe-0097-2dbe-b150-a3d33e51b5fb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "328a35fe-0097-2dbe-b150-a3d33e51b5fb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586794008661
        },
        "e-392": {
            "id": "e-392",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-393"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2a669adcb95",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a669adcb95",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586871941745
        },
        "e-394": {
            "id": "e-394",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-395"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2a669adcb95",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a669adcb95",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586872080046
        },
        "e-396": {
            "id": "e-396",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-397"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "d00a688c-564d-e5ce-7410-68910fa49b34",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d00a688c-564d-e5ce-7410-68910fa49b34",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586872448226
        },
        "e-397": {
            "id": "e-397",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-396"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "d00a688c-564d-e5ce-7410-68910fa49b34",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d00a688c-564d-e5ce-7410-68910fa49b34",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586872448226
        },
        "e-398": {
            "id": "e-398",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "d00a688c-564d-e5ce-7410-68910fa49b34",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d00a688c-564d-e5ce-7410-68910fa49b34",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-12-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-12-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }],
            "createdOn": 1586872448226
        },
        "e-399": {
            "id": "e-399",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "d00a688c-564d-e5ce-7410-68910fa49b52",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d00a688c-564d-e5ce-7410-68910fa49b52",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-12-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-12-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }],
            "createdOn": 1586872456867
        },
        "e-400": {
            "id": "e-400",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-401"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "d00a688c-564d-e5ce-7410-68910fa49b52",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d00a688c-564d-e5ce-7410-68910fa49b52",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586872456867
        },
        "e-401": {
            "id": "e-401",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-400"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "d00a688c-564d-e5ce-7410-68910fa49b52",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d00a688c-564d-e5ce-7410-68910fa49b52",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586872456867
        },
        "e-402": {
            "id": "e-402",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "d00a688c-564d-e5ce-7410-68910fa49b70",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d00a688c-564d-e5ce-7410-68910fa49b70",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-12-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-12-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }],
            "createdOn": 1586872461094
        },
        "e-403": {
            "id": "e-403",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-404"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "d00a688c-564d-e5ce-7410-68910fa49b70",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d00a688c-564d-e5ce-7410-68910fa49b70",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586872461094
        },
        "e-404": {
            "id": "e-404",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-403"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "d00a688c-564d-e5ce-7410-68910fa49b70",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d00a688c-564d-e5ce-7410-68910fa49b70",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586872461094
        },
        "e-405": {
            "id": "e-405",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "d00a688c-564d-e5ce-7410-68910fa49b8e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d00a688c-564d-e5ce-7410-68910fa49b8e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-12-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-12-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }],
            "createdOn": 1586872465568
        },
        "e-406": {
            "id": "e-406",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-407"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "d00a688c-564d-e5ce-7410-68910fa49b8e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d00a688c-564d-e5ce-7410-68910fa49b8e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586872465568
        },
        "e-407": {
            "id": "e-407",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-406"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "d00a688c-564d-e5ce-7410-68910fa49b8e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d00a688c-564d-e5ce-7410-68910fa49b8e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586872465568
        },
        "e-408": {
            "id": "e-408",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "d00a688c-564d-e5ce-7410-68910fa49bac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d00a688c-564d-e5ce-7410-68910fa49bac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-12-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-12-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }],
            "createdOn": 1586872469632
        },
        "e-409": {
            "id": "e-409",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-410"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "d00a688c-564d-e5ce-7410-68910fa49bac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d00a688c-564d-e5ce-7410-68910fa49bac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586872469632
        },
        "e-410": {
            "id": "e-410",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-409"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "d00a688c-564d-e5ce-7410-68910fa49bac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d00a688c-564d-e5ce-7410-68910fa49bac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586872469632
        },
        "e-415": {
            "id": "e-415",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-416"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2656cadcbbb",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2656cadcbbb",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586874435058
        },
        "e-417": {
            "id": "e-417",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-50",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-418"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2656cadcbbb",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2656cadcbbb",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586874451792
        },
        "e-431": {
            "id": "e-431",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-432"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc231a4adcba9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc231a4adcba9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586879408170
        },
        "e-433": {
            "id": "e-433",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-53",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-434"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc231a4adcba9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc231a4adcba9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586879422776
        },
        "e-436": {
            "id": "e-436",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "63e9323160afc231a4adcba9|31b423a9-4e46-3a05-f7fc-bca4b6ddab58",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc231a4adcba9|31b423a9-4e46-3a05-f7fc-bca4b6ddab58",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-28-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1586880030006
        },
        "e-437": {
            "id": "e-437",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "63e9323160afc231a4adcba9|31b423a9-4e46-3a05-f7fc-bca4b6ddab58",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc231a4adcba9|31b423a9-4e46-3a05-f7fc-bca4b6ddab58",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-49-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1586880030006
        },
        "e-438": {
            "id": "e-438",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-439"
                }
            },
            "mediaQueries": ["main", "medium", "small"],
            "target": {
                "id": "63e9323160afc231a4adcba9|31b423a9-4e46-3a05-f7fc-bca4b6ddab58",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc231a4adcba9|31b423a9-4e46-3a05-f7fc-bca4b6ddab58",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586880030006
        },
        "e-454": {
            "id": "e-454",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-455"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2e87badcba7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2e87badcba7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586934368221
        },
        "e-456": {
            "id": "e-456",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-457"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2e87badcba7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2e87badcba7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586934376928
        },
        "e-474": {
            "id": "e-474",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-475"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2b006adcbac",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2b006adcbac",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586935818694
        },
        "e-476": {
            "id": "e-476",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-477"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2b006adcbac",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2b006adcbac",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586936010882
        },
        "e-478": {
            "id": "e-478",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-479"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2c0f1adcbad",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2c0f1adcbad",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586937181265
        },
        "e-480": {
            "id": "e-480",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-481"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2d6f3adcbb3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2d6f3adcbb3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586937304299
        },
        "e-482": {
            "id": "e-482",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-65",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-483"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2d6f3adcbb3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2d6f3adcbb3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586937314265
        },
        "e-484": {
            "id": "e-484",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-65",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-485"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2c0f1adcbad",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2c0f1adcbad",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586937509464
        },
        "e-486": {
            "id": "e-486",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-487"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc28474adcbb4",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc28474adcbb4",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586937673993
        },
        "e-488": {
            "id": "e-488",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-489"
                }
            },
            "mediaQueries": ["main", "medium", "small"],
            "target": {
                "id": "63e9323160afc20802adcbae|b328e368-8a17-6d78-7b31-f10bd4a52996",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc20802adcbae|b328e368-8a17-6d78-7b31-f10bd4a52996",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586937706526
        },
        "e-490": {
            "id": "e-490",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "63e9323160afc20802adcbae|b328e368-8a17-6d78-7b31-f10bd4a52996",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc20802adcbae|b328e368-8a17-6d78-7b31-f10bd4a52996",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-28-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1586937706526
        },
        "e-491": {
            "id": "e-491",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "63e9323160afc20802adcbae|b328e368-8a17-6d78-7b31-f10bd4a52996",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc20802adcbae|b328e368-8a17-6d78-7b31-f10bd4a52996",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-49-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1586937706526
        },
        "e-492": {
            "id": "e-492",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-493"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc20802adcbae",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc20802adcbae",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586937749291
        },
        "e-494": {
            "id": "e-494",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-495"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc28324adcbb0",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc28324adcbb0",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586938015963
        },
        "e-496": {
            "id": "e-496",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-66",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-497"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc28324adcbb0",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc28324adcbb0",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586938025254
        },
        "e-498": {
            "id": "e-498",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-499"
                }
            },
            "mediaQueries": ["main", "medium", "small"],
            "target": {
                "id": "63e9323160afc28324adcbb0|420da015-a545-d30e-33ec-57275f9da5fd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc28324adcbb0|420da015-a545-d30e-33ec-57275f9da5fd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586938173483
        },
        "e-500": {
            "id": "e-500",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "63e9323160afc28324adcbb0|420da015-a545-d30e-33ec-57275f9da5fd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc28324adcbb0|420da015-a545-d30e-33ec-57275f9da5fd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-28-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1586938173483
        },
        "e-501": {
            "id": "e-501",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "63e9323160afc28324adcbb0|420da015-a545-d30e-33ec-57275f9da5fd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc28324adcbb0|420da015-a545-d30e-33ec-57275f9da5fd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-49-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1586938173483
        },
        "e-502": {
            "id": "e-502",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-503"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2a723adcbb2",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a723adcbb2",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586938714463
        },
        "e-504": {
            "id": "e-504",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-67",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-505"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2a723adcbb2",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a723adcbb2",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586938726095
        },
        "e-506": {
            "id": "e-506",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "63e9323160afc2a723adcbb2|c40ee0ef-c377-4db4-c011-b925bb8188a1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a723adcbb2|c40ee0ef-c377-4db4-c011-b925bb8188a1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-49-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1586938884217
        },
        "e-507": {
            "id": "e-507",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "63e9323160afc2a723adcbb2|c40ee0ef-c377-4db4-c011-b925bb8188ae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a723adcbb2|c40ee0ef-c377-4db4-c011-b925bb8188ae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-49-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1586938902700
        },
        "e-508": {
            "id": "e-508",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "63e9323160afc2a723adcbb2|c40ee0ef-c377-4db4-c011-b925bb8188bb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a723adcbb2|c40ee0ef-c377-4db4-c011-b925bb8188bb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-49-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1586938926744
        },
        "e-509": {
            "id": "e-509",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-58",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-510"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2a723adcbb2|e36cb993-6561-b100-cf63-12ee64c074a4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a723adcbb2|e36cb993-6561-b100-cf63-12ee64c074a4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586938939895
        },
        "e-511": {
            "id": "e-511",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-512"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc222fcadcbaf|e3cb5479-9ffe-e59e-c682-4082b433394c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc222fcadcbaf|e3cb5479-9ffe-e59e-c682-4082b433394c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586939242824
        },
        "e-513": {
            "id": "e-513",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc222fcadcbaf|e3cb5479-9ffe-e59e-c682-4082b433394d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc222fcadcbaf|e3cb5479-9ffe-e59e-c682-4082b433394d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-20-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-20-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1586939242824
        },
        "e-514": {
            "id": "e-514",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-515"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc222fcadcbaf|e3cb5479-9ffe-e59e-c682-4082b433394d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc222fcadcbaf|e3cb5479-9ffe-e59e-c682-4082b433394d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586939242824
        },
        "e-515": {
            "id": "e-515",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-514"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc222fcadcbaf|e3cb5479-9ffe-e59e-c682-4082b433394d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc222fcadcbaf|e3cb5479-9ffe-e59e-c682-4082b433394d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586939242824
        },
        "e-516": {
            "id": "e-516",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-517"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc222fcadcbaf",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc222fcadcbaf",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586939279864
        },
        "e-518": {
            "id": "e-518",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-50",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-519"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc222fcadcbaf",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc222fcadcbaf",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586939287091
        },
        "e-520": {
            "id": "e-520",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-521"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc21a68adcbb1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc21a68adcbb1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586939454242
        },
        "e-522": {
            "id": "e-522",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-68",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-523"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc21a68adcbb1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc21a68adcbb1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586939479141
        },
        "e-524": {
            "id": "e-524",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc21a68adcbb1|9a9df435-ba8a-637c-88f9-951aa79014bd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc21a68adcbb1|9a9df435-ba8a-637c-88f9-951aa79014bd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-37-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-37-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1586940031291
        },
        "e-525": {
            "id": "e-525",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-52",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-526"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc21a68adcbb1|9a9df435-ba8a-637c-88f9-951aa79014bd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc21a68adcbb1|9a9df435-ba8a-637c-88f9-951aa79014bd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586940031291
        },
        "e-529": {
            "id": "e-529",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-70",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "63e9323160afc21a68adcbb1|b17d6519-21e2-fe59-481f-c6b4e8f95227",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc21a68adcbb1|b17d6519-21e2-fe59-481f-c6b4e8f95227",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-70-p",
                "smoothing": 100,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1586940270340
        },
        "e-530": {
            "id": "e-530",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-71",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "63e9323160afc21a68adcbb1|b17d6519-21e2-fe59-481f-c6b4e8f95227",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc21a68adcbb1|b17d6519-21e2-fe59-481f-c6b4e8f95227",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-71-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1586940301175
        },
        "e-531": {
            "id": "e-531",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-58",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-532"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc21a68adcbb1|6850b418-9ec9-9a2c-a98e-9a776f1b8a77",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc21a68adcbb1|6850b418-9ec9-9a2c-a98e-9a776f1b8a77",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586940344051
        },
        "e-537": {
            "id": "e-537",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-538"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc232a8adcba6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc232a8adcba6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586940842985
        },
        "e-539": {
            "id": "e-539",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-540"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc28415adcba5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc28415adcba5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586940972916
        },
        "e-541": {
            "id": "e-541",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-72",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-542"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "ac17271b-aee3-a18b-f6fa-6f58a4fce7e9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "ac17271b-aee3-a18b-f6fa-6f58a4fce7e9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586946652331
        },
        "e-542": {
            "id": "e-542",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-73",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-541"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "ac17271b-aee3-a18b-f6fa-6f58a4fce7e9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "ac17271b-aee3-a18b-f6fa-6f58a4fce7e9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586946652346
        },
        "e-543": {
            "id": "e-543",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-74",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-544"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "ac17271b-aee3-a18b-f6fa-6f58a4fce816",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "ac17271b-aee3-a18b-f6fa-6f58a4fce816",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586946765864
        },
        "e-545": {
            "id": "e-545",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-75",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-546"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "ac17271b-aee3-a18b-f6fa-6f58a4fce7e2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "ac17271b-aee3-a18b-f6fa-6f58a4fce7e2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586946809240
        },
        "e-549": {
            "id": "e-549",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-76",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-550"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "ac17271b-aee3-a18b-f6fa-6f58a4fce7e2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "ac17271b-aee3-a18b-f6fa-6f58a4fce7e2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586947041418
        },
        "e-550": {
            "id": "e-550",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-77",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-549"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "ac17271b-aee3-a18b-f6fa-6f58a4fce7e2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "ac17271b-aee3-a18b-f6fa-6f58a4fce7e2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586947041435
        },
        "e-551": {
            "id": "e-551",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "63e9323160afc244daadcbb8|58f52e72-9a69-f5ca-8983-75fb97aece72",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc244daadcbb8|58f52e72-9a69-f5ca-8983-75fb97aece72",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-28-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1586950211715
        },
        "e-552": {
            "id": "e-552",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "63e9323160afc244daadcbb8|58f52e72-9a69-f5ca-8983-75fb97aece72",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc244daadcbb8|58f52e72-9a69-f5ca-8983-75fb97aece72",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-49-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1586950211715
        },
        "e-553": {
            "id": "e-553",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-554"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc244daadcbb8|58f52e72-9a69-f5ca-8983-75fb97aece72",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc244daadcbb8|58f52e72-9a69-f5ca-8983-75fb97aece72",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586950211715
        },
        "e-555": {
            "id": "e-555",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-556"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc244daadcbb8|4af14672-dad3-ba37-509f-6b7384c56cc0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc244daadcbb8|4af14672-dad3-ba37-509f-6b7384c56cc0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586950426607
        },
        "e-557": {
            "id": "e-557",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "63e9323160afc244daadcbb8|4af14672-dad3-ba37-509f-6b7384c56cc0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc244daadcbb8|4af14672-dad3-ba37-509f-6b7384c56cc0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-28-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1586950426607
        },
        "e-558": {
            "id": "e-558",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "63e9323160afc244daadcbb8|4af14672-dad3-ba37-509f-6b7384c56cc0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc244daadcbb8|4af14672-dad3-ba37-509f-6b7384c56cc0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-49-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1586950426607
        },
        "e-559": {
            "id": "e-559",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "63e9323160afc244daadcbb8|faadfddd-4630-c9cb-46db-300ad4c2081f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc244daadcbb8|faadfddd-4630-c9cb-46db-300ad4c2081f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-28-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1586950624061
        },
        "e-560": {
            "id": "e-560",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-561"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc244daadcbb8|faadfddd-4630-c9cb-46db-300ad4c2081f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc244daadcbb8|faadfddd-4630-c9cb-46db-300ad4c2081f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586950624061
        },
        "e-562": {
            "id": "e-562",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "63e9323160afc244daadcbb8|faadfddd-4630-c9cb-46db-300ad4c2081f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc244daadcbb8|faadfddd-4630-c9cb-46db-300ad4c2081f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-49-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1586950624061
        },
        "e-563": {
            "id": "e-563",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-58",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-564"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "413ff4c6-7e55-f3b7-884e-ed49c334736f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "413ff4c6-7e55-f3b7-884e-ed49c334736f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586951096931
        },
        "e-565": {
            "id": "e-565",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2ed53adcbaa",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2ed53adcbaa",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1586951434325
        },
        "e-578": {
            "id": "e-578",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-63",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-579"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2ed53adcbaa|df129116-e099-417f-8744-58dc37ec2b67",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2ed53adcbaa|df129116-e099-417f-8744-58dc37ec2b67",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586951470067
        },
        "e-580": {
            "id": "e-580",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc237d7adcbea",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc237d7adcbea",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1586951561582
        },
        "e-581": {
            "id": "e-581",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc251a5adcbb6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc251a5adcbb6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1586951869536
        },
        "e-582": {
            "id": "e-582",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-56",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-583"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc21a68adcbb1|9f5f426d-f2f4-906a-ec71-14bd7a4b274c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc21a68adcbb1|9f5f426d-f2f4-906a-ec71-14bd7a4b274c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1587040621997
        },
        "e-583": {
            "id": "e-583",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-57",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-582"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc21a68adcbb1|9f5f426d-f2f4-906a-ec71-14bd7a4b274c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc21a68adcbb1|9f5f426d-f2f4-906a-ec71-14bd7a4b274c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1587040621997
        },
        "e-584": {
            "id": "e-584",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-58",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-585"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc21a68adcbb1|380d033c-5fd0-b4c4-5c7a-867f4202c0bc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc21a68adcbb1|380d033c-5fd0-b4c4-5c7a-867f4202c0bc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1587040867338
        },
        "e-604": {
            "id": "e-604",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-79",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2a669adcb95",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a669adcb95",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-79-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1588071669865
        },
        "e-605": {
            "id": "e-605",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-78",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2656cadcbbb",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2656cadcbbb",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-78-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1588071729700
        },
        "e-608": {
            "id": "e-608",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-78",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc231a4adcba9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc231a4adcba9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-78-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1588071757164
        },
        "e-613": {
            "id": "e-613",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-78",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2e87badcba7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2e87badcba7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-78-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1588071849056
        },
        "e-614": {
            "id": "e-614",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-78",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2b006adcbac",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2b006adcbac",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-78-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1588071861802
        },
        "e-615": {
            "id": "e-615",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-78",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2c0f1adcbad",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2c0f1adcbad",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-78-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1588071874202
        },
        "e-616": {
            "id": "e-616",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-78",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2d6f3adcbb3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2d6f3adcbb3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-78-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1588071883452
        },
        "e-617": {
            "id": "e-617",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-78",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc28474adcbb4",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc28474adcbb4",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-78-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1588071892851
        },
        "e-618": {
            "id": "e-618",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-78",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc20802adcbae",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc20802adcbae",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-78-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1588071901672
        },
        "e-619": {
            "id": "e-619",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-79",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc28324adcbb0",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc28324adcbb0",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-79-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1588071909651
        },
        "e-620": {
            "id": "e-620",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-78",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2a723adcbb2",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a723adcbb2",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-78-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1588071923122
        },
        "e-621": {
            "id": "e-621",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-78",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc222fcadcbaf",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc222fcadcbaf",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-78-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1588071940147
        },
        "e-622": {
            "id": "e-622",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-78",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc21a68adcbb1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc21a68adcbb1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-78-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1588071952596
        },
        "e-623": {
            "id": "e-623",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-63",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-624"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2ed53adcbaa|77179d55-a9c5-7d98-ac1e-8e1a609cb1e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2ed53adcbaa|77179d55-a9c5-7d98-ac1e-8e1a609cb1e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592202664040
        },
        "e-625": {
            "id": "e-625",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-626"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "63e9323160afc2a669adcb95|3052e4cb-4d4a-3511-ce1c-2078d9e9ddd2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a669adcb95|3052e4cb-4d4a-3511-ce1c-2078d9e9ddd2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1641765550449
        },
        "e-627": {
            "id": "e-627",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63e9323160afc2a669adcb95|3052e4cb-4d4a-3511-ce1c-2078d9e9ddd2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a669adcb95|3052e4cb-4d4a-3511-ce1c-2078d9e9ddd2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-24-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1641765550449
        },
        "e-628": {
            "id": "e-628",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2a669adcb95|3052e4cb-4d4a-3511-ce1c-2078d9e9ddd2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a669adcb95|3052e4cb-4d4a-3511-ce1c-2078d9e9ddd2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-46-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1641765550449
        },
        "e-651": {
            "id": "e-651",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-98",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-652"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2a669adcb95|0b6ceb19-0948-476f-18ff-c5df79d3f398",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a669adcb95|0b6ceb19-0948-476f-18ff-c5df79d3f398",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1642568075325
        },
        "e-652": {
            "id": "e-652",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-99",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-651"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2a669adcb95|0b6ceb19-0948-476f-18ff-c5df79d3f398",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a669adcb95|0b6ceb19-0948-476f-18ff-c5df79d3f398",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1642568075330
        },
        "e-657": {
            "id": "e-657",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-106",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2a669adcb95|46b3ac12-00ff-b0b0-9dd5-c908aa5e12ed",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a669adcb95|46b3ac12-00ff-b0b0-9dd5-c908aa5e12ed",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-106-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1567095841407
        },
        "e-662": {
            "id": "e-662",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "16cb4d7a-be77-dc3b-042b-f5db4df21ac4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "16cb4d7a-be77-dc3b-042b-f5db4df21ac4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-24-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1644441789030
        },
        "e-663": {
            "id": "e-663",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "16cb4d7a-be77-dc3b-042b-f5db4df21ac4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "16cb4d7a-be77-dc3b-042b-f5db4df21ac4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-46-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1644441789030
        },
        "e-664": {
            "id": "e-664",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-665"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "16cb4d7a-be77-dc3b-042b-f5db4df21ac4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "16cb4d7a-be77-dc3b-042b-f5db4df21ac4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1644441789030
        },
        "e-666": {
            "id": "e-666",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-667"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc24222adcbd1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc24222adcbd1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1644444164564
        },
        "e-668": {
            "id": "e-668",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-51",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-669"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc24222adcbd1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc24222adcbd1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1644444164564
        },
        "e-674": {
            "id": "e-674",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-72",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-675"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc24222adcbd1|5a84622c-926c-b43d-07ee-6d3e0c59f595",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc24222adcbd1|5a84622c-926c-b43d-07ee-6d3e0c59f595",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1644444164564
        },
        "e-675": {
            "id": "e-675",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-73",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-674"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc24222adcbd1|5a84622c-926c-b43d-07ee-6d3e0c59f595",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc24222adcbd1|5a84622c-926c-b43d-07ee-6d3e0c59f595",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1644444164564
        },
        "e-676": {
            "id": "e-676",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-78",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc24222adcbd1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc24222adcbd1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-78-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1644444164564
        },
        "e-677": {
            "id": "e-677",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-63",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-678"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2e87badcba7|7d2c41bc-0b72-1df3-d9cc-35cd52810dde",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2e87badcba7|7d2c41bc-0b72-1df3-d9cc-35cd52810dde",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1644609892972
        },
        "e-679": {
            "id": "e-679",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-63",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-680"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2e87badcba7|7d2c41bc-0b72-1df3-d9cc-35cd52810de4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2e87badcba7|7d2c41bc-0b72-1df3-d9cc-35cd52810de4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1644609892972
        },
        "e-681": {
            "id": "e-681",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-63",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-682"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2e87badcba7|7d2c41bc-0b72-1df3-d9cc-35cd52810dea",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2e87badcba7|7d2c41bc-0b72-1df3-d9cc-35cd52810dea",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1644609892972
        },
        "e-683": {
            "id": "e-683",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-63",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-684"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2e87badcba7|7d2c41bc-0b72-1df3-d9cc-35cd52810df0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2e87badcba7|7d2c41bc-0b72-1df3-d9cc-35cd52810df0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1644609892972
        },
        "e-685": {
            "id": "e-685",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-131",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc24222adcbd1|eb7a15e4-3d14-4106-7523-ece9105170e6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc24222adcbd1|eb7a15e4-3d14-4106-7523-ece9105170e6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-131-p",
                "smoothing": 90,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1647034006347
        },
        "e-686": {
            "id": "e-686",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-687"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2a669adcb95|c8b36c24-607f-c90b-b1b4-c139e36da9c4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a669adcb95|c8b36c24-607f-c90b-b1b4-c139e36da9c4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1647045994453
        },
        "e-687": {
            "id": "e-687",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-686"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2a669adcb95|c8b36c24-607f-c90b-b1b4-c139e36da9c4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a669adcb95|c8b36c24-607f-c90b-b1b4-c139e36da9c4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1647045994453
        },
        "e-730": {
            "id": "e-730",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-137",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63e9323160afc2a669adcb95|479b067e-199e-e543-4160-e953871ea02e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a669adcb95|479b067e-199e-e543-4160-e953871ea02e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-137-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1647486384902
        },
        "e-731": {
            "id": "e-731",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-138",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2a669adcb95|479b067e-199e-e543-4160-e953871ea02e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a669adcb95|479b067e-199e-e543-4160-e953871ea02e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-138-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1647486384902
        },
        "e-732": {
            "id": "e-732",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-139",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-733"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "63e9323160afc2a669adcb95|479b067e-199e-e543-4160-e953871ea02e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a669adcb95|479b067e-199e-e543-4160-e953871ea02e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1647486384902
        },
        "e-734": {
            "id": "e-734",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-735"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2a669adcb95|ed698d5d-e003-3828-8979-80d16c2ca9eb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a669adcb95|ed698d5d-e003-3828-8979-80d16c2ca9eb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1647486420978
        },
        "e-736": {
            "id": "e-736",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-737"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2a669adcb95|ed698d5d-e003-3828-8979-80d16c2ca9ef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a669adcb95|ed698d5d-e003-3828-8979-80d16c2ca9ef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1647486420978
        },
        "e-738": {
            "id": "e-738",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2a669adcb95|ed698d5d-e003-3828-8979-80d16c2ca9f0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a669adcb95|ed698d5d-e003-3828-8979-80d16c2ca9f0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-20-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-20-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1647486420978
        },
        "e-739": {
            "id": "e-739",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-740"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2a669adcb95|ed698d5d-e003-3828-8979-80d16c2ca9f0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a669adcb95|ed698d5d-e003-3828-8979-80d16c2ca9f0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1647486420978
        },
        "e-740": {
            "id": "e-740",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-739"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2a669adcb95|ed698d5d-e003-3828-8979-80d16c2ca9f0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a669adcb95|ed698d5d-e003-3828-8979-80d16c2ca9f0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1647486420978
        },
        "e-741": {
            "id": "e-741",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "63e9323160afc23e62adcbed|8f814633-c33d-e6a4-8f69-a31854a0a05e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc23e62adcbed|8f814633-c33d-e6a4-8f69-a31854a0a05e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-49-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1647905481118
        },
        "e-742": {
            "id": "e-742",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-743"
                }
            },
            "mediaQueries": ["main", "medium", "small"],
            "target": {
                "id": "63e9323160afc23e62adcbed|8f814633-c33d-e6a4-8f69-a31854a0a05e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc23e62adcbed|8f814633-c33d-e6a4-8f69-a31854a0a05e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1647905481118
        },
        "e-744": {
            "id": "e-744",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "63e9323160afc23e62adcbed|8f814633-c33d-e6a4-8f69-a31854a0a05e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc23e62adcbed|8f814633-c33d-e6a4-8f69-a31854a0a05e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-28-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1647905481118
        },
        "e-745": {
            "id": "e-745",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-136",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738afebf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738afebf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-136-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-136-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }],
            "createdOn": 1647905572113
        },
        "e-746": {
            "id": "e-746",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-134",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-747"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738afebf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738afebf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1647905572113
        },
        "e-747": {
            "id": "e-747",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-135",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-746"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738afebf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738afebf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1647905572113
        },
        "e-748": {
            "id": "e-748",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-134",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-749"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738afed6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738afed6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1647905572113
        },
        "e-749": {
            "id": "e-749",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-135",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-748"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738afed6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738afed6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1647905572113
        },
        "e-750": {
            "id": "e-750",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-136",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738afed6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738afed6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-136-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-136-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }],
            "createdOn": 1647905572113
        },
        "e-751": {
            "id": "e-751",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-136",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738afef4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738afef4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-136-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-136-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }],
            "createdOn": 1647905572113
        },
        "e-752": {
            "id": "e-752",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-134",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-753"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738afef4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738afef4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1647905572113
        },
        "e-753": {
            "id": "e-753",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-135",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-752"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738afef4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738afef4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1647905572113
        },
        "e-754": {
            "id": "e-754",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-136",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738aff12",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738aff12",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-136-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-136-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }],
            "createdOn": 1647905572113
        },
        "e-755": {
            "id": "e-755",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-134",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-756"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738aff12",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738aff12",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1647905572113
        },
        "e-756": {
            "id": "e-756",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-135",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-755"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738aff12",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738aff12",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1647905572113
        },
        "e-757": {
            "id": "e-757",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-134",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-758"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738aff30",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738aff30",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1647905572113
        },
        "e-758": {
            "id": "e-758",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-135",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-757"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738aff30",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738aff30",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1647905572113
        },
        "e-759": {
            "id": "e-759",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-136",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738aff30",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738aff30",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-136-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-136-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }],
            "createdOn": 1647905572113
        },
        "e-760": {
            "id": "e-760",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-132",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-761"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738aff4a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738aff4a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1647905572113
        },
        "e-761": {
            "id": "e-761",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-133",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-760"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738aff4a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738aff4a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1647905572113
        },
        "e-762": {
            "id": "e-762",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-132",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-763"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738aff4c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738aff4c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1647905572113
        },
        "e-763": {
            "id": "e-763",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-133",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-762"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738aff4c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738aff4c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1647905572113
        },
        "e-764": {
            "id": "e-764",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-138",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738aff4f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738aff4f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-138-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1647905572113
        },
        "e-765": {
            "id": "e-765",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-137",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738aff4f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738aff4f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-137-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1647905572113
        },
        "e-766": {
            "id": "e-766",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-139",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-767"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738aff4f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc23e62adcbed|a94af401-9d2b-0c8b-c108-0307738aff4f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1647905572113
        },
        "e-768": {
            "id": "e-768",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-98",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-769"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2a669adcb95|32fd2ff3-6352-f843-2fbe-175c610fc83a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a669adcb95|32fd2ff3-6352-f843-2fbe-175c610fc83a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1647967578378
        },
        "e-769": {
            "id": "e-769",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-99",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-768"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2a669adcb95|32fd2ff3-6352-f843-2fbe-175c610fc83a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a669adcb95|32fd2ff3-6352-f843-2fbe-175c610fc83a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1647967578383
        },
        "e-770": {
            "id": "e-770",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-98",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-771"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2a669adcb95|13608949-9ed8-c5a0-333e-ab14ff754961",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a669adcb95|13608949-9ed8-c5a0-333e-ab14ff754961",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1647967637497
        },
        "e-771": {
            "id": "e-771",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-99",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-770"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2a669adcb95|13608949-9ed8-c5a0-333e-ab14ff754961",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a669adcb95|13608949-9ed8-c5a0-333e-ab14ff754961",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1647967637546
        },
        "e-772": {
            "id": "e-772",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-98",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-773"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2a669adcb95|13608949-9ed8-c5a0-333e-ab14ff754969",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a669adcb95|13608949-9ed8-c5a0-333e-ab14ff754969",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1647967660030
        },
        "e-773": {
            "id": "e-773",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-99",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-772"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2a669adcb95|13608949-9ed8-c5a0-333e-ab14ff754969",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a669adcb95|13608949-9ed8-c5a0-333e-ab14ff754969",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1647967660033
        },
        "e-774": {
            "id": "e-774",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-98",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-775"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2a669adcb95|3952576d-a842-2733-0238-c92c033a56bd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a669adcb95|3952576d-a842-2733-0238-c92c033a56bd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1647967674294
        },
        "e-775": {
            "id": "e-775",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-99",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-774"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e9323160afc2a669adcb95|3952576d-a842-2733-0238-c92c033a56bd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e9323160afc2a669adcb95|3952576d-a842-2733-0238-c92c033a56bd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1647967674297
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "Move Ninja",
            "continuousParameterGroups": [{
                "id": "a-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".ninja-image-wrap",
                                "selectorGuids": ["9f61641b-6641-4233-17e0-f00c60de42ac"]
                            },
                            "xValue": -300,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".ninja-image-wrap",
                                "selectorGuids": ["9f61641b-6641-4233-17e0-f00c60de42ac"]
                            },
                            "xValue": 0,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".ninja-image-wrap",
                                "selectorGuids": ["9f61641b-6641-4233-17e0-f00c60de42ac"]
                            },
                            "yValue": -300,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".ninja-image-wrap",
                                "selectorGuids": ["9f61641b-6641-4233-17e0-f00c60de42ac"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1584982905819
        },
        "a-25": {
            "id": "a-25",
            "title": "Scroll Into Contact",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-25-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-image-mask",
                            "selectorGuids": ["50ce1998-88bc-ddf8-fd02-be38307bf4af"]
                        },
                        "widthValue": 100,
                        "heightValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-25-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-image-wrap",
                            "selectorGuids": ["c9ce2fa1-ba94-bdc0-1b71-efe9ffcb6f2e"]
                        },
                        "yValue": -50,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-details",
                            "selectorGuids": ["89c6f9af-b5ad-2cf0-b17e-5ac595484339"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-details",
                            "selectorGuids": ["89c6f9af-b5ad-2cf0-b17e-5ac595484339"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-image-wrap",
                            "selectorGuids": ["c9ce2fa1-ba94-bdc0-1b71-efe9ffcb6f2e"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutCubic",
                        "duration": 1500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-image-mask",
                            "selectorGuids": ["50ce1998-88bc-ddf8-fd02-be38307bf4af"]
                        },
                        "widthValue": 100,
                        "heightValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1586331180994
        },
        "a-26": {
            "id": "a-26",
            "title": "Paralax Contact",
            "continuousParameterGroups": [{
                "id": "a-26-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-26-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".footer-form-block",
                                "selectorGuids": ["69f4788d-a838-04e1-1af2-0bf041d48e5c"]
                            },
                            "yValue": 150,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-26-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".footer-form-block",
                                "selectorGuids": ["69f4788d-a838-04e1-1af2-0bf041d48e5c"]
                            },
                            "yValue": -150,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1586331548547
        },
        "a-9": {
            "id": "a-9",
            "title": "Loop Next Previous",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 180000,
                        "target": {
                            "selector": ".slider-button.next",
                            "selectorGuids": ["f1304288-f64e-b100-b478-ba5891976635", "c60499ec-df07-3b59-4307-d89c1bf8cd7c"]
                        },
                        "zValue": 2000,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-9-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 180000,
                        "target": {
                            "selector": ".slider-button.previous",
                            "selectorGuids": ["f1304288-f64e-b100-b478-ba5891976635", "7febc10a-eafb-927d-0823-4b0a13539cfa"]
                        },
                        "zValue": -2000,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 180000,
                        "target": {
                            "selector": ".slider-button.next",
                            "selectorGuids": ["f1304288-f64e-b100-b478-ba5891976635", "c60499ec-df07-3b59-4307-d89c1bf8cd7c"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-9-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 180000,
                        "target": {
                            "selector": ".slider-button.previous",
                            "selectorGuids": ["f1304288-f64e-b100-b478-ba5891976635", "7febc10a-eafb-927d-0823-4b0a13539cfa"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1585047787886
        },
        "a-10": {
            "id": "a-10",
            "title": "Hover Slider Arrow",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".slider-button",
                            "selectorGuids": ["f1304288-f64e-b100-b478-ba5891976635"]
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1585048212984
        },
        "a-11": {
            "id": "a-11",
            "title": "Hover Out Slider Arrow",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-11-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".slider-button",
                            "selectorGuids": ["f1304288-f64e-b100-b478-ba5891976635"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1585048212984
        },
        "a-19": {
            "id": "a-19",
            "title": "Scroll Into Latest Projects",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-19-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".sticky-labels",
                            "selectorGuids": ["fb41d6b6-af31-0d16-2487-0bae05cec6ca"]
                        },
                        "zValue": 90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-19-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".sticky-labels",
                            "selectorGuids": ["fb41d6b6-af31-0d16-2487-0bae05cec6ca"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-19-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".sticky-labels",
                            "selectorGuids": ["fb41d6b6-af31-0d16-2487-0bae05cec6ca"]
                        },
                        "xValue": -50,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-19-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".sticky-labels",
                            "selectorGuids": ["fb41d6b6-af31-0d16-2487-0bae05cec6ca"]
                        },
                        "zValue": 90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-19-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".sticky-labels",
                            "selectorGuids": ["fb41d6b6-af31-0d16-2487-0bae05cec6ca"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-19-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".sticky-labels",
                            "selectorGuids": ["fb41d6b6-af31-0d16-2487-0bae05cec6ca"]
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1586257014478
        },
        "a-30": {
            "id": "a-30",
            "title": "Play Symbol",
            "continuousParameterGroups": [{
                "id": "a-30-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-30-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hover-mouse",
                                "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd"]
                            },
                            "xValue": -100,
                            "xUnit": "VW",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-30-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hover-mouse",
                                "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd"]
                            },
                            "xValue": 0,
                            "xUnit": "VW",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-30-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-30-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hover-mouse",
                                "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd"]
                            },
                            "yValue": -80,
                            "xUnit": "PX",
                            "yUnit": "VH",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-30-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hover-mouse",
                                "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "VH",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1586345257743
        },
        "a-13": {
            "id": "a-13",
            "title": "Show Project Arrow",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-13-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hover-mouse",
                            "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-13-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hover-mouse",
                            "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-13-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hover-mouse",
                            "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-13-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hover-mouse",
                            "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd"]
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1585048555143
        },
        "a-14": {
            "id": "a-14",
            "title": "Hide Project Arrow",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-14-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hover-mouse",
                            "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-14-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hover-mouse",
                            "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1585048555143
        },
        "a-31": {
            "id": "a-31",
            "title": "Scale Play Button",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-31-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".player-symbol",
                            "selectorGuids": ["2c37163d-df5e-0d38-8a83-2d1e93eae08e"]
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1586345324392
        },
        "a-32": {
            "id": "a-32",
            "title": "Scale Out Play Button",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-32-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".player-symbol",
                            "selectorGuids": ["2c37163d-df5e-0d38-8a83-2d1e93eae08e"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1586345324392
        },
        "a-34": {
            "id": "a-34",
            "title": "Show Gallery Arrow",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-34-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hover-mouse.mouse-2",
                            "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd", "91797f21-6c4d-af5e-5c38-03ea48842cac"]
                        },
                        "yValue": 50,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-34-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hover-mouse.mouse-2",
                            "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd", "91797f21-6c4d-af5e-5c38-03ea48842cac"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-34-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hover-mouse.mouse-2",
                            "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd", "91797f21-6c4d-af5e-5c38-03ea48842cac"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-34-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hover-mouse.mouse-2",
                            "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd", "91797f21-6c4d-af5e-5c38-03ea48842cac"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-34-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hover-mouse.mouse-2",
                            "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd", "91797f21-6c4d-af5e-5c38-03ea48842cac"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-34-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hover-mouse.mouse-2",
                            "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd", "91797f21-6c4d-af5e-5c38-03ea48842cac"]
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1586345641505
        },
        "a-35": {
            "id": "a-35",
            "title": "Hide Gallery Arrow",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-35-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hover-mouse.mouse-2",
                            "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd", "91797f21-6c4d-af5e-5c38-03ea48842cac"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-35-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hover-mouse.mouse-2",
                            "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd", "91797f21-6c4d-af5e-5c38-03ea48842cac"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-35-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hover-mouse.mouse-2",
                            "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd", "91797f21-6c4d-af5e-5c38-03ea48842cac"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1586345641505
        },
        "a-17": {
            "id": "a-17",
            "title": "Scroll Into Project Item",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-17-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-image-wrap",
                            "selectorGuids": ["cf3a6ba0-dcb0-c50d-b2d6-d5cee602b968"]
                        },
                        "yValue": -50,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-17-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-image-mask",
                            "selectorGuids": ["6922126c-e9b4-08e4-0ab4-ac1efa676b98"]
                        },
                        "widthValue": 100,
                        "heightValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-17-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-date-and-time",
                            "selectorGuids": ["7c36d7eb-4a27-60b7-e396-115edd7ddb6b"]
                        },
                        "yValue": 50,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-17-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-date-and-time",
                            "selectorGuids": ["7c36d7eb-4a27-60b7-e396-115edd7ddb6b"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-17-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".column",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-17-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-image-wrap",
                            "selectorGuids": ["cf3a6ba0-dcb0-c50d-b2d6-d5cee602b968"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-17-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutCubic",
                        "duration": 1500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-image-mask",
                            "selectorGuids": ["6922126c-e9b4-08e4-0ab4-ac1efa676b98"]
                        },
                        "widthValue": 100,
                        "heightValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-17-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-date-and-time",
                            "selectorGuids": ["7c36d7eb-4a27-60b7-e396-115edd7ddb6b"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-17-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-date-and-time",
                            "selectorGuids": ["7c36d7eb-4a27-60b7-e396-115edd7ddb6b"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-17-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".column",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1586256230317
        },
        "a-20": {
            "id": "a-20",
            "title": "Move Arrow Projects",
            "continuousParameterGroups": [{
                "id": "a-20-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-20-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hover-mouse",
                                "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd"]
                            },
                            "xValue": -700,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-20-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hover-mouse",
                                "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd"]
                            },
                            "xValue": 0,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-20-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-20-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hover-mouse",
                                "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd"]
                            },
                            "yValue": -540,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-20-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hover-mouse",
                                "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1586257276373
        },
        "a-36": {
            "id": "a-36",
            "title": "Move Arrow Projects Small",
            "continuousParameterGroups": [{
                "id": "a-36-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-36-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hover-mouse",
                                "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd"]
                            },
                            "xValue": -590,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-36-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hover-mouse",
                                "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd"]
                            },
                            "xValue": 0,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-36-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-36-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hover-mouse",
                                "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd"]
                            },
                            "yValue": -540,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-36-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hover-mouse",
                                "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1586257276373
        },
        "a-27": {
            "id": "a-27",
            "title": "Scroll Into Process",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-27-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".process-image-mask",
                            "selectorGuids": ["6d91fd50-a0f6-da8d-8f76-8b0f4d6a3e02"]
                        },
                        "widthValue": 100,
                        "heightValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-27-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".process-image-mask",
                            "selectorGuids": ["6d91fd50-a0f6-da8d-8f76-8b0f4d6a3e02"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".outline",
                            "selectorGuids": ["b518ef77-763f-9cad-856b-8bce12df3759"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".column.max-400",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "e77aeae9-039f-2fac-8f39-c86be0d9b135"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-27-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".process-image-mask",
                            "selectorGuids": ["6d91fd50-a0f6-da8d-8f76-8b0f4d6a3e02"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutCubic",
                        "duration": 1500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".process-image-mask",
                            "selectorGuids": ["6d91fd50-a0f6-da8d-8f76-8b0f4d6a3e02"]
                        },
                        "widthValue": 100,
                        "heightValue": 550,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-27-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".outline",
                            "selectorGuids": ["b518ef77-763f-9cad-856b-8bce12df3759"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".column.max-400",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "e77aeae9-039f-2fac-8f39-c86be0d9b135"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1586332850345
        },
        "a-28": {
            "id": "a-28",
            "title": "Paralax Column / Desktop",
            "continuousParameterGroups": [{
                "id": "a-28-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-28-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".column",
                                "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4"]
                            },
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-28-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".column",
                                "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4"]
                            },
                            "yValue": -100,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1586337738516
        },
        "a-39": {
            "id": "a-39",
            "title": "Open Menu",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-39-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".nav-menu",
                            "selectorGuids": ["64543d99-75fb-49ce-0552-771fd47c88c7"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-39-n-27",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".column.nav-column-2",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "467ffaee-218a-0132-8400-7d3f467d5db1"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-39-n-26",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".column.nav-column",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "71710fc0-f101-4100-5827-8f3e3b2e9f3b"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-39-n-15",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".close-menu",
                            "selectorGuids": ["4cbf8896-64ac-2c27-dda5-2b38803b2964"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-39-n-19",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".column.nav-column",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "71710fc0-f101-4100-5827-8f3e3b2e9f3b"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-39-n-20",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".column.nav-column-2",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "467ffaee-218a-0132-8400-7d3f467d5db1"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-39-n-25",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".nav-details",
                            "selectorGuids": ["a6b9e12c-d0ad-d54e-e576-58f7480b0103"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-39-n-18",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".nav-details",
                            "selectorGuids": ["a6b9e12c-d0ad-d54e-e576-58f7480b0103"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-39-n-16",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".close-menu",
                            "selectorGuids": ["4cbf8896-64ac-2c27-dda5-2b38803b2964"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-39-n-24",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".nav-menu",
                            "selectorGuids": ["64543d99-75fb-49ce-0552-771fd47c88c7"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-39-n-17",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".open-menu",
                            "selectorGuids": ["ecb76d07-5409-2ef6-2dd6-3645c2efe143"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-39-n-21",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 1000,
                        "target": {
                            "selector": ".nav-details",
                            "selectorGuids": ["a6b9e12c-d0ad-d54e-e576-58f7480b0103"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-39-n-28",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".nav-details",
                            "selectorGuids": ["a6b9e12c-d0ad-d54e-e576-58f7480b0103"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-39-n-23",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 1200,
                        "target": {
                            "selector": ".column.nav-column-2",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "467ffaee-218a-0132-8400-7d3f467d5db1"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-39-n-29",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".column.nav-column-2",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "467ffaee-218a-0132-8400-7d3f467d5db1"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-39-n-22",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 1400,
                        "target": {
                            "selector": ".column.nav-column",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "71710fc0-f101-4100-5827-8f3e3b2e9f3b"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-39-n-30",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".column.nav-column",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "71710fc0-f101-4100-5827-8f3e3b2e9f3b"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1586792124330
        },
        "a-43": {
            "id": "a-43",
            "title": "Close Menu",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-43-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".close-menu",
                            "selectorGuids": ["4cbf8896-64ac-2c27-dda5-2b38803b2964"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-43-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".nav-menu",
                            "selectorGuids": ["64543d99-75fb-49ce-0552-771fd47c88c7"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-43-n-11",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".open-menu",
                            "selectorGuids": ["ecb76d07-5409-2ef6-2dd6-3645c2efe143"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-43-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "selector": ".nav-details",
                            "selectorGuids": ["a6b9e12c-d0ad-d54e-e576-58f7480b0103"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-43-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "selector": ".nav-details",
                            "selectorGuids": ["a6b9e12c-d0ad-d54e-e576-58f7480b0103"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-43-n-14",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "selector": ".column.nav-column-2",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "467ffaee-218a-0132-8400-7d3f467d5db1"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-43-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "selector": ".column.nav-column-2",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "467ffaee-218a-0132-8400-7d3f467d5db1"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-43-n-16",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "selector": ".column.nav-column",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "71710fc0-f101-4100-5827-8f3e3b2e9f3b"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-43-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "selector": ".column.nav-column",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "71710fc0-f101-4100-5827-8f3e3b2e9f3b"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1586792124330
        },
        "a-41": {
            "id": "a-41",
            "title": "Hover Nav Link",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-41-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-link-line-fill",
                            "selectorGuids": ["a5dd7e98-f3cc-e04d-ae6d-425c86c5ecf7"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-41-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-link-line-fill",
                            "selectorGuids": ["a5dd7e98-f3cc-e04d-ae6d-425c86c5ecf7"]
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1586792960339
        },
        "a-42": {
            "id": "a-42",
            "title": "Hover Out Nav Link",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-42-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-link-line-fill",
                            "selectorGuids": ["a5dd7e98-f3cc-e04d-ae6d-425c86c5ecf7"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1586792960339
        },
        "a-21": {
            "id": "a-21",
            "title": "Services Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-21-n-12",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cross.cross-2",
                            "selectorGuids": ["6a240027-a617-17f3-599d-b123b5281a58", "31e6c595-9706-d5ee-c93c-2ab55ab6fb66"]
                        },
                        "widthValue": 0,
                        "heightValue": 1,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-21-n-10",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cross.cross-1",
                            "selectorGuids": ["6a240027-a617-17f3-599d-b123b5281a58", "299802c2-c777-4dc7-958c-275ca2fefedf"]
                        },
                        "widthValue": 0,
                        "heightValue": 1,
                        "widthUnit": "PX",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-21-n-9",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cross.cross-1",
                            "selectorGuids": ["6a240027-a617-17f3-599d-b123b5281a58", "299802c2-c777-4dc7-958c-275ca2fefedf"]
                        },
                        "zValue": -45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-21-n-8",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cross.cross-2",
                            "selectorGuids": ["6a240027-a617-17f3-599d-b123b5281a58", "31e6c595-9706-d5ee-c93c-2ab55ab6fb66"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-21-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "value": "none"
                    }
                }, {
                    "id": "a-21-n-18",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-21-n-13",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cross.cross-2",
                            "selectorGuids": ["6a240027-a617-17f3-599d-b123b5281a58", "31e6c595-9706-d5ee-c93c-2ab55ab6fb66"]
                        },
                        "widthValue": 100,
                        "heightValue": 1,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-21-n-11",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cross.cross-1",
                            "selectorGuids": ["6a240027-a617-17f3-599d-b123b5281a58", "299802c2-c777-4dc7-958c-275ca2fefedf"]
                        },
                        "widthValue": 100,
                        "heightValue": 1,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-21-n-14",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".arrow",
                            "selectorGuids": ["445f420f-b704-10ce-b9fa-f122ce32a4de"]
                        },
                        "xValue": 5,
                        "yValue": -2,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-21-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "value": "block"
                    }
                }, {
                    "id": "a-21-n-19",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1586259528410
        },
        "a-22": {
            "id": "a-22",
            "title": "Services Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-22-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".arrow",
                            "selectorGuids": ["445f420f-b704-10ce-b9fa-f122ce32a4de"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-8",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cross.cross-1",
                            "selectorGuids": ["6a240027-a617-17f3-599d-b123b5281a58", "299802c2-c777-4dc7-958c-275ca2fefedf"]
                        },
                        "widthValue": 0,
                        "heightValue": 1,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-22-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cross.cross-2",
                            "selectorGuids": ["6a240027-a617-17f3-599d-b123b5281a58", "31e6c595-9706-d5ee-c93c-2ab55ab6fb66"]
                        },
                        "widthValue": 0,
                        "heightValue": 1,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-22-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1586259528410
        },
        "a-38": {
            "id": "a-38",
            "title": "Preloader",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-38-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".navbar",
                            "selectorGuids": ["64959c40-698a-7415-b18d-f3b7b915dd06"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-38-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".page-wrap",
                            "selectorGuids": ["4d477174-ab6b-f5d2-475a-579349e0d7c8"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-38-n-5",
                    "actionTypeId": "PLUGIN_LOTTIE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".lottie-animation",
                            "selectorGuids": ["33f222d5-0f45-d795-3a04-b0a5e5368cc1"]
                        },
                        "value": 0
                    }
                }, {
                    "id": "a-38-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".page-background",
                            "selectorGuids": ["108d9806-97a8-06e3-a313-9d6b51b55fb0"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-38-n-6",
                    "actionTypeId": "PLUGIN_LOTTIE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2500,
                        "target": {
                            "selector": ".lottie-animation",
                            "selectorGuids": ["33f222d5-0f45-d795-3a04-b0a5e5368cc1"]
                        },
                        "value": 100
                    }
                }, {
                    "id": "a-38-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "selector": ".page-background",
                            "selectorGuids": ["108d9806-97a8-06e3-a313-9d6b51b55fb0"]
                        },
                        "value": 0.3,
                        "unit": ""
                    }
                }, {
                    "id": "a-38-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".page-wrap",
                            "selectorGuids": ["4d477174-ab6b-f5d2-475a-579349e0d7c8"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-38-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "selector": ".navbar",
                            "selectorGuids": ["64959c40-698a-7415-b18d-f3b7b915dd06"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1586791771608
        },
        "a-48": {
            "id": "a-48",
            "title": "Load Home - Storyteller",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-48-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".image.home-3-image",
                            "selectorGuids": ["23326f41-5ed7-0ccb-6398-bda915a4c194", "2e9e2f60-c1f3-5447-e8d5-82c8440f9b36"]
                        },
                        "yValue": 200,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-48-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".navbar",
                            "selectorGuids": ["64959c40-698a-7415-b18d-f3b7b915dd06"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-48-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".image.home-3-image",
                            "selectorGuids": ["23326f41-5ed7-0ccb-6398-bda915a4c194", "2e9e2f60-c1f3-5447-e8d5-82c8440f9b36"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-48-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".column.hero-column",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "49b3d8fb-66b6-8a24-a505-0c5abcf65861"]
                        },
                        "yValue": 200,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-48-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".column.hero-column",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "49b3d8fb-66b6-8a24-a505-0c5abcf65861"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-48-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".featured-project-list-wrapper",
                            "selectorGuids": ["87bc1b4c-bf13-af01-9c78-47f411a501e2"]
                        },
                        "xValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-48-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".featured-project-list-wrapper",
                            "selectorGuids": ["87bc1b4c-bf13-af01-9c78-47f411a501e2"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-48-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "selector": ".image.home-3-image",
                            "selectorGuids": ["23326f41-5ed7-0ccb-6398-bda915a4c194", "2e9e2f60-c1f3-5447-e8d5-82c8440f9b36"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-48-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "selector": ".image.home-3-image",
                            "selectorGuids": ["23326f41-5ed7-0ccb-6398-bda915a4c194", "2e9e2f60-c1f3-5447-e8d5-82c8440f9b36"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-48-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "selector": ".column.hero-column",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "49b3d8fb-66b6-8a24-a505-0c5abcf65861"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-48-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "selector": ".column.hero-column",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "49b3d8fb-66b6-8a24-a505-0c5abcf65861"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-48-n-14",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "selector": ".navbar",
                            "selectorGuids": ["64959c40-698a-7415-b18d-f3b7b915dd06"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-48-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "selector": ".featured-project-list-wrapper",
                            "selectorGuids": ["87bc1b4c-bf13-af01-9c78-47f411a501e2"]
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-48-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "selector": ".featured-project-list-wrapper",
                            "selectorGuids": ["87bc1b4c-bf13-af01-9c78-47f411a501e2"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1586872120879
        },
        "a-12": {
            "id": "a-12",
            "title": "Move Arrow Gallery",
            "continuousParameterGroups": [{
                "id": "a-12-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-12-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hover-mouse",
                                "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd"]
                            },
                            "xValue": -1450,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-12-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hover-mouse",
                                "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd"]
                            },
                            "xValue": 0,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-12-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-12-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hover-mouse",
                                "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd"]
                            },
                            "yValue": -65,
                            "xUnit": "PX",
                            "yUnit": "VH",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-12-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hover-mouse",
                                "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "VH",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1585048504087
        },
        "a-50": {
            "id": "a-50",
            "title": "Load Our Work",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-50-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-text",
                            "selectorGuids": ["a387b8f7-6d6e-84c0-657e-c7622883b6fe"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-50-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-text",
                            "selectorGuids": ["a387b8f7-6d6e-84c0-657e-c7622883b6fe"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-50-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".sideflex",
                            "selectorGuids": ["03fd9ba7-ded8-ea0e-81b6-9e605de2548f"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-50-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".sideflex",
                            "selectorGuids": ["03fd9ba7-ded8-ea0e-81b6-9e605de2548f"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-50-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "selector": ".hero-text",
                            "selectorGuids": ["a387b8f7-6d6e-84c0-657e-c7622883b6fe"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-50-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "selector": ".hero-text",
                            "selectorGuids": ["a387b8f7-6d6e-84c0-657e-c7622883b6fe"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-50-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 100,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "selector": ".sideflex",
                            "selectorGuids": ["03fd9ba7-ded8-ea0e-81b6-9e605de2548f"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-50-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 100,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "selector": ".sideflex",
                            "selectorGuids": ["03fd9ba7-ded8-ea0e-81b6-9e605de2548f"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1586874453987
        },
        "a-53": {
            "id": "a-53",
            "title": "Blog Load",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-53-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".blog-hero-image-mask",
                            "selectorGuids": ["3003a347-ea43-5417-19c3-f3e78ec2c7c2"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-53-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".blog-hero-image-mask",
                            "selectorGuids": ["3003a347-ea43-5417-19c3-f3e78ec2c7c2"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-53-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".column.hero-column",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "49b3d8fb-66b6-8a24-a505-0c5abcf65861"]
                        },
                        "yValue": 200,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-53-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".column.hero-column",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "49b3d8fb-66b6-8a24-a505-0c5abcf65861"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-53-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".blog-date.hero-date",
                            "selectorGuids": ["a02e5769-a15e-048c-8362-6e039f04a7cb", "58a2aa93-be62-e2e5-dad5-f1d2ec8eb6bd"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-53-n-12",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".side-line",
                            "selectorGuids": ["47734650-3895-4270-cce9-e1f56ec9f488"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-53-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "selector": ".blog-hero-image-mask",
                            "selectorGuids": ["3003a347-ea43-5417-19c3-f3e78ec2c7c2"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-53-n-13",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "selector": ".side-line",
                            "selectorGuids": ["47734650-3895-4270-cce9-e1f56ec9f488"]
                        },
                        "widthValue": 66.66,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-53-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutCubic",
                        "duration": 1500,
                        "target": {
                            "selector": ".blog-hero-image-mask",
                            "selectorGuids": ["3003a347-ea43-5417-19c3-f3e78ec2c7c2"]
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-53-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "selector": ".blog-hero-image-mask",
                            "selectorGuids": ["3003a347-ea43-5417-19c3-f3e78ec2c7c2"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-53-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "selector": ".column.hero-column",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "49b3d8fb-66b6-8a24-a505-0c5abcf65861"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-53-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "selector": ".column.hero-column",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "49b3d8fb-66b6-8a24-a505-0c5abcf65861"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-53-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "selector": ".blog-date.hero-date",
                            "selectorGuids": ["a02e5769-a15e-048c-8362-6e039f04a7cb", "58a2aa93-be62-e2e5-dad5-f1d2ec8eb6bd"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1586879424875
        },
        "a-49": {
            "id": "a-49",
            "title": "Paralax Column / Mobile",
            "continuousParameterGroups": [{
                "id": "a-49-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-49-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".column",
                                "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4"]
                            },
                            "yValue": 25,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-49-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".column",
                                "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4"]
                            },
                            "yValue": -25,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1586337738516
        },
        "a-29": {
            "id": "a-29",
            "title": "Scroll Into Blog Item",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-29-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".column.blog-column",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "625d0c30-b19d-65ab-bd8b-3aad48b3cfa0"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-29-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-date",
                            "selectorGuids": ["a02e5769-a15e-048c-8362-6e039f04a7cb"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-29-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-image-mask",
                            "selectorGuids": ["77d60a15-a189-0153-4ba6-66ef354466b0"]
                        },
                        "widthValue": 100,
                        "heightValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-29-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-date",
                            "selectorGuids": ["a02e5769-a15e-048c-8362-6e039f04a7cb"]
                        },
                        "zValue": -90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-29-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-date",
                            "selectorGuids": ["a02e5769-a15e-048c-8362-6e039f04a7cb"]
                        },
                        "xValue": -50,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-29-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-image-warp",
                            "selectorGuids": ["ab483276-b1d4-0bcd-c3f1-505866bf622a"]
                        },
                        "yValue": -50,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-29-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-image-warp",
                            "selectorGuids": ["ab483276-b1d4-0bcd-c3f1-505866bf622a"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-29-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutCubic",
                        "duration": 1500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-image-mask",
                            "selectorGuids": ["77d60a15-a189-0153-4ba6-66ef354466b0"]
                        },
                        "widthValue": 100,
                        "heightValue": 400,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-29-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".column.blog-column",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "625d0c30-b19d-65ab-bd8b-3aad48b3cfa0"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-29-n-14",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-date",
                            "selectorGuids": ["a02e5769-a15e-048c-8362-6e039f04a7cb"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-29-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-date",
                            "selectorGuids": ["a02e5769-a15e-048c-8362-6e039f04a7cb"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-29-n-8",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 200,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-date",
                            "selectorGuids": ["a02e5769-a15e-048c-8362-6e039f04a7cb"]
                        },
                        "zValue": -90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-29-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-date",
                            "selectorGuids": ["a02e5769-a15e-048c-8362-6e039f04a7cb"]
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1586338453418
        },
        "a-59": {
            "id": "a-59",
            "title": "About Load",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-59-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".about-hero-image-mask",
                            "selectorGuids": ["680970ec-2569-618c-a86d-0df06e17b6c3"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-59-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".about-hero-image-wrap",
                            "selectorGuids": ["96d7c55e-0ff3-58d2-46a9-937db7337152"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-59-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".about-hero-image-wrap",
                            "selectorGuids": ["96d7c55e-0ff3-58d2-46a9-937db7337152"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-59-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".jumbo",
                            "selectorGuids": ["53b73772-a88a-3864-d95a-bbafe8aeeffb"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-59-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".jumbo",
                            "selectorGuids": ["53b73772-a88a-3864-d95a-bbafe8aeeffb"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-59-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "inOutCubic",
                        "duration": 1500,
                        "target": {
                            "selector": ".about-hero-image-mask",
                            "selectorGuids": ["680970ec-2569-618c-a86d-0df06e17b6c3"]
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-59-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "selector": ".about-hero-image-wrap",
                            "selectorGuids": ["96d7c55e-0ff3-58d2-46a9-937db7337152"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-59-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "selector": ".about-hero-image-wrap",
                            "selectorGuids": ["96d7c55e-0ff3-58d2-46a9-937db7337152"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-59-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 700,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "selector": ".jumbo",
                            "selectorGuids": ["53b73772-a88a-3864-d95a-bbafe8aeeffb"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-59-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 700,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".jumbo",
                            "selectorGuids": ["53b73772-a88a-3864-d95a-bbafe8aeeffb"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1586934383384
        },
        "a-64": {
            "id": "a-64",
            "title": "Contact Load",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-64-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".about-hero-image-mask",
                            "selectorGuids": ["680970ec-2569-618c-a86d-0df06e17b6c3"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-64-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".about-hero-image-wrap",
                            "selectorGuids": ["96d7c55e-0ff3-58d2-46a9-937db7337152"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-64-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".about-hero-image-wrap",
                            "selectorGuids": ["96d7c55e-0ff3-58d2-46a9-937db7337152"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-64-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".jumbo",
                            "selectorGuids": ["53b73772-a88a-3864-d95a-bbafe8aeeffb"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-64-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".jumbo",
                            "selectorGuids": ["53b73772-a88a-3864-d95a-bbafe8aeeffb"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-64-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".column.c1",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "41dbfb80-fa86-18b0-dde4-ba2486fc94de"]
                        },
                        "yValue": 50,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-64-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".column.c2",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "ddfcf086-6dfd-3668-1500-73758d224e92"]
                        },
                        "yValue": 50,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-64-n-13",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".column.c3",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "a1a702ad-8c4b-7d32-bc87-af4828082909"]
                        },
                        "yValue": 50,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-64-n-14",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".column.c1",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "41dbfb80-fa86-18b0-dde4-ba2486fc94de"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-64-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".column.c2",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "ddfcf086-6dfd-3668-1500-73758d224e92"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-64-n-16",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".column.c3",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "a1a702ad-8c4b-7d32-bc87-af4828082909"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-64-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "inOutCubic",
                        "duration": 1500,
                        "target": {
                            "selector": ".about-hero-image-mask",
                            "selectorGuids": ["680970ec-2569-618c-a86d-0df06e17b6c3"]
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-64-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "selector": ".about-hero-image-wrap",
                            "selectorGuids": ["96d7c55e-0ff3-58d2-46a9-937db7337152"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-64-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "selector": ".about-hero-image-wrap",
                            "selectorGuids": ["96d7c55e-0ff3-58d2-46a9-937db7337152"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-64-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 700,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "selector": ".jumbo",
                            "selectorGuids": ["53b73772-a88a-3864-d95a-bbafe8aeeffb"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-64-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 700,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".jumbo",
                            "selectorGuids": ["53b73772-a88a-3864-d95a-bbafe8aeeffb"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-64-n-17",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 700,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "selector": ".column.c1",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "41dbfb80-fa86-18b0-dde4-ba2486fc94de"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-64-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 700,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "selector": ".column.c1",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "41dbfb80-fa86-18b0-dde4-ba2486fc94de"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-64-n-18",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 900,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "selector": ".column.c2",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "ddfcf086-6dfd-3668-1500-73758d224e92"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-64-n-21",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 900,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "selector": ".column.c2",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "ddfcf086-6dfd-3668-1500-73758d224e92"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-64-n-19",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1100,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "selector": ".column.c3",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "a1a702ad-8c4b-7d32-bc87-af4828082909"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-64-n-22",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 1100,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "selector": ".column.c3",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "a1a702ad-8c4b-7d32-bc87-af4828082909"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1586934383384
        },
        "a-65": {
            "id": "a-65",
            "title": "Load Team Member",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-65-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".team-member-image-mask",
                            "selectorGuids": ["ee3d41d6-8437-ccf3-6192-23bfde19fff8"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-65-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".team-member-image-wrap.on-page-member",
                            "selectorGuids": ["a00644fb-f323-74e9-a5fc-616426c9d66a", "3f867f2c-3ef8-a26d-c712-e9b9f142cf52"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-65-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".team-member-image-wrap.on-page-member",
                            "selectorGuids": ["a00644fb-f323-74e9-a5fc-616426c9d66a", "3f867f2c-3ef8-a26d-c712-e9b9f142cf52"]
                        },
                        "yValue": -50,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-65-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".column.max-700",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "3f508725-cde6-7168-87c2-1bd2685b79b9"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-65-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "inOutCubic",
                        "duration": 1500,
                        "target": {
                            "selector": ".team-member-image-mask",
                            "selectorGuids": ["ee3d41d6-8437-ccf3-6192-23bfde19fff8"]
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-65-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".team-member-image-wrap.on-page-member",
                            "selectorGuids": ["a00644fb-f323-74e9-a5fc-616426c9d66a", "3f867f2c-3ef8-a26d-c712-e9b9f142cf52"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-65-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "selector": ".team-member-image-wrap.on-page-member",
                            "selectorGuids": ["a00644fb-f323-74e9-a5fc-616426c9d66a", "3f867f2c-3ef8-a26d-c712-e9b9f142cf52"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-65-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 700,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "selector": ".column.max-700",
                            "selectorGuids": ["0cd03fa9-9b9c-fc05-12cf-3835ba4a06b4", "3f508725-cde6-7168-87c2-1bd2685b79b9"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1586937316580
        },
        "a-66": {
            "id": "a-66",
            "title": "Load Blog Hero",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-66-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".image.blog-post-image",
                            "selectorGuids": ["23326f41-5ed7-0ccb-6398-bda915a4c194", "a0becb29-28a5-5691-efcd-39e96af69ee1"]
                        },
                        "yValue": 200,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-66-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".image.blog-post-image",
                            "selectorGuids": ["23326f41-5ed7-0ccb-6398-bda915a4c194", "a0becb29-28a5-5691-efcd-39e96af69ee1"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-66-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "yValue": 200,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-66-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-66-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".navbar",
                            "selectorGuids": ["64959c40-698a-7415-b18d-f3b7b915dd06"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-66-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "selector": ".image.blog-post-image",
                            "selectorGuids": ["23326f41-5ed7-0ccb-6398-bda915a4c194", "a0becb29-28a5-5691-efcd-39e96af69ee1"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-66-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "selector": ".image.blog-post-image",
                            "selectorGuids": ["23326f41-5ed7-0ccb-6398-bda915a4c194", "a0becb29-28a5-5691-efcd-39e96af69ee1"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-66-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {},
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-66-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "",
                        "duration": 1000,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-66-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".navbar",
                            "selectorGuids": ["64959c40-698a-7415-b18d-f3b7b915dd06"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1586938027527
        },
        "a-67": {
            "id": "a-67",
            "title": "Load Service Post",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-67-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".container.service-hero",
                            "selectorGuids": ["2afd2d87-7b22-76a6-9e35-d06d4fedf3e4", "1d4a2950-53f4-6698-2721-4116a1c6ce7f"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-67-n-10",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".side-line._20-margin",
                            "selectorGuids": ["47734650-3895-4270-cce9-e1f56ec9f488", "5b187d6a-67d1-9582-94bf-290417e51ccd"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-67-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".container.service-hero",
                            "selectorGuids": ["2afd2d87-7b22-76a6-9e35-d06d4fedf3e4", "1d4a2950-53f4-6698-2721-4116a1c6ce7f"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-67-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "selector": ".container.c2",
                            "selectorGuids": ["2afd2d87-7b22-76a6-9e35-d06d4fedf3e4", "00dead02-84b8-1761-2536-6bf84bb18252"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-67-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "selector": ".container.c1",
                            "selectorGuids": ["2afd2d87-7b22-76a6-9e35-d06d4fedf3e4", "e6da179f-e923-5b45-fdc8-53e6c9c20eef"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-67-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "selector": ".container.service-hero",
                            "selectorGuids": ["2afd2d87-7b22-76a6-9e35-d06d4fedf3e4", "1d4a2950-53f4-6698-2721-4116a1c6ce7f"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-67-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "selector": ".side-line._20-margin",
                            "selectorGuids": ["47734650-3895-4270-cce9-e1f56ec9f488", "5b187d6a-67d1-9582-94bf-290417e51ccd"]
                        },
                        "widthValue": 66.6,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-67-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".container.service-hero",
                            "selectorGuids": ["2afd2d87-7b22-76a6-9e35-d06d4fedf3e4", "1d4a2950-53f4-6698-2721-4116a1c6ce7f"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-67-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 700,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "selector": ".container.c2",
                            "selectorGuids": ["2afd2d87-7b22-76a6-9e35-d06d4fedf3e4", "00dead02-84b8-1761-2536-6bf84bb18252"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-67-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 700,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "selector": ".container.c1",
                            "selectorGuids": ["2afd2d87-7b22-76a6-9e35-d06d4fedf3e4", "e6da179f-e923-5b45-fdc8-53e6c9c20eef"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1586938729851
        },
        "a-58": {
            "id": "a-58",
            "title": "Basic Scroll Into",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-58-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "63e9323160afc24ee8adcbec|c9d92d90-4aa0-e420-5aaf-f8477bb92b23"
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-58-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "63e9323160afc24ee8adcbec|c9d92d90-4aa0-e420-5aaf-f8477bb92b23"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-58-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": true,
                            "id": "63e9323160afc24ee8adcbec|c9d92d90-4aa0-e420-5aaf-f8477bb92b23"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-58-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "63e9323160afc24ee8adcbec|c9d92d90-4aa0-e420-5aaf-f8477bb92b23"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1586881576460
        },
        "a-68": {
            "id": "a-68",
            "title": "Load Work Post",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-68-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".f-image-wrap",
                            "selectorGuids": ["23102f1b-bbe1-b8e3-3eac-6e178ef5c646"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-68-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".f-image-wrap",
                            "selectorGuids": ["23102f1b-bbe1-b8e3-3eac-6e178ef5c646"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-68-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".f-image-mask",
                            "selectorGuids": ["97408b5b-6802-c066-c8eb-3343c8031b25"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-68-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-text",
                            "selectorGuids": ["a387b8f7-6d6e-84c0-657e-c7622883b6fe"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-68-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-text",
                            "selectorGuids": ["a387b8f7-6d6e-84c0-657e-c7622883b6fe"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-68-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".link.back-link",
                            "selectorGuids": ["b566e9e1-4c18-4120-69ee-88a8aa1fbf96", "33796ed4-d5a9-a385-f5b2-8ac4bce5e902"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-68-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "selector": ".f-image-wrap",
                            "selectorGuids": ["23102f1b-bbe1-b8e3-3eac-6e178ef5c646"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-68-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "inOutCubic",
                        "duration": 1500,
                        "target": {
                            "selector": ".f-image-mask",
                            "selectorGuids": ["97408b5b-6802-c066-c8eb-3343c8031b25"]
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-68-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "selector": ".f-image-wrap",
                            "selectorGuids": ["23102f1b-bbe1-b8e3-3eac-6e178ef5c646"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-68-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 700,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "selector": ".hero-text",
                            "selectorGuids": ["a387b8f7-6d6e-84c0-657e-c7622883b6fe"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-68-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 700,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "selector": ".hero-text",
                            "selectorGuids": ["a387b8f7-6d6e-84c0-657e-c7622883b6fe"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-68-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 700,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "selector": ".link.back-link",
                            "selectorGuids": ["b566e9e1-4c18-4120-69ee-88a8aa1fbf96", "33796ed4-d5a9-a385-f5b2-8ac4bce5e902"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1586868126605
        },
        "a-37": {
            "id": "a-37",
            "title": "Move Left Or Right",
            "continuousParameterGroups": [{
                "id": "a-37-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-37-n-5",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".after-image-mask",
                                "selectorGuids": ["e4ca1279-bab2-fcb1-cc3e-a65ac0b539d9"]
                            },
                            "widthValue": 0,
                            "widthUnit": "%",
                            "heightUnit": "PX",
                            "locked": false
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-37-n-7",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".after-image-mask",
                                "selectorGuids": ["e4ca1279-bab2-fcb1-cc3e-a65ac0b539d9"]
                            },
                            "widthValue": 100,
                            "widthUnit": "%",
                            "heightUnit": "PX",
                            "locked": false
                        }
                    }]
                }]
            }, {
                "id": "a-37-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": []
            }],
            "createdOn": 1586347320041
        },
        "a-52": {
            "id": "a-52",
            "title": "Scroll Into BA Image",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-52-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "63e9323160afc25d08adcba8|208d2855-8ea4-ce38-d32f-9798468fa82c"
                        },
                        "yValue": 200,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-52-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "63e9323160afc25d08adcba8|208d2855-8ea4-ce38-d32f-9798468fa82c"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-52-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": true,
                            "id": "63e9323160afc25d08adcba8|208d2855-8ea4-ce38-d32f-9798468fa82c"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-52-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "63e9323160afc25d08adcba8|208d2855-8ea4-ce38-d32f-9798468fa82c"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1586875388442
        },
        "a-70": {
            "id": "a-70",
            "title": "Scroll Into What We Did / Desktop",
            "continuousParameterGroups": [{
                "id": "a-70-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-70-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-desc-wrap",
                                "selectorGuids": ["ed09a1f2-5015-f02d-53f2-b2fe80f105ae"]
                            },
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-70-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-desc-wrap",
                                "selectorGuids": ["ed09a1f2-5015-f02d-53f2-b2fe80f105ae"]
                            },
                            "yValue": -100,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1586940272606
        },
        "a-71": {
            "id": "a-71",
            "title": "Scroll Into What We Did / Mobile",
            "continuousParameterGroups": [{
                "id": "a-71-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-71-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-desc-wrap",
                                "selectorGuids": ["ed09a1f2-5015-f02d-53f2-b2fe80f105ae"]
                            },
                            "yValue": 50,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-71-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-desc-wrap",
                                "selectorGuids": ["ed09a1f2-5015-f02d-53f2-b2fe80f105ae"]
                            },
                            "yValue": -50,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1586940272606
        },
        "a-72": {
            "id": "a-72",
            "title": "Hover Sitemap",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-72-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".sitemap-list",
                            "selectorGuids": ["b6a54c44-4dec-96cd-e92c-1ef905f8ebaf"]
                        },
                        "yValue": 50,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-72-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".sitemap-list",
                            "selectorGuids": ["b6a54c44-4dec-96cd-e92c-1ef905f8ebaf"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-72-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".sitemap-list",
                            "selectorGuids": ["b6a54c44-4dec-96cd-e92c-1ef905f8ebaf"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-72-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".sitemap-list",
                            "selectorGuids": ["b6a54c44-4dec-96cd-e92c-1ef905f8ebaf"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1586946654776
        },
        "a-73": {
            "id": "a-73",
            "title": "Hover Out Sitemap",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-73-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".sitemap-list",
                            "selectorGuids": ["b6a54c44-4dec-96cd-e92c-1ef905f8ebaf"]
                        },
                        "yValue": 50,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-73-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".sitemap-list",
                            "selectorGuids": ["b6a54c44-4dec-96cd-e92c-1ef905f8ebaf"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1586946654776
        },
        "a-74": {
            "id": "a-74",
            "title": "Close Sitemap",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-74-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".preview-content",
                            "selectorGuids": ["405ade11-596b-a2b7-6f4e-a4661e76fc1e"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-74-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".preview-content",
                            "selectorGuids": ["405ade11-596b-a2b7-6f4e-a4661e76fc1e"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-74-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".preview-content",
                            "selectorGuids": ["405ade11-596b-a2b7-6f4e-a4661e76fc1e"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1586946767749
        },
        "a-75": {
            "id": "a-75",
            "title": "Open Sitemap",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-75-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".preview-content",
                            "selectorGuids": ["405ade11-596b-a2b7-6f4e-a4661e76fc1e"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-75-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".preview-content",
                            "selectorGuids": ["405ade11-596b-a2b7-6f4e-a4661e76fc1e"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-75-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".preview-content",
                            "selectorGuids": ["405ade11-596b-a2b7-6f4e-a4661e76fc1e"]
                        },
                        "value": "flex"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1586946767749
        },
        "a-76": {
            "id": "a-76",
            "title": "Hover Sitemap",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-76-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".preview-trigger-icon",
                            "selectorGuids": ["c71df50f-b699-6ec6-296f-ddb0c733934b"]
                        },
                        "yValue": -5,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1586947043548
        },
        "a-77": {
            "id": "a-77",
            "title": "Hover Out Sitemap",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-77-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".preview-trigger-icon",
                            "selectorGuids": ["c71df50f-b699-6ec6-296f-ddb0c733934b"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1586947043548
        },
        "a-63": {
            "id": "a-63",
            "title": "Scroll Into History Item",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-63-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "63e9323160afc2e87badcba7|2e97d7d8-255d-65f1-6673-e0d4996d4c7c"
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-63-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "63e9323160afc2e87badcba7|2e97d7d8-255d-65f1-6673-e0d4996d4c7c"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-63-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": true,
                            "id": "63e9323160afc2e87badcba7|2e97d7d8-255d-65f1-6673-e0d4996d4c7c"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-63-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "63e9323160afc2e87badcba7|2e97d7d8-255d-65f1-6673-e0d4996d4c7c"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1586935108367
        },
        "a-56": {
            "id": "a-56",
            "title": "Services Hover Standard",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-56-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cross.cross-2",
                            "selectorGuids": ["6a240027-a617-17f3-599d-b123b5281a58", "31e6c595-9706-d5ee-c93c-2ab55ab6fb66"]
                        },
                        "widthValue": 0,
                        "heightValue": 1,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-56-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cross.cross-1",
                            "selectorGuids": ["6a240027-a617-17f3-599d-b123b5281a58", "299802c2-c777-4dc7-958c-275ca2fefedf"]
                        },
                        "widthValue": 0,
                        "heightValue": 1,
                        "widthUnit": "PX",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-56-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cross.cross-1",
                            "selectorGuids": ["6a240027-a617-17f3-599d-b123b5281a58", "299802c2-c777-4dc7-958c-275ca2fefedf"]
                        },
                        "zValue": -45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-56-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cross.cross-2",
                            "selectorGuids": ["6a240027-a617-17f3-599d-b123b5281a58", "31e6c595-9706-d5ee-c93c-2ab55ab6fb66"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-56-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cross.cross-2",
                            "selectorGuids": ["6a240027-a617-17f3-599d-b123b5281a58", "31e6c595-9706-d5ee-c93c-2ab55ab6fb66"]
                        },
                        "widthValue": 100,
                        "heightValue": 1,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-56-n-8",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cross.cross-1",
                            "selectorGuids": ["6a240027-a617-17f3-599d-b123b5281a58", "299802c2-c777-4dc7-958c-275ca2fefedf"]
                        },
                        "widthValue": 100,
                        "heightValue": 1,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-56-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".arrow",
                            "selectorGuids": ["445f420f-b704-10ce-b9fa-f122ce32a4de"]
                        },
                        "xValue": 5,
                        "yValue": -2,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1586259528410
        },
        "a-57": {
            "id": "a-57",
            "title": "Services Hover Out Standard",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-57-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".arrow",
                            "selectorGuids": ["445f420f-b704-10ce-b9fa-f122ce32a4de"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-57-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cross.cross-1",
                            "selectorGuids": ["6a240027-a617-17f3-599d-b123b5281a58", "299802c2-c777-4dc7-958c-275ca2fefedf"]
                        },
                        "widthValue": 0,
                        "heightValue": 1,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-57-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cross.cross-2",
                            "selectorGuids": ["6a240027-a617-17f3-599d-b123b5281a58", "31e6c595-9706-d5ee-c93c-2ab55ab6fb66"]
                        },
                        "widthValue": 0,
                        "heightValue": 1,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1586259528410
        },
        "a-79": {
            "id": "a-79",
            "title": "Nav Color Position 2",
            "continuousParameterGroups": [{
                "id": "a-79-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-79-n",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".navbar",
                                "selectorGuids": ["64959c40-698a-7415-b18d-f3b7b915dd06"]
                            },
                            "globalSwatchId": "",
                            "rValue": 255,
                            "bValue": 255,
                            "gValue": 255,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 1,
                    "actionItems": [{
                        "id": "a-79-n-2",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".navbar",
                                "selectorGuids": ["64959c40-698a-7415-b18d-f3b7b915dd06"]
                            },
                            "globalSwatchId": "96e0a42b",
                            "rValue": 255,
                            "bValue": 255,
                            "gValue": 255,
                            "aValue": 1
                        }
                    }]
                }]
            }],
            "createdOn": 1588071535675
        },
        "a-78": {
            "id": "a-78",
            "title": "Nav Color",
            "continuousParameterGroups": [{
                "id": "a-78-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-78-n",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".navbar",
                                "selectorGuids": ["64959c40-698a-7415-b18d-f3b7b915dd06"]
                            },
                            "globalSwatchId": "",
                            "rValue": 255,
                            "bValue": 255,
                            "gValue": 255,
                            "aValue": 0
                        }
                    }]
                }, {
                    "keyframe": 10,
                    "actionItems": [{
                        "id": "a-78-n-2",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".navbar",
                                "selectorGuids": ["64959c40-698a-7415-b18d-f3b7b915dd06"]
                            },
                            "globalSwatchId": "96e0a42b",
                            "rValue": 255,
                            "bValue": 255,
                            "gValue": 255,
                            "aValue": 1
                        }
                    }]
                }]
            }],
            "createdOn": 1588071535675
        },
        "a-23": {
            "id": "a-23",
            "title": "Scroll Into Services",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-23-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".sticky-labels",
                            "selectorGuids": ["fb41d6b6-af31-0d16-2487-0bae05cec6ca"]
                        },
                        "xValue": 50,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-23-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".services-column",
                            "selectorGuids": ["2ed70e6d-387c-c3c2-cdd3-05aea982035a"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-23-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-23-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".sticky-labels",
                            "selectorGuids": ["fb41d6b6-af31-0d16-2487-0bae05cec6ca"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-23-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".sticky-labels",
                            "selectorGuids": ["fb41d6b6-af31-0d16-2487-0bae05cec6ca"]
                        },
                        "zValue": 90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-23-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "widthValue": 60,
                        "heightValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".services-column",
                            "selectorGuids": ["2ed70e6d-387c-c3c2-cdd3-05aea982035a"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-23-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {},
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-23-n-8",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutCubic",
                        "duration": 1500,
                        "target": {},
                        "widthValue": 60,
                        "heightValue": 800,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-23-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".sticky-labels",
                            "selectorGuids": ["fb41d6b6-af31-0d16-2487-0bae05cec6ca"]
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-23-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 200,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".sticky-labels",
                            "selectorGuids": ["fb41d6b6-af31-0d16-2487-0bae05cec6ca"]
                        },
                        "zValue": 90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-23-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".sticky-labels",
                            "selectorGuids": ["fb41d6b6-af31-0d16-2487-0bae05cec6ca"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1586330796341
        },
        "a-24": {
            "id": "a-24",
            "title": "Paralax Services / Desktop",
            "continuousParameterGroups": [{
                "id": "a-24-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-24-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".services-column",
                                "selectorGuids": ["2ed70e6d-387c-c3c2-cdd3-05aea982035a"]
                            },
                            "yValue": 150,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-24-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".services-column",
                                "selectorGuids": ["2ed70e6d-387c-c3c2-cdd3-05aea982035a"]
                            },
                            "yValue": -150,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1586330967889
        },
        "a-46": {
            "id": "a-46",
            "title": "Paralax Services / Mobile",
            "continuousParameterGroups": [{
                "id": "a-46-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-46-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".services-column",
                                "selectorGuids": ["2ed70e6d-387c-c3c2-cdd3-05aea982035a"]
                            },
                            "yValue": 50,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-46-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".services-column",
                                "selectorGuids": ["2ed70e6d-387c-c3c2-cdd3-05aea982035a"]
                            },
                            "yValue": -50,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1586330967889
        },
        "a-98": {
            "id": "a-98",
            "title": "Service card hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-98-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-2",
                            "selectorGuids": ["d7ec42f6-6970-ba09-ae4d-13972b0b4317"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-98-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".services-column",
                            "selectorGuids": ["2ed70e6d-387c-c3c2-cdd3-05aea982035a"]
                        },
                        "globalSwatchId": "0add1e55",
                        "rValue": 251,
                        "bValue": 22,
                        "gValue": 182,
                        "aValue": 1
                    }
                }, {
                    "id": "a-98-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".heading-5",
                            "selectorGuids": ["8de0e87d-bf5f-ef30-41df-c75632794a53"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-98-n-3",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".paragraph-3",
                            "selectorGuids": ["8d89b236-3079-e2ae-9e78-73399893d83f"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-98-n-4",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".separation-line.service-line",
                            "selectorGuids": ["3053d910-5b81-8213-89c6-d22655bf2561", "f6794a04-1a11-e3b6-5ffe-d94a5fba1dce"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-98-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-2",
                            "selectorGuids": ["d7ec42f6-6970-ba09-ae4d-13972b0b4317"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-98-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".services-column",
                            "selectorGuids": ["2ed70e6d-387c-c3c2-cdd3-05aea982035a"]
                        },
                        "xValue": 0.99,
                        "yValue": 0.99,
                        "locked": true
                    }
                }, {
                    "id": "a-98-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-3.absolute",
                            "selectorGuids": ["1b19e777-a2ab-c126-ee38-d0d9cef43865", "c9076071-e882-505c-9a60-a438b200efcd"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1642568078557
        },
        "a-99": {
            "id": "a-99",
            "title": "Service card hover out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-99-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "easeOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".services-column",
                            "selectorGuids": ["2ed70e6d-387c-c3c2-cdd3-05aea982035a"]
                        },
                        "globalSwatchId": "e14007d5",
                        "rValue": 247,
                        "bValue": 247,
                        "gValue": 247,
                        "aValue": 1
                    }
                }, {
                    "id": "a-99-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "easeOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".heading-5",
                            "selectorGuids": ["8de0e87d-bf5f-ef30-41df-c75632794a53"]
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 1
                    }
                }, {
                    "id": "a-99-n-3",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "easeOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".paragraph-3",
                            "selectorGuids": ["8d89b236-3079-e2ae-9e78-73399893d83f"]
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 1
                    }
                }, {
                    "id": "a-99-n-4",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "easeOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".separation-line.service-line",
                            "selectorGuids": ["3053d910-5b81-8213-89c6-d22655bf2561", "f6794a04-1a11-e3b6-5ffe-d94a5fba1dce"]
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 1
                    }
                }, {
                    "id": "a-99-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "easeOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".services-column",
                            "selectorGuids": ["2ed70e6d-387c-c3c2-cdd3-05aea982035a"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-99-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-2",
                            "selectorGuids": ["d7ec42f6-6970-ba09-ae4d-13972b0b4317"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-99-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-3.absolute",
                            "selectorGuids": ["1b19e777-a2ab-c126-ee38-d0d9cef43865", "c9076071-e882-505c-9a60-a438b200efcd"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1642568078557
        },
        "a-106": {
            "id": "a-106",
            "title": "Sliding Cards",
            "continuousParameterGroups": [{
                "id": "a-106-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-106-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63e9323160afc2a669adcb95|46b3ac12-00ff-b0b0-9dd5-c908aa5e12ed"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-106-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".learn_wrapper",
                                "selectorGuids": ["0467159a-8f61-1a29-5793-e545554f5938"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 70,
                    "actionItems": [{
                        "id": "a-106-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63e9323160afc2a669adcb95|46b3ac12-00ff-b0b0-9dd5-c908aa5e12ed"
                            },
                            "yValue": -60,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-106-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".learn_wrapper",
                                "selectorGuids": ["0467159a-8f61-1a29-5793-e545554f5938"]
                            },
                            "yValue": -60,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1567095866590
        },
        "a-51": {
            "id": "a-51",
            "title": "Load Before After",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-51-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-text",
                            "selectorGuids": ["a387b8f7-6d6e-84c0-657e-c7622883b6fe"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-51-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".side-line",
                            "selectorGuids": ["47734650-3895-4270-cce9-e1f56ec9f488"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-51-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-text",
                            "selectorGuids": ["a387b8f7-6d6e-84c0-657e-c7622883b6fe"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-51-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "yValue": 200,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-51-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-51-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "selector": ".hero-text",
                            "selectorGuids": ["a387b8f7-6d6e-84c0-657e-c7622883b6fe"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-51-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "selector": ".hero-text",
                            "selectorGuids": ["a387b8f7-6d6e-84c0-657e-c7622883b6fe"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-51-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 200,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "selector": ".side-line",
                            "selectorGuids": ["47734650-3895-4270-cce9-e1f56ec9f488"]
                        },
                        "widthValue": 66.66,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-51-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {},
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-51-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 1000,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1586875185781
        },
        "a-131": {
            "id": "a-131",
            "title": "Design Phases",
            "continuousParameterGroups": [{
                "id": "a-131-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-131-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-block-16",
                                "selectorGuids": ["cda63a5e-c008-9e2c-0174-e47125f0f409"]
                            },
                            "xValue": 19,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-131-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-block-16",
                                "selectorGuids": ["cda63a5e-c008-9e2c-0174-e47125f0f409"]
                            },
                            "xValue": -20,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1647034009643
        },
        "a-137": {
            "id": "a-137",
            "title": "Paralax Services / Desktop 2",
            "continuousParameterGroups": [{
                "id": "a-137-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-137-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".services-column",
                                "selectorGuids": ["2ed70e6d-387c-c3c2-cdd3-05aea982035a"]
                            },
                            "yValue": 150,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-137-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".services-column",
                                "selectorGuids": ["2ed70e6d-387c-c3c2-cdd3-05aea982035a"]
                            },
                            "yValue": -150,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1586330967889
        },
        "a-138": {
            "id": "a-138",
            "title": "Paralax Services / Mobile 2",
            "continuousParameterGroups": [{
                "id": "a-138-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-138-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".services-column",
                                "selectorGuids": ["2ed70e6d-387c-c3c2-cdd3-05aea982035a"]
                            },
                            "yValue": 50,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-138-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".services-column",
                                "selectorGuids": ["2ed70e6d-387c-c3c2-cdd3-05aea982035a"]
                            },
                            "yValue": -50,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1586330967889
        },
        "a-139": {
            "id": "a-139",
            "title": "Scroll Into Services 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-139-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".sticky-labels",
                            "selectorGuids": ["fb41d6b6-af31-0d16-2487-0bae05cec6ca"]
                        },
                        "xValue": 50,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-139-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".services-column",
                            "selectorGuids": ["2ed70e6d-387c-c3c2-cdd3-05aea982035a"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-139-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-139-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".sticky-labels",
                            "selectorGuids": ["fb41d6b6-af31-0d16-2487-0bae05cec6ca"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-139-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".sticky-labels",
                            "selectorGuids": ["fb41d6b6-af31-0d16-2487-0bae05cec6ca"]
                        },
                        "zValue": 90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-139-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "widthValue": 60,
                        "heightValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-139-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".services-column",
                            "selectorGuids": ["2ed70e6d-387c-c3c2-cdd3-05aea982035a"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-139-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {},
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-139-n-9",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutCubic",
                        "duration": 1500,
                        "target": {},
                        "widthValue": 60,
                        "heightValue": 800,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-139-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "outExpo",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".sticky-labels",
                            "selectorGuids": ["fb41d6b6-af31-0d16-2487-0bae05cec6ca"]
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-139-n-11",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 200,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".sticky-labels",
                            "selectorGuids": ["fb41d6b6-af31-0d16-2487-0bae05cec6ca"]
                        },
                        "zValue": 90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-139-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".sticky-labels",
                            "selectorGuids": ["fb41d6b6-af31-0d16-2487-0bae05cec6ca"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1586330796341
        },
        "a-136": {
            "id": "a-136",
            "title": "Move Arrow Gallery 2",
            "continuousParameterGroups": [{
                "id": "a-136-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-136-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hover-mouse",
                                "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd"]
                            },
                            "xValue": -1450,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-136-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hover-mouse",
                                "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd"]
                            },
                            "xValue": 0,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-136-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-136-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hover-mouse",
                                "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd"]
                            },
                            "yValue": -65,
                            "xUnit": "PX",
                            "yUnit": "VH",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-136-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hover-mouse",
                                "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "VH",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1585048504087
        },
        "a-134": {
            "id": "a-134",
            "title": "Show Project Arrow 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-134-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hover-mouse",
                            "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-134-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hover-mouse",
                            "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-134-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hover-mouse",
                            "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-134-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hover-mouse",
                            "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd"]
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1585048555143
        },
        "a-135": {
            "id": "a-135",
            "title": "Hide Project Arrow 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-135-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hover-mouse",
                            "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-135-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hover-mouse",
                            "selectorGuids": ["545abf80-3f25-33e1-fffb-c3c7dcf7a3dd"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1585048555143
        },
        "a-132": {
            "id": "a-132",
            "title": "Hover Slider Arrow 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-132-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".slider-button",
                            "selectorGuids": ["f1304288-f64e-b100-b478-ba5891976635"]
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1585048212984
        },
        "a-133": {
            "id": "a-133",
            "title": "Hover Out Slider Arrow 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-133-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".slider-button",
                            "selectorGuids": ["f1304288-f64e-b100-b478-ba5891976635"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1585048212984
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});
