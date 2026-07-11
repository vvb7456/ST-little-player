var Ul = Object.defineProperty;
var Bl = (e, t, s) => t in e ? Ul(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var oe = (e, t, s) => Bl(e, typeof t != "symbol" ? t + "" : t, s);
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
const Ae = {}, _s = [], Mt = () => {
}, Rr = () => !1, zn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Gn = (e) => e.startsWith("onUpdate:"), Fe = Object.assign, ti = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Hl = Object.prototype.hasOwnProperty, we = (e, t) => Hl.call(e, t), te = Array.isArray, ws = (e) => on(e) === "[object Map]", Or = (e) => on(e) === "[object Set]", xi = (e) => on(e) === "[object Date]", fe = (e) => typeof e == "function", Ee = (e) => typeof e == "string", ut = (e) => typeof e == "symbol", be = (e) => e !== null && typeof e == "object", Lr = (e) => (be(e) || fe(e)) && fe(e.then) && fe(e.catch), $r = Object.prototype.toString, on = (e) => $r.call(e), jl = (e) => on(e).slice(8, -1), Nr = (e) => on(e) === "[object Object]", Kn = (e) => Ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Fs = /* @__PURE__ */ ei(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Yn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Vl = /-\w/g, ht = Yn(
  (e) => e.replace(Vl, (t) => t.slice(1).toUpperCase())
), Wl = /\B([A-Z])/g, Xt = Yn(
  (e) => e.replace(Wl, "-$1").toLowerCase()
), Dr = Yn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ao = Yn(
  (e) => e ? `on${Dr(e)}` : ""
), Tt = (e, t) => !Object.is(e, t), bn = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, Fr = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, si = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, zl = (e) => {
  const t = Ee(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Si;
const Jn = () => Si || (Si = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Yt(e) {
  if (te(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], o = Ee(n) ? Jl(n) : Yt(n);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (Ee(e) || be(e))
    return e;
}
const Gl = /;(?![^(]*\))/g, Kl = /:([^]+)/, Yl = /\/\*[^]*?\*\//g;
function Jl(e) {
  const t = {};
  return e.replace(Yl, "").split(Gl).forEach((s) => {
    if (s) {
      const n = s.split(Kl);
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
const ql = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xl = /* @__PURE__ */ ei(ql);
function Ur(e) {
  return !!e || e === "";
}
function Zl(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = ni(e[n], t[n]);
  return s;
}
function ni(e, t) {
  if (e === t) return !0;
  let s = xi(e), n = xi(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = ut(e), n = ut(t), s || n)
    return e === t;
  if (s = te(e), n = te(t), s || n)
    return s && n ? Zl(e, t) : !1;
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
const Br = (e) => !!(e && e.__v_isRef === !0), E = (e) => Ee(e) ? e : e == null ? "" : te(e) || be(e) && (e.toString === $r || !fe(e.toString)) ? Br(e) ? E(e.value) : JSON.stringify(e, Hr, 2) : String(e), Hr = (e, t) => Br(t) ? Hr(e, t.value) : ws(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, o], i) => (s[lo(n, i) + " =>"] = o, s),
    {}
  )
} : Or(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => lo(s))
} : ut(t) ? lo(t) : be(t) && !te(t) && !Nr(t) ? String(t) : t, lo = (e, t = "") => {
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
let De;
class jr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && De && (De.active ? (this.parent = De, this.index = (De.scopes || (De.scopes = [])).push(
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
      const s = De;
      try {
        return De = this, t();
      } finally {
        De = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = De, De = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (De === this)
        De = this.prevScope;
      else {
        let t = De;
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
function Vr(e) {
  return new jr(e);
}
function Wr() {
  return De;
}
function Ql(e, t = !1) {
  De && De.cleanups.push(e);
}
let Me;
const co = /* @__PURE__ */ new WeakSet();
class zr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, De && (De.active ? De.effects.push(this) : this.flags &= -2);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Kr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ki(this), Yr(this);
    const t = Me, s = gt;
    Me = this, gt = !0;
    try {
      return this.fn();
    } finally {
      Jr(this), Me = t, gt = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ri(t);
      this.deps = this.depsTail = void 0, ki(this), this.onStop && this.onStop(), this.flags &= -2;
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
let Gr = 0, Us, Bs;
function Kr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Bs, Bs = e;
    return;
  }
  e.next = Us, Us = e;
}
function oi() {
  Gr++;
}
function ii() {
  if (--Gr > 0)
    return;
  if (Bs) {
    let t = Bs;
    for (Bs = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; Us; ) {
    let t = Us;
    for (Us = void 0; t; ) {
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
function Yr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Jr(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const o = n.prevDep;
    n.version === -1 ? (n === s && (s = o), ri(n), ec(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = o;
  }
  e.deps = t, e.depsTail = s;
}
function Mo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (qr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function qr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Xs) || (e.globalVersion = Xs, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Mo(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = Me, n = gt;
  Me = e, gt = !0;
  try {
    Yr(e);
    const o = e.fn(e._value);
    (t.version === 0 || Tt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Me = s, gt = n, Jr(e), e.flags &= -3;
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
function ec(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let gt = !0;
const Xr = [];
function Et() {
  Xr.push(gt), gt = !1;
}
function Pt() {
  const e = Xr.pop();
  gt = e === void 0 ? !0 : e;
}
function ki(e) {
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
let Xs = 0;
class tc {
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
      s = this.activeLink = new tc(Me, this), Me.deps ? (s.prevDep = Me.depsTail, Me.depsTail.nextDep = s, Me.depsTail = s) : Me.deps = Me.depsTail = s, Zr(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = Me.depsTail, s.nextDep = void 0, Me.depsTail.nextDep = s, Me.depsTail = s, Me.deps === s && (Me.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, Xs++, this.notify(t);
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
function Zr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Zr(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const An = /* @__PURE__ */ new WeakMap(), us = /* @__PURE__ */ Symbol(
  ""
), Eo = /* @__PURE__ */ Symbol(
  ""
), Zs = /* @__PURE__ */ Symbol(
  ""
);
function Ye(e, t, s) {
  if (gt && Me) {
    let n = An.get(e);
    n || An.set(e, n = /* @__PURE__ */ new Map());
    let o = n.get(s);
    o || (n.set(s, o = new ai()), o.map = n, o.key = s), o.track();
  }
}
function Nt(e, t, s, n, o, i) {
  const r = An.get(e);
  if (!r) {
    Xs++;
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
      r.forEach((p, b) => {
        (b === "length" || b === Zs || !ut(b) && b >= u) && a(p);
      });
    } else
      switch ((s !== void 0 || r.has(void 0)) && a(r.get(s)), c && a(r.get(Zs)), t) {
        case "add":
          l ? c && a(r.get("length")) : (a(r.get(us)), ws(e) && a(r.get(Eo)));
          break;
        case "delete":
          l || (a(r.get(us)), ws(e) && a(r.get(Eo)));
          break;
        case "set":
          ws(e) && a(r.get(us));
          break;
      }
  }
  ii();
}
function sc(e, t) {
  const s = An.get(e);
  return s && s.get(t);
}
function ps(e) {
  const t = /* @__PURE__ */ ve(e);
  return t === e ? t : (Ye(t, "iterate", Zs), /* @__PURE__ */ rt(e) ? t : t.map(yt));
}
function qn(e) {
  return Ye(e = /* @__PURE__ */ ve(e), "iterate", Zs), e;
}
function Ct(e, t) {
  return /* @__PURE__ */ Ut(e) ? ks(/* @__PURE__ */ Ft(e) ? yt(t) : t) : yt(t);
}
const nc = {
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
    return Ms(this, "pop");
  },
  push(...e) {
    return Ms(this, "push", e);
  },
  reduce(e, ...t) {
    return Ci(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ci(this, "reduceRight", e, t);
  },
  shift() {
    return Ms(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return It(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ms(this, "splice", e);
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
    return Ms(this, "unshift", e);
  },
  values() {
    return uo(this, "values", (e) => Ct(this, e));
  }
};
function uo(e, t, s) {
  const n = qn(e), o = n[t]();
  return n !== e && !/* @__PURE__ */ rt(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.done || (i.value = s(i.value)), i;
  }), o;
}
const oc = Array.prototype;
function It(e, t, s, n, o, i) {
  const r = qn(e), a = r !== e && !/* @__PURE__ */ rt(e), l = r[t];
  if (l !== oc[t]) {
    const p = l.apply(e, i);
    return a ? yt(p) : p;
  }
  let c = s;
  r !== e && (a ? c = function(p, b) {
    return s.call(this, Ct(e, p), b, e);
  } : s.length > 2 && (c = function(p, b) {
    return s.call(this, p, b, e);
  }));
  const u = l.call(r, c, n);
  return a && o ? o(u) : u;
}
function Ci(e, t, s, n) {
  const o = qn(e), i = o !== e && !/* @__PURE__ */ rt(e);
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
  Ye(n, "iterate", Zs);
  const o = n[t](...s);
  return (o === -1 || o === !1) && /* @__PURE__ */ Zn(s[0]) ? (s[0] = /* @__PURE__ */ ve(s[0]), n[t](...s)) : o;
}
function Ms(e, t, s = []) {
  Et(), oi();
  const n = (/* @__PURE__ */ ve(e))[t].apply(e, s);
  return ii(), Pt(), n;
}
const ic = /* @__PURE__ */ ei("__proto__,__v_isRef,__isVue"), Qr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ut)
);
function rc(e) {
  ut(e) || (e = String(e));
  const t = /* @__PURE__ */ ve(this);
  return Ye(t, "has", e), t.hasOwnProperty(e);
}
class ea {
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
      return n === (o ? i ? mc : oa : i ? na : sa).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const r = te(t);
    if (!o) {
      let l;
      if (r && (l = nc[s]))
        return l;
      if (s === "hasOwnProperty")
        return rc;
    }
    const a = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Re(t) ? t : n
    );
    if ((ut(s) ? Qr.has(s) : ic(s)) || (o || Ye(t, "get", s), i))
      return a;
    if (/* @__PURE__ */ Re(a)) {
      const l = r && Kn(s) ? a : a.value;
      return o && be(l) ? /* @__PURE__ */ Io(l) : l;
    }
    return be(a) ? o ? /* @__PURE__ */ Io(a) : /* @__PURE__ */ Xn(a) : a;
  }
}
class ta extends ea {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, o) {
    let i = t[s];
    const r = te(t) && Kn(s);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Ut(i);
      if (!/* @__PURE__ */ rt(n) && !/* @__PURE__ */ Ut(n) && (i = /* @__PURE__ */ ve(i), n = /* @__PURE__ */ ve(n)), !r && /* @__PURE__ */ Re(i) && !/* @__PURE__ */ Re(n))
        return c || (i.value = n), !0;
    }
    const a = r ? Number(s) < t.length : we(t, s), l = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ Re(t) ? t : o
    );
    return t === /* @__PURE__ */ ve(o) && l && (a ? Tt(n, i) && Nt(t, "set", s, n) : Nt(t, "add", s, n)), l;
  }
  deleteProperty(t, s) {
    const n = we(t, s);
    t[s];
    const o = Reflect.deleteProperty(t, s);
    return o && n && Nt(t, "delete", s, void 0), o;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!ut(s) || !Qr.has(s)) && Ye(t, "has", s), n;
  }
  ownKeys(t) {
    return Ye(
      t,
      "iterate",
      te(t) ? "length" : us
    ), Reflect.ownKeys(t);
  }
}
class ac extends ea {
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
const lc = /* @__PURE__ */ new ta(), cc = /* @__PURE__ */ new ac(), uc = /* @__PURE__ */ new ta(!0);
const Po = (e) => e, cn = (e) => Reflect.getPrototypeOf(e);
function dc(e, t, s) {
  return function(...n) {
    const o = this.__v_raw, i = /* @__PURE__ */ ve(o), r = ws(i), a = e === "entries" || e === Symbol.iterator && r, l = e === "keys" && r, c = o[e](...n), u = s ? Po : t ? ks : yt;
    return !t && Ye(
      i,
      "iterate",
      l ? Eo : us
    ), Fe(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: p, done: b } = c.next();
          return b ? { value: p, done: b } : {
            value: a ? [u(p[0]), u(p[1])] : u(p),
            done: b
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
      e || (Tt(o, a) && Ye(r, "get", o), Ye(r, "get", a));
      const { has: l } = cn(r), c = t ? Po : e ? ks : yt;
      if (l.call(r, o))
        return c(i.get(o));
      if (l.call(r, a))
        return c(i.get(a));
      i !== r && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Ye(/* @__PURE__ */ ve(o), "iterate", us), o.size;
    },
    has(o) {
      const i = this.__v_raw, r = /* @__PURE__ */ ve(i), a = /* @__PURE__ */ ve(o);
      return e || (Tt(o, a) && Ye(r, "has", o), Ye(r, "has", a)), o === a ? i.has(o) : i.has(o) || i.has(a);
    },
    forEach(o, i) {
      const r = this, a = r.__v_raw, l = /* @__PURE__ */ ve(a), c = t ? Po : e ? ks : yt;
      return !e && Ye(l, "iterate", us), a.forEach((u, p) => o.call(i, c(u), c(p), r));
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
        const i = /* @__PURE__ */ ve(this), r = cn(i), a = /* @__PURE__ */ ve(o), l = !t && !/* @__PURE__ */ rt(o) && !/* @__PURE__ */ Ut(o) ? a : o;
        return r.has.call(i, l) || Tt(o, l) && r.has.call(i, o) || Tt(a, l) && r.has.call(i, a) || (i.add(l), Nt(i, "add", l, l)), this;
      },
      set(o, i) {
        !t && !/* @__PURE__ */ rt(i) && !/* @__PURE__ */ Ut(i) && (i = /* @__PURE__ */ ve(i));
        const r = /* @__PURE__ */ ve(this), { has: a, get: l } = cn(r);
        let c = a.call(r, o);
        c || (o = /* @__PURE__ */ ve(o), c = a.call(r, o));
        const u = l.call(r, o);
        return r.set(o, i), c ? Tt(i, u) && Nt(r, "set", o, i) : Nt(r, "add", o, i), this;
      },
      delete(o) {
        const i = /* @__PURE__ */ ve(this), { has: r, get: a } = cn(i);
        let l = r.call(i, o);
        l || (o = /* @__PURE__ */ ve(o), l = r.call(i, o)), a && a.call(i, o);
        const c = i.delete(o);
        return l && Nt(i, "delete", o, void 0), c;
      },
      clear() {
        const o = /* @__PURE__ */ ve(this), i = o.size !== 0, r = o.clear();
        return i && Nt(
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
    s[o] = dc(o, e, t);
  }), s;
}
function li(e, t) {
  const s = fc(e, t);
  return (n, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? n : Reflect.get(
    we(s, o) && o in n ? s : n,
    o,
    i
  );
}
const pc = {
  get: /* @__PURE__ */ li(!1, !1)
}, hc = {
  get: /* @__PURE__ */ li(!1, !0)
}, gc = {
  get: /* @__PURE__ */ li(!0, !1)
};
const sa = /* @__PURE__ */ new WeakMap(), na = /* @__PURE__ */ new WeakMap(), oa = /* @__PURE__ */ new WeakMap(), mc = /* @__PURE__ */ new WeakMap();
function yc(e) {
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
  return /* @__PURE__ */ Ut(e) ? e : ci(
    e,
    !1,
    lc,
    pc,
    sa
  );
}
// @__NO_SIDE_EFFECTS__
function vc(e) {
  return ci(
    e,
    !1,
    uc,
    hc,
    na
  );
}
// @__NO_SIDE_EFFECTS__
function Io(e) {
  return ci(
    e,
    !0,
    cc,
    gc,
    oa
  );
}
function ci(e, t, s, n, o) {
  if (!be(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const r = yc(jl(e));
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
  return /* @__PURE__ */ Ut(e) ? /* @__PURE__ */ Ft(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function rt(e) {
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
  return !we(e, "__v_skip") && Object.isExtensible(e) && Fr(e, "__v_skip", !0), e;
}
const yt = (e) => be(e) ? /* @__PURE__ */ Xn(e) : e, ks = (e) => be(e) ? /* @__PURE__ */ Io(e) : e;
// @__NO_SIDE_EFFECTS__
function Re(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function me(e) {
  return _c(e, !1);
}
function _c(e, t) {
  return /* @__PURE__ */ Re(e) ? e : new wc(e, t);
}
class wc {
  constructor(t, s) {
    this.dep = new ai(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ ve(t), this._value = s ? t : yt(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ rt(t) || /* @__PURE__ */ Ut(t);
    t = n ? t : /* @__PURE__ */ ve(t), Tt(t, s) && (this._rawValue = t, this._value = n ? t : yt(t), this.dep.trigger());
  }
}
function h(e) {
  return /* @__PURE__ */ Re(e) ? e.value : e;
}
const bc = {
  get: (e, t, s) => t === "__v_raw" ? e : h(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const o = e[t];
    return /* @__PURE__ */ Re(o) && !/* @__PURE__ */ Re(s) ? (o.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function ia(e) {
  return /* @__PURE__ */ Ft(e) ? e : new Proxy(e, bc);
}
// @__NO_SIDE_EFFECTS__
function xc(e) {
  const t = te(e) ? new Array(e.length) : {};
  for (const s in e)
    t[s] = kc(e, s);
  return t;
}
class Sc {
  constructor(t, s, n) {
    this._object = t, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = ut(s) ? s : String(s), this._raw = /* @__PURE__ */ ve(t);
    let o = !0, i = t;
    if (!te(t) || ut(this._key) || !Kn(this._key))
      do
        o = !/* @__PURE__ */ Zn(i) || /* @__PURE__ */ rt(i);
      while (o && (i = i.__v_raw));
    this._shallow = o;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = h(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ Re(this._raw[this._key])) {
      const s = this._object[this._key];
      if (/* @__PURE__ */ Re(s)) {
        s.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return sc(this._raw, this._key);
  }
}
function kc(e, t, s) {
  return new Sc(e, t, s);
}
class Cc {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new ai(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Xs - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Me !== this)
      return Kr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return qr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Ac(e, t, s = !1) {
  let n, o;
  return fe(e) ? n = e : (n = e.get, o = e.set), new Cc(n, o, s);
}
const dn = {}, Tn = /* @__PURE__ */ new WeakMap();
let is;
function Tc(e, t = !1, s = is) {
  if (s) {
    let n = Tn.get(s);
    n || Tn.set(s, n = []), n.push(e);
  }
}
function Mc(e, t, s = Ae) {
  const { immediate: n, deep: o, once: i, scheduler: r, augmentJob: a, call: l } = s, c = (v) => o ? v : /* @__PURE__ */ rt(v) || o === !1 || o === 0 ? Dt(v, 1) : Dt(v);
  let u, p, b, S, T = !1, x = !1;
  if (/* @__PURE__ */ Re(e) ? (p = () => e.value, T = /* @__PURE__ */ rt(e)) : /* @__PURE__ */ Ft(e) ? (p = () => c(e), T = !0) : te(e) ? (x = !0, T = e.some((v) => /* @__PURE__ */ Ft(v) || /* @__PURE__ */ rt(v)), p = () => e.map((v) => {
    if (/* @__PURE__ */ Re(v))
      return v.value;
    if (/* @__PURE__ */ Ft(v))
      return c(v);
    if (fe(v))
      return l ? l(v, 2) : v();
  })) : fe(e) ? t ? p = l ? () => l(e, 2) : e : p = () => {
    if (b) {
      Et();
      try {
        b();
      } finally {
        Pt();
      }
    }
    const v = is;
    is = u;
    try {
      return l ? l(e, 3, [S]) : e(S);
    } finally {
      is = v;
    }
  } : p = Mt, t && o) {
    const v = p, y = o === !0 ? 1 / 0 : o;
    p = () => Dt(v(), y);
  }
  const B = Wr(), Y = () => {
    u.stop(), B && B.active && ti(B.effects, u);
  };
  if (i && t) {
    const v = t;
    t = (...y) => {
      const k = v(...y);
      return Y(), k;
    };
  }
  let H = x ? new Array(e.length).fill(dn) : dn;
  const J = (v) => {
    if (!(!(u.flags & 1) || !u.dirty && !v))
      if (t) {
        const y = u.run();
        if (v || o || T || (x ? y.some((k, w) => Tt(k, H[w])) : Tt(y, H))) {
          b && b();
          const k = is;
          is = u;
          try {
            const w = [
              y,
              // pass undefined as the old value when it's changed for the first time
              H === dn ? void 0 : x && H[0] === dn ? [] : H,
              S
            ];
            H = y, l ? l(t, 3, w) : (
              // @ts-expect-error
              t(...w)
            );
          } finally {
            is = k;
          }
        }
      } else
        u.run();
  };
  return a && a(J), u = new zr(p), u.scheduler = r ? () => r(J, !1) : J, S = (v) => Tc(v, !1, u), b = u.onStop = () => {
    const v = Tn.get(u);
    if (v) {
      if (l)
        l(v, 4);
      else
        for (const y of v) y();
      Tn.delete(u);
    }
  }, t ? n ? J(!0) : H = u.run() : r ? r(J.bind(null, !0), !0) : u.run(), Y.pause = u.pause.bind(u), Y.resume = u.resume.bind(u), Y.stop = Y, Y;
}
function Dt(e, t = 1 / 0, s) {
  if (t <= 0 || !be(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ Re(e))
    Dt(e.value, t, s);
  else if (te(e))
    for (let n = 0; n < e.length; n++)
      Dt(e[n], t, s);
  else if (Or(e) || ws(e))
    e.forEach((n) => {
      Dt(n, t, s);
    });
  else if (Nr(e)) {
    for (const n in e)
      Dt(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Dt(e[n], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function rn(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (o) {
    Qn(o, t, s);
  }
}
function dt(e, t, s, n) {
  if (fe(e)) {
    const o = rn(e, t, s, n);
    return o && Lr(o) && o.catch((i) => {
      Qn(i, t, s);
    }), o;
  }
  if (te(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(dt(e[i], t, s, n));
    return o;
  }
}
function Qn(e, t, s, n = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = t && t.appContext.config || Ae;
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
      Et(), rn(i, null, 10, [
        e,
        l,
        c
      ]), Pt();
      return;
    }
  }
  Ec(e, s, o, n, r);
}
function Ec(e, t, s, n = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const Xe = [];
let kt = -1;
const bs = [];
let Gt = null, ys = 0;
const ra = /* @__PURE__ */ Promise.resolve();
let Mn = null;
function Ke(e) {
  const t = Mn || ra;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Pc(e) {
  let t = kt + 1, s = Xe.length;
  for (; t < s; ) {
    const n = t + s >>> 1, o = Xe[n], i = Qs(o);
    i < e || i === e && o.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function di(e) {
  if (!(e.flags & 1)) {
    const t = Qs(e), s = Xe[Xe.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Qs(s) ? Xe.push(e) : Xe.splice(Pc(t), 0, e), e.flags |= 1, aa();
  }
}
function aa() {
  Mn || (Mn = ra.then(ca));
}
function Ic(e) {
  te(e) ? bs.push(...e) : Gt && e.id === -1 ? Gt.splice(ys + 1, 0, e) : e.flags & 1 || (bs.push(e), e.flags |= 1), aa();
}
function Ai(e, t, s = kt + 1) {
  for (; s < Xe.length; s++) {
    const n = Xe[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      Xe.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function la(e) {
  if (bs.length) {
    const t = [...new Set(bs)].sort(
      (s, n) => Qs(s) - Qs(n)
    );
    if (bs.length = 0, Gt) {
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
const Qs = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ca(e) {
  try {
    for (kt = 0; kt < Xe.length; kt++) {
      const t = Xe[kt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), rn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; kt < Xe.length; kt++) {
      const t = Xe[kt];
      t && (t.flags &= -2);
    }
    kt = -1, Xe.length = 0, la(), Mn = null, (Xe.length || bs.length) && ca();
  }
}
let ct = null, ua = null;
function En(e) {
  const t = ct;
  return ct = e, ua = e && e.type.__scopeId || null, t;
}
function da(e, t = ct, s) {
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
function Os(e, t) {
  if (ct === null)
    return e;
  const s = oo(ct), n = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, r, a, l = Ae] = t[o];
    i && (fe(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Dt(r), n.push({
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
function es(e, t, s, n) {
  const o = e.dirs, i = t && t.dirs;
  for (let r = 0; r < o.length; r++) {
    const a = o[r];
    i && (a.oldValue = i[r].value);
    let l = a.dir[n];
    l && (Et(), dt(l, s, 8, [
      e.el,
      a,
      e,
      t
    ]), Pt());
  }
}
function Rc(e, t) {
  if (Qe) {
    let s = Qe.provides;
    const n = Qe.parent && Qe.parent.provides;
    n === s && (s = Qe.provides = Object.create(n)), s[e] = t;
  }
}
function Hs(e, t, s = !1) {
  const n = gi();
  if (n || ds) {
    let o = ds ? ds._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return s && fe(t) ? t.call(n && n.proxy) : t;
  }
}
function Oc() {
  return !!(gi() || ds);
}
const Lc = /* @__PURE__ */ Symbol.for("v-scx"), $c = () => Hs(Lc);
function Be(e, t, s) {
  return fa(e, t, s);
}
function fa(e, t, s = Ae) {
  const { immediate: n, deep: o, flush: i, once: r } = s, a = Fe({}, s), l = t && n || !t && i !== "post";
  let c;
  if (sn) {
    if (i === "sync") {
      const S = $c();
      c = S.__watcherHandles || (S.__watcherHandles = []);
    } else if (!l) {
      const S = () => {
      };
      return S.stop = Mt, S.resume = Mt, S.pause = Mt, S;
    }
  }
  const u = Qe;
  a.call = (S, T, x) => dt(S, u, T, x);
  let p = !1;
  i === "post" ? a.scheduler = (S) => {
    qe(S, u && u.suspense);
  } : i !== "sync" && (p = !0, a.scheduler = (S, T) => {
    T ? S() : di(S);
  }), a.augmentJob = (S) => {
    t && (S.flags |= 4), p && (S.flags |= 2, u && (S.id = u.uid, S.i = u));
  };
  const b = Mc(e, t, a);
  return sn && (c ? c.push(b) : l && b()), b;
}
function Nc(e, t, s) {
  const n = this.proxy, o = Ee(e) ? e.includes(".") ? pa(n, e) : () => n[e] : e.bind(n, n);
  let i;
  fe(t) ? i = t : (i = t.handler, s = t);
  const r = ln(this), a = fa(o, i.bind(n), s);
  return r(), a;
}
function pa(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let o = 0; o < s.length && n; o++)
      n = n[s[o]];
    return n;
  };
}
const Wt = /* @__PURE__ */ new WeakMap(), ha = /* @__PURE__ */ Symbol("_vte"), ga = (e) => e.__isTeleport, rs = (e) => e && (e.disabled || e.disabled === ""), Dc = (e) => e && (e.defer || e.defer === ""), Ti = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Mi = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ro = (e, t) => {
  const s = e && e.to;
  return Ee(s) ? t ? t(s) : null : s;
}, Fc = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, s, n, o, i, r, a, l, c) {
    const {
      mc: u,
      pc: p,
      pbc: b,
      o: { insert: S, querySelector: T, createText: x, createComment: B, parentNode: Y }
    } = c, H = rs(t.props);
    let { dynamicChildren: J } = t;
    const v = (w, V, P) => {
      w.shapeFlag & 16 && u(
        w.children,
        V,
        P,
        o,
        i,
        r,
        a,
        l
      );
    }, y = (w = t) => {
      const V = rs(w.props), P = w.target = Ro(w.props, T), X = Oo(P, w, x, S);
      P && (r !== "svg" && Ti(P) ? r = "svg" : r !== "mathml" && Mi(P) && (r = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(P), V || (v(w, P, X), Ls(w, !1)));
    }, k = (w) => {
      const V = () => {
        if (Wt.get(w) === V) {
          if (Wt.delete(w), rs(w.props)) {
            const P = Y(w.el) || s;
            v(w, P, w.anchor), Ls(w, !0);
          }
          y(w);
        }
      };
      Wt.set(w, V), qe(V, i);
    };
    if (e == null) {
      const w = t.el = x(""), V = t.anchor = x("");
      if (S(w, s, n), S(V, s, n), Dc(t.props) || i && i.pendingBranch) {
        k(t);
        return;
      }
      H && (v(t, s, V), Ls(t, !0)), y();
    } else {
      t.el = e.el;
      const w = t.anchor = e.anchor, V = Wt.get(e);
      if (V) {
        V.flags |= 8, Wt.delete(e), k(t);
        return;
      }
      t.targetStart = e.targetStart;
      const P = t.target = e.target, X = t.targetAnchor = e.targetAnchor, ie = rs(e.props), I = ie ? s : P, Z = ie ? w : X;
      if (r === "svg" || Ti(P) ? r = "svg" : (r === "mathml" || Mi(P)) && (r = "mathml"), J ? (b(
        e.dynamicChildren,
        J,
        I,
        o,
        i,
        r,
        a
      ), hi(e, t, !0)) : l || p(
        e,
        t,
        I,
        Z,
        o,
        i,
        r,
        a,
        !1
      ), H)
        ie ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : fn(
          t,
          s,
          w,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const re = Ro(t.props, T);
        re && (t.target = re, fn(
          t,
          re,
          null,
          c,
          0
        ));
      } else ie && fn(
        t,
        P,
        X,
        c,
        1
      );
      Ls(t, H);
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
      props: b
    } = e, S = rs(b), T = i || !S, x = Wt.get(e);
    if (x && (x.flags |= 8, Wt.delete(e)), p && (o(c), o(u)), i && o(l), !x && (S || p) && r & 16)
      for (let B = 0; B < a.length; B++) {
        const Y = a[B];
        n(
          Y,
          t,
          s,
          T,
          !!Y.dynamicChildren
        );
      }
  },
  move: fn,
  hydrate: Uc
};
function fn(e, t, s, { o: { insert: n }, m: o }, i = 2) {
  i === 0 && n(e.targetAnchor, t, s);
  const { el: r, anchor: a, shapeFlag: l, children: c, props: u } = e, p = i === 2;
  if (p && n(r, t, s), !Wt.has(e) && (!p || rs(u)) && l & 16)
    for (let b = 0; b < c.length; b++)
      o(
        c[b],
        t,
        s,
        2
      );
  p && n(a, t, s);
}
function Uc(e, t, s, n, o, i, {
  o: { nextSibling: r, parentNode: a, querySelector: l, insert: c, createText: u }
}, p) {
  function b(B, Y) {
    let H = Y;
    for (; H; ) {
      if (H && H.nodeType === 8) {
        if (H.data === "teleport start anchor")
          t.targetStart = H;
        else if (H.data === "teleport anchor") {
          t.targetAnchor = H, B._lpa = t.targetAnchor && r(t.targetAnchor);
          break;
        }
      }
      H = r(H);
    }
  }
  function S(B, Y) {
    Y.anchor = p(
      r(B),
      Y,
      a(B),
      s,
      n,
      o,
      i
    );
  }
  const T = t.target = Ro(
    t.props,
    l
  ), x = rs(t.props);
  if (T) {
    const B = T._lpa || T.firstChild;
    t.shapeFlag & 16 && (x ? (S(e, t), b(T, B), t.targetAnchor || Oo(
      T,
      t,
      u,
      c,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      a(e) === T ? e : null
    )) : (t.anchor = r(e), b(T, B), t.targetAnchor || Oo(T, t, u, c), p(
      B && r(B),
      t,
      T,
      s,
      n,
      o,
      i
    ))), Ls(t, x);
  } else x && t.shapeFlag & 16 && (S(e, t), t.targetStart = e, t.targetAnchor = r(e));
  return t.anchor && r(t.anchor);
}
const ma = Fc;
function Ls(e, t) {
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
  return i[ha] = r, e && (n(i, e, o), n(r, e, o)), r;
}
const lt = /* @__PURE__ */ Symbol("_leaveCb"), Es = /* @__PURE__ */ Symbol("_enterCb");
function Bc() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Cs(() => {
    e.isMounted = !0;
  }), an(() => {
    e.isUnmounting = !0;
  }), e;
}
const at = [Function, Array], ya = {
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
}, va = (e) => {
  const t = e.subTree;
  return t.component ? va(t.component) : t;
}, Hc = {
  name: "BaseTransition",
  props: ya,
  setup(e, { slots: t }) {
    const s = gi(), n = Bc();
    return () => {
      const o = t.default && ba(t.default(), !0), i = o && o.length ? _a(o) : (
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
      l.type !== Ze && en(l, c);
      let u = s.subTree && Ei(s.subTree);
      if (u && u.type !== Ze && !as(u, l) && va(s).type !== Ze) {
        let p = Lo(
          u,
          r,
          n,
          s
        );
        if (en(u, p), a === "out-in" && l.type !== Ze)
          return n.isLeaving = !0, p.afterLeave = () => {
            n.isLeaving = !1, s.job.flags & 8 || s.update(), delete p.afterLeave, u = void 0;
          }, po(i);
        a === "in-out" && l.type !== Ze ? p.delayLeave = (b, S, T) => {
          const x = wa(
            n,
            u
          );
          x[String(u.key)] = u, b[lt] = () => {
            S(), b[lt] = void 0, delete c.delayedLeave, u = void 0;
          }, c.delayedLeave = () => {
            T(), delete c.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return i;
    };
  }
};
function _a(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const s of e)
      if (s.type !== Ze) {
        t = s;
        break;
      }
  }
  return t;
}
const jc = Hc;
function wa(e, t) {
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
    onBeforeLeave: b,
    onLeave: S,
    onAfterLeave: T,
    onLeaveCancelled: x,
    onBeforeAppear: B,
    onAppear: Y,
    onAfterAppear: H,
    onAppearCancelled: J
  } = t, v = String(e.key), y = wa(s, e), k = (P, X) => {
    P && dt(
      P,
      n,
      9,
      X
    );
  }, w = (P, X) => {
    const ie = X[1];
    k(P, X), te(P) ? P.every((I) => I.length <= 1) && ie() : P.length <= 1 && ie();
  }, V = {
    mode: r,
    persisted: a,
    beforeEnter(P) {
      let X = l;
      if (!s.isMounted)
        if (i)
          X = B || l;
        else
          return;
      P[lt] && P[lt](
        !0
        /* cancelled */
      );
      const ie = y[v];
      ie && as(e, ie) && ie.el[lt] && ie.el[lt](), k(X, [P]);
    },
    enter(P) {
      if (y[v] === e) return;
      let X = c, ie = u, I = p;
      if (!s.isMounted)
        if (i)
          X = Y || c, ie = H || u, I = J || p;
        else
          return;
      let Z = !1;
      P[Es] = (_e) => {
        Z || (Z = !0, _e ? k(I, [P]) : k(ie, [P]), V.delayedLeave && V.delayedLeave(), P[Es] = void 0);
      };
      const re = P[Es].bind(null, !1);
      X ? w(X, [P, re]) : re();
    },
    leave(P, X) {
      const ie = String(e.key);
      if (P[Es] && P[Es](
        !0
        /* cancelled */
      ), s.isUnmounting)
        return X();
      k(b, [P]);
      let I = !1;
      P[lt] = (re) => {
        I || (I = !0, X(), re ? k(x, [P]) : k(T, [P]), P[lt] = void 0, y[ie] === e && delete y[ie]);
      };
      const Z = P[lt].bind(null, !1);
      y[ie] = e, S ? w(S, [P, Z]) : Z();
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
    return ga(e.type) && e.children ? _a(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: s } = e;
  if (s) {
    if (t & 16)
      return s[0];
    if (t & 32 && fe(s.default))
      return s.default();
  }
}
function en(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, en(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ba(e, t = !1, s) {
  let n = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    const a = s == null ? r.key : String(s) + String(r.key != null ? r.key : i);
    r.type === ue ? (r.patchFlag & 128 && o++, n = n.concat(
      ba(r.children, t, a)
    )) : (t || r.type !== Ze) && n.push(a != null ? Jt(r, { key: a }) : r);
  }
  if (o > 1)
    for (let i = 0; i < n.length; i++)
      n[i].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function Bt(e, t) {
  return fe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Fe({ name: e.name }, t, { setup: e })
  ) : e;
}
function xa(e) {
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
      (x, B) => js(
        x,
        t && (te(t) ? t[B] : t),
        s,
        n,
        o
      )
    );
    return;
  }
  if (Vs(n) && !o) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && js(e, t, s, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? oo(n.component) : n.el, r = o ? null : i, { i: a, r: l } = e, c = t && t.r, u = a.refs === Ae ? a.refs = {} : a.refs, p = a.setupState, b = /* @__PURE__ */ ve(p), S = p === Ae ? Rr : (x) => Pi(u, x) ? !1 : we(b, x), T = (x, B) => !(B && Pi(u, B));
  if (c != null && c !== l) {
    if (Ii(t), Ee(c))
      u[c] = null, S(c) && (p[c] = null);
    else if (/* @__PURE__ */ Re(c)) {
      const x = t;
      T(c, x.k) && (c.value = null), x.k && (u[x.k] = null);
    }
  }
  if (fe(l)) {
    Et();
    try {
      rn(l, a, 12, [r, u]);
    } finally {
      Pt();
    }
  } else {
    const x = Ee(l), B = /* @__PURE__ */ Re(l);
    if (x || B) {
      const Y = () => {
        if (e.f) {
          const H = x ? S(l) ? p[l] : u[l] : T() || !e.k ? l.value : u[e.k];
          if (o)
            te(H) && ti(H, i);
          else if (te(H))
            H.includes(i) || H.push(i);
          else if (x)
            u[l] = [i], S(l) && (p[l] = u[l]);
          else {
            const J = [i];
            T(l, e.k) && (l.value = J), e.k && (u[e.k] = J);
          }
        } else x ? (u[l] = r, S(l) && (p[l] = r)) : B && (T(l, e.k) && (l.value = r), e.k && (u[e.k] = r));
      };
      if (r) {
        const H = () => {
          Y(), Pn.delete(e);
        };
        H.id = -1, Pn.set(e, H), qe(H, s);
      } else
        Ii(e), Y();
    }
  }
}
function Ii(e) {
  const t = Pn.get(e);
  t && (t.flags |= 8, Pn.delete(e));
}
Jn().requestIdleCallback;
Jn().cancelIdleCallback;
const Vs = (e) => !!e.type.__asyncLoader, eo = (e) => e.type.__isKeepAlive;
function Vc(e, t) {
  Sa(e, "a", t);
}
function Wc(e, t) {
  Sa(e, "da", t);
}
function Sa(e, t, s = Qe) {
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
      eo(o.parent.vnode) && zc(n, t, s, o), o = o.parent;
  }
}
function zc(e, t, s, n) {
  const o = to(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  ka(() => {
    ti(n[t], o);
  }, s);
}
function to(e, t, s = Qe, n = !1) {
  if (s) {
    const o = s[e] || (s[e] = []), i = t.__weh || (t.__weh = (...r) => {
      Et();
      const a = ln(s), l = dt(t, s, e, r);
      return a(), Pt(), l;
    });
    return n ? o.unshift(i) : o.push(i), i;
  }
}
const Ht = (e) => (t, s = Qe) => {
  (!sn || e === "sp") && to(e, (...n) => t(...n), s);
}, Gc = Ht("bm"), Cs = Ht("m"), Kc = Ht(
  "bu"
), Yc = Ht("u"), an = Ht(
  "bum"
), ka = Ht("um"), Jc = Ht(
  "sp"
), qc = Ht("rtg"), Xc = Ht("rtc");
function Zc(e, t = Qe) {
  to("ec", e, t);
}
const Qc = /* @__PURE__ */ Symbol.for("v-ndc");
function nt(e, t, s, n) {
  let o;
  const i = s, r = te(e);
  if (r || Ee(e)) {
    const a = r && /* @__PURE__ */ Ft(e);
    let l = !1, c = !1;
    a && (l = !/* @__PURE__ */ rt(e), c = /* @__PURE__ */ Ut(e), e = qn(e)), o = new Array(e.length);
    for (let u = 0, p = e.length; u < p; u++)
      o[u] = t(
        l ? c ? ks(yt(e[u])) : yt(e[u]) : e[u],
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
const $o = (e) => e ? Va(e) ? oo(e) : $o(e.parent) : null, Ws = (
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
    $options: (e) => Aa(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      di(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ke.bind(e.proxy)),
    $watch: (e) => Nc.bind(e)
  })
), ho = (e, t) => e !== Ae && !e.__isScriptSetup && we(e, t), eu = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: o, props: i, accessCache: r, type: a, appContext: l } = e;
    if (t[0] !== "$") {
      const b = r[t];
      if (b !== void 0)
        switch (b) {
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
        if (o !== Ae && we(o, t))
          return r[t] = 2, o[t];
        if (we(i, t))
          return r[t] = 3, i[t];
        if (s !== Ae && we(s, t))
          return r[t] = 4, s[t];
        No && (r[t] = 0);
      }
    }
    const c = Ws[t];
    let u, p;
    if (c)
      return t === "$attrs" && Ye(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = a.__cssModules) && (u = u[t])
    )
      return u;
    if (s !== Ae && we(s, t))
      return r[t] = 4, s[t];
    if (
      // global properties
      p = l.config.globalProperties, we(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: o, ctx: i } = e;
    return ho(o, t) ? (o[t] = s, !0) : n !== Ae && we(n, t) ? (n[t] = s, !0) : we(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: o, props: i, type: r }
  }, a) {
    let l;
    return !!(s[a] || e !== Ae && a[0] !== "$" && we(e, a) || ho(t, a) || we(i, a) || we(n, a) || we(Ws, a) || we(o.config.globalProperties, a) || (l = r.__cssModules) && l[a]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : we(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function Ri(e) {
  return te(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let No = !0;
function tu(e) {
  const t = Aa(e), s = e.proxy, n = e.ctx;
  No = !1, t.beforeCreate && Oi(t.beforeCreate, e, "bc");
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
    mounted: b,
    beforeUpdate: S,
    updated: T,
    activated: x,
    deactivated: B,
    beforeDestroy: Y,
    beforeUnmount: H,
    destroyed: J,
    unmounted: v,
    render: y,
    renderTracked: k,
    renderTriggered: w,
    errorCaptured: V,
    serverPrefetch: P,
    // public API
    expose: X,
    inheritAttrs: ie,
    // assets
    components: I,
    directives: Z,
    filters: re
  } = t;
  if (c && su(c, n, null), r)
    for (const A in r) {
      const _ = r[A];
      fe(_) && (n[A] = _.bind(s));
    }
  if (o) {
    const A = o.call(s, s);
    be(A) && (e.data = /* @__PURE__ */ Xn(A));
  }
  if (No = !0, i)
    for (const A in i) {
      const _ = i[A], M = fe(_) ? _.bind(s, s) : fe(_.get) ? _.get.bind(s, s) : Mt, ee = !fe(_) && fe(_.set) ? _.set.bind(s) : Mt, ne = Te({
        get: M,
        set: ee
      });
      Object.defineProperty(n, A, {
        enumerable: !0,
        configurable: !0,
        get: () => ne.value,
        set: (ce) => ne.value = ce
      });
    }
  if (a)
    for (const A in a)
      Ca(a[A], n, s, A);
  if (l) {
    const A = fe(l) ? l.call(s) : l;
    Reflect.ownKeys(A).forEach((_) => {
      Rc(_, A[_]);
    });
  }
  u && Oi(u, e, "c");
  function F(A, _) {
    te(_) ? _.forEach((M) => A(M.bind(s))) : _ && A(_.bind(s));
  }
  if (F(Gc, p), F(Cs, b), F(Kc, S), F(Yc, T), F(Vc, x), F(Wc, B), F(Zc, V), F(Xc, k), F(qc, w), F(an, H), F(ka, v), F(Jc, P), te(X))
    if (X.length) {
      const A = e.exposed || (e.exposed = {});
      X.forEach((_) => {
        Object.defineProperty(A, _, {
          get: () => s[_],
          set: (M) => s[_] = M,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  y && e.render === Mt && (e.render = y), ie != null && (e.inheritAttrs = ie), I && (e.components = I), Z && (e.directives = Z), P && xa(e);
}
function su(e, t, s = Mt) {
  te(e) && (e = Do(e));
  for (const n in e) {
    const o = e[n];
    let i;
    be(o) ? "default" in o ? i = Hs(
      o.from || n,
      o.default,
      !0
    ) : i = Hs(o.from || n) : i = Hs(o), /* @__PURE__ */ Re(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    }) : t[n] = i;
  }
}
function Oi(e, t, s) {
  dt(
    te(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function Ca(e, t, s, n) {
  let o = n.includes(".") ? pa(s, n) : () => s[n];
  if (Ee(e)) {
    const i = t[e];
    fe(i) && Be(o, i);
  } else if (fe(e))
    Be(o, e.bind(s));
  else if (be(e))
    if (te(e))
      e.forEach((i) => Ca(i, t, s, n));
    else {
      const i = fe(e.handler) ? e.handler.bind(s) : t[e.handler];
      fe(i) && Be(o, i, e);
    }
}
function Aa(e) {
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
      const a = nu[r] || s && s[r];
      e[r] = a ? a(e[r], t[r]) : t[r];
    }
  return e;
}
const nu = {
  data: Li,
  props: $i,
  emits: $i,
  // objects
  methods: $s,
  computed: $s,
  // lifecycle
  beforeCreate: Je,
  created: Je,
  beforeMount: Je,
  mounted: Je,
  beforeUpdate: Je,
  updated: Je,
  beforeDestroy: Je,
  beforeUnmount: Je,
  destroyed: Je,
  unmounted: Je,
  activated: Je,
  deactivated: Je,
  errorCaptured: Je,
  serverPrefetch: Je,
  // assets
  components: $s,
  directives: $s,
  // watch
  watch: iu,
  // provide / inject
  provide: Li,
  inject: ou
};
function Li(e, t) {
  return t ? e ? function() {
    return Fe(
      fe(e) ? e.call(this, this) : e,
      fe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ou(e, t) {
  return $s(Do(e), Do(t));
}
function Do(e) {
  if (te(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function Je(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function $s(e, t) {
  return e ? Fe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function $i(e, t) {
  return e ? te(e) && te(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Fe(
    /* @__PURE__ */ Object.create(null),
    Ri(e),
    Ri(t ?? {})
  ) : t;
}
function iu(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = Fe(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = Je(e[n], t[n]);
  return s;
}
function Ta() {
  return {
    app: null,
    config: {
      isNativeTag: Rr,
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
let ru = 0;
function au(e, t) {
  return function(n, o = null) {
    fe(n) || (n = Fe({}, n)), o != null && !be(o) && (o = null);
    const i = Ta(), r = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const c = i.app = {
      _uid: ru++,
      _component: n,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: Uu,
      get config() {
        return i.config;
      },
      set config(u) {
      },
      use(u, ...p) {
        return r.has(u) || (u && fe(u.install) ? (r.add(u), u.install(c, ...p)) : fe(u) && (r.add(u), u(c, ...p))), c;
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
      mount(u, p, b) {
        if (!l) {
          const S = c._ceVNode || de(n, o);
          return S.appContext = i, b === !0 ? b = "svg" : b === !1 && (b = void 0), e(S, u, b), l = !0, c._container = u, u.__vue_app__ = c, oo(S.component);
        }
      },
      onUnmount(u) {
        a.push(u);
      },
      unmount() {
        l && (dt(
          a,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, p) {
        return i.provides[u] = p, c;
      },
      runWithContext(u) {
        const p = ds;
        ds = c;
        try {
          return u();
        } finally {
          ds = p;
        }
      }
    };
    return c;
  };
}
let ds = null;
const lu = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ht(t)}Modifiers`] || e[`${Xt(t)}Modifiers`];
function cu(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Ae;
  let o = s;
  const i = t.startsWith("update:"), r = i && lu(n, t.slice(7));
  r && (r.trim && (o = s.map((u) => Ee(u) ? u.trim() : u)), r.number && (o = s.map(si)));
  let a, l = n[a = ao(t)] || // also try camelCase event handler (#2249)
  n[a = ao(ht(t))];
  !l && i && (l = n[a = ao(Xt(t))]), l && dt(
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
    e.emitted[a] = !0, dt(
      c,
      e,
      6,
      o
    );
  }
}
const uu = /* @__PURE__ */ new WeakMap();
function Ma(e, t, s = !1) {
  const n = s ? uu : t.emitsCache, o = n.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let r = {}, a = !1;
  if (!fe(e)) {
    const l = (c) => {
      const u = Ma(c, t, !0);
      u && (a = !0, Fe(r, u));
    };
    !s && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !i && !a ? (be(e) && n.set(e, null), null) : (te(i) ? i.forEach((l) => r[l] = null) : Fe(r, i), be(e) && n.set(e, r), r);
}
function so(e, t) {
  return !e || !zn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), we(e, t[0].toLowerCase() + t.slice(1)) || we(e, Xt(t)) || we(e, t));
}
function Ni(e) {
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
    data: b,
    setupState: S,
    ctx: T,
    inheritAttrs: x
  } = e, B = En(e);
  let Y, H;
  try {
    if (s.shapeFlag & 4) {
      const v = o || n, y = v;
      Y = At(
        c.call(
          y,
          v,
          u,
          p,
          S,
          b,
          T
        )
      ), H = a;
    } else {
      const v = t;
      Y = At(
        v.length > 1 ? v(
          p,
          { attrs: a, slots: r, emit: l }
        ) : v(
          p,
          null
        )
      ), H = t.props ? a : du(a);
    }
  } catch (v) {
    zs.length = 0, Qn(v, e, 1), Y = de(Ze);
  }
  let J = Y;
  if (H && x !== !1) {
    const v = Object.keys(H), { shapeFlag: y } = J;
    v.length && y & 7 && (i && v.some(Gn) && (H = fu(
      H,
      i
    )), J = Jt(J, H, !1, !0));
  }
  return s.dirs && (J = Jt(J, null, !1, !0), J.dirs = J.dirs ? J.dirs.concat(s.dirs) : s.dirs), s.transition && en(J, s.transition), Y = J, En(B), Y;
}
const du = (e) => {
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
function pu(e, t, s) {
  const { props: n, children: o, component: i } = e, { props: r, children: a, patchFlag: l } = t, c = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? Di(n, r, c) : !!r;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let p = 0; p < u.length; p++) {
        const b = u[p];
        if (Ea(r, n, b) && !so(c, b))
          return !0;
      }
    }
  } else
    return (o || a) && (!a || !a.$stable) ? !0 : n === r ? !1 : n ? r ? Di(n, r, c) : !0 : !!r;
  return !1;
}
function Di(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < n.length; o++) {
    const i = n[o];
    if (Ea(t, e, i) && !so(s, i))
      return !0;
  }
  return !1;
}
function Ea(e, t, s) {
  const n = e[s], o = t[s];
  return s === "style" && be(n) && be(o) ? !ni(n, o) : n !== o;
}
function hu({ vnode: e, parent: t, suspense: s }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = n, e = o), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  s && s.activeBranch === e && (s.vnode.el = n);
}
const Pa = {}, Ia = () => Object.create(Pa), Ra = (e) => Object.getPrototypeOf(e) === Pa;
function gu(e, t, s, n = !1) {
  const o = {}, i = Ia();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Oa(e, t, o, i);
  for (const r in e.propsOptions[0])
    r in o || (o[r] = void 0);
  s ? e.props = n ? o : /* @__PURE__ */ vc(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function mu(e, t, s, n) {
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
        let b = u[p];
        if (so(e.emitsOptions, b))
          continue;
        const S = t[b];
        if (l)
          if (we(i, b))
            S !== i[b] && (i[b] = S, c = !0);
          else {
            const T = ht(b);
            o[T] = Fo(
              l,
              a,
              T,
              S,
              e,
              !1
            );
          }
        else
          S !== i[b] && (i[b] = S, c = !0);
      }
    }
  } else {
    Oa(e, t, o, i) && (c = !0);
    let u;
    for (const p in a)
      (!t || // for camelCase
      !we(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Xt(p)) === p || !we(t, u))) && (l ? s && // for camelCase
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
        (!t || !we(t, p)) && (delete i[p], c = !0);
  }
  c && Nt(e.attrs, "set", "");
}
function Oa(e, t, s, n) {
  const [o, i] = e.propsOptions;
  let r = !1, a;
  if (t)
    for (let l in t) {
      if (Fs(l))
        continue;
      const c = t[l];
      let u;
      o && we(o, u = ht(l)) ? !i || !i.includes(u) ? s[u] = c : (a || (a = {}))[u] = c : so(e.emitsOptions, l) || (!(l in n) || c !== n[l]) && (n[l] = c, r = !0);
    }
  if (i) {
    const l = /* @__PURE__ */ ve(s), c = a || Ae;
    for (let u = 0; u < i.length; u++) {
      const p = i[u];
      s[p] = Fo(
        o,
        l,
        p,
        c[p],
        e,
        !we(c, p)
      );
    }
  }
  return r;
}
function Fo(e, t, s, n, o, i) {
  const r = e[s];
  if (r != null) {
    const a = we(r, "default");
    if (a && n === void 0) {
      const l = r.default;
      if (r.type !== Function && !r.skipFactory && fe(l)) {
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
    ] && (n === "" || n === Xt(s)) && (n = !0));
  }
  return n;
}
const yu = /* @__PURE__ */ new WeakMap();
function La(e, t, s = !1) {
  const n = s ? yu : t.propsCache, o = n.get(e);
  if (o)
    return o;
  const i = e.props, r = {}, a = [];
  let l = !1;
  if (!fe(e)) {
    const u = (p) => {
      l = !0;
      const [b, S] = La(p, t, !0);
      Fe(r, b), S && a.push(...S);
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!i && !l)
    return be(e) && n.set(e, _s), _s;
  if (te(i))
    for (let u = 0; u < i.length; u++) {
      const p = ht(i[u]);
      Fi(p) && (r[p] = Ae);
    }
  else if (i)
    for (const u in i) {
      const p = ht(u);
      if (Fi(p)) {
        const b = i[u], S = r[p] = te(b) || fe(b) ? { type: b } : Fe({}, b), T = S.type;
        let x = !1, B = !0;
        if (te(T))
          for (let Y = 0; Y < T.length; ++Y) {
            const H = T[Y], J = fe(H) && H.name;
            if (J === "Boolean") {
              x = !0;
              break;
            } else J === "String" && (B = !1);
          }
        else
          x = fe(T) && T.name === "Boolean";
        S[
          0
          /* shouldCast */
        ] = x, S[
          1
          /* shouldCastTrue */
        ] = B, (x || we(S, "default")) && a.push(p);
      }
    }
  const c = [r, a];
  return be(e) && n.set(e, c), c;
}
function Fi(e) {
  return e[0] !== "$" && !Fs(e);
}
const fi = (e) => e === "_" || e === "_ctx" || e === "$stable", pi = (e) => te(e) ? e.map(At) : [At(e)], vu = (e, t, s) => {
  if (t._n)
    return t;
  const n = da((...o) => pi(t(...o)), s);
  return n._c = !1, n;
}, $a = (e, t, s) => {
  const n = e._ctx;
  for (const o in e) {
    if (fi(o)) continue;
    const i = e[o];
    if (fe(i))
      t[o] = vu(o, i, n);
    else if (i != null) {
      const r = pi(i);
      t[o] = () => r;
    }
  }
}, Na = (e, t) => {
  const s = pi(t);
  e.slots.default = () => s;
}, Da = (e, t, s) => {
  for (const n in t)
    (s || !fi(n)) && (e[n] = t[n]);
}, _u = (e, t, s) => {
  const n = e.slots = Ia();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Da(n, t, s), s && Fr(n, "_", o, !0)) : $a(t, n);
  } else t && Na(e, t);
}, wu = (e, t, s) => {
  const { vnode: n, slots: o } = e;
  let i = !0, r = Ae;
  if (n.shapeFlag & 32) {
    const a = t._;
    a ? s && a === 1 ? i = !1 : Da(o, t, s) : (i = !t.$stable, $a(t, o)), r = t;
  } else t && (Na(e, t), r = { default: 1 });
  if (i)
    for (const a in o)
      !fi(a) && r[a] == null && delete o[a];
}, qe = Cu;
function bu(e) {
  return xu(e);
}
function xu(e, t) {
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
    nextSibling: b,
    setScopeId: S = Mt,
    insertStaticContent: T
  } = e, x = (f, m, C, D = null, N = null, R = null, G = void 0, W = null, j = !!m.dynamicChildren) => {
    if (f === m)
      return;
    f && !as(f, m) && (D = Ue(f), ce(f, N, R, !0), f = null), m.patchFlag === -2 && (j = !1, m.dynamicChildren = null);
    const { type: L, ref: se, shapeFlag: K } = m;
    switch (L) {
      case no:
        B(f, m, C, D);
        break;
      case Ze:
        Y(f, m, C, D);
        break;
      case xn:
        f == null && H(m, C, D, G);
        break;
      case ue:
        I(
          f,
          m,
          C,
          D,
          N,
          R,
          G,
          W,
          j
        );
        break;
      default:
        K & 1 ? y(
          f,
          m,
          C,
          D,
          N,
          R,
          G,
          W,
          j
        ) : K & 6 ? Z(
          f,
          m,
          C,
          D,
          N,
          R,
          G,
          W,
          j
        ) : (K & 64 || K & 128) && L.process(
          f,
          m,
          C,
          D,
          N,
          R,
          G,
          W,
          j,
          Zt
        );
    }
    se != null && N ? js(se, f && f.ref, R, m || f, !m) : se == null && f && f.ref != null && js(f.ref, null, R, f, !0);
  }, B = (f, m, C, D) => {
    if (f == null)
      n(
        m.el = a(m.children),
        C,
        D
      );
    else {
      const N = m.el = f.el;
      m.children !== f.children && c(N, m.children);
    }
  }, Y = (f, m, C, D) => {
    f == null ? n(
      m.el = l(m.children || ""),
      C,
      D
    ) : m.el = f.el;
  }, H = (f, m, C, D) => {
    [f.el, f.anchor] = T(
      f.children,
      m,
      C,
      D,
      f.el,
      f.anchor
    );
  }, J = ({ el: f, anchor: m }, C, D) => {
    let N;
    for (; f && f !== m; )
      N = b(f), n(f, C, D), f = N;
    n(m, C, D);
  }, v = ({ el: f, anchor: m }) => {
    let C;
    for (; f && f !== m; )
      C = b(f), o(f), f = C;
    o(m);
  }, y = (f, m, C, D, N, R, G, W, j) => {
    if (m.type === "svg" ? G = "svg" : m.type === "math" && (G = "mathml"), f == null)
      k(
        m,
        C,
        D,
        N,
        R,
        G,
        W,
        j
      );
    else {
      const L = f.el && f.el._isVueCE ? f.el : null;
      try {
        L && L._beginPatch(), P(
          f,
          m,
          N,
          R,
          G,
          W,
          j
        );
      } finally {
        L && L._endPatch();
      }
    }
  }, k = (f, m, C, D, N, R, G, W) => {
    let j, L;
    const { props: se, shapeFlag: K, transition: Q, dirs: le } = f;
    if (j = f.el = r(
      f.type,
      R,
      se && se.is,
      se
    ), K & 8 ? u(j, f.children) : K & 16 && V(
      f.children,
      j,
      null,
      D,
      N,
      go(f, R),
      G,
      W
    ), le && es(f, null, D, "created"), w(j, f, f.scopeId, G, D), se) {
      for (const ke in se)
        ke !== "value" && !Fs(ke) && i(j, ke, null, se[ke], R, D);
      "value" in se && i(j, "value", null, se.value, R), (L = se.onVnodeBeforeMount) && bt(L, D, f);
    }
    le && es(f, null, D, "beforeMount");
    const ye = Su(N, Q);
    ye && Q.beforeEnter(j), n(j, m, C), ((L = se && se.onVnodeMounted) || ye || le) && qe(() => {
      try {
        L && bt(L, D, f), ye && Q.enter(j), le && es(f, null, D, "mounted");
      } finally {
      }
    }, N);
  }, w = (f, m, C, D, N) => {
    if (C && S(f, C), D)
      for (let R = 0; R < D.length; R++)
        S(f, D[R]);
    if (N) {
      let R = N.subTree;
      if (m === R || Ba(R.type) && (R.ssContent === m || R.ssFallback === m)) {
        const G = N.vnode;
        w(
          f,
          G,
          G.scopeId,
          G.slotScopeIds,
          N.parent
        );
      }
    }
  }, V = (f, m, C, D, N, R, G, W, j = 0) => {
    for (let L = j; L < f.length; L++) {
      const se = f[L] = W ? Lt(f[L]) : At(f[L]);
      x(
        null,
        se,
        m,
        C,
        D,
        N,
        R,
        G,
        W
      );
    }
  }, P = (f, m, C, D, N, R, G) => {
    const W = m.el = f.el;
    let { patchFlag: j, dynamicChildren: L, dirs: se } = m;
    j |= f.patchFlag & 16;
    const K = f.props || Ae, Q = m.props || Ae;
    let le;
    if (C && ts(C, !1), (le = Q.onVnodeBeforeUpdate) && bt(le, C, m, f), se && es(m, f, C, "beforeUpdate"), C && ts(C, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    L && (!f.dynamicChildren || f.dynamicChildren.length !== L.length) && (j = 0, G = !1, L = null), (K.innerHTML && Q.innerHTML == null || K.textContent && Q.textContent == null) && u(W, ""), L ? X(
      f.dynamicChildren,
      L,
      W,
      C,
      D,
      go(m, N),
      R
    ) : G || _(
      f,
      m,
      W,
      null,
      C,
      D,
      go(m, N),
      R,
      !1
    ), j > 0) {
      if (j & 16)
        ie(W, K, Q, C, N);
      else if (j & 2 && K.class !== Q.class && i(W, "class", null, Q.class, N), j & 4 && i(W, "style", K.style, Q.style, N), j & 8) {
        const ye = m.dynamicProps;
        for (let ke = 0; ke < ye.length; ke++) {
          const Se = ye[ke], $e = K[Se], He = Q[Se];
          (He !== $e || Se === "value") && i(W, Se, $e, He, N, C);
        }
      }
      j & 1 && f.children !== m.children && u(W, m.children);
    } else !G && L == null && ie(W, K, Q, C, N);
    ((le = Q.onVnodeUpdated) || se) && qe(() => {
      le && bt(le, C, m, f), se && es(m, f, C, "updated");
    }, D);
  }, X = (f, m, C, D, N, R, G) => {
    for (let W = 0; W < m.length; W++) {
      const j = f[W], L = m[W], se = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        j.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (j.type === ue || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !as(j, L) || // - In the case of a component, it could contain anything.
        j.shapeFlag & 198) ? p(j.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          C
        )
      );
      x(
        j,
        L,
        se,
        null,
        D,
        N,
        R,
        G,
        !0
      );
    }
  }, ie = (f, m, C, D, N) => {
    if (m !== C) {
      if (m !== Ae)
        for (const R in m)
          !Fs(R) && !(R in C) && i(
            f,
            R,
            m[R],
            null,
            N,
            D
          );
      for (const R in C) {
        if (Fs(R)) continue;
        const G = C[R], W = m[R];
        G !== W && R !== "value" && i(f, R, W, G, N, D);
      }
      "value" in C && i(f, "value", m.value, C.value, N);
    }
  }, I = (f, m, C, D, N, R, G, W, j) => {
    const L = m.el = f ? f.el : a(""), se = m.anchor = f ? f.anchor : a("");
    let { patchFlag: K, dynamicChildren: Q, slotScopeIds: le } = m;
    le && (W = W ? W.concat(le) : le), f == null ? (n(L, C, D), n(se, C, D), V(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      C,
      se,
      N,
      R,
      G,
      W,
      j
    )) : K > 0 && K & 64 && Q && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === Q.length ? (X(
      f.dynamicChildren,
      Q,
      C,
      N,
      R,
      G,
      W
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (m.key != null || N && m === N.subTree) && hi(
      f,
      m,
      !0
      /* shallow */
    )) : _(
      f,
      m,
      C,
      se,
      N,
      R,
      G,
      W,
      j
    );
  }, Z = (f, m, C, D, N, R, G, W, j) => {
    m.slotScopeIds = W, f == null ? m.shapeFlag & 512 ? N.ctx.activate(
      m,
      C,
      D,
      G,
      j
    ) : re(
      m,
      C,
      D,
      N,
      R,
      G,
      j
    ) : _e(f, m, j);
  }, re = (f, m, C, D, N, R, G) => {
    const W = f.component = Ru(
      f,
      D,
      N
    );
    if (eo(f) && (W.ctx.renderer = Zt), Ou(W, !1, G), W.asyncDep) {
      if (N && N.registerDep(W, F, G), !f.el) {
        const j = W.subTree = de(Ze);
        Y(null, j, m, C), f.placeholder = j.el;
      }
    } else
      F(
        W,
        f,
        m,
        C,
        N,
        R,
        G
      );
  }, _e = (f, m, C) => {
    const D = m.component = f.component;
    if (pu(f, m, C))
      if (D.asyncDep && !D.asyncResolved) {
        A(D, m, C);
        return;
      } else
        D.next = m, D.update();
    else
      m.el = f.el, D.vnode = m;
  }, F = (f, m, C, D, N, R, G) => {
    const W = () => {
      if (f.isMounted) {
        let { next: K, bu: Q, u: le, parent: ye, vnode: ke } = f;
        {
          const _t = Fa(f);
          if (_t) {
            K && (K.el = ke.el, A(f, K, G)), _t.asyncDep.then(() => {
              qe(() => {
                f.isUnmounted || L();
              }, N);
            });
            return;
          }
        }
        let Se = K, $e;
        ts(f, !1), K ? (K.el = ke.el, A(f, K, G)) : K = ke, Q && bn(Q), ($e = K.props && K.props.onVnodeBeforeUpdate) && bt($e, ye, K, ke), ts(f, !0);
        const He = Ni(f), vt = f.subTree;
        f.subTree = He, x(
          vt,
          He,
          // parent may have changed if it's in a teleport
          p(vt.el),
          // anchor may have changed if it's in a fragment
          Ue(vt),
          f,
          N,
          R
        ), K.el = He.el, Se === null && hu(f, He.el), le && qe(le, N), ($e = K.props && K.props.onVnodeUpdated) && qe(
          () => bt($e, ye, K, ke),
          N
        );
      } else {
        let K;
        const { el: Q, props: le } = m, { bm: ye, m: ke, parent: Se, root: $e, type: He } = f, vt = Vs(m);
        ts(f, !1), ye && bn(ye), !vt && (K = le && le.onVnodeBeforeMount) && bt(K, Se, m), ts(f, !0);
        {
          $e.ce && $e.ce._hasShadowRoot() && $e.ce._injectChildStyle(
            He,
            f.parent ? f.parent.type : void 0
          );
          const _t = f.subTree = Ni(f);
          x(
            null,
            _t,
            C,
            D,
            f,
            N,
            R
          ), m.el = _t.el;
        }
        if (ke && qe(ke, N), !vt && (K = le && le.onVnodeMounted)) {
          const _t = m;
          qe(
            () => bt(K, Se, _t),
            N
          );
        }
        (m.shapeFlag & 256 || Se && Vs(Se.vnode) && Se.vnode.shapeFlag & 256) && f.a && qe(f.a, N), f.isMounted = !0, m = C = D = null;
      }
    };
    f.scope.on();
    const j = f.effect = new zr(W);
    f.scope.off();
    const L = f.update = j.run.bind(j), se = f.job = j.runIfDirty.bind(j);
    se.i = f, se.id = f.uid, j.scheduler = () => di(se), ts(f, !0), L();
  }, A = (f, m, C) => {
    m.component = f;
    const D = f.vnode.props;
    f.vnode = m, f.next = null, mu(f, m.props, D, C), wu(f, m.children, C), Et(), Ai(f), Pt();
  }, _ = (f, m, C, D, N, R, G, W, j = !1) => {
    const L = f && f.children, se = f ? f.shapeFlag : 0, K = m.children, { patchFlag: Q, shapeFlag: le } = m;
    if (Q > 0) {
      if (Q & 128) {
        ee(
          L,
          K,
          C,
          D,
          N,
          R,
          G,
          W,
          j
        );
        return;
      } else if (Q & 256) {
        M(
          L,
          K,
          C,
          D,
          N,
          R,
          G,
          W,
          j
        );
        return;
      }
    }
    le & 8 ? (se & 16 && xe(L, N, R), K !== L && u(C, K)) : se & 16 ? le & 16 ? ee(
      L,
      K,
      C,
      D,
      N,
      R,
      G,
      W,
      j
    ) : xe(L, N, R, !0) : (se & 8 && u(C, ""), le & 16 && V(
      K,
      C,
      D,
      N,
      R,
      G,
      W,
      j
    ));
  }, M = (f, m, C, D, N, R, G, W, j) => {
    f = f || _s, m = m || _s;
    const L = f.length, se = m.length, K = Math.min(L, se);
    let Q;
    for (Q = 0; Q < K; Q++) {
      const le = m[Q] = j ? Lt(m[Q]) : At(m[Q]);
      x(
        f[Q],
        le,
        C,
        null,
        N,
        R,
        G,
        W,
        j
      );
    }
    L > se ? xe(
      f,
      N,
      R,
      !0,
      !1,
      K
    ) : V(
      m,
      C,
      D,
      N,
      R,
      G,
      W,
      j,
      K
    );
  }, ee = (f, m, C, D, N, R, G, W, j) => {
    let L = 0;
    const se = m.length;
    let K = f.length - 1, Q = se - 1;
    for (; L <= K && L <= Q; ) {
      const le = f[L], ye = m[L] = j ? Lt(m[L]) : At(m[L]);
      if (as(le, ye))
        x(
          le,
          ye,
          C,
          null,
          N,
          R,
          G,
          W,
          j
        );
      else
        break;
      L++;
    }
    for (; L <= K && L <= Q; ) {
      const le = f[K], ye = m[Q] = j ? Lt(m[Q]) : At(m[Q]);
      if (as(le, ye))
        x(
          le,
          ye,
          C,
          null,
          N,
          R,
          G,
          W,
          j
        );
      else
        break;
      K--, Q--;
    }
    if (L > K) {
      if (L <= Q) {
        const le = Q + 1, ye = le < se ? m[le].el : D;
        for (; L <= Q; )
          x(
            null,
            m[L] = j ? Lt(m[L]) : At(m[L]),
            C,
            ye,
            N,
            R,
            G,
            W,
            j
          ), L++;
      }
    } else if (L > Q)
      for (; L <= K; )
        ce(f[L], N, R, !0), L++;
    else {
      const le = L, ye = L, ke = /* @__PURE__ */ new Map();
      for (L = ye; L <= Q; L++) {
        const ot = m[L] = j ? Lt(m[L]) : At(m[L]);
        ot.key != null && ke.set(ot.key, L);
      }
      let Se, $e = 0;
      const He = Q - ye + 1;
      let vt = !1, _t = 0;
      const Ts = new Array(He);
      for (L = 0; L < He; L++) Ts[L] = 0;
      for (L = le; L <= K; L++) {
        const ot = f[L];
        if ($e >= He) {
          ce(ot, N, R, !0);
          continue;
        }
        let wt;
        if (ot.key != null)
          wt = ke.get(ot.key);
        else
          for (Se = ye; Se <= Q; Se++)
            if (Ts[Se - ye] === 0 && as(ot, m[Se])) {
              wt = Se;
              break;
            }
        wt === void 0 ? ce(ot, N, R, !0) : (Ts[wt - ye] = L + 1, wt >= _t ? _t = wt : vt = !0, x(
          ot,
          m[wt],
          C,
          null,
          N,
          R,
          G,
          W,
          j
        ), $e++);
      }
      const _i = vt ? ku(Ts) : _s;
      for (Se = _i.length - 1, L = He - 1; L >= 0; L--) {
        const ot = ye + L, wt = m[ot], wi = m[ot + 1], bi = ot + 1 < se ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          wi.el || Ua(wi)
        ) : D;
        Ts[L] === 0 ? x(
          null,
          wt,
          C,
          bi,
          N,
          R,
          G,
          W,
          j
        ) : vt && (Se < 0 || L !== _i[Se] ? ne(wt, C, bi, 2) : Se--);
      }
    }
  }, ne = (f, m, C, D, N = null) => {
    const { el: R, type: G, transition: W, children: j, shapeFlag: L } = f;
    if (L & 6) {
      ne(f.component.subTree, m, C, D);
      return;
    }
    if (L & 128) {
      f.suspense.move(m, C, D);
      return;
    }
    if (L & 64) {
      G.move(f, m, C, Zt);
      return;
    }
    if (G === ue) {
      n(R, m, C);
      for (let K = 0; K < j.length; K++)
        ne(j[K], m, C, D);
      n(f.anchor, m, C);
      return;
    }
    if (G === xn) {
      J(f, m, C);
      return;
    }
    if (D !== 2 && L & 1 && W)
      if (D === 0)
        W.persisted && !R[lt] ? n(R, m, C) : (W.beforeEnter(R), n(R, m, C), qe(() => W.enter(R), N));
      else {
        const { leave: K, delayLeave: Q, afterLeave: le } = W, ye = () => {
          f.ctx.isUnmounted ? o(R) : n(R, m, C);
        }, ke = () => {
          const Se = R._isLeaving || !!R[lt];
          R._isLeaving && R[lt](
            !0
            /* cancelled */
          ), W.persisted && !Se ? ye() : K(R, () => {
            ye(), le && le();
          });
        };
        Q ? Q(R, ye, ke) : ke();
      }
    else
      n(R, m, C);
  }, ce = (f, m, C, D = !1, N = !1) => {
    const {
      type: R,
      props: G,
      ref: W,
      children: j,
      dynamicChildren: L,
      shapeFlag: se,
      patchFlag: K,
      dirs: Q,
      cacheIndex: le,
      memo: ye
    } = f;
    if (K === -2 && (N = !1), W != null && (Et(), js(W, null, C, f, !0), Pt()), le != null && (m.renderCache[le] = void 0), se & 256) {
      m.ctx.deactivate(f);
      return;
    }
    const ke = se & 1 && Q, Se = !Vs(f);
    let $e;
    if (Se && ($e = G && G.onVnodeBeforeUnmount) && bt($e, m, f), se & 6)
      pe(f.component, C, D);
    else {
      if (se & 128) {
        f.suspense.unmount(C, D);
        return;
      }
      ke && es(f, null, m, "beforeUnmount"), se & 64 ? f.type.remove(
        f,
        m,
        C,
        Zt,
        D
      ) : L && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !L.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (R !== ue || K > 0 && K & 64) ? xe(
        L,
        m,
        C,
        !1,
        !0
      ) : (R === ue && K & 384 || !N && se & 16) && xe(j, m, C), D && ae(f);
    }
    const He = ye != null && le == null;
    (Se && ($e = G && G.onVnodeUnmounted) || ke || He) && qe(() => {
      $e && bt($e, m, f), ke && es(f, null, m, "unmounted"), He && (f.el = null);
    }, C);
  }, ae = (f) => {
    const { type: m, el: C, anchor: D, transition: N } = f;
    if (m === ue) {
      Le(C, D);
      return;
    }
    if (m === xn) {
      v(f);
      return;
    }
    const R = () => {
      o(C), N && !N.persisted && N.afterLeave && N.afterLeave();
    };
    if (f.shapeFlag & 1 && N && !N.persisted) {
      const { leave: G, delayLeave: W } = N, j = () => G(C, R);
      W ? W(f.el, R, j) : j();
    } else
      R();
  }, Le = (f, m) => {
    let C;
    for (; f !== m; )
      C = b(f), o(f), f = C;
    o(m);
  }, pe = (f, m, C) => {
    const { bum: D, scope: N, job: R, subTree: G, um: W, m: j, a: L } = f;
    Ui(j), Ui(L), D && bn(D), N.stop(), R && (R.flags |= 8, ce(G, f, m, C)), W && qe(W, m), qe(() => {
      f.isUnmounted = !0;
    }, m);
  }, xe = (f, m, C, D = !1, N = !1, R = 0) => {
    for (let G = R; G < f.length; G++)
      ce(f[G], m, C, D, N);
  }, Ue = (f) => {
    if (f.shapeFlag & 6)
      return Ue(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const m = b(f.anchor || f.el), C = m && m[ha];
    return C ? b(C) : m;
  };
  let Oe = !1;
  const Pe = (f, m, C) => {
    let D;
    f == null ? m._vnode && (ce(m._vnode, null, null, !0), D = m._vnode.component) : x(
      m._vnode || null,
      f,
      m,
      null,
      null,
      null,
      C
    ), m._vnode = f, Oe || (Oe = !0, Ai(D), la(), Oe = !1);
  }, Zt = {
    p: x,
    um: ce,
    m: ne,
    r: ae,
    mt: re,
    mc: V,
    pc: _,
    pbc: X,
    n: Ue,
    o: e
  };
  return {
    render: Pe,
    hydrate: void 0,
    createApp: au(Pe)
  };
}
function go({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function ts({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Su(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function hi(e, t, s = !1) {
  const n = e.children, o = t.children;
  if (te(n) && te(o))
    for (let i = 0; i < n.length; i++) {
      const r = n[i];
      let a = o[i];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[i] = Lt(o[i]), a.el = r.el), !s && a.patchFlag !== -2 && hi(r, a)), a.type === no && (a.patchFlag === -1 && (a = o[i] = Lt(a)), a.el = r.el), a.type === Ze && !a.el && (a.el = r.el);
    }
}
function ku(e) {
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
function Fa(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Fa(t);
}
function Ui(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Ua(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Ua(t.subTree) : null;
}
const Ba = (e) => e.__isSuspense;
function Cu(e, t) {
  t && t.pendingBranch ? te(e) ? t.effects.push(...e) : t.effects.push(e) : Ic(e);
}
const ue = /* @__PURE__ */ Symbol.for("v-fgt"), no = /* @__PURE__ */ Symbol.for("v-txt"), Ze = /* @__PURE__ */ Symbol.for("v-cmt"), xn = /* @__PURE__ */ Symbol.for("v-stc"), zs = [];
let it = null;
function O(e = !1) {
  zs.push(it = e ? null : []);
}
function Au() {
  zs.pop(), it = zs[zs.length - 1] || null;
}
let tn = 1;
function Rn(e, t = !1) {
  tn += e, e < 0 && it && t && (it.hasOnce = !0);
}
function Ha(e) {
  return e.dynamicChildren = tn > 0 ? it || _s : null, Au(), tn > 0 && it && it.push(e), e;
}
function U(e, t, s, n, o, i) {
  return Ha(
    d(
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
  return Ha(
    de(
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
function as(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ja = ({ key: e }) => e ?? null, Sn = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? Ee(e) || /* @__PURE__ */ Re(e) || fe(e) ? { i: ct, r: e, k: t, f: !!s } : e : null);
function d(e, t = null, s = null, n = 0, o = null, i = e === ue ? 0 : 1, r = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ja(t),
    ref: t && Sn(t),
    scopeId: ua,
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
  return a ? (Ln(l, s), i & 128 && e.normalize(l)) : s && (l.shapeFlag |= Ee(s) ? 8 : 16), tn > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  it && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && it.push(l), l;
}
const de = Tu;
function Tu(e, t = null, s = null, n = 0, o = null, i = !1) {
  if ((!e || e === Qc) && (e = Ze), On(e)) {
    const a = Jt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Ln(a, s), tn > 0 && !i && it && (a.shapeFlag & 6 ? it[it.indexOf(e)] = a : it.push(a)), a.patchFlag = -2, a;
  }
  if (Du(e) && (e = e.__vccOpts), t) {
    t = Mu(t);
    let { class: a, style: l } = t;
    a && !Ee(a) && (t.class = he(a)), be(l) && (/* @__PURE__ */ Zn(l) && !te(l) && (l = Fe({}, l)), t.style = Yt(l));
  }
  const r = Ee(e) ? 1 : Ba(e) ? 128 : ga(e) ? 64 : be(e) ? 4 : fe(e) ? 2 : 0;
  return d(
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
function Mu(e) {
  return e ? /* @__PURE__ */ Zn(e) || Ra(e) ? Fe({}, e) : e : null;
}
function Jt(e, t, s = !1, n = !1) {
  const { props: o, ref: i, patchFlag: r, children: a, transition: l } = e, c = t ? Eu(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && ja(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? te(i) ? i.concat(Sn(t)) : [i, Sn(t)] : Sn(t)
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
    patchFlag: t && e.type !== ue ? r === -1 ? 16 : r | 16 : r,
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
  return l && n && en(
    u,
    l.clone(u)
  ), u;
}
function cs(e = " ", t = 0) {
  return de(no, null, e, t);
}
function pn(e, t) {
  const s = de(xn, null, e);
  return s.staticCount = t, s;
}
function Ce(e = "", t = !1) {
  return t ? (O(), mt(Ze, null, e)) : de(Ze, null, e);
}
function At(e) {
  return e == null || typeof e == "boolean" ? de(Ze) : te(e) ? de(
    ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : On(e) ? Lt(e) : de(no, null, String(e));
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
      !o && !Ra(t) ? t._ctx = ct : o === 3 && ct && (ct.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (fe(t)) {
    if (n & 65) {
      Ln(e, { default: t });
      return;
    }
    t = { default: t, _ctx: ct }, s = 32;
  } else
    t = String(t), n & 64 ? (s = 16, t = [cs(t)]) : s = 8;
  e.children = t, e.shapeFlag |= s;
}
function Eu(...e) {
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
function bt(e, t, s, n = null) {
  dt(e, t, 7, [
    s,
    n
  ]);
}
const Pu = Ta();
let Iu = 0;
function Ru(e, t, s) {
  const n = e.type, o = (t ? t.appContext : e.appContext) || Pu, i = {
    uid: Iu++,
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
    propsOptions: La(n, o),
    emitsOptions: Ma(n, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ae,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Ae,
    data: Ae,
    props: Ae,
    attrs: Ae,
    slots: Ae,
    refs: Ae,
    setupState: Ae,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = cu.bind(null, i), e.ce && e.ce(i), i;
}
let Qe = null;
const gi = () => Qe || ct;
let $n, Uo;
{
  const e = Jn(), t = (s, n) => {
    let o;
    return (o = e[s]) || (o = e[s] = []), o.push(n), (i) => {
      o.length > 1 ? o.forEach((r) => r(i)) : o[0](i);
    };
  };
  $n = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => Qe = s
  ), Uo = t(
    "__VUE_SSR_SETTERS__",
    (s) => sn = s
  );
}
const ln = (e) => {
  const t = Qe;
  return $n(e), e.scope.on(), () => {
    e.scope.off(), $n(t);
  };
}, Bi = () => {
  Qe && Qe.scope.off(), $n(null);
};
function Va(e) {
  return e.vnode.shapeFlag & 4;
}
let sn = !1;
function Ou(e, t = !1, s = !1) {
  t && Uo(t);
  const { props: n, children: o } = e.vnode, i = Va(e);
  gu(e, n, i, t), _u(e, o, s || t);
  const r = i ? Lu(e, t) : void 0;
  return t && Uo(!1), r;
}
function Lu(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, eu);
  const { setup: n } = s;
  if (n) {
    Et();
    const o = e.setupContext = n.length > 1 ? Nu(e) : null, i = ln(e), r = rn(
      n,
      e,
      0,
      [
        e.props,
        o
      ]
    ), a = Lr(r);
    if (Pt(), i(), (a || e.sp) && !Vs(e) && xa(e), a) {
      if (r.then(Bi, Bi), t)
        return r.then((l) => {
          Hi(e, l);
        }).catch((l) => {
          Qn(l, e, 0);
        });
      e.asyncDep = r;
    } else
      Hi(e, r);
  } else
    Wa(e);
}
function Hi(e, t, s) {
  fe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : be(t) && (e.setupState = ia(t)), Wa(e);
}
function Wa(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || Mt);
  {
    const o = ln(e);
    Et();
    try {
      tu(e);
    } finally {
      Pt(), o();
    }
  }
}
const $u = {
  get(e, t) {
    return Ye(e, "get", ""), e[t];
  }
};
function Nu(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, $u),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function oo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ia(ui(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in Ws)
        return Ws[s](e);
    },
    has(t, s) {
      return s in t || s in Ws;
    }
  })) : e.proxy;
}
function Du(e) {
  return fe(e) && "__vccOpts" in e;
}
const Te = (e, t) => /* @__PURE__ */ Ac(e, t, sn);
function Fu(e, t, s) {
  try {
    Rn(-1);
    const n = arguments.length;
    return n === 2 ? be(t) && !te(t) ? On(t) ? de(e, null, [t]) : de(e, t) : de(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && On(s) && (s = [s]), de(e, t, s));
  } finally {
    Rn(1);
  }
}
const Uu = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Bo;
const ji = typeof window < "u" && window.trustedTypes;
if (ji)
  try {
    Bo = /* @__PURE__ */ ji.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const za = Bo ? (e) => Bo.createHTML(e) : (e) => e, Bu = "http://www.w3.org/2000/svg", Hu = "http://www.w3.org/1998/Math/MathML", Ot = typeof document < "u" ? document : null, Vi = Ot && /* @__PURE__ */ Ot.createElement("template"), ju = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const o = t === "svg" ? Ot.createElementNS(Bu, e) : t === "mathml" ? Ot.createElementNS(Hu, e) : s ? Ot.createElement(e, { is: s }) : Ot.createElement(e);
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
      Vi.innerHTML = za(
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
}, Vt = "transition", Ps = "animation", nn = /* @__PURE__ */ Symbol("_vtc"), Ga = {
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
}, Vu = /* @__PURE__ */ Fe(
  {},
  ya,
  Ga
), Wu = (e) => (e.displayName = "Transition", e.props = Vu, e), zu = /* @__PURE__ */ Wu(
  (e, { slots: t }) => Fu(jc, Gu(e), t)
), ss = (e, t = []) => {
  te(e) ? e.forEach((s) => s(...t)) : e && e(...t);
}, Wi = (e) => e ? te(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Gu(e) {
  const t = {};
  for (const I in e)
    I in Ga || (t[I] = e[I]);
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
    leaveActiveClass: b = `${s}-leave-active`,
    leaveToClass: S = `${s}-leave-to`
  } = e, T = Ku(o), x = T && T[0], B = T && T[1], {
    onBeforeEnter: Y,
    onEnter: H,
    onEnterCancelled: J,
    onLeave: v,
    onLeaveCancelled: y,
    onBeforeAppear: k = Y,
    onAppear: w = H,
    onAppearCancelled: V = J
  } = t, P = (I, Z, re, _e) => {
    I._enterCancelled = _e, ns(I, Z ? u : a), ns(I, Z ? c : r), re && re();
  }, X = (I, Z) => {
    I._isLeaving = !1, ns(I, p), ns(I, S), ns(I, b), Z && Z();
  }, ie = (I) => (Z, re) => {
    const _e = I ? w : H, F = () => P(Z, I, re);
    ss(_e, [Z, F]), zi(() => {
      ns(Z, I ? l : i), Rt(Z, I ? u : a), Wi(_e) || Gi(Z, n, x, F);
    });
  };
  return Fe(t, {
    onBeforeEnter(I) {
      ss(Y, [I]), Rt(I, i), Rt(I, r);
    },
    onBeforeAppear(I) {
      ss(k, [I]), Rt(I, l), Rt(I, c);
    },
    onEnter: ie(!1),
    onAppear: ie(!0),
    onLeave(I, Z) {
      I._isLeaving = !0;
      const re = () => X(I, Z);
      Rt(I, p), I._enterCancelled ? (Rt(I, b), Ji(I)) : (Ji(I), Rt(I, b)), zi(() => {
        I._isLeaving && (ns(I, p), Rt(I, S), Wi(v) || Gi(I, n, B, re));
      }), ss(v, [I, re]);
    },
    onEnterCancelled(I) {
      P(I, !1, void 0, !0), ss(J, [I]);
    },
    onAppearCancelled(I) {
      P(I, !0, void 0, !0), ss(V, [I]);
    },
    onLeaveCancelled(I) {
      X(I), ss(y, [I]);
    }
  });
}
function Ku(e) {
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
  return zl(e);
}
function Rt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.add(s)), (e[nn] || (e[nn] = /* @__PURE__ */ new Set())).add(t);
}
function ns(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const s = e[nn];
  s && (s.delete(t), s.size || (e[nn] = void 0));
}
function zi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Yu = 0;
function Gi(e, t, s, n) {
  const o = e._endId = ++Yu, i = () => {
    o === e._endId && n();
  };
  if (s != null)
    return setTimeout(i, s);
  const { type: r, timeout: a, propCount: l } = Ju(e, t);
  if (!r)
    return n();
  const c = r + "end";
  let u = 0;
  const p = () => {
    e.removeEventListener(c, b), i();
  }, b = (S) => {
    S.target === e && ++u >= l && p();
  };
  setTimeout(() => {
    u < l && p();
  }, a + 1), e.addEventListener(c, b);
}
function Ju(e, t) {
  const s = window.getComputedStyle(e), n = (T) => (s[T] || "").split(", "), o = n(`${Vt}Delay`), i = n(`${Vt}Duration`), r = Ki(o, i), a = n(`${Ps}Delay`), l = n(`${Ps}Duration`), c = Ki(a, l);
  let u = null, p = 0, b = 0;
  t === Vt ? r > 0 && (u = Vt, p = r, b = i.length) : t === Ps ? c > 0 && (u = Ps, p = c, b = l.length) : (p = Math.max(r, c), u = p > 0 ? r > c ? Vt : Ps : null, b = u ? u === Vt ? i.length : l.length : 0);
  const S = u === Vt && /\b(?:transform|all)(?:,|$)/.test(
    n(`${Vt}Property`).toString()
  );
  return {
    type: u,
    timeout: p,
    propCount: b,
    hasTransform: S
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
function qu(e, t, s) {
  const n = e[nn];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const Nn = /* @__PURE__ */ Symbol("_vod"), Ka = /* @__PURE__ */ Symbol("_vsh"), hn = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: s }) {
    e[Nn] = e.style.display === "none" ? "" : e.style.display, s && t ? s.beforeEnter(e) : Is(e, t);
  },
  mounted(e, { value: t }, { transition: s }) {
    s && t && s.enter(e);
  },
  updated(e, { value: t, oldValue: s }, { transition: n }) {
    !t != !s && (n ? t ? (n.beforeEnter(e), Is(e, !0), n.enter(e)) : n.leave(e, () => {
      Is(e, !1);
    }) : Is(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Is(e, t);
  }
};
function Is(e, t) {
  e.style.display = t ? e[Nn] : "none", e[Ka] = !t;
}
const Xu = /* @__PURE__ */ Symbol(""), Zu = /(?:^|;)\s*display\s*:/;
function Qu(e, t, s) {
  const n = e.style, o = Ee(s);
  let i = !1;
  if (s && !o) {
    if (t)
      if (Ee(t))
        for (const r of t.split(";")) {
          const a = r.slice(0, r.indexOf(":")).trim();
          s[a] == null && Ns(n, a, "");
        }
      else
        for (const r in t)
          s[r] == null && Ns(n, r, "");
    for (const r in s) {
      r === "display" && (i = !0);
      const a = s[r];
      a != null ? td(
        e,
        r,
        !Ee(t) && t ? t[r] : void 0,
        a
      ) || Ns(n, r, a) : Ns(n, r, "");
    }
  } else if (o) {
    if (t !== s) {
      const r = n[Xu];
      r && (s += ";" + r), n.cssText = s, i = Zu.test(s);
    }
  } else t && e.removeAttribute("style");
  Nn in e && (e[Nn] = i ? n.display : "", e[Ka] && (n.display = "none"));
}
const qi = /\s*!important$/;
function Ns(e, t, s) {
  if (te(s))
    s.forEach((n) => Ns(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = ed(e, t);
    qi.test(s) ? e.setProperty(
      Xt(n),
      s.replace(qi, ""),
      "important"
    ) : e[n] = s;
  }
}
const Xi = ["Webkit", "Moz", "ms"], yo = {};
function ed(e, t) {
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
function td(e, t, s, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Ee(n) && s === n;
}
const Zi = "http://www.w3.org/1999/xlink";
function Qi(e, t, s, n, o, i = Xl(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Zi, t.slice(6, t.length)) : e.setAttributeNS(Zi, t, s) : s == null || i && !Ur(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : ut(s) ? String(s) : s
  );
}
function er(e, t, s, n, o) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? za(s) : s);
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
    a === "boolean" ? s = Ur(s) : s == null && a === "string" ? (s = "", r = !0) : a === "number" && (s = 0, r = !0);
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
function sd(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const tr = /* @__PURE__ */ Symbol("_vei");
function nd(e, t, s, n, o = null) {
  const i = e[tr] || (e[tr] = {}), r = i[t];
  if (n && r)
    r.value = n;
  else {
    const [a, l] = rd(t);
    if (n) {
      const c = i[t] = cd(
        n,
        o
      );
      vs(e, a, c, l);
    } else r && (sd(e, a, r, l), i[t] = void 0);
  }
}
const od = /(Once|Passive|Capture)$/, id = /^on:?(?:Once|Passive|Capture)$/;
function rd(e) {
  let t, s;
  for (; (s = e.match(od)) && !id.test(e); )
    t || (t = {}), e = e.slice(0, e.length - s[1].length), t[s[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Xt(e.slice(2)), t];
}
let vo = 0;
const ad = /* @__PURE__ */ Promise.resolve(), ld = () => vo || (ad.then(() => vo = 0), vo = Date.now());
function cd(e, t) {
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
        c && dt(
          c,
          t,
          5,
          a
        );
      }
    } else
      dt(
        o,
        t,
        5,
        [n]
      );
  };
  return s.value = e, s.attached = ld(), s;
}
const sr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ud = (e, t, s, n, o, i) => {
  const r = o === "svg";
  t === "class" ? qu(e, n, r) : t === "style" ? Qu(e, s, n) : zn(t) ? Gn(t) || nd(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : dd(e, t, n, r)) ? (er(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Qi(e, t, n, r, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (fd(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ee(n))) ? er(e, ht(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Qi(e, t, n, r));
};
function dd(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && sr(t) && fe(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return sr(t) && Ee(s) ? !1 : t in e;
}
function fd(e, t) {
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
  return te(t) ? (s) => bn(t, s) : t;
};
function pd(e) {
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
const hd = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, o) {
    e[_o] = nr(o);
    const i = n || o.props && o.props.type === "number";
    vs(e, t ? "change" : "input", (r) => {
      r.target.composing || e[_o](ir(e.value, s, i));
    }), (s || i) && vs(e, "change", () => {
      e.value = ir(e.value, s, i);
    }), t || (vs(e, "compositionstart", pd), vs(e, "compositionend", or), vs(e, "change", or));
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
}, gd = ["ctrl", "shift", "alt", "meta"], md = {
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
  exact: (e, t) => gd.some((s) => e[`${s}Key`] && !t.includes(s))
}, Kt = (e, t) => {
  if (!e) return e;
  const s = e._withMods || (e._withMods = {}), n = t.join(".");
  return s[n] || (s[n] = (o, ...i) => {
    for (let r = 0; r < t.length; r++) {
      const a = md[t[r]];
      if (a && a(o, t)) return;
    }
    return e(o, ...i);
  });
}, yd = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, vd = (e, t) => {
  const s = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return s[n] || (s[n] = (o) => {
    if (!("key" in o))
      return;
    const i = Xt(o.key);
    if (t.some(
      (r) => r === i || yd[r] === i
    ))
      return e(o);
  });
}, _d = /* @__PURE__ */ Fe({ patchProp: ud }, ju);
let rr;
function wd() {
  return rr || (rr = bu(_d));
}
const Ya = (...e) => {
  const t = wd().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const o = xd(n);
    if (!o) return;
    const i = t._component;
    !fe(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const r = s(o, !1, bd(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), r;
  }, t;
};
function bd(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function xd(e) {
  return Ee(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Ja;
const io = (e) => Ja = e, qa = (
  /* istanbul ignore next */
  Symbol()
);
function Ho(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Gs;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Gs || (Gs = {}));
function Sd() {
  const e = Vr(!0), t = e.run(() => /* @__PURE__ */ me({}));
  let s = [], n = [];
  const o = ui({
    install(i) {
      io(o), o._a = i, i.provide(qa, o), i.config.globalProperties.$pinia = o, n.forEach((r) => s.push(r)), n = [];
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
const Xa = () => {
};
function ar(e, t, s, n = Xa) {
  e.push(t);
  const o = () => {
    const i = e.indexOf(t);
    i > -1 && (e.splice(i, 1), n());
  };
  return !s && Wr() && Ql(o), o;
}
function hs(e, ...t) {
  e.slice().forEach((s) => {
    s(...t);
  });
}
const kd = (e) => e(), lr = Symbol(), wo = Symbol();
function jo(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((s, n) => e.set(n, s)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const s in t) {
    if (!t.hasOwnProperty(s))
      continue;
    const n = t[s], o = e[s];
    Ho(o) && Ho(n) && e.hasOwnProperty(s) && !/* @__PURE__ */ Re(n) && !/* @__PURE__ */ Ft(n) ? e[s] = jo(o, n) : e[s] = n;
  }
  return e;
}
const Cd = (
  /* istanbul ignore next */
  Symbol()
);
function Ad(e) {
  return !Ho(e) || !e.hasOwnProperty(Cd);
}
const { assign: zt } = Object;
function Td(e) {
  return !!(/* @__PURE__ */ Re(e) && e.effect);
}
function Md(e, t, s, n) {
  const { state: o, actions: i, getters: r } = t, a = s.state.value[e];
  let l;
  function c() {
    a || (s.state.value[e] = o ? o() : {});
    const u = /* @__PURE__ */ xc(s.state.value[e]);
    return zt(u, i, Object.keys(r || {}).reduce((p, b) => (p[b] = ui(Te(() => {
      io(s);
      const S = s._s.get(e);
      return r[b].call(S, S);
    })), p), {}));
  }
  return l = Za(e, c, t, s, n, !0), l;
}
function Za(e, t, s = {}, n, o, i) {
  let r;
  const a = zt({ actions: {} }, s), l = { deep: !0 };
  let c, u, p = [], b = [], S;
  const T = n.state.value[e];
  !i && !T && (n.state.value[e] = {});
  let x;
  function B(V) {
    let P;
    c = u = !1, typeof V == "function" ? (V(n.state.value[e]), P = {
      type: Gs.patchFunction,
      storeId: e,
      events: S
    }) : (jo(n.state.value[e], V), P = {
      type: Gs.patchObject,
      payload: V,
      storeId: e,
      events: S
    });
    const X = x = Symbol();
    Ke().then(() => {
      x === X && (c = !0);
    }), u = !0, hs(p, P, n.state.value[e]);
  }
  const Y = i ? function() {
    const { state: P } = s, X = P ? P() : {};
    this.$patch((ie) => {
      zt(ie, X);
    });
  } : (
    /* istanbul ignore next */
    Xa
  );
  function H() {
    r.stop(), p = [], b = [], n._s.delete(e);
  }
  const J = (V, P = "") => {
    if (lr in V)
      return V[wo] = P, V;
    const X = function() {
      io(n);
      const ie = Array.from(arguments), I = [], Z = [];
      function re(A) {
        I.push(A);
      }
      function _e(A) {
        Z.push(A);
      }
      hs(b, {
        args: ie,
        name: X[wo],
        store: y,
        after: re,
        onError: _e
      });
      let F;
      try {
        F = V.apply(this && this.$id === e ? this : y, ie);
      } catch (A) {
        throw hs(Z, A), A;
      }
      return F instanceof Promise ? F.then((A) => (hs(I, A), A)).catch((A) => (hs(Z, A), Promise.reject(A))) : (hs(I, F), F);
    };
    return X[lr] = !0, X[wo] = P, X;
  }, v = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: ar.bind(null, b),
    $patch: B,
    $reset: Y,
    $subscribe(V, P = {}) {
      const X = ar(p, V, P.detached, () => ie()), ie = r.run(() => Be(() => n.state.value[e], (I) => {
        (P.flush === "sync" ? u : c) && V({
          storeId: e,
          type: Gs.direct,
          events: S
        }, I);
      }, zt({}, l, P)));
      return X;
    },
    $dispose: H
  }, y = /* @__PURE__ */ Xn(v);
  n._s.set(e, y);
  const w = (n._a && n._a.runWithContext || kd)(() => n._e.run(() => (r = Vr()).run(() => t({ action: J }))));
  for (const V in w) {
    const P = w[V];
    if (/* @__PURE__ */ Re(P) && !Td(P) || /* @__PURE__ */ Ft(P))
      i || (T && Ad(P) && (/* @__PURE__ */ Re(P) ? P.value = T[V] : jo(P, T[V])), n.state.value[e][V] = P);
    else if (typeof P == "function") {
      const X = J(P, V);
      w[V] = X, a.actions[V] = P;
    }
  }
  return zt(y, w), zt(/* @__PURE__ */ ve(y), w), Object.defineProperty(y, "$state", {
    get: () => n.state.value[e],
    set: (V) => {
      B((P) => {
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
  }), T && i && s.hydrate && s.hydrate(y.$state, T), c = !0, u = !0, y;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ro(e, t, s) {
  let n, o;
  const i = typeof t == "function";
  typeof e == "string" ? (n = e, o = i ? s : t) : (o = e, n = e.id);
  function r(a, l) {
    const c = Oc();
    return a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    a || (c ? Hs(qa, null) : null), a && io(a), a = Ja, a._s.has(n) || (i ? Za(n, t, o, a) : Md(n, o, a)), a._s.get(n);
  }
  return r.$id = n, r;
}
let Dn = !1;
function cr(e) {
  Dn = e;
}
function Ed() {
  return Dn;
}
function gn(e, t, s) {
  if (e === "debug" && !Dn || e === "info" && !Dn) return;
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
    return Ed();
  }
};
function Pd() {
  return [
    { id: "netease", enabled: !0, priority: 0, config: {} },
    { id: "local", enabled: !1, priority: 1, config: {} }
  ];
}
function bo() {
  return {
    volume: 65,
    playMode: "list",
    crossfade: !1,
    position: null,
    widgetMode: "dock",
    dockAlign: "bottom-left",
    showDragMiniText: !0,
    providers: Pd(),
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
const ge = /* @__PURE__ */ ro("settings", {
  state: () => ({
    settings: bo(),
    storage: null
  }),
  getters: {
    defaults: () => bo(),
    neteaseStatus(e) {
      const t = e.settings.neteaseCookie, s = e.settings.neteaseCookieAt, n = e.settings.neteaseCookieValid;
      return !t || !s ? "no-cookie" : Date.now() - s >= 14 * 864e5 ? "expired" : n ? "ok" : "invalid";
    }
  },
  actions: {
    init(e) {
      this.storage = e;
      const t = e.getSettings(), s = bo();
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
}), Id = 800, ur = 16;
class Rd {
  constructor() {
    this.listeners = /* @__PURE__ */ new Map(), this.targetVolume = 1, this.fadeTimer = 0, this.fadeAbort = null, this.preloadAudio = null, this.audio = new Audio(), this.audio.crossOrigin = "anonymous", this.audio.preload = "auto", this.audio.style.display = "none", document.body.appendChild(this.audio);
  }
  load(t) {
    this.cancelFade(), this.audio.src = t, this.audio.load();
  }
  async play(t = !1) {
    try {
      this.cancelFade(), t && !document.hidden ? (this.audio.volume = 0, await this.audio.play(), this.runFade(this.targetVolume)) : (this.audio.volume = this.targetVolume, await this.audio.play());
    } catch (s) {
      z.error("AudioEngine: play() failed:", s);
    }
  }
  pause(t = !1) {
    this.cancelFade(), t && !document.hidden && !this.audio.paused ? this.runFade(0, () => this.audio.pause()) : this.audio.pause();
  }
  seek(t) {
    this.audio.currentTime = t;
  }
  setVolume(t) {
    this.targetVolume = t, this.fadeTimer || (this.audio.volume = t);
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
  preloadNext(t) {
    this.preloadAudio || (this.preloadAudio = new Audio(), this.preloadAudio.crossOrigin = "anonymous", this.preloadAudio.preload = "auto", this.preloadAudio.style.display = "none", document.body.appendChild(this.preloadAudio)), this.preloadAudio.src = t, this.preloadAudio.load();
  }
  clearPreload() {
    this.preloadAudio && (this.preloadAudio.src = "");
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
      a && (this.audio.volume = t), this.fadeTimer = 0, this.fadeAbort = null, s?.();
    };
    const r = () => {
      if (!this.fadeAbort) return;
      const a = performance.now() - i, l = Math.min(a / Id, 1);
      this.audio.volume = Math.max(0, Math.min(1, n + o * l)), l >= 1 ? this.fadeAbort(!0) : this.fadeTimer = setTimeout(r, ur);
    };
    this.fadeTimer = setTimeout(r, ur);
  }
  cancelFade() {
    this.fadeAbort && this.fadeAbort(!0), this.fadeTimer && clearTimeout(this.fadeTimer), this.fadeTimer = 0, this.fadeAbort = null;
  }
  destroy() {
    this.cancelFade();
    for (const [t, s] of this.listeners) {
      for (const n of s)
        this.audio.removeEventListener(t, n);
      s.clear();
    }
    this.listeners.clear(), this.audio.src = "", this.audio.remove(), this.preloadAudio && (this.preloadAudio.src = "", this.preloadAudio.remove(), this.preloadAudio = null);
  }
}
const dr = /\[(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?\]/g;
function Od(e) {
  const t = e.split(/\r?\n/), s = [];
  for (const n of t) {
    const o = new RegExp(dr.source, "g"), i = [];
    let r;
    for (; (r = o.exec(n)) !== null; ) {
      const l = parseInt(r[1], 10), c = parseInt(r[2], 10), u = r[3] ?? "", p = u ? parseInt(u.padEnd(3, "0"), 10) : 0;
      i.push(l * 60 + c + p / 1e3);
    }
    if (i.length === 0) continue;
    const a = n.replace(new RegExp(dr.source, "g"), "").trim();
    if (a !== "")
      for (const l of i)
        s.push({ time: l, text: a });
  }
  s.sort((n, o) => n.time - o.time);
  for (let n = 0; n < s.length; n++)
    n < s.length - 1 && (s[n].next = s[n + 1]);
  return s;
}
function Ld(e, t) {
  if (e.length === 0) return null;
  let s = null;
  for (const n of e)
    if (n.time <= t)
      s = n;
    else
      break;
  return s;
}
class $d {
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
var fs = class {
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
}, ko, et = (ko = class extends fs {
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
    oe(this, "words");
    /** The number of significant bytes in this word array */
    oe(this, "sigBytes");
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
  toString(t = Qa) {
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
oe(ko, "random", Vo), ko);
const Qa = {
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
}, pr = {
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
      return decodeURIComponent(escape(pr.stringify(e)));
    } catch {
      throw new Error("Malformed UTF-8 data");
    }
  },
  parse(e) {
    return pr.parse(unescape(encodeURIComponent(e)));
  }
};
var el = class extends fs {
  constructor() {
    super();
    /** The number of blocks that should be kept unprocessed in the buffer */
    oe(this, "_minBufferSize", 0);
    /** The data buffer */
    oe(this, "_data");
    /** The number of bytes in the data buffer */
    oe(this, "_nDataBytes");
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
}, tl = class extends el {
  /**
  * Initializes a newly created hasher.
  * 
  * @param cfg - Configuration options
  */
  constructor(t) {
    super();
    /** The number of 32-bit words this hasher operates on */
    oe(this, "blockSize", 512 / 32);
    /** Configuration options */
    oe(this, "cfg");
    /** The hash result */
    oe(this, "_hash");
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
    return (s, n) => new Dd(t, n).finalize(s);
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
}, Nd = class extends tl {
}, Dd = class sl extends fs {
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
    oe(this, "_hasher");
    /** The outer key */
    oe(this, "_oKey");
    /** The inner key */
    oe(this, "_iKey");
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
    for (let b = 0; b < r; b += 1)
      u[b] ^= 1549556828, p[b] ^= 909522486;
    l.sigBytes = a, c.sigBytes = a, this.reset();
  }
  static create(...s) {
    const [n, o] = s;
    return new sl(n, o);
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
const Fd = (e, t, s) => {
  const n = [];
  let o = 0;
  for (let i = 0; i < t; i += 1) if (i % 4) {
    const r = s[e.charCodeAt(i - 1)] << i % 4 * 2, a = s[e.charCodeAt(i)] >>> 6 - i % 4 * 2, l = r | a;
    n[o >>> 2] |= l << 24 - o % 4 * 8, o += 1;
  }
  return et.create(n, o);
};
var Ud = class {
  constructor() {
    /** The Base64 character map */
    oe(this, "_map", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");
    /** The reverse character map for decoding */
    oe(this, "_reverseMap");
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
    return Fd(e, t, n);
  }
};
const Wo = new Ud(), q = /* @__PURE__ */ (() => {
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
var nl = class extends Nd {
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
    const n = this._hash.words, o = s[t + 0], i = s[t + 1], r = s[t + 2], a = s[t + 3], l = s[t + 4], c = s[t + 5], u = s[t + 6], p = s[t + 7], b = s[t + 8], S = s[t + 9], T = s[t + 10], x = s[t + 11], B = s[t + 12], Y = s[t + 13], H = s[t + 14], J = s[t + 15];
    let v = n[0], y = n[1], k = n[2], w = n[3];
    v = Ve(v, y, k, w, o, 7, q[0]), w = Ve(w, v, y, k, i, 12, q[1]), k = Ve(k, w, v, y, r, 17, q[2]), y = Ve(y, k, w, v, a, 22, q[3]), v = Ve(v, y, k, w, l, 7, q[4]), w = Ve(w, v, y, k, c, 12, q[5]), k = Ve(k, w, v, y, u, 17, q[6]), y = Ve(y, k, w, v, p, 22, q[7]), v = Ve(v, y, k, w, b, 7, q[8]), w = Ve(w, v, y, k, S, 12, q[9]), k = Ve(k, w, v, y, T, 17, q[10]), y = Ve(y, k, w, v, x, 22, q[11]), v = Ve(v, y, k, w, B, 7, q[12]), w = Ve(w, v, y, k, Y, 12, q[13]), k = Ve(k, w, v, y, H, 17, q[14]), y = Ve(y, k, w, v, J, 22, q[15]), v = We(v, y, k, w, i, 5, q[16]), w = We(w, v, y, k, u, 9, q[17]), k = We(k, w, v, y, x, 14, q[18]), y = We(y, k, w, v, o, 20, q[19]), v = We(v, y, k, w, c, 5, q[20]), w = We(w, v, y, k, T, 9, q[21]), k = We(k, w, v, y, J, 14, q[22]), y = We(y, k, w, v, l, 20, q[23]), v = We(v, y, k, w, S, 5, q[24]), w = We(w, v, y, k, H, 9, q[25]), k = We(k, w, v, y, a, 14, q[26]), y = We(y, k, w, v, b, 20, q[27]), v = We(v, y, k, w, Y, 5, q[28]), w = We(w, v, y, k, r, 9, q[29]), k = We(k, w, v, y, p, 14, q[30]), y = We(y, k, w, v, B, 20, q[31]), v = ze(v, y, k, w, c, 4, q[32]), w = ze(w, v, y, k, b, 11, q[33]), k = ze(k, w, v, y, x, 16, q[34]), y = ze(y, k, w, v, H, 23, q[35]), v = ze(v, y, k, w, i, 4, q[36]), w = ze(w, v, y, k, l, 11, q[37]), k = ze(k, w, v, y, p, 16, q[38]), y = ze(y, k, w, v, T, 23, q[39]), v = ze(v, y, k, w, Y, 4, q[40]), w = ze(w, v, y, k, o, 11, q[41]), k = ze(k, w, v, y, a, 16, q[42]), y = ze(y, k, w, v, u, 23, q[43]), v = ze(v, y, k, w, S, 4, q[44]), w = ze(w, v, y, k, B, 11, q[45]), k = ze(k, w, v, y, J, 16, q[46]), y = ze(y, k, w, v, r, 23, q[47]), v = Ge(v, y, k, w, o, 6, q[48]), w = Ge(w, v, y, k, p, 10, q[49]), k = Ge(k, w, v, y, H, 15, q[50]), y = Ge(y, k, w, v, c, 21, q[51]), v = Ge(v, y, k, w, B, 6, q[52]), w = Ge(w, v, y, k, a, 10, q[53]), k = Ge(k, w, v, y, T, 15, q[54]), y = Ge(y, k, w, v, i, 21, q[55]), v = Ge(v, y, k, w, b, 6, q[56]), w = Ge(w, v, y, k, J, 10, q[57]), k = Ge(k, w, v, y, u, 15, q[58]), y = Ge(y, k, w, v, Y, 21, q[59]), v = Ge(v, y, k, w, l, 6, q[60]), w = Ge(w, v, y, k, x, 10, q[61]), k = Ge(k, w, v, y, r, 15, q[62]), y = Ge(y, k, w, v, S, 21, q[63]), n[0] = n[0] + v | 0, n[1] = n[1] + y | 0, n[2] = n[2] + k | 0, n[3] = n[3] + w | 0;
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
const ol = tl._createHelper(nl);
var hr = class extends fs {
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
    oe(this, "cfg");
    this.cfg = Object.assign({}, {
      keySize: 128 / 32,
      hasher: nl,
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
}, pt, Bd = (pt = class extends el {
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
    oe(this, "cfg");
    /** Transform mode (encryption or decryption) */
    oe(this, "_xformMode");
    /** The key */
    oe(this, "_key");
    /** Block size in words */
    oe(this, "blockSize", 128 / 32);
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
    const n = (o) => typeof o == "string" ? zd : Ds;
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
oe(pt, "_ENC_XFORM_MODE", 1), /** Decryption mode constant */
oe(pt, "_DEC_XFORM_MODE", 2), /** Default key size in words (128 bits) */
oe(pt, "keySize", 128 / 32), /** Default IV size in words (128 bits) */
oe(pt, "ivSize", 128 / 32), pt), As = class extends fs {
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
    oe(this, "_cipher");
    /** The initialization vector */
    oe(this, "_iv");
    /** The previous block (for chaining modes) */
    oe(this, "_prevBlock");
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
function il(e, t, s) {
  const n = e;
  let o;
  const i = this._iv;
  if (i ? (o = i, this._iv = void 0) : o = this._prevBlock, o) for (let r = 0; r < s; r += 1) n[t + r] ^= o[r];
}
var Hd = class extends As {
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
    il.call(this, e, t, n), s.encryptBlock(e, t), this._prevBlock = e.slice(t, t + n);
  }
}, jd = class extends As {
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
    s.decryptBlock(e, t), il.call(this, e, t, n), this._prevBlock = o;
  }
}, _n, Vd = (_n = class extends As {
}, /** CBC Encryptor */
oe(_n, "Encryptor", Hd), /** CBC Decryptor */
oe(_n, "Decryptor", jd), _n);
const rl = {
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
var al = class extends Bd {
  /**
  * Initializes a newly created block cipher.
  * 
  * @param xformMode - Transform mode
  * @param key - The key
  * @param cfg - Configuration options
  */
  constructor(t, s, n) {
    super(t, s, Object.assign({
      mode: Vd,
      padding: rl
    }, n));
    /** Block mode instance */
    oe(this, "_mode");
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
}, Ks = class ll extends fs {
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
    oe(this, "ciphertext");
    oe(this, "key");
    oe(this, "iv");
    oe(this, "salt");
    oe(this, "algorithm");
    oe(this, "mode");
    oe(this, "padding");
    oe(this, "blockSize");
    oe(this, "formatter");
    s && this.mixIn(s), this.formatter || (this.formatter = zo);
  }
  static create(...s) {
    const [n] = s;
    return new ll(n);
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
    return n[0] === 1398893684 && n[1] === 1701076831 && (t = et.create(n.slice(2, 4)), n.splice(0, 4), s.sigBytes -= 16), Ks.create({
      ciphertext: s,
      salt: t
    });
  }
};
var Co, Ds = (Co = class extends fs {
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
    return Ks.create({
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
    return e instanceof Ks ? e : new Ks(e);
  }
}, /** Configuration options */
oe(Co, "cfg", { format: zo }), Co);
const Wd = { execute(e, t, s, n, o) {
  let i;
  n ? typeof n == "string" ? i = Qa.parse(n) : i = n : i = et.random(64 / 8);
  let r;
  o ? r = hr.create({
    keySize: t + s,
    hasher: o
  }).compute(e, i) : r = hr.create({ keySize: t + s }).compute(e, i);
  const a = et.create(r.words.slice(t), s * 4);
  return r.sigBytes = t * 4, Ks.create({
    key: r,
    iv: a,
    salt: i
  });
} };
var Ao, zd = (Ao = class extends Ds {
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
oe(Ao, "cfg", Object.assign({}, Ds.cfg, { kdf: Wd })), Ao);
const st = [], cl = [], ul = [], dl = [], fl = [], pl = [], Go = [], Ko = [], Yo = [], Jo = [];
(() => {
  const e = [];
  for (let n = 0; n < 256; n += 1) n < 128 ? e[n] = n << 1 : e[n] = n << 1 ^ 283;
  let t = 0, s = 0;
  for (let n = 0; n < 256; n += 1) {
    let o = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4;
    o = o >>> 8 ^ o & 255 ^ 99, st[t] = o, cl[o] = t;
    const i = e[t], r = e[i], a = e[r];
    let l = e[o] * 257 ^ o * 16843008;
    ul[t] = l << 24 | l >>> 8, dl[t] = l << 16 | l >>> 16, fl[t] = l << 8 | l >>> 24, pl[t] = l, l = a * 16843009 ^ r * 65537 ^ i * 257 ^ t * 16843008, Go[o] = l << 24 | l >>> 8, Ko[o] = l << 16 | l >>> 16, Yo[o] = l << 8 | l >>> 24, Jo[o] = l, t ? (t = i ^ e[e[e[a ^ i]]], s ^= e[e[s]]) : (s = 1, t = s);
  }
})();
const Gd = [
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
var To, Kd = (To = class extends al {
  constructor() {
    super(...arguments);
    /** Number of rounds for this key size */
    oe(this, "_nRounds");
    /** Previous key for optimization */
    oe(this, "_keyPriorReset");
    /** Key schedule for encryption */
    oe(this, "_keySchedule");
    /** Inverse key schedule for decryption */
    oe(this, "_invKeySchedule");
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
    for (let c = 0; c < r; c += 1) c < o ? a[c] = n[c] : (t = a[c - 1], c % o ? o > 6 && c % o === 4 && (t = st[t >>> 24] << 24 | st[t >>> 16 & 255] << 16 | st[t >>> 8 & 255] << 8 | st[t & 255]) : (t = t << 8 | t >>> 24, t = st[t >>> 24] << 24 | st[t >>> 16 & 255] << 16 | st[t >>> 8 & 255] << 8 | st[t & 255], t ^= Gd[c / o | 0] << 24), a[c] = a[c - o] ^ t);
    this._invKeySchedule = [];
    const l = this._invKeySchedule;
    for (let c = 0; c < r; c += 1) {
      const u = r - c;
      c % 4 ? t = a[u] : t = a[u - 4], c < 4 || u <= 4 ? l[c] = t : l[c] = Go[st[t >>> 24]] ^ Ko[st[t >>> 16 & 255]] ^ Yo[st[t >>> 8 & 255]] ^ Jo[st[t & 255]];
    }
  }
  encryptBlock(t, s) {
    this._doCryptBlock(t, s, this._keySchedule, ul, dl, fl, pl, st);
  }
  decryptBlock(t, s) {
    const n = t;
    let o = n[s + 1];
    n[s + 1] = n[s + 3], n[s + 3] = o, this._doCryptBlock(n, s, this._invKeySchedule, Go, Ko, Yo, Jo, cl), o = n[s + 1], n[s + 1] = n[s + 3], n[s + 3] = o;
  }
  _doCryptBlock(t, s, n, o, i, r, a, l) {
    const c = t, u = this._nRounds;
    let p = c[s] ^ n[0], b = c[s + 1] ^ n[1], S = c[s + 2] ^ n[2], T = c[s + 3] ^ n[3], x = 4;
    for (let v = 1; v < u; v += 1) {
      const y = o[p >>> 24] ^ i[b >>> 16 & 255] ^ r[S >>> 8 & 255] ^ a[T & 255] ^ n[x];
      x += 1;
      const k = o[b >>> 24] ^ i[S >>> 16 & 255] ^ r[T >>> 8 & 255] ^ a[p & 255] ^ n[x];
      x += 1;
      const w = o[S >>> 24] ^ i[T >>> 16 & 255] ^ r[p >>> 8 & 255] ^ a[b & 255] ^ n[x];
      x += 1;
      const V = o[T >>> 24] ^ i[p >>> 16 & 255] ^ r[b >>> 8 & 255] ^ a[S & 255] ^ n[x];
      x += 1, p = y, b = k, S = w, T = V;
    }
    const B = (l[p >>> 24] << 24 | l[b >>> 16 & 255] << 16 | l[S >>> 8 & 255] << 8 | l[T & 255]) ^ n[x];
    x += 1;
    const Y = (l[b >>> 24] << 24 | l[S >>> 16 & 255] << 16 | l[T >>> 8 & 255] << 8 | l[p & 255]) ^ n[x];
    x += 1;
    const H = (l[S >>> 24] << 24 | l[T >>> 16 & 255] << 16 | l[p >>> 8 & 255] << 8 | l[b & 255]) ^ n[x];
    x += 1;
    const J = (l[T >>> 24] << 24 | l[p >>> 16 & 255] << 16 | l[b >>> 8 & 255] << 8 | l[S & 255]) ^ n[x];
    x += 1, c[s] = B, c[s + 1] = Y, c[s + 2] = H, c[s + 3] = J;
  }
}, /** Key size in 32-bit words */
oe(To, "keySize", 256 / 32), To);
const Yd = al._createHelper(Kd);
var Jd = class extends As {
  processBlock(e, t) {
    this._cipher.encryptBlock(e, t);
  }
}, qd = class extends As {
  processBlock(e, t) {
    this._cipher.decryptBlock(e, t);
  }
}, wn, Xd = (wn = class extends As {
}, oe(wn, "Encryptor", Jd), oe(wn, "Decryptor", qd), wn);
const Zd = "e82ckenh8dichen8", Qd = mi.parse(Zd), gr = "3go8&$8*3*3h0k(2)2";
function ef(e, t) {
  const s = JSON.stringify(t), n = ol("nobody" + e + "use" + s + "md5forencrypt").toString(), o = `${e}-36cd479b6b5-${s}-36cd479b6b5-${n}`, r = Yd.encrypt(o, Qd, {
    mode: Xd,
    padding: rl
  }).ciphertext;
  return r ? r.toString().toUpperCase() : (z.error("eapiEncrypt produced empty ciphertext", { urlPath: e }), "");
}
function tf(e) {
  const t = e.split("").map((o, i) => String.fromCharCode(o.charCodeAt(0) ^ gr.charCodeAt(i % gr.length))).join(""), s = ol(t);
  return Wo.stringify(s).replace(/\//g, "_").replace(/\+/g, "-");
}
function sf(e) {
  return e ? `https://p3.music.126.net/${tf(e)}/${e}.jpg?param=300y300` : (z.warn("buildCoverUrl called with empty picId"), "");
}
class nf {
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
      "X-Netease-Params": ef(n, o),
      "X-Netease-Cookie": this.cookie
    }, [a, l, c] = await Promise.all([
      this.fetchJson(`${this.workerURL}/resolve?id=${encodeURIComponent(t)}`, { headers: r }),
      this.fetchJson(`${this.workerURL}/lyric?id=${encodeURIComponent(t)}`),
      this.fetchJson(`${this.workerURL}/detail?id=${encodeURIComponent(t)}`, { headers: r })
    ]), u = a?.data?.url;
    if (!u)
      return z.warn("NetEase: no URL returned for id=" + t), null;
    const p = c?.data, b = p?.cover || (s ? sf(s) : void 0);
    return {
      url: String(u),
      lyric: l?.data?.lyric ? String(l.data.lyric) : void 0,
      cover: b || void 0,
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
class of {
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
const hl = "https://xiaoyue.erocraft.org";
function rf(e) {
  return e.neteaseMode === "worker" ? hl : e.neteaseWorkerURL;
}
function qt(e) {
  const s = e.providers.filter((n) => n.enabled).sort((n, o) => n.priority - o.priority).map((n) => {
    const o = n.config ?? {};
    switch (n.id) {
      case "netease":
        return new nf({
          workerURL: rf(e),
          cookie: e.neteaseCookie
        });
      case "local":
        return new of({
          storage: o.storage ? o.storage : void 0
        });
      default:
        return null;
    }
  }).filter((n) => n !== null);
  return new $d(s);
}
const af = {
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
function lf() {
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
  return lf().startsWith("zh") ? af[e] ?? e : e;
}
function gl() {
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
function cf(e) {
  return new Promise((t, s) => {
    const n = new FileReader();
    n.onload = () => {
      const o = n.result, i = o.indexOf(",");
      t(i >= 0 ? o.slice(i + 1) : o);
    }, n.onerror = () => s(n.error), n.readAsDataURL(e);
  });
}
function uf(e) {
  const t = e.lastIndexOf("."), s = t > 0 ? e.slice(0, t) : e, n = t > 0 ? e.slice(t) : "";
  return `${s.replace(/[^a-zA-Z0-9_\-.]/g, "_")}${n}`;
}
async function df(e) {
  const t = await cf(e), s = uf(e.name), n = await fetch("/api/files/upload", {
    method: "POST",
    headers: gl(),
    body: JSON.stringify({ name: s, data: t })
  });
  if (!n.ok)
    throw new Error(`Upload failed: ${n.status} ${n.statusText}`);
  return (await n.json()).path;
}
async function ml(e) {
  const t = await fetch("/api/files/delete", {
    method: "POST",
    headers: gl(),
    body: JSON.stringify({ path: e })
  });
  t.ok || z.warn("deleteFile failed: " + t.status);
}
function xo() {
  return `stmp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
const tt = /* @__PURE__ */ ro("playlist", {
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
      return ge().settings.playMode;
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
      const t = ge().storage;
      if (!t) return;
      const s = t.getPlaylistData();
      s && (this.networkList = Array.isArray(s.network) ? s.network : [], this.serverList = Array.isArray(s.server) ? s.server : []);
    },
    savePlaylistData() {
      const t = ge().storage;
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
      (e === "network" || e === "server") && this.savePlaylistData(), e === "server" && n?.serverPath && ml(n.serverPath), e === this.currentList && t === this.currentIndex ? this.currentIndex = -1 : e === this.currentList && t < this.currentIndex && this.currentIndex--;
    },
    addFromSearch(e, t = !0) {
      const s = this.networkList.findIndex(
        (o) => o.providerId === e.provider && o.providerTrackId === e.id
      );
      if (this.activeTab = "network", s >= 0)
        return t && (this.currentList = "network", this.play("network", s)), !1;
      const n = {
        id: xo(),
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
        id: xo(),
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
      const s = await df(t), n = {
        id: xo(),
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
    peekNextIndex() {
      const e = this.playingList;
      if (e.length === 0) return -1;
      const t = this.playMode;
      if (t === "single")
        return this.currentIndex;
      if (t === "random") {
        if (e.length === 1) return 0;
        for (let s = 0; s < 5; s++) {
          const n = Math.floor(Math.random() * e.length);
          if (n !== this.currentIndex) return n;
        }
        return (this.currentIndex + 1) % e.length;
      } else {
        let s = this.currentIndex + 1;
        return s >= e.length && (s = 0), s;
      }
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
    async resolveTrack(e, t) {
      const n = this.getListByTab(e)[t];
      if (!n) return null;
      if (n.source === "server" && n.serverPath)
        return {
          url: n.serverPath,
          name: n.song,
          artist: n.artist ?? "",
          source: "server"
        };
      if (n.providerId && n.providerTrackId) {
        const i = await qt(ge().settings).resolve(n.providerTrackId, n.providerId, n.providerPicId);
        return i && (i.name = n.song, i.artist = n.artist ?? ""), i;
      }
      return null;
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
      } : n.providerId && n.providerTrackId && (o = await qt(ge().settings).resolve(n.providerTrackId, n.providerId, n.providerPicId), o && (o.name = n.song, o.artist = n.artist ?? "")), !o) {
        const a = ge().neteaseStatus;
        let l;
        n.source === "server" ? l = `${g("Cannot play")}：${n.song}` : a === "no-cookie" ? l = g("Cookie not configured") : a === "expired" ? l = g("Cookie expired") : a === "invalid" ? l = g("Cookie invalid") : l = `${g("Cannot play")}：${n.song}（${g("Delisted")}）`, z.warn('Track unavailable: "' + n.song + '"'), typeof toastr < "u" && toastr.warning(l, "晓乐");
        return;
      }
      await Ie().loadAndPlay(o);
    },
    setActiveTab(e) {
      this.activeTab = e;
    }
  }
}), Ie = /* @__PURE__ */ ro("player", {
  state: () => ({
    audioEngine: null,
    isPlaying: !1,
    currentTime: 0,
    duration: 0,
    volume: 65,
    lyrics: [],
    currentLyricIndex: -1,
    currentTrack: null,
    preloadedUrl: "",
    preloadedIndex: -1
  }),
  actions: {
    init() {
      if (this.audioEngine) return;
      const e = new Rd();
      this.audioEngine = e;
      const t = Ie();
      e.on("timeupdate", () => {
        if (!e) return;
        t.currentTime = e.currentTime, t.duration = e.duration;
        const s = Ld(t.lyrics, e.currentTime), n = s ? t.lyrics.indexOf(s) : -1;
        if (t.currentLyricIndex = n, t.duration > 0) {
          const o = t.duration - t.currentTime;
          if (o < 15 && o > 0 && t.preloadedIndex === -1) {
            const i = tt(), r = i.peekNextIndex();
            r >= 0 && r !== i.currentIndex && (t.preloadedIndex = r, i.resolveTrack(i.currentList, r).then((a) => {
              a && (t.preloadedUrl = a.url, e.preloadNext(a.url));
            }));
          }
        }
      }), e.on("ended", () => {
        const s = tt();
        t.preloadedUrl = "", t.preloadedIndex = -1, s.next();
      }), e.on("play", () => {
        t.isPlaying = !0;
      }), e.on("pause", () => {
        t.isPlaying = !1;
      }), e.on("error", () => {
        z.warn("Audio error event");
      }), this.initMediaSession();
    },
    initMediaSession() {
      if (!("mediaSession" in navigator)) return;
      const e = Ie(), t = tt();
      navigator.mediaSession.setActionHandler("play", () => {
        e.play();
      }), navigator.mediaSession.setActionHandler("pause", () => {
        e.pause();
      }), navigator.mediaSession.setActionHandler("previoustrack", () => {
        t.prev();
      }), navigator.mediaSession.setActionHandler("nexttrack", () => {
        t.next();
      });
    },
    async loadAndPlay(e) {
      this.audioEngine || this.init();
      const t = this.audioEngine;
      this.preloadedUrl = "", this.preloadedIndex = -1;
      const s = ge().settings.crossfade;
      if (t.load(e.url), this.currentTrack = e, e.lyric ? this.updateLyrics(e.lyric) : (this.lyrics = [], this.currentLyricIndex = -1), await t.play(s), e.cover, "mediaSession" in navigator && (navigator.mediaSession.metadata = new MediaMetadata({
        title: e.name,
        artist: e.artist,
        album: "",
        artwork: e.cover ? [{ src: e.cover, sizes: "512x512" }] : []
      }), "setPositionState" in navigator.mediaSession))
        try {
          navigator.mediaSession.setPositionState({
            duration: t.duration || 0,
            position: t.currentTime,
            playbackRate: 1
          });
        } catch {
        }
    },
    async play() {
      const e = ge().settings.crossfade;
      await this.audioEngine?.play(e);
    },
    pause() {
      const e = ge().settings.crossfade;
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
      this.lyrics = Od(e), this.currentLyricIndex = -1;
    },
    destroy() {
      this.audioEngine?.destroy(), this.audioEngine = null, this.isPlaying = !1, this.currentTime = 0, this.duration = 0, this.lyrics = [], this.currentLyricIndex = -1, this.currentTrack = null, this.preloadedUrl = "", this.preloadedIndex = -1;
    }
  }
}), ff = /* @__PURE__ */ ro("search", {
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
function yl() {
  const e = /* @__PURE__ */ me(0), t = /* @__PURE__ */ me([]), s = /* @__PURE__ */ me(null);
  function n(r, a) {
    r && (t.value[a] = r);
  }
  async function o() {
    await Ke(), await new Promise((S) => requestAnimationFrame(() => S()));
    const a = Ie().currentLyricIndex, l = s.value;
    if (!l || a < 0) {
      e.value = 0;
      return;
    }
    const c = t.value[a];
    if (!c) return;
    const u = c.offsetTop, p = c.offsetHeight, b = l.clientHeight;
    !u && !p && !b || (e.value = u - b / 2 + p / 2);
  }
  const i = Ie();
  return Be(() => i.currentLyricIndex, o), Be(() => i.lyrics, () => {
    t.value = [], o();
  }), { scrollY: e, windowRef: s, setLineRef: n, updateScroll: o };
}
const pf = ["width", "height"], hf = {
  key: 0,
  points: "6 3 20 12 6 21 6 3",
  fill: "currentColor",
  stroke: "none"
}, gf = {
  key: 10,
  points: "6 9 12 15 18 9"
}, mf = {
  key: 11,
  points: "18 15 12 9 6 15"
}, yf = {
  key: 15,
  points: "20 6 9 17 4 12"
}, vf = /* @__PURE__ */ Bt({
  __name: "Icon",
  props: {
    name: {},
    size: {}
  },
  setup(e) {
    return (t, s) => (O(), U("svg", {
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
      e.name === "play" ? (O(), U("polygon", hf)) : e.name === "pause" ? (O(), U(ue, { key: 1 }, [
        s[0] || (s[0] = d("rect", {
          x: "6",
          y: "4",
          width: "4",
          height: "16",
          rx: "1",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[1] || (s[1] = d("rect", {
          x: "14",
          y: "4",
          width: "4",
          height: "16",
          rx: "1",
          fill: "currentColor",
          stroke: "none"
        }, null, -1))
      ], 64)) : e.name === "prev" ? (O(), U(ue, { key: 2 }, [
        s[2] || (s[2] = d("polygon", {
          points: "19 20 9 12 19 4 19 20",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[3] || (s[3] = d("line", {
          x1: "5",
          y1: "19",
          x2: "5",
          y2: "5"
        }, null, -1))
      ], 64)) : e.name === "next" ? (O(), U(ue, { key: 3 }, [
        s[4] || (s[4] = d("polygon", {
          points: "5 4 15 12 5 20 5 4",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[5] || (s[5] = d("line", {
          x1: "19",
          y1: "5",
          x2: "19",
          y2: "19"
        }, null, -1))
      ], 64)) : e.name === "repeat" ? (O(), U(ue, { key: 4 }, [
        s[6] || (s[6] = d("polyline", { points: "17 1 21 5 17 9" }, null, -1)),
        s[7] || (s[7] = d("path", { d: "M3 11V9a4 4 0 0 1 4-4h14" }, null, -1)),
        s[8] || (s[8] = d("polyline", { points: "7 23 3 19 7 15" }, null, -1)),
        s[9] || (s[9] = d("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" }, null, -1))
      ], 64)) : e.name === "repeat-one" ? (O(), U(ue, { key: 5 }, [
        s[10] || (s[10] = pn('<polyline points="17 1 21 5 17 9" data-v-6d96ffa0></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14" data-v-6d96ffa0></path><polyline points="7 23 3 19 7 15" data-v-6d96ffa0></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3" data-v-6d96ffa0></path><text x="12" y="14" text-anchor="middle" font-size="8" fill="currentColor" stroke="none" font-weight="bold" data-v-6d96ffa0>1</text>', 5))
      ], 64)) : e.name === "shuffle" ? (O(), U(ue, { key: 6 }, [
        s[11] || (s[11] = pn('<polyline points="16 3 21 3 21 8" data-v-6d96ffa0></polyline><line x1="4" y1="20" x2="21" y2="3" data-v-6d96ffa0></line><polyline points="21 16 21 21 16 21" data-v-6d96ffa0></polyline><line x1="15" y1="15" x2="21" y2="21" data-v-6d96ffa0></line><line x1="4" y1="4" x2="9" y2="9" data-v-6d96ffa0></line>', 5))
      ], 64)) : e.name === "search" ? (O(), U(ue, { key: 7 }, [
        s[12] || (s[12] = d("circle", {
          cx: "11",
          cy: "11",
          r: "8"
        }, null, -1)),
        s[13] || (s[13] = d("line", {
          x1: "21",
          y1: "21",
          x2: "16.65",
          y2: "16.65"
        }, null, -1))
      ], 64)) : e.name === "plus" ? (O(), U(ue, { key: 8 }, [
        s[14] || (s[14] = d("line", {
          x1: "12",
          y1: "5",
          x2: "12",
          y2: "19"
        }, null, -1)),
        s[15] || (s[15] = d("line", {
          x1: "5",
          y1: "12",
          x2: "19",
          y2: "12"
        }, null, -1))
      ], 64)) : e.name === "x" ? (O(), U(ue, { key: 9 }, [
        s[16] || (s[16] = d("line", {
          x1: "18",
          y1: "6",
          x2: "6",
          y2: "18"
        }, null, -1)),
        s[17] || (s[17] = d("line", {
          x1: "6",
          y1: "6",
          x2: "18",
          y2: "18"
        }, null, -1))
      ], 64)) : e.name === "chevron-down" ? (O(), U("polyline", gf)) : e.name === "chevron-up" ? (O(), U("polyline", mf)) : e.name === "music" ? (O(), U(ue, { key: 12 }, [
        s[18] || (s[18] = d("path", { d: "M9 18V5l12-2v13" }, null, -1)),
        s[19] || (s[19] = d("circle", {
          cx: "6",
          cy: "18",
          r: "3"
        }, null, -1)),
        s[20] || (s[20] = d("circle", {
          cx: "18",
          cy: "16",
          r: "3"
        }, null, -1))
      ], 64)) : e.name === "volume" ? (O(), U(ue, { key: 13 }, [
        s[21] || (s[21] = d("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[22] || (s[22] = d("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1)),
        s[23] || (s[23] = d("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }, null, -1))
      ], 64)) : e.name === "volume-mute" ? (O(), U(ue, { key: 14 }, [
        s[24] || (s[24] = d("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[25] || (s[25] = d("line", {
          x1: "23",
          y1: "9",
          x2: "17",
          y2: "15"
        }, null, -1)),
        s[26] || (s[26] = d("line", {
          x1: "17",
          y1: "9",
          x2: "23",
          y2: "15"
        }, null, -1))
      ], 64)) : e.name === "check" ? (O(), U("polyline", yf)) : e.name === "loader" ? (O(), U(ue, { key: 16 }, [
        s[27] || (s[27] = pn('<line x1="12" y1="2" x2="12" y2="6" data-v-6d96ffa0></line><line x1="12" y1="18" x2="12" y2="22" data-v-6d96ffa0></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" data-v-6d96ffa0></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" data-v-6d96ffa0></line><line x1="2" y1="12" x2="6" y2="12" data-v-6d96ffa0></line><line x1="18" y1="12" x2="22" y2="12" data-v-6d96ffa0></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" data-v-6d96ffa0></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" data-v-6d96ffa0></line>', 8))
      ], 64)) : e.name === "list" ? (O(), U(ue, { key: 17 }, [
        s[28] || (s[28] = pn('<line x1="8" y1="6" x2="21" y2="6" data-v-6d96ffa0></line><line x1="8" y1="12" x2="21" y2="12" data-v-6d96ffa0></line><line x1="8" y1="18" x2="21" y2="18" data-v-6d96ffa0></line><circle cx="3.5" cy="6" r="1.5" fill="currentColor" stroke="none" data-v-6d96ffa0></circle><circle cx="3.5" cy="12" r="1.5" fill="currentColor" stroke="none" data-v-6d96ffa0></circle><circle cx="3.5" cy="18" r="1.5" fill="currentColor" stroke="none" data-v-6d96ffa0></circle>', 6))
      ], 64)) : Ce("", !0)
    ], 8, pf));
  }
}), jt = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, o] of t)
    s[n] = o;
  return s;
}, Ne = /* @__PURE__ */ jt(vf, [["__scopeId", "data-v-6d96ffa0"]]), _f = { class: "stmp-mini-side stmp-mini-side-left" }, wf = {
  key: 0,
  class: "stmp-mini-cover"
}, bf = ["src"], xf = {
  key: 1,
  class: "stmp-mini-cover stmp-mini-cover-placeholder"
}, Sf = {
  key: 1,
  class: "stmp-mini-text stmp-mini-dock-fallback"
}, kf = { class: "stmp-mini-side stmp-mini-side-right" }, Cf = { class: "stmp-mini-controls" }, Af = ["disabled", "aria-label"], Tf = ["disabled", "aria-label"], Mf = {
  key: 1,
  class: "stmp-mini stmp-mini-drag stmp-mini-drag-idle"
}, Ef = { class: "stmp-mini-cover stmp-mini-cover-square" }, Pf = ["src"], If = {
  key: 2,
  class: "stmp-mini stmp-mini-drag"
}, Rf = ["aria-label"], Of = ["src"], Lf = { class: "stmp-mini-cover-overlay" }, $f = { class: "stmp-mini-drag-right" }, Nf = { class: "stmp-mini-title-copy" }, Df = {
  class: "stmp-mini-title-copy",
  "aria-hidden": "true"
}, Ff = {
  key: 0,
  class: "stmp-mini-lyric-segment"
}, Uf = /* @__PURE__ */ Bt({
  __name: "CollapsedBar",
  props: {
    isDock: { type: Boolean },
    isMobile: { type: Boolean }
  },
  setup(e) {
    const t = Ie(), s = tt(), n = ge(), o = e, i = /* @__PURE__ */ me(!1), r = Te(() => t.currentTrack?.cover || ""), a = Te(() => !!t.currentTrack), l = Te(() => !a.value || n.neteaseStatus !== "ok"), c = Te(() => n.settings.showDragMiniText), u = Te(() => {
      const I = t.currentTrack;
      if (!I) return "";
      const Z = I.name, re = I.artist || "";
      return re ? `${Z} - ${re}` : Z;
    }), { scrollY: p, windowRef: b, setLineRef: S, updateScroll: T } = yl(), x = /* @__PURE__ */ me(null), B = /* @__PURE__ */ me(null), Y = /* @__PURE__ */ me([]), H = /* @__PURE__ */ me(0), J = /* @__PURE__ */ me(0);
    function v(I, Z) {
      I && (Y.value[Z] = I);
    }
    function y() {
      const I = x.value, Z = t.currentLyricIndex;
      if (!I || Z < 0 || Z >= Y.value.length) {
        J.value = 0, H.value = 0;
        return;
      }
      const re = Y.value[Z];
      if (!re) return;
      const _e = I.clientWidth, F = re.offsetLeft, A = re.offsetWidth, _ = t.lyrics[Z], M = _?.next ? Math.max(500, (_.next.time - _.time) * 1e3) : 5e3;
      if (A <= _e)
        J.value = Math.min(400, M), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            H.value = -F;
          });
        });
      else {
        const ee = -(F + A - _e), ne = Math.min(600, M * 0.2);
        J.value = ne, requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            H.value = -F;
          });
        }), setTimeout(() => {
          J.value = M - ne, requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              H.value = ee;
            });
          });
        }, ne);
      }
    }
    Be(() => t.currentLyricIndex, y), Be(() => t.lyrics, () => {
      Y.value = [], J.value = 0, H.value = 0, requestAnimationFrame(() => y());
    }), Be(() => n.settings.widgetMode, () => {
      requestAnimationFrame(() => {
        T(), y();
      });
    });
    const k = /* @__PURE__ */ me(null), w = /* @__PURE__ */ me(!1);
    function V() {
      const I = k.value;
      if (!I) {
        w.value = !1;
        return;
      }
      const Z = I.querySelector(".stmp-mini-title-copy");
      if (!Z) {
        w.value = !1;
        return;
      }
      const re = Z.offsetWidth - 30;
      w.value = re > I.clientWidth;
    }
    Be(u, () => {
      Ke(() => V());
    });
    function P() {
      i.value = !0;
    }
    Be(() => t.currentTrack?.url, () => {
      i.value = !1;
    });
    function X(I) {
      I.stopPropagation(), t.togglePlay();
    }
    function ie(I) {
      I.stopPropagation(), s.next();
    }
    return Cs(() => {
      requestAnimationFrame(() => {
        T(), y(), V();
      });
    }), an(() => {
    }), (I, Z) => o.isDock ? (O(), U("div", {
      key: 0,
      class: he(["stmp-mini", o.isMobile ? "stmp-mini-dock-mobile" : "stmp-mini-dock-desktop"])
    }, [
      d("div", _f, [
        r.value && !i.value ? (O(), U("div", wf, [
          d("img", {
            src: r.value,
            alt: "",
            onError: P
          }, null, 40, bf)
        ])) : (O(), U("div", xf, [
          de(Ne, {
            name: "music",
            size: 14
          })
        ]))
      ]),
      d("div", {
        ref_key: "dockWindowRef",
        ref: b,
        class: "stmp-mini-dock-text"
      }, [
        h(t).lyrics.length > 0 ? (O(), U("div", {
          key: 0,
          class: "stmp-mini-dock-scroll",
          style: Yt({ transform: `translateY(-${h(p)}px)` })
        }, [
          (O(!0), U(ue, null, nt(h(t).lyrics, (re, _e) => (O(), U("span", {
            key: _e,
            ref_for: !0,
            ref: (F) => h(S)(F, _e),
            class: he(["stmp-mini-dock-line", { "stmp-mini-dock-line-active": _e === h(t).currentLyricIndex }])
          }, E(re.text), 3))), 128))
        ], 4)) : (O(), U("span", Sf, E(u.value), 1))
      ], 512),
      d("div", kf, [
        d("div", Cf, [
          d("button", {
            class: "stmp-mini-btn",
            disabled: l.value,
            "aria-label": h(t).isPlaying ? h(g)("Pause") : h(g)("Play"),
            onClick: X
          }, [
            de(Ne, {
              name: h(t).isPlaying ? "pause" : "play",
              size: o.isMobile ? 16 : 14
            }, null, 8, ["name", "size"])
          ], 8, Af),
          d("button", {
            class: "stmp-mini-btn",
            disabled: l.value,
            "aria-label": h(g)("Next"),
            onClick: ie
          }, [
            de(Ne, {
              name: "next",
              size: o.isMobile ? 16 : 14
            }, null, 8, ["size"])
          ], 8, Tf)
        ])
      ])
    ], 2)) : !a.value || !c.value ? (O(), U("div", Mf, [
      d("div", Ef, [
        r.value && !i.value ? (O(), U("img", {
          key: 0,
          src: r.value,
          alt: "",
          onError: P
        }, null, 40, Pf)) : (O(), mt(Ne, {
          key: 1,
          name: "music",
          size: 20
        }))
      ])
    ])) : (O(), U("div", If, [
      d("button", {
        class: "stmp-mini-cover stmp-mini-cover-square",
        "aria-label": h(t).isPlaying ? h(g)("Pause") : h(g)("Play"),
        onClick: X
      }, [
        r.value && !i.value ? (O(), U("img", {
          key: 0,
          src: r.value,
          alt: "",
          onError: P
        }, null, 40, Of)) : (O(), mt(Ne, {
          key: 1,
          name: "music",
          size: 20
        })),
        d("div", Lf, [
          de(Ne, {
            name: h(t).isPlaying ? "pause" : "play",
            size: 18
          }, null, 8, ["name"])
        ])
      ], 8, Rf),
      d("div", $f, [
        d("div", {
          ref_key: "titleContainerRef",
          ref: k,
          class: he(["stmp-mini-title-drag", { overflowing: w.value }])
        }, [
          (O(), U("div", {
            class: "stmp-mini-title-track",
            key: u.value
          }, [
            d("span", Nf, E(u.value), 1),
            d("span", Df, E(u.value), 1)
          ]))
        ], 2),
        d("div", {
          ref_key: "lyricContainerRef",
          ref: x,
          class: "stmp-mini-lyric"
        }, [
          d("div", {
            ref_key: "lyricTrackRef",
            ref: B,
            class: "stmp-mini-lyric-track",
            style: Yt({
              transform: `translateX(${H.value}px)`,
              transition: J.value > 0 ? `transform ${J.value}ms linear` : "none"
            })
          }, [
            (O(!0), U(ue, null, nt(h(t).lyrics, (re, _e) => (O(), U("span", {
              key: _e,
              ref_for: !0,
              ref: (F) => v(F, _e),
              class: he(["stmp-mini-lyric-segment", { active: _e === h(t).currentLyricIndex }])
            }, E(re.text) + "  ", 3))), 128)),
            h(t).lyrics.length === 0 ? (O(), U("span", Ff, E(" "))) : Ce("", !0)
          ], 4)
        ], 512)
      ])
    ]));
  }
}), mr = /* @__PURE__ */ jt(Uf, [["__scopeId", "data-v-3585e948"]]), Bf = { class: "stmp-playlist" }, Hf = { class: "stmp-tabs" }, jf = ["onClick"], Vf = {
  key: 0,
  class: "stmp-upload-area"
}, Wf = ["disabled"], zf = {
  key: 1,
  class: "stmp-empty"
}, Gf = ["onClick"], Kf = { class: "stmp-item-index" }, Yf = { class: "stmp-item-info" }, Jf = { class: "stmp-item-song" }, qf = {
  key: 0,
  class: "stmp-item-artist"
}, Xf = ["onClick"], Zf = /* @__PURE__ */ Bt({
  __name: "PlaylistView",
  setup(e) {
    const t = tt(), s = ge(), n = Te(() => {
      const S = [
        { value: "network", label: g("Network") }
      ];
      return s.settings.providers.find((x) => x.id === "local")?.enabled && S.push({ value: "server", label: g("Upload") }), S.push({ value: "chat", label: g("Chat") }), S;
    });
    Be(n, (S) => {
      S.some((T) => T.value === t.activeTab) || t.setActiveTab("network");
    });
    const o = /* @__PURE__ */ me(null), i = /* @__PURE__ */ me(!1), r = () => {
      o.value?.click();
    }, a = async (S) => {
      const T = S.target;
      if (!T.files || !T.files[0]) return;
      const x = T.files[0];
      i.value = !0;
      try {
        await t.addServerFile(x.name, x), typeof toastr < "u" && toastr.success(`${g("Uploaded")}：${x.name}`, "晓乐");
      } catch (B) {
        z.error("Upload failed:", B), typeof toastr < "u" && toastr.error(`${g("Upload failed")}：${x.name}`, "晓乐");
      } finally {
        i.value = !1;
      }
      T.value = "";
    }, l = Te(() => t.getListByTab(t.activeTab).map((T, x) => ({ index: x, item: T }))), c = Te(() => l.value.length === 0);
    function u(S) {
      t.play(t.activeTab, S);
    }
    function p(S) {
      t.removeItem(t.activeTab, S);
    }
    function b(S) {
      t.setActiveTab(S);
    }
    return (S, T) => (O(), U("div", Bf, [
      d("div", Hf, [
        (O(!0), U(ue, null, nt(n.value, (x) => (O(), U("div", {
          key: x.value,
          class: he(["stmp-tab", { active: h(t).activeTab === x.value }]),
          onClick: (B) => b(x.value)
        }, E(x.label), 11, jf))), 128))
      ]),
      h(t).activeTab === "server" ? (O(), U("div", Vf, [
        d("input", {
          type: "file",
          accept: "audio/*",
          ref_key: "fileInputRef",
          ref: o,
          onChange: a,
          style: { display: "none" }
        }, null, 544),
        d("button", {
          class: "stmp-upload-btn",
          disabled: i.value,
          onClick: r
        }, E(i.value ? "..." : "+ " + h(g)("Upload audio file")), 9, Wf)
      ])) : Ce("", !0),
      c.value ? (O(), U("div", zf, E(h(g)("No Songs")), 1)) : (O(!0), U(ue, { key: 2 }, nt(l.value, (x) => (O(), U("div", {
        key: x.item.id,
        class: he(["stmp-item", { active: h(t).activeTab === h(t).currentList && x.index === h(t).currentIndex }]),
        onClick: (B) => u(x.index)
      }, [
        d("span", Kf, E(x.index + 1), 1),
        d("div", Yf, [
          d("span", Jf, E(x.item.song), 1),
          x.item.artist ? (O(), U("span", qf, E(x.item.artist), 1)) : Ce("", !0)
        ]),
        d("button", {
          class: "stmp-item-del",
          onClick: Kt((B) => p(x.index), ["stop"])
        }, [
          de(Ne, {
            name: "x",
            size: 14
          })
        ], 8, Xf)
      ], 10, Gf))), 128))
    ]));
  }
}), Qf = /* @__PURE__ */ jt(Zf, [["__scopeId", "data-v-f6ac7959"]]), ep = { class: "stmp-search" }, tp = {
  key: 0,
  class: "stmp-search-hint"
}, sp = { class: "stmp-search-bar" }, np = ["placeholder"], op = ["disabled"], ip = {
  key: 0,
  class: "stmp-search-error"
}, rp = ["aria-label"], ap = {
  key: 1,
  class: "stmp-search-loading"
}, lp = {
  key: 2,
  class: "stmp-search-empty"
}, cp = {
  key: 3,
  class: "stmp-search-hint"
}, up = {
  key: 4,
  class: "stmp-results"
}, dp = ["onClick"], fp = { class: "stmp-result-name" }, pp = {
  key: 0,
  class: "stmp-result-artist"
}, hp = ["aria-label", "onClick"], gp = /* @__PURE__ */ Bt({
  __name: "SearchView",
  setup(e) {
    const t = ff(), s = tt(), n = ge(), o = Te(() => n.neteaseStatus === "ok"), i = /* @__PURE__ */ me(t.keyword), r = /* @__PURE__ */ me(null);
    async function a() {
      t.setKeyword(i.value);
      const T = qt(n.settings);
      await t.search(T);
    }
    const l = () => {
      a();
    };
    function c(T) {
      return s.networkList.some(
        (x) => x.providerId === T.provider && x.providerTrackId === T.id
      );
    }
    function u(T) {
      return s.networkList.findIndex(
        (x) => x.providerId === T.provider && x.providerTrackId === T.id
      );
    }
    function p(T) {
      const x = T.provider + T.id;
      if (r.value === x) return;
      const B = u(T);
      if (B >= 0) {
        s.play("network", B), r.value = x, setTimeout(() => {
          r.value = null;
        }, 600);
        return;
      }
      r.value = x, s.addFromSearch(T), setTimeout(() => {
        r.value = null;
      }, 600);
    }
    function b(T) {
      if (c(T)) {
        const x = u(T);
        x >= 0 && s.play("network", x);
        return;
      }
      s.addFromSearch(T, !1);
    }
    function S(T) {
      return r.value === T.provider + T.id;
    }
    return (T, x) => (O(), U("div", ep, [
      o.value ? (O(), U(ue, { key: 1 }, [
        d("div", sp, [
          Os(d("input", {
            "onUpdate:modelValue": x[0] || (x[0] = (B) => i.value = B),
            class: "stmp-search-input",
            placeholder: h(g)("Search Song..."),
            onKeydown: vd(a, ["enter"])
          }, null, 40, np), [
            [hd, i.value]
          ]),
          d("button", {
            class: "stmp-icon-btn",
            disabled: h(t).isSearching,
            onClick: a
          }, [
            h(t).isSearching ? (O(), mt(Ne, {
              key: 1,
              name: "loader",
              size: 16,
              class: "stmp-spin"
            })) : (O(), mt(Ne, {
              key: 0,
              name: "search",
              size: 16
            }))
          ], 8, op)
        ]),
        h(t).error ? (O(), U("div", ip, [
          d("span", null, E(h(t).error), 1),
          d("button", {
            class: "stmp-retry-btn",
            "aria-label": h(g)("Retry"),
            onClick: l
          }, E(h(g)("Retry")), 9, rp)
        ])) : Ce("", !0),
        h(t).isSearching ? (O(), U("div", ap, E(h(g)("Searching...")), 1)) : i.value && !h(t).results.length ? (O(), U("div", lp, E(h(g)("No results")), 1)) : !i.value && !h(t).results.length ? (O(), U("div", cp, E(h(g)("Type a song name to search")), 1)) : Ce("", !0),
        h(t).results.length ? (O(), U("div", up, [
          (O(!0), U(ue, null, nt(h(t).results, (B) => (O(), U("div", {
            key: B.provider + B.id,
            class: he(["stmp-result", { "stmp-result-playing": S(B) }])
          }, [
            d("div", {
              class: "stmp-result-info",
              onClick: (Y) => p(B)
            }, [
              d("span", fp, E(B.name), 1),
              B.artist ? (O(), U("span", pp, E(B.artist), 1)) : Ce("", !0)
            ], 8, dp),
            d("button", {
              class: he(["stmp-icon-btn stmp-result-add", { added: c(B) }]),
              "aria-label": c(B) ? h(g)("Added") : h(g)("Add to list"),
              onClick: Kt((Y) => b(B), ["stop"])
            }, [
              de(Ne, {
                name: c(B) ? "check" : "plus",
                size: 16
              }, null, 8, ["name"])
            ], 10, hp)
          ], 2))), 128))
        ])) : Ce("", !0)
      ], 64)) : (O(), U("div", tp, [
        cs(E(h(n).neteaseStatus === "no-cookie" ? h(g)("Cookie not configured") : h(n).neteaseStatus === "invalid" ? h(g)("Cookie invalid") : h(g)("Cookie expired")) + " ", 1),
        x[1] || (x[1] = d("br", null, null, -1)),
        cs(E(h(g)("Configure in settings")), 1)
      ]))
    ]));
  }
}), mp = /* @__PURE__ */ jt(gp, [["__scopeId", "data-v-ef1b6d1c"]]), yp = { class: "stmp-panel" }, vp = { class: "stmp-topbar stmp-drag-handle" }, _p = ["aria-label"], wp = { class: "stmp-cover-large" }, bp = ["src"], xp = {
  key: 1,
  class: "stmp-cover-placeholder"
}, Sp = { class: "stmp-track-name" }, kp = { class: "stmp-track-artist" }, Cp = { class: "stmp-lyric-header" }, Ap = { class: "stmp-track-name" }, Tp = { class: "stmp-track-artist" }, Mp = { class: "stmp-progress" }, Ep = ["value"], Pp = { class: "stmp-time" }, Ip = { class: "stmp-controls" }, Rp = { class: "stmp-ctrl-side stmp-search-side" }, Op = ["disabled", "aria-label"], Lp = ["disabled", "aria-label"], $p = ["disabled", "aria-label"], Np = ["disabled", "aria-label"], Dp = ["disabled", "aria-label"], Fp = ["aria-label"], Up = { class: "stmp-ctrl-side stmp-volume-side" }, Bp = ["aria-label"], Hp = ["value"], jp = {
  key: 0,
  class: "stmp-overlay"
}, Vp = { class: "stmp-overlay-header" }, Wp = { class: "stmp-overlay-title" }, zp = ["aria-label"], Gp = { class: "stmp-overlay-body" }, Kp = /* @__PURE__ */ Bt({
  __name: "PlayerPanel",
  emits: ["collapse"],
  setup(e) {
    const t = Ie(), s = tt(), n = ge(), o = Te(
      () => n.settings.widgetMode === "dock" && n.settings.dockAlign.startsWith("top-")
    ), i = /* @__PURE__ */ me("cover"), r = /* @__PURE__ */ me(null), a = /* @__PURE__ */ me(!1), l = /* @__PURE__ */ me(!1);
    let c = null, u = 0;
    const p = Te(() => t.currentTrack?.cover || ""), b = Te(() => !!t.currentTrack), S = Te(() => n.neteaseStatus), T = Te(() => b.value ? "" : S.value === "no-cookie" ? g("Cookie not configured") : S.value === "expired" ? g("Cookie expired") : S.value === "invalid" ? g("Cookie invalid") : g("No Song")), x = Te(() => !b.value || S.value !== "ok"), B = () => {
      a.value = !0;
    };
    Be(
      () => t.currentTrack,
      () => {
        a.value = !1;
      }
    );
    const Y = Te(
      () => t.duration > 0 ? t.currentTime / t.duration * 100 : 0
    ), { scrollY: H, windowRef: J, setLineRef: v, updateScroll: y } = yl();
    Cs(() => {
      y();
    }), Be(() => n.settings.widgetMode, () => {
      y();
    }), Be(i, () => {
      y();
    });
    function k(_) {
      const M = Math.floor(_ / 60), ee = Math.floor(_ % 60);
      return M + ":" + ee.toString().padStart(2, "0");
    }
    function w(_) {
      const M = _.target;
      t.seek(Number(M.value) / 100 * t.duration);
    }
    const V = ["list", "random", "single"], P = {
      list: "repeat",
      random: "shuffle",
      single: "repeat-one"
    }, X = {
      list: "List Loop",
      random: "Random",
      single: "Single Loop"
    };
    function ie() {
      const _ = n.settings.playMode, M = V.indexOf(_), ee = V[(M + 1) % V.length];
      n.setPlayMode(ee), typeof toastr < "u" && toastr.info(`${g("Play mode")}：${g(X[ee])}`, "晓乐");
    }
    function I(_) {
      const M = _.target;
      t.setVolume(Number(M.value));
    }
    function Z() {
      c && clearTimeout(c), l.value = !0;
    }
    function re() {
      c = setTimeout(() => {
        l.value = !1;
      }, 300);
    }
    function _e() {
      t.volume > 0 ? (u = t.volume, t.setVolume(0)) : t.setVolume(u || n.settings.volume);
    }
    function F(_) {
      r.value === _ ? r.value = null : r.value = _;
    }
    function A() {
      r.value = null;
    }
    return (_, M) => (O(), U("div", yp, [
      d("div", vp, [
        M[7] || (M[7] = d("div", { class: "stmp-topbar-spacer" }, null, -1)),
        d("button", {
          class: "stmp-icon-btn",
          "aria-label": h(g)("Collapse panel"),
          onClick: M[0] || (M[0] = Kt((ee) => _.$emit("collapse"), ["stop"]))
        }, [
          de(Ne, {
            name: o.value ? "chevron-up" : "chevron-down",
            size: 18
          }, null, 8, ["name"])
        ], 8, _p)
      ]),
      d("div", {
        class: "stmp-display",
        onClick: M[1] || (M[1] = (ee) => i.value = i.value === "cover" ? "lyric" : "cover")
      }, [
        d("div", {
          class: he(["stmp-cover-mode", { hidden: i.value !== "cover" }])
        }, [
          d("div", wp, [
            p.value && !a.value ? (O(), U("img", {
              key: 0,
              src: p.value,
              alt: "cover",
              onError: B
            }, null, 40, bp)) : (O(), U("div", xp, [
              de(Ne, {
                name: "music",
                size: 48
              })
            ]))
          ]),
          d("div", Sp, E(h(t).currentTrack?.name || T.value), 1),
          d("div", kp, E((h(t).currentTrack?.artist || "").trim() || " "), 1)
        ], 2),
        d("div", {
          class: he(["stmp-lyric-mode", { hidden: i.value !== "lyric" }])
        }, [
          d("div", Cp, [
            d("div", Ap, E(h(t).currentTrack?.name || T.value), 1),
            d("div", Tp, E((h(t).currentTrack?.artist || "").trim() || " "), 1)
          ]),
          d("div", {
            ref_key: "lyricWindowRef",
            ref: J,
            class: "stmp-lyric-window"
          }, [
            h(t).lyrics.length > 0 ? (O(), U("div", {
              key: 0,
              class: "stmp-lyric-scroll",
              style: Yt({ transform: `translateY(-${h(H)}px)` })
            }, [
              (O(!0), U(ue, null, nt(h(t).lyrics, (ee, ne) => (O(), U("div", {
                key: ne,
                ref_for: !0,
                ref: (ce) => h(v)(ce, ne),
                class: he(["stmp-lyric-line", { "stmp-lyric-active": ne === h(t).currentLyricIndex }])
              }, E(ee.text), 3))), 128))
            ], 4)) : Ce("", !0)
          ], 512)
        ], 2)
      ]),
      d("div", Mp, [
        d("input", {
          type: "range",
          min: "0",
          max: "100",
          step: "0.1",
          value: Y.value,
          class: "stmp-range",
          onInput: w
        }, null, 40, Ep),
        d("div", Pp, [
          d("span", null, E(k(h(t).currentTime)), 1),
          d("span", null, E(k(h(t).duration)), 1)
        ])
      ]),
      d("div", Ip, [
        d("div", Rp, [
          d("button", {
            class: he(["stmp-ctrl-btn", { active: r.value === "search" }]),
            disabled: S.value !== "ok",
            "aria-label": h(g)("Search"),
            onClick: M[2] || (M[2] = Kt((ee) => F("search"), ["stop"]))
          }, [
            de(Ne, {
              name: "search",
              size: 18
            })
          ], 10, Op)
        ]),
        d("button", {
          class: "stmp-ctrl-btn",
          disabled: x.value,
          "aria-label": h(g)("Toggle play mode"),
          onClick: ie
        }, [
          de(Ne, {
            name: P[h(n).settings.playMode],
            size: 16
          }, null, 8, ["name"])
        ], 8, Lp),
        d("button", {
          class: "stmp-ctrl-btn",
          disabled: x.value,
          "aria-label": h(g)("Previous"),
          onClick: M[3] || (M[3] = (ee) => h(s).prev())
        }, [
          de(Ne, {
            name: "prev",
            size: 18
          })
        ], 8, $p),
        d("button", {
          class: "stmp-ctrl-btn stmp-play-btn",
          disabled: x.value,
          "aria-label": h(t).isPlaying ? h(g)("Pause") : h(g)("Play"),
          onClick: M[4] || (M[4] = (ee) => h(t).togglePlay())
        }, [
          de(Ne, {
            name: h(t).isPlaying ? "pause" : "play",
            size: 24
          }, null, 8, ["name"])
        ], 8, Np),
        d("button", {
          class: "stmp-ctrl-btn",
          disabled: x.value,
          "aria-label": h(g)("Next"),
          onClick: M[5] || (M[5] = (ee) => h(s).next())
        }, [
          de(Ne, {
            name: "next",
            size: 18
          })
        ], 8, Dp),
        d("button", {
          class: he(["stmp-ctrl-btn", { active: r.value === "list" }]),
          "aria-label": h(g)("Playlist"),
          onClick: M[6] || (M[6] = Kt((ee) => F("list"), ["stop"]))
        }, [
          de(Ne, {
            name: "list",
            size: 16
          })
        ], 10, Fp),
        d("div", Up, [
          d("div", {
            class: "stmp-volume-container",
            onMouseenter: Z,
            onMouseleave: re
          }, [
            d("button", {
              class: "stmp-ctrl-btn",
              "aria-label": h(g)("Mute / Unmute"),
              onClick: _e
            }, [
              de(Ne, {
                name: h(t).volume === 0 ? "volume-mute" : "volume",
                size: 18
              }, null, 8, ["name"])
            ], 8, Bp),
            d("div", {
              class: he(["stmp-volume-popup", { show: l.value }])
            }, [
              d("input", {
                type: "range",
                min: "0",
                max: "100",
                value: h(t).volume,
                class: "stmp-volume-vertical",
                orient: "vertical",
                onInput: I
              }, null, 40, Hp)
            ], 2)
          ], 32)
        ])
      ]),
      de(zu, { name: "stmp-overlay" }, {
        default: da(() => [
          r.value ? (O(), U("div", jp, [
            d("div", Vp, [
              d("span", Wp, E(r.value === "list" ? h(g)("Playlist") : h(g)("Search")), 1),
              d("button", {
                class: "stmp-overlay-close",
                "aria-label": h(g)("Close"),
                onClick: Kt(A, ["stop"])
              }, [
                de(Ne, {
                  name: "x",
                  size: 16
                })
              ], 8, zp)
            ]),
            d("div", Gp, [
              r.value === "list" ? (O(), mt(Qf, { key: 0 })) : (O(), mt(mp, { key: 1 }))
            ])
          ])) : Ce("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), yr = /* @__PURE__ */ jt(Kp, [["__scopeId", "data-v-ca60b4c0"]]), Yp = {
  key: 1,
  class: "stmp-inline-expanded"
}, vr = 3, Jp = 500, qp = /* @__PURE__ */ Bt({
  __name: "App",
  setup(e) {
    const t = ge(), s = Ie(), n = /* @__PURE__ */ me(!1), o = /* @__PURE__ */ me(null);
    let i = null;
    const r = Te(() => t.settings.widgetMode === "dock"), a = Te(() => t.settings.widgetMode === "inline"), l = Te(() => t.settings.widgetMode === "hidden"), c = /* @__PURE__ */ me(window.innerWidth <= 768), u = /* @__PURE__ */ me(!1), p = Te(() => t.settings.dockAlign.startsWith("top-")), b = Te(() => t.settings.customOpacity ? t.settings.opacity : 75), S = (pe) => {
      pe.key === "Escape" && (n.value = !1), pe.key === " " && pe.target === document.body && (pe.preventDefault(), s.togglePlay());
    };
    let T = 0, x = 0, B = 0, Y = 0, H = !1, J = !1, v = 0, y = !1, k = null, w = null, V = 0, P = 0, X = 0, ie = 0, I = 0, Z = 0, re = 0;
    function _e(pe) {
      if (r.value) return;
      const xe = pe.target;
      if (xe.closest("input, .stmp-result, .stmp-item, .stmp-upload-btn, .stmp-search-input, .stmp-controls, .stmp-lyrics, .stmp-overlay, .stmp-display, .stmp-overlay-close") || n.value && (!xe.closest(".stmp-drag-handle") || xe.closest("button")) || !n.value && xe.closest("button"))
        return;
      const Ue = o.value?.getBoundingClientRect();
      if (!Ue) return;
      T = pe.clientX, x = pe.clientY, B = Ue.left, Y = Ue.top, H = !1, J = !0, v = Date.now(), y = !1, o.value && (o.value.style.left = Ue.left + "px", o.value.style.top = Ue.top + "px", o.value.style.right = "auto", o.value.style.bottom = "auto"), k = F, w = A;
      const Oe = o.value;
      Oe && (V = Oe.offsetWidth || 60, P = Oe.offsetHeight || 40, X = window.innerWidth - V, ie = window.innerHeight - P, document.addEventListener("pointermove", k), document.addEventListener("pointerup", w), pe.preventDefault());
    }
    function F(pe) {
      if (!o.value || !J) return;
      const xe = pe.clientX - T, Ue = pe.clientY - x;
      (Math.abs(xe) > vr || Math.abs(Ue) > vr) && (H = !0);
      let Oe = B + xe, Pe = Y + Ue;
      Oe = Math.max(0, Math.min(Oe, X)), Pe = Math.max(0, Math.min(Pe, ie)), Z = Oe, re = Pe, I || (I = requestAnimationFrame(() => {
        I = 0, o.value && (o.value.style.left = Z + "px", o.value.style.top = re + "px");
      }));
    }
    function A() {
      J = !1, I && (cancelAnimationFrame(I), I = 0, o.value && (o.value.style.left = Z + "px", o.value.style.top = re + "px")), k && document.removeEventListener("pointermove", k), w && document.removeEventListener("pointerup", w), k = null, w = null;
      const pe = Date.now() - v;
      if (H) {
        if (y = !0, o.value) {
          const xe = o.value.getBoundingClientRect();
          t.setPosition({ x: xe.left, y: xe.top }), n.value && Ke(() => _());
        }
        return;
      }
      if (pe > Jp) {
        y = !0;
        return;
      }
    }
    function _() {
      if (!o.value) return;
      const pe = o.value.getBoundingClientRect(), xe = o.value.offsetWidth, Ue = o.value.offsetHeight;
      let Oe = pe.left, Pe = pe.top;
      Oe + xe > window.innerWidth && (Oe = window.innerWidth - xe), Pe + Ue > window.innerHeight && (Pe = window.innerHeight - Ue), Oe < 0 && (Oe = 0), Pe < 0 && (Pe = 0), o.value.style.left = Oe + "px", o.value.style.top = Pe + "px", o.value.style.right = "auto", o.value.style.bottom = "auto", t.setPosition({ x: Oe, y: Pe });
    }
    function M() {
      if (!o.value || !r.value) return;
      const pe = t.settings.dockAlign, xe = pe.startsWith("top-"), Ue = pe.endsWith("-right"), Oe = xe ? document.querySelector("#top-settings-holder") : document.querySelector("#send_form");
      if (!Oe) return;
      const Pe = Oe.getBoundingClientRect(), Zt = o.value.offsetHeight || 38;
      if (xe) {
        const Qt = Math.max(80, window.innerHeight - Pe.bottom - 8);
        o.value.style.maxHeight = Qt + "px", o.value.style.top = Pe.bottom + "px";
      } else {
        const Qt = Math.max(80, Pe.top - 8);
        o.value.style.maxHeight = Qt + "px";
        let f = Pe.top - Math.min(Zt, Qt);
        f < 4 && (f = 4), o.value.style.top = f + "px";
      }
      if (window.innerWidth <= 768)
        o.value.style.left = Pe.left + "px", o.value.style.width = Pe.width + "px";
      else {
        const Qt = o.value.offsetWidth;
        Ue ? o.value.style.left = Pe.right - Qt + "px" : o.value.style.left = Pe.left + "px", o.value.style.width = "";
      }
      o.value.style.right = "auto", o.value.style.bottom = "auto";
    }
    function ee() {
      if (!o.value || r.value) return;
      const pe = t.settings.position;
      pe ? (o.value.style.left = pe.x + "px", o.value.style.top = pe.y + "px", o.value.style.right = "auto", o.value.style.bottom = "auto", window.innerWidth <= 768 && Ke(() => _())) : (o.value.style.left = window.innerWidth - o.value.offsetWidth - 16 + "px", o.value.style.top = "16px", o.value.style.right = "auto", o.value.style.bottom = "auto");
    }
    function ne(pe) {
      if (y) {
        y = !1;
        return;
      }
      if (r.value && !n.value) {
        if (pe.target.closest("button, input")) return;
        ae();
        return;
      }
      if (!r.value && !n.value) {
        if (pe.target.closest("button, input")) return;
        ae();
      }
    }
    function ce(pe) {
      n.value || pe.target.closest("button, input") || ae();
    }
    function ae() {
      n.value = !n.value, Ke(() => {
        r.value ? M() : a.value || t.settings.position && _();
      });
    }
    Be(() => t.settings.widgetMode, (pe) => {
      n.value = !1, o.value && (o.value.style.width = "", o.value.style.left = "", o.value.style.top = "", o.value.style.right = "", o.value.style.bottom = "", o.value.style.maxHeight = ""), pe === "inline" && (u.value = !!document.querySelector("#send_form")), Ke(() => {
        pe === "dock" ? M() : pe === "drag" && ee();
      });
    }), Be(() => t.settings.dockAlign, () => {
      r.value && Ke(() => M());
    }), Cs(() => {
      u.value = !!document.querySelector("#send_form"), Ke(() => {
        r.value ? M() : a.value || ee();
      }), o.value && typeof ResizeObserver < "u" && (i = new ResizeObserver(() => {
        r.value && M();
      }), i.observe(o.value)), window.addEventListener("resize", Le), window.addEventListener("keydown", S);
    });
    function Le() {
      c.value = window.innerWidth <= 768, r.value ? Ke(() => M()) : a.value || Ke(() => _());
    }
    return an(() => {
      A(), i && (i.disconnect(), i = null), window.removeEventListener("resize", Le), window.removeEventListener("keydown", S);
    }), (pe, xe) => a.value ? (O(), U(ue, { key: 0 }, [
      u.value ? (O(), mt(ma, {
        key: 0,
        to: "#send_form"
      }, [
        n.value ? (O(), U("div", Yp, [
          de(yr, { onCollapse: ae })
        ])) : (O(), U("div", {
          key: 0,
          class: "stmp-inline-bar",
          onClick: ce
        }, [
          de(mr, {
            "is-dock": !0,
            "is-mobile": !0
          })
        ]))
      ])) : Ce("", !0)
    ], 64)) : l.value ? Ce("", !0) : (O(), U("div", {
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
      style: Yt({ "--stmp-opacity": b.value + "%" }),
      onPointerdown: _e,
      onClick: ne
    }, [
      n.value ? (O(), mt(yr, {
        key: 1,
        onCollapse: ae
      })) : (O(), mt(mr, {
        key: 0,
        "is-dock": r.value,
        "is-mobile": c.value
      }, null, 8, ["is-dock", "is-mobile"]))
    ], 38));
  }
}), Xp = /* @__PURE__ */ jt(qp, [["__scopeId", "data-v-cf56cb18"]]);
var ms = class extends Error {
  constructor(e, t) {
    super("".concat(e, " at position ").concat(t)), this.position = t;
  }
};
function Zp(e) {
  return /^[0-9A-Fa-f]$/.test(e);
}
function os(e) {
  return e >= "0" && e <= "9";
}
function Qp(e) {
  return e >= " ";
}
function mn(e) {
  return `,:[]/{}()
+`.includes(e);
}
function _r(e) {
  return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e === "_" || e === "$";
}
function wr(e) {
  return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e === "_" || e === "$" || e >= "0" && e <= "9";
}
var br = /^(http|https|ftp|mailto|file|data|irc):\/\/$/, xr = /^[A-Za-z0-9-._~:/?#@!$&'()*+;=]$/;
function Sr(e) {
  return `,[]/{}
+`.includes(e);
}
function kr(e) {
  return kn(e) || eh.test(e);
}
var eh = /^[[{\w-]$/;
function th(e) {
  return e === `
` || e === "\r" || e === "	" || e === "\b" || e === "\f";
}
function ls(e, t) {
  let s = e.charCodeAt(t);
  return s === 32 || s === 10 || s === 9 || s === 13;
}
function sh(e, t) {
  let s = e.charCodeAt(t);
  return s === 32 || s === 9 || s === 13;
}
function nh(e, t) {
  let s = e.charCodeAt(t);
  return s === 160 || s >= 8192 && s <= 8202 || s === 8239 || s === 8287 || s === 12288;
}
function kn(e) {
  return vl(e) || qo(e);
}
function vl(e) {
  return e === '"' || e === "“" || e === "”";
}
function Cr(e) {
  return e === '"';
}
function qo(e) {
  return e === "'" || e === "‘" || e === "’" || e === "`" || e === "´";
}
function Ar(e) {
  return e === "'";
}
function Rs(e, t) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = e.lastIndexOf(t);
  return n !== -1 ? e.substring(0, n) + (s ? "" : e.substring(n + 1)) : e;
}
function ft(e, t) {
  let s = e.length;
  if (!ls(e, s - 1)) return e + t;
  for (; ls(e, s - 1); ) s--;
  return e.substring(0, s) + t + e.substring(s);
}
function oh(e, t, s) {
  return e.substring(0, t) + e.substring(t + s);
}
function ih(e) {
  return /[,\n][ \t\r]*$/.test(e);
}
var rh = { "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t" }, ah = { '"': '"', "\\": "\\", "/": "/", b: "\b", f: "\f", n: `
`, r: "\r", t: "	" };
function Tr(e) {
  let t = 0, s = "";
  l(), o() || I(), l();
  let n = c(",");
  for (n && i(), kr(e[t]) && ih(s) ? (n || (s = ft(s, ",")), x()) : n && (s = Rs(s, ",")); e[t] === "}" || e[t] === "]"; ) t++, i();
  if (t >= e.length) return s;
  ie();
  function o() {
    i();
    let F = S() || T() || B() || H() || J() || y(!1) || k();
    return i(), F;
  }
  function i() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, A = t, _ = r(F);
    do
      _ = a(), _ && (_ = r(F));
    while (_);
    return t > A;
  }
  function r(F) {
    let A = F ? ls : sh, _ = "";
    for (; ; ) if (A(e, t)) _ += e[t], t++;
    else if (nh(e, t)) _ += " ", t++;
    else break;
    return _.length > 0 ? (s += _, !0) : !1;
  }
  function a() {
    if (e[t] === "/" && e[t + 1] === "*") {
      for (; t < e.length && !lh(e, t); ) t++;
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
      if (t += 3, _r(e[t])) for (; t < e.length && wr(e[t]); ) t++;
      return i(), !0;
    }
    return !1;
  }
  function c(F) {
    return e[t] === F ? (s += e[t], t++, !0) : !1;
  }
  function u(F) {
    return e[t] === F ? (t++, !0) : !1;
  }
  function p() {
    return u("\\");
  }
  function b() {
    return i(), e[t] === "." && e[t + 1] === "." && e[t + 2] === "." ? (t += 3, i(), u(","), !0) : !1;
  }
  function S() {
    if (e[t] === "{") {
      s += "{", t++, i(), u(",") && i();
      let F = !0;
      for (; t < e.length && e[t] !== "}"; ) {
        let A;
        if (F ? (A = !0, F = !1) : (A = c(","), A || (s = ft(s, ",")), i()), b(), !(B() || y(!0))) {
          e[t] === "}" || e[t] === "{" || e[t] === "]" || e[t] === "[" || e[t] === void 0 ? s = Rs(s, ",") : Z();
          break;
        }
        i();
        let _ = c(":"), M = t >= e.length;
        _ || (kr(e[t]) || M ? s = ft(s, ":") : re()), o() || (_ || M ? s += "null" : re());
      }
      return e[t] === "}" ? (s += "}", t++) : s = ft(s, "}"), !0;
    }
    return !1;
  }
  function T() {
    if (e[t] === "[") {
      s += "[", t++, i(), u(",") && i();
      let F = !0;
      for (; t < e.length && e[t] !== "]"; ) if (F ? F = !1 : c(",") || (s = ft(s, ",")), b(), !o()) {
        s = Rs(s, ",");
        break;
      }
      return e[t] === "]" ? (s += "]", t++) : s = ft(s, "]"), !0;
    }
    return !1;
  }
  function x() {
    let F = !0, A = !0;
    for (; A; ) F ? F = !1 : c(",") || (s = ft(s, ",")), A = o();
    A || (s = Rs(s, ",")), s = `[
`.concat(s, `
]`);
  }
  function B() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1, _ = e[t] === "\\";
    if (_ && (t++, _ = !0), kn(e[t])) {
      let M = Cr(e[t]) ? Cr : Ar(e[t]) ? Ar : qo(e[t]) ? qo : vl, ee = t, ne = s.length, ce = '"';
      for (t++; ; ) {
        if (t >= e.length) {
          let ae = w(t - 1);
          return !F && mn(e.charAt(ae)) ? (t = ee, s = s.substring(0, ne), B(!0)) : (ce = ft(ce, '"'), s += ce, !0);
        } else {
          if (t === A) return ce = ft(ce, '"'), s += ce, !0;
          if (M(e[t])) {
            let ae = t, Le = ce.length;
            if (ce += '"', t++, s += ce, i(!1), F || t >= e.length || mn(e[t]) || kn(e[t]) || os(e[t])) return Y(), !0;
            let pe = w(ae - 1), xe = e.charAt(pe);
            if (xe === ",") return t = ee, s = s.substring(0, ne), B(!1, pe);
            if (mn(xe)) return t = ee, s = s.substring(0, ne), B(!0);
            s = s.substring(0, ne), t = ae + 1, ce = "".concat(ce.substring(0, Le), "\\").concat(ce.substring(Le));
          } else if (F && Sr(e[t])) {
            if (e[t - 1] === ":" && br.test(e.substring(ee + 1, t + 2))) for (; t < e.length && xr.test(e[t]); ) ce += e[t], t++;
            return ce = ft(ce, '"'), s += ce, Y(), !0;
          } else if (e[t] === "\\") {
            let ae = e.charAt(t + 1);
            if (ah[ae] !== void 0) ce += e.slice(t, t + 2), t += 2;
            else if (ae === "u") {
              let Le = 2;
              for (; Le < 6 && Zp(e[t + Le]); ) Le++;
              Le === 6 ? (ce += e.slice(t, t + 6), t += 6) : t + Le >= e.length ? t = e.length : _e();
            } else ce += ae, t += 2;
          } else {
            let ae = e.charAt(t);
            ae === '"' && e[t - 1] !== "\\" ? (ce += "\\".concat(ae), t++) : th(ae) ? (ce += rh[ae], t++) : (Qp(ae) || X(ae), ce += ae, t++);
          }
        }
        _ && p();
      }
    }
    return !1;
  }
  function Y() {
    let F = !1;
    for (i(); e[t] === "+"; ) {
      F = !0, t++, i(), s = Rs(s, '"', !0);
      let A = s.length;
      B() ? s = oh(s, A, 1) : s = ft(s, '"');
    }
    return F;
  }
  function H() {
    let F = t;
    if (e[t] === "-") {
      if (t++, V()) return P(F), !0;
      if (!os(e[t])) return t = F, !1;
    }
    for (; os(e[t]); ) t++;
    if (e[t] === ".") {
      if (t++, V()) return P(F), !0;
      if (!os(e[t])) return t = F, !1;
      for (; os(e[t]); ) t++;
    }
    if (e[t] === "e" || e[t] === "E") {
      if (t++, (e[t] === "-" || e[t] === "+") && t++, V()) return P(F), !0;
      if (!os(e[t])) return t = F, !1;
      for (; os(e[t]); ) t++;
    }
    if (!V()) return t = F, !1;
    if (t > F) {
      let A = e.slice(F, t), _ = /^0\d/.test(A);
      return s += _ ? '"'.concat(A, '"') : A, !0;
    }
    return !1;
  }
  function J() {
    return v("true", "true") || v("false", "false") || v("null", "null") || v("True", "true") || v("False", "false") || v("None", "null");
  }
  function v(F, A) {
    return e.slice(t, t + F.length) === F ? (s += A, t += F.length, !0) : !1;
  }
  function y(F) {
    let A = t;
    if (_r(e[t])) {
      for (; t < e.length && wr(e[t]); ) t++;
      let _ = t;
      for (; ls(e, _); ) _++;
      if (e[_] === "(") return t = _ + 1, o(), e[t] === ")" && (t++, e[t] === ";" && t++), !0;
    }
    for (; t < e.length && !Sr(e[t]) && !kn(e[t]) && (!F || e[t] !== ":"); ) t++;
    if (e[t - 1] === ":" && br.test(e.substring(A, t + 2))) for (; t < e.length && xr.test(e[t]); ) t++;
    if (t > A) {
      for (; ls(e, t - 1) && t > 0; ) t--;
      let _ = e.slice(A, t);
      return s += _ === "undefined" ? "null" : JSON.stringify(_), e[t] === '"' && t++, !0;
    }
  }
  function k() {
    if (e[t] === "/") {
      let F = t;
      for (t++; t < e.length && (e[t] !== "/" || e[t - 1] === "\\"); ) t++;
      return t++, s += '"'.concat(e.substring(F, t), '"'), !0;
    }
  }
  function w(F) {
    let A = F;
    for (; A > 0 && ls(e, A); ) A--;
    return A;
  }
  function V() {
    return t >= e.length || mn(e[t]) || ls(e, t);
  }
  function P(F) {
    s += "".concat(e.slice(F, t), "0");
  }
  function X(F) {
    throw new ms("Invalid character ".concat(JSON.stringify(F)), t);
  }
  function ie() {
    throw new ms("Unexpected character ".concat(JSON.stringify(e[t])), t);
  }
  function I() {
    throw new ms("Unexpected end of json string", e.length);
  }
  function Z() {
    throw new ms("Object key expected", t);
  }
  function re() {
    throw new ms("Colon expected", t);
  }
  function _e() {
    let F = e.slice(t, t + 6);
    throw new ms('Invalid unicode character "'.concat(F, '"'), t);
  }
}
function lh(e, t) {
  return e[t] === "*" && e[t + 1] === "/";
}
function ch(e) {
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
  const s = uh(t);
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
function uh(e) {
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
class dh {
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
  return new dh();
}
const $t = "st-little-player", yi = "stmp_bgm_history", Mr = 50;
function _l() {
  const t = ge().storage;
  if (!t) return [];
  const s = t.getMetadata(yi);
  return Array.isArray(s) ? s : [];
}
function vi(e, t, s) {
  const n = _l();
  n.push({ song: e, artist: t, messageId: s, playedAt: Date.now() }), n.length > Mr && n.splice(0, n.length - Mr);
  const i = ge().storage;
  i && i.setMetadata(yi, n);
}
function wl(e) {
  return _l().slice(-5).reverse().map((s) => `${s.song}${s.artist ? " - " + s.artist : ""}`);
}
function bl(e) {
  let t = e;
  try {
    const s = Ie(), n = s.currentTrack?.name ?? "", o = s.currentTrack?.artist ?? "", i = String(s.isPlaying), r = String(!!s.currentTrack), a = wl(5).join(", ");
    t = t.replace(/\{\{xiaoyueCurrentSong\}\}/gi, n).replace(/\{\{xiaoyueCurrentArtist\}\}/gi, o ? " - " + o : "").replace(/\{\{xiaoyueIsPlaying\}\}/gi, i).replace(/\{\{xiaoyueHasTrack\}\}/gi, r).replace(/\{\{xiaoyueRecentPlayed\}\}/gi, a);
  } catch {
  }
  return t;
}
const Fn = "<!--XY_BGM_START-->", Xo = "<!--XY_BGM_END-->", ph = `You need to manage background music for a roleplay chat session. You have access to tools for searching and playing music.

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
- When uncertain whether to change, keep the current track.`, hh = "## Conversation", gh = "Analyze the above conversation and manage background music using the available tools.", xl = `Background music control is needed for this roleplay session. After writing your narrative, append a BGM marker at the end of your response.

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
- Recently played: {{xiaoyueRecentPlayed}}`, mh = `Background music control is available for this roleplay session.

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
- Recently played: {{xiaoyueRecentPlayed}}`, Un = "search_music", Sl = "Search a music platform for songs by keyword. Returns up to 5 matches with IDs, names, artists, and durations.", kl = "Search keyword — song name, artist name, or both.", Bn = "play_music", Cl = "Play a song by its search result ID. The ID must come from a prior search_music result. Returns playback status.", Al = "The ID from a search_music result entry.", Hn = "stop_music", Tl = "Stop the currently playing music. Use only when the scene explicitly calls for silence.", jn = "get_current_track", Ml = "Get information about the currently playing track, including song name, artist, and playback status.", yh = "播放音乐", vh = "播放音乐: {song}{artist}", _h = "停止音乐", wh = "停止音乐", El = (e) => e.length === 0 ? "No results found. Try different keywords." : JSON.stringify(e.map((t) => ({
  id: t.id,
  name: t.name,
  artist: t.artist,
  ...t.duration ? { duration: t.duration } : {}
}))), Pl = "Missing required parameter: keyword", Il = 'No results found for: "{keyword}". Try different keywords.', Rl = "Missing required parameter: result_id", Ol = 'Invalid result_id: "{id}". This ID does not match any prior search result. Call search_music first.', Ll = "Now playing: {name}{artist}", $l = "Music stopped.", Nl = "No music is currently playing.", Dl = (e, t, s) => JSON.stringify({ song: e, artist: t, is_playing: s }), Fl = "No track is currently loaded.";
function bh() {
  return ph;
}
function xh(e) {
  const t = [];
  return t.push(hh), t.push(e), t.push(""), t.push(gh), t.join(`
`);
}
function Sh(e, t) {
  return bl(e && t ? t : xl);
}
function kh() {
  return bl(mh);
}
const Ch = /<!--XY_BGM_START-->[\s\S]*?<!--XY_BGM_END-->/g;
class Ah {
  constructor() {
    this.interceptor = null, this.onGenerationEndedBound = (t) => {
      this.onGenerationEnded(t);
    };
  }
  init() {
    this.interceptor = (s, n, o, i) => {
      const a = SillyTavern.getContext().extensionSettings["st-little-player"];
      if (!a || a.aiMode !== "together") return;
      const l = ge(), c = Sh(
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
      const c = ch(l);
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
        const u = ge(), b = await qt(u.settings).searchAll(c.artist ? `${c.song} ${c.artist}` : c.song);
        b.length > 0 ? (tt().addFromAi(b[0], !0), vi(c.song, c.artist, n), z.debug("Together: playing: " + b[0].name + " - " + b[0].artist), typeof toastr < "u" && toastr.success(`${g("AI selected:")}：${c.song}`, "晓乐")) : (z.warn("Together: track not found: " + c.song), typeof toastr < "u" && toastr.warning(`${g("Cannot play")}：${c.song}`, "晓乐"));
      }
      this.cleanupMarker(n, o);
    } catch (s) {
      z.error("Together: onGenerationEnded error:", s);
    }
  }
  cleanupMarker(t, s) {
    s.mes = (s.mes ?? "").replace(Ch, "").trim();
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
const Mh = /<!--XY_BGM_START-->[\s\S]*?<!--XY_BGM_END-->/g;
function Eh(e) {
  return e.replace(Mh, "").trim();
}
async function Ph(e) {
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
      l = Eh(l), l.trim() && i.push(`${a}: ${l}`);
    }
    return i.join(`

`);
  } catch {
    return "";
  }
}
const Er = 5, Ih = [
  {
    type: "function",
    function: {
      name: Un,
      description: Sl,
      parameters: {
        type: "object",
        properties: {
          keyword: { type: "string", description: kl }
        },
        required: ["keyword"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: Bn,
      description: Cl,
      parameters: {
        type: "object",
        properties: {
          result_id: { type: "string", description: Al }
        },
        required: ["result_id"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: Hn,
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
      name: jn,
      description: Ml,
      parameters: {
        type: "object",
        properties: {}
      }
    }
  }
];
async function Rh() {
  const e = ge().settings, t = e.aiApiUrl.replace(/\/$/, "") + "/models", s = await fetch(t, {
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
async function Oh(e) {
  const t = ge().settings, s = t.aiApiUrl.replace(/\/$/, "") + "/chat/completions", n = {
    model: t.aiModel,
    messages: e,
    max_tokens: 4096,
    stream: !1,
    temperature: 0.7,
    tools: Ih,
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
async function Lh(e, t, s) {
  switch (e) {
    case Un: {
      const n = t.keyword;
      if (!n) return Pl;
      const o = ge(), r = await qt(o.settings).searchAll(n);
      if (r.length === 0)
        return Il.replace("{keyword}", n);
      const a = r.slice(0, 5);
      for (const c of a)
        s.set(c.id, c);
      const l = El(
        a.map((c) => ({
          id: c.id,
          name: c.name,
          artist: c.artist,
          duration: c.duration
        }))
      );
      return z.debug("search_music results: " + a.length + " items for: " + n), l;
    }
    case Bn: {
      const n = t.result_id;
      if (!n) return Rl;
      const o = s.get(n);
      return o ? (tt().addFromAi(o, !0), vi(o.name, o.artist), typeof toastr < "u" && toastr.success(`${g("AI selected:")}：${o.name}`, "晓乐"), z.debug("play_music success: " + o.name + " - " + o.artist), Ll.replace("{name}", o.name).replace("{artist}", o.artist ? " - " + o.artist : "")) : Ol.replace("{id}", n);
    }
    case Hn: {
      const n = Ie();
      return n.currentTrack ? (n.pause(), z.debug("stop_music success"), $l) : Nl;
    }
    case jn: {
      const n = Ie();
      if (!n.currentTrack) return Fl;
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
async function $h(e, t) {
  const s = [
    { role: "system", content: e },
    { role: "user", content: t }
  ], n = /* @__PURE__ */ new Map();
  for (let o = 0; o < Er; o++) {
    z.debug("BGM agent loop iteration " + (o + 1) + "/" + Er);
    const i = await Oh(s), r = {
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
      const u = await Lh(l, c, n);
      z.debug("Tool result:", u), s.push({
        role: "tool",
        content: u,
        tool_call_id: a.id
      });
    }
  }
  z.warn("BGM agent loop reached max iterations");
}
const Pr = "xiaoyue_fc", vn = /* @__PURE__ */ new Map();
class Ir {
  constructor() {
    this.isAnalyzing = !1, this.lastTriggerTime = 0, this.destroyed = !1, this.onGenerationStarted = () => {
      vn.clear();
    }, this.onCharacterMessageRendered = (t) => {
      const s = ge();
      if (!s.settings.aiAutoTrigger) return;
      const n = SillyTavern.getContext();
      (t <= 0 || n.chat.filter((i) => i.is_user).length === 0) && !s.settings.aiTriggerOnGreeting || this.triggerAgent(t);
    }, this.onMessageSwiped = (t) => {
      const s = ge();
      if (!s.settings.aiAutoTrigger) return;
      const n = Math.floor(s.settings.aiCooldownMs / 2);
      Date.now() - this.lastTriggerTime < n || this.triggerAgent(t, !0);
    };
  }
  init() {
    ge().settings.aiUseCustomApi ? this.initCustomApiPath() : this.initMainApiPath();
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
      const o = ge();
      return o.settings.aiMode === "function_call" && !o.settings.aiUseCustomApi;
    };
    t.registerFunctionTool({
      name: Un,
      displayName: "搜索音乐",
      description: Sl,
      parameters: {
        type: "object",
        properties: {
          keyword: { type: "string", description: kl }
        },
        required: ["keyword"]
      },
      action: async ({ keyword: o }) => {
        if (!o) return Pl;
        const i = ge(), a = await qt(i.settings).searchAll(o);
        if (a.length === 0)
          return Il.replace("{keyword}", o);
        const l = a.slice(0, 5);
        for (const u of l)
          vn.set(u.id, u);
        const c = El(
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
      name: Bn,
      displayName: yh,
      description: Cl,
      parameters: {
        type: "object",
        properties: {
          result_id: { type: "string", description: Al }
        },
        required: ["result_id"]
      },
      action: async ({ result_id: o }) => {
        if (!o) return Rl;
        const i = vn.get(o);
        return i ? (tt().addFromAi(i, !0), vi(i.name, i.artist), typeof toastr < "u" && toastr.success(`${g("AI selected:")}：${i.name}`, "晓乐"), z.debug("play_music success: " + i.name + " - " + i.artist), Ll.replace("{name}", i.name).replace("{artist}", i.artist ? " - " + i.artist : "")) : Ol.replace("{id}", o);
      },
      formatMessage: ({ result_id: o }) => vh.replace("{song}", o ?? "").replace("{artist}", ""),
      shouldRegister: s,
      stealth: !0
    }), t.registerFunctionTool({
      name: Hn,
      displayName: _h,
      description: Tl,
      parameters: {
        type: "object",
        properties: {}
      },
      action: async () => {
        const o = Ie();
        return o.currentTrack ? (o.pause(), $l) : Nl;
      },
      formatMessage: () => wh,
      shouldRegister: s,
      stealth: !0
    }), t.registerFunctionTool({
      name: jn,
      displayName: "当前播放",
      description: Ml,
      parameters: {
        type: "object",
        properties: {}
      },
      action: async () => {
        const o = Ie();
        return o.currentTrack ? Dl(
          o.currentTrack.name,
          o.currentTrack.artist ?? null,
          o.isPlaying
        ) : Fl;
      },
      formatMessage: () => "获取当前播放",
      shouldRegister: s,
      stealth: !0
    });
    const n = kh();
    t.setExtensionPrompt(Pr, n, 1, 0, !1, 0), z.info("Function Call (main API): 4 tools registered + aux prompt set");
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
    const n = ge();
    if (!(!s && Date.now() - this.lastTriggerTime < n.settings.aiCooldownMs || SillyTavern.getContext().generationInProgress)) {
      if (!n.settings.aiApiUrl || !n.settings.aiModel) {
        z.warn("Custom API path requires API URL + Model");
        return;
      }
      this.isAnalyzing = !0, this.lastTriggerTime = Date.now(), z.info("BGM agent loop started");
      try {
        const i = await Ph(n.settings.aiContextMessages), r = bh(), a = xh(i);
        await $h(r, a);
      } catch (i) {
        z.error("AI agent loop failed:", i), typeof toastr < "u" && toastr.error(g("AI recommendation failed"), "晓乐");
      } finally {
        this.isAnalyzing = !1;
      }
    }
  }
  destroy() {
    const t = ge(), s = t.settings.aiUseCustomApi ? "custom API" : "main API";
    z.info("Function Call destroyed: " + s), this.destroyed = !0;
    const n = SillyTavern.getContext();
    t.settings.aiUseCustomApi ? (n.eventSource.removeListener(
      n.event_types.CHARACTER_MESSAGE_RENDERED,
      this.onCharacterMessageRendered
    ), n.eventSource.removeListener(
      n.event_types.MESSAGE_SWIPED,
      this.onMessageSwiped
    )) : (n.eventSource.removeListener(n.event_types.GENERATION_STARTED, this.onGenerationStarted), n.unregisterFunctionTool(Un), n.unregisterFunctionTool(Bn), n.unregisterFunctionTool(Hn), n.unregisterFunctionTool(jn), n.setExtensionPrompt(Pr, "", -1, 0), vn.clear());
  }
}
let Zo = null;
class Nh {
  constructor() {
    this.together = null, this.functionCall = null, this.currentMode = "off";
  }
  init() {
    this.applyMode(ge().settings.aiMode), Zo = this, z.info("BGM controller initialized, mode: " + this.currentMode);
  }
  setMode(t) {
    t !== this.currentMode && (z.info("BGM mode changing to: " + t), this.destroyCurrent(), this.applyMode(t));
  }
  resetFunctionCall() {
    this.functionCall && (this.functionCall.destroy(), this.functionCall = new Ir(), this.functionCall.init());
  }
  applyMode(t) {
    this.currentMode = t;
    try {
      switch (t) {
        case "function_call":
          this.functionCall = new Ir(), this.functionCall.init();
          break;
        case "together":
          this.together = new Ah(), this.together.init();
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
}, Fh = { class: "stmp-switch" }, Uh = ["checked", "disabled"], Bh = /* @__PURE__ */ Bt({
  __name: "ToggleSwitch",
  props: {
    modelValue: { type: Boolean },
    label: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const s = e, n = t, o = /* @__PURE__ */ me(null);
    function i() {
      const r = s.modelValue;
      n("update:modelValue", !r), Ke(() => {
        o.value && s.modelValue === r && o.value.checked !== r && (o.value.checked = r);
      });
    }
    return (r, a) => (O(), U("label", {
      class: he(["stmp-switch-row", { "stmp-switch-disabled": e.disabled }])
    }, [
      e.label ? (O(), U("span", Dh, E(e.label), 1)) : Ce("", !0),
      d("span", Fh, [
        d("input", {
          ref_key: "inputRef",
          ref: o,
          type: "checkbox",
          checked: e.modelValue,
          disabled: e.disabled,
          onChange: i
        }, null, 40, Uh),
        a[0] || (a[0] = d("span", { class: "stmp-switch-track" }, [
          d("span", { class: "stmp-switch-thumb" })
        ], -1))
      ])
    ], 2));
  }
}), xt = /* @__PURE__ */ jt(Bh, [["__scopeId", "data-v-529649ca"]]), Hh = ["value", "placeholder", "readonly"], jh = ["onMousedown", "onMouseenter"], Vh = /* @__PURE__ */ Bt({
  __name: "ComboBox",
  props: {
    modelValue: {},
    options: {},
    placeholder: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const s = e, n = t, o = /* @__PURE__ */ me(null), i = /* @__PURE__ */ me(null), r = /* @__PURE__ */ me(!1), a = /* @__PURE__ */ me(-1), l = /* @__PURE__ */ me({}), c = Te(() => s.options), u = Te(() => s.options.length > 0);
    function p() {
      const y = i.value;
      if (!y) return;
      const k = y.getBoundingClientRect();
      l.value = {
        position: "fixed",
        left: `${k.left}px`,
        top: `${k.bottom + 2}px`,
        width: `${k.width}px`,
        zIndex: "10000"
      };
    }
    function b() {
      s.options.length !== 0 && (r.value = !0, a.value = -1, Ke(p));
    }
    function S() {
      r.value = !1, a.value = -1;
    }
    function T() {
      r.value ? S() : b();
    }
    function x(y) {
      n("update:modelValue", y), S();
    }
    function B(y) {
      n("update:modelValue", y.target.value), !r.value && s.options.length > 0 && (r.value = !0), a.value = -1, Ke(p);
    }
    function Y(y) {
      if (!r.value) return;
      const k = c.value;
      y.key === "ArrowDown" ? (y.preventDefault(), a.value = Math.min(a.value + 1, k.length - 1)) : y.key === "ArrowUp" ? (y.preventDefault(), a.value = Math.max(a.value - 1, 0)) : y.key === "Enter" ? a.value >= 0 && a.value < k.length ? (y.preventDefault(), x(k[a.value])) : S() : y.key === "Escape" && (y.preventDefault(), S());
    }
    function H(y) {
      const k = y.target;
      o.value?.contains(k) || document.getElementById("stmp-combobox-dropdown")?.contains(k) || S();
    }
    function J() {
      r.value && S();
    }
    function v() {
      r.value && Ke(p);
    }
    return Cs(() => {
      document.addEventListener("mousedown", H, !0), window.addEventListener("scroll", J, !0), window.addEventListener("resize", v);
    }), an(() => {
      document.removeEventListener("mousedown", H, !0), window.removeEventListener("scroll", J, !0), window.removeEventListener("resize", v);
    }), Be(() => s.modelValue, (y) => {
      i.value && i.value.value !== y && (i.value.value = y);
    }), (y, k) => (O(), U("div", {
      ref_key: "rootRef",
      ref: o,
      class: he(["stmp-combobox", { "has-options": e.options.length > 0 }])
    }, [
      d("input", {
        ref_key: "inputRef",
        ref: i,
        class: "text_pole",
        type: "text",
        value: e.modelValue,
        placeholder: e.placeholder,
        readonly: u.value,
        autocomplete: "off",
        onFocus: b,
        onInput: B,
        onKeydown: Y
      }, null, 40, Hh),
      e.options.length > 0 ? (O(), U("i", {
        key: 0,
        class: he(["fa-solid fa-chevron-down stmp-combobox-arrow", { rotated: r.value }]),
        onMousedown: Kt(T, ["prevent"])
      }, null, 34)) : Ce("", !0),
      (O(), mt(ma, { to: "body" }, [
        r.value && c.value.length > 0 ? (O(), U("div", {
          key: 0,
          id: "stmp-combobox-dropdown",
          class: "stmp-combobox-dropdown",
          style: Yt(l.value)
        }, [
          (O(!0), U(ue, null, nt(c.value, (w, V) => (O(), U("div", {
            key: w,
            class: he(["stmp-combobox-option", { active: V === a.value }]),
            onMousedown: Kt((P) => x(w), ["prevent"]),
            onMouseenter: (P) => a.value = V
          }, E(w), 43, jh))), 128))
        ], 4)) : Ce("", !0)
      ]))
    ], 2));
  }
}), Wh = /* @__PURE__ */ jt(Vh, [["__scopeId", "data-v-804fa027"]]), zh = { class: "stmp-settings" }, Gh = { class: "stmp-tab-bar" }, Kh = ["onClick"], Yh = { class: "stmp-tab-content" }, Jh = { class: "stmp-tab-panel" }, qh = { class: "stmp-row" }, Xh = { class: "stmp-row-info" }, Zh = { class: "stmp-row-title" }, Qh = { class: "stmp-row-desc" }, eg = { class: "stmp-chips" }, tg = ["onClick"], sg = {
  key: 0,
  class: "stmp-row"
}, ng = { class: "stmp-row-info" }, og = { class: "stmp-row-title" }, ig = { class: "stmp-row-desc" }, rg = { class: "stmp-chips" }, ag = ["onClick"], lg = {
  key: 1,
  class: "stmp-row"
}, cg = { class: "stmp-row-info" }, ug = { class: "stmp-row-title" }, dg = { class: "stmp-row-desc" }, fg = {
  key: 2,
  class: "stmp-row"
}, pg = { class: "stmp-row-info" }, hg = { class: "stmp-row-title" }, gg = { class: "stmp-row-desc" }, mg = {
  key: 3,
  class: "stmp-row"
}, yg = { class: "stmp-row-info" }, vg = { class: "stmp-row-title" }, _g = { class: "stmp-slider-wrap" }, wg = ["value"], bg = { class: "stmp-slider-val" }, xg = { class: "stmp-tab-panel" }, Sg = { class: "stmp-section-header" }, kg = { class: "stmp-section-title" }, Cg = { class: "stmp-row" }, Ag = { class: "stmp-row-info" }, Tg = { class: "stmp-row-title" }, Mg = { class: "stmp-slider-wrap" }, Eg = ["value"], Pg = { class: "stmp-slider-val" }, Ig = { class: "stmp-row" }, Rg = { class: "stmp-row-info" }, Og = { class: "stmp-row-title" }, Lg = { class: "stmp-chips" }, $g = ["onClick"], Ng = { class: "stmp-row" }, Dg = { class: "stmp-row-info" }, Fg = { class: "stmp-row-title" }, Ug = { class: "stmp-row-desc" }, Bg = { class: "stmp-section-header" }, Hg = { class: "stmp-section-title" }, jg = { class: "stmp-row" }, Vg = { class: "stmp-row-info" }, Wg = { class: "stmp-row-title" }, zg = { class: "stmp-row-desc" }, Gg = { class: "stmp-chips" }, Kg = ["onClick"], Yg = {
  key: 0,
  class: "stmp-row"
}, Jg = { class: "stmp-row-info" }, qg = { class: "stmp-row-title" }, Xg = { class: "stmp-row-desc" }, Zg = ["value", "placeholder"], Qg = { class: "stmp-row" }, em = { class: "stmp-row-info" }, tm = { class: "stmp-row-title" }, sm = ["title"], nm = { class: "stmp-row-desc" }, om = { class: "stmp-model-wrap" }, im = ["value", "placeholder"], rm = { class: "stmp-row" }, am = { class: "stmp-row-info" }, lm = { class: "stmp-row-title" }, cm = { class: "stmp-row-desc" }, um = { class: "stmp-section-header" }, dm = { class: "stmp-section-title" }, fm = { class: "stmp-row" }, pm = { class: "stmp-row-info" }, hm = { class: "stmp-row-title" }, gm = { class: "stmp-row-desc" }, mm = { class: "stmp-row" }, ym = { class: "stmp-row-info" }, vm = { class: "stmp-row-title" }, _m = { class: "stmp-row-desc" }, wm = { class: "stmp-tab-panel" }, bm = { class: "stmp-row" }, xm = { class: "stmp-row-info" }, Sm = { class: "stmp-row-title" }, km = { class: "stmp-row-desc" }, Cm = { class: "stmp-row" }, Am = { class: "stmp-row-info" }, Tm = { class: "stmp-row-title" }, Mm = { class: "stmp-row-desc" }, Em = { class: "stmp-chips" }, Pm = ["onClick"], Im = { class: "stmp-row" }, Rm = { class: "stmp-row-info" }, Om = { class: "stmp-row-title" }, Lm = { class: "stmp-row-desc" }, $m = { class: "stmp-row" }, Nm = { class: "stmp-row-info" }, Dm = { class: "stmp-row-title" }, Fm = { class: "stmp-row-desc" }, Um = ["value"], Bm = { class: "stmp-row" }, Hm = { class: "stmp-row-info" }, jm = { class: "stmp-row-title" }, Vm = { class: "stmp-row-desc" }, Wm = ["value"], zm = { class: "stmp-row" }, Gm = { class: "stmp-row-info" }, Km = { class: "stmp-row-title" }, Ym = { class: "stmp-row-desc" }, Jm = { class: "stmp-model-wrap" }, qm = ["title"], Xm = { class: "stmp-row" }, Zm = { class: "stmp-row-info" }, Qm = { class: "stmp-row-title" }, ey = { class: "stmp-row-desc" }, ty = { class: "stmp-slider-wrap" }, sy = ["value"], ny = { class: "stmp-slider-val" }, oy = { class: "stmp-row" }, iy = { class: "stmp-row-info" }, ry = { class: "stmp-row-title" }, ay = { class: "stmp-row-desc" }, ly = {
  key: 0,
  class: "stmp-row"
}, cy = { class: "stmp-row-info" }, uy = { class: "stmp-row-title" }, dy = { class: "stmp-row-desc" }, fy = { class: "stmp-row" }, py = { class: "stmp-row-info" }, hy = { class: "stmp-row-title" }, gy = { class: "stmp-row-desc" }, my = { class: "stmp-chips" }, yy = ["onClick"], vy = { class: "stmp-row" }, _y = { class: "stmp-row-info" }, wy = { class: "stmp-row-title" }, by = { class: "stmp-row-desc" }, xy = {
  key: 0,
  class: "stmp-row"
}, Sy = { class: "stmp-row-info" }, ky = { class: "stmp-row-title" }, Cy = { class: "stmp-row-desc" }, Ay = ["title"], Ty = { class: "stmp-tab-panel" }, My = { class: "stmp-row" }, Ey = { class: "stmp-row-info" }, Py = { class: "stmp-row-title" }, Iy = { class: "stmp-row-desc" }, Ry = { class: "stmp-row" }, Oy = { class: "stmp-row-info" }, Ly = { class: "stmp-row-title" }, $y = { class: "stmp-row-desc" }, Ny = { class: "stmp-row" }, Dy = { class: "stmp-row-info" }, Fy = { class: "stmp-row-title" }, Uy = { class: "stmp-row-desc" }, By = { class: "stmp-about" }, Hy = { class: "stmp-about-version" }, jy = { class: "stmp-about-desc" }, Vy = "https://github.com/vvb7456/ST-little-player", Wy = /* @__PURE__ */ Bt({
  __name: "SettingsView",
  setup(e) {
    const t = ge(), s = tt(), n = /* @__PURE__ */ me("appearance"), o = [
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
    function l(A) {
      const _ = A.target;
      t.setOpacity(Number(_.value));
    }
    const c = [
      { value: "list", label: g("List Loop"), icon: "fa-solid fa-repeat" },
      { value: "random", label: g("Random"), icon: "fa-solid fa-shuffle" },
      { value: "single", label: g("Single Loop"), icon: "fa-solid fa-repeat" }
    ];
    function u(A) {
      const _ = A.target;
      t.setVolume(Number(_.value));
    }
    const p = [
      { value: "worker", label: g("Official Worker") },
      { value: "self", label: g("Self-hosted") }
    ], b = [
      { value: "together", label: g("Together"), icon: "fa-solid fa-link" },
      { value: "function_call", label: g("Function Call"), icon: "fa-solid fa-screwdriver-wrench" }
    ];
    function S(A) {
      t.setAiMode(A), Cn()?.setMode(A);
    }
    function T(A) {
      t.setAiUseCustomApi(A), Cn()?.resetFunctionCall();
    }
    function x(A) {
      const _ = A ? "function_call" : "off";
      t.setAiMode(_), Cn()?.setMode(_);
    }
    function B(A) {
      const _ = A.target;
      t.setAiContextMessages(Number(_.value));
    }
    const Y = /* @__PURE__ */ me([]), H = /* @__PURE__ */ me(!1);
    async function J() {
      if (H.value) return;
      if (!t.settings.aiApiUrl) {
        typeof toastr < "u" && toastr.warning(g("Please fill API URL"), "晓乐");
        return;
      }
      H.value = !0;
      try {
        const _ = await Rh();
        Y.value = _, _.length === 0 ? typeof toastr < "u" && toastr.info(g("No models returned"), "晓乐") : typeof toastr < "u" && toastr.success(`${g("models found")} ${_.length} 个模型`, "晓乐");
      } catch (_) {
        z.error("Failed to fetch models:", _), typeof toastr < "u" && toastr.error(g("Failed to fetch models"), "晓乐");
      } finally {
        H.value = !1;
      }
    }
    function v() {
      const A = t.settings.providers.find((_) => _.id === "local");
      if (A) {
        if (!A.enabled) {
          const _ = SillyTavern.getContext();
          if (_?.callGenericPopup && _?.POPUP_TYPE) {
            _.callGenericPopup(
              g("Upload warning text"),
              _.POPUP_TYPE.CONFIRM,
              "",
              { okButton: g("Confirm"), cancelButton: g("Cancel") }
            ).then((M) => {
              M === 1 && (A.enabled = !0, t.save(), typeof toastr < "u" && toastr.info(g("Source enabled"), "晓乐"));
            });
            return;
          }
        }
        A.enabled = !A.enabled, t.save(), typeof toastr < "u" && toastr.info(A.enabled ? g("Source enabled") : g("Source disabled"), "晓乐");
      }
    }
    const y = /* @__PURE__ */ me(!1), k = Te(() => {
      const A = t.neteaseStatus;
      return A === "no-cookie" ? { icon: "fa-solid fa-link", ok: !1, warn: !1 } : A === "expired" ? { icon: "fa-solid fa-triangle-exclamation", ok: !1, warn: !0 } : A === "invalid" ? { icon: "fa-solid fa-triangle-exclamation", ok: !1, warn: !0 } : { icon: "fa-solid fa-circle-check", ok: !0, warn: !1 };
    }), w = Te(() => !!t.settings.neteaseCookie);
    async function V() {
      if (y.value) return;
      const A = t.settings.neteaseCookie.trim();
      if (!A) {
        typeof toastr < "u" && toastr.warning(g("Cookie invalid or expired"), "晓乐");
        return;
      }
      y.value = !0;
      try {
        const _ = t.settings.neteaseMode === "worker" ? hl : t.settings.neteaseWorkerURL;
        if (!_) {
          typeof toastr < "u" && toastr.warning(g("Worker URL"), "晓乐");
          return;
        }
        const ee = await (await fetch(`${_}/auth`, {
          headers: { "X-Netease-Cookie": A }
        })).json();
        ee?.success && ee?.data?.valid ? (t.setNeteaseCookie(A), typeof toastr < "u" && toastr.success(g("Cookie valid"), "晓乐")) : (t.setNeteaseCookieInvalid(), typeof toastr < "u" && toastr.error(g("Cookie invalid or expired"), "晓乐"));
      } catch (_) {
        z.error("NetEase cookie verify failed:", _), typeof toastr < "u" && toastr.error(g("Cannot reach Worker"), "晓乐");
      } finally {
        y.value = !1;
      }
    }
    function P(A) {
      const _ = A.target.value.trim();
      t.setNeteaseCookie(_);
    }
    const X = ["aiApiUrl", "aiApiKey", "aiModel", "neteaseCookie", "neteaseCookieAt", "neteaseCookieValid"], ie = () => {
      const A = {};
      for (const [ne, ce] of Object.entries(t.settings))
        X.includes(ne) || (A[ne] = ce);
      const _ = new Blob([JSON.stringify(A, null, 2)], { type: "application/json" }), M = URL.createObjectURL(_), ee = document.createElement("a");
      ee.href = M, ee.download = "st-little-player-settings.json", ee.click(), URL.revokeObjectURL(M), typeof toastr < "u" && toastr.success(g("Settings exported"), "晓乐");
    }, I = () => {
      const A = document.createElement("input");
      A.type = "file", A.accept = ".json", A.onchange = async (_) => {
        const M = _.target.files?.[0];
        if (!M) return;
        const ee = await M.text();
        try {
          const ne = JSON.parse(ee);
          if (typeof ne != "object" || ne === null) throw new Error("Not an object");
          const ce = ["volume", "playMode", "crossfade", "position", "widgetMode", "dockAlign", "showDragMiniText", "providers", "customOpacity", "opacity", "aiMode", "aiUseCustomApi", "aiContextMessages", "aiAutoTrigger", "aiTriggerOnGreeting", "aiCooldownMs", "togetherPromptRole", "togetherCustomPromptEnabled", "togetherCustomPrompt", "debug", "neteaseMode", "neteaseWorkerURL"], ae = {};
          for (const Le of ce)
            Le in ne && (ae[Le] = ne[Le]);
          if (typeof ae.volume != "number" || ae.volume < 0 || ae.volume > 100)
            throw new Error("Invalid volume");
          if (typeof ae.playMode != "string" || !["list", "random", "single"].includes(ae.playMode))
            throw new Error("Invalid playMode");
          if (ae.providers && !Array.isArray(ae.providers))
            throw new Error("Invalid providers");
          Object.assign(t.settings, ae), t.save(), typeof toastr < "u" && toastr.success(g("Settings imported"), "晓乐");
        } catch (ne) {
          z.error("Settings import failed:", ne), typeof toastr < "u" && toastr.error(`${g("Import failed")}：${ne instanceof Error ? ne.message : g("Invalid JSON")}`, "晓乐");
        }
      }, A.click();
    }, Z = "0.2.1-beta", re = () => {
      const A = s.networkList.map((ne) => ({
        song: ne.song,
        artist: ne.artist,
        providerId: ne.providerId,
        providerTrackId: ne.providerTrackId,
        providerPicId: ne.providerPicId
      })), _ = new Blob([JSON.stringify(A, null, 2)], { type: "application/json" }), M = URL.createObjectURL(_), ee = document.createElement("a");
      ee.href = M, ee.download = "st-little-player-playlist.json", ee.click(), URL.revokeObjectURL(M), typeof toastr < "u" && toastr.success(g("Playlist exported"), "晓乐");
    }, _e = () => {
      const A = document.createElement("input");
      A.type = "file", A.accept = ".json", A.onchange = async (_) => {
        const M = _.target.files?.[0];
        if (!M) return;
        const ee = await M.text();
        try {
          const ne = JSON.parse(ee);
          if (!Array.isArray(ne)) throw new Error("Not an array");
          const ce = ne.filter((ae) => ae && typeof ae.song == "string").map((ae) => ({
            id: `stmp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
            song: ae.song,
            artist: ae.artist,
            source: "network",
            providerId: ae.providerId,
            providerTrackId: ae.providerTrackId,
            providerPicId: ae.providerPicId,
            addedAt: Date.now()
          }));
          s.networkList = ce, s.savePlaylistData(), typeof toastr < "u" && toastr.success(g("Playlist imported"), "晓乐");
        } catch (ne) {
          z.error("Playlist import failed:", ne), typeof toastr < "u" && toastr.error(`${g("Import failed")}：${ne instanceof Error ? ne.message : g("Invalid JSON")}`, "晓乐");
        }
      }, A.click();
    };
    async function F() {
      const A = SillyTavern.getContext(), _ = t.settings.togetherCustomPrompt || xl, M = ["{{xiaoyueCurrentSong}}", "{{xiaoyueCurrentArtist}}", "{{xiaoyueIsPlaying}}", "{{xiaoyueHasTrack}}", "{{xiaoyueRecentPlayed}}"], ee = `<div style="margin-bottom:6px;font-size:0.85em;opacity:0.8">${g("The prompt must contain the markers")} <code class="stmp-macro-hint">&lt;!--XY_BGM_START--&gt;</code> / <code class="stmp-macro-hint">&lt;!--XY_BGM_END--&gt;</code> ${g("for BGM control to work.")}</div>`, ne = M.map((pe) => `<code class="stmp-macro-hint">${pe}</code>`).join(" "), ce = `<div style="margin-bottom:8px;font-size:0.85em;opacity:0.7">${g("Available macros:")} ${ne}</div>`, ae = ee + ce;
      $("#dialogue_popup_cancel").css("display", "flex"), $("#dialogue_popup_controls .menu_button").css("width", "unset");
      const Le = await A.callPopup(ae, "input", _, { wide: !0, rows: 20, okButton: g("Save") });
      Le !== !1 && t.setTogetherCustomPrompt(String(Le).trim());
    }
    return (A, _) => (O(), U("div", zh, [
      d("div", Gh, [
        (O(), U(ue, null, nt(o, (M) => d("div", {
          key: M.id,
          class: he(["stmp-tab", { active: n.value === M.id }]),
          onClick: (ee) => n.value = M.id
        }, [
          d("i", {
            class: he(M.icon)
          }, null, 2),
          d("span", null, E(M.label), 1)
        ], 10, Kh)), 64))
      ]),
      d("div", Yh, [
        Os(d("div", Jh, [
          d("div", qh, [
            d("div", Xh, [
              d("div", Zh, E(h(g)("Widget Mode")), 1),
              d("div", Qh, E(h(g)("Choose how the player widget is displayed")), 1)
            ]),
            d("div", eg, [
              (O(), U(ue, null, nt(i, (M) => d("div", {
                key: M.value,
                class: he(["stmp-chip", { active: h(t).settings.widgetMode === M.value }]),
                onClick: (ee) => h(t).setWidgetMode(M.value)
              }, [
                d("i", {
                  class: he(M.icon)
                }, null, 2),
                d("span", null, E(M.label), 1)
              ], 10, tg)), 64))
            ])
          ]),
          h(t).settings.widgetMode === "dock" ? (O(), U("div", sg, [
            d("div", ng, [
              d("div", og, E(h(g)("Dock Alignment")), 1),
              d("div", ig, E(h(g)("Align the docked player to a corner of the screen")), 1)
            ]),
            d("div", rg, [
              (O(), U(ue, null, nt(r, (M) => d("div", {
                key: M.value,
                class: he(["stmp-chip", { active: h(t).settings.dockAlign === M.value }]),
                onClick: (ee) => h(t).setDockAlign(M.value)
              }, [
                d("i", {
                  class: he(M.icon)
                }, null, 2),
                d("span", null, E(M.label), 1)
              ], 10, ag)), 64))
            ])
          ])) : Ce("", !0),
          h(t).settings.widgetMode === "drag" ? (O(), U("div", lg, [
            d("div", cg, [
              d("div", ug, E(h(g)("Show track info in drag mini")), 1),
              d("div", dg, E(h(g)("Show song title and lyrics in the compact drag widget")), 1)
            ]),
            de(xt, {
              "model-value": h(t).settings.showDragMiniText,
              "onUpdate:modelValue": h(t).setShowDragMiniText
            }, null, 8, ["model-value", "onUpdate:modelValue"])
          ])) : Ce("", !0),
          a() ? (O(), U("div", fg, [
            d("div", pg, [
              d("div", hg, E(h(g)("Custom opacity")), 1),
              d("div", gg, E(h(g)("Adjust the player background opacity")), 1)
            ]),
            de(xt, {
              "model-value": h(t).settings.customOpacity,
              "onUpdate:modelValue": h(t).setCustomOpacity
            }, null, 8, ["model-value", "onUpdate:modelValue"])
          ])) : Ce("", !0),
          h(t).settings.customOpacity ? (O(), U("div", mg, [
            d("div", yg, [
              d("div", vg, E(h(g)("Opacity")), 1)
            ]),
            d("div", _g, [
              d("input", {
                type: "range",
                class: "stmp-slider",
                min: "0",
                max: "100",
                value: h(t).settings.opacity,
                onInput: l
              }, null, 40, wg),
              d("span", bg, E(h(t).settings.opacity) + "%", 1)
            ])
          ])) : Ce("", !0)
        ], 512), [
          [hn, n.value === "appearance"]
        ]),
        Os(d("div", xg, [
          d("div", Sg, [
            d("div", kg, E(h(g)("Playback Settings")), 1)
          ]),
          d("div", Cg, [
            d("div", Ag, [
              d("div", Tg, E(h(g)("Default Volume")), 1)
            ]),
            d("div", Mg, [
              d("input", {
                type: "range",
                class: "stmp-slider",
                min: "0",
                max: "100",
                value: h(t).settings.volume,
                onInput: u
              }, null, 40, Eg),
              d("span", Pg, E(h(t).settings.volume), 1)
            ])
          ]),
          d("div", Ig, [
            d("div", Rg, [
              d("div", Og, E(h(g)("Default Play Mode")), 1)
            ]),
            d("div", Lg, [
              (O(), U(ue, null, nt(c, (M) => d("div", {
                key: M.value,
                class: he(["stmp-chip", { active: h(t).settings.playMode === M.value }]),
                onClick: (ee) => h(t).setPlayMode(M.value)
              }, [
                d("i", {
                  class: he(M.icon)
                }, null, 2),
                d("span", null, E(M.label), 1)
              ], 10, $g)), 64))
            ])
          ]),
          d("div", Ng, [
            d("div", Dg, [
              d("div", Fg, E(h(g)("Crossfade")), 1),
              d("div", Ug, E(h(g)("Smoothly fade in when starting playback and fade out when pausing or switching tracks")), 1)
            ]),
            de(xt, {
              "model-value": h(t).settings.crossfade,
              "onUpdate:modelValue": h(t).setCrossfade
            }, null, 8, ["model-value", "onUpdate:modelValue"])
          ]),
          d("div", Bg, [
            d("div", Hg, E(h(g)("Data Sources")), 1)
          ]),
          d("div", jg, [
            d("div", Vg, [
              d("div", Wg, E(h(g)("NetEase Music")), 1),
              d("div", zg, E(h(g)("Select official or self-hosted Worker")), 1)
            ]),
            d("div", Gg, [
              (O(), U(ue, null, nt(p, (M) => d("div", {
                key: M.value,
                class: he(["stmp-chip", { active: h(t).settings.neteaseMode === M.value }]),
                onClick: (ee) => h(t).setNeteaseMode(M.value)
              }, [
                d("span", null, E(M.label), 1)
              ], 10, Kg)), 64))
            ])
          ]),
          h(t).settings.neteaseMode === "self" ? (O(), U("div", Yg, [
            d("div", Jg, [
              d("div", qg, E(h(g)("Worker URL")), 1),
              d("div", Xg, E(h(g)("Your Cloudflare Worker deployment URL")), 1)
            ]),
            d("input", {
              class: "text_pole stmp-text-input",
              value: h(t).settings.neteaseWorkerURL,
              placeholder: h(g)("Worker URL"),
              onChange: _[0] || (_[0] = (M) => h(t).setNeteaseWorkerURL(M.target.value))
            }, null, 40, Zg)
          ])) : Ce("", !0),
          d("div", Qg, [
            d("div", em, [
              d("div", tm, [
                cs(E(h(g)("MUSIC_U Cookie")) + " ", 1),
                d("i", {
                  class: "fa-solid fa-circle-info stmp-help-tip",
                  title: h(g)("Cookie privacy hint")
                }, null, 8, sm)
              ]),
              d("div", nm, E(h(g)("Paste cookie from music.163.com")), 1)
            ]),
            d("div", om, [
              d("input", {
                type: "password",
                class: "text_pole",
                value: h(t).settings.neteaseCookie,
                placeholder: w.value ? "••••••••" : h(g)("Paste MUSIC_U cookie value here"),
                onChange: P
              }, null, 40, im),
              d("div", {
                class: he(["menu_button menu_button_icon stmp-action-btn", { "stmp-spin": y.value, "stmp-verify-ok": k.value.ok, "stmp-verify-warn": k.value.warn }]),
                onClick: V
              }, [
                d("i", {
                  class: he(k.value.icon)
                }, null, 2)
              ], 2)
            ])
          ]),
          d("div", rm, [
            d("div", am, [
              d("div", lm, E(h(g)("Upload")), 1),
              d("div", cm, E(h(g)("Upload and play songs from the server")), 1)
            ]),
            de(xt, {
              "model-value": !!h(t).settings.providers.find((M) => M.id === "local")?.enabled,
              "onUpdate:modelValue": v
            }, null, 8, ["model-value"])
          ]),
          d("div", um, [
            d("div", dm, E(h(g)("Playlist Management")), 1)
          ]),
          d("div", fm, [
            d("div", pm, [
              d("div", hm, E(h(g)("Export playlist")), 1),
              d("div", gm, E(h(g)("Save network playlist to a JSON file")), 1)
            ]),
            d("div", {
              class: "menu_button menu_button_icon stmp-action-btn",
              onClick: re
            }, [..._[7] || (_[7] = [
              d("i", { class: "fa-solid fa-file-export" }, null, -1)
            ])])
          ]),
          d("div", mm, [
            d("div", ym, [
              d("div", vm, E(h(g)("Import playlist")), 1),
              d("div", _m, E(h(g)("Load network playlist from a JSON file")), 1)
            ]),
            d("div", {
              class: "menu_button menu_button_icon stmp-action-btn",
              onClick: _e
            }, [..._[8] || (_[8] = [
              d("i", { class: "fa-solid fa-file-import" }, null, -1)
            ])])
          ])
        ], 512), [
          [hn, n.value === "playback"]
        ]),
        Os(d("div", wm, [
          d("div", bm, [
            d("div", xm, [
              d("div", Sm, E(h(g)("AI BGM")), 1),
              d("div", km, E(h(g)("Enable AI-driven background music selection")), 1)
            ]),
            de(xt, {
              "model-value": h(t).settings.aiMode !== "off",
              "onUpdate:modelValue": _[1] || (_[1] = (M) => x(M))
            }, null, 8, ["model-value"])
          ]),
          h(t).settings.aiMode !== "off" ? (O(), U(ue, { key: 0 }, [
            d("div", Cm, [
              d("div", Am, [
                d("div", Tm, E(h(g)("AI Mode")), 1),
                d("div", Mm, E(h(g)("Choose how AI selects background music")), 1)
              ]),
              d("div", Em, [
                (O(), U(ue, null, nt(b, (M) => d("div", {
                  key: M.value,
                  class: he(["stmp-chip", { active: h(t).settings.aiMode === M.value }]),
                  onClick: (ee) => S(M.value)
                }, [
                  d("i", {
                    class: he(M.icon)
                  }, null, 2),
                  d("span", null, E(M.label), 1)
                ], 10, Pm)), 64))
              ])
            ]),
            h(t).settings.aiMode === "function_call" ? (O(), U(ue, { key: 0 }, [
              d("div", Im, [
                d("div", Rm, [
                  d("div", Om, E(h(g)("Custom API")), 1),
                  d("div", Lm, E(h(g)("Use a separate API endpoint for BGM agent loop instead of main API function calling")), 1)
                ]),
                de(xt, {
                  "model-value": h(t).settings.aiUseCustomApi,
                  "onUpdate:modelValue": T
                }, null, 8, ["model-value"])
              ]),
              h(t).settings.aiUseCustomApi ? (O(), U(ue, { key: 0 }, [
                d("div", $m, [
                  d("div", Nm, [
                    d("div", Dm, E(h(g)("API URL")), 1),
                    d("div", Fm, E(h(g)("OpenAI-compatible endpoint that supports tool calling")), 1)
                  ]),
                  d("input", {
                    class: "text_pole stmp-text-input",
                    value: h(t).settings.aiApiUrl,
                    placeholder: "",
                    onChange: _[2] || (_[2] = (M) => h(t).setAiApiUrl(M.target.value.trim()))
                  }, null, 40, Um)
                ]),
                d("div", Bm, [
                  d("div", Hm, [
                    d("div", jm, E(h(g)("API Key")), 1),
                    d("div", Vm, E(h(g)("Bearer token for the custom endpoint")), 1)
                  ]),
                  d("input", {
                    type: "password",
                    class: "text_pole stmp-text-input",
                    value: h(t).settings.aiApiKey,
                    placeholder: "",
                    onChange: _[3] || (_[3] = (M) => h(t).setAiApiKey(M.target.value.trim()))
                  }, null, 40, Wm)
                ]),
                d("div", zm, [
                  d("div", Gm, [
                    d("div", Km, E(h(g)("Model")), 1),
                    d("div", Ym, E(h(g)("Model that supports tool calling")), 1)
                  ]),
                  d("div", Jm, [
                    de(Wh, {
                      "model-value": h(t).settings.aiModel,
                      options: Y.value,
                      placeholder: "",
                      "onUpdate:modelValue": _[4] || (_[4] = (M) => h(t).setAiModel(M))
                    }, null, 8, ["model-value", "options"]),
                    d("div", {
                      class: he(["menu_button menu_button_icon stmp-model-fetch", { "stmp-spin": H.value }]),
                      title: h(g)("Connect"),
                      onClick: J
                    }, [..._[9] || (_[9] = [
                      d("i", { class: "fa-solid fa-plug" }, null, -1)
                    ])], 10, qm)
                  ])
                ]),
                d("div", Xm, [
                  d("div", Zm, [
                    d("div", Qm, E(h(g)("Context Messages")), 1),
                    d("div", ey, E(h(g)("Number of recent chat messages to send to AI")), 1)
                  ]),
                  d("div", ty, [
                    d("input", {
                      type: "range",
                      class: "stmp-slider",
                      min: "2",
                      max: "20",
                      value: h(t).settings.aiContextMessages,
                      onInput: B
                    }, null, 40, sy),
                    d("span", ny, E(h(t).settings.aiContextMessages), 1)
                  ])
                ]),
                d("div", oy, [
                  d("div", iy, [
                    d("div", ry, E(h(g)("Auto Trigger")), 1),
                    d("div", ay, E(h(g)("Automatically analyze new messages and select music")), 1)
                  ]),
                  de(xt, {
                    "model-value": h(t).settings.aiAutoTrigger,
                    "onUpdate:modelValue": _[5] || (_[5] = (M) => h(t).setAiAutoTrigger(M))
                  }, null, 8, ["model-value"])
                ]),
                h(t).settings.aiAutoTrigger ? (O(), U("div", ly, [
                  d("div", cy, [
                    d("div", uy, E(h(g)("Trigger on Greeting")), 1),
                    d("div", dy, E(h(g)("Analyze BGM when loading a character card (first message)")), 1)
                  ]),
                  de(xt, {
                    "model-value": h(t).settings.aiTriggerOnGreeting,
                    "onUpdate:modelValue": _[6] || (_[6] = (M) => h(t).setAiTriggerOnGreeting(M))
                  }, null, 8, ["model-value"])
                ])) : Ce("", !0)
              ], 64)) : Ce("", !0)
            ], 64)) : Ce("", !0),
            h(t).settings.aiMode === "together" ? (O(), U(ue, { key: 1 }, [
              d("div", fy, [
                d("div", py, [
                  d("div", hy, E(h(g)("Prompt Role")), 1),
                  d("div", gy, E(h(g)("Role used when injecting BGM instructions into the main AI")), 1)
                ]),
                d("div", my, [
                  (O(!0), U(ue, null, nt([{ v: "system", l: h(g)("System") }, { v: "user", l: h(g)("User") }], (M) => (O(), U("div", {
                    key: M.v,
                    class: he(["stmp-chip", { active: h(t).settings.togetherPromptRole === M.v }]),
                    onClick: (ee) => h(t).setTogetherPromptRole(M.v)
                  }, [
                    d("span", null, E(M.l), 1)
                  ], 10, yy))), 128))
                ])
              ]),
              d("div", vy, [
                d("div", _y, [
                  d("div", wy, E(h(g)("Custom Prompt")), 1),
                  d("div", by, [
                    cs(E(h(g)("Edit the BGM instruction prompt. Use macros like ")) + " ", 1),
                    _[10] || (_[10] = d("code", null, "{{xiaoyueCurrentSong}}", -1)),
                    cs(" " + E(h(g)(" for dynamic values.")), 1)
                  ])
                ]),
                de(xt, {
                  "model-value": h(t).settings.togetherCustomPromptEnabled,
                  "onUpdate:modelValue": h(t).setTogetherCustomPromptEnabled
                }, null, 8, ["model-value", "onUpdate:modelValue"])
              ]),
              h(t).settings.togetherCustomPromptEnabled ? (O(), U("div", xy, [
                d("div", Sy, [
                  d("div", ky, E(h(g)("Edit Prompt")), 1),
                  d("div", Cy, E(h(g)("Click to edit the BGM instruction prompt")), 1)
                ]),
                d("div", {
                  class: "menu_button menu_button_icon stmp-action-btn",
                  title: h(g)("Edit Prompt"),
                  onClick: F
                }, [..._[11] || (_[11] = [
                  d("i", { class: "fa-solid fa-pen-to-square" }, null, -1)
                ])], 8, Ay)
              ])) : Ce("", !0)
            ], 64)) : Ce("", !0)
          ], 64)) : Ce("", !0)
        ], 512), [
          [hn, n.value === "ai"]
        ]),
        Os(d("div", Ty, [
          d("div", My, [
            d("div", Ey, [
              d("div", Py, E(h(g)("Debug Mode")), 1),
              d("div", Iy, E(h(g)("Enable verbose console logging for troubleshooting")), 1)
            ]),
            de(xt, {
              "model-value": h(t).settings.debug,
              "onUpdate:modelValue": h(t).setDebug
            }, null, 8, ["model-value", "onUpdate:modelValue"])
          ]),
          _[18] || (_[18] = d("div", { class: "stmp-separator" }, null, -1)),
          d("div", Ry, [
            d("div", Oy, [
              d("div", Ly, E(h(g)("Export data")), 1),
              d("div", $y, E(h(g)("Save your settings to a JSON file")), 1)
            ]),
            d("div", {
              class: "menu_button menu_button_icon stmp-action-btn",
              onClick: ie
            }, [..._[12] || (_[12] = [
              d("i", { class: "fa-solid fa-file-export" }, null, -1)
            ])])
          ]),
          d("div", Ny, [
            d("div", Dy, [
              d("div", Fy, E(h(g)("Import data")), 1),
              d("div", Uy, E(h(g)("Load settings from a JSON file")), 1)
            ]),
            d("div", {
              class: "menu_button menu_button_icon stmp-action-btn",
              onClick: I
            }, [..._[13] || (_[13] = [
              d("i", { class: "fa-solid fa-file-import" }, null, -1)
            ])])
          ]),
          d("div", By, [
            _[15] || (_[15] = d("div", { class: "stmp-about-icon" }, [
              d("i", { class: "fa-solid fa-music" })
            ], -1)),
            _[16] || (_[16] = d("div", { class: "stmp-about-name" }, "晓乐", -1)),
            d("div", Hy, E(h(g)("Version")) + " " + E(h(Z)), 1),
            d("div", jy, E(h(g)("A scene-aware music player extension for SillyTavern")), 1),
            d("a", {
              href: Vy,
              target: "_blank",
              rel: "noopener",
              class: "stmp-about-link"
            }, [..._[14] || (_[14] = [
              d("i", { class: "fa-brands fa-github" }, null, -1),
              d("span", null, "GitHub", -1)
            ])]),
            _[17] || (_[17] = d("div", { class: "stmp-about-copyright" }, [
              d("a", {
                href: "https://www.erocraft.com",
                target: "_blank",
                rel: "noopener"
              }, "艾萝工坊"),
              cs(" © 2015 - 2026")
            ], -1))
          ])
        ], 512), [
          [hn, n.value === "general"]
        ])
      ])
    ]));
  }
}), zy = /* @__PURE__ */ jt(Wy, [["__scopeId", "data-v-b12a7a0f"]]), Qo = [
  {
    name: "xiaoyueCurrentSong",
    description: "Name of the currently loaded track. Empty if no track is loaded.",
    fn: () => {
      try {
        return Ie().currentTrack?.name ?? "";
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
        return Ie().currentTrack?.artist ?? "";
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
        return String(Ie().isPlaying);
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
        return String(!!Ie().currentTrack);
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
        return wl(5).join(", ");
      } catch {
        return "";
      }
    }
  }
];
function Gy() {
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
function Ky() {
  const e = SillyTavern.getContext(), t = e.macros, s = e.MacrosParser;
  for (const n of Qo)
    t?.registry?.unregisterMacro ? t.registry.unregisterMacro(n.name) : s?.unregisterMacro && s.unregisterMacro(n.name);
  z.info("Macros unregistered");
}
const St = "xy", je = "晓乐", Ys = [];
function So(e) {
  return e == null ? "" : typeof e == "string" ? e : Array.isArray(e) ? e.map(String).join(" ").trim() : String(e);
}
function Yy() {
  const e = SillyTavern.getContext(), { SlashCommandParser: t, SlashCommand: s } = e, n = (o) => {
    const i = s.fromProps(o);
    if (t.addCommandObject(i), typeof o.name == "string" && Ys.push(o.name), Array.isArray(o.aliases))
      for (const r of o.aliases) Ys.push(String(r));
  };
  n({
    name: `${St}play`,
    aliases: [`${St}p`],
    helpString: "Toggle play/pause. With a song name argument, searches and plays it immediately.",
    callback: async (o, i) => {
      const r = So(i).trim(), a = Ie();
      if (!r)
        return await a.togglePlay(), typeof toastr < "u" && toastr.success(a.isPlaying ? g("Now playing") : g("Paused"), je), "";
      const l = ge(), c = l.neteaseStatus;
      if (c !== "ok") {
        if (typeof toastr < "u") {
          const b = g(c === "no-cookie" ? "Cookie not configured" : c === "expired" ? "Cookie expired" : "Cookie invalid");
          toastr.warning(b, je);
        }
        return "";
      }
      const p = await qt(l.settings).searchAndResolve(r);
      return p ? (p.name = r, await a.loadAndPlay(p), typeof toastr < "u" && toastr.success(`${g("Now playing")}：${p.name}`, je)) : typeof toastr < "u" && toastr.warning(`${g("Cannot play")}：${r}`, je), "";
    }
  }), n({
    name: `${St}next`,
    aliases: [`${St}n`],
    helpString: "Skip to the next track.",
    callback: async () => {
      const o = tt();
      o.next();
      const i = o.current;
      return i && typeof toastr < "u" && toastr.success(`${g("Now playing")}：${i.song}`, je), "";
    }
  }), n({
    name: `${St}prev`,
    aliases: [`${St}pp`],
    helpString: "Go back to the previous track.",
    callback: async () => {
      const o = tt();
      o.prev();
      const i = o.current;
      return i && typeof toastr < "u" && toastr.success(`${g("Now playing")}：${i.song}`, je), "";
    }
  }), n({
    name: `${St}vol`,
    helpString: "Get or set the player volume (0-100). No argument shows the current volume.",
    callback: async (o, i) => {
      const r = So(i).trim(), a = Ie();
      if (!r)
        return String(a.volume);
      const l = parseInt(r, 10);
      return Number.isNaN(l) || l < 0 || l > 100 ? (typeof toastr < "u" && toastr.warning(g("Volume must be 0-100"), je), "") : (a.setVolume(l), ge().setVolume(l), typeof toastr < "u" && toastr.success(`${g("Volume set to")} ${l}`, je), "");
    }
  }), n({
    name: `${St}add`,
    helpString: "Search for a song and add it to the playlist.",
    callback: async (o, i) => {
      const r = So(i).trim();
      if (!r)
        return typeof toastr < "u" && toastr.warning(g("Enter song name"), je), "";
      const a = ge(), l = a.neteaseStatus;
      if (l !== "ok") {
        if (typeof toastr < "u") {
          const p = g(l === "no-cookie" ? "Cookie not configured" : l === "expired" ? "Cookie expired" : "Cookie invalid");
          toastr.warning(p, je);
        }
        return "";
      }
      const u = await qt(a.settings).searchAll(r);
      return u.length === 0 ? (typeof toastr < "u" && toastr.info(g("No results"), je), "") : (tt().addFromSearch(u[0], !1), typeof toastr < "u" && toastr.success(`${g("Added to playlist")}：${u[0].name} - ${u[0].artist}`, je), "");
    }
  }), n({
    name: `${St}bgm`,
    helpString: "Manually trigger AI BGM analysis for the current conversation.",
    callback: async () => {
      const o = Cn();
      if (!o)
        return typeof toastr < "u" && toastr.warning(g("AI BGM off"), je), "";
      const i = ge();
      return !i.settings.aiApiUrl || !i.settings.aiModel ? (typeof toastr < "u" && toastr.warning(g("AI not configured"), je), "") : (typeof toastr < "u" && toastr.info(g("AI analyzing"), je), await o.manualTrigger(), "");
    }
  }), n({
    name: `${St}now`,
    helpString: "Show information about the currently playing track.",
    callback: async () => {
      const i = Ie().currentTrack;
      if (!i)
        return typeof toastr < "u" && toastr.info(g("No Song"), je), "";
      const r = i.artist ? ` - ${i.artist}` : "";
      return typeof toastr < "u" && toastr.info(`${g("Now playing track")}：${i.name}${r}`, je), `${i.name}${r}`;
    }
  }), z.info("Slash commands registered: " + Ys.join(", "));
}
function Jy() {
  const e = SillyTavern.getContext(), { SlashCommandParser: t } = e;
  if (t?.commands) {
    for (const s of Ys)
      s in t.commands && delete t.commands[s];
    Ys.length = 0, z.info("Slash commands unregistered");
  }
}
let xs = null, Js = null, qs = null, Ss = null, Vn = null, Wn = null;
const qy = `
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
function Xy() {
  const e = $("#extensions_settings2");
  if (!e || !e.length) {
    z.warn("Settings container #extensions_settings2 not found");
    return;
  }
  if (e.append(qy), qs = e.children(".inline-drawer").last()[0] ?? null, !qs) return;
  const t = qs.querySelector("#stmp-settings-mount");
  t && Vn && (Ss = Ya(zy), Ss.use(Vn), Ss.mount(t));
}
function Zy() {
  Ss && (Ss.unmount(), Ss = null), qs?.remove(), qs = null;
}
async function tv() {
  try {
    const e = document.createElement("div");
    e.id = "st-little-player-root", document.body.appendChild(e);
    const t = Sd();
    Vn = t, xs = Ya(Xp), xs.use(t), xs.mount(e);
    const s = ge(), n = fh();
    s.init(n);
    const o = Ie();
    o.init(), o.setVolume(s.settings.volume), tt().init(), Xy();
    const r = SillyTavern.getContext();
    Js = () => {
      Gy(), Yy(), Wn = new Nh(), Wn.init();
    }, r.eventSource.on(r.event_types.APP_READY, Js), z.info("Player loaded");
  } catch (e) {
    z.error("Init failed:", e);
  }
}
function Qy() {
  if (z.info("Player destroyed"), Js) {
    try {
      const t = SillyTavern.getContext();
      t.eventSource.removeListener(t.event_types.APP_READY, Js);
    } catch {
    }
    Js = null;
  }
  if (Ky(), Jy(), Wn?.destroy(), Wn = null, xs) {
    try {
      Ie().destroy();
    } catch {
    }
    xs.unmount(), xs = null;
  }
  const e = document.getElementById("st-little-player-root");
  e && e.remove(), Zy(), Vn = null;
}
function sv() {
  Qy();
}
async function nv() {
  try {
    const e = SillyTavern.getContext(), t = e.extensionSettings[`${$t}-playlist`];
    if (t && typeof t == "object") {
      const n = t.server;
      if (Array.isArray(n)) {
        const o = n.map((i) => i?.serverPath).filter((i) => !!i);
        await Promise.all(o.map((i) => ml(i).catch((r) => {
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
  nv as clean,
  Qy as destroy,
  sv as disable,
  tv as init
};
