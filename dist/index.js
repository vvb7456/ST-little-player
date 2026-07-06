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
const fe = {}, Ht = [], Qe = () => {
}, tr = () => !1, qs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ys = (e) => e.startsWith("onUpdate:"), be = Object.assign, jn = (e, t) => {
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
), Ro = /\B([A-Z])/g, bt = Zs(
  (e) => e.replace(Ro, "-$1").toLowerCase()
), or = Zs((e) => e.charAt(0).toUpperCase() + e.slice(1)), pn = Zs(
  (e) => e ? `on${or(e)}` : ""
), Ze = (e, t) => !Object.is(e, t), $s = (e, ...t) => {
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
}, Po = (e) => {
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
const Lo = /;(?![^(]*\))/g, ko = /:([^]+)/, $o = /\/\*[^]*?\*\//g;
function Oo(e) {
  const t = {};
  return e.replace($o, "").split(Lo).forEach((s) => {
    if (s) {
      const n = s.split(ko);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function ye(e) {
  let t = "";
  if (he(e))
    t = e;
  else if (K(e))
    for (let s = 0; s < e.length; s++) {
      const n = ye(e[s]);
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
const cr = (e) => !!(e && e.__v_isRef === !0), Z = (e) => he(e) ? e : e == null ? "" : K(e) || oe(e) && (e.toString === ir || !Y(e.toString)) ? cr(e) ? Z(e.value) : JSON.stringify(e, ur, 2) : String(e), ur = (e, t) => cr(t) ? ur(e, t.value) : jt(t) ? {
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
    (t.version === 0 || Ze(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
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
function et() {
  _r.push(Ve), Ve = !1;
}
function tt() {
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
const Ns = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ Symbol(
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
function at(e, t, s, n, i, r) {
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
      const u = Number(n);
      o.forEach((h, v) => {
        (v === "length" || v === gs || !Ne(v) && v >= u) && l(h);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), d && l(o.get(gs)), t) {
        case "add":
          a ? d && l(o.get("length")) : (l(o.get(Pt)), jt(e) && l(o.get(Mn)));
          break;
        case "delete":
          a || (l(o.get(Pt)), jt(e) && l(o.get(Mn)));
          break;
        case "set":
          jt(e) && l(o.get(Pt));
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
  return t === e ? t : (Se(t, "iterate", gs), /* @__PURE__ */ ke(e) ? t : t.map(He));
}
function tn(e) {
  return Se(e = /* @__PURE__ */ se(e), "iterate", gs), e;
}
function qe(e, t) {
  return /* @__PURE__ */ ft(e) ? zt(/* @__PURE__ */ ut(e) ? He(t) : t) : He(t);
}
const Bo = {
  __proto__: null,
  [Symbol.iterator]() {
    return vn(this, Symbol.iterator, (e) => qe(this, e));
  },
  concat(...e) {
    return Ot(this).concat(
      ...e.map((t) => K(t) ? Ot(t) : t)
    );
  },
  entries() {
    return vn(this, "entries", (e) => (e[1] = qe(this, e[1]), e));
  },
  every(e, t) {
    return st(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return st(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => qe(this, n)),
      arguments
    );
  },
  find(e, t) {
    return st(
      this,
      "find",
      e,
      t,
      (s) => qe(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return st(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return st(
      this,
      "findLast",
      e,
      t,
      (s) => qe(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return st(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return st(this, "forEach", e, t, void 0, arguments);
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
    return st(this, "map", e, t, void 0, arguments);
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
    return st(this, "some", e, t, void 0, arguments);
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
    return vn(this, "values", (e) => qe(this, e));
  }
};
function vn(e, t, s) {
  const n = tn(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ ke(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = s(r.value)), r;
  }), i;
}
const Ko = Array.prototype;
function st(e, t, s, n, i, r) {
  const o = tn(e), l = o !== e && !/* @__PURE__ */ ke(e), a = o[t];
  if (a !== Ko[t]) {
    const h = a.apply(e, r);
    return l ? He(h) : h;
  }
  let d = s;
  o !== e && (l ? d = function(h, v) {
    return s.call(this, qe(e, h), v, e);
  } : s.length > 2 && (d = function(h, v) {
    return s.call(this, h, v, e);
  }));
  const u = a.call(o, d, n);
  return l && i ? i(u) : u;
}
function di(e, t, s, n) {
  const i = tn(e), r = i !== e && !/* @__PURE__ */ ke(e);
  let o = s, l = !1;
  i !== e && (r ? (l = n.length === 0, o = function(d, u, h) {
    return l && (l = !1, d = qe(e, d)), s.call(this, d, qe(e, u), h, e);
  }) : s.length > 3 && (o = function(d, u, h) {
    return s.call(this, d, u, h, e);
  }));
  const a = i[t](o, ...n);
  return l ? qe(e, a) : a;
}
function yn(e, t, s) {
  const n = /* @__PURE__ */ se(e);
  Se(n, "iterate", gs);
  const i = n[t](...s);
  return (i === -1 || i === !1) && /* @__PURE__ */ nn(s[0]) ? (s[0] = /* @__PURE__ */ se(s[0]), n[t](...s)) : i;
}
function Yt(e, t, s = []) {
  et(), Wn();
  const n = (/* @__PURE__ */ se(e))[t].apply(e, s);
  return zn(), tt(), n;
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
      return i && oe(a) ? /* @__PURE__ */ Pn(a) : a;
    }
    return oe(l) ? i ? /* @__PURE__ */ Pn(l) : /* @__PURE__ */ sn(l) : l;
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
      if (!/* @__PURE__ */ ke(n) && !/* @__PURE__ */ ft(n) && (r = /* @__PURE__ */ se(r), n = /* @__PURE__ */ se(n)), !o && /* @__PURE__ */ pe(r) && !/* @__PURE__ */ pe(n))
        return d || (r.value = n), !0;
    }
    const l = o ? Number(s) < t.length : re(t, s), a = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ pe(t) ? t : i
    );
    return t === /* @__PURE__ */ se(i) && a && (l ? Ze(n, r) && at(t, "set", s, n) : at(t, "add", s, n)), a;
  }
  deleteProperty(t, s) {
    const n = re(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && at(t, "delete", s, void 0), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Ne(s) || !wr.has(s)) && Se(t, "has", s), n;
  }
  ownKeys(t) {
    return Se(
      t,
      "iterate",
      K(t) ? "length" : Pt
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
const Rn = (e) => e, Ts = (e) => Reflect.getPrototypeOf(e);
function Xo(e, t, s) {
  return function(...n) {
    const i = this.__v_raw, r = /* @__PURE__ */ se(i), o = jt(r), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, d = i[e](...n), u = s ? Rn : t ? zt : He;
    return !t && Se(
      r,
      "iterate",
      a ? Mn : Pt
    ), be(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: h, done: v } = d.next();
          return v ? { value: h, done: v } : {
            value: l ? [u(h[0]), u(h[1])] : u(h),
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
      e || (Ze(i, l) && Se(o, "get", i), Se(o, "get", l));
      const { has: a } = Ts(o), d = t ? Rn : e ? zt : He;
      if (a.call(o, i))
        return d(r.get(i));
      if (a.call(o, l))
        return d(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Se(/* @__PURE__ */ se(i), "iterate", Pt), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ se(r), l = /* @__PURE__ */ se(i);
      return e || (Ze(i, l) && Se(o, "has", i), Se(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, a = /* @__PURE__ */ se(l), d = t ? Rn : e ? zt : He;
      return !e && Se(a, "iterate", Pt), l.forEach((u, h) => i.call(r, d(u), d(h), o));
    }
  };
  return be(
    s,
    e ? {
      add: As("add"),
      set: As("set"),
      delete: As("delete"),
      clear: As("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ se(this), o = Ts(r), l = /* @__PURE__ */ se(i), a = !t && !/* @__PURE__ */ ke(i) && !/* @__PURE__ */ ft(i) ? l : i;
        return o.has.call(r, a) || Ze(i, a) && o.has.call(r, i) || Ze(l, a) && o.has.call(r, l) || (r.add(a), at(r, "add", a, a)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ ke(r) && !/* @__PURE__ */ ft(r) && (r = /* @__PURE__ */ se(r));
        const o = /* @__PURE__ */ se(this), { has: l, get: a } = Ts(o);
        let d = l.call(o, i);
        d || (i = /* @__PURE__ */ se(i), d = l.call(o, i));
        const u = a.call(o, i);
        return o.set(i, r), d ? Ze(r, u) && at(o, "set", i, r) : at(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ se(this), { has: o, get: l } = Ts(r);
        let a = o.call(r, i);
        a || (i = /* @__PURE__ */ se(i), a = o.call(r, i)), l && l.call(r, i);
        const d = r.delete(i);
        return a && at(r, "delete", i, void 0), d;
      },
      clear() {
        const i = /* @__PURE__ */ se(this), r = i.size !== 0, o = i.clear();
        return r && at(
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
function Pn(e) {
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
function ke(e) {
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
const He = (e) => oe(e) ? /* @__PURE__ */ sn(e) : e, zt = (e) => oe(e) ? /* @__PURE__ */ Pn(e) : e;
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
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ ke(t) || /* @__PURE__ */ ft(t);
    t = n ? t : /* @__PURE__ */ se(t), Ze(t, s) && (this._rawValue = t, this._value = n ? t : He(t), this.dep.trigger());
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
        i = !/* @__PURE__ */ nn(r) || /* @__PURE__ */ ke(r);
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
  const { immediate: n, deep: i, once: r, scheduler: o, augmentJob: l, call: a } = s, d = (I) => i ? I : /* @__PURE__ */ ke(I) || i === !1 || i === 0 ? ct(I, 1) : ct(I);
  let u, h, v, m, O = !1, A = !1;
  if (/* @__PURE__ */ pe(e) ? (h = () => e.value, O = /* @__PURE__ */ ke(e)) : /* @__PURE__ */ ut(e) ? (h = () => d(e), O = !0) : K(e) ? (A = !0, O = e.some((I) => /* @__PURE__ */ ut(I) || /* @__PURE__ */ ke(I)), h = () => e.map((I) => {
    if (/* @__PURE__ */ pe(I))
      return I.value;
    if (/* @__PURE__ */ ut(I))
      return d(I);
    if (Y(I))
      return a ? a(I, 2) : I();
  })) : Y(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (v) {
      et();
      try {
        v();
      } finally {
        tt();
      }
    }
    const I = At;
    At = u;
    try {
      return a ? a(e, 3, [m]) : e(m);
    } finally {
      At = I;
    }
  } : h = Qe, t && i) {
    const I = h, H = i === !0 ? 1 / 0 : i;
    h = () => ct(I(), H);
  }
  const q = hr(), V = () => {
    u.stop(), q && q.active && jn(q.effects, u);
  };
  if (r && t) {
    const I = t;
    t = (...H) => {
      const le = I(...H);
      return V(), le;
    };
  }
  let M = A ? new Array(e.length).fill(Ms) : Ms;
  const S = (I) => {
    if (!(!(u.flags & 1) || !u.dirty && !I))
      if (t) {
        const H = u.run();
        if (I || i || O || (A ? H.some((le, Q) => Ze(le, M[Q])) : Ze(H, M))) {
          v && v();
          const le = At;
          At = u;
          try {
            const Q = [
              H,
              // pass undefined as the old value when it's changed for the first time
              M === Ms ? void 0 : A && M[0] === Ms ? [] : M,
              m
            ];
            M = H, a ? a(t, 3, Q) : (
              // @ts-expect-error
              t(...Q)
            );
          } finally {
            At = le;
          }
        }
      } else
        u.run();
  };
  return l && l(S), u = new pr(h), u.scheduler = o ? () => o(S, !1) : S, m = (I) => hl(I, !1, u), v = u.onStop = () => {
    const I = Fs.get(u);
    if (I) {
      if (a)
        a(I, 4);
      else
        for (const H of I) H();
      Fs.delete(u);
    }
  }, t ? n ? S(!0) : M = u.run() : o ? o(S.bind(null, !0), !0) : u.run(), V.pause = u.pause.bind(u), V.resume = u.resume.bind(u), V.stop = V, V;
}
function ct(e, t = 1 / 0, s) {
  if (t <= 0 || !oe(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ pe(e))
    ct(e.value, t, s);
  else if (K(e))
    for (let n = 0; n < e.length; n++)
      ct(e[n], t, s);
  else if (sr(e) || jt(e))
    e.forEach((n) => {
      ct(n, t, s);
    });
  else if (rr(e)) {
    for (const n in e)
      ct(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && ct(e[n], t, s);
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
      const u = l.ec;
      if (u) {
        for (let h = 0; h < u.length; h++)
          if (u[h](e, a, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      et(), ws(r, null, 10, [
        e,
        a,
        d
      ]), tt();
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
function Ge(e) {
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
    !(e.flags & 2) && t >= ms(s) ? Ee.push(e) : Ee.splice(ml(t), 0, e), e.flags |= 1, Rr();
  }
}
function Rr() {
  Us || (Us = Mr.then(Lr));
}
function vl(e) {
  K(e) ? Bt.push(...e) : gt && e.id === -1 ? gt.splice(Ft + 1, 0, e) : e.flags & 1 || (Bt.push(e), e.flags |= 1), Rr();
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
function Pr(e) {
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
    Je = -1, Ee.length = 0, Pr(), Us = null, (Ee.length || Bt.length) && Lr();
  }
}
let De = null, kr = null;
function Vs(e) {
  const t = De;
  return De = e, kr = e && e.type.__scopeId || null, t;
}
function $r(e, t = De, s) {
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
function it(e, t) {
  if (De === null)
    return e;
  const s = un(De), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, a = fe] = t[i];
    r && (Y(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && ct(o), n.push({
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
    a && (et(), Fe(a, s, 8, [
      e.el,
      l,
      e,
      t
    ]), tt());
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
  const { immediate: n, deep: i, flush: r, once: o } = s, l = be({}, s), a = t && n || !t && r !== "post";
  let d;
  if (bs) {
    if (r === "sync") {
      const m = xl();
      d = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = Qe, m.resume = Qe, m.pause = Qe, m;
    }
  }
  const u = Ae;
  l.call = (m, O, A) => Fe(m, u, O, A);
  let h = !1;
  r === "post" ? l.scheduler = (m) => {
    Me(m, u && u.suspense);
  } : r !== "sync" && (h = !0, l.scheduler = (m, O) => {
    O ? m() : Zn(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), h && (m.flags |= 2, u && (m.id = u.uid, m.i = u));
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
const $e = [Function, Array], Fr = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: $e,
  onEnter: $e,
  onAfterEnter: $e,
  onEnterCancelled: $e,
  // leave
  onBeforeLeave: $e,
  onLeave: $e,
  onAfterLeave: $e,
  onLeaveCancelled: $e,
  // appear
  onBeforeAppear: $e,
  onAppear: $e,
  onAfterAppear: $e,
  onAppearCancelled: $e
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
        s.subTree ? Re() : void 0
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
      let u = s.subTree && pi(s.subTree);
      if (u && u.type !== Te && !Mt(u, a) && Ur(s).type !== Te) {
        let h = Ln(
          u,
          o,
          n,
          s
        );
        if (vs(u, h), l === "out-in" && a.type !== Te)
          return n.isLeaving = !0, h.afterLeave = () => {
            n.isLeaving = !1, s.job.flags & 8 || s.update(), delete h.afterLeave, u = void 0;
          }, bn(r);
        l === "in-out" && a.type !== Te ? h.delayLeave = (v, m, O) => {
          const A = Hr(
            n,
            u
          );
          A[String(u.key)] = u, v[Oe] = () => {
            m(), v[Oe] = void 0, delete d.delayedLeave, u = void 0;
          }, d.delayedLeave = () => {
            O(), delete d.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
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
    onAfterEnter: u,
    onEnterCancelled: h,
    onBeforeLeave: v,
    onLeave: m,
    onAfterLeave: O,
    onLeaveCancelled: A,
    onBeforeAppear: q,
    onAppear: V,
    onAfterAppear: M,
    onAppearCancelled: S
  } = t, I = String(e.key), H = Hr(s, e), le = (L, R) => {
    L && Fe(
      L,
      n,
      9,
      R
    );
  }, Q = (L, R) => {
    const B = R[1];
    le(L, R), K(L) ? L.every((b) => b.length <= 1) && B() : L.length <= 1 && B();
  }, W = {
    mode: o,
    persisted: l,
    beforeEnter(L) {
      let R = a;
      if (!s.isMounted)
        if (r)
          R = q || a;
        else
          return;
      L[Oe] && L[Oe](
        !0
        /* cancelled */
      );
      const B = H[I];
      B && Mt(e, B) && B.el[Oe] && B.el[Oe](), le(R, [L]);
    },
    enter(L) {
      if (H[I] === e) return;
      let R = d, B = u, b = h;
      if (!s.isMounted)
        if (r)
          R = V || d, B = M || u, b = S || h;
        else
          return;
      let k = !1;
      L[Xt] = (ge) => {
        k || (k = !0, ge ? le(b, [L]) : le(B, [L]), W.delayedLeave && W.delayedLeave(), L[Xt] = void 0);
      };
      const z = L[Xt].bind(null, !1);
      R ? Q(R, [L, z]) : z();
    },
    leave(L, R) {
      const B = String(e.key);
      if (L[Xt] && L[Xt](
        !0
        /* cancelled */
      ), s.isUnmounting)
        return R();
      le(v, [L]);
      let b = !1;
      L[Oe] = (z) => {
        b || (b = !0, R(), z ? le(A, [L]) : le(O, [L]), L[Oe] = void 0, H[B] === e && delete H[B]);
      };
      const k = L[Oe].bind(null, !1);
      H[B] = e, m ? Q(m, [L, k]) : k();
    },
    clone(L) {
      const R = Ln(
        L,
        t,
        s,
        n,
        i
      );
      return i && i(R), R;
    }
  };
  return W;
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
    be({ name: e.name }, t, { setup: e })
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
      (A, q) => ls(
        A,
        t && (K(t) ? t[q] : t),
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
  const r = n.shapeFlag & 4 ? un(n.component) : n.el, o = i ? null : r, { i: l, r: a } = e, d = t && t.r, u = l.refs === fe ? l.refs = {} : l.refs, h = l.setupState, v = /* @__PURE__ */ se(h), m = h === fe ? tr : (A) => gi(u, A) ? !1 : re(v, A), O = (A, q) => !(q && gi(u, q));
  if (d != null && d !== a) {
    if (mi(t), he(d))
      u[d] = null, m(d) && (h[d] = null);
    else if (/* @__PURE__ */ pe(d)) {
      const A = t;
      O(d, A.k) && (d.value = null), A.k && (u[A.k] = null);
    }
  }
  if (Y(a)) {
    et();
    try {
      ws(a, l, 12, [o, u]);
    } finally {
      tt();
    }
  } else {
    const A = he(a), q = /* @__PURE__ */ pe(a);
    if (A || q) {
      const V = () => {
        if (e.f) {
          const M = A ? m(a) ? h[a] : u[a] : O() || !e.k ? a.value : u[e.k];
          if (i)
            K(M) && jn(M, r);
          else if (K(M))
            M.includes(r) || M.push(r);
          else if (A)
            u[a] = [r], m(a) && (h[a] = u[a]);
          else {
            const S = [r];
            O(a, e.k) && (a.value = S), e.k && (u[e.k] = S);
          }
        } else A ? (u[a] = o, m(a) && (h[a] = o)) : q && (O(a, e.k) && (a.value = o), e.k && (u[e.k] = o));
      };
      if (o) {
        const M = () => {
          V(), Hs.delete(e);
        };
        M.id = -1, Hs.set(e, M), Me(M, s);
      } else
        mi(e), V();
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
      et();
      const l = Ss(s), a = Fe(t, s, e, o);
      return l(), tt(), a;
    });
    return n ? i.unshift(r) : i.push(r), r;
  }
}
const dt = (e) => (t, s = Ae) => {
  (!bs || e === "sp") && ln(e, (...n) => t(...n), s);
}, Rl = dt("bm"), Qn = dt("m"), Pl = dt(
  "bu"
), Ll = dt("u"), ei = dt(
  "bum"
), Wr = dt("um"), kl = dt(
  "sp"
), $l = dt("rtg"), Ol = dt("rtc");
function Dl(e, t = Ae) {
  ln("ec", e, t);
}
const Nl = /* @__PURE__ */ Symbol.for("v-ndc");
function Ye(e, t, s, n) {
  let i;
  const r = s, o = K(e);
  if (o || he(e)) {
    const l = o && /* @__PURE__ */ ut(e);
    let a = !1, d = !1;
    l && (a = !/* @__PURE__ */ ke(e), d = /* @__PURE__ */ ft(e), e = tn(e)), i = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      i[u] = t(
        a ? d ? zt(He(e[u])) : He(e[u]) : e[u],
        u,
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
        const u = l[a];
        i[a] = t(e[u], u, a, r);
      }
    }
  else
    i = [];
  return i;
}
const kn = (e) => e ? fo(e) ? un(e) : kn(e.parent) : null, cs = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ be(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => kn(e.parent),
    $root: (e) => kn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Jr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Zn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ge.bind(e.proxy)),
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
        $n && (o[t] = 0);
      }
    }
    const d = cs[t];
    let u, h;
    if (d)
      return t === "$attrs" && Se(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
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
let $n = !0;
function Ul(e) {
  const t = Jr(e), s = e.proxy, n = e.ctx;
  $n = !1, t.beforeCreate && yi(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: o,
    watch: l,
    provide: a,
    inject: d,
    // lifecycle
    created: u,
    beforeMount: h,
    mounted: v,
    beforeUpdate: m,
    updated: O,
    activated: A,
    deactivated: q,
    beforeDestroy: V,
    beforeUnmount: M,
    destroyed: S,
    unmounted: I,
    render: H,
    renderTracked: le,
    renderTriggered: Q,
    errorCaptured: W,
    serverPrefetch: L,
    // public API
    expose: R,
    inheritAttrs: B,
    // assets
    components: b,
    directives: k,
    filters: z
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
  if ($n = !0, r)
    for (const X in r) {
      const ae = r[X], wt = Y(ae) ? ae.bind(s, s) : Y(ae.get) ? ae.get.bind(s, s) : Qe, Is = !Y(ae) && Y(ae.set) ? ae.set.bind(s) : Qe, St = yt({
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
  u && yi(u, e, "c");
  function ne(X, ae) {
    K(ae) ? ae.forEach((wt) => X(wt.bind(s))) : ae && X(ae.bind(s));
  }
  if (ne(Rl, h), ne(Qn, v), ne(Pl, m), ne(Ll, O), ne(Tl, A), ne(Al, q), ne(Dl, W), ne(Ol, le), ne($l, Q), ne(ei, M), ne(Wr, I), ne(kl, L), K(R))
    if (R.length) {
      const X = e.exposed || (e.exposed = {});
      R.forEach((ae) => {
        Object.defineProperty(X, ae, {
          get: () => s[ae],
          set: (wt) => s[ae] = wt,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  H && e.render === Qe && (e.render = H), B != null && (e.inheritAttrs = B), b && (e.components = b), k && (e.directives = k), L && Br(e);
}
function Vl(e, t, s = Qe) {
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
    return be(
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
  return e ? be(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function _i(e, t) {
  return e ? K(e) && K(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : be(
    /* @__PURE__ */ Object.create(null),
    vi(e),
    vi(t ?? {})
  ) : t;
}
function Bl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = be(/* @__PURE__ */ Object.create(null), e);
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
    Y(n) || (n = be({}, n)), i != null && !oe(i) && (i = null);
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
      set config(u) {
      },
      use(u, ...h) {
        return o.has(u) || (u && Y(u.install) ? (o.add(u), u.install(d, ...h)) : Y(u) && (o.add(u), u(d, ...h))), d;
      },
      mixin(u) {
        return r.mixins.includes(u) || r.mixins.push(u), d;
      },
      component(u, h) {
        return h ? (r.components[u] = h, d) : r.components[u];
      },
      directive(u, h) {
        return h ? (r.directives[u] = h, d) : r.directives[u];
      },
      mount(u, h, v) {
        if (!a) {
          const m = d._ceVNode || ie(n, i);
          return m.appContext = r, v === !0 ? v = "svg" : v === !1 && (v = void 0), e(m, u, v), a = !0, d._container = u, u.__vue_app__ = d, un(m.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        a && (Fe(
          l,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(u, h) {
        return r.provides[u] = h, d;
      },
      runWithContext(u) {
        const h = Lt;
        Lt = d;
        try {
          return u();
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
  o && (o.trim && (i = s.map((u) => he(u) ? u.trim() : u)), o.number && (i = s.map(Bn)));
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
      const u = qr(d, t, !0);
      u && (l = !0, be(o, u));
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (oe(e) && n.set(e, null), null) : (K(r) ? r.forEach((a) => o[a] = null) : be(o, r), oe(e) && n.set(e, o), o);
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
    renderCache: u,
    props: h,
    data: v,
    setupState: m,
    ctx: O,
    inheritAttrs: A
  } = e, q = Vs(e);
  let V, M;
  try {
    if (s.shapeFlag & 4) {
      const I = i || n, H = I;
      V = Xe(
        d.call(
          H,
          I,
          u,
          h,
          m,
          v,
          O
        )
      ), M = l;
    } else {
      const I = t;
      V = Xe(
        I.length > 1 ? I(
          h,
          { attrs: l, slots: o, emit: a }
        ) : I(
          h,
          null
        )
      ), M = t.props ? l : ql(l);
    }
  } catch (I) {
    us.length = 0, rn(I, e, 1), V = ie(Te);
  }
  let S = V;
  if (M && A !== !1) {
    const I = Object.keys(M), { shapeFlag: H } = S;
    I.length && H & 7 && (r && I.some(Ys) && (M = Yl(
      M,
      r
    )), S = vt(S, M, !1, !0));
  }
  return s.dirs && (S = vt(S, null, !1, !0), S.dirs = S.dirs ? S.dirs.concat(s.dirs) : s.dirs), s.transition && vs(S, s.transition), V = S, Vs(q), V;
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
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const v = u[h];
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
      const u = e.vnode.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        let v = u[h];
        if (an(e.emitsOptions, v))
          continue;
        const m = t[v];
        if (a)
          if (re(r, v))
            m !== r[v] && (r[v] = m, d = !0);
          else {
            const O = Ue(v);
            i[O] = Dn(
              a,
              l,
              O,
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
    let u;
    for (const h in l)
      (!t || // for camelCase
      !re(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = bt(h)) === h || !re(t, u))) && (a ? s && // for camelCase
      (s[h] !== void 0 || // for kebab-case
      s[u] !== void 0) && (i[h] = Dn(
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
  d && at(e.attrs, "set", "");
}
function eo(e, t, s, n) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (ns(a))
        continue;
      const d = t[a];
      let u;
      i && re(i, u = Ue(a)) ? !r || !r.includes(u) ? s[u] = d : (l || (l = {}))[u] = d : an(e.emitsOptions, a) || (!(a in n) || d !== n[a]) && (n[a] = d, o = !0);
    }
  if (r) {
    const a = /* @__PURE__ */ se(s), d = l || fe;
    for (let u = 0; u < r.length; u++) {
      const h = r[u];
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
          const u = Ss(i);
          n = d[s] = a.call(
            null,
            t
          ), u();
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
    const u = (h) => {
      a = !0;
      const [v, m] = to(h, t, !0);
      be(o, v), m && l.push(...m);
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !a)
    return oe(e) && n.set(e, Ht), Ht;
  if (K(r))
    for (let u = 0; u < r.length; u++) {
      const h = Ue(r[u]);
      Si(h) && (o[h] = fe);
    }
  else if (r)
    for (const u in r) {
      const h = Ue(u);
      if (Si(h)) {
        const v = r[u], m = o[h] = K(v) || Y(v) ? { type: v } : be({}, v), O = m.type;
        let A = !1, q = !0;
        if (K(O))
          for (let V = 0; V < O.length; ++V) {
            const M = O[V], S = Y(M) && M.name;
            if (S === "Boolean") {
              A = !0;
              break;
            } else S === "String" && (q = !1);
          }
        else
          A = Y(O) && O.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = A, m[
          1
          /* shouldCastTrue */
        ] = q, (A || re(m, "default")) && l.push(h);
      }
    }
  const d = [o, l];
  return oe(e) && n.set(e, d), d;
}
function Si(e) {
  return e[0] !== "$" && !ns(e);
}
const ti = (e) => e === "_" || e === "_ctx" || e === "$stable", si = (e) => K(e) ? e.map(Xe) : [Xe(e)], sa = (e, t, s) => {
  if (t._n)
    return t;
  const n = $r((...i) => si(t(...i)), s);
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
    setElementText: u,
    parentNode: h,
    nextSibling: v,
    setScopeId: m = Qe,
    insertStaticContent: O
  } = e, A = (c, f, g, w = null, x = null, y = null, P = void 0, T = null, E = !!f.dynamicChildren) => {
    if (c === f)
      return;
    c && !Mt(c, f) && (w = Es(c), je(c, x, y, !0), c = null), f.patchFlag === -2 && (E = !1, f.dynamicChildren = null);
    const { type: _, ref: J, shapeFlag: D } = f;
    switch (_) {
      case cn:
        q(c, f, g, w);
        break;
      case Te:
        V(c, f, g, w);
        break;
      case Os:
        c == null && M(f, g, w, P);
        break;
      case ee:
        b(
          c,
          f,
          g,
          w,
          x,
          y,
          P,
          T,
          E
        );
        break;
      default:
        D & 1 ? H(
          c,
          f,
          g,
          w,
          x,
          y,
          P,
          T,
          E
        ) : D & 6 ? k(
          c,
          f,
          g,
          w,
          x,
          y,
          P,
          T,
          E
        ) : (D & 64 || D & 128) && _.process(
          c,
          f,
          g,
          w,
          x,
          y,
          P,
          T,
          E,
          Gt
        );
    }
    J != null && x ? ls(J, c && c.ref, y, f || c, !f) : J == null && c && c.ref != null && ls(c.ref, null, y, c, !0);
  }, q = (c, f, g, w) => {
    if (c == null)
      n(
        f.el = l(f.children),
        g,
        w
      );
    else {
      const x = f.el = c.el;
      f.children !== c.children && d(x, f.children);
    }
  }, V = (c, f, g, w) => {
    c == null ? n(
      f.el = a(f.children || ""),
      g,
      w
    ) : f.el = c.el;
  }, M = (c, f, g, w) => {
    [c.el, c.anchor] = O(
      c.children,
      f,
      g,
      w,
      c.el,
      c.anchor
    );
  }, S = ({ el: c, anchor: f }, g, w) => {
    let x;
    for (; c && c !== f; )
      x = v(c), n(c, g, w), c = x;
    n(f, g, w);
  }, I = ({ el: c, anchor: f }) => {
    let g;
    for (; c && c !== f; )
      g = v(c), i(c), c = g;
    i(f);
  }, H = (c, f, g, w, x, y, P, T, E) => {
    if (f.type === "svg" ? P = "svg" : f.type === "math" && (P = "mathml"), c == null)
      le(
        f,
        g,
        w,
        x,
        y,
        P,
        T,
        E
      );
    else {
      const _ = c.el && c.el._isVueCE ? c.el : null;
      try {
        _ && _._beginPatch(), L(
          c,
          f,
          x,
          y,
          P,
          T,
          E
        );
      } finally {
        _ && _._endPatch();
      }
    }
  }, le = (c, f, g, w, x, y, P, T) => {
    let E, _;
    const { props: J, shapeFlag: D, transition: j, dirs: G } = c;
    if (E = c.el = o(
      c.type,
      y,
      J && J.is,
      J
    ), D & 8 ? u(E, c.children) : D & 16 && W(
      c.children,
      E,
      null,
      w,
      x,
      xn(c, y),
      P,
      T
    ), G && Ct(c, null, w, "created"), Q(E, c, c.scopeId, P, w), J) {
      for (const ue in J)
        ue !== "value" && !ns(ue) && r(E, ue, null, J[ue], y, w);
      "value" in J && r(E, "value", null, J.value, y), (_ = J.onVnodeBeforeMount) && ze(_, w, c);
    }
    G && Ct(c, null, w, "beforeMount");
    const te = la(x, j);
    te && j.beforeEnter(E), n(E, f, g), ((_ = J && J.onVnodeMounted) || te || G) && Me(() => {
      try {
        _ && ze(_, w, c), te && j.enter(E), G && Ct(c, null, w, "mounted");
      } finally {
      }
    }, x);
  }, Q = (c, f, g, w, x) => {
    if (g && m(c, g), w)
      for (let y = 0; y < w.length; y++)
        m(c, w[y]);
    if (x) {
      let y = x.subTree;
      if (f === y || ao(y.type) && (y.ssContent === f || y.ssFallback === f)) {
        const P = x.vnode;
        Q(
          c,
          P,
          P.scopeId,
          P.slotScopeIds,
          x.parent
        );
      }
    }
  }, W = (c, f, g, w, x, y, P, T, E = 0) => {
    for (let _ = E; _ < c.length; _++) {
      const J = c[_] = T ? lt(c[_]) : Xe(c[_]);
      A(
        null,
        J,
        f,
        g,
        w,
        x,
        y,
        P,
        T
      );
    }
  }, L = (c, f, g, w, x, y, P) => {
    const T = f.el = c.el;
    let { patchFlag: E, dynamicChildren: _, dirs: J } = f;
    E |= c.patchFlag & 16;
    const D = c.props || fe, j = f.props || fe;
    let G;
    if (g && It(g, !1), (G = j.onVnodeBeforeUpdate) && ze(G, g, f, c), J && Ct(f, c, g, "beforeUpdate"), g && It(g, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    _ && (!c.dynamicChildren || c.dynamicChildren.length !== _.length) && (E = 0, P = !1, _ = null), (D.innerHTML && j.innerHTML == null || D.textContent && j.textContent == null) && u(T, ""), _ ? R(
      c.dynamicChildren,
      _,
      T,
      g,
      w,
      xn(f, x),
      y
    ) : P || ae(
      c,
      f,
      T,
      null,
      g,
      w,
      xn(f, x),
      y,
      !1
    ), E > 0) {
      if (E & 16)
        B(T, D, j, g, x);
      else if (E & 2 && D.class !== j.class && r(T, "class", null, j.class, x), E & 4 && r(T, "style", D.style, j.style, x), E & 8) {
        const te = f.dynamicProps;
        for (let ue = 0; ue < te.length; ue++) {
          const ce = te[ue], me = D[ce], _e = j[ce];
          (_e !== me || ce === "value") && r(T, ce, me, _e, x, g);
        }
      }
      E & 1 && c.children !== f.children && u(T, f.children);
    } else !P && _ == null && B(T, D, j, g, x);
    ((G = j.onVnodeUpdated) || J) && Me(() => {
      G && ze(G, g, f, c), J && Ct(f, c, g, "updated");
    }, w);
  }, R = (c, f, g, w, x, y, P) => {
    for (let T = 0; T < f.length; T++) {
      const E = c[T], _ = f[T], J = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        E.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (E.type === ee || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Mt(E, _) || // - In the case of a component, it could contain anything.
        E.shapeFlag & 198) ? h(E.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      A(
        E,
        _,
        J,
        null,
        w,
        x,
        y,
        P,
        !0
      );
    }
  }, B = (c, f, g, w, x) => {
    if (f !== g) {
      if (f !== fe)
        for (const y in f)
          !ns(y) && !(y in g) && r(
            c,
            y,
            f[y],
            null,
            x,
            w
          );
      for (const y in g) {
        if (ns(y)) continue;
        const P = g[y], T = f[y];
        P !== T && y !== "value" && r(c, y, T, P, x, w);
      }
      "value" in g && r(c, "value", f.value, g.value, x);
    }
  }, b = (c, f, g, w, x, y, P, T, E) => {
    const _ = f.el = c ? c.el : l(""), J = f.anchor = c ? c.anchor : l("");
    let { patchFlag: D, dynamicChildren: j, slotScopeIds: G } = f;
    G && (T = T ? T.concat(G) : G), c == null ? (n(_, g, w), n(J, g, w), W(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      g,
      J,
      x,
      y,
      P,
      T,
      E
    )) : D > 0 && D & 64 && j && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === j.length ? (R(
      c.dynamicChildren,
      j,
      g,
      x,
      y,
      P,
      T
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || x && f === x.subTree) && ro(
      c,
      f,
      !0
      /* shallow */
    )) : ae(
      c,
      f,
      g,
      J,
      x,
      y,
      P,
      T,
      E
    );
  }, k = (c, f, g, w, x, y, P, T, E) => {
    f.slotScopeIds = T, c == null ? f.shapeFlag & 512 ? x.ctx.activate(
      f,
      g,
      w,
      P,
      E
    ) : z(
      f,
      g,
      w,
      x,
      y,
      P,
      E
    ) : ge(c, f, E);
  }, z = (c, f, g, w, x, y, P) => {
    const T = c.component = va(
      c,
      w,
      x
    );
    if (on(c) && (T.ctx.renderer = Gt), ya(T, !1, P), T.asyncDep) {
      if (x && x.registerDep(T, ne, P), !c.el) {
        const E = T.subTree = ie(Te);
        V(null, E, f, g), c.placeholder = E.el;
      }
    } else
      ne(
        T,
        c,
        f,
        g,
        x,
        y,
        P
      );
  }, ge = (c, f, g) => {
    const w = f.component = c.component;
    if (Xl(c, f, g))
      if (w.asyncDep && !w.asyncResolved) {
        X(w, f, g);
        return;
      } else
        w.next = f, w.update();
    else
      f.el = c.el, w.vnode = f;
  }, ne = (c, f, g, w, x, y, P) => {
    const T = () => {
      if (c.isMounted) {
        let { next: D, bu: j, u: G, parent: te, vnode: ue } = c;
        {
          const Ke = oo(c);
          if (Ke) {
            D && (D.el = ue.el, X(c, D, P)), Ke.asyncDep.then(() => {
              Me(() => {
                c.isUnmounted || _();
              }, x);
            });
            return;
          }
        }
        let ce = D, me;
        It(c, !1), D ? (D.el = ue.el, X(c, D, P)) : D = ue, j && $s(j), (me = D.props && D.props.onVnodeBeforeUpdate) && ze(me, te, D, ue), It(c, !0);
        const _e = xi(c), Be = c.subTree;
        c.subTree = _e, A(
          Be,
          _e,
          // parent may have changed if it's in a teleport
          h(Be.el),
          // anchor may have changed if it's in a fragment
          Es(Be),
          c,
          x,
          y
        ), D.el = _e.el, ce === null && Zl(c, _e.el), G && Me(G, x), (me = D.props && D.props.onVnodeUpdated) && Me(
          () => ze(me, te, D, ue),
          x
        );
      } else {
        let D;
        const { el: j, props: G } = f, { bm: te, m: ue, parent: ce, root: me, type: _e } = c, Be = as(f);
        It(c, !1), te && $s(te), !Be && (D = G && G.onVnodeBeforeMount) && ze(D, ce, f), It(c, !0);
        {
          me.ce && me.ce._hasShadowRoot() && me.ce._injectChildStyle(
            _e,
            c.parent ? c.parent.type : void 0
          );
          const Ke = c.subTree = xi(c);
          A(
            null,
            Ke,
            g,
            w,
            c,
            x,
            y
          ), f.el = Ke.el;
        }
        if (ue && Me(ue, x), !Be && (D = G && G.onVnodeMounted)) {
          const Ke = f;
          Me(
            () => ze(D, ce, Ke),
            x
          );
        }
        (f.shapeFlag & 256 || ce && as(ce.vnode) && ce.vnode.shapeFlag & 256) && c.a && Me(c.a, x), c.isMounted = !0, f = g = w = null;
      }
    };
    c.scope.on();
    const E = c.effect = new pr(T);
    c.scope.off();
    const _ = c.update = E.run.bind(E), J = c.job = E.runIfDirty.bind(E);
    J.i = c, J.id = c.uid, E.scheduler = () => Zn(J), It(c, !0), _();
  }, X = (c, f, g) => {
    f.component = c;
    const w = c.vnode.props;
    c.vnode = f, c.next = null, ea(c, f.props, w, g), ia(c, f.children, g), et(), hi(c), tt();
  }, ae = (c, f, g, w, x, y, P, T, E = !1) => {
    const _ = c && c.children, J = c ? c.shapeFlag : 0, D = f.children, { patchFlag: j, shapeFlag: G } = f;
    if (j > 0) {
      if (j & 128) {
        Is(
          _,
          D,
          g,
          w,
          x,
          y,
          P,
          T,
          E
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
          P,
          T,
          E
        );
        return;
      }
    }
    G & 8 ? (J & 16 && Jt(_, x, y), D !== _ && u(g, D)) : J & 16 ? G & 16 ? Is(
      _,
      D,
      g,
      w,
      x,
      y,
      P,
      T,
      E
    ) : Jt(_, x, y, !0) : (J & 8 && u(g, ""), G & 16 && W(
      D,
      g,
      w,
      x,
      y,
      P,
      T,
      E
    ));
  }, wt = (c, f, g, w, x, y, P, T, E) => {
    c = c || Ht, f = f || Ht;
    const _ = c.length, J = f.length, D = Math.min(_, J);
    let j;
    for (j = 0; j < D; j++) {
      const G = f[j] = E ? lt(f[j]) : Xe(f[j]);
      A(
        c[j],
        G,
        g,
        null,
        x,
        y,
        P,
        T,
        E
      );
    }
    _ > J ? Jt(
      c,
      x,
      y,
      !0,
      !1,
      D
    ) : W(
      f,
      g,
      w,
      x,
      y,
      P,
      T,
      E,
      D
    );
  }, Is = (c, f, g, w, x, y, P, T, E) => {
    let _ = 0;
    const J = f.length;
    let D = c.length - 1, j = J - 1;
    for (; _ <= D && _ <= j; ) {
      const G = c[_], te = f[_] = E ? lt(f[_]) : Xe(f[_]);
      if (Mt(G, te))
        A(
          G,
          te,
          g,
          null,
          x,
          y,
          P,
          T,
          E
        );
      else
        break;
      _++;
    }
    for (; _ <= D && _ <= j; ) {
      const G = c[D], te = f[j] = E ? lt(f[j]) : Xe(f[j]);
      if (Mt(G, te))
        A(
          G,
          te,
          g,
          null,
          x,
          y,
          P,
          T,
          E
        );
      else
        break;
      D--, j--;
    }
    if (_ > D) {
      if (_ <= j) {
        const G = j + 1, te = G < J ? f[G].el : w;
        for (; _ <= j; )
          A(
            null,
            f[_] = E ? lt(f[_]) : Xe(f[_]),
            g,
            te,
            x,
            y,
            P,
            T,
            E
          ), _++;
      }
    } else if (_ > j)
      for (; _ <= D; )
        je(c[_], x, y, !0), _++;
    else {
      const G = _, te = _, ue = /* @__PURE__ */ new Map();
      for (_ = te; _ <= j; _++) {
        const Pe = f[_] = E ? lt(f[_]) : Xe(f[_]);
        Pe.key != null && ue.set(Pe.key, _);
      }
      let ce, me = 0;
      const _e = j - te + 1;
      let Be = !1, Ke = 0;
      const qt = new Array(_e);
      for (_ = 0; _ < _e; _++) qt[_] = 0;
      for (_ = G; _ <= D; _++) {
        const Pe = c[_];
        if (me >= _e) {
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
        We === void 0 ? je(Pe, x, y, !0) : (qt[We - te] = _ + 1, We >= Ke ? Ke = We : Be = !0, A(
          Pe,
          f[We],
          g,
          null,
          x,
          y,
          P,
          T,
          E
        ), me++);
      }
      const oi = Be ? aa(qt) : Ht;
      for (ce = oi.length - 1, _ = _e - 1; _ >= 0; _--) {
        const Pe = te + _, We = f[Pe], li = f[Pe + 1], ai = Pe + 1 < J ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          li.el || lo(li)
        ) : w;
        qt[_] === 0 ? A(
          null,
          We,
          g,
          ai,
          x,
          y,
          P,
          T,
          E
        ) : Be && (ce < 0 || _ !== oi[ce] ? St(We, g, ai, 2) : ce--);
      }
    }
  }, St = (c, f, g, w, x = null) => {
    const { el: y, type: P, transition: T, children: E, shapeFlag: _ } = c;
    if (_ & 6) {
      St(c.component.subTree, f, g, w);
      return;
    }
    if (_ & 128) {
      c.suspense.move(f, g, w);
      return;
    }
    if (_ & 64) {
      P.move(c, f, g, Gt);
      return;
    }
    if (P === ee) {
      n(y, f, g);
      for (let D = 0; D < E.length; D++)
        St(E[D], f, g, w);
      n(c.anchor, f, g);
      return;
    }
    if (P === Os) {
      S(c, f, g);
      return;
    }
    if (w !== 2 && _ & 1 && T)
      if (w === 0)
        T.persisted && !y[Oe] ? n(y, f, g) : (T.beforeEnter(y), n(y, f, g), Me(() => T.enter(y), x));
      else {
        const { leave: D, delayLeave: j, afterLeave: G } = T, te = () => {
          c.ctx.isUnmounted ? i(y) : n(y, f, g);
        }, ue = () => {
          const ce = y._isLeaving || !!y[Oe];
          y._isLeaving && y[Oe](
            !0
            /* cancelled */
          ), T.persisted && !ce ? te() : D(y, () => {
            te(), G && G();
          });
        };
        j ? j(y, te, ue) : ue();
      }
    else
      n(y, f, g);
  }, je = (c, f, g, w = !1, x = !1) => {
    const {
      type: y,
      props: P,
      ref: T,
      children: E,
      dynamicChildren: _,
      shapeFlag: J,
      patchFlag: D,
      dirs: j,
      cacheIndex: G,
      memo: te
    } = c;
    if (D === -2 && (x = !1), T != null && (et(), ls(T, null, g, c, !0), tt()), G != null && (f.renderCache[G] = void 0), J & 256) {
      f.ctx.deactivate(c);
      return;
    }
    const ue = J & 1 && j, ce = !as(c);
    let me;
    if (ce && (me = P && P.onVnodeBeforeUnmount) && ze(me, f, c), J & 6)
      Eo(c.component, g, w);
    else {
      if (J & 128) {
        c.suspense.unmount(g, w);
        return;
      }
      ue && Ct(c, null, f, "beforeUnmount"), J & 64 ? c.type.remove(
        c,
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
      ) : (y === ee && D & 384 || !x && J & 16) && Jt(E, f, g), w && ii(c);
    }
    const _e = te != null && G == null;
    (ce && (me = P && P.onVnodeUnmounted) || ue || _e) && Me(() => {
      me && ze(me, f, c), ue && Ct(c, null, f, "unmounted"), _e && (c.el = null);
    }, g);
  }, ii = (c) => {
    const { type: f, el: g, anchor: w, transition: x } = c;
    if (f === ee) {
      Io(g, w);
      return;
    }
    if (f === Os) {
      I(c);
      return;
    }
    const y = () => {
      i(g), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (c.shapeFlag & 1 && x && !x.persisted) {
      const { leave: P, delayLeave: T } = x, E = () => P(g, y);
      T ? T(c.el, y, E) : E();
    } else
      y();
  }, Io = (c, f) => {
    let g;
    for (; c !== f; )
      g = v(c), i(c), c = g;
    i(f);
  }, Eo = (c, f, g) => {
    const { bum: w, scope: x, job: y, subTree: P, um: T, m: E, a: _ } = c;
    Ci(E), Ci(_), w && $s(w), x.stop(), y && (y.flags |= 8, je(P, c, f, g)), T && Me(T, f), Me(() => {
      c.isUnmounted = !0;
    }, f);
  }, Jt = (c, f, g, w = !1, x = !1, y = 0) => {
    for (let P = y; P < c.length; P++)
      je(c[P], f, g, w, x);
  }, Es = (c) => {
    if (c.shapeFlag & 6)
      return Es(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const f = v(c.anchor || c.el), g = f && f[Sl];
    return g ? v(g) : f;
  };
  let hn = !1;
  const ri = (c, f, g) => {
    let w;
    c == null ? f._vnode && (je(f._vnode, null, null, !0), w = f._vnode.component) : A(
      f._vnode || null,
      c,
      f,
      null,
      null,
      null,
      g
    ), f._vnode = c, hn || (hn = !0, hi(w), Pr(), hn = !1);
  }, Gt = {
    p: A,
    um: je,
    m: St,
    r: ii,
    mt: z,
    mc: W,
    pc: ae,
    pbc: R,
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
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = lt(i[r]), l.el = o.el), !s && l.patchFlag !== -2 && ro(o, l)), l.type === cn && (l.patchFlag === -1 && (l = i[r] = lt(l)), l.el = o.el), l.type === Te && !l.el && (l.el = o.el);
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
let Le = null;
function N(e = !1) {
  us.push(Le = e ? null : []);
}
function ua() {
  us.pop(), Le = us[us.length - 1] || null;
}
let ys = 1;
function Bs(e, t = !1) {
  ys += e, e < 0 && Le && t && (Le.hasOnce = !0);
}
function co(e) {
  return e.dynamicChildren = ys > 0 ? Le || Ht : null, ua(), ys > 0 && Le && Le.push(e), e;
}
function U(e, t, s, n, i, r) {
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
function kt(e, t, s, n, i) {
  return co(
    ie(
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
    scopeId: kr,
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
  Le && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Le.push(a), a;
}
const ie = fa;
function fa(e, t = null, s = null, n = 0, i = null, r = !1) {
  if ((!e || e === Nl) && (e = Te), Ks(e)) {
    const l = vt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Ws(l, s), ys > 0 && !r && Le && (l.shapeFlag & 6 ? Le[Le.indexOf(e)] = l : Le.push(l)), l.patchFlag = -2, l;
  }
  if (wa(e) && (e = e.__vccOpts), t) {
    t = da(t);
    let { class: l, style: a } = t;
    l && !he(l) && (t.class = ye(l)), oe(a) && (/* @__PURE__ */ nn(a) && !K(a) && (a = be({}, a)), t.style = en(a));
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
  return e ? /* @__PURE__ */ nn(e) || Qr(e) ? be({}, e) : e : null;
}
function vt(e, t, s = !1, n = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: a } = e, d = t ? pa(i || {}, t) : i, u = {
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
    u,
    a.clone(u)
  ), u;
}
function ha(e = " ", t = 0) {
  return ie(cn, null, e, t);
}
function Rs(e, t) {
  const s = ie(Os, null, e);
  return s.staticCount = t, s;
}
function Re(e = "", t = !1) {
  return t ? (N(), kt(Te, null, e)) : ie(Te, null, e);
}
function Xe(e) {
  return e == null || typeof e == "boolean" ? ie(Te) : K(e) ? ie(
    ee,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ks(e) ? lt(e) : ie(cn, null, String(e));
}
function lt(e) {
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
        t.class !== n.class && (t.class = ye([t.class, n.class]));
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
    et();
    const i = e.setupContext = n.length > 1 ? xa(e) : null, r = Ss(e), o = ws(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = nr(o);
    if (tt(), r(), (l || e.sp) && !as(e) && Br(e), l) {
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
  e.render || (e.render = n.render || Qe);
  {
    const i = Ss(e);
    et();
    try {
      Ul(e);
    } finally {
      tt(), i();
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
    return n === 2 ? oe(t) && !K(t) ? Ks(t) ? ie(e, null, [t]) : ie(e, t) : ie(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && Ks(s) && (s = [s]), ie(e, t, s));
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
const po = Fn ? (e) => Fn.createHTML(e) : (e) => e, Ia = "http://www.w3.org/2000/svg", Ea = "http://www.w3.org/1998/Math/MathML", rt = typeof document < "u" ? document : null, Ai = rt && /* @__PURE__ */ rt.createElement("template"), Ta = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const i = t === "svg" ? rt.createElementNS(Ia, e) : t === "mathml" ? rt.createElementNS(Ea, e) : s ? rt.createElement(e, { is: s }) : rt.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => rt.createTextNode(e),
  createComment: (e) => rt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => rt.querySelector(e),
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
}, Aa = /* @__PURE__ */ be(
  {},
  Fr,
  go
), Ma = (e) => (e.displayName = "Transition", e.props = Aa, e), Ra = /* @__PURE__ */ Ma(
  (e, { slots: t }) => Sa(El, Pa(e), t)
), Et = (e, t = []) => {
  K(e) ? e.forEach((s) => s(...t)) : e && e(...t);
}, Mi = (e) => e ? K(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Pa(e) {
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
    appearToClass: u = l,
    leaveFromClass: h = `${s}-leave-from`,
    leaveActiveClass: v = `${s}-leave-active`,
    leaveToClass: m = `${s}-leave-to`
  } = e, O = La(i), A = O && O[0], q = O && O[1], {
    onBeforeEnter: V,
    onEnter: M,
    onEnterCancelled: S,
    onLeave: I,
    onLeaveCancelled: H,
    onBeforeAppear: le = V,
    onAppear: Q = M,
    onAppearCancelled: W = S
  } = t, L = (b, k, z, ge) => {
    b._enterCancelled = ge, Tt(b, k ? u : l), Tt(b, k ? d : o), z && z();
  }, R = (b, k) => {
    b._isLeaving = !1, Tt(b, h), Tt(b, m), Tt(b, v), k && k();
  }, B = (b) => (k, z) => {
    const ge = b ? Q : M, ne = () => L(k, b, z);
    Et(ge, [k, ne]), Ri(() => {
      Tt(k, b ? a : r), nt(k, b ? u : l), Mi(ge) || Pi(k, n, A, ne);
    });
  };
  return be(t, {
    onBeforeEnter(b) {
      Et(V, [b]), nt(b, r), nt(b, o);
    },
    onBeforeAppear(b) {
      Et(le, [b]), nt(b, a), nt(b, d);
    },
    onEnter: B(!1),
    onAppear: B(!0),
    onLeave(b, k) {
      b._isLeaving = !0;
      const z = () => R(b, k);
      nt(b, h), b._enterCancelled ? (nt(b, v), $i(b)) : ($i(b), nt(b, v)), Ri(() => {
        b._isLeaving && (Tt(b, h), nt(b, m), Mi(I) || Pi(b, n, q, z));
      }), Et(I, [b, z]);
    },
    onEnterCancelled(b) {
      L(b, !1, void 0, !0), Et(S, [b]);
    },
    onAppearCancelled(b) {
      L(b, !0, void 0, !0), Et(W, [b]);
    },
    onLeaveCancelled(b) {
      R(b), Et(H, [b]);
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
  return Po(e);
}
function nt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.add(s)), (e[_s] || (e[_s] = /* @__PURE__ */ new Set())).add(t);
}
function Tt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const s = e[_s];
  s && (s.delete(t), s.size || (e[_s] = void 0));
}
function Ri(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let ka = 0;
function Pi(e, t, s, n) {
  const i = e._endId = ++ka, r = () => {
    i === e._endId && n();
  };
  if (s != null)
    return setTimeout(r, s);
  const { type: o, timeout: l, propCount: a } = $a(e, t);
  if (!o)
    return n();
  const d = o + "end";
  let u = 0;
  const h = () => {
    e.removeEventListener(d, v), r();
  }, v = (m) => {
    m.target === e && ++u >= a && h();
  };
  setTimeout(() => {
    u < a && h();
  }, l + 1), e.addEventListener(d, v);
}
function $a(e, t) {
  const s = window.getComputedStyle(e), n = (O) => (s[O] || "").split(", "), i = n(`${ht}Delay`), r = n(`${ht}Duration`), o = Li(i, r), l = n(`${Zt}Delay`), a = n(`${Zt}Duration`), d = Li(l, a);
  let u = null, h = 0, v = 0;
  t === ht ? o > 0 && (u = ht, h = o, v = r.length) : t === Zt ? d > 0 && (u = Zt, h = d, v = a.length) : (h = Math.max(o, d), u = h > 0 ? o > d ? ht : Zt : null, v = u ? u === ht ? r.length : a.length : 0);
  const m = u === ht && /\b(?:transform|all)(?:,|$)/.test(
    n(`${ht}Property`).toString()
  );
  return {
    type: u,
    timeout: h,
    propCount: v,
    hasTransform: m
  };
}
function Li(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((s, n) => ki(s) + ki(e[n])));
}
function ki(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function $i(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Oa(e, t, s) {
  const n = e[_s];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const Js = /* @__PURE__ */ Symbol("_vod"), mo = /* @__PURE__ */ Symbol("_vsh"), Ps = {
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
  return K(t) ? (s) => $s(t, s) : t;
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
}, Rt = (e, t) => {
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
}, sc = /* @__PURE__ */ be({ patchProp: qa }, Ta);
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
    const u = /* @__PURE__ */ al(s.state.value[e]);
    return pt(u, r, Object.keys(o || {}).reduce((h, v) => (h[v] = Xn(yt(() => {
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
  let d, u, h = [], v = [], m;
  const O = n.state.value[e];
  !r && !O && (n.state.value[e] = {});
  let A;
  function q(W) {
    let L;
    d = u = !1, typeof W == "function" ? (W(n.state.value[e]), L = {
      type: fs.patchFunction,
      storeId: e,
      events: m
    }) : (Vn(n.state.value[e], W), L = {
      type: fs.patchObject,
      payload: W,
      storeId: e,
      events: m
    });
    const R = A = Symbol();
    Ge().then(() => {
      A === R && (d = !0);
    }), u = !0, Dt(h, L, n.state.value[e]);
  }
  const V = r ? function() {
    const { state: L } = s, R = L ? L() : {};
    this.$patch((B) => {
      pt(B, R);
    });
  } : (
    /* istanbul ignore next */
    xo
  );
  function M() {
    o.stop(), h = [], v = [], n._s.delete(e);
  }
  const S = (W, L = "") => {
    if (Ji in W)
      return W[En] = L, W;
    const R = function() {
      fn(n);
      const B = Array.from(arguments), b = [], k = [];
      function z(X) {
        b.push(X);
      }
      function ge(X) {
        k.push(X);
      }
      Dt(v, {
        args: B,
        name: R[En],
        store: H,
        after: z,
        onError: ge
      });
      let ne;
      try {
        ne = W.apply(this && this.$id === e ? this : H, B);
      } catch (X) {
        throw Dt(k, X), X;
      }
      return ne instanceof Promise ? ne.then((X) => (Dt(b, X), X)).catch((X) => (Dt(k, X), Promise.reject(X))) : (Dt(b, ne), ne);
    };
    return R[Ji] = !0, R[En] = L, R;
  }, I = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: zi.bind(null, v),
    $patch: q,
    $reset: V,
    $subscribe(W, L = {}) {
      const R = zi(h, W, L.detached, () => B()), B = o.run(() => mt(() => n.state.value[e], (b) => {
        (L.flush === "sync" ? u : d) && W({
          storeId: e,
          type: fs.direct,
          events: m
        }, b);
      }, pt({}, a, L)));
      return R;
    },
    $dispose: M
  }, H = /* @__PURE__ */ sn(I);
  n._s.set(e, H);
  const Q = (n._a && n._a.runWithContext || lc)(() => n._e.run(() => (o = dr()).run(() => t({ action: S }))));
  for (const W in Q) {
    const L = Q[W];
    if (/* @__PURE__ */ pe(L) && !uc(L) || /* @__PURE__ */ ut(L))
      r || (O && cc(L) && (/* @__PURE__ */ pe(L) ? L.value = O[W] : Vn(L, O[W])), n.state.value[e][W] = L);
    else if (typeof L == "function") {
      const R = S(L, W);
      Q[W] = R, l.actions[W] = L;
    }
  }
  return pt(H, Q), pt(/* @__PURE__ */ se(H), Q), Object.defineProperty(H, "$state", {
    get: () => n.state.value[e],
    set: (W) => {
      q((L) => {
        pt(L, W);
      });
    }
  }), n._p.forEach((W) => {
    pt(H, o.run(() => W({
      store: H,
      app: n._a,
      pinia: n,
      options: l
    })));
  }), O && r && s.hydrate && s.hydrate(H.$state, O), d = !0, u = !0, H;
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
    dockAlign: "left",
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
    setDockAlign(e) {
      this.settings.dockAlign = e, this.save();
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
      const a = parseInt(o[1], 10), d = parseInt(o[2], 10), u = o[3] ?? "", h = u ? parseInt(u.padEnd(3, "0"), 10) : 0;
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
  "Dock Alignment": "吸附对齐",
  Left: "左对齐",
  Right: "右对齐",
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
function F(e) {
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
        console.warn(`[playlist] resolve failed for "${t.song}"`), typeof toastr < "u" && toastr.warning(`${F("Cannot play")}: ${t.song}`);
        return;
      }
      await $t().loadAndPlay(i);
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
}), $t = /* @__PURE__ */ dn("player", {
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
      const t = $t();
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
    return (t, s) => (N(), U("svg", {
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
      e.name === "play" ? (N(), U("polygon", Ic)) : e.name === "pause" ? (N(), U(ee, { key: 1 }, [
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
      ], 64)) : e.name === "prev" ? (N(), U(ee, { key: 2 }, [
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
      ], 64)) : e.name === "next" ? (N(), U(ee, { key: 3 }, [
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
      ], 64)) : e.name === "repeat" ? (N(), U(ee, { key: 4 }, [
        s[6] || (s[6] = p("polyline", { points: "17 1 21 5 17 9" }, null, -1)),
        s[7] || (s[7] = p("path", { d: "M3 11V9a4 4 0 0 1 4-4h14" }, null, -1)),
        s[8] || (s[8] = p("polyline", { points: "7 23 3 19 7 15" }, null, -1)),
        s[9] || (s[9] = p("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" }, null, -1))
      ], 64)) : e.name === "repeat-one" ? (N(), U(ee, { key: 5 }, [
        s[10] || (s[10] = Rs('<polyline points="17 1 21 5 17 9" data-v-4bfc4099></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14" data-v-4bfc4099></path><polyline points="7 23 3 19 7 15" data-v-4bfc4099></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3" data-v-4bfc4099></path><text x="12" y="14" text-anchor="middle" font-size="8" fill="currentColor" stroke="none" font-weight="bold" data-v-4bfc4099>1</text>', 5))
      ], 64)) : e.name === "shuffle" ? (N(), U(ee, { key: 6 }, [
        s[11] || (s[11] = Rs('<polyline points="16 3 21 3 21 8" data-v-4bfc4099></polyline><line x1="4" y1="20" x2="21" y2="3" data-v-4bfc4099></line><polyline points="21 16 21 21 16 21" data-v-4bfc4099></polyline><line x1="15" y1="15" x2="21" y2="21" data-v-4bfc4099></line><line x1="4" y1="4" x2="9" y2="9" data-v-4bfc4099></line>', 5))
      ], 64)) : e.name === "search" ? (N(), U(ee, { key: 7 }, [
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
      ], 64)) : e.name === "plus" ? (N(), U(ee, { key: 8 }, [
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
      ], 64)) : e.name === "x" ? (N(), U(ee, { key: 9 }, [
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
      ], 64)) : e.name === "chevron-down" ? (N(), U("polyline", Ec)) : e.name === "chevron-up" ? (N(), U("polyline", Tc)) : e.name === "music" ? (N(), U(ee, { key: 12 }, [
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
      ], 64)) : e.name === "volume" ? (N(), U(ee, { key: 13 }, [
        s[21] || (s[21] = p("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[22] || (s[22] = p("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1)),
        s[23] || (s[23] = p("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }, null, -1))
      ], 64)) : e.name === "volume-mute" ? (N(), U(ee, { key: 14 }, [
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
      ], 64)) : e.name === "check" ? (N(), U("polyline", Ac)) : e.name === "loader" ? (N(), U(ee, { key: 16 }, [
        s[27] || (s[27] = Rs('<line x1="12" y1="2" x2="12" y2="6" data-v-4bfc4099></line><line x1="12" y1="18" x2="12" y2="22" data-v-4bfc4099></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" data-v-4bfc4099></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" data-v-4bfc4099></line><line x1="2" y1="12" x2="6" y2="12" data-v-4bfc4099></line><line x1="18" y1="12" x2="22" y2="12" data-v-4bfc4099></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" data-v-4bfc4099></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" data-v-4bfc4099></line>', 8))
      ], 64)) : e.name === "list-music" ? (N(), U(ee, { key: 17 }, [
        s[28] || (s[28] = Rs('<path d="M3 12h11" data-v-4bfc4099></path><path d="M3 6h11" data-v-4bfc4099></path><path d="M3 18h7" data-v-4bfc4099></path><path d="M16 8v13" data-v-4bfc4099></path><circle cx="14" cy="21" r="2" data-v-4bfc4099></circle><path d="M16 8l5-2v3" data-v-4bfc4099></path>', 6))
      ], 64)) : Re("", !0)
    ], 8, Cc));
  }
}), xt = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, i] of t)
    s[n] = i;
  return s;
}, xe = /* @__PURE__ */ xt(Mc, [["__scopeId", "data-v-4bfc4099"]]), Rc = { class: "stmp-collapsed-bar" }, Pc = { class: "stmp-collapsed-title" }, Lc = ["aria-label"], kc = /* @__PURE__ */ _t({
  __name: "CollapsedBar",
  setup(e) {
    const t = $t(), s = yt(() => t.currentTrack?.name || F("No Song"));
    return (n, i) => (N(), U("div", Rc, [
      ie(xe, {
        name: "music",
        size: 14,
        class: "stmp-collapsed-icon"
      }),
      p("span", Pc, Z(s.value), 1),
      p("button", {
        class: "stmp-icon-btn",
        "aria-label": C(t).isPlaying ? C(F)("Pause") : C(F)("Play"),
        onClick: i[0] || (i[0] = Rt((r) => C(t).togglePlay(), ["stop"]))
      }, [
        ie(xe, {
          name: C(t).isPlaying ? "pause" : "play",
          size: 16
        }, null, 8, ["name"])
      ], 8, Lc)
    ]));
  }
}), $c = /* @__PURE__ */ xt(kc, [["__scopeId", "data-v-d0f4f061"]]), Oc = { class: "stmp-playlist" }, Dc = { class: "stmp-upload-area" }, Nc = ["aria-label"], Fc = {
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
    }, r = async (u) => {
      const h = u.target;
      if (!h.files || !h.files[0]) return;
      const v = h.files[0], m = `stmp:audio:${Date.now()}-${v.name}`, O = s.storage;
      O && (await O.setBlob(m, v), t.addLocalFile(v.name, m)), h.value = "";
    }, o = yt(() => {
      const u = {
        chat: [],
        user: [],
        local: []
      };
      return t.list.forEach((h, v) => {
        u[h.source] && u[h.source].push({ index: v, item: h });
      }), u;
    }), l = {
      chat: F("From Chat"),
      user: F("My List"),
      local: F("Local Files")
    };
    function a(u) {
      t.play(u);
    }
    function d(u) {
      t.removeItem(u);
    }
    return (u, h) => (N(), U("div", Oc, [
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
          "aria-label": C(F)("Add local file"),
          onClick: i
        }, " + " + Z(C(F)("Add local file")), 9, Nc)
      ]),
      C(t).isEmpty ? (N(), U("div", Fc, Z(C(F)("No Songs")), 1)) : (N(), U(ee, { key: 1 }, Ye(["chat", "user", "local"], (v) => p("div", {
        key: v,
        class: "stmp-group"
      }, [
        o.value[v].length ? (N(), U(ee, { key: 0 }, [
          p("div", Uc, Z(l[v]), 1),
          (N(!0), U(ee, null, Ye(o.value[v], (m) => (N(), U("div", {
            key: m.item.id,
            class: ye(["stmp-item", { active: m.index === C(t).currentIndex }]),
            onClick: (O) => a(m.index)
          }, [
            p("span", Hc, Z(m.index + 1), 1),
            p("div", jc, [
              p("span", Bc, Z(m.item.song), 1),
              m.item.artist ? (N(), U("span", Kc, Z(m.item.artist), 1)) : Re("", !0)
            ]),
            p("button", {
              class: "stmp-item-del",
              onClick: Rt((O) => d(m.index), ["stop"])
            }, [
              ie(xe, {
                name: "x",
                size: 14
              })
            ], 8, Wc)
          ], 10, Vc))), 128))
        ], 64)) : Re("", !0)
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
      const O = m.provider + m.id;
      if (o.value === O) return;
      o.value = O;
      const A = s.list.length;
      s.addFromSearch(m);
      const q = s.list.length - 1;
      q >= A && s.play(q), setTimeout(() => {
        r.value.add(O), o.value = null;
      }, 600);
    }
    function u(m) {
      const O = m.provider + m.id;
      r.value.has(O) || (s.addFromSearch(m), r.value.add(O));
    }
    function h(m) {
      return r.value.has(m.provider + m.id);
    }
    function v(m) {
      return o.value === m.provider + m.id;
    }
    return (m, O) => (N(), U("div", Gc, [
      p("div", qc, [
        it(p("input", {
          "onUpdate:modelValue": O[0] || (O[0] = (A) => i.value = A),
          class: "stmp-search-input",
          placeholder: C(F)("Search Song..."),
          onKeydown: vo(l, ["enter"])
        }, null, 40, Yc), [
          [ss, i.value]
        ]),
        p("button", {
          class: "stmp-icon-btn",
          disabled: C(t).isSearching,
          onClick: l
        }, [
          C(t).isSearching ? (N(), kt(xe, {
            key: 1,
            name: "loader",
            size: 16,
            class: "stmp-spin"
          })) : (N(), kt(xe, {
            key: 0,
            name: "search",
            size: 16
          }))
        ], 8, Xc)
      ]),
      C(t).error ? (N(), U("div", Zc, [
        p("span", null, Z(C(t).error), 1),
        p("button", {
          class: "stmp-retry-btn",
          "aria-label": C(F)("Retry"),
          onClick: a
        }, Z(C(F)("Retry")), 9, Qc)
      ])) : Re("", !0),
      C(t).isSearching ? (N(), U("div", eu, Z(C(F)("Searching...")), 1)) : i.value && !C(t).results.length ? (N(), U("div", tu, Z(C(F)("No results")), 1)) : !i.value && !C(t).results.length ? (N(), U("div", su, Z(C(F)("Type a song name to search")), 1)) : Re("", !0),
      C(t).results.length ? (N(), U("div", nu, [
        (N(!0), U(ee, null, Ye(C(t).results, (A) => (N(), U("div", {
          key: A.provider + A.id,
          class: ye(["stmp-result", { "stmp-result-playing": v(A) }])
        }, [
          p("div", {
            class: "stmp-result-info",
            onClick: (q) => d(A)
          }, [
            p("span", ru, Z(A.name), 1),
            A.artist ? (N(), U("span", ou, Z(A.artist), 1)) : Re("", !0)
          ], 8, iu),
          p("button", {
            class: ye(["stmp-icon-btn stmp-result-add", { added: h(A) }]),
            "aria-label": h(A) ? C(F)("Added") : C(F)("Add to list"),
            onClick: Rt((q) => u(A), ["stop"])
          }, [
            ie(xe, {
              name: h(A) ? "check" : "plus",
              size: 16
            }, null, 8, ["name"])
          ], 10, lu)
        ], 2))), 128))
      ])) : Re("", !0)
    ]));
  }
}), cu = /* @__PURE__ */ xt(au, [["__scopeId", "data-v-a8d156af"]]), uu = { class: "stmp-panel" }, fu = { class: "stmp-topbar stmp-drag-handle" }, du = ["aria-label"], hu = { class: "stmp-cover-large" }, pu = ["src"], gu = {
  key: 1,
  class: "stmp-cover-placeholder"
}, mu = { class: "stmp-track-name" }, vu = { class: "stmp-track-artist" }, yu = { class: "stmp-lyric-header" }, bu = { class: "stmp-track-name" }, _u = { class: "stmp-track-artist" }, xu = {
  key: 0,
  class: "stmp-lyric-empty"
}, wu = { class: "stmp-progress" }, Su = ["value"], Cu = { class: "stmp-time" }, Iu = { class: "stmp-controls" }, Eu = { class: "stmp-ctrl-side stmp-search-side" }, Tu = ["aria-label"], Au = ["aria-label"], Mu = ["aria-label"], Ru = ["aria-label"], Pu = ["aria-label"], Lu = ["aria-label"], ku = { class: "stmp-ctrl-side stmp-volume-side" }, $u = ["aria-label"], Ou = ["value"], Du = {
  key: 0,
  class: "stmp-overlay"
}, Nu = { class: "stmp-overlay-header" }, Fu = { class: "stmp-overlay-title" }, Uu = ["aria-label"], Vu = { class: "stmp-overlay-body" }, Hu = /* @__PURE__ */ _t({
  __name: "PlayerPanel",
  emits: ["collapse"],
  setup(e) {
    const t = $t(), s = Cs(), n = Ie(), i = /* @__PURE__ */ we("cover"), r = /* @__PURE__ */ we(null), o = /* @__PURE__ */ we(!1), l = /* @__PURE__ */ we(!1);
    let a = null;
    const d = yt(() => t.currentTrack?.cover || ""), u = () => {
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
    ), v = /* @__PURE__ */ we(0), m = /* @__PURE__ */ we([]), O = /* @__PURE__ */ we(null);
    function A(b, k) {
      b && (m.value[k] = b);
    }
    async function q() {
      await Ge();
      const b = t.currentLyricIndex, k = O.value;
      if (!k || b < 0) {
        v.value = 0;
        return;
      }
      const z = m.value[b];
      if (!z) return;
      const ge = z.offsetTop, ne = z.offsetHeight, X = k.clientHeight;
      v.value = ge - X / 2 + ne / 2;
    }
    mt(() => t.currentLyricIndex, q), mt(() => t.lyrics, () => {
      m.value = [], q();
    });
    function V(b) {
      const k = Math.floor(b / 60), z = Math.floor(b % 60);
      return k + ":" + z.toString().padStart(2, "0");
    }
    function M(b) {
      const k = b.target;
      t.seek(Number(k.value) / 100 * t.duration);
    }
    const S = ["list", "random", "single"], I = {
      list: "repeat",
      random: "shuffle",
      single: "repeat-one"
    };
    function H() {
      const b = n.settings.playMode, k = S.indexOf(b), z = S[(k + 1) % S.length];
      n.setPlayMode(z);
    }
    function le(b) {
      const k = b.target;
      t.setVolume(Number(k.value));
    }
    function Q() {
      a && clearTimeout(a), l.value = !0;
    }
    function W() {
      a = setTimeout(() => {
        l.value = !1;
      }, 300);
    }
    function L() {
      t.volume > 0 ? t.setVolume(0) : t.setVolume(65);
    }
    function R(b) {
      r.value === b ? r.value = null : r.value = b;
    }
    function B() {
      r.value = null;
    }
    return (b, k) => (N(), U("div", uu, [
      p("div", fu, [
        k[7] || (k[7] = p("div", { class: "stmp-topbar-spacer" }, null, -1)),
        p("button", {
          class: "stmp-icon-btn",
          "aria-label": C(F)("Collapse panel"),
          onClick: k[0] || (k[0] = Rt((z) => b.$emit("collapse"), ["stop"]))
        }, [
          ie(xe, {
            name: "chevron-down",
            size: 18
          })
        ], 8, du)
      ]),
      p("div", {
        class: "stmp-display",
        onClick: k[1] || (k[1] = (z) => i.value = i.value === "cover" ? "lyric" : "cover")
      }, [
        p("div", {
          class: ye(["stmp-cover-mode", { hidden: i.value !== "cover" }])
        }, [
          p("div", hu, [
            d.value && !o.value ? (N(), U("img", {
              key: 0,
              src: d.value,
              alt: "cover",
              onError: u
            }, null, 40, pu)) : (N(), U("div", gu, [
              ie(xe, {
                name: "music",
                size: 48
              })
            ]))
          ]),
          p("div", mu, Z(C(t).currentTrack?.name || C(F)("No Song")), 1),
          p("div", vu, Z(C(t).currentTrack?.artist || " "), 1)
        ], 2),
        p("div", {
          class: ye(["stmp-lyric-mode", { hidden: i.value !== "lyric" }])
        }, [
          p("div", yu, [
            p("div", bu, Z(C(t).currentTrack?.name || C(F)("No Song")), 1),
            p("div", _u, Z(C(t).currentTrack?.artist || " "), 1)
          ]),
          p("div", {
            ref_key: "lyricWindowRef",
            ref: O,
            class: "stmp-lyric-window"
          }, [
            C(t).lyrics.length === 0 ? (N(), U("div", xu, [
              ie(xe, {
                name: "music",
                size: 18
              })
            ])) : (N(), U("div", {
              key: 1,
              class: "stmp-lyric-scroll",
              style: en({ transform: `translateY(-${v.value}px)` })
            }, [
              (N(!0), U(ee, null, Ye(C(t).lyrics, (z, ge) => (N(), U("div", {
                key: ge,
                ref_for: !0,
                ref: (ne) => A(ne, ge),
                class: ye(["stmp-lyric-line", { "stmp-lyric-active": ge === C(t).currentLyricIndex }])
              }, Z(z.text), 3))), 128))
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
          onInput: M
        }, null, 40, Su),
        p("div", Cu, [
          p("span", null, Z(V(C(t).currentTime)), 1),
          p("span", null, Z(V(C(t).duration)), 1)
        ])
      ]),
      p("div", Iu, [
        p("div", Eu, [
          p("button", {
            class: ye(["stmp-ctrl-btn", { active: r.value === "search" }]),
            "aria-label": C(F)("Search"),
            onClick: k[2] || (k[2] = Rt((z) => R("search"), ["stop"]))
          }, [
            ie(xe, {
              name: "search",
              size: 18
            })
          ], 10, Tu)
        ]),
        p("button", {
          class: "stmp-ctrl-btn",
          "aria-label": C(F)("Toggle play mode"),
          onClick: H
        }, [
          ie(xe, {
            name: I[C(n).settings.playMode],
            size: 18
          }, null, 8, ["name"])
        ], 8, Au),
        p("button", {
          class: "stmp-ctrl-btn",
          "aria-label": C(F)("Previous"),
          onClick: k[3] || (k[3] = (z) => C(s).prev())
        }, [
          ie(xe, {
            name: "prev",
            size: 18
          })
        ], 8, Mu),
        p("button", {
          class: "stmp-ctrl-btn stmp-play-btn",
          "aria-label": C(t).isPlaying ? C(F)("Pause") : C(F)("Play"),
          onClick: k[4] || (k[4] = (z) => C(t).togglePlay())
        }, [
          ie(xe, {
            name: C(t).isPlaying ? "pause" : "play",
            size: 24
          }, null, 8, ["name"])
        ], 8, Ru),
        p("button", {
          class: "stmp-ctrl-btn",
          "aria-label": C(F)("Next"),
          onClick: k[5] || (k[5] = (z) => C(s).next())
        }, [
          ie(xe, {
            name: "next",
            size: 18
          })
        ], 8, Pu),
        p("button", {
          class: ye(["stmp-ctrl-btn", { active: r.value === "list" }]),
          "aria-label": C(F)("Playlist"),
          onClick: k[6] || (k[6] = Rt((z) => R("list"), ["stop"]))
        }, [
          ie(xe, {
            name: "list-music",
            size: 18
          })
        ], 10, Lu),
        p("div", ku, [
          p("div", {
            class: "stmp-volume-container",
            onMouseenter: Q,
            onMouseleave: W
          }, [
            p("button", {
              class: "stmp-ctrl-btn",
              "aria-label": C(F)("Mute / Unmute"),
              onClick: L
            }, [
              ie(xe, {
                name: C(t).volume === 0 ? "volume-mute" : "volume",
                size: 18
              }, null, 8, ["name"])
            ], 8, $u),
            p("div", {
              class: ye(["stmp-volume-popup", { show: l.value }])
            }, [
              p("input", {
                type: "range",
                min: "0",
                max: "100",
                value: C(t).volume,
                class: "stmp-volume-vertical",
                orient: "vertical",
                onInput: le
              }, null, 40, Ou)
            ], 2)
          ], 32)
        ])
      ]),
      ie(Ra, { name: "stmp-overlay" }, {
        default: $r(() => [
          r.value ? (N(), U("div", Du, [
            p("div", Nu, [
              p("span", Fu, Z(r.value === "list" ? C(F)("Playlist") : C(F)("Search")), 1),
              p("button", {
                class: "stmp-overlay-close",
                "aria-label": C(F)("Close"),
                onClick: Rt(B, ["stop"])
              }, [
                ie(xe, {
                  name: "x",
                  size: 16
                })
              ], 8, Uu)
            ]),
            p("div", Vu, [
              r.value === "list" ? (N(), kt(Jc, { key: 0 })) : (N(), kt(cu, { key: 1 }))
            ])
          ])) : Re("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), ju = /* @__PURE__ */ xt(Hu, [["__scopeId", "data-v-b6793b97"]]), Bu = /* @__PURE__ */ _t({
  __name: "App",
  setup(e) {
    const t = Ie(), s = $t(), n = /* @__PURE__ */ we(!1), i = /* @__PURE__ */ we(null);
    let r = null;
    const o = yt(() => t.settings.widgetMode === "dock"), l = yt(() => t.settings.widgetMode === "hidden"), a = (R) => {
      R.key === "Escape" && (n.value = !1), R.key === " " && R.target === document.body && (R.preventDefault(), s.togglePlay());
    };
    let d = 0, u = 0, h = 0, v = 0, m = !1, O = !1, A = null, q = null;
    function V(R) {
      if (o.value) return;
      const B = R.target;
      if (B.closest("input, .stmp-result, .stmp-item, .stmp-upload-btn, .stmp-search-input, .stmp-controls, .stmp-lyrics, .stmp-overlay, .stmp-display, .stmp-overlay-close") || n.value && (!B.closest(".stmp-drag-handle") || B.closest("button")) || !n.value && B.closest("button"))
        return;
      const b = i.value?.getBoundingClientRect();
      b && (d = R.clientX, u = R.clientY, h = b.left, v = b.top, m = !1, O = !0, i.value && (i.value.style.left = b.left + "px", i.value.style.top = b.top + "px", i.value.style.right = "auto", i.value.style.bottom = "auto"), A = M, q = S, document.addEventListener("pointermove", A), document.addEventListener("pointerup", q), R.preventDefault());
    }
    function M(R) {
      if (!i.value || !O) return;
      const B = R.clientX - d, b = R.clientY - u;
      (Math.abs(B) > 3 || Math.abs(b) > 3) && (m = !0);
      let k = h + B, z = v + b;
      const ge = i.value.offsetWidth || 60, ne = i.value.offsetHeight || 40, X = window.innerWidth - ge, ae = window.innerHeight - ne;
      k = Math.max(0, Math.min(k, X)), z = Math.max(0, Math.min(z, ae)), i.value.style.left = k + "px", i.value.style.top = z + "px";
    }
    function S() {
      if (O = !1, A && document.removeEventListener("pointermove", A), q && document.removeEventListener("pointerup", q), A = null, q = null, !m) {
        W();
        return;
      }
      if (i.value) {
        const R = i.value.getBoundingClientRect();
        t.setPosition({ x: R.left, y: R.top }), n.value && Ge(() => I());
      }
    }
    function I() {
      if (!i.value) return;
      const R = i.value.getBoundingClientRect(), B = i.value.offsetWidth, b = i.value.offsetHeight;
      let k = R.left, z = R.top;
      k + B > window.innerWidth && (k = window.innerWidth - B), z + b > window.innerHeight && (z = window.innerHeight - b), k < 0 && (k = 0), z < 0 && (z = 0), i.value.style.left = k + "px", i.value.style.top = z + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", t.setPosition({ x: k, y: z });
    }
    function H() {
      if (!i.value || !o.value) return;
      const R = document.querySelector("#send_form");
      if (!R) return;
      const B = R.getBoundingClientRect(), b = i.value.offsetHeight || 38, k = Math.max(80, B.top - 8);
      i.value.style.maxHeight = k + "px";
      let z = B.top - Math.min(b, k);
      if (z < 4 && (z = 4), window.innerWidth <= 768)
        i.value.style.left = B.left + "px", i.value.style.width = B.width + "px";
      else {
        const ge = t.settings.dockAlign === "right", ne = i.value.offsetWidth;
        ge ? i.value.style.left = B.right - ne + "px" : i.value.style.left = B.left + "px", i.value.style.width = "";
      }
      i.value.style.top = z + "px", i.value.style.right = "auto", i.value.style.bottom = "auto";
    }
    function le() {
      if (!i.value || o.value) return;
      const R = t.settings.position;
      R ? (i.value.style.left = R.x + "px", i.value.style.top = R.y + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", window.innerWidth <= 768 && Ge(() => I())) : (i.value.style.right = "16px", i.value.style.top = "16px", i.value.style.left = "auto", i.value.style.bottom = "auto");
    }
    function Q(R) {
      if (o.value && !n.value) {
        if (R.target.closest("button, input")) return;
        W();
      }
    }
    function W() {
      n.value = !n.value, Ge(() => {
        o.value ? H() : t.settings.position && I();
      });
    }
    mt(() => t.settings.widgetMode, (R) => {
      Ge(() => {
        R === "dock" ? H() : le();
      });
    }), Qn(() => {
      Ge(() => {
        o.value ? H() : le();
      }), i.value && typeof ResizeObserver < "u" && (r = new ResizeObserver(() => {
        o.value && H();
      }), r.observe(i.value)), window.addEventListener("resize", L), window.addEventListener("keydown", a);
    });
    function L() {
      o.value ? Ge(() => H()) : Ge(() => I());
    }
    return ei(() => {
      S(), r && (r.disconnect(), r = null), window.removeEventListener("resize", L), window.removeEventListener("keydown", a);
    }), (R, B) => l.value ? Re("", !0) : (N(), U("div", {
      key: 0,
      ref_key: "widgetRef",
      ref: i,
      class: ye(["stmp-widget", {
        "stmp-expanded": n.value,
        "stmp-collapsed": !n.value,
        "stmp-dock": o.value
      }]),
      onPointerdown: V,
      onClick: Q
    }, [
      n.value ? (N(), kt(ju, {
        key: 1,
        onCollapse: W
      })) : (N(), kt($c, { key: 0 }))
    ], 34));
  }
}), Ku = /* @__PURE__ */ xt(Bu, [["__scopeId", "data-v-78a0d820"]]), Wu = { class: "stmp-switch-row" }, zu = {
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
    return (i, r) => (N(), U("label", Wu, [
      e.label ? (N(), U("span", zu, Z(e.label), 1)) : Re("", !0),
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
}), Zi = /* @__PURE__ */ xt(qu, [["__scopeId", "data-v-d86a29bd"]]), Yu = { class: "stmp-settings" }, Xu = { class: "stmp-tab-bar" }, Zu = ["onClick"], Qu = { class: "stmp-tab-content" }, ef = { class: "stmp-tab-panel" }, tf = { class: "stmp-setting-group" }, sf = { class: "stmp-setting-label" }, nf = { class: "stmp-mode-toggle" }, rf = ["onClick"], of = {
  key: 0,
  class: "stmp-setting-group"
}, lf = { class: "stmp-setting-label" }, af = { class: "stmp-mode-toggle" }, cf = ["onClick"], uf = { class: "stmp-setting-group" }, ff = { class: "stmp-setting-label" }, df = ["value"], hf = { class: "stmp-setting-group" }, pf = {
  class: "stmp-setting-label",
  for: "stmp-playmode"
}, gf = ["value"], mf = ["value"], vf = { class: "stmp-tab-panel" }, yf = {
  key: 0,
  class: "stmp-provider-fields"
}, bf = ["onUpdate:modelValue", "placeholder"], _f = {
  key: 1,
  class: "stmp-provider-fields"
}, xf = ["onUpdate:modelValue", "placeholder"], wf = ["onUpdate:modelValue", "placeholder"], Sf = { class: "stmp-tab-panel" }, Cf = { class: "stmp-setting-group" }, If = { class: "stmp-setting-label" }, Ef = { class: "stmp-rules" }, Tf = ["onClick"], Af = { class: "stmp-rule-add" }, Mf = ["placeholder"], Rf = { class: "stmp-tab-panel" }, Pf = { class: "stmp-data-btns" }, Lf = /* @__PURE__ */ _t({
  __name: "SettingsView",
  setup(e) {
    const t = Ie(), s = /* @__PURE__ */ we("playback"), n = [
      { id: "playback", label: F("Playback"), icon: "fa-solid fa-music" },
      { id: "providers", label: F("Providers"), icon: "fa-solid fa-cloud" },
      { id: "cue", label: F("AI Cue"), icon: "fa-solid fa-wand-magic-sparkles" },
      { id: "data", label: F("Data"), icon: "fa-solid fa-database" }
    ], i = [
      { value: "list", label: F("List Loop") },
      { value: "random", label: F("Random") },
      { value: "single", label: F("Single Loop") }
    ], r = [
      { value: "dock", label: F("Dock"), icon: "fa-solid fa-grip-lines" },
      { value: "drag", label: F("Drag"), icon: "fa-solid fa-up-down-left-right" },
      { value: "hidden", label: F("Hidden"), icon: "fa-solid fa-eye-slash" }
    ], o = [
      { value: "left", label: F("Left"), icon: "fa-solid fa-align-left" },
      { value: "right", label: F("Right"), icon: "fa-solid fa-align-right" }
    ];
    function l(V) {
      const M = V.target;
      t.setVolume(Number(M.value));
    }
    function a(V) {
      const M = V.target;
      t.setPlayMode(M.value);
    }
    const d = {
      netease: F("NetEase"),
      local: F("Local Files"),
      custom: F("Custom API")
    };
    function u(V) {
      const M = t.settings.providers.find((S) => S.id === V);
      M && (M.enabled = !M.enabled, t.save());
    }
    const h = /* @__PURE__ */ we("");
    function v() {
      const V = h.value.trim();
      V && (t.addCustomCueRule(V), h.value = "");
    }
    function m(V) {
      t.removeCustomCueRule(V);
    }
    const O = async () => {
      const V = t.storage;
      V && (await V.clearCache(), toastr.success(F("Cache cleared")));
    }, A = () => {
      const V = JSON.stringify(t.settings, null, 2), M = new Blob([V], { type: "application/json" }), S = URL.createObjectURL(M), I = document.createElement("a");
      I.href = S, I.download = "st-music-player-settings.json", I.click(), URL.revokeObjectURL(S);
    }, q = () => {
      const V = document.createElement("input");
      V.type = "file", V.accept = ".json", V.onchange = async (M) => {
        const S = M.target.files?.[0];
        if (!S) return;
        const I = await S.text();
        try {
          const H = JSON.parse(I);
          if (typeof H != "object" || H === null) throw new Error("Not an object");
          const le = ["volume", "playMode", "position", "widgetMode", "autoPlayOnNewCue", "providers", "customCueRules"], Q = {};
          for (const W of le)
            W in H && (Q[W] = H[W]);
          if (typeof Q.volume != "number" || Q.volume < 0 || Q.volume > 100)
            throw new Error("Invalid volume");
          if (typeof Q.playMode != "string" || !["list", "random", "single"].includes(Q.playMode))
            throw new Error("Invalid playMode");
          if (Q.providers && !Array.isArray(Q.providers))
            throw new Error("Invalid providers");
          if (Q.customCueRules && !Array.isArray(Q.customCueRules))
            throw new Error("Invalid customCueRules");
          Object.assign(t.settings, Q), t.save(), toastr.success(F("Data imported"));
        } catch (H) {
          console.error("Import failed", H), toastr.error(F("Import failed") + ": " + (H instanceof Error ? H.message : F("Invalid JSON")));
        }
      }, V.click();
    };
    return (V, M) => (N(), U("div", Yu, [
      p("div", Xu, [
        (N(), U(ee, null, Ye(n, (S) => p("div", {
          key: S.id,
          class: ye(["stmp-tab", { active: s.value === S.id }]),
          onClick: (I) => s.value = S.id
        }, [
          p("i", {
            class: ye(S.icon)
          }, null, 2),
          p("span", null, Z(S.label), 1)
        ], 10, Zu)), 64))
      ]),
      p("div", Qu, [
        it(p("div", ef, [
          p("div", tf, [
            p("label", sf, Z(C(F)("Widget Mode")), 1),
            p("div", nf, [
              (N(), U(ee, null, Ye(r, (S) => p("div", {
                key: S.value,
                class: ye(["menu_button menu_button_icon stmp-mode-btn", { toggled: C(t).settings.widgetMode === S.value }]),
                onClick: (I) => C(t).setWidgetMode(S.value)
              }, [
                p("i", {
                  class: ye(S.icon)
                }, null, 2),
                p("span", null, Z(S.label), 1)
              ], 10, rf)), 64))
            ])
          ]),
          C(t).settings.widgetMode === "dock" ? (N(), U("div", of, [
            p("label", lf, Z(C(F)("Dock Alignment")), 1),
            p("div", af, [
              (N(), U(ee, null, Ye(o, (S) => p("div", {
                key: S.value,
                class: ye(["menu_button menu_button_icon stmp-mode-btn", { toggled: C(t).settings.dockAlign === S.value }]),
                onClick: (I) => C(t).setDockAlign(S.value)
              }, [
                p("i", {
                  class: ye(S.icon)
                }, null, 2),
                p("span", null, Z(S.label), 1)
              ], 10, cf)), 64))
            ])
          ])) : Re("", !0),
          p("div", uf, [
            p("label", ff, Z(C(F)("Default Volume")) + ": " + Z(C(t).settings.volume), 1),
            p("input", {
              type: "range",
              min: "0",
              max: "100",
              value: C(t).settings.volume,
              onInput: l
            }, null, 40, df)
          ]),
          p("div", hf, [
            p("label", pf, Z(C(F)("Default Play Mode")), 1),
            p("select", {
              id: "stmp-playmode",
              class: "text_pole",
              value: C(t).settings.playMode,
              onChange: a
            }, [
              (N(), U(ee, null, Ye(i, (S) => p("option", {
                key: S.value,
                value: S.value
              }, Z(S.label), 9, mf)), 64))
            ], 40, gf)
          ]),
          ie(Zi, {
            "model-value": C(t).settings.autoPlayOnNewCue,
            label: C(F)("Auto-play on new cue"),
            "onUpdate:modelValue": M[0] || (M[0] = (S) => {
              C(t).settings.autoPlayOnNewCue = S, C(t).save();
            })
          }, null, 8, ["model-value", "label"])
        ], 512), [
          [Ps, s.value === "playback"]
        ]),
        it(p("div", vf, [
          (N(!0), U(ee, null, Ye(C(t).settings.providers, (S) => (N(), U("div", {
            key: S.id,
            class: "stmp-provider-card"
          }, [
            ie(Zi, {
              "model-value": S.enabled,
              label: d[S.id] || S.id,
              "onUpdate:modelValue": () => u(S.id)
            }, null, 8, ["model-value", "label", "onUpdate:modelValue"]),
            S.id === "netease" && S.enabled ? (N(), U("div", yf, [
              it(p("input", {
                class: "text_pole",
                "onUpdate:modelValue": (I) => S.config.baseURL = I,
                placeholder: C(F)("API baseURL"),
                onChange: M[1] || (M[1] = (I) => C(t).save())
              }, null, 40, bf), [
                [ss, S.config.baseURL]
              ])
            ])) : Re("", !0),
            S.id === "custom" && S.enabled ? (N(), U("div", _f, [
              it(p("input", {
                class: "text_pole",
                "onUpdate:modelValue": (I) => S.config.searchURL = I,
                placeholder: C(F)("Search URL"),
                onChange: M[2] || (M[2] = (I) => C(t).save())
              }, null, 40, xf), [
                [ss, S.config.searchURL]
              ]),
              it(p("input", {
                class: "text_pole",
                "onUpdate:modelValue": (I) => S.config.resolveURL = I,
                placeholder: C(F)("Resolve URL"),
                onChange: M[3] || (M[3] = (I) => C(t).save())
              }, null, 40, wf), [
                [ss, S.config.resolveURL]
              ])
            ])) : Re("", !0)
          ]))), 128))
        ], 512), [
          [Ps, s.value === "providers"]
        ]),
        it(p("div", Sf, [
          p("div", Cf, [
            p("label", If, Z(C(F)("Custom Cue Rules (Regex)")), 1),
            p("div", Ef, [
              (N(!0), U(ee, null, Ye(C(t).settings.customCueRules, (S, I) => (N(), U("div", {
                key: I,
                class: "stmp-rule"
              }, [
                p("code", null, Z(S), 1),
                p("div", {
                  class: "menu_button menu_button_icon stmp-rule-del",
                  onClick: (H) => m(I)
                }, [...M[5] || (M[5] = [
                  p("i", { class: "fa-solid fa-xmark" }, null, -1)
                ])], 8, Tf)
              ]))), 128))
            ]),
            p("div", Af, [
              it(p("input", {
                "onUpdate:modelValue": M[4] || (M[4] = (S) => h.value = S),
                class: "text_pole",
                placeholder: C(F)("Add regex rule..."),
                onKeydown: vo(v, ["enter"])
              }, null, 40, Mf), [
                [ss, h.value]
              ]),
              p("div", {
                class: "menu_button menu_button_icon stmp-rule-add-btn",
                onClick: v
              }, [...M[6] || (M[6] = [
                p("i", { class: "fa-solid fa-plus" }, null, -1)
              ])])
            ])
          ])
        ], 512), [
          [Ps, s.value === "cue"]
        ]),
        it(p("div", Rf, [
          p("div", Pf, [
            p("div", {
              class: "menu_button menu_button_icon stmp-data-btn",
              onClick: O
            }, [
              M[7] || (M[7] = p("i", { class: "fa-solid fa-trash-can" }, null, -1)),
              p("span", null, Z(C(F)("Clear cache")), 1)
            ]),
            p("div", {
              class: "menu_button menu_button_icon stmp-data-btn",
              onClick: A
            }, [
              M[8] || (M[8] = p("i", { class: "fa-solid fa-file-export" }, null, -1)),
              p("span", null, Z(C(F)("Export data")), 1)
            ]),
            p("div", {
              class: "menu_button menu_button_icon stmp-data-btn",
              onClick: q
            }, [
              M[9] || (M[9] = p("i", { class: "fa-solid fa-file-import" }, null, -1)),
              p("span", null, Z(C(F)("Import data")), 1)
            ])
          ])
        ], 512), [
          [Ps, s.value === "data"]
        ])
      ])
    ]));
  }
}), kf = /* @__PURE__ */ xt(Lf, [["__scopeId", "data-v-b7fca2b6"]]);
class $f {
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
        const u = l(d[0]);
        this.emit(o, u);
      };
      s.on(r, a), this.registered.push({ event: r, handler: a });
    };
    i(n.CHAT_CHANGED, "chat-changed", (r) => ({
      chatId: typeof r == "string" ? r : void 0
    })), i(n.GENERATION_ENDED, "message-generated", (r) => ({
      messageId: ks(r)
    })), i(n.MESSAGE_UPDATED, "message-updated", (r) => ({
      messageId: ks(r)
    })), i(n.MESSAGE_DELETED, "message-deleted", (r) => ({
      messageId: ks(r)
    })), i(n.MESSAGE_SWIPED, "message-swiped", (r) => ({
      messageId: ks(r)
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
function ks(e) {
  if (e == null) return;
  const t = typeof e == "number" ? e : parseInt(String(e), 10);
  return Number.isFinite(t) ? t : void 0;
}
function Of() {
  return new $f();
}
const Df = [
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
  for (const i of Df)
    for (const r of Qi(i, e)) n(r);
  for (const i of t)
    try {
      const r = new RegExp(i, "g");
      for (const o of Qi(r, e)) n(o);
    } catch {
    }
  return [...s.values()].sort((i, r) => i.index - r.index).map((i) => i.cue);
}
class Nf {
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
let Kt = null, ot = null, ds = null, hs = null, Wt = null, Gs = null;
const Ff = `
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
function Uf() {
  const e = $("#extensions_settings2");
  if (!e || !e.length || (e.append(Ff), hs = e.children(".inline-drawer").last()[0] ?? null, !hs)) return;
  const t = hs.querySelector("#stmp-settings-mount");
  t && Gs && (Wt = yo(kf), Wt.use(Gs), Wt.mount(t));
}
function Vf() {
  Wt && (Wt.unmount(), Wt = null), hs?.remove(), hs = null;
}
function Hf(e, t, s) {
  ot = Of(), ot.on("chat-changed", () => {
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
  }), ot.on("message-generated", (n) => {
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
  }), ot.on("message-updated", (n) => {
    n.messageId !== void 0 && t.handleMessageUpdate(n.messageId);
  }), ot.on("message-deleted", (n) => {
    n.messageId !== void 0 && t.handleMessageDelete(n.messageId);
  }), ot.on("message-swiped", (n) => {
    n.messageId !== void 0 && t.handleMessageUpdate(n.messageId);
  }), ot.start();
}
function jf(e, t, s) {
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
async function Wf() {
  try {
    const e = document.createElement("div");
    e.id = "st-music-player-root", document.documentElement.appendChild(e);
    const t = oc();
    Gs = t, Kt = yo(Ku), Kt.use(t), Kt.mount(e);
    const s = Ie(), n = mc();
    s.init(n);
    const i = $t();
    i.init(), i.setVolume(s.settings.volume);
    const r = new Nf((a) => SillyTavern.getContext().chat[a]?.mes), o = Cs();
    o.init(r), Uf();
    const l = SillyTavern.getContext();
    ds = () => {
      Hf(r, o, s), jf(r, o, s);
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
  if (ot?.stop(), ot = null, Kt) {
    try {
      $t().destroy();
    } catch {
    }
    Kt.unmount(), Kt = null;
  }
  const e = document.getElementById("st-music-player-root");
  e && e.remove(), Vf(), Gs = null;
}
function zf() {
  Co();
}
async function Bf() {
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
async function Jf() {
  await Bf(), Co();
}
export {
  Bf as clean,
  Jf as delete,
  Co as destroy,
  zf as disable,
  Wf as init
};
