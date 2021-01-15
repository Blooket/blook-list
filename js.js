(window.webpackJsonp = window.webpackJsonp || []).push([[8], {
    "1Yba": function(e, t, a) {
        var s = a("Zqh3");
        "string" == typeof s && (s = [[e.i, s, ""]]);
        var i = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        a("aET+")(s, i);
        s.locals && (e.exports = s.locals)
    },
    "1vdX": function(e, t, a) {
        "use strict";
        (function(e) {
            var s = a("q1tI")
              , i = a.n(s)
              , o = a("ANjH")
              , n = a("/MKj")
              , r = a("17x9")
              , l = a.n(r)
              , c = a("wIs1")
              , u = a("FLf1")
              , h = a.n(u)
              , d = a("mLw1")
              , p = a("vDqi")
              , m = a.n(p)
              , f = a("TSYQ")
              , _ = a.n(f)
              , g = a("b6Qr")
              , y = a("yzbm")
              , x = a("WjD0")
              , w = a.n(x)
              , b = a("LksJ")
              , v = a.n(b)
              , C = a("rvr9")
              , k = a("3CTX")
              , S = a.n(k)
              , E = a("GIcp")
              , I = a.n(E)
              , T = a("wQpl")
              , N = a.n(T)
              , R = a("e47E")
              , O = a("iQ+n")
              , M = a("I0uU")
              , P = a("sN2k");
            function B(e) {
                return (B = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function j(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    a.push.apply(a, s)
                }
                return a
            }
            function z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? j(Object(a), !0).forEach((function(t) {
                        D(e, t, a[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : j(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }
                    ))
                }
                return e
            }
            function D(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a,
                e
            }
            function H(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1,
                    s.configurable = !0,
                    "value"in s && (s.writable = !0),
                    Object.defineProperty(e, s.key, s)
                }
            }
            function A(e, t) {
                return (A = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function F(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, s = q(e);
                    if (t) {
                        var i = q(this).constructor;
                        a = Reflect.construct(s, arguments, i)
                    } else
                        a = s.apply(this, arguments);
                    return U(this, a)
                }
            }
            function U(e, t) {
                return !t || "object" !== B(t) && "function" != typeof t ? L(e) : t
            }
            function L(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function q(e) {
                return (q = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var G = function(t) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && A(e, t)
                }(r, t);
                var a, s, o, n = F(r);
                function r(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, r),
                    (t = n.call(this, e)).state = {
                        game: {
                            title: "",
                            author: "",
                            desc: "",
                            id: "",
                            coverImage: {},
                            private: !1
                        },
                        coverImageFile: {},
                        coverImageURL: "",
                        titleError: "",
                        imageError: "",
                        uploadingURL: !1,
                        tempURL: "",
                        urlError: "",
                        loading: !1,
                        oldImageExists: !1,
                        oldImageRemoved: !1,
                        showUnsplash: !1,
                        unsplashURL: ""
                    },
                    t.onEdit = t.onEdit.bind(L(t)),
                    t.onTitleUpdate = t.onTitleUpdate.bind(L(t)),
                    t.onDescUpdate = t.onDescUpdate.bind(L(t)),
                    t.onURLUpdate = t.onURLUpdate.bind(L(t)),
                    t.onImageDrop = t.onImageDrop.bind(L(t)),
                    t.onURLSubmit = t.onURLSubmit.bind(L(t)),
                    t
                }
                return a = r,
                (s = [{
                    key: "componentDidMount",
                    value: function() {
                        if (this.props.game && this.props.game.title) {
                            var e = this.props.game;
                            this.setState({
                                game: {
                                    title: e.title,
                                    author: e.author,
                                    desc: e.desc,
                                    id: e.id,
                                    coverImage: e.coverImage,
                                    private: e.private
                                },
                                coverImageFile: e.coverImage,
                                coverImageURL: e.coverImage ? e.coverImage.url : "",
                                oldImageExists: e.coverImage
                            })
                        }
                    }
                }, {
                    key: "onEdit",
                    value: function(t) {
                        var a = this;
                        if (t.preventDefault(),
                        !this.state.loading) {
                            this.setState({
                                loading: !0
                            });
                            var s = null;
                            if (this.state.game.title || (s = "Where's the Title?"),
                            this.setState({
                                titleError: s
                            }),
                            s)
                                this.setState({
                                    loading: !1
                                });
                            else if (localStorage.getItem("token")) {
                                var i = localStorage.getItem("token").split(" ");
                                2 === i.length ? h.a.verify(i[1], S.a.secret, (function(t, s) {
                                    t ? a.props.history.push("/login") : a.setState({
                                        game: z(z({}, a.state.game), {}, {
                                            author: s.name
                                        })
                                    }, (function() {
                                        if (a.state.coverImageFile && a.state.coverImageFile.size) {
                                            m.a.defaults.headers.common = {};
                                            var t = new w.a;
                                            t.append("file", a.state.coverImageFile),
                                            t.append("tags", ""),
                                            t.append("upload_preset", "normal"),
                                            t.append("api_key", e.env.CLOUDINARY_API_KEY),
                                            t.append("timestamp", parseInt(Date.now() / 1e3, 10)),
                                            m.a.post("https://api.cloudinary.com/v1_1/blooket/image/upload", t, {
                                                headers: {
                                                    "X-Requested-With": "XMLHttpRequest"
                                                }
                                            }).then((function(e) {
                                                var t = {};
                                                t.url = e.data.secure_url,
                                                t.id = e.data.public_id,
                                                m.a.defaults.headers.common.Authorization = localStorage.getItem("token"),
                                                m.a.put("/api/games/edit", {
                                                    id: a.state.game.id,
                                                    title: a.state.game.title.trim(),
                                                    author: a.state.game.author,
                                                    desc: a.state.game.desc.trim(),
                                                    coverImage: t,
                                                    prevImage: a.state.game.coverImage,
                                                    private: a.state.game.private,
                                                    upload: !1
                                                }).then((function(e) {
                                                    a.setState({
                                                        game: z(z({}, a.state.game), {}, {
                                                            id: e.data._id,
                                                            coverImage: t
                                                        })
                                                    }, (function() {
                                                        a.props.history.push("/edit?id=".concat(a.state.game.id))
                                                    }
                                                    ))
                                                }
                                                )).catch((function(e) {
                                                    console.error(e)
                                                }
                                                ))
                                            }
                                            )).catch((function(e) {
                                                console.error(e)
                                            }
                                            ))
                                        } else {
                                            var s = {}
                                              , i = {}
                                              , o = !1
                                              , n = a.state.coverImageURL || a.state.unsplashURL;
                                            a.state.game.coverImage && a.state.game.coverImage.url && n ? n !== a.state.game.coverImage.url ? (i = a.state.game.coverImage,
                                            s.url = n,
                                            o = !0) : s = a.state.game.coverImage : n ? (s.url = n,
                                            o = !0) : a.state.oldImageRemoved ? i = a.state.game.coverImage : s = a.state.game.coverImage,
                                            a.state.unsplashURL && (s.id = "u",
                                            o = !1),
                                            m.a.defaults.headers.common.Authorization = localStorage.getItem("token"),
                                            m.a.put("/api/games/edit", {
                                                id: a.state.game.id,
                                                title: a.state.game.title.trim(),
                                                author: a.state.game.author,
                                                desc: a.state.game.desc.trim(),
                                                coverImage: s,
                                                prevImage: i,
                                                private: a.state.game.private,
                                                upload: o
                                            }).then((function(e) {
                                                a.setState({
                                                    game: z(z({}, a.state.game), {}, {
                                                        id: e.data._id,
                                                        coverImage: s
                                                    })
                                                }, (function() {
                                                    a.props.createGame(a.state.game),
                                                    a.props.history.push("/edit?id=".concat(a.state.game.id))
                                                }
                                                ))
                                            }
                                            )).catch((function(e) {
                                                console.error(e)
                                            }
                                            ))
                                        }
                                    }
                                    ))
                                }
                                )) : this.props.history.push("/login")
                            } else
                                this.props.history.push("/login")
                        }
                    }
                }, {
                    key: "onTitleUpdate",
                    value: function(e) {
                        this.setState({
                            game: z(z({}, this.state.game), {}, {
                                title: e.target.value.slice(0, 75)
                            }),
                            titleError: ""
                        })
                    }
                }, {
                    key: "onDescUpdate",
                    value: function(e) {
                        this.setState({
                            game: z(z({}, this.state.game), {}, {
                                desc: e.target.value.slice(0, 300)
                            })
                        })
                    }
                }, {
                    key: "onURLUpdate",
                    value: function(e) {
                        this.setState({
                            tempURL: e.target.value,
                            urlError: ""
                        })
                    }
                }, {
                    key: "onURLSubmit",
                    value: function(e) {
                        e.preventDefault();
                        var t = "";
                        this.state.tempURL ? v()(this.state.tempURL) || (t = "We can't find a supported image for that URL.") : t = "Where's the URL?",
                        t ? this.setState({
                            imageError: "",
                            urlError: t
                        }) : this.setState({
                            imageError: "",
                            coverImageURL: this.state.tempURL,
                            coverImageFile: {},
                            tempURL: "",
                            uploadingURL: !1
                        })
                    }
                }, {
                    key: "onImageDrop",
                    value: function(e) {
                        var t = e[0];
                        t ? this.setState({
                            imageError: "",
                            coverImageFile: t,
                            coverImageURL: URL.createObjectURL(t)
                        }) : this.setState({
                            imageError: "Error Uploading the File.",
                            coverImageFile: {},
                            coverImageURL: ""
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        if (localStorage.getItem("token")) {
                            var t = localStorage.getItem("token").split(" ");
                            2 === t.length ? h.a.verify(t[1], S.a.secret, (function(t) {
                                e.redirect = !!t
                            }
                            )) : this.redirect = !0
                        } else
                            this.redirect = !0;
                        if (this.redirect || !this.props.game || !this.props.game.title)
                            return i.a.createElement(d.a, {
                                to: "/login"
                            });
                        var a = i.a.createRef();
                        return i.a.createElement("div", {
                            className: g.isMobile ? I.a.mBody : I.a.body
                        }, i.a.createElement(O.a, {
                            title: "Edit Set Info | Blooket",
                            desc: "Quickly and easily change a set's basic information including the title, description, cover image, and privacy setting."
                        }), i.a.createElement(R.a, {
                            history: this.props.history,
                            page: "Create"
                        }), i.a.createElement("div", {
                            className: I.a.profileRegularBody
                        }, i.a.createElement("div", {
                            className: N.a.header
                        }, "Edit Info"), i.a.createElement("form", {
                            onSubmit: this.onEdit,
                            className: N.a.inputContainer
                        }, i.a.createElement("div", {
                            className: N.a.wideContainer
                        }, i.a.createElement("div", {
                            className: N.a.dropHolder
                        }, this.state.coverImageURL || this.state.unsplashURL ? i.a.createElement("div", {
                            className: N.a.imgContainer
                        }, i.a.createElement("img", {
                            src: this.state.coverImageURL || this.state.unsplashURL,
                            alt: "Upload",
                            className: N.a.coverImage
                        }), i.a.createElement("div", {
                            className: N.a.removeImageContainer
                        }), i.a.createElement("div", {
                            className: N.a.removeImageButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                e.setState({
                                    oldImageRemoved: e.state.oldImageExists,
                                    coverImageURL: "",
                                    coverImageFile: {},
                                    unsplashURL: ""
                                })
                            }
                        }, i.a.createElement("i", {
                            className: _()(N.a.removeImageIcon, "fas fa-times")
                        }), i.a.createElement("div", {
                            className: N.a.removeImageText
                        }, "Remove"))) : i.a.createElement(y.a, {
                            multiple: !1,
                            accept: "image/jpeg, image/png, image/gif",
                            onDropAccepted: this.onImageDrop,
                            onDropRejected: function() {
                                return e.setState({
                                    imageError: "Image Denied (Check Size < 2.5 MB)"
                                })
                            },
                            className: N.a.dropContainer,
                            activeClassName: N.a.activeDropContainer,
                            ref: a,
                            maxSize: 25e5,
                            disableClick: !0
                        }, i.a.createElement("div", {
                            className: N.a.dropHeader
                        }, "Cover Image"), i.a.createElement("div", {
                            className: N.a.dropText
                        }, "Drag and Drop an Image (Under 2.5 MB) or"), i.a.createElement("div", {
                            className: N.a.uploadButtonContainer
                        }, i.a.createElement("div", {
                            className: N.a.uploadButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.setState({
                                    showUnsplash: !0
                                })
                            }
                        }, i.a.createElement("i", {
                            className: _()(N.a.uploadIcon, "fas fa-image")
                        }), i.a.createElement("div", {
                            className: N.a.uploadText
                        }, "Image", i.a.createElement("br", null), "Gallery")), i.a.createElement("div", {
                            className: N.a.uploadButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return a.current.open()
                            }
                        }, i.a.createElement("i", {
                            className: _()(N.a.uploadIcon, "fas fa-file-upload")
                        }), i.a.createElement("div", {
                            className: N.a.uploadText
                        }, "Upload", i.a.createElement("br", null), "a File")), i.a.createElement("div", {
                            className: N.a.uploadButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.setState({
                                    uploadingURL: !0
                                })
                            }
                        }, i.a.createElement("i", {
                            className: _()(N.a.uploadIcon, "fas fa-link")
                        }), i.a.createElement("div", {
                            className: N.a.uploadText
                        }, "Upload", i.a.createElement("br", null), "by URL"))))), i.a.createElement("div", {
                            className: N.a.upperRightContainer
                        }, i.a.createElement("div", {
                            className: N.a.titleHeader
                        }, "Title ", i.a.createElement("span", {
                            style: {
                                fontSize: 24,
                                opacity: .8
                            }
                        }, "(required)")), i.a.createElement("input", {
                            className: _()(N.a.input, D({}, N.a.inputFilled, this.state.game.title), D({}, N.a.inputError, this.state.titleError)),
                            onChange: this.onTitleUpdate,
                            type: "text",
                            placeholder: "Add a descriptive title",
                            value: this.state.game.title,
                            autoFocus: g.isMobile ? "" : "autofocus"
                        }), i.a.createElement("div", {
                            className: N.a.descHeader
                        }, "Description"), i.a.createElement("textarea", {
                            className: _()(N.a.descInput, D({}, N.a.inputFilled, this.state.game.desc)),
                            onChange: this.onDescUpdate,
                            value: this.state.game.desc,
                            placeholder: "Tell users about your question set",
                            "data-gramm_editor": "false"
                        }))), i.a.createElement("div", {
                            className: N.a.wideContainer
                        }, i.a.createElement("div", {
                            className: N.a.bottomLeftContainer
                        }, i.a.createElement("div", {
                            className: N.a.categoryContainer
                        }, i.a.createElement("div", {
                            className: N.a.categoryHeader
                        }, "Privacy Setting"), i.a.createElement("div", {
                            className: N.a.categoryDesc
                        }, "This decides who can find and play your question set"), i.a.createElement("div", {
                            className: N.a.privacyContainer
                        }, i.a.createElement("div", {
                            className: _()(N.a.privateButton, D({}, N.a.selected, !this.state.game.private)),
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                e.setState({
                                    game: z(z({}, e.state.game), {}, {
                                        private: !1
                                    })
                                })
                            }
                        }, i.a.createElement("i", {
                            className: _()(N.a.privateIcon, "fas fa-unlock")
                        }), i.a.createElement("div", {
                            className: N.a.privateTextContainer
                        }, i.a.createElement("div", {
                            className: N.a.privateHeader
                        }, "Public"), i.a.createElement("div", {
                            className: N.a.privateText
                        }, "Playable by Everyone"))), i.a.createElement("div", {
                            className: _()(N.a.privateButton, D({}, N.a.selected, this.state.game.private)),
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                e.setState({
                                    game: z(z({}, e.state.game), {}, {
                                        private: !0
                                    })
                                })
                            }
                        }, i.a.createElement("i", {
                            className: _()(N.a.privateIcon, "fas fa-lock")
                        }), i.a.createElement("div", {
                            className: N.a.privateTextContainer
                        }, i.a.createElement("div", {
                            className: N.a.privateHeader
                        }, "Private"), i.a.createElement("div", {
                            className: N.a.privateText
                        }, "Only Playable by You")))))), i.a.createElement("div", {
                            className: N.a.bottomRightContainer
                        }, this.state.loading ? i.a.createElement(M.a, null) : i.a.createElement("div", {
                            type: "submit",
                            role: "button",
                            onClick: this.onEdit,
                            className: _()(N.a.submitButton, D({}, N.a.buttonFilled, this.state.game.title), D({}, N.a.buttonError, this.state.titleError)),
                            tabIndex: 0
                        }, i.a.createElement("i", {
                            className: _()("fas fa-save", N.a.createIcon)
                        }), "Save"), this.state.titleError || this.state.imageError ? i.a.createElement("div", {
                            className: N.a.errorContainer
                        }, i.a.createElement("i", {
                            className: _()(N.a.errorIcon, "fas fa-times-circle")
                        }), i.a.createElement("div", {
                            className: N.a.errorText
                        }, this.state.titleError ? this.state.titleError : this.state.imageError)) : null)), i.a.createElement("div", {
                            style: {
                                height: 30
                            }
                        }), i.a.createElement("input", {
                            type: "submit",
                            style: {
                                opacity: 0,
                                display: "none"
                            }
                        })), this.state.uploadingURL ? i.a.createElement("div", {
                            className: I.a.modal
                        }, i.a.createElement("form", {
                            onSubmit: this.onURLSubmit,
                            className: N.a.urlContainer
                        }, i.a.createElement("div", {
                            className: N.a.urlText
                        }, "Image URL Address"), i.a.createElement("i", {
                            className: _()(N.a.urlCloseIcon, "fas fa-times"),
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.setState({
                                    uploadingURL: !1,
                                    tempURL: ""
                                })
                            }
                        }), i.a.createElement("input", {
                            className: _()(N.a.urlInput, D({}, N.a.inputFilled, this.state.tempURL), D({}, N.a.inputError, this.state.urlError)),
                            onChange: this.onURLUpdate,
                            type: "text",
                            autoFocus: g.isMobile ? "" : "autofocus"
                        }), i.a.createElement("input", {
                            type: "submit",
                            value: "Upload",
                            className: _()(N.a.urlButton, D({}, N.a.urlButtonFilled, this.state.tempURL), D({}, N.a.urlButtonError, this.state.urlError)),
                            tabIndex: 0
                        }), this.state.urlError ? i.a.createElement("div", {
                            className: N.a.urlErrorContainer
                        }, i.a.createElement("i", {
                            className: _()(N.a.urlErrorIcon, "fas fa-times-circle")
                        }), i.a.createElement("div", {
                            className: N.a.urlErrorText
                        }, this.state.urlError)) : null)) : null), this.state.showUnsplash ? i.a.createElement(P.a, {
                            select: function(t) {
                                return e.setState({
                                    showUnsplash: !1,
                                    unsplashURL: t
                                })
                            },
                            close: function() {
                                return e.setState({
                                    showUnsplash: !1
                                })
                            }
                        }) : null)
                    }
                }]) && H(a.prototype, s),
                o && H(a, o),
                r
            }(i.a.Component);
            G.propTypes = {
                game: l.a.object,
                createGame: l.a.func.isRequired,
                history: l.a.object.isRequired
            };
            t.a = Object(c.a)(Object(n.b)((function(e) {
                return {
                    game: e.games.game
                }
            }
            ), (function(e) {
                return Object(o.b)({
                    createGame: C.a
                }, e)
            }
            ))(G))
        }
        ).call(this, a("8oxB"))
    },
    "59PT": function(e, t, a) {
        (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__background___3kGX4-camelCase{background-size:100px}.styles__contentHolder___1guPd-camelCase{display:flex;flex-direction:column;position:absolute;left:5%;top:50%;transform:translateY(-50%)}.styles__header___1HNLd-camelCase{font-size:9vw;line-height:8.4vw;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__buttonContainer___37IT2-camelCase{margin-top:65px;display:flex;flex-flow:column;align-items:flex-start}.styles__button___q-1fL-camelCase{font-size:3vw;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;margin:5px 0;text-align:left;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__button___q-1fL-camelCase:hover{transform:scale(1.05)}.styles__loginText___2dCYH-camelCase{position:absolute;bottom:1%;left:50%;transform:translateX(-50%);text-align:center;font-size:18px;font-family:Nunito,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;padding:7px 10px}.styles__blook1___15aTQ-camelCase{top:30%;right:37%;transform:translate(50%,-50%) rotate(5deg)}.styles__blook1___15aTQ-camelCase,.styles__blook2___2PZn9-camelCase{position:absolute;width:12vw;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block}.styles__blook2___2PZn9-camelCase{top:50%;right:13%;transform:translate(50%,-50%) rotate(20deg)}.styles__blook3___272y0-camelCase{position:absolute;top:70%;right:32%;width:12vw;display:block;transform:translate(50%,-50%) rotate(-15deg)}.styles__blook3___272y0-camelCase,.styles__savesHeader___lUpM4-camelCase{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__savesHeader___lUpM4-camelCase{width:90%;margin:80px auto 50px;display:flex;justify-content:center;align-items:center;font-size:72px;color:#fff;text-shadow:2px 2px 8px grey;text-align:center;font-family:Titan One,sans-serif}.styles__savesHolder___2LooD-camelCase{width:90%;margin:5px 5%;display:flex;flex-direction:row;justify-content:space-evenly}.styles__saveContainer___3CdGG-camelCase{background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);font-family:Nunito,sans-serif;color:#3a3a3a;padding:15px;margin:15px 20px;border-radius:10px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-direction:column;flex-grow:1;max-width:286px}.styles__saveTitle___3Q6W2-camelCase{font-weight:700;font-size:42px;line-height:45px;width:90%;margin:10px 5% 0}.styles__saveRow___INHg_-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;width:90%;margin:5px auto;font-size:22px;height:25px}.styles__saveIcon___2B6Kx-camelCase{width:38px;text-align:center;margin-left:5px;color:#3a3a3a;opacity:.9}.styles__saveHealthHolder___2U73W-camelCase{height:18px;width:calc(100% - 43px);margin-right:auto;background-color:#c43a35;border-radius:5px;overflow:hidden}.styles__saveHealthBar___FOerx-camelCase{width:100%;height:100%;background-color:#4bc22e;transform-origin:left}.styles__loadButton___39xSe-camelCase{background-color:#0bc2cf;display:flex;justify-content:center;align-items:center;margin:15px auto;font-family:Nunito,sans-serif;font-weight:700;font-size:26px;padding:5px 13px;border-radius:7px;color:#fff;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__loadButton___39xSe-camelCase:hover{transform:scale(.95)}.styles__emptySave___VH9aB-camelCase{font-size:54px;padding:20px 0;margin:auto;font-weight:700}.styles__backButton___3z6y4-camelCase{position:absolute;top:10px;left:10px;font-size:36px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;font-family:Titan One,sans-serif;color:#fff;padding:5px 15px;text-shadow:2px 2px 8px grey;transition:transform .2s}.styles__backButton___3z6y4-camelCase:hover{transform:scale(1.05)}.styles__stageText___1um76-camelCase{font-size:28px;font-weight:700;margin-right:10px;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif;text-align:right;overflow:hidden}@media only screen and (max-width:950px){.styles__savesHeader___lUpM4-camelCase{font-size:64px;line-height:70px;margin:70px auto 10px}.styles__saveHeaderHolder___2YN5M-camelCase{margin:70px auto 0}.styles__savesHolder___2LooD-camelCase{width:90%;margin:5px 5%;flex-direction:column;justify-content:space-evenly;align-items:center}.styles__saveContainer___3CdGG-camelCase{width:300px;margin:15px 20px}}@media only screen and (max-width:800px){.styles__header___1HNLd-camelCase{font-size:19vw;line-height:18vw}.styles__blook1___15aTQ-camelCase,.styles__blook2___2PZn9-camelCase,.styles__blook3___272y0-camelCase{display:none}.styles__button___q-1fL-camelCase{font-size:10vw}.styles__loginText___2dCYH-camelCase{width:80%;font-size:14px}}", ""]),
        t.locals = {
            background: "styles__background___3kGX4-camelCase",
            contentHolder: "styles__contentHolder___1guPd-camelCase",
            header: "styles__header___1HNLd-camelCase",
            buttonContainer: "styles__buttonContainer___37IT2-camelCase",
            button: "styles__button___q-1fL-camelCase",
            loginText: "styles__loginText___2dCYH-camelCase",
            blook1: "styles__blook1___15aTQ-camelCase",
            blook2: "styles__blook2___2PZn9-camelCase",
            blook3: "styles__blook3___272y0-camelCase",
            savesHeader: "styles__savesHeader___lUpM4-camelCase",
            savesHolder: "styles__savesHolder___2LooD-camelCase",
            saveContainer: "styles__saveContainer___3CdGG-camelCase",
            saveTitle: "styles__saveTitle___3Q6W2-camelCase",
            saveRow: "styles__saveRow___INHg_-camelCase",
            saveIcon: "styles__saveIcon___2B6Kx-camelCase",
            saveHealthHolder: "styles__saveHealthHolder___2U73W-camelCase",
            saveHealthBar: "styles__saveHealthBar___FOerx-camelCase",
            loadButton: "styles__loadButton___39xSe-camelCase",
            emptySave: "styles__emptySave___VH9aB-camelCase",
            backButton: "styles__backButton___3z6y4-camelCase",
            stageText: "styles__stageText___1um76-camelCase",
            saveHeaderHolder: "styles__saveHeaderHolder___2YN5M-camelCase"
        }
    },
    "8K9W": function(e, t, a) {
        "use strict";
        var s = a("q1tI")
          , i = a.n(s)
          , o = a("ANjH")
          , n = a("/MKj")
          , r = a("17x9")
          , l = a.n(r)
          , c = a("2iEm")
          , u = a("wIs1")
          , h = a("mLw1")
          , d = a("FLf1")
          , p = a.n(d)
          , m = a("wd/R")
          , f = a.n(m)
          , _ = a("TSYQ")
          , g = a.n(_)
          , y = a("JeI0")
          , x = a.n(y)
          , w = a("vDqi")
          , b = a.n(w)
          , v = a("b6Qr")
          , C = a("GIcp")
          , k = a.n(C)
          , S = a("S4iY")
          , E = a.n(S)
          , I = a("e47E")
          , T = a("3CTX")
          , N = a.n(T)
          , R = a("iQ+n")
          , O = a("TN+F");
        function M(e) {
            return (M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function P(e) {
            return function(e) {
                if (Array.isArray(e))
                    return B(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return B(e, t);
                var a = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === a && e.constructor && (a = e.constructor.name);
                if ("Map" === a || "Set" === a)
                    return Array.from(e);
                if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                    return B(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function B(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, s = new Array(t); a < t; a++)
                s[a] = e[a];
            return s
        }
        function j(e, t) {
            for (var a = 0; a < t.length; a++) {
                var s = t[a];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value"in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        function z(e, t) {
            return (z = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function D(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var a, s = F(e);
                if (t) {
                    var i = F(this).constructor;
                    a = Reflect.construct(s, arguments, i)
                } else
                    a = s.apply(this, arguments);
                return H(this, a)
            }
        }
        function H(e, t) {
            return !t || "object" !== M(t) && "function" != typeof t ? A(e) : t
        }
        function A(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function F(e) {
            return (F = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var U = function(e) {
            var t = e.hits
              , a = e.hasMore
              , s = e.searchMore
              , o = e.searched;
            return i.a.createElement("div", {
                className: E.a.hitsHolder
            }, t.length > 0 ? i.a.createElement("div", {
                className: E.a.hitsContainer
            }, t.map((function(e) {
                return i.a.createElement(c.a, {
                    to: "/set/".concat(e._id),
                    key: e._id,
                    className: E.a.setContainer
                }, e.coverImage ? i.a.createElement("div", {
                    className: E.a.setImageFiller
                }, i.a.createElement(x.a, {
                    height: 180
                }, i.a.createElement("img", {
                    src: Object(O.d)(e.coverImage.url),
                    alt: "Cover",
                    className: E.a.coverImage
                }))) : i.a.createElement("div", {
                    className: E.a.setFillerContainer
                }, i.a.createElement("div", {
                    className: E.a.setFillerText
                }, "Blooket")), i.a.createElement("div", {
                    className: E.a.setQuestionsContainer
                }, i.a.createElement("div", {
                    className: E.a.setQuestionsText
                }, "".concat(e.questions.length, " ").concat(1 === e.questions.length ? "Question" : "Questions"))), i.a.createElement("div", {
                    className: E.a.setHeader
                }, e.title), i.a.createElement("div", {
                    className: E.a.setSpacer
                }), i.a.createElement("div", {
                    className: E.a.setPlays
                }, "".concat(Object(O.k)(e.playCount), " ").concat(1 === e.playCount ? "Play" : "Plays"), e.verified ? i.a.createElement("i", {
                    className: g()("fas fa-check-square", E.a.verifiedIcon)
                }) : null), i.a.createElement("div", {
                    className: E.a.setLastEdit
                }, "Edited ".concat(f()(e.date).fromNow())), i.a.createElement("div", {
                    className: E.a.setAuthorContainer
                }, i.a.createElement("i", {
                    className: g()(E.a.authorIcon, "fas fa-user")
                }), i.a.createElement("div", {
                    className: E.a.setAuthorText
                }, e.author, "Erin@Voces" === e.author ? i.a.createElement("img", {
                    src: "https://www.vocesdigital.com/assets/images/VOCESLOGO_DC-logo.png",
                    alt: "Voces Digital",
                    className: E.a.setAuthorIcon,
                    draggable: !1
                }) : null)))
            }
            ))) : o ? i.a.createElement("div", {
                className: E.a.noResultsText
            }, i.a.createElement("i", {
                className: g()("far fa-frown", E.a.noResultsIcon)
            }), "No Search Results", i.a.createElement("div", {
                style: {
                    fontSize: 18,
                    fontWeight: "normal"
                }
            }, "Try to refine your search")) : null, a ? i.a.createElement("div", {
                className: k.a.moreButton,
                role: "button",
                tabIndex: 0,
                onClick: s
            }, "Show More") : null)
        };
        U.propTypes = {
            hits: l.a.array,
            hasMore: l.a.bool,
            searchMore: l.a.func,
            searched: l.a.bool
        };
        var L = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && z(e, t)
            }(n, e);
            var t, a, s, o = D(n);
            function n(e) {
                var t;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (t = o.call(this, e)).state = {
                    searchQuery: "",
                    searched: !1,
                    featuredGames: [],
                    hits: [],
                    hasMore: !1,
                    numHits: 24,
                    minQuestions: 1,
                    hasCoverImage: !1,
                    minPlays: 0
                },
                t.here = !0,
                t.onSearch = t.onSearch.bind(A(t)),
                t.searchUser = t.searchUser.bind(A(t)),
                t
            }
            return t = n,
            (a = [{
                key: "componentDidMount",
                value: function() {
                    var e = this
                      , t = Object(O.g)("n")
                      , a = Object(O.g)("s");
                    if (localStorage.getItem("token")) {
                        var s = localStorage.getItem("token").split(" ");
                        2 === s.length && p.a.verify(s[1], N.a.secret, (function(s) {
                            s && console.error(s),
                            t ? e.searchUser(decodeURIComponent(t)) : a ? e.setState({
                                searchQuery: decodeURIComponent(a)
                            }, e.onSearch) : b.a.get("/api/games/featured").then((function(t) {
                                if (e.here) {
                                    var a = P(t.data);
                                    a.sort((function(e, t) {
                                        return t.playCount - e.playCount
                                    }
                                    )),
                                    e.setState({
                                        featuredGames: a
                                    })
                                }
                            }
                            )).catch((function(e) {
                                console.error(e)
                            }
                            ))
                        }
                        ))
                    }
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.here = !1
                }
            }, {
                key: "onSearch",
                value: function(e, t) {
                    var a = this;
                    e && e.preventDefault();
                    var s = t || 24;
                    s && window.history.pushState({}, null, "".concat(window.location.origin, "/discover?s=").concat(encodeURIComponent(this.state.searchQuery))),
                    b.a.get("/api/games/search", {
                        params: {
                            text: this.state.searchQuery,
                            num: s,
                            minQuestions: this.state.minQuestions,
                            hasCoverImage: this.state.hasCoverImage,
                            minPlays: this.state.minPlays
                        }
                    }).then((function(e) {
                        var t = e.data;
                        t.sort((function(e, t) {
                            return e.score === t.score ? t.playCount - e.playCount : t.score - e.score
                        }
                        )),
                        a.setState({
                            searched: !0,
                            hasMore: e.data.length >= s,
                            numHits: s,
                            hits: t
                        })
                    }
                    )).catch((function(e) {
                        console.error(e)
                    }
                    ))
                }
            }, {
                key: "searchUser",
                value: function(e) {
                    var t = this;
                    b.a.get("/api/users/games", {
                        params: {
                            name: e
                        }
                    }).then((function(a) {
                        if (t.here) {
                            var s = P(a.data.filter((function(e) {
                                return !e.private && e.questions.length > 0
                            }
                            )));
                            s.sort((function(e, t) {
                                return t.playCount - e.playCount
                            }
                            )),
                            t.setState({
                                featuredGames: s,
                                searchQuery: t.state.searchQuery || e
                            })
                        }
                    }
                    )).catch((function(e) {
                        console.error(e)
                    }
                    ))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    if (localStorage.getItem("token")) {
                        var t = localStorage.getItem("token").split(" ");
                        2 === t.length ? p.a.verify(t[1], N.a.secret, (function(t) {
                            e.redirect = !!t
                        }
                        )) : this.redirect = !0
                    } else
                        this.redirect = !0;
                    return this.redirect ? i.a.createElement(h.a, {
                        to: "/login"
                    }) : i.a.createElement("div", {
                        className: v.isMobile ? k.a.mBody : k.a.body
                    }, i.a.createElement(R.a, {
                        title: "Discover Sets | Blooket",
                        desc: "Search and discover new sets from a large collection created by users. These sets can then be viewed, edited, or used to host games."
                    }), i.a.createElement(I.a, {
                        history: this.props.history,
                        page: "Discover"
                    }), i.a.createElement("div", {
                        className: k.a.profileRegularBody
                    }, i.a.createElement("div", {
                        className: E.a.searchBoxHolder
                    }, i.a.createElement("form", {
                        onSubmit: this.onSearch,
                        className: E.a.searchContainer
                    }, i.a.createElement("input", {
                        className: E.a.searchInput,
                        type: "search",
                        value: this.state.searchQuery,
                        onChange: function(t) {
                            return e.setState({
                                searchQuery: t.target.value
                            })
                        },
                        placeholder: "Search for a Set..."
                    }), i.a.createElement("i", {
                        className: g()(E.a.searchIcon, "fas fa-search"),
                        role: "button",
                        tabIndex: 0,
                        onClick: this.onSearch
                    })), this.state.searched ? i.a.createElement("div", {
                        className: E.a.filtersHolder
                    }, i.a.createElement("i", {
                        className: g()(E.a.filterIcon, "fas fa-sliders-h")
                    }), i.a.createElement("div", {
                        className: E.a.filtersColumn
                    }, i.a.createElement("div", {
                        className: E.a.filterRow,
                        style: {
                            alignItems: "center"
                        }
                    }, "Has Cover Image:", i.a.createElement("div", {
                        className: g()(E.a.checkBox, this.state.hasCoverImage ? E.a.checkYes : E.a.checkNo),
                        role: "button",
                        tabIndex: 0,
                        style: {
                            marginLeft: "auto"
                        },
                        onClick: function() {
                            return e.setState({
                                hasCoverImage: !e.state.hasCoverImage
                            }, (function(t) {
                                return e.onSearch(t, e.state.numHits)
                            }
                            ))
                        }
                    }, i.a.createElement("i", {
                        className: g()(E.a.checkIcon, "fas fa-check")
                    }))), i.a.createElement("div", {
                        className: E.a.filterRow,
                        style: {
                            flexDirection: "column"
                        }
                    }, "Minimum Questions:", i.a.createElement("div", {
                        className: E.a.filters
                    }, [1, 5, 10, 25, 50].map((function(t) {
                        return i.a.createElement("div", {
                            className: g()(E.a.checkBox, e.state.minQuestions === t ? E.a.checkYes : E.a.checkNo),
                            role: "button",
                            tabIndex: 0,
                            key: t,
                            onClick: function() {
                                return e.setState({
                                    minQuestions: t
                                }, (function(t) {
                                    return e.onSearch(t, e.state.numHits)
                                }
                                ))
                            }
                        }, i.a.createElement("div", {
                            className: E.a.checkIcon
                        }, t))
                    }
                    )))), i.a.createElement("div", {
                        className: E.a.filterRow,
                        style: {
                            flexDirection: "column"
                        }
                    }, "Minimum Plays:", i.a.createElement("div", {
                        className: E.a.filters
                    }, [0, 10, 100, 500, 1e3].map((function(t) {
                        return i.a.createElement("div", {
                            className: g()(E.a.checkBox, e.state.minPlays === t ? E.a.checkYes : E.a.checkNo),
                            role: "button",
                            tabIndex: 0,
                            key: t,
                            style: {
                                width: 30
                            },
                            onClick: function() {
                                return e.setState({
                                    minPlays: t
                                }, (function(t) {
                                    return e.onSearch(t, e.state.numHits)
                                }
                                ))
                            }
                        }, i.a.createElement("div", {
                            className: E.a.checkIcon
                        }, Object(O.r)(t)))
                    }
                    )))))) : null), i.a.createElement(U, {
                        hits: this.state.searched ? this.state.hits : this.state.featuredGames,
                        hasMore: this.state.searched && this.state.hasMore,
                        searchMore: function(t) {
                            return e.onSearch(t, e.state.numHits + 24)
                        },
                        searched: this.state.searched
                    }), i.a.createElement("div", {
                        style: {
                            height: 20
                        }
                    })))
                }
            }]) && j(t.prototype, a),
            s && j(t, s),
            n
        }(i.a.Component);
        L.propTypes = {
            history: l.a.object.isRequired
        };
        t.a = Object(u.a)(Object(n.b)((function() {
            return {}
        }
        ), (function(e) {
            return Object(o.b)({}, e)
        }
        ))(L))
    },
    Aq3b: function(e, t, a) {
        (t = e.exports = a("JPst")(!1)).push([e.i, ".tourSteps__centered___3QpJc-camelCase{top:50%;left:50%;transform:translate(-50%,-50%)}.tourSteps__health___mcEse-camelCase{top:125px;right:10px}.tourSteps__topRight___DfuDG-camelCase{top:65px;right:10px}.tourSteps__shop___EGuqR-camelCase{right:300px}.tourSteps__shop___EGuqR-camelCase,.tourSteps__stats___3LAik-camelCase{top:50%;transform:translateY(-50%)}.tourSteps__stats___3LAik-camelCase{left:250px}.tourSteps__nextRound___19hrJ-camelCase{right:300px;bottom:25px}@media only screen and (max-width:800px){.tourSteps__health___mcEse-camelCase{top:auto;bottom:70px}.tourSteps__shop___EGuqR-camelCase{right:50%;top:auto;bottom:80px;transform:translateX(50%)}.tourSteps__stats___3LAik-camelCase{left:50%;top:50%;transform:translate(-50%,-50%)}.tourSteps__nextRound___19hrJ-camelCase{bottom:auto;top:130px;right:20px}}", ""]),
        t.locals = {
            centered: "tourSteps__centered___3QpJc-camelCase",
            health: "tourSteps__health___mcEse-camelCase",
            topRight: "tourSteps__topRight___DfuDG-camelCase",
            shop: "tourSteps__shop___EGuqR-camelCase",
            stats: "tourSteps__stats___3LAik-camelCase",
            nextRound: "tourSteps__nextRound___19hrJ-camelCase"
        }
    },
    B2Xb: function(e, t, a) {
        var s = a("Aq3b");
        "string" == typeof s && (s = [[e.i, s, ""]]);
        var i = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        a("aET+")(s, i);
        s.locals && (e.exports = s.locals)
    },
    ESOo: function(e, t, a) {
        "use strict";
        var s = a("q1tI")
          , i = a.n(s)
          , o = a("/MKj")
          , n = a("ANjH")
          , r = a("17x9")
          , l = a.n(r)
          , c = a("mf+E")
          , u = a("wIs1")
          , h = a("b6Qr")
          , d = a("FLf1")
          , p = a.n(d)
          , m = a("ixhd")
          , f = a.n(m)
          , _ = a("TSYQ")
          , g = a.n(_)
          , y = a("vDqi")
          , x = a.n(y)
          , w = a("iQ+n")
          , b = a("3CTX")
          , v = a.n(b)
          , C = a("Qv3B")
          , k = a.n(C)
          , S = a("GIcp")
          , E = a.n(S)
          , I = a("2g2H")
          , T = a("SdQT")
          , N = a("ow7w")
          , R = a("FPhr")
          , O = a("6hcl")
          , M = a("SCqF")
          , P = a("vPiy")
          , B = a("TN+F")
          , j = a("R1k4")
          , z = a("B2Xb")
          , D = a.n(z)
          , H = function(e, t, a, s) {
            return a.createVector(Math.floor(e / s), Math.floor(t / s))
        }
          , A = function(e, t, a, s, i, o) {
            return e < a || t < s || e > a + i || t > s + o
        }
          , F = function(e, t) {
            var a = e.split(",");
            return t.createVector(parseInt(a[0], 10), parseInt(a[1], 10))
        }
          , U = function(e, t) {
            return "".concat(e, ",").concat(t)
        }
          , L = function(e, t, a, s) {
            var i = [];
            return 0 !== a && e[a - 1][t] === s && i.push(U(t, a - 1)),
            0 !== t && e[a][t - 1] === s && i.push(U(t - 1, a)),
            a !== e.length - 1 && e[a + 1][t] === s && i.push(U(t, a + 1)),
            t !== e[a].length - 1 && e[a][t + 1] === s && i.push(U(t + 1, a)),
            i
        }
          , q = function(e, t, a) {
            if (!e || 0 === e.length)
                return null;
            for (var s = 1e4, i = e[0], o = 0; o < e.length; o++) {
                var n = e[o];
                if (!a || !a.includes(n)) {
                    var r = t.dist(n.pos);
                    r < s && (s = r,
                    i = n)
                }
            }
            return i
        }
          , G = function(e, t, a) {
            for (var s = [], i = 0; i < e; i++) {
                s[i] = [];
                for (var o = 0; o < t; o++)
                    s[i][o] = a
            }
            return s
        }
          , W = function(e, t, a) {
            return e > Math.min(t, a) && e < Math.max(t, a)
        }
          , Q = function(e, t, a, s) {
            return s.createVector(e * a + a / 2, t * a + a / 2)
        }
          , K = function(e, t, a, s, i, o) {
            var n = Q(a, s, i, o)
              , r = Math.max(.175 * i, 3.25) * (30 / (o.frameRate() > 5 ? o.frameRate() : 30));
            return W(e, n.x - r, n.x + r) && W(t, n.y - r, n.y + r)
        }
          , V = function(e, t, a, s, i) {
            return Math.pow(e - a, 2) + Math.pow(t - s, 2) < Math.pow(i, 2)
        }
          , X = function(e, t, a, s, i) {
            for (var o = [], n = 0; n < s.length; n++) {
                var r = s[n];
                V(r.pos.x, r.pos.y, e, t, (a + .5) * i) && o.push(r)
            }
            return o
        }
          , Y = function(e, t, a, s, i) {
            var o = 1e4
              , n = 1e4
              , r = e[0];
            return e.forEach((function(e) {
                var l = H(e.pos.x, e.pos.y, s, i)
                  , c = t[l.y][l.x]
                  , u = 1e4
                  , h = a[l.y][l.x];
                1 === h && (u = e.pos.x - l.x * i),
                2 === h && (u = e.pos.y - l.y * i),
                3 === h && (u = (l.x + 1) * i - e.pos.x),
                4 === h && (u = (l.y + 1) * i - e.pos.y),
                (c < o || c === o && u < n) && (o = c,
                n = u,
                r = e)
            }
            )),
            r
        }
          , J = function(e, t, a, s, i) {
            return W(e, 0, a * i) && W(t, 0, s * i)
        }
          , Z = function(e, t, a) {
            return Math.abs((e.x * (t.y - a.y) + t.x * (a.y - e.y) + a.x * (e.y - t.y)) / 2)
        }
          , $ = function(e, t, a, s) {
            var i = 0;
            i += Z(t, e, a),
            i += Z(a, e, s),
            i += Z(s, e, t);
            var o = Z(t, a, s);
            return Math.round(i) === Math.round(o)
        };
        function ee(e, t) {
            for (var a = 0; a < t.length; a++) {
                var s = t[a];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value"in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        var te = function() {
            function e(t, a, s, i, o, n) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.p5 = s,
                this.images = o,
                this.width = .5,
                this.img = "",
                this.alive = !0,
                this.effects = [],
                this.name = "enemy",
                this.sound = "pop",
                this.pos = this.p5.createVector(t * i + i / 2, a * i + i / 2),
                this.vel = this.p5.createVector(0, 0),
                this.dir = this.p5.createVector(0, 0),
                this.danceAngle = 0,
                this.freezeTime = 0,
                this.slowLevel = 0,
                this.blowTime = 0,
                this.lastTile = [],
                this.health = n,
                this.maxHealth = n,
                this.speed = 1,
                this.onCreate()
            }
            var t, a, s;
            return t = e,
            (a = [{
                key: "getDrawData",
                value: function() {
                    return this.health > 5e3 ? {
                        img: this.images["Light Slime Monster"],
                        width: 2.3,
                        speed: .5
                    } : this.health > 1e3 ? {
                        img: this.images["Dark Slime Monster"],
                        width: 1.7,
                        speed: .5
                    } : this.health > 300 ? {
                        img: this.images["Red Slime Monster"],
                        width: 1.2,
                        speed: .75
                    } : this.health > 120 ? {
                        img: this.images["Slime Monster"],
                        width: 1,
                        speed: .75
                    } : this.health > 85 ? {
                        img: this.images.Black,
                        width: .3,
                        speed: 1.5
                    } : this.health > 40 ? {
                        img: this.images.Red,
                        width: .7,
                        speed: .75
                    } : this.health > 20 ? {
                        img: this.images.Green,
                        width: .6,
                        speed: 1.5
                    } : this.health > 10 ? {
                        img: this.images.Orange,
                        width: .55,
                        speed: 2.25
                    } : this.health > 5 ? {
                        img: this.images.Lime,
                        width: .5,
                        speed: 2
                    } : this.health > 2 ? {
                        img: this.images.Purple,
                        width: .45,
                        speed: 1.75
                    } : this.health > 1 ? {
                        img: this.images.Pink,
                        width: .4,
                        speed: 1.5
                    } : {
                        img: this.images.Blue,
                        width: .35,
                        speed: 1.25
                    }
                }
            }, {
                key: "draw",
                value: function(e) {
                    this.p5.push(),
                    this.p5.translate(this.pos.x, this.pos.y),
                    this.p5.angleMode(this.p5.RADIANS),
                    this.p5.rotate(this.danceAngle),
                    this.p5.imageMode(this.p5.CENTER),
                    this.p5.image(this.img, 0, 0, this.width * e, this.width * e * 1.15),
                    this.freezeTime > 0 ? this.p5.image(this.images.Snowflake, 0, this.width * e * -.00226833, this.width * e * .7, this.width * e * .7) : this.slowLevel > 0 && this.p5.image(this.images.Snowflake, 0, this.width * e * -.00226833, this.width * e * .45, this.width * e * .45),
                    this.p5.pop()
                }
            }, {
                key: "dealDamage",
                value: function(e) {
                    this.health > 0 && (this.health -= Math.round(e)),
                    this.health <= 0 && this.onKilled()
                }
            }, {
                key: "isDead",
                value: function() {
                    return !this.alive
                }
            }, {
                key: "kill",
                value: function() {
                    this.alive = !1
                }
            }, {
                key: "onCreate",
                value: function() {
                    this.health = this.maxHealth
                }
            }, {
                key: "onKilled",
                value: function() {
                    this.alive && this.kill()
                }
            }, {
                key: "dance",
                value: function() {
                    this.danceAngle = 2 * Math.PI
                }
            }, {
                key: "freeze",
                value: function(e) {
                    this.freezeTime = e
                }
            }, {
                key: "blowBack",
                value: function() {
                    this.blowTime = 15
                }
            }, {
                key: "slow",
                value: function() {
                    this.slowLevel = 3
                }
            }, {
                key: "pxSpeed",
                value: function(e, t) {
                    return this.speed * e * (t ? 2 : 1) / (this.p5.frameRate() > 5 ? this.p5.frameRate() : 30)
                }
            }, {
                key: "steer",
                value: function(e, t, a, s, i) {
                    var o = H(this.pos.x, this.pos.y, this.p5, e);
                    if (!A(o.x, o.y, 0, 0, t, a)) {
                        var n = s[o.y][o.x];
                        if (0 === n && (o.x !== i.x || o.y !== i.y))
                            return this.pos.x = this.lastTile[0] * e + e / 2,
                            void (this.pos.y = this.lastTile[1] * e + e / 2);
                        if (function(e, t, a, s, i, o, n) {
                            var r = Q(a, s, i, o)
                              , l = Math.max(.175 * i, 3.25) * (30 / (o.frameRate() > 5 ? o.frameRate() : 30));
                            return "x" === n ? W(e, r.x - 2 * l, r.x + 2 * l) && W(t, r.y - l, r.y + l) : W(e, r.x - l, r.x + l) && W(t, r.y - 2 * l, r.y + 2 * l)
                        }(this.pos.x, this.pos.y, o.x, o.y, e, this.p5, 0 === this.dir.x ? "x" : "y")) {
                            if (0 !== n && (this.lastTile = [o.x, o.y]),
                            null === n)
                                return;
                            1 === n ? this.dir = this.p5.createVector(-1, 0) : 2 === n ? this.dir = this.p5.createVector(0, -1) : 3 === n ? this.dir = this.p5.createVector(1, 0) : 4 === n && (this.dir = this.p5.createVector(0, 1))
                        }
                    }
                }
            }, {
                key: "update",
                value: function(e, t) {
                    var a = this.getDrawData();
                    this.width = a.width,
                    this.img = a.img,
                    this.speed = a.speed;
                    var s = t ? 2 : 1;
                    if (this.danceAngle > 0 && (this.danceAngle = Math.max(0, this.danceAngle - 2 * Math.PI / (20 / s))),
                    this.freezeTime > 0 && (this.freezeTime = Math.max(0, this.freezeTime - s)),
                    this.blowTime > 0 && (this.blowTime = Math.max(0, this.blowTime - s)),
                    this.slowLevel > 0 && (this.slowLevel = Math.max(0, this.slowLevel - s)),
                    0 === this.danceAngle && 0 === this.freezeTime) {
                        var i = this.pxSpeed(e, t);
                        this.vel = this.p5.createVector(this.dir.x * i, this.dir.y * i),
                        this.vel.limit(i * (this.slowLevel > 0 ? .5 : this.speed)),
                        this.blowTime > 0 ? this.pos.sub(this.p5.createVector(.35 * this.vel.x, .35 * this.vel.y)) : this.pos.add(this.vel)
                    }
                }
            }]) && ee(t.prototype, a),
            s && ee(t, s),
            e
        }();
        function ae(e) {
            return (ae = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function se(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && ie(e, t)
        }
        function ie(e, t) {
            return (ie = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function oe(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var a, s = re(e);
                if (t) {
                    var i = re(this).constructor;
                    a = Reflect.construct(s, arguments, i)
                } else
                    a = s.apply(this, arguments);
                return ne(this, a)
            }
        }
        function ne(e, t) {
            return !t || "object" !== ae(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function re(e) {
            return (re = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function le(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function ce(e, t) {
            for (var a = 0; a < t.length; a++) {
                var s = t[a];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value"in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        function ue(e, t, a) {
            return t && ce(e.prototype, t),
            a && ce(e, a),
            e
        }
        var he = function() {
            function e(t, a, s, i) {
                le(this, e),
                this.p5 = i,
                this.tileSize = s,
                this.pos = t.copy(),
                this.speed = a,
                this.vel = this.p5.createVector(Object(B.m)(-1, 1) * this.speed * s / (this.p5.frameRate() > 5 ? this.p5.frameRate() : 30), Object(B.m)(-1, 1) * this.speed * s / (this.p5.frameRate() > 5 ? this.p5.frameRate() : 30)),
                this.lifespan = 255,
                this.decay = 2,
                this.color = [0, 0, 0],
                this.radius = 4
            }
            return ue(e, [{
                key: "draw",
                value: function() {
                    this.p5.noStroke(),
                    this.p5.fill(this.color[0], this.color[1], this.color[2], this.lifespan);
                    var e = this.radius * this.tileSize / 24 * 2;
                    this.p5.ellipse(this.pos.x, this.pos.y, e, e)
                }
            }, {
                key: "isDead",
                value: function() {
                    return this.lifespan < 0
                }
            }, {
                key: "run",
                value: function(e) {
                    this.update(e),
                    this.draw()
                }
            }, {
                key: "update",
                value: function(e) {
                    this.pos.add(this.vel),
                    e && this.pos.add(this.vel),
                    this.lifespan -= this.decay * (e ? 2 : 1)
                }
            }]),
            e
        }()
          , de = function(e) {
            se(a, e);
            var t = oe(a);
            function a(e, s, i, o) {
                var n;
                return le(this, a),
                (n = t.call(this, e, s, i, o)).decay = Object(B.m)(8, 10),
                n.color = [Object(B.m)(230, 255), Object(B.m)(100, 160), Object(B.m)(200, 240)],
                n.radius = Object(B.n)(2, 6),
                n
            }
            return a
        }(he)
          , pe = function(e) {
            se(a, e);
            var t = oe(a);
            function a(e, s, i, o) {
                var n;
                return le(this, a),
                (n = t.call(this, e, s, i, o)).decay = Object(B.m)(20, 23),
                n.color = [Object(B.m)(190, 255), Object(B.m)(0, 40), Object(B.m)(0, 70)],
                n.radius = Object(B.n)(2, 6),
                n
            }
            return a
        }(he)
          , me = function(e) {
            se(a, e);
            var t = oe(a);
            function a(e, s, i, o) {
                var n;
                return le(this, a),
                (n = t.call(this, e, s, i, o)).decay = Object(B.m)(8, 10),
                n.color = [Object(B.m)(0, 80), Object(B.m)(150, 200), Object(B.m)(90, 130)],
                n.radius = Object(B.n)(2, 6),
                n
            }
            return a
        }(he)
          , fe = function(e) {
            se(a, e);
            var t = oe(a);
            function a(e, s, i, o) {
                var n;
                return le(this, a),
                (n = t.call(this, e, s, i, o)).decay = Object(B.m)(8, 10),
                n.color = [Object(B.m)(240, 255), Object(B.m)(215, 245), Object(B.m)(0, 70)],
                n.radius = Object(B.n)(2, 6),
                n
            }
            return a
        }(he)
          , _e = function(e) {
            se(a, e);
            var t = oe(a);
            function a(e, s, i, o) {
                var n;
                return le(this, a),
                (n = t.call(this, e, s, i, o)).decay = Object(B.m)(8, 10),
                n.color = [Object(B.m)(110, 140), Object(B.m)(0, 40), Object(B.m)(110, 160)],
                n.radius = Object(B.n)(2, 6),
                n
            }
            return a
        }(he)
          , ge = function(e) {
            se(a, e);
            var t = oe(a);
            function a(e, s, i, o) {
                var n;
                return le(this, a),
                (n = t.call(this, e, s, i, o)).decay = Object(B.m)(8, 10),
                n.color = [Object(B.m)(140, 150), Object(B.m)(55, 90), Object(B.m)(170, 205)],
                n.radius = Object(B.n)(2, 6),
                n
            }
            return a
        }(he)
          , ye = function(e) {
            se(a, e);
            var t = oe(a);
            function a(e, s, i, o) {
                var n;
                return le(this, a),
                (n = t.call(this, e, s, i, o)).decay = Object(B.m)(8, 10),
                n.color = [Math.round(Object(B.m)(0, 255)), 100, 50],
                n.radius = Object(B.n)(2, 6),
                n
            }
            return ue(a, [{
                key: "draw",
                value: function() {
                    this.p5.noStroke();
                    var e = this.p5.color("hsla(".concat(this.color[0], ", ").concat(this.color[1], "%, ").concat(this.color[2], "%, ").concat(Math.max(0, this.lifespan / 255), ")"));
                    this.p5.fill(e);
                    var t = this.radius * this.tileSize / 24 * 2;
                    this.p5.ellipse(this.pos.x, this.pos.y, t, t)
                }
            }]),
            a
        }(he)
          , xe = function(e) {
            se(a, e);
            var t = oe(a);
            function a(e, s, i, o) {
                var n;
                return le(this, a),
                (n = t.call(this, e, s, i, o)).decay = Object(B.m)(14, 18),
                n.color = [Object(B.m)(200, 255), Object(B.m)(0, 127), Object(B.m)(0, 31)],
                n.radius = Object(B.n)(2, 6),
                n.angle = Object(B.m)(0, 2 * Math.PI),
                n.angleVel = Object(B.m)(-.5, .5),
                n
            }
            return ue(a, [{
                key: "draw",
                value: function() {
                    this.p5.noStroke(),
                    this.p5.fill(this.color[0], this.color[1], this.color[2], this.lifespan),
                    this.p5.push(),
                    this.p5.translate(this.pos.x, this.pos.y),
                    this.p5.rotate(this.angle);
                    var e = this.radius * this.tileSize / 24 * 2;
                    this.p5.rectMode(this.p5.CENTER),
                    this.p5.rect(0, 0, e, e),
                    this.p5.pop()
                }
            }, {
                key: "update",
                value: function(e) {
                    this.pos.add(this.vel),
                    e && this.pos.add(this.vel),
                    this.lifespan -= this.decay * (e ? 2 : 1),
                    this.angle += this.angleVel * (e ? 2 : 1)
                }
            }]),
            a
        }(he)
          , we = function(e) {
            se(a, e);
            var t = oe(a);
            function a(e, s, i, o, n) {
                var r;
                return le(this, a),
                (r = t.call(this, e, s, i, o)).decay = Object(B.m)(8, 12),
                r.speed = Object(B.m)(r.speed / 2.5, r.speed),
                r.vel = o.createVector(Math.cos(n + Math.PI / 2 + Object(B.m)(-Math.PI / 5, Math.PI / 5)) * r.speed * i / (o.frameRate() > 5 ? o.frameRate() : 30), Math.sin(n + Math.PI / 2 + Object(B.m)(-Math.PI / 5, Math.PI / 5)) * r.speed * i / (o.frameRate() > 5 ? o.frameRate() : 30)),
                r
            }
            return a
        }(xe)
          , be = function(e) {
            se(a, e);
            var t = oe(a);
            function a(e, s, i, o, n) {
                var r;
                return le(this, a),
                (r = t.call(this, e, s, i, o, n)).decay = Object(B.m)(8, 11),
                r.color = [Object(B.m)(180, 220), Object(B.m)(0, 85), Object(B.m)(0, 30)],
                r
            }
            return a
        }(we)
          , ve = function(e) {
            se(a, e);
            var t = oe(a);
            function a(e, s, i, o, n) {
                var r;
                return le(this, a),
                (r = t.call(this, e, s, i, o, n)).color = [Object(B.m)(0, 170), Object(B.m)(175, 215), Object(B.m)(220, 250)],
                r
            }
            return a
        }(we)
          , Ce = function(e) {
            se(a, e);
            var t = oe(a);
            function a(e, s, i, o, n) {
                var r;
                return le(this, a),
                (r = t.call(this, e, s, i, o)).decay = Object(B.m)(8, 10),
                r.color = [Object(B.m)(0, 30), Object(B.m)(100, 200), Object(B.m)(210, 255)],
                r.radius = Object(B.n)(2, 6),
                r.speed = n % (Math.PI / 2) == 0 ? r.speed : r.speed / 1.4,
                r.vel = r.p5.createVector(Math.cos(n + Object(B.m)(-Math.PI / 6, Math.PI / 6)) * r.speed * i / (r.p5.frameRate() > 5 ? r.p5.frameRate() : 30), Math.sin(n + Object(B.m)(-Math.PI / 6, Math.PI / 6)) * r.speed * i / (r.p5.frameRate() > 5 ? r.p5.frameRate() : 30)),
                r
            }
            return a
        }(he)
          , ke = function(e) {
            se(a, e);
            var t = oe(a);
            function a(e, s, i, o, n) {
                var r;
                return le(this, a),
                (r = t.call(this, e, s, i, o, n)).color = [Object(B.m)(200, 255), Object(B.m)(0, 40), Object(B.m)(0, 65)],
                r
            }
            return a
        }(Ce)
          , Se = function(e) {
            se(a, e);
            var t = oe(a);
            function a(e, s, i, o) {
                var n;
                return le(this, a),
                (n = t.call(this, e, s, i, o)).decay = Object(B.m)(8, 10),
                n.color = [Object(B.m)(0, 30), Object(B.m)(100, 200), Object(B.m)(210, 255)],
                n.radius = Object(B.n)(2, 6),
                n
            }
            return a
        }(he)
          , Ee = function(e) {
            se(a, e);
            var t = oe(a);
            function a(e, s, i, o) {
                var n;
                return le(this, a),
                (n = t.call(this, e, s, i, o)).decay = Object(B.m)(14, 18),
                n.color = [Object(B.m)(110, 140), Object(B.m)(0, 40), Object(B.m)(110, 160)],
                n.radius = Object(B.n)(2, 6),
                n
            }
            return a
        }(he)
          , Ie = function(e) {
            se(a, e);
            var t = oe(a);
            function a(e, s, i, o, n) {
                var r;
                return le(this, a),
                (r = t.call(this, e, s, i, o)).decay = Object(B.m)(8, 10),
                r.color = [Object(B.m)(230, 255), Object(B.m)(230, 255), Object(B.m)(230, 255)],
                r.radius = Object(B.n)(1, 3),
                r.angle = Object(B.m)(0, 2 * Math.PI),
                r.angleVel = Object(B.m)(-.3, .3),
                r.speed = n % (Math.PI / 2) == 0 ? r.speed : r.speed / 1.4,
                r.vel = r.p5.createVector(Math.cos(n + Object(B.m)(-Math.PI / 6, Math.PI / 6)) * r.speed * i / (r.p5.frameRate() > 5 ? r.p5.frameRate() : 30), Math.sin(n + Object(B.m)(-Math.PI / 6, Math.PI / 6)) * r.speed * i / (r.p5.frameRate() > 5 ? r.p5.frameRate() : 30)),
                r
            }
            return ue(a, [{
                key: "draw",
                value: function() {
                    this.p5.push(),
                    this.p5.translate(this.pos.x, this.pos.y),
                    this.p5.rotate(this.angle);
                    var e = this.radius * this.tileSize / 24 * 2;
                    this.p5.noStroke(),
                    this.p5.fill(this.color[0], this.color[1], this.color[2], this.lifespan),
                    this.p5.triangle(e, -e, -e, -e, 0, e),
                    this.p5.pop()
                }
            }, {
                key: "update",
                value: function(e) {
                    this.pos.add(this.vel),
                    e && this.pos.add(this.vel),
                    this.lifespan -= this.decay * (e ? 2 : 1),
                    this.angle += this.angleVel * (e ? 2 : 1)
                }
            }]),
            a
        }(he);
        function Te(e) {
            return (Te = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Ne(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && Re(e, t)
        }
        function Re(e, t) {
            return (Re = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Oe(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var a, s = Pe(e);
                if (t) {
                    var i = Pe(this).constructor;
                    a = Reflect.construct(s, arguments, i)
                } else
                    a = s.apply(this, arguments);
                return Me(this, a)
            }
        }
        function Me(e, t) {
            return !t || "object" !== Te(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Pe(e) {
            return (Pe = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Be(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function je(e, t) {
            for (var a = 0; a < t.length; a++) {
                var s = t[a];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value"in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        function ze(e, t, a) {
            return t && je(e.prototype, t),
            a && je(e, a),
            e
        }
        var De = function() {
            function e(t, a, s, i) {
                Be(this, e),
                this.p5 = i,
                this.tileSize = s,
                this.origin = this.p5.createVector(t, a),
                this.particles = []
            }
            return ze(e, [{
                key: "addParticle",
                value: function() {
                    this.particles.push(new he(this.origin,1,this.tileSize,this.p5))
                }
            }, {
                key: "isDead",
                value: function() {
                    return 0 === this.particles.length
                }
            }, {
                key: "run",
                value: function(e) {
                    for (var t = this.particles.length - 1; t >= 0; t--) {
                        var a = this.particles[t];
                        a.run(e),
                        a.isDead() && this.particles.splice(t, 1)
                    }
                }
            }]),
            e
        }()
          , He = function(e) {
            Ne(a, e);
            var t = Oe(a);
            function a() {
                return Be(this, a),
                t.apply(this, arguments)
            }
            return ze(a, [{
                key: "addParticle",
                value: function() {
                    this.particles.push(new de(this.origin,2,this.tileSize,this.p5))
                }
            }]),
            a
        }(De)
          , Ae = function(e) {
            Ne(a, e);
            var t = Oe(a);
            function a() {
                return Be(this, a),
                t.apply(this, arguments)
            }
            return ze(a, [{
                key: "addParticle",
                value: function() {
                    this.particles.push(new pe(this.origin,2,this.tileSize,this.p5))
                }
            }]),
            a
        }(De)
          , Fe = function(e) {
            Ne(a, e);
            var t = Oe(a);
            function a() {
                return Be(this, a),
                t.apply(this, arguments)
            }
            return ze(a, [{
                key: "addParticle",
                value: function() {
                    this.particles.push(new me(this.origin,2,this.tileSize,this.p5))
                }
            }]),
            a
        }(De)
          , Ue = function(e) {
            Ne(a, e);
            var t = Oe(a);
            function a() {
                return Be(this, a),
                t.apply(this, arguments)
            }
            return ze(a, [{
                key: "addParticle",
                value: function() {
                    this.particles.push(new fe(this.origin,1.5,this.tileSize,this.p5))
                }
            }]),
            a
        }(De)
          , Le = function(e) {
            Ne(a, e);
            var t = Oe(a);
            function a() {
                return Be(this, a),
                t.apply(this, arguments)
            }
            return ze(a, [{
                key: "addParticle",
                value: function() {
                    this.particles.push(new fe(this.origin,3,this.tileSize,this.p5))
                }
            }]),
            a
        }(De)
          , qe = function(e) {
            Ne(a, e);
            var t = Oe(a);
            function a() {
                return Be(this, a),
                t.apply(this, arguments)
            }
            return ze(a, [{
                key: "addParticle",
                value: function() {
                    this.particles.push(new ge(this.origin,2,this.tileSize,this.p5))
                }
            }]),
            a
        }(De)
          , Ge = function(e) {
            Ne(a, e);
            var t = Oe(a);
            function a() {
                return Be(this, a),
                t.apply(this, arguments)
            }
            return ze(a, [{
                key: "addParticle",
                value: function() {
                    this.particles.push(new ye(this.origin,2,this.tileSize,this.p5))
                }
            }]),
            a
        }(De)
          , We = function(e) {
            Ne(a, e);
            var t = Oe(a);
            function a() {
                return Be(this, a),
                t.apply(this, arguments)
            }
            return ze(a, [{
                key: "addParticle",
                value: function() {
                    this.particles.push(new xe(this.origin,2,this.tileSize,this.p5))
                }
            }]),
            a
        }(De)
          , Qe = function(e) {
            Ne(a, e);
            var t = Oe(a);
            function a() {
                return Be(this, a),
                t.apply(this, arguments)
            }
            return ze(a, [{
                key: "addParticle",
                value: function(e) {
                    this.particles.push(new we(this.origin,3,this.tileSize,this.p5,e))
                }
            }]),
            a
        }(De)
          , Ke = function(e) {
            Ne(a, e);
            var t = Oe(a);
            function a() {
                return Be(this, a),
                t.apply(this, arguments)
            }
            return ze(a, [{
                key: "addParticle",
                value: function(e) {
                    this.particles.push(new be(this.origin,4.5,this.tileSize,this.p5,e))
                }
            }]),
            a
        }(De)
          , Ve = function(e) {
            Ne(a, e);
            var t = Oe(a);
            function a() {
                return Be(this, a),
                t.apply(this, arguments)
            }
            return ze(a, [{
                key: "addParticle",
                value: function(e) {
                    this.particles.push(new ve(this.origin,3,this.tileSize,this.p5,e))
                }
            }]),
            a
        }(De)
          , Xe = function(e) {
            Ne(a, e);
            var t = Oe(a);
            function a() {
                return Be(this, a),
                t.apply(this, arguments)
            }
            return ze(a, [{
                key: "addParticle",
                value: function(e) {
                    this.particles.push(new Ce(this.origin,2,this.tileSize,this.p5,e))
                }
            }]),
            a
        }(De)
          , Ye = function(e) {
            Ne(a, e);
            var t = Oe(a);
            function a() {
                return Be(this, a),
                t.apply(this, arguments)
            }
            return ze(a, [{
                key: "addParticle",
                value: function(e) {
                    this.particles.push(new ke(this.origin,2,this.tileSize,this.p5,e))
                }
            }]),
            a
        }(De)
          , Je = function(e) {
            Ne(a, e);
            var t = Oe(a);
            function a() {
                return Be(this, a),
                t.apply(this, arguments)
            }
            return ze(a, [{
                key: "addParticle",
                value: function(e) {
                    this.particles.push(new Se(this.origin,2,this.tileSize,this.p5,e))
                }
            }]),
            a
        }(De)
          , Ze = function(e) {
            Ne(a, e);
            var t = Oe(a);
            function a() {
                return Be(this, a),
                t.apply(this, arguments)
            }
            return ze(a, [{
                key: "addParticle",
                value: function(e) {
                    this.particles.push(new Ee(this.origin,2,this.tileSize,this.p5,e))
                }
            }]),
            a
        }(De)
          , $e = function(e) {
            Ne(a, e);
            var t = Oe(a);
            function a() {
                return Be(this, a),
                t.apply(this, arguments)
            }
            return ze(a, [{
                key: "addParticle",
                value: function(e) {
                    this.particles.push(new _e(this.origin,3,this.tileSize,this.p5,e))
                }
            }]),
            a
        }(De)
          , et = function(e) {
            Ne(a, e);
            var t = Oe(a);
            function a() {
                return Be(this, a),
                t.apply(this, arguments)
            }
            return ze(a, [{
                key: "addParticle",
                value: function(e) {
                    this.particles.push(new Ie(this.origin,2,this.tileSize,this.p5,e))
                }
            }]),
            a
        }(De);
        function tt(e) {
            return (tt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function at(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && st(e, t)
        }
        function st(e, t) {
            return (st = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function it(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var a, s = nt(e);
                if (t) {
                    var i = nt(this).constructor;
                    a = Reflect.construct(s, arguments, i)
                } else
                    a = s.apply(this, arguments);
                return ot(this, a)
            }
        }
        function ot(e, t) {
            return !t || "object" !== tt(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function nt(e) {
            return (nt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function rt(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function lt(e, t) {
            for (var a = 0; a < t.length; a++) {
                var s = t[a];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value"in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        function ct(e, t, a) {
            return t && lt(e.prototype, t),
            a && lt(e, a),
            e
        }
        var ut = function() {
            function e(t, a, s, i, o) {
                rt(this, e),
                this.p5 = o,
                this.pos = o.createVector(t, a),
                this.vel = o.createVector(0, 0),
                this.width = .2,
                this.imgName = "",
                this.alive = !0,
                this.target = {
                    pos: o.createVector(s.pos.x, s.pos.y),
                    width: s.width
                },
                this.blastRadius = .55,
                this.damage = i,
                this.speed = 15,
                this.onCreate()
            }
            return ct(e, [{
                key: "draw",
                value: function(e, t) {
                    this.p5.push(),
                    this.p5.translate(this.pos.x, this.pos.y),
                    this.p5.angleMode(this.p5.RADIANS),
                    this.p5.rotate(this.vel.heading() + Math.PI / 2),
                    this.p5.imageMode(this.p5.CENTER),
                    this.p5.image(t[this.imgName], 0, 0, this.width * e, this.width * e),
                    this.p5.imageMode(this.p5.CORNER),
                    this.p5.pop()
                }
            }, {
                key: "onHit",
                value: function(e, t) {
                    var a = this;
                    X(this.pos.x, this.pos.y, this.blastRadius, e, t).forEach((function(e) {
                        return e.dealDamage(a.damage)
                    }
                    )),
                    this.kill()
                }
            }, {
                key: "isDead",
                value: function() {
                    return !this.alive
                }
            }, {
                key: "kill",
                value: function() {
                    this.alive = !1
                }
            }, {
                key: "reachedTarget",
                value: function(e) {
                    var t = this.pos
                      , a = this.target.pos;
                    return V(t.x, t.y, a.x, a.y, Math.max(this.target.width * e * .7, .7 * e) * (30 / (this.p5.frameRate() > 5 ? this.p5.frameRate() : 30)))
                }
            }, {
                key: "pxSpeed",
                value: function(e, t) {
                    return this.speed * e * (t ? 2 : 1) / (this.p5.frameRate() > 5 ? this.p5.frameRate() : 30)
                }
            }, {
                key: "update",
                value: function(e, t) {
                    var a = this.pxSpeed(e, t)
                      , s = this.vel.normalize();
                    this.vel = this.p5.createVector(s.x * a, s.y * a),
                    this.pos.add(this.vel)
                }
            }, {
                key: "onCreate",
                value: function() {
                    var e = this.p5.createVector(this.target.pos.x, this.target.pos.y).sub(this.pos).normalize();
                    this.vel = e.mult(this.speed)
                }
            }]),
            e
        }()
          , ht = function(e) {
            at(a, e);
            var t = it(a);
            function a(e, s, i, o, n) {
                var r;
                return rt(this, a),
                (r = t.call(this, e, s, i, o, n)).width = .2,
                r.imgName = "Egg",
                r.blastRadius = .55,
                r.speed = 15,
                r.onCreate(),
                r
            }
            return ct(a, [{
                key: "onHit",
                value: function(e, t, a) {
                    for (var s = this, i = X(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new We(this.pos.x,this.pos.y,t,this.p5), n = 0; n < 10; n++)
                        o.addParticle();
                    a.push(o),
                    i.forEach((function(e) {
                        return e.dealDamage(s.damage)
                    }
                    )),
                    this.kill()
                }
            }]),
            a
        }(ut)
          , dt = function(e) {
            at(a, e);
            var t = it(a);
            function a(e, s, i, o, n) {
                var r;
                return rt(this, a),
                (r = t.call(this, e, s, i, o, n)).width = .2,
                r.imgName = "Nut",
                r.speed = 20,
                r.blastRadius = .2,
                r.onCreate(),
                r
            }
            return a
        }(ut)
          , pt = function(e) {
            at(a, e);
            var t = it(a);
            function a(e, s, i, o, n, r) {
                var l;
                return rt(this, a),
                (l = t.call(this, e, s, i, o, n)).width = .4,
                l.imgName = r ? "MasterArrow" : "Arrow",
                l.speed = 20,
                l.blastRadius = .2,
                l.onCreate(),
                l
            }
            return a
        }(ut)
          , mt = function(e) {
            at(a, e);
            var t = it(a);
            function a(e, s, i, o, n) {
                var r;
                return rt(this, a),
                (r = t.call(this, e, s, i, o, n)).width = .4,
                r.imgName = "Sword",
                r.speed = 20,
                r.blastRadius = .2,
                r.onCreate(),
                r
            }
            return a
        }(ut)
          , ft = function(e) {
            at(a, e);
            var t = it(a);
            function a(e, s, i, o, n) {
                var r;
                return rt(this, a),
                (r = t.call(this, e, s, i, o, n)).width = .4,
                r.imgName = "PhantomSword",
                r.speed = 100,
                r.blastRadius = .2,
                r.onCreate(),
                r
            }
            return a
        }(ut)
          , _t = function(e) {
            at(a, e);
            var t = it(a);
            function a(e, s, i, o, n) {
                var r;
                return rt(this, a),
                (r = t.call(this, e, s, i, o, n)).width = .4,
                r.imgName = "Heart",
                r.speed = 20,
                r.blastRadius = .6,
                r.onCreate(),
                r
            }
            return ct(a, [{
                key: "onHit",
                value: function(e, t, a) {
                    for (var s = this, i = X(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new Ae(this.pos.x,this.pos.y,t,this.p5), n = 0; n < 7; n++)
                        o.addParticle();
                    a.push(o),
                    i.forEach((function(e) {
                        return e.dealDamage(s.damage)
                    }
                    )),
                    this.kill()
                }
            }]),
            a
        }(ut)
          , gt = function(e) {
            at(a, e);
            var t = it(a);
            function a(e, s, i, o, n) {
                var r;
                return rt(this, a),
                (r = t.call(this, e, s, i, o, n)).width = .4,
                r.imgName = "EnchantedArrow",
                r.speed = 20,
                r.blastRadius = .6,
                r.onCreate(),
                r
            }
            return ct(a, [{
                key: "onHit",
                value: function(e, t, a) {
                    for (var s = this, i = X(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new Ze(this.pos.x,this.pos.y,t,this.p5), n = 0; n < 12; n++)
                        o.addParticle();
                    a.push(o),
                    i.forEach((function(e) {
                        return e.dealDamage(s.damage)
                    }
                    )),
                    this.kill()
                }
            }]),
            a
        }(ut)
          , yt = function(e) {
            at(a, e);
            var t = it(a);
            function a(e, s, i, o, n) {
                var r;
                return rt(this, a),
                (r = t.call(this, e, s, i, o, n)).width = .3,
                r.imgName = "WitchOrb",
                r.blastRadius = .6,
                r.speed = 15,
                r.onCreate(),
                r
            }
            return ct(a, [{
                key: "onHit",
                value: function(e, t, a) {
                    for (var s = this, i = X(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new Fe(this.pos.x,this.pos.y,t,this.p5), n = 0; n < 12; n++)
                        o.addParticle();
                    a.push(o),
                    i.forEach((function(e) {
                        return e.dealDamage(s.damage)
                    }
                    )),
                    this.kill()
                }
            }]),
            a
        }(ut)
          , xt = function(e) {
            at(a, e);
            var t = it(a);
            function a(e, s, i, o, n, r) {
                var l;
                return rt(this, a),
                (l = t.call(this, e, s, i, o, n)).width = .4,
                l.imgName = "PigBomb",
                l.blastRadius = r,
                l.speed = 13,
                l.onCreate(),
                l
            }
            return ct(a, [{
                key: "onHit",
                value: function(e, t, a) {
                    for (var s = this, i = X(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new He(this.pos.x,this.pos.y,t,this.p5), n = 0; n < 12; n++)
                        o.addParticle();
                    a.push(o),
                    i.forEach((function(e) {
                        return e.dealDamage(s.damage)
                    }
                    )),
                    this.kill()
                }
            }]),
            a
        }(ut)
          , wt = function(e) {
            at(a, e);
            var t = it(a);
            function a(e, s, i, o, n, r) {
                var l;
                return rt(this, a),
                (l = t.call(this, e, s, i, o, n)).width = .325,
                l.imgName = "PigBomb",
                l.blastRadius = r,
                l.speed = 5,
                l.onCreate(),
                l
            }
            return ct(a, [{
                key: "onHit",
                value: function(e, t, a) {
                    for (var s = this, i = X(this.pos.x, this.pos.y, this.blastRadius - .3, e, t), o = new He(this.pos.x,this.pos.y,t,this.p5), n = 0; n < 6; n++)
                        o.addParticle();
                    a.push(o),
                    i.forEach((function(e) {
                        return e.dealDamage(Math.floor(s.damage / 2))
                    }
                    )),
                    this.kill()
                }
            }]),
            a
        }(ut)
          , bt = function(e) {
            at(a, e);
            var t = it(a);
            function a(e, s, i, o, n, r) {
                var l;
                return rt(this, a),
                (l = t.call(this, e, s, i, o, n)).width = .45,
                l.imgName = "DiscoBall",
                l.blastRadius = r,
                l.speed = 13,
                l.angle = Object(B.m)(0, 2 * Math.PI),
                l.angleVel = Object(B.m)(-.5, .5),
                l
            }
            return ct(a, [{
                key: "draw",
                value: function(e, t) {
                    this.p5.push(),
                    this.p5.translate(this.pos.x, this.pos.y),
                    this.p5.angleMode(this.p5.RADIANS),
                    this.p5.rotate(this.angle),
                    this.p5.imageMode(this.p5.CENTER),
                    this.p5.image(t[this.imgName], 0, 0, this.width * e, this.width * e),
                    this.p5.imageMode(this.p5.CORNER),
                    this.p5.pop()
                }
            }, {
                key: "update",
                value: function(e, t) {
                    this.angle += this.angleVel * (t ? 2 : 1);
                    var a = this.pxSpeed(e, t)
                      , s = this.vel.normalize();
                    this.vel = this.p5.createVector(s.x * a, s.y * a),
                    this.pos.add(this.vel)
                }
            }, {
                key: "onHit",
                value: function(e, t, a) {
                    for (var s = this, i = X(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new Ge(this.pos.x,this.pos.y,t,this.p5), n = 0; n < 18; n++)
                        o.addParticle();
                    a.push(o),
                    i.forEach((function(e) {
                        e.dance(),
                        e.dealDamage(s.damage)
                    }
                    )),
                    this.kill()
                }
            }]),
            a
        }(ut)
          , vt = function(e) {
            at(a, e);
            var t = it(a);
            function a(e, s, i, o, n, r) {
                var l;
                return rt(this, a),
                (l = t.call(this, e, s, i, o, n)).width = .5,
                l.imgName = "PigBomb",
                l.blastRadius = r,
                l.speed = 11,
                l.onCreate(),
                l
            }
            return ct(a, [{
                key: "onHit",
                value: function(e, t, a, s) {
                    for (var i = this, o = X(this.pos.x, this.pos.y, this.blastRadius, e, t), n = new He(this.pos.x,this.pos.y,t,this.p5), r = 0; r < 20; r++)
                        n.addParticle();
                    a.push(n),
                    o.forEach((function(e) {
                        return e.dealDamage(i.damage)
                    }
                    ));
                    for (var l = Math.atan2(this.target.pos.y - this.pos.y, this.target.pos.x - this.pos.x), c = 0; c < 6; c++) {
                        var u = {
                            pos: {
                                x: this.pos.x + 1.5 * t * Math.cos((5 - c) * (Math.PI / 3) + Math.PI / 2 + l),
                                y: this.pos.y + 1.5 * t * Math.sin((5 - c) * (Math.PI / 3) + Math.PI / 2 + l)
                            },
                            width: .5
                        };
                        s.push(new wt(this.pos.x,this.pos.y,u,this.damage,this.p5,this.blastRadius))
                    }
                    this.kill()
                }
            }]),
            a
        }(ut)
          , Ct = function(e) {
            at(a, e);
            var t = it(a);
            function a(e, s, i, o, n, r) {
                var l;
                return rt(this, a),
                (l = t.call(this, e, s, {
                    pos: {
                        x: 1,
                        y: 1
                    },
                    width: .2
                }, o, n)).p5 = n,
                l.width = .5,
                l.imgName = "Fish",
                l.blastRadius = .6,
                l.speed = 1.5,
                l.angle = 0,
                l.flipped = !1,
                l.paths = r,
                l
            }
            return ct(a, [{
                key: "draw",
                value: function(e, t) {
                    this.p5.push(),
                    this.p5.translate(this.pos.x, this.pos.y),
                    this.p5.angleMode(this.p5.RADIANS),
                    this.p5.rotate(this.angle),
                    this.p5.imageMode(this.p5.CENTER),
                    this.flipped && this.p5.scale(-1, 1),
                    this.p5.image(t[this.imgName], 0, 0, this.width * e, this.width * e),
                    this.p5.pop()
                }
            }, {
                key: "onHit",
                value: function(e, t, a) {
                    for (var s = this, i = X(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new Je(this.pos.x,this.pos.y,t,this.p5), n = 0; n < 15; n++)
                        o.addParticle();
                    a.push(o),
                    i.forEach((function(e) {
                        return e.dealDamage(s.damage)
                    }
                    )),
                    this.kill()
                }
            }, {
                key: "reachedTarget",
                value: function(e, t) {
                    return X(this.pos.x, this.pos.y, this.target.width / 2, t, e).filter((function(e) {
                        return e.alive
                    }
                    )).length > 0
                }
            }, {
                key: "update",
                value: function(e, t) {
                    var a = H(this.pos.x, this.pos.y, this.p5, e)
                      , s = this.paths[a.y][a.x];
                    if (K(this.pos.x, this.pos.y, a.x, a.y, e, this.p5)) {
                        if (!s)
                            return void this.kill();
                        var i = this.pxSpeed(e, t);
                        1 === s ? (this.vel = this.p5.createVector(-i, 0),
                        this.flipped = !0,
                        this.angle = 0) : 2 === s ? (this.vel = this.p5.createVector(0, -i),
                        this.flipped = !1,
                        this.angle = -Math.PI / 2) : 3 === s ? (this.vel = this.p5.createVector(i, 0),
                        this.flipped = !1,
                        this.angle = 0) : 4 === s && (this.vel = this.p5.createVector(0, i),
                        this.flipped = !0,
                        this.angle = -Math.PI / 2)
                    }
                    this.pos.add(this.vel)
                }
            }, {
                key: "onCreate",
                value: function() {}
            }]),
            a
        }(ut)
          , kt = function(e) {
            at(a, e);
            var t = it(a);
            function a(e, s, i, o, n, r) {
                var l;
                return rt(this, a),
                (l = t.call(this, e, s, i, o, n)).pos = n.createVector(e, s),
                l.vel = n.createVector(0, 0),
                l.width = .45,
                l.imgName = "Missile",
                l.blastRadius = r,
                l.range = 100,
                l.speed = 100,
                l.target = i,
                l.lifetime = 300,
                l.onCreate(),
                l
            }
            return ct(a, [{
                key: "onHit",
                value: function(e, t, a) {
                    for (var s = this, i = X(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new We(this.pos.x,this.pos.y,t,this.p5), n = 0; n < 20; n++)
                        o.addParticle();
                    a.push(o),
                    i.forEach((function(e) {
                        return e.dealDamage(s.damage)
                    }
                    )),
                    this.kill()
                }
            }, {
                key: "findTarget",
                value: function(e, t, a, s) {
                    var i = X(this.pos.x, this.pos.y, this.range, e, t);
                    if (0 !== i.length) {
                        var o = Y(i, a, s, this.p5, t);
                        o && (this.target = o)
                    }
                }
            }, {
                key: "update",
                value: function(e, t, a, s, i) {
                    this.lifetime <= 0 ? this.kill() : (this.lifetime -= 1,
                    this.target.alive || this.findTarget(a, e, s, i),
                    this.vel = this.p5.createVector(this.target.pos.x, this.target.pos.y).sub(this.pos).normalize().mult(this.speed * (t ? 2 : 1)),
                    this.vel.limit(this.pxSpeed(e, t)),
                    this.pos.add(this.vel))
                }
            }, {
                key: "onCreate",
                value: function() {
                    var e = this.p5.createVector(this.target.pos.x, this.target.pos.y).sub(this.pos).normalize();
                    this.vel = e.mult(this.speed)
                }
            }]),
            a
        }(ut)
          , St = function(e) {
            at(a, e);
            var t = it(a);
            function a(e, s, i, o, n, r) {
                var l;
                return rt(this, a),
                (l = t.call(this, e, s, i, o, n, r)).imgName = "BigMissile",
                l.width = .55,
                l
            }
            return ct(a, [{
                key: "onHit",
                value: function(e, t, a) {
                    for (var s = this, i = X(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new qe(this.pos.x,this.pos.y,t,this.p5), n = 0; n < 30; n++)
                        o.addParticle();
                    a.push(o),
                    i.forEach((function(e) {
                        return e.dealDamage(Math.min(Math.round(s.damage + 200.15 * e.health), 50))
                    }
                    )),
                    this.kill()
                }
            }]),
            a
        }(kt)
          , Et = function(e) {
            at(a, e);
            var t = it(a);
            function a(e, s, i, o, n, r) {
                var l;
                return rt(this, a),
                (l = t.call(this, e, s, i, o, n, r)).imgName = "CornKernel",
                l.width = .2,
                l.hasReached = !1,
                l
            }
            return ct(a, [{
                key: "onHit",
                value: function(e, t, a, s, i, o) {
                    var n = this;
                    if (!this.hasReached)
                        return this.hasReached = !0,
                        void this.findTarget(e, t, i, o);
                    for (var r = X(this.pos.x, this.pos.y, this.blastRadius, e, t), l = new Ue(this.pos.x,this.pos.y,t,this.p5), c = 0; c < 5; c++)
                        l.addParticle();
                    a.push(l),
                    r.forEach((function(e) {
                        return e.dealDamage(n.damage)
                    }
                    )),
                    this.kill()
                }
            }]),
            a
        }(kt)
          , It = function(e) {
            at(a, e);
            var t = it(a);
            function a(e, s, i, o, n, r) {
                var l;
                return rt(this, a),
                (l = t.call(this, e, s, i, o, n, r)).imgName = "Corn",
                l
            }
            return ct(a, [{
                key: "onHit",
                value: function(e, t, a, s) {
                    for (var i = this, o = X(this.pos.x, this.pos.y, this.blastRadius, e, t), n = new Ue(this.pos.x,this.pos.y,t,this.p5), r = 0; r < 17; r++)
                        n.addParticle();
                    a.push(n),
                    o.forEach((function(e) {
                        return e.dealDamage(i.damage)
                    }
                    ));
                    for (var l = Math.atan2(this.target.pos.y - this.pos.y, this.target.pos.x - this.pos.x), c = 0; c < 4; c++) {
                        var u = {
                            pos: {
                                x: this.pos.x + 1.5 * t * Math.cos((3 - c) * (Math.PI / 2) + Math.PI / 2 + l),
                                y: this.pos.y + 1.5 * t * Math.sin((3 - c) * (Math.PI / 2) + Math.PI / 2 + l)
                            },
                            width: .5,
                            alive: !0
                        };
                        s.push(new Et(this.pos.x,this.pos.y,u,Math.max(.13 * this.damage, 1),this.p5,this.blastRadius / 2))
                    }
                    this.kill()
                }
            }]),
            a
        }(kt)
          , Tt = {};
        Tt.chick = {
            lineColor: "#ffcd05",
            width: .5,
            blook: "Chick",
            weight: 5,
            name: "chick",
            title: "Laser Chick",
            desc: "A Chick that shoots lasers, enough said.",
            fullCd: 40,
            cost: 2,
            range: 2,
            damage: 1,
            upgrades: [[{
                desc: "+1 Range",
                icon: "fas fa-expand-alt",
                iconColor: "#4d94ff",
                data: {
                    title: "Wise Chick",
                    range: 3,
                    cost: 1,
                    width: .55
                }
            }, {
                desc: "x2 Firing Rate",
                icon: "fas fa-running",
                iconColor: "#31b431",
                data: {
                    title: "Quick Chick",
                    cdMult: .5,
                    cost: 2,
                    width: .55
                }
            }], [{
                desc: "x3 Damage",
                icon: "fas fa-fist-raised",
                iconColor: "#ff751a",
                data: {
                    title: "Strong Chick",
                    cost: 2,
                    dmgMult: 3,
                    width: .6
                }
            }, {
                desc: "x2 Firing Rate",
                icon: "fas fa-running",
                iconColor: "#31b431",
                data: {
                    title: "Speedy Chick",
                    cdMult: .5,
                    cost: 2,
                    width: .6
                }
            }], [{
                desc: "Transform into 3 Chicks, each with a laser (x3 damage)",
                iconBlook: "Chick",
                data: {
                    finalUpgrade: 0,
                    title: "Chick Army",
                    cost: 4,
                    width: .35,
                    dmgMult: 3,
                    draw: function(e) {
                        this.p5.push(),
                        this.p5.translate(this.pos.x, this.pos.y),
                        this.p5.angleMode(this.p5.RADIANS),
                        this.p5.rotate(this.angle),
                        this.p5.imageMode(this.p5.CENTER);
                        var t = this.width * e;
                        this.p5.image(this.img, 0, -t / 1.8, t, 1.15 * t),
                        this.p5.image(this.img, t / 1.8, t / 1.8, t, 1.15 * t),
                        this.p5.image(this.img, -t / 1.8, t / 1.8, t, 1.15 * t),
                        this.p5.pop()
                    },
                    onAim: function(e, t, a, s) {
                        if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y),
                        this.canFire() && (this.resetCooldown(),
                        this.attack(e, t, a, s),
                        this.drawLine)) {
                            this.p5.push(),
                            this.p5.stroke(this.lineColor),
                            this.p5.strokeWeight(this.weight);
                            var i = this.width * t
                              , o = Math.atan2(e.pos.y - this.pos.y, e.pos.x - this.pos.x);
                            this.p5.line(this.pos.x - i / 1.8 * Math.cos(o), this.pos.y - i / 1.8 * Math.sin(o), e.pos.x, e.pos.y),
                            this.p5.line(this.pos.x + i / 1.8 * Math.sqrt(2) * Math.cos(o - Math.PI / 4), this.pos.y + i / 1.8 * Math.sqrt(2) * Math.sin(o - Math.PI / 4), e.pos.x, e.pos.y),
                            this.p5.line(this.pos.x + i / 1.8 * Math.sqrt(2) * Math.cos(o + Math.PI / 4), this.pos.y + i / 1.8 * Math.sqrt(2) * Math.sin(o + Math.PI / 4), e.pos.x, e.pos.y),
                            this.p5.strokeWeight(1),
                            this.p5.pop()
                        }
                    }
                }
            }, {
                desc: "No more lasers, just x1.5 damage explosive eggs",
                iconBlook: "Chicken",
                data: {
                    finalUpgrade: 1,
                    title: "Chicken Bomber",
                    blook: "Chicken",
                    cost: 4,
                    dmgMult: 1.5,
                    width: .65,
                    onAim: function(e, t, a, s, i) {
                        (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y),
                        this.canFire() && (this.resetCooldown(),
                        i.push(new ht(this.pos.x,this.pos.y,e,this.getDamage(),this.p5)))
                    }
                }
            }]]
        },
        Tt.owl = {
            lineColor: "#594a42",
            width: .55,
            blook: "Owl",
            weight: 3,
            name: "owl",
            title: "Owl Sniper",
            desc: "Shoots high damage bullets from a long range.",
            fullCd: 120,
            cost: 3,
            range: 9,
            damage: 5,
            upgrades: [[{
                desc: "+3 Damage",
                icon: "fas fa-fist-raised",
                iconColor: "#ff751a",
                data: {
                    title: "Buff Owl",
                    damage: 8,
                    cost: 2
                }
            }, {
                desc: "x1.5 Firing Rate",
                icon: "fas fa-running",
                iconColor: "#31b431",
                data: {
                    title: "Quick Owl",
                    cost: 2,
                    cdMult: 2 / 3
                }
            }], [{
                desc: "x1.5 Damage",
                icon: "fas fa-fist-raised",
                iconColor: "#ff751a",
                data: {
                    title: "Power Owl",
                    dmgMult: 1.5,
                    cost: 2
                }
            }, {
                desc: "x1.5 Firing Rate",
                icon: "fas fa-running",
                iconColor: "#31b431",
                data: {
                    title: "Speedy Owl",
                    cost: 2,
                    cdMult: 2 / 3
                }
            }], [{
                desc: "Each attack also deals 25% of an enemy's current health as damage (max 150)",
                iconBlook: "Agent Owl",
                data: {
                    finalUpgrade: 0,
                    title: "Agent Owl",
                    blook: "Agent Owl",
                    cost: 5,
                    lineColor: "#32da4e",
                    weight: 6,
                    attack: function(e, t, a, s) {
                        var i = Math.min(this.getDamage() + .25 * e.health, 150);
                        e.dealDamage(i),
                        this.onHit(e, t, a, s)
                    }
                }
            }, {
                desc: "Transforms into 3 birds that deal damage to all enemies in a line",
                iconBlook: "Cockatoo",
                data: {
                    finalUpgrade: 1,
                    title: "BIRDS",
                    cost: 4,
                    width: .32,
                    weight: 1,
                    blook: "Cockatoo",
                    draw: function(e, t) {
                        this.p5.push(),
                        this.p5.translate(this.pos.x, this.pos.y),
                        this.p5.angleMode(this.p5.RADIANS),
                        this.p5.rotate(this.angle),
                        this.p5.imageMode(this.p5.CENTER);
                        var a = this.width * e;
                        this.p5.image(t.Parrot, -a, 0, a, 1.15 * a),
                        this.p5.image(t.Cockatoo, 0, 0, a, 1.15 * a),
                        this.p5.image(t.Macaw, a, 0, a, 1.15 * a),
                        this.p5.pop()
                    },
                    onAim: function(e, t, a, s) {
                        if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y),
                        this.canFire() && (this.resetCooldown(),
                        this.attack(e, t, a, s),
                        this.drawLine)) {
                            this.p5.push(),
                            this.p5.translate(this.pos.x, this.pos.y),
                            this.p5.angleMode(this.p5.RADIANS),
                            this.p5.rotate(this.angle);
                            var i = this.width * t
                              , o = (this.range + .5) * t;
                            this.p5.noStroke(),
                            this.p5.rectMode(this.p5.CORNER),
                            this.p5.fill("#ed1c24"),
                            this.p5.rect(1.5 * -i, 0, i, o),
                            this.p5.fill("#ffffff"),
                            this.p5.rect(-i / 2, 0, i, o),
                            this.p5.fill("#00aeef"),
                            this.p5.rect(i / 2, 0, i, o),
                            this.p5.strokeWeight(1),
                            this.p5.pop()
                        }
                    },
                    attack: function(e, t, a, s) {
                        var i = this
                          , o = this.getDamage()
                          , n = []
                          , r = this.width * t
                          , l = (this.range + .5) * t
                          , c = this.pos.x - l * Math.sin(this.angle)
                          , u = this.pos.y + l * Math.cos(this.angle);
                        s.forEach((function(e) {
                            (function(e, t, a, s, i) {
                                var o = 0;
                                o += Z(t, e, i),
                                o += Z(i, e, s),
                                o += Z(s, e, a),
                                o += Z(e, a, t);
                                var n = Math.abs((t.x * a.y - t.y * a.x + (a.x * s.y - a.y * s.x) + (s.x * i.y - s.y * i.x) + (i.x * t.y - i.y * t.x)) / 2);
                                return Math.round(o) === Math.round(n)
                            }
                            )({
                                x: e.pos.x,
                                y: e.pos.y
                            }, {
                                x: i.pos.x - r * Math.cos(i.angle),
                                y: i.pos.y + r * Math.sin(i.angle)
                            }, {
                                x: i.pos.x - r * Math.cos(i.angle),
                                y: i.pos.y - r * Math.sin(i.angle)
                            }, {
                                x: c - r * Math.cos(i.angle),
                                y: u - r * Math.sin(i.angle)
                            }, {
                                x: c + r * Math.cos(i.angle),
                                y: u + r * Math.sin(i.angle)
                            }) && n.push(e)
                        }
                        )),
                        n.forEach((function(e) {
                            return e.dealDamage(o)
                        }
                        )),
                        this.onHit(e, t, a, s)
                    }
                }
            }]]
        },
        Tt.squirrel = {
            drawLine: !1,
            width: .5,
            blook: "Squirrel",
            name: "squirrel",
            title: "Nutty Squirrel",
            desc: "Throws harmful nuts at enemies.",
            fullCd: 45,
            cost: 3,
            range: 1.5,
            damage: 1,
            onAim: function(e, t, a, s, i) {
                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y),
                this.canFire() && (this.resetCooldown(),
                i.push(new dt(this.pos.x,this.pos.y,e,this.getDamage(),this.p5)))
            },
            upgrades: [[{
                desc: "+1 Range",
                icon: "fas fa-expand-alt",
                iconColor: "#4d94ff",
                data: {
                    title: "Sharp Squirrel",
                    range: 3,
                    cost: 1,
                    width: .55
                }
            }, {
                desc: "x2 Firing Rate",
                icon: "fas fa-running",
                iconColor: "#31b431",
                data: {
                    title: "Swift Squirrel",
                    cost: 2,
                    cdMult: .5,
                    width: .55
                }
            }], [{
                desc: "x3 Damage",
                icon: "fas fa-fist-raised",
                iconColor: "#ff751a",
                data: {
                    title: "Strong Squirrel",
                    cost: 3,
                    dmgMult: 3
                }
            }, {
                desc: "x1.5 Firing Rate",
                icon: "fas fa-running",
                iconColor: "#31b431",
                data: {
                    title: "Speedster Squirrel",
                    cost: 2,
                    cdMult: 2 / 3
                }
            }], [{
                desc: "Transform into 9 mini squirrels, each with a 1/4 damage acorn",
                iconBlook: "Squirrel",
                data: {
                    finalUpgrade: 0,
                    title: "Lots O' Squirrels",
                    cost: 4,
                    width: .3,
                    dmgMult: 9 / 4,
                    draw: function(e) {
                        var t = this
                          , a = [-1, 0, 1];
                        a.forEach((function(s) {
                            a.forEach((function(a) {
                                t.p5.push(),
                                t.p5.translate(t.pos.x + .325 * e * a, t.pos.y + .325 * e * s),
                                t.p5.angleMode(t.p5.RADIANS),
                                t.p5.rotate(t.angle),
                                t.p5.imageMode(t.p5.CENTER);
                                var i = t.width * e;
                                t.p5.image(t.img, 0, 0, i, 1.15 * i),
                                t.p5.pop()
                            }
                            ))
                        }
                        ))
                    },
                    onAim: function(e, t, a, s, i) {
                        var o = this;
                        if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y),
                        this.canFire()) {
                            this.resetCooldown();
                            var n = [-1, 0, 1];
                            n.forEach((function(a) {
                                n.forEach((function(s) {
                                    i.push(new dt(o.pos.x + .325 * t * s,o.pos.y + .325 * t * a,e,o.getDamage() / 9,o.p5))
                                }
                                ))
                            }
                            ))
                        }
                    }
                }
            }, {
                desc: "Every 5 attacks, the squirrel goes nuts and throws acorns rapidly",
                iconBlook: "Nuts Squirrel",
                data: {
                    finalUpgrade: 1,
                    title: "GO NUTS SQUIRREL",
                    blook: "Nuts Squirrel",
                    img: "Squirrel",
                    cost: 4,
                    width: .6,
                    nutsAttacks: 0,
                    nutsCd: 4,
                    onAim: function(e, t, a, s, i) {
                        (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y),
                        this.canFire() && (this.nutsCd > 0 ? (this.resetCooldown(),
                        this.nutsCd -= 1) : 0 === this.nutsCd ? (this.cd = Math.min(5, Math.round(this.getCooldown() / 3)),
                        this.nutsAttacks = 13,
                        this.img = this.images["Nuts Squirrel"],
                        this.nutsCd = -1) : this.nutsAttacks <= 0 ? (this.resetCooldown(),
                        this.nutsCd = 4,
                        this.img = this.images.Squirrel) : (this.cd = Math.min(5, Math.round(this.getCooldown() / 3)),
                        this.nutsAttacks -= 1),
                        i.push(new dt(this.pos.x,this.pos.y,e,this.getDamage(),this.p5)))
                    }
                }
            }]]
        },
        Tt.goldfish = {
            drawLine: !1,
            follow: !1,
            width: .6,
            blook: "Goldfish",
            name: "goldfish",
            title: "Splashy Goldfish",
            desc: "Deals damage by splashing enemies around himself.",
            fullCd: 60,
            cost: 4,
            range: 1,
            damage: 2,
            target: function(e, t, a, s, i, o) {
                var n = this;
                if (this.canFire()) {
                    var r = this.visible(e, t);
                    if (0 !== r.length) {
                        this.resetCooldown();
                        for (var l = new Xe(this.pos.x,this.pos.y,t,this.p5), c = 0; c < 8; c++)
                            for (var u = 0; u < 8; u++)
                                l.addParticle(Math.PI / 4 * c);
                        a.push(l),
                        r.forEach((function(e) {
                            return e.dealDamage(n.getDamage())
                        }
                        ))
                    }
                }
            },
            upgrades: [[{
                desc: "x2 Damage",
                icon: "fas fa-fist-raised",
                iconColor: "#ff751a",
                data: {
                    title: "Goldy Goldfish",
                    cost: 2,
                    dmgMult: 2,
                    width: .65
                }
            }, {
                desc: "x1.5 Firing Rate",
                icon: "fas fa-running",
                iconColor: "#31b431",
                data: {
                    title: "Quick Goldfish",
                    cost: 2,
                    cdMult: 2 / 3,
                    width: .65
                }
            }], [{
                desc: "x1.5 Damage",
                icon: "fas fa-fist-raised",
                iconColor: "#ff751a",
                data: {
                    title: "Super Goldfish",
                    dmgMult: 1.5,
                    cost: 2
                }
            }, {
                desc: "x1.5 Range",
                icon: "fas fa-expand-alt",
                iconColor: "#4d94ff",
                data: {
                    title: "Soaker Goldfish",
                    cost: 2,
                    range: 1.5
                }
            }], [{
                desc: "Every 2 attacks, spawn a fish that follows the path and explodes on contact",
                iconBlook: "Goldfish",
                data: {
                    finalUpgrade: 0,
                    title: "School of Fish",
                    fishCd: 0,
                    cost: 4,
                    width: .65,
                    target: function(e, t, a, s, i, o, n, r) {
                        var l = this;
                        if (this.canFire()) {
                            var c = this.visible(e, t);
                            if (0 !== c.length) {
                                this.resetCooldown();
                                for (var u = new Xe(this.pos.x,this.pos.y,t,this.p5), h = 0; h < 8; h++)
                                    for (var d = 0; d < 8; d++)
                                        u.addParticle(Math.PI / 4 * h);
                                a.push(u),
                                c.forEach((function(e) {
                                    return e.dealDamage(l.getDamage())
                                }
                                )),
                                this.fishCd <= 0 ? (o.push(new Ct(r.x * t + t / 2,r.y * t + t / 2,null,2 * this.getDamage(),this.p5,Object(B.l)(n))),
                                this.fishCd = 1) : this.fishCd -= 1
                            }
                        }
                    }
                }
            }, {
                desc: "Every attack, send out an extra wave of half-strength damage",
                iconBlook: "Red Goldfish",
                data: {
                    finalUpgrade: 1,
                    title: "Hungry Fish",
                    cost: 4,
                    blook: "Red Goldfish",
                    width: .65,
                    secondAttack: !1,
                    target: function(e, t, a, s, i, o, n, r) {
                        var l = this;
                        if (this.canFire()) {
                            var c = this.visible(e, t);
                            if (0 !== c.length || this.secondAttack) {
                                for (var u = this.secondAttack ? new Ye(this.pos.x,this.pos.y,t,this.p5) : new Xe(this.pos.x,this.pos.y,t,this.p5), h = 0; h < 8; h++)
                                    for (var d = 0; d < 8; d++)
                                        u.addParticle(Math.PI / 4 * h);
                                a.push(u),
                                c.forEach((function(e) {
                                    return e.dealDamage(l.secondAttack ? l.getDamage() / 2 : l.getDamage())
                                }
                                )),
                                this.secondAttack ? (this.resetCooldown(),
                                this.secondAttack = !1) : (this.cd = 10,
                                this.secondAttack = !0)
                            }
                        }
                    }
                }
            }]]
        },
        Tt.pig = {
            drawLine: !1,
            width: .6,
            blook: "Pig",
            name: "pig",
            title: "Pig Bomber",
            desc: "Shoots a ball that explodes and deals damage.",
            fullCd: 90,
            cost: 4,
            range: 1.5,
            damage: 3,
            blastRadius: .6,
            onAim: function(e, t, a, s, i) {
                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y),
                this.canFire() && (this.resetCooldown(),
                i.push(new xt(this.pos.x,this.pos.y,e,this.getDamage(),this.p5,this.blastRadius)))
            },
            upgrades: [[{
                desc: "+2 Damage",
                icon: "fas fa-fist-raised",
                iconColor: "#ff751a",
                data: {
                    title: "Big Pig",
                    cost: 2,
                    damage: 5,
                    width: .65
                }
            }, {
                desc: "x1.5 Blast Area",
                icon: "fas fa-bullseye",
                iconColor: "#ff3333",
                data: {
                    title: "Boomer Pig",
                    cost: 2,
                    blastMult: 1.5,
                    width: .65
                }
            }], [{
                desc: "x2 Damage",
                icon: "fas fa-fist-raised",
                iconColor: "#ff751a",
                data: {
                    title: "Power Pig",
                    dmgMult: 2,
                    cost: 2
                }
            }, {
                desc: "+1 Range",
                icon: "fas fa-expand-alt",
                iconColor: "#4d94ff",
                data: {
                    title: "Perceptive Pig",
                    cost: 1,
                    range: 2.5
                }
            }], [{
                desc: "Throw a Disco Ball that forces enemies to dance for 1s",
                iconBlook: "Party Pig",
                data: {
                    finalUpgrade: 0,
                    title: "Party Pig",
                    cost: 4,
                    blook: "Party Pig",
                    onAim: function(e, t, a, s, i) {
                        (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y),
                        this.canFire() && (this.resetCooldown(),
                        i.push(new bt(this.pos.x,this.pos.y,e,this.getDamage(),this.p5,this.blastRadius)))
                    }
                }
            }, {
                desc: "After exploding, split into 5 mini exploding balls",
                iconBlook: "Pig",
                data: {
                    finalUpgrade: 1,
                    title: "Giant Pig",
                    cost: 4,
                    width: 1,
                    onAim: function(e, t, a, s, i) {
                        (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y),
                        this.canFire() && (this.resetCooldown(),
                        i.push(new vt(this.pos.x,this.pos.y,e,this.getDamage(),this.p5,this.blastRadius)))
                    }
                }
            }]]
        },
        Tt.elf = {
            drawLine: !1,
            width: .6,
            blook: "Elf",
            name: "elf",
            title: "Archer Elf",
            desc: "Fires arrows to damage enemies.",
            fullCd: 60,
            cost: 4,
            range: 2,
            damage: 2,
            onAim: function(e, t, a, s, i) {
                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y),
                this.canFire() && (this.resetCooldown(),
                i.push(new pt(this.pos.x,this.pos.y,e,this.getDamage(),this.p5,!1)))
            },
            upgrades: [[{
                desc: "x2 Damage",
                icon: "fas fa-fist-raised",
                iconColor: "#ff751a",
                data: {
                    title: "Buff Elf",
                    cost: 2,
                    dmgMult: 2
                }
            }, {
                desc: "x1.5 Firing Rate",
                icon: "fas fa-running",
                iconColor: "#31b431",
                data: {
                    title: "Stealth Elf",
                    cost: 2,
                    cdMult: 2 / 3
                }
            }], [{
                desc: "+1 Range",
                icon: "fas fa-expand-alt",
                iconColor: "#4d94ff",
                data: {
                    title: "Sharpshot Elf",
                    cost: 2,
                    range: 3
                }
            }, {
                desc: "x1.5 Firing Rate",
                icon: "fas fa-running",
                iconColor: "#31b431",
                data: {
                    title: "Prodigy Elf",
                    cost: 2,
                    cdMult: 2 / 3
                }
            }], [{
                desc: "Deal 50% Damage, but shoot 4 times as fast",
                iconBlook: "Master Elf",
                data: {
                    finalUpgrade: 0,
                    title: "Master Elf",
                    cost: 4,
                    blook: "Master Elf",
                    cdMult: 1 / 4,
                    dmgMult: .5,
                    onAim: function(e, t, a, s, i) {
                        (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y),
                        this.canFire() && (this.resetCooldown(),
                        i.push(new pt(this.pos.x,this.pos.y,e,this.getDamage(),this.p5,!0)))
                    }
                }
            }, {
                desc: "Shoot enchanted arrows that explode and deal x1.75 damage",
                iconBlook: "Enchanted Elf",
                data: {
                    finalUpgrade: 1,
                    title: "Enchanted Elf",
                    cost: 4,
                    blook: "Enchanted Elf",
                    dmgMult: 1.75,
                    onAim: function(e, t, a, s, i) {
                        (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y),
                        this.canFire() && (this.resetCooldown(),
                        i.push(new gt(this.pos.x,this.pos.y,e,this.getDamage(),this.p5)))
                    }
                }
            }]]
        },
        Tt.dragon = {
            drawLine: !1,
            width: .6,
            blook: "Dragon",
            name: "dragon",
            title: "Flame Dragon",
            desc: "Breaths damaging fire in a short-range, cone-like shape.",
            fullCd: 70,
            cost: 4,
            range: 1.4,
            damage: 3,
            onAim: function(e, t, a, s) {
                if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y),
                this.canFire()) {
                    this.resetCooldown(),
                    this.attack(e, t, a, s);
                    for (var i = new Qe(this.pos.x,this.pos.y,t,this.p5), o = 0; o < 30; o++)
                        i.addParticle(this.angle);
                    a.push(i)
                }
            },
            attack: function(e, t, a, s) {
                var i = this
                  , o = this.getDamage()
                  , n = []
                  , r = (this.range + .5) * t / Math.cos(Math.PI / 5);
                s.forEach((function(e) {
                    $({
                        x: e.pos.x,
                        y: e.pos.y
                    }, {
                        x: i.pos.x,
                        y: i.pos.y
                    }, {
                        x: i.pos.x - r * Math.sin(i.angle - Math.PI / 5),
                        y: i.pos.y + r * Math.cos(i.angle - Math.PI / 5)
                    }, {
                        x: i.pos.x - r * Math.sin(i.angle + Math.PI / 5),
                        y: i.pos.y + r * Math.cos(i.angle + Math.PI / 5)
                    }) && n.push(e)
                }
                )),
                n.forEach((function(e) {
                    return e.dealDamage(o)
                }
                ))
            },
            upgrades: [[{
                desc: "+2 Damage",
                icon: "fas fa-fist-raised",
                iconColor: "#ff751a",
                data: {
                    title: "Mighty Dragon",
                    cost: 2,
                    dmgAdd: 2
                }
            }, {
                desc: "x1.25 Firing Rate",
                icon: "fas fa-running",
                iconColor: "#31b431",
                data: {
                    title: "Swift Dragon",
                    cost: 2,
                    cdMult: .8
                }
            }], [{
                desc: "x2 Damage",
                icon: "fas fa-fist-raised",
                iconColor: "#ff751a",
                data: {
                    title: "Lethal Dragon",
                    cost: 2,
                    dmgMult: 2
                }
            }, {
                desc: "x1.25 Firing Rate",
                icon: "fas fa-running",
                iconColor: "#31b431",
                data: {
                    title: "Speed Dragon",
                    cost: 1,
                    cdMult: .8
                }
            }], [{
                desc: "+1 Range and x1.75 Damage; this will hurt",
                iconBlook: "Fire Dragon",
                data: {
                    finalUpgrade: 0,
                    title: "Fire Dragon",
                    cost: 4,
                    width: .7,
                    blook: "Fire Dragon",
                    range: 2.4,
                    dmgMult: 1.75,
                    onAim: function(e, t, a, s) {
                        if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y),
                        this.canFire()) {
                            this.resetCooldown(),
                            this.attack(e, t, a, s);
                            for (var i = new Ke(this.pos.x,this.pos.y,t,this.p5), o = 0; o < 50; o++)
                                i.addParticle(this.angle);
                            a.push(i)
                        }
                    }
                }
            }, {
                desc: "Halve the firing rate, but blow back enemies that are hit by your breath",
                iconBlook: "Wind Dragon",
                data: {
                    finalUpgrade: 1,
                    title: "Wind Dragon",
                    cost: 4,
                    width: .7,
                    cdMult: 2,
                    blook: "Wind Dragon",
                    onAim: function(e, t, a, s) {
                        if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y),
                        this.canFire()) {
                            this.resetCooldown(),
                            this.attack(e, t, a, s);
                            for (var i = new Ve(this.pos.x,this.pos.y,t,this.p5), o = 0; o < 30; o++)
                                i.addParticle(this.angle);
                            a.push(i)
                        }
                    },
                    attack: function(e, t, a, s) {
                        var i = this
                          , o = this.getDamage()
                          , n = []
                          , r = (this.range + .5) * t / Math.cos(Math.PI / 5);
                        s.forEach((function(e) {
                            $({
                                x: e.pos.x,
                                y: e.pos.y
                            }, {
                                x: i.pos.x,
                                y: i.pos.y
                            }, {
                                x: i.pos.x - r * Math.sin(i.angle - Math.PI / 5),
                                y: i.pos.y + r * Math.cos(i.angle - Math.PI / 5)
                            }, {
                                x: i.pos.x - r * Math.sin(i.angle + Math.PI / 5),
                                y: i.pos.y + r * Math.cos(i.angle + Math.PI / 5)
                            }) && n.push(e)
                        }
                        )),
                        n.forEach((function(e) {
                            e.dealDamage(o),
                            e.blowBack()
                        }
                        ))
                    }
                }
            }]]
        },
        Tt.wizard = {
            drawLine: !0,
            lineColor: "#ffcd05",
            weight: 10,
            width: .6,
            blook: "Wizard",
            name: "wizard",
            title: "Spark Wizard",
            desc: "Shoots a spark that jumps from enemy to enemy while dealing damage.",
            fullCd: 100,
            cost: 5,
            range: 1.7,
            damage: 2,
            maxTargets: 7,
            weightDec: 1,
            onAim: function(e, t, a, s) {
                if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y),
                this.canFire()) {
                    this.resetCooldown();
                    var i = e
                      , o = [i]
                      , n = this.weight;
                    for (this.p5.stroke(this.lineColor),
                    this.p5.strokeWeight(n),
                    this.p5.line(this.pos.x, this.pos.y, e.pos.x, e.pos.y),
                    i.dealDamage(this.getDamage()); o.length < this.maxTargets && 0 !== s.filter((function(e) {
                        return !o.includes(e)
                    }
                    )).length; ) {
                        var r = q(s, i.pos, o);
                        if (!r)
                            break;
                        n -= this.weightDec,
                        this.p5.strokeWeight(n);
                        var l = Object(B.m)(i.pos.x, r.pos.x)
                          , c = Object(B.m)(i.pos.y, r.pos.y);
                        this.p5.line(i.pos.x, i.pos.y, l, c),
                        this.p5.line(l, c, r.pos.x, r.pos.y),
                        r.dealDamage(this.getDamage()),
                        o.push(r),
                        i = r
                    }
                }
            },
            upgrades: [[{
                desc: "x2.5 Damage",
                icon: "fas fa-fist-raised",
                iconColor: "#ff751a",
                data: {
                    title: "Advanced Wizard",
                    cost: 2,
                    dmgMult: 2.5
                }
            }, {
                desc: "x1.5 Firing Rate",
                icon: "fas fa-running",
                iconColor: "#31b431",
                data: {
                    title: "Quickcast Wizard",
                    cost: 2,
                    cdMult: 2 / 3
                }
            }], [{
                desc: "x2 Damage",
                icon: "fas fa-fist-raised",
                iconColor: "#ff751a",
                data: {
                    title: "Elder Wizard",
                    cost: 2,
                    dmgMult: 2,
                    lineColor: "#5a459c",
                    width: .65
                }
            }, {
                desc: "x2 Max Zap Targets",
                icon: "fas fa-bolt",
                iconColor: "#5a459c",
                data: {
                    title: "Crazy Wizard",
                    cost: 2,
                    maxTargetsMult: 2,
                    lineColor: "#5a459c",
                    width: .65,
                    weightDec: .6
                }
            }], [{
                desc: "Every attack, also cast a cursed, exploding orb",
                iconBlook: "Witch",
                data: {
                    finalUpgrade: 0,
                    title: "Evil Witch",
                    cost: 4,
                    blook: "Witch",
                    lineColor: "#3a3a3a",
                    onAim: function(e, t, a, s, i) {
                        if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y),
                        this.canFire()) {
                            this.resetCooldown(),
                            i.push(new yt(this.pos.x,this.pos.y,e,this.getDamage(),this.p5));
                            var o = e
                              , n = [o]
                              , r = this.weight;
                            for (this.p5.stroke(this.lineColor),
                            this.p5.strokeWeight(r),
                            this.p5.line(this.pos.x, this.pos.y, e.pos.x, e.pos.y),
                            o.dealDamage(this.getDamage()); n.length < this.maxTargets && 0 !== s.filter((function(e) {
                                return !n.includes(e)
                            }
                            )).length; ) {
                                var l = q(s, o.pos, n);
                                if (!l)
                                    break;
                                r -= this.weightDec,
                                this.p5.strokeWeight(r);
                                var c = Object(B.m)(o.pos.x, l.pos.x)
                                  , u = Object(B.m)(o.pos.y, l.pos.y);
                                this.p5.line(o.pos.x, o.pos.y, c, u),
                                this.p5.line(c, u, l.pos.x, l.pos.y),
                                l.dealDamage(this.getDamage()),
                                n.push(l),
                                o = l
                            }
                        }
                    }
                }
            }, {
                desc: "Harness the power of lightning to double your max zap targets",
                iconBlook: "Lightning Wizard",
                data: {
                    finalUpgrade: 1,
                    title: "God of Lightning",
                    cost: 4,
                    blook: "Lightning Wizard",
                    maxTargetsMult: 2,
                    weight: 12,
                    weightDec: .4,
                    lineColor: "#1affff"
                }
            }]]
        },
        Tt.unicorn = {
            drawLine: !1,
            width: .6,
            blook: "Unicorn",
            name: "unicorn",
            title: "Rocket Unicorn",
            desc: "Fires an auto-tracking missile that explodes on contact.",
            fullCd: 90,
            cost: 5,
            range: 5,
            damage: 5,
            blastRadius: .7,
            onAim: function(e, t, a, s, i) {
                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y),
                this.canFire() && (this.resetCooldown(),
                i.push(new kt(this.pos.x,this.pos.y,e,this.getDamage(),this.p5,this.blastRadius)))
            },
            upgrades: [[{
                desc: "+2 Range",
                icon: "fas fa-expand-alt",
                iconColor: "#4d94ff",
                data: {
                    title: "Swift Unicorn",
                    cost: 1,
                    rangeAdd: 2
                }
            }, {
                desc: "x1.5 Firing Rate",
                icon: "fas fa-running",
                iconColor: "#31b431",
                data: {
                    title: "Majestic Unicorn",
                    cost: 2,
                    cdMult: 2 / 3
                }
            }], [{
                desc: "x2 Damage",
                icon: "fas fa-fist-raised",
                iconColor: "#ff751a",
                data: {
                    title: "Daring Unicorn",
                    cost: 3,
                    dmgMult: 2
                }
            }, {
                desc: "x1.5 Blast Area",
                icon: "fas fa-bullseye",
                iconColor: "#ff3333",
                data: {
                    title: "Kaboom Unicorn",
                    cost: 2,
                    blastMult: 1.5
                }
            }], [{
                desc: "Fires missiles that deal 15% of an enemy's current health as bonus damage (max 50)",
                iconBlook: "Crazy Unicorn",
                data: {
                    finalUpgrade: 0,
                    title: "Crazy Unicorn",
                    blook: "Crazy Unicorn",
                    width: .7,
                    cost: 7,
                    angle: 0,
                    onAim: function(e, t, a, s, i) {
                        this.canFire() && (this.resetCooldown(),
                        i.push(new St(this.pos.x,this.pos.y,e,this.getDamage(),this.p5,this.blastRadius)))
                    },
                    update: function(e) {
                        var t = e ? 2 : 1;
                        this.cd > 0 && (this.cd -= t),
                        this.angle <= 2 * -Math.PI ? this.angle = -Math.PI / 34 : this.angle -= Math.PI / (34 / t),
                        this.buffTime > 0 && (this.buffTime -= t,
                        this.buffTime <= 0 && (this.buffs = {}))
                    }
                }
            }, {
                desc: "Fire tracking corn cobs that explode into tracking kernals",
                iconBlook: "uni-CORN",
                data: {
                    finalUpgrade: 1,
                    title: "uni-CORN",
                    blook: "uni-CORN",
                    width: .7,
                    cost: 4,
                    onAim: function(e, t, a, s, i) {
                        (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y),
                        this.canFire() && (this.resetCooldown(),
                        i.push(new It(this.pos.x,this.pos.y,e,this.getDamage(),this.p5,this.blastRadius)))
                    }
                }
            }]]
        },
        Tt.penguin = {
            drawLine: !1,
            follow: !1,
            width: .5,
            blook: "Baby Penguin",
            name: "penguin",
            title: "Freeze Penguin",
            desc: "Occasionally freezes all enemies around himself.",
            fullCd: 110,
            freezeTime: 15,
            cost: 3,
            range: 1,
            damage: 0,
            target: function(e, t, a, s, i, o, n, r) {
                var l = this;
                if (this.canFire()) {
                    var c = this.visible(e, t);
                    if (0 !== c.length) {
                        this.resetCooldown();
                        for (var u = new et(this.pos.x,this.pos.y,t,this.p5), h = 0; h < 8; h++)
                            for (var d = 0; d < 8; d++)
                                u.addParticle(Math.PI / 4 * h);
                        a.push(u),
                        c.forEach((function(e) {
                            e.freeze(l.freezeTime),
                            e.dealDamage(l.getDamage())
                        }
                        ))
                    }
                }
            },
            upgrades: [[{
                desc: "+1 Damage",
                icon: "fas fa-fist-raised",
                iconColor: "#ff751a",
                data: {
                    title: "Icicle Penguin",
                    cost: 1,
                    damage: 1,
                    width: .55
                }
            }, {
                desc: "x1.25 Firing Rate",
                icon: "fas fa-running",
                iconColor: "#31b431",
                data: {
                    title: "Blizzard Penguin",
                    cost: 2,
                    cdMult: .8,
                    width: .55
                }
            }], [{
                desc: "+2 Damage",
                icon: "fas fa-fist-raised",
                iconColor: "#ff751a",
                data: {
                    title: "Frosty Penguin",
                    dmgAdd: 2,
                    cost: 1
                }
            }, {
                desc: "x1.5 Freeze Time",
                icon: "far fa-snowflake",
                iconColor: "#5c5c8a",
                data: {
                    title: "Sub-Zero Penguin",
                    cost: 2,
                    freezeMult: 1.5
                }
            }], [{
                desc: "No more freezing, but greatly slow all enemies within range",
                iconBlook: "Penguin",
                data: {
                    finalUpgrade: 0,
                    title: "Emperor Penguin",
                    cost: 4,
                    blook: "Penguin",
                    width: .65,
                    draw: function(e) {
                        this.p5.push(),
                        this.p5.translate(this.pos.x, this.pos.y),
                        this.p5.stroke(245, 245, 245, 100),
                        this.p5.strokeWeight(3),
                        this.p5.fill(250, 250, 250, 50);
                        var t = (this.range + .5) * e * 2;
                        this.p5.ellipse(0, 0, t, t),
                        this.p5.imageMode(this.p5.CENTER),
                        this.p5.image(this.img, 0, 0, this.width * e, this.width * e * 1.15),
                        this.p5.pop()
                    },
                    target: function(e, t, a, s, i, o, n, r) {
                        var l = this
                          , c = this.visible(e, t);
                        if (0 !== c.length) {
                            var u = this.canFire();
                            if (c.forEach((function(e) {
                                e.slow(),
                                u && e.dealDamage(l.getDamage())
                            }
                            )),
                            u) {
                                this.resetCooldown();
                                for (var h = new et(this.pos.x,this.pos.y,t,this.p5), d = 0; d < 8; d++)
                                    for (var p = 0; p < 8; p++)
                                        h.addParticle(Math.PI / 4 * d);
                                a.push(h)
                            }
                        }
                    }
                }
            }, {
                desc: "Every 5 attacks, execute an enemy (deal 150 damage)",
                iconBlook: "Arctic Fox",
                data: {
                    finalUpgrade: 1,
                    title: "Arctic Buddies",
                    cost: 4,
                    executeCd: 4,
                    width: .4,
                    follow: !0,
                    drawLine: !0,
                    draw: function(e, t) {
                        this.p5.push(),
                        this.p5.translate(this.pos.x, this.pos.y),
                        this.p5.angleMode(this.p5.RADIANS),
                        this.p5.rotate(this.angle),
                        this.p5.imageMode(this.p5.CENTER);
                        var a = this.width * e;
                        this.p5.image(t["Arctic Fox"], -.25 * e, -.25 * e, a, 1.15 * a),
                        this.p5.image(t["Polar Bear"], .25 * e, -.25 * e, a, 1.15 * a),
                        this.p5.image(t["Arctic Hare"], -.25 * e, .25 * e, a, 1.15 * a),
                        this.p5.image(t.Seal, .25 * e, .25 * e, a, 1.15 * a),
                        this.p5.pop()
                    },
                    target: function(e, t, a, s, i, o) {
                        var n = this.visible(e, t);
                        if (0 !== n.length) {
                            var r = Y(n, s, i, this.p5, t);
                            r && this.onAim(r, t, a, n, o)
                        }
                    },
                    onAim: function(e, t, a, s) {
                        var i = this;
                        if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y),
                        this.canFire()) {
                            this.resetCooldown(),
                            this.executeCd <= 0 ? (this.p5.push(),
                            this.p5.stroke("#7ca1d5"),
                            this.p5.strokeWeight(10),
                            this.p5.line(this.pos.x, this.pos.y, e.pos.x, e.pos.y),
                            this.p5.strokeWeight(1),
                            this.p5.pop(),
                            e.dealDamage(150),
                            this.executeCd = 4) : this.executeCd -= 1;
                            for (var o = new et(this.pos.x,this.pos.y,t,this.p5), n = 0; n < 8; n++)
                                for (var r = 0; r < 8; r++)
                                    o.addParticle(Math.PI / 4 * n);
                            a.push(o),
                            s.forEach((function(e) {
                                e.freeze(i.freezeTime),
                                e.dealDamage(i.getDamage())
                            }
                            ))
                        }
                    }
                }
            }]]
        },
        Tt.king = {
            drawLine: !1,
            width: .6,
            blook: "King",
            name: "king",
            title: "The King",
            desc: "Throws damaging swords at an alarmingly fast pace.",
            fullCd: 6,
            cost: 12,
            range: 2,
            damage: 1,
            onAim: function(e, t, a, s, i) {
                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y),
                this.canFire() && (this.resetCooldown(),
                i.push(new mt(this.pos.x,this.pos.y,e,this.getDamage(),this.p5,!1)))
            },
            upgrades: [[{
                desc: "x1.5 Firing Rate",
                icon: "fas fa-running",
                iconColor: "#31b431",
                data: {
                    title: "Noble King",
                    cost: 7,
                    cdMult: 2 / 3
                }
            }, {
                desc: "+1 Range",
                icon: "fas fa-expand-alt",
                iconColor: "#4d94ff",
                data: {
                    title: "Wise King",
                    cost: 2,
                    rangeAdd: 1
                }
            }], [{
                desc: "x2 Damage",
                icon: "fas fa-fist-raised",
                iconColor: "#ff751a",
                data: {
                    title: "Mighty King",
                    cost: 7,
                    dmgMult: 2,
                    width: .65
                }
            }, {
                desc: "+1 Range",
                icon: "fas fa-expand-alt",
                iconColor: "#4d94ff",
                data: {
                    title: "Great King",
                    cost: 2,
                    rangeAdd: 1,
                    width: .65
                }
            }], [{
                desc: "Shoot hearts that explode and deal damage in an area",
                iconBlook: "King of Hearts",
                data: {
                    finalUpgrade: 0,
                    title: "King of Hearts",
                    blook: "King of Hearts",
                    cost: 7,
                    width: .75,
                    onAim: function(e, t, a, s, i) {
                        (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y),
                        this.canFire() && (this.resetCooldown(),
                        i.push(new _t(this.pos.x,this.pos.y,e,this.getDamage(),this.p5,!1)))
                    }
                }
            }, {
                desc: "Throws haunted swords that deal double the damage",
                iconBlook: "Phantom King",
                data: {
                    finalUpgrade: 1,
                    title: "Phantom King",
                    blook: "Phantom King",
                    cost: 7,
                    width: .75,
                    dmgMult: 2,
                    onAim: function(e, t, a, s, i) {
                        (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y),
                        this.canFire() && (this.resetCooldown(),
                        i.push(new ft(this.pos.x,this.pos.y,e,this.getDamage(),this.p5,!1)))
                    }
                }
            }]]
        },
        Tt.jester = {
            drawLine: !1,
            width: .6,
            blook: "Jester",
            name: "jester",
            title: "Helpful Jester",
            desc: "Every 10 seconds gives nearby towers bonus buffs (+50% damage to start).",
            fullCd: 300,
            cost: 4,
            range: 2,
            damage: 0,
            damageBuff: 1.5,
            speedBuff: 1,
            target: function(e, t, a, s, i, o, n, r, l) {
                var c = this;
                if (this.canFire()) {
                    var u = this.visible(l, t).filter((function(e) {
                        return e !== c
                    }
                    ));
                    this.resetCooldown();
                    for (var h = new Le(this.pos.x,this.pos.y,t,this.p5), d = 0; d < 16; d++)
                        h.addParticle();
                    a.push(h),
                    this.angle = 2 * -Math.PI,
                    u.forEach((function(e) {
                        return e.buff({
                            damageBuff: c.damageBuff,
                            speedBuff: c.speedBuff
                        })
                    }
                    ))
                }
            },
            update: function(e) {
                var t = e ? 2 : 1;
                this.cd > 0 && (this.cd -= t),
                this.angle < 0 && (this.angle += Math.PI / (20 / t))
            },
            upgrades: [[{
                desc: "x2 Firing Rate to Buffed Towers",
                icon: "fas fa-running",
                iconColor: "#31b431",
                data: {
                    title: "Charming Jester",
                    cost: 2,
                    speedBuff: .5
                }
            }, {
                desc: "+1 Range",
                icon: "fas fa-expand-alt",
                iconColor: "#4d94ff",
                data: {
                    title: "Friendly Jester",
                    cost: 1,
                    rangeAdd: 1
                }
            }], [{
                desc: "From x1.5 to x2 Damage to Buffed Towers",
                icon: "fas fa-fist-raised",
                iconColor: "#ff751a",
                data: {
                    title: "General Jester",
                    cost: 2,
                    damageBuff: 1.75
                }
            }, {
                desc: "+1 Range",
                icon: "fas fa-expand-alt",
                iconColor: "#4d94ff",
                data: {
                    title: "Good Guy Jester",
                    cost: 1,
                    rangeAdd: 1
                }
            }], [{
                desc: "Multiply your attack speed and damage buffs by 1.5",
                iconBlook: "Mad Hatter",
                data: {
                    finalUpgrade: 0,
                    title: "Mad Hatter",
                    blook: "Mad Hatter",
                    width: .7,
                    cost: 4,
                    dmgBuffMult: 1.5,
                    speedBuffMult: 2 / 3,
                    target: function(e, t, a, s, i, o, n, r, l) {
                        var c = this;
                        if (this.canFire()) {
                            var u = this.visible(l, t).filter((function(e) {
                                return e !== c
                            }
                            ));
                            this.resetCooldown();
                            for (var h = new $e(this.pos.x,this.pos.y,t,this.p5), d = 0; d < 16; d++)
                                h.addParticle();
                            a.push(h),
                            this.angle = 2 * -Math.PI,
                            u.forEach((function(e) {
                                return e.buff({
                                    damageBuff: c.damageBuff,
                                    speedBuff: c.speedBuff
                                })
                            }
                            ))
                        }
                    }
                }
            }, {
                desc: "Decrease your size and halve your cooldown",
                iconBlook: "Jester",
                data: {
                    finalUpgrade: 1,
                    title: "Mini Jester",
                    width: .3,
                    cost: 4,
                    cdMult: .5
                }
            }]]
        };
        var Nt = Tt;
        function Rt(e, t) {
            for (var a = 0; a < t.length; a++) {
                var s = t[a];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value"in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        var Ot = function() {
            function e(t, a, s, i, o, n) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.p5 = s,
                this.images = n,
                this.lineColor = "#ffcd05",
                this.drawLine = !0,
                this.follow = !0,
                this.width = .65,
                this.img = n.Chick,
                this.weight = 5,
                this.blook = "",
                this.alive = !0,
                this.name = "tower",
                this.sound = null,
                this.title = "Tower",
                this.desc = "",
                this.level = -1,
                this.finalUpgrade = -1,
                this.angle = 0,
                this.gridPos = this.p5.createVector(t, a),
                this.pos = this.p5.createVector(t * i + i / 2, a * i + i / 2),
                this.fullCd = 60,
                this.cd = 0,
                this.cost = 0,
                this.damage = 5,
                this.range = 3,
                this.blastRadius = .55,
                this.totalCost = 0,
                this.upgrades = [],
                this.upIndexes = [],
                this.buffTime = 0,
                this.buffs = {},
                this.onCreate(),
                this.upgrade(Nt[o], -1)
            }
            var t, a, s;
            return t = e,
            (a = [{
                key: "aim",
                value: function(e, t) {
                    this.angle = Math.atan2(t - this.pos.y, e - this.pos.x) - Math.PI / 2
                }
            }, {
                key: "attack",
                value: function(e, t, a, s) {
                    e.dealDamage(this.getDamage()),
                    this.onHit(e, t, a, s)
                }
            }, {
                key: "canFire",
                value: function() {
                    return this.cd <= 0
                }
            }, {
                key: "draw",
                value: function(e) {
                    this.p5.push(),
                    this.p5.translate(this.pos.x, this.pos.y),
                    this.p5.angleMode(this.p5.RADIANS),
                    this.p5.rotate(this.angle),
                    this.p5.imageMode(this.p5.CENTER),
                    this.p5.image(this.img, 0, 0, this.width * e, this.width * e * 1.15),
                    this.p5.pop()
                }
            }, {
                key: "getDamage",
                value: function() {
                    return Math.round(this.damage * (this.buffs.damageBuff || 1))
                }
            }, {
                key: "getCooldown",
                value: function() {
                    return Math.round(this.fullCd * (this.buffs.speedBuff || 1))
                }
            }, {
                key: "getSellPrice",
                value: function() {
                    return Math.round(.8 * this.totalCost)
                }
            }, {
                key: "kill",
                value: function() {
                    this.alive = !1
                }
            }, {
                key: "isDead",
                value: function() {
                    return !this.alive
                }
            }, {
                key: "onAim",
                value: function(e, t, a, s) {
                    (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y),
                    this.canFire() && (this.resetCooldown(),
                    this.attack(e, t, a, s),
                    this.drawLine && (this.p5.push(),
                    this.p5.stroke(this.lineColor),
                    this.p5.strokeWeight(this.weight),
                    this.p5.line(this.pos.x, this.pos.y, e.pos.x, e.pos.y),
                    this.p5.strokeWeight(1),
                    this.p5.pop()))
                }
            }, {
                key: "onCreate",
                value: function() {
                    this.cd = 0
                }
            }, {
                key: "onHit",
                value: function(e, t, a, s) {}
            }, {
                key: "resetCooldown",
                value: function() {
                    this.cd = this.getCooldown()
                }
            }, {
                key: "target",
                value: function(e, t, a, s, i, o) {
                    var n = this.visible(e, t);
                    if (0 !== n.length) {
                        var r = Y(n, s, i, this.p5, t);
                        r && this.onAim(r, t, a, e, o)
                    }
                }
            }, {
                key: "update",
                value: function(e) {
                    var t = e ? 2 : 1;
                    this.cd > 0 && (this.cd -= t),
                    this.buffTime > 0 && (this.buffTime -= t,
                    this.buffTime <= 0 && (this.buffs = {}))
                }
            }, {
                key: "upgrade",
                value: function(e, t) {
                    var a = this;
                    -1 !== t && this.upIndexes.push(t);
                    var s = void 0 === e ? {} : e;
                    Object.keys(s).forEach((function(t) {
                        "blook" === t && (a.img = a.images[e.blook],
                        a.blook = e.blook),
                        "img" === t ? a.img = a.images[e.img] : "cdMult" === t ? a.fullCd = Math.floor(a.fullCd * e.cdMult) : "dmgMult" === t ? a.damage = Math.round(a.damage * e.dmgMult) : "dmgAdd" === t ? a.damage += e.dmgAdd : "rangeAdd" === t ? a.range += e.rangeAdd : "blastMult" === t ? a.blastRadius = a.blastRadius * e.blastMult : "freezeMult" === t ? a.freezeTime = Math.round(a.freezeTime * e.freezeMult) : "maxTargetsMult" === t ? a.maxTargets = Math.round(a.maxTargets * e.maxTargetsMult) : "dmgBuffMult" === t ? a.damageBuff = a.damageBuff * e.dmgBuffMult : "speedBuffMult" === t ? a.speedBuff = a.speedBuff * e.speedBuffMult : ["onHit", "draw", "onAim", "attack", "target", "update"].includes(t) ? a[t] = e[t].bind(a) : a[t] = e[t]
                    }
                    )),
                    e.cost && (this.totalCost += e.cost),
                    this.level += 1
                }
            }, {
                key: "visible",
                value: function(e, t) {
                    return X(this.pos.x, this.pos.y, this.range, e, t)
                }
            }, {
                key: "buff",
                value: function(e) {
                    "jester" !== this.name && (this.buffTime = 50,
                    this.buffs = e)
                }
            }]) && Rt(t.prototype, a),
            s && Rt(t, s),
            e
        }()
          , Mt = a("kWb9")
          , Pt = [[{
            wait: 0,
            cd: 65,
            enemies: {
                types: [1],
                count: 5
            }
        }], [{
            wait: 0,
            cd: 30,
            enemies: {
                types: [1, 2],
                count: 5
            }
        }], [{
            wait: 0,
            cd: 15,
            enemies: {
                types: [1, 2, 3],
                count: 5
            }
        }], [{
            wait: 0,
            cd: 12,
            enemies: {
                types: [1, 2, 2, 4],
                count: 5
            }
        }], [{
            wait: 0,
            cd: 6,
            enemies: {
                types: [1],
                count: 55
            }
        }], [{
            wait: 0,
            cd: 20,
            enemies: {
                types: [8],
                count: 8
            }
        }], [{
            wait: 0,
            cd: 18,
            enemies: {
                types: [2, 2, 4, 8],
                count: 6
            }
        }], [{
            wait: 0,
            cd: 18,
            enemies: {
                types: [1, 2, 4, 2, 5, 2, 9],
                count: 5
            }
        }], [{
            wait: 0,
            cd: 16,
            enemies: {
                types: [1, 2, 2, 8, 3, 3, 4, 10],
                count: 5
            }
        }], [{
            wait: 40,
            cd: 18,
            enemies: {
                types: [2, 3, 6, 2, 7, 6, 4, 15],
                count: 5
            }
        }, {
            wait: 0,
            cd: 18,
            enemies: {
                types: [60],
                count: 1
            }
        }], [{
            wait: 0,
            cd: 12,
            enemies: {
                types: [10, 10, 12],
                count: 7
            }
        }], [{
            wait: 0,
            cd: 12,
            enemies: {
                types: [15, 16, 12, 20],
                count: 6
            }
        }], [{
            wait: 0,
            cd: 12,
            enemies: {
                types: [20, 10, 15, 30],
                count: 7
            }
        }], [{
            wait: 0,
            cd: 12,
            enemies: {
                types: [10, 20, 20, 30],
                count: 6
            }
        }], [{
            wait: 0,
            cd: 10,
            enemies: {
                types: [20, 20, 10, 20, 20, 75],
                count: 4
            }
        }], [{
            wait: 0,
            cd: 10,
            enemies: {
                types: [30, 45, 25, 50],
                count: 5
            }
        }], [{
            wait: 0,
            cd: 10,
            enemies: {
                types: [45, 30, 35, 30, 65],
                count: 5
            }
        }], [{
            wait: 0,
            cd: 5,
            enemies: {
                types: [25],
                count: 35
            }
        }], [{
            wait: 0,
            cd: 6,
            enemies: {
                types: [60, 40, 55, 80],
                count: 5
            }
        }], [{
            wait: 80,
            cd: 7,
            enemies: {
                types: [20, 30, 40, 50, 60, 70],
                count: 5
            }
        }, {
            wait: 0,
            cd: 7,
            enemies: {
                types: [375],
                count: 1
            }
        }], [{
            wait: 0,
            cd: 6,
            enemies: {
                types: [70, 80, 70, 120],
                count: 5
            }
        }], [{
            wait: 0,
            cd: 6,
            enemies: {
                types: [80, 90, 100, 140],
                count: 5
            }
        }], [{
            wait: 0,
            cd: 6,
            enemies: {
                types: [70, 90, 100, 110, 150],
                count: 5
            }
        }], [{
            wait: 0,
            cd: 4,
            enemies: {
                types: [100, 60, 75, 90, 90, 65, 60, 170],
                count: 5
            }
        }], [{
            wait: 0,
            cd: 20,
            enemies: {
                types: [235],
                count: 15
            }
        }], [{
            wait: 0,
            cd: 8,
            enemies: {
                types: [120, 130, 150],
                count: 7
            }
        }], [{
            wait: 0,
            cd: 6,
            enemies: {
                types: [100, 120, 130, 120, 170],
                count: 5
            }
        }], [{
            wait: 0,
            cd: 4,
            enemies: {
                types: [120, 80, 80, 100, 120, 100, 80, 180, 200],
                count: 5
            }
        }], [{
            wait: 0,
            cd: 6,
            enemies: {
                types: [120, 80, 100, 110, 140, 170, 220],
                count: 5
            }
        }], [{
            wait: 60,
            cd: 6,
            enemies: {
                types: [200, 100, 120, 130, 150, 100],
                count: 5
            }
        }, {
            wait: 0,
            cd: 6,
            enemies: {
                types: [1700],
                count: 1
            }
        }], [{
            wait: 0,
            cd: 5,
            enemies: {
                types: [250, 200, 150, 350],
                count: 6
            }
        }], [{
            wait: 0,
            cd: 5,
            enemies: {
                types: [250, 200, 250, 350, 250, 200, 250],
                count: 5
            }
        }], [{
            wait: 0,
            cd: 5,
            enemies: {
                types: [250, 200, 300, 400],
                count: 6
            }
        }], [{
            wait: 0,
            cd: 5,
            enemies: {
                types: [350, 300, 450, 350, 350, 400],
                count: 5
            }
        }], [{
            wait: 0,
            cd: 10,
            enemies: {
                types: [800],
                count: 12
            }
        }], [{
            wait: 0,
            cd: 4,
            enemies: {
                types: [600, 500, 400, 500, 600, 400, 800],
                count: 5
            }
        }], [{
            wait: 0,
            cd: 4,
            enemies: {
                types: [700, 900, 800, 600, 600, 800, 1e3],
                count: 5
            }
        }], [{
            wait: 0,
            cd: 4,
            enemies: {
                types: [600, 700, 800, 900, 1e3, 1100, 1100],
                count: 5
            }
        }], [{
            wait: 0,
            cd: 4,
            enemies: {
                types: [1e3, 800, 900, 900, 800, 1100, 1100],
                count: 5
            }
        }], [{
            wait: 90,
            cd: 4,
            enemies: {
                types: [1200, 1100, 1e3, 900, 800],
                count: 5
            }
        }, {
            wait: 0,
            cd: 6,
            enemies: {
                types: [4200],
                count: 1
            }
        }], [{
            wait: 0,
            cd: 4,
            enemies: {
                types: [1400, 1100, 900, 1100, 1400],
                count: 5
            }
        }], [{
            wait: 0,
            cd: 4,
            enemies: {
                types: [1e3, 1200, 1400, 1600, 1e3, 800],
                count: 5
            }
        }], [{
            wait: 0,
            cd: 4,
            enemies: {
                types: [1500, 1200, 1500, 1200, 1400],
                count: 5
            }
        }], [{
            wait: 0,
            cd: 4,
            enemies: {
                types: [1500, 1800, 1e3, 1500, 1800],
                count: 5
            }
        }], [{
            wait: 0,
            cd: 4,
            enemies: {
                types: [1850],
                count: 30
            }
        }], [{
            wait: 0,
            cd: 4,
            enemies: {
                types: [2e3],
                count: 30
            }
        }], [{
            wait: 0,
            cd: 4,
            enemies: {
                types: [2200],
                count: 30
            }
        }], [{
            wait: 0,
            cd: 4,
            enemies: {
                types: [2400],
                count: 30
            }
        }], [{
            wait: 0,
            cd: 4,
            enemies: {
                types: [2600],
                count: 30
            }
        }], [{
            wait: 180,
            cd: 4,
            enemies: {
                types: [2200],
                count: 30
            }
        }, {
            wait: 0,
            cd: 4,
            enemies: {
                types: [13e3],
                count: 1
            }
        }]];
        function Bt(e) {
            return (Bt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function jt(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, s)
            }
            return a
        }
        function zt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? jt(Object(a), !0).forEach((function(t) {
                    Dt(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : jt(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        function Dt(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a,
            e
        }
        function Ht(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                    return;
                var a = []
                  , s = !0
                  , i = !1
                  , o = void 0;
                try {
                    for (var n, r = e[Symbol.iterator](); !(s = (n = r.next()).done) && (a.push(n.value),
                    !t || a.length !== t); s = !0)
                        ;
                } catch (e) {
                    i = !0,
                    o = e
                } finally {
                    try {
                        s || null == r.return || r.return()
                    } finally {
                        if (i)
                            throw o
                    }
                }
                return a
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return At(e, t);
                var a = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === a && e.constructor && (a = e.constructor.name);
                if ("Map" === a || "Set" === a)
                    return Array.from(e);
                if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                    return At(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function At(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, s = new Array(t); a < t; a++)
                s[a] = e[a];
            return s
        }
        function Ft(e, t) {
            for (var a = 0; a < t.length; a++) {
                var s = t[a];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value"in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        function Ut(e, t) {
            return (Ut = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Lt(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var a, s = Wt(e);
                if (t) {
                    var i = Wt(this).constructor;
                    a = Reflect.construct(s, arguments, i)
                } else
                    a = s.apply(this, arguments);
                return qt(this, a)
            }
        }
        function qt(e, t) {
            return !t || "object" !== Bt(t) && "function" != typeof t ? Gt(e) : t
        }
        function Gt(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Wt(e) {
            return (Wt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Qt = {
            Blue: N.a["Light Blue"],
            Black: N.a.Black,
            Green: N.a.Green,
            Lime: N.a.Lime,
            Orange: N.a.Orange,
            Pink: N.a.Pink,
            Purple: N.a.Purple,
            Red: N.a.Red,
            Snowflake: "https://res.cloudinary.com/blooket/image/upload/v1593095360/Media/defense/snowflake.svg",
            "Slime Monster": N.a["Slime Monster"],
            "Red Slime Monster": "https://res.cloudinary.com/blooket/image/upload/v1591739668/Blooks/redSlimeMonster.svg",
            "Dark Slime Monster": "https://res.cloudinary.com/blooket/image/upload/v1591840817/Blooks/darkSlimeMonster.svg",
            "Light Slime Monster": "https://res.cloudinary.com/blooket/image/upload/v1591896075/Blooks/lightSlimeMonster.svg"
        }
          , Kt = {
            BronzeTile: "https://res.cloudinary.com/blooket/image/upload/v1593095363/Media/defense/bronzeTile.svg",
            SilverTile: "https://res.cloudinary.com/blooket/image/upload/v1593095359/Media/defense/silverTile.svg",
            GoldTile: "https://res.cloudinary.com/blooket/image/upload/v1593095356/Media/defense/goldTile.svg"
        }
          , Vt = {
            Chick: N.a.Chick,
            Chicken: N.a.Chicken,
            Owl: N.a.Owl,
            Pig: N.a.Pig,
            "Agent Owl": "https://res.cloudinary.com/blooket/image/upload/v1590862499/Blooks/agentOwl.svg",
            Parrot: N.a.Parrot,
            Cockatoo: N.a.Cockatoo,
            Macaw: N.a.Macaw,
            "Party Pig": "https://res.cloudinary.com/blooket/image/upload/v1590862509/Blooks/partyPig.svg",
            Goldfish: N.a.Goldfish,
            "Red Goldfish": "https://res.cloudinary.com/blooket/image/upload/v1591019780/Blooks/redGoldfish.svg",
            Squirrel: N.a.Squirrel,
            "Nuts Squirrel": "https://res.cloudinary.com/blooket/image/upload/v1591027039/Blooks/nutsSquirrel.svg",
            Elf: N.a.Elf,
            "Master Elf": "https://res.cloudinary.com/blooket/image/upload/v1591048518/Blooks/masterElf.svg",
            "Enchanted Elf": "https://res.cloudinary.com/blooket/image/upload/v1591048522/Blooks/enchantedElf.svg",
            "Baby Penguin": N.a["Baby Penguin"],
            Penguin: N.a.Penguin,
            "Polar Bear": N.a["Polar Bear"],
            "Arctic Fox": N.a["Arctic Fox"],
            "Arctic Hare": N.a["Arctic Hare"],
            Seal: N.a.Seal,
            Dragon: N.a.Dragon,
            "Fire Dragon": "https://res.cloudinary.com/blooket/image/upload/v1591214955/Blooks/fireDragon.svg",
            "Wind Dragon": "https://res.cloudinary.com/blooket/image/upload/v1591215793/Blooks/windDragon.svg",
            Wizard: N.a.Wizard,
            Witch: N.a.Witch,
            "Lightning Wizard": "https://res.cloudinary.com/blooket/image/upload/v1591282332/Blooks/lightningWizard.svg",
            King: N.a.King,
            "Phantom King": "https://res.cloudinary.com/blooket/image/upload/v1591301898/Blooks/phantomKing.svg",
            "King of Hearts": N.a["King of Hearts"],
            Unicorn: N.a.Unicorn,
            "Crazy Unicorn": "https://res.cloudinary.com/blooket/image/upload/v1591381159/Blooks/crazyUnicorn.svg",
            "uni-CORN": "https://res.cloudinary.com/blooket/image/upload/v1591365760/Blooks/uni-CORN.svg",
            Jester: N.a.Jester,
            "Mad Hatter": N.a["Mad Hatter"]
        }
          , Xt = {
            Egg: "https://res.cloudinary.com/blooket/image/upload/v1593095354/Media/defense/egg.svg",
            PigBomb: "https://res.cloudinary.com/blooket/image/upload/v1593095358/Media/defense/pigBomb.svg",
            DiscoBall: "https://res.cloudinary.com/blooket/image/upload/v1593095364/Media/defense/discoBall.svg",
            Fish: "https://res.cloudinary.com/blooket/image/upload/v1593095356/Media/defense/fish.svg",
            Nut: "https://res.cloudinary.com/blooket/image/upload/v1593095356/Media/defense/nut.svg",
            Arrow: "https://res.cloudinary.com/blooket/image/upload/v1593095361/Media/defense/arrow.svg",
            MasterArrow: "https://res.cloudinary.com/blooket/image/upload/v1593095354/Media/defense/masterArrow.svg",
            EnchantedArrow: "https://res.cloudinary.com/blooket/image/upload/v1593095354/Media/defense/enchantedArrow.svg",
            WitchOrb: "https://res.cloudinary.com/blooket/image/upload/v1593095361/Media/defense/witchOrb.svg",
            Sword: "https://res.cloudinary.com/blooket/image/upload/v1593095361/Media/defense/sword.svg",
            PhantomSword: "https://res.cloudinary.com/blooket/image/upload/v1593095358/Media/defense/phantomSword.svg",
            Heart: "https://res.cloudinary.com/blooket/image/upload/v1593095354/Media/defense/heart.svg",
            Missile: "https://res.cloudinary.com/blooket/image/upload/v1593095354/Media/defense/missile.svg",
            BigMissile: "https://res.cloudinary.com/blooket/image/upload/v1593095361/Media/defense/bigMissile.svg",
            Corn: "https://res.cloudinary.com/blooket/image/upload/v1593095363/Media/defense/corn.svg",
            CornKernel: "https://res.cloudinary.com/blooket/image/upload/v1593095364/Media/defense/cornKernel.svg"
        }
          , Yt = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Ut(e, t)
            }(n, e);
            var t, a, s, o = Lt(n);
            function n(e) {
                var t;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (t = o.call(this, e)).state = {
                    ready: !1,
                    towerSelected: {},
                    health: 10000000,
                    round: 1,
                    tokens: 10000000,
                    buyTowerName: "",
                    buyTower: {},
                    roundGoing: !0,
                    paused: !1,
                    phase: "tower",
                    question: {},
                    correct: !1,
                    roundCompleted: !1,
                    showShop: !1,
                    isSmall: !1,
                    askTour: !1,
                    showTour: !1,
                    hwGoal: 0,
                    goalCompleted: !1,
                    doubleSpeed: !1
                },
                t.p5 = {},
                t.canvasParentRef = {},
                t.bgImage = null,
                t.tiles = [],
                t.tileSize = 24,
                t.enemies = [],
                t.futureEnemies = [],
                t.waves = [],
                t.spawnCd = 0,
                t.waveCd = 0,
                t.waitingOnWave = !1,
                t.ticksUntilSpawn = 0,
                t.ticksUntilWave = 0,
                t.lastSpawnIndex = 0,
                t.walkMap = [],
                t.paths = [],
                t.backPaths = [],
                t.dists = [],
                t.towers = [],
                t.numRows = 0,
                t.numColumns = 0,
                t.spawnpoints = [],
                t.exit = {},
                t.map = {},
                t.enemyImages = {},
                t.tileImages = {},
                t.towerImages = {},
                t.projectileImages = {},
                t.particleSystems = [],
                t.projectiles = [],
                t.questions = [],
                t.freeQuestions = [],
                t.corrects = e.defense ? JSON.parse(JSON.stringify(e.defense.corrects)) : {},
                t.incorrects = e.defense ? JSON.parse(JSON.stringify(e.defense.incorrects)) : {},
                t.questionResults = [],
                t.here = !0,
                t.waiting = !1,
                t.canGoNext = !1,
                t.roundGoing = !1,
                t.gameOver = !1,
                t.paused = !1,
                t.tourRef = i.a.createRef(),
                t.onAnswer = t.onAnswer.bind(Gt(t)),
                t.getWalkMap = t.getWalkMap.bind(Gt(t)),
                t.getTower = t.getTower.bind(Gt(t)),
                t.getQuestion = t.getQuestion.bind(Gt(t)),
                t.setup = t.setup.bind(Gt(t)),
                t.preload = t.preload.bind(Gt(t)),
                t.draw = t.draw.bind(Gt(t)),
                t.mouseClicked = t.mouseClicked.bind(Gt(t)),
                t.answerTour = t.answerTour.bind(Gt(t)),
                t.answerNext = t.answerNext.bind(Gt(t)),
                t.resizeFit = t.resizeFit.bind(Gt(t)),
                t.recalculate = t.recalculate.bind(Gt(t)),
                t.walkable = t.walkable.bind(Gt(t)),
                t.outsideMap = t.outsideMap.bind(Gt(t)),
                t.resetGame = t.resetGame.bind(Gt(t)),
                t.showRange = t.showRange.bind(Gt(t)),
                t.buyTower = t.buyTower.bind(Gt(t)),
                t.nextRound = t.nextRound.bind(Gt(t)),
                t.nextWave = t.nextWave.bind(Gt(t)),
                t.sellTower = t.sellTower.bind(Gt(t)),
                t.upgradeTower = t.upgradeTower.bind(Gt(t)),
                t.endNow = t.endNow.bind(Gt(t)),
                t
            }
            return t = n,
            (a = [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    this.props.defense && "defense" === this.props.defense.stage && this.props.defense.questions && this.props.defense.questions[0] && (Object(B.a)(),
                    this.startTimeout = setTimeout((function() {
                        e.questions = e.props.defense.questions,
                        e.setState({
                            ready: !0,
                            roundCompleted: 1 !== e.props.defense.round,
                            roundGoing: 1 === e.props.defense.round,
                            askTour: 1 === e.props.defense.round,
                            hwGoal: 1 === e.props.defense.round && e.props.defense.hwGoal ? parseInt(e.props.defense.hwGoal, 10) : 0,
                            isSmall: window.innerWidth <= 800,
                            health: e.props.defense.health,
                            round: e.props.defense.round,
                            tokens: e.props.defense.tokens
                        })
                    }
                    ), 1e3),
                    window.onfocus = function() {
                        e.paused = !1
                    }
                    ,
                    window.onblur = function() {
                        e.paused = !0
                    }
                    )
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    Object(B.p)(),
                    clearTimeout(this.startTimeout),
                    clearTimeout(this.waitTimeout),
                    clearTimeout(this.nextTimeout),
                    clearTimeout(this.endTimeout),
                    clearTimeout(this.gameOverTimeout),
                    this.here = !1,
                    window.onfocus = function() {}
                    ,
                    window.onblur = function() {}
                }
            }, {
                key: "onAnswer",
                value: function(e) {
                    var t = this;
                    if (!this.waiting) {
                        this.waiting = !0;
                        var a = this.state.question.correctAnswers.includes(e)
                          , s = this.state.question.number;
                        a ? this.corrects[s] ? this.corrects[s] += 1 : this.corrects[s] = 1 : this.incorrects[s] ? this.incorrects[s] += 1 : this.incorrects[s] = 1,
                        this.canGoNext = !1,
                        this.setState({
                            correct: a,
                            phase: "feedback"
                        }, (function() {
                            t.state.correct ? t.canGoNext = !0 : t.nextTimeout = setTimeout((function() {
                                t.canGoNext = !0
                            }
                            ), 3e3)
                        }
                        ))
                    }
                }
            }, {
                key: "getWalkMap",
                value: function() {
                    for (var e = [], t = 0; t < this.numRows; t++) {
                        e[t] = [];
                        for (var a = 0; a < this.numColumns; a++)
                            e[t][a] = this.walkable(a, t)
                    }
                    return e
                }
            }, {
                key: "getTower",
                value: function(e, t) {
                    for (var a = 0; a < this.towers.length; a++) {
                        var s = this.towers[a];
                        if (s.gridPos.x === e && s.gridPos.y === t)
                            return s
                    }
                    return null
                }
            }, {
                key: "getQuestion",
                value: function() {
                    var e = this;
                    if (this.here) {
                        0 === this.freeQuestions.length && (this.freeQuestions = JSON.parse(JSON.stringify(this.questions)));
                        var t = Object(B.l)(this.freeQuestions);
                        this.freeQuestions.splice(this.freeQuestions.indexOf(t), 1),
                        t.random && (t.answers = Object(B.s)(t.answers)),
                        this.setState({
                            question: t,
                            roundCompleted: !1,
                            phase: "question"
                        }, (function() {
                            e.waiting = !0,
                            e.waitTimeout = setTimeout((function() {
                                e.waiting = !1
                            }
                            ), 400)
                        }
                        ))
                    }
                }
            }, {
                key: "setup",
                value: function(e, t) {
                    this.p5 = e,
                    this.canvasParentRef = t,
                    this.canvasParentRef.className = k.a.sketchHolder;
                    var a = e.createCanvas(t.offsetWidth, t.offsetHeight);
                    a.canvas.className = k.a.sketchCanvas,
                    a.parent(t),
                    this.p5.frameRate(30),
                    this.resetGame()
                }
            }, {
                key: "preload",
                value: function(e) {
                    var t = this;
                    Object.entries(Qt).forEach((function(a) {
                        var s = Ht(a, 2)
                          , i = s[0]
                          , o = s[1];
                        t.enemyImages[i] = e.loadImage(o)
                    }
                    )),
                    Object.entries(Kt).forEach((function(a) {
                        var s = Ht(a, 2)
                          , i = s[0]
                          , o = s[1];
                        t.tileImages[i] = e.loadImage(o)
                    }
                    )),
                    Object.entries(Xt).forEach((function(a) {
                        var s = Ht(a, 2)
                          , i = s[0]
                          , o = s[1];
                        t.projectileImages[i] = e.loadImage(o)
                    }
                    )),
                    Object.entries(Vt).forEach((function(a) {
                        var s = Ht(a, 2)
                          , i = s[0]
                          , o = s[1];
                        t.towerImages[i] = e.loadImage(o)
                    }
                    )),
                    this.bgImage = e.loadImage(Mt.a[this.props.defense.map].img)
                }
            }, {
                key: "draw",
                value: function(e) {
                    var t = this;
                    if (!this.paused) {
                        if (e.imageMode(this.p5.CORNER),
                        e.background(this.bgImage),
                        this.tiles.forEach((function(a, s) {
                            a.forEach((function(a, i) {
                                if (3 === a) {
                                    var o = t.getTower(i, s);
                                    o && o.level > 0 && (1 === o.level ? t.p5.image(t.tileImages.BronzeTile, i * t.tileSize, s * t.tileSize, t.tileSize, t.tileSize) : 2 === o.level ? t.p5.image(t.tileImages.SilverTile, i * t.tileSize, s * t.tileSize, t.tileSize, t.tileSize) : 3 === o.level && t.p5.image(t.tileImages.GoldTile, i * t.tileSize, s * t.tileSize, t.tileSize, t.tileSize))
                                }
                                e.stroke("#3a3a3a33"),
                                e.noFill(),
                                e.strokeWeight(2),
                                e.rect(i * t.tileSize, s * t.tileSize, t.tileSize, t.tileSize)
                            }
                            ))
                        }
                        )),
                        !this.state.paused && this.roundGoing && (this.ticksUntilSpawn > 0 && (this.ticksUntilSpawn -= this.state.doubleSpeed ? 2 : 1),
                        this.ticksUntilWave > 0 && (this.ticksUntilWave -= this.state.doubleSpeed ? 2 : 1)),
                        this.futureEnemies.length > 0 && this.ticksUntilSpawn <= 0) {
                            var a = this.futureEnemies.shift()
                              , s = this.lastSpawnIndex + 1 >= this.spawnpoints.length ? 0 : this.lastSpawnIndex + 1
                              , i = this.spawnpoints[s];
                            this.enemies.push(new te(i.x,i.y,e,this.tileSize,this.enemyImages,a)),
                            this.ticksUntilSpawn = this.spawnCd
                        }
                        for (var o = this.enemies.length - 1; o >= 0; o--) {
                            var n = this.enemies[o];
                            !this.state.paused && this.roundGoing && (n.steer(this.tileSize, this.numColumns, this.numRows, this.paths, this.exit),
                            n.update(this.tileSize, this.state.doubleSpeed)),
                            this.outsideMap(n) && n.kill(),
                            !this.state.paused && K(n.pos.x, n.pos.y, this.exit.x, this.exit.y, this.tileSize, this.p5) && (this.setState({
                                health: Math.max(this.state.health - n.health, 0)
                            }, (function() {
                                0 === t.state.health && (t.gameOver = !0,
                                t.setState({
                                    gameOver: !0
                                }, (function() {
                                    t.gameOverTimeout = setTimeout((function() {
                                        t.props.setDefense(zt(zt({}, t.props.defense), {}, {
                                            corrects: t.corrects,
                                            incorrects: t.incorrects,
                                            towers: t.towers.map((function(e) {
                                                return {
                                                    name: e.name,
                                                    upIndexes: e.upIndexes,
                                                    col: e.gridPos.x,
                                                    row: e.gridPos.y
                                                }
                                            }
                                            )),
                                            health: 0,
                                            round: t.state.round,
                                            tokens: t.state.tokens,
                                            stage: "final"
                                        })),
                                        t.props.history.push("/defense/final")
                                    }
                                    ), 5e3)
                                }
                                )))
                            }
                            )),
                            n.kill()),
                            n.isDead() ? this.enemies.splice(o, 1) : n.draw(this.tileSize)
                        }
                        this.state.towerSelected.range && this.showRange(this.state.towerSelected);
                        for (var r = this.towers.length - 1; r >= 0; r--) {
                            var l = this.towers[r];
                            this.state.paused || (this.roundGoing && l.target(this.enemies, this.tileSize, this.particleSystems, this.dists, this.paths, this.projectiles, this.backPaths, this.exit, this.towers),
                            l.update(this.state.doubleSpeed)),
                            this.outsideMap(l) && l.kill(),
                            l.isDead() ? this.towers.splice(r, 1) : l.draw(this.tileSize, this.towerImages)
                        }
                        for (var c = this.particleSystems.length - 1; c >= 0; c--) {
                            var u = this.particleSystems[c];
                            this.state.paused || u.run(this.state.doubleSpeed),
                            u.isDead() && this.particleSystems.splice(c, 1)
                        }
                        for (var h = this.projectiles.length - 1; h >= 0; h--) {
                            var d = this.projectiles[h];
                            this.state.paused || d.update(this.tileSize, this.state.doubleSpeed, this.enemies, this.dists, this.paths),
                            d.reachedTarget(this.tileSize, this.enemies) && d.onHit(this.enemies, this.tileSize, this.particleSystems, this.projectiles, this.dists, this.paths),
                            this.outsideMap(d) && d.kill(),
                            d.draw(this.tileSize, this.projectileImages),
                            d.isDead() && this.projectiles.splice(h, 1)
                        }
                        var p = J(this.p5.mouseX, this.p5.mouseY, this.numColumns, this.numRows, this.tileSize);
                        if (p) {
                            var m = H(this.p5.mouseX, this.p5.mouseY, this.p5, this.tileSize);
                            3 === this.tiles[m.y][m.x] ? this.p5.cursor("pointer") : this.p5.cursor("auto")
                        }
                        if (p && this.state.buyTowerName) {
                            this.p5.cursor("pointer");
                            var f = H(this.p5.mouseX, this.p5.mouseY, this.p5, this.tileSize)
                              , _ = Q(f.x, f.y, this.tileSize, this.p5)
                              , g = this.state.buyTower.gridPos && this.state.buyTower.gridPos.x === f.x && this.state.buyTower.gridPos.y === f.y ? this.state.buyTower : new Ot(f.x,f.y,this.p5,this.tileSize,this.state.buyTowerName,this.towerImages);
                            if (this.setState({
                                buyTower: g
                            }),
                            this.showRange(g),
                            0 !== this.tiles[f.y][f.x]) {
                                this.p5.push(),
                                this.p5.translate(_.x, _.y),
                                this.p5.rotate(Math.PI / 4),
                                this.p5.noStroke(),
                                this.p5.fill(207, 0, 15);
                                var y = .1 * this.tileSize
                                  , x = .9 * this.tileSize / 2;
                                this.p5.rect(-y, x, 2 * y, 2 * -x),
                                this.p5.rotate(Math.PI / 2),
                                this.p5.rect(-y, x, 2 * y, 2 * -x),
                                this.p5.pop()
                            } else
                                g.draw(this.tileSize)
                        }
                        this.waitingOnWave && this.ticksUntilWave <= 0 && (this.ticksUntilWave = 0,
                        this.nextWave()),
                        0 === this.futureEnemies.length && !this.waitingOnWave && this.roundGoing && (this.ticksUntilWave = this.waveCd,
                        this.waitingOnWave = !0)
                    }
                }
            }, {
                key: "mouseClicked",
                value: function(e) {
                    if (J(e.mouseX, e.mouseY, this.numColumns, this.numRows, this.tileSize) && !(this.state.isSmall && this.state.towerSelected && this.state.towerSelected.title)) {
                        var t = H(e.mouseX, e.mouseY, this.p5, this.tileSize)
                          , a = this.getTower(t.x, t.y);
                        a && "tower" === this.state.phase ? this.state.towerSelected === a ? this.setState({
                            towerSelected: {}
                        }) : this.setState({
                            towerSelected: a
                        }) : this.setState({
                            towerSelected: {}
                        }),
                        this.state.buyTowerName && this.buyTower()
                    }
                }
            }, {
                key: "answerTour",
                value: function(e) {
                    this.here && (e ? this.setState({
                        askTour: !1,
                        showTour: !0,
                        roundGoing: !0
                    }) : this.setState({
                        askTour: !1,
                        showTour: !1,
                        roundCompleted: !0,
                        roundGoing: !1
                    }))
                }
            }, {
                key: "answerNext",
                value: function() {
                    clearTimeout(this.nextTimeout),
                    this.questionResults.push(this.state.correct);
                    var e = 0;
                    this.state.correct && (e += 1),
                    this.questionResults.length >= 3 ? (this.questionResults.filter((function(e) {
                        return e
                    }
                    )).length >= 3 && (e += Math.floor(this.state.round / 10) + 1),
                    1 === this.state.round && this.state.tokens + e < 2 && (e = 2 - this.state.tokens),
                    this.setState({
                        phase: "tower"
                    })) : this.getQuestion(),
                    this.setState({
                        tokens: this.state.tokens + e
                    })
                }
            }, {
                key: "resizeFit",
                value: function() {
                    var e = Math.floor(this.canvasParentRef.offsetWidth / this.numColumns)
                      , t = Math.floor(this.canvasParentRef.offsetHeight / this.numRows);
                    this.tileSize = Math.min(e, t),
                    this.p5.resizeCanvas(this.numColumns * this.tileSize, this.numRows * this.tileSize, !0)
                }
            }, {
                key: "recalculate",
                value: function() {
                    var e = this;
                    this.walkMap = this.getWalkMap();
                    var t = []
                      , a = "".concat(this.exit.x, ",").concat(this.exit.y);
                    t.push(a);
                    var s = {}
                      , i = {};
                    for (s[a] = null,
                    i[a] = 0; 0 !== t.length; )
                        for (var o = t.shift(), n = F(o, this.p5), r = L(this.walkMap, n.x, n.y, !0), l = 0; l < r.length; l++) {
                            var c = r[l];
                            c in s && c in i || (t.push(c),
                            s[c] = o,
                            i[c] = i[o] + 1)
                        }
                    this.dists = G(this.numRows, this.numColumns, null);
                    for (var u = G(this.numRows, this.numColumns, 0), h = Object.keys(s), d = 0; d < h.length; d++) {
                        var p = h[d]
                          , m = F(p, this.p5);
                        this.dists[m.y][m.x] = i[p];
                        var f = s[p];
                        if (null !== f) {
                            var _ = F(f, this.p5).sub(m);
                            _.x < 0 && (u[m.y][m.x] = 1),
                            _.y < 0 && (u[m.y][m.x] = 2),
                            _.x > 0 && (u[m.y][m.x] = 3),
                            _.y > 0 && (u[m.y][m.x] = 4)
                        }
                    }
                    var g = [];
                    this.spawnpoints.forEach((function(t) {
                        for (var a = G(e.numRows, e.numColumns, 0), s = {
                            x: t.x,
                            y: t.y
                        }, i = u[s.y][s.x]; i; )
                            1 === i ? (s.x -= 1,
                            i = 3) : 2 === i ? (s.y -= 1,
                            i = 4) : 3 === i ? (s.x += 1,
                            i = 1) : 4 === i && (s.y += 1,
                            i = 2),
                            a[s.y][s.x] = i,
                            i = u[s.y][s.x];
                        g.push(a)
                    }
                    )),
                    this.backPaths = g,
                    this.paths = u
                }
            }, {
                key: "walkable",
                value: function(e, t) {
                    return [1, 4, 5].includes(this.tiles[t][e])
                }
            }, {
                key: "outsideMap",
                value: function(e) {
                    return A(e.pos.x, e.pos.y, 0, 0, this.numColumns * this.tileSize, this.numRows * this.tileSize)
                }
            }, {
                key: "resetGame",
                value: function() {
                    var e = this;
                    this.map = Mt.a[this.props.defense.map],
                    this.numRows = this.map.tiles.length,
                    this.numColumns = this.map.tiles[0].length,
                    this.tiles = G(this.numRows, this.numColumns),
                    this.map.tiles.forEach((function(t, a) {
                        t.forEach((function(t, s) {
                            e.tiles[a][s] = t,
                            4 === t ? e.spawnpoints.push({
                                x: s,
                                y: a
                            }) : 5 === t && (e.exit = {
                                x: s,
                                y: a
                            })
                        }
                        ))
                    }
                    )),
                    this.resizeFit(),
                    this.recalculate(),
                    this.props.defense.towers.forEach((function(t) {
                        var a = new Ot(t.col,t.row,e.p5,e.tileSize,t.name,e.towerImages);
                        e.tiles[t.row][t.col] = 3,
                        t.upIndexes.forEach((function(e, t) {
                            a.upgrade(a.upgrades[t][e].data, e)
                        }
                        )),
                        e.towers.push(a)
                    }
                    ))
                }
            }, {
                key: "showRange",
                value: function(e) {
                    if (!this.outsideMap(e)) {
                        this.p5.push(),
                        this.p5.stroke("#3a3a3a77"),
                        this.p5.strokeWeight(3),
                        this.p5.fill(128, 128, 128, 63);
                        var t = (e.range + .5) * this.tileSize * 2;
                        this.p5.ellipse(e.pos.x, e.pos.y, t, t),
                        this.p5.pop()
                    }
                }
            }, {
                key: "buyTower",
                value: function(e) {
                    if (this.state.buyTower && this.state.buyTower.gridPos && !this.outsideMap(this.state.buyTower) && (!this.state.isSmall || e)) {
                        var t = this.state.buyTower.cost && this.state.tokens >= this.state.buyTower.cost
                          , a = this.state.buyTower.gridPos && 0 === this.tiles[this.state.buyTower.gridPos.y][this.state.buyTower.gridPos.x];
                        t && a && (this.towers.push(this.state.buyTower),
                        this.state.buyTower.fullCd > 100 && (this.towers[this.towers.length - 1].fullCd += this.towers.filter((function(e) {
                            return e.fullCd > 1000
                        }
                        )).length - 1),
                        this.tiles[this.state.buyTower.gridPos.y][this.state.buyTower.gridPos.x] = 3,
                        this.setState({
                            towerSelected: this.state.showTour && this.state.isSmall ? {} : this.state.buyTower,
                            tokens: this.state.tokens - this.state.buyTower.cost
                        }),
                        this.state.showTour && this.tourRef.current.setStep(7)),
                        this.setState({
                            buyTowerName: "",
                            buyTower: {},
                            showShop: !1
                        })
                    }
                }
            }, {
                key: "nextRound",
                value: function() {
                    this.roundGoing || (this.state.round <= Pt.length ? this.waves = JSON.parse(JSON.stringify(Pt[this.state.round - 1])) : this.waves = [{
                        wait: 180,
                        cd: 5,
                        enemies: {
                            types: [2300 + 220 * (this.state.round - 50)],
                            count: this.state.round - 50 + 40
                        }
                    }, {
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [11e3 + 350 * (this.state.round - 50)],
                            count: 1
                        }
                    }],
                    this.setState({
                        roundGoing: !0
                    }),
                    this.roundGoing = !0,
                    this.waitingOnWave = !1,
                    this.nextWave())
                }
            }, {
                key: "nextWave",
                value: function() {
                    var e = this;
                    if (!this.gameOver)
                        if (0 !== this.waves.length) {
                            this.futureEnemies = [];
                            var t = this.waves.shift();
                            this.waveCd = t.wait,
                            this.spawnCd = t.cd;
                            for (var a = 0; a < t.enemies.count; a++)
                                t.enemies.types.forEach((function(t) {
                                    e.futureEnemies.push(t)
                                }
                                ))
                        } else
                            0 === this.enemies.length && (this.waitingOnWave = !1,
                            this.roundGoing = !1,
                            this.endTimeout = setTimeout((function() {
                                e.questionResults = [];
                                var t = e.state.round + 1;
                                e.setState({
                                    roundGoing: !1,
                                    roundCompleted: !0,
                                    goalCompleted: !!e.props.defense.hwGoal && parseInt(e.props.defense.hwGoal, 10) === e.state.round,
                                    round: t
                                }),
                                e.props.defense.defenseId && (x.a.defaults.headers.common.Authorization = localStorage.getItem("token"),
                                x.a.put("/api/defenses/save", {
                                    id: e.props.defense.defenseId,
                                    corrects: e.corrects,
                                    incorrects: e.incorrects,
                                    round: t,
                                    health: e.state.health,
                                    tokens: e.state.tokens,
                                    towers: e.towers.map((function(e) {
                                        return {
                                            name: e.name,
                                            upIndexes: e.upIndexes,
                                            col: e.gridPos.x,
                                            row: e.gridPos.y
                                        }
                                    }
                                    ))
                                }).catch((function(t) {
                                    console.error(t),
                                    e.props.history.push("/login")
                                }
                                ))),
                                e.props.defense.resultId && x.a.put("/api/results", {
                                    id: e.props.defense.resultId,
                                    data: {
                                        corrects: e.corrects,
                                        incorrects: e.incorrects,
                                        round: t,
                                        alive: !0
                                    }
                                }).catch((function(e) {
                                    console.error(e)
                                }
                                ))
                            }
                            ), 2500))
                }
            }, {
                key: "sellTower",
                value: function() {
                    var e = this.towers.indexOf(this.state.towerSelected);
                    -1 !== e ? (this.tiles[this.state.towerSelected.gridPos.y][this.state.towerSelected.gridPos.x] = 0,
                    this.towers.splice(e, 1),
                    this.setState({
                        tokens: this.state.tokens + this.state.towerSelected.getSellPrice(),
                        towerSelected: {}
                    })) : this.setState({
                        towerSelected: {}
                    })
                }
            }, {
                key: "upgradeTower",
                value: function(e, t) {
                    var a = this.state.tokens - e.data.cost;
                    a < 0 || (this.state.towerSelected.upgrade(e.data, t),
                    this.setState({
                        tokens: a
                    }))
                }
            }, {
                key: "endNow",
                value: function() {
                    this.here && (this.props.setDefense(zt(zt({}, this.props.defense), {}, {
                        corrects: this.corrects,
                        incorrects: this.incorrects,
                        towers: this.towers.map((function(e) {
                            return {
                                name: e.name,
                                upIndexes: e.upIndexes,
                                col: e.gridPos.x,
                                row: e.gridPos.y
                            }
                        }
                        )),
                        health: 0,
                        round: this.state.round,
                        tokens: this.state.tokens,
                        stage: "final"
                    })),
                    this.props.history.push("/defense/final"))
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this;
                    if (this.props.defense && this.props.defense.hwId)
                        this.redirect = !1;
                    else if (localStorage.getItem("token")) {
                        var a = localStorage.getItem("token").split(" ");
                        2 === a.length ? p.a.verify(a[1], v.a.secret, (function(e) {
                            t.redirect = !!e
                        }
                        )) : this.redirect = !0
                    } else
                        this.redirect = !0;
                    return !this.redirect && this.props.defense && "defense" === this.props.defense.stage && this.props.defense.questions && this.props.defense.questions[0] ? i.a.createElement("div", {
                        className: h.isMobile ? E.a.mBody : E.a.body,
                        id: "body"
                    }, i.a.createElement(w.a, {
                        title: "Play Tower Defense | Blooket",
                        desc: "Answer questions to build and upgrade towers that will defend against oncoming waves of Evil Blooks."
                    }), i.a.createElement(I.a, {
                        coins: this.state.tokens
                    }), this.state.ready ? i.a.createElement("div", {
                        className: g()(E.a.regularBody, k.a.bodyContainer),
                        id: "regularBody"
                    }, this.state.showTour ? i.a.createElement(P.a, {
                        steps: (e = this.state.isSmall,
                        [{
                            elementId: e ? "mBottom" : "health",
                            text: "In Tower Defense, your goal is to defend against waves of Evil Blooks. That means you have to keep this health above 0!",
                            nextButtonText: "Next",
                            backgroundColor: "#fff",
                            className: D.a.health
                        }, {
                            text: "To defend against these waves, you'll need to buy and upgrade Towers! It will take Upgrade Tokens to do this.",
                            nextButtonText: "Next",
                            className: D.a.centered
                        }, {
                            text: "Before each round of enemies, you'll answer three questions. You get 1 Upgrade Token for each correct answer, and a bonus token for getting all 3 correct!",
                            nextButtonText: "Next",
                            className: D.a.centered,
                            functionIndex: 0
                        }, {
                            elementId: e ? "header" : "coinsText",
                            text: "We'll answer those for you right now, and because we got all 3 correct, you can see 4 Upgrade Tokens in the top right!",
                            nextButtonText: "Next",
                            backgroundColor: e ? null : "#9a49aa",
                            className: D.a.topRight
                        }, {
                            text: "Evil Blooks will spawn at the arrow on the map and follow the path towards the 'X'! Towers will attack them to prevent this.",
                            nextButtonText: "Next",
                            className: D.a.centered
                        }, {
                            text: e ? "Now try buying a Tower! Just tap the 'Open Shop' button, choose a Blook, tap to place it on the map, and then tap 'Confirm Buy'! The price of each Tower is shown in the blue box." : "Now try buying a Tower! Just click a Blook to the right and then place it on the map. The price of each Tower is shown in the blue box.",
                            nextButtonText: "Got It!",
                            className: D.a.shop
                        }, {
                            functionIndex: 1
                        }, {
                            elementId: "stats",
                            text: "Great work! You can now click on the tower to see its stats and buy upgrades. Each Blook has 3 stages, you can pick one upgrade per stage and the final upgrade is the most powerful!",
                            nextButtonText: "Next",
                            className: D.a.stats
                        }, {
                            elementId: e ? "mNextRound" : "nextRound",
                            text: "Make sure you upgrade your Towers and buy new ones. Now you're on your own! Click the 'Next Round' button to begin!",
                            elementClick: !0,
                            className: D.a.nextRound
                        }]),
                        onExit: function() {
                            return t.setState({
                                showTour: !1
                            })
                        },
                        functions: [function() {
                            return t.setState({
                                tokens: 1000000
                            })
                        }
                        , function() {
                            return t.setState({
                                roundGoing: !1,
                                buyTowerName: "",
                                buyTower: {}
                            })
                        }
                        ],
                        ref: this.tourRef
                    }) : null, i.a.createElement("div", {
                        className: k.a.mTopContainer
                    }, i.a.createElement("div", {
                        className: k.a.mRoundText
                    }, "Round ".concat(this.state.round)), this.state.buyTowerName || !this.state.roundGoing ? i.a.createElement("div", {
                        className: k.a.mMainButton,
                        role: "button",
                        tabIndex: 0,
                        onClick: this.state.buyTowerName ? function() {
                            return t.setState({
                                buyTowerName: "",
                                buyTower: {}
                            })
                        }
                        : this.nextRound,
                        style: {
                            backgroundColor: this.state.buyTowerName ? "#c43a35" : "#0bc2cf"
                        },
                        id: "mNextRound"
                    }, i.a.createElement("i", {
                        className: this.state.buyTowerName ? "fas fa-times" : "fas fa-play",
                        style: {
                            marginRight: 10,
                            fontSize: 20
                        }
                    }), this.state.buyTowerName ? "Cancel Buy" : "Next Round") : this.state.roundGoing ? i.a.createElement("div", {
                        className: k.a.mMainButton,
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return t.setState({
                                doubleSpeed: !t.state.doubleSpeed
                            })
                        }
                    }, i.a.createElement("i", {
                        className: this.state.doubleSpeed ? "fas fa-fast-backward" : "fas fa-fast-forward",
                        style: {
                            marginRight: 10,
                            fontSize: 20
                        }
                    }), this.state.doubleSpeed ? "1X Speed" : "2X Speed") : null), i.a.createElement("div", {
                        className: k.a.leftSide,
                        style: {
                            transform: "translateX(".concat(this.state.towerSelected.title || this.state.buyTowerName ? 0 : -110, "%)")
                        },
                        id: "stats"
                    }, this.state.buyTowerName ? i.a.createElement("div", null, i.a.createElement("div", {
                        className: k.a.infoRow
                    }, i.a.createElement("img", {
                        src: Vt[this.state.buyTower.blook],
                        alt: this.state.buyTower.blook,
                        className: k.a.infoBlook,
                        draggable: !1
                    }), i.a.createElement("div", {
                        className: k.a.infoTitle
                    }, this.state.buyTower.title)), i.a.createElement("div", {
                        className: k.a.smallInfoRow
                    }, i.a.createElement("i", {
                        className: "fas fa-fist-raised",
                        style: {
                            marginRight: 8
                        }
                    }), "Damage: ".concat(this.state.buyTower.damage)), i.a.createElement("div", {
                        className: k.a.smallInfoRow
                    }, i.a.createElement("i", {
                        className: "fas fa-running",
                        style: {
                            marginRight: 8
                        }
                    }), "Attack Time: ≈".concat(Math.round(this.state.buyTower.fullCd / 30 * 10) / 10, "s")), i.a.createElement("div", {
                        className: k.a.smallInfoRow
                    }, i.a.createElement("i", {
                        className: "fas fa-expand-alt",
                        style: {
                            marginRight: 8
                        }
                    }), "Range: ".concat(this.state.buyTower.range)), i.a.createElement("div", {
                        className: k.a.descText
                    }, i.a.createElement("div", {
                        style: {
                            fontWeight: "bold"
                        }
                    }, "Description:"), this.state.buyTower.desc)) : null, this.state.towerSelected.title ? i.a.createElement("div", null, i.a.createElement("div", {
                        className: k.a.infoRow
                    }, i.a.createElement("img", {
                        src: Vt[this.state.towerSelected.blook],
                        alt: this.state.towerSelected.blook,
                        className: k.a.infoBlook,
                        draggable: !1
                    }), i.a.createElement("div", {
                        className: k.a.infoTitle
                    }, this.state.towerSelected.title)), i.a.createElement("div", {
                        className: k.a.smallInfoRow
                    }, i.a.createElement("i", {
                        className: "fas fa-fist-raised",
                        style: {
                            marginRight: 8
                        }
                    }), "Damage: ".concat(this.state.towerSelected.damage)), i.a.createElement("div", {
                        className: k.a.smallInfoRow
                    }, i.a.createElement("i", {
                        className: "fas fa-running",
                        style: {
                            marginRight: 8
                        }
                    }), "Attack Time: ≈".concat(Math.round(this.state.towerSelected.fullCd / 30 * 10) / 10, "s")), i.a.createElement("div", {
                        className: k.a.smallInfoRow
                    }, i.a.createElement("i", {
                        className: "fas fa-expand-alt",
                        style: {
                            marginRight: 8
                        }
                    }), "Range: ".concat(this.state.towerSelected.range)), i.a.createElement("div", {
                        className: k.a.sellButton,
                        role: "button",
                        tabIndex: 0,
                        onClick: this.sellTower
                    }, i.a.createElement("i", {
                        className: "fas fa-coins",
                        style: {
                            marginRight: 10
                        }
                    }), "Sell (".concat(this.state.towerSelected.getSellPrice(), ")")), i.a.createElement("div", {
                        className: k.a.upgradesText
                    }, 3 === this.state.towerSelected.level ? "Max Upgrades" : "Upgrades"), this.state.towerSelected.upgrades[Math.min(this.state.towerSelected.level, 2)].map((function(e, a) {
                        return i.a.createElement("div", {
                            className: g()(k.a.upgradeContainer, Dt({}, k.a.towerShopFaded, t.state.tokens < e.data.cost || 3 === t.state.towerSelected.level)),
                            style: {
                                opacity: t.state.towerSelected.finalUpgrade === a ? 1 : null
                            },
                            key: e.data.title,
                            role: "button",
                            tabIndex: 0,
                            onClick: 3 === t.state.towerSelected.level ? function() {}
                            : function() {
                                return t.upgradeTower(e, a)
                            }
                        }, i.a.createElement("div", {
                            className: k.a.upgradeRow
                        }, e.icon ? i.a.createElement("i", {
                            className: g()(k.a.upgradeIcon, e.icon),
                            style: {
                                backgroundColor: e.iconColor
                            }
                        }) : i.a.createElement("img", {
                            src: Vt[e.iconBlook],
                            alt: e.iconBlook,
                            className: k.a.upgradeBlook,
                            draggable: !1
                        }), i.a.createElement("div", {
                            className: k.a.upgradeTitle
                        }, e.data.title)), i.a.createElement("div", {
                            className: k.a.upgradeDesc
                        }, e.desc), 3 !== t.state.towerSelected.level ? i.a.createElement("div", {
                            className: k.a.shopPrice
                        }, e.data.cost) : null)
                    }
                    ))) : null), i.a.createElement(f.a, {
                        preload: this.preload,
                        setup: this.setup,
                        draw: this.draw,
                        mouseClicked: this.mouseClicked
                    }), i.a.createElement("div", {
                        className: k.a.rightSide
                    }, i.a.createElement("div", {
                        className: k.a.healthRow,
                        id: "health"
                    }, i.a.createElement("div", {
                        className: k.a.healthBarHolder
                    }, i.a.createElement("div", {
                        className: k.a.healthBar,
                        style: {
                            transform: "scaleX(".concat(this.state.health / 100, ")")
                        }
                    })), i.a.createElement("div", {
                        className: k.a.healthText
                    }, this.state.health), i.a.createElement("i", {
                        className: g()(k.a.healthIcon, "fas fa-heart")
                    })), i.a.createElement("div", {
                        className: k.a.roundText
                    }, "Round ".concat(this.state.round)), i.a.createElement("div", {
                        className: k.a.shopContainer
                    }, Object.entries(Nt).map((function(e) {
                        var a = Ht(e, 2)
                          , s = a[0]
                          , o = a[1];
                        return i.a.createElement("div", {
                            className: g()(k.a.towerShopContainer, Dt({}, k.a.towerShopSelected, t.state.buyTowerName === s), Dt({}, k.a.towerShopFaded, t.state.tokens < o.cost || t.state.round < 5 && "penguin" === s || t.state.round < 15 && "king" === s || t.state.round < 20 && "jester" === s)),
                            key: s,
                            role: "button",
                            tabIndex: 0,
                            onClick: t.state.tokens < o.cost || t.state.round < 5 && "penguin" === s || t.state.round < 15 && "king" === s || t.state.round < 20 && "jester" === s ? function() {}
                            : t.state.buyTowerName === s ? function() {
                                return t.setState({
                                    buyTowerName: "",
                                    buyTower: {}
                                })
                            }
                            : function() {
                                return t.setState({
                                    buyTowerName: s,
                                    buyTower: new Ot(-1,-1,t.p5,t.tileSize,s,t.towerImages),
                                    towerSelected: {}
                                })
                            }
                        }, i.a.createElement("img", {
                            src: Vt[o.blook],
                            alt: o.blook,
                            className: k.a.shopBlook,
                            draggable: !1
                        }), t.state.round < 5 && "penguin" === s || t.state.round < 15 && "king" === s || t.state.round < 20 && "jester" === s ? i.a.createElement("div", {
                            className: k.a.shopLockedContainer
                        }, i.a.createElement("i", {
                            className: g()(k.a.shopLockedIcon, "fas fa-lock")
                        }), "Round ".concat("penguin" === s ? 5 : "king" === s ? 15 : 20)) : i.a.createElement("div", {
                            className: k.a.shopPrice
                        }, o.cost))
                    }
                    ))), this.state.buyTowerName || !this.state.roundGoing ? i.a.createElement("div", {
                        className: k.a.mainButton,
                        role: "button",
                        tabIndex: 0,
                        onClick: this.state.buyTowerName ? function() {
                            return t.setState({
                                buyTowerName: "",
                                buyTower: {}
                            })
                        }
                        : this.nextRound,
                        style: {
                            backgroundColor: this.state.buyTowerName ? "#c43a35" : "#0bc2cf"
                        },
                        id: "nextRound"
                    }, i.a.createElement("i", {
                        className: this.state.buyTowerName ? "fas fa-times" : "fas fa-play",
                        style: {
                            marginRight: 10
                        }
                    }), this.state.buyTowerName ? "Cancel Buy" : "Next Round") : this.state.roundGoing ? i.a.createElement("div", {
                        className: k.a.mainButton,
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return t.setState({
                                doubleSpeed: !t.state.doubleSpeed
                            })
                        },
                        style: {
                            backgroundColor: "#0bc2cf"
                        }
                    }, i.a.createElement("i", {
                        className: this.state.doubleSpeed ? "fas fa-fast-backward" : "fas fa-fast-forward",
                        style: {
                            marginRight: 10
                        }
                    }), this.state.doubleSpeed ? "1X Speed" : "2X Speed") : null), i.a.createElement("div", {
                        className: k.a.mBottomSpacer
                    }), i.a.createElement("div", {
                        className: k.a.mBottomContainer,
                        id: "mBottom"
                    }, this.state.buyTowerName && this.state.isSmall ? this.outsideMap(this.state.buyTower) ? i.a.createElement("div", {
                        className: k.a.mNoBuy
                    }, "Select Grid to Place Tower") : i.a.createElement("div", {
                        className: k.a.mBuyButton,
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return t.buyTower(!0)
                        }
                    }, "Confirm Buy") : i.a.createElement("div", {
                        className: k.a.mOpenButton,
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return t.setState({
                                showShop: !t.state.showShop
                            })
                        }
                    }, i.a.createElement("i", {
                        className: this.state.showShop ? "fas fa-angle-down" : "fas fa-angle-up",
                        style: {
                            marginLeft: 10,
                            marginRight: 7,
                            fontSize: 32
                        }
                    }), this.state.showShop ? "Close Shop" : "Open Shop", i.a.createElement("div", {
                        className: k.a.mHealthRow
                    }, i.a.createElement("div", {
                        className: k.a.mHealthText
                    }, this.state.health), i.a.createElement("i", {
                        className: g()(k.a.mHealthIcon, "fas fa-heart")
                    }))), this.state.showShop && !this.state.buyTowerName ? i.a.createElement("div", {
                        className: k.a.shopContainer
                    }, Object.entries(Nt).map((function(e) {
                        var a = Ht(e, 2)
                          , s = a[0]
                          , o = a[1];
                        return i.a.createElement("div", {
                            className: g()(k.a.towerShopContainer, Dt({}, k.a.towerShopSelected, t.state.buyTowerName === s), Dt({}, k.a.towerShopFaded, t.state.tokens < o.cost || t.state.round < 5 && "penguin" === s || t.state.round < 15 && "king" === s || t.state.round < 20 && "jester" === s)),
                            key: s,
                            role: "button",
                            tabIndex: 0,
                            onClick: t.state.tokens < o.cost || t.state.round < 5 && "penguin" === s || t.state.round < 15 && "king" === s || t.state.round < 20 && "jester" === s ? function() {}
                            : t.state.buyTowerName === s ? function() {
                                return t.setState({
                                    buyTowerName: "",
                                    buyTower: {}
                                })
                            }
                            : function() {
                                return t.setState({
                                    buyTowerName: s,
                                    buyTower: new Ot(-1,-1,t.p5,t.tileSize,s,t.towerImages),
                                    towerSelected: {}
                                })
                            }
                        }, i.a.createElement("img", {
                            src: Vt[o.blook],
                            alt: o.blook,
                            className: k.a.shopBlook,
                            draggable: !1
                        }), t.state.round < 5 && "penguin" === s || t.state.round < 15 && "king" === s || t.state.round < 20 && "jester" === s ? i.a.createElement("div", {
                            className: k.a.shopLockedContainer
                        }, i.a.createElement("i", {
                            className: g()(k.a.shopLockedIcon, "fas fa-lock")
                        }), "Round ".concat("penguin" === s ? 5 : "king" === s ? 15 : 20)) : i.a.createElement("div", {
                            className: k.a.shopPrice
                        }, o.cost))
                    }
                    ))) : null)) : null, "question" === this.state.phase ? i.a.createElement("div", {
                        className: k.a.questionContainer
                    }, i.a.createElement(R.a, {
                        onAnswer: this.onAnswer,
                        text: this.state.question.text,
                        answers: this.state.question.answers,
                        image: this.state.question.image
                    })) : "feedback" === this.state.phase ? i.a.createElement("div", {
                        className: k.a.feedbackContainer
                    }, i.a.createElement(O.a, {
                        incorrectTime: 3,
                        correctAnswers: this.state.question.correctAnswers,
                        correct: this.state.correct,
                        onNext: this.answerNext
                    })) : null, this.state.roundCompleted ? i.a.createElement("div", {
                        className: E.a.modal
                    }, i.a.createElement("div", {
                        className: k.a.modalContainer
                    }, i.a.createElement("div", {
                        className: k.a.modalText
                    }, 1 === this.state.round ? "Ready to Start?" : "Round ".concat(this.state.round - 1, " Complete!")), i.a.createElement("div", {
                        className: k.a.modalButtonRow
                    }, i.a.createElement("div", {
                        className: k.a.modalButton,
                        role: "button",
                        tabIndex: 0,
                        onClick: this.getQuestion
                    }, "Get Questions")))) : null, this.state.towerSelected && this.state.towerSelected.title ? i.a.createElement("div", {
                        className: g()(E.a.modal, k.a.mModal)
                    }, i.a.createElement("div", {
                        className: k.a.mTowerSelected
                    }, i.a.createElement("div", {
                        className: k.a.infoRow
                    }, i.a.createElement("img", {
                        src: Vt[this.state.towerSelected.blook],
                        alt: this.state.towerSelected.blook,
                        className: k.a.infoBlook,
                        draggable: !1
                    }), i.a.createElement("div", {
                        className: k.a.infoTitle
                    }, this.state.towerSelected.title)), i.a.createElement("div", {
                        className: k.a.sellContainer
                    }, i.a.createElement("div", {
                        className: k.a.sellButton,
                        role: "button",
                        tabIndex: 0,
                        onClick: this.sellTower
                    }, i.a.createElement("i", {
                        className: "fas fa-coins",
                        style: {
                            marginRight: 10
                        }
                    }), "Sell (".concat(this.state.towerSelected.getSellPrice(), ")")), i.a.createElement("div", {
                        className: k.a.statInfoContainer
                    }, i.a.createElement("div", {
                        className: k.a.smallInfoRow
                    }, i.a.createElement("i", {
                        className: "fas fa-fist-raised",
                        style: {
                            marginRight: 8
                        }
                    }), "Damage: ".concat(this.state.towerSelected.damage)), i.a.createElement("div", {
                        className: k.a.smallInfoRow
                    }, i.a.createElement("i", {
                        className: "fas fa-running",
                        style: {
                            marginRight: 8
                        }
                    }), "Attack Time: ≈".concat(Math.round(this.state.towerSelected.fullCd / 30 * 10) / 10, "s")), i.a.createElement("div", {
                        className: k.a.smallInfoRow
                    }, i.a.createElement("i", {
                        className: "fas fa-expand-alt",
                        style: {
                            marginRight: 8
                        }
                    }), "Range: ".concat(this.state.towerSelected.range)))), i.a.createElement("div", {
                        className: k.a.upgradesText
                    }, 3 === this.state.towerSelected.level ? "Max Upgrades" : "Upgrades"), this.state.towerSelected.upgrades[Math.min(this.state.towerSelected.level, 2)].map((function(e, a) {
                        return i.a.createElement("div", {
                            className: g()(k.a.upgradeContainer, Dt({}, k.a.towerShopFaded, t.state.tokens < e.data.cost || 3 === t.state.towerSelected.level)),
                            style: {
                                opacity: t.state.towerSelected.finalUpgrade === a ? 1 : null
                            },
                            key: e.data.title,
                            role: "button",
                            tabIndex: 0,
                            onClick: 3 === t.state.towerSelected.level ? function() {}
                            : function() {
                                return t.upgradeTower(e, a)
                            }
                        }, i.a.createElement("div", {
                            className: k.a.upgradeRow
                        }, e.icon ? i.a.createElement("i", {
                            className: g()(k.a.upgradeIcon, e.icon),
                            style: {
                                backgroundColor: e.iconColor
                            }
                        }) : i.a.createElement("img", {
                            src: Vt[e.iconBlook],
                            alt: e.iconBlook,
                            className: k.a.upgradeBlook,
                            draggable: !1
                        }), i.a.createElement("div", {
                            className: k.a.upgradeTitle
                        }, e.data.title, i.a.createElement("div", {
                            className: k.a.upgradeDesc
                        }, e.desc))), 3 !== t.state.towerSelected.level ? i.a.createElement("div", {
                            className: k.a.shopPrice
                        }, e.data.cost) : null)
                    }
                    )), i.a.createElement("div", {
                        className: k.a.mCloseTower,
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return t.setState({
                                towerSelected: {}
                            })
                        }
                    }, i.a.createElement("i", {
                        className: "fas fa-times"
                    })))) : null, this.state.askTour ? i.a.createElement(M.a, {
                        text: "Would you like a quick tutorial?",
                        buttonOne: {
                            text: "Yes",
                            click: function() {
                                return t.answerTour(!0)
                            },
                            color: "blue"
                        },
                        buttonTwo: {
                            text: "No",
                            click: function() {
                                return t.answerTour(!1)
                            },
                            color: "blue"
                        }
                    }) : this.state.hwGoal && !this.state.showTour ? i.a.createElement(M.a, {
                        text: "Your goal for this homework is to survive for ".concat(this.state.hwGoal, " ").concat(1 === this.state.hwGoal ? "Round" : "Rounds", "!"),
                        buttonOne: {
                            text: "Cool",
                            click: function() {
                                return t.setState({
                                    hwGoal: 0
                                })
                            },
                            color: "blue"
                        }
                    }) : this.state.goalCompleted ? i.a.createElement(M.a, {
                        text: "You completed the goal for this homework! You can now end the game or keep playing (your teacher will see the extra effort)!",
                        buttonOne: {
                            text: "Keep Playing",
                            click: function() {
                                return t.setState({
                                    goalCompleted: !1
                                })
                            },
                            color: "blue"
                        },
                        buttonTwo: {
                            text: "End Now",
                            click: this.endNow,
                            color: "blue"
                        }
                    }) : null, this.state.gameOver ? i.a.createElement("div", {
                        className: g()(E.a.modal, k.a.modalFadeIn)
                    }, i.a.createElement("div", {
                        className: k.a.gameOverContainer
                    }, i.a.createElement("div", {
                        className: k.a.gameOverText
                    }, "Game Over"), i.a.createElement("div", {
                        className: k.a.gameOverTextSmall
                    }, "You ran out of health"))) : null) : i.a.createElement(c.a, {
                        to: "/login"
                    })
                }
            }]) && Ft(t.prototype, a),
            s && Ft(t, s),
            n
        }(i.a.Component);
        Yt.propTypes = {
            defense: l.a.object,
            history: l.a.object.isRequired,
            setDefense: l.a.func.isRequired
        };
        t.a = Object(u.a)(Object(o.b)((function(e) {
            return {
                id: e.hosts.id,
                client: e.clients.client,
                defense: e.clients.client ? e.clients.client.defense : null
            }
        }
        ), (function(e) {
            return Object(n.b)({
                setDefense: j.a
            }, e)
        }
        ))(Object(T.c)(Yt)))
    },
    Qv3B: function(e, t, a) {
        var s = a("aV2S");
        "string" == typeof s && (s = [[e.i, s, ""]]);
        var i = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        a("aET+")(s, i);
        s.locals && (e.exports = s.locals)
    },
    R1k4: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return i
        }
        ));
        var s = a("gU57");
        function i(e) {
            return {
                type: s.a,
                defense: e
            }
        }
    },
    S4iY: function(e, t, a) {
        var s = a("jloe");
        "string" == typeof s && (s = [[e.i, s, ""]]);
        var i = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        a("aET+")(s, i);
        s.locals && (e.exports = s.locals)
    },
    YqwT: function(e, t, a) {
        (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__header___20gQX-camelCase{font-family:Nunito,sans-serif;font-size:45px;font-weight:700;margin:25px 5% 10px;color:#3a3a3a}.styles__urlContainer___2WHb3-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:500px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;text-align:center;display:flex;flex-direction:column}.styles__urlText___rOX3E-camelCase{font-family:Nunito,sans-serif;font-size:32px;font-weight:700;margin:25px auto 15px;color:#3a3a3a}.styles__urlCloseIcon___11dym-camelCase{position:absolute;top:15px;right:20px;font-size:28px;color:#3a3a3a;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.3s}.styles__urlCloseIcon___11dym-camelCase:focus,.styles__urlCloseIcon___11dym-camelCase:hover{color:#0bc2cf}.styles__urlInput___3m6In-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:5px;margin:5px 10% 20px;padding:5px 15px;width:calc(80% - 30px);height:30px;font-size:19px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none}.styles__urlInput___3m6In-camelCase:focus{border-color:#0bc2cf}.styles__urlErrorContainer___1Ixlb-camelCase{border:2px solid #ce1313;border-radius:5px;width:80%;display:flex;flex-direction:row;margin:auto auto 25px}.styles__urlErrorIcon___1HF_Z-camelCase{font-size:20px;color:#ce1313;padding-left:14px;padding-right:4px;margin:9px 5px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__urlErrorText___2C8dh-camelCase{margin:8px 5px 5px 11px;font-size:19px;text-align:left;color:#3a3a3a}.styles__urlButton___2ZpeA-camelCase,.styles__urlErrorText___2C8dh-camelCase{font-family:Nunito,sans-serif}.styles__urlButton___2ZpeA-camelCase{border-color:rgba(0,0,0,.17);border-style:solid;border-radius:5px;background-color:#fff;width:125px;height:45px;margin:auto auto 25px;color:#999;font-size:22px;text-align:center;outline:none;cursor:pointer}.styles__urlButton___2ZpeA-camelCase:focus,.styles__urlButton___2ZpeA-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__urlButtonFilled___3TIDw-camelCase{border-color:#3a3a3a;color:#3a3a3a;font-weight:700}.styles__urlButtonError___2dT-O-camelCase,.styles__urlButtonError___2dT-O-camelCase:focus{border-color:#ce1313;color:#ce1313}.styles__urlButtonError___2dT-O-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__inputContainer___2bJk0-camelCase{width:100%}.styles__wideContainer___2G2Z5-camelCase{display:flex;flex-direction:row;width:90%;margin:5px auto}.styles__dropHolder___2fnsW-camelCase{width:34%;min-height:280px;flex:1;padding:15px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;flex-direction:column;align-items:center}.styles__dropContainer___cEcoq-camelCase,.styles__dropHolder___2fnsW-camelCase{display:flex;justify-content:center}.styles__dropContainer___cEcoq-camelCase{height:calc(100% - 4px);width:calc(100% - 4px);border:2px dashed #666;border-radius:5px;margin-top:5px;background-color:#f0f0f0;flex-direction:column;align-content:center}.styles__activeDropContainer___20ylw-camelCase{background-color:rgba(11,194,207,.3)}.styles__dropHeader___1v2F4-camelCase{font-size:32px;font-weight:700;margin:5px auto}.styles__dropHeader___1v2F4-camelCase,.styles__dropText___xT7F4-camelCase{font-family:Nunito,sans-serif;text-align:center;color:#3a3a3a;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__dropText___xT7F4-camelCase{font-size:20px;margin:10px auto 15px;padding:0 20px}.styles__uploadButtonContainer___35Hi_-camelCase{display:flex;flex-flow:row wrap;justify-content:center;width:95%;margin:0 auto}.styles__uploadButton___3dGxU-camelCase{border-radius:5px;width:110px;height:50px;margin:5px 15px;display:flex;flex-direction:row;align-items:center;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#3a3a3a;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);transition:.1s}.styles__uploadButton___3dGxU-camelCase:focus,.styles__uploadButton___3dGxU-camelCase:hover{color:#0bc2cf;transform:scale(.94)}.styles__uploadIcon___2cOSN-camelCase{font-size:24px;padding-left:10px;width:28px;text-align:center}.styles__uploadText___211J0-camelCase{padding-left:10px;font-family:Nunito,sans-serif;font-size:15px;line-height:20px}.styles__imgContainer___3QDmd-camelCase{width:100%;height:280px;margin:auto;display:flex;justify-content:center;align-items:center;flex-direction:column;background-color:#333;border-radius:5px;overflow:hidden}.styles__coverImage___3cEqF-camelCase{max-width:100%;max-height:100%;margin:auto;-o-object-fit:contain;object-fit:contain}.styles__removeImageContainer___eXMrB-camelCase{width:100%;height:40px;margin-top:-40px;background-color:rgba(0,0,0,.6);border-bottom-left-radius:5px;border-bottom-right-radius:5px}.styles__removeImageButton___1gLza-camelCase{display:flex;flex-direction:row;align-self:flex-start;height:40px;width:135px;margin-left:30px;margin-top:-40px;cursor:pointer;outline:none;z-index:3}.styles__removeImageIcon___36nDI-camelCase{font-size:26px;color:#fff;line-height:40px;width:30px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__removeImageText___1wp-Q-camelCase{padding-left:10px;font-family:Nunito,sans-serif;font-size:24px;color:#fff;line-height:40px}.styles__upperRightContainer___36Oqd-camelCase{display:flex;flex-direction:column;padding:10px 15px;flex-grow:1;margin-left:3%;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px}.styles__titleHeader___1psXE-camelCase{font-size:34px}.styles__descHeader___hqb1a-camelCase,.styles__titleHeader___1psXE-camelCase{font-family:Nunito,sans-serif;font-weight:700;text-align:left;color:#3a3a3a}.styles__descHeader___hqb1a-camelCase{font-size:24px}.styles__input___K_SaV-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:5px;margin:5px 0 20px;padding:4px 15px;width:calc(100% - 34px);height:40px;font-size:22px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none;display:flex;flex-direction:row;align-items:center}.styles__input___K_SaV-camelCase:focus{border-color:#0bc2cf}.styles__descInput___2Ljau-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:5px;margin-top:10px;padding:10px 15px;width:calc(100% - 34px);height:100px;font-size:22px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none;resize:none}.styles__descInput___2Ljau-camelCase:focus{border-color:#0bc2cf}.styles__inputFilled___Ke3uk-camelCase{border-color:#3a3a3a}.styles__inputError___12D9P-camelCase{border-color:#ce1313}.styles__bottomLeftContainer___KpvX1-camelCase{display:flex;flex-direction:column;width:75%}.styles__categoryContainer___rlGuf-camelCase{width:100%;box-sizing:border-box;padding:10px 15px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;margin:20px 0 5px}.styles__categoryHeader___n5XIq-camelCase{font-size:24px;font-weight:700}.styles__categoryDesc___5emCm-camelCase,.styles__categoryHeader___n5XIq-camelCase{font-family:Nunito,sans-serif;text-align:left;color:#3a3a3a}.styles__categoryDesc___5emCm-camelCase{font-size:18px;opacity:.8}.styles__privacyContainer___1NR5K-camelCase{display:flex;flex-flow:row wrap;justify-content:space-evenly;width:90%;margin:5px 0 7px;background-color:rgba(0,0,0,.1);border-radius:5px}.styles__privateButton___31MFY-camelCase{box-shadow:0 0 8px 3px rgba(0,0,0,.2);color:#666;border-radius:5px;width:290px;height:70px;margin:10px 5px;display:flex;flex-direction:row;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff;transition:.2s}.styles__privateButton___31MFY-camelCase:hover{transform:scale(.95)}.styles__privateButton___31MFY-camelCase:hover,.styles__selected___1Csq9-camelCase{color:#fff;background-color:#0bc2cf}.styles__privateIcon___CHxy3-camelCase{font-size:35px;line-height:70px;padding-left:20px;width:45px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__privateTextContainer___mb-oi-camelCase{display:flex;flex-direction:column;padding-left:20px}.styles__privateHeader___bY8PO-camelCase{padding-top:12px;font-weight:700;font-size:22px;line-height:25px}.styles__privateHeader___bY8PO-camelCase,.styles__privateText___2spHM-camelCase{font-family:Nunito,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__privateText___2spHM-camelCase{font-size:18px;line-height:20px}.styles__bottomRightContainer___3-OYD-camelCase{width:15%;margin-left:auto}.styles__bottomRightContainer___3-OYD-camelCase,.styles__submitButton___13BP0-camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center}.styles__submitButton___13BP0-camelCase{border-radius:5px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);min-width:155px;width:100%;box-sizing:border-box;padding:15px;margin:20px auto;font-weight:700;color:#666;font-size:34px;line-height:38px;font-family:Nunito,sans-serif;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__buttonFilled___16H1r-camelCase{color:#fff;background-color:#0bc2cf}.styles__buttonFilled___16H1r-camelCase:hover{transform:scale(.95)}.styles__buttonError___1CI0u-camelCase{color:#fff;background-color:#ce1313}.styles__buttonError___1CI0u-camelCase:hover{transform:scale(.95)}.styles__createIcon___2lAk3-camelCase{font-size:54px;margin-bottom:20px}.styles__errorContainer___2idSK-camelCase{border:2px solid #ce1313;border-radius:5px;width:100%;box-sizing:border-box;margin:5px auto;display:flex;flex-direction:column;background-color:#fff}.styles__errorIcon___7XwPr-camelCase{font-size:27px;color:#ce1313;margin:9px auto 2px 9px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__errorText___1ayb3-camelCase{margin:4px 9px 6px;font-size:20px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a}@media only screen and (max-width:950px){.styles__uploadButton___3dGxU-camelCase{margin:5px 10px}}@media only screen and (max-width:860px){.styles__urlContainer___2WHb3-camelCase{width:90%}.styles__urlText___rOX3E-camelCase{font-size:28px}.styles__urlCloseIcon___11dym-camelCase{top:5px;right:10px;font-size:24px}.styles__wideContainer___2G2Z5-camelCase{flex-direction:column}.styles__dropHolder___2fnsW-camelCase{width:calc(100% - 30px);min-height:240px;flex:0}.styles__uploadButtonContainer___35Hi_-camelCase{margin:0 auto 15px}.styles__upperRightContainer___36Oqd-camelCase{margin:20px 0 0}.styles__header___20gQX-camelCase{font-size:40px}.styles__descInput___2Ljau-camelCase,.styles__input___K_SaV-camelCase{width:calc(100% - 34px)}.styles__descInput___2Ljau-camelCase{height:102px}.styles__bottomLeftContainer___KpvX1-camelCase{width:100%}.styles__privacyContainer___1NR5K-camelCase{width:100%;margin:10px auto}.styles__bottomRightContainer___3-OYD-camelCase{width:80%;margin:10px auto 25px}}", ""]),
        t.locals = {
            header: "styles__header___20gQX-camelCase",
            urlContainer: "styles__urlContainer___2WHb3-camelCase",
            urlText: "styles__urlText___rOX3E-camelCase",
            urlCloseIcon: "styles__urlCloseIcon___11dym-camelCase",
            urlInput: "styles__urlInput___3m6In-camelCase",
            urlErrorContainer: "styles__urlErrorContainer___1Ixlb-camelCase",
            urlErrorIcon: "styles__urlErrorIcon___1HF_Z-camelCase",
            urlErrorText: "styles__urlErrorText___2C8dh-camelCase",
            urlButton: "styles__urlButton___2ZpeA-camelCase",
            urlButtonFilled: "styles__urlButtonFilled___3TIDw-camelCase",
            urlButtonError: "styles__urlButtonError___2dT-O-camelCase",
            inputContainer: "styles__inputContainer___2bJk0-camelCase",
            wideContainer: "styles__wideContainer___2G2Z5-camelCase",
            dropHolder: "styles__dropHolder___2fnsW-camelCase",
            dropContainer: "styles__dropContainer___cEcoq-camelCase",
            activeDropContainer: "styles__activeDropContainer___20ylw-camelCase",
            dropHeader: "styles__dropHeader___1v2F4-camelCase",
            dropText: "styles__dropText___xT7F4-camelCase",
            uploadButtonContainer: "styles__uploadButtonContainer___35Hi_-camelCase",
            uploadButton: "styles__uploadButton___3dGxU-camelCase",
            uploadIcon: "styles__uploadIcon___2cOSN-camelCase",
            uploadText: "styles__uploadText___211J0-camelCase",
            imgContainer: "styles__imgContainer___3QDmd-camelCase",
            coverImage: "styles__coverImage___3cEqF-camelCase",
            removeImageContainer: "styles__removeImageContainer___eXMrB-camelCase",
            removeImageButton: "styles__removeImageButton___1gLza-camelCase",
            removeImageIcon: "styles__removeImageIcon___36nDI-camelCase",
            removeImageText: "styles__removeImageText___1wp-Q-camelCase",
            upperRightContainer: "styles__upperRightContainer___36Oqd-camelCase",
            titleHeader: "styles__titleHeader___1psXE-camelCase",
            descHeader: "styles__descHeader___hqb1a-camelCase",
            input: "styles__input___K_SaV-camelCase",
            descInput: "styles__descInput___2Ljau-camelCase",
            inputFilled: "styles__inputFilled___Ke3uk-camelCase",
            inputError: "styles__inputError___12D9P-camelCase",
            bottomLeftContainer: "styles__bottomLeftContainer___KpvX1-camelCase",
            categoryContainer: "styles__categoryContainer___rlGuf-camelCase",
            categoryHeader: "styles__categoryHeader___n5XIq-camelCase",
            categoryDesc: "styles__categoryDesc___5emCm-camelCase",
            privacyContainer: "styles__privacyContainer___1NR5K-camelCase",
            privateButton: "styles__privateButton___31MFY-camelCase",
            selected: "styles__selected___1Csq9-camelCase",
            privateIcon: "styles__privateIcon___CHxy3-camelCase",
            privateTextContainer: "styles__privateTextContainer___mb-oi-camelCase",
            privateHeader: "styles__privateHeader___bY8PO-camelCase",
            privateText: "styles__privateText___2spHM-camelCase",
            bottomRightContainer: "styles__bottomRightContainer___3-OYD-camelCase",
            submitButton: "styles__submitButton___13BP0-camelCase",
            buttonFilled: "styles__buttonFilled___16H1r-camelCase",
            buttonError: "styles__buttonError___1CI0u-camelCase",
            createIcon: "styles__createIcon___2lAk3-camelCase",
            errorContainer: "styles__errorContainer___2idSK-camelCase",
            errorIcon: "styles__errorIcon___7XwPr-camelCase",
            errorText: "styles__errorText___1ayb3-camelCase"
        }
    },
    Zqh3: function(e, t, a) {
        (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__stageText___3a6GQ-camelCase{font-size:28px;font-weight:700;margin-right:10px;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif;text-align:right;overflow:hidden}", ""]),
        t.locals = {
            stageText: "styles__stageText___3a6GQ-camelCase"
        }
    },
    aV2S: function(e, t, a) {
        (t = e.exports = a("JPst")(!1)).push([e.i, '.styles__bodyContainer___EPYj--camelCase{display:flex;flex-direction:row;justify-content:space-between}.styles__sketchHolder___JeOqe-camelCase{flex:1;margin:20px;overflow:hidden;position:relative}.styles__sketchCanvas___zTNxY-camelCase{top:0;right:0;bottom:0;left:0;display:block;margin:auto;position:absolute}.styles__leftSide___3teKr-camelCase{width:220px;min-height:calc(100% - 40px);padding:20px 0;background-color:#fff;box-shadow:6px 0 8px rgba(0,0,0,.2);outline:none;display:flex;flex-direction:column;transition:.3s}.styles__infoRow___3gIsF-camelCase{display:flex;flex-direction:row;align-items:flex-end;width:90%;margin:0 auto 10px}.styles__infoBlook___3HCCn-camelCase{width:30%;margin-right:10px}.styles__infoTitle___WsPOO-camelCase{font-family:Nunito,sans-serif;font-weight:700;font-size:26px;line-height:29px;color:#3a3a3a}.styles__smallInfoRow___17MlX-camelCase{display:flex;flex-direction:row;align-items:center;margin:5px auto}.styles__descText___gKAgj-camelCase,.styles__smallInfoRow___17MlX-camelCase{width:90%;font-family:Nunito,sans-serif;font-size:20px;color:#3a3a3a}.styles__descText___gKAgj-camelCase{margin:20px auto}.styles__sellButton___1S2HJ-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:center;width:80%;height:30px;border-radius:6px;margin:15px auto;background-color:#c43a35;color:#fff;font-size:18px;font-family:Nunito,sans-serif;font-weight:700;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;transition:.2s}.styles__sellButton___1S2HJ-camelCase:hover{transform:scale(.96)}.styles__upgradesText___LOEst-camelCase{margin:7px auto 12px;font-size:26px;text-align:center;font-family:Nunito,sans-serif;font-weight:700;color:#3a3a3a}.styles__upgradeContainer___2pD9g-camelCase{border:3px solid #a7a7a7;border-radius:6px;width:calc(90% - 16px);padding:3px 8px;margin:14px auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer;display:flex;flex-direction:column;position:relative;font-size:"Nunito",sans-serif;color:#3a3a3a;transition:.2s}.styles__upgradeContainer___2pD9g-camelCase:hover{transform:scale(.95);border-color:#0bc2cf}.styles__upgradeRow___1l7DY-camelCase{display:flex;flex-direction:row;width:100%;margin:4px 0}.styles__upgradeIcon___2k9Sp-camelCase{border-radius:6px;display:flex;justify-content:center;align-items:center;text-shadow:2px 2px 8px grey;color:#fff;font-size:28px}.styles__upgradeBlook___AffjV-camelCase,.styles__upgradeIcon___2k9Sp-camelCase{width:45px;height:51.75px;margin-right:10px}.styles__upgradeTitle___WAgCk-camelCase{width:calc(100% - 55px);font-size:24px;line-height:26px;font-weight:700}.styles__upgradeDesc___1KrK3-camelCase{font-size:16px;line-height:18.5px;margin:2px 0}.styles__rightSide___2yHsN-camelCase{width:280px;min-height:calc(100% - 40px);padding:20px 0;background-color:#fff;box-shadow:-6px 0 8px rgba(0,0,0,.2);outline:none;display:flex;flex-direction:column}.styles__healthRow___3tMPW-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;width:90%;padding:0 5px;margin:5px auto;font-size:22px;height:25px}.styles__healthBarHolder___2hc7v-camelCase{height:18px;width:calc(100% - 43px);margin-right:auto;background-color:#c43a35;border-radius:5px;overflow:hidden}.styles__healthBar___3Lw2I-camelCase{width:100%;height:100%;background-color:#4bc22e;transform-origin:left;transition:.2s}.styles__healthText___lw0ql-camelCase{font-family:Titan One,sans-serif;font-size:24px;margin:0 4px 3px 8px;color:#3a3a3a;width:55px;text-align:right}.styles__healthIcon___1XP0K-camelCase{font-size:18px;color:#3a3a3a;line-height:25px}.styles__roundText___1TSHl-camelCase{width:80%;margin:0 auto;font-size:26px;height:30px;text-align:right;font-family:Titan One,sans-serif;color:#3a3a3a}.styles__shopContainer___3-hMW-camelCase{margin:10px auto;width:95%;display:flex;flex-flow:row wrap;justify-content:space-between}.styles__towerShopContainer___1UcMB-camelCase{border:3px solid #a7a7a7;border-radius:6px;margin:7px 3px;width:75px;height:75px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer;display:flex;align-items:center;justify-content:center;position:relative;transform:scale(1);transition:.2s}.styles__towerShopContainer___1UcMB-camelCase:hover{transform:scale(.95);border-color:#0bc2cf}.styles__towerShopSelected___1Csm7-camelCase{border-color:#0bc2cf}.styles__towerShopFaded___1zHqo-camelCase{opacity:.5;cursor:auto}.styles__towerShopFaded___1zHqo-camelCase:hover{transform:scale(1);border-color:#a7a7a7}.styles__shopBlook___2MS1s-camelCase{height:85%;margin:auto}.styles__shopPrice___vDmRt-camelCase{right:-5px;bottom:-11px;height:22px;font-size:16px;padding:0 5px;background-color:#0bc2cf;border-radius:4px;font-family:Nunito,sans-serif}.styles__shopLockedContainer___2VmVO-camelCase,.styles__shopPrice___vDmRt-camelCase{position:absolute;color:#fff;display:flex;align-items:center;justify-content:center}.styles__shopLockedContainer___2VmVO-camelCase{width:calc(100% + 6px);height:calc(100% + 6px);border-radius:6px;cursor:auto;background-color:rgba(0,0,0,.8);flex-direction:column;font-size:14px;font-weight:700;text-shadow:2px 2px 8px grey}.styles__shopLockedIcon___2fXcd-camelCase{margin-bottom:3px;font-size:32px}.styles__mainButton___2rGTC-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:center;width:80%;height:50px;border-radius:6px;margin:auto auto 15px;background-color:#c43a35;color:#fff;font-size:26px;font-family:Nunito,sans-serif;font-weight:700;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;transition:.2s}.styles__mainButton___2rGTC-camelCase:hover{transform:scale(.96)}.styles__questionContainer___eVBXr-camelCase{background-color:#fff;z-index:2}.styles__feedbackContainer___ByBXt-camelCase,.styles__questionContainer___eVBXr-camelCase{position:absolute;top:0;left:0;width:100%;height:100%}.styles__feedbackContainer___ByBXt-camelCase{background-color:#f7f7f7}.styles__modalContainer___2P1Bh-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:420px;background-color:#0bc2cf;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center}.styles__modalText___1tKtB-camelCase{font-family:Titan One,sans-serif;font-size:45px;line-height:48px;margin:20px auto 15px;color:#fff;text-shadow:2px 2px 8px grey}.styles__modalButtonRow___2417K-camelCase{display:flex;flex-direction:row}.styles__modalButton___389Gh-camelCase{padding:5px 12px;margin:15px auto 25px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;font-size:24px;color:#5f5f5f;font-family:Nunito,sans-serif;transition:all .2s}.styles__modalButton___389Gh-camelCase:hover{transform:scale(.96)}.styles__modalFadeIn___3v_nl-camelCase{opacity:0;-webkit-animation:styles__fadeIn___19HjH-camelCase .4s linear .5s forwards;animation:styles__fadeIn___19HjH-camelCase .4s linear .5s forwards}.styles__gameOverContainer___1WsJW-camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center;width:90%;position:absolute;left:5%;top:50%;transform:translateY(-50%);color:#fff;text-shadow:2px 2px 8px grey}.styles__gameOverText___3ao9U-camelCase{font-family:Titan One,sans-serif;font-size:11vw;opacity:0;-webkit-animation:styles__fadeIn___19HjH-camelCase .4s linear 1s forwards;animation:styles__fadeIn___19HjH-camelCase .4s linear 1s forwards}.styles__gameOverTextSmall___2ox6S-camelCase{font-family:Nunito,sans-serif;font-weight:700;font-size:3vw;opacity:0;-webkit-animation:styles__fadeIn___19HjH-camelCase .4s linear 1.6s forwards;animation:styles__fadeIn___19HjH-camelCase .4s linear 1.6s forwards}@-webkit-keyframes styles__fadeIn___19HjH-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___19HjH-camelCase{0%{opacity:0}to{opacity:1}}@media only screen and (max-width:600px){.styles__modalContainer___2P1Bh-camelCase{width:310px}}.styles__mBottomContainer___2l6OL-camelCase,.styles__mBottomSpacer___24R5y-camelCase,.styles__mBuyButton___fF_vl-camelCase,.styles__mCloseTower___148O3-camelCase,.styles__mHealthIcon___O7idi-camelCase,.styles__mHealthRow___36fHM-camelCase,.styles__mHealthText___1yCLi-camelCase,.styles__mMainButton___hmcCW-camelCase,.styles__mModal___oQ8AP-camelCase,.styles__mNoBuy___Fi4gq-camelCase,.styles__mOpenButton___1C4gG-camelCase,.styles__mRoundText___qlY8R-camelCase,.styles__mTopContainer___2m094-camelCase,.styles__mTowerSelected___Akq8_-camelCase{display:none}@media only screen and (max-width:800px){.styles__leftSide___3teKr-camelCase,.styles__rightSide___2yHsN-camelCase{display:none}.styles__bodyContainer___EPYj--camelCase,.styles__mBottomContainer___2l6OL-camelCase{flex-direction:column}.styles__mBottomContainer___2l6OL-camelCase{position:absolute;bottom:0;left:0;background-color:#fff;box-shadow:0 -6px 8px rgba(0,0,0,.2);display:flex;min-height:60px;max-height:calc(100% - 55px);overflow-y:auto;width:100%}.styles__mBottomSpacer___24R5y-camelCase{display:block;height:60px}.styles__mOpenButton___1C4gG-camelCase{width:100%;height:50px;justify-content:center;color:#3a3a3a;font-size:26px;font-weight:700;font-family:Nunito,sans-serif;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}.styles__mHealthRow___36fHM-camelCase,.styles__mOpenButton___1C4gG-camelCase{position:relative;display:flex;flex-direction:row;align-items:center}.styles__mHealthRow___36fHM-camelCase{margin:auto 8px auto auto}.styles__mHealthText___1yCLi-camelCase{font-size:26px;font-weight:700;display:block}.styles__mHealthIcon___O7idi-camelCase{font-size:24px;margin-left:7px;display:block;margin-right:2px}.styles__mTopContainer___2m094-camelCase{height:50px;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}.styles__mRoundText___qlY8R-camelCase{font-family:Titan One,sans-serif;font-size:32px;color:#3a3a3a;margin-left:10px;display:block}.styles__mMainButton___hmcCW-camelCase{margin-right:10px;background-color:#0bc2cf;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:24px;color:#fff;padding:2px 10px;font-family:Nunito,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__mMainButton___hmcCW-camelCase:hover{transform:scale(.95)}.styles__mBuyButton___fF_vl-camelCase{background-color:#4bc22e;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:26px;color:#fff;margin:auto;padding:2px 13px;font-family:Nunito,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__mBuyButton___fF_vl-camelCase:hover{transform:scale(.95)}.styles__mNoBuy___Fi4gq-camelCase{display:flex;align-items:center;justify-content:center;height:60px;font-family:Nunito,sans-serif;color:#3a3a3a;font-size:26px;width:90%;margin:0 auto}.styles__mModal___oQ8AP-camelCase{display:block}.styles__mTowerSelected___Akq8_-camelCase{display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:90%;padding-top:7px;max-width:300px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center}.styles__infoBlook___3HCCn-camelCase{width:20%}.styles__mCloseTower___148O3-camelCase{display:flex;align-items:center;justify-content:center;position:absolute;height:40px;width:40px;top:-15px;right:-15px;background-color:#f33;color:#fff;font-size:26px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:50%;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__mCloseTower___148O3-camelCase:hover{transform:scale(.95)}.styles__descText___gKAgj-camelCase,.styles__upgradeTitle___WAgCk-camelCase{text-align:left}.styles__sellContainer___3DZeV-camelCase{display:flex;flex-direction:row;width:90%;margin:0 auto}.styles__sellButton___1S2HJ-camelCase{width:45%;margin:auto 5% auto 0;font-size:16px}.styles__statInfoContainer___2ZwLf-camelCase{display:flex;flex-direction:column;width:50%}.styles__smallInfoRow___17MlX-camelCase{width:100%;margin:1px auto;font-size:12px}.styles__gameOverText___3ao9U-camelCase{font-size:15vw}.styles__gameOverTextSmall___2ox6S-camelCase{font-size:5vw}}', ""]),
        t.locals = {
            bodyContainer: "styles__bodyContainer___EPYj--camelCase",
            sketchHolder: "styles__sketchHolder___JeOqe-camelCase",
            sketchCanvas: "styles__sketchCanvas___zTNxY-camelCase",
            leftSide: "styles__leftSide___3teKr-camelCase",
            infoRow: "styles__infoRow___3gIsF-camelCase",
            infoBlook: "styles__infoBlook___3HCCn-camelCase",
            infoTitle: "styles__infoTitle___WsPOO-camelCase",
            smallInfoRow: "styles__smallInfoRow___17MlX-camelCase",
            descText: "styles__descText___gKAgj-camelCase",
            sellButton: "styles__sellButton___1S2HJ-camelCase",
            upgradesText: "styles__upgradesText___LOEst-camelCase",
            upgradeContainer: "styles__upgradeContainer___2pD9g-camelCase",
            upgradeRow: "styles__upgradeRow___1l7DY-camelCase",
            upgradeIcon: "styles__upgradeIcon___2k9Sp-camelCase",
            upgradeBlook: "styles__upgradeBlook___AffjV-camelCase",
            upgradeTitle: "styles__upgradeTitle___WAgCk-camelCase",
            upgradeDesc: "styles__upgradeDesc___1KrK3-camelCase",
            rightSide: "styles__rightSide___2yHsN-camelCase",
            healthRow: "styles__healthRow___3tMPW-camelCase",
            healthBarHolder: "styles__healthBarHolder___2hc7v-camelCase",
            healthBar: "styles__healthBar___3Lw2I-camelCase",
            healthText: "styles__healthText___lw0ql-camelCase",
            healthIcon: "styles__healthIcon___1XP0K-camelCase",
            roundText: "styles__roundText___1TSHl-camelCase",
            shopContainer: "styles__shopContainer___3-hMW-camelCase",
            towerShopContainer: "styles__towerShopContainer___1UcMB-camelCase",
            towerShopSelected: "styles__towerShopSelected___1Csm7-camelCase",
            towerShopFaded: "styles__towerShopFaded___1zHqo-camelCase",
            shopBlook: "styles__shopBlook___2MS1s-camelCase",
            shopPrice: "styles__shopPrice___vDmRt-camelCase",
            shopLockedContainer: "styles__shopLockedContainer___2VmVO-camelCase",
            shopLockedIcon: "styles__shopLockedIcon___2fXcd-camelCase",
            mainButton: "styles__mainButton___2rGTC-camelCase",
            questionContainer: "styles__questionContainer___eVBXr-camelCase",
            feedbackContainer: "styles__feedbackContainer___ByBXt-camelCase",
            modalContainer: "styles__modalContainer___2P1Bh-camelCase",
            modalText: "styles__modalText___1tKtB-camelCase",
            modalButtonRow: "styles__modalButtonRow___2417K-camelCase",
            modalButton: "styles__modalButton___389Gh-camelCase",
            modalFadeIn: "styles__modalFadeIn___3v_nl-camelCase",
            fadeIn: "styles__fadeIn___19HjH-camelCase",
            gameOverContainer: "styles__gameOverContainer___1WsJW-camelCase",
            gameOverText: "styles__gameOverText___3ao9U-camelCase",
            gameOverTextSmall: "styles__gameOverTextSmall___2ox6S-camelCase",
            mBottomContainer: "styles__mBottomContainer___2l6OL-camelCase",
            mBottomSpacer: "styles__mBottomSpacer___24R5y-camelCase",
            mBuyButton: "styles__mBuyButton___fF_vl-camelCase",
            mCloseTower: "styles__mCloseTower___148O3-camelCase",
            mHealthIcon: "styles__mHealthIcon___O7idi-camelCase",
            mHealthRow: "styles__mHealthRow___36fHM-camelCase",
            mHealthText: "styles__mHealthText___1yCLi-camelCase",
            mMainButton: "styles__mMainButton___hmcCW-camelCase",
            mModal: "styles__mModal___oQ8AP-camelCase",
            mNoBuy: "styles__mNoBuy___Fi4gq-camelCase",
            mOpenButton: "styles__mOpenButton___1C4gG-camelCase",
            mRoundText: "styles__mRoundText___qlY8R-camelCase",
            mTopContainer: "styles__mTopContainer___2m094-camelCase",
            mTowerSelected: "styles__mTowerSelected___Akq8_-camelCase",
            sellContainer: "styles__sellContainer___3DZeV-camelCase",
            statInfoContainer: "styles__statInfoContainer___2ZwLf-camelCase"
        }
    },
    blLm: function(e, t, a) {
        var s = a("59PT");
        "string" == typeof s && (s = [[e.i, s, ""]]);
        var i = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        a("aET+")(s, i);
        s.locals && (e.exports = s.locals)
    },
    gU57: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return s
        }
        ));
        var s = "SET_DEFENSE"
    },
    iNqY: function(e, t, a) {
        "use strict";
        var s = a("q1tI")
          , i = a.n(s)
          , o = a("ANjH")
          , n = a("/MKj")
          , r = a("17x9")
          , l = a.n(r)
          , c = a("wIs1")
          , u = a("mLw1")
          , h = a("FLf1")
          , d = a.n(h)
          , p = a("vDqi")
          , m = a.n(p)
          , f = a("b6Qr")
          , _ = a("TSYQ")
          , g = a.n(_)
          , y = a("0b+E")
          , x = a("R1k4")
          , w = a("epYD")
          , b = a("XuX+")
          , v = a("GIcp")
          , C = a.n(v)
          , k = a("blLm")
          , S = a.n(k)
          , E = a("2g2H")
          , I = a("iQ+n")
          , T = a("3CTX")
          , N = a.n(T)
          , R = a("SCqF")
          , O = a("ZENw")
          , M = a("bpVs")
          , P = a("EmPG")
          , B = a("TN+F")
          , j = a("gljj")
          , z = a("kWb9");
        function D(e) {
            return (D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function H(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, s)
            }
            return a
        }
        function A(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? H(Object(a), !0).forEach((function(t) {
                    F(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : H(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        function F(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a,
            e
        }
        function U(e, t, a, s, i, o, n) {
            try {
                var r = e[o](n)
                  , l = r.value
            } catch (e) {
                return void a(e)
            }
            r.done ? t(l) : Promise.resolve(l).then(s, i)
        }
        function L(e) {
            return function() {
                var t = this
                  , a = arguments;
                return new Promise((function(s, i) {
                    var o = e.apply(t, a);
                    function n(e) {
                        U(o, s, i, n, r, "next", e)
                    }
                    function r(e) {
                        U(o, s, i, n, r, "throw", e)
                    }
                    n(void 0)
                }
                ))
            }
        }
        function q(e, t) {
            for (var a = 0; a < t.length; a++) {
                var s = t[a];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value"in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        function G(e, t) {
            return (G = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function W(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var a, s = V(e);
                if (t) {
                    var i = V(this).constructor;
                    a = Reflect.construct(s, arguments, i)
                } else
                    a = s.apply(this, arguments);
                return Q(this, a)
            }
        }
        function Q(e, t) {
            return !t || "object" !== D(t) && "function" != typeof t ? K(e) : t
        }
        function K(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function V(e) {
            return (V = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var X = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && G(e, t)
            }(n, e);
            var t, a, s, o = W(n);
            function n(e) {
                var t;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (t = o.call(this, e)).state = {
                    questions: [],
                    ready: !1,
                    isSave: !1,
                    warn: !1,
                    loggedIn: !1,
                    savesPhase: !1,
                    savesArray: [null, null, null],
                    loading: !1,
                    replaceIndex: 0,
                    name: "",
                    nameUsed: "",
                    numCorrect: 0,
                    numQuestions: 0,
                    round: 0,
                    message: "",
                    showFinal: !1,
                    standings: [],
                    noId: !1,
                    noIdPopUp: !1,
                    noQuestions: !1
                },
                t.redirect = !1,
                t.name = "",
                t.stripe = "",
                t.working = !0,
                t.here = !0,
                t.loadGame = t.loadGame.bind(K(t)),
                t.newGame = t.newGame.bind(K(t)),
                t.endGame = t.endGame.bind(K(t)),
                t
            }
            return t = n,
            (a = [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    if (this.props.setDefense(null),
                    localStorage.getItem("token")) {
                        var t = localStorage.getItem("token").split(" ");
                        2 === t.length && d.a.verify(t[1], N.a.secret, (function(t, a) {
                            t || (e.name = a.name,
                            e.stripe = a.stripe,
                            e.setState({
                                loggedIn: !0
                            }),
                            e.working = !1,
                            m.a.get("/api/defenses/byuser", {
                                params: {
                                    name: e.name
                                }
                            }).then((function(t) {
                                e.here && e.setState({
                                    isSave: t.data.success && !(e.props.client && e.props.client.hwId && e.props.client.questions),
                                    savesArray: t.data.success ? t.data.savesArray : [null, null, null]
                                }, (function() {
                                    e.working = !1
                                }
                                ))
                            }
                            )).catch((function(e) {
                                console.error(e)
                            }
                            )))
                        }
                        ))
                    }
                    this.props.client && this.props.client.hwId && this.props.client.questions ? (this.working = !1,
                    this.setState({
                        questions: this.props.client.questions || [],
                        ready: !0
                    })) : this.props.id ? m.a.get("/api/games", {
                        params: {
                            gameId: this.props.id
                        }
                    }).then((function(t) {
                        e.here && e.setState({
                            questions: t.data.questions.map((function(e) {
                                return {
                                    text: e.question,
                                    answers: e.answers,
                                    correctAnswers: e.correctAnswers,
                                    number: e.number,
                                    random: e.random,
                                    timeLimit: e.timeLimit,
                                    image: e.image ? e.image.url : null
                                }
                            }
                            )),
                            ready: !0
                        })
                    }
                    )).catch((function(e) {
                        console.error(e)
                    }
                    )) : this.setState({
                        noId: !0,
                        ready: !0
                    })
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.here = !1
                }
            }, {
                key: "loadGame",
                value: function(e) {
                    if (this.state.ready && !this.working) {
                        this.working = !0;
                        var t = this.state.savesArray[e]
                          , a = []
                          , s = !1
                          , i = this;
                        !function() {
                            o.apply(this, arguments)
                        }()
                    }
                    function o() {
                        return (o = L(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (!t.setId) {
                                            e.next = 9;
                                            break
                                        }
                                        if (!i.state.noId) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 4,
                                        new Promise((function(e) {
                                            m.a.get("/api/games", {
                                                params: {
                                                    gameId: t.setId
                                                }
                                            }).then((function(t) {
                                                t.data ? a = t.data.questions.map((function(e) {
                                                    return {
                                                        text: e.question,
                                                        answers: e.answers,
                                                        correctAnswers: e.correctAnswers,
                                                        number: e.number,
                                                        random: e.random,
                                                        timeLimit: e.timeLimit,
                                                        image: e.image ? e.image.url : null
                                                    }
                                                }
                                                )) : s = !0,
                                                e()
                                            }
                                            )).catch((function(e) {
                                                console.error(e)
                                            }
                                            ))
                                        }
                                        ));
                                    case 4:
                                        e.next = 7;
                                        break;
                                    case 6:
                                        a = i.state.questions;
                                    case 7:
                                        e.next = 11;
                                        break;
                                    case 9:
                                        return e.next = 11,
                                        new Promise((function(e) {
                                            m.a.get("/api/homeworks/byid", {
                                                params: {
                                                    id: t.hwId
                                                }
                                            }).then((function(t) {
                                                t.data ? a = t.data.questions : i.state.noId ? s = !0 : a = i.state.questions,
                                                e()
                                            }
                                            )).catch((function(e) {
                                                console.error(e)
                                            }
                                            ))
                                        }
                                        ));
                                    case 11:
                                        if (!s) {
                                            e.next = 15;
                                            break
                                        }
                                        return i.setState({
                                            noIdPopUp: !0,
                                            noQuestions: !0
                                        }),
                                        i.working = !1,
                                        e.abrupt("return");
                                    case 15:
                                        t.hwName && i.props.addClientName(t.hwName),
                                        i.props.setDefense(A(A({}, i.props.defense), {}, {
                                            defenseId: t._id,
                                            setId: t.setId,
                                            resultId: t.resultId,
                                            hwId: t.hwId,
                                            hwGoal: t.hwGoal,
                                            plus: t.hwPlus,
                                            questions: a,
                                            map: t.map,
                                            towers: t.towers,
                                            health: t.health,
                                            round: t.round,
                                            tokens: t.tokens,
                                            stage: "defense",
                                            corrects: t.corrects,
                                            incorrects: t.incorrects
                                        })),
                                        i.props.history.push("/defense");
                                    case 18:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )))).apply(this, arguments)
                    }
                }
            }, {
                key: "newGame",
                value: function(e) {
                    if (this.state.ready && !this.working) {
                        this.working = !0;
                        var t = this;
                        !function() {
                            a.apply(this, arguments)
                        }()
                    }
                    function a() {
                        return (a = L(regeneratorRuntime.mark((function a() {
                            var s, i;
                            return regeneratorRuntime.wrap((function(a) {
                                for (; ; )
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (s = "",
                                        !t.props.client || !t.props.client.hwId) {
                                            a.next = 4;
                                            break
                                        }
                                        return a.next = 4,
                                        new Promise((function(e, a) {
                                            m.a.post("/api/results", {
                                                hwId: t.props.client.hwId,
                                                name: t.props.client.name,
                                                data: {
                                                    corrects: {},
                                                    incorrects: {},
                                                    round: 1,
                                                    alive: !0
                                                }
                                            }).then((function(t) {
                                                s = t.data._id,
                                                e()
                                            }
                                            )).catch((function(e) {
                                                console.error(e),
                                                a()
                                            }
                                            ))
                                        }
                                        ));
                                    case 4:
                                        if (i = {},
                                        !t.name) {
                                            a.next = 9;
                                            break
                                        }
                                        return a.next = 8,
                                        new Promise((function(a, i) {
                                            m.a.defaults.headers.common.Authorization = localStorage.getItem("token"),
                                            m.a.post("/api/defenses", {
                                                setId: t.props.id,
                                                name: t.name,
                                                hwId: t.props.client && t.props.client.hwId ? t.props.client.hwId : null,
                                                hwName: t.props.client && t.props.client.name ? t.props.client.name : null,
                                                hwPlus: !(!t.props.client || !t.props.client.plus) && t.props.client.plus,
                                                hwGoal: t.props.client && t.props.client.amount ? t.props.client.amount : 0,
                                                saveIndex: e,
                                                resultId: s,
                                                map: "desert"
                                            }).then((function(e) {
                                                localStorage.setItem("token", e.data.token),
                                                a(e.data)
                                            }
                                            )).catch((function(e) {
                                                console.error(e),
                                                i()
                                            }
                                            ))
                                        }
                                        ));
                                    case 8:
                                        i = a.sent;
                                    case 9:
                                        t.props.setDefense(A(A({}, t.props.defense), {}, {
                                            defenseId: i.newSaveId,
                                            setId: t.props.id,
                                            resultId: s,
                                            hwId: t.props.client && t.props.client.hwId ? t.props.client.hwId : null,
                                            hwGoal: t.props.client && t.props.client.amount ? t.props.client.amount : null,
                                            questions: t.state.questions,
                                            map: "desert",
                                            towers: [],
                                            health: 1,
                                            round: 1,
                                            tokens: 10000000,
                                            stage: "defense",
                                            corrects: {},
                                            incorrects: {}
                                        })),
                                        i.oldSave && i.oldSave.map ? t.endGame(i.oldSave) : t.props.history.push("/defense");
                                    case 11:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))).apply(this, arguments)
                    }
                }
            }, {
                key: "endGame",
                value: function(e) {
                    var t = this;
                    m.a.put("/api/users/plan", {
                        name: this.name,
                        stripeId: this.stripe
                    }).then((function(e) {
                        t.here && t.setState({
                            showFinal: !0,
                            plus: "Starter" !== e.data.plan
                        })
                    }
                    )).catch((function(e) {
                        console.error(e)
                    }
                    )),
                    e.setId && (m.a.defaults.headers.common.Authorization = localStorage.getItem("token"),
                    m.a.put("/api/games/addplays", {
                        gameId: e.setId,
                        plays: 1
                    }).catch((function(e) {
                        console.error(e)
                    }
                    ))),
                    m.a.defaults.headers.common.Authorization = localStorage.getItem("token"),
                    m.a.delete("/api/defenses", {
                        params: {
                            name: this.name,
                            id: e.defenseId
                        }
                    }).catch((function(e) {
                        console.error(e)
                    }
                    ));
                    var a = e.hwName || "You";
                    y.a.event({
                        category: "Tower Defense".concat(e.hwId ? " HW" : ""),
                        action: "Play"
                    });
                    var s = 0
                      , i = 0;
                    Object.values(e.corrects).forEach((function(e) {
                        s += e,
                        i += e
                    }
                    )),
                    Object.values(e.incorrects).forEach((function(e) {
                        i += e
                    }
                    ));
                    var o = Math.max(1, 30 - (e.round - 1))
                      , n = Object(B.l)(P.a);
                    m.a.defaults.headers.common.Authorization = localStorage.getItem("token"),
                    m.a.put("/api/users/defensestats", {
                        name: this.name,
                        place: o,
                        round: e.round,
                        blookUsed: n,
                        nameUsed: a,
                        correctAnswers: s
                    }).catch((function(e) {
                        console.error(e)
                    }
                    )),
                    this.setState({
                        warn: !1,
                        name: this.name,
                        nameUsed: a,
                        numCorrect: s,
                        numQuestions: i,
                        message: Object(M.a)((o - 1) / 30),
                        ready: !e.defenseId || this.state.ready,
                        round: e.round - 1,
                        standings: [{
                            name: a,
                            blook: n,
                            place: o,
                            round: e.round - 1
                        }]
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    if (this.props.client && this.props.client.hwId)
                        this.redirect = !1;
                    else if (localStorage.getItem("token")) {
                        var t = localStorage.getItem("token").split(" ");
                        2 === t.length ? d.a.verify(t[1], N.a.secret, (function(t) {
                            e.redirect = !!t
                        }
                        )) : this.redirect = !0
                    } else
                        this.redirect = !0;
                    return this.redirect || this.state.ready && (!this.state.questions || 0 === this.state.questions.length) && !this.state.noId ? i.a.createElement(u.a, {
                        to: "/login"
                    }) : i.a.createElement("div", {
                        className: g()(f.isMobile ? C.a.mBody : C.a.body, S.a.background),
                        style: {
                            backgroundImage: "url(".concat(j.a, ")")
                        }
                    }, i.a.createElement(I.a, {
                        title: "Load Tower Defense | Blooket",
                        desc: "Start a new game or load a saved game of Blooket's Tower Defense."
                    }), i.a.createElement(E.a, {
                        noRight: !0
                    }), this.state.savesPhase ? i.a.createElement("div", {
                        className: C.a.regularBody
                    }, i.a.createElement("div", {
                        className: S.a.backButton,
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return e.setState({
                                savesPhase: !1,
                                loading: !1
                            })
                        }
                    }, "Back"), i.a.createElement("div", {
                        className: S.a.savesHeader
                    }, this.state.loading ? "Choose a Save" : "Choose a Save Slot"), i.a.createElement("div", {
                        className: S.a.savesHolder
                    }, this.state.savesArray.map((function(t, a) {
                        return t ? i.a.createElement("div", {
                            className: S.a.saveContainer,
                            key: t._id
                        }, i.a.createElement("div", {
                            className: S.a.saveTitle
                        }, "Round ".concat(t.round)), i.a.createElement("div", {
                            className: S.a.saveRow
                        }, "".concat(Object(B.k)(t.tokens)), i.a.createElement("i", {
                            className: g()(S.a.saveIcon, "fas fa-coins")
                        })), i.a.createElement("div", {
                            className: S.a.saveRow
                        }, z.a[t.map].name, i.a.createElement("i", {
                            className: g()(S.a.saveIcon, "fas fa-map")
                        })), i.a.createElement("div", {
                            className: S.a.saveRow
                        }, t.hwName || "Not Homework", i.a.createElement("i", {
                            className: g()(S.a.saveIcon, "fas fa-file-alt")
                        })), i.a.createElement("div", {
                            className: S.a.saveRow
                        }, i.a.createElement("div", {
                            className: S.a.saveHealthHolder
                        }, i.a.createElement("div", {
                            className: S.a.saveHealthBar,
                            style: {
                                transform: "scaleX(".concat(t.health / 100, ")")
                            }
                        })), i.a.createElement("i", {
                            className: g()(S.a.saveIcon, "fas fa-heart")
                        })), i.a.createElement("div", {
                            className: S.a.loadButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: e.state.loading ? function() {
                                return e.loadGame(a)
                            }
                            : e.state.noId ? function() {
                                return e.setState({
                                    noIdPopUp: !0
                                })
                            }
                            : function() {
                                return e.setState({
                                    warn: !0,
                                    replaceIndex: a
                                })
                            }
                        }, e.state.loading ? "Load Game" : "Replace Game")) : i.a.createElement("div", {
                            className: S.a.saveContainer,
                            key: a
                        }, i.a.createElement("div", {
                            className: S.a.emptySave
                        }, "Empty"), e.state.loading ? null : i.a.createElement("div", {
                            className: S.a.loadButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: e.state.noId ? function() {
                                return e.setState({
                                    noIdPopUp: !0
                                })
                            }
                            : function() {
                                return e.newGame(a)
                            }
                        }, "New Game"))
                    }
                    )))) : i.a.createElement("div", {
                        className: C.a.regularBody
                    }, i.a.createElement("div", {
                        className: S.a.contentHolder
                    }, i.a.createElement("div", {
                        className: S.a.header
                    }, "TOWER", i.a.createElement("br", null), "DEFENSE"), i.a.createElement("div", {
                        className: S.a.buttonContainer
                    }, this.state.isSave ? i.a.createElement("div", {
                        className: S.a.button,
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return e.setState({
                                savesPhase: !0,
                                loading: !0
                            })
                        }
                    }, "LOAD GAME") : null, i.a.createElement("div", {
                        className: S.a.button,
                        role: "button",
                        tabIndex: 0,
                        onClick: this.state.loggedIn ? function() {
                            return e.setState({
                                savesPhase: !0,
                                loading: !1
                            })
                        }
                        : this.newGame
                    }, "NEW GAME"))), i.a.createElement("img", {
                        src: "https://res.cloudinary.com/blooket/image/upload/v1591301898/Blooks/phantomKing.svg",
                        className: S.a.blook1,
                        alt: "Phantom King",
                        draggable: !1
                    }), i.a.createElement("img", {
                        src: "https://res.cloudinary.com/blooket/image/upload/v1591048518/Blooks/masterElf.svg",
                        className: S.a.blook2,
                        alt: "Master Elf",
                        draggable: !1
                    }), i.a.createElement("img", {
                        src: "https://res.cloudinary.com/blooket/image/upload/v1591896075/Blooks/lightSlimeMonster.svg",
                        className: S.a.blook3,
                        alt: "Light Slime Monster",
                        draggable: !1
                    }), this.state.loggedIn ? i.a.createElement("div", {
                        className: S.a.loginText
                    }, "Your progress will automatically be saved") : i.a.createElement("div", {
                        className: S.a.loginText
                    }, i.a.createElement("a", {
                        href: "https://www.blooket.com/login",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            color: "#fff"
                        }
                    }, "Login"), " to save your progress")), this.state.warn ? i.a.createElement(R.a, {
                        text: "Starting a new game will delete this save! Don't worry though, we'll give you the tokens for your old save right now!",
                        buttonOne: {
                            text: "Continue",
                            click: function() {
                                return e.newGame(e.state.replaceIndex)
                            },
                            color: "blue"
                        },
                        buttonTwo: {
                            text: "Go Back",
                            click: function() {
                                return e.setState({
                                    warn: !1
                                })
                            },
                            color: "blue"
                        }
                    }) : this.state.noIdPopUp ? i.a.createElement(R.a, {
                        text: this.state.noQuestions ? "This save doesn't have an associated question set. Go find a set, click 'Solo', and try again!" : "You need a question set to create a new game!",
                        buttonOne: {
                            text: "Find A Set",
                            click: function() {
                                return e.props.history.push("/discover")
                            },
                            color: "blue"
                        },
                        buttonTwo: {
                            text: "Go Back",
                            click: function() {
                                return e.setState({
                                    noIdPopUp: !1,
                                    noQuestions: !1
                                })
                            },
                            color: "blue"
                        }
                    }) : null, this.state.showFinal ? i.a.createElement("div", {
                        className: C.a.modal
                    }, i.a.createElement(O.a, {
                        standings: this.state.standings,
                        name: this.state.nameUsed,
                        numCorrect: this.state.numCorrect,
                        numQuestions: this.state.numQuestions,
                        username: this.state.name,
                        plus: this.state.plus,
                        myStat: "Survived ".concat(this.state.round, " ").concat(1 === this.state.round ? "Round" : "Rounds"),
                        saveStats: this.saveStats,
                        renderStandingStat: function(e) {
                            return function(e) {
                                return i.a.createElement("div", {
                                    className: S.a.stageText
                                }, "Round ".concat(e.round))
                            }(e)
                        },
                        renderStats: function() {},
                        customMessage: this.state.message,
                        tokenMultiplier: 10000,
                        buttonFunc: function() {
                            return e.props.history.push("/defense")
                        },
                        noWait: !1
                    })) : null)
                }
            }]) && q(t.prototype, a),
            s && q(t, s),
            n
        }(i.a.Component);
        X.propTypes = {
            client: l.a.object,
            history: l.a.object.isRequired,
            id: l.a.string,
            setDefense: l.a.func.isRequired
        };
        t.a = Object(c.a)(Object(n.b)((function(e) {
            return {
                id: e.hosts.id,
                client: e.clients.client,
                defense: e.clients.client ? e.clients.client.defense : null
            }
        }
        ), (function(e) {
            return Object(o.b)({
                setDefense: x.a,
                addClientName: b.a,
                addHwClient: w.b
            }, e)
        }
        ))(X))
    },
    jloe: function(e, t, a) {
        (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__searchBoxHolder___2sicz-camelCase{width:60%;min-width:400px;box-sizing:border-box;padding:20px;margin:35px auto 50px;justify-content:center;align-items:center;border-radius:5px;box-shadow:0 0 8px 3px rgba(0,0,0,.2)}.styles__searchBoxHolder___2sicz-camelCase,.styles__searchContainer___3wNvb-camelCase{display:flex;flex-direction:row;background-color:#fff}.styles__searchContainer___3wNvb-camelCase{flex-grow:1;min-width:300px;border:3px solid #0bc2cf;border-radius:6px;height:50px}.styles__filtersHolder___3RR33-camelCase{position:relative;display:block}.styles__filterIcon___2a4-v-camelCase{font-size:23px;color:#fff;background-color:#9a49aa;border-radius:5px;margin:auto 0 auto 15px;height:46px;width:46px;display:flex;justify-content:center;align-items:center;text-align:center;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media only screen and (max-width:600px){.styles__searchBoxHolder___2sicz-camelCase{width:90%;min-width:330px;padding:20px 10px}.styles__filtersHolder___3RR33-camelCase{display:none}}.styles__searchIcon___n2x3x-camelCase{font-size:25px;color:#fff;background-color:#0bc2cf;border-radius:5px;margin:auto 2px auto 10px;height:46px;width:46px;display:flex;justify-content:center;align-items:center;text-align:center;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__searchInput___3x0FW-camelCase{border:none;margin:6px 2px 4px 15px;height:40px;width:calc(100% - 51px);font-size:24px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none}.styles__searchInput___3x0FW-camelCase::-webkit-search-cancel-button,.styles__searchInput___3x0FW-camelCase::-webkit-search-decoration,.styles__searchInput___3x0FW-camelCase::-webkit-search-results-button,.styles__searchInput___3x0FW-camelCase::-webkit-search-results-decoration{-webkit-appearance:none}.styles__filtersColumn___q6AQI-camelCase{display:none;flex-direction:column;position:absolute;top:46px;left:10px;width:200px}.styles__filtersHolder___3RR33-camelCase:hover>.styles__filtersColumn___q6AQI-camelCase{display:flex}.styles__filterRow___358me-camelCase{background-color:#fff;border-radius:5px;box-shadow:0 0 4px 1.5px rgba(0,0,0,.2);display:flex;flex-direction:row;padding:5px 10px;margin:2.5px 0;font-family:Nunito,sans-serif;font-size:16px;color:#3a3a3a;flex:1}.styles__filters___1yvZa-camelCase{display:flex;flex-direction:row;justify-content:space-between;width:100%;margin-top:3px}.styles__checkBox___2PRFO-camelCase{width:20px;height:20px;display:flex;justify-content:center;align-items:center;border:2px solid #3a3a3a;border-radius:6px;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#3a3a3a;background-color:#fff;transition:.2s}.styles__checkIcon___3E_H8-camelCase{font-size:14px;margin:auto}.styles__checkYes___BYvQ5-camelCase{border-color:#0bc2cf;background-color:#0bc2cf;color:#fff}.styles__checkNo___3DjH9-camelCase{border-color:rgba(0,0,0,.25);background-color:#fff;color:rgba(0,0,0,.25)}.styles__hitsHolder___1CF_t-camelCase{min-height:calc(100vh - 280px)}.styles__hitsContainer___2htuR-camelCase{display:grid;justify-content:center;grid-template-columns:repeat(auto-fill,265px);grid-gap:35px;max-width:90%;margin:0 5% 25px}.styles__setContainer___m0KCi-camelCase{width:265px;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:column;justify-content:center;list-style:none;text-decoration:none;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__setContainer___m0KCi-camelCase:focus,.styles__setContainer___m0KCi-camelCase:hover{transform:scale(1.05)}.styles__setImageFiller___3xpdX-camelCase{background-color:#333}.styles__coverImage___2tfWa-camelCase,.styles__setImageFiller___3xpdX-camelCase{width:100%;height:180px;border-top-left-radius:7px;border-top-right-radius:7px}.styles__coverImage___2tfWa-camelCase{margin:auto;-o-object-fit:cover;object-fit:cover}.styles__setFillerContainer___3hm1X-camelCase{width:100%;height:180px;background-color:#0bc2cf;border-top-left-radius:7px;border-top-right-radius:7px;display:flex;justify-content:center;align-items:center}.styles__setFillerText___23w9t-camelCase{font-family:Titan One,sans-serif;font-size:45px;text-align:center;margin:auto;color:#fff;text-shadow:2px 2px 8px grey;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__setQuestionsContainer___2zEAp-camelCase{background-color:rgba(0,0,0,.6);height:25px;width:135px;margin:-33px 10px 8px auto;border-radius:4px}.styles__setQuestionsText___3Gw2P-camelCase{font-size:18px;line-height:25px;margin:auto;text-align:center;color:#fff}.styles__setHeader___PG4IQ-camelCase,.styles__setQuestionsText___3Gw2P-camelCase{font-family:Nunito,sans-serif}.styles__setHeader___PG4IQ-camelCase{font-size:24px;font-weight:700;margin:10px 5% 5px;color:#3a3a3a;line-height:27px;word-wrap:break-word}.styles__setSpacer___1gVdD-camelCase{width:100%;height:15px;flex-grow:2}.styles__setPlays___2umLV-camelCase{font-family:Nunito,sans-serif;font-size:18px;font-weight:700;margin:5px 5% 0;color:#3a3a3a;display:flex;flex-direction:row;align-items:center}.styles__verifiedIcon___QdFZ2-camelCase{color:#0bc2cf;margin-left:9px}.styles__setLastEdit___2WcGf-camelCase{font-family:Nunito,sans-serif;font-size:16px;margin:2px 5%;color:#3a3a3a}.styles__setAuthorContainer___2z8t7-camelCase{display:flex;flex-direction:row;align-items:center;margin:0 5% 7px;height:25px}.styles__authorIcon___3CT7T-camelCase{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__authorIcon___3CT7T-camelCase,.styles__setAuthorText___1ju9d-camelCase{font-size:16px;color:#3a3a3a}.styles__setAuthorText___1ju9d-camelCase{font-family:Nunito,sans-serif;margin-left:5px}.styles__setAuthorIcon___1xpEX-camelCase{height:20px;margin-left:5px}.styles__otherContainer___3BlPN-camelCase{display:flex;flex-direction:column}.styles__featuredHeaderContainer___3Sjw5-camelCase{min-width:400px;max-width:850px;display:flex;flex-direction:row;justify-content:center;align-items:center;background-color:#fff;border-radius:5px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);margin:20px auto;padding:20px}.styles__featuredHeaderText___91lD1-camelCase{font-size:48px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:auto}.styles__featuredHeaderText___91lD1-camelCase,.styles__noResultsText___1h9TG-camelCase{font-family:Nunito,sans-serif;font-weight:700;color:#3a3a3a;text-align:center}.styles__noResultsText___1h9TG-camelCase{margin:40px auto;display:flex;flex-direction:column;align-items:center;font-size:22px;max-width:300px}.styles__noResultsIcon___1oAZt-camelCase{font-size:102px;margin-bottom:10px}", ""]),
        t.locals = {
            searchBoxHolder: "styles__searchBoxHolder___2sicz-camelCase",
            searchContainer: "styles__searchContainer___3wNvb-camelCase",
            filtersHolder: "styles__filtersHolder___3RR33-camelCase",
            filterIcon: "styles__filterIcon___2a4-v-camelCase",
            searchIcon: "styles__searchIcon___n2x3x-camelCase",
            searchInput: "styles__searchInput___3x0FW-camelCase",
            filtersColumn: "styles__filtersColumn___q6AQI-camelCase",
            filterRow: "styles__filterRow___358me-camelCase",
            filters: "styles__filters___1yvZa-camelCase",
            checkBox: "styles__checkBox___2PRFO-camelCase",
            checkIcon: "styles__checkIcon___3E_H8-camelCase",
            checkYes: "styles__checkYes___BYvQ5-camelCase",
            checkNo: "styles__checkNo___3DjH9-camelCase",
            hitsHolder: "styles__hitsHolder___1CF_t-camelCase",
            hitsContainer: "styles__hitsContainer___2htuR-camelCase",
            setContainer: "styles__setContainer___m0KCi-camelCase",
            setImageFiller: "styles__setImageFiller___3xpdX-camelCase",
            coverImage: "styles__coverImage___2tfWa-camelCase",
            setFillerContainer: "styles__setFillerContainer___3hm1X-camelCase",
            setFillerText: "styles__setFillerText___23w9t-camelCase",
            setQuestionsContainer: "styles__setQuestionsContainer___2zEAp-camelCase",
            setQuestionsText: "styles__setQuestionsText___3Gw2P-camelCase",
            setHeader: "styles__setHeader___PG4IQ-camelCase",
            setSpacer: "styles__setSpacer___1gVdD-camelCase",
            setPlays: "styles__setPlays___2umLV-camelCase",
            verifiedIcon: "styles__verifiedIcon___QdFZ2-camelCase",
            setLastEdit: "styles__setLastEdit___2WcGf-camelCase",
            setAuthorContainer: "styles__setAuthorContainer___2z8t7-camelCase",
            authorIcon: "styles__authorIcon___3CT7T-camelCase",
            setAuthorText: "styles__setAuthorText___1ju9d-camelCase",
            setAuthorIcon: "styles__setAuthorIcon___1xpEX-camelCase",
            otherContainer: "styles__otherContainer___3BlPN-camelCase",
            featuredHeaderContainer: "styles__featuredHeaderContainer___3Sjw5-camelCase",
            featuredHeaderText: "styles__featuredHeaderText___91lD1-camelCase",
            noResultsText: "styles__noResultsText___1h9TG-camelCase",
            noResultsIcon: "styles__noResultsIcon___1oAZt-camelCase"
        }
    },
    kWb9: function(e, t, a) {
        "use strict";
        var s = a("VI/E")
          , i = a.n(s)
          , o = a("v7rU")
          , n = a.n(o)
          , r = a("iQOC")
          , l = a.n(r)
          , c = {};
        c.meadow = {
            name: "Sunny Meadow",
            img: i.a,
            tiles: [[0, 0, 0, 0, 0, 0, 0, 2, 0, 0], [2, 0, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 1, 0, 1, 1, 1, 5], [0, 0, 1, 0, 1, 0, 1, 0, 0, 0], [0, 0, 1, 0, 1, 0, 1, 0, 0, 2], [4, 1, 1, 0, 1, 0, 1, 0, 0, 0], [0, 0, 0, 0, 1, 0, 1, 1, 1, 0], [2, 1, 1, 1, 1, 0, 0, 0, 1, 2], [0, 1, 0, 0, 0, 0, 0, 0, 1, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 0], [2, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
        },
        c.desert = {
            name: "Lost Desert",
            img: n.a,
            tiles: [[0, 2, 0, 0, 2, 0, 0, 0, 0, 0], [4, 1, 1, 1, 0, 0, 1, 1, 1, 2], [0, 0, 0, 1, 0, 0, 1, 0, 1, 0], [0, 0, 2, 1, 1, 1, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 2, 0, 1, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 1, 2, 0, 0, 0, 0, 0, 2, 0], [2, 1, 0, 1, 1, 1, 1, 0, 0, 0], [0, 1, 0, 1, 0, 0, 1, 0, 2, 0], [0, 1, 1, 1, 0, 0, 1, 1, 1, 5], [0, 2, 0, 0, 0, 0, 2, 0, 0, 0]]
        },
        c.mine = {
            name: "Abandoned Mine",
            img: l.a,
            tiles: [[0, 2, 0, 4, 0, 5, 2, 0, 0, 2], [0, 0, 0, 1, 0, 1, 0, 0, 2, 2], [0, 0, 0, 1, 0, 1, 0, 0, 0, 2], [2, 1, 1, 1, 0, 1, 1, 1, 0, 2], [0, 1, 0, 0, 0, 0, 2, 1, 0, 2], [0, 1, 1, 1, 0, 1, 1, 1, 0, 2], [0, 2, 0, 1, 0, 1, 0, 0, 0, 2], [0, 1, 1, 1, 0, 1, 1, 1, 2, 2], [0, 1, 0, 2, 0, 0, 0, 1, 0, 2], [2, 1, 1, 1, 1, 1, 1, 1, 0, 2], [0, 0, 0, 0, 0, 2, 0, 0, 0, 2]]
        },
        t.a = c
    },
    rqsW: function(e, t, a) {
        "use strict";
        var s = a("q1tI")
          , i = a.n(s)
          , o = a("ANjH")
          , n = a("/MKj")
          , r = a("17x9")
          , l = a.n(r)
          , c = a("wIs1")
          , u = a("mLw1")
          , h = a("FLf1")
          , d = a.n(h)
          , p = a("b6Qr")
          , m = a("0b+E")
          , f = a("vDqi")
          , _ = a.n(f)
          , g = a("pMbe")
          , y = a("1Yba")
          , x = a.n(y)
          , w = a("GIcp")
          , b = a.n(w)
          , v = a("dJL0")
          , C = a("iQ+n")
          , k = a("3CTX")
          , S = a.n(k)
          , E = a("ZENw")
          , I = a("bpVs")
          , T = a("EmPG")
          , N = a("TN+F")
          , R = a("SdQT");
        function O(e) {
            return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function M(e, t) {
            for (var a = 0; a < t.length; a++) {
                var s = t[a];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value"in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        function P(e, t) {
            return (P = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function B(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var a, s = D(e);
                if (t) {
                    var i = D(this).constructor;
                    a = Reflect.construct(s, arguments, i)
                } else
                    a = s.apply(this, arguments);
                return j(this, a)
            }
        }
        function j(e, t) {
            return !t || "object" !== O(t) && "function" != typeof t ? z(e) : t
        }
        function z(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function D(e) {
            return (D = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var H = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && P(e, t)
            }(n, e);
            var t, a, s, o = B(n);
            function n(e) {
                var t;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (t = o.call(this, e)).state = {
                    ready: !1,
                    numCorrect: 0,
                    numQuestions: 0,
                    standings: [],
                    plus: !1,
                    message: "",
                    name: "",
                    nameUsed: "",
                    round: 0
                },
                t.here = !0,
                t.stats = {},
                t.saveStats = t.saveStats.bind(z(t)),
                t
            }
            return t = n,
            (a = [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    if (this.props.defense && "final" === this.props.defense.stage) {
                        this.isSolo = !0,
                        this.isHw = Boolean(this.props.defense.resultId),
                        this.isHw && _.a.put("/api/results", {
                            id: this.props.defense.resultId,
                            data: {
                                corrects: this.props.defense.corrects,
                                incorrects: this.props.defense.incorrects,
                                round: this.props.defense.round,
                                alive: !1
                            }
                        }).catch((function(e) {
                            return console.error(e)
                        }
                        )),
                        m.a.event({
                            category: "Tower Defense".concat(this.props.defense.hwId ? " HW" : ""),
                            action: "Play"
                        });
                        var t = 0
                          , a = 0;
                        Object.values(this.props.defense.corrects).forEach((function(e) {
                            t += e,
                            a += e
                        }
                        )),
                        Object.values(this.props.defense.incorrects).forEach((function(e) {
                            a += e
                        }
                        ));
                        var s = this.props.client && this.props.client.blook ? this.props.client.blook : Object(N.l)(T.a)
                          , i = this.props.client && this.props.client.name ? this.props.client.name : "You"
                          , o = [{
                            name: i,
                            blook: s,
                            place: Math.max(1, 30 - (this.props.defense.round - 1)),
                            round: this.props.defense.round - 1
                        }]
                          , n = o.map((function(e) {
                            return e.name
                        }
                        )).indexOf(i);
                        if (-1 !== n) {
                            var r = o[n].place;
                            if (this.stats = {
                                place: r,
                                round: this.props.defense.round - 1,
                                correctAnswers: t,
                                blookUsed: s,
                                nameUsed: i
                            },
                            this.setState({
                                numCorrect: t,
                                numQuestions: a,
                                round: this.props.defense.round - 1,
                                message: Object(I.a)((r - 1) / 30),
                                nameUsed: i,
                                ready: !this.props.defense.defenseId || this.state.ready,
                                standings: o
                            }),
                            localStorage.getItem("token")) {
                                var l = localStorage.getItem("token").split(" ");
                                2 === l.length && d.a.verify(l[1], S.a.secret, (function(t, a) {
                                    t || (e.saveStats(a.name, (function() {}
                                    )),
                                    _.a.put("/api/users/plan", {
                                        name: a.name,
                                        stripeId: a.stripe
                                    }).then((function(t) {
                                        e.here && e.setState({
                                            ready: !0,
                                            name: a.name,
                                            plus: "Starter" !== t.data.plan || e.props.client && e.props.client.plus
                                        })
                                    }
                                    )).catch((function(e) {
                                        console.error(e)
                                    }
                                    )),
                                    e.props.defense.setId && (_.a.defaults.headers.common.Authorization = localStorage.getItem("token"),
                                    _.a.put("/api/games/addplays", {
                                        gameId: e.props.defense.setId,
                                        plays: 1
                                    }).catch((function(e) {
                                        console.error(e)
                                    }
                                    ))),
                                    e.props.defense.defenseId && (_.a.defaults.headers.common.Authorization = localStorage.getItem("token"),
                                    _.a.delete("/api/defenses", {
                                        params: {
                                            name: a.name,
                                            id: e.props.defense.defenseId
                                        }
                                    }).catch((function(e) {
                                        console.error(e)
                                    }
                                    ))))
                                }
                                ))
                            }
                        }
                    }
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.props.deleteClient(),
                    this.here = !1
                }
            }, {
                key: "saveStats",
                value: function(e, t) {
                    _.a.defaults.headers.common.Authorization = localStorage.getItem("token"),
                    _.a.put("/api/users/defensestats", {
                        name: e,
                        place: this.stats.place,
                        round: this.stats.round,
                        blookUsed: this.stats.blookUsed,
                        nameUsed: this.stats.nameUsed,
                        correctAnswers: this.stats.correctAnswers
                    }).then((function() {
                        t()
                    }
                    )).catch((function(e) {
                        console.error(e)
                    }
                    ))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    if (this.props.client && this.props.client.hwId)
                        this.redirect = !1;
                    else if (localStorage.getItem("token")) {
                        var t = localStorage.getItem("token").split(" ");
                        2 === t.length ? d.a.verify(t[1], S.a.secret, (function(t) {
                            e.redirect = !!t
                        }
                        )) : this.redirect = !0
                    } else
                        this.redirect = !0;
                    if (this.redirect || !this.props.defense || "final" !== this.props.defense.stage || !this.props.defense.questions || !this.props.defense.questions[0])
                        return i.a.createElement(u.a, {
                            to: "/play"
                        });
                    var a = this.props.client && this.props.client.hwId;
                    return i.a.createElement("div", {
                        className: p.isMobile ? b.a.mBody : b.a.body,
                        style: {
                            backgroundColor: "#0bc2cf"
                        }
                    }, i.a.createElement(C.a, {
                        title: "Play Tower Defense | Blooket",
                        desc: "Answer questions to build and upgrade towers that will defend against oncoming waves of Evil Blooks."
                    }), i.a.createElement(v.a, {
                        noRight: !a,
                        rightText: "Play Again",
                        rightLink: "/play"
                    }), this.state.ready ? i.a.createElement(E.a, {
                        standings: this.state.standings,
                        name: this.state.nameUsed,
                        numCorrect: this.state.numCorrect,
                        numQuestions: this.state.numQuestions,
                        username: this.state.name,
                        plus: this.state.plus,
                        myStat: "Survived ".concat(this.state.round, " ").concat(1 === this.state.round ? "Round" : "Rounds"),
                        saveStats: this.saveStats,
                        renderStandingStat: function(e) {
                            return function(e) {
                                return i.a.createElement("div", {
                                    className: x.a.stageText
                                }, "Round ".concat(e.round))
                            }(e)
                        },
                        renderStats: function() {},
                        customMessage: this.state.message,
                        tokenMultiplier: 1000000
                    }) : null)
                }
            }]) && M(t.prototype, a),
            s && M(t, s),
            n
        }(i.a.Component);
        H.propTypes = {
            client: l.a.object,
            defense: l.a.object,
            deleteClient: l.a.func.isRequired
        };
        t.a = Object(c.a)(Object(n.b)((function(e) {
            return {
                client: e.clients.client,
                defense: e.clients.client ? e.clients.client.defense : null
            }
        }
        ), (function(e) {
            return Object(o.b)({
                deleteClient: g.a
            }, e)
        }
        ))(Object(R.c)(H)))
    },
    wQpl: function(e, t, a) {
        var s = a("YqwT");
        "string" == typeof s && (s = [[e.i, s, ""]]);
        var i = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        a("aET+")(s, i);
        s.locals && (e.exports = s.locals)
    }
}]);
//# sourceMappingURL=main~63a42da6.eb879b7dded5ab62c50b.js.map
