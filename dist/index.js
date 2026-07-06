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
const de = {}, jt = [], tt = () => {
}, tr = () => !1, Gs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Xs = (e) => e.startsWith("onUpdate:"), xe = Object.assign, Bn = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, To = Object.prototype.hasOwnProperty, le = (e, t) => To.call(e, t), z = Array.isArray, Bt = (e) => Ss(e) === "[object Map]", sr = (e) => Ss(e) === "[object Set]", ci = (e) => Ss(e) === "[object Date]", Z = (e) => typeof e == "function", me = (e) => typeof e == "string", Ve = (e) => typeof e == "symbol", ae = (e) => e !== null && typeof e == "object", nr = (e) => (ae(e) || Z(e)) && Z(e.then) && Z(e.catch), ir = Object.prototype.toString, Ss = (e) => ir.call(e), ko = (e) => Ss(e).slice(8, -1), rr = (e) => Ss(e) === "[object Object]", Zs = (e) => me(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, rs = /* @__PURE__ */ jn(
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
), et = (e, t) => !Object.is(e, t), Os = (e, ...t) => {
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
}, Po = (e) => {
  const t = me(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ui;
const en = () => ui || (ui = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Pt(e) {
  if (z(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], i = me(n) ? Oo(n) : Pt(n);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (me(e) || ae(e))
    return e;
}
const Ro = /;(?![^(]*\))/g, $o = /:([^]+)/, Lo = /\/\*[^]*?\*\//g;
function Oo(e) {
  const t = {};
  return e.replace(Lo, "").split(Ro).forEach((s) => {
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
  else if (z(e))
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
  if (s = z(e), n = z(t), s || n)
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
const cr = (e) => !!(e && e.__v_isRef === !0), X = (e) => me(e) ? e : e == null ? "" : z(e) || ae(e) && (e.toString === ir || !Z(e.toString)) ? cr(e) ? X(e.value) : JSON.stringify(e, ur, 2) : String(e), ur = (e, t) => cr(t) ? ur(e, t.value) : Bt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], r) => (s[mn(n, r) + " =>"] = i, s),
    {}
  )
} : sr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => mn(s))
} : Ve(t) ? mn(t) : ae(t) && !z(t) && !rr(t) ? String(t) : t, mn = (e, t = "") => {
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
let gr = 0, os, ls;
function mr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ls, ls = e;
    return;
  }
  e.next = os, os = e;
}
function zn() {
  gr++;
}
function Jn() {
  if (--gr > 0)
    return;
  if (ls) {
    let t = ls;
    for (ls = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; os; ) {
    let t = os;
    for (os = void 0; t; ) {
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
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ms) || (e.globalVersion = ms, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !An(e))))
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
let ms = 0;
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
    this.version++, ms++, this.notify(t);
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
const Fs = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ Symbol(
  ""
), Mn = /* @__PURE__ */ Symbol(
  ""
), vs = /* @__PURE__ */ Symbol(
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
function ft(e, t, s, n, i, r) {
  const o = Fs.get(e);
  if (!o) {
    ms++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (zn(), t === "clear")
    o.forEach(l);
  else {
    const a = z(e), f = a && Zs(s);
    if (a && s === "length") {
      const c = Number(n);
      o.forEach((h, v) => {
        (v === "length" || v === vs || !Ve(v) && v >= c) && l(h);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), f && l(o.get(vs)), t) {
        case "add":
          a ? f && l(o.get("length")) : (l(o.get(Rt)), Bt(e) && l(o.get(Mn)));
          break;
        case "delete":
          a || (l(o.get(Rt)), Bt(e) && l(o.get(Mn)));
          break;
        case "set":
          Bt(e) && l(o.get(Rt));
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
  return t === e ? t : (Se(t, "iterate", vs), /* @__PURE__ */ Oe(e) ? t : t.map(We));
}
function tn(e) {
  return Se(e = /* @__PURE__ */ ie(e), "iterate", vs), e;
}
function Ze(e, t) {
  return /* @__PURE__ */ pt(e) ? Jt(/* @__PURE__ */ ht(e) ? We(t) : t) : We(t);
}
const Bo = {
  __proto__: null,
  [Symbol.iterator]() {
    return yn(this, Symbol.iterator, (e) => Ze(this, e));
  },
  concat(...e) {
    return Ot(this).concat(
      ...e.map((t) => z(t) ? Ot(t) : t)
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
    return Zt(this, "pop");
  },
  push(...e) {
    return Zt(this, "push", e);
  },
  reduce(e, ...t) {
    return di(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return di(this, "reduceRight", e, t);
  },
  shift() {
    return Zt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return rt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Zt(this, "splice", e);
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
    return Zt(this, "unshift", e);
  },
  values() {
    return yn(this, "values", (e) => Ze(this, e));
  }
};
function yn(e, t, s) {
  const n = tn(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ Oe(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = s(r.value)), r;
  }), i;
}
const Ko = Array.prototype;
function rt(e, t, s, n, i, r) {
  const o = tn(e), l = o !== e && !/* @__PURE__ */ Oe(e), a = o[t];
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
  const c = a.call(o, f, n);
  return l && i ? i(c) : c;
}
function di(e, t, s, n) {
  const i = tn(e), r = i !== e && !/* @__PURE__ */ Oe(e);
  let o = s, l = !1;
  i !== e && (r ? (l = n.length === 0, o = function(f, c, h) {
    return l && (l = !1, f = Ze(e, f)), s.call(this, f, Ze(e, c), h, e);
  }) : s.length > 3 && (o = function(f, c, h) {
    return s.call(this, f, c, h, e);
  }));
  const a = i[t](o, ...n);
  return l ? Ze(e, a) : a;
}
function bn(e, t, s) {
  const n = /* @__PURE__ */ ie(e);
  Se(n, "iterate", vs);
  const i = n[t](...s);
  return (i === -1 || i === !1) && /* @__PURE__ */ nn(s[0]) ? (s[0] = /* @__PURE__ */ ie(s[0]), n[t](...s)) : i;
}
function Zt(e, t, s = []) {
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
    const o = z(t);
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
      return i && ae(a) ? /* @__PURE__ */ Rn(a) : a;
    }
    return ae(l) ? i ? /* @__PURE__ */ Rn(l) : /* @__PURE__ */ sn(l) : l;
  }
}
class Cr extends Sr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, i) {
    let r = t[s];
    const o = z(t) && Zs(s);
    if (!this._isShallow) {
      const f = /* @__PURE__ */ pt(r);
      if (!/* @__PURE__ */ Oe(n) && !/* @__PURE__ */ pt(n) && (r = /* @__PURE__ */ ie(r), n = /* @__PURE__ */ ie(n)), !o && /* @__PURE__ */ ve(r) && !/* @__PURE__ */ ve(n))
        return f || (r.value = n), !0;
    }
    const l = o ? Number(s) < t.length : le(t, s), a = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ ve(t) ? t : i
    );
    return t === /* @__PURE__ */ ie(i) && a && (l ? et(n, r) && ft(t, "set", s, n) : ft(t, "add", s, n)), a;
  }
  deleteProperty(t, s) {
    const n = le(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && ft(t, "delete", s, void 0), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Ve(s) || !wr.has(s)) && Se(t, "has", s), n;
  }
  ownKeys(t) {
    return Se(
      t,
      "iterate",
      z(t) ? "length" : Rt
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
const Pn = (e) => e, ks = (e) => Reflect.getPrototypeOf(e);
function Xo(e, t, s) {
  return function(...n) {
    const i = this.__v_raw, r = /* @__PURE__ */ ie(i), o = Bt(r), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, f = i[e](...n), c = s ? Pn : t ? Jt : We;
    return !t && Se(
      r,
      "iterate",
      a ? Mn : Rt
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
      const r = this.__v_raw, o = /* @__PURE__ */ ie(r), l = /* @__PURE__ */ ie(i);
      e || (et(i, l) && Se(o, "get", i), Se(o, "get", l));
      const { has: a } = ks(o), f = t ? Pn : e ? Jt : We;
      if (a.call(o, i))
        return f(r.get(i));
      if (a.call(o, l))
        return f(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Se(/* @__PURE__ */ ie(i), "iterate", Rt), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ ie(r), l = /* @__PURE__ */ ie(i);
      return e || (et(i, l) && Se(o, "has", i), Se(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, a = /* @__PURE__ */ ie(l), f = t ? Pn : e ? Jt : We;
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
        const r = /* @__PURE__ */ ie(this), o = ks(r), l = /* @__PURE__ */ ie(i), a = !t && !/* @__PURE__ */ Oe(i) && !/* @__PURE__ */ pt(i) ? l : i;
        return o.has.call(r, a) || et(i, a) && o.has.call(r, i) || et(l, a) && o.has.call(r, l) || (r.add(a), ft(r, "add", a, a)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ Oe(r) && !/* @__PURE__ */ pt(r) && (r = /* @__PURE__ */ ie(r));
        const o = /* @__PURE__ */ ie(this), { has: l, get: a } = ks(o);
        let f = l.call(o, i);
        f || (i = /* @__PURE__ */ ie(i), f = l.call(o, i));
        const c = a.call(o, i);
        return o.set(i, r), f ? et(r, c) && ft(o, "set", i, r) : ft(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ ie(this), { has: o, get: l } = ks(r);
        let a = o.call(r, i);
        a || (i = /* @__PURE__ */ ie(i), a = o.call(r, i)), l && l.call(r, i);
        const f = r.delete(i);
        return a && ft(r, "delete", i, void 0), f;
      },
      clear() {
        const i = /* @__PURE__ */ ie(this), r = i.size !== 0, o = i.clear();
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
    Go,
    el,
    Er
  );
}
// @__NO_SIDE_EFFECTS__
function Rn(e) {
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
function ht(e) {
  return /* @__PURE__ */ pt(e) ? /* @__PURE__ */ ht(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function pt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Oe(e) {
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
const We = (e) => ae(e) ? /* @__PURE__ */ sn(e) : e, Jt = (e) => ae(e) ? /* @__PURE__ */ Rn(e) : e;
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
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Oe(t) || /* @__PURE__ */ pt(t);
    t = n ? t : /* @__PURE__ */ ie(t), et(t, s) && (this._rawValue = t, this._value = n ? t : We(t), this.dep.trigger());
  }
}
function b(e) {
  return /* @__PURE__ */ ve(e) ? e.value : e;
}
const ll = {
  get: (e, t, s) => t === "__v_raw" ? e : b(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t];
    return /* @__PURE__ */ ve(i) && !/* @__PURE__ */ ve(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function kr(e) {
  return /* @__PURE__ */ ht(e) ? e : new Proxy(e, ll);
}
// @__NO_SIDE_EFFECTS__
function al(e) {
  const t = z(e) ? new Array(e.length) : {};
  for (const s in e)
    t[s] = ul(e, s);
  return t;
}
class cl {
  constructor(t, s, n) {
    this._object = t, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = Ve(s) ? s : String(s), this._raw = /* @__PURE__ */ ie(t);
    let i = !0, r = t;
    if (!z(t) || Ve(this._key) || !Zs(this._key))
      do
        i = !/* @__PURE__ */ nn(r) || /* @__PURE__ */ Oe(r);
      while (i && (r = r.__v_raw));
    this._shallow = i;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = b(t)), this._value = t === void 0 ? this._defaultValue : t;
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
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Yn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ms - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
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
const Ms = {}, Us = /* @__PURE__ */ new WeakMap();
let At;
function hl(e, t = !1, s = At) {
  if (s) {
    let n = Us.get(s);
    n || Us.set(s, n = []), n.push(e);
  }
}
function pl(e, t, s = de) {
  const { immediate: n, deep: i, once: r, scheduler: o, augmentJob: l, call: a } = s, f = (E) => i ? E : /* @__PURE__ */ Oe(E) || i === !1 || i === 0 ? dt(E, 1) : dt(E);
  let c, h, v, m, L = !1, M = !1;
  if (/* @__PURE__ */ ve(e) ? (h = () => e.value, L = /* @__PURE__ */ Oe(e)) : /* @__PURE__ */ ht(e) ? (h = () => f(e), L = !0) : z(e) ? (M = !0, L = e.some((E) => /* @__PURE__ */ ht(E) || /* @__PURE__ */ Oe(E)), h = () => e.map((E) => {
    if (/* @__PURE__ */ ve(E))
      return E.value;
    if (/* @__PURE__ */ ht(E))
      return f(E);
    if (Z(E))
      return a ? a(E, 2) : E();
  })) : Z(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (v) {
      st();
      try {
        v();
      } finally {
        nt();
      }
    }
    const E = At;
    At = c;
    try {
      return a ? a(e, 3, [m]) : e(m);
    } finally {
      At = E;
    }
  } : h = tt, t && i) {
    const E = h, B = i === !0 ? 1 / 0 : i;
    h = () => dt(E(), B);
  }
  const Y = hr(), H = () => {
    c.stop(), Y && Y.active && Bn(Y.effects, c);
  };
  if (r && t) {
    const E = t;
    t = (...B) => {
      const se = E(...B);
      return H(), se;
    };
  }
  let A = M ? new Array(e.length).fill(Ms) : Ms;
  const C = (E) => {
    if (!(!(c.flags & 1) || !c.dirty && !E))
      if (t) {
        const B = c.run();
        if (E || i || L || (M ? B.some((se, V) => et(se, A[V])) : et(B, A))) {
          v && v();
          const se = At;
          At = c;
          try {
            const V = [
              B,
              // pass undefined as the old value when it's changed for the first time
              A === Ms ? void 0 : M && A[0] === Ms ? [] : A,
              m
            ];
            A = B, a ? a(t, 3, V) : (
              // @ts-expect-error
              t(...V)
            );
          } finally {
            At = se;
          }
        }
      } else
        c.run();
  };
  return l && l(C), c = new pr(h), c.scheduler = o ? () => o(C, !1) : C, m = (E) => hl(E, !1, c), v = c.onStop = () => {
    const E = Us.get(c);
    if (E) {
      if (a)
        a(E, 4);
      else
        for (const B of E) B();
      Us.delete(c);
    }
  }, t ? n ? C(!0) : A = c.run() : o ? o(C.bind(null, !0), !0) : c.run(), H.pause = c.pause.bind(c), H.resume = c.resume.bind(c), H.stop = H, H;
}
function dt(e, t = 1 / 0, s) {
  if (t <= 0 || !ae(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ ve(e))
    dt(e.value, t, s);
  else if (z(e))
    for (let n = 0; n < e.length; n++)
      dt(e[n], t, s);
  else if (sr(e) || Bt(e))
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
function Cs(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    rn(i, t, s);
  }
}
function je(e, t, s, n) {
  if (Z(e)) {
    const i = Cs(e, t, s, n);
    return i && nr(i) && i.catch((r) => {
      rn(r, t, s);
    }), i;
  }
  if (z(e)) {
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
      const c = l.ec;
      if (c) {
        for (let h = 0; h < c.length; h++)
          if (c[h](e, a, f) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      st(), Cs(r, null, 10, [
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
const Kt = [];
let yt = null, Ft = 0;
const Ar = /* @__PURE__ */ Promise.resolve();
let Hs = null;
function Re(e) {
  const t = Hs || Ar;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ml(e) {
  let t = Xe + 1, s = Ee.length;
  for (; t < s; ) {
    const n = t + s >>> 1, i = Ee[n], r = ys(i);
    r < e || r === e && i.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function Qn(e) {
  if (!(e.flags & 1)) {
    const t = ys(e), s = Ee[Ee.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ys(s) ? Ee.push(e) : Ee.splice(ml(t), 0, e), e.flags |= 1, Mr();
  }
}
function Mr() {
  Hs || (Hs = Ar.then(Rr));
}
function vl(e) {
  z(e) ? Kt.push(...e) : yt && e.id === -1 ? yt.splice(Ft + 1, 0, e) : e.flags & 1 || (Kt.push(e), e.flags |= 1), Mr();
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
function Pr(e) {
  if (Kt.length) {
    const t = [...new Set(Kt)].sort(
      (s, n) => ys(s) - ys(n)
    );
    if (Kt.length = 0, yt) {
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
const ys = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Rr(e) {
  try {
    for (Xe = 0; Xe < Ee.length; Xe++) {
      const t = Ee[Xe];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Cs(
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
    Xe = -1, Ee.length = 0, Pr(), Hs = null, (Ee.length || Kt.length) && Rr();
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
function lt(e, t) {
  if (He === null)
    return e;
  const s = fn(He), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, a = de] = t[i];
    r && (Z(r) && (r = {
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
function as(e, t, s = !1) {
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
const _l = /* @__PURE__ */ Symbol.for("v-scx"), xl = () => as(_l);
function $e(e, t, s) {
  return Or(e, t, s);
}
function Or(e, t, s = de) {
  const { immediate: n, deep: i, flush: r, once: o } = s, l = xe({}, s), a = t && n || !t && r !== "post";
  let f;
  if (xs) {
    if (r === "sync") {
      const m = xl();
      f = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = tt, m.resume = tt, m.pause = tt, m;
    }
  }
  const c = ke;
  l.call = (m, L, M) => je(m, c, L, M);
  let h = !1;
  r === "post" ? l.scheduler = (m) => {
    Ae(m, c && c.suspense);
  } : r !== "sync" && (h = !0, l.scheduler = (m, L) => {
    L ? m() : Qn(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), h && (m.flags |= 2, c && (m.id = c.uid, m.i = c));
  };
  const v = pl(e, t, l);
  return xs && (f ? f.push(v) : a && v()), v;
}
function wl(e, t, s) {
  const n = this.proxy, i = me(e) ? e.includes(".") ? Dr(n, e) : () => n[e] : e.bind(n, n);
  let r;
  Z(t) ? r = t : (r = t.handler, s = t);
  const o = Is(this), l = Or(i, r.bind(n), s);
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
const Sl = /* @__PURE__ */ Symbol("_vte"), Nr = (e) => e.__isTeleport, Ne = /* @__PURE__ */ Symbol("_leaveCb"), Qt = /* @__PURE__ */ Symbol("_enterCb");
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
const De = [Function, Array], Fr = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: De,
  onEnter: De,
  onAfterEnter: De,
  onEnterCancelled: De,
  // leave
  onBeforeLeave: De,
  onLeave: De,
  onAfterLeave: De,
  onLeaveCancelled: De,
  // appear
  onBeforeAppear: De,
  onAppear: De,
  onAfterAppear: De,
  onAppearCancelled: De
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
      a.type !== Te && bs(a, f);
      let c = s.subTree && pi(s.subTree);
      if (c && c.type !== Te && !Mt(c, a) && Ur(s).type !== Te) {
        let h = $n(
          c,
          o,
          n,
          s
        );
        if (bs(c, h), l === "out-in" && a.type !== Te)
          return n.isLeaving = !0, h.afterLeave = () => {
            n.isLeaving = !1, s.job.flags & 8 || s.update(), delete h.afterLeave, c = void 0;
          }, _n(r);
        l === "in-out" && a.type !== Te ? h.delayLeave = (v, m, L) => {
          const M = Vr(
            n,
            c
          );
          M[String(c.key)] = c, v[Ne] = () => {
            m(), v[Ne] = void 0, delete f.delayedLeave, c = void 0;
          }, f.delayedLeave = () => {
            L(), delete f.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
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
    onAfterEnter: c,
    onEnterCancelled: h,
    onBeforeLeave: v,
    onLeave: m,
    onAfterLeave: L,
    onLeaveCancelled: M,
    onBeforeAppear: Y,
    onAppear: H,
    onAfterAppear: A,
    onAppearCancelled: C
  } = t, E = String(e.key), B = Vr(s, e), se = (I, K) => {
    I && je(
      I,
      n,
      9,
      K
    );
  }, V = (I, K) => {
    const N = K[1];
    se(I, K), z(I) ? I.every((y) => y.length <= 1) && N() : I.length <= 1 && N();
  }, j = {
    mode: o,
    persisted: l,
    beforeEnter(I) {
      let K = a;
      if (!s.isMounted)
        if (r)
          K = Y || a;
        else
          return;
      I[Ne] && I[Ne](
        !0
        /* cancelled */
      );
      const N = B[E];
      N && Mt(e, N) && N.el[Ne] && N.el[Ne](), se(K, [I]);
    },
    enter(I) {
      if (B[E] === e) return;
      let K = f, N = c, y = h;
      if (!s.isMounted)
        if (r)
          K = H || f, N = A || c, y = C || h;
        else
          return;
      let D = !1;
      I[Qt] = (re) => {
        D || (D = !0, re ? se(y, [I]) : se(N, [I]), j.delayedLeave && j.delayedLeave(), I[Qt] = void 0);
      };
      const q = I[Qt].bind(null, !1);
      K ? V(K, [I, q]) : q();
    },
    leave(I, K) {
      const N = String(e.key);
      if (I[Qt] && I[Qt](
        !0
        /* cancelled */
      ), s.isUnmounting)
        return K();
      se(v, [I]);
      let y = !1;
      I[Ne] = (q) => {
        y || (y = !0, K(), q ? se(M, [I]) : se(L, [I]), I[Ne] = void 0, B[N] === e && delete B[N]);
      };
      const D = I[Ne].bind(null, !1);
      B[N] = e, m ? V(m, [I, D]) : D();
    },
    clone(I) {
      const K = $n(
        I,
        t,
        s,
        n,
        i
      );
      return i && i(K), K;
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
function bs(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, bs(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
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
function cs(e, t, s, n, i = !1) {
  if (z(e)) {
    e.forEach(
      (M, Y) => cs(
        M,
        t && (z(t) ? t[Y] : t),
        s,
        n,
        i
      )
    );
    return;
  }
  if (us(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && cs(e, t, s, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? fn(n.component) : n.el, o = i ? null : r, { i: l, r: a } = e, f = t && t.r, c = l.refs === de ? l.refs = {} : l.refs, h = l.setupState, v = /* @__PURE__ */ ie(h), m = h === de ? tr : (M) => gi(c, M) ? !1 : le(v, M), L = (M, Y) => !(Y && gi(c, Y));
  if (f != null && f !== a) {
    if (mi(t), me(f))
      c[f] = null, m(f) && (h[f] = null);
    else if (/* @__PURE__ */ ve(f)) {
      const M = t;
      L(f, M.k) && (f.value = null), M.k && (c[M.k] = null);
    }
  }
  if (Z(a)) {
    st();
    try {
      Cs(a, l, 12, [o, c]);
    } finally {
      nt();
    }
  } else {
    const M = me(a), Y = /* @__PURE__ */ ve(a);
    if (M || Y) {
      const H = () => {
        if (e.f) {
          const A = M ? m(a) ? h[a] : c[a] : L() || !e.k ? a.value : c[e.k];
          if (i)
            z(A) && Bn(A, r);
          else if (z(A))
            A.includes(r) || A.push(r);
          else if (M)
            c[a] = [r], m(a) && (h[a] = c[a]);
          else {
            const C = [r];
            L(a, e.k) && (a.value = C), e.k && (c[e.k] = C);
          }
        } else M ? (c[a] = o, m(a) && (h[a] = o)) : Y && (L(a, e.k) && (a.value = o), e.k && (c[e.k] = o));
      };
      if (o) {
        const A = () => {
          H(), js.delete(e);
        };
        A.id = -1, js.set(e, A), Ae(A, s);
      } else
        mi(e), H();
    }
  }
}
function mi(e) {
  const t = js.get(e);
  t && (t.flags |= 8, js.delete(e));
}
en().requestIdleCallback;
en().cancelIdleCallback;
const us = (e) => !!e.type.__asyncLoader, on = (e) => e.type.__isKeepAlive;
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
      const l = Is(s), a = je(t, s, e, o);
      return l(), nt(), a;
    });
    return n ? i.unshift(r) : i.push(r), r;
  }
}
const gt = (e) => (t, s = ke) => {
  (!xs || e === "sp") && ln(e, (...n) => t(...n), s);
}, Ml = gt("bm"), an = gt("m"), Pl = gt(
  "bu"
), Rl = gt("u"), ei = gt(
  "bum"
), Wr = gt("um"), $l = gt(
  "sp"
), Ll = gt("rtg"), Ol = gt("rtc");
function Dl(e, t = ke) {
  ln("ec", e, t);
}
const Nl = /* @__PURE__ */ Symbol.for("v-ndc");
function Fe(e, t, s, n) {
  let i;
  const r = s, o = z(e);
  if (o || me(e)) {
    const l = o && /* @__PURE__ */ ht(e);
    let a = !1, f = !1;
    l && (a = !/* @__PURE__ */ Oe(e), f = /* @__PURE__ */ pt(e), e = tn(e)), i = new Array(e.length);
    for (let c = 0, h = e.length; c < h; c++)
      i[c] = t(
        a ? f ? Jt(We(e[c])) : We(e[c]) : e[c],
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
const Ln = (e) => e ? fo(e) ? fn(e) : Ln(e.parent) : null, fs = (
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
    $nextTick: (e) => e.n || (e.n = Re.bind(e.proxy)),
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
    const f = fs[t];
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
    return !!(s[l] || e !== de && l[0] !== "$" && le(e, l) || xn(t, l) || le(r, l) || le(n, l) || le(fs, l) || le(i.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : le(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function vi(e) {
  return z(e) ? e.reduce(
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
    updated: L,
    activated: M,
    deactivated: Y,
    beforeDestroy: H,
    beforeUnmount: A,
    destroyed: C,
    unmounted: E,
    render: B,
    renderTracked: se,
    renderTriggered: V,
    errorCaptured: j,
    serverPrefetch: I,
    // public API
    expose: K,
    inheritAttrs: N,
    // assets
    components: y,
    directives: D,
    filters: q
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
      const ce = r[Q], it = Z(ce) ? ce.bind(s, s) : Z(ce.get) ? ce.get.bind(s, s) : tt, Es = !Z(ce) && Z(ce.set) ? ce.set.bind(s) : tt, Ct = Ue({
        get: it,
        set: Es
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
  c && yi(c, e, "c");
  function oe(Q, ce) {
    z(ce) ? ce.forEach((it) => Q(it.bind(s))) : ce && Q(ce.bind(s));
  }
  if (oe(Ml, h), oe(an, v), oe(Pl, m), oe(Rl, L), oe(Tl, M), oe(kl, Y), oe(Dl, j), oe(Ol, se), oe(Ll, V), oe(ei, A), oe(Wr, E), oe($l, I), z(K))
    if (K.length) {
      const Q = e.exposed || (e.exposed = {});
      K.forEach((ce) => {
        Object.defineProperty(Q, ce, {
          get: () => s[ce],
          set: (it) => s[ce] = it,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  B && e.render === tt && (e.render = B), N != null && (e.inheritAttrs = N), y && (e.components = y), D && (e.directives = D), I && Br(e);
}
function Hl(e, t, s = tt) {
  z(e) && (e = Dn(e));
  for (const n in e) {
    const i = e[n];
    let r;
    ae(i) ? "default" in i ? r = as(
      i.from || n,
      i.default,
      !0
    ) : r = as(i.from || n) : r = as(i), /* @__PURE__ */ ve(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[n] = r;
  }
}
function yi(e, t, s) {
  je(
    z(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function zr(e, t, s, n) {
  let i = n.includes(".") ? Dr(s, n) : () => s[n];
  if (me(e)) {
    const r = t[e];
    Z(r) && $e(i, r);
  } else if (Z(e))
    $e(i, e.bind(s));
  else if (ae(e))
    if (z(e))
      e.forEach((r) => zr(r, t, s, n));
    else {
      const r = Z(e.handler) ? e.handler.bind(s) : t[e.handler];
      Z(r) && $e(i, r, e);
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
  methods: ss,
  computed: ss,
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
  components: ss,
  directives: ss,
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
  return ss(Dn(e), Dn(t));
}
function Dn(e) {
  if (z(e)) {
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
function ss(e, t) {
  return e ? xe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function _i(e, t) {
  return e ? z(e) && z(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : xe(
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
      set config(c) {
      },
      use(c, ...h) {
        return o.has(c) || (c && Z(c.install) ? (o.add(c), c.install(f, ...h)) : Z(c) && (o.add(c), c(f, ...h))), f;
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
        a && (je(
          l,
          f._instance,
          16
        ), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(c, h) {
        return r.provides[c] = h, f;
      },
      runWithContext(c) {
        const h = $t;
        $t = f;
        try {
          return c();
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
  o && (o.trim && (i = s.map((c) => me(c) ? c.trim() : c)), o.number && (i = s.map(Kn)));
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
      const c = Yr(f, t, !0);
      c && (l = !0, xe(o, c));
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (ae(e) && n.set(e, null), null) : (z(r) ? r.forEach((a) => o[a] = null) : xe(o, r), ae(e) && n.set(e, o), o);
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
    ctx: L,
    inheritAttrs: M
  } = e, Y = Vs(e);
  let H, A;
  try {
    if (s.shapeFlag & 4) {
      const E = i || n, B = E;
      H = Qe(
        f.call(
          B,
          E,
          c,
          h,
          m,
          v,
          L
        )
      ), A = l;
    } else {
      const E = t;
      H = Qe(
        E.length > 1 ? E(
          h,
          { attrs: l, slots: o, emit: a }
        ) : E(
          h,
          null
        )
      ), A = t.props ? l : Yl(l);
    }
  } catch (E) {
    ds.length = 0, rn(E, e, 1), H = ee(Te);
  }
  let C = H;
  if (A && M !== !1) {
    const E = Object.keys(A), { shapeFlag: B } = C;
    E.length && B & 7 && (r && E.some(Xs) && (A = Gl(
      A,
      r
    )), C = _t(C, A, !1, !0));
  }
  return s.dirs && (C = _t(C, null, !1, !0), C.dirs = C.dirs ? C.dirs.concat(s.dirs) : s.dirs), s.transition && bs(C, s.transition), H = C, Vs(Y), H;
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
      const c = t.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        const v = c[h];
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
            const L = Be(v);
            i[L] = Nn(
              a,
              l,
              L,
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
      if (rs(a))
        continue;
      const f = t[a];
      let c;
      i && le(i, c = Be(a)) ? !r || !r.includes(c) ? s[c] = f : (l || (l = {}))[c] = f : cn(e.emitsOptions, a) || (!(a in n) || f !== n[a]) && (n[a] = f, o = !0);
    }
  if (r) {
    const a = /* @__PURE__ */ ie(s), f = l || de;
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
      if (o.type !== Function && !o.skipFactory && Z(a)) {
        const { propsDefaults: f } = i;
        if (s in f)
          n = f[s];
        else {
          const c = Is(i);
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
  if (!Z(e)) {
    const c = (h) => {
      a = !0;
      const [v, m] = to(h, t, !0);
      xe(o, v), m && l.push(...m);
    };
    !s && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!r && !a)
    return ae(e) && n.set(e, jt), jt;
  if (z(r))
    for (let c = 0; c < r.length; c++) {
      const h = Be(r[c]);
      Si(h) && (o[h] = de);
    }
  else if (r)
    for (const c in r) {
      const h = Be(c);
      if (Si(h)) {
        const v = r[c], m = o[h] = z(v) || Z(v) ? { type: v } : xe({}, v), L = m.type;
        let M = !1, Y = !0;
        if (z(L))
          for (let H = 0; H < L.length; ++H) {
            const A = L[H], C = Z(A) && A.name;
            if (C === "Boolean") {
              M = !0;
              break;
            } else C === "String" && (Y = !1);
          }
        else
          M = Z(L) && L.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = M, m[
          1
          /* shouldCastTrue */
        ] = Y, (M || le(m, "default")) && l.push(h);
      }
    }
  const f = [o, l];
  return ae(e) && n.set(e, f), f;
}
function Si(e) {
  return e[0] !== "$" && !rs(e);
}
const ti = (e) => e === "_" || e === "_ctx" || e === "$stable", si = (e) => z(e) ? e.map(Qe) : [Qe(e)], sa = (e, t, s) => {
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
    setElementText: c,
    parentNode: h,
    nextSibling: v,
    setScopeId: m = tt,
    insertStaticContent: L
  } = e, M = (u, d, g, S = null, w = null, _ = null, O = void 0, P = null, k = !!d.dynamicChildren) => {
    if (u === d)
      return;
    u && !Mt(u, d) && (S = Ts(u), ze(u, w, _, !0), u = null), d.patchFlag === -2 && (k = !1, d.dynamicChildren = null);
    const { type: x, ref: J, shapeFlag: F } = d;
    switch (x) {
      case un:
        Y(u, d, g, S);
        break;
      case Te:
        H(u, d, g, S);
        break;
      case Ds:
        u == null && A(d, g, S, O);
        break;
      case te:
        y(
          u,
          d,
          g,
          S,
          w,
          _,
          O,
          P,
          k
        );
        break;
      default:
        F & 1 ? B(
          u,
          d,
          g,
          S,
          w,
          _,
          O,
          P,
          k
        ) : F & 6 ? D(
          u,
          d,
          g,
          S,
          w,
          _,
          O,
          P,
          k
        ) : (F & 64 || F & 128) && x.process(
          u,
          d,
          g,
          S,
          w,
          _,
          O,
          P,
          k,
          Gt
        );
    }
    J != null && w ? cs(J, u && u.ref, _, d || u, !d) : J == null && u && u.ref != null && cs(u.ref, null, _, u, !0);
  }, Y = (u, d, g, S) => {
    if (u == null)
      n(
        d.el = l(d.children),
        g,
        S
      );
    else {
      const w = d.el = u.el;
      d.children !== u.children && f(w, d.children);
    }
  }, H = (u, d, g, S) => {
    u == null ? n(
      d.el = a(d.children || ""),
      g,
      S
    ) : d.el = u.el;
  }, A = (u, d, g, S) => {
    [u.el, u.anchor] = L(
      u.children,
      d,
      g,
      S,
      u.el,
      u.anchor
    );
  }, C = ({ el: u, anchor: d }, g, S) => {
    let w;
    for (; u && u !== d; )
      w = v(u), n(u, g, S), u = w;
    n(d, g, S);
  }, E = ({ el: u, anchor: d }) => {
    let g;
    for (; u && u !== d; )
      g = v(u), i(u), u = g;
    i(d);
  }, B = (u, d, g, S, w, _, O, P, k) => {
    if (d.type === "svg" ? O = "svg" : d.type === "math" && (O = "mathml"), u == null)
      se(
        d,
        g,
        S,
        w,
        _,
        O,
        P,
        k
      );
    else {
      const x = u.el && u.el._isVueCE ? u.el : null;
      try {
        x && x._beginPatch(), I(
          u,
          d,
          w,
          _,
          O,
          P,
          k
        );
      } finally {
        x && x._endPatch();
      }
    }
  }, se = (u, d, g, S, w, _, O, P) => {
    let k, x;
    const { props: J, shapeFlag: F, transition: W, dirs: G } = u;
    if (k = u.el = o(
      u.type,
      _,
      J && J.is,
      J
    ), F & 8 ? c(k, u.children) : F & 16 && j(
      u.children,
      k,
      null,
      S,
      w,
      wn(u, _),
      O,
      P
    ), G && It(u, null, S, "created"), V(k, u, u.scopeId, O, S), J) {
      for (const fe in J)
        fe !== "value" && !rs(fe) && r(k, fe, null, J[fe], _, S);
      "value" in J && r(k, "value", null, J.value, _), (x = J.onVnodeBeforeMount) && Ge(x, S, u);
    }
    G && It(u, null, S, "beforeMount");
    const ne = la(w, W);
    ne && W.beforeEnter(k), n(k, d, g), ((x = J && J.onVnodeMounted) || ne || G) && Ae(() => {
      try {
        x && Ge(x, S, u), ne && W.enter(k), G && It(u, null, S, "mounted");
      } finally {
      }
    }, w);
  }, V = (u, d, g, S, w) => {
    if (g && m(u, g), S)
      for (let _ = 0; _ < S.length; _++)
        m(u, S[_]);
    if (w) {
      let _ = w.subTree;
      if (d === _ || ao(_.type) && (_.ssContent === d || _.ssFallback === d)) {
        const O = w.vnode;
        V(
          u,
          O,
          O.scopeId,
          O.slotScopeIds,
          w.parent
        );
      }
    }
  }, j = (u, d, g, S, w, _, O, P, k = 0) => {
    for (let x = k; x < u.length; x++) {
      const J = u[x] = P ? ut(u[x]) : Qe(u[x]);
      M(
        null,
        J,
        d,
        g,
        S,
        w,
        _,
        O,
        P
      );
    }
  }, I = (u, d, g, S, w, _, O) => {
    const P = d.el = u.el;
    let { patchFlag: k, dynamicChildren: x, dirs: J } = d;
    k |= u.patchFlag & 16;
    const F = u.props || de, W = d.props || de;
    let G;
    if (g && Et(g, !1), (G = W.onVnodeBeforeUpdate) && Ge(G, g, d, u), J && It(d, u, g, "beforeUpdate"), g && Et(g, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    x && (!u.dynamicChildren || u.dynamicChildren.length !== x.length) && (k = 0, O = !1, x = null), (F.innerHTML && W.innerHTML == null || F.textContent && W.textContent == null) && c(P, ""), x ? K(
      u.dynamicChildren,
      x,
      P,
      g,
      S,
      wn(d, w),
      _
    ) : O || ce(
      u,
      d,
      P,
      null,
      g,
      S,
      wn(d, w),
      _,
      !1
    ), k > 0) {
      if (k & 16)
        N(P, F, W, g, w);
      else if (k & 2 && F.class !== W.class && r(P, "class", null, W.class, w), k & 4 && r(P, "style", F.style, W.style, w), k & 8) {
        const ne = d.dynamicProps;
        for (let fe = 0; fe < ne.length; fe++) {
          const ue = ne[fe], be = F[ue], we = W[ue];
          (we !== be || ue === "value") && r(P, ue, be, we, w, g);
        }
      }
      k & 1 && u.children !== d.children && c(P, d.children);
    } else !O && x == null && N(P, F, W, g, w);
    ((G = W.onVnodeUpdated) || J) && Ae(() => {
      G && Ge(G, g, d, u), J && It(d, u, g, "updated");
    }, S);
  }, K = (u, d, g, S, w, _, O) => {
    for (let P = 0; P < d.length; P++) {
      const k = u[P], x = d[P], J = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        k.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (k.type === te || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Mt(k, x) || // - In the case of a component, it could contain anything.
        k.shapeFlag & 198) ? h(k.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      M(
        k,
        x,
        J,
        null,
        S,
        w,
        _,
        O,
        !0
      );
    }
  }, N = (u, d, g, S, w) => {
    if (d !== g) {
      if (d !== de)
        for (const _ in d)
          !rs(_) && !(_ in g) && r(
            u,
            _,
            d[_],
            null,
            w,
            S
          );
      for (const _ in g) {
        if (rs(_)) continue;
        const O = g[_], P = d[_];
        O !== P && _ !== "value" && r(u, _, P, O, w, S);
      }
      "value" in g && r(u, "value", d.value, g.value, w);
    }
  }, y = (u, d, g, S, w, _, O, P, k) => {
    const x = d.el = u ? u.el : l(""), J = d.anchor = u ? u.anchor : l("");
    let { patchFlag: F, dynamicChildren: W, slotScopeIds: G } = d;
    G && (P = P ? P.concat(G) : G), u == null ? (n(x, g, S), n(J, g, S), j(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      g,
      J,
      w,
      _,
      O,
      P,
      k
    )) : F > 0 && F & 64 && W && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === W.length ? (K(
      u.dynamicChildren,
      W,
      g,
      w,
      _,
      O,
      P
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || w && d === w.subTree) && ro(
      u,
      d,
      !0
      /* shallow */
    )) : ce(
      u,
      d,
      g,
      J,
      w,
      _,
      O,
      P,
      k
    );
  }, D = (u, d, g, S, w, _, O, P, k) => {
    d.slotScopeIds = P, u == null ? d.shapeFlag & 512 ? w.ctx.activate(
      d,
      g,
      S,
      O,
      k
    ) : q(
      d,
      g,
      S,
      w,
      _,
      O,
      k
    ) : re(u, d, k);
  }, q = (u, d, g, S, w, _, O) => {
    const P = u.component = va(
      u,
      S,
      w
    );
    if (on(u) && (P.ctx.renderer = Gt), ya(P, !1, O), P.asyncDep) {
      if (w && w.registerDep(P, oe, O), !u.el) {
        const k = P.subTree = ee(Te);
        H(null, k, d, g), u.placeholder = k.el;
      }
    } else
      oe(
        P,
        u,
        d,
        g,
        w,
        _,
        O
      );
  }, re = (u, d, g) => {
    const S = d.component = u.component;
    if (Xl(u, d, g))
      if (S.asyncDep && !S.asyncResolved) {
        Q(S, d, g);
        return;
      } else
        S.next = d, S.update();
    else
      d.el = u.el, S.vnode = d;
  }, oe = (u, d, g, S, w, _, O) => {
    const P = () => {
      if (u.isMounted) {
        let { next: F, bu: W, u: G, parent: ne, vnode: fe } = u;
        {
          const qe = oo(u);
          if (qe) {
            F && (F.el = fe.el, Q(u, F, O)), qe.asyncDep.then(() => {
              Ae(() => {
                u.isUnmounted || x();
              }, w);
            });
            return;
          }
        }
        let ue = F, be;
        Et(u, !1), F ? (F.el = fe.el, Q(u, F, O)) : F = fe, W && Os(W), (be = F.props && F.props.onVnodeBeforeUpdate) && Ge(be, ne, F, fe), Et(u, !0);
        const we = xi(u), Je = u.subTree;
        u.subTree = we, M(
          Je,
          we,
          // parent may have changed if it's in a teleport
          h(Je.el),
          // anchor may have changed if it's in a fragment
          Ts(Je),
          u,
          w,
          _
        ), F.el = we.el, ue === null && Zl(u, we.el), G && Ae(G, w), (be = F.props && F.props.onVnodeUpdated) && Ae(
          () => Ge(be, ne, F, fe),
          w
        );
      } else {
        let F;
        const { el: W, props: G } = d, { bm: ne, m: fe, parent: ue, root: be, type: we } = u, Je = us(d);
        Et(u, !1), ne && Os(ne), !Je && (F = G && G.onVnodeBeforeMount) && Ge(F, ue, d), Et(u, !0);
        {
          be.ce && be.ce._hasShadowRoot() && be.ce._injectChildStyle(
            we,
            u.parent ? u.parent.type : void 0
          );
          const qe = u.subTree = xi(u);
          M(
            null,
            qe,
            g,
            S,
            u,
            w,
            _
          ), d.el = qe.el;
        }
        if (fe && Ae(fe, w), !Je && (F = G && G.onVnodeMounted)) {
          const qe = d;
          Ae(
            () => Ge(F, ue, qe),
            w
          );
        }
        (d.shapeFlag & 256 || ue && us(ue.vnode) && ue.vnode.shapeFlag & 256) && u.a && Ae(u.a, w), u.isMounted = !0, d = g = S = null;
      }
    };
    u.scope.on();
    const k = u.effect = new pr(P);
    u.scope.off();
    const x = u.update = k.run.bind(k), J = u.job = k.runIfDirty.bind(k);
    J.i = u, J.id = u.uid, k.scheduler = () => Qn(J), Et(u, !0), x();
  }, Q = (u, d, g) => {
    d.component = u;
    const S = u.vnode.props;
    u.vnode = d, u.next = null, ea(u, d.props, S, g), ia(u, d.children, g), st(), hi(u), nt();
  }, ce = (u, d, g, S, w, _, O, P, k = !1) => {
    const x = u && u.children, J = u ? u.shapeFlag : 0, F = d.children, { patchFlag: W, shapeFlag: G } = d;
    if (W > 0) {
      if (W & 128) {
        Es(
          x,
          F,
          g,
          S,
          w,
          _,
          O,
          P,
          k
        );
        return;
      } else if (W & 256) {
        it(
          x,
          F,
          g,
          S,
          w,
          _,
          O,
          P,
          k
        );
        return;
      }
    }
    G & 8 ? (J & 16 && Yt(x, w, _), F !== x && c(g, F)) : J & 16 ? G & 16 ? Es(
      x,
      F,
      g,
      S,
      w,
      _,
      O,
      P,
      k
    ) : Yt(x, w, _, !0) : (J & 8 && c(g, ""), G & 16 && j(
      F,
      g,
      S,
      w,
      _,
      O,
      P,
      k
    ));
  }, it = (u, d, g, S, w, _, O, P, k) => {
    u = u || jt, d = d || jt;
    const x = u.length, J = d.length, F = Math.min(x, J);
    let W;
    for (W = 0; W < F; W++) {
      const G = d[W] = k ? ut(d[W]) : Qe(d[W]);
      M(
        u[W],
        G,
        g,
        null,
        w,
        _,
        O,
        P,
        k
      );
    }
    x > J ? Yt(
      u,
      w,
      _,
      !0,
      !1,
      F
    ) : j(
      d,
      g,
      S,
      w,
      _,
      O,
      P,
      k,
      F
    );
  }, Es = (u, d, g, S, w, _, O, P, k) => {
    let x = 0;
    const J = d.length;
    let F = u.length - 1, W = J - 1;
    for (; x <= F && x <= W; ) {
      const G = u[x], ne = d[x] = k ? ut(d[x]) : Qe(d[x]);
      if (Mt(G, ne))
        M(
          G,
          ne,
          g,
          null,
          w,
          _,
          O,
          P,
          k
        );
      else
        break;
      x++;
    }
    for (; x <= F && x <= W; ) {
      const G = u[F], ne = d[W] = k ? ut(d[W]) : Qe(d[W]);
      if (Mt(G, ne))
        M(
          G,
          ne,
          g,
          null,
          w,
          _,
          O,
          P,
          k
        );
      else
        break;
      F--, W--;
    }
    if (x > F) {
      if (x <= W) {
        const G = W + 1, ne = G < J ? d[G].el : S;
        for (; x <= W; )
          M(
            null,
            d[x] = k ? ut(d[x]) : Qe(d[x]),
            g,
            ne,
            w,
            _,
            O,
            P,
            k
          ), x++;
      }
    } else if (x > W)
      for (; x <= F; )
        ze(u[x], w, _, !0), x++;
    else {
      const G = x, ne = x, fe = /* @__PURE__ */ new Map();
      for (x = ne; x <= W; x++) {
        const Pe = d[x] = k ? ut(d[x]) : Qe(d[x]);
        Pe.key != null && fe.set(Pe.key, x);
      }
      let ue, be = 0;
      const we = W - ne + 1;
      let Je = !1, qe = 0;
      const Xt = new Array(we);
      for (x = 0; x < we; x++) Xt[x] = 0;
      for (x = G; x <= F; x++) {
        const Pe = u[x];
        if (be >= we) {
          ze(Pe, w, _, !0);
          continue;
        }
        let Ye;
        if (Pe.key != null)
          Ye = fe.get(Pe.key);
        else
          for (ue = ne; ue <= W; ue++)
            if (Xt[ue - ne] === 0 && Mt(Pe, d[ue])) {
              Ye = ue;
              break;
            }
        Ye === void 0 ? ze(Pe, w, _, !0) : (Xt[Ye - ne] = x + 1, Ye >= qe ? qe = Ye : Je = !0, M(
          Pe,
          d[Ye],
          g,
          null,
          w,
          _,
          O,
          P,
          k
        ), be++);
      }
      const oi = Je ? aa(Xt) : jt;
      for (ue = oi.length - 1, x = we - 1; x >= 0; x--) {
        const Pe = ne + x, Ye = d[Pe], li = d[Pe + 1], ai = Pe + 1 < J ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          li.el || lo(li)
        ) : S;
        Xt[x] === 0 ? M(
          null,
          Ye,
          g,
          ai,
          w,
          _,
          O,
          P,
          k
        ) : Je && (ue < 0 || x !== oi[ue] ? Ct(Ye, g, ai, 2) : ue--);
      }
    }
  }, Ct = (u, d, g, S, w = null) => {
    const { el: _, type: O, transition: P, children: k, shapeFlag: x } = u;
    if (x & 6) {
      Ct(u.component.subTree, d, g, S);
      return;
    }
    if (x & 128) {
      u.suspense.move(d, g, S);
      return;
    }
    if (x & 64) {
      O.move(u, d, g, Gt);
      return;
    }
    if (O === te) {
      n(_, d, g);
      for (let F = 0; F < k.length; F++)
        Ct(k[F], d, g, S);
      n(u.anchor, d, g);
      return;
    }
    if (O === Ds) {
      C(u, d, g);
      return;
    }
    if (S !== 2 && x & 1 && P)
      if (S === 0)
        P.persisted && !_[Ne] ? n(_, d, g) : (P.beforeEnter(_), n(_, d, g), Ae(() => P.enter(_), w));
      else {
        const { leave: F, delayLeave: W, afterLeave: G } = P, ne = () => {
          u.ctx.isUnmounted ? i(_) : n(_, d, g);
        }, fe = () => {
          const ue = _._isLeaving || !!_[Ne];
          _._isLeaving && _[Ne](
            !0
            /* cancelled */
          ), P.persisted && !ue ? ne() : F(_, () => {
            ne(), G && G();
          });
        };
        W ? W(_, ne, fe) : fe();
      }
    else
      n(_, d, g);
  }, ze = (u, d, g, S = !1, w = !1) => {
    const {
      type: _,
      props: O,
      ref: P,
      children: k,
      dynamicChildren: x,
      shapeFlag: J,
      patchFlag: F,
      dirs: W,
      cacheIndex: G,
      memo: ne
    } = u;
    if (F === -2 && (w = !1), P != null && (st(), cs(P, null, g, u, !0), nt()), G != null && (d.renderCache[G] = void 0), J & 256) {
      d.ctx.deactivate(u);
      return;
    }
    const fe = J & 1 && W, ue = !us(u);
    let be;
    if (ue && (be = O && O.onVnodeBeforeUnmount) && Ge(be, d, u), J & 6)
      Eo(u.component, g, S);
    else {
      if (J & 128) {
        u.suspense.unmount(g, S);
        return;
      }
      fe && It(u, null, d, "beforeUnmount"), J & 64 ? u.type.remove(
        u,
        d,
        g,
        Gt,
        S
      ) : x && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !x.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== te || F > 0 && F & 64) ? Yt(
        x,
        d,
        g,
        !1,
        !0
      ) : (_ === te && F & 384 || !w && J & 16) && Yt(k, d, g), S && ii(u);
    }
    const we = ne != null && G == null;
    (ue && (be = O && O.onVnodeUnmounted) || fe || we) && Ae(() => {
      be && Ge(be, d, u), fe && It(u, null, d, "unmounted"), we && (u.el = null);
    }, g);
  }, ii = (u) => {
    const { type: d, el: g, anchor: S, transition: w } = u;
    if (d === te) {
      Io(g, S);
      return;
    }
    if (d === Ds) {
      E(u);
      return;
    }
    const _ = () => {
      i(g), w && !w.persisted && w.afterLeave && w.afterLeave();
    };
    if (u.shapeFlag & 1 && w && !w.persisted) {
      const { leave: O, delayLeave: P } = w, k = () => O(g, _);
      P ? P(u.el, _, k) : k();
    } else
      _();
  }, Io = (u, d) => {
    let g;
    for (; u !== d; )
      g = v(u), i(u), u = g;
    i(d);
  }, Eo = (u, d, g) => {
    const { bum: S, scope: w, job: _, subTree: O, um: P, m: k, a: x } = u;
    Ci(k), Ci(x), S && Os(S), w.stop(), _ && (_.flags |= 8, ze(O, u, d, g)), P && Ae(P, d), Ae(() => {
      u.isUnmounted = !0;
    }, d);
  }, Yt = (u, d, g, S = !1, w = !1, _ = 0) => {
    for (let O = _; O < u.length; O++)
      ze(u[O], d, g, S, w);
  }, Ts = (u) => {
    if (u.shapeFlag & 6)
      return Ts(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const d = v(u.anchor || u.el), g = d && d[Sl];
    return g ? v(g) : d;
  };
  let pn = !1;
  const ri = (u, d, g) => {
    let S;
    u == null ? d._vnode && (ze(d._vnode, null, null, !0), S = d._vnode.component) : M(
      d._vnode || null,
      u,
      d,
      null,
      null,
      null,
      g
    ), d._vnode = u, pn || (pn = !0, hi(S), Pr(), pn = !1);
  }, Gt = {
    p: M,
    um: ze,
    m: Ct,
    r: ii,
    mt: q,
    mc: j,
    pc: ce,
    pbc: K,
    n: Ts,
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
  if (z(n) && z(i))
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
  t && t.pendingBranch ? z(e) ? t.effects.push(...e) : t.effects.push(e) : vl(e);
}
const te = /* @__PURE__ */ Symbol.for("v-fgt"), un = /* @__PURE__ */ Symbol.for("v-txt"), Te = /* @__PURE__ */ Symbol.for("v-cmt"), Ds = /* @__PURE__ */ Symbol.for("v-stc"), ds = [];
let Le = null;
function T(e = !1) {
  ds.push(Le = e ? null : []);
}
function ua() {
  ds.pop(), Le = ds[ds.length - 1] || null;
}
let _s = 1;
function Ks(e, t = !1) {
  _s += e, e < 0 && Le && t && (Le.hasOnce = !0);
}
function co(e) {
  return e.dynamicChildren = _s > 0 ? Le || jt : null, ua(), _s > 0 && Le && Le.push(e), e;
}
function R(e, t, s, n, i, r) {
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
function Ws(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Mt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const uo = ({ key: e }) => e ?? null, Ns = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? me(e) || /* @__PURE__ */ ve(e) || Z(e) ? { i: He, r: e, k: t, f: !!s } : e : null);
function p(e, t = null, s = null, n = 0, i = null, r = e === te ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && uo(t),
    ref: t && Ns(t),
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
  return l ? (zs(a, s), r & 128 && e.normalize(a)) : s && (a.shapeFlag |= me(s) ? 8 : 16), _s > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Le && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Le.push(a), a;
}
const ee = fa;
function fa(e, t = null, s = null, n = 0, i = null, r = !1) {
  if ((!e || e === Nl) && (e = Te), Ws(e)) {
    const l = _t(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && zs(l, s), _s > 0 && !r && Le && (l.shapeFlag & 6 ? Le[Le.indexOf(e)] = l : Le.push(l)), l.patchFlag = -2, l;
  }
  if (wa(e) && (e = e.__vccOpts), t) {
    t = da(t);
    let { class: l, style: a } = t;
    l && !me(l) && (t.class = ye(l)), ae(a) && (/* @__PURE__ */ nn(a) && !z(a) && (a = xe({}, a)), t.style = Pt(a));
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
      s && r ? z(r) ? r.concat(Ns(t)) : [r, Ns(t)] : Ns(t)
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
  return a && n && bs(
    c,
    a.clone(c)
  ), c;
}
function ha(e = " ", t = 0) {
  return ee(un, null, e, t);
}
function Ps(e, t) {
  const s = ee(Ds, null, e);
  return s.staticCount = t, s;
}
function Me(e = "", t = !1) {
  return t ? (T(), bt(Te, null, e)) : ee(Te, null, e);
}
function Qe(e) {
  return e == null || typeof e == "boolean" ? ee(Te) : z(e) ? ee(
    te,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ws(e) ? ut(e) : ee(un, null, String(e));
}
function ut(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : _t(e);
}
function zs(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (z(t))
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
        t.style = Pt([t.style, n.style]);
      else if (Gs(i)) {
        const r = t[i], o = n[i];
        o && r !== o && !(z(r) && r.includes(o)) ? t[i] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
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
    (s) => xs = s
  );
}
const Is = (e) => {
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
let xs = !1;
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
    const i = e.setupContext = n.length > 1 ? xa(e) : null, r = Is(e), o = Cs(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = nr(o);
    if (nt(), r(), (l || e.sp) && !us(e) && Br(e), l) {
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
    const i = Is(e);
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
      if (s in fs)
        return fs[s](e);
    },
    has(t, s) {
      return s in t || s in fs;
    }
  })) : e.proxy;
}
function wa(e) {
  return Z(e) && "__vccOpts" in e;
}
const Ue = (e, t) => /* @__PURE__ */ dl(e, t, xs);
function Sa(e, t, s) {
  try {
    Ks(-1);
    const n = arguments.length;
    return n === 2 ? ae(t) && !z(t) ? Ws(t) ? ee(e, null, [t]) : ee(e, t) : ee(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && Ws(s) && (s = [s]), ee(e, t, s));
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
const po = Un ? (e) => Un.createHTML(e) : (e) => e, Ia = "http://www.w3.org/2000/svg", Ea = "http://www.w3.org/1998/Math/MathML", at = typeof document < "u" ? document : null, ki = at && /* @__PURE__ */ at.createElement("template"), Ta = {
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
}, mt = "transition", es = "animation", ws = /* @__PURE__ */ Symbol("_vtc"), go = {
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
  (e, { slots: t }) => Sa(El, Pa(e), t)
), Tt = (e, t = []) => {
  z(e) ? e.forEach((s) => s(...t)) : e && e(...t);
}, Ai = (e) => e ? z(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Pa(e) {
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
  } = e, L = Ra(i), M = L && L[0], Y = L && L[1], {
    onBeforeEnter: H,
    onEnter: A,
    onEnterCancelled: C,
    onLeave: E,
    onLeaveCancelled: B,
    onBeforeAppear: se = H,
    onAppear: V = A,
    onAppearCancelled: j = C
  } = t, I = (y, D, q, re) => {
    y._enterCancelled = re, kt(y, D ? c : l), kt(y, D ? f : o), q && q();
  }, K = (y, D) => {
    y._isLeaving = !1, kt(y, h), kt(y, m), kt(y, v), D && D();
  }, N = (y) => (D, q) => {
    const re = y ? V : A, oe = () => I(D, y, q);
    Tt(re, [D, oe]), Mi(() => {
      kt(D, y ? a : r), ot(D, y ? c : l), Ai(re) || Pi(D, n, M, oe);
    });
  };
  return xe(t, {
    onBeforeEnter(y) {
      Tt(H, [y]), ot(y, r), ot(y, o);
    },
    onBeforeAppear(y) {
      Tt(se, [y]), ot(y, a), ot(y, f);
    },
    onEnter: N(!1),
    onAppear: N(!0),
    onLeave(y, D) {
      y._isLeaving = !0;
      const q = () => K(y, D);
      ot(y, h), y._enterCancelled ? (ot(y, v), Li(y)) : (Li(y), ot(y, v)), Mi(() => {
        y._isLeaving && (kt(y, h), ot(y, m), Ai(E) || Pi(y, n, Y, q));
      }), Tt(E, [y, q]);
    },
    onEnterCancelled(y) {
      I(y, !1, void 0, !0), Tt(C, [y]);
    },
    onAppearCancelled(y) {
      I(y, !0, void 0, !0), Tt(j, [y]);
    },
    onLeaveCancelled(y) {
      K(y), Tt(B, [y]);
    }
  });
}
function Ra(e) {
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
  return Po(e);
}
function ot(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.add(s)), (e[ws] || (e[ws] = /* @__PURE__ */ new Set())).add(t);
}
function kt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const s = e[ws];
  s && (s.delete(t), s.size || (e[ws] = void 0));
}
function Mi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let $a = 0;
function Pi(e, t, s, n) {
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
  const s = window.getComputedStyle(e), n = (L) => (s[L] || "").split(", "), i = n(`${mt}Delay`), r = n(`${mt}Duration`), o = Ri(i, r), l = n(`${es}Delay`), a = n(`${es}Duration`), f = Ri(l, a);
  let c = null, h = 0, v = 0;
  t === mt ? o > 0 && (c = mt, h = o, v = r.length) : t === es ? f > 0 && (c = es, h = f, v = a.length) : (h = Math.max(o, f), c = h > 0 ? o > f ? mt : es : null, v = c ? c === mt ? r.length : a.length : 0);
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
function Ri(e, t) {
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
  const n = e[ws];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const qs = /* @__PURE__ */ Symbol("_vod"), mo = /* @__PURE__ */ Symbol("_vsh"), Rs = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: s }) {
    e[qs] = e.style.display === "none" ? "" : e.style.display, s && t ? s.beforeEnter(e) : ts(e, t);
  },
  mounted(e, { value: t }, { transition: s }) {
    s && t && s.enter(e);
  },
  updated(e, { value: t, oldValue: s }, { transition: n }) {
    !t != !s && (n ? t ? (n.beforeEnter(e), ts(e, !0), n.enter(e)) : n.leave(e, () => {
      ts(e, !1);
    }) : ts(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ts(e, t);
  }
};
function ts(e, t) {
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
          s[l] == null && ns(n, l, "");
        }
      else
        for (const o in t)
          s[o] == null && ns(n, o, "");
    for (const o in s) {
      o === "display" && (r = !0);
      const l = s[o];
      l != null ? Ha(
        e,
        o,
        !me(t) && t ? t[o] : void 0,
        l
      ) || ns(n, o, l) : ns(n, o, "");
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
function ns(e, t, s) {
  if (z(s))
    s.forEach((n) => ns(e, t, n));
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
    if (z(i)) {
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
  return z(t) ? (s) => Os(t, s) : t;
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
const is = {
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
var hs;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(hs || (hs = {}));
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
    Hn(i) && Hn(n) && e.hasOwnProperty(s) && !/* @__PURE__ */ ve(n) && !/* @__PURE__ */ ht(n) ? e[s] = Vn(i, n) : e[s] = n;
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
    const c = /* @__PURE__ */ al(s.state.value[e]);
    return vt(c, r, Object.keys(o || {}).reduce((h, v) => (h[v] = Zn(Ue(() => {
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
  const L = n.state.value[e];
  !r && !L && (n.state.value[e] = {});
  let M;
  function Y(j) {
    let I;
    f = c = !1, typeof j == "function" ? (j(n.state.value[e]), I = {
      type: hs.patchFunction,
      storeId: e,
      events: m
    }) : (Vn(n.state.value[e], j), I = {
      type: hs.patchObject,
      payload: j,
      storeId: e,
      events: m
    });
    const K = M = Symbol();
    Re().then(() => {
      M === K && (f = !0);
    }), c = !0, Dt(h, I, n.state.value[e]);
  }
  const H = r ? function() {
    const { state: I } = s, K = I ? I() : {};
    this.$patch((N) => {
      vt(N, K);
    });
  } : (
    /* istanbul ignore next */
    xo
  );
  function A() {
    o.stop(), h = [], v = [], n._s.delete(e);
  }
  const C = (j, I = "") => {
    if (Ji in j)
      return j[Tn] = I, j;
    const K = function() {
      dn(n);
      const N = Array.from(arguments), y = [], D = [];
      function q(Q) {
        y.push(Q);
      }
      function re(Q) {
        D.push(Q);
      }
      Dt(v, {
        args: N,
        name: K[Tn],
        store: B,
        after: q,
        onError: re
      });
      let oe;
      try {
        oe = j.apply(this && this.$id === e ? this : B, N);
      } catch (Q) {
        throw Dt(D, Q), Q;
      }
      return oe instanceof Promise ? oe.then((Q) => (Dt(y, Q), Q)).catch((Q) => (Dt(D, Q), Promise.reject(Q))) : (Dt(y, oe), oe);
    };
    return K[Ji] = !0, K[Tn] = I, K;
  }, E = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: zi.bind(null, v),
    $patch: Y,
    $reset: H,
    $subscribe(j, I = {}) {
      const K = zi(h, j, I.detached, () => N()), N = o.run(() => $e(() => n.state.value[e], (y) => {
        (I.flush === "sync" ? c : f) && j({
          storeId: e,
          type: hs.direct,
          events: m
        }, y);
      }, vt({}, a, I)));
      return K;
    },
    $dispose: A
  }, B = /* @__PURE__ */ sn(E);
  n._s.set(e, B);
  const V = (n._a && n._a.runWithContext || lc)(() => n._e.run(() => (o = dr()).run(() => t({ action: C }))));
  for (const j in V) {
    const I = V[j];
    if (/* @__PURE__ */ ve(I) && !uc(I) || /* @__PURE__ */ ht(I))
      r || (L && cc(I) && (/* @__PURE__ */ ve(I) ? I.value = L[j] : Vn(I, L[j])), n.state.value[e][j] = I);
    else if (typeof I == "function") {
      const K = C(I, j);
      V[j] = K, l.actions[j] = I;
    }
  }
  return vt(B, V), vt(/* @__PURE__ */ ie(B), V), Object.defineProperty(B, "$state", {
    get: () => n.state.value[e],
    set: (j) => {
      Y((I) => {
        vt(I, j);
      });
    }
  }), n._p.forEach((j) => {
    vt(B, o.run(() => j({
      store: B,
      app: n._a,
      pinia: n,
      options: l
    })));
  }), L && r && s.hydrate && s.hydrate(B.$state, L), f = !0, c = !0, B;
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
    l || (f ? as(_o, null) : null), l && dn(l), l = bo, l._s.has(n) || (r ? wo(n, t, i, l) : fc(n, i, l)), l._s.get(n);
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
const Vt = "st-music-player", Gi = "stmp_cursor", Xi = "stmp_userlist";
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
function $s() {
  return `stmp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
const qt = /* @__PURE__ */ hn("playlist", {
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
        id: $s(),
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
        id: $s(),
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
        id: $s(),
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
      await Lt().loadAndPlay(i);
    },
    handleNewCues(e) {
      if (e.length === 0) return;
      const t = Ie();
      let s = null;
      for (const n of e)
        for (const i of n.cues) {
          const r = {
            id: $s(),
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
        qt().next();
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
    return (t, s) => (T(), R("svg", {
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
      e.name === "play" ? (T(), R("polygon", Ic)) : e.name === "pause" ? (T(), R(te, { key: 1 }, [
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
      ], 64)) : e.name === "prev" ? (T(), R(te, { key: 2 }, [
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
      ], 64)) : e.name === "next" ? (T(), R(te, { key: 3 }, [
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
      ], 64)) : e.name === "repeat" ? (T(), R(te, { key: 4 }, [
        s[6] || (s[6] = p("polyline", { points: "17 1 21 5 17 9" }, null, -1)),
        s[7] || (s[7] = p("path", { d: "M3 11V9a4 4 0 0 1 4-4h14" }, null, -1)),
        s[8] || (s[8] = p("polyline", { points: "7 23 3 19 7 15" }, null, -1)),
        s[9] || (s[9] = p("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" }, null, -1))
      ], 64)) : e.name === "repeat-one" ? (T(), R(te, { key: 5 }, [
        s[10] || (s[10] = Ps('<polyline points="17 1 21 5 17 9" data-v-4bfc4099></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14" data-v-4bfc4099></path><polyline points="7 23 3 19 7 15" data-v-4bfc4099></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3" data-v-4bfc4099></path><text x="12" y="14" text-anchor="middle" font-size="8" fill="currentColor" stroke="none" font-weight="bold" data-v-4bfc4099>1</text>', 5))
      ], 64)) : e.name === "shuffle" ? (T(), R(te, { key: 6 }, [
        s[11] || (s[11] = Ps('<polyline points="16 3 21 3 21 8" data-v-4bfc4099></polyline><line x1="4" y1="20" x2="21" y2="3" data-v-4bfc4099></line><polyline points="21 16 21 21 16 21" data-v-4bfc4099></polyline><line x1="15" y1="15" x2="21" y2="21" data-v-4bfc4099></line><line x1="4" y1="4" x2="9" y2="9" data-v-4bfc4099></line>', 5))
      ], 64)) : e.name === "search" ? (T(), R(te, { key: 7 }, [
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
      ], 64)) : e.name === "plus" ? (T(), R(te, { key: 8 }, [
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
      ], 64)) : e.name === "x" ? (T(), R(te, { key: 9 }, [
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
      ], 64)) : e.name === "chevron-down" ? (T(), R("polyline", Ec)) : e.name === "chevron-up" ? (T(), R("polyline", Tc)) : e.name === "music" ? (T(), R(te, { key: 12 }, [
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
      ], 64)) : e.name === "volume" ? (T(), R(te, { key: 13 }, [
        s[21] || (s[21] = p("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[22] || (s[22] = p("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1)),
        s[23] || (s[23] = p("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }, null, -1))
      ], 64)) : e.name === "volume-mute" ? (T(), R(te, { key: 14 }, [
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
      ], 64)) : e.name === "check" ? (T(), R("polyline", kc)) : e.name === "loader" ? (T(), R(te, { key: 16 }, [
        s[27] || (s[27] = Ps('<line x1="12" y1="2" x2="12" y2="6" data-v-4bfc4099></line><line x1="12" y1="18" x2="12" y2="22" data-v-4bfc4099></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" data-v-4bfc4099></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" data-v-4bfc4099></line><line x1="2" y1="12" x2="6" y2="12" data-v-4bfc4099></line><line x1="18" y1="12" x2="22" y2="12" data-v-4bfc4099></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" data-v-4bfc4099></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" data-v-4bfc4099></line>', 8))
      ], 64)) : e.name === "list-music" ? (T(), R(te, { key: 17 }, [
        s[28] || (s[28] = Ps('<path d="M3 12h11" data-v-4bfc4099></path><path d="M3 6h11" data-v-4bfc4099></path><path d="M3 18h7" data-v-4bfc4099></path><path d="M16 8v13" data-v-4bfc4099></path><circle cx="14" cy="21" r="2" data-v-4bfc4099></circle><path d="M16 8l5-2v3" data-v-4bfc4099></path>', 6))
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
}, Pc = {
  key: 0,
  class: "stmp-mini-cover"
}, Rc = ["src"], $c = {
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
    const t = Lt(), s = qt(), n = e, i = /* @__PURE__ */ pe(!1), r = Ue(() => t.currentTrack?.cover || ""), o = Ue(() => !!t.currentTrack), l = Ue(() => {
      const V = t.currentTrack;
      if (!V) return "";
      const j = V.name, I = V.artist || "";
      return I ? `${j} - ${I}` : j;
    }), a = Ue(() => {
      const V = t.currentLyricIndex;
      return V < 0 || V >= t.lyrics.length ? "" : t.lyrics[V].text;
    }), f = Ue(() => {
      const V = t.currentLyricIndex;
      if (V < 0 || V >= t.lyrics.length) return 0;
      const j = t.lyrics[V];
      return j.next ? Math.max(500, (j.next.time - j.time) * 1e3) : 5e3;
    }), c = /* @__PURE__ */ pe(0), h = /* @__PURE__ */ pe([]), v = /* @__PURE__ */ pe(null);
    function m(V, j) {
      V && (h.value[j] = V);
    }
    async function L() {
      await Re();
      const V = t.currentLyricIndex, j = v.value;
      if (!j || V < 0) {
        c.value = 0;
        return;
      }
      const I = h.value[V];
      if (!I) return;
      const K = I.offsetTop, N = I.offsetHeight, y = j.clientHeight;
      c.value = K - y / 2 + N / 2;
    }
    $e(() => t.currentLyricIndex, L), $e(() => t.lyrics, () => {
      h.value = [], L();
    });
    const M = /* @__PURE__ */ pe(null), Y = /* @__PURE__ */ pe(null), H = /* @__PURE__ */ pe(0), A = /* @__PURE__ */ pe(0);
    function C() {
      const V = M.value, j = Y.value;
      if (!V || !j) {
        H.value = 0;
        return;
      }
      const I = V.scrollWidth - j.clientWidth;
      I > 3 && f.value > 0 ? (A.value = Math.max(200, f.value - 200), requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          H.value = -I;
        });
      })) : H.value = 0;
    }
    $e(a, () => {
      A.value = 0, H.value = 0, Re(() => requestAnimationFrame(C));
    });
    function E() {
      i.value = !0;
    }
    $e(() => t.currentTrack?.url, () => {
      i.value = !1;
    });
    function B(V) {
      V.stopPropagation(), t.togglePlay();
    }
    function se(V) {
      V.stopPropagation(), s.next();
    }
    return an(() => {
      L(), requestAnimationFrame(C);
    }), (V, j) => n.isDock && !n.isMobile ? (T(), R("div", Mc, [
      r.value && !i.value ? (T(), R("div", Pc, [
        p("img", {
          src: r.value,
          alt: "",
          onError: E
        }, null, 40, Rc)
      ])) : (T(), R("div", $c, [
        ee(ge, {
          name: "music",
          size: 14
        })
      ])),
      p("div", {
        ref_key: "dockWindowRef",
        ref: v,
        class: "stmp-mini-dock-text"
      }, [
        b(t).lyrics.length > 0 ? (T(), R("div", {
          key: 0,
          class: "stmp-mini-dock-scroll",
          style: Pt({ transform: `translateY(-${c.value}px)` })
        }, [
          (T(!0), R(te, null, Fe(b(t).lyrics, (I, K) => (T(), R("span", {
            key: K,
            ref_for: !0,
            ref: (N) => m(N, K),
            class: ye(["stmp-mini-dock-line", { "stmp-mini-dock-line-active": K === b(t).currentLyricIndex }])
          }, X(I.text), 3))), 128))
        ], 4)) : (T(), R("span", Lc, X(l.value), 1))
      ], 512),
      p("div", Oc, [
        p("button", {
          class: "stmp-mini-btn",
          "aria-label": b(t).isPlaying ? b(U)("Pause") : b(U)("Play"),
          onClick: B
        }, [
          ee(ge, {
            name: b(t).isPlaying ? "pause" : "play",
            size: 14
          }, null, 8, ["name"])
        ], 8, Dc),
        p("button", {
          class: "stmp-mini-btn",
          "aria-label": b(U)("Next"),
          onClick: se
        }, [
          ee(ge, {
            name: "next",
            size: 14
          })
        ], 8, Nc)
      ])
    ])) : n.isDock && n.isMobile ? (T(), R("div", Fc, [
      r.value && !i.value ? (T(), R("div", Uc, [
        p("img", {
          src: r.value,
          alt: "",
          onError: E
        }, null, 40, Hc)
      ])) : (T(), R("div", Vc, [
        ee(ge, {
          name: "music",
          size: 14
        })
      ])),
      p("div", jc, [
        b(t).lyrics.length > 0 ? (T(), R("div", {
          key: 0,
          class: "stmp-mini-dock-scroll",
          style: Pt({ transform: `translateY(-${c.value}px)` })
        }, [
          (T(!0), R(te, null, Fe(b(t).lyrics, (I, K) => (T(), R("span", {
            key: K,
            ref_for: !0,
            ref: (N) => m(N, K),
            class: ye(["stmp-mini-dock-line", { "stmp-mini-dock-line-active": K === b(t).currentLyricIndex }])
          }, X(I.text), 3))), 128))
        ], 4)) : (T(), R("span", Bc, X(l.value), 1))
      ], 512),
      p("div", Kc, [
        p("button", {
          class: "stmp-mini-btn",
          "aria-label": b(t).isPlaying ? b(U)("Pause") : b(U)("Play"),
          onClick: B
        }, [
          ee(ge, {
            name: b(t).isPlaying ? "pause" : "play",
            size: 16
          }, null, 8, ["name"])
        ], 8, Wc),
        p("button", {
          class: "stmp-mini-btn",
          "aria-label": b(U)("Next"),
          onClick: se
        }, [
          ee(ge, {
            name: "next",
            size: 16
          })
        ], 8, zc)
      ])
    ])) : o.value ? (T(), R("div", Yc, [
      p("button", {
        class: "stmp-mini-cover stmp-mini-cover-square",
        "aria-label": b(t).isPlaying ? b(U)("Pause") : b(U)("Play"),
        onClick: B
      }, [
        r.value && !i.value ? (T(), R("img", {
          key: 0,
          src: r.value,
          alt: "",
          onError: E
        }, null, 40, Xc)) : (T(), bt(ge, {
          key: 1,
          name: "music",
          size: 20
        })),
        p("div", Zc, [
          ee(ge, {
            name: b(t).isPlaying ? "pause" : "play",
            size: 18
          }, null, 8, ["name"])
        ])
      ], 8, Gc),
      p("div", Qc, [
        p("span", eu, X(l.value), 1),
        p("div", {
          ref_key: "lyricContainerRef",
          ref: Y,
          class: "stmp-mini-lyric"
        }, [
          p("span", {
            ref_key: "lyricScrollRef",
            ref: M,
            class: "stmp-mini-lyric-scroll",
            style: Pt({
              transform: `translateX(${H.value}px)`,
              transition: A.value > 0 ? `transform ${A.value}ms linear` : "none"
            })
          }, X(a.value || " "), 5)
        ], 512)
      ])
    ])) : (T(), R("div", Jc, [
      p("div", qc, [
        ee(ge, {
          name: "music",
          size: 20
        })
      ])
    ]));
  }
}), su = /* @__PURE__ */ St(tu, [["__scopeId", "data-v-18f3ad88"]]), nu = { class: "stmp-playlist" }, iu = { class: "stmp-upload-area" }, ru = ["aria-label"], ou = {
  key: 0,
  class: "stmp-empty"
}, lu = { class: "stmp-group-label" }, au = ["onClick"], cu = { class: "stmp-item-index" }, uu = { class: "stmp-item-info" }, fu = { class: "stmp-item-song" }, du = {
  key: 0,
  class: "stmp-item-artist"
}, hu = ["onClick"], pu = /* @__PURE__ */ wt({
  __name: "PlaylistView",
  setup(e) {
    const t = qt(), s = Ie(), n = /* @__PURE__ */ pe(null), i = () => {
      n.value?.click();
    }, r = async (c) => {
      const h = c.target;
      if (!h.files || !h.files[0]) return;
      const v = h.files[0], m = `stmp:audio:${Date.now()}-${v.name}`, L = s.storage;
      L && (await L.setBlob(m, v), t.addLocalFile(v.name, m)), h.value = "";
    }, o = Ue(() => {
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
    function f(c) {
      t.removeItem(c);
    }
    return (c, h) => (T(), R("div", nu, [
      p("div", iu, [
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
          "aria-label": b(U)("Add local file"),
          onClick: i
        }, " + " + X(b(U)("Add local file")), 9, ru)
      ]),
      b(t).isEmpty ? (T(), R("div", ou, X(b(U)("No Songs")), 1)) : (T(), R(te, { key: 1 }, Fe(["chat", "user", "local"], (v) => p("div", {
        key: v,
        class: "stmp-group"
      }, [
        o.value[v].length ? (T(), R(te, { key: 0 }, [
          p("div", lu, X(l[v]), 1),
          (T(!0), R(te, null, Fe(o.value[v], (m) => (T(), R("div", {
            key: m.item.id,
            class: ye(["stmp-item", { active: m.index === b(t).currentIndex }]),
            onClick: (L) => a(m.index)
          }, [
            p("span", cu, X(m.index + 1), 1),
            p("div", uu, [
              p("span", fu, X(m.item.song), 1),
              m.item.artist ? (T(), R("span", du, X(m.item.artist), 1)) : Me("", !0)
            ]),
            p("button", {
              class: "stmp-item-del",
              onClick: Ht((L) => f(m.index), ["stop"])
            }, [
              ee(ge, {
                name: "x",
                size: 14
              })
            ], 8, hu)
          ], 10, au))), 128))
        ], 64)) : Me("", !0)
      ])), 64))
    ]));
  }
}), gu = /* @__PURE__ */ St(pu, [["__scopeId", "data-v-6157de27"]]), mu = { class: "stmp-search" }, vu = { class: "stmp-search-bar" }, yu = ["placeholder"], bu = ["disabled"], _u = {
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
    const t = Sc(), s = qt(), n = Ie(), i = /* @__PURE__ */ pe(t.keyword), r = /* @__PURE__ */ pe(/* @__PURE__ */ new Set()), o = /* @__PURE__ */ pe(null);
    async function l() {
      t.setKeyword(i.value);
      const m = So(n.settings.providers);
      await t.search(m);
    }
    const a = () => {
      l();
    };
    function f(m) {
      const L = m.provider + m.id;
      if (o.value === L) return;
      o.value = L;
      const M = s.list.length;
      s.addFromSearch(m);
      const Y = s.list.length - 1;
      Y >= M && s.play(Y), setTimeout(() => {
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
    return (m, L) => (T(), R("div", mu, [
      p("div", vu, [
        lt(p("input", {
          "onUpdate:modelValue": L[0] || (L[0] = (M) => i.value = M),
          class: "stmp-search-input",
          placeholder: b(U)("Search Song..."),
          onKeydown: vo(l, ["enter"])
        }, null, 40, yu), [
          [is, i.value]
        ]),
        p("button", {
          class: "stmp-icon-btn",
          disabled: b(t).isSearching,
          onClick: l
        }, [
          b(t).isSearching ? (T(), bt(ge, {
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
      b(t).error ? (T(), R("div", _u, [
        p("span", null, X(b(t).error), 1),
        p("button", {
          class: "stmp-retry-btn",
          "aria-label": b(U)("Retry"),
          onClick: a
        }, X(b(U)("Retry")), 9, xu)
      ])) : Me("", !0),
      b(t).isSearching ? (T(), R("div", wu, X(b(U)("Searching...")), 1)) : i.value && !b(t).results.length ? (T(), R("div", Su, X(b(U)("No results")), 1)) : !i.value && !b(t).results.length ? (T(), R("div", Cu, X(b(U)("Type a song name to search")), 1)) : Me("", !0),
      b(t).results.length ? (T(), R("div", Iu, [
        (T(!0), R(te, null, Fe(b(t).results, (M) => (T(), R("div", {
          key: M.provider + M.id,
          class: ye(["stmp-result", { "stmp-result-playing": v(M) }])
        }, [
          p("div", {
            class: "stmp-result-info",
            onClick: (Y) => f(M)
          }, [
            p("span", Tu, X(M.name), 1),
            M.artist ? (T(), R("span", ku, X(M.artist), 1)) : Me("", !0)
          ], 8, Eu),
          p("button", {
            class: ye(["stmp-icon-btn stmp-result-add", { added: h(M) }]),
            "aria-label": h(M) ? b(U)("Added") : b(U)("Add to list"),
            onClick: Ht((Y) => c(M), ["stop"])
          }, [
            ee(ge, {
              name: h(M) ? "check" : "plus",
              size: 16
            }, null, 8, ["name"])
          ], 10, Au)
        ], 2))), 128))
      ])) : Me("", !0)
    ]));
  }
}), Pu = /* @__PURE__ */ St(Mu, [["__scopeId", "data-v-a8d156af"]]), Ru = { class: "stmp-panel" }, $u = { class: "stmp-topbar stmp-drag-handle" }, Lu = ["aria-label"], Ou = { class: "stmp-cover-large" }, Du = ["src"], Nu = {
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
    const t = Lt(), s = qt(), n = Ie(), i = /* @__PURE__ */ pe("cover"), r = /* @__PURE__ */ pe(null), o = /* @__PURE__ */ pe(!1), l = /* @__PURE__ */ pe(!1);
    let a = null;
    const f = Ue(() => t.currentTrack?.cover || ""), c = () => {
      o.value = !0;
    };
    $e(
      () => t.currentTrack,
      () => {
        o.value = !1;
      }
    );
    const h = Ue(
      () => t.duration > 0 ? t.currentTime / t.duration * 100 : 0
    ), v = /* @__PURE__ */ pe(0), m = /* @__PURE__ */ pe([]), L = /* @__PURE__ */ pe(null);
    function M(y, D) {
      y && (m.value[D] = y);
    }
    async function Y() {
      await Re();
      const y = t.currentLyricIndex, D = L.value;
      if (!D || y < 0) {
        v.value = 0;
        return;
      }
      const q = m.value[y];
      if (!q) return;
      const re = q.offsetTop, oe = q.offsetHeight, Q = D.clientHeight;
      v.value = re - Q / 2 + oe / 2;
    }
    $e(() => t.currentLyricIndex, Y), $e(() => t.lyrics, () => {
      m.value = [], Y();
    });
    function H(y) {
      const D = Math.floor(y / 60), q = Math.floor(y % 60);
      return D + ":" + q.toString().padStart(2, "0");
    }
    function A(y) {
      const D = y.target;
      t.seek(Number(D.value) / 100 * t.duration);
    }
    const C = ["list", "random", "single"], E = {
      list: "repeat",
      random: "shuffle",
      single: "repeat-one"
    };
    function B() {
      const y = n.settings.playMode, D = C.indexOf(y), q = C[(D + 1) % C.length];
      n.setPlayMode(q);
    }
    function se(y) {
      const D = y.target;
      t.setVolume(Number(D.value));
    }
    function V() {
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
    function K(y) {
      r.value === y ? r.value = null : r.value = y;
    }
    function N() {
      r.value = null;
    }
    return (y, D) => (T(), R("div", Ru, [
      p("div", $u, [
        D[7] || (D[7] = p("div", { class: "stmp-topbar-spacer" }, null, -1)),
        p("button", {
          class: "stmp-icon-btn",
          "aria-label": b(U)("Collapse panel"),
          onClick: D[0] || (D[0] = Ht((q) => y.$emit("collapse"), ["stop"]))
        }, [
          ee(ge, {
            name: "chevron-down",
            size: 18
          })
        ], 8, Lu)
      ]),
      p("div", {
        class: "stmp-display",
        onClick: D[1] || (D[1] = (q) => i.value = i.value === "cover" ? "lyric" : "cover")
      }, [
        p("div", {
          class: ye(["stmp-cover-mode", { hidden: i.value !== "cover" }])
        }, [
          p("div", Ou, [
            f.value && !o.value ? (T(), R("img", {
              key: 0,
              src: f.value,
              alt: "cover",
              onError: c
            }, null, 40, Du)) : (T(), R("div", Nu, [
              ee(ge, {
                name: "music",
                size: 48
              })
            ]))
          ]),
          p("div", Fu, X(b(t).currentTrack?.name || b(U)("No Song")), 1),
          p("div", Uu, X(b(t).currentTrack?.artist || " "), 1)
        ], 2),
        p("div", {
          class: ye(["stmp-lyric-mode", { hidden: i.value !== "lyric" }])
        }, [
          p("div", Hu, [
            p("div", Vu, X(b(t).currentTrack?.name || b(U)("No Song")), 1),
            p("div", ju, X(b(t).currentTrack?.artist || " "), 1)
          ]),
          p("div", {
            ref_key: "lyricWindowRef",
            ref: L,
            class: "stmp-lyric-window"
          }, [
            b(t).lyrics.length === 0 ? (T(), R("div", Bu, [
              ee(ge, {
                name: "music",
                size: 18
              })
            ])) : (T(), R("div", {
              key: 1,
              class: "stmp-lyric-scroll",
              style: Pt({ transform: `translateY(-${v.value}px)` })
            }, [
              (T(!0), R(te, null, Fe(b(t).lyrics, (q, re) => (T(), R("div", {
                key: re,
                ref_for: !0,
                ref: (oe) => M(oe, re),
                class: ye(["stmp-lyric-line", { "stmp-lyric-active": re === b(t).currentLyricIndex }])
              }, X(q.text), 3))), 128))
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
          onInput: A
        }, null, 40, Wu),
        p("div", zu, [
          p("span", null, X(H(b(t).currentTime)), 1),
          p("span", null, X(H(b(t).duration)), 1)
        ])
      ]),
      p("div", Ju, [
        p("div", qu, [
          p("button", {
            class: ye(["stmp-ctrl-btn", { active: r.value === "search" }]),
            "aria-label": b(U)("Search"),
            onClick: D[2] || (D[2] = Ht((q) => K("search"), ["stop"]))
          }, [
            ee(ge, {
              name: "search",
              size: 18
            })
          ], 10, Yu)
        ]),
        p("button", {
          class: "stmp-ctrl-btn",
          "aria-label": b(U)("Toggle play mode"),
          onClick: B
        }, [
          ee(ge, {
            name: E[b(n).settings.playMode],
            size: 18
          }, null, 8, ["name"])
        ], 8, Gu),
        p("button", {
          class: "stmp-ctrl-btn",
          "aria-label": b(U)("Previous"),
          onClick: D[3] || (D[3] = (q) => b(s).prev())
        }, [
          ee(ge, {
            name: "prev",
            size: 18
          })
        ], 8, Xu),
        p("button", {
          class: "stmp-ctrl-btn stmp-play-btn",
          "aria-label": b(t).isPlaying ? b(U)("Pause") : b(U)("Play"),
          onClick: D[4] || (D[4] = (q) => b(t).togglePlay())
        }, [
          ee(ge, {
            name: b(t).isPlaying ? "pause" : "play",
            size: 24
          }, null, 8, ["name"])
        ], 8, Zu),
        p("button", {
          class: "stmp-ctrl-btn",
          "aria-label": b(U)("Next"),
          onClick: D[5] || (D[5] = (q) => b(s).next())
        }, [
          ee(ge, {
            name: "next",
            size: 18
          })
        ], 8, Qu),
        p("button", {
          class: ye(["stmp-ctrl-btn", { active: r.value === "list" }]),
          "aria-label": b(U)("Playlist"),
          onClick: D[6] || (D[6] = Ht((q) => K("list"), ["stop"]))
        }, [
          ee(ge, {
            name: "list-music",
            size: 18
          })
        ], 10, ef),
        p("div", tf, [
          p("div", {
            class: "stmp-volume-container",
            onMouseenter: V,
            onMouseleave: j
          }, [
            p("button", {
              class: "stmp-ctrl-btn",
              "aria-label": b(U)("Mute / Unmute"),
              onClick: I
            }, [
              ee(ge, {
                name: b(t).volume === 0 ? "volume-mute" : "volume",
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
                value: b(t).volume,
                class: "stmp-volume-vertical",
                orient: "vertical",
                onInput: se
              }, null, 40, nf)
            ], 2)
          ], 32)
        ])
      ]),
      ee(Ma, { name: "stmp-overlay" }, {
        default: Lr(() => [
          r.value ? (T(), R("div", rf, [
            p("div", of, [
              p("span", lf, X(r.value === "list" ? b(U)("Playlist") : b(U)("Search")), 1),
              p("button", {
                class: "stmp-overlay-close",
                "aria-label": b(U)("Close"),
                onClick: Ht(N, ["stop"])
              }, [
                ee(ge, {
                  name: "x",
                  size: 16
                })
              ], 8, af)
            ]),
            p("div", cf, [
              r.value === "list" ? (T(), bt(gu, { key: 0 })) : (T(), bt(Pu, { key: 1 }))
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
    const o = Ue(() => t.settings.widgetMode === "dock"), l = Ue(() => t.settings.widgetMode === "hidden"), a = /* @__PURE__ */ pe(window.innerWidth <= 768), f = (N) => {
      N.key === "Escape" && (n.value = !1), N.key === " " && N.target === document.body && (N.preventDefault(), s.togglePlay());
    };
    let c = 0, h = 0, v = 0, m = 0, L = !1, M = !1, Y = null, H = null;
    function A(N) {
      if (o.value) return;
      const y = N.target;
      if (y.closest("input, .stmp-result, .stmp-item, .stmp-upload-btn, .stmp-search-input, .stmp-controls, .stmp-lyrics, .stmp-overlay, .stmp-display, .stmp-overlay-close") || n.value && (!y.closest(".stmp-drag-handle") || y.closest("button")) || !n.value && y.closest("button"))
        return;
      const D = i.value?.getBoundingClientRect();
      D && (c = N.clientX, h = N.clientY, v = D.left, m = D.top, L = !1, M = !0, i.value && (i.value.style.left = D.left + "px", i.value.style.top = D.top + "px", i.value.style.right = "auto", i.value.style.bottom = "auto"), Y = C, H = E, document.addEventListener("pointermove", Y), document.addEventListener("pointerup", H), N.preventDefault());
    }
    function C(N) {
      if (!i.value || !M) return;
      const y = N.clientX - c, D = N.clientY - h;
      (Math.abs(y) > 3 || Math.abs(D) > 3) && (L = !0);
      let q = v + y, re = m + D;
      const oe = i.value.offsetWidth || 60, Q = i.value.offsetHeight || 40, ce = window.innerWidth - oe, it = window.innerHeight - Q;
      q = Math.max(0, Math.min(q, ce)), re = Math.max(0, Math.min(re, it)), i.value.style.left = q + "px", i.value.style.top = re + "px";
    }
    function E() {
      if (M = !1, Y && document.removeEventListener("pointermove", Y), H && document.removeEventListener("pointerup", H), Y = null, H = null, !L) {
        I();
        return;
      }
      if (i.value) {
        const N = i.value.getBoundingClientRect();
        t.setPosition({ x: N.left, y: N.top }), n.value && Re(() => B());
      }
    }
    function B() {
      if (!i.value) return;
      const N = i.value.getBoundingClientRect(), y = i.value.offsetWidth, D = i.value.offsetHeight;
      let q = N.left, re = N.top;
      q + y > window.innerWidth && (q = window.innerWidth - y), re + D > window.innerHeight && (re = window.innerHeight - D), q < 0 && (q = 0), re < 0 && (re = 0), i.value.style.left = q + "px", i.value.style.top = re + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", t.setPosition({ x: q, y: re });
    }
    function se() {
      if (!i.value || !o.value) return;
      const N = document.querySelector("#send_form");
      if (!N) return;
      const y = N.getBoundingClientRect(), D = i.value.offsetHeight || 38, q = Math.max(80, y.top - 8);
      i.value.style.maxHeight = q + "px";
      let re = y.top - Math.min(D, q);
      if (re < 4 && (re = 4), window.innerWidth <= 768)
        i.value.style.left = y.left + "px", i.value.style.width = y.width + "px";
      else {
        const oe = t.settings.dockAlign === "right", Q = i.value.offsetWidth;
        oe ? i.value.style.left = y.right - Q + "px" : i.value.style.left = y.left + "px", i.value.style.width = "";
      }
      i.value.style.top = re + "px", i.value.style.right = "auto", i.value.style.bottom = "auto";
    }
    function V() {
      if (!i.value || o.value) return;
      const N = t.settings.position;
      N ? (i.value.style.left = N.x + "px", i.value.style.top = N.y + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", window.innerWidth <= 768 && Re(() => B())) : (i.value.style.right = "16px", i.value.style.top = "16px", i.value.style.left = "auto", i.value.style.bottom = "auto");
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
      n.value = !n.value, Re(() => {
        o.value ? se() : t.settings.position && B();
      });
    }
    $e(() => t.settings.widgetMode, (N) => {
      n.value = !1, i.value && (i.value.style.width = "", i.value.style.left = "", i.value.style.top = "", i.value.style.right = "", i.value.style.bottom = "", i.value.style.maxHeight = ""), Re(() => {
        N === "dock" ? se() : V();
      });
    }), $e(() => t.settings.dockAlign, () => {
      o.value && Re(() => se());
    }), an(() => {
      Re(() => {
        o.value ? se() : V();
      }), i.value && typeof ResizeObserver < "u" && (r = new ResizeObserver(() => {
        o.value && se();
      }), r.observe(i.value)), window.addEventListener("resize", K), window.addEventListener("keydown", f);
    });
    function K() {
      a.value = window.innerWidth <= 768, o.value ? Re(() => se()) : Re(() => B());
    }
    return ei(() => {
      E(), r && (r.disconnect(), r = null), window.removeEventListener("resize", K), window.removeEventListener("keydown", f);
    }), (N, y) => l.value ? Me("", !0) : (T(), R("div", {
      key: 0,
      ref_key: "widgetRef",
      ref: i,
      class: ye(["stmp-widget", {
        "stmp-expanded": n.value,
        "stmp-collapsed": !n.value,
        "stmp-dock": o.value
      }]),
      onPointerdown: A,
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
    return (i, r) => (T(), R("label", pf, [
      e.label ? (T(), R("span", gf, X(e.label), 1)) : Me("", !0),
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
}, Af = { class: "stmp-setting-label" }, Mf = { class: "stmp-mode-toggle" }, Pf = ["onClick"], Rf = { class: "stmp-setting-group" }, $f = { class: "stmp-setting-label" }, Lf = ["value"], Of = { class: "stmp-setting-group" }, Df = {
  class: "stmp-setting-label",
  for: "stmp-playmode"
}, Nf = ["value"], Ff = ["value"], Uf = { class: "stmp-tab-panel" }, Hf = {
  key: 0,
  class: "stmp-provider-fields"
}, Vf = ["onUpdate:modelValue", "placeholder"], jf = {
  key: 1,
  class: "stmp-provider-fields"
}, Bf = ["onUpdate:modelValue", "placeholder"], Kf = ["onUpdate:modelValue", "placeholder"], Wf = { class: "stmp-tab-panel" }, zf = { class: "stmp-setting-group" }, Jf = { class: "stmp-setting-label" }, qf = { class: "stmp-rules" }, Yf = ["onClick"], Gf = { class: "stmp-rule-add" }, Xf = ["placeholder"], Zf = { class: "stmp-tab-panel" }, Qf = { class: "stmp-data-btns" }, ed = /* @__PURE__ */ wt({
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
      const A = H.target;
      t.setVolume(Number(A.value));
    }
    function a(H) {
      const A = H.target;
      t.setPlayMode(A.value);
    }
    const f = {
      netease: U("NetEase"),
      local: U("Local Files"),
      custom: U("Custom API")
    };
    function c(H) {
      const A = t.settings.providers.find((C) => C.id === H);
      A && (A.enabled = !A.enabled, t.save());
    }
    const h = /* @__PURE__ */ pe("");
    function v() {
      const H = h.value.trim();
      H && (t.addCustomCueRule(H), h.value = "");
    }
    function m(H) {
      t.removeCustomCueRule(H);
    }
    const L = async () => {
      const H = t.storage;
      H && (await H.clearCache(), toastr.success(U("Cache cleared")));
    }, M = () => {
      const H = JSON.stringify(t.settings, null, 2), A = new Blob([H], { type: "application/json" }), C = URL.createObjectURL(A), E = document.createElement("a");
      E.href = C, E.download = "st-music-player-settings.json", E.click(), URL.revokeObjectURL(C);
    }, Y = () => {
      const H = document.createElement("input");
      H.type = "file", H.accept = ".json", H.onchange = async (A) => {
        const C = A.target.files?.[0];
        if (!C) return;
        const E = await C.text();
        try {
          const B = JSON.parse(E);
          if (typeof B != "object" || B === null) throw new Error("Not an object");
          const se = ["volume", "playMode", "position", "widgetMode", "autoPlayOnNewCue", "providers", "customCueRules"], V = {};
          for (const j of se)
            j in B && (V[j] = B[j]);
          if (typeof V.volume != "number" || V.volume < 0 || V.volume > 100)
            throw new Error("Invalid volume");
          if (typeof V.playMode != "string" || !["list", "random", "single"].includes(V.playMode))
            throw new Error("Invalid playMode");
          if (V.providers && !Array.isArray(V.providers))
            throw new Error("Invalid providers");
          if (V.customCueRules && !Array.isArray(V.customCueRules))
            throw new Error("Invalid customCueRules");
          Object.assign(t.settings, V), t.save(), toastr.success(U("Data imported"));
        } catch (B) {
          console.error("Import failed", B), toastr.error(U("Import failed") + ": " + (B instanceof Error ? B.message : U("Invalid JSON")));
        }
      }, H.click();
    };
    return (H, A) => (T(), R("div", bf, [
      p("div", _f, [
        (T(), R(te, null, Fe(n, (C) => p("div", {
          key: C.id,
          class: ye(["stmp-tab", { active: s.value === C.id }]),
          onClick: (E) => s.value = C.id
        }, [
          p("i", {
            class: ye(C.icon)
          }, null, 2),
          p("span", null, X(C.label), 1)
        ], 10, xf)), 64))
      ]),
      p("div", wf, [
        lt(p("div", Sf, [
          p("div", Cf, [
            p("label", If, X(b(U)("Widget Mode")), 1),
            p("div", Ef, [
              (T(), R(te, null, Fe(r, (C) => p("div", {
                key: C.value,
                class: ye(["menu_button menu_button_icon stmp-mode-btn", { toggled: b(t).settings.widgetMode === C.value }]),
                onClick: (E) => b(t).setWidgetMode(C.value)
              }, [
                p("i", {
                  class: ye(C.icon)
                }, null, 2),
                p("span", null, X(C.label), 1)
              ], 10, Tf)), 64))
            ])
          ]),
          b(t).settings.widgetMode === "dock" ? (T(), R("div", kf, [
            p("label", Af, X(b(U)("Dock Alignment")), 1),
            p("div", Mf, [
              (T(), R(te, null, Fe(o, (C) => p("div", {
                key: C.value,
                class: ye(["menu_button menu_button_icon stmp-mode-btn", { toggled: b(t).settings.dockAlign === C.value }]),
                onClick: (E) => b(t).setDockAlign(C.value)
              }, [
                p("i", {
                  class: ye(C.icon)
                }, null, 2),
                p("span", null, X(C.label), 1)
              ], 10, Pf)), 64))
            ])
          ])) : Me("", !0),
          p("div", Rf, [
            p("label", $f, X(b(U)("Default Volume")) + ": " + X(b(t).settings.volume), 1),
            p("input", {
              type: "range",
              min: "0",
              max: "100",
              value: b(t).settings.volume,
              onInput: l
            }, null, 40, Lf)
          ]),
          p("div", Of, [
            p("label", Df, X(b(U)("Default Play Mode")), 1),
            p("select", {
              id: "stmp-playmode",
              class: "text_pole",
              value: b(t).settings.playMode,
              onChange: a
            }, [
              (T(), R(te, null, Fe(i, (C) => p("option", {
                key: C.value,
                value: C.value
              }, X(C.label), 9, Ff)), 64))
            ], 40, Nf)
          ]),
          ee(Zi, {
            "model-value": b(t).settings.autoPlayOnNewCue,
            label: b(U)("Auto-play on new cue"),
            "onUpdate:modelValue": A[0] || (A[0] = (C) => {
              b(t).settings.autoPlayOnNewCue = C, b(t).save();
            })
          }, null, 8, ["model-value", "label"])
        ], 512), [
          [Rs, s.value === "playback"]
        ]),
        lt(p("div", Uf, [
          (T(!0), R(te, null, Fe(b(t).settings.providers, (C) => (T(), R("div", {
            key: C.id,
            class: "stmp-provider-card"
          }, [
            ee(Zi, {
              "model-value": C.enabled,
              label: f[C.id] || C.id,
              "onUpdate:modelValue": () => c(C.id)
            }, null, 8, ["model-value", "label", "onUpdate:modelValue"]),
            C.id === "netease" && C.enabled ? (T(), R("div", Hf, [
              lt(p("input", {
                class: "text_pole",
                "onUpdate:modelValue": (E) => C.config.baseURL = E,
                placeholder: b(U)("API baseURL"),
                onChange: A[1] || (A[1] = (E) => b(t).save())
              }, null, 40, Vf), [
                [is, C.config.baseURL]
              ])
            ])) : Me("", !0),
            C.id === "custom" && C.enabled ? (T(), R("div", jf, [
              lt(p("input", {
                class: "text_pole",
                "onUpdate:modelValue": (E) => C.config.searchURL = E,
                placeholder: b(U)("Search URL"),
                onChange: A[2] || (A[2] = (E) => b(t).save())
              }, null, 40, Bf), [
                [is, C.config.searchURL]
              ]),
              lt(p("input", {
                class: "text_pole",
                "onUpdate:modelValue": (E) => C.config.resolveURL = E,
                placeholder: b(U)("Resolve URL"),
                onChange: A[3] || (A[3] = (E) => b(t).save())
              }, null, 40, Kf), [
                [is, C.config.resolveURL]
              ])
            ])) : Me("", !0)
          ]))), 128))
        ], 512), [
          [Rs, s.value === "providers"]
        ]),
        lt(p("div", Wf, [
          p("div", zf, [
            p("label", Jf, X(b(U)("Custom Cue Rules (Regex)")), 1),
            p("div", qf, [
              (T(!0), R(te, null, Fe(b(t).settings.customCueRules, (C, E) => (T(), R("div", {
                key: E,
                class: "stmp-rule"
              }, [
                p("code", null, X(C), 1),
                p("div", {
                  class: "menu_button menu_button_icon stmp-rule-del",
                  onClick: (B) => m(E)
                }, [...A[5] || (A[5] = [
                  p("i", { class: "fa-solid fa-xmark" }, null, -1)
                ])], 8, Yf)
              ]))), 128))
            ]),
            p("div", Gf, [
              lt(p("input", {
                "onUpdate:modelValue": A[4] || (A[4] = (C) => h.value = C),
                class: "text_pole",
                placeholder: b(U)("Add regex rule..."),
                onKeydown: vo(v, ["enter"])
              }, null, 40, Xf), [
                [is, h.value]
              ]),
              p("div", {
                class: "menu_button menu_button_icon stmp-rule-add-btn",
                onClick: v
              }, [...A[6] || (A[6] = [
                p("i", { class: "fa-solid fa-plus" }, null, -1)
              ])])
            ])
          ])
        ], 512), [
          [Rs, s.value === "cue"]
        ]),
        lt(p("div", Zf, [
          p("div", Qf, [
            p("div", {
              class: "menu_button menu_button_icon stmp-data-btn",
              onClick: L
            }, [
              A[7] || (A[7] = p("i", { class: "fa-solid fa-trash-can" }, null, -1)),
              p("span", null, X(b(U)("Clear cache")), 1)
            ]),
            p("div", {
              class: "menu_button menu_button_icon stmp-data-btn",
              onClick: M
            }, [
              A[8] || (A[8] = p("i", { class: "fa-solid fa-file-export" }, null, -1)),
              p("span", null, X(b(U)("Export data")), 1)
            ]),
            p("div", {
              class: "menu_button menu_button_icon stmp-data-btn",
              onClick: Y
            }, [
              A[9] || (A[9] = p("i", { class: "fa-solid fa-file-import" }, null, -1)),
              p("span", null, X(b(U)("Import data")), 1)
            ])
          ])
        ], 512), [
          [Rs, s.value === "data"]
        ])
      ])
    ]));
  }
}), td = /* @__PURE__ */ St(ed, [["__scopeId", "data-v-b7fca2b6"]]);
class sd {
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
      messageId: Ls(r)
    })), i(n.MESSAGE_UPDATED, "message-updated", (r) => ({
      messageId: Ls(r)
    })), i(n.MESSAGE_DELETED, "message-deleted", (r) => ({
      messageId: Ls(r)
    })), i(n.MESSAGE_SWIPED, "message-swiped", (r) => ({
      messageId: Ls(r)
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
function Ls(e) {
  if (e == null) return;
  const t = typeof e == "number" ? e : parseInt(String(e), 10);
  return Number.isFinite(t) ? t : void 0;
}
function nd() {
  return new sd();
}
const id = [
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
  for (const i of id)
    for (const r of Qi(i, e)) n(r);
  for (const i of t)
    try {
      const r = new RegExp(i, "g");
      for (const o of Qi(r, e)) n(o);
    } catch {
    }
  return [...s.values()].sort((i, r) => i.index - r.index).map((i) => i.cue);
}
class rd {
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
let Wt = null, ct = null, ps = null, gs = null, zt = null, Ys = null;
const od = `
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
function ld() {
  const e = $("#extensions_settings2");
  if (!e || !e.length || (e.append(od), gs = e.children(".inline-drawer").last()[0] ?? null, !gs)) return;
  const t = gs.querySelector("#stmp-settings-mount");
  t && Ys && (zt = yo(td), zt.use(Ys), zt.mount(t));
}
function ad() {
  zt && (zt.unmount(), zt = null), gs?.remove(), gs = null;
}
function cd(e, t, s) {
  ct = nd(), ct.on("chat-changed", () => {
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
function ud(e, t, s) {
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
async function hd() {
  try {
    const e = document.createElement("div");
    e.id = "st-music-player-root", document.documentElement.appendChild(e);
    const t = oc();
    Ys = t, Wt = yo(hf), Wt.use(t), Wt.mount(e);
    const s = Ie(), n = mc();
    s.init(n);
    const i = Lt();
    i.init(), i.setVolume(s.settings.volume);
    const r = new rd((a) => SillyTavern.getContext().chat[a]?.mes), o = qt();
    o.init(r), ld();
    const l = SillyTavern.getContext();
    ps = () => {
      cd(r, o, s), ud(r, o, s);
    }, l.eventSource.on(l.event_types.APP_READY, ps), console.log("[ST-Music-Player] 播放器加载完成");
  } catch (e) {
    console.error("[ST-Music-Player] init failed:", e);
  }
}
function Co() {
  if (ps) {
    try {
      const t = SillyTavern.getContext();
      t.eventSource.removeListener(t.event_types.APP_READY, ps);
    } catch {
    }
    ps = null;
  }
  if (ct?.stop(), ct = null, Wt) {
    try {
      Lt().destroy();
    } catch {
    }
    Wt.unmount(), Wt = null;
  }
  const e = document.getElementById("st-music-player-root");
  e && e.remove(), ad(), Ys = null;
}
function pd() {
  Co();
}
async function fd() {
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
async function gd() {
  await fd(), Co();
}
export {
  fd as clean,
  gd as delete,
  Co as destroy,
  pd as disable,
  hd as init
};
