var Fl = Object.defineProperty;
var Bl = (e, t, s) => t in e ? Fl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var ne = (e, t, s) => Bl(e, typeof t != "symbol" ? t + "" : t, s);
/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function ei(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const Te = {}, _s = [], Mt = () => {
}, Ir = () => !1, zn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Gn = (e) => e.startsWith("onUpdate:"), Fe = Object.assign, ti = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Ul = Object.prototype.hasOwnProperty, _e = (e, t) => Ul.call(e, t), te = Array.isArray, bs = (e) => nn(e) === "[object Map]", Rr = (e) => nn(e) === "[object Set]", ki = (e) => nn(e) === "[object Date]", de = (e) => typeof e == "function", Ee = (e) => typeof e == "string", ut = (e) => typeof e == "symbol", be = (e) => e !== null && typeof e == "object", Or = (e) => (be(e) || de(e)) && de(e.then) && de(e.catch), Lr = Object.prototype.toString, nn = (e) => Lr.call(e), jl = (e) => nn(e).slice(8, -1), $r = (e) => nn(e) === "[object Object]", Kn = (e) => Ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ns = /* @__PURE__ */ ei(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Yn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Hl = /-\w/g, ht = Yn(
  (e) => e.replace(Hl, (t) => t.slice(1).toUpperCase())
), Vl = /\B([A-Z])/g, qt = Yn(
  (e) => e.replace(Vl, "-$1").toLowerCase()
), Dr = Yn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ao = Yn(
  (e) => e ? `on${Dr(e)}` : ""
), At = (e, t) => !Object.is(e, t), wn = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, Nr = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, si = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Wl = (e) => {
  const t = Ee(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let xi;
const Jn = () => xi || (xi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Yt(e) {
  if (te(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], o = Ee(n) ? Yl(n) : Yt(n);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (Ee(e) || be(e))
    return e;
}
const zl = /;(?![^(]*\))/g, Gl = /:([^]+)/, Kl = /\/\*[^]*?\*\//g;
function Yl(e) {
  const t = {};
  return e.replace(Kl, "").split(zl).forEach((s) => {
    if (s) {
      const n = s.split(Gl);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function he(e) {
  let t = "";
  if (Ee(e))
    t = e;
  else if (te(e))
    for (let s = 0; s < e.length; s++) {
      const n = he(e[s]);
      n && (t += n + " ");
    }
  else if (be(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const Jl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ql = /* @__PURE__ */ ei(Jl);
function Fr(e) {
  return !!e || e === "";
}
function Xl(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = ni(e[n], t[n]);
  return s;
}
function ni(e, t) {
  if (e === t) return !0;
  let s = ki(e), n = ki(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = ut(e), n = ut(t), s || n)
    return e === t;
  if (s = te(e), n = te(t), s || n)
    return s && n ? Xl(e, t) : !1;
  if (s = be(e), n = be(t), s || n) {
    if (!s || !n)
      return !1;
    const o = Object.keys(e).length, i = Object.keys(t).length;
    if (o !== i)
      return !1;
    for (const r in e) {
      const a = e.hasOwnProperty(r), l = t.hasOwnProperty(r);
      if (a && !l || !a && l || !ni(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Br = (e) => !!(e && e.__v_isRef === !0), E = (e) => Ee(e) ? e : e == null ? "" : te(e) || be(e) && (e.toString === Lr || !de(e.toString)) ? Br(e) ? E(e.value) : JSON.stringify(e, Ur, 2) : String(e), Ur = (e, t) => Br(t) ? Ur(e, t.value) : bs(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, o], i) => (s[lo(n, i) + " =>"] = o, s),
    {}
  )
} : Rr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => lo(s))
} : ut(t) ? lo(t) : be(t) && !te(t) && !$r(t) ? String(t) : t, lo = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ut(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ne;
class jr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Ne && (Ne.active ? (this.parent = Ne, this.index = (Ne.scopes || (Ne.scopes = [])).push(
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
      const s = Ne;
      try {
        return Ne = this, t();
      } finally {
        Ne = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ne, Ne = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Ne === this)
        Ne = this.prevScope;
      else {
        let t = Ne;
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
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Hr(e) {
  return new jr(e);
}
function Vr() {
  return Ne;
}
function Zl(e, t = !1) {
  Ne && Ne.cleanups.push(e);
}
let Me;
const co = /* @__PURE__ */ new WeakSet();
class Wr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ne && (Ne.active ? Ne.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, co.has(this) && (co.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Gr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Si(this), Kr(this);
    const t = Me, s = gt;
    Me = this, gt = !0;
    try {
      return this.fn();
    } finally {
      Yr(this), Me = t, gt = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ri(t);
      this.deps = this.depsTail = void 0, Si(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? co.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Mo(this) && this.run();
  }
  get dirty() {
    return Mo(this);
  }
}
let zr = 0, Fs, Bs;
function Gr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Bs, Bs = e;
    return;
  }
  e.next = Fs, Fs = e;
}
function oi() {
  zr++;
}
function ii() {
  if (--zr > 0)
    return;
  if (Bs) {
    let t = Bs;
    for (Bs = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; Fs; ) {
    let t = Fs;
    for (Fs = void 0; t; ) {
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
function Kr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Yr(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const o = n.prevDep;
    n.version === -1 ? (n === s && (s = o), ri(n), Ql(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = o;
  }
  e.deps = t, e.depsTail = s;
}
function Mo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Jr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Jr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === qs) || (e.globalVersion = qs, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Mo(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = Me, n = gt;
  Me = e, gt = !0;
  try {
    Kr(e);
    const o = e.fn(e._value);
    (t.version === 0 || At(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Me = s, gt = n, Yr(e), e.flags &= -3;
  }
}
function ri(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: o } = e;
  if (n && (n.nextSub = o, e.prevSub = void 0), o && (o.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let i = s.computed.deps; i; i = i.nextDep)
      ri(i, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function Ql(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let gt = !0;
const qr = [];
function Et() {
  qr.push(gt), gt = !1;
}
function Pt() {
  const e = qr.pop();
  gt = e === void 0 ? !0 : e;
}
function Si(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = Me;
    Me = void 0;
    try {
      t();
    } finally {
      Me = s;
    }
  }
}
let qs = 0;
class ec {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ai {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Me || !gt || Me === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== Me)
      s = this.activeLink = new ec(Me, this), Me.deps ? (s.prevDep = Me.depsTail, Me.depsTail.nextDep = s, Me.depsTail = s) : Me.deps = Me.depsTail = s, Xr(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = Me.depsTail, s.nextDep = void 0, Me.depsTail.nextDep = s, Me.depsTail = s, Me.deps === s && (Me.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, qs++, this.notify(t);
  }
  notify(t) {
    oi();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      ii();
    }
  }
}
function Xr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Xr(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const Tn = /* @__PURE__ */ new WeakMap(), cs = /* @__PURE__ */ Symbol(
  ""
), Eo = /* @__PURE__ */ Symbol(
  ""
), Xs = /* @__PURE__ */ Symbol(
  ""
);
function Ke(e, t, s) {
  if (gt && Me) {
    let n = Tn.get(e);
    n || Tn.set(e, n = /* @__PURE__ */ new Map());
    let o = n.get(s);
    o || (n.set(s, o = new ai()), o.map = n, o.key = s), o.track();
  }
}
function Dt(e, t, s, n, o, i) {
  const r = Tn.get(e);
  if (!r) {
    qs++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (oi(), t === "clear")
    r.forEach(a);
  else {
    const l = te(e), c = l && Kn(s);
    if (l && s === "length") {
      const u = Number(n);
      r.forEach((p, w) => {
        (w === "length" || w === Xs || !ut(w) && w >= u) && a(p);
      });
    } else
      switch ((s !== void 0 || r.has(void 0)) && a(r.get(s)), c && a(r.get(Xs)), t) {
        case "add":
          l ? c && a(r.get("length")) : (a(r.get(cs)), bs(e) && a(r.get(Eo)));
          break;
        case "delete":
          l || (a(r.get(cs)), bs(e) && a(r.get(Eo)));
          break;
        case "set":
          bs(e) && a(r.get(cs));
          break;
      }
  }
  ii();
}
function tc(e, t) {
  const s = Tn.get(e);
  return s && s.get(t);
}
function ps(e) {
  const t = /* @__PURE__ */ ve(e);
  return t === e ? t : (Ke(t, "iterate", Xs), /* @__PURE__ */ it(e) ? t : t.map(yt));
}
function qn(e) {
  return Ke(e = /* @__PURE__ */ ve(e), "iterate", Xs), e;
}
function Ct(e, t) {
  return /* @__PURE__ */ Bt(e) ? Ss(/* @__PURE__ */ Ft(e) ? yt(t) : t) : yt(t);
}
const sc = {
  __proto__: null,
  [Symbol.iterator]() {
    return uo(this, Symbol.iterator, (e) => Ct(this, e));
  },
  concat(...e) {
    return ps(this).concat(
      ...e.map((t) => te(t) ? ps(t) : t)
    );
  },
  entries() {
    return uo(this, "entries", (e) => (e[1] = Ct(this, e[1]), e));
  },
  every(e, t) {
    return It(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return It(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => Ct(this, n)),
      arguments
    );
  },
  find(e, t) {
    return It(
      this,
      "find",
      e,
      t,
      (s) => Ct(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return It(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return It(
      this,
      "findLast",
      e,
      t,
      (s) => Ct(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return It(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return It(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return fo(this, "includes", e);
  },
  indexOf(...e) {
    return fo(this, "indexOf", e);
  },
  join(e) {
    return ps(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return fo(this, "lastIndexOf", e);
  },
  map(e, t) {
    return It(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return As(this, "pop");
  },
  push(...e) {
    return As(this, "push", e);
  },
  reduce(e, ...t) {
    return Ci(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ci(this, "reduceRight", e, t);
  },
  shift() {
    return As(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return It(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return As(this, "splice", e);
  },
  toReversed() {
    return ps(this).toReversed();
  },
  toSorted(e) {
    return ps(this).toSorted(e);
  },
  toSpliced(...e) {
    return ps(this).toSpliced(...e);
  },
  unshift(...e) {
    return As(this, "unshift", e);
  },
  values() {
    return uo(this, "values", (e) => Ct(this, e));
  }
};
function uo(e, t, s) {
  const n = qn(e), o = n[t]();
  return n !== e && !/* @__PURE__ */ it(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.done || (i.value = s(i.value)), i;
  }), o;
}
const nc = Array.prototype;
function It(e, t, s, n, o, i) {
  const r = qn(e), a = r !== e && !/* @__PURE__ */ it(e), l = r[t];
  if (l !== nc[t]) {
    const p = l.apply(e, i);
    return a ? yt(p) : p;
  }
  let c = s;
  r !== e && (a ? c = function(p, w) {
    return s.call(this, Ct(e, p), w, e);
  } : s.length > 2 && (c = function(p, w) {
    return s.call(this, p, w, e);
  }));
  const u = l.call(r, c, n);
  return a && o ? o(u) : u;
}
function Ci(e, t, s, n) {
  const o = qn(e), i = o !== e && !/* @__PURE__ */ it(e);
  let r = s, a = !1;
  o !== e && (i ? (a = n.length === 0, r = function(c, u, p) {
    return a && (a = !1, c = Ct(e, c)), s.call(this, c, Ct(e, u), p, e);
  }) : s.length > 3 && (r = function(c, u, p) {
    return s.call(this, c, u, p, e);
  }));
  const l = o[t](r, ...n);
  return a ? Ct(e, l) : l;
}
function fo(e, t, s) {
  const n = /* @__PURE__ */ ve(e);
  Ke(n, "iterate", Xs);
  const o = n[t](...s);
  return (o === -1 || o === !1) && /* @__PURE__ */ Zn(s[0]) ? (s[0] = /* @__PURE__ */ ve(s[0]), n[t](...s)) : o;
}
function As(e, t, s = []) {
  Et(), oi();
  const n = (/* @__PURE__ */ ve(e))[t].apply(e, s);
  return ii(), Pt(), n;
}
const oc = /* @__PURE__ */ ei("__proto__,__v_isRef,__isVue"), Zr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ut)
);
function ic(e) {
  ut(e) || (e = String(e));
  const t = /* @__PURE__ */ ve(this);
  return Ke(t, "has", e), t.hasOwnProperty(e);
}
class Qr {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._isShallow = s;
  }
  get(t, s, n) {
    if (s === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, i = this._isShallow;
    if (s === "__v_isReactive")
      return !o;
    if (s === "__v_isReadonly")
      return o;
    if (s === "__v_isShallow")
      return i;
    if (s === "__v_raw")
      return n === (o ? i ? gc : na : i ? sa : ta).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const r = te(t);
    if (!o) {
      let l;
      if (r && (l = sc[s]))
        return l;
      if (s === "hasOwnProperty")
        return ic;
    }
    const a = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ie(t) ? t : n
    );
    if ((ut(s) ? Zr.has(s) : oc(s)) || (o || Ke(t, "get", s), i))
      return a;
    if (/* @__PURE__ */ Ie(a)) {
      const l = r && Kn(s) ? a : a.value;
      return o && be(l) ? /* @__PURE__ */ Io(l) : l;
    }
    return be(a) ? o ? /* @__PURE__ */ Io(a) : /* @__PURE__ */ Xn(a) : a;
  }
}
class ea extends Qr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, o) {
    let i = t[s];
    const r = te(t) && Kn(s);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Bt(i);
      if (!/* @__PURE__ */ it(n) && !/* @__PURE__ */ Bt(n) && (i = /* @__PURE__ */ ve(i), n = /* @__PURE__ */ ve(n)), !r && /* @__PURE__ */ Ie(i) && !/* @__PURE__ */ Ie(n))
        return c || (i.value = n), !0;
    }
    const a = r ? Number(s) < t.length : _e(t, s), l = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ Ie(t) ? t : o
    );
    return t === /* @__PURE__ */ ve(o) && l && (a ? At(n, i) && Dt(t, "set", s, n) : Dt(t, "add", s, n)), l;
  }
  deleteProperty(t, s) {
    const n = _e(t, s);
    t[s];
    const o = Reflect.deleteProperty(t, s);
    return o && n && Dt(t, "delete", s, void 0), o;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!ut(s) || !Zr.has(s)) && Ke(t, "has", s), n;
  }
  ownKeys(t) {
    return Ke(
      t,
      "iterate",
      te(t) ? "length" : cs
    ), Reflect.ownKeys(t);
  }
}
class rc extends Qr {
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
const ac = /* @__PURE__ */ new ea(), lc = /* @__PURE__ */ new rc(), cc = /* @__PURE__ */ new ea(!0);
const Po = (e) => e, cn = (e) => Reflect.getPrototypeOf(e);
function uc(e, t, s) {
  return function(...n) {
    const o = this.__v_raw, i = /* @__PURE__ */ ve(o), r = bs(i), a = e === "entries" || e === Symbol.iterator && r, l = e === "keys" && r, c = o[e](...n), u = s ? Po : t ? Ss : yt;
    return !t && Ke(
      i,
      "iterate",
      l ? Eo : cs
    ), Fe(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: p, done: w } = c.next();
          return w ? { value: p, done: w } : {
            value: a ? [u(p[0]), u(p[1])] : u(p),
            done: w
          };
        }
      }
    );
  };
}
function un(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function fc(e, t) {
  const s = {
    get(o) {
      const i = this.__v_raw, r = /* @__PURE__ */ ve(i), a = /* @__PURE__ */ ve(o);
      e || (At(o, a) && Ke(r, "get", o), Ke(r, "get", a));
      const { has: l } = cn(r), c = t ? Po : e ? Ss : yt;
      if (l.call(r, o))
        return c(i.get(o));
      if (l.call(r, a))
        return c(i.get(a));
      i !== r && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Ke(/* @__PURE__ */ ve(o), "iterate", cs), o.size;
    },
    has(o) {
      const i = this.__v_raw, r = /* @__PURE__ */ ve(i), a = /* @__PURE__ */ ve(o);
      return e || (At(o, a) && Ke(r, "has", o), Ke(r, "has", a)), o === a ? i.has(o) : i.has(o) || i.has(a);
    },
    forEach(o, i) {
      const r = this, a = r.__v_raw, l = /* @__PURE__ */ ve(a), c = t ? Po : e ? Ss : yt;
      return !e && Ke(l, "iterate", cs), a.forEach((u, p) => o.call(i, c(u), c(p), r));
    }
  };
  return Fe(
    s,
    e ? {
      add: un("add"),
      set: un("set"),
      delete: un("delete"),
      clear: un("clear")
    } : {
      add(o) {
        const i = /* @__PURE__ */ ve(this), r = cn(i), a = /* @__PURE__ */ ve(o), l = !t && !/* @__PURE__ */ it(o) && !/* @__PURE__ */ Bt(o) ? a : o;
        return r.has.call(i, l) || At(o, l) && r.has.call(i, o) || At(a, l) && r.has.call(i, a) || (i.add(l), Dt(i, "add", l, l)), this;
      },
      set(o, i) {
        !t && !/* @__PURE__ */ it(i) && !/* @__PURE__ */ Bt(i) && (i = /* @__PURE__ */ ve(i));
        const r = /* @__PURE__ */ ve(this), { has: a, get: l } = cn(r);
        let c = a.call(r, o);
        c || (o = /* @__PURE__ */ ve(o), c = a.call(r, o));
        const u = l.call(r, o);
        return r.set(o, i), c ? At(i, u) && Dt(r, "set", o, i) : Dt(r, "add", o, i), this;
      },
      delete(o) {
        const i = /* @__PURE__ */ ve(this), { has: r, get: a } = cn(i);
        let l = r.call(i, o);
        l || (o = /* @__PURE__ */ ve(o), l = r.call(i, o)), a && a.call(i, o);
        const c = i.delete(o);
        return l && Dt(i, "delete", o, void 0), c;
      },
      clear() {
        const o = /* @__PURE__ */ ve(this), i = o.size !== 0, r = o.clear();
        return i && Dt(
          o,
          "clear",
          void 0,
          void 0
        ), r;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    s[o] = uc(o, e, t);
  }), s;
}
function li(e, t) {
  const s = fc(e, t);
  return (n, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? n : Reflect.get(
    _e(s, o) && o in n ? s : n,
    o,
    i
  );
}
const dc = {
  get: /* @__PURE__ */ li(!1, !1)
}, pc = {
  get: /* @__PURE__ */ li(!1, !0)
}, hc = {
  get: /* @__PURE__ */ li(!0, !1)
};
const ta = /* @__PURE__ */ new WeakMap(), sa = /* @__PURE__ */ new WeakMap(), na = /* @__PURE__ */ new WeakMap(), gc = /* @__PURE__ */ new WeakMap();
function mc(e) {
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
function Xn(e) {
  return /* @__PURE__ */ Bt(e) ? e : ci(
    e,
    !1,
    ac,
    dc,
    ta
  );
}
// @__NO_SIDE_EFFECTS__
function yc(e) {
  return ci(
    e,
    !1,
    cc,
    pc,
    sa
  );
}
// @__NO_SIDE_EFFECTS__
function Io(e) {
  return ci(
    e,
    !0,
    lc,
    hc,
    na
  );
}
function ci(e, t, s, n, o) {
  if (!be(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const r = mc(jl(e));
  if (r === 0)
    return e;
  const a = new Proxy(
    e,
    r === 2 ? n : s
  );
  return o.set(e, a), a;
}
// @__NO_SIDE_EFFECTS__
function Ft(e) {
  return /* @__PURE__ */ Bt(e) ? /* @__PURE__ */ Ft(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Bt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function it(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Zn(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ve(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ve(t) : e;
}
function ui(e) {
  return !_e(e, "__v_skip") && Object.isExtensible(e) && Nr(e, "__v_skip", !0), e;
}
const yt = (e) => be(e) ? /* @__PURE__ */ Xn(e) : e, Ss = (e) => be(e) ? /* @__PURE__ */ Io(e) : e;
// @__NO_SIDE_EFFECTS__
function Ie(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ge(e) {
  return vc(e, !1);
}
function vc(e, t) {
  return /* @__PURE__ */ Ie(e) ? e : new _c(e, t);
}
class _c {
  constructor(t, s) {
    this.dep = new ai(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ ve(t), this._value = s ? t : yt(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ it(t) || /* @__PURE__ */ Bt(t);
    t = n ? t : /* @__PURE__ */ ve(t), At(t, s) && (this._rawValue = t, this._value = n ? t : yt(t), this.dep.trigger());
  }
}
function h(e) {
  return /* @__PURE__ */ Ie(e) ? e.value : e;
}
const bc = {
  get: (e, t, s) => t === "__v_raw" ? e : h(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const o = e[t];
    return /* @__PURE__ */ Ie(o) && !/* @__PURE__ */ Ie(s) ? (o.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function oa(e) {
  return /* @__PURE__ */ Ft(e) ? e : new Proxy(e, bc);
}
// @__NO_SIDE_EFFECTS__
function wc(e) {
  const t = te(e) ? new Array(e.length) : {};
  for (const s in e)
    t[s] = xc(e, s);
  return t;
}
class kc {
  constructor(t, s, n) {
    this._object = t, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = ut(s) ? s : String(s), this._raw = /* @__PURE__ */ ve(t);
    let o = !0, i = t;
    if (!te(t) || ut(this._key) || !Kn(this._key))
      do
        o = !/* @__PURE__ */ Zn(i) || /* @__PURE__ */ it(i);
      while (o && (i = i.__v_raw));
    this._shallow = o;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = h(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ Ie(this._raw[this._key])) {
      const s = this._object[this._key];
      if (/* @__PURE__ */ Ie(s)) {
        s.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return tc(this._raw, this._key);
  }
}
function xc(e, t, s) {
  return new kc(e, t, s);
}
class Sc {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new ai(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = qs - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Me !== this)
      return Gr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Jr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Cc(e, t, s = !1) {
  let n, o;
  return de(e) ? n = e : (n = e.get, o = e.set), new Sc(n, o, s);
}
const fn = {}, An = /* @__PURE__ */ new WeakMap();
let os;
function Tc(e, t = !1, s = os) {
  if (s) {
    let n = An.get(s);
    n || An.set(s, n = []), n.push(e);
  }
}
function Ac(e, t, s = Te) {
  const { immediate: n, deep: o, once: i, scheduler: r, augmentJob: a, call: l } = s, c = (_) => o ? _ : /* @__PURE__ */ it(_) || o === !1 || o === 0 ? Nt(_, 1) : Nt(_);
  let u, p, w, x, A = !1, k = !1;
  if (/* @__PURE__ */ Ie(e) ? (p = () => e.value, A = /* @__PURE__ */ it(e)) : /* @__PURE__ */ Ft(e) ? (p = () => c(e), A = !0) : te(e) ? (k = !0, A = e.some((_) => /* @__PURE__ */ Ft(_) || /* @__PURE__ */ it(_)), p = () => e.map((_) => {
    if (/* @__PURE__ */ Ie(_))
      return _.value;
    if (/* @__PURE__ */ Ft(_))
      return c(_);
    if (de(_))
      return l ? l(_, 2) : _();
  })) : de(e) ? t ? p = l ? () => l(e, 2) : e : p = () => {
    if (w) {
      Et();
      try {
        w();
      } finally {
        Pt();
      }
    }
    const _ = os;
    os = u;
    try {
      return l ? l(e, 3, [x]) : e(x);
    } finally {
      os = _;
    }
  } : p = Mt, t && o) {
    const _ = p, y = o === !0 ? 1 / 0 : o;
    p = () => Nt(_(), y);
  }
  const F = Vr(), K = () => {
    u.stop(), F && F.active && ti(F.effects, u);
  };
  if (i && t) {
    const _ = t;
    t = (...y) => {
      const S = _(...y);
      return K(), S;
    };
  }
  let j = k ? new Array(e.length).fill(fn) : fn;
  const Z = (_) => {
    if (!(!(u.flags & 1) || !u.dirty && !_))
      if (t) {
        const y = u.run();
        if (_ || o || A || (k ? y.some((S, b) => At(S, j[b])) : At(y, j))) {
          w && w();
          const S = os;
          os = u;
          try {
            const b = [
              y,
              // pass undefined as the old value when it's changed for the first time
              j === fn ? void 0 : k && j[0] === fn ? [] : j,
              x
            ];
            j = y, l ? l(t, 3, b) : (
              // @ts-expect-error
              t(...b)
            );
          } finally {
            os = S;
          }
        }
      } else
        u.run();
  };
  return a && a(Z), u = new Wr(p), u.scheduler = r ? () => r(Z, !1) : Z, x = (_) => Tc(_, !1, u), w = u.onStop = () => {
    const _ = An.get(u);
    if (_) {
      if (l)
        l(_, 4);
      else
        for (const y of _) y();
      An.delete(u);
    }
  }, t ? n ? Z(!0) : j = u.run() : r ? r(Z.bind(null, !0), !0) : u.run(), K.pause = u.pause.bind(u), K.resume = u.resume.bind(u), K.stop = K, K;
}
function Nt(e, t = 1 / 0, s) {
  if (t <= 0 || !be(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ Ie(e))
    Nt(e.value, t, s);
  else if (te(e))
    for (let n = 0; n < e.length; n++)
      Nt(e[n], t, s);
  else if (Rr(e) || bs(e))
    e.forEach((n) => {
      Nt(n, t, s);
    });
  else if ($r(e)) {
    for (const n in e)
      Nt(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Nt(e[n], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function on(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (o) {
    Qn(o, t, s);
  }
}
function ft(e, t, s, n) {
  if (de(e)) {
    const o = on(e, t, s, n);
    return o && Or(o) && o.catch((i) => {
      Qn(i, t, s);
    }), o;
  }
  if (te(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(ft(e[i], t, s, n));
    return o;
  }
}
function Qn(e, t, s, n = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = t && t.appContext.config || Te;
  if (t) {
    let a = t.parent;
    const l = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; a; ) {
      const u = a.ec;
      if (u) {
        for (let p = 0; p < u.length; p++)
          if (u[p](e, l, c) === !1)
            return;
      }
      a = a.parent;
    }
    if (i) {
      Et(), on(i, null, 10, [
        e,
        l,
        c
      ]), Pt();
      return;
    }
  }
  Mc(e, s, o, n, r);
}
function Mc(e, t, s, n = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const qe = [];
let St = -1;
const ws = [];
let Gt = null, ys = 0;
const ia = /* @__PURE__ */ Promise.resolve();
let Mn = null;
function Ue(e) {
  const t = Mn || ia;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ec(e) {
  let t = St + 1, s = qe.length;
  for (; t < s; ) {
    const n = t + s >>> 1, o = qe[n], i = Zs(o);
    i < e || i === e && o.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function fi(e) {
  if (!(e.flags & 1)) {
    const t = Zs(e), s = qe[qe.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Zs(s) ? qe.push(e) : qe.splice(Ec(t), 0, e), e.flags |= 1, ra();
  }
}
function ra() {
  Mn || (Mn = ia.then(la));
}
function Pc(e) {
  te(e) ? ws.push(...e) : Gt && e.id === -1 ? Gt.splice(ys + 1, 0, e) : e.flags & 1 || (ws.push(e), e.flags |= 1), ra();
}
function Ti(e, t, s = St + 1) {
  for (; s < qe.length; s++) {
    const n = qe[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      qe.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function aa(e) {
  if (ws.length) {
    const t = [...new Set(ws)].sort(
      (s, n) => Zs(s) - Zs(n)
    );
    if (ws.length = 0, Gt) {
      Gt.push(...t);
      return;
    }
    for (Gt = t, ys = 0; ys < Gt.length; ys++) {
      const s = Gt[ys];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Gt = null, ys = 0;
  }
}
const Zs = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function la(e) {
  try {
    for (St = 0; St < qe.length; St++) {
      const t = qe[St];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), on(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; St < qe.length; St++) {
      const t = qe[St];
      t && (t.flags &= -2);
    }
    St = -1, qe.length = 0, aa(), Mn = null, (qe.length || ws.length) && la();
  }
}
let ct = null, ca = null;
function En(e) {
  const t = ct;
  return ct = e, ca = e && e.type.__scopeId || null, t;
}
function ua(e, t = ct, s) {
  if (!t || e._n)
    return e;
  const n = (...o) => {
    n._d && Rn(-1);
    const i = En(t);
    let r;
    try {
      r = e(...o);
    } finally {
      En(i), n._d && Rn(1);
    }
    return r;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Rs(e, t) {
  if (ct === null)
    return e;
  const s = oo(ct), n = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, r, a, l = Te] = t[o];
    i && (de(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Nt(r), n.push({
      dir: i,
      instance: s,
      value: r,
      oldValue: void 0,
      arg: a,
      modifiers: l
    }));
  }
  return e;
}
function Qt(e, t, s, n) {
  const o = e.dirs, i = t && t.dirs;
  for (let r = 0; r < o.length; r++) {
    const a = o[r];
    i && (a.oldValue = i[r].value);
    let l = a.dir[n];
    l && (Et(), ft(l, s, 8, [
      e.el,
      a,
      e,
      t
    ]), Pt());
  }
}
function Ic(e, t) {
  if (Ze) {
    let s = Ze.provides;
    const n = Ze.parent && Ze.parent.provides;
    n === s && (s = Ze.provides = Object.create(n)), s[e] = t;
  }
}
function Us(e, t, s = !1) {
  const n = gi();
  if (n || us) {
    let o = us ? us._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return s && de(t) ? t.call(n && n.proxy) : t;
  }
}
function Rc() {
  return !!(gi() || us);
}
const Oc = /* @__PURE__ */ Symbol.for("v-scx"), Lc = () => Us(Oc);
function Qe(e, t, s) {
  return fa(e, t, s);
}
function fa(e, t, s = Te) {
  const { immediate: n, deep: o, flush: i, once: r } = s, a = Fe({}, s), l = t && n || !t && i !== "post";
  let c;
  if (tn) {
    if (i === "sync") {
      const x = Lc();
      c = x.__watcherHandles || (x.__watcherHandles = []);
    } else if (!l) {
      const x = () => {
      };
      return x.stop = Mt, x.resume = Mt, x.pause = Mt, x;
    }
  }
  const u = Ze;
  a.call = (x, A, k) => ft(x, u, A, k);
  let p = !1;
  i === "post" ? a.scheduler = (x) => {
    Je(x, u && u.suspense);
  } : i !== "sync" && (p = !0, a.scheduler = (x, A) => {
    A ? x() : fi(x);
  }), a.augmentJob = (x) => {
    t && (x.flags |= 4), p && (x.flags |= 2, u && (x.id = u.uid, x.i = u));
  };
  const w = Ac(e, t, a);
  return tn && (c ? c.push(w) : l && w()), w;
}
function $c(e, t, s) {
  const n = this.proxy, o = Ee(e) ? e.includes(".") ? da(n, e) : () => n[e] : e.bind(n, n);
  let i;
  de(t) ? i = t : (i = t.handler, s = t);
  const r = ln(this), a = fa(o, i.bind(n), s);
  return r(), a;
}
function da(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let o = 0; o < s.length && n; o++)
      n = n[s[o]];
    return n;
  };
}
const Wt = /* @__PURE__ */ new WeakMap(), pa = /* @__PURE__ */ Symbol("_vte"), ha = (e) => e.__isTeleport, is = (e) => e && (e.disabled || e.disabled === ""), Dc = (e) => e && (e.defer || e.defer === ""), Ai = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Mi = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ro = (e, t) => {
  const s = e && e.to;
  return Ee(s) ? t ? t(s) : null : s;
}, Nc = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, s, n, o, i, r, a, l, c) {
    const {
      mc: u,
      pc: p,
      pbc: w,
      o: { insert: x, querySelector: A, createText: k, createComment: F, parentNode: K }
    } = c, j = is(t.props);
    let { dynamicChildren: Z } = t;
    const _ = (b, V, P) => {
      b.shapeFlag & 16 && u(
        b.children,
        V,
        P,
        o,
        i,
        r,
        a,
        l
      );
    }, y = (b = t) => {
      const V = is(b.props), P = b.target = Ro(b.props, A), X = Oo(P, b, k, x);
      P && (r !== "svg" && Ai(P) ? r = "svg" : r !== "mathml" && Mi(P) && (r = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(P), V || (_(b, P, X), Os(b, !1)));
    }, S = (b) => {
      const V = () => {
        if (Wt.get(b) === V) {
          if (Wt.delete(b), is(b.props)) {
            const P = K(b.el) || s;
            _(b, P, b.anchor), Os(b, !0);
          }
          y(b);
        }
      };
      Wt.set(b, V), Je(V, i);
    };
    if (e == null) {
      const b = t.el = k(""), V = t.anchor = k("");
      if (x(b, s, n), x(V, s, n), Dc(t.props) || i && i.pendingBranch) {
        S(t);
        return;
      }
      j && (_(t, s, V), Os(t, !0)), y();
    } else {
      t.el = e.el;
      const b = t.anchor = e.anchor, V = Wt.get(e);
      if (V) {
        V.flags |= 8, Wt.delete(e), S(t);
        return;
      }
      t.targetStart = e.targetStart;
      const P = t.target = e.target, X = t.targetAnchor = e.targetAnchor, q = is(e.props), D = q ? s : P, Q = q ? b : X;
      if (r === "svg" || Ai(P) ? r = "svg" : (r === "mathml" || Mi(P)) && (r = "mathml"), Z ? (w(
        e.dynamicChildren,
        Z,
        D,
        o,
        i,
        r,
        a
      ), hi(e, t, !0)) : l || p(
        e,
        t,
        D,
        Q,
        o,
        i,
        r,
        a,
        !1
      ), j)
        q ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : dn(
          t,
          s,
          b,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const re = Ro(t.props, A);
        re && (t.target = re, dn(
          t,
          re,
          null,
          c,
          0
        ));
      } else q && dn(
        t,
        P,
        X,
        c,
        1
      );
      Os(t, j);
    }
  },
  remove(e, t, s, { um: n, o: { remove: o } }, i) {
    const {
      shapeFlag: r,
      children: a,
      anchor: l,
      targetStart: c,
      targetAnchor: u,
      target: p,
      props: w
    } = e, x = is(w), A = i || !x, k = Wt.get(e);
    if (k && (k.flags |= 8, Wt.delete(e)), p && (o(c), o(u)), i && o(l), !k && (x || p) && r & 16)
      for (let F = 0; F < a.length; F++) {
        const K = a[F];
        n(
          K,
          t,
          s,
          A,
          !!K.dynamicChildren
        );
      }
  },
  move: dn,
  hydrate: Fc
};
function dn(e, t, s, { o: { insert: n }, m: o }, i = 2) {
  i === 0 && n(e.targetAnchor, t, s);
  const { el: r, anchor: a, shapeFlag: l, children: c, props: u } = e, p = i === 2;
  if (p && n(r, t, s), !Wt.has(e) && (!p || is(u)) && l & 16)
    for (let w = 0; w < c.length; w++)
      o(
        c[w],
        t,
        s,
        2
      );
  p && n(a, t, s);
}
function Fc(e, t, s, n, o, i, {
  o: { nextSibling: r, parentNode: a, querySelector: l, insert: c, createText: u }
}, p) {
  function w(F, K) {
    let j = K;
    for (; j; ) {
      if (j && j.nodeType === 8) {
        if (j.data === "teleport start anchor")
          t.targetStart = j;
        else if (j.data === "teleport anchor") {
          t.targetAnchor = j, F._lpa = t.targetAnchor && r(t.targetAnchor);
          break;
        }
      }
      j = r(j);
    }
  }
  function x(F, K) {
    K.anchor = p(
      r(F),
      K,
      a(F),
      s,
      n,
      o,
      i
    );
  }
  const A = t.target = Ro(
    t.props,
    l
  ), k = is(t.props);
  if (A) {
    const F = A._lpa || A.firstChild;
    t.shapeFlag & 16 && (k ? (x(e, t), w(A, F), t.targetAnchor || Oo(
      A,
      t,
      u,
      c,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      a(e) === A ? e : null
    )) : (t.anchor = r(e), w(A, F), t.targetAnchor || Oo(A, t, u, c), p(
      F && r(F),
      t,
      A,
      s,
      n,
      o,
      i
    ))), Os(t, k);
  } else k && t.shapeFlag & 16 && (x(e, t), t.targetStart = e, t.targetAnchor = r(e));
  return t.anchor && r(t.anchor);
}
const ga = Nc;
function Os(e, t) {
  const s = e.ctx;
  if (s && s.ut) {
    let n, o;
    for (t ? (n = e.el, o = e.anchor) : (n = e.targetStart, o = e.targetAnchor); n && n !== o; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", s.uid), n = n.nextSibling;
    s.ut();
  }
}
function Oo(e, t, s, n, o = null) {
  const i = t.targetStart = s(""), r = t.targetAnchor = s("");
  return i[pa] = r, e && (n(i, e, o), n(r, e, o)), r;
}
const lt = /* @__PURE__ */ Symbol("_leaveCb"), Ms = /* @__PURE__ */ Symbol("_enterCb");
function Bc() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return rn(() => {
    e.isMounted = !0;
  }), an(() => {
    e.isUnmounting = !0;
  }), e;
}
const at = [Function, Array], ma = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: at,
  onEnter: at,
  onAfterEnter: at,
  onEnterCancelled: at,
  // leave
  onBeforeLeave: at,
  onLeave: at,
  onAfterLeave: at,
  onLeaveCancelled: at,
  // appear
  onBeforeAppear: at,
  onAppear: at,
  onAfterAppear: at,
  onAppearCancelled: at
}, ya = (e) => {
  const t = e.subTree;
  return t.component ? ya(t.component) : t;
}, Uc = {
  name: "BaseTransition",
  props: ma,
  setup(e, { slots: t }) {
    const s = gi(), n = Bc();
    return () => {
      const o = t.default && ba(t.default(), !0), i = o && o.length ? va(o) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        s.subTree ? Ce() : void 0
      );
      if (!i)
        return;
      const r = /* @__PURE__ */ ve(e), { mode: a } = r;
      if (n.isLeaving)
        return po(i);
      const l = Ei(i);
      if (!l)
        return po(i);
      let c = Lo(
        l,
        r,
        n,
        s,
        // #11061, ensure enterHooks is fresh after clone
        (p) => c = p
      );
      l.type !== Xe && Qs(l, c);
      let u = s.subTree && Ei(s.subTree);
      if (u && u.type !== Xe && !rs(u, l) && ya(s).type !== Xe) {
        let p = Lo(
          u,
          r,
          n,
          s
        );
        if (Qs(u, p), a === "out-in" && l.type !== Xe)
          return n.isLeaving = !0, p.afterLeave = () => {
            n.isLeaving = !1, s.job.flags & 8 || s.update(), delete p.afterLeave, u = void 0;
          }, po(i);
        a === "in-out" && l.type !== Xe ? p.delayLeave = (w, x, A) => {
          const k = _a(
            n,
            u
          );
          k[String(u.key)] = u, w[lt] = () => {
            x(), w[lt] = void 0, delete c.delayedLeave, u = void 0;
          }, c.delayedLeave = () => {
            A(), delete c.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return i;
    };
  }
};
function va(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const s of e)
      if (s.type !== Xe) {
        t = s;
        break;
      }
  }
  return t;
}
const jc = Uc;
function _a(e, t) {
  const { leavingVNodes: s } = e;
  let n = s.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), s.set(t.type, n)), n;
}
function Lo(e, t, s, n, o) {
  const {
    appear: i,
    mode: r,
    persisted: a = !1,
    onBeforeEnter: l,
    onEnter: c,
    onAfterEnter: u,
    onEnterCancelled: p,
    onBeforeLeave: w,
    onLeave: x,
    onAfterLeave: A,
    onLeaveCancelled: k,
    onBeforeAppear: F,
    onAppear: K,
    onAfterAppear: j,
    onAppearCancelled: Z
  } = t, _ = String(e.key), y = _a(s, e), S = (P, X) => {
    P && ft(
      P,
      n,
      9,
      X
    );
  }, b = (P, X) => {
    const q = X[1];
    S(P, X), te(P) ? P.every((D) => D.length <= 1) && q() : P.length <= 1 && q();
  }, V = {
    mode: r,
    persisted: a,
    beforeEnter(P) {
      let X = l;
      if (!s.isMounted)
        if (i)
          X = F || l;
        else
          return;
      P[lt] && P[lt](
        !0
        /* cancelled */
      );
      const q = y[_];
      q && rs(e, q) && q.el[lt] && q.el[lt](), S(X, [P]);
    },
    enter(P) {
      if (y[_] === e) return;
      let X = c, q = u, D = p;
      if (!s.isMounted)
        if (i)
          X = K || c, q = j || u, D = Z || p;
        else
          return;
      let Q = !1;
      P[Ms] = (ke) => {
        Q || (Q = !0, ke ? S(D, [P]) : S(q, [P]), V.delayedLeave && V.delayedLeave(), P[Ms] = void 0);
      };
      const re = P[Ms].bind(null, !1);
      X ? b(X, [P, re]) : re();
    },
    leave(P, X) {
      const q = String(e.key);
      if (P[Ms] && P[Ms](
        !0
        /* cancelled */
      ), s.isUnmounting)
        return X();
      S(w, [P]);
      let D = !1;
      P[lt] = (re) => {
        D || (D = !0, X(), re ? S(k, [P]) : S(A, [P]), P[lt] = void 0, y[q] === e && delete y[q]);
      };
      const Q = P[lt].bind(null, !1);
      y[q] = e, x ? b(x, [P, Q]) : Q();
    },
    clone(P) {
      const X = Lo(
        P,
        t,
        s,
        n,
        o
      );
      return o && o(X), X;
    }
  };
  return V;
}
function po(e) {
  if (eo(e))
    return e = Jt(e), e.children = null, e;
}
function Ei(e) {
  if (!eo(e))
    return ha(e.type) && e.children ? va(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: s } = e;
  if (s) {
    if (t & 16)
      return s[0];
    if (t & 32 && de(s.default))
      return s.default();
  }
}
function Qs(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Qs(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ba(e, t = !1, s) {
  let n = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    const a = s == null ? r.key : String(s) + String(r.key != null ? r.key : i);
    r.type === le ? (r.patchFlag & 128 && o++, n = n.concat(
      ba(r.children, t, a)
    )) : (t || r.type !== Xe) && n.push(a != null ? Jt(r, { key: a }) : r);
  }
  if (o > 1)
    for (let i = 0; i < n.length; i++)
      n[i].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function Ut(e, t) {
  return de(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Fe({ name: e.name }, t, { setup: e })
  ) : e;
}
function wa(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Pi(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const Pn = /* @__PURE__ */ new WeakMap();
function js(e, t, s, n, o = !1) {
  if (te(e)) {
    e.forEach(
      (k, F) => js(
        k,
        t && (te(t) ? t[F] : t),
        s,
        n,
        o
      )
    );
    return;
  }
  if (Hs(n) && !o) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && js(e, t, s, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? oo(n.component) : n.el, r = o ? null : i, { i: a, r: l } = e, c = t && t.r, u = a.refs === Te ? a.refs = {} : a.refs, p = a.setupState, w = /* @__PURE__ */ ve(p), x = p === Te ? Ir : (k) => Pi(u, k) ? !1 : _e(w, k), A = (k, F) => !(F && Pi(u, F));
  if (c != null && c !== l) {
    if (Ii(t), Ee(c))
      u[c] = null, x(c) && (p[c] = null);
    else if (/* @__PURE__ */ Ie(c)) {
      const k = t;
      A(c, k.k) && (c.value = null), k.k && (u[k.k] = null);
    }
  }
  if (de(l)) {
    Et();
    try {
      on(l, a, 12, [r, u]);
    } finally {
      Pt();
    }
  } else {
    const k = Ee(l), F = /* @__PURE__ */ Ie(l);
    if (k || F) {
      const K = () => {
        if (e.f) {
          const j = k ? x(l) ? p[l] : u[l] : A() || !e.k ? l.value : u[e.k];
          if (o)
            te(j) && ti(j, i);
          else if (te(j))
            j.includes(i) || j.push(i);
          else if (k)
            u[l] = [i], x(l) && (p[l] = u[l]);
          else {
            const Z = [i];
            A(l, e.k) && (l.value = Z), e.k && (u[e.k] = Z);
          }
        } else k ? (u[l] = r, x(l) && (p[l] = r)) : F && (A(l, e.k) && (l.value = r), e.k && (u[e.k] = r));
      };
      if (r) {
        const j = () => {
          K(), Pn.delete(e);
        };
        j.id = -1, Pn.set(e, j), Je(j, s);
      } else
        Ii(e), K();
    }
  }
}
function Ii(e) {
  const t = Pn.get(e);
  t && (t.flags |= 8, Pn.delete(e));
}
Jn().requestIdleCallback;
Jn().cancelIdleCallback;
const Hs = (e) => !!e.type.__asyncLoader, eo = (e) => e.type.__isKeepAlive;
function Hc(e, t) {
  ka(e, "a", t);
}
function Vc(e, t) {
  ka(e, "da", t);
}
function ka(e, t, s = Ze) {
  const n = e.__wdc || (e.__wdc = () => {
    let o = s;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (to(t, n, s), s) {
    let o = s.parent;
    for (; o && o.parent; )
      eo(o.parent.vnode) && Wc(n, t, s, o), o = o.parent;
  }
}
function Wc(e, t, s, n) {
  const o = to(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  xa(() => {
    ti(n[t], o);
  }, s);
}
function to(e, t, s = Ze, n = !1) {
  if (s) {
    const o = s[e] || (s[e] = []), i = t.__weh || (t.__weh = (...r) => {
      Et();
      const a = ln(s), l = ft(t, s, e, r);
      return a(), Pt(), l;
    });
    return n ? o.unshift(i) : o.push(i), i;
  }
}
const jt = (e) => (t, s = Ze) => {
  (!tn || e === "sp") && to(e, (...n) => t(...n), s);
}, zc = jt("bm"), rn = jt("m"), Gc = jt(
  "bu"
), Kc = jt("u"), an = jt(
  "bum"
), xa = jt("um"), Yc = jt(
  "sp"
), Jc = jt("rtg"), qc = jt("rtc");
function Xc(e, t = Ze) {
  to("ec", e, t);
}
const Zc = /* @__PURE__ */ Symbol.for("v-ndc");
function st(e, t, s, n) {
  let o;
  const i = s, r = te(e);
  if (r || Ee(e)) {
    const a = r && /* @__PURE__ */ Ft(e);
    let l = !1, c = !1;
    a && (l = !/* @__PURE__ */ it(e), c = /* @__PURE__ */ Bt(e), e = qn(e)), o = new Array(e.length);
    for (let u = 0, p = e.length; u < p; u++)
      o[u] = t(
        l ? c ? Ss(yt(e[u])) : yt(e[u]) : e[u],
        u,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let a = 0; a < e; a++)
      o[a] = t(a + 1, a, void 0, i);
  } else if (be(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (a, l) => t(a, l, void 0, i)
      );
    else {
      const a = Object.keys(e);
      o = new Array(a.length);
      for (let l = 0, c = a.length; l < c; l++) {
        const u = a[l];
        o[l] = t(e[u], u, l, i);
      }
    }
  else
    o = [];
  return o;
}
const $o = (e) => e ? Ha(e) ? oo(e) : $o(e.parent) : null, Vs = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Fe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => $o(e.parent),
    $root: (e) => $o(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ca(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      fi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ue.bind(e.proxy)),
    $watch: (e) => $c.bind(e)
  })
), ho = (e, t) => e !== Te && !e.__isScriptSetup && _e(e, t), Qc = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: o, props: i, accessCache: r, type: a, appContext: l } = e;
    if (t[0] !== "$") {
      const w = r[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return n[t];
          case 2:
            return o[t];
          case 4:
            return s[t];
          case 3:
            return i[t];
        }
      else {
        if (ho(n, t))
          return r[t] = 1, n[t];
        if (o !== Te && _e(o, t))
          return r[t] = 2, o[t];
        if (_e(i, t))
          return r[t] = 3, i[t];
        if (s !== Te && _e(s, t))
          return r[t] = 4, s[t];
        Do && (r[t] = 0);
      }
    }
    const c = Vs[t];
    let u, p;
    if (c)
      return t === "$attrs" && Ke(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = a.__cssModules) && (u = u[t])
    )
      return u;
    if (s !== Te && _e(s, t))
      return r[t] = 4, s[t];
    if (
      // global properties
      p = l.config.globalProperties, _e(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: o, ctx: i } = e;
    return ho(o, t) ? (o[t] = s, !0) : n !== Te && _e(n, t) ? (n[t] = s, !0) : _e(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: o, props: i, type: r }
  }, a) {
    let l;
    return !!(s[a] || e !== Te && a[0] !== "$" && _e(e, a) || ho(t, a) || _e(i, a) || _e(n, a) || _e(Vs, a) || _e(o.config.globalProperties, a) || (l = r.__cssModules) && l[a]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : _e(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function Ri(e) {
  return te(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let Do = !0;
function eu(e) {
  const t = Ca(e), s = e.proxy, n = e.ctx;
  Do = !1, t.beforeCreate && Oi(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: i,
    methods: r,
    watch: a,
    provide: l,
    inject: c,
    // lifecycle
    created: u,
    beforeMount: p,
    mounted: w,
    beforeUpdate: x,
    updated: A,
    activated: k,
    deactivated: F,
    beforeDestroy: K,
    beforeUnmount: j,
    destroyed: Z,
    unmounted: _,
    render: y,
    renderTracked: S,
    renderTriggered: b,
    errorCaptured: V,
    serverPrefetch: P,
    // public API
    expose: X,
    inheritAttrs: q,
    // assets
    components: D,
    directives: Q,
    filters: re
  } = t;
  if (c && tu(c, n, null), r)
    for (const C in r) {
      const v = r[C];
      de(v) && (n[C] = v.bind(s));
    }
  if (o) {
    const C = o.call(s, s);
    be(C) && (e.data = /* @__PURE__ */ Xn(C));
  }
  if (Do = !0, i)
    for (const C in i) {
      const v = i[C], M = de(v) ? v.bind(s, s) : de(v.get) ? v.get.bind(s, s) : Mt, ae = !de(v) && de(v.set) ? v.set.bind(s) : Mt, ue = Ae({
        get: M,
        set: ae
      });
      Object.defineProperty(n, C, {
        enumerable: !0,
        configurable: !0,
        get: () => ue.value,
        set: (fe) => ue.value = fe
      });
    }
  if (a)
    for (const C in a)
      Sa(a[C], n, s, C);
  if (l) {
    const C = de(l) ? l.call(s) : l;
    Reflect.ownKeys(C).forEach((v) => {
      Ic(v, C[v]);
    });
  }
  u && Oi(u, e, "c");
  function U(C, v) {
    te(v) ? v.forEach((M) => C(M.bind(s))) : v && C(v.bind(s));
  }
  if (U(zc, p), U(rn, w), U(Gc, x), U(Kc, A), U(Hc, k), U(Vc, F), U(Xc, V), U(qc, S), U(Jc, b), U(an, j), U(xa, _), U(Yc, P), te(X))
    if (X.length) {
      const C = e.exposed || (e.exposed = {});
      X.forEach((v) => {
        Object.defineProperty(C, v, {
          get: () => s[v],
          set: (M) => s[v] = M,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  y && e.render === Mt && (e.render = y), q != null && (e.inheritAttrs = q), D && (e.components = D), Q && (e.directives = Q), P && wa(e);
}
function tu(e, t, s = Mt) {
  te(e) && (e = No(e));
  for (const n in e) {
    const o = e[n];
    let i;
    be(o) ? "default" in o ? i = Us(
      o.from || n,
      o.default,
      !0
    ) : i = Us(o.from || n) : i = Us(o), /* @__PURE__ */ Ie(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    }) : t[n] = i;
  }
}
function Oi(e, t, s) {
  ft(
    te(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function Sa(e, t, s, n) {
  let o = n.includes(".") ? da(s, n) : () => s[n];
  if (Ee(e)) {
    const i = t[e];
    de(i) && Qe(o, i);
  } else if (de(e))
    Qe(o, e.bind(s));
  else if (be(e))
    if (te(e))
      e.forEach((i) => Sa(i, t, s, n));
    else {
      const i = de(e.handler) ? e.handler.bind(s) : t[e.handler];
      de(i) && Qe(o, i, e);
    }
}
function Ca(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: r }
  } = e.appContext, a = i.get(t);
  let l;
  return a ? l = a : !o.length && !s && !n ? l = t : (l = {}, o.length && o.forEach(
    (c) => In(l, c, r, !0)
  ), In(l, t, r)), be(t) && i.set(t, l), l;
}
function In(e, t, s, n = !1) {
  const { mixins: o, extends: i } = t;
  i && In(e, i, s, !0), o && o.forEach(
    (r) => In(e, r, s, !0)
  );
  for (const r in t)
    if (!(n && r === "expose")) {
      const a = su[r] || s && s[r];
      e[r] = a ? a(e[r], t[r]) : t[r];
    }
  return e;
}
const su = {
  data: Li,
  props: $i,
  emits: $i,
  // objects
  methods: Ls,
  computed: Ls,
  // lifecycle
  beforeCreate: Ye,
  created: Ye,
  beforeMount: Ye,
  mounted: Ye,
  beforeUpdate: Ye,
  updated: Ye,
  beforeDestroy: Ye,
  beforeUnmount: Ye,
  destroyed: Ye,
  unmounted: Ye,
  activated: Ye,
  deactivated: Ye,
  errorCaptured: Ye,
  serverPrefetch: Ye,
  // assets
  components: Ls,
  directives: Ls,
  // watch
  watch: ou,
  // provide / inject
  provide: Li,
  inject: nu
};
function Li(e, t) {
  return t ? e ? function() {
    return Fe(
      de(e) ? e.call(this, this) : e,
      de(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function nu(e, t) {
  return Ls(No(e), No(t));
}
function No(e) {
  if (te(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function Ye(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ls(e, t) {
  return e ? Fe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function $i(e, t) {
  return e ? te(e) && te(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Fe(
    /* @__PURE__ */ Object.create(null),
    Ri(e),
    Ri(t ?? {})
  ) : t;
}
function ou(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = Fe(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = Ye(e[n], t[n]);
  return s;
}
function Ta() {
  return {
    app: null,
    config: {
      isNativeTag: Ir,
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
let iu = 0;
function ru(e, t) {
  return function(n, o = null) {
    de(n) || (n = Fe({}, n)), o != null && !be(o) && (o = null);
    const i = Ta(), r = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const c = i.app = {
      _uid: iu++,
      _component: n,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: Fu,
      get config() {
        return i.config;
      },
      set config(u) {
      },
      use(u, ...p) {
        return r.has(u) || (u && de(u.install) ? (r.add(u), u.install(c, ...p)) : de(u) && (r.add(u), u(c, ...p))), c;
      },
      mixin(u) {
        return i.mixins.includes(u) || i.mixins.push(u), c;
      },
      component(u, p) {
        return p ? (i.components[u] = p, c) : i.components[u];
      },
      directive(u, p) {
        return p ? (i.directives[u] = p, c) : i.directives[u];
      },
      mount(u, p, w) {
        if (!l) {
          const x = c._ceVNode || ce(n, o);
          return x.appContext = i, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(x, u, w), l = !0, c._container = u, u.__vue_app__ = c, oo(x.component);
        }
      },
      onUnmount(u) {
        a.push(u);
      },
      unmount() {
        l && (ft(
          a,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, p) {
        return i.provides[u] = p, c;
      },
      runWithContext(u) {
        const p = us;
        us = c;
        try {
          return u();
        } finally {
          us = p;
        }
      }
    };
    return c;
  };
}
let us = null;
const au = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ht(t)}Modifiers`] || e[`${qt(t)}Modifiers`];
function lu(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Te;
  let o = s;
  const i = t.startsWith("update:"), r = i && au(n, t.slice(7));
  r && (r.trim && (o = s.map((u) => Ee(u) ? u.trim() : u)), r.number && (o = s.map(si)));
  let a, l = n[a = ao(t)] || // also try camelCase event handler (#2249)
  n[a = ao(ht(t))];
  !l && i && (l = n[a = ao(qt(t))]), l && ft(
    l,
    e,
    6,
    o
  );
  const c = n[a + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, ft(
      c,
      e,
      6,
      o
    );
  }
}
const cu = /* @__PURE__ */ new WeakMap();
function Aa(e, t, s = !1) {
  const n = s ? cu : t.emitsCache, o = n.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let r = {}, a = !1;
  if (!de(e)) {
    const l = (c) => {
      const u = Aa(c, t, !0);
      u && (a = !0, Fe(r, u));
    };
    !s && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !i && !a ? (be(e) && n.set(e, null), null) : (te(i) ? i.forEach((l) => r[l] = null) : Fe(r, i), be(e) && n.set(e, r), r);
}
function so(e, t) {
  return !e || !zn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), _e(e, t[0].toLowerCase() + t.slice(1)) || _e(e, qt(t)) || _e(e, t));
}
function Di(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: o,
    propsOptions: [i],
    slots: r,
    attrs: a,
    emit: l,
    render: c,
    renderCache: u,
    props: p,
    data: w,
    setupState: x,
    ctx: A,
    inheritAttrs: k
  } = e, F = En(e);
  let K, j;
  try {
    if (s.shapeFlag & 4) {
      const _ = o || n, y = _;
      K = Tt(
        c.call(
          y,
          _,
          u,
          p,
          x,
          w,
          A
        )
      ), j = a;
    } else {
      const _ = t;
      K = Tt(
        _.length > 1 ? _(
          p,
          { attrs: a, slots: r, emit: l }
        ) : _(
          p,
          null
        )
      ), j = t.props ? a : uu(a);
    }
  } catch (_) {
    Ws.length = 0, Qn(_, e, 1), K = ce(Xe);
  }
  let Z = K;
  if (j && k !== !1) {
    const _ = Object.keys(j), { shapeFlag: y } = Z;
    _.length && y & 7 && (i && _.some(Gn) && (j = fu(
      j,
      i
    )), Z = Jt(Z, j, !1, !0));
  }
  return s.dirs && (Z = Jt(Z, null, !1, !0), Z.dirs = Z.dirs ? Z.dirs.concat(s.dirs) : s.dirs), s.transition && Qs(Z, s.transition), K = Z, En(F), K;
}
const uu = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || zn(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, fu = (e, t) => {
  const s = {};
  for (const n in e)
    (!Gn(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function du(e, t, s) {
  const { props: n, children: o, component: i } = e, { props: r, children: a, patchFlag: l } = t, c = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? Ni(n, r, c) : !!r;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let p = 0; p < u.length; p++) {
        const w = u[p];
        if (Ma(r, n, w) && !so(c, w))
          return !0;
      }
    }
  } else
    return (o || a) && (!a || !a.$stable) ? !0 : n === r ? !1 : n ? r ? Ni(n, r, c) : !0 : !!r;
  return !1;
}
function Ni(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < n.length; o++) {
    const i = n[o];
    if (Ma(t, e, i) && !so(s, i))
      return !0;
  }
  return !1;
}
function Ma(e, t, s) {
  const n = e[s], o = t[s];
  return s === "style" && be(n) && be(o) ? !ni(n, o) : n !== o;
}
function pu({ vnode: e, parent: t, suspense: s }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = n, e = o), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  s && s.activeBranch === e && (s.vnode.el = n);
}
const Ea = {}, Pa = () => Object.create(Ea), Ia = (e) => Object.getPrototypeOf(e) === Ea;
function hu(e, t, s, n = !1) {
  const o = {}, i = Pa();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ra(e, t, o, i);
  for (const r in e.propsOptions[0])
    r in o || (o[r] = void 0);
  s ? e.props = n ? o : /* @__PURE__ */ yc(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function gu(e, t, s, n) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: r }
  } = e, a = /* @__PURE__ */ ve(o), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const u = e.vnode.dynamicProps;
      for (let p = 0; p < u.length; p++) {
        let w = u[p];
        if (so(e.emitsOptions, w))
          continue;
        const x = t[w];
        if (l)
          if (_e(i, w))
            x !== i[w] && (i[w] = x, c = !0);
          else {
            const A = ht(w);
            o[A] = Fo(
              l,
              a,
              A,
              x,
              e,
              !1
            );
          }
        else
          x !== i[w] && (i[w] = x, c = !0);
      }
    }
  } else {
    Ra(e, t, o, i) && (c = !0);
    let u;
    for (const p in a)
      (!t || // for camelCase
      !_e(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = qt(p)) === p || !_e(t, u))) && (l ? s && // for camelCase
      (s[p] !== void 0 || // for kebab-case
      s[u] !== void 0) && (o[p] = Fo(
        l,
        a,
        p,
        void 0,
        e,
        !0
      )) : delete o[p]);
    if (i !== a)
      for (const p in i)
        (!t || !_e(t, p)) && (delete i[p], c = !0);
  }
  c && Dt(e.attrs, "set", "");
}
function Ra(e, t, s, n) {
  const [o, i] = e.propsOptions;
  let r = !1, a;
  if (t)
    for (let l in t) {
      if (Ns(l))
        continue;
      const c = t[l];
      let u;
      o && _e(o, u = ht(l)) ? !i || !i.includes(u) ? s[u] = c : (a || (a = {}))[u] = c : so(e.emitsOptions, l) || (!(l in n) || c !== n[l]) && (n[l] = c, r = !0);
    }
  if (i) {
    const l = /* @__PURE__ */ ve(s), c = a || Te;
    for (let u = 0; u < i.length; u++) {
      const p = i[u];
      s[p] = Fo(
        o,
        l,
        p,
        c[p],
        e,
        !_e(c, p)
      );
    }
  }
  return r;
}
function Fo(e, t, s, n, o, i) {
  const r = e[s];
  if (r != null) {
    const a = _e(r, "default");
    if (a && n === void 0) {
      const l = r.default;
      if (r.type !== Function && !r.skipFactory && de(l)) {
        const { propsDefaults: c } = o;
        if (s in c)
          n = c[s];
        else {
          const u = ln(o);
          n = c[s] = l.call(
            null,
            t
          ), u();
        }
      } else
        n = l;
      o.ce && o.ce._setProp(s, n);
    }
    r[
      0
      /* shouldCast */
    ] && (i && !a ? n = !1 : r[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === qt(s)) && (n = !0));
  }
  return n;
}
const mu = /* @__PURE__ */ new WeakMap();
function Oa(e, t, s = !1) {
  const n = s ? mu : t.propsCache, o = n.get(e);
  if (o)
    return o;
  const i = e.props, r = {}, a = [];
  let l = !1;
  if (!de(e)) {
    const u = (p) => {
      l = !0;
      const [w, x] = Oa(p, t, !0);
      Fe(r, w), x && a.push(...x);
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!i && !l)
    return be(e) && n.set(e, _s), _s;
  if (te(i))
    for (let u = 0; u < i.length; u++) {
      const p = ht(i[u]);
      Fi(p) && (r[p] = Te);
    }
  else if (i)
    for (const u in i) {
      const p = ht(u);
      if (Fi(p)) {
        const w = i[u], x = r[p] = te(w) || de(w) ? { type: w } : Fe({}, w), A = x.type;
        let k = !1, F = !0;
        if (te(A))
          for (let K = 0; K < A.length; ++K) {
            const j = A[K], Z = de(j) && j.name;
            if (Z === "Boolean") {
              k = !0;
              break;
            } else Z === "String" && (F = !1);
          }
        else
          k = de(A) && A.name === "Boolean";
        x[
          0
          /* shouldCast */
        ] = k, x[
          1
          /* shouldCastTrue */
        ] = F, (k || _e(x, "default")) && a.push(p);
      }
    }
  const c = [r, a];
  return be(e) && n.set(e, c), c;
}
function Fi(e) {
  return e[0] !== "$" && !Ns(e);
}
const di = (e) => e === "_" || e === "_ctx" || e === "$stable", pi = (e) => te(e) ? e.map(Tt) : [Tt(e)], yu = (e, t, s) => {
  if (t._n)
    return t;
  const n = ua((...o) => pi(t(...o)), s);
  return n._c = !1, n;
}, La = (e, t, s) => {
  const n = e._ctx;
  for (const o in e) {
    if (di(o)) continue;
    const i = e[o];
    if (de(i))
      t[o] = yu(o, i, n);
    else if (i != null) {
      const r = pi(i);
      t[o] = () => r;
    }
  }
}, $a = (e, t) => {
  const s = pi(t);
  e.slots.default = () => s;
}, Da = (e, t, s) => {
  for (const n in t)
    (s || !di(n)) && (e[n] = t[n]);
}, vu = (e, t, s) => {
  const n = e.slots = Pa();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Da(n, t, s), s && Nr(n, "_", o, !0)) : La(t, n);
  } else t && $a(e, t);
}, _u = (e, t, s) => {
  const { vnode: n, slots: o } = e;
  let i = !0, r = Te;
  if (n.shapeFlag & 32) {
    const a = t._;
    a ? s && a === 1 ? i = !1 : Da(o, t, s) : (i = !t.$stable, La(t, o)), r = t;
  } else t && ($a(e, t), r = { default: 1 });
  if (i)
    for (const a in o)
      !di(a) && r[a] == null && delete o[a];
}, Je = Su;
function bu(e) {
  return wu(e);
}
function wu(e, t) {
  const s = Jn();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: o,
    patchProp: i,
    createElement: r,
    createText: a,
    createComment: l,
    setText: c,
    setElementText: u,
    parentNode: p,
    nextSibling: w,
    setScopeId: x = Mt,
    insertStaticContent: A
  } = e, k = (d, m, T, N = null, L = null, I = null, G = void 0, W = null, H = !!m.dynamicChildren) => {
    if (d === m)
      return;
    d && !rs(d, m) && (N = Be(d), fe(d, L, I, !0), d = null), m.patchFlag === -2 && (H = !1, m.dynamicChildren = null);
    const { type: O, ref: se, shapeFlag: Y } = m;
    switch (O) {
      case no:
        F(d, m, T, N);
        break;
      case Xe:
        K(d, m, T, N);
        break;
      case kn:
        d == null && j(m, T, N, G);
        break;
      case le:
        D(
          d,
          m,
          T,
          N,
          L,
          I,
          G,
          W,
          H
        );
        break;
      default:
        Y & 1 ? y(
          d,
          m,
          T,
          N,
          L,
          I,
          G,
          W,
          H
        ) : Y & 6 ? Q(
          d,
          m,
          T,
          N,
          L,
          I,
          G,
          W,
          H
        ) : (Y & 64 || Y & 128) && O.process(
          d,
          m,
          T,
          N,
          L,
          I,
          G,
          W,
          H,
          Xt
        );
    }
    se != null && L ? js(se, d && d.ref, I, m || d, !m) : se == null && d && d.ref != null && js(d.ref, null, I, d, !0);
  }, F = (d, m, T, N) => {
    if (d == null)
      n(
        m.el = a(m.children),
        T,
        N
      );
    else {
      const L = m.el = d.el;
      m.children !== d.children && c(L, m.children);
    }
  }, K = (d, m, T, N) => {
    d == null ? n(
      m.el = l(m.children || ""),
      T,
      N
    ) : m.el = d.el;
  }, j = (d, m, T, N) => {
    [d.el, d.anchor] = A(
      d.children,
      m,
      T,
      N,
      d.el,
      d.anchor
    );
  }, Z = ({ el: d, anchor: m }, T, N) => {
    let L;
    for (; d && d !== m; )
      L = w(d), n(d, T, N), d = L;
    n(m, T, N);
  }, _ = ({ el: d, anchor: m }) => {
    let T;
    for (; d && d !== m; )
      T = w(d), o(d), d = T;
    o(m);
  }, y = (d, m, T, N, L, I, G, W, H) => {
    if (m.type === "svg" ? G = "svg" : m.type === "math" && (G = "mathml"), d == null)
      S(
        m,
        T,
        N,
        L,
        I,
        G,
        W,
        H
      );
    else {
      const O = d.el && d.el._isVueCE ? d.el : null;
      try {
        O && O._beginPatch(), P(
          d,
          m,
          L,
          I,
          G,
          W,
          H
        );
      } finally {
        O && O._endPatch();
      }
    }
  }, S = (d, m, T, N, L, I, G, W) => {
    let H, O;
    const { props: se, shapeFlag: Y, transition: ee, dirs: ie } = d;
    if (H = d.el = r(
      d.type,
      I,
      se && se.is,
      se
    ), Y & 8 ? u(H, d.children) : Y & 16 && V(
      d.children,
      H,
      null,
      N,
      L,
      go(d, I),
      G,
      W
    ), ie && Qt(d, null, N, "created"), b(H, d, d.scopeId, G, N), se) {
      for (const Se in se)
        Se !== "value" && !Ns(Se) && i(H, Se, null, se[Se], I, N);
      "value" in se && i(H, "value", null, se.value, I), (O = se.onVnodeBeforeMount) && wt(O, N, d);
    }
    ie && Qt(d, null, N, "beforeMount");
    const ye = ku(L, ee);
    ye && ee.beforeEnter(H), n(H, m, T), ((O = se && se.onVnodeMounted) || ye || ie) && Je(() => {
      try {
        O && wt(O, N, d), ye && ee.enter(H), ie && Qt(d, null, N, "mounted");
      } finally {
      }
    }, L);
  }, b = (d, m, T, N, L) => {
    if (T && x(d, T), N)
      for (let I = 0; I < N.length; I++)
        x(d, N[I]);
    if (L) {
      let I = L.subTree;
      if (m === I || Ba(I.type) && (I.ssContent === m || I.ssFallback === m)) {
        const G = L.vnode;
        b(
          d,
          G,
          G.scopeId,
          G.slotScopeIds,
          L.parent
        );
      }
    }
  }, V = (d, m, T, N, L, I, G, W, H = 0) => {
    for (let O = H; O < d.length; O++) {
      const se = d[O] = W ? Lt(d[O]) : Tt(d[O]);
      k(
        null,
        se,
        m,
        T,
        N,
        L,
        I,
        G,
        W
      );
    }
  }, P = (d, m, T, N, L, I, G) => {
    const W = m.el = d.el;
    let { patchFlag: H, dynamicChildren: O, dirs: se } = m;
    H |= d.patchFlag & 16;
    const Y = d.props || Te, ee = m.props || Te;
    let ie;
    if (T && es(T, !1), (ie = ee.onVnodeBeforeUpdate) && wt(ie, T, m, d), se && Qt(m, d, T, "beforeUpdate"), T && es(T, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    O && (!d.dynamicChildren || d.dynamicChildren.length !== O.length) && (H = 0, G = !1, O = null), (Y.innerHTML && ee.innerHTML == null || Y.textContent && ee.textContent == null) && u(W, ""), O ? X(
      d.dynamicChildren,
      O,
      W,
      T,
      N,
      go(m, L),
      I
    ) : G || v(
      d,
      m,
      W,
      null,
      T,
      N,
      go(m, L),
      I,
      !1
    ), H > 0) {
      if (H & 16)
        q(W, Y, ee, T, L);
      else if (H & 2 && Y.class !== ee.class && i(W, "class", null, ee.class, L), H & 4 && i(W, "style", Y.style, ee.style, L), H & 8) {
        const ye = m.dynamicProps;
        for (let Se = 0; Se < ye.length; Se++) {
          const xe = ye[Se], $e = Y[xe], je = ee[xe];
          (je !== $e || xe === "value") && i(W, xe, $e, je, L, T);
        }
      }
      H & 1 && d.children !== m.children && u(W, m.children);
    } else !G && O == null && q(W, Y, ee, T, L);
    ((ie = ee.onVnodeUpdated) || se) && Je(() => {
      ie && wt(ie, T, m, d), se && Qt(m, d, T, "updated");
    }, N);
  }, X = (d, m, T, N, L, I, G) => {
    for (let W = 0; W < m.length; W++) {
      const H = d[W], O = m[W], se = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        H.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (H.type === le || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !rs(H, O) || // - In the case of a component, it could contain anything.
        H.shapeFlag & 198) ? p(H.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          T
        )
      );
      k(
        H,
        O,
        se,
        null,
        N,
        L,
        I,
        G,
        !0
      );
    }
  }, q = (d, m, T, N, L) => {
    if (m !== T) {
      if (m !== Te)
        for (const I in m)
          !Ns(I) && !(I in T) && i(
            d,
            I,
            m[I],
            null,
            L,
            N
          );
      for (const I in T) {
        if (Ns(I)) continue;
        const G = T[I], W = m[I];
        G !== W && I !== "value" && i(d, I, W, G, L, N);
      }
      "value" in T && i(d, "value", m.value, T.value, L);
    }
  }, D = (d, m, T, N, L, I, G, W, H) => {
    const O = m.el = d ? d.el : a(""), se = m.anchor = d ? d.anchor : a("");
    let { patchFlag: Y, dynamicChildren: ee, slotScopeIds: ie } = m;
    ie && (W = W ? W.concat(ie) : ie), d == null ? (n(O, T, N), n(se, T, N), V(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      T,
      se,
      L,
      I,
      G,
      W,
      H
    )) : Y > 0 && Y & 64 && ee && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    d.dynamicChildren && d.dynamicChildren.length === ee.length ? (X(
      d.dynamicChildren,
      ee,
      T,
      L,
      I,
      G,
      W
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (m.key != null || L && m === L.subTree) && hi(
      d,
      m,
      !0
      /* shallow */
    )) : v(
      d,
      m,
      T,
      se,
      L,
      I,
      G,
      W,
      H
    );
  }, Q = (d, m, T, N, L, I, G, W, H) => {
    m.slotScopeIds = W, d == null ? m.shapeFlag & 512 ? L.ctx.activate(
      m,
      T,
      N,
      G,
      H
    ) : re(
      m,
      T,
      N,
      L,
      I,
      G,
      H
    ) : ke(d, m, H);
  }, re = (d, m, T, N, L, I, G) => {
    const W = d.component = Iu(
      d,
      N,
      L
    );
    if (eo(d) && (W.ctx.renderer = Xt), Ru(W, !1, G), W.asyncDep) {
      if (L && L.registerDep(W, U, G), !d.el) {
        const H = W.subTree = ce(Xe);
        K(null, H, m, T), d.placeholder = H.el;
      }
    } else
      U(
        W,
        d,
        m,
        T,
        L,
        I,
        G
      );
  }, ke = (d, m, T) => {
    const N = m.component = d.component;
    if (du(d, m, T))
      if (N.asyncDep && !N.asyncResolved) {
        C(N, m, T);
        return;
      } else
        N.next = m, N.update();
    else
      m.el = d.el, N.vnode = m;
  }, U = (d, m, T, N, L, I, G) => {
    const W = () => {
      if (d.isMounted) {
        let { next: Y, bu: ee, u: ie, parent: ye, vnode: Se } = d;
        {
          const _t = Na(d);
          if (_t) {
            Y && (Y.el = Se.el, C(d, Y, G)), _t.asyncDep.then(() => {
              Je(() => {
                d.isUnmounted || O();
              }, L);
            });
            return;
          }
        }
        let xe = Y, $e;
        es(d, !1), Y ? (Y.el = Se.el, C(d, Y, G)) : Y = Se, ee && wn(ee), ($e = Y.props && Y.props.onVnodeBeforeUpdate) && wt($e, ye, Y, Se), es(d, !0);
        const je = Di(d), vt = d.subTree;
        d.subTree = je, k(
          vt,
          je,
          // parent may have changed if it's in a teleport
          p(vt.el),
          // anchor may have changed if it's in a fragment
          Be(vt),
          d,
          L,
          I
        ), Y.el = je.el, xe === null && pu(d, je.el), ie && Je(ie, L), ($e = Y.props && Y.props.onVnodeUpdated) && Je(
          () => wt($e, ye, Y, Se),
          L
        );
      } else {
        let Y;
        const { el: ee, props: ie } = m, { bm: ye, m: Se, parent: xe, root: $e, type: je } = d, vt = Hs(m);
        es(d, !1), ye && wn(ye), !vt && (Y = ie && ie.onVnodeBeforeMount) && wt(Y, xe, m), es(d, !0);
        {
          $e.ce && $e.ce._hasShadowRoot() && $e.ce._injectChildStyle(
            je,
            d.parent ? d.parent.type : void 0
          );
          const _t = d.subTree = Di(d);
          k(
            null,
            _t,
            T,
            N,
            d,
            L,
            I
          ), m.el = _t.el;
        }
        if (Se && Je(Se, L), !vt && (Y = ie && ie.onVnodeMounted)) {
          const _t = m;
          Je(
            () => wt(Y, xe, _t),
            L
          );
        }
        (m.shapeFlag & 256 || xe && Hs(xe.vnode) && xe.vnode.shapeFlag & 256) && d.a && Je(d.a, L), d.isMounted = !0, m = T = N = null;
      }
    };
    d.scope.on();
    const H = d.effect = new Wr(W);
    d.scope.off();
    const O = d.update = H.run.bind(H), se = d.job = H.runIfDirty.bind(H);
    se.i = d, se.id = d.uid, H.scheduler = () => fi(se), es(d, !0), O();
  }, C = (d, m, T) => {
    m.component = d;
    const N = d.vnode.props;
    d.vnode = m, d.next = null, gu(d, m.props, N, T), _u(d, m.children, T), Et(), Ti(d), Pt();
  }, v = (d, m, T, N, L, I, G, W, H = !1) => {
    const O = d && d.children, se = d ? d.shapeFlag : 0, Y = m.children, { patchFlag: ee, shapeFlag: ie } = m;
    if (ee > 0) {
      if (ee & 128) {
        ae(
          O,
          Y,
          T,
          N,
          L,
          I,
          G,
          W,
          H
        );
        return;
      } else if (ee & 256) {
        M(
          O,
          Y,
          T,
          N,
          L,
          I,
          G,
          W,
          H
        );
        return;
      }
    }
    ie & 8 ? (se & 16 && we(O, L, I), Y !== O && u(T, Y)) : se & 16 ? ie & 16 ? ae(
      O,
      Y,
      T,
      N,
      L,
      I,
      G,
      W,
      H
    ) : we(O, L, I, !0) : (se & 8 && u(T, ""), ie & 16 && V(
      Y,
      T,
      N,
      L,
      I,
      G,
      W,
      H
    ));
  }, M = (d, m, T, N, L, I, G, W, H) => {
    d = d || _s, m = m || _s;
    const O = d.length, se = m.length, Y = Math.min(O, se);
    let ee;
    for (ee = 0; ee < Y; ee++) {
      const ie = m[ee] = H ? Lt(m[ee]) : Tt(m[ee]);
      k(
        d[ee],
        ie,
        T,
        null,
        L,
        I,
        G,
        W,
        H
      );
    }
    O > se ? we(
      d,
      L,
      I,
      !0,
      !1,
      Y
    ) : V(
      m,
      T,
      N,
      L,
      I,
      G,
      W,
      H,
      Y
    );
  }, ae = (d, m, T, N, L, I, G, W, H) => {
    let O = 0;
    const se = m.length;
    let Y = d.length - 1, ee = se - 1;
    for (; O <= Y && O <= ee; ) {
      const ie = d[O], ye = m[O] = H ? Lt(m[O]) : Tt(m[O]);
      if (rs(ie, ye))
        k(
          ie,
          ye,
          T,
          null,
          L,
          I,
          G,
          W,
          H
        );
      else
        break;
      O++;
    }
    for (; O <= Y && O <= ee; ) {
      const ie = d[Y], ye = m[ee] = H ? Lt(m[ee]) : Tt(m[ee]);
      if (rs(ie, ye))
        k(
          ie,
          ye,
          T,
          null,
          L,
          I,
          G,
          W,
          H
        );
      else
        break;
      Y--, ee--;
    }
    if (O > Y) {
      if (O <= ee) {
        const ie = ee + 1, ye = ie < se ? m[ie].el : N;
        for (; O <= ee; )
          k(
            null,
            m[O] = H ? Lt(m[O]) : Tt(m[O]),
            T,
            ye,
            L,
            I,
            G,
            W,
            H
          ), O++;
      }
    } else if (O > ee)
      for (; O <= Y; )
        fe(d[O], L, I, !0), O++;
    else {
      const ie = O, ye = O, Se = /* @__PURE__ */ new Map();
      for (O = ye; O <= ee; O++) {
        const nt = m[O] = H ? Lt(m[O]) : Tt(m[O]);
        nt.key != null && Se.set(nt.key, O);
      }
      let xe, $e = 0;
      const je = ee - ye + 1;
      let vt = !1, _t = 0;
      const Ts = new Array(je);
      for (O = 0; O < je; O++) Ts[O] = 0;
      for (O = ie; O <= Y; O++) {
        const nt = d[O];
        if ($e >= je) {
          fe(nt, L, I, !0);
          continue;
        }
        let bt;
        if (nt.key != null)
          bt = Se.get(nt.key);
        else
          for (xe = ye; xe <= ee; xe++)
            if (Ts[xe - ye] === 0 && rs(nt, m[xe])) {
              bt = xe;
              break;
            }
        bt === void 0 ? fe(nt, L, I, !0) : (Ts[bt - ye] = O + 1, bt >= _t ? _t = bt : vt = !0, k(
          nt,
          m[bt],
          T,
          null,
          L,
          I,
          G,
          W,
          H
        ), $e++);
      }
      const _i = vt ? xu(Ts) : _s;
      for (xe = _i.length - 1, O = je - 1; O >= 0; O--) {
        const nt = ye + O, bt = m[nt], bi = m[nt + 1], wi = nt + 1 < se ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          bi.el || Fa(bi)
        ) : N;
        Ts[O] === 0 ? k(
          null,
          bt,
          T,
          wi,
          L,
          I,
          G,
          W,
          H
        ) : vt && (xe < 0 || O !== _i[xe] ? ue(bt, T, wi, 2) : xe--);
      }
    }
  }, ue = (d, m, T, N, L = null) => {
    const { el: I, type: G, transition: W, children: H, shapeFlag: O } = d;
    if (O & 6) {
      ue(d.component.subTree, m, T, N);
      return;
    }
    if (O & 128) {
      d.suspense.move(m, T, N);
      return;
    }
    if (O & 64) {
      G.move(d, m, T, Xt);
      return;
    }
    if (G === le) {
      n(I, m, T);
      for (let Y = 0; Y < H.length; Y++)
        ue(H[Y], m, T, N);
      n(d.anchor, m, T);
      return;
    }
    if (G === kn) {
      Z(d, m, T);
      return;
    }
    if (N !== 2 && O & 1 && W)
      if (N === 0)
        W.persisted && !I[lt] ? n(I, m, T) : (W.beforeEnter(I), n(I, m, T), Je(() => W.enter(I), L));
      else {
        const { leave: Y, delayLeave: ee, afterLeave: ie } = W, ye = () => {
          d.ctx.isUnmounted ? o(I) : n(I, m, T);
        }, Se = () => {
          const xe = I._isLeaving || !!I[lt];
          I._isLeaving && I[lt](
            !0
            /* cancelled */
          ), W.persisted && !xe ? ye() : Y(I, () => {
            ye(), ie && ie();
          });
        };
        ee ? ee(I, ye, Se) : Se();
      }
    else
      n(I, m, T);
  }, fe = (d, m, T, N = !1, L = !1) => {
    const {
      type: I,
      props: G,
      ref: W,
      children: H,
      dynamicChildren: O,
      shapeFlag: se,
      patchFlag: Y,
      dirs: ee,
      cacheIndex: ie,
      memo: ye
    } = d;
    if (Y === -2 && (L = !1), W != null && (Et(), js(W, null, T, d, !0), Pt()), ie != null && (m.renderCache[ie] = void 0), se & 256) {
      m.ctx.deactivate(d);
      return;
    }
    const Se = se & 1 && ee, xe = !Hs(d);
    let $e;
    if (xe && ($e = G && G.onVnodeBeforeUnmount) && wt($e, m, d), se & 6)
      pe(d.component, T, N);
    else {
      if (se & 128) {
        d.suspense.unmount(T, N);
        return;
      }
      Se && Qt(d, null, m, "beforeUnmount"), se & 64 ? d.type.remove(
        d,
        m,
        T,
        Xt,
        N
      ) : O && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !O.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (I !== le || Y > 0 && Y & 64) ? we(
        O,
        m,
        T,
        !1,
        !0
      ) : (I === le && Y & 384 || !L && se & 16) && we(H, m, T), N && oe(d);
    }
    const je = ye != null && ie == null;
    (xe && ($e = G && G.onVnodeUnmounted) || Se || je) && Je(() => {
      $e && wt($e, m, d), Se && Qt(d, null, m, "unmounted"), je && (d.el = null);
    }, T);
  }, oe = (d) => {
    const { type: m, el: T, anchor: N, transition: L } = d;
    if (m === le) {
      Le(T, N);
      return;
    }
    if (m === kn) {
      _(d);
      return;
    }
    const I = () => {
      o(T), L && !L.persisted && L.afterLeave && L.afterLeave();
    };
    if (d.shapeFlag & 1 && L && !L.persisted) {
      const { leave: G, delayLeave: W } = L, H = () => G(T, I);
      W ? W(d.el, I, H) : H();
    } else
      I();
  }, Le = (d, m) => {
    let T;
    for (; d !== m; )
      T = w(d), o(d), d = T;
    o(m);
  }, pe = (d, m, T) => {
    const { bum: N, scope: L, job: I, subTree: G, um: W, m: H, a: O } = d;
    Bi(H), Bi(O), N && wn(N), L.stop(), I && (I.flags |= 8, fe(G, d, m, T)), W && Je(W, m), Je(() => {
      d.isUnmounted = !0;
    }, m);
  }, we = (d, m, T, N = !1, L = !1, I = 0) => {
    for (let G = I; G < d.length; G++)
      fe(d[G], m, T, N, L);
  }, Be = (d) => {
    if (d.shapeFlag & 6)
      return Be(d.component.subTree);
    if (d.shapeFlag & 128)
      return d.suspense.next();
    const m = w(d.anchor || d.el), T = m && m[pa];
    return T ? w(T) : m;
  };
  let Re = !1;
  const Pe = (d, m, T) => {
    let N;
    d == null ? m._vnode && (fe(m._vnode, null, null, !0), N = m._vnode.component) : k(
      m._vnode || null,
      d,
      m,
      null,
      null,
      null,
      T
    ), m._vnode = d, Re || (Re = !0, Ti(N), aa(), Re = !1);
  }, Xt = {
    p: k,
    um: fe,
    m: ue,
    r: oe,
    mt: re,
    mc: V,
    pc: v,
    pbc: X,
    n: Be,
    o: e
  };
  return {
    render: Pe,
    hydrate: void 0,
    createApp: ru(Pe)
  };
}
function go({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function es({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ku(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function hi(e, t, s = !1) {
  const n = e.children, o = t.children;
  if (te(n) && te(o))
    for (let i = 0; i < n.length; i++) {
      const r = n[i];
      let a = o[i];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[i] = Lt(o[i]), a.el = r.el), !s && a.patchFlag !== -2 && hi(r, a)), a.type === no && (a.patchFlag === -1 && (a = o[i] = Lt(a)), a.el = r.el), a.type === Xe && !a.el && (a.el = r.el);
    }
}
function xu(e) {
  const t = e.slice(), s = [0];
  let n, o, i, r, a;
  const l = e.length;
  for (n = 0; n < l; n++) {
    const c = e[n];
    if (c !== 0) {
      if (o = s[s.length - 1], e[o] < c) {
        t[n] = o, s.push(n);
        continue;
      }
      for (i = 0, r = s.length - 1; i < r; )
        a = i + r >> 1, e[s[a]] < c ? i = a + 1 : r = a;
      c < e[s[i]] && (i > 0 && (t[n] = s[i - 1]), s[i] = n);
    }
  }
  for (i = s.length, r = s[i - 1]; i-- > 0; )
    s[i] = r, r = t[r];
  return s;
}
function Na(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Na(t);
}
function Bi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Fa(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Fa(t.subTree) : null;
}
const Ba = (e) => e.__isSuspense;
function Su(e, t) {
  t && t.pendingBranch ? te(e) ? t.effects.push(...e) : t.effects.push(e) : Pc(e);
}
const le = /* @__PURE__ */ Symbol.for("v-fgt"), no = /* @__PURE__ */ Symbol.for("v-txt"), Xe = /* @__PURE__ */ Symbol.for("v-cmt"), kn = /* @__PURE__ */ Symbol.for("v-stc"), Ws = [];
let ot = null;
function R(e = !1) {
  Ws.push(ot = e ? null : []);
}
function Cu() {
  Ws.pop(), ot = Ws[Ws.length - 1] || null;
}
let en = 1;
function Rn(e, t = !1) {
  en += e, e < 0 && ot && t && (ot.hasOnce = !0);
}
function Ua(e) {
  return e.dynamicChildren = en > 0 ? ot || _s : null, Cu(), en > 0 && ot && ot.push(e), e;
}
function B(e, t, s, n, o, i) {
  return Ua(
    f(
      e,
      t,
      s,
      n,
      o,
      i,
      !0
    )
  );
}
function mt(e, t, s, n, o) {
  return Ua(
    ce(
      e,
      t,
      s,
      n,
      o,
      !0
    )
  );
}
function On(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function rs(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ja = ({ key: e }) => e ?? null, xn = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? Ee(e) || /* @__PURE__ */ Ie(e) || de(e) ? { i: ct, r: e, k: t, f: !!s } : e : null);
function f(e, t = null, s = null, n = 0, o = null, i = e === le ? 0 : 1, r = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ja(t),
    ref: t && xn(t),
    scopeId: ca,
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
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: ct
  };
  return a ? (Ln(l, s), i & 128 && e.normalize(l)) : s && (l.shapeFlag |= Ee(s) ? 8 : 16), en > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  ot && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && ot.push(l), l;
}
const ce = Tu;
function Tu(e, t = null, s = null, n = 0, o = null, i = !1) {
  if ((!e || e === Zc) && (e = Xe), On(e)) {
    const a = Jt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Ln(a, s), en > 0 && !i && ot && (a.shapeFlag & 6 ? ot[ot.indexOf(e)] = a : ot.push(a)), a.patchFlag = -2, a;
  }
  if (Du(e) && (e = e.__vccOpts), t) {
    t = Au(t);
    let { class: a, style: l } = t;
    a && !Ee(a) && (t.class = he(a)), be(l) && (/* @__PURE__ */ Zn(l) && !te(l) && (l = Fe({}, l)), t.style = Yt(l));
  }
  const r = Ee(e) ? 1 : Ba(e) ? 128 : ha(e) ? 64 : be(e) ? 4 : de(e) ? 2 : 0;
  return f(
    e,
    t,
    s,
    n,
    o,
    r,
    i,
    !0
  );
}
function Au(e) {
  return e ? /* @__PURE__ */ Zn(e) || Ia(e) ? Fe({}, e) : e : null;
}
function Jt(e, t, s = !1, n = !1) {
  const { props: o, ref: i, patchFlag: r, children: a, transition: l } = e, c = t ? Mu(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && ja(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? te(i) ? i.concat(xn(t)) : [i, xn(t)] : xn(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== le ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Jt(e.ssContent),
    ssFallback: e.ssFallback && Jt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && n && Qs(
    u,
    l.clone(u)
  ), u;
}
function ls(e = " ", t = 0) {
  return ce(no, null, e, t);
}
function pn(e, t) {
  const s = ce(kn, null, e);
  return s.staticCount = t, s;
}
function Ce(e = "", t = !1) {
  return t ? (R(), mt(Xe, null, e)) : ce(Xe, null, e);
}
function Tt(e) {
  return e == null || typeof e == "boolean" ? ce(Xe) : te(e) ? ce(
    le,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : On(e) ? Lt(e) : ce(no, null, String(e));
}
function Lt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Jt(e);
}
function Ln(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (te(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Ln(e, o()), o._c && (o._d = !0));
      return;
    } else {
      s = 32;
      const o = t._;
      !o && !Ia(t) ? t._ctx = ct : o === 3 && ct && (ct.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (de(t)) {
    if (n & 65) {
      Ln(e, { default: t });
      return;
    }
    t = { default: t, _ctx: ct }, s = 32;
  } else
    t = String(t), n & 64 ? (s = 16, t = [ls(t)]) : s = 8;
  e.children = t, e.shapeFlag |= s;
}
function Mu(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const o in n)
      if (o === "class")
        t.class !== n.class && (t.class = he([t.class, n.class]));
      else if (o === "style")
        t.style = Yt([t.style, n.style]);
      else if (zn(o)) {
        const i = t[o], r = n[o];
        r && i !== r && !(te(i) && i.includes(r)) ? t[o] = i ? [].concat(i, r) : r : r == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Gn(o) && (t[o] = r);
      } else o !== "" && (t[o] = n[o]);
  }
  return t;
}
function wt(e, t, s, n = null) {
  ft(e, t, 7, [
    s,
    n
  ]);
}
const Eu = Ta();
let Pu = 0;
function Iu(e, t, s) {
  const n = e.type, o = (t ? t.appContext : e.appContext) || Eu, i = {
    uid: Pu++,
    vnode: e,
    type: n,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new jr(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Oa(n, o),
    emitsOptions: Aa(n, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Te,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Te,
    data: Te,
    props: Te,
    attrs: Te,
    slots: Te,
    refs: Te,
    setupState: Te,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = lu.bind(null, i), e.ce && e.ce(i), i;
}
let Ze = null;
const gi = () => Ze || ct;
let $n, Bo;
{
  const e = Jn(), t = (s, n) => {
    let o;
    return (o = e[s]) || (o = e[s] = []), o.push(n), (i) => {
      o.length > 1 ? o.forEach((r) => r(i)) : o[0](i);
    };
  };
  $n = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => Ze = s
  ), Bo = t(
    "__VUE_SSR_SETTERS__",
    (s) => tn = s
  );
}
const ln = (e) => {
  const t = Ze;
  return $n(e), e.scope.on(), () => {
    e.scope.off(), $n(t);
  };
}, Ui = () => {
  Ze && Ze.scope.off(), $n(null);
};
function Ha(e) {
  return e.vnode.shapeFlag & 4;
}
let tn = !1;
function Ru(e, t = !1, s = !1) {
  t && Bo(t);
  const { props: n, children: o } = e.vnode, i = Ha(e);
  hu(e, n, i, t), vu(e, o, s || t);
  const r = i ? Ou(e, t) : void 0;
  return t && Bo(!1), r;
}
function Ou(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Qc);
  const { setup: n } = s;
  if (n) {
    Et();
    const o = e.setupContext = n.length > 1 ? $u(e) : null, i = ln(e), r = on(
      n,
      e,
      0,
      [
        e.props,
        o
      ]
    ), a = Or(r);
    if (Pt(), i(), (a || e.sp) && !Hs(e) && wa(e), a) {
      if (r.then(Ui, Ui), t)
        return r.then((l) => {
          ji(e, l);
        }).catch((l) => {
          Qn(l, e, 0);
        });
      e.asyncDep = r;
    } else
      ji(e, r);
  } else
    Va(e);
}
function ji(e, t, s) {
  de(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : be(t) && (e.setupState = oa(t)), Va(e);
}
function Va(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || Mt);
  {
    const o = ln(e);
    Et();
    try {
      eu(e);
    } finally {
      Pt(), o();
    }
  }
}
const Lu = {
  get(e, t) {
    return Ke(e, "get", ""), e[t];
  }
};
function $u(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, Lu),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function oo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(oa(ui(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in Vs)
        return Vs[s](e);
    },
    has(t, s) {
      return s in t || s in Vs;
    }
  })) : e.proxy;
}
function Du(e) {
  return de(e) && "__vccOpts" in e;
}
const Ae = (e, t) => /* @__PURE__ */ Cc(e, t, tn);
function Nu(e, t, s) {
  try {
    Rn(-1);
    const n = arguments.length;
    return n === 2 ? be(t) && !te(t) ? On(t) ? ce(e, null, [t]) : ce(e, t) : ce(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && On(s) && (s = [s]), ce(e, t, s));
  } finally {
    Rn(1);
  }
}
const Fu = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Uo;
const Hi = typeof window < "u" && window.trustedTypes;
if (Hi)
  try {
    Uo = /* @__PURE__ */ Hi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Wa = Uo ? (e) => Uo.createHTML(e) : (e) => e, Bu = "http://www.w3.org/2000/svg", Uu = "http://www.w3.org/1998/Math/MathML", Ot = typeof document < "u" ? document : null, Vi = Ot && /* @__PURE__ */ Ot.createElement("template"), ju = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const o = t === "svg" ? Ot.createElementNS(Bu, e) : t === "mathml" ? Ot.createElementNS(Uu, e) : s ? Ot.createElement(e, { is: s }) : Ot.createElement(e);
    return e === "select" && n && n.multiple != null && o.setAttribute("multiple", n.multiple), o;
  },
  createText: (e) => Ot.createTextNode(e),
  createComment: (e) => Ot.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ot.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, s, n, o, i) {
    const r = s ? s.previousSibling : t.lastChild;
    if (o && (o === i || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), s), !(o === i || !(o = o.nextSibling)); )
        ;
    else {
      Vi.innerHTML = Wa(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Vi.content;
      if (n === "svg" || n === "mathml") {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      t.insertBefore(a, s);
    }
    return [
      // first
      r ? r.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, Vt = "transition", Es = "animation", sn = /* @__PURE__ */ Symbol("_vtc"), za = {
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
}, Hu = /* @__PURE__ */ Fe(
  {},
  ma,
  za
), Vu = (e) => (e.displayName = "Transition", e.props = Hu, e), Wu = /* @__PURE__ */ Vu(
  (e, { slots: t }) => Nu(jc, zu(e), t)
), ts = (e, t = []) => {
  te(e) ? e.forEach((s) => s(...t)) : e && e(...t);
}, Wi = (e) => e ? te(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function zu(e) {
  const t = {};
  for (const D in e)
    D in za || (t[D] = e[D]);
  if (e.css === !1)
    return t;
  const {
    name: s = "v",
    type: n,
    duration: o,
    enterFromClass: i = `${s}-enter-from`,
    enterActiveClass: r = `${s}-enter-active`,
    enterToClass: a = `${s}-enter-to`,
    appearFromClass: l = i,
    appearActiveClass: c = r,
    appearToClass: u = a,
    leaveFromClass: p = `${s}-leave-from`,
    leaveActiveClass: w = `${s}-leave-active`,
    leaveToClass: x = `${s}-leave-to`
  } = e, A = Gu(o), k = A && A[0], F = A && A[1], {
    onBeforeEnter: K,
    onEnter: j,
    onEnterCancelled: Z,
    onLeave: _,
    onLeaveCancelled: y,
    onBeforeAppear: S = K,
    onAppear: b = j,
    onAppearCancelled: V = Z
  } = t, P = (D, Q, re, ke) => {
    D._enterCancelled = ke, ss(D, Q ? u : a), ss(D, Q ? c : r), re && re();
  }, X = (D, Q) => {
    D._isLeaving = !1, ss(D, p), ss(D, x), ss(D, w), Q && Q();
  }, q = (D) => (Q, re) => {
    const ke = D ? b : j, U = () => P(Q, D, re);
    ts(ke, [Q, U]), zi(() => {
      ss(Q, D ? l : i), Rt(Q, D ? u : a), Wi(ke) || Gi(Q, n, k, U);
    });
  };
  return Fe(t, {
    onBeforeEnter(D) {
      ts(K, [D]), Rt(D, i), Rt(D, r);
    },
    onBeforeAppear(D) {
      ts(S, [D]), Rt(D, l), Rt(D, c);
    },
    onEnter: q(!1),
    onAppear: q(!0),
    onLeave(D, Q) {
      D._isLeaving = !0;
      const re = () => X(D, Q);
      Rt(D, p), D._enterCancelled ? (Rt(D, w), Ji(D)) : (Ji(D), Rt(D, w)), zi(() => {
        D._isLeaving && (ss(D, p), Rt(D, x), Wi(_) || Gi(D, n, F, re));
      }), ts(_, [D, re]);
    },
    onEnterCancelled(D) {
      P(D, !1, void 0, !0), ts(Z, [D]);
    },
    onAppearCancelled(D) {
      P(D, !0, void 0, !0), ts(V, [D]);
    },
    onLeaveCancelled(D) {
      X(D), ts(y, [D]);
    }
  });
}
function Gu(e) {
  if (e == null)
    return null;
  if (be(e))
    return [mo(e.enter), mo(e.leave)];
  {
    const t = mo(e);
    return [t, t];
  }
}
function mo(e) {
  return Wl(e);
}
function Rt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.add(s)), (e[sn] || (e[sn] = /* @__PURE__ */ new Set())).add(t);
}
function ss(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const s = e[sn];
  s && (s.delete(t), s.size || (e[sn] = void 0));
}
function zi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ku = 0;
function Gi(e, t, s, n) {
  const o = e._endId = ++Ku, i = () => {
    o === e._endId && n();
  };
  if (s != null)
    return setTimeout(i, s);
  const { type: r, timeout: a, propCount: l } = Yu(e, t);
  if (!r)
    return n();
  const c = r + "end";
  let u = 0;
  const p = () => {
    e.removeEventListener(c, w), i();
  }, w = (x) => {
    x.target === e && ++u >= l && p();
  };
  setTimeout(() => {
    u < l && p();
  }, a + 1), e.addEventListener(c, w);
}
function Yu(e, t) {
  const s = window.getComputedStyle(e), n = (A) => (s[A] || "").split(", "), o = n(`${Vt}Delay`), i = n(`${Vt}Duration`), r = Ki(o, i), a = n(`${Es}Delay`), l = n(`${Es}Duration`), c = Ki(a, l);
  let u = null, p = 0, w = 0;
  t === Vt ? r > 0 && (u = Vt, p = r, w = i.length) : t === Es ? c > 0 && (u = Es, p = c, w = l.length) : (p = Math.max(r, c), u = p > 0 ? r > c ? Vt : Es : null, w = u ? u === Vt ? i.length : l.length : 0);
  const x = u === Vt && /\b(?:transform|all)(?:,|$)/.test(
    n(`${Vt}Property`).toString()
  );
  return {
    type: u,
    timeout: p,
    propCount: w,
    hasTransform: x
  };
}
function Ki(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((s, n) => Yi(s) + Yi(e[n])));
}
function Yi(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ji(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ju(e, t, s) {
  const n = e[sn];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const Dn = /* @__PURE__ */ Symbol("_vod"), Ga = /* @__PURE__ */ Symbol("_vsh"), hn = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: s }) {
    e[Dn] = e.style.display === "none" ? "" : e.style.display, s && t ? s.beforeEnter(e) : Ps(e, t);
  },
  mounted(e, { value: t }, { transition: s }) {
    s && t && s.enter(e);
  },
  updated(e, { value: t, oldValue: s }, { transition: n }) {
    !t != !s && (n ? t ? (n.beforeEnter(e), Ps(e, !0), n.enter(e)) : n.leave(e, () => {
      Ps(e, !1);
    }) : Ps(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ps(e, t);
  }
};
function Ps(e, t) {
  e.style.display = t ? e[Dn] : "none", e[Ga] = !t;
}
const qu = /* @__PURE__ */ Symbol(""), Xu = /(?:^|;)\s*display\s*:/;
function Zu(e, t, s) {
  const n = e.style, o = Ee(s);
  let i = !1;
  if (s && !o) {
    if (t)
      if (Ee(t))
        for (const r of t.split(";")) {
          const a = r.slice(0, r.indexOf(":")).trim();
          s[a] == null && $s(n, a, "");
        }
      else
        for (const r in t)
          s[r] == null && $s(n, r, "");
    for (const r in s) {
      r === "display" && (i = !0);
      const a = s[r];
      a != null ? ef(
        e,
        r,
        !Ee(t) && t ? t[r] : void 0,
        a
      ) || $s(n, r, a) : $s(n, r, "");
    }
  } else if (o) {
    if (t !== s) {
      const r = n[qu];
      r && (s += ";" + r), n.cssText = s, i = Xu.test(s);
    }
  } else t && e.removeAttribute("style");
  Dn in e && (e[Dn] = i ? n.display : "", e[Ga] && (n.display = "none"));
}
const qi = /\s*!important$/;
function $s(e, t, s) {
  if (te(s))
    s.forEach((n) => $s(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = Qu(e, t);
    qi.test(s) ? e.setProperty(
      qt(n),
      s.replace(qi, ""),
      "important"
    ) : e[n] = s;
  }
}
const Xi = ["Webkit", "Moz", "ms"], yo = {};
function Qu(e, t) {
  const s = yo[t];
  if (s)
    return s;
  let n = ht(t);
  if (n !== "filter" && n in e)
    return yo[t] = n;
  n = Dr(n);
  for (let o = 0; o < Xi.length; o++) {
    const i = Xi[o] + n;
    if (i in e)
      return yo[t] = i;
  }
  return t;
}
function ef(e, t, s, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Ee(n) && s === n;
}
const Zi = "http://www.w3.org/1999/xlink";
function Qi(e, t, s, n, o, i = ql(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Zi, t.slice(6, t.length)) : e.setAttributeNS(Zi, t, s) : s == null || i && !Fr(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : ut(s) ? String(s) : s
  );
}
function er(e, t, s, n, o) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? Wa(s) : s);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const a = i === "OPTION" ? e.getAttribute("value") || "" : e.value, l = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(s);
    (a !== l || !("_value" in e)) && (e.value = l), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let r = !1;
  if (s === "" || s == null) {
    const a = typeof e[t];
    a === "boolean" ? s = Fr(s) : s == null && a === "string" ? (s = "", r = !0) : a === "number" && (s = 0, r = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  r && e.removeAttribute(o || t);
}
function vs(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function tf(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const tr = /* @__PURE__ */ Symbol("_vei");
function sf(e, t, s, n, o = null) {
  const i = e[tr] || (e[tr] = {}), r = i[t];
  if (n && r)
    r.value = n;
  else {
    const [a, l] = rf(t);
    if (n) {
      const c = i[t] = cf(
        n,
        o
      );
      vs(e, a, c, l);
    } else r && (tf(e, a, r, l), i[t] = void 0);
  }
}
const nf = /(Once|Passive|Capture)$/, of = /^on:?(?:Once|Passive|Capture)$/;
function rf(e) {
  let t, s;
  for (; (s = e.match(nf)) && !of.test(e); )
    t || (t = {}), e = e.slice(0, e.length - s[1].length), t[s[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : qt(e.slice(2)), t];
}
let vo = 0;
const af = /* @__PURE__ */ Promise.resolve(), lf = () => vo || (af.then(() => vo = 0), vo = Date.now());
function cf(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    const o = s.value;
    if (te(o)) {
      const i = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        i.call(n), n._stopped = !0;
      };
      const r = o.slice(), a = [n];
      for (let l = 0; l < r.length && !n._stopped; l++) {
        const c = r[l];
        c && ft(
          c,
          t,
          5,
          a
        );
      }
    } else
      ft(
        o,
        t,
        5,
        [n]
      );
  };
  return s.value = e, s.attached = lf(), s;
}
const sr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, uf = (e, t, s, n, o, i) => {
  const r = o === "svg";
  t === "class" ? Ju(e, n, r) : t === "style" ? Zu(e, s, n) : zn(t) ? Gn(t) || sf(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ff(e, t, n, r)) ? (er(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Qi(e, t, n, r, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (df(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ee(n))) ? er(e, ht(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Qi(e, t, n, r));
};
function ff(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && sr(t) && de(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return sr(t) && Ee(s) ? !1 : t in e;
}
function df(e, t) {
  const s = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!s)
    return !1;
  const n = ht(t);
  return Array.isArray(s) ? s.some((o) => ht(o) === n) : Object.keys(s).some((o) => ht(o) === n);
}
const nr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return te(t) ? (s) => wn(t, s) : t;
};
function pf(e) {
  e.target.composing = !0;
}
function or(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const _o = /* @__PURE__ */ Symbol("_assign");
function ir(e, t, s) {
  return t && (e = e.trim()), s && (e = si(e)), e;
}
const hf = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, o) {
    e[_o] = nr(o);
    const i = n || o.props && o.props.type === "number";
    vs(e, t ? "change" : "input", (r) => {
      r.target.composing || e[_o](ir(e.value, s, i));
    }), (s || i) && vs(e, "change", () => {
      e.value = ir(e.value, s, i);
    }), t || (vs(e, "compositionstart", pf), vs(e, "compositionend", or), vs(e, "change", or));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: s, modifiers: { lazy: n, trim: o, number: i } }, r) {
    if (e[_o] = nr(r), e.composing) return;
    const a = (i || e.type === "number") && !/^0\d/.test(e.value) ? si(e.value) : e.value, l = t ?? "";
    if (a === l)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (n && t === s || o && e.value.trim() === l) || (e.value = l);
  }
}, gf = ["ctrl", "shift", "alt", "meta"], mf = {
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
  exact: (e, t) => gf.some((s) => e[`${s}Key`] && !t.includes(s))
}, Kt = (e, t) => {
  if (!e) return e;
  const s = e._withMods || (e._withMods = {}), n = t.join(".");
  return s[n] || (s[n] = (o, ...i) => {
    for (let r = 0; r < t.length; r++) {
      const a = mf[t[r]];
      if (a && a(o, t)) return;
    }
    return e(o, ...i);
  });
}, yf = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, vf = (e, t) => {
  const s = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return s[n] || (s[n] = (o) => {
    if (!("key" in o))
      return;
    const i = qt(o.key);
    if (t.some(
      (r) => r === i || yf[r] === i
    ))
      return e(o);
  });
}, _f = /* @__PURE__ */ Fe({ patchProp: uf }, ju);
let rr;
function bf() {
  return rr || (rr = bu(_f));
}
const Ka = (...e) => {
  const t = bf().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const o = kf(n);
    if (!o) return;
    const i = t._component;
    !de(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const r = s(o, !1, wf(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), r;
  }, t;
};
function wf(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function kf(e) {
  return Ee(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Ya;
const io = (e) => Ya = e, Ja = (
  /* istanbul ignore next */
  Symbol()
);
function jo(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var zs;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(zs || (zs = {}));
function xf() {
  const e = Hr(!0), t = e.run(() => /* @__PURE__ */ ge({}));
  let s = [], n = [];
  const o = ui({
    install(i) {
      io(o), o._a = i, i.provide(Ja, o), i.config.globalProperties.$pinia = o, n.forEach((r) => s.push(r)), n = [];
    },
    use(i) {
      return this._a ? s.push(i) : n.push(i), this;
    },
    _p: s,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return o;
}
const qa = () => {
};
function ar(e, t, s, n = qa) {
  e.push(t);
  const o = () => {
    const i = e.indexOf(t);
    i > -1 && (e.splice(i, 1), n());
  };
  return !s && Vr() && Zl(o), o;
}
function hs(e, ...t) {
  e.slice().forEach((s) => {
    s(...t);
  });
}
const Sf = (e) => e(), lr = Symbol(), bo = Symbol();
function Ho(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((s, n) => e.set(n, s)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const s in t) {
    if (!t.hasOwnProperty(s))
      continue;
    const n = t[s], o = e[s];
    jo(o) && jo(n) && e.hasOwnProperty(s) && !/* @__PURE__ */ Ie(n) && !/* @__PURE__ */ Ft(n) ? e[s] = Ho(o, n) : e[s] = n;
  }
  return e;
}
const Cf = (
  /* istanbul ignore next */
  Symbol()
);
function Tf(e) {
  return !jo(e) || !e.hasOwnProperty(Cf);
}
const { assign: zt } = Object;
function Af(e) {
  return !!(/* @__PURE__ */ Ie(e) && e.effect);
}
function Mf(e, t, s, n) {
  const { state: o, actions: i, getters: r } = t, a = s.state.value[e];
  let l;
  function c() {
    a || (s.state.value[e] = o ? o() : {});
    const u = /* @__PURE__ */ wc(s.state.value[e]);
    return zt(u, i, Object.keys(r || {}).reduce((p, w) => (p[w] = ui(Ae(() => {
      io(s);
      const x = s._s.get(e);
      return r[w].call(x, x);
    })), p), {}));
  }
  return l = Xa(e, c, t, s, n, !0), l;
}
function Xa(e, t, s = {}, n, o, i) {
  let r;
  const a = zt({ actions: {} }, s), l = { deep: !0 };
  let c, u, p = [], w = [], x;
  const A = n.state.value[e];
  !i && !A && (n.state.value[e] = {});
  let k;
  function F(V) {
    let P;
    c = u = !1, typeof V == "function" ? (V(n.state.value[e]), P = {
      type: zs.patchFunction,
      storeId: e,
      events: x
    }) : (Ho(n.state.value[e], V), P = {
      type: zs.patchObject,
      payload: V,
      storeId: e,
      events: x
    });
    const X = k = Symbol();
    Ue().then(() => {
      k === X && (c = !0);
    }), u = !0, hs(p, P, n.state.value[e]);
  }
  const K = i ? function() {
    const { state: P } = s, X = P ? P() : {};
    this.$patch((q) => {
      zt(q, X);
    });
  } : (
    /* istanbul ignore next */
    qa
  );
  function j() {
    r.stop(), p = [], w = [], n._s.delete(e);
  }
  const Z = (V, P = "") => {
    if (lr in V)
      return V[bo] = P, V;
    const X = function() {
      io(n);
      const q = Array.from(arguments), D = [], Q = [];
      function re(C) {
        D.push(C);
      }
      function ke(C) {
        Q.push(C);
      }
      hs(w, {
        args: q,
        name: X[bo],
        store: y,
        after: re,
        onError: ke
      });
      let U;
      try {
        U = V.apply(this && this.$id === e ? this : y, q);
      } catch (C) {
        throw hs(Q, C), C;
      }
      return U instanceof Promise ? U.then((C) => (hs(D, C), C)).catch((C) => (hs(Q, C), Promise.reject(C))) : (hs(D, U), U);
    };
    return X[lr] = !0, X[bo] = P, X;
  }, _ = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: ar.bind(null, w),
    $patch: F,
    $reset: K,
    $subscribe(V, P = {}) {
      const X = ar(p, V, P.detached, () => q()), q = r.run(() => Qe(() => n.state.value[e], (D) => {
        (P.flush === "sync" ? u : c) && V({
          storeId: e,
          type: zs.direct,
          events: x
        }, D);
      }, zt({}, l, P)));
      return X;
    },
    $dispose: j
  }, y = /* @__PURE__ */ Xn(_);
  n._s.set(e, y);
  const b = (n._a && n._a.runWithContext || Sf)(() => n._e.run(() => (r = Hr()).run(() => t({ action: Z }))));
  for (const V in b) {
    const P = b[V];
    if (/* @__PURE__ */ Ie(P) && !Af(P) || /* @__PURE__ */ Ft(P))
      i || (A && Tf(P) && (/* @__PURE__ */ Ie(P) ? P.value = A[V] : Ho(P, A[V])), n.state.value[e][V] = P);
    else if (typeof P == "function") {
      const X = Z(P, V);
      b[V] = X, a.actions[V] = P;
    }
  }
  return zt(y, b), zt(/* @__PURE__ */ ve(y), b), Object.defineProperty(y, "$state", {
    get: () => n.state.value[e],
    set: (V) => {
      F((P) => {
        zt(P, V);
      });
    }
  }), n._p.forEach((V) => {
    zt(y, r.run(() => V({
      store: y,
      app: n._a,
      pinia: n,
      options: a
    })));
  }), A && i && s.hydrate && s.hydrate(y.$state, A), c = !0, u = !0, y;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ro(e, t, s) {
  let n, o;
  const i = typeof t == "function";
  typeof e == "string" ? (n = e, o = i ? s : t) : (o = e, n = e.id);
  function r(a, l) {
    const c = Rc();
    return a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    a || (c ? Us(Ja, null) : null), a && io(a), a = Ya, a._s.has(n) || (i ? Xa(n, t, o, a) : Mf(n, o, a)), a._s.get(n);
  }
  return r.$id = n, r;
}
let Nn = !1;
function cr(e) {
  Nn = e;
}
function Ef() {
  return Nn;
}
function gn(e, t, s) {
  if (e === "debug" && !Nn || e === "info" && !Nn) return;
  const n = "[晓乐]";
  s.length > 0 ? console[e](`${n} ${t}`, ...s) : console[e](`${n} ${t}`);
}
const z = {
  debug(e, ...t) {
    gn("debug", e, t);
  },
  info(e, ...t) {
    gn("info", e, t);
  },
  warn(e, ...t) {
    gn("warn", e, t);
  },
  error(e, ...t) {
    gn("error", e, t);
  },
  get isDebug() {
    return Ef();
  }
};
function Pf() {
  return [
    { id: "netease", enabled: !0, priority: 0, config: {} },
    { id: "local", enabled: !1, priority: 1, config: {} }
  ];
}
function wo() {
  return {
    volume: 65,
    playMode: "list",
    crossfade: !1,
    position: null,
    widgetMode: "dock",
    dockAlign: "bottom-left",
    showDragMiniText: !0,
    providers: Pf(),
    customOpacity: !1,
    opacity: 75,
    aiMode: "off",
    aiUseCustomApi: !1,
    aiContextMessages: 8,
    aiApiUrl: "",
    aiApiKey: "",
    aiModel: "",
    aiAutoTrigger: !0,
    aiTriggerOnGreeting: !1,
    aiCooldownMs: 3e3,
    togetherPromptRole: "system",
    togetherCustomPromptEnabled: !1,
    togetherCustomPrompt: "",
    debug: !1,
    neteaseMode: "worker",
    neteaseWorkerURL: "",
    neteaseCookie: "",
    neteaseCookieAt: 0,
    neteaseCookieValid: !1
  };
}
const me = /* @__PURE__ */ ro("settings", {
  state: () => ({
    settings: wo(),
    storage: null
  }),
  getters: {
    defaults: () => wo(),
    neteaseStatus(e) {
      const t = e.settings.neteaseCookie, s = e.settings.neteaseCookieAt, n = e.settings.neteaseCookieValid;
      return !t || !s ? "no-cookie" : Date.now() - s >= 14 * 864e5 ? "expired" : n ? "ok" : "invalid";
    }
  },
  actions: {
    init(e) {
      this.storage = e;
      const t = e.getSettings(), s = wo();
      if (t) {
        const n = typeof SillyTavern < "u" && SillyTavern.getContext()?.libs?.lodash ? SillyTavern.getContext().libs.lodash : null;
        n ? this.settings = n.merge(structuredClone(s), t) : this.settings = {
          ...s,
          ...t,
          providers: s.providers.map((o) => {
            const i = t.providers?.find((r) => r.id === o.id);
            return i ? { ...i, config: i.config ?? o.config ?? {} } : o;
          })
        };
      } else
        this.settings = s;
      cr(this.settings.debug);
    },
    setVolume(e) {
      this.settings.volume = e, this.save();
    },
    setPlayMode(e) {
      this.settings.playMode = e, this.save();
    },
    setCrossfade(e) {
      this.settings.crossfade = e, this.save();
    },
    setPosition(e) {
      this.settings.position = e, this.save();
    },
    setWidgetMode(e) {
      this.settings.widgetMode = e, this.save();
    },
    setOpacity(e) {
      this.settings.opacity = e, this.save();
    },
    setCustomOpacity(e) {
      this.settings.customOpacity = e, this.save();
    },
    setDockAlign(e) {
      this.settings.dockAlign = e, this.save();
    },
    setShowDragMiniText(e) {
      this.settings.showDragMiniText = e, this.save();
    },
    setNeteaseMode(e) {
      this.settings.neteaseMode = e, this.save();
    },
    setAiMode(e) {
      this.settings.aiMode = e, this.save();
    },
    setAiUseCustomApi(e) {
      this.settings.aiUseCustomApi = e, this.save();
    },
    setAiContextMessages(e) {
      this.settings.aiContextMessages = e, this.save();
    },
    setAiAutoTrigger(e) {
      this.settings.aiAutoTrigger = e, this.save();
    },
    setAiTriggerOnGreeting(e) {
      this.settings.aiTriggerOnGreeting = e, this.save();
    },
    setAiApiUrl(e) {
      this.settings.aiApiUrl = e, this.save();
    },
    setAiApiKey(e) {
      this.settings.aiApiKey = e, this.save();
    },
    setAiModel(e) {
      this.settings.aiModel = e, this.save();
    },
    setTogetherPromptRole(e) {
      this.settings.togetherPromptRole = e, this.save();
    },
    setTogetherCustomPromptEnabled(e) {
      this.settings.togetherCustomPromptEnabled = e, this.save();
    },
    setTogetherCustomPrompt(e) {
      this.settings.togetherCustomPrompt = e, this.save();
    },
    setDebug(e) {
      this.settings.debug = e, cr(e), this.save();
    },
    setNeteaseWorkerURL(e) {
      let t = e.trim();
      t && !t.startsWith("http://") && !t.startsWith("https://") && (t = "https://" + t), t.endsWith("/") && (t = t.slice(0, -1)), this.settings.neteaseWorkerURL = t, this.save();
    },
    setNeteaseCookie(e) {
      this.settings.neteaseCookie = e, this.settings.neteaseCookieAt = e ? Date.now() : 0, this.settings.neteaseCookieValid = !!e, this.save();
    },
    setNeteaseCookieInvalid() {
      this.settings.neteaseCookieValid = !1, this.save();
    },
    save() {
      this.storage && this.storage.setSettings(this.settings);
    }
  }
}), If = 800;
class Rf {
  constructor() {
    this.listeners = /* @__PURE__ */ new Map(), this.targetVolume = 1, this.fadeRaf = 0, this.fadeAbort = null, this.audio = new Audio(), this.audio.crossOrigin = "anonymous", this.audio.preload = "auto";
  }
  load(t) {
    this.cancelFade(), this.audio.src = t, this.audio.load();
  }
  async play(t = !1) {
    try {
      this.cancelFade(), t ? (this.audio.volume = 0, await this.audio.play(), this.runFade(this.targetVolume)) : (this.audio.volume = this.targetVolume, await this.audio.play());
    } catch (s) {
      z.error("AudioEngine: play() failed:", s);
    }
  }
  pause(t = !1) {
    this.cancelFade(), t && !this.audio.paused ? this.runFade(0, () => this.audio.pause()) : this.audio.pause();
  }
  seek(t) {
    this.audio.currentTime = t;
  }
  setVolume(t) {
    this.targetVolume = t, this.fadeRaf || (this.audio.volume = t);
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
    const o = s;
    return n.add(o), this.audio.addEventListener(t, o), () => {
      this.audio.removeEventListener(t, o), n.delete(o);
    };
  }
  runFade(t, s) {
    const n = this.audio.volume, o = t - n, i = performance.now();
    this.fadeAbort = (a) => {
      a && (this.audio.volume = t), this.fadeRaf = 0, this.fadeAbort = null, s?.();
    };
    const r = (a) => {
      if (!this.fadeAbort) return;
      const l = a - i, c = Math.min(l / If, 1);
      this.audio.volume = Math.max(0, Math.min(1, n + o * c)), c >= 1 ? this.fadeAbort(!0) : this.fadeRaf = requestAnimationFrame(r);
    };
    this.fadeRaf = requestAnimationFrame(r);
  }
  cancelFade() {
    this.fadeAbort && this.fadeAbort(!0), this.fadeRaf && cancelAnimationFrame(this.fadeRaf), this.fadeRaf = 0, this.fadeAbort = null;
  }
  destroy() {
    this.cancelFade();
    for (const [t, s] of this.listeners) {
      for (const n of s)
        this.audio.removeEventListener(t, n);
      s.clear();
    }
    this.listeners.clear(), this.audio.src = "";
  }
}
const ur = /\[(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?\]/g;
function Of(e) {
  const t = e.split(/\r?\n/), s = [];
  for (const n of t) {
    const o = new RegExp(ur.source, "g"), i = [];
    let r;
    for (; (r = o.exec(n)) !== null; ) {
      const l = parseInt(r[1], 10), c = parseInt(r[2], 10), u = r[3] ?? "", p = u ? parseInt(u.padEnd(3, "0"), 10) : 0;
      i.push(l * 60 + c + p / 1e3);
    }
    if (i.length === 0) continue;
    const a = n.replace(new RegExp(ur.source, "g"), "").trim();
    if (a !== "")
      for (const l of i)
        s.push({ time: l, text: a });
  }
  s.sort((n, o) => n.time - o.time);
  for (let n = 0; n < s.length; n++)
    n < s.length - 1 && (s[n].next = s[n + 1]);
  return s;
}
function Lf(e, t) {
  if (e.length === 0) return null;
  let s = null;
  for (const n of e)
    if (n.time <= t)
      s = n;
    else
      break;
  return s;
}
class $f {
  constructor(t) {
    this.providers = t;
  }
  async searchAll(t) {
    const s = await Promise.allSettled(
      this.providers.map((i) => i.search(t))
    ), n = [], o = /* @__PURE__ */ new Map();
    return s.forEach((i, r) => {
      if (i.status !== "fulfilled") {
        z.warn("Provider search failed: " + this.providers[r]?.id, i.reason);
        return;
      }
      for (const a of i.value) {
        const l = `${a.name}__${a.artist}`;
        o.get(l) === void 0 && (o.set(l, n.length), n.push(a));
      }
    }), n;
  }
  async resolve(t, s, n) {
    const o = this.getProvider(s);
    return o ? new Promise((i) => {
      const r = setTimeout(() => i(null), 2e4);
      o.resolve(t, n).then((a) => {
        clearTimeout(r), i(a);
      }).catch((a) => {
        clearTimeout(r), z.warn("Resolve failed: " + s + "/" + t, a), i(null);
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
          const o = await n.searchAndResolve(t, s);
          if (o) return o;
        } catch (o) {
          z.warn("Provider searchAndResolve failed: " + n.id, o);
        }
    return null;
  }
  getProvider(t) {
    return this.providers.find((s) => s.id === t);
  }
}
const fr = (typeof globalThis < "u" ? globalThis : void 0)?.crypto || (typeof global < "u" ? global : void 0)?.crypto || (typeof window < "u" ? window : void 0)?.crypto || (typeof self < "u" ? self : void 0)?.crypto || (typeof frames < "u" ? frames : void 0)?.[0]?.crypto;
let Vo;
fr ? Vo = (e) => {
  const t = [];
  for (let s = 0; s < e; s += 4) t.push(fr.getRandomValues(new Uint32Array(1))[0]);
  return new et(t, e);
} : Vo = (e) => {
  const t = [], s = (o) => {
    let i = o, r = 987654321;
    const a = 4294967295;
    return () => {
      r = 36969 * (r & 65535) + (r >> 16) & a, i = 18e3 * (i & 65535) + (i >> 16) & a;
      let l = (r << 16) + i & a;
      return l /= 4294967296, l += 0.5, l * (Math.random() > 0.5 ? 1 : -1);
    };
  };
  let n;
  for (let o = 0; o < e; o += 4) {
    const i = s((n || Math.random()) * 4294967296);
    n = i() * 987654071, t.push(i() * 4294967296 | 0);
  }
  return new et(t, e);
};
var ds = class {
  /**
  * Creates a new instance of this class with the provided arguments.
  * This is a factory method that provides an alternative to using 'new'.
  * 
  * @param args - Arguments to pass to the constructor
  * @returns A new instance of this class
  * @static
  * @example
  * ```javascript
  * const instance = MyType.create(arg1, arg2);
  * ```
  */
  static create(...e) {
    return new this(...e);
  }
  /**
  * Copies properties from the provided object into this instance.
  * Performs a shallow merge of properties.
  * 
  * @param properties - The properties to mix in
  * @returns This instance for method chaining
  * @example
  * ```javascript
  * instance.mixIn({ field: 'value', another: 123 });
  * ```
  */
  mixIn(e) {
    return Object.assign(this, e);
  }
  /**
  * Creates a deep copy of this object.
  * 
  * @returns A clone of this instance
  * @example
  * ```javascript
  * const clone = instance.clone();
  * ```
  */
  clone() {
    const e = new this.constructor();
    return Object.assign(e, this), e;
  }
}, So, et = (So = class extends ds {
  /**
  * Initializes a newly created word array.
  * Can accept various input formats including regular arrays, typed arrays, and ArrayBuffers.
  * 
  * @param words - An array of 32-bit words, typed array, or ArrayBuffer
  * @param sigBytes - The number of significant bytes in the words (defaults to words.length * 4)
  * @example
  * ```javascript
  * const wordArray = new WordArray();
  * const wordArray = new WordArray([0x00010203, 0x04050607]);
  * const wordArray = new WordArray([0x00010203, 0x04050607], 6);
  * const wordArray = new WordArray(new Uint8Array([1, 2, 3, 4]));
  * ```
  */
  constructor(t = [], s) {
    super();
    /** The array of 32-bit words */
    ne(this, "words");
    /** The number of significant bytes in this word array */
    ne(this, "sigBytes");
    if (t instanceof ArrayBuffer) {
      const n = new Uint8Array(t);
      this._initFromUint8Array(n);
      return;
    }
    if (ArrayBuffer.isView(t)) {
      let n;
      t instanceof Uint8Array ? n = t : n = new Uint8Array(t.buffer, t.byteOffset, t.byteLength), this._initFromUint8Array(n);
      return;
    }
    this.words = t, this.sigBytes = s !== void 0 ? s : this.words.length * 4;
  }
  /**
  * Initialize from Uint8Array
  * @private
  */
  _initFromUint8Array(t) {
    const s = t.byteLength, n = [];
    for (let o = 0; o < s; o += 1) n[o >>> 2] |= t[o] << 24 - o % 4 * 8;
    this.words = n, this.sigBytes = s;
  }
  /**
  * Converts this word array to a string using the specified encoding.
  * 
  * @param encoder - The encoding strategy to use (defaults to Hex)
  * @returns The stringified word array
  * @example
  * ```javascript
  * const hexString = wordArray.toString();
  * const base64String = wordArray.toString(Base64);
  * const utf8String = wordArray.toString(Utf8);
  * ```
  */
  toString(t = Za) {
    return t.stringify(this);
  }
  /**
  * Concatenates a word array to this word array.
  * Modifies this word array in place.
  * 
  * @param wordArray - The word array to append
  * @returns This word array for method chaining
  * @example
  * ```javascript
  * wordArray1.concat(wordArray2);
  * const combined = wordArray1.concat(wordArray2).concat(wordArray3);
  * ```
  */
  concat(t) {
    const s = this.words, n = t.words, o = this.sigBytes, i = t.sigBytes;
    if (this.clamp(), o % 4) for (let r = 0; r < i; r += 1) {
      const a = n[r >>> 2] >>> 24 - r % 4 * 8 & 255;
      s[o + r >>> 2] |= a << 24 - (o + r) % 4 * 8;
    }
    else for (let r = 0; r < i; r += 4) s[o + r >>> 2] = n[r >>> 2];
    return this.sigBytes += i, this;
  }
  /**
  * Removes insignificant bits from the end of the word array.
  * This ensures the word array only contains the exact number of significant bytes.
  * 
  * @example
  * ```javascript
  * wordArray.clamp();
  * ```
  */
  clamp() {
    const { words: t, sigBytes: s } = this;
    t[s >>> 2] &= 4294967295 << 32 - s % 4 * 8, t.length = Math.ceil(s / 4);
  }
  /**
  * Creates a copy of this word array.
  * 
  * @returns The cloned word array
  * @example
  * ```javascript
  * const clone = wordArray.clone();
  * ```
  */
  clone() {
    const t = super.clone();
    return t.words = this.words.slice(0), t;
  }
}, /**
* Creates a word array filled with cryptographically strong random bytes.
* Uses Web Crypto API if available, falls back to Math.random() if not.
* 
* @param nBytes - The number of random bytes to generate
* @returns The random word array
* @static
* @example
* ```javascript
* const randomBytes = WordArray.random(16); // Generate 16 random bytes
* ```
*/
ne(So, "random", Vo), So);
const Za = {
  stringify(e) {
    const { words: t, sigBytes: s } = e, n = [];
    for (let o = 0; o < s; o += 1) {
      const i = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
      n.push((i >>> 4).toString(16)), n.push((i & 15).toString(16));
    }
    return n.join("");
  },
  parse(e) {
    const t = e.length, s = [];
    for (let n = 0; n < t; n += 2) s[n >>> 3] |= parseInt(e.substr(n, 2), 16) << 24 - n % 8 * 4;
    return new et(s, t / 2);
  }
}, dr = {
  stringify(e) {
    const { words: t, sigBytes: s } = e, n = [];
    for (let o = 0; o < s; o += 1) {
      const i = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
      n.push(String.fromCharCode(i));
    }
    return n.join("");
  },
  parse(e) {
    const t = e.length, s = [];
    for (let n = 0; n < t; n += 1) s[n >>> 2] |= (e.charCodeAt(n) & 255) << 24 - n % 4 * 8;
    return new et(s, t);
  }
}, mi = {
  stringify(e) {
    try {
      return decodeURIComponent(escape(dr.stringify(e)));
    } catch {
      throw new Error("Malformed UTF-8 data");
    }
  },
  parse(e) {
    return dr.parse(unescape(encodeURIComponent(e)));
  }
};
var Qa = class extends ds {
  constructor() {
    super();
    /** The number of blocks that should be kept unprocessed in the buffer */
    ne(this, "_minBufferSize", 0);
    /** The data buffer */
    ne(this, "_data");
    /** The number of bytes in the data buffer */
    ne(this, "_nDataBytes");
  }
  /**
  * Resets this block algorithm's data buffer to its initial state.
  * 
  * @example
  * ```javascript
  * bufferedBlockAlgorithm.reset();
  * ```
  */
  reset() {
    this._data = new et(), this._nDataBytes = 0;
  }
  /**
  * Adds new data to this block algorithm's buffer.
  * 
  * @param data - The data to append (strings are converted to WordArray using UTF-8)
  * @example
  * ```javascript
  * bufferedBlockAlgorithm._append('data');
  * bufferedBlockAlgorithm._append(wordArray);
  * ```
  */
  _append(t) {
    let s;
    typeof t == "string" ? s = mi.parse(t) : s = t, this._data.concat(s), this._nDataBytes += s.sigBytes;
  }
  /**
  * Processes available data blocks.
  * This method invokes _doProcessBlock(dataWords, offset), which must be implemented by a concrete subtype.
  * 
  * @param doFlush - Whether all blocks and partial blocks should be processed
  * @returns The processed data
  * @example
  * ```javascript
  * const processedData = bufferedBlockAlgorithm._process();
  * const processedData = bufferedBlockAlgorithm._process(true); // Flush
  * ```
  */
  _process(t) {
    let s;
    const n = this._data, o = n.words, i = n.sigBytes, r = this.blockSize * 4;
    let a = i / r;
    t ? a = Math.ceil(a) : a = Math.max((a | 0) - this._minBufferSize, 0);
    const l = a * this.blockSize, c = Math.min(l * 4, i);
    if (l) {
      for (let u = 0; u < l; u += this.blockSize) this._doProcessBlock(o, u);
      s = o.splice(0, l), n.sigBytes -= c;
    }
    return new et(s || [], c);
  }
  /**
  * Creates a copy of this object.
  * 
  * @returns The clone
  * @example
  * ```javascript
  * const clone = bufferedBlockAlgorithm.clone();
  * ```
  */
  clone() {
    const t = super.clone();
    return t._data = this._data.clone(), t;
  }
}, el = class extends Qa {
  /**
  * Initializes a newly created hasher.
  * 
  * @param cfg - Configuration options
  */
  constructor(t) {
    super();
    /** The number of 32-bit words this hasher operates on */
    ne(this, "blockSize", 512 / 32);
    /** Configuration options */
    ne(this, "cfg");
    /** The hash result */
    ne(this, "_hash");
    this.cfg = Object.assign({}, t), this.reset();
  }
  /**
  * Creates a shortcut function to a hasher's object interface.
  * 
  * @param SubHasher - The hasher class to create a helper for
  * @returns The shortcut function
  * @static
  * @example
  * ```javascript
  * const SHA256 = Hasher._createHelper(SHA256Algo);
  * ```
  */
  static _createHelper(t) {
    return (s, n) => new t(n).finalize(s);
  }
  /**
  * Creates a shortcut function to the HMAC's object interface.
  * 
  * @param SubHasher - The hasher class to use in this HMAC helper
  * @returns The shortcut function
  * @static
  * @example
  * ```javascript
  * const HmacSHA256 = Hasher._createHmacHelper(SHA256Algo);
  * ```
  */
  static _createHmacHelper(t) {
    return (s, n) => new Nf(t, n).finalize(s);
  }
  /**
  * Resets this hasher to its initial state.
  * 
  * @example
  * ```javascript
  * hasher.reset();
  * ```
  */
  reset() {
    super.reset(), this._doReset();
  }
  /**
  * Updates this hasher with a message.
  * 
  * @param messageUpdate - The message to append
  * @returns This hasher instance for method chaining
  * @example
  * ```javascript
  * hasher.update('message');
  * hasher.update(wordArray);
  * ```
  */
  update(t) {
    return this._append(t), this._process(), this;
  }
  /**
  * Finalizes the hash computation.
  * Note that the finalize operation is effectively a destructive, read-once operation.
  * 
  * @param messageUpdate - An optional final message update
  * @returns The computed hash
  * @example
  * ```javascript
  * const hash = hasher.finalize();
  * const hash = hasher.finalize('message');
  * const hash = hasher.finalize(wordArray);
  * ```
  */
  finalize(t) {
    return t && this._append(t), this._doFinalize();
  }
}, Df = class extends el {
}, Nf = class tl extends ds {
  /**
  * Initializes a newly created HMAC.
  * 
  * @param SubHasher - The hash algorithm class to use
  * @param key - The secret key
  * @example
  * ```javascript
  * const hmac = new HMAC(SHA256Algo, 'secret key');
  * ```
  */
  constructor(s, n) {
    super();
    /** The inner hasher instance */
    ne(this, "_hasher");
    /** The outer key */
    ne(this, "_oKey");
    /** The inner key */
    ne(this, "_iKey");
    const o = new s();
    this._hasher = o;
    let i;
    typeof n == "string" ? i = mi.parse(n) : i = n;
    const r = o.blockSize, a = r * 4;
    i.sigBytes > a && (i = o.finalize(i)), i.clamp();
    const l = i.clone();
    this._oKey = l;
    const c = i.clone();
    this._iKey = c;
    const u = l.words, p = c.words;
    for (let w = 0; w < r; w += 1)
      u[w] ^= 1549556828, p[w] ^= 909522486;
    l.sigBytes = a, c.sigBytes = a, this.reset();
  }
  static create(...s) {
    const [n, o] = s;
    return new tl(n, o);
  }
  /**
  * Resets this HMAC to its initial state.
  * 
  * @example
  * ```javascript
  * hmac.reset();
  * ```
  */
  reset() {
    const s = this._hasher;
    s.reset(), s.update(this._iKey);
  }
  /**
  * Updates this HMAC with a message.
  * 
  * @param messageUpdate - The message to append
  * @returns This HMAC instance for method chaining
  * @example
  * ```javascript
  * hmac.update('message');
  * hmac.update(wordArray);
  * ```
  */
  update(s) {
    return this._hasher.update(s), this;
  }
  /**
  * Finalizes the HMAC computation.
  * Note that the finalize operation is effectively a destructive, read-once operation.
  * 
  * @param messageUpdate - An optional final message update
  * @returns The computed HMAC
  * @example
  * ```javascript
  * const hmacValue = hmac.finalize();
  * const hmacValue = hmac.finalize('message');
  * const hmacValue = hmac.finalize(wordArray);
  * ```
  */
  finalize(s) {
    const n = this._hasher, o = n.finalize(s);
    return n.reset(), n.finalize(this._oKey.clone().concat(o));
  }
};
const Ff = (e, t, s) => {
  const n = [];
  let o = 0;
  for (let i = 0; i < t; i += 1) if (i % 4) {
    const r = s[e.charCodeAt(i - 1)] << i % 4 * 2, a = s[e.charCodeAt(i)] >>> 6 - i % 4 * 2, l = r | a;
    n[o >>> 2] |= l << 24 - o % 4 * 8, o += 1;
  }
  return et.create(n, o);
};
var Bf = class {
  constructor() {
    /** The Base64 character map */
    ne(this, "_map", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");
    /** The reverse character map for decoding */
    ne(this, "_reverseMap");
  }
  /**
  * Converts a word array to a Base64 string.
  * 
  * @param wordArray - The word array to convert
  * @returns The Base64 string representation
  * @example
  * ```javascript
  * const base64String = Base64.stringify(wordArray);
  * ```
  */
  stringify(e) {
    const { words: t, sigBytes: s } = e, n = this._map;
    e.clamp();
    const o = [];
    for (let r = 0; r < s; r += 3) {
      const a = t[r >>> 2] >>> 24 - r % 4 * 8 & 255, l = t[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255, c = t[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255, u = a << 16 | l << 8 | c;
      for (let p = 0; p < 4 && r + p * 0.75 < s; p += 1) o.push(n.charAt(u >>> 6 * (3 - p) & 63));
    }
    const i = n.charAt(64);
    if (i) for (; o.length % 4; ) o.push(i);
    return o.join("");
  }
  /**
  * Converts a Base64 string to a word array.
  * 
  * @param base64Str - The Base64 string to parse
  * @returns The word array representation
  * @example
  * ```javascript
  * const wordArray = Base64.parse(base64String);
  * ```
  */
  parse(e) {
    let t = e.length;
    const s = this._map;
    let n = this._reverseMap;
    if (!n) {
      this._reverseMap = [], n = this._reverseMap;
      for (let i = 0; i < s.length; i += 1) n[s.charCodeAt(i)] = i;
    }
    const o = s.charAt(64);
    if (o) {
      const i = e.indexOf(o);
      i !== -1 && (t = i);
    }
    return Ff(e, t, n);
  }
};
const Wo = new Bf(), J = /* @__PURE__ */ (() => {
  const e = [];
  for (let t = 0; t < 64; t += 1) e[t] = Math.abs(Math.sin(t + 1)) * 4294967296 | 0;
  return e;
})(), Ve = (e, t, s, n, o, i, r) => {
  const a = e + (t & s | ~t & n) + o + r;
  return (a << i | a >>> 32 - i) + t;
}, We = (e, t, s, n, o, i, r) => {
  const a = e + (t & n | s & ~n) + o + r;
  return (a << i | a >>> 32 - i) + t;
}, ze = (e, t, s, n, o, i, r) => {
  const a = e + (t ^ s ^ n) + o + r;
  return (a << i | a >>> 32 - i) + t;
}, Ge = (e, t, s, n, o, i, r) => {
  const a = e + (s ^ (t | ~n)) + o + r;
  return (a << i | a >>> 32 - i) + t;
};
var sl = class extends Df {
  _doReset() {
    this._hash = new et([
      1732584193,
      4023233417,
      2562383102,
      271733878
    ]);
  }
  _doProcessBlock(e, t) {
    const s = e;
    for (let V = 0; V < 16; V += 1) {
      const P = t + V, X = e[P];
      s[P] = (X << 8 | X >>> 24) & 16711935 | (X << 24 | X >>> 8) & 4278255360;
    }
    const n = this._hash.words, o = s[t + 0], i = s[t + 1], r = s[t + 2], a = s[t + 3], l = s[t + 4], c = s[t + 5], u = s[t + 6], p = s[t + 7], w = s[t + 8], x = s[t + 9], A = s[t + 10], k = s[t + 11], F = s[t + 12], K = s[t + 13], j = s[t + 14], Z = s[t + 15];
    let _ = n[0], y = n[1], S = n[2], b = n[3];
    _ = Ve(_, y, S, b, o, 7, J[0]), b = Ve(b, _, y, S, i, 12, J[1]), S = Ve(S, b, _, y, r, 17, J[2]), y = Ve(y, S, b, _, a, 22, J[3]), _ = Ve(_, y, S, b, l, 7, J[4]), b = Ve(b, _, y, S, c, 12, J[5]), S = Ve(S, b, _, y, u, 17, J[6]), y = Ve(y, S, b, _, p, 22, J[7]), _ = Ve(_, y, S, b, w, 7, J[8]), b = Ve(b, _, y, S, x, 12, J[9]), S = Ve(S, b, _, y, A, 17, J[10]), y = Ve(y, S, b, _, k, 22, J[11]), _ = Ve(_, y, S, b, F, 7, J[12]), b = Ve(b, _, y, S, K, 12, J[13]), S = Ve(S, b, _, y, j, 17, J[14]), y = Ve(y, S, b, _, Z, 22, J[15]), _ = We(_, y, S, b, i, 5, J[16]), b = We(b, _, y, S, u, 9, J[17]), S = We(S, b, _, y, k, 14, J[18]), y = We(y, S, b, _, o, 20, J[19]), _ = We(_, y, S, b, c, 5, J[20]), b = We(b, _, y, S, A, 9, J[21]), S = We(S, b, _, y, Z, 14, J[22]), y = We(y, S, b, _, l, 20, J[23]), _ = We(_, y, S, b, x, 5, J[24]), b = We(b, _, y, S, j, 9, J[25]), S = We(S, b, _, y, a, 14, J[26]), y = We(y, S, b, _, w, 20, J[27]), _ = We(_, y, S, b, K, 5, J[28]), b = We(b, _, y, S, r, 9, J[29]), S = We(S, b, _, y, p, 14, J[30]), y = We(y, S, b, _, F, 20, J[31]), _ = ze(_, y, S, b, c, 4, J[32]), b = ze(b, _, y, S, w, 11, J[33]), S = ze(S, b, _, y, k, 16, J[34]), y = ze(y, S, b, _, j, 23, J[35]), _ = ze(_, y, S, b, i, 4, J[36]), b = ze(b, _, y, S, l, 11, J[37]), S = ze(S, b, _, y, p, 16, J[38]), y = ze(y, S, b, _, A, 23, J[39]), _ = ze(_, y, S, b, K, 4, J[40]), b = ze(b, _, y, S, o, 11, J[41]), S = ze(S, b, _, y, a, 16, J[42]), y = ze(y, S, b, _, u, 23, J[43]), _ = ze(_, y, S, b, x, 4, J[44]), b = ze(b, _, y, S, F, 11, J[45]), S = ze(S, b, _, y, Z, 16, J[46]), y = ze(y, S, b, _, r, 23, J[47]), _ = Ge(_, y, S, b, o, 6, J[48]), b = Ge(b, _, y, S, p, 10, J[49]), S = Ge(S, b, _, y, j, 15, J[50]), y = Ge(y, S, b, _, c, 21, J[51]), _ = Ge(_, y, S, b, F, 6, J[52]), b = Ge(b, _, y, S, a, 10, J[53]), S = Ge(S, b, _, y, A, 15, J[54]), y = Ge(y, S, b, _, i, 21, J[55]), _ = Ge(_, y, S, b, w, 6, J[56]), b = Ge(b, _, y, S, Z, 10, J[57]), S = Ge(S, b, _, y, u, 15, J[58]), y = Ge(y, S, b, _, K, 21, J[59]), _ = Ge(_, y, S, b, l, 6, J[60]), b = Ge(b, _, y, S, k, 10, J[61]), S = Ge(S, b, _, y, r, 15, J[62]), y = Ge(y, S, b, _, x, 21, J[63]), n[0] = n[0] + _ | 0, n[1] = n[1] + y | 0, n[2] = n[2] + S | 0, n[3] = n[3] + b | 0;
  }
  _doFinalize() {
    const e = this._data, t = e.words, s = this._nDataBytes * 8, n = e.sigBytes * 8;
    t[n >>> 5] |= 128 << 24 - n % 32;
    const o = Math.floor(s / 4294967296), i = s;
    t[(n + 64 >>> 9 << 4) + 15] = (o << 8 | o >>> 24) & 16711935 | (o << 24 | o >>> 8) & 4278255360, t[(n + 64 >>> 9 << 4) + 14] = (i << 8 | i >>> 24) & 16711935 | (i << 24 | i >>> 8) & 4278255360, e.sigBytes = (t.length + 1) * 4, this._process();
    const r = this._hash, a = r.words;
    for (let l = 0; l < 4; l += 1) {
      const c = a[l];
      a[l] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
    }
    return r;
  }
  clone() {
    const e = super.clone.call(this);
    return e._hash = this._hash.clone(), e;
  }
};
const nl = el._createHelper(sl);
var pr = class extends ds {
  /**
  * Initializes a newly created key derivation function.
  *
  * @param {Object} cfg (Optional) The configuration options to use for the derivation.
  *
  * @example
  *
  *     const kdf = new EvpKDFAlgo();
  *     const kdf = new EvpKDFAlgo({ keySize: 8 });
  *     const kdf = new EvpKDFAlgo({ keySize: 8, iterations: 1000 });
  */
  constructor(t) {
    super();
    ne(this, "cfg");
    this.cfg = Object.assign({}, {
      keySize: 128 / 32,
      hasher: sl,
      iterations: 1
    }, t);
  }
  /**
  * Derives a key from a password.
  *
  * @param {WordArray|string} password The password.
  * @param {WordArray|string} salt A salt.
  *
  * @return {WordArray} The derived key.
  *
  * @example
  *
  *     const key = kdf.compute(password, salt);
  */
  compute(t, s) {
    let n;
    const { cfg: o } = this, i = new o.hasher(), r = et.create(), a = r.words, { keySize: l, iterations: c } = o;
    for (; a.length < l; ) {
      n && i.update(n), n = i.update(t).finalize(s), i.reset();
      for (let u = 1; u < c; u += 1)
        n = i.finalize(n), i.reset();
      r.concat(n);
    }
    return r.sigBytes = l * 4, r;
  }
}, pt, Uf = (pt = class extends Qa {
  /**
  * Initializes a newly created cipher.
  * 
  * @param xformMode - Either the encryption or decryption transformation mode constant
  * @param key - The key
  * @param cfg - Configuration options to use for this operation
  * @example
  * ```javascript
  * const cipher = new AESAlgo(
  *   Cipher._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray }
  * );
  * ```
  */
  constructor(s, n, o) {
    super();
    /** Configuration options */
    ne(this, "cfg");
    /** Transform mode (encryption or decryption) */
    ne(this, "_xformMode");
    /** The key */
    ne(this, "_key");
    /** Block size in words */
    ne(this, "blockSize", 128 / 32);
    this.cfg = Object.assign({}, o), this._xformMode = s, this._key = n;
  }
  /**
  * Creates this cipher in encryption mode.
  * 
  * @param key - The key
  * @param cfg - Configuration options to use for this operation
  * @returns A cipher instance
  * @static
  * @example
  * ```javascript
  * const cipher = AESAlgo.createEncryptor(keyWordArray, { iv: ivWordArray });
  * ```
  */
  static createEncryptor(s, n) {
    return this.create(pt._ENC_XFORM_MODE, s, n);
  }
  /**
  * Creates this cipher in decryption mode.
  * 
  * @param key - The key
  * @param cfg - Configuration options to use for this operation
  * @returns A cipher instance
  * @static
  * @example
  * ```javascript
  * const cipher = AESAlgo.createDecryptor(keyWordArray, { iv: ivWordArray });
  * ```
  */
  static createDecryptor(s, n) {
    return this.create(pt._DEC_XFORM_MODE, s, n);
  }
  static create(...s) {
    if (s.length >= 2 && typeof s[0] == "number") {
      const [n, o, i] = s, r = new this(n, o, i);
      return r.reset(), r;
    } else return new this(...s);
  }
  /**
  * Creates shortcut functions to a cipher's object interface.
  * 
  * @param SubCipher - The cipher to create a helper for
  * @returns An object with encrypt and decrypt shortcut functions
  * @static
  * @example
  * ```javascript
  * const AES = Cipher._createHelper(AESAlgo);
  * ```
  */
  static _createHelper(s) {
    const n = (o) => typeof o == "string" ? zf : Ds;
    return {
      encrypt(o, i, r) {
        return n(i).encrypt(s, o, i, r);
      },
      decrypt(o, i, r) {
        return n(i).decrypt(s, o, i, r);
      }
    };
  }
  /**
  * Resets this cipher to its initial state.
  * 
  * @example
  * ```javascript
  * cipher.reset();
  * ```
  */
  reset() {
    super.reset(), this._doReset();
  }
  /**
  * Adds data to be encrypted or decrypted.
  * 
  * @param dataUpdate - The data to encrypt or decrypt
  * @returns The data after processing
  * @example
  * ```javascript
  * const encrypted = cipher.process('data');
  * const encrypted = cipher.process(wordArray);
  * ```
  */
  process(s) {
    return this._append(s), this._process();
  }
  /**
  * Finalizes the encryption or decryption process.
  * Note that the finalize operation is effectively a destructive, read-once operation.
  * 
  * @param dataUpdate - The final data to encrypt or decrypt
  * @returns The data after final processing
  * @example
  * ```javascript
  * const encrypted = cipher.finalize();
  * const encrypted = cipher.finalize('data');
  * const encrypted = cipher.finalize(wordArray);
  * ```
  */
  finalize(s) {
    return s && this._append(s), this._doFinalize();
  }
}, /** Encryption mode constant */
ne(pt, "_ENC_XFORM_MODE", 1), /** Decryption mode constant */
ne(pt, "_DEC_XFORM_MODE", 2), /** Default key size in words (128 bits) */
ne(pt, "keySize", 128 / 32), /** Default IV size in words (128 bits) */
ne(pt, "ivSize", 128 / 32), pt), Cs = class extends ds {
  /**
  * Initializes a newly created mode.
  * 
  * @param cipher - A block cipher instance
  * @param iv - The IV words
  * @example
  * ```javascript
  * const mode = new CBCMode(cipher, iv.words);
  * ```
  */
  constructor(t, s) {
    super();
    /** The cipher instance */
    ne(this, "_cipher");
    /** The initialization vector */
    ne(this, "_iv");
    /** The previous block (for chaining modes) */
    ne(this, "_prevBlock");
    this._cipher = t, this._iv = s;
  }
  /**
  * Creates this mode for encryption.
  * 
  * @param cipher - A block cipher instance
  * @param iv - The IV words
  * @returns The mode instance
  * @static
  * @example
  * ```javascript
  * const mode = CBC.createEncryptor(cipher, iv.words);
  * ```
  */
  static createEncryptor(t, s) {
    return this.Encryptor.create(t, s);
  }
  /**
  * Creates this mode for decryption.
  * 
  * @param cipher - A block cipher instance
  * @param iv - The IV words
  * @returns The mode instance
  * @static
  * @example
  * ```javascript
  * const mode = CBC.createDecryptor(cipher, iv.words);
  * ```
  */
  static createDecryptor(t, s) {
    return this.Decryptor.create(t, s);
  }
  /**
  * Process a block of data
  * Must be implemented by concrete modes
  */
  processBlock(t, s) {
  }
};
function ol(e, t, s) {
  const n = e;
  let o;
  const i = this._iv;
  if (i ? (o = i, this._iv = void 0) : o = this._prevBlock, o) for (let r = 0; r < s; r += 1) n[t + r] ^= o[r];
}
var jf = class extends Cs {
  /**
  * Processes the data block at offset.
  * 
  * @param words - The data words to operate on
  * @param offset - The offset where the block starts
  * @example
  * ```javascript
  * mode.processBlock(data.words, offset);
  * ```
  */
  processBlock(e, t) {
    const s = this._cipher, n = s.blockSize;
    ol.call(this, e, t, n), s.encryptBlock(e, t), this._prevBlock = e.slice(t, t + n);
  }
}, Hf = class extends Cs {
  /**
  * Processes the data block at offset.
  * 
  * @param words - The data words to operate on
  * @param offset - The offset where the block starts
  * @example
  * ```javascript
  * mode.processBlock(data.words, offset);
  * ```
  */
  processBlock(e, t) {
    const s = this._cipher, n = s.blockSize, o = e.slice(t, t + n);
    s.decryptBlock(e, t), ol.call(this, e, t, n), this._prevBlock = o;
  }
}, _n, Vf = (_n = class extends Cs {
}, /** CBC Encryptor */
ne(_n, "Encryptor", jf), /** CBC Decryptor */
ne(_n, "Decryptor", Hf), _n);
const il = {
  pad(e, t) {
    const s = t * 4, n = s - e.sigBytes % s, o = n << 24 | n << 16 | n << 8 | n, i = [];
    for (let a = 0; a < n; a += 4) i.push(o);
    const r = et.create(i, n);
    e.concat(r);
  },
  unpad(e) {
    const t = e.words[e.sigBytes - 1 >>> 2] & 255;
    e.sigBytes -= t;
  }
};
var rl = class extends Uf {
  /**
  * Initializes a newly created block cipher.
  * 
  * @param xformMode - Transform mode
  * @param key - The key
  * @param cfg - Configuration options
  */
  constructor(t, s, n) {
    super(t, s, Object.assign({
      mode: Vf,
      padding: il
    }, n));
    /** Block mode instance */
    ne(this, "_mode");
    this.blockSize = 128 / 32;
  }
  reset() {
    super.reset();
    const { cfg: t } = this, { iv: s, mode: n } = t;
    let o;
    this._xformMode === this.constructor._ENC_XFORM_MODE ? o = n?.createEncryptor : (o = n?.createDecryptor, this._minBufferSize = 1), o && n && (this._mode = o.call(n, this, s?.words), this._mode.__creator = o);
  }
  _doProcessBlock(t, s) {
    this._mode?.processBlock(t, s);
  }
  _doFinalize() {
    let t;
    const { padding: s } = this.cfg;
    return this._xformMode === this.constructor._ENC_XFORM_MODE ? (s && s.pad(this._data, this.blockSize), t = this._process(!0)) : (t = this._process(!0), s && s.unpad(t)), t;
  }
}, Gs = class al extends ds {
  /**
  * Initializes a newly created cipher params object.
  * 
  * @param cipherParams - An object with any of the possible cipher parameters
  * @example
  * ```javascript
  * const cipherParams = new CipherParams({
  *   ciphertext: ciphertextWordArray,
  *   key: keyWordArray,
  *   iv: ivWordArray,
  *   salt: saltWordArray,
  *   algorithm: AESAlgo,
  *   mode: CBC,
  *   padding: Pkcs7,
  *   blockSize: 4,
  *   formatter: OpenSSLFormatter
  * });
  * ```
  */
  constructor(s) {
    super();
    ne(this, "ciphertext");
    ne(this, "key");
    ne(this, "iv");
    ne(this, "salt");
    ne(this, "algorithm");
    ne(this, "mode");
    ne(this, "padding");
    ne(this, "blockSize");
    ne(this, "formatter");
    s && this.mixIn(s), this.formatter || (this.formatter = zo);
  }
  static create(...s) {
    const [n] = s;
    return new al(n);
  }
  /**
  * Converts this cipher params object to a string.
  * 
  * @param formatter - The formatting strategy to use
  * @returns The stringified cipher params
  * @throws Error if neither the formatter nor the default formatter is set
  * @example
  * ```javascript
  * const string = cipherParams.toString();
  * const string = cipherParams.toString(OpenSSLFormatter);
  * ```
  */
  toString(s) {
    const n = s || this.formatter;
    if (!n) throw new Error("cipher params formatter required");
    return n.stringify(this);
  }
};
const zo = {
  stringify(e) {
    let t;
    const { ciphertext: s, salt: n } = e;
    return n && s ? t = et.create([1398893684, 1701076831]).concat(n).concat(s) : s ? t = s : t = new et(), t.toString(Wo);
  },
  parse(e) {
    let t;
    const s = Wo.parse(e), n = s.words;
    return n[0] === 1398893684 && n[1] === 1701076831 && (t = et.create(n.slice(2, 4)), n.splice(0, 4), s.sigBytes -= 16), Gs.create({
      ciphertext: s,
      salt: t
    });
  }
};
var Co, Ds = (Co = class extends ds {
  /**
  * Encrypts a message.
  * 
  * @param cipher - The cipher algorithm to use
  * @param message - The message to encrypt
  * @param key - The key
  * @param cfg - Configuration options to use for this operation
  * @returns A cipher params object
  * @static
  * @example
  * ```javascript
  * const ciphertextParams = SerializableCipher.encrypt(AESAlgo, message, key);
  * const ciphertextParams = SerializableCipher.encrypt(AESAlgo, message, key, { iv: iv });
  * ```
  */
  static encrypt(e, t, s, n) {
    const o = Object.assign({}, this.cfg, n), i = e.createEncryptor(s, o), r = i.finalize(t), a = i.cfg;
    return Gs.create({
      ciphertext: r,
      key: s,
      iv: a.iv,
      algorithm: e,
      mode: a.mode,
      padding: a.padding,
      blockSize: i.blockSize,
      formatter: o.format || zo
    });
  }
  /**
  * Decrypts serialized ciphertext.
  * 
  * @param cipher - The cipher algorithm to use
  * @param ciphertext - The ciphertext to decrypt
  * @param key - The key
  * @param cfg - Configuration options to use for this operation
  * @returns The plaintext
  * @static
  * @example
  * ```javascript
  * const plaintext = SerializableCipher.decrypt(AESAlgo, formattedCiphertext, key, { iv: iv });
  * const plaintext = SerializableCipher.decrypt(AESAlgo, ciphertextParams, key, { iv: iv });
  * ```
  */
  static decrypt(e, t, s, n) {
    const o = Object.assign({}, this.cfg, n), i = this._parse(t, o.format);
    return e.createDecryptor(s, o).finalize(i.ciphertext);
  }
  /**
  * Converts serialized ciphertext to CipherParams.
  * 
  * @param ciphertext - The ciphertext
  * @param format - The formatting strategy to use to parse serialized ciphertext
  * @returns The unserialized ciphertext
  * @static
  * @private
  */
  static _parse(e, t) {
    if (typeof e == "string") {
      if (!t) throw new Error("Format required to parse string");
      return t.parse(e, this);
    }
    return e instanceof Gs ? e : new Gs(e);
  }
}, /** Configuration options */
ne(Co, "cfg", { format: zo }), Co);
const Wf = { execute(e, t, s, n, o) {
  let i;
  n ? typeof n == "string" ? i = Za.parse(n) : i = n : i = et.random(64 / 8);
  let r;
  o ? r = pr.create({
    keySize: t + s,
    hasher: o
  }).compute(e, i) : r = pr.create({ keySize: t + s }).compute(e, i);
  const a = et.create(r.words.slice(t), s * 4);
  return r.sigBytes = t * 4, Gs.create({
    key: r,
    iv: a,
    salt: i
  });
} };
var To, zf = (To = class extends Ds {
  /**
  * Encrypts a message using a password.
  * 
  * @param cipher - The cipher algorithm to use
  * @param message - The message to encrypt
  * @param password - The password
  * @param cfg - Configuration options to use for this operation
  * @returns A cipher params object
  * @static
  * @example
  * ```javascript
  * const ciphertextParams = PasswordBasedCipher.encrypt(AESAlgo, message, 'password');
  * ```
  */
  static encrypt(e, t, s, n) {
    const o = Object.assign({}, this.cfg, n);
    if (!o.kdf) throw new Error("KDF required for password-based encryption");
    const i = o.kdf.execute(s, e.keySize || e.keySize, e.ivSize || e.ivSize, o.salt, o.hasher);
    o.iv = i.iv;
    const r = Ds.encrypt.call(this, e, t, i.key, o);
    return r.salt = i.salt, r;
  }
  /**
  * Decrypts serialized ciphertext using a password.
  * 
  * @param cipher - The cipher algorithm to use
  * @param ciphertext - The ciphertext to decrypt
  * @param password - The password
  * @param cfg - Configuration options to use for this operation
  * @returns The plaintext
  * @static
  * @example
  * ```javascript
  * const plaintext = PasswordBasedCipher.decrypt(AESAlgo, formattedCiphertext, 'password');
  * ```
  */
  static decrypt(e, t, s, n) {
    const o = Object.assign({}, this.cfg, n), i = this._parse(t, o.format);
    if (!o.kdf) throw new Error("KDF required for password-based decryption");
    const r = o.kdf.execute(s, e.keySize || e.keySize, e.ivSize || e.ivSize, i.salt, o.hasher);
    return o.iv = r.iv, Ds.decrypt.call(this, e, i, r.key, o);
  }
}, /** Configuration options */
ne(To, "cfg", Object.assign({}, Ds.cfg, { kdf: Wf })), To);
const tt = [], ll = [], cl = [], ul = [], fl = [], dl = [], Go = [], Ko = [], Yo = [], Jo = [];
(() => {
  const e = [];
  for (let n = 0; n < 256; n += 1) n < 128 ? e[n] = n << 1 : e[n] = n << 1 ^ 283;
  let t = 0, s = 0;
  for (let n = 0; n < 256; n += 1) {
    let o = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4;
    o = o >>> 8 ^ o & 255 ^ 99, tt[t] = o, ll[o] = t;
    const i = e[t], r = e[i], a = e[r];
    let l = e[o] * 257 ^ o * 16843008;
    cl[t] = l << 24 | l >>> 8, ul[t] = l << 16 | l >>> 16, fl[t] = l << 8 | l >>> 24, dl[t] = l, l = a * 16843009 ^ r * 65537 ^ i * 257 ^ t * 16843008, Go[o] = l << 24 | l >>> 8, Ko[o] = l << 16 | l >>> 16, Yo[o] = l << 8 | l >>> 24, Jo[o] = l, t ? (t = i ^ e[e[e[a ^ i]]], s ^= e[e[s]]) : (s = 1, t = s);
  }
})();
const Gf = [
  0,
  1,
  2,
  4,
  8,
  16,
  32,
  64,
  128,
  27,
  54
];
var Ao, Kf = (Ao = class extends rl {
  constructor() {
    super(...arguments);
    /** Number of rounds for this key size */
    ne(this, "_nRounds");
    /** Previous key for optimization */
    ne(this, "_keyPriorReset");
    /** Key schedule for encryption */
    ne(this, "_keySchedule");
    /** Inverse key schedule for decryption */
    ne(this, "_invKeySchedule");
  }
  _doReset() {
    let t;
    if (this._nRounds && this._keyPriorReset === this._key) return;
    this._keyPriorReset = this._key;
    const s = this._keyPriorReset, n = s.words, o = s.sigBytes / 4;
    this._nRounds = o + 6;
    const r = (this._nRounds + 1) * 4;
    this._keySchedule = [];
    const a = this._keySchedule;
    for (let c = 0; c < r; c += 1) c < o ? a[c] = n[c] : (t = a[c - 1], c % o ? o > 6 && c % o === 4 && (t = tt[t >>> 24] << 24 | tt[t >>> 16 & 255] << 16 | tt[t >>> 8 & 255] << 8 | tt[t & 255]) : (t = t << 8 | t >>> 24, t = tt[t >>> 24] << 24 | tt[t >>> 16 & 255] << 16 | tt[t >>> 8 & 255] << 8 | tt[t & 255], t ^= Gf[c / o | 0] << 24), a[c] = a[c - o] ^ t);
    this._invKeySchedule = [];
    const l = this._invKeySchedule;
    for (let c = 0; c < r; c += 1) {
      const u = r - c;
      c % 4 ? t = a[u] : t = a[u - 4], c < 4 || u <= 4 ? l[c] = t : l[c] = Go[tt[t >>> 24]] ^ Ko[tt[t >>> 16 & 255]] ^ Yo[tt[t >>> 8 & 255]] ^ Jo[tt[t & 255]];
    }
  }
  encryptBlock(t, s) {
    this._doCryptBlock(t, s, this._keySchedule, cl, ul, fl, dl, tt);
  }
  decryptBlock(t, s) {
    const n = t;
    let o = n[s + 1];
    n[s + 1] = n[s + 3], n[s + 3] = o, this._doCryptBlock(n, s, this._invKeySchedule, Go, Ko, Yo, Jo, ll), o = n[s + 1], n[s + 1] = n[s + 3], n[s + 3] = o;
  }
  _doCryptBlock(t, s, n, o, i, r, a, l) {
    const c = t, u = this._nRounds;
    let p = c[s] ^ n[0], w = c[s + 1] ^ n[1], x = c[s + 2] ^ n[2], A = c[s + 3] ^ n[3], k = 4;
    for (let _ = 1; _ < u; _ += 1) {
      const y = o[p >>> 24] ^ i[w >>> 16 & 255] ^ r[x >>> 8 & 255] ^ a[A & 255] ^ n[k];
      k += 1;
      const S = o[w >>> 24] ^ i[x >>> 16 & 255] ^ r[A >>> 8 & 255] ^ a[p & 255] ^ n[k];
      k += 1;
      const b = o[x >>> 24] ^ i[A >>> 16 & 255] ^ r[p >>> 8 & 255] ^ a[w & 255] ^ n[k];
      k += 1;
      const V = o[A >>> 24] ^ i[p >>> 16 & 255] ^ r[w >>> 8 & 255] ^ a[x & 255] ^ n[k];
      k += 1, p = y, w = S, x = b, A = V;
    }
    const F = (l[p >>> 24] << 24 | l[w >>> 16 & 255] << 16 | l[x >>> 8 & 255] << 8 | l[A & 255]) ^ n[k];
    k += 1;
    const K = (l[w >>> 24] << 24 | l[x >>> 16 & 255] << 16 | l[A >>> 8 & 255] << 8 | l[p & 255]) ^ n[k];
    k += 1;
    const j = (l[x >>> 24] << 24 | l[A >>> 16 & 255] << 16 | l[p >>> 8 & 255] << 8 | l[w & 255]) ^ n[k];
    k += 1;
    const Z = (l[A >>> 24] << 24 | l[p >>> 16 & 255] << 16 | l[w >>> 8 & 255] << 8 | l[x & 255]) ^ n[k];
    k += 1, c[s] = F, c[s + 1] = K, c[s + 2] = j, c[s + 3] = Z;
  }
}, /** Key size in 32-bit words */
ne(Ao, "keySize", 256 / 32), Ao);
const Yf = rl._createHelper(Kf);
var Jf = class extends Cs {
  processBlock(e, t) {
    this._cipher.encryptBlock(e, t);
  }
}, qf = class extends Cs {
  processBlock(e, t) {
    this._cipher.decryptBlock(e, t);
  }
}, bn, Xf = (bn = class extends Cs {
}, ne(bn, "Encryptor", Jf), ne(bn, "Decryptor", qf), bn);
const Zf = "e82ckenh8dichen8", Qf = mi.parse(Zf), hr = "3go8&$8*3*3h0k(2)2";
function ed(e, t) {
  const s = JSON.stringify(t), n = nl("nobody" + e + "use" + s + "md5forencrypt").toString(), o = `${e}-36cd479b6b5-${s}-36cd479b6b5-${n}`, r = Yf.encrypt(o, Qf, {
    mode: Xf,
    padding: il
  }).ciphertext;
  return r ? r.toString().toUpperCase() : (z.error("eapiEncrypt produced empty ciphertext", { urlPath: e }), "");
}
function td(e) {
  const t = e.split("").map((o, i) => String.fromCharCode(o.charCodeAt(0) ^ hr.charCodeAt(i % hr.length))).join(""), s = nl(t);
  return Wo.stringify(s).replace(/\//g, "_").replace(/\+/g, "-");
}
function sd(e) {
  return e ? `https://p3.music.126.net/${td(e)}/${e}.jpg?param=300y300` : (z.warn("buildCoverUrl called with empty picId"), "");
}
class nd {
  constructor(t) {
    this.id = "netease", this.name = "网易云", this.workerURL = t?.workerURL?.trim() || "", this.cookie = t?.cookie?.trim() || "";
  }
  async fetchJson(t, s, n = 5e3, o = 2) {
    let i;
    for (let r = 0; r <= o; r++)
      try {
        const a = new AbortController(), l = setTimeout(() => a.abort(), n), c = await fetch(t, { ...s, signal: a.signal });
        if (clearTimeout(l), !c.ok) {
          if (z.warn(`NetEase: HTTP ${c.status} from ${t}`), c.status >= 500 && r < o) continue;
          return null;
        }
        const u = await c.json();
        return u && u.success === !1 ? (z.warn("NetEase: API error: " + (u.error ?? "unknown")), null) : u;
      } catch (a) {
        if (i = a, r < o) continue;
      }
    return z.warn("NetEase: fetchJson failed after " + (o + 1) + " attempts: " + t, i), null;
  }
  probeAudio(t, s = 3e3) {
    return new Promise((n) => {
      const o = new Audio();
      let i = !1;
      const r = () => {
        o.removeEventListener("loadedmetadata", a), o.removeEventListener("error", l), clearTimeout(c), o.src = "";
      }, a = () => {
        i || (i = !0, r(), n(!0));
      }, l = () => {
        i || (i = !0, r(), n(!1));
      }, c = setTimeout(() => {
        i || (i = !0, r(), n(!1));
      }, s);
      o.preload = "metadata", o.addEventListener("loadedmetadata", a), o.addEventListener("error", l), o.src = t;
    });
  }
  async search(t) {
    if (!this.workerURL)
      return z.warn("NetEase: worker URL not configured"), [];
    const n = (await this.fetchJson(
      `${this.workerURL}/search?keyword=${encodeURIComponent(t)}&limit=20`
    ))?.data;
    return Array.isArray(n) ? n.map((o) => ({
      id: String(o.id ?? ""),
      name: String(o.name ?? ""),
      artist: String(o.artist ?? ""),
      duration: o.duration ?? void 0,
      provider: this.id,
      picId: o.picId ? String(o.picId) : void 0
    })) : [];
  }
  async resolve(t, s) {
    if (!this.workerURL)
      return z.warn("NetEase: worker URL not configured"), null;
    if (!this.cookie)
      return z.warn("NetEase: cookie not set, cannot resolve URL"), null;
    const n = "/api/song/enhance/player/url/v1", o = {
      ids: [Number(t)],
      level: "exhigh",
      encodeType: "flac",
      header: JSON.stringify({
        os: "pc",
        appver: "",
        osver: "",
        deviceId: "pyncm!",
        requestId: String(
          Math.floor(Math.random() * 1e7) + 2e7
        )
      })
    }, r = {
      "X-Netease-Params": ed(n, o),
      "X-Netease-Cookie": this.cookie
    }, [a, l, c] = await Promise.all([
      this.fetchJson(`${this.workerURL}/resolve?id=${encodeURIComponent(t)}`, { headers: r }),
      this.fetchJson(`${this.workerURL}/lyric?id=${encodeURIComponent(t)}`),
      this.fetchJson(`${this.workerURL}/detail?id=${encodeURIComponent(t)}`, { headers: r })
    ]), u = a?.data?.url;
    if (!u)
      return z.warn("NetEase: no URL returned for id=" + t), null;
    const p = c?.data, w = p?.cover || (s ? sd(s) : void 0);
    return {
      url: String(u),
      lyric: l?.data?.lyric ? String(l.data.lyric) : void 0,
      cover: w || void 0,
      name: p?.name ? String(p.name) : "",
      artist: p?.artist ? String(p.artist) : "",
      source: this.id
    };
  }
  async searchAndResolve(t, s) {
    const n = s ? `${t} ${s}` : t, o = await this.search(n);
    if (o.length === 0) return null;
    for (const i of o) {
      const r = await this.resolve(i.id, i.picId);
      if (!r) continue;
      if (!await this.probeAudio(r.url)) {
        z.warn("NetEase: audio probe failed for id=" + i.id + ", trying next");
        continue;
      }
      return r.name = i.name, r.artist = i.artist, r;
    }
    return z.warn('NetEase: no playable result for "' + n + '"'), null;
  }
}
class od {
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
const pl = "https://xiaoyue.erocraft.org";
function id(e) {
  return e.neteaseMode === "worker" ? pl : e.neteaseWorkerURL;
}
function fs(e) {
  const s = e.providers.filter((n) => n.enabled).sort((n, o) => n.priority - o.priority).map((n) => {
    const o = n.config ?? {};
    switch (n.id) {
      case "netease":
        return new nd({
          workerURL: id(e),
          cookie: e.neteaseCookie
        });
      case "local":
        return new od({
          storage: o.storage ? o.storage : void 0
        });
      default:
        return null;
    }
  }).filter((n) => n !== null);
  return new $f(s);
}
const rd = {
  "No Song": "当前无播放",
  Search: "搜索",
  "Search Song...": "搜索歌曲...",
  "Searching...": "搜索中...",
  "No results": "未找到匹配歌曲",
  "Type a song name to search": "输入歌名进行搜索",
  "No Songs": "暂无歌曲",
  Network: "网络",
  Upload: "上传",
  Chat: "聊天",
  "Upload audio file": "上传音频文件",
  Retry: "重试",
  Previous: "上一首",
  Next: "下一首",
  Play: "播放",
  Pause: "暂停",
  "Toggle play mode": "切换播放模式",
  "Mute / Unmute": "静音/取消静音",
  "Collapse panel": "收起面板",
  Playlist: "播放列表",
  Close: "关闭",
  Added: "已添加",
  "Add to list": "加入列表",
  "Cannot play": "无法播放",
  "Now playing": "正在播放",
  Paused: "已暂停",
  Delisted: "可能已下架",
  Uploaded: "已上传",
  "Upload failed": "上传失败",
  "Settings exported": "设置已导出",
  "Settings imported": "设置已导入",
  "Playlist exported": "播放列表已导出",
  "Playlist imported": "播放列表已导入",
  "Import failed": "导入失败",
  "Invalid JSON": "JSON 格式错误",
  "AI selected:": "AI 选曲",
  "AI recommendation failed": "AI 选曲失败",
  "AI analyzing": "AI 正在分析场景...",
  "AI not configured": "请先配置 API 地址和模型",
  "AI BGM off": "AI 选曲未开启",
  "Now playing track": "当前播放",
  "models found": "获取到",
  "No models returned": "该端点未返回模型",
  "Failed to fetch models": "获取模型列表失败",
  Connect: "连接",
  "Please fill API URL": "请先填写 API 地址",
  "Enter song name": "请输入歌曲名",
  "Volume set to": "音量已设为",
  "Volume must be 0-100": "音量范围 0-100",
  "Added to playlist": "已添加到列表",
  "Play mode": "播放模式",
  "Source enabled": "已启用",
  "Source disabled": "已禁用",
  "Widget Mode": "播放器模式",
  Dock: "吸附",
  Drag: "拖动",
  Hidden: "隐藏",
  Inline: "集成",
  "Dock Alignment": "吸附对齐",
  "Top Left": "左上",
  "Top Right": "右上",
  "Bottom Left": "左下",
  "Bottom Right": "右下",
  "Choose how the player widget is displayed": "选择播放器小部件的显示方式",
  "Align the docked player to a corner of the screen": "将吸附的播放器对齐到屏幕角落",
  "Show track info in drag mini": "收起时显示曲名",
  "Show song title and lyrics in the compact drag widget": "收起时显示曲名和歌词",
  "Default Volume": "默认音量",
  "Default Play Mode": "默认播放模式",
  Crossfade: "淡入淡出",
  "Smoothly fade in when starting playback and fade out when pausing or switching tracks": "开始播放时淡入，暂停或切换歌曲时淡出",
  "Custom opacity": "自定义透明度",
  Opacity: "透明度",
  "Adjust the player background opacity": "调整播放器背景透明度",
  "Debug Mode": "调试模式",
  "Enable verbose console logging for troubleshooting": "启用详细控制台日志用于排查问题",
  "Export data": "导出设置",
  "Import data": "导入设置",
  "Save your settings to a JSON file": "将设置保存为 JSON 文件",
  "Load settings from a JSON file": "从 JSON 文件加载设置",
  "Export playlist": "导出播放列表",
  "Import playlist": "导入播放列表",
  "Save network playlist to a JSON file": "将网络播放列表保存为 JSON 文件",
  "Load network playlist from a JSON file": "从 JSON 文件加载网络播放列表",
  "List Loop": "列表循环",
  Random: "随机",
  "Single Loop": "单曲循环",
  "Upload and play songs from the server": "向服务端上传并播放歌曲",
  Confirm: "确认",
  Cancel: "取消",
  "Upload warning text": "上传的音频文件将存储在 SillyTavern 服务端，通过服务端网络传输播放。这可能造成播放卡顿、占用服务器磁盘空间。确认要开启吗？",
  "Use a separate API endpoint for BGM agent loop instead of main API function calling": "使用独立 API 端点运行 BGM agent",
  Playback: "播放",
  General: "通用",
  Appearance: "外观",
  AI: "AI",
  Version: "版本",
  "A scene-aware music player extension for SillyTavern": "SillyTavern 情景音乐播放器扩展",
  // AI BGM
  "AI BGM": "AI 选曲",
  "Enable AI-driven background music selection": "启用 AI 驱动的背景音乐选择",
  "AI Mode": "AI 模式",
  Together: "提示词注入",
  "Function Call": "Function Call",
  "Choose how AI selects background music": "选择 AI 选曲的方式",
  "Context Messages": "上下文消息数",
  "Number of recent chat messages to send to AI": "发送给 AI 的最近聊天消息数量",
  "Auto Trigger": "自动触发",
  "Automatically analyze new messages and select music": "自动分析新消息并选择音乐",
  "Trigger on Greeting": "Greeting 触发",
  "Analyze BGM when loading a character card (first message)": "加载角色卡（首条消息）时分析 BGM",
  "API URL": "API 地址",
  "OpenAI-compatible endpoint that supports tool calling": "需支持工具调用的 OpenAI 兼容端点",
  "API Key": "API 密钥",
  "Bearer token for the custom endpoint": "自定义端点的 Bearer 令牌",
  Model: "模型",
  "Model that supports tool calling": "需支持工具调用的模型",
  "Prompt Role": "注入角色",
  "Role used when injecting BGM instructions into the main AI": "向主 AI 注入 BGM 指令时使用的角色",
  System: "系统",
  User: "用户",
  "Custom Prompt": "自定义提示词",
  "Edit the BGM instruction prompt. Use macros like ": "编辑 BGM 指令提示词。可使用 ",
  " for dynamic values.": " 等变量插入动态值。",
  "Edit Prompt": "编辑提示词",
  "Click to edit the BGM instruction prompt": "点击编辑 BGM 指令提示词",
  "Available macros:": "可用变量：",
  "The prompt must contain the markers": "提示词必须包含标记",
  "for BGM control to work.": "才能生效。",
  Save: "保存",
  // NetEase
  "Official Worker": "晓乐",
  "Self-hosted": "自部署",
  "Worker URL": "Worker 地址",
  "Your Cloudflare Worker deployment URL": "你的 Cloudflare Worker 部署地址",
  "Paste MUSIC_U cookie value here": "在此粘贴 MUSIC_U cookie 值",
  "Cookie valid": "Cookie 有效",
  "Cookie invalid or expired": "Cookie 无效或已过期",
  "Cannot reach Worker": "无法连接 Worker",
  "Data Sources": "数据源",
  "NetEase Music": "网易云音乐",
  "Select official or self-hosted Worker": "选择官方服务或自部署 Worker",
  "MUSIC_U Cookie": "MUSIC_U Cookie",
  "Paste cookie from music.163.com": "从 music.163.com 获取的 Cookie",
  "Cookie privacy hint": "Cookie 仅保存在浏览器本地，不会上传到 SillyTavern 服务端。播放时会通过请求头发送至 Worker 用于鉴权，Worker 不会保存 Cookie。",
  "Playlist Management": "列表管理",
  "Playback Settings": "播放设置",
  "Cookie not configured": "Cookie 未配置",
  "Cookie expired": "Cookie 已失效",
  "Cookie invalid": "Cookie 无效",
  "Configure in settings": "请在设置中配置"
};
let gs = null;
function ad() {
  if (gs) return gs;
  try {
    if (typeof SillyTavern < "u") {
      const e = SillyTavern.getContext();
      e?.getCurrentLocale && (gs = e.getCurrentLocale());
    }
  } catch {
  }
  return gs || (gs = (typeof navigator < "u" ? navigator.language || navigator.userLanguage : "en")?.toLowerCase() || "en"), gs;
}
function g(e) {
  return ad().startsWith("zh") ? rd[e] ?? e : e;
}
function hl() {
  const e = { "Content-Type": "application/json" };
  if (typeof SillyTavern < "u" && SillyTavern.getContext) {
    const t = SillyTavern.getContext();
    if (t?.getRequestHeaders) {
      const s = t.getRequestHeaders();
      s && typeof s == "object" && Object.assign(e, s);
    }
  }
  return e;
}
function ld(e) {
  return new Promise((t, s) => {
    const n = new FileReader();
    n.onload = () => {
      const o = n.result, i = o.indexOf(",");
      t(i >= 0 ? o.slice(i + 1) : o);
    }, n.onerror = () => s(n.error), n.readAsDataURL(e);
  });
}
function cd(e) {
  const t = e.lastIndexOf("."), s = t > 0 ? e.slice(0, t) : e, n = t > 0 ? e.slice(t) : "";
  return `${s.replace(/[^a-zA-Z0-9_\-.]/g, "_")}${n}`;
}
async function ud(e) {
  const t = await ld(e), s = cd(e.name), n = await fetch("/api/files/upload", {
    method: "POST",
    headers: hl(),
    body: JSON.stringify({ name: s, data: t })
  });
  if (!n.ok)
    throw new Error(`Upload failed: ${n.status} ${n.statusText}`);
  return (await n.json()).path;
}
async function gl(e) {
  const t = await fetch("/api/files/delete", {
    method: "POST",
    headers: hl(),
    body: JSON.stringify({ path: e })
  });
  t.ok || z.warn("deleteFile failed: " + t.status);
}
function ko() {
  return `stmp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
const rt = /* @__PURE__ */ ro("playlist", {
  state: () => ({
    networkList: [],
    serverList: [],
    chatList: [],
    activeTab: "network",
    currentList: "network",
    currentIndex: -1
  }),
  getters: {
    current(e) {
      const t = e[`${e.currentList}List`];
      return e.currentIndex >= 0 ? t[e.currentIndex] ?? null : null;
    },
    isEmpty(e) {
      return e.networkList.length === 0 && e.serverList.length === 0 && e.chatList.length === 0;
    },
    playMode() {
      return me().settings.playMode;
    },
    activeList(e) {
      return e[`${e.activeTab}List`];
    },
    playingList(e) {
      return e[`${e.currentList}List`];
    }
  },
  actions: {
    init() {
      this.loadFromStorage();
    },
    loadFromStorage() {
      const t = me().storage;
      if (!t) return;
      const s = t.getPlaylistData();
      s && (this.networkList = Array.isArray(s.network) ? s.network : [], this.serverList = Array.isArray(s.server) ? s.server : []);
    },
    savePlaylistData() {
      const t = me().storage;
      if (!t) return;
      const s = {
        network: this.networkList,
        server: this.serverList
      };
      t.setPlaylistData(s);
    },
    getListByTab(e) {
      return this[`${e}List`];
    },
    addItem(e) {
      e.source === "network" ? (this.networkList.push(e), this.savePlaylistData()) : e.source === "server" ? (this.serverList.push(e), this.savePlaylistData()) : e.source === "chat" && this.chatList.push(e);
    },
    removeItem(e, t) {
      const s = this.getListByTab(e);
      if (t < 0 || t >= s.length) return;
      const n = s.splice(t, 1)[0];
      (e === "network" || e === "server") && this.savePlaylistData(), e === "server" && n?.serverPath && gl(n.serverPath), e === this.currentList && t === this.currentIndex ? this.currentIndex = -1 : e === this.currentList && t < this.currentIndex && this.currentIndex--;
    },
    addFromSearch(e, t = !0) {
      const s = this.networkList.findIndex(
        (o) => o.providerId === e.provider && o.providerTrackId === e.id
      );
      if (this.activeTab = "network", s >= 0)
        return t && (this.currentList = "network", this.play("network", s)), !1;
      const n = {
        id: ko(),
        song: e.name,
        artist: e.artist,
        source: "network",
        providerId: e.provider,
        providerTrackId: e.id,
        providerPicId: e.picId,
        addedAt: Date.now()
      };
      return this.networkList.push(n), this.savePlaylistData(), t && (this.currentList = "network", this.play("network", this.networkList.length - 1)), !0;
    },
    addFromAi(e, t = !0) {
      const s = this.chatList.findIndex(
        (o) => o.providerId === e.provider && o.providerTrackId === e.id
      );
      if (this.activeTab = "chat", s >= 0) {
        t && (this.currentList = "chat", this.play("chat", s));
        return;
      }
      const n = {
        id: ko(),
        song: e.name,
        artist: e.artist,
        source: "chat",
        providerId: e.provider,
        providerTrackId: e.id,
        providerPicId: e.picId,
        addedAt: Date.now()
      };
      this.chatList.push(n), t && (this.currentList = "chat", this.play("chat", this.chatList.length - 1));
    },
    async addServerFile(e, t) {
      const s = await ud(t), n = {
        id: ko(),
        song: e,
        source: "server",
        serverPath: s,
        addedAt: Date.now()
      };
      this.serverList.push(n), this.savePlaylistData();
    },
    play(e, t) {
      const s = this.getListByTab(e);
      t < 0 || t >= s.length || (this.currentList = e, this.activeTab = e, this.currentIndex = t, this.resolveAndPlay(e, t));
    },
    next() {
      const e = this.playingList;
      if (e.length === 0) return;
      const t = this.playMode;
      let s = this.currentIndex;
      if (t === "single")
        s = this.currentIndex;
      else if (t === "random")
        if (e.length === 1)
          s = 0;
        else {
          for (let n = 0; n < 5; n++) {
            const o = Math.floor(Math.random() * e.length);
            if (o !== this.currentIndex) {
              s = o;
              break;
            }
          }
          s === this.currentIndex && (s = (this.currentIndex + 1) % e.length);
        }
      else
        s = this.currentIndex + 1, s >= e.length && (s = 0);
      this.currentIndex = s, this.resolveAndPlay(this.currentList, s);
    },
    prev() {
      const e = this.playingList;
      if (e.length === 0) return;
      let t = this.currentIndex - 1;
      t < 0 && (t = e.length - 1), this.currentIndex = t, this.resolveAndPlay(this.currentList, t);
    },
    async resolveAndPlay(e, t) {
      const n = this.getListByTab(e)[t];
      if (!n) return;
      let o = null;
      if (n.source === "server" && n.serverPath ? o = {
        url: n.serverPath,
        name: n.song,
        artist: n.artist ?? "",
        source: "server"
      } : n.providerId && n.providerTrackId && (o = await fs(me().settings).resolve(n.providerTrackId, n.providerId, n.providerPicId), o && (o.name = n.song, o.artist = n.artist ?? "")), !o) {
        const a = me().neteaseStatus;
        let l;
        n.source === "server" ? l = `${g("Cannot play")}：${n.song}` : a === "no-cookie" ? l = g("Cookie not configured") : a === "expired" ? l = g("Cookie expired") : a === "invalid" ? l = g("Cookie invalid") : l = `${g("Cannot play")}：${n.song}（${g("Delisted")}）`, z.warn('Track unavailable: "' + n.song + '"'), typeof toastr < "u" && toastr.warning(l, "晓乐");
        return;
      }
      await Oe().loadAndPlay(o);
    },
    setActiveTab(e) {
      this.activeTab = e;
    }
  }
}), Oe = /* @__PURE__ */ ro("player", {
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
      const e = new Rf();
      this.audioEngine = e;
      const t = Oe();
      e.on("timeupdate", () => {
        if (!e) return;
        t.currentTime = e.currentTime, t.duration = e.duration;
        const s = Lf(t.lyrics, e.currentTime), n = s ? t.lyrics.indexOf(s) : -1;
        t.currentLyricIndex = n;
      }), e.on("ended", () => {
        rt().next();
      }), e.on("play", () => {
        t.isPlaying = !0;
      }), e.on("pause", () => {
        t.isPlaying = !1;
      }), e.on("error", () => {
        z.warn("Audio error event");
      });
    },
    async loadAndPlay(e) {
      this.audioEngine || this.init();
      const t = this.audioEngine, s = me().settings.crossfade;
      t.load(e.url), this.currentTrack = e, e.lyric ? this.updateLyrics(e.lyric) : (this.lyrics = [], this.currentLyricIndex = -1), await t.play(s), e.cover;
    },
    async play() {
      const e = me().settings.crossfade;
      await this.audioEngine?.play(e);
    },
    pause() {
      const e = me().settings.crossfade;
      this.audioEngine?.pause(e);
    },
    async togglePlay() {
      this.isPlaying ? this.pause() : await this.play();
    },
    seek(e) {
      this.audioEngine?.seek(e);
    },
    setVolume(e) {
      this.volume = e, this.audioEngine?.setVolume(e / 100);
    },
    updateLyrics(e) {
      this.lyrics = Of(e), this.currentLyricIndex = -1;
    },
    destroy() {
      this.audioEngine?.destroy(), this.audioEngine = null, this.isPlaying = !1, this.currentTime = 0, this.duration = 0, this.lyrics = [], this.currentLyricIndex = -1, this.currentTrack = null;
    }
  }
}), fd = /* @__PURE__ */ ro("search", {
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
        z.warn("Search failed:", t), this.error = t instanceof Error ? t.message : String(t), this.results = [];
      } finally {
        this.isSearching = !1;
      }
    },
    clear() {
      this.keyword = "", this.results = [], this.error = null;
    }
  }
});
function ml() {
  const e = /* @__PURE__ */ ge(0), t = /* @__PURE__ */ ge([]), s = /* @__PURE__ */ ge(null);
  function n(r, a) {
    r && (t.value[a] = r);
  }
  async function o() {
    await Ue();
    const a = Oe().currentLyricIndex, l = s.value;
    if (!l || a < 0) {
      e.value = 0;
      return;
    }
    const c = t.value[a];
    if (!c) return;
    const u = c.offsetTop, p = c.offsetHeight, w = l.clientHeight;
    e.value = u - w / 2 + p / 2;
  }
  const i = Oe();
  return Qe(() => i.currentLyricIndex, o), Qe(() => i.lyrics, () => {
    t.value = [], o();
  }), { scrollY: e, windowRef: s, setLineRef: n };
}
const dd = ["width", "height"], pd = {
  key: 0,
  points: "6 3 20 12 6 21 6 3",
  fill: "currentColor",
  stroke: "none"
}, hd = {
  key: 10,
  points: "6 9 12 15 18 9"
}, gd = {
  key: 11,
  points: "18 15 12 9 6 15"
}, md = {
  key: 15,
  points: "20 6 9 17 4 12"
}, yd = /* @__PURE__ */ Ut({
  __name: "Icon",
  props: {
    name: {},
    size: {}
  },
  setup(e) {
    return (t, s) => (R(), B("svg", {
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
      e.name === "play" ? (R(), B("polygon", pd)) : e.name === "pause" ? (R(), B(le, { key: 1 }, [
        s[0] || (s[0] = f("rect", {
          x: "6",
          y: "4",
          width: "4",
          height: "16",
          rx: "1",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[1] || (s[1] = f("rect", {
          x: "14",
          y: "4",
          width: "4",
          height: "16",
          rx: "1",
          fill: "currentColor",
          stroke: "none"
        }, null, -1))
      ], 64)) : e.name === "prev" ? (R(), B(le, { key: 2 }, [
        s[2] || (s[2] = f("polygon", {
          points: "19 20 9 12 19 4 19 20",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[3] || (s[3] = f("line", {
          x1: "5",
          y1: "19",
          x2: "5",
          y2: "5"
        }, null, -1))
      ], 64)) : e.name === "next" ? (R(), B(le, { key: 3 }, [
        s[4] || (s[4] = f("polygon", {
          points: "5 4 15 12 5 20 5 4",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[5] || (s[5] = f("line", {
          x1: "19",
          y1: "5",
          x2: "19",
          y2: "19"
        }, null, -1))
      ], 64)) : e.name === "repeat" ? (R(), B(le, { key: 4 }, [
        s[6] || (s[6] = f("polyline", { points: "17 1 21 5 17 9" }, null, -1)),
        s[7] || (s[7] = f("path", { d: "M3 11V9a4 4 0 0 1 4-4h14" }, null, -1)),
        s[8] || (s[8] = f("polyline", { points: "7 23 3 19 7 15" }, null, -1)),
        s[9] || (s[9] = f("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" }, null, -1))
      ], 64)) : e.name === "repeat-one" ? (R(), B(le, { key: 5 }, [
        s[10] || (s[10] = pn('<polyline points="17 1 21 5 17 9" data-v-6d96ffa0></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14" data-v-6d96ffa0></path><polyline points="7 23 3 19 7 15" data-v-6d96ffa0></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3" data-v-6d96ffa0></path><text x="12" y="14" text-anchor="middle" font-size="8" fill="currentColor" stroke="none" font-weight="bold" data-v-6d96ffa0>1</text>', 5))
      ], 64)) : e.name === "shuffle" ? (R(), B(le, { key: 6 }, [
        s[11] || (s[11] = pn('<polyline points="16 3 21 3 21 8" data-v-6d96ffa0></polyline><line x1="4" y1="20" x2="21" y2="3" data-v-6d96ffa0></line><polyline points="21 16 21 21 16 21" data-v-6d96ffa0></polyline><line x1="15" y1="15" x2="21" y2="21" data-v-6d96ffa0></line><line x1="4" y1="4" x2="9" y2="9" data-v-6d96ffa0></line>', 5))
      ], 64)) : e.name === "search" ? (R(), B(le, { key: 7 }, [
        s[12] || (s[12] = f("circle", {
          cx: "11",
          cy: "11",
          r: "8"
        }, null, -1)),
        s[13] || (s[13] = f("line", {
          x1: "21",
          y1: "21",
          x2: "16.65",
          y2: "16.65"
        }, null, -1))
      ], 64)) : e.name === "plus" ? (R(), B(le, { key: 8 }, [
        s[14] || (s[14] = f("line", {
          x1: "12",
          y1: "5",
          x2: "12",
          y2: "19"
        }, null, -1)),
        s[15] || (s[15] = f("line", {
          x1: "5",
          y1: "12",
          x2: "19",
          y2: "12"
        }, null, -1))
      ], 64)) : e.name === "x" ? (R(), B(le, { key: 9 }, [
        s[16] || (s[16] = f("line", {
          x1: "18",
          y1: "6",
          x2: "6",
          y2: "18"
        }, null, -1)),
        s[17] || (s[17] = f("line", {
          x1: "6",
          y1: "6",
          x2: "18",
          y2: "18"
        }, null, -1))
      ], 64)) : e.name === "chevron-down" ? (R(), B("polyline", hd)) : e.name === "chevron-up" ? (R(), B("polyline", gd)) : e.name === "music" ? (R(), B(le, { key: 12 }, [
        s[18] || (s[18] = f("path", { d: "M9 18V5l12-2v13" }, null, -1)),
        s[19] || (s[19] = f("circle", {
          cx: "6",
          cy: "18",
          r: "3"
        }, null, -1)),
        s[20] || (s[20] = f("circle", {
          cx: "18",
          cy: "16",
          r: "3"
        }, null, -1))
      ], 64)) : e.name === "volume" ? (R(), B(le, { key: 13 }, [
        s[21] || (s[21] = f("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[22] || (s[22] = f("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1)),
        s[23] || (s[23] = f("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }, null, -1))
      ], 64)) : e.name === "volume-mute" ? (R(), B(le, { key: 14 }, [
        s[24] || (s[24] = f("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[25] || (s[25] = f("line", {
          x1: "23",
          y1: "9",
          x2: "17",
          y2: "15"
        }, null, -1)),
        s[26] || (s[26] = f("line", {
          x1: "17",
          y1: "9",
          x2: "23",
          y2: "15"
        }, null, -1))
      ], 64)) : e.name === "check" ? (R(), B("polyline", md)) : e.name === "loader" ? (R(), B(le, { key: 16 }, [
        s[27] || (s[27] = pn('<line x1="12" y1="2" x2="12" y2="6" data-v-6d96ffa0></line><line x1="12" y1="18" x2="12" y2="22" data-v-6d96ffa0></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" data-v-6d96ffa0></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" data-v-6d96ffa0></line><line x1="2" y1="12" x2="6" y2="12" data-v-6d96ffa0></line><line x1="18" y1="12" x2="22" y2="12" data-v-6d96ffa0></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" data-v-6d96ffa0></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" data-v-6d96ffa0></line>', 8))
      ], 64)) : e.name === "list" ? (R(), B(le, { key: 17 }, [
        s[28] || (s[28] = pn('<line x1="8" y1="6" x2="21" y2="6" data-v-6d96ffa0></line><line x1="8" y1="12" x2="21" y2="12" data-v-6d96ffa0></line><line x1="8" y1="18" x2="21" y2="18" data-v-6d96ffa0></line><circle cx="3.5" cy="6" r="1.5" fill="currentColor" stroke="none" data-v-6d96ffa0></circle><circle cx="3.5" cy="12" r="1.5" fill="currentColor" stroke="none" data-v-6d96ffa0></circle><circle cx="3.5" cy="18" r="1.5" fill="currentColor" stroke="none" data-v-6d96ffa0></circle>', 6))
      ], 64)) : Ce("", !0)
    ], 8, dd));
  }
}), Ht = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, o] of t)
    s[n] = o;
  return s;
}, De = /* @__PURE__ */ Ht(yd, [["__scopeId", "data-v-6d96ffa0"]]), vd = { class: "stmp-mini-side stmp-mini-side-left" }, _d = {
  key: 0,
  class: "stmp-mini-cover"
}, bd = ["src"], wd = {
  key: 1,
  class: "stmp-mini-cover stmp-mini-cover-placeholder"
}, kd = {
  key: 1,
  class: "stmp-mini-text stmp-mini-dock-fallback"
}, xd = { class: "stmp-mini-side stmp-mini-side-right" }, Sd = { class: "stmp-mini-controls" }, Cd = ["disabled", "aria-label"], Td = ["disabled", "aria-label"], Ad = {
  key: 1,
  class: "stmp-mini stmp-mini-drag stmp-mini-drag-idle"
}, Md = { class: "stmp-mini-cover stmp-mini-cover-square" }, Ed = ["src"], Pd = {
  key: 2,
  class: "stmp-mini stmp-mini-drag"
}, Id = ["aria-label"], Rd = ["src"], Od = { class: "stmp-mini-cover-overlay" }, Ld = { class: "stmp-mini-drag-right" }, $d = { class: "stmp-mini-title-copy" }, Dd = {
  class: "stmp-mini-title-copy",
  "aria-hidden": "true"
}, Nd = {
  key: 0,
  class: "stmp-mini-lyric-segment"
}, Fd = /* @__PURE__ */ Ut({
  __name: "CollapsedBar",
  props: {
    isDock: { type: Boolean },
    isMobile: { type: Boolean }
  },
  setup(e) {
    const t = Oe(), s = rt(), n = me(), o = e, i = /* @__PURE__ */ ge(!1), r = Ae(() => t.currentTrack?.cover || ""), a = Ae(() => !!t.currentTrack), l = Ae(() => !a.value || n.neteaseStatus !== "ok"), c = Ae(() => n.settings.showDragMiniText), u = Ae(() => {
      const q = t.currentTrack;
      if (!q) return "";
      const D = q.name, Q = q.artist || "";
      return Q ? `${D} - ${Q}` : D;
    }), { scrollY: p, windowRef: w, setLineRef: x } = ml(), A = /* @__PURE__ */ ge(null), k = /* @__PURE__ */ ge(null), F = /* @__PURE__ */ ge([]), K = /* @__PURE__ */ ge(0), j = /* @__PURE__ */ ge(0);
    function Z(q, D) {
      q && (F.value[D] = q);
    }
    function _() {
      const q = A.value, D = t.currentLyricIndex;
      if (!q || D < 0 || D >= F.value.length) {
        j.value = 0, K.value = 0;
        return;
      }
      const Q = F.value[D];
      if (!Q) return;
      const re = q.clientWidth, ke = Q.offsetLeft, U = Q.offsetWidth, C = t.lyrics[D], v = C?.next ? Math.max(500, (C.next.time - C.time) * 1e3) : 5e3;
      if (U <= re)
        j.value = Math.min(400, v), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            K.value = -ke;
          });
        });
      else {
        const M = -(ke + U - re), ae = Math.min(600, v * 0.2);
        j.value = ae, requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            K.value = -ke;
          });
        }), setTimeout(() => {
          j.value = v - ae, requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              K.value = M;
            });
          });
        }, ae);
      }
    }
    Qe(() => t.currentLyricIndex, _), Qe(() => t.lyrics, () => {
      F.value = [], j.value = 0, K.value = 0, Ue(() => _());
    });
    const y = /* @__PURE__ */ ge(null), S = /* @__PURE__ */ ge(!1);
    function b() {
      const q = y.value;
      if (!q) {
        S.value = !1;
        return;
      }
      const D = q.querySelector(".stmp-mini-title-copy");
      if (!D) {
        S.value = !1;
        return;
      }
      const Q = D.offsetWidth - 30;
      S.value = Q > q.clientWidth;
    }
    Qe(u, () => {
      Ue(() => b());
    });
    function V() {
      i.value = !0;
    }
    Qe(() => t.currentTrack?.url, () => {
      i.value = !1;
    });
    function P(q) {
      q.stopPropagation(), t.togglePlay();
    }
    function X(q) {
      q.stopPropagation(), s.next();
    }
    return rn(() => {
      Ue(() => {
        _(), b();
      });
    }), an(() => {
    }), (q, D) => o.isDock ? (R(), B("div", {
      key: 0,
      class: he(["stmp-mini", o.isMobile ? "stmp-mini-dock-mobile" : "stmp-mini-dock-desktop"])
    }, [
      f("div", vd, [
        r.value && !i.value ? (R(), B("div", _d, [
          f("img", {
            src: r.value,
            alt: "",
            onError: V
          }, null, 40, bd)
        ])) : (R(), B("div", wd, [
          ce(De, {
            name: "music",
            size: 14
          })
        ]))
      ]),
      f("div", {
        ref_key: "dockWindowRef",
        ref: w,
        class: "stmp-mini-dock-text"
      }, [
        h(t).lyrics.length > 0 ? (R(), B("div", {
          key: 0,
          class: "stmp-mini-dock-scroll",
          style: Yt({ transform: `translateY(-${h(p)}px)` })
        }, [
          (R(!0), B(le, null, st(h(t).lyrics, (Q, re) => (R(), B("span", {
            key: re,
            ref_for: !0,
            ref: (ke) => h(x)(ke, re),
            class: he(["stmp-mini-dock-line", { "stmp-mini-dock-line-active": re === h(t).currentLyricIndex }])
          }, E(Q.text), 3))), 128))
        ], 4)) : (R(), B("span", kd, E(u.value), 1))
      ], 512),
      f("div", xd, [
        f("div", Sd, [
          f("button", {
            class: "stmp-mini-btn",
            disabled: l.value,
            "aria-label": h(t).isPlaying ? h(g)("Pause") : h(g)("Play"),
            onClick: P
          }, [
            ce(De, {
              name: h(t).isPlaying ? "pause" : "play",
              size: o.isMobile ? 16 : 14
            }, null, 8, ["name", "size"])
          ], 8, Cd),
          f("button", {
            class: "stmp-mini-btn",
            disabled: l.value,
            "aria-label": h(g)("Next"),
            onClick: X
          }, [
            ce(De, {
              name: "next",
              size: o.isMobile ? 16 : 14
            }, null, 8, ["size"])
          ], 8, Td)
        ])
      ])
    ], 2)) : !a.value || !c.value ? (R(), B("div", Ad, [
      f("div", Md, [
        r.value && !i.value ? (R(), B("img", {
          key: 0,
          src: r.value,
          alt: "",
          onError: V
        }, null, 40, Ed)) : (R(), mt(De, {
          key: 1,
          name: "music",
          size: 20
        }))
      ])
    ])) : (R(), B("div", Pd, [
      f("button", {
        class: "stmp-mini-cover stmp-mini-cover-square",
        "aria-label": h(t).isPlaying ? h(g)("Pause") : h(g)("Play"),
        onClick: P
      }, [
        r.value && !i.value ? (R(), B("img", {
          key: 0,
          src: r.value,
          alt: "",
          onError: V
        }, null, 40, Rd)) : (R(), mt(De, {
          key: 1,
          name: "music",
          size: 20
        })),
        f("div", Od, [
          ce(De, {
            name: h(t).isPlaying ? "pause" : "play",
            size: 18
          }, null, 8, ["name"])
        ])
      ], 8, Id),
      f("div", Ld, [
        f("div", {
          ref_key: "titleContainerRef",
          ref: y,
          class: he(["stmp-mini-title-drag", { overflowing: S.value }])
        }, [
          (R(), B("div", {
            class: "stmp-mini-title-track",
            key: u.value
          }, [
            f("span", $d, E(u.value), 1),
            f("span", Dd, E(u.value), 1)
          ]))
        ], 2),
        f("div", {
          ref_key: "lyricContainerRef",
          ref: A,
          class: "stmp-mini-lyric"
        }, [
          f("div", {
            ref_key: "lyricTrackRef",
            ref: k,
            class: "stmp-mini-lyric-track",
            style: Yt({
              transform: `translateX(${K.value}px)`,
              transition: j.value > 0 ? `transform ${j.value}ms linear` : "none"
            })
          }, [
            (R(!0), B(le, null, st(h(t).lyrics, (Q, re) => (R(), B("span", {
              key: re,
              ref_for: !0,
              ref: (ke) => Z(ke, re),
              class: he(["stmp-mini-lyric-segment", { active: re === h(t).currentLyricIndex }])
            }, E(Q.text) + "  ", 3))), 128)),
            h(t).lyrics.length === 0 ? (R(), B("span", Nd, E(" "))) : Ce("", !0)
          ], 4)
        ], 512)
      ])
    ]));
  }
}), gr = /* @__PURE__ */ Ht(Fd, [["__scopeId", "data-v-a675febb"]]), Bd = { class: "stmp-playlist" }, Ud = { class: "stmp-tabs" }, jd = ["onClick"], Hd = {
  key: 0,
  class: "stmp-upload-area"
}, Vd = ["disabled"], Wd = {
  key: 1,
  class: "stmp-empty"
}, zd = ["onClick"], Gd = { class: "stmp-item-index" }, Kd = { class: "stmp-item-info" }, Yd = { class: "stmp-item-song" }, Jd = {
  key: 0,
  class: "stmp-item-artist"
}, qd = ["onClick"], Xd = /* @__PURE__ */ Ut({
  __name: "PlaylistView",
  setup(e) {
    const t = rt(), s = me(), n = Ae(() => {
      const x = [
        { value: "network", label: g("Network") }
      ];
      return s.settings.providers.find((k) => k.id === "local")?.enabled && x.push({ value: "server", label: g("Upload") }), x.push({ value: "chat", label: g("Chat") }), x;
    });
    Qe(n, (x) => {
      x.some((A) => A.value === t.activeTab) || t.setActiveTab("network");
    });
    const o = /* @__PURE__ */ ge(null), i = /* @__PURE__ */ ge(!1), r = () => {
      o.value?.click();
    }, a = async (x) => {
      const A = x.target;
      if (!A.files || !A.files[0]) return;
      const k = A.files[0];
      i.value = !0;
      try {
        await t.addServerFile(k.name, k), typeof toastr < "u" && toastr.success(`${g("Uploaded")}：${k.name}`, "晓乐");
      } catch (F) {
        z.error("Upload failed:", F), typeof toastr < "u" && toastr.error(`${g("Upload failed")}：${k.name}`, "晓乐");
      } finally {
        i.value = !1;
      }
      A.value = "";
    }, l = Ae(() => t.getListByTab(t.activeTab).map((A, k) => ({ index: k, item: A }))), c = Ae(() => l.value.length === 0);
    function u(x) {
      t.play(t.activeTab, x);
    }
    function p(x) {
      t.removeItem(t.activeTab, x);
    }
    function w(x) {
      t.setActiveTab(x);
    }
    return (x, A) => (R(), B("div", Bd, [
      f("div", Ud, [
        (R(!0), B(le, null, st(n.value, (k) => (R(), B("div", {
          key: k.value,
          class: he(["stmp-tab", { active: h(t).activeTab === k.value }]),
          onClick: (F) => w(k.value)
        }, E(k.label), 11, jd))), 128))
      ]),
      h(t).activeTab === "server" ? (R(), B("div", Hd, [
        f("input", {
          type: "file",
          accept: "audio/*",
          ref_key: "fileInputRef",
          ref: o,
          onChange: a,
          style: { display: "none" }
        }, null, 544),
        f("button", {
          class: "stmp-upload-btn",
          disabled: i.value,
          onClick: r
        }, E(i.value ? "..." : "+ " + h(g)("Upload audio file")), 9, Vd)
      ])) : Ce("", !0),
      c.value ? (R(), B("div", Wd, E(h(g)("No Songs")), 1)) : (R(!0), B(le, { key: 2 }, st(l.value, (k) => (R(), B("div", {
        key: k.item.id,
        class: he(["stmp-item", { active: h(t).activeTab === h(t).currentList && k.index === h(t).currentIndex }]),
        onClick: (F) => u(k.index)
      }, [
        f("span", Gd, E(k.index + 1), 1),
        f("div", Kd, [
          f("span", Yd, E(k.item.song), 1),
          k.item.artist ? (R(), B("span", Jd, E(k.item.artist), 1)) : Ce("", !0)
        ]),
        f("button", {
          class: "stmp-item-del",
          onClick: Kt((F) => p(k.index), ["stop"])
        }, [
          ce(De, {
            name: "x",
            size: 14
          })
        ], 8, qd)
      ], 10, zd))), 128))
    ]));
  }
}), Zd = /* @__PURE__ */ Ht(Xd, [["__scopeId", "data-v-f6ac7959"]]), Qd = { class: "stmp-search" }, ep = {
  key: 0,
  class: "stmp-search-hint"
}, tp = { class: "stmp-search-bar" }, sp = ["placeholder"], np = ["disabled"], op = {
  key: 0,
  class: "stmp-search-error"
}, ip = ["aria-label"], rp = {
  key: 1,
  class: "stmp-search-loading"
}, ap = {
  key: 2,
  class: "stmp-search-empty"
}, lp = {
  key: 3,
  class: "stmp-search-hint"
}, cp = {
  key: 4,
  class: "stmp-results"
}, up = ["onClick"], fp = { class: "stmp-result-name" }, dp = {
  key: 0,
  class: "stmp-result-artist"
}, pp = ["aria-label", "onClick"], hp = /* @__PURE__ */ Ut({
  __name: "SearchView",
  setup(e) {
    const t = fd(), s = rt(), n = me(), o = Ae(() => n.neteaseStatus === "ok"), i = /* @__PURE__ */ ge(t.keyword), r = /* @__PURE__ */ ge(null);
    async function a() {
      t.setKeyword(i.value);
      const A = fs(n.settings);
      await t.search(A);
    }
    const l = () => {
      a();
    };
    function c(A) {
      return s.networkList.some(
        (k) => k.providerId === A.provider && k.providerTrackId === A.id
      );
    }
    function u(A) {
      return s.networkList.findIndex(
        (k) => k.providerId === A.provider && k.providerTrackId === A.id
      );
    }
    function p(A) {
      const k = A.provider + A.id;
      if (r.value === k) return;
      const F = u(A);
      if (F >= 0) {
        s.play("network", F), r.value = k, setTimeout(() => {
          r.value = null;
        }, 600);
        return;
      }
      r.value = k, s.addFromSearch(A), setTimeout(() => {
        r.value = null;
      }, 600);
    }
    function w(A) {
      if (c(A)) {
        const k = u(A);
        k >= 0 && s.play("network", k);
        return;
      }
      s.addFromSearch(A, !1);
    }
    function x(A) {
      return r.value === A.provider + A.id;
    }
    return (A, k) => (R(), B("div", Qd, [
      o.value ? (R(), B(le, { key: 1 }, [
        f("div", tp, [
          Rs(f("input", {
            "onUpdate:modelValue": k[0] || (k[0] = (F) => i.value = F),
            class: "stmp-search-input",
            placeholder: h(g)("Search Song..."),
            onKeydown: vf(a, ["enter"])
          }, null, 40, sp), [
            [hf, i.value]
          ]),
          f("button", {
            class: "stmp-icon-btn",
            disabled: h(t).isSearching,
            onClick: a
          }, [
            h(t).isSearching ? (R(), mt(De, {
              key: 1,
              name: "loader",
              size: 16,
              class: "stmp-spin"
            })) : (R(), mt(De, {
              key: 0,
              name: "search",
              size: 16
            }))
          ], 8, np)
        ]),
        h(t).error ? (R(), B("div", op, [
          f("span", null, E(h(t).error), 1),
          f("button", {
            class: "stmp-retry-btn",
            "aria-label": h(g)("Retry"),
            onClick: l
          }, E(h(g)("Retry")), 9, ip)
        ])) : Ce("", !0),
        h(t).isSearching ? (R(), B("div", rp, E(h(g)("Searching...")), 1)) : i.value && !h(t).results.length ? (R(), B("div", ap, E(h(g)("No results")), 1)) : !i.value && !h(t).results.length ? (R(), B("div", lp, E(h(g)("Type a song name to search")), 1)) : Ce("", !0),
        h(t).results.length ? (R(), B("div", cp, [
          (R(!0), B(le, null, st(h(t).results, (F) => (R(), B("div", {
            key: F.provider + F.id,
            class: he(["stmp-result", { "stmp-result-playing": x(F) }])
          }, [
            f("div", {
              class: "stmp-result-info",
              onClick: (K) => p(F)
            }, [
              f("span", fp, E(F.name), 1),
              F.artist ? (R(), B("span", dp, E(F.artist), 1)) : Ce("", !0)
            ], 8, up),
            f("button", {
              class: he(["stmp-icon-btn stmp-result-add", { added: c(F) }]),
              "aria-label": c(F) ? h(g)("Added") : h(g)("Add to list"),
              onClick: Kt((K) => w(F), ["stop"])
            }, [
              ce(De, {
                name: c(F) ? "check" : "plus",
                size: 16
              }, null, 8, ["name"])
            ], 10, pp)
          ], 2))), 128))
        ])) : Ce("", !0)
      ], 64)) : (R(), B("div", ep, [
        ls(E(h(n).neteaseStatus === "no-cookie" ? h(g)("Cookie not configured") : h(n).neteaseStatus === "invalid" ? h(g)("Cookie invalid") : h(g)("Cookie expired")) + " ", 1),
        k[1] || (k[1] = f("br", null, null, -1)),
        ls(E(h(g)("Configure in settings")), 1)
      ]))
    ]));
  }
}), gp = /* @__PURE__ */ Ht(hp, [["__scopeId", "data-v-ef1b6d1c"]]), mp = { class: "stmp-panel" }, yp = { class: "stmp-topbar stmp-drag-handle" }, vp = ["aria-label"], _p = { class: "stmp-cover-large" }, bp = ["src"], wp = {
  key: 1,
  class: "stmp-cover-placeholder"
}, kp = { class: "stmp-track-name" }, xp = { class: "stmp-track-artist" }, Sp = { class: "stmp-lyric-header" }, Cp = { class: "stmp-track-name" }, Tp = { class: "stmp-track-artist" }, Ap = { class: "stmp-progress" }, Mp = ["value"], Ep = { class: "stmp-time" }, Pp = { class: "stmp-controls" }, Ip = { class: "stmp-ctrl-side stmp-search-side" }, Rp = ["disabled", "aria-label"], Op = ["disabled", "aria-label"], Lp = ["disabled", "aria-label"], $p = ["disabled", "aria-label"], Dp = ["disabled", "aria-label"], Np = ["aria-label"], Fp = { class: "stmp-ctrl-side stmp-volume-side" }, Bp = ["aria-label"], Up = ["value"], jp = {
  key: 0,
  class: "stmp-overlay"
}, Hp = { class: "stmp-overlay-header" }, Vp = { class: "stmp-overlay-title" }, Wp = ["aria-label"], zp = { class: "stmp-overlay-body" }, Gp = /* @__PURE__ */ Ut({
  __name: "PlayerPanel",
  emits: ["collapse"],
  setup(e) {
    const t = Oe(), s = rt(), n = me(), o = Ae(
      () => n.settings.widgetMode === "dock" && n.settings.dockAlign.startsWith("top-")
    ), i = /* @__PURE__ */ ge("cover"), r = /* @__PURE__ */ ge(null), a = /* @__PURE__ */ ge(!1), l = /* @__PURE__ */ ge(!1);
    let c = null, u = 0;
    const p = Ae(() => t.currentTrack?.cover || ""), w = Ae(() => !!t.currentTrack), x = Ae(() => n.neteaseStatus), A = Ae(() => w.value ? "" : x.value === "no-cookie" ? g("Cookie not configured") : x.value === "expired" ? g("Cookie expired") : x.value === "invalid" ? g("Cookie invalid") : g("No Song")), k = Ae(() => !w.value || x.value !== "ok"), F = () => {
      a.value = !0;
    };
    Qe(
      () => t.currentTrack,
      () => {
        a.value = !1;
      }
    );
    const K = Ae(
      () => t.duration > 0 ? t.currentTime / t.duration * 100 : 0
    ), { scrollY: j, windowRef: Z, setLineRef: _ } = ml();
    function y(C) {
      const v = Math.floor(C / 60), M = Math.floor(C % 60);
      return v + ":" + M.toString().padStart(2, "0");
    }
    function S(C) {
      const v = C.target;
      t.seek(Number(v.value) / 100 * t.duration);
    }
    const b = ["list", "random", "single"], V = {
      list: "repeat",
      random: "shuffle",
      single: "repeat-one"
    }, P = {
      list: "List Loop",
      random: "Random",
      single: "Single Loop"
    };
    function X() {
      const C = n.settings.playMode, v = b.indexOf(C), M = b[(v + 1) % b.length];
      n.setPlayMode(M), typeof toastr < "u" && toastr.info(`${g("Play mode")}：${g(P[M])}`, "晓乐");
    }
    function q(C) {
      const v = C.target;
      t.setVolume(Number(v.value));
    }
    function D() {
      c && clearTimeout(c), l.value = !0;
    }
    function Q() {
      c = setTimeout(() => {
        l.value = !1;
      }, 300);
    }
    function re() {
      t.volume > 0 ? (u = t.volume, t.setVolume(0)) : t.setVolume(u || n.settings.volume);
    }
    function ke(C) {
      r.value === C ? r.value = null : r.value = C;
    }
    function U() {
      r.value = null;
    }
    return (C, v) => (R(), B("div", mp, [
      f("div", yp, [
        v[7] || (v[7] = f("div", { class: "stmp-topbar-spacer" }, null, -1)),
        f("button", {
          class: "stmp-icon-btn",
          "aria-label": h(g)("Collapse panel"),
          onClick: v[0] || (v[0] = Kt((M) => C.$emit("collapse"), ["stop"]))
        }, [
          ce(De, {
            name: o.value ? "chevron-up" : "chevron-down",
            size: 18
          }, null, 8, ["name"])
        ], 8, vp)
      ]),
      f("div", {
        class: "stmp-display",
        onClick: v[1] || (v[1] = (M) => i.value = i.value === "cover" ? "lyric" : "cover")
      }, [
        f("div", {
          class: he(["stmp-cover-mode", { hidden: i.value !== "cover" }])
        }, [
          f("div", _p, [
            p.value && !a.value ? (R(), B("img", {
              key: 0,
              src: p.value,
              alt: "cover",
              onError: F
            }, null, 40, bp)) : (R(), B("div", wp, [
              ce(De, {
                name: "music",
                size: 48
              })
            ]))
          ]),
          f("div", kp, E(h(t).currentTrack?.name || A.value), 1),
          f("div", xp, E((h(t).currentTrack?.artist || "").trim() || " "), 1)
        ], 2),
        f("div", {
          class: he(["stmp-lyric-mode", { hidden: i.value !== "lyric" }])
        }, [
          f("div", Sp, [
            f("div", Cp, E(h(t).currentTrack?.name || A.value), 1),
            f("div", Tp, E((h(t).currentTrack?.artist || "").trim() || " "), 1)
          ]),
          f("div", {
            ref_key: "lyricWindowRef",
            ref: Z,
            class: "stmp-lyric-window"
          }, [
            h(t).lyrics.length > 0 ? (R(), B("div", {
              key: 0,
              class: "stmp-lyric-scroll",
              style: Yt({ transform: `translateY(-${h(j)}px)` })
            }, [
              (R(!0), B(le, null, st(h(t).lyrics, (M, ae) => (R(), B("div", {
                key: ae,
                ref_for: !0,
                ref: (ue) => h(_)(ue, ae),
                class: he(["stmp-lyric-line", { "stmp-lyric-active": ae === h(t).currentLyricIndex }])
              }, E(M.text), 3))), 128))
            ], 4)) : Ce("", !0)
          ], 512)
        ], 2)
      ]),
      f("div", Ap, [
        f("input", {
          type: "range",
          min: "0",
          max: "100",
          step: "0.1",
          value: K.value,
          class: "stmp-range",
          onInput: S
        }, null, 40, Mp),
        f("div", Ep, [
          f("span", null, E(y(h(t).currentTime)), 1),
          f("span", null, E(y(h(t).duration)), 1)
        ])
      ]),
      f("div", Pp, [
        f("div", Ip, [
          f("button", {
            class: he(["stmp-ctrl-btn", { active: r.value === "search" }]),
            disabled: x.value !== "ok",
            "aria-label": h(g)("Search"),
            onClick: v[2] || (v[2] = Kt((M) => ke("search"), ["stop"]))
          }, [
            ce(De, {
              name: "search",
              size: 18
            })
          ], 10, Rp)
        ]),
        f("button", {
          class: "stmp-ctrl-btn",
          disabled: k.value,
          "aria-label": h(g)("Toggle play mode"),
          onClick: X
        }, [
          ce(De, {
            name: V[h(n).settings.playMode],
            size: 16
          }, null, 8, ["name"])
        ], 8, Op),
        f("button", {
          class: "stmp-ctrl-btn",
          disabled: k.value,
          "aria-label": h(g)("Previous"),
          onClick: v[3] || (v[3] = (M) => h(s).prev())
        }, [
          ce(De, {
            name: "prev",
            size: 18
          })
        ], 8, Lp),
        f("button", {
          class: "stmp-ctrl-btn stmp-play-btn",
          disabled: k.value,
          "aria-label": h(t).isPlaying ? h(g)("Pause") : h(g)("Play"),
          onClick: v[4] || (v[4] = (M) => h(t).togglePlay())
        }, [
          ce(De, {
            name: h(t).isPlaying ? "pause" : "play",
            size: 24
          }, null, 8, ["name"])
        ], 8, $p),
        f("button", {
          class: "stmp-ctrl-btn",
          disabled: k.value,
          "aria-label": h(g)("Next"),
          onClick: v[5] || (v[5] = (M) => h(s).next())
        }, [
          ce(De, {
            name: "next",
            size: 18
          })
        ], 8, Dp),
        f("button", {
          class: he(["stmp-ctrl-btn", { active: r.value === "list" }]),
          "aria-label": h(g)("Playlist"),
          onClick: v[6] || (v[6] = Kt((M) => ke("list"), ["stop"]))
        }, [
          ce(De, {
            name: "list",
            size: 16
          })
        ], 10, Np),
        f("div", Fp, [
          f("div", {
            class: "stmp-volume-container",
            onMouseenter: D,
            onMouseleave: Q
          }, [
            f("button", {
              class: "stmp-ctrl-btn",
              "aria-label": h(g)("Mute / Unmute"),
              onClick: re
            }, [
              ce(De, {
                name: h(t).volume === 0 ? "volume-mute" : "volume",
                size: 18
              }, null, 8, ["name"])
            ], 8, Bp),
            f("div", {
              class: he(["stmp-volume-popup", { show: l.value }])
            }, [
              f("input", {
                type: "range",
                min: "0",
                max: "100",
                value: h(t).volume,
                class: "stmp-volume-vertical",
                orient: "vertical",
                onInput: q
              }, null, 40, Up)
            ], 2)
          ], 32)
        ])
      ]),
      ce(Wu, { name: "stmp-overlay" }, {
        default: ua(() => [
          r.value ? (R(), B("div", jp, [
            f("div", Hp, [
              f("span", Vp, E(r.value === "list" ? h(g)("Playlist") : h(g)("Search")), 1),
              f("button", {
                class: "stmp-overlay-close",
                "aria-label": h(g)("Close"),
                onClick: Kt(U, ["stop"])
              }, [
                ce(De, {
                  name: "x",
                  size: 16
                })
              ], 8, Wp)
            ]),
            f("div", zp, [
              r.value === "list" ? (R(), mt(Zd, { key: 0 })) : (R(), mt(gp, { key: 1 }))
            ])
          ])) : Ce("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), mr = /* @__PURE__ */ Ht(Gp, [["__scopeId", "data-v-b977a38e"]]), Kp = {
  key: 1,
  class: "stmp-inline-expanded"
}, yr = 3, Yp = 500, Jp = /* @__PURE__ */ Ut({
  __name: "App",
  setup(e) {
    const t = me(), s = Oe(), n = /* @__PURE__ */ ge(!1), o = /* @__PURE__ */ ge(null);
    let i = null;
    const r = Ae(() => t.settings.widgetMode === "dock"), a = Ae(() => t.settings.widgetMode === "inline"), l = Ae(() => t.settings.widgetMode === "hidden"), c = /* @__PURE__ */ ge(window.innerWidth <= 768), u = /* @__PURE__ */ ge(!1), p = Ae(() => t.settings.dockAlign.startsWith("top-")), w = Ae(() => t.settings.customOpacity ? t.settings.opacity : 75), x = (pe) => {
      pe.key === "Escape" && (n.value = !1), pe.key === " " && pe.target === document.body && (pe.preventDefault(), s.togglePlay());
    };
    let A = 0, k = 0, F = 0, K = 0, j = !1, Z = !1, _ = 0, y = !1, S = null, b = null, V = 0, P = 0, X = 0, q = 0, D = 0, Q = 0, re = 0;
    function ke(pe) {
      if (r.value) return;
      const we = pe.target;
      if (we.closest("input, .stmp-result, .stmp-item, .stmp-upload-btn, .stmp-search-input, .stmp-controls, .stmp-lyrics, .stmp-overlay, .stmp-display, .stmp-overlay-close") || n.value && (!we.closest(".stmp-drag-handle") || we.closest("button")) || !n.value && we.closest("button"))
        return;
      const Be = o.value?.getBoundingClientRect();
      if (!Be) return;
      A = pe.clientX, k = pe.clientY, F = Be.left, K = Be.top, j = !1, Z = !0, _ = Date.now(), y = !1, o.value && (o.value.style.left = Be.left + "px", o.value.style.top = Be.top + "px", o.value.style.right = "auto", o.value.style.bottom = "auto"), S = U, b = C;
      const Re = o.value;
      Re && (V = Re.offsetWidth || 60, P = Re.offsetHeight || 40, X = window.innerWidth - V, q = window.innerHeight - P, document.addEventListener("pointermove", S), document.addEventListener("pointerup", b), pe.preventDefault());
    }
    function U(pe) {
      if (!o.value || !Z) return;
      const we = pe.clientX - A, Be = pe.clientY - k;
      (Math.abs(we) > yr || Math.abs(Be) > yr) && (j = !0);
      let Re = F + we, Pe = K + Be;
      Re = Math.max(0, Math.min(Re, X)), Pe = Math.max(0, Math.min(Pe, q)), Q = Re, re = Pe, D || (D = requestAnimationFrame(() => {
        D = 0, o.value && (o.value.style.left = Q + "px", o.value.style.top = re + "px");
      }));
    }
    function C() {
      Z = !1, D && (cancelAnimationFrame(D), D = 0, o.value && (o.value.style.left = Q + "px", o.value.style.top = re + "px")), S && document.removeEventListener("pointermove", S), b && document.removeEventListener("pointerup", b), S = null, b = null;
      const pe = Date.now() - _;
      if (j) {
        if (y = !0, o.value) {
          const we = o.value.getBoundingClientRect();
          t.setPosition({ x: we.left, y: we.top }), n.value && Ue(() => v());
        }
        return;
      }
      if (pe > Yp) {
        y = !0;
        return;
      }
    }
    function v() {
      if (!o.value) return;
      const pe = o.value.getBoundingClientRect(), we = o.value.offsetWidth, Be = o.value.offsetHeight;
      let Re = pe.left, Pe = pe.top;
      Re + we > window.innerWidth && (Re = window.innerWidth - we), Pe + Be > window.innerHeight && (Pe = window.innerHeight - Be), Re < 0 && (Re = 0), Pe < 0 && (Pe = 0), o.value.style.left = Re + "px", o.value.style.top = Pe + "px", o.value.style.right = "auto", o.value.style.bottom = "auto", t.setPosition({ x: Re, y: Pe });
    }
    function M() {
      if (!o.value || !r.value) return;
      const pe = t.settings.dockAlign, we = pe.startsWith("top-"), Be = pe.endsWith("-right"), Re = we ? document.querySelector("#top-settings-holder") : document.querySelector("#send_form");
      if (!Re) return;
      const Pe = Re.getBoundingClientRect(), Xt = o.value.offsetHeight || 38;
      if (we) {
        const Zt = Math.max(80, window.innerHeight - Pe.bottom - 8);
        o.value.style.maxHeight = Zt + "px", o.value.style.top = Pe.bottom + "px";
      } else {
        const Zt = Math.max(80, Pe.top - 8);
        o.value.style.maxHeight = Zt + "px";
        let d = Pe.top - Math.min(Xt, Zt);
        d < 4 && (d = 4), o.value.style.top = d + "px";
      }
      if (window.innerWidth <= 768)
        o.value.style.left = Pe.left + "px", o.value.style.width = Pe.width + "px";
      else {
        const Zt = o.value.offsetWidth;
        Be ? o.value.style.left = Pe.right - Zt + "px" : o.value.style.left = Pe.left + "px", o.value.style.width = "";
      }
      o.value.style.right = "auto", o.value.style.bottom = "auto";
    }
    function ae() {
      if (!o.value || r.value) return;
      const pe = t.settings.position;
      pe ? (o.value.style.left = pe.x + "px", o.value.style.top = pe.y + "px", o.value.style.right = "auto", o.value.style.bottom = "auto", window.innerWidth <= 768 && Ue(() => v())) : (o.value.style.left = window.innerWidth - o.value.offsetWidth - 16 + "px", o.value.style.top = "16px", o.value.style.right = "auto", o.value.style.bottom = "auto");
    }
    function ue(pe) {
      if (y) {
        y = !1;
        return;
      }
      if (r.value && !n.value) {
        if (pe.target.closest("button, input")) return;
        oe();
        return;
      }
      if (!r.value && !n.value) {
        if (pe.target.closest("button, input")) return;
        oe();
      }
    }
    function fe(pe) {
      n.value || pe.target.closest("button, input") || oe();
    }
    function oe() {
      n.value = !n.value, Ue(() => {
        r.value ? M() : a.value || t.settings.position && v();
      });
    }
    Qe(() => t.settings.widgetMode, (pe) => {
      n.value = !1, o.value && (o.value.style.width = "", o.value.style.left = "", o.value.style.top = "", o.value.style.right = "", o.value.style.bottom = "", o.value.style.maxHeight = ""), pe === "inline" && (u.value = !!document.querySelector("#send_form")), Ue(() => {
        pe === "dock" ? M() : pe === "drag" && ae();
      });
    }), Qe(() => t.settings.dockAlign, () => {
      r.value && Ue(() => M());
    }), rn(() => {
      u.value = !!document.querySelector("#send_form"), Ue(() => {
        r.value ? M() : a.value || ae();
      }), o.value && typeof ResizeObserver < "u" && (i = new ResizeObserver(() => {
        r.value && M();
      }), i.observe(o.value)), window.addEventListener("resize", Le), window.addEventListener("keydown", x);
    });
    function Le() {
      c.value = window.innerWidth <= 768, r.value ? Ue(() => M()) : a.value || Ue(() => v());
    }
    return an(() => {
      C(), i && (i.disconnect(), i = null), window.removeEventListener("resize", Le), window.removeEventListener("keydown", x);
    }), (pe, we) => a.value ? (R(), B(le, { key: 0 }, [
      u.value ? (R(), mt(ga, {
        key: 0,
        to: "#send_form"
      }, [
        n.value ? (R(), B("div", Kp, [
          ce(mr, { onCollapse: oe })
        ])) : (R(), B("div", {
          key: 0,
          class: "stmp-inline-bar",
          onClick: fe
        }, [
          ce(gr, {
            "is-dock": !0,
            "is-mobile": !0
          })
        ]))
      ])) : Ce("", !0)
    ], 64)) : l.value ? Ce("", !0) : (R(), B("div", {
      key: 1,
      ref_key: "widgetRef",
      ref: o,
      class: he(["stmp-widget", {
        "stmp-expanded": n.value,
        "stmp-collapsed": !n.value,
        "stmp-dock": r.value,
        "stmp-dock-top": r.value && p.value,
        "stmp-dock-bottom": r.value && !p.value
      }]),
      style: Yt({ "--stmp-opacity": w.value + "%" }),
      onPointerdown: ke,
      onClick: ue
    }, [
      n.value ? (R(), mt(mr, {
        key: 1,
        onCollapse: oe
      })) : (R(), mt(gr, {
        key: 0,
        "is-dock": r.value,
        "is-mobile": c.value
      }, null, 8, ["is-dock", "is-mobile"]))
    ], 38));
  }
}), qp = /* @__PURE__ */ Ht(Jp, [["__scopeId", "data-v-cf56cb18"]]);
var ms = class extends Error {
  constructor(e, t) {
    super("".concat(e, " at position ").concat(t)), this.position = t;
  }
};
function Xp(e) {
  return /^[0-9A-Fa-f]$/.test(e);
}
function ns(e) {
  return e >= "0" && e <= "9";
}
function Zp(e) {
  return e >= " ";
}
function mn(e) {
  return `,:[]/{}()
+`.includes(e);
}
function vr(e) {
  return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e === "_" || e === "$";
}
function _r(e) {
  return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e === "_" || e === "$" || e >= "0" && e <= "9";
}
var br = /^(http|https|ftp|mailto|file|data|irc):\/\/$/, wr = /^[A-Za-z0-9-._~:/?#@!$&'()*+;=]$/;
function kr(e) {
  return `,[]/{}
+`.includes(e);
}
function xr(e) {
  return Sn(e) || Qp.test(e);
}
var Qp = /^[[{\w-]$/;
function eh(e) {
  return e === `
` || e === "\r" || e === "	" || e === "\b" || e === "\f";
}
function as(e, t) {
  let s = e.charCodeAt(t);
  return s === 32 || s === 10 || s === 9 || s === 13;
}
function th(e, t) {
  let s = e.charCodeAt(t);
  return s === 32 || s === 9 || s === 13;
}
function sh(e, t) {
  let s = e.charCodeAt(t);
  return s === 160 || s >= 8192 && s <= 8202 || s === 8239 || s === 8287 || s === 12288;
}
function Sn(e) {
  return yl(e) || qo(e);
}
function yl(e) {
  return e === '"' || e === "“" || e === "”";
}
function Sr(e) {
  return e === '"';
}
function qo(e) {
  return e === "'" || e === "‘" || e === "’" || e === "`" || e === "´";
}
function Cr(e) {
  return e === "'";
}
function Is(e, t) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = e.lastIndexOf(t);
  return n !== -1 ? e.substring(0, n) + (s ? "" : e.substring(n + 1)) : e;
}
function dt(e, t) {
  let s = e.length;
  if (!as(e, s - 1)) return e + t;
  for (; as(e, s - 1); ) s--;
  return e.substring(0, s) + t + e.substring(s);
}
function nh(e, t, s) {
  return e.substring(0, t) + e.substring(t + s);
}
function oh(e) {
  return /[,\n][ \t\r]*$/.test(e);
}
var ih = { "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t" }, rh = { '"': '"', "\\": "\\", "/": "/", b: "\b", f: "\f", n: `
`, r: "\r", t: "	" };
function Tr(e) {
  let t = 0, s = "";
  l(), o() || D(), l();
  let n = c(",");
  for (n && i(), xr(e[t]) && oh(s) ? (n || (s = dt(s, ",")), k()) : n && (s = Is(s, ",")); e[t] === "}" || e[t] === "]"; ) t++, i();
  if (t >= e.length) return s;
  q();
  function o() {
    i();
    let U = x() || A() || F() || j() || Z() || y(!1) || S();
    return i(), U;
  }
  function i() {
    let U = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, C = t, v = r(U);
    do
      v = a(), v && (v = r(U));
    while (v);
    return t > C;
  }
  function r(U) {
    let C = U ? as : th, v = "";
    for (; ; ) if (C(e, t)) v += e[t], t++;
    else if (sh(e, t)) v += " ", t++;
    else break;
    return v.length > 0 ? (s += v, !0) : !1;
  }
  function a() {
    if (e[t] === "/" && e[t + 1] === "*") {
      for (; t < e.length && !ah(e, t); ) t++;
      return t += 2, !0;
    }
    if (e[t] === "/" && e[t + 1] === "/") {
      for (; t < e.length && e[t] !== `
`; ) t++;
      return !0;
    }
    return !1;
  }
  function l() {
    if (e.slice(t, t + 3) === "```") {
      if (t += 3, vr(e[t])) for (; t < e.length && _r(e[t]); ) t++;
      return i(), !0;
    }
    return !1;
  }
  function c(U) {
    return e[t] === U ? (s += e[t], t++, !0) : !1;
  }
  function u(U) {
    return e[t] === U ? (t++, !0) : !1;
  }
  function p() {
    return u("\\");
  }
  function w() {
    return i(), e[t] === "." && e[t + 1] === "." && e[t + 2] === "." ? (t += 3, i(), u(","), !0) : !1;
  }
  function x() {
    if (e[t] === "{") {
      s += "{", t++, i(), u(",") && i();
      let U = !0;
      for (; t < e.length && e[t] !== "}"; ) {
        let C;
        if (U ? (C = !0, U = !1) : (C = c(","), C || (s = dt(s, ",")), i()), w(), !(F() || y(!0))) {
          e[t] === "}" || e[t] === "{" || e[t] === "]" || e[t] === "[" || e[t] === void 0 ? s = Is(s, ",") : Q();
          break;
        }
        i();
        let v = c(":"), M = t >= e.length;
        v || (xr(e[t]) || M ? s = dt(s, ":") : re()), o() || (v || M ? s += "null" : re());
      }
      return e[t] === "}" ? (s += "}", t++) : s = dt(s, "}"), !0;
    }
    return !1;
  }
  function A() {
    if (e[t] === "[") {
      s += "[", t++, i(), u(",") && i();
      let U = !0;
      for (; t < e.length && e[t] !== "]"; ) if (U ? U = !1 : c(",") || (s = dt(s, ",")), w(), !o()) {
        s = Is(s, ",");
        break;
      }
      return e[t] === "]" ? (s += "]", t++) : s = dt(s, "]"), !0;
    }
    return !1;
  }
  function k() {
    let U = !0, C = !0;
    for (; C; ) U ? U = !1 : c(",") || (s = dt(s, ",")), C = o();
    C || (s = Is(s, ",")), s = `[
`.concat(s, `
]`);
  }
  function F() {
    let U = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1, v = e[t] === "\\";
    if (v && (t++, v = !0), Sn(e[t])) {
      let M = Sr(e[t]) ? Sr : Cr(e[t]) ? Cr : qo(e[t]) ? qo : yl, ae = t, ue = s.length, fe = '"';
      for (t++; ; ) {
        if (t >= e.length) {
          let oe = b(t - 1);
          return !U && mn(e.charAt(oe)) ? (t = ae, s = s.substring(0, ue), F(!0)) : (fe = dt(fe, '"'), s += fe, !0);
        } else {
          if (t === C) return fe = dt(fe, '"'), s += fe, !0;
          if (M(e[t])) {
            let oe = t, Le = fe.length;
            if (fe += '"', t++, s += fe, i(!1), U || t >= e.length || mn(e[t]) || Sn(e[t]) || ns(e[t])) return K(), !0;
            let pe = b(oe - 1), we = e.charAt(pe);
            if (we === ",") return t = ae, s = s.substring(0, ue), F(!1, pe);
            if (mn(we)) return t = ae, s = s.substring(0, ue), F(!0);
            s = s.substring(0, ue), t = oe + 1, fe = "".concat(fe.substring(0, Le), "\\").concat(fe.substring(Le));
          } else if (U && kr(e[t])) {
            if (e[t - 1] === ":" && br.test(e.substring(ae + 1, t + 2))) for (; t < e.length && wr.test(e[t]); ) fe += e[t], t++;
            return fe = dt(fe, '"'), s += fe, K(), !0;
          } else if (e[t] === "\\") {
            let oe = e.charAt(t + 1);
            if (rh[oe] !== void 0) fe += e.slice(t, t + 2), t += 2;
            else if (oe === "u") {
              let Le = 2;
              for (; Le < 6 && Xp(e[t + Le]); ) Le++;
              Le === 6 ? (fe += e.slice(t, t + 6), t += 6) : t + Le >= e.length ? t = e.length : ke();
            } else fe += oe, t += 2;
          } else {
            let oe = e.charAt(t);
            oe === '"' && e[t - 1] !== "\\" ? (fe += "\\".concat(oe), t++) : eh(oe) ? (fe += ih[oe], t++) : (Zp(oe) || X(oe), fe += oe, t++);
          }
        }
        v && p();
      }
    }
    return !1;
  }
  function K() {
    let U = !1;
    for (i(); e[t] === "+"; ) {
      U = !0, t++, i(), s = Is(s, '"', !0);
      let C = s.length;
      F() ? s = nh(s, C, 1) : s = dt(s, '"');
    }
    return U;
  }
  function j() {
    let U = t;
    if (e[t] === "-") {
      if (t++, V()) return P(U), !0;
      if (!ns(e[t])) return t = U, !1;
    }
    for (; ns(e[t]); ) t++;
    if (e[t] === ".") {
      if (t++, V()) return P(U), !0;
      if (!ns(e[t])) return t = U, !1;
      for (; ns(e[t]); ) t++;
    }
    if (e[t] === "e" || e[t] === "E") {
      if (t++, (e[t] === "-" || e[t] === "+") && t++, V()) return P(U), !0;
      if (!ns(e[t])) return t = U, !1;
      for (; ns(e[t]); ) t++;
    }
    if (!V()) return t = U, !1;
    if (t > U) {
      let C = e.slice(U, t), v = /^0\d/.test(C);
      return s += v ? '"'.concat(C, '"') : C, !0;
    }
    return !1;
  }
  function Z() {
    return _("true", "true") || _("false", "false") || _("null", "null") || _("True", "true") || _("False", "false") || _("None", "null");
  }
  function _(U, C) {
    return e.slice(t, t + U.length) === U ? (s += C, t += U.length, !0) : !1;
  }
  function y(U) {
    let C = t;
    if (vr(e[t])) {
      for (; t < e.length && _r(e[t]); ) t++;
      let v = t;
      for (; as(e, v); ) v++;
      if (e[v] === "(") return t = v + 1, o(), e[t] === ")" && (t++, e[t] === ";" && t++), !0;
    }
    for (; t < e.length && !kr(e[t]) && !Sn(e[t]) && (!U || e[t] !== ":"); ) t++;
    if (e[t - 1] === ":" && br.test(e.substring(C, t + 2))) for (; t < e.length && wr.test(e[t]); ) t++;
    if (t > C) {
      for (; as(e, t - 1) && t > 0; ) t--;
      let v = e.slice(C, t);
      return s += v === "undefined" ? "null" : JSON.stringify(v), e[t] === '"' && t++, !0;
    }
  }
  function S() {
    if (e[t] === "/") {
      let U = t;
      for (t++; t < e.length && (e[t] !== "/" || e[t - 1] === "\\"); ) t++;
      return t++, s += '"'.concat(e.substring(U, t), '"'), !0;
    }
  }
  function b(U) {
    let C = U;
    for (; C > 0 && as(e, C); ) C--;
    return C;
  }
  function V() {
    return t >= e.length || mn(e[t]) || as(e, t);
  }
  function P(U) {
    s += "".concat(e.slice(U, t), "0");
  }
  function X(U) {
    throw new ms("Invalid character ".concat(JSON.stringify(U)), t);
  }
  function q() {
    throw new ms("Unexpected character ".concat(JSON.stringify(e[t])), t);
  }
  function D() {
    throw new ms("Unexpected end of json string", e.length);
  }
  function Q() {
    throw new ms("Object key expected", t);
  }
  function re() {
    throw new ms("Colon expected", t);
  }
  function ke() {
    let U = e.slice(t, t + 6);
    throw new ms('Invalid unicode character "'.concat(U, '"'), t);
  }
}
function ah(e, t) {
  return e[t] === "*" && e[t + 1] === "/";
}
function lh(e) {
  if (!e) return null;
  let t = e.trim();
  t = t.replace(/^```(?:json)?\s*\n?/i, "").replace(/\n?```\s*$/i, "");
  try {
    return JSON.parse(t);
  } catch {
  }
  try {
    const n = Tr(t);
    return JSON.parse(n);
  } catch {
  }
  const s = ch(t);
  if (s)
    try {
      return JSON.parse(s);
    } catch {
      try {
        return JSON.parse(Tr(s));
      } catch {
      }
    }
  return z.warn("Failed to parse JSON after all repair attempts:", e.slice(0, 200)), null;
}
function ch(e) {
  let t = 0, s = -1, n = !1, o = !1;
  for (let i = 0; i < e.length; i++) {
    const r = e[i];
    if (o) {
      o = !1;
      continue;
    }
    if (r === "\\" && n) {
      o = !0;
      continue;
    }
    if (r === '"') {
      n = !n;
      continue;
    }
    if (!n) {
      if (r === "{")
        t === 0 && (s = i), t++;
      else if (r === "}" && (t--, t === 0 && s >= 0))
        return e.slice(s, i + 1);
    }
  }
  return null;
}
class uh {
  hasST() {
    return typeof SillyTavern < "u" && typeof SillyTavern.getContext == "function";
  }
  ctx() {
    return SillyTavern.getContext();
  }
  // ===== extensionSettings =====
  getSettings() {
    if (this.hasST())
      return this.ctx().extensionSettings[$t] ?? null;
    const t = localStorage.getItem(this.settingsKey());
    if (t === null) return null;
    try {
      return JSON.parse(t);
    } catch {
      return z.warn("Failed to parse stored settings:", t), null;
    }
  }
  setSettings(t) {
    if (this.hasST()) {
      const s = this.ctx();
      s.extensionSettings[$t] = t, s.saveSettingsDebounced();
      return;
    }
    localStorage.setItem(this.settingsKey(), JSON.stringify(t));
  }
  // ===== playlist data (separate key in extensionSettings) =====
  getPlaylistData() {
    if (this.hasST())
      return this.ctx().extensionSettings[`${$t}-playlist`] ?? null;
    const t = localStorage.getItem(this.playlistKey());
    if (t === null) return null;
    try {
      return JSON.parse(t);
    } catch {
      return z.warn("Failed to parse stored playlist data:", t), null;
    }
  }
  setPlaylistData(t) {
    if (this.hasST()) {
      const s = this.ctx();
      s.extensionSettings[`${$t}-playlist`] = t, s.saveSettingsDebounced();
      return;
    }
    localStorage.setItem(this.playlistKey(), JSON.stringify(t));
  }
  // ===== chatMetadata =====
  getMetadata(t) {
    return this.hasST() ? this.ctx().chatMetadata[t] ?? null : null;
  }
  setMetadata(t, s) {
    if (this.hasST()) {
      const n = this.ctx(), o = n.chatMetadata;
      o[t] = s, n.saveMetadata();
      return;
    }
  }
  // ----- key helpers -----
  settingsKey() {
    return `${$t}__settings`;
  }
  playlistKey() {
    return `${$t}__playlist`;
  }
}
function fh() {
  return new uh();
}
const $t = "st-little-player", yi = "stmp_bgm_history", Ar = 50;
function vl() {
  const t = me().storage;
  if (!t) return [];
  const s = t.getMetadata(yi);
  return Array.isArray(s) ? s : [];
}
function vi(e, t, s) {
  const n = vl();
  n.push({ song: e, artist: t, messageId: s, playedAt: Date.now() }), n.length > Ar && n.splice(0, n.length - Ar);
  const i = me().storage;
  i && i.setMetadata(yi, n);
}
function _l(e) {
  return vl().slice(-5).reverse().map((s) => `${s.song}${s.artist ? " - " + s.artist : ""}`);
}
function bl(e) {
  let t = e;
  try {
    const s = Oe(), n = s.currentTrack?.name ?? "", o = s.currentTrack?.artist ?? "", i = String(s.isPlaying), r = String(!!s.currentTrack), a = _l(5).join(", ");
    t = t.replace(/\{\{xiaoyueCurrentSong\}\}/gi, n).replace(/\{\{xiaoyueCurrentArtist\}\}/gi, o ? " - " + o : "").replace(/\{\{xiaoyueIsPlaying\}\}/gi, i).replace(/\{\{xiaoyueHasTrack\}\}/gi, r).replace(/\{\{xiaoyueRecentPlayed\}\}/gi, a);
  } catch {
  }
  return t;
}
const Fn = "<!--XY_BGM_START-->", Xo = "<!--XY_BGM_END-->", dh = `You need to manage background music for a roleplay chat session. You have access to tools for searching and playing music.

## Tools

- search_music: Search a music platform for songs by keyword. Returns up to 5 matches with IDs, names, artists, and durations.
- play_music: Play a song by its search result ID. The ID must come from a prior search_music call result.
- stop_music: Stop the currently playing track. Use only when the scene calls for silence.
- get_current_track: Get the currently playing track info. Use if you need to verify playback state.

## Workflow

1. Analyze the scene's atmosphere, mood, location, time, and emotion from the conversation.
2. If the current track fits, do nothing — return without calling any tool.
3. If a change is needed, call search_music with a specific song name you have in mind.
4. Review the search results. Call play_music with the best match — do not overthink it.
5. If the first search yields no usable result, try ONE more search with a different song name.
6. After the second search, you MUST either call play_music or return without action. Do not search a third time.

## Search Rules

- ALWAYS search with a specific song name (e.g. "River Flows in You", "Darkest Dungeon Theme", "Lemon"). NEVER use vague genre descriptions like "dark dungeon ambient orchestral" or "epic villain theme".
- Prefer songs with vocals over instrumental tracks. If the scene fits a vocal song, choose one.
- If the scene is from a game or anime, search for the actual soundtrack name.
- Chinese song names work for Chinese songs. English song names work for international tracks.

## When to Act

- No music is currently playing and a scene is underway. Select an opening track that fits the setting.
- The scene transitions to a new location, time, or emotional state and the current track no longer fits.
- The narrative introduces a significant mood shift (tension, romance, combat, calm, etc.).

## When NOT to Act

- The current track still fits the scene. Unnecessary changes break immersion.
- The mood has not meaningfully changed. Do not call tools on every message.
- You are uncertain whether a change is warranted — keep the current track.

## Guidelines

- You MUST use real, existing song titles that can be found on music streaming platforms. Never invent or guess song names.
- Prefer songs with vocals (songs with singing/lyrics) over pure instrumentals. Vocal tracks create stronger emotional immersion.
- Instrumental tracks, game OSTs, and film scores are acceptable only when no fitting vocal song exists.
- Song and artist names must be exact — a misspelled title cannot be found and will not play.
- Prefer songs in the language of the user's current conversation.
- Avoid repeating recently played songs.
- When uncertain whether to change, keep the current track.`, ph = "## Conversation", hh = "Analyze the above conversation and manage background music using the available tools.", wl = `Background music control is needed for this roleplay session. After writing your narrative, append a BGM marker at the end of your response.

## Output Format (must follow strictly)

After your narrative, append exactly:
${Fn}
{"song":"song name","artist":"artist name","action":"play"}
${Xo}

For "keep" (no change needed), omit song and artist:
${Fn}
{"action":"keep"}
${Xo}

The marker will be automatically removed from the visible message. Users will not see it.

## When to Output "play"

- No music is currently playing and a scene is underway. Select an opening track that fits the setting.
- The scene transitions to a new location, time, or emotional state and the current track no longer fits.
- The narrative introduces a significant mood shift (tension, romance, combat, calm, etc.).

## When to Output "keep"

- The current track still fits the scene. Unnecessary changes break immersion.
- The mood has not meaningfully changed. Do not output a marker on every response.
- You are uncertain whether a change is warranted — keep the current track.

## Guidelines

- You MUST use real, existing song titles that can be found on music streaming platforms. Never invent or guess song names.
- Prefer songs with vocals (songs with singing/lyrics) over pure instrumentals. Vocal tracks create stronger emotional immersion.
- Instrumental tracks, game OSTs, and film scores are acceptable only when no fitting vocal song exists.
- Song and artist names must be exact — a misspelled title cannot be found and will not play.
- Prefer songs in the language of the user's current conversation.
- Avoid repeating recently played songs.

## Current State
- Now playing: {{xiaoyueCurrentSong}}{{xiaoyueCurrentArtist}}
- Is playing: {{xiaoyueIsPlaying}}
- Recently played: {{xiaoyueRecentPlayed}}`, gh = `Background music control is available for this roleplay session.

## Tools

- search_music: Search a music platform for songs by keyword. Returns up to 5 matches with IDs, names, artists, and durations.
- play_music: Play a song by its search result ID. The ID must come from a prior search_music result.
- stop_music: Stop the currently playing music. Use only when the scene calls for silence.
- get_current_track: Get the currently playing track info.

## When to Act

- No music is currently playing and a scene is underway. Select an opening track that fits the setting.
- The scene transitions to a new location, time, or emotional state and the current track no longer fits.
- The narrative introduces a significant mood shift (tension, romance, combat, calm, etc.).

## When NOT to Act

- The current track still fits the scene. Unnecessary changes break immersion.
- The mood has not meaningfully changed. Do not call tools on every message.
- You are uncertain whether a change is warranted — keep the current track.

## Guidelines

- You MUST use real, existing song titles that can be found on music streaming platforms. Never invent or guess song names.
- Prefer songs with vocals (songs with singing/lyrics) over pure instrumentals. Vocal tracks create stronger emotional immersion.
- Instrumental tracks, game OSTs, and film scores are acceptable only when no fitting vocal song exists.
- Song and artist names must be exact — a misspelled title cannot be found and will not play.
- Prefer songs in the language of the user's current conversation.
- Avoid repeating recently played songs.

## Current State
- Now playing: {{xiaoyueCurrentSong}}{{xiaoyueCurrentArtist}}
- Is playing: {{xiaoyueIsPlaying}}
- Recently played: {{xiaoyueRecentPlayed}}`, Bn = "search_music", kl = "Search a music platform for songs by keyword. Returns up to 5 matches with IDs, names, artists, and durations.", xl = "Search keyword — song name, artist name, or both.", Un = "play_music", Sl = "Play a song by its search result ID. The ID must come from a prior search_music result. Returns playback status.", Cl = "The ID from a search_music result entry.", jn = "stop_music", Tl = "Stop the currently playing music. Use only when the scene explicitly calls for silence.", Hn = "get_current_track", Al = "Get information about the currently playing track, including song name, artist, and playback status.", mh = "播放音乐", yh = "播放音乐: {song}{artist}", vh = "停止音乐", _h = "停止音乐", Ml = (e) => e.length === 0 ? "No results found. Try different keywords." : JSON.stringify(e.map((t) => ({
  id: t.id,
  name: t.name,
  artist: t.artist,
  ...t.duration ? { duration: t.duration } : {}
}))), El = "Missing required parameter: keyword", Pl = 'No results found for: "{keyword}". Try different keywords.', Il = "Missing required parameter: result_id", Rl = 'Invalid result_id: "{id}". This ID does not match any prior search result. Call search_music first.', Ol = "Now playing: {name}{artist}", Ll = "Music stopped.", $l = "No music is currently playing.", Dl = (e, t, s) => JSON.stringify({ song: e, artist: t, is_playing: s }), Nl = "No track is currently loaded.";
function bh() {
  return dh;
}
function wh(e) {
  const t = [];
  return t.push(ph), t.push(e), t.push(""), t.push(hh), t.join(`
`);
}
function kh(e, t) {
  return bl(e && t ? t : wl);
}
function xh() {
  return bl(gh);
}
const Sh = /<!--XY_BGM_START-->[\s\S]*?<!--XY_BGM_END-->/g;
class Ch {
  constructor() {
    this.interceptor = null, this.onGenerationEndedBound = (t) => {
      this.onGenerationEnded(t);
    };
  }
  init() {
    this.interceptor = (s, n, o, i) => {
      const a = SillyTavern.getContext().extensionSettings["st-little-player"];
      if (!a || a.aiMode !== "together") return;
      const l = me(), c = kh(
        l.settings.togetherCustomPromptEnabled,
        l.settings.togetherCustomPrompt
      ), p = (a.togetherPromptRole || "system") === "system";
      s.splice(Math.max(0, s.length - 1), 0, {
        is_user: !p,
        is_system: p,
        name: "晓乐",
        mes: c,
        extra: { isSmallSys: p }
      });
    }, globalThis.xiaoyueInterceptor = this.interceptor;
    const t = SillyTavern.getContext();
    t.eventSource.on(t.event_types.GENERATION_ENDED, this.onGenerationEndedBound), z.info("Together mode initialized");
  }
  destroy() {
    z.info("Together mode destroyed");
    const t = SillyTavern.getContext();
    t.eventSource.removeListener(t.event_types.GENERATION_ENDED, this.onGenerationEndedBound), delete globalThis.xiaoyueInterceptor, this.interceptor = null;
  }
  async onGenerationEnded(t) {
    try {
      const s = SillyTavern.getContext(), n = t > 0 ? t - 1 : 0, o = s.chat[n];
      if (!o) {
        z.warn("Together: GENERATION_ENDED but message not found", { messageId: t, actualId: n, chatLen: s.chat.length });
        return;
      }
      const i = o.mes ?? "", r = i.indexOf(Fn);
      if (r === -1) return;
      z.debug("Together: marker found in message " + n);
      const a = i.indexOf(Xo, r);
      if (a === -1) {
        z.warn("Together: MARKER_END not found, marker may be truncated");
        return;
      }
      const l = i.slice(r + Fn.length, a).trim();
      z.debug("Together: extracted marker content:", l);
      const c = lh(l);
      if (z.debug("Together: parsed recommendation:", c), !c) {
        this.cleanupMarker(n, o);
        return;
      }
      if (c.action === "keep") {
        z.debug("Together: action=keep, no change"), this.cleanupMarker(n, o);
        return;
      }
      if (c.action === "play" && c.song) {
        z.debug("Together: searching for: " + c.song, c.artist);
        const u = me(), w = await fs(u.settings).searchAll(c.artist ? `${c.song} ${c.artist}` : c.song);
        w.length > 0 ? (rt().addFromAi(w[0], !0), vi(c.song, c.artist, n), z.debug("Together: playing: " + w[0].name + " - " + w[0].artist), typeof toastr < "u" && toastr.success(`${g("AI selected:")}：${c.song}`, "晓乐")) : (z.warn("Together: track not found: " + c.song), typeof toastr < "u" && toastr.warning(`${g("Cannot play")}：${c.song}`, "晓乐"));
      }
      this.cleanupMarker(n, o);
    } catch (s) {
      z.error("Together: onGenerationEnded error:", s);
    }
  }
  cleanupMarker(t, s) {
    s.mes = (s.mes ?? "").replace(Sh, "").trim();
    const n = SillyTavern.getContext();
    if (typeof n.updateMessageBlock == "function")
      try {
        n.updateMessageBlock(t, s);
      } catch (o) {
        z.warn("Together: failed to update message block", o);
      }
  }
}
let yn = null;
async function Th() {
  if (yn) return yn;
  try {
    const e = await Function("return import")()(
      /* @vite-ignore */
      "/scripts/extensions/regex/engine.js"
    );
    if (e?.getRegexedString && e?.regex_placement)
      return yn = e, yn;
  } catch {
  }
  return null;
}
const Ah = /<!--XY_BGM_START-->[\s\S]*?<!--XY_BGM_END-->/g;
function Mh(e) {
  return e.replace(Ah, "").trim();
}
async function Eh(e) {
  try {
    const t = SillyTavern.getContext(), s = t.chat;
    if (!s || s.length === 0) return "";
    const n = await Th(), o = s.slice(-e), i = [];
    for (const r of o) {
      const a = r.is_user ? t.name1 : r.name || t.name2 || "Character";
      let l = r.mes ?? "";
      if (n) {
        const c = r.is_user ? n.regex_placement.USER_INPUT : n.regex_placement.AI_OUTPUT;
        try {
          l = n.getRegexedString(l, c, { isPrompt: !0 });
        } catch {
        }
      }
      l = Mh(l), l.trim() && i.push(`${a}: ${l}`);
    }
    return i.join(`

`);
  } catch {
    return "";
  }
}
const Mr = 5, Ph = [
  {
    type: "function",
    function: {
      name: Bn,
      description: kl,
      parameters: {
        type: "object",
        properties: {
          keyword: { type: "string", description: xl }
        },
        required: ["keyword"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: Un,
      description: Sl,
      parameters: {
        type: "object",
        properties: {
          result_id: { type: "string", description: Cl }
        },
        required: ["result_id"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: jn,
      description: Tl,
      parameters: {
        type: "object",
        properties: {}
      }
    }
  },
  {
    type: "function",
    function: {
      name: Hn,
      description: Al,
      parameters: {
        type: "object",
        properties: {}
      }
    }
  }
];
async function Ih() {
  const e = me().settings, t = e.aiApiUrl.replace(/\/$/, "") + "/models", s = await fetch(t, {
    method: "GET",
    headers: {
      ...e.aiApiKey ? { Authorization: `Bearer ${e.aiApiKey}` } : {}
    }
  });
  if (!s.ok) {
    const i = await s.text().catch(() => "");
    throw new Error(`API ${s.status}: ${i}`);
  }
  return ((await s.json())?.data ?? []).map((i) => i.id).filter(Boolean).sort();
}
async function Rh(e) {
  const t = me().settings, s = t.aiApiUrl.replace(/\/$/, "") + "/chat/completions", n = {
    model: t.aiModel,
    messages: e,
    max_tokens: 4096,
    stream: !1,
    temperature: 0.7,
    tools: Ph,
    tool_choice: "auto",
    thinking: { type: "disabled" }
  };
  z.debug("BGM API request:", { model: t.aiModel, messageCount: e.length });
  const o = await fetch(s, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...t.aiApiKey ? { Authorization: `Bearer ${t.aiApiKey}` } : {}
    },
    body: JSON.stringify(n)
  });
  if (!o.ok) {
    const a = await o.text().catch(() => "");
    throw z.warn("BGM API error: " + o.status, a), new Error(`API ${o.status}: ${a}`);
  }
  const r = (await o.json())?.choices?.[0]?.message;
  return {
    content: r?.content ?? null,
    tool_calls: r?.tool_calls
  };
}
async function Oh(e, t, s) {
  switch (e) {
    case Bn: {
      const n = t.keyword;
      if (!n) return El;
      const o = me(), r = await fs(o.settings).searchAll(n);
      if (r.length === 0)
        return Pl.replace("{keyword}", n);
      const a = r.slice(0, 5);
      for (const c of a)
        s.set(c.id, c);
      const l = Ml(
        a.map((c) => ({
          id: c.id,
          name: c.name,
          artist: c.artist,
          duration: c.duration
        }))
      );
      return z.debug("search_music results: " + a.length + " items for: " + n), l;
    }
    case Un: {
      const n = t.result_id;
      if (!n) return Il;
      const o = s.get(n);
      return o ? (rt().addFromAi(o, !0), vi(o.name, o.artist), typeof toastr < "u" && toastr.success(`${g("AI selected:")}：${o.name}`, "晓乐"), z.debug("play_music success: " + o.name + " - " + o.artist), Ol.replace("{name}", o.name).replace("{artist}", o.artist ? " - " + o.artist : "")) : Rl.replace("{id}", n);
    }
    case jn: {
      const n = Oe();
      return n.currentTrack ? (n.pause(), z.debug("stop_music success"), Ll) : $l;
    }
    case Hn: {
      const n = Oe();
      if (!n.currentTrack) return Nl;
      const o = Dl(
        n.currentTrack.name,
        n.currentTrack.artist ?? null,
        n.isPlaying
      );
      return z.debug("get_current_track:", o), o;
    }
    default:
      return `Unknown tool: ${e}`;
  }
}
async function Lh(e, t) {
  const s = [
    { role: "system", content: e },
    { role: "user", content: t }
  ], n = /* @__PURE__ */ new Map();
  for (let o = 0; o < Mr; o++) {
    z.debug("BGM agent loop iteration " + (o + 1) + "/" + Mr);
    const i = await Rh(s), r = {
      role: "assistant",
      content: i.content,
      ...i.tool_calls ? { tool_calls: i.tool_calls } : {}
    };
    if (s.push(r), !i.tool_calls || i.tool_calls.length === 0) {
      z.debug("BGM agent loop ended — no tool calls"), i.content && z.debug("BGM agent final text:", i.content);
      return;
    }
    for (const a of i.tool_calls) {
      const l = a.function.name;
      let c = {};
      try {
        c = JSON.parse(a.function.arguments || "{}");
      } catch {
        z.warn("Failed to parse tool arguments:", a.function.arguments);
      }
      z.debug("Executing tool: " + l, c);
      const u = await Oh(l, c, n);
      z.debug("Tool result:", u), s.push({
        role: "tool",
        content: u,
        tool_call_id: a.id
      });
    }
  }
  z.warn("BGM agent loop reached max iterations");
}
const Er = "xiaoyue_fc", vn = /* @__PURE__ */ new Map();
class Pr {
  constructor() {
    this.isAnalyzing = !1, this.lastTriggerTime = 0, this.destroyed = !1, this.onGenerationStarted = () => {
      vn.clear();
    }, this.onCharacterMessageRendered = (t) => {
      const s = me();
      if (!s.settings.aiAutoTrigger) return;
      const n = SillyTavern.getContext();
      (t <= 0 || n.chat.filter((i) => i.is_user).length === 0) && !s.settings.aiTriggerOnGreeting || this.triggerAgent(t);
    }, this.onMessageSwiped = (t) => {
      const s = me();
      if (!s.settings.aiAutoTrigger) return;
      const n = Math.floor(s.settings.aiCooldownMs / 2);
      Date.now() - this.lastTriggerTime < n || this.triggerAgent(t, !0);
    };
  }
  init() {
    me().settings.aiUseCustomApi ? this.initCustomApiPath() : this.initMainApiPath();
  }
  // ===== Main API path: register ST function tools =====
  initMainApiPath() {
    const t = SillyTavern.getContext();
    if (!t.isToolCallingSupported()) {
      z.warn("Function tool calling is not supported by the current API. Switch to custom API or use Together mode.");
      return;
    }
    t.eventSource.on(t.event_types.GENERATION_STARTED, this.onGenerationStarted);
    const s = () => {
      const o = me();
      return o.settings.aiMode === "function_call" && !o.settings.aiUseCustomApi;
    };
    t.registerFunctionTool({
      name: Bn,
      displayName: "搜索音乐",
      description: kl,
      parameters: {
        type: "object",
        properties: {
          keyword: { type: "string", description: xl }
        },
        required: ["keyword"]
      },
      action: async ({ keyword: o }) => {
        if (!o) return El;
        const i = me(), a = await fs(i.settings).searchAll(o);
        if (a.length === 0)
          return Pl.replace("{keyword}", o);
        const l = a.slice(0, 5);
        for (const u of l)
          vn.set(u.id, u);
        const c = Ml(
          l.map((u) => ({
            id: u.id,
            name: u.name,
            artist: u.artist,
            duration: u.duration
          }))
        );
        return z.debug("search_music results: " + l.length + " items for: " + o), c;
      },
      formatMessage: ({ keyword: o }) => `搜索音乐: ${o ?? ""}`,
      shouldRegister: s,
      stealth: !0
    }), t.registerFunctionTool({
      name: Un,
      displayName: mh,
      description: Sl,
      parameters: {
        type: "object",
        properties: {
          result_id: { type: "string", description: Cl }
        },
        required: ["result_id"]
      },
      action: async ({ result_id: o }) => {
        if (!o) return Il;
        const i = vn.get(o);
        return i ? (rt().addFromAi(i, !0), vi(i.name, i.artist), typeof toastr < "u" && toastr.success(`${g("AI selected:")}：${i.name}`, "晓乐"), z.debug("play_music success: " + i.name + " - " + i.artist), Ol.replace("{name}", i.name).replace("{artist}", i.artist ? " - " + i.artist : "")) : Rl.replace("{id}", o);
      },
      formatMessage: ({ result_id: o }) => yh.replace("{song}", o ?? "").replace("{artist}", ""),
      shouldRegister: s,
      stealth: !0
    }), t.registerFunctionTool({
      name: jn,
      displayName: vh,
      description: Tl,
      parameters: {
        type: "object",
        properties: {}
      },
      action: async () => {
        const o = Oe();
        return o.currentTrack ? (o.pause(), Ll) : $l;
      },
      formatMessage: () => _h,
      shouldRegister: s,
      stealth: !0
    }), t.registerFunctionTool({
      name: Hn,
      displayName: "当前播放",
      description: Al,
      parameters: {
        type: "object",
        properties: {}
      },
      action: async () => {
        const o = Oe();
        return o.currentTrack ? Dl(
          o.currentTrack.name,
          o.currentTrack.artist ?? null,
          o.isPlaying
        ) : Nl;
      },
      formatMessage: () => "获取当前播放",
      shouldRegister: s,
      stealth: !0
    });
    const n = xh();
    t.setExtensionPrompt(Er, n, 1, 0, !1, 0), z.info("Function Call (main API): 4 tools registered + aux prompt set");
  }
  // ===== Custom API path: event-driven agent loop =====
  initCustomApiPath() {
    const t = SillyTavern.getContext();
    t.eventSource.on(
      t.event_types.CHARACTER_MESSAGE_RENDERED,
      this.onCharacterMessageRendered
    ), t.eventSource.on(
      t.event_types.MESSAGE_SWIPED,
      this.onMessageSwiped
    ), z.info("Function Call (custom API): event listeners registered");
  }
  async manualTrigger() {
    if (this.destroyed || this.isAnalyzing) return;
    const s = SillyTavern.getContext().chat, n = s && s.length > 0 ? s.length - 1 : void 0;
    await this.triggerAgent(n, !0);
  }
  async triggerAgent(t, s = !1) {
    if (this.isAnalyzing) return;
    const n = me();
    if (!(!s && Date.now() - this.lastTriggerTime < n.settings.aiCooldownMs || SillyTavern.getContext().generationInProgress)) {
      if (!n.settings.aiApiUrl || !n.settings.aiModel) {
        z.warn("Custom API path requires API URL + Model");
        return;
      }
      this.isAnalyzing = !0, this.lastTriggerTime = Date.now(), z.info("BGM agent loop started");
      try {
        const i = await Eh(n.settings.aiContextMessages), r = bh(), a = wh(i);
        await Lh(r, a);
      } catch (i) {
        z.error("AI agent loop failed:", i), typeof toastr < "u" && toastr.error(g("AI recommendation failed"), "晓乐");
      } finally {
        this.isAnalyzing = !1;
      }
    }
  }
  destroy() {
    const t = me(), s = t.settings.aiUseCustomApi ? "custom API" : "main API";
    z.info("Function Call destroyed: " + s), this.destroyed = !0;
    const n = SillyTavern.getContext();
    t.settings.aiUseCustomApi ? (n.eventSource.removeListener(
      n.event_types.CHARACTER_MESSAGE_RENDERED,
      this.onCharacterMessageRendered
    ), n.eventSource.removeListener(
      n.event_types.MESSAGE_SWIPED,
      this.onMessageSwiped
    )) : (n.eventSource.removeListener(n.event_types.GENERATION_STARTED, this.onGenerationStarted), n.unregisterFunctionTool(Bn), n.unregisterFunctionTool(Un), n.unregisterFunctionTool(jn), n.unregisterFunctionTool(Hn), n.setExtensionPrompt(Er, "", -1, 0), vn.clear());
  }
}
let Zo = null;
class $h {
  constructor() {
    this.together = null, this.functionCall = null, this.currentMode = "off";
  }
  init() {
    this.applyMode(me().settings.aiMode), Zo = this, z.info("BGM controller initialized, mode: " + this.currentMode);
  }
  setMode(t) {
    t !== this.currentMode && (z.info("BGM mode changing to: " + t), this.destroyCurrent(), this.applyMode(t));
  }
  resetFunctionCall() {
    this.functionCall && (this.functionCall.destroy(), this.functionCall = new Pr(), this.functionCall.init());
  }
  applyMode(t) {
    this.currentMode = t;
    try {
      switch (t) {
        case "function_call":
          this.functionCall = new Pr(), this.functionCall.init();
          break;
        case "together":
          this.together = new Ch(), this.together.init();
          break;
        case "off":
        default:
          break;
      }
    } catch (s) {
      z.error("BGM controller: failed to init mode " + t, s);
    }
  }
  destroyCurrent() {
    this.together && (this.together.destroy(), this.together = null), this.functionCall && (this.functionCall.destroy(), this.functionCall = null);
  }
  async manualTrigger() {
    this.functionCall && await this.functionCall.manualTrigger();
  }
  destroy() {
    z.info("BGM controller destroyed"), this.destroyCurrent(), this.currentMode = "off", Zo = null;
  }
}
function Cn() {
  return Zo;
}
const Dh = {
  key: 0,
  class: "stmp-switch-label"
}, Nh = { class: "stmp-switch" }, Fh = ["checked", "disabled"], Bh = /* @__PURE__ */ Ut({
  __name: "ToggleSwitch",
  props: {
    modelValue: { type: Boolean },
    label: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const s = e, n = t, o = /* @__PURE__ */ ge(null);
    function i() {
      const r = s.modelValue;
      n("update:modelValue", !r), Ue(() => {
        o.value && s.modelValue === r && o.value.checked !== r && (o.value.checked = r);
      });
    }
    return (r, a) => (R(), B("label", {
      class: he(["stmp-switch-row", { "stmp-switch-disabled": e.disabled }])
    }, [
      e.label ? (R(), B("span", Dh, E(e.label), 1)) : Ce("", !0),
      f("span", Nh, [
        f("input", {
          ref_key: "inputRef",
          ref: o,
          type: "checkbox",
          checked: e.modelValue,
          disabled: e.disabled,
          onChange: i
        }, null, 40, Fh),
        a[0] || (a[0] = f("span", { class: "stmp-switch-track" }, [
          f("span", { class: "stmp-switch-thumb" })
        ], -1))
      ])
    ], 2));
  }
}), kt = /* @__PURE__ */ Ht(Bh, [["__scopeId", "data-v-529649ca"]]), Uh = ["value", "placeholder", "readonly"], jh = ["onMousedown", "onMouseenter"], Hh = /* @__PURE__ */ Ut({
  __name: "ComboBox",
  props: {
    modelValue: {},
    options: {},
    placeholder: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const s = e, n = t, o = /* @__PURE__ */ ge(null), i = /* @__PURE__ */ ge(null), r = /* @__PURE__ */ ge(!1), a = /* @__PURE__ */ ge(-1), l = /* @__PURE__ */ ge({}), c = Ae(() => s.options), u = Ae(() => s.options.length > 0);
    function p() {
      const y = i.value;
      if (!y) return;
      const S = y.getBoundingClientRect();
      l.value = {
        position: "fixed",
        left: `${S.left}px`,
        top: `${S.bottom + 2}px`,
        width: `${S.width}px`,
        zIndex: "10000"
      };
    }
    function w() {
      s.options.length !== 0 && (r.value = !0, a.value = -1, Ue(p));
    }
    function x() {
      r.value = !1, a.value = -1;
    }
    function A() {
      r.value ? x() : w();
    }
    function k(y) {
      n("update:modelValue", y), x();
    }
    function F(y) {
      n("update:modelValue", y.target.value), !r.value && s.options.length > 0 && (r.value = !0), a.value = -1, Ue(p);
    }
    function K(y) {
      if (!r.value) return;
      const S = c.value;
      y.key === "ArrowDown" ? (y.preventDefault(), a.value = Math.min(a.value + 1, S.length - 1)) : y.key === "ArrowUp" ? (y.preventDefault(), a.value = Math.max(a.value - 1, 0)) : y.key === "Enter" ? a.value >= 0 && a.value < S.length ? (y.preventDefault(), k(S[a.value])) : x() : y.key === "Escape" && (y.preventDefault(), x());
    }
    function j(y) {
      const S = y.target;
      o.value?.contains(S) || document.getElementById("stmp-combobox-dropdown")?.contains(S) || x();
    }
    function Z() {
      r.value && x();
    }
    function _() {
      r.value && Ue(p);
    }
    return rn(() => {
      document.addEventListener("mousedown", j, !0), window.addEventListener("scroll", Z, !0), window.addEventListener("resize", _);
    }), an(() => {
      document.removeEventListener("mousedown", j, !0), window.removeEventListener("scroll", Z, !0), window.removeEventListener("resize", _);
    }), Qe(() => s.modelValue, (y) => {
      i.value && i.value.value !== y && (i.value.value = y);
    }), (y, S) => (R(), B("div", {
      ref_key: "rootRef",
      ref: o,
      class: he(["stmp-combobox", { "has-options": e.options.length > 0 }])
    }, [
      f("input", {
        ref_key: "inputRef",
        ref: i,
        class: "text_pole",
        type: "text",
        value: e.modelValue,
        placeholder: e.placeholder,
        readonly: u.value,
        autocomplete: "off",
        onFocus: w,
        onInput: F,
        onKeydown: K
      }, null, 40, Uh),
      e.options.length > 0 ? (R(), B("i", {
        key: 0,
        class: he(["fa-solid fa-chevron-down stmp-combobox-arrow", { rotated: r.value }]),
        onMousedown: Kt(A, ["prevent"])
      }, null, 34)) : Ce("", !0),
      (R(), mt(ga, { to: "body" }, [
        r.value && c.value.length > 0 ? (R(), B("div", {
          key: 0,
          id: "stmp-combobox-dropdown",
          class: "stmp-combobox-dropdown",
          style: Yt(l.value)
        }, [
          (R(!0), B(le, null, st(c.value, (b, V) => (R(), B("div", {
            key: b,
            class: he(["stmp-combobox-option", { active: V === a.value }]),
            onMousedown: Kt((P) => k(b), ["prevent"]),
            onMouseenter: (P) => a.value = V
          }, E(b), 43, jh))), 128))
        ], 4)) : Ce("", !0)
      ]))
    ], 2));
  }
}), Vh = /* @__PURE__ */ Ht(Hh, [["__scopeId", "data-v-804fa027"]]), Wh = { class: "stmp-settings" }, zh = { class: "stmp-tab-bar" }, Gh = ["onClick"], Kh = { class: "stmp-tab-content" }, Yh = { class: "stmp-tab-panel" }, Jh = { class: "stmp-row" }, qh = { class: "stmp-row-info" }, Xh = { class: "stmp-row-title" }, Zh = { class: "stmp-row-desc" }, Qh = { class: "stmp-chips" }, eg = ["onClick"], tg = {
  key: 0,
  class: "stmp-row"
}, sg = { class: "stmp-row-info" }, ng = { class: "stmp-row-title" }, og = { class: "stmp-row-desc" }, ig = { class: "stmp-chips" }, rg = ["onClick"], ag = {
  key: 1,
  class: "stmp-row"
}, lg = { class: "stmp-row-info" }, cg = { class: "stmp-row-title" }, ug = { class: "stmp-row-desc" }, fg = {
  key: 2,
  class: "stmp-row"
}, dg = { class: "stmp-row-info" }, pg = { class: "stmp-row-title" }, hg = { class: "stmp-row-desc" }, gg = {
  key: 3,
  class: "stmp-row"
}, mg = { class: "stmp-row-info" }, yg = { class: "stmp-row-title" }, vg = { class: "stmp-slider-wrap" }, _g = ["value"], bg = { class: "stmp-slider-val" }, wg = { class: "stmp-tab-panel" }, kg = { class: "stmp-section-header" }, xg = { class: "stmp-section-title" }, Sg = { class: "stmp-row" }, Cg = { class: "stmp-row-info" }, Tg = { class: "stmp-row-title" }, Ag = { class: "stmp-slider-wrap" }, Mg = ["value"], Eg = { class: "stmp-slider-val" }, Pg = { class: "stmp-row" }, Ig = { class: "stmp-row-info" }, Rg = { class: "stmp-row-title" }, Og = { class: "stmp-chips" }, Lg = ["onClick"], $g = { class: "stmp-row" }, Dg = { class: "stmp-row-info" }, Ng = { class: "stmp-row-title" }, Fg = { class: "stmp-row-desc" }, Bg = { class: "stmp-section-header" }, Ug = { class: "stmp-section-title" }, jg = { class: "stmp-row" }, Hg = { class: "stmp-row-info" }, Vg = { class: "stmp-row-title" }, Wg = { class: "stmp-row-desc" }, zg = { class: "stmp-chips" }, Gg = ["onClick"], Kg = {
  key: 0,
  class: "stmp-row"
}, Yg = { class: "stmp-row-info" }, Jg = { class: "stmp-row-title" }, qg = { class: "stmp-row-desc" }, Xg = ["value", "placeholder"], Zg = { class: "stmp-row" }, Qg = { class: "stmp-row-info" }, em = { class: "stmp-row-title" }, tm = ["title"], sm = { class: "stmp-row-desc" }, nm = { class: "stmp-model-wrap" }, om = ["value", "placeholder"], im = { class: "stmp-row" }, rm = { class: "stmp-row-info" }, am = { class: "stmp-row-title" }, lm = { class: "stmp-row-desc" }, cm = { class: "stmp-section-header" }, um = { class: "stmp-section-title" }, fm = { class: "stmp-row" }, dm = { class: "stmp-row-info" }, pm = { class: "stmp-row-title" }, hm = { class: "stmp-row-desc" }, gm = { class: "stmp-row" }, mm = { class: "stmp-row-info" }, ym = { class: "stmp-row-title" }, vm = { class: "stmp-row-desc" }, _m = { class: "stmp-tab-panel" }, bm = { class: "stmp-row" }, wm = { class: "stmp-row-info" }, km = { class: "stmp-row-title" }, xm = { class: "stmp-row-desc" }, Sm = { class: "stmp-row" }, Cm = { class: "stmp-row-info" }, Tm = { class: "stmp-row-title" }, Am = { class: "stmp-row-desc" }, Mm = { class: "stmp-chips" }, Em = ["onClick"], Pm = { class: "stmp-row" }, Im = { class: "stmp-row-info" }, Rm = { class: "stmp-row-title" }, Om = { class: "stmp-row-desc" }, Lm = { class: "stmp-row" }, $m = { class: "stmp-row-info" }, Dm = { class: "stmp-row-title" }, Nm = { class: "stmp-row-desc" }, Fm = ["value"], Bm = { class: "stmp-row" }, Um = { class: "stmp-row-info" }, jm = { class: "stmp-row-title" }, Hm = { class: "stmp-row-desc" }, Vm = ["value"], Wm = { class: "stmp-row" }, zm = { class: "stmp-row-info" }, Gm = { class: "stmp-row-title" }, Km = { class: "stmp-row-desc" }, Ym = { class: "stmp-model-wrap" }, Jm = ["title"], qm = { class: "stmp-row" }, Xm = { class: "stmp-row-info" }, Zm = { class: "stmp-row-title" }, Qm = { class: "stmp-row-desc" }, ey = { class: "stmp-slider-wrap" }, ty = ["value"], sy = { class: "stmp-slider-val" }, ny = { class: "stmp-row" }, oy = { class: "stmp-row-info" }, iy = { class: "stmp-row-title" }, ry = { class: "stmp-row-desc" }, ay = {
  key: 0,
  class: "stmp-row"
}, ly = { class: "stmp-row-info" }, cy = { class: "stmp-row-title" }, uy = { class: "stmp-row-desc" }, fy = { class: "stmp-row" }, dy = { class: "stmp-row-info" }, py = { class: "stmp-row-title" }, hy = { class: "stmp-row-desc" }, gy = { class: "stmp-chips" }, my = ["onClick"], yy = { class: "stmp-row" }, vy = { class: "stmp-row-info" }, _y = { class: "stmp-row-title" }, by = { class: "stmp-row-desc" }, wy = {
  key: 0,
  class: "stmp-row"
}, ky = { class: "stmp-row-info" }, xy = { class: "stmp-row-title" }, Sy = { class: "stmp-row-desc" }, Cy = ["title"], Ty = { class: "stmp-tab-panel" }, Ay = { class: "stmp-row" }, My = { class: "stmp-row-info" }, Ey = { class: "stmp-row-title" }, Py = { class: "stmp-row-desc" }, Iy = { class: "stmp-row" }, Ry = { class: "stmp-row-info" }, Oy = { class: "stmp-row-title" }, Ly = { class: "stmp-row-desc" }, $y = { class: "stmp-row" }, Dy = { class: "stmp-row-info" }, Ny = { class: "stmp-row-title" }, Fy = { class: "stmp-row-desc" }, By = { class: "stmp-about" }, Uy = { class: "stmp-about-version" }, jy = { class: "stmp-about-desc" }, Hy = "https://github.com/vvb7456/ST-little-player", Vy = /* @__PURE__ */ Ut({
  __name: "SettingsView",
  setup(e) {
    const t = me(), s = rt(), n = /* @__PURE__ */ ge("appearance"), o = [
      { id: "appearance", label: g("Appearance"), icon: "fa-solid fa-palette" },
      { id: "playback", label: g("Playback"), icon: "fa-solid fa-music" },
      { id: "ai", label: g("AI"), icon: "fa-solid fa-wand-magic-sparkles" },
      { id: "general", label: g("General"), icon: "fa-solid fa-sliders" }
    ], i = [
      { value: "dock", label: g("Dock"), icon: "fa-solid fa-grip-lines" },
      { value: "drag", label: g("Drag"), icon: "fa-solid fa-up-down-left-right" },
      { value: "inline", label: g("Inline"), icon: "fa-solid fa-puzzle-piece" },
      { value: "hidden", label: g("Hidden"), icon: "fa-solid fa-eye-slash" }
    ], r = [
      { value: "top-left", label: g("Top Left"), icon: "fa-solid fa-arrow-up-from-left" },
      { value: "top-right", label: g("Top Right"), icon: "fa-solid fa-arrow-up-from-right" },
      { value: "bottom-left", label: g("Bottom Left"), icon: "fa-solid fa-arrow-down-from-left" },
      { value: "bottom-right", label: g("Bottom Right"), icon: "fa-solid fa-arrow-down-from-right" }
    ], a = () => t.settings.widgetMode === "dock" || t.settings.widgetMode === "drag";
    function l(C) {
      const v = C.target;
      t.setOpacity(Number(v.value));
    }
    const c = [
      { value: "list", label: g("List Loop"), icon: "fa-solid fa-repeat" },
      { value: "random", label: g("Random"), icon: "fa-solid fa-shuffle" },
      { value: "single", label: g("Single Loop"), icon: "fa-solid fa-repeat" }
    ];
    function u(C) {
      const v = C.target;
      t.setVolume(Number(v.value));
    }
    const p = [
      { value: "worker", label: g("Official Worker") },
      { value: "self", label: g("Self-hosted") }
    ], w = [
      { value: "together", label: g("Together"), icon: "fa-solid fa-link" },
      { value: "function_call", label: g("Function Call"), icon: "fa-solid fa-screwdriver-wrench" }
    ];
    function x(C) {
      t.setAiMode(C), Cn()?.setMode(C);
    }
    function A(C) {
      t.setAiUseCustomApi(C), Cn()?.resetFunctionCall();
    }
    function k(C) {
      const v = C ? "function_call" : "off";
      t.setAiMode(v), Cn()?.setMode(v);
    }
    function F(C) {
      const v = C.target;
      t.setAiContextMessages(Number(v.value));
    }
    const K = /* @__PURE__ */ ge([]), j = /* @__PURE__ */ ge(!1);
    async function Z() {
      if (j.value) return;
      if (!t.settings.aiApiUrl) {
        typeof toastr < "u" && toastr.warning(g("Please fill API URL"), "晓乐");
        return;
      }
      j.value = !0;
      try {
        const v = await Ih();
        K.value = v, v.length === 0 ? typeof toastr < "u" && toastr.info(g("No models returned"), "晓乐") : typeof toastr < "u" && toastr.success(`${g("models found")} ${v.length} 个模型`, "晓乐");
      } catch (v) {
        z.error("Failed to fetch models:", v), typeof toastr < "u" && toastr.error(g("Failed to fetch models"), "晓乐");
      } finally {
        j.value = !1;
      }
    }
    function _() {
      const C = t.settings.providers.find((v) => v.id === "local");
      if (C) {
        if (!C.enabled) {
          const v = SillyTavern.getContext();
          if (v?.callGenericPopup && v?.POPUP_TYPE) {
            v.callGenericPopup(
              g("Upload warning text"),
              v.POPUP_TYPE.CONFIRM,
              "",
              { okButton: g("Confirm"), cancelButton: g("Cancel") }
            ).then((M) => {
              M === 1 && (C.enabled = !0, t.save(), typeof toastr < "u" && toastr.info(g("Source enabled"), "晓乐"));
            });
            return;
          }
        }
        C.enabled = !C.enabled, t.save(), typeof toastr < "u" && toastr.info(C.enabled ? g("Source enabled") : g("Source disabled"), "晓乐");
      }
    }
    const y = /* @__PURE__ */ ge(!1), S = Ae(() => {
      const C = t.neteaseStatus;
      return C === "no-cookie" ? { icon: "fa-solid fa-link", ok: !1, warn: !1 } : C === "expired" ? { icon: "fa-solid fa-triangle-exclamation", ok: !1, warn: !0 } : C === "invalid" ? { icon: "fa-solid fa-triangle-exclamation", ok: !1, warn: !0 } : { icon: "fa-solid fa-circle-check", ok: !0, warn: !1 };
    }), b = Ae(() => !!t.settings.neteaseCookie);
    async function V() {
      if (y.value) return;
      const C = t.settings.neteaseCookie.trim();
      if (!C) {
        typeof toastr < "u" && toastr.warning(g("Cookie invalid or expired"), "晓乐");
        return;
      }
      y.value = !0;
      try {
        const v = t.settings.neteaseMode === "worker" ? pl : t.settings.neteaseWorkerURL;
        if (!v) {
          typeof toastr < "u" && toastr.warning(g("Worker URL"), "晓乐");
          return;
        }
        const ae = await (await fetch(`${v}/auth`, {
          headers: { "X-Netease-Cookie": C }
        })).json();
        ae?.success && ae?.data?.valid ? (t.setNeteaseCookie(C), typeof toastr < "u" && toastr.success(g("Cookie valid"), "晓乐")) : (t.setNeteaseCookieInvalid(), typeof toastr < "u" && toastr.error(g("Cookie invalid or expired"), "晓乐"));
      } catch (v) {
        z.error("NetEase cookie verify failed:", v), typeof toastr < "u" && toastr.error(g("Cannot reach Worker"), "晓乐");
      } finally {
        y.value = !1;
      }
    }
    function P(C) {
      const v = C.target.value.trim();
      t.setNeteaseCookie(v);
    }
    const X = ["aiApiUrl", "aiApiKey", "aiModel", "neteaseCookie", "neteaseCookieAt", "neteaseCookieValid"], q = () => {
      const C = {};
      for (const [ue, fe] of Object.entries(t.settings))
        X.includes(ue) || (C[ue] = fe);
      const v = new Blob([JSON.stringify(C, null, 2)], { type: "application/json" }), M = URL.createObjectURL(v), ae = document.createElement("a");
      ae.href = M, ae.download = "st-little-player-settings.json", ae.click(), URL.revokeObjectURL(M), typeof toastr < "u" && toastr.success(g("Settings exported"), "晓乐");
    }, D = () => {
      const C = document.createElement("input");
      C.type = "file", C.accept = ".json", C.onchange = async (v) => {
        const M = v.target.files?.[0];
        if (!M) return;
        const ae = await M.text();
        try {
          const ue = JSON.parse(ae);
          if (typeof ue != "object" || ue === null) throw new Error("Not an object");
          const fe = ["volume", "playMode", "crossfade", "position", "widgetMode", "dockAlign", "showDragMiniText", "providers", "customOpacity", "opacity", "aiMode", "aiUseCustomApi", "aiContextMessages", "aiAutoTrigger", "aiTriggerOnGreeting", "aiCooldownMs", "togetherPromptRole", "togetherCustomPromptEnabled", "togetherCustomPrompt", "debug", "neteaseMode", "neteaseWorkerURL"], oe = {};
          for (const Le of fe)
            Le in ue && (oe[Le] = ue[Le]);
          if (typeof oe.volume != "number" || oe.volume < 0 || oe.volume > 100)
            throw new Error("Invalid volume");
          if (typeof oe.playMode != "string" || !["list", "random", "single"].includes(oe.playMode))
            throw new Error("Invalid playMode");
          if (oe.providers && !Array.isArray(oe.providers))
            throw new Error("Invalid providers");
          Object.assign(t.settings, oe), t.save(), typeof toastr < "u" && toastr.success(g("Settings imported"), "晓乐");
        } catch (ue) {
          z.error("Settings import failed:", ue), typeof toastr < "u" && toastr.error(`${g("Import failed")}：${ue instanceof Error ? ue.message : g("Invalid JSON")}`, "晓乐");
        }
      }, C.click();
    }, Q = "0.2.0-beta", re = () => {
      const C = s.networkList.map((ue) => ({
        song: ue.song,
        artist: ue.artist,
        providerId: ue.providerId,
        providerTrackId: ue.providerTrackId,
        providerPicId: ue.providerPicId
      })), v = new Blob([JSON.stringify(C, null, 2)], { type: "application/json" }), M = URL.createObjectURL(v), ae = document.createElement("a");
      ae.href = M, ae.download = "st-little-player-playlist.json", ae.click(), URL.revokeObjectURL(M), typeof toastr < "u" && toastr.success(g("Playlist exported"), "晓乐");
    }, ke = () => {
      const C = document.createElement("input");
      C.type = "file", C.accept = ".json", C.onchange = async (v) => {
        const M = v.target.files?.[0];
        if (!M) return;
        const ae = await M.text();
        try {
          const ue = JSON.parse(ae);
          if (!Array.isArray(ue)) throw new Error("Not an array");
          const fe = ue.filter((oe) => oe && typeof oe.song == "string").map((oe) => ({
            id: `stmp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
            song: oe.song,
            artist: oe.artist,
            source: "network",
            providerId: oe.providerId,
            providerTrackId: oe.providerTrackId,
            providerPicId: oe.providerPicId,
            addedAt: Date.now()
          }));
          s.networkList = fe, s.savePlaylistData(), typeof toastr < "u" && toastr.success(g("Playlist imported"), "晓乐");
        } catch (ue) {
          z.error("Playlist import failed:", ue), typeof toastr < "u" && toastr.error(`${g("Import failed")}：${ue instanceof Error ? ue.message : g("Invalid JSON")}`, "晓乐");
        }
      }, C.click();
    };
    async function U() {
      const C = SillyTavern.getContext(), v = t.settings.togetherCustomPrompt || wl, M = ["{{xiaoyueCurrentSong}}", "{{xiaoyueCurrentArtist}}", "{{xiaoyueIsPlaying}}", "{{xiaoyueHasTrack}}", "{{xiaoyueRecentPlayed}}"], ae = `<div style="margin-bottom:6px;font-size:0.85em;opacity:0.8">${g("The prompt must contain the markers")} <code class="stmp-macro-hint">&lt;!--XY_BGM_START--&gt;</code> / <code class="stmp-macro-hint">&lt;!--XY_BGM_END--&gt;</code> ${g("for BGM control to work.")}</div>`, ue = M.map((pe) => `<code class="stmp-macro-hint">${pe}</code>`).join(" "), fe = `<div style="margin-bottom:8px;font-size:0.85em;opacity:0.7">${g("Available macros:")} ${ue}</div>`, oe = ae + fe;
      $("#dialogue_popup_cancel").css("display", "flex"), $("#dialogue_popup_controls .menu_button").css("width", "unset");
      const Le = await C.callPopup(oe, "input", v, { wide: !0, rows: 20, okButton: g("Save") });
      Le !== !1 && t.setTogetherCustomPrompt(String(Le).trim());
    }
    return (C, v) => (R(), B("div", Wh, [
      f("div", zh, [
        (R(), B(le, null, st(o, (M) => f("div", {
          key: M.id,
          class: he(["stmp-tab", { active: n.value === M.id }]),
          onClick: (ae) => n.value = M.id
        }, [
          f("i", {
            class: he(M.icon)
          }, null, 2),
          f("span", null, E(M.label), 1)
        ], 10, Gh)), 64))
      ]),
      f("div", Kh, [
        Rs(f("div", Yh, [
          f("div", Jh, [
            f("div", qh, [
              f("div", Xh, E(h(g)("Widget Mode")), 1),
              f("div", Zh, E(h(g)("Choose how the player widget is displayed")), 1)
            ]),
            f("div", Qh, [
              (R(), B(le, null, st(i, (M) => f("div", {
                key: M.value,
                class: he(["stmp-chip", { active: h(t).settings.widgetMode === M.value }]),
                onClick: (ae) => h(t).setWidgetMode(M.value)
              }, [
                f("i", {
                  class: he(M.icon)
                }, null, 2),
                f("span", null, E(M.label), 1)
              ], 10, eg)), 64))
            ])
          ]),
          h(t).settings.widgetMode === "dock" ? (R(), B("div", tg, [
            f("div", sg, [
              f("div", ng, E(h(g)("Dock Alignment")), 1),
              f("div", og, E(h(g)("Align the docked player to a corner of the screen")), 1)
            ]),
            f("div", ig, [
              (R(), B(le, null, st(r, (M) => f("div", {
                key: M.value,
                class: he(["stmp-chip", { active: h(t).settings.dockAlign === M.value }]),
                onClick: (ae) => h(t).setDockAlign(M.value)
              }, [
                f("i", {
                  class: he(M.icon)
                }, null, 2),
                f("span", null, E(M.label), 1)
              ], 10, rg)), 64))
            ])
          ])) : Ce("", !0),
          h(t).settings.widgetMode === "drag" ? (R(), B("div", ag, [
            f("div", lg, [
              f("div", cg, E(h(g)("Show track info in drag mini")), 1),
              f("div", ug, E(h(g)("Show song title and lyrics in the compact drag widget")), 1)
            ]),
            ce(kt, {
              "model-value": h(t).settings.showDragMiniText,
              "onUpdate:modelValue": h(t).setShowDragMiniText
            }, null, 8, ["model-value", "onUpdate:modelValue"])
          ])) : Ce("", !0),
          a() ? (R(), B("div", fg, [
            f("div", dg, [
              f("div", pg, E(h(g)("Custom opacity")), 1),
              f("div", hg, E(h(g)("Adjust the player background opacity")), 1)
            ]),
            ce(kt, {
              "model-value": h(t).settings.customOpacity,
              "onUpdate:modelValue": h(t).setCustomOpacity
            }, null, 8, ["model-value", "onUpdate:modelValue"])
          ])) : Ce("", !0),
          h(t).settings.customOpacity ? (R(), B("div", gg, [
            f("div", mg, [
              f("div", yg, E(h(g)("Opacity")), 1)
            ]),
            f("div", vg, [
              f("input", {
                type: "range",
                class: "stmp-slider",
                min: "0",
                max: "100",
                value: h(t).settings.opacity,
                onInput: l
              }, null, 40, _g),
              f("span", bg, E(h(t).settings.opacity) + "%", 1)
            ])
          ])) : Ce("", !0)
        ], 512), [
          [hn, n.value === "appearance"]
        ]),
        Rs(f("div", wg, [
          f("div", kg, [
            f("div", xg, E(h(g)("Playback Settings")), 1)
          ]),
          f("div", Sg, [
            f("div", Cg, [
              f("div", Tg, E(h(g)("Default Volume")), 1)
            ]),
            f("div", Ag, [
              f("input", {
                type: "range",
                class: "stmp-slider",
                min: "0",
                max: "100",
                value: h(t).settings.volume,
                onInput: u
              }, null, 40, Mg),
              f("span", Eg, E(h(t).settings.volume), 1)
            ])
          ]),
          f("div", Pg, [
            f("div", Ig, [
              f("div", Rg, E(h(g)("Default Play Mode")), 1)
            ]),
            f("div", Og, [
              (R(), B(le, null, st(c, (M) => f("div", {
                key: M.value,
                class: he(["stmp-chip", { active: h(t).settings.playMode === M.value }]),
                onClick: (ae) => h(t).setPlayMode(M.value)
              }, [
                f("i", {
                  class: he(M.icon)
                }, null, 2),
                f("span", null, E(M.label), 1)
              ], 10, Lg)), 64))
            ])
          ]),
          f("div", $g, [
            f("div", Dg, [
              f("div", Ng, E(h(g)("Crossfade")), 1),
              f("div", Fg, E(h(g)("Smoothly fade in when starting playback and fade out when pausing or switching tracks")), 1)
            ]),
            ce(kt, {
              "model-value": h(t).settings.crossfade,
              "onUpdate:modelValue": h(t).setCrossfade
            }, null, 8, ["model-value", "onUpdate:modelValue"])
          ]),
          f("div", Bg, [
            f("div", Ug, E(h(g)("Data Sources")), 1)
          ]),
          f("div", jg, [
            f("div", Hg, [
              f("div", Vg, E(h(g)("NetEase Music")), 1),
              f("div", Wg, E(h(g)("Select official or self-hosted Worker")), 1)
            ]),
            f("div", zg, [
              (R(), B(le, null, st(p, (M) => f("div", {
                key: M.value,
                class: he(["stmp-chip", { active: h(t).settings.neteaseMode === M.value }]),
                onClick: (ae) => h(t).setNeteaseMode(M.value)
              }, [
                f("span", null, E(M.label), 1)
              ], 10, Gg)), 64))
            ])
          ]),
          h(t).settings.neteaseMode === "self" ? (R(), B("div", Kg, [
            f("div", Yg, [
              f("div", Jg, E(h(g)("Worker URL")), 1),
              f("div", qg, E(h(g)("Your Cloudflare Worker deployment URL")), 1)
            ]),
            f("input", {
              class: "text_pole stmp-text-input",
              value: h(t).settings.neteaseWorkerURL,
              placeholder: h(g)("Worker URL"),
              onChange: v[0] || (v[0] = (M) => h(t).setNeteaseWorkerURL(M.target.value))
            }, null, 40, Xg)
          ])) : Ce("", !0),
          f("div", Zg, [
            f("div", Qg, [
              f("div", em, [
                ls(E(h(g)("MUSIC_U Cookie")) + " ", 1),
                f("i", {
                  class: "fa-solid fa-circle-info stmp-help-tip",
                  title: h(g)("Cookie privacy hint")
                }, null, 8, tm)
              ]),
              f("div", sm, E(h(g)("Paste cookie from music.163.com")), 1)
            ]),
            f("div", nm, [
              f("input", {
                type: "password",
                class: "text_pole",
                value: h(t).settings.neteaseCookie,
                placeholder: b.value ? "••••••••" : h(g)("Paste MUSIC_U cookie value here"),
                onChange: P
              }, null, 40, om),
              f("div", {
                class: he(["menu_button menu_button_icon stmp-action-btn", { "stmp-spin": y.value, "stmp-verify-ok": S.value.ok, "stmp-verify-warn": S.value.warn }]),
                onClick: V
              }, [
                f("i", {
                  class: he(S.value.icon)
                }, null, 2)
              ], 2)
            ])
          ]),
          f("div", im, [
            f("div", rm, [
              f("div", am, E(h(g)("Upload")), 1),
              f("div", lm, E(h(g)("Upload and play songs from the server")), 1)
            ]),
            ce(kt, {
              "model-value": !!h(t).settings.providers.find((M) => M.id === "local")?.enabled,
              "onUpdate:modelValue": _
            }, null, 8, ["model-value"])
          ]),
          f("div", cm, [
            f("div", um, E(h(g)("Playlist Management")), 1)
          ]),
          f("div", fm, [
            f("div", dm, [
              f("div", pm, E(h(g)("Export playlist")), 1),
              f("div", hm, E(h(g)("Save network playlist to a JSON file")), 1)
            ]),
            f("div", {
              class: "menu_button menu_button_icon stmp-action-btn",
              onClick: re
            }, [...v[7] || (v[7] = [
              f("i", { class: "fa-solid fa-file-export" }, null, -1)
            ])])
          ]),
          f("div", gm, [
            f("div", mm, [
              f("div", ym, E(h(g)("Import playlist")), 1),
              f("div", vm, E(h(g)("Load network playlist from a JSON file")), 1)
            ]),
            f("div", {
              class: "menu_button menu_button_icon stmp-action-btn",
              onClick: ke
            }, [...v[8] || (v[8] = [
              f("i", { class: "fa-solid fa-file-import" }, null, -1)
            ])])
          ])
        ], 512), [
          [hn, n.value === "playback"]
        ]),
        Rs(f("div", _m, [
          f("div", bm, [
            f("div", wm, [
              f("div", km, E(h(g)("AI BGM")), 1),
              f("div", xm, E(h(g)("Enable AI-driven background music selection")), 1)
            ]),
            ce(kt, {
              "model-value": h(t).settings.aiMode !== "off",
              "onUpdate:modelValue": v[1] || (v[1] = (M) => k(M))
            }, null, 8, ["model-value"])
          ]),
          h(t).settings.aiMode !== "off" ? (R(), B(le, { key: 0 }, [
            f("div", Sm, [
              f("div", Cm, [
                f("div", Tm, E(h(g)("AI Mode")), 1),
                f("div", Am, E(h(g)("Choose how AI selects background music")), 1)
              ]),
              f("div", Mm, [
                (R(), B(le, null, st(w, (M) => f("div", {
                  key: M.value,
                  class: he(["stmp-chip", { active: h(t).settings.aiMode === M.value }]),
                  onClick: (ae) => x(M.value)
                }, [
                  f("i", {
                    class: he(M.icon)
                  }, null, 2),
                  f("span", null, E(M.label), 1)
                ], 10, Em)), 64))
              ])
            ]),
            h(t).settings.aiMode === "function_call" ? (R(), B(le, { key: 0 }, [
              f("div", Pm, [
                f("div", Im, [
                  f("div", Rm, E(h(g)("Custom API")), 1),
                  f("div", Om, E(h(g)("Use a separate API endpoint for BGM agent loop instead of main API function calling")), 1)
                ]),
                ce(kt, {
                  "model-value": h(t).settings.aiUseCustomApi,
                  "onUpdate:modelValue": A
                }, null, 8, ["model-value"])
              ]),
              h(t).settings.aiUseCustomApi ? (R(), B(le, { key: 0 }, [
                f("div", Lm, [
                  f("div", $m, [
                    f("div", Dm, E(h(g)("API URL")), 1),
                    f("div", Nm, E(h(g)("OpenAI-compatible endpoint that supports tool calling")), 1)
                  ]),
                  f("input", {
                    class: "text_pole stmp-text-input",
                    value: h(t).settings.aiApiUrl,
                    placeholder: "",
                    onChange: v[2] || (v[2] = (M) => h(t).setAiApiUrl(M.target.value.trim()))
                  }, null, 40, Fm)
                ]),
                f("div", Bm, [
                  f("div", Um, [
                    f("div", jm, E(h(g)("API Key")), 1),
                    f("div", Hm, E(h(g)("Bearer token for the custom endpoint")), 1)
                  ]),
                  f("input", {
                    type: "password",
                    class: "text_pole stmp-text-input",
                    value: h(t).settings.aiApiKey,
                    placeholder: "",
                    onChange: v[3] || (v[3] = (M) => h(t).setAiApiKey(M.target.value.trim()))
                  }, null, 40, Vm)
                ]),
                f("div", Wm, [
                  f("div", zm, [
                    f("div", Gm, E(h(g)("Model")), 1),
                    f("div", Km, E(h(g)("Model that supports tool calling")), 1)
                  ]),
                  f("div", Ym, [
                    ce(Vh, {
                      "model-value": h(t).settings.aiModel,
                      options: K.value,
                      placeholder: "",
                      "onUpdate:modelValue": v[4] || (v[4] = (M) => h(t).setAiModel(M))
                    }, null, 8, ["model-value", "options"]),
                    f("div", {
                      class: he(["menu_button menu_button_icon stmp-model-fetch", { "stmp-spin": j.value }]),
                      title: h(g)("Connect"),
                      onClick: Z
                    }, [...v[9] || (v[9] = [
                      f("i", { class: "fa-solid fa-plug" }, null, -1)
                    ])], 10, Jm)
                  ])
                ]),
                f("div", qm, [
                  f("div", Xm, [
                    f("div", Zm, E(h(g)("Context Messages")), 1),
                    f("div", Qm, E(h(g)("Number of recent chat messages to send to AI")), 1)
                  ]),
                  f("div", ey, [
                    f("input", {
                      type: "range",
                      class: "stmp-slider",
                      min: "2",
                      max: "20",
                      value: h(t).settings.aiContextMessages,
                      onInput: F
                    }, null, 40, ty),
                    f("span", sy, E(h(t).settings.aiContextMessages), 1)
                  ])
                ]),
                f("div", ny, [
                  f("div", oy, [
                    f("div", iy, E(h(g)("Auto Trigger")), 1),
                    f("div", ry, E(h(g)("Automatically analyze new messages and select music")), 1)
                  ]),
                  ce(kt, {
                    "model-value": h(t).settings.aiAutoTrigger,
                    "onUpdate:modelValue": v[5] || (v[5] = (M) => h(t).setAiAutoTrigger(M))
                  }, null, 8, ["model-value"])
                ]),
                h(t).settings.aiAutoTrigger ? (R(), B("div", ay, [
                  f("div", ly, [
                    f("div", cy, E(h(g)("Trigger on Greeting")), 1),
                    f("div", uy, E(h(g)("Analyze BGM when loading a character card (first message)")), 1)
                  ]),
                  ce(kt, {
                    "model-value": h(t).settings.aiTriggerOnGreeting,
                    "onUpdate:modelValue": v[6] || (v[6] = (M) => h(t).setAiTriggerOnGreeting(M))
                  }, null, 8, ["model-value"])
                ])) : Ce("", !0)
              ], 64)) : Ce("", !0)
            ], 64)) : Ce("", !0),
            h(t).settings.aiMode === "together" ? (R(), B(le, { key: 1 }, [
              f("div", fy, [
                f("div", dy, [
                  f("div", py, E(h(g)("Prompt Role")), 1),
                  f("div", hy, E(h(g)("Role used when injecting BGM instructions into the main AI")), 1)
                ]),
                f("div", gy, [
                  (R(!0), B(le, null, st([{ v: "system", l: h(g)("System") }, { v: "user", l: h(g)("User") }], (M) => (R(), B("div", {
                    key: M.v,
                    class: he(["stmp-chip", { active: h(t).settings.togetherPromptRole === M.v }]),
                    onClick: (ae) => h(t).setTogetherPromptRole(M.v)
                  }, [
                    f("span", null, E(M.l), 1)
                  ], 10, my))), 128))
                ])
              ]),
              f("div", yy, [
                f("div", vy, [
                  f("div", _y, E(h(g)("Custom Prompt")), 1),
                  f("div", by, [
                    ls(E(h(g)("Edit the BGM instruction prompt. Use macros like ")) + " ", 1),
                    v[10] || (v[10] = f("code", null, "{{xiaoyueCurrentSong}}", -1)),
                    ls(" " + E(h(g)(" for dynamic values.")), 1)
                  ])
                ]),
                ce(kt, {
                  "model-value": h(t).settings.togetherCustomPromptEnabled,
                  "onUpdate:modelValue": h(t).setTogetherCustomPromptEnabled
                }, null, 8, ["model-value", "onUpdate:modelValue"])
              ]),
              h(t).settings.togetherCustomPromptEnabled ? (R(), B("div", wy, [
                f("div", ky, [
                  f("div", xy, E(h(g)("Edit Prompt")), 1),
                  f("div", Sy, E(h(g)("Click to edit the BGM instruction prompt")), 1)
                ]),
                f("div", {
                  class: "menu_button menu_button_icon stmp-action-btn",
                  title: h(g)("Edit Prompt"),
                  onClick: U
                }, [...v[11] || (v[11] = [
                  f("i", { class: "fa-solid fa-pen-to-square" }, null, -1)
                ])], 8, Cy)
              ])) : Ce("", !0)
            ], 64)) : Ce("", !0)
          ], 64)) : Ce("", !0)
        ], 512), [
          [hn, n.value === "ai"]
        ]),
        Rs(f("div", Ty, [
          f("div", Ay, [
            f("div", My, [
              f("div", Ey, E(h(g)("Debug Mode")), 1),
              f("div", Py, E(h(g)("Enable verbose console logging for troubleshooting")), 1)
            ]),
            ce(kt, {
              "model-value": h(t).settings.debug,
              "onUpdate:modelValue": h(t).setDebug
            }, null, 8, ["model-value", "onUpdate:modelValue"])
          ]),
          v[18] || (v[18] = f("div", { class: "stmp-separator" }, null, -1)),
          f("div", Iy, [
            f("div", Ry, [
              f("div", Oy, E(h(g)("Export data")), 1),
              f("div", Ly, E(h(g)("Save your settings to a JSON file")), 1)
            ]),
            f("div", {
              class: "menu_button menu_button_icon stmp-action-btn",
              onClick: q
            }, [...v[12] || (v[12] = [
              f("i", { class: "fa-solid fa-file-export" }, null, -1)
            ])])
          ]),
          f("div", $y, [
            f("div", Dy, [
              f("div", Ny, E(h(g)("Import data")), 1),
              f("div", Fy, E(h(g)("Load settings from a JSON file")), 1)
            ]),
            f("div", {
              class: "menu_button menu_button_icon stmp-action-btn",
              onClick: D
            }, [...v[13] || (v[13] = [
              f("i", { class: "fa-solid fa-file-import" }, null, -1)
            ])])
          ]),
          f("div", By, [
            v[15] || (v[15] = f("div", { class: "stmp-about-icon" }, [
              f("i", { class: "fa-solid fa-music" })
            ], -1)),
            v[16] || (v[16] = f("div", { class: "stmp-about-name" }, "晓乐", -1)),
            f("div", Uy, E(h(g)("Version")) + " " + E(h(Q)), 1),
            f("div", jy, E(h(g)("A scene-aware music player extension for SillyTavern")), 1),
            f("a", {
              href: Hy,
              target: "_blank",
              rel: "noopener",
              class: "stmp-about-link"
            }, [...v[14] || (v[14] = [
              f("i", { class: "fa-brands fa-github" }, null, -1),
              f("span", null, "GitHub", -1)
            ])]),
            v[17] || (v[17] = f("div", { class: "stmp-about-copyright" }, [
              f("a", {
                href: "https://www.erocraft.com",
                target: "_blank",
                rel: "noopener"
              }, "艾萝工坊"),
              ls(" © 2015 - 2026")
            ], -1))
          ])
        ], 512), [
          [hn, n.value === "general"]
        ])
      ])
    ]));
  }
}), Wy = /* @__PURE__ */ Ht(Vy, [["__scopeId", "data-v-b12a7a0f"]]), Qo = [
  {
    name: "xiaoyueCurrentSong",
    description: "Name of the currently loaded track. Empty if no track is loaded.",
    fn: () => {
      try {
        return Oe().currentTrack?.name ?? "";
      } catch {
        return "";
      }
    }
  },
  {
    name: "xiaoyueCurrentArtist",
    description: "Artist of the currently loaded track. Empty if no track is loaded.",
    fn: () => {
      try {
        return Oe().currentTrack?.artist ?? "";
      } catch {
        return "";
      }
    }
  },
  {
    name: "xiaoyueIsPlaying",
    description: 'Whether audio is currently playing. Returns "true" or "false".',
    fn: () => {
      try {
        return String(Oe().isPlaying);
      } catch {
        return "false";
      }
    }
  },
  {
    name: "xiaoyueHasTrack",
    description: 'Whether a track is loaded. Returns "true" or "false".',
    fn: () => {
      try {
        return String(!!Oe().currentTrack);
      } catch {
        return "false";
      }
    }
  },
  {
    name: "xiaoyueRecentPlayed",
    description: "Comma-separated list of recently played songs (up to 5). Empty if no history.",
    fn: () => {
      try {
        return _l(5).join(", ");
      } catch {
        return "";
      }
    }
  }
];
function zy() {
  const e = SillyTavern.getContext(), t = e.macros, s = e.MacrosParser;
  if (!t?.register && !s?.registerMacro) {
    z.warn("Macros API not available, skipping registration");
    return;
  }
  for (const n of Qo)
    t?.register ? t.register(n.name, {
      category: "misc",
      description: n.description,
      handler: n.fn
    }) : s?.registerMacro && s.registerMacro(n.name, n.fn, n.description);
  z.info("Macros registered:", Qo.map((n) => n.name).join(", "));
}
function Gy() {
  const e = SillyTavern.getContext(), t = e.macros, s = e.MacrosParser;
  for (const n of Qo)
    t?.registry?.unregisterMacro ? t.registry.unregisterMacro(n.name) : s?.unregisterMacro && s.unregisterMacro(n.name);
  z.info("Macros unregistered");
}
const xt = "xy", He = "晓乐", Ks = [];
function xo(e) {
  return e == null ? "" : typeof e == "string" ? e : Array.isArray(e) ? e.map(String).join(" ").trim() : String(e);
}
function Ky() {
  const e = SillyTavern.getContext(), { SlashCommandParser: t, SlashCommand: s } = e, n = (o) => {
    const i = s.fromProps(o);
    if (t.addCommandObject(i), typeof o.name == "string" && Ks.push(o.name), Array.isArray(o.aliases))
      for (const r of o.aliases) Ks.push(String(r));
  };
  n({
    name: `${xt}play`,
    aliases: [`${xt}p`],
    helpString: "Toggle play/pause. With a song name argument, searches and plays it immediately.",
    callback: async (o, i) => {
      const r = xo(i).trim(), a = Oe();
      if (!r)
        return await a.togglePlay(), typeof toastr < "u" && toastr.success(a.isPlaying ? g("Now playing") : g("Paused"), He), "";
      const l = me(), c = l.neteaseStatus;
      if (c !== "ok") {
        if (typeof toastr < "u") {
          const w = g(c === "no-cookie" ? "Cookie not configured" : c === "expired" ? "Cookie expired" : "Cookie invalid");
          toastr.warning(w, He);
        }
        return "";
      }
      const p = await fs(l.settings).searchAndResolve(r);
      return p ? (p.name = r, await a.loadAndPlay(p), typeof toastr < "u" && toastr.success(`${g("Now playing")}：${p.name}`, He)) : typeof toastr < "u" && toastr.warning(`${g("Cannot play")}：${r}`, He), "";
    }
  }), n({
    name: `${xt}next`,
    aliases: [`${xt}n`],
    helpString: "Skip to the next track.",
    callback: async () => {
      const o = rt();
      o.next();
      const i = o.current;
      return i && typeof toastr < "u" && toastr.success(`${g("Now playing")}：${i.song}`, He), "";
    }
  }), n({
    name: `${xt}prev`,
    aliases: [`${xt}pp`],
    helpString: "Go back to the previous track.",
    callback: async () => {
      const o = rt();
      o.prev();
      const i = o.current;
      return i && typeof toastr < "u" && toastr.success(`${g("Now playing")}：${i.song}`, He), "";
    }
  }), n({
    name: `${xt}vol`,
    helpString: "Get or set the player volume (0-100). No argument shows the current volume.",
    callback: async (o, i) => {
      const r = xo(i).trim(), a = Oe();
      if (!r)
        return String(a.volume);
      const l = parseInt(r, 10);
      return Number.isNaN(l) || l < 0 || l > 100 ? (typeof toastr < "u" && toastr.warning(g("Volume must be 0-100"), He), "") : (a.setVolume(l), me().setVolume(l), typeof toastr < "u" && toastr.success(`${g("Volume set to")} ${l}`, He), "");
    }
  }), n({
    name: `${xt}add`,
    helpString: "Search for a song and add it to the playlist.",
    callback: async (o, i) => {
      const r = xo(i).trim();
      if (!r)
        return typeof toastr < "u" && toastr.warning(g("Enter song name"), He), "";
      const a = me(), l = a.neteaseStatus;
      if (l !== "ok") {
        if (typeof toastr < "u") {
          const p = g(l === "no-cookie" ? "Cookie not configured" : l === "expired" ? "Cookie expired" : "Cookie invalid");
          toastr.warning(p, He);
        }
        return "";
      }
      const u = await fs(a.settings).searchAll(r);
      return u.length === 0 ? (typeof toastr < "u" && toastr.info(g("No results"), He), "") : (rt().addFromSearch(u[0], !1), typeof toastr < "u" && toastr.success(`${g("Added to playlist")}：${u[0].name} - ${u[0].artist}`, He), "");
    }
  }), n({
    name: `${xt}bgm`,
    helpString: "Manually trigger AI BGM analysis for the current conversation.",
    callback: async () => {
      const o = Cn();
      if (!o)
        return typeof toastr < "u" && toastr.warning(g("AI BGM off"), He), "";
      const i = me();
      return !i.settings.aiApiUrl || !i.settings.aiModel ? (typeof toastr < "u" && toastr.warning(g("AI not configured"), He), "") : (typeof toastr < "u" && toastr.info(g("AI analyzing"), He), await o.manualTrigger(), "");
    }
  }), n({
    name: `${xt}now`,
    helpString: "Show information about the currently playing track.",
    callback: async () => {
      const i = Oe().currentTrack;
      if (!i)
        return typeof toastr < "u" && toastr.info(g("No Song"), He), "";
      const r = i.artist ? ` - ${i.artist}` : "";
      return typeof toastr < "u" && toastr.info(`${g("Now playing track")}：${i.name}${r}`, He), `${i.name}${r}`;
    }
  }), z.info("Slash commands registered: " + Ks.join(", "));
}
function Yy() {
  const e = SillyTavern.getContext(), { SlashCommandParser: t } = e;
  if (t?.commands) {
    for (const s of Ks)
      s in t.commands && delete t.commands[s];
    Ks.length = 0, z.info("Slash commands unregistered");
  }
}
let ks = null, Ys = null, Js = null, xs = null, Vn = null, Wn = null;
const Jy = `
<div class="inline-drawer">
  <div class="inline-drawer-toggle inline-drawer-header">
    <b data-i18n="晓乐">晓乐</b>
    <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
  </div>
  <div class="inline-drawer-content stmp-ext-settings-content">
    <div id="stmp-settings-mount"></div>
  </div>
</div>
`;
function qy() {
  const e = $("#extensions_settings2");
  if (!e || !e.length) {
    z.warn("Settings container #extensions_settings2 not found");
    return;
  }
  if (e.append(Jy), Js = e.children(".inline-drawer").last()[0] ?? null, !Js) return;
  const t = Js.querySelector("#stmp-settings-mount");
  t && Vn && (xs = Ka(Wy), xs.use(Vn), xs.mount(t));
}
function Xy() {
  xs && (xs.unmount(), xs = null), Js?.remove(), Js = null;
}
async function ev() {
  try {
    const e = document.createElement("div");
    e.id = "st-little-player-root", document.body.appendChild(e);
    const t = xf();
    Vn = t, ks = Ka(qp), ks.use(t), ks.mount(e);
    const s = me(), n = fh();
    s.init(n);
    const o = Oe();
    o.init(), o.setVolume(s.settings.volume), rt().init(), qy();
    const r = SillyTavern.getContext();
    Ys = () => {
      zy(), Ky(), Wn = new $h(), Wn.init();
    }, r.eventSource.on(r.event_types.APP_READY, Ys), z.info("Player loaded");
  } catch (e) {
    z.error("Init failed:", e);
  }
}
function Zy() {
  if (z.info("Player destroyed"), Ys) {
    try {
      const t = SillyTavern.getContext();
      t.eventSource.removeListener(t.event_types.APP_READY, Ys);
    } catch {
    }
    Ys = null;
  }
  if (Gy(), Yy(), Wn?.destroy(), Wn = null, ks) {
    try {
      Oe().destroy();
    } catch {
    }
    ks.unmount(), ks = null;
  }
  const e = document.getElementById("st-little-player-root");
  e && e.remove(), Xy(), Vn = null;
}
function tv() {
  Zy();
}
async function sv() {
  try {
    const e = SillyTavern.getContext(), t = e.extensionSettings[`${$t}-playlist`];
    if (t && typeof t == "object") {
      const n = t.server;
      if (Array.isArray(n)) {
        const o = n.map((i) => i?.serverPath).filter((i) => !!i);
        await Promise.all(o.map((i) => gl(i).catch((r) => {
          z.warn("Clean: failed to delete file:", i, r);
        })));
      }
    }
    delete e.extensionSettings[$t], delete e.extensionSettings[`${$t}-playlist`], e.saveSettingsDebounced();
    const s = e.chatMetadata;
    s && typeof s == "object" && (delete s[yi], delete s.stmp_cursor, await e.saveMetadata()), typeof toastr < "u" && toastr.success("Data cleaned", "晓乐");
  } catch (e) {
    z.error("Clean: failed to delete settings:", e);
  }
}
export {
  sv as clean,
  Zy as destroy,
  tv as disable,
  ev as init
};
