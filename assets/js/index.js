webpackJsonp([1], { 0: function(e, n, t) {
        (function(e) { "use strict";
            t(75), t(1); var n = function() {
                function n() { r.on("click", t), a.on("click", function(e) { e.stopPropagation() }) }

                function t(n) { var t = e(n.currentTarget).parent("li.has-submenu"),
                        r = t.index(); return 0 != t.length ? (-1 !== o && a.eq(o).removeClass("mainmenu-open"), o === r ? (t.removeClass("mainmenu-open"), o = -1) : (t.addClass("mainmenu-open"), o = r, s.off("click").on("click", i)), !1) : void 0 }

                function i(e) { a.eq(o).removeClass("mainmenu-open"), o = -1 } var a = e("#mainmenu > ul > li"),
                    r = a.children("a"),
                    s = e("body"),
                    o = -1; return { init: n } }();! function() {
                function t() { e("#scroll_box").stop().animate({ "margin-left": "-" + u * r + "px" }, o, function() { e("#scroll_box").css("margin-left", 0); for (var n = 0; u > n; n++) e("#scroll_box").find("li").last().after(e("#scroll_box").find("li").first()) }) } var i = { nextButton: !1, prevButton: !1, pagination: !0, animateStartingFrameIn: !0, autoPlay: !0, autoPlayDelay: 6e3, preloader: !0 };
                e("#sequence").sequence(i).data("sequence"), n.init(); var a = e("#scroll_box li").length,
                    r = e("#scroll_box li").outerWidth(!0),
                    s = e(".box").outerWidth(!0),
                    o = (Math.ceil(s / r), 3e3),
                    u = 1;
                e("#scroll_box").css("width", a * r), setInterval(t, 3e4) }() }).call(n, t(2)) }, 75: function(e, n, t) {
        (function(e) { "use strict"; var n = t(38),
                i = function(e) { return e && e.__esModule ? e : { default: e } }(n);! function(e) {
                function n(n, i, a, r) {
                    function s() { c.afterLoaded(), c.settings.hideFramesUntilPreloaded && void 0 !== c.settings.preloader && !1 !== c.settings.preloader && c.frames.show(), void 0 !== c.settings.preloader && !1 !== c.settings.preloader ? c.settings.hidePreloaderUsingCSS && c.transitionsSupported ? (c.prependPreloadingCompleteTo = !0 === c.settings.prependPreloadingComplete ? c.settings.preloader : e(c.settings.prependPreloadingComplete), c.prependPreloadingCompleteTo.addClass("preloading-complete"), setTimeout(u, c.settings.hidePreloaderDelay)) : c.settings.preloader.fadeOut(c.settings.hidePreloaderDelay, function() { clearInterval(c.defaultPreloader), u() }) : u() }

                    function o(n, t) { var i = []; if (t)
                            for (var a = n; a > 0; a--) i.push(e("body").find('img[src="' + c.settings.preloadTheseImages[a - 1] + '"]'));
                        else
                            for (var r = n; r > 0; r--) c.frames.eq(c.settings.preloadTheseFrames[r - 1] - 1).find("img").each(function() { i.push(e(this)[0]) }); return i }

                    function u() {
                        function n(e, n) { var t, i; for (i in n) t = "left" === i || "right" === i ? r[i] : i, e === parseFloat(t) && c._initCustomKeyEvent(n[i]) }

                        function t() { c.canvas.on("touchmove.sequence", i), s = null, u = !1 }

                        function i(e) { if (c.settings.swipePreventsDefault && e.preventDefault(), u) { var n = e.originalEvent.touches[0].pageX,
                                    i = e.originalEvent.touches[0].pageY,
                                    a = s - n,
                                    r = o - i;
                                Math.abs(a) >= c.settings.swipeThreshold ? (t(), a > 0 ? c._initCustomKeyEvent(c.settings.swipeEvents.left) : c._initCustomKeyEvent(c.settings.swipeEvents.right)) : Math.abs(r) >= c.settings.swipeThreshold && (t(), r > 0 ? c._initCustomKeyEvent(c.settings.swipeEvents.down) : c._initCustomKeyEvent(c.settings.swipeEvents.up)) } }

                        function a(e) { 1 === e.originalEvent.touches.length && (s = e.originalEvent.touches[0].pageX, o = e.originalEvent.touches[0].pageY, u = !0, c.canvas.on("touchmove.sequence", i)) } if (e(c.settings.preloader).remove(), c.nextButton = c._renderUiElements(c.settings.nextButton, ".sequence-next"), c.prevButton = c._renderUiElements(c.settings.prevButton, ".sequence-prev"), c.pauseButton = c._renderUiElements(c.settings.pauseButton, ".sequence-pause"), c.pagination = c._renderUiElements(c.settings.pagination, ".sequence-pagination"), void 0 !== c.nextButton && !1 !== c.nextButton && !0 === c.settings.showNextButtonOnInit && c.nextButton.show(), void 0 !== c.prevButton && !1 !== c.prevButton && !0 === c.settings.showPrevButtonOnInit && c.prevButton.show(), void 0 !== c.pauseButton && !1 !== c.pauseButton && !0 === c.settings.showPauseButtonOnInit && c.pauseButton.show(), !1 !== c.settings.pauseIcon ? (c.pauseIcon = c._renderUiElements(c.settings.pauseIcon, ".sequence-pause-icon"), void 0 !== c.pauseIcon && c.pauseIcon.hide()) : c.pauseIcon = void 0, void 0 !== c.pagination && !1 !== c.pagination && (c.paginationLinks = c.pagination.children(), c.paginationLinks.on("click.sequence", function() { var n = e(this).index() + 1;
                                c.goTo(n) }), !0 === c.settings.showPaginationOnInit && c.pagination.show()), c.nextFrameID = c.settings.startingFrameID, !0 === c.settings.hashTags && (c.frames.each(function() { c.frameHashID.push(e(this).prop(c.getHashTagFrom)) }), c.currentHashTag = location.hash.replace("#", ""), void 0 === c.currentHashTag || "" === c.currentHashTag ? c.nextFrameID = c.settings.startingFrameID : (c.frameHashIndex = e.inArray(c.currentHashTag, c.frameHashID), -1 !== c.frameHashIndex ? c.nextFrameID = c.frameHashIndex + 1 : c.nextFrameID = c.settings.startingFrameID)), c.nextFrame = c.frames.eq(c.nextFrameID - 1), c.nextFrameChildren = c.nextFrame.children(), void 0 !== c.pagination && e(c.paginationLinks[c.settings.startingFrameID - 1]).addClass("current"), c.transitionsSupported ? c.settings.animateStartingFrameIn ? c.settings.reverseAnimationsWhenNavigatingBackwards && c.settings.autoPlayDirection - 1 && c.settings.animateStartingFrameIn ? (c._resetElements(c.transitionPrefix, c.nextFrameChildren, "0s"), c.nextFrame.addClass("animate-out"), c.goTo(c.nextFrameID, -1, !0)) : c.goTo(c.nextFrameID, 1, !0) : (c.currentFrameID = c.nextFrameID, c.settings.moveActiveFrameToTop && c.nextFrame.css("z-index", c.numberOfFrames), c._resetElements(c.transitionPrefix, c.nextFrameChildren, "0s"), c.nextFrame.addClass("animate-in"), c.settings.hashTags && c.settings.hashChangesOnFirstFrame && (c.currentHashTag = c.nextFrame.prop(c.getHashTagFrom), document.location.hash = "#" + c.currentHashTag), setTimeout(function() { c._resetElements(c.transitionPrefix, c.nextFrameChildren, "") }, 100), c._resetAutoPlay(!0, c.settings.autoPlayDelay)) : (c.container.addClass("sequence-fallback"), c.currentFrameID = c.nextFrameID, c.settings.hashTags && c.settings.hashChangesOnFirstFrame && (c.currentHashTag = c.nextFrame.prop(c.getHashTagFrom), document.location.hash = "#" + c.currentHashTag), c.frames.addClass("animate-in"), c.frames.not(":eq(" + (c.nextFrameID - 1) + ")").css({ display: "none", opacity: 0 }), c._resetAutoPlay(!0, c.settings.autoPlayDelay)), void 0 !== c.nextButton && c.nextButton.bind("click.sequence", function() { c.next() }), void 0 !== c.prevButton && c.prevButton.bind("click.sequence", function() { c.prev() }), void 0 !== c.pauseButton && c.pauseButton.bind("click.sequence", function() { c.pause(!0) }), c.settings.keyNavigation) { var r = { left: 37, right: 39 };
                            e(document).bind("keydown.sequence", function(e) { var t = String.fromCharCode(e.keyCode);
                                t > 0 && t <= c.numberOfFrames && c.settings.numericKeysGoToFrames && (c.nextFrameID = t, c.goTo(c.nextFrameID)), n(e.keyCode, c.settings.keyEvents), n(e.keyCode, c.settings.customKeyEvents) }) } if (c.canvas.on({ "mouseenter.sequence": function() { c.settings.pauseOnHover && c.settings.autoPlay && !c.hasTouch && (c.isBeingHoveredOver = !0, c.isHardPaused || c.pause()) }, "mouseleave.sequence": function() { c.settings.pauseOnHover && c.settings.autoPlay && !c.hasTouch && (c.isBeingHoveredOver = !1, c.isHardPaused || c.unpause()) } }), c.settings.hashTags && e(window).bind("hashchange.sequence", function() { var n = location.hash.replace("#", "");
                                c.currentHashTag !== n && (c.currentHashTag = n, c.frameHashIndex = e.inArray(c.currentHashTag, c.frameHashID), -1 !== c.frameHashIndex && (c.nextFrameID = c.frameHashIndex + 1, c.goTo(c.nextFrameID))) }), c.settings.swipeNavigation && c.hasTouch) { var s, o, u = !1;
                            c.canvas.on("touchstart.sequence", a) } } var c = this;
                    c.container = e(n), c.canvas = c.container.children(".sequence-canvas"), c.frames = c.canvas.children("li"), c._modernizrForSequence(); var d = { WebkitTransition: "-webkit-", WebkitAnimation: "-webkit-", MozTransition: "-moz-", "MozAnimation ": "-moz-", OTransition: "-o-", OAnimation: "-o-", msTransition: "-ms-", msAnimation: "-ms-", transition: "", animation: "" },
                        l = { WebkitTransition: "webkitTransitionEnd.sequence", WebkitAnimation: "webkitAnimationEnd.sequence", MozTransition: "transitionend.sequence", MozAnimation: "animationend.sequence", OTransition: "otransitionend.sequence", OAnimation: "oanimationend.sequence", msTransition: "MSTransitionEnd.sequence", msAnimation: "MSAnimationEnd.sequence", transition: "transitionend.sequence", animation: "animationend.sequence" };
                    c.transitionPrefix = d[ModernizrForSequence.prefixed("transition")], c.animationPrefix = d[ModernizrForSequence.prefixed("animation")], c.transitionProperties = {}, c.transitionEnd = l[ModernizrForSequence.prefixed("transition")] + " " + l[ModernizrForSequence.prefixed("animation")], c.numberOfFrames = c.frames.length, c.transitionsSupported = void 0 !== c.transitionPrefix, c.hasTouch = "ontouchstart" in window, c.isPaused = !1, c.isBeingHoveredOver = !1, c.container.removeClass("sequence-destroyed"), c.paused = function() {}, c.unpaused = function() {}, c.beforeNextFrameAnimatesIn = function() {}, c.afterNextFrameAnimatesIn = function() {}, c.beforeCurrentFrameAnimatesOut = function() {}, c.afterCurrentFrameAnimatesOut = function() {}, c.afterLoaded = function() {}, c.destroyed = function() {}, c.settings = e.extend({}, a, i), c.settings.preloader = c._renderUiElements(c.settings.preloader, ".sequence-preloader"), c.isStartingFrame = !!c.settings.animateStartingFrameIn, c.settings.unpauseDelay = null === c.settings.unpauseDelay ? c.settings.autoPlayDelay : c.settings.unpauseDelay, c.getHashTagFrom = c.settings.hashDataAttribute ? "data-sequence-hashtag" : "id", c.frameHashID = [], c.direction = c.settings.autoPlayDirection, c.settings.hideFramesUntilPreloaded && void 0 !== c.settings.preloader && !1 !== c.settings.preloader && c.frames.hide(), "-o-" === c.transitionPrefix && (c.transitionsSupported = c._operaTest()), c.frames.removeClass("animate-in"); var m = c.settings.preloadTheseFrames.length,
                        p = c.settings.preloadTheseImages.length; if (void 0 === c.settings.preloader || !1 === c.settings.preloader || 0 === m && 0 === p) !0 === t ? (s(), e(this).unbind("load.sequence")) : e(window).bind("load.sequence", function() { s(), e(this).unbind("load.sequence") });
                    else { var g = o(m),
                            h = o(p, !0),
                            f = e(g.concat(h));! function(n, t) {
                            function i() { var n = e(l),
                                    i = e(m);
                                o && (m.length ? o.reject(c, n, i) : o.resolve(c)), e.isFunction(t) && t.call(s, c, n, i) }

                            function a(n, t) { n.src !== r && -1 === e.inArray(n, d) && (d.push(n), t ? m.push(n) : l.push(n), e.data(n, "imagesLoaded", { isBroken: t, src: n.src }), u && o.notifyWith(e(n), [t, c, e(l), e(m)]), c.length === d.length && (setTimeout(i), c.unbind(".imagesLoaded"))) } var r = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
                                s = n,
                                o = e.isFunction(e.Deferred) ? e.Deferred() : 0,
                                u = e.isFunction(o.notify),
                                c = s.find("img").add(s.filter("img")),
                                d = [],
                                l = [],
                                m = [];
                            e.isPlainObject(t) && e.each(t, function(e, n) { "callback" === e ? t = n : o && o[e](n) }), c.length ? c.bind("load.imagesLoaded error.imagesLoaded", function(e) { a(e.target, "error" === e.type) }).each(function(n, t) { var i = t.src,
                                    s = e.data(t, "imagesLoaded"); return s && s.src === i ? void a(t, s.isBroken) : t.complete && void 0 !== t.naturalWidth ? void a(t, 0 === t.naturalWidth || 0 === t.naturalHeight) : void((t.readyState || t.complete) && (t.src = r, t.src = i)) }) : i() }(f, s) } } var t = !1;
                e(window).bind("load", function() { t = !0 }), n.prototype = { startAutoPlay: function(e) { var n = this;
                        e = void 0 === e ? n.settings.autoPlayDelay : e, n.unpause(), n._resetAutoPlay(), n.autoPlayTimer = setTimeout(function() { 1 === n.settings.autoPlayDirection ? n.next() : n.prev() }, e) }, stopAutoPlay: function() { var e = this;
                        e.pause(!0), clearTimeout(e.autoPlayTimer) }, pause: function(e) { var n = this;
                        n.isSoftPaused ? n.unpause() : (void 0 !== n.pauseButton && (n.pauseButton.addClass("paused"), void 0 !== n.pauseIcon && n.pauseIcon.show()), n.paused(), n.isSoftPaused = !0, n.isHardPaused = !!e, n.isPaused = !0, n._resetAutoPlay()) }, unpause: function(e) { var n = this;
                        void 0 !== n.pauseButton && (n.pauseButton.removeClass("paused"), void 0 !== n.pauseIcon && n.pauseIcon.hide()), n.isSoftPaused = !1, n.isHardPaused = !1, n.isPaused = !1, n.active ? n.delayUnpause = !0 : (!1 !== e && n.unpaused(), n._resetAutoPlay(!0, n.settings.unpauseDelay)) }, next: function() { var e = this;
                        e.nextFrameID = e.currentFrameID !== e.numberOfFrames ? e.currentFrameID + 1 : 1, !1 === e.active || void 0 === e.active ? e.goTo(e.nextFrameID, 1) : e.goTo(e.nextFrameID, 1, !0) }, prev: function() { var e = this;
                        e.nextFrameID = 1 === e.currentFrameID ? e.numberOfFrames : e.currentFrameID - 1, !1 === e.active || void 0 === e.active ? e.goTo(e.nextFrameID, -1) : e.goTo(e.nextFrameID, -1, !0) }, goTo: function(n, t, i) { var a = this;
                        n = parseFloat(n); var r = !0 === i ? 0 : a.settings.transitionThreshold; if (n === a.currentFrameID || a.settings.navigationSkip && a.navigationSkipThresholdActive || !a.settings.navigationSkip && a.active || !a.transitionsSupported && a.active || !a.settings.cycle && 1 === t && a.currentFrameID === a.numberOfFrames || !a.settings.cycle && -1 === t && 1 === a.currentFrameID || a.settings.preventReverseSkipping && a.direction !== t && a.active) return !1; if (a.settings.navigationSkip && a.active && (a.navigationSkipThresholdActive = !0, a.settings.fadeFrameWhenSkipped && a.nextFrame.stop().animate({ opacity: 0 }, a.settings.fadeFrameTime), clearTimeout(a.transitionThresholdTimer), setTimeout(function() { a.navigationSkipThresholdActive = !1 }, a.settings.navigationSkipThreshold)), !a.active || a.settings.navigationSkip) { if (a.active = !0, a._resetAutoPlay(), a.direction = void 0 === t ? n > a.currentFrameID ? 1 : -1 : t, a.currentFrame = a.canvas.children(".animate-in"), a.nextFrame = a.frames.eq(n - 1), a.currentFrameChildren = a.currentFrame.children(), a.nextFrameChildren = a.nextFrame.children(), void 0 !== a.pagination && (a.paginationLinks.removeClass("current"), e(a.paginationLinks[n - 1]).addClass("current")), a.transitionsSupported) void 0 !== a.currentFrame.length ? (a.beforeCurrentFrameAnimatesOut(), a.settings.moveActiveFrameToTop && a.currentFrame.css("z-index", 1), a._resetElements(a.transitionPrefix, a.nextFrameChildren, "0s"), a.settings.reverseAnimationsWhenNavigatingBackwards && 1 !== a.direction ? a.settings.reverseAnimationsWhenNavigatingBackwards && -1 === a.direction && (a.nextFrame.addClass("animate-out"), a._reverseTransitionProperties()) : (a.nextFrame.removeClass("animate-out"), a._resetElements(a.transitionPrefix, a.currentFrameChildren, ""))) : a.isStartingFrame = !1, a.active = !0, a.currentFrame.unbind(a.transitionEnd), a.nextFrame.unbind(a.transitionEnd), a.settings.fadeFrameWhenSkipped && a.settings.navigationSkip && a.nextFrame.css("opacity", 1), a.beforeNextFrameAnimatesIn(), a.settings.moveActiveFrameToTop && a.nextFrame.css("z-index", a.numberOfFrames), a.settings.reverseAnimationsWhenNavigatingBackwards && 1 !== a.direction ? a.settings.reverseAnimationsWhenNavigatingBackwards && -1 === a.direction && (setTimeout(function() { a._resetElements(a.transitionPrefix, a.currentFrameChildren, ""), a._resetElements(a.transitionPrefix, a.nextFrameChildren, ""), a._reverseTransitionProperties(), a._waitForAnimationsToComplete(a.nextFrame, a.nextFrameChildren, "in"), ("function () {}" !== a.afterCurrentFrameAnimatesOut || !0 === a.settings.transitionThreshold && !0 !== i) && a._waitForAnimationsToComplete(a.currentFrame, a.currentFrameChildren, "out", !0, -1) }, 50), setTimeout(function() {!1 === a.settings.transitionThreshold || 0 === a.settings.transitionThreshold || !0 === i ? (a.currentFrame.removeClass("animate-in"), a.nextFrame.toggleClass("animate-out animate-in")) : (a.currentFrame.removeClass("animate-in"), !0 !== a.settings.transitionThreshold && (a.transitionThresholdTimer = setTimeout(function() { a.nextFrame.toggleClass("animate-out animate-in") }, r))) }, 50)) : (setTimeout(function() { a._resetElements(a.transitionPrefix, a.nextFrameChildren, ""), a._waitForAnimationsToComplete(a.nextFrame, a.nextFrameChildren, "in"), ("function () {}" !== a.afterCurrentFrameAnimatesOut || !0 === a.settings.transitionThreshold && !0 !== i) && a._waitForAnimationsToComplete(a.currentFrame, a.currentFrameChildren, "out", !0, 1) }, 50), setTimeout(function() {!1 === a.settings.transitionThreshold || 0 === a.settings.transitionThreshold || !0 === i ? (a.currentFrame.toggleClass("animate-out animate-in"), a.nextFrame.addClass("animate-in")) : (a.currentFrame.toggleClass("animate-out animate-in"), !0 !== a.settings.transitionThreshold && (a.transitionThresholdTimer = setTimeout(function() { a.nextFrame.addClass("animate-in") }, r))) }, 50));
                            else { var s = function() { a._setHashTag(), a.active = !1, a._resetAutoPlay(!0, a.settings.autoPlayDelay) }; switch (a.settings.fallback.theme) {
                                    case "fade":
                                        a.frames.css({ position: "relative" }), a.beforeCurrentFrameAnimatesOut(), a.currentFrame = a.frames.eq(a.currentFrameID - 1), a.currentFrame.animate({ opacity: 0 }, a.settings.fallback.speed, function() { a.currentFrame.css({ display: "none", "z-index": "1" }), a.afterCurrentFrameAnimatesOut(), a.beforeNextFrameAnimatesIn(), a.nextFrame.css({ display: "block", "z-index": a.numberOfFrames }).animate({ opacity: 1 }, 500, function() { a.afterNextFrameAnimatesIn() }), s() }), a.frames.css({ position: "relative" }); break;
                                    case "slide":
                                    default:
                                        var o = {},
                                            u = {},
                                            c = {};
                                        1 === a.direction ? (o.left = "-100%", u.left = "100%") : (o.left = "100%", u.left = "-100%"), c.left = "0", c.opacity = 1, a.currentFrame = a.frames.eq(a.currentFrameID - 1), a.beforeCurrentFrameAnimatesOut(), a.currentFrame.animate(o, a.settings.fallback.speed, function() { a.currentFrame.css({ display: "none", "z-index": "1" }), a.afterCurrentFrameAnimatesOut() }), a.beforeNextFrameAnimatesIn(), a.nextFrame.show().css(u), a.nextFrame.css({ display: "block", "z-index": a.numberOfFrames }).animate(c, a.settings.fallback.speed, function() { s(), a.afterNextFrameAnimatesIn() }) } } a.currentFrameID = n } }, destroy: function(n) { var t = this;
                        t.container.addClass("sequence-destroyed"), void 0 !== t.nextButton && t.nextButton.unbind("click.sequence"), void 0 !== t.prevButton && t.prevButton.unbind("click.sequence"), void 0 !== t.pauseButton && t.pauseButton.unbind("click.sequence"), void 0 !== t.pagination && t.paginationLinks.unbind("click.sequence"), e(document).unbind("keydown.sequence"), t.canvas.unbind("mouseenter.sequence, mouseleave.sequence, touchstart.sequence, touchmove.sequence"), e(window).unbind("hashchange.sequence"), t.stopAutoPlay(), clearTimeout(t.transitionThresholdTimer), t.canvas.children("li").remove(), t.canvas.prepend(t.frames), t.frames.removeClass("animate-in animate-out").removeAttr("style"), t.frames.eq(t.currentFrameID - 1).addClass("animate-in"), void 0 !== t.nextButton && !1 !== t.nextButton && t.nextButton.hide(), void 0 !== t.prevButton && !1 !== t.prevButton && t.prevButton.hide(), void 0 !== t.pauseButton && !1 !== t.pauseButton && t.pauseButton.hide(), void 0 !== t.pauseIcon && !1 !== t.pauseIcon && t.pauseIcon.hide(), void 0 !== t.pagination && !1 !== t.pagination && t.pagination.hide(), void 0 !== n && n(), t.destroyed(), t.container.removeData() }, _initCustomKeyEvent: function(e) { var n = this; switch (e) {
                            case "next":
                                n.next(); break;
                            case "prev":
                                n.prev(); break;
                            case "pause":
                                n.pause(!0) } }, _resetElements: function(e, n, t) { var i = this;
                        n.css(i._prefixCSS(e, { "transition-duration": t, "transition-delay": t, "transition-timing-function": "" })) }, _reverseTransitionProperties: function() { var n = this,
                            t = [],
                            i = [];
                        n.currentFrameChildren.each(function() { t.push(parseFloat(e(this).css(n.transitionPrefix + "transition-duration").replace("s", "")) + parseFloat(e(this).css(n.transitionPrefix + "transition-delay").replace("s", ""))) }), n.nextFrameChildren.each(function() { i.push(parseFloat(e(this).css(n.transitionPrefix + "transition-duration").replace("s", "")) + parseFloat(e(this).css(n.transitionPrefix + "transition-delay").replace("s", ""))) }); var a = Math.max.apply(Math, t),
                            r = Math.max.apply(Math, i),
                            s = a - r,
                            o = 0,
                            u = 0;
                        s < 0 && !n.settings.preventDelayWhenReversingAnimations ? o = Math.abs(s) : s > 0 && (u = Math.abs(s)); var c = function(t, i, a, r) {
                            function s(e) { e = e.split(",")[0]; var n = { linear: "cubic-bezier(0.0,0.0,1.0,1.0)", ease: "cubic-bezier(0.25, 0.1, 0.25, 1.0)", "ease-in": "cubic-bezier(0.42, 0.0, 1.0, 1.0)", "ease-in-out": "cubic-bezier(0.42, 0.0, 0.58, 1.0)", "ease-out": "cubic-bezier(0.0, 0.0, 0.58, 1.0)" }; return e.indexOf("cubic-bezier") < 0 && (e = n[e]), e } i.each(function() { var i = parseFloat(e(this).css(n.transitionPrefix + "transition-duration").replace("s", "")),
                                    o = parseFloat(e(this).css(n.transitionPrefix + "transition-delay").replace("s", "")),
                                    u = e(this).css(n.transitionPrefix + "transition-timing-function"); if (-1 === u.indexOf("cubic")) var u = s(u); var c = u.replace("cubic-bezier(", "").replace(")", "").split(",");
                                e.each(c, function(e, n) { c[e] = parseFloat(n) }), u = "cubic-bezier(" + [1 - c[2], 1 - c[3], 1 - c[0], 1 - c[1]] + ")"; var d = i + o;
                                t["transition-duration"] = i + "s", t["transition-delay"] = a - d + r + "s", t["transition-timing-function"] = u, e(this).css(n._prefixCSS(n.transitionPrefix, t)) }) };
                        c(n.transitionProperties, n.currentFrameChildren, a, o), c(n.transitionProperties, n.nextFrameChildren, r, u) }, _prefixCSS: function(e, n) { var t = {}; for (var i in n) t[e + i] = n[i]; return t }, _resetAutoPlay: function(e, n) { var t = this;!0 === e ? t.settings.autoPlay && !t.isSoftPaused && (clearTimeout(t.autoPlayTimer), t.autoPlayTimer = setTimeout(function() { 1 === t.settings.autoPlayDirection ? t.next() : t.prev() }, n)) : clearTimeout(t.autoPlayTimer) }, _renderUiElements: function(n, t) { var i = this; switch (n) {
                            case !1:
                                return;
                            case !0:
                                return ".sequence-preloader" === t && i._defaultPreloader(i.container, i.transitionsSupported, i.animationPrefix), e(t);
                            default:
                                return e(n) } }, _waitForAnimationsToComplete: function(n, t, i, a, r) { var s = this; if ("out" === i) var o = function() { s.afterCurrentFrameAnimatesOut(), !0 === s.settings.transitionThreshold && (1 === r ? s.nextFrame.addClass("animate-in") : -1 === r && s.nextFrame.toggleClass("animate-out animate-in")) };
                        else if ("in" === i) var o = function() { s.afterNextFrameAnimatesIn(), s._setHashTag(), s.active = !1, s.isHardPaused || s.isBeingHoveredOver || (s.delayUnpause ? (s.delayUnpause = !1, s.unpause()) : s.unpause(!1)) };
                        t.data("animationEnded", !1), n.bind(s.transitionEnd, function(i) { e(i.target).data("animationEnded", !0); var a = !0;
                            t.each(function() { if (!1 === e(this).data("animationEnded")) return a = !1, !1 }), a && (n.unbind(s.transitionEnd), o()) }) }, _setHashTag: function() { var n = this;
                        n.settings.hashTags && (n.currentHashTag = n.nextFrame.prop(n.getHashTagFrom), n.frameHashIndex = e.inArray(n.currentHashTag, n.frameHashID), -1 === n.frameHashIndex || !n.settings.hashChangesOnFirstFrame && n.isStartingFrame && n.transitionsSupported ? (n.nextFrameID = n.settings.startingFrameID, n.isStartingFrame = !1) : (n.nextFrameID = n.frameHashIndex + 1, document.location.hash = "#" + n.currentHashTag)) }, _modernizrForSequence: function() { window.ModernizrForSequence = function(e, n, t) {
                            function a(e) { h.cssText = e }

                            function r(e, n) { return (void 0 === e ? "undefined" : (0, i.default)(e)) === n }

                            function s(e, n) { return !!~("" + e).indexOf(n) }

                            function o(e, n) { for (var i in e) { var a = e[i]; if (!s(a, "-") && h[a] !== t) return "pfx" != n || a } return !1 }

                            function u(e, n, i) { for (var a in e) { var s = n[e[a]]; if (s !== t) return !1 === i ? e[a] : r(s, "function") ? s.bind(i || n) : s } return !1 }

                            function c(e, n, t) { var i = e.charAt(0).toUpperCase() + e.slice(1),
                                    a = (e + " " + v.join(i + " ") + i).split(" "); return r(n, "string") || r(n, "undefined") ? o(a, n) : (a = (e + " " + F.join(i + " ") + i).split(" "), u(a, n, t)) } var d, l, m = {},
                                p = n.documentElement,
                                g = n.createElement("modernizrForSequence"),
                                h = g.style,
                                f = "Webkit Moz O ms",
                                v = f.split(" "),
                                F = f.toLowerCase().split(" "),
                                x = { svg: "http://www.w3.org/2000/svg" },
                                y = {},
                                T = [],
                                b = T.slice,
                                P = {}.hasOwnProperty;
                            l = r(P, "undefined") || r(P.call, "undefined") ? function(e, n) { return n in e && r(e.constructor.prototype[n], "undefined") } : function(e, n) { return P.call(e, n) }, Function.prototype.bind || (Function.prototype.bind = function(e) { var n = self; if ("function" != typeof n) throw new TypeError; var t = b.call(arguments, 1); return function i() { if (self instanceof i) { var a = function() {};
                                        a.prototype = n.prototype; var r = new a,
                                            s = n.apply(r, t.concat(b.call(arguments))); return Object(s) === s ? s : r } return n.apply(e, t.concat(b.call(arguments))) } }), y.svg = function() { return !!n.createElementNS && !!n.createElementNS(x.svg, "svg").createSVGRect }; for (var I in y) l(y, I) && (d = I.toLowerCase(), m[d] = y[I](), T.push((m[d] ? "" : "no-") + d)); return m.addTest = function(e, n) { if ("object" == (void 0 === e ? "undefined" : (0, i.default)(e)))
                                    for (var a in e) l(e, a) && m.addTest(a, e[a]);
                                else { if (e = e.toLowerCase(), m[e] !== t) return m;
                                    n = "function" == typeof n ? n() : n, enableClasses && (p.className += " " + (n ? "" : "no-") + e), m[e] = n } return m }, a(""), g = null, m._version = "2.6.1", m._domPrefixes = F, m._cssomPrefixes = v, m.testProp = function(e) { return o([e]) }, m.testAllProps = c, m.prefixed = function(e, n, t) { return n ? c(e, n, t) : c(e, "pfx") }, m }(self, self.document) }, _defaultPreloader: function(n, t, i) { e("head").append("<style>.sequence-preloader{height: 100%;position: absolute;width: 100%;z-index: 999999;}@" + i + "keyframes preload{0%{opacity: 1;}50%{opacity: 0;}100%{opacity: 1;}}.sequence-preloader .preloading .circle{fill: #ff9442;display: inline-block;height: 12px;position: relative;top: -50%;width: 12px;" + i + "animation: preload 1s infinite; animation: preload 1s infinite;}.preloading{display:block;height: 12px;margin: 0 auto;top: 50%;margin-top:-6px;position: relative;width: 48px;}.sequence-preloader .preloading .circle:nth-child(2){" + i + "animation-delay: .15s; animation-delay: .15s;}.sequence-preloader .preloading .circle:nth-child(3){" + i + "animation-delay: .3s; animation-delay: .3s;}.preloading-complete{opacity: 0;visibility: hidden;" + i + "transition-duration: 1s; transition-duration: 1s;}div.inline{background-color: #ff9442; margin-right: 4px; float: left;}</style>"), n.prepend('<div class="sequence-preloader"><svg class="preloading" xmlns="http://www.w3.org/2000/svg"><circle class="circle" cx="6" cy="6" r="6" /><circle class="circle" cx="22" cy="6" r="6" /><circle class="circle" cx="38" cy="6" r="6" /></svg></div>'), ModernizrForSequence.svg || t ? t || setInterval(function() { e(".sequence-preloader").fadeToggle(500) }, 500) : (e(".sequence-preloader").prepend('<div class="preloading"><div class="circle inline"></div><div class="circle inline"></div><div class="circle inline"></div></div>'), setInterval(function() { e(".sequence-preloader .circle").fadeToggle(500) }, 500)) }, _operaTest: function() { e("body").append('<span id="sequence-opera-test"></span>'); var n = e("#sequence-opera-test"); return n.css("-o-transition", "1s"), "1s" !== n.css("-o-transition") ? (n.remove(), !1) : (n.remove(), !0) } }; var a = { startingFrameID: 1, cycle: !0, animateStartingFrameIn: !1, transitionThreshold: !1, reverseAnimationsWhenNavigatingBackwards: !0, preventDelayWhenReversingAnimations: !1, moveActiveFrameToTop: !0, autoPlay: !1, autoPlayDirection: 1, autoPlayDelay: 5e3, navigationSkip: !0, navigationSkipThreshold: 250, fadeFrameWhenSkipped: !0, fadeFrameTime: 150, preventReverseSkipping: !1, nextButton: !1, showNextButtonOnInit: !0, prevButton: !1, showPrevButtonOnInit: !0, pauseButton: !1, unpauseDelay: null, pauseOnHover: !0, pauseIcon: !1, showPauseButtonOnInit: !0, pagination: !1, showPaginationOnInit: !0, preloader: !1, preloadTheseFrames: [1], preloadTheseImages: [], hideFramesUntilPreloaded: !0, prependPreloadingComplete: !0, hidePreloaderUsingCSS: !0, hidePreloaderDelay: 0, keyNavigation: !0, numericKeysGoToFrames: !0, keyEvents: { left: "prev", right: "next" }, customKeyEvents: {}, swipeNavigation: !0, swipeThreshold: 20, swipePreventsDefault: !1, swipeEvents: { left: "prev", right: "next", up: !1, down: !1 }, hashTags: !1, hashDataAttribute: !1, hashChangesOnFirstFrame: !1, fallback: { theme: "slide", speed: 500 } };
                e.fn.sequence = function(t) { return this.each(function() { e.data(this, "sequence") || e.data(this, "sequence", new n(e(this), t, a)) }) } }(e) }).call(n, t(2)) } });