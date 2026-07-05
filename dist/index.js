/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function fn(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const s of t.split(",")) e[s] = 1;
  return (s) => s in e;
}
const z = {}, ye = [], Nt = () => {
}, yr = () => !1, Ss = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), ws = (t) => t.startsWith("onUpdate:"), ut = Object.assign, dn = (t, e) => {
  const s = t.indexOf(e);
  s > -1 && t.splice(s, 1);
}, Ni = Object.prototype.hasOwnProperty, G = (t, e) => Ni.call(t, e), D = Array.isArray, _e = (t) => Qe(t) === "[object Map]", _r = (t) => Qe(t) === "[object Set]", Ln = (t) => Qe(t) === "[object Date]", k = (t) => typeof t == "function", et = (t) => typeof t == "string", Ct = (t) => typeof t == "symbol", q = (t) => t !== null && typeof t == "object", br = (t) => (q(t) || k(t)) && k(t.then) && k(t.catch), xr = Object.prototype.toString, Qe = (t) => xr.call(t), ji = (t) => Qe(t).slice(8, -1), Sr = (t) => Qe(t) === "[object Object]", Cs = (t) => et(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Fe = /* @__PURE__ */ fn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Is = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (s) => e[s] || (e[s] = t(s));
}, Ki = /-\w/g, It = Is(
  (t) => t.replace(Ki, (e) => e.slice(1).toUpperCase())
), Vi = /\B([A-Z])/g, ie = Is(
  (t) => t.replace(Vi, "-$1").toLowerCase()
), wr = Is((t) => t.charAt(0).toUpperCase() + t.slice(1)), Fs = Is(
  (t) => t ? `on${wr(t)}` : ""
), Ft = (t, e) => !Object.is(t, e), ds = (t, ...e) => {
  for (let s = 0; s < t.length; s++)
    t[s](...e);
}, Cr = (t, e, s, n = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, hn = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let On;
const Es = () => On || (On = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function pn(t) {
  if (D(t)) {
    const e = {};
    for (let s = 0; s < t.length; s++) {
      const n = t[s], r = et(n) ? Ji(n) : pn(n);
      if (r)
        for (const i in r)
          e[i] = r[i];
    }
    return e;
  } else if (et(t) || q(t))
    return t;
}
const Hi = /;(?![^(]*\))/g, Bi = /:([^]+)/, Wi = /\/\*[^]*?\*\//g;
function Ji(t) {
  const e = {};
  return t.replace(Wi, "").split(Hi).forEach((s) => {
    if (s) {
      const n = s.split(Bi);
      n.length > 1 && (e[n[0].trim()] = n[1].trim());
    }
  }), e;
}
function ne(t) {
  let e = "";
  if (et(t))
    e = t;
  else if (D(t))
    for (let s = 0; s < t.length; s++) {
      const n = ne(t[s]);
      n && (e += n + " ");
    }
  else if (q(t))
    for (const s in t)
      t[s] && (e += s + " ");
  return e.trim();
}
const Gi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Yi = /* @__PURE__ */ fn(Gi);
function Ir(t) {
  return !!t || t === "";
}
function qi(t, e) {
  if (t.length !== e.length) return !1;
  let s = !0;
  for (let n = 0; s && n < t.length; n++)
    s = gn(t[n], e[n]);
  return s;
}
function gn(t, e) {
  if (t === e) return !0;
  let s = Ln(t), n = Ln(e);
  if (s || n)
    return s && n ? t.getTime() === e.getTime() : !1;
  if (s = Ct(t), n = Ct(e), s || n)
    return t === e;
  if (s = D(t), n = D(e), s || n)
    return s && n ? qi(t, e) : !1;
  if (s = q(t), n = q(e), s || n) {
    if (!s || !n)
      return !1;
    const r = Object.keys(t).length, i = Object.keys(e).length;
    if (r !== i)
      return !1;
    for (const o in t) {
      const l = t.hasOwnProperty(o), c = e.hasOwnProperty(o);
      if (l && !c || !l && c || !gn(t[o], e[o]))
        return !1;
    }
  }
  return String(t) === String(e);
}
const Er = (t) => !!(t && t.__v_isRef === !0), tt = (t) => et(t) ? t : t == null ? "" : D(t) || q(t) && (t.toString === xr || !k(t.toString)) ? Er(t) ? tt(t.value) : JSON.stringify(t, Tr, 2) : String(t), Tr = (t, e) => Er(e) ? Tr(t, e.value) : _e(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (s, [n, r], i) => (s[Ns(n, i) + " =>"] = r, s),
    {}
  )
} : _r(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((s) => Ns(s))
} : Ct(e) ? Ns(e) : q(e) && !D(e) && !Sr(e) ? String(e) : e, Ns = (t, e = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ct(t) ? `Symbol(${(s = t.description) != null ? s : e})` : t
  );
};
/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let lt;
class Rr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && lt && (lt.active ? (this.parent = lt, this.index = (lt.scopes || (lt.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let e, s;
      if (this.scopes)
        for (e = 0, s = this.scopes.length; e < s; e++)
          this.scopes[e].pause();
      for (e = 0, s = this.effects.length; e < s; e++)
        this.effects[e].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let e, s;
      if (this.scopes)
        for (e = 0, s = this.scopes.length; e < s; e++)
          this.scopes[e].resume();
      for (e = 0, s = this.effects.length; e < s; e++)
        this.effects[e].resume();
    }
  }
  run(e) {
    if (this._active) {
      const s = lt;
      try {
        return lt = this, e();
      } finally {
        lt = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = lt, lt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (lt === this)
        lt = this.prevScope;
      else {
        let e = lt;
        for (; e; ) {
          if (e.prevScope === this) {
            e.prevScope = this.prevScope;
            break;
          }
          e = e.prevScope;
        }
      }
      this.prevScope = void 0;
    }
  }
  stop(e) {
    if (this._active) {
      this._active = !1;
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++)
        this.effects[s].stop();
      for (this.effects.length = 0, s = 0, n = this.cleanups.length; s < n; s++)
        this.cleanups[s]();
      if (this.cleanups.length = 0, this.scopes) {
        for (s = 0, n = this.scopes.length; s < n; s++)
          this.scopes[s].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !e) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Pr(t) {
  return new Rr(t);
}
function Mr() {
  return lt;
}
function Xi(t, e = !1) {
  lt && lt.cleanups.push(t);
}
let Q;
const js = /* @__PURE__ */ new WeakSet();
class Ar {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, lt && (lt.active ? lt.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, js.has(this) && (js.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Or(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, $n(this), $r(this);
    const e = Q, s = Et;
    Q = this, Et = !0;
    try {
      return this.fn();
    } finally {
      Dr(this), Q = e, Et = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        yn(e);
      this.deps = this.depsTail = void 0, $n(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? js.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Zs(this) && this.run();
  }
  get dirty() {
    return Zs(this);
  }
}
let Lr = 0, Ne, je;
function Or(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = je, je = t;
    return;
  }
  t.next = Ne, Ne = t;
}
function mn() {
  Lr++;
}
function vn() {
  if (--Lr > 0)
    return;
  if (je) {
    let e = je;
    for (je = void 0; e; ) {
      const s = e.next;
      e.next = void 0, e.flags &= -9, e = s;
    }
  }
  let t;
  for (; Ne; ) {
    let e = Ne;
    for (Ne = void 0; e; ) {
      const s = e.next;
      if (e.next = void 0, e.flags &= -9, e.flags & 1)
        try {
          e.trigger();
        } catch (n) {
          t || (t = n);
        }
      e = s;
    }
  }
  if (t) throw t;
}
function $r(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function Dr(t) {
  let e, s = t.depsTail, n = s;
  for (; n; ) {
    const r = n.prevDep;
    n.version === -1 ? (n === s && (s = r), yn(n), zi(n)) : e = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
  }
  t.deps = e, t.depsTail = s;
}
function Zs(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (Ur(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function Ur(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Ye) || (t.globalVersion = Ye, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !Zs(t))))
    return;
  t.flags |= 2;
  const e = t.dep, s = Q, n = Et;
  Q = t, Et = !0;
  try {
    $r(t);
    const r = t.fn(t._value);
    (e.version === 0 || Ft(r, t._value)) && (t.flags |= 128, t._value = r, e.version++);
  } catch (r) {
    throw e.version++, r;
  } finally {
    Q = s, Et = n, Dr(t), t.flags &= -3;
  }
}
function yn(t, e = !1) {
  const { dep: s, prevSub: n, nextSub: r } = t;
  if (n && (n.nextSub = r, t.prevSub = void 0), r && (r.prevSub = n, t.nextSub = void 0), s.subs === t && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let i = s.computed.deps; i; i = i.nextDep)
      yn(i, !0);
  }
  !e && !--s.sc && s.map && s.map.delete(s.key);
}
function zi(t) {
  const { prevDep: e, nextDep: s } = t;
  e && (e.nextDep = s, t.prevDep = void 0), s && (s.prevDep = e, t.nextDep = void 0);
}
let Et = !0;
const kr = [];
function Kt() {
  kr.push(Et), Et = !1;
}
function Vt() {
  const t = kr.pop();
  Et = t === void 0 ? !0 : t;
}
function $n(t) {
  const { cleanup: e } = t;
  if (t.cleanup = void 0, e) {
    const s = Q;
    Q = void 0;
    try {
      e();
    } finally {
      Q = s;
    }
  }
}
let Ye = 0;
class Zi {
  constructor(e, s) {
    this.sub = e, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class _n {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
    if (!Q || !Et || Q === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== Q)
      s = this.activeLink = new Zi(Q, this), Q.deps ? (s.prevDep = Q.depsTail, Q.depsTail.nextDep = s, Q.depsTail = s) : Q.deps = Q.depsTail = s, Fr(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = Q.depsTail, s.nextDep = void 0, Q.depsTail.nextDep = s, Q.depsTail = s, Q.deps === s && (Q.deps = n);
    }
    return s;
  }
  trigger(e) {
    this.version++, Ye++, this.notify(e);
  }
  notify(e) {
    mn();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      vn();
    }
  }
}
function Fr(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let n = e.deps; n; n = n.nextDep)
        Fr(n);
    }
    const s = t.dep.subs;
    s !== t && (t.prevSub = s, s && (s.nextSub = t)), t.dep.subs = t;
  }
}
const ps = /* @__PURE__ */ new WeakMap(), fe = /* @__PURE__ */ Symbol(
  ""
), Qs = /* @__PURE__ */ Symbol(
  ""
), qe = /* @__PURE__ */ Symbol(
  ""
);
function ft(t, e, s) {
  if (Et && Q) {
    let n = ps.get(t);
    n || ps.set(t, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || (n.set(s, r = new _n()), r.map = n, r.key = s), r.track();
  }
}
function Jt(t, e, s, n, r, i) {
  const o = ps.get(t);
  if (!o) {
    Ye++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (mn(), e === "clear")
    o.forEach(l);
  else {
    const c = D(t), d = c && Cs(s);
    if (c && s === "length") {
      const u = Number(n);
      o.forEach((h, _) => {
        (_ === "length" || _ === qe || !Ct(_) && _ >= u) && l(h);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), d && l(o.get(qe)), e) {
        case "add":
          c ? d && l(o.get("length")) : (l(o.get(fe)), _e(t) && l(o.get(Qs)));
          break;
        case "delete":
          c || (l(o.get(fe)), _e(t) && l(o.get(Qs)));
          break;
        case "set":
          _e(t) && l(o.get(fe));
          break;
      }
  }
  vn();
}
function Qi(t, e) {
  const s = ps.get(t);
  return s && s.get(e);
}
function pe(t) {
  const e = /* @__PURE__ */ J(t);
  return e === t ? e : (ft(e, "iterate", qe), /* @__PURE__ */ xt(t) ? e : e.map(Tt));
}
function Ts(t) {
  return ft(t = /* @__PURE__ */ J(t), "iterate", qe), t;
}
function Ut(t, e) {
  return /* @__PURE__ */ Xt(t) ? Ce(/* @__PURE__ */ Yt(t) ? Tt(e) : e) : Tt(e);
}
const to = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ks(this, Symbol.iterator, (t) => Ut(this, t));
  },
  concat(...t) {
    return pe(this).concat(
      ...t.map((e) => D(e) ? pe(e) : e)
    );
  },
  entries() {
    return Ks(this, "entries", (t) => (t[1] = Ut(this, t[1]), t));
  },
  every(t, e) {
    return Ht(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return Ht(
      this,
      "filter",
      t,
      e,
      (s) => s.map((n) => Ut(this, n)),
      arguments
    );
  },
  find(t, e) {
    return Ht(
      this,
      "find",
      t,
      e,
      (s) => Ut(this, s),
      arguments
    );
  },
  findIndex(t, e) {
    return Ht(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return Ht(
      this,
      "findLast",
      t,
      e,
      (s) => Ut(this, s),
      arguments
    );
  },
  findLastIndex(t, e) {
    return Ht(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return Ht(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return Vs(this, "includes", t);
  },
  indexOf(...t) {
    return Vs(this, "indexOf", t);
  },
  join(t) {
    return pe(this).join(t);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...t) {
    return Vs(this, "lastIndexOf", t);
  },
  map(t, e) {
    return Ht(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return Le(this, "pop");
  },
  push(...t) {
    return Le(this, "push", t);
  },
  reduce(t, ...e) {
    return Dn(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return Dn(this, "reduceRight", t, e);
  },
  shift() {
    return Le(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return Ht(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return Le(this, "splice", t);
  },
  toReversed() {
    return pe(this).toReversed();
  },
  toSorted(t) {
    return pe(this).toSorted(t);
  },
  toSpliced(...t) {
    return pe(this).toSpliced(...t);
  },
  unshift(...t) {
    return Le(this, "unshift", t);
  },
  values() {
    return Ks(this, "values", (t) => Ut(this, t));
  }
};
function Ks(t, e, s) {
  const n = Ts(t), r = n[e]();
  return n !== t && !/* @__PURE__ */ xt(t) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = s(i.value)), i;
  }), r;
}
const eo = Array.prototype;
function Ht(t, e, s, n, r, i) {
  const o = Ts(t), l = o !== t && !/* @__PURE__ */ xt(t), c = o[e];
  if (c !== eo[e]) {
    const h = c.apply(t, i);
    return l ? Tt(h) : h;
  }
  let d = s;
  o !== t && (l ? d = function(h, _) {
    return s.call(this, Ut(t, h), _, t);
  } : s.length > 2 && (d = function(h, _) {
    return s.call(this, h, _, t);
  }));
  const u = c.call(o, d, n);
  return l && r ? r(u) : u;
}
function Dn(t, e, s, n) {
  const r = Ts(t), i = r !== t && !/* @__PURE__ */ xt(t);
  let o = s, l = !1;
  r !== t && (i ? (l = n.length === 0, o = function(d, u, h) {
    return l && (l = !1, d = Ut(t, d)), s.call(this, d, Ut(t, u), h, t);
  }) : s.length > 3 && (o = function(d, u, h) {
    return s.call(this, d, u, h, t);
  }));
  const c = r[e](o, ...n);
  return l ? Ut(t, c) : c;
}
function Vs(t, e, s) {
  const n = /* @__PURE__ */ J(t);
  ft(n, "iterate", qe);
  const r = n[e](...s);
  return (r === -1 || r === !1) && /* @__PURE__ */ Ps(s[0]) ? (s[0] = /* @__PURE__ */ J(s[0]), n[e](...s)) : r;
}
function Le(t, e, s = []) {
  Kt(), mn();
  const n = (/* @__PURE__ */ J(t))[e].apply(t, s);
  return vn(), Vt(), n;
}
const so = /* @__PURE__ */ fn("__proto__,__v_isRef,__isVue"), Nr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Ct)
);
function no(t) {
  Ct(t) || (t = String(t));
  const e = /* @__PURE__ */ J(this);
  return ft(e, "has", t), e.hasOwnProperty(t);
}
class jr {
  constructor(e = !1, s = !1) {
    this._isReadonly = e, this._isShallow = s;
  }
  get(e, s, n) {
    if (s === "__v_skip") return e.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (s === "__v_isReactive")
      return !r;
    if (s === "__v_isReadonly")
      return r;
    if (s === "__v_isShallow")
      return i;
    if (s === "__v_raw")
      return n === (r ? i ? po : Br : i ? Hr : Vr).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
    const o = D(e);
    if (!r) {
      let c;
      if (o && (c = to[s]))
        return c;
      if (s === "hasOwnProperty")
        return no;
    }
    const l = Reflect.get(
      e,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ st(e) ? e : n
    );
    if ((Ct(s) ? Nr.has(s) : so(s)) || (r || ft(e, "get", s), i))
      return l;
    if (/* @__PURE__ */ st(l)) {
      const c = o && Cs(s) ? l : l.value;
      return r && q(c) ? /* @__PURE__ */ en(c) : c;
    }
    return q(l) ? r ? /* @__PURE__ */ en(l) : /* @__PURE__ */ Rs(l) : l;
  }
}
class Kr extends jr {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, s, n, r) {
    let i = e[s];
    const o = D(e) && Cs(s);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ Xt(i);
      if (!/* @__PURE__ */ xt(n) && !/* @__PURE__ */ Xt(n) && (i = /* @__PURE__ */ J(i), n = /* @__PURE__ */ J(n)), !o && /* @__PURE__ */ st(i) && !/* @__PURE__ */ st(n))
        return d || (i.value = n), !0;
    }
    const l = o ? Number(s) < e.length : G(e, s), c = Reflect.set(
      e,
      s,
      n,
      /* @__PURE__ */ st(e) ? e : r
    );
    return e === /* @__PURE__ */ J(r) && c && (l ? Ft(n, i) && Jt(e, "set", s, n) : Jt(e, "add", s, n)), c;
  }
  deleteProperty(e, s) {
    const n = G(e, s);
    e[s];
    const r = Reflect.deleteProperty(e, s);
    return r && n && Jt(e, "delete", s, void 0), r;
  }
  has(e, s) {
    const n = Reflect.has(e, s);
    return (!Ct(s) || !Nr.has(s)) && ft(e, "has", s), n;
  }
  ownKeys(e) {
    return ft(
      e,
      "iterate",
      D(e) ? "length" : fe
    ), Reflect.ownKeys(e);
  }
}
class ro extends jr {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, s) {
    return !0;
  }
  deleteProperty(e, s) {
    return !0;
  }
}
const io = /* @__PURE__ */ new Kr(), oo = /* @__PURE__ */ new ro(), lo = /* @__PURE__ */ new Kr(!0);
const tn = (t) => t, os = (t) => Reflect.getPrototypeOf(t);
function co(t, e, s) {
  return function(...n) {
    const r = this.__v_raw, i = /* @__PURE__ */ J(r), o = _e(i), l = t === "entries" || t === Symbol.iterator && o, c = t === "keys" && o, d = r[t](...n), u = s ? tn : e ? Ce : Tt;
    return !e && ft(
      i,
      "iterate",
      c ? Qs : fe
    ), ut(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: h, done: _ } = d.next();
          return _ ? { value: h, done: _ } : {
            value: l ? [u(h[0]), u(h[1])] : u(h),
            done: _
          };
        }
      }
    );
  };
}
function ls(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function ao(t, e) {
  const s = {
    get(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ J(i), l = /* @__PURE__ */ J(r);
      t || (Ft(r, l) && ft(o, "get", r), ft(o, "get", l));
      const { has: c } = os(o), d = e ? tn : t ? Ce : Tt;
      if (c.call(o, r))
        return d(i.get(r));
      if (c.call(o, l))
        return d(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !t && ft(/* @__PURE__ */ J(r), "iterate", fe), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ J(i), l = /* @__PURE__ */ J(r);
      return t || (Ft(r, l) && ft(o, "has", r), ft(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ J(l), d = e ? tn : t ? Ce : Tt;
      return !t && ft(c, "iterate", fe), l.forEach((u, h) => r.call(i, d(u), d(h), o));
    }
  };
  return ut(
    s,
    t ? {
      add: ls("add"),
      set: ls("set"),
      delete: ls("delete"),
      clear: ls("clear")
    } : {
      add(r) {
        const i = /* @__PURE__ */ J(this), o = os(i), l = /* @__PURE__ */ J(r), c = !e && !/* @__PURE__ */ xt(r) && !/* @__PURE__ */ Xt(r) ? l : r;
        return o.has.call(i, c) || Ft(r, c) && o.has.call(i, r) || Ft(l, c) && o.has.call(i, l) || (i.add(c), Jt(i, "add", c, c)), this;
      },
      set(r, i) {
        !e && !/* @__PURE__ */ xt(i) && !/* @__PURE__ */ Xt(i) && (i = /* @__PURE__ */ J(i));
        const o = /* @__PURE__ */ J(this), { has: l, get: c } = os(o);
        let d = l.call(o, r);
        d || (r = /* @__PURE__ */ J(r), d = l.call(o, r));
        const u = c.call(o, r);
        return o.set(r, i), d ? Ft(i, u) && Jt(o, "set", r, i) : Jt(o, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ J(this), { has: o, get: l } = os(i);
        let c = o.call(i, r);
        c || (r = /* @__PURE__ */ J(r), c = o.call(i, r)), l && l.call(i, r);
        const d = i.delete(r);
        return c && Jt(i, "delete", r, void 0), d;
      },
      clear() {
        const r = /* @__PURE__ */ J(this), i = r.size !== 0, o = r.clear();
        return i && Jt(
          r,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    s[r] = co(r, t, e);
  }), s;
}
function bn(t, e) {
  const s = ao(t, e);
  return (n, r, i) => r === "__v_isReactive" ? !t : r === "__v_isReadonly" ? t : r === "__v_raw" ? n : Reflect.get(
    G(s, r) && r in n ? s : n,
    r,
    i
  );
}
const uo = {
  get: /* @__PURE__ */ bn(!1, !1)
}, fo = {
  get: /* @__PURE__ */ bn(!1, !0)
}, ho = {
  get: /* @__PURE__ */ bn(!0, !1)
};
const Vr = /* @__PURE__ */ new WeakMap(), Hr = /* @__PURE__ */ new WeakMap(), Br = /* @__PURE__ */ new WeakMap(), po = /* @__PURE__ */ new WeakMap();
function go(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
// @__NO_SIDE_EFFECTS__
function Rs(t) {
  return /* @__PURE__ */ Xt(t) ? t : xn(
    t,
    !1,
    io,
    uo,
    Vr
  );
}
// @__NO_SIDE_EFFECTS__
function mo(t) {
  return xn(
    t,
    !1,
    lo,
    fo,
    Hr
  );
}
// @__NO_SIDE_EFFECTS__
function en(t) {
  return xn(
    t,
    !0,
    oo,
    ho,
    Br
  );
}
function xn(t, e, s, n, r) {
  if (!q(t) || t.__v_raw && !(e && t.__v_isReactive) || t.__v_skip || !Object.isExtensible(t))
    return t;
  const i = r.get(t);
  if (i)
    return i;
  const o = go(ji(t));
  if (o === 0)
    return t;
  const l = new Proxy(
    t,
    o === 2 ? n : s
  );
  return r.set(t, l), l;
}
// @__NO_SIDE_EFFECTS__
function Yt(t) {
  return /* @__PURE__ */ Xt(t) ? /* @__PURE__ */ Yt(t.__v_raw) : !!(t && t.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Xt(t) {
  return !!(t && t.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function xt(t) {
  return !!(t && t.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ps(t) {
  return t ? !!t.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function J(t) {
  const e = t && t.__v_raw;
  return e ? /* @__PURE__ */ J(e) : t;
}
function Sn(t) {
  return !G(t, "__v_skip") && Object.isExtensible(t) && Cr(t, "__v_skip", !0), t;
}
const Tt = (t) => q(t) ? /* @__PURE__ */ Rs(t) : t, Ce = (t) => q(t) ? /* @__PURE__ */ en(t) : t;
// @__NO_SIDE_EFFECTS__
function st(t) {
  return t ? t.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function jt(t) {
  return vo(t, !1);
}
function vo(t, e) {
  return /* @__PURE__ */ st(t) ? t : new yo(t, e);
}
class yo {
  constructor(e, s) {
    this.dep = new _n(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? e : /* @__PURE__ */ J(e), this._value = s ? e : Tt(e), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ xt(e) || /* @__PURE__ */ Xt(e);
    e = n ? e : /* @__PURE__ */ J(e), Ft(e, s) && (this._rawValue = e, this._value = n ? e : Tt(e), this.dep.trigger());
  }
}
function K(t) {
  return /* @__PURE__ */ st(t) ? t.value : t;
}
const _o = {
  get: (t, e, s) => e === "__v_raw" ? t : K(Reflect.get(t, e, s)),
  set: (t, e, s, n) => {
    const r = t[e];
    return /* @__PURE__ */ st(r) && !/* @__PURE__ */ st(s) ? (r.value = s, !0) : Reflect.set(t, e, s, n);
  }
};
function Wr(t) {
  return /* @__PURE__ */ Yt(t) ? t : new Proxy(t, _o);
}
// @__NO_SIDE_EFFECTS__
function bo(t) {
  const e = D(t) ? new Array(t.length) : {};
  for (const s in t)
    e[s] = So(t, s);
  return e;
}
class xo {
  constructor(e, s, n) {
    this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = Ct(s) ? s : String(s), this._raw = /* @__PURE__ */ J(e);
    let r = !0, i = e;
    if (!D(e) || Ct(this._key) || !Cs(this._key))
      do
        r = !/* @__PURE__ */ Ps(i) || /* @__PURE__ */ xt(i);
      while (r && (i = i.__v_raw));
    this._shallow = r;
  }
  get value() {
    let e = this._object[this._key];
    return this._shallow && (e = K(e)), this._value = e === void 0 ? this._defaultValue : e;
  }
  set value(e) {
    if (this._shallow && /* @__PURE__ */ st(this._raw[this._key])) {
      const s = this._object[this._key];
      if (/* @__PURE__ */ st(s)) {
        s.value = e;
        return;
      }
    }
    this._object[this._key] = e;
  }
  get dep() {
    return Qi(this._raw, this._key);
  }
}
function So(t, e, s) {
  return new xo(t, e, s);
}
class wo {
  constructor(e, s, n) {
    this.fn = e, this.setter = s, this._value = void 0, this.dep = new _n(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ye - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Q !== this)
      return Or(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return Ur(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
// @__NO_SIDE_EFFECTS__
function Co(t, e, s = !1) {
  let n, r;
  return k(t) ? n = t : (n = t.get, r = t.set), new wo(n, r, s);
}
const cs = {}, gs = /* @__PURE__ */ new WeakMap();
let ue;
function Io(t, e = !1, s = ue) {
  if (s) {
    let n = gs.get(s);
    n || gs.set(s, n = []), n.push(t);
  }
}
function Eo(t, e, s = z) {
  const { immediate: n, deep: r, once: i, scheduler: o, augmentJob: l, call: c } = s, d = (R) => r ? R : /* @__PURE__ */ xt(R) || r === !1 || r === 0 ? Gt(R, 1) : Gt(R);
  let u, h, _, x, I = !1, b = !1;
  if (/* @__PURE__ */ st(t) ? (h = () => t.value, I = /* @__PURE__ */ xt(t)) : /* @__PURE__ */ Yt(t) ? (h = () => d(t), I = !0) : D(t) ? (b = !0, I = t.some((R) => /* @__PURE__ */ Yt(R) || /* @__PURE__ */ xt(R)), h = () => t.map((R) => {
    if (/* @__PURE__ */ st(R))
      return R.value;
    if (/* @__PURE__ */ Yt(R))
      return d(R);
    if (k(R))
      return c ? c(R, 2) : R();
  })) : k(t) ? e ? h = c ? () => c(t, 2) : t : h = () => {
    if (_) {
      Kt();
      try {
        _();
      } finally {
        Vt();
      }
    }
    const R = ue;
    ue = u;
    try {
      return c ? c(t, 3, [x]) : t(x);
    } finally {
      ue = R;
    }
  } : h = Nt, e && r) {
    const R = h, B = r === !0 ? 1 / 0 : r;
    h = () => Gt(R(), B);
  }
  const M = Mr(), O = () => {
    u.stop(), M && M.active && dn(M.effects, u);
  };
  if (i && e) {
    const R = e;
    e = (...B) => {
      const dt = R(...B);
      return O(), dt;
    };
  }
  let A = b ? new Array(t.length).fill(cs) : cs;
  const C = (R) => {
    if (!(!(u.flags & 1) || !u.dirty && !R))
      if (e) {
        const B = u.run();
        if (R || r || I || (b ? B.some((dt, rt) => Ft(dt, A[rt])) : Ft(B, A))) {
          _ && _();
          const dt = ue;
          ue = u;
          try {
            const rt = [
              B,
              // pass undefined as the old value when it's changed for the first time
              A === cs ? void 0 : b && A[0] === cs ? [] : A,
              x
            ];
            A = B, c ? c(e, 3, rt) : (
              // @ts-expect-error
              e(...rt)
            );
          } finally {
            ue = dt;
          }
        }
      } else
        u.run();
  };
  return l && l(C), u = new Ar(h), u.scheduler = o ? () => o(C, !1) : C, x = (R) => Io(R, !1, u), _ = u.onStop = () => {
    const R = gs.get(u);
    if (R) {
      if (c)
        c(R, 4);
      else
        for (const B of R) B();
      gs.delete(u);
    }
  }, e ? n ? C(!0) : A = u.run() : o ? o(C.bind(null, !0), !0) : u.run(), O.pause = u.pause.bind(u), O.resume = u.resume.bind(u), O.stop = O, O;
}
function Gt(t, e = 1 / 0, s) {
  if (e <= 0 || !q(t) || t.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(t) || 0) >= e))
    return t;
  if (s.set(t, e), e--, /* @__PURE__ */ st(t))
    Gt(t.value, e, s);
  else if (D(t))
    for (let n = 0; n < t.length; n++)
      Gt(t[n], e, s);
  else if (_r(t) || _e(t))
    t.forEach((n) => {
      Gt(n, e, s);
    });
  else if (Sr(t)) {
    for (const n in t)
      Gt(t[n], e, s);
    for (const n of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, n) && Gt(t[n], e, s);
  }
  return t;
}
/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ts(t, e, s, n) {
  try {
    return n ? t(...n) : t();
  } catch (r) {
    Ms(r, e, s);
  }
}
function Rt(t, e, s, n) {
  if (k(t)) {
    const r = ts(t, e, s, n);
    return r && br(r) && r.catch((i) => {
      Ms(i, e, s);
    }), r;
  }
  if (D(t)) {
    const r = [];
    for (let i = 0; i < t.length; i++)
      r.push(Rt(t[i], e, s, n));
    return r;
  }
}
function Ms(t, e, s, n = !0) {
  const r = e ? e.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = e && e.appContext.config || z;
  if (e) {
    let l = e.parent;
    const c = e.proxy, d = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let h = 0; h < u.length; h++)
          if (u[h](t, c, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Kt(), ts(i, null, 10, [
        t,
        c,
        d
      ]), Vt();
      return;
    }
  }
  To(t, s, r, n, o);
}
function To(t, e, s, n = !0, r = !1) {
  if (r)
    throw t;
  console.error(t);
}
const pt = [];
let Dt = -1;
const be = [];
let ee = null, me = 0;
const Jr = /* @__PURE__ */ Promise.resolve();
let ms = null;
function Gr(t) {
  const e = ms || Jr;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Ro(t) {
  let e = Dt + 1, s = pt.length;
  for (; e < s; ) {
    const n = e + s >>> 1, r = pt[n], i = Xe(r);
    i < t || i === t && r.flags & 2 ? e = n + 1 : s = n;
  }
  return e;
}
function wn(t) {
  if (!(t.flags & 1)) {
    const e = Xe(t), s = pt[pt.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= Xe(s) ? pt.push(t) : pt.splice(Ro(e), 0, t), t.flags |= 1, Yr();
  }
}
function Yr() {
  ms || (ms = Jr.then(Xr));
}
function Po(t) {
  D(t) ? be.push(...t) : ee && t.id === -1 ? ee.splice(me + 1, 0, t) : t.flags & 1 || (be.push(t), t.flags |= 1), Yr();
}
function Un(t, e, s = Dt + 1) {
  for (; s < pt.length; s++) {
    const n = pt[s];
    if (n && n.flags & 2) {
      if (t && n.id !== t.uid)
        continue;
      pt.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function qr(t) {
  if (be.length) {
    const e = [...new Set(be)].sort(
      (s, n) => Xe(s) - Xe(n)
    );
    if (be.length = 0, ee) {
      ee.push(...e);
      return;
    }
    for (ee = e, me = 0; me < ee.length; me++) {
      const s = ee[me];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    ee = null, me = 0;
  }
}
const Xe = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function Xr(t) {
  try {
    for (Dt = 0; Dt < pt.length; Dt++) {
      const e = pt[Dt];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), ts(
        e,
        e.i,
        e.i ? 15 : 14
      ), e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; Dt < pt.length; Dt++) {
      const e = pt[Dt];
      e && (e.flags &= -2);
    }
    Dt = -1, pt.length = 0, qr(), ms = null, (pt.length || be.length) && Xr();
  }
}
let wt = null, zr = null;
function vs(t) {
  const e = wt;
  return wt = t, zr = t && t.type.__scopeId || null, e;
}
function Mo(t, e = wt, s) {
  if (!e || t._n)
    return t;
  const n = (...r) => {
    n._d && Gn(-1);
    const i = vs(e);
    let o;
    try {
      o = t(...r);
    } finally {
      vs(i), n._d && Gn(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function $e(t, e) {
  if (wt === null)
    return t;
  const s = $s(wt), n = t.dirs || (t.dirs = []);
  for (let r = 0; r < e.length; r++) {
    let [i, o, l, c = z] = e[r];
    i && (k(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Gt(o), n.push({
      dir: i,
      instance: s,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return t;
}
function ce(t, e, s, n) {
  const r = t.dirs, i = e && e.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let c = l.dir[n];
    c && (Kt(), Rt(c, s, 8, [
      t.el,
      l,
      t,
      e
    ]), Vt());
  }
}
function Ao(t, e) {
  if (gt) {
    let s = gt.provides;
    const n = gt.parent && gt.parent.provides;
    n === s && (s = gt.provides = Object.create(n)), s[t] = e;
  }
}
function Ke(t, e, s = !1) {
  const n = Ei();
  if (n || de) {
    let r = de ? de._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (r && t in r)
      return r[t];
    if (arguments.length > 1)
      return s && k(e) ? e.call(n && n.proxy) : e;
  }
}
function Lo() {
  return !!(Ei() || de);
}
const Oo = /* @__PURE__ */ Symbol.for("v-scx"), $o = () => Ke(Oo);
function Ve(t, e, s) {
  return Zr(t, e, s);
}
function Zr(t, e, s = z) {
  const { immediate: n, deep: r, flush: i, once: o } = s, l = ut({}, s), c = e && n || !e && i !== "post";
  let d;
  if (Ze) {
    if (i === "sync") {
      const x = $o();
      d = x.__watcherHandles || (x.__watcherHandles = []);
    } else if (!c) {
      const x = () => {
      };
      return x.stop = Nt, x.resume = Nt, x.pause = Nt, x;
    }
  }
  const u = gt;
  l.call = (x, I, b) => Rt(x, u, I, b);
  let h = !1;
  i === "post" ? l.scheduler = (x) => {
    mt(x, u && u.suspense);
  } : i !== "sync" && (h = !0, l.scheduler = (x, I) => {
    I ? x() : wn(x);
  }), l.augmentJob = (x) => {
    e && (x.flags |= 4), h && (x.flags |= 2, u && (x.id = u.uid, x.i = u));
  };
  const _ = Eo(t, e, l);
  return Ze && (d ? d.push(_) : c && _()), _;
}
function Do(t, e, s) {
  const n = this.proxy, r = et(t) ? t.includes(".") ? Qr(n, t) : () => n[t] : t.bind(n, n);
  let i;
  k(e) ? i = e : (i = e.handler, s = e);
  const o = es(this), l = Zr(r, i.bind(n), s);
  return o(), l;
}
function Qr(t, e) {
  const s = e.split(".");
  return () => {
    let n = t;
    for (let r = 0; r < s.length && n; r++)
      n = n[s[r]];
    return n;
  };
}
const Uo = /* @__PURE__ */ Symbol("_vte"), ko = (t) => t.__isTeleport, Hs = /* @__PURE__ */ Symbol("_leaveCb");
function Cn(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, Cn(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
// @__NO_SIDE_EFFECTS__
function Ee(t, e) {
  return k(t) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ut({ name: t.name }, e, { setup: t })
  ) : t;
}
function ti(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function kn(t, e) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(t, e)) && !s.configurable);
}
const ys = /* @__PURE__ */ new WeakMap();
function He(t, e, s, n, r = !1) {
  if (D(t)) {
    t.forEach(
      (b, M) => He(
        b,
        e && (D(e) ? e[M] : e),
        s,
        n,
        r
      )
    );
    return;
  }
  if (Be(n) && !r) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && He(t, e, s, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? $s(n.component) : n.el, o = r ? null : i, { i: l, r: c } = t, d = e && e.r, u = l.refs === z ? l.refs = {} : l.refs, h = l.setupState, _ = /* @__PURE__ */ J(h), x = h === z ? yr : (b) => kn(u, b) ? !1 : G(_, b), I = (b, M) => !(M && kn(u, M));
  if (d != null && d !== c) {
    if (Fn(e), et(d))
      u[d] = null, x(d) && (h[d] = null);
    else if (/* @__PURE__ */ st(d)) {
      const b = e;
      I(d, b.k) && (d.value = null), b.k && (u[b.k] = null);
    }
  }
  if (k(c)) {
    Kt();
    try {
      ts(c, l, 12, [o, u]);
    } finally {
      Vt();
    }
  } else {
    const b = et(c), M = /* @__PURE__ */ st(c);
    if (b || M) {
      const O = () => {
        if (t.f) {
          const A = b ? x(c) ? h[c] : u[c] : I() || !t.k ? c.value : u[t.k];
          if (r)
            D(A) && dn(A, i);
          else if (D(A))
            A.includes(i) || A.push(i);
          else if (b)
            u[c] = [i], x(c) && (h[c] = u[c]);
          else {
            const C = [i];
            I(c, t.k) && (c.value = C), t.k && (u[t.k] = C);
          }
        } else b ? (u[c] = o, x(c) && (h[c] = o)) : M && (I(c, t.k) && (c.value = o), t.k && (u[t.k] = o));
      };
      if (o) {
        const A = () => {
          O(), ys.delete(t);
        };
        A.id = -1, ys.set(t, A), mt(A, s);
      } else
        Fn(t), O();
    }
  }
}
function Fn(t) {
  const e = ys.get(t);
  e && (e.flags |= 8, ys.delete(t));
}
Es().requestIdleCallback;
Es().cancelIdleCallback;
const Be = (t) => !!t.type.__asyncLoader, ei = (t) => t.type.__isKeepAlive;
function Fo(t, e) {
  si(t, "a", e);
}
function No(t, e) {
  si(t, "da", e);
}
function si(t, e, s = gt) {
  const n = t.__wdc || (t.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return t();
  });
  if (As(e, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      ei(r.parent.vnode) && jo(n, e, s, r), r = r.parent;
  }
}
function jo(t, e, s, n) {
  const r = As(
    e,
    t,
    n,
    !0
    /* prepend */
  );
  ii(() => {
    dn(n[e], r);
  }, s);
}
function As(t, e, s = gt, n = !1) {
  if (s) {
    const r = s[t] || (s[t] = []), i = e.__weh || (e.__weh = (...o) => {
      Kt();
      const l = es(s), c = Rt(e, s, t, o);
      return l(), Vt(), c;
    });
    return n ? r.unshift(i) : r.push(i), i;
  }
}
const zt = (t) => (e, s = gt) => {
  (!Ze || t === "sp") && As(t, (...n) => e(...n), s);
}, Ko = zt("bm"), ni = zt("m"), Vo = zt(
  "bu"
), Ho = zt("u"), ri = zt(
  "bum"
), ii = zt("um"), Bo = zt(
  "sp"
), Wo = zt("rtg"), Jo = zt("rtc");
function Go(t, e = gt) {
  As("ec", t, e);
}
const Yo = /* @__PURE__ */ Symbol.for("v-ndc");
function xe(t, e, s, n) {
  let r;
  const i = s, o = D(t);
  if (o || et(t)) {
    const l = o && /* @__PURE__ */ Yt(t);
    let c = !1, d = !1;
    l && (c = !/* @__PURE__ */ xt(t), d = /* @__PURE__ */ Xt(t), t = Ts(t)), r = new Array(t.length);
    for (let u = 0, h = t.length; u < h; u++)
      r[u] = e(
        c ? d ? Ce(Tt(t[u])) : Tt(t[u]) : t[u],
        u,
        void 0,
        i
      );
  } else if (typeof t == "number") {
    r = new Array(t);
    for (let l = 0; l < t; l++)
      r[l] = e(l + 1, l, void 0, i);
  } else if (q(t))
    if (t[Symbol.iterator])
      r = Array.from(
        t,
        (l, c) => e(l, c, void 0, i)
      );
    else {
      const l = Object.keys(t);
      r = new Array(l.length);
      for (let c = 0, d = l.length; c < d; c++) {
        const u = l[c];
        r[c] = e(t[u], u, c, i);
      }
    }
  else
    r = [];
  return r;
}
const sn = (t) => t ? Ti(t) ? $s(t) : sn(t.parent) : null, We = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ut(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => sn(t.parent),
    $root: (t) => sn(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => li(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      wn(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = Gr.bind(t.proxy)),
    $watch: (t) => Do.bind(t)
  })
), Bs = (t, e) => t !== z && !t.__isScriptSetup && G(t, e), qo = {
  get({ _: t }, e) {
    if (e === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: r, props: i, accessCache: o, type: l, appContext: c } = t;
    if (e[0] !== "$") {
      const _ = o[e];
      if (_ !== void 0)
        switch (_) {
          case 1:
            return n[e];
          case 2:
            return r[e];
          case 4:
            return s[e];
          case 3:
            return i[e];
        }
      else {
        if (Bs(n, e))
          return o[e] = 1, n[e];
        if (r !== z && G(r, e))
          return o[e] = 2, r[e];
        if (G(i, e))
          return o[e] = 3, i[e];
        if (s !== z && G(s, e))
          return o[e] = 4, s[e];
        nn && (o[e] = 0);
      }
    }
    const d = We[e];
    let u, h;
    if (d)
      return e === "$attrs" && ft(t.attrs, "get", ""), d(t);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[e])
    )
      return u;
    if (s !== z && G(s, e))
      return o[e] = 4, s[e];
    if (
      // global properties
      h = c.config.globalProperties, G(h, e)
    )
      return h[e];
  },
  set({ _: t }, e, s) {
    const { data: n, setupState: r, ctx: i } = t;
    return Bs(r, e) ? (r[e] = s, !0) : n !== z && G(n, e) ? (n[e] = s, !0) : G(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (i[e] = s, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: s, ctx: n, appContext: r, props: i, type: o }
  }, l) {
    let c;
    return !!(s[l] || t !== z && l[0] !== "$" && G(t, l) || Bs(e, l) || G(i, l) || G(n, l) || G(We, l) || G(r.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(t, e, s) {
    return s.get != null ? t._.accessCache[e] = 0 : G(s, "value") && this.set(t, e, s.value, null), Reflect.defineProperty(t, e, s);
  }
};
function Nn(t) {
  return D(t) ? t.reduce(
    (e, s) => (e[s] = null, e),
    {}
  ) : t;
}
let nn = !0;
function Xo(t) {
  const e = li(t), s = t.proxy, n = t.ctx;
  nn = !1, e.beforeCreate && jn(e.beforeCreate, t, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: c,
    inject: d,
    // lifecycle
    created: u,
    beforeMount: h,
    mounted: _,
    beforeUpdate: x,
    updated: I,
    activated: b,
    deactivated: M,
    beforeDestroy: O,
    beforeUnmount: A,
    destroyed: C,
    unmounted: R,
    render: B,
    renderTracked: dt,
    renderTriggered: rt,
    errorCaptured: N,
    serverPrefetch: V,
    // public API
    expose: it,
    inheritAttrs: St,
    // assets
    components: Pt,
    directives: Zt,
    filters: Re
  } = e;
  if (d && zo(d, n, null), o)
    for (const j in o) {
      const Z = o[j];
      k(Z) && (n[j] = Z.bind(s));
    }
  if (r) {
    const j = r.call(s, s);
    q(j) && (t.data = /* @__PURE__ */ Rs(j));
  }
  if (nn = !0, i)
    for (const j in i) {
      const Z = i[j], oe = k(Z) ? Z.bind(s, s) : k(Z.get) ? Z.get.bind(s, s) : Nt, rs = !k(Z) && k(Z.set) ? Z.set.bind(s) : Nt, le = se({
        get: oe,
        set: rs
      });
      Object.defineProperty(n, j, {
        enumerable: !0,
        configurable: !0,
        get: () => le.value,
        set: (Mt) => le.value = Mt
      });
    }
  if (l)
    for (const j in l)
      oi(l[j], n, s, j);
  if (c) {
    const j = k(c) ? c.call(s) : c;
    Reflect.ownKeys(j).forEach((Z) => {
      Ao(Z, j[Z]);
    });
  }
  u && jn(u, t, "c");
  function nt(j, Z) {
    D(Z) ? Z.forEach((oe) => j(oe.bind(s))) : Z && j(Z.bind(s));
  }
  if (nt(Ko, h), nt(ni, _), nt(Vo, x), nt(Ho, I), nt(Fo, b), nt(No, M), nt(Go, N), nt(Jo, dt), nt(Wo, rt), nt(ri, A), nt(ii, R), nt(Bo, V), D(it))
    if (it.length) {
      const j = t.exposed || (t.exposed = {});
      it.forEach((Z) => {
        Object.defineProperty(j, Z, {
          get: () => s[Z],
          set: (oe) => s[Z] = oe,
          enumerable: !0
        });
      });
    } else t.exposed || (t.exposed = {});
  B && t.render === Nt && (t.render = B), St != null && (t.inheritAttrs = St), Pt && (t.components = Pt), Zt && (t.directives = Zt), V && ti(t);
}
function zo(t, e, s = Nt) {
  D(t) && (t = rn(t));
  for (const n in t) {
    const r = t[n];
    let i;
    q(r) ? "default" in r ? i = Ke(
      r.from || n,
      r.default,
      !0
    ) : i = Ke(r.from || n) : i = Ke(r), /* @__PURE__ */ st(i) ? Object.defineProperty(e, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : e[n] = i;
  }
}
function jn(t, e, s) {
  Rt(
    D(t) ? t.map((n) => n.bind(e.proxy)) : t.bind(e.proxy),
    e,
    s
  );
}
function oi(t, e, s, n) {
  let r = n.includes(".") ? Qr(s, n) : () => s[n];
  if (et(t)) {
    const i = e[t];
    k(i) && Ve(r, i);
  } else if (k(t))
    Ve(r, t.bind(s));
  else if (q(t))
    if (D(t))
      t.forEach((i) => oi(i, e, s, n));
    else {
      const i = k(t.handler) ? t.handler.bind(s) : e[t.handler];
      k(i) && Ve(r, i, t);
    }
}
function li(t) {
  const e = t.type, { mixins: s, extends: n } = e, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = t.appContext, l = i.get(e);
  let c;
  return l ? c = l : !r.length && !s && !n ? c = e : (c = {}, r.length && r.forEach(
    (d) => _s(c, d, o, !0)
  ), _s(c, e, o)), q(e) && i.set(e, c), c;
}
function _s(t, e, s, n = !1) {
  const { mixins: r, extends: i } = e;
  i && _s(t, i, s, !0), r && r.forEach(
    (o) => _s(t, o, s, !0)
  );
  for (const o in e)
    if (!(n && o === "expose")) {
      const l = Zo[o] || s && s[o];
      t[o] = l ? l(t[o], e[o]) : e[o];
    }
  return t;
}
const Zo = {
  data: Kn,
  props: Vn,
  emits: Vn,
  // objects
  methods: De,
  computed: De,
  // lifecycle
  beforeCreate: ht,
  created: ht,
  beforeMount: ht,
  mounted: ht,
  beforeUpdate: ht,
  updated: ht,
  beforeDestroy: ht,
  beforeUnmount: ht,
  destroyed: ht,
  unmounted: ht,
  activated: ht,
  deactivated: ht,
  errorCaptured: ht,
  serverPrefetch: ht,
  // assets
  components: De,
  directives: De,
  // watch
  watch: tl,
  // provide / inject
  provide: Kn,
  inject: Qo
};
function Kn(t, e) {
  return e ? t ? function() {
    return ut(
      k(t) ? t.call(this, this) : t,
      k(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function Qo(t, e) {
  return De(rn(t), rn(e));
}
function rn(t) {
  if (D(t)) {
    const e = {};
    for (let s = 0; s < t.length; s++)
      e[t[s]] = t[s];
    return e;
  }
  return t;
}
function ht(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function De(t, e) {
  return t ? ut(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function Vn(t, e) {
  return t ? D(t) && D(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : ut(
    /* @__PURE__ */ Object.create(null),
    Nn(t),
    Nn(e ?? {})
  ) : e;
}
function tl(t, e) {
  if (!t) return e;
  if (!e) return t;
  const s = ut(/* @__PURE__ */ Object.create(null), t);
  for (const n in e)
    s[n] = ht(t[n], e[n]);
  return s;
}
function ci() {
  return {
    app: null,
    config: {
      isNativeTag: yr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let el = 0;
function sl(t, e) {
  return function(n, r = null) {
    k(n) || (n = ut({}, n)), r != null && !q(r) && (r = null);
    const i = ci(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const d = i.app = {
      _uid: el++,
      _component: n,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: $l,
      get config() {
        return i.config;
      },
      set config(u) {
      },
      use(u, ...h) {
        return o.has(u) || (u && k(u.install) ? (o.add(u), u.install(d, ...h)) : k(u) && (o.add(u), u(d, ...h))), d;
      },
      mixin(u) {
        return i.mixins.includes(u) || i.mixins.push(u), d;
      },
      component(u, h) {
        return h ? (i.components[u] = h, d) : i.components[u];
      },
      directive(u, h) {
        return h ? (i.directives[u] = h, d) : i.directives[u];
      },
      mount(u, h, _) {
        if (!c) {
          const x = d._ceVNode || qt(n, r);
          return x.appContext = i, _ === !0 ? _ = "svg" : _ === !1 && (_ = void 0), t(x, u, _), c = !0, d._container = u, u.__vue_app__ = d, $s(x.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        c && (Rt(
          l,
          d._instance,
          16
        ), t(null, d._container), delete d._container.__vue_app__);
      },
      provide(u, h) {
        return i.provides[u] = h, d;
      },
      runWithContext(u) {
        const h = de;
        de = d;
        try {
          return u();
        } finally {
          de = h;
        }
      }
    };
    return d;
  };
}
let de = null;
const nl = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${It(e)}Modifiers`] || t[`${ie(e)}Modifiers`];
function rl(t, e, ...s) {
  if (t.isUnmounted) return;
  const n = t.vnode.props || z;
  let r = s;
  const i = e.startsWith("update:"), o = i && nl(n, e.slice(7));
  o && (o.trim && (r = s.map((u) => et(u) ? u.trim() : u)), o.number && (r = s.map(hn)));
  let l, c = n[l = Fs(e)] || // also try camelCase event handler (#2249)
  n[l = Fs(It(e))];
  !c && i && (c = n[l = Fs(ie(e))]), c && Rt(
    c,
    t,
    6,
    r
  );
  const d = n[l + "Once"];
  if (d) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[l])
      return;
    t.emitted[l] = !0, Rt(
      d,
      t,
      6,
      r
    );
  }
}
const il = /* @__PURE__ */ new WeakMap();
function ai(t, e, s = !1) {
  const n = s ? il : e.emitsCache, r = n.get(t);
  if (r !== void 0)
    return r;
  const i = t.emits;
  let o = {}, l = !1;
  if (!k(t)) {
    const c = (d) => {
      const u = ai(d, e, !0);
      u && (l = !0, ut(o, u));
    };
    !s && e.mixins.length && e.mixins.forEach(c), t.extends && c(t.extends), t.mixins && t.mixins.forEach(c);
  }
  return !i && !l ? (q(t) && n.set(t, null), null) : (D(i) ? i.forEach((c) => o[c] = null) : ut(o, i), q(t) && n.set(t, o), o);
}
function Ls(t, e) {
  return !t || !Ss(e) ? !1 : (e = e.slice(2), e = e === "Once" ? e : e.replace(/Once$/, ""), G(t, e[0].toLowerCase() + e.slice(1)) || G(t, ie(e)) || G(t, e));
}
function Hn(t) {
  const {
    type: e,
    vnode: s,
    proxy: n,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: c,
    render: d,
    renderCache: u,
    props: h,
    data: _,
    setupState: x,
    ctx: I,
    inheritAttrs: b
  } = t, M = vs(t);
  let O, A;
  try {
    if (s.shapeFlag & 4) {
      const R = r || n, B = R;
      O = kt(
        d.call(
          B,
          R,
          u,
          h,
          x,
          _,
          I
        )
      ), A = l;
    } else {
      const R = e;
      O = kt(
        R.length > 1 ? R(
          h,
          { attrs: l, slots: o, emit: c }
        ) : R(
          h,
          null
        )
      ), A = e.props ? l : ol(l);
    }
  } catch (R) {
    Je.length = 0, Ms(R, t, 1), O = qt(re);
  }
  let C = O;
  if (A && b !== !1) {
    const R = Object.keys(A), { shapeFlag: B } = C;
    R.length && B & 7 && (i && R.some(ws) && (A = ll(
      A,
      i
    )), C = Ie(C, A, !1, !0));
  }
  return s.dirs && (C = Ie(C, null, !1, !0), C.dirs = C.dirs ? C.dirs.concat(s.dirs) : s.dirs), s.transition && Cn(C, s.transition), O = C, vs(M), O;
}
const ol = (t) => {
  let e;
  for (const s in t)
    (s === "class" || s === "style" || Ss(s)) && ((e || (e = {}))[s] = t[s]);
  return e;
}, ll = (t, e) => {
  const s = {};
  for (const n in t)
    (!ws(n) || !(n.slice(9) in e)) && (s[n] = t[n]);
  return s;
};
function cl(t, e, s) {
  const { props: n, children: r, component: i } = t, { props: o, children: l, patchFlag: c } = e, d = i.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (s && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return n ? Bn(n, o, d) : !!o;
    if (c & 8) {
      const u = e.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const _ = u[h];
        if (ui(o, n, _) && !Ls(d, _))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? Bn(n, o, d) : !0 : !!o;
  return !1;
}
function Bn(t, e, s) {
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (ui(e, t, i) && !Ls(s, i))
      return !0;
  }
  return !1;
}
function ui(t, e, s) {
  const n = t[s], r = e[s];
  return s === "style" && q(n) && q(r) ? !gn(n, r) : n !== r;
}
function al({ vnode: t, parent: e, suspense: s }, n) {
  for (; e; ) {
    const r = e.subTree;
    if (r.suspense && r.suspense.activeBranch === t && (r.suspense.vnode.el = r.el = n, t = r), r === t)
      (t = e.vnode).el = n, e = e.parent;
    else
      break;
  }
  s && s.activeBranch === t && (s.vnode.el = n);
}
const fi = {}, di = () => Object.create(fi), hi = (t) => Object.getPrototypeOf(t) === fi;
function ul(t, e, s, n = !1) {
  const r = {}, i = di();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), pi(t, e, r, i);
  for (const o in t.propsOptions[0])
    o in r || (r[o] = void 0);
  s ? t.props = n ? r : /* @__PURE__ */ mo(r) : t.type.props ? t.props = r : t.props = i, t.attrs = i;
}
function fl(t, e, s, n) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = t, l = /* @__PURE__ */ J(r), [c] = t.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const u = t.vnode.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        let _ = u[h];
        if (Ls(t.emitsOptions, _))
          continue;
        const x = e[_];
        if (c)
          if (G(i, _))
            x !== i[_] && (i[_] = x, d = !0);
          else {
            const I = It(_);
            r[I] = on(
              c,
              l,
              I,
              x,
              t,
              !1
            );
          }
        else
          x !== i[_] && (i[_] = x, d = !0);
      }
    }
  } else {
    pi(t, e, r, i) && (d = !0);
    let u;
    for (const h in l)
      (!e || // for camelCase
      !G(e, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = ie(h)) === h || !G(e, u))) && (c ? s && // for camelCase
      (s[h] !== void 0 || // for kebab-case
      s[u] !== void 0) && (r[h] = on(
        c,
        l,
        h,
        void 0,
        t,
        !0
      )) : delete r[h]);
    if (i !== l)
      for (const h in i)
        (!e || !G(e, h)) && (delete i[h], d = !0);
  }
  d && Jt(t.attrs, "set", "");
}
function pi(t, e, s, n) {
  const [r, i] = t.propsOptions;
  let o = !1, l;
  if (e)
    for (let c in e) {
      if (Fe(c))
        continue;
      const d = e[c];
      let u;
      r && G(r, u = It(c)) ? !i || !i.includes(u) ? s[u] = d : (l || (l = {}))[u] = d : Ls(t.emitsOptions, c) || (!(c in n) || d !== n[c]) && (n[c] = d, o = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ J(s), d = l || z;
    for (let u = 0; u < i.length; u++) {
      const h = i[u];
      s[h] = on(
        r,
        c,
        h,
        d[h],
        t,
        !G(d, h)
      );
    }
  }
  return o;
}
function on(t, e, s, n, r, i) {
  const o = t[s];
  if (o != null) {
    const l = G(o, "default");
    if (l && n === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && k(c)) {
        const { propsDefaults: d } = r;
        if (s in d)
          n = d[s];
        else {
          const u = es(r);
          n = d[s] = c.call(
            null,
            e
          ), u();
        }
      } else
        n = c;
      r.ce && r.ce._setProp(s, n);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !l ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === ie(s)) && (n = !0));
  }
  return n;
}
const dl = /* @__PURE__ */ new WeakMap();
function gi(t, e, s = !1) {
  const n = s ? dl : e.propsCache, r = n.get(t);
  if (r)
    return r;
  const i = t.props, o = {}, l = [];
  let c = !1;
  if (!k(t)) {
    const u = (h) => {
      c = !0;
      const [_, x] = gi(h, e, !0);
      ut(o, _), x && l.push(...x);
    };
    !s && e.mixins.length && e.mixins.forEach(u), t.extends && u(t.extends), t.mixins && t.mixins.forEach(u);
  }
  if (!i && !c)
    return q(t) && n.set(t, ye), ye;
  if (D(i))
    for (let u = 0; u < i.length; u++) {
      const h = It(i[u]);
      Wn(h) && (o[h] = z);
    }
  else if (i)
    for (const u in i) {
      const h = It(u);
      if (Wn(h)) {
        const _ = i[u], x = o[h] = D(_) || k(_) ? { type: _ } : ut({}, _), I = x.type;
        let b = !1, M = !0;
        if (D(I))
          for (let O = 0; O < I.length; ++O) {
            const A = I[O], C = k(A) && A.name;
            if (C === "Boolean") {
              b = !0;
              break;
            } else C === "String" && (M = !1);
          }
        else
          b = k(I) && I.name === "Boolean";
        x[
          0
          /* shouldCast */
        ] = b, x[
          1
          /* shouldCastTrue */
        ] = M, (b || G(x, "default")) && l.push(h);
      }
    }
  const d = [o, l];
  return q(t) && n.set(t, d), d;
}
function Wn(t) {
  return t[0] !== "$" && !Fe(t);
}
const In = (t) => t === "_" || t === "_ctx" || t === "$stable", En = (t) => D(t) ? t.map(kt) : [kt(t)], hl = (t, e, s) => {
  if (e._n)
    return e;
  const n = Mo((...r) => En(e(...r)), s);
  return n._c = !1, n;
}, mi = (t, e, s) => {
  const n = t._ctx;
  for (const r in t) {
    if (In(r)) continue;
    const i = t[r];
    if (k(i))
      e[r] = hl(r, i, n);
    else if (i != null) {
      const o = En(i);
      e[r] = () => o;
    }
  }
}, vi = (t, e) => {
  const s = En(e);
  t.slots.default = () => s;
}, yi = (t, e, s) => {
  for (const n in e)
    (s || !In(n)) && (t[n] = e[n]);
}, pl = (t, e, s) => {
  const n = t.slots = di();
  if (t.vnode.shapeFlag & 32) {
    const r = e._;
    r ? (yi(n, e, s), s && Cr(n, "_", r, !0)) : mi(e, n);
  } else e && vi(t, e);
}, gl = (t, e, s) => {
  const { vnode: n, slots: r } = t;
  let i = !0, o = z;
  if (n.shapeFlag & 32) {
    const l = e._;
    l ? s && l === 1 ? i = !1 : yi(r, e, s) : (i = !e.$stable, mi(e, r)), o = e;
  } else e && (vi(t, e), o = { default: 1 });
  if (i)
    for (const l in r)
      !In(l) && o[l] == null && delete r[l];
}, mt = bl;
function ml(t) {
  return vl(t);
}
function vl(t, e) {
  const s = Es();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: c,
    setText: d,
    setElementText: u,
    parentNode: h,
    nextSibling: _,
    setScopeId: x = Nt,
    insertStaticContent: I
  } = t, b = (a, f, p, y = null, v = null, g = null, E = void 0, w = null, S = !!f.dynamicChildren) => {
    if (a === f)
      return;
    a && !Oe(a, f) && (y = is(a), Mt(a, v, g, !0), a = null), f.patchFlag === -2 && (S = !1, f.dynamicChildren = null);
    const { type: m, ref: $, shapeFlag: P } = f;
    switch (m) {
      case Os:
        M(a, f, p, y);
        break;
      case re:
        O(a, f, p, y);
        break;
      case Js:
        a == null && A(f, p, y, E);
        break;
      case at:
        Pt(
          a,
          f,
          p,
          y,
          v,
          g,
          E,
          w,
          S
        );
        break;
      default:
        P & 1 ? B(
          a,
          f,
          p,
          y,
          v,
          g,
          E,
          w,
          S
        ) : P & 6 ? Zt(
          a,
          f,
          p,
          y,
          v,
          g,
          E,
          w,
          S
        ) : (P & 64 || P & 128) && m.process(
          a,
          f,
          p,
          y,
          v,
          g,
          E,
          w,
          S,
          Me
        );
    }
    $ != null && v ? He($, a && a.ref, g, f || a, !f) : $ == null && a && a.ref != null && He(a.ref, null, g, a, !0);
  }, M = (a, f, p, y) => {
    if (a == null)
      n(
        f.el = l(f.children),
        p,
        y
      );
    else {
      const v = f.el = a.el;
      f.children !== a.children && d(v, f.children);
    }
  }, O = (a, f, p, y) => {
    a == null ? n(
      f.el = c(f.children || ""),
      p,
      y
    ) : f.el = a.el;
  }, A = (a, f, p, y) => {
    [a.el, a.anchor] = I(
      a.children,
      f,
      p,
      y,
      a.el,
      a.anchor
    );
  }, C = ({ el: a, anchor: f }, p, y) => {
    let v;
    for (; a && a !== f; )
      v = _(a), n(a, p, y), a = v;
    n(f, p, y);
  }, R = ({ el: a, anchor: f }) => {
    let p;
    for (; a && a !== f; )
      p = _(a), r(a), a = p;
    r(f);
  }, B = (a, f, p, y, v, g, E, w, S) => {
    if (f.type === "svg" ? E = "svg" : f.type === "math" && (E = "mathml"), a == null)
      dt(
        f,
        p,
        y,
        v,
        g,
        E,
        w,
        S
      );
    else {
      const m = a.el && a.el._isVueCE ? a.el : null;
      try {
        m && m._beginPatch(), V(
          a,
          f,
          v,
          g,
          E,
          w,
          S
        );
      } finally {
        m && m._endPatch();
      }
    }
  }, dt = (a, f, p, y, v, g, E, w) => {
    let S, m;
    const { props: $, shapeFlag: P, transition: L, dirs: U } = a;
    if (S = a.el = o(
      a.type,
      g,
      $ && $.is,
      $
    ), P & 8 ? u(S, a.children) : P & 16 && N(
      a.children,
      S,
      null,
      y,
      v,
      Ws(a, g),
      E,
      w
    ), U && ce(a, null, y, "created"), rt(S, a, a.scopeId, E, y), $) {
      for (const X in $)
        X !== "value" && !Fe(X) && i(S, X, null, $[X], g, y);
      "value" in $ && i(S, "value", null, $.value, g), (m = $.onVnodeBeforeMount) && $t(m, y, a);
    }
    U && ce(a, null, y, "beforeMount");
    const W = yl(v, L);
    W && L.beforeEnter(S), n(S, f, p), ((m = $ && $.onVnodeMounted) || W || U) && mt(() => {
      try {
        m && $t(m, y, a), W && L.enter(S), U && ce(a, null, y, "mounted");
      } finally {
      }
    }, v);
  }, rt = (a, f, p, y, v) => {
    if (p && x(a, p), y)
      for (let g = 0; g < y.length; g++)
        x(a, y[g]);
    if (v) {
      let g = v.subTree;
      if (f === g || Si(g.type) && (g.ssContent === f || g.ssFallback === f)) {
        const E = v.vnode;
        rt(
          a,
          E,
          E.scopeId,
          E.slotScopeIds,
          v.parent
        );
      }
    }
  }, N = (a, f, p, y, v, g, E, w, S = 0) => {
    for (let m = S; m < a.length; m++) {
      const $ = a[m] = w ? Wt(a[m]) : kt(a[m]);
      b(
        null,
        $,
        f,
        p,
        y,
        v,
        g,
        E,
        w
      );
    }
  }, V = (a, f, p, y, v, g, E) => {
    const w = f.el = a.el;
    let { patchFlag: S, dynamicChildren: m, dirs: $ } = f;
    S |= a.patchFlag & 16;
    const P = a.props || z, L = f.props || z;
    let U;
    if (p && ae(p, !1), (U = L.onVnodeBeforeUpdate) && $t(U, p, f, a), $ && ce(f, a, p, "beforeUpdate"), p && ae(p, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    m && (!a.dynamicChildren || a.dynamicChildren.length !== m.length) && (S = 0, E = !1, m = null), (P.innerHTML && L.innerHTML == null || P.textContent && L.textContent == null) && u(w, ""), m ? it(
      a.dynamicChildren,
      m,
      w,
      p,
      y,
      Ws(f, v),
      g
    ) : E || Z(
      a,
      f,
      w,
      null,
      p,
      y,
      Ws(f, v),
      g,
      !1
    ), S > 0) {
      if (S & 16)
        St(w, P, L, p, v);
      else if (S & 2 && P.class !== L.class && i(w, "class", null, L.class, v), S & 4 && i(w, "style", P.style, L.style, v), S & 8) {
        const W = f.dynamicProps;
        for (let X = 0; X < W.length; X++) {
          const Y = W[X], ot = P[Y], ct = L[Y];
          (ct !== ot || Y === "value") && i(w, Y, ot, ct, v, p);
        }
      }
      S & 1 && a.children !== f.children && u(w, f.children);
    } else !E && m == null && St(w, P, L, p, v);
    ((U = L.onVnodeUpdated) || $) && mt(() => {
      U && $t(U, p, f, a), $ && ce(f, a, p, "updated");
    }, y);
  }, it = (a, f, p, y, v, g, E) => {
    for (let w = 0; w < f.length; w++) {
      const S = a[w], m = f[w], $ = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        S.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (S.type === at || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Oe(S, m) || // - In the case of a component, it could contain anything.
        S.shapeFlag & 198) ? h(S.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      b(
        S,
        m,
        $,
        null,
        y,
        v,
        g,
        E,
        !0
      );
    }
  }, St = (a, f, p, y, v) => {
    if (f !== p) {
      if (f !== z)
        for (const g in f)
          !Fe(g) && !(g in p) && i(
            a,
            g,
            f[g],
            null,
            v,
            y
          );
      for (const g in p) {
        if (Fe(g)) continue;
        const E = p[g], w = f[g];
        E !== w && g !== "value" && i(a, g, w, E, v, y);
      }
      "value" in p && i(a, "value", f.value, p.value, v);
    }
  }, Pt = (a, f, p, y, v, g, E, w, S) => {
    const m = f.el = a ? a.el : l(""), $ = f.anchor = a ? a.anchor : l("");
    let { patchFlag: P, dynamicChildren: L, slotScopeIds: U } = f;
    U && (w = w ? w.concat(U) : U), a == null ? (n(m, p, y), n($, p, y), N(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      p,
      $,
      v,
      g,
      E,
      w,
      S
    )) : P > 0 && P & 64 && L && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren && a.dynamicChildren.length === L.length ? (it(
      a.dynamicChildren,
      L,
      p,
      v,
      g,
      E,
      w
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || v && f === v.subTree) && _i(
      a,
      f,
      !0
      /* shallow */
    )) : Z(
      a,
      f,
      p,
      $,
      v,
      g,
      E,
      w,
      S
    );
  }, Zt = (a, f, p, y, v, g, E, w, S) => {
    f.slotScopeIds = w, a == null ? f.shapeFlag & 512 ? v.ctx.activate(
      f,
      p,
      y,
      E,
      S
    ) : Re(
      f,
      p,
      y,
      v,
      g,
      E,
      S
    ) : ns(a, f, S);
  }, Re = (a, f, p, y, v, g, E) => {
    const w = a.component = Rl(
      a,
      y,
      v
    );
    if (ei(a) && (w.ctx.renderer = Me), Pl(w, !1, E), w.asyncDep) {
      if (v && v.registerDep(w, nt, E), !a.el) {
        const S = w.subTree = qt(re);
        O(null, S, f, p), a.placeholder = S.el;
      }
    } else
      nt(
        w,
        a,
        f,
        p,
        v,
        g,
        E
      );
  }, ns = (a, f, p) => {
    const y = f.component = a.component;
    if (cl(a, f, p))
      if (y.asyncDep && !y.asyncResolved) {
        j(y, f, p);
        return;
      } else
        y.next = f, y.update();
    else
      f.el = a.el, y.vnode = f;
  }, nt = (a, f, p, y, v, g, E) => {
    const w = () => {
      if (a.isMounted) {
        let { next: P, bu: L, u: U, parent: W, vnode: X } = a;
        {
          const Lt = bi(a);
          if (Lt) {
            P && (P.el = X.el, j(a, P, E)), Lt.asyncDep.then(() => {
              mt(() => {
                a.isUnmounted || m();
              }, v);
            });
            return;
          }
        }
        let Y = P, ot;
        ae(a, !1), P ? (P.el = X.el, j(a, P, E)) : P = X, L && ds(L), (ot = P.props && P.props.onVnodeBeforeUpdate) && $t(ot, W, P, X), ae(a, !0);
        const ct = Hn(a), At = a.subTree;
        a.subTree = ct, b(
          At,
          ct,
          // parent may have changed if it's in a teleport
          h(At.el),
          // anchor may have changed if it's in a fragment
          is(At),
          a,
          v,
          g
        ), P.el = ct.el, Y === null && al(a, ct.el), U && mt(U, v), (ot = P.props && P.props.onVnodeUpdated) && mt(
          () => $t(ot, W, P, X),
          v
        );
      } else {
        let P;
        const { el: L, props: U } = f, { bm: W, m: X, parent: Y, root: ot, type: ct } = a, At = Be(f);
        ae(a, !1), W && ds(W), !At && (P = U && U.onVnodeBeforeMount) && $t(P, Y, f), ae(a, !0);
        {
          ot.ce && ot.ce._hasShadowRoot() && ot.ce._injectChildStyle(
            ct,
            a.parent ? a.parent.type : void 0
          );
          const Lt = a.subTree = Hn(a);
          b(
            null,
            Lt,
            p,
            y,
            a,
            v,
            g
          ), f.el = Lt.el;
        }
        if (X && mt(X, v), !At && (P = U && U.onVnodeMounted)) {
          const Lt = f;
          mt(
            () => $t(P, Y, Lt),
            v
          );
        }
        (f.shapeFlag & 256 || Y && Be(Y.vnode) && Y.vnode.shapeFlag & 256) && a.a && mt(a.a, v), a.isMounted = !0, f = p = y = null;
      }
    };
    a.scope.on();
    const S = a.effect = new Ar(w);
    a.scope.off();
    const m = a.update = S.run.bind(S), $ = a.job = S.runIfDirty.bind(S);
    $.i = a, $.id = a.uid, S.scheduler = () => wn($), ae(a, !0), m();
  }, j = (a, f, p) => {
    f.component = a;
    const y = a.vnode.props;
    a.vnode = f, a.next = null, fl(a, f.props, y, p), gl(a, f.children, p), Kt(), Un(a), Vt();
  }, Z = (a, f, p, y, v, g, E, w, S = !1) => {
    const m = a && a.children, $ = a ? a.shapeFlag : 0, P = f.children, { patchFlag: L, shapeFlag: U } = f;
    if (L > 0) {
      if (L & 128) {
        rs(
          m,
          P,
          p,
          y,
          v,
          g,
          E,
          w,
          S
        );
        return;
      } else if (L & 256) {
        oe(
          m,
          P,
          p,
          y,
          v,
          g,
          E,
          w,
          S
        );
        return;
      }
    }
    U & 8 ? ($ & 16 && Pe(m, v, g), P !== m && u(p, P)) : $ & 16 ? U & 16 ? rs(
      m,
      P,
      p,
      y,
      v,
      g,
      E,
      w,
      S
    ) : Pe(m, v, g, !0) : ($ & 8 && u(p, ""), U & 16 && N(
      P,
      p,
      y,
      v,
      g,
      E,
      w,
      S
    ));
  }, oe = (a, f, p, y, v, g, E, w, S) => {
    a = a || ye, f = f || ye;
    const m = a.length, $ = f.length, P = Math.min(m, $);
    let L;
    for (L = 0; L < P; L++) {
      const U = f[L] = S ? Wt(f[L]) : kt(f[L]);
      b(
        a[L],
        U,
        p,
        null,
        v,
        g,
        E,
        w,
        S
      );
    }
    m > $ ? Pe(
      a,
      v,
      g,
      !0,
      !1,
      P
    ) : N(
      f,
      p,
      y,
      v,
      g,
      E,
      w,
      S,
      P
    );
  }, rs = (a, f, p, y, v, g, E, w, S) => {
    let m = 0;
    const $ = f.length;
    let P = a.length - 1, L = $ - 1;
    for (; m <= P && m <= L; ) {
      const U = a[m], W = f[m] = S ? Wt(f[m]) : kt(f[m]);
      if (Oe(U, W))
        b(
          U,
          W,
          p,
          null,
          v,
          g,
          E,
          w,
          S
        );
      else
        break;
      m++;
    }
    for (; m <= P && m <= L; ) {
      const U = a[P], W = f[L] = S ? Wt(f[L]) : kt(f[L]);
      if (Oe(U, W))
        b(
          U,
          W,
          p,
          null,
          v,
          g,
          E,
          w,
          S
        );
      else
        break;
      P--, L--;
    }
    if (m > P) {
      if (m <= L) {
        const U = L + 1, W = U < $ ? f[U].el : y;
        for (; m <= L; )
          b(
            null,
            f[m] = S ? Wt(f[m]) : kt(f[m]),
            p,
            W,
            v,
            g,
            E,
            w,
            S
          ), m++;
      }
    } else if (m > L)
      for (; m <= P; )
        Mt(a[m], v, g, !0), m++;
    else {
      const U = m, W = m, X = /* @__PURE__ */ new Map();
      for (m = W; m <= L; m++) {
        const yt = f[m] = S ? Wt(f[m]) : kt(f[m]);
        yt.key != null && X.set(yt.key, m);
      }
      let Y, ot = 0;
      const ct = L - W + 1;
      let At = !1, Lt = 0;
      const Ae = new Array(ct);
      for (m = 0; m < ct; m++) Ae[m] = 0;
      for (m = U; m <= P; m++) {
        const yt = a[m];
        if (ot >= ct) {
          Mt(yt, v, g, !0);
          continue;
        }
        let Ot;
        if (yt.key != null)
          Ot = X.get(yt.key);
        else
          for (Y = W; Y <= L; Y++)
            if (Ae[Y - W] === 0 && Oe(yt, f[Y])) {
              Ot = Y;
              break;
            }
        Ot === void 0 ? Mt(yt, v, g, !0) : (Ae[Ot - W] = m + 1, Ot >= Lt ? Lt = Ot : At = !0, b(
          yt,
          f[Ot],
          p,
          null,
          v,
          g,
          E,
          w,
          S
        ), ot++);
      }
      const Pn = At ? _l(Ae) : ye;
      for (Y = Pn.length - 1, m = ct - 1; m >= 0; m--) {
        const yt = W + m, Ot = f[yt], Mn = f[yt + 1], An = yt + 1 < $ ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Mn.el || xi(Mn)
        ) : y;
        Ae[m] === 0 ? b(
          null,
          Ot,
          p,
          An,
          v,
          g,
          E,
          w,
          S
        ) : At && (Y < 0 || m !== Pn[Y] ? le(Ot, p, An, 2) : Y--);
      }
    }
  }, le = (a, f, p, y, v = null) => {
    const { el: g, type: E, transition: w, children: S, shapeFlag: m } = a;
    if (m & 6) {
      le(a.component.subTree, f, p, y);
      return;
    }
    if (m & 128) {
      a.suspense.move(f, p, y);
      return;
    }
    if (m & 64) {
      E.move(a, f, p, Me);
      return;
    }
    if (E === at) {
      n(g, f, p);
      for (let P = 0; P < S.length; P++)
        le(S[P], f, p, y);
      n(a.anchor, f, p);
      return;
    }
    if (E === Js) {
      C(a, f, p);
      return;
    }
    if (y !== 2 && m & 1 && w)
      if (y === 0)
        w.persisted && !g[Hs] ? n(g, f, p) : (w.beforeEnter(g), n(g, f, p), mt(() => w.enter(g), v));
      else {
        const { leave: P, delayLeave: L, afterLeave: U } = w, W = () => {
          a.ctx.isUnmounted ? r(g) : n(g, f, p);
        }, X = () => {
          const Y = g._isLeaving || !!g[Hs];
          g._isLeaving && g[Hs](
            !0
            /* cancelled */
          ), w.persisted && !Y ? W() : P(g, () => {
            W(), U && U();
          });
        };
        L ? L(g, W, X) : X();
      }
    else
      n(g, f, p);
  }, Mt = (a, f, p, y = !1, v = !1) => {
    const {
      type: g,
      props: E,
      ref: w,
      children: S,
      dynamicChildren: m,
      shapeFlag: $,
      patchFlag: P,
      dirs: L,
      cacheIndex: U,
      memo: W
    } = a;
    if (P === -2 && (v = !1), w != null && (Kt(), He(w, null, p, a, !0), Vt()), U != null && (f.renderCache[U] = void 0), $ & 256) {
      f.ctx.deactivate(a);
      return;
    }
    const X = $ & 1 && L, Y = !Be(a);
    let ot;
    if (Y && (ot = E && E.onVnodeBeforeUnmount) && $t(ot, f, a), $ & 6)
      Fi(a.component, p, y);
    else {
      if ($ & 128) {
        a.suspense.unmount(p, y);
        return;
      }
      X && ce(a, null, f, "beforeUnmount"), $ & 64 ? a.type.remove(
        a,
        f,
        p,
        Me,
        y
      ) : m && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !m.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (g !== at || P > 0 && P & 64) ? Pe(
        m,
        f,
        p,
        !1,
        !0
      ) : (g === at && P & 384 || !v && $ & 16) && Pe(S, f, p), y && Tn(a);
    }
    const ct = W != null && U == null;
    (Y && (ot = E && E.onVnodeUnmounted) || X || ct) && mt(() => {
      ot && $t(ot, f, a), X && ce(a, null, f, "unmounted"), ct && (a.el = null);
    }, p);
  }, Tn = (a) => {
    const { type: f, el: p, anchor: y, transition: v } = a;
    if (f === at) {
      ki(p, y);
      return;
    }
    if (f === Js) {
      R(a);
      return;
    }
    const g = () => {
      r(p), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (a.shapeFlag & 1 && v && !v.persisted) {
      const { leave: E, delayLeave: w } = v, S = () => E(p, g);
      w ? w(a.el, g, S) : S();
    } else
      g();
  }, ki = (a, f) => {
    let p;
    for (; a !== f; )
      p = _(a), r(a), a = p;
    r(f);
  }, Fi = (a, f, p) => {
    const { bum: y, scope: v, job: g, subTree: E, um: w, m: S, a: m } = a;
    Jn(S), Jn(m), y && ds(y), v.stop(), g && (g.flags |= 8, Mt(E, a, f, p)), w && mt(w, f), mt(() => {
      a.isUnmounted = !0;
    }, f);
  }, Pe = (a, f, p, y = !1, v = !1, g = 0) => {
    for (let E = g; E < a.length; E++)
      Mt(a[E], f, p, y, v);
  }, is = (a) => {
    if (a.shapeFlag & 6)
      return is(a.component.subTree);
    if (a.shapeFlag & 128)
      return a.suspense.next();
    const f = _(a.anchor || a.el), p = f && f[Uo];
    return p ? _(p) : f;
  };
  let ks = !1;
  const Rn = (a, f, p) => {
    let y;
    a == null ? f._vnode && (Mt(f._vnode, null, null, !0), y = f._vnode.component) : b(
      f._vnode || null,
      a,
      f,
      null,
      null,
      null,
      p
    ), f._vnode = a, ks || (ks = !0, Un(y), qr(), ks = !1);
  }, Me = {
    p: b,
    um: Mt,
    m: le,
    r: Tn,
    mt: Re,
    mc: N,
    pc: Z,
    pbc: it,
    n: is,
    o: t
  };
  return {
    render: Rn,
    hydrate: void 0,
    createApp: sl(Rn)
  };
}
function Ws({ type: t, props: e }, s) {
  return s === "svg" && t === "foreignObject" || s === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : s;
}
function ae({ effect: t, job: e }, s) {
  s ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function yl(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function _i(t, e, s = !1) {
  const n = t.children, r = e.children;
  if (D(n) && D(r))
    for (let i = 0; i < n.length; i++) {
      const o = n[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = Wt(r[i]), l.el = o.el), !s && l.patchFlag !== -2 && _i(o, l)), l.type === Os && (l.patchFlag === -1 && (l = r[i] = Wt(l)), l.el = o.el), l.type === re && !l.el && (l.el = o.el);
    }
}
function _l(t) {
  const e = t.slice(), s = [0];
  let n, r, i, o, l;
  const c = t.length;
  for (n = 0; n < c; n++) {
    const d = t[n];
    if (d !== 0) {
      if (r = s[s.length - 1], t[r] < d) {
        e[n] = r, s.push(n);
        continue;
      }
      for (i = 0, o = s.length - 1; i < o; )
        l = i + o >> 1, t[s[l]] < d ? i = l + 1 : o = l;
      d < t[s[i]] && (i > 0 && (e[n] = s[i - 1]), s[i] = n);
    }
  }
  for (i = s.length, o = s[i - 1]; i-- > 0; )
    s[i] = o, o = e[o];
  return s;
}
function bi(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : bi(e);
}
function Jn(t) {
  if (t)
    for (let e = 0; e < t.length; e++)
      t[e].flags |= 8;
}
function xi(t) {
  if (t.placeholder)
    return t.placeholder;
  const e = t.component;
  return e ? xi(e.subTree) : null;
}
const Si = (t) => t.__isSuspense;
function bl(t, e) {
  e && e.pendingBranch ? D(t) ? e.effects.push(...t) : e.effects.push(t) : Po(t);
}
const at = /* @__PURE__ */ Symbol.for("v-fgt"), Os = /* @__PURE__ */ Symbol.for("v-txt"), re = /* @__PURE__ */ Symbol.for("v-cmt"), Js = /* @__PURE__ */ Symbol.for("v-stc"), Je = [];
let bt = null;
function F(t = !1) {
  Je.push(bt = t ? null : []);
}
function xl() {
  Je.pop(), bt = Je[Je.length - 1] || null;
}
let ze = 1;
function Gn(t, e = !1) {
  ze += t, t < 0 && bt && e && (bt.hasOnce = !0);
}
function wi(t) {
  return t.dynamicChildren = ze > 0 ? bt || ye : null, xl(), ze > 0 && bt && bt.push(t), t;
}
function H(t, e, s, n, r, i) {
  return wi(
    T(
      t,
      e,
      s,
      n,
      r,
      i,
      !0
    )
  );
}
function Se(t, e, s, n, r) {
  return wi(
    qt(
      t,
      e,
      s,
      n,
      r,
      !0
    )
  );
}
function Ci(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function Oe(t, e) {
  return t.type === e.type && t.key === e.key;
}
const Ii = ({ key: t }) => t ?? null, hs = ({
  ref: t,
  ref_key: e,
  ref_for: s
}) => (typeof t == "number" && (t = "" + t), t != null ? et(t) || /* @__PURE__ */ st(t) || k(t) ? { i: wt, r: t, k: e, f: !!s } : t : null);
function T(t, e = null, s = null, n = 0, r = null, i = t === at ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Ii(e),
    ref: e && hs(e),
    scopeId: zr,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: n,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: wt
  };
  return l ? (bs(c, s), i & 128 && t.normalize(c)) : s && (c.shapeFlag |= et(s) ? 8 : 16), ze > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  bt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && bt.push(c), c;
}
const qt = Sl;
function Sl(t, e = null, s = null, n = 0, r = null, i = !1) {
  if ((!t || t === Yo) && (t = re), Ci(t)) {
    const l = Ie(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return s && bs(l, s), ze > 0 && !i && bt && (l.shapeFlag & 6 ? bt[bt.indexOf(t)] = l : bt.push(l)), l.patchFlag = -2, l;
  }
  if (Ol(t) && (t = t.__vccOpts), e) {
    e = wl(e);
    let { class: l, style: c } = e;
    l && !et(l) && (e.class = ne(l)), q(c) && (/* @__PURE__ */ Ps(c) && !D(c) && (c = ut({}, c)), e.style = pn(c));
  }
  const o = et(t) ? 1 : Si(t) ? 128 : ko(t) ? 64 : q(t) ? 4 : k(t) ? 2 : 0;
  return T(
    t,
    e,
    s,
    n,
    r,
    o,
    i,
    !0
  );
}
function wl(t) {
  return t ? /* @__PURE__ */ Ps(t) || hi(t) ? ut({}, t) : t : null;
}
function Ie(t, e, s = !1, n = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: c } = t, d = e ? Il(r || {}, e) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: d,
    key: d && Ii(d),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? D(i) ? i.concat(hs(e)) : [i, hs(e)] : hs(e)
    ) : i,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: l,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== at ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && Ie(t.ssContent),
    ssFallback: t.ssFallback && Ie(t.ssFallback),
    placeholder: t.placeholder,
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return c && n && Cn(
    u,
    c.clone(u)
  ), u;
}
function Cl(t = " ", e = 0) {
  return qt(Os, null, t, e);
}
function _t(t = "", e = !1) {
  return e ? (F(), Se(re, null, t)) : qt(re, null, t);
}
function kt(t) {
  return t == null || typeof t == "boolean" ? qt(re) : D(t) ? qt(
    at,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : Ci(t) ? Wt(t) : qt(Os, null, String(t));
}
function Wt(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Ie(t);
}
function bs(t, e) {
  let s = 0;
  const { shapeFlag: n } = t;
  if (e == null)
    e = null;
  else if (D(e))
    s = 16;
  else if (typeof e == "object")
    if (n & 65) {
      const r = e.default;
      r && (r._c && (r._d = !1), bs(t, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = e._;
      !r && !hi(e) ? e._ctx = wt : r === 3 && wt && (wt.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else if (k(e)) {
    if (n & 65) {
      bs(t, { default: e });
      return;
    }
    e = { default: e, _ctx: wt }, s = 32;
  } else
    e = String(e), n & 64 ? (s = 16, e = [Cl(e)]) : s = 8;
  t.children = e, t.shapeFlag |= s;
}
function Il(...t) {
  const e = {};
  for (let s = 0; s < t.length; s++) {
    const n = t[s];
    for (const r in n)
      if (r === "class")
        e.class !== n.class && (e.class = ne([e.class, n.class]));
      else if (r === "style")
        e.style = pn([e.style, n.style]);
      else if (Ss(r)) {
        const i = e[r], o = n[r];
        o && i !== o && !(D(i) && i.includes(o)) ? e[r] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !ws(r) && (e[r] = o);
      } else r !== "" && (e[r] = n[r]);
  }
  return e;
}
function $t(t, e, s, n = null) {
  Rt(t, e, 7, [
    s,
    n
  ]);
}
const El = ci();
let Tl = 0;
function Rl(t, e, s) {
  const n = t.type, r = (e ? e.appContext : t.appContext) || El, i = {
    uid: Tl++,
    vnode: t,
    type: n,
    parent: e,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Rr(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(r.provides),
    ids: e ? e.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: gi(n, r),
    emitsOptions: ai(n, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: z,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: z,
    data: z,
    props: z,
    attrs: z,
    slots: z,
    refs: z,
    setupState: z,
    setupContext: null,
    // suspense related
    suspense: s,
    suspenseId: s ? s.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return i.ctx = { _: i }, i.root = e ? e.root : i, i.emit = rl.bind(null, i), t.ce && t.ce(i), i;
}
let gt = null;
const Ei = () => gt || wt;
let xs, ln;
{
  const t = Es(), e = (s, n) => {
    let r;
    return (r = t[s]) || (r = t[s] = []), r.push(n), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  xs = e(
    "__VUE_INSTANCE_SETTERS__",
    (s) => gt = s
  ), ln = e(
    "__VUE_SSR_SETTERS__",
    (s) => Ze = s
  );
}
const es = (t) => {
  const e = gt;
  return xs(t), t.scope.on(), () => {
    t.scope.off(), xs(e);
  };
}, Yn = () => {
  gt && gt.scope.off(), xs(null);
};
function Ti(t) {
  return t.vnode.shapeFlag & 4;
}
let Ze = !1;
function Pl(t, e = !1, s = !1) {
  e && ln(e);
  const { props: n, children: r } = t.vnode, i = Ti(t);
  ul(t, n, i, e), pl(t, r, s || e);
  const o = i ? Ml(t, e) : void 0;
  return e && ln(!1), o;
}
function Ml(t, e) {
  const s = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, qo);
  const { setup: n } = s;
  if (n) {
    Kt();
    const r = t.setupContext = n.length > 1 ? Ll(t) : null, i = es(t), o = ts(
      n,
      t,
      0,
      [
        t.props,
        r
      ]
    ), l = br(o);
    if (Vt(), i(), (l || t.sp) && !Be(t) && ti(t), l) {
      if (o.then(Yn, Yn), e)
        return o.then((c) => {
          qn(t, c);
        }).catch((c) => {
          Ms(c, t, 0);
        });
      t.asyncDep = o;
    } else
      qn(t, o);
  } else
    Ri(t);
}
function qn(t, e, s) {
  k(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : q(e) && (t.setupState = Wr(e)), Ri(t);
}
function Ri(t, e, s) {
  const n = t.type;
  t.render || (t.render = n.render || Nt);
  {
    const r = es(t);
    Kt();
    try {
      Xo(t);
    } finally {
      Vt(), r();
    }
  }
}
const Al = {
  get(t, e) {
    return ft(t, "get", ""), t[e];
  }
};
function Ll(t) {
  const e = (s) => {
    t.exposed = s || {};
  };
  return {
    attrs: new Proxy(t.attrs, Al),
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function $s(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(Wr(Sn(t.exposed)), {
    get(e, s) {
      if (s in e)
        return e[s];
      if (s in We)
        return We[s](t);
    },
    has(e, s) {
      return s in e || s in We;
    }
  })) : t.proxy;
}
function Ol(t) {
  return k(t) && "__vccOpts" in t;
}
const se = (t, e) => /* @__PURE__ */ Co(t, e, Ze), $l = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let cn;
const Xn = typeof window < "u" && window.trustedTypes;
if (Xn)
  try {
    cn = /* @__PURE__ */ Xn.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const Pi = cn ? (t) => cn.createHTML(t) : (t) => t, Dl = "http://www.w3.org/2000/svg", Ul = "http://www.w3.org/1998/Math/MathML", Bt = typeof document < "u" ? document : null, zn = Bt && /* @__PURE__ */ Bt.createElement("template"), kl = {
  insert: (t, e, s) => {
    e.insertBefore(t, s || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, s, n) => {
    const r = e === "svg" ? Bt.createElementNS(Dl, t) : e === "mathml" ? Bt.createElementNS(Ul, t) : s ? Bt.createElement(t, { is: s }) : Bt.createElement(t);
    return t === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
  },
  createText: (t) => Bt.createTextNode(t),
  createComment: (t) => Bt.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => Bt.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, e, s, n, r, i) {
    const o = s ? s.previousSibling : e.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; e.insertBefore(r.cloneNode(!0), s), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      zn.innerHTML = Pi(
        n === "svg" ? `<svg>${t}</svg>` : n === "mathml" ? `<math>${t}</math>` : t
      );
      const l = zn.content;
      if (n === "svg" || n === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
      }
      e.insertBefore(l, s);
    }
    return [
      // first
      o ? o.nextSibling : e.firstChild,
      // last
      s ? s.previousSibling : e.lastChild
    ];
  }
}, Fl = /* @__PURE__ */ Symbol("_vtc");
function Nl(t, e, s) {
  const n = t[Fl];
  n && (e = (e ? [e, ...n] : [...n]).join(" ")), e == null ? t.removeAttribute("class") : s ? t.setAttribute("class", e) : t.className = e;
}
const Zn = /* @__PURE__ */ Symbol("_vod"), jl = /* @__PURE__ */ Symbol("_vsh"), Kl = /* @__PURE__ */ Symbol(""), Vl = /(?:^|;)\s*display\s*:/;
function Hl(t, e, s) {
  const n = t.style, r = et(s);
  let i = !1;
  if (s && !r) {
    if (e)
      if (et(e))
        for (const o of e.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          s[l] == null && Ue(n, l, "");
        }
      else
        for (const o in e)
          s[o] == null && Ue(n, o, "");
    for (const o in s) {
      o === "display" && (i = !0);
      const l = s[o];
      l != null ? Wl(
        t,
        o,
        !et(e) && e ? e[o] : void 0,
        l
      ) || Ue(n, o, l) : Ue(n, o, "");
    }
  } else if (r) {
    if (e !== s) {
      const o = n[Kl];
      o && (s += ";" + o), n.cssText = s, i = Vl.test(s);
    }
  } else e && t.removeAttribute("style");
  Zn in t && (t[Zn] = i ? n.display : "", t[jl] && (n.display = "none"));
}
const Qn = /\s*!important$/;
function Ue(t, e, s) {
  if (D(s))
    s.forEach((n) => Ue(t, e, n));
  else if (s == null && (s = ""), e.startsWith("--"))
    t.setProperty(e, s);
  else {
    const n = Bl(t, e);
    Qn.test(s) ? t.setProperty(
      ie(n),
      s.replace(Qn, ""),
      "important"
    ) : t[n] = s;
  }
}
const tr = ["Webkit", "Moz", "ms"], Gs = {};
function Bl(t, e) {
  const s = Gs[e];
  if (s)
    return s;
  let n = It(e);
  if (n !== "filter" && n in t)
    return Gs[e] = n;
  n = wr(n);
  for (let r = 0; r < tr.length; r++) {
    const i = tr[r] + n;
    if (i in t)
      return Gs[e] = i;
  }
  return e;
}
function Wl(t, e, s, n) {
  return t.tagName === "TEXTAREA" && (e === "width" || e === "height") && et(n) && s === n;
}
const er = "http://www.w3.org/1999/xlink";
function sr(t, e, s, n, r, i = Yi(e)) {
  n && e.startsWith("xlink:") ? s == null ? t.removeAttributeNS(er, e.slice(6, e.length)) : t.setAttributeNS(er, e, s) : s == null || i && !Ir(s) ? t.removeAttribute(e) : t.setAttribute(
    e,
    i ? "" : Ct(s) ? String(s) : s
  );
}
function nr(t, e, s, n, r) {
  if (e === "innerHTML" || e === "textContent") {
    s != null && (t[e] = e === "innerHTML" ? Pi(s) : s);
    return;
  }
  const i = t.tagName;
  if (e === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? t.getAttribute("value") || "" : t.value, c = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      t.type === "checkbox" ? "on" : ""
    ) : String(s);
    (l !== c || !("_value" in t)) && (t.value = c), s == null && t.removeAttribute(e), t._value = s;
    return;
  }
  let o = !1;
  if (s === "" || s == null) {
    const l = typeof t[e];
    l === "boolean" ? s = Ir(s) : s == null && l === "string" ? (s = "", o = !0) : l === "number" && (s = 0, o = !0);
  }
  try {
    t[e] = s;
  } catch {
  }
  o && t.removeAttribute(r || e);
}
function ve(t, e, s, n) {
  t.addEventListener(e, s, n);
}
function Jl(t, e, s, n) {
  t.removeEventListener(e, s, n);
}
const rr = /* @__PURE__ */ Symbol("_vei");
function Gl(t, e, s, n, r = null) {
  const i = t[rr] || (t[rr] = {}), o = i[e];
  if (n && o)
    o.value = n;
  else {
    const [l, c] = Xl(e);
    if (n) {
      const d = i[e] = Ql(
        n,
        r
      );
      ve(t, l, d, c);
    } else o && (Jl(t, l, o, c), i[e] = void 0);
  }
}
const Yl = /(Once|Passive|Capture)$/, ql = /^on:?(?:Once|Passive|Capture)$/;
function Xl(t) {
  let e, s;
  for (; (s = t.match(Yl)) && !ql.test(t); )
    e || (e = {}), t = t.slice(0, t.length - s[1].length), e[s[1].toLowerCase()] = !0;
  return [t[2] === ":" ? t.slice(3) : ie(t.slice(2)), e];
}
let Ys = 0;
const zl = /* @__PURE__ */ Promise.resolve(), Zl = () => Ys || (zl.then(() => Ys = 0), Ys = Date.now());
function Ql(t, e) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    const r = s.value;
    if (D(r)) {
      const i = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        i.call(n), n._stopped = !0;
      };
      const o = r.slice(), l = [n];
      for (let c = 0; c < o.length && !n._stopped; c++) {
        const d = o[c];
        d && Rt(
          d,
          e,
          5,
          l
        );
      }
    } else
      Rt(
        r,
        e,
        5,
        [n]
      );
  };
  return s.value = t, s.attached = Zl(), s;
}
const ir = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, tc = (t, e, s, n, r, i) => {
  const o = r === "svg";
  e === "class" ? Nl(t, n, o) : e === "style" ? Hl(t, s, n) : Ss(e) ? ws(e) || Gl(t, e, s, n, i) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : ec(t, e, n, o)) ? (nr(t, e, n), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && sr(t, e, n, o, i, e !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (sc(t, e) || // @ts-expect-error _def is private
  t._def.__asyncLoader && (/[A-Z]/.test(e) || !et(n))) ? nr(t, It(e), n, i, e) : (e === "true-value" ? t._trueValue = n : e === "false-value" && (t._falseValue = n), sr(t, e, n, o));
};
function ec(t, e, s, n) {
  if (n)
    return !!(e === "innerHTML" || e === "textContent" || e in t && ir(e) && k(s));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && t.tagName === "IFRAME" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const r = t.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return ir(e) && et(s) ? !1 : e in t;
}
function sc(t, e) {
  const s = (
    // @ts-expect-error _def is private
    t._def.props
  );
  if (!s)
    return !1;
  const n = It(e);
  return Array.isArray(s) ? s.some((r) => It(r) === n) : Object.keys(s).some((r) => It(r) === n);
}
const or = (t) => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return D(e) ? (s) => ds(e, s) : e;
};
function nc(t) {
  t.target.composing = !0;
}
function lr(t) {
  const e = t.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
const qs = /* @__PURE__ */ Symbol("_assign");
function cr(t, e, s) {
  return e && (t = t.trim()), s && (t = hn(t)), t;
}
const ke = {
  created(t, { modifiers: { lazy: e, trim: s, number: n } }, r) {
    t[qs] = or(r);
    const i = n || r.props && r.props.type === "number";
    ve(t, e ? "change" : "input", (o) => {
      o.target.composing || t[qs](cr(t.value, s, i));
    }), (s || i) && ve(t, "change", () => {
      t.value = cr(t.value, s, i);
    }), e || (ve(t, "compositionstart", nc), ve(t, "compositionend", lr), ve(t, "change", lr));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(t, { value: e }) {
    t.value = e ?? "";
  },
  beforeUpdate(t, { value: e, oldValue: s, modifiers: { lazy: n, trim: r, number: i } }, o) {
    if (t[qs] = or(o), t.composing) return;
    const l = (i || t.type === "number") && !/^0\d/.test(t.value) ? hn(t.value) : t.value, c = e ?? "";
    if (l === c)
      return;
    const d = t.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === t && t.type !== "range" && (n && e === s || r && t.value.trim() === c) || (t.value = c);
  }
}, rc = ["ctrl", "shift", "alt", "meta"], ic = {
  stop: (t) => t.stopPropagation(),
  prevent: (t) => t.preventDefault(),
  self: (t) => t.target !== t.currentTarget,
  ctrl: (t) => !t.ctrlKey,
  shift: (t) => !t.shiftKey,
  alt: (t) => !t.altKey,
  meta: (t) => !t.metaKey,
  left: (t) => "button" in t && t.button !== 0,
  middle: (t) => "button" in t && t.button !== 1,
  right: (t) => "button" in t && t.button !== 2,
  exact: (t, e) => rc.some((s) => t[`${s}Key`] && !e.includes(s))
}, Mi = (t, e) => {
  if (!t) return t;
  const s = t._withMods || (t._withMods = {}), n = e.join(".");
  return s[n] || (s[n] = (r, ...i) => {
    for (let o = 0; o < e.length; o++) {
      const l = ic[e[o]];
      if (l && l(r, e)) return;
    }
    return t(r, ...i);
  });
}, oc = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Ai = (t, e) => {
  const s = t._withKeys || (t._withKeys = {}), n = e.join(".");
  return s[n] || (s[n] = (r) => {
    if (!("key" in r))
      return;
    const i = ie(r.key);
    if (e.some(
      (o) => o === i || oc[o] === i
    ))
      return t(r);
  });
}, lc = /* @__PURE__ */ ut({ patchProp: tc }, kl);
let ar;
function cc() {
  return ar || (ar = ml(lc));
}
const ac = (...t) => {
  const e = cc().createApp(...t), { mount: s } = e;
  return e.mount = (n) => {
    const r = fc(n);
    if (!r) return;
    const i = e._component;
    !k(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = s(r, !1, uc(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, e;
};
function uc(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function fc(t) {
  return et(t) ? document.querySelector(t) : t;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Li;
const Ds = (t) => Li = t, Oi = (
  /* istanbul ignore next */
  Symbol()
);
function an(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var Ge;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(Ge || (Ge = {}));
function dc() {
  const t = Pr(!0), e = t.run(() => /* @__PURE__ */ jt({}));
  let s = [], n = [];
  const r = Sn({
    install(i) {
      Ds(r), r._a = i, i.provide(Oi, r), i.config.globalProperties.$pinia = r, n.forEach((o) => s.push(o)), n = [];
    },
    use(i) {
      return this._a ? s.push(i) : n.push(i), this;
    },
    _p: s,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: t,
    _s: /* @__PURE__ */ new Map(),
    state: e
  });
  return r;
}
const $i = () => {
};
function ur(t, e, s, n = $i) {
  t.push(e);
  const r = () => {
    const i = t.indexOf(e);
    i > -1 && (t.splice(i, 1), n());
  };
  return !s && Mr() && Xi(r), r;
}
function ge(t, ...e) {
  t.slice().forEach((s) => {
    s(...e);
  });
}
const hc = (t) => t(), fr = Symbol(), Xs = Symbol();
function un(t, e) {
  t instanceof Map && e instanceof Map ? e.forEach((s, n) => t.set(n, s)) : t instanceof Set && e instanceof Set && e.forEach(t.add, t);
  for (const s in e) {
    if (!e.hasOwnProperty(s))
      continue;
    const n = e[s], r = t[s];
    an(r) && an(n) && t.hasOwnProperty(s) && !/* @__PURE__ */ st(n) && !/* @__PURE__ */ Yt(n) ? t[s] = un(r, n) : t[s] = n;
  }
  return t;
}
const pc = (
  /* istanbul ignore next */
  Symbol()
);
function gc(t) {
  return !an(t) || !t.hasOwnProperty(pc);
}
const { assign: Qt } = Object;
function mc(t) {
  return !!(/* @__PURE__ */ st(t) && t.effect);
}
function vc(t, e, s, n) {
  const { state: r, actions: i, getters: o } = e, l = s.state.value[t];
  let c;
  function d() {
    l || (s.state.value[t] = r ? r() : {});
    const u = /* @__PURE__ */ bo(s.state.value[t]);
    return Qt(u, i, Object.keys(o || {}).reduce((h, _) => (h[_] = Sn(se(() => {
      Ds(s);
      const x = s._s.get(t);
      return o[_].call(x, x);
    })), h), {}));
  }
  return c = Di(t, d, e, s, n, !0), c;
}
function Di(t, e, s = {}, n, r, i) {
  let o;
  const l = Qt({ actions: {} }, s), c = { deep: !0 };
  let d, u, h = [], _ = [], x;
  const I = n.state.value[t];
  !i && !I && (n.state.value[t] = {});
  let b;
  function M(N) {
    let V;
    d = u = !1, typeof N == "function" ? (N(n.state.value[t]), V = {
      type: Ge.patchFunction,
      storeId: t,
      events: x
    }) : (un(n.state.value[t], N), V = {
      type: Ge.patchObject,
      payload: N,
      storeId: t,
      events: x
    });
    const it = b = Symbol();
    Gr().then(() => {
      b === it && (d = !0);
    }), u = !0, ge(h, V, n.state.value[t]);
  }
  const O = i ? function() {
    const { state: V } = s, it = V ? V() : {};
    this.$patch((St) => {
      Qt(St, it);
    });
  } : (
    /* istanbul ignore next */
    $i
  );
  function A() {
    o.stop(), h = [], _ = [], n._s.delete(t);
  }
  const C = (N, V = "") => {
    if (fr in N)
      return N[Xs] = V, N;
    const it = function() {
      Ds(n);
      const St = Array.from(arguments), Pt = [], Zt = [];
      function Re(j) {
        Pt.push(j);
      }
      function ns(j) {
        Zt.push(j);
      }
      ge(_, {
        args: St,
        name: it[Xs],
        store: B,
        after: Re,
        onError: ns
      });
      let nt;
      try {
        nt = N.apply(this && this.$id === t ? this : B, St);
      } catch (j) {
        throw ge(Zt, j), j;
      }
      return nt instanceof Promise ? nt.then((j) => (ge(Pt, j), j)).catch((j) => (ge(Zt, j), Promise.reject(j))) : (ge(Pt, nt), nt);
    };
    return it[fr] = !0, it[Xs] = V, it;
  }, R = {
    _p: n,
    // _s: scope,
    $id: t,
    $onAction: ur.bind(null, _),
    $patch: M,
    $reset: O,
    $subscribe(N, V = {}) {
      const it = ur(h, N, V.detached, () => St()), St = o.run(() => Ve(() => n.state.value[t], (Pt) => {
        (V.flush === "sync" ? u : d) && N({
          storeId: t,
          type: Ge.direct,
          events: x
        }, Pt);
      }, Qt({}, c, V)));
      return it;
    },
    $dispose: A
  }, B = /* @__PURE__ */ Rs(R);
  n._s.set(t, B);
  const rt = (n._a && n._a.runWithContext || hc)(() => n._e.run(() => (o = Pr()).run(() => e({ action: C }))));
  for (const N in rt) {
    const V = rt[N];
    if (/* @__PURE__ */ st(V) && !mc(V) || /* @__PURE__ */ Yt(V))
      i || (I && gc(V) && (/* @__PURE__ */ st(V) ? V.value = I[N] : un(V, I[N])), n.state.value[t][N] = V);
    else if (typeof V == "function") {
      const it = C(V, N);
      rt[N] = it, l.actions[N] = V;
    }
  }
  return Qt(B, rt), Qt(/* @__PURE__ */ J(B), rt), Object.defineProperty(B, "$state", {
    get: () => n.state.value[t],
    set: (N) => {
      M((V) => {
        Qt(V, N);
      });
    }
  }), n._p.forEach((N) => {
    Qt(B, o.run(() => N({
      store: B,
      app: n._a,
      pinia: n,
      options: l
    })));
  }), I && i && s.hydrate && s.hydrate(B.$state, I), d = !0, u = !0, B;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Us(t, e, s) {
  let n, r;
  const i = typeof e == "function";
  typeof t == "string" ? (n = t, r = i ? s : e) : (r = t, n = t.id);
  function o(l, c) {
    const d = Lo();
    return l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    l || (d ? Ke(Oi, null) : null), l && Ds(l), l = Li, l._s.has(n) || (i ? Di(n, e, r, l) : vc(n, r, l)), l._s.get(n);
  }
  return o.$id = n, o;
}
function yc() {
  return [
    { id: "netease", enabled: !0, priority: 0, config: { baseURL: "" } },
    { id: "local", enabled: !0, priority: 1, config: {} },
    { id: "custom", enabled: !1, priority: 2, config: { searchURL: "", resolveURL: "" } }
  ];
}
function zs() {
  return {
    volume: 65,
    playMode: "list",
    position: null,
    autoPlayOnNewCue: !0,
    providers: yc(),
    customCueRules: []
  };
}
const vt = /* @__PURE__ */ Us("settings", {
  state: () => ({
    settings: zs(),
    storage: null
  }),
  getters: {
    defaults: () => zs()
  },
  actions: {
    init(t) {
      this.storage = t;
      const e = t.getSettings(), s = zs();
      if (e) {
        const n = {
          ...s,
          ...e,
          providers: s.providers.map((r) => {
            const i = e.providers?.find((o) => o.id === r.id);
            return i ? { ...i, config: i.config ?? r.config ?? {} } : r;
          })
        };
        this.settings = n;
      } else
        this.settings = s;
    },
    setVolume(t) {
      this.settings.volume = t, this.save();
    },
    setPlayMode(t) {
      this.settings.playMode = t, this.save();
    },
    setPosition(t) {
      this.settings.position = t, this.save();
    },
    addCustomCueRule(t) {
      this.settings.customCueRules.push(t), this.save();
    },
    removeCustomCueRule(t) {
      this.settings.customCueRules.splice(t, 1), this.save();
    },
    setProviderConfig(t, e) {
      const s = this.settings.providers.find((n) => n.id === t);
      s && (s.enabled = e, this.save());
    },
    save() {
      this.storage && this.storage.setSettings(this.settings);
    }
  }
});
class _c {
  constructor() {
    this.listeners = /* @__PURE__ */ new Map(), this.audio = new Audio();
  }
  load(e) {
    this.audio.src = e;
  }
  async play() {
    try {
      await this.audio.play();
    } catch (e) {
      console.error("[AudioEngine] play() failed:", e);
    }
  }
  pause() {
    this.audio.pause();
  }
  seek(e) {
    this.audio.currentTime = e;
  }
  setVolume(e) {
    this.audio.volume = e;
  }
  get currentTime() {
    return this.audio.currentTime;
  }
  get duration() {
    return this.audio.duration;
  }
  get paused() {
    return this.audio.paused;
  }
  on(e, s) {
    let n = this.listeners.get(e);
    n || (n = /* @__PURE__ */ new Set(), this.listeners.set(e, n));
    const r = s;
    return n.add(r), this.audio.addEventListener(e, r), () => {
      this.audio.removeEventListener(e, r), n.delete(r);
    };
  }
  destroy() {
    for (const [e, s] of this.listeners) {
      for (const n of s)
        this.audio.removeEventListener(e, n);
      s.clear();
    }
    this.listeners.clear(), this.audio.src = "";
  }
}
const dr = /\[(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?\]/g;
function bc(t) {
  const e = t.split(/\r?\n/), s = [];
  for (const n of e) {
    const r = new RegExp(dr.source, "g"), i = [];
    let o;
    for (; (o = r.exec(n)) !== null; ) {
      const c = parseInt(o[1], 10), d = parseInt(o[2], 10), u = o[3] ?? "", h = u ? parseInt(u.padEnd(3, "0"), 10) : 0;
      i.push(c * 60 + d + h / 1e3);
    }
    if (i.length === 0) continue;
    const l = n.replace(new RegExp(dr.source, "g"), "").trim();
    if (l !== "")
      for (const c of i)
        s.push({ time: c, text: l });
  }
  s.sort((n, r) => n.time - r.time);
  for (let n = 0; n < s.length; n++)
    n < s.length - 1 && (s[n].next = s[n + 1]);
  return s;
}
function hr(t, e) {
  if (t.length === 0) return null;
  let s = null;
  for (const n of t)
    if (n.time <= e)
      s = n;
    else
      break;
  return s;
}
class xc {
  constructor() {
    this.fallbackMeta = /* @__PURE__ */ new Map();
  }
  hasST() {
    return typeof SillyTavern < "u" && typeof SillyTavern.getContext == "function";
  }
  ctx() {
    return SillyTavern.getContext();
  }
  // ===== extensionSettings =====
  getSettings() {
    if (this.hasST())
      return this.ctx().extensionSettings[as] ?? null;
    const e = localStorage.getItem(this.settingsKey());
    if (e === null) return null;
    try {
      return JSON.parse(e);
    } catch {
      return null;
    }
  }
  setSettings(e) {
    if (this.hasST()) {
      const s = this.ctx();
      s.extensionSettings[as] = e, s.saveSettingsDebounced();
      return;
    }
    localStorage.setItem(this.settingsKey(), JSON.stringify(e));
  }
  // ===== chatMetadata =====
  getMetadata(e) {
    return this.hasST() ? this.ctx().chatMetadata[e] ?? null : this.fallbackMeta.get(e) ?? null;
  }
  setMetadata(e, s) {
    if (this.hasST()) {
      const n = this.ctx(), r = n.chatMetadata;
      r[e] = s, n.saveMetadata();
      return;
    }
    this.fallbackMeta.set(e, s);
  }
  // ===== localforage blobs =====
  get forage() {
    return this.hasST() ? SillyTavern.libs.localforage : window.localforage;
  }
  async getBlob(e) {
    return await this.forage.getItem(e) ?? null;
  }
  async setBlob(e, s) {
    await this.forage.setItem(e, s);
  }
  async removeBlob(e) {
    await this.forage.removeItem(e);
  }
  // ===== resolve cache (with TTL) =====
  async getCache(e) {
    const s = await this.forage.getItem(this.cacheKey(e)) ?? null;
    return s === null ? null : Date.now() >= s.expiresAt ? (await this.forage.removeItem(this.cacheKey(e)), null) : s.value;
  }
  async setCache(e, s, n) {
    const r = { value: s, expiresAt: Date.now() + n };
    await this.forage.setItem(this.cacheKey(e), r);
  }
  async clearCache() {
    const e = this.forage, s = this.cachePrefix(), n = await e.keys();
    await Promise.all(
      n.filter((r) => r.startsWith(s)).map((r) => e.removeItem(r))
    );
  }
  // ----- key helpers -----
  settingsKey() {
    return `${as}__settings`;
  }
  cachePrefix() {
    return `${as}:cache:`;
  }
  cacheKey(e) {
    return `${this.cachePrefix()}${e}`;
  }
}
function Sc() {
  return new xc();
}
const as = "st-music-player", pr = "stmp_cursor", gr = "stmp_userlist";
class wc {
  constructor(e) {
    this.providers = e;
  }
  async searchAll(e) {
    const s = await Promise.allSettled(
      this.providers.map((i) => i.search(e))
    ), n = [], r = /* @__PURE__ */ new Map();
    return s.forEach((i) => {
      if (i.status === "fulfilled")
        for (const o of i.value) {
          const l = `${o.name}__${o.artist}`;
          r.get(l) === void 0 && (r.set(l, n.length), n.push(o));
        }
    }), n;
  }
  async resolve(e, s) {
    const n = this.getProvider(s);
    return n ? new Promise((r) => {
      const i = setTimeout(() => r(null), 5e3);
      n.resolve(e).then((o) => {
        clearTimeout(i), r(o);
      }).catch(() => {
        clearTimeout(i), r(null);
      });
    }) : null;
  }
  getProvider(e) {
    return this.providers.find((s) => s.id === e);
  }
}
class Cc {
  constructor(e) {
    this.id = "netease", this.name = "网易云", this.baseURL = e?.baseURL ?? "https://music-api.gdstudio.xyz/api.php";
  }
  async fetchJson(e, s = 5e3) {
    try {
      const n = new AbortController(), r = setTimeout(() => n.abort(), s), i = await fetch(e, { signal: n.signal });
      return clearTimeout(r), i.ok ? await i.json() : null;
    } catch {
      return null;
    }
  }
  async search(e) {
    const s = await this.fetchJson(
      `${this.baseURL}?types=search&name=${encodeURIComponent(e)}&count=20&pages=1`
    );
    return Array.isArray(s) ? s.map((n) => ({
      id: String(n.id ?? ""),
      name: String(n.name ?? ""),
      artist: Array.isArray(n.artist) ? n.artist.join(", ") : String(n.artist ?? ""),
      duration: n.duration ? Number(n.duration) : void 0,
      provider: this.id
    })) : [];
  }
  async resolve(e) {
    const s = await this.fetchJson(
      `${this.baseURL}?types=url&id=${encodeURIComponent(e)}`
    );
    if (!s || !s.url) return null;
    const [n, r] = await Promise.all([
      this.fetchJson(`${this.baseURL}?types=lyric&id=${encodeURIComponent(e)}`),
      this.fetchJson(`${this.baseURL}?types=pic&id=${encodeURIComponent(e)}`)
    ]);
    return {
      url: String(s.url),
      lyric: n?.lyric ? String(n.lyric) : void 0,
      cover: r?.url ? String(r.url) : void 0,
      name: "",
      artist: "",
      source: this.id
    };
  }
}
class Ic {
  constructor(e) {
    this.id = "local", this.name = "本地文件", this.storage = e?.storage ?? null;
  }
  async search(e) {
    return [];
  }
  async resolve(e) {
    if (!this.storage) return null;
    const s = await this.storage.getItem("stmp:audio:" + e);
    return s ? {
      url: URL.createObjectURL(s),
      name: "",
      artist: "",
      source: this.id
    } : null;
  }
}
class Ec {
  constructor(e) {
    this.id = "custom", this.name = "自定义 API", this.searchURL = e?.searchURL, this.resolveURL = e?.resolveURL;
  }
  async fetchJson(e, s = 5e3) {
    try {
      const n = new AbortController(), r = setTimeout(() => n.abort(), s), i = await fetch(e, { signal: n.signal });
      return clearTimeout(r), i.ok ? await i.json() : null;
    } catch {
      return null;
    }
  }
  async search(e) {
    if (!this.searchURL) return [];
    const s = this.searchURL.replace("{keyword}", encodeURIComponent(e)), n = await this.fetchJson(s);
    return Array.isArray(n) ? n.map((r) => ({
      id: String(r.id ?? ""),
      name: String(r.name ?? ""),
      artist: String(r.artist ?? ""),
      duration: r.duration ? Number(r.duration) : void 0,
      provider: this.id
    })) : [];
  }
  async resolve(e) {
    if (!this.resolveURL) return null;
    const s = this.resolveURL.replace("{id}", encodeURIComponent(e)), n = await this.fetchJson(s);
    return !n || !n.url ? null : {
      url: String(n.url),
      lyric: n.lyric ? String(n.lyric) : void 0,
      cover: n.cover ? String(n.cover) : void 0,
      name: String(n.name ?? ""),
      artist: String(n.artist ?? ""),
      source: this.id
    };
  }
}
function Ui(t) {
  const s = t.filter((n) => n.enabled).sort((n, r) => n.priority - r.priority).map((n) => {
    const r = n.config ?? {};
    switch (n.id) {
      case "netease":
        return new Cc({ baseURL: r.baseURL });
      case "local":
        return new Ic({
          storage: r.storage ? r.storage : void 0
        });
      case "custom":
        return new Ec({
          searchURL: r.searchURL,
          resolveURL: r.resolveURL
        });
      default:
        return null;
    }
  }).filter((n) => n !== null);
  return new wc(s);
}
function us() {
  return `stmp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
const ss = /* @__PURE__ */ Us("playlist", {
  state: () => ({
    list: [],
    currentIndex: -1,
    playMode: "list",
    chatIndexer: null,
    chatId: null
  }),
  getters: {
    current(t) {
      return t.currentIndex >= 0 ? t.list[t.currentIndex] ?? null : null;
    },
    isEmpty(t) {
      return t.list.length === 0;
    }
  },
  actions: {
    init(t) {
      this.chatIndexer = t;
    },
    setChatId(t) {
      this.chatId = t, this.list = this.list.filter((n) => n.source !== "chat"), this.loadFromStorage();
      const s = vt().storage;
      if (s) {
        const n = s.getMetadata(pr);
        n && n.chatId === t && this.chatIndexer?.setCursor(t, n.lastScannedMessageId);
      }
    },
    loadFromStorage() {
      const e = vt().storage;
      if (!e || !this.chatId) return;
      const s = e.getMetadata(gr);
      if (s && Array.isArray(s)) {
        const n = s.filter((r) => r && r.source === "user");
        this.list = [...this.list.filter((r) => r.source !== "user"), ...n];
      }
    },
    addItem(t) {
      this.list.push(t), t.source === "user" && this.saveUserList();
    },
    removeItem(t) {
      if (t < 0 || t >= this.list.length) return;
      const e = this.list.splice(t, 1)[0];
      e && e.source === "user" && this.saveUserList(), t === this.currentIndex ? this.currentIndex = -1 : t < this.currentIndex && this.currentIndex--;
    },
    addFromCue(t, e) {
      const s = {
        id: us(),
        song: t.song,
        artist: t.artist,
        source: "chat",
        messageId: e,
        addedAt: Date.now()
      };
      this.list.push(s);
    },
    addFromSearch(t) {
      const e = {
        id: us(),
        song: t.name,
        artist: t.artist,
        source: "user",
        providerId: t.provider,
        providerTrackId: t.id,
        addedAt: Date.now()
      };
      this.list.push(e), this.saveUserList();
    },
    addLocalFile(t, e) {
      const s = {
        id: us(),
        song: t,
        source: "local",
        localBlobKey: e,
        addedAt: Date.now()
      };
      this.list.push(s);
    },
    play(t) {
      t < 0 || t >= this.list.length || (this.currentIndex = t, this.resolveAndPlay(t));
    },
    next() {
      if (this.list.length === 0) return;
      const t = this.playMode;
      let e = this.currentIndex;
      if (t === "single")
        e = this.currentIndex;
      else if (t === "random")
        if (this.list.length === 1)
          e = 0;
        else {
          for (let s = 0; s < 5; s++) {
            const n = Math.floor(Math.random() * this.list.length);
            if (n !== this.currentIndex) {
              e = n;
              break;
            }
          }
          e === this.currentIndex && (e = (this.currentIndex + 1) % this.list.length);
        }
      else
        e = this.currentIndex + 1, e >= this.list.length && (e = 0);
      this.play(e);
    },
    prev() {
      if (this.list.length === 0) return;
      let t = this.currentIndex - 1;
      t < 0 && (t = this.list.length - 1), this.play(t);
    },
    async resolveAndPlay(t) {
      const e = this.list[t];
      if (!e) return;
      const s = vt(), n = s.storage;
      if (!n) return;
      let r = null;
      if (e.source === "local" && e.localBlobKey) {
        const o = await n.getBlob(e.localBlobKey);
        o && (r = {
          url: URL.createObjectURL(o),
          name: e.song,
          artist: e.artist ?? "",
          source: "local"
        });
      } else if (e.providerId && e.providerTrackId) {
        const o = `stmp:resolve:${e.providerId}:${e.providerTrackId}`, l = await n.getCache(o);
        l && (r = {
          url: l.url,
          lyric: l.lyric,
          cover: l.cover,
          name: e.song,
          artist: e.artist ?? "",
          source: e.providerId
        });
      }
      if (!r && e.providerId && e.providerTrackId) {
        const l = await Ui(s.settings.providers).resolve(e.providerTrackId, e.providerId);
        if (l) {
          l.name = e.song, l.artist = e.artist ?? l.artist, r = l;
          const c = `stmp:resolve:${e.providerId}:${e.providerTrackId}`;
          await n.setCache(c, {
            url: l.url,
            lyric: l.lyric,
            cover: l.cover
          }, 36e5);
        }
      }
      if (!r) {
        console.warn(`[playlist] resolve failed for "${e.song}"`);
        return;
      }
      await he().loadAndPlay(r);
    },
    handleNewCues(t) {
      if (t.length === 0) return;
      const e = vt();
      let s = null;
      for (const n of t)
        for (const r of n.cues) {
          const i = {
            id: us(),
            song: r.song,
            artist: r.artist,
            source: "chat",
            messageId: n.messageId,
            addedAt: Date.now()
          };
          this.list.push(i), s = i;
        }
      if (e.settings.autoPlayOnNewCue && s) {
        const n = this.list.indexOf(s);
        n >= 0 && this.play(n);
      }
    },
    handleMessageUpdate(t) {
      if (!this.chatIndexer || !this.chatId) return;
      const e = vt(), s = this.chatIndexer.scanMessage(
        this.chatId,
        t,
        e.settings.customCueRules
      ), n = this.list.map((o, l) => o.messageId === t ? l : -1).filter((o) => o >= 0);
      if (n.length === 0) {
        s.cue && this.addFromCue(s.cue, t);
        return;
      }
      if (!s.cue) {
        for (const o of [...n].reverse())
          this.removeItem(o);
        return;
      }
      const r = n[0], i = this.list[r];
      i.song = s.cue.song, i.artist = s.cue.artist;
      for (const o of [...n].reverse())
        o !== r && this.removeItem(o);
    },
    handleMessageDelete(t) {
      const e = this.list.map((s, n) => s.messageId === t ? n : -1).filter((s) => s >= 0);
      for (const s of [...e].reverse())
        this.removeItem(s);
    },
    saveUserList() {
      const e = vt().storage;
      if (!e || !this.chatId) return;
      const s = this.list.filter((n) => n.source === "user");
      e.setMetadata(gr, s);
    },
    getCursor() {
      return !this.chatIndexer || !this.chatId ? -1 : this.chatIndexer.getCursor(this.chatId);
    },
    setCursor(t) {
      if (!this.chatIndexer || !this.chatId) return;
      this.chatIndexer.setCursor(this.chatId, t);
      const s = vt().storage;
      s && s.setMetadata(pr, {
        chatId: this.chatId,
        lastScannedMessageId: t,
        updatedAt: Date.now()
      });
    }
  }
}), he = /* @__PURE__ */ Us("player", {
  state: () => ({
    audioEngine: null,
    isPlaying: !1,
    currentTime: 0,
    duration: 0,
    volume: 65,
    lyrics: [],
    currentLyricIndex: -1,
    currentTrack: null
  }),
  actions: {
    init() {
      if (this.audioEngine) return;
      const t = new _c();
      this.audioEngine = t;
      const e = he();
      t.on("timeupdate", () => {
        if (!t) return;
        e.currentTime = t.currentTime, e.duration = t.duration;
        const s = hr(e.lyrics, t.currentTime), n = s ? e.lyrics.indexOf(s) : -1;
        e.currentLyricIndex = n;
      }), t.on("ended", () => {
        ss().next();
      }), t.on("play", () => {
        e.isPlaying = !0;
      }), t.on("pause", () => {
        e.isPlaying = !1;
      });
    },
    async loadAndPlay(t) {
      this.audioEngine || this.init();
      const e = this.audioEngine;
      e.load(t.url), this.currentTrack = t, t.lyric ? this.updateLyrics(t.lyric) : (this.lyrics = [], this.currentLyricIndex = -1), await e.play();
    },
    async play() {
      await this.audioEngine?.play();
    },
    pause() {
      this.audioEngine?.pause();
    },
    async togglePlay() {
      this.isPlaying ? this.pause() : await this.play();
    },
    seek(t) {
      this.audioEngine?.seek(t);
    },
    setVolume(t) {
      this.volume = t, this.audioEngine?.setVolume(t / 100), vt().setVolume(t);
    },
    updateLyrics(t) {
      this.lyrics = bc(t), this.currentLyricIndex = -1;
    },
    getActiveLyric() {
      return hr(this.lyrics, this.currentTime);
    },
    destroy() {
      this.audioEngine?.destroy(), this.audioEngine = null, this.isPlaying = !1, this.currentTime = 0, this.duration = 0, this.lyrics = [], this.currentLyricIndex = -1, this.currentTrack = null;
    }
  }
}), Tc = /* @__PURE__ */ Us("search", {
  state: () => ({
    keyword: "",
    results: [],
    isSearching: !1,
    error: null
  }),
  actions: {
    setKeyword(t) {
      this.keyword = t;
    },
    async search(t) {
      if (!this.keyword.trim()) {
        this.results = [];
        return;
      }
      this.isSearching = !0, this.error = null;
      try {
        this.results = await t.searchAll(this.keyword);
      } catch (e) {
        this.error = e instanceof Error ? e.message : String(e), this.results = [];
      } finally {
        this.isSearching = !1;
      }
    },
    clear() {
      this.keyword = "", this.results = [], this.error = null;
    }
  }
}), Rc = { class: "stmp-collapsed-title" }, Pc = ["aria-label"], Mc = /* @__PURE__ */ Ee({
  __name: "CollapsedBar",
  emits: ["expand"],
  setup(t) {
    const e = he(), s = se(() => e.currentTrack?.name || "未播放");
    return (n, r) => (F(), H("div", {
      class: "stmp-collapsed-bar",
      onClick: r[1] || (r[1] = (i) => n.$emit("expand"))
    }, [
      T("span", Rc, tt(s.value), 1),
      T("button", {
        class: "stmp-collapsed-btn",
        "aria-label": K(e).isPlaying ? "暂停" : "播放",
        onClick: r[0] || (r[0] = Mi((i) => K(e).togglePlay(), ["stop"]))
      }, tt(K(e).isPlaying ? "⏸" : "▶"), 9, Pc)
    ]));
  }
}), Te = (t, e) => {
  const s = t.__vccOpts || t;
  for (const [n, r] of e)
    s[n] = r;
  return s;
}, Ac = /* @__PURE__ */ Te(Mc, [["__scopeId", "data-v-76d6990c"]]), Lc = { class: "stmp-playlist" }, Oc = { class: "stmp-upload-area" }, $c = {
  key: 0,
  class: "stmp-empty"
}, Dc = { class: "stmp-group-label" }, Uc = ["onClick"], kc = { class: "stmp-item-index" }, Fc = { class: "stmp-item-info" }, Nc = { class: "stmp-item-song" }, jc = {
  key: 0,
  class: "stmp-item-artist"
}, Kc = ["onClick"], Vc = /* @__PURE__ */ Ee({
  __name: "PlaylistView",
  setup(t) {
    const e = ss(), s = vt(), n = /* @__PURE__ */ jt(null), r = () => {
      n.value?.click();
    }, i = async (u) => {
      const h = u.target;
      if (!h.files || !h.files[0]) return;
      const _ = h.files[0], x = `stmp:audio:${Date.now()}-${_.name}`, I = s.storage;
      I && (await I.setBlob(x, _), e.addLocalFile(_.name, x)), h.value = "";
    }, o = se(() => {
      const u = {
        chat: [],
        user: [],
        local: []
      };
      return e.list.forEach((h, _) => {
        u[h.source] && u[h.source].push({ index: _, item: h });
      }), u;
    }), l = {
      chat: "From Chat",
      user: "My List",
      local: "Local Files"
    };
    function c(u) {
      e.play(u);
    }
    function d(u) {
      e.removeItem(u);
    }
    return (u, h) => (F(), H("div", Lc, [
      T("div", Oc, [
        T("input", {
          type: "file",
          accept: "audio/*",
          ref_key: "fileInputRef",
          ref: n,
          onChange: i,
          style: { display: "none" }
        }, null, 544),
        T("button", {
          class: "stmp-upload-btn",
          "aria-label": "上传本地音频",
          onClick: r
        }, " + 添加本地文件 ")
      ]),
      K(e).isEmpty ? (F(), H("div", $c, "No Songs")) : (F(), H(at, { key: 1 }, xe(["chat", "user", "local"], (_) => T("div", {
        key: _,
        class: "stmp-group"
      }, [
        o.value[_].length ? (F(), H(at, { key: 0 }, [
          T("div", Dc, tt(l[_]), 1),
          (F(!0), H(at, null, xe(o.value[_], (x) => (F(), H("div", {
            key: x.item.id,
            class: ne(["stmp-item", { active: x.index === K(e).currentIndex }]),
            onClick: (I) => c(x.index)
          }, [
            T("span", kc, tt(x.index + 1), 1),
            T("div", Fc, [
              T("span", Nc, tt(x.item.song), 1),
              x.item.artist ? (F(), H("span", jc, tt(x.item.artist), 1)) : _t("", !0)
            ]),
            T("button", {
              class: "stmp-item-del",
              onClick: Mi((I) => d(x.index), ["stop"])
            }, "✕", 8, Kc)
          ], 10, Uc))), 128))
        ], 64)) : _t("", !0)
      ])), 64))
    ]));
  }
}), Hc = /* @__PURE__ */ Te(Vc, [["__scopeId", "data-v-7303863f"]]), Bc = { class: "stmp-search" }, Wc = { class: "stmp-search-bar" }, Jc = ["disabled"], Gc = {
  key: 0,
  class: "stmp-search-error"
}, Yc = {
  key: 1,
  class: "stmp-search-loading"
}, qc = {
  key: 2,
  class: "stmp-search-empty"
}, Xc = {
  key: 3,
  class: "stmp-results"
}, zc = ["onClick"], Zc = { class: "stmp-result-info" }, Qc = { class: "stmp-result-name" }, ta = {
  key: 0,
  class: "stmp-result-artist"
}, ea = { class: "stmp-result-provider" }, sa = /* @__PURE__ */ Ee({
  __name: "SearchView",
  setup(t) {
    const e = Tc(), s = ss(), n = vt(), r = /* @__PURE__ */ jt(e.keyword);
    async function i() {
      e.setKeyword(r.value);
      const c = Ui(n.settings.providers);
      await e.search(c);
    }
    const o = () => {
      i();
    };
    function l(c) {
      const d = s.list.length;
      s.addFromSearch(c);
      const u = s.list.length - 1;
      u >= d && s.play(u);
    }
    return (c, d) => (F(), H("div", Bc, [
      T("div", Wc, [
        $e(T("input", {
          "onUpdate:modelValue": d[0] || (d[0] = (u) => r.value = u),
          class: "stmp-search-input",
          placeholder: "Search Song...",
          onKeydown: Ai(i, ["enter"])
        }, null, 544), [
          [ke, r.value]
        ]),
        T("button", {
          class: "stmp-search-btn",
          disabled: K(e).isSearching,
          onClick: i
        }, tt(K(e).isSearching ? "..." : "🔍"), 9, Jc)
      ]),
      K(e).error ? (F(), H("div", Gc, [
        T("span", null, tt(K(e).error), 1),
        T("button", {
          class: "stmp-retry-btn",
          "aria-label": "重试搜索",
          onClick: o
        }, "重试")
      ])) : _t("", !0),
      K(e).isSearching ? (F(), H("div", Yc, "Searching...")) : r.value && !K(e).results.length ? (F(), H("div", qc, " No results ")) : _t("", !0),
      K(e).results.length ? (F(), H("div", Xc, [
        (F(!0), H(at, null, xe(K(e).results, (u) => (F(), H("div", {
          key: u.provider + u.id,
          class: "stmp-result",
          onClick: (h) => l(u)
        }, [
          T("div", Zc, [
            T("span", Qc, tt(u.name), 1),
            u.artist ? (F(), H("span", ta, tt(u.artist), 1)) : _t("", !0)
          ]),
          T("span", ea, tt(u.provider), 1)
        ], 8, zc))), 128))
      ])) : _t("", !0)
    ]));
  }
}), na = /* @__PURE__ */ Te(sa, [["__scopeId", "data-v-305488cc"]]), ra = { class: "stmp-settings" }, ia = { class: "stmp-setting-group" }, oa = { class: "stmp-setting-row" }, la = ["checked", "onChange"], ca = ["onUpdate:modelValue"], aa = ["onUpdate:modelValue"], ua = ["onUpdate:modelValue"], fa = { class: "stmp-setting-group" }, da = { class: "stmp-setting-label" }, ha = ["value"], pa = { class: "stmp-setting-group" }, ga = ["value"], ma = ["value"], va = { class: "stmp-setting-group" }, ya = { class: "stmp-setting-row" }, _a = ["checked"], ba = { class: "stmp-setting-group" }, xa = { class: "stmp-rules" }, Sa = ["onClick"], wa = { class: "stmp-rule-add" }, Ca = /* @__PURE__ */ Ee({
  __name: "SettingsView",
  setup(t) {
    const e = vt(), s = /* @__PURE__ */ jt(""), n = [
      { value: "list", label: "List Loop" },
      { value: "random", label: "Random" },
      { value: "single", label: "Single Loop" }
    ], r = {
      netease: "NetEase",
      local: "Local Files",
      custom: "Custom API"
    };
    function i() {
      const I = s.value.trim();
      I && (e.addCustomCueRule(I), s.value = "");
    }
    function o(I) {
      e.removeCustomCueRule(I);
    }
    function l(I) {
      const b = I.target;
      e.setVolume(Number(b.value));
    }
    function c(I) {
      const b = I.target;
      e.setPlayMode(b.value);
    }
    function d(I) {
      const b = I.target;
      e.settings.autoPlayOnNewCue = b.checked, e.save();
    }
    const u = async () => {
      const I = e.storage;
      if (I) {
        await I.clearCache();
        const b = window.toastr;
        b?.success ? b.success("缓存已清理") : console.log("缓存已清理");
      }
    }, h = () => {
      const I = JSON.stringify(e.settings, null, 2), b = new Blob([I], { type: "application/json" }), M = URL.createObjectURL(b), O = document.createElement("a");
      O.href = M, O.download = "st-music-player-settings.json", O.click(), URL.revokeObjectURL(M);
    }, _ = () => {
      const I = document.createElement("input");
      I.type = "file", I.accept = ".json", I.onchange = async (b) => {
        const M = b.target.files?.[0];
        if (!M) return;
        const O = await M.text();
        try {
          const A = JSON.parse(O);
          Object.assign(e.settings, A), e.save();
          const C = window.toastr;
          C?.success ? C.success("设置已导入") : console.log("设置已导入");
        } catch (A) {
          console.error("Import failed", A);
          const C = window.toastr;
          C?.error && C.error("导入失败: JSON 格式错误");
        }
      }, I.click();
    };
    function x(I) {
      const b = e.settings.providers.find((M) => M.id === I);
      b && (b.enabled = !b.enabled, e.save());
    }
    return (I, b) => (F(), H("div", ra, [
      T("div", ia, [
        b[4] || (b[4] = T("div", { class: "stmp-setting-label" }, "Providers", -1)),
        (F(!0), H(at, null, xe(K(e).settings.providers, (M) => (F(), H("div", {
          key: M.id,
          class: "stmp-provider-config"
        }, [
          T("label", oa, [
            T("span", null, tt(r[M.id] || M.id), 1),
            T("input", {
              type: "checkbox",
              checked: M.enabled,
              onChange: (O) => x(M.id)
            }, null, 40, la)
          ]),
          M.id === "netease" ? $e((F(), H("input", {
            key: 0,
            class: "stmp-provider-input",
            "onUpdate:modelValue": (O) => M.config.baseURL = O,
            placeholder: "API baseURL",
            onChange: b[0] || (b[0] = (O) => K(e).save())
          }, null, 40, ca)), [
            [ke, M.config.baseURL]
          ]) : _t("", !0),
          M.id === "custom" ? (F(), H(at, { key: 1 }, [
            $e(T("input", {
              class: "stmp-provider-input",
              "onUpdate:modelValue": (O) => M.config.searchURL = O,
              placeholder: "Search URL",
              onChange: b[1] || (b[1] = (O) => K(e).save())
            }, null, 40, aa), [
              [ke, M.config.searchURL]
            ]),
            $e(T("input", {
              class: "stmp-provider-input",
              "onUpdate:modelValue": (O) => M.config.resolveURL = O,
              placeholder: "Resolve URL",
              onChange: b[2] || (b[2] = (O) => K(e).save())
            }, null, 40, ua), [
              [ke, M.config.resolveURL]
            ])
          ], 64)) : _t("", !0)
        ]))), 128))
      ]),
      T("div", fa, [
        T("div", da, "Default Volume: " + tt(K(e).settings.volume), 1),
        T("input", {
          type: "range",
          min: "0",
          max: "100",
          value: K(e).settings.volume,
          class: "stmp-range",
          onInput: l
        }, null, 40, ha)
      ]),
      T("div", pa, [
        b[5] || (b[5] = T("div", { class: "stmp-setting-label" }, "Default Play Mode", -1)),
        T("select", {
          class: "stmp-select",
          value: K(e).settings.playMode,
          onChange: c
        }, [
          (F(), H(at, null, xe(n, (M) => T("option", {
            key: M.value,
            value: M.value
          }, tt(M.label), 9, ma)), 64))
        ], 40, ga)
      ]),
      T("div", va, [
        T("div", ya, [
          b[6] || (b[6] = T("span", null, "Auto-play on new cue", -1)),
          T("input", {
            type: "checkbox",
            checked: K(e).settings.autoPlayOnNewCue,
            onChange: d
          }, null, 40, _a)
        ])
      ]),
      T("div", ba, [
        b[7] || (b[7] = T("div", { class: "stmp-setting-label" }, "Custom Cue Rules (Regex)", -1)),
        T("div", xa, [
          (F(!0), H(at, null, xe(K(e).settings.customCueRules, (M, O) => (F(), H("div", {
            key: O,
            class: "stmp-rule"
          }, [
            T("code", null, tt(M), 1),
            T("button", {
              class: "stmp-rule-del",
              onClick: (A) => o(O)
            }, "✕", 8, Sa)
          ]))), 128))
        ]),
        T("div", wa, [
          $e(T("input", {
            "onUpdate:modelValue": b[3] || (b[3] = (M) => s.value = M),
            class: "stmp-rule-input",
            placeholder: "Add regex rule...",
            onKeydown: Ai(i, ["enter"])
          }, null, 544), [
            [ke, s.value]
          ]),
          T("button", {
            class: "stmp-rule-add-btn",
            onClick: i
          }, "+")
        ])
      ]),
      T("div", { class: "stmp-setting-group" }, [
        b[8] || (b[8] = T("div", { class: "stmp-setting-label" }, "Data", -1)),
        T("div", { class: "stmp-data-btns" }, [
          T("button", {
            class: "stmp-data-btn",
            "aria-label": "清理缓存",
            onClick: u
          }, "清理缓存"),
          T("button", {
            class: "stmp-data-btn",
            "aria-label": "导出数据",
            onClick: h
          }, "导出数据"),
          T("button", {
            class: "stmp-data-btn",
            "aria-label": "导入数据",
            onClick: _
          }, "导入数据")
        ])
      ])
    ]));
  }
}), Ia = /* @__PURE__ */ Te(Ca, [["__scopeId", "data-v-1aedccc9"]]), Ea = { class: "stmp-panel" }, Ta = { class: "stmp-topbar" }, Ra = { class: "stmp-cover" }, Pa = ["src"], Ma = {
  key: 1,
  class: "stmp-cover-placeholder"
}, Aa = { class: "stmp-track-info" }, La = { class: "stmp-track-name" }, Oa = {
  key: 0,
  class: "stmp-track-artist"
}, $a = {
  key: 0,
  class: "stmp-lyric-current"
}, Da = {
  key: 1,
  class: "stmp-lyric-next"
}, Ua = {
  key: 2,
  class: "stmp-lyric-empty"
}, ka = { class: "stmp-progress" }, Fa = ["value"], Na = { class: "stmp-time" }, ja = { class: "stmp-controls" }, Ka = ["aria-label"], Va = ["value"], Ha = { class: "stmp-tabs" }, Ba = { class: "stmp-tab-content" }, Wa = /* @__PURE__ */ Ee({
  __name: "PlayerPanel",
  emits: ["collapse"],
  setup(t) {
    const e = he(), s = ss(), n = vt(), r = /* @__PURE__ */ jt("list"), i = /* @__PURE__ */ jt(!0), o = /* @__PURE__ */ jt(!1), l = se(() => e.currentTrack?.cover || ""), c = () => {
      o.value = !0;
    };
    Ve(
      () => e.currentTrack,
      () => {
        o.value = !1;
      }
    );
    const d = se(
      () => e.duration > 0 ? e.currentTime / e.duration * 100 : 0
    ), u = se(
      () => e.currentLyricIndex >= 0 ? e.lyrics[e.currentLyricIndex]?.text ?? null : null
    ), h = se(() => {
      const A = e.currentLyricIndex;
      return A < 0 ? null : e.lyrics[A + 1]?.text ?? null;
    });
    function _(A) {
      const C = Math.floor(A / 60), R = Math.floor(A % 60);
      return C + ":" + R.toString().padStart(2, "0");
    }
    function x(A) {
      const C = A.target;
      e.seek(Number(C.value) / 100 * e.duration);
    }
    const I = ["list", "random", "single"], b = {
      list: "🔁",
      random: "🔀",
      single: "🔂"
    };
    function M() {
      const A = n.settings.playMode, C = I.indexOf(A), R = I[(C + 1) % I.length];
      n.setPlayMode(R), s.playMode = R;
    }
    function O(A) {
      const C = A.target;
      e.setVolume(Number(C.value));
    }
    return (A, C) => (F(), H("div", Ea, [
      T("div", Ta, [
        T("div", Ra, [
          l.value && !o.value ? (F(), H("img", {
            key: 0,
            src: l.value,
            alt: "cover",
            onError: c
          }, null, 40, Pa)) : (F(), H("span", Ma, "♪"))
        ]),
        T("div", Aa, [
          T("div", La, tt(K(e).currentTrack?.name || "No Song"), 1),
          K(e).currentTrack?.artist ? (F(), H("div", Oa, tt(K(e).currentTrack.artist), 1)) : _t("", !0)
        ]),
        T("button", {
          class: "stmp-collapse-btn",
          "aria-label": "收起面板",
          onClick: C[0] || (C[0] = (R) => A.$emit("collapse"))
        }, "▾")
      ]),
      i.value ? (F(), H("div", {
        key: 0,
        class: "stmp-lyrics",
        onClick: C[1] || (C[1] = (R) => i.value = !1)
      }, [
        u.value ? (F(), H("div", $a, tt(u.value), 1)) : _t("", !0),
        h.value ? (F(), H("div", Da, tt(h.value), 1)) : _t("", !0),
        !u.value && !h.value ? (F(), H("div", Ua, "♪")) : _t("", !0)
      ])) : (F(), H("div", {
        key: 1,
        class: "stmp-lyrics-toggle",
        onClick: C[2] || (C[2] = (R) => i.value = !0)
      }, "♪ show lyrics")),
      T("div", ka, [
        T("input", {
          type: "range",
          min: "0",
          max: "100",
          step: "0.1",
          value: d.value,
          class: "stmp-range",
          onInput: x
        }, null, 40, Fa),
        T("div", Na, [
          T("span", null, tt(_(K(e).currentTime)), 1),
          T("span", null, tt(_(K(e).duration)), 1)
        ])
      ]),
      T("div", ja, [
        T("button", {
          class: "stmp-ctrl-btn",
          "aria-label": "上一首",
          onClick: C[3] || (C[3] = (R) => K(s).prev())
        }, "⏮"),
        T("button", {
          class: "stmp-ctrl-btn stmp-play-btn",
          "aria-label": K(e).isPlaying ? "暂停" : "播放",
          onClick: C[4] || (C[4] = (R) => K(e).togglePlay())
        }, tt(K(e).isPlaying ? "⏸" : "▶"), 9, Ka),
        T("button", {
          class: "stmp-ctrl-btn",
          "aria-label": "下一首",
          onClick: C[5] || (C[5] = (R) => K(s).next())
        }, "⏭"),
        T("button", {
          class: "stmp-ctrl-btn",
          "aria-label": "切换播放模式",
          onClick: M
        }, tt(b[K(n).settings.playMode]), 1),
        T("input", {
          type: "range",
          min: "0",
          max: "100",
          value: K(e).volume,
          class: "stmp-volume",
          onInput: O
        }, null, 40, Va)
      ]),
      T("div", Ha, [
        T("button", {
          class: ne(["stmp-tab", { active: r.value === "list" }]),
          onClick: C[6] || (C[6] = (R) => r.value = "list")
        }, " List ", 2),
        T("button", {
          class: ne(["stmp-tab", { active: r.value === "search" }]),
          onClick: C[7] || (C[7] = (R) => r.value = "search")
        }, " Search ", 2),
        T("button", {
          class: ne(["stmp-tab", { active: r.value === "settings" }]),
          onClick: C[8] || (C[8] = (R) => r.value = "settings")
        }, " Settings ", 2)
      ]),
      T("div", Ba, [
        r.value === "list" ? (F(), Se(Hc, { key: 0 })) : r.value === "search" ? (F(), Se(na, { key: 1 })) : r.value === "settings" ? (F(), Se(Ia, { key: 2 })) : _t("", !0)
      ])
    ]));
  }
}), Ja = /* @__PURE__ */ Te(Wa, [["__scopeId", "data-v-05a9daa9"]]), Ga = /* @__PURE__ */ Ee({
  __name: "App",
  setup(t) {
    const e = vt(), s = he(), n = /* @__PURE__ */ jt(!1), r = /* @__PURE__ */ jt(null), i = /* @__PURE__ */ jt(typeof window < "u" && window.innerWidth < 768), o = () => {
      i.value = window.innerWidth < 768;
    }, l = (C) => {
      C.key === "Escape" && (n.value = !1), C.key === " " && C.target === document.body && (C.preventDefault(), s.togglePlay());
    };
    let c = 0, d = 0, u = 0, h = 0, _ = !1, x = null, I = null;
    function b(C) {
      if (i.value || n.value || C.target.closest("button")) return;
      c = C.clientX, d = C.clientY;
      const R = e.settings.position;
      u = R?.x ?? r.value?.offsetLeft ?? 0, h = R?.y ?? r.value?.offsetTop ?? 0, _ = !1, x = M, I = O, document.addEventListener("pointermove", x), document.addEventListener("pointerup", I);
    }
    function M(C) {
      if (!r.value) return;
      const R = C.clientX - c, B = C.clientY - d;
      (Math.abs(R) > 5 || Math.abs(B) > 5) && (_ = !0);
      let dt = u + R, rt = h + B;
      const N = window.innerWidth - (r.value.offsetWidth || 60), V = window.innerHeight - (r.value.offsetHeight || 40);
      dt = Math.max(0, Math.min(dt, N)), rt = Math.max(0, Math.min(rt, V)), r.value.style.left = dt + "px", r.value.style.top = rt + "px", r.value.style.right = "auto", r.value.style.bottom = "auto";
    }
    function O() {
      if (x && document.removeEventListener("pointermove", x), I && document.removeEventListener("pointerup", I), x = null, I = null, !_) {
        A();
        return;
      }
      r.value && e.setPosition({
        x: r.value.offsetLeft,
        y: r.value.offsetTop
      });
    }
    function A() {
      n.value = !n.value;
    }
    return ni(() => {
      const C = e.settings.position;
      C && r.value && !i.value && (r.value.style.left = C.x + "px", r.value.style.top = C.y + "px", r.value.style.right = "auto", r.value.style.bottom = "auto"), window.addEventListener("resize", o), window.addEventListener("keydown", l);
    }), ri(() => {
      O(), window.removeEventListener("resize", o), window.removeEventListener("keydown", l);
    }), (C, R) => (F(), H("div", {
      ref_key: "widgetRef",
      ref: r,
      class: ne(["stmp-widget", {
        "stmp-expanded": n.value,
        "stmp-collapsed": !n.value,
        "stmp-mobile": i.value
      }]),
      onPointerdown: b
    }, [
      n.value ? (F(), Se(Ja, {
        key: 1,
        onCollapse: A
      })) : (F(), Se(Ac, {
        key: 0,
        onExpand: A
      }))
    ], 34));
  }
}), Ya = /* @__PURE__ */ Te(Ga, [["__scopeId", "data-v-3e08f2ab"]]);
class qa {
  constructor() {
    this.listeners = /* @__PURE__ */ new Map(), this.registered = [];
  }
  /**
   * Subscribe to an internal event.
   * @returns an unsubscribe function.
   */
  on(e, s) {
    let n = this.listeners.get(e);
    return n || (n = /* @__PURE__ */ new Set(), this.listeners.set(e, n)), n.add(s), () => {
      const r = this.listeners.get(e);
      r && (r.delete(s), r.size === 0 && this.listeners.delete(e));
    };
  }
  /** Start bridging: register ST event listeners. Safe to call once. */
  start() {
    if (this.registered.length > 0) return;
    const e = SillyTavern.getContext(), s = e.eventSource, n = e.event_types, r = (i, o, l) => {
      const c = (...d) => {
        const u = l(d[0]);
        this.emit(o, u);
      };
      s.on(i, c), this.registered.push({ event: i, handler: c });
    };
    r(n.CHAT_CHANGED, "chat-changed", (i) => ({
      chatId: typeof i == "string" ? i : void 0
    })), r(n.GENERATION_ENDED, "message-generated", (i) => ({
      messageId: fs(i)
    })), r(n.MESSAGE_UPDATED, "message-updated", (i) => ({
      messageId: fs(i)
    })), r(n.MESSAGE_DELETED, "message-deleted", (i) => ({
      messageId: fs(i)
    })), r(n.MESSAGE_SWIPED, "message-swiped", (i) => ({
      messageId: fs(i)
    }));
  }
  /** Stop bridging: remove all ST event listeners. */
  stop() {
    if (this.registered.length === 0) return;
    const s = SillyTavern.getContext().eventSource;
    for (const { event: n, handler: r } of this.registered)
      s.removeListener(n, r);
    this.registered = [];
  }
  /** Invoke all listeners for an internal event. */
  emit(e, s) {
    const n = this.listeners.get(e);
    if (n)
      for (const r of n)
        try {
          r(s);
        } catch (i) {
          console.error("[STEventBridge] listener error:", i);
        }
  }
}
function fs(t) {
  if (t == null) return;
  const e = typeof t == "number" ? t : parseInt(String(t), 10);
  return Number.isFinite(e) ? e : void 0;
}
function Xa() {
  return new qa();
}
const za = [
  /<bgm>当前bgm[:：](.+?) - (.+?)<\/bgm>/g,
  /<bgm>当前bgm[:：](.+?)<\/bgm>/g,
  /<bgm>(.+?) - (.+?)<\/bgm>/g,
  /<bgm>(.+?)<\/bgm>/g,
  /【BGM】(.+?)(?: - (.+?))?【\/BGM】/g,
  /\[music\](.+?)(?: - (.+?))?\[\/music\]/g
];
function mr(t, e) {
  const s = [], n = new RegExp(t.source, "g");
  let r;
  for (; (r = n.exec(e)) !== null; ) {
    r.index === n.lastIndex && n.lastIndex++;
    const i = r[1];
    if (i === void 0 || i === "") continue;
    const o = r[2], l = {
      song: i.trim(),
      artist: o !== void 0 && o !== "" ? o.trim() : void 0,
      raw: r[0]
    };
    s.push({ index: r.index, cue: l });
  }
  return s;
}
function vr(t, e = []) {
  const s = /* @__PURE__ */ new Map(), n = (r) => {
    s.has(r.index) || s.set(r.index, r);
  };
  for (const r of za)
    for (const i of mr(r, t)) n(i);
  for (const r of e)
    try {
      const i = new RegExp(r, "g");
      for (const o of mr(i, t)) n(o);
    } catch {
    }
  return [...s.values()].sort((r, i) => r.index - i.index).map((r) => r.cue);
}
class Za {
  constructor(e) {
    this.cursors = /* @__PURE__ */ new Map(), this.getChatMessage = e;
  }
  scanIncremental(e, s, n, r = []) {
    const i = [];
    for (let o = s; o <= n; o++) {
      const l = this.getChatMessage(o);
      if (l === void 0) continue;
      const c = vr(l, r);
      if (c.length === 0) continue;
      const d = c.at(-1);
      i.push({ messageId: o, cues: [d] });
    }
    return this.cursors.set(e, {
      chatId: e,
      lastScannedMessageId: n,
      updatedAt: Date.now()
    }), i;
  }
  scanMessage(e, s, n = []) {
    const r = this.getChatMessage(s);
    if (r === void 0)
      return { messageId: s, cue: null };
    const i = vr(r, n), o = i.length > 0 ? i.at(-1) : null;
    return { messageId: s, cue: o };
  }
  getCursor(e) {
    const s = this.cursors.get(e);
    return s ? s.lastScannedMessageId : -1;
  }
  setCursor(e, s) {
    this.cursors.set(e, {
      chatId: e,
      lastScannedMessageId: s,
      updatedAt: Date.now()
    });
  }
  reset(e) {
    this.cursors.delete(e);
  }
}
let we = null, te = null;
async function tu() {
  const t = document.createElement("div");
  t.id = "st-music-player-root", document.body.appendChild(t);
  const e = dc();
  we = ac(Ya), we.use(e), we.mount(t);
  const s = vt(), n = Sc();
  s.init(n);
  const r = he();
  r.init(), r.setVolume(s.settings.volume);
  const i = new Za((c) => SillyTavern.getContext().chat[c]?.mes), o = ss();
  o.init(i), o.playMode = s.settings.playMode, te = Xa(), te.on("chat-changed", () => {
    const c = SillyTavern.getContext(), d = c.chatId ?? String(Date.now());
    if (o.setChatId(d), o.getCursor() < 0 && c.chat.length > 0) {
      const u = i.scanIncremental(
        d,
        0,
        c.chat.length - 1,
        s.settings.customCueRules
      );
      o.handleNewCues(u), o.setCursor(c.chat.length - 1);
    }
  }), te.on("message-generated", (c) => {
    const d = SillyTavern.getContext(), u = o.chatId ?? d.chatId ?? "";
    if (!u || c.messageId === void 0) return;
    const h = o.getCursor() + 1, _ = c.messageId;
    if (_ < h) return;
    const x = i.scanIncremental(
      u,
      h,
      _,
      s.settings.customCueRules
    );
    o.handleNewCues(x), o.setCursor(_);
  }), te.on("message-updated", (c) => {
    c.messageId !== void 0 && o.handleMessageUpdate(c.messageId);
  }), te.on("message-deleted", (c) => {
    c.messageId !== void 0 && o.handleMessageDelete(c.messageId);
  }), te.on("message-swiped", (c) => {
    c.messageId !== void 0 && o.handleMessageUpdate(c.messageId);
  }), te.start();
  const l = SillyTavern.getContext();
  if (l.chatId && l.chat.length > 0 && (o.setChatId(l.chatId), o.getCursor() < 0)) {
    const c = i.scanIncremental(
      l.chatId,
      0,
      l.chat.length - 1,
      s.settings.customCueRules
    );
    o.handleNewCues(c), o.setCursor(l.chat.length - 1);
  }
  console.log("[ST-Music-Player] 播放器加载完成");
}
function eu() {
  te?.stop(), he().destroy(), we && (we.unmount(), we = null);
  const e = document.getElementById("st-music-player-root");
  e && e.remove();
}
export {
  eu as destroy,
  tu as init
};
