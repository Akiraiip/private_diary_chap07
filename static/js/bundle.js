!function(e) {
    var o = {};
    function t(i) {
        if (o[i])
            return o[i].exports;
        var n = o[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(n.exports, n, n.exports, t),
        n.l = !0,
        n.exports
    }
    t.m = e,
    t.c = o,
    t.d = function(e, o, i) {
        t.o(e, o) || Object.defineProperty(e, o, {
            enumerable: !0,
            get: i
        })
    }
    ,
    t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    t.t = function(e, o) {
        if (1 & o && (e = t(e)),
        8 & o)
            return e;
        if (4 & o && "object" == typeof e && e && e.__esModule)
            return e;
        var i = Object.create(null);
        if (t.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }),
        2 & o && "string" != typeof e)
            for (var n in e)
                t.d(i, n, function(o) {
                    return e[o]
                }
                .bind(null, n));
        return i
    }
    ,
    t.n = function(e) {
        var o = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(o, "a", o),
        o
    }
    ,
    t.o = function(e, o) {
        return Object.prototype.hasOwnProperty.call(e, o)
    }
    ,
    t.p = "",
    t(t.s = 0)
}([function(e, o, t) {
    e.exports = t(1)
}
, function(e, o, t) {
    t(2).init()
}
, function(e, o) {
    e.exports.init = function() {
        !function(e, o, t) {
            "use strict";
            let i, n = 0, a = e(o);
            i = i || {
                debug: !1,
                Page: null,
                BREAK_POINT_TAB: 900,
                BREAK_POINT_SP: 768,
                Window: {
                    $window: null,
                    $document: null,
                    width: 0,
                    height: 0
                },
                LAYOUT_MODE: "pc",
                current_layout_mode: "pc",
                user_agent: null,
                is_mobile: !1,
                is_tablet: !1,
                is_android: !1,
                is_windows: !1,
                is_mac: !1,
                is_ie: !1,
                is_ie6: !1,
                is_ie7: !1,
                is_ie8: !1,
                is_ie9: !1,
                is_ie10: !1,
                is_ie11: !1,
                is_chrome: !1,
                is_safari: !1,
                is_opera: !1,
                is_firefox: !1,
                is_edge: !1,
                loaded_img_len: 0,
                wheel_accel: 3,
                wheel_accel_content: 3,
                img_len: 0,
                img_src_ary: [],
                is_load_complete: !1,
                is_intro_play: !1,
                is_intro_skip: !1,
                is_lock: !1,
                initial: ";oja4t4",
                isLock: function(o) {
                    return i.trace("Common -> isLock()"),
                    void 0 !== o && (i.is_lock = o,
                    i.debug && (!0 === o ? e(".debug__flag__is_lock").addClass("true") : e(".debug__flag__is_lock").removeClass("true"))),
                    i.is_lock
                },
                $body: null,
                timeout_timer: null,
                timeout_limit: 2e3,
                $global: null,
                $global_btn: null,
                $global_sns: null,
                $indicator: null,
                $pages: null,
                $backgrounds: null,
                $under_btn: null,
                currentId: "",
                nextId: "",
                scroll_direction: "",
                setupOnce: function() {
                    i.trace("Common -> setupOnce()"),
                    i.$body = e("body"),
                    i.$global = e("#global"),
                    i.$global_btn = e("#globalBtn"),
                    i.$global_sns = e(".fixed__sns"),
                    i.$indicator = e("#indicator"),
                    i.$pages = e(".page"),
                    i.$backgrounds = e(".splash__bg"),
                    i.$under_btn = e(".underBtn"),
                    i.Indicator.init(),
                    i.MainLogo.init(),
                    i.URL_QUERY = i.getURLQuery(),
                    i.URL_QUERY.debug && (i.debug = !0),
                    i.debug && (o.Common = i),
                    e("p").each((function(o, t) {
                        e(t);
                        e(t).html()
                    }
                    )),
                    i.Window.$window = e(o),
                    i.Window.$document = e(document),
                    i.Window.width = i.Window.$window.width(),
                    i.Window.height = i.Window.$window.height(),
                    i.user_agent = i.setUserAgent(),
                    this.is_windows ? (this.wheel_accel = 60,
                    i.wheel_accel_content = 20) : (this.wheel_accel = 30,
                    i.wheel_accel_content = 5),
                    i.Window.width <= i.BREAK_POINT_SP || i.user_agent.Mobile ? i.LAYOUT_MODE = "sp" : i.LAYOUT_MODE = "pc",
                    i.current_layout_mode = i.LAYOUT_MODE,
                    i.initPreLoader()
                },
                setHoverEvent: function() {
                    i.trace("Common -> setHoverEvent()"),
                    i.user_agent.iOS ? e("a,.c-hover").bind({
                        touchstart: function() {
                            e(this).addClass("hover")
                        },
                        touchend: function() {
                            e(this).removeClass("hover")
                        }
                    }) : e("a,.c-hover").bind({
                        mouseover: function() {
                            e(this).addClass("hover")
                        },
                        mouseout: function() {
                            e(this).removeClass("hover")
                        }
                    })
                },
                gotoDirect: function(o) {
                    switch (i.trace("Common -> gotoDirect()"),
                    e(".blind").hide(),
                    o) {
                    case "home":
                        i.PageEvent.page_index = 0;
                        break;
                    case "about":
                        i.PageEvent.page_index = 1;
                        break;
                    case "photograph":
                        i.PageEvent.page_index = 2;
                        break;
                    case "movie":
                        i.PageEvent.page_index = 3;
                        break;
                    case "member":
                        i.PageEvent.page_index = 4;
                        break;
                    case "contact":
                        i.PageEvent.page_index = 5;
                        break;
                    default:
                        i.PageEvent.page_index = 0
                    }
                    setTimeout((function() {
                        i.scroll_direction = "direct",
                        i.PageEvent.pageChange("direct")
                    }
                    ), 100)
                },
                reload_count: 0,
                reload_count_max: 2,
                init: function() {
                    if (i.trace("Common -> init()"),
                    !i.Page && this.reload_count < this.reload_count_max)
                        return this.reload_count++,
                        void setTimeout(i.init, 500);
                    i.PageEvent.init(),
                    i.MenuEvent.init(),
                    i.ResizeEvent.init(),
                    i.setHoverEvent(),
                    i.setSwitchOrientation(),
                    i.timeout_timer && (i.trace("ロード中のタイムアウト用タイマーをクリア"),
                    clearTimeout(i.timeout_timer),
                    i.timeout_timer = null)
                },
                Loading: {
                    _is_complete: !1,
                    isComplete: function(o) {
                        return i.trace("Common -> Loading -> isComplete()"),
                        void 0 !== o && (this._is_complete = o,
                        i.debug && (!0 === o ? e(".debug__flag__is_complete").addClass("true") : e(".debug__flag__is_complete").removeClass("true"))),
                        this._is_complete
                    },
                    init: function() {
                        i.trace("Common -> Loading -> init()");
                        Math.ceil(3 * Math.random()),
                        i.Window.width,
                        i.Window.height;
                        let o = Math.floor(e("#stroke .home-logo-line1")[0].getTotalLength())
                          , t = e("#stroke .home-logo-line2")[0].getTotalLength();
                        i.is_safari;
                        e("#home").addClass("is-current"),
                        e(".home__menu").css({
                            visibility: "hidden"
                        }),
                        e(".blind").hide(),
                        e("#stroke").hide(),
                        e(".home-logo-neko").css({
                            opacity: 0
                        }),
                        e(".home-logo-logo").css({
                            opacity: 0
                        }),
                        e(".home__nextBtn").css({
                            opacity: 0,
                            pointerEvents: "none"
                        }),
                        e(".fixed__sns").css({
                            opacity: 0,
                            pointerEvents: "none"
                        }),
                        e(".home__footer").css({
                            opacity: 0
                        }),
                        TweenMax.delayedCall(.5, (function() {
                            e("#stroke").show(),
                            TweenMax.fromTo("#stroke .home-logo-line1", 1.1, {
                                opacity: 1,
                                strokeDasharray: o,
                                strokeDashoffset: i.is_safari ? o : -o
                            }, {
                                opacity: 1,
                                strokeDashoffset: i.is_safari ? 2 * o : 0,
                                delay: 0,
                                ease: Power3.easeInOut
                            }),
                            TweenMax.fromTo("#stroke .home-logo-line2", .9, {
                                x: "100%",
                                opacity: 1,
                                strokeDasharray: t,
                                strokeDashoffset: t
                            }, {
                                x: "0%",
                                opacity: 1,
                                strokeDashoffset: 0,
                                delay: .7,
                                ease: Power4.easeInOut
                            }),
                            TweenMax.fromTo(".home-logo-neko", .6, {
                                opacity: 0
                            }, {
                                opacity: 1,
                                delay: 1,
                                ease: Power3.easeOut
                            }),
                            TweenMax.fromTo(".home-logo-logo", 1.2, {
                                opacity: 0,
                                y: 10
                            }, {
                                opacity: 1,
                                y: 0,
                                delay: 1.5,
                                ease: Power4.easeOut
                            })
                        }
                        )),
                        TweenMax.fromTo(".mainLogo", .7, {
                            opacity: 0,
                            x: 20
                        }, {
                            opacity: 1,
                            x: 0,
                            delay: "sp" === i.LAYOUT_MODE ? 3 : 2.6,
                            ease: Power3.easeOut
                        }),
                        TweenMax.delayedCall(3.7, (function() {
                            i.Loading.end()
                        }
                        ))
                    },
                    end: function() {
                        i.trace("Common -> Loading -> end()"),
                        e("#home").addClass("is-current"),
                        e(".home__splash__bg").addClass("is-current"),
                        i.setLocation("home"),
                        "pc" === i.LAYOUT_MODE ? (i.Animation.homeIn(.8),
                        TweenMax.fromTo(i.$global_btn, .9, {
                            opacity: 0,
                            pointerEvents: "none"
                        }, {
                            opacity: 1,
                            delay: 2,
                            ease: Sine.easeOut
                        }),
                        TweenMax.fromTo(i.$global_sns, .9, {
                            opacity: 0,
                            pointerEvents: "none"
                        }, {
                            opacity: 1,
                            delay: 2,
                            ease: Sine.easeOut
                        }),
                        i.Animation.footerIn(1.6),
                        TweenMax.fromTo(i.$under_btn, .5, {
                            opacity: 0,
                            y: -10
                        }, {
                            opacity: 0,
                            y: 0,
                            delay: 2,
                            ease: Power3.easeOut,
                            onComplete: function() {
                                i.$global_btn.css({
                                    pointerEvents: "auto"
                                }),
                                i.$global_sns.css({
                                    pointerEvents: "auto"
                                }),
                                i.Loading.isComplete(!0)
                            }
                        }),
                        TweenMax.fromTo(i.$indicator, 1.4, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            delay: 1.6,
                            ease: Power3.easeOut
                        })) : (i.Animation.homeIn(.8),
                        TweenMax.fromTo(i.$global_btn, 1.4, {
                            opacity: 0,
                            pointerEvents: "none"
                        }, {
                            opacity: 1,
                            delay: 1.6,
                            ease: Sine.easeOut
                        }),
                        TweenMax.fromTo(i.$global_sns, 1.4, {
                            opacity: 0,
                            pointerEvents: "none"
                        }, {
                            opacity: 0,
                            delay: 1.6,
                            ease: Sine.easeOut
                        }),
                        TweenMax.fromTo(i.$under_btn, 1.4, {
                            opacity: 0,
                            y: -10
                        }, {
                            opacity: 0,
                            y: 0,
                            delay: 1.6,
                            ease: Power3.easeOut,
                            onComplete: function() {
                                i.$global_btn.css({
                                    pointerEvents: "auto"
                                }),
                                i.$global_sns.css({
                                    pointerEvents: "auto"
                                }),
                                i.Loading.isComplete(!0)
                            }
                        })),
                        TweenMax.fromTo(".home__footer", .8, {
                            opacity: 1,
                            y: e(".home__footer").height()
                        }, {
                            y: 0,
                            delay: 1,
                            ease: Power3.easeOut
                        }),
                        TweenMax.fromTo(".home__nextBtn", 1, {
                            opacity: 0,
                            y: 12
                        }, {
                            opacity: 1,
                            y: 0,
                            delay: 1,
                            ease: Power3.easeOut
                        }),
                        TweenMax.to(".home__splash__bg__cover", 1, {
                            opacity: 0,
                            y: 0,
                            delay: 0,
                            ease: Power3.easeOut
                        }),
                        e(".home__nextBtn").on("click", ()=>{
                            e(this).off("click"),
                            e(".indicator__menu__list-about a").trigger("click")
                        }
                        ),
                        i.Topics.init(),
                        i.HomeMovie.init(),
                        i.Animation.indicatorIn()
                    }
                },
                MainLogo: {
                    $mainLogo: null,
                    init: function() {
                        this.$mainLogo = e(".mainlogo"),
                        this.$mainLogo.on("click", this.onClick)
                    },
                    enable: function() {
                        this.$mainLogo.removeClass("is-disable")
                    },
                    disable: function() {
                        this.$mainLogo.addClass("is-disable")
                    },
                    onClick: function() {
                        let o = e(".page.is-current")
                          , t = o.attr("id");
                        i.currentId = o.attr("id"),
                        "home" !== t && (i.MainLogo.disable(),
                        e(".indicator__menu__list-home a").trigger("click"))
                    }
                },
                FixedMovie: {
                    play: function() {
                        i.trace("Common -> FixedMovie -> play()"),
                        e(".fixedMovie").addClass("is-active");
                        let o = e(".fixedMovie video");
                        o.length >= 0 && ("pc" === i.LAYOUT_MODE && (o.removeAttr("style"),
                        o = o[0],
                        o.play()),
                        e(".fixedMovie").addClass("is-active"))
                    },
                    pause: function() {
                        i.trace("Common -> FixedMovie -> pause()");
                        let o = e(".fixedMovie video");
                        o.length >= 0 && (o = o[0],
                        o.pause(),
                        e(".fixedMovie").removeClass("is-active"))
                    }
                },
                HomeMovie: {
                    is_init: !1,
                    isInit: function(o) {
                        return i.trace("Common -> HomeMovie -> isInit()"),
                        void 0 !== o && (i.HomeMovie.is_init = o,
                        i.debug && (!0 === o ? e(".debug__flag__movieInit").addClass("true") : e(".debug__flag__movieInit").removeClass("true"))),
                        i.HomeMovie.is_init
                    },
                    is_active: !1,
                    isActive: function(o) {
                        return i.trace("Common -> HomeMovie -> isActive()"),
                        void 0 !== o && (i.HomeMovie.is_active = o,
                        i.debug && (!0 === o ? e(".debug__flag__movieActive").addClass("true") : e(".debug__flag__movieActive").removeClass("true"))),
                        i.HomeMovie.is_active
                    },
                    slide_index: 0,
                    slide_index_max: 0,
                    slide_timer: null,
                    arr_realdiv: null,
                    arr_slidediv: null,
                    arr_slide_moviediv: null,
                    init: function() {
                        i.trace("Common -> HomeMovie -> init()"),
                        this.is_init ? this.restart() : (this.isInit(!0),
                        this.slide_index = 0,
                        this.arr_slidediv = e(".home__splash__item"),
                        this.arr_slide_moviediv = e(".home__splash__item-movie"),
                        this.arr_slide_realdiv = "sp" === i.LAYOUT_MODE ? this.arr_slidediv : this.arr_slide_moviediv,
                        this.isActive(!0),
                        this.slideStart())
                    },
                    pause: function() {
                        if (i.trace("Common -> HomeMovie -> Pause()"),
                        !i.HomeMovie.arr_slide_moviediv)
                            return;
                        let o, t = e(i.HomeMovie.arr_slide_realdiv[i.HomeMovie.slide_index]).find("video");
                        i.HomeMovie.slide_timer && (clearTimeout(i.HomeMovie.slide_timer),
                        i.HomeMovie.slide_timer = null),
                        t.length && (o = t[0],
                        o.pause()),
                        i.HomeMovie.isActive(!1)
                    },
                    restart: function() {
                        i.trace("Common -> HomeMovie -> restart()"),
                        i.HomeMovie.isActive(!0),
                        e(".home__splash *").removeAttr("style"),
                        i.HomeMovie.slide_timer && (clearTimeout(i.HomeMovie.slide_timer),
                        i.HomeMovie.slide_timer = null),
                        i.HomeMovie.slideStart()
                    },
                    slideStart: function() {
                        i.trace("Common -> HomeMovie -> slideStart()");
                        let o, t, n = 16e3, a = e(i.HomeMovie.arr_slide_realdiv[i.HomeMovie.slide_index]), s = (e(i.HomeMovie.arr_slide_realdiv[i.HomeMovie.slide_index + 1]),
                        a.find("video"));
                        i.HomeMovie.$prev_slide = a,
                        i.HomeMovie.$next_slide = a,
                        i.HomeMovie.$prev_slide.removeAttr("style"),
                        s.length && (o = s[0],
                        o.play(),
                        t = e(o),
                        s.removeAttr("style"),
                        i.HomeMovie.resizeImage(),
                        t.off(),
                        t.on("ended", (function() {
                            i.trace("ended"),
                            t.off(),
                            i.HomeMovie.slideChange()
                        }
                        ))),
                        i.HomeMovie.arr_slide_realdiv.css({
                            zIndex: 0,
                            opacity: 0
                        }),
                        e(i.HomeMovie.arr_slide_realdiv[i.HomeMovie.slide_index]).css({
                            zIndex: 10,
                            opacity: 1
                        }),
                        i.HomeMovie.slide_timer && (clearTimeout(i.HomeMovie.slide_timer),
                        i.HomeMovie.slide_timer = null),
                        "sp" !== i.LAYOUT_MODE || (n = e(i.HomeMovie.arr_slide_realdiv[i.HomeMovie.slide_index]).attr("data-playtime-sp")),
                        i.HomeMovie.slideTimer(n)
                    },
                    $next_slide: null,
                    slideChange: function() {
                        i.trace("Common -> HomeMovie -> slideChange()");
                        let o, t = e(i.HomeMovie.arr_slide_realdiv[i.HomeMovie.slide_index]), n = e(i.HomeMovie.arr_slide_realdiv[i.HomeMovie.slide_index + 1]), a = 16e3, s = (t.find("video"),
                        n.find("video"));
                        i.HomeMovie.slide_index_max = (i.LAYOUT_MODE,
                        i.HomeMovie.arr_slide_realdiv.length - 1),
                        e(".home__splash__item__inner").css({
                            width: e(".home__splash").width()
                        }),
                        i.trace("slide_index: " + i.HomeMovie.slide_index),
                        i.trace("slide_index_max: " + i.HomeMovie.slide_index_max),
                        i.HomeMovie.slide_index === i.HomeMovie.slide_index_max && (n = e(i.HomeMovie.arr_slide_realdiv[0]),
                        s = n.find("video")),
                        n.css({
                            display: "",
                            zIndex: 10
                        }),
                        t.css({
                            zIndex: 0
                        }),
                        i.HomeMovie.$prev_slide = t,
                        i.HomeMovie.$next_slide = n,
                        s.length && (o = s[0],
                        s.removeAttr("style"),
                        i.HomeMovie.resizeImage(),
                        o.currentTime = 0,
                        o.play()),
                        a = "sp" !== i.LAYOUT_MODE ? n.attr("data-playtime") : n.attr("data-playtime-sp"),
                        t.attr("data-state", "prev"),
                        n.attr("data-state", "next"),
                        TweenMax.fromTo(n, "sp" === i.LAYOUT_MODE ? 1.6 : .01, {
                            zIndex: 10,
                            opacity: 0
                        }, {
                            opacity: 1,
                            ease: Power3.easeOut,
                            onComplete: function() {
                                t.css({
                                    opacity: "",
                                    display: "none"
                                }),
                                s = t.find("video"),
                                s.length && (o = s[0],
                                o.pause()),
                                i.HomeMovie.slideTimer(a)
                            }
                        }),
                        i.HomeMovie.slide_index++,
                        i.HomeMovie.slide_index > i.HomeMovie.slide_index_max && (i.HomeMovie.slide_index = 0)
                    },
                    slideTimer: function(o) {
                        i.trace("Common -> HomeMovie -> slideTimer()");
                        let t, n, a = e(i.HomeMovie.arr_slide_realdiv[i.HomeMovie.slide_index]), s = (e(i.HomeMovie.arr_slide_realdiv[i.HomeMovie.slide_index + 1]),
                        a.find("video"));
                        i.HomeMovie.$prev_slide = a,
                        i.HomeMovie.$next_slide = a,
                        i.HomeMovie.$prev_slide.removeAttr("style"),
                        s.length ? (t = s[0],
                        n = e(t),
                        s.removeAttr("style"),
                        i.HomeMovie.resizeImage(),
                        n.off(),
                        n.on("ended", (function() {
                            n.off(),
                            t.currentTime = 0,
                            i.HomeMovie.slideChange()
                        }
                        ))) : i.HomeMovie.slide_timer = setTimeout((function() {
                            i.HomeMovie.slideChange()
                        }
                        ), parseInt(o))
                    },
                    resizeImage: function() {
                        i.trace("Common -> HomeMovie -> resizeImage()")
                    }
                },
                Indicator: {
                    $indicator: null,
                    init: function() {
                        this.$indicator = e("#indicator"),
                        this.$indicator.css({
                            opacity: 0
                        })
                    },
                    disable: function() {
                        this.$indicator.css({
                            pointerEvents: "none"
                        })
                    },
                    enable: function() {
                        this.$indicator.css({
                            pointerEvents: ""
                        })
                    },
                    inAnimation: function() {},
                    outAnimation: function() {}
                },
                Animation: {
                    indicatorIn: function(o) {
                        i.trace("Common -> Animation -> indicatorIn()");
                        let t = e(".mainlogo");
                        t.hasClass("is-active") || (void 0 === o && (o = 2.2),
                        t.hasClass("is-active") || (t.css("display", "block"),
                        t.addClass("is-active"),
                        TweenMax.fromTo(".mainlogo", .7, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            delay: o + .34,
                            ease: Sine.easeOut
                        }),
                        TweenMax.staggerFromTo(".indicator__menu__list", .4, {
                            display: "block",
                            scale: 0
                        }, {
                            scale: 1,
                            delay: o,
                            ease: Power3.easeInOut
                        }, .01)))
                    },
                    indicatorOut: function(o) {
                        i.trace("Common -> Animation -> indicatorOut()");
                        let t = e(".mainlogo");
                        void 0 === o && (o = .4),
                        TweenMax.fromTo(".mainlogo", .4, {
                            opacity: 1
                        }, {
                            opacity: 0,
                            delay: o + .34,
                            ease: Sine.easeOut
                        }),
                        t.removeClass("is-active"),
                        TweenMax.staggerTo(".indicator__menu__list", .4, {
                            scale: 0,
                            delay: o,
                            onComplete: function() {
                                e(this).css({
                                    display: "none"
                                })
                            }
                        }, 0)
                    },
                    footerIn: function(o) {
                        i.trace("Common -> Animation -> footerIn()"),
                        void 0 === o && (o = 1.6),
                        e(".footer").css({
                            display: "block"
                        })
                    },
                    homeIn: function(o) {
                        i.trace("Common -> Animation -> homeIn()");
                        let t = 1;
                        i.LAYOUT_MODE,
                        void 0 === o && (o = 1.5),
                        TweenMax.to(".home__logo", .4, {
                            opacity: 1,
                            delay: o,
                            ease: Power3.easeOut
                        }),
                        e(".home__menu").css({
                            opacity: 1,
                            visibility: ""
                        }),
                        e(".home__menu__list").each((function(e, t) {
                            TweenMax.fromTo(t, .4, {
                                opacity: 0,
                                y: 10
                            }, {
                                opacity: 1,
                                y: 0,
                                delay: .06 * e + o,
                                ease: Power3.easeOut
                            })
                        }
                        ))
                    },
                    homeOut: function(e) {
                        i.trace("Common -> Animation -> homeOut()")
                    },
                    movieIn: function(e) {
                        i.trace("Common -> Animation -> movieIn()")
                    },
                    movieOut: function() {
                        i.trace("Common -> Animation -> movieOut()")
                    },
                    memberIn: function(e) {
                        i.trace("Common -> Animation -> memberIn()")
                    },
                    memberOut: function() {
                        i.trace("Common -> Animation -> memberOut()")
                    },
                    titleIn: function(e, o, t) {
                        i.trace("Common -> Animation -> titleIn()");
                        let n = Sine.easeOut;
                        TweenMax.fromTo(t, .4, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            delay: e + 0,
                            ease: n
                        })
                    },
                    titleOut: function(e, o, t) {
                        i.trace("Common -> Animation -> titleOut()");
                        Power3.easeOut;
                        TweenMax.to(t, .4, {
                            opacity: 0,
                            ease: Power3.easeOut
                        })
                    }
                },
                MenuEvent: {
                    init: function() {
                        i.trace("MenuEvent -> init()"),
                        i.$global_btn.on("click", i.MenuEvent.showGlobalMenu),
                        e(".global__menu a").on("click", i.MenuEvent.goto),
                        e(".home__menu a").on("click", i.MenuEvent.gotoNoDelay),
                        e(".indicator__menu a").on("click", i.MenuEvent.gotoNoDelay),
                        i.$under_btn.on("click", i.MenuEvent.gotoNext),
                        e(".content__box__closeBtn").on("click", i.PageEvent.closeContentSp),
                        e(o).on("hashchange", (function(e) {
                            if (i.trace("hashchange"),
                            i.isLock())
                                return;
                            let t = i.PageEvent.page_index
                              , n = o.location.href.split("/#!/")[1];
                            switch (n = n.replace(/\//g, ""),
                            n) {
                            case "home":
                                i.PageEvent.page_index = 0;
                                break;
                            case "about":
                                i.PageEvent.page_index = 1;
                                break;
                            case "photograph":
                                i.PageEvent.page_index = 2;
                                break;
                            case "movie":
                                i.PageEvent.page_index = 3;
                                break;
                            case "member":
                                i.PageEvent.page_index = 4;
                                break;
                            case "contact":
                                i.PageEvent.page_index = 5;
                                break;
                            default:
                                i.PageEvent.page_index = 0
                            }
                            if (t === i.PageEvent.page_index)
                                return;
                            let a = i.PageEvent.page_index > t ? "down" : "up";
                            i.scroll_direction = a,
                            i.$global.hasClass("is-open") ? (i.MenuEvent.closeGlobalMenu(),
                            setTimeout((function() {
                                i.PageEvent.pageChange(a)
                            }
                            ), 400)) : i.PageEvent.pageChange(a)
                        }
                        ))
                    },
                    showGlobalMenu: function() {
                        i.trace("Common -> MenuEvent -> showGlobalMenu()"),
                        i.$global_btn.hasClass("is-open") ? i.MenuEvent.closeGlobalMenu() : (i.$global_btn.addClass("is-open"),
                        i.$global.addClass("is-open"),
                        i.$global.css({
                            opacity: 0
                        }).velocity("stop").velocity({
                            opacity: 1
                        }, {
                            duration: 300,
                            easing: "easeOutQuart",
                            complete: function() {
                                i.$global.css({
                                    opacity: ""
                                })
                            }
                        }),
                        TweenMax.fromTo(".global__menu__list-home", .8, {
                            y: 10,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            delay: .36,
                            ease: Power3.easeOut
                        }),
                        TweenMax.fromTo(".global__menu__list-about", .8, {
                            y: 10,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            delay: .39,
                            ease: Power3.easeOut
                        }),
                        TweenMax.fromTo(".global__menu__list-photograph", .8, {
                            y: 10,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            delay: .42,
                            ease: Power3.easeOut
                        }),
                        TweenMax.fromTo(".global__menu__list-movie", .8, {
                            y: 10,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            delay: .45,
                            ease: Power3.easeOut
                        }),
                        TweenMax.fromTo(".global__menu__list-member", .8, {
                            y: 10,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            delay: .48,
                            ease: Power3.easeOut
                        }),
                        TweenMax.fromTo(".global__menu__list-contact", .8, {
                            y: 10,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            delay: .51,
                            ease: Power3.easeOut
                        }),
                        TweenMax.fromTo(".global__sns", .8, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            delay: .8,
                            ease: Power3.easeOut
                        }))
                    },
                    closeGlobalMenu: function() {
                        i.trace("Common -> MenuEvent -> closeGlobalMenu()"),
                        i.$global_btn.removeClass("is-open"),
                        TweenMax.to(".global", .3, {
                            opacity: 0,
                            ease: Power3.easeOut,
                            onComplete: function() {
                                i.$global.removeClass("is-open"),
                                i.$global.removeAttr("style")
                            }
                        })
                    },
                    goto: function(o) {
                        if (i.trace("Common -> MenuEvent -> goto()"),
                        o.preventDefault(),
                        i.isLock())
                            return;
                        let t = i.PageEvent.page_index
                          , n = parseInt(e(this).attr("data-page-index"))
                          , a = n > t ? "down" : "up";
                        i.scroll_direction = a,
                        i.PageEvent.page_index = n,
                        i.MenuEvent.closeGlobalMenu(),
                        setTimeout((function() {
                            i.PageEvent.pageChange(a)
                        }
                        ), 400)
                    },
                    gotoNoDelay: function(o) {
                        if (i.trace("Common -> MenuEvent -> gotoNoDelay()"),
                        o.preventDefault(),
                        i.isLock())
                            return;
                        let t = i.PageEvent.page_index
                          , n = parseInt(e(this).attr("data-page-index"))
                          , a = n > t ? "down" : "up";
                        i.scroll_direction = a,
                        i.PageEvent.page_index = n,
                        i.PageEvent.pageChange(a)
                    },
                    gotoNext: function(e) {
                        i.trace("Common -> MenuEvent -> gotoNext()"),
                        e && e.preventDefault(),
                        i.isLock() || (i.PageEvent.page_index >= i.PageEvent.page_index_max ? (i.PageEvent.page_index = 0,
                        i.scroll_direction = "up",
                        i.PageEvent.pageChange("up")) : (i.PageEvent.page_index++,
                        i.scroll_direction = "down",
                        i.PageEvent.pageChange("down")))
                    },
                    gotoPrev: function(e) {
                        i.trace("Common -> MenuEvent -> gotoPrev()"),
                        e.preventDefault(),
                        i.isLock() || (i.PageEvent.page_index--,
                        i.scroll_direction = "up",
                        i.PageEvent.pageChange("up"))
                    }
                },
                setLocation: function(e) {
                    i.trace("Common -> setLocation()");
                    let t = "" !== e ? e + "/" : "";
                    o.location.href = "https://" + o.location.host + "/#!/" + t
                },
                PageEvent: {
                    pages: [e(".home"), e(".about"), e(".photograph"), e(".movie"), e(".member"), e(".contact")],
                    page_index: 0,
                    page_index_max: 0,
                    s: 0,
                    init: function() {
                        let o, t;
                        i.trace("PageEvent -> init()");
                        let n = e(".scrollable");
                        function s(e) {
                            return e.originalEvent.touches[0].pageY
                        }
                        i.PageEvent.page_index_max = i.PageEvent.pages.length - 1,
                        n.on({
                            touchstart: function(e) {
                                t = s(e),
                                o = ""
                            },
                            touchmove: function(e) {
                                t - s(e) > 40 ? (o = "up",
                                i.scroll_direction = "up") : t - s(e) < -40 && (o = "down",
                                i.scroll_direction = "down")
                            },
                            touchend: function(e) {
                                "up" === o ? i.PageEvent.scrollDown() : "down" === o && i.PageEvent.scrollUp()
                            },
                            mousewheel: function(e, o, t, n) {
                                if (i.trace("delta: " + o),
                                i.trace("deltaX: " + t),
                                i.trace("deltaY: " + n),
                                e.preventDefault(),
                                i.trace("onMousewheel > Common.is_lock: " + i.isLock()),
                                i.trace("onMousewheel > !Common.Loading.isComplete: " + i.Loading.isComplete()),
                                i.isLock())
                                    return;
                                if (!i.Loading.isComplete())
                                    return;
                                let a = "";
                                o > 0 ? a = Math.abs(o * i.wheel_accel) : o < 0 && (a = -1 * Math.abs(o * i.wheel_accel));
                                i.PageEvent.s += 10 * a,
                                a < -50 ? i.PageEvent.scrollDown() : a > 50 && i.PageEvent.scrollUp();
                                return !1
                            }
                        }),
                        a.on("keydown", (function(o) {
                            e("#global").hasClass("is-open") || e("#movieModal").hasClass("is-active") || e("#memberModal").hasClass("is-active") || (40 === o.keyCode && n.trigger("mousewheel", [-100, 0, -100]),
                            38 === o.keyCode && n.trigger("mousewheel", [100, 0, 100]))
                        }
                        ))
                    },
                    scrollDown: function() {
                        i.trace("Common -> PageEvent -> scrollDown()"),
                        i.isLock() || (i.PageEvent.page_index >= i.PageEvent.page_index_max ? (i.PageEvent.page_index = 0,
                        i.scroll_direction = "down",
                        i.PageEvent.pageChange("down")) : (i.PageEvent.page_index++,
                        i.scroll_direction = "down",
                        i.PageEvent.pageChange("down")))
                    },
                    scrollUp: function() {
                        i.trace("Common -> PageEvent -> scrollUp()"),
                        i.isLock() || i.PageEvent.page_index <= 0 || (i.PageEvent.page_index--,
                        i.scroll_direction = "up",
                        i.PageEvent.pageChange("up"))
                    },
                    Home: {
                        init: function() {
                            i.trace("Common -> PageEvent -> Home -> init()"),
                            e(".home__logo").css({
                                display: "block",
                                opacity: 0
                            }),
                            e(".home__menu").css({
                                display: "block",
                                opacity: 0
                            }),
                            e(".home__nextBtn").css({
                                display: "block",
                                opacity: 0
                            }),
                            e(".home__footer").css({
                                display: "block",
                                opacity: 0
                            }),
                            e(".home__nextBtn").on("click", ()=>{
                                e(this).off("click"),
                                e(".indicator__menu__list-about a").trigger("click")
                            }
                            ),
                            e(".home__splash__bg__cover").css({
                                opacity: 0
                            }),
                            i.Topics.init(),
                            i.HomeMovie.init()
                        },
                        pageInAnimation: function(o) {
                            i.trace("Common -> PageEvent -> Home -> pageInAnimation()"),
                            i.MainLogo.disable(),
                            TweenMax.to(".home__logo", .4, {
                                opacity: 1,
                                delay: .3,
                                ease: Power3.easeOut
                            }),
                            TweenMax.fromTo(".home__nextBtn", 1, {
                                opacity: 0,
                                y: 12
                            }, {
                                opacity: 1,
                                y: 0,
                                delay: 1,
                                ease: Power3.easeOut
                            }),
                            TweenMax.fromTo(".home__footer", .8, {
                                opacity: 1,
                                y: e(".home__footer").height()
                            }, {
                                y: 0,
                                delay: 1,
                                ease: Power3.easeOut
                            }),
                            e(".home__menu").css({
                                opacity: 1,
                                display: ""
                            }),
                            e(".home__menu__list").each((function(o, t) {
                                TweenMax.fromTo(t, .6, {
                                    opacity: 0,
                                    y: 10
                                }, {
                                    opacity: 1,
                                    y: 0,
                                    delay: .06 * o + .6,
                                    ease: Power3.easeOut,
                                    onComplete: function() {
                                        o >= e(".home__menu__list").length - 1 && i.isLock(!1)
                                    }
                                })
                            }
                            )),
                            TweenMax.to(i.$global_btn, 1.4, {
                                opacity: 1,
                                delay: 2.6,
                                ease: Power3.easeOut,
                                onComplete: function() {
                                    i.$global_btn.css({
                                        pointerEvents: ""
                                    }),
                                    i.$global_sns.css({
                                        pointerEvents: ""
                                    })
                                }
                            }),
                            TweenMax.to(i.$global_sns, 1.4, {
                                opacity: 1,
                                delay: 2.6,
                                ease: Power3.easeOut
                            })
                        },
                        pageOutAnimation: function() {
                            i.trace("Common -> PageEvent -> Home -> pageOutAnimation()");
                            let o = this;
                            TweenMax.to(".home__logo", .6, {
                                opacity: 0,
                                delay: 0,
                                ease: Power3.easeOut
                            }),
                            TweenMax.to(".home__menu", .6, {
                                opacity: 0,
                                delay: .2,
                                ease: Power3.easeOut
                            }),
                            TweenMax.to(".home__nextBtn", .6, {
                                opacity: 0,
                                y: 10,
                                ease: Power3.easeOut
                            }),
                            TweenMax.to(".home__footer", .8, {
                                y: e(".home__footer").height(),
                                delay: 0,
                                ease: Power3.easeOut,
                                onComplete: function() {
                                    o.destroy()
                                }
                            }),
                            "contact" !== i.nextId && TweenMax.fromTo(i.$under_btn, 1.4, {
                                opacity: 0
                            }, {
                                opacity: 1,
                                delay: 2.6,
                                ease: Power3.easeOut,
                                onComplete: function() {}
                            })
                        },
                        destroy: function() {
                            i.trace("Common -> PageEvent -> Home -> destroy()"),
                            e(".page.is-prev").removeClass("is-prev"),
                            i.MainLogo.enable()
                        }
                    },
                    About: {
                        init: function() {
                            i.trace("Common -> PageEvent -> About -> init()"),
                            e(".about__splash__title").css({
                                display: "block",
                                opacity: 0
                            }),
                            e(".splash__about__lead").css({
                                display: "block",
                                opacity: 0
                            })
                        },
                        pageInAnimation: function() {
                            i.trace("Common -> PageEvent -> About -> pageInAnimation()");
                            var o = "sp" === i.LAYOUT_MODE ? 1 : 0;
                            "direct" === i.scroll_direction && (o = .6),
                            i.Animation.titleIn(0, "about", e(".about__splash__title")),
                            TweenMax.fromTo(".splash__about__lead", .6, {
                                opacity: 0
                            }, {
                                opacity: 1,
                                ease: Power2.easeOut,
                                delay: o,
                                onComplete: function() {
                                    i.isLock(!1)
                                }
                            })
                        },
                        pageOutAnimation: function() {
                            i.trace("Common -> PageEvent -> About -> pageOutAnimation()");
                            let o = this;
                            i.Animation.titleOut(0, "about", e(".about__splash__title")),
                            TweenMax.to(".splash__about__lead", .6, {
                                opacity: 0,
                                ease: Power3.easeOut,
                                delay: 0,
                                onComplete: function() {
                                    o.destroy()
                                }
                            })
                        },
                        destroy: function() {
                            i.trace("Common -> PageEvent -> About -> destroy()"),
                            e(".page.is-prev").removeClass("is-prev")
                        }
                    },
                    Photograph: {
                        is_initialize: !1,
                        init: function() {
                            i.trace("Common -> PageEvent -> Photograph -> init()");
                            let o = this;
                            e(".photograph__btn").css({
                                display: "block",
                                opacity: 0
                            }),
                            e(".photograph__glid__item").css({
                                opacity: 0
                            }),
                            this.is_initialize || (this.is_initialize = !0,
                            e(".photograph__glid__item").on("click", (function() {
                                o.showPhotographModal()
                            }
                            )))
                        },
                        $items: null,
                        pageInAnimation: function() {
                            i.trace("Common -> PageEvent -> Photograph -> pageInAnimation()"),
                            i.Animation.titleIn(0, "photograph", e(".photograph__splash__title"));
                            var o = "sp" === i.LAYOUT_MODE ? .5 : 0;
                            "direct" === i.scroll_direction && (o = 0),
                            this.$items || (this.$items = e(".photograph__glid__item")),
                            i.PageEvent.Modal.init(),
                            TweenMax.fromTo(".photograph__btn", .6, {
                                opacity: 0
                            }, {
                                opacity: 1,
                                delay: 1.4 + o
                            }),
                            this.$items.each((function(t, i) {
                                TweenMax.fromTo(i, 1.6, {
                                    opacity: 0
                                }, {
                                    opacity: 1,
                                    ease: Power3.easeOut,
                                    delay: .3 * Math.random() + o,
                                    onComplete: function() {
                                        e(i).css({
                                            opacity: ""
                                        })
                                    }
                                })
                            }
                            )),
                            TweenMax.delayedCall(1.6, (function() {
                                i.isLock(!1)
                            }
                            ))
                        },
                        pageOutAnimation: function() {
                            i.trace("Common -> PageEvent -> Photograph -> pageOutAnimation()");
                            let o = this;
                            i.Animation.titleOut(0, "photograph", e(".photograph__splash__title")),
                            TweenMax.to(".photograph__btn", .6, {
                                opacity: 0,
                                delay: 0,
                                onComplete: function() {
                                    o.destroy()
                                }
                            })
                        },
                        destroy: function() {
                            i.trace("Common -> PageEvent -> Photograph -> destroy()"),
                            e(".page.is-prev").removeClass("is-prev")
                        }
                    },
                    Movie: {
                        is_initialize: !1,
                        init: function() {
                            i.trace("Common -> PageEvent -> Movie -> init()");
                            let o = this;
                            e(".movie__btn").css({
                                display: "block",
                                opacity: 0
                            }),
                            e(".movie__glid__item").css({
                                opacity: 0
                            }),
                            this.is_initialize || (this.is_initialize = !0,
                            e(".movie__glid__item").on("click", (function() {
                                o.showMovieModal()
                            }
                            )))
                        },
                        $items: null,
                        pageInAnimation: function() {
                            i.trace("Common -> PageEvent -> Movie -> pageInAnimation()"),
                            i.Animation.titleIn(0, "movie", e(".movie__splash__title"));
                            var o = "sp" === i.LAYOUT_MODE ? .5 : 0;
                            "direct" === i.scroll_direction && (o = 0),
                            this.$items || (this.$items = e(".movie__glid__item")),
                            i.PageEvent.Modal.init(),
                            TweenMax.fromTo(".movie__btn", .6, {
                                opacity: 0
                            }, {
                                opacity: 1,
                                delay: 1.4 + o
                            }),
                            this.$items.each((function(t, i) {
                                TweenMax.fromTo(i, 1.6, {
                                    opacity: 0
                                }, {
                                    opacity: 1,
                                    ease: Power3.easeOut,
                                    delay: .3 * Math.random() + o,
                                    onComplete: function() {
                                        e(i).css({
                                            opacity: ""
                                        })
                                    }
                                })
                            }
                            )),
                            TweenMax.delayedCall(1.6, (function() {
                                i.isLock(!1)
                            }
                            ))
                        },
                        pageOutAnimation: function() {
                            i.trace("Common -> PageEvent -> Movie -> pageOutAnimation()");
                            let o = this;
                            i.Animation.titleOut(0, "movie", e(".movie__splash__title")),
                            TweenMax.to(".movie__btn", .6, {
                                opacity: 0,
                                delay: 0,
                                onComplete: function() {
                                    o.destroy()
                                }
                            })
                        },
                        destroy: function() {
                            i.trace("Common -> PageEvent -> Movie -> destroy()"),
                            e(".page.is-prev").removeClass("is-prev")
                        }
                    },
                    Member: {
                        init: function() {
                            i.trace("Common -> PageEvent -> Member -> init()"),
                            e(".member__btn").css({
                                display: "block",
                                opacity: 0
                            }),
                            e("#member-orig").hide(),
                            this.MemberModal.is_initialize || i.trace("NOTE: MEMBERページへ移動する、MEMBERモーダルが初期化されていないので初期化する")
                        },
                        pageInAnimation: function(o) {
                            i.trace("Common -> PageEvent -> Member -> pageInAnimation()"),
                            i.Animation.titleIn(0, "member", e(".member__splash__title"));
                            let t = 0;
                            void 0 === o ? (t = 0,
                            "sp" === i.LAYOUT_MODE && (t = 1)) : t = o;
                            var n = "sp" === i.LAYOUT_MODE ? .7 : 0;
                            "direct" === i.scroll_direction && (n = .2),
                            TweenMax.fromTo("#member-orig", .6, {
                                display: "",
                                opacity: 0
                            }, {
                                opacity: 1,
                                delay: .4 + n,
                                onStart: ()=>{
                                    this.MemberModal.init()
                                }
                                ,
                                onComplete: ()=>{
                                    i.isLock(!1)
                                }
                            }),
                            i.trace("aaaaa"),
                            TweenMax.fromTo("#member-orig .btn-prev", 1.2, {
                                display: "block",
                                opacity: 0,
                                x: 30
                            }, {
                                opacity: 1,
                                x: 0,
                                delay: t + 1.2,
                                ease: Power3.easeInOut
                            }),
                            TweenMax.fromTo("#member-orig .btn-next", 1.2, {
                                display: "block",
                                opacity: 0,
                                x: -30
                            }, {
                                opacity: 1,
                                x: 0,
                                delay: t,
                                ease: Power3.easeInOut
                            })
                        },
                        pageOutAnimation: function() {
                            i.trace("Common -> PageEvent -> Member -> pageOutAnimation()");
                            i.Animation.titleOut(0, "member", e(".member__splash__title")),
                            TweenMax.to(".member__btn", .6, {
                                opacity: 0,
                                delay: 0,
                                ease: Power3.easeOut
                            }),
                            TweenMax.to("#member-orig", .6, {
                                opacity: 0,
                                delay: 0,
                                ease: Power3.easeOut,
                                onComplete: ()=>{
                                    this.destroy()
                                }
                            }),
                            TweenMax.to("#member-orig .btn-next", .4, {
                                opacity: 0,
                                delay: 0,
                                ease: Power3.easeOut
                            }),
                            TweenMax.to("#member-orig .btn-prev", .4, {
                                opacity: 0,
                                delay: 0,
                                ease: Power3.easeOut
                            })
                        },
                        destroy: function() {
                            i.trace("Common -> PageEvent -> Member -> destroy()"),
                            e(".page.is-prev").removeClass("is-prev")
                        },
                        MemberModal: {
                            swiper_image: null,
                            swiper_member: null,
                            is_initialize: !1,
                            member_max_length: 0,
                            image_max_length: 0,
                            member_slide: null,
                            init: function() {
                                i.trace("Common -> Member -> MemberModal -> init()"),
                                this.is_initialize || (this.is_initialize = !0,
                                this.member_slide = new Swiper("#member-orig .slide",{
                                    speed: 600,
                                    nextButton: "#member-orig .btn-next",
                                    prevButton: "#member-orig .btn-prev",
                                    slidesPerView: 5,
                                    spaceBetween: 40,
                                    mousewheel: {
                                        invert: !0
                                    },
                                    breakpoints: {
                                        768: {
                                            slidesPerView: "auto",
                                            freeMode: !0,
                                            spaceBetween: 15
                                        },
                                        1180: {
                                            slidesPerView: 3
                                        },
                                        1240: {
                                            slidesPerView: 4
                                        }
                                    },
                                    onSlideChangeEnd: function(e) {}
                                }))
                            }
                        }
                    },
                    Contact: {
                        init: function() {
                            i.trace("Common -> PageEvent -> Contact -> init()"),
                            i.$under_btn.addClass("is-last"),
                            e(".contact__flexColumn").css({
                                opacity: 0
                            }),
                            e(".contact__copyright").css({
                                display: "block",
                                opacity: 0
                            }),
                            e(".contact__infoBtn").css({
                                opacity: 0
                            }),
                            e(".contact__backBtn").css({
                                display: "block",
                                opacity: 0
                            }),
                            e(".contact__backBtn").on("click", (function() {
                                e(this).off("click"),
                                e(".indicator__menu__list-home a").trigger("click")
                            }
                            )),
                            e(".contact__infoBtn").on("click", (function() {
                                e("#contact").css({
                                    zIndex: 1e4
                                }),
                                TweenMax.fromTo(".contact__info", .4, {
                                    opacity: 0,
                                    display: "block"
                                }, {
                                    opacity: 1,
                                    ease: Power3.easeOut
                                })
                            }
                            )),
                            e(".contact__info__close").on("click", (function() {
                                TweenMax.to(".contact__info", .4, {
                                    opacity: 0,
                                    ease: Power3.easeOut,
                                    onComplete: function() {
                                        e("#contact").css({
                                            zIndex: ""
                                        }),
                                        e(".contact__info").removeAttr("style")
                                    }
                                })
                            }
                            )),
                            this.MailForm.init()
                        },
                        pageInAnimation: function(o) {
                            i.trace("Common -> PageEvent -> Contact -> pageInAnimation()"),
                            i.Animation.titleIn(0, "contact", e(".contact__splash__title"));
                            var t = "sp" === i.LAYOUT_MODE ? 1 : 0;
                            "direct" === i.scroll_direction && (t = .4),
                            TweenMax.to(i.$under_btn, 1.4, {
                                opacity: 0,
                                delay: 0,
                                ease: Power3.easeOut,
                                onComplete: function() {}
                            }),
                            TweenMax.fromTo(".contact__infoBtn", .6, {
                                opacity: 0
                            }, {
                                opacity: 1,
                                delay: 0
                            }),
                            TweenMax.fromTo(".contact__copyright", .6, {
                                opacity: 0
                            }, {
                                opacity: 1,
                                delay: 0
                            }),
                            TweenMax.fromTo(".contact__backBtn", .6, {
                                opacity: 0
                            }, {
                                opacity: 1,
                                delay: 0
                            }),
                            TweenMax.fromTo(".contact__flexColumn", .6, {
                                opacity: 0
                            }, {
                                opacity: 1,
                                delay: t,
                                onComplete: ()=>i.isLock(!1)
                            })
                        },
                        pageOutAnimation: function() {
                            i.trace("Common -> PageEvent -> Contact -> pageOutAnimation()"),
                            i.Animation.titleOut(0, "contact", e(".contact__splash__title")),
                            TweenMax.to(".contact__copyright", .4, {
                                opacity: 0,
                                delay: 0,
                                ease: Power3.easeOut
                            }),
                            TweenMax.to(".contact__backBtn", .4, {
                                opacity: 0,
                                delay: 0,
                                ease: Power3.easeOut
                            }),
                            TweenMax.to(".contact__flexColumn", .4, {
                                opacity: 0,
                                delay: 0,
                                ease: Power3.easeOut,
                                onComplete: ()=>this.destroy()
                            })
                        },
                        destroy: function() {
                            i.trace("Common -> PageEvent -> Contact -> destroy()"),
                            e(".page.is-prev").removeClass("is-prev"),
                            i.$under_btn.removeClass("is-last")
                        },
                        MailForm: {
                            init: function() {
                                e("#error").hide(),
                                e(".contact__submitBtn").off(),
                                e(".form__input__type").off(),
                                e(".contact__submitBtn").on("click", this.check),
                                e(".form__input__type").on("click", (function() {
                                    e("#type").val(e(this).text()),
                                    e(".form__input__type").removeClass("is-selected"),
                                    e(this).addClass("is-selected")
                                }
                                ))
                            },
                            check: function(o) {
                                o.preventDefault();
                                if ("none" !== e(".contact__submitBtn").css("pointer-events"))
                                    if (e("#name").val() && e("#email").val() && e("#tel").val() && e("#subject").val() && e("#inquiry").val()) {
                                        if (!e("#email").val().match("^[0-9A-Za-z._-]+@[0-9A-Za-z.-]+$"))
                                            return e("#error").show(),
                                            e("#error").html("E-MAIL はメールアドレス形式で記入して下さい"),
                                            !1;
                                        e("#error").hide(),
                                        i.PageEvent.Contact.MailForm.send(),
                                        e(".contact__submitBtn").css({
                                            pointerEvents: "none"
                                        })
                                    } else
                                        i.PageEvent.Contact.MailForm.alert()
                            },
                            send: function() {
                                var o = this;
                                let t = e("#form").serialize();
                                e("#error").html(""),
                                e("#error").hide(),
                                e.ajax({
                                    type: "POST",
                                    url: "mail.php",
                                    data: t,
                                    success: e=>o.complete(),
                                    error: ()=>o.sendError()
                                })
                            },
                            complete: function() {
                                e(".contact__complete").addClass("is-active"),
                                e("#name").val(""),
                                e("#email").val(""),
                                e("#tel").val(""),
                                e("#subject").val(""),
                                e("#inquiry").val(""),
                                TweenMax.delayedCall(3, ()=>{
                                    e(".contact__submitBtn").css({
                                        pointerEvents: ""
                                    }),
                                    e(".contact__complete").removeClass("is-active")
                                }
                                )
                            },
                            alert: function() {
                                e("#error").show(),
                                e("#error").html("未記入の項目が有ります")
                            },
                            sendError: function() {
                                e("#error").show(),
                                e("#error").html("送信に失敗しました")
                            }
                        }
                    },
                    Modal: {
                        isInitialize: !1,
                        isModalActive: !1,
                        $modal: null,
                        $modalOuter: null,
                        $modalInner: null,
                        init: function() {
                            if (this.isInitialize)
                                return;
                            this.isInitialize = !0,
                            this.$modal = e(".modal--item"),
                            this.$modalOuter = this.$modal.find(".modal__outer"),
                            this.$modalInner = this.$modal.find(".modal__inner");
                            let o = e(".photograph__glid__item a")
                              , t = e(".movie__glid__item a")
                              , i = e.merge(o, t);
                            i.addClass("js-modal-trigger"),
                            i.on("click", this.show),
                            e(".modal__close").on("click", this.close)
                        },
                        show: function(o) {
                            o.preventDefault();
                            let t = i.PageEvent.Modal
                              , n = e(this).attr("href");
                            return t.isModalActive = !0,
                            t.$modalOuter.empty(),
                            TweenMax.fromTo(t.$modal, .3, {
                                opacity: 0,
                                display: "block"
                            }, {
                                opacity: 1,
                                ease: Power3.easeOut,
                                onComplete: function() {
                                    e.ajax({
                                        type: "GET",
                                        url: n,
                                        dataType: "html",
                                        success: function(o) {
                                            t.$modalOuter.html(e(o).find(".modal__outer").html()),
                                            TweenMax.fromTo(t.$modalInner, .3, {
                                                opacity: 0
                                            }, {
                                                opacity: 1,
                                                ease: Power3.easeOut
                                            })
                                        },
                                        error: function() {
                                            i.trace("catch ajax error")
                                        }
                                    })
                                }
                            }),
                            !1
                        },
                        close: function() {
                            let e = i.PageEvent.Modal;
                            e.isModalActive && TweenMax.to(e.$modal, .3, {
                                opacity: 0,
                                ease: Power3.easeOut,
                                onComplete: function() {
                                    e.$modalOuter.empty(),
                                    e.$modal.css({
                                        display: ""
                                    })
                                }
                            })
                        }
                    },
                    pageChange: function(o) {
                        i.trace("Common -> PageEvent -> pageChange()"),
                        TweenMax.killAll(),
                        i.$global_btn.css({
                            opacity: 1
                        }),
                        i.$global_sns.css({
                            opacity: 1
                        }),
                        i.$indicator.css({
                            opacity: 1
                        }),
                        i.isLock(!0),
                        i.Loading.isComplete() && i.FixedMovie.play();
                        let t = e(".page.is-current")
                          , n = i.PageEvent.pages[i.PageEvent.page_index]
                          , a = t.attr("id");
                        i.currentId = t.attr("id");
                        let s = n.attr("id");
                        i.nextId = n.attr("id");
                        let r = e("." + s + "__splash__bg")
                          , l = e("." + a + "__splash__bg")
                          , c = (t.find(".splash__title"),
                        n.find(".splash__title"))
                          , m = 1.3 * i.Window.height
                          , d = Power3.easeInOut
                          , _ = .4
                          , p = 1.4;
                        if (t.length <= 0 && (t = n,
                        a = s,
                        i.currentId = i.nextId),
                        i.trace("next_id: " + s + " / current_id: " + a),
                        n.removeAttr("style"),
                        c.css({
                            opacity: 0
                        }),
                        e(".indicator__menu__list").removeClass("is-current"),
                        e(".global__menu__list").removeClass("is-current"),
                        i.PageEvent.page_index <= 0 ? e(".indicator").addClass("is-disable") : e(".indicator").removeClass("is-disable"),
                        e(".indicator__menu__list-" + s).addClass("is-current"),
                        e(".global__menu__list-" + s).addClass("is-current"),
                        "direct" !== o) {
                            switch (i.trace("NOTE: 初回表示ではないので、見出しの終了処理を実行する"),
                            e(".fixedMovie").addClass("is-active"),
                            a) {
                            case "home":
                                i.PageEvent.Home.pageOutAnimation(o);
                                break;
                            case "about":
                                i.PageEvent.About.pageOutAnimation();
                                break;
                            case "photograph":
                                i.PageEvent.Photograph.pageOutAnimation();
                                break;
                            case "movie":
                                i.PageEvent.Movie.pageOutAnimation();
                                break;
                            case "member":
                                i.PageEvent.Member.pageOutAnimation();
                                break;
                            case "contact":
                                i.PageEvent.Contact.pageOutAnimation()
                            }
                            "home" !== a && "home" === s && TweenMax.to(i.$under_btn, 1.4, {
                                opacity: 0,
                                delay: 0,
                                ease: Power3.easeOut,
                                onComplete: function() {}
                            }),
                            "contact" === s && TweenMax.to(i.$under_btn, 1.4, {
                                opacity: 0,
                                delay: 0,
                                ease: Power3.easeOut,
                                onComplete: function() {}
                            }),
                            "home" !== s && "contact" !== s && TweenMax.to(i.$under_btn, 1.4, {
                                opacity: 1,
                                delay: 2,
                                ease: Power3.easeOut,
                                onComplete: function() {}
                            }),
                            t.addClass("is-prev")
                        }
                        i.$pages.removeClass("is-current"),
                        i.$backgrounds.removeClass("is-current"),
                        e("." + a + "__splash__bg").addClass("is-prev"),
                        n.addClass("is-current"),
                        e("." + s + "__splash__bg").addClass("is-current"),
                        r.removeAttr("style"),
                        i.PageEvent.pageInitialize(s, o),
                        "down" === o ? (i.trace("NOTE: スクロールダウン :: 次ブロックのページを表示する"),
                        i.$global_btn.css({
                            pointerEvents: ""
                        }),
                        i.$global_sns.css({
                            pointerEvents: ""
                        }),
                        "home" === a ? (i.trace("NOTE: HOMEから他ページへ移動する"),
                        "pc" === i.LAYOUT_MODE ? (_ = .5,
                        p = 1.4) : (_ = 0,
                        p = 1),
                        TweenMax.fromTo(l.find(".splash__bg__inner"), 1.6, {
                            scale: 1
                        }, {
                            scale: 1.1,
                            ease: d,
                            delay: _,
                            onStart: function() {}
                        }),
                        TweenMax.fromTo(l, 1.4, {
                            scale: 1
                        }, {
                            scale: .9,
                            ease: d,
                            delay: _
                        }),
                        TweenMax.fromTo(l, 1.8, {
                            y: 0,
                            x: 0
                        }, {
                            x: 0,
                            y: -1 * m,
                            ease: d,
                            delay: _ + .1,
                            onComplete: function() {
                                i.HomeMovie.pause()
                            }
                        }),
                        i.Animation.indicatorIn(_ + 1.3),
                        TweenMax.fromTo(r.find(".splash__bg__inner"), 1.6, {
                            left: "",
                            width: "",
                            scale: 1.1
                        }, {
                            scale: 1,
                            ease: d,
                            delay: _ + .6
                        }),
                        TweenMax.fromTo(r, 1.6, {
                            left: "",
                            width: "",
                            scale: .72
                        }, {
                            scale: 1,
                            ease: d,
                            delay: _ + .6,
                            onComplete: function() {
                                r.removeAttr("style"),
                                i.FixedMovie.pause()
                            }
                        }),
                        TweenMax.fromTo(r, 1.4, {
                            width: "100%",
                            height: i.Window.height,
                            x: -0,
                            y: 1.3 * i.Window.height
                        }, {
                            x: 0,
                            y: 0,
                            ease: d,
                            delay: _ + .4
                        }),
                        setTimeout((function() {
                            i.PageEvent.pageActive(s)
                        }
                        ), 1e3 * _ + 1e3 * p)) : (i.trace("NOTE: HOME以外のページから他ページへ移動する"),
                        "pc" === i.LAYOUT_MODE ? (_ = .4,
                        p = 1.4) : (_ = 0,
                        p = .8),
                        TweenMax.fromTo(l.find(".splash__bg__inner"), 1.6, {
                            scale: 1
                        }, {
                            scale: 1.1,
                            ease: d,
                            delay: _
                        }),
                        TweenMax.fromTo(l, 1.4, {
                            scale: 1
                        }, {
                            scale: .9,
                            ease: d,
                            delay: _
                        }),
                        TweenMax.fromTo(l, 1.8, {
                            y: 0,
                            x: 0
                        }, {
                            x: 0,
                            y: -1 * m,
                            ease: d,
                            delay: _ + .1,
                            onComplete: function() {
                                t.removeAttr("style")
                            }
                        }),
                        i.Animation.indicatorIn(2.3),
                        TweenMax.fromTo(r.find(".splash__bg__inner"), 1.6, {
                            left: "",
                            width: "",
                            scale: 1.1
                        }, {
                            scale: 1,
                            ease: d,
                            delay: _ + .6
                        }),
                        TweenMax.fromTo(r, 1.6, {
                            left: "",
                            width: "",
                            scale: .72
                        }, {
                            scale: 1,
                            ease: d,
                            delay: _ + .6,
                            onComplete: function() {
                                r.removeAttr("style"),
                                i.FixedMovie.pause()
                            }
                        }),
                        TweenMax.fromTo(r, 1.4, {
                            width: "100%",
                            height: i.Window.height,
                            x: -0,
                            y: 1.3 * i.Window.height
                        }, {
                            x: 0,
                            y: 0,
                            ease: d,
                            delay: _ + .4
                        }),
                        setTimeout((function() {
                            i.PageEvent.pageActive(s)
                        }
                        ), 1e3 * _ + 1e3 * p))) : "up" === o ? (i.trace("NOTE: スクロールアップ :: 手前ブロックのページを表示する"),
                        "pc" === i.LAYOUT_MODE ? (_ = .4,
                        p = 1.4) : (_ = 0,
                        p = .8),
                        TweenMax.fromTo(l.find(".splash__bg__inner"), 1.6, {
                            scale: 1
                        }, {
                            scale: 1.1,
                            ease: d,
                            delay: _
                        }),
                        TweenMax.fromTo(l, 1.4, {
                            scale: 1
                        }, {
                            scale: .9,
                            ease: d,
                            delay: _
                        }),
                        TweenMax.fromTo(l, 1.8, {
                            y: 0,
                            x: 0
                        }, {
                            x: -0,
                            y: 1.3 * i.Window.height,
                            ease: d,
                            delay: _ + .1,
                            onComplete: function() {
                                i.$global_btn.css({
                                    pointerEvents: ""
                                }),
                                i.$global_sns.css({
                                    pointerEvents: ""
                                }),
                                t.removeAttr("style")
                            }
                        }),
                        TweenMax.fromTo(r.find(".splash__bg__inner"), 1.6, {
                            left: "",
                            width: "",
                            scale: 1.1
                        }, {
                            scale: 1,
                            ease: d,
                            delay: _ + .6
                        }),
                        TweenMax.fromTo(r, 1.6, {
                            left: "",
                            width: "",
                            scale: .72
                        }, {
                            scale: 1,
                            ease: d,
                            delay: _ + .6,
                            onComplete: function() {
                                r.removeAttr("style"),
                                i.FixedMovie.pause()
                            }
                        }),
                        TweenMax.fromTo(r, 1.4, {
                            width: "100%",
                            height: i.Window.height,
                            x: 0,
                            y: -1 * m
                        }, {
                            x: 0,
                            y: 0,
                            ease: d,
                            delay: _ + .4
                        }),
                        setTimeout((function() {
                            i.PageEvent.pageActive(s)
                        }
                        ), 1e3 * _ + 1e3 * p)) : "direct" === o && (i.trace("NOTE: 初回表示 ページを表示する"),
                        "pc" === i.LAYOUT_MODE ? (_ = 0,
                        p = 1) : (_ = 0,
                        p = .4),
                        e(".loading").remove(),
                        i.Animation.indicatorIn(1.8),
                        TweenMax.fromTo(r, 1.2, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            ease: d
                        }),
                        TweenMax.fromTo(r.find(".splash__bg__inner"), 1.6, {
                            left: "",
                            width: "",
                            scale: "direct" === o ? 1 : 1.1
                        }, {
                            scale: 1,
                            ease: d,
                            delay: _
                        }),
                        TweenMax.fromTo(r, 1.6, {
                            left: "",
                            width: "",
                            scale: "direct" === o ? 1 : .72
                        }, {
                            scale: 1,
                            ease: d,
                            delay: _,
                            onComplete: function() {
                                r.removeAttr("style")
                            }
                        }),
                        "home" === a && i.MainLogo.disable(),
                        "pc" === i.LAYOUT_MODE ? (i.Animation.footerIn(2.3),
                        TweenMax.fromTo(i.$global_btn, .6, {
                            opacity: 0,
                            pointerEvents: "none"
                        }, {
                            opacity: 1,
                            delay: _ + 2.3,
                            ease: Power3.easeOut,
                            onComplete: function() {
                                i.$global_btn.css({
                                    pointerEvents: ""
                                }),
                                i.$global_sns.css({
                                    pointerEvents: ""
                                }),
                                i.Loading.isComplete(!0)
                            }
                        }),
                        TweenMax.fromTo(i.$global_sns, .6, {
                            opacity: 0,
                            pointerEvents: "none"
                        }, {
                            opacity: 1,
                            delay: _ + 2.3,
                            ease: Power3.easeOut
                        }),
                        "home" !== s && "contact" !== s && TweenMax.fromTo(i.$under_btn, 1.4, {
                            opacity: 0,
                            y: -10
                        }, {
                            y: 0,
                            opacity: 1,
                            delay: _ + 1.6,
                            ease: Power3.easeOut,
                            onComplete: function() {}
                        })) : (i.Animation.footerIn(2.6),
                        TweenMax.fromTo(i.$global_btn, 1.4, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            delay: _ + 1.6,
                            ease: Power3.easeOut
                        }),
                        TweenMax.fromTo(i.$global_sns, 1.4, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            delay: _ + 1.6,
                            ease: Power3.easeOut
                        }),
                        "home" !== s && "contact" !== s && TweenMax.fromTo(i.$under_btn, 1.4, {
                            opacity: 0,
                            y: -10
                        }, {
                            y: 0,
                            opacity: 1,
                            delay: _ + 1,
                            ease: Power3.easeOut,
                            onComplete: function() {}
                        })),
                        "contact" === a && TweenMax.to(i.$under_btn, 1.4, {
                            opacity: 0,
                            delay: 0,
                            ease: Power3.easeOut,
                            onComplete: function() {}
                        }),
                        setTimeout((function() {
                            i.PageEvent.pageActive(s)
                        }
                        ), 1e3 * _ + 1e3 * p)),
                        i.trace("NOTE: URLを変更する"),
                        i.setLocation(s)
                    },
                    pageInitialize: function(e, o) {
                        switch (i.trace("Common -> PageEvent -> pageInitialize()"),
                        e) {
                        case "home":
                            i.PageEvent.Home.init();
                            break;
                        case "about":
                            i.PageEvent.About.init();
                            break;
                        case "photograph":
                            i.PageEvent.Photograph.init();
                            break;
                        case "movie":
                            i.PageEvent.Movie.init();
                            break;
                        case "member":
                            i.PageEvent.Member.init();
                            break;
                        case "contact":
                            i.PageEvent.Contact.init()
                        }
                    },
                    pageActive: function(e, o) {
                        switch (i.trace("Common -> PageEvent -> pageActive()"),
                        e) {
                        case "home":
                            i.PageEvent.Home.pageInAnimation(o);
                            break;
                        case "about":
                            i.PageEvent.About.pageInAnimation(o);
                            break;
                        case "photograph":
                            i.PageEvent.Photograph.pageInAnimation(o);
                            break;
                        case "movie":
                            i.PageEvent.Movie.pageInAnimation(o);
                            break;
                        case "member":
                            i.PageEvent.Member.pageInAnimation(o);
                            break;
                        case "contact":
                            i.PageEvent.Contact.pageInAnimation(o)
                        }
                    },
                    showGlobalMenu: function() {
                        i.trace("Common -> PageEvent -> showGlobalMenu()"),
                        i.$global_btn.hasClass("is-open") ? i.MenuEvent.closeGlobalMenu() : (i.$global_btn.addClass("is-open"),
                        i.$global.addClass("is-open"))
                    },
                    closeGlobalMenu: function() {
                        i.trace("Common -> PageEvent -> closeGlobalMenu()"),
                        i.$global_btn.removeClass("is-open"),
                        i.$global.removeClass("is-open")
                    }
                },
                ResizeEvent: {
                    vsl_ratio: 1280 / 720,
                    window_ratio: 0,
                    bg_offset: 0,
                    init: function() {
                        i.trace("Common -> ResizeEvent -> init()"),
                        i.Window.$window.on("resize", i.ResizeEvent.onResize).trigger("resize")
                    },
                    resizeTimer: null,
                    onResize: function(o) {
                        i.trace("Common -> ResizeEvent -> onResize()"),
                        i.Window.width = i.Window.$window.width(),
                        i.Window.height = i.Window.$window.height(),
                        i.ResizeEvent.resizeTimer || clearTimeout(i.ResizeEvent.resizeTimer),
                        e("#movie-orig .swiper-slide img").each((o,t)=>{
                            let n = e(t);
                            i.trace("$ele.width(): " + n.width()),
                            n.css({
                                width: n.width()
                            }),
                            n.closest(".movie__figure").css({
                                width: n.width()
                            })
                        }
                        ),
                        setTimeout(()=>{
                            e("#movie-orig .swiper-slide img").css({
                                width: ""
                            }),
                            e("#member-orig .swiper-slide img").css({
                                width: ""
                            }),
                            clearTimeout(i.ResizeEvent.resizeTimer)
                        }
                        , 30),
                        i.LAYOUT_MODE === i.current_layout_mode ? (e(".home__splash__item__inner").css({
                            width: e(".home__splash").width()
                        }),
                        n = -1 * (0 - i.Window.height),
                        i.Window.width <= i.BREAK_POINT_SP || i.user_agent.Mobile ? i.LAYOUT_MODE = "sp" : i.LAYOUT_MODE = "pc",
                        "sp" !== i.LAYOUT_MODE && i.HomeMovie.resizeImage()) : location.reload()
                    }
                },
                Topics: {
                    is_active: !1,
                    topics_index: 0,
                    topics_timer: null,
                    $arr_topics: e(".home__topics__entry"),
                    topics_max_count: 0,
                    type_count: 0,
                    init: function() {
                        i.trace("Topics -> init"),
                        this.is_active = !0,
                        this.changeTopics(0),
                        e(".home__topics__entry a").on("click", (function(o) {
                            "#" === e(this).attr("href") && o.preventDefault()
                        }
                        ))
                    },
                    pause: function() {
                        i.trace("Topics -> pause"),
                        this.topics_timer && clearTimeout(this.topics_timer)
                    },
                    restart: function() {
                        i.trace("Topics -> restart"),
                        clearTimeout(this.topics_timer),
                        this.topics_index = 0,
                        this.is_active = !0,
                        this.changeTopics(0)
                    },
                    changeTopics: function(o) {
                        i.trace("Topics -> changeTopics"),
                        i.Topics.$arr_topics = e(".home__topics__entry"),
                        i.Topics.topics_max_count = i.Topics.$arr_topics.length,
                        o >= i.Topics.topics_max_count && (o = 0),
                        i.Topics.$target = i.Topics.$arr_topics.eq(o),
                        i.Topics.$arr_topics.hide(),
                        i.Topics.$target.removeAttr("style"),
                        i.Topics.$target.show();
                        let t = i.Topics.$target.width();
                        if ("pc" !== i.LAYOUT_MODE) {
                            var n = i.Topics.$target.find(".home__topics__entry__outer")
                              , a = n.width() - e(".home__topics__entry").width();
                            (a = Math.min(0, -1 * a)) < 0 && (a -= 100),
                            n.velocity("stop").css({
                                left: "",
                                opacity: 0
                            }).velocity({
                                opacity: 1
                            }, {
                                duration: 600
                            }).velocity({
                                left: a
                            }, {
                                duration: 4e3,
                                easing: "linear",
                                complete: function() {
                                    i.Topics.topics_timer = setTimeout((function() {
                                        n.velocity({
                                            opacity: 0
                                        }, {
                                            duration: 400,
                                            complete: function() {
                                                i.Topics.changeTopics(++o)
                                            }
                                        })
                                    }
                                    ), 2e3)
                                }
                            })
                        } else
                            i.Topics.$target.css({
                                width: 0,
                                opacity: 1
                            }).velocity("stop").velocity({
                                width: t
                            }, {
                                duration: 1600,
                                easing: "linear"
                            });
                        clearTimeout(i.Topics.topics_timer),
                        "pc" === i.LAYOUT_MODE && (i.Topics.topics_timer = setTimeout((function() {
                            i.Topics.$target.velocity({
                                opacity: 0
                            }, {
                                duration: 400,
                                complete: function() {
                                    i.Topics.changeTopics(++o)
                                }
                            })
                        }
                        ), 6e3))
                    }
                },
                setSwitchOrientation: function() {
                    i.trace("Common -> setSwitchOrientation()");
                    let t = e("body");
                    function n() {
                        if ("pc" === i.LAYOUT_MODE)
                            return;
                        if (!i.is_mobile)
                            return;
                        0 === o.orientation ? (t.addClass("portrait"),
                        t.removeClass("landscape")) : (t.addClass("landscape"),
                        t.removeClass("portrait"))
                    }
                    n(),
                    -1 !== navigator.userAgent.search(/iPhone/) ? o.onorientationchange = n : o.onresize = n,
                    e((function() {
                        e(o).resize((function() {
                            0 === o.orientation ? (t.addClass("portrait"),
                            t.removeClass("landscape")) : (t.addClass("landscape"),
                            t.removeClass("portrait"))
                        }
                        ))
                    }
                    ))
                },
                initPreLoader: function() {
                    i.trace("Common -> initPreLoader()"),
                    this.img_len = e("img").length,
                    i.timeout_timer = setTimeout((function() {
                        i.hidePreLoader()
                    }
                    ), i.timeout_limit),
                    this.img_len > 0 ? this.setPreLoader() : this.hidePreLoader()
                },
                setPreLoader: function() {
                    i.trace("Common -> setPreloader()");
                    let o = this;
                    i.trace("PRELOADER", "initLoad");
                    for (let t = 0; t < this.img_len; t++) {
                        let i = e("img:eq(" + t + ")").attr("src");
                        o.img_src_ary.push(i)
                    }
                    e(document).smartpreload({
                        images: o.img_src_ary,
                        oneachimageload: function(e) {
                            i.is_load_complete || (o.loaded_img_len++,
                            i.onLoadUpdate())
                        },
                        onloadall: function() {
                            i.trace("PRELOADER :: All item is loaded."),
                            i.hidePreLoader()
                        }
                    })
                },
                onLoadUpdate: function() {
                    i.trace("Common -> onLoadUpdate()");
                    i.trace("PRELOADER :: " + this.loaded_img_len + "/" + this.img_src_ary.length + " Loaded"),
                    this.loaded_img_len === this.img_src_ary.length && i.trace("PRELOADER :: All item is loaded.")
                },
                showPreLoader: function() {
                    i.trace("Common -> showPreloader()"),
                    i.initPreLoader()
                },
                hidePreLoader: function() {
                    if (i.trace("Common -> hidePreLoader()"),
                    !i.is_load_complete)
                        if (i.is_load_complete = !0,
                        this.init(),
                        -1 !== o.location.href.indexOf("#!")) {
                            let e = o.location.href.split("/#!/")[1];
                            e = e.replace(/\//g, ""),
                            i.gotoDirect(e)
                        } else
                            i.Loading.init()
                },
                getURLQuery: function() {
                    let e, o;
                    i.trace("Common -> getURLQuery()");
                    let t = location.href.split("?");
                    if (t.length < 2)
                        return !1;
                    e = t[1].split("&");
                    let n = [];
                    for (let t = 0; t < e.length; t++)
                        o = e[t].split("="),
                        n.push(o[0]),
                        n[o[0]] = o[1];
                    return n
                },
                setUserAgent: function() {
                    i.trace("Common -> setUserAgent()");
                    let e = o.navigator.userAgent.toLowerCase()
                      , t = o.navigator.appVersion.toLowerCase()
                      , n = "unknown";
                    return -1 !== o.navigator.platform.indexOf("Win") ? (i.is_windows = !0,
                    i.$body.addClass("windows")) : e.match(/macintosh/) && (i.is_mac = !0,
                    i.$body.addClass("mac")),
                    -1 !== e.indexOf("msie") ? -1 !== t.indexOf("msie 6.") ? (n = "ie6",
                    i.is_ie6 = !0) : -1 !== t.indexOf("msie 7.") ? (n = "ie7",
                    i.is_ie7 = !0) : -1 !== t.indexOf("msie 8.") ? (n = "ie8",
                    i.is_ie8 = !0) : -1 !== t.indexOf("msie 9.") ? (n = "ie9",
                    i.is_ie9 = !0) : -1 !== t.indexOf("msie 10.") ? (n = "ie10",
                    i.is_ie10 = !0) : (n = "ie",
                    i.is_ie = !0) : -1 !== e.indexOf("trident/7") ? (n = "ie11",
                    i.is_ie11 = !0) : -1 !== e.indexOf("chrome") ? (n = "chrome",
                    i.is_chrome = !0) : -1 !== e.indexOf("safari") ? (n = "safari",
                    i.is_safari = !0) : -1 !== e.indexOf("opera") ? (n = "opera",
                    i.is_opera = !0) : -1 !== e.indexOf("firefox") && (n = "firefox",
                    i.is_firefox = !0),
                    -1 !== e.indexOf("edge") && (n = "edge",
                    i.is_edge = !0),
                    i.$body.addClass(n),
                    -1 !== e.indexOf("mobile") && (i.$body.addClass("mobile"),
                    i.is_mobile = !0),
                    -1 !== e.indexOf("ipad") && (i.$body.addClass("mobile"),
                    i.is_tablet = !0),
                    -1 !== e.indexOf("android") && (i.$body.addClass("android"),
                    i.is_android = !0),
                    function(e) {
                        let o = e.indexOf("trident/7") > -1 || e.indexOf("msie") > -1 && -1 === e.indexOf("opera");
                        return {
                            Tablet: -1 !== e.indexOf("windows") && -1 !== e.indexOf("touch") || -1 !== e.indexOf("ipad") || -1 !== e.indexOf("android") && -1 === e.indexOf("mobile") || -1 !== e.indexOf("firefox") && -1 !== e.indexOf("tablet") || -1 !== e.indexOf("kindle") || -1 !== e.indexOf("silk") || -1 !== e.indexOf("playbook"),
                            Mobile: -1 !== e.indexOf("windows") && -1 !== e.indexOf("phone") || -1 !== e.indexOf("iphone") || -1 !== e.indexOf("ipod") || -1 !== e.indexOf("android") && -1 !== e.indexOf("mobile") || -1 !== e.indexOf("firefox") && -1 !== e.indexOf("mobile") || -1 !== e.indexOf("blackberry"),
                            Android: -1 !== e.indexOf("android"),
                            iOS: -1 !== e.indexOf("iphone") || -1 !== e.indexOf("ipod") || -1 !== e.indexOf("ipad"),
                            IE: o,
                            IE_VERSION: o ? parseInt(e.match(/((msie|MSIE)\s|rv:)([\d\.]+)/)[3]) : -1,
                            Chrome: e.indexOf("chrome") > -1 && -1 === e.indexOf("edge"),
                            Firefox: e.indexOf("firefox") > -1,
                            Safari: e.indexOf("safari") > -1 && -1 === e.indexOf("chrome"),
                            Opera: e.indexOf("opera") > -1,
                            Edge: e.indexOf("edge") > -1
                        }
                    }(e)
                },
                trace: function(e) {
                    i.debug && console.log("[trace]" + e)
                }
            },
            i.setupOnce()
        }(jQuery, window)
    }
}
]);
//# sourceMappingURL=bundle.js.map
