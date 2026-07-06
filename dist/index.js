/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Hn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const fe = {}, Ht = [], Xe = () => {
}, tr = () => !1, qs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ys = (e) => e.startsWith("onUpdate:"), ye = Object.assign, jn = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, To = Object.prototype.hasOwnProperty, re = (e, t) => To.call(e, t), K = Array.isArray, jt = (e) => xs(e) === "[object Map]", sr = (e) => xs(e) === "[object Set]", ci = (e) => xs(e) === "[object Date]", Y = (e) => typeof e == "function", he = (e) => typeof e == "string", Ne = (e) => typeof e == "symbol", oe = (e) => e !== null && typeof e == "object", nr = (e) => (oe(e) || Y(e)) && Y(e.then) && Y(e.catch), ir = Object.prototype.toString, xs = (e) => ir.call(e), Ao = (e) => xs(e).slice(8, -1), rr = (e) => xs(e) === "[object Object]", Xs = (e) => he(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ns = /* @__PURE__ */ Hn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Zs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Mo = /-\w/g, Ue = Zs(
  (e) => e.replace(Mo, (t) => t.slice(1).toUpperCase())
), Po = /\B([A-Z])/g, bt = Zs(
  (e) => e.replace(Po, "-$1").toLowerCase()
), or = Zs((e) => e.charAt(0).toUpperCase() + e.slice(1)), pn = Zs(
  (e) => e ? `on${or(e)}` : ""
), Ye = (e, t) => !Object.is(e, t), ks = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, lr = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, Bn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Ro = (e) => {
  const t = he(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ui;
const Qs = () => ui || (ui = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function en(e) {
  if (K(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], i = he(n) ? Oo(n) : en(n);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (he(e) || oe(e))
    return e;
}
const Lo = /;(?![^(]*\))/g, $o = /:([^]+)/, ko = /\/\*[^]*?\*\//g;
function Oo(e) {
  const t = {};
  return e.replace(ko, "").split(Lo).forEach((s) => {
    if (s) {
      const n = s.split($o);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function xe(e) {
  let t = "";
  if (he(e))
    t = e;
  else if (K(e))
    for (let s = 0; s < e.length; s++) {
      const n = xe(e[s]);
      n && (t += n + " ");
    }
  else if (oe(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const Do = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", No = /* @__PURE__ */ Hn(Do);
function ar(e) {
  return !!e || e === "";
}
function Fo(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = Kn(e[n], t[n]);
  return s;
}
function Kn(e, t) {
  if (e === t) return !0;
  let s = ci(e), n = ci(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = Ne(e), n = Ne(t), s || n)
    return e === t;
  if (s = K(e), n = K(t), s || n)
    return s && n ? Fo(e, t) : !1;
  if (s = oe(e), n = oe(t), s || n) {
    if (!s || !n)
      return !1;
    const i = Object.keys(e).length, r = Object.keys(t).length;
    if (i !== r)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), a = t.hasOwnProperty(o);
      if (l && !a || !l && a || !Kn(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const cr = (e) => !!(e && e.__v_isRef === !0), Q = (e) => he(e) ? e : e == null ? "" : K(e) || oe(e) && (e.toString === ir || !Y(e.toString)) ? cr(e) ? Q(e.value) : JSON.stringify(e, ur, 2) : String(e), ur = (e, t) => cr(t) ? ur(e, t.value) : jt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], r) => (s[gn(n, r) + " =>"] = i, s),
    {}
  )
} : sr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => gn(s))
} : Ne(t) ? gn(t) : oe(t) && !K(t) && !rr(t) ? String(t) : t, gn = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ne(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ve;
class fr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && ve && (ve.active ? (this.parent = ve, this.index = (ve.scopes || (ve.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].pause();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].resume();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const s = ve;
      try {
        return ve = this, t();
      } finally {
        ve = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ve, ve = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (ve === this)
        ve = this.prevScope;
      else {
        let t = ve;
        for (; t; ) {
          if (t.prevScope === this) {
            t.prevScope = this.prevScope;
            break;
          }
          t = t.prevScope;
        }
      }
      this.prevScope = void 0;
    }
  }
  stop(t) {
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
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function dr(e) {
  return new fr(e);
}
function hr() {
  return ve;
}
function Uo(e, t = !1) {
  ve && ve.cleanups.push(e);
}
let de;
const mn = /* @__PURE__ */ new WeakSet();
class pr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ve && (ve.active ? ve.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, mn.has(this) && (mn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || mr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, fi(this), vr(this);
    const t = de, s = Ve;
    de = this, Ve = !0;
    try {
      return this.fn();
    } finally {
      yr(this), de = t, Ve = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Jn(t);
      this.deps = this.depsTail = void 0, fi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? mn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    An(this) && this.run();
  }
  get dirty() {
    return An(this);
  }
}
let gr = 0, is, rs;
function mr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = rs, rs = e;
    return;
  }
  e.next = is, is = e;
}
function Wn() {
  gr++;
}
function zn() {
  if (--gr > 0)
    return;
  if (rs) {
    let t = rs;
    for (rs = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; is; ) {
    let t = is;
    for (is = void 0; t; ) {
      const s = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = s;
    }
  }
  if (e) throw e;
}
function vr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function yr(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === s && (s = i), Jn(n), Vo(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = s;
}
function An(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (br(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function br(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ps) || (e.globalVersion = ps, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !An(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = de, n = Ve;
  de = e, Ve = !0;
  try {
    vr(e);
    const i = e.fn(e._value);
    (t.version === 0 || Ye(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    de = s, Ve = n, yr(e), e.flags &= -3;
  }
}
function Jn(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let r = s.computed.deps; r; r = r.nextDep)
      Jn(r, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function Vo(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let Ve = !0;
const _r = [];
function Ze() {
  _r.push(Ve), Ve = !1;
}
function Qe() {
  const e = _r.pop();
  Ve = e === void 0 ? !0 : e;
}
function fi(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = de;
    de = void 0;
    try {
      t();
    } finally {
      de = s;
    }
  }
}
let ps = 0;
class Ho {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Gn {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!de || !Ve || de === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== de)
      s = this.activeLink = new Ho(de, this), de.deps ? (s.prevDep = de.depsTail, de.depsTail.nextDep = s, de.depsTail = s) : de.deps = de.depsTail = s, xr(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = de.depsTail, s.nextDep = void 0, de.depsTail.nextDep = s, de.depsTail = s, de.deps === s && (de.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, ps++, this.notify(t);
  }
  notify(t) {
    Wn();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      zn();
    }
  }
}
function xr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        xr(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const Ns = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ Symbol(
  ""
), Mn = /* @__PURE__ */ Symbol(
  ""
), gs = /* @__PURE__ */ Symbol(
  ""
);
function Se(e, t, s) {
  if (Ve && de) {
    let n = Ns.get(e);
    n || Ns.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(s);
    i || (n.set(s, i = new Gn()), i.map = n, i.key = s), i.track();
  }
}
function lt(e, t, s, n, i, r) {
  const o = Ns.get(e);
  if (!o) {
    ps++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (Wn(), t === "clear")
    o.forEach(l);
  else {
    const a = K(e), d = a && Xs(s);
    if (a && s === "length") {
      const c = Number(n);
      o.forEach((h, v) => {
        (v === "length" || v === gs || !Ne(v) && v >= c) && l(h);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), d && l(o.get(gs)), t) {
        case "add":
          a ? d && l(o.get("length")) : (l(o.get(Rt)), jt(e) && l(o.get(Mn)));
          break;
        case "delete":
          a || (l(o.get(Rt)), jt(e) && l(o.get(Mn)));
          break;
        case "set":
          jt(e) && l(o.get(Rt));
          break;
      }
  }
  zn();
}
function jo(e, t) {
  const s = Ns.get(e);
  return s && s.get(t);
}
function Ot(e) {
  const t = /* @__PURE__ */ se(e);
  return t === e ? t : (Se(t, "iterate", gs), /* @__PURE__ */ $e(e) ? t : t.map(He));
}
function tn(e) {
  return Se(e = /* @__PURE__ */ se(e), "iterate", gs), e;
}
function Ge(e, t) {
  return /* @__PURE__ */ ft(e) ? zt(/* @__PURE__ */ ut(e) ? He(t) : t) : He(t);
}
const Bo = {
  __proto__: null,
  [Symbol.iterator]() {
    return vn(this, Symbol.iterator, (e) => Ge(this, e));
  },
  concat(...e) {
    return Ot(this).concat(
      ...e.map((t) => K(t) ? Ot(t) : t)
    );
  },
  entries() {
    return vn(this, "entries", (e) => (e[1] = Ge(this, e[1]), e));
  },
  every(e, t) {
    return et(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return et(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => Ge(this, n)),
      arguments
    );
  },
  find(e, t) {
    return et(
      this,
      "find",
      e,
      t,
      (s) => Ge(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return et(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return et(
      this,
      "findLast",
      e,
      t,
      (s) => Ge(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return et(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return et(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return yn(this, "includes", e);
  },
  indexOf(...e) {
    return yn(this, "indexOf", e);
  },
  join(e) {
    return Ot(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return yn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return et(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Yt(this, "pop");
  },
  push(...e) {
    return Yt(this, "push", e);
  },
  reduce(e, ...t) {
    return di(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return di(this, "reduceRight", e, t);
  },
  shift() {
    return Yt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return et(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Yt(this, "splice", e);
  },
  toReversed() {
    return Ot(this).toReversed();
  },
  toSorted(e) {
    return Ot(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ot(this).toSpliced(...e);
  },
  unshift(...e) {
    return Yt(this, "unshift", e);
  },
  values() {
    return vn(this, "values", (e) => Ge(this, e));
  }
};
function vn(e, t, s) {
  const n = tn(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ $e(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = s(r.value)), r;
  }), i;
}
const Ko = Array.prototype;
function et(e, t, s, n, i, r) {
  const o = tn(e), l = o !== e && !/* @__PURE__ */ $e(e), a = o[t];
  if (a !== Ko[t]) {
    const h = a.apply(e, r);
    return l ? He(h) : h;
  }
  let d = s;
  o !== e && (l ? d = function(h, v) {
    return s.call(this, Ge(e, h), v, e);
  } : s.length > 2 && (d = function(h, v) {
    return s.call(this, h, v, e);
  }));
  const c = a.call(o, d, n);
  return l && i ? i(c) : c;
}
function di(e, t, s, n) {
  const i = tn(e), r = i !== e && !/* @__PURE__ */ $e(e);
  let o = s, l = !1;
  i !== e && (r ? (l = n.length === 0, o = function(d, c, h) {
    return l && (l = !1, d = Ge(e, d)), s.call(this, d, Ge(e, c), h, e);
  }) : s.length > 3 && (o = function(d, c, h) {
    return s.call(this, d, c, h, e);
  }));
  const a = i[t](o, ...n);
  return l ? Ge(e, a) : a;
}
function yn(e, t, s) {
  const n = /* @__PURE__ */ se(e);
  Se(n, "iterate", gs);
  const i = n[t](...s);
  return (i === -1 || i === !1) && /* @__PURE__ */ nn(s[0]) ? (s[0] = /* @__PURE__ */ se(s[0]), n[t](...s)) : i;
}
function Yt(e, t, s = []) {
  Ze(), Wn();
  const n = (/* @__PURE__ */ se(e))[t].apply(e, s);
  return zn(), Qe(), n;
}
const Wo = /* @__PURE__ */ Hn("__proto__,__v_isRef,__isVue"), wr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ne)
);
function zo(e) {
  Ne(e) || (e = String(e));
  const t = /* @__PURE__ */ se(this);
  return Se(t, "has", e), t.hasOwnProperty(e);
}
class Sr {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._isShallow = s;
  }
  get(t, s, n) {
    if (s === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, r = this._isShallow;
    if (s === "__v_isReactive")
      return !i;
    if (s === "__v_isReadonly")
      return i;
    if (s === "__v_isShallow")
      return r;
    if (s === "__v_raw")
      return n === (i ? r ? sl : Tr : r ? Er : Ir).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = K(t);
    if (!i) {
      let a;
      if (o && (a = Bo[s]))
        return a;
      if (s === "hasOwnProperty")
        return zo;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ pe(t) ? t : n
    );
    if ((Ne(s) ? wr.has(s) : Wo(s)) || (i || Se(t, "get", s), r))
      return l;
    if (/* @__PURE__ */ pe(l)) {
      const a = o && Xs(s) ? l : l.value;
      return i && oe(a) ? /* @__PURE__ */ Rn(a) : a;
    }
    return oe(l) ? i ? /* @__PURE__ */ Rn(l) : /* @__PURE__ */ sn(l) : l;
  }
}
class Cr extends Sr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, i) {
    let r = t[s];
    const o = K(t) && Xs(s);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ ft(r);
      if (!/* @__PURE__ */ $e(n) && !/* @__PURE__ */ ft(n) && (r = /* @__PURE__ */ se(r), n = /* @__PURE__ */ se(n)), !o && /* @__PURE__ */ pe(r) && !/* @__PURE__ */ pe(n))
        return d || (r.value = n), !0;
    }
    const l = o ? Number(s) < t.length : re(t, s), a = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ pe(t) ? t : i
    );
    return t === /* @__PURE__ */ se(i) && a && (l ? Ye(n, r) && lt(t, "set", s, n) : lt(t, "add", s, n)), a;
  }
  deleteProperty(t, s) {
    const n = re(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && lt(t, "delete", s, void 0), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Ne(s) || !wr.has(s)) && Se(t, "has", s), n;
  }
  ownKeys(t) {
    return Se(
      t,
      "iterate",
      K(t) ? "length" : Rt
    ), Reflect.ownKeys(t);
  }
}
class Jo extends Sr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return !0;
  }
  deleteProperty(t, s) {
    return !0;
  }
}
const Go = /* @__PURE__ */ new Cr(), qo = /* @__PURE__ */ new Jo(), Yo = /* @__PURE__ */ new Cr(!0);
const Pn = (e) => e, Ts = (e) => Reflect.getPrototypeOf(e);
function Xo(e, t, s) {
  return function(...n) {
    const i = this.__v_raw, r = /* @__PURE__ */ se(i), o = jt(r), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, d = i[e](...n), c = s ? Pn : t ? zt : He;
    return !t && Se(
      r,
      "iterate",
      a ? Mn : Rt
    ), ye(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: h, done: v } = d.next();
          return v ? { value: h, done: v } : {
            value: l ? [c(h[0]), c(h[1])] : c(h),
            done: v
          };
        }
      }
    );
  };
}
function As(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Zo(e, t) {
  const s = {
    get(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ se(r), l = /* @__PURE__ */ se(i);
      e || (Ye(i, l) && Se(o, "get", i), Se(o, "get", l));
      const { has: a } = Ts(o), d = t ? Pn : e ? zt : He;
      if (a.call(o, i))
        return d(r.get(i));
      if (a.call(o, l))
        return d(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Se(/* @__PURE__ */ se(i), "iterate", Rt), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ se(r), l = /* @__PURE__ */ se(i);
      return e || (Ye(i, l) && Se(o, "has", i), Se(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, a = /* @__PURE__ */ se(l), d = t ? Pn : e ? zt : He;
      return !e && Se(a, "iterate", Rt), l.forEach((c, h) => i.call(r, d(c), d(h), o));
    }
  };
  return ye(
    s,
    e ? {
      add: As("add"),
      set: As("set"),
      delete: As("delete"),
      clear: As("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ se(this), o = Ts(r), l = /* @__PURE__ */ se(i), a = !t && !/* @__PURE__ */ $e(i) && !/* @__PURE__ */ ft(i) ? l : i;
        return o.has.call(r, a) || Ye(i, a) && o.has.call(r, i) || Ye(l, a) && o.has.call(r, l) || (r.add(a), lt(r, "add", a, a)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ $e(r) && !/* @__PURE__ */ ft(r) && (r = /* @__PURE__ */ se(r));
        const o = /* @__PURE__ */ se(this), { has: l, get: a } = Ts(o);
        let d = l.call(o, i);
        d || (i = /* @__PURE__ */ se(i), d = l.call(o, i));
        const c = a.call(o, i);
        return o.set(i, r), d ? Ye(r, c) && lt(o, "set", i, r) : lt(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ se(this), { has: o, get: l } = Ts(r);
        let a = o.call(r, i);
        a || (i = /* @__PURE__ */ se(i), a = o.call(r, i)), l && l.call(r, i);
        const d = r.delete(i);
        return a && lt(r, "delete", i, void 0), d;
      },
      clear() {
        const i = /* @__PURE__ */ se(this), r = i.size !== 0, o = i.clear();
        return r && lt(
          i,
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
  ].forEach((i) => {
    s[i] = Xo(i, e, t);
  }), s;
}
function qn(e, t) {
  const s = Zo(e, t);
  return (n, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    re(s, i) && i in n ? s : n,
    i,
    r
  );
}
const Qo = {
  get: /* @__PURE__ */ qn(!1, !1)
}, el = {
  get: /* @__PURE__ */ qn(!1, !0)
}, tl = {
  get: /* @__PURE__ */ qn(!0, !1)
};
const Ir = /* @__PURE__ */ new WeakMap(), Er = /* @__PURE__ */ new WeakMap(), Tr = /* @__PURE__ */ new WeakMap(), sl = /* @__PURE__ */ new WeakMap();
function nl(e) {
  switch (e) {
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
function sn(e) {
  return /* @__PURE__ */ ft(e) ? e : Yn(
    e,
    !1,
    Go,
    Qo,
    Ir
  );
}
// @__NO_SIDE_EFFECTS__
function il(e) {
  return Yn(
    e,
    !1,
    Yo,
    el,
    Er
  );
}
// @__NO_SIDE_EFFECTS__
function Rn(e) {
  return Yn(
    e,
    !0,
    qo,
    tl,
    Tr
  );
}
function Yn(e, t, s, n, i) {
  if (!oe(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const o = nl(Ao(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? n : s
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function ut(e) {
  return /* @__PURE__ */ ft(e) ? /* @__PURE__ */ ut(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ft(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function $e(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function nn(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function se(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ se(t) : e;
}
function Xn(e) {
  return !re(e, "__v_skip") && Object.isExtensible(e) && lr(e, "__v_skip", !0), e;
}
const He = (e) => oe(e) ? /* @__PURE__ */ sn(e) : e, zt = (e) => oe(e) ? /* @__PURE__ */ Rn(e) : e;
// @__NO_SIDE_EFFECTS__
function pe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function we(e) {
  return rl(e, !1);
}
function rl(e, t) {
  return /* @__PURE__ */ pe(e) ? e : new ol(e, t);
}
class ol {
  constructor(t, s) {
    this.dep = new Gn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ se(t), this._value = s ? t : He(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ $e(t) || /* @__PURE__ */ ft(t);
    t = n ? t : /* @__PURE__ */ se(t), Ye(t, s) && (this._rawValue = t, this._value = n ? t : He(t), this.dep.trigger());
  }
}
function C(e) {
  return /* @__PURE__ */ pe(e) ? e.value : e;
}
const ll = {
  get: (e, t, s) => t === "__v_raw" ? e : C(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t];
    return /* @__PURE__ */ pe(i) && !/* @__PURE__ */ pe(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function Ar(e) {
  return /* @__PURE__ */ ut(e) ? e : new Proxy(e, ll);
}
// @__NO_SIDE_EFFECTS__
function al(e) {
  const t = K(e) ? new Array(e.length) : {};
  for (const s in e)
    t[s] = ul(e, s);
  return t;
}
class cl {
  constructor(t, s, n) {
    this._object = t, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = Ne(s) ? s : String(s), this._raw = /* @__PURE__ */ se(t);
    let i = !0, r = t;
    if (!K(t) || Ne(this._key) || !Xs(this._key))
      do
        i = !/* @__PURE__ */ nn(r) || /* @__PURE__ */ $e(r);
      while (i && (r = r.__v_raw));
    this._shallow = i;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = C(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ pe(this._raw[this._key])) {
      const s = this._object[this._key];
      if (/* @__PURE__ */ pe(s)) {
        s.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return jo(this._raw, this._key);
  }
}
function ul(e, t, s) {
  return new cl(e, t, s);
}
class fl {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Gn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ps - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    de !== this)
      return mr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return br(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function dl(e, t, s = !1) {
  let n, i;
  return Y(e) ? n = e : (n = e.get, i = e.set), new fl(n, i, s);
}
const Ms = {}, Fs = /* @__PURE__ */ new WeakMap();
let At;
function hl(e, t = !1, s = At) {
  if (s) {
    let n = Fs.get(s);
    n || Fs.set(s, n = []), n.push(e);
  }
}
function pl(e, t, s = fe) {
  const { immediate: n, deep: i, once: r, scheduler: o, augmentJob: l, call: a } = s, d = (k) => i ? k : /* @__PURE__ */ $e(k) || i === !1 || i === 0 ? at(k, 1) : at(k);
  let c, h, v, m, L = !1, T = !1;
  if (/* @__PURE__ */ pe(e) ? (h = () => e.value, L = /* @__PURE__ */ $e(e)) : /* @__PURE__ */ ut(e) ? (h = () => d(e), L = !0) : K(e) ? (T = !0, L = e.some((k) => /* @__PURE__ */ ut(k) || /* @__PURE__ */ $e(k)), h = () => e.map((k) => {
    if (/* @__PURE__ */ pe(k))
      return k.value;
    if (/* @__PURE__ */ ut(k))
      return d(k);
    if (Y(k))
      return a ? a(k, 2) : k();
  })) : Y(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (v) {
      Ze();
      try {
        v();
      } finally {
        Qe();
      }
    }
    const k = At;
    At = c;
    try {
      return a ? a(e, 3, [m]) : e(m);
    } finally {
      At = k;
    }
  } : h = Xe, t && i) {
    const k = h, J = i === !0 ? 1 / 0 : i;
    h = () => at(k(), J);
  }
  const F = hr(), O = () => {
    c.stop(), F && F.active && jn(F.effects, c);
  };
  if (r && t) {
    const k = t;
    t = (...J) => {
      const Z = k(...J);
      return O(), Z;
    };
  }
  let S = T ? new Array(e.length).fill(Ms) : Ms;
  const V = (k) => {
    if (!(!(c.flags & 1) || !c.dirty && !k))
      if (t) {
        const J = c.run();
        if (k || i || L || (T ? J.some((Z, le) => Ye(Z, S[le])) : Ye(J, S))) {
          v && v();
          const Z = At;
          At = c;
          try {
            const le = [
              J,
              // pass undefined as the old value when it's changed for the first time
              S === Ms ? void 0 : T && S[0] === Ms ? [] : S,
              m
            ];
            S = J, a ? a(t, 3, le) : (
              // @ts-expect-error
              t(...le)
            );
          } finally {
            At = Z;
          }
        }
      } else
        c.run();
  };
  return l && l(V), c = new pr(h), c.scheduler = o ? () => o(V, !1) : V, m = (k) => hl(k, !1, c), v = c.onStop = () => {
    const k = Fs.get(c);
    if (k) {
      if (a)
        a(k, 4);
      else
        for (const J of k) J();
      Fs.delete(c);
    }
  }, t ? n ? V(!0) : S = c.run() : o ? o(V.bind(null, !0), !0) : c.run(), O.pause = c.pause.bind(c), O.resume = c.resume.bind(c), O.stop = O, O;
}
function at(e, t = 1 / 0, s) {
  if (t <= 0 || !oe(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ pe(e))
    at(e.value, t, s);
  else if (K(e))
    for (let n = 0; n < e.length; n++)
      at(e[n], t, s);
  else if (sr(e) || jt(e))
    e.forEach((n) => {
      at(n, t, s);
    });
  else if (rr(e)) {
    for (const n in e)
      at(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && at(e[n], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ws(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    rn(i, t, s);
  }
}
function Fe(e, t, s, n) {
  if (Y(e)) {
    const i = ws(e, t, s, n);
    return i && nr(i) && i.catch((r) => {
      rn(r, t, s);
    }), i;
  }
  if (K(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(Fe(e[r], t, s, n));
    return i;
  }
}
function rn(e, t, s, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || fe;
  if (t) {
    let l = t.parent;
    const a = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; l; ) {
      const c = l.ec;
      if (c) {
        for (let h = 0; h < c.length; h++)
          if (c[h](e, a, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      Ze(), ws(r, null, 10, [
        e,
        a,
        d
      ]), Qe();
      return;
    }
  }
  gl(e, s, i, n, o);
}
function gl(e, t, s, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Ee = [];
let Je = -1;
const Bt = [];
let gt = null, Ft = 0;
const Mr = /* @__PURE__ */ Promise.resolve();
let Us = null;
function rt(e) {
  const t = Us || Mr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ml(e) {
  let t = Je + 1, s = Ee.length;
  for (; t < s; ) {
    const n = t + s >>> 1, i = Ee[n], r = ms(i);
    r < e || r === e && i.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function Zn(e) {
  if (!(e.flags & 1)) {
    const t = ms(e), s = Ee[Ee.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ms(s) ? Ee.push(e) : Ee.splice(ml(t), 0, e), e.flags |= 1, Pr();
  }
}
function Pr() {
  Us || (Us = Mr.then(Lr));
}
function vl(e) {
  K(e) ? Bt.push(...e) : gt && e.id === -1 ? gt.splice(Ft + 1, 0, e) : e.flags & 1 || (Bt.push(e), e.flags |= 1), Pr();
}
function hi(e, t, s = Je + 1) {
  for (; s < Ee.length; s++) {
    const n = Ee[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      Ee.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Rr(e) {
  if (Bt.length) {
    const t = [...new Set(Bt)].sort(
      (s, n) => ms(s) - ms(n)
    );
    if (Bt.length = 0, gt) {
      gt.push(...t);
      return;
    }
    for (gt = t, Ft = 0; Ft < gt.length; Ft++) {
      const s = gt[Ft];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    gt = null, Ft = 0;
  }
}
const ms = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Lr(e) {
  try {
    for (Je = 0; Je < Ee.length; Je++) {
      const t = Ee[Je];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ws(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Je < Ee.length; Je++) {
      const t = Ee[Je];
      t && (t.flags &= -2);
    }
    Je = -1, Ee.length = 0, Rr(), Us = null, (Ee.length || Bt.length) && Lr();
  }
}
let De = null, $r = null;
function Vs(e) {
  const t = De;
  return De = e, $r = e && e.type.__scopeId || null, t;
}
function kr(e, t = De, s) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Bs(-1);
    const r = Vs(t);
    let o;
    try {
      o = e(...i);
    } finally {
      Vs(r), n._d && Bs(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function st(e, t) {
  if (De === null)
    return e;
  const s = un(De), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, a = fe] = t[i];
    r && (Y(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && at(o), n.push({
      dir: r,
      instance: s,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function Ct(e, t, s, n) {
  const i = e.dirs, r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    r && (l.oldValue = r[o].value);
    let a = l.dir[n];
    a && (Ze(), Fe(a, s, 8, [
      e.el,
      l,
      e,
      t
    ]), Qe());
  }
}
function yl(e, t) {
  if (Ae) {
    let s = Ae.provides;
    const n = Ae.parent && Ae.parent.provides;
    n === s && (s = Ae.provides = Object.create(n)), s[e] = t;
  }
}
function os(e, t, s = !1) {
  const n = ni();
  if (n || Lt) {
    let i = Lt ? Lt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return s && Y(t) ? t.call(n && n.proxy) : t;
  }
}
function bl() {
  return !!(ni() || Lt);
}
const _l = /* @__PURE__ */ Symbol.for("v-scx"), xl = () => os(_l);
function mt(e, t, s) {
  return Or(e, t, s);
}
function Or(e, t, s = fe) {
  const { immediate: n, deep: i, flush: r, once: o } = s, l = ye({}, s), a = t && n || !t && r !== "post";
  let d;
  if (bs) {
    if (r === "sync") {
      const m = xl();
      d = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = Xe, m.resume = Xe, m.pause = Xe, m;
    }
  }
  const c = Ae;
  l.call = (m, L, T) => Fe(m, c, L, T);
  let h = !1;
  r === "post" ? l.scheduler = (m) => {
    Me(m, c && c.suspense);
  } : r !== "sync" && (h = !0, l.scheduler = (m, L) => {
    L ? m() : Zn(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), h && (m.flags |= 2, c && (m.id = c.uid, m.i = c));
  };
  const v = pl(e, t, l);
  return bs && (d ? d.push(v) : a && v()), v;
}
function wl(e, t, s) {
  const n = this.proxy, i = he(e) ? e.includes(".") ? Dr(n, e) : () => n[e] : e.bind(n, n);
  let r;
  Y(t) ? r = t : (r = t.handler, s = t);
  const o = Ss(this), l = Or(i, r.bind(n), s);
  return o(), l;
}
function Dr(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < s.length && n; i++)
      n = n[s[i]];
    return n;
  };
}
const Sl = /* @__PURE__ */ Symbol("_vte"), Nr = (e) => e.__isTeleport, Oe = /* @__PURE__ */ Symbol("_leaveCb"), Xt = /* @__PURE__ */ Symbol("_enterCb");
function Cl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Qn(() => {
    e.isMounted = !0;
  }), ei(() => {
    e.isUnmounting = !0;
  }), e;
}
const ke = [Function, Array], Fr = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: ke,
  onEnter: ke,
  onAfterEnter: ke,
  onEnterCancelled: ke,
  // leave
  onBeforeLeave: ke,
  onLeave: ke,
  onAfterLeave: ke,
  onLeaveCancelled: ke,
  // appear
  onBeforeAppear: ke,
  onAppear: ke,
  onAfterAppear: ke,
  onAppearCancelled: ke
}, Ur = (e) => {
  const t = e.subTree;
  return t.component ? Ur(t.component) : t;
}, Il = {
  name: "BaseTransition",
  props: Fr,
  setup(e, { slots: t }) {
    const s = ni(), n = Cl();
    return () => {
      const i = t.default && jr(t.default(), !0), r = i && i.length ? Vr(i) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        s.subTree ? Le() : void 0
      );
      if (!r)
        return;
      const o = /* @__PURE__ */ se(e), { mode: l } = o;
      if (n.isLeaving)
        return bn(r);
      const a = pi(r);
      if (!a)
        return bn(r);
      let d = Ln(
        a,
        o,
        n,
        s,
        // #11061, ensure enterHooks is fresh after clone
        (h) => d = h
      );
      a.type !== Te && vs(a, d);
      let c = s.subTree && pi(s.subTree);
      if (c && c.type !== Te && !Mt(c, a) && Ur(s).type !== Te) {
        let h = Ln(
          c,
          o,
          n,
          s
        );
        if (vs(c, h), l === "out-in" && a.type !== Te)
          return n.isLeaving = !0, h.afterLeave = () => {
            n.isLeaving = !1, s.job.flags & 8 || s.update(), delete h.afterLeave, c = void 0;
          }, bn(r);
        l === "in-out" && a.type !== Te ? h.delayLeave = (v, m, L) => {
          const T = Hr(
            n,
            c
          );
          T[String(c.key)] = c, v[Oe] = () => {
            m(), v[Oe] = void 0, delete d.delayedLeave, c = void 0;
          }, d.delayedLeave = () => {
            L(), delete d.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return r;
    };
  }
};
function Vr(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const s of e)
      if (s.type !== Te) {
        t = s;
        break;
      }
  }
  return t;
}
const El = Il;
function Hr(e, t) {
  const { leavingVNodes: s } = e;
  let n = s.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), s.set(t.type, n)), n;
}
function Ln(e, t, s, n, i) {
  const {
    appear: r,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: d,
    onAfterEnter: c,
    onEnterCancelled: h,
    onBeforeLeave: v,
    onLeave: m,
    onAfterLeave: L,
    onLeaveCancelled: T,
    onBeforeAppear: F,
    onAppear: O,
    onAfterAppear: S,
    onAppearCancelled: V
  } = t, k = String(e.key), J = Hr(s, e), Z = (P, A) => {
    P && Fe(
      P,
      n,
      9,
      A
    );
  }, le = (P, A) => {
    const B = A[1];
    Z(P, A), K(P) ? P.every((b) => b.length <= 1) && B() : P.length <= 1 && B();
  }, G = {
    mode: o,
    persisted: l,
    beforeEnter(P) {
      let A = a;
      if (!s.isMounted)
        if (r)
          A = F || a;
        else
          return;
      P[Oe] && P[Oe](
        !0
        /* cancelled */
      );
      const B = J[k];
      B && Mt(e, B) && B.el[Oe] && B.el[Oe](), Z(A, [P]);
    },
    enter(P) {
      if (J[k] === e) return;
      let A = d, B = c, b = h;
      if (!s.isMounted)
        if (r)
          A = O || d, B = S || c, b = V || h;
        else
          return;
      let R = !1;
      P[Xt] = (me) => {
        R || (R = !0, me ? Z(b, [P]) : Z(B, [P]), G.delayedLeave && G.delayedLeave(), P[Xt] = void 0);
      };
      const W = P[Xt].bind(null, !1);
      A ? le(A, [P, W]) : W();
    },
    leave(P, A) {
      const B = String(e.key);
      if (P[Xt] && P[Xt](
        !0
        /* cancelled */
      ), s.isUnmounting)
        return A();
      Z(v, [P]);
      let b = !1;
      P[Oe] = (W) => {
        b || (b = !0, A(), W ? Z(T, [P]) : Z(L, [P]), P[Oe] = void 0, J[B] === e && delete J[B]);
      };
      const R = P[Oe].bind(null, !1);
      J[B] = e, m ? le(m, [P, R]) : R();
    },
    clone(P) {
      const A = Ln(
        P,
        t,
        s,
        n,
        i
      );
      return i && i(A), A;
    }
  };
  return G;
}
function bn(e) {
  if (on(e))
    return e = vt(e), e.children = null, e;
}
function pi(e) {
  if (!on(e))
    return Nr(e.type) && e.children ? Vr(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: s } = e;
  if (s) {
    if (t & 16)
      return s[0];
    if (t & 32 && Y(s.default))
      return s.default();
  }
}
function vs(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, vs(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function jr(e, t = !1, s) {
  let n = [], i = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const l = s == null ? o.key : String(s) + String(o.key != null ? o.key : r);
    o.type === ee ? (o.patchFlag & 128 && i++, n = n.concat(
      jr(o.children, t, l)
    )) : (t || o.type !== Te) && n.push(l != null ? vt(o, { key: l }) : o);
  }
  if (i > 1)
    for (let r = 0; r < n.length; r++)
      n[r].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function _t(e, t) {
  return Y(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ye({ name: e.name }, t, { setup: e })
  ) : e;
}
function Br(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function gi(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const Hs = /* @__PURE__ */ new WeakMap();
function ls(e, t, s, n, i = !1) {
  if (K(e)) {
    e.forEach(
      (T, F) => ls(
        T,
        t && (K(t) ? t[F] : t),
        s,
        n,
        i
      )
    );
    return;
  }
  if (as(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && ls(e, t, s, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? un(n.component) : n.el, o = i ? null : r, { i: l, r: a } = e, d = t && t.r, c = l.refs === fe ? l.refs = {} : l.refs, h = l.setupState, v = /* @__PURE__ */ se(h), m = h === fe ? tr : (T) => gi(c, T) ? !1 : re(v, T), L = (T, F) => !(F && gi(c, F));
  if (d != null && d !== a) {
    if (mi(t), he(d))
      c[d] = null, m(d) && (h[d] = null);
    else if (/* @__PURE__ */ pe(d)) {
      const T = t;
      L(d, T.k) && (d.value = null), T.k && (c[T.k] = null);
    }
  }
  if (Y(a)) {
    Ze();
    try {
      ws(a, l, 12, [o, c]);
    } finally {
      Qe();
    }
  } else {
    const T = he(a), F = /* @__PURE__ */ pe(a);
    if (T || F) {
      const O = () => {
        if (e.f) {
          const S = T ? m(a) ? h[a] : c[a] : L() || !e.k ? a.value : c[e.k];
          if (i)
            K(S) && jn(S, r);
          else if (K(S))
            S.includes(r) || S.push(r);
          else if (T)
            c[a] = [r], m(a) && (h[a] = c[a]);
          else {
            const V = [r];
            L(a, e.k) && (a.value = V), e.k && (c[e.k] = V);
          }
        } else T ? (c[a] = o, m(a) && (h[a] = o)) : F && (L(a, e.k) && (a.value = o), e.k && (c[e.k] = o));
      };
      if (o) {
        const S = () => {
          O(), Hs.delete(e);
        };
        S.id = -1, Hs.set(e, S), Me(S, s);
      } else
        mi(e), O();
    }
  }
}
function mi(e) {
  const t = Hs.get(e);
  t && (t.flags |= 8, Hs.delete(e));
}
Qs().requestIdleCallback;
Qs().cancelIdleCallback;
const as = (e) => !!e.type.__asyncLoader, on = (e) => e.type.__isKeepAlive;
function Tl(e, t) {
  Kr(e, "a", t);
}
function Al(e, t) {
  Kr(e, "da", t);
}
function Kr(e, t, s = Ae) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = s;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (ln(t, n, s), s) {
    let i = s.parent;
    for (; i && i.parent; )
      on(i.parent.vnode) && Ml(n, t, s, i), i = i.parent;
  }
}
function Ml(e, t, s, n) {
  const i = ln(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Wr(() => {
    jn(n[t], i);
  }, s);
}
function ln(e, t, s = Ae, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []), r = t.__weh || (t.__weh = (...o) => {
      Ze();
      const l = Ss(s), a = Fe(t, s, e, o);
      return l(), Qe(), a;
    });
    return n ? i.unshift(r) : i.push(r), r;
  }
}
const dt = (e) => (t, s = Ae) => {
  (!bs || e === "sp") && ln(e, (...n) => t(...n), s);
}, Pl = dt("bm"), Qn = dt("m"), Rl = dt(
  "bu"
), Ll = dt("u"), ei = dt(
  "bum"
), Wr = dt("um"), $l = dt(
  "sp"
), kl = dt("rtg"), Ol = dt("rtc");
function Dl(e, t = Ae) {
  ln("ec", e, t);
}
const Nl = /* @__PURE__ */ Symbol.for("v-ndc");
function ct(e, t, s, n) {
  let i;
  const r = s, o = K(e);
  if (o || he(e)) {
    const l = o && /* @__PURE__ */ ut(e);
    let a = !1, d = !1;
    l && (a = !/* @__PURE__ */ $e(e), d = /* @__PURE__ */ ft(e), e = tn(e)), i = new Array(e.length);
    for (let c = 0, h = e.length; c < h; c++)
      i[c] = t(
        a ? d ? zt(He(e[c])) : He(e[c]) : e[c],
        c,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, r);
  } else if (oe(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, a) => t(l, a, void 0, r)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let a = 0, d = l.length; a < d; a++) {
        const c = l[a];
        i[a] = t(e[c], c, a, r);
      }
    }
  else
    i = [];
  return i;
}
const $n = (e) => e ? fo(e) ? un(e) : $n(e.parent) : null, cs = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ye(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => $n(e.parent),
    $root: (e) => $n(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Jr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Zn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = rt.bind(e.proxy)),
    $watch: (e) => wl.bind(e)
  })
), _n = (e, t) => e !== fe && !e.__isScriptSetup && re(e, t), Fl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: i, props: r, accessCache: o, type: l, appContext: a } = e;
    if (t[0] !== "$") {
      const v = o[t];
      if (v !== void 0)
        switch (v) {
          case 1:
            return n[t];
          case 2:
            return i[t];
          case 4:
            return s[t];
          case 3:
            return r[t];
        }
      else {
        if (_n(n, t))
          return o[t] = 1, n[t];
        if (i !== fe && re(i, t))
          return o[t] = 2, i[t];
        if (re(r, t))
          return o[t] = 3, r[t];
        if (s !== fe && re(s, t))
          return o[t] = 4, s[t];
        kn && (o[t] = 0);
      }
    }
    const d = cs[t];
    let c, h;
    if (d)
      return t === "$attrs" && Se(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (c = l.__cssModules) && (c = c[t])
    )
      return c;
    if (s !== fe && re(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      h = a.config.globalProperties, re(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: i, ctx: r } = e;
    return _n(i, t) ? (i[t] = s, !0) : n !== fe && re(n, t) ? (n[t] = s, !0) : re(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: i, props: r, type: o }
  }, l) {
    let a;
    return !!(s[l] || e !== fe && l[0] !== "$" && re(e, l) || _n(t, l) || re(r, l) || re(n, l) || re(cs, l) || re(i.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : re(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function vi(e) {
  return K(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let kn = !0;
function Ul(e) {
  const t = Jr(e), s = e.proxy, n = e.ctx;
  kn = !1, t.beforeCreate && yi(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: o,
    watch: l,
    provide: a,
    inject: d,
    // lifecycle
    created: c,
    beforeMount: h,
    mounted: v,
    beforeUpdate: m,
    updated: L,
    activated: T,
    deactivated: F,
    beforeDestroy: O,
    beforeUnmount: S,
    destroyed: V,
    unmounted: k,
    render: J,
    renderTracked: Z,
    renderTriggered: le,
    errorCaptured: G,
    serverPrefetch: P,
    // public API
    expose: A,
    inheritAttrs: B,
    // assets
    components: b,
    directives: R,
    filters: W
  } = t;
  if (d && Vl(d, n, null), o)
    for (const X in o) {
      const ae = o[X];
      Y(ae) && (n[X] = ae.bind(s));
    }
  if (i) {
    const X = i.call(s, s);
    oe(X) && (e.data = /* @__PURE__ */ sn(X));
  }
  if (kn = !0, r)
    for (const X in r) {
      const ae = r[X], wt = Y(ae) ? ae.bind(s, s) : Y(ae.get) ? ae.get.bind(s, s) : Xe, Is = !Y(ae) && Y(ae.set) ? ae.set.bind(s) : Xe, St = yt({
        get: wt,
        set: Is
      });
      Object.defineProperty(n, X, {
        enumerable: !0,
        configurable: !0,
        get: () => St.value,
        set: (je) => St.value = je
      });
    }
  if (l)
    for (const X in l)
      zr(l[X], n, s, X);
  if (a) {
    const X = Y(a) ? a.call(s) : a;
    Reflect.ownKeys(X).forEach((ae) => {
      yl(ae, X[ae]);
    });
  }
  c && yi(c, e, "c");
  function ie(X, ae) {
    K(ae) ? ae.forEach((wt) => X(wt.bind(s))) : ae && X(ae.bind(s));
  }
  if (ie(Pl, h), ie(Qn, v), ie(Rl, m), ie(Ll, L), ie(Tl, T), ie(Al, F), ie(Dl, G), ie(Ol, Z), ie(kl, le), ie(ei, S), ie(Wr, k), ie($l, P), K(A))
    if (A.length) {
      const X = e.exposed || (e.exposed = {});
      A.forEach((ae) => {
        Object.defineProperty(X, ae, {
          get: () => s[ae],
          set: (wt) => s[ae] = wt,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  J && e.render === Xe && (e.render = J), B != null && (e.inheritAttrs = B), b && (e.components = b), R && (e.directives = R), P && Br(e);
}
function Vl(e, t, s = Xe) {
  K(e) && (e = On(e));
  for (const n in e) {
    const i = e[n];
    let r;
    oe(i) ? "default" in i ? r = os(
      i.from || n,
      i.default,
      !0
    ) : r = os(i.from || n) : r = os(i), /* @__PURE__ */ pe(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[n] = r;
  }
}
function yi(e, t, s) {
  Fe(
    K(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function zr(e, t, s, n) {
  let i = n.includes(".") ? Dr(s, n) : () => s[n];
  if (he(e)) {
    const r = t[e];
    Y(r) && mt(i, r);
  } else if (Y(e))
    mt(i, e.bind(s));
  else if (oe(e))
    if (K(e))
      e.forEach((r) => zr(r, t, s, n));
    else {
      const r = Y(e.handler) ? e.handler.bind(s) : t[e.handler];
      Y(r) && mt(i, r, e);
    }
}
function Jr(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !i.length && !s && !n ? a = t : (a = {}, i.length && i.forEach(
    (d) => js(a, d, o, !0)
  ), js(a, t, o)), oe(t) && r.set(t, a), a;
}
function js(e, t, s, n = !1) {
  const { mixins: i, extends: r } = t;
  r && js(e, r, s, !0), i && i.forEach(
    (o) => js(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const l = Hl[o] || s && s[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Hl = {
  data: bi,
  props: _i,
  emits: _i,
  // objects
  methods: es,
  computed: es,
  // lifecycle
  beforeCreate: Ce,
  created: Ce,
  beforeMount: Ce,
  mounted: Ce,
  beforeUpdate: Ce,
  updated: Ce,
  beforeDestroy: Ce,
  beforeUnmount: Ce,
  destroyed: Ce,
  unmounted: Ce,
  activated: Ce,
  deactivated: Ce,
  errorCaptured: Ce,
  serverPrefetch: Ce,
  // assets
  components: es,
  directives: es,
  // watch
  watch: Bl,
  // provide / inject
  provide: bi,
  inject: jl
};
function bi(e, t) {
  return t ? e ? function() {
    return ye(
      Y(e) ? e.call(this, this) : e,
      Y(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function jl(e, t) {
  return es(On(e), On(t));
}
function On(e) {
  if (K(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function Ce(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function es(e, t) {
  return e ? ye(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function _i(e, t) {
  return e ? K(e) && K(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ye(
    /* @__PURE__ */ Object.create(null),
    vi(e),
    vi(t ?? {})
  ) : t;
}
function Bl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = ye(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = Ce(e[n], t[n]);
  return s;
}
function Gr() {
  return {
    app: null,
    config: {
      isNativeTag: tr,
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
let Kl = 0;
function Wl(e, t) {
  return function(n, i = null) {
    Y(n) || (n = ye({}, n)), i != null && !oe(i) && (i = null);
    const r = Gr(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const d = r.app = {
      _uid: Kl++,
      _component: n,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: Ca,
      get config() {
        return r.config;
      },
      set config(c) {
      },
      use(c, ...h) {
        return o.has(c) || (c && Y(c.install) ? (o.add(c), c.install(d, ...h)) : Y(c) && (o.add(c), c(d, ...h))), d;
      },
      mixin(c) {
        return r.mixins.includes(c) || r.mixins.push(c), d;
      },
      component(c, h) {
        return h ? (r.components[c] = h, d) : r.components[c];
      },
      directive(c, h) {
        return h ? (r.directives[c] = h, d) : r.directives[c];
      },
      mount(c, h, v) {
        if (!a) {
          const m = d._ceVNode || ne(n, i);
          return m.appContext = r, v === !0 ? v = "svg" : v === !1 && (v = void 0), e(m, c, v), a = !0, d._container = c, c.__vue_app__ = d, un(m.component);
        }
      },
      onUnmount(c) {
        l.push(c);
      },
      unmount() {
        a && (Fe(
          l,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(c, h) {
        return r.provides[c] = h, d;
      },
      runWithContext(c) {
        const h = Lt;
        Lt = d;
        try {
          return c();
        } finally {
          Lt = h;
        }
      }
    };
    return d;
  };
}
let Lt = null;
const zl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ue(t)}Modifiers`] || e[`${bt(t)}Modifiers`];
function Jl(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || fe;
  let i = s;
  const r = t.startsWith("update:"), o = r && zl(n, t.slice(7));
  o && (o.trim && (i = s.map((c) => he(c) ? c.trim() : c)), o.number && (i = s.map(Bn)));
  let l, a = n[l = pn(t)] || // also try camelCase event handler (#2249)
  n[l = pn(Ue(t))];
  !a && r && (a = n[l = pn(bt(t))]), a && Fe(
    a,
    e,
    6,
    i
  );
  const d = n[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Fe(
      d,
      e,
      6,
      i
    );
  }
}
const Gl = /* @__PURE__ */ new WeakMap();
function qr(e, t, s = !1) {
  const n = s ? Gl : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {}, l = !1;
  if (!Y(e)) {
    const a = (d) => {
      const c = qr(d, t, !0);
      c && (l = !0, ye(o, c));
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (oe(e) && n.set(e, null), null) : (K(r) ? r.forEach((a) => o[a] = null) : ye(o, r), oe(e) && n.set(e, o), o);
}
function an(e, t) {
  return !e || !qs(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), re(e, t[0].toLowerCase() + t.slice(1)) || re(e, bt(t)) || re(e, t));
}
function xi(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: i,
    propsOptions: [r],
    slots: o,
    attrs: l,
    emit: a,
    render: d,
    renderCache: c,
    props: h,
    data: v,
    setupState: m,
    ctx: L,
    inheritAttrs: T
  } = e, F = Vs(e);
  let O, S;
  try {
    if (s.shapeFlag & 4) {
      const k = i || n, J = k;
      O = qe(
        d.call(
          J,
          k,
          c,
          h,
          m,
          v,
          L
        )
      ), S = l;
    } else {
      const k = t;
      O = qe(
        k.length > 1 ? k(
          h,
          { attrs: l, slots: o, emit: a }
        ) : k(
          h,
          null
        )
      ), S = t.props ? l : ql(l);
    }
  } catch (k) {
    us.length = 0, rn(k, e, 1), O = ne(Te);
  }
  let V = O;
  if (S && T !== !1) {
    const k = Object.keys(S), { shapeFlag: J } = V;
    k.length && J & 7 && (r && k.some(Ys) && (S = Yl(
      S,
      r
    )), V = vt(V, S, !1, !0));
  }
  return s.dirs && (V = vt(V, null, !1, !0), V.dirs = V.dirs ? V.dirs.concat(s.dirs) : s.dirs), s.transition && vs(V, s.transition), O = V, Vs(F), O;
}
const ql = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || qs(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, Yl = (e, t) => {
  const s = {};
  for (const n in e)
    (!Ys(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function Xl(e, t, s) {
  const { props: n, children: i, component: r } = e, { props: o, children: l, patchFlag: a } = t, d = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return n ? wi(n, o, d) : !!o;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        const v = c[h];
        if (Yr(o, n, v) && !an(d, v))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? wi(n, o, d) : !0 : !!o;
  return !1;
}
function wi(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const r = n[i];
    if (Yr(t, e, r) && !an(s, r))
      return !0;
  }
  return !1;
}
function Yr(e, t, s) {
  const n = e[s], i = t[s];
  return s === "style" && oe(n) && oe(i) ? !Kn(n, i) : n !== i;
}
function Zl({ vnode: e, parent: t, suspense: s }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  s && s.activeBranch === e && (s.vnode.el = n);
}
const Xr = {}, Zr = () => Object.create(Xr), Qr = (e) => Object.getPrototypeOf(e) === Xr;
function Ql(e, t, s, n = !1) {
  const i = {}, r = Zr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), eo(e, t, i, r);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  s ? e.props = n ? i : /* @__PURE__ */ il(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function ea(e, t, s, n) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ se(i), [a] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const c = e.vnode.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        let v = c[h];
        if (an(e.emitsOptions, v))
          continue;
        const m = t[v];
        if (a)
          if (re(r, v))
            m !== r[v] && (r[v] = m, d = !0);
          else {
            const L = Ue(v);
            i[L] = Dn(
              a,
              l,
              L,
              m,
              e,
              !1
            );
          }
        else
          m !== r[v] && (r[v] = m, d = !0);
      }
    }
  } else {
    eo(e, t, i, r) && (d = !0);
    let c;
    for (const h in l)
      (!t || // for camelCase
      !re(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = bt(h)) === h || !re(t, c))) && (a ? s && // for camelCase
      (s[h] !== void 0 || // for kebab-case
      s[c] !== void 0) && (i[h] = Dn(
        a,
        l,
        h,
        void 0,
        e,
        !0
      )) : delete i[h]);
    if (r !== l)
      for (const h in r)
        (!t || !re(t, h)) && (delete r[h], d = !0);
  }
  d && lt(e.attrs, "set", "");
}
function eo(e, t, s, n) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (ns(a))
        continue;
      const d = t[a];
      let c;
      i && re(i, c = Ue(a)) ? !r || !r.includes(c) ? s[c] = d : (l || (l = {}))[c] = d : an(e.emitsOptions, a) || (!(a in n) || d !== n[a]) && (n[a] = d, o = !0);
    }
  if (r) {
    const a = /* @__PURE__ */ se(s), d = l || fe;
    for (let c = 0; c < r.length; c++) {
      const h = r[c];
      s[h] = Dn(
        i,
        a,
        h,
        d[h],
        e,
        !re(d, h)
      );
    }
  }
  return o;
}
function Dn(e, t, s, n, i, r) {
  const o = e[s];
  if (o != null) {
    const l = re(o, "default");
    if (l && n === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && Y(a)) {
        const { propsDefaults: d } = i;
        if (s in d)
          n = d[s];
        else {
          const c = Ss(i);
          n = d[s] = a.call(
            null,
            t
          ), c();
        }
      } else
        n = a;
      i.ce && i.ce._setProp(s, n);
    }
    o[
      0
      /* shouldCast */
    ] && (r && !l ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === bt(s)) && (n = !0));
  }
  return n;
}
const ta = /* @__PURE__ */ new WeakMap();
function to(e, t, s = !1) {
  const n = s ? ta : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, l = [];
  let a = !1;
  if (!Y(e)) {
    const c = (h) => {
      a = !0;
      const [v, m] = to(h, t, !0);
      ye(o, v), m && l.push(...m);
    };
    !s && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!r && !a)
    return oe(e) && n.set(e, Ht), Ht;
  if (K(r))
    for (let c = 0; c < r.length; c++) {
      const h = Ue(r[c]);
      Si(h) && (o[h] = fe);
    }
  else if (r)
    for (const c in r) {
      const h = Ue(c);
      if (Si(h)) {
        const v = r[c], m = o[h] = K(v) || Y(v) ? { type: v } : ye({}, v), L = m.type;
        let T = !1, F = !0;
        if (K(L))
          for (let O = 0; O < L.length; ++O) {
            const S = L[O], V = Y(S) && S.name;
            if (V === "Boolean") {
              T = !0;
              break;
            } else V === "String" && (F = !1);
          }
        else
          T = Y(L) && L.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = T, m[
          1
          /* shouldCastTrue */
        ] = F, (T || re(m, "default")) && l.push(h);
      }
    }
  const d = [o, l];
  return oe(e) && n.set(e, d), d;
}
function Si(e) {
  return e[0] !== "$" && !ns(e);
}
const ti = (e) => e === "_" || e === "_ctx" || e === "$stable", si = (e) => K(e) ? e.map(qe) : [qe(e)], sa = (e, t, s) => {
  if (t._n)
    return t;
  const n = kr((...i) => si(t(...i)), s);
  return n._c = !1, n;
}, so = (e, t, s) => {
  const n = e._ctx;
  for (const i in e) {
    if (ti(i)) continue;
    const r = e[i];
    if (Y(r))
      t[i] = sa(i, r, n);
    else if (r != null) {
      const o = si(r);
      t[i] = () => o;
    }
  }
}, no = (e, t) => {
  const s = si(t);
  e.slots.default = () => s;
}, io = (e, t, s) => {
  for (const n in t)
    (s || !ti(n)) && (e[n] = t[n]);
}, na = (e, t, s) => {
  const n = e.slots = Zr();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (io(n, t, s), s && lr(n, "_", i, !0)) : so(t, n);
  } else t && no(e, t);
}, ia = (e, t, s) => {
  const { vnode: n, slots: i } = e;
  let r = !0, o = fe;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? r = !1 : io(i, t, s) : (r = !t.$stable, so(t, i)), o = t;
  } else t && (no(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !ti(l) && o[l] == null && delete i[l];
}, Me = ca;
function ra(e) {
  return oa(e);
}
function oa(e, t) {
  const s = Qs();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: r,
    createElement: o,
    createText: l,
    createComment: a,
    setText: d,
    setElementText: c,
    parentNode: h,
    nextSibling: v,
    setScopeId: m = Xe,
    insertStaticContent: L
  } = e, T = (u, f, g, w = null, x = null, y = null, M = void 0, E = null, I = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !Mt(u, f) && (w = Es(u), je(u, x, y, !0), u = null), f.patchFlag === -2 && (I = !1, f.dynamicChildren = null);
    const { type: _, ref: z, shapeFlag: D } = f;
    switch (_) {
      case cn:
        F(u, f, g, w);
        break;
      case Te:
        O(u, f, g, w);
        break;
      case Os:
        u == null && S(f, g, w, M);
        break;
      case ee:
        b(
          u,
          f,
          g,
          w,
          x,
          y,
          M,
          E,
          I
        );
        break;
      default:
        D & 1 ? J(
          u,
          f,
          g,
          w,
          x,
          y,
          M,
          E,
          I
        ) : D & 6 ? R(
          u,
          f,
          g,
          w,
          x,
          y,
          M,
          E,
          I
        ) : (D & 64 || D & 128) && _.process(
          u,
          f,
          g,
          w,
          x,
          y,
          M,
          E,
          I,
          Gt
        );
    }
    z != null && x ? ls(z, u && u.ref, y, f || u, !f) : z == null && u && u.ref != null && ls(u.ref, null, y, u, !0);
  }, F = (u, f, g, w) => {
    if (u == null)
      n(
        f.el = l(f.children),
        g,
        w
      );
    else {
      const x = f.el = u.el;
      f.children !== u.children && d(x, f.children);
    }
  }, O = (u, f, g, w) => {
    u == null ? n(
      f.el = a(f.children || ""),
      g,
      w
    ) : f.el = u.el;
  }, S = (u, f, g, w) => {
    [u.el, u.anchor] = L(
      u.children,
      f,
      g,
      w,
      u.el,
      u.anchor
    );
  }, V = ({ el: u, anchor: f }, g, w) => {
    let x;
    for (; u && u !== f; )
      x = v(u), n(u, g, w), u = x;
    n(f, g, w);
  }, k = ({ el: u, anchor: f }) => {
    let g;
    for (; u && u !== f; )
      g = v(u), i(u), u = g;
    i(f);
  }, J = (u, f, g, w, x, y, M, E, I) => {
    if (f.type === "svg" ? M = "svg" : f.type === "math" && (M = "mathml"), u == null)
      Z(
        f,
        g,
        w,
        x,
        y,
        M,
        E,
        I
      );
    else {
      const _ = u.el && u.el._isVueCE ? u.el : null;
      try {
        _ && _._beginPatch(), P(
          u,
          f,
          x,
          y,
          M,
          E,
          I
        );
      } finally {
        _ && _._endPatch();
      }
    }
  }, Z = (u, f, g, w, x, y, M, E) => {
    let I, _;
    const { props: z, shapeFlag: D, transition: j, dirs: q } = u;
    if (I = u.el = o(
      u.type,
      y,
      z && z.is,
      z
    ), D & 8 ? c(I, u.children) : D & 16 && G(
      u.children,
      I,
      null,
      w,
      x,
      xn(u, y),
      M,
      E
    ), q && Ct(u, null, w, "created"), le(I, u, u.scopeId, M, w), z) {
      for (const ue in z)
        ue !== "value" && !ns(ue) && r(I, ue, null, z[ue], y, w);
      "value" in z && r(I, "value", null, z.value, y), (_ = z.onVnodeBeforeMount) && ze(_, w, u);
    }
    q && Ct(u, null, w, "beforeMount");
    const te = la(x, j);
    te && j.beforeEnter(I), n(I, f, g), ((_ = z && z.onVnodeMounted) || te || q) && Me(() => {
      try {
        _ && ze(_, w, u), te && j.enter(I), q && Ct(u, null, w, "mounted");
      } finally {
      }
    }, x);
  }, le = (u, f, g, w, x) => {
    if (g && m(u, g), w)
      for (let y = 0; y < w.length; y++)
        m(u, w[y]);
    if (x) {
      let y = x.subTree;
      if (f === y || ao(y.type) && (y.ssContent === f || y.ssFallback === f)) {
        const M = x.vnode;
        le(
          u,
          M,
          M.scopeId,
          M.slotScopeIds,
          x.parent
        );
      }
    }
  }, G = (u, f, g, w, x, y, M, E, I = 0) => {
    for (let _ = I; _ < u.length; _++) {
      const z = u[_] = E ? ot(u[_]) : qe(u[_]);
      T(
        null,
        z,
        f,
        g,
        w,
        x,
        y,
        M,
        E
      );
    }
  }, P = (u, f, g, w, x, y, M) => {
    const E = f.el = u.el;
    let { patchFlag: I, dynamicChildren: _, dirs: z } = f;
    I |= u.patchFlag & 16;
    const D = u.props || fe, j = f.props || fe;
    let q;
    if (g && It(g, !1), (q = j.onVnodeBeforeUpdate) && ze(q, g, f, u), z && Ct(f, u, g, "beforeUpdate"), g && It(g, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    _ && (!u.dynamicChildren || u.dynamicChildren.length !== _.length) && (I = 0, M = !1, _ = null), (D.innerHTML && j.innerHTML == null || D.textContent && j.textContent == null) && c(E, ""), _ ? A(
      u.dynamicChildren,
      _,
      E,
      g,
      w,
      xn(f, x),
      y
    ) : M || ae(
      u,
      f,
      E,
      null,
      g,
      w,
      xn(f, x),
      y,
      !1
    ), I > 0) {
      if (I & 16)
        B(E, D, j, g, x);
      else if (I & 2 && D.class !== j.class && r(E, "class", null, j.class, x), I & 4 && r(E, "style", D.style, j.style, x), I & 8) {
        const te = f.dynamicProps;
        for (let ue = 0; ue < te.length; ue++) {
          const ce = te[ue], ge = D[ce], be = j[ce];
          (be !== ge || ce === "value") && r(E, ce, ge, be, x, g);
        }
      }
      I & 1 && u.children !== f.children && c(E, f.children);
    } else !M && _ == null && B(E, D, j, g, x);
    ((q = j.onVnodeUpdated) || z) && Me(() => {
      q && ze(q, g, f, u), z && Ct(f, u, g, "updated");
    }, w);
  }, A = (u, f, g, w, x, y, M) => {
    for (let E = 0; E < f.length; E++) {
      const I = u[E], _ = f[E], z = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        I.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (I.type === ee || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Mt(I, _) || // - In the case of a component, it could contain anything.
        I.shapeFlag & 198) ? h(I.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      T(
        I,
        _,
        z,
        null,
        w,
        x,
        y,
        M,
        !0
      );
    }
  }, B = (u, f, g, w, x) => {
    if (f !== g) {
      if (f !== fe)
        for (const y in f)
          !ns(y) && !(y in g) && r(
            u,
            y,
            f[y],
            null,
            x,
            w
          );
      for (const y in g) {
        if (ns(y)) continue;
        const M = g[y], E = f[y];
        M !== E && y !== "value" && r(u, y, E, M, x, w);
      }
      "value" in g && r(u, "value", f.value, g.value, x);
    }
  }, b = (u, f, g, w, x, y, M, E, I) => {
    const _ = f.el = u ? u.el : l(""), z = f.anchor = u ? u.anchor : l("");
    let { patchFlag: D, dynamicChildren: j, slotScopeIds: q } = f;
    q && (E = E ? E.concat(q) : q), u == null ? (n(_, g, w), n(z, g, w), G(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      g,
      z,
      x,
      y,
      M,
      E,
      I
    )) : D > 0 && D & 64 && j && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === j.length ? (A(
      u.dynamicChildren,
      j,
      g,
      x,
      y,
      M,
      E
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || x && f === x.subTree) && ro(
      u,
      f,
      !0
      /* shallow */
    )) : ae(
      u,
      f,
      g,
      z,
      x,
      y,
      M,
      E,
      I
    );
  }, R = (u, f, g, w, x, y, M, E, I) => {
    f.slotScopeIds = E, u == null ? f.shapeFlag & 512 ? x.ctx.activate(
      f,
      g,
      w,
      M,
      I
    ) : W(
      f,
      g,
      w,
      x,
      y,
      M,
      I
    ) : me(u, f, I);
  }, W = (u, f, g, w, x, y, M) => {
    const E = u.component = va(
      u,
      w,
      x
    );
    if (on(u) && (E.ctx.renderer = Gt), ya(E, !1, M), E.asyncDep) {
      if (x && x.registerDep(E, ie, M), !u.el) {
        const I = E.subTree = ne(Te);
        O(null, I, f, g), u.placeholder = I.el;
      }
    } else
      ie(
        E,
        u,
        f,
        g,
        x,
        y,
        M
      );
  }, me = (u, f, g) => {
    const w = f.component = u.component;
    if (Xl(u, f, g))
      if (w.asyncDep && !w.asyncResolved) {
        X(w, f, g);
        return;
      } else
        w.next = f, w.update();
    else
      f.el = u.el, w.vnode = f;
  }, ie = (u, f, g, w, x, y, M) => {
    const E = () => {
      if (u.isMounted) {
        let { next: D, bu: j, u: q, parent: te, vnode: ue } = u;
        {
          const Ke = oo(u);
          if (Ke) {
            D && (D.el = ue.el, X(u, D, M)), Ke.asyncDep.then(() => {
              Me(() => {
                u.isUnmounted || _();
              }, x);
            });
            return;
          }
        }
        let ce = D, ge;
        It(u, !1), D ? (D.el = ue.el, X(u, D, M)) : D = ue, j && ks(j), (ge = D.props && D.props.onVnodeBeforeUpdate) && ze(ge, te, D, ue), It(u, !0);
        const be = xi(u), Be = u.subTree;
        u.subTree = be, T(
          Be,
          be,
          // parent may have changed if it's in a teleport
          h(Be.el),
          // anchor may have changed if it's in a fragment
          Es(Be),
          u,
          x,
          y
        ), D.el = be.el, ce === null && Zl(u, be.el), q && Me(q, x), (ge = D.props && D.props.onVnodeUpdated) && Me(
          () => ze(ge, te, D, ue),
          x
        );
      } else {
        let D;
        const { el: j, props: q } = f, { bm: te, m: ue, parent: ce, root: ge, type: be } = u, Be = as(f);
        It(u, !1), te && ks(te), !Be && (D = q && q.onVnodeBeforeMount) && ze(D, ce, f), It(u, !0);
        {
          ge.ce && ge.ce._hasShadowRoot() && ge.ce._injectChildStyle(
            be,
            u.parent ? u.parent.type : void 0
          );
          const Ke = u.subTree = xi(u);
          T(
            null,
            Ke,
            g,
            w,
            u,
            x,
            y
          ), f.el = Ke.el;
        }
        if (ue && Me(ue, x), !Be && (D = q && q.onVnodeMounted)) {
          const Ke = f;
          Me(
            () => ze(D, ce, Ke),
            x
          );
        }
        (f.shapeFlag & 256 || ce && as(ce.vnode) && ce.vnode.shapeFlag & 256) && u.a && Me(u.a, x), u.isMounted = !0, f = g = w = null;
      }
    };
    u.scope.on();
    const I = u.effect = new pr(E);
    u.scope.off();
    const _ = u.update = I.run.bind(I), z = u.job = I.runIfDirty.bind(I);
    z.i = u, z.id = u.uid, I.scheduler = () => Zn(z), It(u, !0), _();
  }, X = (u, f, g) => {
    f.component = u;
    const w = u.vnode.props;
    u.vnode = f, u.next = null, ea(u, f.props, w, g), ia(u, f.children, g), Ze(), hi(u), Qe();
  }, ae = (u, f, g, w, x, y, M, E, I = !1) => {
    const _ = u && u.children, z = u ? u.shapeFlag : 0, D = f.children, { patchFlag: j, shapeFlag: q } = f;
    if (j > 0) {
      if (j & 128) {
        Is(
          _,
          D,
          g,
          w,
          x,
          y,
          M,
          E,
          I
        );
        return;
      } else if (j & 256) {
        wt(
          _,
          D,
          g,
          w,
          x,
          y,
          M,
          E,
          I
        );
        return;
      }
    }
    q & 8 ? (z & 16 && Jt(_, x, y), D !== _ && c(g, D)) : z & 16 ? q & 16 ? Is(
      _,
      D,
      g,
      w,
      x,
      y,
      M,
      E,
      I
    ) : Jt(_, x, y, !0) : (z & 8 && c(g, ""), q & 16 && G(
      D,
      g,
      w,
      x,
      y,
      M,
      E,
      I
    ));
  }, wt = (u, f, g, w, x, y, M, E, I) => {
    u = u || Ht, f = f || Ht;
    const _ = u.length, z = f.length, D = Math.min(_, z);
    let j;
    for (j = 0; j < D; j++) {
      const q = f[j] = I ? ot(f[j]) : qe(f[j]);
      T(
        u[j],
        q,
        g,
        null,
        x,
        y,
        M,
        E,
        I
      );
    }
    _ > z ? Jt(
      u,
      x,
      y,
      !0,
      !1,
      D
    ) : G(
      f,
      g,
      w,
      x,
      y,
      M,
      E,
      I,
      D
    );
  }, Is = (u, f, g, w, x, y, M, E, I) => {
    let _ = 0;
    const z = f.length;
    let D = u.length - 1, j = z - 1;
    for (; _ <= D && _ <= j; ) {
      const q = u[_], te = f[_] = I ? ot(f[_]) : qe(f[_]);
      if (Mt(q, te))
        T(
          q,
          te,
          g,
          null,
          x,
          y,
          M,
          E,
          I
        );
      else
        break;
      _++;
    }
    for (; _ <= D && _ <= j; ) {
      const q = u[D], te = f[j] = I ? ot(f[j]) : qe(f[j]);
      if (Mt(q, te))
        T(
          q,
          te,
          g,
          null,
          x,
          y,
          M,
          E,
          I
        );
      else
        break;
      D--, j--;
    }
    if (_ > D) {
      if (_ <= j) {
        const q = j + 1, te = q < z ? f[q].el : w;
        for (; _ <= j; )
          T(
            null,
            f[_] = I ? ot(f[_]) : qe(f[_]),
            g,
            te,
            x,
            y,
            M,
            E,
            I
          ), _++;
      }
    } else if (_ > j)
      for (; _ <= D; )
        je(u[_], x, y, !0), _++;
    else {
      const q = _, te = _, ue = /* @__PURE__ */ new Map();
      for (_ = te; _ <= j; _++) {
        const Pe = f[_] = I ? ot(f[_]) : qe(f[_]);
        Pe.key != null && ue.set(Pe.key, _);
      }
      let ce, ge = 0;
      const be = j - te + 1;
      let Be = !1, Ke = 0;
      const qt = new Array(be);
      for (_ = 0; _ < be; _++) qt[_] = 0;
      for (_ = q; _ <= D; _++) {
        const Pe = u[_];
        if (ge >= be) {
          je(Pe, x, y, !0);
          continue;
        }
        let We;
        if (Pe.key != null)
          We = ue.get(Pe.key);
        else
          for (ce = te; ce <= j; ce++)
            if (qt[ce - te] === 0 && Mt(Pe, f[ce])) {
              We = ce;
              break;
            }
        We === void 0 ? je(Pe, x, y, !0) : (qt[We - te] = _ + 1, We >= Ke ? Ke = We : Be = !0, T(
          Pe,
          f[We],
          g,
          null,
          x,
          y,
          M,
          E,
          I
        ), ge++);
      }
      const oi = Be ? aa(qt) : Ht;
      for (ce = oi.length - 1, _ = be - 1; _ >= 0; _--) {
        const Pe = te + _, We = f[Pe], li = f[Pe + 1], ai = Pe + 1 < z ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          li.el || lo(li)
        ) : w;
        qt[_] === 0 ? T(
          null,
          We,
          g,
          ai,
          x,
          y,
          M,
          E,
          I
        ) : Be && (ce < 0 || _ !== oi[ce] ? St(We, g, ai, 2) : ce--);
      }
    }
  }, St = (u, f, g, w, x = null) => {
    const { el: y, type: M, transition: E, children: I, shapeFlag: _ } = u;
    if (_ & 6) {
      St(u.component.subTree, f, g, w);
      return;
    }
    if (_ & 128) {
      u.suspense.move(f, g, w);
      return;
    }
    if (_ & 64) {
      M.move(u, f, g, Gt);
      return;
    }
    if (M === ee) {
      n(y, f, g);
      for (let D = 0; D < I.length; D++)
        St(I[D], f, g, w);
      n(u.anchor, f, g);
      return;
    }
    if (M === Os) {
      V(u, f, g);
      return;
    }
    if (w !== 2 && _ & 1 && E)
      if (w === 0)
        E.persisted && !y[Oe] ? n(y, f, g) : (E.beforeEnter(y), n(y, f, g), Me(() => E.enter(y), x));
      else {
        const { leave: D, delayLeave: j, afterLeave: q } = E, te = () => {
          u.ctx.isUnmounted ? i(y) : n(y, f, g);
        }, ue = () => {
          const ce = y._isLeaving || !!y[Oe];
          y._isLeaving && y[Oe](
            !0
            /* cancelled */
          ), E.persisted && !ce ? te() : D(y, () => {
            te(), q && q();
          });
        };
        j ? j(y, te, ue) : ue();
      }
    else
      n(y, f, g);
  }, je = (u, f, g, w = !1, x = !1) => {
    const {
      type: y,
      props: M,
      ref: E,
      children: I,
      dynamicChildren: _,
      shapeFlag: z,
      patchFlag: D,
      dirs: j,
      cacheIndex: q,
      memo: te
    } = u;
    if (D === -2 && (x = !1), E != null && (Ze(), ls(E, null, g, u, !0), Qe()), q != null && (f.renderCache[q] = void 0), z & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const ue = z & 1 && j, ce = !as(u);
    let ge;
    if (ce && (ge = M && M.onVnodeBeforeUnmount) && ze(ge, f, u), z & 6)
      Eo(u.component, g, w);
    else {
      if (z & 128) {
        u.suspense.unmount(g, w);
        return;
      }
      ue && Ct(u, null, f, "beforeUnmount"), z & 64 ? u.type.remove(
        u,
        f,
        g,
        Gt,
        w
      ) : _ && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !_.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (y !== ee || D > 0 && D & 64) ? Jt(
        _,
        f,
        g,
        !1,
        !0
      ) : (y === ee && D & 384 || !x && z & 16) && Jt(I, f, g), w && ii(u);
    }
    const be = te != null && q == null;
    (ce && (ge = M && M.onVnodeUnmounted) || ue || be) && Me(() => {
      ge && ze(ge, f, u), ue && Ct(u, null, f, "unmounted"), be && (u.el = null);
    }, g);
  }, ii = (u) => {
    const { type: f, el: g, anchor: w, transition: x } = u;
    if (f === ee) {
      Io(g, w);
      return;
    }
    if (f === Os) {
      k(u);
      return;
    }
    const y = () => {
      i(g), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (u.shapeFlag & 1 && x && !x.persisted) {
      const { leave: M, delayLeave: E } = x, I = () => M(g, y);
      E ? E(u.el, y, I) : I();
    } else
      y();
  }, Io = (u, f) => {
    let g;
    for (; u !== f; )
      g = v(u), i(u), u = g;
    i(f);
  }, Eo = (u, f, g) => {
    const { bum: w, scope: x, job: y, subTree: M, um: E, m: I, a: _ } = u;
    Ci(I), Ci(_), w && ks(w), x.stop(), y && (y.flags |= 8, je(M, u, f, g)), E && Me(E, f), Me(() => {
      u.isUnmounted = !0;
    }, f);
  }, Jt = (u, f, g, w = !1, x = !1, y = 0) => {
    for (let M = y; M < u.length; M++)
      je(u[M], f, g, w, x);
  }, Es = (u) => {
    if (u.shapeFlag & 6)
      return Es(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const f = v(u.anchor || u.el), g = f && f[Sl];
    return g ? v(g) : f;
  };
  let hn = !1;
  const ri = (u, f, g) => {
    let w;
    u == null ? f._vnode && (je(f._vnode, null, null, !0), w = f._vnode.component) : T(
      f._vnode || null,
      u,
      f,
      null,
      null,
      null,
      g
    ), f._vnode = u, hn || (hn = !0, hi(w), Rr(), hn = !1);
  }, Gt = {
    p: T,
    um: je,
    m: St,
    r: ii,
    mt: W,
    mc: G,
    pc: ae,
    pbc: A,
    n: Es,
    o: e
  };
  return {
    render: ri,
    hydrate: void 0,
    createApp: Wl(ri)
  };
}
function xn({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function It({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function la(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ro(e, t, s = !1) {
  const n = e.children, i = t.children;
  if (K(n) && K(i))
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = ot(i[r]), l.el = o.el), !s && l.patchFlag !== -2 && ro(o, l)), l.type === cn && (l.patchFlag === -1 && (l = i[r] = ot(l)), l.el = o.el), l.type === Te && !l.el && (l.el = o.el);
    }
}
function aa(e) {
  const t = e.slice(), s = [0];
  let n, i, r, o, l;
  const a = e.length;
  for (n = 0; n < a; n++) {
    const d = e[n];
    if (d !== 0) {
      if (i = s[s.length - 1], e[i] < d) {
        t[n] = i, s.push(n);
        continue;
      }
      for (r = 0, o = s.length - 1; r < o; )
        l = r + o >> 1, e[s[l]] < d ? r = l + 1 : o = l;
      d < e[s[r]] && (r > 0 && (t[n] = s[r - 1]), s[r] = n);
    }
  }
  for (r = s.length, o = s[r - 1]; r-- > 0; )
    s[r] = o, o = t[o];
  return s;
}
function oo(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : oo(t);
}
function Ci(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function lo(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? lo(t.subTree) : null;
}
const ao = (e) => e.__isSuspense;
function ca(e, t) {
  t && t.pendingBranch ? K(e) ? t.effects.push(...e) : t.effects.push(e) : vl(e);
}
const ee = /* @__PURE__ */ Symbol.for("v-fgt"), cn = /* @__PURE__ */ Symbol.for("v-txt"), Te = /* @__PURE__ */ Symbol.for("v-cmt"), Os = /* @__PURE__ */ Symbol.for("v-stc"), us = [];
let Re = null;
function N(e = !1) {
  us.push(Re = e ? null : []);
}
function ua() {
  us.pop(), Re = us[us.length - 1] || null;
}
let ys = 1;
function Bs(e, t = !1) {
  ys += e, e < 0 && Re && t && (Re.hasOnce = !0);
}
function co(e) {
  return e.dynamicChildren = ys > 0 ? Re || Ht : null, ua(), ys > 0 && Re && Re.push(e), e;
}
function H(e, t, s, n, i, r) {
  return co(
    p(
      e,
      t,
      s,
      n,
      i,
      r,
      !0
    )
  );
}
function $t(e, t, s, n, i) {
  return co(
    ne(
      e,
      t,
      s,
      n,
      i,
      !0
    )
  );
}
function Ks(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Mt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const uo = ({ key: e }) => e ?? null, Ds = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? he(e) || /* @__PURE__ */ pe(e) || Y(e) ? { i: De, r: e, k: t, f: !!s } : e : null);
function p(e, t = null, s = null, n = 0, i = null, r = e === ee ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && uo(t),
    ref: t && Ds(t),
    scopeId: $r,
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
    shapeFlag: r,
    patchFlag: n,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: De
  };
  return l ? (Ws(a, s), r & 128 && e.normalize(a)) : s && (a.shapeFlag |= he(s) ? 8 : 16), ys > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Re && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Re.push(a), a;
}
const ne = fa;
function fa(e, t = null, s = null, n = 0, i = null, r = !1) {
  if ((!e || e === Nl) && (e = Te), Ks(e)) {
    const l = vt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Ws(l, s), ys > 0 && !r && Re && (l.shapeFlag & 6 ? Re[Re.indexOf(e)] = l : Re.push(l)), l.patchFlag = -2, l;
  }
  if (wa(e) && (e = e.__vccOpts), t) {
    t = da(t);
    let { class: l, style: a } = t;
    l && !he(l) && (t.class = xe(l)), oe(a) && (/* @__PURE__ */ nn(a) && !K(a) && (a = ye({}, a)), t.style = en(a));
  }
  const o = he(e) ? 1 : ao(e) ? 128 : Nr(e) ? 64 : oe(e) ? 4 : Y(e) ? 2 : 0;
  return p(
    e,
    t,
    s,
    n,
    i,
    o,
    r,
    !0
  );
}
function da(e) {
  return e ? /* @__PURE__ */ nn(e) || Qr(e) ? ye({}, e) : e : null;
}
function vt(e, t, s = !1, n = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: a } = e, d = t ? pa(i || {}, t) : i, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && uo(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && r ? K(r) ? r.concat(Ds(t)) : [r, Ds(t)] : Ds(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ee ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && vt(e.ssContent),
    ssFallback: e.ssFallback && vt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && n && vs(
    c,
    a.clone(c)
  ), c;
}
function ha(e = " ", t = 0) {
  return ne(cn, null, e, t);
}
function Ps(e, t) {
  const s = ne(Os, null, e);
  return s.staticCount = t, s;
}
function Le(e = "", t = !1) {
  return t ? (N(), $t(Te, null, e)) : ne(Te, null, e);
}
function qe(e) {
  return e == null || typeof e == "boolean" ? ne(Te) : K(e) ? ne(
    ee,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ks(e) ? ot(e) : ne(cn, null, String(e));
}
function ot(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : vt(e);
}
function Ws(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (K(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Ws(e, i()), i._c && (i._d = !0));
      return;
    } else {
      s = 32;
      const i = t._;
      !i && !Qr(t) ? t._ctx = De : i === 3 && De && (De.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Y(t)) {
    if (n & 65) {
      Ws(e, { default: t });
      return;
    }
    t = { default: t, _ctx: De }, s = 32;
  } else
    t = String(t), n & 64 ? (s = 16, t = [ha(t)]) : s = 8;
  e.children = t, e.shapeFlag |= s;
}
function pa(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = xe([t.class, n.class]));
      else if (i === "style")
        t.style = en([t.style, n.style]);
      else if (qs(i)) {
        const r = t[i], o = n[i];
        o && r !== o && !(K(r) && r.includes(o)) ? t[i] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ys(i) && (t[i] = o);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function ze(e, t, s, n = null) {
  Fe(e, t, 7, [
    s,
    n
  ]);
}
const ga = Gr();
let ma = 0;
function va(e, t, s) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || ga, r = {
    uid: ma++,
    vnode: e,
    type: n,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new fr(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: to(n, i),
    emitsOptions: qr(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: fe,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: fe,
    data: fe,
    props: fe,
    attrs: fe,
    slots: fe,
    refs: fe,
    setupState: fe,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Jl.bind(null, r), e.ce && e.ce(r), r;
}
let Ae = null;
const ni = () => Ae || De;
let zs, Nn;
{
  const e = Qs(), t = (s, n) => {
    let i;
    return (i = e[s]) || (i = e[s] = []), i.push(n), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  zs = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => Ae = s
  ), Nn = t(
    "__VUE_SSR_SETTERS__",
    (s) => bs = s
  );
}
const Ss = (e) => {
  const t = Ae;
  return zs(e), e.scope.on(), () => {
    e.scope.off(), zs(t);
  };
}, Ii = () => {
  Ae && Ae.scope.off(), zs(null);
};
function fo(e) {
  return e.vnode.shapeFlag & 4;
}
let bs = !1;
function ya(e, t = !1, s = !1) {
  t && Nn(t);
  const { props: n, children: i } = e.vnode, r = fo(e);
  Ql(e, n, r, t), na(e, i, s || t);
  const o = r ? ba(e, t) : void 0;
  return t && Nn(!1), o;
}
function ba(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Fl);
  const { setup: n } = s;
  if (n) {
    Ze();
    const i = e.setupContext = n.length > 1 ? xa(e) : null, r = Ss(e), o = ws(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = nr(o);
    if (Qe(), r(), (l || e.sp) && !as(e) && Br(e), l) {
      if (o.then(Ii, Ii), t)
        return o.then((a) => {
          Ei(e, a);
        }).catch((a) => {
          rn(a, e, 0);
        });
      e.asyncDep = o;
    } else
      Ei(e, o);
  } else
    ho(e);
}
function Ei(e, t, s) {
  Y(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : oe(t) && (e.setupState = Ar(t)), ho(e);
}
function ho(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || Xe);
  {
    const i = Ss(e);
    Ze();
    try {
      Ul(e);
    } finally {
      Qe(), i();
    }
  }
}
const _a = {
  get(e, t) {
    return Se(e, "get", ""), e[t];
  }
};
function xa(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, _a),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function un(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ar(Xn(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in cs)
        return cs[s](e);
    },
    has(t, s) {
      return s in t || s in cs;
    }
  })) : e.proxy;
}
function wa(e) {
  return Y(e) && "__vccOpts" in e;
}
const yt = (e, t) => /* @__PURE__ */ dl(e, t, bs);
function Sa(e, t, s) {
  try {
    Bs(-1);
    const n = arguments.length;
    return n === 2 ? oe(t) && !K(t) ? Ks(t) ? ne(e, null, [t]) : ne(e, t) : ne(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && Ks(s) && (s = [s]), ne(e, t, s));
  } finally {
    Bs(1);
  }
}
const Ca = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Fn;
const Ti = typeof window < "u" && window.trustedTypes;
if (Ti)
  try {
    Fn = /* @__PURE__ */ Ti.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const po = Fn ? (e) => Fn.createHTML(e) : (e) => e, Ia = "http://www.w3.org/2000/svg", Ea = "http://www.w3.org/1998/Math/MathML", nt = typeof document < "u" ? document : null, Ai = nt && /* @__PURE__ */ nt.createElement("template"), Ta = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const i = t === "svg" ? nt.createElementNS(Ia, e) : t === "mathml" ? nt.createElementNS(Ea, e) : s ? nt.createElement(e, { is: s }) : nt.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => nt.createTextNode(e),
  createComment: (e) => nt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => nt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, s, n, i, r) {
    const o = s ? s.previousSibling : t.lastChild;
    if (i && (i === r || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), s), !(i === r || !(i = i.nextSibling)); )
        ;
    else {
      Ai.innerHTML = po(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ai.content;
      if (n === "svg" || n === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, s);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, ht = "transition", Zt = "animation", _s = /* @__PURE__ */ Symbol("_vtc"), go = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, Aa = /* @__PURE__ */ ye(
  {},
  Fr,
  go
), Ma = (e) => (e.displayName = "Transition", e.props = Aa, e), Pa = /* @__PURE__ */ Ma(
  (e, { slots: t }) => Sa(El, Ra(e), t)
), Et = (e, t = []) => {
  K(e) ? e.forEach((s) => s(...t)) : e && e(...t);
}, Mi = (e) => e ? K(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Ra(e) {
  const t = {};
  for (const b in e)
    b in go || (t[b] = e[b]);
  if (e.css === !1)
    return t;
  const {
    name: s = "v",
    type: n,
    duration: i,
    enterFromClass: r = `${s}-enter-from`,
    enterActiveClass: o = `${s}-enter-active`,
    enterToClass: l = `${s}-enter-to`,
    appearFromClass: a = r,
    appearActiveClass: d = o,
    appearToClass: c = l,
    leaveFromClass: h = `${s}-leave-from`,
    leaveActiveClass: v = `${s}-leave-active`,
    leaveToClass: m = `${s}-leave-to`
  } = e, L = La(i), T = L && L[0], F = L && L[1], {
    onBeforeEnter: O,
    onEnter: S,
    onEnterCancelled: V,
    onLeave: k,
    onLeaveCancelled: J,
    onBeforeAppear: Z = O,
    onAppear: le = S,
    onAppearCancelled: G = V
  } = t, P = (b, R, W, me) => {
    b._enterCancelled = me, Tt(b, R ? c : l), Tt(b, R ? d : o), W && W();
  }, A = (b, R) => {
    b._isLeaving = !1, Tt(b, h), Tt(b, m), Tt(b, v), R && R();
  }, B = (b) => (R, W) => {
    const me = b ? le : S, ie = () => P(R, b, W);
    Et(me, [R, ie]), Pi(() => {
      Tt(R, b ? a : r), tt(R, b ? c : l), Mi(me) || Ri(R, n, T, ie);
    });
  };
  return ye(t, {
    onBeforeEnter(b) {
      Et(O, [b]), tt(b, r), tt(b, o);
    },
    onBeforeAppear(b) {
      Et(Z, [b]), tt(b, a), tt(b, d);
    },
    onEnter: B(!1),
    onAppear: B(!0),
    onLeave(b, R) {
      b._isLeaving = !0;
      const W = () => A(b, R);
      tt(b, h), b._enterCancelled ? (tt(b, v), ki(b)) : (ki(b), tt(b, v)), Pi(() => {
        b._isLeaving && (Tt(b, h), tt(b, m), Mi(k) || Ri(b, n, F, W));
      }), Et(k, [b, W]);
    },
    onEnterCancelled(b) {
      P(b, !1, void 0, !0), Et(V, [b]);
    },
    onAppearCancelled(b) {
      P(b, !0, void 0, !0), Et(G, [b]);
    },
    onLeaveCancelled(b) {
      A(b), Et(J, [b]);
    }
  });
}
function La(e) {
  if (e == null)
    return null;
  if (oe(e))
    return [wn(e.enter), wn(e.leave)];
  {
    const t = wn(e);
    return [t, t];
  }
}
function wn(e) {
  return Ro(e);
}
function tt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.add(s)), (e[_s] || (e[_s] = /* @__PURE__ */ new Set())).add(t);
}
function Tt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const s = e[_s];
  s && (s.delete(t), s.size || (e[_s] = void 0));
}
function Pi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let $a = 0;
function Ri(e, t, s, n) {
  const i = e._endId = ++$a, r = () => {
    i === e._endId && n();
  };
  if (s != null)
    return setTimeout(r, s);
  const { type: o, timeout: l, propCount: a } = ka(e, t);
  if (!o)
    return n();
  const d = o + "end";
  let c = 0;
  const h = () => {
    e.removeEventListener(d, v), r();
  }, v = (m) => {
    m.target === e && ++c >= a && h();
  };
  setTimeout(() => {
    c < a && h();
  }, l + 1), e.addEventListener(d, v);
}
function ka(e, t) {
  const s = window.getComputedStyle(e), n = (L) => (s[L] || "").split(", "), i = n(`${ht}Delay`), r = n(`${ht}Duration`), o = Li(i, r), l = n(`${Zt}Delay`), a = n(`${Zt}Duration`), d = Li(l, a);
  let c = null, h = 0, v = 0;
  t === ht ? o > 0 && (c = ht, h = o, v = r.length) : t === Zt ? d > 0 && (c = Zt, h = d, v = a.length) : (h = Math.max(o, d), c = h > 0 ? o > d ? ht : Zt : null, v = c ? c === ht ? r.length : a.length : 0);
  const m = c === ht && /\b(?:transform|all)(?:,|$)/.test(
    n(`${ht}Property`).toString()
  );
  return {
    type: c,
    timeout: h,
    propCount: v,
    hasTransform: m
  };
}
function Li(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((s, n) => $i(s) + $i(e[n])));
}
function $i(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function ki(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Oa(e, t, s) {
  const n = e[_s];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const Js = /* @__PURE__ */ Symbol("_vod"), mo = /* @__PURE__ */ Symbol("_vsh"), Rs = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: s }) {
    e[Js] = e.style.display === "none" ? "" : e.style.display, s && t ? s.beforeEnter(e) : Qt(e, t);
  },
  mounted(e, { value: t }, { transition: s }) {
    s && t && s.enter(e);
  },
  updated(e, { value: t, oldValue: s }, { transition: n }) {
    !t != !s && (n ? t ? (n.beforeEnter(e), Qt(e, !0), n.enter(e)) : n.leave(e, () => {
      Qt(e, !1);
    }) : Qt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Qt(e, t);
  }
};
function Qt(e, t) {
  e.style.display = t ? e[Js] : "none", e[mo] = !t;
}
const Da = /* @__PURE__ */ Symbol(""), Na = /(?:^|;)\s*display\s*:/;
function Fa(e, t, s) {
  const n = e.style, i = he(s);
  let r = !1;
  if (s && !i) {
    if (t)
      if (he(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          s[l] == null && ts(n, l, "");
        }
      else
        for (const o in t)
          s[o] == null && ts(n, o, "");
    for (const o in s) {
      o === "display" && (r = !0);
      const l = s[o];
      l != null ? Va(
        e,
        o,
        !he(t) && t ? t[o] : void 0,
        l
      ) || ts(n, o, l) : ts(n, o, "");
    }
  } else if (i) {
    if (t !== s) {
      const o = n[Da];
      o && (s += ";" + o), n.cssText = s, r = Na.test(s);
    }
  } else t && e.removeAttribute("style");
  Js in e && (e[Js] = r ? n.display : "", e[mo] && (n.display = "none"));
}
const Oi = /\s*!important$/;
function ts(e, t, s) {
  if (K(s))
    s.forEach((n) => ts(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = Ua(e, t);
    Oi.test(s) ? e.setProperty(
      bt(n),
      s.replace(Oi, ""),
      "important"
    ) : e[n] = s;
  }
}
const Di = ["Webkit", "Moz", "ms"], Sn = {};
function Ua(e, t) {
  const s = Sn[t];
  if (s)
    return s;
  let n = Ue(t);
  if (n !== "filter" && n in e)
    return Sn[t] = n;
  n = or(n);
  for (let i = 0; i < Di.length; i++) {
    const r = Di[i] + n;
    if (r in e)
      return Sn[t] = r;
  }
  return t;
}
function Va(e, t, s, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && he(n) && s === n;
}
const Ni = "http://www.w3.org/1999/xlink";
function Fi(e, t, s, n, i, r = No(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Ni, t.slice(6, t.length)) : e.setAttributeNS(Ni, t, s) : s == null || r && !ar(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Ne(s) ? String(s) : s
  );
}
function Ui(e, t, s, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? po(s) : s);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, a = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(s);
    (l !== a || !("_value" in e)) && (e.value = a), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let o = !1;
  if (s === "" || s == null) {
    const l = typeof e[t];
    l === "boolean" ? s = ar(s) : s == null && l === "string" ? (s = "", o = !0) : l === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function Ut(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function Ha(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Vi = /* @__PURE__ */ Symbol("_vei");
function ja(e, t, s, n, i = null) {
  const r = e[Vi] || (e[Vi] = {}), o = r[t];
  if (n && o)
    o.value = n;
  else {
    const [l, a] = Wa(t);
    if (n) {
      const d = r[t] = Ga(
        n,
        i
      );
      Ut(e, l, d, a);
    } else o && (Ha(e, l, o, a), r[t] = void 0);
  }
}
const Ba = /(Once|Passive|Capture)$/, Ka = /^on:?(?:Once|Passive|Capture)$/;
function Wa(e) {
  let t, s;
  for (; (s = e.match(Ba)) && !Ka.test(e); )
    t || (t = {}), e = e.slice(0, e.length - s[1].length), t[s[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : bt(e.slice(2)), t];
}
let Cn = 0;
const za = /* @__PURE__ */ Promise.resolve(), Ja = () => Cn || (za.then(() => Cn = 0), Cn = Date.now());
function Ga(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    const i = s.value;
    if (K(i)) {
      const r = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        r.call(n), n._stopped = !0;
      };
      const o = i.slice(), l = [n];
      for (let a = 0; a < o.length && !n._stopped; a++) {
        const d = o[a];
        d && Fe(
          d,
          t,
          5,
          l
        );
      }
    } else
      Fe(
        i,
        t,
        5,
        [n]
      );
  };
  return s.value = e, s.attached = Ja(), s;
}
const Hi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, qa = (e, t, s, n, i, r) => {
  const o = i === "svg";
  t === "class" ? Oa(e, n, o) : t === "style" ? Fa(e, s, n) : qs(t) ? Ys(t) || ja(e, t, s, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ya(e, t, n, o)) ? (Ui(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Fi(e, t, n, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Xa(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !he(n))) ? Ui(e, Ue(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Fi(e, t, n, o));
};
function Ya(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Hi(t) && Y(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Hi(t) && he(s) ? !1 : t in e;
}
function Xa(e, t) {
  const s = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!s)
    return !1;
  const n = Ue(t);
  return Array.isArray(s) ? s.some((i) => Ue(i) === n) : Object.keys(s).some((i) => Ue(i) === n);
}
const ji = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return K(t) ? (s) => ks(t, s) : t;
};
function Za(e) {
  e.target.composing = !0;
}
function Bi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const In = /* @__PURE__ */ Symbol("_assign");
function Ki(e, t, s) {
  return t && (e = e.trim()), s && (e = Bn(e)), e;
}
const ss = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, i) {
    e[In] = ji(i);
    const r = n || i.props && i.props.type === "number";
    Ut(e, t ? "change" : "input", (o) => {
      o.target.composing || e[In](Ki(e.value, s, r));
    }), (s || r) && Ut(e, "change", () => {
      e.value = Ki(e.value, s, r);
    }), t || (Ut(e, "compositionstart", Za), Ut(e, "compositionend", Bi), Ut(e, "change", Bi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: s, modifiers: { lazy: n, trim: i, number: r } }, o) {
    if (e[In] = ji(o), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? Bn(e.value) : e.value, a = t ?? "";
    if (l === a)
      return;
    const d = e.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === e && e.type !== "range" && (n && t === s || i && e.value.trim() === a) || (e.value = a);
  }
}, Qa = ["ctrl", "shift", "alt", "meta"], ec = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Qa.some((s) => e[`${s}Key`] && !t.includes(s))
}, Pt = (e, t) => {
  if (!e) return e;
  const s = e._withMods || (e._withMods = {}), n = t.join(".");
  return s[n] || (s[n] = (i, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const l = ec[t[o]];
      if (l && l(i, t)) return;
    }
    return e(i, ...r);
  });
}, tc = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, vo = (e, t) => {
  const s = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return s[n] || (s[n] = (i) => {
    if (!("key" in i))
      return;
    const r = bt(i.key);
    if (t.some(
      (o) => o === r || tc[o] === r
    ))
      return e(i);
  });
}, sc = /* @__PURE__ */ ye({ patchProp: qa }, Ta);
let Wi;
function nc() {
  return Wi || (Wi = ra(sc));
}
const yo = (...e) => {
  const t = nc().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const i = rc(n);
    if (!i) return;
    const r = t._component;
    !Y(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = s(i, !1, ic(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
};
function ic(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function rc(e) {
  return he(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let bo;
const fn = (e) => bo = e, _o = (
  /* istanbul ignore next */
  Symbol()
);
function Un(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var fs;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(fs || (fs = {}));
function oc() {
  const e = dr(!0), t = e.run(() => /* @__PURE__ */ we({}));
  let s = [], n = [];
  const i = Xn({
    install(r) {
      fn(i), i._a = r, r.provide(_o, i), r.config.globalProperties.$pinia = i, n.forEach((o) => s.push(o)), n = [];
    },
    use(r) {
      return this._a ? s.push(r) : n.push(r), this;
    },
    _p: s,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return i;
}
const xo = () => {
};
function zi(e, t, s, n = xo) {
  e.push(t);
  const i = () => {
    const r = e.indexOf(t);
    r > -1 && (e.splice(r, 1), n());
  };
  return !s && hr() && Uo(i), i;
}
function Dt(e, ...t) {
  e.slice().forEach((s) => {
    s(...t);
  });
}
const lc = (e) => e(), Ji = Symbol(), En = Symbol();
function Vn(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((s, n) => e.set(n, s)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const s in t) {
    if (!t.hasOwnProperty(s))
      continue;
    const n = t[s], i = e[s];
    Un(i) && Un(n) && e.hasOwnProperty(s) && !/* @__PURE__ */ pe(n) && !/* @__PURE__ */ ut(n) ? e[s] = Vn(i, n) : e[s] = n;
  }
  return e;
}
const ac = (
  /* istanbul ignore next */
  Symbol()
);
function cc(e) {
  return !Un(e) || !e.hasOwnProperty(ac);
}
const { assign: pt } = Object;
function uc(e) {
  return !!(/* @__PURE__ */ pe(e) && e.effect);
}
function fc(e, t, s, n) {
  const { state: i, actions: r, getters: o } = t, l = s.state.value[e];
  let a;
  function d() {
    l || (s.state.value[e] = i ? i() : {});
    const c = /* @__PURE__ */ al(s.state.value[e]);
    return pt(c, r, Object.keys(o || {}).reduce((h, v) => (h[v] = Xn(yt(() => {
      fn(s);
      const m = s._s.get(e);
      return o[v].call(m, m);
    })), h), {}));
  }
  return a = wo(e, d, t, s, n, !0), a;
}
function wo(e, t, s = {}, n, i, r) {
  let o;
  const l = pt({ actions: {} }, s), a = { deep: !0 };
  let d, c, h = [], v = [], m;
  const L = n.state.value[e];
  !r && !L && (n.state.value[e] = {});
  let T;
  function F(G) {
    let P;
    d = c = !1, typeof G == "function" ? (G(n.state.value[e]), P = {
      type: fs.patchFunction,
      storeId: e,
      events: m
    }) : (Vn(n.state.value[e], G), P = {
      type: fs.patchObject,
      payload: G,
      storeId: e,
      events: m
    });
    const A = T = Symbol();
    rt().then(() => {
      T === A && (d = !0);
    }), c = !0, Dt(h, P, n.state.value[e]);
  }
  const O = r ? function() {
    const { state: P } = s, A = P ? P() : {};
    this.$patch((B) => {
      pt(B, A);
    });
  } : (
    /* istanbul ignore next */
    xo
  );
  function S() {
    o.stop(), h = [], v = [], n._s.delete(e);
  }
  const V = (G, P = "") => {
    if (Ji in G)
      return G[En] = P, G;
    const A = function() {
      fn(n);
      const B = Array.from(arguments), b = [], R = [];
      function W(X) {
        b.push(X);
      }
      function me(X) {
        R.push(X);
      }
      Dt(v, {
        args: B,
        name: A[En],
        store: J,
        after: W,
        onError: me
      });
      let ie;
      try {
        ie = G.apply(this && this.$id === e ? this : J, B);
      } catch (X) {
        throw Dt(R, X), X;
      }
      return ie instanceof Promise ? ie.then((X) => (Dt(b, X), X)).catch((X) => (Dt(R, X), Promise.reject(X))) : (Dt(b, ie), ie);
    };
    return A[Ji] = !0, A[En] = P, A;
  }, k = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: zi.bind(null, v),
    $patch: F,
    $reset: O,
    $subscribe(G, P = {}) {
      const A = zi(h, G, P.detached, () => B()), B = o.run(() => mt(() => n.state.value[e], (b) => {
        (P.flush === "sync" ? c : d) && G({
          storeId: e,
          type: fs.direct,
          events: m
        }, b);
      }, pt({}, a, P)));
      return A;
    },
    $dispose: S
  }, J = /* @__PURE__ */ sn(k);
  n._s.set(e, J);
  const le = (n._a && n._a.runWithContext || lc)(() => n._e.run(() => (o = dr()).run(() => t({ action: V }))));
  for (const G in le) {
    const P = le[G];
    if (/* @__PURE__ */ pe(P) && !uc(P) || /* @__PURE__ */ ut(P))
      r || (L && cc(P) && (/* @__PURE__ */ pe(P) ? P.value = L[G] : Vn(P, L[G])), n.state.value[e][G] = P);
    else if (typeof P == "function") {
      const A = V(P, G);
      le[G] = A, l.actions[G] = P;
    }
  }
  return pt(J, le), pt(/* @__PURE__ */ se(J), le), Object.defineProperty(J, "$state", {
    get: () => n.state.value[e],
    set: (G) => {
      F((P) => {
        pt(P, G);
      });
    }
  }), n._p.forEach((G) => {
    pt(J, o.run(() => G({
      store: J,
      app: n._a,
      pinia: n,
      options: l
    })));
  }), L && r && s.hydrate && s.hydrate(J.$state, L), d = !0, c = !0, J;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function dn(e, t, s) {
  let n, i;
  const r = typeof t == "function";
  typeof e == "string" ? (n = e, i = r ? s : t) : (i = e, n = e.id);
  function o(l, a) {
    const d = bl();
    return l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    l || (d ? os(_o, null) : null), l && fn(l), l = bo, l._s.has(n) || (r ? wo(n, t, i, l) : fc(n, i, l)), l._s.get(n);
  }
  return o.$id = n, o;
}
function dc() {
  return [
    { id: "netease", enabled: !0, priority: 0, config: { baseURL: "" } },
    { id: "local", enabled: !0, priority: 1, config: {} },
    { id: "custom", enabled: !1, priority: 2, config: { searchURL: "", resolveURL: "" } }
  ];
}
function Tn() {
  return {
    volume: 65,
    playMode: "list",
    position: null,
    widgetMode: "dock",
    autoPlayOnNewCue: !0,
    providers: dc(),
    customCueRules: []
  };
}
const Ie = /* @__PURE__ */ dn("settings", {
  state: () => ({
    settings: Tn(),
    storage: null
  }),
  getters: {
    defaults: () => Tn()
  },
  actions: {
    init(e) {
      this.storage = e;
      const t = e.getSettings(), s = Tn();
      if (t) {
        const n = typeof SillyTavern < "u" && SillyTavern.getContext()?.libs?.lodash ? SillyTavern.getContext().libs.lodash : null;
        n ? this.settings = n.merge(structuredClone(s), t) : this.settings = {
          ...s,
          ...t,
          providers: s.providers.map((i) => {
            const r = t.providers?.find((o) => o.id === i.id);
            return r ? { ...r, config: r.config ?? i.config ?? {} } : i;
          }),
          customCueRules: t.customCueRules ?? s.customCueRules
        };
      } else
        this.settings = s;
    },
    setVolume(e) {
      this.settings.volume = e, this.save();
    },
    setPlayMode(e) {
      this.settings.playMode = e, this.save();
    },
    setPosition(e) {
      this.settings.position = e, this.save();
    },
    setWidgetMode(e) {
      this.settings.widgetMode = e, this.save();
    },
    addCustomCueRule(e) {
      this.settings.customCueRules.push(e), this.save();
    },
    removeCustomCueRule(e) {
      this.settings.customCueRules.splice(e, 1), this.save();
    },
    setProviderConfig(e, t) {
      const s = this.settings.providers.find((n) => n.id === e);
      s && (s.enabled = t, this.save());
    },
    save() {
      this.storage && this.storage.setSettings(this.settings);
    }
  }
});
class hc {
  constructor() {
    this.listeners = /* @__PURE__ */ new Map(), this.audio = new Audio(), this.audio.crossOrigin = "anonymous", this.audio.preload = "auto";
  }
  load(t) {
    this.audio.src = t, this.audio.load();
  }
  async play() {
    try {
      await this.audio.play();
    } catch (t) {
      console.error("[AudioEngine] play() failed:", t);
    }
  }
  pause() {
    this.audio.pause();
  }
  seek(t) {
    this.audio.currentTime = t;
  }
  setVolume(t) {
    this.audio.volume = t;
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
  on(t, s) {
    let n = this.listeners.get(t);
    n || (n = /* @__PURE__ */ new Set(), this.listeners.set(t, n));
    const i = s;
    return n.add(i), this.audio.addEventListener(t, i), () => {
      this.audio.removeEventListener(t, i), n.delete(i);
    };
  }
  destroy() {
    for (const [t, s] of this.listeners) {
      for (const n of s)
        this.audio.removeEventListener(t, n);
      s.clear();
    }
    this.listeners.clear(), this.audio.src = "";
  }
}
const Gi = /\[(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?\]/g;
function pc(e) {
  const t = e.split(/\r?\n/), s = [];
  for (const n of t) {
    const i = new RegExp(Gi.source, "g"), r = [];
    let o;
    for (; (o = i.exec(n)) !== null; ) {
      const a = parseInt(o[1], 10), d = parseInt(o[2], 10), c = o[3] ?? "", h = c ? parseInt(c.padEnd(3, "0"), 10) : 0;
      r.push(a * 60 + d + h / 1e3);
    }
    if (r.length === 0) continue;
    const l = n.replace(new RegExp(Gi.source, "g"), "").trim();
    if (l !== "")
      for (const a of r)
        s.push({ time: a, text: l });
  }
  s.sort((n, i) => n.time - i.time);
  for (let n = 0; n < s.length; n++)
    n < s.length - 1 && (s[n].next = s[n + 1]);
  return s;
}
function qi(e, t) {
  if (e.length === 0) return null;
  let s = null;
  for (const n of e)
    if (n.time <= t)
      s = n;
    else
      break;
  return s;
}
class gc {
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
      return this.ctx().extensionSettings[Vt] ?? null;
    const t = localStorage.getItem(this.settingsKey());
    if (t === null) return null;
    try {
      return JSON.parse(t);
    } catch {
      return null;
    }
  }
  setSettings(t) {
    if (this.hasST()) {
      const s = this.ctx();
      s.extensionSettings[Vt] = t, s.saveSettingsDebounced();
      return;
    }
    localStorage.setItem(this.settingsKey(), JSON.stringify(t));
  }
  // ===== chatMetadata =====
  getMetadata(t) {
    return this.hasST() ? this.ctx().chatMetadata[t] ?? null : this.fallbackMeta.get(t) ?? null;
  }
  setMetadata(t, s) {
    if (this.hasST()) {
      const n = this.ctx(), i = n.chatMetadata;
      i[t] = s, n.saveMetadata();
      return;
    }
    this.fallbackMeta.set(t, s);
  }
  // ===== localforage blobs =====
  get forage() {
    return this.hasST() ? SillyTavern.libs.localforage : window.localforage;
  }
  async getBlob(t) {
    return await this.forage.getItem(t) ?? null;
  }
  async setBlob(t, s) {
    await this.forage.setItem(t, s);
  }
  async removeBlob(t) {
    await this.forage.removeItem(t);
  }
  // ===== resolve cache (with TTL) =====
  async getCache(t) {
    const s = await this.forage.getItem(this.cacheKey(t)) ?? null;
    return s === null ? null : Date.now() >= s.expiresAt ? (await this.forage.removeItem(this.cacheKey(t)), null) : s.value;
  }
  async setCache(t, s, n) {
    const i = { value: s, expiresAt: Date.now() + n };
    await this.forage.setItem(this.cacheKey(t), i);
  }
  async clearCache() {
    const t = this.forage, s = this.cachePrefix(), n = await t.keys();
    await Promise.all(
      n.filter((i) => i.startsWith(s)).map((i) => t.removeItem(i))
    );
  }
  // ----- key helpers -----
  settingsKey() {
    return `${Vt}__settings`;
  }
  cachePrefix() {
    return `${Vt}:cache:`;
  }
  cacheKey(t) {
    return `${this.cachePrefix()}${t}`;
  }
}
function mc() {
  return new gc();
}
const Vt = "st-music-player", Yi = "stmp_cursor", Xi = "stmp_userlist";
class vc {
  constructor(t) {
    this.providers = t;
  }
  async searchAll(t) {
    const s = await Promise.allSettled(
      this.providers.map((r) => r.search(t))
    ), n = [], i = /* @__PURE__ */ new Map();
    return s.forEach((r) => {
      if (r.status === "fulfilled")
        for (const o of r.value) {
          const l = `${o.name}__${o.artist}`;
          i.get(l) === void 0 && (i.set(l, n.length), n.push(o));
        }
    }), n;
  }
  async resolve(t, s, n) {
    const i = this.getProvider(s);
    return i ? new Promise((r) => {
      const o = setTimeout(() => r(null), 15e3);
      i.resolve(t, n).then((l) => {
        clearTimeout(o), r(l);
      }).catch(() => {
        clearTimeout(o), r(null);
      });
    }) : null;
  }
  /**
   * Search + resolve + probe across all providers.
   * Tries each provider in priority order, iterating search results
   * until a playable track is found.
   */
  async searchAndResolve(t, s) {
    for (const n of this.providers)
      if (n.searchAndResolve)
        try {
          const i = await n.searchAndResolve(t, s);
          if (i) return i;
        } catch {
        }
    return null;
  }
  getProvider(t) {
    return this.providers.find((s) => s.id === t);
  }
}
class yc {
  constructor(t) {
    this.id = "netease", this.name = "网易云", this.apiBase = t?.apiBase?.trim() || "https://jgauby2m0k6n.erocraft.com", this.urlBase = t?.baseURL?.trim() || "https://music-api.gdstudio.xyz/api.php";
  }
  async fetchJson(t, s = 5e3) {
    try {
      const n = new AbortController(), i = setTimeout(() => n.abort(), s), r = await fetch(t, { signal: n.signal });
      return clearTimeout(i), r.ok ? await r.json() : null;
    } catch {
      return null;
    }
  }
  /**
   * Probe whether an audio URL is actually playable.
   * Uses Audio element (not fetch) because media elements work cross-origin
   * without CORS headers. 3s timeout, resolves boolean.
   */
  probeAudio(t, s = 3e3) {
    return new Promise((n) => {
      const i = new Audio();
      let r = !1;
      const o = () => {
        i.removeEventListener("loadedmetadata", l), i.removeEventListener("error", a), clearTimeout(d), i.src = "";
      }, l = () => {
        r || (r = !0, o(), n(!0));
      }, a = () => {
        r || (r = !0, o(), n(!1));
      }, d = setTimeout(() => {
        r || (r = !0, o(), n(!1));
      }, s);
      i.preload = "metadata", i.addEventListener("loadedmetadata", l), i.addEventListener("error", a), i.src = t;
    });
  }
  async search(t) {
    const n = (await this.fetchJson(
      `${this.apiBase}/search?s=${encodeURIComponent(t)}&type=1&offset=0&limit=20`
    ))?.result?.songs;
    return Array.isArray(n) ? n.map((i) => ({
      id: String(i.id ?? ""),
      name: String(i.name ?? ""),
      artist: Array.isArray(i.artists) ? i.artists.map((r) => r.name).join(", ") : String(i.artists?.[0]?.name ?? ""),
      duration: i.duration ? Math.floor(i.duration / 1e3) : void 0,
      provider: this.id,
      picId: i.album?.picId ? String(i.album.picId) : void 0
    })) : [];
  }
  async resolve(t, s) {
    const n = await this.fetchJson(
      `${this.urlBase}?types=url&id=${encodeURIComponent(t)}`
    );
    if (!n || !n.url) return null;
    const [i, r] = await Promise.all([
      this.fetchJson(
        `${this.apiBase}/lyric?os=pc&id=${encodeURIComponent(t)}&lv=-1&kv=-1&tv=-1`
      ),
      this.fetchJson(
        `${this.apiBase}/detail?ids=%5B${encodeURIComponent(t)}%5D`
      )
    ]), o = r?.songs?.[0];
    return {
      url: String(n.url),
      lyric: i?.lrc?.lyric ? String(i.lrc.lyric) : void 0,
      cover: o?.album?.picUrl ? String(o.album.picUrl) : void 0,
      name: "",
      artist: "",
      source: this.id
    };
  }
  /**
   * Search + resolve + probe in one call.
   * Iterates search results until finding one with a playable URL.
   */
  async searchAndResolve(t, s) {
    const n = s ? `${t} ${s}` : t, i = await this.search(n);
    if (i.length === 0) return null;
    for (const r of i) {
      const o = await this.resolve(r.id, r.picId);
      if (!o) continue;
      if (!await this.probeAudio(o.url)) {
        console.warn(`[NetEase] audio probe failed for id=${r.id}, trying next`);
        continue;
      }
      return o.name = r.name, o.artist = r.artist, o;
    }
    return console.warn(`[NetEase] searchAndResolve: no playable result for "${n}"`), null;
  }
}
class bc {
  constructor(t) {
    this.id = "local", this.name = "本地文件", this.storage = t?.storage ?? null;
  }
  async search(t) {
    return [];
  }
  async resolve(t, s) {
    if (!this.storage) return null;
    const n = await this.storage.getItem("stmp:audio:" + t);
    return n ? {
      url: URL.createObjectURL(n),
      name: "",
      artist: "",
      source: this.id
    } : null;
  }
}
class _c {
  constructor(t) {
    this.id = "custom", this.name = "自定义 API", this.searchURL = t?.searchURL, this.resolveURL = t?.resolveURL;
  }
  async fetchJson(t, s = 1e4) {
    try {
      const n = new AbortController(), i = setTimeout(() => n.abort(), s), r = await fetch(t, { signal: n.signal });
      return clearTimeout(i), r.ok ? await r.json() : null;
    } catch {
      return null;
    }
  }
  async search(t) {
    if (!this.searchURL) return [];
    const s = this.searchURL.replace("{keyword}", encodeURIComponent(t)), n = await this.fetchJson(s);
    return Array.isArray(n) ? n.map((i) => ({
      id: String(i.id ?? ""),
      name: String(i.name ?? ""),
      artist: String(i.artist ?? ""),
      duration: i.duration ? Number(i.duration) : void 0,
      provider: this.id
    })) : [];
  }
  async resolve(t, s) {
    if (!this.resolveURL) return null;
    const n = this.resolveURL.replace("{id}", encodeURIComponent(t)), i = await this.fetchJson(n);
    return !i || !i.url ? null : {
      url: String(i.url),
      lyric: i.lyric ? String(i.lyric) : void 0,
      cover: i.cover ? String(i.cover) : void 0,
      name: String(i.name ?? ""),
      artist: String(i.artist ?? ""),
      source: this.id
    };
  }
}
function So(e) {
  const s = e.filter((n) => n.enabled).sort((n, i) => n.priority - i.priority).map((n) => {
    const i = n.config ?? {};
    switch (n.id) {
      case "netease":
        return new yc({ baseURL: i.baseURL, apiBase: i.apiBase });
      case "local":
        return new bc({
          storage: i.storage ? i.storage : void 0
        });
      case "custom":
        return new _c({
          searchURL: i.searchURL,
          resolveURL: i.resolveURL
        });
      default:
        return null;
    }
  }).filter((n) => n !== null);
  return new vc(s);
}
const xc = {
  "No Song": "未播放",
  "show lyrics": "显示歌词",
  List: "列表",
  Search: "搜索",
  "Search Song...": "搜索歌曲...",
  "Searching...": "搜索中...",
  "No results": "无结果",
  "Type a song name to search": "输入歌名进行搜索",
  "No Songs": "暂无歌曲",
  "From Chat": "来自聊天",
  "My List": "我的列表",
  "Local Files": "本地文件",
  "Add local file": "添加本地文件",
  Retry: "重试",
  Previous: "上一首",
  Next: "下一首",
  Play: "播放",
  Pause: "暂停",
  "Toggle play mode": "切换播放模式",
  "Mute / Unmute": "静音/取消静音",
  "Collapse panel": "收起面板",
  "Expand panel": "展开面板",
  Playlist: "播放列表",
  Close: "关闭",
  Added: "已添加",
  "Add to list": "加入列表",
  "Cannot play": "无法播放",
  "Widget Mode": "播放器模式",
  Dock: "吸附",
  Drag: "拖动",
  Hidden: "隐藏",
  Providers: "数据源",
  "Default Volume": "默认音量",
  "Default Play Mode": "默认播放模式",
  "Auto-play on new cue": "新提示自动播放",
  "Custom Cue Rules (Regex)": "自定义提示规则 (正则)",
  "Add regex rule...": "添加正则规则...",
  Data: "数据管理",
  "Clear cache": "清理缓存",
  "Export data": "导出数据",
  "Import data": "导入数据",
  "List Loop": "列表循环",
  Random: "随机",
  "Single Loop": "单曲循环",
  NetEase: "网易云",
  "Custom API": "自定义API",
  "API baseURL": "API 地址",
  "Search URL": "搜索接口",
  "Resolve URL": "解析接口",
  "Cache cleared": "缓存已清理",
  "Data exported": "数据已导出",
  "Data imported": "数据已导入",
  "Import failed": "导入失败",
  "Invalid JSON": "JSON 格式错误",
  Playback: "播放",
  "AI Cue": "AI 点歌"
};
let Nt = null;
function wc() {
  if (Nt) return Nt;
  try {
    if (typeof SillyTavern < "u") {
      const e = SillyTavern.getContext();
      e?.getCurrentLocale && (Nt = e.getCurrentLocale());
    }
  } catch {
  }
  return Nt || (Nt = (typeof navigator < "u" ? navigator.language || navigator.userLanguage : "en")?.toLowerCase() || "en"), Nt;
}
function U(e) {
  return wc().startsWith("zh") ? xc[e] ?? e : e;
}
function Ls() {
  return `stmp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
const Cs = /* @__PURE__ */ dn("playlist", {
  state: () => ({
    list: [],
    currentIndex: -1,
    chatIndexer: null,
    chatId: null
  }),
  getters: {
    current(e) {
      return e.currentIndex >= 0 ? e.list[e.currentIndex] ?? null : null;
    },
    isEmpty(e) {
      return e.list.length === 0;
    },
    playMode() {
      return Ie().settings.playMode;
    }
  },
  actions: {
    init(e) {
      this.chatIndexer = e;
    },
    setChatId(e) {
      this.chatId = e, this.list = this.list.filter((n) => n.source !== "chat"), this.loadFromStorage();
      const s = Ie().storage;
      if (s) {
        const n = s.getMetadata(Yi);
        n && n.chatId === e && this.chatIndexer?.setCursor(e, n.lastScannedMessageId);
      }
    },
    loadFromStorage() {
      const t = Ie().storage;
      if (!t || !this.chatId) return;
      const s = t.getMetadata(Xi);
      if (s && Array.isArray(s)) {
        const n = s.filter((i) => i && i.source === "user");
        this.list = [...this.list.filter((i) => i.source !== "user"), ...n];
      }
    },
    addItem(e) {
      this.list.push(e), e.source === "user" && this.saveUserList();
    },
    removeItem(e) {
      if (e < 0 || e >= this.list.length) return;
      const t = this.list.splice(e, 1)[0];
      t && t.source === "user" && this.saveUserList(), e === this.currentIndex ? this.currentIndex = -1 : e < this.currentIndex && this.currentIndex--;
    },
    addFromCue(e, t) {
      const s = {
        id: Ls(),
        song: e.song,
        artist: e.artist,
        source: "chat",
        messageId: t,
        addedAt: Date.now()
      };
      this.list.push(s);
    },
    addFromSearch(e) {
      const t = {
        id: Ls(),
        song: e.name,
        artist: e.artist,
        source: "user",
        providerId: e.provider,
        providerTrackId: e.id,
        providerPicId: e.picId,
        addedAt: Date.now()
      };
      this.list.push(t), this.saveUserList();
    },
    addLocalFile(e, t) {
      const s = {
        id: Ls(),
        song: e,
        source: "local",
        localBlobKey: t,
        addedAt: Date.now()
      };
      this.list.push(s);
    },
    play(e) {
      e < 0 || e >= this.list.length || (this.currentIndex = e, this.resolveAndPlay(e));
    },
    next() {
      if (this.list.length === 0) return;
      const e = this.playMode;
      let t = this.currentIndex;
      if (e === "single")
        t = this.currentIndex;
      else if (e === "random")
        if (this.list.length === 1)
          t = 0;
        else {
          for (let s = 0; s < 5; s++) {
            const n = Math.floor(Math.random() * this.list.length);
            if (n !== this.currentIndex) {
              t = n;
              break;
            }
          }
          t === this.currentIndex && (t = (this.currentIndex + 1) % this.list.length);
        }
      else
        t = this.currentIndex + 1, t >= this.list.length && (t = 0);
      this.play(t);
    },
    prev() {
      if (this.list.length === 0) return;
      let e = this.currentIndex - 1;
      e < 0 && (e = this.list.length - 1), this.play(e);
    },
    async resolveAndPlay(e) {
      const t = this.list[e];
      if (!t) return;
      const s = Ie(), n = s.storage;
      if (!n) return;
      let i = null;
      const r = So(s.settings.providers);
      if (t.source === "local" && t.localBlobKey) {
        const l = await n.getBlob(t.localBlobKey);
        l && (i = {
          url: URL.createObjectURL(l),
          name: t.song,
          artist: t.artist ?? "",
          source: "local"
        });
      }
      if (!i && t.song && (i = await r.searchAndResolve(t.song, t.artist), i && (t.providerId = i.source)), !i) {
        console.warn(`[playlist] resolve failed for "${t.song}"`), typeof toastr < "u" && toastr.warning(`${U("Cannot play")}: ${t.song}`);
        return;
      }
      await kt().loadAndPlay(i);
    },
    handleNewCues(e) {
      if (e.length === 0) return;
      const t = Ie();
      let s = null;
      for (const n of e)
        for (const i of n.cues) {
          const r = {
            id: Ls(),
            song: i.song,
            artist: i.artist,
            source: "chat",
            messageId: n.messageId,
            addedAt: Date.now()
          };
          this.list.push(r), s = r;
        }
      if (t.settings.autoPlayOnNewCue && s) {
        const n = this.list.indexOf(s);
        n >= 0 && this.play(n);
      }
    },
    handleMessageUpdate(e) {
      if (!this.chatIndexer || !this.chatId) return;
      const t = Ie(), s = this.chatIndexer.scanMessage(
        this.chatId,
        e,
        t.settings.customCueRules
      ), n = this.list.map((o, l) => o.messageId === e ? l : -1).filter((o) => o >= 0);
      if (n.length === 0) {
        s.cue && this.addFromCue(s.cue, e);
        return;
      }
      if (!s.cue) {
        for (const o of [...n].reverse())
          this.removeItem(o);
        return;
      }
      const i = n[0], r = this.list[i];
      r.song = s.cue.song, r.artist = s.cue.artist;
      for (const o of [...n].reverse())
        o !== i && this.removeItem(o);
    },
    handleMessageDelete(e) {
      const t = this.list.map((s, n) => s.messageId === e ? n : -1).filter((s) => s >= 0);
      for (const s of [...t].reverse())
        this.removeItem(s);
    },
    saveUserList() {
      const t = Ie().storage;
      if (!t || !this.chatId) return;
      const s = this.list.filter((n) => n.source === "user");
      t.setMetadata(Xi, s);
    },
    getCursor() {
      return !this.chatIndexer || !this.chatId ? -1 : this.chatIndexer.getCursor(this.chatId);
    },
    setCursor(e) {
      if (!this.chatIndexer || !this.chatId) return;
      this.chatIndexer.setCursor(this.chatId, e);
      const s = Ie().storage;
      s && s.setMetadata(Yi, {
        chatId: this.chatId,
        lastScannedMessageId: e,
        updatedAt: Date.now()
      });
    }
  }
}), kt = /* @__PURE__ */ dn("player", {
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
      const e = new hc();
      this.audioEngine = e;
      const t = kt();
      e.on("timeupdate", () => {
        if (!e) return;
        t.currentTime = e.currentTime, t.duration = e.duration;
        const s = qi(t.lyrics, e.currentTime), n = s ? t.lyrics.indexOf(s) : -1;
        t.currentLyricIndex = n;
      }), e.on("ended", () => {
        Cs().next();
      }), e.on("play", () => {
        t.isPlaying = !0;
      }), e.on("pause", () => {
        t.isPlaying = !1;
      });
    },
    async loadAndPlay(e) {
      this.audioEngine || this.init();
      const t = this.audioEngine;
      t.load(e.url), this.currentTrack = e, e.lyric ? this.updateLyrics(e.lyric) : (this.lyrics = [], this.currentLyricIndex = -1), await t.play(), e.cover;
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
    seek(e) {
      this.audioEngine?.seek(e);
    },
    setVolume(e) {
      this.volume = e, this.audioEngine?.setVolume(e / 100), Ie().setVolume(e);
    },
    updateLyrics(e) {
      this.lyrics = pc(e), this.currentLyricIndex = -1;
    },
    getActiveLyric() {
      return qi(this.lyrics, this.currentTime);
    },
    destroy() {
      this.audioEngine?.destroy(), this.audioEngine = null, this.isPlaying = !1, this.currentTime = 0, this.duration = 0, this.lyrics = [], this.currentLyricIndex = -1, this.currentTrack = null;
    }
  }
}), Sc = /* @__PURE__ */ dn("search", {
  state: () => ({
    keyword: "",
    results: [],
    isSearching: !1,
    error: null
  }),
  actions: {
    setKeyword(e) {
      this.keyword = e;
    },
    async search(e) {
      if (!this.keyword.trim()) {
        this.results = [];
        return;
      }
      this.isSearching = !0, this.error = null;
      try {
        this.results = await e.searchAll(this.keyword);
      } catch (t) {
        this.error = t instanceof Error ? t.message : String(t), this.results = [];
      } finally {
        this.isSearching = !1;
      }
    },
    clear() {
      this.keyword = "", this.results = [], this.error = null;
    }
  }
}), Cc = ["width", "height"], Ic = {
  key: 0,
  points: "6 3 20 12 6 21 6 3",
  fill: "currentColor",
  stroke: "none"
}, Ec = {
  key: 10,
  points: "6 9 12 15 18 9"
}, Tc = {
  key: 11,
  points: "18 15 12 9 6 15"
}, Ac = {
  key: 15,
  points: "20 6 9 17 4 12"
}, Mc = /* @__PURE__ */ _t({
  __name: "Icon",
  props: {
    name: {},
    size: {}
  },
  setup(e) {
    return (t, s) => (N(), H("svg", {
      width: e.size || 18,
      height: e.size || 18,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: "stmp-icon"
    }, [
      e.name === "play" ? (N(), H("polygon", Ic)) : e.name === "pause" ? (N(), H(ee, { key: 1 }, [
        s[0] || (s[0] = p("rect", {
          x: "6",
          y: "4",
          width: "4",
          height: "16",
          rx: "1",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[1] || (s[1] = p("rect", {
          x: "14",
          y: "4",
          width: "4",
          height: "16",
          rx: "1",
          fill: "currentColor",
          stroke: "none"
        }, null, -1))
      ], 64)) : e.name === "prev" ? (N(), H(ee, { key: 2 }, [
        s[2] || (s[2] = p("polygon", {
          points: "19 20 9 12 19 4 19 20",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[3] || (s[3] = p("line", {
          x1: "5",
          y1: "19",
          x2: "5",
          y2: "5"
        }, null, -1))
      ], 64)) : e.name === "next" ? (N(), H(ee, { key: 3 }, [
        s[4] || (s[4] = p("polygon", {
          points: "5 4 15 12 5 20 5 4",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[5] || (s[5] = p("line", {
          x1: "19",
          y1: "5",
          x2: "19",
          y2: "19"
        }, null, -1))
      ], 64)) : e.name === "repeat" ? (N(), H(ee, { key: 4 }, [
        s[6] || (s[6] = p("polyline", { points: "17 1 21 5 17 9" }, null, -1)),
        s[7] || (s[7] = p("path", { d: "M3 11V9a4 4 0 0 1 4-4h14" }, null, -1)),
        s[8] || (s[8] = p("polyline", { points: "7 23 3 19 7 15" }, null, -1)),
        s[9] || (s[9] = p("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" }, null, -1))
      ], 64)) : e.name === "repeat-one" ? (N(), H(ee, { key: 5 }, [
        s[10] || (s[10] = Ps('<polyline points="17 1 21 5 17 9" data-v-4bfc4099></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14" data-v-4bfc4099></path><polyline points="7 23 3 19 7 15" data-v-4bfc4099></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3" data-v-4bfc4099></path><text x="12" y="14" text-anchor="middle" font-size="8" fill="currentColor" stroke="none" font-weight="bold" data-v-4bfc4099>1</text>', 5))
      ], 64)) : e.name === "shuffle" ? (N(), H(ee, { key: 6 }, [
        s[11] || (s[11] = Ps('<polyline points="16 3 21 3 21 8" data-v-4bfc4099></polyline><line x1="4" y1="20" x2="21" y2="3" data-v-4bfc4099></line><polyline points="21 16 21 21 16 21" data-v-4bfc4099></polyline><line x1="15" y1="15" x2="21" y2="21" data-v-4bfc4099></line><line x1="4" y1="4" x2="9" y2="9" data-v-4bfc4099></line>', 5))
      ], 64)) : e.name === "search" ? (N(), H(ee, { key: 7 }, [
        s[12] || (s[12] = p("circle", {
          cx: "11",
          cy: "11",
          r: "8"
        }, null, -1)),
        s[13] || (s[13] = p("line", {
          x1: "21",
          y1: "21",
          x2: "16.65",
          y2: "16.65"
        }, null, -1))
      ], 64)) : e.name === "plus" ? (N(), H(ee, { key: 8 }, [
        s[14] || (s[14] = p("line", {
          x1: "12",
          y1: "5",
          x2: "12",
          y2: "19"
        }, null, -1)),
        s[15] || (s[15] = p("line", {
          x1: "5",
          y1: "12",
          x2: "19",
          y2: "12"
        }, null, -1))
      ], 64)) : e.name === "x" ? (N(), H(ee, { key: 9 }, [
        s[16] || (s[16] = p("line", {
          x1: "18",
          y1: "6",
          x2: "6",
          y2: "18"
        }, null, -1)),
        s[17] || (s[17] = p("line", {
          x1: "6",
          y1: "6",
          x2: "18",
          y2: "18"
        }, null, -1))
      ], 64)) : e.name === "chevron-down" ? (N(), H("polyline", Ec)) : e.name === "chevron-up" ? (N(), H("polyline", Tc)) : e.name === "music" ? (N(), H(ee, { key: 12 }, [
        s[18] || (s[18] = p("path", { d: "M9 18V5l12-2v13" }, null, -1)),
        s[19] || (s[19] = p("circle", {
          cx: "6",
          cy: "18",
          r: "3"
        }, null, -1)),
        s[20] || (s[20] = p("circle", {
          cx: "18",
          cy: "16",
          r: "3"
        }, null, -1))
      ], 64)) : e.name === "volume" ? (N(), H(ee, { key: 13 }, [
        s[21] || (s[21] = p("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[22] || (s[22] = p("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1)),
        s[23] || (s[23] = p("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }, null, -1))
      ], 64)) : e.name === "volume-mute" ? (N(), H(ee, { key: 14 }, [
        s[24] || (s[24] = p("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[25] || (s[25] = p("line", {
          x1: "23",
          y1: "9",
          x2: "17",
          y2: "15"
        }, null, -1)),
        s[26] || (s[26] = p("line", {
          x1: "17",
          y1: "9",
          x2: "23",
          y2: "15"
        }, null, -1))
      ], 64)) : e.name === "check" ? (N(), H("polyline", Ac)) : e.name === "loader" ? (N(), H(ee, { key: 16 }, [
        s[27] || (s[27] = Ps('<line x1="12" y1="2" x2="12" y2="6" data-v-4bfc4099></line><line x1="12" y1="18" x2="12" y2="22" data-v-4bfc4099></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" data-v-4bfc4099></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" data-v-4bfc4099></line><line x1="2" y1="12" x2="6" y2="12" data-v-4bfc4099></line><line x1="18" y1="12" x2="22" y2="12" data-v-4bfc4099></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" data-v-4bfc4099></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" data-v-4bfc4099></line>', 8))
      ], 64)) : e.name === "list-music" ? (N(), H(ee, { key: 17 }, [
        s[28] || (s[28] = Ps('<path d="M3 12h11" data-v-4bfc4099></path><path d="M3 6h11" data-v-4bfc4099></path><path d="M3 18h7" data-v-4bfc4099></path><path d="M16 8v13" data-v-4bfc4099></path><circle cx="14" cy="21" r="2" data-v-4bfc4099></circle><path d="M16 8l5-2v3" data-v-4bfc4099></path>', 6))
      ], 64)) : Le("", !0)
    ], 8, Cc));
  }
}), xt = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, i] of t)
    s[n] = i;
  return s;
}, _e = /* @__PURE__ */ xt(Mc, [["__scopeId", "data-v-4bfc4099"]]), Pc = { class: "stmp-collapsed-bar" }, Rc = { class: "stmp-collapsed-title" }, Lc = ["aria-label"], $c = /* @__PURE__ */ _t({
  __name: "CollapsedBar",
  setup(e) {
    const t = kt(), s = yt(() => t.currentTrack?.name || U("No Song"));
    return (n, i) => (N(), H("div", Pc, [
      ne(_e, {
        name: "music",
        size: 14,
        class: "stmp-collapsed-icon"
      }),
      p("span", Rc, Q(s.value), 1),
      p("button", {
        class: "stmp-icon-btn",
        "aria-label": C(t).isPlaying ? C(U)("Pause") : C(U)("Play"),
        onClick: i[0] || (i[0] = Pt((r) => C(t).togglePlay(), ["stop"]))
      }, [
        ne(_e, {
          name: C(t).isPlaying ? "pause" : "play",
          size: 16
        }, null, 8, ["name"])
      ], 8, Lc)
    ]));
  }
}), kc = /* @__PURE__ */ xt($c, [["__scopeId", "data-v-d0f4f061"]]), Oc = { class: "stmp-playlist" }, Dc = { class: "stmp-upload-area" }, Nc = ["aria-label"], Fc = {
  key: 0,
  class: "stmp-empty"
}, Uc = { class: "stmp-group-label" }, Vc = ["onClick"], Hc = { class: "stmp-item-index" }, jc = { class: "stmp-item-info" }, Bc = { class: "stmp-item-song" }, Kc = {
  key: 0,
  class: "stmp-item-artist"
}, Wc = ["onClick"], zc = /* @__PURE__ */ _t({
  __name: "PlaylistView",
  setup(e) {
    const t = Cs(), s = Ie(), n = /* @__PURE__ */ we(null), i = () => {
      n.value?.click();
    }, r = async (c) => {
      const h = c.target;
      if (!h.files || !h.files[0]) return;
      const v = h.files[0], m = `stmp:audio:${Date.now()}-${v.name}`, L = s.storage;
      L && (await L.setBlob(m, v), t.addLocalFile(v.name, m)), h.value = "";
    }, o = yt(() => {
      const c = {
        chat: [],
        user: [],
        local: []
      };
      return t.list.forEach((h, v) => {
        c[h.source] && c[h.source].push({ index: v, item: h });
      }), c;
    }), l = {
      chat: U("From Chat"),
      user: U("My List"),
      local: U("Local Files")
    };
    function a(c) {
      t.play(c);
    }
    function d(c) {
      t.removeItem(c);
    }
    return (c, h) => (N(), H("div", Oc, [
      p("div", Dc, [
        p("input", {
          type: "file",
          accept: "audio/*",
          ref_key: "fileInputRef",
          ref: n,
          onChange: r,
          style: { display: "none" }
        }, null, 544),
        p("button", {
          class: "stmp-upload-btn",
          "aria-label": C(U)("Add local file"),
          onClick: i
        }, " + " + Q(C(U)("Add local file")), 9, Nc)
      ]),
      C(t).isEmpty ? (N(), H("div", Fc, Q(C(U)("No Songs")), 1)) : (N(), H(ee, { key: 1 }, ct(["chat", "user", "local"], (v) => p("div", {
        key: v,
        class: "stmp-group"
      }, [
        o.value[v].length ? (N(), H(ee, { key: 0 }, [
          p("div", Uc, Q(l[v]), 1),
          (N(!0), H(ee, null, ct(o.value[v], (m) => (N(), H("div", {
            key: m.item.id,
            class: xe(["stmp-item", { active: m.index === C(t).currentIndex }]),
            onClick: (L) => a(m.index)
          }, [
            p("span", Hc, Q(m.index + 1), 1),
            p("div", jc, [
              p("span", Bc, Q(m.item.song), 1),
              m.item.artist ? (N(), H("span", Kc, Q(m.item.artist), 1)) : Le("", !0)
            ]),
            p("button", {
              class: "stmp-item-del",
              onClick: Pt((L) => d(m.index), ["stop"])
            }, [
              ne(_e, {
                name: "x",
                size: 14
              })
            ], 8, Wc)
          ], 10, Vc))), 128))
        ], 64)) : Le("", !0)
      ])), 64))
    ]));
  }
}), Jc = /* @__PURE__ */ xt(zc, [["__scopeId", "data-v-6157de27"]]), Gc = { class: "stmp-search" }, qc = { class: "stmp-search-bar" }, Yc = ["placeholder"], Xc = ["disabled"], Zc = {
  key: 0,
  class: "stmp-search-error"
}, Qc = ["aria-label"], eu = {
  key: 1,
  class: "stmp-search-loading"
}, tu = {
  key: 2,
  class: "stmp-search-empty"
}, su = {
  key: 3,
  class: "stmp-search-hint"
}, nu = {
  key: 4,
  class: "stmp-results"
}, iu = ["onClick"], ru = { class: "stmp-result-name" }, ou = {
  key: 0,
  class: "stmp-result-artist"
}, lu = ["aria-label", "onClick"], au = /* @__PURE__ */ _t({
  __name: "SearchView",
  setup(e) {
    const t = Sc(), s = Cs(), n = Ie(), i = /* @__PURE__ */ we(t.keyword), r = /* @__PURE__ */ we(/* @__PURE__ */ new Set()), o = /* @__PURE__ */ we(null);
    async function l() {
      t.setKeyword(i.value);
      const m = So(n.settings.providers);
      await t.search(m);
    }
    const a = () => {
      l();
    };
    function d(m) {
      const L = m.provider + m.id;
      if (o.value === L) return;
      o.value = L;
      const T = s.list.length;
      s.addFromSearch(m);
      const F = s.list.length - 1;
      F >= T && s.play(F), setTimeout(() => {
        r.value.add(L), o.value = null;
      }, 600);
    }
    function c(m) {
      const L = m.provider + m.id;
      r.value.has(L) || (s.addFromSearch(m), r.value.add(L));
    }
    function h(m) {
      return r.value.has(m.provider + m.id);
    }
    function v(m) {
      return o.value === m.provider + m.id;
    }
    return (m, L) => (N(), H("div", Gc, [
      p("div", qc, [
        st(p("input", {
          "onUpdate:modelValue": L[0] || (L[0] = (T) => i.value = T),
          class: "stmp-search-input",
          placeholder: C(U)("Search Song..."),
          onKeydown: vo(l, ["enter"])
        }, null, 40, Yc), [
          [ss, i.value]
        ]),
        p("button", {
          class: "stmp-icon-btn",
          disabled: C(t).isSearching,
          onClick: l
        }, [
          C(t).isSearching ? (N(), $t(_e, {
            key: 1,
            name: "loader",
            size: 16,
            class: "stmp-spin"
          })) : (N(), $t(_e, {
            key: 0,
            name: "search",
            size: 16
          }))
        ], 8, Xc)
      ]),
      C(t).error ? (N(), H("div", Zc, [
        p("span", null, Q(C(t).error), 1),
        p("button", {
          class: "stmp-retry-btn",
          "aria-label": C(U)("Retry"),
          onClick: a
        }, Q(C(U)("Retry")), 9, Qc)
      ])) : Le("", !0),
      C(t).isSearching ? (N(), H("div", eu, Q(C(U)("Searching...")), 1)) : i.value && !C(t).results.length ? (N(), H("div", tu, Q(C(U)("No results")), 1)) : !i.value && !C(t).results.length ? (N(), H("div", su, Q(C(U)("Type a song name to search")), 1)) : Le("", !0),
      C(t).results.length ? (N(), H("div", nu, [
        (N(!0), H(ee, null, ct(C(t).results, (T) => (N(), H("div", {
          key: T.provider + T.id,
          class: xe(["stmp-result", { "stmp-result-playing": v(T) }])
        }, [
          p("div", {
            class: "stmp-result-info",
            onClick: (F) => d(T)
          }, [
            p("span", ru, Q(T.name), 1),
            T.artist ? (N(), H("span", ou, Q(T.artist), 1)) : Le("", !0)
          ], 8, iu),
          p("button", {
            class: xe(["stmp-icon-btn stmp-result-add", { added: h(T) }]),
            "aria-label": h(T) ? C(U)("Added") : C(U)("Add to list"),
            onClick: Pt((F) => c(T), ["stop"])
          }, [
            ne(_e, {
              name: h(T) ? "check" : "plus",
              size: 16
            }, null, 8, ["name"])
          ], 10, lu)
        ], 2))), 128))
      ])) : Le("", !0)
    ]));
  }
}), cu = /* @__PURE__ */ xt(au, [["__scopeId", "data-v-a8d156af"]]), uu = { class: "stmp-panel" }, fu = { class: "stmp-topbar stmp-drag-handle" }, du = ["aria-label"], hu = { class: "stmp-cover-large" }, pu = ["src"], gu = {
  key: 1,
  class: "stmp-cover-placeholder"
}, mu = { class: "stmp-track-name" }, vu = { class: "stmp-track-artist" }, yu = { class: "stmp-lyric-header" }, bu = { class: "stmp-track-name" }, _u = { class: "stmp-track-artist" }, xu = {
  key: 0,
  class: "stmp-lyric-empty"
}, wu = { class: "stmp-progress" }, Su = ["value"], Cu = { class: "stmp-time" }, Iu = { class: "stmp-controls" }, Eu = { class: "stmp-ctrl-side stmp-search-side" }, Tu = ["aria-label"], Au = ["aria-label"], Mu = ["aria-label"], Pu = ["aria-label"], Ru = ["aria-label"], Lu = ["aria-label"], $u = { class: "stmp-ctrl-side stmp-volume-side" }, ku = ["aria-label"], Ou = ["value"], Du = {
  key: 0,
  class: "stmp-overlay"
}, Nu = { class: "stmp-overlay-header" }, Fu = { class: "stmp-overlay-title" }, Uu = ["aria-label"], Vu = { class: "stmp-overlay-body" }, Hu = /* @__PURE__ */ _t({
  __name: "PlayerPanel",
  emits: ["collapse"],
  setup(e) {
    const t = kt(), s = Cs(), n = Ie(), i = /* @__PURE__ */ we("cover"), r = /* @__PURE__ */ we(null), o = /* @__PURE__ */ we(!1), l = /* @__PURE__ */ we(!1);
    let a = null;
    const d = yt(() => t.currentTrack?.cover || ""), c = () => {
      o.value = !0;
    };
    mt(
      () => t.currentTrack,
      () => {
        o.value = !1;
      }
    );
    const h = yt(
      () => t.duration > 0 ? t.currentTime / t.duration * 100 : 0
    ), v = /* @__PURE__ */ we(0), m = /* @__PURE__ */ we([]), L = /* @__PURE__ */ we(null);
    function T(b, R) {
      b && (m.value[R] = b);
    }
    async function F() {
      await rt();
      const b = t.currentLyricIndex, R = L.value;
      if (!R || b < 0) {
        v.value = 0;
        return;
      }
      const W = m.value[b];
      if (!W) return;
      const me = W.offsetTop, ie = W.offsetHeight, X = R.clientHeight;
      v.value = me - X / 2 + ie / 2;
    }
    mt(() => t.currentLyricIndex, F), mt(() => t.lyrics, () => {
      m.value = [], F();
    });
    function O(b) {
      const R = Math.floor(b / 60), W = Math.floor(b % 60);
      return R + ":" + W.toString().padStart(2, "0");
    }
    function S(b) {
      const R = b.target;
      t.seek(Number(R.value) / 100 * t.duration);
    }
    const V = ["list", "random", "single"], k = {
      list: "repeat",
      random: "shuffle",
      single: "repeat-one"
    };
    function J() {
      const b = n.settings.playMode, R = V.indexOf(b), W = V[(R + 1) % V.length];
      n.setPlayMode(W);
    }
    function Z(b) {
      const R = b.target;
      t.setVolume(Number(R.value));
    }
    function le() {
      a && clearTimeout(a), l.value = !0;
    }
    function G() {
      a = setTimeout(() => {
        l.value = !1;
      }, 300);
    }
    function P() {
      t.volume > 0 ? t.setVolume(0) : t.setVolume(65);
    }
    function A(b) {
      r.value === b ? r.value = null : r.value = b;
    }
    function B() {
      r.value = null;
    }
    return (b, R) => (N(), H("div", uu, [
      p("div", fu, [
        R[7] || (R[7] = p("div", { class: "stmp-topbar-spacer" }, null, -1)),
        p("button", {
          class: "stmp-icon-btn",
          "aria-label": C(U)("Collapse panel"),
          onClick: R[0] || (R[0] = Pt((W) => b.$emit("collapse"), ["stop"]))
        }, [
          ne(_e, {
            name: "chevron-down",
            size: 18
          })
        ], 8, du)
      ]),
      p("div", {
        class: "stmp-display",
        onClick: R[1] || (R[1] = (W) => i.value = i.value === "cover" ? "lyric" : "cover")
      }, [
        p("div", {
          class: xe(["stmp-cover-mode", { hidden: i.value !== "cover" }])
        }, [
          p("div", hu, [
            d.value && !o.value ? (N(), H("img", {
              key: 0,
              src: d.value,
              alt: "cover",
              onError: c
            }, null, 40, pu)) : (N(), H("div", gu, [
              ne(_e, {
                name: "music",
                size: 48
              })
            ]))
          ]),
          p("div", mu, Q(C(t).currentTrack?.name || C(U)("No Song")), 1),
          p("div", vu, Q(C(t).currentTrack?.artist || " "), 1)
        ], 2),
        p("div", {
          class: xe(["stmp-lyric-mode", { hidden: i.value !== "lyric" }])
        }, [
          p("div", yu, [
            p("div", bu, Q(C(t).currentTrack?.name || C(U)("No Song")), 1),
            p("div", _u, Q(C(t).currentTrack?.artist || " "), 1)
          ]),
          p("div", {
            ref_key: "lyricWindowRef",
            ref: L,
            class: "stmp-lyric-window"
          }, [
            C(t).lyrics.length === 0 ? (N(), H("div", xu, [
              ne(_e, {
                name: "music",
                size: 18
              })
            ])) : (N(), H("div", {
              key: 1,
              class: "stmp-lyric-scroll",
              style: en({ transform: `translateY(-${v.value}px)` })
            }, [
              (N(!0), H(ee, null, ct(C(t).lyrics, (W, me) => (N(), H("div", {
                key: me,
                ref_for: !0,
                ref: (ie) => T(ie, me),
                class: xe(["stmp-lyric-line", { "stmp-lyric-active": me === C(t).currentLyricIndex }])
              }, Q(W.text), 3))), 128))
            ], 4))
          ], 512)
        ], 2)
      ]),
      p("div", wu, [
        p("input", {
          type: "range",
          min: "0",
          max: "100",
          step: "0.1",
          value: h.value,
          class: "stmp-range",
          onInput: S
        }, null, 40, Su),
        p("div", Cu, [
          p("span", null, Q(O(C(t).currentTime)), 1),
          p("span", null, Q(O(C(t).duration)), 1)
        ])
      ]),
      p("div", Iu, [
        p("div", Eu, [
          p("button", {
            class: xe(["stmp-ctrl-btn", { active: r.value === "search" }]),
            "aria-label": C(U)("Search"),
            onClick: R[2] || (R[2] = Pt((W) => A("search"), ["stop"]))
          }, [
            ne(_e, {
              name: "search",
              size: 18
            })
          ], 10, Tu)
        ]),
        p("button", {
          class: "stmp-ctrl-btn",
          "aria-label": C(U)("Toggle play mode"),
          onClick: J
        }, [
          ne(_e, {
            name: k[C(n).settings.playMode],
            size: 18
          }, null, 8, ["name"])
        ], 8, Au),
        p("button", {
          class: "stmp-ctrl-btn",
          "aria-label": C(U)("Previous"),
          onClick: R[3] || (R[3] = (W) => C(s).prev())
        }, [
          ne(_e, {
            name: "prev",
            size: 18
          })
        ], 8, Mu),
        p("button", {
          class: "stmp-ctrl-btn stmp-play-btn",
          "aria-label": C(t).isPlaying ? C(U)("Pause") : C(U)("Play"),
          onClick: R[4] || (R[4] = (W) => C(t).togglePlay())
        }, [
          ne(_e, {
            name: C(t).isPlaying ? "pause" : "play",
            size: 24
          }, null, 8, ["name"])
        ], 8, Pu),
        p("button", {
          class: "stmp-ctrl-btn",
          "aria-label": C(U)("Next"),
          onClick: R[5] || (R[5] = (W) => C(s).next())
        }, [
          ne(_e, {
            name: "next",
            size: 18
          })
        ], 8, Ru),
        p("button", {
          class: xe(["stmp-ctrl-btn", { active: r.value === "list" }]),
          "aria-label": C(U)("Playlist"),
          onClick: R[6] || (R[6] = Pt((W) => A("list"), ["stop"]))
        }, [
          ne(_e, {
            name: "list-music",
            size: 18
          })
        ], 10, Lu),
        p("div", $u, [
          p("div", {
            class: "stmp-volume-container",
            onMouseenter: le,
            onMouseleave: G
          }, [
            p("button", {
              class: "stmp-ctrl-btn",
              "aria-label": C(U)("Mute / Unmute"),
              onClick: P
            }, [
              ne(_e, {
                name: C(t).volume === 0 ? "volume-mute" : "volume",
                size: 18
              }, null, 8, ["name"])
            ], 8, ku),
            p("div", {
              class: xe(["stmp-volume-popup", { show: l.value }])
            }, [
              p("input", {
                type: "range",
                min: "0",
                max: "100",
                value: C(t).volume,
                class: "stmp-volume-vertical",
                orient: "vertical",
                onInput: Z
              }, null, 40, Ou)
            ], 2)
          ], 32)
        ])
      ]),
      ne(Pa, { name: "stmp-overlay" }, {
        default: kr(() => [
          r.value ? (N(), H("div", Du, [
            p("div", Nu, [
              p("span", Fu, Q(r.value === "list" ? C(U)("Playlist") : C(U)("Search")), 1),
              p("button", {
                class: "stmp-overlay-close",
                "aria-label": C(U)("Close"),
                onClick: Pt(B, ["stop"])
              }, [
                ne(_e, {
                  name: "x",
                  size: 16
                })
              ], 8, Uu)
            ]),
            p("div", Vu, [
              r.value === "list" ? (N(), $t(Jc, { key: 0 })) : (N(), $t(cu, { key: 1 }))
            ])
          ])) : Le("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), ju = /* @__PURE__ */ xt(Hu, [["__scopeId", "data-v-b6793b97"]]), Bu = /* @__PURE__ */ _t({
  __name: "App",
  setup(e) {
    const t = Ie(), s = kt(), n = /* @__PURE__ */ we(!1), i = /* @__PURE__ */ we(null);
    let r = null;
    const o = yt(() => t.settings.widgetMode === "dock"), l = yt(() => t.settings.widgetMode === "hidden"), a = (A) => {
      A.key === "Escape" && (n.value = !1), A.key === " " && A.target === document.body && (A.preventDefault(), s.togglePlay());
    };
    let d = 0, c = 0, h = 0, v = 0, m = !1, L = !1, T = null, F = null;
    function O(A) {
      if (o.value) return;
      const B = A.target;
      if (B.closest("input, .stmp-result, .stmp-item, .stmp-upload-btn, .stmp-search-input, .stmp-controls, .stmp-lyrics, .stmp-overlay, .stmp-display, .stmp-overlay-close") || n.value && (!B.closest(".stmp-drag-handle") || B.closest("button")) || !n.value && B.closest("button"))
        return;
      const b = i.value?.getBoundingClientRect();
      b && (d = A.clientX, c = A.clientY, h = b.left, v = b.top, m = !1, L = !0, i.value && (i.value.style.left = b.left + "px", i.value.style.top = b.top + "px", i.value.style.right = "auto", i.value.style.bottom = "auto"), T = S, F = V, document.addEventListener("pointermove", T), document.addEventListener("pointerup", F), A.preventDefault());
    }
    function S(A) {
      if (!i.value || !L) return;
      const B = A.clientX - d, b = A.clientY - c;
      (Math.abs(B) > 3 || Math.abs(b) > 3) && (m = !0);
      let R = h + B, W = v + b;
      const me = i.value.offsetWidth || 60, ie = i.value.offsetHeight || 40, X = window.innerWidth - me, ae = window.innerHeight - ie;
      R = Math.max(0, Math.min(R, X)), W = Math.max(0, Math.min(W, ae)), i.value.style.left = R + "px", i.value.style.top = W + "px";
    }
    function V() {
      if (L = !1, T && document.removeEventListener("pointermove", T), F && document.removeEventListener("pointerup", F), T = null, F = null, !m) {
        G();
        return;
      }
      if (i.value) {
        const A = i.value.getBoundingClientRect();
        t.setPosition({ x: A.left, y: A.top }), n.value && rt(() => k());
      }
    }
    function k() {
      if (!i.value) return;
      const A = i.value.getBoundingClientRect(), B = i.value.offsetWidth, b = i.value.offsetHeight;
      let R = A.left, W = A.top;
      R + B > window.innerWidth && (R = window.innerWidth - B), W + b > window.innerHeight && (W = window.innerHeight - b), R < 0 && (R = 0), W < 0 && (W = 0), i.value.style.left = R + "px", i.value.style.top = W + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", t.setPosition({ x: R, y: W });
    }
    function J() {
      if (!i.value || !o.value) return;
      const A = document.querySelector("#send_form");
      if (!A) return;
      const B = A.getBoundingClientRect(), b = i.value.offsetHeight || 38, R = Math.max(80, B.top - 8);
      i.value.style.maxHeight = R + "px";
      let W = B.top - Math.min(b, R);
      W < 4 && (W = 4), window.innerWidth <= 768 ? (i.value.style.left = B.left + "px", i.value.style.width = B.width + "px") : (i.value.style.left = B.left + "px", i.value.style.width = ""), i.value.style.top = W + "px", i.value.style.right = "auto", i.value.style.bottom = "auto";
    }
    function Z() {
      if (!i.value || o.value) return;
      const A = t.settings.position;
      A ? (i.value.style.left = A.x + "px", i.value.style.top = A.y + "px") : (i.value.style.right = "16px", i.value.style.top = "16px", i.value.style.left = "auto", i.value.style.bottom = "auto");
    }
    function le(A) {
      if (o.value && !n.value) {
        if (A.target.closest("button, input")) return;
        G();
      }
    }
    function G() {
      n.value = !n.value, rt(() => {
        o.value ? J() : t.settings.position && k();
      });
    }
    mt(() => t.settings.widgetMode, (A) => {
      rt(() => {
        A === "dock" ? J() : Z();
      });
    }), Qn(() => {
      rt(() => {
        o.value ? J() : Z();
      }), i.value && typeof ResizeObserver < "u" && (r = new ResizeObserver(() => {
        o.value && J();
      }), r.observe(i.value)), window.addEventListener("resize", P), window.addEventListener("keydown", a);
    });
    function P() {
      o.value ? rt(() => J()) : t.settings.position && rt(() => k());
    }
    return ei(() => {
      V(), r && (r.disconnect(), r = null), window.removeEventListener("resize", P), window.removeEventListener("keydown", a);
    }), (A, B) => l.value ? Le("", !0) : (N(), H("div", {
      key: 0,
      ref_key: "widgetRef",
      ref: i,
      class: xe(["stmp-widget", {
        "stmp-expanded": n.value,
        "stmp-collapsed": !n.value,
        "stmp-dock": o.value
      }]),
      onPointerdown: O,
      onClick: le
    }, [
      n.value ? (N(), $t(ju, {
        key: 1,
        onCollapse: G
      })) : (N(), $t(kc, { key: 0 }))
    ], 34));
  }
}), Ku = /* @__PURE__ */ xt(Bu, [["__scopeId", "data-v-5cfbb591"]]), Wu = { class: "stmp-switch-row" }, zu = {
  key: 0,
  class: "stmp-switch-label"
}, Ju = { class: "stmp-switch" }, Gu = ["checked"], qu = /* @__PURE__ */ _t({
  __name: "ToggleSwitch",
  props: {
    modelValue: { type: Boolean },
    label: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const s = t;
    function n(i) {
      const r = i.target;
      s("update:modelValue", r.checked);
    }
    return (i, r) => (N(), H("label", Wu, [
      e.label ? (N(), H("span", zu, Q(e.label), 1)) : Le("", !0),
      p("span", Ju, [
        p("input", {
          type: "checkbox",
          checked: e.modelValue,
          onChange: n
        }, null, 40, Gu),
        r[0] || (r[0] = p("span", { class: "stmp-switch-track" }, [
          p("span", { class: "stmp-switch-thumb" })
        ], -1))
      ])
    ]));
  }
}), Zi = /* @__PURE__ */ xt(qu, [["__scopeId", "data-v-d86a29bd"]]), Yu = { class: "stmp-settings" }, Xu = { class: "stmp-tab-bar" }, Zu = ["onClick"], Qu = { class: "stmp-tab-content" }, ef = { class: "stmp-tab-panel" }, tf = { class: "stmp-setting-group" }, sf = { class: "stmp-setting-label" }, nf = { class: "stmp-mode-toggle" }, rf = ["onClick"], of = { class: "stmp-setting-group" }, lf = { class: "stmp-setting-label" }, af = ["value"], cf = { class: "stmp-setting-group" }, uf = {
  class: "stmp-setting-label",
  for: "stmp-playmode"
}, ff = ["value"], df = ["value"], hf = { class: "stmp-tab-panel" }, pf = {
  key: 0,
  class: "stmp-provider-fields"
}, gf = ["onUpdate:modelValue", "placeholder"], mf = {
  key: 1,
  class: "stmp-provider-fields"
}, vf = ["onUpdate:modelValue", "placeholder"], yf = ["onUpdate:modelValue", "placeholder"], bf = { class: "stmp-tab-panel" }, _f = { class: "stmp-setting-group" }, xf = { class: "stmp-setting-label" }, wf = { class: "stmp-rules" }, Sf = ["onClick"], Cf = { class: "stmp-rule-add" }, If = ["placeholder"], Ef = { class: "stmp-tab-panel" }, Tf = { class: "stmp-data-btns" }, Af = /* @__PURE__ */ _t({
  __name: "SettingsView",
  setup(e) {
    const t = Ie(), s = /* @__PURE__ */ we("playback"), n = [
      { id: "playback", label: U("Playback"), icon: "fa-solid fa-music" },
      { id: "providers", label: U("Providers"), icon: "fa-solid fa-cloud" },
      { id: "cue", label: U("AI Cue"), icon: "fa-solid fa-wand-magic-sparkles" },
      { id: "data", label: U("Data"), icon: "fa-solid fa-database" }
    ], i = [
      { value: "list", label: U("List Loop") },
      { value: "random", label: U("Random") },
      { value: "single", label: U("Single Loop") }
    ], r = [
      { value: "dock", label: U("Dock"), icon: "fa-solid fa-grip-lines" },
      { value: "drag", label: U("Drag"), icon: "fa-solid fa-up-down-left-right" },
      { value: "hidden", label: U("Hidden"), icon: "fa-solid fa-eye-slash" }
    ];
    function o(F) {
      const O = F.target;
      t.setVolume(Number(O.value));
    }
    function l(F) {
      const O = F.target;
      t.setPlayMode(O.value);
    }
    const a = {
      netease: U("NetEase"),
      local: U("Local Files"),
      custom: U("Custom API")
    };
    function d(F) {
      const O = t.settings.providers.find((S) => S.id === F);
      O && (O.enabled = !O.enabled, t.save());
    }
    const c = /* @__PURE__ */ we("");
    function h() {
      const F = c.value.trim();
      F && (t.addCustomCueRule(F), c.value = "");
    }
    function v(F) {
      t.removeCustomCueRule(F);
    }
    const m = async () => {
      const F = t.storage;
      F && (await F.clearCache(), toastr.success(U("Cache cleared")));
    }, L = () => {
      const F = JSON.stringify(t.settings, null, 2), O = new Blob([F], { type: "application/json" }), S = URL.createObjectURL(O), V = document.createElement("a");
      V.href = S, V.download = "st-music-player-settings.json", V.click(), URL.revokeObjectURL(S);
    }, T = () => {
      const F = document.createElement("input");
      F.type = "file", F.accept = ".json", F.onchange = async (O) => {
        const S = O.target.files?.[0];
        if (!S) return;
        const V = await S.text();
        try {
          const k = JSON.parse(V);
          if (typeof k != "object" || k === null) throw new Error("Not an object");
          const J = ["volume", "playMode", "position", "widgetMode", "autoPlayOnNewCue", "providers", "customCueRules"], Z = {};
          for (const le of J)
            le in k && (Z[le] = k[le]);
          if (typeof Z.volume != "number" || Z.volume < 0 || Z.volume > 100)
            throw new Error("Invalid volume");
          if (typeof Z.playMode != "string" || !["list", "random", "single"].includes(Z.playMode))
            throw new Error("Invalid playMode");
          if (Z.providers && !Array.isArray(Z.providers))
            throw new Error("Invalid providers");
          if (Z.customCueRules && !Array.isArray(Z.customCueRules))
            throw new Error("Invalid customCueRules");
          Object.assign(t.settings, Z), t.save(), toastr.success(U("Data imported"));
        } catch (k) {
          console.error("Import failed", k), toastr.error(U("Import failed") + ": " + (k instanceof Error ? k.message : U("Invalid JSON")));
        }
      }, F.click();
    };
    return (F, O) => (N(), H("div", Yu, [
      p("div", Xu, [
        (N(), H(ee, null, ct(n, (S) => p("div", {
          key: S.id,
          class: xe(["stmp-tab", { active: s.value === S.id }]),
          onClick: (V) => s.value = S.id
        }, [
          p("i", {
            class: xe(S.icon)
          }, null, 2),
          p("span", null, Q(S.label), 1)
        ], 10, Zu)), 64))
      ]),
      p("div", Qu, [
        st(p("div", ef, [
          p("div", tf, [
            p("label", sf, Q(C(U)("Widget Mode")), 1),
            p("div", nf, [
              (N(), H(ee, null, ct(r, (S) => p("div", {
                key: S.value,
                class: xe(["menu_button menu_button_icon stmp-mode-btn", { toggled: C(t).settings.widgetMode === S.value }]),
                onClick: (V) => C(t).setWidgetMode(S.value)
              }, [
                p("i", {
                  class: xe(S.icon)
                }, null, 2),
                p("span", null, Q(S.label), 1)
              ], 10, rf)), 64))
            ])
          ]),
          p("div", of, [
            p("label", lf, Q(C(U)("Default Volume")) + ": " + Q(C(t).settings.volume), 1),
            p("input", {
              type: "range",
              min: "0",
              max: "100",
              value: C(t).settings.volume,
              onInput: o
            }, null, 40, af)
          ]),
          p("div", cf, [
            p("label", uf, Q(C(U)("Default Play Mode")), 1),
            p("select", {
              id: "stmp-playmode",
              class: "text_pole",
              value: C(t).settings.playMode,
              onChange: l
            }, [
              (N(), H(ee, null, ct(i, (S) => p("option", {
                key: S.value,
                value: S.value
              }, Q(S.label), 9, df)), 64))
            ], 40, ff)
          ]),
          ne(Zi, {
            "model-value": C(t).settings.autoPlayOnNewCue,
            label: C(U)("Auto-play on new cue"),
            "onUpdate:modelValue": O[0] || (O[0] = (S) => {
              C(t).settings.autoPlayOnNewCue = S, C(t).save();
            })
          }, null, 8, ["model-value", "label"])
        ], 512), [
          [Rs, s.value === "playback"]
        ]),
        st(p("div", hf, [
          (N(!0), H(ee, null, ct(C(t).settings.providers, (S) => (N(), H("div", {
            key: S.id,
            class: "stmp-provider-card"
          }, [
            ne(Zi, {
              "model-value": S.enabled,
              label: a[S.id] || S.id,
              "onUpdate:modelValue": () => d(S.id)
            }, null, 8, ["model-value", "label", "onUpdate:modelValue"]),
            S.id === "netease" && S.enabled ? (N(), H("div", pf, [
              st(p("input", {
                class: "text_pole",
                "onUpdate:modelValue": (V) => S.config.baseURL = V,
                placeholder: C(U)("API baseURL"),
                onChange: O[1] || (O[1] = (V) => C(t).save())
              }, null, 40, gf), [
                [ss, S.config.baseURL]
              ])
            ])) : Le("", !0),
            S.id === "custom" && S.enabled ? (N(), H("div", mf, [
              st(p("input", {
                class: "text_pole",
                "onUpdate:modelValue": (V) => S.config.searchURL = V,
                placeholder: C(U)("Search URL"),
                onChange: O[2] || (O[2] = (V) => C(t).save())
              }, null, 40, vf), [
                [ss, S.config.searchURL]
              ]),
              st(p("input", {
                class: "text_pole",
                "onUpdate:modelValue": (V) => S.config.resolveURL = V,
                placeholder: C(U)("Resolve URL"),
                onChange: O[3] || (O[3] = (V) => C(t).save())
              }, null, 40, yf), [
                [ss, S.config.resolveURL]
              ])
            ])) : Le("", !0)
          ]))), 128))
        ], 512), [
          [Rs, s.value === "providers"]
        ]),
        st(p("div", bf, [
          p("div", _f, [
            p("label", xf, Q(C(U)("Custom Cue Rules (Regex)")), 1),
            p("div", wf, [
              (N(!0), H(ee, null, ct(C(t).settings.customCueRules, (S, V) => (N(), H("div", {
                key: V,
                class: "stmp-rule"
              }, [
                p("code", null, Q(S), 1),
                p("div", {
                  class: "menu_button menu_button_icon stmp-rule-del",
                  onClick: (k) => v(V)
                }, [...O[5] || (O[5] = [
                  p("i", { class: "fa-solid fa-xmark" }, null, -1)
                ])], 8, Sf)
              ]))), 128))
            ]),
            p("div", Cf, [
              st(p("input", {
                "onUpdate:modelValue": O[4] || (O[4] = (S) => c.value = S),
                class: "text_pole",
                placeholder: C(U)("Add regex rule..."),
                onKeydown: vo(h, ["enter"])
              }, null, 40, If), [
                [ss, c.value]
              ]),
              p("div", {
                class: "menu_button menu_button_icon stmp-rule-add-btn",
                onClick: h
              }, [...O[6] || (O[6] = [
                p("i", { class: "fa-solid fa-plus" }, null, -1)
              ])])
            ])
          ])
        ], 512), [
          [Rs, s.value === "cue"]
        ]),
        st(p("div", Ef, [
          p("div", Tf, [
            p("div", {
              class: "menu_button menu_button_icon stmp-data-btn",
              onClick: m
            }, [
              O[7] || (O[7] = p("i", { class: "fa-solid fa-trash-can" }, null, -1)),
              p("span", null, Q(C(U)("Clear cache")), 1)
            ]),
            p("div", {
              class: "menu_button menu_button_icon stmp-data-btn",
              onClick: L
            }, [
              O[8] || (O[8] = p("i", { class: "fa-solid fa-file-export" }, null, -1)),
              p("span", null, Q(C(U)("Export data")), 1)
            ]),
            p("div", {
              class: "menu_button menu_button_icon stmp-data-btn",
              onClick: T
            }, [
              O[9] || (O[9] = p("i", { class: "fa-solid fa-file-import" }, null, -1)),
              p("span", null, Q(C(U)("Import data")), 1)
            ])
          ])
        ], 512), [
          [Rs, s.value === "data"]
        ])
      ])
    ]));
  }
}), Mf = /* @__PURE__ */ xt(Af, [["__scopeId", "data-v-f02db806"]]);
class Pf {
  constructor() {
    this.listeners = /* @__PURE__ */ new Map(), this.registered = [];
  }
  /**
   * Subscribe to an internal event.
   * @returns an unsubscribe function.
   */
  on(t, s) {
    let n = this.listeners.get(t);
    return n || (n = /* @__PURE__ */ new Set(), this.listeners.set(t, n)), n.add(s), () => {
      const i = this.listeners.get(t);
      i && (i.delete(s), i.size === 0 && this.listeners.delete(t));
    };
  }
  /** Start bridging: register ST event listeners. Safe to call once. */
  start() {
    if (this.registered.length > 0) return;
    const t = SillyTavern.getContext(), s = t.eventSource, n = t.event_types, i = (r, o, l) => {
      const a = (...d) => {
        const c = l(d[0]);
        this.emit(o, c);
      };
      s.on(r, a), this.registered.push({ event: r, handler: a });
    };
    i(n.CHAT_CHANGED, "chat-changed", (r) => ({
      chatId: typeof r == "string" ? r : void 0
    })), i(n.GENERATION_ENDED, "message-generated", (r) => ({
      messageId: $s(r)
    })), i(n.MESSAGE_UPDATED, "message-updated", (r) => ({
      messageId: $s(r)
    })), i(n.MESSAGE_DELETED, "message-deleted", (r) => ({
      messageId: $s(r)
    })), i(n.MESSAGE_SWIPED, "message-swiped", (r) => ({
      messageId: $s(r)
    }));
  }
  /** Stop bridging: remove all ST event listeners. */
  stop() {
    if (this.registered.length === 0) return;
    const s = SillyTavern.getContext().eventSource;
    for (const { event: n, handler: i } of this.registered)
      s.removeListener(n, i);
    this.registered = [];
  }
  /** Invoke all listeners for an internal event. */
  emit(t, s) {
    const n = this.listeners.get(t);
    if (n)
      for (const i of n)
        try {
          i(s);
        } catch (r) {
          console.error("[STEventBridge] listener error:", r);
        }
  }
}
function $s(e) {
  if (e == null) return;
  const t = typeof e == "number" ? e : parseInt(String(e), 10);
  return Number.isFinite(t) ? t : void 0;
}
function Rf() {
  return new Pf();
}
const Lf = [
  /<bgm>当前bgm[:：](.+?) - (.+?)<\/bgm>/g,
  /<bgm>当前bgm[:：](.+?)<\/bgm>/g,
  /<bgm>(.+?) - (.+?)<\/bgm>/g,
  /<bgm>(.+?)<\/bgm>/g,
  /【BGM】(.+?)(?: - (.+?))?【\/BGM】/g,
  /\[music\](.+?)(?: - (.+?))?\[\/music\]/g
];
function Qi(e, t) {
  const s = [], n = new RegExp(e.source, "g");
  let i;
  for (; (i = n.exec(t)) !== null; ) {
    i.index === n.lastIndex && n.lastIndex++;
    const r = i[1];
    if (r === void 0 || r === "") continue;
    const o = i[2], l = {
      song: r.trim(),
      artist: o !== void 0 && o !== "" ? o.trim() : void 0,
      raw: i[0]
    };
    s.push({ index: i.index, cue: l });
  }
  return s;
}
function er(e, t = []) {
  const s = /* @__PURE__ */ new Map(), n = (i) => {
    s.has(i.index) || s.set(i.index, i);
  };
  for (const i of Lf)
    for (const r of Qi(i, e)) n(r);
  for (const i of t)
    try {
      const r = new RegExp(i, "g");
      for (const o of Qi(r, e)) n(o);
    } catch {
    }
  return [...s.values()].sort((i, r) => i.index - r.index).map((i) => i.cue);
}
class $f {
  constructor(t) {
    this.cursors = /* @__PURE__ */ new Map(), this.getChatMessage = t;
  }
  scanIncremental(t, s, n, i = []) {
    const r = [];
    for (let o = s; o <= n; o++) {
      const l = this.getChatMessage(o);
      if (l === void 0) continue;
      const a = er(l, i);
      if (a.length === 0) continue;
      const d = a.at(-1);
      r.push({ messageId: o, cues: [d] });
    }
    return this.cursors.set(t, {
      chatId: t,
      lastScannedMessageId: n,
      updatedAt: Date.now()
    }), r;
  }
  scanMessage(t, s, n = []) {
    const i = this.getChatMessage(s);
    if (i === void 0)
      return { messageId: s, cue: null };
    const r = er(i, n), o = r.length > 0 ? r.at(-1) : null;
    return { messageId: s, cue: o };
  }
  getCursor(t) {
    const s = this.cursors.get(t);
    return s ? s.lastScannedMessageId : -1;
  }
  setCursor(t, s) {
    this.cursors.set(t, {
      chatId: t,
      lastScannedMessageId: s,
      updatedAt: Date.now()
    });
  }
  reset(t) {
    this.cursors.delete(t);
  }
}
let Kt = null, it = null, ds = null, hs = null, Wt = null, Gs = null;
const kf = `
<div class="inline-drawer">
  <div class="inline-drawer-toggle inline-drawer-header">
    <b data-i18n="悬浮音乐播放器">悬浮音乐播放器</b>
    <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
  </div>
  <div class="inline-drawer-content stmp-ext-settings-content">
    <div id="stmp-settings-mount"></div>
  </div>
</div>
`;
function Of() {
  const e = $("#extensions_settings2");
  if (!e || !e.length || (e.append(kf), hs = e.children(".inline-drawer").last()[0] ?? null, !hs)) return;
  const t = hs.querySelector("#stmp-settings-mount");
  t && Gs && (Wt = yo(Mf), Wt.use(Gs), Wt.mount(t));
}
function Df() {
  Wt && (Wt.unmount(), Wt = null), hs?.remove(), hs = null;
}
function Nf(e, t, s) {
  it = Rf(), it.on("chat-changed", () => {
    const n = SillyTavern.getContext(), i = n.chatId ?? String(Date.now());
    if (t.setChatId(i), t.getCursor() < 0 && n.chat.length > 0) {
      const r = e.scanIncremental(
        i,
        0,
        n.chat.length - 1,
        s.settings.customCueRules
      );
      t.handleNewCues(r), t.setCursor(n.chat.length - 1);
    }
  }), it.on("message-generated", (n) => {
    const i = SillyTavern.getContext(), r = t.chatId ?? i.chatId ?? "";
    if (!r || n.messageId === void 0) return;
    const o = t.getCursor() + 1, l = n.messageId;
    if (l < o) return;
    const a = e.scanIncremental(
      r,
      o,
      l,
      s.settings.customCueRules
    );
    t.handleNewCues(a), t.setCursor(l);
  }), it.on("message-updated", (n) => {
    n.messageId !== void 0 && t.handleMessageUpdate(n.messageId);
  }), it.on("message-deleted", (n) => {
    n.messageId !== void 0 && t.handleMessageDelete(n.messageId);
  }), it.on("message-swiped", (n) => {
    n.messageId !== void 0 && t.handleMessageUpdate(n.messageId);
  }), it.start();
}
function Ff(e, t, s) {
  const n = SillyTavern.getContext();
  if (n.chatId && n.chat.length > 0 && (t.setChatId(n.chatId), t.getCursor() < 0)) {
    const i = e.scanIncremental(
      n.chatId,
      0,
      n.chat.length - 1,
      s.settings.customCueRules
    );
    t.handleNewCues(i), t.setCursor(n.chat.length - 1);
  }
}
async function Hf() {
  try {
    const e = document.createElement("div");
    e.id = "st-music-player-root", document.documentElement.appendChild(e);
    const t = oc();
    Gs = t, Kt = yo(Ku), Kt.use(t), Kt.mount(e);
    const s = Ie(), n = mc();
    s.init(n);
    const i = kt();
    i.init(), i.setVolume(s.settings.volume);
    const r = new $f((a) => SillyTavern.getContext().chat[a]?.mes), o = Cs();
    o.init(r), Of();
    const l = SillyTavern.getContext();
    ds = () => {
      Nf(r, o, s), Ff(r, o, s);
    }, l.eventSource.on(l.event_types.APP_READY, ds), console.log("[ST-Music-Player] 播放器加载完成");
  } catch (e) {
    console.error("[ST-Music-Player] init failed:", e);
  }
}
function Co() {
  if (ds) {
    try {
      const t = SillyTavern.getContext();
      t.eventSource.removeListener(t.event_types.APP_READY, ds);
    } catch {
    }
    ds = null;
  }
  if (it?.stop(), it = null, Kt) {
    try {
      kt().destroy();
    } catch {
    }
    Kt.unmount(), Kt = null;
  }
  const e = document.getElementById("st-music-player-root");
  e && e.remove(), Df(), Gs = null;
}
function jf() {
  Co();
}
async function Uf() {
  try {
    const e = SillyTavern.getContext();
    delete e.extensionSettings[Vt], e.saveSettingsDebounced();
  } catch (e) {
    console.error("[ST-Music-Player] clean: failed to delete settings:", e);
  }
  try {
    const e = SillyTavern.libs?.localforage;
    if (e && typeof e.keys == "function") {
      const t = await e.keys();
      await Promise.all(
        t.filter((s) => s.startsWith(Vt) || s.startsWith("stmp:")).map((s) => e.removeItem(s))
      );
    }
  } catch (e) {
    console.error("[ST-Music-Player] clean: failed to clear localforage:", e);
  }
}
async function Bf() {
  await Uf(), Co();
}
export {
  Uf as clean,
  Bf as delete,
  Co as destroy,
  jf as disable,
  Hf as init
};
