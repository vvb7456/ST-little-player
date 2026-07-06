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
const ue = {}, Ht = [], Xe = () => {
}, er = () => !1, qs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ys = (e) => e.startsWith("onUpdate:"), ye = Object.assign, Vn = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Eo = Object.prototype.hasOwnProperty, re = (e, t) => Eo.call(e, t), B = Array.isArray, Vt = (e) => xs(e) === "[object Map]", tr = (e) => xs(e) === "[object Set]", ci = (e) => xs(e) === "[object Date]", q = (e) => typeof e == "function", he = (e) => typeof e == "string", De = (e) => typeof e == "symbol", le = (e) => e !== null && typeof e == "object", sr = (e) => (le(e) || q(e)) && q(e.then) && q(e.catch), nr = Object.prototype.toString, xs = (e) => nr.call(e), To = (e) => xs(e).slice(8, -1), ir = (e) => xs(e) === "[object Object]", Xs = (e) => he(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ns = /* @__PURE__ */ Hn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Zs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Ao = /-\w/g, Ue = Zs(
  (e) => e.replace(Ao, (t) => t.slice(1).toUpperCase())
), Mo = /\B([A-Z])/g, yt = Zs(
  (e) => e.replace(Mo, "-$1").toLowerCase()
), rr = Zs((e) => e.charAt(0).toUpperCase() + e.slice(1)), pn = Zs(
  (e) => e ? `on${rr(e)}` : ""
), Ye = (e, t) => !Object.is(e, t), ks = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, or = (e, t, s, n = !1) => {
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
  if (B(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], i = he(n) ? ko(n) : en(n);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (he(e) || le(e))
    return e;
}
const Ro = /;(?![^(]*\))/g, Lo = /:([^]+)/, $o = /\/\*[^]*?\*\//g;
function ko(e) {
  const t = {};
  return e.replace($o, "").split(Ro).forEach((s) => {
    if (s) {
      const n = s.split(Lo);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function xe(e) {
  let t = "";
  if (he(e))
    t = e;
  else if (B(e))
    for (let s = 0; s < e.length; s++) {
      const n = xe(e[s]);
      n && (t += n + " ");
    }
  else if (le(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const Oo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Do = /* @__PURE__ */ Hn(Oo);
function lr(e) {
  return !!e || e === "";
}
function No(e, t) {
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
  if (s = De(e), n = De(t), s || n)
    return e === t;
  if (s = B(e), n = B(t), s || n)
    return s && n ? No(e, t) : !1;
  if (s = le(e), n = le(t), s || n) {
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
const ar = (e) => !!(e && e.__v_isRef === !0), X = (e) => he(e) ? e : e == null ? "" : B(e) || le(e) && (e.toString === nr || !q(e.toString)) ? ar(e) ? X(e.value) : JSON.stringify(e, cr, 2) : String(e), cr = (e, t) => ar(t) ? cr(e, t.value) : Vt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], r) => (s[gn(n, r) + " =>"] = i, s),
    {}
  )
} : tr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => gn(s))
} : De(t) ? gn(t) : le(t) && !B(t) && !ir(t) ? String(t) : t, gn = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    De(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ve;
class ur {
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
function fr(e) {
  return new ur(e);
}
function dr() {
  return ve;
}
function Fo(e, t = !1) {
  ve && ve.cleanups.push(e);
}
let de;
const mn = /* @__PURE__ */ new WeakSet();
class hr {
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || gr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, fi(this), mr(this);
    const t = de, s = je;
    de = this, je = !0;
    try {
      return this.fn();
    } finally {
      vr(this), de = t, je = s, this.flags &= -3;
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
let pr = 0, is, rs;
function gr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = rs, rs = e;
    return;
  }
  e.next = is, is = e;
}
function Wn() {
  pr++;
}
function zn() {
  if (--pr > 0)
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
function mr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function vr(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === s && (s = i), Jn(n), Uo(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = s;
}
function An(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (yr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function yr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ps) || (e.globalVersion = ps, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !An(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = de, n = je;
  de = e, je = !0;
  try {
    mr(e);
    const i = e.fn(e._value);
    (t.version === 0 || Ye(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    de = s, je = n, vr(e), e.flags &= -3;
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
function Uo(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let je = !0;
const br = [];
function Ze() {
  br.push(je), je = !1;
}
function Qe() {
  const e = br.pop();
  je = e === void 0 ? !0 : e;
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
class jo {
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
    if (!de || !je || de === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== de)
      s = this.activeLink = new jo(de, this), de.deps ? (s.prevDep = de.depsTail, de.depsTail.nextDep = s, de.depsTail = s) : de.deps = de.depsTail = s, _r(s);
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
function _r(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        _r(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const Ns = /* @__PURE__ */ new WeakMap(), At = /* @__PURE__ */ Symbol(
  ""
), Mn = /* @__PURE__ */ Symbol(
  ""
), gs = /* @__PURE__ */ Symbol(
  ""
);
function we(e, t, s) {
  if (je && de) {
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
    const a = B(e), d = a && Xs(s);
    if (a && s === "length") {
      const c = Number(n);
      o.forEach((h, v) => {
        (v === "length" || v === gs || !De(v) && v >= c) && l(h);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), d && l(o.get(gs)), t) {
        case "add":
          a ? d && l(o.get("length")) : (l(o.get(At)), Vt(e) && l(o.get(Mn)));
          break;
        case "delete":
          a || (l(o.get(At)), Vt(e) && l(o.get(Mn)));
          break;
        case "set":
          Vt(e) && l(o.get(At));
          break;
      }
  }
  zn();
}
function Ho(e, t) {
  const s = Ns.get(e);
  return s && s.get(t);
}
function Ot(e) {
  const t = /* @__PURE__ */ te(e);
  return t === e ? t : (we(t, "iterate", gs), /* @__PURE__ */ Le(e) ? t : t.map(He));
}
function tn(e) {
  return we(e = /* @__PURE__ */ te(e), "iterate", gs), e;
}
function Ge(e, t) {
  return /* @__PURE__ */ ut(e) ? zt(/* @__PURE__ */ ct(e) ? He(t) : t) : He(t);
}
const Vo = {
  __proto__: null,
  [Symbol.iterator]() {
    return vn(this, Symbol.iterator, (e) => Ge(this, e));
  },
  concat(...e) {
    return Ot(this).concat(
      ...e.map((t) => B(t) ? Ot(t) : t)
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
  return n !== e && !/* @__PURE__ */ Le(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = s(r.value)), r;
  }), i;
}
const Bo = Array.prototype;
function et(e, t, s, n, i, r) {
  const o = tn(e), l = o !== e && !/* @__PURE__ */ Le(e), a = o[t];
  if (a !== Bo[t]) {
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
  const i = tn(e), r = i !== e && !/* @__PURE__ */ Le(e);
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
  const n = /* @__PURE__ */ te(e);
  we(n, "iterate", gs);
  const i = n[t](...s);
  return (i === -1 || i === !1) && /* @__PURE__ */ nn(s[0]) ? (s[0] = /* @__PURE__ */ te(s[0]), n[t](...s)) : i;
}
function Yt(e, t, s = []) {
  Ze(), Wn();
  const n = (/* @__PURE__ */ te(e))[t].apply(e, s);
  return zn(), Qe(), n;
}
const Ko = /* @__PURE__ */ Hn("__proto__,__v_isRef,__isVue"), xr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(De)
);
function Wo(e) {
  De(e) || (e = String(e));
  const t = /* @__PURE__ */ te(this);
  return we(t, "has", e), t.hasOwnProperty(e);
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
      return n === (i ? r ? tl : Er : r ? Ir : Cr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = B(t);
    if (!i) {
      let a;
      if (o && (a = Vo[s]))
        return a;
      if (s === "hasOwnProperty")
        return Wo;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ pe(t) ? t : n
    );
    if ((De(s) ? xr.has(s) : Ko(s)) || (i || we(t, "get", s), r))
      return l;
    if (/* @__PURE__ */ pe(l)) {
      const a = o && Xs(s) ? l : l.value;
      return i && le(a) ? /* @__PURE__ */ Rn(a) : a;
    }
    return le(l) ? i ? /* @__PURE__ */ Rn(l) : /* @__PURE__ */ sn(l) : l;
  }
}
class wr extends Sr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, i) {
    let r = t[s];
    const o = B(t) && Xs(s);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ ut(r);
      if (!/* @__PURE__ */ Le(n) && !/* @__PURE__ */ ut(n) && (r = /* @__PURE__ */ te(r), n = /* @__PURE__ */ te(n)), !o && /* @__PURE__ */ pe(r) && !/* @__PURE__ */ pe(n))
        return d || (r.value = n), !0;
    }
    const l = o ? Number(s) < t.length : re(t, s), a = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ pe(t) ? t : i
    );
    return t === /* @__PURE__ */ te(i) && a && (l ? Ye(n, r) && lt(t, "set", s, n) : lt(t, "add", s, n)), a;
  }
  deleteProperty(t, s) {
    const n = re(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && lt(t, "delete", s, void 0), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!De(s) || !xr.has(s)) && we(t, "has", s), n;
  }
  ownKeys(t) {
    return we(
      t,
      "iterate",
      B(t) ? "length" : At
    ), Reflect.ownKeys(t);
  }
}
class zo extends Sr {
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
const Jo = /* @__PURE__ */ new wr(), Go = /* @__PURE__ */ new zo(), qo = /* @__PURE__ */ new wr(!0);
const Pn = (e) => e, Ts = (e) => Reflect.getPrototypeOf(e);
function Yo(e, t, s) {
  return function(...n) {
    const i = this.__v_raw, r = /* @__PURE__ */ te(i), o = Vt(r), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, d = i[e](...n), c = s ? Pn : t ? zt : He;
    return !t && we(
      r,
      "iterate",
      a ? Mn : At
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
function Xo(e, t) {
  const s = {
    get(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ te(r), l = /* @__PURE__ */ te(i);
      e || (Ye(i, l) && we(o, "get", i), we(o, "get", l));
      const { has: a } = Ts(o), d = t ? Pn : e ? zt : He;
      if (a.call(o, i))
        return d(r.get(i));
      if (a.call(o, l))
        return d(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && we(/* @__PURE__ */ te(i), "iterate", At), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ te(r), l = /* @__PURE__ */ te(i);
      return e || (Ye(i, l) && we(o, "has", i), we(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, a = /* @__PURE__ */ te(l), d = t ? Pn : e ? zt : He;
      return !e && we(a, "iterate", At), l.forEach((c, h) => i.call(r, d(c), d(h), o));
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
        const r = /* @__PURE__ */ te(this), o = Ts(r), l = /* @__PURE__ */ te(i), a = !t && !/* @__PURE__ */ Le(i) && !/* @__PURE__ */ ut(i) ? l : i;
        return o.has.call(r, a) || Ye(i, a) && o.has.call(r, i) || Ye(l, a) && o.has.call(r, l) || (r.add(a), lt(r, "add", a, a)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ Le(r) && !/* @__PURE__ */ ut(r) && (r = /* @__PURE__ */ te(r));
        const o = /* @__PURE__ */ te(this), { has: l, get: a } = Ts(o);
        let d = l.call(o, i);
        d || (i = /* @__PURE__ */ te(i), d = l.call(o, i));
        const c = a.call(o, i);
        return o.set(i, r), d ? Ye(r, c) && lt(o, "set", i, r) : lt(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ te(this), { has: o, get: l } = Ts(r);
        let a = o.call(r, i);
        a || (i = /* @__PURE__ */ te(i), a = o.call(r, i)), l && l.call(r, i);
        const d = r.delete(i);
        return a && lt(r, "delete", i, void 0), d;
      },
      clear() {
        const i = /* @__PURE__ */ te(this), r = i.size !== 0, o = i.clear();
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
    s[i] = Yo(i, e, t);
  }), s;
}
function qn(e, t) {
  const s = Xo(e, t);
  return (n, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    re(s, i) && i in n ? s : n,
    i,
    r
  );
}
const Zo = {
  get: /* @__PURE__ */ qn(!1, !1)
}, Qo = {
  get: /* @__PURE__ */ qn(!1, !0)
}, el = {
  get: /* @__PURE__ */ qn(!0, !1)
};
const Cr = /* @__PURE__ */ new WeakMap(), Ir = /* @__PURE__ */ new WeakMap(), Er = /* @__PURE__ */ new WeakMap(), tl = /* @__PURE__ */ new WeakMap();
function sl(e) {
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
  return /* @__PURE__ */ ut(e) ? e : Yn(
    e,
    !1,
    Jo,
    Zo,
    Cr
  );
}
// @__NO_SIDE_EFFECTS__
function nl(e) {
  return Yn(
    e,
    !1,
    qo,
    Qo,
    Ir
  );
}
// @__NO_SIDE_EFFECTS__
function Rn(e) {
  return Yn(
    e,
    !0,
    Go,
    el,
    Er
  );
}
function Yn(e, t, s, n, i) {
  if (!le(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const o = sl(To(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? n : s
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function ct(e) {
  return /* @__PURE__ */ ut(e) ? /* @__PURE__ */ ct(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ut(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Le(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function nn(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function te(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ te(t) : e;
}
function Xn(e) {
  return !re(e, "__v_skip") && Object.isExtensible(e) && or(e, "__v_skip", !0), e;
}
const He = (e) => le(e) ? /* @__PURE__ */ sn(e) : e, zt = (e) => le(e) ? /* @__PURE__ */ Rn(e) : e;
// @__NO_SIDE_EFFECTS__
function pe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Se(e) {
  return il(e, !1);
}
function il(e, t) {
  return /* @__PURE__ */ pe(e) ? e : new rl(e, t);
}
class rl {
  constructor(t, s) {
    this.dep = new Gn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ te(t), this._value = s ? t : He(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Le(t) || /* @__PURE__ */ ut(t);
    t = n ? t : /* @__PURE__ */ te(t), Ye(t, s) && (this._rawValue = t, this._value = n ? t : He(t), this.dep.trigger());
  }
}
function C(e) {
  return /* @__PURE__ */ pe(e) ? e.value : e;
}
const ol = {
  get: (e, t, s) => t === "__v_raw" ? e : C(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t];
    return /* @__PURE__ */ pe(i) && !/* @__PURE__ */ pe(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function Tr(e) {
  return /* @__PURE__ */ ct(e) ? e : new Proxy(e, ol);
}
// @__NO_SIDE_EFFECTS__
function ll(e) {
  const t = B(e) ? new Array(e.length) : {};
  for (const s in e)
    t[s] = cl(e, s);
  return t;
}
class al {
  constructor(t, s, n) {
    this._object = t, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = De(s) ? s : String(s), this._raw = /* @__PURE__ */ te(t);
    let i = !0, r = t;
    if (!B(t) || De(this._key) || !Xs(this._key))
      do
        i = !/* @__PURE__ */ nn(r) || /* @__PURE__ */ Le(r);
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
    return Ho(this._raw, this._key);
  }
}
function cl(e, t, s) {
  return new al(e, t, s);
}
class ul {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Gn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ps - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    de !== this)
      return gr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return yr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function fl(e, t, s = !1) {
  let n, i;
  return q(e) ? n = e : (n = e.get, i = e.set), new ul(n, i, s);
}
const Ms = {}, Fs = /* @__PURE__ */ new WeakMap();
let It;
function dl(e, t = !1, s = It) {
  if (s) {
    let n = Fs.get(s);
    n || Fs.set(s, n = []), n.push(e);
  }
}
function hl(e, t, s = ue) {
  const { immediate: n, deep: i, once: r, scheduler: o, augmentJob: l, call: a } = s, d = (k) => i ? k : /* @__PURE__ */ Le(k) || i === !1 || i === 0 ? at(k, 1) : at(k);
  let c, h, v, m, L = !1, A = !1;
  if (/* @__PURE__ */ pe(e) ? (h = () => e.value, L = /* @__PURE__ */ Le(e)) : /* @__PURE__ */ ct(e) ? (h = () => d(e), L = !0) : B(e) ? (A = !0, L = e.some((k) => /* @__PURE__ */ ct(k) || /* @__PURE__ */ Le(k)), h = () => e.map((k) => {
    if (/* @__PURE__ */ pe(k))
      return k.value;
    if (/* @__PURE__ */ ct(k))
      return d(k);
    if (q(k))
      return a ? a(k, 2) : k();
  })) : q(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (v) {
      Ze();
      try {
        v();
      } finally {
        Qe();
      }
    }
    const k = It;
    It = c;
    try {
      return a ? a(e, 3, [m]) : e(m);
    } finally {
      It = k;
    }
  } : h = Xe, t && i) {
    const k = h, J = i === !0 ? 1 / 0 : i;
    h = () => at(k(), J);
  }
  const N = dr(), M = () => {
    c.stop(), N && N.active && Vn(N.effects, c);
  };
  if (r && t) {
    const k = t;
    t = (...J) => {
      const Z = k(...J);
      return M(), Z;
    };
  }
  let I = A ? new Array(e.length).fill(Ms) : Ms;
  const F = (k) => {
    if (!(!(c.flags & 1) || !c.dirty && !k))
      if (t) {
        const J = c.run();
        if (k || i || L || (A ? J.some((Z, ne) => Ye(Z, I[ne])) : Ye(J, I))) {
          v && v();
          const Z = It;
          It = c;
          try {
            const ne = [
              J,
              // pass undefined as the old value when it's changed for the first time
              I === Ms ? void 0 : A && I[0] === Ms ? [] : I,
              m
            ];
            I = J, a ? a(t, 3, ne) : (
              // @ts-expect-error
              t(...ne)
            );
          } finally {
            It = Z;
          }
        }
      } else
        c.run();
  };
  return l && l(F), c = new hr(h), c.scheduler = o ? () => o(F, !1) : F, m = (k) => dl(k, !1, c), v = c.onStop = () => {
    const k = Fs.get(c);
    if (k) {
      if (a)
        a(k, 4);
      else
        for (const J of k) J();
      Fs.delete(c);
    }
  }, t ? n ? F(!0) : I = c.run() : o ? o(F.bind(null, !0), !0) : c.run(), M.pause = c.pause.bind(c), M.resume = c.resume.bind(c), M.stop = M, M;
}
function at(e, t = 1 / 0, s) {
  if (t <= 0 || !le(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ pe(e))
    at(e.value, t, s);
  else if (B(e))
    for (let n = 0; n < e.length; n++)
      at(e[n], t, s);
  else if (tr(e) || Vt(e))
    e.forEach((n) => {
      at(n, t, s);
    });
  else if (ir(e)) {
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
function Ss(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    rn(i, t, s);
  }
}
function Ne(e, t, s, n) {
  if (q(e)) {
    const i = Ss(e, t, s, n);
    return i && sr(i) && i.catch((r) => {
      rn(r, t, s);
    }), i;
  }
  if (B(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(Ne(e[r], t, s, n));
    return i;
  }
}
function rn(e, t, s, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || ue;
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
      Ze(), Ss(r, null, 10, [
        e,
        a,
        d
      ]), Qe();
      return;
    }
  }
  pl(e, s, i, n, o);
}
function pl(e, t, s, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Ee = [];
let Je = -1;
const Bt = [];
let pt = null, Ft = 0;
const Ar = /* @__PURE__ */ Promise.resolve();
let Us = null;
function rt(e) {
  const t = Us || Ar;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function gl(e) {
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
    !(e.flags & 2) && t >= ms(s) ? Ee.push(e) : Ee.splice(gl(t), 0, e), e.flags |= 1, Mr();
  }
}
function Mr() {
  Us || (Us = Ar.then(Rr));
}
function ml(e) {
  B(e) ? Bt.push(...e) : pt && e.id === -1 ? pt.splice(Ft + 1, 0, e) : e.flags & 1 || (Bt.push(e), e.flags |= 1), Mr();
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
    if (Bt.length = 0, pt) {
      pt.push(...t);
      return;
    }
    for (pt = t, Ft = 0; Ft < pt.length; Ft++) {
      const s = pt[Ft];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    pt = null, Ft = 0;
  }
}
const ms = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Rr(e) {
  try {
    for (Je = 0; Je < Ee.length; Je++) {
      const t = Ee[Je];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ss(
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
    Je = -1, Ee.length = 0, Pr(), Us = null, (Ee.length || Bt.length) && Rr();
  }
}
let Oe = null, Lr = null;
function js(e) {
  const t = Oe;
  return Oe = e, Lr = e && e.type.__scopeId || null, t;
}
function $r(e, t = Oe, s) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Bs(-1);
    const r = js(t);
    let o;
    try {
      o = e(...i);
    } finally {
      js(r), n._d && Bs(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function st(e, t) {
  if (Oe === null)
    return e;
  const s = un(Oe), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, a = ue] = t[i];
    r && (q(r) && (r = {
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
function xt(e, t, s, n) {
  const i = e.dirs, r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    r && (l.oldValue = r[o].value);
    let a = l.dir[n];
    a && (Ze(), Ne(a, s, 8, [
      e.el,
      l,
      e,
      t
    ]), Qe());
  }
}
function vl(e, t) {
  if (Ae) {
    let s = Ae.provides;
    const n = Ae.parent && Ae.parent.provides;
    n === s && (s = Ae.provides = Object.create(n)), s[e] = t;
  }
}
function os(e, t, s = !1) {
  const n = ni();
  if (n || Mt) {
    let i = Mt ? Mt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return s && q(t) ? t.call(n && n.proxy) : t;
  }
}
function yl() {
  return !!(ni() || Mt);
}
const bl = /* @__PURE__ */ Symbol.for("v-scx"), _l = () => os(bl);
function mt(e, t, s) {
  return kr(e, t, s);
}
function kr(e, t, s = ue) {
  const { immediate: n, deep: i, flush: r, once: o } = s, l = ye({}, s), a = t && n || !t && r !== "post";
  let d;
  if (bs) {
    if (r === "sync") {
      const m = _l();
      d = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = Xe, m.resume = Xe, m.pause = Xe, m;
    }
  }
  const c = Ae;
  l.call = (m, L, A) => Ne(m, c, L, A);
  let h = !1;
  r === "post" ? l.scheduler = (m) => {
    Me(m, c && c.suspense);
  } : r !== "sync" && (h = !0, l.scheduler = (m, L) => {
    L ? m() : Zn(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), h && (m.flags |= 2, c && (m.id = c.uid, m.i = c));
  };
  const v = hl(e, t, l);
  return bs && (d ? d.push(v) : a && v()), v;
}
function xl(e, t, s) {
  const n = this.proxy, i = he(e) ? e.includes(".") ? Or(n, e) : () => n[e] : e.bind(n, n);
  let r;
  q(t) ? r = t : (r = t.handler, s = t);
  const o = ws(this), l = kr(i, r.bind(n), s);
  return o(), l;
}
function Or(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < s.length && n; i++)
      n = n[s[i]];
    return n;
  };
}
const Sl = /* @__PURE__ */ Symbol("_vte"), Dr = (e) => e.__isTeleport, ke = /* @__PURE__ */ Symbol("_leaveCb"), Xt = /* @__PURE__ */ Symbol("_enterCb");
function wl() {
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
const $e = [Function, Array], Nr = {
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
}, Fr = (e) => {
  const t = e.subTree;
  return t.component ? Fr(t.component) : t;
}, Cl = {
  name: "BaseTransition",
  props: Nr,
  setup(e, { slots: t }) {
    const s = ni(), n = wl();
    return () => {
      const i = t.default && Hr(t.default(), !0), r = i && i.length ? Ur(i) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        s.subTree ? Fe() : void 0
      );
      if (!r)
        return;
      const o = /* @__PURE__ */ te(e), { mode: l } = o;
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
      if (c && c.type !== Te && !Et(c, a) && Fr(s).type !== Te) {
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
          const A = jr(
            n,
            c
          );
          A[String(c.key)] = c, v[ke] = () => {
            m(), v[ke] = void 0, delete d.delayedLeave, c = void 0;
          }, d.delayedLeave = () => {
            L(), delete d.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return r;
    };
  }
};
function Ur(e) {
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
const Il = Cl;
function jr(e, t) {
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
    onLeaveCancelled: A,
    onBeforeAppear: N,
    onAppear: M,
    onAfterAppear: I,
    onAppearCancelled: F
  } = t, k = String(e.key), J = jr(s, e), Z = (x, D) => {
    x && Ne(
      x,
      n,
      9,
      D
    );
  }, ne = (x, D) => {
    const W = D[1];
    Z(x, D), B(x) ? x.every((b) => b.length <= 1) && W() : x.length <= 1 && W();
  }, G = {
    mode: o,
    persisted: l,
    beforeEnter(x) {
      let D = a;
      if (!s.isMounted)
        if (r)
          D = N || a;
        else
          return;
      x[ke] && x[ke](
        !0
        /* cancelled */
      );
      const W = J[k];
      W && Et(e, W) && W.el[ke] && W.el[ke](), Z(D, [x]);
    },
    enter(x) {
      if (J[k] === e) return;
      let D = d, W = c, b = h;
      if (!s.isMounted)
        if (r)
          D = M || d, W = I || c, b = F || h;
        else
          return;
      let R = !1;
      x[Xt] = (me) => {
        R || (R = !0, me ? Z(b, [x]) : Z(W, [x]), G.delayedLeave && G.delayedLeave(), x[Xt] = void 0);
      };
      const Q = x[Xt].bind(null, !1);
      D ? ne(D, [x, Q]) : Q();
    },
    leave(x, D) {
      const W = String(e.key);
      if (x[Xt] && x[Xt](
        !0
        /* cancelled */
      ), s.isUnmounting)
        return D();
      Z(v, [x]);
      let b = !1;
      x[ke] = (Q) => {
        b || (b = !0, D(), Q ? Z(A, [x]) : Z(L, [x]), x[ke] = void 0, J[W] === e && delete J[W]);
      };
      const R = x[ke].bind(null, !1);
      J[W] = e, m ? ne(m, [x, R]) : R();
    },
    clone(x) {
      const D = Ln(
        x,
        t,
        s,
        n,
        i
      );
      return i && i(D), D;
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
    return Dr(e.type) && e.children ? Ur(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: s } = e;
  if (s) {
    if (t & 16)
      return s[0];
    if (t & 32 && q(s.default))
      return s.default();
  }
}
function vs(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, vs(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Hr(e, t = !1, s) {
  let n = [], i = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const l = s == null ? o.key : String(s) + String(o.key != null ? o.key : r);
    o.type === se ? (o.patchFlag & 128 && i++, n = n.concat(
      Hr(o.children, t, l)
    )) : (t || o.type !== Te) && n.push(l != null ? vt(o, { key: l }) : o);
  }
  if (i > 1)
    for (let r = 0; r < n.length; r++)
      n[r].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function Lt(e, t) {
  return q(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ye({ name: e.name }, t, { setup: e })
  ) : e;
}
function Vr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function gi(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const Hs = /* @__PURE__ */ new WeakMap();
function ls(e, t, s, n, i = !1) {
  if (B(e)) {
    e.forEach(
      (A, N) => ls(
        A,
        t && (B(t) ? t[N] : t),
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
  const r = n.shapeFlag & 4 ? un(n.component) : n.el, o = i ? null : r, { i: l, r: a } = e, d = t && t.r, c = l.refs === ue ? l.refs = {} : l.refs, h = l.setupState, v = /* @__PURE__ */ te(h), m = h === ue ? er : (A) => gi(c, A) ? !1 : re(v, A), L = (A, N) => !(N && gi(c, N));
  if (d != null && d !== a) {
    if (mi(t), he(d))
      c[d] = null, m(d) && (h[d] = null);
    else if (/* @__PURE__ */ pe(d)) {
      const A = t;
      L(d, A.k) && (d.value = null), A.k && (c[A.k] = null);
    }
  }
  if (q(a)) {
    Ze();
    try {
      Ss(a, l, 12, [o, c]);
    } finally {
      Qe();
    }
  } else {
    const A = he(a), N = /* @__PURE__ */ pe(a);
    if (A || N) {
      const M = () => {
        if (e.f) {
          const I = A ? m(a) ? h[a] : c[a] : L() || !e.k ? a.value : c[e.k];
          if (i)
            B(I) && Vn(I, r);
          else if (B(I))
            I.includes(r) || I.push(r);
          else if (A)
            c[a] = [r], m(a) && (h[a] = c[a]);
          else {
            const F = [r];
            L(a, e.k) && (a.value = F), e.k && (c[e.k] = F);
          }
        } else A ? (c[a] = o, m(a) && (h[a] = o)) : N && (L(a, e.k) && (a.value = o), e.k && (c[e.k] = o));
      };
      if (o) {
        const I = () => {
          M(), Hs.delete(e);
        };
        I.id = -1, Hs.set(e, I), Me(I, s);
      } else
        mi(e), M();
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
function El(e, t) {
  Br(e, "a", t);
}
function Tl(e, t) {
  Br(e, "da", t);
}
function Br(e, t, s = Ae) {
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
  Kr(() => {
    Vn(n[t], i);
  }, s);
}
function ln(e, t, s = Ae, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []), r = t.__weh || (t.__weh = (...o) => {
      Ze();
      const l = ws(s), a = Ne(t, s, e, o);
      return l(), Qe(), a;
    });
    return n ? i.unshift(r) : i.push(r), r;
  }
}
const ft = (e) => (t, s = Ae) => {
  (!bs || e === "sp") && ln(e, (...n) => t(...n), s);
}, Ml = ft("bm"), Qn = ft("m"), Pl = ft(
  "bu"
), Rl = ft("u"), ei = ft(
  "bum"
), Kr = ft("um"), Ll = ft(
  "sp"
), $l = ft("rtg"), kl = ft("rtc");
function Ol(e, t = Ae) {
  ln("ec", e, t);
}
const Dl = /* @__PURE__ */ Symbol.for("v-ndc");
function gt(e, t, s, n) {
  let i;
  const r = s, o = B(e);
  if (o || he(e)) {
    const l = o && /* @__PURE__ */ ct(e);
    let a = !1, d = !1;
    l && (a = !/* @__PURE__ */ Le(e), d = /* @__PURE__ */ ut(e), e = tn(e)), i = new Array(e.length);
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
  } else if (le(e))
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
const $n = (e) => e ? uo(e) ? un(e) : $n(e.parent) : null, cs = (
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
    $options: (e) => zr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Zn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = rt.bind(e.proxy)),
    $watch: (e) => xl.bind(e)
  })
), _n = (e, t) => e !== ue && !e.__isScriptSetup && re(e, t), Nl = {
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
        if (i !== ue && re(i, t))
          return o[t] = 2, i[t];
        if (re(r, t))
          return o[t] = 3, r[t];
        if (s !== ue && re(s, t))
          return o[t] = 4, s[t];
        kn && (o[t] = 0);
      }
    }
    const d = cs[t];
    let c, h;
    if (d)
      return t === "$attrs" && we(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (c = l.__cssModules) && (c = c[t])
    )
      return c;
    if (s !== ue && re(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      h = a.config.globalProperties, re(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: i, ctx: r } = e;
    return _n(i, t) ? (i[t] = s, !0) : n !== ue && re(n, t) ? (n[t] = s, !0) : re(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: i, props: r, type: o }
  }, l) {
    let a;
    return !!(s[l] || e !== ue && l[0] !== "$" && re(e, l) || _n(t, l) || re(r, l) || re(n, l) || re(cs, l) || re(i.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : re(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function vi(e) {
  return B(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let kn = !0;
function Fl(e) {
  const t = zr(e), s = e.proxy, n = e.ctx;
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
    activated: A,
    deactivated: N,
    beforeDestroy: M,
    beforeUnmount: I,
    destroyed: F,
    unmounted: k,
    render: J,
    renderTracked: Z,
    renderTriggered: ne,
    errorCaptured: G,
    serverPrefetch: x,
    // public API
    expose: D,
    inheritAttrs: W,
    // assets
    components: b,
    directives: R,
    filters: Q
  } = t;
  if (d && Ul(d, n, null), o)
    for (const Y in o) {
      const fe = o[Y];
      q(fe) && (n[Y] = fe.bind(s));
    }
  if (i) {
    const Y = i.call(s, s);
    le(Y) && (e.data = /* @__PURE__ */ sn(Y));
  }
  if (kn = !0, r)
    for (const Y in r) {
      const fe = r[Y], bt = q(fe) ? fe.bind(s, s) : q(fe.get) ? fe.get.bind(s, s) : Xe, Is = !q(fe) && q(fe.set) ? fe.set.bind(s) : Xe, _t = Rt({
        get: bt,
        set: Is
      });
      Object.defineProperty(n, Y, {
        enumerable: !0,
        configurable: !0,
        get: () => _t.value,
        set: (Ve) => _t.value = Ve
      });
    }
  if (l)
    for (const Y in l)
      Wr(l[Y], n, s, Y);
  if (a) {
    const Y = q(a) ? a.call(s) : a;
    Reflect.ownKeys(Y).forEach((fe) => {
      vl(fe, Y[fe]);
    });
  }
  c && yi(c, e, "c");
  function ie(Y, fe) {
    B(fe) ? fe.forEach((bt) => Y(bt.bind(s))) : fe && Y(fe.bind(s));
  }
  if (ie(Ml, h), ie(Qn, v), ie(Pl, m), ie(Rl, L), ie(El, A), ie(Tl, N), ie(Ol, G), ie(kl, Z), ie($l, ne), ie(ei, I), ie(Kr, k), ie(Ll, x), B(D))
    if (D.length) {
      const Y = e.exposed || (e.exposed = {});
      D.forEach((fe) => {
        Object.defineProperty(Y, fe, {
          get: () => s[fe],
          set: (bt) => s[fe] = bt,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  J && e.render === Xe && (e.render = J), W != null && (e.inheritAttrs = W), b && (e.components = b), R && (e.directives = R), x && Vr(e);
}
function Ul(e, t, s = Xe) {
  B(e) && (e = On(e));
  for (const n in e) {
    const i = e[n];
    let r;
    le(i) ? "default" in i ? r = os(
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
  Ne(
    B(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function Wr(e, t, s, n) {
  let i = n.includes(".") ? Or(s, n) : () => s[n];
  if (he(e)) {
    const r = t[e];
    q(r) && mt(i, r);
  } else if (q(e))
    mt(i, e.bind(s));
  else if (le(e))
    if (B(e))
      e.forEach((r) => Wr(r, t, s, n));
    else {
      const r = q(e.handler) ? e.handler.bind(s) : t[e.handler];
      q(r) && mt(i, r, e);
    }
}
function zr(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !i.length && !s && !n ? a = t : (a = {}, i.length && i.forEach(
    (d) => Vs(a, d, o, !0)
  ), Vs(a, t, o)), le(t) && r.set(t, a), a;
}
function Vs(e, t, s, n = !1) {
  const { mixins: i, extends: r } = t;
  r && Vs(e, r, s, !0), i && i.forEach(
    (o) => Vs(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const l = jl[o] || s && s[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const jl = {
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
  watch: Vl,
  // provide / inject
  provide: bi,
  inject: Hl
};
function bi(e, t) {
  return t ? e ? function() {
    return ye(
      q(e) ? e.call(this, this) : e,
      q(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Hl(e, t) {
  return es(On(e), On(t));
}
function On(e) {
  if (B(e)) {
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
  return e ? B(e) && B(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ye(
    /* @__PURE__ */ Object.create(null),
    vi(e),
    vi(t ?? {})
  ) : t;
}
function Vl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = ye(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = Ce(e[n], t[n]);
  return s;
}
function Jr() {
  return {
    app: null,
    config: {
      isNativeTag: er,
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
let Bl = 0;
function Kl(e, t) {
  return function(n, i = null) {
    q(n) || (n = ye({}, n)), i != null && !le(i) && (i = null);
    const r = Jr(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const d = r.app = {
      _uid: Bl++,
      _component: n,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: wa,
      get config() {
        return r.config;
      },
      set config(c) {
      },
      use(c, ...h) {
        return o.has(c) || (c && q(c.install) ? (o.add(c), c.install(d, ...h)) : q(c) && (o.add(c), c(d, ...h))), d;
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
          const m = d._ceVNode || oe(n, i);
          return m.appContext = r, v === !0 ? v = "svg" : v === !1 && (v = void 0), e(m, c, v), a = !0, d._container = c, c.__vue_app__ = d, un(m.component);
        }
      },
      onUnmount(c) {
        l.push(c);
      },
      unmount() {
        a && (Ne(
          l,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(c, h) {
        return r.provides[c] = h, d;
      },
      runWithContext(c) {
        const h = Mt;
        Mt = d;
        try {
          return c();
        } finally {
          Mt = h;
        }
      }
    };
    return d;
  };
}
let Mt = null;
const Wl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ue(t)}Modifiers`] || e[`${yt(t)}Modifiers`];
function zl(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || ue;
  let i = s;
  const r = t.startsWith("update:"), o = r && Wl(n, t.slice(7));
  o && (o.trim && (i = s.map((c) => he(c) ? c.trim() : c)), o.number && (i = s.map(Bn)));
  let l, a = n[l = pn(t)] || // also try camelCase event handler (#2249)
  n[l = pn(Ue(t))];
  !a && r && (a = n[l = pn(yt(t))]), a && Ne(
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
    e.emitted[l] = !0, Ne(
      d,
      e,
      6,
      i
    );
  }
}
const Jl = /* @__PURE__ */ new WeakMap();
function Gr(e, t, s = !1) {
  const n = s ? Jl : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {}, l = !1;
  if (!q(e)) {
    const a = (d) => {
      const c = Gr(d, t, !0);
      c && (l = !0, ye(o, c));
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (le(e) && n.set(e, null), null) : (B(r) ? r.forEach((a) => o[a] = null) : ye(o, r), le(e) && n.set(e, o), o);
}
function an(e, t) {
  return !e || !qs(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), re(e, t[0].toLowerCase() + t.slice(1)) || re(e, yt(t)) || re(e, t));
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
    inheritAttrs: A
  } = e, N = js(e);
  let M, I;
  try {
    if (s.shapeFlag & 4) {
      const k = i || n, J = k;
      M = qe(
        d.call(
          J,
          k,
          c,
          h,
          m,
          v,
          L
        )
      ), I = l;
    } else {
      const k = t;
      M = qe(
        k.length > 1 ? k(
          h,
          { attrs: l, slots: o, emit: a }
        ) : k(
          h,
          null
        )
      ), I = t.props ? l : Gl(l);
    }
  } catch (k) {
    us.length = 0, rn(k, e, 1), M = oe(Te);
  }
  let F = M;
  if (I && A !== !1) {
    const k = Object.keys(I), { shapeFlag: J } = F;
    k.length && J & 7 && (r && k.some(Ys) && (I = ql(
      I,
      r
    )), F = vt(F, I, !1, !0));
  }
  return s.dirs && (F = vt(F, null, !1, !0), F.dirs = F.dirs ? F.dirs.concat(s.dirs) : s.dirs), s.transition && vs(F, s.transition), M = F, js(N), M;
}
const Gl = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || qs(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, ql = (e, t) => {
  const s = {};
  for (const n in e)
    (!Ys(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function Yl(e, t, s) {
  const { props: n, children: i, component: r } = e, { props: o, children: l, patchFlag: a } = t, d = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return n ? Si(n, o, d) : !!o;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        const v = c[h];
        if (qr(o, n, v) && !an(d, v))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? Si(n, o, d) : !0 : !!o;
  return !1;
}
function Si(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const r = n[i];
    if (qr(t, e, r) && !an(s, r))
      return !0;
  }
  return !1;
}
function qr(e, t, s) {
  const n = e[s], i = t[s];
  return s === "style" && le(n) && le(i) ? !Kn(n, i) : n !== i;
}
function Xl({ vnode: e, parent: t, suspense: s }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  s && s.activeBranch === e && (s.vnode.el = n);
}
const Yr = {}, Xr = () => Object.create(Yr), Zr = (e) => Object.getPrototypeOf(e) === Yr;
function Zl(e, t, s, n = !1) {
  const i = {}, r = Xr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Qr(e, t, i, r);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  s ? e.props = n ? i : /* @__PURE__ */ nl(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function Ql(e, t, s, n) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ te(i), [a] = e.propsOptions;
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
    Qr(e, t, i, r) && (d = !0);
    let c;
    for (const h in l)
      (!t || // for camelCase
      !re(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = yt(h)) === h || !re(t, c))) && (a ? s && // for camelCase
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
function Qr(e, t, s, n) {
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
    const a = /* @__PURE__ */ te(s), d = l || ue;
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
      if (o.type !== Function && !o.skipFactory && q(a)) {
        const { propsDefaults: d } = i;
        if (s in d)
          n = d[s];
        else {
          const c = ws(i);
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
    ] && (n === "" || n === yt(s)) && (n = !0));
  }
  return n;
}
const ea = /* @__PURE__ */ new WeakMap();
function eo(e, t, s = !1) {
  const n = s ? ea : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, l = [];
  let a = !1;
  if (!q(e)) {
    const c = (h) => {
      a = !0;
      const [v, m] = eo(h, t, !0);
      ye(o, v), m && l.push(...m);
    };
    !s && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!r && !a)
    return le(e) && n.set(e, Ht), Ht;
  if (B(r))
    for (let c = 0; c < r.length; c++) {
      const h = Ue(r[c]);
      wi(h) && (o[h] = ue);
    }
  else if (r)
    for (const c in r) {
      const h = Ue(c);
      if (wi(h)) {
        const v = r[c], m = o[h] = B(v) || q(v) ? { type: v } : ye({}, v), L = m.type;
        let A = !1, N = !0;
        if (B(L))
          for (let M = 0; M < L.length; ++M) {
            const I = L[M], F = q(I) && I.name;
            if (F === "Boolean") {
              A = !0;
              break;
            } else F === "String" && (N = !1);
          }
        else
          A = q(L) && L.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = A, m[
          1
          /* shouldCastTrue */
        ] = N, (A || re(m, "default")) && l.push(h);
      }
    }
  const d = [o, l];
  return le(e) && n.set(e, d), d;
}
function wi(e) {
  return e[0] !== "$" && !ns(e);
}
const ti = (e) => e === "_" || e === "_ctx" || e === "$stable", si = (e) => B(e) ? e.map(qe) : [qe(e)], ta = (e, t, s) => {
  if (t._n)
    return t;
  const n = $r((...i) => si(t(...i)), s);
  return n._c = !1, n;
}, to = (e, t, s) => {
  const n = e._ctx;
  for (const i in e) {
    if (ti(i)) continue;
    const r = e[i];
    if (q(r))
      t[i] = ta(i, r, n);
    else if (r != null) {
      const o = si(r);
      t[i] = () => o;
    }
  }
}, so = (e, t) => {
  const s = si(t);
  e.slots.default = () => s;
}, no = (e, t, s) => {
  for (const n in t)
    (s || !ti(n)) && (e[n] = t[n]);
}, sa = (e, t, s) => {
  const n = e.slots = Xr();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (no(n, t, s), s && or(n, "_", i, !0)) : to(t, n);
  } else t && so(e, t);
}, na = (e, t, s) => {
  const { vnode: n, slots: i } = e;
  let r = !0, o = ue;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? r = !1 : no(i, t, s) : (r = !t.$stable, to(t, i)), o = t;
  } else t && (so(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !ti(l) && o[l] == null && delete i[l];
}, Me = aa;
function ia(e) {
  return ra(e);
}
function ra(e, t) {
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
  } = e, A = (u, f, g, w = null, S = null, y = null, P = void 0, T = null, E = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !Et(u, f) && (w = Es(u), Ve(u, S, y, !0), u = null), f.patchFlag === -2 && (E = !1, f.dynamicChildren = null);
    const { type: _, ref: K, shapeFlag: O } = f;
    switch (_) {
      case cn:
        N(u, f, g, w);
        break;
      case Te:
        M(u, f, g, w);
        break;
      case Os:
        u == null && I(f, g, w, P);
        break;
      case se:
        b(
          u,
          f,
          g,
          w,
          S,
          y,
          P,
          T,
          E
        );
        break;
      default:
        O & 1 ? J(
          u,
          f,
          g,
          w,
          S,
          y,
          P,
          T,
          E
        ) : O & 6 ? R(
          u,
          f,
          g,
          w,
          S,
          y,
          P,
          T,
          E
        ) : (O & 64 || O & 128) && _.process(
          u,
          f,
          g,
          w,
          S,
          y,
          P,
          T,
          E,
          Gt
        );
    }
    K != null && S ? ls(K, u && u.ref, y, f || u, !f) : K == null && u && u.ref != null && ls(u.ref, null, y, u, !0);
  }, N = (u, f, g, w) => {
    if (u == null)
      n(
        f.el = l(f.children),
        g,
        w
      );
    else {
      const S = f.el = u.el;
      f.children !== u.children && d(S, f.children);
    }
  }, M = (u, f, g, w) => {
    u == null ? n(
      f.el = a(f.children || ""),
      g,
      w
    ) : f.el = u.el;
  }, I = (u, f, g, w) => {
    [u.el, u.anchor] = L(
      u.children,
      f,
      g,
      w,
      u.el,
      u.anchor
    );
  }, F = ({ el: u, anchor: f }, g, w) => {
    let S;
    for (; u && u !== f; )
      S = v(u), n(u, g, w), u = S;
    n(f, g, w);
  }, k = ({ el: u, anchor: f }) => {
    let g;
    for (; u && u !== f; )
      g = v(u), i(u), u = g;
    i(f);
  }, J = (u, f, g, w, S, y, P, T, E) => {
    if (f.type === "svg" ? P = "svg" : f.type === "math" && (P = "mathml"), u == null)
      Z(
        f,
        g,
        w,
        S,
        y,
        P,
        T,
        E
      );
    else {
      const _ = u.el && u.el._isVueCE ? u.el : null;
      try {
        _ && _._beginPatch(), x(
          u,
          f,
          S,
          y,
          P,
          T,
          E
        );
      } finally {
        _ && _._endPatch();
      }
    }
  }, Z = (u, f, g, w, S, y, P, T) => {
    let E, _;
    const { props: K, shapeFlag: O, transition: V, dirs: z } = u;
    if (E = u.el = o(
      u.type,
      y,
      K && K.is,
      K
    ), O & 8 ? c(E, u.children) : O & 16 && G(
      u.children,
      E,
      null,
      w,
      S,
      xn(u, y),
      P,
      T
    ), z && xt(u, null, w, "created"), ne(E, u, u.scopeId, P, w), K) {
      for (const ce in K)
        ce !== "value" && !ns(ce) && r(E, ce, null, K[ce], y, w);
      "value" in K && r(E, "value", null, K.value, y), (_ = K.onVnodeBeforeMount) && ze(_, w, u);
    }
    z && xt(u, null, w, "beforeMount");
    const ee = oa(S, V);
    ee && V.beforeEnter(E), n(E, f, g), ((_ = K && K.onVnodeMounted) || ee || z) && Me(() => {
      try {
        _ && ze(_, w, u), ee && V.enter(E), z && xt(u, null, w, "mounted");
      } finally {
      }
    }, S);
  }, ne = (u, f, g, w, S) => {
    if (g && m(u, g), w)
      for (let y = 0; y < w.length; y++)
        m(u, w[y]);
    if (S) {
      let y = S.subTree;
      if (f === y || lo(y.type) && (y.ssContent === f || y.ssFallback === f)) {
        const P = S.vnode;
        ne(
          u,
          P,
          P.scopeId,
          P.slotScopeIds,
          S.parent
        );
      }
    }
  }, G = (u, f, g, w, S, y, P, T, E = 0) => {
    for (let _ = E; _ < u.length; _++) {
      const K = u[_] = T ? ot(u[_]) : qe(u[_]);
      A(
        null,
        K,
        f,
        g,
        w,
        S,
        y,
        P,
        T
      );
    }
  }, x = (u, f, g, w, S, y, P) => {
    const T = f.el = u.el;
    let { patchFlag: E, dynamicChildren: _, dirs: K } = f;
    E |= u.patchFlag & 16;
    const O = u.props || ue, V = f.props || ue;
    let z;
    if (g && St(g, !1), (z = V.onVnodeBeforeUpdate) && ze(z, g, f, u), K && xt(f, u, g, "beforeUpdate"), g && St(g, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    _ && (!u.dynamicChildren || u.dynamicChildren.length !== _.length) && (E = 0, P = !1, _ = null), (O.innerHTML && V.innerHTML == null || O.textContent && V.textContent == null) && c(T, ""), _ ? D(
      u.dynamicChildren,
      _,
      T,
      g,
      w,
      xn(f, S),
      y
    ) : P || fe(
      u,
      f,
      T,
      null,
      g,
      w,
      xn(f, S),
      y,
      !1
    ), E > 0) {
      if (E & 16)
        W(T, O, V, g, S);
      else if (E & 2 && O.class !== V.class && r(T, "class", null, V.class, S), E & 4 && r(T, "style", O.style, V.style, S), E & 8) {
        const ee = f.dynamicProps;
        for (let ce = 0; ce < ee.length; ce++) {
          const ae = ee[ce], ge = O[ae], be = V[ae];
          (be !== ge || ae === "value") && r(T, ae, ge, be, S, g);
        }
      }
      E & 1 && u.children !== f.children && c(T, f.children);
    } else !P && _ == null && W(T, O, V, g, S);
    ((z = V.onVnodeUpdated) || K) && Me(() => {
      z && ze(z, g, f, u), K && xt(f, u, g, "updated");
    }, w);
  }, D = (u, f, g, w, S, y, P) => {
    for (let T = 0; T < f.length; T++) {
      const E = u[T], _ = f[T], K = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        E.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (E.type === se || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Et(E, _) || // - In the case of a component, it could contain anything.
        E.shapeFlag & 198) ? h(E.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      A(
        E,
        _,
        K,
        null,
        w,
        S,
        y,
        P,
        !0
      );
    }
  }, W = (u, f, g, w, S) => {
    if (f !== g) {
      if (f !== ue)
        for (const y in f)
          !ns(y) && !(y in g) && r(
            u,
            y,
            f[y],
            null,
            S,
            w
          );
      for (const y in g) {
        if (ns(y)) continue;
        const P = g[y], T = f[y];
        P !== T && y !== "value" && r(u, y, T, P, S, w);
      }
      "value" in g && r(u, "value", f.value, g.value, S);
    }
  }, b = (u, f, g, w, S, y, P, T, E) => {
    const _ = f.el = u ? u.el : l(""), K = f.anchor = u ? u.anchor : l("");
    let { patchFlag: O, dynamicChildren: V, slotScopeIds: z } = f;
    z && (T = T ? T.concat(z) : z), u == null ? (n(_, g, w), n(K, g, w), G(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      g,
      K,
      S,
      y,
      P,
      T,
      E
    )) : O > 0 && O & 64 && V && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === V.length ? (D(
      u.dynamicChildren,
      V,
      g,
      S,
      y,
      P,
      T
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || S && f === S.subTree) && io(
      u,
      f,
      !0
      /* shallow */
    )) : fe(
      u,
      f,
      g,
      K,
      S,
      y,
      P,
      T,
      E
    );
  }, R = (u, f, g, w, S, y, P, T, E) => {
    f.slotScopeIds = T, u == null ? f.shapeFlag & 512 ? S.ctx.activate(
      f,
      g,
      w,
      P,
      E
    ) : Q(
      f,
      g,
      w,
      S,
      y,
      P,
      E
    ) : me(u, f, E);
  }, Q = (u, f, g, w, S, y, P) => {
    const T = u.component = ma(
      u,
      w,
      S
    );
    if (on(u) && (T.ctx.renderer = Gt), va(T, !1, P), T.asyncDep) {
      if (S && S.registerDep(T, ie, P), !u.el) {
        const E = T.subTree = oe(Te);
        M(null, E, f, g), u.placeholder = E.el;
      }
    } else
      ie(
        T,
        u,
        f,
        g,
        S,
        y,
        P
      );
  }, me = (u, f, g) => {
    const w = f.component = u.component;
    if (Yl(u, f, g))
      if (w.asyncDep && !w.asyncResolved) {
        Y(w, f, g);
        return;
      } else
        w.next = f, w.update();
    else
      f.el = u.el, w.vnode = f;
  }, ie = (u, f, g, w, S, y, P) => {
    const T = () => {
      if (u.isMounted) {
        let { next: O, bu: V, u: z, parent: ee, vnode: ce } = u;
        {
          const Ke = ro(u);
          if (Ke) {
            O && (O.el = ce.el, Y(u, O, P)), Ke.asyncDep.then(() => {
              Me(() => {
                u.isUnmounted || _();
              }, S);
            });
            return;
          }
        }
        let ae = O, ge;
        St(u, !1), O ? (O.el = ce.el, Y(u, O, P)) : O = ce, V && ks(V), (ge = O.props && O.props.onVnodeBeforeUpdate) && ze(ge, ee, O, ce), St(u, !0);
        const be = xi(u), Be = u.subTree;
        u.subTree = be, A(
          Be,
          be,
          // parent may have changed if it's in a teleport
          h(Be.el),
          // anchor may have changed if it's in a fragment
          Es(Be),
          u,
          S,
          y
        ), O.el = be.el, ae === null && Xl(u, be.el), z && Me(z, S), (ge = O.props && O.props.onVnodeUpdated) && Me(
          () => ze(ge, ee, O, ce),
          S
        );
      } else {
        let O;
        const { el: V, props: z } = f, { bm: ee, m: ce, parent: ae, root: ge, type: be } = u, Be = as(f);
        St(u, !1), ee && ks(ee), !Be && (O = z && z.onVnodeBeforeMount) && ze(O, ae, f), St(u, !0);
        {
          ge.ce && ge.ce._hasShadowRoot() && ge.ce._injectChildStyle(
            be,
            u.parent ? u.parent.type : void 0
          );
          const Ke = u.subTree = xi(u);
          A(
            null,
            Ke,
            g,
            w,
            u,
            S,
            y
          ), f.el = Ke.el;
        }
        if (ce && Me(ce, S), !Be && (O = z && z.onVnodeMounted)) {
          const Ke = f;
          Me(
            () => ze(O, ae, Ke),
            S
          );
        }
        (f.shapeFlag & 256 || ae && as(ae.vnode) && ae.vnode.shapeFlag & 256) && u.a && Me(u.a, S), u.isMounted = !0, f = g = w = null;
      }
    };
    u.scope.on();
    const E = u.effect = new hr(T);
    u.scope.off();
    const _ = u.update = E.run.bind(E), K = u.job = E.runIfDirty.bind(E);
    K.i = u, K.id = u.uid, E.scheduler = () => Zn(K), St(u, !0), _();
  }, Y = (u, f, g) => {
    f.component = u;
    const w = u.vnode.props;
    u.vnode = f, u.next = null, Ql(u, f.props, w, g), na(u, f.children, g), Ze(), hi(u), Qe();
  }, fe = (u, f, g, w, S, y, P, T, E = !1) => {
    const _ = u && u.children, K = u ? u.shapeFlag : 0, O = f.children, { patchFlag: V, shapeFlag: z } = f;
    if (V > 0) {
      if (V & 128) {
        Is(
          _,
          O,
          g,
          w,
          S,
          y,
          P,
          T,
          E
        );
        return;
      } else if (V & 256) {
        bt(
          _,
          O,
          g,
          w,
          S,
          y,
          P,
          T,
          E
        );
        return;
      }
    }
    z & 8 ? (K & 16 && Jt(_, S, y), O !== _ && c(g, O)) : K & 16 ? z & 16 ? Is(
      _,
      O,
      g,
      w,
      S,
      y,
      P,
      T,
      E
    ) : Jt(_, S, y, !0) : (K & 8 && c(g, ""), z & 16 && G(
      O,
      g,
      w,
      S,
      y,
      P,
      T,
      E
    ));
  }, bt = (u, f, g, w, S, y, P, T, E) => {
    u = u || Ht, f = f || Ht;
    const _ = u.length, K = f.length, O = Math.min(_, K);
    let V;
    for (V = 0; V < O; V++) {
      const z = f[V] = E ? ot(f[V]) : qe(f[V]);
      A(
        u[V],
        z,
        g,
        null,
        S,
        y,
        P,
        T,
        E
      );
    }
    _ > K ? Jt(
      u,
      S,
      y,
      !0,
      !1,
      O
    ) : G(
      f,
      g,
      w,
      S,
      y,
      P,
      T,
      E,
      O
    );
  }, Is = (u, f, g, w, S, y, P, T, E) => {
    let _ = 0;
    const K = f.length;
    let O = u.length - 1, V = K - 1;
    for (; _ <= O && _ <= V; ) {
      const z = u[_], ee = f[_] = E ? ot(f[_]) : qe(f[_]);
      if (Et(z, ee))
        A(
          z,
          ee,
          g,
          null,
          S,
          y,
          P,
          T,
          E
        );
      else
        break;
      _++;
    }
    for (; _ <= O && _ <= V; ) {
      const z = u[O], ee = f[V] = E ? ot(f[V]) : qe(f[V]);
      if (Et(z, ee))
        A(
          z,
          ee,
          g,
          null,
          S,
          y,
          P,
          T,
          E
        );
      else
        break;
      O--, V--;
    }
    if (_ > O) {
      if (_ <= V) {
        const z = V + 1, ee = z < K ? f[z].el : w;
        for (; _ <= V; )
          A(
            null,
            f[_] = E ? ot(f[_]) : qe(f[_]),
            g,
            ee,
            S,
            y,
            P,
            T,
            E
          ), _++;
      }
    } else if (_ > V)
      for (; _ <= O; )
        Ve(u[_], S, y, !0), _++;
    else {
      const z = _, ee = _, ce = /* @__PURE__ */ new Map();
      for (_ = ee; _ <= V; _++) {
        const Pe = f[_] = E ? ot(f[_]) : qe(f[_]);
        Pe.key != null && ce.set(Pe.key, _);
      }
      let ae, ge = 0;
      const be = V - ee + 1;
      let Be = !1, Ke = 0;
      const qt = new Array(be);
      for (_ = 0; _ < be; _++) qt[_] = 0;
      for (_ = z; _ <= O; _++) {
        const Pe = u[_];
        if (ge >= be) {
          Ve(Pe, S, y, !0);
          continue;
        }
        let We;
        if (Pe.key != null)
          We = ce.get(Pe.key);
        else
          for (ae = ee; ae <= V; ae++)
            if (qt[ae - ee] === 0 && Et(Pe, f[ae])) {
              We = ae;
              break;
            }
        We === void 0 ? Ve(Pe, S, y, !0) : (qt[We - ee] = _ + 1, We >= Ke ? Ke = We : Be = !0, A(
          Pe,
          f[We],
          g,
          null,
          S,
          y,
          P,
          T,
          E
        ), ge++);
      }
      const oi = Be ? la(qt) : Ht;
      for (ae = oi.length - 1, _ = be - 1; _ >= 0; _--) {
        const Pe = ee + _, We = f[Pe], li = f[Pe + 1], ai = Pe + 1 < K ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          li.el || oo(li)
        ) : w;
        qt[_] === 0 ? A(
          null,
          We,
          g,
          ai,
          S,
          y,
          P,
          T,
          E
        ) : Be && (ae < 0 || _ !== oi[ae] ? _t(We, g, ai, 2) : ae--);
      }
    }
  }, _t = (u, f, g, w, S = null) => {
    const { el: y, type: P, transition: T, children: E, shapeFlag: _ } = u;
    if (_ & 6) {
      _t(u.component.subTree, f, g, w);
      return;
    }
    if (_ & 128) {
      u.suspense.move(f, g, w);
      return;
    }
    if (_ & 64) {
      P.move(u, f, g, Gt);
      return;
    }
    if (P === se) {
      n(y, f, g);
      for (let O = 0; O < E.length; O++)
        _t(E[O], f, g, w);
      n(u.anchor, f, g);
      return;
    }
    if (P === Os) {
      F(u, f, g);
      return;
    }
    if (w !== 2 && _ & 1 && T)
      if (w === 0)
        T.persisted && !y[ke] ? n(y, f, g) : (T.beforeEnter(y), n(y, f, g), Me(() => T.enter(y), S));
      else {
        const { leave: O, delayLeave: V, afterLeave: z } = T, ee = () => {
          u.ctx.isUnmounted ? i(y) : n(y, f, g);
        }, ce = () => {
          const ae = y._isLeaving || !!y[ke];
          y._isLeaving && y[ke](
            !0
            /* cancelled */
          ), T.persisted && !ae ? ee() : O(y, () => {
            ee(), z && z();
          });
        };
        V ? V(y, ee, ce) : ce();
      }
    else
      n(y, f, g);
  }, Ve = (u, f, g, w = !1, S = !1) => {
    const {
      type: y,
      props: P,
      ref: T,
      children: E,
      dynamicChildren: _,
      shapeFlag: K,
      patchFlag: O,
      dirs: V,
      cacheIndex: z,
      memo: ee
    } = u;
    if (O === -2 && (S = !1), T != null && (Ze(), ls(T, null, g, u, !0), Qe()), z != null && (f.renderCache[z] = void 0), K & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const ce = K & 1 && V, ae = !as(u);
    let ge;
    if (ae && (ge = P && P.onVnodeBeforeUnmount) && ze(ge, f, u), K & 6)
      Io(u.component, g, w);
    else {
      if (K & 128) {
        u.suspense.unmount(g, w);
        return;
      }
      ce && xt(u, null, f, "beforeUnmount"), K & 64 ? u.type.remove(
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
      (y !== se || O > 0 && O & 64) ? Jt(
        _,
        f,
        g,
        !1,
        !0
      ) : (y === se && O & 384 || !S && K & 16) && Jt(E, f, g), w && ii(u);
    }
    const be = ee != null && z == null;
    (ae && (ge = P && P.onVnodeUnmounted) || ce || be) && Me(() => {
      ge && ze(ge, f, u), ce && xt(u, null, f, "unmounted"), be && (u.el = null);
    }, g);
  }, ii = (u) => {
    const { type: f, el: g, anchor: w, transition: S } = u;
    if (f === se) {
      Co(g, w);
      return;
    }
    if (f === Os) {
      k(u);
      return;
    }
    const y = () => {
      i(g), S && !S.persisted && S.afterLeave && S.afterLeave();
    };
    if (u.shapeFlag & 1 && S && !S.persisted) {
      const { leave: P, delayLeave: T } = S, E = () => P(g, y);
      T ? T(u.el, y, E) : E();
    } else
      y();
  }, Co = (u, f) => {
    let g;
    for (; u !== f; )
      g = v(u), i(u), u = g;
    i(f);
  }, Io = (u, f, g) => {
    const { bum: w, scope: S, job: y, subTree: P, um: T, m: E, a: _ } = u;
    Ci(E), Ci(_), w && ks(w), S.stop(), y && (y.flags |= 8, Ve(P, u, f, g)), T && Me(T, f), Me(() => {
      u.isUnmounted = !0;
    }, f);
  }, Jt = (u, f, g, w = !1, S = !1, y = 0) => {
    for (let P = y; P < u.length; P++)
      Ve(u[P], f, g, w, S);
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
    u == null ? f._vnode && (Ve(f._vnode, null, null, !0), w = f._vnode.component) : A(
      f._vnode || null,
      u,
      f,
      null,
      null,
      null,
      g
    ), f._vnode = u, hn || (hn = !0, hi(w), Pr(), hn = !1);
  }, Gt = {
    p: A,
    um: Ve,
    m: _t,
    r: ii,
    mt: Q,
    mc: G,
    pc: fe,
    pbc: D,
    n: Es,
    o: e
  };
  return {
    render: ri,
    hydrate: void 0,
    createApp: Kl(ri)
  };
}
function xn({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function St({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function oa(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function io(e, t, s = !1) {
  const n = e.children, i = t.children;
  if (B(n) && B(i))
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = ot(i[r]), l.el = o.el), !s && l.patchFlag !== -2 && io(o, l)), l.type === cn && (l.patchFlag === -1 && (l = i[r] = ot(l)), l.el = o.el), l.type === Te && !l.el && (l.el = o.el);
    }
}
function la(e) {
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
function ro(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ro(t);
}
function Ci(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function oo(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? oo(t.subTree) : null;
}
const lo = (e) => e.__isSuspense;
function aa(e, t) {
  t && t.pendingBranch ? B(e) ? t.effects.push(...e) : t.effects.push(e) : ml(e);
}
const se = /* @__PURE__ */ Symbol.for("v-fgt"), cn = /* @__PURE__ */ Symbol.for("v-txt"), Te = /* @__PURE__ */ Symbol.for("v-cmt"), Os = /* @__PURE__ */ Symbol.for("v-stc"), us = [];
let Re = null;
function U(e = !1) {
  us.push(Re = e ? null : []);
}
function ca() {
  us.pop(), Re = us[us.length - 1] || null;
}
let ys = 1;
function Bs(e, t = !1) {
  ys += e, e < 0 && Re && t && (Re.hasOnce = !0);
}
function ao(e) {
  return e.dynamicChildren = ys > 0 ? Re || Ht : null, ca(), ys > 0 && Re && Re.push(e), e;
}
function H(e, t, s, n, i, r) {
  return ao(
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
function Pt(e, t, s, n, i) {
  return ao(
    oe(
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
function Et(e, t) {
  return e.type === t.type && e.key === t.key;
}
const co = ({ key: e }) => e ?? null, Ds = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? he(e) || /* @__PURE__ */ pe(e) || q(e) ? { i: Oe, r: e, k: t, f: !!s } : e : null);
function p(e, t = null, s = null, n = 0, i = null, r = e === se ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && co(t),
    ref: t && Ds(t),
    scopeId: Lr,
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
    ctx: Oe
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
const oe = ua;
function ua(e, t = null, s = null, n = 0, i = null, r = !1) {
  if ((!e || e === Dl) && (e = Te), Ks(e)) {
    const l = vt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Ws(l, s), ys > 0 && !r && Re && (l.shapeFlag & 6 ? Re[Re.indexOf(e)] = l : Re.push(l)), l.patchFlag = -2, l;
  }
  if (xa(e) && (e = e.__vccOpts), t) {
    t = fa(t);
    let { class: l, style: a } = t;
    l && !he(l) && (t.class = xe(l)), le(a) && (/* @__PURE__ */ nn(a) && !B(a) && (a = ye({}, a)), t.style = en(a));
  }
  const o = he(e) ? 1 : lo(e) ? 128 : Dr(e) ? 64 : le(e) ? 4 : q(e) ? 2 : 0;
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
function fa(e) {
  return e ? /* @__PURE__ */ nn(e) || Zr(e) ? ye({}, e) : e : null;
}
function vt(e, t, s = !1, n = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: a } = e, d = t ? ha(i || {}, t) : i, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && co(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && r ? B(r) ? r.concat(Ds(t)) : [r, Ds(t)] : Ds(t)
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
function da(e = " ", t = 0) {
  return oe(cn, null, e, t);
}
function Ps(e, t) {
  const s = oe(Os, null, e);
  return s.staticCount = t, s;
}
function Fe(e = "", t = !1) {
  return t ? (U(), Pt(Te, null, e)) : oe(Te, null, e);
}
function qe(e) {
  return e == null || typeof e == "boolean" ? oe(Te) : B(e) ? oe(
    se,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ks(e) ? ot(e) : oe(cn, null, String(e));
}
function ot(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : vt(e);
}
function Ws(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (B(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Ws(e, i()), i._c && (i._d = !0));
      return;
    } else {
      s = 32;
      const i = t._;
      !i && !Zr(t) ? t._ctx = Oe : i === 3 && Oe && (Oe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (q(t)) {
    if (n & 65) {
      Ws(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Oe }, s = 32;
  } else
    t = String(t), n & 64 ? (s = 16, t = [da(t)]) : s = 8;
  e.children = t, e.shapeFlag |= s;
}
function ha(...e) {
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
        o && r !== o && !(B(r) && r.includes(o)) ? t[i] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ys(i) && (t[i] = o);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function ze(e, t, s, n = null) {
  Ne(e, t, 7, [
    s,
    n
  ]);
}
const pa = Jr();
let ga = 0;
function ma(e, t, s) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || pa, r = {
    uid: ga++,
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
    scope: new ur(
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
    propsOptions: eo(n, i),
    emitsOptions: Gr(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ue,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: ue,
    data: ue,
    props: ue,
    attrs: ue,
    slots: ue,
    refs: ue,
    setupState: ue,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = zl.bind(null, r), e.ce && e.ce(r), r;
}
let Ae = null;
const ni = () => Ae || Oe;
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
const ws = (e) => {
  const t = Ae;
  return zs(e), e.scope.on(), () => {
    e.scope.off(), zs(t);
  };
}, Ii = () => {
  Ae && Ae.scope.off(), zs(null);
};
function uo(e) {
  return e.vnode.shapeFlag & 4;
}
let bs = !1;
function va(e, t = !1, s = !1) {
  t && Nn(t);
  const { props: n, children: i } = e.vnode, r = uo(e);
  Zl(e, n, r, t), sa(e, i, s || t);
  const o = r ? ya(e, t) : void 0;
  return t && Nn(!1), o;
}
function ya(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Nl);
  const { setup: n } = s;
  if (n) {
    Ze();
    const i = e.setupContext = n.length > 1 ? _a(e) : null, r = ws(e), o = Ss(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = sr(o);
    if (Qe(), r(), (l || e.sp) && !as(e) && Vr(e), l) {
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
    fo(e);
}
function Ei(e, t, s) {
  q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : le(t) && (e.setupState = Tr(t)), fo(e);
}
function fo(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || Xe);
  {
    const i = ws(e);
    Ze();
    try {
      Fl(e);
    } finally {
      Qe(), i();
    }
  }
}
const ba = {
  get(e, t) {
    return we(e, "get", ""), e[t];
  }
};
function _a(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, ba),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function un(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Tr(Xn(e.exposed)), {
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
function xa(e) {
  return q(e) && "__vccOpts" in e;
}
const Rt = (e, t) => /* @__PURE__ */ fl(e, t, bs);
function Sa(e, t, s) {
  try {
    Bs(-1);
    const n = arguments.length;
    return n === 2 ? le(t) && !B(t) ? Ks(t) ? oe(e, null, [t]) : oe(e, t) : oe(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && Ks(s) && (s = [s]), oe(e, t, s));
  } finally {
    Bs(1);
  }
}
const wa = "3.5.39";
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
const ho = Fn ? (e) => Fn.createHTML(e) : (e) => e, Ca = "http://www.w3.org/2000/svg", Ia = "http://www.w3.org/1998/Math/MathML", nt = typeof document < "u" ? document : null, Ai = nt && /* @__PURE__ */ nt.createElement("template"), Ea = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const i = t === "svg" ? nt.createElementNS(Ca, e) : t === "mathml" ? nt.createElementNS(Ia, e) : s ? nt.createElement(e, { is: s }) : nt.createElement(e);
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
      Ai.innerHTML = ho(
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
}, dt = "transition", Zt = "animation", _s = /* @__PURE__ */ Symbol("_vtc"), po = {
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
}, Ta = /* @__PURE__ */ ye(
  {},
  Nr,
  po
), Aa = (e) => (e.displayName = "Transition", e.props = Ta, e), Ma = /* @__PURE__ */ Aa(
  (e, { slots: t }) => Sa(Il, Pa(e), t)
), wt = (e, t = []) => {
  B(e) ? e.forEach((s) => s(...t)) : e && e(...t);
}, Mi = (e) => e ? B(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Pa(e) {
  const t = {};
  for (const b in e)
    b in po || (t[b] = e[b]);
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
  } = e, L = Ra(i), A = L && L[0], N = L && L[1], {
    onBeforeEnter: M,
    onEnter: I,
    onEnterCancelled: F,
    onLeave: k,
    onLeaveCancelled: J,
    onBeforeAppear: Z = M,
    onAppear: ne = I,
    onAppearCancelled: G = F
  } = t, x = (b, R, Q, me) => {
    b._enterCancelled = me, Ct(b, R ? c : l), Ct(b, R ? d : o), Q && Q();
  }, D = (b, R) => {
    b._isLeaving = !1, Ct(b, h), Ct(b, m), Ct(b, v), R && R();
  }, W = (b) => (R, Q) => {
    const me = b ? ne : I, ie = () => x(R, b, Q);
    wt(me, [R, ie]), Pi(() => {
      Ct(R, b ? a : r), tt(R, b ? c : l), Mi(me) || Ri(R, n, A, ie);
    });
  };
  return ye(t, {
    onBeforeEnter(b) {
      wt(M, [b]), tt(b, r), tt(b, o);
    },
    onBeforeAppear(b) {
      wt(Z, [b]), tt(b, a), tt(b, d);
    },
    onEnter: W(!1),
    onAppear: W(!0),
    onLeave(b, R) {
      b._isLeaving = !0;
      const Q = () => D(b, R);
      tt(b, h), b._enterCancelled ? (tt(b, v), ki(b)) : (ki(b), tt(b, v)), Pi(() => {
        b._isLeaving && (Ct(b, h), tt(b, m), Mi(k) || Ri(b, n, N, Q));
      }), wt(k, [b, Q]);
    },
    onEnterCancelled(b) {
      x(b, !1, void 0, !0), wt(F, [b]);
    },
    onAppearCancelled(b) {
      x(b, !0, void 0, !0), wt(G, [b]);
    },
    onLeaveCancelled(b) {
      D(b), wt(J, [b]);
    }
  });
}
function Ra(e) {
  if (e == null)
    return null;
  if (le(e))
    return [Sn(e.enter), Sn(e.leave)];
  {
    const t = Sn(e);
    return [t, t];
  }
}
function Sn(e) {
  return Po(e);
}
function tt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.add(s)), (e[_s] || (e[_s] = /* @__PURE__ */ new Set())).add(t);
}
function Ct(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const s = e[_s];
  s && (s.delete(t), s.size || (e[_s] = void 0));
}
function Pi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let La = 0;
function Ri(e, t, s, n) {
  const i = e._endId = ++La, r = () => {
    i === e._endId && n();
  };
  if (s != null)
    return setTimeout(r, s);
  const { type: o, timeout: l, propCount: a } = $a(e, t);
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
function $a(e, t) {
  const s = window.getComputedStyle(e), n = (L) => (s[L] || "").split(", "), i = n(`${dt}Delay`), r = n(`${dt}Duration`), o = Li(i, r), l = n(`${Zt}Delay`), a = n(`${Zt}Duration`), d = Li(l, a);
  let c = null, h = 0, v = 0;
  t === dt ? o > 0 && (c = dt, h = o, v = r.length) : t === Zt ? d > 0 && (c = Zt, h = d, v = a.length) : (h = Math.max(o, d), c = h > 0 ? o > d ? dt : Zt : null, v = c ? c === dt ? r.length : a.length : 0);
  const m = c === dt && /\b(?:transform|all)(?:,|$)/.test(
    n(`${dt}Property`).toString()
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
function ka(e, t, s) {
  const n = e[_s];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const Js = /* @__PURE__ */ Symbol("_vod"), go = /* @__PURE__ */ Symbol("_vsh"), Rs = {
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
  e.style.display = t ? e[Js] : "none", e[go] = !t;
}
const Oa = /* @__PURE__ */ Symbol(""), Da = /(?:^|;)\s*display\s*:/;
function Na(e, t, s) {
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
      l != null ? Ua(
        e,
        o,
        !he(t) && t ? t[o] : void 0,
        l
      ) || ts(n, o, l) : ts(n, o, "");
    }
  } else if (i) {
    if (t !== s) {
      const o = n[Oa];
      o && (s += ";" + o), n.cssText = s, r = Da.test(s);
    }
  } else t && e.removeAttribute("style");
  Js in e && (e[Js] = r ? n.display : "", e[go] && (n.display = "none"));
}
const Oi = /\s*!important$/;
function ts(e, t, s) {
  if (B(s))
    s.forEach((n) => ts(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = Fa(e, t);
    Oi.test(s) ? e.setProperty(
      yt(n),
      s.replace(Oi, ""),
      "important"
    ) : e[n] = s;
  }
}
const Di = ["Webkit", "Moz", "ms"], wn = {};
function Fa(e, t) {
  const s = wn[t];
  if (s)
    return s;
  let n = Ue(t);
  if (n !== "filter" && n in e)
    return wn[t] = n;
  n = rr(n);
  for (let i = 0; i < Di.length; i++) {
    const r = Di[i] + n;
    if (r in e)
      return wn[t] = r;
  }
  return t;
}
function Ua(e, t, s, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && he(n) && s === n;
}
const Ni = "http://www.w3.org/1999/xlink";
function Fi(e, t, s, n, i, r = Do(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Ni, t.slice(6, t.length)) : e.setAttributeNS(Ni, t, s) : s == null || r && !lr(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : De(s) ? String(s) : s
  );
}
function Ui(e, t, s, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? ho(s) : s);
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
    l === "boolean" ? s = lr(s) : s == null && l === "string" ? (s = "", o = !0) : l === "number" && (s = 0, o = !0);
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
function ja(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const ji = /* @__PURE__ */ Symbol("_vei");
function Ha(e, t, s, n, i = null) {
  const r = e[ji] || (e[ji] = {}), o = r[t];
  if (n && o)
    o.value = n;
  else {
    const [l, a] = Ka(t);
    if (n) {
      const d = r[t] = Ja(
        n,
        i
      );
      Ut(e, l, d, a);
    } else o && (ja(e, l, o, a), r[t] = void 0);
  }
}
const Va = /(Once|Passive|Capture)$/, Ba = /^on:?(?:Once|Passive|Capture)$/;
function Ka(e) {
  let t, s;
  for (; (s = e.match(Va)) && !Ba.test(e); )
    t || (t = {}), e = e.slice(0, e.length - s[1].length), t[s[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : yt(e.slice(2)), t];
}
let Cn = 0;
const Wa = /* @__PURE__ */ Promise.resolve(), za = () => Cn || (Wa.then(() => Cn = 0), Cn = Date.now());
function Ja(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    const i = s.value;
    if (B(i)) {
      const r = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        r.call(n), n._stopped = !0;
      };
      const o = i.slice(), l = [n];
      for (let a = 0; a < o.length && !n._stopped; a++) {
        const d = o[a];
        d && Ne(
          d,
          t,
          5,
          l
        );
      }
    } else
      Ne(
        i,
        t,
        5,
        [n]
      );
  };
  return s.value = e, s.attached = za(), s;
}
const Hi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ga = (e, t, s, n, i, r) => {
  const o = i === "svg";
  t === "class" ? ka(e, n, o) : t === "style" ? Na(e, s, n) : qs(t) ? Ys(t) || Ha(e, t, s, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : qa(e, t, n, o)) ? (Ui(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Fi(e, t, n, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Ya(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !he(n))) ? Ui(e, Ue(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Fi(e, t, n, o));
};
function qa(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Hi(t) && q(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Hi(t) && he(s) ? !1 : t in e;
}
function Ya(e, t) {
  const s = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!s)
    return !1;
  const n = Ue(t);
  return Array.isArray(s) ? s.some((i) => Ue(i) === n) : Object.keys(s).some((i) => Ue(i) === n);
}
const Vi = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return B(t) ? (s) => ks(t, s) : t;
};
function Xa(e) {
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
    e[In] = Vi(i);
    const r = n || i.props && i.props.type === "number";
    Ut(e, t ? "change" : "input", (o) => {
      o.target.composing || e[In](Ki(e.value, s, r));
    }), (s || r) && Ut(e, "change", () => {
      e.value = Ki(e.value, s, r);
    }), t || (Ut(e, "compositionstart", Xa), Ut(e, "compositionend", Bi), Ut(e, "change", Bi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: s, modifiers: { lazy: n, trim: i, number: r } }, o) {
    if (e[In] = Vi(o), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? Bn(e.value) : e.value, a = t ?? "";
    if (l === a)
      return;
    const d = e.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === e && e.type !== "range" && (n && t === s || i && e.value.trim() === a) || (e.value = a);
  }
}, Za = ["ctrl", "shift", "alt", "meta"], Qa = {
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
  exact: (e, t) => Za.some((s) => e[`${s}Key`] && !t.includes(s))
}, Tt = (e, t) => {
  if (!e) return e;
  const s = e._withMods || (e._withMods = {}), n = t.join(".");
  return s[n] || (s[n] = (i, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const l = Qa[t[o]];
      if (l && l(i, t)) return;
    }
    return e(i, ...r);
  });
}, ec = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, mo = (e, t) => {
  const s = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return s[n] || (s[n] = (i) => {
    if (!("key" in i))
      return;
    const r = yt(i.key);
    if (t.some(
      (o) => o === r || ec[o] === r
    ))
      return e(i);
  });
}, tc = /* @__PURE__ */ ye({ patchProp: Ga }, Ea);
let Wi;
function sc() {
  return Wi || (Wi = ia(tc));
}
const vo = (...e) => {
  const t = sc().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const i = ic(n);
    if (!i) return;
    const r = t._component;
    !q(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = s(i, !1, nc(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
};
function nc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function ic(e) {
  return he(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let yo;
const fn = (e) => yo = e, bo = (
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
function rc() {
  const e = fr(!0), t = e.run(() => /* @__PURE__ */ Se({}));
  let s = [], n = [];
  const i = Xn({
    install(r) {
      fn(i), i._a = r, r.provide(bo, i), r.config.globalProperties.$pinia = i, n.forEach((o) => s.push(o)), n = [];
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
const _o = () => {
};
function zi(e, t, s, n = _o) {
  e.push(t);
  const i = () => {
    const r = e.indexOf(t);
    r > -1 && (e.splice(r, 1), n());
  };
  return !s && dr() && Fo(i), i;
}
function Dt(e, ...t) {
  e.slice().forEach((s) => {
    s(...t);
  });
}
const oc = (e) => e(), Ji = Symbol(), En = Symbol();
function jn(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((s, n) => e.set(n, s)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const s in t) {
    if (!t.hasOwnProperty(s))
      continue;
    const n = t[s], i = e[s];
    Un(i) && Un(n) && e.hasOwnProperty(s) && !/* @__PURE__ */ pe(n) && !/* @__PURE__ */ ct(n) ? e[s] = jn(i, n) : e[s] = n;
  }
  return e;
}
const lc = (
  /* istanbul ignore next */
  Symbol()
);
function ac(e) {
  return !Un(e) || !e.hasOwnProperty(lc);
}
const { assign: ht } = Object;
function cc(e) {
  return !!(/* @__PURE__ */ pe(e) && e.effect);
}
function uc(e, t, s, n) {
  const { state: i, actions: r, getters: o } = t, l = s.state.value[e];
  let a;
  function d() {
    l || (s.state.value[e] = i ? i() : {});
    const c = /* @__PURE__ */ ll(s.state.value[e]);
    return ht(c, r, Object.keys(o || {}).reduce((h, v) => (h[v] = Xn(Rt(() => {
      fn(s);
      const m = s._s.get(e);
      return o[v].call(m, m);
    })), h), {}));
  }
  return a = xo(e, d, t, s, n, !0), a;
}
function xo(e, t, s = {}, n, i, r) {
  let o;
  const l = ht({ actions: {} }, s), a = { deep: !0 };
  let d, c, h = [], v = [], m;
  const L = n.state.value[e];
  !r && !L && (n.state.value[e] = {});
  let A;
  function N(G) {
    let x;
    d = c = !1, typeof G == "function" ? (G(n.state.value[e]), x = {
      type: fs.patchFunction,
      storeId: e,
      events: m
    }) : (jn(n.state.value[e], G), x = {
      type: fs.patchObject,
      payload: G,
      storeId: e,
      events: m
    });
    const D = A = Symbol();
    rt().then(() => {
      A === D && (d = !0);
    }), c = !0, Dt(h, x, n.state.value[e]);
  }
  const M = r ? function() {
    const { state: x } = s, D = x ? x() : {};
    this.$patch((W) => {
      ht(W, D);
    });
  } : (
    /* istanbul ignore next */
    _o
  );
  function I() {
    o.stop(), h = [], v = [], n._s.delete(e);
  }
  const F = (G, x = "") => {
    if (Ji in G)
      return G[En] = x, G;
    const D = function() {
      fn(n);
      const W = Array.from(arguments), b = [], R = [];
      function Q(Y) {
        b.push(Y);
      }
      function me(Y) {
        R.push(Y);
      }
      Dt(v, {
        args: W,
        name: D[En],
        store: J,
        after: Q,
        onError: me
      });
      let ie;
      try {
        ie = G.apply(this && this.$id === e ? this : J, W);
      } catch (Y) {
        throw Dt(R, Y), Y;
      }
      return ie instanceof Promise ? ie.then((Y) => (Dt(b, Y), Y)).catch((Y) => (Dt(R, Y), Promise.reject(Y))) : (Dt(b, ie), ie);
    };
    return D[Ji] = !0, D[En] = x, D;
  }, k = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: zi.bind(null, v),
    $patch: N,
    $reset: M,
    $subscribe(G, x = {}) {
      const D = zi(h, G, x.detached, () => W()), W = o.run(() => mt(() => n.state.value[e], (b) => {
        (x.flush === "sync" ? c : d) && G({
          storeId: e,
          type: fs.direct,
          events: m
        }, b);
      }, ht({}, a, x)));
      return D;
    },
    $dispose: I
  }, J = /* @__PURE__ */ sn(k);
  n._s.set(e, J);
  const ne = (n._a && n._a.runWithContext || oc)(() => n._e.run(() => (o = fr()).run(() => t({ action: F }))));
  for (const G in ne) {
    const x = ne[G];
    if (/* @__PURE__ */ pe(x) && !cc(x) || /* @__PURE__ */ ct(x))
      r || (L && ac(x) && (/* @__PURE__ */ pe(x) ? x.value = L[G] : jn(x, L[G])), n.state.value[e][G] = x);
    else if (typeof x == "function") {
      const D = F(x, G);
      ne[G] = D, l.actions[G] = x;
    }
  }
  return ht(J, ne), ht(/* @__PURE__ */ te(J), ne), Object.defineProperty(J, "$state", {
    get: () => n.state.value[e],
    set: (G) => {
      N((x) => {
        ht(x, G);
      });
    }
  }), n._p.forEach((G) => {
    ht(J, o.run(() => G({
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
    const d = yl();
    return l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    l || (d ? os(bo, null) : null), l && fn(l), l = yo, l._s.has(n) || (r ? xo(n, t, i, l) : uc(n, i, l)), l._s.get(n);
  }
  return o.$id = n, o;
}
function fc() {
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
    providers: fc(),
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
class dc {
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
function hc(e) {
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
class pc {
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
      return this.ctx().extensionSettings[jt] ?? null;
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
      s.extensionSettings[jt] = t, s.saveSettingsDebounced();
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
    return `${jt}__settings`;
  }
  cachePrefix() {
    return `${jt}:cache:`;
  }
  cacheKey(t) {
    return `${this.cachePrefix()}${t}`;
  }
}
function gc() {
  return new pc();
}
const jt = "st-music-player", Yi = "stmp_cursor", Xi = "stmp_userlist";
class mc {
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
class vc {
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
class yc {
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
class bc {
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
        return new vc({ baseURL: i.baseURL, apiBase: i.apiBase });
      case "local":
        return new yc({
          storage: i.storage ? i.storage : void 0
        });
      case "custom":
        return new bc({
          searchURL: i.searchURL,
          resolveURL: i.resolveURL
        });
      default:
        return null;
    }
  }).filter((n) => n !== null);
  return new mc(s);
}
const _c = {
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
function xc() {
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
function j(e) {
  return xc().startsWith("zh") ? _c[e] ?? e : e;
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
        console.warn(`[playlist] resolve failed for "${t.song}"`), typeof toastr < "u" && toastr.warning(`${j("Cannot play")}: ${t.song}`);
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
      const e = new dc();
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
      this.lyrics = hc(e), this.currentLyricIndex = -1;
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
}), wc = ["width", "height"], Cc = {
  key: 0,
  points: "6 3 20 12 6 21 6 3",
  fill: "currentColor",
  stroke: "none"
}, Ic = {
  key: 10,
  points: "6 9 12 15 18 9"
}, Ec = {
  key: 11,
  points: "18 15 12 9 6 15"
}, Tc = {
  key: 15,
  points: "20 6 9 17 4 12"
}, Ac = /* @__PURE__ */ Lt({
  __name: "Icon",
  props: {
    name: {},
    size: {}
  },
  setup(e) {
    return (t, s) => (U(), H("svg", {
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
      e.name === "play" ? (U(), H("polygon", Cc)) : e.name === "pause" ? (U(), H(se, { key: 1 }, [
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
      ], 64)) : e.name === "prev" ? (U(), H(se, { key: 2 }, [
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
      ], 64)) : e.name === "next" ? (U(), H(se, { key: 3 }, [
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
      ], 64)) : e.name === "repeat" ? (U(), H(se, { key: 4 }, [
        s[6] || (s[6] = p("polyline", { points: "17 1 21 5 17 9" }, null, -1)),
        s[7] || (s[7] = p("path", { d: "M3 11V9a4 4 0 0 1 4-4h14" }, null, -1)),
        s[8] || (s[8] = p("polyline", { points: "7 23 3 19 7 15" }, null, -1)),
        s[9] || (s[9] = p("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" }, null, -1))
      ], 64)) : e.name === "repeat-one" ? (U(), H(se, { key: 5 }, [
        s[10] || (s[10] = Ps('<polyline points="17 1 21 5 17 9" data-v-4bfc4099></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14" data-v-4bfc4099></path><polyline points="7 23 3 19 7 15" data-v-4bfc4099></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3" data-v-4bfc4099></path><text x="12" y="14" text-anchor="middle" font-size="8" fill="currentColor" stroke="none" font-weight="bold" data-v-4bfc4099>1</text>', 5))
      ], 64)) : e.name === "shuffle" ? (U(), H(se, { key: 6 }, [
        s[11] || (s[11] = Ps('<polyline points="16 3 21 3 21 8" data-v-4bfc4099></polyline><line x1="4" y1="20" x2="21" y2="3" data-v-4bfc4099></line><polyline points="21 16 21 21 16 21" data-v-4bfc4099></polyline><line x1="15" y1="15" x2="21" y2="21" data-v-4bfc4099></line><line x1="4" y1="4" x2="9" y2="9" data-v-4bfc4099></line>', 5))
      ], 64)) : e.name === "search" ? (U(), H(se, { key: 7 }, [
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
      ], 64)) : e.name === "plus" ? (U(), H(se, { key: 8 }, [
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
      ], 64)) : e.name === "x" ? (U(), H(se, { key: 9 }, [
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
      ], 64)) : e.name === "chevron-down" ? (U(), H("polyline", Ic)) : e.name === "chevron-up" ? (U(), H("polyline", Ec)) : e.name === "music" ? (U(), H(se, { key: 12 }, [
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
      ], 64)) : e.name === "volume" ? (U(), H(se, { key: 13 }, [
        s[21] || (s[21] = p("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[22] || (s[22] = p("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1)),
        s[23] || (s[23] = p("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }, null, -1))
      ], 64)) : e.name === "volume-mute" ? (U(), H(se, { key: 14 }, [
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
      ], 64)) : e.name === "check" ? (U(), H("polyline", Tc)) : e.name === "loader" ? (U(), H(se, { key: 16 }, [
        s[27] || (s[27] = Ps('<line x1="12" y1="2" x2="12" y2="6" data-v-4bfc4099></line><line x1="12" y1="18" x2="12" y2="22" data-v-4bfc4099></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" data-v-4bfc4099></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" data-v-4bfc4099></line><line x1="2" y1="12" x2="6" y2="12" data-v-4bfc4099></line><line x1="18" y1="12" x2="22" y2="12" data-v-4bfc4099></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" data-v-4bfc4099></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" data-v-4bfc4099></line>', 8))
      ], 64)) : e.name === "list-music" ? (U(), H(se, { key: 17 }, [
        s[28] || (s[28] = Ps('<path d="M3 12h11" data-v-4bfc4099></path><path d="M3 6h11" data-v-4bfc4099></path><path d="M3 18h7" data-v-4bfc4099></path><path d="M16 8v13" data-v-4bfc4099></path><circle cx="14" cy="21" r="2" data-v-4bfc4099></circle><path d="M16 8l5-2v3" data-v-4bfc4099></path>', 6))
      ], 64)) : Fe("", !0)
    ], 8, wc));
  }
}), kt = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, i] of t)
    s[n] = i;
  return s;
}, _e = /* @__PURE__ */ kt(Ac, [["__scopeId", "data-v-4bfc4099"]]), Mc = { class: "stmp-collapsed-bar" }, Pc = { class: "stmp-collapsed-title" }, Rc = ["aria-label"], Lc = /* @__PURE__ */ Lt({
  __name: "CollapsedBar",
  setup(e) {
    const t = $t(), s = Rt(() => t.currentTrack?.name || j("No Song"));
    return (n, i) => (U(), H("div", Mc, [
      oe(_e, {
        name: "music",
        size: 14,
        class: "stmp-collapsed-icon"
      }),
      p("span", Pc, X(s.value), 1),
      p("button", {
        class: "stmp-icon-btn",
        "aria-label": C(t).isPlaying ? C(j)("Pause") : C(j)("Play"),
        onClick: i[0] || (i[0] = Tt((r) => C(t).togglePlay(), ["stop"]))
      }, [
        oe(_e, {
          name: C(t).isPlaying ? "pause" : "play",
          size: 16
        }, null, 8, ["name"])
      ], 8, Rc)
    ]));
  }
}), $c = /* @__PURE__ */ kt(Lc, [["__scopeId", "data-v-d0f4f061"]]), kc = { class: "stmp-playlist" }, Oc = { class: "stmp-upload-area" }, Dc = ["aria-label"], Nc = {
  key: 0,
  class: "stmp-empty"
}, Fc = { class: "stmp-group-label" }, Uc = ["onClick"], jc = { class: "stmp-item-index" }, Hc = { class: "stmp-item-info" }, Vc = { class: "stmp-item-song" }, Bc = {
  key: 0,
  class: "stmp-item-artist"
}, Kc = ["onClick"], Wc = /* @__PURE__ */ Lt({
  __name: "PlaylistView",
  setup(e) {
    const t = Cs(), s = Ie(), n = /* @__PURE__ */ Se(null), i = () => {
      n.value?.click();
    }, r = async (c) => {
      const h = c.target;
      if (!h.files || !h.files[0]) return;
      const v = h.files[0], m = `stmp:audio:${Date.now()}-${v.name}`, L = s.storage;
      L && (await L.setBlob(m, v), t.addLocalFile(v.name, m)), h.value = "";
    }, o = Rt(() => {
      const c = {
        chat: [],
        user: [],
        local: []
      };
      return t.list.forEach((h, v) => {
        c[h.source] && c[h.source].push({ index: v, item: h });
      }), c;
    }), l = {
      chat: j("From Chat"),
      user: j("My List"),
      local: j("Local Files")
    };
    function a(c) {
      t.play(c);
    }
    function d(c) {
      t.removeItem(c);
    }
    return (c, h) => (U(), H("div", kc, [
      p("div", Oc, [
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
          "aria-label": C(j)("Add local file"),
          onClick: i
        }, " + " + X(C(j)("Add local file")), 9, Dc)
      ]),
      C(t).isEmpty ? (U(), H("div", Nc, X(C(j)("No Songs")), 1)) : (U(), H(se, { key: 1 }, gt(["chat", "user", "local"], (v) => p("div", {
        key: v,
        class: "stmp-group"
      }, [
        o.value[v].length ? (U(), H(se, { key: 0 }, [
          p("div", Fc, X(l[v]), 1),
          (U(!0), H(se, null, gt(o.value[v], (m) => (U(), H("div", {
            key: m.item.id,
            class: xe(["stmp-item", { active: m.index === C(t).currentIndex }]),
            onClick: (L) => a(m.index)
          }, [
            p("span", jc, X(m.index + 1), 1),
            p("div", Hc, [
              p("span", Vc, X(m.item.song), 1),
              m.item.artist ? (U(), H("span", Bc, X(m.item.artist), 1)) : Fe("", !0)
            ]),
            p("button", {
              class: "stmp-item-del",
              onClick: Tt((L) => d(m.index), ["stop"])
            }, [
              oe(_e, {
                name: "x",
                size: 14
              })
            ], 8, Kc)
          ], 10, Uc))), 128))
        ], 64)) : Fe("", !0)
      ])), 64))
    ]));
  }
}), zc = /* @__PURE__ */ kt(Wc, [["__scopeId", "data-v-6157de27"]]), Jc = { class: "stmp-search" }, Gc = { class: "stmp-search-bar" }, qc = ["placeholder"], Yc = ["disabled"], Xc = {
  key: 0,
  class: "stmp-search-error"
}, Zc = ["aria-label"], Qc = {
  key: 1,
  class: "stmp-search-loading"
}, eu = {
  key: 2,
  class: "stmp-search-empty"
}, tu = {
  key: 3,
  class: "stmp-search-hint"
}, su = {
  key: 4,
  class: "stmp-results"
}, nu = ["onClick"], iu = { class: "stmp-result-name" }, ru = {
  key: 0,
  class: "stmp-result-artist"
}, ou = ["aria-label", "onClick"], lu = /* @__PURE__ */ Lt({
  __name: "SearchView",
  setup(e) {
    const t = Sc(), s = Cs(), n = Ie(), i = /* @__PURE__ */ Se(t.keyword), r = /* @__PURE__ */ Se(/* @__PURE__ */ new Set()), o = /* @__PURE__ */ Se(null);
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
      const A = s.list.length;
      s.addFromSearch(m);
      const N = s.list.length - 1;
      N >= A && s.play(N), setTimeout(() => {
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
    return (m, L) => (U(), H("div", Jc, [
      p("div", Gc, [
        st(p("input", {
          "onUpdate:modelValue": L[0] || (L[0] = (A) => i.value = A),
          class: "stmp-search-input",
          placeholder: C(j)("Search Song..."),
          onKeydown: mo(l, ["enter"])
        }, null, 40, qc), [
          [ss, i.value]
        ]),
        p("button", {
          class: "stmp-icon-btn",
          disabled: C(t).isSearching,
          onClick: l
        }, [
          C(t).isSearching ? (U(), Pt(_e, {
            key: 1,
            name: "loader",
            size: 16,
            class: "stmp-spin"
          })) : (U(), Pt(_e, {
            key: 0,
            name: "search",
            size: 16
          }))
        ], 8, Yc)
      ]),
      C(t).error ? (U(), H("div", Xc, [
        p("span", null, X(C(t).error), 1),
        p("button", {
          class: "stmp-retry-btn",
          "aria-label": C(j)("Retry"),
          onClick: a
        }, X(C(j)("Retry")), 9, Zc)
      ])) : Fe("", !0),
      C(t).isSearching ? (U(), H("div", Qc, X(C(j)("Searching...")), 1)) : i.value && !C(t).results.length ? (U(), H("div", eu, X(C(j)("No results")), 1)) : !i.value && !C(t).results.length ? (U(), H("div", tu, X(C(j)("Type a song name to search")), 1)) : Fe("", !0),
      C(t).results.length ? (U(), H("div", su, [
        (U(!0), H(se, null, gt(C(t).results, (A) => (U(), H("div", {
          key: A.provider + A.id,
          class: xe(["stmp-result", { "stmp-result-playing": v(A) }])
        }, [
          p("div", {
            class: "stmp-result-info",
            onClick: (N) => d(A)
          }, [
            p("span", iu, X(A.name), 1),
            A.artist ? (U(), H("span", ru, X(A.artist), 1)) : Fe("", !0)
          ], 8, nu),
          p("button", {
            class: xe(["stmp-icon-btn stmp-result-add", { added: h(A) }]),
            "aria-label": h(A) ? C(j)("Added") : C(j)("Add to list"),
            onClick: Tt((N) => c(A), ["stop"])
          }, [
            oe(_e, {
              name: h(A) ? "check" : "plus",
              size: 16
            }, null, 8, ["name"])
          ], 10, ou)
        ], 2))), 128))
      ])) : Fe("", !0)
    ]));
  }
}), au = /* @__PURE__ */ kt(lu, [["__scopeId", "data-v-a8d156af"]]), cu = { class: "stmp-panel" }, uu = { class: "stmp-topbar stmp-drag-handle" }, fu = ["aria-label"], du = { class: "stmp-cover-large" }, hu = ["src"], pu = {
  key: 1,
  class: "stmp-cover-placeholder"
}, gu = { class: "stmp-track-name" }, mu = { class: "stmp-track-artist" }, vu = { class: "stmp-lyric-header" }, yu = { class: "stmp-track-name" }, bu = { class: "stmp-track-artist" }, _u = {
  key: 0,
  class: "stmp-lyric-empty"
}, xu = { class: "stmp-progress" }, Su = ["value"], wu = { class: "stmp-time" }, Cu = { class: "stmp-controls" }, Iu = { class: "stmp-ctrl-side stmp-search-side" }, Eu = ["aria-label"], Tu = ["aria-label"], Au = ["aria-label"], Mu = ["aria-label"], Pu = ["aria-label"], Ru = ["aria-label"], Lu = { class: "stmp-ctrl-side stmp-volume-side" }, $u = ["aria-label"], ku = ["value"], Ou = {
  key: 0,
  class: "stmp-overlay"
}, Du = { class: "stmp-overlay-header" }, Nu = { class: "stmp-overlay-title" }, Fu = ["aria-label"], Uu = { class: "stmp-overlay-body" }, ju = /* @__PURE__ */ Lt({
  __name: "PlayerPanel",
  emits: ["collapse"],
  setup(e) {
    const t = $t(), s = Cs(), n = Ie(), i = /* @__PURE__ */ Se("cover"), r = /* @__PURE__ */ Se(null), o = /* @__PURE__ */ Se(!1), l = /* @__PURE__ */ Se(!1);
    let a = null;
    const d = Rt(() => t.currentTrack?.cover || ""), c = () => {
      o.value = !0;
    };
    mt(
      () => t.currentTrack,
      () => {
        o.value = !1;
      }
    );
    const h = Rt(
      () => t.duration > 0 ? t.currentTime / t.duration * 100 : 0
    ), v = /* @__PURE__ */ Se(0), m = /* @__PURE__ */ Se([]), L = /* @__PURE__ */ Se(null);
    function A(b, R) {
      b && (m.value[R] = b);
    }
    async function N() {
      await rt();
      const b = t.currentLyricIndex, R = L.value;
      if (!R || b < 0) {
        v.value = 0;
        return;
      }
      const Q = m.value[b];
      if (!Q) return;
      const me = Q.offsetTop, ie = Q.offsetHeight, Y = R.clientHeight;
      v.value = me - Y / 2 + ie / 2;
    }
    mt(() => t.currentLyricIndex, N), mt(() => t.lyrics, () => {
      m.value = [], N();
    });
    function M(b) {
      const R = Math.floor(b / 60), Q = Math.floor(b % 60);
      return R + ":" + Q.toString().padStart(2, "0");
    }
    function I(b) {
      const R = b.target;
      t.seek(Number(R.value) / 100 * t.duration);
    }
    const F = ["list", "random", "single"], k = {
      list: "repeat",
      random: "shuffle",
      single: "repeat-one"
    };
    function J() {
      const b = n.settings.playMode, R = F.indexOf(b), Q = F[(R + 1) % F.length];
      n.setPlayMode(Q);
    }
    function Z(b) {
      const R = b.target;
      t.setVolume(Number(R.value));
    }
    function ne() {
      a && clearTimeout(a), l.value = !0;
    }
    function G() {
      a = setTimeout(() => {
        l.value = !1;
      }, 300);
    }
    function x() {
      t.volume > 0 ? t.setVolume(0) : t.setVolume(65);
    }
    function D(b) {
      r.value === b ? r.value = null : r.value = b;
    }
    function W() {
      r.value = null;
    }
    return (b, R) => (U(), H("div", cu, [
      p("div", uu, [
        R[7] || (R[7] = p("div", { class: "stmp-topbar-spacer" }, null, -1)),
        p("button", {
          class: "stmp-icon-btn",
          "aria-label": C(j)("Collapse panel"),
          onClick: R[0] || (R[0] = Tt((Q) => b.$emit("collapse"), ["stop"]))
        }, [
          oe(_e, {
            name: "chevron-down",
            size: 18
          })
        ], 8, fu)
      ]),
      p("div", {
        class: "stmp-display",
        onClick: R[1] || (R[1] = (Q) => i.value = i.value === "cover" ? "lyric" : "cover")
      }, [
        p("div", {
          class: xe(["stmp-cover-mode", { hidden: i.value !== "cover" }])
        }, [
          p("div", du, [
            d.value && !o.value ? (U(), H("img", {
              key: 0,
              src: d.value,
              alt: "cover",
              onError: c
            }, null, 40, hu)) : (U(), H("div", pu, [
              oe(_e, {
                name: "music",
                size: 48
              })
            ]))
          ]),
          p("div", gu, X(C(t).currentTrack?.name || C(j)("No Song")), 1),
          p("div", mu, X(C(t).currentTrack?.artist || " "), 1)
        ], 2),
        p("div", {
          class: xe(["stmp-lyric-mode", { hidden: i.value !== "lyric" }])
        }, [
          p("div", vu, [
            p("div", yu, X(C(t).currentTrack?.name || C(j)("No Song")), 1),
            p("div", bu, X(C(t).currentTrack?.artist || " "), 1)
          ]),
          p("div", {
            ref_key: "lyricWindowRef",
            ref: L,
            class: "stmp-lyric-window"
          }, [
            C(t).lyrics.length === 0 ? (U(), H("div", _u, [
              oe(_e, {
                name: "music",
                size: 18
              })
            ])) : (U(), H("div", {
              key: 1,
              class: "stmp-lyric-scroll",
              style: en({ transform: `translateY(-${v.value}px)` })
            }, [
              (U(!0), H(se, null, gt(C(t).lyrics, (Q, me) => (U(), H("div", {
                key: me,
                ref_for: !0,
                ref: (ie) => A(ie, me),
                class: xe(["stmp-lyric-line", { "stmp-lyric-active": me === C(t).currentLyricIndex }])
              }, X(Q.text), 3))), 128))
            ], 4))
          ], 512)
        ], 2)
      ]),
      p("div", xu, [
        p("input", {
          type: "range",
          min: "0",
          max: "100",
          step: "0.1",
          value: h.value,
          class: "stmp-range",
          onInput: I
        }, null, 40, Su),
        p("div", wu, [
          p("span", null, X(M(C(t).currentTime)), 1),
          p("span", null, X(M(C(t).duration)), 1)
        ])
      ]),
      p("div", Cu, [
        p("div", Iu, [
          p("button", {
            class: xe(["stmp-ctrl-btn", { active: r.value === "search" }]),
            "aria-label": C(j)("Search"),
            onClick: R[2] || (R[2] = Tt((Q) => D("search"), ["stop"]))
          }, [
            oe(_e, {
              name: "search",
              size: 18
            })
          ], 10, Eu)
        ]),
        p("button", {
          class: "stmp-ctrl-btn",
          "aria-label": C(j)("Toggle play mode"),
          onClick: J
        }, [
          oe(_e, {
            name: k[C(n).settings.playMode],
            size: 18
          }, null, 8, ["name"])
        ], 8, Tu),
        p("button", {
          class: "stmp-ctrl-btn",
          "aria-label": C(j)("Previous"),
          onClick: R[3] || (R[3] = (Q) => C(s).prev())
        }, [
          oe(_e, {
            name: "prev",
            size: 18
          })
        ], 8, Au),
        p("button", {
          class: "stmp-ctrl-btn stmp-play-btn",
          "aria-label": C(t).isPlaying ? C(j)("Pause") : C(j)("Play"),
          onClick: R[4] || (R[4] = (Q) => C(t).togglePlay())
        }, [
          oe(_e, {
            name: C(t).isPlaying ? "pause" : "play",
            size: 24
          }, null, 8, ["name"])
        ], 8, Mu),
        p("button", {
          class: "stmp-ctrl-btn",
          "aria-label": C(j)("Next"),
          onClick: R[5] || (R[5] = (Q) => C(s).next())
        }, [
          oe(_e, {
            name: "next",
            size: 18
          })
        ], 8, Pu),
        p("button", {
          class: xe(["stmp-ctrl-btn", { active: r.value === "list" }]),
          "aria-label": C(j)("Playlist"),
          onClick: R[6] || (R[6] = Tt((Q) => D("list"), ["stop"]))
        }, [
          oe(_e, {
            name: "list-music",
            size: 18
          })
        ], 10, Ru),
        p("div", Lu, [
          p("div", {
            class: "stmp-volume-container",
            onMouseenter: ne,
            onMouseleave: G
          }, [
            p("button", {
              class: "stmp-ctrl-btn",
              "aria-label": C(j)("Mute / Unmute"),
              onClick: x
            }, [
              oe(_e, {
                name: C(t).volume === 0 ? "volume-mute" : "volume",
                size: 18
              }, null, 8, ["name"])
            ], 8, $u),
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
              }, null, 40, ku)
            ], 2)
          ], 32)
        ])
      ]),
      oe(Ma, { name: "stmp-overlay" }, {
        default: $r(() => [
          r.value ? (U(), H("div", Ou, [
            p("div", Du, [
              p("span", Nu, X(r.value === "list" ? C(j)("Playlist") : C(j)("Search")), 1),
              p("button", {
                class: "stmp-overlay-close",
                "aria-label": C(j)("Close"),
                onClick: Tt(W, ["stop"])
              }, [
                oe(_e, {
                  name: "x",
                  size: 16
                })
              ], 8, Fu)
            ]),
            p("div", Uu, [
              r.value === "list" ? (U(), Pt(zc, { key: 0 })) : (U(), Pt(au, { key: 1 }))
            ])
          ])) : Fe("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Hu = /* @__PURE__ */ kt(ju, [["__scopeId", "data-v-518661ad"]]), Vu = /* @__PURE__ */ Lt({
  __name: "App",
  setup(e) {
    const t = Ie(), s = $t(), n = /* @__PURE__ */ Se(!1), i = /* @__PURE__ */ Se(null);
    let r = null;
    const o = Rt(() => t.settings.widgetMode === "dock"), l = (x) => {
      x.key === "Escape" && (n.value = !1), x.key === " " && x.target === document.body && (x.preventDefault(), s.togglePlay());
    };
    let a = 0, d = 0, c = 0, h = 0, v = !1, m = !1, L = null, A = null;
    function N(x) {
      if (o.value) return;
      const D = x.target;
      if (D.closest("input, .stmp-result, .stmp-item, .stmp-upload-btn, .stmp-search-input, .stmp-controls, .stmp-lyrics, .stmp-overlay, .stmp-display, .stmp-overlay-close") || n.value && (!D.closest(".stmp-drag-handle") || D.closest("button")) || !n.value && D.closest("button"))
        return;
      const W = i.value?.getBoundingClientRect();
      W && (a = x.clientX, d = x.clientY, c = W.left, h = W.top, v = !1, m = !0, i.value && (i.value.style.left = W.left + "px", i.value.style.top = W.top + "px", i.value.style.right = "auto", i.value.style.bottom = "auto"), L = M, A = I, document.addEventListener("pointermove", L), document.addEventListener("pointerup", A), x.preventDefault());
    }
    function M(x) {
      if (!i.value || !m) return;
      const D = x.clientX - a, W = x.clientY - d;
      (Math.abs(D) > 3 || Math.abs(W) > 3) && (v = !0);
      let b = c + D, R = h + W;
      const Q = i.value.offsetWidth || 60, me = i.value.offsetHeight || 40, ie = window.innerWidth - Q, Y = window.innerHeight - me;
      b = Math.max(0, Math.min(b, ie)), R = Math.max(0, Math.min(R, Y)), i.value.style.left = b + "px", i.value.style.top = R + "px";
    }
    function I() {
      if (m = !1, L && document.removeEventListener("pointermove", L), A && document.removeEventListener("pointerup", A), L = null, A = null, !v) {
        ne();
        return;
      }
      if (i.value) {
        const x = i.value.getBoundingClientRect();
        t.setPosition({ x: x.left, y: x.top }), n.value && rt(() => F());
      }
    }
    function F() {
      if (!i.value) return;
      const x = i.value.getBoundingClientRect(), D = i.value.offsetWidth, W = i.value.offsetHeight;
      let b = x.left, R = x.top;
      b + D > window.innerWidth && (b = window.innerWidth - D), R + W > window.innerHeight && (R = window.innerHeight - W), b < 0 && (b = 0), R < 0 && (R = 0), i.value.style.left = b + "px", i.value.style.top = R + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", t.setPosition({ x: b, y: R });
    }
    function k() {
      if (!i.value || !o.value) return;
      const x = document.querySelector("#send_form");
      if (!x) return;
      const D = x.getBoundingClientRect(), W = i.value.offsetHeight || 38, b = Math.max(80, D.top - 8);
      i.value.style.maxHeight = b + "px";
      let R = D.top - Math.min(W, b);
      R < 4 && (R = 4), window.innerWidth <= 768 ? (i.value.style.left = D.left + "px", i.value.style.width = D.width + "px") : (i.value.style.left = D.left + "px", i.value.style.width = ""), i.value.style.top = R + "px", i.value.style.right = "auto", i.value.style.bottom = "auto";
    }
    function J() {
      if (!i.value || o.value) return;
      const x = t.settings.position;
      x ? (i.value.style.left = x.x + "px", i.value.style.top = x.y + "px") : (i.value.style.right = "16px", i.value.style.top = "16px", i.value.style.left = "auto", i.value.style.bottom = "auto");
    }
    function Z(x) {
      if (o.value && !n.value) {
        if (x.target.closest("button, input")) return;
        ne();
      }
    }
    function ne() {
      n.value = !n.value, rt(() => {
        o.value ? k() : t.settings.position && F();
      });
    }
    mt(() => t.settings.widgetMode, (x) => {
      rt(() => {
        x === "dock" ? k() : J();
      });
    }), Qn(() => {
      rt(() => {
        o.value ? k() : J();
      }), i.value && typeof ResizeObserver < "u" && (r = new ResizeObserver(() => {
        o.value && k();
      }), r.observe(i.value)), window.addEventListener("resize", G), window.addEventListener("keydown", l);
    });
    function G() {
      o.value ? rt(() => k()) : t.settings.position && rt(() => F());
    }
    return ei(() => {
      I(), r && (r.disconnect(), r = null), window.removeEventListener("resize", G), window.removeEventListener("keydown", l);
    }), (x, D) => (U(), H("div", {
      ref_key: "widgetRef",
      ref: i,
      class: xe(["stmp-widget", {
        "stmp-expanded": n.value,
        "stmp-collapsed": !n.value,
        "stmp-dock": o.value
      }]),
      onPointerdown: N,
      onClick: Z
    }, [
      n.value ? (U(), Pt(Hu, {
        key: 1,
        onCollapse: ne
      })) : (U(), Pt($c, { key: 0 }))
    ], 34));
  }
}), Bu = /* @__PURE__ */ kt(Vu, [["__scopeId", "data-v-c4b5008e"]]), Ku = { class: "stmp-settings" }, Wu = { class: "stmp-tab-bar" }, zu = ["onClick"], Ju = { class: "stmp-tab-content" }, Gu = { class: "stmp-tab-panel" }, qu = { class: "stmp-setting-group" }, Yu = { class: "stmp-setting-label" }, Xu = { class: "stmp-mode-toggle" }, Zu = { class: "stmp-setting-group" }, Qu = { class: "stmp-setting-label" }, ef = ["value"], tf = { class: "stmp-setting-group" }, sf = {
  class: "stmp-setting-label",
  for: "stmp-playmode"
}, nf = ["value"], rf = ["value"], of = { class: "checkbox_label stmp-setting-row" }, lf = ["checked"], af = { class: "stmp-tab-panel" }, cf = { class: "checkbox_label" }, uf = ["checked", "onChange"], ff = {
  key: 0,
  class: "stmp-provider-fields"
}, df = ["onUpdate:modelValue", "placeholder"], hf = {
  key: 1,
  class: "stmp-provider-fields"
}, pf = ["onUpdate:modelValue", "placeholder"], gf = ["onUpdate:modelValue", "placeholder"], mf = { class: "stmp-tab-panel" }, vf = { class: "stmp-setting-group" }, yf = { class: "stmp-setting-label" }, bf = { class: "stmp-rules" }, _f = ["onClick"], xf = { class: "stmp-rule-add" }, Sf = ["placeholder"], wf = { class: "stmp-tab-panel" }, Cf = { class: "stmp-data-btns" }, If = /* @__PURE__ */ Lt({
  __name: "SettingsView",
  setup(e) {
    const t = Ie(), s = /* @__PURE__ */ Se("playback"), n = [
      { id: "playback", label: j("Playback"), icon: "fa-solid fa-music" },
      { id: "providers", label: j("Providers"), icon: "fa-solid fa-cloud" },
      { id: "cue", label: j("AI Cue"), icon: "fa-solid fa-wand-magic-sparkles" },
      { id: "data", label: j("Data"), icon: "fa-solid fa-database" }
    ], i = [
      { value: "list", label: j("List Loop") },
      { value: "random", label: j("Random") },
      { value: "single", label: j("Single Loop") }
    ];
    function r(N) {
      const M = N.target;
      t.setVolume(Number(M.value));
    }
    function o(N) {
      const M = N.target;
      t.setPlayMode(M.value);
    }
    function l(N) {
      const M = N.target;
      t.settings.autoPlayOnNewCue = M.checked, t.save();
    }
    const a = {
      netease: j("NetEase"),
      local: j("Local Files"),
      custom: j("Custom API")
    };
    function d(N) {
      const M = t.settings.providers.find((I) => I.id === N);
      M && (M.enabled = !M.enabled, t.save());
    }
    const c = /* @__PURE__ */ Se("");
    function h() {
      const N = c.value.trim();
      N && (t.addCustomCueRule(N), c.value = "");
    }
    function v(N) {
      t.removeCustomCueRule(N);
    }
    const m = async () => {
      const N = t.storage;
      N && (await N.clearCache(), toastr.success(j("Cache cleared")));
    }, L = () => {
      const N = JSON.stringify(t.settings, null, 2), M = new Blob([N], { type: "application/json" }), I = URL.createObjectURL(M), F = document.createElement("a");
      F.href = I, F.download = "st-music-player-settings.json", F.click(), URL.revokeObjectURL(I);
    }, A = () => {
      const N = document.createElement("input");
      N.type = "file", N.accept = ".json", N.onchange = async (M) => {
        const I = M.target.files?.[0];
        if (!I) return;
        const F = await I.text();
        try {
          const k = JSON.parse(F);
          if (typeof k != "object" || k === null) throw new Error("Not an object");
          const J = ["volume", "playMode", "position", "widgetMode", "autoPlayOnNewCue", "providers", "customCueRules"], Z = {};
          for (const ne of J)
            ne in k && (Z[ne] = k[ne]);
          if (typeof Z.volume != "number" || Z.volume < 0 || Z.volume > 100)
            throw new Error("Invalid volume");
          if (typeof Z.playMode != "string" || !["list", "random", "single"].includes(Z.playMode))
            throw new Error("Invalid playMode");
          if (Z.providers && !Array.isArray(Z.providers))
            throw new Error("Invalid providers");
          if (Z.customCueRules && !Array.isArray(Z.customCueRules))
            throw new Error("Invalid customCueRules");
          Object.assign(t.settings, Z), t.save(), toastr.success(j("Data imported"));
        } catch (k) {
          console.error("Import failed", k), toastr.error(j("Import failed") + ": " + (k instanceof Error ? k.message : j("Invalid JSON")));
        }
      }, N.click();
    };
    return (N, M) => (U(), H("div", Ku, [
      p("div", Wu, [
        (U(), H(se, null, gt(n, (I) => p("div", {
          key: I.id,
          class: xe(["stmp-tab", { active: s.value === I.id }]),
          onClick: (F) => s.value = I.id
        }, [
          p("i", {
            class: xe(I.icon)
          }, null, 2),
          p("span", null, X(I.label), 1)
        ], 10, zu)), 64))
      ]),
      p("div", Ju, [
        st(p("div", Gu, [
          p("div", qu, [
            p("label", Yu, X(C(j)("Widget Mode")), 1),
            p("div", Xu, [
              p("div", {
                class: xe(["menu_button menu_button_icon stmp-mode-btn", { toggled: C(t).settings.widgetMode === "dock" }]),
                onClick: M[0] || (M[0] = (I) => C(t).setWidgetMode("dock"))
              }, [
                M[6] || (M[6] = p("i", { class: "fa-solid fa-grip-lines" }, null, -1)),
                p("span", null, X(C(j)("Dock")), 1)
              ], 2),
              p("div", {
                class: xe(["menu_button menu_button_icon stmp-mode-btn", { toggled: C(t).settings.widgetMode === "drag" }]),
                onClick: M[1] || (M[1] = (I) => C(t).setWidgetMode("drag"))
              }, [
                M[7] || (M[7] = p("i", { class: "fa-solid fa-up-down-left-right" }, null, -1)),
                p("span", null, X(C(j)("Drag")), 1)
              ], 2)
            ])
          ]),
          p("div", Zu, [
            p("label", Qu, X(C(j)("Default Volume")) + ": " + X(C(t).settings.volume), 1),
            p("input", {
              type: "range",
              min: "0",
              max: "100",
              value: C(t).settings.volume,
              onInput: r
            }, null, 40, ef)
          ]),
          p("div", tf, [
            p("label", sf, X(C(j)("Default Play Mode")), 1),
            p("select", {
              id: "stmp-playmode",
              class: "text_pole",
              value: C(t).settings.playMode,
              onChange: o
            }, [
              (U(), H(se, null, gt(i, (I) => p("option", {
                key: I.value,
                value: I.value
              }, X(I.label), 9, rf)), 64))
            ], 40, nf)
          ]),
          p("label", of, [
            p("input", {
              type: "checkbox",
              checked: C(t).settings.autoPlayOnNewCue,
              onChange: l
            }, null, 40, lf),
            p("span", null, X(C(j)("Auto-play on new cue")), 1)
          ])
        ], 512), [
          [Rs, s.value === "playback"]
        ]),
        st(p("div", af, [
          (U(!0), H(se, null, gt(C(t).settings.providers, (I) => (U(), H("div", {
            key: I.id,
            class: "stmp-provider-card"
          }, [
            p("label", cf, [
              p("input", {
                type: "checkbox",
                checked: I.enabled,
                onChange: (F) => d(I.id)
              }, null, 40, uf),
              p("span", null, X(a[I.id] || I.id), 1)
            ]),
            I.id === "netease" ? (U(), H("div", ff, [
              st(p("input", {
                class: "text_pole",
                "onUpdate:modelValue": (F) => I.config.baseURL = F,
                placeholder: C(j)("API baseURL"),
                onChange: M[2] || (M[2] = (F) => C(t).save())
              }, null, 40, df), [
                [ss, I.config.baseURL]
              ])
            ])) : Fe("", !0),
            I.id === "custom" ? (U(), H("div", hf, [
              st(p("input", {
                class: "text_pole",
                "onUpdate:modelValue": (F) => I.config.searchURL = F,
                placeholder: C(j)("Search URL"),
                onChange: M[3] || (M[3] = (F) => C(t).save())
              }, null, 40, pf), [
                [ss, I.config.searchURL]
              ]),
              st(p("input", {
                class: "text_pole",
                "onUpdate:modelValue": (F) => I.config.resolveURL = F,
                placeholder: C(j)("Resolve URL"),
                onChange: M[4] || (M[4] = (F) => C(t).save())
              }, null, 40, gf), [
                [ss, I.config.resolveURL]
              ])
            ])) : Fe("", !0)
          ]))), 128))
        ], 512), [
          [Rs, s.value === "providers"]
        ]),
        st(p("div", mf, [
          p("div", vf, [
            p("label", yf, X(C(j)("Custom Cue Rules (Regex)")), 1),
            p("div", bf, [
              (U(!0), H(se, null, gt(C(t).settings.customCueRules, (I, F) => (U(), H("div", {
                key: F,
                class: "stmp-rule"
              }, [
                p("code", null, X(I), 1),
                p("div", {
                  class: "menu_button menu_button_icon stmp-rule-del",
                  onClick: (k) => v(F)
                }, [...M[8] || (M[8] = [
                  p("i", { class: "fa-solid fa-xmark" }, null, -1)
                ])], 8, _f)
              ]))), 128))
            ]),
            p("div", xf, [
              st(p("input", {
                "onUpdate:modelValue": M[5] || (M[5] = (I) => c.value = I),
                class: "text_pole",
                placeholder: C(j)("Add regex rule..."),
                onKeydown: mo(h, ["enter"])
              }, null, 40, Sf), [
                [ss, c.value]
              ]),
              p("div", {
                class: "menu_button menu_button_icon stmp-rule-add-btn",
                onClick: h
              }, [...M[9] || (M[9] = [
                p("i", { class: "fa-solid fa-plus" }, null, -1)
              ])])
            ])
          ])
        ], 512), [
          [Rs, s.value === "cue"]
        ]),
        st(p("div", wf, [
          p("div", Cf, [
            p("div", {
              class: "menu_button menu_button_icon stmp-data-btn",
              onClick: m
            }, [
              M[10] || (M[10] = p("i", { class: "fa-solid fa-trash-can" }, null, -1)),
              p("span", null, X(C(j)("Clear cache")), 1)
            ]),
            p("div", {
              class: "menu_button menu_button_icon stmp-data-btn",
              onClick: L
            }, [
              M[11] || (M[11] = p("i", { class: "fa-solid fa-file-export" }, null, -1)),
              p("span", null, X(C(j)("Export data")), 1)
            ]),
            p("div", {
              class: "menu_button menu_button_icon stmp-data-btn",
              onClick: A
            }, [
              M[12] || (M[12] = p("i", { class: "fa-solid fa-file-import" }, null, -1)),
              p("span", null, X(C(j)("Import data")), 1)
            ])
          ])
        ], 512), [
          [Rs, s.value === "data"]
        ])
      ])
    ]));
  }
}), Ef = /* @__PURE__ */ kt(If, [["__scopeId", "data-v-c4791c8e"]]);
class Tf {
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
function Af() {
  return new Tf();
}
const Mf = [
  /<bgm>当前bgm[:：](.+?) - (.+?)<\/bgm>/g,
  /<bgm>当前bgm[:：](.+?)<\/bgm>/g,
  /<bgm>(.+?) - (.+?)<\/bgm>/g,
  /<bgm>(.+?)<\/bgm>/g,
  /【BGM】(.+?)(?: - (.+?))?【\/BGM】/g,
  /\[music\](.+?)(?: - (.+?))?\[\/music\]/g
];
function Zi(e, t) {
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
function Qi(e, t = []) {
  const s = /* @__PURE__ */ new Map(), n = (i) => {
    s.has(i.index) || s.set(i.index, i);
  };
  for (const i of Mf)
    for (const r of Zi(i, e)) n(r);
  for (const i of t)
    try {
      const r = new RegExp(i, "g");
      for (const o of Zi(r, e)) n(o);
    } catch {
    }
  return [...s.values()].sort((i, r) => i.index - r.index).map((i) => i.cue);
}
class Pf {
  constructor(t) {
    this.cursors = /* @__PURE__ */ new Map(), this.getChatMessage = t;
  }
  scanIncremental(t, s, n, i = []) {
    const r = [];
    for (let o = s; o <= n; o++) {
      const l = this.getChatMessage(o);
      if (l === void 0) continue;
      const a = Qi(l, i);
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
    const r = Qi(i, n), o = r.length > 0 ? r.at(-1) : null;
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
const Rf = `
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
function Lf() {
  const e = $("#extensions_settings2");
  if (!e || !e.length || (e.append(Rf), hs = e.children(".inline-drawer").last()[0] ?? null, !hs)) return;
  const t = hs.querySelector("#stmp-settings-mount");
  t && Gs && (Wt = vo(Ef), Wt.use(Gs), Wt.mount(t));
}
function $f() {
  Wt && (Wt.unmount(), Wt = null), hs?.remove(), hs = null;
}
function kf(e, t, s) {
  it = Af(), it.on("chat-changed", () => {
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
function Of(e, t, s) {
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
async function Ff() {
  try {
    const e = document.createElement("div");
    e.id = "st-music-player-root", document.documentElement.appendChild(e);
    const t = rc();
    Gs = t, Kt = vo(Bu), Kt.use(t), Kt.mount(e);
    const s = Ie(), n = gc();
    s.init(n);
    const i = $t();
    i.init(), i.setVolume(s.settings.volume);
    const r = new Pf((a) => SillyTavern.getContext().chat[a]?.mes), o = Cs();
    o.init(r), Lf();
    const l = SillyTavern.getContext();
    ds = () => {
      kf(r, o, s), Of(r, o, s);
    }, l.eventSource.on(l.event_types.APP_READY, ds), console.log("[ST-Music-Player] 播放器加载完成");
  } catch (e) {
    console.error("[ST-Music-Player] init failed:", e);
  }
}
function wo() {
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
      $t().destroy();
    } catch {
    }
    Kt.unmount(), Kt = null;
  }
  const e = document.getElementById("st-music-player-root");
  e && e.remove(), $f(), Gs = null;
}
function Uf() {
  wo();
}
async function Df() {
  try {
    const e = SillyTavern.getContext();
    delete e.extensionSettings[jt], e.saveSettingsDebounced();
  } catch (e) {
    console.error("[ST-Music-Player] clean: failed to delete settings:", e);
  }
  try {
    const e = SillyTavern.libs?.localforage;
    if (e && typeof e.keys == "function") {
      const t = await e.keys();
      await Promise.all(
        t.filter((s) => s.startsWith(jt) || s.startsWith("stmp:")).map((s) => e.removeItem(s))
      );
    }
  } catch (e) {
    console.error("[ST-Music-Player] clean: failed to clear localforage:", e);
  }
}
async function jf() {
  await Df(), wo();
}
export {
  Df as clean,
  jf as delete,
  wo as destroy,
  Uf as disable,
  Ff as init
};
