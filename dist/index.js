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
const de = {}, Vt = [], tt = () => {
}, tr = () => !1, Gs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Xs = (e) => e.startsWith("onUpdate:"), xe = Object.assign, Bn = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, To = Object.prototype.hasOwnProperty, le = (e, t) => To.call(e, t), J = Array.isArray, jt = (e) => ws(e) === "[object Map]", sr = (e) => ws(e) === "[object Set]", ci = (e) => ws(e) === "[object Date]", Z = (e) => typeof e == "function", me = (e) => typeof e == "string", Ve = (e) => typeof e == "symbol", ae = (e) => e !== null && typeof e == "object", nr = (e) => (ae(e) || Z(e)) && Z(e.then) && Z(e.catch), ir = Object.prototype.toString, ws = (e) => ir.call(e), ko = (e) => ws(e).slice(8, -1), rr = (e) => ws(e) === "[object Object]", Zs = (e) => me(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ns = /* @__PURE__ */ jn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Qs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Ao = /-\w/g, Be = Qs(
  (e) => e.replace(Ao, (t) => t.slice(1).toUpperCase())
), Mo = /\B([A-Z])/g, xt = Qs(
  (e) => e.replace(Mo, "-$1").toLowerCase()
), or = Qs((e) => e.charAt(0).toUpperCase() + e.slice(1)), gn = Qs(
  (e) => e ? `on${or(e)}` : ""
), et = (e, t) => !Object.is(e, t), Ls = (e, ...t) => {
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
  const t = me(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ui;
const en = () => ui || (ui = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Rt(e) {
  if (J(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], i = me(n) ? Oo(n) : Rt(n);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (me(e) || ae(e))
    return e;
}
const Po = /;(?![^(]*\))/g, $o = /:([^]+)/, Lo = /\/\*[^]*?\*\//g;
function Oo(e) {
  const t = {};
  return e.replace(Lo, "").split(Po).forEach((s) => {
    if (s) {
      const n = s.split($o);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function ye(e) {
  let t = "";
  if (me(e))
    t = e;
  else if (J(e))
    for (let s = 0; s < e.length; s++) {
      const n = ye(e[s]);
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
  if (s = Ve(e), n = Ve(t), s || n)
    return e === t;
  if (s = J(e), n = J(t), s || n)
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
const cr = (e) => !!(e && e.__v_isRef === !0), ee = (e) => me(e) ? e : e == null ? "" : J(e) || ae(e) && (e.toString === ir || !Z(e.toString)) ? cr(e) ? ee(e.value) : JSON.stringify(e, ur, 2) : String(e), ur = (e, t) => cr(t) ? ur(e, t.value) : jt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], r) => (s[mn(n, r) + " =>"] = i, s),
    {}
  )
} : sr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => mn(s))
} : Ve(t) ? mn(t) : ae(t) && !J(t) && !rr(t) ? String(t) : t, mn = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ve(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
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
    const t = he, s = Ke;
    he = this, Ke = !0;
    try {
      return this.fn();
    } finally {
      yr(this), he = t, Ke = s, this.flags &= -3;
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
function zn() {
  gr++;
}
function Jn() {
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
    n.version === -1 ? (n === s && (s = i), qn(n), Ho(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
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
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === gs) || (e.globalVersion = gs, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !An(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = he, n = Ke;
  he = e, Ke = !0;
  try {
    vr(e);
    const i = e.fn(e._value);
    (t.version === 0 || et(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    he = s, Ke = n, yr(e), e.flags &= -3;
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
function Ho(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let Ke = !0;
const _r = [];
function st() {
  _r.push(Ke), Ke = !1;
}
function nt() {
  const e = _r.pop();
  Ke = e === void 0 ? !0 : e;
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
class Vo {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Yn {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!he || !Ke || he === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== he)
      s = this.activeLink = new Vo(he, this), he.deps ? (s.prevDep = he.depsTail, he.depsTail.nextDep = s, he.depsTail = s) : he.deps = he.depsTail = s, xr(s);
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
const Fs = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ Symbol(
  ""
), Mn = /* @__PURE__ */ Symbol(
  ""
), ms = /* @__PURE__ */ Symbol(
  ""
);
function Se(e, t, s) {
  if (Ke && he) {
    let n = Fs.get(e);
    n || Fs.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(s);
    i || (n.set(s, i = new Yn()), i.map = n, i.key = s), i.track();
  }
}
function ut(e, t, s, n, i, r) {
  const o = Fs.get(e);
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
    const a = J(e), f = a && Zs(s);
    if (a && s === "length") {
      const u = Number(n);
      o.forEach((h, v) => {
        (v === "length" || v === ms || !Ve(v) && v >= u) && l(h);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), f && l(o.get(ms)), t) {
        case "add":
          a ? f && l(o.get("length")) : (l(o.get(Pt)), jt(e) && l(o.get(Mn)));
          break;
        case "delete":
          a || (l(o.get(Pt)), jt(e) && l(o.get(Mn)));
          break;
        case "set":
          jt(e) && l(o.get(Pt));
          break;
      }
  }
  Jn();
}
function jo(e, t) {
  const s = Fs.get(e);
  return s && s.get(t);
}
function Ot(e) {
  const t = /* @__PURE__ */ ie(e);
  return t === e ? t : (Se(t, "iterate", ms), /* @__PURE__ */ De(e) ? t : t.map(We));
}
function tn(e) {
  return Se(e = /* @__PURE__ */ ie(e), "iterate", ms), e;
}
function Ze(e, t) {
  return /* @__PURE__ */ ht(e) ? zt(/* @__PURE__ */ dt(e) ? We(t) : t) : We(t);
}
const Bo = {
  __proto__: null,
  [Symbol.iterator]() {
    return yn(this, Symbol.iterator, (e) => Ze(this, e));
  },
  concat(...e) {
    return Ot(this).concat(
      ...e.map((t) => J(t) ? Ot(t) : t)
    );
  },
  entries() {
    return yn(this, "entries", (e) => (e[1] = Ze(this, e[1]), e));
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
      (s) => s.map((n) => Ze(this, n)),
      arguments
    );
  },
  find(e, t) {
    return rt(
      this,
      "find",
      e,
      t,
      (s) => Ze(this, s),
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
      (s) => Ze(this, s),
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
    return Ot(this).join(e);
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
    return Ot(this).toReversed();
  },
  toSorted(e) {
    return Ot(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ot(this).toSpliced(...e);
  },
  unshift(...e) {
    return Xt(this, "unshift", e);
  },
  values() {
    return yn(this, "values", (e) => Ze(this, e));
  }
};
function yn(e, t, s) {
  const n = tn(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ De(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = s(r.value)), r;
  }), i;
}
const Ko = Array.prototype;
function rt(e, t, s, n, i, r) {
  const o = tn(e), l = o !== e && !/* @__PURE__ */ De(e), a = o[t];
  if (a !== Ko[t]) {
    const h = a.apply(e, r);
    return l ? We(h) : h;
  }
  let f = s;
  o !== e && (l ? f = function(h, v) {
    return s.call(this, Ze(e, h), v, e);
  } : s.length > 2 && (f = function(h, v) {
    return s.call(this, h, v, e);
  }));
  const u = a.call(o, f, n);
  return l && i ? i(u) : u;
}
function di(e, t, s, n) {
  const i = tn(e), r = i !== e && !/* @__PURE__ */ De(e);
  let o = s, l = !1;
  i !== e && (r ? (l = n.length === 0, o = function(f, u, h) {
    return l && (l = !1, f = Ze(e, f)), s.call(this, f, Ze(e, u), h, e);
  }) : s.length > 3 && (o = function(f, u, h) {
    return s.call(this, f, u, h, e);
  }));
  const a = i[t](o, ...n);
  return l ? Ze(e, a) : a;
}
function bn(e, t, s) {
  const n = /* @__PURE__ */ ie(e);
  Se(n, "iterate", ms);
  const i = n[t](...s);
  return (i === -1 || i === !1) && /* @__PURE__ */ nn(s[0]) ? (s[0] = /* @__PURE__ */ ie(s[0]), n[t](...s)) : i;
}
function Xt(e, t, s = []) {
  st(), zn();
  const n = (/* @__PURE__ */ ie(e))[t].apply(e, s);
  return Jn(), nt(), n;
}
const Wo = /* @__PURE__ */ jn("__proto__,__v_isRef,__isVue"), wr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ve)
);
function zo(e) {
  Ve(e) || (e = String(e));
  const t = /* @__PURE__ */ ie(this);
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
    const o = J(t);
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
      /* @__PURE__ */ ve(t) ? t : n
    );
    if ((Ve(s) ? wr.has(s) : Wo(s)) || (i || Se(t, "get", s), r))
      return l;
    if (/* @__PURE__ */ ve(l)) {
      const a = o && Zs(s) ? l : l.value;
      return i && ae(a) ? /* @__PURE__ */ Pn(a) : a;
    }
    return ae(l) ? i ? /* @__PURE__ */ Pn(l) : /* @__PURE__ */ sn(l) : l;
  }
}
class Cr extends Sr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, i) {
    let r = t[s];
    const o = J(t) && Zs(s);
    if (!this._isShallow) {
      const f = /* @__PURE__ */ ht(r);
      if (!/* @__PURE__ */ De(n) && !/* @__PURE__ */ ht(n) && (r = /* @__PURE__ */ ie(r), n = /* @__PURE__ */ ie(n)), !o && /* @__PURE__ */ ve(r) && !/* @__PURE__ */ ve(n))
        return f || (r.value = n), !0;
    }
    const l = o ? Number(s) < t.length : le(t, s), a = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ ve(t) ? t : i
    );
    return t === /* @__PURE__ */ ie(i) && a && (l ? et(n, r) && ut(t, "set", s, n) : ut(t, "add", s, n)), a;
  }
  deleteProperty(t, s) {
    const n = le(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && ut(t, "delete", s, void 0), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Ve(s) || !wr.has(s)) && Se(t, "has", s), n;
  }
  ownKeys(t) {
    return Se(
      t,
      "iterate",
      J(t) ? "length" : Pt
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
const qo = /* @__PURE__ */ new Cr(), Yo = /* @__PURE__ */ new Jo(), Go = /* @__PURE__ */ new Cr(!0);
const Rn = (e) => e, Ts = (e) => Reflect.getPrototypeOf(e);
function Xo(e, t, s) {
  return function(...n) {
    const i = this.__v_raw, r = /* @__PURE__ */ ie(i), o = jt(r), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, f = i[e](...n), u = s ? Rn : t ? zt : We;
    return !t && Se(
      r,
      "iterate",
      a ? Mn : Pt
    ), xe(
      // inheriting all iterator properties
      Object.create(f),
      {
        // iterator protocol
        next() {
          const { value: h, done: v } = f.next();
          return v ? { value: h, done: v } : {
            value: l ? [u(h[0]), u(h[1])] : u(h),
            done: v
          };
        }
      }
    );
  };
}
function ks(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Zo(e, t) {
  const s = {
    get(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ ie(r), l = /* @__PURE__ */ ie(i);
      e || (et(i, l) && Se(o, "get", i), Se(o, "get", l));
      const { has: a } = Ts(o), f = t ? Rn : e ? zt : We;
      if (a.call(o, i))
        return f(r.get(i));
      if (a.call(o, l))
        return f(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Se(/* @__PURE__ */ ie(i), "iterate", Pt), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ ie(r), l = /* @__PURE__ */ ie(i);
      return e || (et(i, l) && Se(o, "has", i), Se(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, a = /* @__PURE__ */ ie(l), f = t ? Rn : e ? zt : We;
      return !e && Se(a, "iterate", Pt), l.forEach((u, h) => i.call(r, f(u), f(h), o));
    }
  };
  return xe(
    s,
    e ? {
      add: ks("add"),
      set: ks("set"),
      delete: ks("delete"),
      clear: ks("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ ie(this), o = Ts(r), l = /* @__PURE__ */ ie(i), a = !t && !/* @__PURE__ */ De(i) && !/* @__PURE__ */ ht(i) ? l : i;
        return o.has.call(r, a) || et(i, a) && o.has.call(r, i) || et(l, a) && o.has.call(r, l) || (r.add(a), ut(r, "add", a, a)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ De(r) && !/* @__PURE__ */ ht(r) && (r = /* @__PURE__ */ ie(r));
        const o = /* @__PURE__ */ ie(this), { has: l, get: a } = Ts(o);
        let f = l.call(o, i);
        f || (i = /* @__PURE__ */ ie(i), f = l.call(o, i));
        const u = a.call(o, i);
        return o.set(i, r), f ? et(r, u) && ut(o, "set", i, r) : ut(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ ie(this), { has: o, get: l } = Ts(r);
        let a = o.call(r, i);
        a || (i = /* @__PURE__ */ ie(i), a = o.call(r, i)), l && l.call(r, i);
        const f = r.delete(i);
        return a && ut(r, "delete", i, void 0), f;
      },
      clear() {
        const i = /* @__PURE__ */ ie(this), r = i.size !== 0, o = i.clear();
        return r && ut(
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
function Gn(e, t) {
  const s = Zo(e, t);
  return (n, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    le(s, i) && i in n ? s : n,
    i,
    r
  );
}
const Qo = {
  get: /* @__PURE__ */ Gn(!1, !1)
}, el = {
  get: /* @__PURE__ */ Gn(!1, !0)
}, tl = {
  get: /* @__PURE__ */ Gn(!0, !1)
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
  return /* @__PURE__ */ ht(e) ? e : Xn(
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
    Go,
    el,
    Er
  );
}
// @__NO_SIDE_EFFECTS__
function Pn(e) {
  return Xn(
    e,
    !0,
    Yo,
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
  const o = nl(ko(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? n : s
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function dt(e) {
  return /* @__PURE__ */ ht(e) ? /* @__PURE__ */ dt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ht(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function De(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function nn(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ie(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ie(t) : e;
}
function Zn(e) {
  return !le(e, "__v_skip") && Object.isExtensible(e) && lr(e, "__v_skip", !0), e;
}
const We = (e) => ae(e) ? /* @__PURE__ */ sn(e) : e, zt = (e) => ae(e) ? /* @__PURE__ */ Pn(e) : e;
// @__NO_SIDE_EFFECTS__
function ve(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  return rl(e, !1);
}
function rl(e, t) {
  return /* @__PURE__ */ ve(e) ? e : new ol(e, t);
}
class ol {
  constructor(t, s) {
    this.dep = new Yn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ ie(t), this._value = s ? t : We(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ De(t) || /* @__PURE__ */ ht(t);
    t = n ? t : /* @__PURE__ */ ie(t), et(t, s) && (this._rawValue = t, this._value = n ? t : We(t), this.dep.trigger());
  }
}
function x(e) {
  return /* @__PURE__ */ ve(e) ? e.value : e;
}
const ll = {
  get: (e, t, s) => t === "__v_raw" ? e : x(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t];
    return /* @__PURE__ */ ve(i) && !/* @__PURE__ */ ve(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function kr(e) {
  return /* @__PURE__ */ dt(e) ? e : new Proxy(e, ll);
}
// @__NO_SIDE_EFFECTS__
function al(e) {
  const t = J(e) ? new Array(e.length) : {};
  for (const s in e)
    t[s] = ul(e, s);
  return t;
}
class cl {
  constructor(t, s, n) {
    this._object = t, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = Ve(s) ? s : String(s), this._raw = /* @__PURE__ */ ie(t);
    let i = !0, r = t;
    if (!J(t) || Ve(this._key) || !Zs(this._key))
      do
        i = !/* @__PURE__ */ nn(r) || /* @__PURE__ */ De(r);
      while (i && (r = r.__v_raw));
    this._shallow = i;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = x(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ ve(this._raw[this._key])) {
      const s = this._object[this._key];
      if (/* @__PURE__ */ ve(s)) {
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
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Yn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = gs - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
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
  return Z(e) ? n = e : (n = e.get, i = e.set), new fl(n, i, s);
}
const As = {}, Us = /* @__PURE__ */ new WeakMap();
let At;
function hl(e, t = !1, s = At) {
  if (s) {
    let n = Us.get(s);
    n || Us.set(s, n = []), n.push(e);
  }
}
function pl(e, t, s = de) {
  const { immediate: n, deep: i, once: r, scheduler: o, augmentJob: l, call: a } = s, f = (O) => i ? O : /* @__PURE__ */ De(O) || i === !1 || i === 0 ? ft(O, 1) : ft(O);
  let u, h, v, m, A = !1, E = !1;
  if (/* @__PURE__ */ ve(e) ? (h = () => e.value, A = /* @__PURE__ */ De(e)) : /* @__PURE__ */ dt(e) ? (h = () => f(e), A = !0) : J(e) ? (E = !0, A = e.some((O) => /* @__PURE__ */ dt(O) || /* @__PURE__ */ De(O)), h = () => e.map((O) => {
    if (/* @__PURE__ */ ve(O))
      return O.value;
    if (/* @__PURE__ */ dt(O))
      return f(O);
    if (Z(O))
      return a ? a(O, 2) : O();
  })) : Z(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (v) {
      st();
      try {
        v();
      } finally {
        nt();
      }
    }
    const O = At;
    At = u;
    try {
      return a ? a(e, 3, [m]) : e(m);
    } finally {
      At = O;
    }
  } : h = tt, t && i) {
    const O = h, z = i === !0 ? 1 / 0 : i;
    h = () => ft(O(), z);
  }
  const H = hr(), R = () => {
    u.stop(), H && H.active && Bn(H.effects, u);
  };
  if (r && t) {
    const O = t;
    t = (...z) => {
      const X = O(...z);
      return R(), X;
    };
  }
  let S = E ? new Array(e.length).fill(As) : As;
  const V = (O) => {
    if (!(!(u.flags & 1) || !u.dirty && !O))
      if (t) {
        const z = u.run();
        if (O || i || A || (E ? z.some((X, K) => et(X, S[K])) : et(z, S))) {
          v && v();
          const X = At;
          At = u;
          try {
            const K = [
              z,
              // pass undefined as the old value when it's changed for the first time
              S === As ? void 0 : E && S[0] === As ? [] : S,
              m
            ];
            S = z, a ? a(t, 3, K) : (
              // @ts-expect-error
              t(...K)
            );
          } finally {
            At = X;
          }
        }
      } else
        u.run();
  };
  return l && l(V), u = new pr(h), u.scheduler = o ? () => o(V, !1) : V, m = (O) => hl(O, !1, u), v = u.onStop = () => {
    const O = Us.get(u);
    if (O) {
      if (a)
        a(O, 4);
      else
        for (const z of O) z();
      Us.delete(u);
    }
  }, t ? n ? V(!0) : S = u.run() : o ? o(V.bind(null, !0), !0) : u.run(), R.pause = u.pause.bind(u), R.resume = u.resume.bind(u), R.stop = R, R;
}
function ft(e, t = 1 / 0, s) {
  if (t <= 0 || !ae(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ ve(e))
    ft(e.value, t, s);
  else if (J(e))
    for (let n = 0; n < e.length; n++)
      ft(e[n], t, s);
  else if (sr(e) || jt(e))
    e.forEach((n) => {
      ft(n, t, s);
    });
  else if (rr(e)) {
    for (const n in e)
      ft(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && ft(e[n], t, s);
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
function je(e, t, s, n) {
  if (Z(e)) {
    const i = Ss(e, t, s, n);
    return i && nr(i) && i.catch((r) => {
      rn(r, t, s);
    }), i;
  }
  if (J(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(je(e[r], t, s, n));
    return i;
  }
}
function rn(e, t, s, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || de;
  if (t) {
    let l = t.parent;
    const a = t.proxy, f = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let h = 0; h < u.length; h++)
          if (u[h](e, a, f) === !1)
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
let Xe = -1;
const Bt = [];
let yt = null, Ft = 0;
const Ar = /* @__PURE__ */ Promise.resolve();
let Hs = null;
function Pe(e) {
  const t = Hs || Ar;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ml(e) {
  let t = Xe + 1, s = Ee.length;
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
    !(e.flags & 2) && t >= vs(s) ? Ee.push(e) : Ee.splice(ml(t), 0, e), e.flags |= 1, Mr();
  }
}
function Mr() {
  Hs || (Hs = Ar.then(Pr));
}
function vl(e) {
  J(e) ? Bt.push(...e) : yt && e.id === -1 ? yt.splice(Ft + 1, 0, e) : e.flags & 1 || (Bt.push(e), e.flags |= 1), Mr();
}
function hi(e, t, s = Xe + 1) {
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
    for (yt = t, Ft = 0; Ft < yt.length; Ft++) {
      const s = yt[Ft];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    yt = null, Ft = 0;
  }
}
const vs = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Pr(e) {
  try {
    for (Xe = 0; Xe < Ee.length; Xe++) {
      const t = Ee[Xe];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ss(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Xe < Ee.length; Xe++) {
      const t = Ee[Xe];
      t && (t.flags &= -2);
    }
    Xe = -1, Ee.length = 0, Rr(), Hs = null, (Ee.length || Bt.length) && Pr();
  }
}
let He = null, $r = null;
function Vs(e) {
  const t = He;
  return He = e, $r = e && e.type.__scopeId || null, t;
}
function Lr(e, t = He, s) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Ks(-1);
    const r = Vs(t);
    let o;
    try {
      o = e(...i);
    } finally {
      Vs(r), n._d && Ks(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function mt(e, t) {
  if (He === null)
    return e;
  const s = fn(He), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, a = de] = t[i];
    r && (Z(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && ft(o), n.push({
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
    a && (st(), je(a, s, 8, [
      e.el,
      l,
      e,
      t
    ]), nt());
  }
}
function yl(e, t) {
  if (ke) {
    let s = ke.provides;
    const n = ke.parent && ke.parent.provides;
    n === s && (s = ke.provides = Object.create(n)), s[e] = t;
  }
}
function os(e, t, s = !1) {
  const n = ni();
  if (n || $t) {
    let i = $t ? $t._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return s && Z(t) ? t.call(n && n.proxy) : t;
  }
}
function bl() {
  return !!(ni() || $t);
}
const _l = /* @__PURE__ */ Symbol.for("v-scx"), xl = () => os(_l);
function Le(e, t, s) {
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
      return m.stop = tt, m.resume = tt, m.pause = tt, m;
    }
  }
  const u = ke;
  l.call = (m, A, E) => je(m, u, A, E);
  let h = !1;
  r === "post" ? l.scheduler = (m) => {
    Ae(m, u && u.suspense);
  } : r !== "sync" && (h = !0, l.scheduler = (m, A) => {
    A ? m() : Qn(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), h && (m.flags |= 2, u && (m.id = u.uid, m.i = u));
  };
  const v = pl(e, t, l);
  return _s && (f ? f.push(v) : a && v()), v;
}
function wl(e, t, s) {
  const n = this.proxy, i = me(e) ? e.includes(".") ? Dr(n, e) : () => n[e] : e.bind(n, n);
  let r;
  Z(t) ? r = t : (r = t.handler, s = t);
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
const Sl = /* @__PURE__ */ Symbol("_vte"), Nr = (e) => e.__isTeleport, Fe = /* @__PURE__ */ Symbol("_leaveCb"), Zt = /* @__PURE__ */ Symbol("_enterCb");
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
const Ne = [Function, Array], Fr = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ne,
  onEnter: Ne,
  onAfterEnter: Ne,
  onEnterCancelled: Ne,
  // leave
  onBeforeLeave: Ne,
  onLeave: Ne,
  onAfterLeave: Ne,
  onLeaveCancelled: Ne,
  // appear
  onBeforeAppear: Ne,
  onAppear: Ne,
  onAfterAppear: Ne,
  onAppearCancelled: Ne
}, Ur = (e) => {
  const t = e.subTree;
  return t.component ? Ur(t.component) : t;
}, Il = {
  name: "BaseTransition",
  props: Fr,
  setup(e, { slots: t }) {
    const s = ni(), n = Cl();
    return () => {
      const i = t.default && jr(t.default(), !0), r = i && i.length ? Hr(i) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        s.subTree ? Me() : void 0
      );
      if (!r)
        return;
      const o = /* @__PURE__ */ ie(e), { mode: l } = o;
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
      let u = s.subTree && pi(s.subTree);
      if (u && u.type !== Te && !Mt(u, a) && Ur(s).type !== Te) {
        let h = $n(
          u,
          o,
          n,
          s
        );
        if (ys(u, h), l === "out-in" && a.type !== Te)
          return n.isLeaving = !0, h.afterLeave = () => {
            n.isLeaving = !1, s.job.flags & 8 || s.update(), delete h.afterLeave, u = void 0;
          }, _n(r);
        l === "in-out" && a.type !== Te ? h.delayLeave = (v, m, A) => {
          const E = Vr(
            n,
            u
          );
          E[String(u.key)] = u, v[Fe] = () => {
            m(), v[Fe] = void 0, delete f.delayedLeave, u = void 0;
          }, f.delayedLeave = () => {
            A(), delete f.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return r;
    };
  }
};
function Hr(e) {
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
function Vr(e, t) {
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
    onAfterEnter: u,
    onEnterCancelled: h,
    onBeforeLeave: v,
    onLeave: m,
    onAfterLeave: A,
    onLeaveCancelled: E,
    onBeforeAppear: H,
    onAppear: R,
    onAfterAppear: S,
    onAppearCancelled: V
  } = t, O = String(e.key), z = Vr(s, e), X = (I, B) => {
    I && je(
      I,
      n,
      9,
      B
    );
  }, K = (I, B) => {
    const N = B[1];
    X(I, B), J(I) ? I.every((y) => y.length <= 1) && N() : I.length <= 1 && N();
  }, j = {
    mode: o,
    persisted: l,
    beforeEnter(I) {
      let B = a;
      if (!s.isMounted)
        if (r)
          B = H || a;
        else
          return;
      I[Fe] && I[Fe](
        !0
        /* cancelled */
      );
      const N = z[O];
      N && Mt(e, N) && N.el[Fe] && N.el[Fe](), X(B, [I]);
    },
    enter(I) {
      if (z[O] === e) return;
      let B = f, N = u, y = h;
      if (!s.isMounted)
        if (r)
          B = R || f, N = S || u, y = V || h;
        else
          return;
      let D = !1;
      I[Zt] = (re) => {
        D || (D = !0, re ? X(y, [I]) : X(N, [I]), j.delayedLeave && j.delayedLeave(), I[Zt] = void 0);
      };
      const Y = I[Zt].bind(null, !1);
      B ? K(B, [I, Y]) : Y();
    },
    leave(I, B) {
      const N = String(e.key);
      if (I[Zt] && I[Zt](
        !0
        /* cancelled */
      ), s.isUnmounting)
        return B();
      X(v, [I]);
      let y = !1;
      I[Fe] = (Y) => {
        y || (y = !0, B(), Y ? X(E, [I]) : X(A, [I]), I[Fe] = void 0, z[N] === e && delete z[N]);
      };
      const D = I[Fe].bind(null, !1);
      z[N] = e, m ? K(m, [I, D]) : D();
    },
    clone(I) {
      const B = $n(
        I,
        t,
        s,
        n,
        i
      );
      return i && i(B), B;
    }
  };
  return j;
}
function _n(e) {
  if (on(e))
    return e = _t(e), e.children = null, e;
}
function pi(e) {
  if (!on(e))
    return Nr(e.type) && e.children ? Hr(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: s } = e;
  if (s) {
    if (t & 16)
      return s[0];
    if (t & 32 && Z(s.default))
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
    o.type === se ? (o.patchFlag & 128 && i++, n = n.concat(
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
  return Z(e) ? (
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
const js = /* @__PURE__ */ new WeakMap();
function ls(e, t, s, n, i = !1) {
  if (J(e)) {
    e.forEach(
      (E, H) => ls(
        E,
        t && (J(t) ? t[H] : t),
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
  const r = n.shapeFlag & 4 ? fn(n.component) : n.el, o = i ? null : r, { i: l, r: a } = e, f = t && t.r, u = l.refs === de ? l.refs = {} : l.refs, h = l.setupState, v = /* @__PURE__ */ ie(h), m = h === de ? tr : (E) => gi(u, E) ? !1 : le(v, E), A = (E, H) => !(H && gi(u, H));
  if (f != null && f !== a) {
    if (mi(t), me(f))
      u[f] = null, m(f) && (h[f] = null);
    else if (/* @__PURE__ */ ve(f)) {
      const E = t;
      A(f, E.k) && (f.value = null), E.k && (u[E.k] = null);
    }
  }
  if (Z(a)) {
    st();
    try {
      Ss(a, l, 12, [o, u]);
    } finally {
      nt();
    }
  } else {
    const E = me(a), H = /* @__PURE__ */ ve(a);
    if (E || H) {
      const R = () => {
        if (e.f) {
          const S = E ? m(a) ? h[a] : u[a] : A() || !e.k ? a.value : u[e.k];
          if (i)
            J(S) && Bn(S, r);
          else if (J(S))
            S.includes(r) || S.push(r);
          else if (E)
            u[a] = [r], m(a) && (h[a] = u[a]);
          else {
            const V = [r];
            A(a, e.k) && (a.value = V), e.k && (u[e.k] = V);
          }
        } else E ? (u[a] = o, m(a) && (h[a] = o)) : H && (A(a, e.k) && (a.value = o), e.k && (u[e.k] = o));
      };
      if (o) {
        const S = () => {
          R(), js.delete(e);
        };
        S.id = -1, js.set(e, S), Ae(S, s);
      } else
        mi(e), R();
    }
  }
}
function mi(e) {
  const t = js.get(e);
  t && (t.flags |= 8, js.delete(e));
}
en().requestIdleCallback;
en().cancelIdleCallback;
const as = (e) => !!e.type.__asyncLoader, on = (e) => e.type.__isKeepAlive;
function Tl(e, t) {
  Kr(e, "a", t);
}
function kl(e, t) {
  Kr(e, "da", t);
}
function Kr(e, t, s = ke) {
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
      on(i.parent.vnode) && Al(n, t, s, i), i = i.parent;
  }
}
function Al(e, t, s, n) {
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
function ln(e, t, s = ke, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []), r = t.__weh || (t.__weh = (...o) => {
      st();
      const l = Cs(s), a = je(t, s, e, o);
      return l(), nt(), a;
    });
    return n ? i.unshift(r) : i.push(r), r;
  }
}
const pt = (e) => (t, s = ke) => {
  (!_s || e === "sp") && ln(e, (...n) => t(...n), s);
}, Ml = pt("bm"), an = pt("m"), Rl = pt(
  "bu"
), Pl = pt("u"), ei = pt(
  "bum"
), Wr = pt("um"), $l = pt(
  "sp"
), Ll = pt("rtg"), Ol = pt("rtc");
function Dl(e, t = ke) {
  ln("ec", e, t);
}
const Nl = /* @__PURE__ */ Symbol.for("v-ndc");
function Ue(e, t, s, n) {
  let i;
  const r = s, o = J(e);
  if (o || me(e)) {
    const l = o && /* @__PURE__ */ dt(e);
    let a = !1, f = !1;
    l && (a = !/* @__PURE__ */ De(e), f = /* @__PURE__ */ ht(e), e = tn(e)), i = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      i[u] = t(
        a ? f ? zt(We(e[u])) : We(e[u]) : e[u],
        u,
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
        const u = l[a];
        i[a] = t(e[u], u, a, r);
      }
    }
  else
    i = [];
  return i;
}
const Ln = (e) => e ? fo(e) ? fn(e) : Ln(e.parent) : null, cs = (
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
    $nextTick: (e) => e.n || (e.n = Pe.bind(e.proxy)),
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
    const f = cs[t];
    let u, h;
    if (f)
      return t === "$attrs" && Se(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
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
    return !!(s[l] || e !== de && l[0] !== "$" && le(e, l) || xn(t, l) || le(r, l) || le(n, l) || le(cs, l) || le(i.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : le(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function vi(e) {
  return J(e) ? e.reduce(
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
    created: u,
    beforeMount: h,
    mounted: v,
    beforeUpdate: m,
    updated: A,
    activated: E,
    deactivated: H,
    beforeDestroy: R,
    beforeUnmount: S,
    destroyed: V,
    unmounted: O,
    render: z,
    renderTracked: X,
    renderTriggered: K,
    errorCaptured: j,
    serverPrefetch: I,
    // public API
    expose: B,
    inheritAttrs: N,
    // assets
    components: y,
    directives: D,
    filters: Y
  } = t;
  if (f && Hl(f, n, null), o)
    for (const Q in o) {
      const ce = o[Q];
      Z(ce) && (n[Q] = ce.bind(s));
    }
  if (i) {
    const Q = i.call(s, s);
    ae(Q) && (e.data = /* @__PURE__ */ sn(Q));
  }
  if (On = !0, r)
    for (const Q in r) {
      const ce = r[Q], it = Z(ce) ? ce.bind(s, s) : Z(ce.get) ? ce.get.bind(s, s) : tt, Is = !Z(ce) && Z(ce.set) ? ce.set.bind(s) : tt, Ct = $e({
        get: it,
        set: Is
      });
      Object.defineProperty(n, Q, {
        enumerable: !0,
        configurable: !0,
        get: () => Ct.value,
        set: (ze) => Ct.value = ze
      });
    }
  if (l)
    for (const Q in l)
      zr(l[Q], n, s, Q);
  if (a) {
    const Q = Z(a) ? a.call(s) : a;
    Reflect.ownKeys(Q).forEach((ce) => {
      yl(ce, Q[ce]);
    });
  }
  u && yi(u, e, "c");
  function oe(Q, ce) {
    J(ce) ? ce.forEach((it) => Q(it.bind(s))) : ce && Q(ce.bind(s));
  }
  if (oe(Ml, h), oe(an, v), oe(Rl, m), oe(Pl, A), oe(Tl, E), oe(kl, H), oe(Dl, j), oe(Ol, X), oe(Ll, K), oe(ei, S), oe(Wr, O), oe($l, I), J(B))
    if (B.length) {
      const Q = e.exposed || (e.exposed = {});
      B.forEach((ce) => {
        Object.defineProperty(Q, ce, {
          get: () => s[ce],
          set: (it) => s[ce] = it,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  z && e.render === tt && (e.render = z), N != null && (e.inheritAttrs = N), y && (e.components = y), D && (e.directives = D), I && Br(e);
}
function Hl(e, t, s = tt) {
  J(e) && (e = Dn(e));
  for (const n in e) {
    const i = e[n];
    let r;
    ae(i) ? "default" in i ? r = os(
      i.from || n,
      i.default,
      !0
    ) : r = os(i.from || n) : r = os(i), /* @__PURE__ */ ve(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[n] = r;
  }
}
function yi(e, t, s) {
  je(
    J(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function zr(e, t, s, n) {
  let i = n.includes(".") ? Dr(s, n) : () => s[n];
  if (me(e)) {
    const r = t[e];
    Z(r) && Le(i, r);
  } else if (Z(e))
    Le(i, e.bind(s));
  else if (ae(e))
    if (J(e))
      e.forEach((r) => zr(r, t, s, n));
    else {
      const r = Z(e.handler) ? e.handler.bind(s) : t[e.handler];
      Z(r) && Le(i, r, e);
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
    (f) => Bs(a, f, o, !0)
  ), Bs(a, t, o)), ae(t) && r.set(t, a), a;
}
function Bs(e, t, s, n = !1) {
  const { mixins: i, extends: r } = t;
  r && Bs(e, r, s, !0), i && i.forEach(
    (o) => Bs(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const l = Vl[o] || s && s[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Vl = {
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
      Z(e) ? e.call(this, this) : e,
      Z(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function jl(e, t) {
  return ts(Dn(e), Dn(t));
}
function Dn(e) {
  if (J(e)) {
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
  return e ? J(e) && J(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : xe(
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
    Z(n) || (n = xe({}, n)), i != null && !ae(i) && (i = null);
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
      set config(u) {
      },
      use(u, ...h) {
        return o.has(u) || (u && Z(u.install) ? (o.add(u), u.install(f, ...h)) : Z(u) && (o.add(u), u(f, ...h))), f;
      },
      mixin(u) {
        return r.mixins.includes(u) || r.mixins.push(u), f;
      },
      component(u, h) {
        return h ? (r.components[u] = h, f) : r.components[u];
      },
      directive(u, h) {
        return h ? (r.directives[u] = h, f) : r.directives[u];
      },
      mount(u, h, v) {
        if (!a) {
          const m = f._ceVNode || te(n, i);
          return m.appContext = r, v === !0 ? v = "svg" : v === !1 && (v = void 0), e(m, u, v), a = !0, f._container = u, u.__vue_app__ = f, fn(m.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        a && (je(
          l,
          f._instance,
          16
        ), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(u, h) {
        return r.provides[u] = h, f;
      },
      runWithContext(u) {
        const h = $t;
        $t = f;
        try {
          return u();
        } finally {
          $t = h;
        }
      }
    };
    return f;
  };
}
let $t = null;
const zl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Be(t)}Modifiers`] || e[`${xt(t)}Modifiers`];
function Jl(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || de;
  let i = s;
  const r = t.startsWith("update:"), o = r && zl(n, t.slice(7));
  o && (o.trim && (i = s.map((u) => me(u) ? u.trim() : u)), o.number && (i = s.map(Kn)));
  let l, a = n[l = gn(t)] || // also try camelCase event handler (#2249)
  n[l = gn(Be(t))];
  !a && r && (a = n[l = gn(xt(t))]), a && je(
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
    e.emitted[l] = !0, je(
      f,
      e,
      6,
      i
    );
  }
}
const ql = /* @__PURE__ */ new WeakMap();
function Yr(e, t, s = !1) {
  const n = s ? ql : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {}, l = !1;
  if (!Z(e)) {
    const a = (f) => {
      const u = Yr(f, t, !0);
      u && (l = !0, xe(o, u));
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (ae(e) && n.set(e, null), null) : (J(r) ? r.forEach((a) => o[a] = null) : xe(o, r), ae(e) && n.set(e, o), o);
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
    renderCache: u,
    props: h,
    data: v,
    setupState: m,
    ctx: A,
    inheritAttrs: E
  } = e, H = Vs(e);
  let R, S;
  try {
    if (s.shapeFlag & 4) {
      const O = i || n, z = O;
      R = Qe(
        f.call(
          z,
          O,
          u,
          h,
          m,
          v,
          A
        )
      ), S = l;
    } else {
      const O = t;
      R = Qe(
        O.length > 1 ? O(
          h,
          { attrs: l, slots: o, emit: a }
        ) : O(
          h,
          null
        )
      ), S = t.props ? l : Yl(l);
    }
  } catch (O) {
    us.length = 0, rn(O, e, 1), R = te(Te);
  }
  let V = R;
  if (S && E !== !1) {
    const O = Object.keys(S), { shapeFlag: z } = V;
    O.length && z & 7 && (r && O.some(Xs) && (S = Gl(
      S,
      r
    )), V = _t(V, S, !1, !0));
  }
  return s.dirs && (V = _t(V, null, !1, !0), V.dirs = V.dirs ? V.dirs.concat(s.dirs) : s.dirs), s.transition && ys(V, s.transition), R = V, Vs(H), R;
}
const Yl = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Gs(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, Gl = (e, t) => {
  const s = {};
  for (const n in e)
    (!Xs(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
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
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const v = u[h];
        if (Gr(o, n, v) && !cn(f, v))
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
    if (Gr(t, e, r) && !cn(s, r))
      return !0;
  }
  return !1;
}
function Gr(e, t, s) {
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
  } = e, l = /* @__PURE__ */ ie(i), [a] = e.propsOptions;
  let f = !1;
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
        if (cn(e.emitsOptions, v))
          continue;
        const m = t[v];
        if (a)
          if (le(r, v))
            m !== r[v] && (r[v] = m, f = !0);
          else {
            const A = Be(v);
            i[A] = Nn(
              a,
              l,
              A,
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
    let u;
    for (const h in l)
      (!t || // for camelCase
      !le(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = xt(h)) === h || !le(t, u))) && (a ? s && // for camelCase
      (s[h] !== void 0 || // for kebab-case
      s[u] !== void 0) && (i[h] = Nn(
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
  f && ut(e.attrs, "set", "");
}
function eo(e, t, s, n) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (ns(a))
        continue;
      const f = t[a];
      let u;
      i && le(i, u = Be(a)) ? !r || !r.includes(u) ? s[u] = f : (l || (l = {}))[u] = f : cn(e.emitsOptions, a) || (!(a in n) || f !== n[a]) && (n[a] = f, o = !0);
    }
  if (r) {
    const a = /* @__PURE__ */ ie(s), f = l || de;
    for (let u = 0; u < r.length; u++) {
      const h = r[u];
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
      if (o.type !== Function && !o.skipFactory && Z(a)) {
        const { propsDefaults: f } = i;
        if (s in f)
          n = f[s];
        else {
          const u = Cs(i);
          n = f[s] = a.call(
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
  if (!Z(e)) {
    const u = (h) => {
      a = !0;
      const [v, m] = to(h, t, !0);
      xe(o, v), m && l.push(...m);
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !a)
    return ae(e) && n.set(e, Vt), Vt;
  if (J(r))
    for (let u = 0; u < r.length; u++) {
      const h = Be(r[u]);
      Si(h) && (o[h] = de);
    }
  else if (r)
    for (const u in r) {
      const h = Be(u);
      if (Si(h)) {
        const v = r[u], m = o[h] = J(v) || Z(v) ? { type: v } : xe({}, v), A = m.type;
        let E = !1, H = !0;
        if (J(A))
          for (let R = 0; R < A.length; ++R) {
            const S = A[R], V = Z(S) && S.name;
            if (V === "Boolean") {
              E = !0;
              break;
            } else V === "String" && (H = !1);
          }
        else
          E = Z(A) && A.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = E, m[
          1
          /* shouldCastTrue */
        ] = H, (E || le(m, "default")) && l.push(h);
      }
    }
  const f = [o, l];
  return ae(e) && n.set(e, f), f;
}
function Si(e) {
  return e[0] !== "$" && !ns(e);
}
const ti = (e) => e === "_" || e === "_ctx" || e === "$stable", si = (e) => J(e) ? e.map(Qe) : [Qe(e)], sa = (e, t, s) => {
  if (t._n)
    return t;
  const n = Lr((...i) => si(t(...i)), s);
  return n._c = !1, n;
}, so = (e, t, s) => {
  const n = e._ctx;
  for (const i in e) {
    if (ti(i)) continue;
    const r = e[i];
    if (Z(r))
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
}, Ae = ca;
function ra(e) {
  return oa(e);
}
function oa(e, t) {
  const s = en();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: r,
    createElement: o,
    createText: l,
    createComment: a,
    setText: f,
    setElementText: u,
    parentNode: h,
    nextSibling: v,
    setScopeId: m = tt,
    insertStaticContent: A
  } = e, E = (c, d, g, C = null, w = null, b = null, L = void 0, M = null, k = !!d.dynamicChildren) => {
    if (c === d)
      return;
    c && !Mt(c, d) && (C = Es(c), ze(c, w, b, !0), c = null), d.patchFlag === -2 && (k = !1, d.dynamicChildren = null);
    const { type: _, ref: q, shapeFlag: F } = d;
    switch (_) {
      case un:
        H(c, d, g, C);
        break;
      case Te:
        R(c, d, g, C);
        break;
      case Os:
        c == null && S(d, g, C, L);
        break;
      case se:
        y(
          c,
          d,
          g,
          C,
          w,
          b,
          L,
          M,
          k
        );
        break;
      default:
        F & 1 ? z(
          c,
          d,
          g,
          C,
          w,
          b,
          L,
          M,
          k
        ) : F & 6 ? D(
          c,
          d,
          g,
          C,
          w,
          b,
          L,
          M,
          k
        ) : (F & 64 || F & 128) && _.process(
          c,
          d,
          g,
          C,
          w,
          b,
          L,
          M,
          k,
          Yt
        );
    }
    q != null && w ? ls(q, c && c.ref, b, d || c, !d) : q == null && c && c.ref != null && ls(c.ref, null, b, c, !0);
  }, H = (c, d, g, C) => {
    if (c == null)
      n(
        d.el = l(d.children),
        g,
        C
      );
    else {
      const w = d.el = c.el;
      d.children !== c.children && f(w, d.children);
    }
  }, R = (c, d, g, C) => {
    c == null ? n(
      d.el = a(d.children || ""),
      g,
      C
    ) : d.el = c.el;
  }, S = (c, d, g, C) => {
    [c.el, c.anchor] = A(
      c.children,
      d,
      g,
      C,
      c.el,
      c.anchor
    );
  }, V = ({ el: c, anchor: d }, g, C) => {
    let w;
    for (; c && c !== d; )
      w = v(c), n(c, g, C), c = w;
    n(d, g, C);
  }, O = ({ el: c, anchor: d }) => {
    let g;
    for (; c && c !== d; )
      g = v(c), i(c), c = g;
    i(d);
  }, z = (c, d, g, C, w, b, L, M, k) => {
    if (d.type === "svg" ? L = "svg" : d.type === "math" && (L = "mathml"), c == null)
      X(
        d,
        g,
        C,
        w,
        b,
        L,
        M,
        k
      );
    else {
      const _ = c.el && c.el._isVueCE ? c.el : null;
      try {
        _ && _._beginPatch(), I(
          c,
          d,
          w,
          b,
          L,
          M,
          k
        );
      } finally {
        _ && _._endPatch();
      }
    }
  }, X = (c, d, g, C, w, b, L, M) => {
    let k, _;
    const { props: q, shapeFlag: F, transition: W, dirs: G } = c;
    if (k = c.el = o(
      c.type,
      b,
      q && q.is,
      q
    ), F & 8 ? u(k, c.children) : F & 16 && j(
      c.children,
      k,
      null,
      C,
      w,
      wn(c, b),
      L,
      M
    ), G && It(c, null, C, "created"), K(k, c, c.scopeId, L, C), q) {
      for (const fe in q)
        fe !== "value" && !ns(fe) && r(k, fe, null, q[fe], b, C);
      "value" in q && r(k, "value", null, q.value, b), (_ = q.onVnodeBeforeMount) && Ge(_, C, c);
    }
    G && It(c, null, C, "beforeMount");
    const ne = la(w, W);
    ne && W.beforeEnter(k), n(k, d, g), ((_ = q && q.onVnodeMounted) || ne || G) && Ae(() => {
      try {
        _ && Ge(_, C, c), ne && W.enter(k), G && It(c, null, C, "mounted");
      } finally {
      }
    }, w);
  }, K = (c, d, g, C, w) => {
    if (g && m(c, g), C)
      for (let b = 0; b < C.length; b++)
        m(c, C[b]);
    if (w) {
      let b = w.subTree;
      if (d === b || ao(b.type) && (b.ssContent === d || b.ssFallback === d)) {
        const L = w.vnode;
        K(
          c,
          L,
          L.scopeId,
          L.slotScopeIds,
          w.parent
        );
      }
    }
  }, j = (c, d, g, C, w, b, L, M, k = 0) => {
    for (let _ = k; _ < c.length; _++) {
      const q = c[_] = M ? ct(c[_]) : Qe(c[_]);
      E(
        null,
        q,
        d,
        g,
        C,
        w,
        b,
        L,
        M
      );
    }
  }, I = (c, d, g, C, w, b, L) => {
    const M = d.el = c.el;
    let { patchFlag: k, dynamicChildren: _, dirs: q } = d;
    k |= c.patchFlag & 16;
    const F = c.props || de, W = d.props || de;
    let G;
    if (g && Et(g, !1), (G = W.onVnodeBeforeUpdate) && Ge(G, g, d, c), q && It(d, c, g, "beforeUpdate"), g && Et(g, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    _ && (!c.dynamicChildren || c.dynamicChildren.length !== _.length) && (k = 0, L = !1, _ = null), (F.innerHTML && W.innerHTML == null || F.textContent && W.textContent == null) && u(M, ""), _ ? B(
      c.dynamicChildren,
      _,
      M,
      g,
      C,
      wn(d, w),
      b
    ) : L || ce(
      c,
      d,
      M,
      null,
      g,
      C,
      wn(d, w),
      b,
      !1
    ), k > 0) {
      if (k & 16)
        N(M, F, W, g, w);
      else if (k & 2 && F.class !== W.class && r(M, "class", null, W.class, w), k & 4 && r(M, "style", F.style, W.style, w), k & 8) {
        const ne = d.dynamicProps;
        for (let fe = 0; fe < ne.length; fe++) {
          const ue = ne[fe], be = F[ue], we = W[ue];
          (we !== be || ue === "value") && r(M, ue, be, we, w, g);
        }
      }
      k & 1 && c.children !== d.children && u(M, d.children);
    } else !L && _ == null && N(M, F, W, g, w);
    ((G = W.onVnodeUpdated) || q) && Ae(() => {
      G && Ge(G, g, d, c), q && It(d, c, g, "updated");
    }, C);
  }, B = (c, d, g, C, w, b, L) => {
    for (let M = 0; M < d.length; M++) {
      const k = c[M], _ = d[M], q = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        k.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (k.type === se || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Mt(k, _) || // - In the case of a component, it could contain anything.
        k.shapeFlag & 198) ? h(k.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      E(
        k,
        _,
        q,
        null,
        C,
        w,
        b,
        L,
        !0
      );
    }
  }, N = (c, d, g, C, w) => {
    if (d !== g) {
      if (d !== de)
        for (const b in d)
          !ns(b) && !(b in g) && r(
            c,
            b,
            d[b],
            null,
            w,
            C
          );
      for (const b in g) {
        if (ns(b)) continue;
        const L = g[b], M = d[b];
        L !== M && b !== "value" && r(c, b, M, L, w, C);
      }
      "value" in g && r(c, "value", d.value, g.value, w);
    }
  }, y = (c, d, g, C, w, b, L, M, k) => {
    const _ = d.el = c ? c.el : l(""), q = d.anchor = c ? c.anchor : l("");
    let { patchFlag: F, dynamicChildren: W, slotScopeIds: G } = d;
    G && (M = M ? M.concat(G) : G), c == null ? (n(_, g, C), n(q, g, C), j(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      g,
      q,
      w,
      b,
      L,
      M,
      k
    )) : F > 0 && F & 64 && W && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === W.length ? (B(
      c.dynamicChildren,
      W,
      g,
      w,
      b,
      L,
      M
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || w && d === w.subTree) && ro(
      c,
      d,
      !0
      /* shallow */
    )) : ce(
      c,
      d,
      g,
      q,
      w,
      b,
      L,
      M,
      k
    );
  }, D = (c, d, g, C, w, b, L, M, k) => {
    d.slotScopeIds = M, c == null ? d.shapeFlag & 512 ? w.ctx.activate(
      d,
      g,
      C,
      L,
      k
    ) : Y(
      d,
      g,
      C,
      w,
      b,
      L,
      k
    ) : re(c, d, k);
  }, Y = (c, d, g, C, w, b, L) => {
    const M = c.component = va(
      c,
      C,
      w
    );
    if (on(c) && (M.ctx.renderer = Yt), ya(M, !1, L), M.asyncDep) {
      if (w && w.registerDep(M, oe, L), !c.el) {
        const k = M.subTree = te(Te);
        R(null, k, d, g), c.placeholder = k.el;
      }
    } else
      oe(
        M,
        c,
        d,
        g,
        w,
        b,
        L
      );
  }, re = (c, d, g) => {
    const C = d.component = c.component;
    if (Xl(c, d, g))
      if (C.asyncDep && !C.asyncResolved) {
        Q(C, d, g);
        return;
      } else
        C.next = d, C.update();
    else
      d.el = c.el, C.vnode = d;
  }, oe = (c, d, g, C, w, b, L) => {
    const M = () => {
      if (c.isMounted) {
        let { next: F, bu: W, u: G, parent: ne, vnode: fe } = c;
        {
          const qe = oo(c);
          if (qe) {
            F && (F.el = fe.el, Q(c, F, L)), qe.asyncDep.then(() => {
              Ae(() => {
                c.isUnmounted || _();
              }, w);
            });
            return;
          }
        }
        let ue = F, be;
        Et(c, !1), F ? (F.el = fe.el, Q(c, F, L)) : F = fe, W && Ls(W), (be = F.props && F.props.onVnodeBeforeUpdate) && Ge(be, ne, F, fe), Et(c, !0);
        const we = xi(c), Je = c.subTree;
        c.subTree = we, E(
          Je,
          we,
          // parent may have changed if it's in a teleport
          h(Je.el),
          // anchor may have changed if it's in a fragment
          Es(Je),
          c,
          w,
          b
        ), F.el = we.el, ue === null && Zl(c, we.el), G && Ae(G, w), (be = F.props && F.props.onVnodeUpdated) && Ae(
          () => Ge(be, ne, F, fe),
          w
        );
      } else {
        let F;
        const { el: W, props: G } = d, { bm: ne, m: fe, parent: ue, root: be, type: we } = c, Je = as(d);
        Et(c, !1), ne && Ls(ne), !Je && (F = G && G.onVnodeBeforeMount) && Ge(F, ue, d), Et(c, !0);
        {
          be.ce && be.ce._hasShadowRoot() && be.ce._injectChildStyle(
            we,
            c.parent ? c.parent.type : void 0
          );
          const qe = c.subTree = xi(c);
          E(
            null,
            qe,
            g,
            C,
            c,
            w,
            b
          ), d.el = qe.el;
        }
        if (fe && Ae(fe, w), !Je && (F = G && G.onVnodeMounted)) {
          const qe = d;
          Ae(
            () => Ge(F, ue, qe),
            w
          );
        }
        (d.shapeFlag & 256 || ue && as(ue.vnode) && ue.vnode.shapeFlag & 256) && c.a && Ae(c.a, w), c.isMounted = !0, d = g = C = null;
      }
    };
    c.scope.on();
    const k = c.effect = new pr(M);
    c.scope.off();
    const _ = c.update = k.run.bind(k), q = c.job = k.runIfDirty.bind(k);
    q.i = c, q.id = c.uid, k.scheduler = () => Qn(q), Et(c, !0), _();
  }, Q = (c, d, g) => {
    d.component = c;
    const C = c.vnode.props;
    c.vnode = d, c.next = null, ea(c, d.props, C, g), ia(c, d.children, g), st(), hi(c), nt();
  }, ce = (c, d, g, C, w, b, L, M, k = !1) => {
    const _ = c && c.children, q = c ? c.shapeFlag : 0, F = d.children, { patchFlag: W, shapeFlag: G } = d;
    if (W > 0) {
      if (W & 128) {
        Is(
          _,
          F,
          g,
          C,
          w,
          b,
          L,
          M,
          k
        );
        return;
      } else if (W & 256) {
        it(
          _,
          F,
          g,
          C,
          w,
          b,
          L,
          M,
          k
        );
        return;
      }
    }
    G & 8 ? (q & 16 && qt(_, w, b), F !== _ && u(g, F)) : q & 16 ? G & 16 ? Is(
      _,
      F,
      g,
      C,
      w,
      b,
      L,
      M,
      k
    ) : qt(_, w, b, !0) : (q & 8 && u(g, ""), G & 16 && j(
      F,
      g,
      C,
      w,
      b,
      L,
      M,
      k
    ));
  }, it = (c, d, g, C, w, b, L, M, k) => {
    c = c || Vt, d = d || Vt;
    const _ = c.length, q = d.length, F = Math.min(_, q);
    let W;
    for (W = 0; W < F; W++) {
      const G = d[W] = k ? ct(d[W]) : Qe(d[W]);
      E(
        c[W],
        G,
        g,
        null,
        w,
        b,
        L,
        M,
        k
      );
    }
    _ > q ? qt(
      c,
      w,
      b,
      !0,
      !1,
      F
    ) : j(
      d,
      g,
      C,
      w,
      b,
      L,
      M,
      k,
      F
    );
  }, Is = (c, d, g, C, w, b, L, M, k) => {
    let _ = 0;
    const q = d.length;
    let F = c.length - 1, W = q - 1;
    for (; _ <= F && _ <= W; ) {
      const G = c[_], ne = d[_] = k ? ct(d[_]) : Qe(d[_]);
      if (Mt(G, ne))
        E(
          G,
          ne,
          g,
          null,
          w,
          b,
          L,
          M,
          k
        );
      else
        break;
      _++;
    }
    for (; _ <= F && _ <= W; ) {
      const G = c[F], ne = d[W] = k ? ct(d[W]) : Qe(d[W]);
      if (Mt(G, ne))
        E(
          G,
          ne,
          g,
          null,
          w,
          b,
          L,
          M,
          k
        );
      else
        break;
      F--, W--;
    }
    if (_ > F) {
      if (_ <= W) {
        const G = W + 1, ne = G < q ? d[G].el : C;
        for (; _ <= W; )
          E(
            null,
            d[_] = k ? ct(d[_]) : Qe(d[_]),
            g,
            ne,
            w,
            b,
            L,
            M,
            k
          ), _++;
      }
    } else if (_ > W)
      for (; _ <= F; )
        ze(c[_], w, b, !0), _++;
    else {
      const G = _, ne = _, fe = /* @__PURE__ */ new Map();
      for (_ = ne; _ <= W; _++) {
        const Re = d[_] = k ? ct(d[_]) : Qe(d[_]);
        Re.key != null && fe.set(Re.key, _);
      }
      let ue, be = 0;
      const we = W - ne + 1;
      let Je = !1, qe = 0;
      const Gt = new Array(we);
      for (_ = 0; _ < we; _++) Gt[_] = 0;
      for (_ = G; _ <= F; _++) {
        const Re = c[_];
        if (be >= we) {
          ze(Re, w, b, !0);
          continue;
        }
        let Ye;
        if (Re.key != null)
          Ye = fe.get(Re.key);
        else
          for (ue = ne; ue <= W; ue++)
            if (Gt[ue - ne] === 0 && Mt(Re, d[ue])) {
              Ye = ue;
              break;
            }
        Ye === void 0 ? ze(Re, w, b, !0) : (Gt[Ye - ne] = _ + 1, Ye >= qe ? qe = Ye : Je = !0, E(
          Re,
          d[Ye],
          g,
          null,
          w,
          b,
          L,
          M,
          k
        ), be++);
      }
      const oi = Je ? aa(Gt) : Vt;
      for (ue = oi.length - 1, _ = we - 1; _ >= 0; _--) {
        const Re = ne + _, Ye = d[Re], li = d[Re + 1], ai = Re + 1 < q ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          li.el || lo(li)
        ) : C;
        Gt[_] === 0 ? E(
          null,
          Ye,
          g,
          ai,
          w,
          b,
          L,
          M,
          k
        ) : Je && (ue < 0 || _ !== oi[ue] ? Ct(Ye, g, ai, 2) : ue--);
      }
    }
  }, Ct = (c, d, g, C, w = null) => {
    const { el: b, type: L, transition: M, children: k, shapeFlag: _ } = c;
    if (_ & 6) {
      Ct(c.component.subTree, d, g, C);
      return;
    }
    if (_ & 128) {
      c.suspense.move(d, g, C);
      return;
    }
    if (_ & 64) {
      L.move(c, d, g, Yt);
      return;
    }
    if (L === se) {
      n(b, d, g);
      for (let F = 0; F < k.length; F++)
        Ct(k[F], d, g, C);
      n(c.anchor, d, g);
      return;
    }
    if (L === Os) {
      V(c, d, g);
      return;
    }
    if (C !== 2 && _ & 1 && M)
      if (C === 0)
        M.persisted && !b[Fe] ? n(b, d, g) : (M.beforeEnter(b), n(b, d, g), Ae(() => M.enter(b), w));
      else {
        const { leave: F, delayLeave: W, afterLeave: G } = M, ne = () => {
          c.ctx.isUnmounted ? i(b) : n(b, d, g);
        }, fe = () => {
          const ue = b._isLeaving || !!b[Fe];
          b._isLeaving && b[Fe](
            !0
            /* cancelled */
          ), M.persisted && !ue ? ne() : F(b, () => {
            ne(), G && G();
          });
        };
        W ? W(b, ne, fe) : fe();
      }
    else
      n(b, d, g);
  }, ze = (c, d, g, C = !1, w = !1) => {
    const {
      type: b,
      props: L,
      ref: M,
      children: k,
      dynamicChildren: _,
      shapeFlag: q,
      patchFlag: F,
      dirs: W,
      cacheIndex: G,
      memo: ne
    } = c;
    if (F === -2 && (w = !1), M != null && (st(), ls(M, null, g, c, !0), nt()), G != null && (d.renderCache[G] = void 0), q & 256) {
      d.ctx.deactivate(c);
      return;
    }
    const fe = q & 1 && W, ue = !as(c);
    let be;
    if (ue && (be = L && L.onVnodeBeforeUnmount) && Ge(be, d, c), q & 6)
      Eo(c.component, g, C);
    else {
      if (q & 128) {
        c.suspense.unmount(g, C);
        return;
      }
      fe && It(c, null, d, "beforeUnmount"), q & 64 ? c.type.remove(
        c,
        d,
        g,
        Yt,
        C
      ) : _ && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !_.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== se || F > 0 && F & 64) ? qt(
        _,
        d,
        g,
        !1,
        !0
      ) : (b === se && F & 384 || !w && q & 16) && qt(k, d, g), C && ii(c);
    }
    const we = ne != null && G == null;
    (ue && (be = L && L.onVnodeUnmounted) || fe || we) && Ae(() => {
      be && Ge(be, d, c), fe && It(c, null, d, "unmounted"), we && (c.el = null);
    }, g);
  }, ii = (c) => {
    const { type: d, el: g, anchor: C, transition: w } = c;
    if (d === se) {
      Io(g, C);
      return;
    }
    if (d === Os) {
      O(c);
      return;
    }
    const b = () => {
      i(g), w && !w.persisted && w.afterLeave && w.afterLeave();
    };
    if (c.shapeFlag & 1 && w && !w.persisted) {
      const { leave: L, delayLeave: M } = w, k = () => L(g, b);
      M ? M(c.el, b, k) : k();
    } else
      b();
  }, Io = (c, d) => {
    let g;
    for (; c !== d; )
      g = v(c), i(c), c = g;
    i(d);
  }, Eo = (c, d, g) => {
    const { bum: C, scope: w, job: b, subTree: L, um: M, m: k, a: _ } = c;
    Ci(k), Ci(_), C && Ls(C), w.stop(), b && (b.flags |= 8, ze(L, c, d, g)), M && Ae(M, d), Ae(() => {
      c.isUnmounted = !0;
    }, d);
  }, qt = (c, d, g, C = !1, w = !1, b = 0) => {
    for (let L = b; L < c.length; L++)
      ze(c[L], d, g, C, w);
  }, Es = (c) => {
    if (c.shapeFlag & 6)
      return Es(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const d = v(c.anchor || c.el), g = d && d[Sl];
    return g ? v(g) : d;
  };
  let pn = !1;
  const ri = (c, d, g) => {
    let C;
    c == null ? d._vnode && (ze(d._vnode, null, null, !0), C = d._vnode.component) : E(
      d._vnode || null,
      c,
      d,
      null,
      null,
      null,
      g
    ), d._vnode = c, pn || (pn = !0, hi(C), Rr(), pn = !1);
  }, Yt = {
    p: E,
    um: ze,
    m: Ct,
    r: ii,
    mt: Y,
    mc: j,
    pc: ce,
    pbc: B,
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
  if (J(n) && J(i))
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = ct(i[r]), l.el = o.el), !s && l.patchFlag !== -2 && ro(o, l)), l.type === un && (l.patchFlag === -1 && (l = i[r] = ct(l)), l.el = o.el), l.type === Te && !l.el && (l.el = o.el);
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
  t && t.pendingBranch ? J(e) ? t.effects.push(...e) : t.effects.push(e) : vl(e);
}
const se = /* @__PURE__ */ Symbol.for("v-fgt"), un = /* @__PURE__ */ Symbol.for("v-txt"), Te = /* @__PURE__ */ Symbol.for("v-cmt"), Os = /* @__PURE__ */ Symbol.for("v-stc"), us = [];
let Oe = null;
function T(e = !1) {
  us.push(Oe = e ? null : []);
}
function ua() {
  us.pop(), Oe = us[us.length - 1] || null;
}
let bs = 1;
function Ks(e, t = !1) {
  bs += e, e < 0 && Oe && t && (Oe.hasOnce = !0);
}
function co(e) {
  return e.dynamicChildren = bs > 0 ? Oe || Vt : null, ua(), bs > 0 && Oe && Oe.push(e), e;
}
function P(e, t, s, n, i, r) {
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
    te(
      e,
      t,
      s,
      n,
      i,
      !0
    )
  );
}
function Ws(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Mt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const uo = ({ key: e }) => e ?? null, Ds = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? me(e) || /* @__PURE__ */ ve(e) || Z(e) ? { i: He, r: e, k: t, f: !!s } : e : null);
function p(e, t = null, s = null, n = 0, i = null, r = e === se ? 0 : 1, o = !1, l = !1) {
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
    ctx: He
  };
  return l ? (zs(a, s), r & 128 && e.normalize(a)) : s && (a.shapeFlag |= me(s) ? 8 : 16), bs > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Oe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Oe.push(a), a;
}
const te = fa;
function fa(e, t = null, s = null, n = 0, i = null, r = !1) {
  if ((!e || e === Nl) && (e = Te), Ws(e)) {
    const l = _t(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && zs(l, s), bs > 0 && !r && Oe && (l.shapeFlag & 6 ? Oe[Oe.indexOf(e)] = l : Oe.push(l)), l.patchFlag = -2, l;
  }
  if (wa(e) && (e = e.__vccOpts), t) {
    t = da(t);
    let { class: l, style: a } = t;
    l && !me(l) && (t.class = ye(l)), ae(a) && (/* @__PURE__ */ nn(a) && !J(a) && (a = xe({}, a)), t.style = Rt(a));
  }
  const o = me(e) ? 1 : ao(e) ? 128 : Nr(e) ? 64 : ae(e) ? 4 : Z(e) ? 2 : 0;
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
  const { props: i, ref: r, patchFlag: o, children: l, transition: a } = e, f = t ? pa(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && uo(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && r ? J(r) ? r.concat(Ds(t)) : [r, Ds(t)] : Ds(t)
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
    patchFlag: t && e.type !== se ? o === -1 ? 16 : o | 16 : o,
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
    u,
    a.clone(u)
  ), u;
}
function ha(e = " ", t = 0) {
  return te(un, null, e, t);
}
function Ms(e, t) {
  const s = te(Os, null, e);
  return s.staticCount = t, s;
}
function Me(e = "", t = !1) {
  return t ? (T(), bt(Te, null, e)) : te(Te, null, e);
}
function Qe(e) {
  return e == null || typeof e == "boolean" ? te(Te) : J(e) ? te(
    se,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ws(e) ? ct(e) : te(un, null, String(e));
}
function ct(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : _t(e);
}
function zs(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (J(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), zs(e, i()), i._c && (i._d = !0));
      return;
    } else {
      s = 32;
      const i = t._;
      !i && !Qr(t) ? t._ctx = He : i === 3 && He && (He.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Z(t)) {
    if (n & 65) {
      zs(e, { default: t });
      return;
    }
    t = { default: t, _ctx: He }, s = 32;
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
        t.style = Rt([t.style, n.style]);
      else if (Gs(i)) {
        const r = t[i], o = n[i];
        o && r !== o && !(J(r) && r.includes(o)) ? t[i] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Xs(i) && (t[i] = o);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function Ge(e, t, s, n = null) {
  je(e, t, 7, [
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
    emitsOptions: Yr(n, i),
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
let ke = null;
const ni = () => ke || He;
let Js, Fn;
{
  const e = en(), t = (s, n) => {
    let i;
    return (i = e[s]) || (i = e[s] = []), i.push(n), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  Js = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => ke = s
  ), Fn = t(
    "__VUE_SSR_SETTERS__",
    (s) => _s = s
  );
}
const Cs = (e) => {
  const t = ke;
  return Js(e), e.scope.on(), () => {
    e.scope.off(), Js(t);
  };
}, Ii = () => {
  ke && ke.scope.off(), Js(null);
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
    if (nt(), r(), (l || e.sp) && !as(e) && Br(e), l) {
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
  Z(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ae(t) && (e.setupState = kr(t)), ho(e);
}
function ho(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || tt);
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
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(kr(Zn(e.exposed)), {
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
  return Z(e) && "__vccOpts" in e;
}
const $e = (e, t) => /* @__PURE__ */ dl(e, t, _s);
function Sa(e, t, s) {
  try {
    Ks(-1);
    const n = arguments.length;
    return n === 2 ? ae(t) && !J(t) ? Ws(t) ? te(e, null, [t]) : te(e, t) : te(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && Ws(s) && (s = [s]), te(e, t, s));
  } finally {
    Ks(1);
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
const po = Un ? (e) => Un.createHTML(e) : (e) => e, Ia = "http://www.w3.org/2000/svg", Ea = "http://www.w3.org/1998/Math/MathML", lt = typeof document < "u" ? document : null, ki = lt && /* @__PURE__ */ lt.createElement("template"), Ta = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const i = t === "svg" ? lt.createElementNS(Ia, e) : t === "mathml" ? lt.createElementNS(Ea, e) : s ? lt.createElement(e, { is: s }) : lt.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => lt.createTextNode(e),
  createComment: (e) => lt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => lt.querySelector(e),
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
      ki.innerHTML = po(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const l = ki.content;
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
}, gt = "transition", Qt = "animation", xs = /* @__PURE__ */ Symbol("_vtc"), go = {
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
}, ka = /* @__PURE__ */ xe(
  {},
  Fr,
  go
), Aa = (e) => (e.displayName = "Transition", e.props = ka, e), Ma = /* @__PURE__ */ Aa(
  (e, { slots: t }) => Sa(El, Ra(e), t)
), Tt = (e, t = []) => {
  J(e) ? e.forEach((s) => s(...t)) : e && e(...t);
}, Ai = (e) => e ? J(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
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
    appearToClass: u = l,
    leaveFromClass: h = `${s}-leave-from`,
    leaveActiveClass: v = `${s}-leave-active`,
    leaveToClass: m = `${s}-leave-to`
  } = e, A = Pa(i), E = A && A[0], H = A && A[1], {
    onBeforeEnter: R,
    onEnter: S,
    onEnterCancelled: V,
    onLeave: O,
    onLeaveCancelled: z,
    onBeforeAppear: X = R,
    onAppear: K = S,
    onAppearCancelled: j = V
  } = t, I = (y, D, Y, re) => {
    y._enterCancelled = re, kt(y, D ? u : l), kt(y, D ? f : o), Y && Y();
  }, B = (y, D) => {
    y._isLeaving = !1, kt(y, h), kt(y, m), kt(y, v), D && D();
  }, N = (y) => (D, Y) => {
    const re = y ? K : S, oe = () => I(D, y, Y);
    Tt(re, [D, oe]), Mi(() => {
      kt(D, y ? a : r), ot(D, y ? u : l), Ai(re) || Ri(D, n, E, oe);
    });
  };
  return xe(t, {
    onBeforeEnter(y) {
      Tt(R, [y]), ot(y, r), ot(y, o);
    },
    onBeforeAppear(y) {
      Tt(X, [y]), ot(y, a), ot(y, f);
    },
    onEnter: N(!1),
    onAppear: N(!0),
    onLeave(y, D) {
      y._isLeaving = !0;
      const Y = () => B(y, D);
      ot(y, h), y._enterCancelled ? (ot(y, v), Li(y)) : (Li(y), ot(y, v)), Mi(() => {
        y._isLeaving && (kt(y, h), ot(y, m), Ai(O) || Ri(y, n, H, Y));
      }), Tt(O, [y, Y]);
    },
    onEnterCancelled(y) {
      I(y, !1, void 0, !0), Tt(V, [y]);
    },
    onAppearCancelled(y) {
      I(y, !0, void 0, !0), Tt(j, [y]);
    },
    onLeaveCancelled(y) {
      B(y), Tt(z, [y]);
    }
  });
}
function Pa(e) {
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
function kt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const s = e[xs];
  s && (s.delete(t), s.size || (e[xs] = void 0));
}
function Mi(e) {
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
  let u = 0;
  const h = () => {
    e.removeEventListener(f, v), r();
  }, v = (m) => {
    m.target === e && ++u >= a && h();
  };
  setTimeout(() => {
    u < a && h();
  }, l + 1), e.addEventListener(f, v);
}
function La(e, t) {
  const s = window.getComputedStyle(e), n = (A) => (s[A] || "").split(", "), i = n(`${gt}Delay`), r = n(`${gt}Duration`), o = Pi(i, r), l = n(`${Qt}Delay`), a = n(`${Qt}Duration`), f = Pi(l, a);
  let u = null, h = 0, v = 0;
  t === gt ? o > 0 && (u = gt, h = o, v = r.length) : t === Qt ? f > 0 && (u = Qt, h = f, v = a.length) : (h = Math.max(o, f), u = h > 0 ? o > f ? gt : Qt : null, v = u ? u === gt ? r.length : a.length : 0);
  const m = u === gt && /\b(?:transform|all)(?:,|$)/.test(
    n(`${gt}Property`).toString()
  );
  return {
    type: u,
    timeout: h,
    propCount: v,
    hasTransform: m
  };
}
function Pi(e, t) {
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
const qs = /* @__PURE__ */ Symbol("_vod"), mo = /* @__PURE__ */ Symbol("_vsh"), Rs = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: s }) {
    e[qs] = e.style.display === "none" ? "" : e.style.display, s && t ? s.beforeEnter(e) : es(e, t);
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
  e.style.display = t ? e[qs] : "none", e[mo] = !t;
}
const Da = /* @__PURE__ */ Symbol(""), Na = /(?:^|;)\s*display\s*:/;
function Fa(e, t, s) {
  const n = e.style, i = me(s);
  let r = !1;
  if (s && !i) {
    if (t)
      if (me(t))
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
      l != null ? Ha(
        e,
        o,
        !me(t) && t ? t[o] : void 0,
        l
      ) || ss(n, o, l) : ss(n, o, "");
    }
  } else if (i) {
    if (t !== s) {
      const o = n[Da];
      o && (s += ";" + o), n.cssText = s, r = Na.test(s);
    }
  } else t && e.removeAttribute("style");
  qs in e && (e[qs] = r ? n.display : "", e[mo] && (n.display = "none"));
}
const Oi = /\s*!important$/;
function ss(e, t, s) {
  if (J(s))
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
  let n = Be(t);
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
function Ha(e, t, s, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && me(n) && s === n;
}
const Ni = "http://www.w3.org/1999/xlink";
function Fi(e, t, s, n, i, r = No(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Ni, t.slice(6, t.length)) : e.setAttributeNS(Ni, t, s) : s == null || r && !ar(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Ve(s) ? String(s) : s
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
function Va(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Hi = /* @__PURE__ */ Symbol("_vei");
function ja(e, t, s, n, i = null) {
  const r = e[Hi] || (e[Hi] = {}), o = r[t];
  if (n && o)
    o.value = n;
  else {
    const [l, a] = Wa(t);
    if (n) {
      const f = r[t] = qa(
        n,
        i
      );
      Ut(e, l, f, a);
    } else o && (Va(e, l, o, a), r[t] = void 0);
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
    if (J(i)) {
      const r = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        r.call(n), n._stopped = !0;
      };
      const o = i.slice(), l = [n];
      for (let a = 0; a < o.length && !n._stopped; a++) {
        const f = o[a];
        f && je(
          f,
          t,
          5,
          l
        );
      }
    } else
      je(
        i,
        t,
        5,
        [n]
      );
  };
  return s.value = e, s.attached = Ja(), s;
}
const Vi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ya = (e, t, s, n, i, r) => {
  const o = i === "svg";
  t === "class" ? Oa(e, n, o) : t === "style" ? Fa(e, s, n) : Gs(t) ? Xs(t) || ja(e, t, s, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ga(e, t, n, o)) ? (Ui(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Fi(e, t, n, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Xa(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !me(n))) ? Ui(e, Be(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Fi(e, t, n, o));
};
function Ga(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Vi(t) && Z(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Vi(t) && me(s) ? !1 : t in e;
}
function Xa(e, t) {
  const s = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!s)
    return !1;
  const n = Be(t);
  return Array.isArray(s) ? s.some((i) => Be(i) === n) : Object.keys(s).some((i) => Be(i) === n);
}
const ji = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return J(t) ? (s) => Ls(t, s) : t;
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
const Ns = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, i) {
    e[En] = ji(i);
    const r = n || i.props && i.props.type === "number";
    Ut(e, t ? "change" : "input", (o) => {
      o.target.composing || e[En](Ki(e.value, s, r));
    }), (s || r) && Ut(e, "change", () => {
      e.value = Ki(e.value, s, r);
    }), t || (Ut(e, "compositionstart", Za), Ut(e, "compositionend", Bi), Ut(e, "change", Bi));
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
}, Ht = (e, t) => {
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
}, sc = /* @__PURE__ */ xe({ patchProp: Ya }, Ta);
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
    !Z(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
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
  return me(e) ? document.querySelector(e) : e;
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
function Hn(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var fs;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(fs || (fs = {}));
function oc() {
  const e = dr(!0), t = e.run(() => /* @__PURE__ */ pe({}));
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
function Dt(e, ...t) {
  e.slice().forEach((s) => {
    s(...t);
  });
}
const lc = (e) => e(), Ji = Symbol(), Tn = Symbol();
function Vn(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((s, n) => e.set(n, s)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const s in t) {
    if (!t.hasOwnProperty(s))
      continue;
    const n = t[s], i = e[s];
    Hn(i) && Hn(n) && e.hasOwnProperty(s) && !/* @__PURE__ */ ve(n) && !/* @__PURE__ */ dt(n) ? e[s] = Vn(i, n) : e[s] = n;
  }
  return e;
}
const ac = (
  /* istanbul ignore next */
  Symbol()
);
function cc(e) {
  return !Hn(e) || !e.hasOwnProperty(ac);
}
const { assign: vt } = Object;
function uc(e) {
  return !!(/* @__PURE__ */ ve(e) && e.effect);
}
function fc(e, t, s, n) {
  const { state: i, actions: r, getters: o } = t, l = s.state.value[e];
  let a;
  function f() {
    l || (s.state.value[e] = i ? i() : {});
    const u = /* @__PURE__ */ al(s.state.value[e]);
    return vt(u, r, Object.keys(o || {}).reduce((h, v) => (h[v] = Zn($e(() => {
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
  let f, u, h = [], v = [], m;
  const A = n.state.value[e];
  !r && !A && (n.state.value[e] = {});
  let E;
  function H(j) {
    let I;
    f = u = !1, typeof j == "function" ? (j(n.state.value[e]), I = {
      type: fs.patchFunction,
      storeId: e,
      events: m
    }) : (Vn(n.state.value[e], j), I = {
      type: fs.patchObject,
      payload: j,
      storeId: e,
      events: m
    });
    const B = E = Symbol();
    Pe().then(() => {
      E === B && (f = !0);
    }), u = !0, Dt(h, I, n.state.value[e]);
  }
  const R = r ? function() {
    const { state: I } = s, B = I ? I() : {};
    this.$patch((N) => {
      vt(N, B);
    });
  } : (
    /* istanbul ignore next */
    xo
  );
  function S() {
    o.stop(), h = [], v = [], n._s.delete(e);
  }
  const V = (j, I = "") => {
    if (Ji in j)
      return j[Tn] = I, j;
    const B = function() {
      dn(n);
      const N = Array.from(arguments), y = [], D = [];
      function Y(Q) {
        y.push(Q);
      }
      function re(Q) {
        D.push(Q);
      }
      Dt(v, {
        args: N,
        name: B[Tn],
        store: z,
        after: Y,
        onError: re
      });
      let oe;
      try {
        oe = j.apply(this && this.$id === e ? this : z, N);
      } catch (Q) {
        throw Dt(D, Q), Q;
      }
      return oe instanceof Promise ? oe.then((Q) => (Dt(y, Q), Q)).catch((Q) => (Dt(D, Q), Promise.reject(Q))) : (Dt(y, oe), oe);
    };
    return B[Ji] = !0, B[Tn] = I, B;
  }, O = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: zi.bind(null, v),
    $patch: H,
    $reset: R,
    $subscribe(j, I = {}) {
      const B = zi(h, j, I.detached, () => N()), N = o.run(() => Le(() => n.state.value[e], (y) => {
        (I.flush === "sync" ? u : f) && j({
          storeId: e,
          type: fs.direct,
          events: m
        }, y);
      }, vt({}, a, I)));
      return B;
    },
    $dispose: S
  }, z = /* @__PURE__ */ sn(O);
  n._s.set(e, z);
  const K = (n._a && n._a.runWithContext || lc)(() => n._e.run(() => (o = dr()).run(() => t({ action: V }))));
  for (const j in K) {
    const I = K[j];
    if (/* @__PURE__ */ ve(I) && !uc(I) || /* @__PURE__ */ dt(I))
      r || (A && cc(I) && (/* @__PURE__ */ ve(I) ? I.value = A[j] : Vn(I, A[j])), n.state.value[e][j] = I);
    else if (typeof I == "function") {
      const B = V(I, j);
      K[j] = B, l.actions[j] = I;
    }
  }
  return vt(z, K), vt(/* @__PURE__ */ ie(z), K), Object.defineProperty(z, "$state", {
    get: () => n.state.value[e],
    set: (j) => {
      H((I) => {
        vt(I, j);
      });
    }
  }), n._p.forEach((j) => {
    vt(z, o.run(() => j({
      store: z,
      app: n._a,
      pinia: n,
      options: l
    })));
  }), A && r && s.hydrate && s.hydrate(z.$state, A), f = !0, u = !0, z;
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
    l || (f ? os(_o, null) : null), l && dn(l), l = bo, l._s.has(n) || (r ? wo(n, t, i, l) : fc(n, i, l)), l._s.get(n);
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
function kn() {
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
    settings: kn(),
    storage: null
  }),
  getters: {
    defaults: () => kn()
  },
  actions: {
    init(e) {
      this.storage = e;
      const t = e.getSettings(), s = kn();
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
      const a = parseInt(o[1], 10), f = parseInt(o[2], 10), u = o[3] ?? "", h = u ? parseInt(u.padEnd(3, "0"), 10) : 0;
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
function Yi(e, t) {
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
      return this.ctx().extensionSettings[ds] ?? null;
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
      s.extensionSettings[ds] = t, s.saveSettingsDebounced();
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
  // ----- key helpers -----
  settingsKey() {
    return `${ds}__settings`;
  }
}
function mc() {
  return new gc();
}
const ds = "st-music-player", Gi = "stmp_cursor", Xi = "stmp_userlist";
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
function Ps() {
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
        const n = s.getMetadata(Gi);
        n && n.chatId === e && this.chatIndexer?.setCursor(e, n.lastScannedMessageId);
      }
    },
    loadFromStorage() {
      const t = Ie().storage;
      if (!t || !this.chatId) return;
      const s = t.getMetadata(Xi);
      if (s && Array.isArray(s)) {
        const n = s.filter((r) => r && r.source === "user"), i = s.filter((r) => r && r.source === "local");
        this.list = [
          ...this.list.filter((r) => r.source !== "user" && r.source !== "local"),
          ...n,
          ...i
        ];
      }
    },
    addItem(e) {
      this.list.push(e), (e.source === "user" || e.source === "local") && this.saveUserList();
    },
    removeItem(e) {
      if (e < 0 || e >= this.list.length) return;
      const t = this.list.splice(e, 1)[0];
      t && (t.source === "user" || t.source === "local") && this.saveUserList(), e === this.currentIndex ? this.currentIndex = -1 : e < this.currentIndex && this.currentIndex--;
    },
    addFromCue(e, t) {
      const s = {
        id: Ps(),
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
        id: Ps(),
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
        id: Ps(),
        song: e,
        source: "local",
        localBlobKey: t,
        addedAt: Date.now()
      };
      this.list.push(s), this.saveUserList();
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
      await Lt().loadAndPlay(i);
    },
    handleNewCues(e) {
      if (e.length === 0) return;
      const t = Ie();
      let s = null;
      for (const n of e)
        for (const i of n.cues) {
          const r = {
            id: Ps(),
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
      const s = this.list.filter((n) => n.source === "user" || n.source === "local");
      t.setMetadata(Xi, s);
    },
    getCursor() {
      return !this.chatIndexer || !this.chatId ? -1 : this.chatIndexer.getCursor(this.chatId);
    },
    setCursor(e) {
      if (!this.chatIndexer || !this.chatId) return;
      this.chatIndexer.setCursor(this.chatId, e);
      const s = Ie().storage;
      s && s.setMetadata(Gi, {
        chatId: this.chatId,
        lastScannedMessageId: e,
        updatedAt: Date.now()
      });
    }
  }
}), Lt = /* @__PURE__ */ hn("player", {
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
      const t = Lt();
      e.on("timeupdate", () => {
        if (!e) return;
        t.currentTime = e.currentTime, t.duration = e.duration;
        const s = Yi(t.lyrics, e.currentTime), n = s ? t.lyrics.indexOf(s) : -1;
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
      return Yi(this.lyrics, this.currentTime);
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
}, kc = {
  key: 15,
  points: "20 6 9 17 4 12"
}, Ac = /* @__PURE__ */ wt({
  __name: "Icon",
  props: {
    name: {},
    size: {}
  },
  setup(e) {
    return (t, s) => (T(), P("svg", {
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
      e.name === "play" ? (T(), P("polygon", Ic)) : e.name === "pause" ? (T(), P(se, { key: 1 }, [
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
      ], 64)) : e.name === "prev" ? (T(), P(se, { key: 2 }, [
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
      ], 64)) : e.name === "next" ? (T(), P(se, { key: 3 }, [
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
      ], 64)) : e.name === "repeat" ? (T(), P(se, { key: 4 }, [
        s[6] || (s[6] = p("polyline", { points: "17 1 21 5 17 9" }, null, -1)),
        s[7] || (s[7] = p("path", { d: "M3 11V9a4 4 0 0 1 4-4h14" }, null, -1)),
        s[8] || (s[8] = p("polyline", { points: "7 23 3 19 7 15" }, null, -1)),
        s[9] || (s[9] = p("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" }, null, -1))
      ], 64)) : e.name === "repeat-one" ? (T(), P(se, { key: 5 }, [
        s[10] || (s[10] = Ms('<polyline points="17 1 21 5 17 9" data-v-4bfc4099></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14" data-v-4bfc4099></path><polyline points="7 23 3 19 7 15" data-v-4bfc4099></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3" data-v-4bfc4099></path><text x="12" y="14" text-anchor="middle" font-size="8" fill="currentColor" stroke="none" font-weight="bold" data-v-4bfc4099>1</text>', 5))
      ], 64)) : e.name === "shuffle" ? (T(), P(se, { key: 6 }, [
        s[11] || (s[11] = Ms('<polyline points="16 3 21 3 21 8" data-v-4bfc4099></polyline><line x1="4" y1="20" x2="21" y2="3" data-v-4bfc4099></line><polyline points="21 16 21 21 16 21" data-v-4bfc4099></polyline><line x1="15" y1="15" x2="21" y2="21" data-v-4bfc4099></line><line x1="4" y1="4" x2="9" y2="9" data-v-4bfc4099></line>', 5))
      ], 64)) : e.name === "search" ? (T(), P(se, { key: 7 }, [
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
      ], 64)) : e.name === "plus" ? (T(), P(se, { key: 8 }, [
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
      ], 64)) : e.name === "x" ? (T(), P(se, { key: 9 }, [
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
      ], 64)) : e.name === "chevron-down" ? (T(), P("polyline", Ec)) : e.name === "chevron-up" ? (T(), P("polyline", Tc)) : e.name === "music" ? (T(), P(se, { key: 12 }, [
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
      ], 64)) : e.name === "volume" ? (T(), P(se, { key: 13 }, [
        s[21] || (s[21] = p("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[22] || (s[22] = p("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1)),
        s[23] || (s[23] = p("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }, null, -1))
      ], 64)) : e.name === "volume-mute" ? (T(), P(se, { key: 14 }, [
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
      ], 64)) : e.name === "check" ? (T(), P("polyline", kc)) : e.name === "loader" ? (T(), P(se, { key: 16 }, [
        s[27] || (s[27] = Ms('<line x1="12" y1="2" x2="12" y2="6" data-v-4bfc4099></line><line x1="12" y1="18" x2="12" y2="22" data-v-4bfc4099></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" data-v-4bfc4099></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" data-v-4bfc4099></line><line x1="2" y1="12" x2="6" y2="12" data-v-4bfc4099></line><line x1="18" y1="12" x2="22" y2="12" data-v-4bfc4099></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" data-v-4bfc4099></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" data-v-4bfc4099></line>', 8))
      ], 64)) : e.name === "list-music" ? (T(), P(se, { key: 17 }, [
        s[28] || (s[28] = Ms('<path d="M3 12h11" data-v-4bfc4099></path><path d="M3 6h11" data-v-4bfc4099></path><path d="M3 18h7" data-v-4bfc4099></path><path d="M16 8v13" data-v-4bfc4099></path><circle cx="14" cy="21" r="2" data-v-4bfc4099></circle><path d="M16 8l5-2v3" data-v-4bfc4099></path>', 6))
      ], 64)) : Me("", !0)
    ], 8, Cc));
  }
}), St = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, i] of t)
    s[n] = i;
  return s;
}, ge = /* @__PURE__ */ St(Ac, [["__scopeId", "data-v-4bfc4099"]]), Mc = {
  key: 0,
  class: "stmp-mini stmp-mini-dock-desktop"
}, Rc = {
  key: 0,
  class: "stmp-mini-cover"
}, Pc = ["src"], $c = {
  key: 1,
  class: "stmp-mini-cover stmp-mini-cover-placeholder"
}, Lc = {
  key: 1,
  class: "stmp-mini-text stmp-mini-dock-fallback"
}, Oc = { class: "stmp-mini-controls" }, Dc = ["aria-label"], Nc = ["aria-label"], Fc = {
  key: 1,
  class: "stmp-mini stmp-mini-dock-mobile"
}, Uc = {
  key: 0,
  class: "stmp-mini-cover"
}, Hc = ["src"], Vc = {
  key: 1,
  class: "stmp-mini-cover stmp-mini-cover-placeholder"
}, jc = {
  ref: "dockWindowRef2",
  class: "stmp-mini-dock-text"
}, Bc = {
  key: 1,
  class: "stmp-mini-text stmp-mini-dock-fallback"
}, Kc = { class: "stmp-mini-controls" }, Wc = ["aria-label"], zc = ["aria-label"], Jc = {
  key: 2,
  class: "stmp-mini stmp-mini-drag stmp-mini-drag-idle"
}, qc = { class: "stmp-mini-cover stmp-mini-cover-square" }, Yc = {
  key: 3,
  class: "stmp-mini stmp-mini-drag"
}, Gc = ["aria-label"], Xc = ["src"], Zc = { class: "stmp-mini-cover-overlay" }, Qc = { class: "stmp-mini-drag-right" }, eu = { class: "stmp-mini-text stmp-mini-text-drag" }, tu = /* @__PURE__ */ wt({
  __name: "CollapsedBar",
  props: {
    isDock: { type: Boolean },
    isMobile: { type: Boolean }
  },
  setup(e) {
    const t = Lt(), s = Jt(), n = e, i = /* @__PURE__ */ pe(!1), r = $e(() => t.currentTrack?.cover || ""), o = $e(() => !!t.currentTrack), l = $e(() => {
      const K = t.currentTrack;
      if (!K) return "";
      const j = K.name, I = K.artist || "";
      return I ? `${j} - ${I}` : j;
    }), a = $e(() => {
      const K = t.currentLyricIndex;
      return K < 0 || K >= t.lyrics.length ? "" : t.lyrics[K].text;
    }), f = $e(() => {
      const K = t.currentLyricIndex;
      if (K < 0 || K >= t.lyrics.length) return 0;
      const j = t.lyrics[K];
      return j.next ? Math.max(500, (j.next.time - j.time) * 1e3) : 5e3;
    }), u = /* @__PURE__ */ pe(0), h = /* @__PURE__ */ pe([]), v = /* @__PURE__ */ pe(null);
    function m(K, j) {
      K && (h.value[j] = K);
    }
    async function A() {
      await Pe();
      const K = t.currentLyricIndex, j = v.value;
      if (!j || K < 0) {
        u.value = 0;
        return;
      }
      const I = h.value[K];
      if (!I) return;
      const B = I.offsetTop, N = I.offsetHeight, y = j.clientHeight;
      u.value = B - y / 2 + N / 2;
    }
    Le(() => t.currentLyricIndex, A), Le(() => t.lyrics, () => {
      h.value = [], A();
    });
    const E = /* @__PURE__ */ pe(null), H = /* @__PURE__ */ pe(null), R = /* @__PURE__ */ pe(0), S = /* @__PURE__ */ pe(0);
    function V() {
      const K = E.value, j = H.value;
      if (!K || !j) {
        R.value = 0;
        return;
      }
      const I = K.scrollWidth - j.clientWidth;
      I > 3 && f.value > 0 ? (S.value = Math.max(200, f.value - 200), requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          R.value = -I;
        });
      })) : R.value = 0;
    }
    Le(a, () => {
      S.value = 0, R.value = 0, Pe(() => requestAnimationFrame(V));
    });
    function O() {
      i.value = !0;
    }
    Le(() => t.currentTrack?.url, () => {
      i.value = !1;
    });
    function z(K) {
      K.stopPropagation(), t.togglePlay();
    }
    function X(K) {
      K.stopPropagation(), s.next();
    }
    return an(() => {
      A(), requestAnimationFrame(V);
    }), (K, j) => n.isDock && !n.isMobile ? (T(), P("div", Mc, [
      r.value && !i.value ? (T(), P("div", Rc, [
        p("img", {
          src: r.value,
          alt: "",
          onError: O
        }, null, 40, Pc)
      ])) : (T(), P("div", $c, [
        te(ge, {
          name: "music",
          size: 14
        })
      ])),
      p("div", {
        ref_key: "dockWindowRef",
        ref: v,
        class: "stmp-mini-dock-text"
      }, [
        x(t).lyrics.length > 0 ? (T(), P("div", {
          key: 0,
          class: "stmp-mini-dock-scroll",
          style: Rt({ transform: `translateY(-${u.value}px)` })
        }, [
          (T(!0), P(se, null, Ue(x(t).lyrics, (I, B) => (T(), P("span", {
            key: B,
            ref_for: !0,
            ref: (N) => m(N, B),
            class: ye(["stmp-mini-dock-line", { "stmp-mini-dock-line-active": B === x(t).currentLyricIndex }])
          }, ee(I.text), 3))), 128))
        ], 4)) : (T(), P("span", Lc, ee(l.value), 1))
      ], 512),
      p("div", Oc, [
        p("button", {
          class: "stmp-mini-btn",
          "aria-label": x(t).isPlaying ? x(U)("Pause") : x(U)("Play"),
          onClick: z
        }, [
          te(ge, {
            name: x(t).isPlaying ? "pause" : "play",
            size: 14
          }, null, 8, ["name"])
        ], 8, Dc),
        p("button", {
          class: "stmp-mini-btn",
          "aria-label": x(U)("Next"),
          onClick: X
        }, [
          te(ge, {
            name: "next",
            size: 14
          })
        ], 8, Nc)
      ])
    ])) : n.isDock && n.isMobile ? (T(), P("div", Fc, [
      r.value && !i.value ? (T(), P("div", Uc, [
        p("img", {
          src: r.value,
          alt: "",
          onError: O
        }, null, 40, Hc)
      ])) : (T(), P("div", Vc, [
        te(ge, {
          name: "music",
          size: 14
        })
      ])),
      p("div", jc, [
        x(t).lyrics.length > 0 ? (T(), P("div", {
          key: 0,
          class: "stmp-mini-dock-scroll",
          style: Rt({ transform: `translateY(-${u.value}px)` })
        }, [
          (T(!0), P(se, null, Ue(x(t).lyrics, (I, B) => (T(), P("span", {
            key: B,
            ref_for: !0,
            ref: (N) => m(N, B),
            class: ye(["stmp-mini-dock-line", { "stmp-mini-dock-line-active": B === x(t).currentLyricIndex }])
          }, ee(I.text), 3))), 128))
        ], 4)) : (T(), P("span", Bc, ee(l.value), 1))
      ], 512),
      p("div", Kc, [
        p("button", {
          class: "stmp-mini-btn",
          "aria-label": x(t).isPlaying ? x(U)("Pause") : x(U)("Play"),
          onClick: z
        }, [
          te(ge, {
            name: x(t).isPlaying ? "pause" : "play",
            size: 16
          }, null, 8, ["name"])
        ], 8, Wc),
        p("button", {
          class: "stmp-mini-btn",
          "aria-label": x(U)("Next"),
          onClick: X
        }, [
          te(ge, {
            name: "next",
            size: 16
          })
        ], 8, zc)
      ])
    ])) : o.value ? (T(), P("div", Yc, [
      p("button", {
        class: "stmp-mini-cover stmp-mini-cover-square",
        "aria-label": x(t).isPlaying ? x(U)("Pause") : x(U)("Play"),
        onClick: z
      }, [
        r.value && !i.value ? (T(), P("img", {
          key: 0,
          src: r.value,
          alt: "",
          onError: O
        }, null, 40, Xc)) : (T(), bt(ge, {
          key: 1,
          name: "music",
          size: 20
        })),
        p("div", Zc, [
          te(ge, {
            name: x(t).isPlaying ? "pause" : "play",
            size: 18
          }, null, 8, ["name"])
        ])
      ], 8, Gc),
      p("div", Qc, [
        p("span", eu, ee(l.value), 1),
        p("div", {
          ref_key: "lyricContainerRef",
          ref: H,
          class: "stmp-mini-lyric"
        }, [
          p("span", {
            ref_key: "lyricScrollRef",
            ref: E,
            class: "stmp-mini-lyric-scroll",
            style: Rt({
              transform: `translateX(${R.value}px)`,
              transition: S.value > 0 ? `transform ${S.value}ms linear` : "none"
            })
          }, ee(a.value || " "), 5)
        ], 512)
      ])
    ])) : (T(), P("div", Jc, [
      p("div", qc, [
        te(ge, {
          name: "music",
          size: 20
        })
      ])
    ]));
  }
}), su = /* @__PURE__ */ St(tu, [["__scopeId", "data-v-18f3ad88"]]), nu = { class: "stmp-playlist" }, iu = {
  key: 0,
  class: "stmp-upload-area"
}, ru = ["aria-label"], ou = {
  key: 1,
  class: "stmp-empty"
}, lu = { class: "stmp-group-label" }, au = ["onClick"], cu = { class: "stmp-item-index" }, uu = { class: "stmp-item-info" }, fu = { class: "stmp-item-song" }, du = {
  key: 0,
  class: "stmp-item-artist"
}, hu = ["onClick"], pu = /* @__PURE__ */ wt({
  __name: "PlaylistView",
  setup(e) {
    const t = Jt(), s = Ie(), n = $e(() => s.settings.providers.find((h) => h.id === "local")?.enabled ?? !1), i = /* @__PURE__ */ pe(null), r = () => {
      i.value?.click();
    }, o = async (h) => {
      const v = h.target;
      if (!v.files || !v.files[0]) return;
      const m = v.files[0], A = `stmp:audio:${Date.now()}-${m.name}`, E = s.storage;
      E && (await E.setBlob(A, m), t.addLocalFile(m.name, A)), v.value = "";
    }, l = $e(() => {
      const h = {
        chat: [],
        user: [],
        local: []
      };
      return t.list.forEach((v, m) => {
        h[v.source] && h[v.source].push({ index: m, item: v });
      }), h;
    }), a = {
      chat: U("From Chat"),
      user: U("My List"),
      local: U("Local Files")
    };
    function f(h) {
      t.play(h);
    }
    function u(h) {
      t.removeItem(h);
    }
    return (h, v) => (T(), P("div", nu, [
      n.value ? (T(), P("div", iu, [
        p("input", {
          type: "file",
          accept: "audio/*",
          ref_key: "fileInputRef",
          ref: i,
          onChange: o,
          style: { display: "none" }
        }, null, 544),
        p("button", {
          class: "stmp-upload-btn",
          "aria-label": x(U)("Add local file"),
          onClick: r
        }, " + " + ee(x(U)("Add local file")), 9, ru)
      ])) : Me("", !0),
      x(t).isEmpty ? (T(), P("div", ou, ee(x(U)("No Songs")), 1)) : (T(), P(se, { key: 2 }, Ue(["chat", "user", "local"], (m) => p("div", {
        key: m,
        class: "stmp-group"
      }, [
        l.value[m].length ? (T(), P(se, { key: 0 }, [
          p("div", lu, ee(a[m]), 1),
          (T(!0), P(se, null, Ue(l.value[m], (A) => (T(), P("div", {
            key: A.item.id,
            class: ye(["stmp-item", { active: A.index === x(t).currentIndex }]),
            onClick: (E) => f(A.index)
          }, [
            p("span", cu, ee(A.index + 1), 1),
            p("div", uu, [
              p("span", fu, ee(A.item.song), 1),
              A.item.artist ? (T(), P("span", du, ee(A.item.artist), 1)) : Me("", !0)
            ]),
            p("button", {
              class: "stmp-item-del",
              onClick: Ht((E) => u(A.index), ["stop"])
            }, [
              te(ge, {
                name: "x",
                size: 14
              })
            ], 8, hu)
          ], 10, au))), 128))
        ], 64)) : Me("", !0)
      ])), 64))
    ]));
  }
}), gu = /* @__PURE__ */ St(pu, [["__scopeId", "data-v-a0435f62"]]), mu = { class: "stmp-search" }, vu = { class: "stmp-search-bar" }, yu = ["placeholder"], bu = ["disabled"], _u = {
  key: 0,
  class: "stmp-search-error"
}, xu = ["aria-label"], wu = {
  key: 1,
  class: "stmp-search-loading"
}, Su = {
  key: 2,
  class: "stmp-search-empty"
}, Cu = {
  key: 3,
  class: "stmp-search-hint"
}, Iu = {
  key: 4,
  class: "stmp-results"
}, Eu = ["onClick"], Tu = { class: "stmp-result-name" }, ku = {
  key: 0,
  class: "stmp-result-artist"
}, Au = ["aria-label", "onClick"], Mu = /* @__PURE__ */ wt({
  __name: "SearchView",
  setup(e) {
    const t = Sc(), s = Jt(), n = Ie(), i = /* @__PURE__ */ pe(t.keyword), r = /* @__PURE__ */ pe(/* @__PURE__ */ new Set()), o = /* @__PURE__ */ pe(null);
    async function l() {
      t.setKeyword(i.value);
      const m = So(n.settings.providers);
      await t.search(m);
    }
    const a = () => {
      l();
    };
    function f(m) {
      const A = m.provider + m.id;
      if (o.value === A) return;
      o.value = A;
      const E = s.list.length;
      s.addFromSearch(m);
      const H = s.list.length - 1;
      H >= E && s.play(H), setTimeout(() => {
        r.value.add(A), o.value = null;
      }, 600);
    }
    function u(m) {
      const A = m.provider + m.id;
      r.value.has(A) || (s.addFromSearch(m), r.value.add(A));
    }
    function h(m) {
      return r.value.has(m.provider + m.id);
    }
    function v(m) {
      return o.value === m.provider + m.id;
    }
    return (m, A) => (T(), P("div", mu, [
      p("div", vu, [
        mt(p("input", {
          "onUpdate:modelValue": A[0] || (A[0] = (E) => i.value = E),
          class: "stmp-search-input",
          placeholder: x(U)("Search Song..."),
          onKeydown: vo(l, ["enter"])
        }, null, 40, yu), [
          [Ns, i.value]
        ]),
        p("button", {
          class: "stmp-icon-btn",
          disabled: x(t).isSearching,
          onClick: l
        }, [
          x(t).isSearching ? (T(), bt(ge, {
            key: 1,
            name: "loader",
            size: 16,
            class: "stmp-spin"
          })) : (T(), bt(ge, {
            key: 0,
            name: "search",
            size: 16
          }))
        ], 8, bu)
      ]),
      x(t).error ? (T(), P("div", _u, [
        p("span", null, ee(x(t).error), 1),
        p("button", {
          class: "stmp-retry-btn",
          "aria-label": x(U)("Retry"),
          onClick: a
        }, ee(x(U)("Retry")), 9, xu)
      ])) : Me("", !0),
      x(t).isSearching ? (T(), P("div", wu, ee(x(U)("Searching...")), 1)) : i.value && !x(t).results.length ? (T(), P("div", Su, ee(x(U)("No results")), 1)) : !i.value && !x(t).results.length ? (T(), P("div", Cu, ee(x(U)("Type a song name to search")), 1)) : Me("", !0),
      x(t).results.length ? (T(), P("div", Iu, [
        (T(!0), P(se, null, Ue(x(t).results, (E) => (T(), P("div", {
          key: E.provider + E.id,
          class: ye(["stmp-result", { "stmp-result-playing": v(E) }])
        }, [
          p("div", {
            class: "stmp-result-info",
            onClick: (H) => f(E)
          }, [
            p("span", Tu, ee(E.name), 1),
            E.artist ? (T(), P("span", ku, ee(E.artist), 1)) : Me("", !0)
          ], 8, Eu),
          p("button", {
            class: ye(["stmp-icon-btn stmp-result-add", { added: h(E) }]),
            "aria-label": h(E) ? x(U)("Added") : x(U)("Add to list"),
            onClick: Ht((H) => u(E), ["stop"])
          }, [
            te(ge, {
              name: h(E) ? "check" : "plus",
              size: 16
            }, null, 8, ["name"])
          ], 10, Au)
        ], 2))), 128))
      ])) : Me("", !0)
    ]));
  }
}), Ru = /* @__PURE__ */ St(Mu, [["__scopeId", "data-v-a8d156af"]]), Pu = { class: "stmp-panel" }, $u = { class: "stmp-topbar stmp-drag-handle" }, Lu = ["aria-label"], Ou = { class: "stmp-cover-large" }, Du = ["src"], Nu = {
  key: 1,
  class: "stmp-cover-placeholder"
}, Fu = { class: "stmp-track-name" }, Uu = { class: "stmp-track-artist" }, Hu = { class: "stmp-lyric-header" }, Vu = { class: "stmp-track-name" }, ju = { class: "stmp-track-artist" }, Bu = {
  key: 0,
  class: "stmp-lyric-empty"
}, Ku = { class: "stmp-progress" }, Wu = ["value"], zu = { class: "stmp-time" }, Ju = { class: "stmp-controls" }, qu = { class: "stmp-ctrl-side stmp-search-side" }, Yu = ["aria-label"], Gu = ["aria-label"], Xu = ["aria-label"], Zu = ["aria-label"], Qu = ["aria-label"], ef = ["aria-label"], tf = { class: "stmp-ctrl-side stmp-volume-side" }, sf = ["aria-label"], nf = ["value"], rf = {
  key: 0,
  class: "stmp-overlay"
}, of = { class: "stmp-overlay-header" }, lf = { class: "stmp-overlay-title" }, af = ["aria-label"], cf = { class: "stmp-overlay-body" }, uf = /* @__PURE__ */ wt({
  __name: "PlayerPanel",
  emits: ["collapse"],
  setup(e) {
    const t = Lt(), s = Jt(), n = Ie(), i = /* @__PURE__ */ pe("cover"), r = /* @__PURE__ */ pe(null), o = /* @__PURE__ */ pe(!1), l = /* @__PURE__ */ pe(!1);
    let a = null;
    const f = $e(() => t.currentTrack?.cover || ""), u = () => {
      o.value = !0;
    };
    Le(
      () => t.currentTrack,
      () => {
        o.value = !1;
      }
    );
    const h = $e(
      () => t.duration > 0 ? t.currentTime / t.duration * 100 : 0
    ), v = /* @__PURE__ */ pe(0), m = /* @__PURE__ */ pe([]), A = /* @__PURE__ */ pe(null);
    function E(y, D) {
      y && (m.value[D] = y);
    }
    async function H() {
      await Pe();
      const y = t.currentLyricIndex, D = A.value;
      if (!D || y < 0) {
        v.value = 0;
        return;
      }
      const Y = m.value[y];
      if (!Y) return;
      const re = Y.offsetTop, oe = Y.offsetHeight, Q = D.clientHeight;
      v.value = re - Q / 2 + oe / 2;
    }
    Le(() => t.currentLyricIndex, H), Le(() => t.lyrics, () => {
      m.value = [], H();
    });
    function R(y) {
      const D = Math.floor(y / 60), Y = Math.floor(y % 60);
      return D + ":" + Y.toString().padStart(2, "0");
    }
    function S(y) {
      const D = y.target;
      t.seek(Number(D.value) / 100 * t.duration);
    }
    const V = ["list", "random", "single"], O = {
      list: "repeat",
      random: "shuffle",
      single: "repeat-one"
    };
    function z() {
      const y = n.settings.playMode, D = V.indexOf(y), Y = V[(D + 1) % V.length];
      n.setPlayMode(Y);
    }
    function X(y) {
      const D = y.target;
      t.setVolume(Number(D.value));
    }
    function K() {
      a && clearTimeout(a), l.value = !0;
    }
    function j() {
      a = setTimeout(() => {
        l.value = !1;
      }, 300);
    }
    function I() {
      t.volume > 0 ? t.setVolume(0) : t.setVolume(65);
    }
    function B(y) {
      r.value === y ? r.value = null : r.value = y;
    }
    function N() {
      r.value = null;
    }
    return (y, D) => (T(), P("div", Pu, [
      p("div", $u, [
        D[7] || (D[7] = p("div", { class: "stmp-topbar-spacer" }, null, -1)),
        p("button", {
          class: "stmp-icon-btn",
          "aria-label": x(U)("Collapse panel"),
          onClick: D[0] || (D[0] = Ht((Y) => y.$emit("collapse"), ["stop"]))
        }, [
          te(ge, {
            name: "chevron-down",
            size: 18
          })
        ], 8, Lu)
      ]),
      p("div", {
        class: "stmp-display",
        onClick: D[1] || (D[1] = (Y) => i.value = i.value === "cover" ? "lyric" : "cover")
      }, [
        p("div", {
          class: ye(["stmp-cover-mode", { hidden: i.value !== "cover" }])
        }, [
          p("div", Ou, [
            f.value && !o.value ? (T(), P("img", {
              key: 0,
              src: f.value,
              alt: "cover",
              onError: u
            }, null, 40, Du)) : (T(), P("div", Nu, [
              te(ge, {
                name: "music",
                size: 48
              })
            ]))
          ]),
          p("div", Fu, ee(x(t).currentTrack?.name || x(U)("No Song")), 1),
          p("div", Uu, ee(x(t).currentTrack?.artist || " "), 1)
        ], 2),
        p("div", {
          class: ye(["stmp-lyric-mode", { hidden: i.value !== "lyric" }])
        }, [
          p("div", Hu, [
            p("div", Vu, ee(x(t).currentTrack?.name || x(U)("No Song")), 1),
            p("div", ju, ee(x(t).currentTrack?.artist || " "), 1)
          ]),
          p("div", {
            ref_key: "lyricWindowRef",
            ref: A,
            class: "stmp-lyric-window"
          }, [
            x(t).lyrics.length === 0 ? (T(), P("div", Bu, [
              te(ge, {
                name: "music",
                size: 18
              })
            ])) : (T(), P("div", {
              key: 1,
              class: "stmp-lyric-scroll",
              style: Rt({ transform: `translateY(-${v.value}px)` })
            }, [
              (T(!0), P(se, null, Ue(x(t).lyrics, (Y, re) => (T(), P("div", {
                key: re,
                ref_for: !0,
                ref: (oe) => E(oe, re),
                class: ye(["stmp-lyric-line", { "stmp-lyric-active": re === x(t).currentLyricIndex }])
              }, ee(Y.text), 3))), 128))
            ], 4))
          ], 512)
        ], 2)
      ]),
      p("div", Ku, [
        p("input", {
          type: "range",
          min: "0",
          max: "100",
          step: "0.1",
          value: h.value,
          class: "stmp-range",
          onInput: S
        }, null, 40, Wu),
        p("div", zu, [
          p("span", null, ee(R(x(t).currentTime)), 1),
          p("span", null, ee(R(x(t).duration)), 1)
        ])
      ]),
      p("div", Ju, [
        p("div", qu, [
          p("button", {
            class: ye(["stmp-ctrl-btn", { active: r.value === "search" }]),
            "aria-label": x(U)("Search"),
            onClick: D[2] || (D[2] = Ht((Y) => B("search"), ["stop"]))
          }, [
            te(ge, {
              name: "search",
              size: 18
            })
          ], 10, Yu)
        ]),
        p("button", {
          class: "stmp-ctrl-btn",
          "aria-label": x(U)("Toggle play mode"),
          onClick: z
        }, [
          te(ge, {
            name: O[x(n).settings.playMode],
            size: 18
          }, null, 8, ["name"])
        ], 8, Gu),
        p("button", {
          class: "stmp-ctrl-btn",
          "aria-label": x(U)("Previous"),
          onClick: D[3] || (D[3] = (Y) => x(s).prev())
        }, [
          te(ge, {
            name: "prev",
            size: 18
          })
        ], 8, Xu),
        p("button", {
          class: "stmp-ctrl-btn stmp-play-btn",
          "aria-label": x(t).isPlaying ? x(U)("Pause") : x(U)("Play"),
          onClick: D[4] || (D[4] = (Y) => x(t).togglePlay())
        }, [
          te(ge, {
            name: x(t).isPlaying ? "pause" : "play",
            size: 24
          }, null, 8, ["name"])
        ], 8, Zu),
        p("button", {
          class: "stmp-ctrl-btn",
          "aria-label": x(U)("Next"),
          onClick: D[5] || (D[5] = (Y) => x(s).next())
        }, [
          te(ge, {
            name: "next",
            size: 18
          })
        ], 8, Qu),
        p("button", {
          class: ye(["stmp-ctrl-btn", { active: r.value === "list" }]),
          "aria-label": x(U)("Playlist"),
          onClick: D[6] || (D[6] = Ht((Y) => B("list"), ["stop"]))
        }, [
          te(ge, {
            name: "list-music",
            size: 18
          })
        ], 10, ef),
        p("div", tf, [
          p("div", {
            class: "stmp-volume-container",
            onMouseenter: K,
            onMouseleave: j
          }, [
            p("button", {
              class: "stmp-ctrl-btn",
              "aria-label": x(U)("Mute / Unmute"),
              onClick: I
            }, [
              te(ge, {
                name: x(t).volume === 0 ? "volume-mute" : "volume",
                size: 18
              }, null, 8, ["name"])
            ], 8, sf),
            p("div", {
              class: ye(["stmp-volume-popup", { show: l.value }])
            }, [
              p("input", {
                type: "range",
                min: "0",
                max: "100",
                value: x(t).volume,
                class: "stmp-volume-vertical",
                orient: "vertical",
                onInput: X
              }, null, 40, nf)
            ], 2)
          ], 32)
        ])
      ]),
      te(Ma, { name: "stmp-overlay" }, {
        default: Lr(() => [
          r.value ? (T(), P("div", rf, [
            p("div", of, [
              p("span", lf, ee(r.value === "list" ? x(U)("Playlist") : x(U)("Search")), 1),
              p("button", {
                class: "stmp-overlay-close",
                "aria-label": x(U)("Close"),
                onClick: Ht(N, ["stop"])
              }, [
                te(ge, {
                  name: "x",
                  size: 16
                })
              ], 8, af)
            ]),
            p("div", cf, [
              r.value === "list" ? (T(), bt(gu, { key: 0 })) : (T(), bt(Ru, { key: 1 }))
            ])
          ])) : Me("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), ff = /* @__PURE__ */ St(uf, [["__scopeId", "data-v-b6793b97"]]), df = /* @__PURE__ */ wt({
  __name: "App",
  setup(e) {
    const t = Ie(), s = Lt(), n = /* @__PURE__ */ pe(!1), i = /* @__PURE__ */ pe(null);
    let r = null;
    const o = $e(() => t.settings.widgetMode === "dock"), l = $e(() => t.settings.widgetMode === "hidden"), a = /* @__PURE__ */ pe(window.innerWidth <= 768), f = (N) => {
      N.key === "Escape" && (n.value = !1), N.key === " " && N.target === document.body && (N.preventDefault(), s.togglePlay());
    };
    let u = 0, h = 0, v = 0, m = 0, A = !1, E = !1, H = null, R = null;
    function S(N) {
      if (o.value) return;
      const y = N.target;
      if (y.closest("input, .stmp-result, .stmp-item, .stmp-upload-btn, .stmp-search-input, .stmp-controls, .stmp-lyrics, .stmp-overlay, .stmp-display, .stmp-overlay-close") || n.value && (!y.closest(".stmp-drag-handle") || y.closest("button")) || !n.value && y.closest("button"))
        return;
      const D = i.value?.getBoundingClientRect();
      D && (u = N.clientX, h = N.clientY, v = D.left, m = D.top, A = !1, E = !0, i.value && (i.value.style.left = D.left + "px", i.value.style.top = D.top + "px", i.value.style.right = "auto", i.value.style.bottom = "auto"), H = V, R = O, document.addEventListener("pointermove", H), document.addEventListener("pointerup", R), N.preventDefault());
    }
    function V(N) {
      if (!i.value || !E) return;
      const y = N.clientX - u, D = N.clientY - h;
      (Math.abs(y) > 3 || Math.abs(D) > 3) && (A = !0);
      let Y = v + y, re = m + D;
      const oe = i.value.offsetWidth || 60, Q = i.value.offsetHeight || 40, ce = window.innerWidth - oe, it = window.innerHeight - Q;
      Y = Math.max(0, Math.min(Y, ce)), re = Math.max(0, Math.min(re, it)), i.value.style.left = Y + "px", i.value.style.top = re + "px";
    }
    function O() {
      if (E = !1, H && document.removeEventListener("pointermove", H), R && document.removeEventListener("pointerup", R), H = null, R = null, !A) {
        I();
        return;
      }
      if (i.value) {
        const N = i.value.getBoundingClientRect();
        t.setPosition({ x: N.left, y: N.top }), n.value && Pe(() => z());
      }
    }
    function z() {
      if (!i.value) return;
      const N = i.value.getBoundingClientRect(), y = i.value.offsetWidth, D = i.value.offsetHeight;
      let Y = N.left, re = N.top;
      Y + y > window.innerWidth && (Y = window.innerWidth - y), re + D > window.innerHeight && (re = window.innerHeight - D), Y < 0 && (Y = 0), re < 0 && (re = 0), i.value.style.left = Y + "px", i.value.style.top = re + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", t.setPosition({ x: Y, y: re });
    }
    function X() {
      if (!i.value || !o.value) return;
      const N = document.querySelector("#send_form");
      if (!N) return;
      const y = N.getBoundingClientRect(), D = i.value.offsetHeight || 38, Y = Math.max(80, y.top - 8);
      i.value.style.maxHeight = Y + "px";
      let re = y.top - Math.min(D, Y);
      if (re < 4 && (re = 4), window.innerWidth <= 768)
        i.value.style.left = y.left + "px", i.value.style.width = y.width + "px";
      else {
        const oe = t.settings.dockAlign === "right", Q = i.value.offsetWidth;
        oe ? i.value.style.left = y.right - Q + "px" : i.value.style.left = y.left + "px", i.value.style.width = "";
      }
      i.value.style.top = re + "px", i.value.style.right = "auto", i.value.style.bottom = "auto";
    }
    function K() {
      if (!i.value || o.value) return;
      const N = t.settings.position;
      N ? (i.value.style.left = N.x + "px", i.value.style.top = N.y + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", window.innerWidth <= 768 && Pe(() => z())) : (i.value.style.right = "16px", i.value.style.top = "16px", i.value.style.left = "auto", i.value.style.bottom = "auto");
    }
    function j(N) {
      if (o.value && !n.value) {
        if (N.target.closest("button, input")) return;
        I();
        return;
      }
      !o.value && !n.value && !s.currentTrack && I();
    }
    function I() {
      n.value = !n.value, Pe(() => {
        o.value ? X() : t.settings.position && z();
      });
    }
    Le(() => t.settings.widgetMode, (N) => {
      n.value = !1, i.value && (i.value.style.width = "", i.value.style.left = "", i.value.style.top = "", i.value.style.right = "", i.value.style.bottom = "", i.value.style.maxHeight = ""), Pe(() => {
        N === "dock" ? X() : K();
      });
    }), Le(() => t.settings.dockAlign, () => {
      o.value && Pe(() => X());
    }), an(() => {
      Pe(() => {
        o.value ? X() : K();
      }), i.value && typeof ResizeObserver < "u" && (r = new ResizeObserver(() => {
        o.value && X();
      }), r.observe(i.value)), window.addEventListener("resize", B), window.addEventListener("keydown", f);
    });
    function B() {
      a.value = window.innerWidth <= 768, o.value ? Pe(() => X()) : Pe(() => z());
    }
    return ei(() => {
      O(), r && (r.disconnect(), r = null), window.removeEventListener("resize", B), window.removeEventListener("keydown", f);
    }), (N, y) => l.value ? Me("", !0) : (T(), P("div", {
      key: 0,
      ref_key: "widgetRef",
      ref: i,
      class: ye(["stmp-widget", {
        "stmp-expanded": n.value,
        "stmp-collapsed": !n.value,
        "stmp-dock": o.value
      }]),
      onPointerdown: S,
      onClick: j
    }, [
      n.value ? (T(), bt(ff, {
        key: 1,
        onCollapse: I
      })) : (T(), bt(su, {
        key: 0,
        "is-dock": o.value,
        "is-mobile": a.value
      }, null, 8, ["is-dock", "is-mobile"]))
    ], 34));
  }
}), hf = /* @__PURE__ */ St(df, [["__scopeId", "data-v-b0d28107"]]), pf = { class: "stmp-switch-row" }, gf = {
  key: 0,
  class: "stmp-switch-label"
}, mf = { class: "stmp-switch" }, vf = ["checked"], yf = /* @__PURE__ */ wt({
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
    return (i, r) => (T(), P("label", pf, [
      e.label ? (T(), P("span", gf, ee(e.label), 1)) : Me("", !0),
      p("span", mf, [
        p("input", {
          type: "checkbox",
          checked: e.modelValue,
          onChange: n
        }, null, 40, vf),
        r[0] || (r[0] = p("span", { class: "stmp-switch-track" }, [
          p("span", { class: "stmp-switch-thumb" })
        ], -1))
      ])
    ]));
  }
}), Zi = /* @__PURE__ */ St(yf, [["__scopeId", "data-v-d86a29bd"]]), bf = { class: "stmp-settings" }, _f = { class: "stmp-tab-bar" }, xf = ["onClick"], wf = { class: "stmp-tab-content" }, Sf = { class: "stmp-tab-panel" }, Cf = { class: "stmp-setting-group" }, If = { class: "stmp-setting-label" }, Ef = { class: "stmp-mode-toggle" }, Tf = ["onClick"], kf = {
  key: 0,
  class: "stmp-setting-group"
}, Af = { class: "stmp-setting-label" }, Mf = { class: "stmp-mode-toggle" }, Rf = ["onClick"], Pf = { class: "stmp-setting-group" }, $f = { class: "stmp-setting-label" }, Lf = ["value"], Of = { class: "stmp-setting-group" }, Df = {
  class: "stmp-setting-label",
  for: "stmp-playmode"
}, Nf = ["value"], Ff = ["value"], Uf = { class: "stmp-tab-panel" }, Hf = {
  key: 0,
  class: "stmp-provider-fields"
}, Vf = ["onUpdate:modelValue", "placeholder"], jf = ["onUpdate:modelValue", "placeholder"], Bf = { class: "stmp-tab-panel" }, Kf = { class: "stmp-setting-group" }, Wf = { class: "stmp-setting-label" }, zf = { class: "stmp-rules" }, Jf = ["onClick"], qf = { class: "stmp-rule-add" }, Yf = ["placeholder"], Gf = { class: "stmp-tab-panel" }, Xf = { class: "stmp-data-btns" }, Zf = /* @__PURE__ */ wt({
  __name: "SettingsView",
  setup(e) {
    const t = Ie(), s = /* @__PURE__ */ pe("playback"), n = [
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
    ], o = [
      { value: "left", label: U("Left"), icon: "fa-solid fa-align-left" },
      { value: "right", label: U("Right"), icon: "fa-solid fa-align-right" }
    ];
    function l(H) {
      const R = H.target;
      t.setVolume(Number(R.value));
    }
    function a(H) {
      const R = H.target;
      t.setPlayMode(R.value);
    }
    const f = {
      netease: U("NetEase"),
      local: U("Local Files"),
      custom: U("Custom API")
    };
    function u(H) {
      const R = t.settings.providers.find((S) => S.id === H);
      R && (R.enabled = !R.enabled, t.save());
    }
    const h = /* @__PURE__ */ pe("");
    function v() {
      const H = h.value.trim();
      H && (t.addCustomCueRule(H), h.value = "");
    }
    function m(H) {
      t.removeCustomCueRule(H);
    }
    const A = () => {
      const H = JSON.stringify(t.settings, null, 2), R = new Blob([H], { type: "application/json" }), S = URL.createObjectURL(R), V = document.createElement("a");
      V.href = S, V.download = "st-music-player-settings.json", V.click(), URL.revokeObjectURL(S);
    }, E = () => {
      const H = document.createElement("input");
      H.type = "file", H.accept = ".json", H.onchange = async (R) => {
        const S = R.target.files?.[0];
        if (!S) return;
        const V = await S.text();
        try {
          const O = JSON.parse(V);
          if (typeof O != "object" || O === null) throw new Error("Not an object");
          const z = ["volume", "playMode", "position", "widgetMode", "autoPlayOnNewCue", "providers", "customCueRules"], X = {};
          for (const K of z)
            K in O && (X[K] = O[K]);
          if (typeof X.volume != "number" || X.volume < 0 || X.volume > 100)
            throw new Error("Invalid volume");
          if (typeof X.playMode != "string" || !["list", "random", "single"].includes(X.playMode))
            throw new Error("Invalid playMode");
          if (X.providers && !Array.isArray(X.providers))
            throw new Error("Invalid providers");
          if (X.customCueRules && !Array.isArray(X.customCueRules))
            throw new Error("Invalid customCueRules");
          Object.assign(t.settings, X), t.save(), toastr.success(U("Data imported"));
        } catch (O) {
          console.error("Import failed", O), toastr.error(U("Import failed") + ": " + (O instanceof Error ? O.message : U("Invalid JSON")));
        }
      }, H.click();
    };
    return (H, R) => (T(), P("div", bf, [
      p("div", _f, [
        (T(), P(se, null, Ue(n, (S) => p("div", {
          key: S.id,
          class: ye(["stmp-tab", { active: s.value === S.id }]),
          onClick: (V) => s.value = S.id
        }, [
          p("i", {
            class: ye(S.icon)
          }, null, 2),
          p("span", null, ee(S.label), 1)
        ], 10, xf)), 64))
      ]),
      p("div", wf, [
        mt(p("div", Sf, [
          p("div", Cf, [
            p("label", If, ee(x(U)("Widget Mode")), 1),
            p("div", Ef, [
              (T(), P(se, null, Ue(r, (S) => p("div", {
                key: S.value,
                class: ye(["menu_button menu_button_icon stmp-mode-btn", { toggled: x(t).settings.widgetMode === S.value }]),
                onClick: (V) => x(t).setWidgetMode(S.value)
              }, [
                p("i", {
                  class: ye(S.icon)
                }, null, 2),
                p("span", null, ee(S.label), 1)
              ], 10, Tf)), 64))
            ])
          ]),
          x(t).settings.widgetMode === "dock" ? (T(), P("div", kf, [
            p("label", Af, ee(x(U)("Dock Alignment")), 1),
            p("div", Mf, [
              (T(), P(se, null, Ue(o, (S) => p("div", {
                key: S.value,
                class: ye(["menu_button menu_button_icon stmp-mode-btn", { toggled: x(t).settings.dockAlign === S.value }]),
                onClick: (V) => x(t).setDockAlign(S.value)
              }, [
                p("i", {
                  class: ye(S.icon)
                }, null, 2),
                p("span", null, ee(S.label), 1)
              ], 10, Rf)), 64))
            ])
          ])) : Me("", !0),
          p("div", Pf, [
            p("label", $f, ee(x(U)("Default Volume")) + ": " + ee(x(t).settings.volume), 1),
            p("input", {
              type: "range",
              min: "0",
              max: "100",
              value: x(t).settings.volume,
              onInput: l
            }, null, 40, Lf)
          ]),
          p("div", Of, [
            p("label", Df, ee(x(U)("Default Play Mode")), 1),
            p("select", {
              id: "stmp-playmode",
              class: "text_pole",
              value: x(t).settings.playMode,
              onChange: a
            }, [
              (T(), P(se, null, Ue(i, (S) => p("option", {
                key: S.value,
                value: S.value
              }, ee(S.label), 9, Ff)), 64))
            ], 40, Nf)
          ]),
          te(Zi, {
            "model-value": x(t).settings.autoPlayOnNewCue,
            label: x(U)("Auto-play on new cue"),
            "onUpdate:modelValue": R[0] || (R[0] = (S) => {
              x(t).settings.autoPlayOnNewCue = S, x(t).save();
            })
          }, null, 8, ["model-value", "label"])
        ], 512), [
          [Rs, s.value === "playback"]
        ]),
        mt(p("div", Uf, [
          (T(!0), P(se, null, Ue(x(t).settings.providers, (S) => (T(), P("div", {
            key: S.id,
            class: "stmp-provider-card"
          }, [
            te(Zi, {
              "model-value": S.enabled,
              label: f[S.id] || S.id,
              "onUpdate:modelValue": () => u(S.id)
            }, null, 8, ["model-value", "label", "onUpdate:modelValue"]),
            S.id === "custom" && S.enabled ? (T(), P("div", Hf, [
              mt(p("input", {
                class: "text_pole",
                "onUpdate:modelValue": (V) => S.config.searchURL = V,
                placeholder: x(U)("Search URL"),
                onChange: R[1] || (R[1] = (V) => x(t).save())
              }, null, 40, Vf), [
                [Ns, S.config.searchURL]
              ]),
              mt(p("input", {
                class: "text_pole",
                "onUpdate:modelValue": (V) => S.config.resolveURL = V,
                placeholder: x(U)("Resolve URL"),
                onChange: R[2] || (R[2] = (V) => x(t).save())
              }, null, 40, jf), [
                [Ns, S.config.resolveURL]
              ])
            ])) : Me("", !0)
          ]))), 128))
        ], 512), [
          [Rs, s.value === "providers"]
        ]),
        mt(p("div", Bf, [
          p("div", Kf, [
            p("label", Wf, ee(x(U)("Custom Cue Rules (Regex)")), 1),
            p("div", zf, [
              (T(!0), P(se, null, Ue(x(t).settings.customCueRules, (S, V) => (T(), P("div", {
                key: V,
                class: "stmp-rule"
              }, [
                p("code", null, ee(S), 1),
                p("div", {
                  class: "menu_button menu_button_icon stmp-rule-del",
                  onClick: (O) => m(V)
                }, [...R[4] || (R[4] = [
                  p("i", { class: "fa-solid fa-xmark" }, null, -1)
                ])], 8, Jf)
              ]))), 128))
            ]),
            p("div", qf, [
              mt(p("input", {
                "onUpdate:modelValue": R[3] || (R[3] = (S) => h.value = S),
                class: "text_pole",
                placeholder: x(U)("Add regex rule..."),
                onKeydown: vo(v, ["enter"])
              }, null, 40, Yf), [
                [Ns, h.value]
              ]),
              p("div", {
                class: "menu_button menu_button_icon stmp-rule-add-btn",
                onClick: v
              }, [...R[5] || (R[5] = [
                p("i", { class: "fa-solid fa-plus" }, null, -1)
              ])])
            ])
          ])
        ], 512), [
          [Rs, s.value === "cue"]
        ]),
        mt(p("div", Gf, [
          p("div", Xf, [
            p("div", {
              class: "menu_button menu_button_icon stmp-data-btn",
              onClick: A
            }, [
              R[6] || (R[6] = p("i", { class: "fa-solid fa-file-export" }, null, -1)),
              p("span", null, ee(x(U)("Export data")), 1)
            ]),
            p("div", {
              class: "menu_button menu_button_icon stmp-data-btn",
              onClick: E
            }, [
              R[7] || (R[7] = p("i", { class: "fa-solid fa-file-import" }, null, -1)),
              p("span", null, ee(x(U)("Import data")), 1)
            ])
          ])
        ], 512), [
          [Rs, s.value === "data"]
        ])
      ])
    ]));
  }
}), Qf = /* @__PURE__ */ St(Zf, [["__scopeId", "data-v-b82909bc"]]);
class ed {
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
        const u = l(f[0]);
        this.emit(o, u);
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
function td() {
  return new ed();
}
const sd = [
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
  for (const i of sd)
    for (const r of Qi(i, e)) n(r);
  for (const i of t)
    try {
      const r = new RegExp(i, "g");
      for (const o of Qi(r, e)) n(o);
    } catch {
    }
  return [...s.values()].sort((i, r) => i.index - r.index).map((i) => i.cue);
}
class nd {
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
let Kt = null, at = null, hs = null, ps = null, Wt = null, Ys = null;
const id = `
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
function rd() {
  const e = $("#extensions_settings2");
  if (!e || !e.length || (e.append(id), ps = e.children(".inline-drawer").last()[0] ?? null, !ps)) return;
  const t = ps.querySelector("#stmp-settings-mount");
  t && Ys && (Wt = yo(Qf), Wt.use(Ys), Wt.mount(t));
}
function od() {
  Wt && (Wt.unmount(), Wt = null), ps?.remove(), ps = null;
}
function ld(e, t, s) {
  at = td(), at.on("chat-changed", () => {
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
  }), at.on("message-generated", (n) => {
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
  }), at.on("message-updated", (n) => {
    n.messageId !== void 0 && t.handleMessageUpdate(n.messageId);
  }), at.on("message-deleted", (n) => {
    n.messageId !== void 0 && t.handleMessageDelete(n.messageId);
  }), at.on("message-swiped", (n) => {
    n.messageId !== void 0 && t.handleMessageUpdate(n.messageId);
  }), at.start();
}
function ad(e, t, s) {
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
async function fd() {
  try {
    const e = document.createElement("div");
    e.id = "st-music-player-root", document.documentElement.appendChild(e);
    const t = oc();
    Ys = t, Kt = yo(hf), Kt.use(t), Kt.mount(e);
    const s = Ie(), n = mc();
    s.init(n);
    const i = Lt();
    i.init(), i.setVolume(s.settings.volume);
    const r = new nd((a) => SillyTavern.getContext().chat[a]?.mes), o = Jt();
    o.init(r), rd();
    const l = SillyTavern.getContext();
    hs = () => {
      ld(r, o, s), ad(r, o, s);
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
  if (at?.stop(), at = null, Kt) {
    try {
      Lt().destroy();
    } catch {
    }
    Kt.unmount(), Kt = null;
  }
  const e = document.getElementById("st-music-player-root");
  e && e.remove(), od(), Ys = null;
}
function dd() {
  Co();
}
async function cd() {
  try {
    const e = SillyTavern.getContext();
    delete e.extensionSettings[ds], e.saveSettingsDebounced();
  } catch (e) {
    console.error("[ST-Music-Player] clean: failed to delete settings:", e);
  }
  try {
    const e = SillyTavern.libs?.localforage;
    if (e && typeof e.keys == "function") {
      const t = await e.keys();
      await Promise.all(
        t.filter((s) => s.startsWith(ds) || s.startsWith("stmp:")).map((s) => e.removeItem(s))
      );
    }
  } catch (e) {
    console.error("[ST-Music-Player] clean: failed to clear localforage:", e);
  }
}
async function hd() {
  await cd(), Co();
}
export {
  cd as clean,
  hd as delete,
  Co as destroy,
  dd as disable,
  fd as init
};
