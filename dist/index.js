/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Jn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const de = {}, Wt = [], st = () => {
}, dr = () => !1, en = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), tn = (e) => e.startsWith("onUpdate:"), xe = Object.assign, Gn = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Fo = Object.prototype.hasOwnProperty, ae = (e, t) => Fo.call(e, t), J = Array.isArray, Kt = (e) => Ts(e) === "[object Map]", hr = (e) => Ts(e) === "[object Set]", mi = (e) => Ts(e) === "[object Date]", Q = (e) => typeof e == "function", me = (e) => typeof e == "string", je = (e) => typeof e == "symbol", ce = (e) => e !== null && typeof e == "object", pr = (e) => (ce(e) || Q(e)) && Q(e.then) && Q(e.catch), gr = Object.prototype.toString, Ts = (e) => gr.call(e), Uo = (e) => Ts(e).slice(8, -1), mr = (e) => Ts(e) === "[object Object]", sn = (e) => me(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ls = /* @__PURE__ */ Jn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), nn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Ho = /-\w/g, Ke = nn(
  (e) => e.replace(Ho, (t) => t.slice(1).toUpperCase())
), Vo = /\B([A-Z])/g, Ct = nn(
  (e) => e.replace(Vo, "-$1").toLowerCase()
), vr = nn((e) => e.charAt(0).toUpperCase() + e.slice(1)), _n = nn(
  (e) => e ? `on${vr(e)}` : ""
), tt = (e, t) => !Object.is(e, t), Fs = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, yr = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, Yn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, jo = (e) => {
  const t = me(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let vi;
const rn = () => vi || (vi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function $t(e) {
  if (J(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], i = me(n) ? zo(n) : $t(n);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (me(e) || ce(e))
    return e;
}
const Bo = /;(?![^(]*\))/g, Wo = /:([^]+)/, Ko = /\/\*[^]*?\*\//g;
function zo(e) {
  const t = {};
  return e.replace(Ko, "").split(Bo).forEach((s) => {
    if (s) {
      const n = s.split(Wo);
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
  else if (ce(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const qo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Jo = /* @__PURE__ */ Jn(qo);
function _r(e) {
  return !!e || e === "";
}
function Go(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = Xn(e[n], t[n]);
  return s;
}
function Xn(e, t) {
  if (e === t) return !0;
  let s = mi(e), n = mi(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = je(e), n = je(t), s || n)
    return e === t;
  if (s = J(e), n = J(t), s || n)
    return s && n ? Go(e, t) : !1;
  if (s = ce(e), n = ce(t), s || n) {
    if (!s || !n)
      return !1;
    const i = Object.keys(e).length, r = Object.keys(t).length;
    if (i !== r)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), a = t.hasOwnProperty(o);
      if (l && !a || !l && a || !Xn(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const br = (e) => !!(e && e.__v_isRef === !0), te = (e) => me(e) ? e : e == null ? "" : J(e) || ce(e) && (e.toString === gr || !Q(e.toString)) ? br(e) ? te(e.value) : JSON.stringify(e, xr, 2) : String(e), xr = (e, t) => br(t) ? xr(e, t.value) : Kt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], r) => (s[bn(n, r) + " =>"] = i, s),
    {}
  )
} : hr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => bn(s))
} : je(t) ? bn(t) : ce(t) && !J(t) && !mr(t) ? String(t) : t, bn = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    je(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let be;
class wr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && be && (be.active ? (this.parent = be, this.index = (be.scopes || (be.scopes = [])).push(
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
      const s = be;
      try {
        return be = this, t();
      } finally {
        be = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = be, be = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (be === this)
        be = this.prevScope;
      else {
        let t = be;
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
function Sr(e) {
  return new wr(e);
}
function Cr() {
  return be;
}
function Yo(e, t = !1) {
  be && be.cleanups.push(e);
}
let he;
const xn = /* @__PURE__ */ new WeakSet();
class Ir {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, be && (be.active ? be.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, xn.has(this) && (xn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Er(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, yi(this), kr(this);
    const t = he, s = ze;
    he = this, ze = !0;
    try {
      return this.fn();
    } finally {
      Ar(this), he = t, ze = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ei(t);
      this.deps = this.depsTail = void 0, yi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? xn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ln(this) && this.run();
  }
  get dirty() {
    return Ln(this);
  }
}
let Tr = 0, as, cs;
function Er(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = cs, cs = e;
    return;
  }
  e.next = as, as = e;
}
function Zn() {
  Tr++;
}
function Qn() {
  if (--Tr > 0)
    return;
  if (cs) {
    let t = cs;
    for (cs = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; as; ) {
    let t = as;
    for (as = void 0; t; ) {
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
function kr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ar(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === s && (s = i), ei(n), Xo(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = s;
}
function Ln(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Mr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Mr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === _s) || (e.globalVersion = _s, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ln(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = he, n = ze;
  he = e, ze = !0;
  try {
    kr(e);
    const i = e.fn(e._value);
    (t.version === 0 || tt(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    he = s, ze = n, Ar(e), e.flags &= -3;
  }
}
function ei(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let r = s.computed.deps; r; r = r.nextDep)
      ei(r, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function Xo(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let ze = !0;
const Pr = [];
function nt() {
  Pr.push(ze), ze = !1;
}
function it() {
  const e = Pr.pop();
  ze = e === void 0 ? !0 : e;
}
function yi(e) {
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
let _s = 0;
class Zo {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ti {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!he || !ze || he === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== he)
      s = this.activeLink = new Zo(he, this), he.deps ? (s.prevDep = he.depsTail, he.depsTail.nextDep = s, he.depsTail = s) : he.deps = he.depsTail = s, Rr(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = he.depsTail, s.nextDep = void 0, he.depsTail.nextDep = s, he.depsTail = s, he.deps === s && (he.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, _s++, this.notify(t);
  }
  notify(t) {
    Zn();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Qn();
    }
  }
}
function Rr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Rr(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const js = /* @__PURE__ */ new WeakMap(), Ot = /* @__PURE__ */ Symbol(
  ""
), $n = /* @__PURE__ */ Symbol(
  ""
), bs = /* @__PURE__ */ Symbol(
  ""
);
function Se(e, t, s) {
  if (ze && he) {
    let n = js.get(e);
    n || js.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(s);
    i || (n.set(s, i = new ti()), i.map = n, i.key = s), i.track();
  }
}
function ft(e, t, s, n, i, r) {
  const o = js.get(e);
  if (!o) {
    _s++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (Zn(), t === "clear")
    o.forEach(l);
  else {
    const a = J(e), f = a && sn(s);
    if (a && s === "length") {
      const c = Number(n);
      o.forEach((h, m) => {
        (m === "length" || m === bs || !je(m) && m >= c) && l(h);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), f && l(o.get(bs)), t) {
        case "add":
          a ? f && l(o.get("length")) : (l(o.get(Ot)), Kt(e) && l(o.get($n)));
          break;
        case "delete":
          a || (l(o.get(Ot)), Kt(e) && l(o.get($n)));
          break;
        case "set":
          Kt(e) && l(o.get(Ot));
          break;
      }
  }
  Qn();
}
function Qo(e, t) {
  const s = js.get(e);
  return s && s.get(t);
}
function Ft(e) {
  const t = /* @__PURE__ */ le(e);
  return t === e ? t : (Se(t, "iterate", bs), /* @__PURE__ */ De(e) ? t : t.map(qe));
}
function on(e) {
  return Se(e = /* @__PURE__ */ le(e), "iterate", bs), e;
}
function Qe(e, t) {
  return /* @__PURE__ */ gt(e) ? Gt(/* @__PURE__ */ ht(e) ? qe(t) : t) : qe(t);
}
const el = {
  __proto__: null,
  [Symbol.iterator]() {
    return wn(this, Symbol.iterator, (e) => Qe(this, e));
  },
  concat(...e) {
    return Ft(this).concat(
      ...e.map((t) => J(t) ? Ft(t) : t)
    );
  },
  entries() {
    return wn(this, "entries", (e) => (e[1] = Qe(this, e[1]), e));
  },
  every(e, t) {
    return ot(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ot(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => Qe(this, n)),
      arguments
    );
  },
  find(e, t) {
    return ot(
      this,
      "find",
      e,
      t,
      (s) => Qe(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return ot(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ot(
      this,
      "findLast",
      e,
      t,
      (s) => Qe(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return ot(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ot(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Sn(this, "includes", e);
  },
  indexOf(...e) {
    return Sn(this, "indexOf", e);
  },
  join(e) {
    return Ft(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Sn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ot(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return es(this, "pop");
  },
  push(...e) {
    return es(this, "push", e);
  },
  reduce(e, ...t) {
    return _i(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return _i(this, "reduceRight", e, t);
  },
  shift() {
    return es(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ot(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return es(this, "splice", e);
  },
  toReversed() {
    return Ft(this).toReversed();
  },
  toSorted(e) {
    return Ft(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ft(this).toSpliced(...e);
  },
  unshift(...e) {
    return es(this, "unshift", e);
  },
  values() {
    return wn(this, "values", (e) => Qe(this, e));
  }
};
function wn(e, t, s) {
  const n = on(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ De(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = s(r.value)), r;
  }), i;
}
const tl = Array.prototype;
function ot(e, t, s, n, i, r) {
  const o = on(e), l = o !== e && !/* @__PURE__ */ De(e), a = o[t];
  if (a !== tl[t]) {
    const h = a.apply(e, r);
    return l ? qe(h) : h;
  }
  let f = s;
  o !== e && (l ? f = function(h, m) {
    return s.call(this, Qe(e, h), m, e);
  } : s.length > 2 && (f = function(h, m) {
    return s.call(this, h, m, e);
  }));
  const c = a.call(o, f, n);
  return l && i ? i(c) : c;
}
function _i(e, t, s, n) {
  const i = on(e), r = i !== e && !/* @__PURE__ */ De(e);
  let o = s, l = !1;
  i !== e && (r ? (l = n.length === 0, o = function(f, c, h) {
    return l && (l = !1, f = Qe(e, f)), s.call(this, f, Qe(e, c), h, e);
  }) : s.length > 3 && (o = function(f, c, h) {
    return s.call(this, f, c, h, e);
  }));
  const a = i[t](o, ...n);
  return l ? Qe(e, a) : a;
}
function Sn(e, t, s) {
  const n = /* @__PURE__ */ le(e);
  Se(n, "iterate", bs);
  const i = n[t](...s);
  return (i === -1 || i === !1) && /* @__PURE__ */ an(s[0]) ? (s[0] = /* @__PURE__ */ le(s[0]), n[t](...s)) : i;
}
function es(e, t, s = []) {
  nt(), Zn();
  const n = (/* @__PURE__ */ le(e))[t].apply(e, s);
  return Qn(), it(), n;
}
const sl = /* @__PURE__ */ Jn("__proto__,__v_isRef,__isVue"), Lr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(je)
);
function nl(e) {
  je(e) || (e = String(e));
  const t = /* @__PURE__ */ le(this);
  return Se(t, "has", e), t.hasOwnProperty(e);
}
class $r {
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
      return n === (i ? r ? hl : Fr : r ? Nr : Dr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = J(t);
    if (!i) {
      let a;
      if (o && (a = el[s]))
        return a;
      if (s === "hasOwnProperty")
        return nl;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ve(t) ? t : n
    );
    if ((je(s) ? Lr.has(s) : sl(s)) || (i || Se(t, "get", s), r))
      return l;
    if (/* @__PURE__ */ ve(l)) {
      const a = o && sn(s) ? l : l.value;
      return i && ce(a) ? /* @__PURE__ */ Dn(a) : a;
    }
    return ce(l) ? i ? /* @__PURE__ */ Dn(l) : /* @__PURE__ */ ln(l) : l;
  }
}
class Or extends $r {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, i) {
    let r = t[s];
    const o = J(t) && sn(s);
    if (!this._isShallow) {
      const f = /* @__PURE__ */ gt(r);
      if (!/* @__PURE__ */ De(n) && !/* @__PURE__ */ gt(n) && (r = /* @__PURE__ */ le(r), n = /* @__PURE__ */ le(n)), !o && /* @__PURE__ */ ve(r) && !/* @__PURE__ */ ve(n))
        return f || (r.value = n), !0;
    }
    const l = o ? Number(s) < t.length : ae(t, s), a = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ ve(t) ? t : i
    );
    return t === /* @__PURE__ */ le(i) && a && (l ? tt(n, r) && ft(t, "set", s, n) : ft(t, "add", s, n)), a;
  }
  deleteProperty(t, s) {
    const n = ae(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && ft(t, "delete", s, void 0), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!je(s) || !Lr.has(s)) && Se(t, "has", s), n;
  }
  ownKeys(t) {
    return Se(
      t,
      "iterate",
      J(t) ? "length" : Ot
    ), Reflect.ownKeys(t);
  }
}
class il extends $r {
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
const rl = /* @__PURE__ */ new Or(), ol = /* @__PURE__ */ new il(), ll = /* @__PURE__ */ new Or(!0);
const On = (e) => e, Ms = (e) => Reflect.getPrototypeOf(e);
function al(e, t, s) {
  return function(...n) {
    const i = this.__v_raw, r = /* @__PURE__ */ le(i), o = Kt(r), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, f = i[e](...n), c = s ? On : t ? Gt : qe;
    return !t && Se(
      r,
      "iterate",
      a ? $n : Ot
    ), xe(
      // inheriting all iterator properties
      Object.create(f),
      {
        // iterator protocol
        next() {
          const { value: h, done: m } = f.next();
          return m ? { value: h, done: m } : {
            value: l ? [c(h[0]), c(h[1])] : c(h),
            done: m
          };
        }
      }
    );
  };
}
function Ps(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function cl(e, t) {
  const s = {
    get(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ le(r), l = /* @__PURE__ */ le(i);
      e || (tt(i, l) && Se(o, "get", i), Se(o, "get", l));
      const { has: a } = Ms(o), f = t ? On : e ? Gt : qe;
      if (a.call(o, i))
        return f(r.get(i));
      if (a.call(o, l))
        return f(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Se(/* @__PURE__ */ le(i), "iterate", Ot), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ le(r), l = /* @__PURE__ */ le(i);
      return e || (tt(i, l) && Se(o, "has", i), Se(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, a = /* @__PURE__ */ le(l), f = t ? On : e ? Gt : qe;
      return !e && Se(a, "iterate", Ot), l.forEach((c, h) => i.call(r, f(c), f(h), o));
    }
  };
  return xe(
    s,
    e ? {
      add: Ps("add"),
      set: Ps("set"),
      delete: Ps("delete"),
      clear: Ps("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ le(this), o = Ms(r), l = /* @__PURE__ */ le(i), a = !t && !/* @__PURE__ */ De(i) && !/* @__PURE__ */ gt(i) ? l : i;
        return o.has.call(r, a) || tt(i, a) && o.has.call(r, i) || tt(l, a) && o.has.call(r, l) || (r.add(a), ft(r, "add", a, a)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ De(r) && !/* @__PURE__ */ gt(r) && (r = /* @__PURE__ */ le(r));
        const o = /* @__PURE__ */ le(this), { has: l, get: a } = Ms(o);
        let f = l.call(o, i);
        f || (i = /* @__PURE__ */ le(i), f = l.call(o, i));
        const c = a.call(o, i);
        return o.set(i, r), f ? tt(r, c) && ft(o, "set", i, r) : ft(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ le(this), { has: o, get: l } = Ms(r);
        let a = o.call(r, i);
        a || (i = /* @__PURE__ */ le(i), a = o.call(r, i)), l && l.call(r, i);
        const f = r.delete(i);
        return a && ft(r, "delete", i, void 0), f;
      },
      clear() {
        const i = /* @__PURE__ */ le(this), r = i.size !== 0, o = i.clear();
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
    s[i] = al(i, e, t);
  }), s;
}
function si(e, t) {
  const s = cl(e, t);
  return (n, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    ae(s, i) && i in n ? s : n,
    i,
    r
  );
}
const ul = {
  get: /* @__PURE__ */ si(!1, !1)
}, fl = {
  get: /* @__PURE__ */ si(!1, !0)
}, dl = {
  get: /* @__PURE__ */ si(!0, !1)
};
const Dr = /* @__PURE__ */ new WeakMap(), Nr = /* @__PURE__ */ new WeakMap(), Fr = /* @__PURE__ */ new WeakMap(), hl = /* @__PURE__ */ new WeakMap();
function pl(e) {
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
function ln(e) {
  return /* @__PURE__ */ gt(e) ? e : ni(
    e,
    !1,
    rl,
    ul,
    Dr
  );
}
// @__NO_SIDE_EFFECTS__
function gl(e) {
  return ni(
    e,
    !1,
    ll,
    fl,
    Nr
  );
}
// @__NO_SIDE_EFFECTS__
function Dn(e) {
  return ni(
    e,
    !0,
    ol,
    dl,
    Fr
  );
}
function ni(e, t, s, n, i) {
  if (!ce(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const o = pl(Uo(e));
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
  return /* @__PURE__ */ gt(e) ? /* @__PURE__ */ ht(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function gt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function De(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function an(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function le(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ le(t) : e;
}
function ii(e) {
  return !ae(e, "__v_skip") && Object.isExtensible(e) && yr(e, "__v_skip", !0), e;
}
const qe = (e) => ce(e) ? /* @__PURE__ */ ln(e) : e, Gt = (e) => ce(e) ? /* @__PURE__ */ Dn(e) : e;
// @__NO_SIDE_EFFECTS__
function ve(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  return ml(e, !1);
}
function ml(e, t) {
  return /* @__PURE__ */ ve(e) ? e : new vl(e, t);
}
class vl {
  constructor(t, s) {
    this.dep = new ti(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ le(t), this._value = s ? t : qe(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ De(t) || /* @__PURE__ */ gt(t);
    t = n ? t : /* @__PURE__ */ le(t), tt(t, s) && (this._rawValue = t, this._value = n ? t : qe(t), this.dep.trigger());
  }
}
function w(e) {
  return /* @__PURE__ */ ve(e) ? e.value : e;
}
const yl = {
  get: (e, t, s) => t === "__v_raw" ? e : w(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t];
    return /* @__PURE__ */ ve(i) && !/* @__PURE__ */ ve(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function Ur(e) {
  return /* @__PURE__ */ ht(e) ? e : new Proxy(e, yl);
}
// @__NO_SIDE_EFFECTS__
function _l(e) {
  const t = J(e) ? new Array(e.length) : {};
  for (const s in e)
    t[s] = xl(e, s);
  return t;
}
class bl {
  constructor(t, s, n) {
    this._object = t, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = je(s) ? s : String(s), this._raw = /* @__PURE__ */ le(t);
    let i = !0, r = t;
    if (!J(t) || je(this._key) || !sn(this._key))
      do
        i = !/* @__PURE__ */ an(r) || /* @__PURE__ */ De(r);
      while (i && (r = r.__v_raw));
    this._shallow = i;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = w(t)), this._value = t === void 0 ? this._defaultValue : t;
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
    return Qo(this._raw, this._key);
  }
}
function xl(e, t, s) {
  return new bl(e, t, s);
}
class wl {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new ti(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = _s - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    he !== this)
      return Er(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Mr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Sl(e, t, s = !1) {
  let n, i;
  return Q(e) ? n = e : (n = e.get, i = e.set), new wl(n, i, s);
}
const Rs = {}, Bs = /* @__PURE__ */ new WeakMap();
let Pt;
function Cl(e, t = !1, s = Pt) {
  if (s) {
    let n = Bs.get(s);
    n || Bs.set(s, n = []), n.push(e);
  }
}
function Il(e, t, s = de) {
  const { immediate: n, deep: i, once: r, scheduler: o, augmentJob: l, call: a } = s, f = (N) => i ? N : /* @__PURE__ */ De(N) || i === !1 || i === 0 ? dt(N, 1) : dt(N);
  let c, h, m, v, I = !1, T = !1;
  if (/* @__PURE__ */ ve(e) ? (h = () => e.value, I = /* @__PURE__ */ De(e)) : /* @__PURE__ */ ht(e) ? (h = () => f(e), I = !0) : J(e) ? (T = !0, I = e.some((N) => /* @__PURE__ */ ht(N) || /* @__PURE__ */ De(N)), h = () => e.map((N) => {
    if (/* @__PURE__ */ ve(N))
      return N.value;
    if (/* @__PURE__ */ ht(N))
      return f(N);
    if (Q(N))
      return a ? a(N, 2) : N();
  })) : Q(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (m) {
      nt();
      try {
        m();
      } finally {
        it();
      }
    }
    const N = Pt;
    Pt = c;
    try {
      return a ? a(e, 3, [v]) : e(v);
    } finally {
      Pt = N;
    }
  } : h = st, t && i) {
    const N = h, q = i === !0 ? 1 / 0 : i;
    h = () => dt(N(), q);
  }
  const D = Cr(), A = () => {
    c.stop(), D && D.active && Gn(D.effects, c);
  };
  if (r && t) {
    const N = t;
    t = (...q) => {
      const Z = N(...q);
      return A(), Z;
    };
  }
  let y = T ? new Array(e.length).fill(Rs) : Rs;
  const V = (N) => {
    if (!(!(c.flags & 1) || !c.dirty && !N))
      if (t) {
        const q = c.run();
        if (N || i || I || (T ? q.some((Z, M) => tt(Z, y[M])) : tt(q, y))) {
          m && m();
          const Z = Pt;
          Pt = c;
          try {
            const M = [
              q,
              // pass undefined as the old value when it's changed for the first time
              y === Rs ? void 0 : T && y[0] === Rs ? [] : y,
              v
            ];
            y = q, a ? a(t, 3, M) : (
              // @ts-expect-error
              t(...M)
            );
          } finally {
            Pt = Z;
          }
        }
      } else
        c.run();
  };
  return l && l(V), c = new Ir(h), c.scheduler = o ? () => o(V, !1) : V, v = (N) => Cl(N, !1, c), m = c.onStop = () => {
    const N = Bs.get(c);
    if (N) {
      if (a)
        a(N, 4);
      else
        for (const q of N) q();
      Bs.delete(c);
    }
  }, t ? n ? V(!0) : y = c.run() : o ? o(V.bind(null, !0), !0) : c.run(), A.pause = c.pause.bind(c), A.resume = c.resume.bind(c), A.stop = A, A;
}
function dt(e, t = 1 / 0, s) {
  if (t <= 0 || !ce(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ ve(e))
    dt(e.value, t, s);
  else if (J(e))
    for (let n = 0; n < e.length; n++)
      dt(e[n], t, s);
  else if (hr(e) || Kt(e))
    e.forEach((n) => {
      dt(n, t, s);
    });
  else if (mr(e)) {
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
function Es(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    cn(i, t, s);
  }
}
function Be(e, t, s, n) {
  if (Q(e)) {
    const i = Es(e, t, s, n);
    return i && pr(i) && i.catch((r) => {
      cn(r, t, s);
    }), i;
  }
  if (J(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(Be(e[r], t, s, n));
    return i;
  }
}
function cn(e, t, s, n = !0) {
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
      nt(), Es(r, null, 10, [
        e,
        a,
        f
      ]), it();
      return;
    }
  }
  Tl(e, s, i, n, o);
}
function Tl(e, t, s, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Ee = [];
let Ze = -1;
const zt = [];
let wt = null, Vt = 0;
const Hr = /* @__PURE__ */ Promise.resolve();
let Ws = null;
function Le(e) {
  const t = Ws || Hr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function El(e) {
  let t = Ze + 1, s = Ee.length;
  for (; t < s; ) {
    const n = t + s >>> 1, i = Ee[n], r = xs(i);
    r < e || r === e && i.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function ri(e) {
  if (!(e.flags & 1)) {
    const t = xs(e), s = Ee[Ee.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= xs(s) ? Ee.push(e) : Ee.splice(El(t), 0, e), e.flags |= 1, Vr();
  }
}
function Vr() {
  Ws || (Ws = Hr.then(Br));
}
function kl(e) {
  J(e) ? zt.push(...e) : wt && e.id === -1 ? wt.splice(Vt + 1, 0, e) : e.flags & 1 || (zt.push(e), e.flags |= 1), Vr();
}
function bi(e, t, s = Ze + 1) {
  for (; s < Ee.length; s++) {
    const n = Ee[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      Ee.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function jr(e) {
  if (zt.length) {
    const t = [...new Set(zt)].sort(
      (s, n) => xs(s) - xs(n)
    );
    if (zt.length = 0, wt) {
      wt.push(...t);
      return;
    }
    for (wt = t, Vt = 0; Vt < wt.length; Vt++) {
      const s = wt[Vt];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    wt = null, Vt = 0;
  }
}
const xs = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Br(e) {
  try {
    for (Ze = 0; Ze < Ee.length; Ze++) {
      const t = Ee[Ze];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Es(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ze < Ee.length; Ze++) {
      const t = Ee[Ze];
      t && (t.flags &= -2);
    }
    Ze = -1, Ee.length = 0, jr(), Ws = null, (Ee.length || zt.length) && Br();
  }
}
let Ve = null, Wr = null;
function Ks(e) {
  const t = Ve;
  return Ve = e, Wr = e && e.type.__scopeId || null, t;
}
function Kr(e, t = Ve, s) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Js(-1);
    const r = Ks(t);
    let o;
    try {
      o = e(...i);
    } finally {
      Ks(r), n._d && Js(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function _t(e, t) {
  if (Ve === null)
    return e;
  const s = gn(Ve), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, a = de] = t[i];
    r && (Q(r) && (r = {
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
function Et(e, t, s, n) {
  const i = e.dirs, r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    r && (l.oldValue = r[o].value);
    let a = l.dir[n];
    a && (nt(), Be(a, s, 8, [
      e.el,
      l,
      e,
      t
    ]), it());
  }
}
function Al(e, t) {
  if (Ae) {
    let s = Ae.provides;
    const n = Ae.parent && Ae.parent.provides;
    n === s && (s = Ae.provides = Object.create(n)), s[e] = t;
  }
}
function us(e, t, s = !1) {
  const n = ui();
  if (n || Dt) {
    let i = Dt ? Dt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return s && Q(t) ? t.call(n && n.proxy) : t;
  }
}
function Ml() {
  return !!(ui() || Dt);
}
const Pl = /* @__PURE__ */ Symbol.for("v-scx"), Rl = () => us(Pl);
function $e(e, t, s) {
  return zr(e, t, s);
}
function zr(e, t, s = de) {
  const { immediate: n, deep: i, flush: r, once: o } = s, l = xe({}, s), a = t && n || !t && r !== "post";
  let f;
  if (Cs) {
    if (r === "sync") {
      const v = Rl();
      f = v.__watcherHandles || (v.__watcherHandles = []);
    } else if (!a) {
      const v = () => {
      };
      return v.stop = st, v.resume = st, v.pause = st, v;
    }
  }
  const c = Ae;
  l.call = (v, I, T) => Be(v, c, I, T);
  let h = !1;
  r === "post" ? l.scheduler = (v) => {
    Ie(v, c && c.suspense);
  } : r !== "sync" && (h = !0, l.scheduler = (v, I) => {
    I ? v() : ri(v);
  }), l.augmentJob = (v) => {
    t && (v.flags |= 4), h && (v.flags |= 2, c && (v.id = c.uid, v.i = c));
  };
  const m = Il(e, t, l);
  return Cs && (f ? f.push(m) : a && m()), m;
}
function Ll(e, t, s) {
  const n = this.proxy, i = me(e) ? e.includes(".") ? qr(n, e) : () => n[e] : e.bind(n, n);
  let r;
  Q(t) ? r = t : (r = t.handler, s = t);
  const o = ks(this), l = zr(i, r.bind(n), s);
  return o(), l;
}
function qr(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < s.length && n; i++)
      n = n[s[i]];
    return n;
  };
}
const bt = /* @__PURE__ */ new WeakMap(), Jr = /* @__PURE__ */ Symbol("_vte"), Gr = (e) => e.__isTeleport, Rt = (e) => e && (e.disabled || e.disabled === ""), $l = (e) => e && (e.defer || e.defer === ""), xi = (e) => typeof SVGElement < "u" && e instanceof SVGElement, wi = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Nn = (e, t) => {
  const s = e && e.to;
  return me(s) ? t ? t(s) : null : s;
}, Ol = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, s, n, i, r, o, l, a, f) {
    const {
      mc: c,
      pc: h,
      pbc: m,
      o: { insert: v, querySelector: I, createText: T, createComment: D, parentNode: A }
    } = f, y = Rt(t.props);
    let { dynamicChildren: V } = t;
    const N = (M, R, _) => {
      M.shapeFlag & 16 && c(
        M.children,
        R,
        _,
        i,
        r,
        o,
        l,
        a
      );
    }, q = (M = t) => {
      const R = Rt(M.props), _ = M.target = Nn(M.props, I), W = Fn(_, M, T, v);
      _ && (o !== "svg" && xi(_) ? o = "svg" : o !== "mathml" && wi(_) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(_), R || (N(M, _, W), is(M, !1)));
    }, Z = (M) => {
      const R = () => {
        if (bt.get(M) === R) {
          if (bt.delete(M), Rt(M.props)) {
            const _ = A(M.el) || s;
            N(M, _, M.anchor), is(M, !0);
          }
          q(M);
        }
      };
      bt.set(M, R), Ie(R, r);
    };
    if (e == null) {
      const M = t.el = T(""), R = t.anchor = T("");
      if (v(M, s, n), v(R, s, n), $l(t.props) || r && r.pendingBranch) {
        Z(t);
        return;
      }
      y && (N(t, s, R), is(t, !0)), q();
    } else {
      t.el = e.el;
      const M = t.anchor = e.anchor, R = bt.get(e);
      if (R) {
        R.flags |= 8, bt.delete(e), Z(t);
        return;
      }
      t.targetStart = e.targetStart;
      const _ = t.target = e.target, W = t.targetAnchor = e.targetAnchor, X = Rt(e.props), C = X ? s : _, B = X ? M : W;
      if (o === "svg" || xi(_) ? o = "svg" : (o === "mathml" || wi(_)) && (o = "mathml"), V ? (m(
        e.dynamicChildren,
        V,
        C,
        i,
        r,
        o,
        l
      ), ci(e, t, !0)) : a || h(
        e,
        t,
        C,
        B,
        i,
        r,
        o,
        l,
        !1
      ), y)
        X ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ls(
          t,
          s,
          M,
          f,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const F = Nn(t.props, I);
        F && (t.target = F, Ls(
          t,
          F,
          null,
          f,
          0
        ));
      } else X && Ls(
        t,
        _,
        W,
        f,
        1
      );
      is(t, y);
    }
  },
  remove(e, t, s, { um: n, o: { remove: i } }, r) {
    const {
      shapeFlag: o,
      children: l,
      anchor: a,
      targetStart: f,
      targetAnchor: c,
      target: h,
      props: m
    } = e, v = Rt(m), I = r || !v, T = bt.get(e);
    if (T && (T.flags |= 8, bt.delete(e)), h && (i(f), i(c)), r && i(a), !T && (v || h) && o & 16)
      for (let D = 0; D < l.length; D++) {
        const A = l[D];
        n(
          A,
          t,
          s,
          I,
          !!A.dynamicChildren
        );
      }
  },
  move: Ls,
  hydrate: Dl
};
function Ls(e, t, s, { o: { insert: n }, m: i }, r = 2) {
  r === 0 && n(e.targetAnchor, t, s);
  const { el: o, anchor: l, shapeFlag: a, children: f, props: c } = e, h = r === 2;
  if (h && n(o, t, s), !bt.has(e) && (!h || Rt(c)) && a & 16)
    for (let m = 0; m < f.length; m++)
      i(
        f[m],
        t,
        s,
        2
      );
  h && n(l, t, s);
}
function Dl(e, t, s, n, i, r, {
  o: { nextSibling: o, parentNode: l, querySelector: a, insert: f, createText: c }
}, h) {
  function m(D, A) {
    let y = A;
    for (; y; ) {
      if (y && y.nodeType === 8) {
        if (y.data === "teleport start anchor")
          t.targetStart = y;
        else if (y.data === "teleport anchor") {
          t.targetAnchor = y, D._lpa = t.targetAnchor && o(t.targetAnchor);
          break;
        }
      }
      y = o(y);
    }
  }
  function v(D, A) {
    A.anchor = h(
      o(D),
      A,
      l(D),
      s,
      n,
      i,
      r
    );
  }
  const I = t.target = Nn(
    t.props,
    a
  ), T = Rt(t.props);
  if (I) {
    const D = I._lpa || I.firstChild;
    t.shapeFlag & 16 && (T ? (v(e, t), m(I, D), t.targetAnchor || Fn(
      I,
      t,
      c,
      f,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      l(e) === I ? e : null
    )) : (t.anchor = o(e), m(I, D), t.targetAnchor || Fn(I, t, c, f), h(
      D && o(D),
      t,
      I,
      s,
      n,
      i,
      r
    ))), is(t, T);
  } else T && t.shapeFlag & 16 && (v(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const Nl = Ol;
function is(e, t) {
  const s = e.ctx;
  if (s && s.ut) {
    let n, i;
    for (t ? (n = e.el, i = e.anchor) : (n = e.targetStart, i = e.targetAnchor); n && n !== i; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", s.uid), n = n.nextSibling;
    s.ut();
  }
}
function Fn(e, t, s, n, i = null) {
  const r = t.targetStart = s(""), o = t.targetAnchor = s("");
  return r[Jr] = o, e && (n(r, e, i), n(o, e, i)), o;
}
const Ue = /* @__PURE__ */ Symbol("_leaveCb"), ts = /* @__PURE__ */ Symbol("_enterCb");
function Fl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return dn(() => {
    e.isMounted = !0;
  }), oi(() => {
    e.isUnmounting = !0;
  }), e;
}
const Fe = [Function, Array], Yr = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Fe,
  onEnter: Fe,
  onAfterEnter: Fe,
  onEnterCancelled: Fe,
  // leave
  onBeforeLeave: Fe,
  onLeave: Fe,
  onAfterLeave: Fe,
  onLeaveCancelled: Fe,
  // appear
  onBeforeAppear: Fe,
  onAppear: Fe,
  onAfterAppear: Fe,
  onAppearCancelled: Fe
}, Xr = (e) => {
  const t = e.subTree;
  return t.component ? Xr(t.component) : t;
}, Ul = {
  name: "BaseTransition",
  props: Yr,
  setup(e, { slots: t }) {
    const s = ui(), n = Fl();
    return () => {
      const i = t.default && eo(t.default(), !0), r = i && i.length ? Zr(i) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        s.subTree ? Me() : void 0
      );
      if (!r)
        return;
      const o = /* @__PURE__ */ le(e), { mode: l } = o;
      if (n.isLeaving)
        return Cn(r);
      const a = Si(r);
      if (!a)
        return Cn(r);
      let f = Un(
        a,
        o,
        n,
        s,
        // #11061, ensure enterHooks is fresh after clone
        (h) => f = h
      );
      a.type !== ke && ws(a, f);
      let c = s.subTree && Si(s.subTree);
      if (c && c.type !== ke && !Lt(c, a) && Xr(s).type !== ke) {
        let h = Un(
          c,
          o,
          n,
          s
        );
        if (ws(c, h), l === "out-in" && a.type !== ke)
          return n.isLeaving = !0, h.afterLeave = () => {
            n.isLeaving = !1, s.job.flags & 8 || s.update(), delete h.afterLeave, c = void 0;
          }, Cn(r);
        l === "in-out" && a.type !== ke ? h.delayLeave = (m, v, I) => {
          const T = Qr(
            n,
            c
          );
          T[String(c.key)] = c, m[Ue] = () => {
            v(), m[Ue] = void 0, delete f.delayedLeave, c = void 0;
          }, f.delayedLeave = () => {
            I(), delete f.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return r;
    };
  }
};
function Zr(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const s of e)
      if (s.type !== ke) {
        t = s;
        break;
      }
  }
  return t;
}
const Hl = Ul;
function Qr(e, t) {
  const { leavingVNodes: s } = e;
  let n = s.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), s.set(t.type, n)), n;
}
function Un(e, t, s, n, i) {
  const {
    appear: r,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: f,
    onAfterEnter: c,
    onEnterCancelled: h,
    onBeforeLeave: m,
    onLeave: v,
    onAfterLeave: I,
    onLeaveCancelled: T,
    onBeforeAppear: D,
    onAppear: A,
    onAfterAppear: y,
    onAppearCancelled: V
  } = t, N = String(e.key), q = Qr(s, e), Z = (_, W) => {
    _ && Be(
      _,
      n,
      9,
      W
    );
  }, M = (_, W) => {
    const X = W[1];
    Z(_, W), J(_) ? _.every((C) => C.length <= 1) && X() : _.length <= 1 && X();
  }, R = {
    mode: o,
    persisted: l,
    beforeEnter(_) {
      let W = a;
      if (!s.isMounted)
        if (r)
          W = D || a;
        else
          return;
      _[Ue] && _[Ue](
        !0
        /* cancelled */
      );
      const X = q[N];
      X && Lt(e, X) && X.el[Ue] && X.el[Ue](), Z(W, [_]);
    },
    enter(_) {
      if (q[N] === e) return;
      let W = f, X = c, C = h;
      if (!s.isMounted)
        if (r)
          W = A || f, X = y || c, C = V || h;
        else
          return;
      let B = !1;
      _[ts] = (ie) => {
        B || (B = !0, ie ? Z(C, [_]) : Z(X, [_]), R.delayedLeave && R.delayedLeave(), _[ts] = void 0);
      };
      const F = _[ts].bind(null, !1);
      W ? M(W, [_, F]) : F();
    },
    leave(_, W) {
      const X = String(e.key);
      if (_[ts] && _[ts](
        !0
        /* cancelled */
      ), s.isUnmounting)
        return W();
      Z(m, [_]);
      let C = !1;
      _[Ue] = (F) => {
        C || (C = !0, W(), F ? Z(T, [_]) : Z(I, [_]), _[Ue] = void 0, q[X] === e && delete q[X]);
      };
      const B = _[Ue].bind(null, !1);
      q[X] = e, v ? M(v, [_, B]) : B();
    },
    clone(_) {
      const W = Un(
        _,
        t,
        s,
        n,
        i
      );
      return i && i(W), W;
    }
  };
  return R;
}
function Cn(e) {
  if (un(e))
    return e = St(e), e.children = null, e;
}
function Si(e) {
  if (!un(e))
    return Gr(e.type) && e.children ? Zr(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: s } = e;
  if (s) {
    if (t & 16)
      return s[0];
    if (t & 32 && Q(s.default))
      return s.default();
  }
}
function ws(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ws(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function eo(e, t = !1, s) {
  let n = [], i = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const l = s == null ? o.key : String(s) + String(o.key != null ? o.key : r);
    o.type === re ? (o.patchFlag & 128 && i++, n = n.concat(
      eo(o.children, t, l)
    )) : (t || o.type !== ke) && n.push(l != null ? St(o, { key: l }) : o);
  }
  if (i > 1)
    for (let r = 0; r < n.length; r++)
      n[r].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function It(e, t) {
  return Q(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    xe({ name: e.name }, t, { setup: e })
  ) : e;
}
function to(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ci(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const zs = /* @__PURE__ */ new WeakMap();
function fs(e, t, s, n, i = !1) {
  if (J(e)) {
    e.forEach(
      (T, D) => fs(
        T,
        t && (J(t) ? t[D] : t),
        s,
        n,
        i
      )
    );
    return;
  }
  if (ds(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && fs(e, t, s, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? gn(n.component) : n.el, o = i ? null : r, { i: l, r: a } = e, f = t && t.r, c = l.refs === de ? l.refs = {} : l.refs, h = l.setupState, m = /* @__PURE__ */ le(h), v = h === de ? dr : (T) => Ci(c, T) ? !1 : ae(m, T), I = (T, D) => !(D && Ci(c, D));
  if (f != null && f !== a) {
    if (Ii(t), me(f))
      c[f] = null, v(f) && (h[f] = null);
    else if (/* @__PURE__ */ ve(f)) {
      const T = t;
      I(f, T.k) && (f.value = null), T.k && (c[T.k] = null);
    }
  }
  if (Q(a)) {
    nt();
    try {
      Es(a, l, 12, [o, c]);
    } finally {
      it();
    }
  } else {
    const T = me(a), D = /* @__PURE__ */ ve(a);
    if (T || D) {
      const A = () => {
        if (e.f) {
          const y = T ? v(a) ? h[a] : c[a] : I() || !e.k ? a.value : c[e.k];
          if (i)
            J(y) && Gn(y, r);
          else if (J(y))
            y.includes(r) || y.push(r);
          else if (T)
            c[a] = [r], v(a) && (h[a] = c[a]);
          else {
            const V = [r];
            I(a, e.k) && (a.value = V), e.k && (c[e.k] = V);
          }
        } else T ? (c[a] = o, v(a) && (h[a] = o)) : D && (I(a, e.k) && (a.value = o), e.k && (c[e.k] = o));
      };
      if (o) {
        const y = () => {
          A(), zs.delete(e);
        };
        y.id = -1, zs.set(e, y), Ie(y, s);
      } else
        Ii(e), A();
    }
  }
}
function Ii(e) {
  const t = zs.get(e);
  t && (t.flags |= 8, zs.delete(e));
}
rn().requestIdleCallback;
rn().cancelIdleCallback;
const ds = (e) => !!e.type.__asyncLoader, un = (e) => e.type.__isKeepAlive;
function Vl(e, t) {
  so(e, "a", t);
}
function jl(e, t) {
  so(e, "da", t);
}
function so(e, t, s = Ae) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = s;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (fn(t, n, s), s) {
    let i = s.parent;
    for (; i && i.parent; )
      un(i.parent.vnode) && Bl(n, t, s, i), i = i.parent;
  }
}
function Bl(e, t, s, n) {
  const i = fn(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  no(() => {
    Gn(n[t], i);
  }, s);
}
function fn(e, t, s = Ae, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []), r = t.__weh || (t.__weh = (...o) => {
      nt();
      const l = ks(s), a = Be(t, s, e, o);
      return l(), it(), a;
    });
    return n ? i.unshift(r) : i.push(r), r;
  }
}
const mt = (e) => (t, s = Ae) => {
  (!Cs || e === "sp") && fn(e, (...n) => t(...n), s);
}, Wl = mt("bm"), dn = mt("m"), Kl = mt(
  "bu"
), zl = mt("u"), oi = mt(
  "bum"
), no = mt("um"), ql = mt(
  "sp"
), Jl = mt("rtg"), Gl = mt("rtc");
function Yl(e, t = Ae) {
  fn("ec", e, t);
}
const Xl = /* @__PURE__ */ Symbol.for("v-ndc");
function He(e, t, s, n) {
  let i;
  const r = s, o = J(e);
  if (o || me(e)) {
    const l = o && /* @__PURE__ */ ht(e);
    let a = !1, f = !1;
    l && (a = !/* @__PURE__ */ De(e), f = /* @__PURE__ */ gt(e), e = on(e)), i = new Array(e.length);
    for (let c = 0, h = e.length; c < h; c++)
      i[c] = t(
        a ? f ? Gt(qe(e[c])) : qe(e[c]) : e[c],
        c,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, r);
  } else if (ce(e))
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
const Hn = (e) => e ? So(e) ? gn(e) : Hn(e.parent) : null, hs = (
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
    $parent: (e) => Hn(e.parent),
    $root: (e) => Hn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ro(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ri(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Le.bind(e.proxy)),
    $watch: (e) => Ll.bind(e)
  })
), In = (e, t) => e !== de && !e.__isScriptSetup && ae(e, t), Zl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: i, props: r, accessCache: o, type: l, appContext: a } = e;
    if (t[0] !== "$") {
      const m = o[t];
      if (m !== void 0)
        switch (m) {
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
        if (In(n, t))
          return o[t] = 1, n[t];
        if (i !== de && ae(i, t))
          return o[t] = 2, i[t];
        if (ae(r, t))
          return o[t] = 3, r[t];
        if (s !== de && ae(s, t))
          return o[t] = 4, s[t];
        Vn && (o[t] = 0);
      }
    }
    const f = hs[t];
    let c, h;
    if (f)
      return t === "$attrs" && Se(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (c = l.__cssModules) && (c = c[t])
    )
      return c;
    if (s !== de && ae(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      h = a.config.globalProperties, ae(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: i, ctx: r } = e;
    return In(i, t) ? (i[t] = s, !0) : n !== de && ae(n, t) ? (n[t] = s, !0) : ae(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: i, props: r, type: o }
  }, l) {
    let a;
    return !!(s[l] || e !== de && l[0] !== "$" && ae(e, l) || In(t, l) || ae(r, l) || ae(n, l) || ae(hs, l) || ae(i.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : ae(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function Ti(e) {
  return J(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let Vn = !0;
function Ql(e) {
  const t = ro(e), s = e.proxy, n = e.ctx;
  Vn = !1, t.beforeCreate && Ei(t.beforeCreate, e, "bc");
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
    mounted: m,
    beforeUpdate: v,
    updated: I,
    activated: T,
    deactivated: D,
    beforeDestroy: A,
    beforeUnmount: y,
    destroyed: V,
    unmounted: N,
    render: q,
    renderTracked: Z,
    renderTriggered: M,
    errorCaptured: R,
    serverPrefetch: _,
    // public API
    expose: W,
    inheritAttrs: X,
    // assets
    components: C,
    directives: B,
    filters: F
  } = t;
  if (f && ea(f, n, null), o)
    for (const z in o) {
      const se = o[z];
      Q(se) && (n[z] = se.bind(s));
    }
  if (i) {
    const z = i.call(s, s);
    ce(z) && (e.data = /* @__PURE__ */ ln(z));
  }
  if (Vn = !0, r)
    for (const z in r) {
      const se = r[z], We = Q(se) ? se.bind(s, s) : Q(se.get) ? se.get.bind(s, s) : st, vt = !Q(se) && Q(se.set) ? se.set.bind(s) : st, rt = Pe({
        get: We,
        set: vt
      });
      Object.defineProperty(n, z, {
        enumerable: !0,
        configurable: !0,
        get: () => rt.value,
        set: (Ne) => rt.value = Ne
      });
    }
  if (l)
    for (const z in l)
      io(l[z], n, s, z);
  if (a) {
    const z = Q(a) ? a.call(s) : a;
    Reflect.ownKeys(z).forEach((se) => {
      Al(se, z[se]);
    });
  }
  c && Ei(c, e, "c");
  function ee(z, se) {
    J(se) ? se.forEach((We) => z(We.bind(s))) : se && z(se.bind(s));
  }
  if (ee(Wl, h), ee(dn, m), ee(Kl, v), ee(zl, I), ee(Vl, T), ee(jl, D), ee(Yl, R), ee(Gl, Z), ee(Jl, M), ee(oi, y), ee(no, N), ee(ql, _), J(W))
    if (W.length) {
      const z = e.exposed || (e.exposed = {});
      W.forEach((se) => {
        Object.defineProperty(z, se, {
          get: () => s[se],
          set: (We) => s[se] = We,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  q && e.render === st && (e.render = q), X != null && (e.inheritAttrs = X), C && (e.components = C), B && (e.directives = B), _ && to(e);
}
function ea(e, t, s = st) {
  J(e) && (e = jn(e));
  for (const n in e) {
    const i = e[n];
    let r;
    ce(i) ? "default" in i ? r = us(
      i.from || n,
      i.default,
      !0
    ) : r = us(i.from || n) : r = us(i), /* @__PURE__ */ ve(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[n] = r;
  }
}
function Ei(e, t, s) {
  Be(
    J(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function io(e, t, s, n) {
  let i = n.includes(".") ? qr(s, n) : () => s[n];
  if (me(e)) {
    const r = t[e];
    Q(r) && $e(i, r);
  } else if (Q(e))
    $e(i, e.bind(s));
  else if (ce(e))
    if (J(e))
      e.forEach((r) => io(r, t, s, n));
    else {
      const r = Q(e.handler) ? e.handler.bind(s) : t[e.handler];
      Q(r) && $e(i, r, e);
    }
}
function ro(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !i.length && !s && !n ? a = t : (a = {}, i.length && i.forEach(
    (f) => qs(a, f, o, !0)
  ), qs(a, t, o)), ce(t) && r.set(t, a), a;
}
function qs(e, t, s, n = !1) {
  const { mixins: i, extends: r } = t;
  r && qs(e, r, s, !0), i && i.forEach(
    (o) => qs(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const l = ta[o] || s && s[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const ta = {
  data: ki,
  props: Ai,
  emits: Ai,
  // objects
  methods: rs,
  computed: rs,
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
  components: rs,
  directives: rs,
  // watch
  watch: na,
  // provide / inject
  provide: ki,
  inject: sa
};
function ki(e, t) {
  return t ? e ? function() {
    return xe(
      Q(e) ? e.call(this, this) : e,
      Q(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function sa(e, t) {
  return rs(jn(e), jn(t));
}
function jn(e) {
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
function rs(e, t) {
  return e ? xe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ai(e, t) {
  return e ? J(e) && J(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : xe(
    /* @__PURE__ */ Object.create(null),
    Ti(e),
    Ti(t ?? {})
  ) : t;
}
function na(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = xe(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = Ce(e[n], t[n]);
  return s;
}
function oo() {
  return {
    app: null,
    config: {
      isNativeTag: dr,
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
let ia = 0;
function ra(e, t) {
  return function(n, i = null) {
    Q(n) || (n = xe({}, n)), i != null && !ce(i) && (i = null);
    const r = oo(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const f = r.app = {
      _uid: ia++,
      _component: n,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: Fa,
      get config() {
        return r.config;
      },
      set config(c) {
      },
      use(c, ...h) {
        return o.has(c) || (c && Q(c.install) ? (o.add(c), c.install(f, ...h)) : Q(c) && (o.add(c), c(f, ...h))), f;
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
      mount(c, h, m) {
        if (!a) {
          const v = f._ceVNode || ne(n, i);
          return v.appContext = r, m === !0 ? m = "svg" : m === !1 && (m = void 0), e(v, c, m), a = !0, f._container = c, c.__vue_app__ = f, gn(v.component);
        }
      },
      onUnmount(c) {
        l.push(c);
      },
      unmount() {
        a && (Be(
          l,
          f._instance,
          16
        ), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(c, h) {
        return r.provides[c] = h, f;
      },
      runWithContext(c) {
        const h = Dt;
        Dt = f;
        try {
          return c();
        } finally {
          Dt = h;
        }
      }
    };
    return f;
  };
}
let Dt = null;
const oa = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ke(t)}Modifiers`] || e[`${Ct(t)}Modifiers`];
function la(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || de;
  let i = s;
  const r = t.startsWith("update:"), o = r && oa(n, t.slice(7));
  o && (o.trim && (i = s.map((c) => me(c) ? c.trim() : c)), o.number && (i = s.map(Yn)));
  let l, a = n[l = _n(t)] || // also try camelCase event handler (#2249)
  n[l = _n(Ke(t))];
  !a && r && (a = n[l = _n(Ct(t))]), a && Be(
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
    e.emitted[l] = !0, Be(
      f,
      e,
      6,
      i
    );
  }
}
const aa = /* @__PURE__ */ new WeakMap();
function lo(e, t, s = !1) {
  const n = s ? aa : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {}, l = !1;
  if (!Q(e)) {
    const a = (f) => {
      const c = lo(f, t, !0);
      c && (l = !0, xe(o, c));
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (ce(e) && n.set(e, null), null) : (J(r) ? r.forEach((a) => o[a] = null) : xe(o, r), ce(e) && n.set(e, o), o);
}
function hn(e, t) {
  return !e || !en(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ae(e, t[0].toLowerCase() + t.slice(1)) || ae(e, Ct(t)) || ae(e, t));
}
function Mi(e) {
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
    data: m,
    setupState: v,
    ctx: I,
    inheritAttrs: T
  } = e, D = Ks(e);
  let A, y;
  try {
    if (s.shapeFlag & 4) {
      const N = i || n, q = N;
      A = et(
        f.call(
          q,
          N,
          c,
          h,
          v,
          m,
          I
        )
      ), y = l;
    } else {
      const N = t;
      A = et(
        N.length > 1 ? N(
          h,
          { attrs: l, slots: o, emit: a }
        ) : N(
          h,
          null
        )
      ), y = t.props ? l : ca(l);
    }
  } catch (N) {
    ps.length = 0, cn(N, e, 1), A = ne(ke);
  }
  let V = A;
  if (y && T !== !1) {
    const N = Object.keys(y), { shapeFlag: q } = V;
    N.length && q & 7 && (r && N.some(tn) && (y = ua(
      y,
      r
    )), V = St(V, y, !1, !0));
  }
  return s.dirs && (V = St(V, null, !1, !0), V.dirs = V.dirs ? V.dirs.concat(s.dirs) : s.dirs), s.transition && ws(V, s.transition), A = V, Ks(D), A;
}
const ca = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || en(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, ua = (e, t) => {
  const s = {};
  for (const n in e)
    (!tn(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function fa(e, t, s) {
  const { props: n, children: i, component: r } = e, { props: o, children: l, patchFlag: a } = t, f = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return n ? Pi(n, o, f) : !!o;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        const m = c[h];
        if (ao(o, n, m) && !hn(f, m))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? Pi(n, o, f) : !0 : !!o;
  return !1;
}
function Pi(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const r = n[i];
    if (ao(t, e, r) && !hn(s, r))
      return !0;
  }
  return !1;
}
function ao(e, t, s) {
  const n = e[s], i = t[s];
  return s === "style" && ce(n) && ce(i) ? !Xn(n, i) : n !== i;
}
function da({ vnode: e, parent: t, suspense: s }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  s && s.activeBranch === e && (s.vnode.el = n);
}
const co = {}, uo = () => Object.create(co), fo = (e) => Object.getPrototypeOf(e) === co;
function ha(e, t, s, n = !1) {
  const i = {}, r = uo();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ho(e, t, i, r);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  s ? e.props = n ? i : /* @__PURE__ */ gl(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function pa(e, t, s, n) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ le(i), [a] = e.propsOptions;
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
        let m = c[h];
        if (hn(e.emitsOptions, m))
          continue;
        const v = t[m];
        if (a)
          if (ae(r, m))
            v !== r[m] && (r[m] = v, f = !0);
          else {
            const I = Ke(m);
            i[I] = Bn(
              a,
              l,
              I,
              v,
              e,
              !1
            );
          }
        else
          v !== r[m] && (r[m] = v, f = !0);
      }
    }
  } else {
    ho(e, t, i, r) && (f = !0);
    let c;
    for (const h in l)
      (!t || // for camelCase
      !ae(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Ct(h)) === h || !ae(t, c))) && (a ? s && // for camelCase
      (s[h] !== void 0 || // for kebab-case
      s[c] !== void 0) && (i[h] = Bn(
        a,
        l,
        h,
        void 0,
        e,
        !0
      )) : delete i[h]);
    if (r !== l)
      for (const h in r)
        (!t || !ae(t, h)) && (delete r[h], f = !0);
  }
  f && ft(e.attrs, "set", "");
}
function ho(e, t, s, n) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (ls(a))
        continue;
      const f = t[a];
      let c;
      i && ae(i, c = Ke(a)) ? !r || !r.includes(c) ? s[c] = f : (l || (l = {}))[c] = f : hn(e.emitsOptions, a) || (!(a in n) || f !== n[a]) && (n[a] = f, o = !0);
    }
  if (r) {
    const a = /* @__PURE__ */ le(s), f = l || de;
    for (let c = 0; c < r.length; c++) {
      const h = r[c];
      s[h] = Bn(
        i,
        a,
        h,
        f[h],
        e,
        !ae(f, h)
      );
    }
  }
  return o;
}
function Bn(e, t, s, n, i, r) {
  const o = e[s];
  if (o != null) {
    const l = ae(o, "default");
    if (l && n === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && Q(a)) {
        const { propsDefaults: f } = i;
        if (s in f)
          n = f[s];
        else {
          const c = ks(i);
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
    ] && (n === "" || n === Ct(s)) && (n = !0));
  }
  return n;
}
const ga = /* @__PURE__ */ new WeakMap();
function po(e, t, s = !1) {
  const n = s ? ga : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, l = [];
  let a = !1;
  if (!Q(e)) {
    const c = (h) => {
      a = !0;
      const [m, v] = po(h, t, !0);
      xe(o, m), v && l.push(...v);
    };
    !s && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!r && !a)
    return ce(e) && n.set(e, Wt), Wt;
  if (J(r))
    for (let c = 0; c < r.length; c++) {
      const h = Ke(r[c]);
      Ri(h) && (o[h] = de);
    }
  else if (r)
    for (const c in r) {
      const h = Ke(c);
      if (Ri(h)) {
        const m = r[c], v = o[h] = J(m) || Q(m) ? { type: m } : xe({}, m), I = v.type;
        let T = !1, D = !0;
        if (J(I))
          for (let A = 0; A < I.length; ++A) {
            const y = I[A], V = Q(y) && y.name;
            if (V === "Boolean") {
              T = !0;
              break;
            } else V === "String" && (D = !1);
          }
        else
          T = Q(I) && I.name === "Boolean";
        v[
          0
          /* shouldCast */
        ] = T, v[
          1
          /* shouldCastTrue */
        ] = D, (T || ae(v, "default")) && l.push(h);
      }
    }
  const f = [o, l];
  return ce(e) && n.set(e, f), f;
}
function Ri(e) {
  return e[0] !== "$" && !ls(e);
}
const li = (e) => e === "_" || e === "_ctx" || e === "$stable", ai = (e) => J(e) ? e.map(et) : [et(e)], ma = (e, t, s) => {
  if (t._n)
    return t;
  const n = Kr((...i) => ai(t(...i)), s);
  return n._c = !1, n;
}, go = (e, t, s) => {
  const n = e._ctx;
  for (const i in e) {
    if (li(i)) continue;
    const r = e[i];
    if (Q(r))
      t[i] = ma(i, r, n);
    else if (r != null) {
      const o = ai(r);
      t[i] = () => o;
    }
  }
}, mo = (e, t) => {
  const s = ai(t);
  e.slots.default = () => s;
}, vo = (e, t, s) => {
  for (const n in t)
    (s || !li(n)) && (e[n] = t[n]);
}, va = (e, t, s) => {
  const n = e.slots = uo();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (vo(n, t, s), s && yr(n, "_", i, !0)) : go(t, n);
  } else t && mo(e, t);
}, ya = (e, t, s) => {
  const { vnode: n, slots: i } = e;
  let r = !0, o = de;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? r = !1 : vo(i, t, s) : (r = !t.$stable, go(t, i)), o = t;
  } else t && (mo(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !li(l) && o[l] == null && delete i[l];
}, Ie = Sa;
function _a(e) {
  return ba(e);
}
function ba(e, t) {
  const s = rn();
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
    nextSibling: m,
    setScopeId: v = st,
    insertStaticContent: I
  } = e, T = (u, d, g, E = null, S = null, b = null, U = void 0, L = null, P = !!d.dynamicChildren) => {
    if (u === d)
      return;
    u && !Lt(u, d) && (E = As(u), Ne(u, S, b, !0), u = null), d.patchFlag === -2 && (P = !1, d.dynamicChildren = null);
    const { type: x, ref: G, shapeFlag: H } = d;
    switch (x) {
      case pn:
        D(u, d, g, E);
        break;
      case ke:
        A(u, d, g, E);
        break;
      case Us:
        u == null && y(d, g, E, U);
        break;
      case re:
        C(
          u,
          d,
          g,
          E,
          S,
          b,
          U,
          L,
          P
        );
        break;
      default:
        H & 1 ? q(
          u,
          d,
          g,
          E,
          S,
          b,
          U,
          L,
          P
        ) : H & 6 ? B(
          u,
          d,
          g,
          E,
          S,
          b,
          U,
          L,
          P
        ) : (H & 64 || H & 128) && x.process(
          u,
          d,
          g,
          E,
          S,
          b,
          U,
          L,
          P,
          Zt
        );
    }
    G != null && S ? fs(G, u && u.ref, b, d || u, !d) : G == null && u && u.ref != null && fs(u.ref, null, b, u, !0);
  }, D = (u, d, g, E) => {
    if (u == null)
      n(
        d.el = l(d.children),
        g,
        E
      );
    else {
      const S = d.el = u.el;
      d.children !== u.children && f(S, d.children);
    }
  }, A = (u, d, g, E) => {
    u == null ? n(
      d.el = a(d.children || ""),
      g,
      E
    ) : d.el = u.el;
  }, y = (u, d, g, E) => {
    [u.el, u.anchor] = I(
      u.children,
      d,
      g,
      E,
      u.el,
      u.anchor
    );
  }, V = ({ el: u, anchor: d }, g, E) => {
    let S;
    for (; u && u !== d; )
      S = m(u), n(u, g, E), u = S;
    n(d, g, E);
  }, N = ({ el: u, anchor: d }) => {
    let g;
    for (; u && u !== d; )
      g = m(u), i(u), u = g;
    i(d);
  }, q = (u, d, g, E, S, b, U, L, P) => {
    if (d.type === "svg" ? U = "svg" : d.type === "math" && (U = "mathml"), u == null)
      Z(
        d,
        g,
        E,
        S,
        b,
        U,
        L,
        P
      );
    else {
      const x = u.el && u.el._isVueCE ? u.el : null;
      try {
        x && x._beginPatch(), _(
          u,
          d,
          S,
          b,
          U,
          L,
          P
        );
      } finally {
        x && x._endPatch();
      }
    }
  }, Z = (u, d, g, E, S, b, U, L) => {
    let P, x;
    const { props: G, shapeFlag: H, transition: K, dirs: Y } = u;
    if (P = u.el = o(
      u.type,
      b,
      G && G.is,
      G
    ), H & 8 ? c(P, u.children) : H & 16 && R(
      u.children,
      P,
      null,
      E,
      S,
      Tn(u, b),
      U,
      L
    ), Y && Et(u, null, E, "created"), M(P, u, u.scopeId, U, E), G) {
      for (const fe in G)
        fe !== "value" && !ls(fe) && r(P, fe, null, G[fe], b, E);
      "value" in G && r(P, "value", null, G.value, b), (x = G.onVnodeBeforeMount) && Xe(x, E, u);
    }
    Y && Et(u, null, E, "beforeMount");
    const oe = xa(S, K);
    oe && K.beforeEnter(P), n(P, d, g), ((x = G && G.onVnodeMounted) || oe || Y) && Ie(() => {
      try {
        x && Xe(x, E, u), oe && K.enter(P), Y && Et(u, null, E, "mounted");
      } finally {
      }
    }, S);
  }, M = (u, d, g, E, S) => {
    if (g && v(u, g), E)
      for (let b = 0; b < E.length; b++)
        v(u, E[b]);
    if (S) {
      let b = S.subTree;
      if (d === b || bo(b.type) && (b.ssContent === d || b.ssFallback === d)) {
        const U = S.vnode;
        M(
          u,
          U,
          U.scopeId,
          U.slotScopeIds,
          S.parent
        );
      }
    }
  }, R = (u, d, g, E, S, b, U, L, P = 0) => {
    for (let x = P; x < u.length; x++) {
      const G = u[x] = L ? ut(u[x]) : et(u[x]);
      T(
        null,
        G,
        d,
        g,
        E,
        S,
        b,
        U,
        L
      );
    }
  }, _ = (u, d, g, E, S, b, U) => {
    const L = d.el = u.el;
    let { patchFlag: P, dynamicChildren: x, dirs: G } = d;
    P |= u.patchFlag & 16;
    const H = u.props || de, K = d.props || de;
    let Y;
    if (g && kt(g, !1), (Y = K.onVnodeBeforeUpdate) && Xe(Y, g, d, u), G && Et(d, u, g, "beforeUpdate"), g && kt(g, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    x && (!u.dynamicChildren || u.dynamicChildren.length !== x.length) && (P = 0, U = !1, x = null), (H.innerHTML && K.innerHTML == null || H.textContent && K.textContent == null) && c(L, ""), x ? W(
      u.dynamicChildren,
      x,
      L,
      g,
      E,
      Tn(d, S),
      b
    ) : U || se(
      u,
      d,
      L,
      null,
      g,
      E,
      Tn(d, S),
      b,
      !1
    ), P > 0) {
      if (P & 16)
        X(L, H, K, g, S);
      else if (P & 2 && H.class !== K.class && r(L, "class", null, K.class, S), P & 4 && r(L, "style", H.style, K.style, S), P & 8) {
        const oe = d.dynamicProps;
        for (let fe = 0; fe < oe.length; fe++) {
          const ue = oe[fe], _e = H[ue], we = K[ue];
          (we !== _e || ue === "value") && r(L, ue, _e, we, S, g);
        }
      }
      P & 1 && u.children !== d.children && c(L, d.children);
    } else !U && x == null && X(L, H, K, g, S);
    ((Y = K.onVnodeUpdated) || G) && Ie(() => {
      Y && Xe(Y, g, d, u), G && Et(d, u, g, "updated");
    }, E);
  }, W = (u, d, g, E, S, b, U) => {
    for (let L = 0; L < d.length; L++) {
      const P = u[L], x = d[L], G = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        P.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (P.type === re || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Lt(P, x) || // - In the case of a component, it could contain anything.
        P.shapeFlag & 198) ? h(P.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      T(
        P,
        x,
        G,
        null,
        E,
        S,
        b,
        U,
        !0
      );
    }
  }, X = (u, d, g, E, S) => {
    if (d !== g) {
      if (d !== de)
        for (const b in d)
          !ls(b) && !(b in g) && r(
            u,
            b,
            d[b],
            null,
            S,
            E
          );
      for (const b in g) {
        if (ls(b)) continue;
        const U = g[b], L = d[b];
        U !== L && b !== "value" && r(u, b, L, U, S, E);
      }
      "value" in g && r(u, "value", d.value, g.value, S);
    }
  }, C = (u, d, g, E, S, b, U, L, P) => {
    const x = d.el = u ? u.el : l(""), G = d.anchor = u ? u.anchor : l("");
    let { patchFlag: H, dynamicChildren: K, slotScopeIds: Y } = d;
    Y && (L = L ? L.concat(Y) : Y), u == null ? (n(x, g, E), n(G, g, E), R(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      g,
      G,
      S,
      b,
      U,
      L,
      P
    )) : H > 0 && H & 64 && K && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === K.length ? (W(
      u.dynamicChildren,
      K,
      g,
      S,
      b,
      U,
      L
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || S && d === S.subTree) && ci(
      u,
      d,
      !0
      /* shallow */
    )) : se(
      u,
      d,
      g,
      G,
      S,
      b,
      U,
      L,
      P
    );
  }, B = (u, d, g, E, S, b, U, L, P) => {
    d.slotScopeIds = L, u == null ? d.shapeFlag & 512 ? S.ctx.activate(
      d,
      g,
      E,
      U,
      P
    ) : F(
      d,
      g,
      E,
      S,
      b,
      U,
      P
    ) : ie(u, d, P);
  }, F = (u, d, g, E, S, b, U) => {
    const L = u.component = Pa(
      u,
      E,
      S
    );
    if (un(u) && (L.ctx.renderer = Zt), Ra(L, !1, U), L.asyncDep) {
      if (S && S.registerDep(L, ee, U), !u.el) {
        const P = L.subTree = ne(ke);
        A(null, P, d, g), u.placeholder = P.el;
      }
    } else
      ee(
        L,
        u,
        d,
        g,
        S,
        b,
        U
      );
  }, ie = (u, d, g) => {
    const E = d.component = u.component;
    if (fa(u, d, g))
      if (E.asyncDep && !E.asyncResolved) {
        z(E, d, g);
        return;
      } else
        E.next = d, E.update();
    else
      d.el = u.el, E.vnode = d;
  }, ee = (u, d, g, E, S, b, U) => {
    const L = () => {
      if (u.isMounted) {
        let { next: H, bu: K, u: Y, parent: oe, vnode: fe } = u;
        {
          const Ge = yo(u);
          if (Ge) {
            H && (H.el = fe.el, z(u, H, U)), Ge.asyncDep.then(() => {
              Ie(() => {
                u.isUnmounted || x();
              }, S);
            });
            return;
          }
        }
        let ue = H, _e;
        kt(u, !1), H ? (H.el = fe.el, z(u, H, U)) : H = fe, K && Fs(K), (_e = H.props && H.props.onVnodeBeforeUpdate) && Xe(_e, oe, H, fe), kt(u, !0);
        const we = Mi(u), Je = u.subTree;
        u.subTree = we, T(
          Je,
          we,
          // parent may have changed if it's in a teleport
          h(Je.el),
          // anchor may have changed if it's in a fragment
          As(Je),
          u,
          S,
          b
        ), H.el = we.el, ue === null && da(u, we.el), Y && Ie(Y, S), (_e = H.props && H.props.onVnodeUpdated) && Ie(
          () => Xe(_e, oe, H, fe),
          S
        );
      } else {
        let H;
        const { el: K, props: Y } = d, { bm: oe, m: fe, parent: ue, root: _e, type: we } = u, Je = ds(d);
        kt(u, !1), oe && Fs(oe), !Je && (H = Y && Y.onVnodeBeforeMount) && Xe(H, ue, d), kt(u, !0);
        {
          _e.ce && _e.ce._hasShadowRoot() && _e.ce._injectChildStyle(
            we,
            u.parent ? u.parent.type : void 0
          );
          const Ge = u.subTree = Mi(u);
          T(
            null,
            Ge,
            g,
            E,
            u,
            S,
            b
          ), d.el = Ge.el;
        }
        if (fe && Ie(fe, S), !Je && (H = Y && Y.onVnodeMounted)) {
          const Ge = d;
          Ie(
            () => Xe(H, ue, Ge),
            S
          );
        }
        (d.shapeFlag & 256 || ue && ds(ue.vnode) && ue.vnode.shapeFlag & 256) && u.a && Ie(u.a, S), u.isMounted = !0, d = g = E = null;
      }
    };
    u.scope.on();
    const P = u.effect = new Ir(L);
    u.scope.off();
    const x = u.update = P.run.bind(P), G = u.job = P.runIfDirty.bind(P);
    G.i = u, G.id = u.uid, P.scheduler = () => ri(G), kt(u, !0), x();
  }, z = (u, d, g) => {
    d.component = u;
    const E = u.vnode.props;
    u.vnode = d, u.next = null, pa(u, d.props, E, g), ya(u, d.children, g), nt(), bi(u), it();
  }, se = (u, d, g, E, S, b, U, L, P = !1) => {
    const x = u && u.children, G = u ? u.shapeFlag : 0, H = d.children, { patchFlag: K, shapeFlag: Y } = d;
    if (K > 0) {
      if (K & 128) {
        vt(
          x,
          H,
          g,
          E,
          S,
          b,
          U,
          L,
          P
        );
        return;
      } else if (K & 256) {
        We(
          x,
          H,
          g,
          E,
          S,
          b,
          U,
          L,
          P
        );
        return;
      }
    }
    Y & 8 ? (G & 16 && Xt(x, S, b), H !== x && c(g, H)) : G & 16 ? Y & 16 ? vt(
      x,
      H,
      g,
      E,
      S,
      b,
      U,
      L,
      P
    ) : Xt(x, S, b, !0) : (G & 8 && c(g, ""), Y & 16 && R(
      H,
      g,
      E,
      S,
      b,
      U,
      L,
      P
    ));
  }, We = (u, d, g, E, S, b, U, L, P) => {
    u = u || Wt, d = d || Wt;
    const x = u.length, G = d.length, H = Math.min(x, G);
    let K;
    for (K = 0; K < H; K++) {
      const Y = d[K] = P ? ut(d[K]) : et(d[K]);
      T(
        u[K],
        Y,
        g,
        null,
        S,
        b,
        U,
        L,
        P
      );
    }
    x > G ? Xt(
      u,
      S,
      b,
      !0,
      !1,
      H
    ) : R(
      d,
      g,
      E,
      S,
      b,
      U,
      L,
      P,
      H
    );
  }, vt = (u, d, g, E, S, b, U, L, P) => {
    let x = 0;
    const G = d.length;
    let H = u.length - 1, K = G - 1;
    for (; x <= H && x <= K; ) {
      const Y = u[x], oe = d[x] = P ? ut(d[x]) : et(d[x]);
      if (Lt(Y, oe))
        T(
          Y,
          oe,
          g,
          null,
          S,
          b,
          U,
          L,
          P
        );
      else
        break;
      x++;
    }
    for (; x <= H && x <= K; ) {
      const Y = u[H], oe = d[K] = P ? ut(d[K]) : et(d[K]);
      if (Lt(Y, oe))
        T(
          Y,
          oe,
          g,
          null,
          S,
          b,
          U,
          L,
          P
        );
      else
        break;
      H--, K--;
    }
    if (x > H) {
      if (x <= K) {
        const Y = K + 1, oe = Y < G ? d[Y].el : E;
        for (; x <= K; )
          T(
            null,
            d[x] = P ? ut(d[x]) : et(d[x]),
            g,
            oe,
            S,
            b,
            U,
            L,
            P
          ), x++;
      }
    } else if (x > K)
      for (; x <= H; )
        Ne(u[x], S, b, !0), x++;
    else {
      const Y = x, oe = x, fe = /* @__PURE__ */ new Map();
      for (x = oe; x <= K; x++) {
        const Re = d[x] = P ? ut(d[x]) : et(d[x]);
        Re.key != null && fe.set(Re.key, x);
      }
      let ue, _e = 0;
      const we = K - oe + 1;
      let Je = !1, Ge = 0;
      const Qt = new Array(we);
      for (x = 0; x < we; x++) Qt[x] = 0;
      for (x = Y; x <= H; x++) {
        const Re = u[x];
        if (_e >= we) {
          Ne(Re, S, b, !0);
          continue;
        }
        let Ye;
        if (Re.key != null)
          Ye = fe.get(Re.key);
        else
          for (ue = oe; ue <= K; ue++)
            if (Qt[ue - oe] === 0 && Lt(Re, d[ue])) {
              Ye = ue;
              break;
            }
        Ye === void 0 ? Ne(Re, S, b, !0) : (Qt[Ye - oe] = x + 1, Ye >= Ge ? Ge = Ye : Je = !0, T(
          Re,
          d[Ye],
          g,
          null,
          S,
          b,
          U,
          L,
          P
        ), _e++);
      }
      const hi = Je ? wa(Qt) : Wt;
      for (ue = hi.length - 1, x = we - 1; x >= 0; x--) {
        const Re = oe + x, Ye = d[Re], pi = d[Re + 1], gi = Re + 1 < G ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          pi.el || _o(pi)
        ) : E;
        Qt[x] === 0 ? T(
          null,
          Ye,
          g,
          gi,
          S,
          b,
          U,
          L,
          P
        ) : Je && (ue < 0 || x !== hi[ue] ? rt(Ye, g, gi, 2) : ue--);
      }
    }
  }, rt = (u, d, g, E, S = null) => {
    const { el: b, type: U, transition: L, children: P, shapeFlag: x } = u;
    if (x & 6) {
      rt(u.component.subTree, d, g, E);
      return;
    }
    if (x & 128) {
      u.suspense.move(d, g, E);
      return;
    }
    if (x & 64) {
      U.move(u, d, g, Zt);
      return;
    }
    if (U === re) {
      n(b, d, g);
      for (let H = 0; H < P.length; H++)
        rt(P[H], d, g, E);
      n(u.anchor, d, g);
      return;
    }
    if (U === Us) {
      V(u, d, g);
      return;
    }
    if (E !== 2 && x & 1 && L)
      if (E === 0)
        L.persisted && !b[Ue] ? n(b, d, g) : (L.beforeEnter(b), n(b, d, g), Ie(() => L.enter(b), S));
      else {
        const { leave: H, delayLeave: K, afterLeave: Y } = L, oe = () => {
          u.ctx.isUnmounted ? i(b) : n(b, d, g);
        }, fe = () => {
          const ue = b._isLeaving || !!b[Ue];
          b._isLeaving && b[Ue](
            !0
            /* cancelled */
          ), L.persisted && !ue ? oe() : H(b, () => {
            oe(), Y && Y();
          });
        };
        K ? K(b, oe, fe) : fe();
      }
    else
      n(b, d, g);
  }, Ne = (u, d, g, E = !1, S = !1) => {
    const {
      type: b,
      props: U,
      ref: L,
      children: P,
      dynamicChildren: x,
      shapeFlag: G,
      patchFlag: H,
      dirs: K,
      cacheIndex: Y,
      memo: oe
    } = u;
    if (H === -2 && (S = !1), L != null && (nt(), fs(L, null, g, u, !0), it()), Y != null && (d.renderCache[Y] = void 0), G & 256) {
      d.ctx.deactivate(u);
      return;
    }
    const fe = G & 1 && K, ue = !ds(u);
    let _e;
    if (ue && (_e = U && U.onVnodeBeforeUnmount) && Xe(_e, d, u), G & 6)
      No(u.component, g, E);
    else {
      if (G & 128) {
        u.suspense.unmount(g, E);
        return;
      }
      fe && Et(u, null, d, "beforeUnmount"), G & 64 ? u.type.remove(
        u,
        d,
        g,
        Zt,
        E
      ) : x && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !x.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== re || H > 0 && H & 64) ? Xt(
        x,
        d,
        g,
        !1,
        !0
      ) : (b === re && H & 384 || !S && G & 16) && Xt(P, d, g), E && fi(u);
    }
    const we = oe != null && Y == null;
    (ue && (_e = U && U.onVnodeUnmounted) || fe || we) && Ie(() => {
      _e && Xe(_e, d, u), fe && Et(u, null, d, "unmounted"), we && (u.el = null);
    }, g);
  }, fi = (u) => {
    const { type: d, el: g, anchor: E, transition: S } = u;
    if (d === re) {
      Do(g, E);
      return;
    }
    if (d === Us) {
      N(u);
      return;
    }
    const b = () => {
      i(g), S && !S.persisted && S.afterLeave && S.afterLeave();
    };
    if (u.shapeFlag & 1 && S && !S.persisted) {
      const { leave: U, delayLeave: L } = S, P = () => U(g, b);
      L ? L(u.el, b, P) : P();
    } else
      b();
  }, Do = (u, d) => {
    let g;
    for (; u !== d; )
      g = m(u), i(u), u = g;
    i(d);
  }, No = (u, d, g) => {
    const { bum: E, scope: S, job: b, subTree: U, um: L, m: P, a: x } = u;
    Li(P), Li(x), E && Fs(E), S.stop(), b && (b.flags |= 8, Ne(U, u, d, g)), L && Ie(L, d), Ie(() => {
      u.isUnmounted = !0;
    }, d);
  }, Xt = (u, d, g, E = !1, S = !1, b = 0) => {
    for (let U = b; U < u.length; U++)
      Ne(u[U], d, g, E, S);
  }, As = (u) => {
    if (u.shapeFlag & 6)
      return As(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const d = m(u.anchor || u.el), g = d && d[Jr];
    return g ? m(g) : d;
  };
  let yn = !1;
  const di = (u, d, g) => {
    let E;
    u == null ? d._vnode && (Ne(d._vnode, null, null, !0), E = d._vnode.component) : T(
      d._vnode || null,
      u,
      d,
      null,
      null,
      null,
      g
    ), d._vnode = u, yn || (yn = !0, bi(E), jr(), yn = !1);
  }, Zt = {
    p: T,
    um: Ne,
    m: rt,
    r: fi,
    mt: F,
    mc: R,
    pc: se,
    pbc: W,
    n: As,
    o: e
  };
  return {
    render: di,
    hydrate: void 0,
    createApp: ra(di)
  };
}
function Tn({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function kt({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function xa(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ci(e, t, s = !1) {
  const n = e.children, i = t.children;
  if (J(n) && J(i))
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = ut(i[r]), l.el = o.el), !s && l.patchFlag !== -2 && ci(o, l)), l.type === pn && (l.patchFlag === -1 && (l = i[r] = ut(l)), l.el = o.el), l.type === ke && !l.el && (l.el = o.el);
    }
}
function wa(e) {
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
function yo(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : yo(t);
}
function Li(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function _o(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? _o(t.subTree) : null;
}
const bo = (e) => e.__isSuspense;
function Sa(e, t) {
  t && t.pendingBranch ? J(e) ? t.effects.push(...e) : t.effects.push(e) : kl(e);
}
const re = /* @__PURE__ */ Symbol.for("v-fgt"), pn = /* @__PURE__ */ Symbol.for("v-txt"), ke = /* @__PURE__ */ Symbol.for("v-cmt"), Us = /* @__PURE__ */ Symbol.for("v-stc"), ps = [];
let Oe = null;
function k(e = !1) {
  ps.push(Oe = e ? null : []);
}
function Ca() {
  ps.pop(), Oe = ps[ps.length - 1] || null;
}
let Ss = 1;
function Js(e, t = !1) {
  Ss += e, e < 0 && Oe && t && (Oe.hasOnce = !0);
}
function xo(e) {
  return e.dynamicChildren = Ss > 0 ? Oe || Wt : null, Ca(), Ss > 0 && Oe && Oe.push(e), e;
}
function O(e, t, s, n, i, r) {
  return xo(
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
function pt(e, t, s, n, i) {
  return xo(
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
function Gs(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Lt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const wo = ({ key: e }) => e ?? null, Hs = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? me(e) || /* @__PURE__ */ ve(e) || Q(e) ? { i: Ve, r: e, k: t, f: !!s } : e : null);
function p(e, t = null, s = null, n = 0, i = null, r = e === re ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && wo(t),
    ref: t && Hs(t),
    scopeId: Wr,
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
    ctx: Ve
  };
  return l ? (Ys(a, s), r & 128 && e.normalize(a)) : s && (a.shapeFlag |= me(s) ? 8 : 16), Ss > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Oe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Oe.push(a), a;
}
const ne = Ia;
function Ia(e, t = null, s = null, n = 0, i = null, r = !1) {
  if ((!e || e === Xl) && (e = ke), Gs(e)) {
    const l = St(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Ys(l, s), Ss > 0 && !r && Oe && (l.shapeFlag & 6 ? Oe[Oe.indexOf(e)] = l : Oe.push(l)), l.patchFlag = -2, l;
  }
  if (Da(e) && (e = e.__vccOpts), t) {
    t = Ta(t);
    let { class: l, style: a } = t;
    l && !me(l) && (t.class = ye(l)), ce(a) && (/* @__PURE__ */ an(a) && !J(a) && (a = xe({}, a)), t.style = $t(a));
  }
  const o = me(e) ? 1 : bo(e) ? 128 : Gr(e) ? 64 : ce(e) ? 4 : Q(e) ? 2 : 0;
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
function Ta(e) {
  return e ? /* @__PURE__ */ an(e) || fo(e) ? xe({}, e) : e : null;
}
function St(e, t, s = !1, n = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: a } = e, f = t ? ka(i || {}, t) : i, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && wo(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && r ? J(r) ? r.concat(Hs(t)) : [r, Hs(t)] : Hs(t)
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
    patchFlag: t && e.type !== re ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && St(e.ssContent),
    ssFallback: e.ssFallback && St(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && n && ws(
    c,
    a.clone(c)
  ), c;
}
function Ea(e = " ", t = 0) {
  return ne(pn, null, e, t);
}
function $s(e, t) {
  const s = ne(Us, null, e);
  return s.staticCount = t, s;
}
function Me(e = "", t = !1) {
  return t ? (k(), pt(ke, null, e)) : ne(ke, null, e);
}
function et(e) {
  return e == null || typeof e == "boolean" ? ne(ke) : J(e) ? ne(
    re,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Gs(e) ? ut(e) : ne(pn, null, String(e));
}
function ut(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : St(e);
}
function Ys(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (J(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Ys(e, i()), i._c && (i._d = !0));
      return;
    } else {
      s = 32;
      const i = t._;
      !i && !fo(t) ? t._ctx = Ve : i === 3 && Ve && (Ve.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Q(t)) {
    if (n & 65) {
      Ys(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ve }, s = 32;
  } else
    t = String(t), n & 64 ? (s = 16, t = [Ea(t)]) : s = 8;
  e.children = t, e.shapeFlag |= s;
}
function ka(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = ye([t.class, n.class]));
      else if (i === "style")
        t.style = $t([t.style, n.style]);
      else if (en(i)) {
        const r = t[i], o = n[i];
        o && r !== o && !(J(r) && r.includes(o)) ? t[i] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !tn(i) && (t[i] = o);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function Xe(e, t, s, n = null) {
  Be(e, t, 7, [
    s,
    n
  ]);
}
const Aa = oo();
let Ma = 0;
function Pa(e, t, s) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || Aa, r = {
    uid: Ma++,
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
    scope: new wr(
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
    propsOptions: po(n, i),
    emitsOptions: lo(n, i),
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = la.bind(null, r), e.ce && e.ce(r), r;
}
let Ae = null;
const ui = () => Ae || Ve;
let Xs, Wn;
{
  const e = rn(), t = (s, n) => {
    let i;
    return (i = e[s]) || (i = e[s] = []), i.push(n), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  Xs = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => Ae = s
  ), Wn = t(
    "__VUE_SSR_SETTERS__",
    (s) => Cs = s
  );
}
const ks = (e) => {
  const t = Ae;
  return Xs(e), e.scope.on(), () => {
    e.scope.off(), Xs(t);
  };
}, $i = () => {
  Ae && Ae.scope.off(), Xs(null);
};
function So(e) {
  return e.vnode.shapeFlag & 4;
}
let Cs = !1;
function Ra(e, t = !1, s = !1) {
  t && Wn(t);
  const { props: n, children: i } = e.vnode, r = So(e);
  ha(e, n, r, t), va(e, i, s || t);
  const o = r ? La(e, t) : void 0;
  return t && Wn(!1), o;
}
function La(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Zl);
  const { setup: n } = s;
  if (n) {
    nt();
    const i = e.setupContext = n.length > 1 ? Oa(e) : null, r = ks(e), o = Es(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = pr(o);
    if (it(), r(), (l || e.sp) && !ds(e) && to(e), l) {
      if (o.then($i, $i), t)
        return o.then((a) => {
          Oi(e, a);
        }).catch((a) => {
          cn(a, e, 0);
        });
      e.asyncDep = o;
    } else
      Oi(e, o);
  } else
    Co(e);
}
function Oi(e, t, s) {
  Q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ce(t) && (e.setupState = Ur(t)), Co(e);
}
function Co(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || st);
  {
    const i = ks(e);
    nt();
    try {
      Ql(e);
    } finally {
      it(), i();
    }
  }
}
const $a = {
  get(e, t) {
    return Se(e, "get", ""), e[t];
  }
};
function Oa(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, $a),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function gn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ur(ii(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in hs)
        return hs[s](e);
    },
    has(t, s) {
      return s in t || s in hs;
    }
  })) : e.proxy;
}
function Da(e) {
  return Q(e) && "__vccOpts" in e;
}
const Pe = (e, t) => /* @__PURE__ */ Sl(e, t, Cs);
function Na(e, t, s) {
  try {
    Js(-1);
    const n = arguments.length;
    return n === 2 ? ce(t) && !J(t) ? Gs(t) ? ne(e, null, [t]) : ne(e, t) : ne(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && Gs(s) && (s = [s]), ne(e, t, s));
  } finally {
    Js(1);
  }
}
const Fa = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Kn;
const Di = typeof window < "u" && window.trustedTypes;
if (Di)
  try {
    Kn = /* @__PURE__ */ Di.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Io = Kn ? (e) => Kn.createHTML(e) : (e) => e, Ua = "http://www.w3.org/2000/svg", Ha = "http://www.w3.org/1998/Math/MathML", at = typeof document < "u" ? document : null, Ni = at && /* @__PURE__ */ at.createElement("template"), Va = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const i = t === "svg" ? at.createElementNS(Ua, e) : t === "mathml" ? at.createElementNS(Ha, e) : s ? at.createElement(e, { is: s }) : at.createElement(e);
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
      Ni.innerHTML = Io(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ni.content;
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
}, yt = "transition", ss = "animation", Is = /* @__PURE__ */ Symbol("_vtc"), To = {
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
}, ja = /* @__PURE__ */ xe(
  {},
  Yr,
  To
), Ba = (e) => (e.displayName = "Transition", e.props = ja, e), Wa = /* @__PURE__ */ Ba(
  (e, { slots: t }) => Na(Hl, Ka(e), t)
), At = (e, t = []) => {
  J(e) ? e.forEach((s) => s(...t)) : e && e(...t);
}, Fi = (e) => e ? J(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Ka(e) {
  const t = {};
  for (const C in e)
    C in To || (t[C] = e[C]);
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
    leaveActiveClass: m = `${s}-leave-active`,
    leaveToClass: v = `${s}-leave-to`
  } = e, I = za(i), T = I && I[0], D = I && I[1], {
    onBeforeEnter: A,
    onEnter: y,
    onEnterCancelled: V,
    onLeave: N,
    onLeaveCancelled: q,
    onBeforeAppear: Z = A,
    onAppear: M = y,
    onAppearCancelled: R = V
  } = t, _ = (C, B, F, ie) => {
    C._enterCancelled = ie, Mt(C, B ? c : l), Mt(C, B ? f : o), F && F();
  }, W = (C, B) => {
    C._isLeaving = !1, Mt(C, h), Mt(C, v), Mt(C, m), B && B();
  }, X = (C) => (B, F) => {
    const ie = C ? M : y, ee = () => _(B, C, F);
    At(ie, [B, ee]), Ui(() => {
      Mt(B, C ? a : r), lt(B, C ? c : l), Fi(ie) || Hi(B, n, T, ee);
    });
  };
  return xe(t, {
    onBeforeEnter(C) {
      At(A, [C]), lt(C, r), lt(C, o);
    },
    onBeforeAppear(C) {
      At(Z, [C]), lt(C, a), lt(C, f);
    },
    onEnter: X(!1),
    onAppear: X(!0),
    onLeave(C, B) {
      C._isLeaving = !0;
      const F = () => W(C, B);
      lt(C, h), C._enterCancelled ? (lt(C, m), Bi(C)) : (Bi(C), lt(C, m)), Ui(() => {
        C._isLeaving && (Mt(C, h), lt(C, v), Fi(N) || Hi(C, n, D, F));
      }), At(N, [C, F]);
    },
    onEnterCancelled(C) {
      _(C, !1, void 0, !0), At(V, [C]);
    },
    onAppearCancelled(C) {
      _(C, !0, void 0, !0), At(R, [C]);
    },
    onLeaveCancelled(C) {
      W(C), At(q, [C]);
    }
  });
}
function za(e) {
  if (e == null)
    return null;
  if (ce(e))
    return [En(e.enter), En(e.leave)];
  {
    const t = En(e);
    return [t, t];
  }
}
function En(e) {
  return jo(e);
}
function lt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.add(s)), (e[Is] || (e[Is] = /* @__PURE__ */ new Set())).add(t);
}
function Mt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const s = e[Is];
  s && (s.delete(t), s.size || (e[Is] = void 0));
}
function Ui(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let qa = 0;
function Hi(e, t, s, n) {
  const i = e._endId = ++qa, r = () => {
    i === e._endId && n();
  };
  if (s != null)
    return setTimeout(r, s);
  const { type: o, timeout: l, propCount: a } = Ja(e, t);
  if (!o)
    return n();
  const f = o + "end";
  let c = 0;
  const h = () => {
    e.removeEventListener(f, m), r();
  }, m = (v) => {
    v.target === e && ++c >= a && h();
  };
  setTimeout(() => {
    c < a && h();
  }, l + 1), e.addEventListener(f, m);
}
function Ja(e, t) {
  const s = window.getComputedStyle(e), n = (I) => (s[I] || "").split(", "), i = n(`${yt}Delay`), r = n(`${yt}Duration`), o = Vi(i, r), l = n(`${ss}Delay`), a = n(`${ss}Duration`), f = Vi(l, a);
  let c = null, h = 0, m = 0;
  t === yt ? o > 0 && (c = yt, h = o, m = r.length) : t === ss ? f > 0 && (c = ss, h = f, m = a.length) : (h = Math.max(o, f), c = h > 0 ? o > f ? yt : ss : null, m = c ? c === yt ? r.length : a.length : 0);
  const v = c === yt && /\b(?:transform|all)(?:,|$)/.test(
    n(`${yt}Property`).toString()
  );
  return {
    type: c,
    timeout: h,
    propCount: m,
    hasTransform: v
  };
}
function Vi(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((s, n) => ji(s) + ji(e[n])));
}
function ji(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Bi(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ga(e, t, s) {
  const n = e[Is];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const Zs = /* @__PURE__ */ Symbol("_vod"), Eo = /* @__PURE__ */ Symbol("_vsh"), Os = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: s }) {
    e[Zs] = e.style.display === "none" ? "" : e.style.display, s && t ? s.beforeEnter(e) : ns(e, t);
  },
  mounted(e, { value: t }, { transition: s }) {
    s && t && s.enter(e);
  },
  updated(e, { value: t, oldValue: s }, { transition: n }) {
    !t != !s && (n ? t ? (n.beforeEnter(e), ns(e, !0), n.enter(e)) : n.leave(e, () => {
      ns(e, !1);
    }) : ns(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ns(e, t);
  }
};
function ns(e, t) {
  e.style.display = t ? e[Zs] : "none", e[Eo] = !t;
}
const Ya = /* @__PURE__ */ Symbol(""), Xa = /(?:^|;)\s*display\s*:/;
function Za(e, t, s) {
  const n = e.style, i = me(s);
  let r = !1;
  if (s && !i) {
    if (t)
      if (me(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          s[l] == null && os(n, l, "");
        }
      else
        for (const o in t)
          s[o] == null && os(n, o, "");
    for (const o in s) {
      o === "display" && (r = !0);
      const l = s[o];
      l != null ? ec(
        e,
        o,
        !me(t) && t ? t[o] : void 0,
        l
      ) || os(n, o, l) : os(n, o, "");
    }
  } else if (i) {
    if (t !== s) {
      const o = n[Ya];
      o && (s += ";" + o), n.cssText = s, r = Xa.test(s);
    }
  } else t && e.removeAttribute("style");
  Zs in e && (e[Zs] = r ? n.display : "", e[Eo] && (n.display = "none"));
}
const Wi = /\s*!important$/;
function os(e, t, s) {
  if (J(s))
    s.forEach((n) => os(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = Qa(e, t);
    Wi.test(s) ? e.setProperty(
      Ct(n),
      s.replace(Wi, ""),
      "important"
    ) : e[n] = s;
  }
}
const Ki = ["Webkit", "Moz", "ms"], kn = {};
function Qa(e, t) {
  const s = kn[t];
  if (s)
    return s;
  let n = Ke(t);
  if (n !== "filter" && n in e)
    return kn[t] = n;
  n = vr(n);
  for (let i = 0; i < Ki.length; i++) {
    const r = Ki[i] + n;
    if (r in e)
      return kn[t] = r;
  }
  return t;
}
function ec(e, t, s, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && me(n) && s === n;
}
const zi = "http://www.w3.org/1999/xlink";
function qi(e, t, s, n, i, r = Jo(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(zi, t.slice(6, t.length)) : e.setAttributeNS(zi, t, s) : s == null || r && !_r(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : je(s) ? String(s) : s
  );
}
function Ji(e, t, s, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? Io(s) : s);
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
    l === "boolean" ? s = _r(s) : s == null && l === "string" ? (s = "", o = !0) : l === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function jt(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function tc(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Gi = /* @__PURE__ */ Symbol("_vei");
function sc(e, t, s, n, i = null) {
  const r = e[Gi] || (e[Gi] = {}), o = r[t];
  if (n && o)
    o.value = n;
  else {
    const [l, a] = rc(t);
    if (n) {
      const f = r[t] = ac(
        n,
        i
      );
      jt(e, l, f, a);
    } else o && (tc(e, l, o, a), r[t] = void 0);
  }
}
const nc = /(Once|Passive|Capture)$/, ic = /^on:?(?:Once|Passive|Capture)$/;
function rc(e) {
  let t, s;
  for (; (s = e.match(nc)) && !ic.test(e); )
    t || (t = {}), e = e.slice(0, e.length - s[1].length), t[s[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Ct(e.slice(2)), t];
}
let An = 0;
const oc = /* @__PURE__ */ Promise.resolve(), lc = () => An || (oc.then(() => An = 0), An = Date.now());
function ac(e, t) {
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
        f && Be(
          f,
          t,
          5,
          l
        );
      }
    } else
      Be(
        i,
        t,
        5,
        [n]
      );
  };
  return s.value = e, s.attached = lc(), s;
}
const Yi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, cc = (e, t, s, n, i, r) => {
  const o = i === "svg";
  t === "class" ? Ga(e, n, o) : t === "style" ? Za(e, s, n) : en(t) ? tn(t) || sc(e, t, s, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : uc(e, t, n, o)) ? (Ji(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && qi(e, t, n, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (fc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !me(n))) ? Ji(e, Ke(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), qi(e, t, n, o));
};
function uc(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Yi(t) && Q(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Yi(t) && me(s) ? !1 : t in e;
}
function fc(e, t) {
  const s = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!s)
    return !1;
  const n = Ke(t);
  return Array.isArray(s) ? s.some((i) => Ke(i) === n) : Object.keys(s).some((i) => Ke(i) === n);
}
const Xi = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return J(t) ? (s) => Fs(t, s) : t;
};
function dc(e) {
  e.target.composing = !0;
}
function Zi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Mn = /* @__PURE__ */ Symbol("_assign");
function Qi(e, t, s) {
  return t && (e = e.trim()), s && (e = Yn(e)), e;
}
const Vs = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, i) {
    e[Mn] = Xi(i);
    const r = n || i.props && i.props.type === "number";
    jt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Mn](Qi(e.value, s, r));
    }), (s || r) && jt(e, "change", () => {
      e.value = Qi(e.value, s, r);
    }), t || (jt(e, "compositionstart", dc), jt(e, "compositionend", Zi), jt(e, "change", Zi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: s, modifiers: { lazy: n, trim: i, number: r } }, o) {
    if (e[Mn] = Xi(o), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? Yn(e.value) : e.value, a = t ?? "";
    if (l === a)
      return;
    const f = e.getRootNode();
    (f instanceof Document || f instanceof ShadowRoot) && f.activeElement === e && e.type !== "range" && (n && t === s || i && e.value.trim() === a) || (e.value = a);
  }
}, hc = ["ctrl", "shift", "alt", "meta"], pc = {
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
  exact: (e, t) => hc.some((s) => e[`${s}Key`] && !t.includes(s))
}, Bt = (e, t) => {
  if (!e) return e;
  const s = e._withMods || (e._withMods = {}), n = t.join(".");
  return s[n] || (s[n] = (i, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const l = pc[t[o]];
      if (l && l(i, t)) return;
    }
    return e(i, ...r);
  });
}, gc = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, ko = (e, t) => {
  const s = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return s[n] || (s[n] = (i) => {
    if (!("key" in i))
      return;
    const r = Ct(i.key);
    if (t.some(
      (o) => o === r || gc[o] === r
    ))
      return e(i);
  });
}, mc = /* @__PURE__ */ xe({ patchProp: cc }, Va);
let er;
function vc() {
  return er || (er = _a(mc));
}
const Ao = (...e) => {
  const t = vc().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const i = _c(n);
    if (!i) return;
    const r = t._component;
    !Q(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = s(i, !1, yc(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
};
function yc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function _c(e) {
  return me(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Mo;
const mn = (e) => Mo = e, Po = (
  /* istanbul ignore next */
  Symbol()
);
function zn(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var gs;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(gs || (gs = {}));
function bc() {
  const e = Sr(!0), t = e.run(() => /* @__PURE__ */ pe({}));
  let s = [], n = [];
  const i = ii({
    install(r) {
      mn(i), i._a = r, r.provide(Po, i), r.config.globalProperties.$pinia = i, n.forEach((o) => s.push(o)), n = [];
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
const Ro = () => {
};
function tr(e, t, s, n = Ro) {
  e.push(t);
  const i = () => {
    const r = e.indexOf(t);
    r > -1 && (e.splice(r, 1), n());
  };
  return !s && Cr() && Yo(i), i;
}
function Ut(e, ...t) {
  e.slice().forEach((s) => {
    s(...t);
  });
}
const xc = (e) => e(), sr = Symbol(), Pn = Symbol();
function qn(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((s, n) => e.set(n, s)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const s in t) {
    if (!t.hasOwnProperty(s))
      continue;
    const n = t[s], i = e[s];
    zn(i) && zn(n) && e.hasOwnProperty(s) && !/* @__PURE__ */ ve(n) && !/* @__PURE__ */ ht(n) ? e[s] = qn(i, n) : e[s] = n;
  }
  return e;
}
const wc = (
  /* istanbul ignore next */
  Symbol()
);
function Sc(e) {
  return !zn(e) || !e.hasOwnProperty(wc);
}
const { assign: xt } = Object;
function Cc(e) {
  return !!(/* @__PURE__ */ ve(e) && e.effect);
}
function Ic(e, t, s, n) {
  const { state: i, actions: r, getters: o } = t, l = s.state.value[e];
  let a;
  function f() {
    l || (s.state.value[e] = i ? i() : {});
    const c = /* @__PURE__ */ _l(s.state.value[e]);
    return xt(c, r, Object.keys(o || {}).reduce((h, m) => (h[m] = ii(Pe(() => {
      mn(s);
      const v = s._s.get(e);
      return o[m].call(v, v);
    })), h), {}));
  }
  return a = Lo(e, f, t, s, n, !0), a;
}
function Lo(e, t, s = {}, n, i, r) {
  let o;
  const l = xt({ actions: {} }, s), a = { deep: !0 };
  let f, c, h = [], m = [], v;
  const I = n.state.value[e];
  !r && !I && (n.state.value[e] = {});
  let T;
  function D(R) {
    let _;
    f = c = !1, typeof R == "function" ? (R(n.state.value[e]), _ = {
      type: gs.patchFunction,
      storeId: e,
      events: v
    }) : (qn(n.state.value[e], R), _ = {
      type: gs.patchObject,
      payload: R,
      storeId: e,
      events: v
    });
    const W = T = Symbol();
    Le().then(() => {
      T === W && (f = !0);
    }), c = !0, Ut(h, _, n.state.value[e]);
  }
  const A = r ? function() {
    const { state: _ } = s, W = _ ? _() : {};
    this.$patch((X) => {
      xt(X, W);
    });
  } : (
    /* istanbul ignore next */
    Ro
  );
  function y() {
    o.stop(), h = [], m = [], n._s.delete(e);
  }
  const V = (R, _ = "") => {
    if (sr in R)
      return R[Pn] = _, R;
    const W = function() {
      mn(n);
      const X = Array.from(arguments), C = [], B = [];
      function F(z) {
        C.push(z);
      }
      function ie(z) {
        B.push(z);
      }
      Ut(m, {
        args: X,
        name: W[Pn],
        store: q,
        after: F,
        onError: ie
      });
      let ee;
      try {
        ee = R.apply(this && this.$id === e ? this : q, X);
      } catch (z) {
        throw Ut(B, z), z;
      }
      return ee instanceof Promise ? ee.then((z) => (Ut(C, z), z)).catch((z) => (Ut(B, z), Promise.reject(z))) : (Ut(C, ee), ee);
    };
    return W[sr] = !0, W[Pn] = _, W;
  }, N = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: tr.bind(null, m),
    $patch: D,
    $reset: A,
    $subscribe(R, _ = {}) {
      const W = tr(h, R, _.detached, () => X()), X = o.run(() => $e(() => n.state.value[e], (C) => {
        (_.flush === "sync" ? c : f) && R({
          storeId: e,
          type: gs.direct,
          events: v
        }, C);
      }, xt({}, a, _)));
      return W;
    },
    $dispose: y
  }, q = /* @__PURE__ */ ln(N);
  n._s.set(e, q);
  const M = (n._a && n._a.runWithContext || xc)(() => n._e.run(() => (o = Sr()).run(() => t({ action: V }))));
  for (const R in M) {
    const _ = M[R];
    if (/* @__PURE__ */ ve(_) && !Cc(_) || /* @__PURE__ */ ht(_))
      r || (I && Sc(_) && (/* @__PURE__ */ ve(_) ? _.value = I[R] : qn(_, I[R])), n.state.value[e][R] = _);
    else if (typeof _ == "function") {
      const W = V(_, R);
      M[R] = W, l.actions[R] = _;
    }
  }
  return xt(q, M), xt(/* @__PURE__ */ le(q), M), Object.defineProperty(q, "$state", {
    get: () => n.state.value[e],
    set: (R) => {
      D((_) => {
        xt(_, R);
      });
    }
  }), n._p.forEach((R) => {
    xt(q, o.run(() => R({
      store: q,
      app: n._a,
      pinia: n,
      options: l
    })));
  }), I && r && s.hydrate && s.hydrate(q.$state, I), f = !0, c = !0, q;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function vn(e, t, s) {
  let n, i;
  const r = typeof t == "function";
  typeof e == "string" ? (n = e, i = r ? s : t) : (i = e, n = e.id);
  function o(l, a) {
    const f = Ml();
    return l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    l || (f ? us(Po, null) : null), l && mn(l), l = Mo, l._s.has(n) || (r ? Lo(n, t, i, l) : Ic(n, i, l)), l._s.get(n);
  }
  return o.$id = n, o;
}
function Tc() {
  return [
    { id: "netease", enabled: !0, priority: 0, config: { baseURL: "" } },
    { id: "local", enabled: !0, priority: 1, config: {} },
    { id: "custom", enabled: !1, priority: 2, config: { searchURL: "", resolveURL: "" } }
  ];
}
function Rn() {
  return {
    volume: 65,
    playMode: "list",
    position: null,
    widgetMode: "dock",
    dockAlign: "left",
    autoPlayOnNewCue: !0,
    providers: Tc(),
    customCueRules: []
  };
}
const Te = /* @__PURE__ */ vn("settings", {
  state: () => ({
    settings: Rn(),
    storage: null
  }),
  getters: {
    defaults: () => Rn()
  },
  actions: {
    init(e) {
      this.storage = e;
      const t = e.getSettings(), s = Rn();
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
class Ec {
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
const nr = /\[(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?\]/g;
function kc(e) {
  const t = e.split(/\r?\n/), s = [];
  for (const n of t) {
    const i = new RegExp(nr.source, "g"), r = [];
    let o;
    for (; (o = i.exec(n)) !== null; ) {
      const a = parseInt(o[1], 10), f = parseInt(o[2], 10), c = o[3] ?? "", h = c ? parseInt(c.padEnd(3, "0"), 10) : 0;
      r.push(a * 60 + f + h / 1e3);
    }
    if (r.length === 0) continue;
    const l = n.replace(new RegExp(nr.source, "g"), "").trim();
    if (l !== "")
      for (const a of r)
        s.push({ time: a, text: l });
  }
  s.sort((n, i) => n.time - i.time);
  for (let n = 0; n < s.length; n++)
    n < s.length - 1 && (s[n].next = s[n + 1]);
  return s;
}
function ir(e, t) {
  if (e.length === 0) return null;
  let s = null;
  for (const n of e)
    if (n.time <= t)
      s = n;
    else
      break;
  return s;
}
class Ac {
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
      return this.ctx().extensionSettings[ms] ?? null;
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
      s.extensionSettings[ms] = t, s.saveSettingsDebounced();
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
    return `${ms}__settings`;
  }
}
function Mc() {
  return new Ac();
}
const ms = "st-music-player", rr = "stmp_cursor", or = "stmp_userlist";
class Pc {
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
class Rc {
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
class Lc {
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
class $c {
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
function $o(e) {
  const s = e.filter((n) => n.enabled).sort((n, i) => n.priority - i.priority).map((n) => {
    const i = n.config ?? {};
    switch (n.id) {
      case "netease":
        return new Rc({ baseURL: i.baseURL, apiBase: i.apiBase });
      case "local":
        return new Lc({
          storage: i.storage ? i.storage : void 0
        });
      case "custom":
        return new $c({
          searchURL: i.searchURL,
          resolveURL: i.resolveURL
        });
      default:
        return null;
    }
  }).filter((n) => n !== null);
  return new Pc(s);
}
const Oc = {
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
  Inline: "集成",
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
let Ht = null;
function Dc() {
  if (Ht) return Ht;
  try {
    if (typeof SillyTavern < "u") {
      const e = SillyTavern.getContext();
      e?.getCurrentLocale && (Ht = e.getCurrentLocale());
    }
  } catch {
  }
  return Ht || (Ht = (typeof navigator < "u" ? navigator.language || navigator.userLanguage : "en")?.toLowerCase() || "en"), Ht;
}
function j(e) {
  return Dc().startsWith("zh") ? Oc[e] ?? e : e;
}
function Ds() {
  return `stmp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
const Yt = /* @__PURE__ */ vn("playlist", {
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
      return Te().settings.playMode;
    }
  },
  actions: {
    init(e) {
      this.chatIndexer = e;
    },
    setChatId(e) {
      this.chatId = e, this.list = this.list.filter((n) => n.source !== "chat"), this.loadFromStorage();
      const s = Te().storage;
      if (s) {
        const n = s.getMetadata(rr);
        n && n.chatId === e && this.chatIndexer?.setCursor(e, n.lastScannedMessageId);
      }
    },
    loadFromStorage() {
      const t = Te().storage;
      if (!t || !this.chatId) return;
      const s = t.getMetadata(or);
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
        id: Ds(),
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
        id: Ds(),
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
        id: Ds(),
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
      const s = Te(), n = s.storage;
      if (!n) return;
      let i = null;
      const r = $o(s.settings.providers);
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
      await Nt().loadAndPlay(i);
    },
    handleNewCues(e) {
      if (e.length === 0) return;
      const t = Te();
      let s = null;
      for (const n of e)
        for (const i of n.cues) {
          const r = {
            id: Ds(),
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
      const t = Te(), s = this.chatIndexer.scanMessage(
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
      const t = Te().storage;
      if (!t || !this.chatId) return;
      const s = this.list.filter((n) => n.source === "user" || n.source === "local");
      t.setMetadata(or, s);
    },
    getCursor() {
      return !this.chatIndexer || !this.chatId ? -1 : this.chatIndexer.getCursor(this.chatId);
    },
    setCursor(e) {
      if (!this.chatIndexer || !this.chatId) return;
      this.chatIndexer.setCursor(this.chatId, e);
      const s = Te().storage;
      s && s.setMetadata(rr, {
        chatId: this.chatId,
        lastScannedMessageId: e,
        updatedAt: Date.now()
      });
    }
  }
}), Nt = /* @__PURE__ */ vn("player", {
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
      const e = new Ec();
      this.audioEngine = e;
      const t = Nt();
      e.on("timeupdate", () => {
        if (!e) return;
        t.currentTime = e.currentTime, t.duration = e.duration;
        const s = ir(t.lyrics, e.currentTime), n = s ? t.lyrics.indexOf(s) : -1;
        t.currentLyricIndex = n;
      }), e.on("ended", () => {
        Yt().next();
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
      this.volume = e, this.audioEngine?.setVolume(e / 100), Te().setVolume(e);
    },
    updateLyrics(e) {
      this.lyrics = kc(e), this.currentLyricIndex = -1;
    },
    getActiveLyric() {
      return ir(this.lyrics, this.currentTime);
    },
    destroy() {
      this.audioEngine?.destroy(), this.audioEngine = null, this.isPlaying = !1, this.currentTime = 0, this.duration = 0, this.lyrics = [], this.currentLyricIndex = -1, this.currentTrack = null;
    }
  }
}), Nc = /* @__PURE__ */ vn("search", {
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
}), Fc = ["width", "height"], Uc = {
  key: 0,
  points: "6 3 20 12 6 21 6 3",
  fill: "currentColor",
  stroke: "none"
}, Hc = {
  key: 10,
  points: "6 9 12 15 18 9"
}, Vc = {
  key: 11,
  points: "18 15 12 9 6 15"
}, jc = {
  key: 15,
  points: "20 6 9 17 4 12"
}, Bc = /* @__PURE__ */ It({
  __name: "Icon",
  props: {
    name: {},
    size: {}
  },
  setup(e) {
    return (t, s) => (k(), O("svg", {
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
      e.name === "play" ? (k(), O("polygon", Uc)) : e.name === "pause" ? (k(), O(re, { key: 1 }, [
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
      ], 64)) : e.name === "prev" ? (k(), O(re, { key: 2 }, [
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
      ], 64)) : e.name === "next" ? (k(), O(re, { key: 3 }, [
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
      ], 64)) : e.name === "repeat" ? (k(), O(re, { key: 4 }, [
        s[6] || (s[6] = p("polyline", { points: "17 1 21 5 17 9" }, null, -1)),
        s[7] || (s[7] = p("path", { d: "M3 11V9a4 4 0 0 1 4-4h14" }, null, -1)),
        s[8] || (s[8] = p("polyline", { points: "7 23 3 19 7 15" }, null, -1)),
        s[9] || (s[9] = p("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" }, null, -1))
      ], 64)) : e.name === "repeat-one" ? (k(), O(re, { key: 5 }, [
        s[10] || (s[10] = $s('<polyline points="17 1 21 5 17 9" data-v-4bfc4099></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14" data-v-4bfc4099></path><polyline points="7 23 3 19 7 15" data-v-4bfc4099></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3" data-v-4bfc4099></path><text x="12" y="14" text-anchor="middle" font-size="8" fill="currentColor" stroke="none" font-weight="bold" data-v-4bfc4099>1</text>', 5))
      ], 64)) : e.name === "shuffle" ? (k(), O(re, { key: 6 }, [
        s[11] || (s[11] = $s('<polyline points="16 3 21 3 21 8" data-v-4bfc4099></polyline><line x1="4" y1="20" x2="21" y2="3" data-v-4bfc4099></line><polyline points="21 16 21 21 16 21" data-v-4bfc4099></polyline><line x1="15" y1="15" x2="21" y2="21" data-v-4bfc4099></line><line x1="4" y1="4" x2="9" y2="9" data-v-4bfc4099></line>', 5))
      ], 64)) : e.name === "search" ? (k(), O(re, { key: 7 }, [
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
      ], 64)) : e.name === "plus" ? (k(), O(re, { key: 8 }, [
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
      ], 64)) : e.name === "x" ? (k(), O(re, { key: 9 }, [
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
      ], 64)) : e.name === "chevron-down" ? (k(), O("polyline", Hc)) : e.name === "chevron-up" ? (k(), O("polyline", Vc)) : e.name === "music" ? (k(), O(re, { key: 12 }, [
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
      ], 64)) : e.name === "volume" ? (k(), O(re, { key: 13 }, [
        s[21] || (s[21] = p("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[22] || (s[22] = p("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1)),
        s[23] || (s[23] = p("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }, null, -1))
      ], 64)) : e.name === "volume-mute" ? (k(), O(re, { key: 14 }, [
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
      ], 64)) : e.name === "check" ? (k(), O("polyline", jc)) : e.name === "loader" ? (k(), O(re, { key: 16 }, [
        s[27] || (s[27] = $s('<line x1="12" y1="2" x2="12" y2="6" data-v-4bfc4099></line><line x1="12" y1="18" x2="12" y2="22" data-v-4bfc4099></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" data-v-4bfc4099></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" data-v-4bfc4099></line><line x1="2" y1="12" x2="6" y2="12" data-v-4bfc4099></line><line x1="18" y1="12" x2="22" y2="12" data-v-4bfc4099></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" data-v-4bfc4099></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" data-v-4bfc4099></line>', 8))
      ], 64)) : e.name === "list-music" ? (k(), O(re, { key: 17 }, [
        s[28] || (s[28] = $s('<path d="M3 12h11" data-v-4bfc4099></path><path d="M3 6h11" data-v-4bfc4099></path><path d="M3 18h7" data-v-4bfc4099></path><path d="M16 8v13" data-v-4bfc4099></path><circle cx="14" cy="21" r="2" data-v-4bfc4099></circle><path d="M16 8l5-2v3" data-v-4bfc4099></path>', 6))
      ], 64)) : Me("", !0)
    ], 8, Fc));
  }
}), Tt = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, i] of t)
    s[n] = i;
  return s;
}, ge = /* @__PURE__ */ Tt(Bc, [["__scopeId", "data-v-4bfc4099"]]), Wc = {
  key: 0,
  class: "stmp-mini stmp-mini-dock-desktop"
}, Kc = {
  key: 0,
  class: "stmp-mini-cover"
}, zc = ["src"], qc = {
  key: 1,
  class: "stmp-mini-cover stmp-mini-cover-placeholder"
}, Jc = {
  key: 1,
  class: "stmp-mini-text stmp-mini-dock-fallback"
}, Gc = { class: "stmp-mini-controls" }, Yc = ["aria-label"], Xc = ["aria-label"], Zc = {
  key: 1,
  class: "stmp-mini stmp-mini-dock-mobile"
}, Qc = {
  key: 0,
  class: "stmp-mini-cover"
}, eu = ["src"], tu = {
  key: 1,
  class: "stmp-mini-cover stmp-mini-cover-placeholder"
}, su = {
  key: 1,
  class: "stmp-mini-text stmp-mini-dock-fallback"
}, nu = { class: "stmp-mini-controls" }, iu = ["aria-label"], ru = ["aria-label"], ou = {
  key: 2,
  class: "stmp-mini stmp-mini-drag stmp-mini-drag-idle"
}, lu = { class: "stmp-mini-cover stmp-mini-cover-square" }, au = {
  key: 3,
  class: "stmp-mini stmp-mini-drag"
}, cu = ["aria-label"], uu = ["src"], fu = { class: "stmp-mini-cover-overlay" }, du = { class: "stmp-mini-drag-right" }, hu = { class: "stmp-mini-text stmp-mini-text-drag" }, pu = /* @__PURE__ */ It({
  __name: "CollapsedBar",
  props: {
    isDock: { type: Boolean },
    isMobile: { type: Boolean }
  },
  setup(e) {
    const t = Nt(), s = Yt(), n = e, i = /* @__PURE__ */ pe(!1), r = Pe(() => t.currentTrack?.cover || ""), o = Pe(() => !!t.currentTrack), l = Pe(() => {
      const M = t.currentTrack;
      if (!M) return "";
      const R = M.name, _ = M.artist || "";
      return _ ? `${R} - ${_}` : R;
    }), a = Pe(() => {
      const M = t.currentLyricIndex;
      return M < 0 || M >= t.lyrics.length ? "" : t.lyrics[M].text;
    }), f = Pe(() => {
      const M = t.currentLyricIndex;
      if (M < 0 || M >= t.lyrics.length) return 0;
      const R = t.lyrics[M];
      return R.next ? Math.max(500, (R.next.time - R.time) * 1e3) : 5e3;
    }), c = /* @__PURE__ */ pe(0), h = /* @__PURE__ */ pe([]), m = /* @__PURE__ */ pe(null);
    function v(M, R) {
      M && (h.value[R] = M);
    }
    async function I() {
      await Le();
      const M = t.currentLyricIndex, R = m.value;
      if (!R || M < 0) {
        c.value = 0;
        return;
      }
      const _ = h.value[M];
      if (!_) return;
      const W = _.offsetTop, X = _.offsetHeight, C = R.clientHeight;
      c.value = W - C / 2 + X / 2;
    }
    $e(() => t.currentLyricIndex, I), $e(() => t.lyrics, () => {
      h.value = [], I();
    });
    const T = /* @__PURE__ */ pe(null), D = /* @__PURE__ */ pe(null), A = /* @__PURE__ */ pe(0), y = /* @__PURE__ */ pe(0);
    function V() {
      const M = T.value, R = D.value;
      if (!M || !R) {
        A.value = 0;
        return;
      }
      const _ = M.scrollWidth - R.clientWidth;
      _ > 3 && f.value > 0 ? (y.value = Math.max(200, f.value - 200), requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          A.value = -_;
        });
      })) : A.value = 0;
    }
    $e(a, () => {
      y.value = 0, A.value = 0, Le(() => requestAnimationFrame(V));
    });
    function N() {
      i.value = !0;
    }
    $e(() => t.currentTrack?.url, () => {
      i.value = !1;
    });
    function q(M) {
      M.stopPropagation(), t.togglePlay();
    }
    function Z(M) {
      M.stopPropagation(), s.next();
    }
    return dn(() => {
      I(), requestAnimationFrame(V);
    }), (M, R) => n.isDock && !n.isMobile ? (k(), O("div", Wc, [
      r.value && !i.value ? (k(), O("div", Kc, [
        p("img", {
          src: r.value,
          alt: "",
          onError: N
        }, null, 40, zc)
      ])) : (k(), O("div", qc, [
        ne(ge, {
          name: "music",
          size: 14
        })
      ])),
      p("div", {
        ref_key: "dockWindowRef",
        ref: m,
        class: "stmp-mini-dock-text"
      }, [
        w(t).lyrics.length > 0 ? (k(), O("div", {
          key: 0,
          class: "stmp-mini-dock-scroll",
          style: $t({ transform: `translateY(-${c.value}px)` })
        }, [
          (k(!0), O(re, null, He(w(t).lyrics, (_, W) => (k(), O("span", {
            key: W,
            ref_for: !0,
            ref: (X) => v(X, W),
            class: ye(["stmp-mini-dock-line", { "stmp-mini-dock-line-active": W === w(t).currentLyricIndex }])
          }, te(_.text), 3))), 128))
        ], 4)) : (k(), O("span", Jc, te(l.value), 1))
      ], 512),
      p("div", Gc, [
        p("button", {
          class: "stmp-mini-btn",
          "aria-label": w(t).isPlaying ? w(j)("Pause") : w(j)("Play"),
          onClick: q
        }, [
          ne(ge, {
            name: w(t).isPlaying ? "pause" : "play",
            size: 14
          }, null, 8, ["name"])
        ], 8, Yc),
        p("button", {
          class: "stmp-mini-btn",
          "aria-label": w(j)("Next"),
          onClick: Z
        }, [
          ne(ge, {
            name: "next",
            size: 14
          })
        ], 8, Xc)
      ])
    ])) : n.isDock && n.isMobile ? (k(), O("div", Zc, [
      r.value && !i.value ? (k(), O("div", Qc, [
        p("img", {
          src: r.value,
          alt: "",
          onError: N
        }, null, 40, eu)
      ])) : (k(), O("div", tu, [
        ne(ge, {
          name: "music",
          size: 14
        })
      ])),
      p("div", {
        ref_key: "dockWindowRef",
        ref: m,
        class: "stmp-mini-dock-text"
      }, [
        w(t).lyrics.length > 0 ? (k(), O("div", {
          key: 0,
          class: "stmp-mini-dock-scroll",
          style: $t({ transform: `translateY(-${c.value}px)` })
        }, [
          (k(!0), O(re, null, He(w(t).lyrics, (_, W) => (k(), O("span", {
            key: W,
            ref_for: !0,
            ref: (X) => v(X, W),
            class: ye(["stmp-mini-dock-line", { "stmp-mini-dock-line-active": W === w(t).currentLyricIndex }])
          }, te(_.text), 3))), 128))
        ], 4)) : (k(), O("span", su, te(l.value), 1))
      ], 512),
      p("div", nu, [
        p("button", {
          class: "stmp-mini-btn",
          "aria-label": w(t).isPlaying ? w(j)("Pause") : w(j)("Play"),
          onClick: q
        }, [
          ne(ge, {
            name: w(t).isPlaying ? "pause" : "play",
            size: 16
          }, null, 8, ["name"])
        ], 8, iu),
        p("button", {
          class: "stmp-mini-btn",
          "aria-label": w(j)("Next"),
          onClick: Z
        }, [
          ne(ge, {
            name: "next",
            size: 16
          })
        ], 8, ru)
      ])
    ])) : o.value ? (k(), O("div", au, [
      p("button", {
        class: "stmp-mini-cover stmp-mini-cover-square",
        "aria-label": w(t).isPlaying ? w(j)("Pause") : w(j)("Play"),
        onClick: q
      }, [
        r.value && !i.value ? (k(), O("img", {
          key: 0,
          src: r.value,
          alt: "",
          onError: N
        }, null, 40, uu)) : (k(), pt(ge, {
          key: 1,
          name: "music",
          size: 20
        })),
        p("div", fu, [
          ne(ge, {
            name: w(t).isPlaying ? "pause" : "play",
            size: 18
          }, null, 8, ["name"])
        ])
      ], 8, cu),
      p("div", du, [
        p("span", hu, te(l.value), 1),
        p("div", {
          ref_key: "lyricContainerRef",
          ref: D,
          class: "stmp-mini-lyric"
        }, [
          p("span", {
            ref_key: "lyricScrollRef",
            ref: T,
            class: "stmp-mini-lyric-scroll",
            style: $t({
              transform: `translateX(${A.value}px)`,
              transition: y.value > 0 ? `transform ${y.value}ms linear` : "none"
            })
          }, te(a.value || " "), 5)
        ], 512)
      ])
    ])) : (k(), O("div", ou, [
      p("div", lu, [
        ne(ge, {
          name: "music",
          size: 20
        })
      ])
    ]));
  }
}), lr = /* @__PURE__ */ Tt(pu, [["__scopeId", "data-v-f2316395"]]), gu = { class: "stmp-playlist" }, mu = {
  key: 0,
  class: "stmp-upload-area"
}, vu = ["aria-label"], yu = {
  key: 1,
  class: "stmp-empty"
}, _u = { class: "stmp-group-label" }, bu = ["onClick"], xu = { class: "stmp-item-index" }, wu = { class: "stmp-item-info" }, Su = { class: "stmp-item-song" }, Cu = {
  key: 0,
  class: "stmp-item-artist"
}, Iu = ["onClick"], Tu = /* @__PURE__ */ It({
  __name: "PlaylistView",
  setup(e) {
    const t = Yt(), s = Te(), n = Pe(() => s.settings.providers.find((h) => h.id === "local")?.enabled ?? !1), i = /* @__PURE__ */ pe(null), r = () => {
      i.value?.click();
    }, o = async (h) => {
      const m = h.target;
      if (!m.files || !m.files[0]) return;
      const v = m.files[0], I = `stmp:audio:${Date.now()}-${v.name}`, T = s.storage;
      T && (await T.setBlob(I, v), t.addLocalFile(v.name, I)), m.value = "";
    }, l = Pe(() => {
      const h = {
        chat: [],
        user: [],
        local: []
      };
      return t.list.forEach((m, v) => {
        h[m.source] && h[m.source].push({ index: v, item: m });
      }), h;
    }), a = {
      chat: j("From Chat"),
      user: j("My List"),
      local: j("Local Files")
    };
    function f(h) {
      t.play(h);
    }
    function c(h) {
      t.removeItem(h);
    }
    return (h, m) => (k(), O("div", gu, [
      n.value ? (k(), O("div", mu, [
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
          "aria-label": w(j)("Add local file"),
          onClick: r
        }, " + " + te(w(j)("Add local file")), 9, vu)
      ])) : Me("", !0),
      w(t).isEmpty ? (k(), O("div", yu, te(w(j)("No Songs")), 1)) : (k(), O(re, { key: 2 }, He(["chat", "user", "local"], (v) => p("div", {
        key: v,
        class: "stmp-group"
      }, [
        l.value[v].length ? (k(), O(re, { key: 0 }, [
          p("div", _u, te(a[v]), 1),
          (k(!0), O(re, null, He(l.value[v], (I) => (k(), O("div", {
            key: I.item.id,
            class: ye(["stmp-item", { active: I.index === w(t).currentIndex }]),
            onClick: (T) => f(I.index)
          }, [
            p("span", xu, te(I.index + 1), 1),
            p("div", wu, [
              p("span", Su, te(I.item.song), 1),
              I.item.artist ? (k(), O("span", Cu, te(I.item.artist), 1)) : Me("", !0)
            ]),
            p("button", {
              class: "stmp-item-del",
              onClick: Bt((T) => c(I.index), ["stop"])
            }, [
              ne(ge, {
                name: "x",
                size: 14
              })
            ], 8, Iu)
          ], 10, bu))), 128))
        ], 64)) : Me("", !0)
      ])), 64))
    ]));
  }
}), Eu = /* @__PURE__ */ Tt(Tu, [["__scopeId", "data-v-a0435f62"]]), ku = { class: "stmp-search" }, Au = { class: "stmp-search-bar" }, Mu = ["placeholder"], Pu = ["disabled"], Ru = {
  key: 0,
  class: "stmp-search-error"
}, Lu = ["aria-label"], $u = {
  key: 1,
  class: "stmp-search-loading"
}, Ou = {
  key: 2,
  class: "stmp-search-empty"
}, Du = {
  key: 3,
  class: "stmp-search-hint"
}, Nu = {
  key: 4,
  class: "stmp-results"
}, Fu = ["onClick"], Uu = { class: "stmp-result-name" }, Hu = {
  key: 0,
  class: "stmp-result-artist"
}, Vu = ["aria-label", "onClick"], ju = /* @__PURE__ */ It({
  __name: "SearchView",
  setup(e) {
    const t = Nc(), s = Yt(), n = Te(), i = /* @__PURE__ */ pe(t.keyword), r = /* @__PURE__ */ pe(/* @__PURE__ */ new Set()), o = /* @__PURE__ */ pe(null);
    async function l() {
      t.setKeyword(i.value);
      const v = $o(n.settings.providers);
      await t.search(v);
    }
    const a = () => {
      l();
    };
    function f(v) {
      const I = v.provider + v.id;
      if (o.value === I) return;
      o.value = I;
      const T = s.list.length;
      s.addFromSearch(v);
      const D = s.list.length - 1;
      D >= T && s.play(D), setTimeout(() => {
        r.value.add(I), o.value = null;
      }, 600);
    }
    function c(v) {
      const I = v.provider + v.id;
      r.value.has(I) || (s.addFromSearch(v), r.value.add(I));
    }
    function h(v) {
      return r.value.has(v.provider + v.id);
    }
    function m(v) {
      return o.value === v.provider + v.id;
    }
    return (v, I) => (k(), O("div", ku, [
      p("div", Au, [
        _t(p("input", {
          "onUpdate:modelValue": I[0] || (I[0] = (T) => i.value = T),
          class: "stmp-search-input",
          placeholder: w(j)("Search Song..."),
          onKeydown: ko(l, ["enter"])
        }, null, 40, Mu), [
          [Vs, i.value]
        ]),
        p("button", {
          class: "stmp-icon-btn",
          disabled: w(t).isSearching,
          onClick: l
        }, [
          w(t).isSearching ? (k(), pt(ge, {
            key: 1,
            name: "loader",
            size: 16,
            class: "stmp-spin"
          })) : (k(), pt(ge, {
            key: 0,
            name: "search",
            size: 16
          }))
        ], 8, Pu)
      ]),
      w(t).error ? (k(), O("div", Ru, [
        p("span", null, te(w(t).error), 1),
        p("button", {
          class: "stmp-retry-btn",
          "aria-label": w(j)("Retry"),
          onClick: a
        }, te(w(j)("Retry")), 9, Lu)
      ])) : Me("", !0),
      w(t).isSearching ? (k(), O("div", $u, te(w(j)("Searching...")), 1)) : i.value && !w(t).results.length ? (k(), O("div", Ou, te(w(j)("No results")), 1)) : !i.value && !w(t).results.length ? (k(), O("div", Du, te(w(j)("Type a song name to search")), 1)) : Me("", !0),
      w(t).results.length ? (k(), O("div", Nu, [
        (k(!0), O(re, null, He(w(t).results, (T) => (k(), O("div", {
          key: T.provider + T.id,
          class: ye(["stmp-result", { "stmp-result-playing": m(T) }])
        }, [
          p("div", {
            class: "stmp-result-info",
            onClick: (D) => f(T)
          }, [
            p("span", Uu, te(T.name), 1),
            T.artist ? (k(), O("span", Hu, te(T.artist), 1)) : Me("", !0)
          ], 8, Fu),
          p("button", {
            class: ye(["stmp-icon-btn stmp-result-add", { added: h(T) }]),
            "aria-label": h(T) ? w(j)("Added") : w(j)("Add to list"),
            onClick: Bt((D) => c(T), ["stop"])
          }, [
            ne(ge, {
              name: h(T) ? "check" : "plus",
              size: 16
            }, null, 8, ["name"])
          ], 10, Vu)
        ], 2))), 128))
      ])) : Me("", !0)
    ]));
  }
}), Bu = /* @__PURE__ */ Tt(ju, [["__scopeId", "data-v-a8d156af"]]), Wu = { class: "stmp-panel" }, Ku = { class: "stmp-topbar stmp-drag-handle" }, zu = ["aria-label"], qu = { class: "stmp-cover-large" }, Ju = ["src"], Gu = {
  key: 1,
  class: "stmp-cover-placeholder"
}, Yu = { class: "stmp-track-name" }, Xu = { class: "stmp-track-artist" }, Zu = { class: "stmp-lyric-header" }, Qu = { class: "stmp-track-name" }, ef = { class: "stmp-track-artist" }, tf = {
  key: 0,
  class: "stmp-lyric-empty"
}, sf = { class: "stmp-progress" }, nf = ["value"], rf = { class: "stmp-time" }, of = { class: "stmp-controls" }, lf = { class: "stmp-ctrl-side stmp-search-side" }, af = ["aria-label"], cf = ["aria-label"], uf = ["aria-label"], ff = ["aria-label"], df = ["aria-label"], hf = ["aria-label"], pf = { class: "stmp-ctrl-side stmp-volume-side" }, gf = ["aria-label"], mf = ["value"], vf = {
  key: 0,
  class: "stmp-overlay"
}, yf = { class: "stmp-overlay-header" }, _f = { class: "stmp-overlay-title" }, bf = ["aria-label"], xf = { class: "stmp-overlay-body" }, wf = /* @__PURE__ */ It({
  __name: "PlayerPanel",
  emits: ["collapse"],
  setup(e) {
    const t = Nt(), s = Yt(), n = Te(), i = /* @__PURE__ */ pe("cover"), r = /* @__PURE__ */ pe(null), o = /* @__PURE__ */ pe(!1), l = /* @__PURE__ */ pe(!1);
    let a = null;
    const f = Pe(() => t.currentTrack?.cover || ""), c = () => {
      o.value = !0;
    };
    $e(
      () => t.currentTrack,
      () => {
        o.value = !1;
      }
    );
    const h = Pe(
      () => t.duration > 0 ? t.currentTime / t.duration * 100 : 0
    ), m = /* @__PURE__ */ pe(0), v = /* @__PURE__ */ pe([]), I = /* @__PURE__ */ pe(null);
    function T(C, B) {
      C && (v.value[B] = C);
    }
    async function D() {
      await Le();
      const C = t.currentLyricIndex, B = I.value;
      if (!B || C < 0) {
        m.value = 0;
        return;
      }
      const F = v.value[C];
      if (!F) return;
      const ie = F.offsetTop, ee = F.offsetHeight, z = B.clientHeight;
      m.value = ie - z / 2 + ee / 2;
    }
    $e(() => t.currentLyricIndex, D), $e(() => t.lyrics, () => {
      v.value = [], D();
    });
    function A(C) {
      const B = Math.floor(C / 60), F = Math.floor(C % 60);
      return B + ":" + F.toString().padStart(2, "0");
    }
    function y(C) {
      const B = C.target;
      t.seek(Number(B.value) / 100 * t.duration);
    }
    const V = ["list", "random", "single"], N = {
      list: "repeat",
      random: "shuffle",
      single: "repeat-one"
    };
    function q() {
      const C = n.settings.playMode, B = V.indexOf(C), F = V[(B + 1) % V.length];
      n.setPlayMode(F);
    }
    function Z(C) {
      const B = C.target;
      t.setVolume(Number(B.value));
    }
    function M() {
      a && clearTimeout(a), l.value = !0;
    }
    function R() {
      a = setTimeout(() => {
        l.value = !1;
      }, 300);
    }
    function _() {
      t.volume > 0 ? t.setVolume(0) : t.setVolume(65);
    }
    function W(C) {
      r.value === C ? r.value = null : r.value = C;
    }
    function X() {
      r.value = null;
    }
    return (C, B) => (k(), O("div", Wu, [
      p("div", Ku, [
        B[7] || (B[7] = p("div", { class: "stmp-topbar-spacer" }, null, -1)),
        p("button", {
          class: "stmp-icon-btn",
          "aria-label": w(j)("Collapse panel"),
          onClick: B[0] || (B[0] = Bt((F) => C.$emit("collapse"), ["stop"]))
        }, [
          ne(ge, {
            name: "chevron-down",
            size: 18
          })
        ], 8, zu)
      ]),
      p("div", {
        class: "stmp-display",
        onClick: B[1] || (B[1] = (F) => i.value = i.value === "cover" ? "lyric" : "cover")
      }, [
        p("div", {
          class: ye(["stmp-cover-mode", { hidden: i.value !== "cover" }])
        }, [
          p("div", qu, [
            f.value && !o.value ? (k(), O("img", {
              key: 0,
              src: f.value,
              alt: "cover",
              onError: c
            }, null, 40, Ju)) : (k(), O("div", Gu, [
              ne(ge, {
                name: "music",
                size: 48
              })
            ]))
          ]),
          p("div", Yu, te(w(t).currentTrack?.name || w(j)("No Song")), 1),
          p("div", Xu, te(w(t).currentTrack?.artist || " "), 1)
        ], 2),
        p("div", {
          class: ye(["stmp-lyric-mode", { hidden: i.value !== "lyric" }])
        }, [
          p("div", Zu, [
            p("div", Qu, te(w(t).currentTrack?.name || w(j)("No Song")), 1),
            p("div", ef, te(w(t).currentTrack?.artist || " "), 1)
          ]),
          p("div", {
            ref_key: "lyricWindowRef",
            ref: I,
            class: "stmp-lyric-window"
          }, [
            w(t).lyrics.length === 0 ? (k(), O("div", tf, [
              ne(ge, {
                name: "music",
                size: 18
              })
            ])) : (k(), O("div", {
              key: 1,
              class: "stmp-lyric-scroll",
              style: $t({ transform: `translateY(-${m.value}px)` })
            }, [
              (k(!0), O(re, null, He(w(t).lyrics, (F, ie) => (k(), O("div", {
                key: ie,
                ref_for: !0,
                ref: (ee) => T(ee, ie),
                class: ye(["stmp-lyric-line", { "stmp-lyric-active": ie === w(t).currentLyricIndex }])
              }, te(F.text), 3))), 128))
            ], 4))
          ], 512)
        ], 2)
      ]),
      p("div", sf, [
        p("input", {
          type: "range",
          min: "0",
          max: "100",
          step: "0.1",
          value: h.value,
          class: "stmp-range",
          onInput: y
        }, null, 40, nf),
        p("div", rf, [
          p("span", null, te(A(w(t).currentTime)), 1),
          p("span", null, te(A(w(t).duration)), 1)
        ])
      ]),
      p("div", of, [
        p("div", lf, [
          p("button", {
            class: ye(["stmp-ctrl-btn", { active: r.value === "search" }]),
            "aria-label": w(j)("Search"),
            onClick: B[2] || (B[2] = Bt((F) => W("search"), ["stop"]))
          }, [
            ne(ge, {
              name: "search",
              size: 18
            })
          ], 10, af)
        ]),
        p("button", {
          class: "stmp-ctrl-btn",
          "aria-label": w(j)("Toggle play mode"),
          onClick: q
        }, [
          ne(ge, {
            name: N[w(n).settings.playMode],
            size: 18
          }, null, 8, ["name"])
        ], 8, cf),
        p("button", {
          class: "stmp-ctrl-btn",
          "aria-label": w(j)("Previous"),
          onClick: B[3] || (B[3] = (F) => w(s).prev())
        }, [
          ne(ge, {
            name: "prev",
            size: 18
          })
        ], 8, uf),
        p("button", {
          class: "stmp-ctrl-btn stmp-play-btn",
          "aria-label": w(t).isPlaying ? w(j)("Pause") : w(j)("Play"),
          onClick: B[4] || (B[4] = (F) => w(t).togglePlay())
        }, [
          ne(ge, {
            name: w(t).isPlaying ? "pause" : "play",
            size: 24
          }, null, 8, ["name"])
        ], 8, ff),
        p("button", {
          class: "stmp-ctrl-btn",
          "aria-label": w(j)("Next"),
          onClick: B[5] || (B[5] = (F) => w(s).next())
        }, [
          ne(ge, {
            name: "next",
            size: 18
          })
        ], 8, df),
        p("button", {
          class: ye(["stmp-ctrl-btn", { active: r.value === "list" }]),
          "aria-label": w(j)("Playlist"),
          onClick: B[6] || (B[6] = Bt((F) => W("list"), ["stop"]))
        }, [
          ne(ge, {
            name: "list-music",
            size: 18
          })
        ], 10, hf),
        p("div", pf, [
          p("div", {
            class: "stmp-volume-container",
            onMouseenter: M,
            onMouseleave: R
          }, [
            p("button", {
              class: "stmp-ctrl-btn",
              "aria-label": w(j)("Mute / Unmute"),
              onClick: _
            }, [
              ne(ge, {
                name: w(t).volume === 0 ? "volume-mute" : "volume",
                size: 18
              }, null, 8, ["name"])
            ], 8, gf),
            p("div", {
              class: ye(["stmp-volume-popup", { show: l.value }])
            }, [
              p("input", {
                type: "range",
                min: "0",
                max: "100",
                value: w(t).volume,
                class: "stmp-volume-vertical",
                orient: "vertical",
                onInput: Z
              }, null, 40, mf)
            ], 2)
          ], 32)
        ])
      ]),
      ne(Wa, { name: "stmp-overlay" }, {
        default: Kr(() => [
          r.value ? (k(), O("div", vf, [
            p("div", yf, [
              p("span", _f, te(r.value === "list" ? w(j)("Playlist") : w(j)("Search")), 1),
              p("button", {
                class: "stmp-overlay-close",
                "aria-label": w(j)("Close"),
                onClick: Bt(X, ["stop"])
              }, [
                ne(ge, {
                  name: "x",
                  size: 16
                })
              ], 8, bf)
            ]),
            p("div", xf, [
              r.value === "list" ? (k(), pt(Eu, { key: 0 })) : (k(), pt(Bu, { key: 1 }))
            ])
          ])) : Me("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), ar = /* @__PURE__ */ Tt(wf, [["__scopeId", "data-v-b6793b97"]]), Sf = {
  key: 1,
  class: "stmp-inline-expanded"
}, Cf = /* @__PURE__ */ It({
  __name: "App",
  setup(e) {
    const t = Te(), s = Nt(), n = /* @__PURE__ */ pe(!1), i = /* @__PURE__ */ pe(null);
    let r = null;
    const o = Pe(() => t.settings.widgetMode === "dock"), l = Pe(() => t.settings.widgetMode === "inline"), a = Pe(() => t.settings.widgetMode === "hidden"), f = /* @__PURE__ */ pe(window.innerWidth <= 768), c = /* @__PURE__ */ pe(!1), h = (F) => {
      F.key === "Escape" && (n.value = !1), F.key === " " && F.target === document.body && (F.preventDefault(), s.togglePlay());
    };
    let m = 0, v = 0, I = 0, T = 0, D = !1, A = !1, y = null, V = null;
    function N(F) {
      if (o.value) return;
      const ie = F.target;
      if (ie.closest("input, .stmp-result, .stmp-item, .stmp-upload-btn, .stmp-search-input, .stmp-controls, .stmp-lyrics, .stmp-overlay, .stmp-display, .stmp-overlay-close") || n.value && (!ie.closest(".stmp-drag-handle") || ie.closest("button")) || !n.value && ie.closest("button"))
        return;
      const ee = i.value?.getBoundingClientRect();
      ee && (m = F.clientX, v = F.clientY, I = ee.left, T = ee.top, D = !1, A = !0, i.value && (i.value.style.left = ee.left + "px", i.value.style.top = ee.top + "px", i.value.style.right = "auto", i.value.style.bottom = "auto"), y = q, V = Z, document.addEventListener("pointermove", y), document.addEventListener("pointerup", V), F.preventDefault());
    }
    function q(F) {
      if (!i.value || !A) return;
      const ie = F.clientX - m, ee = F.clientY - v;
      (Math.abs(ie) > 3 || Math.abs(ee) > 3) && (D = !0);
      let z = I + ie, se = T + ee;
      const We = i.value.offsetWidth || 60, vt = i.value.offsetHeight || 40, rt = window.innerWidth - We, Ne = window.innerHeight - vt;
      z = Math.max(0, Math.min(z, rt)), se = Math.max(0, Math.min(se, Ne)), i.value.style.left = z + "px", i.value.style.top = se + "px";
    }
    function Z() {
      if (A = !1, y && document.removeEventListener("pointermove", y), V && document.removeEventListener("pointerup", V), y = null, V = null, !D) {
        C();
        return;
      }
      if (i.value) {
        const F = i.value.getBoundingClientRect();
        t.setPosition({ x: F.left, y: F.top }), n.value && Le(() => M());
      }
    }
    function M() {
      if (!i.value) return;
      const F = i.value.getBoundingClientRect(), ie = i.value.offsetWidth, ee = i.value.offsetHeight;
      let z = F.left, se = F.top;
      z + ie > window.innerWidth && (z = window.innerWidth - ie), se + ee > window.innerHeight && (se = window.innerHeight - ee), z < 0 && (z = 0), se < 0 && (se = 0), i.value.style.left = z + "px", i.value.style.top = se + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", t.setPosition({ x: z, y: se });
    }
    function R() {
      if (!i.value || !o.value) return;
      const F = document.querySelector("#send_form");
      if (!F) return;
      const ie = F.getBoundingClientRect(), ee = i.value.offsetHeight || 38, z = Math.max(80, ie.top - 8);
      i.value.style.maxHeight = z + "px";
      let se = ie.top - Math.min(ee, z);
      if (se < 4 && (se = 4), window.innerWidth <= 768)
        i.value.style.left = ie.left + "px", i.value.style.width = ie.width + "px";
      else {
        const We = t.settings.dockAlign === "right", vt = i.value.offsetWidth;
        We ? i.value.style.left = ie.right - vt + "px" : i.value.style.left = ie.left + "px", i.value.style.width = "";
      }
      i.value.style.top = se + "px", i.value.style.right = "auto", i.value.style.bottom = "auto";
    }
    function _() {
      if (!i.value || o.value) return;
      const F = t.settings.position;
      F ? (i.value.style.left = F.x + "px", i.value.style.top = F.y + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", window.innerWidth <= 768 && Le(() => M())) : (i.value.style.right = "16px", i.value.style.top = "16px", i.value.style.left = "auto", i.value.style.bottom = "auto");
    }
    function W(F) {
      if (o.value && !n.value) {
        if (F.target.closest("button, input")) return;
        C();
        return;
      }
      !o.value && !n.value && !s.currentTrack && C();
    }
    function X(F) {
      n.value || F.target.closest("button, input") || C();
    }
    function C() {
      n.value = !n.value, Le(() => {
        o.value ? R() : l.value || t.settings.position && M();
      });
    }
    $e(() => t.settings.widgetMode, (F) => {
      n.value = !1, i.value && (i.value.style.width = "", i.value.style.left = "", i.value.style.top = "", i.value.style.right = "", i.value.style.bottom = "", i.value.style.maxHeight = ""), F === "inline" && (c.value = !!document.querySelector("#send_form")), Le(() => {
        F === "dock" ? R() : F === "drag" && _();
      });
    }), $e(() => t.settings.dockAlign, () => {
      o.value && Le(() => R());
    }), dn(() => {
      c.value = !!document.querySelector("#send_form"), Le(() => {
        o.value ? R() : l.value || _();
      }), i.value && typeof ResizeObserver < "u" && (r = new ResizeObserver(() => {
        o.value && R();
      }), r.observe(i.value)), window.addEventListener("resize", B), window.addEventListener("keydown", h);
    });
    function B() {
      f.value = window.innerWidth <= 768, o.value ? Le(() => R()) : l.value || Le(() => M());
    }
    return oi(() => {
      Z(), r && (r.disconnect(), r = null), window.removeEventListener("resize", B), window.removeEventListener("keydown", h);
    }), (F, ie) => l.value ? (k(), O(re, { key: 0 }, [
      c.value ? (k(), pt(Nl, {
        key: 0,
        to: "#send_form"
      }, [
        n.value ? (k(), O("div", Sf, [
          ne(ar, { onCollapse: C })
        ])) : (k(), O("div", {
          key: 0,
          class: "stmp-inline-bar",
          onClick: X
        }, [
          ne(lr, {
            "is-dock": !0,
            "is-mobile": !0
          })
        ]))
      ])) : Me("", !0)
    ], 64)) : a.value ? Me("", !0) : (k(), O("div", {
      key: 1,
      ref_key: "widgetRef",
      ref: i,
      class: ye(["stmp-widget", {
        "stmp-expanded": n.value,
        "stmp-collapsed": !n.value,
        "stmp-dock": o.value
      }]),
      onPointerdown: N,
      onClick: W
    }, [
      n.value ? (k(), pt(ar, {
        key: 1,
        onCollapse: C
      })) : (k(), pt(lr, {
        key: 0,
        "is-dock": o.value,
        "is-mobile": f.value
      }, null, 8, ["is-dock", "is-mobile"]))
    ], 34));
  }
}), If = /* @__PURE__ */ Tt(Cf, [["__scopeId", "data-v-5cecaf3f"]]), Tf = { class: "stmp-switch-row" }, Ef = {
  key: 0,
  class: "stmp-switch-label"
}, kf = { class: "stmp-switch" }, Af = ["checked"], Mf = /* @__PURE__ */ It({
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
    return (i, r) => (k(), O("label", Tf, [
      e.label ? (k(), O("span", Ef, te(e.label), 1)) : Me("", !0),
      p("span", kf, [
        p("input", {
          type: "checkbox",
          checked: e.modelValue,
          onChange: n
        }, null, 40, Af),
        r[0] || (r[0] = p("span", { class: "stmp-switch-track" }, [
          p("span", { class: "stmp-switch-thumb" })
        ], -1))
      ])
    ]));
  }
}), cr = /* @__PURE__ */ Tt(Mf, [["__scopeId", "data-v-d86a29bd"]]), Pf = { class: "stmp-settings" }, Rf = { class: "stmp-tab-bar" }, Lf = ["onClick"], $f = { class: "stmp-tab-content" }, Of = { class: "stmp-tab-panel" }, Df = { class: "stmp-setting-group" }, Nf = { class: "stmp-setting-label" }, Ff = { class: "stmp-mode-toggle" }, Uf = ["onClick"], Hf = {
  key: 0,
  class: "stmp-setting-group"
}, Vf = { class: "stmp-setting-label" }, jf = { class: "stmp-mode-toggle" }, Bf = ["onClick"], Wf = { class: "stmp-setting-group" }, Kf = { class: "stmp-setting-label" }, zf = ["value"], qf = { class: "stmp-setting-group" }, Jf = {
  class: "stmp-setting-label",
  for: "stmp-playmode"
}, Gf = ["value"], Yf = ["value"], Xf = { class: "stmp-tab-panel" }, Zf = {
  key: 0,
  class: "stmp-provider-fields"
}, Qf = ["onUpdate:modelValue", "placeholder"], ed = ["onUpdate:modelValue", "placeholder"], td = { class: "stmp-tab-panel" }, sd = { class: "stmp-setting-group" }, nd = { class: "stmp-setting-label" }, id = { class: "stmp-rules" }, rd = ["onClick"], od = { class: "stmp-rule-add" }, ld = ["placeholder"], ad = { class: "stmp-tab-panel" }, cd = { class: "stmp-data-btns" }, ud = /* @__PURE__ */ It({
  __name: "SettingsView",
  setup(e) {
    const t = Te(), s = /* @__PURE__ */ pe("playback"), n = [
      { id: "playback", label: j("Playback"), icon: "fa-solid fa-music" },
      { id: "providers", label: j("Providers"), icon: "fa-solid fa-cloud" },
      { id: "cue", label: j("AI Cue"), icon: "fa-solid fa-wand-magic-sparkles" },
      { id: "data", label: j("Data"), icon: "fa-solid fa-database" }
    ], i = [
      { value: "list", label: j("List Loop") },
      { value: "random", label: j("Random") },
      { value: "single", label: j("Single Loop") }
    ], r = [
      { value: "dock", label: j("Dock"), icon: "fa-solid fa-grip-lines" },
      { value: "drag", label: j("Drag"), icon: "fa-solid fa-up-down-left-right" },
      { value: "inline", label: j("Inline"), icon: "fa-solid fa-puzzle-piece" },
      { value: "hidden", label: j("Hidden"), icon: "fa-solid fa-eye-slash" }
    ], o = [
      { value: "left", label: j("Left"), icon: "fa-solid fa-align-left" },
      { value: "right", label: j("Right"), icon: "fa-solid fa-align-right" }
    ];
    function l(D) {
      const A = D.target;
      t.setVolume(Number(A.value));
    }
    function a(D) {
      const A = D.target;
      t.setPlayMode(A.value);
    }
    const f = {
      netease: j("NetEase"),
      local: j("Local Files"),
      custom: j("Custom API")
    };
    function c(D) {
      const A = t.settings.providers.find((y) => y.id === D);
      A && (A.enabled = !A.enabled, t.save());
    }
    const h = /* @__PURE__ */ pe("");
    function m() {
      const D = h.value.trim();
      D && (t.addCustomCueRule(D), h.value = "");
    }
    function v(D) {
      t.removeCustomCueRule(D);
    }
    const I = () => {
      const D = JSON.stringify(t.settings, null, 2), A = new Blob([D], { type: "application/json" }), y = URL.createObjectURL(A), V = document.createElement("a");
      V.href = y, V.download = "st-music-player-settings.json", V.click(), URL.revokeObjectURL(y);
    }, T = () => {
      const D = document.createElement("input");
      D.type = "file", D.accept = ".json", D.onchange = async (A) => {
        const y = A.target.files?.[0];
        if (!y) return;
        const V = await y.text();
        try {
          const N = JSON.parse(V);
          if (typeof N != "object" || N === null) throw new Error("Not an object");
          const q = ["volume", "playMode", "position", "widgetMode", "autoPlayOnNewCue", "providers", "customCueRules"], Z = {};
          for (const M of q)
            M in N && (Z[M] = N[M]);
          if (typeof Z.volume != "number" || Z.volume < 0 || Z.volume > 100)
            throw new Error("Invalid volume");
          if (typeof Z.playMode != "string" || !["list", "random", "single"].includes(Z.playMode))
            throw new Error("Invalid playMode");
          if (Z.providers && !Array.isArray(Z.providers))
            throw new Error("Invalid providers");
          if (Z.customCueRules && !Array.isArray(Z.customCueRules))
            throw new Error("Invalid customCueRules");
          Object.assign(t.settings, Z), t.save(), toastr.success(j("Data imported"));
        } catch (N) {
          console.error("Import failed", N), toastr.error(j("Import failed") + ": " + (N instanceof Error ? N.message : j("Invalid JSON")));
        }
      }, D.click();
    };
    return (D, A) => (k(), O("div", Pf, [
      p("div", Rf, [
        (k(), O(re, null, He(n, (y) => p("div", {
          key: y.id,
          class: ye(["stmp-tab", { active: s.value === y.id }]),
          onClick: (V) => s.value = y.id
        }, [
          p("i", {
            class: ye(y.icon)
          }, null, 2),
          p("span", null, te(y.label), 1)
        ], 10, Lf)), 64))
      ]),
      p("div", $f, [
        _t(p("div", Of, [
          p("div", Df, [
            p("label", Nf, te(w(j)("Widget Mode")), 1),
            p("div", Ff, [
              (k(), O(re, null, He(r, (y) => p("div", {
                key: y.value,
                class: ye(["menu_button menu_button_icon stmp-mode-btn", { toggled: w(t).settings.widgetMode === y.value }]),
                onClick: (V) => w(t).setWidgetMode(y.value)
              }, [
                p("i", {
                  class: ye(y.icon)
                }, null, 2),
                p("span", null, te(y.label), 1)
              ], 10, Uf)), 64))
            ])
          ]),
          w(t).settings.widgetMode === "dock" ? (k(), O("div", Hf, [
            p("label", Vf, te(w(j)("Dock Alignment")), 1),
            p("div", jf, [
              (k(), O(re, null, He(o, (y) => p("div", {
                key: y.value,
                class: ye(["menu_button menu_button_icon stmp-mode-btn", { toggled: w(t).settings.dockAlign === y.value }]),
                onClick: (V) => w(t).setDockAlign(y.value)
              }, [
                p("i", {
                  class: ye(y.icon)
                }, null, 2),
                p("span", null, te(y.label), 1)
              ], 10, Bf)), 64))
            ])
          ])) : Me("", !0),
          p("div", Wf, [
            p("label", Kf, te(w(j)("Default Volume")) + ": " + te(w(t).settings.volume), 1),
            p("input", {
              type: "range",
              min: "0",
              max: "100",
              value: w(t).settings.volume,
              onInput: l
            }, null, 40, zf)
          ]),
          p("div", qf, [
            p("label", Jf, te(w(j)("Default Play Mode")), 1),
            p("select", {
              id: "stmp-playmode",
              class: "text_pole",
              value: w(t).settings.playMode,
              onChange: a
            }, [
              (k(), O(re, null, He(i, (y) => p("option", {
                key: y.value,
                value: y.value
              }, te(y.label), 9, Yf)), 64))
            ], 40, Gf)
          ]),
          ne(cr, {
            "model-value": w(t).settings.autoPlayOnNewCue,
            label: w(j)("Auto-play on new cue"),
            "onUpdate:modelValue": A[0] || (A[0] = (y) => {
              w(t).settings.autoPlayOnNewCue = y, w(t).save();
            })
          }, null, 8, ["model-value", "label"])
        ], 512), [
          [Os, s.value === "playback"]
        ]),
        _t(p("div", Xf, [
          (k(!0), O(re, null, He(w(t).settings.providers, (y) => (k(), O("div", {
            key: y.id,
            class: "stmp-provider-card"
          }, [
            ne(cr, {
              "model-value": y.enabled,
              label: f[y.id] || y.id,
              "onUpdate:modelValue": () => c(y.id)
            }, null, 8, ["model-value", "label", "onUpdate:modelValue"]),
            y.id === "custom" && y.enabled ? (k(), O("div", Zf, [
              _t(p("input", {
                class: "text_pole",
                "onUpdate:modelValue": (V) => y.config.searchURL = V,
                placeholder: w(j)("Search URL"),
                onChange: A[1] || (A[1] = (V) => w(t).save())
              }, null, 40, Qf), [
                [Vs, y.config.searchURL]
              ]),
              _t(p("input", {
                class: "text_pole",
                "onUpdate:modelValue": (V) => y.config.resolveURL = V,
                placeholder: w(j)("Resolve URL"),
                onChange: A[2] || (A[2] = (V) => w(t).save())
              }, null, 40, ed), [
                [Vs, y.config.resolveURL]
              ])
            ])) : Me("", !0)
          ]))), 128))
        ], 512), [
          [Os, s.value === "providers"]
        ]),
        _t(p("div", td, [
          p("div", sd, [
            p("label", nd, te(w(j)("Custom Cue Rules (Regex)")), 1),
            p("div", id, [
              (k(!0), O(re, null, He(w(t).settings.customCueRules, (y, V) => (k(), O("div", {
                key: V,
                class: "stmp-rule"
              }, [
                p("code", null, te(y), 1),
                p("div", {
                  class: "menu_button menu_button_icon stmp-rule-del",
                  onClick: (N) => v(V)
                }, [...A[4] || (A[4] = [
                  p("i", { class: "fa-solid fa-xmark" }, null, -1)
                ])], 8, rd)
              ]))), 128))
            ]),
            p("div", od, [
              _t(p("input", {
                "onUpdate:modelValue": A[3] || (A[3] = (y) => h.value = y),
                class: "text_pole",
                placeholder: w(j)("Add regex rule..."),
                onKeydown: ko(m, ["enter"])
              }, null, 40, ld), [
                [Vs, h.value]
              ]),
              p("div", {
                class: "menu_button menu_button_icon stmp-rule-add-btn",
                onClick: m
              }, [...A[5] || (A[5] = [
                p("i", { class: "fa-solid fa-plus" }, null, -1)
              ])])
            ])
          ])
        ], 512), [
          [Os, s.value === "cue"]
        ]),
        _t(p("div", ad, [
          p("div", cd, [
            p("div", {
              class: "menu_button menu_button_icon stmp-data-btn",
              onClick: I
            }, [
              A[6] || (A[6] = p("i", { class: "fa-solid fa-file-export" }, null, -1)),
              p("span", null, te(w(j)("Export data")), 1)
            ]),
            p("div", {
              class: "menu_button menu_button_icon stmp-data-btn",
              onClick: T
            }, [
              A[7] || (A[7] = p("i", { class: "fa-solid fa-file-import" }, null, -1)),
              p("span", null, te(w(j)("Import data")), 1)
            ])
          ])
        ], 512), [
          [Os, s.value === "data"]
        ])
      ])
    ]));
  }
}), fd = /* @__PURE__ */ Tt(ud, [["__scopeId", "data-v-0a41a45c"]]);
class dd {
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
      messageId: Ns(r)
    })), i(n.MESSAGE_UPDATED, "message-updated", (r) => ({
      messageId: Ns(r)
    })), i(n.MESSAGE_DELETED, "message-deleted", (r) => ({
      messageId: Ns(r)
    })), i(n.MESSAGE_SWIPED, "message-swiped", (r) => ({
      messageId: Ns(r)
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
function Ns(e) {
  if (e == null) return;
  const t = typeof e == "number" ? e : parseInt(String(e), 10);
  return Number.isFinite(t) ? t : void 0;
}
function hd() {
  return new dd();
}
const pd = [
  /<bgm>当前bgm[:：](.+?) - (.+?)<\/bgm>/g,
  /<bgm>当前bgm[:：](.+?)<\/bgm>/g,
  /<bgm>(.+?) - (.+?)<\/bgm>/g,
  /<bgm>(.+?)<\/bgm>/g,
  /【BGM】(.+?)(?: - (.+?))?【\/BGM】/g,
  /\[music\](.+?)(?: - (.+?))?\[\/music\]/g
];
function ur(e, t) {
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
function fr(e, t = []) {
  const s = /* @__PURE__ */ new Map(), n = (i) => {
    s.has(i.index) || s.set(i.index, i);
  };
  for (const i of pd)
    for (const r of ur(i, e)) n(r);
  for (const i of t)
    try {
      const r = new RegExp(i, "g");
      for (const o of ur(r, e)) n(o);
    } catch {
    }
  return [...s.values()].sort((i, r) => i.index - r.index).map((i) => i.cue);
}
class gd {
  constructor(t) {
    this.cursors = /* @__PURE__ */ new Map(), this.getChatMessage = t;
  }
  scanIncremental(t, s, n, i = []) {
    const r = [];
    for (let o = s; o <= n; o++) {
      const l = this.getChatMessage(o);
      if (l === void 0) continue;
      const a = fr(l, i);
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
    const r = fr(i, n), o = r.length > 0 ? r.at(-1) : null;
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
let qt = null, ct = null, vs = null, ys = null, Jt = null, Qs = null;
const md = `
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
function vd() {
  const e = $("#extensions_settings2");
  if (!e || !e.length || (e.append(md), ys = e.children(".inline-drawer").last()[0] ?? null, !ys)) return;
  const t = ys.querySelector("#stmp-settings-mount");
  t && Qs && (Jt = Ao(fd), Jt.use(Qs), Jt.mount(t));
}
function yd() {
  Jt && (Jt.unmount(), Jt = null), ys?.remove(), ys = null;
}
function _d(e, t, s) {
  ct = hd(), ct.on("chat-changed", () => {
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
function bd(e, t, s) {
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
async function Sd() {
  try {
    const e = document.createElement("div");
    e.id = "st-music-player-root", document.documentElement.appendChild(e);
    const t = bc();
    Qs = t, qt = Ao(If), qt.use(t), qt.mount(e);
    const s = Te(), n = Mc();
    s.init(n);
    const i = Nt();
    i.init(), i.setVolume(s.settings.volume);
    const r = new gd((a) => SillyTavern.getContext().chat[a]?.mes), o = Yt();
    o.init(r), vd();
    const l = SillyTavern.getContext();
    vs = () => {
      _d(r, o, s), bd(r, o, s);
    }, l.eventSource.on(l.event_types.APP_READY, vs), console.log("[ST-Music-Player] 播放器加载完成");
  } catch (e) {
    console.error("[ST-Music-Player] init failed:", e);
  }
}
function Oo() {
  if (vs) {
    try {
      const t = SillyTavern.getContext();
      t.eventSource.removeListener(t.event_types.APP_READY, vs);
    } catch {
    }
    vs = null;
  }
  if (ct?.stop(), ct = null, qt) {
    try {
      Nt().destroy();
    } catch {
    }
    qt.unmount(), qt = null;
  }
  const e = document.getElementById("st-music-player-root");
  e && e.remove(), yd(), Qs = null;
}
function Cd() {
  Oo();
}
async function xd() {
  try {
    const e = SillyTavern.getContext();
    delete e.extensionSettings[ms], e.saveSettingsDebounced();
  } catch (e) {
    console.error("[ST-Music-Player] clean: failed to delete settings:", e);
  }
  try {
    const e = SillyTavern.libs?.localforage;
    if (e && typeof e.keys == "function") {
      const t = await e.keys();
      await Promise.all(
        t.filter((s) => s.startsWith(ms) || s.startsWith("stmp:")).map((s) => e.removeItem(s))
      );
    }
  } catch (e) {
    console.error("[ST-Music-Player] clean: failed to clear localforage:", e);
  }
}
async function Id() {
  await xd(), Oo();
}
export {
  xd as clean,
  Id as delete,
  Oo as destroy,
  Cd as disable,
  Sd as init
};
