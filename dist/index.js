/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function jn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const de = {}, Ht = [], et = () => {
}, tr = () => !1, Gs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ys = (e) => e.startsWith("onUpdate:"), xe = Object.assign, Bn = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, To = Object.prototype.hasOwnProperty, le = (e, t) => To.call(e, t), K = Array.isArray, jt = (e) => ws(e) === "[object Map]", sr = (e) => ws(e) === "[object Set]", ci = (e) => ws(e) === "[object Date]", Y = (e) => typeof e == "function", ge = (e) => typeof e == "string", Ne = (e) => typeof e == "symbol", ae = (e) => e !== null && typeof e == "object", nr = (e) => (ae(e) || Y(e)) && Y(e.then) && Y(e.catch), ir = Object.prototype.toString, ws = (e) => ir.call(e), Ao = (e) => ws(e).slice(8, -1), rr = (e) => ws(e) === "[object Object]", Xs = (e) => ge(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, is = /* @__PURE__ */ jn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Zs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Mo = /-\w/g, He = Zs(
  (e) => e.replace(Mo, (t) => t.slice(1).toUpperCase())
), Po = /\B([A-Z])/g, xt = Zs(
  (e) => e.replace(Po, "-$1").toLowerCase()
), or = Zs((e) => e.charAt(0).toUpperCase() + e.slice(1)), gn = Zs(
  (e) => e ? `on${or(e)}` : ""
), Qe = (e, t) => !Object.is(e, t), Ls = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, lr = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, Kn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Ro = (e) => {
  const t = ge(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ui;
const Qs = () => ui || (ui = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function en(e) {
  if (K(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], i = ge(n) ? Oo(n) : en(n);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (ge(e) || ae(e))
    return e;
}
const ko = /;(?![^(]*\))/g, $o = /:([^]+)/, Lo = /\/\*[^]*?\*\//g;
function Oo(e) {
  const t = {};
  return e.replace(Lo, "").split(ko).forEach((s) => {
    if (s) {
      const n = s.split($o);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function be(e) {
  let t = "";
  if (ge(e))
    t = e;
  else if (K(e))
    for (let s = 0; s < e.length; s++) {
      const n = be(e[s]);
      n && (t += n + " ");
    }
  else if (ae(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const Do = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", No = /* @__PURE__ */ jn(Do);
function ar(e) {
  return !!e || e === "";
}
function Fo(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = Wn(e[n], t[n]);
  return s;
}
function Wn(e, t) {
  if (e === t) return !0;
  let s = ci(e), n = ci(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = Ne(e), n = Ne(t), s || n)
    return e === t;
  if (s = K(e), n = K(t), s || n)
    return s && n ? Fo(e, t) : !1;
  if (s = ae(e), n = ae(t), s || n) {
    if (!s || !n)
      return !1;
    const i = Object.keys(e).length, r = Object.keys(t).length;
    if (i !== r)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), a = t.hasOwnProperty(o);
      if (l && !a || !l && a || !Wn(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const cr = (e) => !!(e && e.__v_isRef === !0), Z = (e) => ge(e) ? e : e == null ? "" : K(e) || ae(e) && (e.toString === ir || !Y(e.toString)) ? cr(e) ? Z(e.value) : JSON.stringify(e, ur, 2) : String(e), ur = (e, t) => cr(t) ? ur(e, t.value) : jt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], r) => (s[mn(n, r) + " =>"] = i, s),
    {}
  )
} : sr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => mn(s))
} : Ne(t) ? mn(t) : ae(t) && !K(t) && !rr(t) ? String(t) : t, mn = (e, t = "") => {
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
let _e;
class fr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && _e && (_e.active ? (this.parent = _e, this.index = (_e.scopes || (_e.scopes = [])).push(
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
      const s = _e;
      try {
        return _e = this, t();
      } finally {
        _e = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = _e, _e = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (_e === this)
        _e = this.prevScope;
      else {
        let t = _e;
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
  return _e;
}
function Uo(e, t = !1) {
  _e && _e.cleanups.push(e);
}
let he;
const vn = /* @__PURE__ */ new WeakSet();
class pr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, _e && (_e.active ? _e.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, vn.has(this) && (vn.delete(this), this.trigger()));
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
    const t = he, s = je;
    he = this, je = !0;
    try {
      return this.fn();
    } finally {
      yr(this), he = t, je = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        qn(t);
      this.deps = this.depsTail = void 0, fi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? vn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Mn(this) && this.run();
  }
  get dirty() {
    return Mn(this);
  }
}
let gr = 0, rs, os;
function mr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = os, os = e;
    return;
  }
  e.next = rs, rs = e;
}
function zn() {
  gr++;
}
function Jn() {
  if (--gr > 0)
    return;
  if (os) {
    let t = os;
    for (os = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; rs; ) {
    let t = rs;
    for (rs = void 0; t; ) {
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
    n.version === -1 ? (n === s && (s = i), qn(n), Vo(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = s;
}
function Mn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (br(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function br(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === gs) || (e.globalVersion = gs, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Mn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = he, n = je;
  he = e, je = !0;
  try {
    vr(e);
    const i = e.fn(e._value);
    (t.version === 0 || Qe(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    he = s, je = n, yr(e), e.flags &= -3;
  }
}
function qn(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let r = s.computed.deps; r; r = r.nextDep)
      qn(r, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function Vo(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let je = !0;
const _r = [];
function st() {
  _r.push(je), je = !1;
}
function nt() {
  const e = _r.pop();
  je = e === void 0 ? !0 : e;
}
function fi(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = he;
    he = void 0;
    try {
      t();
    } finally {
      he = s;
    }
  }
}
let gs = 0;
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
    if (!he || !je || he === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== he)
      s = this.activeLink = new Ho(he, this), he.deps ? (s.prevDep = he.depsTail, he.depsTail.nextDep = s, he.depsTail = s) : he.deps = he.depsTail = s, xr(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = he.depsTail, s.nextDep = void 0, he.depsTail.nextDep = s, he.depsTail = s, he.deps === s && (he.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, gs++, this.notify(t);
  }
  notify(t) {
    zn();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Jn();
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
), Pn = /* @__PURE__ */ Symbol(
  ""
), ms = /* @__PURE__ */ Symbol(
  ""
);
function Se(e, t, s) {
  if (je && he) {
    let n = Ns.get(e);
    n || Ns.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(s);
    i || (n.set(s, i = new Gn()), i.map = n, i.key = s), i.track();
  }
}
function ft(e, t, s, n, i, r) {
  const o = Ns.get(e);
  if (!o) {
    gs++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (zn(), t === "clear")
    o.forEach(l);
  else {
    const a = K(e), f = a && Xs(s);
    if (a && s === "length") {
      const c = Number(n);
      o.forEach((h, v) => {
        (v === "length" || v === ms || !Ne(v) && v >= c) && l(h);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), f && l(o.get(ms)), t) {
        case "add":
          a ? f && l(o.get("length")) : (l(o.get(Rt)), jt(e) && l(o.get(Pn)));
          break;
        case "delete":
          a || (l(o.get(Rt)), jt(e) && l(o.get(Pn)));
          break;
        case "set":
          jt(e) && l(o.get(Rt));
          break;
      }
  }
  Jn();
}
function jo(e, t) {
  const s = Ns.get(e);
  return s && s.get(t);
}
function Lt(e) {
  const t = /* @__PURE__ */ ne(e);
  return t === e ? t : (Se(t, "iterate", ms), /* @__PURE__ */ $e(e) ? t : t.map(Be));
}
function tn(e) {
  return Se(e = /* @__PURE__ */ ne(e), "iterate", ms), e;
}
function Ye(e, t) {
  return /* @__PURE__ */ pt(e) ? zt(/* @__PURE__ */ ht(e) ? Be(t) : t) : Be(t);
}
const Bo = {
  __proto__: null,
  [Symbol.iterator]() {
    return yn(this, Symbol.iterator, (e) => Ye(this, e));
  },
  concat(...e) {
    return Lt(this).concat(
      ...e.map((t) => K(t) ? Lt(t) : t)
    );
  },
  entries() {
    return yn(this, "entries", (e) => (e[1] = Ye(this, e[1]), e));
  },
  every(e, t) {
    return rt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return rt(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => Ye(this, n)),
      arguments
    );
  },
  find(e, t) {
    return rt(
      this,
      "find",
      e,
      t,
      (s) => Ye(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return rt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return rt(
      this,
      "findLast",
      e,
      t,
      (s) => Ye(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return rt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return rt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return bn(this, "includes", e);
  },
  indexOf(...e) {
    return bn(this, "indexOf", e);
  },
  join(e) {
    return Lt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return bn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return rt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Xt(this, "pop");
  },
  push(...e) {
    return Xt(this, "push", e);
  },
  reduce(e, ...t) {
    return di(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return di(this, "reduceRight", e, t);
  },
  shift() {
    return Xt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return rt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Xt(this, "splice", e);
  },
  toReversed() {
    return Lt(this).toReversed();
  },
  toSorted(e) {
    return Lt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Lt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Xt(this, "unshift", e);
  },
  values() {
    return yn(this, "values", (e) => Ye(this, e));
  }
};
function yn(e, t, s) {
  const n = tn(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ $e(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = s(r.value)), r;
  }), i;
}
const Ko = Array.prototype;
function rt(e, t, s, n, i, r) {
  const o = tn(e), l = o !== e && !/* @__PURE__ */ $e(e), a = o[t];
  if (a !== Ko[t]) {
    const h = a.apply(e, r);
    return l ? Be(h) : h;
  }
  let f = s;
  o !== e && (l ? f = function(h, v) {
    return s.call(this, Ye(e, h), v, e);
  } : s.length > 2 && (f = function(h, v) {
    return s.call(this, h, v, e);
  }));
  const c = a.call(o, f, n);
  return l && i ? i(c) : c;
}
function di(e, t, s, n) {
  const i = tn(e), r = i !== e && !/* @__PURE__ */ $e(e);
  let o = s, l = !1;
  i !== e && (r ? (l = n.length === 0, o = function(f, c, h) {
    return l && (l = !1, f = Ye(e, f)), s.call(this, f, Ye(e, c), h, e);
  }) : s.length > 3 && (o = function(f, c, h) {
    return s.call(this, f, c, h, e);
  }));
  const a = i[t](o, ...n);
  return l ? Ye(e, a) : a;
}
function bn(e, t, s) {
  const n = /* @__PURE__ */ ne(e);
  Se(n, "iterate", ms);
  const i = n[t](...s);
  return (i === -1 || i === !1) && /* @__PURE__ */ nn(s[0]) ? (s[0] = /* @__PURE__ */ ne(s[0]), n[t](...s)) : i;
}
function Xt(e, t, s = []) {
  st(), zn();
  const n = (/* @__PURE__ */ ne(e))[t].apply(e, s);
  return Jn(), nt(), n;
}
const Wo = /* @__PURE__ */ jn("__proto__,__v_isRef,__isVue"), wr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ne)
);
function zo(e) {
  Ne(e) || (e = String(e));
  const t = /* @__PURE__ */ ne(this);
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
      /* @__PURE__ */ me(t) ? t : n
    );
    if ((Ne(s) ? wr.has(s) : Wo(s)) || (i || Se(t, "get", s), r))
      return l;
    if (/* @__PURE__ */ me(l)) {
      const a = o && Xs(s) ? l : l.value;
      return i && ae(a) ? /* @__PURE__ */ kn(a) : a;
    }
    return ae(l) ? i ? /* @__PURE__ */ kn(l) : /* @__PURE__ */ sn(l) : l;
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
      const f = /* @__PURE__ */ pt(r);
      if (!/* @__PURE__ */ $e(n) && !/* @__PURE__ */ pt(n) && (r = /* @__PURE__ */ ne(r), n = /* @__PURE__ */ ne(n)), !o && /* @__PURE__ */ me(r) && !/* @__PURE__ */ me(n))
        return f || (r.value = n), !0;
    }
    const l = o ? Number(s) < t.length : le(t, s), a = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ me(t) ? t : i
    );
    return t === /* @__PURE__ */ ne(i) && a && (l ? Qe(n, r) && ft(t, "set", s, n) : ft(t, "add", s, n)), a;
  }
  deleteProperty(t, s) {
    const n = le(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && ft(t, "delete", s, void 0), i;
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
const qo = /* @__PURE__ */ new Cr(), Go = /* @__PURE__ */ new Jo(), Yo = /* @__PURE__ */ new Cr(!0);
const Rn = (e) => e, Ts = (e) => Reflect.getPrototypeOf(e);
function Xo(e, t, s) {
  return function(...n) {
    const i = this.__v_raw, r = /* @__PURE__ */ ne(i), o = jt(r), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, f = i[e](...n), c = s ? Rn : t ? zt : Be;
    return !t && Se(
      r,
      "iterate",
      a ? Pn : Rt
    ), xe(
      // inheriting all iterator properties
      Object.create(f),
      {
        // iterator protocol
        next() {
          const { value: h, done: v } = f.next();
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
      const r = this.__v_raw, o = /* @__PURE__ */ ne(r), l = /* @__PURE__ */ ne(i);
      e || (Qe(i, l) && Se(o, "get", i), Se(o, "get", l));
      const { has: a } = Ts(o), f = t ? Rn : e ? zt : Be;
      if (a.call(o, i))
        return f(r.get(i));
      if (a.call(o, l))
        return f(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Se(/* @__PURE__ */ ne(i), "iterate", Rt), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ ne(r), l = /* @__PURE__ */ ne(i);
      return e || (Qe(i, l) && Se(o, "has", i), Se(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, a = /* @__PURE__ */ ne(l), f = t ? Rn : e ? zt : Be;
      return !e && Se(a, "iterate", Rt), l.forEach((c, h) => i.call(r, f(c), f(h), o));
    }
  };
  return xe(
    s,
    e ? {
      add: As("add"),
      set: As("set"),
      delete: As("delete"),
      clear: As("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ ne(this), o = Ts(r), l = /* @__PURE__ */ ne(i), a = !t && !/* @__PURE__ */ $e(i) && !/* @__PURE__ */ pt(i) ? l : i;
        return o.has.call(r, a) || Qe(i, a) && o.has.call(r, i) || Qe(l, a) && o.has.call(r, l) || (r.add(a), ft(r, "add", a, a)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ $e(r) && !/* @__PURE__ */ pt(r) && (r = /* @__PURE__ */ ne(r));
        const o = /* @__PURE__ */ ne(this), { has: l, get: a } = Ts(o);
        let f = l.call(o, i);
        f || (i = /* @__PURE__ */ ne(i), f = l.call(o, i));
        const c = a.call(o, i);
        return o.set(i, r), f ? Qe(r, c) && ft(o, "set", i, r) : ft(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ ne(this), { has: o, get: l } = Ts(r);
        let a = o.call(r, i);
        a || (i = /* @__PURE__ */ ne(i), a = o.call(r, i)), l && l.call(r, i);
        const f = r.delete(i);
        return a && ft(r, "delete", i, void 0), f;
      },
      clear() {
        const i = /* @__PURE__ */ ne(this), r = i.size !== 0, o = i.clear();
        return r && ft(
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
function Yn(e, t) {
  const s = Zo(e, t);
  return (n, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    le(s, i) && i in n ? s : n,
    i,
    r
  );
}
const Qo = {
  get: /* @__PURE__ */ Yn(!1, !1)
}, el = {
  get: /* @__PURE__ */ Yn(!1, !0)
}, tl = {
  get: /* @__PURE__ */ Yn(!0, !1)
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
  return /* @__PURE__ */ pt(e) ? e : Xn(
    e,
    !1,
    qo,
    Qo,
    Ir
  );
}
// @__NO_SIDE_EFFECTS__
function il(e) {
  return Xn(
    e,
    !1,
    Yo,
    el,
    Er
  );
}
// @__NO_SIDE_EFFECTS__
function kn(e) {
  return Xn(
    e,
    !0,
    Go,
    tl,
    Tr
  );
}
function Xn(e, t, s, n, i) {
  if (!ae(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
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
function ht(e) {
  return /* @__PURE__ */ pt(e) ? /* @__PURE__ */ ht(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function pt(e) {
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
function ne(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ne(t) : e;
}
function Zn(e) {
  return !le(e, "__v_skip") && Object.isExtensible(e) && lr(e, "__v_skip", !0), e;
}
const Be = (e) => ae(e) ? /* @__PURE__ */ sn(e) : e, zt = (e) => ae(e) ? /* @__PURE__ */ kn(e) : e;
// @__NO_SIDE_EFFECTS__
function me(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ve(e) {
  return rl(e, !1);
}
function rl(e, t) {
  return /* @__PURE__ */ me(e) ? e : new ol(e, t);
}
class ol {
  constructor(t, s) {
    this.dep = new Gn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ ne(t), this._value = s ? t : Be(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ $e(t) || /* @__PURE__ */ pt(t);
    t = n ? t : /* @__PURE__ */ ne(t), Qe(t, s) && (this._rawValue = t, this._value = n ? t : Be(t), this.dep.trigger());
  }
}
function w(e) {
  return /* @__PURE__ */ me(e) ? e.value : e;
}
const ll = {
  get: (e, t, s) => t === "__v_raw" ? e : w(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t];
    return /* @__PURE__ */ me(i) && !/* @__PURE__ */ me(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function Ar(e) {
  return /* @__PURE__ */ ht(e) ? e : new Proxy(e, ll);
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
    this._object = t, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = Ne(s) ? s : String(s), this._raw = /* @__PURE__ */ ne(t);
    let i = !0, r = t;
    if (!K(t) || Ne(this._key) || !Xs(this._key))
      do
        i = !/* @__PURE__ */ nn(r) || /* @__PURE__ */ $e(r);
      while (i && (r = r.__v_raw));
    this._shallow = i;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = w(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ me(this._raw[this._key])) {
      const s = this._object[this._key];
      if (/* @__PURE__ */ me(s)) {
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
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Gn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = gs - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    he !== this)
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
let Mt;
function hl(e, t = !1, s = Mt) {
  if (s) {
    let n = Fs.get(s);
    n || Fs.set(s, n = []), n.push(e);
  }
}
function pl(e, t, s = de) {
  const { immediate: n, deep: i, once: r, scheduler: o, augmentJob: l, call: a } = s, f = (T) => i ? T : /* @__PURE__ */ $e(T) || i === !1 || i === 0 ? dt(T, 1) : dt(T);
  let c, h, v, m, P = !1, A = !1;
  if (/* @__PURE__ */ me(e) ? (h = () => e.value, P = /* @__PURE__ */ $e(e)) : /* @__PURE__ */ ht(e) ? (h = () => f(e), P = !0) : K(e) ? (A = !0, P = e.some((T) => /* @__PURE__ */ ht(T) || /* @__PURE__ */ $e(T)), h = () => e.map((T) => {
    if (/* @__PURE__ */ me(T))
      return T.value;
    if (/* @__PURE__ */ ht(T))
      return f(T);
    if (Y(T))
      return a ? a(T, 2) : T();
  })) : Y(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (v) {
      st();
      try {
        v();
      } finally {
        nt();
      }
    }
    const T = Mt;
    Mt = c;
    try {
      return a ? a(e, 3, [m]) : e(m);
    } finally {
      Mt = T;
    }
  } : h = et, t && i) {
    const T = h, j = i === !0 ? 1 / 0 : i;
    h = () => dt(T(), j);
  }
  const H = hr(), N = () => {
    c.stop(), H && H.active && Bn(H.effects, c);
  };
  if (r && t) {
    const T = t;
    t = (...j) => {
      const oe = T(...j);
      return N(), oe;
    };
  }
  let E = A ? new Array(e.length).fill(Ms) : Ms;
  const C = (T) => {
    if (!(!(c.flags & 1) || !c.dirty && !T))
      if (t) {
        const j = c.run();
        if (T || i || P || (A ? j.some((oe, Q) => Qe(oe, E[Q])) : Qe(j, E))) {
          v && v();
          const oe = Mt;
          Mt = c;
          try {
            const Q = [
              j,
              // pass undefined as the old value when it's changed for the first time
              E === Ms ? void 0 : A && E[0] === Ms ? [] : E,
              m
            ];
            E = j, a ? a(t, 3, Q) : (
              // @ts-expect-error
              t(...Q)
            );
          } finally {
            Mt = oe;
          }
        }
      } else
        c.run();
  };
  return l && l(C), c = new pr(h), c.scheduler = o ? () => o(C, !1) : C, m = (T) => hl(T, !1, c), v = c.onStop = () => {
    const T = Fs.get(c);
    if (T) {
      if (a)
        a(T, 4);
      else
        for (const j of T) j();
      Fs.delete(c);
    }
  }, t ? n ? C(!0) : E = c.run() : o ? o(C.bind(null, !0), !0) : c.run(), N.pause = c.pause.bind(c), N.resume = c.resume.bind(c), N.stop = N, N;
}
function dt(e, t = 1 / 0, s) {
  if (t <= 0 || !ae(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ me(e))
    dt(e.value, t, s);
  else if (K(e))
    for (let n = 0; n < e.length; n++)
      dt(e[n], t, s);
  else if (sr(e) || jt(e))
    e.forEach((n) => {
      dt(n, t, s);
    });
  else if (rr(e)) {
    for (const n in e)
      dt(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && dt(e[n], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ss(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    rn(i, t, s);
  }
}
function Fe(e, t, s, n) {
  if (Y(e)) {
    const i = Ss(e, t, s, n);
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
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || de;
  if (t) {
    let l = t.parent;
    const a = t.proxy, f = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; l; ) {
      const c = l.ec;
      if (c) {
        for (let h = 0; h < c.length; h++)
          if (c[h](e, a, f) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      st(), Ss(r, null, 10, [
        e,
        a,
        f
      ]), nt();
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
let Ge = -1;
const Bt = [];
let yt = null, Nt = 0;
const Mr = /* @__PURE__ */ Promise.resolve();
let Us = null;
function Ue(e) {
  const t = Us || Mr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ml(e) {
  let t = Ge + 1, s = Ee.length;
  for (; t < s; ) {
    const n = t + s >>> 1, i = Ee[n], r = vs(i);
    r < e || r === e && i.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function Qn(e) {
  if (!(e.flags & 1)) {
    const t = vs(e), s = Ee[Ee.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= vs(s) ? Ee.push(e) : Ee.splice(ml(t), 0, e), e.flags |= 1, Pr();
  }
}
function Pr() {
  Us || (Us = Mr.then(kr));
}
function vl(e) {
  K(e) ? Bt.push(...e) : yt && e.id === -1 ? yt.splice(Nt + 1, 0, e) : e.flags & 1 || (Bt.push(e), e.flags |= 1), Pr();
}
function hi(e, t, s = Ge + 1) {
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
      (s, n) => vs(s) - vs(n)
    );
    if (Bt.length = 0, yt) {
      yt.push(...t);
      return;
    }
    for (yt = t, Nt = 0; Nt < yt.length; Nt++) {
      const s = yt[Nt];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    yt = null, Nt = 0;
  }
}
const vs = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function kr(e) {
  try {
    for (Ge = 0; Ge < Ee.length; Ge++) {
      const t = Ee[Ge];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ss(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ge < Ee.length; Ge++) {
      const t = Ee[Ge];
      t && (t.flags &= -2);
    }
    Ge = -1, Ee.length = 0, Rr(), Us = null, (Ee.length || Bt.length) && kr();
  }
}
let De = null, $r = null;
function Vs(e) {
  const t = De;
  return De = e, $r = e && e.type.__scopeId || null, t;
}
function Lr(e, t = De, s) {
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
function lt(e, t) {
  if (De === null)
    return e;
  const s = fn(De), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, a = de] = t[i];
    r && (Y(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && dt(o), n.push({
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
function It(e, t, s, n) {
  const i = e.dirs, r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    r && (l.oldValue = r[o].value);
    let a = l.dir[n];
    a && (st(), Fe(a, s, 8, [
      e.el,
      l,
      e,
      t
    ]), nt());
  }
}
function yl(e, t) {
  if (Ae) {
    let s = Ae.provides;
    const n = Ae.parent && Ae.parent.provides;
    n === s && (s = Ae.provides = Object.create(n)), s[e] = t;
  }
}
function ls(e, t, s = !1) {
  const n = ni();
  if (n || kt) {
    let i = kt ? kt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return s && Y(t) ? t.call(n && n.proxy) : t;
  }
}
function bl() {
  return !!(ni() || kt);
}
const _l = /* @__PURE__ */ Symbol.for("v-scx"), xl = () => ls(_l);
function tt(e, t, s) {
  return Or(e, t, s);
}
function Or(e, t, s = de) {
  const { immediate: n, deep: i, flush: r, once: o } = s, l = xe({}, s), a = t && n || !t && r !== "post";
  let f;
  if (_s) {
    if (r === "sync") {
      const m = xl();
      f = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = et, m.resume = et, m.pause = et, m;
    }
  }
  const c = Ae;
  l.call = (m, P, A) => Fe(m, c, P, A);
  let h = !1;
  r === "post" ? l.scheduler = (m) => {
    Me(m, c && c.suspense);
  } : r !== "sync" && (h = !0, l.scheduler = (m, P) => {
    P ? m() : Qn(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), h && (m.flags |= 2, c && (m.id = c.uid, m.i = c));
  };
  const v = pl(e, t, l);
  return _s && (f ? f.push(v) : a && v()), v;
}
function wl(e, t, s) {
  const n = this.proxy, i = ge(e) ? e.includes(".") ? Dr(n, e) : () => n[e] : e.bind(n, n);
  let r;
  Y(t) ? r = t : (r = t.handler, s = t);
  const o = Cs(this), l = Or(i, r.bind(n), s);
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
const Sl = /* @__PURE__ */ Symbol("_vte"), Nr = (e) => e.__isTeleport, Oe = /* @__PURE__ */ Symbol("_leaveCb"), Zt = /* @__PURE__ */ Symbol("_enterCb");
function Cl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return an(() => {
    e.isMounted = !0;
  }), ei(() => {
    e.isUnmounting = !0;
  }), e;
}
const Le = [Function, Array], Fr = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Le,
  onEnter: Le,
  onAfterEnter: Le,
  onEnterCancelled: Le,
  // leave
  onBeforeLeave: Le,
  onLeave: Le,
  onAfterLeave: Le,
  onLeaveCancelled: Le,
  // appear
  onBeforeAppear: Le,
  onAppear: Le,
  onAfterAppear: Le,
  onAppearCancelled: Le
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
        s.subTree ? Pe() : void 0
      );
      if (!r)
        return;
      const o = /* @__PURE__ */ ne(e), { mode: l } = o;
      if (n.isLeaving)
        return _n(r);
      const a = pi(r);
      if (!a)
        return _n(r);
      let f = $n(
        a,
        o,
        n,
        s,
        // #11061, ensure enterHooks is fresh after clone
        (h) => f = h
      );
      a.type !== Te && ys(a, f);
      let c = s.subTree && pi(s.subTree);
      if (c && c.type !== Te && !Pt(c, a) && Ur(s).type !== Te) {
        let h = $n(
          c,
          o,
          n,
          s
        );
        if (ys(c, h), l === "out-in" && a.type !== Te)
          return n.isLeaving = !0, h.afterLeave = () => {
            n.isLeaving = !1, s.job.flags & 8 || s.update(), delete h.afterLeave, c = void 0;
          }, _n(r);
        l === "in-out" && a.type !== Te ? h.delayLeave = (v, m, P) => {
          const A = Hr(
            n,
            c
          );
          A[String(c.key)] = c, v[Oe] = () => {
            m(), v[Oe] = void 0, delete f.delayedLeave, c = void 0;
          }, f.delayedLeave = () => {
            P(), delete f.delayedLeave, c = void 0;
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
function $n(e, t, s, n, i) {
  const {
    appear: r,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: f,
    onAfterEnter: c,
    onEnterCancelled: h,
    onBeforeLeave: v,
    onLeave: m,
    onAfterLeave: P,
    onLeaveCancelled: A,
    onBeforeAppear: H,
    onAppear: N,
    onAfterAppear: E,
    onAppearCancelled: C
  } = t, T = String(e.key), j = Hr(s, e), oe = (L, q) => {
    L && Fe(
      L,
      n,
      9,
      q
    );
  }, Q = (L, q) => {
    const V = q[1];
    oe(L, q), K(L) ? L.every((y) => y.length <= 1) && V() : L.length <= 1 && V();
  }, J = {
    mode: o,
    persisted: l,
    beforeEnter(L) {
      let q = a;
      if (!s.isMounted)
        if (r)
          q = H || a;
        else
          return;
      L[Oe] && L[Oe](
        !0
        /* cancelled */
      );
      const V = j[T];
      V && Pt(e, V) && V.el[Oe] && V.el[Oe](), oe(q, [L]);
    },
    enter(L) {
      if (j[T] === e) return;
      let q = f, V = c, y = h;
      if (!s.isMounted)
        if (r)
          q = N || f, V = E || c, y = C || h;
        else
          return;
      let O = !1;
      L[Zt] = (ie) => {
        O || (O = !0, ie ? oe(y, [L]) : oe(V, [L]), J.delayedLeave && J.delayedLeave(), L[Zt] = void 0);
      };
      const z = L[Zt].bind(null, !1);
      q ? Q(q, [L, z]) : z();
    },
    leave(L, q) {
      const V = String(e.key);
      if (L[Zt] && L[Zt](
        !0
        /* cancelled */
      ), s.isUnmounting)
        return q();
      oe(v, [L]);
      let y = !1;
      L[Oe] = (z) => {
        y || (y = !0, q(), z ? oe(A, [L]) : oe(P, [L]), L[Oe] = void 0, j[V] === e && delete j[V]);
      };
      const O = L[Oe].bind(null, !1);
      j[V] = e, m ? Q(m, [L, O]) : O();
    },
    clone(L) {
      const q = $n(
        L,
        t,
        s,
        n,
        i
      );
      return i && i(q), q;
    }
  };
  return J;
}
function _n(e) {
  if (on(e))
    return e = _t(e), e.children = null, e;
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
function ys(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ys(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function jr(e, t = !1, s) {
  let n = [], i = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const l = s == null ? o.key : String(s) + String(o.key != null ? o.key : r);
    o.type === te ? (o.patchFlag & 128 && i++, n = n.concat(
      jr(o.children, t, l)
    )) : (t || o.type !== Te) && n.push(l != null ? _t(o, { key: l }) : o);
  }
  if (i > 1)
    for (let r = 0; r < n.length; r++)
      n[r].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function wt(e, t) {
  return Y(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    xe({ name: e.name }, t, { setup: e })
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
function as(e, t, s, n, i = !1) {
  if (K(e)) {
    e.forEach(
      (A, H) => as(
        A,
        t && (K(t) ? t[H] : t),
        s,
        n,
        i
      )
    );
    return;
  }
  if (cs(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && as(e, t, s, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? fn(n.component) : n.el, o = i ? null : r, { i: l, r: a } = e, f = t && t.r, c = l.refs === de ? l.refs = {} : l.refs, h = l.setupState, v = /* @__PURE__ */ ne(h), m = h === de ? tr : (A) => gi(c, A) ? !1 : le(v, A), P = (A, H) => !(H && gi(c, H));
  if (f != null && f !== a) {
    if (mi(t), ge(f))
      c[f] = null, m(f) && (h[f] = null);
    else if (/* @__PURE__ */ me(f)) {
      const A = t;
      P(f, A.k) && (f.value = null), A.k && (c[A.k] = null);
    }
  }
  if (Y(a)) {
    st();
    try {
      Ss(a, l, 12, [o, c]);
    } finally {
      nt();
    }
  } else {
    const A = ge(a), H = /* @__PURE__ */ me(a);
    if (A || H) {
      const N = () => {
        if (e.f) {
          const E = A ? m(a) ? h[a] : c[a] : P() || !e.k ? a.value : c[e.k];
          if (i)
            K(E) && Bn(E, r);
          else if (K(E))
            E.includes(r) || E.push(r);
          else if (A)
            c[a] = [r], m(a) && (h[a] = c[a]);
          else {
            const C = [r];
            P(a, e.k) && (a.value = C), e.k && (c[e.k] = C);
          }
        } else A ? (c[a] = o, m(a) && (h[a] = o)) : H && (P(a, e.k) && (a.value = o), e.k && (c[e.k] = o));
      };
      if (o) {
        const E = () => {
          N(), Hs.delete(e);
        };
        E.id = -1, Hs.set(e, E), Me(E, s);
      } else
        mi(e), N();
    }
  }
}
function mi(e) {
  const t = Hs.get(e);
  t && (t.flags |= 8, Hs.delete(e));
}
Qs().requestIdleCallback;
Qs().cancelIdleCallback;
const cs = (e) => !!e.type.__asyncLoader, on = (e) => e.type.__isKeepAlive;
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
    Bn(n[t], i);
  }, s);
}
function ln(e, t, s = Ae, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []), r = t.__weh || (t.__weh = (...o) => {
      st();
      const l = Cs(s), a = Fe(t, s, e, o);
      return l(), nt(), a;
    });
    return n ? i.unshift(r) : i.push(r), r;
  }
}
const gt = (e) => (t, s = Ae) => {
  (!_s || e === "sp") && ln(e, (...n) => t(...n), s);
}, Pl = gt("bm"), an = gt("m"), Rl = gt(
  "bu"
), kl = gt("u"), ei = gt(
  "bum"
), Wr = gt("um"), $l = gt(
  "sp"
), Ll = gt("rtg"), Ol = gt("rtc");
function Dl(e, t = Ae) {
  ln("ec", e, t);
}
const Nl = /* @__PURE__ */ Symbol.for("v-ndc");
function Xe(e, t, s, n) {
  let i;
  const r = s, o = K(e);
  if (o || ge(e)) {
    const l = o && /* @__PURE__ */ ht(e);
    let a = !1, f = !1;
    l && (a = !/* @__PURE__ */ $e(e), f = /* @__PURE__ */ pt(e), e = tn(e)), i = new Array(e.length);
    for (let c = 0, h = e.length; c < h; c++)
      i[c] = t(
        a ? f ? zt(Be(e[c])) : Be(e[c]) : e[c],
        c,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, r);
  } else if (ae(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, a) => t(l, a, void 0, r)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let a = 0, f = l.length; a < f; a++) {
        const c = l[a];
        i[a] = t(e[c], c, a, r);
      }
    }
  else
    i = [];
  return i;
}
const Ln = (e) => e ? fo(e) ? fn(e) : Ln(e.parent) : null, us = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ xe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ln(e.parent),
    $root: (e) => Ln(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Jr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Qn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ue.bind(e.proxy)),
    $watch: (e) => wl.bind(e)
  })
), xn = (e, t) => e !== de && !e.__isScriptSetup && le(e, t), Fl = {
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
        if (xn(n, t))
          return o[t] = 1, n[t];
        if (i !== de && le(i, t))
          return o[t] = 2, i[t];
        if (le(r, t))
          return o[t] = 3, r[t];
        if (s !== de && le(s, t))
          return o[t] = 4, s[t];
        On && (o[t] = 0);
      }
    }
    const f = us[t];
    let c, h;
    if (f)
      return t === "$attrs" && Se(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (c = l.__cssModules) && (c = c[t])
    )
      return c;
    if (s !== de && le(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      h = a.config.globalProperties, le(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: i, ctx: r } = e;
    return xn(i, t) ? (i[t] = s, !0) : n !== de && le(n, t) ? (n[t] = s, !0) : le(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: i, props: r, type: o }
  }, l) {
    let a;
    return !!(s[l] || e !== de && l[0] !== "$" && le(e, l) || xn(t, l) || le(r, l) || le(n, l) || le(us, l) || le(i.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : le(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function vi(e) {
  return K(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let On = !0;
function Ul(e) {
  const t = Jr(e), s = e.proxy, n = e.ctx;
  On = !1, t.beforeCreate && yi(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: o,
    watch: l,
    provide: a,
    inject: f,
    // lifecycle
    created: c,
    beforeMount: h,
    mounted: v,
    beforeUpdate: m,
    updated: P,
    activated: A,
    deactivated: H,
    beforeDestroy: N,
    beforeUnmount: E,
    destroyed: C,
    unmounted: T,
    render: j,
    renderTracked: oe,
    renderTriggered: Q,
    errorCaptured: J,
    serverPrefetch: L,
    // public API
    expose: q,
    inheritAttrs: V,
    // assets
    components: y,
    directives: O,
    filters: z
  } = t;
  if (f && Vl(f, n, null), o)
    for (const X in o) {
      const ce = o[X];
      Y(ce) && (n[X] = ce.bind(s));
    }
  if (i) {
    const X = i.call(s, s);
    ae(X) && (e.data = /* @__PURE__ */ sn(X));
  }
  if (On = !0, r)
    for (const X in r) {
      const ce = r[X], it = Y(ce) ? ce.bind(s, s) : Y(ce.get) ? ce.get.bind(s, s) : et, Is = !Y(ce) && Y(ce.set) ? ce.set.bind(s) : et, Ct = Ve({
        get: it,
        set: Is
      });
      Object.defineProperty(n, X, {
        enumerable: !0,
        configurable: !0,
        get: () => Ct.value,
        set: (Ke) => Ct.value = Ke
      });
    }
  if (l)
    for (const X in l)
      zr(l[X], n, s, X);
  if (a) {
    const X = Y(a) ? a.call(s) : a;
    Reflect.ownKeys(X).forEach((ce) => {
      yl(ce, X[ce]);
    });
  }
  c && yi(c, e, "c");
  function re(X, ce) {
    K(ce) ? ce.forEach((it) => X(it.bind(s))) : ce && X(ce.bind(s));
  }
  if (re(Pl, h), re(an, v), re(Rl, m), re(kl, P), re(Tl, A), re(Al, H), re(Dl, J), re(Ol, oe), re(Ll, Q), re(ei, E), re(Wr, T), re($l, L), K(q))
    if (q.length) {
      const X = e.exposed || (e.exposed = {});
      q.forEach((ce) => {
        Object.defineProperty(X, ce, {
          get: () => s[ce],
          set: (it) => s[ce] = it,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  j && e.render === et && (e.render = j), V != null && (e.inheritAttrs = V), y && (e.components = y), O && (e.directives = O), L && Br(e);
}
function Vl(e, t, s = et) {
  K(e) && (e = Dn(e));
  for (const n in e) {
    const i = e[n];
    let r;
    ae(i) ? "default" in i ? r = ls(
      i.from || n,
      i.default,
      !0
    ) : r = ls(i.from || n) : r = ls(i), /* @__PURE__ */ me(r) ? Object.defineProperty(t, n, {
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
  if (ge(e)) {
    const r = t[e];
    Y(r) && tt(i, r);
  } else if (Y(e))
    tt(i, e.bind(s));
  else if (ae(e))
    if (K(e))
      e.forEach((r) => zr(r, t, s, n));
    else {
      const r = Y(e.handler) ? e.handler.bind(s) : t[e.handler];
      Y(r) && tt(i, r, e);
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
    (f) => js(a, f, o, !0)
  ), js(a, t, o)), ae(t) && r.set(t, a), a;
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
  methods: ts,
  computed: ts,
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
  components: ts,
  directives: ts,
  // watch
  watch: Bl,
  // provide / inject
  provide: bi,
  inject: jl
};
function bi(e, t) {
  return t ? e ? function() {
    return xe(
      Y(e) ? e.call(this, this) : e,
      Y(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function jl(e, t) {
  return ts(Dn(e), Dn(t));
}
function Dn(e) {
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
function ts(e, t) {
  return e ? xe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function _i(e, t) {
  return e ? K(e) && K(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : xe(
    /* @__PURE__ */ Object.create(null),
    vi(e),
    vi(t ?? {})
  ) : t;
}
function Bl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = xe(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = Ce(e[n], t[n]);
  return s;
}
function qr() {
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
    Y(n) || (n = xe({}, n)), i != null && !ae(i) && (i = null);
    const r = qr(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const f = r.app = {
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
        return o.has(c) || (c && Y(c.install) ? (o.add(c), c.install(f, ...h)) : Y(c) && (o.add(c), c(f, ...h))), f;
      },
      mixin(c) {
        return r.mixins.includes(c) || r.mixins.push(c), f;
      },
      component(c, h) {
        return h ? (r.components[c] = h, f) : r.components[c];
      },
      directive(c, h) {
        return h ? (r.directives[c] = h, f) : r.directives[c];
      },
      mount(c, h, v) {
        if (!a) {
          const m = f._ceVNode || ee(n, i);
          return m.appContext = r, v === !0 ? v = "svg" : v === !1 && (v = void 0), e(m, c, v), a = !0, f._container = c, c.__vue_app__ = f, fn(m.component);
        }
      },
      onUnmount(c) {
        l.push(c);
      },
      unmount() {
        a && (Fe(
          l,
          f._instance,
          16
        ), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(c, h) {
        return r.provides[c] = h, f;
      },
      runWithContext(c) {
        const h = kt;
        kt = f;
        try {
          return c();
        } finally {
          kt = h;
        }
      }
    };
    return f;
  };
}
let kt = null;
const zl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${He(t)}Modifiers`] || e[`${xt(t)}Modifiers`];
function Jl(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || de;
  let i = s;
  const r = t.startsWith("update:"), o = r && zl(n, t.slice(7));
  o && (o.trim && (i = s.map((c) => ge(c) ? c.trim() : c)), o.number && (i = s.map(Kn)));
  let l, a = n[l = gn(t)] || // also try camelCase event handler (#2249)
  n[l = gn(He(t))];
  !a && r && (a = n[l = gn(xt(t))]), a && Fe(
    a,
    e,
    6,
    i
  );
  const f = n[l + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Fe(
      f,
      e,
      6,
      i
    );
  }
}
const ql = /* @__PURE__ */ new WeakMap();
function Gr(e, t, s = !1) {
  const n = s ? ql : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {}, l = !1;
  if (!Y(e)) {
    const a = (f) => {
      const c = Gr(f, t, !0);
      c && (l = !0, xe(o, c));
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (ae(e) && n.set(e, null), null) : (K(r) ? r.forEach((a) => o[a] = null) : xe(o, r), ae(e) && n.set(e, o), o);
}
function cn(e, t) {
  return !e || !Gs(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), le(e, t[0].toLowerCase() + t.slice(1)) || le(e, xt(t)) || le(e, t));
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
    render: f,
    renderCache: c,
    props: h,
    data: v,
    setupState: m,
    ctx: P,
    inheritAttrs: A
  } = e, H = Vs(e);
  let N, E;
  try {
    if (s.shapeFlag & 4) {
      const T = i || n, j = T;
      N = Ze(
        f.call(
          j,
          T,
          c,
          h,
          m,
          v,
          P
        )
      ), E = l;
    } else {
      const T = t;
      N = Ze(
        T.length > 1 ? T(
          h,
          { attrs: l, slots: o, emit: a }
        ) : T(
          h,
          null
        )
      ), E = t.props ? l : Gl(l);
    }
  } catch (T) {
    fs.length = 0, rn(T, e, 1), N = ee(Te);
  }
  let C = N;
  if (E && A !== !1) {
    const T = Object.keys(E), { shapeFlag: j } = C;
    T.length && j & 7 && (r && T.some(Ys) && (E = Yl(
      E,
      r
    )), C = _t(C, E, !1, !0));
  }
  return s.dirs && (C = _t(C, null, !1, !0), C.dirs = C.dirs ? C.dirs.concat(s.dirs) : s.dirs), s.transition && ys(C, s.transition), N = C, Vs(H), N;
}
const Gl = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Gs(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, Yl = (e, t) => {
  const s = {};
  for (const n in e)
    (!Ys(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function Xl(e, t, s) {
  const { props: n, children: i, component: r } = e, { props: o, children: l, patchFlag: a } = t, f = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return n ? wi(n, o, f) : !!o;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        const v = c[h];
        if (Yr(o, n, v) && !cn(f, v))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? wi(n, o, f) : !0 : !!o;
  return !1;
}
function wi(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const r = n[i];
    if (Yr(t, e, r) && !cn(s, r))
      return !0;
  }
  return !1;
}
function Yr(e, t, s) {
  const n = e[s], i = t[s];
  return s === "style" && ae(n) && ae(i) ? !Wn(n, i) : n !== i;
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
  } = e, l = /* @__PURE__ */ ne(i), [a] = e.propsOptions;
  let f = !1;
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
        if (cn(e.emitsOptions, v))
          continue;
        const m = t[v];
        if (a)
          if (le(r, v))
            m !== r[v] && (r[v] = m, f = !0);
          else {
            const P = He(v);
            i[P] = Nn(
              a,
              l,
              P,
              m,
              e,
              !1
            );
          }
        else
          m !== r[v] && (r[v] = m, f = !0);
      }
    }
  } else {
    eo(e, t, i, r) && (f = !0);
    let c;
    for (const h in l)
      (!t || // for camelCase
      !le(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = xt(h)) === h || !le(t, c))) && (a ? s && // for camelCase
      (s[h] !== void 0 || // for kebab-case
      s[c] !== void 0) && (i[h] = Nn(
        a,
        l,
        h,
        void 0,
        e,
        !0
      )) : delete i[h]);
    if (r !== l)
      for (const h in r)
        (!t || !le(t, h)) && (delete r[h], f = !0);
  }
  f && ft(e.attrs, "set", "");
}
function eo(e, t, s, n) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (is(a))
        continue;
      const f = t[a];
      let c;
      i && le(i, c = He(a)) ? !r || !r.includes(c) ? s[c] = f : (l || (l = {}))[c] = f : cn(e.emitsOptions, a) || (!(a in n) || f !== n[a]) && (n[a] = f, o = !0);
    }
  if (r) {
    const a = /* @__PURE__ */ ne(s), f = l || de;
    for (let c = 0; c < r.length; c++) {
      const h = r[c];
      s[h] = Nn(
        i,
        a,
        h,
        f[h],
        e,
        !le(f, h)
      );
    }
  }
  return o;
}
function Nn(e, t, s, n, i, r) {
  const o = e[s];
  if (o != null) {
    const l = le(o, "default");
    if (l && n === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && Y(a)) {
        const { propsDefaults: f } = i;
        if (s in f)
          n = f[s];
        else {
          const c = Cs(i);
          n = f[s] = a.call(
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
    ] && (n === "" || n === xt(s)) && (n = !0));
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
      xe(o, v), m && l.push(...m);
    };
    !s && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!r && !a)
    return ae(e) && n.set(e, Ht), Ht;
  if (K(r))
    for (let c = 0; c < r.length; c++) {
      const h = He(r[c]);
      Si(h) && (o[h] = de);
    }
  else if (r)
    for (const c in r) {
      const h = He(c);
      if (Si(h)) {
        const v = r[c], m = o[h] = K(v) || Y(v) ? { type: v } : xe({}, v), P = m.type;
        let A = !1, H = !0;
        if (K(P))
          for (let N = 0; N < P.length; ++N) {
            const E = P[N], C = Y(E) && E.name;
            if (C === "Boolean") {
              A = !0;
              break;
            } else C === "String" && (H = !1);
          }
        else
          A = Y(P) && P.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = A, m[
          1
          /* shouldCastTrue */
        ] = H, (A || le(m, "default")) && l.push(h);
      }
    }
  const f = [o, l];
  return ae(e) && n.set(e, f), f;
}
function Si(e) {
  return e[0] !== "$" && !is(e);
}
const ti = (e) => e === "_" || e === "_ctx" || e === "$stable", si = (e) => K(e) ? e.map(Ze) : [Ze(e)], sa = (e, t, s) => {
  if (t._n)
    return t;
  const n = Lr((...i) => si(t(...i)), s);
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
  let r = !0, o = de;
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
    setText: f,
    setElementText: c,
    parentNode: h,
    nextSibling: v,
    setScopeId: m = et,
    insertStaticContent: P
  } = e, A = (u, d, g, S = null, x = null, b = null, R = void 0, M = null, I = !!d.dynamicChildren) => {
    if (u === d)
      return;
    u && !Pt(u, d) && (S = Es(u), Ke(u, x, b, !0), u = null), d.patchFlag === -2 && (I = !1, d.dynamicChildren = null);
    const { type: _, ref: W, shapeFlag: F } = d;
    switch (_) {
      case un:
        H(u, d, g, S);
        break;
      case Te:
        N(u, d, g, S);
        break;
      case Os:
        u == null && E(d, g, S, R);
        break;
      case te:
        y(
          u,
          d,
          g,
          S,
          x,
          b,
          R,
          M,
          I
        );
        break;
      default:
        F & 1 ? j(
          u,
          d,
          g,
          S,
          x,
          b,
          R,
          M,
          I
        ) : F & 6 ? O(
          u,
          d,
          g,
          S,
          x,
          b,
          R,
          M,
          I
        ) : (F & 64 || F & 128) && _.process(
          u,
          d,
          g,
          S,
          x,
          b,
          R,
          M,
          I,
          Gt
        );
    }
    W != null && x ? as(W, u && u.ref, b, d || u, !d) : W == null && u && u.ref != null && as(u.ref, null, b, u, !0);
  }, H = (u, d, g, S) => {
    if (u == null)
      n(
        d.el = l(d.children),
        g,
        S
      );
    else {
      const x = d.el = u.el;
      d.children !== u.children && f(x, d.children);
    }
  }, N = (u, d, g, S) => {
    u == null ? n(
      d.el = a(d.children || ""),
      g,
      S
    ) : d.el = u.el;
  }, E = (u, d, g, S) => {
    [u.el, u.anchor] = P(
      u.children,
      d,
      g,
      S,
      u.el,
      u.anchor
    );
  }, C = ({ el: u, anchor: d }, g, S) => {
    let x;
    for (; u && u !== d; )
      x = v(u), n(u, g, S), u = x;
    n(d, g, S);
  }, T = ({ el: u, anchor: d }) => {
    let g;
    for (; u && u !== d; )
      g = v(u), i(u), u = g;
    i(d);
  }, j = (u, d, g, S, x, b, R, M, I) => {
    if (d.type === "svg" ? R = "svg" : d.type === "math" && (R = "mathml"), u == null)
      oe(
        d,
        g,
        S,
        x,
        b,
        R,
        M,
        I
      );
    else {
      const _ = u.el && u.el._isVueCE ? u.el : null;
      try {
        _ && _._beginPatch(), L(
          u,
          d,
          x,
          b,
          R,
          M,
          I
        );
      } finally {
        _ && _._endPatch();
      }
    }
  }, oe = (u, d, g, S, x, b, R, M) => {
    let I, _;
    const { props: W, shapeFlag: F, transition: B, dirs: G } = u;
    if (I = u.el = o(
      u.type,
      b,
      W && W.is,
      W
    ), F & 8 ? c(I, u.children) : F & 16 && J(
      u.children,
      I,
      null,
      S,
      x,
      wn(u, b),
      R,
      M
    ), G && It(u, null, S, "created"), Q(I, u, u.scopeId, R, S), W) {
      for (const fe in W)
        fe !== "value" && !is(fe) && r(I, fe, null, W[fe], b, S);
      "value" in W && r(I, "value", null, W.value, b), (_ = W.onVnodeBeforeMount) && qe(_, S, u);
    }
    G && It(u, null, S, "beforeMount");
    const se = la(x, B);
    se && B.beforeEnter(I), n(I, d, g), ((_ = W && W.onVnodeMounted) || se || G) && Me(() => {
      try {
        _ && qe(_, S, u), se && B.enter(I), G && It(u, null, S, "mounted");
      } finally {
      }
    }, x);
  }, Q = (u, d, g, S, x) => {
    if (g && m(u, g), S)
      for (let b = 0; b < S.length; b++)
        m(u, S[b]);
    if (x) {
      let b = x.subTree;
      if (d === b || ao(b.type) && (b.ssContent === d || b.ssFallback === d)) {
        const R = x.vnode;
        Q(
          u,
          R,
          R.scopeId,
          R.slotScopeIds,
          x.parent
        );
      }
    }
  }, J = (u, d, g, S, x, b, R, M, I = 0) => {
    for (let _ = I; _ < u.length; _++) {
      const W = u[_] = M ? ut(u[_]) : Ze(u[_]);
      A(
        null,
        W,
        d,
        g,
        S,
        x,
        b,
        R,
        M
      );
    }
  }, L = (u, d, g, S, x, b, R) => {
    const M = d.el = u.el;
    let { patchFlag: I, dynamicChildren: _, dirs: W } = d;
    I |= u.patchFlag & 16;
    const F = u.props || de, B = d.props || de;
    let G;
    if (g && Et(g, !1), (G = B.onVnodeBeforeUpdate) && qe(G, g, d, u), W && It(d, u, g, "beforeUpdate"), g && Et(g, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    _ && (!u.dynamicChildren || u.dynamicChildren.length !== _.length) && (I = 0, R = !1, _ = null), (F.innerHTML && B.innerHTML == null || F.textContent && B.textContent == null) && c(M, ""), _ ? q(
      u.dynamicChildren,
      _,
      M,
      g,
      S,
      wn(d, x),
      b
    ) : R || ce(
      u,
      d,
      M,
      null,
      g,
      S,
      wn(d, x),
      b,
      !1
    ), I > 0) {
      if (I & 16)
        V(M, F, B, g, x);
      else if (I & 2 && F.class !== B.class && r(M, "class", null, B.class, x), I & 4 && r(M, "style", F.style, B.style, x), I & 8) {
        const se = d.dynamicProps;
        for (let fe = 0; fe < se.length; fe++) {
          const ue = se[fe], ye = F[ue], we = B[ue];
          (we !== ye || ue === "value") && r(M, ue, ye, we, x, g);
        }
      }
      I & 1 && u.children !== d.children && c(M, d.children);
    } else !R && _ == null && V(M, F, B, g, x);
    ((G = B.onVnodeUpdated) || W) && Me(() => {
      G && qe(G, g, d, u), W && It(d, u, g, "updated");
    }, S);
  }, q = (u, d, g, S, x, b, R) => {
    for (let M = 0; M < d.length; M++) {
      const I = u[M], _ = d[M], W = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        I.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (I.type === te || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Pt(I, _) || // - In the case of a component, it could contain anything.
        I.shapeFlag & 198) ? h(I.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      A(
        I,
        _,
        W,
        null,
        S,
        x,
        b,
        R,
        !0
      );
    }
  }, V = (u, d, g, S, x) => {
    if (d !== g) {
      if (d !== de)
        for (const b in d)
          !is(b) && !(b in g) && r(
            u,
            b,
            d[b],
            null,
            x,
            S
          );
      for (const b in g) {
        if (is(b)) continue;
        const R = g[b], M = d[b];
        R !== M && b !== "value" && r(u, b, M, R, x, S);
      }
      "value" in g && r(u, "value", d.value, g.value, x);
    }
  }, y = (u, d, g, S, x, b, R, M, I) => {
    const _ = d.el = u ? u.el : l(""), W = d.anchor = u ? u.anchor : l("");
    let { patchFlag: F, dynamicChildren: B, slotScopeIds: G } = d;
    G && (M = M ? M.concat(G) : G), u == null ? (n(_, g, S), n(W, g, S), J(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      g,
      W,
      x,
      b,
      R,
      M,
      I
    )) : F > 0 && F & 64 && B && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === B.length ? (q(
      u.dynamicChildren,
      B,
      g,
      x,
      b,
      R,
      M
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || x && d === x.subTree) && ro(
      u,
      d,
      !0
      /* shallow */
    )) : ce(
      u,
      d,
      g,
      W,
      x,
      b,
      R,
      M,
      I
    );
  }, O = (u, d, g, S, x, b, R, M, I) => {
    d.slotScopeIds = M, u == null ? d.shapeFlag & 512 ? x.ctx.activate(
      d,
      g,
      S,
      R,
      I
    ) : z(
      d,
      g,
      S,
      x,
      b,
      R,
      I
    ) : ie(u, d, I);
  }, z = (u, d, g, S, x, b, R) => {
    const M = u.component = va(
      u,
      S,
      x
    );
    if (on(u) && (M.ctx.renderer = Gt), ya(M, !1, R), M.asyncDep) {
      if (x && x.registerDep(M, re, R), !u.el) {
        const I = M.subTree = ee(Te);
        N(null, I, d, g), u.placeholder = I.el;
      }
    } else
      re(
        M,
        u,
        d,
        g,
        x,
        b,
        R
      );
  }, ie = (u, d, g) => {
    const S = d.component = u.component;
    if (Xl(u, d, g))
      if (S.asyncDep && !S.asyncResolved) {
        X(S, d, g);
        return;
      } else
        S.next = d, S.update();
    else
      d.el = u.el, S.vnode = d;
  }, re = (u, d, g, S, x, b, R) => {
    const M = () => {
      if (u.isMounted) {
        let { next: F, bu: B, u: G, parent: se, vnode: fe } = u;
        {
          const ze = oo(u);
          if (ze) {
            F && (F.el = fe.el, X(u, F, R)), ze.asyncDep.then(() => {
              Me(() => {
                u.isUnmounted || _();
              }, x);
            });
            return;
          }
        }
        let ue = F, ye;
        Et(u, !1), F ? (F.el = fe.el, X(u, F, R)) : F = fe, B && Ls(B), (ye = F.props && F.props.onVnodeBeforeUpdate) && qe(ye, se, F, fe), Et(u, !0);
        const we = xi(u), We = u.subTree;
        u.subTree = we, A(
          We,
          we,
          // parent may have changed if it's in a teleport
          h(We.el),
          // anchor may have changed if it's in a fragment
          Es(We),
          u,
          x,
          b
        ), F.el = we.el, ue === null && Zl(u, we.el), G && Me(G, x), (ye = F.props && F.props.onVnodeUpdated) && Me(
          () => qe(ye, se, F, fe),
          x
        );
      } else {
        let F;
        const { el: B, props: G } = d, { bm: se, m: fe, parent: ue, root: ye, type: we } = u, We = cs(d);
        Et(u, !1), se && Ls(se), !We && (F = G && G.onVnodeBeforeMount) && qe(F, ue, d), Et(u, !0);
        {
          ye.ce && ye.ce._hasShadowRoot() && ye.ce._injectChildStyle(
            we,
            u.parent ? u.parent.type : void 0
          );
          const ze = u.subTree = xi(u);
          A(
            null,
            ze,
            g,
            S,
            u,
            x,
            b
          ), d.el = ze.el;
        }
        if (fe && Me(fe, x), !We && (F = G && G.onVnodeMounted)) {
          const ze = d;
          Me(
            () => qe(F, ue, ze),
            x
          );
        }
        (d.shapeFlag & 256 || ue && cs(ue.vnode) && ue.vnode.shapeFlag & 256) && u.a && Me(u.a, x), u.isMounted = !0, d = g = S = null;
      }
    };
    u.scope.on();
    const I = u.effect = new pr(M);
    u.scope.off();
    const _ = u.update = I.run.bind(I), W = u.job = I.runIfDirty.bind(I);
    W.i = u, W.id = u.uid, I.scheduler = () => Qn(W), Et(u, !0), _();
  }, X = (u, d, g) => {
    d.component = u;
    const S = u.vnode.props;
    u.vnode = d, u.next = null, ea(u, d.props, S, g), ia(u, d.children, g), st(), hi(u), nt();
  }, ce = (u, d, g, S, x, b, R, M, I = !1) => {
    const _ = u && u.children, W = u ? u.shapeFlag : 0, F = d.children, { patchFlag: B, shapeFlag: G } = d;
    if (B > 0) {
      if (B & 128) {
        Is(
          _,
          F,
          g,
          S,
          x,
          b,
          R,
          M,
          I
        );
        return;
      } else if (B & 256) {
        it(
          _,
          F,
          g,
          S,
          x,
          b,
          R,
          M,
          I
        );
        return;
      }
    }
    G & 8 ? (W & 16 && qt(_, x, b), F !== _ && c(g, F)) : W & 16 ? G & 16 ? Is(
      _,
      F,
      g,
      S,
      x,
      b,
      R,
      M,
      I
    ) : qt(_, x, b, !0) : (W & 8 && c(g, ""), G & 16 && J(
      F,
      g,
      S,
      x,
      b,
      R,
      M,
      I
    ));
  }, it = (u, d, g, S, x, b, R, M, I) => {
    u = u || Ht, d = d || Ht;
    const _ = u.length, W = d.length, F = Math.min(_, W);
    let B;
    for (B = 0; B < F; B++) {
      const G = d[B] = I ? ut(d[B]) : Ze(d[B]);
      A(
        u[B],
        G,
        g,
        null,
        x,
        b,
        R,
        M,
        I
      );
    }
    _ > W ? qt(
      u,
      x,
      b,
      !0,
      !1,
      F
    ) : J(
      d,
      g,
      S,
      x,
      b,
      R,
      M,
      I,
      F
    );
  }, Is = (u, d, g, S, x, b, R, M, I) => {
    let _ = 0;
    const W = d.length;
    let F = u.length - 1, B = W - 1;
    for (; _ <= F && _ <= B; ) {
      const G = u[_], se = d[_] = I ? ut(d[_]) : Ze(d[_]);
      if (Pt(G, se))
        A(
          G,
          se,
          g,
          null,
          x,
          b,
          R,
          M,
          I
        );
      else
        break;
      _++;
    }
    for (; _ <= F && _ <= B; ) {
      const G = u[F], se = d[B] = I ? ut(d[B]) : Ze(d[B]);
      if (Pt(G, se))
        A(
          G,
          se,
          g,
          null,
          x,
          b,
          R,
          M,
          I
        );
      else
        break;
      F--, B--;
    }
    if (_ > F) {
      if (_ <= B) {
        const G = B + 1, se = G < W ? d[G].el : S;
        for (; _ <= B; )
          A(
            null,
            d[_] = I ? ut(d[_]) : Ze(d[_]),
            g,
            se,
            x,
            b,
            R,
            M,
            I
          ), _++;
      }
    } else if (_ > B)
      for (; _ <= F; )
        Ke(u[_], x, b, !0), _++;
    else {
      const G = _, se = _, fe = /* @__PURE__ */ new Map();
      for (_ = se; _ <= B; _++) {
        const Re = d[_] = I ? ut(d[_]) : Ze(d[_]);
        Re.key != null && fe.set(Re.key, _);
      }
      let ue, ye = 0;
      const we = B - se + 1;
      let We = !1, ze = 0;
      const Yt = new Array(we);
      for (_ = 0; _ < we; _++) Yt[_] = 0;
      for (_ = G; _ <= F; _++) {
        const Re = u[_];
        if (ye >= we) {
          Ke(Re, x, b, !0);
          continue;
        }
        let Je;
        if (Re.key != null)
          Je = fe.get(Re.key);
        else
          for (ue = se; ue <= B; ue++)
            if (Yt[ue - se] === 0 && Pt(Re, d[ue])) {
              Je = ue;
              break;
            }
        Je === void 0 ? Ke(Re, x, b, !0) : (Yt[Je - se] = _ + 1, Je >= ze ? ze = Je : We = !0, A(
          Re,
          d[Je],
          g,
          null,
          x,
          b,
          R,
          M,
          I
        ), ye++);
      }
      const oi = We ? aa(Yt) : Ht;
      for (ue = oi.length - 1, _ = we - 1; _ >= 0; _--) {
        const Re = se + _, Je = d[Re], li = d[Re + 1], ai = Re + 1 < W ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          li.el || lo(li)
        ) : S;
        Yt[_] === 0 ? A(
          null,
          Je,
          g,
          ai,
          x,
          b,
          R,
          M,
          I
        ) : We && (ue < 0 || _ !== oi[ue] ? Ct(Je, g, ai, 2) : ue--);
      }
    }
  }, Ct = (u, d, g, S, x = null) => {
    const { el: b, type: R, transition: M, children: I, shapeFlag: _ } = u;
    if (_ & 6) {
      Ct(u.component.subTree, d, g, S);
      return;
    }
    if (_ & 128) {
      u.suspense.move(d, g, S);
      return;
    }
    if (_ & 64) {
      R.move(u, d, g, Gt);
      return;
    }
    if (R === te) {
      n(b, d, g);
      for (let F = 0; F < I.length; F++)
        Ct(I[F], d, g, S);
      n(u.anchor, d, g);
      return;
    }
    if (R === Os) {
      C(u, d, g);
      return;
    }
    if (S !== 2 && _ & 1 && M)
      if (S === 0)
        M.persisted && !b[Oe] ? n(b, d, g) : (M.beforeEnter(b), n(b, d, g), Me(() => M.enter(b), x));
      else {
        const { leave: F, delayLeave: B, afterLeave: G } = M, se = () => {
          u.ctx.isUnmounted ? i(b) : n(b, d, g);
        }, fe = () => {
          const ue = b._isLeaving || !!b[Oe];
          b._isLeaving && b[Oe](
            !0
            /* cancelled */
          ), M.persisted && !ue ? se() : F(b, () => {
            se(), G && G();
          });
        };
        B ? B(b, se, fe) : fe();
      }
    else
      n(b, d, g);
  }, Ke = (u, d, g, S = !1, x = !1) => {
    const {
      type: b,
      props: R,
      ref: M,
      children: I,
      dynamicChildren: _,
      shapeFlag: W,
      patchFlag: F,
      dirs: B,
      cacheIndex: G,
      memo: se
    } = u;
    if (F === -2 && (x = !1), M != null && (st(), as(M, null, g, u, !0), nt()), G != null && (d.renderCache[G] = void 0), W & 256) {
      d.ctx.deactivate(u);
      return;
    }
    const fe = W & 1 && B, ue = !cs(u);
    let ye;
    if (ue && (ye = R && R.onVnodeBeforeUnmount) && qe(ye, d, u), W & 6)
      Eo(u.component, g, S);
    else {
      if (W & 128) {
        u.suspense.unmount(g, S);
        return;
      }
      fe && It(u, null, d, "beforeUnmount"), W & 64 ? u.type.remove(
        u,
        d,
        g,
        Gt,
        S
      ) : _ && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !_.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== te || F > 0 && F & 64) ? qt(
        _,
        d,
        g,
        !1,
        !0
      ) : (b === te && F & 384 || !x && W & 16) && qt(I, d, g), S && ii(u);
    }
    const we = se != null && G == null;
    (ue && (ye = R && R.onVnodeUnmounted) || fe || we) && Me(() => {
      ye && qe(ye, d, u), fe && It(u, null, d, "unmounted"), we && (u.el = null);
    }, g);
  }, ii = (u) => {
    const { type: d, el: g, anchor: S, transition: x } = u;
    if (d === te) {
      Io(g, S);
      return;
    }
    if (d === Os) {
      T(u);
      return;
    }
    const b = () => {
      i(g), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (u.shapeFlag & 1 && x && !x.persisted) {
      const { leave: R, delayLeave: M } = x, I = () => R(g, b);
      M ? M(u.el, b, I) : I();
    } else
      b();
  }, Io = (u, d) => {
    let g;
    for (; u !== d; )
      g = v(u), i(u), u = g;
    i(d);
  }, Eo = (u, d, g) => {
    const { bum: S, scope: x, job: b, subTree: R, um: M, m: I, a: _ } = u;
    Ci(I), Ci(_), S && Ls(S), x.stop(), b && (b.flags |= 8, Ke(R, u, d, g)), M && Me(M, d), Me(() => {
      u.isUnmounted = !0;
    }, d);
  }, qt = (u, d, g, S = !1, x = !1, b = 0) => {
    for (let R = b; R < u.length; R++)
      Ke(u[R], d, g, S, x);
  }, Es = (u) => {
    if (u.shapeFlag & 6)
      return Es(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const d = v(u.anchor || u.el), g = d && d[Sl];
    return g ? v(g) : d;
  };
  let pn = !1;
  const ri = (u, d, g) => {
    let S;
    u == null ? d._vnode && (Ke(d._vnode, null, null, !0), S = d._vnode.component) : A(
      d._vnode || null,
      u,
      d,
      null,
      null,
      null,
      g
    ), d._vnode = u, pn || (pn = !0, hi(S), Rr(), pn = !1);
  }, Gt = {
    p: A,
    um: Ke,
    m: Ct,
    r: ii,
    mt: z,
    mc: J,
    pc: ce,
    pbc: q,
    n: Es,
    o: e
  };
  return {
    render: ri,
    hydrate: void 0,
    createApp: Wl(ri)
  };
}
function wn({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function Et({ effect: e, job: t }, s) {
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
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = ut(i[r]), l.el = o.el), !s && l.patchFlag !== -2 && ro(o, l)), l.type === un && (l.patchFlag === -1 && (l = i[r] = ut(l)), l.el = o.el), l.type === Te && !l.el && (l.el = o.el);
    }
}
function aa(e) {
  const t = e.slice(), s = [0];
  let n, i, r, o, l;
  const a = e.length;
  for (n = 0; n < a; n++) {
    const f = e[n];
    if (f !== 0) {
      if (i = s[s.length - 1], e[i] < f) {
        t[n] = i, s.push(n);
        continue;
      }
      for (r = 0, o = s.length - 1; r < o; )
        l = r + o >> 1, e[s[l]] < f ? r = l + 1 : o = l;
      f < e[s[r]] && (r > 0 && (t[n] = s[r - 1]), s[r] = n);
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
const te = /* @__PURE__ */ Symbol.for("v-fgt"), un = /* @__PURE__ */ Symbol.for("v-txt"), Te = /* @__PURE__ */ Symbol.for("v-cmt"), Os = /* @__PURE__ */ Symbol.for("v-stc"), fs = [];
let ke = null;
function k(e = !1) {
  fs.push(ke = e ? null : []);
}
function ua() {
  fs.pop(), ke = fs[fs.length - 1] || null;
}
let bs = 1;
function Bs(e, t = !1) {
  bs += e, e < 0 && ke && t && (ke.hasOnce = !0);
}
function co(e) {
  return e.dynamicChildren = bs > 0 ? ke || Ht : null, ua(), bs > 0 && ke && ke.push(e), e;
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
function bt(e, t, s, n, i) {
  return co(
    ee(
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
function Pt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const uo = ({ key: e }) => e ?? null, Ds = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? ge(e) || /* @__PURE__ */ me(e) || Y(e) ? { i: De, r: e, k: t, f: !!s } : e : null);
function p(e, t = null, s = null, n = 0, i = null, r = e === te ? 0 : 1, o = !1, l = !1) {
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
  return l ? (Ws(a, s), r & 128 && e.normalize(a)) : s && (a.shapeFlag |= ge(s) ? 8 : 16), bs > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  ke && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && ke.push(a), a;
}
const ee = fa;
function fa(e, t = null, s = null, n = 0, i = null, r = !1) {
  if ((!e || e === Nl) && (e = Te), Ks(e)) {
    const l = _t(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Ws(l, s), bs > 0 && !r && ke && (l.shapeFlag & 6 ? ke[ke.indexOf(e)] = l : ke.push(l)), l.patchFlag = -2, l;
  }
  if (wa(e) && (e = e.__vccOpts), t) {
    t = da(t);
    let { class: l, style: a } = t;
    l && !ge(l) && (t.class = be(l)), ae(a) && (/* @__PURE__ */ nn(a) && !K(a) && (a = xe({}, a)), t.style = en(a));
  }
  const o = ge(e) ? 1 : ao(e) ? 128 : Nr(e) ? 64 : ae(e) ? 4 : Y(e) ? 2 : 0;
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
  return e ? /* @__PURE__ */ nn(e) || Qr(e) ? xe({}, e) : e : null;
}
function _t(e, t, s = !1, n = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: a } = e, f = t ? pa(i || {}, t) : i, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && uo(f),
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
    patchFlag: t && e.type !== te ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && _t(e.ssContent),
    ssFallback: e.ssFallback && _t(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && n && ys(
    c,
    a.clone(c)
  ), c;
}
function ha(e = " ", t = 0) {
  return ee(un, null, e, t);
}
function Ps(e, t) {
  const s = ee(Os, null, e);
  return s.staticCount = t, s;
}
function Pe(e = "", t = !1) {
  return t ? (k(), bt(Te, null, e)) : ee(Te, null, e);
}
function Ze(e) {
  return e == null || typeof e == "boolean" ? ee(Te) : K(e) ? ee(
    te,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ks(e) ? ut(e) : ee(un, null, String(e));
}
function ut(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : _t(e);
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
        t.class !== n.class && (t.class = be([t.class, n.class]));
      else if (i === "style")
        t.style = en([t.style, n.style]);
      else if (Gs(i)) {
        const r = t[i], o = n[i];
        o && r !== o && !(K(r) && r.includes(o)) ? t[i] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ys(i) && (t[i] = o);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function qe(e, t, s, n = null) {
  Fe(e, t, 7, [
    s,
    n
  ]);
}
const ga = qr();
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
    emitsOptions: Gr(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: de,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: de,
    data: de,
    props: de,
    attrs: de,
    slots: de,
    refs: de,
    setupState: de,
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
let zs, Fn;
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
  ), Fn = t(
    "__VUE_SSR_SETTERS__",
    (s) => _s = s
  );
}
const Cs = (e) => {
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
let _s = !1;
function ya(e, t = !1, s = !1) {
  t && Fn(t);
  const { props: n, children: i } = e.vnode, r = fo(e);
  Ql(e, n, r, t), na(e, i, s || t);
  const o = r ? ba(e, t) : void 0;
  return t && Fn(!1), o;
}
function ba(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Fl);
  const { setup: n } = s;
  if (n) {
    st();
    const i = e.setupContext = n.length > 1 ? xa(e) : null, r = Cs(e), o = Ss(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = nr(o);
    if (nt(), r(), (l || e.sp) && !cs(e) && Br(e), l) {
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
  Y(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ae(t) && (e.setupState = Ar(t)), ho(e);
}
function ho(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || et);
  {
    const i = Cs(e);
    st();
    try {
      Ul(e);
    } finally {
      nt(), i();
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
function fn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ar(Zn(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in us)
        return us[s](e);
    },
    has(t, s) {
      return s in t || s in us;
    }
  })) : e.proxy;
}
function wa(e) {
  return Y(e) && "__vccOpts" in e;
}
const Ve = (e, t) => /* @__PURE__ */ dl(e, t, _s);
function Sa(e, t, s) {
  try {
    Bs(-1);
    const n = arguments.length;
    return n === 2 ? ae(t) && !K(t) ? Ks(t) ? ee(e, null, [t]) : ee(e, t) : ee(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && Ks(s) && (s = [s]), ee(e, t, s));
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
let Un;
const Ti = typeof window < "u" && window.trustedTypes;
if (Ti)
  try {
    Un = /* @__PURE__ */ Ti.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const po = Un ? (e) => Un.createHTML(e) : (e) => e, Ia = "http://www.w3.org/2000/svg", Ea = "http://www.w3.org/1998/Math/MathML", at = typeof document < "u" ? document : null, Ai = at && /* @__PURE__ */ at.createElement("template"), Ta = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const i = t === "svg" ? at.createElementNS(Ia, e) : t === "mathml" ? at.createElementNS(Ea, e) : s ? at.createElement(e, { is: s }) : at.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => at.createTextNode(e),
  createComment: (e) => at.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => at.querySelector(e),
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
}, mt = "transition", Qt = "animation", xs = /* @__PURE__ */ Symbol("_vtc"), go = {
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
}, Aa = /* @__PURE__ */ xe(
  {},
  Fr,
  go
), Ma = (e) => (e.displayName = "Transition", e.props = Aa, e), Pa = /* @__PURE__ */ Ma(
  (e, { slots: t }) => Sa(El, Ra(e), t)
), Tt = (e, t = []) => {
  K(e) ? e.forEach((s) => s(...t)) : e && e(...t);
}, Mi = (e) => e ? K(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Ra(e) {
  const t = {};
  for (const y in e)
    y in go || (t[y] = e[y]);
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
    appearActiveClass: f = o,
    appearToClass: c = l,
    leaveFromClass: h = `${s}-leave-from`,
    leaveActiveClass: v = `${s}-leave-active`,
    leaveToClass: m = `${s}-leave-to`
  } = e, P = ka(i), A = P && P[0], H = P && P[1], {
    onBeforeEnter: N,
    onEnter: E,
    onEnterCancelled: C,
    onLeave: T,
    onLeaveCancelled: j,
    onBeforeAppear: oe = N,
    onAppear: Q = E,
    onAppearCancelled: J = C
  } = t, L = (y, O, z, ie) => {
    y._enterCancelled = ie, At(y, O ? c : l), At(y, O ? f : o), z && z();
  }, q = (y, O) => {
    y._isLeaving = !1, At(y, h), At(y, m), At(y, v), O && O();
  }, V = (y) => (O, z) => {
    const ie = y ? Q : E, re = () => L(O, y, z);
    Tt(ie, [O, re]), Pi(() => {
      At(O, y ? a : r), ot(O, y ? c : l), Mi(ie) || Ri(O, n, A, re);
    });
  };
  return xe(t, {
    onBeforeEnter(y) {
      Tt(N, [y]), ot(y, r), ot(y, o);
    },
    onBeforeAppear(y) {
      Tt(oe, [y]), ot(y, a), ot(y, f);
    },
    onEnter: V(!1),
    onAppear: V(!0),
    onLeave(y, O) {
      y._isLeaving = !0;
      const z = () => q(y, O);
      ot(y, h), y._enterCancelled ? (ot(y, v), Li(y)) : (Li(y), ot(y, v)), Pi(() => {
        y._isLeaving && (At(y, h), ot(y, m), Mi(T) || Ri(y, n, H, z));
      }), Tt(T, [y, z]);
    },
    onEnterCancelled(y) {
      L(y, !1, void 0, !0), Tt(C, [y]);
    },
    onAppearCancelled(y) {
      L(y, !0, void 0, !0), Tt(J, [y]);
    },
    onLeaveCancelled(y) {
      q(y), Tt(j, [y]);
    }
  });
}
function ka(e) {
  if (e == null)
    return null;
  if (ae(e))
    return [Sn(e.enter), Sn(e.leave)];
  {
    const t = Sn(e);
    return [t, t];
  }
}
function Sn(e) {
  return Ro(e);
}
function ot(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.add(s)), (e[xs] || (e[xs] = /* @__PURE__ */ new Set())).add(t);
}
function At(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const s = e[xs];
  s && (s.delete(t), s.size || (e[xs] = void 0));
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
  const { type: o, timeout: l, propCount: a } = La(e, t);
  if (!o)
    return n();
  const f = o + "end";
  let c = 0;
  const h = () => {
    e.removeEventListener(f, v), r();
  }, v = (m) => {
    m.target === e && ++c >= a && h();
  };
  setTimeout(() => {
    c < a && h();
  }, l + 1), e.addEventListener(f, v);
}
function La(e, t) {
  const s = window.getComputedStyle(e), n = (P) => (s[P] || "").split(", "), i = n(`${mt}Delay`), r = n(`${mt}Duration`), o = ki(i, r), l = n(`${Qt}Delay`), a = n(`${Qt}Duration`), f = ki(l, a);
  let c = null, h = 0, v = 0;
  t === mt ? o > 0 && (c = mt, h = o, v = r.length) : t === Qt ? f > 0 && (c = Qt, h = f, v = a.length) : (h = Math.max(o, f), c = h > 0 ? o > f ? mt : Qt : null, v = c ? c === mt ? r.length : a.length : 0);
  const m = c === mt && /\b(?:transform|all)(?:,|$)/.test(
    n(`${mt}Property`).toString()
  );
  return {
    type: c,
    timeout: h,
    propCount: v,
    hasTransform: m
  };
}
function ki(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((s, n) => $i(s) + $i(e[n])));
}
function $i(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Li(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Oa(e, t, s) {
  const n = e[xs];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const Js = /* @__PURE__ */ Symbol("_vod"), mo = /* @__PURE__ */ Symbol("_vsh"), Rs = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: s }) {
    e[Js] = e.style.display === "none" ? "" : e.style.display, s && t ? s.beforeEnter(e) : es(e, t);
  },
  mounted(e, { value: t }, { transition: s }) {
    s && t && s.enter(e);
  },
  updated(e, { value: t, oldValue: s }, { transition: n }) {
    !t != !s && (n ? t ? (n.beforeEnter(e), es(e, !0), n.enter(e)) : n.leave(e, () => {
      es(e, !1);
    }) : es(e, t));
  },
  beforeUnmount(e, { value: t }) {
    es(e, t);
  }
};
function es(e, t) {
  e.style.display = t ? e[Js] : "none", e[mo] = !t;
}
const Da = /* @__PURE__ */ Symbol(""), Na = /(?:^|;)\s*display\s*:/;
function Fa(e, t, s) {
  const n = e.style, i = ge(s);
  let r = !1;
  if (s && !i) {
    if (t)
      if (ge(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          s[l] == null && ss(n, l, "");
        }
      else
        for (const o in t)
          s[o] == null && ss(n, o, "");
    for (const o in s) {
      o === "display" && (r = !0);
      const l = s[o];
      l != null ? Va(
        e,
        o,
        !ge(t) && t ? t[o] : void 0,
        l
      ) || ss(n, o, l) : ss(n, o, "");
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
function ss(e, t, s) {
  if (K(s))
    s.forEach((n) => ss(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = Ua(e, t);
    Oi.test(s) ? e.setProperty(
      xt(n),
      s.replace(Oi, ""),
      "important"
    ) : e[n] = s;
  }
}
const Di = ["Webkit", "Moz", "ms"], Cn = {};
function Ua(e, t) {
  const s = Cn[t];
  if (s)
    return s;
  let n = He(t);
  if (n !== "filter" && n in e)
    return Cn[t] = n;
  n = or(n);
  for (let i = 0; i < Di.length; i++) {
    const r = Di[i] + n;
    if (r in e)
      return Cn[t] = r;
  }
  return t;
}
function Va(e, t, s, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && ge(n) && s === n;
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
function Ft(e, t, s, n) {
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
      const f = r[t] = qa(
        n,
        i
      );
      Ft(e, l, f, a);
    } else o && (Ha(e, l, o, a), r[t] = void 0);
  }
}
const Ba = /(Once|Passive|Capture)$/, Ka = /^on:?(?:Once|Passive|Capture)$/;
function Wa(e) {
  let t, s;
  for (; (s = e.match(Ba)) && !Ka.test(e); )
    t || (t = {}), e = e.slice(0, e.length - s[1].length), t[s[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : xt(e.slice(2)), t];
}
let In = 0;
const za = /* @__PURE__ */ Promise.resolve(), Ja = () => In || (za.then(() => In = 0), In = Date.now());
function qa(e, t) {
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
        const f = o[a];
        f && Fe(
          f,
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
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ga = (e, t, s, n, i, r) => {
  const o = i === "svg";
  t === "class" ? Oa(e, n, o) : t === "style" ? Fa(e, s, n) : Gs(t) ? Ys(t) || ja(e, t, s, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ya(e, t, n, o)) ? (Ui(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Fi(e, t, n, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Xa(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ge(n))) ? Ui(e, He(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Fi(e, t, n, o));
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
  return Hi(t) && ge(s) ? !1 : t in e;
}
function Xa(e, t) {
  const s = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!s)
    return !1;
  const n = He(t);
  return Array.isArray(s) ? s.some((i) => He(i) === n) : Object.keys(s).some((i) => He(i) === n);
}
const ji = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return K(t) ? (s) => Ls(t, s) : t;
};
function Za(e) {
  e.target.composing = !0;
}
function Bi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const En = /* @__PURE__ */ Symbol("_assign");
function Ki(e, t, s) {
  return t && (e = e.trim()), s && (e = Kn(e)), e;
}
const ns = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, i) {
    e[En] = ji(i);
    const r = n || i.props && i.props.type === "number";
    Ft(e, t ? "change" : "input", (o) => {
      o.target.composing || e[En](Ki(e.value, s, r));
    }), (s || r) && Ft(e, "change", () => {
      e.value = Ki(e.value, s, r);
    }), t || (Ft(e, "compositionstart", Za), Ft(e, "compositionend", Bi), Ft(e, "change", Bi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: s, modifiers: { lazy: n, trim: i, number: r } }, o) {
    if (e[En] = ji(o), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? Kn(e.value) : e.value, a = t ?? "";
    if (l === a)
      return;
    const f = e.getRootNode();
    (f instanceof Document || f instanceof ShadowRoot) && f.activeElement === e && e.type !== "range" && (n && t === s || i && e.value.trim() === a) || (e.value = a);
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
}, Ut = (e, t) => {
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
    const r = xt(i.key);
    if (t.some(
      (o) => o === r || tc[o] === r
    ))
      return e(i);
  });
}, sc = /* @__PURE__ */ xe({ patchProp: Ga }, Ta);
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
  return ge(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let bo;
const dn = (e) => bo = e, _o = (
  /* istanbul ignore next */
  Symbol()
);
function Vn(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var ds;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(ds || (ds = {}));
function oc() {
  const e = dr(!0), t = e.run(() => /* @__PURE__ */ ve({}));
  let s = [], n = [];
  const i = Zn({
    install(r) {
      dn(i), i._a = r, r.provide(_o, i), r.config.globalProperties.$pinia = i, n.forEach((o) => s.push(o)), n = [];
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
function Ot(e, ...t) {
  e.slice().forEach((s) => {
    s(...t);
  });
}
const lc = (e) => e(), Ji = Symbol(), Tn = Symbol();
function Hn(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((s, n) => e.set(n, s)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const s in t) {
    if (!t.hasOwnProperty(s))
      continue;
    const n = t[s], i = e[s];
    Vn(i) && Vn(n) && e.hasOwnProperty(s) && !/* @__PURE__ */ me(n) && !/* @__PURE__ */ ht(n) ? e[s] = Hn(i, n) : e[s] = n;
  }
  return e;
}
const ac = (
  /* istanbul ignore next */
  Symbol()
);
function cc(e) {
  return !Vn(e) || !e.hasOwnProperty(ac);
}
const { assign: vt } = Object;
function uc(e) {
  return !!(/* @__PURE__ */ me(e) && e.effect);
}
function fc(e, t, s, n) {
  const { state: i, actions: r, getters: o } = t, l = s.state.value[e];
  let a;
  function f() {
    l || (s.state.value[e] = i ? i() : {});
    const c = /* @__PURE__ */ al(s.state.value[e]);
    return vt(c, r, Object.keys(o || {}).reduce((h, v) => (h[v] = Zn(Ve(() => {
      dn(s);
      const m = s._s.get(e);
      return o[v].call(m, m);
    })), h), {}));
  }
  return a = wo(e, f, t, s, n, !0), a;
}
function wo(e, t, s = {}, n, i, r) {
  let o;
  const l = vt({ actions: {} }, s), a = { deep: !0 };
  let f, c, h = [], v = [], m;
  const P = n.state.value[e];
  !r && !P && (n.state.value[e] = {});
  let A;
  function H(J) {
    let L;
    f = c = !1, typeof J == "function" ? (J(n.state.value[e]), L = {
      type: ds.patchFunction,
      storeId: e,
      events: m
    }) : (Hn(n.state.value[e], J), L = {
      type: ds.patchObject,
      payload: J,
      storeId: e,
      events: m
    });
    const q = A = Symbol();
    Ue().then(() => {
      A === q && (f = !0);
    }), c = !0, Ot(h, L, n.state.value[e]);
  }
  const N = r ? function() {
    const { state: L } = s, q = L ? L() : {};
    this.$patch((V) => {
      vt(V, q);
    });
  } : (
    /* istanbul ignore next */
    xo
  );
  function E() {
    o.stop(), h = [], v = [], n._s.delete(e);
  }
  const C = (J, L = "") => {
    if (Ji in J)
      return J[Tn] = L, J;
    const q = function() {
      dn(n);
      const V = Array.from(arguments), y = [], O = [];
      function z(X) {
        y.push(X);
      }
      function ie(X) {
        O.push(X);
      }
      Ot(v, {
        args: V,
        name: q[Tn],
        store: j,
        after: z,
        onError: ie
      });
      let re;
      try {
        re = J.apply(this && this.$id === e ? this : j, V);
      } catch (X) {
        throw Ot(O, X), X;
      }
      return re instanceof Promise ? re.then((X) => (Ot(y, X), X)).catch((X) => (Ot(O, X), Promise.reject(X))) : (Ot(y, re), re);
    };
    return q[Ji] = !0, q[Tn] = L, q;
  }, T = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: zi.bind(null, v),
    $patch: H,
    $reset: N,
    $subscribe(J, L = {}) {
      const q = zi(h, J, L.detached, () => V()), V = o.run(() => tt(() => n.state.value[e], (y) => {
        (L.flush === "sync" ? c : f) && J({
          storeId: e,
          type: ds.direct,
          events: m
        }, y);
      }, vt({}, a, L)));
      return q;
    },
    $dispose: E
  }, j = /* @__PURE__ */ sn(T);
  n._s.set(e, j);
  const Q = (n._a && n._a.runWithContext || lc)(() => n._e.run(() => (o = dr()).run(() => t({ action: C }))));
  for (const J in Q) {
    const L = Q[J];
    if (/* @__PURE__ */ me(L) && !uc(L) || /* @__PURE__ */ ht(L))
      r || (P && cc(L) && (/* @__PURE__ */ me(L) ? L.value = P[J] : Hn(L, P[J])), n.state.value[e][J] = L);
    else if (typeof L == "function") {
      const q = C(L, J);
      Q[J] = q, l.actions[J] = L;
    }
  }
  return vt(j, Q), vt(/* @__PURE__ */ ne(j), Q), Object.defineProperty(j, "$state", {
    get: () => n.state.value[e],
    set: (J) => {
      H((L) => {
        vt(L, J);
      });
    }
  }), n._p.forEach((J) => {
    vt(j, o.run(() => J({
      store: j,
      app: n._a,
      pinia: n,
      options: l
    })));
  }), P && r && s.hydrate && s.hydrate(j.$state, P), f = !0, c = !0, j;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function hn(e, t, s) {
  let n, i;
  const r = typeof t == "function";
  typeof e == "string" ? (n = e, i = r ? s : t) : (i = e, n = e.id);
  function o(l, a) {
    const f = bl();
    return l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    l || (f ? ls(_o, null) : null), l && dn(l), l = bo, l._s.has(n) || (r ? wo(n, t, i, l) : fc(n, i, l)), l._s.get(n);
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
function An() {
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
const Ie = /* @__PURE__ */ hn("settings", {
  state: () => ({
    settings: An(),
    storage: null
  }),
  getters: {
    defaults: () => An()
  },
  actions: {
    init(e) {
      this.storage = e;
      const t = e.getSettings(), s = An();
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
const qi = /\[(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?\]/g;
function pc(e) {
  const t = e.split(/\r?\n/), s = [];
  for (const n of t) {
    const i = new RegExp(qi.source, "g"), r = [];
    let o;
    for (; (o = i.exec(n)) !== null; ) {
      const a = parseInt(o[1], 10), f = parseInt(o[2], 10), c = o[3] ?? "", h = c ? parseInt(c.padEnd(3, "0"), 10) : 0;
      r.push(a * 60 + f + h / 1e3);
    }
    if (r.length === 0) continue;
    const l = n.replace(new RegExp(qi.source, "g"), "").trim();
    if (l !== "")
      for (const a of r)
        s.push({ time: a, text: l });
  }
  s.sort((n, i) => n.time - i.time);
  for (let n = 0; n < s.length; n++)
    n < s.length - 1 && (s[n].next = s[n + 1]);
  return s;
}
function Gi(e, t) {
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
        i.removeEventListener("loadedmetadata", l), i.removeEventListener("error", a), clearTimeout(f), i.src = "";
      }, l = () => {
        r || (r = !0, o(), n(!0));
      }, a = () => {
        r || (r = !0, o(), n(!1));
      }, f = setTimeout(() => {
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
let Dt = null;
function wc() {
  if (Dt) return Dt;
  try {
    if (typeof SillyTavern < "u") {
      const e = SillyTavern.getContext();
      e?.getCurrentLocale && (Dt = e.getCurrentLocale());
    }
  } catch {
  }
  return Dt || (Dt = (typeof navigator < "u" ? navigator.language || navigator.userLanguage : "en")?.toLowerCase() || "en"), Dt;
}
function D(e) {
  return wc().startsWith("zh") ? xc[e] ?? e : e;
}
function ks() {
  return `stmp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
const Jt = /* @__PURE__ */ hn("playlist", {
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
        id: ks(),
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
        id: ks(),
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
        id: ks(),
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
        console.warn(`[playlist] resolve failed for "${t.song}"`), typeof toastr < "u" && toastr.warning(`${D("Cannot play")}: ${t.song}`);
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
            id: ks(),
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
}), $t = /* @__PURE__ */ hn("player", {
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
        const s = Gi(t.lyrics, e.currentTime), n = s ? t.lyrics.indexOf(s) : -1;
        t.currentLyricIndex = n;
      }), e.on("ended", () => {
        Jt().next();
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
      return Gi(this.lyrics, this.currentTime);
    },
    destroy() {
      this.audioEngine?.destroy(), this.audioEngine = null, this.isPlaying = !1, this.currentTime = 0, this.duration = 0, this.lyrics = [], this.currentLyricIndex = -1, this.currentTrack = null;
    }
  }
}), Sc = /* @__PURE__ */ hn("search", {
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
}, Mc = /* @__PURE__ */ wt({
  __name: "Icon",
  props: {
    name: {},
    size: {}
  },
  setup(e) {
    return (t, s) => (k(), U("svg", {
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
      e.name === "play" ? (k(), U("polygon", Ic)) : e.name === "pause" ? (k(), U(te, { key: 1 }, [
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
      ], 64)) : e.name === "prev" ? (k(), U(te, { key: 2 }, [
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
      ], 64)) : e.name === "next" ? (k(), U(te, { key: 3 }, [
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
      ], 64)) : e.name === "repeat" ? (k(), U(te, { key: 4 }, [
        s[6] || (s[6] = p("polyline", { points: "17 1 21 5 17 9" }, null, -1)),
        s[7] || (s[7] = p("path", { d: "M3 11V9a4 4 0 0 1 4-4h14" }, null, -1)),
        s[8] || (s[8] = p("polyline", { points: "7 23 3 19 7 15" }, null, -1)),
        s[9] || (s[9] = p("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" }, null, -1))
      ], 64)) : e.name === "repeat-one" ? (k(), U(te, { key: 5 }, [
        s[10] || (s[10] = Ps('<polyline points="17 1 21 5 17 9" data-v-4bfc4099></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14" data-v-4bfc4099></path><polyline points="7 23 3 19 7 15" data-v-4bfc4099></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3" data-v-4bfc4099></path><text x="12" y="14" text-anchor="middle" font-size="8" fill="currentColor" stroke="none" font-weight="bold" data-v-4bfc4099>1</text>', 5))
      ], 64)) : e.name === "shuffle" ? (k(), U(te, { key: 6 }, [
        s[11] || (s[11] = Ps('<polyline points="16 3 21 3 21 8" data-v-4bfc4099></polyline><line x1="4" y1="20" x2="21" y2="3" data-v-4bfc4099></line><polyline points="21 16 21 21 16 21" data-v-4bfc4099></polyline><line x1="15" y1="15" x2="21" y2="21" data-v-4bfc4099></line><line x1="4" y1="4" x2="9" y2="9" data-v-4bfc4099></line>', 5))
      ], 64)) : e.name === "search" ? (k(), U(te, { key: 7 }, [
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
      ], 64)) : e.name === "plus" ? (k(), U(te, { key: 8 }, [
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
      ], 64)) : e.name === "x" ? (k(), U(te, { key: 9 }, [
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
      ], 64)) : e.name === "chevron-down" ? (k(), U("polyline", Ec)) : e.name === "chevron-up" ? (k(), U("polyline", Tc)) : e.name === "music" ? (k(), U(te, { key: 12 }, [
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
      ], 64)) : e.name === "volume" ? (k(), U(te, { key: 13 }, [
        s[21] || (s[21] = p("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[22] || (s[22] = p("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1)),
        s[23] || (s[23] = p("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }, null, -1))
      ], 64)) : e.name === "volume-mute" ? (k(), U(te, { key: 14 }, [
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
      ], 64)) : e.name === "check" ? (k(), U("polyline", Ac)) : e.name === "loader" ? (k(), U(te, { key: 16 }, [
        s[27] || (s[27] = Ps('<line x1="12" y1="2" x2="12" y2="6" data-v-4bfc4099></line><line x1="12" y1="18" x2="12" y2="22" data-v-4bfc4099></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" data-v-4bfc4099></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" data-v-4bfc4099></line><line x1="2" y1="12" x2="6" y2="12" data-v-4bfc4099></line><line x1="18" y1="12" x2="22" y2="12" data-v-4bfc4099></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" data-v-4bfc4099></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" data-v-4bfc4099></line>', 8))
      ], 64)) : e.name === "list-music" ? (k(), U(te, { key: 17 }, [
        s[28] || (s[28] = Ps('<path d="M3 12h11" data-v-4bfc4099></path><path d="M3 6h11" data-v-4bfc4099></path><path d="M3 18h7" data-v-4bfc4099></path><path d="M16 8v13" data-v-4bfc4099></path><circle cx="14" cy="21" r="2" data-v-4bfc4099></circle><path d="M16 8l5-2v3" data-v-4bfc4099></path>', 6))
      ], 64)) : Pe("", !0)
    ], 8, Cc));
  }
}), St = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, i] of t)
    s[n] = i;
  return s;
}, pe = /* @__PURE__ */ St(Mc, [["__scopeId", "data-v-4bfc4099"]]), Pc = {
  key: 0,
  class: "stmp-mini stmp-mini-dock-desktop"
}, Rc = {
  key: 0,
  class: "stmp-mini-cover"
}, kc = ["src"], $c = {
  key: 1,
  class: "stmp-mini-cover stmp-mini-cover-placeholder"
}, Lc = { class: "stmp-mini-text" }, Oc = { class: "stmp-mini-controls" }, Dc = ["aria-label"], Nc = ["aria-label"], Fc = {
  key: 1,
  class: "stmp-mini stmp-mini-dock-mobile"
}, Uc = {
  key: 0,
  class: "stmp-mini-cover"
}, Vc = ["src"], Hc = {
  key: 1,
  class: "stmp-mini-cover stmp-mini-cover-placeholder"
}, jc = { class: "stmp-mini-text" }, Bc = { class: "stmp-mini-controls" }, Kc = ["aria-label"], Wc = ["aria-label"], zc = {
  key: 2,
  class: "stmp-mini stmp-mini-drag"
}, Jc = ["aria-label"], qc = ["src"], Gc = { class: "stmp-mini-cover-overlay" }, Yc = { class: "stmp-mini-drag-right" }, Xc = { class: "stmp-mini-text stmp-mini-text-drag" }, Zc = /* @__PURE__ */ wt({
  __name: "CollapsedBar",
  props: {
    isDock: { type: Boolean },
    isMobile: { type: Boolean }
  },
  setup(e) {
    const t = $t(), s = Jt(), n = e, i = /* @__PURE__ */ ve(!1), r = Ve(() => t.currentTrack?.cover || ""), o = Ve(() => {
      const H = t.currentTrack;
      if (!H) return D("No Song");
      const N = H.name, E = H.artist || "";
      return E ? `${N} - ${E}` : N;
    }), l = Ve(() => a.value || o.value), a = Ve(() => {
      const H = t.currentLyricIndex;
      return H < 0 || H >= t.lyrics.length ? "" : t.lyrics[H].text;
    }), f = /* @__PURE__ */ ve(null), c = /* @__PURE__ */ ve(null), h = /* @__PURE__ */ ve(!1);
    function v() {
      const H = f.value, N = c.value;
      if (!H || !N) {
        h.value = !1;
        return;
      }
      const E = H.scrollWidth - N.clientWidth;
      h.value = E > 3;
    }
    tt(a, () => {
      Ue(() => requestAnimationFrame(v));
    }), an(() => {
      requestAnimationFrame(v);
    });
    function m() {
      i.value = !0;
    }
    tt(() => t.currentTrack?.url, () => {
      i.value = !1;
    });
    function P(H) {
      H.stopPropagation(), t.togglePlay();
    }
    function A(H) {
      H.stopPropagation(), s.next();
    }
    return (H, N) => n.isDock && !n.isMobile ? (k(), U("div", Pc, [
      r.value && !i.value ? (k(), U("div", Rc, [
        p("img", {
          src: r.value,
          alt: "",
          onError: m
        }, null, 40, kc)
      ])) : (k(), U("div", $c, [
        ee(pe, {
          name: "music",
          size: 14
        })
      ])),
      p("span", Lc, Z(l.value), 1),
      p("div", Oc, [
        p("button", {
          class: "stmp-mini-btn",
          "aria-label": w(t).isPlaying ? w(D)("Pause") : w(D)("Play"),
          onClick: P
        }, [
          ee(pe, {
            name: w(t).isPlaying ? "pause" : "play",
            size: 14
          }, null, 8, ["name"])
        ], 8, Dc),
        p("button", {
          class: "stmp-mini-btn",
          "aria-label": w(D)("Next"),
          onClick: A
        }, [
          ee(pe, {
            name: "next",
            size: 14
          })
        ], 8, Nc)
      ])
    ])) : n.isDock && n.isMobile ? (k(), U("div", Fc, [
      r.value && !i.value ? (k(), U("div", Uc, [
        p("img", {
          src: r.value,
          alt: "",
          onError: m
        }, null, 40, Vc)
      ])) : (k(), U("div", Hc, [
        ee(pe, {
          name: "music",
          size: 14
        })
      ])),
      p("span", jc, Z(l.value), 1),
      p("div", Bc, [
        p("button", {
          class: "stmp-mini-btn",
          "aria-label": w(t).isPlaying ? w(D)("Pause") : w(D)("Play"),
          onClick: P
        }, [
          ee(pe, {
            name: w(t).isPlaying ? "pause" : "play",
            size: 16
          }, null, 8, ["name"])
        ], 8, Kc),
        p("button", {
          class: "stmp-mini-btn",
          "aria-label": w(D)("Next"),
          onClick: A
        }, [
          ee(pe, {
            name: "next",
            size: 16
          })
        ], 8, Wc)
      ])
    ])) : (k(), U("div", zc, [
      p("button", {
        class: "stmp-mini-cover stmp-mini-cover-square",
        "aria-label": w(t).isPlaying ? w(D)("Pause") : w(D)("Play"),
        onClick: P
      }, [
        r.value && !i.value ? (k(), U("img", {
          key: 0,
          src: r.value,
          alt: "",
          onError: m
        }, null, 40, qc)) : (k(), bt(pe, {
          key: 1,
          name: "music",
          size: 20
        })),
        p("div", Gc, [
          ee(pe, {
            name: w(t).isPlaying ? "pause" : "play",
            size: 18
          }, null, 8, ["name"])
        ])
      ], 8, Jc),
      p("div", Yc, [
        p("span", Xc, Z(o.value), 1),
        p("div", {
          ref_key: "lyricContainerRef",
          ref: c,
          class: "stmp-mini-lyric"
        }, [
          p("span", {
            ref_key: "lyricScrollRef",
            ref: f,
            class: be(["stmp-mini-lyric-scroll", { scrolling: h.value }])
          }, Z(a.value || " "), 3)
        ], 512)
      ])
    ]));
  }
}), Qc = /* @__PURE__ */ St(Zc, [["__scopeId", "data-v-fdd02b2f"]]), eu = { class: "stmp-playlist" }, tu = { class: "stmp-upload-area" }, su = ["aria-label"], nu = {
  key: 0,
  class: "stmp-empty"
}, iu = { class: "stmp-group-label" }, ru = ["onClick"], ou = { class: "stmp-item-index" }, lu = { class: "stmp-item-info" }, au = { class: "stmp-item-song" }, cu = {
  key: 0,
  class: "stmp-item-artist"
}, uu = ["onClick"], fu = /* @__PURE__ */ wt({
  __name: "PlaylistView",
  setup(e) {
    const t = Jt(), s = Ie(), n = /* @__PURE__ */ ve(null), i = () => {
      n.value?.click();
    }, r = async (c) => {
      const h = c.target;
      if (!h.files || !h.files[0]) return;
      const v = h.files[0], m = `stmp:audio:${Date.now()}-${v.name}`, P = s.storage;
      P && (await P.setBlob(m, v), t.addLocalFile(v.name, m)), h.value = "";
    }, o = Ve(() => {
      const c = {
        chat: [],
        user: [],
        local: []
      };
      return t.list.forEach((h, v) => {
        c[h.source] && c[h.source].push({ index: v, item: h });
      }), c;
    }), l = {
      chat: D("From Chat"),
      user: D("My List"),
      local: D("Local Files")
    };
    function a(c) {
      t.play(c);
    }
    function f(c) {
      t.removeItem(c);
    }
    return (c, h) => (k(), U("div", eu, [
      p("div", tu, [
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
          "aria-label": w(D)("Add local file"),
          onClick: i
        }, " + " + Z(w(D)("Add local file")), 9, su)
      ]),
      w(t).isEmpty ? (k(), U("div", nu, Z(w(D)("No Songs")), 1)) : (k(), U(te, { key: 1 }, Xe(["chat", "user", "local"], (v) => p("div", {
        key: v,
        class: "stmp-group"
      }, [
        o.value[v].length ? (k(), U(te, { key: 0 }, [
          p("div", iu, Z(l[v]), 1),
          (k(!0), U(te, null, Xe(o.value[v], (m) => (k(), U("div", {
            key: m.item.id,
            class: be(["stmp-item", { active: m.index === w(t).currentIndex }]),
            onClick: (P) => a(m.index)
          }, [
            p("span", ou, Z(m.index + 1), 1),
            p("div", lu, [
              p("span", au, Z(m.item.song), 1),
              m.item.artist ? (k(), U("span", cu, Z(m.item.artist), 1)) : Pe("", !0)
            ]),
            p("button", {
              class: "stmp-item-del",
              onClick: Ut((P) => f(m.index), ["stop"])
            }, [
              ee(pe, {
                name: "x",
                size: 14
              })
            ], 8, uu)
          ], 10, ru))), 128))
        ], 64)) : Pe("", !0)
      ])), 64))
    ]));
  }
}), du = /* @__PURE__ */ St(fu, [["__scopeId", "data-v-6157de27"]]), hu = { class: "stmp-search" }, pu = { class: "stmp-search-bar" }, gu = ["placeholder"], mu = ["disabled"], vu = {
  key: 0,
  class: "stmp-search-error"
}, yu = ["aria-label"], bu = {
  key: 1,
  class: "stmp-search-loading"
}, _u = {
  key: 2,
  class: "stmp-search-empty"
}, xu = {
  key: 3,
  class: "stmp-search-hint"
}, wu = {
  key: 4,
  class: "stmp-results"
}, Su = ["onClick"], Cu = { class: "stmp-result-name" }, Iu = {
  key: 0,
  class: "stmp-result-artist"
}, Eu = ["aria-label", "onClick"], Tu = /* @__PURE__ */ wt({
  __name: "SearchView",
  setup(e) {
    const t = Sc(), s = Jt(), n = Ie(), i = /* @__PURE__ */ ve(t.keyword), r = /* @__PURE__ */ ve(/* @__PURE__ */ new Set()), o = /* @__PURE__ */ ve(null);
    async function l() {
      t.setKeyword(i.value);
      const m = So(n.settings.providers);
      await t.search(m);
    }
    const a = () => {
      l();
    };
    function f(m) {
      const P = m.provider + m.id;
      if (o.value === P) return;
      o.value = P;
      const A = s.list.length;
      s.addFromSearch(m);
      const H = s.list.length - 1;
      H >= A && s.play(H), setTimeout(() => {
        r.value.add(P), o.value = null;
      }, 600);
    }
    function c(m) {
      const P = m.provider + m.id;
      r.value.has(P) || (s.addFromSearch(m), r.value.add(P));
    }
    function h(m) {
      return r.value.has(m.provider + m.id);
    }
    function v(m) {
      return o.value === m.provider + m.id;
    }
    return (m, P) => (k(), U("div", hu, [
      p("div", pu, [
        lt(p("input", {
          "onUpdate:modelValue": P[0] || (P[0] = (A) => i.value = A),
          class: "stmp-search-input",
          placeholder: w(D)("Search Song..."),
          onKeydown: vo(l, ["enter"])
        }, null, 40, gu), [
          [ns, i.value]
        ]),
        p("button", {
          class: "stmp-icon-btn",
          disabled: w(t).isSearching,
          onClick: l
        }, [
          w(t).isSearching ? (k(), bt(pe, {
            key: 1,
            name: "loader",
            size: 16,
            class: "stmp-spin"
          })) : (k(), bt(pe, {
            key: 0,
            name: "search",
            size: 16
          }))
        ], 8, mu)
      ]),
      w(t).error ? (k(), U("div", vu, [
        p("span", null, Z(w(t).error), 1),
        p("button", {
          class: "stmp-retry-btn",
          "aria-label": w(D)("Retry"),
          onClick: a
        }, Z(w(D)("Retry")), 9, yu)
      ])) : Pe("", !0),
      w(t).isSearching ? (k(), U("div", bu, Z(w(D)("Searching...")), 1)) : i.value && !w(t).results.length ? (k(), U("div", _u, Z(w(D)("No results")), 1)) : !i.value && !w(t).results.length ? (k(), U("div", xu, Z(w(D)("Type a song name to search")), 1)) : Pe("", !0),
      w(t).results.length ? (k(), U("div", wu, [
        (k(!0), U(te, null, Xe(w(t).results, (A) => (k(), U("div", {
          key: A.provider + A.id,
          class: be(["stmp-result", { "stmp-result-playing": v(A) }])
        }, [
          p("div", {
            class: "stmp-result-info",
            onClick: (H) => f(A)
          }, [
            p("span", Cu, Z(A.name), 1),
            A.artist ? (k(), U("span", Iu, Z(A.artist), 1)) : Pe("", !0)
          ], 8, Su),
          p("button", {
            class: be(["stmp-icon-btn stmp-result-add", { added: h(A) }]),
            "aria-label": h(A) ? w(D)("Added") : w(D)("Add to list"),
            onClick: Ut((H) => c(A), ["stop"])
          }, [
            ee(pe, {
              name: h(A) ? "check" : "plus",
              size: 16
            }, null, 8, ["name"])
          ], 10, Eu)
        ], 2))), 128))
      ])) : Pe("", !0)
    ]));
  }
}), Au = /* @__PURE__ */ St(Tu, [["__scopeId", "data-v-a8d156af"]]), Mu = { class: "stmp-panel" }, Pu = { class: "stmp-topbar stmp-drag-handle" }, Ru = ["aria-label"], ku = { class: "stmp-cover-large" }, $u = ["src"], Lu = {
  key: 1,
  class: "stmp-cover-placeholder"
}, Ou = { class: "stmp-track-name" }, Du = { class: "stmp-track-artist" }, Nu = { class: "stmp-lyric-header" }, Fu = { class: "stmp-track-name" }, Uu = { class: "stmp-track-artist" }, Vu = {
  key: 0,
  class: "stmp-lyric-empty"
}, Hu = { class: "stmp-progress" }, ju = ["value"], Bu = { class: "stmp-time" }, Ku = { class: "stmp-controls" }, Wu = { class: "stmp-ctrl-side stmp-search-side" }, zu = ["aria-label"], Ju = ["aria-label"], qu = ["aria-label"], Gu = ["aria-label"], Yu = ["aria-label"], Xu = ["aria-label"], Zu = { class: "stmp-ctrl-side stmp-volume-side" }, Qu = ["aria-label"], ef = ["value"], tf = {
  key: 0,
  class: "stmp-overlay"
}, sf = { class: "stmp-overlay-header" }, nf = { class: "stmp-overlay-title" }, rf = ["aria-label"], of = { class: "stmp-overlay-body" }, lf = /* @__PURE__ */ wt({
  __name: "PlayerPanel",
  emits: ["collapse"],
  setup(e) {
    const t = $t(), s = Jt(), n = Ie(), i = /* @__PURE__ */ ve("cover"), r = /* @__PURE__ */ ve(null), o = /* @__PURE__ */ ve(!1), l = /* @__PURE__ */ ve(!1);
    let a = null;
    const f = Ve(() => t.currentTrack?.cover || ""), c = () => {
      o.value = !0;
    };
    tt(
      () => t.currentTrack,
      () => {
        o.value = !1;
      }
    );
    const h = Ve(
      () => t.duration > 0 ? t.currentTime / t.duration * 100 : 0
    ), v = /* @__PURE__ */ ve(0), m = /* @__PURE__ */ ve([]), P = /* @__PURE__ */ ve(null);
    function A(y, O) {
      y && (m.value[O] = y);
    }
    async function H() {
      await Ue();
      const y = t.currentLyricIndex, O = P.value;
      if (!O || y < 0) {
        v.value = 0;
        return;
      }
      const z = m.value[y];
      if (!z) return;
      const ie = z.offsetTop, re = z.offsetHeight, X = O.clientHeight;
      v.value = ie - X / 2 + re / 2;
    }
    tt(() => t.currentLyricIndex, H), tt(() => t.lyrics, () => {
      m.value = [], H();
    });
    function N(y) {
      const O = Math.floor(y / 60), z = Math.floor(y % 60);
      return O + ":" + z.toString().padStart(2, "0");
    }
    function E(y) {
      const O = y.target;
      t.seek(Number(O.value) / 100 * t.duration);
    }
    const C = ["list", "random", "single"], T = {
      list: "repeat",
      random: "shuffle",
      single: "repeat-one"
    };
    function j() {
      const y = n.settings.playMode, O = C.indexOf(y), z = C[(O + 1) % C.length];
      n.setPlayMode(z);
    }
    function oe(y) {
      const O = y.target;
      t.setVolume(Number(O.value));
    }
    function Q() {
      a && clearTimeout(a), l.value = !0;
    }
    function J() {
      a = setTimeout(() => {
        l.value = !1;
      }, 300);
    }
    function L() {
      t.volume > 0 ? t.setVolume(0) : t.setVolume(65);
    }
    function q(y) {
      r.value === y ? r.value = null : r.value = y;
    }
    function V() {
      r.value = null;
    }
    return (y, O) => (k(), U("div", Mu, [
      p("div", Pu, [
        O[7] || (O[7] = p("div", { class: "stmp-topbar-spacer" }, null, -1)),
        p("button", {
          class: "stmp-icon-btn",
          "aria-label": w(D)("Collapse panel"),
          onClick: O[0] || (O[0] = Ut((z) => y.$emit("collapse"), ["stop"]))
        }, [
          ee(pe, {
            name: "chevron-down",
            size: 18
          })
        ], 8, Ru)
      ]),
      p("div", {
        class: "stmp-display",
        onClick: O[1] || (O[1] = (z) => i.value = i.value === "cover" ? "lyric" : "cover")
      }, [
        p("div", {
          class: be(["stmp-cover-mode", { hidden: i.value !== "cover" }])
        }, [
          p("div", ku, [
            f.value && !o.value ? (k(), U("img", {
              key: 0,
              src: f.value,
              alt: "cover",
              onError: c
            }, null, 40, $u)) : (k(), U("div", Lu, [
              ee(pe, {
                name: "music",
                size: 48
              })
            ]))
          ]),
          p("div", Ou, Z(w(t).currentTrack?.name || w(D)("No Song")), 1),
          p("div", Du, Z(w(t).currentTrack?.artist || " "), 1)
        ], 2),
        p("div", {
          class: be(["stmp-lyric-mode", { hidden: i.value !== "lyric" }])
        }, [
          p("div", Nu, [
            p("div", Fu, Z(w(t).currentTrack?.name || w(D)("No Song")), 1),
            p("div", Uu, Z(w(t).currentTrack?.artist || " "), 1)
          ]),
          p("div", {
            ref_key: "lyricWindowRef",
            ref: P,
            class: "stmp-lyric-window"
          }, [
            w(t).lyrics.length === 0 ? (k(), U("div", Vu, [
              ee(pe, {
                name: "music",
                size: 18
              })
            ])) : (k(), U("div", {
              key: 1,
              class: "stmp-lyric-scroll",
              style: en({ transform: `translateY(-${v.value}px)` })
            }, [
              (k(!0), U(te, null, Xe(w(t).lyrics, (z, ie) => (k(), U("div", {
                key: ie,
                ref_for: !0,
                ref: (re) => A(re, ie),
                class: be(["stmp-lyric-line", { "stmp-lyric-active": ie === w(t).currentLyricIndex }])
              }, Z(z.text), 3))), 128))
            ], 4))
          ], 512)
        ], 2)
      ]),
      p("div", Hu, [
        p("input", {
          type: "range",
          min: "0",
          max: "100",
          step: "0.1",
          value: h.value,
          class: "stmp-range",
          onInput: E
        }, null, 40, ju),
        p("div", Bu, [
          p("span", null, Z(N(w(t).currentTime)), 1),
          p("span", null, Z(N(w(t).duration)), 1)
        ])
      ]),
      p("div", Ku, [
        p("div", Wu, [
          p("button", {
            class: be(["stmp-ctrl-btn", { active: r.value === "search" }]),
            "aria-label": w(D)("Search"),
            onClick: O[2] || (O[2] = Ut((z) => q("search"), ["stop"]))
          }, [
            ee(pe, {
              name: "search",
              size: 18
            })
          ], 10, zu)
        ]),
        p("button", {
          class: "stmp-ctrl-btn",
          "aria-label": w(D)("Toggle play mode"),
          onClick: j
        }, [
          ee(pe, {
            name: T[w(n).settings.playMode],
            size: 18
          }, null, 8, ["name"])
        ], 8, Ju),
        p("button", {
          class: "stmp-ctrl-btn",
          "aria-label": w(D)("Previous"),
          onClick: O[3] || (O[3] = (z) => w(s).prev())
        }, [
          ee(pe, {
            name: "prev",
            size: 18
          })
        ], 8, qu),
        p("button", {
          class: "stmp-ctrl-btn stmp-play-btn",
          "aria-label": w(t).isPlaying ? w(D)("Pause") : w(D)("Play"),
          onClick: O[4] || (O[4] = (z) => w(t).togglePlay())
        }, [
          ee(pe, {
            name: w(t).isPlaying ? "pause" : "play",
            size: 24
          }, null, 8, ["name"])
        ], 8, Gu),
        p("button", {
          class: "stmp-ctrl-btn",
          "aria-label": w(D)("Next"),
          onClick: O[5] || (O[5] = (z) => w(s).next())
        }, [
          ee(pe, {
            name: "next",
            size: 18
          })
        ], 8, Yu),
        p("button", {
          class: be(["stmp-ctrl-btn", { active: r.value === "list" }]),
          "aria-label": w(D)("Playlist"),
          onClick: O[6] || (O[6] = Ut((z) => q("list"), ["stop"]))
        }, [
          ee(pe, {
            name: "list-music",
            size: 18
          })
        ], 10, Xu),
        p("div", Zu, [
          p("div", {
            class: "stmp-volume-container",
            onMouseenter: Q,
            onMouseleave: J
          }, [
            p("button", {
              class: "stmp-ctrl-btn",
              "aria-label": w(D)("Mute / Unmute"),
              onClick: L
            }, [
              ee(pe, {
                name: w(t).volume === 0 ? "volume-mute" : "volume",
                size: 18
              }, null, 8, ["name"])
            ], 8, Qu),
            p("div", {
              class: be(["stmp-volume-popup", { show: l.value }])
            }, [
              p("input", {
                type: "range",
                min: "0",
                max: "100",
                value: w(t).volume,
                class: "stmp-volume-vertical",
                orient: "vertical",
                onInput: oe
              }, null, 40, ef)
            ], 2)
          ], 32)
        ])
      ]),
      ee(Pa, { name: "stmp-overlay" }, {
        default: Lr(() => [
          r.value ? (k(), U("div", tf, [
            p("div", sf, [
              p("span", nf, Z(r.value === "list" ? w(D)("Playlist") : w(D)("Search")), 1),
              p("button", {
                class: "stmp-overlay-close",
                "aria-label": w(D)("Close"),
                onClick: Ut(V, ["stop"])
              }, [
                ee(pe, {
                  name: "x",
                  size: 16
                })
              ], 8, rf)
            ]),
            p("div", of, [
              r.value === "list" ? (k(), bt(du, { key: 0 })) : (k(), bt(Au, { key: 1 }))
            ])
          ])) : Pe("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), af = /* @__PURE__ */ St(lf, [["__scopeId", "data-v-b6793b97"]]), cf = /* @__PURE__ */ wt({
  __name: "App",
  setup(e) {
    const t = Ie(), s = $t(), n = /* @__PURE__ */ ve(!1), i = /* @__PURE__ */ ve(null);
    let r = null;
    const o = Ve(() => t.settings.widgetMode === "dock"), l = Ve(() => t.settings.widgetMode === "hidden"), a = /* @__PURE__ */ ve(window.innerWidth <= 768), f = (V) => {
      V.key === "Escape" && (n.value = !1), V.key === " " && V.target === document.body && (V.preventDefault(), s.togglePlay());
    };
    let c = 0, h = 0, v = 0, m = 0, P = !1, A = !1, H = null, N = null;
    function E(V) {
      if (o.value) return;
      const y = V.target;
      if (y.closest("input, .stmp-result, .stmp-item, .stmp-upload-btn, .stmp-search-input, .stmp-controls, .stmp-lyrics, .stmp-overlay, .stmp-display, .stmp-overlay-close") || n.value && (!y.closest(".stmp-drag-handle") || y.closest("button")) || !n.value && y.closest("button"))
        return;
      const O = i.value?.getBoundingClientRect();
      O && (c = V.clientX, h = V.clientY, v = O.left, m = O.top, P = !1, A = !0, i.value && (i.value.style.left = O.left + "px", i.value.style.top = O.top + "px", i.value.style.right = "auto", i.value.style.bottom = "auto"), H = C, N = T, document.addEventListener("pointermove", H), document.addEventListener("pointerup", N), V.preventDefault());
    }
    function C(V) {
      if (!i.value || !A) return;
      const y = V.clientX - c, O = V.clientY - h;
      (Math.abs(y) > 3 || Math.abs(O) > 3) && (P = !0);
      let z = v + y, ie = m + O;
      const re = i.value.offsetWidth || 60, X = i.value.offsetHeight || 40, ce = window.innerWidth - re, it = window.innerHeight - X;
      z = Math.max(0, Math.min(z, ce)), ie = Math.max(0, Math.min(ie, it)), i.value.style.left = z + "px", i.value.style.top = ie + "px";
    }
    function T() {
      if (A = !1, H && document.removeEventListener("pointermove", H), N && document.removeEventListener("pointerup", N), H = null, N = null, !P) {
        L();
        return;
      }
      if (i.value) {
        const V = i.value.getBoundingClientRect();
        t.setPosition({ x: V.left, y: V.top }), n.value && Ue(() => j());
      }
    }
    function j() {
      if (!i.value) return;
      const V = i.value.getBoundingClientRect(), y = i.value.offsetWidth, O = i.value.offsetHeight;
      let z = V.left, ie = V.top;
      z + y > window.innerWidth && (z = window.innerWidth - y), ie + O > window.innerHeight && (ie = window.innerHeight - O), z < 0 && (z = 0), ie < 0 && (ie = 0), i.value.style.left = z + "px", i.value.style.top = ie + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", t.setPosition({ x: z, y: ie });
    }
    function oe() {
      if (!i.value || !o.value) return;
      const V = document.querySelector("#send_form");
      if (!V) return;
      const y = V.getBoundingClientRect(), O = i.value.offsetHeight || 38, z = Math.max(80, y.top - 8);
      i.value.style.maxHeight = z + "px";
      let ie = y.top - Math.min(O, z);
      if (ie < 4 && (ie = 4), window.innerWidth <= 768)
        i.value.style.left = y.left + "px", i.value.style.width = y.width + "px";
      else {
        const re = t.settings.dockAlign === "right", X = i.value.offsetWidth;
        re ? i.value.style.left = y.right - X + "px" : i.value.style.left = y.left + "px", i.value.style.width = "";
      }
      i.value.style.top = ie + "px", i.value.style.right = "auto", i.value.style.bottom = "auto";
    }
    function Q() {
      if (!i.value || o.value) return;
      const V = t.settings.position;
      V ? (i.value.style.left = V.x + "px", i.value.style.top = V.y + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", window.innerWidth <= 768 && Ue(() => j())) : (i.value.style.right = "16px", i.value.style.top = "16px", i.value.style.left = "auto", i.value.style.bottom = "auto");
    }
    function J(V) {
      if (o.value && !n.value) {
        if (V.target.closest("button, input")) return;
        L();
      }
    }
    function L() {
      n.value = !n.value, Ue(() => {
        o.value ? oe() : t.settings.position && j();
      });
    }
    tt(() => t.settings.widgetMode, (V) => {
      Ue(() => {
        V === "dock" ? oe() : Q();
      });
    }), an(() => {
      Ue(() => {
        o.value ? oe() : Q();
      }), i.value && typeof ResizeObserver < "u" && (r = new ResizeObserver(() => {
        o.value && oe();
      }), r.observe(i.value)), window.addEventListener("resize", q), window.addEventListener("keydown", f);
    });
    function q() {
      a.value = window.innerWidth <= 768, o.value ? Ue(() => oe()) : Ue(() => j());
    }
    return ei(() => {
      T(), r && (r.disconnect(), r = null), window.removeEventListener("resize", q), window.removeEventListener("keydown", f);
    }), (V, y) => l.value ? Pe("", !0) : (k(), U("div", {
      key: 0,
      ref_key: "widgetRef",
      ref: i,
      class: be(["stmp-widget", {
        "stmp-expanded": n.value,
        "stmp-collapsed": !n.value,
        "stmp-dock": o.value
      }]),
      onPointerdown: E,
      onClick: J
    }, [
      n.value ? (k(), bt(af, {
        key: 1,
        onCollapse: L
      })) : (k(), bt(Qc, {
        key: 0,
        "is-dock": o.value,
        "is-mobile": a.value
      }, null, 8, ["is-dock", "is-mobile"]))
    ], 34));
  }
}), uf = /* @__PURE__ */ St(cf, [["__scopeId", "data-v-582b167e"]]), ff = { class: "stmp-switch-row" }, df = {
  key: 0,
  class: "stmp-switch-label"
}, hf = { class: "stmp-switch" }, pf = ["checked"], gf = /* @__PURE__ */ wt({
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
    return (i, r) => (k(), U("label", ff, [
      e.label ? (k(), U("span", df, Z(e.label), 1)) : Pe("", !0),
      p("span", hf, [
        p("input", {
          type: "checkbox",
          checked: e.modelValue,
          onChange: n
        }, null, 40, pf),
        r[0] || (r[0] = p("span", { class: "stmp-switch-track" }, [
          p("span", { class: "stmp-switch-thumb" })
        ], -1))
      ])
    ]));
  }
}), Zi = /* @__PURE__ */ St(gf, [["__scopeId", "data-v-d86a29bd"]]), mf = { class: "stmp-settings" }, vf = { class: "stmp-tab-bar" }, yf = ["onClick"], bf = { class: "stmp-tab-content" }, _f = { class: "stmp-tab-panel" }, xf = { class: "stmp-setting-group" }, wf = { class: "stmp-setting-label" }, Sf = { class: "stmp-mode-toggle" }, Cf = ["onClick"], If = {
  key: 0,
  class: "stmp-setting-group"
}, Ef = { class: "stmp-setting-label" }, Tf = { class: "stmp-mode-toggle" }, Af = ["onClick"], Mf = { class: "stmp-setting-group" }, Pf = { class: "stmp-setting-label" }, Rf = ["value"], kf = { class: "stmp-setting-group" }, $f = {
  class: "stmp-setting-label",
  for: "stmp-playmode"
}, Lf = ["value"], Of = ["value"], Df = { class: "stmp-tab-panel" }, Nf = {
  key: 0,
  class: "stmp-provider-fields"
}, Ff = ["onUpdate:modelValue", "placeholder"], Uf = {
  key: 1,
  class: "stmp-provider-fields"
}, Vf = ["onUpdate:modelValue", "placeholder"], Hf = ["onUpdate:modelValue", "placeholder"], jf = { class: "stmp-tab-panel" }, Bf = { class: "stmp-setting-group" }, Kf = { class: "stmp-setting-label" }, Wf = { class: "stmp-rules" }, zf = ["onClick"], Jf = { class: "stmp-rule-add" }, qf = ["placeholder"], Gf = { class: "stmp-tab-panel" }, Yf = { class: "stmp-data-btns" }, Xf = /* @__PURE__ */ wt({
  __name: "SettingsView",
  setup(e) {
    const t = Ie(), s = /* @__PURE__ */ ve("playback"), n = [
      { id: "playback", label: D("Playback"), icon: "fa-solid fa-music" },
      { id: "providers", label: D("Providers"), icon: "fa-solid fa-cloud" },
      { id: "cue", label: D("AI Cue"), icon: "fa-solid fa-wand-magic-sparkles" },
      { id: "data", label: D("Data"), icon: "fa-solid fa-database" }
    ], i = [
      { value: "list", label: D("List Loop") },
      { value: "random", label: D("Random") },
      { value: "single", label: D("Single Loop") }
    ], r = [
      { value: "dock", label: D("Dock"), icon: "fa-solid fa-grip-lines" },
      { value: "drag", label: D("Drag"), icon: "fa-solid fa-up-down-left-right" },
      { value: "hidden", label: D("Hidden"), icon: "fa-solid fa-eye-slash" }
    ], o = [
      { value: "left", label: D("Left"), icon: "fa-solid fa-align-left" },
      { value: "right", label: D("Right"), icon: "fa-solid fa-align-right" }
    ];
    function l(N) {
      const E = N.target;
      t.setVolume(Number(E.value));
    }
    function a(N) {
      const E = N.target;
      t.setPlayMode(E.value);
    }
    const f = {
      netease: D("NetEase"),
      local: D("Local Files"),
      custom: D("Custom API")
    };
    function c(N) {
      const E = t.settings.providers.find((C) => C.id === N);
      E && (E.enabled = !E.enabled, t.save());
    }
    const h = /* @__PURE__ */ ve("");
    function v() {
      const N = h.value.trim();
      N && (t.addCustomCueRule(N), h.value = "");
    }
    function m(N) {
      t.removeCustomCueRule(N);
    }
    const P = async () => {
      const N = t.storage;
      N && (await N.clearCache(), toastr.success(D("Cache cleared")));
    }, A = () => {
      const N = JSON.stringify(t.settings, null, 2), E = new Blob([N], { type: "application/json" }), C = URL.createObjectURL(E), T = document.createElement("a");
      T.href = C, T.download = "st-music-player-settings.json", T.click(), URL.revokeObjectURL(C);
    }, H = () => {
      const N = document.createElement("input");
      N.type = "file", N.accept = ".json", N.onchange = async (E) => {
        const C = E.target.files?.[0];
        if (!C) return;
        const T = await C.text();
        try {
          const j = JSON.parse(T);
          if (typeof j != "object" || j === null) throw new Error("Not an object");
          const oe = ["volume", "playMode", "position", "widgetMode", "autoPlayOnNewCue", "providers", "customCueRules"], Q = {};
          for (const J of oe)
            J in j && (Q[J] = j[J]);
          if (typeof Q.volume != "number" || Q.volume < 0 || Q.volume > 100)
            throw new Error("Invalid volume");
          if (typeof Q.playMode != "string" || !["list", "random", "single"].includes(Q.playMode))
            throw new Error("Invalid playMode");
          if (Q.providers && !Array.isArray(Q.providers))
            throw new Error("Invalid providers");
          if (Q.customCueRules && !Array.isArray(Q.customCueRules))
            throw new Error("Invalid customCueRules");
          Object.assign(t.settings, Q), t.save(), toastr.success(D("Data imported"));
        } catch (j) {
          console.error("Import failed", j), toastr.error(D("Import failed") + ": " + (j instanceof Error ? j.message : D("Invalid JSON")));
        }
      }, N.click();
    };
    return (N, E) => (k(), U("div", mf, [
      p("div", vf, [
        (k(), U(te, null, Xe(n, (C) => p("div", {
          key: C.id,
          class: be(["stmp-tab", { active: s.value === C.id }]),
          onClick: (T) => s.value = C.id
        }, [
          p("i", {
            class: be(C.icon)
          }, null, 2),
          p("span", null, Z(C.label), 1)
        ], 10, yf)), 64))
      ]),
      p("div", bf, [
        lt(p("div", _f, [
          p("div", xf, [
            p("label", wf, Z(w(D)("Widget Mode")), 1),
            p("div", Sf, [
              (k(), U(te, null, Xe(r, (C) => p("div", {
                key: C.value,
                class: be(["menu_button menu_button_icon stmp-mode-btn", { toggled: w(t).settings.widgetMode === C.value }]),
                onClick: (T) => w(t).setWidgetMode(C.value)
              }, [
                p("i", {
                  class: be(C.icon)
                }, null, 2),
                p("span", null, Z(C.label), 1)
              ], 10, Cf)), 64))
            ])
          ]),
          w(t).settings.widgetMode === "dock" ? (k(), U("div", If, [
            p("label", Ef, Z(w(D)("Dock Alignment")), 1),
            p("div", Tf, [
              (k(), U(te, null, Xe(o, (C) => p("div", {
                key: C.value,
                class: be(["menu_button menu_button_icon stmp-mode-btn", { toggled: w(t).settings.dockAlign === C.value }]),
                onClick: (T) => w(t).setDockAlign(C.value)
              }, [
                p("i", {
                  class: be(C.icon)
                }, null, 2),
                p("span", null, Z(C.label), 1)
              ], 10, Af)), 64))
            ])
          ])) : Pe("", !0),
          p("div", Mf, [
            p("label", Pf, Z(w(D)("Default Volume")) + ": " + Z(w(t).settings.volume), 1),
            p("input", {
              type: "range",
              min: "0",
              max: "100",
              value: w(t).settings.volume,
              onInput: l
            }, null, 40, Rf)
          ]),
          p("div", kf, [
            p("label", $f, Z(w(D)("Default Play Mode")), 1),
            p("select", {
              id: "stmp-playmode",
              class: "text_pole",
              value: w(t).settings.playMode,
              onChange: a
            }, [
              (k(), U(te, null, Xe(i, (C) => p("option", {
                key: C.value,
                value: C.value
              }, Z(C.label), 9, Of)), 64))
            ], 40, Lf)
          ]),
          ee(Zi, {
            "model-value": w(t).settings.autoPlayOnNewCue,
            label: w(D)("Auto-play on new cue"),
            "onUpdate:modelValue": E[0] || (E[0] = (C) => {
              w(t).settings.autoPlayOnNewCue = C, w(t).save();
            })
          }, null, 8, ["model-value", "label"])
        ], 512), [
          [Rs, s.value === "playback"]
        ]),
        lt(p("div", Df, [
          (k(!0), U(te, null, Xe(w(t).settings.providers, (C) => (k(), U("div", {
            key: C.id,
            class: "stmp-provider-card"
          }, [
            ee(Zi, {
              "model-value": C.enabled,
              label: f[C.id] || C.id,
              "onUpdate:modelValue": () => c(C.id)
            }, null, 8, ["model-value", "label", "onUpdate:modelValue"]),
            C.id === "netease" && C.enabled ? (k(), U("div", Nf, [
              lt(p("input", {
                class: "text_pole",
                "onUpdate:modelValue": (T) => C.config.baseURL = T,
                placeholder: w(D)("API baseURL"),
                onChange: E[1] || (E[1] = (T) => w(t).save())
              }, null, 40, Ff), [
                [ns, C.config.baseURL]
              ])
            ])) : Pe("", !0),
            C.id === "custom" && C.enabled ? (k(), U("div", Uf, [
              lt(p("input", {
                class: "text_pole",
                "onUpdate:modelValue": (T) => C.config.searchURL = T,
                placeholder: w(D)("Search URL"),
                onChange: E[2] || (E[2] = (T) => w(t).save())
              }, null, 40, Vf), [
                [ns, C.config.searchURL]
              ]),
              lt(p("input", {
                class: "text_pole",
                "onUpdate:modelValue": (T) => C.config.resolveURL = T,
                placeholder: w(D)("Resolve URL"),
                onChange: E[3] || (E[3] = (T) => w(t).save())
              }, null, 40, Hf), [
                [ns, C.config.resolveURL]
              ])
            ])) : Pe("", !0)
          ]))), 128))
        ], 512), [
          [Rs, s.value === "providers"]
        ]),
        lt(p("div", jf, [
          p("div", Bf, [
            p("label", Kf, Z(w(D)("Custom Cue Rules (Regex)")), 1),
            p("div", Wf, [
              (k(!0), U(te, null, Xe(w(t).settings.customCueRules, (C, T) => (k(), U("div", {
                key: T,
                class: "stmp-rule"
              }, [
                p("code", null, Z(C), 1),
                p("div", {
                  class: "menu_button menu_button_icon stmp-rule-del",
                  onClick: (j) => m(T)
                }, [...E[5] || (E[5] = [
                  p("i", { class: "fa-solid fa-xmark" }, null, -1)
                ])], 8, zf)
              ]))), 128))
            ]),
            p("div", Jf, [
              lt(p("input", {
                "onUpdate:modelValue": E[4] || (E[4] = (C) => h.value = C),
                class: "text_pole",
                placeholder: w(D)("Add regex rule..."),
                onKeydown: vo(v, ["enter"])
              }, null, 40, qf), [
                [ns, h.value]
              ]),
              p("div", {
                class: "menu_button menu_button_icon stmp-rule-add-btn",
                onClick: v
              }, [...E[6] || (E[6] = [
                p("i", { class: "fa-solid fa-plus" }, null, -1)
              ])])
            ])
          ])
        ], 512), [
          [Rs, s.value === "cue"]
        ]),
        lt(p("div", Gf, [
          p("div", Yf, [
            p("div", {
              class: "menu_button menu_button_icon stmp-data-btn",
              onClick: P
            }, [
              E[7] || (E[7] = p("i", { class: "fa-solid fa-trash-can" }, null, -1)),
              p("span", null, Z(w(D)("Clear cache")), 1)
            ]),
            p("div", {
              class: "menu_button menu_button_icon stmp-data-btn",
              onClick: A
            }, [
              E[8] || (E[8] = p("i", { class: "fa-solid fa-file-export" }, null, -1)),
              p("span", null, Z(w(D)("Export data")), 1)
            ]),
            p("div", {
              class: "menu_button menu_button_icon stmp-data-btn",
              onClick: H
            }, [
              E[9] || (E[9] = p("i", { class: "fa-solid fa-file-import" }, null, -1)),
              p("span", null, Z(w(D)("Import data")), 1)
            ])
          ])
        ], 512), [
          [Rs, s.value === "data"]
        ])
      ])
    ]));
  }
}), Zf = /* @__PURE__ */ St(Xf, [["__scopeId", "data-v-b7fca2b6"]]);
class Qf {
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
      const a = (...f) => {
        const c = l(f[0]);
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
function ed() {
  return new Qf();
}
const td = [
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
  for (const i of td)
    for (const r of Qi(i, e)) n(r);
  for (const i of t)
    try {
      const r = new RegExp(i, "g");
      for (const o of Qi(r, e)) n(o);
    } catch {
    }
  return [...s.values()].sort((i, r) => i.index - r.index).map((i) => i.cue);
}
class sd {
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
      const f = a.at(-1);
      r.push({ messageId: o, cues: [f] });
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
let Kt = null, ct = null, hs = null, ps = null, Wt = null, qs = null;
const nd = `
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
function id() {
  const e = $("#extensions_settings2");
  if (!e || !e.length || (e.append(nd), ps = e.children(".inline-drawer").last()[0] ?? null, !ps)) return;
  const t = ps.querySelector("#stmp-settings-mount");
  t && qs && (Wt = yo(Zf), Wt.use(qs), Wt.mount(t));
}
function rd() {
  Wt && (Wt.unmount(), Wt = null), ps?.remove(), ps = null;
}
function od(e, t, s) {
  ct = ed(), ct.on("chat-changed", () => {
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
  }), ct.on("message-generated", (n) => {
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
  }), ct.on("message-updated", (n) => {
    n.messageId !== void 0 && t.handleMessageUpdate(n.messageId);
  }), ct.on("message-deleted", (n) => {
    n.messageId !== void 0 && t.handleMessageDelete(n.messageId);
  }), ct.on("message-swiped", (n) => {
    n.messageId !== void 0 && t.handleMessageUpdate(n.messageId);
  }), ct.start();
}
function ld(e, t, s) {
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
async function ud() {
  try {
    const e = document.createElement("div");
    e.id = "st-music-player-root", document.documentElement.appendChild(e);
    const t = oc();
    qs = t, Kt = yo(uf), Kt.use(t), Kt.mount(e);
    const s = Ie(), n = mc();
    s.init(n);
    const i = $t();
    i.init(), i.setVolume(s.settings.volume);
    const r = new sd((a) => SillyTavern.getContext().chat[a]?.mes), o = Jt();
    o.init(r), id();
    const l = SillyTavern.getContext();
    hs = () => {
      od(r, o, s), ld(r, o, s);
    }, l.eventSource.on(l.event_types.APP_READY, hs), console.log("[ST-Music-Player] 播放器加载完成");
  } catch (e) {
    console.error("[ST-Music-Player] init failed:", e);
  }
}
function Co() {
  if (hs) {
    try {
      const t = SillyTavern.getContext();
      t.eventSource.removeListener(t.event_types.APP_READY, hs);
    } catch {
    }
    hs = null;
  }
  if (ct?.stop(), ct = null, Kt) {
    try {
      $t().destroy();
    } catch {
    }
    Kt.unmount(), Kt = null;
  }
  const e = document.getElementById("st-music-player-root");
  e && e.remove(), rd(), qs = null;
}
function fd() {
  Co();
}
async function ad() {
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
async function dd() {
  await ad(), Co();
}
export {
  ad as clean,
  dd as delete,
  Co as destroy,
  fd as disable,
  ud as init
};
