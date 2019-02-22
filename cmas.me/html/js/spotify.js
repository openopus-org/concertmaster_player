/*
 jQuery v1.7.1 jquery.com | jquery.org/license */
(function(f, m)
{
	function y(a)
	{
		return c.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
	}

	function w(a)
	{
		if (!Ga[a])
		{
			var o = s.body,
				b = c("<" + a + ">").appendTo(o),
				q = b.css("display");
			b.remove();
			if ("none" === q || "" === q)
			{
				ba || (ba = s.createElement("iframe"), ba.frameBorder = ba.width = ba.height = 0);
				o.appendChild(ba);
				if (!fa || !ba.createElement) fa = (ba.contentWindow || ba.contentDocument).document, fa.write(("CSS1Compat" === s.compatMode ? "<!doctype html>" : "") + "<html><body>"), fa.close();
				b = fa.createElement(a);
				fa.body.appendChild(b);
				q = c.css(b, "display");
				o.removeChild(ba)
			}
			Ga[a] = q
		}
		return Ga[a]
	}

	function p(a, o)
	{
		var b = {};
		c.each(Ha.concat.apply([], Ha.slice(0, o)), function()
		{
			b[this] = a
		});
		return b
	}

	function j()
	{
		b = m
	}

	function l()
	{
		setTimeout(j, 0);
		return b = c.now()
	}

	function v()
	{
		try
		{
			return new f.XMLHttpRequest
		}
		catch (a)
		{}
	}

	function x(a, o, b, q)
	{
		if (c.isArray(o)) c.each(o, function(o, e)
		{
			b || qb.test(a) ? q(a, e) : x(a + "[" + ("object" == typeof e || c.isArray(e) ? o : "") + "]", e, b, q)
		});
		else if (!b && null != o && "object" == typeof o)
			for (var e in o) x(a + "[" + e + "]", o[e], b, q);
		else q(a,
			o)
	}

	function t(a, o)
	{
		var b, q, e = c.ajaxSettings.flatOptions ||
		{};
		for (b in o) o[b] !== m && ((e[b] ? a : q || (q = {}))[b] = o[b]);
		q && c.extend(!0, a, q)
	}

	function r(a, c, b, q, e, g)
	{
		e = e || c.dataTypes[0];
		g = g ||
		{};
		g[e] = !0;
		for (var e = a[e], d = 0, f = e ? e.length : 0, h = a === ga, i; d < f && (h || !i); d++) i = e[d](c, b, q), "string" == typeof i && (!h || g[i] ? i = m : (c.dataTypes.unshift(i), i = r(a, c, b, q, i, g)));
		(h || !i) && !g["*"] && (i = r(a, c, b, q, "*", g));
		return i
	}

	function k(a)
	{
		return function(o, b)
		{
			"string" != typeof o && (b = o, o = "*");
			if (c.isFunction(b))
				for (var e = o.toLowerCase().split(Ia),
						g = 0, A = e.length, d, f; g < A; g++) d = e[g], (f = /^\+/.test(d)) && (d = d.substr(1) || "*"), d = a[d] = a[d] || [], d[f ? "unshift" : "push"](b)
		}
	}

	function d(a, o, b)
	{
		var e = "width" === o ? a.offsetWidth : a.offsetHeight,
			g = "width" === o ? Wa : Xa,
			A = 0,
			d = g.length;
		if (0 < e)
		{
			if ("border" !== b)
				for (; A < d; A++) b || (e -= parseFloat(c.css(a, "padding" + g[A])) || 0), "margin" === b ? e += parseFloat(c.css(a, b + g[A])) || 0 : e -= parseFloat(c.css(a, "border" + g[A] + "Width")) || 0;
			return e + "px"
		}
		e = pa(a, o, o);
		if (0 > e || null == e) e = a.style[o] || 0;
		e = parseFloat(e) || 0;
		if (b)
			for (; A < d; A++) e += parseFloat(c.css(a,
				"padding" + g[A])) || 0, "padding" !== b && (e += parseFloat(c.css(a, "border" + g[A] + "Width")) || 0), "margin" === b && (e += parseFloat(c.css(a, b + g[A])) || 0);
		return e + "px"
	}

	function h(a, o)
	{
		o.src ? c.ajax(
		{
			url: o.src,
			async: !1,
			dataType: "script"
		}) : c.globalEval((o.text || o.textContent || o.innerHTML || "").replace(Ja, "/*$0*/"));
		o.parentNode && o.parentNode.removeChild(o)
	}

	function i(a)
	{
		var o = (a.nodeName || "").toLowerCase();
		"input" === o ? n(a) : "script" !== o && "undefined" != typeof a.getElementsByTagName && c.grep(a.getElementsByTagName("input"),
			n)
	}

	function n(a)
	{
		if ("checkbox" === a.type || "radio" === a.type) a.defaultChecked = a.checked
	}

	function B(a)
	{
		return "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName("*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll("*") : []
	}

	function J(a, o)
	{
		var b;
		if (1 === o.nodeType)
		{
			o.clearAttributes && o.clearAttributes();
			o.mergeAttributes && o.mergeAttributes(a);
			b = o.nodeName.toLowerCase();
			if ("object" === b) o.outerHTML = a.outerHTML;
			else if ("input" !== b || "checkbox" !== a.type && "radio" !== a.type)
				if ("option" ===
					b) o.selected = a.defaultSelected;
				else
				{
					if ("input" === b || "textarea" === b) o.defaultValue = a.defaultValue
				}
			else a.checked && (o.defaultChecked = o.checked = a.checked), o.value !== a.value && (o.value = a.value);
			o.removeAttribute(c.expando)
		}
	}

	function z(a, o)
	{
		if (1 === o.nodeType && c.hasData(a))
		{
			var b, e, g;
			e = c._data(a);
			var A = c._data(o, e),
				d = e.events;
			if (d)
				for (b in delete A.handle, A.events = {}, d)
				{
					e = 0;
					for (g = d[b].length; e < g; e++) c.event.add(o, b + (d[b][e].namespace ? "." : "") + d[b][e].namespace, d[b][e], d[b][e].data)
				}
			A.data && (A.data = c.extend(
				{},
				A.data))
		}
	}

	function E(a)
	{
		var c = Ya.split("|"),
			a = a.createDocumentFragment();
		if (a.createElement)
			for (; c.length;) a.createElement(c.pop());
		return a
	}

	function D(a, o, b)
	{
		o = o || 0;
		if (c.isFunction(o)) return c.grep(a, function(a, c)
		{
			return !!o.call(a, c, a) === b
		});
		if (o.nodeType) return c.grep(a, function(a)
		{
			return a === o === b
		});
		if ("string" == typeof o)
		{
			var e = c.grep(a, function(a)
			{
				return 1 === a.nodeType
			});
			if (rb.test(o)) return c.filter(o, e, !b);
			o = c.filter(o, e)
		}
		return c.grep(a, function(a)
		{
			return 0 <= c.inArray(a, o) === b
		})
	}

	function C()
	{
		return !0
	}

	function U()
	{
		return !1
	}

	function F(a, o, b)
	{
		var e = o + "defer",
			g = o + "queue",
			A = o + "mark",
			d = c._data(a, e);
		d && ("queue" === b || !c._data(a, g)) && ("mark" === b || !c._data(a, A)) && setTimeout(function()
		{
			!c._data(a, g) && !c._data(a, A) && (c.removeData(a, e, !0), d.fire())
		}, 0)
	}

	function R(a)
	{
		for (var o in a)
			if (!("data" === o && c.isEmptyObject(a[o])) && "toJSON" !== o) return !1;
		return !0
	}

	function ca(a, o, b)
	{
		if (b === m && 1 === a.nodeType)
			if (b = "data-" + o.replace(da, "-$1").toLowerCase(), b = a.getAttribute(b), "string" == typeof b)
			{
				try
				{
					b = "true" === b ? !0 : "false" ===
						b ? !1 : "null" === b ? null : c.isNumeric(b) ? parseFloat(b) : S.test(b) ? c.parseJSON(b) : b
				}
				catch (e)
				{}
				c.data(a, o, b)
			}
		else b = m;
		return b
	}

	function V(a)
	{
		var c = L[a] = {},
			b, e, a = a.split(/\s+/);
		b = 0;
		for (e = a.length; b < e; b++) c[a[b]] = !0;
		return c
	}
	var s = f.document,
		$ = f.navigator,
		T = f.location,
		c = function()
		{
			function a()
			{
				if (!c.isReady)
				{
					try
					{
						s.documentElement.doScroll("left")
					}
					catch (b)
					{
						setTimeout(a, 1);
						return
					}
					c.ready()
				}
			}
			var c = function(a, b)
				{
					return new c.fn.init(a, b, g)
				},
				b = f.jQuery,
				e = f.$,
				g, A = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
				d = /\S/,
				h = /^\s+/,
				i = /\s+$/,
				k = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
				n = /^[\],:{}\s]*$/,
				l = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
				j = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
				p = /(?:^|:|,)(?:\s*\[)+/g,
				r = /(webkit)[ \/]([\w.]+)/,
				t = /(opera)(?:.*version)?[ \/]([\w.]+)/,
				G = /(msie) ([\w.]+)/,
				O = /(mozilla)(?:.*? rv:([\w.]+))?/,
				x = /-([a-z]|[0-9])/ig,
				B = /^-ms-/,
				H = function(a, c)
				{
					return (c + "").toUpperCase()
				},
				v = $.userAgent,
				ka, Ca, Qb = Object.prototype.toString,
				sb = Object.prototype.hasOwnProperty,
				tb = Array.prototype.push,
				Ka = Array.prototype.slice,
				E = String.prototype.trim,
				Nb = Array.prototype.indexOf,
				Ob = {};
			c.fn = c.prototype = {
				constructor: c,
				init: function(a, b, e)
				{
					var u, q;
					if (!a) return this;
					if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
					if ("body" === a && !b && s.body) return this.context = s, this[0] = s.body, this.selector = a, this.length = 1, this;
					if ("string" == typeof a)
					{
						"<" !== a.charAt(0) || ">" !== a.charAt(a.length - 1) || 3 > a.length ? u = A.exec(a) : u = [null, a, null];
						if (u && (u[1] || !b))
						{
							if (u[1]) return q = (b = b instanceof c ? b[0] : b) ? b.ownerDocument ||
								b : s, (e = k.exec(a)) ? c.isPlainObject(b) ? (a = [s.createElement(e[1])], c.fn.attr.call(a, b, !0)) : a = [q.createElement(e[1])] : (e = c.buildFragment([u[1]], [q]), a = (e.cacheable ? c.clone(e.fragment) : e.fragment).childNodes), c.merge(this, a);
							if ((b = s.getElementById(u[2])) && b.parentNode)
							{
								if (b.id !== u[2]) return e.find(a);
								this.length = 1;
								this[0] = b
							}
							this.context = s;
							this.selector = a;
							return this
						}
						return !b || b.jquery ? (b || e).find(a) : this.constructor(b).find(a)
					}
					if (c.isFunction(a)) return e.ready(a);
					a.selector !== m && (this.selector = a.selector,
						this.context = a.context);
					return c.makeArray(a, this)
				},
				selector: "",
				jquery: "1.7.1",
				length: 0,
				size: function()
				{
					return this.length
				},
				toArray: function()
				{
					return Ka.call(this, 0)
				},
				get: function(a)
				{
					return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
				},
				pushStack: function(a, b, e)
				{
					var u = this.constructor();
					c.isArray(a) ? tb.apply(u, a) : c.merge(u, a);
					u.prevObject = this;
					u.context = this.context;
					"find" === b ? u.selector = this.selector + (this.selector ? " " : "") + e : b && (u.selector = this.selector + "." + b + "(" + e + ")");
					return u
				},
				each: function(a,
					b)
				{
					return c.each(this, a, b)
				},
				ready: function(a)
				{
					c.bindReady();
					ka.add(a);
					return this
				},
				eq: function(a)
				{
					a = +a;
					return -1 === a ? this.slice(a) : this.slice(a, a + 1)
				},
				first: function()
				{
					return this.eq(0)
				},
				last: function()
				{
					return this.eq(-1)
				},
				slice: function()
				{
					return this.pushStack(Ka.apply(this, arguments), "slice", Ka.call(arguments).join(","))
				},
				map: function(a)
				{
					return this.pushStack(c.map(this, function(c, o)
					{
						return a.call(c, o, c)
					}))
				},
				end: function()
				{
					return this.prevObject || this.constructor(null)
				},
				push: tb,
				sort: [].sort,
				splice: [].splice
			};
			c.fn.init.prototype = c.fn;
			c.extend = c.fn.extend = function()
			{
				var a, b, e, u, q, g, I = arguments[0] ||
					{},
					A = 1,
					d = arguments.length,
					f = !1;
				"boolean" == typeof I && (f = I, I = arguments[1] ||
				{}, A = 2);
				"object" != typeof I && !c.isFunction(I) && (I = {});
				for (d === A && (I = this, --A); A < d; A++)
					if (null != (a = arguments[A]))
						for (b in a) e = I[b], u = a[b], I !== u && (f && u && (c.isPlainObject(u) || (q = c.isArray(u))) ? (q ? (q = !1, g = e && c.isArray(e) ? e : []) : g = e && c.isPlainObject(e) ? e :
						{}, I[b] = c.extend(f, g, u)) : u !== m && (I[b] = u));
				return I
			};
			c.extend(
			{
				noConflict: function(a)
				{
					f.$ ===
						c && (f.$ = e);
					a && f.jQuery === c && (f.jQuery = b);
					return c
				},
				isReady: !1,
				readyWait: 1,
				holdReady: function(a)
				{
					a ? c.readyWait++ : c.ready(!0)
				},
				ready: function(a)
				{
					if (!0 === a && !--c.readyWait || !0 !== a && !c.isReady)
					{
						if (!s.body) return setTimeout(c.ready, 1);
						c.isReady = !0;
						!0 !== a && 0 < --c.readyWait || (ka.fireWith(s, [c]), c.fn.trigger && c(s).trigger("ready").off("ready"))
					}
				},
				bindReady: function()
				{
					if (!ka)
					{
						ka = c.Callbacks("once memory");
						if ("complete" === s.readyState) return setTimeout(c.ready, 1);
						if (s.addEventListener) s.addEventListener("DOMContentLoaded",
							Ca, !1), f.addEventListener("load", c.ready, !1);
						else if (s.attachEvent)
						{
							s.attachEvent("onreadystatechange", Ca);
							f.attachEvent("onload", c.ready);
							var b = !1;
							try
							{
								b = null == f.frameElement
							}
							catch (e)
							{}
							s.documentElement.doScroll && b && a()
						}
					}
				},
				isFunction: function(a)
				{
					return "function" === c.type(a)
				},
				isArray: Array.isArray || function(a)
				{
					return "array" === c.type(a)
				},
				isWindow: function(a)
				{
					return a && "object" == typeof a && "setInterval" in a
				},
				isNumeric: function(a)
				{
					return !isNaN(parseFloat(a)) && isFinite(a)
				},
				type: function(a)
				{
					return null ==
						a ? "" + a : Ob[Qb.call(a)] || "object"
				},
				isPlainObject: function(a)
				{
					if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a)) return !1;
					try
					{
						if (a.constructor && !sb.call(a, "constructor") && !sb.call(a.constructor.prototype, "isPrototypeOf")) return !1
					}
					catch (b)
					{
						return !1
					}
					for (var e in a);
					return e === m || sb.call(a, e)
				},
				isEmptyObject: function(a)
				{
					for (var c in a) return !1;
					return !0
				},
				error: function(a)
				{
					throw Error(a);
				},
				parseJSON: function(a)
				{
					if ("string" != typeof a || !a) return null;
					a = c.trim(a);
					if (f.JSON && f.JSON.parse) return f.JSON.parse(a);
					if (n.test(a.replace(l, "@").replace(j, "]").replace(p, ""))) return (new Function("return " + a))();
					c.error("Invalid JSON: " + a)
				},
				parseXML: function(a)
				{
					var b, e;
					try
					{
						f.DOMParser ? (e = new DOMParser, b = e.parseFromString(a, "text/xml")) : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a))
					}
					catch (u)
					{
						b = m
					}(!b || !b.documentElement || b.getElementsByTagName("parsererror").length) && c.error("Invalid XML: " + a);
					return b
				},
				noop: function() {},
				globalEval: function(a)
				{
					a && d.test(a) && (f.execScript || function(a)
					{
						f.eval.call(f,
							a)
					})(a)
				},
				camelCase: function(a)
				{
					return a.replace(B, "ms-").replace(x, H)
				},
				nodeName: function(a, c)
				{
					return a.nodeName && a.nodeName.toUpperCase() === c.toUpperCase()
				},
				each: function(a, b, e)
				{
					var u, q = 0,
						g = a.length,
						I = g === m || c.isFunction(a);
					if (e)
						if (I)
							for (u in a)
							{
								if (!1 === b.apply(a[u], e)) break
							}
					else
						for (; q < g && !1 !== b.apply(a[q++], e););
					else if (I)
						for (u in a)
						{
							if (!1 === b.call(a[u], u, a[u])) break
						}
					else
						for (; q < g && !1 !== b.call(a[q], q, a[q++]););
					return a
				},
				trim: E ? function(a)
				{
					return null == a ? "" : E.call(a)
				} : function(a)
				{
					return null == a ?
						"" : (a + "").replace(h, "").replace(i, "")
				},
				makeArray: function(a, b)
				{
					var e = b || [];
					if (null != a)
					{
						var u = c.type(a);
						null == a.length || "string" === u || "function" === u || "regexp" === u || c.isWindow(a) ? tb.call(e, a) : c.merge(e, a)
					}
					return e
				},
				inArray: function(a, c, o)
				{
					var b;
					if (c)
					{
						if (Nb) return Nb.call(c, a, o);
						b = c.length;
						for (o = o ? 0 > o ? Math.max(0, b + o) : o : 0; o < b; o++)
							if (o in c && c[o] === a) return o
					}
					return -1
				},
				merge: function(a, c)
				{
					var o = a.length,
						b = 0;
					if ("number" == typeof c.length)
						for (var e = c.length; b < e; b++) a[o++] = c[b];
					else
						for (; c[b] !== m;) a[o++] =
							c[b++];
					a.length = o;
					return a
				},
				grep: function(a, c, o)
				{
					for (var b = [], e, o = !!o, u = 0, q = a.length; u < q; u++) e = !!c(a[u], u), o !== e && b.push(a[u]);
					return b
				},
				map: function(a, b, e)
				{
					var u, q, g = [],
						I = 0,
						A = a.length;
					if (a instanceof c || A !== m && "number" == typeof A && (0 < A && a[0] && a[A - 1] || 0 === A || c.isArray(a)))
						for (; I < A; I++) u = b(a[I], I, e), null != u && (g[g.length] = u);
					else
						for (q in a) u = b(a[q], q, e), null != u && (g[g.length] = u);
					return g.concat.apply([], g)
				},
				guid: 1,
				proxy: function(a, b)
				{
					if ("string" == typeof b) var e = a[b],
						b = a,
						a = e;
					if (!c.isFunction(a)) return m;
					var u = Ka.call(arguments, 2),
						e = function()
						{
							return a.apply(b, u.concat(Ka.call(arguments)))
						};
					e.guid = a.guid = a.guid || e.guid || c.guid++;
					return e
				},
				access: function(a, b, e, u, q, g)
				{
					var I = a.length;
					if ("object" == typeof b)
					{
						for (var A in b) c.access(a, A, b[A], u, q, e);
						return a
					}
					if (e !== m)
					{
						u = !g && u && c.isFunction(e);
						for (A = 0; A < I; A++) q(a[A], b, u ? e.call(a[A], A, q(a[A], b)) : e, g);
						return a
					}
					return I ? q(a[0], b) : m
				},
				now: function()
				{
					return (new Date).getTime()
				},
				uaMatch: function(a)
				{
					a = a.toLowerCase();
					a = r.exec(a) || t.exec(a) || G.exec(a) || 0 > a.indexOf("compatible") &&
						O.exec(a) || [];
					return {
						browser: a[1] || "",
						version: a[2] || "0"
					}
				},
				sub: function()
				{
					function a(c, o)
					{
						return new a.fn.init(c, o)
					}
					c.extend(!0, a, this);
					a.superclass = this;
					a.fn = a.prototype = this();
					a.fn.constructor = a;
					a.sub = this.sub;
					a.fn.init = function(e, u)
					{
						u && u instanceof c && !(u instanceof a) && (u = a(u));
						return c.fn.init.call(this, e, u, b)
					};
					a.fn.init.prototype = a.fn;
					var b = a(s);
					return a
				},
				browser:
				{}
			});
			c.each("Boolean,Number,String,Function,Array,Date,RegExp,Object".split(","), function(a, c)
			{
				Ob["[object " + c + "]"] = c.toLowerCase()
			});
			v = c.uaMatch(v);
			v.browser && (c.browser[v.browser] = !0, c.browser.version = v.version);
			c.browser.webkit && (c.browser.safari = !0);
			d.test("\u00a0") && (h = /^[\s\xA0]+/, i = /[\s\xA0]+$/);
			g = c(s);
			s.addEventListener ? Ca = function()
			{
				s.removeEventListener("DOMContentLoaded", Ca, !1);
				c.ready()
			} : s.attachEvent && (Ca = function()
			{
				"complete" === s.readyState && (s.detachEvent("onreadystatechange", Ca), c.ready())
			});
			return c
		}(),
		L = {};
	c.Callbacks = function(a)
	{
		var a = a ? L[a] || V(a) :
			{},
			o = [],
			b = [],
			e, g, A, d, f, h = function(b)
			{
				var e, u, q, g;
				e = 0;
				for (u = b.length; e <
					u; e++) q = b[e], g = c.type(q), "array" === g ? h(q) : "function" === g && (!a.unique || !k.has(q)) && o.push(q)
			},
			i = function(c, h)
			{
				h = h || [];
				e = !a.memory || [c, h];
				g = !0;
				f = A || 0;
				A = 0;
				for (d = o.length; o && f < d; f++)
					if (!1 === o[f].apply(c, h) && a.stopOnFalse)
					{
						e = !0;
						break
					}
				g = !1;
				o && (a.once ? !0 === e ? k.disable() : o = [] : b && b.length && (e = b.shift(), k.fireWith(e[0], e[1])))
			},
			k = {
				add: function()
				{
					if (o)
					{
						var a = o.length;
						h(arguments);
						g ? d = o.length : e && !0 !== e && (A = a, i(e[0], e[1]))
					}
					return this
				},
				remove: function()
				{
					if (o)
						for (var c = arguments, b = 0, e = c.length; b < e; b++)
							for (var u =
									0; u < o.length && !(c[b] === o[u] && (g && u <= d && (d--, u <= f && f--), o.splice(u--, 1), a.unique)); u++);
					return this
				},
				has: function(a)
				{
					if (o)
						for (var c = 0, b = o.length; c < b; c++)
							if (a === o[c]) return !0;
					return !1
				},
				empty: function()
				{
					o = [];
					return this
				},
				disable: function()
				{
					o = b = e = m;
					return this
				},
				disabled: function()
				{
					return !o
				},
				lock: function()
				{
					b = m;
					(!e || !0 === e) && k.disable();
					return this
				},
				locked: function()
				{
					return !b
				},
				fireWith: function(c, o)
				{
					b && (g ? a.once || b.push([c, o]) : (!a.once || !e) && i(c, o));
					return this
				},
				fire: function()
				{
					k.fireWith(this, arguments);
					return this
				},
				fired: function()
				{
					return !!e
				}
			};
		return k
	};
	var M = [].slice;
	c.extend(
	{
		Deferred: function(a)
		{
			var b = c.Callbacks("once memory"),
				e = c.Callbacks("once memory"),
				q = c.Callbacks("memory"),
				g = "pending",
				A = {
					resolve: b,
					reject: e,
					notify: q
				},
				d = {
					done: b.add,
					fail: e.add,
					progress: q.add,
					state: function()
					{
						return g
					},
					isResolved: b.fired,
					isRejected: e.fired,
					then: function(a, c, b)
					{
						f.done(a).fail(c).progress(b);
						return this
					},
					always: function()
					{
						f.done.apply(f, arguments).fail.apply(f, arguments);
						return this
					},
					pipe: function(a, b, o)
					{
						return c.Deferred(function(e)
						{
							c.each(
							{
								done: [a,
									"resolve"
								],
								fail: [b, "reject"],
								progress: [o, "notify"]
							}, function(a, b)
							{
								var o = b[0],
									u = b[1],
									q;
								c.isFunction(o) ? f[a](function()
								{
									(q = o.apply(this, arguments)) && c.isFunction(q.promise) ? q.promise().then(e.resolve, e.reject, e.notify) : e[u + "With"](this === f ? e : this, [q])
								}) : f[a](e[u])
							})
						}).promise()
					},
					promise: function(a)
					{
						if (null == a) a = d;
						else
							for (var c in d) a[c] = d[c];
						return a
					}
				},
				f = d.promise(
				{}),
				h;
			for (h in A) f[h] = A[h].fire, f[h + "With"] = A[h].fireWith;
			f.done(function()
			{
				g = "resolved"
			}, e.disable, q.lock).fail(function()
				{
					g = "rejected"
				},
				b.disable, q.lock);
			a && a.call(f, f);
			return f
		},
		when: function(a)
		{
			function b(a)
			{
				return function(c)
				{
					d[a] = 1 < arguments.length ? M.call(arguments, 0) : c;
					h.notifyWith(i, d)
				}
			}

			function e(a)
			{
				return function(c)
				{
					q[a] = 1 < arguments.length ? M.call(arguments, 0) : c;
					--f || h.resolveWith(h, q)
				}
			}
			var q = M.call(arguments, 0),
				g = 0,
				A = q.length,
				d = Array(A),
				f = A,
				h = 1 >= A && a && c.isFunction(a.promise) ? a : c.Deferred(),
				i = h.promise();
			if (1 < A)
			{
				for (; g < A; g++) q[g] && q[g].promise && c.isFunction(q[g].promise) ? q[g].promise().then(e(g), h.reject, b(g)) : --f;
				f || h.resolveWith(h,
					q)
			}
			else h !== a && h.resolveWith(h, A ? [a] : []);
			return i
		}
	});
	c.support = function()
	{
		var a, b, e, q, g, A, d, h, i, k = s.createElement("div");
		k.setAttribute("className", "t");
		k.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
		b = k.getElementsByTagName("*");
		e = k.getElementsByTagName("a")[0];
		if (!b || !b.length || !e) return {};
		q = s.createElement("select");
		g = q.appendChild(s.createElement("option"));
		b = k.getElementsByTagName("input")[0];
		a = {
			leadingWhitespace: 3 ===
				k.firstChild.nodeType,
			tbody: !k.getElementsByTagName("tbody").length,
			htmlSerialize: !!k.getElementsByTagName("link").length,
			style: /top/.test(e.getAttribute("style")),
			hrefNormalized: "/a" === e.getAttribute("href"),
			opacity: /^0.55/.test(e.style.opacity),
			cssFloat: !!e.style.cssFloat,
			checkOn: "on" === b.value,
			optSelected: g.selected,
			getSetAttribute: "t" !== k.className,
			enctype: !!s.createElement("form").enctype,
			html5Clone: "<:nav></:nav>" !== s.createElement("nav").cloneNode(!0).outerHTML,
			submitBubbles: !0,
			changeBubbles: !0,
			focusinBubbles: !1,
			deleteExpando: !0,
			noCloneEvent: !0,
			inlineBlockNeedsLayout: !1,
			shrinkWrapBlocks: !1,
			reliableMarginRight: !0
		};
		b.checked = !0;
		a.noCloneChecked = b.cloneNode(!0).checked;
		q.disabled = !0;
		a.optDisabled = !g.disabled;
		try
		{
			delete k.test
		}
		catch (n)
		{
			a.deleteExpando = !1
		}!k.addEventListener && k.attachEvent && k.fireEvent && (k.attachEvent("onclick", function()
		{
			a.noCloneEvent = !1
		}), k.cloneNode(!0).fireEvent("onclick"));
		b = s.createElement("input");
		b.value = "t";
		b.setAttribute("type", "radio");
		a.radioValue = "t" === b.value;
		b.setAttribute("checked", "checked");
		k.appendChild(b);
		e = s.createDocumentFragment();
		e.appendChild(k.lastChild);
		a.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked;
		a.appendChecked = b.checked;
		e.removeChild(b);
		e.appendChild(k);
		k.innerHTML = "";
		f.getComputedStyle && (A = s.createElement("div"), A.style.width = "0", A.style.marginRight = "0", k.style.width = "2px", k.appendChild(A), a.reliableMarginRight = 0 === (parseInt((f.getComputedStyle(A, null) ||
		{
			marginRight: 0
		}).marginRight, 10) || 0));
		if (k.attachEvent)
			for (h in
				{
					submit: 1,
					change: 1,
					focusin: 1
				}) A = "on" + h, (i = A in k) || (k.setAttribute(A, "return;"), i = "function" == typeof k[A]), a[h + "Bubbles"] = i;
		e.removeChild(k);
		e = q = g = A = k = b = null;
		c(function()
		{
			var b, o, e, u, q, g = s.getElementsByTagName("body")[0];
			!g || (b = s.createElement("div"), b.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", g.insertBefore(b, g.firstChild), k = s.createElement("div"), b.appendChild(k), k.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",
				d = k.getElementsByTagName("td"), i = 0 === d[0].offsetHeight, d[0].style.display = "", d[1].style.display = "none", a.reliableHiddenOffsets = i && 0 === d[0].offsetHeight, k.innerHTML = "", k.style.width = k.style.paddingLeft = "1px", c.boxModel = a.boxModel = 2 === k.offsetWidth, "undefined" != typeof k.style.zoom && (k.style.display = "inline", k.style.zoom = 1, a.inlineBlockNeedsLayout = 2 === k.offsetWidth, k.style.display = "", k.innerHTML = "<div style='width:4px;'></div>", a.shrinkWrapBlocks = 2 !== k.offsetWidth), k.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;visibility:hidden;border:0;",
				k.innerHTML = "<div style='position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;'><div></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", o = k.firstChild, e = o.firstChild, u = o.nextSibling.firstChild.firstChild, q = {
					doesNotAddBorder: 5 !== e.offsetTop,
					doesAddBorderForTableAndCells: 5 === u.offsetTop
				}, e.style.position = "fixed", e.style.top = "20px",
				q.fixedPosition = 20 === e.offsetTop || 15 === e.offsetTop, e.style.position = e.style.top = "", o.style.overflow = "hidden", o.style.position = "relative", q.subtractsBorderForOverflowNotVisible = -5 === e.offsetTop, q.doesNotIncludeMarginInBodyOffset = 1 !== g.offsetTop, g.removeChild(b), k = null, c.extend(a, q))
		});
		return a
	}();
	var S = /^(?:\{.*\}|\[.*\])$/,
		da = /([A-Z])/g;
	c.extend(
	{
		cache:
		{},
		uuid: 0,
		expando: "jQuery" + (c.fn.jquery + Math.random()).replace(/\D/g, ""),
		noData:
		{
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet: !0
		},
		hasData: function(a)
		{
			a = a.nodeType ? c.cache[a[c.expando]] : a[c.expando];
			return !!a && !R(a)
		},
		data: function(a, b, e, q)
		{
			if (c.acceptData(a))
			{
				var g, A;
				g = c.expando;
				var d = "string" == typeof b,
					f = a.nodeType,
					h = f ? c.cache : a,
					i = f ? a[g] : a[g] && g,
					k = "events" === b;
				if (i && h[i] && (k || q || h[i].data) || !(d && e === m))
				{
					i || (f ? a[g] = i = ++c.uuid : i = g);
					h[i] || (h[i] = {}, f || (h[i].toJSON = c.noop));
					if ("object" == typeof b || "function" == typeof b) q ? h[i] = c.extend(h[i], b) : h[i].data = c.extend(h[i].data, b);
					a = g = h[i];
					q || (g.data || (g.data = {}), g = g.data);
					e !== m && (g[c.camelCase(b)] =
						e);
					if (k && !g[b]) return a.events;
					d ? (A = g[b], null == A && (A = g[c.camelCase(b)])) : A = g;
					return A
				}
			}
		},
		removeData: function(a, b, e)
		{
			if (c.acceptData(a))
			{
				var q, g, A, d = c.expando,
					f = a.nodeType,
					h = f ? c.cache : a,
					i = f ? a[d] : d;
				if (h[i])
				{
					if (b && (q = e ? h[i] : h[i].data))
					{
						c.isArray(b) || (b in q ? b = [b] : (b = c.camelCase(b), b in q ? b = [b] : b = b.split(" ")));
						g = 0;
						for (A = b.length; g < A; g++) delete q[b[g]];
						if (!(e ? R : c.isEmptyObject)(q)) return
					}
					if (!e && (delete h[i].data, !R(h[i]))) return;
					c.support.deleteExpando || !h.setInterval ? delete h[i] : h[i] = null;
					f && (c.support.deleteExpando ?
						delete a[d] : a.removeAttribute ? a.removeAttribute(d) : a[d] = null)
				}
			}
		},
		_data: function(a, b, e)
		{
			return c.data(a, b, e, !0)
		},
		acceptData: function(a)
		{
			if (a.nodeName)
			{
				var b = c.noData[a.nodeName.toLowerCase()];
				if (b) return !0 !== b && a.getAttribute("classid") === b
			}
			return !0
		}
	});
	c.fn.extend(
	{
		data: function(a, b)
		{
			var e, q, g, d = null;
			if ("undefined" == typeof a)
			{
				if (this.length && (d = c.data(this[0]), 1 === this[0].nodeType && !c._data(this[0], "parsedAttrs")))
				{
					q = this[0].attributes;
					for (var f = 0, h = q.length; f < h; f++) g = q[f].name, 0 === g.indexOf("data-") &&
						(g = c.camelCase(g.substring(5)), ca(this[0], g, d[g]));
					c._data(this[0], "parsedAttrs", !0)
				}
				return d
			}
			if ("object" == typeof a) return this.each(function()
			{
				c.data(this, a)
			});
			e = a.split(".");
			e[1] = e[1] ? "." + e[1] : "";
			return b === m ? (d = this.triggerHandler("getData" + e[1] + "!", [e[0]]), d === m && this.length && (d = c.data(this[0], a), d = ca(this[0], a, d)), d === m && e[1] ? this.data(e[0]) : d) : this.each(function()
			{
				var q = c(this),
					g = [e[0], b];
				q.triggerHandler("setData" + e[1] + "!", g);
				c.data(this, a, b);
				q.triggerHandler("changeData" + e[1] + "!", g)
			})
		},
		removeData: function(a)
		{
			return this.each(function()
			{
				c.removeData(this,
					a)
			})
		}
	});
	c.extend(
	{
		_mark: function(a, b)
		{
			a && (b = (b || "fx") + "mark", c._data(a, b, (c._data(a, b) || 0) + 1))
		},
		_unmark: function(a, b, e)
		{
			!0 !== a && (e = b, b = a, a = !1);
			if (b)
			{
				var e = e || "fx",
					q = e + "mark";
				(a = a ? 0 : (c._data(b, q) || 1) - 1) ? c._data(b, q, a): (c.removeData(b, q, !0), F(b, e, "mark"))
			}
		},
		queue: function(a, b, e)
		{
			var q;
			if (a) return b = (b || "fx") + "queue", q = c._data(a, b), e && (!q || c.isArray(e) ? q = c._data(a, b, c.makeArray(e)) : q.push(e)), q || []
		},
		dequeue: function(a, b)
		{
			var b = b || "fx",
				e = c.queue(a, b),
				q = e.shift(),
				g = {};
			"inprogress" === q && (q = e.shift());
			q &&
				("fx" === b && e.unshift("inprogress"), c._data(a, b + ".run", g), q.call(a, function()
				{
					c.dequeue(a, b)
				}, g));
			e.length || (c.removeData(a, b + "queue " + b + ".run", !0), F(a, b, "queue"))
		}
	});
	c.fn.extend(
	{
		queue: function(a, b)
		{
			"string" != typeof a && (b = a, a = "fx");
			return b === m ? c.queue(this[0], a) : this.each(function()
			{
				var e = c.queue(this, a, b);
				"fx" === a && "inprogress" !== e[0] && c.dequeue(this, a)
			})
		},
		dequeue: function(a)
		{
			return this.each(function()
			{
				c.dequeue(this, a)
			})
		},
		delay: function(a, b)
		{
			a = c.fx ? c.fx.speeds[a] || a : a;
			return this.queue(b || "fx",
				function(c, b)
				{
					var o = setTimeout(c, a);
					b.stop = function()
					{
						clearTimeout(o)
					}
				})
		},
		clearQueue: function(a)
		{
			return this.queue(a || "fx", [])
		},
		promise: function(a)
		{
			function b()
			{
				--d || e.resolveWith(q, [q])
			}
			"string" != typeof a && (a = m);
			for (var a = a || "fx", e = c.Deferred(), q = this, g = q.length, d = 1, f = a + "defer", h = a + "queue", a = a + "mark", i; g--;)
				if (i = c.data(q[g], f, m, !0) || (c.data(q[g], h, m, !0) || c.data(q[g], a, m, !0)) && c.data(q[g], f, c.Callbacks("once memory"), !0)) d++, i.add(b);
			b();
			return e.promise()
		}
	});
	var la = /[\n\t\r]/g,
		Z = /\s+/,
		ha = /\r/g,
		ia =
		/^(?:button|input)$/i,
		va = /^(?:button|input|object|select|textarea)$/i,
		ra = /^a(?:rea)?$/i,
		K = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
		N = c.support.getSetAttribute,
		Q, ma, Da;
	c.fn.extend(
	{
		attr: function(a, b)
		{
			return c.access(this, a, b, !0, c.attr)
		},
		removeAttr: function(a)
		{
			return this.each(function()
			{
				c.removeAttr(this, a)
			})
		},
		prop: function(a, b)
		{
			return c.access(this, a, b, !0, c.prop)
		},
		removeProp: function(a)
		{
			a = c.propFix[a] || a;
			return this.each(function()
			{
				try
				{
					this[a] =
						m, delete this[a]
				}
				catch (c)
				{}
			})
		},
		addClass: function(a)
		{
			var b, e, q, g, d, f, h;
			if (c.isFunction(a)) return this.each(function(b)
			{
				c(this).addClass(a.call(this, b, this.className))
			});
			if (a && "string" == typeof a)
			{
				b = a.split(Z);
				e = 0;
				for (q = this.length; e < q; e++)
					if (g = this[e], 1 === g.nodeType)
						if (!g.className && 1 === b.length) g.className = a;
						else
						{
							d = " " + g.className + " ";
							f = 0;
							for (h = b.length; f < h; f++) ~d.indexOf(" " + b[f] + " ") || (d += b[f] + " ");
							g.className = c.trim(d)
						}
			}
			return this
		},
		removeClass: function(a)
		{
			var b, e, q, g, d, f, h;
			if (c.isFunction(a)) return this.each(function(b)
			{
				c(this).removeClass(a.call(this,
					b, this.className))
			});
			if (a && "string" == typeof a || a === m)
			{
				b = (a || "").split(Z);
				e = 0;
				for (q = this.length; e < q; e++)
					if (g = this[e], 1 === g.nodeType && g.className)
						if (a)
						{
							d = (" " + g.className + " ").replace(la, " ");
							f = 0;
							for (h = b.length; f < h; f++) d = d.replace(" " + b[f] + " ", " ");
							g.className = c.trim(d)
						}
				else g.className = ""
			}
			return this
		},
		toggleClass: function(a, b)
		{
			var e = typeof a,
				q = "boolean" == typeof b;
			return c.isFunction(a) ? this.each(function(e)
			{
				c(this).toggleClass(a.call(this, e, this.className, b), b)
			}) : this.each(function()
			{
				if ("string" ===
					e)
					for (var g, d = 0, f = c(this), h = b, i = a.split(Z); g = i[d++];) h = q ? h : !f.hasClass(g), f[h ? "addClass" : "removeClass"](g);
				else if ("undefined" === e || "boolean" === e) this.className && c._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : c._data(this, "__className__") || ""
			})
		},
		hasClass: function(a)
		{
			for (var a = " " + a + " ", c = 0, b = this.length; c < b; c++)
				if (1 === this[c].nodeType && -1 < (" " + this[c].className + " ").replace(la, " ").indexOf(a)) return !0;
			return !1
		},
		val: function(a)
		{
			var b, e, q, g = this[0];
			if (arguments.length) return q =
				c.isFunction(a), this.each(function(e)
				{
					var u = c(this),
						g;
					if (1 === this.nodeType && (q ? g = a.call(this, e, u.val()) : g = a, null == g ? g = "" : "number" == typeof g ? g += "" : c.isArray(g) && (g = c.map(g, function(a)
						{
							return a == null ? "" : a + ""
						})), b = c.valHooks[this.nodeName.toLowerCase()] || c.valHooks[this.type], !b || !("set" in b) || b.set(this, g, "value") === m)) this.value = g
				});
			if (g)
			{
				if ((b = c.valHooks[g.nodeName.toLowerCase()] || c.valHooks[g.type]) && "get" in b && (e = b.get(g, "value")) !== m) return e;
				e = g.value;
				return "string" == typeof e ? e.replace(ha, "") :
					null == e ? "" : e
			}
		}
	});
	c.extend(
	{
		valHooks:
		{
			option:
			{
				get: function(a)
				{
					var c = a.attributes.value;
					return !c || c.specified ? a.value : a.text
				}
			},
			select:
			{
				get: function(a)
				{
					var b, e, q = a.selectedIndex,
						g = [],
						d = a.options,
						f = "select-one" === a.type;
					if (0 > q) return null;
					a = f ? q : 0;
					for (e = f ? q + 1 : d.length; a < e; a++)
						if (b = d[a], b.selected && (c.support.optDisabled ? !b.disabled : null === b.getAttribute("disabled")) && (!b.parentNode.disabled || !c.nodeName(b.parentNode, "optgroup")))
						{
							b = c(b).val();
							if (f) return b;
							g.push(b)
						}
					return f && !g.length && d.length ? c(d[q]).val() :
						g
				},
				set: function(a, b)
				{
					var e = c.makeArray(b);
					c(a).find("option").each(function()
					{
						this.selected = 0 <= c.inArray(c(this).val(), e)
					});
					e.length || (a.selectedIndex = -1);
					return e
				}
			}
		},
		attrFn:
		{
			val: !0,
			css: !0,
			html: !0,
			text: !0,
			data: !0,
			width: !0,
			height: !0,
			offset: !0
		},
		attr: function(a, b, e, q)
		{
			var g, d, f = a.nodeType;
			if (a && 3 !== f && 8 !== f && 2 !== f)
			{
				if (q && b in c.attrFn) return c(a)[b](e);
				if ("undefined" == typeof a.getAttribute) return c.prop(a, b, e);
				(q = 1 !== f || !c.isXMLDoc(a)) && (b = b.toLowerCase(), d = c.attrHooks[b] || (K.test(b) ? ma : Q));
				if (e !== m)
				{
					if (null ===
						e)
					{
						c.removeAttr(a, b);
						return
					}
					if (d && "set" in d && q && (g = d.set(a, e, b)) !== m) return g;
					a.setAttribute(b, "" + e);
					return e
				}
				if (d && "get" in d && q && null !== (g = d.get(a, b))) return g;
				g = a.getAttribute(b);
				return null === g ? m : g
			}
		},
		removeAttr: function(a, b)
		{
			var e, q, g, d, f = 0;
			if (b && 1 === a.nodeType)
			{
				q = b.toLowerCase().split(Z);
				for (d = q.length; f < d; f++)(g = q[f]) && (e = c.propFix[g] || g, c.attr(a, g, ""), a.removeAttribute(N ? g : e), K.test(g) && e in a && (a[e] = !1))
			}
		},
		attrHooks:
		{
			type:
			{
				set: function(a, b)
				{
					if (ia.test(a.nodeName) && a.parentNode) c.error("type property can't be changed");
					else if (!c.support.radioValue && "radio" === b && c.nodeName(a, "input"))
					{
						var e = a.value;
						a.setAttribute("type", b);
						e && (a.value = e);
						return b
					}
				}
			},
			value:
			{
				get: function(a, b)
				{
					return Q && c.nodeName(a, "button") ? Q.get(a, b) : b in a ? a.value : null
				},
				set: function(a, b, e)
				{
					if (Q && c.nodeName(a, "button")) return Q.set(a, b, e);
					a.value = b
				}
			}
		},
		propFix:
		{
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		prop: function(a, b, e)
		{
			var q, g, d;
			d = a.nodeType;
			if (a && 3 !== d && 8 !== d && 2 !== d) return (d = 1 !== d || !c.isXMLDoc(a)) && (b = c.propFix[b] || b, g = c.propHooks[b]), e !== m ? g && "set" in g && (q = g.set(a, e, b)) !== m ? q : a[b] = e : g && "get" in g && null !== (q = g.get(a, b)) ? q : a[b]
		},
		propHooks:
		{
			tabIndex:
			{
				get: function(a)
				{
					var c = a.getAttributeNode("tabindex");
					return c && c.specified ? parseInt(c.value, 10) : va.test(a.nodeName) || ra.test(a.nodeName) && a.href ? 0 : m
				}
			}
		}
	});
	c.attrHooks.tabindex = c.propHooks.tabIndex;
	ma = {
		get: function(a, b)
		{
			var e, q = c.prop(a, b);
			return !0 === q || "boolean" != typeof q && (e = a.getAttributeNode(b)) && !1 !== e.nodeValue ? b.toLowerCase() : m
		},
		set: function(a, b, e)
		{
			var q;
			!1 === b ? c.removeAttr(a, e) : (q = c.propFix[e] || e, q in a && (a[q] = !0), a.setAttribute(e, e.toLowerCase()));
			return e
		}
	};
	N || (Da = {
		name: !0,
		id: !0
	}, Q = c.valHooks.button = {
		get: function(a, c)
		{
			var b;
			return (b = a.getAttributeNode(c)) && (Da[c] ? "" !== b.nodeValue : b.specified) ? b.nodeValue : m
		},
		set: function(a, c, b)
		{
			var e = a.getAttributeNode(b);
			e || (e = s.createAttribute(b),
				a.setAttributeNode(e));
			return e.nodeValue = c + ""
		}
	}, c.attrHooks.tabindex.set = Q.set, c.each(["width", "height"], function(a, b)
	{
		c.attrHooks[b] = c.extend(c.attrHooks[b],
		{
			set: function(a, c)
			{
				if ("" === c) return a.setAttribute(b, "auto"), c
			}
		})
	}), c.attrHooks.contenteditable = {
		get: Q.get,
		set: function(a, c, b)
		{
			"" === c && (c = "false");
			Q.set(a, c, b)
		}
	});
	c.support.hrefNormalized || c.each(["href", "src", "width", "height"], function(a, b)
	{
		c.attrHooks[b] = c.extend(c.attrHooks[b],
		{
			get: function(a)
			{
				a = a.getAttribute(b, 2);
				return null === a ? m : a
			}
		})
	});
	c.support.style || (c.attrHooks.style = {
		get: function(a)
		{
			return a.style.cssText.toLowerCase() || m
		},
		set: function(a, c)
		{
			return a.style.cssText = "" + c
		}
	});
	c.support.optSelected || (c.propHooks.selected = c.extend(c.propHooks.selected,
	{
		get: function(a)
		{
			a = a.parentNode;
			a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex);
			return null
		}
	}));
	c.support.enctype || (c.propFix.enctype = "encoding");
	c.support.checkOn || c.each(["radio", "checkbox"], function()
	{
		c.valHooks[this] = {
			get: function(a)
			{
				return null === a.getAttribute("value") ?
					"on" : a.value
			}
		}
	});
	c.each(["radio", "checkbox"], function()
	{
		c.valHooks[this] = c.extend(c.valHooks[this],
		{
			set: function(a, b)
			{
				if (c.isArray(b)) return a.checked = 0 <= c.inArray(c(a).val(), b)
			}
		})
	});
	var La = /^(?:textarea|input|select)$/i,
		$a = /^([^\.]*)?(?:\.(.+))?$/,
		ub = /\bhover(\.\S+)?\b/,
		vb = /^key/,
		ab = /^(?:mouse|contextmenu)|click/,
		Ma = /^(?:focusinfocus|focusoutblur)$/,
		wa = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
		bb = function(a)
		{
			(a = wa.exec(a)) && (a[1] = (a[1] || "").toLowerCase(), a[3] = a[3] && RegExp("(?:^|\\s)" + a[3] + "(?:\\s|$)"));
			return a
		},
		xa = function(a)
		{
			return c.event.special.hover ? a : a.replace(ub, "mouseenter$1 mouseleave$1")
		};
	c.event = {
		add: function(a, b, e, q, g)
		{
			var d, f, h, i, k, n, l, j, p;
			if (!(3 === a.nodeType || 8 === a.nodeType || !b || !e || !(d = c._data(a))))
			{
				e.handler && (l = e, e = l.handler);
				e.guid || (e.guid = c.guid++);
				(h = d.events) || (d.events = h = {});
				(f = d.handle) || (d.handle = f = function(a)
				{
					return "undefined" != typeof c && (!a || c.event.triggered !== a.type) ? c.event.dispatch.apply(f.elem, arguments) : m
				}, f.elem = a);
				b = c.trim(xa(b)).split(" ");
				for (d = 0; d < b.length; d++)
				{
					i =
						$a.exec(b[d]) || [];
					k = i[1];
					n = (i[2] || "").split(".").sort();
					p = c.event.special[k] ||
					{};
					k = (g ? p.delegateType : p.bindType) || k;
					p = c.event.special[k] ||
					{};
					i = c.extend(
					{
						type: k,
						origType: i[1],
						data: q,
						handler: e,
						guid: e.guid,
						selector: g,
						quick: bb(g),
						namespace: n.join(".")
					}, l);
					j = h[k];
					if (!j && (j = h[k] = [], j.delegateCount = 0, !p.setup || !1 === p.setup.call(a, q, n, f))) a.addEventListener ? a.addEventListener(k, f, !1) : a.attachEvent && a.attachEvent("on" + k, f);
					p.add && (p.add.call(a, i), i.handler.guid || (i.handler.guid = e.guid));
					g ? j.splice(j.delegateCount++,
						0, i) : j.push(i);
					c.event.global[k] = !0
				}
				a = null
			}
		},
		global:
		{},
		remove: function(a, b, e, q, g)
		{
			var d = c.hasData(a) && c._data(a),
				f, h, i, k, n, l, m, j, p, r, G;
			if (d && (m = d.events))
			{
				b = c.trim(xa(b || "")).split(" ");
				for (f = 0; f < b.length; f++)
					if (h = $a.exec(b[f]) || [], i = k = h[1], h = h[2], i)
					{
						j = c.event.special[i] ||
						{};
						i = (q ? j.delegateType : j.bindType) || i;
						r = m[i] || [];
						n = r.length;
						h = h ? RegExp("(^|\\.)" + h.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
						for (l = 0; l < r.length; l++) G = r[l], (g || k === G.origType) && (!e || e.guid === G.guid) && (!h || h.test(G.namespace)) &&
							(!q || q === G.selector || "**" === q && G.selector) && (r.splice(l--, 1), G.selector && r.delegateCount--, j.remove && j.remove.call(a, G));
						0 === r.length && n !== r.length && ((!j.teardown || !1 === j.teardown.call(a, h)) && c.removeEvent(a, i, d.handle), delete m[i])
					}
				else
					for (i in m) c.event.remove(a, i + b[f], e, q, !0);
				c.isEmptyObject(m) && (p = d.handle, p && (p.elem = null), c.removeData(a, ["events", "handle"], !0))
			}
		},
		customEvent:
		{
			getData: !0,
			setData: !0,
			changeData: !0
		},
		trigger: function(a, b, e, q)
		{
			if (!e || 3 !== e.nodeType && 8 !== e.nodeType)
			{
				var g = a.type ||
					a,
					d = [],
					h, i, k, n, l, j;
				if (!Ma.test(g + c.event.triggered) && (0 <= g.indexOf("!") && (g = g.slice(0, -1), h = !0), 0 <= g.indexOf(".") && (d = g.split("."), g = d.shift(), d.sort()), e && !c.event.customEvent[g] || c.event.global[g]))
					if (a = "object" == typeof a ? a[c.expando] ? a : new c.Event(g, a) : new c.Event(g), a.type = g, a.isTrigger = !0, a.exclusive = h, a.namespace = d.join("."), a.namespace_re = a.namespace ? RegExp("(^|\\.)" + d.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, h = 0 > g.indexOf(":") ? "on" + g : "", e)
					{
						if (a.result = m, a.target || (a.target = e), b = null != b ? c.makeArray(b) : [], b.unshift(a), n = c.event.special[g] ||
							{}, !(n.trigger && !1 === n.trigger.apply(e, b)))
						{
							j = [
								[e, n.bindType || g]
							];
							if (!q && !n.noBubble && !c.isWindow(e))
							{
								i = n.delegateType || g;
								d = Ma.test(i + g) ? e : e.parentNode;
								for (k = null; d; d = d.parentNode) j.push([d, i]), k = d;
								k && k === e.ownerDocument && j.push([k.defaultView || k.parentWindow || f, i])
							}
							for (i = 0; i < j.length && !a.isPropagationStopped(); i++) d = j[i][0], a.type = j[i][1], (l = (c._data(d, "events") ||
								{})[a.type] && c._data(d, "handle")) && l.apply(d, b), (l = h && d[h]) && c.acceptData(d) && !1 === l.apply(d, b) &&
								a.preventDefault();
							a.type = g;
							!q && !a.isDefaultPrevented() && (!n._default || !1 === n._default.apply(e.ownerDocument, b)) && ("click" !== g || !c.nodeName(e, "a")) && c.acceptData(e) && h && e[g] && ("focus" !== g && "blur" !== g || 0 !== a.target.offsetWidth) && !c.isWindow(e) && (k = e[h], k && (e[h] = null), c.event.triggered = g, e[g](), c.event.triggered = m, k && (e[h] = k));
							return a.result
						}
					}
				else
					for (i in e = c.cache, e) e[i].events && e[i].events[g] && c.event.trigger(a, b, e[i].handle.elem, !0)
			}
		},
		dispatch: function(a)
		{
			var a = c.event.fix(a || f.event),
				b = (c._data(this,
					"events") ||
				{})[a.type] || [],
				e = b.delegateCount,
				g = [].slice.call(arguments, 0),
				d = !a.exclusive && !a.namespace,
				h = [],
				i, k, n, l, j, p, r;
			g[0] = a;
			a.delegateTarget = this;
			if (e && !a.target.disabled && (!a.button || "click" !== a.type))
			{
				n = c(this);
				n.context = this.ownerDocument || this;
				for (k = a.target; k != this; k = k.parentNode || this)
				{
					j = {};
					p = [];
					n[0] = k;
					for (i = 0; i < e; i++)
					{
						l = b[i];
						r = l.selector;
						if (j[r] === m)
						{
							var t = j,
								x = r,
								B;
							if (l.quick)
							{
								B = l.quick;
								var G = k.attributes ||
								{};
								B = (!B[1] || k.nodeName.toLowerCase() === B[1]) && (!B[2] || (G.id ||
									{}).value === B[2]) &&
									(!B[3] || B[3].test((G["class"] ||
									{}).value))
							}
							else B = n.is(r);
							t[x] = B
						}
						j[r] && p.push(l)
					}
					p.length && h.push(
					{
						elem: k,
						matches: p
					})
				}
			}
			b.length > e && h.push(
			{
				elem: this,
				matches: b.slice(e)
			});
			for (i = 0; i < h.length && !a.isPropagationStopped(); i++)
			{
				e = h[i];
				a.currentTarget = e.elem;
				for (b = 0; b < e.matches.length && !a.isImmediatePropagationStopped(); b++)
					if (l = e.matches[b], d || !a.namespace && !l.namespace || a.namespace_re && a.namespace_re.test(l.namespace)) a.data = l.data, a.handleObj = l, l = ((c.event.special[l.origType] ||
					{}).handle || l.handler).apply(e.elem,
						g), l !== m && (a.result = l, !1 === l && (a.preventDefault(), a.stopPropagation()))
			}
			return a.result
		},
		props: "attrChange,attrName,relatedNode,srcElement,altKey,bubbles,cancelable,ctrlKey,currentTarget,eventPhase,metaKey,relatedTarget,shiftKey,target,timeStamp,view,which".split(","),
		fixHooks:
		{},
		keyHooks:
		{
			props: ["char", "charCode", "key", "keyCode"],
			filter: function(a, c)
			{
				null == a.which && (a.which = null != c.charCode ? c.charCode : c.keyCode);
				return a
			}
		},
		mouseHooks:
		{
			props: "button,buttons,clientX,clientY,fromElement,offsetX,offsetY,pageX,pageY,screenX,screenY,toElement".split(","),
			filter: function(a, c)
			{
				var b, e, g, d = c.button,
					f = c.fromElement;
				null == a.pageX && null != c.clientX && (b = a.target.ownerDocument || s, e = b.documentElement, g = b.body, a.pageX = c.clientX + (e && e.scrollLeft || g && g.scrollLeft || 0) - (e && e.clientLeft || g && g.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || g && g.scrollTop || 0) - (e && e.clientTop || g && g.clientTop || 0));
				!a.relatedTarget && f && (a.relatedTarget = f === a.target ? c.toElement : f);
				!a.which && d !== m && (a.which = d & 1 ? 1 : d & 2 ? 3 : d & 4 ? 2 : 0);
				return a
			}
		},
		fix: function(a)
		{
			if (a[c.expando]) return a;
			var b,
				e, g = a,
				d = c.event.fixHooks[a.type] ||
				{},
				f = d.props ? this.props.concat(d.props) : this.props,
				a = c.Event(g);
			for (b = f.length; b;) e = f[--b], a[e] = g[e];
			a.target || (a.target = g.srcElement || s);
			3 === a.target.nodeType && (a.target = a.target.parentNode);
			a.metaKey === m && (a.metaKey = a.ctrlKey);
			return d.filter ? d.filter(a, g) : a
		},
		special:
		{
			ready:
			{
				setup: c.bindReady
			},
			load:
			{
				noBubble: !0
			},
			focus:
			{
				delegateType: "focusin"
			},
			blur:
			{
				delegateType: "focusout"
			},
			beforeunload:
			{
				setup: function(a, b, e)
				{
					c.isWindow(this) && (this.onbeforeunload = e)
				},
				teardown: function(a,
					c)
				{
					this.onbeforeunload === c && (this.onbeforeunload = null)
				}
			}
		},
		simulate: function(a, b, e, g)
		{
			a = c.extend(new c.Event, e,
			{
				type: a,
				isSimulated: !0,
				originalEvent:
				{}
			});
			g ? c.event.trigger(a, null, b) : c.event.dispatch.call(b, a);
			a.isDefaultPrevented() && e.preventDefault()
		}
	};
	c.event.handle = c.event.dispatch;
	c.removeEvent = s.removeEventListener ? function(a, c, b)
	{
		a.removeEventListener && a.removeEventListener(c, b, !1)
	} : function(a, c, b)
	{
		a.detachEvent && a.detachEvent("on" + c, b)
	};
	c.Event = function(a, b)
	{
		if (!(this instanceof c.Event)) return new c.Event(a,
			b);
		a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || !1 === a.returnValue || a.getPreventDefault && a.getPreventDefault() ? C : U) : this.type = a;
		b && c.extend(this, b);
		this.timeStamp = a && a.timeStamp || c.now();
		this[c.expando] = !0
	};
	c.Event.prototype = {
		preventDefault: function()
		{
			this.isDefaultPrevented = C;
			var a = this.originalEvent;
			!a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
		},
		stopPropagation: function()
		{
			this.isPropagationStopped = C;
			var a = this.originalEvent;
			!a || (a.stopPropagation &&
				a.stopPropagation(), a.cancelBubble = !0)
		},
		stopImmediatePropagation: function()
		{
			this.isImmediatePropagationStopped = C;
			this.stopPropagation()
		},
		isDefaultPrevented: U,
		isPropagationStopped: U,
		isImmediatePropagationStopped: U
	};
	c.each(
	{
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(a, b)
	{
		c.event.special[a] = {
			delegateType: b,
			bindType: b,
			handle: function(a)
			{
				var e = a.relatedTarget,
					g = a.handleObj,
					d;
				if (!e || e !== this && !c.contains(this, e)) a.type = g.origType, d = g.handler.apply(this, arguments), a.type = b;
				return d
			}
		}
	});
	c.support.submitBubbles ||
		(c.event.special.submit = {
			setup: function()
			{
				if (c.nodeName(this, "form")) return !1;
				c.event.add(this, "click._submit keypress._submit", function(a)
				{
					a = a.target;
					(a = c.nodeName(a, "input") || c.nodeName(a, "button") ? a.form : m) && !a._submit_attached && (c.event.add(a, "submit._submit", function(a)
					{
						this.parentNode && !a.isTrigger && c.event.simulate("submit", this.parentNode, a, !0)
					}), a._submit_attached = !0)
				})
			},
			teardown: function()
			{
				if (c.nodeName(this, "form")) return !1;
				c.event.remove(this, "._submit")
			}
		});
	c.support.changeBubbles || (c.event.special.change = {
		setup: function()
		{
			if (La.test(this.nodeName))
			{
				if ("checkbox" === this.type || "radio" === this.type) c.event.add(this, "propertychange._change", function(a)
				{
					"checked" === a.originalEvent.propertyName && (this._just_changed = !0)
				}), c.event.add(this, "click._change", function(a)
				{
					this._just_changed && !a.isTrigger && (this._just_changed = !1, c.event.simulate("change", this, a, !0))
				});
				return !1
			}
			c.event.add(this, "beforeactivate._change", function(a)
			{
				a = a.target;
				La.test(a.nodeName) && !a._change_attached && (c.event.add(a, "change._change",
					function(a)
					{
						this.parentNode && !a.isSimulated && !a.isTrigger && c.event.simulate("change", this.parentNode, a, !0)
					}), a._change_attached = !0)
			})
		},
		handle: function(a)
		{
			var c = a.target;
			if (this !== c || a.isSimulated || a.isTrigger || "radio" !== c.type && "checkbox" !== c.type) return a.handleObj.handler.apply(this, arguments)
		},
		teardown: function()
		{
			c.event.remove(this, "._change");
			return La.test(this.nodeName)
		}
	});
	c.support.focusinBubbles || c.each(
	{
		focus: "focusin",
		blur: "focusout"
	}, function(a, b)
	{
		var e = 0,
			g = function(a)
			{
				c.event.simulate(b,
					a.target, c.event.fix(a), !0)
			};
		c.event.special[b] = {
			setup: function()
			{
				0 === e++ && s.addEventListener(a, g, !0)
			},
			teardown: function()
			{
				0 === --e && s.removeEventListener(a, g, !0)
			}
		}
	});
	c.fn.extend(
	{
		on: function(a, b, e, g, d)
		{
			var f, h;
			if ("object" == typeof a)
			{
				"string" != typeof b && (e = b, b = m);
				for (h in a) this.on(h, b, e, a[h], d);
				return this
			}
			null == e && null == g ? (g = b, e = b = m) : null == g && ("string" == typeof b ? (g = e, e = m) : (g = e, e = b, b = m));
			if (!1 === g) g = U;
			else if (!g) return this;
			1 === d && (f = g, g = function(a)
				{
					c().off(a);
					return f.apply(this, arguments)
				}, g.guid =
				f.guid || (f.guid = c.guid++));
			return this.each(function()
			{
				c.event.add(this, a, g, e, b)
			})
		},
		one: function(a, c, b, e)
		{
			return this.on.call(this, a, c, b, e, 1)
		},
		off: function(a, b, e)
		{
			if (a && a.preventDefault && a.handleObj)
			{
				var g = a.handleObj;
				c(a.delegateTarget).off(g.namespace ? g.type + "." + g.namespace : g.type, g.selector, g.handler);
				return this
			}
			if ("object" == typeof a)
			{
				for (g in a) this.off(g, b, a[g]);
				return this
			}
			if (!1 === b || "function" == typeof b) e = b, b = m;
			!1 === e && (e = U);
			return this.each(function()
			{
				c.event.remove(this, a, e, b)
			})
		},
		bind: function(a,
			b, c)
		{
			return this.on(a, null, b, c)
		},
		unbind: function(a, b)
		{
			return this.off(a, null, b)
		},
		live: function(a, b, e)
		{
			c(this.context).on(a, this.selector, b, e);
			return this
		},
		die: function(a, b)
		{
			c(this.context).off(a, this.selector || "**", b);
			return this
		},
		delegate: function(a, b, c, e)
		{
			return this.on(b, a, c, e)
		},
		undelegate: function(a, b, c)
		{
			return 1 == arguments.length ? this.off(a, "**") : this.off(b, a, c)
		},
		trigger: function(a, b)
		{
			return this.each(function()
			{
				c.event.trigger(a, b, this)
			})
		},
		triggerHandler: function(a, b)
		{
			if (this[0]) return c.event.trigger(a,
				b, this[0], !0)
		},
		toggle: function(a)
		{
			var b = arguments,
				e = a.guid || c.guid++,
				g = 0,
				d = function(e)
				{
					var u = (c._data(this, "lastToggle" + a.guid) || 0) % g;
					c._data(this, "lastToggle" + a.guid, u + 1);
					e.preventDefault();
					return b[u].apply(this, arguments) || !1
				};
			for (d.guid = e; g < b.length;) b[g++].guid = e;
			return this.click(d)
		},
		hover: function(a, b)
		{
			return this.mouseenter(a).mouseleave(b || a)
		}
	});
	c.each("blur,focus,focusin,focusout,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error,contextmenu".split(","),
		function(a, b)
		{
			c.fn[b] = function(a, c)
			{
				c == null && (c = a, a = null);
				return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
			};
			c.attrFn && (c.attrFn[b] = true);
			vb.test(b) && (c.event.fixHooks[b] = c.event.keyHooks);
			ab.test(b) && (c.event.fixHooks[b] = c.event.mouseHooks)
		});
	(function()
	{
		function a(a, b, c, e, o, u)
		{
			for (var o = 0, d = e.length; o < d; o++)
			{
				var f = e[o];
				if (f)
				{
					for (var h = !1, f = f[a]; f;)
					{
						if (f[g] === c)
						{
							h = e[f.sizset];
							break
						}
						if (1 === f.nodeType)
							if (u || (f[g] = c, f.sizset = o), "string" != typeof b)
							{
								if (f === b)
								{
									h = !0;
									break
								}
							}
						else if (0 < j.filter(b, [f]).length)
						{
							h = f;
							break
						}
						f = f[a]
					}
					e[o] = h
				}
			}
		}

		function b(a, c, e, o, u, d)
		{
			for (var u = 0, f = o.length; u < f; u++)
			{
				var h = o[u];
				if (h)
				{
					for (var I = !1, h = h[a]; h;)
					{
						if (h[g] === e)
						{
							I = o[h.sizset];
							break
						}
						1 === h.nodeType && !d && (h[g] = e, h.sizset = u);
						if (h.nodeName.toLowerCase() === c)
						{
							I = h;
							break
						}
						h = h[a]
					}
					o[u] = I
				}
			}
		}
		var e = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
			g = "sizcache" + (Math.random() + "").replace(".", ""),
			d = 0,
			f = Object.prototype.toString,
			h = !1,
			i = !0,
			k = /\\/g,
			n = /\r\n/g,
			l = /\W/;
		[0, 0].sort(function()
		{
			i = !1;
			return 0
		});
		var j = function(a, b, c, o)
		{
			var c = c || [],
				g = b = b || s;
			if (1 !== b.nodeType && 9 !== b.nodeType) return [];
			if (!a || "string" != typeof a) return c;
			var q, d, h, I, i, k, G = !0,
				Va = j.isXML(b),
				n = [],
				l = a;
			do
				if (e.exec(""), q = e.exec(l))
					if (l = q[3], n.push(q[1]), q[2])
					{
						I = q[3];
						break
					}
			while (q);
			if (1 < n.length && t.exec(a))
				if (2 === n.length && r.relative[n[0]]) d = E(n[0] + n[1], b, o);
				else
					for (d = r.relative[n[0]] ? [b] : j(n.shift(), b); n.length;) a = n.shift(), r.relative[a] && (a += n.shift()), d = E(a, d, o);
			else if (!o &&
				1 < n.length && 9 === b.nodeType && !Va && r.match.ID.test(n[0]) && !r.match.ID.test(n[n.length - 1]) && (i = j.find(n.shift(), b, Va), b = i.expr ? j.filter(i.expr, i.set)[0] : i.set[0]), b)
			{
				i = o ?
				{
					expr: n.pop(),
					set: O(o)
				} : j.find(n.pop(), 1 === n.length && ("~" === n[0] || "+" === n[0]) && b.parentNode ? b.parentNode : b, Va);
				d = i.expr ? j.filter(i.expr, i.set) : i.set;
				for (0 < n.length ? h = O(d) : G = !1; n.length;) q = k = n.pop(), r.relative[k] ? q = n.pop() : k = "", null == q && (q = b), r.relative[k](h, q, Va)
			}
			else h = [];
			h || (h = d);
			h || j.error(k || a);
			if ("[object Array]" === f.call(h))
				if (G)
					if (b &&
						1 === b.nodeType)
						for (a = 0; null != h[a]; a++) h[a] && (!0 === h[a] || 1 === h[a].nodeType && j.contains(b, h[a])) && c.push(d[a]);
					else
						for (a = 0; null != h[a]; a++) h[a] && 1 === h[a].nodeType && c.push(d[a]);
			else c.push.apply(c, h);
			else O(h, c);
			I && (j(I, g, c, o), j.uniqueSort(c));
			return c
		};
		j.uniqueSort = function(a)
		{
			if (v && (h = i, a.sort(v), h))
				for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1);
			return a
		};
		j.matches = function(a, b)
		{
			return j(a, null, null, b)
		};
		j.matchesSelector = function(a, b)
		{
			return 0 < j(b, null, null, [a]).length
		};
		j.find = function(a,
			b, c)
		{
			var e, o, g, q, u, d;
			if (!a) return [];
			o = 0;
			for (g = r.order.length; o < g; o++)
				if (u = r.order[o], q = r.leftMatch[u].exec(a))
					if (d = q[1], q.splice(1, 1), "\\" !== d.substr(d.length - 1) && (q[1] = (q[1] || "").replace(k, ""), e = r.find[u](q, b, c), null != e))
					{
						a = a.replace(r.match[u], "");
						break
					}
			e || (e = "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : []);
			return {
				set: e,
				expr: a
			}
		};
		j.filter = function(a, b, c, e)
		{
			for (var o, g, q, u, d, f, h, I, i = a, A = [], k = b, G = b && b[0] && j.isXML(b[0]); a && b.length;)
			{
				for (q in r.filter)
					if (null != (o = r.leftMatch[q].exec(a)) &&
						o[2])
						if (f = r.filter[q], d = o[1], g = !1, o.splice(1, 1), "\\" !== d.substr(d.length - 1))
						{
							k === A && (A = []);
							if (r.preFilter[q])
								if (o = r.preFilter[q](o, k, c, A, e, G))
								{
									if (!0 === o) continue
								}
							else g = u = !0;
							if (o)
								for (h = 0; null != (d = k[h]); h++) d && (u = f(d, o, h, k), I = e ^ u, c && null != u ? I ? g = !0 : k[h] = !1 : I && (A.push(d), g = !0));
							if (u !== m)
							{
								c || (k = A);
								a = a.replace(r.match[q], "");
								if (!g) return [];
								break
							}
						}
				if (a === i)
					if (null == g) j.error(a);
					else break;
				i = a
			}
			return k
		};
		j.error = function(a)
		{
			throw Error("Syntax error, unrecognized expression: " + a);
		};
		var p = j.getText = function(a)
			{
				var b,
					c;
				b = a.nodeType;
				var e = "";
				if (b)
					if (1 === b || 9 === b)
					{
						if ("string" == typeof a.textContent) return a.textContent;
						if ("string" == typeof a.innerText) return a.innerText.replace(n, "");
						for (a = a.firstChild; a; a = a.nextSibling) e += p(a)
					}
				else
				{
					if (3 === b || 4 === b) return a.nodeValue
				}
				else
					for (b = 0; c = a[b]; b++) 8 !== c.nodeType && (e += p(c));
				return e
			},
			r = j.selectors = {
				order: ["ID", "NAME", "TAG"],
				match:
				{
					ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
					CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
					NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
					ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
					TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
					CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
					POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
					PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
				},
				leftMatch:
				{},
				attrMap:
				{
					"class": "className",
					"for": "htmlFor"
				},
				attrHandle:
				{
					href: function(a)
					{
						return a.getAttribute("href")
					},
					type: function(a)
					{
						return a.getAttribute("type")
					}
				},
				relative:
				{
					"+": function(a, b)
					{
						var c =
							"string" == typeof b,
							e = c && !l.test(b),
							c = c && !e;
						e && (b = b.toLowerCase());
						for (var e = 0, o = a.length, g; e < o; e++)
							if (g = a[e])
							{
								for (;
									(g = g.previousSibling) && 1 !== g.nodeType;);
								a[e] = c || g && g.nodeName.toLowerCase() === b ? g || !1 : g === b
							}
						c && j.filter(b, a, !0)
					},
					">": function(a, b)
					{
						var c, e = "string" == typeof b,
							o = 0,
							g = a.length;
						if (e && !l.test(b))
							for (b = b.toLowerCase(); o < g; o++)
							{
								if (c = a[o]) c = c.parentNode, a[o] = c.nodeName.toLowerCase() === b ? c : !1
							}
						else
						{
							for (; o < g; o++)(c = a[o]) && (a[o] = e ? c.parentNode : c.parentNode === b);
							e && j.filter(b, a, !0)
						}
					},
					"": function(c,
						e, g)
					{
						var q, u = d++,
							f = a;
						"string" == typeof e && !l.test(e) && (e = e.toLowerCase(), q = e, f = b);
						f("parentNode", e, u, c, q, g)
					},
					"~": function(c, e, g)
					{
						var q, u = d++,
							f = a;
						"string" == typeof e && !l.test(e) && (e = e.toLowerCase(), q = e, f = b);
						f("previousSibling", e, u, c, q, g)
					}
				},
				find:
				{
					ID: function(a, b, c)
					{
						if ("undefined" != typeof b.getElementById && !c) return (a = b.getElementById(a[1])) && a.parentNode ? [a] : []
					},
					NAME: function(a, b)
					{
						if ("undefined" != typeof b.getElementsByName)
						{
							for (var c = [], e = b.getElementsByName(a[1]), o = 0, g = e.length; o < g; o++) e[o].getAttribute("name") ===
								a[1] && c.push(e[o]);
							return 0 === c.length ? null : c
						}
					},
					TAG: function(a, b)
					{
						if ("undefined" != typeof b.getElementsByTagName) return b.getElementsByTagName(a[1])
					}
				},
				preFilter:
				{
					CLASS: function(a, b, c, e, o, g)
					{
						a = " " + a[1].replace(k, "") + " ";
						if (g) return a;
						for (var g = 0, q; null != (q = b[g]); g++) q && (o ^ (q.className && 0 <= (" " + q.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a)) ? c || e.push(q) : c && (b[g] = !1));
						return !1
					},
					ID: function(a)
					{
						return a[1].replace(k, "")
					},
					TAG: function(a)
					{
						return a[1].replace(k, "").toLowerCase()
					},
					CHILD: function(a)
					{
						if ("nth" ===
							a[1])
						{
							a[2] || j.error(a[0]);
							a[2] = a[2].replace(/^\+|\s*/g, "");
							var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === a[2] && "2n" || "odd" === a[2] && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
							a[2] = b[1] + (b[2] || 1) - 0;
							a[3] = b[3] - 0
						}
						else a[2] && j.error(a[0]);
						a[0] = d++;
						return a
					},
					ATTR: function(a, b, c, e, o, g)
					{
						b = a[1] = a[1].replace(k, "");
						!g && r.attrMap[b] && (a[1] = r.attrMap[b]);
						a[4] = (a[4] || a[5] || "").replace(k, "");
						"~=" === a[2] && (a[4] = " " + a[4] + " ");
						return a
					},
					PSEUDO: function(a, b, c, o, g)
					{
						if ("not" === a[1])
							if (1 < (e.exec(a[3]) || "").length ||
								/^\w/.test(a[3])) a[3] = j(a[3], null, null, b);
							else return a = j.filter(a[3], b, c, 1 ^ g), c || o.push.apply(o, a), !1;
						else if (r.match.POS.test(a[0]) || r.match.CHILD.test(a[0])) return !0;
						return a
					},
					POS: function(a)
					{
						a.unshift(!0);
						return a
					}
				},
				filters:
				{
					enabled: function(a)
					{
						return !1 === a.disabled && "hidden" !== a.type
					},
					disabled: function(a)
					{
						return !0 === a.disabled
					},
					checked: function(a)
					{
						return !0 === a.checked
					},
					selected: function(a)
					{
						a.parentNode && a.parentNode.selectedIndex;
						return !0 === a.selected
					},
					parent: function(a)
					{
						return !!a.firstChild
					},
					empty: function(a)
					{
						return !a.firstChild
					},
					has: function(a, b, c)
					{
						return !!j(c[3], a).length
					},
					header: function(a)
					{
						return /h\d/i.test(a.nodeName)
					},
					text: function(a)
					{
						var b = a.getAttribute("type"),
							c = a.type;
						return "input" === a.nodeName.toLowerCase() && "text" === c && (b === c || null === b)
					},
					radio: function(a)
					{
						return "input" === a.nodeName.toLowerCase() && "radio" === a.type
					},
					checkbox: function(a)
					{
						return "input" === a.nodeName.toLowerCase() && "checkbox" === a.type
					},
					file: function(a)
					{
						return "input" === a.nodeName.toLowerCase() && "file" === a.type
					},
					password: function(a)
					{
						return "input" === a.nodeName.toLowerCase() && "password" === a.type
					},
					submit: function(a)
					{
						var b = a.nodeName.toLowerCase();
						return ("input" === b || "button" === b) && "submit" === a.type
					},
					image: function(a)
					{
						return "input" === a.nodeName.toLowerCase() && "image" === a.type
					},
					reset: function(a)
					{
						var b = a.nodeName.toLowerCase();
						return ("input" === b || "button" === b) && "reset" === a.type
					},
					button: function(a)
					{
						var b = a.nodeName.toLowerCase();
						return "input" === b && "button" === a.type || "button" === b
					},
					input: function(a)
					{
						return /input|select|textarea|button/i.test(a.nodeName)
					},
					focus: function(a)
					{
						return a === a.ownerDocument.activeElement
					}
				},
				setFilters:
				{
					first: function(a, b)
					{
						return 0 === b
					},
					last: function(a, b, c, e)
					{
						return b === e.length - 1
					},
					even: function(a, b)
					{
						return 0 === b % 2
					},
					odd: function(a, b)
					{
						return 1 === b % 2
					},
					lt: function(a, b, c)
					{
						return b < c[3] - 0
					},
					gt: function(a, b, c)
					{
						return b > c[3] - 0
					},
					nth: function(a, b, c)
					{
						return c[3] - 0 === b
					},
					eq: function(a, b, c)
					{
						return c[3] - 0 === b
					}
				},
				filter:
				{
					PSEUDO: function(a, b, c, e)
					{
						var o = b[1],
							g = r.filters[o];
						if (g) return g(a, c, b, e);
						if ("contains" === o) return 0 <= (a.textContent || a.innerText ||
							p([a]) || "").indexOf(b[3]);
						if ("not" === o)
						{
							b = b[3];
							c = 0;
							for (e = b.length; c < e; c++)
								if (b[c] === a) return !1;
							return !0
						}
						j.error(o)
					},
					CHILD: function(a, b)
					{
						var c, e, o, u, d, f;
						c = b[1];
						f = a;
						switch (c)
						{
							case "only":
							case "first":
								for (; f = f.previousSibling;)
									if (1 === f.nodeType) return !1;
								if ("first" === c) return !0;
								f = a;
							case "last":
								for (; f = f.nextSibling;)
									if (1 === f.nodeType) return !1;
								return !0;
							case "nth":
								c = b[2];
								e = b[3];
								if (1 === c && 0 === e) return !0;
								o = b[0];
								if ((u = a.parentNode) && (u[g] !== o || !a.nodeIndex))
								{
									d = 0;
									for (f = u.firstChild; f; f = f.nextSibling) 1 === f.nodeType &&
										(f.nodeIndex = ++d);
									u[g] = o
								}
								f = a.nodeIndex - e;
								return 0 === c ? 0 === f : 0 === f % c && 0 <= f / c
						}
					},
					ID: function(a, b)
					{
						return 1 === a.nodeType && a.getAttribute("id") === b
					},
					TAG: function(a, b)
					{
						return "*" === b && 1 === a.nodeType || !!a.nodeName && a.nodeName.toLowerCase() === b
					},
					CLASS: function(a, b)
					{
						return -1 < (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b)
					},
					ATTR: function(a, b)
					{
						var c = b[1],
							c = j.attr ? j.attr(a, c) : r.attrHandle[c] ? r.attrHandle[c](a) : null != a[c] ? a[c] : a.getAttribute(c),
							e = c + "",
							o = b[2],
							g = b[4];
						return null == c ? "!=" === o : !o && j.attr ?
							null != c : "=" === o ? e === g : "*=" === o ? 0 <= e.indexOf(g) : "~=" === o ? 0 <= (" " + e + " ").indexOf(g) : g ? "!=" === o ? e !== g : "^=" === o ? 0 === e.indexOf(g) : "$=" === o ? e.substr(e.length - g.length) === g : "|=" === o ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && !1 !== c
					},
					POS: function(a, b, c, e)
					{
						var o = r.setFilters[b[2]];
						if (o) return o(a, c, b, e)
					}
				}
			},
			t = r.match.POS,
			B = function(a, b)
			{
				return "\\" + (b - 0 + 1)
			},
			G;
		for (G in r.match) r.match[G] = RegExp(r.match[G].source + /(?![^\[]*\])(?![^\(]*\))/.source), r.leftMatch[G] = RegExp(/(^(?:.|\r|\n)*?)/.source + r.match[G].source.replace(/\\(\d+)/g,
			B));
		var O = function(a, b)
		{
			a = Array.prototype.slice.call(a, 0);
			return b ? (b.push.apply(b, a), b) : a
		};
		try
		{
			Array.prototype.slice.call(s.documentElement.childNodes, 0)[0].nodeType
		}
		catch (x)
		{
			O = function(a, b)
			{
				var c = 0,
					e = b || [];
				if ("[object Array]" === f.call(a)) Array.prototype.push.apply(e, a);
				else if ("number" == typeof a.length)
					for (var o = a.length; c < o; c++) e.push(a[c]);
				else
					for (; a[c]; c++) e.push(a[c]);
				return e
			}
		}
		var v, H;
		s.documentElement.compareDocumentPosition ? v = function(a, b)
		{
			return a === b ? (h = !0, 0) : !a.compareDocumentPosition ||
				!b.compareDocumentPosition ? a.compareDocumentPosition ? -1 : 1 : a.compareDocumentPosition(b) & 4 ? -1 : 1
		} : (v = function(a, b)
			{
				if (a === b) return h = !0, 0;
				if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
				var c, e, o = [],
					g = [];
				c = a.parentNode;
				e = b.parentNode;
				var q = c;
				if (c === e) return H(a, b);
				if (!c) return -1;
				if (!e) return 1;
				for (; q;) o.unshift(q), q = q.parentNode;
				for (q = e; q;) g.unshift(q), q = q.parentNode;
				c = o.length;
				e = g.length;
				for (q = 0; q < c && q < e; q++)
					if (o[q] !== g[q]) return H(o[q], g[q]);
				return q === c ? H(a, g[q], -1) : H(o[q], b, 1)
			},
			H = function(a, b, c)
			{
				if (a === b) return c;
				for (a = a.nextSibling; a;)
				{
					if (a === b) return -1;
					a = a.nextSibling
				}
				return 1
			});
		(function()
		{
			var a = s.createElement("div"),
				b = "script" + (new Date).getTime(),
				c = s.documentElement;
			a.innerHTML = "<a name='" + b + "'/>";
			c.insertBefore(a, c.firstChild);
			s.getElementById(b) && (r.find.ID = function(a, b, c)
				{
					if ("undefined" != typeof b.getElementById && !c) return (b = b.getElementById(a[1])) ? b.id === a[1] || "undefined" != typeof b.getAttributeNode && b.getAttributeNode("id").nodeValue === a[1] ? [b] : m : []
				}, r.filter.ID =
				function(a, b)
				{
					var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
					return 1 === a.nodeType && c && c.nodeValue === b
				});
			c.removeChild(a);
			c = a = null
		})();
		(function()
		{
			var a = s.createElement("div");
			a.appendChild(s.createComment(""));
			0 < a.getElementsByTagName("*").length && (r.find.TAG = function(a, b)
			{
				var c = b.getElementsByTagName(a[1]);
				if ("*" === a[1])
				{
					for (var e = [], o = 0; c[o]; o++) 1 === c[o].nodeType && e.push(c[o]);
					c = e
				}
				return c
			});
			a.innerHTML = "<a href='#'></a>";
			a.firstChild && "undefined" != typeof a.firstChild.getAttribute &&
				"#" !== a.firstChild.getAttribute("href") && (r.attrHandle.href = function(a)
				{
					return a.getAttribute("href", 2)
				});
			a = null
		})();
		s.querySelectorAll && function()
		{
			var a = j,
				b = s.createElement("div");
			b.innerHTML = "<p class='TEST'></p>";
			if (!b.querySelectorAll || 0 !== b.querySelectorAll(".TEST").length)
			{
				j = function(b, c, e, o)
				{
					c = c || s;
					if (!o && !j.isXML(c))
					{
						var g = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
						if (g && (1 === c.nodeType || 9 === c.nodeType))
						{
							if (g[1]) return O(c.getElementsByTagName(b), e);
							if (g[2] && r.find.CLASS && c.getElementsByClassName) return O(c.getElementsByClassName(g[2]),
								e)
						}
						if (9 === c.nodeType)
						{
							if ("body" === b && c.body) return O([c.body], e);
							if (g && g[3])
							{
								var q = c.getElementById(g[3]);
								if (!q || !q.parentNode) return O([], e);
								if (q.id === g[3]) return O([q], e)
							}
							try
							{
								return O(c.querySelectorAll(b), e)
							}
							catch (u)
							{}
						}
						else if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase())
						{
							var g = c,
								d = (q = c.getAttribute("id")) || "__sizzle__",
								f = c.parentNode,
								h = /^\s*[+~]/.test(b);
							q ? d = d.replace(/'/g, "\\$&") : c.setAttribute("id", d);
							h && f && (c = c.parentNode);
							try
							{
								if (!h || f) return O(c.querySelectorAll("[id='" + d + "'] " + b),
									e)
							}
							catch (I)
							{}
							finally
							{
								q || g.removeAttribute("id")
							}
						}
					}
					return a(b, c, e, o)
				};
				for (var c in a) j[c] = a[c];
				b = null
			}
		}();
		(function()
		{
			var a = s.documentElement,
				b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
			if (b)
			{
				var c = !b.call(s.createElement("div"), "div"),
					e = !1;
				try
				{
					b.call(s.documentElement, "[test!='']:sizzle")
				}
				catch (o)
				{
					e = !0
				}
				j.matchesSelector = function(a, o)
				{
					o = o.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
					if (!j.isXML(a)) try
					{
						if (e || !r.match.PSEUDO.test(o) && !/!=/.test(o))
						{
							var g = b.call(a,
								o);
							if (g || !c || a.document && 11 !== a.document.nodeType) return g
						}
					}
					catch (q)
					{}
					return 0 < j(o, null, null, [a]).length
				}
			}
		})();
		(function()
		{
			var a = s.createElement("div");
			a.innerHTML = "<div class='test e'></div><div class='test'></div>";
			a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length && (a.lastChild.className = "e", 1 !== a.getElementsByClassName("e").length && (r.order.splice(1, 0, "CLASS"), r.find.CLASS = function(a, b, c)
				{
					if ("undefined" != typeof b.getElementsByClassName && !c) return b.getElementsByClassName(a[1])
				},
				a = null))
		})();
		s.documentElement.contains ? j.contains = function(a, b)
		{
			return a !== b && (a.contains ? a.contains(b) : !0)
		} : s.documentElement.compareDocumentPosition ? j.contains = function(a, b)
		{
			return !!(a.compareDocumentPosition(b) & 16)
		} : j.contains = function()
		{
			return !1
		};
		j.isXML = function(a)
		{
			return (a = (a ? a.ownerDocument || a : 0).documentElement) ? "HTML" !== a.nodeName : !1
		};
		var E = function(a, b, c)
		{
			for (var e, o = [], g = "", b = b.nodeType ? [b] : b; e = r.match.PSEUDO.exec(a);) g += e[0], a = a.replace(r.match.PSEUDO, "");
			a = r.relative[a] ? a + "*" : a;
			e = 0;
			for (var q = b.length; e < q; e++) j(a, b[e], o, c);
			return j.filter(g, o)
		};
		j.attr = c.attr;
		j.selectors.attrMap = {};
		c.find = j;
		c.expr = j.selectors;
		c.expr[":"] = c.expr.filters;
		c.unique = j.uniqueSort;
		c.text = j.getText;
		c.isXMLDoc = j.isXML;
		c.contains = j.contains
	})();
	var Na = /Until$/,
		wb = /^(?:parents|prevUntil|prevAll)/,
		xb = /,/,
		rb = /^.[^:#\[\.,]*$/,
		yb = Array.prototype.slice,
		cb = c.expr.match.POS,
		db = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	c.fn.extend(
	{
		find: function(a)
		{
			var b = this,
				e, g;
			if ("string" != typeof a) return c(a).filter(function()
			{
				e =
					0;
				for (g = b.length; e < g; e++)
					if (c.contains(b[e], this)) return !0
			});
			var d = this.pushStack("", "find", a),
				f, h, i;
			e = 0;
			for (g = this.length; e < g; e++)
				if (f = d.length, c.find(a, this[e], d), 0 < e)
					for (h = f; h < d.length; h++)
						for (i = 0; i < f; i++)
							if (d[i] === d[h])
							{
								d.splice(h--, 1);
								break
							}
			return d
		},
		has: function(a)
		{
			var b = c(a);
			return this.filter(function()
			{
				for (var a = 0, e = b.length; a < e; a++)
					if (c.contains(this, b[a])) return !0
			})
		},
		not: function(a)
		{
			return this.pushStack(D(this, a, !1), "not", a)
		},
		filter: function(a)
		{
			return this.pushStack(D(this, a, !0), "filter",
				a)
		},
		is: function(a)
		{
			return !!a && ("string" == typeof a ? cb.test(a) ? 0 <= c(a, this.context).index(this[0]) : 0 < c.filter(a, this).length : 0 < this.filter(a).length)
		},
		closest: function(a, b)
		{
			var e = [],
				g, d, f = this[0];
			if (c.isArray(a))
			{
				for (d = 1; f && f.ownerDocument && f !== b;)
				{
					for (g = 0; g < a.length; g++) c(f).is(a[g]) && e.push(
					{
						selector: a[g],
						elem: f,
						level: d
					});
					f = f.parentNode;
					d++
				}
				return e
			}
			var h = cb.test(a) || "string" != typeof a ? c(a, b || this.context) : 0;
			g = 0;
			for (d = this.length; g < d; g++)
				for (f = this[g]; f;)
				{
					if (h ? -1 < h.index(f) : c.find.matchesSelector(f,
							a))
					{
						e.push(f);
						break
					}
					f = f.parentNode;
					if (!f || !f.ownerDocument || f === b || 11 === f.nodeType) break
				}
			e = 1 < e.length ? c.unique(e) : e;
			return this.pushStack(e, "closest", a)
		},
		index: function(a)
		{
			return !a ? this[0] && this[0].parentNode ? this.prevAll().length : -1 : "string" == typeof a ? c.inArray(this[0], c(a)) : c.inArray(a.jquery ? a[0] : a, this)
		},
		add: function(a, b)
		{
			var e = "string" == typeof a ? c(a, b) : c.makeArray(a && a.nodeType ? [a] : a),
				g = c.merge(this.get(), e);
			return this.pushStack(!e[0] || !e[0].parentNode || 11 === e[0].parentNode.nodeType || !g[0] ||
				!g[0].parentNode || 11 === g[0].parentNode.nodeType ? g : c.unique(g))
		},
		andSelf: function()
		{
			return this.add(this.prevObject)
		}
	});
	c.each(
	{
		parent: function(a)
		{
			return (a = a.parentNode) && 11 !== a.nodeType ? a : null
		},
		parents: function(a)
		{
			return c.dir(a, "parentNode")
		},
		parentsUntil: function(a, b, e)
		{
			return c.dir(a, "parentNode", e)
		},
		next: function(a)
		{
			return c.nth(a, 2, "nextSibling")
		},
		prev: function(a)
		{
			return c.nth(a, 2, "previousSibling")
		},
		nextAll: function(a)
		{
			return c.dir(a, "nextSibling")
		},
		prevAll: function(a)
		{
			return c.dir(a, "previousSibling")
		},
		nextUntil: function(a, b, e)
		{
			return c.dir(a, "nextSibling", e)
		},
		prevUntil: function(a, b, e)
		{
			return c.dir(a, "previousSibling", e)
		},
		siblings: function(a)
		{
			return c.sibling(a.parentNode.firstChild, a)
		},
		children: function(a)
		{
			return c.sibling(a.firstChild)
		},
		contents: function(a)
		{
			return c.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : c.makeArray(a.childNodes)
		}
	}, function(a, b)
	{
		c.fn[a] = function(e, g)
		{
			var d = c.map(this, b, e);
			Na.test(a) || (g = e);
			g && "string" == typeof g && (d = c.filter(g, d));
			d = 1 < this.length && !db[a] ?
				c.unique(d) : d;
			(1 < this.length || xb.test(g)) && wb.test(a) && (d = d.reverse());
			return this.pushStack(d, a, yb.call(arguments).join(","))
		}
	});
	c.extend(
	{
		filter: function(a, b, e)
		{
			e && (a = ":not(" + a + ")");
			return 1 === b.length ? c.find.matchesSelector(b[0], a) ? [b[0]] : [] : c.find.matches(a, b)
		},
		dir: function(a, b, e)
		{
			for (var g = [], a = a[b]; a && 9 !== a.nodeType && (e === m || 1 !== a.nodeType || !c(a).is(e));) 1 === a.nodeType && g.push(a), a = a[b];
			return g
		},
		nth: function(a, b, c)
		{
			for (var b = b || 1, e = 0; a && !(1 === a.nodeType && ++e === b); a = a[c]);
			return a
		},
		sibling: function(a,
			b)
		{
			for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
			return c
		}
	});
	var Ya = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		zb = / jQuery\d+="(?:\d+|null)"/g,
		ya = /^\s+/,
		Oa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
		Pa = /<([\w:]+)/,
		Ab = /<tbody/i,
		Bb = /<|&#?\w+;/,
		eb = /<(?:script|style)/i,
		fb = /<(?:script|object|embed|option|style)/i,
		gb = RegExp("<(?:" + Ya + ")", "i"),
		hb = /checked\s*(?:[^=]|=\s*.checked.)/i,
		X = /\/(java|ecma)script/i,
		Ja = /^\s*<!(?:\[CDATA\[|\-\-)/,
		Y = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			area: [1, "<map>", "</map>"],
			_default: [0, "", ""]
		},
		ib = E(s);
	Y.optgroup = Y.option;
	Y.tbody = Y.tfoot = Y.colgroup = Y.caption = Y.thead;
	Y.th = Y.td;
	c.support.htmlSerialize || (Y._default = [1, "div<div>", "</div>"]);
	c.fn.extend(
	{
		text: function(a)
		{
			return c.isFunction(a) ? this.each(function(b)
			{
				var e = c(this);
				e.text(a.call(this, b, e.text()))
			}) : "object" != typeof a && a !== m ? this.empty().append((this[0] && this[0].ownerDocument || s).createTextNode(a)) : c.text(this)
		},
		wrapAll: function(a)
		{
			if (c.isFunction(a)) return this.each(function(b)
			{
				c(this).wrapAll(a.call(this, b))
			});
			if (this[0])
			{
				var b = c(a, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && b.insertBefore(this[0]);
				b.map(function()
				{
					for (var a = this; a.firstChild &&
						1 === a.firstChild.nodeType;) a = a.firstChild;
					return a
				}).append(this)
			}
			return this
		},
		wrapInner: function(a)
		{
			return c.isFunction(a) ? this.each(function(b)
			{
				c(this).wrapInner(a.call(this, b))
			}) : this.each(function()
			{
				var b = c(this),
					e = b.contents();
				e.length ? e.wrapAll(a) : b.append(a)
			})
		},
		wrap: function(a)
		{
			var b = c.isFunction(a);
			return this.each(function(e)
			{
				c(this).wrapAll(b ? a.call(this, e) : a)
			})
		},
		unwrap: function()
		{
			return this.parent().each(function()
			{
				c.nodeName(this, "body") || c(this).replaceWith(this.childNodes)
			}).end()
		},
		append: function()
		{
			return this.domManip(arguments, !0, function(a)
			{
				this.nodeType === 1 && this.appendChild(a)
			})
		},
		prepend: function()
		{
			return this.domManip(arguments, !0, function(a)
			{
				this.nodeType === 1 && this.insertBefore(a, this.firstChild)
			})
		},
		before: function()
		{
			if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a)
			{
				this.parentNode.insertBefore(a, this)
			});
			if (arguments.length)
			{
				var a = c.clean(arguments);
				a.push.apply(a, this.toArray());
				return this.pushStack(a, "before", arguments)
			}
		},
		after: function()
		{
			if (this[0] &&
				this[0].parentNode) return this.domManip(arguments, !1, function(a)
			{
				this.parentNode.insertBefore(a, this.nextSibling)
			});
			if (arguments.length)
			{
				var a = this.pushStack(this, "after", arguments);
				a.push.apply(a, c.clean(arguments));
				return a
			}
		},
		remove: function(a, b)
		{
			for (var e = 0, g; null != (g = this[e]); e++)
				if (!a || c.filter(a, [g]).length) !b && 1 === g.nodeType && (c.cleanData(g.getElementsByTagName("*")), c.cleanData([g])), g.parentNode && g.parentNode.removeChild(g);
			return this
		},
		empty: function()
		{
			for (var a = 0, b; null != (b = this[a]); a++)
				for (1 ===
					b.nodeType && c.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
			return this
		},
		clone: function(a, b)
		{
			a = null == a ? !1 : a;
			b = null == b ? a : b;
			return this.map(function()
			{
				return c.clone(this, a, b)
			})
		},
		html: function(a)
		{
			if (a === m) return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(zb, "") : null;
			if ("string" == typeof a && !eb.test(a) && (c.support.leadingWhitespace || !ya.test(a)) && !Y[(Pa.exec(a) || ["", ""])[1].toLowerCase()])
			{
				a = a.replace(Oa, "<$1></$2>");
				try
				{
					for (var b = 0, e = this.length; b < e; b++) 1 ===
						this[b].nodeType && (c.cleanData(this[b].getElementsByTagName("*")), this[b].innerHTML = a)
				}
				catch (g)
				{
					this.empty().append(a)
				}
			}
			else c.isFunction(a) ? this.each(function(b)
			{
				var e = c(this);
				e.html(a.call(this, b, e.html()))
			}) : this.empty().append(a);
			return this
		},
		replaceWith: function(a)
		{
			if (this[0] && this[0].parentNode)
			{
				if (c.isFunction(a)) return this.each(function(b)
				{
					var e = c(this),
						g = e.html();
					e.replaceWith(a.call(this, b, g))
				});
				"string" != typeof a && (a = c(a).detach());
				return this.each(function()
				{
					var b = this.nextSibling,
						e =
						this.parentNode;
					c(this).remove();
					b ? c(b).before(a) : c(e).append(a)
				})
			}
			return this.length ? this.pushStack(c(c.isFunction(a) ? a() : a), "replaceWith", a) : this
		},
		detach: function(a)
		{
			return this.remove(a, !0)
		},
		domManip: function(a, b, e)
		{
			var g, d, f, i = a[0],
				k = [];
			if (!c.support.checkClone && 3 === arguments.length && "string" == typeof i && hb.test(i)) return this.each(function()
			{
				c(this).domManip(a, b, e, !0)
			});
			if (c.isFunction(i)) return this.each(function(g)
			{
				var q = c(this);
				a[0] = i.call(this, g, b ? q.html() : m);
				q.domManip(a, b, e)
			});
			if (this[0])
			{
				f =
					i && i.parentNode;
				c.support.parentNode && f && 11 === f.nodeType && f.childNodes.length === this.length ? g = {
					fragment: f
				} : g = c.buildFragment(a, this, k);
				f = g.fragment;
				1 === f.childNodes.length ? d = f = f.firstChild : d = f.firstChild;
				if (d)
				{
					b = b && c.nodeName(d, "tr");
					d = 0;
					for (var n = this.length, j = n - 1; d < n; d++) e.call(b ? c.nodeName(this[d], "table") ? this[d].getElementsByTagName("tbody")[0] || this[d].appendChild(this[d].ownerDocument.createElement("tbody")) : this[d] : this[d], g.cacheable || 1 < n && d < j ? c.clone(f, !0, !0) : f)
				}
				k.length && c.each(k, h)
			}
			return this
		}
	});
	c.buildFragment = function(a, b, e)
	{
		var g, d, f, h, i = a[0];
		b && b[0] && (h = b[0].ownerDocument || b[0]);
		h.createDocumentFragment || (h = s);
		1 === a.length && "string" == typeof i && 512 > i.length && h === s && "<" === i.charAt(0) && !fb.test(i) && (c.support.checkClone || !hb.test(i)) && (c.support.html5Clone || !gb.test(i)) && (d = !0, f = c.fragments[i], f && 1 !== f && (g = f));
		g || (g = h.createDocumentFragment(), c.clean(a, h, g, e));
		d && (c.fragments[i] = f ? g : 1);
		return {
			fragment: g,
			cacheable: d
		}
	};
	c.fragments = {};
	c.each(
	{
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(a, b)
	{
		c.fn[a] = function(e)
		{
			var g = [],
				e = c(e),
				d = 1 === this.length && this[0].parentNode;
			if (d && 11 === d.nodeType && 1 === d.childNodes.length && 1 === e.length) return e[b](this[0]), this;
			for (var d = 0, f = e.length; d < f; d++)
			{
				var h = (0 < d ? this.clone(!0) : this).get();
				c(e[d])[b](h);
				g = g.concat(h)
			}
			return this.pushStack(g, a, e.selector)
		}
	});
	c.extend(
	{
		clone: function(a, b, e)
		{
			var g, d, f;
			c.support.html5Clone || !gb.test("<" + a.nodeName) ? g = a.cloneNode(!0) : (g = s.createElement("div"), ib.appendChild(g),
				g.innerHTML = a.outerHTML, g = g.firstChild);
			var h = g;
			if ((!c.support.noCloneEvent || !c.support.noCloneChecked) && (1 === a.nodeType || 11 === a.nodeType) && !c.isXMLDoc(a))
			{
				J(a, h);
				g = B(a);
				d = B(h);
				for (f = 0; g[f]; ++f) d[f] && J(g[f], d[f])
			}
			if (b && (z(a, h), e))
			{
				g = B(a);
				d = B(h);
				for (f = 0; g[f]; ++f) z(g[f], d[f])
			}
			return h
		},
		clean: function(a, b, e, g)
		{
			b = b || s;
			"undefined" == typeof b.createElement && (b = b.ownerDocument || b[0] && b[0].ownerDocument || s);
			for (var d = [], f, h = 0, k; null != (k = a[h]); h++)
				if ("number" == typeof k && (k += ""), k)
				{
					if ("string" == typeof k)
						if (Bb.test(k))
						{
							k =
								k.replace(Oa, "<$1></$2>");
							f = (Pa.exec(k) || ["", ""])[1].toLowerCase();
							var n = Y[f] || Y._default,
								j = n[0],
								l = b.createElement("div");
							b === s ? ib.appendChild(l) : E(b).appendChild(l);
							for (l.innerHTML = n[1] + k + n[2]; j--;) l = l.lastChild;
							if (!c.support.tbody)
							{
								j = Ab.test(k);
								n = "table" === f && !j ? l.firstChild && l.firstChild.childNodes : "<table>" === n[1] && !j ? l.childNodes : [];
								for (f = n.length - 1; 0 <= f; --f) c.nodeName(n[f], "tbody") && !n[f].childNodes.length && n[f].parentNode.removeChild(n[f])
							}!c.support.leadingWhitespace && ya.test(k) && l.insertBefore(b.createTextNode(ya.exec(k)[0]),
								l.firstChild);
							k = l.childNodes
						}
					else k = b.createTextNode(k);
					var r;
					if (!c.support.appendChecked)
						if (k[0] && "number" == typeof(r = k.length))
							for (f = 0; f < r; f++) i(k[f]);
						else i(k);
					k.nodeType ? d.push(k) : d = c.merge(d, k)
				}
			if (e)
			{
				a = function(a)
				{
					return !a.type || X.test(a.type)
				};
				for (h = 0; d[h]; h++) g && c.nodeName(d[h], "script") && (!d[h].type || "text/javascript" === d[h].type.toLowerCase()) ? g.push(d[h].parentNode ? d[h].parentNode.removeChild(d[h]) : d[h]) : (1 === d[h].nodeType && (b = c.grep(d[h].getElementsByTagName("script"), a), d.splice.apply(d, [h + 1, 0].concat(b))), e.appendChild(d[h]))
			}
			return d
		},
		cleanData: function(a)
		{
			for (var b, e, g = c.cache, d = c.event.special, f = c.support.deleteExpando, h = 0, i; null != (i = a[h]); h++)
				if (!i.nodeName || !c.noData[i.nodeName.toLowerCase()])
					if (e = i[c.expando])
					{
						if ((b = g[e]) && b.events)
						{
							for (var k in b.events) d[k] ? c.event.remove(i, k) : c.removeEvent(i, k, b.handle);
							b.handle && (b.handle.elem = null)
						}
						f ? delete i[c.expando] : i.removeAttribute && i.removeAttribute(c.expando);
						delete g[e]
					}
		}
	});
	var Ea = /alpha\([^)]*\)/i,
		Cb = /opacity=([^)]*)/,
		Db = /([A-Z]|^ms)/g,
		jb = /^-?\d+(?:px)?$/i,
		Eb = /^-?\d/,
		Fb = /^([\-+])=([\-+.\de]+)/,
		sa = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Wa = ["Left", "Right"],
		Xa = ["Top", "Bottom"],
		pa, kb, Qa;
	c.fn.css = function(a, b)
	{
		return 2 === arguments.length && b === m ? this : c.access(this, a, b, !0, function(a, b, e)
		{
			return e !== m ? c.style(a, b, e) : c.css(a, b)
		})
	};
	c.extend(
	{
		cssHooks:
		{
			opacity:
			{
				get: function(a, b)
				{
					if (b)
					{
						var c = pa(a, "opacity", "opacity");
						return "" === c ? "1" : c
					}
					return a.style.opacity
				}
			}
		},
		cssNumber:
		{
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps:
		{
			"float": c.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(a, b, e, g)
		{
			if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style)
			{
				var d, f = c.camelCase(b),
					h = a.style,
					i = c.cssHooks[f],
					b = c.cssProps[f] || f;
				if (e === m) return i && "get" in i && (d = i.get(a, !1, g)) !== m ? d : h[b];
				g = typeof e;
				"string" === g && (d = Fb.exec(e)) && (e = +(d[1] + 1) * +d[2] + parseFloat(c.css(a, b)), g = "number");
				if (!(null == e || "number" === g && isNaN(e)))
					if ("number" === g && !c.cssNumber[f] && (e += "px"), !i || !("set" in i) || (e = i.set(a,
							e)) !== m) try
					{
						h[b] = e
					}
				catch (k)
				{}
			}
		},
		css: function(a, b, e)
		{
			var g, d, b = c.camelCase(b);
			d = c.cssHooks[b];
			b = c.cssProps[b] || b;
			"cssFloat" === b && (b = "float");
			if (d && "get" in d && (g = d.get(a, !0, e)) !== m) return g;
			if (pa) return pa(a, b)
		},
		swap: function(a, b, c)
		{
			var e = {},
				g;
			for (g in b) e[g] = a.style[g], a.style[g] = b[g];
			c.call(a);
			for (g in b) a.style[g] = e[g]
		}
	});
	c.curCSS = c.css;
	c.each(["height", "width"], function(a, b)
	{
		c.cssHooks[b] = {
			get: function(a, e, g)
			{
				var f;
				if (e)
				{
					if (0 !== a.offsetWidth) return d(a, b, g);
					c.swap(a, sa, function()
					{
						f = d(a, b, g)
					});
					return f
				}
			},
			set: function(a, b)
			{
				if (!jb.test(b)) return b;
				b = parseFloat(b);
				if (0 <= b) return b + "px"
			}
		}
	});
	c.support.opacity || (c.cssHooks.opacity = {
		get: function(a, b)
		{
			return Cb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
		},
		set: function(a, b)
		{
			var e = a.style,
				g = a.currentStyle,
				d = c.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
				f = g && g.filter || e.filter || "";
			e.zoom = 1;
			if (1 <= b && "" === c.trim(f.replace(Ea, "")) && (e.removeAttribute("filter"), g && !g.filter)) return;
			e.filter = Ea.test(f) ?
				f.replace(Ea, d) : f + " " + d
		}
	});
	c(function()
	{
		c.support.reliableMarginRight || (c.cssHooks.marginRight = {
			get: function(a, b)
			{
				var e;
				c.swap(a,
				{
					display: "inline-block"
				}, function()
				{
					b ? e = pa(a, "margin-right", "marginRight") : e = a.style.marginRight
				});
				return e
			}
		})
	});
	s.defaultView && s.defaultView.getComputedStyle && (kb = function(a, b)
	{
		var e, g, d, b = b.replace(Db, "-$1").toLowerCase();
		(g = a.ownerDocument.defaultView) && (d = g.getComputedStyle(a, null)) && (e = d.getPropertyValue(b), "" === e && !c.contains(a.ownerDocument.documentElement, a) && (e =
			c.style(a, b)));
		return e
	});
	s.documentElement.currentStyle && (Qa = function(a, b)
	{
		var c, e, g, d = a.currentStyle && a.currentStyle[b],
			f = a.style;
		null === d && f && (g = f[b]) && (d = g);
		!jb.test(d) && Eb.test(d) && (c = f.left, e = a.runtimeStyle && a.runtimeStyle.left, e && (a.runtimeStyle.left = a.currentStyle.left), f.left = "fontSize" === b ? "1em" : d || 0, d = f.pixelLeft + "px", f.left = c, e && (a.runtimeStyle.left = e));
		return "" === d ? "auto" : d
	});
	pa = kb || Qa;
	c.expr && c.expr.filters && (c.expr.filters.hidden = function(a)
	{
		var b = a.offsetHeight;
		return 0 === a.offsetWidth &&
			0 === b || !c.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || c.css(a, "display"))
	}, c.expr.filters.visible = function(a)
	{
		return !c.expr.filters.hidden(a)
	});
	var Gb = /%20/g,
		qb = /\[\]$/,
		lb = /\r?\n/g,
		Hb = /#.*$/,
		Ib = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
		mb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
		Jb = /^(?:GET|HEAD)$/,
		Kb = /^\/\//,
		Ra = /\?/,
		Lb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		nb = /^(?:select|textarea)/i,
		Ia = /\s+/,
		Sa =
		/([?&])_=[^&]*/,
		Ta = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
		na = c.fn.load,
		ga = {},
		Ua = {},
		ta, oa, za = ["*/"] + ["*"];
	try
	{
		ta = T.href
	}
	catch (ob)
	{
		ta = s.createElement("a"), ta.href = "", ta = ta.href
	}
	oa = Ta.exec(ta.toLowerCase()) || [];
	c.fn.extend(
	{
		load: function(a, b, e)
		{
			if ("string" != typeof a && na) return na.apply(this, arguments);
			if (!this.length) return this;
			var g = a.indexOf(" ");
			if (0 <= g) var d = a.slice(g, a.length),
				a = a.slice(0, g);
			g = "GET";
			b && (c.isFunction(b) ? (e = b, b = m) : "object" == typeof b && (b = c.param(b, c.ajaxSettings.traditional),
				g = "POST"));
			var f = this;
			c.ajax(
			{
				url: a,
				type: g,
				dataType: "html",
				data: b,
				complete: function(a, b, g)
				{
					g = a.responseText;
					a.isResolved() && (a.done(function(a)
					{
						g = a
					}), f.html(d ? c("<div>").append(g.replace(Lb, "")).find(d) : g));
					e && f.each(e, [g, b, a])
				}
			});
			return this
		},
		serialize: function()
		{
			return c.param(this.serializeArray())
		},
		serializeArray: function()
		{
			return this.map(function()
			{
				return this.elements ? c.makeArray(this.elements) : this
			}).filter(function()
			{
				return this.name && !this.disabled && (this.checked || nb.test(this.nodeName) ||
					mb.test(this.type))
			}).map(function(a, b)
			{
				var e = c(this).val();
				return null == e ? null : c.isArray(e) ? c.map(e, function(a)
				{
					return {
						name: b.name,
						value: a.replace(lb, "\r\n")
					}
				}) :
				{
					name: b.name,
					value: e.replace(lb, "\r\n")
				}
			}).get()
		}
	});
	c.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","), function(a, b)
	{
		c.fn[b] = function(a)
		{
			return this.on(b, a)
		}
	});
	c.each(["get", "post"], function(a, b)
	{
		c[b] = function(a, e, g, d)
		{
			c.isFunction(e) && (d = d || g, g = e, e = m);
			return c.ajax(
			{
				type: b,
				url: a,
				data: e,
				success: g,
				dataType: d
			})
		}
	});
	c.extend(
	{
		getScript: function(a, b)
		{
			return c.get(a, m, b, "script")
		},
		getJSON: function(a, b, e)
		{
			return c.get(a, b, e, "json")
		},
		ajaxSetup: function(a, b)
		{
			b ? t(a, c.ajaxSettings) : (b = a, a = c.ajaxSettings);
			t(a, b);
			return a
		},
		ajaxSettings:
		{
			url: ta,
			isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(oa[1]),
			global: !0,
			type: "GET",
			contentType: "application/x-www-form-urlencoded",
			processData: !0,
			async: !0,
			accepts:
			{
				xml: "application/xml, text/xml",
				html: "text/html",
				text: "text/plain",
				json: "application/json, text/javascript",
				"*": za
			},
			contents:
			{
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields:
			{
				xml: "responseXML",
				text: "responseText"
			},
			converters:
			{
				"* text": f.String,
				"text html": !0,
				"text json": c.parseJSON,
				"text xml": c.parseXML
			},
			flatOptions:
			{
				context: !0,
				url: !0
			}
		},
		ajaxPrefilter: k(ga),
		ajaxTransport: k(Ua),
		ajax: function(a, b)
		{
			function e(a, b, o, u)
			{
				if (2 !== O)
				{
					O = 2;
					x && clearTimeout(x);
					B = m;
					p = u || "";
					H.readyState = 0 < a ? 4 : 0;
					var G, j, l, u = b;
					if (o)
					{
						var r = g,
							t = H,
							s = r.contents,
							E = r.dataTypes,
							Za = r.responseFields,
							z, P, w, C;
						for (P in Za) P in o && (t[Za[P]] = o[P]);
						for (;
							"*" === E[0];) E.shift(), z === m && (z = r.mimeType || t.getResponseHeader("content-type"));
						if (z)
							for (P in s)
								if (s[P] && s[P].test(z))
								{
									E.unshift(P);
									break
								}
						if (E[0] in o) w = E[0];
						else
						{
							for (P in o)
							{
								if (!E[0] || r.converters[P + " " + E[0]])
								{
									w = P;
									break
								}
								C || (C = P)
							}
							w = w || C
						}
						w ? (w !== E[0] && E.unshift(w), o = o[w]) : o = void 0
					}
					else o = m;
					if (200 <= a && 300 > a || 304 === a)
					{
						if (g.ifModified)
						{
							if (z = H.getResponseHeader("Last-Modified")) c.lastModified[n] = z;
							if (z = H.getResponseHeader("Etag")) c.etag[n] = z
						}
						if (304 === a) u = "notmodified", G = !0;
						else try
						{
							z = g;
							z.dataFilter &&
								(o = z.dataFilter(o, z.dataType));
							var D = z.dataTypes;
							P = {};
							var ka, J, y = D.length,
								K, W = D[0],
								N, Q, qa, T, L;
							for (ka = 1; ka < y; ka++)
							{
								if (1 === ka)
									for (J in z.converters) "string" == typeof J && (P[J.toLowerCase()] = z.converters[J]);
								N = W;
								W = D[ka];
								if ("*" === W) W = N;
								else if ("*" !== N && N !== W)
								{
									Q = N + " " + W;
									qa = P[Q] || P["* " + W];
									if (!qa)
										for (T in L = m, P)
											if (K = T.split(" "), K[0] === N || "*" === K[0])
												if (L = P[K[1] + " " + W])
												{
													T = P[T];
													!0 === T ? qa = L : !0 === L && (qa = T);
													break
												}!qa && !L && c.error("No conversion from " + Q.replace(" ", " to "));
									!0 !== qa && (o = qa ? qa(o) : L(T(o)))
								}
							}
							j = o;
							u = "success";
							G = !0
						}
						catch (F)
						{
							u = "parsererror", l = F
						}
					}
					else if (l = u, !u || a) u = "error", 0 > a && (a = 0);
					H.status = a;
					H.statusText = "" + (b || u);
					G ? h.resolveWith(d, [j, u, H]) : h.rejectWith(d, [H, u, l]);
					H.statusCode(k);
					k = m;
					v && f.trigger("ajax" + (G ? "Success" : "Error"), [H, g, G ? j : l]);
					i.fireWith(d, [H, u]);
					v && (f.trigger("ajaxComplete", [H, g]), --c.active || c.event.trigger("ajaxStop"))
				}
			}
			"object" == typeof a && (b = a, a = m);
			var b = b ||
				{},
				g = c.ajaxSetup(
				{}, b),
				d = g.context || g,
				f = d !== g && (d.nodeType || d instanceof c) ? c(d) : c.event,
				h = c.Deferred(),
				i = c.Callbacks("once memory"),
				k = g.statusCode ||
				{},
				n, j = {},
				l = {},
				p, t, B, x, G, O = 0,
				v, s, H = {
					readyState: 0,
					setRequestHeader: function(a, b)
					{
						if (!O)
						{
							var c = a.toLowerCase(),
								a = l[c] = l[c] || a;
							j[a] = b
						}
						return this
					},
					getAllResponseHeaders: function()
					{
						return 2 === O ? p : null
					},
					getResponseHeader: function(a)
					{
						var b;
						if (2 === O)
						{
							if (!t)
								for (t = {}; b = Ib.exec(p);) t[b[1].toLowerCase()] = b[2];
							b = t[a.toLowerCase()]
						}
						return b === m ? null : b
					},
					overrideMimeType: function(a)
					{
						O || (g.mimeType = a);
						return this
					},
					abort: function(a)
					{
						a = a || "abort";
						B && B.abort(a);
						e(0, a);
						return this
					}
				};
			h.promise(H);
			H.success =
				H.done;
			H.error = H.fail;
			H.complete = i.add;
			H.statusCode = function(a)
			{
				if (a)
				{
					var b;
					if (2 > O)
						for (b in a) k[b] = [k[b], a[b]];
					else b = a[H.status], H.then(b, b)
				}
				return this
			};
			g.url = ((a || g.url) + "").replace(Hb, "").replace(Kb, oa[1] + "//");
			g.dataTypes = c.trim(g.dataType || "*").toLowerCase().split(Ia);
			null == g.crossDomain && (G = Ta.exec(g.url.toLowerCase()), g.crossDomain = !(!G || G[1] == oa[1] && G[2] == oa[2] && (G[3] || ("http:" === G[1] ? 80 : 443)) == (oa[3] || ("http:" === oa[1] ? 80 : 443))));
			g.data && g.processData && "string" != typeof g.data && (g.data = c.param(g.data,
				g.traditional));
			r(ga, g, b, H);
			if (2 === O) return !1;
			v = g.global;
			g.type = g.type.toUpperCase();
			g.hasContent = !Jb.test(g.type);
			v && 0 === c.active++ && c.event.trigger("ajaxStart");
			if (!g.hasContent && (g.data && (g.url += (Ra.test(g.url) ? "&" : "?") + g.data, delete g.data), n = g.url, !1 === g.cache))
			{
				G = c.now();
				var E = g.url.replace(Sa, "$1_=" + G);
				g.url = E + (E === g.url ? (Ra.test(g.url) ? "&" : "?") + "_=" + G : "")
			}(g.data && g.hasContent && !1 !== g.contentType || b.contentType) && H.setRequestHeader("Content-Type", g.contentType);
			g.ifModified && (n = n || g.url, c.lastModified[n] &&
				H.setRequestHeader("If-Modified-Since", c.lastModified[n]), c.etag[n] && H.setRequestHeader("If-None-Match", c.etag[n]));
			H.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + za + "; q=0.01" : "") : g.accepts["*"]);
			for (s in g.headers) H.setRequestHeader(s, g.headers[s]);
			if (g.beforeSend && (!1 === g.beforeSend.call(d, H, g) || 2 === O)) return H.abort(), !1;
			for (s in
				{
					success: 1,
					error: 1,
					complete: 1
				}) H[s](g[s]);
			if (B = r(Ua, g, b, H))
			{
				H.readyState = 1;
				v && f.trigger("ajaxSend", [H, g]);
				g.async && 0 < g.timeout && (x = setTimeout(function()
				{
					H.abort("timeout")
				}, g.timeout));
				try
				{
					O = 1, B.send(j, e)
				}
				catch (z)
				{
					if (2 > O) e(-1, z);
					else throw z;
				}
			}
			else e(-1, "No Transport");
			return H
		},
		param: function(a, b)
		{
			var e = [],
				g = function(a, b)
				{
					b = c.isFunction(b) ? b() : b;
					e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
				};
			b === m && (b = c.ajaxSettings.traditional);
			if (c.isArray(a) || a.jquery && !c.isPlainObject(a)) c.each(a, function()
			{
				g(this.name, this.value)
			});
			else
				for (var d in a) x(d, a[d], b, g);
			return e.join("&").replace(Gb,
				"+")
		}
	});
	c.extend(
	{
		active: 0,
		lastModified:
		{},
		etag:
		{}
	});
	var Mb = c.now(),
		ja = /(\=)\?(&|$)|\?\?/i;
	c.ajaxSetup(
	{
		jsonp: "callback",
		jsonpCallback: function()
		{
			return c.expando + "_" + Mb++
		}
	});
	c.ajaxPrefilter("json jsonp", function(a, b, e)
	{
		b = "application/x-www-form-urlencoded" === a.contentType && "string" == typeof a.data;
		if ("jsonp" === a.dataTypes[0] || !1 !== a.jsonp && (ja.test(a.url) || b && ja.test(a.data)))
		{
			var g, d = a.jsonpCallback = c.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback,
				h = f[d],
				i = a.url,
				k = a.data,
				n = "$1" + d +
				"$2";
			!1 !== a.jsonp && (i = i.replace(ja, n), a.url === i && (b && (k = k.replace(ja, n)), a.data === k && (i += (/\?/.test(i) ? "&" : "?") + a.jsonp + "=" + d)));
			a.url = i;
			a.data = k;
			f[d] = function(a)
			{
				g = [a]
			};
			e.always(function()
			{
				f[d] = h;
				g && c.isFunction(h) && f[d](g[0])
			});
			a.converters["script json"] = function()
			{
				g || c.error(d + " was not called");
				return g[0]
			};
			a.dataTypes[0] = "json";
			return "script"
		}
	});
	c.ajaxSetup(
	{
		accepts:
		{
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents:
		{
			script: /javascript|ecmascript/
		},
		converters:
		{
			"text script": function(a)
			{
				c.globalEval(a);
				return a
			}
		}
	});
	c.ajaxPrefilter("script", function(a)
	{
		a.cache === m && (a.cache = !1);
		a.crossDomain && (a.type = "GET", a.global = !1)
	});
	c.ajaxTransport("script", function(a)
	{
		if (a.crossDomain)
		{
			var b, c = s.head || s.getElementsByTagName("head")[0] || s.documentElement;
			return {
				send: function(e, g)
				{
					b = s.createElement("script");
					b.async = "async";
					a.scriptCharset && (b.charset = a.scriptCharset);
					b.src = a.url;
					b.onload = b.onreadystatechange = function(a, e)
					{
						if (e || !b.readyState || /loaded|complete/.test(b.readyState)) b.onload =
							b.onreadystatechange = null, c && b.parentNode && c.removeChild(b), b = m, e || g(200, "success")
					};
					c.insertBefore(b, c.firstChild)
				},
				abort: function()
				{
					b && b.onload(0, 1)
				}
			}
		}
	});
	var Aa = f.ActiveXObject ? function()
		{
			for (var a in aa) aa[a](0, 1)
		} : !1,
		ea = 0,
		aa;
	c.ajaxSettings.xhr = f.ActiveXObject ? function()
	{
		var a;
		if (!(a = !this.isLocal && v())) a:
		{
			try
			{
				a = new f.ActiveXObject("Microsoft.XMLHTTP");
				break a
			}
			catch (b)
			{}
			a = void 0
		}
		return a
	} : v;
	(function(a)
	{
		c.extend(c.support,
		{
			ajax: !!a,
			cors: !!a && "withCredentials" in a
		})
	})(c.ajaxSettings.xhr());
	c.support.ajax &&
		c.ajaxTransport(function(a)
		{
			if (!a.crossDomain || c.support.cors)
			{
				var b;
				return {
					send: function(e, g)
					{
						var d = a.xhr(),
							h, i;
						a.username ? d.open(a.type, a.url, a.async, a.username, a.password) : d.open(a.type, a.url, a.async);
						if (a.xhrFields)
							for (i in a.xhrFields) d[i] = a.xhrFields[i];
						a.mimeType && d.overrideMimeType && d.overrideMimeType(a.mimeType);
						!a.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
						try
						{
							for (i in e) d.setRequestHeader(i, e[i])
						}
						catch (k)
						{}
						d.send(a.hasContent && a.data || null);
						b = function(e,
							f)
						{
							var u, i, k, n, j;
							try
							{
								if (b && (f || 4 === d.readyState))
									if (b = m, h && (d.onreadystatechange = c.noop, Aa && delete aa[h]), f) 4 !== d.readyState && d.abort();
									else
									{
										u = d.status;
										k = d.getAllResponseHeaders();
										n = {};
										(j = d.responseXML) && j.documentElement && (n.xml = j);
										n.text = d.responseText;
										try
										{
											i = d.statusText
										}
										catch (l)
										{
											i = ""
										}!u && a.isLocal && !a.crossDomain ? u = n.text ? 200 : 404 : 1223 === u && (u = 204)
									}
							}
							catch (G)
							{
								f || g(-1, G)
							}
							n && g(u, i, n, k)
						};
						!a.async || 4 === d.readyState ? b() : (h = ++ea, Aa && (aa || (aa = {}, c(f).unload(Aa)), aa[h] = b), d.onreadystatechange = b)
					},
					abort: function()
					{
						b &&
							b(0, 1)
					}
				}
			}
		});
	var Ga = {},
		ba, fa, pb = /^(?:toggle|show|hide)$/,
		Ba = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
		Fa, Ha = [
			["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
			["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
			["opacity"]
		],
		b;
	c.fn.extend(
	{
		show: function(a, b, e)
		{
			var g;
			if (a || 0 === a) return this.animate(p("show", 3), a, b, e);
			b = 0;
			for (e = this.length; b < e; b++) a = this[b], a.style && (g = a.style.display, !c._data(a, "olddisplay") && "none" === g && (g = a.style.display = ""), "" === g && "none" === c.css(a, "display") &&
				c._data(a, "olddisplay", w(a.nodeName)));
			for (b = 0; b < e; b++)
				if (a = this[b], a.style && (g = a.style.display, "" === g || "none" === g)) a.style.display = c._data(a, "olddisplay") || "";
			return this
		},
		hide: function(a, b, e)
		{
			if (a || 0 === a) return this.animate(p("hide", 3), a, b, e);
			for (var g, b = 0, e = this.length; b < e; b++) a = this[b], a.style && (g = c.css(a, "display"), "none" !== g && !c._data(a, "olddisplay") && c._data(a, "olddisplay", g));
			for (b = 0; b < e; b++) this[b].style && (this[b].style.display = "none");
			return this
		},
		_toggle: c.fn.toggle,
		toggle: function(a, b,
			e)
		{
			var g = "boolean" == typeof a;
			c.isFunction(a) && c.isFunction(b) ? this._toggle.apply(this, arguments) : null == a || g ? this.each(function()
			{
				var b = g ? a : c(this).is(":hidden");
				c(this)[b ? "show" : "hide"]()
			}) : this.animate(p("toggle", 3), a, b, e);
			return this
		},
		fadeTo: function(a, b, c, e)
		{
			return this.filter(":hidden").css("opacity", 0).show().end().animate(
			{
				opacity: b
			}, a, c, e)
		},
		animate: function(a, b, e, g)
		{
			function d()
			{
				!1 === f.queue && c._mark(this);
				var b = c.extend(
					{}, f),
					e = 1 === this.nodeType,
					g = e && c(this).is(":hidden"),
					o, q, u, h, i, k, n, G;
				b.animatedProperties = {};
				for (u in a)
				{
					o = c.camelCase(u);
					u !== o && (a[o] = a[u], delete a[u]);
					q = a[o];
					c.isArray(q) ? (b.animatedProperties[o] = q[1], q = a[o] = q[0]) : b.animatedProperties[o] = b.specialEasing && b.specialEasing[o] || b.easing || "swing";
					if ("hide" === q && g || "show" === q && !g) return b.complete.call(this);
					e && ("height" === o || "width" === o) && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === c.css(this, "display") && "none" === c.css(this, "float") && (!c.support.inlineBlockNeedsLayout || "inline" ===
						w(this.nodeName) ? this.style.display = "inline-block" : this.style.zoom = 1))
				}
				null != b.overflow && (this.style.overflow = "hidden");
				for (u in a) e = new c.fx(this, b, u), q = a[u], pb.test(q) ? (G = c._data(this, "toggle" + u) || ("toggle" === q ? g ? "show" : "hide" : 0), G ? (c._data(this, "toggle" + u, "show" === G ? "hide" : "show"), e[G]()) : e[q]()) : (h = Ba.exec(q), i = e.cur(), h ? (k = parseFloat(h[2]), n = h[3] || (c.cssNumber[u] ? "" : "px"), "px" !== n && (c.style(this, u, (k || 1) + n), i *= (k || 1) / e.cur(), c.style(this, u, i + n)), h[1] && (k = ("-=" === h[1] ? -1 : 1) * k + i), e.custom(i, k,
					n)) : e.custom(i, q, ""));
				return !0
			}
			var f = c.speed(b, e, g);
			if (c.isEmptyObject(a)) return this.each(f.complete, [!1]);
			a = c.extend(
			{}, a);
			return !1 === f.queue ? this.each(d) : this.queue(f.queue, d)
		},
		stop: function(a, b, e)
		{
			"string" != typeof a && (e = b, b = a, a = m);
			b && !1 !== a && this.queue(a || "fx", []);
			return this.each(function()
			{
				var b, g = !1,
					o = c.timers,
					d = c._data(this);
				e || c._unmark(!0, this);
				if (null == a)
					for (b in d)
					{
						if (d[b] && d[b].stop && b.indexOf(".run") === b.length - 4)
						{
							var f = d[b];
							c.removeData(this, b, !0);
							f.stop(e)
						}
					}
				else if (d[b = a + ".run"] &&
					d[b].stop) d = d[b], c.removeData(this, b, !0), d.stop(e);
				for (b = o.length; b--;) o[b].elem === this && (null == a || o[b].queue === a) && (e ? o[b](!0) : o[b].saveState(), g = !0, o.splice(b, 1));
				(!e || !g) && c.dequeue(this, a)
			})
		}
	});
	c.each(
	{
		slideDown: p("show", 1),
		slideUp: p("hide", 1),
		slideToggle: p("toggle", 1),
		fadeIn:
		{
			opacity: "show"
		},
		fadeOut:
		{
			opacity: "hide"
		},
		fadeToggle:
		{
			opacity: "toggle"
		}
	}, function(a, b)
	{
		c.fn[a] = function(a, c, e)
		{
			return this.animate(b, a, c, e)
		}
	});
	c.extend(
	{
		speed: function(a, b, e)
		{
			var g = a && "object" == typeof a ? c.extend(
			{}, a) :
			{
				complete: e ||
					!e && b || c.isFunction(a) && a,
				duration: a,
				easing: e && b || b && !c.isFunction(b) && b
			};
			g.duration = c.fx.off ? 0 : "number" == typeof g.duration ? g.duration : g.duration in c.fx.speeds ? c.fx.speeds[g.duration] : c.fx.speeds._default;
			if (null == g.queue || !0 === g.queue) g.queue = "fx";
			g.old = g.complete;
			g.complete = function(a)
			{
				c.isFunction(g.old) && g.old.call(this);
				g.queue ? c.dequeue(this, g.queue) : !1 !== a && c._unmark(this)
			};
			return g
		},
		easing:
		{
			linear: function(a, b, c, e)
			{
				return c + e * a
			},
			swing: function(a, b, c, e)
			{
				return (-Math.cos(a * Math.PI) / 2 + 0.5) *
					e + c
			}
		},
		timers: [],
		fx: function(a, b, c)
		{
			this.options = b;
			this.elem = a;
			this.prop = c;
			b.orig = b.orig ||
			{}
		}
	});
	c.fx.prototype = {
		update: function()
		{
			this.options.step && this.options.step.call(this.elem, this.now, this);
			(c.fx.step[this.prop] || c.fx.step._default)(this)
		},
		cur: function()
		{
			if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
			var a, b = c.css(this.elem, this.prop);
			return isNaN(a = parseFloat(b)) ? !b || "auto" === b ? 0 : b : a
		},
		custom: function(a, e, g)
		{
			function d(a)
			{
				return f.step(a)
			}
			var f = this,
				h = c.fx;
			this.startTime = b || l();
			this.end = e;
			this.now = this.start = a;
			this.pos = this.state = 0;
			this.unit = g || this.unit || (c.cssNumber[this.prop] ? "" : "px");
			d.queue = this.options.queue;
			d.elem = this.elem;
			d.saveState = function()
			{
				f.options.hide && c._data(f.elem, "fxshow" + f.prop) === m && c._data(f.elem, "fxshow" + f.prop, f.start)
			};
			d() && c.timers.push(d) && !Fa && (Fa = setInterval(h.tick, h.interval))
		},
		show: function()
		{
			var a = c._data(this.elem, "fxshow" + this.prop);
			this.options.orig[this.prop] = a || c.style(this.elem, this.prop);
			this.options.show = !0;
			a !== m ? this.custom(this.cur(), a) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur());
			c(this.elem).show()
		},
		hide: function()
		{
			this.options.orig[this.prop] = c._data(this.elem, "fxshow" + this.prop) || c.style(this.elem, this.prop);
			this.options.hide = !0;
			this.custom(this.cur(), 0)
		},
		step: function(a)
		{
			var e, g, d = b || l(),
				f = !0,
				h = this.elem,
				i = this.options;
			if (a || d >= i.duration + this.startTime)
			{
				this.now = this.end;
				this.pos = this.state = 1;
				this.update();
				i.animatedProperties[this.prop] = !0;
				for (e in i.animatedProperties) !0 !==
					i.animatedProperties[e] && (f = !1);
				if (f)
				{
					null != i.overflow && !c.support.shrinkWrapBlocks && c.each(["", "X", "Y"], function(a, b)
					{
						h.style["overflow" + b] = i.overflow[a]
					});
					i.hide && c(h).hide();
					if (i.hide || i.show)
						for (e in i.animatedProperties) c.style(h, e, i.orig[e]), c.removeData(h, "fxshow" + e, !0), c.removeData(h, "toggle" + e, !0);
					(a = i.complete) && (i.complete = !1, a.call(h))
				}
				return !1
			}
			Infinity == i.duration ? this.now = d : (g = d - this.startTime, this.state = g / i.duration, this.pos = c.easing[i.animatedProperties[this.prop]](this.state, g, 0,
				1, i.duration), this.now = this.start + (this.end - this.start) * this.pos);
			this.update();
			return !0
		}
	};
	c.extend(c.fx,
	{
		tick: function()
		{
			for (var a, b = c.timers, e = 0; e < b.length; e++) a = b[e], !a() && b[e] === a && b.splice(e--, 1);
			b.length || c.fx.stop()
		},
		interval: 13,
		stop: function()
		{
			clearInterval(Fa);
			Fa = null
		},
		speeds:
		{
			slow: 600,
			fast: 200,
			_default: 400
		},
		step:
		{
			opacity: function(a)
			{
				c.style(a.elem, "opacity", a.now)
			},
			_default: function(a)
			{
				a.elem.style && null != a.elem.style[a.prop] ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
			}
		}
	});
	c.each(["width",
		"height"
	], function(a, b)
	{
		c.fx.step[b] = function(a)
		{
			c.style(a.elem, b, Math.max(0, a.now) + a.unit)
		}
	});
	c.expr && c.expr.filters && (c.expr.filters.animated = function(a)
	{
		return c.grep(c.timers, function(b)
		{
			return a === b.elem
		}).length
	});
	var e = /^t(?:able|d|h)$/i,
		g = /^(?:body|html)$/i;
	"getBoundingClientRect" in s.documentElement ? c.fn.offset = function(a)
	{
		var b = this[0],
			e;
		if (a) return this.each(function(b)
		{
			c.offset.setOffset(this, a, b)
		});
		if (!b || !b.ownerDocument) return null;
		if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
		try
		{
			e = b.getBoundingClientRect()
		}
		catch (g)
		{}
		var d = b.ownerDocument,
			f = d.documentElement;
		if (!e || !c.contains(f, b)) return e ?
		{
			top: e.top,
			left: e.left
		} :
		{
			top: 0,
			left: 0
		};
		b = d.body;
		d = y(d);
		return {
			top: e.top + (d.pageYOffset || c.support.boxModel && f.scrollTop || b.scrollTop) - (f.clientTop || b.clientTop || 0),
			left: e.left + (d.pageXOffset || c.support.boxModel && f.scrollLeft || b.scrollLeft) - (f.clientLeft || b.clientLeft || 0)
		}
	} : c.fn.offset = function(a)
	{
		var b = this[0];
		if (a) return this.each(function(b)
		{
			c.offset.setOffset(this, a, b)
		});
		if (!b ||
			!b.ownerDocument) return null;
		if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
		var g, d = b.offsetParent,
			f = b.ownerDocument,
			h = f.documentElement,
			i = f.body;
		g = (f = f.defaultView) ? f.getComputedStyle(b, null) : b.currentStyle;
		for (var k = b.offsetTop, n = b.offsetLeft;
			(b = b.parentNode) && b !== i && b !== h && !(c.support.fixedPosition && "fixed" === g.position);) g = f ? f.getComputedStyle(b, null) : b.currentStyle, k -= b.scrollTop, n -= b.scrollLeft, b === d && (k += b.offsetTop, n += b.offsetLeft, c.support.doesNotAddBorder && (!c.support.doesAddBorderForTableAndCells ||
			!e.test(b.nodeName)) && (k += parseFloat(g.borderTopWidth) || 0, n += parseFloat(g.borderLeftWidth) || 0), d = b.offsetParent), c.support.subtractsBorderForOverflowNotVisible && "visible" !== g.overflow && (k += parseFloat(g.borderTopWidth) || 0, n += parseFloat(g.borderLeftWidth) || 0);
		if ("relative" === g.position || "static" === g.position) k += i.offsetTop, n += i.offsetLeft;
		c.support.fixedPosition && "fixed" === g.position && (k += Math.max(h.scrollTop, i.scrollTop), n += Math.max(h.scrollLeft, i.scrollLeft));
		return {
			top: k,
			left: n
		}
	};
	c.offset = {
		bodyOffset: function(a)
		{
			var b =
				a.offsetTop,
				e = a.offsetLeft;
			c.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(c.css(a, "marginTop")) || 0, e += parseFloat(c.css(a, "marginLeft")) || 0);
			return {
				top: b,
				left: e
			}
		},
		setOffset: function(a, b, e)
		{
			var g = c.css(a, "position");
			"static" === g && (a.style.position = "relative");
			var d = c(a),
				f = d.offset(),
				h = c.css(a, "top"),
				i = c.css(a, "left"),
				k = {},
				n = {},
				j, l;
			("absolute" === g || "fixed" === g) && -1 < c.inArray("auto", [h, i]) ? (n = d.position(), j = n.top, l = n.left) : (j = parseFloat(h) || 0, l = parseFloat(i) || 0);
			c.isFunction(b) && (b = b.call(a,
				e, f));
			null != b.top && (k.top = b.top - f.top + j);
			null != b.left && (k.left = b.left - f.left + l);
			"using" in b ? b.using.call(a, k) : d.css(k)
		}
	};
	c.fn.extend(
	{
		position: function()
		{
			if (!this[0]) return null;
			var a = this[0],
				b = this.offsetParent(),
				e = this.offset(),
				d = g.test(b[0].nodeName) ?
				{
					top: 0,
					left: 0
				} : b.offset();
			e.top -= parseFloat(c.css(a, "marginTop")) || 0;
			e.left -= parseFloat(c.css(a, "marginLeft")) || 0;
			d.top += parseFloat(c.css(b[0], "borderTopWidth")) || 0;
			d.left += parseFloat(c.css(b[0], "borderLeftWidth")) || 0;
			return {
				top: e.top - d.top,
				left: e.left -
					d.left
			}
		},
		offsetParent: function()
		{
			return this.map(function()
			{
				for (var a = this.offsetParent || s.body; a && !g.test(a.nodeName) && "static" === c.css(a, "position");) a = a.offsetParent;
				return a
			})
		}
	});
	c.each(["Left", "Top"], function(a, b)
	{
		var e = "scroll" + b;
		c.fn[e] = function(b)
		{
			var g, d;
			return b === m ? (g = this[0], !g ? null : (d = y(g)) ? "pageXOffset" in d ? d[a ? "pageYOffset" : "pageXOffset"] : c.support.boxModel && d.document.documentElement[e] || d.document.body[e] : g[e]) : this.each(function()
			{
				(d = y(this)) ? d.scrollTo(a ? c(d).scrollLeft() : b, a ? b :
					c(d).scrollTop()): this[e] = b
			})
		}
	});
	c.each(["Height", "Width"], function(a, b)
	{
		var e = b.toLowerCase();
		c.fn["inner" + b] = function()
		{
			var a = this[0];
			return a ? a.style ? parseFloat(c.css(a, e, "padding")) : this[e]() : null
		};
		c.fn["outer" + b] = function(a)
		{
			var b = this[0];
			return b ? b.style ? parseFloat(c.css(b, e, a ? "margin" : "border")) : this[e]() : null
		};
		c.fn[e] = function(a)
		{
			var g = this[0];
			if (!g) return null == a ? null : this;
			if (c.isFunction(a)) return this.each(function(b)
			{
				var g = c(this);
				g[e](a.call(this, b, g[e]()))
			});
			if (c.isWindow(g))
			{
				var d =
					g.document.documentElement["client" + b],
					f = g.document.body;
				return "CSS1Compat" === g.document.compatMode && d || f && f["client" + b] || d
			}
			return 9 === g.nodeType ? Math.max(g.documentElement["client" + b], g.body["scroll" + b], g.documentElement["scroll" + b], g.body["offset" + b], g.documentElement["offset" + b]) : a === m ? (g = c.css(g, e), d = parseFloat(g), c.isNumeric(d) ? d : g) : this.css(e, "string" == typeof a ? a : a + "px")
		}
	});
	f.jQuery = f.$ = c;
	"function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function()
	{
		return c
	})
})(window);
(function(f, m)
{
	function y(b)
	{
		return c.isWindow(b) ? b : 9 === b.nodeType ? b.defaultView || b.parentWindow : !1
	}

	function w(b)
	{
		if (!Aa[b])
		{
			var e = s.body,
				g = c("<" + b + ">").appendTo(e),
				a = g.css("display");
			g.remove();
			if ("none" === a || "" === a)
			{
				ea || (ea = s.createElement("iframe"), ea.frameBorder = ea.width = ea.height = 0);
				e.appendChild(ea);
				if (!aa || !ea.createElement) aa = (ea.contentWindow || ea.contentDocument).document, aa.write(("CSS1Compat" === s.compatMode ? "<!doctype html>" : "") + "<html><body>"), aa.close();
				g = aa.createElement(b);
				aa.body.appendChild(g);
				a = c.css(g, "display");
				e.removeChild(ea)
			}
			Aa[b] = a
		}
		return Aa[b]
	}

	function p(b, e)
	{
		var g = {};
		return c.each(pb.concat.apply([], pb.slice(0, e)), function()
		{
			g[this] = b
		}), g
	}

	function j()
	{
		Ba = m
	}

	function l()
	{
		try
		{
			return new f.XMLHttpRequest
		}
		catch (b)
		{}
	}

	function v(b, e, g, a)
	{
		if (c.isArray(e)) c.each(e, function(e, d)
		{
			g || kb.test(b) ? a(b, d) : v(b + "[" + ("object" == typeof d || c.isArray(d) ? e : "") + "]", d, g, a)
		});
		else if (!g && null != e && "object" == typeof e)
			for (var d in e) v(b + "[" + d + "]", e[d], g, a);
		else a(b, e)
	}

	function x(b, e)
	{
		var g, a, d = c.ajaxSettings.flatOptions ||
		{};
		for (g in e) e[g] !== m && ((d[g] ? b : a || (a = {}))[g] = e[g]);
		a && c.extend(!0, b, a)
	}

	function t(b, c, g, a, d, f)
	{
		d = d || c.dataTypes[0];
		f = f ||
		{};
		f[d] = !0;
		for (var d = b[d], h = 0, i = d ? d.length : 0, k = b === Sa, n; h < i && (k || !n); h++) n = d[h](c, g, a), "string" == typeof n && (!k || f[n] ? n = m : (c.dataTypes.unshift(n), n = t(b, c, g, a, n, f)));
		return (k || !n) && !f["*"] && (n = t(b, c, g, a, "*", f)), n
	}

	function r(b)
	{
		return function(e, g)
		{
			"string" != typeof e && (g = e, e = "*");
			if (c.isFunction(g))
				for (var a = e.toLowerCase().split(Ra), d = 0, f = a.length, h, i; d < f; d++) h = a[d], (i = /^\+/.test(h)) &&
					(h = h.substr(1) || "*"), h = b[h] = b[h] || [], h[i ? "unshift" : "push"](g)
		}
	}

	function k(b, e, g)
	{
		var a = "width" === e ? b.offsetWidth : b.offsetHeight,
			d = "width" === e ? Eb : Fb;
		if (0 < a) return "border" !== g && c.each(d, function()
		{
			g || (a -= parseFloat(c.css(b, "padding" + this)) || 0);
			"margin" === g ? a += parseFloat(c.css(b, g + this)) || 0 : a -= parseFloat(c.css(b, "border" + this + "Width")) || 0
		}), a + "px";
		a = sa(b, e, e);
		if (0 > a || null == a) a = b.style[e] || 0;
		return a = parseFloat(a) || 0, g && c.each(d, function()
		{
			a += parseFloat(c.css(b, "padding" + this)) || 0;
			"padding" !== g && (a +=
				parseFloat(c.css(b, "border" + this + "Width")) || 0);
			"margin" === g && (a += parseFloat(c.css(b, g + this)) || 0)
		}), a + "px"
	}

	function d(b, e)
	{
		e.src ? c.ajax(
		{
			url: e.src,
			async: !1,
			dataType: "script"
		}) : c.globalEval((e.text || e.textContent || e.innerHTML || "").replace(hb, "/*$0*/"));
		e.parentNode && e.parentNode.removeChild(e)
	}

	function h(b)
	{
		c.nodeName(b, "input") ? i(b) : "getElementsByTagName" in b && c.grep(b.getElementsByTagName("input"), i)
	}

	function i(b)
	{
		if ("checkbox" === b.type || "radio" === b.type) b.defaultChecked = b.checked
	}

	function n(b)
	{
		return "getElementsByTagName" in
			b ? b.getElementsByTagName("*") : "querySelectorAll" in b ? b.querySelectorAll("*") : []
	}

	function B(b, e)
	{
		var g;
		if (1 === e.nodeType)
		{
			e.clearAttributes && e.clearAttributes();
			e.mergeAttributes && e.mergeAttributes(b);
			g = e.nodeName.toLowerCase();
			if ("object" === g) e.outerHTML = b.outerHTML;
			else if ("input" !== g || "checkbox" !== b.type && "radio" !== b.type)
				if ("option" === g) e.selected = b.defaultSelected;
				else
				{
					if ("input" === g || "textarea" === g) e.defaultValue = b.defaultValue
				}
			else b.checked && (e.defaultChecked = e.checked = b.checked), e.value !==
				b.value && (e.value = b.value);
			e.removeAttribute(c.expando)
		}
	}

	function J(b, e)
	{
		if (1 === e.nodeType && c.hasData(b))
		{
			var g = c.expando,
				a = c.data(b),
				d = c.data(e, a);
			if (a = a[g])
			{
				var f = a.events,
					d = d[g] = c.extend(
					{}, a);
				if (f)
				{
					delete d.handle;
					d.events = {};
					for (var h in f)
					{
						g = 0;
						for (a = f[h].length; g < a; g++) c.event.add(e, h + (f[h][g].namespace ? "." : "") + f[h][g].namespace, f[h][g], f[h][g].data)
					}
				}
			}
		}
	}

	function z(b, e, g)
	{
		e = e || 0;
		if (c.isFunction(e)) return c.grep(b, function(a, b)
		{
			return !!e.call(a, b, a) === g
		});
		if (e.nodeType) return c.grep(b, function(a)
		{
			return a ===
				e === g
		});
		if ("string" == typeof e)
		{
			var a = c.grep(b, function(a)
			{
				return 1 === a.nodeType
			});
			if (yb.test(e)) return c.filter(e, a, !g);
			e = c.filter(e, a)
		}
		return c.grep(b, function(a)
		{
			return 0 <= c.inArray(a, e) === g
		})
	}

	function E(b, c)
	{
		return (b && "*" !== b ? b + "." : "") + c.replace(La, "`").replace($a, "&")
	}

	function D(b)
	{
		var e, g, a, d, f, h, i, k, n, j, l, r = [];
		d = [];
		f = c._data(this, "events");
		if (!(b.liveFired === this || !f || !f.live || b.target.disabled || b.button && "click" === b.type))
		{
			b.namespace && (l = RegExp("(^|\\.)" + b.namespace.split(".").join("\\.(?:.*\\.)?") +
				"(\\.|$)"));
			b.liveFired = this;
			var m = f.live.slice(0);
			for (i = 0; i < m.length; i++) f = m[i], f.origType.replace(ma, "") === b.type ? d.push(f.selector) : m.splice(i--, 1);
			d = c(b.target).closest(d, b.currentTarget);
			k = 0;
			for (n = d.length; k < n; k++)
			{
				j = d[k];
				for (i = 0; i < m.length; i++)
					if (f = m[i], j.selector === f.selector && (!l || l.test(f.namespace)) && !j.elem.disabled)
					{
						h = j.elem;
						a = null;
						if ("mouseenter" === f.preType || "mouseleave" === f.preType) b.type = f.preType, (a = c(b.relatedTarget).closest(f.selector)[0]) && c.contains(h, a) && (a = h);
						(!a || a !== h) && r.push(
						{
							elem: h,
							handleObj: f,
							level: j.level
						})
					}
			}
			k = 0;
			for (n = r.length; k < n; k++)
			{
				d = r[k];
				if (g && d.level > g) break;
				b.currentTarget = d.elem;
				b.data = d.handleObj.data;
				b.handleObj = d.handleObj;
				l = d.handleObj.origHandler.apply(d.elem, arguments);
				if (!1 === l || b.isPropagationStopped())
					if (g = d.level, !1 === l && (e = !1), b.isImmediatePropagationStopped()) break
			}
			return e
		}
	}

	function C(b, e, g)
	{
		var a = c.extend(
		{}, g[0]);
		a.type = b;
		a.originalEvent = {};
		a.liveFired = m;
		c.event.handle.call(e, a);
		a.isDefaultPrevented() && g[0].preventDefault()
	}

	function U()
	{
		return !0
	}

	function F()
	{
		return !1
	}

	function R(b, e, g)
	{
		var a = e + "defer",
			d = e + "queue",
			f = e + "mark",
			h = c.data(b, a, m, !0);
		h && ("queue" === g || !c.data(b, d, m, !0)) && ("mark" === g || !c.data(b, f, m, !0)) && setTimeout(function()
		{
			!c.data(b, d, m, !0) && !c.data(b, f, m, !0) && (c.removeData(b, a, !0), h.resolve())
		}, 0)
	}

	function ca(b)
	{
		for (var c in b)
			if ("toJSON" !== c) return !1;
		return !0
	}

	function V(b, e, g)
	{
		if (g === m && 1 === b.nodeType)
			if (g = "data-" + e.replace(da, "-$1").toLowerCase(), g = b.getAttribute(g), "string" == typeof g)
			{
				try
				{
					g = "true" === g ? !0 : "false" === g ? !1 : "null" === g ? null : c.isNaN(g) ?
						S.test(g) ? c.parseJSON(g) : g : parseFloat(g)
				}
				catch (a)
				{}
				c.data(b, e, g)
			}
		else g = m;
		return g
	}
	var s = f.document,
		$ = f.navigator,
		T = f.location,
		c = function()
		{
			function b()
			{
				if (!c.isReady)
				{
					try
					{
						s.documentElement.doScroll("left")
					}
					catch (a)
					{
						setTimeout(b, 1);
						return
					}
					c.ready()
				}
			}
			var c = function(a, b)
				{
					return new c.fn.init(a, b, d)
				},
				g = f.jQuery,
				a = f.$,
				d, h = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
				i = /\S/,
				k = /^\s+/,
				n = /\s+$/,
				j = /\d/,
				l = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
				r = /^[\],:{}\s]*$/,
				p = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
				t = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
				B = /(?:^|:|,)(?:\s*\[)+/g,
				x = /(webkit)[ \/]([\w.]+)/,
				v = /(opera)(?:.*version)?[ \/]([\w.]+)/,
				E = /(msie) ([\w.]+)/,
				z = /(mozilla)(?:.*? rv:([\w.]+))?/,
				G = /-([a-z]|[0-9])/ig,
				O = /^-ms-/,
				Pb = function(a, b)
				{
					return (b + "").toUpperCase()
				},
				Za = $.userAgent,
				H, P, w, C = Object.prototype.toString,
				D = Object.prototype.hasOwnProperty,
				J = Array.prototype.push,
				K = Array.prototype.slice,
				y = String.prototype.trim,
				N = Array.prototype.indexOf,
				Q = {};
			return c.fn = c.prototype = {
				constructor: c,
				init: function(a, b, g)
				{
					var d, f, o;
					if (!a) return this;
					if (a.nodeType) return this.context =
						this[0] = a, this.length = 1, this;
					if ("body" === a && !b && s.body) return this.context = s, this[0] = s.body, this.selector = a, this.length = 1, this;
					if ("string" == typeof a)
					{
						"<" !== a.charAt(0) || ">" !== a.charAt(a.length - 1) || 3 > a.length ? d = h.exec(a) : d = [null, a, null];
						if (d && (d[1] || !b))
						{
							if (d[1]) return b = b instanceof c ? b[0] : b, o = b ? b.ownerDocument || b : s, f = l.exec(a), f ? c.isPlainObject(b) ? (a = [s.createElement(f[1])], c.fn.attr.call(a, b, !0)) : a = [o.createElement(f[1])] : (f = c.buildFragment([d[1]], [o]), a = (f.cacheable ? c.clone(f.fragment) : f.fragment).childNodes),
								c.merge(this, a);
							if ((b = s.getElementById(d[2])) && b.parentNode)
							{
								if (b.id !== d[2]) return g.find(a);
								this.length = 1;
								this[0] = b
							}
							return this.context = s, this.selector = a, this
						}
						return !b || b.jquery ? (b || g).find(a) : this.constructor(b).find(a)
					}
					return c.isFunction(a) ? g.ready(a) : (a.selector !== m && (this.selector = a.selector, this.context = a.context), c.makeArray(a, this))
				},
				selector: "",
				jquery: "1.6.4",
				length: 0,
				size: function()
				{
					return this.length
				},
				toArray: function()
				{
					return K.call(this, 0)
				},
				get: function(a)
				{
					return null == a ? this.toArray() :
						0 > a ? this[this.length + a] : this[a]
				},
				pushStack: function(a, b, g)
				{
					var d = this.constructor();
					return c.isArray(a) ? J.apply(d, a) : c.merge(d, a), d.prevObject = this, d.context = this.context, "find" === b ? d.selector = this.selector + (this.selector ? " " : "") + g : b && (d.selector = this.selector + "." + b + "(" + g + ")"), d
				},
				each: function(a, b)
				{
					return c.each(this, a, b)
				},
				ready: function(a)
				{
					return c.bindReady(), P.done(a), this
				},
				eq: function(a)
				{
					return -1 === a ? this.slice(a) : this.slice(a, +a + 1)
				},
				first: function()
				{
					return this.eq(0)
				},
				last: function()
				{
					return this.eq(-1)
				},
				slice: function()
				{
					return this.pushStack(K.apply(this, arguments), "slice", K.call(arguments).join(","))
				},
				map: function(a)
				{
					return this.pushStack(c.map(this, function(b, c)
					{
						return a.call(b, c, b)
					}))
				},
				end: function()
				{
					return this.prevObject || this.constructor(null)
				},
				push: J,
				sort: [].sort,
				splice: [].splice
			}, c.fn.init.prototype = c.fn, c.extend = c.fn.extend = function()
			{
				var a, b, g, d, f, o, h = arguments[0] ||
					{},
					i = 1,
					q = arguments.length,
					k = !1;
				"boolean" == typeof h && (k = h, h = arguments[1] ||
				{}, i = 2);
				"object" != typeof h && !c.isFunction(h) && (h = {});
				for (q === i && (h = this, --i); i < q; i++)
					if (null != (a = arguments[i]))
						for (b in a) g = h[b], d = a[b], h !== d && (k && d && (c.isPlainObject(d) || (f = c.isArray(d))) ? (f ? (f = !1, o = g && c.isArray(g) ? g : []) : o = g && c.isPlainObject(g) ? g :
						{}, h[b] = c.extend(k, o, d)) : d !== m && (h[b] = d));
				return h
			}, c.extend(
			{
				noConflict: function(b)
				{
					return f.$ === c && (f.$ = a), b && f.jQuery === c && (f.jQuery = g), c
				},
				isReady: !1,
				readyWait: 1,
				holdReady: function(a)
				{
					a ? c.readyWait++ : c.ready(!0)
				},
				ready: function(a)
				{
					if (!0 === a && !--c.readyWait || !0 !== a && !c.isReady)
					{
						if (!s.body) return setTimeout(c.ready,
							1);
						c.isReady = !0;
						!0 !== a && 0 < --c.readyWait || (P.resolveWith(s, [c]), c.fn.trigger && c(s).trigger("ready").unbind("ready"))
					}
				},
				bindReady: function()
				{
					if (!P)
					{
						P = c._Deferred();
						if ("complete" === s.readyState) return setTimeout(c.ready, 1);
						if (s.addEventListener) s.addEventListener("DOMContentLoaded", w, !1), f.addEventListener("load", c.ready, !1);
						else if (s.attachEvent)
						{
							s.attachEvent("onreadystatechange", w);
							f.attachEvent("onload", c.ready);
							var a = !1;
							try
							{
								a = null == f.frameElement
							}
							catch (g)
							{}
							s.documentElement.doScroll && a && b()
						}
					}
				},
				isFunction: function(a)
				{
					return "function" === c.type(a)
				},
				isArray: Array.isArray || function(a)
				{
					return "array" === c.type(a)
				},
				isWindow: function(a)
				{
					return a && "object" == typeof a && "setInterval" in a
				},
				isNaN: function(a)
				{
					return null == a || !j.test(a) || isNaN(a)
				},
				type: function(a)
				{
					return null == a ? "" + a : Q[C.call(a)] || "object"
				},
				isPlainObject: function(a)
				{
					if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a)) return !1;
					try
					{
						if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) return !1
					}
					catch (b)
					{
						return !1
					}
					for (var g in a);
					return g === m || D.call(a, g)
				},
				isEmptyObject: function(a)
				{
					for (var b in a) return !1;
					return !0
				},
				error: function(a)
				{
					throw a;
				},
				parseJSON: function(a)
				{
					if ("string" != typeof a || !a) return null;
					a = c.trim(a);
					if (f.JSON && f.JSON.parse) return f.JSON.parse(a);
					if (r.test(a.replace(p, "@").replace(t, "]").replace(B, ""))) return (new Function("return " + a))();
					c.error("Invalid JSON: " + a)
				},
				parseXML: function(a)
				{
					var b, g;
					try
					{
						f.DOMParser ? (g = new DOMParser, b = g.parseFromString(a, "text/xml")) : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async =
							"false", b.loadXML(a))
					}
					catch (d)
					{
						b = m
					}
					return (!b || !b.documentElement || b.getElementsByTagName("parsererror").length) && c.error("Invalid XML: " + a), b
				},
				noop: function() {},
				globalEval: function(a)
				{
					a && i.test(a) && (f.execScript || function(a)
					{
						f.eval.call(f, a)
					})(a)
				},
				camelCase: function(a)
				{
					return a.replace(O, "ms-").replace(G, Pb)
				},
				nodeName: function(a, b)
				{
					return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
				},
				each: function(a, b, g)
				{
					var d, f = 0,
						o = a.length,
						h = o === m || c.isFunction(a);
					if (g)
						if (h)
							for (d in a)
							{
								if (!1 === b.apply(a[d],
										g)) break
							}
					else
						for (; f < o && !1 !== b.apply(a[f++], g););
					else if (h)
						for (d in a)
						{
							if (!1 === b.call(a[d], d, a[d])) break
						}
					else
						for (; f < o && !1 !== b.call(a[f], f, a[f++]););
					return a
				},
				trim: y ? function(a)
				{
					return null == a ? "" : y.call(a)
				} : function(a)
				{
					return null == a ? "" : (a + "").replace(k, "").replace(n, "")
				},
				makeArray: function(a, b)
				{
					var g = b || [];
					if (null != a)
					{
						var d = c.type(a);
						null == a.length || "string" === d || "function" === d || "regexp" === d || c.isWindow(a) ? J.call(g, a) : c.merge(g, a)
					}
					return g
				},
				inArray: function(a, b)
				{
					if (!b) return -1;
					if (N) return N.call(b,
						a);
					for (var c = 0, e = b.length; c < e; c++)
						if (b[c] === a) return c;
					return -1
				},
				merge: function(a, b)
				{
					var c = a.length,
						e = 0;
					if ("number" == typeof b.length)
						for (var g = b.length; e < g; e++) a[c++] = b[e];
					else
						for (; b[e] !== m;) a[c++] = b[e++];
					return a.length = c, a
				},
				grep: function(a, b, c)
				{
					for (var e = [], g, c = !!c, d = 0, f = a.length; d < f; d++) g = !!b(a[d], d), c !== g && e.push(a[d]);
					return e
				},
				map: function(a, b, g)
				{
					var d, f, o = [],
						h = 0,
						i = a.length;
					if (a instanceof c || i !== m && "number" == typeof i && (0 < i && a[0] && a[i - 1] || 0 === i || c.isArray(a)))
						for (; h < i; h++) d = b(a[h], h, g), null !=
							d && (o[o.length] = d);
					else
						for (f in a) d = b(a[f], f, g), null != d && (o[o.length] = d);
					return o.concat.apply([], o)
				},
				guid: 1,
				proxy: function(a, b)
				{
					if ("string" == typeof b) var g = a[b],
						b = a,
						a = g;
					if (!c.isFunction(a)) return m;
					var d = K.call(arguments, 2),
						g = function()
						{
							return a.apply(b, d.concat(K.call(arguments)))
						};
					return g.guid = a.guid = a.guid || g.guid || c.guid++, g
				},
				access: function(a, b, g, d, f, o)
				{
					var h = a.length;
					if ("object" == typeof b)
					{
						for (var i in b) c.access(a, i, b[i], d, f, g);
						return a
					}
					if (g !== m)
					{
						d = !o && d && c.isFunction(g);
						for (i = 0; i < h; i++) f(a[i],
							b, d ? g.call(a[i], i, f(a[i], b)) : g, o);
						return a
					}
					return h ? f(a[0], b) : m
				},
				now: function()
				{
					return (new Date).getTime()
				},
				uaMatch: function(a)
				{
					a = a.toLowerCase();
					a = x.exec(a) || v.exec(a) || E.exec(a) || 0 > a.indexOf("compatible") && z.exec(a) || [];
					return {
						browser: a[1] || "",
						version: a[2] || "0"
					}
				},
				sub: function()
				{
					function a(b, c)
					{
						return new a.fn.init(b, c)
					}
					c.extend(!0, a, this);
					a.superclass = this;
					a.fn = a.prototype = this();
					a.fn.constructor = a;
					a.sub = this.sub;
					a.fn.init = function(g, d)
					{
						return d && d instanceof c && !(d instanceof a) && (d = a(d)), c.fn.init.call(this,
							g, d, b)
					};
					a.fn.init.prototype = a.fn;
					var b = a(s);
					return a
				},
				browser:
				{}
			}), c.each("Boolean,Number,String,Function,Array,Date,RegExp,Object".split(","), function(a, b)
			{
				Q["[object " + b + "]"] = b.toLowerCase()
			}), H = c.uaMatch(Za), H.browser && (c.browser[H.browser] = !0, c.browser.version = H.version), c.browser.webkit && (c.browser.safari = !0), i.test("\u00a0") && (k = /^[\s\xA0]+/, n = /[\s\xA0]+$/), d = c(s), s.addEventListener ? w = function()
			{
				s.removeEventListener("DOMContentLoaded", w, !1);
				c.ready()
			} : s.attachEvent && (w = function()
			{
				"complete" ===
				s.readyState && (s.detachEvent("onreadystatechange", w), c.ready())
			}), c
		}(),
		L = "done,fail,isResolved,isRejected,promise,then,always,pipe".split(","),
		M = [].slice;
	c.extend(
	{
		_Deferred: function()
		{
			var b = [],
				e, g, a, d = {
					done: function()
					{
						if (!a)
						{
							var g = arguments,
								f, h, i, k, n;
							e && (n = e, e = 0);
							f = 0;
							for (h = g.length; f < h; f++) i = g[f], k = c.type(i), "array" === k ? d.done.apply(d, i) : "function" === k && b.push(i);
							n && d.resolveWith(n[0], n[1])
						}
						return this
					},
					resolveWith: function(c, d)
					{
						if (!a && !e && !g)
						{
							d = d || [];
							g = 1;
							try
							{
								for (; b[0];) b.shift().apply(c, d)
							}
							finally
							{
								e = [c, d], g = 0
							}
						}
						return this
					},
					resolve: function()
					{
						return d.resolveWith(this, arguments), this
					},
					isResolved: function()
					{
						return !!g || !!e
					},
					cancel: function()
					{
						return a = 1, b = [], this
					}
				};
			return d
		},
		Deferred: function(b)
		{
			var e = c._Deferred(),
				g = c._Deferred(),
				a;
			return c.extend(e,
			{
				then: function(a, b)
				{
					return e.done(a).fail(b), this
				},
				always: function()
				{
					return e.done.apply(e, arguments).fail.apply(this, arguments)
				},
				fail: g.done,
				rejectWith: g.resolveWith,
				reject: g.resolve,
				isRejected: g.isResolved,
				pipe: function(a, b)
				{
					return c.Deferred(function(g)
					{
						c.each(
						{
							done: [a,
								"resolve"
							],
							fail: [b, "reject"]
						}, function(a, b)
						{
							var d = b[0],
								f = b[1],
								o;
							c.isFunction(d) ? e[a](function()
							{
								(o = d.apply(this, arguments)) && c.isFunction(o.promise) ? o.promise().then(g.resolve, g.reject) : g[f + "With"](this === e ? g : this, [o])
							}) : e[a](g[f])
						})
					}).promise()
				},
				promise: function(b)
				{
					if (null == b)
					{
						if (a) return a;
						a = b = {}
					}
					for (var c = L.length; c--;) b[L[c]] = e[L[c]];
					return b
				}
			}), e.done(g.cancel).fail(e.cancel), delete e.cancel, b && b.call(e, e), e
		},
		when: function(b)
		{
			function e(a)
			{
				return function(b)
				{
					g[a] = 1 < arguments.length ? M.call(arguments,
						0) : b;
					--f || h.resolveWith(h, M.call(g, 0))
				}
			}
			var g = arguments,
				a = 0,
				d = g.length,
				f = d,
				h = 1 >= d && b && c.isFunction(b.promise) ? b : c.Deferred();
			if (1 < d)
			{
				for (; a < d; a++) g[a] && c.isFunction(g[a].promise) ? g[a].promise().then(e(a), h.reject) : --f;
				f || h.resolveWith(h, g)
			}
			else h !== b && h.resolveWith(h, d ? [b] : []);
			return h.promise()
		}
	});
	c.support = function()
	{
		var b = s.createElement("div"),
			e = s.documentElement,
			g, a, d, f, h, i, k;
		b.setAttribute("className", "t");
		b.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
		g = b.getElementsByTagName("*");
		a = b.getElementsByTagName("a")[0];
		if (!g || !g.length || !a) return {};
		d = s.createElement("select");
		f = d.appendChild(s.createElement("option"));
		g = b.getElementsByTagName("input")[0];
		i = {
			leadingWhitespace: 3 === b.firstChild.nodeType,
			tbody: !b.getElementsByTagName("tbody").length,
			htmlSerialize: !!b.getElementsByTagName("link").length,
			style: /top/.test(a.getAttribute("style")),
			hrefNormalized: "/a" === a.getAttribute("href"),
			opacity: /^0.55$/.test(a.style.opacity),
			cssFloat: !!a.style.cssFloat,
			checkOn: "on" === g.value,
			optSelected: f.selected,
			getSetAttribute: "t" !== b.className,
			submitBubbles: !0,
			changeBubbles: !0,
			focusinBubbles: !1,
			deleteExpando: !0,
			noCloneEvent: !0,
			inlineBlockNeedsLayout: !1,
			shrinkWrapBlocks: !1,
			reliableMarginRight: !0
		};
		g.checked = !0;
		i.noCloneChecked = g.cloneNode(!0).checked;
		d.disabled = !0;
		i.optDisabled = !f.disabled;
		try
		{
			delete b.test
		}
		catch (n)
		{
			i.deleteExpando = !1
		}!b.addEventListener && b.attachEvent && b.fireEvent && (b.attachEvent("onclick", function()
		{
			i.noCloneEvent = !1
		}), b.cloneNode(!0).fireEvent("onclick"));
		g = s.createElement("input");
		g.value = "t";
		g.setAttribute("type", "radio");
		i.radioValue = "t" === g.value;
		g.setAttribute("checked", "checked");
		b.appendChild(g);
		a = s.createDocumentFragment();
		a.appendChild(b.firstChild);
		i.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked;
		b.innerHTML = "";
		b.style.width = b.style.paddingLeft = "1px";
		d = s.getElementsByTagName("body")[0];
		a = s.createElement(d ? "div" : "body");
		f = {
			visibility: "hidden",
			width: 0,
			height: 0,
			border: 0,
			margin: 0,
			background: "none"
		};
		d && c.extend(f,
		{
			position: "absolute",
			left: "-1000px",
			top: "-1000px"
		});
		for (k in f) a.style[k] = f[k];
		a.appendChild(b);
		e = d || e;
		e.insertBefore(a, e.firstChild);
		i.appendChecked = g.checked;
		i.boxModel = 2 === b.offsetWidth;
		"zoom" in b.style && (b.style.display = "inline", b.style.zoom = 1, i.inlineBlockNeedsLayout = 2 === b.offsetWidth, b.style.display = "", b.innerHTML = "<div style='width:4px;'></div>", i.shrinkWrapBlocks = 2 !== b.offsetWidth);
		b.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
		d = b.getElementsByTagName("td");
		g = 0 === d[0].offsetHeight;
		d[0].style.display = "";
		d[1].style.display = "none";
		i.reliableHiddenOffsets = g && 0 === d[0].offsetHeight;
		b.innerHTML = "";
		s.defaultView && s.defaultView.getComputedStyle && (h = s.createElement("div"), h.style.width = "0", h.style.marginRight = "0", b.appendChild(h), i.reliableMarginRight = 0 === (parseInt((s.defaultView.getComputedStyle(h, null) ||
		{
			marginRight: 0
		}).marginRight, 10) || 0));
		a.innerHTML = "";
		e.removeChild(a);
		if (b.attachEvent)
			for (k in
				{
					submit: 1,
					change: 1,
					focusin: 1
				}) h = "on" + k, (g = h in b) || (b.setAttribute(h,
				"return;"), g = "function" == typeof b[h]), i[k + "Bubbles"] = g;
		return a = a = d = f = d = h = b = g = null, i
	}();
	c.boxModel = c.support.boxModel;
	var S = /^(?:\{.*\}|\[.*\])$/,
		da = /([A-Z])/g;
	c.extend(
	{
		cache:
		{},
		uuid: 0,
		expando: "jQuery" + (c.fn.jquery + Math.random()).replace(/\D/g, ""),
		noData:
		{
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet: !0
		},
		hasData: function(b)
		{
			return b = b.nodeType ? c.cache[b[c.expando]] : b[c.expando], !!b && !ca(b)
		},
		data: function(b, e, g, a)
		{
			if (c.acceptData(b))
			{
				var d, f, h = c.expando,
					i = "string" == typeof e,
					k = b.nodeType,
					n = k ? c.cache : b,
					j = k ? b[c.expando] : b[c.expando] && c.expando;
				if (j && (!a || !j || !n[j] || n[j][h]) || !(i && g === m))
				{
					j || (k ? b[c.expando] = j = ++c.uuid : j = c.expando);
					n[j] || (n[j] = {}, k || (n[j].toJSON = c.noop));
					if ("object" == typeof e || "function" == typeof e) a ? n[j][h] = c.extend(n[j][h], e) : n[j] = c.extend(n[j], e);
					return d = n[j], a && (d[h] || (d[h] = {}), d = d[h]), g !== m && (d[c.camelCase(e)] = g), "events" === e && !d[e] ? d[h] && d[h].events : (i ? (f = d[e], null == f && (f = d[c.camelCase(e)])) : f = d, f)
				}
			}
		},
		removeData: function(b, e, g)
		{
			if (c.acceptData(b))
			{
				var a,
					d = c.expando,
					f = b.nodeType,
					h = f ? c.cache : b,
					i = f ? b[c.expando] : c.expando;
				if (h[i])
				{
					if (e && (a = g ? h[i][d] : h[i]))
						if (a[e] || (e = c.camelCase(e)), delete a[e], !ca(a)) return;
					if (g && (delete h[i][d], !ca(h[i]))) return;
					e = h[i][d];
					c.support.deleteExpando || !h.setInterval ? delete h[i] : h[i] = null;
					e ? (h[i] = {}, f || (h[i].toJSON = c.noop), h[i][d] = e) : f && (c.support.deleteExpando ? delete b[c.expando] : b.removeAttribute ? b.removeAttribute(c.expando) : b[c.expando] = null)
				}
			}
		},
		_data: function(b, e, g)
		{
			return c.data(b, e, g, !0)
		},
		acceptData: function(b)
		{
			if (b.nodeName)
			{
				var e =
					c.noData[b.nodeName.toLowerCase()];
				if (e) return !0 !== e && b.getAttribute("classid") === e
			}
			return !0
		}
	});
	c.fn.extend(
	{
		data: function(b, e)
		{
			var g = null;
			if ("undefined" == typeof b)
			{
				if (this.length && (g = c.data(this[0]), 1 === this[0].nodeType))
					for (var a = this[0].attributes, d, f = 0, h = a.length; f < h; f++) d = a[f].name, 0 === d.indexOf("data-") && (d = c.camelCase(d.substring(5)), V(this[0], d, g[d]));
				return g
			}
			if ("object" == typeof b) return this.each(function()
			{
				c.data(this, b)
			});
			var i = b.split(".");
			return i[1] = i[1] ? "." + i[1] : "", e === m ? (g = this.triggerHandler("getData" +
				i[1] + "!", [i[0]]), g === m && this.length && (g = c.data(this[0], b), g = V(this[0], b, g)), g === m && i[1] ? this.data(i[0]) : g) : this.each(function()
			{
				var a = c(this),
					g = [i[0], e];
				a.triggerHandler("setData" + i[1] + "!", g);
				c.data(this, b, e);
				a.triggerHandler("changeData" + i[1] + "!", g)
			})
		},
		removeData: function(b)
		{
			return this.each(function()
			{
				c.removeData(this, b)
			})
		}
	});
	c.extend(
	{
		_mark: function(b, e)
		{
			b && (e = (e || "fx") + "mark", c.data(b, e, (c.data(b, e, m, !0) || 0) + 1, !0))
		},
		_unmark: function(b, e, g)
		{
			!0 !== b && (g = e, e = b, b = !1);
			if (e)
			{
				var g = g || "fx",
					a = g + "mark";
				(b = b ? 0 : (c.data(e, a, m, !0) || 1) - 1) ? c.data(e, a, b, !0): (c.removeData(e, a, !0), R(e, g, "mark"))
			}
		},
		queue: function(b, e, g)
		{
			if (b)
			{
				var e = (e || "fx") + "queue",
					a = c.data(b, e, m, !0);
				return g && (!a || c.isArray(g) ? a = c.data(b, e, c.makeArray(g), !0) : a.push(g)), a || []
			}
		},
		dequeue: function(b, e)
		{
			var e = e || "fx",
				g = c.queue(b, e),
				a = g.shift();
			"inprogress" === a && (a = g.shift());
			a && ("fx" === e && g.unshift("inprogress"), a.call(b, function()
			{
				c.dequeue(b, e)
			}));
			g.length || (c.removeData(b, e + "queue", !0), R(b, e, "queue"))
		}
	});
	c.fn.extend(
	{
		queue: function(b, e)
		{
			return "string" !=
				typeof b && (e = b, b = "fx"), e === m ? c.queue(this[0], b) : this.each(function()
				{
					var g = c.queue(this, b, e);
					"fx" === b && "inprogress" !== g[0] && c.dequeue(this, b)
				})
		},
		dequeue: function(b)
		{
			return this.each(function()
			{
				c.dequeue(this, b)
			})
		},
		delay: function(b, e)
		{
			return b = c.fx ? c.fx.speeds[b] || b : b, e = e || "fx", this.queue(e, function()
			{
				var g = this;
				setTimeout(function()
				{
					c.dequeue(g, e)
				}, b)
			})
		},
		clearQueue: function(b)
		{
			return this.queue(b || "fx", [])
		},
		promise: function(b)
		{
			function e()
			{
				--f || g.resolveWith(a, [a])
			}
			"string" != typeof b && (b = m);
			for (var b =
					b || "fx", g = c.Deferred(), a = this, d = a.length, f = 1, h = b + "defer", i = b + "queue", b = b + "mark", k; d--;)
				if (k = c.data(a[d], h, m, !0) || (c.data(a[d], i, m, !0) || c.data(a[d], b, m, !0)) && c.data(a[d], h, c._Deferred(), !0)) f++, k.done(e);
			return e(), g.promise()
		}
	});
	var la = /[\n\t\r]/g,
		Z = /\s+/,
		ha = /\r/g,
		ia = /^(?:button|input)$/i,
		va = /^(?:button|input|object|select|textarea)$/i,
		ra = /^a(?:rea)?$/i,
		K = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
		N, Q;
	c.fn.extend(
	{
		attr: function(b,
			e)
		{
			return c.access(this, b, e, !0, c.attr)
		},
		removeAttr: function(b)
		{
			return this.each(function()
			{
				c.removeAttr(this, b)
			})
		},
		prop: function(b, e)
		{
			return c.access(this, b, e, !0, c.prop)
		},
		removeProp: function(b)
		{
			return b = c.propFix[b] || b, this.each(function()
			{
				try
				{
					this[b] = m, delete this[b]
				}
				catch (c)
				{}
			})
		},
		addClass: function(b)
		{
			var e, g, a, d, f, h, i;
			if (c.isFunction(b)) return this.each(function(a)
			{
				c(this).addClass(b.call(this, a, this.className))
			});
			if (b && "string" == typeof b)
			{
				e = b.split(Z);
				g = 0;
				for (a = this.length; g < a; g++)
					if (d = this[g],
						1 === d.nodeType)
						if (!d.className && 1 === e.length) d.className = b;
						else
						{
							f = " " + d.className + " ";
							h = 0;
							for (i = e.length; h < i; h++) ~f.indexOf(" " + e[h] + " ") || (f += e[h] + " ");
							d.className = c.trim(f)
						}
			}
			return this
		},
		removeClass: function(b)
		{
			var e, g, a, d, f, h, i;
			if (c.isFunction(b)) return this.each(function(a)
			{
				c(this).removeClass(b.call(this, a, this.className))
			});
			if (b && "string" == typeof b || b === m)
			{
				e = (b || "").split(Z);
				g = 0;
				for (a = this.length; g < a; g++)
					if (d = this[g], 1 === d.nodeType && d.className)
						if (b)
						{
							f = (" " + d.className + " ").replace(la, " ");
							h = 0;
							for (i = e.length; h < i; h++) f = f.replace(" " + e[h] + " ", " ");
							d.className = c.trim(f)
						}
				else d.className = ""
			}
			return this
		},
		toggleClass: function(b, e)
		{
			var g = typeof b,
				a = "boolean" == typeof e;
			return c.isFunction(b) ? this.each(function(a)
			{
				c(this).toggleClass(b.call(this, a, this.className, e), e)
			}) : this.each(function()
			{
				if ("string" === g)
					for (var d, f = 0, h = c(this), i = e, k = b.split(Z); d = k[f++];) i = a ? i : !h.hasClass(d), h[i ? "addClass" : "removeClass"](d);
				else if ("undefined" === g || "boolean" === g) this.className && c._data(this, "__className__",
					this.className), this.className = this.className || !1 === b ? "" : c._data(this, "__className__") || ""
			})
		},
		hasClass: function(b)
		{
			for (var b = " " + b + " ", c = 0, g = this.length; c < g; c++)
				if (1 === this[c].nodeType && -1 < (" " + this[c].className + " ").replace(la, " ").indexOf(b)) return !0;
			return !1
		},
		val: function(b)
		{
			var e, g, a = this[0];
			if (!arguments.length) return a ? (e = c.valHooks[a.nodeName.toLowerCase()] || c.valHooks[a.type], e && "get" in e && (g = e.get(a, "value")) !== m ? g : (g = a.value, "string" == typeof g ? g.replace(ha, "") : null == g ? "" : g)) : m;
			var d = c.isFunction(b);
			return this.each(function(a)
			{
				var g = c(this),
					f;
				if (1 === this.nodeType && (d ? f = b.call(this, a, g.val()) : f = b, null == f ? f = "" : "number" == typeof f ? f += "" : c.isArray(f) && (f = c.map(f, function(a)
					{
						return a == null ? "" : a + ""
					})), e = c.valHooks[this.nodeName.toLowerCase()] || c.valHooks[this.type], !e || !("set" in e) || e.set(this, f, "value") === m)) this.value = f
			})
		}
	});
	c.extend(
	{
		valHooks:
		{
			option:
			{
				get: function(b)
				{
					var c = b.attributes.value;
					return !c || c.specified ? b.value : b.text
				}
			},
			select:
			{
				get: function(b)
				{
					var e, g = b.selectedIndex,
						a = [],
						d = b.options,
						b = "select-one" === b.type;
					if (0 > g) return null;
					for (var f = b ? g : 0, h = b ? g + 1 : d.length; f < h; f++)
						if (e = d[f], e.selected && (c.support.optDisabled ? !e.disabled : null === e.getAttribute("disabled")) && (!e.parentNode.disabled || !c.nodeName(e.parentNode, "optgroup")))
						{
							e = c(e).val();
							if (b) return e;
							a.push(e)
						}
					return b && !a.length && d.length ? c(d[g]).val() : a
				},
				set: function(b, e)
				{
					var g = c.makeArray(e);
					return c(b).find("option").each(function()
					{
						this.selected = 0 <= c.inArray(c(this).val(), g)
					}), g.length || (b.selectedIndex = -1), g
				}
			}
		},
		attrFn:
		{
			val: !0,
			css: !0,
			html: !0,
			text: !0,
			data: !0,
			width: !0,
			height: !0,
			offset: !0
		},
		attrFix:
		{
			tabindex: "tabIndex"
		},
		attr: function(b, e, g, a)
		{
			var d = b.nodeType;
			if (!b || 3 === d || 8 === d || 2 === d) return m;
			if (a && e in c.attrFn) return c(b)[e](g);
			if ("getAttribute" in b)
			{
				var f, h, a = 1 !== d || !c.isXMLDoc(b);
				return a && (e = c.attrFix[e] || e, h = c.attrHooks[e], h || (K.test(e) ? h = Q : N && (h = N))), g !== m ? null === g ? (c.removeAttr(b, e), m) : h && "set" in h && a && (f = h.set(b, g, e)) !== m ? f : (b.setAttribute(e, "" + g), g) : h && "get" in h && a && null !== (f = h.get(b, e)) ? f : (f = b.getAttribute(e),
					null === f ? m : f)
			}
			return c.prop(b, e, g)
		},
		removeAttr: function(b, e)
		{
			var g;
			1 === b.nodeType && (e = c.attrFix[e] || e, c.attr(b, e, ""), b.removeAttribute(e), K.test(e) && (g = c.propFix[e] || e) in b && (b[g] = !1))
		},
		attrHooks:
		{
			type:
			{
				set: function(b, e)
				{
					if (ia.test(b.nodeName) && b.parentNode) c.error("type property can't be changed");
					else if (!c.support.radioValue && "radio" === e && c.nodeName(b, "input"))
					{
						var g = b.value;
						return b.setAttribute("type", e), g && (b.value = g), e
					}
				}
			},
			value:
			{
				get: function(b, e)
				{
					return N && c.nodeName(b, "button") ? N.get(b, e) :
						e in b ? b.value : null
				},
				set: function(b, e, g)
				{
					if (N && c.nodeName(b, "button")) return N.set(b, e, g);
					b.value = e
				}
			}
		},
		propFix:
		{
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		prop: function(b, e, g)
		{
			var a = b.nodeType;
			if (!b || 3 === a || 8 === a || 2 === a) return m;
			var d, f;
			return (1 !== a || !c.isXMLDoc(b)) && (e = c.propFix[e] ||
				e, f = c.propHooks[e]), g !== m ? f && "set" in f && (d = f.set(b, g, e)) !== m ? d : b[e] = g : f && "get" in f && null !== (d = f.get(b, e)) ? d : b[e]
		},
		propHooks:
		{
			tabIndex:
			{
				get: function(b)
				{
					var c = b.getAttributeNode("tabindex");
					return c && c.specified ? parseInt(c.value, 10) : va.test(b.nodeName) || ra.test(b.nodeName) && b.href ? 0 : m
				}
			}
		}
	});
	c.attrHooks.tabIndex = c.propHooks.tabIndex;
	Q = {
		get: function(b, e)
		{
			var g;
			return !0 === c.prop(b, e) || (g = b.getAttributeNode(e)) && !1 !== g.nodeValue ? e.toLowerCase() : m
		},
		set: function(b, e, g)
		{
			var a;
			return !1 === e ? c.removeAttr(b, g) :
				(a = c.propFix[g] || g, a in b && (b[a] = !0), b.setAttribute(g, g.toLowerCase())), g
		}
	};
	c.support.getSetAttribute || (N = c.valHooks.button = {
		get: function(b, c)
		{
			var g;
			return g = b.getAttributeNode(c), g && "" !== g.nodeValue ? g.nodeValue : m
		},
		set: function(b, c, g)
		{
			var a = b.getAttributeNode(g);
			return a || (a = s.createAttribute(g), b.setAttributeNode(a)), a.nodeValue = c + ""
		}
	}, c.each(["width", "height"], function(b, e)
	{
		c.attrHooks[e] = c.extend(c.attrHooks[e],
		{
			set: function(b, a)
			{
				if ("" === a) return b.setAttribute(e, "auto"), a
			}
		})
	}));
	c.support.hrefNormalized ||
		c.each(["href", "src", "width", "height"], function(b, e)
		{
			c.attrHooks[e] = c.extend(c.attrHooks[e],
			{
				get: function(b)
				{
					b = b.getAttribute(e, 2);
					return null === b ? m : b
				}
			})
		});
	c.support.style || (c.attrHooks.style = {
		get: function(b)
		{
			return b.style.cssText.toLowerCase() || m
		},
		set: function(b, c)
		{
			return b.style.cssText = "" + c
		}
	});
	c.support.optSelected || (c.propHooks.selected = c.extend(c.propHooks.selected,
	{
		get: function(b)
		{
			b = b.parentNode;
			return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
		}
	}));
	c.support.checkOn ||
		c.each(["radio", "checkbox"], function()
		{
			c.valHooks[this] = {
				get: function(b)
				{
					return null === b.getAttribute("value") ? "on" : b.value
				}
			}
		});
	c.each(["radio", "checkbox"], function()
	{
		c.valHooks[this] = c.extend(c.valHooks[this],
		{
			set: function(b, e)
			{
				if (c.isArray(e)) return b.checked = 0 <= c.inArray(c(b).val(), e)
			}
		})
	});
	var ma = /\.(.*)$/,
		Da = /^(?:textarea|input|select)$/i,
		La = /\./g,
		$a = / /g,
		ub = /[^\w\s.|`]/g,
		vb = function(b)
		{
			return b.replace(ub, "\\$&")
		};
	c.event = {
		add: function(b, e, g, a)
		{
			if (3 !== b.nodeType && 8 !== b.nodeType)
			{
				if (!1 === g) g =
					F;
				else if (!g) return;
				var d, f;
				g.handler && (d = g, g = d.handler);
				g.guid || (g.guid = c.guid++);
				if (f = c._data(b))
				{
					var h = f.events,
						i = f.handle;
					h || (f.events = h = {});
					i || (f.handle = i = function(a)
					{
						return "undefined" != typeof c && (!a || c.event.triggered !== a.type) ? c.event.handle.apply(i.elem, arguments) : m
					});
					i.elem = b;
					for (var e = e.split(" "), k, n = 0, j; k = e[n++];)
					{
						f = d ? c.extend(
						{}, d) :
						{
							handler: g,
							data: a
						}; - 1 < k.indexOf(".") ? (j = k.split("."), k = j.shift(), f.namespace = j.slice(0).sort().join(".")) : (j = [], f.namespace = "");
						f.type = k;
						f.guid || (f.guid = g.guid);
						var l = h[k],
							r = c.event.special[k] ||
							{};
						if (!l && (l = h[k] = [], !r.setup || !1 === r.setup.call(b, a, j, i))) b.addEventListener ? b.addEventListener(k, i, !1) : b.attachEvent && b.attachEvent("on" + k, i);
						r.add && (r.add.call(b, f), f.handler.guid || (f.handler.guid = g.guid));
						l.push(f);
						c.event.global[k] = !0
					}
					b = null
				}
			}
		},
		global:
		{},
		remove: function(b, e, g, a)
		{
			if (3 !== b.nodeType && 8 !== b.nodeType)
			{
				!1 === g && (g = F);
				var d, f, h = 0,
					i, k, n, j, l, r, p = c.hasData(b) && c._data(b),
					t = p && p.events;
				if (p && t)
					if (e && e.type && (g = e.handler, e = e.type), !e || "string" == typeof e &&
						"." === e.charAt(0))
						for (d in e = e || "", t) c.event.remove(b, d + e);
					else
					{
						for (e = e.split(" "); d = e[h++];)
							if (j = d, i = 0 > d.indexOf("."), k = [], i || (k = d.split("."), d = k.shift(), n = RegExp("(^|\\.)" + c.map(k.slice(0).sort(), vb).join("\\.(?:.*\\.)?") + "(\\.|$)")), l = t[d])
								if (g)
								{
									j = c.event.special[d] ||
									{};
									for (f = a || 0; f < l.length; f++)
										if (r = l[f], g.guid === r.guid)
										{
											if (i || n.test(r.namespace)) null == a && l.splice(f--, 1), j.remove && j.remove.call(b, r);
											if (null != a) break
										}
									if (0 === l.length || null != a && 1 === l.length)(!j.teardown || !1 === j.teardown.call(b, k)) &&
										c.removeEvent(b, d, p.handle), delete t[d]
								}
						else
							for (f = 0; f < l.length; f++)
								if (r = l[f], i || n.test(r.namespace)) c.event.remove(b, j, r.handler, f), l.splice(f--, 1);
						c.isEmptyObject(t) && ((e = p.handle) && (e.elem = null), delete p.events, delete p.handle, c.isEmptyObject(p) && c.removeData(b, m, !0))
					}
			}
		},
		customEvent:
		{
			getData: !0,
			setData: !0,
			changeData: !0
		},
		trigger: function(b, e, g, a)
		{
			var d = b.type || b,
				h = [],
				i;
			0 <= d.indexOf("!") && (d = d.slice(0, -1), i = !0);
			0 <= d.indexOf(".") && (h = d.split("."), d = h.shift(), h.sort());
			if (g && !c.event.customEvent[d] ||
				c.event.global[d])
			{
				b = "object" == typeof b ? b[c.expando] ? b : new c.Event(d, b) : new c.Event(d);
				b.type = d;
				b.exclusive = i;
				b.namespace = h.join(".");
				b.namespace_re = RegExp("(^|\\.)" + h.join("\\.(?:.*\\.)?") + "(\\.|$)");
				if (a || !g) b.preventDefault(), b.stopPropagation();
				if (g)
				{
					if (!(3 === g.nodeType || 8 === g.nodeType))
					{
						b.result = m;
						b.target = g;
						e = null != e ? c.makeArray(e) : [];
						e.unshift(b);
						h = g;
						a = 0 > d.indexOf(":") ? "on" + d : "";
						do i = c._data(h, "handle"), b.currentTarget = h, i && i.apply(h, e), a && c.acceptData(h) && h[a] && !1 === h[a].apply(h, e) && (b.result = !1, b.preventDefault()), h = h.parentNode || h.ownerDocument || h === b.target.ownerDocument && f; while (h && !b.isPropagationStopped());
						if (!b.isDefaultPrevented())
						{
							var k, h = c.event.special[d] ||
							{};
							if ((!h._default || !1 === h._default.call(g.ownerDocument, b)) && ("click" !== d || !c.nodeName(g, "a")) && c.acceptData(g))
							{
								try
								{
									a && g[d] && (k = g[a], k && (g[a] = null), c.event.triggered = d, g[d]())
								}
								catch (n)
								{}
								k && (g[a] = k);
								c.event.triggered = m
							}
						}
						return b.result
					}
				}
				else c.each(c.cache, function()
				{
					var a = this[c.expando];
					a && a.events && a.events[d] && c.event.trigger(b,
						e, a.handle.elem)
				})
			}
		},
		handle: function(b)
		{
			var b = c.event.fix(b || f.event),
				e = ((c._data(this, "events") ||
				{})[b.type] || []).slice(0),
				g = !b.exclusive && !b.namespace,
				a = Array.prototype.slice.call(arguments, 0);
			a[0] = b;
			b.currentTarget = this;
			for (var d = 0, h = e.length; d < h; d++)
			{
				var i = e[d];
				if (g || b.namespace_re.test(i.namespace))
					if (b.handler = i.handler, b.data = i.data, b.handleObj = i, i = i.handler.apply(this, a), i !== m && (b.result = i, !1 === i && (b.preventDefault(), b.stopPropagation())), b.isImmediatePropagationStopped()) break
			}
			return b.result
		},
		props: "altKey,attrChange,attrName,bubbles,button,cancelable,charCode,clientX,clientY,ctrlKey,currentTarget,data,detail,eventPhase,fromElement,handler,keyCode,layerX,layerY,metaKey,newValue,offsetX,offsetY,pageX,pageY,prevValue,relatedNode,relatedTarget,screenX,screenY,shiftKey,srcElement,target,toElement,view,wheelDelta,which".split(","),
		fix: function(b)
		{
			if (b[c.expando]) return b;
			for (var e = b, b = c.Event(e), g = this.props.length, a; g;) a = this.props[--g], b[a] = e[a];
			b.target || (b.target = b.srcElement || s);
			3 === b.target.nodeType &&
				(b.target = b.target.parentNode);
			!b.relatedTarget && b.fromElement && (b.relatedTarget = b.fromElement === b.target ? b.toElement : b.fromElement);
			null == b.pageX && null != b.clientX && (g = b.target.ownerDocument || s, e = g.documentElement, g = g.body, b.pageX = b.clientX + (e && e.scrollLeft || g && g.scrollLeft || 0) - (e && e.clientLeft || g && g.clientLeft || 0), b.pageY = b.clientY + (e && e.scrollTop || g && g.scrollTop || 0) - (e && e.clientTop || g && g.clientTop || 0));
			return null == b.which && (null != b.charCode || null != b.keyCode) && (b.which = null != b.charCode ? b.charCode :
				b.keyCode), !b.metaKey && b.ctrlKey && (b.metaKey = b.ctrlKey), !b.which && b.button !== m && (b.which = b.button & 1 ? 1 : b.button & 2 ? 3 : b.button & 4 ? 2 : 0), b
		},
		guid: 1E8,
		proxy: c.proxy,
		special:
		{
			ready:
			{
				setup: c.bindReady,
				teardown: c.noop
			},
			live:
			{
				add: function(b)
				{
					c.event.add(this, E(b.origType, b.selector), c.extend(
					{}, b,
					{
						handler: D,
						guid: b.handler.guid
					}))
				},
				remove: function(b)
				{
					c.event.remove(this, E(b.origType, b.selector), b)
				}
			},
			beforeunload:
			{
				setup: function(b, e, g)
				{
					c.isWindow(this) && (this.onbeforeunload = g)
				},
				teardown: function(b, c)
				{
					this.onbeforeunload ===
						c && (this.onbeforeunload = null)
				}
			}
		}
	};
	c.removeEvent = s.removeEventListener ? function(b, c, g)
	{
		b.removeEventListener && b.removeEventListener(c, g, !1)
	} : function(b, c, g)
	{
		b.detachEvent && b.detachEvent("on" + c, g)
	};
	c.Event = function(b, e)
	{
		if (!this.preventDefault) return new c.Event(b, e);
		b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || !1 === b.returnValue || b.getPreventDefault && b.getPreventDefault() ? U : F) : this.type = b;
		e && c.extend(this, e);
		this.timeStamp = c.now();
		this[c.expando] = !0
	};
	c.Event.prototype = {
		preventDefault: function()
		{
			this.isDefaultPrevented = U;
			var b = this.originalEvent;
			!b || (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
		},
		stopPropagation: function()
		{
			this.isPropagationStopped = U;
			var b = this.originalEvent;
			!b || (b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0)
		},
		stopImmediatePropagation: function()
		{
			this.isImmediatePropagationStopped = U;
			this.stopPropagation()
		},
		isDefaultPrevented: F,
		isPropagationStopped: F,
		isImmediatePropagationStopped: F
	};
	var ab = function(b)
		{
			var e = b.relatedTarget,
				g = !1,
				a = b.type;
			b.type = b.data;
			e !== this && (e && (g = c.contains(this, e)), g || (c.event.handle.apply(this, arguments), b.type = a))
		},
		Ma = function(b)
		{
			b.type = b.data;
			c.event.handle.apply(this, arguments)
		};
	c.each(
	{
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(b, e)
	{
		c.event.special[b] = {
			setup: function(g)
			{
				c.event.add(this, e, g && g.selector ? Ma : ab, b)
			},
			teardown: function(b)
			{
				c.event.remove(this, e, b && b.selector ? Ma : ab)
			}
		}
	});
	c.support.submitBubbles || (c.event.special.submit = {
		setup: function()
		{
			if (c.nodeName(this, "form")) return !1;
			c.event.add(this, "click.specialSubmit", function(b)
			{
				var e = b.target,
					g = c.nodeName(e, "input") || c.nodeName(e, "button") ? e.type : "";
				("submit" === g || "image" === g) && c(e).closest("form").length && C("submit", this, arguments)
			});
			c.event.add(this, "keypress.specialSubmit", function(b)
			{
				var e = b.target,
					g = c.nodeName(e, "input") || c.nodeName(e, "button") ? e.type : "";
				("text" === g || "password" === g) && c(e).closest("form").length && 13 === b.keyCode && C("submit", this, arguments)
			})
		},
		teardown: function()
		{
			c.event.remove(this, ".specialSubmit")
		}
	});
	if (!c.support.changeBubbles)
	{
		var wa, bb = function(b)
			{
				var e = c.nodeName(b, "input") ? b.type : "",
					g = b.value;
				return "radio" === e || "checkbox" === e ? g = b.checked : "select-multiple" === e ? g = -1 < b.selectedIndex ? c.map(b.options, function(a)
				{
					return a.selected
				}).join("-") : "" : c.nodeName(b, "select") && (g = b.selectedIndex), g
			},
			xa = function(b, e)
			{
				var g = b.target,
					a, d;
				if (Da.test(g.nodeName) && !g.readOnly && (a = c._data(g, "_change_data"), d = bb(g), ("focusout" !== b.type || "radio" !== g.type) && c._data(g, "_change_data", d), !(a === m || d === a)))
					if (null !=
						a || d) b.type = "change", b.liveFired = m, c.event.trigger(b, e, g)
			};
		c.event.special.change = {
			filters:
			{
				focusout: xa,
				beforedeactivate: xa,
				click: function(b)
				{
					var e = b.target,
						g = c.nodeName(e, "input") ? e.type : "";
					("radio" === g || "checkbox" === g || c.nodeName(e, "select")) && xa.call(this, b)
				},
				keydown: function(b)
				{
					var e = b.target,
						g = c.nodeName(e, "input") ? e.type : "";
					(13 === b.keyCode && !c.nodeName(e, "textarea") || 32 === b.keyCode && ("checkbox" === g || "radio" === g) || "select-multiple" === g) && xa.call(this, b)
				},
				beforeactivate: function(b)
				{
					b = b.target;
					c._data(b, "_change_data", bb(b))
				}
			},
			setup: function()
			{
				if ("file" === this.type) return !1;
				for (var b in wa) c.event.add(this, b + ".specialChange", wa[b]);
				return Da.test(this.nodeName)
			},
			teardown: function()
			{
				return c.event.remove(this, ".specialChange"), Da.test(this.nodeName)
			}
		};
		wa = c.event.special.change.filters;
		wa.focus = wa.beforeactivate
	}
	c.support.focusinBubbles || c.each(
	{
		focus: "focusin",
		blur: "focusout"
	}, function(b, e)
	{
		function g(a)
		{
			var b = c.event.fix(a);
			b.type = e;
			b.originalEvent = {};
			c.event.trigger(b, null, b.target);
			b.isDefaultPrevented() &&
				a.preventDefault()
		}
		var a = 0;
		c.event.special[e] = {
			setup: function()
			{
				0 === a++ && s.addEventListener(b, g, !0)
			},
			teardown: function()
			{
				0 === --a && s.removeEventListener(b, g, !0)
			}
		}
	});
	c.each(["bind", "one"], function(b, e)
	{
		c.fn[e] = function(b, a, d)
		{
			var f;
			if ("object" == typeof b)
			{
				for (var h in b) this[e](h, a, b[h], d);
				return this
			}
			if (2 === arguments.length || !1 === a) d = a, a = m;
			"one" === e ? (f = function(a)
			{
				return c(this).unbind(a, f), d.apply(this, arguments)
			}, f.guid = d.guid || c.guid++) : f = d;
			if ("unload" === b && "one" !== e) this.one(b, a, d);
			else
			{
				h = 0;
				for (var i =
						this.length; h < i; h++) c.event.add(this[h], b, f, a)
			}
			return this
		}
	});
	c.fn.extend(
	{
		unbind: function(b, e)
		{
			if ("object" == typeof b && !b.preventDefault)
				for (var g in b) this.unbind(g, b[g]);
			else
			{
				g = 0;
				for (var a = this.length; g < a; g++) c.event.remove(this[g], b, e)
			}
			return this
		},
		delegate: function(b, c, g, a)
		{
			return this.live(c, g, a, b)
		},
		undelegate: function(b, c, g)
		{
			return 0 === arguments.length ? this.unbind("live") : this.die(c, null, g, b)
		},
		trigger: function(b, e)
		{
			return this.each(function()
			{
				c.event.trigger(b, e, this)
			})
		},
		triggerHandler: function(b,
			e)
		{
			if (this[0]) return c.event.trigger(b, e, this[0], !0)
		},
		toggle: function(b)
		{
			var e = arguments,
				g = b.guid || c.guid++,
				a = 0,
				d = function(g)
				{
					var d = (c.data(this, "lastToggle" + b.guid) || 0) % a;
					return c.data(this, "lastToggle" + b.guid, d + 1), g.preventDefault(), e[d].apply(this, arguments) || !1
				};
			for (d.guid = g; a < e.length;) e[a++].guid = g;
			return this.click(d)
		},
		hover: function(b, c)
		{
			return this.mouseenter(b).mouseleave(c || b)
		}
	});
	var Na = {
		focus: "focusin",
		blur: "focusout",
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	};
	c.each(["live", "die"],
		function(b, e)
		{
			c.fn[e] = function(b, a, d, f)
			{
				var h = 0,
					i, k, n = f || this.selector,
					j = f ? this : c(this.context);
				if ("object" == typeof b && !b.preventDefault)
				{
					for (i in b) j[e](i, a, b[i], n);
					return this
				}
				if ("die" === e && !b && f && "." === f.charAt(0)) return j.unbind(f), this;
				if (!1 === a || c.isFunction(a)) d = a || F, a = m;
				for (b = (b || "").split(" "); null != (f = b[h++]);)
					if (i = ma.exec(f), k = "", i && (k = i[0], f = f.replace(ma, "")), "hover" === f) b.push("mouseenter" + k, "mouseleave" + k);
					else if (i = f, Na[f] ? (b.push(Na[f] + k), f += k) : f = (Na[f] || f) + k, "live" === e)
				{
					k = 0;
					for (var l =
							j.length; k < l; k++) c.event.add(j[k], "live." + E(f, n),
					{
						data: a,
						selector: n,
						handler: d,
						origType: f,
						origHandler: d,
						preType: i
					})
				}
				else j.unbind("live." + E(f, n), d);
				return this
			}
		});
	c.each("blur,focus,focusin,focusout,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error".split(","), function(b, e)
	{
		c.fn[e] = function(b, a)
		{
			return a == null && (a = b, b = null), arguments.length > 0 ? this.bind(e, b, a) : this.trigger(e)
		};
		c.attrFn && (c.attrFn[e] =
			true)
	});
	(function()
	{
		function b(a, b, c, e, g, d)
		{
			for (var g = 0, f = e.length; g < f; g++)
			{
				var h = e[g];
				if (h)
				{
					for (var i = !1, h = h[a]; h;)
					{
						if (h.sizcache === c)
						{
							i = e[h.sizset];
							break
						}
						if (1 === h.nodeType)
							if (d || (h.sizcache = c, h.sizset = g), "string" != typeof b)
							{
								if (h === b)
								{
									i = !0;
									break
								}
							}
						else if (0 < n.filter(b, [h]).length)
						{
							i = h;
							break
						}
						h = h[a]
					}
					e[g] = i
				}
			}
		}

		function e(a, b, c, e, g, d)
		{
			for (var g = 0, f = e.length; g < f; g++)
			{
				var h = e[g];
				if (h)
				{
					for (var i = !1, h = h[a]; h;)
					{
						if (h.sizcache === c)
						{
							i = e[h.sizset];
							break
						}
						1 === h.nodeType && !d && (h.sizcache = c, h.sizset = g);
						if (h.nodeName.toLowerCase() ===
							b)
						{
							i = h;
							break
						}
						h = h[a]
					}
					e[g] = i
				}
			}
		}
		var g = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
			a = 0,
			d = Object.prototype.toString,
			f = !1,
			h = !0,
			i = /\\/g,
			k = /\W/;
		[0, 0].sort(function()
		{
			return h = !1, 0
		});
		var n = function(a, b, c, e)
		{
			var c = c || [],
				f = b = b || s;
			if (1 !== b.nodeType && 9 !== b.nodeType) return [];
			if (!a || "string" != typeof a) return c;
			var h, i, k, q, u, r, p = !0,
				m = n.isXML(b),
				B = [],
				x = a;
			do
				if (g.exec(""), h = g.exec(x))
					if (x = h[3], B.push(h[1]), h[2])
					{
						q = h[3];
						break
					}
			while (h);
			if (1 < B.length && l.exec(a))
				if (2 === B.length && j.relative[B[0]]) i = E(B[0] + B[1], b);
				else
					for (i = j.relative[B[0]] ? [b] : n(B.shift(), b); B.length;) a = B.shift(), j.relative[a] && (a += B.shift()), i = E(a, i);
			else if (!e && 1 < B.length && 9 === b.nodeType && !m && j.match.ID.test(B[0]) && !j.match.ID.test(B[B.length - 1]) && (u = n.find(B.shift(), b, m), b = u.expr ? n.filter(u.expr, u.set)[0] : u.set[0]), b)
			{
				u = e ?
				{
					expr: B.pop(),
					set: t(e)
				} : n.find(B.pop(), 1 === B.length && ("~" === B[0] || "+" === B[0]) && b.parentNode ? b.parentNode : b, m);
				i = u.expr ? n.filter(u.expr, u.set) :
					u.set;
				for (0 < B.length ? k = t(i) : p = !1; B.length;) h = r = B.pop(), j.relative[r] ? h = B.pop() : r = "", null == h && (h = b), j.relative[r](k, h, m)
			}
			else k = [];
			k || (k = i);
			k || n.error(r || a);
			if ("[object Array]" === d.call(k))
				if (p)
					if (b && 1 === b.nodeType)
						for (a = 0; null != k[a]; a++) k[a] && (!0 === k[a] || 1 === k[a].nodeType && n.contains(b, k[a])) && c.push(i[a]);
					else
						for (a = 0; null != k[a]; a++) k[a] && 1 === k[a].nodeType && c.push(i[a]);
			else c.push.apply(c, k);
			else t(k, c);
			return q && (n(q, f, c, e), n.uniqueSort(c)), c
		};
		n.uniqueSort = function(a)
		{
			if (x && (f = h, a.sort(x), f))
				for (var b =
						1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1);
			return a
		};
		n.matches = function(a, b)
		{
			return n(a, null, null, b)
		};
		n.matchesSelector = function(a, b)
		{
			return 0 < n(b, null, null, [a]).length
		};
		n.find = function(a, b, c)
		{
			var e;
			if (!a) return [];
			for (var g = 0, d = j.order.length; g < d; g++)
			{
				var f, h = j.order[g];
				if (f = j.leftMatch[h].exec(a))
				{
					var k = f[1];
					f.splice(1, 1);
					if ("\\" !== k.substr(k.length - 1) && (f[1] = (f[1] || "").replace(i, ""), e = j.find[h](f, b, c), null != e))
					{
						a = a.replace(j.match[h], "");
						break
					}
				}
			}
			return e || (e = "undefined" != typeof b.getElementsByTagName ?
				b.getElementsByTagName("*") : []),
			{
				set: e,
				expr: a
			}
		};
		n.filter = function(a, b, c, e)
		{
			for (var g, d, f = a, h = [], i = b, k = b && b[0] && n.isXML(b[0]); a && b.length;)
			{
				for (var o in j.filter)
					if (null != (g = j.leftMatch[o].exec(a)) && g[2])
					{
						var q, l, u = j.filter[o];
						l = g[1];
						d = !1;
						g.splice(1, 1);
						if ("\\" !== l.substr(l.length - 1))
						{
							i === h && (h = []);
							if (j.preFilter[o])
								if (g = j.preFilter[o](g, i, c, h, e, k))
								{
									if (!0 === g) continue
								}
							else d = q = !0;
							if (g)
								for (var r = 0; null != (l = i[r]); r++)
									if (l)
									{
										q = u(l, g, r, i);
										var p = e ^ !!q;
										c && null != q ? p ? d = !0 : i[r] = !1 : p && (h.push(l), d = !0)
									}
							if (q !==
								m)
							{
								c || (i = h);
								a = a.replace(j.match[o], "");
								if (!d) return [];
								break
							}
						}
					}
				if (a === f)
					if (null == d) n.error(a);
					else break;
				f = a
			}
			return i
		};
		n.error = function(a)
		{
			throw "Syntax error, unrecognized expression: " + a;
		};
		var j = n.selectors = {
				order: ["ID", "NAME", "TAG"],
				match:
				{
					ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
					CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
					NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
					ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
					TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
					CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
					POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
					PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
				},
				leftMatch:
				{},
				attrMap:
				{
					"class": "className",
					"for": "htmlFor"
				},
				attrHandle:
				{
					href: function(a)
					{
						return a.getAttribute("href")
					},
					type: function(a)
					{
						return a.getAttribute("type")
					}
				},
				relative:
				{
					"+": function(a, b)
					{
						var c = "string" == typeof b,
							e = c && !k.test(b),
							c = c && !e;
						e && (b = b.toLowerCase());
						for (var e = 0, g = a.length, d; e < g; e++)
							if (d = a[e])
							{
								for (;
									(d = d.previousSibling) && 1 !== d.nodeType;);
								a[e] = c || d && d.nodeName.toLowerCase() === b ? d || !1 : d === b
							}
						c && n.filter(b, a, !0)
					},
					">": function(a, b)
					{
						var c, e = "string" == typeof b,
							g = 0,
							d = a.length;
						if (e && !k.test(b))
							for (b = b.toLowerCase(); g < d; g++)
							{
								if (c = a[g]) c = c.parentNode, a[g] = c.nodeName.toLowerCase() === b ? c : !1
							}
						else
						{
							for (; g < d; g++)(c = a[g]) && (a[g] = e ? c.parentNode : c.parentNode === b);
							e && n.filter(b, a, !0)
						}
					},
					"": function(c, g, d)
					{
						var f, h = a++,
							i = b;
						"string" == typeof g &&
							!k.test(g) && (g = g.toLowerCase(), f = g, i = e);
						i("parentNode", g, h, c, f, d)
					},
					"~": function(c, g, d)
					{
						var f, h = a++,
							i = b;
						"string" == typeof g && !k.test(g) && (g = g.toLowerCase(), f = g, i = e);
						i("previousSibling", g, h, c, f, d)
					}
				},
				find:
				{
					ID: function(a, b, c)
					{
						if ("undefined" != typeof b.getElementById && !c) return (a = b.getElementById(a[1])) && a.parentNode ? [a] : []
					},
					NAME: function(a, b)
					{
						if ("undefined" != typeof b.getElementsByName)
						{
							for (var c = [], e = b.getElementsByName(a[1]), g = 0, d = e.length; g < d; g++) e[g].getAttribute("name") === a[1] && c.push(e[g]);
							return 0 ===
								c.length ? null : c
						}
					},
					TAG: function(a, b)
					{
						if ("undefined" != typeof b.getElementsByTagName) return b.getElementsByTagName(a[1])
					}
				},
				preFilter:
				{
					CLASS: function(a, b, c, e, g, d)
					{
						a = " " + a[1].replace(i, "") + " ";
						if (d) return a;
						for (var d = 0, f; null != (f = b[d]); d++) f && (g ^ (f.className && 0 <= (" " + f.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a)) ? c || e.push(f) : c && (b[d] = !1));
						return !1
					},
					ID: function(a)
					{
						return a[1].replace(i, "")
					},
					TAG: function(a)
					{
						return a[1].replace(i, "").toLowerCase()
					},
					CHILD: function(b)
					{
						if ("nth" === b[1])
						{
							b[2] || n.error(b[0]);
							b[2] = b[2].replace(/^\+|\s*/g, "");
							var c = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === b[2] && "2n" || "odd" === b[2] && "2n+1" || !/\D/.test(b[2]) && "0n+" + b[2] || b[2]);
							b[2] = c[1] + (c[2] || 1) - 0;
							b[3] = c[3] - 0
						}
						else b[2] && n.error(b[0]);
						return b[0] = a++, b
					},
					ATTR: function(a, b, c, e, g, d)
					{
						b = a[1] = a[1].replace(i, "");
						return !d && j.attrMap[b] && (a[1] = j.attrMap[b]), a[4] = (a[4] || a[5] || "").replace(i, ""), "~=" === a[2] && (a[4] = " " + a[4] + " "), a
					},
					PSEUDO: function(a, b, c, e, d)
					{
						if ("not" === a[1])
							if (1 < (g.exec(a[3]) || "").length || /^\w/.test(a[3])) a[3] = n(a[3],
								null, null, b);
							else return a = n.filter(a[3], b, c, 1 ^ d), c || e.push.apply(e, a), !1;
						else if (j.match.POS.test(a[0]) || j.match.CHILD.test(a[0])) return !0;
						return a
					},
					POS: function(a)
					{
						return a.unshift(!0), a
					}
				},
				filters:
				{
					enabled: function(a)
					{
						return !1 === a.disabled && "hidden" !== a.type
					},
					disabled: function(a)
					{
						return !0 === a.disabled
					},
					checked: function(a)
					{
						return !0 === a.checked
					},
					selected: function(a)
					{
						return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
					},
					parent: function(a)
					{
						return !!a.firstChild
					},
					empty: function(a)
					{
						return !a.firstChild
					},
					has: function(a, b, c)
					{
						return !!n(c[3], a).length
					},
					header: function(a)
					{
						return /h\d/i.test(a.nodeName)
					},
					text: function(a)
					{
						var b = a.getAttribute("type"),
							c = a.type;
						return "input" === a.nodeName.toLowerCase() && "text" === c && (b === c || null === b)
					},
					radio: function(a)
					{
						return "input" === a.nodeName.toLowerCase() && "radio" === a.type
					},
					checkbox: function(a)
					{
						return "input" === a.nodeName.toLowerCase() && "checkbox" === a.type
					},
					file: function(a)
					{
						return "input" === a.nodeName.toLowerCase() && "file" === a.type
					},
					password: function(a)
					{
						return "input" === a.nodeName.toLowerCase() &&
							"password" === a.type
					},
					submit: function(a)
					{
						var b = a.nodeName.toLowerCase();
						return ("input" === b || "button" === b) && "submit" === a.type
					},
					image: function(a)
					{
						return "input" === a.nodeName.toLowerCase() && "image" === a.type
					},
					reset: function(a)
					{
						var b = a.nodeName.toLowerCase();
						return ("input" === b || "button" === b) && "reset" === a.type
					},
					button: function(a)
					{
						var b = a.nodeName.toLowerCase();
						return "input" === b && "button" === a.type || "button" === b
					},
					input: function(a)
					{
						return /input|select|textarea|button/i.test(a.nodeName)
					},
					focus: function(a)
					{
						return a ===
							a.ownerDocument.activeElement
					}
				},
				setFilters:
				{
					first: function(a, b)
					{
						return 0 === b
					},
					last: function(a, b, c, e)
					{
						return b === e.length - 1
					},
					even: function(a, b)
					{
						return 0 === b % 2
					},
					odd: function(a, b)
					{
						return 1 === b % 2
					},
					lt: function(a, b, c)
					{
						return b < c[3] - 0
					},
					gt: function(a, b, c)
					{
						return b > c[3] - 0
					},
					nth: function(a, b, c)
					{
						return c[3] - 0 === b
					},
					eq: function(a, b, c)
					{
						return c[3] - 0 === b
					}
				},
				filter:
				{
					PSEUDO: function(a, b, c, e)
					{
						var g = b[1],
							d = j.filters[g];
						if (d) return d(a, c, b, e);
						if ("contains" === g) return 0 <= (a.textContent || a.innerText || n.getText([a]) || "").indexOf(b[3]);
						if ("not" === g)
						{
							b = b[3];
							c = 0;
							for (e = b.length; c < e; c++)
								if (b[c] === a) return !1;
							return !0
						}
						n.error(g)
					},
					CHILD: function(a, b)
					{
						var c = b[1],
							e = a;
						switch (c)
						{
							case "only":
							case "first":
								for (; e = e.previousSibling;)
									if (1 === e.nodeType) return !1;
								if ("first" === c) return !0;
								e = a;
							case "last":
								for (; e = e.nextSibling;)
									if (1 === e.nodeType) return !1;
								return !0;
							case "nth":
								var c = b[2],
									g = b[3];
								if (1 === c && 0 === g) return !0;
								var d = b[0],
									f = a.parentNode;
								if (f && (f.sizcache !== d || !a.nodeIndex))
								{
									for (var h = 0, e = f.firstChild; e; e = e.nextSibling) 1 === e.nodeType && (e.nodeIndex =
										++h);
									f.sizcache = d
								}
								e = a.nodeIndex - g;
								return 0 === c ? 0 === e : 0 === e % c && 0 <= e / c
						}
					},
					ID: function(a, b)
					{
						return 1 === a.nodeType && a.getAttribute("id") === b
					},
					TAG: function(a, b)
					{
						return "*" === b && 1 === a.nodeType || a.nodeName.toLowerCase() === b
					},
					CLASS: function(a, b)
					{
						return -1 < (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b)
					},
					ATTR: function(a, b)
					{
						var c = b[1],
							c = j.attrHandle[c] ? j.attrHandle[c](a) : null != a[c] ? a[c] : a.getAttribute(c),
							e = c + "",
							g = b[2],
							d = b[4];
						return null == c ? "!=" === g : "=" === g ? e === d : "*=" === g ? 0 <= e.indexOf(d) : "~=" === g ? 0 <=
							(" " + e + " ").indexOf(d) : d ? "!=" === g ? e !== d : "^=" === g ? 0 === e.indexOf(d) : "$=" === g ? e.substr(e.length - d.length) === d : "|=" === g ? e === d || e.substr(0, d.length + 1) === d + "-" : !1 : e && !1 !== c
					},
					POS: function(a, b, c, e)
					{
						var g = j.setFilters[b[2]];
						if (g) return g(a, c, b, e)
					}
				}
			},
			l = j.match.POS,
			r = function(a, b)
			{
				return "\\" + (b - 0 + 1)
			},
			p;
		for (p in j.match) j.match[p] = RegExp(j.match[p].source + /(?![^\[]*\])(?![^\(]*\))/.source), j.leftMatch[p] = RegExp(/(^(?:.|\r|\n)*?)/.source + j.match[p].source.replace(/\\(\d+)/g, r));
		var t = function(a, b)
		{
			return a = Array.prototype.slice.call(a,
				0), b ? (b.push.apply(b, a), b) : a
		};
		try
		{
			Array.prototype.slice.call(s.documentElement.childNodes, 0)[0].nodeType
		}
		catch (B)
		{
			t = function(a, b)
			{
				var c = 0,
					e = b || [];
				if ("[object Array]" === d.call(a)) Array.prototype.push.apply(e, a);
				else if ("number" == typeof a.length)
					for (var g = a.length; c < g; c++) e.push(a[c]);
				else
					for (; a[c]; c++) e.push(a[c]);
				return e
			}
		}
		var x, v;
		s.documentElement.compareDocumentPosition ? x = function(a, b)
		{
			return a === b ? (f = !0, 0) : !a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition ? -1 : 1 : a.compareDocumentPosition(b) &
				4 ? -1 : 1
		} : (x = function(a, b)
		{
			if (a === b) return f = !0, 0;
			if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
			var c, e, g = [],
				d = [];
			c = a.parentNode;
			e = b.parentNode;
			var h = c;
			if (c === e) return v(a, b);
			if (!c) return -1;
			if (!e) return 1;
			for (; h;) g.unshift(h), h = h.parentNode;
			for (h = e; h;) d.unshift(h), h = h.parentNode;
			c = g.length;
			e = d.length;
			for (h = 0; h < c && h < e; h++)
				if (g[h] !== d[h]) return v(g[h], d[h]);
			return h === c ? v(a, d[h], -1) : v(g[h], b, 1)
		}, v = function(a, b, c)
		{
			if (a === b) return c;
			for (a = a.nextSibling; a;)
			{
				if (a === b) return -1;
				a = a.nextSibling
			}
			return 1
		});
		n.getText = function(a)
		{
			for (var b = "", c, e = 0; a[e]; e++) c = a[e], 3 === c.nodeType || 4 === c.nodeType ? b += c.nodeValue : 8 !== c.nodeType && (b += n.getText(c.childNodes));
			return b
		};
		(function()
		{
			var a = s.createElement("div"),
				b = "script" + (new Date).getTime(),
				c = s.documentElement;
			a.innerHTML = "<a name='" + b + "'/>";
			c.insertBefore(a, c.firstChild);
			s.getElementById(b) && (j.find.ID = function(a, b, c)
			{
				if ("undefined" != typeof b.getElementById && !c) return (b = b.getElementById(a[1])) ? b.id === a[1] || "undefined" != typeof b.getAttributeNode && b.getAttributeNode("id").nodeValue ===
					a[1] ? [b] : m : []
			}, j.filter.ID = function(a, b)
			{
				var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
				return 1 === a.nodeType && c && c.nodeValue === b
			});
			c.removeChild(a);
			c = a = null
		})();
		(function()
		{
			var a = s.createElement("div");
			a.appendChild(s.createComment(""));
			0 < a.getElementsByTagName("*").length && (j.find.TAG = function(a, b)
			{
				var c = b.getElementsByTagName(a[1]);
				if ("*" === a[1])
				{
					for (var e = [], g = 0; c[g]; g++) 1 === c[g].nodeType && e.push(c[g]);
					c = e
				}
				return c
			});
			a.innerHTML = "<a href='#'></a>";
			a.firstChild && "undefined" !=
				typeof a.firstChild.getAttribute && "#" !== a.firstChild.getAttribute("href") && (j.attrHandle.href = function(a)
				{
					return a.getAttribute("href", 2)
				});
			a = null
		})();
		s.querySelectorAll && function()
		{
			var a = n,
				b = s.createElement("div");
			b.innerHTML = "<p class='TEST'></p>";
			if (!b.querySelectorAll || 0 !== b.querySelectorAll(".TEST").length)
			{
				n = function(b, c, e, g)
				{
					c = c || s;
					if (!g && !n.isXML(c))
					{
						var d = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
						if (d && (1 === c.nodeType || 9 === c.nodeType))
						{
							if (d[1]) return t(c.getElementsByTagName(b), e);
							if (d[2] &&
								j.find.CLASS && c.getElementsByClassName) return t(c.getElementsByClassName(d[2]), e)
						}
						if (9 === c.nodeType)
						{
							if ("body" === b && c.body) return t([c.body], e);
							if (d && d[3])
							{
								var f = c.getElementById(d[3]);
								if (!f || !f.parentNode) return t([], e);
								if (f.id === d[3]) return t([f], e)
							}
							try
							{
								return t(c.querySelectorAll(b), e)
							}
							catch (h)
							{}
						}
						else if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase())
						{
							var d = c,
								i = (f = c.getAttribute("id")) || "__sizzle__",
								k = c.parentNode,
								o = /^\s*[+~]/.test(b);
							f ? i = i.replace(/'/g, "\\$&") : c.setAttribute("id", i);
							o && k &&
								(c = c.parentNode);
							try
							{
								if (!o || k) return t(c.querySelectorAll("[id='" + i + "'] " + b), e)
							}
							catch (q)
							{}
							finally
							{
								f || d.removeAttribute("id")
							}
						}
					}
					return a(b, c, e, g)
				};
				for (var c in a) n[c] = a[c];
				b = null
			}
		}();
		(function()
		{
			var a = s.documentElement,
				b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
			if (b)
			{
				var c = !b.call(s.createElement("div"), "div"),
					e = !1;
				try
				{
					b.call(s.documentElement, "[test!='']:sizzle")
				}
				catch (g)
				{
					e = !0
				}
				n.matchesSelector = function(a, g)
				{
					g = g.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
					if (!n.isXML(a)) try
					{
						if (e || !j.match.PSEUDO.test(g) && !/!=/.test(g))
						{
							var d = b.call(a, g);
							if (d || !c || a.document && 11 !== a.document.nodeType) return d
						}
					}
					catch (f)
					{}
					return 0 < n(g, null, null, [a]).length
				}
			}
		})();
		(function()
		{
			var a = s.createElement("div");
			a.innerHTML = "<div class='test e'></div><div class='test'></div>";
			a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length && (a.lastChild.className = "e", 1 !== a.getElementsByClassName("e").length && (j.order.splice(1, 0, "CLASS"), j.find.CLASS = function(a, b, c)
			{
				if ("undefined" !=
					typeof b.getElementsByClassName && !c) return b.getElementsByClassName(a[1])
			}, a = null))
		})();
		s.documentElement.contains ? n.contains = function(a, b)
		{
			return a !== b && (a.contains ? a.contains(b) : !0)
		} : s.documentElement.compareDocumentPosition ? n.contains = function(a, b)
		{
			return !!(a.compareDocumentPosition(b) & 16)
		} : n.contains = function()
		{
			return !1
		};
		n.isXML = function(a)
		{
			return (a = (a ? a.ownerDocument || a : 0).documentElement) ? "HTML" !== a.nodeName : !1
		};
		var E = function(a, b)
		{
			for (var c, e = [], g = "", d = b.nodeType ? [b] : b; c = j.match.PSEUDO.exec(a);) g +=
				c[0], a = a.replace(j.match.PSEUDO, "");
			a = j.relative[a] ? a + "*" : a;
			c = 0;
			for (var f = d.length; c < f; c++) n(a, d[c], e);
			return n.filter(g, e)
		};
		c.find = n;
		c.expr = n.selectors;
		c.expr[":"] = c.expr.filters;
		c.unique = n.uniqueSort;
		c.text = n.getText;
		c.isXMLDoc = n.isXML;
		c.contains = n.contains
	})();
	var wb = /Until$/,
		xb = /^(?:parents|prevUntil|prevAll)/,
		rb = /,/,
		yb = /^.[^:#\[\.,]*$/,
		cb = Array.prototype.slice,
		db = c.expr.match.POS,
		Ya = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	c.fn.extend(
	{
		find: function(b)
		{
			var e = this,
				g, a;
			if ("string" != typeof b) return c(b).filter(function()
			{
				g =
					0;
				for (a = e.length; g < a; g++)
					if (c.contains(e[g], this)) return !0
			});
			var d = this.pushStack("", "find", b),
				f, h, i;
			g = 0;
			for (a = this.length; g < a; g++)
				if (f = d.length, c.find(b, this[g], d), 0 < g)
					for (h = f; h < d.length; h++)
						for (i = 0; i < f; i++)
							if (d[i] === d[h])
							{
								d.splice(h--, 1);
								break
							}
			return d
		},
		has: function(b)
		{
			var e = c(b);
			return this.filter(function()
			{
				for (var b = 0, a = e.length; b < a; b++)
					if (c.contains(this, e[b])) return !0
			})
		},
		not: function(b)
		{
			return this.pushStack(z(this, b, !1), "not", b)
		},
		filter: function(b)
		{
			return this.pushStack(z(this, b, !0), "filter",
				b)
		},
		is: function(b)
		{
			return !!b && ("string" == typeof b ? 0 < c.filter(b, this).length : 0 < this.filter(b).length)
		},
		closest: function(b, e)
		{
			var g = [],
				a, d, f = this[0];
			if (c.isArray(b))
			{
				var h, i = {},
					k = 1;
				if (f && b.length)
				{
					a = 0;
					for (d = b.length; a < d; a++) h = b[a], i[h] || (i[h] = db.test(h) ? c(h, e || this.context) : h);
					for (; f && f.ownerDocument && f !== e;)
					{
						for (h in i) a = i[h], (a.jquery ? -1 < a.index(f) : c(f).is(a)) && g.push(
						{
							selector: h,
							elem: f,
							level: k
						});
						f = f.parentNode;
						k++
					}
				}
				return g
			}
			h = db.test(b) || "string" != typeof b ? c(b, e || this.context) : 0;
			a = 0;
			for (d = this.length; a <
				d; a++)
				for (f = this[a]; f;)
				{
					if (h ? -1 < h.index(f) : c.find.matchesSelector(f, b))
					{
						g.push(f);
						break
					}
					f = f.parentNode;
					if (!f || !f.ownerDocument || f === e || 11 === f.nodeType) break
				}
			return g = 1 < g.length ? c.unique(g) : g, this.pushStack(g, "closest", b)
		},
		index: function(b)
		{
			return b ? "string" == typeof b ? c.inArray(this[0], c(b)) : c.inArray(b.jquery ? b[0] : b, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
		},
		add: function(b, e)
		{
			var g = "string" == typeof b ? c(b, e) : c.makeArray(b && b.nodeType ? [b] : b),
				a = c.merge(this.get(), g);
			return this.pushStack(!g[0] ||
				!g[0].parentNode || 11 === g[0].parentNode.nodeType || !a[0] || !a[0].parentNode || 11 === a[0].parentNode.nodeType ? a : c.unique(a))
		},
		andSelf: function()
		{
			return this.add(this.prevObject)
		}
	});
	c.each(
	{
		parent: function(b)
		{
			return (b = b.parentNode) && 11 !== b.nodeType ? b : null
		},
		parents: function(b)
		{
			return c.dir(b, "parentNode")
		},
		parentsUntil: function(b, e, g)
		{
			return c.dir(b, "parentNode", g)
		},
		next: function(b)
		{
			return c.nth(b, 2, "nextSibling")
		},
		prev: function(b)
		{
			return c.nth(b, 2, "previousSibling")
		},
		nextAll: function(b)
		{
			return c.dir(b, "nextSibling")
		},
		prevAll: function(b)
		{
			return c.dir(b, "previousSibling")
		},
		nextUntil: function(b, e, g)
		{
			return c.dir(b, "nextSibling", g)
		},
		prevUntil: function(b, e, g)
		{
			return c.dir(b, "previousSibling", g)
		},
		siblings: function(b)
		{
			return c.sibling(b.parentNode.firstChild, b)
		},
		children: function(b)
		{
			return c.sibling(b.firstChild)
		},
		contents: function(b)
		{
			return c.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : c.makeArray(b.childNodes)
		}
	}, function(b, e)
	{
		c.fn[b] = function(g, a)
		{
			var d = c.map(this, e, g),
				f = cb.call(arguments);
			return wb.test(b) ||
				(a = g), a && "string" == typeof a && (d = c.filter(a, d)), d = 1 < this.length && !Ya[b] ? c.unique(d) : d, (1 < this.length || rb.test(a)) && xb.test(b) && (d = d.reverse()), this.pushStack(d, b, f.join(","))
		}
	});
	c.extend(
	{
		filter: function(b, e, g)
		{
			return g && (b = ":not(" + b + ")"), 1 === e.length ? c.find.matchesSelector(e[0], b) ? [e[0]] : [] : c.find.matches(b, e)
		},
		dir: function(b, e, g)
		{
			for (var a = [], b = b[e]; b && 9 !== b.nodeType && (g === m || 1 !== b.nodeType || !c(b).is(g));) 1 === b.nodeType && a.push(b), b = b[e];
			return a
		},
		nth: function(b, c, g)
		{
			for (var c = c || 1, a = 0; b && !(1 ===
					b.nodeType && ++a === c); b = b[g]);
			return b
		},
		sibling: function(b, c)
		{
			for (var g = []; b; b = b.nextSibling) 1 === b.nodeType && b !== c && g.push(b);
			return g
		}
	});
	var zb = / jQuery\d+="(?:\d+|null)"/g,
		ya = /^\s+/,
		Oa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
		Pa = /<([\w:]+)/,
		Ab = /<tbody/i,
		Bb = /<|&#?\w+;/,
		eb = /<(?:script|object|embed|option|style)/i,
		fb = /checked\s*(?:[^=]|=\s*.checked.)/i,
		gb = /\/(java|ecma)script/i,
		hb = /^\s*<!(?:\[CDATA\[|\-\-)/,
		X = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1,
				"<fieldset>", "</fieldset>"
			],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			area: [1, "<map>", "</map>"],
			_default: [0, "", ""]
		};
	X.optgroup = X.option;
	X.tbody = X.tfoot = X.colgroup = X.caption = X.thead;
	X.th = X.td;
	c.support.htmlSerialize || (X._default = [1, "div<div>", "</div>"]);
	c.fn.extend(
	{
		text: function(b)
		{
			return c.isFunction(b) ? this.each(function(e)
			{
				var g = c(this);
				g.text(b.call(this,
					e, g.text()))
			}) : "object" != typeof b && b !== m ? this.empty().append((this[0] && this[0].ownerDocument || s).createTextNode(b)) : c.text(this)
		},
		wrapAll: function(b)
		{
			if (c.isFunction(b)) return this.each(function(e)
			{
				c(this).wrapAll(b.call(this, e))
			});
			if (this[0])
			{
				var e = c(b, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && e.insertBefore(this[0]);
				e.map(function()
				{
					for (var b = this; b.firstChild && 1 === b.firstChild.nodeType;) b = b.firstChild;
					return b
				}).append(this)
			}
			return this
		},
		wrapInner: function(b)
		{
			return c.isFunction(b) ?
				this.each(function(e)
				{
					c(this).wrapInner(b.call(this, e))
				}) : this.each(function()
				{
					var e = c(this),
						g = e.contents();
					g.length ? g.wrapAll(b) : e.append(b)
				})
		},
		wrap: function(b)
		{
			return this.each(function()
			{
				c(this).wrapAll(b)
			})
		},
		unwrap: function()
		{
			return this.parent().each(function()
			{
				c.nodeName(this, "body") || c(this).replaceWith(this.childNodes)
			}).end()
		},
		append: function()
		{
			return this.domManip(arguments, !0, function(b)
			{
				this.nodeType === 1 && this.appendChild(b)
			})
		},
		prepend: function()
		{
			return this.domManip(arguments, !0, function(b)
			{
				this.nodeType ===
					1 && this.insertBefore(b, this.firstChild)
			})
		},
		before: function()
		{
			if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(b)
			{
				this.parentNode.insertBefore(b, this)
			});
			if (arguments.length)
			{
				var b = c(arguments[0]);
				return b.push.apply(b, this.toArray()), this.pushStack(b, "before", arguments)
			}
		},
		after: function()
		{
			if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(b)
			{
				this.parentNode.insertBefore(b, this.nextSibling)
			});
			if (arguments.length)
			{
				var b = this.pushStack(this, "after", arguments);
				return b.push.apply(b, c(arguments[0]).toArray()), b
			}
		},
		remove: function(b, e)
		{
			for (var g = 0, a; null != (a = this[g]); g++)
				if (!b || c.filter(b, [a]).length) !e && 1 === a.nodeType && (c.cleanData(a.getElementsByTagName("*")), c.cleanData([a])), a.parentNode && a.parentNode.removeChild(a);
			return this
		},
		empty: function()
		{
			for (var b = 0, e; null != (e = this[b]); b++)
				for (1 === e.nodeType && c.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild);
			return this
		},
		clone: function(b, e)
		{
			return b = null == b ? !1 : b, e = null == e ? b : e, this.map(function()
			{
				return c.clone(this,
					b, e)
			})
		},
		html: function(b)
		{
			if (b === m) return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(zb, "") : null;
			if ("string" == typeof b && !eb.test(b) && (c.support.leadingWhitespace || !ya.test(b)) && !X[(Pa.exec(b) || ["", ""])[1].toLowerCase()])
			{
				b = b.replace(Oa, "<$1></$2>");
				try
				{
					for (var e = 0, g = this.length; e < g; e++) 1 === this[e].nodeType && (c.cleanData(this[e].getElementsByTagName("*")), this[e].innerHTML = b)
				}
				catch (a)
				{
					this.empty().append(b)
				}
			}
			else c.isFunction(b) ? this.each(function(a)
			{
				var e = c(this);
				e.html(b.call(this, a,
					e.html()))
			}) : this.empty().append(b);
			return this
		},
		replaceWith: function(b)
		{
			return this[0] && this[0].parentNode ? c.isFunction(b) ? this.each(function(e)
			{
				var g = c(this),
					a = g.html();
				g.replaceWith(b.call(this, e, a))
			}) : ("string" != typeof b && (b = c(b).detach()), this.each(function()
			{
				var e = this.nextSibling,
					g = this.parentNode;
				c(this).remove();
				e ? c(e).before(b) : c(g).append(b)
			})) : this.length ? this.pushStack(c(c.isFunction(b) ? b() : b), "replaceWith", b) : this
		},
		detach: function(b)
		{
			return this.remove(b, !0)
		},
		domManip: function(b, e, g)
		{
			var a,
				f, h, i = b[0],
				k = [];
			if (!c.support.checkClone && 3 === arguments.length && "string" == typeof i && fb.test(i)) return this.each(function()
			{
				c(this).domManip(b, e, g, !0)
			});
			if (c.isFunction(i)) return this.each(function(a)
			{
				var d = c(this);
				b[0] = i.call(this, a, e ? d.html() : m);
				d.domManip(b, e, g)
			});
			if (this[0])
			{
				h = i && i.parentNode;
				c.support.parentNode && h && 11 === h.nodeType && h.childNodes.length === this.length ? a = {
					fragment: h
				} : a = c.buildFragment(b, this, k);
				h = a.fragment;
				1 === h.childNodes.length ? f = h = h.firstChild : f = h.firstChild;
				if (f)
				{
					e = e && c.nodeName(f,
						"tr");
					f = 0;
					for (var n = this.length, j = n - 1; f < n; f++) g.call(e ? c.nodeName(this[f], "table") ? this[f].getElementsByTagName("tbody")[0] || this[f].appendChild(this[f].ownerDocument.createElement("tbody")) : this[f] : this[f], a.cacheable || 1 < n && f < j ? c.clone(h, !0, !0) : h)
				}
				k.length && c.each(k, d)
			}
			return this
		}
	});
	c.buildFragment = function(b, e, g)
	{
		var a, d, f, h;
		return e && e[0] && (h = e[0].ownerDocument || e[0]), h.createDocumentFragment || (h = s), 1 === b.length && "string" == typeof b[0] && 512 > b[0].length && h === s && "<" === b[0].charAt(0) && !eb.test(b[0]) &&
			(c.support.checkClone || !fb.test(b[0])) && (d = !0, f = c.fragments[b[0]], f && 1 !== f && (a = f)), a || (a = h.createDocumentFragment(), c.clean(b, h, a, g)), d && (c.fragments[b[0]] = f ? a : 1),
			{
				fragment: a,
				cacheable: d
			}
	};
	c.fragments = {};
	c.each(
	{
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(b, e)
	{
		c.fn[b] = function(g)
		{
			var a = [],
				g = c(g),
				d = 1 === this.length && this[0].parentNode;
			if (d && 11 === d.nodeType && 1 === d.childNodes.length && 1 === g.length) return g[e](this[0]), this;
			for (var d =
					0, f = g.length; d < f; d++)
			{
				var h = (0 < d ? this.clone(!0) : this).get();
				c(g[d])[e](h);
				a = a.concat(h)
			}
			return this.pushStack(a, b, g.selector)
		}
	});
	c.extend(
	{
		clone: function(b, e, g)
		{
			var a = b.cloneNode(!0),
				d, f, h;
			if ((!c.support.noCloneEvent || !c.support.noCloneChecked) && (1 === b.nodeType || 11 === b.nodeType) && !c.isXMLDoc(b))
			{
				B(b, a);
				d = n(b);
				f = n(a);
				for (h = 0; d[h]; ++h) f[h] && B(d[h], f[h])
			}
			if (e && (J(b, a), g))
			{
				d = n(b);
				f = n(a);
				for (h = 0; d[h]; ++h) J(d[h], f[h])
			}
			return a
		},
		clean: function(b, e, g, a)
		{
			e = e || s;
			"undefined" == typeof e.createElement && (e = e.ownerDocument ||
				e[0] && e[0].ownerDocument || s);
			for (var d = [], f, i = 0, k; null != (k = b[i]); i++)
				if ("number" == typeof k && (k += ""), k)
				{
					if ("string" == typeof k)
						if (Bb.test(k))
						{
							k = k.replace(Oa, "<$1></$2>");
							f = (Pa.exec(k) || ["", ""])[1].toLowerCase();
							var n = X[f] || X._default,
								j = n[0],
								l = e.createElement("div");
							for (l.innerHTML = n[1] + k + n[2]; j--;) l = l.lastChild;
							if (!c.support.tbody)
							{
								j = Ab.test(k);
								n = "table" === f && !j ? l.firstChild && l.firstChild.childNodes : "<table>" === n[1] && !j ? l.childNodes : [];
								for (f = n.length - 1; 0 <= f; --f) c.nodeName(n[f], "tbody") && !n[f].childNodes.length &&
									n[f].parentNode.removeChild(n[f])
							}!c.support.leadingWhitespace && ya.test(k) && l.insertBefore(e.createTextNode(ya.exec(k)[0]), l.firstChild);
							k = l.childNodes
						}
					else k = e.createTextNode(k);
					var r;
					if (!c.support.appendChecked)
						if (k[0] && "number" == typeof(r = k.length))
							for (f = 0; f < r; f++) h(k[f]);
						else h(k);
					k.nodeType ? d.push(k) : d = c.merge(d, k)
				}
			if (g)
			{
				b = function(a)
				{
					return !a.type || gb.test(a.type)
				};
				for (i = 0; d[i]; i++) a && c.nodeName(d[i], "script") && (!d[i].type || "text/javascript" === d[i].type.toLowerCase()) ? a.push(d[i].parentNode ?
					d[i].parentNode.removeChild(d[i]) : d[i]) : (1 === d[i].nodeType && (e = c.grep(d[i].getElementsByTagName("script"), b), d.splice.apply(d, [i + 1, 0].concat(e))), g.appendChild(d[i]))
			}
			return d
		},
		cleanData: function(b)
		{
			for (var e, g, a = c.cache, d = c.expando, f = c.event.special, h = c.support.deleteExpando, i = 0, k; null != (k = b[i]); i++)
				if (!k.nodeName || !c.noData[k.nodeName.toLowerCase()])
					if (g = k[c.expando])
					{
						if ((e = a[g] && a[g][d]) && e.events)
						{
							for (var n in e.events) f[n] ? c.event.remove(k, n) : c.removeEvent(k, n, e.handle);
							e.handle && (e.handle.elem =
								null)
						}
						h ? delete k[c.expando] : k.removeAttribute && k.removeAttribute(c.expando);
						delete a[g]
					}
		}
	});
	var Ja = /alpha\([^)]*\)/i,
		Y = /opacity=([^)]*)/,
		ib = /([A-Z]|^ms)/g,
		Ea = /^-?\d+(?:px)?$/i,
		Cb = /^-?\d/,
		Db = /^([\-+])=([\-+.\de]+)/,
		jb = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Eb = ["Left", "Right"],
		Fb = ["Top", "Bottom"],
		sa, Wa, Xa;
	c.fn.css = function(b, e)
	{
		return 2 === arguments.length && e === m ? this : c.access(this, b, e, !0, function(b, a, e)
		{
			return e !== m ? c.style(b, a, e) : c.css(b, a)
		})
	};
	c.extend(
	{
		cssHooks:
		{
			opacity:
			{
				get: function(b,
					c)
				{
					if (c)
					{
						var g = sa(b, "opacity", "opacity");
						return "" === g ? "1" : g
					}
					return b.style.opacity
				}
			}
		},
		cssNumber:
		{
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps:
		{
			"float": c.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(b, e, g, a)
		{
			if (b && 3 !== b.nodeType && 8 !== b.nodeType && b.style)
			{
				var d, f = c.camelCase(e),
					h = b.style,
					i = c.cssHooks[f],
					e = c.cssProps[f] || f;
				if (g === m) return i && "get" in i && (d = i.get(b, !1, a)) !== m ? d : h[e];
				a = typeof g;
				"string" === a && (d = Db.exec(g)) && (g = +(d[1] +
					1) * +d[2] + parseFloat(c.css(b, e)), a = "number");
				if (!(null == g || "number" === a && isNaN(g)))
					if ("number" === a && !c.cssNumber[f] && (g += "px"), !i || !("set" in i) || (g = i.set(b, g)) !== m) try
					{
						h[e] = g
					}
				catch (k)
				{}
			}
		},
		css: function(b, e, g)
		{
			var a, d, e = c.camelCase(e);
			d = c.cssHooks[e];
			e = c.cssProps[e] || e;
			"cssFloat" === e && (e = "float");
			if (d && "get" in d && (a = d.get(b, !0, g)) !== m) return a;
			if (sa) return sa(b, e)
		},
		swap: function(b, c, g)
		{
			var a = {},
				d;
			for (d in c) a[d] = b.style[d], b.style[d] = c[d];
			g.call(b);
			for (d in c) b.style[d] = a[d]
		}
	});
	c.curCSS = c.css;
	c.each(["height",
		"width"
	], function(b, e)
	{
		c.cssHooks[e] = {
			get: function(b, a, d)
			{
				var f;
				if (a) return 0 !== b.offsetWidth ? k(b, e, d) : (c.swap(b, jb, function()
				{
					f = k(b, e, d)
				}), f)
			},
			set: function(b, a)
			{
				if (!Ea.test(a)) return a;
				a = parseFloat(a);
				if (0 <= a) return a + "px"
			}
		}
	});
	c.support.opacity || (c.cssHooks.opacity = {
		get: function(b, c)
		{
			return Y.test((c && b.currentStyle ? b.currentStyle.filter : b.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : c ? "1" : ""
		},
		set: function(b, e)
		{
			var g = b.style,
				a = b.currentStyle,
				d = c.isNaN(e) ? "" : "alpha(opacity=" + 100 * e + ")",
				f = a && a.filter ||
				g.filter || "";
			g.zoom = 1;
			if (1 <= e && "" === c.trim(f.replace(Ja, "")) && (g.removeAttribute("filter"), a && !a.filter)) return;
			g.filter = Ja.test(f) ? f.replace(Ja, d) : f + " " + d
		}
	});
	c(function()
	{
		c.support.reliableMarginRight || (c.cssHooks.marginRight = {
			get: function(b, e)
			{
				var g;
				return c.swap(b,
				{
					display: "inline-block"
				}, function()
				{
					e ? g = sa(b, "margin-right", "marginRight") : g = b.style.marginRight
				}), g
			}
		})
	});
	s.defaultView && s.defaultView.getComputedStyle && (Wa = function(b, e)
	{
		var g, a, e = e.replace(ib, "-$1").toLowerCase();
		if (!(a = b.ownerDocument.defaultView)) return m;
		if (a = a.getComputedStyle(b, null)) g = a.getPropertyValue(e), "" === g && !c.contains(b.ownerDocument.documentElement, b) && (g = c.style(b, e));
		return g
	});
	s.documentElement.currentStyle && (Xa = function(b, c)
	{
		var g, a = b.currentStyle && b.currentStyle[c],
			d = b.runtimeStyle && b.runtimeStyle[c],
			f = b.style;
		return !Ea.test(a) && Cb.test(a) && (g = f.left, d && (b.runtimeStyle.left = b.currentStyle.left), f.left = "fontSize" === c ? "1em" : a || 0, a = f.pixelLeft + "px", f.left = g, d && (b.runtimeStyle.left = d)), "" === a ? "auto" : a
	});
	sa = Wa || Xa;
	c.expr && c.expr.filters &&
		(c.expr.filters.hidden = function(b)
		{
			var e = b.offsetHeight;
			return 0 === b.offsetWidth && 0 === e || !c.support.reliableHiddenOffsets && "none" === (b.style.display || c.css(b, "display"))
		}, c.expr.filters.visible = function(b)
		{
			return !c.expr.filters.hidden(b)
		});
	var pa = /%20/g,
		kb = /\[\]$/,
		Qa = /\r?\n/g,
		Gb = /#.*$/,
		qb = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
		lb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
		Hb = /^(?:GET|HEAD)$/,
		Ib = /^\/\//,
		mb = /\?/,
		Jb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		Kb = /^(?:select|textarea)/i,
		Ra = /\s+/,
		Lb = /([?&])_=[^&]*/,
		nb = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
		Ia = c.fn.load,
		Sa = {},
		Ta = {},
		na, ga, Ua = ["*/"] + ["*"];
	try
	{
		na = T.href
	}
	catch (ta)
	{
		na = s.createElement("a"), na.href = "", na = na.href
	}
	ga = nb.exec(na.toLowerCase()) || [];
	c.fn.extend(
	{
		load: function(b, e, g)
		{
			if ("string" != typeof b && Ia) return Ia.apply(this, arguments);
			if (!this.length) return this;
			var a = b.indexOf(" ");
			if (0 <= a) var d = b.slice(a, b.length),
				b = b.slice(0, a);
			a = "GET";
			e && (c.isFunction(e) ? (g = e, e = m) : "object" == typeof e &&
				(e = c.param(e, c.ajaxSettings.traditional), a = "POST"));
			var f = this;
			return c.ajax(
			{
				url: b,
				type: a,
				dataType: "html",
				data: e,
				complete: function(a, b, e)
				{
					e = a.responseText;
					a.isResolved() && (a.done(function(a)
					{
						e = a
					}), f.html(d ? c("<div>").append(e.replace(Jb, "")).find(d) : e));
					g && f.each(g, [e, b, a])
				}
			}), this
		},
		serialize: function()
		{
			return c.param(this.serializeArray())
		},
		serializeArray: function()
		{
			return this.map(function()
			{
				return this.elements ? c.makeArray(this.elements) : this
			}).filter(function()
			{
				return this.name && !this.disabled &&
					(this.checked || Kb.test(this.nodeName) || lb.test(this.type))
			}).map(function(b, e)
			{
				var g = c(this).val();
				return null == g ? null : c.isArray(g) ? c.map(g, function(a)
				{
					return {
						name: e.name,
						value: a.replace(Qa, "\r\n")
					}
				}) :
				{
					name: e.name,
					value: g.replace(Qa, "\r\n")
				}
			}).get()
		}
	});
	c.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","), function(b, e)
	{
		c.fn[e] = function(b)
		{
			return this.bind(e, b)
		}
	});
	c.each(["get", "post"], function(b, e)
	{
		c[e] = function(b, a, d, f)
		{
			return c.isFunction(a) && (f = f || d, d = a, a = m), c.ajax(
			{
				type: e,
				url: b,
				data: a,
				success: d,
				dataType: f
			})
		}
	});
	c.extend(
	{
		getScript: function(b, e)
		{
			return c.get(b, m, e, "script")
		},
		getJSON: function(b, e, g)
		{
			return c.get(b, e, g, "json")
		},
		ajaxSetup: function(b, e)
		{
			return e ? x(b, c.ajaxSettings) : (e = b, b = c.ajaxSettings), x(b, e), b
		},
		ajaxSettings:
		{
			url: na,
			isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(ga[1]),
			global: !0,
			type: "GET",
			contentType: "application/x-www-form-urlencoded",
			processData: !0,
			async: !0,
			accepts:
			{
				xml: "application/xml, text/xml",
				html: "text/html",
				text: "text/plain",
				json: "application/json, text/javascript",
				"*": Ua
			},
			contents:
			{
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields:
			{
				xml: "responseXML",
				text: "responseText"
			},
			converters:
			{
				"* text": f.String,
				"text html": !0,
				"text json": c.parseJSON,
				"text xml": c.parseXML
			},
			flatOptions:
			{
				context: !0,
				url: !0
			}
		},
		ajaxPrefilter: r(Sa),
		ajaxTransport: r(Ta),
		ajax: function(b, e)
		{
			function g(b, e, g, j)
			{
				if (2 !== s)
				{
					s = 2;
					x && clearTimeout(x);
					B = m;
					r = j || "";
					w.readyState = 0 < b ? 4 : 0;
					var l, p, t, j = e;
					if (g)
					{
						var v = a,
							z = w,
							C = v.contents,
							D = v.dataTypes,
							J = v.responseFields,
							K, y,
							N, Q;
						for (y in J) y in g && (z[J[y]] = g[y]);
						for (;
							"*" === D[0];) D.shift(), K === m && (K = v.mimeType || z.getResponseHeader("content-type"));
						if (K)
							for (y in C)
								if (C[y] && C[y].test(K))
								{
									D.unshift(y);
									break
								}
						if (D[0] in g) N = D[0];
						else
						{
							for (y in g)
							{
								if (!D[0] || v.converters[y + " " + D[0]])
								{
									N = y;
									break
								}
								Q || (Q = y)
							}
							N = N || Q
						}
						g = N ? (N !== D[0] && D.unshift(N), g[N]) : void 0
					}
					else g = m;
					if (200 <= b && 300 > b || 304 === b)
					{
						if (a.ifModified)
						{
							if (K = w.getResponseHeader("Last-Modified")) c.lastModified[n] = K;
							if (K = w.getResponseHeader("Etag")) c.etag[n] = K
						}
						if (304 === b) j = "notmodified",
							l = !0;
						else try
						{
							K = a;
							K.dataFilter && (g = K.dataFilter(g, K.dataType));
							var T = K.dataTypes;
							y = {};
							var L, F, G = T.length,
								U, M = T[0],
								R, ma, W, ua, S;
							for (L = 1; L < G; L++)
							{
								if (1 === L)
									for (F in K.converters) "string" == typeof F && (y[F.toLowerCase()] = K.converters[F]);
								R = M;
								M = T[L];
								if ("*" === M) M = R;
								else if ("*" !== R && R !== M)
								{
									ma = R + " " + M;
									W = y[ma] || y["* " + M];
									if (!W)
										for (ua in S = m, y)
											if (U = ua.split(" "), U[0] === R || "*" === U[0])
												if (S = y[U[1] + " " + M])
												{
													ua = y[ua];
													!0 === ua ? W = S : !0 === S && (W = ua);
													break
												}!W && !S && c.error("No conversion from " + ma.replace(" ", " to "));
									!0 !==
										W && (g = W ? W(g) : S(ua(g)))
								}
							}
							p = g;
							j = "success";
							l = !0
						}
						catch (V)
						{
							j = "parsererror", t = V
						}
					}
					else if (t = j, !j || b) j = "error", 0 > b && (b = 0);
					w.status = b;
					w.statusText = "" + (e || j);
					l ? h.resolveWith(d, [p, j, w]) : h.rejectWith(d, [w, j, t]);
					w.statusCode(k);
					k = m;
					E && f.trigger("ajax" + (l ? "Success" : "Error"), [w, a, l ? p : t]);
					i.resolveWith(d, [w, j]);
					E && (f.trigger("ajaxComplete", [w, a]), --c.active || c.event.trigger("ajaxStop"))
				}
			}
			"object" == typeof b && (e = b, b = m);
			var e = e ||
				{},
				a = c.ajaxSetup(
				{}, e),
				d = a.context || a,
				f = d !== a && (d.nodeType || d instanceof c) ? c(d) : c.event,
				h = c.Deferred(),
				i = c._Deferred(),
				k = a.statusCode ||
				{},
				n, j = {},
				l = {},
				r, p, B, x, v, s = 0,
				E, z, w = {
					readyState: 0,
					setRequestHeader: function(a, b)
					{
						if (!s)
						{
							var c = a.toLowerCase(),
								a = l[c] = l[c] || a;
							j[a] = b
						}
						return this
					},
					getAllResponseHeaders: function()
					{
						return 2 === s ? r : null
					},
					getResponseHeader: function(a)
					{
						var b;
						if (2 === s)
						{
							if (!p)
								for (p = {}; b = qb.exec(r);) p[b[1].toLowerCase()] = b[2];
							b = p[a.toLowerCase()]
						}
						return b === m ? null : b
					},
					overrideMimeType: function(b)
					{
						return s || (a.mimeType = b), this
					},
					abort: function(a)
					{
						return a = a || "abort", B && B.abort(a),
							g(0, a), this
					}
				};
			h.promise(w);
			w.success = w.done;
			w.error = w.fail;
			w.complete = i.done;
			w.statusCode = function(a)
			{
				if (a)
				{
					var b;
					if (2 > s)
						for (b in a) k[b] = [k[b], a[b]];
					else b = a[w.status], w.then(b, b)
				}
				return this
			};
			a.url = ((b || a.url) + "").replace(Gb, "").replace(Ib, ga[1] + "//");
			a.dataTypes = c.trim(a.dataType || "*").toLowerCase().split(Ra);
			null == a.crossDomain && (v = nb.exec(a.url.toLowerCase()), a.crossDomain = !(!v || v[1] == ga[1] && v[2] == ga[2] && (v[3] || ("http:" === v[1] ? 80 : 443)) == (ga[3] || ("http:" === ga[1] ? 80 : 443))));
			a.data && a.processData &&
				"string" != typeof a.data && (a.data = c.param(a.data, a.traditional));
			t(Sa, a, e, w);
			if (2 === s) return !1;
			E = a.global;
			a.type = a.type.toUpperCase();
			a.hasContent = !Hb.test(a.type);
			E && 0 === c.active++ && c.event.trigger("ajaxStart");
			if (!a.hasContent && (a.data && (a.url += (mb.test(a.url) ? "&" : "?") + a.data, delete a.data), n = a.url, !1 === a.cache))
			{
				v = c.now();
				var C = a.url.replace(Lb, "$1_=" + v);
				a.url = C + (C === a.url ? (mb.test(a.url) ? "&" : "?") + "_=" + v : "")
			}(a.data && a.hasContent && !1 !== a.contentType || e.contentType) && w.setRequestHeader("Content-Type",
				a.contentType);
			a.ifModified && (n = n || a.url, c.lastModified[n] && w.setRequestHeader("If-Modified-Since", c.lastModified[n]), c.etag[n] && w.setRequestHeader("If-None-Match", c.etag[n]));
			w.setRequestHeader("Accept", a.dataTypes[0] && a.accepts[a.dataTypes[0]] ? a.accepts[a.dataTypes[0]] + ("*" !== a.dataTypes[0] ? ", " + Ua + "; q=0.01" : "") : a.accepts["*"]);
			for (z in a.headers) w.setRequestHeader(z, a.headers[z]);
			if (!a.beforeSend || !1 !== a.beforeSend.call(d, w, a) && 2 !== s)
			{
				for (z in
					{
						success: 1,
						error: 1,
						complete: 1
					}) w[z](a[z]);
				if (B = t(Ta,
						a, e, w))
				{
					w.readyState = 1;
					E && f.trigger("ajaxSend", [w, a]);
					a.async && 0 < a.timeout && (x = setTimeout(function()
					{
						w.abort("timeout")
					}, a.timeout));
					try
					{
						s = 1, B.send(j, g)
					}
					catch (D)
					{
						2 > s ? g(-1, D) : c.error(D)
					}
				}
				else g(-1, "No Transport");
				return w
			}
			return w.abort(), !1
		},
		param: function(b, e)
		{
			var g = [],
				a = function(a, b)
				{
					b = c.isFunction(b) ? b() : b;
					g[g.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
				};
			e === m && (e = c.ajaxSettings.traditional);
			if (c.isArray(b) || b.jquery && !c.isPlainObject(b)) c.each(b, function()
			{
				a(this.name, this.value)
			});
			else
				for (var d in b) v(d, b[d], e, a);
			return g.join("&").replace(pa, "+")
		}
	});
	c.extend(
	{
		active: 0,
		lastModified:
		{},
		etag:
		{}
	});
	var oa = c.now(),
		za = /(\=)\?(&|$)|\?\?/i;
	c.ajaxSetup(
	{
		jsonp: "callback",
		jsonpCallback: function()
		{
			return c.expando + "_" + oa++
		}
	});
	c.ajaxPrefilter("json jsonp", function(b, e, g)
	{
		e = "application/x-www-form-urlencoded" === b.contentType && "string" == typeof b.data;
		if ("jsonp" === b.dataTypes[0] || !1 !== b.jsonp && (za.test(b.url) || e && za.test(b.data)))
		{
			var a, d = b.jsonpCallback = c.isFunction(b.jsonpCallback) ? b.jsonpCallback() :
				b.jsonpCallback,
				h = f[d],
				i = b.url,
				k = b.data,
				n = "$1" + d + "$2";
			return !1 !== b.jsonp && (i = i.replace(za, n), b.url === i && (e && (k = k.replace(za, n)), b.data === k && (i += (/\?/.test(i) ? "&" : "?") + b.jsonp + "=" + d))), b.url = i, b.data = k, f[d] = function(b)
			{
				a = [b]
			}, g.always(function()
			{
				f[d] = h;
				a && c.isFunction(h) && f[d](a[0])
			}), b.converters["script json"] = function()
			{
				return a || c.error(d + " was not called"), a[0]
			}, b.dataTypes[0] = "json", "script"
		}
	});
	c.ajaxSetup(
	{
		accepts:
		{
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents:
		{
			script: /javascript|ecmascript/
		},
		converters:
		{
			"text script": function(b)
			{
				return c.globalEval(b), b
			}
		}
	});
	c.ajaxPrefilter("script", function(b)
	{
		b.cache === m && (b.cache = !1);
		b.crossDomain && (b.type = "GET", b.global = !1)
	});
	c.ajaxTransport("script", function(b)
	{
		if (b.crossDomain)
		{
			var c, g = s.head || s.getElementsByTagName("head")[0] || s.documentElement;
			return {
				send: function(a, d)
				{
					c = s.createElement("script");
					c.async = "async";
					b.scriptCharset && (c.charset = b.scriptCharset);
					c.src = b.url;
					c.onload = c.onreadystatechange = function(a,
						b)
					{
						if (b || !c.readyState || /loaded|complete/.test(c.readyState)) c.onload = c.onreadystatechange = null, g && c.parentNode && g.removeChild(c), c = m, b || d(200, "success")
					};
					g.insertBefore(c, g.firstChild)
				},
				abort: function()
				{
					c && c.onload(0, 1)
				}
			}
		}
	});
	var ob = f.ActiveXObject ? function()
		{
			for (var b in ja) ja[b](0, 1)
		} : !1,
		Mb = 0,
		ja;
	c.ajaxSettings.xhr = f.ActiveXObject ? function()
	{
		var b;
		if (!(b = !this.isLocal && l())) a:
		{
			try
			{
				b = new f.ActiveXObject("Microsoft.XMLHTTP");
				break a
			}
			catch (c)
			{}
			b = void 0
		}
		return b
	} : l;
	(function(b)
	{
		c.extend(c.support,
		{
			ajax: !!b,
			cors: !!b && "withCredentials" in b
		})
	})(c.ajaxSettings.xhr());
	c.support.ajax && c.ajaxTransport(function(b)
	{
		if (!b.crossDomain || c.support.cors)
		{
			var e;
			return {
				send: function(g, a)
				{
					var d = b.xhr(),
						h, i;
					b.username ? d.open(b.type, b.url, b.async, b.username, b.password) : d.open(b.type, b.url, b.async);
					if (b.xhrFields)
						for (i in b.xhrFields) d[i] = b.xhrFields[i];
					b.mimeType && d.overrideMimeType && d.overrideMimeType(b.mimeType);
					!b.crossDomain && !g["X-Requested-With"] && (g["X-Requested-With"] = "XMLHttpRequest");
					try
					{
						for (i in g) d.setRequestHeader(i,
							g[i])
					}
					catch (k)
					{}
					d.send(b.hasContent && b.data || null);
					e = function(g, f)
					{
						var i, k, n, j, l;
						try
						{
							if (e && (f || 4 === d.readyState))
								if (e = m, h && (d.onreadystatechange = c.noop, ob && delete ja[h]), f) 4 !== d.readyState && d.abort();
								else
								{
									i = d.status;
									n = d.getAllResponseHeaders();
									j = {};
									(l = d.responseXML) && l.documentElement && (j.xml = l);
									j.text = d.responseText;
									try
									{
										k = d.statusText
									}
									catch (r)
									{
										k = ""
									}!i && b.isLocal && !b.crossDomain ? i = j.text ? 200 : 404 : 1223 === i && (i = 204)
								}
						}
						catch (q)
						{
							f || a(-1, q)
						}
						j && a(i, k, j, n)
					};
					!b.async || 4 === d.readyState ? e() : (h = ++Mb, ob && (ja ||
						(ja = {}, c(f).unload(ob)), ja[h] = e), d.onreadystatechange = e)
				},
				abort: function()
				{
					e && e(0, 1)
				}
			}
		}
	});
	var Aa = {},
		ea, aa, Ga = /^(?:toggle|show|hide)$/,
		ba = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
		fa, pb = [
			["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
			["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
			["opacity"]
		],
		Ba;
	c.fn.extend(
	{
		show: function(b, e, g)
		{
			var a;
			if (b || 0 === b) return this.animate(p("show", 3), b, e, g);
			e = 0;
			for (g = this.length; e < g; e++) b = this[e], b.style && (a = b.style.display, !c._data(b, "olddisplay") &&
				"none" === a && (a = b.style.display = ""), "" === a && "none" === c.css(b, "display") && c._data(b, "olddisplay", w(b.nodeName)));
			for (e = 0; e < g; e++)
				if (b = this[e], b.style && (a = b.style.display, "" === a || "none" === a)) b.style.display = c._data(b, "olddisplay") || "";
			return this
		},
		hide: function(b, e, g)
		{
			if (b || 0 === b) return this.animate(p("hide", 3), b, e, g);
			b = 0;
			for (e = this.length; b < e; b++) this[b].style && (g = c.css(this[b], "display"), "none" !== g && !c._data(this[b], "olddisplay") && c._data(this[b], "olddisplay", g));
			for (b = 0; b < e; b++) this[b].style && (this[b].style.display =
				"none");
			return this
		},
		_toggle: c.fn.toggle,
		toggle: function(b, e, g)
		{
			var a = "boolean" == typeof b;
			return c.isFunction(b) && c.isFunction(e) ? this._toggle.apply(this, arguments) : null == b || a ? this.each(function()
			{
				var e = a ? b : c(this).is(":hidden");
				c(this)[e ? "show" : "hide"]()
			}) : this.animate(p("toggle", 3), b, e, g), this
		},
		fadeTo: function(b, c, g, a)
		{
			return this.filter(":hidden").css("opacity", 0).show().end().animate(
			{
				opacity: c
			}, b, g, a)
		},
		animate: function(b, e, g, a)
		{
			var d = c.speed(e, g, a);
			return c.isEmptyObject(b) ? this.each(d.complete, [!1]) : (b = c.extend(
			{}, b), this[!1 === d.queue ? "each" : "queue"](function()
			{
				!1 === d.queue && c._mark(this);
				var a = c.extend(
					{}, d),
					e = 1 === this.nodeType,
					g = e && c(this).is(":hidden"),
					f, h, i, k, n, j, l, r;
				a.animatedProperties = {};
				for (i in b)
				{
					f = c.camelCase(i);
					i !== f && (b[f] = b[i], delete b[i]);
					h = b[f];
					c.isArray(h) ? (a.animatedProperties[f] = h[1], h = b[f] = h[0]) : a.animatedProperties[f] = a.specialEasing && a.specialEasing[f] || a.easing || "swing";
					if ("hide" === h && g || "show" === h && !g) return a.complete.call(this);
					e && ("height" === f || "width" === f) &&
						(a.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === c.css(this, "display") && "none" === c.css(this, "float") && (c.support.inlineBlockNeedsLayout ? (k = w(this.nodeName), "inline" === k ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1)) : this.style.display = "inline-block"))
				}
				null != a.overflow && (this.style.overflow = "hidden");
				for (i in b) e = new c.fx(this, a, i), h = b[i], Ga.test(h) ? e["toggle" === h ? g ? "show" : "hide" : h]() : (n = ba.exec(h), j = e.cur(), n ? (l = parseFloat(n[2]),
					r = n[3] || (c.cssNumber[i] ? "" : "px"), "px" !== r && (c.style(this, i, (l || 1) + r), j *= (l || 1) / e.cur(), c.style(this, i, j + r)), n[1] && (l = ("-=" === n[1] ? -1 : 1) * l + j), e.custom(j, l, r)) : e.custom(j, h, ""));
				return !0
			}))
		},
		stop: function(b, e)
		{
			return b && this.queue([]), this.each(function()
			{
				var b = c.timers,
					a = b.length;
				for (e || c._unmark(!0, this); a--;) b[a].elem === this && (e && b[a](!0), b.splice(a, 1))
			}), e || this.dequeue(), this
		}
	});
	c.each(
	{
		slideDown: p("show", 1),
		slideUp: p("hide", 1),
		slideToggle: p("toggle", 1),
		fadeIn:
		{
			opacity: "show"
		},
		fadeOut:
		{
			opacity: "hide"
		},
		fadeToggle:
		{
			opacity: "toggle"
		}
	}, function(b, e)
	{
		c.fn[b] = function(b, a, c)
		{
			return this.animate(e, b, a, c)
		}
	});
	c.extend(
	{
		speed: function(b, e, g)
		{
			var a = b && "object" == typeof b ? c.extend(
			{}, b) :
			{
				complete: g || !g && e || c.isFunction(b) && b,
				duration: b,
				easing: g && e || e && !c.isFunction(e) && e
			};
			return a.duration = c.fx.off ? 0 : "number" == typeof a.duration ? a.duration : a.duration in c.fx.speeds ? c.fx.speeds[a.duration] : c.fx.speeds._default, a.old = a.complete, a.complete = function(b)
			{
				c.isFunction(a.old) && a.old.call(this);
				!1 !== a.queue ? c.dequeue(this) :
					!1 !== b && c._unmark(this)
			}, a
		},
		easing:
		{
			linear: function(b, c, g, a)
			{
				return g + a * b
			},
			swing: function(b, c, g, a)
			{
				return (-Math.cos(b * Math.PI) / 2 + 0.5) * a + g
			}
		},
		timers: [],
		fx: function(b, c, g)
		{
			this.options = c;
			this.elem = b;
			this.prop = g;
			c.orig = c.orig ||
			{}
		}
	});
	c.fx.prototype = {
		update: function()
		{
			this.options.step && this.options.step.call(this.elem, this.now, this);
			(c.fx.step[this.prop] || c.fx.step._default)(this)
		},
		cur: function()
		{
			if (null == this.elem[this.prop] || this.elem.style && null != this.elem.style[this.prop])
			{
				var b, e = c.css(this.elem,
					this.prop);
				return isNaN(b = parseFloat(e)) ? !e || "auto" === e ? 0 : e : b
			}
			return this.elem[this.prop]
		},
		custom: function(b, e, g)
		{
			function a(a)
			{
				return d.step(a)
			}
			var d = this,
				f = c.fx;
			this.startTime = Ba || (setTimeout(j, 0), Ba = c.now());
			this.start = b;
			this.end = e;
			this.unit = g || this.unit || (c.cssNumber[this.prop] ? "" : "px");
			this.now = this.start;
			this.pos = this.state = 0;
			a.elem = this.elem;
			a() && c.timers.push(a) && !fa && (fa = setInterval(f.tick, f.interval))
		},
		show: function()
		{
			this.options.orig[this.prop] = c.style(this.elem, this.prop);
			this.options.show = !0;
			this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur());
			c(this.elem).show()
		},
		hide: function()
		{
			this.options.orig[this.prop] = c.style(this.elem, this.prop);
			this.options.hide = !0;
			this.custom(this.cur(), 0)
		},
		step: function(b)
		{
			var e = Ba || (setTimeout(j, 0), Ba = c.now()),
				g = !0,
				a = this.elem,
				d = this.options,
				f, h;
			if (b || e >= d.duration + this.startTime)
			{
				this.now = this.end;
				this.pos = this.state = 1;
				this.update();
				d.animatedProperties[this.prop] = !0;
				for (f in d.animatedProperties) !0 !== d.animatedProperties[f] && (g = !1);
				if (g)
				{
					null !=
						d.overflow && !c.support.shrinkWrapBlocks && c.each(["", "X", "Y"], function(b, c)
						{
							a.style["overflow" + c] = d.overflow[b]
						});
					d.hide && c(a).hide();
					if (d.hide || d.show)
						for (var i in d.animatedProperties) c.style(a, i, d.orig[i]);
					d.complete.call(a)
				}
				return !1
			}
			return Infinity == d.duration ? this.now = e : (h = e - this.startTime, this.state = h / d.duration, this.pos = c.easing[d.animatedProperties[this.prop]](this.state, h, 0, 1, d.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
		}
	};
	c.extend(c.fx,
	{
		tick: function()
		{
			for (var b =
					c.timers, e = 0; e < b.length; ++e) b[e]() || b.splice(e--, 1);
			b.length || c.fx.stop()
		},
		interval: 13,
		stop: function()
		{
			clearInterval(fa);
			fa = null
		},
		speeds:
		{
			slow: 600,
			fast: 200,
			_default: 400
		},
		step:
		{
			opacity: function(b)
			{
				c.style(b.elem, "opacity", b.now)
			},
			_default: function(b)
			{
				b.elem.style && null != b.elem.style[b.prop] ? b.elem.style[b.prop] = ("width" === b.prop || "height" === b.prop ? Math.max(0, b.now) : b.now) + b.unit : b.elem[b.prop] = b.now
			}
		}
	});
	c.expr && c.expr.filters && (c.expr.filters.animated = function(b)
	{
		return c.grep(c.timers, function(c)
		{
			return b ===
				c.elem
		}).length
	});
	var Fa = /^t(?:able|d|h)$/i,
		Ha = /^(?:body|html)$/i;
	"getBoundingClientRect" in s.documentElement ? c.fn.offset = function(b)
	{
		var e = this[0],
			g;
		if (b) return this.each(function(a)
		{
			c.offset.setOffset(this, b, a)
		});
		if (!e || !e.ownerDocument) return null;
		if (e === e.ownerDocument.body) return c.offset.bodyOffset(e);
		try
		{
			g = e.getBoundingClientRect()
		}
		catch (a)
		{}
		var d = e.ownerDocument,
			f = d.documentElement;
		if (!g || !c.contains(f, e)) return g ?
		{
			top: g.top,
			left: g.left
		} :
		{
			top: 0,
			left: 0
		};
		e = d.body;
		d = y(d);
		return {
			top: g.top + (d.pageYOffset ||
				c.support.boxModel && f.scrollTop || e.scrollTop) - (f.clientTop || e.clientTop || 0),
			left: g.left + (d.pageXOffset || c.support.boxModel && f.scrollLeft || e.scrollLeft) - (f.clientLeft || e.clientLeft || 0)
		}
	} : c.fn.offset = function(b)
	{
		var e = this[0];
		if (b) return this.each(function(a)
		{
			c.offset.setOffset(this, b, a)
		});
		if (!e || !e.ownerDocument) return null;
		if (e === e.ownerDocument.body) return c.offset.bodyOffset(e);
		c.offset.initialize();
		var g, a = e.offsetParent,
			d = e.ownerDocument,
			f = d.documentElement,
			h = d.body;
		g = (d = d.defaultView) ? d.getComputedStyle(e,
			null) : e.currentStyle;
		for (var i = e.offsetTop, k = e.offsetLeft;
			(e = e.parentNode) && e !== h && e !== f && !(c.offset.supportsFixedPosition && "fixed" === g.position);) g = d ? d.getComputedStyle(e, null) : e.currentStyle, i -= e.scrollTop, k -= e.scrollLeft, e === a && (i += e.offsetTop, k += e.offsetLeft, c.offset.doesNotAddBorder && (!c.offset.doesAddBorderForTableAndCells || !Fa.test(e.nodeName)) && (i += parseFloat(g.borderTopWidth) || 0, k += parseFloat(g.borderLeftWidth) || 0), a = e.offsetParent), c.offset.subtractsBorderForOverflowNotVisible && "visible" !==
			g.overflow && (i += parseFloat(g.borderTopWidth) || 0, k += parseFloat(g.borderLeftWidth) || 0);
		if ("relative" === g.position || "static" === g.position) i += h.offsetTop, k += h.offsetLeft;
		return c.offset.supportsFixedPosition && "fixed" === g.position && (i += Math.max(f.scrollTop, h.scrollTop), k += Math.max(f.scrollLeft, h.scrollLeft)),
		{
			top: i,
			left: k
		}
	};
	c.offset = {
		initialize: function()
		{
			var b = s.body,
				e = s.createElement("div"),
				g, a, d, f = parseFloat(c.css(b, "marginTop")) || 0;
			c.extend(e.style,
			{
				position: "absolute",
				top: 0,
				left: 0,
				margin: 0,
				border: 0,
				width: "1px",
				height: "1px",
				visibility: "hidden"
			});
			e.innerHTML = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
			b.insertBefore(e, b.firstChild);
			g = e.firstChild;
			a = g.firstChild;
			d = g.nextSibling.firstChild.firstChild;
			this.doesNotAddBorder = 5 !== a.offsetTop;
			this.doesAddBorderForTableAndCells =
				5 === d.offsetTop;
			a.style.position = "fixed";
			a.style.top = "20px";
			this.supportsFixedPosition = 20 === a.offsetTop || 15 === a.offsetTop;
			a.style.position = a.style.top = "";
			g.style.overflow = "hidden";
			g.style.position = "relative";
			this.subtractsBorderForOverflowNotVisible = -5 === a.offsetTop;
			this.doesNotIncludeMarginInBodyOffset = b.offsetTop !== f;
			b.removeChild(e);
			c.offset.initialize = c.noop
		},
		bodyOffset: function(b)
		{
			var e = b.offsetTop,
				d = b.offsetLeft;
			return c.offset.initialize(), c.offset.doesNotIncludeMarginInBodyOffset && (e += parseFloat(c.css(b,
				"marginTop")) || 0, d += parseFloat(c.css(b, "marginLeft")) || 0),
			{
				top: e,
				left: d
			}
		},
		setOffset: function(b, e, d)
		{
			var a = c.css(b, "position");
			"static" === a && (b.style.position = "relative");
			var f = c(b),
				h = f.offset(),
				i = c.css(b, "top"),
				k = c.css(b, "left"),
				n = {},
				j = {},
				l, r;
			("absolute" === a || "fixed" === a) && -1 < c.inArray("auto", [i, k]) ? (j = f.position(), l = j.top, r = j.left) : (l = parseFloat(i) || 0, r = parseFloat(k) || 0);
			c.isFunction(e) && (e = e.call(b, d, h));
			null != e.top && (n.top = e.top - h.top + l);
			null != e.left && (n.left = e.left - h.left + r);
			"using" in e ? e.using.call(b,
				n) : f.css(n)
		}
	};
	c.fn.extend(
	{
		position: function()
		{
			if (!this[0]) return null;
			var b = this[0],
				e = this.offsetParent(),
				d = this.offset(),
				a = Ha.test(e[0].nodeName) ?
				{
					top: 0,
					left: 0
				} : e.offset();
			return d.top -= parseFloat(c.css(b, "marginTop")) || 0, d.left -= parseFloat(c.css(b, "marginLeft")) || 0, a.top += parseFloat(c.css(e[0], "borderTopWidth")) || 0, a.left += parseFloat(c.css(e[0], "borderLeftWidth")) || 0,
			{
				top: d.top - a.top,
				left: d.left - a.left
			}
		},
		offsetParent: function()
		{
			return this.map(function()
			{
				for (var b = this.offsetParent || s.body; b &&
					!Ha.test(b.nodeName) && "static" === c.css(b, "position");) b = b.offsetParent;
				return b
			})
		}
	});
	c.each(["Left", "Top"], function(b, e)
	{
		var d = "scroll" + e;
		c.fn[d] = function(a)
		{
			var e, f;
			return a === m ? (e = this[0], e ? (f = y(e), f ? "pageXOffset" in f ? f[b ? "pageYOffset" : "pageXOffset"] : c.support.boxModel && f.document.documentElement[d] || f.document.body[d] : e[d]) : null) : this.each(function()
			{
				(f = y(this)) ? f.scrollTo(b ? c(f).scrollLeft() : a, b ? a : c(f).scrollTop()): this[d] = a
			})
		}
	});
	c.each(["Height", "Width"], function(b, e)
	{
		var d = e.toLowerCase();
		c.fn["inner" +
			e] = function()
		{
			var a = this[0];
			return a && a.style ? parseFloat(c.css(a, d, "padding")) : null
		};
		c.fn["outer" + e] = function(a)
		{
			var b = this[0];
			return b && b.style ? parseFloat(c.css(b, d, a ? "margin" : "border")) : null
		};
		c.fn[d] = function(a)
		{
			var b = this[0];
			if (!b) return null == a ? null : this;
			if (c.isFunction(a)) return this.each(function(b)
			{
				var e = c(this);
				e[d](a.call(this, b, e[d]()))
			});
			if (c.isWindow(b))
			{
				var f = b.document.documentElement["client" + e],
					h = b.document.body;
				return "CSS1Compat" === b.document.compatMode && f || h && h["client" + e] || f
			}
			return 9 ===
				b.nodeType ? Math.max(b.documentElement["client" + e], b.body["scroll" + e], b.documentElement["scroll" + e], b.body["offset" + e], b.documentElement["offset" + e]) : a === m ? (b = c.css(b, d), f = parseFloat(b), c.isNaN(f) ? b : f) : this.css(d, "string" == typeof a ? a : a + "px")
		}
	});
	f.jQuery = f.$ = c
})(window);
(function(f, m)
{
	function y(d, f)
	{
		d = "" + d;
		for (f = f || 2; d.length < f;) d = "0" + d;
		return d
	}

	function w(f, n, j)
	{
		var l = f.getDate(),
			r = f.getDay(),
			p = f.getMonth(),
			f = f.getFullYear(),
			m = {
				d: l,
				dd: y(l),
				ddd: k[j].shortDays[r],
				dddd: k[j].days[r],
				m: p + 1,
				mm: y(p + 1),
				mmm: k[j].shortMonths[p],
				mmmm: k[j].months[p],
				yy: ("" + f).slice(2),
				yyyy: f
			},
			n = n.replace(d, function(d)
			{
				return d in m ? m[d] : d.slice(1, d.length - 1)
			});
		return h.html(n).html()
	}

	function p(d)
	{
		return parseInt(d, 10)
	}

	function j(d, f)
	{
		return d.getFullYear() === f.getFullYear() && d.getMonth() ==
			f.getMonth() && d.getDate() == f.getDate()
	}

	function l(d)
	{
		if (d !== m)
		{
			if (d.constructor == Date) return d;
			if ("string" == typeof d)
			{
				var f = d.split("-");
				if (3 == f.length) return new Date(p(f[0]), p(f[1]) - 1, p(f[2]));
				if (!/^-?\d+$/.test(d)) return;
				d = p(d)
			}
			f = new Date;
			return f.setDate(f.getDate() + d), f
		}
	}

	function v(d, h)
	{
		function t(h, k, n)
		{
			L = h;
			$ = h.getFullYear();
			T = h.getMonth();
			c = h.getDate();
			n = n || f.Event("api");
			n.type = "beforeChange";
			Z.trigger(n, [h]);
			n.isDefaultPrevented() || (d.val(w(h, k.format, k.lang)), n.type = "change", Z.trigger(n),
				d.data("date", h), z.hide(n))
		}

		function v(c)
		{
			c.type = "onShow";
			Z.trigger(c);
			f(document).bind("keydown.d", function(c)
			{
				if (c.ctrlKey) return !0;
				var h = c.keyCode;
				if (8 == h) return d.val(""), z.hide(c);
				if (27 == h || 9 == h) return z.hide(c);
				if (0 <= f(r).index(h))
				{
					if (!da) return z.show(c), c.preventDefault();
					var k = f("#" + C.weeks + " a"),
						n = f("." + C.focus),
						j = k.index(n);
					n.removeClass(C.focus);
					if (74 == h || 40 == h) j += 7;
					else if (75 == h || 38 == h) j -= 7;
					else if (76 == h || 39 == h) j += 1;
					else if (72 == h || 37 == h) j -= 1;
					return 41 < j ? (z.addMonth(), n = f("#" + C.weeks +
						" a:eq(" + (j - 42) + ")")) : 0 > j ? (z.addMonth(-1), n = f("#" + C.weeks + " a:eq(" + (j + 42) + ")")) : n = k.eq(j), n.addClass(C.focus), c.preventDefault()
				}
				return 34 == h ? z.addMonth() : 33 == h ? z.addMonth(-1) : 36 == h ? z.today() : (13 == h && (f(c.target).is("select") || f("." + C.focus).click()), 0 <= f([16, 17, 18, 9]).index(h))
			});
			f(document).bind("click.d", function(c)
			{
				var h = c.target;
				!f(h).parents("#" + C.root).length && h != d[0] && (!ca || h != ca[0]) && z.hide(c)
			})
		}
		var z = this,
			E = new Date,
			D = E.getFullYear(),
			C = h.css,
			y = k[h.lang],
			F = f("#" + C.root),
			R = F.find("#" + C.title),
			ca, V, s, $, T, c, L = d.attr("data-value") || h.value || d.val(),
			M = d.attr("min") || h.min,
			S = d.attr("max") || h.max,
			da, la;
		0 === M && (M = "0");
		L = l(L) || E;
		M = l(M || new Date(D + h.yearRange[0], 1, 1));
		S = l(S || new Date(D + h.yearRange[1] + 1, 1, -1));
		if (!y) throw "Dateinput: invalid language: " + h.lang;
		"date" == d.attr("type") && (la = d.clone(), D = la.wrap("<div/>").parent().html(), D = f(D.replace(/type/i, "type=text data-orig-type")), h.value && D.val(h.value), d.replaceWith(D), d = D);
		d.addClass(C.input);
		var Z = d.add(z);
		if (!F.length)
		{
			F = f("<div><div><a/><div/><a/></div><div><div/><div/></div></div>").hide().css(
			{
				position: "absolute"
			}).attr("id",
				C.root);
			F.children().eq(0).attr("id", C.head).end().eq(1).attr("id", C.body).children().eq(0).attr("id", C.days).end().eq(1).attr("id", C.weeks).end().end().end().find("a").eq(0).attr("id", C.prev).end().eq(1).attr("id", C.next);
			R = F.find("#" + C.head).find("div").attr("id", C.title);
			if (h.selectors)
			{
				var ha = f("<select/>").attr("id", C.month),
					ia = f("<select/>").attr("id", C.year);
				R.html(ha.add(ia))
			}
			for (var D = F.find("#" + C.days), va = 0; 7 > va; va++) D.append(f("<span/>").text(y.shortDays[(va + h.firstDay) % 7]));
			f("body").append(F)
		}
		h.trigger &&
			(ca = f("<a/>").attr("href", "#").addClass(C.trigger).click(function(c)
			{
				return h.toggle ? z.toggle() : z.show(), c.preventDefault()
			}).insertAfter(d));
		var ra = F.find("#" + C.weeks),
			ia = F.find("#" + C.year),
			ha = F.find("#" + C.month);
		f.extend(z,
		{
			show: function(c)
			{
				if (!d.attr("readonly") && !d.attr("disabled") && !da)
				{
					c = c || f.Event();
					c.type = "onBeforeShow";
					Z.trigger(c);
					if (!c.isDefaultPrevented())
					{
						f.each(x, function()
						{
							this.hide()
						});
						da = true;
						ha.unbind("change").change(function()
						{
							z.setValue(ia.val(), f(this).val())
						});
						ia.unbind("change").change(function()
						{
							z.setValue(f(this).val(),
								ha.val())
						});
						V = F.find("#" + C.prev).unbind("click").click(function()
						{
							return V.hasClass(C.disabled) || z.addMonth(-1), false
						});
						s = F.find("#" + C.next).unbind("click").click(function()
						{
							return s.hasClass(C.disabled) || z.addMonth(), false
						});
						z.setValue(L);
						var k = d.offset();
						return /iPad/i.test(navigator.userAgent) && (k.top = k.top - f(window).scrollTop()), F.css(
						{
							top: k.top + d.outerHeight(
							{
								margins: true
							}) + h.offset[0],
							left: k.left + h.offset[1]
						}), h.speed ? F.show(h.speed, function()
						{
							v(c)
						}) : (F.show(), v(c)), z
					}
				}
			},
			setValue: function(d,
				i, k)
			{
				var r = p(i) >= -1 ? new Date(p(d), p(i), p(k == m || isNaN(k) ? 1 : k)) : d || L;
				r < M ? r = M : r > S && (r = S);
				typeof d == "string" && (r = l(d));
				d = r.getFullYear();
				i = r.getMonth();
				k = r.getDate();
				i == -1 ? (i = 11, d--) : i == 12 && (i = 0, d++);
				if (!da) return t(r, h), z;
				T = i;
				$ = d;
				c = k;
				var k = (new Date(d, i, 1 - h.firstDay)).getDay(),
					v = (new Date(d, i + 1, 0)).getDate(),
					x = (new Date(d, i - 1 + 1, 0)).getDate(),
					w;
				if (h.selectors)
				{
					ha.empty();
					f.each(y.months, function(c, h)
					{
						M < new Date(d, c + 1, 1) && S > new Date(d, c, 0) && ha.append(f("<option/>").html(h).attr("value", c))
					});
					ia.empty();
					for (var D = E.getFullYear(), J = D + h.yearRange[0]; J < D + h.yearRange[1]; J++) M < new Date(J + 1, 0, 1) && S > new Date(J, 0, 0) && ia.append(f("<option/>").text(J));
					ha.val(i);
					ia.val(d)
				}
				else R.html(y.months[i] + " " + d);
				ra.empty();
				V.add(s).removeClass(C.disabled);
				for (var D = k ? 0 : -7, F; D < (k ? 42 : 35); D++)
				{
					J = f("<a/>");
					D % 7 === 0 && (w = f("<div/>").addClass(C.week), ra.append(w));
					D < k ? (J.addClass(C.off), F = x - k + D + 1, r = new Date(d, i - 1, F)) : D >= k + v ? (J.addClass(C.off), F = D - v - k + 1, r = new Date(d, i + 1, F)) : (F = D - k + 1, r = new Date(d, i, F), j(L, r) ? J.attr("id", C.current).addClass(C.focus) :
						j(E, r) && J.attr("id", C.today));
					M && r < M && J.add(V).addClass(C.disabled);
					S && r > S && J.add(s).addClass(C.disabled);
					J.attr("href", "#" + F).text(F).data("date", r);
					w.append(J)
				}
				return ra.find("a").click(function(c)
				{
					var d = f(this);
					return d.hasClass(C.disabled) || (f("#" + C.current).removeAttr("id"), d.attr("id", C.current), t(d.data("date"), h, c)), false
				}), C.sunday && ra.find(C.week).each(function()
				{
					var c = h.firstDay ? 7 - h.firstDay : 0;
					f(this).children().slice(c, c + 1).addClass(C.sunday)
				}), z
			},
			setMin: function(c, d)
			{
				return M = l(c), d &&
					L < M && z.setValue(M), z
			},
			setMax: function(c, d)
			{
				return S = l(c), d && L > S && z.setValue(S), z
			},
			today: function()
			{
				return z.setValue(E)
			},
			addDay: function(d)
			{
				return this.setValue($, T, c + (d || 1))
			},
			addMonth: function(d)
			{
				var d = T + (d || 1),
					f = (new Date($, d + 1, 0)).getDate();
				return this.setValue($, d, c <= f ? c : f)
			},
			addYear: function(d)
			{
				return this.setValue($ + (d || 1), T, c)
			},
			destroy: function()
			{
				d.add(document).unbind("click.d").unbind("keydown.d");
				F.add(ca).remove();
				d.removeData("dateinput").removeClass(C.input);
				la && d.replaceWith(la)
			},
			hide: function(c)
			{
				if (da)
				{
					c =
						f.Event();
					c.type = "onHide";
					Z.trigger(c);
					f(document).unbind("click.d").unbind("keydown.d");
					if (c.isDefaultPrevented()) return;
					F.hide();
					da = false
				}
				return z
			},
			toggle: function()
			{
				return z.isOpen() ? z.hide() : z.show()
			},
			getConf: function()
			{
				return h
			},
			getInput: function()
			{
				return d
			},
			getCalendar: function()
			{
				return F
			},
			getValue: function(c)
			{
				return c ? w(L, c, h.lang) : L
			},
			isOpen: function()
			{
				return da
			}
		});
		f.each(["onBeforeShow", "onShow", "change", "onHide"], function(c, d)
		{
			f.isFunction(h[d]) && f(z).bind(d, h[d]);
			z[d] = function(c)
			{
				return c &&
					f(z).bind(d, c), z
			}
		});
		h.editable || d.bind("focus.d click.d", z.show).keydown(function(c)
		{
			var d = c.keyCode;
			return !da && f(r).index(d) >= 0 ? (z.show(c), c.preventDefault()) : c.shiftKey || c.ctrlKey || c.altKey || d == 9 ? true : c.preventDefault()
		});
		l(d.val()) && t(L, h)
	}
	f.tools = f.tools ||
	{
		version: "1.2.6"
	};
	var x = [],
		t, r = [75, 76, 38, 39, 74, 72, 40, 37],
		k = {};
	t = f.tools.dateinput = {
		conf:
		{
			format: "mm/dd/yy",
			selectors: !1,
			yearRange: [-5, 5],
			lang: "en",
			offset: [0, 0],
			speed: 0,
			firstDay: 0,
			min: m,
			max: m,
			trigger: 0,
			toggle: 0,
			editable: 0,
			css:
			{
				prefix: "cal",
				input: "date",
				root: 0,
				head: 0,
				title: 0,
				prev: 0,
				next: 0,
				month: 0,
				year: 0,
				days: 0,
				body: 0,
				weeks: 0,
				today: 0,
				current: 0,
				week: 0,
				off: 0,
				sunday: 0,
				focus: 0,
				disabled: 0,
				trigger: 0
			}
		},
		localize: function(d, h)
		{
			f.each(h, function(d, f)
			{
				h[d] = f.split(",")
			});
			k[d] = h
		}
	};
	t.localize("en",
	{
		months: "January,February,March,April,May,June,July,August,September,October,November,December",
		shortMonths: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec",
		days: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",
		shortDays: "Sun,Mon,Tue,Wed,Thu,Fri,Sat"
	});
	var d =
		/d{1,4}|m{1,4}|yy(?:yy)?|"[^"]*"|'[^']*'/g,
		h = f("<a/>");
	f.expr[":"].date = function(d)
	{
		var h = d.getAttribute("type");
		return h && "date" == h || !!f(d).data("dateinput")
	};
	f.fn.dateinput = function(d)
	{
		if (this.data("dateinput")) return this;
		d = f.extend(!0,
		{}, t.conf, d);
		f.each(d.css, function(f, h)
		{
			!h && "prefix" != f && (d.css[f] = (d.css.prefix || "") + (h || f))
		});
		var h;
		return this.each(function()
		{
			var k = new v(f(this), d);
			x.push(k);
			k = k.getInput().data("dateinput", k);
			h = h ? h.add(k) : k
		}), h ? h : this
	}
})(jQuery);
(function(f)
{
	function m(p, j)
	{
		var l = this,
			m = p.add(l),
			x = f(window),
			t, r, k, d = f.tools.expose && (j.mask || j.expose),
			h = Math.random().toString().slice(10);
		d && ("string" == typeof d && (d = {
			color: d
		}), d.closeOnClick = d.closeOnEsc = !1);
		var i = j.target || p.attr("rel");
		r = i ? f(i) : p;
		if (!r.length) throw "Could not find Overlay: " + i;
		p && -1 == p.index(r) && p.click(function(d)
		{
			return l.load(d), d.preventDefault()
		});
		f.extend(l,
		{
			load: function(i)
			{
				if (l.isOpened()) return l;
				var p = w[j.effect];
				if (!p) throw 'Overlay: cannot find effect : "' + j.effect +
					'"';
				j.oneInstance && f.each(y, function()
				{
					this.close(i)
				});
				i = i || f.Event();
				i.type = "onBeforeLoad";
				m.trigger(i);
				if (i.isDefaultPrevented()) return l;
				k = !0;
				d && f(r).expose(d);
				var t = j.top,
					z = j.left,
					E = r.outerWidth(
					{
						margin: !0
					}),
					D = r.outerHeight(
					{
						margin: !0
					});
				return "string" == typeof t && (t = "center" == t ? Math.max((x.height() - D) / 2, 0) : parseInt(t, 10) / 100 * x.height()), "center" == z && (z = Math.max((x.width() - E) / 2, 0)), p[0].call(l,
				{
					top: t,
					left: z
				}, function()
				{
					k && (i.type = "onLoad", m.trigger(i))
				}), d && j.closeOnClick && f.mask.getMask().one("click",
					l.close), j.closeOnClick && f(document).bind("click." + h, function(d)
				{
					f(d.target).parents(r).length || l.close(d)
				}), j.closeOnEsc && f(document).bind("keydown." + h, function(d)
				{
					27 == d.keyCode && l.close(d)
				}), l
			},
			close: function(i)
			{
				if (!l.isOpened()) return l;
				i = i || f.Event();
				i.type = "onBeforeClose";
				m.trigger(i);
				return i.isDefaultPrevented() ? void 0 : (k = !1, w[j.effect][1].call(l, function()
				{
					i.type = "onClose";
					m.trigger(i)
				}), f(document).unbind("click." + h).unbind("keydown." + h), d && f.mask.close(), l)
			},
			getOverlay: function()
			{
				return r
			},
			getTrigger: function()
			{
				return p
			},
			getClosers: function()
			{
				return t
			},
			isOpened: function()
			{
				return k
			},
			getConf: function()
			{
				return j
			}
		});
		f.each(["onBeforeLoad", "onStart", "onLoad", "onBeforeClose", "onClose"], function(d, h)
		{
			f.isFunction(j[h]) && f(l).bind(h, j[h]);
			l[h] = function(d)
			{
				return d && f(l).bind(h, d), l
			}
		});
		t = r.find(j.close || ".close");
		!t.length && !j.close && (t = f('<a class="close"></a>'), r.prepend(t));
		t.click(function(d)
		{
			l.close(d)
		});
		j.load && l.load()
	}
	f.tools = f.tools ||
	{
		version: "1.2.6"
	};
	f.tools.overlay = {
		addEffect: function(f,
			j, l)
		{
			w[f] = [j, l]
		},
		conf:
		{
			close: null,
			closeOnClick: !0,
			closeOnEsc: !0,
			closeSpeed: "fast",
			effect: "default",
			fixed: !f.browser.msie || 6 < f.browser.version,
			left: "center",
			load: !1,
			mask: null,
			oneInstance: !0,
			speed: "normal",
			target: null,
			top: "10%"
		}
	};
	var y = [],
		w = {};
	f.tools.overlay.addEffect("default", function(p, j)
	{
		var l = this.getConf(),
			m = f(window);
		l.fixed || (p.top += m.scrollTop(), p.left += m.scrollLeft());
		p.position = l.fixed ? "fixed" : "absolute";
		this.getOverlay().css(p).fadeIn(l.speed, j)
	}, function(f)
	{
		this.getOverlay().fadeOut(this.getConf().closeSpeed,
			f)
	});
	f.fn.overlay = function(p)
	{
		var j = this.data("overlay");
		return j ? j : (f.isFunction(p) && (p = {
			onBeforeLoad: p
		}), p = f.extend(!0,
		{}, f.tools.overlay.conf, p), this.each(function()
		{
			j = new m(f(this), p);
			y.push(j);
			f(this).data("overlay", j)
		}), p.api ? j : this)
	}
})(jQuery);
(function(f)
{
	function m(f)
	{
		var j = f.offset();
		return {
			top: j.top + f.height() / 2,
			left: j.left + f.width() / 2
		}
	}
	var y = f.tools.overlay,
		w = f(window);
	f.extend(y.conf,
	{
		start:
		{
			top: null,
			left: null
		},
		fadeInSpeed: "fast",
		zIndex: 9999
	});
	y.addEffect("apple", function(p, j)
	{
		var l = this.getOverlay(),
			v = this.getConf(),
			x = this.getTrigger(),
			t = this,
			r = l.outerWidth(
			{
				margin: !0
			}),
			k = l.data("img"),
			d = v.fixed ? "fixed" : "absolute";
		if (!k)
		{
			k = l.css("backgroundImage");
			if (!k) throw "background-image CSS property not set for overlay";
			k = k.slice(k.indexOf("(") +
				1, k.indexOf(")")).replace(/\"/g, "");
			l.css("backgroundImage", "none");
			k = f('<img src="' + k + '"/>');
			k.css(
			{
				border: 0,
				display: "none"
			}).width(r);
			f("body").append(k);
			l.data("img", k)
		}
		var h = v.start.top || Math.round(w.height() / 2),
			i = v.start.left || Math.round(w.width() / 2);
		x && (x = m(x), h = x.top, i = x.left);
		v.fixed ? (h -= w.scrollTop(), i -= w.scrollLeft()) : (p.top += w.scrollTop(), p.left += w.scrollLeft());
		k.css(
		{
			position: "absolute",
			top: h,
			left: i,
			width: 0,
			zIndex: v.zIndex
		}).show();
		p.position = d;
		l.css(p);
		k.animate(
		{
			top: l.css("top"),
			left: l.css("left"),
			width: r
		}, v.speed, function()
		{
			l.css("zIndex", v.zIndex + 1).fadeIn(v.fadeInSpeed, function()
			{
				t.isOpened() && !f(this).index(l) ? j.call() : l.hide()
			})
		}).css("position", d)
	}, function(p)
	{
		var j = this.getOverlay().hide(),
			l = this.getConf(),
			v = this.getTrigger(),
			j = j.data("img"),
			x = {
				top: l.start.top,
				left: l.start.left,
				width: 0
			};
		v && f.extend(x, m(v));
		l.fixed && j.css(
		{
			position: "absolute"
		}).animate(
		{
			top: "+=" + w.scrollTop(),
			left: "+=" + w.scrollLeft()
		}, 0);
		j.animate(x, l.closeSpeed, p)
	})
})(jQuery);
(function(f)
{
	function m(f, j)
	{
		var l = Math.pow(10, j);
		return Math.round(f * l) / l
	}

	function y(f, j)
	{
		var l = parseInt(f.css(j), 10);
		return l ? l : (l = f[0].currentStyle) && l.width && parseInt(l.width, 10)
	}

	function w(f)
	{
		return (f = f.data("events")) && f.onSlide
	}

	function p(j, l)
	{
		function r(d, c, f, i)
		{
			void 0 === f ? f = c / E * U : i && (f -= l.min);
			F && (f = Math.round(f / F) * F);
			if (void 0 === c || F) c = f * E / U;
			if (isNaN(f)) return h;
			c = Math.max(0, Math.min(c, E));
			f = c / E * U;
			if (i || !p) f += l.min;
			p && (i ? c = E - c : f = l.max - f);
			var f = m(f, R),
				k = "click" == d.type;
			if ($ && void 0 !== v &&
				!k && (d.type = "onSlide", s.trigger(d, [f, c]), d.isDefaultPrevented())) return h;
			i = k ? l.speed : 0;
			k = k ? function()
			{
				d.type = "change";
				s.trigger(d, [f])
			} : null;
			return p ? (D.animate(
			{
				top: c
			}, i, k), l.progress && C.animate(
			{
				height: E - c + D.height() / 2
			}, i)) : (D.animate(
			{
				left: c
			}, i, k), l.progress && C.animate(
			{
				width: c + D.width() / 2
			}, i)), v = f, j.val(f), h
		}

		function k()
		{
			(p = l.vertical || y(n, "height") > y(n, "width")) ? (E = y(n, "height") - y(D, "height"), z = n.offset().top + E) : (E = y(n, "width") - y(D, "width"), z = n.offset().left)
		}

		function d()
		{
			k();
			h.setValue(void 0 !==
				l.value ? l.value : l.min)
		}
		var h = this,
			i = l.css,
			n = f("<div><div/><a href='#'/></div>").data("rangeinput", h),
			p, v, z, E;
		j.before(n);
		var D = n.addClass(i.slider).find("a").addClass(i.handle),
			C = n.find("div").addClass(i.progress);
		f.each(["min", "max", "step", "value"], function(d, c)
		{
			var f = j.attr(c);
			parseFloat(f) && (l[c] = parseFloat(f, 10))
		});
		var U = l.max - l.min,
			F = "any" == l.step ? 0 : l.step,
			R = l.precision;
		if (void 0 === R) try
		{
			R = F.toString().split(".")[1].length
		}
		catch (ca)
		{
			R = 0
		}
		if ("range" == j.attr("type"))
		{
			var V = j.clone().wrap("<div/>").parent().html(),
				V = f(V.replace(/type/i, "type=text data-orig-type"));
			V.val(l.value);
			j.replaceWith(V);
			j = V
		}
		j.addClass(i.input);
		var s = f(h).add(j),
			$ = !0;
		f.extend(h,
		{
			getValue: function()
			{
				return v
			},
			setValue: function(d, c)
			{
				return k(), r(c || f.Event("api"), void 0, d, !0)
			},
			getConf: function()
			{
				return l
			},
			getProgress: function()
			{
				return C
			},
			getHandle: function()
			{
				return D
			},
			getInput: function()
			{
				return j
			},
			step: function(d, c)
			{
				c = c || f.Event();
				h.setValue(v + ("any" == l.step ? 1 : l.step) * (d || 1), c)
			},
			stepUp: function(d)
			{
				return h.step(d || 1)
			},
			stepDown: function(d)
			{
				return h.step(-d ||
					-1)
			}
		});
		f.each(["onSlide", "change"], function(d, c)
		{
			f.isFunction(l[c]) && f(h).bind(c, l[c]);
			h[c] = function(d)
			{
				return d && f(h).bind(c, d), h
			}
		});
		D.drag(
		{
			drag: !1
		}).bind("dragStart", function()
		{
			k();
			$ = w(f(h)) || w(j)
		}).bind("drag", function(d, c, f)
		{
			if (j.is(":disabled")) return !1;
			r(d, p ? c : f)
		}).bind("dragEnd", function(d)
		{
			d.isDefaultPrevented() || (d.type = "change", s.trigger(d, [v]))
		}).click(function(d)
		{
			return d.preventDefault()
		});
		n.click(function(d)
		{
			if (j.is(":disabled") || d.target == D[0]) return d.preventDefault();
			k();
			var c = p ?
				D.height() / 2 : D.width() / 2;
			r(d, p ? E - z - c + d.pageY : d.pageX - z - c)
		});
		l.keyboard && j.keydown(function(d)
		{
			if (!j.attr("readonly"))
			{
				var c = d.keyCode,
					i = -1 != f([75, 76, 38, 33, 39]).index(c),
					k = -1 != f([74, 72, 40, 34, 37]).index(c);
				if ((i || k) && !d.shiftKey && !d.altKey && !d.ctrlKey) return i ? h.step(33 == c ? 10 : 1, d) : k && h.step(34 == c ? -10 : -1, d), d.preventDefault()
			}
		});
		j.blur(function(d)
		{
			var c = f(this).val();
			c !== v && h.setValue(c, d)
		});
		f.extend(j[0],
		{
			stepUp: h.stepUp,
			stepDown: h.stepDown
		});
		d();
		E || f(window).load(d)
	}
	f.tools = f.tools ||
	{
		version: "1.2.6"
	};
	var j;
	j = f.tools.rangeinput = {
		conf:
		{
			min: 0,
			max: 100,
			step: "any",
			steps: 0,
			value: 0,
			precision: void 0,
			vertical: 0,
			keyboard: !0,
			progress: !1,
			speed: 100,
			css:
			{
				input: "range",
				slider: "slider",
				progress: "progress",
				handle: "handle"
			}
		}
	};
	var l, v;
	f.fn.drag = function(j)
	{
		return document.ondragstart = function()
		{
			return !1
		}, j = f.extend(
		{
			x: !0,
			y: !0,
			drag: !0
		}, j), l = l || f(document).bind("mousedown mouseup", function(p)
		{
			var r = f(p.target);
			if ("mousedown" == p.type && r.data("drag"))
			{
				var k = r.position(),
					d = p.pageX - k.left,
					h = p.pageY - k.top,
					i = !0;
				l.bind("mousemove.drag",
					function(f)
					{
						var k = f.pageX - d,
							f = f.pageY - h,
							l = {};
						j.x && (l.left = k);
						j.y && (l.top = f);
						i && (r.trigger("dragStart"), i = !1);
						j.drag && r.css(l);
						r.trigger("drag", [f, k]);
						v = r
					});
				p.preventDefault()
			}
			else try
			{
				v && v.trigger("dragEnd")
			}
			finally
			{
				l.unbind("mousemove.drag"), v = null
			}
		}), this.data("drag", !0)
	};
	f.expr[":"].range = function(j)
	{
		var l = j.getAttribute("type");
		return l && "range" == l || !!f(j).filter("input").data("rangeinput")
	};
	f.fn.rangeinput = function(l)
	{
		if (this.data("rangeinput")) return this;
		var l = f.extend(!0,
			{}, j.conf, l),
			m;
		return this.each(function()
		{
			var j =
				new p(f(this), f.extend(!0,
				{}, l)),
				j = j.getInput().data("rangeinput", j);
			m = m ? m.add(j) : j
		}), m ? m : this
	}
})(jQuery);
(function(f)
{
	function m(p, j)
	{
		var l = f(j);
		return 2 > l.length ? l : p.parent().find(j)
	}

	function y(p, j)
	{
		var l = this,
			v = p.add(l),
			x = p.children(),
			t = 0,
			r = j.vertical;
		w || (w = l);
		1 < x.length && (x = f(j.items, p));
		1 < j.size && (j.circular = !1);
		f.extend(l,
		{
			getConf: function()
			{
				return j
			},
			getIndex: function()
			{
				return t
			},
			getSize: function()
			{
				return l.getItems().size()
			},
			getNaviButtons: function()
			{
				return i.add(n)
			},
			getRoot: function()
			{
				return p
			},
			getItemWrap: function()
			{
				return x
			},
			getItems: function()
			{
				return x.find(j.item).not("." + j.clonedClass)
			},
			move: function(d, f)
			{
				return l.seekTo(t + d, f)
			},
			next: function(d)
			{
				return l.move(j.size, d)
			},
			prev: function(d)
			{
				return l.move(-j.size, d)
			},
			begin: function(d)
			{
				return l.seekTo(0, d)
			},
			end: function(d)
			{
				return l.seekTo(l.getSize() - 1, d)
			},
			focus: function()
			{
				return w = l, l
			},
			addItem: function(d)
			{
				return d = f(d), j.circular ? (x.children().last().before(d), x.children().first().replaceWith(d.clone().addClass(j.clonedClass))) : (x.append(d), n.removeClass("disabled")), v.trigger("onAddItem", [d]), l
			},
			seekTo: function(d, h, i)
			{
				d.jquery || (d *=
					1);
				if (j.circular && 0 === d && -1 == t && 0 !== h || !j.circular && 0 > d || d > l.getSize() || -1 > d) return l;
				var k = d;
				d.jquery ? d = l.getItems().index(d) : k = l.getItems().eq(d);
				var n = f.Event("onBeforeSeek");
				if (!i && (v.trigger(n, [d, h]), n.isDefaultPrevented() || !k.length)) return l;
				k = r ?
				{
					top: -k.position().top
				} :
				{
					left: -k.position().left
				};
				return t = d, w = l, void 0 === h && (h = j.speed), x.animate(k, h, j.easing, i || function()
				{
					v.trigger("onSeek", [d])
				}), l
			}
		});
		f.each(["onBeforeSeek", "onSeek", "onAddItem"], function(d, h)
		{
			f.isFunction(j[h]) && f(l).bind(h,
				j[h]);
			l[h] = function(d)
			{
				return d && f(l).bind(h, d), l
			}
		});
		if (j.circular)
		{
			var k = l.getItems().slice(-1).clone().prependTo(x),
				d = l.getItems().eq(1).clone().appendTo(x);
			k.add(d).addClass(j.clonedClass);
			l.onBeforeSeek(function(f, h, i)
			{
				if (!f.isDefaultPrevented())
				{
					if (-1 == h) return l.seekTo(k, i, function()
					{
						l.end(0)
					}), f.preventDefault();
					h == l.getSize() && l.seekTo(d, i, function()
					{
						l.begin(0)
					})
				}
			});
			var h = p.parents().add(p).filter(function()
			{
				if ("none" === f(this).css("display")) return !0
			});
			h.length ? (h.show(), l.seekTo(0, 0, function() {}),
				h.hide()) : l.seekTo(0, 0, function() {})
		}
		var i = m(p, j.prev).click(function(d)
			{
				d.stopPropagation();
				l.prev()
			}),
			n = m(p, j.next).click(function(d)
			{
				d.stopPropagation();
				l.next()
			});
		j.circular || (l.onBeforeSeek(function(d, f)
		{
			setTimeout(function()
			{
				d.isDefaultPrevented() || (i.toggleClass(j.disabledClass, 0 >= f), n.toggleClass(j.disabledClass, f >= l.getSize() - 1))
			}, 1)
		}), j.initialIndex || i.addClass(j.disabledClass));
		2 > l.getSize() && i.add(n).addClass(j.disabledClass);
		j.mousewheel && f.fn.mousewheel && p.mousewheel(function(d, f)
		{
			if (j.mousewheel) return l.move(0 >
				f ? 1 : -1, j.wheelSpeed || 50), !1
		});
		if (j.touch)
		{
			var B, y;
			x[0].ontouchstart = function(d)
			{
				d = d.touches[0];
				B = d.clientX;
				y = d.clientY
			};
			x[0].ontouchmove = function(d)
			{
				if (1 == d.touches.length && !x.is(":animated"))
				{
					var f = d.touches[0],
						h = B - f.clientX,
						f = y - f.clientY;
					l[r && 0 < f || !r && 0 < h ? "next" : "prev"]();
					d.preventDefault()
				}
			}
		}
		j.keyboard && f(document).bind("keydown.scrollable", function(d)
		{
			if (!(!j.keyboard || d.altKey || d.ctrlKey || d.metaKey || f(d.target).is(":input") || "static" != j.keyboard && w != l))
			{
				var h = d.keyCode;
				if (r && !(38 != h && 40 != h)) return l.move(38 ==
					h ? -1 : 1), d.preventDefault();
				if (!r && (37 == h || 39 == h)) return l.move(37 == h ? -1 : 1), d.preventDefault()
			}
		});
		j.initialIndex && l.seekTo(j.initialIndex, 0, function() {})
	}
	f.tools = f.tools ||
	{
		version: "1.2.6"
	};
	f.tools.scrollable = {
		conf:
		{
			activeClass: "active",
			circular: !1,
			clonedClass: "cloned",
			disabledClass: "disabled",
			easing: "swing",
			initialIndex: 0,
			item: "> *",
			items: ".items",
			keyboard: !0,
			mousewheel: !1,
			next: ".next",
			prev: ".prev",
			size: 1,
			speed: 400,
			vertical: !1,
			touch: !0,
			wheelSpeed: 0
		}
	};
	var w;
	f.fn.scrollable = function(p)
	{
		var j = this.data("scrollable");
		return j ? j : (p = f.extend(
		{}, f.tools.scrollable.conf, p), this.each(function()
		{
			j = new y(f(this), p);
			f(this).data("scrollable", j)
		}), p.api ? j : this)
	}
})(jQuery);
(function(f)
{
	var m = f.tools.scrollable;
	m.autoscroll = {
		conf:
		{
			autoplay: !0,
			interval: 3E3,
			autopause: !0
		}
	};
	f.fn.autoscroll = function(y)
	{
		"number" == typeof y && (y = {
			interval: y
		});
		var w = f.extend(
			{}, m.autoscroll.conf, y),
			p;
		return this.each(function()
		{
			function j()
			{
				x = setTimeout(function()
				{
					l.next()
				}, w.interval)
			}
			var l = f(this).data("scrollable"),
				m = l.getRoot(),
				x, t = !1;
			l && (p = l);
			l.play = function()
			{
				x || (t = !1, m.bind("onSeek", j), j())
			};
			l.pause = function()
			{
				x = clearTimeout(x);
				m.unbind("onSeek", j)
			};
			l.resume = function()
			{
				t || l.play()
			};
			l.stop =
				function()
				{
					t = !0;
					l.pause()
				};
			w.autopause && m.add(l.getNaviButtons()).hover(l.pause, l.resume);
			w.autoplay && l.play()
		}), w.api ? p : this
	}
})(jQuery);
(function(f)
{
	function m(m, p)
	{
		var j = f(p);
		return 2 > j.length ? j : m.parent().find(p)
	}
	var y = f.tools.scrollable;
	y.navigator = {
		conf:
		{
			navi: ".navi",
			naviItem: null,
			activeClass: "active",
			indexed: !1,
			idPrefix: null,
			history: !1
		}
	};
	f.fn.navigator = function(w)
	{
		"string" == typeof w && (w = {
			navi: w
		});
		var w = f.extend(
			{}, y.navigator.conf, w),
			p;
		return this.each(function()
		{
			function j()
			{
				return x.find(w.naviItem || "> *")
			}

			function l(d)
			{
				var i = f("<" + (w.naviItem || "a") + "/>").click(function(i)
				{
					f(this);
					v.seekTo(d);
					i.preventDefault();
					k && history.pushState(
					{
						i: d
					})
				});
				return 0 === d && i.addClass(r), w.indexed && i.text(d + 1), w.idPrefix && i.attr("id", w.idPrefix + d), i.appendTo(x)
			}
			var v = f(this).data("scrollable"),
				x = w.navi.jquery ? w.navi : m(v.getRoot(), w.navi),
				t = v.getNaviButtons(),
				r = w.activeClass,
				k = w.history && !!history.pushState,
				d = v.getConf().size;
			v && (p = v);
			v.getNaviButtons = function()
			{
				return t.add(x)
			};
			k && (history.pushState(
			{
				i: 0
			}), f(window).bind("popstate", function(d)
			{
				(d = d.originalEvent.state) && v.seekTo(d.i)
			}));
			j().length ? j().each(function(d)
			{
				f(this).click(function(i)
				{
					f(this);
					v.seekTo(d);
					i.preventDefault();
					k && history.pushState(
					{
						i: d
					})
				})
			}) : f.each(v.getItems(), function(f)
			{
				0 == f % d && l(f)
			});
			v.onBeforeSeek(function(f, i)
			{
				setTimeout(function()
				{
					if (!f.isDefaultPrevented())
					{
						var k = i / d;
						j().eq(k).length && j().removeClass(r).eq(k).addClass(r)
					}
				}, 1)
			});
			v.onAddItem(function(f, i)
			{
				var k = v.getItems().index(i);
				0 == k % d && l(k)
			})
		}), w.api ? p : this
	}
})(jQuery);
(function(f)
{
	function m(j, l, p)
	{
		var m = this,
			t = j.add(this),
			r = j.find(p.tabs),
			k = l.jquery ? l : j.children(l),
			d;
		r.length || (r = j.children());
		k.length || (k = j.parent().find(l));
		k.length || (k = f(l));
		f.extend(this,
		{
			click: function(h, i)
			{
				var k = r.eq(h);
				"string" == typeof h && h.replace("#", "") && (k = r.filter("[href*=" + h.replace("#", "") + "]"), h = Math.max(r.index(k), 0));
				if (p.rotate)
				{
					var j = r.length - 1;
					if (0 > h) return m.click(j, i);
					if (h > j) return m.click(0, i)
				}
				if (!k.length)
				{
					if (0 <= d) return m;
					h = p.initialIndex;
					k = r.eq(h)
				}
				if (h === d) return m;
				i =
					i || f.Event();
				i.type = "onBeforeClick";
				t.trigger(i, [h]);
				return i.isDefaultPrevented() ? void 0 : (y[p.effect].call(m, h, function()
				{
					d = h;
					i.type = "onClick";
					t.trigger(i, [h])
				}), r.removeClass(p.current), k.addClass(p.current), m)
			},
			getConf: function()
			{
				return p
			},
			getTabs: function()
			{
				return r
			},
			getPanes: function()
			{
				return k
			},
			getCurrentPane: function()
			{
				return k.eq(d)
			},
			getCurrentTab: function()
			{
				return r.eq(d)
			},
			getIndex: function()
			{
				return d
			},
			next: function()
			{
				return m.click(d + 1)
			},
			prev: function()
			{
				return m.click(d - 1)
			},
			destroy: function()
			{
				return r.unbind(p.event).removeClass(p.current),
					k.find("a[href^=#]").unbind("click.T"), m
			}
		});
		f.each(["onBeforeClick", "onClick"], function(d, i)
		{
			f.isFunction(p[i]) && f(m).bind(i, p[i]);
			m[i] = function(d)
			{
				return d && f(m).bind(i, d), m
			}
		});
		p.history && f.fn.history && (f.tools.history.init(r), p.event = "history");
		r.each(function(d)
		{
			f(this).bind(p.event, function(f)
			{
				return m.click(d, f), f.preventDefault()
			})
		});
		k.find("a[href^=#]").bind("click.T", function(d)
		{
			m.click(f(this).attr("href"), d)
		});
		location.hash && "a" == p.tabs && j.find("[href=" + location.hash + "]").length ? m.click(location.hash) :
			(0 === p.initialIndex || 0 < p.initialIndex) && m.click(p.initialIndex)
	}
	f.tools = f.tools ||
	{
		version: "1.2.6"
	};
	f.tools.tabs = {
		conf:
		{
			tabs: "a",
			current: "current",
			onBeforeClick: null,
			onClick: null,
			effect: "default",
			initialIndex: 0,
			event: "click",
			rotate: !1,
			slideUpSpeed: 400,
			slideDownSpeed: 400,
			history: !1
		},
		addEffect: function(f, l)
		{
			y[f] = l
		}
	};
	var y = {
			"default": function(f, l)
			{
				this.getPanes().hide().eq(f).show();
				l.call()
			},
			fade: function(f, l)
			{
				var p = this.getConf(),
					m = p.fadeOutSpeed,
					t = this.getPanes();
				m ? t.fadeOut(m) : t.hide();
				t.eq(f).fadeIn(p.fadeInSpeed,
					l)
			},
			slide: function(f, l)
			{
				var p = this.getConf();
				this.getPanes().slideUp(p.slideUpSpeed);
				this.getPanes().eq(f).slideDown(p.slideDownSpeed, l)
			},
			ajax: function(f, l)
			{
				this.getPanes().eq(0).load(this.getTabs().eq(f).attr("href"), l)
			}
		},
		w, p;
	f.tools.tabs.addEffect("horizontal", function(j, l)
	{
		if (!w)
		{
			var m = this.getPanes().eq(j),
				x = this.getCurrentPane();
			p || (p = this.getPanes().eq(0).width());
			w = !0;
			m.show();
			x.animate(
			{
				width: 0
			},
			{
				step: function(f)
				{
					m.css("width", p - f)
				},
				complete: function()
				{
					f(this).hide();
					l.call();
					w = !1
				}
			});
			x.length ||
				(l.call(), w = !1)
		}
	});
	f.fn.tabs = function(j, l)
	{
		var p = this.data("tabs");
		return p && (p.destroy(), this.removeData("tabs")), f.isFunction(l) && (l = {
			onBeforeClick: l
		}), l = f.extend(
		{}, f.tools.tabs.conf, l), this.each(function()
		{
			p = new m(f(this), j, l);
			f(this).data("tabs", p)
		}), l.api ? p : this
	}
})(jQuery);
(function(f)
{
	function m(m, p)
	{
		function j(d)
		{
			var h = f(d);
			return 2 > h.length ? h : m.parent().find(d)
		}

		function l()
		{
			r = setTimeout(function()
			{
				t.next()
			}, p.interval)
		}
		var v = this,
			x = m.add(this),
			t = m.data("tabs"),
			r, k = !0,
			d = j(p.next).click(function()
			{
				t.next()
			}),
			h = j(p.prev).click(function()
			{
				t.prev()
			});
		f.extend(v,
		{
			getTabs: function()
			{
				return t
			},
			getConf: function()
			{
				return p
			},
			play: function()
			{
				if (r) return v;
				var d = f.Event("onBeforePlay");
				return x.trigger(d), d.isDefaultPrevented() ? v : (k = !1, x.trigger("onPlay"), x.bind("onClick", l),
					l(), v)
			},
			pause: function()
			{
				if (!r) return v;
				var d = f.Event("onBeforePause");
				return x.trigger(d), d.isDefaultPrevented() ? v : (r = clearTimeout(r), x.trigger("onPause"), x.unbind("onClick", l), v)
			},
			resume: function()
			{
				k || v.play()
			},
			stop: function()
			{
				v.pause();
				k = !0
			}
		});
		f.each(["onBeforePlay", "onPlay", "onBeforePause", "onPause"], function(d, h)
		{
			f.isFunction(p[h]) && f(v).bind(h, p[h]);
			v[h] = function(d)
			{
				return f(v).bind(h, d)
			}
		});
		p.autopause && t.getTabs().add(d).add(h).add(t.getPanes()).hover(v.pause, v.resume);
		p.autoplay && v.play();
		p.clickable && t.getPanes().click(function()
		{
			t.next()
		});
		if (!t.getConf().rotate)
		{
			var i = p.disabledClass;
			t.getIndex() || h.addClass(i);
			t.onBeforeClick(function(f, k)
			{
				h.toggleClass(i, !k);
				d.toggleClass(i, k == t.getTabs().length - 1)
			})
		}
	}
	var y;
	y = f.tools.tabs.slideshow = {
		conf:
		{
			next: ".forward",
			prev: ".backward",
			disabledClass: "disabled",
			autoplay: !1,
			autopause: !0,
			interval: 3E3,
			clickable: !0,
			api: !1
		}
	};
	f.fn.slideshow = function(w)
	{
		var p = this.data("slideshow");
		return p ? p : (w = f.extend(
		{}, y.conf, w), this.each(function()
		{
			p = new m(f(this),
				w);
			f(this).data("slideshow", p)
		}), w.api ? p : this)
	}
})(jQuery);
(function(f)
{
	function m()
	{
		if (f.browser.msie)
		{
			var j = f(document).height(),
				l = f(window).height();
			return [window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, 20 > j - l ? l : j]
		}
		return [f(document).width(), f(document).height()]
	}

	function y(j)
	{
		if (j) return j.call(f.mask)
	}
	f.tools = f.tools ||
	{
		version: "1.2.6"
	};
	var w;
	w = f.tools.expose = {
		conf:
		{
			maskId: "exposeMask",
			loadSpeed: "slow",
			closeSpeed: "fast",
			closeOnClick: !0,
			closeOnEsc: !0,
			zIndex: 9998,
			opacity: 0.8,
			startOpacity: 0,
			color: "#fff",
			onLoad: null,
			onClose: null
		}
	};
	var p, j, l, v, x;
	f.mask = {
		load: function(t, r)
		{
			if (l) return this;
			"string" == typeof t && (t = {
				color: t
			});
			t = t || v;
			v = t = f.extend(f.extend(
			{}, w.conf), t);
			p = f("#" + t.maskId);
			p.length || (p = f("<div/>").attr("id", t.maskId), f("body").append(p));
			var k = m();
			return p.css(
			{
				position: "absolute",
				top: 0,
				left: 0,
				width: k[0],
				height: k[1],
				display: "none",
				opacity: t.startOpacity,
				zIndex: t.zIndex
			}), t.color && p.css("backgroundColor", t.color), !1 === y(t.onBeforeLoad) ? this : (t.closeOnEsc && f(document).bind("keydown.mask", function(d)
				{
					27 == d.keyCode && f.mask.close(d)
				}),
				t.closeOnClick && p.bind("click.mask", function(d)
				{
					f.mask.close(d)
				}), f(window).bind("resize.mask", function()
				{
					f.mask.fit()
				}), r && r.length && (x = r.eq(0).css("zIndex"), f.each(r, function()
				{
					var d = f(this);
					/relative|absolute|fixed/i.test(d.css("position")) || d.css("position", "relative")
				}), j = r.css(
				{
					zIndex: Math.max(t.zIndex + 1, "auto" == x ? 0 : x)
				})), p.css(
				{
					display: "block"
				}).fadeTo(t.loadSpeed, t.opacity, function()
				{
					f.mask.fit();
					y(t.onLoad);
					l = "full"
				}), l = !0, this)
		},
		close: function()
		{
			if (l)
			{
				if (!1 === y(v.onBeforeClose)) return this;
				p.fadeOut(v.closeSpeed, function()
				{
					y(v.onClose);
					j && j.css(
					{
						zIndex: x
					});
					l = !1
				});
				f(document).unbind("keydown.mask");
				p.unbind("click.mask");
				f(window).unbind("resize.mask")
			}
			return this
		},
		fit: function()
		{
			if (l)
			{
				var f = m();
				p.css(
				{
					width: f[0],
					height: f[1]
				})
			}
		},
		getMask: function()
		{
			return p
		},
		isLoaded: function(f)
		{
			return f ? "full" == l : l
		},
		getConf: function()
		{
			return v
		},
		getExposed: function()
		{
			return j
		}
	};
	f.fn.mask = function(j)
	{
		return f.mask.load(j), this
	};
	f.fn.expose = function(j)
	{
		return f.mask.load(j, this), this
	}
})(jQuery);
(function()
{
	function f(f, k)
	{
		if (k)
			for (var d in k) k.hasOwnProperty(d) && (f[d] = k[d]);
		return f
	}

	function m(f, k)
	{
		var d = [],
			h;
		for (h in f) f.hasOwnProperty(h) && (d[h] = k(f[h]));
		return d
	}

	function y(j, k, d)
	{
		if (x.isSupported(k.version)) j.innerHTML = x.getHTML(k, d);
		else if (k.expressInstall && x.isSupported([6, 65])) j.innerHTML = x.getHTML(f(k,
		{
			src: k.expressInstall
		}),
		{
			MMredirectURL: location.href,
			MMplayerType: "PlugIn",
			MMdoctitle: document.title
		});
		else if (j.innerHTML.replace(/\s/g, "") || (j.innerHTML = "<h2>Flash version " + k.version +
				" or greater is required</h2><h3>" + (0 < t[0] ? "Your version is " + t : "You have no flash plugin installed") + "</h3>" + ("A" == j.tagName ? "<p>Click here to download latest version</p>" : "<p>Download latest version from <a href='" + p + "'>here</a></p>"), "A" == j.tagName && (j.onclick = function()
				{
					location.href = p
				})), k.onFail)
		{
			var h = k.onFail.call(this);
			"string" == typeof h && (j.innerHTML = h)
		}
		w && (window[k.id] = document.getElementById(k.id));
		f(this,
		{
			getRoot: function()
			{
				return j
			},
			getOptions: function()
			{
				return k
			},
			getConf: function()
			{
				return d
			},
			getApi: function()
			{
				return j.firstChild
			}
		})
	}
	var w = document.all,
		p = "http://www.adobe.com/go/getflashplayer",
		j = "function" == typeof jQuery,
		l = /(\d+)[^\d]+(\d+)[^\d]*(\d*)/,
		v = {
			width: "100%",
			height: "100%",
			id: "_" + ("" + Math.random()).slice(9),
			allowfullscreen: !0,
			allowscriptaccess: "always",
			quality: "high",
			version: [3, 0],
			onFail: null,
			expressInstall: null,
			w3c: !1,
			cachebusting: !1
		};
	window.attachEvent && window.attachEvent("onbeforeunload", function()
	{
		__flash_unloadHandler = function() {};
		__flash_savedUnloadHandler = function() {}
	});
	window.flashembed = function(j, k, d)
	{
		"string" == typeof j && (j = document.getElementById(j.replace("#", "")));
		return !j ? void 0 : ("string" == typeof k && (k = {
			src: k
		}), new y(j, f(f(
		{}, v), k), d))
	};
	var x = f(window.flashembed,
		{
			conf: v,
			getVersion: function()
			{
				var f, k;
				try
				{
					k = navigator.plugins["Shockwave Flash"].description.slice(16)
				}
				catch (d)
				{
					try
					{
						k = (f = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")) && f.GetVariable("$version")
					}
					catch (h)
					{
						try
						{
							k = (f = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6")) && f.GetVariable("$version")
						}
						catch (i)
						{}
					}
				}
				return k =
					l.exec(k), k ? [k[1], k[3]] : [0, 0]
			},
			asString: function(f)
			{
				if (null === f || void 0 === f) return null;
				var k = typeof f;
				"object" == k && f.push && (k = "array");
				switch (k)
				{
					case "string":
						return f = f.replace(RegExp('(["\\\\])', "g"), "\\$1"), f = f.replace(/^\s?(\d+\.?\d*)%/, "$1pct"), '"' + f + '"';
					case "array":
						return "[" + m(f, function(d)
						{
							return x.asString(d)
						}).join(",") + "]";
					case "function":
						return '"function()"';
					case "object":
						var k = [],
							d;
						for (d in f) f.hasOwnProperty(d) && k.push('"' + d + '":' + x.asString(f[d]));
						return "{" + k.join(",") + "}"
				}
				return ("" +
					f).replace(/\s/g, " ").replace(/\'/g, '"')
			},
			getHTML: function(j, k)
			{
				var j = f(
					{}, j),
					d = '<object width="' + j.width + '" height="' + j.height + '" id="' + j.id + '" name="' + j.id + '"';
				j.cachebusting && (j.src += (-1 != j.src.indexOf("?") ? "&" : "?") + Math.random());
				j.w3c || !w ? d += ' data="' + j.src + '" type="application/x-shockwave-flash"' : d += ' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"';
				d += ">";
				if (j.w3c || w) d += '<param name="movie" value="' + j.src + '" />';
				j.width = j.height = j.id = j.w3c = j.src = null;
				j.onFail = j.version = j.expressInstall =
					null;
				for (var h in j) j[h] && (d += '<param name="' + h + '" value="' + j[h] + '" />');
				h = "";
				if (k)
				{
					for (var i in k)
						if (k[i])
						{
							var n = k[i];
							h += i + "=" + encodeURIComponent(/function|object/.test(typeof n) ? x.asString(n) : n) + "&"
						}
					h = h.slice(0, -1);
					d += '<param name="flashvars" value=\'' + h + "' />"
				}
				return d += "</object>", d
			},
			isSupported: function(f)
			{
				return t[0] > f[0] || t[0] == f[0] && t[1] >= f[1]
			}
		}),
		t = x.getVersion();
	j && (jQuery.tools = jQuery.tools ||
	{
		version: "1.2.6"
	}, jQuery.tools.flashembed = {
		conf: v
	}, jQuery.fn.flashembed = function(f, k)
	{
		return this.each(function()
		{
			jQuery(this).data("flashembed",
				flashembed(this, f, k))
		})
	})
})();
(function(f)
{
	function m(f)
	{
		if (f)
		{
			var j = w.contentWindow.document;
			j.open().close();
			j.location.hash = f
		}
	}
	var y, w, p, j;
	f.tools = f.tools ||
	{
		version: "1.2.6"
	};
	f.tools.history = {
		init: function(l)
		{
			j || (f.browser.msie && "8" > f.browser.version ? w || (w = f("<iframe/>").attr("src", "javascript:false;").hide().get(0), f("body").prepend(w), setInterval(function()
			{
				var j = w.contentWindow.document.location.hash;
				y !== j && f(window).trigger("hash", j)
			}, 100), m(location.hash || "#")) : setInterval(function()
			{
				var j = location.hash;
				j !== y && f(window).trigger("hash",
					j)
			}, 100), p = p ? p.add(l) : l, l.click(function(j)
			{
				var l = f(this).attr("href");
				w && m(l);
				if ("#" != l.slice(0, 1)) return location.href = "#" + l, j.preventDefault()
			}), j = !0)
		}
	};
	f(window).bind("hash", function(j, m)
	{
		m ? p.filter(function()
		{
			var j = f(this).attr("href");
			return j == m || j == m.replace("#", "")
		}).trigger("history", [m]) : p.eq(0).trigger("history", [m]);
		y = m
	});
	f.fn.history = function(j)
	{
		return f.tools.history.init(this), this.bind("history", j)
	}
})(jQuery);
(function(f)
{
	function m(m)
	{
		switch (m.type)
		{
			case "mousemove":
				return f.extend(m.data,
				{
					clientX: m.clientX,
					clientY: m.clientY,
					pageX: m.pageX,
					pageY: m.pageY
				});
			case "DOMMouseScroll":
				f.extend(m, m.data);
				m.delta = -m.detail / 3;
				break;
			case "mousewheel":
				m.delta = m.wheelDelta / 120
		}
		return m.type = "wheel", f.event.handle.call(this, m, m.delta)
	}
	f.fn.mousewheel = function(f)
	{
		return this[f ? "bind" : "trigger"]("wheel", f)
	};
	f.event.special.wheel = {
		setup: function()
		{
			f.event.add(this, y, m,
			{})
		},
		teardown: function()
		{
			f.event.remove(this, y, m)
		}
	};
	var y = f.browser.mozilla ? "DOMMouseScroll" + ("1.9" > f.browser.version ? " mousemove" : "") : "mousewheel"
})(jQuery);
(function(f)
{
	function m(m, j, l)
	{
		var v = l.relative ? m.position().top : m.offset().top,
			w = l.relative ? m.position().left : m.offset().left,
			t = l.position[0],
			v = v - (j.outerHeight() - l.offset[0]),
			w = w + (m.outerWidth() + l.offset[1]);
		/iPad/i.test(navigator.userAgent) && (v -= f(window).scrollTop());
		var r = j.outerHeight() + m.outerHeight();
		"center" == t && (v += r / 2);
		"bottom" == t && (v += r);
		t = l.position[1];
		m = j.outerWidth() + m.outerWidth();
		return "center" == t && (w -= m / 2), "left" == t && (w -= m),
		{
			top: v,
			left: w
		}
	}

	function y(p, j)
	{
		var l = this,
			v = p.add(l),
			x,
			t = 0,
			r = 0,
			k = p.attr("title"),
			d = p.attr("data-tooltip"),
			h = w[j.effect],
			i, n = p.is(":input"),
			B = n && p.is(":checkbox, :radio, select, :button, :submit"),
			y = p.attr("type"),
			z = j.events[y] || j.events[n ? B ? "widget" : "input" : "def"];
		if (!h) throw 'Nonexistent effect "' + j.effect + '"';
		z = z.split(/,\s*/);
		if (2 != z.length) throw "Tooltip: bad events configuration for " + y;
		p.bind(z[0], function(d)
		{
			clearTimeout(t);
			j.predelay ? r = setTimeout(function()
			{
				l.show(d)
			}, j.predelay) : l.show(d)
		}).bind(z[1], function(d)
		{
			clearTimeout(r);
			j.delay ? t = setTimeout(function()
				{
					l.hide(d)
				},
				j.delay) : l.hide(d)
		});
		k && j.cancelDefault && (p.removeAttr("title"), p.data("title", k));
		f.extend(l,
		{
			show: function(n)
			{
				if (!x && (d ? x = f(d) : j.tip ? x = f(j.tip).eq(0) : k ? x = f(j.layout).addClass(j.tipClass).appendTo(document.body).hide().append(k) : (x = p.next(), x.length || (x = p.parent().next())), !x.length)) throw "Cannot find tooltip for " + p;
				if (l.isShown()) return l;
				x.stop(!0, !0);
				var B = m(p, x, j);
				j.tip && x.html(p.data("title"));
				n = f.Event();
				n.type = "onBeforeShow";
				v.trigger(n, [B]);
				if (n.isDefaultPrevented()) return l;
				B = m(p, x, j);
				x.css(
				{
					position: "absolute",
					top: B.top,
					left: B.left
				});
				i = !0;
				h[0].call(l, function()
				{
					n.type = "onShow";
					i = "full";
					v.trigger(n)
				});
				B = j.events.tooltip.split(/,\s*/);
				return x.data("__set") || (x.unbind(B[0]).bind(B[0], function()
				{
					clearTimeout(t);
					clearTimeout(r)
				}), B[1] && !p.is("input:not(:checkbox, :radio), textarea") && x.unbind(B[1]).bind(B[1], function(d)
				{
					d.relatedTarget != p[0] && p.trigger(z[1].split(" ")[0])
				}), j.tip || x.data("__set", !0)), l
			},
			hide: function(d)
			{
				if (!x || !l.isShown()) return l;
				d = f.Event();
				d.type = "onBeforeHide";
				v.trigger(d);
				return d.isDefaultPrevented() ? void 0 : (i = !1, w[j.effect][1].call(l, function()
				{
					d.type = "onHide";
					v.trigger(d)
				}), l)
			},
			isShown: function(d)
			{
				return d ? "full" == i : i
			},
			getConf: function()
			{
				return j
			},
			getTip: function()
			{
				return x
			},
			getTrigger: function()
			{
				return p
			}
		});
		f.each(["onHide", "onBeforeShow", "onShow", "onBeforeHide"], function(d, h)
		{
			f.isFunction(j[h]) && f(l).bind(h, j[h]);
			l[h] = function(d)
			{
				return d && f(l).bind(h, d), l
			}
		})
	}
	f.tools = f.tools ||
	{
		version: "1.2.6"
	};
	f.tools.tooltip = {
		conf:
		{
			effect: "toggle",
			fadeOutSpeed: "fast",
			predelay: 0,
			delay: 30,
			opacity: 1,
			tip: 0,
			fadeIE: !1,
			position: ["top", "center"],
			offset: [0, 0],
			relative: !1,
			cancelDefault: !0,
			events:
			{
				def: "mouseenter,mouseleave",
				input: "focus,blur",
				widget: "focus mouseenter,blur mouseleave",
				tooltip: "mouseenter,mouseleave"
			},
			layout: "<div/>",
			tipClass: "tooltip"
		},
		addEffect: function(f, j, l)
		{
			w[f] = [j, l]
		}
	};
	var w = {
		toggle: [function(f)
		{
			var j = this.getConf(),
				l = this.getTip(),
				j = j.opacity;
			1 > j && l.css(
			{
				opacity: j
			});
			l.show();
			f.call()
		}, function(f)
		{
			this.getTip().hide();
			f.call()
		}],
		fade: [function(m)
		{
			var j =
				this.getConf();
			!f.browser.msie || j.fadeIE ? this.getTip().fadeTo(j.fadeInSpeed, j.opacity, m) : (this.getTip().show(), m())
		}, function(m)
		{
			var j = this.getConf();
			!f.browser.msie || j.fadeIE ? this.getTip().fadeOut(j.fadeOutSpeed, m) : (this.getTip().hide(), m())
		}]
	};
	f.fn.tooltip = function(m)
	{
		var j = this.data("tooltip");
		return j ? j : (m = f.extend(!0,
		{}, f.tools.tooltip.conf, m), "string" == typeof m.position && (m.position = m.position.split(/,?\s/)), this.each(function()
		{
			j = new y(f(this), m);
			f(this).data("tooltip", j)
		}), m.api ? j : this)
	}
})(jQuery);
(function(f)
{
	var m = f.tools.tooltip;
	m.dynamic = {
		conf:
		{
			classNames: "top right bottom left"
		}
	};
	f.fn.dynamic = function(y)
	{
		"number" == typeof y && (y = {
			speed: y
		});
		var y = f.extend(
			{}, m.dynamic.conf, y),
			w = f.extend(!0,
			{}, y),
			p = y.classNames.split(/\s/),
			j;
		return this.each(function()
		{
			var l = f(this).tooltip().onBeforeShow(function(l, m)
			{
				var t = this.getTip(),
					r = this.getConf();
				j || (j = [r.position[0], r.position[1], r.offset[0], r.offset[1], f.extend(
				{}, r)]);
				f.extend(r, j[4]);
				r.position = [j[0], j[1]];
				r.offset = [j[2], j[3]];
				t.css(
				{
					visibility: "hidden",
					position: "absolute",
					top: m.top,
					left: m.left
				}).show();
				var k = f.extend(!0,
					{}, w),
					d;
				d = f(window);
				var h = d.width() + d.scrollLeft(),
					i = d.height() + d.scrollTop();
				d = [t.offset().top <= d.scrollTop(), h <= t.offset().left + t.width(), i <= t.offset().top + t.height(), d.scrollLeft() >= t.offset().left];
				a:
				{
					for (h = d.length; h--;)
						if (d[h])
						{
							h = !1;
							break a
						}
					h = !0
				}
				if (!h)
				{
					d[2] && (f.extend(r, k.top), r.position[0] = "top", t.addClass(p[0]));
					d[3] && (f.extend(r, k.right), r.position[1] = "right", t.addClass(p[1]));
					d[0] && (f.extend(r, k.bottom), r.position[0] = "bottom",
						t.addClass(p[2]));
					d[1] && (f.extend(r, k.left), r.position[1] = "left", t.addClass(p[3]));
					if (d[0] || d[2]) r.offset[0] *= -1;
					if (d[1] || d[3]) r.offset[1] *= -1
				}
				t.css(
				{
					visibility: "visible"
				}).hide()
			});
			l.onBeforeShow(function()
			{
				var f = this.getConf();
				this.getTip();
				setTimeout(function()
				{
					f.position = [j[0], j[1]];
					f.offset = [j[2], j[3]]
				}, 0)
			});
			l.onHide(function()
			{
				this.getTip().removeClass(y.classNames)
			});
			ret = l
		}), y.api ? ret : this
	}
})(jQuery);
(function(f)
{
	var m = f.tools.tooltip;
	f.extend(m.conf,
	{
		direction: "up",
		bounce: !1,
		slideOffset: 10,
		slideInSpeed: 200,
		slideOutSpeed: 200,
		slideFade: !f.browser.msie
	});
	var y = {
		up: ["-", "top"],
		down: ["+", "top"],
		left: ["-", "left"],
		right: ["+", "left"]
	};
	m.addEffect("slide", function(f)
	{
		var m = this.getConf(),
			j = this.getTip(),
			l = m.slideFade ?
			{
				opacity: m.opacity
			} :
			{},
			v = y[m.direction] || y.up;
		l[v[1]] = v[0] + "=" + m.slideOffset;
		m.slideFade && j.css(
		{
			opacity: 0
		});
		j.show().animate(l, m.slideInSpeed, f)
	}, function(m)
	{
		var p = this.getConf(),
			j = p.slideOffset,
			l = p.slideFade ?
			{
				opacity: 0
			} :
			{},
			v = y[p.direction] || y.up,
			x = "" + v[0];
		p.bounce && (x = "+" == x ? "-" : "+");
		l[v[1]] = x + "=" + j;
		this.getTip().animate(l, p.slideOutSpeed, function()
		{
			f(this).hide();
			m.call()
		})
	})
})(jQuery);
(function(f)
{
	function m(d, h, i)
	{
		var k = d.offset().top,
			j = d.offset().left,
			l = i.position.split(/,?\s+/),
			m = l[0],
			l = l[1],
			k = k - (h.outerHeight() - i.offset[0]),
			j = j + (d.outerWidth() + i.offset[1]);
		/iPad/i.test(navigator.userAgent) && (k -= f(window).scrollTop());
		i = h.outerHeight() + d.outerHeight();
		"center" == m && (k += i / 2);
		"bottom" == m && (k += i);
		d = d.outerWidth();
		return "center" == l && (j -= (d + h.outerWidth()) / 2), "left" == l && (j -= d),
		{
			top: k,
			left: j
		}
	}

	function y(d)
	{
		function f()
		{
			return this.getAttribute("type") == d
		}
		return f.key = "[type=" + d + "]",
			f
	}

	function w(d, h, i)
	{
		function j(d, h, k)
		{
			if (i.grouped || !d.length)
			{
				var n;
				!1 === k || f.isArray(k) ? (n = t.messages[h.key || h] || t.messages["*"], n = n[i.lang] || t.messages["*"].en, (h = n.match(/\$\d/g)) && f.isArray(k) && f.each(h, function(d)
				{
					n = n.replace(this, k[d])
				})) : n = k[i.lang] || k;
				d.push(n)
			}
		}
		var p = this,
			w = h.add(p),
			d = d.not(":button, :image, :reset, :submit");
		h.attr("novalidate", "novalidate");
		f.extend(p,
		{
			getConf: function()
			{
				return i
			},
			getForm: function()
			{
				return h
			},
			getInputs: function()
			{
				return d
			},
			reflow: function()
			{
				return d.each(function()
				{
					var d =
						f(this),
						h = d.data("msg.el");
					h && (d = m(d, h, i), h.css(
					{
						top: d.top,
						left: d.left
					}))
				}), p
			},
			invalidate: function(h, j)
			{
				if (!j)
				{
					var n = [];
					f.each(h, function(f, h)
					{
						var i = d.filter("[name='" + f + "']");
						i.length && (i.trigger("OI", [h]), n.push(
						{
							input: i,
							messages: [h]
						}))
					});
					h = n;
					j = f.Event()
				}
				return j.type = "onFail", w.trigger(j, [h]), j.isDefaultPrevented() || k[i.effect][0].call(p, h, j), p
			},
			reset: function(h)
			{
				return h = h || d, h.removeClass(i.errorClass).each(function()
				{
					var d = f(this).data("msg.el");
					d && (d.remove(), f(this).data("msg.el", null))
				}).unbind(i.errorInputEvent ||
					""), p
			},
			destroy: function()
			{
				return h.unbind(i.formEvent + ".V").unbind("reset.V"), d.unbind(i.inputEvent + ".V").unbind("change.V"), p.reset()
			},
			checkValidity: function(h, m)
			{
				h = h || d;
				h = h.not(":disabled");
				if (!h.length) return !0;
				m = m || f.Event();
				m.type = "onBeforeValidate";
				w.trigger(m, [h]);
				if (m.isDefaultPrevented()) return m.result;
				var t = [];
				h.not(":radio:not(:checked)").each(function()
				{
					var d = [],
						h = f(this).data("messages", d),
						k = l && h.is(":date") ? "onHide.v" : i.errorInputEvent + ".v";
					h.unbind(k);
					f.each(r, function()
					{
						var f = this[0];
						if (h.filter(f).length)
						{
							var k = this[1].call(p, h, h.val());
							if (!0 !== k)
							{
								m.type = "onBeforeFail";
								w.trigger(m, [h, f]);
								if (m.isDefaultPrevented()) return !1;
								var l = h.attr(i.messageAttr);
								if (l) return d = [l], !1;
								j(d, f, k)
							}
						}
					});
					d.length && (t.push(
					{
						input: h,
						messages: d
					}), h.trigger("OI", [d]), i.errorInputEvent && h.bind(k, function(d)
					{
						p.checkValidity(h, d)
					}));
					if (i.singleError && t.length) return !1
				});
				var v = k[i.effect];
				if (!v) throw 'Validator: cannot find effect "' + i.effect + '"';
				return t.length ? (p.invalidate(t, m), !1) : (v[1].call(p, h, m), m.type =
					"onSuccess", w.trigger(m, [h]), h.unbind(i.errorInputEvent + ".v"), !0)
			}
		});
		f.each(["onBeforeValidate", "onBeforeFail", "onFail", "onSuccess"], function(d, h)
		{
			f.isFunction(i[h]) && f(p).bind(h, i[h]);
			p[h] = function(d)
			{
				return d && f(p).bind(h, d), p
			}
		});
		i.formEvent && h.bind(i.formEvent + ".V", function(d)
		{
			if (!p.checkValidity(null, d)) return d.preventDefault();
			d.target = h;
			d.type = i.formEvent
		});
		h.bind("reset.V", function()
		{
			p.reset()
		});
		d[0] && d[0].validity && d.each(function()
		{
			this.oninvalid = function()
			{
				return !1
			}
		});
		h[0] && (h[0].checkValidity =
			p.checkValidity);
		i.inputEvent && d.bind(i.inputEvent + ".V", function(d)
		{
			p.checkValidity(f(this), d)
		});
		d.filter(":checkbox, select").filter("[required]").bind("change.V", function(d)
		{
			var h = f(this);
			(this.checked || h.is("select") && f(this).val()) && k[i.effect][1].call(p, h, d)
		});
		var v = d.filter(":radio").change(function(d)
		{
			p.checkValidity(v, d)
		});
		f(window).resize(function()
		{
			p.reflow()
		})
	}
	f.tools = f.tools ||
	{
		version: "1.2.6"
	};
	var p = /\[type=([a-z]+)\]/,
		j = /^-?[0-9]*(\.[0-9]+)?$/,
		l = f.tools.dateinput,
		v = /^([a-z0-9_\.\-\+]+)@([\da-z\.\-]+)\.([a-z\.]{2,6})$/i,
		x = /^(https?:\/\/)?[\da-z\.\-]+\.[a-z\.]{2,6}[#&+_\?\/\w \.\-=]*$/i,
		t;
	t = f.tools.validator = {
		conf:
		{
			grouped: !1,
			effect: "default",
			errorClass: "invalid",
			inputEvent: null,
			errorInputEvent: "keyup",
			formEvent: "submit",
			lang: "en",
			message: "<div/>",
			messageAttr: "data-message",
			messageClass: "error",
			offset: [0, 0],
			position: "center right",
			singleError: !1,
			speed: "normal"
		},
		messages:
		{
			"*":
			{
				en: "Please correct this value"
			}
		},
		localize: function(d, h)
		{
			f.each(h, function(f, h)
			{
				t.messages[f] = t.messages[f] ||
				{};
				t.messages[f][d] = h
			})
		},
		localizeFn: function(d,
			h)
		{
			t.messages[d] = t.messages[d] ||
			{};
			f.extend(t.messages[d], h)
		},
		fn: function(d, h, i)
		{
			f.isFunction(h) ? i = h : ("string" == typeof h && (h = {
				en: h
			}), this.messages[d.key || d] = h);
			(h = p.exec(d)) && (d = y(h[1]));
			r.push([d, i])
		},
		addEffect: function(d, f, i)
		{
			k[d] = [f, i]
		}
	};
	var r = [],
		k = {
			"default": [function(d)
			{
				var h = this.getConf();
				f.each(d, function(d, k)
				{
					var j = k.input;
					j.addClass(h.errorClass);
					var l = j.data("msg.el");
					l || (l = f(h.message).addClass(h.messageClass).appendTo(document.body), j.data("msg.el", l));
					l.css(
					{
						visibility: "hidden"
					}).find("p").remove();
					f.each(k.messages, function(d, h)
					{
						f("<p/>").html(h).appendTo(l)
					});
					l.outerWidth() == l.parent().width() && l.add(l.find("p")).css(
					{
						display: "inline"
					});
					j = m(j, l, h);
					l.css(
					{
						visibility: "visible",
						position: "absolute",
						top: j.top,
						left: j.left
					}).fadeIn(h.speed)
				})
			}, function(d)
			{
				var h = this.getConf();
				d.removeClass(h.errorClass).each(function()
				{
					var d = f(this).data("msg.el");
					d && d.css(
					{
						visibility: "hidden"
					})
				})
			}]
		};
	f.each(["email", "url", "number"], function(d, h)
	{
		f.expr[":"][h] = function(d)
		{
			return d.getAttribute("type") === h
		}
	});
	f.fn.oninvalid =
		function(d)
		{
			return this[d ? "bind" : "trigger"]("OI", d)
		};
	t.fn(":email", "Please enter a valid email address", function(d, f)
	{
		return !f || v.test(f)
	});
	t.fn(":url", "Please enter a valid URL", function(d, f)
	{
		return !f || x.test(f)
	});
	t.fn(":number", "Please enter a numeric value.", function(d, f)
	{
		return j.test(f)
	});
	t.fn("[max]", "Please enter a value no larger than $1", function(d, f)
	{
		if ("" === f || l && d.is(":date")) return !0;
		var i = d.attr("max");
		return parseFloat(f) <= parseFloat(i) ? !0 : [i]
	});
	t.fn("[min]", "Please enter a value of at least $1",
		function(d, f)
		{
			if ("" === f || l && d.is(":date")) return !0;
			var i = d.attr("min");
			return parseFloat(f) >= parseFloat(i) ? !0 : [i]
		});
	t.fn("[required]", "Please complete this mandatory field.", function(d, f)
	{
		return d.is(":checkbox") ? d.is(":checked") : !!f
	});
	t.fn("[pattern]", function(d)
	{
		return RegExp("^" + d.attr("pattern") + "$").test(d.val())
	});
	f.fn.validator = function(d)
	{
		var h = this.data("validator");
		return h && (h.destroy(), this.removeData("validator")), d = f.extend(!0,
		{}, t.conf, d), this.is("form") ? this.each(function()
		{
			var i =
				f(this);
			h = new w(i.find(":input"), i, d);
			i.data("validator", h)
		}) : (h = new w(this, this.eq(0).closest("form"), d), this.data("validator", h))
	}
})(jQuery);
/*
 jQuery UI Effects 1.8.18

 Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 Dual licensed under the MIT or GPL Version 2 licenses.
 http://jquery.org/license

 http://docs.jquery.com/UI/Effects/
*/
jQuery.effects || function(f, m)
{
	function y(k)
	{
		var d;
		return k && k.constructor == Array && 3 == k.length ? k : (d = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(k)) ? [parseInt(d[1], 10), parseInt(d[2], 10), parseInt(d[3], 10)] : (d = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(k)) ? [2.55 * parseFloat(d[1]), 2.55 * parseFloat(d[2]), 2.55 * parseFloat(d[3])] : (d = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(k)) ? [parseInt(d[1], 16), parseInt(d[2],
			16), parseInt(d[3], 16)] : (d = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(k)) ? [parseInt(d[1] + d[1], 16), parseInt(d[2] + d[2], 16), parseInt(d[3] + d[3], 16)] : /rgba\(0, 0, 0, 0\)/.exec(k) ? x.transparent : x[f.trim(k).toLowerCase()]
	}

	function w()
	{
		var f = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle,
			d = {},
			h, i;
		if (f && f.length && f[0] && f[f[0]])
			for (var j = f.length; j--;) h = f[j], "string" == typeof f[h] && (i = h.replace(/\-(\w)/g, function(d, f)
			{
				return f.toUpperCase()
			}), d[i] = f[h]);
		else
			for (h in f) "string" ===
				typeof f[h] && (d[h] = f[h]);
		return d
	}

	function p(k)
	{
		var d, h;
		for (d in k) h = k[d], (null == h || f.isFunction(h) || d in r || /scrollbar/.test(d) || !/color/i.test(d) && isNaN(parseFloat(h))) && delete k[d];
		return k
	}

	function j(f, d)
	{
		var h = {
				_: 0
			},
			i;
		for (i in d) f[i] != d[i] && (h[i] = d[i]);
		return h
	}

	function l(k, d, h, i)
	{
		"object" == typeof k && (i = d, h = null, d = k, k = d.effect);
		f.isFunction(d) && (i = d, h = null, d = {});
		if ("number" == typeof d || f.fx.speeds[d]) i = h, h = d, d = {};
		f.isFunction(h) && (i = h, h = null);
		d = d ||
		{};
		h = h || d.duration;
		h = f.fx.off ? 0 : "number" == typeof h ?
			h : h in f.fx.speeds ? f.fx.speeds[h] : f.fx.speeds._default;
		i = i || d.complete;
		return [k, d, h, i]
	}

	function v(k)
	{
		return !k || "number" === typeof k || f.fx.speeds[k] || "string" === typeof k && !f.effects[k] ? !0 : !1
	}
	f.effects = {};
	f.each("backgroundColor,borderBottomColor,borderLeftColor,borderRightColor,borderTopColor,borderColor,color,outlineColor".split(","), function(k, d)
	{
		f.fx.step[d] = function(h)
		{
			if (!h.colorInit)
			{
				var i;
				i = h.elem;
				var k = d,
					j;
				do {
					j = f.curCSS(i, k);
					if (j != "" && j != "transparent" || f.nodeName(i, "body")) break;
					k = "backgroundColor"
				} while (i =
					i.parentNode);
				i = y(j);
				h.start = i;
				h.end = y(h.end);
				h.colorInit = true
			}
			h.elem.style[d] = "rgb(" + Math.max(Math.min(parseInt(h.pos * (h.end[0] - h.start[0]) + h.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(h.pos * (h.end[1] - h.start[1]) + h.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(h.pos * (h.end[2] - h.start[2]) + h.start[2], 10), 255), 0) + ")"
		}
	});
	var x = {
			aqua: [0, 255, 255],
			azure: [240, 255, 255],
			beige: [245, 245, 220],
			black: [0, 0, 0],
			blue: [0, 0, 255],
			brown: [165, 42, 42],
			cyan: [0, 255, 255],
			darkblue: [0, 0, 139],
			darkcyan: [0, 139, 139],
			darkgrey: [169, 169, 169],
			darkgreen: [0, 100, 0],
			darkkhaki: [189, 183, 107],
			darkmagenta: [139, 0, 139],
			darkolivegreen: [85, 107, 47],
			darkorange: [255, 140, 0],
			darkorchid: [153, 50, 204],
			darkred: [139, 0, 0],
			darksalmon: [233, 150, 122],
			darkviolet: [148, 0, 211],
			fuchsia: [255, 0, 255],
			gold: [255, 215, 0],
			green: [0, 128, 0],
			indigo: [75, 0, 130],
			khaki: [240, 230, 140],
			lightblue: [173, 216, 230],
			lightcyan: [224, 255, 255],
			lightgreen: [144, 238, 144],
			lightgrey: [211, 211, 211],
			lightpink: [255, 182, 193],
			lightyellow: [255, 255, 224],
			lime: [0, 255, 0],
			magenta: [255, 0, 255],
			maroon: [128, 0, 0],
			navy: [0, 0, 128],
			olive: [128, 128, 0],
			orange: [255, 165, 0],
			pink: [255, 192, 203],
			purple: [128, 0, 128],
			violet: [128, 0, 128],
			red: [255, 0, 0],
			silver: [192, 192, 192],
			white: [255, 255, 255],
			yellow: [255, 255, 0],
			transparent: [255, 255, 255]
		},
		t = ["add", "remove", "toggle"],
		r = {
			border: 1,
			borderBottom: 1,
			borderColor: 1,
			borderLeft: 1,
			borderRight: 1,
			borderTop: 1,
			borderWidth: 1,
			margin: 1,
			padding: 1
		};
	f.effects.animateClass = function(k, d, h, i)
	{
		f.isFunction(h) && (i = h, h = null);
		return this.queue(function()
		{
			var l = f(this),
				m = l.attr("style") ||
				" ",
				r = p(w.call(this)),
				v, x = l.attr("class");
			f.each(t, function(d, f)
			{
				if (k[f]) l[f + "Class"](k[f])
			});
			v = p(w.call(this));
			l.attr("class", x);
			l.animate(j(r, v),
			{
				queue: false,
				duration: d,
				easing: h,
				complete: function()
				{
					f.each(t, function(d, f)
					{
						if (k[f]) l[f + "Class"](k[f])
					});
					if (typeof l.attr("style") == "object")
					{
						l.attr("style").cssText = "";
						l.attr("style").cssText = m
					}
					else l.attr("style", m);
					i && i.apply(this, arguments);
					f.dequeue(this)
				}
			})
		})
	};
	f.fn.extend(
	{
		_addClass: f.fn.addClass,
		addClass: function(k, d, h, i)
		{
			return d ? f.effects.animateClass.apply(this, [
			{
				add: k
			}, d, h, i]) : this._addClass(k)
		},
		_removeClass: f.fn.removeClass,
		removeClass: function(k, d, h, i)
		{
			return d ? f.effects.animateClass.apply(this, [
			{
				remove: k
			}, d, h, i]) : this._removeClass(k)
		},
		_toggleClass: f.fn.toggleClass,
		toggleClass: function(k, d, h, i, j)
		{
			return "boolean" == typeof d || d === m ? h ? f.effects.animateClass.apply(this, [d ?
			{
				add: k
			} :
			{
				remove: k
			}, h, i, j]) : this._toggleClass(k, d) : f.effects.animateClass.apply(this, [
			{
				toggle: k
			}, d, h, i])
		},
		switchClass: function(k, d, h, i, j)
		{
			return f.effects.animateClass.apply(this, [
			{
				add: d,
				remove: k
			}, h, i, j])
		}
	});
	f.extend(f.effects,
	{
		version: "1.8.18",
		save: function(f, d)
		{
			for (var h = 0; h < d.length; h++) null !== d[h] && f.data("ec.storage." + d[h], f[0].style[d[h]])
		},
		restore: function(f, d)
		{
			for (var h = 0; h < d.length; h++) null !== d[h] && f.css(d[h], f.data("ec.storage." + d[h]))
		},
		setMode: function(f, d)
		{
			"toggle" == d && (d = f.is(":hidden") ? "show" : "hide");
			return d
		},
		getBaseline: function(f, d)
		{
			var h, i;
			switch (f[0])
			{
				case "top":
					h = 0;
					break;
				case "middle":
					h = 0.5;
					break;
				case "bottom":
					h = 1;
					break;
				default:
					h = f[0] / d.height
			}
			switch (f[1])
			{
				case "left":
					i =
						0;
					break;
				case "center":
					i = 0.5;
					break;
				case "right":
					i = 1;
					break;
				default:
					i = f[1] / d.width
			}
			return {
				x: i,
				y: h
			}
		},
		createWrapper: function(k)
		{
			if (k.parent().is(".ui-effects-wrapper")) return k.parent();
			var d = {
					width: k.outerWidth(!0),
					height: k.outerHeight(!0),
					"float": k.css("float")
				},
				h = f("<div></div>").addClass("ui-effects-wrapper").css(
				{
					fontSize: "100%",
					background: "transparent",
					border: "none",
					margin: 0,
					padding: 0
				}),
				i = document.activeElement;
			k.wrap(h);
			(k[0] === i || f.contains(k[0], i)) && f(i).focus();
			h = k.parent();
			"static" == k.css("position") ?
				(h.css(
				{
					position: "relative"
				}), k.css(
				{
					position: "relative"
				})) : (f.extend(d,
				{
					position: k.css("position"),
					zIndex: k.css("z-index")
				}), f.each(["top", "left", "bottom", "right"], function(f, h)
				{
					d[h] = k.css(h);
					isNaN(parseInt(d[h], 10)) && (d[h] = "auto")
				}), k.css(
				{
					position: "relative",
					top: 0,
					left: 0,
					right: "auto",
					bottom: "auto"
				}));
			return h.css(d).show()
		},
		removeWrapper: function(k)
		{
			var d, h = document.activeElement;
			return k.parent().is(".ui-effects-wrapper") ? (d = k.parent().replaceWith(k), (k[0] === h || f.contains(k[0], h)) && f(h).focus(),
				d) : k
		},
		setTransition: function(k, d, h, i)
		{
			i = i ||
			{};
			f.each(d, function(d, f)
			{
				unit = k.cssUnit(f);
				0 < unit[0] && (i[f] = unit[0] * h + unit[1])
			});
			return i
		}
	});
	f.fn.extend(
	{
		effect: function(k, d, h, i)
		{
			var j = l.apply(this, arguments),
				m = {
					options: j[1],
					duration: j[2],
					callback: j[3]
				},
				j = m.options.mode,
				p = f.effects[k];
			return f.fx.off || !p ? j ? this[j](m.duration, m.callback) : this.each(function()
			{
				m.callback && m.callback.call(this)
			}) : p.call(this, m)
		},
		_show: f.fn.show,
		show: function(f)
		{
			if (v(f)) return this._show.apply(this, arguments);
			var d = l.apply(this,
				arguments);
			d[1].mode = "show";
			return this.effect.apply(this, d)
		},
		_hide: f.fn.hide,
		hide: function(f)
		{
			if (v(f)) return this._hide.apply(this, arguments);
			var d = l.apply(this, arguments);
			d[1].mode = "hide";
			return this.effect.apply(this, d)
		},
		__toggle: f.fn.toggle,
		toggle: function(k)
		{
			if (v(k) || "boolean" === typeof k || f.isFunction(k)) return this.__toggle.apply(this, arguments);
			var d = l.apply(this, arguments);
			d[1].mode = "toggle";
			return this.effect.apply(this, d)
		},
		cssUnit: function(k)
		{
			var d = this.css(k),
				h = [];
			f.each(["em", "px", "%",
				"pt"
			], function(f, k)
			{
				0 < d.indexOf(k) && (h = [parseFloat(d), k])
			});
			return h
		}
	});
	f.easing.jswing = f.easing.swing;
	f.extend(f.easing,
	{
		def: "easeOutQuad",
		swing: function(k, d, h, i, j)
		{
			return f.easing[f.easing.def](k, d, h, i, j)
		},
		easeInQuad: function(f, d, h, i, j)
		{
			return i * (d /= j) * d + h
		},
		easeOutQuad: function(f, d, h, i, j)
		{
			return -i * (d /= j) * (d - 2) + h
		},
		easeInOutQuad: function(f, d, h, i, j)
		{
			return 1 > (d /= j / 2) ? i / 2 * d * d + h : -i / 2 * (--d * (d - 2) - 1) + h
		},
		easeInCubic: function(f, d, h, i, j)
		{
			return i * (d /= j) * d * d + h
		},
		easeOutCubic: function(f, d, h, i, j)
		{
			return i * ((d =
				d / j - 1) * d * d + 1) + h
		},
		easeInOutCubic: function(f, d, h, i, j)
		{
			return 1 > (d /= j / 2) ? i / 2 * d * d * d + h : i / 2 * ((d -= 2) * d * d + 2) + h
		},
		easeInQuart: function(f, d, h, i, j)
		{
			return i * (d /= j) * d * d * d + h
		},
		easeOutQuart: function(f, d, h, i, j)
		{
			return -i * ((d = d / j - 1) * d * d * d - 1) + h
		},
		easeInOutQuart: function(f, d, h, i, j)
		{
			return 1 > (d /= j / 2) ? i / 2 * d * d * d * d + h : -i / 2 * ((d -= 2) * d * d * d - 2) + h
		},
		easeInQuint: function(f, d, h, i, j)
		{
			return i * (d /= j) * d * d * d * d + h
		},
		easeOutQuint: function(f, d, h, i, j)
		{
			return i * ((d = d / j - 1) * d * d * d * d + 1) + h
		},
		easeInOutQuint: function(f, d, h, i, j)
		{
			return 1 > (d /= j / 2) ? i / 2 *
				d * d * d * d * d + h : i / 2 * ((d -= 2) * d * d * d * d + 2) + h
		},
		easeInSine: function(f, d, h, i, j)
		{
			return -i * Math.cos(d / j * (Math.PI / 2)) + i + h
		},
		easeOutSine: function(f, d, h, i, j)
		{
			return i * Math.sin(d / j * (Math.PI / 2)) + h
		},
		easeInOutSine: function(f, d, h, i, j)
		{
			return -i / 2 * (Math.cos(Math.PI * d / j) - 1) + h
		},
		easeInExpo: function(f, d, h, i, j)
		{
			return 0 == d ? h : i * Math.pow(2, 10 * (d / j - 1)) + h
		},
		easeOutExpo: function(f, d, h, i, j)
		{
			return d == j ? h + i : i * (-Math.pow(2, -10 * d / j) + 1) + h
		},
		easeInOutExpo: function(f, d, h, i, j)
		{
			return 0 == d ? h : d == j ? h + i : 1 > (d /= j / 2) ? i / 2 * Math.pow(2, 10 * (d - 1)) + h : i /
				2 * (-Math.pow(2, -10 * --d) + 2) + h
		},
		easeInCirc: function(f, d, h, i, j)
		{
			return -i * (Math.sqrt(1 - (d /= j) * d) - 1) + h
		},
		easeOutCirc: function(f, d, h, i, j)
		{
			return i * Math.sqrt(1 - (d = d / j - 1) * d) + h
		},
		easeInOutCirc: function(f, d, h, i, j)
		{
			return 1 > (d /= j / 2) ? -i / 2 * (Math.sqrt(1 - d * d) - 1) + h : i / 2 * (Math.sqrt(1 - (d -= 2) * d) + 1) + h
		},
		easeInElastic: function(f, d, h, i, j)
		{
			var f = 1.70158,
				l = 0,
				m = i;
			if (0 == d) return h;
			if (1 == (d /= j)) return h + i;
			l || (l = 0.3 * j);
			m < Math.abs(i) ? (m = i, f = l / 4) : f = l / (2 * Math.PI) * Math.asin(i / m);
			return -(m * Math.pow(2, 10 * (d -= 1)) * Math.sin((d * j - f) * 2 * Math.PI /
				l)) + h
		},
		easeOutElastic: function(f, d, h, i, j)
		{
			var f = 1.70158,
				l = 0,
				m = i;
			if (0 == d) return h;
			if (1 == (d /= j)) return h + i;
			l || (l = 0.3 * j);
			m < Math.abs(i) ? (m = i, f = l / 4) : f = l / (2 * Math.PI) * Math.asin(i / m);
			return m * Math.pow(2, -10 * d) * Math.sin((d * j - f) * 2 * Math.PI / l) + i + h
		},
		easeInOutElastic: function(f, d, h, i, j)
		{
			var f = 1.70158,
				l = 0,
				m = i;
			if (0 == d) return h;
			if (2 == (d /= j / 2)) return h + i;
			l || (l = j * 0.3 * 1.5);
			m < Math.abs(i) ? (m = i, f = l / 4) : f = l / (2 * Math.PI) * Math.asin(i / m);
			return 1 > d ? -0.5 * m * Math.pow(2, 10 * (d -= 1)) * Math.sin((d * j - f) * 2 * Math.PI / l) + h : 0.5 * m * Math.pow(2, -10 * (d -= 1)) * Math.sin((d * j - f) * 2 * Math.PI / l) + i + h
		},
		easeInBack: function(f, d, h, i, j, l)
		{
			l == m && (l = 1.70158);
			return i * (d /= j) * d * ((l + 1) * d - l) + h
		},
		easeOutBack: function(f, d, h, i, j, l)
		{
			l == m && (l = 1.70158);
			return i * ((d = d / j - 1) * d * ((l + 1) * d + l) + 1) + h
		},
		easeInOutBack: function(f, d, h, i, j, l)
		{
			l == m && (l = 1.70158);
			return 1 > (d /= j / 2) ? i / 2 * d * d * (((l *= 1.525) + 1) * d - l) + h : i / 2 * ((d -= 2) * d * (((l *= 1.525) + 1) * d + l) + 2) + h
		},
		easeInBounce: function(k, d, h, i, j)
		{
			return i - f.easing.easeOutBounce(k, j - d, 0, i, j) + h
		},
		easeOutBounce: function(f, d, h, i, j)
		{
			return (d /= j) < 1 / 2.75 ?
				i * 7.5625 * d * d + h : d < 2 / 2.75 ? i * (7.5625 * (d -= 1.5 / 2.75) * d + 0.75) + h : d < 2.5 / 2.75 ? i * (7.5625 * (d -= 2.25 / 2.75) * d + 0.9375) + h : i * (7.5625 * (d -= 2.625 / 2.75) * d + 0.984375) + h
		},
		easeInOutBounce: function(k, d, h, i, j)
		{
			return d < j / 2 ? 0.5 * f.easing.easeInBounce(k, 2 * d, 0, i, j) + h : 0.5 * f.easing.easeOutBounce(k, 2 * d - j, 0, i, j) + 0.5 * i + h
		}
	})
}(jQuery);
"SpotifyRemote" in window || (window.SpotifyRemote = {});
SpotifyRemote.Type = {
	DesktopClient: "desktop-client",
	WebPlayer: "webplayer"
};
SpotifyRemote.Error = {
	TRACK_UNAVAILABLE: "4303",
	USER_NOT_LOGGED_IN: "4110",
	message:
	{
		4001: "Unknown method",
		4002: "Error parsing request",
		4003: "Unknown service",
		4004: "Service not responding",
		4102: "Invalid OAuthToken",
		4103: "Expired OAuth token",
		4104: "OAuth token not verified",
		4105: "Token verification denied, too many requests",
		4106: "Token verification timeout",
		4107: "Invalid Csrf token",
		4108: "OAuth token is invalid for current user",
		4109: "Invalid Csrf path",
		4110: "No user logged in",
		4111: "Invalid scope",
		4112: "Csrf challenge failed",
		4201: "Upgrade to premium",
		4202: "Upgrade to premium or wait",
		4203: "Billing failed",
		4204: "Technical error",
		4205: "Commercial is playing",
		4301: "Content is unavailable but can be purchased",
		4302: "Premium only content",
		4303: "Content unavailable",
		"default": "Unexpected error. Please try again later."
	}
};
SpotifyRemote.createCookie = function(a, b, d)
{
	var c;
	if (d)
	{
		c = new Date;
		c.setTime(c.getTime() + d * 864E5);
		d = "; expires=" + c.toGMTString()
	}
	else d = "";
	document.cookie = a + "=" + b + d + "; path=/"
};
SpotifyRemote.EventTarget = function()
{
	this.events = {
		playmodechanged: "PLAY_MODE_CHANGED",
		playpositionchanged: "PLAY_POSITION_CHANGED",
		volumechanged: "VOLUME_CHANGED",
		onclientopening: "ON_CLIENT_OPENING",
		onclientconnected: "ON_CLIENT_CONNECTED",
		onclientconnectionfailed: "ON_CLIENT_CONNECTION_FAILED",
		onclienterror: "ON_CLIENT_ERROR",
		onclientdisconnect: "ON_CLIENT_DISCONNECT"
	}
};
SpotifyRemote.EventTarget.prototype.applyEventCallbacks = function(a)
{
	var b = this,
		d;
	for (d in this.events)
		if (this.events.hasOwnProperty(d))
		{
			var c = this.getCallbackName(d),
				e = "add" + c,
				g = "remove" + c.replace(/^on/i, "");
			(function(c)
			{
				typeof a[e] === "undefined" && (a[e] = function(a)
				{
					b.subscribe(b.events[c], a)
				});
				typeof a[g] === "undefined" && (a[g] = function(a)
				{
					b.unsubscribe(b.events[c], a)
				})
			})(d)
		}
	return a
};
SpotifyRemote.EventTarget.prototype.getCallbackName = function(a)
{
	var b = null;
	if (typeof this.events[a] !== "undefined")
	{
		a = this.events[a];
		a = a.toLowerCase();
		a = a.split("_");
		for (b = 0; b < a.length; b++) a[b] = a[b].charAt(0).toUpperCase() + a[b].slice(1);
		b = a.join("") + "Listener"
	}
	return b
};
SpotifyRemote.EventTarget.prototype.subscribe = function(a, b)
{
	void 0 === this.events[a] && (this.events[a] = []);
	this.events[a].push(b)
};
SpotifyRemote.EventTarget.prototype.unsubscribe = function(a, b)
{
	for (var d = this.events[a], c = d.length - 1; c >= 0; --c)
		if (d[c] === b)
		{
			d.splice(c, 1);
			return true
		}
	return false
};
SpotifyRemote.EventTarget.prototype.dispatch = function(a, b, d)
{
	if (this.events[a])
		for (var d = d || this, b = b instanceof Array ? b : [b], c, e = 0, g = this.events[a].length; e < g; e++)
		{
			c = this.events[a][e];
			c.apply(d, b)
		}
};
SpotifyRemote.settings = {
	extend: function(a, b)
	{
		var d, c;
		for (d in b)
		{
			c = b[d];
			b.hasOwnProperty(d) && typeof c != "undefined" && (a[d] = c)
		}
		return a
	}
};
SpotifyRemote.isDev = function()
{
	return false
};
SpotifyRemote._isDev = null;
"SpotifyRemote" in window || (window.SpotifyRemote = {});
"web" in SpotifyRemote || (SpotifyRemote.web = {});
SpotifyRemote.web.config = {
	clientUrl: "https://play.spotify.com"
};
SpotifyRemote.web.getTrackUri = function(a)
{
	var b;
	if (/spotify:track:[a-z0-9]+/ig.test(a)) return a;
	if ((b = /^spotify:trackset:(\w+:)?([a-z0-9]+(,[a-z0-9]+)*)(#\d)?$/ig.exec(a)) !== null)
	{
		a = b[2].split(",");
		b = b[4] !== null ? parseInt(b[4].substr(1)) : 0;
		b = b < a.length ? a[b] : a[0];
		return "spotify:track:" + b
	}
	return a
};
SpotifyRemote.web.remoteMessages = function()
{
	return {
		messages:
		{
			STATUS_TO_REMOTE: "SPB_in",
			STATUS_FROM_REMOTE: "SPB_out",
			CONNECTED: "SPB_connected",
			CONNECT_REQUEST_FROM_REMOTE: "SPB_connect"
		},
		init: function()
		{
			return SpotifyRemote.web.localStorageMessages()
		}
	}
}();
SpotifyRemote.addEvent = function(a, b)
{
	window.addEventListener ? window.addEventListener(a, b, false) : window.attachEvent && window.attachEvent("on" + a, b)
};
SpotifyRemote.web.localStorageMessages = function()
{
	function a(a)
	{
		var e = a.key;
		if (d[e] && document.location.href !== a.url)
			for (var a = b(a.newValue), h = 0, f = d[e].length; h < f; h++)
			{
				c = d[e][h];
				c.fn.apply(c.context || this, [a].concat(c.args))
			}
	}

	function b(a, b)
	{
		var c = "";
		try
		{
			var d = JSON.parse(a),
				c = b ? JSON.stringify(d.data) : d.data
		}
		catch (e)
		{}
		return c
	}
	var d = {},
		c, e = function()
		{
			var a = false;
			if (window.localStorage && typeof window.localStorage.setItem === "function") try
			{
				var b = "check-storage-" + Date.now();
				localStorage.setItem(b, Date.now());
				localStorage.removeItem(b);
				a = true
			}
			catch (c)
			{}
			return a
		}();
	e && SpotifyRemote.addEvent("storage", a);
	return {
		send: function(a, b)
		{
			var c = false,
				b = b ||
				{};
			b.referrerUrl = location.href;
			b.reason = "remote";
			if (e) try
			{
				var d = {
					timestamp: Date.now(),
					data: b
				};
				localStorage.setItem(a, JSON.stringify(d));
				c = true
			}
			catch (o)
			{}
			return c
		},
		listen: function(a, b, c, f)
		{
			if (e)
			{
				void 0 === d[a] && (d[a] = []);
				d[a].push(
				{
					fn: b,
					args: c,
					context: f
				})
			}
		},
		detach: function(a, b)
		{
			if (e && typeof d[a] !== "undefined" && d[a].length > 0)
				for (var c = 0, f = d[a].length, o = null; c < f; c++)
				{
					o =
						d[a][c];
					if (o.fn == b)
					{
						d[a].splice(c, 1);
						f = f - 1;
						c = c - 1
					}
				}
		},
		read: function(a, c)
		{
			var d = null;
			if (e)
			{
				d = localStorage.getItem(a);
				d = b(d, c)
			}
			return d
		}
	}
};
"SpotifyRemote" in window || (window.SpotifyRemote = {});
SpotifyRemote.init = function(a, b, d, c)
{
	var e, g;

	function j()
	{
		if (e !== null && e.isClientRunning())
		{
			f = e;
			SpotifyRemote.desktop.utils.disable()
		}
		else if (g !== null && g.isClientRunning())
		{
			f = g;
			f !== null && f.getIdentifier() === SpotifyRemote.Type.WebPlayer && f.disable()
		}
	}

	function h()
	{
		_clientOpenCheckRunning = false;
		typeof u === "function" && u(f)
	}
	var f = null;
	e = g = null;
	var o = b ? b : null,
		t = SpotifyRemote.settings.extend(
		{
			allowPopUp: true,
			shouldUseWebPlayer: false
		}, c ||
		{}),
		p = false,
		q = new SpotifyRemote.EventTarget,
		u = d;
	(function()
	{
		setTimeout(function()
			{
				if (f ===
					null)
				{
					SpotifyRemote.isDev() && console.log("client remote loaded");
					g = SpotifyRemote.desktop.remote(q,
					{
						/*oauthToken: 'NAowChgKB1Nwb3RpZnkSABoGmAEByAEBJaDrBVkSFIFi--BLYkEdK7NrbkTjuVj1CarZ',*/
            oauthToken: window.spotoken,
						fbAuthToken: o,
						allowPopup: t.allowPopUp
					},
					{
						port: void 0,
						subdomain: void 0
					});
					g.addOnWebHelperReadyListener(j);
					f = g;
					if (!p)
					{
						p = true;
						h()
					}
				}
				window.setTimeout(function()
				{
					if (t.shouldUseWebPlayer && (f === null || !f.isClientRunning()))
					{
						SpotifyRemote.isDev() && console.log("webplayer remote loaded");
						f = e = SpotifyRemote.web.remote(q,
						{
							oauthToken: a,
							fbAuthToken: o,
							allowPopup: t.allowPopUp
						});
						if (!p)
						{
							p = true;
							h()
						}
					}
				}, 400)
			},
			0)
	})();
	b = {
		events: q.events,
		playPauseTrack: function(a, b, c)
		{
			f.playPauseTrack(a, b, c)
		},
		getCurrentTrack: function()
		{
			return f.getCurrentTrack()
		},
		getCurrentURI: function()
		{
			return f.getCurrentURI()
		},
		updateClientRunning: function(a)
		{
			return f.updateClientRunning(a)
		},
		isClientRunning: function()
		{
			if (f === null)
			{
				this.updateActiveClient();
				return false
			}
			return f.isClientRunning()
		},
		playPauseCurrent: function()
		{
			return f.playPauseCurrent()
		},
		addToQueue: function()
		{
			return f.addToQueue()
		},
		pause: function()
		{
			return f.pause()
		},
		pauseSong: function()
		{
			return this.pause()
		},
		isTrackPlaying: function()
		{
			return f.isTrackPlaying()
		},
		openSpotifyURI: function(a, b)
		{
			f.openSpotifyURI(a, b)
		},
		playSpotifyURI: function(a)
		{
			f.playSpotifyURI(a)
		},
		setVolume: function(a)
		{
			f.setVolume(a)
		},
		setPlayPosition: function(a)
		{
			f.setPlayPosition(a)
		},
		setReferrer: function(a)
		{
			f.setReferrer(a)
		},
		getIdentifier: function()
		{
			var a = "";
			f !== null && (a = f.getIdentifier());
			return a
		},
		isLoggedIn: function()
		{
			var a = false;
			f !== null && (a = f.isLoggedIn());
			return a
		},
		isAutoplay: function()
		{
			return f.isAutoplay()
		},
		attach: function(a)
		{
			for (var b in a) a.hasOwnProperty(b) &&
				q.subscribe(b, a[b])
		},
		addOnClientConnectedListener: function(a)
		{
			var b = this;
			q.subscribe(this.events.onclientconnected, function()
			{
				b.updateActiveClient();
				typeof a === "function" && a()
			})
		},
		updateActiveClient: j
	};
	return b = q.applyEventCallbacks(b)
};
"SpotifyRemote" in window || (window.SpotifyRemote = {});
SpotifyRemote.desktop = {};
SpotifyRemote.desktop.config = {
	//startingPort: "https:" === window.location.protocol ? 4370 : 4371,
	//endingPort: "https:" === window.location.protocol ? 4380 : 4389,
	startingPort: "https:" === window.location.protocol ? 4382 : 4382,
	endingPort: "https:" === window.location.protocol ? 4382 : 4382,
	subdomain: ""
};
SpotifyRemote.desktop.utils = {
	_enabled: !0,
	disable: function()
	{
		this._enabled = false
	},
	resetSubdomain: function()
	{
		SpotifyRemote.desktop.config.subdomain = ""
	},
	randomString: function()
	{
		for (var a = "", b = 0; b < 10; ++b) a = a + String.fromCharCode(Math.floor(Math.random() * 26) + 97);
		return a
	},
	baseUrl: function()
	{
		var a = SpotifyRemote.desktop.config.subdomain || SpotifyRemote.desktop.utils.randomString();
		SpotifyRemote.desktop.config.subdomain = a;
		//return "https://" + a + ".spotilocal.com"
		return "http://127.0.0.1"
	},
	ajax: function(a, b, d)
	{
		var c, d = a.url + "&ref=" + encodeURIComponent(d ||
			document.referrer);
		if ("undefined" !== typeof window.XDomainRequest)
		{
			c = new XDomainRequest;
			a.abortTimer = setTimeout(function() {}, b + 1E3);
			c.onload = function()
			{
				if (typeof JSON !== "undefined")
				{
					clearTimeout(a.abortTimer);
					var b = c.responseText,
						b = JSON.parse(b);
					a.success(b);
					a.complete && a.complete(c.responseText)
				}
			};
			c.onerror = function()
			{
				clearTimeout(a.abortTimer);
				a.error && a.error(c.responseText);
				a.complete && a.complete(c.responseText)
			};
			c.ontimeout = function()
			{
				clearTimeout(a.abortTimer);
				a.error && a.error(
				{
					type: "timeout"
				});
				a.complete && a.complete(c.responseText)
			};
			c.timeout = b ? b : 5E3;
			c.open("get", d)
		}
		else
		{
			c = function()
			{
				try
				{
					return new(this.XMLHttpRequest || ActiveXObject)("MSXML2.XMLHTTP.3.0")
				}
				catch (a)
				{
					return null
				}
			}();
			c.onload = function()
			{
				var b = c.responseText,
					b = JSON.parse(b);
				a.success(b);
				typeof a.complete === "function" && a.complete(c.responseText)
			};
			c.onerror = function()
			{
				if (a.error)
				{
					a.error(c.responseText);
					typeof a.complete === "function" && a.complete(c.responseText)
				}
			};
			c.open("get", d + "&cors=")
		}
		c.send()
	},
	isPortAvailable: function(a,
		b, d, c)
	{
		if (!this._enabled) return true;
		var e = SpotifyRemote.desktop.utils.baseUrl() + ":" + a + "/service/version.json?service=remote",
			g = SpotifyRemote.desktop.config.subdomain;
		SpotifyRemote.desktop.utils.ajax(
		{
			url: e,
			success: function(b)
			{
				d && d(b, a, g)
			},
			error: function(e)
			{
				a < b ? SpotifyRemote.desktop.utils.isPortAvailable(++a, b, d, c) : c && c(e)
			}
		}, 5E3)
	}
};
SpotifyRemote.desktop.base = function()
{
	var a = SpotifyRemote.desktop.config,
		b = a.startingPort,
		d = a.endingPort;
	return {
		isDesktopClientRunning: function(a, e)
		{
			SpotifyRemote.desktop.utils.isPortAvailable(b, d, function(b, d, e)
			{
				a && a(d, e)
			}, function()
			{
				e && e()
			})
		}
	}
};
SpotifyRemote.desktop.remote = function(a, b, d)
{
	function c(a, b)
	{
		if (w.allowPopup)
		{
			b || (b = 5E3);
			G = window.open("http://" + location.host + "/openspotify/?spuri=" + a + "&closedelay=" + b, "sp", "status=0,toolbar=0,location=0,menubar=0,directories=0,resizable=0,scrollbars=0,height=80,width=250,left=" + (screen.width - 250) / 2 + ",top=" + (screen.height - 80) / 2)
		}
	}

	function e(a, b)
	{
		SpotifyRemote.desktop.utils.isPortAvailable(SpotifyRemote.desktop.config.startingPort, SpotifyRemote.desktop.config.endingPort, function(b, c)
		{
			SpotifyRemote.isDev() &&
				console.log("result", b);
			v = c;
			A = true;
			if (G)
			{
				G.close();
				G = null
			}
			D = b.running === false;
			H = false;
			b.running !== false && a && a();
			typeof L == "function" && L()
		}, function(a)
		{
			SpotifyRemote.isDev() && console.log("error", a);
			b && b()
		})
	}

	function g()
	{
		r && y(
		{
			url: h("remote/login.json",
			{
				csrf: x,
				oauth: r
			}),
			success: function(a)
			{
				a.error && a.error.type == "4102" && (r = "")
			}
		})
	}

	function j(a)
	{
		var b = 60;
		a && (b = 1);
		M = E = true;
		y(
		{
			url: h("remote/status.json",
			{
				csrf: x,
				oauth: w.oauthToken,
				returnon: "login,logout,play,pause,error,ap",
				returnafter: b
			}),
			complete: function()
			{
				M =
					false
			},
			success: function(a)
			{
				if (a.error)
				{
					SpotifyRemote.isDev() && console.log("connect success but error", a.error.type);
					if (a.running === false)
					{
						SpotifyRemote.isDev() && console.log("client not running but webhelper in place");
						D = true;
						E = false
					}
					else if (a.error.type == "4110")
					{
						B = false;
						setTimeout(function()
						{
							j(true)
						}, 1E3);
						g()
					}
					else a.error.type == "4107" ? f(j) : a.error.type == "4303" ? j(false) : F(
					{
						track: s,
						playing: false
					})
				}
				else
				{
					SpotifyRemote.isDev() && console.log("connect success");
					B = H = true;
					r = null;
					F(a);
					j(false);
					n !== "" && setTimeout(q,
						2E3)
				}
			},
			error: function(a)
			{
				SpotifyRemote.isDev() && console.log("connect error", arguments);
				A = B = E = false;
				setTimeout(function()
				{
					k.dispatch(k.events.onclientdisconnect, a)
				}, 300)
			}
		}, b * 1E3 + 5E3)
	}

	function h(a, b)
	{
		var c = P() + ":" + v + "/" + a,
			d = [],
			e = b ||
			{},
			z;
		for (z in e) d.push(encodeURIComponent(z) + "=" + encodeURIComponent(e[z]));
		return c + "?" + d.join("&")
	}

	function f(a)
	{
		y(
		{
			url: h("simplecsrf/token.json"),
			success: function(b)
			{
				SpotifyRemote.isDev() && console.log("csrf successful");
				x = b.token;
				k.dispatch(k.events.onclientconnected,
				{
					running: !D
				});
				a && a(true)
			},
			error: function()
			{
				SpotifyRemote.isDev() && console.log("csrf failure")
			}
		})
	}

	function o()
	{
		I || t(0, H ? Q : R)
	}

	function t(a, b)
	{
		if (a >= b)
		{
			I = false;
			k.dispatch(k.events.onclientconnectionfailed,
			{})
		}
		else
		{
			I = true;
			e(function()
			{
				I = false;
				f(j)
			}, function()
			{
				var c = Math.min((a + 1) * 1E3, S);
				setTimeout(function()
				{
					t(a + 1, b)
				}, c)
			})
		}
	}

	function p(a)
	{
		var b = a.error.type;
		if (!a.error.message) a.error.message = b && typeof SpotifyRemote.Error.message[b] !== "undefined" ? SpotifyRemote.Error.message[b] : SpotifyRemote.Error.message["default"];
		return a
	}

	function q()
	{
		n !== "" && y(
		{
			url: h("remote/play.json",
			{
				csrf: x,
				oauth: w.oauthToken,
				uri: n,
				context: z
			}),
			success: function(a)
			{
				SpotifyRemote.isDev() && console.log("play success");
				if (a.error)
				{
					a.error.uri = n;
					p(a);
					k.dispatch(k.events.onclienterror, a.error)
				}
				else F(a);
				n = ""
			},
			error: function() {}
		})
	}

	function u()
	{
		n !== "" && y(
		{
			url: h("remote/queue.json",
			{
				csrf: x,
				oauth: w.oauthToken,
				uri: n,
				context: z
			}),
			success: function(a)
			{
				SpotifyRemote.isDev() && console.log("successfully added to queue");
				if (a.error)
				{
					a.error.uri = n;
					p(a);
					k.dispatch(k.events.onclienterror,
						a.error)
				}
				else F(a);
				n = ""
			},
			error: function() {}
		})
	}

	function C(a)
	{
		a = a || J;
		n = "";
		y(
		{
			url: h("remote/pause.json",
			{
				pause: a,
				csrf: x,
				oauth: w.oauthToken
			}),
			success: function(a)
			{
				F(a)
			}
		})
	}

	function K()
	{
		y(
		{
			url: h("remote/open.json"),
			success: function(a)
			{
				if (a.running)
				{
					D = false;
					m()
				}
			}
		}, 15E3)
	}

	function m()
	{
		H = false;
		if (A)
			if (D)
			{
				SpotifyRemote.isDev() && console.log("webhelper running");
				K()
			}
		else if (E)
		{
			SpotifyRemote.isDev() && console.log("just play it");
			if (!B && !M)
			{
				SpotifyRemote.isDev() && console.log("focus client");
				c("spotify:", 500)
			}
			else if (s &&
				s.track_resource.uri == n)
			{
				SpotifyRemote.isDev() && console.log("playpause");
				C()
			}
			else
			{
				SpotifyRemote.isDev() && console.log("play");
				q()
			}
		}
		else
		{
			SpotifyRemote.isDev() && console.log("longpoll running");
			j(true)
		}
		else
		{
			SpotifyRemote.isDev() && console.log("client not running");
			A || k.dispatch(k.events.onclientopening,
			{});
			o()
		}
	}

	function N(a)
	{
		a = parseFloat(a);
		SpotifyRemote.isDev() && console.log("Warning: volume control not yet implemented for desktop client remote.");
		y(
		{
			url: h("remote/volume.json",
			{
				volume: a,
				csrf: x,
				oauth: w.oauthToken
			}),
			success: function(a)
			{
				SpotifyRemote.isDev() && console.log("called setVolume", a)
			}
		})
	}

	function O(a)
	{
		var a = function(a)
			{
				var b = Math.floor(a / 60),
					a = (a % 60).toFixed(3);
				return b + ":" + a
			}(a),
			b = s ? s.track_resource.uri : null;
		b && a && y(
		{
			url: h("remote/play.json",
			{
				csrf: x,
				oauth: w.oauthToken,
				uri: b + "#" + a,
				context: z
			}),
			success: function(a)
			{
				SpotifyRemote.isDev() && console.log("called setPlayPosition", a)
			}
		})
	}
	var d = d ||
		{},
		w = b ||
		{},
		b = SpotifyRemote.desktop.utils,
		x = "",
		r = w.fbAuthToken || null,
		v = d.port || SpotifyRemote.desktop.config.startingPort;
	d.subdomain || b.randomString();
	var n = "",
		z = "",
		B = false,
		E = false,
		M = false,
		A = d.port && d.subdomain,
		J = false,
		s = null,
		H = true,
		I = false,
		Q = 2,
		R = 90,
		S = 5E3,
		G, D = false,
		y = b.ajax,
		P = b.baseUrl,
		L = null,
		k = a || new SpotifyRemote.EventTarget,
		F = function()
		{
			function a()
			{
				b = null;
				if (!c || !c.track && s) c = {
					track: s,
					playing: false
				};
				if (!(c.track && typeof c.track.track_resource === "undefined"))
				{
					c.track && c.track.track_resource.uri === (s ? s.track_resource.uri : null) && k.dispatch(k.events.playpositionchanged,
					{
						value: c.playing_position
					});
					if (c.track)
					{
						J = c.playing;
						k.dispatch(k.events.playmodechanged,
						{
							track: c.track,
							status: J,
							playing_position: c.playing_position
						});
						s = c.track
					}
				}
			}
			var b, c;
			return function(d)
			{
				c = d;
				b && clearTimeout(b);
				b = setTimeout(a, 100)
			}
		}();
	A ? f(j) : o();
	return {
		getIdentifier: function()
		{
			return SpotifyRemote.Type.DesktopClient
		},
		addListener: function(a, b)
		{
			k.subscribe(a, b)
		},
		removeListener: function(a, b)
		{
			k.unsubscribe(a, b)
		},
		playPauseTrack: function(a, b, c)
		{
			n = "spotify:" + b + ":" + a;
			z = c;
			!B && E ? setTimeout(m, 1E3) : m()
		},
		playPauseCurrent: function()
		{
			C()
		},
		addToQueue: function(a)
		{
			n =
				a;
			u()
		},
		pause: function()
		{
			C(true)
		},
		getCurrentTrack: function()
		{
			return s
		},
		getCurrentURI: function()
		{
			return s ? s.track_resource.uri : null
		},
		updateClientRunning: function() {},
		isClientRunning: function()
		{
			return A
		},
		isLoggedIn: function()
		{
			return B
		},
		isTrackPlaying: function()
		{
			return J
		},
		openSpotifyURI: function(a, b)
		{
			c(a, b);
			o()
		},
		playSpotifyURI: function(a)
		{
			z = n = a;
			m()
		},
		setVolume: function(a)
		{
			N(a)
		},
		setPlayPosition: function(a)
		{
			O(a)
		},
		setReferrer: function() {},
		isAutoplay: function()
		{
			return false
		},
		addOnWebHelperReadyListener: function(a)
		{
			typeof a ==
				"function" && (L = a)
		}
	}
};
"SpotifyRemote" in window || (window.SpotifyRemote = {});
"web" in SpotifyRemote || (SpotifyRemote.web = {});
SpotifyRemote.web.remote = function(a)
{
	function b()
	{
		t && (o ? f && f.track_resource.uri == j ? d(!p) : d(true) : u || (u = setInterval(c, K)))
	}

	function d(a)
	{
		a = {
			track: j,
			context: h,
			play: a,
			time: Date.now()
		};
		SpotifyRemote.isDev() && console.log("[SPB play-pause]", a);
		r.send(v.STATUS_FROM_REMOTE, a)
	}

	function c()
	{
		SpotifyRemote.isDev() && console.log("[SPB try to connect...]");
		if (o) SpotifyRemote.isDev() && console.log("[SPB already connected...]");
		else
		{
			r.send(v.CONNECT_REQUEST_FROM_REMOTE);
			q++;
			if (q > C)
			{
				clearInterval(u);
				u = null;
				q = 0
			}
		}
	}

	function e(a)
	{
		if (typeof a.error !==
			"undefined")
		{
			a = {
				type: x[a.error],
				message: a.message,
				uri: typeof a.uri !== "undefined" ? a.uri : ""
			};
			m.dispatch(m.events.onclienterror, a);
			SpotifyRemote.isDev() && console.log("[SPB client error]", a)
		}
		else
		{
			m.dispatch(N, a);
			n(
			{
				track:
				{
					track_resource:
					{
						uri: a.track
					},
					artist_resource:
					{
						uri: a.track
					},
					album_resource:
					{
						uri: a.track
					}
				},
				playing_position: (a.playing_position || 0) / 1E3,
				playing: a.playing,
				time: a.time
			});
			SpotifyRemote.isDev() && console.log("[SPB status message]", a)
		}
	}

	function g(a)
	{
		var b;
		if (a === true)
		{
			b = O;
			o = t = true;
			m.dispatch(m.events.onclientconnected);
			clearInterval(u);
			u = null;
			q = 0
		}
		else
		{
			b = w;
			o = t = false;
			m.dispatch(m.events.onclientdisconnected);
			n(null)
		}
		m.dispatch(b, a);
		SpotifyRemote.isDev() && console.log("[SPB " + b + "]", a)
	}
	var j = "",
		h = "",
		f = null,
		o = false,
		t = false,
		p = false,
		q = 0,
		u, C = 30,
		K = 2E3,
		m = a || new SpotifyRemote.EventTarget,
		N = "STATUS_MESSAGE",
		O = "CLIENT_CONNECTED",
		w = "CLIENT_DISCONNECTED",
		x = {
			unplayable: "4303"
		},
		r = SpotifyRemote.web.remoteMessages.init(),
		v = SpotifyRemote.web.remoteMessages.messages,
		n = function()
		{
			function a()
			{
				SpotifyRemote.isDev() && console.log("dispatch playmodechanged",
					c);
				b = null;
				if (!c || !c.track && f) c = {
					track: f,
					playing: false
				};
				if (c.track)
				{
					p = c.playing;
					m.dispatch(m.events.playmodechanged,
					{
						track: c.track,
						status: p,
						playing_position: c.playing_position,
						time: c.time
					});
					f = c.track
				}
			}
			var b, c;
			return function(d)
			{
				c = d;
				b && clearTimeout(b);
				b = setTimeout(a, 50)
			}
		}();
	setTimeout(function()
	{
		if (!o)
		{
			setTimeout(c, 500);
			setTimeout(function() {}, 1E3)
		}
		r.listen(v.STATUS_TO_REMOTE, e);
		r.listen(v.CONNECTED, g)
	}, 500);
	return {
		disable: function()
		{
			r.detach(v.STATUS_TO_REMOTE, e);
			r.detach(v.CONNECTED, g)
		},
		getIdentifier: function()
		{
			return SpotifyRemote.Type.WebPlayer
		},
		addListener: function(a, b)
		{
			m.subscribe(a, b)
		},
		removeListener: function(a, b)
		{
			m.unsubscribe(a, b)
		},
		playPauseTrack: function(a, c, d)
		{
			j = "spotify:" + c + ":" + a;
			h = d;
			b()
		},
		playPauseCurrent: function()
		{
			d(!p)
		},
		addToQueue: function() {},
		pause: function()
		{
			d(false)
		},
		getCurrentTrack: function()
		{
			return f
		},
		getCurrentURI: function()
		{
			return f !== null ? f.track_resource.uri : null
		},
		updateClientRunning: function(a, b)
		{
			t = a;
			typeof b !== "undefined" && (p = b)
		},
		isClientRunning: function()
		{
			return t
		},
		isLoggedIn: function()
		{
			return true
		},
		isTrackPlaying: function()
		{
			return p
		},
		openSpotifyURI: function() {},
		playSpotifyURI: function(a)
		{
			j = SpotifyRemote.web.getTrackUri(a);
			h = a.indexOf("#") > -1 ? a.replace("#", ":#:") : a;
			b()
		},
		setVolume: function(a)
		{
			a = {
				volume: a
			};
			SpotifyRemote.isDev() && console.log("[SPB volume]", a);
			r.send(v.STATUS_FROM_REMOTE, a)
		},
		setPlayPosition: function(a)
		{
			a = {
				position: a
			};
			SpotifyRemote.isDev() && console.log("[SPB play-position]", a);
			r.send(v.STATUS_FROM_REMOTE, a)
		},
		setReferrer: function() {},
		isAutoplay: function()
		{
			return h.indexOf("spotify:trackset:") < 0
		}
	}
};
var seekerInterval, currentTrack, animations = [],
	animationRunning = !1,
	copyLinkSelectedAtLeastOnce = !1,
	embedCodeSelectedAtLeastOnce = !1,
	downloadViewShowedAtLeastOnce = !1,
	emailRegViewShowedAtLeastOnce = !1,
	mode = "mode-compact",
	PLAYER_HEIGHT = 80,
	PLAYER_MIN_WIDTH = 210,
	ENGAGEVIEW_MIN_HEIGHT = 209,
	HTTP_SPOTIFY_OPEN_BASE = "http://open.spotify.com";

function renderWidget()
{
	resizeWidget();
	firstItem = $("#content").children().first();
	updateStatusBar(firstItem);
	$(".player .meta .progress-bar-container .time-spent").html(firstItem.attr("data-duration"));
	_populateShareInfo();
	$("#outerWidgetContainer").removeClass("loading")
}

function resizeWidget()
{
	var a = $(window).width(),
		b = $(window).height(),
		d = $("body"),
		c, e;
	b - 80 > a ? (c = a + 80 + "px", e = "100%") : (e = b - 80 + "px", c = "100%");
	a >= PLAYER_MIN_WIDTH && b >= ENGAGEVIEW_MIN_HEIGHT + PLAYER_HEIGHT ? (mode = "mode-large", $("#outerWidgetContainer").css(
	{
		width: e,
		height: c
	})) : (mode = "mode-compact", $("#outerWidgetContainer").css(
	{
		width: "auto",
		height: "100%"
	}));
	"mode-large" === mode && (!0 !== renderListView || "track" === contextType) ? d.addClass("engage") : d.removeClass("engage");
	d.removeClass("mode-large").removeClass("mode-compact");
	d.addClass(mode)
}

function _populateShareInfo()
{
	var a = "https://" + document.location.host + "/?uri=" + dataContext,
		b = $("#widgetContainer").width(),
		d = $("#widgetContainer").height();
	$("#embedcodeval").attr("value", '<iframe src="' + a + '" frameborder="0" allowtransparency="true" width="' + b + '" height="' + d + '"></iframe>');
	$("#copyLinkVal").attr("value", HTTP_SPOTIFY_OPEN_BASE + "/" + dataContext.split(":").slice(1).join("/"))
}
$(window).resize(resizeWidget);

function updateStatusBar(a)
{
	var b = +a.attr("data-index");
	$(".player, #engageView").attr("rel", a.attr("data-track"));
	$(".player .meta .titles .track-name").html(a.find(".track-title").attr("rel"));
	$(".player .meta .titles .artist-name").html(a.find(".artist").attr("rel"));
	var d = a.attr("data-small-ca"),
		c = $(".player .album-art-container .album-art .art");
	c.attr("src") != d && (d ? (c.attr("src", d), c.removeClass("hidden")) : c.addClass("hidden"));
	switch (b)
	{
		case 0:
			_changeStatus("left", "disable");
			_changeStatus("right",
				"enable");
			break;
		case a.parent().children().length - 1:
			_changeStatus("left", "enable");
			_changeStatus("right", "disable");
			break;
		default:
			_changeStatus("left", "enable"), _changeStatus("right", "enable")
	}
	currentTrack = a;
	setAlbums(b)
}

function setAlbums(a)
{
	var b, a = {
		left: $('[data-index="' + (a - 1) + '"]').attr("data-ca"),
		middle: $('[data-index="' + a + '"]').attr("data-ca"),
		right: $('[data-index="' + (a + 1) + '"]').attr("data-ca")
	};
	for (b in a) a.hasOwnProperty(b) && a[b] && ($(".cover-art-container ." + b + " .album-art").attr("style", 'background-image:url("' + a[b] + '")'), $(".cover-art-container ." + b + " .album-art").removeClass("hidden"))
}

function _changeStatus(a, b)
{
	var d = $(),
		c = $();
	switch (a)
	{
		case "left":
			d = $(".player .skip-back");
			c = $(".cover-art-container .left");
			break;
		case "right":
			d = $(".player .skip-fwd"), c = $(".cover-art-container .right")
	}
	switch (b)
	{
		case "enable":
			d.show();
			c.removeClass("invisible");
			break;
		case "disable":
			d.hide(), c.addClass("invisible")
	}
}

function getTrackGivenOffset(a, b)
{
	var d = a.parent().children(),
		c = d.length - 1,
		e = +a.attr("data-index"),
		g = 0 === e ? -1 : e - 1,
		c = e == c ? -1 : e + 1;
	return 0 < b && -1 == c || 0 > b && -1 == g ? null : $(d[0 < b ? c : g])
}

function nextOrPreviousSong(a)
{
	if (currentTrack)
	{
		var b = getTrackGivenOffset(currentTrack, a);
		b && (b.hasClass("unavailable") ? (currentTrack = b, nextOrPreviousSong(a)) : (updateStatusBar(b), window.triggerPlayPause && window.SPR && window.SPR.isTrackPlaying() && triggerPlayPause(b, null, !0)))
	}
}

function selectNextSong()
{
	nextOrPreviousSong(1)
}

function selectPreviousSong()
{
	nextOrPreviousSong(-1)
}

function showOverlay(a)
{
	2 > a && !spotifyAvailableInCountry && (a = 3);
	(0 === a || 1 === a) && !downloadViewShowedAtLeastOnce ? (downloadViewShowedAtLeastOnce = !0, l(5)) : 3 === a && !emailRegViewShowedAtLeastOnce && (emailRegViewShowedAtLeastOnce = !0, l(6));
	$(".ihavespotify, .helpsupport").show();
	$(".install-tutorial-pop").hide();
	$('[class^="overlay-item-"]').hide();
	$(".overlay-item-" + a).show();
	$("#overlays").fadeIn()
}

function closeOverlay()
{
	$("#instructionBrowse").scrollable().stop();
	$("#overlays").fadeOut(function()
	{
		$(".overlay-common").hide()
	})
}

function l(a)
{
	/*$.ajax(
	{
		url: "/l/?t=" + a + "&" + getViewPlayerString() + "&ref=" + encodeURIComponent(frameReferrer)
	})*/
}

function getView()
{
	return contextType + "-" + (!renderListView || "track" == contextType ? "coverart" : "list")
}

function getGACategory()
{
	return testLeg + "-" + getView() + "-" + mode
}

function getViewPlayerString()
{
	return "v=" + getView() + "&p=" + mode
}

function isSpotified()
{
	return "1" == Get_Cookie("spotified")
}

function setSpotified(a)
{
	Set_Cookie("spotified", a ? "1" : "0", 365)
}

function Set_Cookie(a, b, d, c, e, g)
{
	var j = new Date;
	j.setTime(j.getTime());
	d && (d *= 864E5);
	j = new Date(j.getTime() + d);
	document.cookie = a + "=" + escape(b) + (d ? ";expires=" + j.toGMTString() : "") + (c ? ";path=" + c : "") + (e ? ";domain=" + e : "") + (g ? ";secure" : "")
}

function Get_Cookie(a)
{
	var b = document.cookie.split(";"),
		d = "",
		c = "",
		e = "";
	for (i = 0; i < b.length; i++)
		if (d = b[i].split("="), c = d[0].replace(/^\s+|\s+$/g, ""), c == a) return 1 < d.length && (e = unescape(d[1].replace(/^\s+|\s+$/g, ""))), e;
	return null
}
(function()
{
	var a = jQuery.event.special,
		b = "D" + +new Date,
		d = "D" + (+new Date + 1);
	a.scrollstart = {
		setup: function()
		{
			var c, d = function(b)
			{
				var d = arguments;
				c ? clearTimeout(c) : (b.type = "scrollstart", jQuery.event.handle.apply(this, d));
				c = setTimeout(function()
				{
					c = null
				}, a.scrollstop.latency)
			};
			jQuery(this).bind("scroll", d).data(b, d)
		},
		teardown: function()
		{
			jQuery(this).unbind("scroll", jQuery(this).data(b))
		}
	};
	a.scrollstop = {
		latency: 300,
		setup: function()
		{
			var b, e = function(d)
			{
				var e = this,
					h = arguments;
				b && clearTimeout(b);
				b = setTimeout(function()
				{
					b =
						null;
					d.type = "scrollstop";
					jQuery.event.handle.apply(e, h)
				}, a.scrollstop.latency)
			};
			jQuery(this).bind("scroll", e).data(d, e)
		},
		teardown: function()
		{
			jQuery(this).unbind("scroll", jQuery(this).data(d))
		}
	}
})();
$(".embed").click(function(a)
{
	a.preventDefault();
	showOverlay(2);
	return !1
});
$("#engageView .cover-art-container .right, .player .meta .progress-bar-container .skip-fwd").click(function(a)
{
	a.preventDefault();
	1 < $("#content").children().length && selectNextSong();
	return !1
});
$("#engageView .cover-art-container .left, .player .meta .progress-bar-container .skip-back").click(function(a)
{
	a.preventDefault();
	1 < $("#content").children().length && selectPreviousSong();
	return !1
});
$("#embedcodeval").click(function()
{
	this.focus();
	this.select();
	embedCodeSelectedAtLeastOnce || l(3);
	embedCodeSelectedAtLeastOnce = !0
});
$("#copyLinkVal").click(function()
{
	this.focus();
	this.select();
	copyLinkSelectedAtLeastOnce || l(4);
	copyLinkSelectedAtLeastOnce = !0
});
$(".tc-link").click(function(a)
{
	a.preventDefault();
	window.open("http://www.spotify.com/se/legal/end-user-agreement/");
	return !1
});
$(".pp-link").click(function(a)
{
	a.preventDefault();
	window.open("http://www.spotify.com/se/legal/privacy-policy/");
	return !1
});
$(".embed-tc-link").click(function(a)
{
	a.preventDefault();
	window.open("http://developer.spotify.com/technologies/spotify-play-button/terms-of-use/");
	return !1
});
$(".helpsupport").click(function(a)
{
	a.preventDefault();
	window.open("http://www.spotify.com/se/help/overview/");
	return !1
});
$(".submitEmail").click(function(a)
{
	a.preventDefault();
	a = $(".text-input-email").attr("value");
	"" !== a && ($.ajax(
	{
		url: "/l/?t=10&email=" + a + "&ref=" + encodeURIComponent(frameReferrer) + "&" + getViewPlayerString()
	}), closeOverlay());
	return !1
});
$(".player .logo").click(function(a)
{
	a.preventDefault();
	window.open("http://www.spotify.com/");
	return !1
});
/*
 Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 Licensed under the MIT License (LICENSE.txt).

 Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 Thanks to: Seamus Leahy for adding deltaX and deltaY

 Version: 3.0.6

 Requires: 1.2.2+
*/
(function(a)
{
	function P(x)
	{
		var c = x || window.event,
			h = [].slice.call(arguments, 1),
			m = 0,
			T = 0,
			M = 0,
			x = a.event.fix(c);
		x.type = "mousewheel";
		c.wheelDelta && (m = c.wheelDelta / 120);
		c.detail && (m = -c.detail / 3);
		M = m;
		void 0 !== c.axis && c.axis === c.HORIZONTAL_AXIS && (M = 0, T = -1 * m);
		void 0 !== c.wheelDeltaY && (M = c.wheelDeltaY / 120);
		void 0 !== c.wheelDeltaX && (T = -1 * c.wheelDeltaX / 120);
		h.unshift(x, m, T, M);
		return (a.event.dispatch || a.event.handle).apply(this, h)
	}
	var h = ["DOMMouseScroll", "mousewheel"];
	if (a.event.fixHooks)
		for (var m = h.length; m;) a.event.fixHooks[h[--m]] =
			a.event.mouseHooks;
	a.event.special.mousewheel = {
		setup: function()
		{
			if (this.addEventListener)
				for (var a = h.length; a;) this.addEventListener(h[--a], P, !1);
			else this.onmousewheel = P
		},
		teardown: function()
		{
			if (this.removeEventListener)
				for (var a = h.length; a;) this.removeEventListener(h[--a], P, !1);
			else this.onmousewheel = null
		}
	};
	a.fn.extend(
	{
		mousewheel: function(a)
		{
			return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
		},
		unmousewheel: function(a)
		{
			return this.unbind("mousewheel", a)
		}
	})
})(jQuery);
/*
 jScrollPane - v2.0.0beta11 - 2011-07-04
 http://jscrollpane.kelvinluck.com/

 Copyright (c) 2010 Kelvin Luck
 Dual licensed under the MIT and GPL licenses.
*/
(function(a, P, h)
{
	a.fn.jScrollPane = function(m)
	{
		function x(c, m)
		{
			function x(b)
			{
				var f, p, i, o, j, D = !1,
					l = !1;
				d = b;
				if (e === h) o = c.scrollTop(), j = c.scrollLeft(), c.css(
				{
					overflow: "hidden",
					padding: 0
				}), n = c.innerWidth() + N, k = c.innerHeight(), c.width(n), e = a('<div class="jspPane" />').css("padding", ma).append(c.children()), g = a('<div class="jspContainer" />').css(
				{
					width: n + "px",
					height: k + "px"
				}).append(e).appendTo(c);
				else
				{
					c.css("width", "");
					D = d.stickToBottom && ua();
					l = d.stickToRight && va();
					if (i = c.innerWidth() + N != n || c.outerHeight() !=
						k) n = c.innerWidth() + N, k = c.innerHeight(), g.css(
					{
						width: n + "px",
						height: k + "px"
					});
					if (!i && na == t && e.outerHeight() == s)
					{
						c.width(n);
						return
					}
					na = t;
					e.css("width", "");
					c.width(n);
					g.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
				}
				e.css("overflow", "auto");
				t = b.contentWidth ? b.contentWidth : e[0].scrollWidth;
				s = e[0].scrollHeight;
				e.css("overflow", "");
				ga = t / n;
				Z = s / k;
				y = 1 < Z;
				w = 1 < ga;
				if (!w && !y) c.removeClass("jspScrollable"), e.css(
				{
					top: 0,
					width: g.width() - N
				}), g.unbind(ha), e.find(":input,a").unbind("focus.jsp"), c.attr("tabindex",
					"-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp"), oa(), pa();
				else
				{
					c.addClass("jspScrollable");
					if (b = d.maintainPosition && (q || r)) f = E(), p = F();
					T();
					P();
					wa();
					b && (Q(l ? t - n : f, !1), G(D ? s - k : p, !1));
					xa();
					ya();
					za();
					d.enableKeyboardNavigation && Aa();
					d.clickOnTrack && Ba();
					Ca();
					d.hijackInternalLinks && qa()
				}
				d.autoReinitialise && !$ ? $ = setInterval(function()
				{
					x(d)
				}, d.autoReinitialiseDelay) : !d.autoReinitialise && $ && clearInterval($);
				o && c.scrollTop(0) && G(o, !1);
				j && c.scrollLeft(0) && Q(j, !1);
				c.trigger("jsp-initialised", [w || y])
			}

			function T()
			{
				y && (g.append(a('<div class="jspVerticalBar" />').append(a('<div class="jspCap jspCapTop" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragTop" />'), a('<div class="jspDragBottom" />'))), a('<div class="jspCap jspCapBottom" />'))), aa = g.find(">.jspVerticalBar"), A = aa.find(">.jspTrack"), u = A.find(">.jspDrag"), d.showArrows && (U = a('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", H(0, -1)).bind("click.jsp", R), V = a('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",
					H(0, 1)).bind("click.jsp", R), d.arrowScrollOnHover && (U.bind("mouseover.jsp", H(0, -1, U)), V.bind("mouseover.jsp", H(0, 1, V))), ra(A, d.verticalArrowPositions, U, V)), I = k, g.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function()
				{
					I = I - a(this).outerHeight()
				}), u.hover(function()
				{
					u.addClass("jspHover")
				}, function()
				{
					u.removeClass("jspHover")
				}).bind("mousedown.jsp", function(b)
				{
					a("html").bind("dragstart.jsp selectstart.jsp", R);
					u.addClass("jspActive");
					var f = b.pageY - u.position().top;
					a("html").bind("mousemove.jsp",
						function(b)
						{
							O(b.pageY - f, false)
						}).bind("mouseup.jsp mouseleave.jsp", sa);
					return false
				}), M())
			}

			function M()
			{
				A.height(I + "px");
				q = 0;
				ia = d.verticalGutter + A.outerWidth();
				e.width(n - ia - N);
				try
				{
					0 === aa.position().left && e.css("margin-left", ia + "px")
				}
				catch (b)
				{}
			}

			function P()
			{
				w && (g.append(a('<div class="jspHorizontalBar" />').append(a('<div class="jspCap jspCapLeft" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragLeft" />'), a('<div class="jspDragRight" />'))), a('<div class="jspCap jspCapRight" />'))),
					ba = g.find(">.jspHorizontalBar"), B = ba.find(">.jspTrack"), v = B.find(">.jspDrag"), d.showArrows && (W = a('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", H(-1, 0)).bind("click.jsp", R), X = a('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", H(1, 0)).bind("click.jsp", R), d.arrowScrollOnHover && (W.bind("mouseover.jsp", H(-1, 0, W)), X.bind("mouseover.jsp", H(1, 0, X))), ra(B, d.horizontalArrowPositions, W, X)), v.hover(function()
					{
						v.addClass("jspHover")
					}, function()
					{
						v.removeClass("jspHover")
					}).bind("mousedown.jsp",
						function(b)
						{
							a("html").bind("dragstart.jsp selectstart.jsp", R);
							v.addClass("jspActive");
							var f = b.pageX - v.position().left;
							a("html").bind("mousemove.jsp", function(b)
							{
								S(b.pageX - f, false)
							}).bind("mouseup.jsp mouseleave.jsp", sa);
							return false
						}), z = g.innerWidth(), ta())
			}

			function ta()
			{
				g.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function()
				{
					z -= a(this).outerWidth()
				});
				B.width(z + "px");
				r = 0
			}

			function wa()
			{
				if (w && y)
				{
					var b = B.outerHeight(),
						f = A.outerWidth();
					I -= b;
					a(ba).find(">.jspCap:visible,>.jspArrow").each(function()
					{
						z +=
							a(this).outerWidth()
					});
					z -= f;
					k -= f;
					n -= b;
					B.parent().append(a('<div class="jspCorner" />').css("width", b + "px"));
					M();
					ta()
				}
				w && e.width(g.outerWidth() - N + "px");
				s = e.outerHeight();
				Z = s / k;
				w && (J = Math.ceil(1 / ga * z), J > d.horizontalDragMaxWidth ? J = d.horizontalDragMaxWidth : J < d.horizontalDragMinWidth && (J = d.horizontalDragMinWidth), v.width(J + "px"), K = z - J, ja(r));
				y && (L = Math.ceil(1 / Z * I), L > d.verticalDragMaxHeight ? L = d.verticalDragMaxHeight : L < d.verticalDragMinHeight && (L = d.verticalDragMinHeight), u.height(L + "px"), C = I - L, ka(q))
			}

			function ra(b,
				f, a, c)
			{
				var d = "before",
					j = "after";
				"os" == f && (f = /Mac/.test(navigator.platform) ? "after" : "split");
				f == d ? j = f : f == j && (d = f, f = a, a = c, c = f);
				b[d](a)[j](c)
			}

			function H(b, f, a)
			{
				return function()
				{
					Da(b, f, this, a);
					this.blur();
					return !1
				}
			}

			function Da(b, f, c, i)
			{
				var c = a(c).addClass("jspActive"),
					o, j, D = !0,
					e = function()
					{
						0 !== b && l.scrollByX(b * d.arrowButtonSpeed);
						0 !== f && l.scrollByY(f * d.arrowButtonSpeed);
						j = setTimeout(e, D ? d.initialDelay : d.arrowRepeatFreq);
						D = !1
					};
				e();
				o = i ? "mouseout.jsp" : "mouseup.jsp";
				i = i || a("html");
				i.bind(o, function()
				{
					c.removeClass("jspActive");
					j && clearTimeout(j);
					j = null;
					i.unbind(o)
				})
			}

			function Ba()
			{
				oa();
				y && A.bind("mousedown.jsp", function(b)
				{
					if (b.originalTarget === h || b.originalTarget == b.currentTarget)
					{
						var f = a(this),
							c = f.offset(),
							i = b.pageY - c.top - q,
							o, j = !0,
							D = function()
							{
								var a = f.offset(),
									a = b.pageY - a.top - L / 2,
									c = k * d.scrollPagePercent,
									p = C * c / (s - k);
								if (0 > i) q - p > a ? l.scrollByY(-c) : O(a);
								else if (0 < i) q + p < a ? l.scrollByY(c) : O(a);
								else
								{
									e();
									return
								}
								o = setTimeout(D, j ? d.initialDelay : d.trackClickRepeatFreq);
								j = !1
							},
							e = function()
							{
								o && clearTimeout(o);
								o = null;
								a(document).unbind("mouseup.jsp",
									e)
							};
						D();
						a(document).bind("mouseup.jsp", e);
						return !1
					}
				});
				w && B.bind("mousedown.jsp", function(b)
				{
					if (b.originalTarget === h || b.originalTarget == b.currentTarget)
					{
						var f = a(this),
							c = f.offset(),
							i = b.pageX - c.left - r,
							o, j = !0,
							e = function()
							{
								var a = f.offset(),
									a = b.pageX - a.left - J / 2,
									c = n * d.scrollPagePercent,
									p = K * c / (t - n);
								if (0 > i) r - p > a ? l.scrollByX(-c) : S(a);
								else if (0 < i) r + p < a ? l.scrollByX(c) : S(a);
								else
								{
									g();
									return
								}
								o = setTimeout(e, j ? d.initialDelay : d.trackClickRepeatFreq);
								j = !1
							},
							g = function()
							{
								o && clearTimeout(o);
								o = null;
								a(document).unbind("mouseup.jsp",
									g)
							};
						e();
						a(document).bind("mouseup.jsp", g);
						return !1
					}
				})
			}

			function oa()
			{
				B && B.unbind("mousedown.jsp");
				A && A.unbind("mousedown.jsp")
			}

			function sa()
			{
				a("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");
				u && u.removeClass("jspActive");
				v && v.removeClass("jspActive")
			}

			function O(b, f)
			{
				y && ((0 > b ? b = 0 : b > C && (b = C), f === h && (f = d.animateScroll), f) ? l.animate(u, "top", b, ka) : (u.css("top", b), ka(b)))
			}

			function ka(b)
			{
				b === h && (b = u.position().top);
				g.scrollTop(0);
				q = b;
				var f = 0 === q,
					a = q == C,
					b = -(b / C) * (s -
						k);
				if (ca != f || da != a) ca = f, da = a, c.trigger("jsp-arrow-change", [ca, da, ea, fa]);
				d.showArrows && (U[f ? "addClass" : "removeClass"]("jspDisabled"), V[a ? "addClass" : "removeClass"]("jspDisabled"));
				e.css("top", b);
				c.trigger("jsp-scroll-y", [-b, f, a]).trigger("scroll")
			}

			function S(b, a)
			{
				w && ((0 > b ? b = 0 : b > K && (b = K), a === h && (a = d.animateScroll), a) ? l.animate(v, "left", b, ja) : (v.css("left", b), ja(b)))
			}

			function ja(b)
			{
				b === h && (b = v.position().left);
				g.scrollTop(0);
				r = b;
				var a = 0 === r,
					p = r == K,
					b = -(b / K) * (t - n);
				if (ea != a || fa != p) ea = a, fa = p, c.trigger("jsp-arrow-change", [ca, da, ea, fa]);
				d.showArrows && (W[a ? "addClass" : "removeClass"]("jspDisabled"), X[p ? "addClass" : "removeClass"]("jspDisabled"));
				e.css("left", b);
				c.trigger("jsp-scroll-x", [-b, a, p]).trigger("scroll")
			}

			function G(b, a)
			{
				O(b / (s - k) * C, a)
			}

			function Q(b, a)
			{
				S(b / (t - n) * K, a)
			}

			function Y(b, f, c)
			{
				var i, o, j = 0,
					e = 0,
					l, h, m;
				try
				{
					i = a(b)
				}
				catch (q)
				{
					return
				}
				o = i.outerHeight();
				b = i.outerWidth();
				g.scrollTop(0);
				for (g.scrollLeft(0); !i.is(".jspPane");)
					if (j += i.position().top, e += i.position().left, i = i.offsetParent(), /^body|html$/i.test(i[0].nodeName)) return;
				i = F();
				l = i + k;
				j < i || f ? h = j - d.verticalGutter : j + o > l && (h = j - k + o + d.verticalGutter);
				h && G(h, c);
				j = E();
				h = j + n;
				e < j || f ? m = e - d.horizontalGutter : e + b > h && (m = e - n + b + d.horizontalGutter);
				m && Q(m, c)
			}

			function E()
			{
				return -e.position().left
			}

			function F()
			{
				return -e.position().top
			}

			function ua()
			{
				var b = s - k;
				return 20 < b && 10 > b - F()
			}

			function va()
			{
				var b = t - n;
				return 20 < b && 10 > b - E()
			}

			function ya()
			{
				g.unbind(ha).bind(ha, function(b, a, c, e)
				{
					b = r;
					a = q;
					l.scrollBy(c * d.mouseWheelSpeed, -e * d.mouseWheelSpeed, !1);
					return b == r && a == q
				})
			}

			function R()
			{
				return !1
			}

			function xa()
			{
				e.find(":input,a").unbind("focus.jsp").bind("focus.jsp",
					function(b)
					{
						Y(b.target, !1)
					})
			}

			function Aa()
			{
				function b()
				{
					var b = r,
						a = q;
					switch (f)
					{
						case 40:
							l.scrollByY(d.keyboardSpeed, !1);
							break;
						case 38:
							l.scrollByY(-d.keyboardSpeed, !1);
							break;
						case 34:
						case 32:
							l.scrollByY(k * d.scrollPagePercent, !1);
							break;
						case 33:
							l.scrollByY(-k * d.scrollPagePercent, !1);
							break;
						case 39:
							l.scrollByX(d.keyboardSpeed, !1);
							break;
						case 37:
							l.scrollByX(-d.keyboardSpeed, !1)
					}
					return p = b != r || a != q
				}
				var f, p, i = [];
				w && i.push(ba[0]);
				y && i.push(aa[0]);
				e.focus(function()
				{
					c.focus()
				});
				c.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",
					function(c)
					{
						if (!(c.target !== this && (!i.length || !a(c.target).closest(i).length)))
						{
							var d = r,
								e = q;
							switch (c.keyCode)
							{
								case 40:
								case 38:
								case 34:
								case 32:
								case 33:
								case 39:
								case 37:
									f = c.keyCode;
									b();
									break;
								case 35:
									G(s - k);
									f = null;
									break;
								case 36:
									G(0), f = null
							}
							p = c.keyCode == f && d != r || e != q;
							return !p
						}
					}).bind("keypress.jsp", function(a)
				{
					a.keyCode == f && b();
					return !p
				});
				d.hideFocus ? (c.css("outline", "none"), "hideFocus" in g[0] && c.attr("hideFocus", !0)) : (c.css("outline", ""), "hideFocus" in g[0] && c.attr("hideFocus", !1))
			}

			function Ca()
			{
				if (location.hash &&
					1 < location.hash.length)
				{
					var b, c, d = escape(location.hash);
					try
					{
						b = a(d)
					}
					catch (i)
					{
						return
					}
					b.length && e.find(d) && (0 === g.scrollTop() ? c = setInterval(function()
					{
						0 < g.scrollTop() && (Y(d, !0), a(document).scrollTop(g.position().top), clearInterval(c))
					}, 50) : (Y(d, !0), a(document).scrollTop(g.position().top)))
				}
			}

			function pa()
			{
				a("a.jspHijack").unbind("click.jsp-hijack").removeClass("jspHijack")
			}

			function qa()
			{
				pa();
				a("a[href^=#]").addClass("jspHijack").bind("click.jsp-hijack", function()
				{
					var b = this.href.split("#");
					if (1 < b.length &&
						(b = b[1], 0 < b.length && 0 < e.find("#" + b).length)) return Y("#" + b, !0), !1
				})
			}

			function za()
			{
				var b, a, c, d, e, j = !1;
				g.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function(g)
				{
					g = g.originalEvent.touches[0];
					b = E();
					a = F();
					c = g.pageX;
					d = g.pageY;
					e = !1;
					j = !0
				}).bind("touchmove.jsp", function(g)
				{
					if (j)
					{
						var g = g.originalEvent.touches[0],
							h = r,
							k = q;
						l.scrollTo(b + c - g.pageX, a + d - g.pageY);
						e = e || 5 < Math.abs(c - g.pageX) || 5 < Math.abs(d - g.pageY);
						return h == r && k == q
					}
				}).bind("touchend.jsp", function()
				{
					j = !1
				}).bind("click.jsp-touchclick", function()
				{
					if (e) return e = !1
				})
			}
			var d, l = this,
				e, n, k, g, t, s, ga, Z, y, w, u, C, q, v, K, r, aa, A, ia, I, L, U, V, ba, B, z, J, W, X, $, ma, N, na, ca = !0,
				ea = !0,
				da = !1,
				fa = !1,
				la = c.clone(!1, !1).empty(),
				ha = a.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
			ma = c.css("paddingTop") + " " + c.css("paddingRight") + " " + c.css("paddingBottom") + " " + c.css("paddingLeft");
			N = (parseInt(c.css("paddingLeft"), 10) || 0) + (parseInt(c.css("paddingRight"), 10) || 0);
			a.extend(l,
			{
				reinitialise: function(b)
				{
					b = a.extend(
					{}, d, b);
					x(b)
				},
				scrollToElement: function(b,
					a, c)
				{
					Y(b, a, c)
				},
				scrollTo: function(b, a, c)
				{
					Q(b, c);
					G(a, c)
				},
				scrollToX: function(b, a)
				{
					Q(b, a)
				},
				scrollToY: function(b, a)
				{
					G(b, a)
				},
				scrollToPercentX: function(b, a)
				{
					Q(b * (t - n), a)
				},
				scrollToPercentY: function(b, a)
				{
					G(b * (s - k), a)
				},
				scrollBy: function(b, a, c)
				{
					l.scrollByX(b, c);
					l.scrollByY(a, c)
				},
				scrollByX: function(b, a)
				{
					var c = (E() + Math[0 > b ? "floor" : "ceil"](b)) / (t - n);
					S(c * K, a)
				},
				scrollByY: function(b, a)
				{
					var c = (F() + Math[0 > b ? "floor" : "ceil"](b)) / (s - k);
					O(c * C, a)
				},
				positionDragX: function(b, a)
				{
					S(b, a)
				},
				positionDragY: function(a, c)
				{
					O(a, c)
				},
				animate: function(a, c, e, g)
				{
					var h = {};
					h[c] = e;
					a.animate(h,
					{
						duration: d.animateDuration,
						easing: d.animateEase,
						queue: !1,
						step: g
					})
				},
				getContentPositionX: function()
				{
					return E()
				},
				getContentPositionY: function()
				{
					return F()
				},
				getContentWidth: function()
				{
					return t
				},
				getContentHeight: function()
				{
					return s
				},
				getPercentScrolledX: function()
				{
					return E() / (t - n)
				},
				getPercentScrolledY: function()
				{
					return F() / (s - k)
				},
				getIsScrollableH: function()
				{
					return w
				},
				getIsScrollableV: function()
				{
					return y
				},
				getContentPane: function()
				{
					return e
				},
				scrollToBottom: function(a)
				{
					O(C,
						a)
				},
				hijackInternalLinks: function()
				{
					qa()
				},
				destroy: function()
				{
					var a = F(),
						d = E();
					c.removeClass("jspScrollable").unbind(".jsp");
					c.replaceWith(la.append(e.children()));
					la.scrollTop(a);
					la.scrollLeft(d)
				}
			});
			x(m)
		}
		m = a.extend(
		{}, a.fn.jScrollPane.defaults, m);
		a.each(["mouseWheelSpeed", "arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function()
		{
			m[this] = m[this] || m.speed
		});
		return this.each(function()
		{
			var c = a(this),
				h = c.data("jsp");
			h ? h.reinitialise(m) : (h = new x(c, m), c.data("jsp", h))
		})
	};
	a.fn.jScrollPane.defaults = {
		showArrows: !1,
		maintainPosition: !0,
		stickToBottom: !1,
		stickToRight: !1,
		clickOnTrack: !0,
		autoReinitialise: !1,
		autoReinitialiseDelay: 500,
		verticalDragMinHeight: 0,
		verticalDragMaxHeight: 99999,
		horizontalDragMinWidth: 0,
		horizontalDragMaxWidth: 99999,
		contentWidth: h,
		animateScroll: !1,
		animateDuration: 300,
		animateEase: "linear",
		hijackInternalLinks: !1,
		verticalGutter: 4,
		horizontalGutter: 4,
		mouseWheelSpeed: 0,
		arrowButtonSpeed: 0,
		arrowRepeatFreq: 50,
		arrowScrollOnHover: !1,
		trackClickSpeed: 0,
		trackClickRepeatFreq: 70,
		verticalArrowPositions: "split",
		horizontalArrowPositions: "split",
		enableKeyboardNavigation: !0,
		hideFocus: !1,
		keyboardSpeed: 0,
		initialDelay: 300,
		speed: 30,
		scrollPagePercent: 0.8
	}
})(jQuery, this);
var SPR, fbBridge, seekerInterval, durationTimer, trackId = null,
	clickedTrack, utilFrame, iHaveSpotifyClickedAtLeastOnce = !1,
	installTutorial, MacOS = "MacOS",
	WindowsOS = "WindowsOS",
	OSName = WindowsOS; - 1 != navigator.appVersion.indexOf("Mac") && (OSName = MacOS);
PlayButtonStatus = {
	seekerInitialized: !1
};

function initIntructionSlider()
{
	var c = MacOS;
	OSName == MacOS && (c = WindowsOS);
	$(".items." + c).remove();
	$("#instructionBrowse").scrollable(
	{
		circular: !0,
		mousewheel: !1
	}).navigator().autoscroll(
	{
		interval: 3E3
	});
	$("#instructionBrowse").scrollable().stop()
}

function hideInstallFlow()
{
	SPR.getIdentifier() === SpotifyRemote.Type.DesktopClient && setSpotified(!0);
	closeOverlay();
	installTutorial && installTutorial.close()
}

function showNotificationBar(c)
{
	$("#notifBar #message")[0].innerHTML = c;
	$("#notifBar").animate(
	{
		top: 0
	}, "fast")
}

function hideNotificationBar()
{
	$("#notifBar").animate(
	{
		top: -80
	}, "fast")
}

function clearIntervals()
{
	seekerInterval && (clearInterval(seekerInterval), seekerInterval = null);
	durationTimer && (clearInterval(durationTimer), durationTimer = null);
	$(".music-playing").removeClass("music-playing").addClass("music-paused")
}

function oldCheck()
{
	var c = "";
	Spotify.RegistrationModule.isCompatible() && spotifyAvailableInCountry ? (Spotify.RegistrationModule.open("SPB", frameReferrer, frameReferrer, !0), c = "registration-module") : (setTimeout(function()
	{
		showOverlay(0)
	}, 500), c = "old-overlay");
	Spotify.Tracking.send(
	{
		category: "launch-client",
		action: c,
		value: ""
	}, !0)
}

function checkClientConnected()
{
	isSpotified() ? (openClient(), Spotify.Tracking.send(
	{
		category: "launch-client",
		action: "desktop-client",
		value: ""
	}, !0)) : Spotify.isLinkSpotified() ? (Spotify.Webplayer.open(
	{
		fbBridge: fbBridge,
		uri: dataContext,
		defaultTrack: trackId
	}), Spotify.Tracking.send(
	{
		category: "launch-client",
		action: "webplayer",
		value: ""
	}, !0)) : oldCheck()
}

function triggerPlayPause(c, b, a)
{
	b && b.preventDefault();
	Spotify.Tracking.send(
	{
		category: "remote-control",
		action: "play-clicked",
		value: SPR.getIdentifier()
	}, !0);
	clickedTrack = c;
	trackId = "spotify:track:" + clickedTrack.data("track");
	if (!SPR.isClientRunning()) return checkClientConnected(), !1;
	b = SPR.getCurrentTrack();
	if (SPR.isTrackPlaying() && "undefined" !== typeof b.track_type && "ad" === b.track_type) return Spotify.Logger.log("Blocking controls because an ad is being played."), !1;
	hideNotificationBar();
	if (a && SPR.getCurrentTrack() &&
		0 === $("." + SPR.getCurrentTrack().track_resource.uri.split(":")[2]).length) return !1;
	setTimeout(function()
	{
		clickedTrack && (hideSpinners(), clickedTrack.attr("class", clickedTrack.attr("class") + " loading"), setTimeout(function()
		{
			clickedTrack && clickedTrack.removeClass("loading")
		}, 6E4))
	}, 300);
	a = $(".player").hasClass("music-paused");
	handlePlayerStatus(clickedTrack.data("track"), a);
	SPR.playPauseTrack(c.attr("data-track"), c.attr("rel"), context);
	return !1
}

function handlePlayerStatus(c, b, a)
{
	var d = $(".player"),
		j = $("#engageView"),
		f = $(".track-" + c);
	b ? (j.removeClass("music-paused").addClass("music-playing"), d.removeClass("music-paused").addClass("music-playing"), f.removeClass("music-paused").addClass("music-playing").addClass("active")) : (clearIntervals(), j.removeClass("music-playing").addClass("music-paused"), d.removeClass("music-playing").addClass("music-paused"), f.removeClass("music-playing").addClass("music-paused").removeClass("active"));
	initializeSeeker(c,
		a, b);
	b && updateStatusBar(f)
}

function initializeSeeker(c, b, a)
{
	function d()
	{
		return parseFloat($(".seeker").get(0).style.width, 10) / 100 || 0
	}

	function j()
	{
		return Math.round(f * d())
	}
	var f = +$(".track-" + c).attr("data-duration-ms"),
		e = 500 / f;
	"undefined" === typeof b ? b = j() / 1E3 : Spotify.Logger.log("Detected de-synchronization of " + (b - j()));
	$(".seeker").css("width", 100 * (1E3 * b / f) + "%");
	$(".time-spent").html(Spotify.Util.readableTime(j()));
	a && (null !== seekerInterval && clearInterval(seekerInterval), seekerInterval = Spotify.Util.setInterval(function()
	{
		1 <= d() &&
			clearInterval(seekerInterval);
		$(".seeker").css("width", 100 * Math.min(d() + e, 1) + "%");
		$(".time-spent").html(Spotify.Util.readableTime(j()))
	}, 500));
	Spotify.Logger.log("Initializing seeker interval for ", [c, b])
}

function changePlayModeForTrack(c)
{
	var b = c.track,
		a = c.status;
	clickedTrack = null;
	trackId = getTrackId(b);
	$(".music-playing").removeClass("music-playing").addClass("music-paused");
	b = $(".track-" + trackId);
	b.attr("data-duration-ms");
	0 < b.length ? ($(".active").removeClass("active"), b.attr("class", a ? "track-" + trackId + " music-playing active item " + contextType : "track-" + trackId + " music-paused active item " + contextType), b.each(function(a, b)
	{
		$(b)
	}), handlePlayerStatus(trackId, a, c.playing_position), a && (l(2), Spotify.Tracking.send(
	{
		category: "remote-control",
		action: "client-playing",
		value: SPR.getIdentifier()
	}, !0))) : clearIntervals()
}

function onClientConnected()
{
	hideInstallFlow();
	if ("undefined" != typeof SPR && !1 === SPR.isAutoplay() && clickedTrack && "undefined" !== typeof clickedTrack)
	{
		var c = clickedTrack;
		SPR.playPauseTrack(c.attr("data-track"), c.attr("rel"), context)
	}
	Spotify.Tracking.send(
	{
		category: "remote-control",
		action: "client-connected",
		value: SPR.getIdentifier()
	}, !0)
}

function onClientError(c)
{
	showNotificationBar(c.message);
	"4303" == c.type && $(".track-" + c.uri.split(":")[2]).addClass("unavailable");
	Spotify.Tracking.send(
	{
		category: "remote-control",
		action: "client-error",
		value: SPR.getIdentifier()
	}, !0)
}

function setupSpotifyRemote()
{
	SPR = SpotifyRemote.init(tokenData, void 0, function()
	{
		SPR.setReferrer(frameReferrer);
		SPR.addPlayModeChangedListener(changePlayModeForTrack);
		SPR.addOnClientConnectedListener(onClientConnected);
		SPR.addOnClientErrorListener(onClientError);
		SPR.addOnClientConnectedListener(function()
		{
			ConnectionCounter.increase()
		});
		SPR.addOnClientDisconnectListener(function()
		{
			ConnectionCounter.decrease()
		})
	},
	{
		shouldUseWebPlayer: !Spotify.isSpotified() && Spotify.Webplayer.isCompatible(dataContext)
	});
	Spotify.WebplayerInspect.onClose(function()
	{
		SPR.updateClientRunning(!1, !1);
		clearIntervals()
	})
}
ConnectionCounter = {
	_counter: 0,
	_logged: !1,
	increase: function()
	{
		return this._update(1)
	},
	decrease: function()
	{
		return this._update(-1)
	},
	_update: function(c)
	{
		c = this._counter + c;
		if ((1 < c || 0 > c) && !this._logged) this._logged = !0, Spotify.Tracking.send(
		{
			category: "remote-control",
			action: 0 < c ? "client-wrong-connection-count" : "client-wrong-disconnection-count",
			label: SPR.getIdentifier(),
			value: Math.abs(c)
		}), Spotify.Logger.log("Wrong client count detected: " + c);
		this._counter = c
	}
};

function openContextInSpotify()
{
	SPR.isClientRunning() ? SPR.isTrackPlaying() || SPR.playSpotifyURI(dataContext) : checkClientConnected()
}

function openClient()
{
	"chrome" !== Spotify.BrowserDetect.browser.toLowerCase() ? (setTimeout(function()
	{
		SPR.isClientRunning() || showOverlay(1)
	}, 1E4), SPR.openSpotifyURI("spotify:", 1E4)) : window.location.assign("spotify:")
}
window.attachEvent ? window.attachEvent("onmessage", xdmMsg) : window.addEventListener("message", xdmMsg, !1);

function xdmMsg(c)
{
	!isSpotified() && SPR.getIdentifier() === SpotifyRemote.Type.DesktopClient && setSpotified("yes" == c.data)
}

function getTrackId(c)
{
	if (!c) return "";
	if ("ad" != c.track_type)
	{
		//if (0 < $(".track-" + c.track_resource.uri.split(":")[2]).length) return c.track_resource.uri.split(":")[2];
		//if (0 < $(".track-" + c.artist_resource.uri.split(":")[2]).length) return c.artist_resource.uri.split(":")[2];
		//if (0 < $(".track-" + c.album_resource.uri.split(":")[2]).length) return c.album_resource.uri.split(":")[2]
	}
	return ""
}

function showInstallGuide()
{
	var c = "?ref=" + encodeURIComponent(frameReferrer) + "&t=" + testLeg,
		b = (screen.width - 973) / 2,
		a = (screen.height - 400) / 2;
	if (OSName == MacOS || OSName == WindowsOS) installTutorial = window.open("https://" + location.host + "/download/tutorial/" + c, "InstallGuide", "status=0,toolbar=0,location=0,menubar=0,directories=0,resizable=0,scrollbars=0,height=400,width=973,left=" + b + ",top=" + a)
}

function triggerSpotifyDownload()
{
	var c = "?ref=" + encodeURIComponent(frameReferrer) + "&t=" + testLeg;
	utilFrame.src = "/download" + c;
	showInstallGuide()
}

function hideSpinners()
{
	$(".loading").length && $(".loading").removeClass("loading")
}
$(document).ready(function()
{
	initIntructionSlider();
	setupSpotifyRemote();
	renderWidget();
	utilFrame = document.createElement("iframe");
	utilFrame.id = "spotifyUtilFrame";
	$(utilFrame).css("display", "none");
	document.body.appendChild(utilFrame);
	"track" != contextType && $("#mainContainer").jScrollPane(
	{
		horizontalGutter: 0,
		verticalGutter: 0,
		autoReinitialise: !0,
		horizontalDragMaxWidth: 0
	});
	fbBridge = new Spotify.Fb;
	fbBridge.connect(
	{
		appId: Spotify.Config.get("fb-app-id")
	}, function() {})
});
$(".player .album-art-container").click(function(c)
{
	triggerPlayPause($(".track-" + $(this).parent().attr("rel")), c)
});
$(".item").click(function(c)
{
	triggerPlayPause($(this), c)
});
$("#engageView .middle").click(function(c)
{
	triggerPlayPause($(".track-" + $(this).parent().parent().parent().attr("rel")), c)
});
$(".ihavespotify").click(function(c)
{
	c.preventDefault();
	hideInstallFlow();
	openClient();
	iHaveSpotifyClickedAtLeastOnce || (iHaveSpotifyClickedAtLeastOnce = !0, l(7));
	return !1
});
$(".download-spotify").click(function(c)
{
	c.preventDefault();
	triggerSpotifyDownload();
	return !1
});
$("#notifBar .notifCloseButton").click(function()
{
	hideNotificationBar()
});
$(".player, .status-header, #mainContainer, #engageView, .overlay-item-2").mousedown(function(c)
{
	c.preventDefault()
});
$(".overlay-close-button").click(function()
{
	hideSpinners();
	closeOverlay()
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(c, b)
{
	var a = this.length,
		d = Number(b) || 0,
		d = 0 > d ? Math.ceil(d) : Math.floor(d);
	for (0 > d && (d += a); d < a; d++)
		if (d in this && this[d] === c) return d;
	return -1
});
var Spotify = function(c)
{
	c.BrowserDetect = {
		initialized: !1,
		init: function()
		{
			this.initialized || (this.browser = this._searchString(this.dataBrowser) || "Unknown", this.version = this._searchVersion(navigator.userAgent) || this._searchVersion(navigator.appVersion) || "an unknown version", this.OS = this._searchString(this.dataOS) || "Unknown", this.initialized = !0)
		},
		_searchString: function(b)
		{
			for (var a = 0; a < b.length; a++)
			{
				var d = b[a].string,
					c = b[a].prop,
					f = b[a].subString;
				this.versionSearch = b[a].versionSearch || b[a].identity;
				if (d)
				{
					if ("string" ===
						typeof f && -1 != d.indexOf(f) || "object" === typeof f && -1 != d.search(f)) return b[a].identity
				}
				else if (c) return b[a].identity
			}
		},
		_searchVersion: function(b)
		{
			var a = this.versionSearch,
				d = -1;
			"string" === typeof a ? d = b.indexOf(a) + a.length + 1 : "object" === typeof a && (d = (d = b.match(a)) ? b.search(a) + d[0].length : -1);
			if (-1 !== d) return parseFloat(b.substring(d))
		},
		dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{
			string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera",
			versionSearch: "Version"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: /MSIE|Trident/i,
			identity: "Explorer",
			versionSearch: /MSIE|rv:/i
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}],
		dataOS: [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			string: navigator.userAgent,
			subString: "Android",
			identity: "Android"
		},
		{
			string: navigator.userAgent,
			subString: /iPhone|iPad|iPod/i,
			identity: "iOS"
		},
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}],
		getUserAgent: function()
		{
			return window.navigator.userAgent
		}
	};
	return c
}(Spotify ||
{});
Spotify = function(c)
{
	c.Logger = {
		log: function(b, a, d)
		{
			Spotify.Config.get("debug") && this.isConsoleAvailable() && ("undefined" === typeof d && (d = !1), b = Spotify.Config.get("logging-prefix") + b, c.BrowserDetect.init(), "chrome" == c.BrowserDetect.browser.toLowerCase() && d && (d = Error().stack.split("\n")[2], b += "\n" + d, "undefined" !== typeof a && (b += "\n")), "undefined" !== typeof a ? console.log(b, a) : console.log(b))
		},
		isConsoleAvailable: function()
		{
			return window.console ? !0 : !1
		}
	};
	return c
}(Spotify ||
{});
Spotify = function(c)
{
	c.Config = {
		_configuration:
		{
			debug: !1,
			tracking: !0,
			server: "//embed.spotify.com/",
			"open-url": "https://open.spotify.com/",
			"mediabar-url": "https://embed.spotify.com/mediabar/",
			"link-url": "https://play.spotify.com/",
			"play-now-url": "https://embed.spotify.com/registration/play-now.php",
			"logging-prefix": "[SPB]",
			"entity-renderer-url": "//embed.spotify.com/mediabar/entity/",
			"download-url": "https://www.spotify.com/download/",
			"fb-app-id": "174829003346",
			"trackset-max-length": 70,
			"registration-module-browser-versions":
			{
				firefox: 14,
				chrome: 21,
				safari: 5,
				explorer: 8
			},
			"link-enabled": !0,
			"link-browser-versions":
			{
				chrome: 21,
				firefox: 14,
				safari: 5,
				explorer: 9
			},
			"embedded-player-versions":
			{
				chrome: 21,
				firefox: 14,
				safari: 5,
				explorer: 9
			},
			"mediabar-browser-versions":
			{
				chrome: 21,
				firefox: 14,
				safari: 5,
				explorer: [9, 10]
			},
			"mediabar-platforms": ["Windows", "Mac", "Linux", "Unknown"],
			"play-now-markets": [],
			"download-links":
			{
				windows:
				{
					"default": "https://d1clcicqv97n4s.cloudfront.net/SpotifySetup.exe"
				},
				mac:
				{
					"default": "https://d1clcicqv97n4s.cloudfront.net/Spotify.dmg",
					app: "https://d1clcicqv97n4s.cloudfront.net/SpotifyInstaller.zip"
				}
			},
			"spotify-target-origin": "https://embed.spotify.com",
			"allowed-origins": [
				["*.spotify.com", "https"],
				["*.yahoo.com", "http|https"], "https://d1tgm0mcw6tx0m.cloudfront.net", "https://d34f388hvlfgq4.cloudfront.net", "https://d20nan3osubr3.cloudfront.net", ["*.last.fm", "http|https"],
				["*.lastfm.de", "http|https"],
				["*.lastfm.fr", "http|https"],
				["*.lastfm.se", "http|https"],
				["*.lastfm.pt", "http|https"],
				["*.lastfm.pl", "http|https"],
				["*.lastfm.it", "http|https"],
				["*.lastfm.com.br", "http|https"],
				["*.lastfm.tr", "http|https"],
				["*.lastfm.jp", "http|https"],
				["*.lastfm.es", "http|https"],
				["*.lastfm.ru", "http|https"],
				["*.lastfm.ch", "http|https"],
				["*.lastfm.at", "http|https"],
				["*.lastfm.com.tr", "http|https"],
				["*.lastfm.biz", "http|https"],
				["*.coachella.com", "http|https"],
				["*.sandpit.us", "http|https"],
				["*.echonest.com", "http|https"],
				["*.musixmatch.com", "http|https"],
				["*.undrtone.com", "http|https"],
				["*.genius.com", "http|https"],
				["*.genius-staging.com", "http|https"],
				["*.g.dev",
					"http|https"
				],
				["hypem.com", "http|https"],
				["*.hypem.com", "http|https"],
				["*.dev.hypem.com", "http|https"]
			],
			"ab-testing":
			{
				"play-now-performance":
				{
					A:
					{
						range: [0, 24],
						description: "No prefetch, no autoplay"
					},
					B:
					{
						range: [25, 49],
						description: "Only prefetch"
					},
					C:
					{
						range: [50, 74],
						description: "Only autoplay"
					},
					D:
					{
						range: [75, 100],
						description: "Prefetch and autoplay"
					}
				},
				"animated-play-count":
				{
					"no-animated":
					{
						range: [0, 0],
						description: "No animation updating playcount"
					},
					animated:
					{
						range: [0, 100],
						description: "Animated playcount update"
					}
				}
			}
		},
		set: function(b, a)
		{
			this._configuration[b] = a
		},
		get: function(b)
		{
			var a = null;
			"undefined" !== typeof this._configuration[b] && this._configuration.hasOwnProperty(b) && (a = this._configuration[b]);
			return a
		},
		override: function(b)
		{
			for (var a in b) b.hasOwnProperty(a) && "undefined" !== typeof this._configuration[a] && (this._configuration[a] = b[a])
		}
	};
	return c
}(Spotify ||
{});
Spotify = function(c)
{
	var b = null;
	c.Util = {
		_isYUILoaded: function()
		{
			return !!("undefined" !== typeof YAHOO && YAHOO.util)
		},
		_isJQueryLoaded: function()
		{
			return "undefined" !== typeof jQuery
		},
		_legacyByClassName: function(a, d)
		{
			var b = [];
			if ("undefined" === typeof d.getElementsByTagName) return b;
			for (var c = d.getElementsByTagName("*"), e = 0; e < c.length; e++)
				if (c[e].getAttribute("class"))
					for (var g = c[e].getAttribute("class").split(" "), h = 0; h < g.length; h++) g[h].toLowerCase() == a.toLowerCase() && b.push(c[e]);
				else if (c[e].className)
			{
				g =
					c[e].className.split(" ");
				for (h = 0; h < g.length; h++) g[h].toLowerCase() == a.toLowerCase() && b.push(c[e])
			}
			return b
		},
		byClassName: function(a, d)
		{
			"undefined" === typeof d && (d = document);
			var b = [];
			try
			{
				b = d.querySelectorAll ? d.querySelectorAll("." + a) : this._isYUILoaded() ? YAHOO.util.Dom.getElementsByClassName(a, void 0, d) : this._legacyByClassName(a, d)
			}
			catch (c)
			{
				b = this._legacyByClassName(a, d)
			}
			return b
		},
		randomId: function()
		{
			return "spotify-" + Math.floor(1E5 * Math.random())
		},
		position: function(a)
		{
			var d = {
				x: 0,
				y: 0
			};
			this._isYUILoaded() ?
				(d = YAHOO.util.Dom.getXY(a), d = {
					x: d[0],
					y: d[1]
				}) : a.getBoundingClientRect && (a = a.getBoundingClientRect(), d = {
					x: parseInt(a.left, 10),
					y: parseInt(a.top, 10)
				});
			return d
		},
		setPosition: function(a, d)
		{
			this._isYUILoaded() ? YAHOO.util.Dom.setXY(a, [d.x, d.y]) : (a.style.left = d.x + "px", a.style.top = d.y + "px")
		},
		size: function(a)
		{
			var d = null;
			return d = this._isYUILoaded() ? [parseInt(YAHOO.util.Dom.getStyle(a, "width"), 10), parseInt(YAHOO.util.Dom.getStyle(a, "height"), 10)] : this._isJQueryLoaded() ? [parseInt(jQuery(a).width(), 10), parseInt(jQuery(a).height(),
				10)] : [a.offsetWidth, a.offsetHeight]
		},
		domReady: function(a)
		{
			if (this._isYUILoaded() && "function" === typeof a) Y.on("domready", function()
			{
				a()
			})
		},
		isBrowserCompatible: function(a, d)
		{
			var b = !1;
			"undefined" === typeof d && (d = !1);
			Spotify.BrowserDetect.initialized || Spotify.BrowserDetect.init();
			var c = Spotify.BrowserDetect.browser.toLowerCase(),
				e = Spotify.BrowserDetect.version,
				g = Spotify.Config.get(a);
			g && "undefined" !== typeof g[c] && (b = "object" === typeof g[c] ? -1 < g[c].indexOf(e) : e >= g[c]);
			d || (b = b && "" !== Spotify.Download.getInstallerLink());
			return b
		},
		isPlatformCompatible: function(a)
		{
			var d = !1;
			Spotify.BrowserDetect.initialized || Spotify.BrowserDetect.init();
			(a = Spotify.Config.get(a)) && -1 < a.indexOf(Spotify.BrowserDetect.OS) && (d = !0);
			return d
		},
		isPostMessageCompatible: function()
		{
			return window.postMessage ? !0 : !1
		},
		attachEvent: function(a, d, b)
		{
			"undefined" === typeof b && (b = window);
			b.addEventListener ? b.addEventListener(a, d, !1) : b.attachEvent && b.attachEvent("on" + a, d)
		},
		removeEvent: function(a, d, b)
		{
			"undefined" === typeof b && (b = window);
			b.removeEventListener &&
				b.removeEventListener(a, d)
		},
		getWindowSize: function()
		{
			var a = [0, 0];
			return a = window.innerWidth ? [window.innerWidth, window.innerHeight] : [Math.max(document.documentElement.clientWidth, document.body.clientWidth), Math.max(document.documentElement.clientHeight, document.body.clientHeight)]
		},
		removeNode: function(a)
		{
			a.parentNode.removeChild(a)
		},
		isAttributeSupported: function(a, d)
		{
			return "undefined" !== typeof document.createElement(a)[d]
		},
		openWindow: function(a, d, b, c)
		{
			d = d.replace("-", "");
			(a = window.open(a, d, "height=" +
				c + ",width=" + b + ",resizable=yes,scrollbars=no,status=no,toolbar=no,menubar=no")) && a.focus();
			return a
		},
		ajax: function(a, d, b, c, e, g)
		{
			var h = !1;
			"undefined" !== typeof g && (h = "explorer" === Spotify.BrowserDetect.browser.toLowerCase() && 9 === Spotify.BrowserDetect.version);
			if (this._isJQueryLoaded() && !h) e = {
				url: a,
				data: d,
				success: b,
				error: b,
				type: "undefined" === typeof e ? "GET" : "POST"
			}, "undefined" !== typeof c && (e.timeout = c), $.ajax(e);
			else if (h)
			{
				var i = new XDomainRequest,
					e = [],
					c = function()
					{
						try
						{
							"undefined" !== typeof b && b(JSON.parse(i.responseText))
						}
						finally
						{
							i =
								null
						}
					};
				i.onload = c;
				i.onerror = c;
				if (d instanceof Object)
					for (var m in d) d.hasOwnProperty(m) && e.push(encodeURIComponent(m) + "=" + encodeURIComponent(d[m]));
				i.open("GET", a + "?" + e.join("&"), !0);
				i.send(null)
			}
		},
		eventTarget: function(a)
		{
			return a.target ? a.target : a.srcElement
		},
		onUnload: function(a)
		{
			window.onbeforeunload = function()
			{
				if ("function" === typeof a) return a()
			}
		},
		computeExtraOffset: function()
		{
			var a = 0,
				d = 0,
				b = d = a = 0,
				c = 0;
			if (window.innerWidth && window.outerHeight) a = window.innerWidth, d = window.innerHeight, b = window.outerWidth,
				c = window.outerHeight;
			else if (document.documentElement.clientWidth) try
			{
				var e = document.documentElement.clientWidth,
					g = document.documentElement.clientHeight;
				window.resizeTo(e, g);
				var b = e - document.documentElement.clientWidth,
					c = g - document.documentElement.clientHeight,
					h = e + b,
					i = g + c;
				window.resizeTo(h, i);
				if (e != document.documentElement.clientWidth || g != document.documentElement.clientHeight) b = h - document.documentElement.clientWidth, c = i - document.documentElement.clientHeight
			}
			catch (m)
			{}
			a = Math.abs(a - b);
			d = Math.abs(d -
				c);
			return [a, d]
		},
		resizeWindow: function(a)
		{
			if (!window.innerHeight)
			{
				try
				{
					window.resizeTo(a[0] + 20, a[1] + 100)
				}
				catch (d)
				{}
				return !0
			}
			a = a.slice(0);
			"undefined" === typeof a[0] ? a = [0, 0] : "undefined" === typeof a[1] && (a[1] = 0);
			var b = this.computeExtraOffset(a);
			a[0] += b[0];
			a[1] += b[1];
			b = a[0];
			a = a[1];
			try
			{
				window.resizeTo(b, a)
			}
			catch (c)
			{}
		},
		setLocationWithIframe: function(a)
		{
			"chrome" === Spotify.BrowserDetect.browser.toLowerCase() && /spotify:/.test(a) ? top.location.assign(a) : (a = Spotify.View.render("iframe",
				{
					src: a,
					style: "display:none"
				}),
				document.getElementsByTagName("body")[0].appendChild(a))
		},
		stopPropagation: function(a)
		{
			a.stopPropagation ? a.stopPropagation() : "undefined" !== typeof a.cancelBubble && (a.cancelBubble = !0)
		},
		isIE8: function()
		{
			return "explorer" === Spotify.BrowserDetect.browser.toLowerCase() && 8 === Spotify.BrowserDetect.version
		},
		isMobile: function()
		{
			Spotify.BrowserDetect.init();
			return -1 !== ["iOS", "Android"].indexOf(Spotify.BrowserDetect.OS)
		},
		iframeReady: function(a, d)
		{
			a.attachEvent ? a.attachEvent("onload", d) : a.onload = d
		},
		readableTime: function(a)
		{
			var d =
				a / 1E3 / 60,
				a = Math.floor(d),
				d = Math.round(60 * (d - a));
			60 == d && (a++, d = 0);
			return 10 > d ? a + ":0" + d : a + ":" + d
		},
		pageTitle: function()
		{
			var a = "",
				d = document.getElementsByTagName("title");
			0 < d.length && (a = d[0].innerHTML);
			return a
		},
		addClass: function(a, d)
		{
			-1 === a.className.indexOf(d) && (a.className += " " + d)
		},
		removeClass: function(a, d)
		{
			a.className = a.className.replace(" " + d, "")
		},
		isLocalStorageSupported: function()
		{
			if (null === b)
			{
				var a = new Date,
					d, c;
				try
				{
					(d = window.localStorage).setItem(a, a), c = d.getItem(a) == a, d.removeItem(a), b = !(!c || !d)
				}
				catch (f)
				{
					b = !1
				}
			}
			return b
		},
		parseJSON: function(a)
		{
			var d = null;
			try
			{
				d = JSON.parse(a)
			}
			catch (b)
			{}
			return d
		},
		getChallengeToken: function()
		{
			return "undefined" !== typeof Spotify.challengeToken ? Spotify.challengeToken : ""
		},
		setInterval: function(a, d)
		{
			var b = new Date,
				c = 0;
			return setInterval(function()
			{
				var e = (new Date).getTime() - b.getTime() + c,
					g = parseInt(e / d) * d;
				c = e % d;
				a(g);
				b = new Date
			}, d)
		},
		formatNumber: function(a)
		{
			return ("" + a).replace(/(\d)(?=(\d{3})+$)/g, "$1,")
		},
		toHtml: function(a)
		{
			return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g,
				"&gt;").replace(/"/g, "&quot;")
		},
		objectCreate: function(a)
		{
			function d()
			{}
			if (1 != arguments.length) throw Error("Object.create implementation only accepts one parameter.");
			if (Object.create) return Object.create(a);
			d.prototype = a;
			return new d
		}
	};
	return c
}(Spotify ||
{});
Spotify = function(c)
{
	c.Url = {
		read: function(b)
		{
			var a = {};
			if ("undefined" === typeof b) b = window.location.search.substr(1);
			else
			{
				var d = document.createElement("a");
				d.href = b;
				b = d.search.slice(1)
			}
			if (b)
			{
				b = b.split("&");
				for (d = 0; d < b.length; d++)
				{
					var c = b[d],
						f = c.indexOf("="); - 1 === f ? a[decodeURIComponent(c)] = "" : a[decodeURIComponent(c.substr(0, f))] = decodeURIComponent(c.substr(f + 1))
				}
			}
			return a
		},
		generate: function(b, a, d)
		{
			var a = this.queryFromObject(a),
				c = "",
				c = (d || location.protocol) + b;
			"" !== a && (c += "?" + a);
			return c
		},
		queryFromObject: function(b)
		{
			var a = [],
				d;
			for (d in b) null != b[d] && a.push(encodeURIComponent(d) + "=" + encodeURIComponent(b[d]));
			return a.join("&")
		},
		addParameters: function(b, a)
		{
			b = -1 === b.indexOf("?") ? b + "?" : b + "&";
			return b + a
		}
	};
	return c
}(Spotify ||
{});
Spotify = function(c)
{
	c.View = {
		render: function(b, a)
		{
			"string" === typeof b && (b = this.views[b]);
			var d = document.createElement(b.type),
				d = this.includeAttributes(d, b, a);
			"undefined" !== typeof b.children ? d = this.addChildren(d, b.children) : "undefined" !== typeof b.content && (d.innerHTML = b.content);
			return d
		},
		renderResource: function(b)
		{
			var a = null;
			switch (b.split(".").pop().toLowerCase())
			{
				case "css":
					a = this.render("css-node",
					{
						href: b
					});
					break;
				case "js":
					a = this.render("js-node",
					{
						src: b
					})
			}
			return a
		},
		renderAsText: function(b, a)
		{
			"string" ===
			typeof b && (b = this.views[b]);
			return this._renderElementAsText(b, a)
		},
		includeAttributes: function(b, a, d)
		{
			"undefined" !== typeof a.randomId && a.randomId && (b.id = Spotify.Util.randomId());
			b = this.applyAttributes(a.attributes, b);
			return b = this.applyAttributes(d, b)
		},
		applyAttributes: function(b, a)
		{
			if ("undefined" !== typeof b)
				for (var d in b) b.hasOwnProperty(d) && a.setAttribute(d, b[d]);
			return a
		},
		addChildren: function(b, a)
		{
			for (var d = a.length, c = 0; c < d; c++)
			{
				var f = this.render(a[c]);
				b.appendChild(f)
			}
			return b
		},
		_renderElementAsText: function(b,
			a)
		{
			function d(a)
			{
				for (g in a) a.hasOwnProperty(g) && f.push(g + '="' + Spotify.Util.toHtml(a[g]) + '"')
			}
			var c = b.children || [],
				f = [],
				e = [],
				g;
			d(b.attributes ||
			{});
			d(a);
			b.randomId && f.push('id="' + Spotify.Util.randomId() + '"');
			for (var h = 0; h < c.length; h++) e.push(this._renderElementAsText(c[h]));
			return "<" + b.type + " " + f.join(" ") + ">" + e.join("") + "</" + b.type + ">"
		},
		views:
		{
			"base-popup":
			{
				type: "div",
				attributes:
				{
					"class": "spotify-popup"
				},
				randomId: !0,
				children: [
				{
					attributes:
					{
						"class": "spotify-dialog"
					},
					type: "div"
				}]
			},
			"js-node":
			{
				type: "script",
				attributes:
				{
					type: "text/javascript"
				}
			},
			iframe:
			{
				type: "iframe"
			},
			"css-node":
			{
				type: "link",
				attributes:
				{
					rel: "stylesheet",
					type: "text/css"
				}
			},
			loader:
			{
				type: "div",
				attributes:
				{
					"class": "spotify-throbber-small"
				}
			},
			"loader-big":
			{
				type: "div",
				attributes:
				{
					"class": "spotify-throbber-big"
				}
			},
			"iframe-share":
			{
				type: "iframe",
				attributes:
				{
					frameborder: 0,
					allowtransparency: !0
				}
			}
		}
	};
	return c
}(Spotify ||
{});
Spotify = function(c)
{
	c.ABTest = {
		model: function(b)
		{
			var a = Spotify.Config.get("ab-testing");
			return new Spotify.ABTest.Model(b, a)
		},
		enabledControlGroups: function(b)
		{
			var a = [],
				d = Spotify.Config.get("ab-testing");
			if (null !== d && "undefined" !== typeof d[b])
			{
				var c = this.model(b),
					b = d[b],
					f;
				for (f in b) b.hasOwnProperty(f) && c.isActive(f) && a.push(f)
			}
			return a
		}
	};
	c.ABTest.Model = function(b, a)
	{
		this._checkActive = function(d, c)
		{
			var f = !1;
			if (null !== a && "undefined" !== typeof a[b])
			{
				var e = a[b],
					g = "";
				"undefined" !== typeof e[d] && (f = this._check(e[d]),
					"undefined" !== typeof e[d].description && (g = "(" + e[d].description + ")"));
				"undefined" !== typeof c && c && Spotify.Logger.log("A/B Testing for [" + b + "] [" + d + "] " + g + " is " + f)
			}
			return f
		};
		this.isActive = function(a, b)
		{
			var c = !1;
			if ("[object Array]" === Object.prototype.toString.call(a))
				for (var e = 0; e < a.length; e++)
				{
					if (this._checkActive(a[e], b))
					{
						c = !0;
						break
					}
				}
			else c = this._checkActive(a, b);
			return c
		};
		this._check = function(a)
		{
			var b = !1,
				c = this.position();
			"undefined" !== typeof a.range ? (a = a.range, b = c >= a[0] && c <= a[1]) : "undefined" !== typeof a.percentage &&
				(b = c < a.percentage);
			return b
		};
		this.position = function()
		{
			return this.UID() % 100
		};
		this.UID = function()
		{
			var a = 0,
				b = Spotify.Cookie.get("spu");
			null !== b && (a = "0x" + b.substring(b.length - 10), a = parseInt(a), isNaN(a) && (a = 0));
			return a
		}
	};
	return c
}(Spotify ||
{});
Spotify = function(c)
{
	c.Message = {
		PLAYER_STATUS: "player-status",
		CONTROL_POPUP: "control-popup",
		CLIENT_CONNECTED: "client-connected",
		CLIENT_CONNECTION_FAILED: "client-connection-failed",
		CLIENT_DISCONNECTED: "client-disconnected",
		CLIENT_ERROR: "client-error",
		MINI_BUTTON_PLAY_PAUSE: "mini-button-play-pause",
		MINI_BUTTON_REPORT: "mini-button-report",
		MINI_BUTTON_VIEW_MORE: "mini-button-view-more",
		MEDIABAR_PLAY_PAUSE: "mediabar-play-pause",
		MEDIABAR_SHOW: "mediabar-show",
		ENTITIES_LIST: "entities-list",
		ENTITIES_RESET: "entities-reset",
		REGISTRATION_MODULE: "registration-module",
		TOGGLE_MENU: "toggle-menu",
		TOGGLE_PLAY_PAUSE: "toggle-play-pause",
		FEATURED_ENTITIES: "featured-entities",
		CHECK_CLIENT: "check-client",
		WEBPLAYER_CLOSED: "webplayer-closed",
		PLAY_PAUSE_CURRENT: "play-pause-current",
		RESUME: "resume",
		PAUSE: "pause",
		STOP: "stop",
		PLAY_SPOTIFY_URI: "play-spotify-uri",
		PLAY_PAUSE_TRACK: "play-pause-track",
		CUSTOM_MESSAGE: "custom-message",
		CHANGE_VOLUME: "change-volume",
		CHANGE_POSITION: "change-position",
		CONNECT: "connect",
		READY: "ready",
		SERVICE_CALL: "service-call",
		SERVICE_REPLY: "service-reply",
		PLAYER_POSITION: "player-position",
		TRY_TO_CONNECT: "try-to-connect",
		AUTH_FAILED: "auth-failed",
		QUEUE_SKIP_NEXT: "queue-skip-next",
		QUEUE_SKIP_PREVIOUS: "queue-skip-previous",
		TOKEN_LOST: "token-lost",
		LOGIN: "login",
		LOGIN_BY_FACEBOOK_TOKEN: "login-by-facebook-token",
		SHUFFLE: "shuffle",
		REPEAT: "repeat",
		INTERFACE_AUTH: "interface-auth",
		INTERFACE_DEF: "interface-def"
	};
	var b = function(a)
	{
		"undefined" === typeof a && (a = {});
		var b = a.target || window.parent,
			j = a.targetOrigin || "*",
			f = function(a, b, d)
			{
				a ===
					window && (d = Spotify.Publisher.getTargetOrigin());
				a.postMessage(JSON.stringify(b), d)
			};
		this.attachSendToChildren = function(a)
		{
			var b = this,
				d = function(d)
				{
					d.propagate && b.send(d.key, d, a.contentWindow)
				},
				f;
			for (f in c.Message)
				if (c.Message.hasOwnProperty(f))
				{
					var j = this.getCallbackName(c.Message[f]);
					a[j] = d
				}
		};
		this.send = function(a, c, h, i, m)
		{
			if (Spotify.Util.isPostMessageCompatible())
				if ("undefined" === typeof c && (c = {}), "undefined" === typeof m && (m = !0), "undefined" === typeof c.unique && (c.unique = Spotify.Util.randomId()), "undefined" ===
					typeof c.propagate && (c.propagate = m), "undefined" === typeof h && (h = b), a = {
						key: a,
						data: c
					}, i)
					for (i = 0; i < h.length; i++) f(h[i], a, j);
				else f(h, a, j)
		};
		this.getCallbackName = function(a)
		{
			for (var b = "", a = a.split("-"), b = a.length, d = 0; d < b; d++) a[d] = a[d].charAt(0).toUpperCase() + a[d].slice(1);
			b = a.join("");
			return "on" + b
		};
		this.getKeyByCallbackName = function(a)
		{
			var b = "";
			0 === a.indexOf("on") && (a = a.substring(2));
			b = a.replace(/[A-Z]/g, function(a)
			{
				return "-" + a.toLowerCase()
			});
			0 === b.indexOf("-") && (b = b.substring(1));
			return b
		}
	};
	c.Publisher = {
		instance: null,
		getInstance: function(a)
		{
			this.instance || (this.instance = new b(a));
			return this.instance
		},
		getTargetOrigin: function()
		{
			var a = "";
			return a = "undefined" === typeof window.location.origin ? window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "") : window.location.origin
		}
	};
	return c
}(Spotify ||
{});
Spotify = function(c)
{
	c.Popup = function(b)
	{
		var a = this;
		"undefined" === typeof b.autoClose && (b.autoClose = !1);
		"undefined" === typeof b.absolute && (b.absolute = !0);
		var d = {
				iframeSrc: b.iframeSrc || null,
				parentElement: b.parentElement || document.body,
				sourceElement: b.sourceElement || null,
				view: b.view || null,
				onAfterRender: b.onAfterRender || null,
				onBeforeShow: b.onBeforeShow || null,
				size: b.size || null,
				absolute: b.absolute,
				offset: b.offset || null,
				id: b.id || null,
				autoClose: b.autoClose,
				template: b.template || null,
				actions: b.actions || null,
				popupWindow: b.popupWindow ? b.popupWindow : !1,
				onHideCallback: b.onHideCallback ? b.onHideCallback : null
			},
			c = !1,
			f = null,
			e = null;
		this.show = function()
		{
			if (!c)
			{
				f.children[0].style.display = "block";
				if (d.iframeSrc === null) f.className = f.className + " spotify-show";
				e || (e = Spotify.Util.byClassName("spotify-dialog", f)[0]);
				if (d.size && d.size.length > 0) e.style.width = d.size[0] + "px";
				if (d.size && d.size.length > 1) e.style.height = d.size[1] + "px";
				d.popupWindow || h();
				Spotify.Util.attachEvent("resize", i);
				if (d.autoClose)
				{
					Spotify.Util.attachEvent("keydown",
						m);
					Spotify.Util.attachEvent("click", m)
				}
				c = true;
				if (typeof d.onBeforeShow === "function") d.onBeforeShow()
			}
		};
		this.hide = function()
		{
			if (c)
			{
				f.className = f.className.replace(" spotify-show", "");
				c = false;
				if (window.removeEventListener)
				{
					Spotify.Util.removeEvent("resize", i);
					if (d.autoClose)
					{
						Spotify.Util.removeEvent("keydown", m);
						Spotify.Util.removeEvent("click", m)
					}
				}
				if (typeof d.onHideCallback === "function") d.onHideCallback()
			}
		};
		this.size = function()
		{
			return Spotify.Util.size(e)
		};
		this.destroyElement = function()
		{
			f && Spotify.Util.removeNode(f)
		};
		this.overrideOptions = function(a, b)
		{
			d[a] = b
		};
		this.getOptions = function()
		{
			return d
		};
		this.getContainer = function()
		{
			return e
		};
		this.setPosition = function()
		{
			h()
		};
		this.isVisible = function()
		{
			return c
		};
		var g = function()
			{
				var a = Spotify.View.render("iframe",
				{
					src: d.iframeSrc
				});
				Spotify.Util.iframeReady(a, function()
				{
					f.className = f.className + " spotify-show"
				});
				return a
			},
			h = function()
			{
				var a = Spotify.Util.size(e);
				if (typeof d.absolute !== "undefined" && d.absolute)
				{
					e.style.position = "absolute";
					f.style.position = "absolute"
				}
				if (d.sourceElement)
				{
					var b =
						Spotify.Util.size(d.sourceElement),
						c = Spotify.Util.position(d.sourceElement),
						a = -1 * (a[0] / 2 - b[0] / 2),
						b = d.sourceElement.offsetHeight;
					if (d.offset)
					{
						a = a + d.offset[0];
						b = b + d.offset[1]
					}
					Spotify.Util.setPosition(e,
					{
						x: c.x + a,
						y: c.y + b
					})
				}
				else if (a)
				{
					c = Spotify.Util.getWindowSize();
					e.style.top = parseInt(c[1], 10) / 2 - a[1] / 2 + "px";
					e.style.marginLeft = "-" + a[0] / 2 + "px"
				}
			},
			i = function()
			{
				d.popupWindow || h()
			},
			m = function(b)
			{
				c && (b.type === "click" || b.keyCode == 27) && a.hide()
			};
		(function()
		{
			if (f = Spotify.View.render("base-popup"))
			{
				var a = null;
				if (d.iframeSrc) a =
					g();
				else if (d.view) a = Spotify.View.render(d.view);
				else if (d.template)
				{
					a = d.template;
					Spotify.Util.removeNode(d.template)
				}
				f.children[0].style.display = "none";
				f.children[0].appendChild(a);
				if (d.id) f.className = f.className + (" " + d.id);
				d.parentElement.appendChild(f);
				if (typeof d.onAfterRender === "function") d.onAfterRender(f);
				if (typeof d.actions === "object" && d.actions !== null)
				{
					for (var b in d.actions)
						if (typeof d.actions[b] === "function" && b !== "onRender")
						{
							a = null;
							a = b[0] === "." ? document.querySelector("#" + d.template.id +
								" " + b) : document.getElementById(b);
							Spotify.Util.attachEvent("click", d.actions[b], a)
						}
					if (typeof d.actions.onRender === "function") d.actions.onRender()
				}
			}
		})()
	};
	return c
}(Spotify ||
{});
Spotify = function(c)
{
	var b = {
			TRACK: "track",
			ALBUM: "album",
			ARTIST: "artist",
			PLAYLIST: "playlist",
			TRACKSET: "trackset",
			APP: "app"
		},
		a = Spotify.Util.objectCreate(null);
	a[b.TRACK] = /^spotify:track:/;
	a[b.ALBUM] = /^spotify:album:/;
	a[b.ARTIST] = /^spotify:artist:/;
	a[b.PLAYLIST] = /^spotify:user:.+:(?:playlist:|starred$)/;
	a[b.TRACKSET] = /^spotify:trackset:/;
	a[b.APP] = /^spotify:app:/;
	c.Uri = {
		getType: function(b)
		{
			var c = null,
				f;
			for (f in a)
				if (a[f].test(b))
				{
					c = f;
					break
				}
			return c
		},
		getUsernameFromPlaylistUri: function(a)
		{
			var b = "";
			(a = a.match(/^spotify:user:(.+?):/)) &&
			0 < a.length && (b = a[1]);
			return unescape(b)
		},
		isApp: function(a)
		{
			return null !== /^spotify:app:[a-zA-Z]*/.exec(a)
		},
		getId: function(a)
		{
			return a.split(":").pop()
		}
	};
	c.Uri.Type = b;
	return c
}(Spotify ||
{});
Spotify = function(c)
{
	c.Tracking = {
		TIMEOUT: 2E3,
		send: function(b, a)
		{
			a = "undefined" === typeof a ? !1 : a && window._gaq;
			/*this.isEnabled() && (a || Spotify.Util.ajax("https://embed.spotify.com/l/", b, void 0, this.TIMEOUT), ga("send", "event", b.category, b.action, b.label || "", b.value || 1), Spotify.Logger.log("Tracking step ", b))*/
		},
		isEnabled: function()
		{
			return Spotify.Config.get("tracking")
		}
	};
	c.Tracking.EventTimer = {
		_timeEvents:
		{},
		timestamp: function()
		{
			return (new Date).getTime()
		},
		add: function(b)
		{
			"undefined" === typeof this._timeEvents[b] && (this._timeEvents[b] = {
				start: this.timestamp()
			})
		},
		has: function(b)
		{
			return "undefined" !== typeof this._timeEvents[b]
		},
		remove: function(b)
		{
			delete this._timeEvents[b]
		},
		interval: function(b)
		{
			var a = -1;
			"undefined" !== typeof this._timeEvents[b] && (a = this.timestamp() - this._timeEvents[b].start);
			return a
		}
	};
	return c
}(Spotify ||
{});
Spotify = function(c)
{
	var b = {};
	c.Text = {
		register: function(a, d)
		{
			b[a] = d
		},
		get: function(a, d)
		{
			var c = d;
			"undefined" !== typeof b[a] && "undefined" !== typeof b[a][d] && (c = b[a][d]);
			return c
		}
	};
	return c
}(Spotify ||
{});
Spotify = function(c)
{
	c.ShareGenerator = {
		iframe: function()
		{
			Spotify.Config.get("share-code");
			var b = this.addTrackingParameters(location.href, "embed");
			return Spotify.View.renderAsText("iframe-share",
			{
				width: 428,
				height: 100,
				src: b
			})
		},
		link: function()
		{
			var b = Spotify.ContextConfig.url;
			return b = this.addTrackingParameters(b, "link")
		},
		addTrackingParameters: function(b, a)
		{
			var d = "embed" === a ? "share_embed" : "share_link",
				d = "utm_source=" + encodeURIComponent("spb2") + "&utm_campaign=" + encodeURIComponent(d);
			return b = Spotify.Url.addParameters(b,
				d)
		}
	};
	return c
}(Spotify ||
{});
Spotify = function(c)
{
	var b = {
		INSTALLER_APP: "app",
		INSTALLER_DEFAULT: "default",
		windows: function()
		{
			return this.INSTALLER_DEFAULT
		},
		mac: function()
		{
			var a = this.INSTALLER_DEFAULT;
			null === Spotify.BrowserDetect.getUserAgent().match(/OS X 10.4/) && (a = this.INSTALLER_APP);
			return a
		}
	};
	c.Download = new function()
	{
		var a = function(a, b)
			{
				var d = "",
					c = Spotify.BrowserDetect.OS.toLowerCase();
				"undefined" !== typeof a[c] && (a = a[c], d = "undefined" !== typeof a[b] ? a[b] : a[this.INSTALLER_DEFAULT]);
				return d
			},
			d = Spotify.RegistrationModule;
		this.triggerDownload =
			function(a)
			{
				var b = this;
				window.setTimeout(function()
				{
					var a = b.getInstallerLink();
					"" !== a && (Spotify.Util.setLocationWithIframe(a), d.playContext())
				}, "undefined" === typeof a ? 100 : 1500)
			};
		this.getInstallerType = function(a)
		{
			Spotify.BrowserDetect.initialized || Spotify.BrowserDetect.init();
			var d = this.INSTALLER_DEFAULT,
				c = Spotify.BrowserDetect.OS.toLowerCase();
			"undefined" !== typeof a[c] && "function" === typeof b[c] && (d = b[c](a[c]));
			return d
		};
		this.getInstallerLink = function()
		{
			var b = Spotify.Config.get("download-links"),
				d =
				this.getInstallerType(b);
			return a(b, d)
		}
	};
	return c
}(Spotify ||
{});
Spotify = function(c)
{
	c.isSpotified = function()
	{
		return "1" == Spotify.Cookie.get("spotified")
	};
	c.isLinkSpotified = function()
	{
		return Spotify.Config.get("link-enabled") && (null !== Spotify.Cookie.get("link_spb") || null !== Spotify.Cookie.get("from_wp"))
	};
	c.setSpotified = function(b)
	{
		Spotify.Cookie.set("spotified", b ? "1" : "0", 365)
	};
	return c
}(Spotify ||
{});
Spotify = function(c)
{
	c.PlayNow = {
		Context:
		{
			MEDIABAR: "mediabar",
			SPB: "spb",
			ENTITY: "entity"
		},
		isEnabled: function(b, a)
		{
			return -1 !== Spotify.Config.get("play-now-markets").indexOf(b) && Spotify.Webplayer.isCompatible(a)
		},
		getServiceByContext: function(b)
		{
			var a = "";
			switch (b)
			{
				default:
					case this.Context.SPB:
					a = "./registration/xhr/auth-link.php";
				break;
				case this.Context.MEDIABAR:
						a = "../registration/xhr/auth-link.php";
					break;
				case this.Context.ENTITY:
						a = "../../registration/xhr/auth-link.php"
			}
			return a
		},
		applyAnalyticsParameters: function(b)
		{
			var a =
				"",
				d = "";
			switch (b)
			{
				default:
					case this.Context.SPB:
					a = window.location.href;d = frameReferrer;
				break;
				case this.Context.MEDIABAR:
						case this.Context.ENTITY:
						a = "music.yahoo.com",
					d = document.referrer
			}
			return [a, d]
		},
		activate: function(b, a, d)
		{
			"undefined" === typeof b && (b = this.Context.SPB);
			var c;
			c = Spotify.Webplayer.addParameters("",
			{
				uri: a,
				fbBridge: null,
				token: null,
				source: b === this.Context.SPB ? "spb" : "yahoo",
				defaultTrack: d
			});
			d = Spotify.Config.get("play-now-url");
			d = Spotify.Url.addParameters(d, "p=" + encodeURIComponent(c));
			d = Spotify.Url.addParameters(d,
				"token=" + Spotify.Util.getChallengeToken());
			d = Spotify.Url.addParameters(d, "uri=" + encodeURIComponent(a));
			b = this.applyAnalyticsParameters(b);
			d = Spotify.Url.addParameters(d, "cp=" + encodeURIComponent(b[0]));
			d = Spotify.Url.addParameters(d, "cr=" + encodeURIComponent(b[1]));
			Spotify.Logger.log("Opening play now: " + d);
			b = window.open(d);
			Spotify.WebplayerInspect.inspectWindowStatus(b)
		}
	};
	return c
}(Spotify ||
{});
Spotify = function(c)
{
	c.Prefetch = {
		inject: function(b)
		{
			var a = this._getRelByBrowser();
			if ("undefined" !== typeof b && null !== a)
			{
				Spotify.Logger.log("injecting prefetch type " + a + " for " + b);
				var d = document.getElementsByTagName("head")[0],
					c = document.createElement("link");
				c.rel = a;
				c.href = b;
				d.appendChild(c)
			}
		},
		_getRelByBrowser: function()
		{
			var b = null;
			Spotify.BrowserDetect.initialized || Spotify.BrowserDetect.init();
			switch (Spotify.BrowserDetect.browser.toLowerCase())
			{
				case "chrome":
					b = "prerender";
					break;
				case "firefox":
					b = "prefetch"
			}
			return b
		}
	};
	return c
}(Spotify ||
{});
Spotify = function(c)
{
	c.MetadataService = {
		_fetch: function(b, a)
		{
			$.ajax(
			{
				url: "./xhr/get-info.php?uri=" + encodeURIComponent(b),
				success: function(b)
				{
					a && a(b)
				}
			})
		},
		get: function(b, a)
		{
			var d = localStorage.getItem(b);
			d ? (d = JSON.parse(d), a && a(d)) : this._fetch(b, function(d)
			{
				try
				{
					localStorage.setItem(b, JSON.stringify(d))
				}
				catch (c)
				{
					Spotify.Logger.log("Unable to save metadata to localStorage", c)
				}
				a && a(d)
			})
		}
	};
	return c
}(Spotify ||
{});
Spotify = function(c)
{
	var b = {
		"default":
		{
			source: "embed.spotify.com",
			campaign: "spb",
			medium: "spb"
		},
		"music.yahoo.com":
		{
			source: "music.yahoo.com",
			campaign: "yahoo",
			medium: "bd_partner"
		},
		"last.fm":
		{
			source: "last.fm",
			campaign: "lastfm",
			medium: "bd_partner"
		},
		"coachella.com":
		{
			source: "coachella.com",
			campaign: "coachella",
			medium: "bd_partner"
		}
	};
	c.Webplayer = {
		getValidUrl: function(a)
		{
			"spotify:" === a && (a = "");
			if ("" !== a)
				if (a = a.split(":"), "trackset" === a[1]) var b = "" !== a[2] ? a[2] : "default",
					c = a[3].replace("#", "/%23/"),
					a = a[1] + "/" +
					encodeURIComponent(b) + "/" + c;
				else a = a.splice(1).join("/");
			return Spotify.Config.get("link-url") + a
		},
		open: function(a, b)
		{
			"undefined" === typeof a && (a = {});
			var c = {
					uri: a.uri || "",
					token: a.token || null,
					checkIsLinkSpotified: a.checkIsLinkSpotified || !1,
					fbBridge: a.fbBridge || null,
					source: a.source || "spb",
					newuser: a.newuser || null,
					defaultTrack: a.defaultTrack || null
				},
				f = this.getValidUrl(c.uri),
				f = this.addParameters(f, c);
			Spotify.isLinkSpotified() || !c.checkIsLinkSpotified ? (c = window.open(f), Spotify.WebplayerInspect.inspectWindowStatus(c)) :
				$.ajax(
				{
					async: !1,
					url: "./xhr/auth-link.php",
					data:
					{
						token: Spotify.Util.getChallengeToken()
					},
					success: function(a)
					{
						"true" === a.status && (a = window.open(f), Spotify.WebplayerInspect.inspectWindowStatus(a), b && b())
					},
					type: "POST"
				})
		},
		addParameters: function(a, b)
		{
			if (b.uri && b.defaultTrack)
			{
				var c = "play=true";
				b.defaultTrack !== b.uri && -1 < b.defaultTrack.indexOf("spotify:track:") && (c = "play=" + b.defaultTrack.split(":")[2]);
				a = Spotify.Url.addParameters(a, c)
			}
			null !== b.token && (a = Spotify.Url.addParameters(a, "oauth_token=" + b.token));
			1 == b.newuser && (a = Spotify.Url.addParameters(a, "sp-new-user=1"));
			null !== b.fbBridge && b.fbBridge.getStatus() === Spotify.FbStatus.CONNECTED && (a = Spotify.Url.addParameters(a, "flow=spb"));
			c = this.getUtmTags(b.source);
			"undefined" !== typeof window.frameReferrer && "" !== window.frameReferrer && (c.source = window.frameReferrer);
			return a = Spotify.Url.addParameters(a, "utm_source=" + encodeURIComponent(c.source) + "&utm_medium=" + encodeURIComponent(c.medium) + "&utm_campaign=" + encodeURIComponent(c.campaign))
		},
		getUtmTags: function(a)
		{
			var d =
				b["default"];
			"undefined" !== typeof b[a] && (d = b[a]);
			return d
		},
		isCompatible: function(a)
		{
			var b = !0;
			"undefined" !== typeof a && (b = this.isUriCompatible(a));
			return Spotify.Util.isBrowserCompatible("link-browser-versions", !0) && this.isEnabled() && Spotify.Util.isLocalStorageSupported() && b
		},
		isEnabled: function()
		{
			return Spotify.Config.get("link-enabled")
		},
		isUriCompatible: function(a)
		{
			return 0 > a.indexOf("spotify:artist:")
		},
		getUrl: function(a)
		{
			var b = "",
				c = Spotify.Config.get("link-url");
			"/" !== c[c.length - 1] && (c += "/");
			b = c;
			"undefined" !== typeof a && ("undefined" !== typeof a.entityInformation && (b = c + a.entityInformation.type + "/" + a.entityInformation.id), "undefined" !== typeof a.tracking && (b = Spotify.Url.addParameters(b, "utm_source=" + encodeURIComponent(a.tracking.source) + "&utm_medium=" + encodeURIComponent(a.tracking.medium) + "&utm_campaign=" + encodeURIComponent(a.tracking.campaign))));
			return b
		}
	};
	return c
}(Spotify ||
{});
Spotify = function(c)
{
	c.WebplayerInspect = {
		_window: null,
		_windowStatusListeners: [],
		_statusInterval: null,
		isEnabled: function()
		{
			Spotify.BrowserDetect.init();
			return "explorer" === Spotify.BrowserDetect.browser.toLowerCase() && 9 === Spotify.BrowserDetect.version
		},
		_notifyListeners: function()
		{
			for (var b = 0; b < this._windowStatusListeners.length; b++)
				if ("function" === typeof this._windowStatusListeners[b]) this._windowStatusListeners[b]();
			this.disable()
		},
		_checkInterval: function()
		{
			var b = this;
			null === this._statusInterval && null !==
				this._window && (b = this, this._statusInterval = window.setInterval(function()
				{
					try
					{
						b._window.closed && (Spotify.Logger.log("Detected window closed"), b._notifyListeners())
					}
					catch (a)
					{
						Spotify.Logger.log("Error notifying listeners", a), b._notifyListeners()
					}
				}, 2E3))
		},
		inspectWindowStatus: function(b)
		{
			if (this.isEnabled())
			{
				Spotify.Logger.log("Using webplayer-inspect fallback");
				this._window = b;
				var a = this;
				window.setTimeout(function()
				{
					a._checkInterval()
				}, 500)
			}
		},
		disable: function()
		{
			window.clearInterval(this._statusInterval);
			this._statusInterval = this._window = null
		},
		onClose: function(b)
		{
			this.isEnabled() && this._windowStatusListeners.push(b)
		}
	};
	return c
}(Spotify ||
{});
Spotify = function(c)
{
	c.FbStatus = {
		DISCONNECTED: "disconnected",
		CONNECTED: "connected",
		NOT_AUTHORIZED: "not-authorized",
		ERROR: "error"
	};
	c.Fb = function()
	{
		var b = null,
			a = Spotify.FbStatus.DISCONNECTED,
			c = null,
			j = Spotify.Logger,
			f = function(a, c, d)
			{
				b = b || window.FB;
				b.init(
				{
					appId: a.appId,
					music: "music" in a ? a.music : !1,
					cookie: "cookie" in a ? a.cookie : !0,
					status: "status" in a ? a.status : !1,
					xfbml: "xfbml" in a ? a.xfbml : !1,
					oauth: "oauth" in a ? a.oauth : !1
				});
				e(c, d)
			},
			e = function(a, c)
			{
				b.getLoginStatus(function(b)
				{
					g(b, a, c)
				}, !0)
			},
			g = function(b,
				f, e)
			{
				j.log("[FB] checking response", b);
				switch (b.status)
				{
					case "connected":
						a = Spotify.FbStatus.CONNECTED;
						"undefined" !== typeof b.authResponse && (c = b.authResponse);
						f(b);
						break;
					case "not_authorized":
						a = Spotify.FbStatus.NOT_AUTHORIZED;
						e(b);
						break;
					default:
						a = Spotify.FbStatus.DISCONNECTED, e(b)
				}
			};
		this.getAuthResponse = function()
		{
			return c
		};
		this.connect = function(a, c)
		{
			if (!a || "string" !== typeof a.appId) throw Error("AppId required");
			if (b) e(c, c);
			else
			{
				/*var d = Spotify.View.renderResource("https://connect.facebook.net/en_US/all.js");
				0 < document.getElementsByTagName("head").length && document.getElementsByTagName("head")[0].appendChild(d);
				window.FB ? f(a, c, c) : window.fbAsyncInit = function()
				{
					f(a, c, c)
				}*/
			}
		};
		this.getApi = function()
		{
			if (b) return b;
			throw Error("FB API not initialized");
		};
		this.login = function(a, b)
		{
			this.getApi().login(function(c)
			{
				g(c, a, b)
			})
		};
		this.getStatus = function()
		{
			return a
		};
		this.getGDPURL = function(a, b)
		{
			var c;
			c = "https://www.facebook.com/connect/uiserver.php?method=permissions.request&app_id=" + Spotify.Config.get("fb-app-id");
			c =
				c + "&perms=publish_actions,email,user_birthday&display=popup&locale=en_US&redirect_uri=" + (encodeURIComponent(a) + "&cancel_url=");
			c += encodeURIComponent(b);
			return c + "&height=365&width=612&fbconnect=1&TB_iframe=true&modal=true"
		};
		this.getConnectURL = function(a, b)
		{
			var c = Spotify.Config.get("fb-app-id");
			nextUrl = encodeURIComponent(this.getGDPURL(a, b));
			encodeURIComponent(a);
			b = encodeURIComponent(b);
			return "https://www.facebook.com/login.php?api_key=" + c + "&skip_api_login=1&display=dialog&cancel_url=" + b + "&fbconnect=1&next=" +
				nextUrl + "&rcount=1"
		}
	};
	return c
}(Spotify ||
{});
Spotify = function(c)
{
	c.Cookie = {
		get: function(b)
		{
			for (var a = document.cookie.split(";"), c = "", j = "", f = "", e = 0; e < a.length; e++)
				if (c = a[e].split("="), j = c[0].replace(/^\s+|\s+$/g, ""), j == b) return 1 < c.length && (f = unescape(c[1].replace(/^\s+|\s+$/g, ""))), f;
			return null
		},
		set: function(b, a, c, j, f, e)
		{
			var g = new Date;
			g.setTime(g.getTime());
			c && (c *= 864E5);
			g = new Date(g.getTime() + c);
			document.cookie = b + "=" + escape(a) + (c ? ";expires=" + g.toGMTString() : "") + (j ? ";path=" + j : "") + (f ? ";domain=" + f : "") + (e ? ";secure" : "")
		},
		unset: function(b)
		{
			var a =
				new Date;
			a.setFullYear(a.getFullYear() - 1);
			document.cookie = b + "=null; expires=" + a
		},
		isCookieEnabled: function()
		{
			var b = navigator.cookieEnabled;
			"undefined" === typeof navigator.cookieEnabled && !b && (document.cookie = "testcookie", b = -1 != document.cookie.indexOf("testcookie"));
			return b
		}
	};
	return c
}(Spotify ||
{});
Spotify = function(c)
{
	c.RegistrationModule = new function()
	{
		this.popupManager = null;
		var b, a = "spbsignup",
			d = "REGMODULE_OTHER",
			j = !1,
			f = null,
			e = null,
			g = null,
			h = null;
		this.isFacebookConnected = !1;
		this.parameters = {};
		var i = ["signup-template", "already-have-spotify-template", "country-template", "signup-email-template"];
		this.isResponse = function()
		{
			return "response" === this.parameters.action
		};
		this.open = function(a, b, e, g)
		{
			"undefined" !== typeof a && (d = window.location.href);
			"undefined" !== typeof a && "open-pages" == a && (d = b);
			"undefined" !==
			typeof e && (f = e);
			"undefined" !== typeof g && (j = g);
			a = this.getUrl("select-login");
			c.Util.openWindow(a, "select-login", 340, 476)
		};
		this.getUrl = function(b, e)
		{
			var g = {};
			g.action = "undefined" !== typeof b ? b : this.parameters.action;
			g.uri = "undefined" !== typeof context ? context : this.parameters.uri;
			g.useWebPlayer = "undefined" !== typeof this.parameters.useWebPlayer ? this.parameters.useWebPlayer : j;
			g.defaultTrack = "undefined" != typeof trackId && null !== trackId ? trackId : this.parameters.defaultTrack;
			"undefined" !== typeof e && e && (g.isRedirect =
				"true");
			null !== a && (g.creationFlow = a);
			null !== d && (g.creationPoint = d);
			null !== f && (g.creationReferral = f);
			return Spotify.Url.generate(c.Config.get("server") + "registration/", g)
		};
		this.getPopupManager = function()
		{
			return this.popupManager
		};
		this.onFbConnect = function(b)
		{
			var e = c.RegistrationModule;
			e.isFacebookConnected = !0;
			if (F(e)) this.useWebPlayer() ? (Spotify.Actions.WebPlayer.TokenControl.set(this.getSignupByEmailToken()), this.Tracking.send(e.Tracking.OPEN_WEBPLAYER), this.popupManager.show(c.PopupInfo.OPEN_WEBPLAYER.id)) :
				(this.Tracking.send(this.Tracking.DOWNLOAD_SIGNUP_EMAIL_SEC), this.popupManager.show(c.PopupInfo.DOWNLOAD.id));
			else
			{
				var g = this;
				switch (h.getStatus())
				{
					case c.FbStatus.CONNECTED:
						if (this.useWebPlayer())
							if (b) this.Tracking.send(e.Tracking.ALREADY_HAVE_SPOTIFY), this.popupManager.show(c.PopupInfo.ALREADY.id);
							else
							{
								var j = h.getAuthResponse(),
									b = {
										fb: j.accessToken,
										id: j.userID,
										creation_flow: a,
										creation_point: d,
										creation_referral: f,
										token: Spotify.Util.getChallengeToken()
									};
								Spotify.Util.ajax("/registration/xhr/register-fb.php",
									b,
									function(a)
									{
										g.Tracking.send(e.Tracking.OPEN_WEBPLAYER);
										a && 1 === a.status ? a.new_account ? g.popupManager.show(c.PopupInfo.OPEN_WEBPLAYER.id) : g.popupManager.show(c.PopupInfo.ALREADY.id) : (Spotify.Logger.log("Error during auth-or-create after Facebook connect. FB User ID: " + j.userID, a), g.popupManager.show(c.PopupInfo.OPEN_WEBPLAYER.id))
									}, 1E4, !0)
							}
						else this.Tracking.send(E(this)), this.popupManager.show(c.PopupInfo.DOWNLOAD.id);
						break;
					case c.FbStatus.DISCONNECTED:
					case c.FbStatus.NOT_AUTHORIZED:
					case c.FbStatus.ERROR:
						this.Tracking.send(this.Tracking.SELECT_LOGIN),
							this.popupManager.show(c.PopupInfo.SELECT_LOGIN.id)
				}
			}
		};
		this.initializePopups = function()
		{
			this.popupManager = new c.PopupManager;
			this.popupManager.create(c.PopupInfo.DOWNLOAD.id);
			this.popupManager.create(c.PopupInfo.OPEN_WEBPLAYER.id);
			this.popupManager.create(c.PopupInfo.SELECT_LOGIN.id);
			this.popupManager.create(c.PopupInfo.SIGNUP_EMAIL.id);
			this.popupManager.create(c.PopupInfo.COUNTRY.id);
			this.popupManager.create(c.PopupInfo.ALREADY.id)
		};
		this.init = function(g)
		{
			var i = this;
			Spotify.BrowserDetect.initialized ||
				Spotify.BrowserDetect.init();
			e = Spotify.RemoteControlInit;
			b = g;
			this.parameters = Spotify.Url.read();
			a = this.parameters.creationFlow;
			d = this.parameters.creationPoint;
			f = this.parameters.creationReferral;
			J.apply(this) && this.Tracking.send(this.Tracking.CANCEL_FB);
			"undefined" === typeof this.parameters.overlayMode && (this.parameters.overlayMode = !1);
			if ("undefined" === typeof this.parameters.notifyBridge) this.parameters.notifyBridge = !1;
			else if (g = localStorage.getItem("last-active-trackset")) g = JSON.parse(g), "tracks" in
				g && "position" in g && (this.parameters.uri = "spotify:trackset:mediabar:" + g.tracks.join(",") + "#" + g.position);
			this.parameters.useWebPlayer = "true" === this.parameters.useWebPlayer ? !0 : !1;
			!this.parameters.useWebPlayer && "explorer" === !Spotify.BrowserDetect.browser.toLowerCase() && (this.parameters.useWebPlayer = "music.yahoo.com" === this.parameters.creationPoint ? !0 : j);
			this.initializePopups();
			countryAvailable ? (h = new c.Fb, h.connect(
			{
				appId: c.Config.get("fb-app-id")
			}, function()
			{
				i.onFbConnect(true)
			})) : this.popupManager.show(Spotify.PopupInfo.COUNTRY.id);
			this.parameters.overlayMode && (Spotify.Util.attachEvent("click", function(a)
			{
				a.target.parentElement === null && x(i.popupManager)
			}), Spotify.Util.attachEvent("keydown", function(a)
			{
				a.keyCode == 27 && x(i.popupManager)
			}), m())
		};
		var m = function()
			{
				for (var a = function()
					{
						Spotify.Publisher.getInstance().send(Spotify.Message.CONTROL_POPUP,
						{
							popupId: "registration-module",
							control: "hide"
						}, window.parent)
					}, b = 0; b < i.length; b++)
				{
					var c = document.querySelector("#" + i[b] + " .close-overlay");
					c.style.display = "block";
					Spotify.Util.attachEvent("click",
						a, c)
				}
			},
			x = function(a)
			{
				a.isVisible(c.PopupInfo.SELECT_LOGIN.id) && Spotify.Publisher.getInstance().send(Spotify.Message.CONTROL_POPUP,
				{
					popupId: "registration-module",
					control: "hide"
				}, window.parent)
			};
		this.redirectToFacebookCheck = function()
		{
			h || (h = new c.Fb);
			var a = this.getUrl(void 0, !0),
				b = this.getUrl("cancel", !0),
				a = h.getConnectURL(a, b);
			window.location = a
		};
		this.setSignupByEmailToken = function(a)
		{
			g = a
		};
		this.getSignupByEmailToken = function()
		{
			return g
		};
		this.getFBBridge = function()
		{
			return h
		};
		this.playContext = function(a)
		{
			"undefined" !==
			typeof this.parameters.uri && e.check(
			{
				token: b,
				creationFlow: this.parameters.creationFlow,
				creationPoint: this.parameters.creationPoint,
				creationReferral: this.parameters.creationReferral,
				fbBridge: h,
				signupByEmailToken: g,
				notifyBridge: this.parameters.notifyBridge,
				overlayMode: this.parameters.overlayMode
			}, a)
		};
		this.getContextUri = function()
		{
			var a = "spotify:track:";
			"undefined" !== typeof this.parameters.uri && (a = this.parameters.uri);
			return a
		};
		this.getFbStatus = function()
		{
			return null != h ? h.getStatus() : Spotify.Fb.DISCONNECTED
		};
		this.isCompatible = function()
		{
			return Spotify.Util.isBrowserCompatible("registration-module-browser-versions")
		};
		this.useWebPlayer = function()
		{
			return this.parameters.useWebPlayer && Spotify.Webplayer.isCompatible(this.parameters.uri) && !Spotify.Uri.isApp(this.parameters.uri)
		};
		this.getFBBridge = function()
		{
			return h
		};
		this.close = function()
		{
			var a = this;
			window.setInterval(function()
			{
				a.parameters.notifyBridge ? Spotify.Publisher.getInstance().send(Spotify.Message.CONTROL_POPUP,
					{
						popupId: "registration-module",
						control: "hide"
					},
					window.parent) : window.close()
			}, 400)
		};
		var E = function(a)
			{
				var b = a.Tracking.DOWNLOAD_DIRECT;
				"undefined" !== typeof a.parameters.isRedirect && "true" === a.parameters.isRedirect && (b = a.Tracking.DOWNLOAD_SIGNUP_FACEBOOK);
				return b
			},
			J = function()
			{
				return "undefined" !== typeof this.parameters.action && "cancel" === this.parameters.action
			},
			F = function(a)
			{
				var b = !1; - 1 < window.location.hash.indexOf("emailAuth") && (b = window.location.hash.replace("#emailAuth=", ""), a.setSignupByEmailToken(b), b = !0);
				return b
			}
	};
	return c
}(Spotify ||
{});
(function(c, b)
{
	function a(a, b)
	{
		var c, d, b = b ||
			{},
			a = "raven" + a.substr(0, 1).toUpperCase() + a.substr(1);
		document.createEvent ? (c = document.createEvent("HTMLEvents"), c.initEvent(a, !0, !0)) : (c = document.createEventObject(), c.eventType = a);
		for (d in b) b.hasOwnProperty(d) && (c[d] = b[d]);
		if (document.createEvent) document.dispatchEvent(c);
		else try
		{
			document.fireEvent("on" + c.eventType.toLowerCase(), c)
		}
		catch (f)
		{}
	}

	function d(a)
	{
		this.name = "RavenConfigError";
		this.message = a
	}

	function j(a)
	{
		var b = W.exec(a),
			c = {},
			f = 7;
		try
		{
			for (; f--;) c[ba[f]] =
				b[f] || ""
		}
		catch (e)
		{
			throw new d("Invalid DSN: " + a);
		}
		if (c.pass) throw new d("Do not specify your private key in the DSN!");
		return c
	}

	function f(a)
	{
		return "undefined" === typeof a
	}

	function e(a)
	{
		return "function" === typeof a
	}

	function g(a)
	{
		for (var b in a) return !1;
		return !0
	}

	function h(a, b)
	{
		var c, d;
		if (f(a.length))
			for (c in a) a.hasOwnProperty(c) && b.call(null, c, a[c]);
		else if (d = a.length)
			for (c = 0; c < d; c++) b.call(null, c, a[c])
	}

	function i(b, c)
	{
		var d = [];
		b.stack && b.stack.length && h(b.stack, function(a, b)
		{
			var c;
			if (b.url)
			{
				c = {
					filename: b.url,
					lineno: b.line,
					colno: b.column,
					"function": b.func || "?"
				};
				var e;
				if (b.context && k.fetchContext)
				{
					e = b.context;
					for (var p = ~~(e.length / 2), g = e.length, X = !1; g--;)
						if (300 < e[g].length)
						{
							X = !0;
							break
						}
					e = X ? f(b.column) ? void 0 : [
						[], e[p].substr(b.column, 50), []
					] : [e.slice(0, p), e[p], e.slice(p + 1)]
				}
				else e = void 0;
				if (e)
				{
					g = ["pre_context", "context_line", "post_context"];
					for (p = 3; p--;) c[g[p]] = e[p]
				}
				c.in_app = !(!k.includePaths.test(c.filename) || /(Raven|TraceKit)\./.test(c["function"]) || /raven\.(min\.)js$/.test(c.filename))
			}
			else c = void 0;
			c &&
				d.push(c)
		});
		a("handle",
		{
			stackInfo: b,
			options: c
		});
		m(b.name, b.message, b.url, b.lineno, d, c)
	}

	function m(a, b, c, d, e, f)
	{
		var g, b = b + "";
		"Error" === a && !b || k.ignoreErrors.test(b) || (e && e.length ? (c = e[0].filename || c, e.reverse(), g = {
			frames: e
		}) : c && (g = {
			frames: [
			{
				filename: c,
				lineno: d,
				in_app: !0
			}]
		}), b = 100 >= b.length ? b : b.substr(0, 100) + "\u2026", k.ignoreUrls && k.ignoreUrls.test(c) || k.whitelistUrls && !k.whitelistUrls.test(c) || E(x(
		{
			exception:
			{
				type: a,
				value: b
			},
			stacktrace: g,
			culprit: c,
			message: d ? b + " at " + d : b
		}, f)))
	}

	function x(a, b)
	{
		if (!b) return a;
		h(b, function(b, c)
		{
			a[b] = c
		});
		return a
	}

	function E(a)
	{
		if (F())
		{
			var b = x,
				c = H,
				d = k.logger,
				f = k.site,
				h = {
					url: document.location.href,
					headers:
					{
						"User-Agent": navigator.userAgent
					}
				};
			document.referrer && (h.headers.Referer = document.referrer);
			a = b(
			{
				project: c,
				logger: d,
				site: f,
				platform: "javascript",
				request: h
			}, a);
			a.tags = x(k.tags, a.tags);
			a.extra = x(k.extra, a.extra);
			g(a.tags) && delete a.tags;
			g(a.extra) && delete a.extra;
			N && (a.user = N);
			e(k.dataCallback) && (a = k.dataCallback(a));
			if (!e(k.shouldSendCallback) || k.shouldSendCallback(a)) O =
				a.event_id || (a.event_id = V()), J(a)
		}
	}

	function J(b)
	{
		var c = new Image,
			d = s + R + "&sentry_data=" + encodeURIComponent(JSON.stringify(b));
		c.onload = function()
		{
			a("success",
			{
				data: b,
				src: d
			})
		};
		c.onerror = c.onabort = function()
		{
			a("failure",
			{
				data: b,
				src: d
			})
		};
		c.src = d
	}

	function F()
	{
		return !ca ? !1 : !s ? (c.console && console.error && console.error("Error: Raven has not been configured."), !1) : !0
	}

	function K(a)
	{
		for (var b = [], c = 0, d = a.length, e; c < d; c++) e = a[c], "string" === typeof e ? b.push(e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")) : e && e.source &&
			b.push(e.source);
		return RegExp(b.join("|"), "i")
	}

	function V()
	{
		return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(a)
		{
			var b = 16 * Math.random() | 0;
			return ("x" == a ? b : b & 3 | 8).toString(16)
		})
	}
	var n = {
			remoteFetching: !1,
			collectWindowErrors: !0,
			linesOfContext: 7
		},
		L = [].slice,
		G = "?";
	n.wrap = function(a)
	{
		return function()
		{
			try
			{
				return a.apply(this, arguments)
			}
			catch (b)
			{
				throw n.report(b), b;
			}
		}
	};
	n.report = function()
	{
		function a(b, c)
		{
			var d = null;
			if (!c || n.collectWindowErrors)
			{
				for (var e in g)
					if (Object.prototype.hasOwnProperty.call(g,
							e)) try
					{
						g[e].apply(null, [b].concat(L.call(arguments, 2)))
					}
				catch (f)
				{
					d = f
				}
				if (d) throw d;
			}
		}

		function d(b, c, f, g, aa)
		{
			var A = null;
			j ? (n.computeStackTrace.augmentStackTraceWithInitialElement(j, c, f, b), e()) : (aa ? A = n.computeStackTrace(aa) : (A = {
				url: c,
				line: f,
				column: g
			}, A.func = n.computeStackTrace.guessFunctionName(A.url, A.line), A.context = n.computeStackTrace.gatherContext(A.url, A.line), A = {
				message: b,
				url: document.location.href,
				stack: [A]
			}), a(A, !0));
			return i ? i.apply(this, arguments) : !1
		}

		function e()
		{
			var b = j,
				c = h;
			k = j = h = null;
			a.apply(null, [b, !1].concat(c))
		}

		function f(a, b)
		{
			var d = L.call(arguments, 1);
			if (j)
			{
				if (k === a) return;
				e()
			}
			var g = n.computeStackTrace(a);
			j = g;
			k = a;
			h = d;
			c.setTimeout(function()
			{
				k === a && e()
			}, g.incomplete ? 2E3 : 0);
			if (!1 !== b) throw a;
		}
		var g = [],
			h = null,
			k = null,
			j = null,
			i, m;
		f.subscribe = function(a)
		{
			m || (i = c.onerror, c.onerror = d, m = !0);
			g.push(a)
		};
		f.unsubscribe = function(a)
		{
			for (var b = g.length - 1; 0 <= b; --b) g[b] === a && g.splice(b, 1)
		};
		f.uninstall = function()
		{
			m && (c.onerror = i, m = !1, i = b);
			g = []
		};
		return f
	}();
	n.computeStackTrace = function()
	{
		function a(b)
		{
			if ("string" !==
				typeof b) return [];
			if (!Object.prototype.hasOwnProperty.call(s, b))
			{
				var d = "";
				if (-1 !== b.indexOf(document.domain))
					if (n.remoteFetching) try
					{
						var e;
						try
						{
							e = new c.XMLHttpRequest
						}
						catch (f)
						{
							e = new c.ActiveXObject("Microsoft.XMLHTTP")
						}
						e.open("GET", b, !1);
						e.send("");
						d = e.responseText
					}
				catch (g)
				{
					d = ""
				}
				else d = "";
				s[b] = d ? d.split("\n") : []
			}
			return s[b]
		}

		function b(c, d)
		{
			var e = /function ([^(]*)\(([^)]*)\)/,
				g = /['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,
				h = "",
				j = a(c),
				k;
			if (!j.length) return G;
			for (var i = 0; 10 > i; ++i)
				if (h =
					j[d - i] + h, !f(h) && ((k = g.exec(h)) || (k = e.exec(h)))) return k[1];
			return G
		}

		function d(b, c)
		{
			var e = a(b);
			if (!e.length) return null;
			for (var g = [], h = Math.floor(n.linesOfContext / 2), j = h + n.linesOfContext % 2, h = Math.max(0, c - h - 1), j = Math.min(e.length, c + j - 1); h < j; ++h) f(e[h]) || g.push(e[h]);
			return 0 < g.length ? g : null
		}

		function e(a)
		{
			return a.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g, "\\$&")
		}

		function g(a)
		{
			return e(a).replace("<", "(?:<|&lt;)").replace(">", "(?:>|&gt;)").replace("&", "(?:&|&amp;)").replace('"', '(?:"|&quot;)').replace(/\s+/g,
				"\\s+")
		}

		function h(b, c)
		{
			for (var d, e, f = 0, g = c.length; f < g; ++f)
				if ((d = a(c[f])).length)
					if (d = d.join("\n"), e = b.exec(d)) return {
						url: c[f],
						line: d.substring(0, e.index).split("\n").length,
						column: e.index - d.lastIndexOf("\n", e.index) - 1
					};
			return null
		}

		function j(b, c, d)
		{
			var c = a(c),
				b = RegExp("\\b" + e(b) + "\\b"),
				f, d = d - 1;
			return c && c.length > d && (f = b.exec(c[d])) ? f.index : null
		}

		function k(a)
		{
			var b = [c.location.href],
				d = document.getElementsByTagName("script"),
				a = "" + a,
				f;
			for (f = 0; f < d.length; ++f)
			{
				var j = d[f];
				j.src && b.push(j.src)
			}(d = /^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/.exec(a)) ?
			(f = d[1] ? "\\s+" + d[1] : "", j = d[2].split(",").join("\\s*,\\s*"), d = e(d[3]).replace(/;$/, ";?"), d = RegExp("function" + f + "\\s*\\(\\s*" + j + "\\s*\\)\\s*{\\s*" + d + "\\s*}")) : d = RegExp(e(a).replace(/\s+/g, "\\s+"));
			if (f = h(d, b)) return f;
			if (d = /^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/.exec(a))
				if (a = d[1], d = g(d[2]), (f = h(RegExp("on" + a + "=[\\'\"]\\s*" + d + "\\s*[\\'\"]", "i"), b[0])) || (f = h(RegExp(d), b))) return f;
			return null
		}

		function i(a, c, e, f)
		{
			c = {
				url: c,
				line: e
			};
			if (c.url && c.line)
			{
				a.incomplete = !1;
				c.func || (c.func =
					b(c.url, c.line));
				c.context || (c.context = d(c.url, c.line));
				if (f = / '([^']+)' /.exec(f)) c.column = j(f[1], c.url, c.line);
				if (0 < a.stack.length && a.stack[0].url === c.url)
				{
					if (a.stack[0].line === c.line) return !1;
					if (!a.stack[0].line && a.stack[0].func === c.func) return a.stack[0].line = c.line, a.stack[0].context = c.context, !1
				}
				a.stack.unshift(c);
				return a.partial = !0
			}
			a.incomplete = !0;
			return !1
		}

		function m(a, c)
		{
			for (var d = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, e = [], f = {}, g = !1, h, p, z = m.caller; z && !g; z = z.caller)
				if (!(z ===
						o || z === n.report))
				{
					p = {
						url: null,
						func: G,
						line: null,
						column: null
					};
					if (z.name) p.func = z.name;
					else if (h = d.exec(z.toString())) p.func = h[1];
					if (h = k(z))
					{
						p.url = h.url;
						p.line = h.line;
						p.func === G && (p.func = b(p.url, p.line));
						var t = / '([^']+)' /.exec(a.message || a.description);
						t && (p.column = j(t[1], h.url, h.line))
					}
					f["" + z] ? g = !0 : f["" + z] = !0;
					e.push(p)
				}
			c && e.splice(0, c);
			d = {
				name: a.name,
				message: a.message,
				url: document.location.href,
				stack: e
			};
			i(d, a.sourceURL || a.fileName, a.line || a.lineNumber, a.message || a.description);
			return d
		}

		function o(e,
			k)
		{
			var i = null,
				k = null == k ? 0 : +k;
			try
			{
				for (var n = / line (\d+), column (\d+) in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\) in (.*):\s*$/i, s = e.stacktrace.split("\n"), u = [], y, M = 0, E = s.length; M < E; M += 2)
					if (y = n.exec(s[M]))
					{
						var t = {
							line: +y[1],
							column: +y[2],
							func: y[3] || y[4],
							args: y[5] ? y[5].split(",") : [],
							url: y[6]
						};
						!t.func && t.line && (t.func = b(t.url, t.line));
						if (t.line) try
						{
							t.context = d(t.url, t.line)
						}
						catch (K)
						{}
						t.context || (t.context = [s[M + 1]]);
						u.push(t)
					}
				if (i = !u.length ? null :
					{
						name: e.name,
						message: e.message,
						url: document.location.href,
						stack: u
					}) return i
			}
			catch (F)
			{
				if (x) throw F;
			}
			try
			{
				if (e.stack)
				{
					var n = /^\s*at (?:((?:\[object object\])?\S+(?: \[as \S+\])?) )?\(?((?:file|https?):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
						s = /^\s*(\S*)(?:\((.*?)\))?@((?:file|https?).*?):(\d+)(?::(\d+))?\s*$/i,
						P = e.stack.split("\n"),
						u = [],
						r, v, I = /^(.*) is undefined$/.exec(e.message);
					y = 0;
					for (var S = P.length; y < S; ++y)
					{
						if (r = s.exec(P[y])) v = {
							url: r[3],
							func: r[1] || G,
							args: r[2] ? r[2].split(",") : "",
							line: +r[4],
							column: r[5] ? +r[5] : null
						};
						else if (r = n.exec(P[y])) v = {
							url: r[2],
							func: r[1] || G,
							line: +r[3],
							column: r[4] ? +r[4] : null
						};
						else continue;
						!v.func && v.line && (v.func = b(v.url, v.line));
						v.line && (v.context = d(v.url, v.line));
						u.push(v)
					}
					u.length ? (u[0].line && !u[0].column && I ? u[0].column = j(I[1], u[0].url, u[0].line) : !u[0].column && !f(e.columnNumber) && (u[0].column = e.columnNumber + 1), i = {
						name: e.name,
						message: e.message,
						url: document.location.href,
						stack: u
					}) : i = null
				}
				else i = null;
				if (i) return i
			}
			catch (J)
			{
				if (x) throw J;
			}
			try
			{
				var C = e.message.split("\n");
				if (4 > C.length) i = null;
				else
				{
					P = /^\s*Line (\d+) of linked script ((?:file|https?)\S+)(?:: in function (\S+))?\s*$/i;
					r = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?)\S+)(?:: in function (\S+))?\s*$/i;
					v = /^\s*Line (\d+) of function script\s*$/i;
					var I = [],
						q = document.getElementsByTagName("script"),
						S = [],
						B, w, H, D;
					for (w in q) Object.prototype.hasOwnProperty.call(q, w) && !q[w].src && S.push(q[w]);
					w = 2;
					for (H = C.length; w < H; w += 2)
					{
						q = null;
						if (B = P.exec(C[w])) q = {
							url: B[2],
							func: B[3],
							line: +B[1]
						};
						else if (B = r.exec(C[w]))
						{
							var q = {
									url: B[3],
									func: B[4]
								},
								N = +B[1],
								L = S[B[2] - 1];
							if (L && (D = a(q.url)))
							{
								D = D.join("\n");
								var Z = D.indexOf(L.innerText);
								0 <= Z && (q.line = N + D.substring(0, Z).split("\n").length)
							}
						}
						else if (B = v.exec(C[w]))
						{
							var O = c.location.href.replace(/#.*$/, ""),
								R = B[1],
								T = RegExp(g(C[w + 1]));
							D = h(T, [O]);
							q = {
								url: O,
								line: D ? D.line : R,
								func: ""
							}
						}
						if (q)
						{
							q.func || (q.func = b(q.url, q.line));
							var Q = d(q.url, q.line),
								U = Q ? Q[Math.floor(Q.length / 2)] : null;
							q.context = Q && U.replace(/^\s*/, "") === C[w + 1].replace(/^\s*/, "") ? Q : [C[w + 1]];
							I.push(q)
						}
					}
					i = !I.length ? null :
					{
						name: e.name,
						message: C[0],
						url: document.location.href,
						stack: I
					}
				}
				if (i) return i
			}
			catch (V)
			{
				if (x) throw V;
			}
			try
			{
				if (i = m(e, k +
						1)) return i
			}
			catch (W)
			{
				if (x) throw W;
			}
			return {}
		}
		var x = !1,
			s = {};
		o.augmentStackTraceWithInitialElement = i;
		o.guessFunctionName = b;
		o.gatherContext = d;
		o.ofCaller = function(a)
		{
			try
			{
				throw Error();
			}
			catch (b)
			{
				return o(b, (null == a ? 0 : +a) + 2)
			}
		};
		return o
	}();
	"use strict";
	var da = c.Raven,
		ca = !(!c.JSON || !c.JSON.stringify),
		T, O, s, N, U, H, k = {
			logger: "javascript",
			ignoreErrors: [],
			ignoreUrls: [],
			whitelistUrls: [],
			includePaths: [],
			collectWindowErrors: !0,
			tags:
			{},
			extra:
			{}
		},
		R, o = {
			VERSION: "1.1.15",
			noConflict: function()
			{
				c.Raven = da;
				return o
			},
			config: function(a,
				b)
			{
				if (!a) return o;
				var c = j(a),
					d = c.path.lastIndexOf("/"),
					e = c.path.substr(1, d);
				b && h(b, function(a, b)
				{
					k[a] = b
				});
				k.ignoreErrors.push("Script error.");
				k.ignoreErrors.push("Script error");
				k.ignoreErrors = K(k.ignoreErrors);
				k.ignoreUrls = k.ignoreUrls.length ? K(k.ignoreUrls) : !1;
				k.whitelistUrls = k.whitelistUrls.length ? K(k.whitelistUrls) : !1;
				k.includePaths = K(k.includePaths);
				U = c.user;
				H = c.path.substr(d + 1);
				s = "//" + c.host + (c.port ? ":" + c.port : "") + "/" + e + "api/" + H + "/store/";
				c.protocol && (s = c.protocol + ":" + s);
				k.fetchContext && (n.remoteFetching = !0);
				k.linesOfContext && (n.linesOfContext = k.linesOfContext);
				n.collectWindowErrors = !!k.collectWindowErrors;
				R = "?sentry_version=4&sentry_client=raven-js/" + o.VERSION + "&sentry_key=" + U;
				return o
			},
			install: function()
			{
				F() && n.report.subscribe(i);
				return o
			},
			context: function(a, c, d)
			{
				e(a) && (d = c || [], c = a, a = b);
				return o.wrap(a, c).apply(this, d)
			},
			wrap: function(a, c)
			{
				function d()
				{
					for (var b = [], e = arguments.length, f = !a || a && !1 !== a.deep; e--;) b[e] = f ? o.wrap(a, arguments[e]) : arguments[e];
					try
					{
						return c.apply(this, b)
					}
					catch (g)
					{
						throw o.captureException(g,
							a), g;
					}
				}
				if (f(c) && !e(a)) return a;
				e(a) && (c = a, a = b);
				if (!e(c) || c.__raven__) return c;
				for (var g in c) c.hasOwnProperty(g) && (d[g] = c[g]);
				d.__raven__ = !0;
				d.__inner__ = c;
				return d
			},
			uninstall: function()
			{
				n.report.uninstall();
				return o
			},
			captureException: function(a, b)
			{
				if (!(a instanceof Error)) return o.captureMessage(a, b);
				T = a;
				try
				{
					n.report(a, b)
				}
				catch (c)
				{
					if (a !== c) throw c;
				}
				return o
			},
			captureMessage: function(a, b)
			{
				E(x(
				{
					message: a + ""
				}, b));
				return o
			},
			setUser: function(a)
			{
				N = a;
				return o
			},
			lastException: function()
			{
				return T
			},
			lastEventId: function()
			{
				return O
			}
		},
		ba = "source,protocol,user,pass,host,port,path".split(","),
		W = /^(?:(\w+):)?\/\/(\w+)(:\w+)?@([\w\.-]+)(?::(\d+))?(\/.*)/;
	d.prototype = Error();
	d.prototype.constructor = d;
	(function()
	{
		var a = c.RavenConfig;
		a && o.config(a.dsn, a.config).install()
	})();
	c.Raven = o;
	"function" === typeof define && define.amd && define("raven", [], function()
	{
		return o
	})
})(this);
