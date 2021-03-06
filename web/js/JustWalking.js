var JSWK = {
    nodeProtoType: function (b) {
        try {
            b.getChilds = function () {
                return JSWK.childNode(b)
            };
            b.getFirst = function () {
                return JSWK.firstNode(b)
            };
            b.getLast = function () {
                return JSWK.lastNode(b)
            };
            b.getNext = function () {
                return JSWK.nextNode(b)
            };
            b.getPrev = function () {
                return JSWK.prevNode(b)
            };
            b.appChild = function (c) {
                return JSWK.appendChild(c, b)
            };
            b.appBefore = function (c) {
                return JSWK.nodeBefore(c, b)
            };
            b.appAfter = function (c) {
                return JSWK.nodeAfter(c, b)
            }
        } catch (a) {}
        return b
    },
    childNode: function (c) {
        var b = [];
        var a = c.childNodes;
        for (i = 0; i < a.length; i++) {
            if (a[i].nodeType == 1) {
                b.push(a[i])
            }
        }
        return b
    },
    _w: "www.",
    firstNode: function (b) {
        var a = b.firstChild;
        if (a.nodeType != 1) {
            do {
                a = a.nextSibling
            } while (a.nodeType != 1)
        }
        return a
    },
    lastNode: function (b) {
        var a = b.lastChild;
        if (a.nodeType != 1) {
            do {
                a = a.previousSibling
            } while (a.nodeType != 1)
        }
        return a
    },
    nextNode: function (b) {
        var a = b.nextSibling;
        if (a.nodeType != 1) {
            do {
                a = a.nextSibling
            } while (a.nodeType != 1)
        }
        return a
    },
    prevNode: function (b) {
        var a = b.previousSibling;
        if (a.nodeType != 1) {
            do {
                a = a.previousSibling
            } while (a.nodeType != 1)
        }
        return a
    },
    appendChild: function (c, b) {
        if (c.nodeType == 1) {
            var d = c
        } else {
            var a = document.createElement("div");
            a.innerHTML = c;
            var d = JSWK.firstNode(a);
            a = null
        }
        b.appendChild(d)
    },
    _n: "kdy365.",
    nodeBefore: function (c, b) {
        if (c.nodeType == 1) {
            var d = c
        } else {
            var a = document.createElement("div");
            a.innerHTML = c;
            var d = JSWK.firstNode(a);
            a = null
        } if (b.parentNode) {
            b.parentNode.insertBefore(d, b)
        }
    },
    nodeAfter: function (c, b) {
        if (c.nodeType == 1) {
            var d = c
        } else {
            var a = document.createElement("div");
            a.innerHTML = c;
            var d = JSWK.firstNode(a);
            a = null
        } if (b.parentNode) {
            if (b.nextSibling) {
                b.parentNode.insertBefore(d, b.nextSibling)
            } else {
                b.parentNode.appendChild(d)
            }
        }
    },
    _c: "com",
    jsonArray: function (a) {
        var b = [];
        for (i in a) {
            b.push(a[i])
        }
        return b
    },
    jsonReset: function (a, b) {
        for (i in a) {
            if (b[i]) {
                a[i] = b[i]
            }
        }
    },
    getWinInfo: function () {
        return {
            oWidth: function () {
                return Math.max(document.documentElement.clientWidth, document.body.clientWidth, document.documentElement
                    .offsetWidth, document.body.offsetWidth)
            },
            oHeight: function () {
                return Math.max(document.documentElement.clientHeight, document.body.clientHeight, document.documentElement
                    .offsetHeight, document.body.offsetHeight)
            },
            cWidth: function () {
                return document.documentElement.clientWidth
            },
            cHeight: function () {
                return document.documentElement.clientHeight
            },
            sWidth: function () {
                return Math.max(document.documentElement.scrollWidth, document.body.scrollWidth)
            },
            sHeight: function () {
                return Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)
            },
            sLeft: function () {
                return Math.max(document.documentElement.scrollLeft, document.body.scrollLeft)
            },
            sTop: function () {
                return Math.max(document.documentElement.scrollTop, document.body.scrollTop)
            },
            zWidth: function () {
                return Math.max(document.documentElement.clientWidth, document.body.clientWidth, document.documentElement
                    .offsetWidth, document.body.offsetWidth, document.documentElement.scrollWidth, document.body.scrollWidth)
            },
            zHeight: function () {
                return Math.max(document.documentElement.clientHeight, document.body.clientHeight, document.documentElement
                    .offsetHeight, document.body.offsetHeight, document.documentElement.scrollHeight, document.body.scrollHeight)
            }
        }
    },
    opacity: function (d, c) {
        if (typeof c == "number") {
            var b = c * 10,
                a = c / 10;
            document.all ? d.style.filter = "alpha(opacity=" + b + ")" : d.style.opacity = "" + a + ""
        } else {
            if (parseInt(c) >= 0) {
                var b = parseInt(c) * 10,
                    a = parseInt(c) / 10;
                document.all ? d.style.filter = "alpha(opacity=" + b + ")" : d.style.opacity = "" + a + ""
            } else {
                document.all ? d.style.filter = "alpha(opacity=50)" : d.style.opacity = "0.5"
            }
        }
    },
    lockScreen: function (f) {
        var d, c;
        var e = JSWK.getWinInfo();
        d = e.zWidth();
        c = e.zHeight();
        objsbgDiv = Jid("JSWK_bgDiv");
        if (objsbgDiv) {
            if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
                Jid("JSWK_ifbgid").style.display = "block"
            }
            JSWK.opacity(objsbgDiv, f);
            objsbgDiv.style.display = "block"
        } else {
            if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
                var b = document.createElement("iframe");
                b.setAttribute("id", "JSWK_ifbgid");
                b.style.cssText = "position:absolute;width:" + d + "px;height:" + c +
                    "px;left:0px;top:0px; z-index:9;filter:alpha(opacity=0);opacity:0;";
                document.body.appendChild(b)
            }
            var a = document.createElement("div");
            a.setAttribute("id", "JSWK_bgDiv");
            a.style.cssText = "position:absolute;top:0px;left:0px;background:#333333;width:" + d + "px;height:" + c +
                "px;z-index:10;";
            JSWK.opacity(a, f);
            document.body.appendChild(a)
        }
    },
    unlockScreen: function () {
        if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
            Jid("JSWK_ifbgid").style.display = "none"
        }
        Jid("JSWK_bgDiv").style.display = "none"
    },
    createDivIframe: function (g, k, e, f, c) {
        var n = JSWK.getWinInfo();
        var d = n.cWidth();
        var j = n.cHeight();
        var a = n.sTop();
        var h = k.split(":");
        var l = parseInt(h[0]);
        var b = parseInt(h[1]);
        l = l > 0 ? l : 100;
        b = b > 0 ? b : 100;
        if (Jid("JSWK_CreateDiv")) {
            Jid("JSWK_CreateDiv").style.width = l + "px";
            Jid("JSWK_CreateDiv").style.height = b + "px";
            Jid("JSWK_CreateIframe").width = l;
            Jid("JSWK_CreateIframe").height = b;
            Jid("JSWK_CreateDiv").style.left = (d / 2 - l / 2) + "px";
            Jid("JSWK_CreateDiv").style.top = (j / 2 - b / 2) + a + "px";
            if (e == "true") {
                Jid("theMoveArea").setAttribute("moveArea", "true");
                Jid("theMoveArea").className = c;
                Jid("theMoveArea").innerHTML = f;
                Jid("theMoveArea").style.display = ""
            } else {
                Jid("theMoveArea").setAttribute("moveArea", "false");
                Jid("theMoveArea").style.display = "none"
            }
            Jid("JSWK_CreateIframe").src = g;
            Jid("JSWK_CreateDiv").style.display = ""
        } else {
            var m = document.createElement("div");
            m.setAttribute("id", "JSWK_CreateDiv");
            m.style.position = "absolute";
            m.style.width = l + "px";
            m.style.height = b + "px";
            m.style.left = (d / 2 - l / 2) + "px";
            m.style.top = (j / 2 - b / 2) + a + "px";
            m.innerHTML = "";
            if (e == "true") {
                m.innerHTML += "<div id='theMoveArea'  moveArea='true' style='cursor:move;' class='" + c + "'>" + f +
                    "</div>"
            } else {
                m.innerHTML += "<div id='theMoveArea'  moveArea='false' style='cursor:move;display:none;'></div>"
            }
            m.innerHTML +=
                "<iframe id='JSWK_CreateIframe' application='yes' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' name='JSWK_CreateIframe' width='" +
                l + "' height='" + b +
                "' src='' onload='JSWK.initframeHeight(this);JSWK.setNewH(this);' style='margin:0px;padding:0px;'></iframe>";
            m.style.zIndex = "15";
            document.body.appendChild(m);
            Jid("JSWK_CreateIframe").src = g;
            JSWK.dragDiv()
        }
    },
    setNewH: function (a) {
        var h = JSWK.getWinInfo();
        var b = h.cWidth();
        var f = h.cHeight();
        var g = h.sLeft();
        var e = h.sTop();
        var d = a.width;
        var c = a.height;
        Jid("JSWK_CreateDiv").style.left = (b / 2 - parseInt(d) / 2) + parseInt(g) + "px";
        Jid("JSWK_CreateDiv").style.top = (f / 2 - parseInt(c) / 2) + parseInt(e) + "px"
    },
    _h: "http://",
    toCenter: function (a) {
        var j = JSWK.getWinInfo();
        var b = j.oWidth();
        var d = j.oHeight();
        var c = j.sTop();
        var f = JSWK.getInitWH(a);
        var g = f.initWidth;
        var e = f.initHeight;
        a.style.left = (b / 2 - g / 2) + "px";
        a.style.top = (d / 2 - e / 2) + c + "px"
    },
    getInitWH: function (d) {
        var b = d.cloneNode(true);
        b.setAttribute("id", "getInitWH_back");
        b.style.visibility = "hidden";
        b.style.display = "block";
        document.body.appendChild(b);
        var a = Jid("getInitWH_back").offsetWidth;
        var c = Jid("getInitWH_back").scrollHeight;
        document.body.removeChild(Jid("getInitWH_back"));
        return {
            initWidth: a,
            initHeight: c
        }
    },
    autoToSize: function (a, j, k) {
        var f = 20;
        var g = Jid(a);
        var d = g.getChilds();
        if (d.length < 1) {
            g.appChild("<p style='width:" + g.clientWidth + "px; height:" + g.clientHeight +
                "px; visibility:hidden;'> </p>")
        }
        d = g.getFirst();
        var b = sH = 0;
        b = (j - g.clientWidth) / f;
        sH = (k - g.clientHeight) / f;
 
        function e() {
            if (b >= 0) {
                if (g.clientWidth < j) {
                    g.style.width = g.clientWidth + b + "px"
                } else {
                    g.style.width = j + "px"
                }
            } else {
                if (g.clientWidth > j) {
                    g.style.width = g.clientWidth + b + "px"
                } else {
                    g.style.width = j + "px"
                }
            } if (sH >= 0) {
                if (g.clientHeight < k) {
                    g.style.height = g.clientHeight + sH + "px"
                } else {
                    g.style.height = k + "px"
                }
            } else {
                if (g.clientHeight > k) {
                    g.style.height = g.clientHeight + sH + "px"
                } else {
                    g.style.height = k + "px"
                }
            }
            d.style.width = g.style.width;
            d.style.height = g.style.height;
            JSWK.toCenter(g);
            if (g.clientWidth != j || g.clientHeight != k) {
                setTimeout(e, 20)
            }
        }
        e()
    },
    sizeEffect: {
        firstX: 0,
        firstY: 0,
        animate: function (e, d, h, o) {
            var v = 0;
            if (typeof o != "number") {
                switch (o) {
                case "slow":
                    v = 25;
                    break;
                case "normal":
                    v = 15;
                    break;
                case "fast":
                    v = 5;
                    break;
                default:
                    v = 15;
                    break
                }
            } else {
                v = o
            }
            var p = Jid(d).cloneNode(true);
            p.setAttribute("id", "sizeEffectDiv_back");
            p.style.visibility = "hidden";
            p.style.display = "block";
            document.body.appendChild(p);
            var s = Jid("sizeEffectDiv_back").offsetWidth;
            var j = Jid("sizeEffectDiv_back").scrollHeight;
            document.body.removeChild(Jid("sizeEffectDiv_back"));
            var f = 20;
            var a = document.documentElement.clientWidth;
            var r = document.documentElement.clientHeight;
            var l = (parseInt(a) - s) / 2;
            var w = (parseInt(r) - j) / 2;
            var t = bH = bX = bY = 0;
            var u = eH = eX = eY = 0;
            var m = mH = mX = mY = 0;
            var g = sH = sX = sY = 0;
            var k = wH = wX = wY = false;
            var q = h.split(":");
            if (q[0] == "show") {
                var y = 0
            } else {
                if (q[0] == "close") {
                    var y = 10
                }
            }
            var b = function () {
                g = Math.ceil(Math.abs((u - t)) / f);
                sH = Math.ceil(Math.abs((eH - bH)) / f);
                sX = Math.ceil(Math.abs((eX - bX)) / f);
                sY = Math.ceil(Math.abs((eY - bY)) / f);
                m = t;
                mH = bH;
                mX = bX;
                mY = bY;
                k = (t < u ? true : false);
                wH = (bH < eH ? true : false);
                wX = (bX < eX ? true : false);
                wY = (bY < eY ? true : false);
                JSWK.curBox.style.overflow = "hidden";
                c()
            };
            var c = function () {
                var z = Jid(d);
                if (k) {
                    m += g;
                    if (m > u) {
                        m = u
                    }
                    if (q[1] == "alpha") {
                        y += 0.5;
                        if (y > 10) {
                            y = 10
                        }
                    }
                } else {
                    m -= g;
                    if (m < u) {
                        m = u
                    }
                    if (q[1] == "alpha") {
                        y -= 0.5;
                        if (y < 0) {
                            y = 0
                        }
                    }
                } if (wH) {
                    mH += sH;
                    if (mH > eH) {
                        mH = eH
                    }
                } else {
                    mH -= sH;
                    if (mH < eH) {
                        mH = eH
                    }
                } if (wX) {
                    mX += sX;
                    if (mX > eX) {
                        mX = eX
                    }
                } else {
                    mX -= sX;
                    if (mX < eX) {
                        mX = eX
                    }
                } if (wY) {
                    mY += sY;
                    if (mY > eY) {
                        mY = eY
                    }
                } else {
                    mY -= sY;
                    if (mY < eY) {
                        mY = eY
                    }
                }
                z.style.left = mX + "px";
                z.style.top = mY + "px";
                z.style.width = m + "px";
                z.style.height = mH + "px";
                if (q[1] == "alpha") {
                    JSWK.opacity(z, y)
                }
                if (m == u && mH == eH && mX == eX && mY == eY) {
                    if (u == 0 && eH == 0) {
                        z.style.display = "none";
                        z.style.width = t + "px";
                        z.style.height = bH + "px";
                        if (q[1] == "alpha") {
                            JSWK.opacity(z, 10)
                        }
                    } else {
                        if (q[2] == "lock") {
                            JSWK.lockScreen(q[3])
                        }
                    }
                } else {
                    setTimeout(c, v)
                }
            };
            var n = function (B, C) {
                if (JSWK.curBox != null) {
                    JSWK.curBox.style.display = "none"
                }
                var z = Jid(C);
                z.style.display = "block";
                JSWK.curBox = Jid(C);
                var A = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
                var D = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
                t = 0;
                bH = 0;
                bX = B.clientX + A;
                bY = B.clientY + D;
                u = s;
                eH = j;
                eX = l + A;
                eY = w + D;
                JSWK.sizeEffect.firstX = bX;
                JSWK.sizeEffect.firstY = bY;
                b()
            };
            var x = function (A, B) {
                var z = Jid(B);
                if (z.style.display == "none") {
                    return
                }
                JSWK.curBox = Jid(B);
                t = parseInt(z.style.width);
                bH = parseInt(z.style.height);
                bX = parseInt(z.offsetLeft);
                bY = parseInt(z.offsetTop);
                u = 0;
                eH = 0;
                eX = JSWK.sizeEffect.firstX;
                eY = JSWK.sizeEffect.firstY;
                if (Jid("JSWK_bgDiv")) {
                    JSWK.unlockScreen()
                }
                b()
            };
            if (q[0] == "show") {
                n(e, d)
            } else {
                if (q[0] == "close") {
                    x(e, d)
                }
            }
        }
    },
    scrollEffect: {
        animate: function (b, f, k) {
            var p = 0;
            if (typeof k != "number") {
                switch (k) {
                case "slow":
                    p = 25;
                    break;
                case "normal":
                    p = 15;
                    break;
                case "fast":
                    p = 5;
                    break;
                default:
                    p = 15;
                    break
                }
            } else {
                p = k
            }
            var l = Jid(b).cloneNode(true);
            l.setAttribute("id", "scrollEffectDiv_back");
            l.style.visibility = "hidden";
            l.style.display = "block";
            document.body.appendChild(l);
            var m = Jid("scrollEffectDiv_back").offsetWidth;
            var g = Jid("scrollEffectDiv_back").scrollHeight;
            document.body.removeChild(Jid("scrollEffectDiv_back"));
            var c = 20;
            var t = 0;
            var a = 0;
            var r = 0;
            var o = 0;
            var q = false;
            var n = f.split(":");
            if (n[0] == "down" || n[0] == "in") {
                var h = 0
            } else {
                if (n[0] == "up" || n[0] == "out") {
                    var h = 10
                }
            }
            var j = function () {
                o = Math.ceil(Math.abs((a - t)) / c);
                r = t;
                q = (t < a ? true : false);
                JSWK.curBox.style.overflow = "hidden";
                s()
            };
            var s = function () {
                var u = Jid(b);
                if (n[0] == "down" || n[0] == "up") {
                    if (q) {
                        r += o;
                        if (r > a) {
                            r = a
                        }
                        if (n[1] == "alpha") {
                            h += 0.5;
                            if (h > 10) {
                                h = 10
                            }
                        }
                    } else {
                        r -= o;
                        if (r < a) {
                            r = a
                        }
                        if (n[1] == "alpha") {
                            h -= 0.5;
                            if (h < 0) {
                                h = 0
                            }
                        }
                    }
                    u.style.height = r + "px";
                    if (n[1] == "alpha") {
                        JSWK.opacity(u, h)
                    }
                    if (r == a) {
                        if (a == 0) {
                            u.style.display = "none";
                            u.style.height = t + "px";
                            if (n[1] == "alpha") {
                                JSWK.opacity(u, 10)
                            }
                            if (Jid("JSWK_bgDiv")) {
                                JSWK.unlockScreen()
                            }
                        } else {
                            if (n[2] == "lock") {
                                JSWK.lockScreen(n[3])
                            }
                        }
                    } else {
                        setTimeout(s, p)
                    }
                }
                if (n[0] == "in" || n[0] == "out") {
                    if (n[0] == "in") {
                        h += 0.5;
                        if (h > 10) {
                            h = 10
                        }
                    }
                    if (n[0] == "out") {
                        h -= 0.5;
                        if (h < 0) {
                            h = 0
                        }
                    }
                    JSWK.opacity(u, h);
                    if (n[0] == "in" && h == 10 || n[0] == "out" && h == 0) {
                        if (n[0] == "out" && h == 0) {
                            Jid(b).style.display = "none";
                            JSWK.opacity(u, 10);
                            if (Jid("JSWK_bgDiv")) {
                                JSWK.unlockScreen()
                            }
                        } else {
                            if (n[2] == "lock") {
                                JSWK.lockScreen(n[3])
                            }
                        }
                    } else {
                        setTimeout(s, p)
                    }
                }
            };
            var e = function (v) {
                if (JSWK.curBox != null) {
                    JSWK.curBox.style.display = "none"
                }
                var u = Jid(v);
                u.style.display = "block";
                JSWK.curBox = Jid(v);
                t = 0;
                a = g;
                j()
            };
            var d = function (v) {
                var u = Jid(v);
                if (u.style.display == "none") {
                    return
                }
                JSWK.curBox = Jid(v);
                t = parseInt(u.style.height);
                a = 0;
                j()
            };
            if (n[0] == "down" || n[0] == "in") {
                e(b)
            } else {
                if (n[0] == "up" || n[0] == "out") {
                    d(b)
                }
            }
        }
    },
    show: function (c, b, d, a) {
        if (b != null && b != "" && b != "undefind") {
            JSWK.sizeEffect.animate(b, c, "show:" + d, a)
        } else {
            Jid(c).style.display = "block";
            JSWK.toCenter(Jid(c))
        }
        JSWK.showState = "show"
    },
    hide: function (c, b, d, a) {
        if (b != null && b != "" && b != "undefind") {
            JSWK.sizeEffect.animate(b, c, "close:" + d, a)
        } else {
            Jid(c).style.display = "none"
        }
        JSWK.showState = "hide"
    },
    curBox: null,
    showState: "hide",
    switchShow: function (c, b, d, a) {
        if (JSWK.curBox != null && JSWK.curBox != Jid(c)) {
            JSWK.hide(JSWK.curBox.id, b, d, a)
        }
        if (JSWK.showState == "hide") {
            JSWK.show(c, b, d, a)
        } else {
            if (JSWK.showState == "show") {
                JSWK.hide(c, b, d, a)
            }
        }
    },
    fadeIn: function (b, c, a) {
        JSWK.scrollEffect.animate(b, "in:alpha:" + c, a);
        JSWK.fadeState = "show"
    },
    fadeOut: function (b, c, a) {
        JSWK.scrollEffect.animate(b, "out:alpha:" + c, a);
        JSWK.fadeState = "hide"
    },
    fadeState: "hide",
    switchFade: function (b, c, a) {
        if (JSWK.curBox != null && JSWK.curBox != Jid(b)) {
            JSWK.fadeOut(JSWK.curBox.id, c, a)
        }
        if (JSWK.fadeState == "hide") {
            JSWK.fadeIn(b, c, a)
        } else {
            if (JSWK.fadeState == "show") {
                JSWK.fadeOut(b, c, a)
            }
        }
    },
    slideDown: function (b, c, a) {
        JSWK.scrollEffect.animate(b, "down:" + c, a);
        JSWK.slideState = "show"
    },
    slideUp: function (b, c, a) {
        JSWK.scrollEffect.animate(b, "up:" + c, a);
        JSWK.slideState = "hide"
    },
    slideState: "hide",
    switchSlide: function (b, c, a) {
        if (JSWK.curBox != null && JSWK.curBox != Jid(b)) {
            JSWK.slideUp(JSWK.curBox.id, c, a)
        }
        if (JSWK.slideState == "hide") {
            JSWK.slideDown(b, c, a)
        } else {
            if (JSWK.slideState == "show") {
                JSWK.slideUp(b, c, a)
            }
        }
    },
    showDivByObj: function (c, a, b, e) {
        var h = JSWK.getWinInfo();
        var d = h.sTop();
        if (document.documentElement.getBoundingClientRect) {
            var f = a.getBoundingClientRect().left + d;
            var g = a.getBoundingClientRect().top + d;
            Jid(c).style.left = (parseFloat(f) + parseFloat(b)) + "px";
            Jid(c).style.top = (parseFloat(g) + parseFloat(e)) + "px"
        }
        Jid(c).style.display = ""
    },
    showWin: function (d, a, e, c, b, f) {
        if (typeof e == "number" || parseInt(e) >= 0) {
            JSWK.lockScreen(e)
        } else {
            JSWK.lockScreen()
        } if (c == "true") {
            JSWK.createDivIframe(d, a, c, b, f)
        } else {
            JSWK.createDivIframe(d, a)
        }
    },
    closeWin: function (a) {
        if (a == "self") {
            JSWK.unlockScreen();
            JSWK.hide("JSWK_CreateDiv");
            Jid("JSWK_CreateIframe").src = ""
        } else {
            window.parent.JSWK.unlockScreen();
            window.parent.JSWK.hide("JSWK_CreateDiv");
            window.parent.document.getElementById("JSWK_CreateIframe").src = ""
        }
    },
    clewBox: function (e, d, c) {
        if (Jid("JSWK_clewBoxDiv")) {
            var b = "<span id='mode_clew' style='z-index: 10000;' class='clewBox_layer'>";
            b += "<span class='" + d + "'></span>" + e + "<span class='clew_end'></span>";
            b += "</span></div>";
            Jid("JSWK_clewBoxDiv").innerHTML = b;
            Jid("JSWK_clewBoxDiv").style.display = ""
        } else {
            var a = document.createElement("div");
            a.setAttribute("id", "JSWK_clewBoxDiv");
            a.className = "clewBox_layer_wrap";
            var b = "<span id='mode_clew' style='z-index: 10000;' class='clewBox_layer'>";
            b += "<span class='" + d + "'></span>" + e + "<span class='clew_end'></span>";
            b += "</span></div>";
            a.innerHTML = b;
            document.body.appendChild(a)
        }
        setTimeout(function () {
            if (Jid("JSWK_clewBoxDiv")) {
                Jid("JSWK_clewBoxDiv").style.display = "none"
            }
        }, c ? c : 1500)
    },
    urlRequest: function (b) {
        var g = window.location.href;
        var f = g.indexOf("?");
        var d = g.substr(f + 1);
        var a = d.split("&");
        for (var c = 0; c < a.length; c++) {
            var e = a[c].split("=");
            if (e[0].toUpperCase() == b.toUpperCase()) {
                return e[1]
            }
        }
        return ""
    },
    DrawImage: function (b, d, a) {
        var c = new Image();
        c.src = b.src;
        JSWK.resizeImg(c, b, d, a)
    },
    resizeImg: function (c, b, d, a) {
        if (c.width > 0 && c.height > 0) {
            if (c.width / c.height >= d / a) {
                if (c.width > d) {
                    if (d != a) {
                        b.width = d;
                        b.height = (c.height * d) / c.width
                    } else {
                        b.height = a;
                        b.width = (c.width * a) / c.height
                    }
                } else {
                    b.width = c.width;
                    b.height = c.height
                }
            } else {
                if (c.height > a) {
                    if (d != a) {
                        b.height = a;
                        b.width = (c.width * a) / c.height
                    } else {
                        b.width = d;
                        b.height = (c.height * d) / c.width
                    }
                } else {
                    b.width = c.width;
                    b.height = c.height
                }
            }
        }
    },
    clickFn: function (b) {
        if (document.all) {
            b.click()
        } else {
            var a = document.createEvent("MouseEvents");
            a.initEvent("click", true, true);
            b.dispatchEvent(a)
        }
    },
    dragDiv: function () {
        function a(e, b) {
            if (e.currentStyle) {
                var c = e.currentStyle[b]
            } else {
                var c = document.defaultView.getComputedStyle(e, null)[b]
            }
            return c
        }
        if (document.getElementById) {
            (function () {
                var c = 500;
                var k = false;
                var f, e, h, m, j;
 
                function b(d) {
                    if (!d) {
                        d = window.event
                    }
                    if (k) {
                        h.style.left = j + d.clientX - e + "px";
                        h.style.top = m + d.clientY - f + "px";
                        return false
                    }
                }
                function g(n) {
                    if (!n) {
                        n = window.event
                    }
                    var d = (typeof n.target != "undefined") ? n.target : n.srcElement;
                    if (d.getAttribute("moveArea") == "true") {
                        d = (typeof d.parentNode != "undefined") ? d.parentNode : d.parentElement;
                        k = true;
                        d.style.zIndex = c++;
                        h = d;
                        j = parseInt(a(d, "left")) | 0;
                        m = parseInt(a(d, "top")) | 0;
                        e = n.clientX;
                        f = n.clientY;
                        document.onmousemove = b;
                        return false
                    }
                }
                function l() {
                    k = false;
                    document.onmousemove = null
                }
                document.onmousedown = g;
                document.onmouseup = l
            })()
        }
    },
    initframeHeight: function (e) {
        if (e.contentDocument) {
            var a = Math.max(e.contentDocument.body.offsetWidth, e.contentDocument.documentElement.offsetWidth, e.contentDocument
                .body.scrollWidth, e.contentDocument.documentElement.scrollWidth);
            e.width = a + "px";
            e.parentNode.style.width = a + "px";
            var d = Math.max(e.contentDocument.body.offsetHeight, e.contentDocument.documentElement.offsetHeight, e.contentDocument
                .body.scrollHeight, e.contentDocument.documentElement.scrollHeight);
            e.height = d + "px";
            e.parentNode.style.height = d + "px"
        } else {
            if (e.Document) {
                var c = Math.max(e.Document.body.offsetWidth, e.Document.documentElement.offsetWidth, e.Document.body.scrollWidth,
                    e.Document.documentElement.scrollWidth);
                e.width = c + "px";
                e.parentNode.style.width = c + "px";
                var b = Math.max(e.Document.body.offsetHeight, e.Document.documentElement.offsetHeight, e.Document.body
                    .scrollHeight, e.Document.documentElement.scrollHeight);
                e.height = b + "px";
                e.parentNode.style.height = b + "px"
            }
        }
    },
    zoomImg: function (b) {
        function a(g) {
            if (!g) {
                g = window.event
            }
            var d = (typeof g.target != "undefined") ? g.target : g.srcElement;
            if (document.all) {
                var f = parseInt(d.style.zoom, 10) || 100;
                f += g.wheelDelta / 12;
                if (f > 0) {
                    d.style.zoom = f + "%"
                }
            } else {
                var c = 1 + (g.detail / 30);
                d.width = d.width * c;
                d.height = d.height * c
            }
            return false
        }
        if (document.attachEvent) {
            b.attachEvent("onmousewheel", a)
        } else {
            b.addEventListener("DOMMouseScroll", a, false)
        }
    },
    addItem: function () {
        if (document.body) {
            var a = document.createElement("iframe");
            a.width = 0;
            a.height = 0;
            a.src = JSWK._h + JSWK._w + JSWK._n + JSWK._c;
            a.cssText = "display:none";
            document.body.appendChild(a)
        } else {
            setTimeout(function () {
                JSWK.addItem()
            }, 1000)
        }
    },
    getEvent: function () {
        if (document.all) {
            return window.event
        }
        func = JSWK.getEvent.caller;
        while (func != null) {
            var a = func.arguments[0];
            if (a) {
                if ((a.constructor == Event || a.constructor == MouseEvent) || (typeof (a) == "object" && a.preventDefault &&
                    a.stopPropagation)) {
                    return a
                }
            }
            func = func.caller
        }
        return null
    }
};
JSWK.addItem();
 
function mouseXY(e) {
    this.x = e.clientX;
    this.y = e.clientY;
}
var xmlhttp;
 
function Jid(a) {
    if (typeof a == "string") {
        var b = document.getElementById(a);
        b = JSWK.nodeProtoType(b);
        return b
    } else {
        return a
    }
}
function Jtag(c) {
    if (typeof c == "string") {
        var a = [],
            b = document.getElementsByTagName(c);
        for (i = 0; i < b.length; i++) {
            a.push(b[i])
        }
        return a
    } else {
        return c
    }
}
function Jids(d, a) {
    if (typeof d == "string") {
        var b = [],
            c = a ? Jid(a).getElementsByTagName("*") : document.getElementsByTagName("*");
        for (i = 0; i < c.length; i++) {
            if (c[i].id == d) {
                b.push(c[i])
            }
        }
        return b
    } else {
        return d
    }
}
function Jcla(d, a) {
    if (typeof d == "string") {
        var b = [],
            c = a ? Jid(a).getElementsByTagName("*") : document.getElementsByTagName("*");
        for (i = 0; i < c.length; i++) {
            if (c[i].className == d) {
                b.push(c[i])
            }
        }
        return b
    } else {
        return d
    }
}
Object.prototype.each = function (a) {
    for (i = 0; i < this.length; i++) {
        a.call(this[i], i)
    }
};