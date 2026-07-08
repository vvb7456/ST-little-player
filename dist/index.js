/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Mi(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const we = {}, cs = [], _t = () => {
}, tr = () => !1, Pn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), In = (e) => e.startsWith("onUpdate:"), $e = Object.assign, Ei = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Kl = Object.prototype.hasOwnProperty, ge = (e, t) => Kl.call(e, t), te = Array.isArray, us = (e) => Hs(e) === "[object Map]", sr = (e) => Hs(e) === "[object Set]", Yi = (e) => Hs(e) === "[object Date]", le = (e) => typeof e == "function", Te = (e) => typeof e == "string", st = (e) => typeof e == "symbol", me = (e) => e !== null && typeof e == "object", nr = (e) => (me(e) || le(e)) && le(e.then) && le(e.catch), ir = Object.prototype.toString, Hs = (e) => ir.call(e), zl = (e) => Hs(e).slice(8, -1), or = (e) => Hs(e) === "[object Object]", Rn = (e) => Te(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ts = /* @__PURE__ */ Mi(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ln = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Jl = /-\w/g, ot = Ln(
  (e) => e.replace(Jl, (t) => t.slice(1).toUpperCase())
), Yl = /\B([A-Z])/g, Vt = Ln(
  (e) => e.replace(Yl, "-$1").toLowerCase()
), rr = Ln((e) => e.charAt(0).toUpperCase() + e.slice(1)), Kn = Ln(
  (e) => e ? `on${rr(e)}` : ""
), vt = (e, t) => !Object.is(e, t), on = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, lr = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, Pi = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ql = (e) => {
  const t = Te(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let qi;
const $n = () => qi || (qi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ut(e) {
  if (te(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], i = Te(n) ? ea(n) : Ut(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Te(e) || me(e))
    return e;
}
const Xl = /;(?![^(]*\))/g, Zl = /:([^]+)/, Ql = /\/\*[^]*?\*\//g;
function ea(e) {
  const t = {};
  return e.replace(Ql, "").split(Xl).forEach((s) => {
    if (s) {
      const n = s.split(Zl);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function ue(e) {
  let t = "";
  if (Te(e))
    t = e;
  else if (te(e))
    for (let s = 0; s < e.length; s++) {
      const n = ue(e[s]);
      n && (t += n + " ");
    }
  else if (me(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const ta = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", sa = /* @__PURE__ */ Mi(ta);
function ar(e) {
  return !!e || e === "";
}
function na(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = Ii(e[n], t[n]);
  return s;
}
function Ii(e, t) {
  if (e === t) return !0;
  let s = Yi(e), n = Yi(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = st(e), n = st(t), s || n)
    return e === t;
  if (s = te(e), n = te(t), s || n)
    return s && n ? na(e, t) : !1;
  if (s = me(e), n = me(t), s || n) {
    if (!s || !n)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const r in e) {
      const l = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
      if (l && !a || !l && a || !Ii(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const cr = (e) => !!(e && e.__v_isRef === !0), O = (e) => Te(e) ? e : e == null ? "" : te(e) || me(e) && (e.toString === ir || !le(e.toString)) ? cr(e) ? O(e.value) : JSON.stringify(e, ur, 2) : String(e), ur = (e, t) => cr(t) ? ur(e, t.value) : us(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], o) => (s[zn(n, o) + " =>"] = i, s),
    {}
  )
} : sr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => zn(s))
} : st(t) ? zn(t) : me(t) && !te(t) && !or(t) ? String(t) : t, zn = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    st(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Re;
class fr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Re && (Re.active ? (this.parent = Re, this.index = (Re.scopes || (Re.scopes = [])).push(
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
      const s = Re;
      try {
        return Re = this, t();
      } finally {
        Re = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Re, Re = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Re === this)
        Re = this.prevScope;
      else {
        let t = Re;
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
function pr() {
  return Re;
}
function ia(e, t = !1) {
  Re && Re.cleanups.push(e);
}
let Se;
const Jn = /* @__PURE__ */ new WeakSet();
class hr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Re && (Re.active ? Re.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Jn.has(this) && (Jn.delete(this), this.trigger()));
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
    this.flags |= 2, Xi(this), yr(this);
    const t = Se, s = rt;
    Se = this, rt = !0;
    try {
      return this.fn();
    } finally {
      vr(this), Se = t, rt = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        $i(t);
      this.deps = this.depsTail = void 0, Xi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Jn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ai(this) && this.run();
  }
  get dirty() {
    return ai(this);
  }
}
let gr = 0, As, Cs;
function mr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Cs, Cs = e;
    return;
  }
  e.next = As, As = e;
}
function Ri() {
  gr++;
}
function Li() {
  if (--gr > 0)
    return;
  if (Cs) {
    let t = Cs;
    for (Cs = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; As; ) {
    let t = As;
    for (As = void 0; t; ) {
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
function yr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function vr(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === s && (s = i), $i(n), oa(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = s;
}
function ai(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (_r(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function _r(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ns) || (e.globalVersion = Ns, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ai(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = Se, n = rt;
  Se = e, rt = !0;
  try {
    yr(e);
    const i = e.fn(e._value);
    (t.version === 0 || vt(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Se = s, rt = n, vr(e), e.flags &= -3;
  }
}
function $i(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let o = s.computed.deps; o; o = o.nextDep)
      $i(o, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function oa(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let rt = !0;
const br = [];
function bt() {
  br.push(rt), rt = !1;
}
function wt() {
  const e = br.pop();
  rt = e === void 0 ? !0 : e;
}
function Xi(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = Se;
    Se = void 0;
    try {
      t();
    } finally {
      Se = s;
    }
  }
}
let Ns = 0;
class ra {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Oi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Se || !rt || Se === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== Se)
      s = this.activeLink = new ra(Se, this), Se.deps ? (s.prevDep = Se.depsTail, Se.depsTail.nextDep = s, Se.depsTail = s) : Se.deps = Se.depsTail = s, wr(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = Se.depsTail, s.nextDep = void 0, Se.depsTail.nextDep = s, Se.depsTail = s, Se.deps === s && (Se.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, Ns++, this.notify(t);
  }
  notify(t) {
    Ri();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Li();
    }
  }
}
function wr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        wr(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const fn = /* @__PURE__ */ new WeakMap(), es = /* @__PURE__ */ Symbol(
  ""
), ci = /* @__PURE__ */ Symbol(
  ""
), Ds = /* @__PURE__ */ Symbol(
  ""
);
function Ue(e, t, s) {
  if (rt && Se) {
    let n = fn.get(e);
    n || fn.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(s);
    i || (n.set(s, i = new Oi()), i.map = n, i.key = s), i.track();
  }
}
function kt(e, t, s, n, i, o) {
  const r = fn.get(e);
  if (!r) {
    Ns++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (Ri(), t === "clear")
    r.forEach(l);
  else {
    const a = te(e), u = a && Rn(s);
    if (a && s === "length") {
      const f = Number(n);
      r.forEach((g, b) => {
        (b === "length" || b === Ds || !st(b) && b >= f) && l(g);
      });
    } else
      switch ((s !== void 0 || r.has(void 0)) && l(r.get(s)), u && l(r.get(Ds)), t) {
        case "add":
          a ? u && l(r.get("length")) : (l(r.get(es)), us(e) && l(r.get(ci)));
          break;
        case "delete":
          a || (l(r.get(es)), us(e) && l(r.get(ci)));
          break;
        case "set":
          us(e) && l(r.get(es));
          break;
      }
  }
  Li();
}
function la(e, t) {
  const s = fn.get(e);
  return s && s.get(t);
}
function ns(e) {
  const t = /* @__PURE__ */ de(e);
  return t === e ? t : (Ue(t, "iterate", Ds), /* @__PURE__ */ Xe(e) ? t : t.map(at));
}
function On(e) {
  return Ue(e = /* @__PURE__ */ de(e), "iterate", Ds), e;
}
function mt(e, t) {
  return /* @__PURE__ */ Pt(e) ? hs(/* @__PURE__ */ Et(e) ? at(t) : t) : at(t);
}
const aa = {
  __proto__: null,
  [Symbol.iterator]() {
    return Yn(this, Symbol.iterator, (e) => mt(this, e));
  },
  concat(...e) {
    return ns(this).concat(
      ...e.map((t) => te(t) ? ns(t) : t)
    );
  },
  entries() {
    return Yn(this, "entries", (e) => (e[1] = mt(this, e[1]), e));
  },
  every(e, t) {
    return St(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return St(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => mt(this, n)),
      arguments
    );
  },
  find(e, t) {
    return St(
      this,
      "find",
      e,
      t,
      (s) => mt(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return St(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return St(
      this,
      "findLast",
      e,
      t,
      (s) => mt(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return St(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return St(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return qn(this, "includes", e);
  },
  indexOf(...e) {
    return qn(this, "indexOf", e);
  },
  join(e) {
    return ns(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return qn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return St(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ms(this, "pop");
  },
  push(...e) {
    return ms(this, "push", e);
  },
  reduce(e, ...t) {
    return Zi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Zi(this, "reduceRight", e, t);
  },
  shift() {
    return ms(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return St(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ms(this, "splice", e);
  },
  toReversed() {
    return ns(this).toReversed();
  },
  toSorted(e) {
    return ns(this).toSorted(e);
  },
  toSpliced(...e) {
    return ns(this).toSpliced(...e);
  },
  unshift(...e) {
    return ms(this, "unshift", e);
  },
  values() {
    return Yn(this, "values", (e) => mt(this, e));
  }
};
function Yn(e, t, s) {
  const n = On(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ Xe(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = s(o.value)), o;
  }), i;
}
const ca = Array.prototype;
function St(e, t, s, n, i, o) {
  const r = On(e), l = r !== e && !/* @__PURE__ */ Xe(e), a = r[t];
  if (a !== ca[t]) {
    const g = a.apply(e, o);
    return l ? at(g) : g;
  }
  let u = s;
  r !== e && (l ? u = function(g, b) {
    return s.call(this, mt(e, g), b, e);
  } : s.length > 2 && (u = function(g, b) {
    return s.call(this, g, b, e);
  }));
  const f = a.call(r, u, n);
  return l && i ? i(f) : f;
}
function Zi(e, t, s, n) {
  const i = On(e), o = i !== e && !/* @__PURE__ */ Xe(e);
  let r = s, l = !1;
  i !== e && (o ? (l = n.length === 0, r = function(u, f, g) {
    return l && (l = !1, u = mt(e, u)), s.call(this, u, mt(e, f), g, e);
  }) : s.length > 3 && (r = function(u, f, g) {
    return s.call(this, u, f, g, e);
  }));
  const a = i[t](r, ...n);
  return l ? mt(e, a) : a;
}
function qn(e, t, s) {
  const n = /* @__PURE__ */ de(e);
  Ue(n, "iterate", Ds);
  const i = n[t](...s);
  return (i === -1 || i === !1) && /* @__PURE__ */ Dn(s[0]) ? (s[0] = /* @__PURE__ */ de(s[0]), n[t](...s)) : i;
}
function ms(e, t, s = []) {
  bt(), Ri();
  const n = (/* @__PURE__ */ de(e))[t].apply(e, s);
  return Li(), wt(), n;
}
const ua = /* @__PURE__ */ Mi("__proto__,__v_isRef,__isVue"), Sr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(st)
);
function fa(e) {
  st(e) || (e = String(e));
  const t = /* @__PURE__ */ de(this);
  return Ue(t, "has", e), t.hasOwnProperty(e);
}
class xr {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._isShallow = s;
  }
  get(t, s, n) {
    if (s === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, o = this._isShallow;
    if (s === "__v_isReactive")
      return !i;
    if (s === "__v_isReadonly")
      return i;
    if (s === "__v_isShallow")
      return o;
    if (s === "__v_raw")
      return n === (i ? o ? wa : kr : o ? Cr : Ar).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const r = te(t);
    if (!i) {
      let a;
      if (r && (a = aa[s]))
        return a;
      if (s === "hasOwnProperty")
        return fa;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ce(t) ? t : n
    );
    if ((st(s) ? Sr.has(s) : ua(s)) || (i || Ue(t, "get", s), o))
      return l;
    if (/* @__PURE__ */ Ce(l)) {
      const a = r && Rn(s) ? l : l.value;
      return i && me(a) ? /* @__PURE__ */ fi(a) : a;
    }
    return me(l) ? i ? /* @__PURE__ */ fi(l) : /* @__PURE__ */ Nn(l) : l;
  }
}
class Tr extends xr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, i) {
    let o = t[s];
    const r = te(t) && Rn(s);
    if (!this._isShallow) {
      const u = /* @__PURE__ */ Pt(o);
      if (!/* @__PURE__ */ Xe(n) && !/* @__PURE__ */ Pt(n) && (o = /* @__PURE__ */ de(o), n = /* @__PURE__ */ de(n)), !r && /* @__PURE__ */ Ce(o) && !/* @__PURE__ */ Ce(n))
        return u || (o.value = n), !0;
    }
    const l = r ? Number(s) < t.length : ge(t, s), a = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ Ce(t) ? t : i
    );
    return t === /* @__PURE__ */ de(i) && a && (l ? vt(n, o) && kt(t, "set", s, n) : kt(t, "add", s, n)), a;
  }
  deleteProperty(t, s) {
    const n = ge(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && kt(t, "delete", s, void 0), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!st(s) || !Sr.has(s)) && Ue(t, "has", s), n;
  }
  ownKeys(t) {
    return Ue(
      t,
      "iterate",
      te(t) ? "length" : es
    ), Reflect.ownKeys(t);
  }
}
class da extends xr {
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
const pa = /* @__PURE__ */ new Tr(), ha = /* @__PURE__ */ new da(), ga = /* @__PURE__ */ new Tr(!0);
const ui = (e) => e, Js = (e) => Reflect.getPrototypeOf(e);
function ma(e, t, s) {
  return function(...n) {
    const i = this.__v_raw, o = /* @__PURE__ */ de(i), r = us(o), l = e === "entries" || e === Symbol.iterator && r, a = e === "keys" && r, u = i[e](...n), f = s ? ui : t ? hs : at;
    return !t && Ue(
      o,
      "iterate",
      a ? ci : es
    ), $e(
      // inheriting all iterator properties
      Object.create(u),
      {
        // iterator protocol
        next() {
          const { value: g, done: b } = u.next();
          return b ? { value: g, done: b } : {
            value: l ? [f(g[0]), f(g[1])] : f(g),
            done: b
          };
        }
      }
    );
  };
}
function Ys(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ya(e, t) {
  const s = {
    get(i) {
      const o = this.__v_raw, r = /* @__PURE__ */ de(o), l = /* @__PURE__ */ de(i);
      e || (vt(i, l) && Ue(r, "get", i), Ue(r, "get", l));
      const { has: a } = Js(r), u = t ? ui : e ? hs : at;
      if (a.call(r, i))
        return u(o.get(i));
      if (a.call(r, l))
        return u(o.get(l));
      o !== r && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Ue(/* @__PURE__ */ de(i), "iterate", es), i.size;
    },
    has(i) {
      const o = this.__v_raw, r = /* @__PURE__ */ de(o), l = /* @__PURE__ */ de(i);
      return e || (vt(i, l) && Ue(r, "has", i), Ue(r, "has", l)), i === l ? o.has(i) : o.has(i) || o.has(l);
    },
    forEach(i, o) {
      const r = this, l = r.__v_raw, a = /* @__PURE__ */ de(l), u = t ? ui : e ? hs : at;
      return !e && Ue(a, "iterate", es), l.forEach((f, g) => i.call(o, u(f), u(g), r));
    }
  };
  return $e(
    s,
    e ? {
      add: Ys("add"),
      set: Ys("set"),
      delete: Ys("delete"),
      clear: Ys("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ de(this), r = Js(o), l = /* @__PURE__ */ de(i), a = !t && !/* @__PURE__ */ Xe(i) && !/* @__PURE__ */ Pt(i) ? l : i;
        return r.has.call(o, a) || vt(i, a) && r.has.call(o, i) || vt(l, a) && r.has.call(o, l) || (o.add(a), kt(o, "add", a, a)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ Xe(o) && !/* @__PURE__ */ Pt(o) && (o = /* @__PURE__ */ de(o));
        const r = /* @__PURE__ */ de(this), { has: l, get: a } = Js(r);
        let u = l.call(r, i);
        u || (i = /* @__PURE__ */ de(i), u = l.call(r, i));
        const f = a.call(r, i);
        return r.set(i, o), u ? vt(o, f) && kt(r, "set", i, o) : kt(r, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ de(this), { has: r, get: l } = Js(o);
        let a = r.call(o, i);
        a || (i = /* @__PURE__ */ de(i), a = r.call(o, i)), l && l.call(o, i);
        const u = o.delete(i);
        return a && kt(o, "delete", i, void 0), u;
      },
      clear() {
        const i = /* @__PURE__ */ de(this), o = i.size !== 0, r = i.clear();
        return o && kt(
          i,
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
  ].forEach((i) => {
    s[i] = ma(i, e, t);
  }), s;
}
function Ni(e, t) {
  const s = ya(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    ge(s, i) && i in n ? s : n,
    i,
    o
  );
}
const va = {
  get: /* @__PURE__ */ Ni(!1, !1)
}, _a = {
  get: /* @__PURE__ */ Ni(!1, !0)
}, ba = {
  get: /* @__PURE__ */ Ni(!0, !1)
};
const Ar = /* @__PURE__ */ new WeakMap(), Cr = /* @__PURE__ */ new WeakMap(), kr = /* @__PURE__ */ new WeakMap(), wa = /* @__PURE__ */ new WeakMap();
function Sa(e) {
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
function Nn(e) {
  return /* @__PURE__ */ Pt(e) ? e : Di(
    e,
    !1,
    pa,
    va,
    Ar
  );
}
// @__NO_SIDE_EFFECTS__
function xa(e) {
  return Di(
    e,
    !1,
    ga,
    _a,
    Cr
  );
}
// @__NO_SIDE_EFFECTS__
function fi(e) {
  return Di(
    e,
    !0,
    ha,
    ba,
    kr
  );
}
function Di(e, t, s, n, i) {
  if (!me(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const r = Sa(zl(e));
  if (r === 0)
    return e;
  const l = new Proxy(
    e,
    r === 2 ? n : s
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function Et(e) {
  return /* @__PURE__ */ Pt(e) ? /* @__PURE__ */ Et(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Pt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Xe(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Dn(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function de(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ de(t) : e;
}
function Fi(e) {
  return !ge(e, "__v_skip") && Object.isExtensible(e) && lr(e, "__v_skip", !0), e;
}
const at = (e) => me(e) ? /* @__PURE__ */ Nn(e) : e, hs = (e) => me(e) ? /* @__PURE__ */ fi(e) : e;
// @__NO_SIDE_EFFECTS__
function Ce(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  return Ta(e, !1);
}
function Ta(e, t) {
  return /* @__PURE__ */ Ce(e) ? e : new Aa(e, t);
}
class Aa {
  constructor(t, s) {
    this.dep = new Oi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ de(t), this._value = s ? t : at(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Xe(t) || /* @__PURE__ */ Pt(t);
    t = n ? t : /* @__PURE__ */ de(t), vt(t, s) && (this._rawValue = t, this._value = n ? t : at(t), this.dep.trigger());
  }
}
function h(e) {
  return /* @__PURE__ */ Ce(e) ? e.value : e;
}
const Ca = {
  get: (e, t, s) => t === "__v_raw" ? e : h(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t];
    return /* @__PURE__ */ Ce(i) && !/* @__PURE__ */ Ce(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function Mr(e) {
  return /* @__PURE__ */ Et(e) ? e : new Proxy(e, Ca);
}
// @__NO_SIDE_EFFECTS__
function ka(e) {
  const t = te(e) ? new Array(e.length) : {};
  for (const s in e)
    t[s] = Ea(e, s);
  return t;
}
class Ma {
  constructor(t, s, n) {
    this._object = t, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = st(s) ? s : String(s), this._raw = /* @__PURE__ */ de(t);
    let i = !0, o = t;
    if (!te(t) || st(this._key) || !Rn(this._key))
      do
        i = !/* @__PURE__ */ Dn(o) || /* @__PURE__ */ Xe(o);
      while (i && (o = o.__v_raw));
    this._shallow = i;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = h(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ Ce(this._raw[this._key])) {
      const s = this._object[this._key];
      if (/* @__PURE__ */ Ce(s)) {
        s.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return la(this._raw, this._key);
  }
}
function Ea(e, t, s) {
  return new Ma(e, t, s);
}
class Pa {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Oi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ns - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Se !== this)
      return mr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return _r(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Ia(e, t, s = !1) {
  let n, i;
  return le(e) ? n = e : (n = e.get, i = e.set), new Pa(n, i, s);
}
const qs = {}, dn = /* @__PURE__ */ new WeakMap();
let Yt;
function Ra(e, t = !1, s = Yt) {
  if (s) {
    let n = dn.get(s);
    n || dn.set(s, n = []), n.push(e);
  }
}
function La(e, t, s = we) {
  const { immediate: n, deep: i, once: o, scheduler: r, augmentJob: l, call: a } = s, u = (B) => i ? B : /* @__PURE__ */ Xe(B) || i === !1 || i === 0 ? Mt(B, 1) : Mt(B);
  let f, g, b, y, C = !1, w = !1;
  if (/* @__PURE__ */ Ce(e) ? (g = () => e.value, C = /* @__PURE__ */ Xe(e)) : /* @__PURE__ */ Et(e) ? (g = () => u(e), C = !0) : te(e) ? (w = !0, C = e.some((B) => /* @__PURE__ */ Et(B) || /* @__PURE__ */ Xe(B)), g = () => e.map((B) => {
    if (/* @__PURE__ */ Ce(B))
      return B.value;
    if (/* @__PURE__ */ Et(B))
      return u(B);
    if (le(B))
      return a ? a(B, 2) : B();
  })) : le(e) ? t ? g = a ? () => a(e, 2) : e : g = () => {
    if (b) {
      bt();
      try {
        b();
      } finally {
        wt();
      }
    }
    const B = Yt;
    Yt = f;
    try {
      return a ? a(e, 3, [y]) : e(y);
    } finally {
      Yt = B;
    }
  } : g = _t, t && i) {
    const B = g, F = i === !0 ? 1 / 0 : i;
    g = () => Mt(B(), F);
  }
  const H = pr(), q = () => {
    f.stop(), H && H.active && Ei(H.effects, f);
  };
  if (o && t) {
    const B = t;
    t = (...F) => {
      const ee = B(...F);
      return q(), ee;
    };
  }
  let W = w ? new Array(e.length).fill(qs) : qs;
  const Z = (B) => {
    if (!(!(f.flags & 1) || !f.dirty && !B))
      if (t) {
        const F = f.run();
        if (B || i || C || (w ? F.some((ee, J) => vt(ee, W[J])) : vt(F, W))) {
          b && b();
          const ee = Yt;
          Yt = f;
          try {
            const J = [
              F,
              // pass undefined as the old value when it's changed for the first time
              W === qs ? void 0 : w && W[0] === qs ? [] : W,
              y
            ];
            W = F, a ? a(t, 3, J) : (
              // @ts-expect-error
              t(...J)
            );
          } finally {
            Yt = ee;
          }
        }
      } else
        f.run();
  };
  return l && l(Z), f = new hr(g), f.scheduler = r ? () => r(Z, !1) : Z, y = (B) => Ra(B, !1, f), b = f.onStop = () => {
    const B = dn.get(f);
    if (B) {
      if (a)
        a(B, 4);
      else
        for (const F of B) F();
      dn.delete(f);
    }
  }, t ? n ? Z(!0) : W = f.run() : r ? r(Z.bind(null, !0), !0) : f.run(), q.pause = f.pause.bind(f), q.resume = f.resume.bind(f), q.stop = q, q;
}
function Mt(e, t = 1 / 0, s) {
  if (t <= 0 || !me(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ Ce(e))
    Mt(e.value, t, s);
  else if (te(e))
    for (let n = 0; n < e.length; n++)
      Mt(e[n], t, s);
  else if (sr(e) || us(e))
    e.forEach((n) => {
      Mt(n, t, s);
    });
  else if (or(e)) {
    for (const n in e)
      Mt(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Mt(e[n], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Gs(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    Fn(i, t, s);
  }
}
function nt(e, t, s, n) {
  if (le(e)) {
    const i = Gs(e, t, s, n);
    return i && nr(i) && i.catch((o) => {
      Fn(o, t, s);
    }), i;
  }
  if (te(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(nt(e[o], t, s, n));
    return i;
  }
}
function Fn(e, t, s, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: r } = t && t.appContext.config || we;
  if (t) {
    let l = t.parent;
    const a = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; l; ) {
      const f = l.ec;
      if (f) {
        for (let g = 0; g < f.length; g++)
          if (f[g](e, a, u) === !1)
            return;
      }
      l = l.parent;
    }
    if (o) {
      bt(), Gs(o, null, 10, [
        e,
        a,
        u
      ]), wt();
      return;
    }
  }
  $a(e, s, i, n, r);
}
function $a(e, t, s, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const He = [];
let gt = -1;
const fs = [];
let Dt = null, ls = 0;
const Er = /* @__PURE__ */ Promise.resolve();
let pn = null;
function Ne(e) {
  const t = pn || Er;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Oa(e) {
  let t = gt + 1, s = He.length;
  for (; t < s; ) {
    const n = t + s >>> 1, i = He[n], o = Fs(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function Ui(e) {
  if (!(e.flags & 1)) {
    const t = Fs(e), s = He[He.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Fs(s) ? He.push(e) : He.splice(Oa(t), 0, e), e.flags |= 1, Pr();
  }
}
function Pr() {
  pn || (pn = Er.then(Rr));
}
function Na(e) {
  te(e) ? fs.push(...e) : Dt && e.id === -1 ? Dt.splice(ls + 1, 0, e) : e.flags & 1 || (fs.push(e), e.flags |= 1), Pr();
}
function Qi(e, t, s = gt + 1) {
  for (; s < He.length; s++) {
    const n = He[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      He.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Ir(e) {
  if (fs.length) {
    const t = [...new Set(fs)].sort(
      (s, n) => Fs(s) - Fs(n)
    );
    if (fs.length = 0, Dt) {
      Dt.push(...t);
      return;
    }
    for (Dt = t, ls = 0; ls < Dt.length; ls++) {
      const s = Dt[ls];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Dt = null, ls = 0;
  }
}
const Fs = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Rr(e) {
  try {
    for (gt = 0; gt < He.length; gt++) {
      const t = He[gt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Gs(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; gt < He.length; gt++) {
      const t = He[gt];
      t && (t.flags &= -2);
    }
    gt = -1, He.length = 0, Ir(), pn = null, (He.length || fs.length) && Rr();
  }
}
let tt = null, Lr = null;
function hn(e) {
  const t = tt;
  return tt = e, Lr = e && e.type.__scopeId || null, t;
}
function $r(e, t = tt, s) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && yn(-1);
    const o = hn(t);
    let r;
    try {
      r = e(...i);
    } finally {
      hn(o), n._d && yn(1);
    }
    return r;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function qt(e, t) {
  if (tt === null)
    return e;
  const s = Hn(tt), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, r, l, a = we] = t[i];
    o && (le(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Mt(r), n.push({
      dir: o,
      instance: s,
      value: r,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function Gt(e, t, s, n) {
  const i = e.dirs, o = t && t.dirs;
  for (let r = 0; r < i.length; r++) {
    const l = i[r];
    o && (l.oldValue = o[r].value);
    let a = l.dir[n];
    a && (bt(), nt(a, s, 8, [
      e.el,
      l,
      e,
      t
    ]), wt());
  }
}
function Da(e, t) {
  if (We) {
    let s = We.provides;
    const n = We.parent && We.parent.provides;
    n === s && (s = We.provides = Object.create(n)), s[e] = t;
  }
}
function ks(e, t, s = !1) {
  const n = Hi();
  if (n || ts) {
    let i = ts ? ts._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return s && le(t) ? t.call(n && n.proxy) : t;
  }
}
function Fa() {
  return !!(Hi() || ts);
}
const Ua = /* @__PURE__ */ Symbol.for("v-scx"), Ba = () => ks(Ua);
function Ke(e, t, s) {
  return Or(e, t, s);
}
function Or(e, t, s = we) {
  const { immediate: n, deep: i, flush: o, once: r } = s, l = $e({}, s), a = t && n || !t && o !== "post";
  let u;
  if (Vs) {
    if (o === "sync") {
      const y = Ba();
      u = y.__watcherHandles || (y.__watcherHandles = []);
    } else if (!a) {
      const y = () => {
      };
      return y.stop = _t, y.resume = _t, y.pause = _t, y;
    }
  }
  const f = We;
  l.call = (y, C, w) => nt(y, f, C, w);
  let g = !1;
  o === "post" ? l.scheduler = (y) => {
    je(y, f && f.suspense);
  } : o !== "sync" && (g = !0, l.scheduler = (y, C) => {
    C ? y() : Ui(y);
  }), l.augmentJob = (y) => {
    t && (y.flags |= 4), g && (y.flags |= 2, f && (y.id = f.uid, y.i = f));
  };
  const b = La(e, t, l);
  return Vs && (u ? u.push(b) : a && b()), b;
}
function Va(e, t, s) {
  const n = this.proxy, i = Te(e) ? e.includes(".") ? Nr(n, e) : () => n[e] : e.bind(n, n);
  let o;
  le(t) ? o = t : (o = t.handler, s = t);
  const r = zs(this), l = Or(i, o.bind(n), s);
  return r(), l;
}
function Nr(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < s.length && n; i++)
      n = n[s[i]];
    return n;
  };
}
const Ot = /* @__PURE__ */ new WeakMap(), Dr = /* @__PURE__ */ Symbol("_vte"), Fr = (e) => e.__isTeleport, Xt = (e) => e && (e.disabled || e.disabled === ""), ja = (e) => e && (e.defer || e.defer === ""), eo = (e) => typeof SVGElement < "u" && e instanceof SVGElement, to = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, di = (e, t) => {
  const s = e && e.to;
  return Te(s) ? t ? t(s) : null : s;
}, Ha = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, s, n, i, o, r, l, a, u) {
    const {
      mc: f,
      pc: g,
      pbc: b,
      o: { insert: y, querySelector: C, createText: w, createComment: H, parentNode: q }
    } = u, W = Xt(t.props);
    let { dynamicChildren: Z } = t;
    const B = (J, G, I) => {
      J.shapeFlag & 16 && f(
        J.children,
        G,
        I,
        i,
        o,
        r,
        l,
        a
      );
    }, F = (J = t) => {
      const G = Xt(J.props), I = J.target = di(J.props, C), V = pi(I, J, w, y);
      I && (r !== "svg" && eo(I) ? r = "svg" : r !== "mathml" && to(I) && (r = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(I), G || (B(J, I, V), ws(J, !1)));
    }, ee = (J) => {
      const G = () => {
        if (Ot.get(J) === G) {
          if (Ot.delete(J), Xt(J.props)) {
            const I = q(J.el) || s;
            B(J, I, J.anchor), ws(J, !0);
          }
          F(J);
        }
      };
      Ot.set(J, G), je(G, o);
    };
    if (e == null) {
      const J = t.el = w(""), G = t.anchor = w("");
      if (y(J, s, n), y(G, s, n), ja(t.props) || o && o.pendingBranch) {
        ee(t);
        return;
      }
      W && (B(t, s, G), ws(t, !0)), F();
    } else {
      t.el = e.el;
      const J = t.anchor = e.anchor, G = Ot.get(e);
      if (G) {
        G.flags |= 8, Ot.delete(e), ee(t);
        return;
      }
      t.targetStart = e.targetStart;
      const I = t.target = e.target, V = t.targetAnchor = e.targetAnchor, X = Xt(e.props), R = X ? s : I, E = X ? J : V;
      if (r === "svg" || eo(I) ? r = "svg" : (r === "mathml" || to(I)) && (r = "mathml"), Z ? (b(
        e.dynamicChildren,
        Z,
        R,
        i,
        o,
        r,
        l
      ), ji(e, t, !0)) : a || g(
        e,
        t,
        R,
        E,
        i,
        o,
        r,
        l,
        !1
      ), W)
        X ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Xs(
          t,
          s,
          J,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const v = di(t.props, C);
        v && (t.target = v, Xs(
          t,
          v,
          null,
          u,
          0
        ));
      } else X && Xs(
        t,
        I,
        V,
        u,
        1
      );
      ws(t, W);
    }
  },
  remove(e, t, s, { um: n, o: { remove: i } }, o) {
    const {
      shapeFlag: r,
      children: l,
      anchor: a,
      targetStart: u,
      targetAnchor: f,
      target: g,
      props: b
    } = e, y = Xt(b), C = o || !y, w = Ot.get(e);
    if (w && (w.flags |= 8, Ot.delete(e)), g && (i(u), i(f)), o && i(a), !w && (y || g) && r & 16)
      for (let H = 0; H < l.length; H++) {
        const q = l[H];
        n(
          q,
          t,
          s,
          C,
          !!q.dynamicChildren
        );
      }
  },
  move: Xs,
  hydrate: Ga
};
function Xs(e, t, s, { o: { insert: n }, m: i }, o = 2) {
  o === 0 && n(e.targetAnchor, t, s);
  const { el: r, anchor: l, shapeFlag: a, children: u, props: f } = e, g = o === 2;
  if (g && n(r, t, s), !Ot.has(e) && (!g || Xt(f)) && a & 16)
    for (let b = 0; b < u.length; b++)
      i(
        u[b],
        t,
        s,
        2
      );
  g && n(l, t, s);
}
function Ga(e, t, s, n, i, o, {
  o: { nextSibling: r, parentNode: l, querySelector: a, insert: u, createText: f }
}, g) {
  function b(H, q) {
    let W = q;
    for (; W; ) {
      if (W && W.nodeType === 8) {
        if (W.data === "teleport start anchor")
          t.targetStart = W;
        else if (W.data === "teleport anchor") {
          t.targetAnchor = W, H._lpa = t.targetAnchor && r(t.targetAnchor);
          break;
        }
      }
      W = r(W);
    }
  }
  function y(H, q) {
    q.anchor = g(
      r(H),
      q,
      l(H),
      s,
      n,
      i,
      o
    );
  }
  const C = t.target = di(
    t.props,
    a
  ), w = Xt(t.props);
  if (C) {
    const H = C._lpa || C.firstChild;
    t.shapeFlag & 16 && (w ? (y(e, t), b(C, H), t.targetAnchor || pi(
      C,
      t,
      f,
      u,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      l(e) === C ? e : null
    )) : (t.anchor = r(e), b(C, H), t.targetAnchor || pi(C, t, f, u), g(
      H && r(H),
      t,
      C,
      s,
      n,
      i,
      o
    ))), ws(t, w);
  } else w && t.shapeFlag & 16 && (y(e, t), t.targetStart = e, t.targetAnchor = r(e));
  return t.anchor && r(t.anchor);
}
const Ur = Ha;
function ws(e, t) {
  const s = e.ctx;
  if (s && s.ut) {
    let n, i;
    for (t ? (n = e.el, i = e.anchor) : (n = e.targetStart, i = e.targetAnchor); n && n !== i; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", s.uid), n = n.nextSibling;
    s.ut();
  }
}
function pi(e, t, s, n, i = null) {
  const o = t.targetStart = s(""), r = t.targetAnchor = s("");
  return o[Dr] = r, e && (n(o, e, i), n(r, e, i)), r;
}
const et = /* @__PURE__ */ Symbol("_leaveCb"), ys = /* @__PURE__ */ Symbol("_enterCb");
function Wa() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Ws(() => {
    e.isMounted = !0;
  }), Ks(() => {
    e.isUnmounting = !0;
  }), e;
}
const Qe = [Function, Array], Br = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Qe,
  onEnter: Qe,
  onAfterEnter: Qe,
  onEnterCancelled: Qe,
  // leave
  onBeforeLeave: Qe,
  onLeave: Qe,
  onAfterLeave: Qe,
  onLeaveCancelled: Qe,
  // appear
  onBeforeAppear: Qe,
  onAppear: Qe,
  onAfterAppear: Qe,
  onAppearCancelled: Qe
}, Vr = (e) => {
  const t = e.subTree;
  return t.component ? Vr(t.component) : t;
}, Ka = {
  name: "BaseTransition",
  props: Br,
  setup(e, { slots: t }) {
    const s = Hi(), n = Wa();
    return () => {
      const i = t.default && Gr(t.default(), !0), o = i && i.length ? jr(i) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        s.subTree ? be() : void 0
      );
      if (!o)
        return;
      const r = /* @__PURE__ */ de(e), { mode: l } = r;
      if (n.isLeaving)
        return Xn(o);
      const a = so(o);
      if (!a)
        return Xn(o);
      let u = hi(
        a,
        r,
        n,
        s,
        // #11061, ensure enterHooks is fresh after clone
        (g) => u = g
      );
      a.type !== Ge && Us(a, u);
      let f = s.subTree && so(s.subTree);
      if (f && f.type !== Ge && !Zt(f, a) && Vr(s).type !== Ge) {
        let g = hi(
          f,
          r,
          n,
          s
        );
        if (Us(f, g), l === "out-in" && a.type !== Ge)
          return n.isLeaving = !0, g.afterLeave = () => {
            n.isLeaving = !1, s.job.flags & 8 || s.update(), delete g.afterLeave, f = void 0;
          }, Xn(o);
        l === "in-out" && a.type !== Ge ? g.delayLeave = (b, y, C) => {
          const w = Hr(
            n,
            f
          );
          w[String(f.key)] = f, b[et] = () => {
            y(), b[et] = void 0, delete u.delayedLeave, f = void 0;
          }, u.delayedLeave = () => {
            C(), delete u.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return o;
    };
  }
};
function jr(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const s of e)
      if (s.type !== Ge) {
        t = s;
        break;
      }
  }
  return t;
}
const za = Ka;
function Hr(e, t) {
  const { leavingVNodes: s } = e;
  let n = s.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), s.set(t.type, n)), n;
}
function hi(e, t, s, n, i) {
  const {
    appear: o,
    mode: r,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: u,
    onAfterEnter: f,
    onEnterCancelled: g,
    onBeforeLeave: b,
    onLeave: y,
    onAfterLeave: C,
    onLeaveCancelled: w,
    onBeforeAppear: H,
    onAppear: q,
    onAfterAppear: W,
    onAppearCancelled: Z
  } = t, B = String(e.key), F = Hr(s, e), ee = (I, V) => {
    I && nt(
      I,
      n,
      9,
      V
    );
  }, J = (I, V) => {
    const X = V[1];
    ee(I, V), te(I) ? I.every((R) => R.length <= 1) && X() : I.length <= 1 && X();
  }, G = {
    mode: r,
    persisted: l,
    beforeEnter(I) {
      let V = a;
      if (!s.isMounted)
        if (o)
          V = H || a;
        else
          return;
      I[et] && I[et](
        !0
        /* cancelled */
      );
      const X = F[B];
      X && Zt(e, X) && X.el[et] && X.el[et](), ee(V, [I]);
    },
    enter(I) {
      if (F[B] === e) return;
      let V = u, X = f, R = g;
      if (!s.isMounted)
        if (o)
          V = q || u, X = W || f, R = Z || g;
        else
          return;
      let E = !1;
      I[ys] = (x) => {
        E || (E = !0, x ? ee(R, [I]) : ee(X, [I]), G.delayedLeave && G.delayedLeave(), I[ys] = void 0);
      };
      const v = I[ys].bind(null, !1);
      V ? J(V, [I, v]) : v();
    },
    leave(I, V) {
      const X = String(e.key);
      if (I[ys] && I[ys](
        !0
        /* cancelled */
      ), s.isUnmounting)
        return V();
      ee(b, [I]);
      let R = !1;
      I[et] = (v) => {
        R || (R = !0, V(), v ? ee(w, [I]) : ee(C, [I]), I[et] = void 0, F[X] === e && delete F[X]);
      };
      const E = I[et].bind(null, !1);
      F[X] = e, y ? J(y, [I, E]) : E();
    },
    clone(I) {
      const V = hi(
        I,
        t,
        s,
        n,
        i
      );
      return i && i(V), V;
    }
  };
  return G;
}
function Xn(e) {
  if (Un(e))
    return e = Bt(e), e.children = null, e;
}
function so(e) {
  if (!Un(e))
    return Fr(e.type) && e.children ? jr(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: s } = e;
  if (s) {
    if (t & 16)
      return s[0];
    if (t & 32 && le(s.default))
      return s.default();
  }
}
function Us(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Us(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Gr(e, t = !1, s) {
  let n = [], i = 0;
  for (let o = 0; o < e.length; o++) {
    let r = e[o];
    const l = s == null ? r.key : String(s) + String(r.key != null ? r.key : o);
    r.type === re ? (r.patchFlag & 128 && i++, n = n.concat(
      Gr(r.children, t, l)
    )) : (t || r.type !== Ge) && n.push(l != null ? Bt(r, { key: l }) : r);
  }
  if (i > 1)
    for (let o = 0; o < n.length; o++)
      n[o].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function It(e, t) {
  return le(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    $e({ name: e.name }, t, { setup: e })
  ) : e;
}
function Wr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function no(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const gn = /* @__PURE__ */ new WeakMap();
function Ms(e, t, s, n, i = !1) {
  if (te(e)) {
    e.forEach(
      (w, H) => Ms(
        w,
        t && (te(t) ? t[H] : t),
        s,
        n,
        i
      )
    );
    return;
  }
  if (Es(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Ms(e, t, s, n.component.subTree);
    return;
  }
  const o = n.shapeFlag & 4 ? Hn(n.component) : n.el, r = i ? null : o, { i: l, r: a } = e, u = t && t.r, f = l.refs === we ? l.refs = {} : l.refs, g = l.setupState, b = /* @__PURE__ */ de(g), y = g === we ? tr : (w) => no(f, w) ? !1 : ge(b, w), C = (w, H) => !(H && no(f, H));
  if (u != null && u !== a) {
    if (io(t), Te(u))
      f[u] = null, y(u) && (g[u] = null);
    else if (/* @__PURE__ */ Ce(u)) {
      const w = t;
      C(u, w.k) && (u.value = null), w.k && (f[w.k] = null);
    }
  }
  if (le(a)) {
    bt();
    try {
      Gs(a, l, 12, [r, f]);
    } finally {
      wt();
    }
  } else {
    const w = Te(a), H = /* @__PURE__ */ Ce(a);
    if (w || H) {
      const q = () => {
        if (e.f) {
          const W = w ? y(a) ? g[a] : f[a] : C() || !e.k ? a.value : f[e.k];
          if (i)
            te(W) && Ei(W, o);
          else if (te(W))
            W.includes(o) || W.push(o);
          else if (w)
            f[a] = [o], y(a) && (g[a] = f[a]);
          else {
            const Z = [o];
            C(a, e.k) && (a.value = Z), e.k && (f[e.k] = Z);
          }
        } else w ? (f[a] = r, y(a) && (g[a] = r)) : H && (C(a, e.k) && (a.value = r), e.k && (f[e.k] = r));
      };
      if (r) {
        const W = () => {
          q(), gn.delete(e);
        };
        W.id = -1, gn.set(e, W), je(W, s);
      } else
        io(e), q();
    }
  }
}
function io(e) {
  const t = gn.get(e);
  t && (t.flags |= 8, gn.delete(e));
}
$n().requestIdleCallback;
$n().cancelIdleCallback;
const Es = (e) => !!e.type.__asyncLoader, Un = (e) => e.type.__isKeepAlive;
function Ja(e, t) {
  Kr(e, "a", t);
}
function Ya(e, t) {
  Kr(e, "da", t);
}
function Kr(e, t, s = We) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = s;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Bn(t, n, s), s) {
    let i = s.parent;
    for (; i && i.parent; )
      Un(i.parent.vnode) && qa(n, t, s, i), i = i.parent;
  }
}
function qa(e, t, s, n) {
  const i = Bn(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  zr(() => {
    Ei(n[t], i);
  }, s);
}
function Bn(e, t, s = We, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []), o = t.__weh || (t.__weh = (...r) => {
      bt();
      const l = zs(s), a = nt(t, s, e, r);
      return l(), wt(), a;
    });
    return n ? i.unshift(o) : i.push(o), o;
  }
}
const Rt = (e) => (t, s = We) => {
  (!Vs || e === "sp") && Bn(e, (...n) => t(...n), s);
}, Xa = Rt("bm"), Ws = Rt("m"), Za = Rt(
  "bu"
), Qa = Rt("u"), Ks = Rt(
  "bum"
), zr = Rt("um"), ec = Rt(
  "sp"
), tc = Rt("rtg"), sc = Rt("rtc");
function nc(e, t = We) {
  Bn("ec", e, t);
}
const ic = /* @__PURE__ */ Symbol.for("v-ndc");
function ze(e, t, s, n) {
  let i;
  const o = s, r = te(e);
  if (r || Te(e)) {
    const l = r && /* @__PURE__ */ Et(e);
    let a = !1, u = !1;
    l && (a = !/* @__PURE__ */ Xe(e), u = /* @__PURE__ */ Pt(e), e = On(e)), i = new Array(e.length);
    for (let f = 0, g = e.length; f < g; f++)
      i[f] = t(
        a ? u ? hs(at(e[f])) : at(e[f]) : e[f],
        f,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, o);
  } else if (me(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, a) => t(l, a, void 0, o)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let a = 0, u = l.length; a < u; a++) {
        const f = l[a];
        i[a] = t(e[f], f, a, o);
      }
    }
  else
    i = [];
  return i;
}
const gi = (e) => e ? dl(e) ? Hn(e) : gi(e.parent) : null, Ps = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ $e(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => gi(e.parent),
    $root: (e) => gi(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Yr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ui(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ne.bind(e.proxy)),
    $watch: (e) => Va.bind(e)
  })
), Zn = (e, t) => e !== we && !e.__isScriptSetup && ge(e, t), oc = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: i, props: o, accessCache: r, type: l, appContext: a } = e;
    if (t[0] !== "$") {
      const b = r[t];
      if (b !== void 0)
        switch (b) {
          case 1:
            return n[t];
          case 2:
            return i[t];
          case 4:
            return s[t];
          case 3:
            return o[t];
        }
      else {
        if (Zn(n, t))
          return r[t] = 1, n[t];
        if (i !== we && ge(i, t))
          return r[t] = 2, i[t];
        if (ge(o, t))
          return r[t] = 3, o[t];
        if (s !== we && ge(s, t))
          return r[t] = 4, s[t];
        mi && (r[t] = 0);
      }
    }
    const u = Ps[t];
    let f, g;
    if (u)
      return t === "$attrs" && Ue(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[t])
    )
      return f;
    if (s !== we && ge(s, t))
      return r[t] = 4, s[t];
    if (
      // global properties
      g = a.config.globalProperties, ge(g, t)
    )
      return g[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: i, ctx: o } = e;
    return Zn(i, t) ? (i[t] = s, !0) : n !== we && ge(n, t) ? (n[t] = s, !0) : ge(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: i, props: o, type: r }
  }, l) {
    let a;
    return !!(s[l] || e !== we && l[0] !== "$" && ge(e, l) || Zn(t, l) || ge(o, l) || ge(n, l) || ge(Ps, l) || ge(i.config.globalProperties, l) || (a = r.__cssModules) && a[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : ge(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function oo(e) {
  return te(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let mi = !0;
function rc(e) {
  const t = Yr(e), s = e.proxy, n = e.ctx;
  mi = !1, t.beforeCreate && ro(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: r,
    watch: l,
    provide: a,
    inject: u,
    // lifecycle
    created: f,
    beforeMount: g,
    mounted: b,
    beforeUpdate: y,
    updated: C,
    activated: w,
    deactivated: H,
    beforeDestroy: q,
    beforeUnmount: W,
    destroyed: Z,
    unmounted: B,
    render: F,
    renderTracked: ee,
    renderTriggered: J,
    errorCaptured: G,
    serverPrefetch: I,
    // public API
    expose: V,
    inheritAttrs: X,
    // assets
    components: R,
    directives: E,
    filters: v
  } = t;
  if (u && lc(u, n, null), r)
    for (const T in r) {
      const Y = r[T];
      le(Y) && (n[T] = Y.bind(s));
    }
  if (i) {
    const T = i.call(s, s);
    me(T) && (e.data = /* @__PURE__ */ Nn(T));
  }
  if (mi = !0, o)
    for (const T in o) {
      const Y = o[T], ie = le(Y) ? Y.bind(s, s) : le(Y.get) ? Y.get.bind(s, s) : _t, Ie = !le(Y) && le(Y.set) ? Y.set.bind(s) : _t, Fe = Le({
        get: ie,
        set: Ie
      });
      Object.defineProperty(n, T, {
        enumerable: !0,
        configurable: !0,
        get: () => Fe.value,
        set: (ce) => Fe.value = ce
      });
    }
  if (l)
    for (const T in l)
      Jr(l[T], n, s, T);
  if (a) {
    const T = le(a) ? a.call(s) : a;
    Reflect.ownKeys(T).forEach((Y) => {
      Da(Y, T[Y]);
    });
  }
  f && ro(f, e, "c");
  function S(T, Y) {
    te(Y) ? Y.forEach((ie) => T(ie.bind(s))) : Y && T(Y.bind(s));
  }
  if (S(Xa, g), S(Ws, b), S(Za, y), S(Qa, C), S(Ja, w), S(Ya, H), S(nc, G), S(sc, ee), S(tc, J), S(Ks, W), S(zr, B), S(ec, I), te(V))
    if (V.length) {
      const T = e.exposed || (e.exposed = {});
      V.forEach((Y) => {
        Object.defineProperty(T, Y, {
          get: () => s[Y],
          set: (ie) => s[Y] = ie,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  F && e.render === _t && (e.render = F), X != null && (e.inheritAttrs = X), R && (e.components = R), E && (e.directives = E), I && Wr(e);
}
function lc(e, t, s = _t) {
  te(e) && (e = yi(e));
  for (const n in e) {
    const i = e[n];
    let o;
    me(i) ? "default" in i ? o = ks(
      i.from || n,
      i.default,
      !0
    ) : o = ks(i.from || n) : o = ks(i), /* @__PURE__ */ Ce(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (r) => o.value = r
    }) : t[n] = o;
  }
}
function ro(e, t, s) {
  nt(
    te(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function Jr(e, t, s, n) {
  let i = n.includes(".") ? Nr(s, n) : () => s[n];
  if (Te(e)) {
    const o = t[e];
    le(o) && Ke(i, o);
  } else if (le(e))
    Ke(i, e.bind(s));
  else if (me(e))
    if (te(e))
      e.forEach((o) => Jr(o, t, s, n));
    else {
      const o = le(e.handler) ? e.handler.bind(s) : t[e.handler];
      le(o) && Ke(i, o, e);
    }
}
function Yr(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: r }
  } = e.appContext, l = o.get(t);
  let a;
  return l ? a = l : !i.length && !s && !n ? a = t : (a = {}, i.length && i.forEach(
    (u) => mn(a, u, r, !0)
  ), mn(a, t, r)), me(t) && o.set(t, a), a;
}
function mn(e, t, s, n = !1) {
  const { mixins: i, extends: o } = t;
  o && mn(e, o, s, !0), i && i.forEach(
    (r) => mn(e, r, s, !0)
  );
  for (const r in t)
    if (!(n && r === "expose")) {
      const l = ac[r] || s && s[r];
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const ac = {
  data: lo,
  props: ao,
  emits: ao,
  // objects
  methods: Ss,
  computed: Ss,
  // lifecycle
  beforeCreate: Ve,
  created: Ve,
  beforeMount: Ve,
  mounted: Ve,
  beforeUpdate: Ve,
  updated: Ve,
  beforeDestroy: Ve,
  beforeUnmount: Ve,
  destroyed: Ve,
  unmounted: Ve,
  activated: Ve,
  deactivated: Ve,
  errorCaptured: Ve,
  serverPrefetch: Ve,
  // assets
  components: Ss,
  directives: Ss,
  // watch
  watch: uc,
  // provide / inject
  provide: lo,
  inject: cc
};
function lo(e, t) {
  return t ? e ? function() {
    return $e(
      le(e) ? e.call(this, this) : e,
      le(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function cc(e, t) {
  return Ss(yi(e), yi(t));
}
function yi(e) {
  if (te(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function Ve(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ss(e, t) {
  return e ? $e(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ao(e, t) {
  return e ? te(e) && te(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : $e(
    /* @__PURE__ */ Object.create(null),
    oo(e),
    oo(t ?? {})
  ) : t;
}
function uc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = $e(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = Ve(e[n], t[n]);
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
let fc = 0;
function dc(e, t) {
  return function(n, i = null) {
    le(n) || (n = $e({}, n)), i != null && !me(i) && (i = null);
    const o = qr(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const u = o.app = {
      _uid: fc++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Gc,
      get config() {
        return o.config;
      },
      set config(f) {
      },
      use(f, ...g) {
        return r.has(f) || (f && le(f.install) ? (r.add(f), f.install(u, ...g)) : le(f) && (r.add(f), f(u, ...g))), u;
      },
      mixin(f) {
        return o.mixins.includes(f) || o.mixins.push(f), u;
      },
      component(f, g) {
        return g ? (o.components[f] = g, u) : o.components[f];
      },
      directive(f, g) {
        return g ? (o.directives[f] = g, u) : o.directives[f];
      },
      mount(f, g, b) {
        if (!a) {
          const y = u._ceVNode || oe(n, i);
          return y.appContext = o, b === !0 ? b = "svg" : b === !1 && (b = void 0), e(y, f, b), a = !0, u._container = f, f.__vue_app__ = u, Hn(y.component);
        }
      },
      onUnmount(f) {
        l.push(f);
      },
      unmount() {
        a && (nt(
          l,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(f, g) {
        return o.provides[f] = g, u;
      },
      runWithContext(f) {
        const g = ts;
        ts = u;
        try {
          return f();
        } finally {
          ts = g;
        }
      }
    };
    return u;
  };
}
let ts = null;
const pc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ot(t)}Modifiers`] || e[`${Vt(t)}Modifiers`];
function hc(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || we;
  let i = s;
  const o = t.startsWith("update:"), r = o && pc(n, t.slice(7));
  r && (r.trim && (i = s.map((f) => Te(f) ? f.trim() : f)), r.number && (i = s.map(Pi)));
  let l, a = n[l = Kn(t)] || // also try camelCase event handler (#2249)
  n[l = Kn(ot(t))];
  !a && o && (a = n[l = Kn(Vt(t))]), a && nt(
    a,
    e,
    6,
    i
  );
  const u = n[l + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, nt(
      u,
      e,
      6,
      i
    );
  }
}
const gc = /* @__PURE__ */ new WeakMap();
function Xr(e, t, s = !1) {
  const n = s ? gc : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let r = {}, l = !1;
  if (!le(e)) {
    const a = (u) => {
      const f = Xr(u, t, !0);
      f && (l = !0, $e(r, f));
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !o && !l ? (me(e) && n.set(e, null), null) : (te(o) ? o.forEach((a) => r[a] = null) : $e(r, o), me(e) && n.set(e, r), r);
}
function Vn(e, t) {
  return !e || !Pn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ge(e, t[0].toLowerCase() + t.slice(1)) || ge(e, Vt(t)) || ge(e, t));
}
function co(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: i,
    propsOptions: [o],
    slots: r,
    attrs: l,
    emit: a,
    render: u,
    renderCache: f,
    props: g,
    data: b,
    setupState: y,
    ctx: C,
    inheritAttrs: w
  } = e, H = hn(e);
  let q, W;
  try {
    if (s.shapeFlag & 4) {
      const B = i || n, F = B;
      q = yt(
        u.call(
          F,
          B,
          f,
          g,
          y,
          b,
          C
        )
      ), W = l;
    } else {
      const B = t;
      q = yt(
        B.length > 1 ? B(
          g,
          { attrs: l, slots: r, emit: a }
        ) : B(
          g,
          null
        )
      ), W = t.props ? l : mc(l);
    }
  } catch (B) {
    Is.length = 0, Fn(B, e, 1), q = oe(Ge);
  }
  let Z = q;
  if (W && w !== !1) {
    const B = Object.keys(W), { shapeFlag: F } = Z;
    B.length && F & 7 && (o && B.some(In) && (W = yc(
      W,
      o
    )), Z = Bt(Z, W, !1, !0));
  }
  return s.dirs && (Z = Bt(Z, null, !1, !0), Z.dirs = Z.dirs ? Z.dirs.concat(s.dirs) : s.dirs), s.transition && Us(Z, s.transition), q = Z, hn(H), q;
}
const mc = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Pn(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, yc = (e, t) => {
  const s = {};
  for (const n in e)
    (!In(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function vc(e, t, s) {
  const { props: n, children: i, component: o } = e, { props: r, children: l, patchFlag: a } = t, u = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return n ? uo(n, r, u) : !!r;
    if (a & 8) {
      const f = t.dynamicProps;
      for (let g = 0; g < f.length; g++) {
        const b = f[g];
        if (Zr(r, n, b) && !Vn(u, b))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : n === r ? !1 : n ? r ? uo(n, r, u) : !0 : !!r;
  return !1;
}
function uo(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (Zr(t, e, o) && !Vn(s, o))
      return !0;
  }
  return !1;
}
function Zr(e, t, s) {
  const n = e[s], i = t[s];
  return s === "style" && me(n) && me(i) ? !Ii(n, i) : n !== i;
}
function _c({ vnode: e, parent: t, suspense: s }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  s && s.activeBranch === e && (s.vnode.el = n);
}
const Qr = {}, el = () => Object.create(Qr), tl = (e) => Object.getPrototypeOf(e) === Qr;
function bc(e, t, s, n = !1) {
  const i = {}, o = el();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), sl(e, t, i, o);
  for (const r in e.propsOptions[0])
    r in i || (i[r] = void 0);
  s ? e.props = n ? i : /* @__PURE__ */ xa(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function wc(e, t, s, n) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: r }
  } = e, l = /* @__PURE__ */ de(i), [a] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const f = e.vnode.dynamicProps;
      for (let g = 0; g < f.length; g++) {
        let b = f[g];
        if (Vn(e.emitsOptions, b))
          continue;
        const y = t[b];
        if (a)
          if (ge(o, b))
            y !== o[b] && (o[b] = y, u = !0);
          else {
            const C = ot(b);
            i[C] = vi(
              a,
              l,
              C,
              y,
              e,
              !1
            );
          }
        else
          y !== o[b] && (o[b] = y, u = !0);
      }
    }
  } else {
    sl(e, t, i, o) && (u = !0);
    let f;
    for (const g in l)
      (!t || // for camelCase
      !ge(t, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Vt(g)) === g || !ge(t, f))) && (a ? s && // for camelCase
      (s[g] !== void 0 || // for kebab-case
      s[f] !== void 0) && (i[g] = vi(
        a,
        l,
        g,
        void 0,
        e,
        !0
      )) : delete i[g]);
    if (o !== l)
      for (const g in o)
        (!t || !ge(t, g)) && (delete o[g], u = !0);
  }
  u && kt(e.attrs, "set", "");
}
function sl(e, t, s, n) {
  const [i, o] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let a in t) {
      if (Ts(a))
        continue;
      const u = t[a];
      let f;
      i && ge(i, f = ot(a)) ? !o || !o.includes(f) ? s[f] = u : (l || (l = {}))[f] = u : Vn(e.emitsOptions, a) || (!(a in n) || u !== n[a]) && (n[a] = u, r = !0);
    }
  if (o) {
    const a = /* @__PURE__ */ de(s), u = l || we;
    for (let f = 0; f < o.length; f++) {
      const g = o[f];
      s[g] = vi(
        i,
        a,
        g,
        u[g],
        e,
        !ge(u, g)
      );
    }
  }
  return r;
}
function vi(e, t, s, n, i, o) {
  const r = e[s];
  if (r != null) {
    const l = ge(r, "default");
    if (l && n === void 0) {
      const a = r.default;
      if (r.type !== Function && !r.skipFactory && le(a)) {
        const { propsDefaults: u } = i;
        if (s in u)
          n = u[s];
        else {
          const f = zs(i);
          n = u[s] = a.call(
            null,
            t
          ), f();
        }
      } else
        n = a;
      i.ce && i.ce._setProp(s, n);
    }
    r[
      0
      /* shouldCast */
    ] && (o && !l ? n = !1 : r[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Vt(s)) && (n = !0));
  }
  return n;
}
const Sc = /* @__PURE__ */ new WeakMap();
function nl(e, t, s = !1) {
  const n = s ? Sc : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, r = {}, l = [];
  let a = !1;
  if (!le(e)) {
    const f = (g) => {
      a = !0;
      const [b, y] = nl(g, t, !0);
      $e(r, b), y && l.push(...y);
    };
    !s && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!o && !a)
    return me(e) && n.set(e, cs), cs;
  if (te(o))
    for (let f = 0; f < o.length; f++) {
      const g = ot(o[f]);
      fo(g) && (r[g] = we);
    }
  else if (o)
    for (const f in o) {
      const g = ot(f);
      if (fo(g)) {
        const b = o[f], y = r[g] = te(b) || le(b) ? { type: b } : $e({}, b), C = y.type;
        let w = !1, H = !0;
        if (te(C))
          for (let q = 0; q < C.length; ++q) {
            const W = C[q], Z = le(W) && W.name;
            if (Z === "Boolean") {
              w = !0;
              break;
            } else Z === "String" && (H = !1);
          }
        else
          w = le(C) && C.name === "Boolean";
        y[
          0
          /* shouldCast */
        ] = w, y[
          1
          /* shouldCastTrue */
        ] = H, (w || ge(y, "default")) && l.push(g);
      }
    }
  const u = [r, l];
  return me(e) && n.set(e, u), u;
}
function fo(e) {
  return e[0] !== "$" && !Ts(e);
}
const Bi = (e) => e === "_" || e === "_ctx" || e === "$stable", Vi = (e) => te(e) ? e.map(yt) : [yt(e)], xc = (e, t, s) => {
  if (t._n)
    return t;
  const n = $r((...i) => Vi(t(...i)), s);
  return n._c = !1, n;
}, il = (e, t, s) => {
  const n = e._ctx;
  for (const i in e) {
    if (Bi(i)) continue;
    const o = e[i];
    if (le(o))
      t[i] = xc(i, o, n);
    else if (o != null) {
      const r = Vi(o);
      t[i] = () => r;
    }
  }
}, ol = (e, t) => {
  const s = Vi(t);
  e.slots.default = () => s;
}, rl = (e, t, s) => {
  for (const n in t)
    (s || !Bi(n)) && (e[n] = t[n]);
}, Tc = (e, t, s) => {
  const n = e.slots = el();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (rl(n, t, s), s && lr(n, "_", i, !0)) : il(t, n);
  } else t && ol(e, t);
}, Ac = (e, t, s) => {
  const { vnode: n, slots: i } = e;
  let o = !0, r = we;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? o = !1 : rl(i, t, s) : (o = !t.$stable, il(t, i)), r = t;
  } else t && (ol(e, t), r = { default: 1 });
  if (o)
    for (const l in i)
      !Bi(l) && r[l] == null && delete i[l];
}, je = Pc;
function Cc(e) {
  return kc(e);
}
function kc(e, t) {
  const s = $n();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: o,
    createElement: r,
    createText: l,
    createComment: a,
    setText: u,
    setElementText: f,
    parentNode: g,
    nextSibling: b,
    setScopeId: y = _t,
    insertStaticContent: C
  } = e, w = (d, p, _, L = null, P = null, A = null, j = void 0, U = null, D = !!p.dynamicChildren) => {
    if (d === p)
      return;
    d && !Zt(d, p) && (L = Oe(d), ce(d, P, A, !0), d = null), p.patchFlag === -2 && (D = !1, p.dynamicChildren = null);
    const { type: k, ref: se, shapeFlag: K } = p;
    switch (k) {
      case jn:
        H(d, p, _, L);
        break;
      case Ge:
        q(d, p, _, L);
        break;
      case rn:
        d == null && W(p, _, L, j);
        break;
      case re:
        R(
          d,
          p,
          _,
          L,
          P,
          A,
          j,
          U,
          D
        );
        break;
      default:
        K & 1 ? F(
          d,
          p,
          _,
          L,
          P,
          A,
          j,
          U,
          D
        ) : K & 6 ? E(
          d,
          p,
          _,
          L,
          P,
          A,
          j,
          U,
          D
        ) : (K & 64 || K & 128) && k.process(
          d,
          p,
          _,
          L,
          P,
          A,
          j,
          U,
          D,
          jt
        );
    }
    se != null && P ? Ms(se, d && d.ref, A, p || d, !p) : se == null && d && d.ref != null && Ms(d.ref, null, A, d, !0);
  }, H = (d, p, _, L) => {
    if (d == null)
      n(
        p.el = l(p.children),
        _,
        L
      );
    else {
      const P = p.el = d.el;
      p.children !== d.children && u(P, p.children);
    }
  }, q = (d, p, _, L) => {
    d == null ? n(
      p.el = a(p.children || ""),
      _,
      L
    ) : p.el = d.el;
  }, W = (d, p, _, L) => {
    [d.el, d.anchor] = C(
      d.children,
      p,
      _,
      L,
      d.el,
      d.anchor
    );
  }, Z = ({ el: d, anchor: p }, _, L) => {
    let P;
    for (; d && d !== p; )
      P = b(d), n(d, _, L), d = P;
    n(p, _, L);
  }, B = ({ el: d, anchor: p }) => {
    let _;
    for (; d && d !== p; )
      _ = b(d), i(d), d = _;
    i(p);
  }, F = (d, p, _, L, P, A, j, U, D) => {
    if (p.type === "svg" ? j = "svg" : p.type === "math" && (j = "mathml"), d == null)
      ee(
        p,
        _,
        L,
        P,
        A,
        j,
        U,
        D
      );
    else {
      const k = d.el && d.el._isVueCE ? d.el : null;
      try {
        k && k._beginPatch(), I(
          d,
          p,
          P,
          A,
          j,
          U,
          D
        );
      } finally {
        k && k._endPatch();
      }
    }
  }, ee = (d, p, _, L, P, A, j, U) => {
    let D, k;
    const { props: se, shapeFlag: K, transition: Q, dirs: ne } = d;
    if (D = d.el = r(
      d.type,
      A,
      se && se.is,
      se
    ), K & 8 ? f(D, d.children) : K & 16 && G(
      d.children,
      D,
      null,
      L,
      P,
      Qn(d, A),
      j,
      U
    ), ne && Gt(d, null, L, "created"), J(D, d, d.scopeId, j, L), se) {
      for (const _e in se)
        _e !== "value" && !Ts(_e) && o(D, _e, null, se[_e], A, L);
      "value" in se && o(D, "value", null, se.value, A), (k = se.onVnodeBeforeMount) && dt(k, L, d);
    }
    ne && Gt(d, null, L, "beforeMount");
    const fe = Mc(P, Q);
    fe && Q.beforeEnter(D), n(D, p, _), ((k = se && se.onVnodeMounted) || fe || ne) && je(() => {
      try {
        k && dt(k, L, d), fe && Q.enter(D), ne && Gt(d, null, L, "mounted");
      } finally {
      }
    }, P);
  }, J = (d, p, _, L, P) => {
    if (_ && y(d, _), L)
      for (let A = 0; A < L.length; A++)
        y(d, L[A]);
    if (P) {
      let A = P.subTree;
      if (p === A || cl(A.type) && (A.ssContent === p || A.ssFallback === p)) {
        const j = P.vnode;
        J(
          d,
          j,
          j.scopeId,
          j.slotScopeIds,
          P.parent
        );
      }
    }
  }, G = (d, p, _, L, P, A, j, U, D = 0) => {
    for (let k = D; k < d.length; k++) {
      const se = d[k] = U ? At(d[k]) : yt(d[k]);
      w(
        null,
        se,
        p,
        _,
        L,
        P,
        A,
        j,
        U
      );
    }
  }, I = (d, p, _, L, P, A, j) => {
    const U = p.el = d.el;
    let { patchFlag: D, dynamicChildren: k, dirs: se } = p;
    D |= d.patchFlag & 16;
    const K = d.props || we, Q = p.props || we;
    let ne;
    if (_ && Wt(_, !1), (ne = Q.onVnodeBeforeUpdate) && dt(ne, _, p, d), se && Gt(p, d, _, "beforeUpdate"), _ && Wt(_, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    k && (!d.dynamicChildren || d.dynamicChildren.length !== k.length) && (D = 0, j = !1, k = null), (K.innerHTML && Q.innerHTML == null || K.textContent && Q.textContent == null) && f(U, ""), k ? V(
      d.dynamicChildren,
      k,
      U,
      _,
      L,
      Qn(p, P),
      A
    ) : j || Y(
      d,
      p,
      U,
      null,
      _,
      L,
      Qn(p, P),
      A,
      !1
    ), D > 0) {
      if (D & 16)
        X(U, K, Q, _, P);
      else if (D & 2 && K.class !== Q.class && o(U, "class", null, Q.class, P), D & 4 && o(U, "style", K.style, Q.style, P), D & 8) {
        const fe = p.dynamicProps;
        for (let _e = 0; _e < fe.length; _e++) {
          const ve = fe[_e], Ee = K[ve], De = Q[ve];
          (De !== Ee || ve === "value") && o(U, ve, Ee, De, P, _);
        }
      }
      D & 1 && d.children !== p.children && f(U, p.children);
    } else !j && k == null && X(U, K, Q, _, P);
    ((ne = Q.onVnodeUpdated) || se) && je(() => {
      ne && dt(ne, _, p, d), se && Gt(p, d, _, "updated");
    }, L);
  }, V = (d, p, _, L, P, A, j) => {
    for (let U = 0; U < p.length; U++) {
      const D = d[U], k = p[U], se = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        D.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (D.type === re || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Zt(D, k) || // - In the case of a component, it could contain anything.
        D.shapeFlag & 198) ? g(D.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      w(
        D,
        k,
        se,
        null,
        L,
        P,
        A,
        j,
        !0
      );
    }
  }, X = (d, p, _, L, P) => {
    if (p !== _) {
      if (p !== we)
        for (const A in p)
          !Ts(A) && !(A in _) && o(
            d,
            A,
            p[A],
            null,
            P,
            L
          );
      for (const A in _) {
        if (Ts(A)) continue;
        const j = _[A], U = p[A];
        j !== U && A !== "value" && o(d, A, U, j, P, L);
      }
      "value" in _ && o(d, "value", p.value, _.value, P);
    }
  }, R = (d, p, _, L, P, A, j, U, D) => {
    const k = p.el = d ? d.el : l(""), se = p.anchor = d ? d.anchor : l("");
    let { patchFlag: K, dynamicChildren: Q, slotScopeIds: ne } = p;
    ne && (U = U ? U.concat(ne) : ne), d == null ? (n(k, _, L), n(se, _, L), G(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      _,
      se,
      P,
      A,
      j,
      U,
      D
    )) : K > 0 && K & 64 && Q && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    d.dynamicChildren && d.dynamicChildren.length === Q.length ? (V(
      d.dynamicChildren,
      Q,
      _,
      P,
      A,
      j,
      U
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (p.key != null || P && p === P.subTree) && ji(
      d,
      p,
      !0
      /* shallow */
    )) : Y(
      d,
      p,
      _,
      se,
      P,
      A,
      j,
      U,
      D
    );
  }, E = (d, p, _, L, P, A, j, U, D) => {
    p.slotScopeIds = U, d == null ? p.shapeFlag & 512 ? P.ctx.activate(
      p,
      _,
      L,
      j,
      D
    ) : v(
      p,
      _,
      L,
      P,
      A,
      j,
      D
    ) : x(d, p, D);
  }, v = (d, p, _, L, P, A, j) => {
    const U = d.component = Dc(
      d,
      L,
      P
    );
    if (Un(d) && (U.ctx.renderer = jt), Fc(U, !1, j), U.asyncDep) {
      if (P && P.registerDep(U, S, j), !d.el) {
        const D = U.subTree = oe(Ge);
        q(null, D, p, _), d.placeholder = D.el;
      }
    } else
      S(
        U,
        d,
        p,
        _,
        P,
        A,
        j
      );
  }, x = (d, p, _) => {
    const L = p.component = d.component;
    if (vc(d, p, _))
      if (L.asyncDep && !L.asyncResolved) {
        T(L, p, _);
        return;
      } else
        L.next = p, L.update();
    else
      p.el = d.el, L.vnode = p;
  }, S = (d, p, _, L, P, A, j) => {
    const U = () => {
      if (d.isMounted) {
        let { next: K, bu: Q, u: ne, parent: fe, vnode: _e } = d;
        {
          const ut = ll(d);
          if (ut) {
            K && (K.el = _e.el, T(d, K, j)), ut.asyncDep.then(() => {
              je(() => {
                d.isUnmounted || k();
              }, P);
            });
            return;
          }
        }
        let ve = K, Ee;
        Wt(d, !1), K ? (K.el = _e.el, T(d, K, j)) : K = _e, Q && on(Q), (Ee = K.props && K.props.onVnodeBeforeUpdate) && dt(Ee, fe, K, _e), Wt(d, !0);
        const De = co(d), ct = d.subTree;
        d.subTree = De, w(
          ct,
          De,
          // parent may have changed if it's in a teleport
          g(ct.el),
          // anchor may have changed if it's in a fragment
          Oe(ct),
          d,
          P,
          A
        ), K.el = De.el, ve === null && _c(d, De.el), ne && je(ne, P), (Ee = K.props && K.props.onVnodeUpdated) && je(
          () => dt(Ee, fe, K, _e),
          P
        );
      } else {
        let K;
        const { el: Q, props: ne } = p, { bm: fe, m: _e, parent: ve, root: Ee, type: De } = d, ct = Es(p);
        Wt(d, !1), fe && on(fe), !ct && (K = ne && ne.onVnodeBeforeMount) && dt(K, ve, p), Wt(d, !0);
        {
          Ee.ce && Ee.ce._hasShadowRoot() && Ee.ce._injectChildStyle(
            De,
            d.parent ? d.parent.type : void 0
          );
          const ut = d.subTree = co(d);
          w(
            null,
            ut,
            _,
            L,
            d,
            P,
            A
          ), p.el = ut.el;
        }
        if (_e && je(_e, P), !ct && (K = ne && ne.onVnodeMounted)) {
          const ut = p;
          je(
            () => dt(K, ve, ut),
            P
          );
        }
        (p.shapeFlag & 256 || ve && Es(ve.vnode) && ve.vnode.shapeFlag & 256) && d.a && je(d.a, P), d.isMounted = !0, p = _ = L = null;
      }
    };
    d.scope.on();
    const D = d.effect = new hr(U);
    d.scope.off();
    const k = d.update = D.run.bind(D), se = d.job = D.runIfDirty.bind(D);
    se.i = d, se.id = d.uid, D.scheduler = () => Ui(se), Wt(d, !0), k();
  }, T = (d, p, _) => {
    p.component = d;
    const L = d.vnode.props;
    d.vnode = p, d.next = null, wc(d, p.props, L, _), Ac(d, p.children, _), bt(), Qi(d), wt();
  }, Y = (d, p, _, L, P, A, j, U, D = !1) => {
    const k = d && d.children, se = d ? d.shapeFlag : 0, K = p.children, { patchFlag: Q, shapeFlag: ne } = p;
    if (Q > 0) {
      if (Q & 128) {
        Ie(
          k,
          K,
          _,
          L,
          P,
          A,
          j,
          U,
          D
        );
        return;
      } else if (Q & 256) {
        ie(
          k,
          K,
          _,
          L,
          P,
          A,
          j,
          U,
          D
        );
        return;
      }
    }
    ne & 8 ? (se & 16 && ye(k, P, A), K !== k && f(_, K)) : se & 16 ? ne & 16 ? Ie(
      k,
      K,
      _,
      L,
      P,
      A,
      j,
      U,
      D
    ) : ye(k, P, A, !0) : (se & 8 && f(_, ""), ne & 16 && G(
      K,
      _,
      L,
      P,
      A,
      j,
      U,
      D
    ));
  }, ie = (d, p, _, L, P, A, j, U, D) => {
    d = d || cs, p = p || cs;
    const k = d.length, se = p.length, K = Math.min(k, se);
    let Q;
    for (Q = 0; Q < K; Q++) {
      const ne = p[Q] = D ? At(p[Q]) : yt(p[Q]);
      w(
        d[Q],
        ne,
        _,
        null,
        P,
        A,
        j,
        U,
        D
      );
    }
    k > se ? ye(
      d,
      P,
      A,
      !0,
      !1,
      K
    ) : G(
      p,
      _,
      L,
      P,
      A,
      j,
      U,
      D,
      K
    );
  }, Ie = (d, p, _, L, P, A, j, U, D) => {
    let k = 0;
    const se = p.length;
    let K = d.length - 1, Q = se - 1;
    for (; k <= K && k <= Q; ) {
      const ne = d[k], fe = p[k] = D ? At(p[k]) : yt(p[k]);
      if (Zt(ne, fe))
        w(
          ne,
          fe,
          _,
          null,
          P,
          A,
          j,
          U,
          D
        );
      else
        break;
      k++;
    }
    for (; k <= K && k <= Q; ) {
      const ne = d[K], fe = p[Q] = D ? At(p[Q]) : yt(p[Q]);
      if (Zt(ne, fe))
        w(
          ne,
          fe,
          _,
          null,
          P,
          A,
          j,
          U,
          D
        );
      else
        break;
      K--, Q--;
    }
    if (k > K) {
      if (k <= Q) {
        const ne = Q + 1, fe = ne < se ? p[ne].el : L;
        for (; k <= Q; )
          w(
            null,
            p[k] = D ? At(p[k]) : yt(p[k]),
            _,
            fe,
            P,
            A,
            j,
            U,
            D
          ), k++;
      }
    } else if (k > Q)
      for (; k <= K; )
        ce(d[k], P, A, !0), k++;
    else {
      const ne = k, fe = k, _e = /* @__PURE__ */ new Map();
      for (k = fe; k <= Q; k++) {
        const Ye = p[k] = D ? At(p[k]) : yt(p[k]);
        Ye.key != null && _e.set(Ye.key, k);
      }
      let ve, Ee = 0;
      const De = Q - fe + 1;
      let ct = !1, ut = 0;
      const gs = new Array(De);
      for (k = 0; k < De; k++) gs[k] = 0;
      for (k = ne; k <= K; k++) {
        const Ye = d[k];
        if (Ee >= De) {
          ce(Ye, P, A, !0);
          continue;
        }
        let ft;
        if (Ye.key != null)
          ft = _e.get(Ye.key);
        else
          for (ve = fe; ve <= Q; ve++)
            if (gs[ve - fe] === 0 && Zt(Ye, p[ve])) {
              ft = ve;
              break;
            }
        ft === void 0 ? ce(Ye, P, A, !0) : (gs[ft - fe] = k + 1, ft >= ut ? ut = ft : ct = !0, w(
          Ye,
          p[ft],
          _,
          null,
          P,
          A,
          j,
          U,
          D
        ), Ee++);
      }
      const Ki = ct ? Ec(gs) : cs;
      for (ve = Ki.length - 1, k = De - 1; k >= 0; k--) {
        const Ye = fe + k, ft = p[Ye], zi = p[Ye + 1], Ji = Ye + 1 < se ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          zi.el || al(zi)
        ) : L;
        gs[k] === 0 ? w(
          null,
          ft,
          _,
          Ji,
          P,
          A,
          j,
          U,
          D
        ) : ct && (ve < 0 || k !== Ki[ve] ? Fe(ft, _, Ji, 2) : ve--);
      }
    }
  }, Fe = (d, p, _, L, P = null) => {
    const { el: A, type: j, transition: U, children: D, shapeFlag: k } = d;
    if (k & 6) {
      Fe(d.component.subTree, p, _, L);
      return;
    }
    if (k & 128) {
      d.suspense.move(p, _, L);
      return;
    }
    if (k & 64) {
      j.move(d, p, _, jt);
      return;
    }
    if (j === re) {
      n(A, p, _);
      for (let K = 0; K < D.length; K++)
        Fe(D[K], p, _, L);
      n(d.anchor, p, _);
      return;
    }
    if (j === rn) {
      Z(d, p, _);
      return;
    }
    if (L !== 2 && k & 1 && U)
      if (L === 0)
        U.persisted && !A[et] ? n(A, p, _) : (U.beforeEnter(A), n(A, p, _), je(() => U.enter(A), P));
      else {
        const { leave: K, delayLeave: Q, afterLeave: ne } = U, fe = () => {
          d.ctx.isUnmounted ? i(A) : n(A, p, _);
        }, _e = () => {
          const ve = A._isLeaving || !!A[et];
          A._isLeaving && A[et](
            !0
            /* cancelled */
          ), U.persisted && !ve ? fe() : K(A, () => {
            fe(), ne && ne();
          });
        };
        Q ? Q(A, fe, _e) : _e();
      }
    else
      n(A, p, _);
  }, ce = (d, p, _, L = !1, P = !1) => {
    const {
      type: A,
      props: j,
      ref: U,
      children: D,
      dynamicChildren: k,
      shapeFlag: se,
      patchFlag: K,
      dirs: Q,
      cacheIndex: ne,
      memo: fe
    } = d;
    if (K === -2 && (P = !1), U != null && (bt(), Ms(U, null, _, d, !0), wt()), ne != null && (p.renderCache[ne] = void 0), se & 256) {
      p.ctx.deactivate(d);
      return;
    }
    const _e = se & 1 && Q, ve = !Es(d);
    let Ee;
    if (ve && (Ee = j && j.onVnodeBeforeUnmount) && dt(Ee, p, d), se & 6)
      ae(d.component, _, L);
    else {
      if (se & 128) {
        d.suspense.unmount(_, L);
        return;
      }
      _e && Gt(d, null, p, "beforeUnmount"), se & 64 ? d.type.remove(
        d,
        p,
        _,
        jt,
        L
      ) : k && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !k.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (A !== re || K > 0 && K & 64) ? ye(
        k,
        p,
        _,
        !1,
        !0
      ) : (A === re && K & 384 || !P && se & 16) && ye(D, p, _), L && xe(d);
    }
    const De = fe != null && ne == null;
    (ve && (Ee = j && j.onVnodeUnmounted) || _e || De) && je(() => {
      Ee && dt(Ee, p, d), _e && Gt(d, null, p, "unmounted"), De && (d.el = null);
    }, _);
  }, xe = (d) => {
    const { type: p, el: _, anchor: L, transition: P } = d;
    if (p === re) {
      Je(_, L);
      return;
    }
    if (p === rn) {
      B(d);
      return;
    }
    const A = () => {
      i(_), P && !P.persisted && P.afterLeave && P.afterLeave();
    };
    if (d.shapeFlag & 1 && P && !P.persisted) {
      const { leave: j, delayLeave: U } = P, D = () => j(_, A);
      U ? U(d.el, A, D) : D();
    } else
      A();
  }, Je = (d, p) => {
    let _;
    for (; d !== p; )
      _ = b(d), i(d), d = _;
    i(p);
  }, ae = (d, p, _) => {
    const { bum: L, scope: P, job: A, subTree: j, um: U, m: D, a: k } = d;
    po(D), po(k), L && on(L), P.stop(), A && (A.flags |= 8, ce(j, d, p, _)), U && je(U, p), je(() => {
      d.isUnmounted = !0;
    }, p);
  }, ye = (d, p, _, L = !1, P = !1, A = 0) => {
    for (let j = A; j < d.length; j++)
      ce(d[j], p, _, L, P);
  }, Oe = (d) => {
    if (d.shapeFlag & 6)
      return Oe(d.component.subTree);
    if (d.shapeFlag & 128)
      return d.suspense.next();
    const p = b(d.anchor || d.el), _ = p && p[Dr];
    return _ ? b(_) : p;
  };
  let ke = !1;
  const Ae = (d, p, _) => {
    let L;
    d == null ? p._vnode && (ce(p._vnode, null, null, !0), L = p._vnode.component) : w(
      p._vnode || null,
      d,
      p,
      null,
      null,
      null,
      _
    ), p._vnode = d, ke || (ke = !0, Qi(L), Ir(), ke = !1);
  }, jt = {
    p: w,
    um: ce,
    m: Fe,
    r: xe,
    mt: v,
    mc: G,
    pc: Y,
    pbc: V,
    n: Oe,
    o: e
  };
  return {
    render: Ae,
    hydrate: void 0,
    createApp: dc(Ae)
  };
}
function Qn({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function Wt({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Mc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ji(e, t, s = !1) {
  const n = e.children, i = t.children;
  if (te(n) && te(i))
    for (let o = 0; o < n.length; o++) {
      const r = n[o];
      let l = i[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[o] = At(i[o]), l.el = r.el), !s && l.patchFlag !== -2 && ji(r, l)), l.type === jn && (l.patchFlag === -1 && (l = i[o] = At(l)), l.el = r.el), l.type === Ge && !l.el && (l.el = r.el);
    }
}
function Ec(e) {
  const t = e.slice(), s = [0];
  let n, i, o, r, l;
  const a = e.length;
  for (n = 0; n < a; n++) {
    const u = e[n];
    if (u !== 0) {
      if (i = s[s.length - 1], e[i] < u) {
        t[n] = i, s.push(n);
        continue;
      }
      for (o = 0, r = s.length - 1; o < r; )
        l = o + r >> 1, e[s[l]] < u ? o = l + 1 : r = l;
      u < e[s[o]] && (o > 0 && (t[n] = s[o - 1]), s[o] = n);
    }
  }
  for (o = s.length, r = s[o - 1]; o-- > 0; )
    s[o] = r, r = t[r];
  return s;
}
function ll(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ll(t);
}
function po(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function al(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? al(t.subTree) : null;
}
const cl = (e) => e.__isSuspense;
function Pc(e, t) {
  t && t.pendingBranch ? te(e) ? t.effects.push(...e) : t.effects.push(e) : Na(e);
}
const re = /* @__PURE__ */ Symbol.for("v-fgt"), jn = /* @__PURE__ */ Symbol.for("v-txt"), Ge = /* @__PURE__ */ Symbol.for("v-cmt"), rn = /* @__PURE__ */ Symbol.for("v-stc"), Is = [];
let qe = null;
function M(e = !1) {
  Is.push(qe = e ? null : []);
}
function Ic() {
  Is.pop(), qe = Is[Is.length - 1] || null;
}
let Bs = 1;
function yn(e, t = !1) {
  Bs += e, e < 0 && qe && t && (qe.hasOnce = !0);
}
function ul(e) {
  return e.dynamicChildren = Bs > 0 ? qe || cs : null, Ic(), Bs > 0 && qe && qe.push(e), e;
}
function N(e, t, s, n, i, o) {
  return ul(
    c(
      e,
      t,
      s,
      n,
      i,
      o,
      !0
    )
  );
}
function lt(e, t, s, n, i) {
  return ul(
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
function vn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Zt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const fl = ({ key: e }) => e ?? null, ln = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? Te(e) || /* @__PURE__ */ Ce(e) || le(e) ? { i: tt, r: e, k: t, f: !!s } : e : null);
function c(e, t = null, s = null, n = 0, i = null, o = e === re ? 0 : 1, r = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && fl(t),
    ref: t && ln(t),
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
    shapeFlag: o,
    patchFlag: n,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: tt
  };
  return l ? (_n(a, s), o & 128 && e.normalize(a)) : s && (a.shapeFlag |= Te(s) ? 8 : 16), Bs > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  qe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && qe.push(a), a;
}
const oe = Rc;
function Rc(e, t = null, s = null, n = 0, i = null, o = !1) {
  if ((!e || e === ic) && (e = Ge), vn(e)) {
    const l = Bt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && _n(l, s), Bs > 0 && !o && qe && (l.shapeFlag & 6 ? qe[qe.indexOf(e)] = l : qe.push(l)), l.patchFlag = -2, l;
  }
  if (jc(e) && (e = e.__vccOpts), t) {
    t = Lc(t);
    let { class: l, style: a } = t;
    l && !Te(l) && (t.class = ue(l)), me(a) && (/* @__PURE__ */ Dn(a) && !te(a) && (a = $e({}, a)), t.style = Ut(a));
  }
  const r = Te(e) ? 1 : cl(e) ? 128 : Fr(e) ? 64 : me(e) ? 4 : le(e) ? 2 : 0;
  return c(
    e,
    t,
    s,
    n,
    i,
    r,
    o,
    !0
  );
}
function Lc(e) {
  return e ? /* @__PURE__ */ Dn(e) || tl(e) ? $e({}, e) : e : null;
}
function Bt(e, t, s = !1, n = !1) {
  const { props: i, ref: o, patchFlag: r, children: l, transition: a } = e, u = t ? $c(i || {}, t) : i, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && fl(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && o ? te(o) ? o.concat(ln(t)) : [o, ln(t)] : ln(t)
    ) : o,
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
    patchFlag: t && e.type !== re ? r === -1 ? 16 : r | 16 : r,
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
    ssContent: e.ssContent && Bt(e.ssContent),
    ssFallback: e.ssFallback && Bt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && n && Us(
    f,
    a.clone(f)
  ), f;
}
function an(e = " ", t = 0) {
  return oe(jn, null, e, t);
}
function Zs(e, t) {
  const s = oe(rn, null, e);
  return s.staticCount = t, s;
}
function be(e = "", t = !1) {
  return t ? (M(), lt(Ge, null, e)) : oe(Ge, null, e);
}
function yt(e) {
  return e == null || typeof e == "boolean" ? oe(Ge) : te(e) ? oe(
    re,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : vn(e) ? At(e) : oe(jn, null, String(e));
}
function At(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Bt(e);
}
function _n(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (te(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), _n(e, i()), i._c && (i._d = !0));
      return;
    } else {
      s = 32;
      const i = t._;
      !i && !tl(t) ? t._ctx = tt : i === 3 && tt && (tt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (le(t)) {
    if (n & 65) {
      _n(e, { default: t });
      return;
    }
    t = { default: t, _ctx: tt }, s = 32;
  } else
    t = String(t), n & 64 ? (s = 16, t = [an(t)]) : s = 8;
  e.children = t, e.shapeFlag |= s;
}
function $c(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = ue([t.class, n.class]));
      else if (i === "style")
        t.style = Ut([t.style, n.style]);
      else if (Pn(i)) {
        const o = t[i], r = n[i];
        r && o !== r && !(te(o) && o.includes(r)) ? t[i] = o ? [].concat(o, r) : r : r == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !In(i) && (t[i] = r);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function dt(e, t, s, n = null) {
  nt(e, t, 7, [
    s,
    n
  ]);
}
const Oc = qr();
let Nc = 0;
function Dc(e, t, s) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || Oc, o = {
    uid: Nc++,
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
    propsOptions: nl(n, i),
    emitsOptions: Xr(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: we,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: we,
    data: we,
    props: we,
    attrs: we,
    slots: we,
    refs: we,
    setupState: we,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = hc.bind(null, o), e.ce && e.ce(o), o;
}
let We = null;
const Hi = () => We || tt;
let bn, _i;
{
  const e = $n(), t = (s, n) => {
    let i;
    return (i = e[s]) || (i = e[s] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((r) => r(o)) : i[0](o);
    };
  };
  bn = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => We = s
  ), _i = t(
    "__VUE_SSR_SETTERS__",
    (s) => Vs = s
  );
}
const zs = (e) => {
  const t = We;
  return bn(e), e.scope.on(), () => {
    e.scope.off(), bn(t);
  };
}, ho = () => {
  We && We.scope.off(), bn(null);
};
function dl(e) {
  return e.vnode.shapeFlag & 4;
}
let Vs = !1;
function Fc(e, t = !1, s = !1) {
  t && _i(t);
  const { props: n, children: i } = e.vnode, o = dl(e);
  bc(e, n, o, t), Tc(e, i, s || t);
  const r = o ? Uc(e, t) : void 0;
  return t && _i(!1), r;
}
function Uc(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, oc);
  const { setup: n } = s;
  if (n) {
    bt();
    const i = e.setupContext = n.length > 1 ? Vc(e) : null, o = zs(e), r = Gs(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = nr(r);
    if (wt(), o(), (l || e.sp) && !Es(e) && Wr(e), l) {
      if (r.then(ho, ho), t)
        return r.then((a) => {
          go(e, a);
        }).catch((a) => {
          Fn(a, e, 0);
        });
      e.asyncDep = r;
    } else
      go(e, r);
  } else
    pl(e);
}
function go(e, t, s) {
  le(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : me(t) && (e.setupState = Mr(t)), pl(e);
}
function pl(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || _t);
  {
    const i = zs(e);
    bt();
    try {
      rc(e);
    } finally {
      wt(), i();
    }
  }
}
const Bc = {
  get(e, t) {
    return Ue(e, "get", ""), e[t];
  }
};
function Vc(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, Bc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Hn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Mr(Fi(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in Ps)
        return Ps[s](e);
    },
    has(t, s) {
      return s in t || s in Ps;
    }
  })) : e.proxy;
}
function jc(e) {
  return le(e) && "__vccOpts" in e;
}
const Le = (e, t) => /* @__PURE__ */ Ia(e, t, Vs);
function Hc(e, t, s) {
  try {
    yn(-1);
    const n = arguments.length;
    return n === 2 ? me(t) && !te(t) ? vn(t) ? oe(e, null, [t]) : oe(e, t) : oe(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && vn(s) && (s = [s]), oe(e, t, s));
  } finally {
    yn(1);
  }
}
const Gc = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let bi;
const mo = typeof window < "u" && window.trustedTypes;
if (mo)
  try {
    bi = /* @__PURE__ */ mo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const hl = bi ? (e) => bi.createHTML(e) : (e) => e, Wc = "http://www.w3.org/2000/svg", Kc = "http://www.w3.org/1998/Math/MathML", Tt = typeof document < "u" ? document : null, yo = Tt && /* @__PURE__ */ Tt.createElement("template"), zc = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const i = t === "svg" ? Tt.createElementNS(Wc, e) : t === "mathml" ? Tt.createElementNS(Kc, e) : s ? Tt.createElement(e, { is: s }) : Tt.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => Tt.createTextNode(e),
  createComment: (e) => Tt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Tt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, s, n, i, o) {
    const r = s ? s.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), s), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      yo.innerHTML = hl(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const l = yo.content;
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
      r ? r.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, $t = "transition", vs = "animation", js = /* @__PURE__ */ Symbol("_vtc"), gl = {
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
}, Jc = /* @__PURE__ */ $e(
  {},
  Br,
  gl
), Yc = (e) => (e.displayName = "Transition", e.props = Jc, e), qc = /* @__PURE__ */ Yc(
  (e, { slots: t }) => Hc(za, Xc(e), t)
), Kt = (e, t = []) => {
  te(e) ? e.forEach((s) => s(...t)) : e && e(...t);
}, vo = (e) => e ? te(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Xc(e) {
  const t = {};
  for (const R in e)
    R in gl || (t[R] = e[R]);
  if (e.css === !1)
    return t;
  const {
    name: s = "v",
    type: n,
    duration: i,
    enterFromClass: o = `${s}-enter-from`,
    enterActiveClass: r = `${s}-enter-active`,
    enterToClass: l = `${s}-enter-to`,
    appearFromClass: a = o,
    appearActiveClass: u = r,
    appearToClass: f = l,
    leaveFromClass: g = `${s}-leave-from`,
    leaveActiveClass: b = `${s}-leave-active`,
    leaveToClass: y = `${s}-leave-to`
  } = e, C = Zc(i), w = C && C[0], H = C && C[1], {
    onBeforeEnter: q,
    onEnter: W,
    onEnterCancelled: Z,
    onLeave: B,
    onLeaveCancelled: F,
    onBeforeAppear: ee = q,
    onAppear: J = W,
    onAppearCancelled: G = Z
  } = t, I = (R, E, v, x) => {
    R._enterCancelled = x, zt(R, E ? f : l), zt(R, E ? u : r), v && v();
  }, V = (R, E) => {
    R._isLeaving = !1, zt(R, g), zt(R, y), zt(R, b), E && E();
  }, X = (R) => (E, v) => {
    const x = R ? J : W, S = () => I(E, R, v);
    Kt(x, [E, S]), _o(() => {
      zt(E, R ? a : o), xt(E, R ? f : l), vo(x) || bo(E, n, w, S);
    });
  };
  return $e(t, {
    onBeforeEnter(R) {
      Kt(q, [R]), xt(R, o), xt(R, r);
    },
    onBeforeAppear(R) {
      Kt(ee, [R]), xt(R, a), xt(R, u);
    },
    onEnter: X(!1),
    onAppear: X(!0),
    onLeave(R, E) {
      R._isLeaving = !0;
      const v = () => V(R, E);
      xt(R, g), R._enterCancelled ? (xt(R, b), xo(R)) : (xo(R), xt(R, b)), _o(() => {
        R._isLeaving && (zt(R, g), xt(R, y), vo(B) || bo(R, n, H, v));
      }), Kt(B, [R, v]);
    },
    onEnterCancelled(R) {
      I(R, !1, void 0, !0), Kt(Z, [R]);
    },
    onAppearCancelled(R) {
      I(R, !0, void 0, !0), Kt(G, [R]);
    },
    onLeaveCancelled(R) {
      V(R), Kt(F, [R]);
    }
  });
}
function Zc(e) {
  if (e == null)
    return null;
  if (me(e))
    return [ei(e.enter), ei(e.leave)];
  {
    const t = ei(e);
    return [t, t];
  }
}
function ei(e) {
  return ql(e);
}
function xt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.add(s)), (e[js] || (e[js] = /* @__PURE__ */ new Set())).add(t);
}
function zt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const s = e[js];
  s && (s.delete(t), s.size || (e[js] = void 0));
}
function _o(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Qc = 0;
function bo(e, t, s, n) {
  const i = e._endId = ++Qc, o = () => {
    i === e._endId && n();
  };
  if (s != null)
    return setTimeout(o, s);
  const { type: r, timeout: l, propCount: a } = eu(e, t);
  if (!r)
    return n();
  const u = r + "end";
  let f = 0;
  const g = () => {
    e.removeEventListener(u, b), o();
  }, b = (y) => {
    y.target === e && ++f >= a && g();
  };
  setTimeout(() => {
    f < a && g();
  }, l + 1), e.addEventListener(u, b);
}
function eu(e, t) {
  const s = window.getComputedStyle(e), n = (C) => (s[C] || "").split(", "), i = n(`${$t}Delay`), o = n(`${$t}Duration`), r = wo(i, o), l = n(`${vs}Delay`), a = n(`${vs}Duration`), u = wo(l, a);
  let f = null, g = 0, b = 0;
  t === $t ? r > 0 && (f = $t, g = r, b = o.length) : t === vs ? u > 0 && (f = vs, g = u, b = a.length) : (g = Math.max(r, u), f = g > 0 ? r > u ? $t : vs : null, b = f ? f === $t ? o.length : a.length : 0);
  const y = f === $t && /\b(?:transform|all)(?:,|$)/.test(
    n(`${$t}Property`).toString()
  );
  return {
    type: f,
    timeout: g,
    propCount: b,
    hasTransform: y
  };
}
function wo(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((s, n) => So(s) + So(e[n])));
}
function So(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function xo(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function tu(e, t, s) {
  const n = e[js];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const wn = /* @__PURE__ */ Symbol("_vod"), ml = /* @__PURE__ */ Symbol("_vsh"), Qs = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: s }) {
    e[wn] = e.style.display === "none" ? "" : e.style.display, s && t ? s.beforeEnter(e) : _s(e, t);
  },
  mounted(e, { value: t }, { transition: s }) {
    s && t && s.enter(e);
  },
  updated(e, { value: t, oldValue: s }, { transition: n }) {
    !t != !s && (n ? t ? (n.beforeEnter(e), _s(e, !0), n.enter(e)) : n.leave(e, () => {
      _s(e, !1);
    }) : _s(e, t));
  },
  beforeUnmount(e, { value: t }) {
    _s(e, t);
  }
};
function _s(e, t) {
  e.style.display = t ? e[wn] : "none", e[ml] = !t;
}
const su = /* @__PURE__ */ Symbol(""), nu = /(?:^|;)\s*display\s*:/;
function iu(e, t, s) {
  const n = e.style, i = Te(s);
  let o = !1;
  if (s && !i) {
    if (t)
      if (Te(t))
        for (const r of t.split(";")) {
          const l = r.slice(0, r.indexOf(":")).trim();
          s[l] == null && xs(n, l, "");
        }
      else
        for (const r in t)
          s[r] == null && xs(n, r, "");
    for (const r in s) {
      r === "display" && (o = !0);
      const l = s[r];
      l != null ? ru(
        e,
        r,
        !Te(t) && t ? t[r] : void 0,
        l
      ) || xs(n, r, l) : xs(n, r, "");
    }
  } else if (i) {
    if (t !== s) {
      const r = n[su];
      r && (s += ";" + r), n.cssText = s, o = nu.test(s);
    }
  } else t && e.removeAttribute("style");
  wn in e && (e[wn] = o ? n.display : "", e[ml] && (n.display = "none"));
}
const To = /\s*!important$/;
function xs(e, t, s) {
  if (te(s))
    s.forEach((n) => xs(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = ou(e, t);
    To.test(s) ? e.setProperty(
      Vt(n),
      s.replace(To, ""),
      "important"
    ) : e[n] = s;
  }
}
const Ao = ["Webkit", "Moz", "ms"], ti = {};
function ou(e, t) {
  const s = ti[t];
  if (s)
    return s;
  let n = ot(t);
  if (n !== "filter" && n in e)
    return ti[t] = n;
  n = rr(n);
  for (let i = 0; i < Ao.length; i++) {
    const o = Ao[i] + n;
    if (o in e)
      return ti[t] = o;
  }
  return t;
}
function ru(e, t, s, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Te(n) && s === n;
}
const Co = "http://www.w3.org/1999/xlink";
function ko(e, t, s, n, i, o = sa(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Co, t.slice(6, t.length)) : e.setAttributeNS(Co, t, s) : s == null || o && !ar(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : st(s) ? String(s) : s
  );
}
function Mo(e, t, s, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? hl(s) : s);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const l = o === "OPTION" ? e.getAttribute("value") || "" : e.value, a = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(s);
    (l !== a || !("_value" in e)) && (e.value = a), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let r = !1;
  if (s === "" || s == null) {
    const l = typeof e[t];
    l === "boolean" ? s = ar(s) : s == null && l === "string" ? (s = "", r = !0) : l === "number" && (s = 0, r = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  r && e.removeAttribute(i || t);
}
function as(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function lu(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Eo = /* @__PURE__ */ Symbol("_vei");
function au(e, t, s, n, i = null) {
  const o = e[Eo] || (e[Eo] = {}), r = o[t];
  if (n && r)
    r.value = n;
  else {
    const [l, a] = fu(t);
    if (n) {
      const u = o[t] = hu(
        n,
        i
      );
      as(e, l, u, a);
    } else r && (lu(e, l, r, a), o[t] = void 0);
  }
}
const cu = /(Once|Passive|Capture)$/, uu = /^on:?(?:Once|Passive|Capture)$/;
function fu(e) {
  let t, s;
  for (; (s = e.match(cu)) && !uu.test(e); )
    t || (t = {}), e = e.slice(0, e.length - s[1].length), t[s[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Vt(e.slice(2)), t];
}
let si = 0;
const du = /* @__PURE__ */ Promise.resolve(), pu = () => si || (du.then(() => si = 0), si = Date.now());
function hu(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    const i = s.value;
    if (te(i)) {
      const o = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        o.call(n), n._stopped = !0;
      };
      const r = i.slice(), l = [n];
      for (let a = 0; a < r.length && !n._stopped; a++) {
        const u = r[a];
        u && nt(
          u,
          t,
          5,
          l
        );
      }
    } else
      nt(
        i,
        t,
        5,
        [n]
      );
  };
  return s.value = e, s.attached = pu(), s;
}
const Po = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, gu = (e, t, s, n, i, o) => {
  const r = i === "svg";
  t === "class" ? tu(e, n, r) : t === "style" ? iu(e, s, n) : Pn(t) ? In(t) || au(e, t, s, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : mu(e, t, n, r)) ? (Mo(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ko(e, t, n, r, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (yu(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Te(n))) ? Mo(e, ot(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), ko(e, t, n, r));
};
function mu(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Po(t) && le(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Po(t) && Te(s) ? !1 : t in e;
}
function yu(e, t) {
  const s = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!s)
    return !1;
  const n = ot(t);
  return Array.isArray(s) ? s.some((i) => ot(i) === n) : Object.keys(s).some((i) => ot(i) === n);
}
const Io = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return te(t) ? (s) => on(t, s) : t;
};
function vu(e) {
  e.target.composing = !0;
}
function Ro(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ni = /* @__PURE__ */ Symbol("_assign");
function Lo(e, t, s) {
  return t && (e = e.trim()), s && (e = Pi(e)), e;
}
const wi = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, i) {
    e[ni] = Io(i);
    const o = n || i.props && i.props.type === "number";
    as(e, t ? "change" : "input", (r) => {
      r.target.composing || e[ni](Lo(e.value, s, o));
    }), (s || o) && as(e, "change", () => {
      e.value = Lo(e.value, s, o);
    }), t || (as(e, "compositionstart", vu), as(e, "compositionend", Ro), as(e, "change", Ro));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: s, modifiers: { lazy: n, trim: i, number: o } }, r) {
    if (e[ni] = Io(r), e.composing) return;
    const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? Pi(e.value) : e.value, a = t ?? "";
    if (l === a)
      return;
    const u = e.getRootNode();
    (u instanceof Document || u instanceof ShadowRoot) && u.activeElement === e && e.type !== "range" && (n && t === s || i && e.value.trim() === a) || (e.value = a);
  }
}, _u = ["ctrl", "shift", "alt", "meta"], bu = {
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
  exact: (e, t) => _u.some((s) => e[`${s}Key`] && !t.includes(s))
}, Ft = (e, t) => {
  if (!e) return e;
  const s = e._withMods || (e._withMods = {}), n = t.join(".");
  return s[n] || (s[n] = (i, ...o) => {
    for (let r = 0; r < t.length; r++) {
      const l = bu[t[r]];
      if (l && l(i, t)) return;
    }
    return e(i, ...o);
  });
}, wu = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Su = (e, t) => {
  const s = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return s[n] || (s[n] = (i) => {
    if (!("key" in i))
      return;
    const o = Vt(i.key);
    if (t.some(
      (r) => r === o || wu[r] === o
    ))
      return e(i);
  });
}, xu = /* @__PURE__ */ $e({ patchProp: gu }, zc);
let $o;
function Tu() {
  return $o || ($o = Cc(xu));
}
const yl = (...e) => {
  const t = Tu().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const i = Cu(n);
    if (!i) return;
    const o = t._component;
    !le(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const r = s(i, !1, Au(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), r;
  }, t;
};
function Au(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Cu(e) {
  return Te(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let vl;
const Gn = (e) => vl = e, _l = (
  /* istanbul ignore next */
  Symbol()
);
function Si(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Rs;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Rs || (Rs = {}));
function ku() {
  const e = dr(!0), t = e.run(() => /* @__PURE__ */ pe({}));
  let s = [], n = [];
  const i = Fi({
    install(o) {
      Gn(i), i._a = o, o.provide(_l, i), o.config.globalProperties.$pinia = i, n.forEach((r) => s.push(r)), n = [];
    },
    use(o) {
      return this._a ? s.push(o) : n.push(o), this;
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
const bl = () => {
};
function Oo(e, t, s, n = bl) {
  e.push(t);
  const i = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), n());
  };
  return !s && pr() && ia(i), i;
}
function is(e, ...t) {
  e.slice().forEach((s) => {
    s(...t);
  });
}
const Mu = (e) => e(), No = Symbol(), ii = Symbol();
function xi(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((s, n) => e.set(n, s)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const s in t) {
    if (!t.hasOwnProperty(s))
      continue;
    const n = t[s], i = e[s];
    Si(i) && Si(n) && e.hasOwnProperty(s) && !/* @__PURE__ */ Ce(n) && !/* @__PURE__ */ Et(n) ? e[s] = xi(i, n) : e[s] = n;
  }
  return e;
}
const Eu = (
  /* istanbul ignore next */
  Symbol()
);
function Pu(e) {
  return !Si(e) || !e.hasOwnProperty(Eu);
}
const { assign: Nt } = Object;
function Iu(e) {
  return !!(/* @__PURE__ */ Ce(e) && e.effect);
}
function Ru(e, t, s, n) {
  const { state: i, actions: o, getters: r } = t, l = s.state.value[e];
  let a;
  function u() {
    l || (s.state.value[e] = i ? i() : {});
    const f = /* @__PURE__ */ ka(s.state.value[e]);
    return Nt(f, o, Object.keys(r || {}).reduce((g, b) => (g[b] = Fi(Le(() => {
      Gn(s);
      const y = s._s.get(e);
      return r[b].call(y, y);
    })), g), {}));
  }
  return a = wl(e, u, t, s, n, !0), a;
}
function wl(e, t, s = {}, n, i, o) {
  let r;
  const l = Nt({ actions: {} }, s), a = { deep: !0 };
  let u, f, g = [], b = [], y;
  const C = n.state.value[e];
  !o && !C && (n.state.value[e] = {});
  let w;
  function H(G) {
    let I;
    u = f = !1, typeof G == "function" ? (G(n.state.value[e]), I = {
      type: Rs.patchFunction,
      storeId: e,
      events: y
    }) : (xi(n.state.value[e], G), I = {
      type: Rs.patchObject,
      payload: G,
      storeId: e,
      events: y
    });
    const V = w = Symbol();
    Ne().then(() => {
      w === V && (u = !0);
    }), f = !0, is(g, I, n.state.value[e]);
  }
  const q = o ? function() {
    const { state: I } = s, V = I ? I() : {};
    this.$patch((X) => {
      Nt(X, V);
    });
  } : (
    /* istanbul ignore next */
    bl
  );
  function W() {
    r.stop(), g = [], b = [], n._s.delete(e);
  }
  const Z = (G, I = "") => {
    if (No in G)
      return G[ii] = I, G;
    const V = function() {
      Gn(n);
      const X = Array.from(arguments), R = [], E = [];
      function v(T) {
        R.push(T);
      }
      function x(T) {
        E.push(T);
      }
      is(b, {
        args: X,
        name: V[ii],
        store: F,
        after: v,
        onError: x
      });
      let S;
      try {
        S = G.apply(this && this.$id === e ? this : F, X);
      } catch (T) {
        throw is(E, T), T;
      }
      return S instanceof Promise ? S.then((T) => (is(R, T), T)).catch((T) => (is(E, T), Promise.reject(T))) : (is(R, S), S);
    };
    return V[No] = !0, V[ii] = I, V;
  }, B = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: Oo.bind(null, b),
    $patch: H,
    $reset: q,
    $subscribe(G, I = {}) {
      const V = Oo(g, G, I.detached, () => X()), X = r.run(() => Ke(() => n.state.value[e], (R) => {
        (I.flush === "sync" ? f : u) && G({
          storeId: e,
          type: Rs.direct,
          events: y
        }, R);
      }, Nt({}, a, I)));
      return V;
    },
    $dispose: W
  }, F = /* @__PURE__ */ Nn(B);
  n._s.set(e, F);
  const J = (n._a && n._a.runWithContext || Mu)(() => n._e.run(() => (r = dr()).run(() => t({ action: Z }))));
  for (const G in J) {
    const I = J[G];
    if (/* @__PURE__ */ Ce(I) && !Iu(I) || /* @__PURE__ */ Et(I))
      o || (C && Pu(I) && (/* @__PURE__ */ Ce(I) ? I.value = C[G] : xi(I, C[G])), n.state.value[e][G] = I);
    else if (typeof I == "function") {
      const V = Z(I, G);
      J[G] = V, l.actions[G] = I;
    }
  }
  return Nt(F, J), Nt(/* @__PURE__ */ de(F), J), Object.defineProperty(F, "$state", {
    get: () => n.state.value[e],
    set: (G) => {
      H((I) => {
        Nt(I, G);
      });
    }
  }), n._p.forEach((G) => {
    Nt(F, r.run(() => G({
      store: F,
      app: n._a,
      pinia: n,
      options: l
    })));
  }), C && o && s.hydrate && s.hydrate(F.$state, C), u = !0, f = !0, F;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Wn(e, t, s) {
  let n, i;
  const o = typeof t == "function";
  typeof e == "string" ? (n = e, i = o ? s : t) : (i = e, n = e.id);
  function r(l, a) {
    const u = Fa();
    return l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    l || (u ? ks(_l, null) : null), l && Gn(l), l = vl, l._s.has(n) || (o ? wl(n, t, i, l) : Ru(n, i, l)), l._s.get(n);
  }
  return r.$id = n, r;
}
let Sn = !1;
function Do(e) {
  Sn = e;
}
function Lu() {
  return Sn;
}
function en(e, t, s) {
  if (e === "debug" && !Sn || e === "info" && !Sn) return;
  const n = "[晓乐]";
  s.length > 0 ? console[e](`${n} ${t}`, ...s) : console[e](`${n} ${t}`);
}
const z = {
  debug(e, ...t) {
    en("debug", e, t);
  },
  info(e, ...t) {
    en("info", e, t);
  },
  warn(e, ...t) {
    en("warn", e, t);
  },
  error(e, ...t) {
    en("error", e, t);
  },
  get isDebug() {
    return Lu();
  }
};
function $u() {
  return [
    { id: "netease", enabled: !0, priority: 0, config: { baseURL: "" } },
    { id: "local", enabled: !1, priority: 1, config: {} },
    { id: "custom", enabled: !1, priority: 2, config: { searchURL: "", resolveURL: "" } }
  ];
}
function oi() {
  return {
    volume: 65,
    playMode: "list",
    crossfade: !1,
    position: null,
    widgetMode: "dock",
    dockAlign: "bottom-left",
    showDragMiniText: !0,
    providers: $u(),
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
    debug: !1
  };
}
const he = /* @__PURE__ */ Wn("settings", {
  state: () => ({
    settings: oi(),
    storage: null
  }),
  getters: {
    defaults: () => oi()
  },
  actions: {
    init(e) {
      this.storage = e;
      const t = e.getSettings(), s = oi();
      if (t) {
        const n = typeof SillyTavern < "u" && SillyTavern.getContext()?.libs?.lodash ? SillyTavern.getContext().libs.lodash : null;
        n ? this.settings = n.merge(structuredClone(s), t) : this.settings = {
          ...s,
          ...t,
          providers: s.providers.map((i) => {
            const o = t.providers?.find((r) => r.id === i.id);
            return o ? { ...o, config: o.config ?? i.config ?? {} } : i;
          })
        };
      } else
        this.settings = s;
      Do(this.settings.debug);
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
    setProviderConfig(e, t) {
      const s = this.settings.providers.find((n) => n.id === e);
      s && (s.enabled = t, this.save());
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
      this.settings.debug = e, Do(e), this.save();
    },
    save() {
      this.storage && this.storage.setSettings(this.settings);
    }
  }
}), Ou = 800;
class Nu {
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
    const i = s;
    return n.add(i), this.audio.addEventListener(t, i), () => {
      this.audio.removeEventListener(t, i), n.delete(i);
    };
  }
  runFade(t, s) {
    const n = this.audio.volume, i = t - n, o = performance.now();
    this.fadeAbort = (l) => {
      l && (this.audio.volume = t), this.fadeRaf = 0, this.fadeAbort = null, s?.();
    };
    const r = (l) => {
      if (!this.fadeAbort) return;
      const a = l - o, u = Math.min(a / Ou, 1);
      this.audio.volume = Math.max(0, Math.min(1, n + i * u)), u >= 1 ? this.fadeAbort(!0) : this.fadeRaf = requestAnimationFrame(r);
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
const Fo = /\[(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?\]/g;
function Du(e) {
  const t = e.split(/\r?\n/), s = [];
  for (const n of t) {
    const i = new RegExp(Fo.source, "g"), o = [];
    let r;
    for (; (r = i.exec(n)) !== null; ) {
      const a = parseInt(r[1], 10), u = parseInt(r[2], 10), f = r[3] ?? "", g = f ? parseInt(f.padEnd(3, "0"), 10) : 0;
      o.push(a * 60 + u + g / 1e3);
    }
    if (o.length === 0) continue;
    const l = n.replace(new RegExp(Fo.source, "g"), "").trim();
    if (l !== "")
      for (const a of o)
        s.push({ time: a, text: l });
  }
  s.sort((n, i) => n.time - i.time);
  for (let n = 0; n < s.length; n++)
    n < s.length - 1 && (s[n].next = s[n + 1]);
  return s;
}
function Fu(e, t) {
  if (e.length === 0) return null;
  let s = null;
  for (const n of e)
    if (n.time <= t)
      s = n;
    else
      break;
  return s;
}
class Uu {
  constructor(t) {
    this.providers = t;
  }
  async searchAll(t) {
    const s = await Promise.allSettled(
      this.providers.map((o) => o.search(t))
    ), n = [], i = /* @__PURE__ */ new Map();
    return s.forEach((o, r) => {
      if (o.status !== "fulfilled") {
        z.warn("Provider search failed: " + this.providers[r]?.id, o.reason);
        return;
      }
      for (const l of o.value) {
        const a = `${l.name}__${l.artist}`;
        i.get(a) === void 0 && (i.set(a, n.length), n.push(l));
      }
    }), n;
  }
  async resolve(t, s, n) {
    const i = this.getProvider(s);
    return i ? new Promise((o) => {
      const r = setTimeout(() => o(null), 15e3);
      i.resolve(t, n).then((l) => {
        clearTimeout(r), o(l);
      }).catch((l) => {
        clearTimeout(r), z.warn("Resolve failed: " + s + "/" + t, l), o(null);
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
        } catch (i) {
          z.warn("Provider searchAndResolve failed: " + n.id, i);
        }
    return null;
  }
  getProvider(t) {
    return this.providers.find((s) => s.id === t);
  }
}
class Bu {
  constructor(t) {
    this.id = "netease", this.name = "网易云", this.apiBase = t?.apiBase?.trim() || "https://jgauby2m0k6n.erocraft.com", this.urlBase = t?.baseURL?.trim() || "https://music-api.gdstudio.xyz/api.php";
  }
  async fetchJson(t, s = 5e3) {
    try {
      const n = new AbortController(), i = setTimeout(() => n.abort(), s), o = await fetch(t, { signal: n.signal });
      return clearTimeout(i), o.ok ? await o.json() : null;
    } catch (n) {
      return z.warn("NetEase: fetchJson failed: " + t, n), null;
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
      let o = !1;
      const r = () => {
        i.removeEventListener("loadedmetadata", l), i.removeEventListener("error", a), clearTimeout(u), i.src = "";
      }, l = () => {
        o || (o = !0, r(), n(!0));
      }, a = () => {
        o || (o = !0, r(), n(!1));
      }, u = setTimeout(() => {
        o || (o = !0, r(), n(!1));
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
      artist: Array.isArray(i.artists) ? i.artists.map((o) => o.name).join(", ") : String(i.artists?.[0]?.name ?? ""),
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
    const [i, o] = await Promise.all([
      this.fetchJson(
        `${this.apiBase}/lyric?os=pc&id=${encodeURIComponent(t)}&lv=-1&kv=-1&tv=-1`
      ),
      this.fetchJson(
        `${this.apiBase}/detail?ids=%5B${encodeURIComponent(t)}%5D`
      )
    ]), r = o?.songs?.[0];
    return {
      url: String(n.url),
      lyric: i?.lrc?.lyric ? String(i.lrc.lyric) : void 0,
      cover: r?.album?.picUrl ? String(r.album.picUrl) : void 0,
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
    for (const o of i) {
      const r = await this.resolve(o.id, o.picId);
      if (!r) continue;
      if (!await this.probeAudio(r.url)) {
        z.warn("NetEase: audio probe failed for id=" + o.id + ", trying next");
        continue;
      }
      return r.name = o.name, r.artist = o.artist, r;
    }
    return z.warn('NetEase: no playable result for "' + n + '"'), null;
  }
}
class Vu {
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
class ju {
  constructor(t) {
    this.id = "custom", this.name = "自定义 API", this.searchURL = t?.searchURL, this.resolveURL = t?.resolveURL;
  }
  async fetchJson(t, s = 1e4) {
    try {
      const n = new AbortController(), i = setTimeout(() => n.abort(), s), o = await fetch(t, { signal: n.signal });
      return clearTimeout(i), o.ok ? await o.json() : null;
    } catch (n) {
      return z.warn("Custom API: fetchJson failed: " + t, n), null;
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
function ss(e) {
  const s = e.filter((n) => n.enabled).sort((n, i) => n.priority - i.priority).map((n) => {
    const i = n.config ?? {};
    switch (n.id) {
      case "netease":
        return new Bu({ baseURL: i.baseURL, apiBase: i.apiBase });
      case "local":
        return new Vu({
          storage: i.storage ? i.storage : void 0
        });
      case "custom":
        return new ju({
          searchURL: i.searchURL,
          resolveURL: i.resolveURL
        });
      default:
        return null;
    }
  }).filter((n) => n !== null);
  return new Uu(s);
}
const Hu = {
  "No Song": "当前无播放",
  "show lyrics": "显示歌词",
  List: "列表",
  Search: "搜索",
  "Search Song...": "搜索歌曲...",
  "Searching...": "搜索中...",
  "No results": "未找到匹配歌曲",
  "Type a song name to search": "输入歌名进行搜索",
  "No Songs": "暂无歌曲",
  "Local Files": "本地文件",
  Network: "网络",
  Upload: "上传",
  Chat: "聊天",
  "Upload audio file": "上传音频文件",
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
  Xiaoyue: "晓乐",
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
  "Data cleaned": "扩展数据已清理",
  "AI selected:": "AI 选曲",
  "AI recommendation failed": "AI 选曲失败",
  "AI analyzing": "AI 正在分析场景...",
  "AI already analyzing": "AI 正在分析中，请稍候",
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
  Providers: "数据源",
  "Default Volume": "默认音量",
  "Default Play Mode": "默认播放模式",
  Crossfade: "淡入淡出",
  "Smoothly fade in when starting playback and fade out when pausing or switching tracks": "开始播放时淡入，暂停或切换歌曲时淡出",
  "Custom opacity": "自定义透明度",
  Opacity: "透明度",
  "Adjust the player background opacity": "调整播放器背景透明度",
  "Not available in inline mode": "集成模式下不可用",
  "Enable or disable music sources": "启用或禁用音乐来源",
  Data: "数据管理",
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
  NetEase: "网易云",
  "Custom API": "自定义 API",
  Enable: "启用",
  Disable: "禁用",
  "Search and play songs from the network": "使用网络搜索并播放歌曲",
  "Upload and play songs from the server": "向服务端上传并播放歌曲",
  "Search and play songs from a custom API": "使用自定义 API 搜索并播放歌曲",
  Confirm: "确认",
  Cancel: "取消",
  "Upload warning text": "上传的音频文件将存储在 SillyTavern 服务端，通过服务端网络传输播放。这可能造成播放卡顿、占用服务器磁盘空间。确认要开启吗？",
  "Use a separate API endpoint for BGM agent loop instead of main API function calling": "使用独立 API 端点运行 BGM agent",
  "API baseURL": "API 地址",
  "Search URL": "搜索接口",
  "Resolve URL": "解析接口",
  Playback: "播放",
  General: "通用",
  Appearance: "外观",
  AI: "AI",
  About: "关于",
  Version: "版本",
  "A scene-aware music player extension for SillyTavern": "SillyTavern 情景音乐播放器扩展",
  GitHub: "GitHub",
  Repository: "仓库",
  "AGPLv3 License": "AGPLv3 许可证",
  Copyright: "版权",
  // AI BGM
  "AI BGM": "AI 选曲",
  "Enable AI-driven background music selection": "启用 AI 驱动的背景音乐选择",
  "AI Mode": "AI 模式",
  Off: "关闭",
  "Regex Match": "正则匹配",
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
  "AI is analyzing the scene...": "AI 正在分析场景...",
  "Fetch models": "获取模型列表",
  "Custom Prompt": "自定义提示词",
  "Edit the BGM instruction prompt. Use macros like ": "编辑 BGM 指令提示词。可使用 ",
  " for dynamic values.": " 等变量插入动态值。",
  "Edit Prompt": "编辑提示词",
  "Click to edit the BGM instruction prompt": "点击编辑 BGM 指令提示词",
  "Available macros:": "可用变量：",
  "The prompt must contain the markers": "提示词必须包含标记",
  "for BGM control to work.": "才能生效。",
  Save: "保存",
  Volume: "音量"
};
let os = null;
function Gu() {
  if (os) return os;
  try {
    if (typeof SillyTavern < "u") {
      const e = SillyTavern.getContext();
      e?.getCurrentLocale && (os = e.getCurrentLocale());
    }
  } catch {
  }
  return os || (os = (typeof navigator < "u" ? navigator.language || navigator.userLanguage : "en")?.toLowerCase() || "en"), os;
}
function m(e) {
  return Gu().startsWith("zh") ? Hu[e] ?? e : e;
}
function Sl() {
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
function Wu(e) {
  return new Promise((t, s) => {
    const n = new FileReader();
    n.onload = () => {
      const i = n.result, o = i.indexOf(",");
      t(o >= 0 ? i.slice(o + 1) : i);
    }, n.onerror = () => s(n.error), n.readAsDataURL(e);
  });
}
function Ku(e) {
  const t = e.lastIndexOf("."), s = t > 0 ? e.slice(0, t) : e, n = t > 0 ? e.slice(t) : "";
  return `${s.replace(/[^a-zA-Z0-9_\-.]/g, "_")}${n}`;
}
async function zu(e) {
  const t = await Wu(e), s = Ku(e.name), n = await fetch("/api/files/upload", {
    method: "POST",
    headers: Sl(),
    body: JSON.stringify({ name: s, data: t })
  });
  if (!n.ok)
    throw new Error(`Upload failed: ${n.status} ${n.statusText}`);
  return (await n.json()).path;
}
async function xl(e) {
  const t = await fetch("/api/files/delete", {
    method: "POST",
    headers: Sl(),
    body: JSON.stringify({ path: e })
  });
  t.ok || z.warn("deleteFile failed: " + t.status);
}
function ri() {
  return `stmp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
const Ze = /* @__PURE__ */ Wn("playlist", {
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
      return he().settings.playMode;
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
      const t = he().storage;
      if (!t) return;
      const s = t.getPlaylistData();
      s && (this.networkList = Array.isArray(s.network) ? s.network : [], this.serverList = Array.isArray(s.server) ? s.server : []);
    },
    savePlaylistData() {
      const t = he().storage;
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
      (e === "network" || e === "server") && this.savePlaylistData(), e === "server" && n?.serverPath && xl(n.serverPath), e === this.currentList && t === this.currentIndex ? this.currentIndex = -1 : e === this.currentList && t < this.currentIndex && this.currentIndex--;
    },
    addFromSearch(e, t = !0) {
      const s = this.networkList.findIndex(
        (i) => i.providerId === e.provider && i.providerTrackId === e.id
      );
      if (this.activeTab = "network", s >= 0)
        return t && (this.currentList = "network", this.play("network", s)), !1;
      const n = {
        id: ri(),
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
        (i) => i.providerId === e.provider && i.providerTrackId === e.id
      );
      if (this.activeTab = "chat", s >= 0) {
        t && (this.currentList = "chat", this.play("chat", s));
        return;
      }
      const n = {
        id: ri(),
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
      const s = await zu(t), n = {
        id: ri(),
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
            const i = Math.floor(Math.random() * e.length);
            if (i !== this.currentIndex) {
              s = i;
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
      let i = null;
      if (n.source === "server" && n.serverPath ? i = {
        url: n.serverPath,
        name: n.song,
        artist: n.artist ?? "",
        source: "server"
      } : n.providerId && n.providerTrackId && (i = await ss(he().settings.providers).resolve(n.providerTrackId, n.providerId, n.providerPicId), i && (i.name = n.song, i.artist = n.artist ?? "")), !i) {
        z.warn('Track unavailable (possibly delisted): "' + n.song + '"'), typeof toastr < "u" && toastr.warning(`${m("Cannot play")}：${n.song}（${m("Delisted")}）`, "晓乐");
        return;
      }
      await Me().loadAndPlay(i);
    },
    setActiveTab(e) {
      this.activeTab = e;
    }
  }
}), Me = /* @__PURE__ */ Wn("player", {
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
      const e = new Nu();
      this.audioEngine = e;
      const t = Me();
      e.on("timeupdate", () => {
        if (!e) return;
        t.currentTime = e.currentTime, t.duration = e.duration;
        const s = Fu(t.lyrics, e.currentTime), n = s ? t.lyrics.indexOf(s) : -1;
        t.currentLyricIndex = n;
      }), e.on("ended", () => {
        Ze().next();
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
      const t = this.audioEngine, s = he().settings.crossfade;
      t.load(e.url), this.currentTrack = e, e.lyric ? this.updateLyrics(e.lyric) : (this.lyrics = [], this.currentLyricIndex = -1), await t.play(s), e.cover;
    },
    async play() {
      const e = he().settings.crossfade;
      await this.audioEngine?.play(e);
    },
    pause() {
      const e = he().settings.crossfade;
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
      this.lyrics = Du(e), this.currentLyricIndex = -1;
    },
    destroy() {
      this.audioEngine?.destroy(), this.audioEngine = null, this.isPlaying = !1, this.currentTime = 0, this.duration = 0, this.lyrics = [], this.currentLyricIndex = -1, this.currentTrack = null;
    }
  }
}), Ju = /* @__PURE__ */ Wn("search", {
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
function Tl() {
  const e = /* @__PURE__ */ pe(0), t = /* @__PURE__ */ pe([]), s = /* @__PURE__ */ pe(null);
  function n(r, l) {
    r && (t.value[l] = r);
  }
  async function i() {
    await Ne();
    const l = Me().currentLyricIndex, a = s.value;
    if (!a || l < 0) {
      e.value = 0;
      return;
    }
    const u = t.value[l];
    if (!u) return;
    const f = u.offsetTop, g = u.offsetHeight, b = a.clientHeight;
    e.value = f - b / 2 + g / 2;
  }
  const o = Me();
  return Ke(() => o.currentLyricIndex, i), Ke(() => o.lyrics, () => {
    t.value = [], i();
  }), { scrollY: e, windowRef: s, setLineRef: n };
}
const Yu = ["width", "height"], qu = {
  key: 0,
  points: "6 3 20 12 6 21 6 3",
  fill: "currentColor",
  stroke: "none"
}, Xu = {
  key: 10,
  points: "6 9 12 15 18 9"
}, Zu = {
  key: 11,
  points: "18 15 12 9 6 15"
}, Qu = {
  key: 15,
  points: "20 6 9 17 4 12"
}, ef = /* @__PURE__ */ It({
  __name: "Icon",
  props: {
    name: {},
    size: {}
  },
  setup(e) {
    return (t, s) => (M(), N("svg", {
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
      e.name === "play" ? (M(), N("polygon", qu)) : e.name === "pause" ? (M(), N(re, { key: 1 }, [
        s[0] || (s[0] = c("rect", {
          x: "6",
          y: "4",
          width: "4",
          height: "16",
          rx: "1",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[1] || (s[1] = c("rect", {
          x: "14",
          y: "4",
          width: "4",
          height: "16",
          rx: "1",
          fill: "currentColor",
          stroke: "none"
        }, null, -1))
      ], 64)) : e.name === "prev" ? (M(), N(re, { key: 2 }, [
        s[2] || (s[2] = c("polygon", {
          points: "19 20 9 12 19 4 19 20",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[3] || (s[3] = c("line", {
          x1: "5",
          y1: "19",
          x2: "5",
          y2: "5"
        }, null, -1))
      ], 64)) : e.name === "next" ? (M(), N(re, { key: 3 }, [
        s[4] || (s[4] = c("polygon", {
          points: "5 4 15 12 5 20 5 4",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[5] || (s[5] = c("line", {
          x1: "19",
          y1: "5",
          x2: "19",
          y2: "19"
        }, null, -1))
      ], 64)) : e.name === "repeat" ? (M(), N(re, { key: 4 }, [
        s[6] || (s[6] = c("polyline", { points: "17 1 21 5 17 9" }, null, -1)),
        s[7] || (s[7] = c("path", { d: "M3 11V9a4 4 0 0 1 4-4h14" }, null, -1)),
        s[8] || (s[8] = c("polyline", { points: "7 23 3 19 7 15" }, null, -1)),
        s[9] || (s[9] = c("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" }, null, -1))
      ], 64)) : e.name === "repeat-one" ? (M(), N(re, { key: 5 }, [
        s[10] || (s[10] = Zs('<polyline points="17 1 21 5 17 9" data-v-6d96ffa0></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14" data-v-6d96ffa0></path><polyline points="7 23 3 19 7 15" data-v-6d96ffa0></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3" data-v-6d96ffa0></path><text x="12" y="14" text-anchor="middle" font-size="8" fill="currentColor" stroke="none" font-weight="bold" data-v-6d96ffa0>1</text>', 5))
      ], 64)) : e.name === "shuffle" ? (M(), N(re, { key: 6 }, [
        s[11] || (s[11] = Zs('<polyline points="16 3 21 3 21 8" data-v-6d96ffa0></polyline><line x1="4" y1="20" x2="21" y2="3" data-v-6d96ffa0></line><polyline points="21 16 21 21 16 21" data-v-6d96ffa0></polyline><line x1="15" y1="15" x2="21" y2="21" data-v-6d96ffa0></line><line x1="4" y1="4" x2="9" y2="9" data-v-6d96ffa0></line>', 5))
      ], 64)) : e.name === "search" ? (M(), N(re, { key: 7 }, [
        s[12] || (s[12] = c("circle", {
          cx: "11",
          cy: "11",
          r: "8"
        }, null, -1)),
        s[13] || (s[13] = c("line", {
          x1: "21",
          y1: "21",
          x2: "16.65",
          y2: "16.65"
        }, null, -1))
      ], 64)) : e.name === "plus" ? (M(), N(re, { key: 8 }, [
        s[14] || (s[14] = c("line", {
          x1: "12",
          y1: "5",
          x2: "12",
          y2: "19"
        }, null, -1)),
        s[15] || (s[15] = c("line", {
          x1: "5",
          y1: "12",
          x2: "19",
          y2: "12"
        }, null, -1))
      ], 64)) : e.name === "x" ? (M(), N(re, { key: 9 }, [
        s[16] || (s[16] = c("line", {
          x1: "18",
          y1: "6",
          x2: "6",
          y2: "18"
        }, null, -1)),
        s[17] || (s[17] = c("line", {
          x1: "6",
          y1: "6",
          x2: "18",
          y2: "18"
        }, null, -1))
      ], 64)) : e.name === "chevron-down" ? (M(), N("polyline", Xu)) : e.name === "chevron-up" ? (M(), N("polyline", Zu)) : e.name === "music" ? (M(), N(re, { key: 12 }, [
        s[18] || (s[18] = c("path", { d: "M9 18V5l12-2v13" }, null, -1)),
        s[19] || (s[19] = c("circle", {
          cx: "6",
          cy: "18",
          r: "3"
        }, null, -1)),
        s[20] || (s[20] = c("circle", {
          cx: "18",
          cy: "16",
          r: "3"
        }, null, -1))
      ], 64)) : e.name === "volume" ? (M(), N(re, { key: 13 }, [
        s[21] || (s[21] = c("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[22] || (s[22] = c("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1)),
        s[23] || (s[23] = c("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }, null, -1))
      ], 64)) : e.name === "volume-mute" ? (M(), N(re, { key: 14 }, [
        s[24] || (s[24] = c("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[25] || (s[25] = c("line", {
          x1: "23",
          y1: "9",
          x2: "17",
          y2: "15"
        }, null, -1)),
        s[26] || (s[26] = c("line", {
          x1: "17",
          y1: "9",
          x2: "23",
          y2: "15"
        }, null, -1))
      ], 64)) : e.name === "check" ? (M(), N("polyline", Qu)) : e.name === "loader" ? (M(), N(re, { key: 16 }, [
        s[27] || (s[27] = Zs('<line x1="12" y1="2" x2="12" y2="6" data-v-6d96ffa0></line><line x1="12" y1="18" x2="12" y2="22" data-v-6d96ffa0></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" data-v-6d96ffa0></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" data-v-6d96ffa0></line><line x1="2" y1="12" x2="6" y2="12" data-v-6d96ffa0></line><line x1="18" y1="12" x2="22" y2="12" data-v-6d96ffa0></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" data-v-6d96ffa0></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" data-v-6d96ffa0></line>', 8))
      ], 64)) : e.name === "list" ? (M(), N(re, { key: 17 }, [
        s[28] || (s[28] = Zs('<line x1="8" y1="6" x2="21" y2="6" data-v-6d96ffa0></line><line x1="8" y1="12" x2="21" y2="12" data-v-6d96ffa0></line><line x1="8" y1="18" x2="21" y2="18" data-v-6d96ffa0></line><circle cx="3.5" cy="6" r="1.5" fill="currentColor" stroke="none" data-v-6d96ffa0></circle><circle cx="3.5" cy="12" r="1.5" fill="currentColor" stroke="none" data-v-6d96ffa0></circle><circle cx="3.5" cy="18" r="1.5" fill="currentColor" stroke="none" data-v-6d96ffa0></circle>', 6))
      ], 64)) : be("", !0)
    ], 8, Yu));
  }
}), Lt = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, i] of t)
    s[n] = i;
  return s;
}, Pe = /* @__PURE__ */ Lt(ef, [["__scopeId", "data-v-6d96ffa0"]]), tf = { class: "stmp-mini-side stmp-mini-side-left" }, sf = {
  key: 0,
  class: "stmp-mini-cover"
}, nf = ["src"], of = {
  key: 1,
  class: "stmp-mini-cover stmp-mini-cover-placeholder"
}, rf = {
  key: 1,
  class: "stmp-mini-text stmp-mini-dock-fallback"
}, lf = { class: "stmp-mini-side stmp-mini-side-right" }, af = { class: "stmp-mini-controls" }, cf = ["aria-label"], uf = ["aria-label"], ff = {
  key: 1,
  class: "stmp-mini stmp-mini-drag stmp-mini-drag-idle"
}, df = { class: "stmp-mini-cover stmp-mini-cover-square" }, pf = ["src"], hf = {
  key: 2,
  class: "stmp-mini stmp-mini-drag"
}, gf = ["aria-label"], mf = ["src"], yf = { class: "stmp-mini-cover-overlay" }, vf = { class: "stmp-mini-drag-right" }, _f = { class: "stmp-mini-title-copy" }, bf = {
  class: "stmp-mini-title-copy",
  "aria-hidden": "true"
}, wf = {
  key: 0,
  class: "stmp-mini-lyric-segment"
}, Sf = /* @__PURE__ */ It({
  __name: "CollapsedBar",
  props: {
    isDock: { type: Boolean },
    isMobile: { type: Boolean }
  },
  setup(e) {
    const t = Me(), s = Ze(), n = he(), i = e, o = /* @__PURE__ */ pe(!1), r = Le(() => t.currentTrack?.cover || ""), l = Le(() => !!t.currentTrack), a = Le(() => n.settings.showDragMiniText), u = Le(() => {
      const V = t.currentTrack;
      if (!V) return "";
      const X = V.name, R = V.artist || "";
      return R ? `${X} - ${R}` : X;
    }), { scrollY: f, windowRef: g, setLineRef: b } = Tl(), y = /* @__PURE__ */ pe(null), C = /* @__PURE__ */ pe(null), w = /* @__PURE__ */ pe([]), H = /* @__PURE__ */ pe(0), q = /* @__PURE__ */ pe(0);
    function W(V, X) {
      V && (w.value[X] = V);
    }
    function Z() {
      const V = y.value, X = t.currentLyricIndex;
      if (!V || X < 0 || X >= w.value.length) {
        q.value = 0, H.value = 0;
        return;
      }
      const R = w.value[X];
      if (!R) return;
      const E = V.clientWidth, v = R.offsetLeft, x = R.offsetWidth, S = t.lyrics[X], T = S?.next ? Math.max(500, (S.next.time - S.time) * 1e3) : 5e3;
      if (x <= E)
        q.value = Math.min(400, T), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            H.value = -v;
          });
        });
      else {
        const Y = -(v + x - E), ie = Math.min(600, T * 0.2);
        q.value = ie, requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            H.value = -v;
          });
        }), setTimeout(() => {
          q.value = T - ie, requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              H.value = Y;
            });
          });
        }, ie);
      }
    }
    Ke(() => t.currentLyricIndex, Z), Ke(() => t.lyrics, () => {
      w.value = [], q.value = 0, H.value = 0, Ne(() => Z());
    });
    const B = /* @__PURE__ */ pe(null), F = /* @__PURE__ */ pe(!1);
    function ee() {
      const V = B.value;
      if (!V) {
        F.value = !1;
        return;
      }
      const X = V.querySelector(".stmp-mini-title-copy");
      if (!X) {
        F.value = !1;
        return;
      }
      const R = X.offsetWidth - 30;
      F.value = R > V.clientWidth;
    }
    Ke(u, () => {
      Ne(() => ee());
    });
    function J() {
      o.value = !0;
    }
    Ke(() => t.currentTrack?.url, () => {
      o.value = !1;
    });
    function G(V) {
      V.stopPropagation(), t.togglePlay();
    }
    function I(V) {
      V.stopPropagation(), s.next();
    }
    return Ws(() => {
      Ne(() => {
        Z(), ee();
      });
    }), Ks(() => {
    }), (V, X) => i.isDock ? (M(), N("div", {
      key: 0,
      class: ue(["stmp-mini", i.isMobile ? "stmp-mini-dock-mobile" : "stmp-mini-dock-desktop"])
    }, [
      c("div", tf, [
        r.value && !o.value ? (M(), N("div", sf, [
          c("img", {
            src: r.value,
            alt: "",
            onError: J
          }, null, 40, nf)
        ])) : (M(), N("div", of, [
          oe(Pe, {
            name: "music",
            size: 14
          })
        ]))
      ]),
      c("div", {
        ref_key: "dockWindowRef",
        ref: g,
        class: "stmp-mini-dock-text"
      }, [
        h(t).lyrics.length > 0 ? (M(), N("div", {
          key: 0,
          class: "stmp-mini-dock-scroll",
          style: Ut({ transform: `translateY(-${h(f)}px)` })
        }, [
          (M(!0), N(re, null, ze(h(t).lyrics, (R, E) => (M(), N("span", {
            key: E,
            ref_for: !0,
            ref: (v) => h(b)(v, E),
            class: ue(["stmp-mini-dock-line", { "stmp-mini-dock-line-active": E === h(t).currentLyricIndex }])
          }, O(R.text), 3))), 128))
        ], 4)) : (M(), N("span", rf, O(u.value), 1))
      ], 512),
      c("div", lf, [
        c("div", af, [
          c("button", {
            class: "stmp-mini-btn",
            "aria-label": h(t).isPlaying ? h(m)("Pause") : h(m)("Play"),
            onClick: G
          }, [
            oe(Pe, {
              name: h(t).isPlaying ? "pause" : "play",
              size: i.isMobile ? 16 : 14
            }, null, 8, ["name", "size"])
          ], 8, cf),
          c("button", {
            class: "stmp-mini-btn",
            "aria-label": h(m)("Next"),
            onClick: I
          }, [
            oe(Pe, {
              name: "next",
              size: i.isMobile ? 16 : 14
            }, null, 8, ["size"])
          ], 8, uf)
        ])
      ])
    ], 2)) : !l.value || !a.value ? (M(), N("div", ff, [
      c("div", df, [
        r.value && !o.value ? (M(), N("img", {
          key: 0,
          src: r.value,
          alt: "",
          onError: J
        }, null, 40, pf)) : (M(), lt(Pe, {
          key: 1,
          name: "music",
          size: 20
        }))
      ])
    ])) : (M(), N("div", hf, [
      c("button", {
        class: "stmp-mini-cover stmp-mini-cover-square",
        "aria-label": h(t).isPlaying ? h(m)("Pause") : h(m)("Play"),
        onClick: G
      }, [
        r.value && !o.value ? (M(), N("img", {
          key: 0,
          src: r.value,
          alt: "",
          onError: J
        }, null, 40, mf)) : (M(), lt(Pe, {
          key: 1,
          name: "music",
          size: 20
        })),
        c("div", yf, [
          oe(Pe, {
            name: h(t).isPlaying ? "pause" : "play",
            size: 18
          }, null, 8, ["name"])
        ])
      ], 8, gf),
      c("div", vf, [
        c("div", {
          ref_key: "titleContainerRef",
          ref: B,
          class: ue(["stmp-mini-title-drag", { overflowing: F.value }])
        }, [
          (M(), N("div", {
            class: "stmp-mini-title-track",
            key: u.value
          }, [
            c("span", _f, O(u.value), 1),
            c("span", bf, O(u.value), 1)
          ]))
        ], 2),
        c("div", {
          ref_key: "lyricContainerRef",
          ref: y,
          class: "stmp-mini-lyric"
        }, [
          c("div", {
            ref_key: "lyricTrackRef",
            ref: C,
            class: "stmp-mini-lyric-track",
            style: Ut({
              transform: `translateX(${H.value}px)`,
              transition: q.value > 0 ? `transform ${q.value}ms linear` : "none"
            })
          }, [
            (M(!0), N(re, null, ze(h(t).lyrics, (R, E) => (M(), N("span", {
              key: E,
              ref_for: !0,
              ref: (v) => W(v, E),
              class: ue(["stmp-mini-lyric-segment", { active: E === h(t).currentLyricIndex }])
            }, O(R.text) + "  ", 3))), 128)),
            h(t).lyrics.length === 0 ? (M(), N("span", wf, O(" "))) : be("", !0)
          ], 4)
        ], 512)
      ])
    ]));
  }
}), Uo = /* @__PURE__ */ Lt(Sf, [["__scopeId", "data-v-0d196a3f"]]), xf = { class: "stmp-playlist" }, Tf = { class: "stmp-tabs" }, Af = ["onClick"], Cf = {
  key: 0,
  class: "stmp-upload-area"
}, kf = ["disabled"], Mf = {
  key: 1,
  class: "stmp-empty"
}, Ef = ["onClick"], Pf = { class: "stmp-item-index" }, If = { class: "stmp-item-info" }, Rf = { class: "stmp-item-song" }, Lf = {
  key: 0,
  class: "stmp-item-artist"
}, $f = ["onClick"], Of = /* @__PURE__ */ It({
  __name: "PlaylistView",
  setup(e) {
    const t = Ze(), s = he(), n = Le(() => {
      const y = [
        { value: "network", label: m("Network") }
      ];
      return s.settings.providers.find((w) => w.id === "local")?.enabled && y.push({ value: "server", label: m("Upload") }), y.push({ value: "chat", label: m("Chat") }), y;
    });
    Ke(n, (y) => {
      y.some((C) => C.value === t.activeTab) || t.setActiveTab("network");
    });
    const i = /* @__PURE__ */ pe(null), o = /* @__PURE__ */ pe(!1), r = () => {
      i.value?.click();
    }, l = async (y) => {
      const C = y.target;
      if (!C.files || !C.files[0]) return;
      const w = C.files[0];
      o.value = !0;
      try {
        await t.addServerFile(w.name, w), typeof toastr < "u" && toastr.success(`${m("Uploaded")}：${w.name}`, "晓乐");
      } catch (H) {
        z.error("Upload failed:", H), typeof toastr < "u" && toastr.error(`${m("Upload failed")}：${w.name}`, "晓乐");
      } finally {
        o.value = !1;
      }
      C.value = "";
    }, a = Le(() => t.getListByTab(t.activeTab).map((C, w) => ({ index: w, item: C }))), u = Le(() => a.value.length === 0);
    function f(y) {
      t.play(t.activeTab, y);
    }
    function g(y) {
      t.removeItem(t.activeTab, y);
    }
    function b(y) {
      t.setActiveTab(y);
    }
    return (y, C) => (M(), N("div", xf, [
      c("div", Tf, [
        (M(!0), N(re, null, ze(n.value, (w) => (M(), N("div", {
          key: w.value,
          class: ue(["stmp-tab", { active: h(t).activeTab === w.value }]),
          onClick: (H) => b(w.value)
        }, O(w.label), 11, Af))), 128))
      ]),
      h(t).activeTab === "server" ? (M(), N("div", Cf, [
        c("input", {
          type: "file",
          accept: "audio/*",
          ref_key: "fileInputRef",
          ref: i,
          onChange: l,
          style: { display: "none" }
        }, null, 544),
        c("button", {
          class: "stmp-upload-btn",
          disabled: o.value,
          onClick: r
        }, O(o.value ? "..." : "+ " + h(m)("Upload audio file")), 9, kf)
      ])) : be("", !0),
      u.value ? (M(), N("div", Mf, O(h(m)("No Songs")), 1)) : (M(!0), N(re, { key: 2 }, ze(a.value, (w) => (M(), N("div", {
        key: w.item.id,
        class: ue(["stmp-item", { active: h(t).activeTab === h(t).currentList && w.index === h(t).currentIndex }]),
        onClick: (H) => f(w.index)
      }, [
        c("span", Pf, O(w.index + 1), 1),
        c("div", If, [
          c("span", Rf, O(w.item.song), 1),
          w.item.artist ? (M(), N("span", Lf, O(w.item.artist), 1)) : be("", !0)
        ]),
        c("button", {
          class: "stmp-item-del",
          onClick: Ft((H) => g(w.index), ["stop"])
        }, [
          oe(Pe, {
            name: "x",
            size: 14
          })
        ], 8, $f)
      ], 10, Ef))), 128))
    ]));
  }
}), Nf = /* @__PURE__ */ Lt(Of, [["__scopeId", "data-v-f6ac7959"]]), Df = { class: "stmp-search" }, Ff = { class: "stmp-search-bar" }, Uf = ["placeholder"], Bf = ["disabled"], Vf = {
  key: 0,
  class: "stmp-search-error"
}, jf = ["aria-label"], Hf = {
  key: 1,
  class: "stmp-search-loading"
}, Gf = {
  key: 2,
  class: "stmp-search-empty"
}, Wf = {
  key: 3,
  class: "stmp-search-hint"
}, Kf = {
  key: 4,
  class: "stmp-results"
}, zf = ["onClick"], Jf = { class: "stmp-result-name" }, Yf = {
  key: 0,
  class: "stmp-result-artist"
}, qf = ["aria-label", "onClick"], Xf = /* @__PURE__ */ It({
  __name: "SearchView",
  setup(e) {
    const t = Ju(), s = Ze(), n = he(), i = /* @__PURE__ */ pe(t.keyword), o = /* @__PURE__ */ pe(null);
    async function r() {
      t.setKeyword(i.value);
      const y = ss(n.settings.providers);
      await t.search(y);
    }
    const l = () => {
      r();
    };
    function a(y) {
      return s.networkList.some(
        (C) => C.providerId === y.provider && C.providerTrackId === y.id
      );
    }
    function u(y) {
      return s.networkList.findIndex(
        (C) => C.providerId === y.provider && C.providerTrackId === y.id
      );
    }
    function f(y) {
      const C = y.provider + y.id;
      if (o.value === C) return;
      const w = u(y);
      if (w >= 0) {
        s.play("network", w), o.value = C, setTimeout(() => {
          o.value = null;
        }, 600);
        return;
      }
      o.value = C, s.addFromSearch(y), setTimeout(() => {
        o.value = null;
      }, 600);
    }
    function g(y) {
      if (a(y)) {
        const C = u(y);
        C >= 0 && s.play("network", C);
        return;
      }
      s.addFromSearch(y, !1);
    }
    function b(y) {
      return o.value === y.provider + y.id;
    }
    return (y, C) => (M(), N("div", Df, [
      c("div", Ff, [
        qt(c("input", {
          "onUpdate:modelValue": C[0] || (C[0] = (w) => i.value = w),
          class: "stmp-search-input",
          placeholder: h(m)("Search Song..."),
          onKeydown: Su(r, ["enter"])
        }, null, 40, Uf), [
          [wi, i.value]
        ]),
        c("button", {
          class: "stmp-icon-btn",
          disabled: h(t).isSearching,
          onClick: r
        }, [
          h(t).isSearching ? (M(), lt(Pe, {
            key: 1,
            name: "loader",
            size: 16,
            class: "stmp-spin"
          })) : (M(), lt(Pe, {
            key: 0,
            name: "search",
            size: 16
          }))
        ], 8, Bf)
      ]),
      h(t).error ? (M(), N("div", Vf, [
        c("span", null, O(h(t).error), 1),
        c("button", {
          class: "stmp-retry-btn",
          "aria-label": h(m)("Retry"),
          onClick: l
        }, O(h(m)("Retry")), 9, jf)
      ])) : be("", !0),
      h(t).isSearching ? (M(), N("div", Hf, O(h(m)("Searching...")), 1)) : i.value && !h(t).results.length ? (M(), N("div", Gf, O(h(m)("No results")), 1)) : !i.value && !h(t).results.length ? (M(), N("div", Wf, O(h(m)("Type a song name to search")), 1)) : be("", !0),
      h(t).results.length ? (M(), N("div", Kf, [
        (M(!0), N(re, null, ze(h(t).results, (w) => (M(), N("div", {
          key: w.provider + w.id,
          class: ue(["stmp-result", { "stmp-result-playing": b(w) }])
        }, [
          c("div", {
            class: "stmp-result-info",
            onClick: (H) => f(w)
          }, [
            c("span", Jf, O(w.name), 1),
            w.artist ? (M(), N("span", Yf, O(w.artist), 1)) : be("", !0)
          ], 8, zf),
          c("button", {
            class: ue(["stmp-icon-btn stmp-result-add", { added: a(w) }]),
            "aria-label": a(w) ? h(m)("Added") : h(m)("Add to list"),
            onClick: Ft((H) => g(w), ["stop"])
          }, [
            oe(Pe, {
              name: a(w) ? "check" : "plus",
              size: 16
            }, null, 8, ["name"])
          ], 10, qf)
        ], 2))), 128))
      ])) : be("", !0)
    ]));
  }
}), Zf = /* @__PURE__ */ Lt(Xf, [["__scopeId", "data-v-3ecc63a1"]]), Qf = { class: "stmp-panel" }, ed = { class: "stmp-topbar stmp-drag-handle" }, td = ["aria-label"], sd = { class: "stmp-cover-large" }, nd = ["src"], id = {
  key: 1,
  class: "stmp-cover-placeholder"
}, od = { class: "stmp-track-name" }, rd = { class: "stmp-track-artist" }, ld = { class: "stmp-lyric-header" }, ad = { class: "stmp-track-name" }, cd = { class: "stmp-track-artist" }, ud = { class: "stmp-progress" }, fd = ["value"], dd = { class: "stmp-time" }, pd = { class: "stmp-controls" }, hd = { class: "stmp-ctrl-side stmp-search-side" }, gd = ["aria-label"], md = ["aria-label"], yd = ["aria-label"], vd = ["aria-label"], _d = ["aria-label"], bd = ["aria-label"], wd = { class: "stmp-ctrl-side stmp-volume-side" }, Sd = ["aria-label"], xd = ["value"], Td = {
  key: 0,
  class: "stmp-overlay"
}, Ad = { class: "stmp-overlay-header" }, Cd = { class: "stmp-overlay-title" }, kd = ["aria-label"], Md = { class: "stmp-overlay-body" }, Ed = /* @__PURE__ */ It({
  __name: "PlayerPanel",
  emits: ["collapse"],
  setup(e) {
    const t = Me(), s = Ze(), n = he(), i = Le(
      () => n.settings.widgetMode === "dock" && n.settings.dockAlign.startsWith("top-")
    ), o = /* @__PURE__ */ pe("cover"), r = /* @__PURE__ */ pe(null), l = /* @__PURE__ */ pe(!1), a = /* @__PURE__ */ pe(!1);
    let u = null, f = 0;
    const g = Le(() => t.currentTrack?.cover || ""), b = () => {
      l.value = !0;
    };
    Ke(
      () => t.currentTrack,
      () => {
        l.value = !1;
      }
    );
    const y = Le(
      () => t.duration > 0 ? t.currentTime / t.duration * 100 : 0
    ), { scrollY: C, windowRef: w, setLineRef: H } = Tl();
    function q(E) {
      const v = Math.floor(E / 60), x = Math.floor(E % 60);
      return v + ":" + x.toString().padStart(2, "0");
    }
    function W(E) {
      const v = E.target;
      t.seek(Number(v.value) / 100 * t.duration);
    }
    const Z = ["list", "random", "single"], B = {
      list: "repeat",
      random: "shuffle",
      single: "repeat-one"
    }, F = {
      list: "List Loop",
      random: "Random",
      single: "Single Loop"
    };
    function ee() {
      const E = n.settings.playMode, v = Z.indexOf(E), x = Z[(v + 1) % Z.length];
      n.setPlayMode(x), typeof toastr < "u" && toastr.info(`${m("Play mode")}：${m(F[x])}`, "晓乐");
    }
    function J(E) {
      const v = E.target;
      t.setVolume(Number(v.value));
    }
    function G() {
      u && clearTimeout(u), a.value = !0;
    }
    function I() {
      u = setTimeout(() => {
        a.value = !1;
      }, 300);
    }
    function V() {
      t.volume > 0 ? (f = t.volume, t.setVolume(0)) : t.setVolume(f || n.settings.volume);
    }
    function X(E) {
      r.value === E ? r.value = null : r.value = E;
    }
    function R() {
      r.value = null;
    }
    return (E, v) => (M(), N("div", Qf, [
      c("div", ed, [
        v[7] || (v[7] = c("div", { class: "stmp-topbar-spacer" }, null, -1)),
        c("button", {
          class: "stmp-icon-btn",
          "aria-label": h(m)("Collapse panel"),
          onClick: v[0] || (v[0] = Ft((x) => E.$emit("collapse"), ["stop"]))
        }, [
          oe(Pe, {
            name: i.value ? "chevron-up" : "chevron-down",
            size: 18
          }, null, 8, ["name"])
        ], 8, td)
      ]),
      c("div", {
        class: "stmp-display",
        onClick: v[1] || (v[1] = (x) => o.value = o.value === "cover" ? "lyric" : "cover")
      }, [
        c("div", {
          class: ue(["stmp-cover-mode", { hidden: o.value !== "cover" }])
        }, [
          c("div", sd, [
            g.value && !l.value ? (M(), N("img", {
              key: 0,
              src: g.value,
              alt: "cover",
              onError: b
            }, null, 40, nd)) : (M(), N("div", id, [
              oe(Pe, {
                name: "music",
                size: 48
              })
            ]))
          ]),
          c("div", od, O(h(t).currentTrack?.name || h(m)("No Song")), 1),
          c("div", rd, O((h(t).currentTrack?.artist || "").trim() || " "), 1)
        ], 2),
        c("div", {
          class: ue(["stmp-lyric-mode", { hidden: o.value !== "lyric" }])
        }, [
          c("div", ld, [
            c("div", ad, O(h(t).currentTrack?.name || h(m)("No Song")), 1),
            c("div", cd, O((h(t).currentTrack?.artist || "").trim() || " "), 1)
          ]),
          c("div", {
            ref_key: "lyricWindowRef",
            ref: w,
            class: "stmp-lyric-window"
          }, [
            h(t).lyrics.length > 0 ? (M(), N("div", {
              key: 0,
              class: "stmp-lyric-scroll",
              style: Ut({ transform: `translateY(-${h(C)}px)` })
            }, [
              (M(!0), N(re, null, ze(h(t).lyrics, (x, S) => (M(), N("div", {
                key: S,
                ref_for: !0,
                ref: (T) => h(H)(T, S),
                class: ue(["stmp-lyric-line", { "stmp-lyric-active": S === h(t).currentLyricIndex }])
              }, O(x.text), 3))), 128))
            ], 4)) : be("", !0)
          ], 512)
        ], 2)
      ]),
      c("div", ud, [
        c("input", {
          type: "range",
          min: "0",
          max: "100",
          step: "0.1",
          value: y.value,
          class: "stmp-range",
          onInput: W
        }, null, 40, fd),
        c("div", dd, [
          c("span", null, O(q(h(t).currentTime)), 1),
          c("span", null, O(q(h(t).duration)), 1)
        ])
      ]),
      c("div", pd, [
        c("div", hd, [
          c("button", {
            class: ue(["stmp-ctrl-btn", { active: r.value === "search" }]),
            "aria-label": h(m)("Search"),
            onClick: v[2] || (v[2] = Ft((x) => X("search"), ["stop"]))
          }, [
            oe(Pe, {
              name: "search",
              size: 18
            })
          ], 10, gd)
        ]),
        c("button", {
          class: "stmp-ctrl-btn",
          "aria-label": h(m)("Toggle play mode"),
          onClick: ee
        }, [
          oe(Pe, {
            name: B[h(n).settings.playMode],
            size: 16
          }, null, 8, ["name"])
        ], 8, md),
        c("button", {
          class: "stmp-ctrl-btn",
          "aria-label": h(m)("Previous"),
          onClick: v[3] || (v[3] = (x) => h(s).prev())
        }, [
          oe(Pe, {
            name: "prev",
            size: 18
          })
        ], 8, yd),
        c("button", {
          class: "stmp-ctrl-btn stmp-play-btn",
          "aria-label": h(t).isPlaying ? h(m)("Pause") : h(m)("Play"),
          onClick: v[4] || (v[4] = (x) => h(t).togglePlay())
        }, [
          oe(Pe, {
            name: h(t).isPlaying ? "pause" : "play",
            size: 24
          }, null, 8, ["name"])
        ], 8, vd),
        c("button", {
          class: "stmp-ctrl-btn",
          "aria-label": h(m)("Next"),
          onClick: v[5] || (v[5] = (x) => h(s).next())
        }, [
          oe(Pe, {
            name: "next",
            size: 18
          })
        ], 8, _d),
        c("button", {
          class: ue(["stmp-ctrl-btn", { active: r.value === "list" }]),
          "aria-label": h(m)("Playlist"),
          onClick: v[6] || (v[6] = Ft((x) => X("list"), ["stop"]))
        }, [
          oe(Pe, {
            name: "list",
            size: 16
          })
        ], 10, bd),
        c("div", wd, [
          c("div", {
            class: "stmp-volume-container",
            onMouseenter: G,
            onMouseleave: I
          }, [
            c("button", {
              class: "stmp-ctrl-btn",
              "aria-label": h(m)("Mute / Unmute"),
              onClick: V
            }, [
              oe(Pe, {
                name: h(t).volume === 0 ? "volume-mute" : "volume",
                size: 18
              }, null, 8, ["name"])
            ], 8, Sd),
            c("div", {
              class: ue(["stmp-volume-popup", { show: a.value }])
            }, [
              c("input", {
                type: "range",
                min: "0",
                max: "100",
                value: h(t).volume,
                class: "stmp-volume-vertical",
                orient: "vertical",
                onInput: J
              }, null, 40, xd)
            ], 2)
          ], 32)
        ])
      ]),
      oe(qc, { name: "stmp-overlay" }, {
        default: $r(() => [
          r.value ? (M(), N("div", Td, [
            c("div", Ad, [
              c("span", Cd, O(r.value === "list" ? h(m)("Playlist") : h(m)("Search")), 1),
              c("button", {
                class: "stmp-overlay-close",
                "aria-label": h(m)("Close"),
                onClick: Ft(R, ["stop"])
              }, [
                oe(Pe, {
                  name: "x",
                  size: 16
                })
              ], 8, kd)
            ]),
            c("div", Md, [
              r.value === "list" ? (M(), lt(Nf, { key: 0 })) : (M(), lt(Zf, { key: 1 }))
            ])
          ])) : be("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Bo = /* @__PURE__ */ Lt(Ed, [["__scopeId", "data-v-6072da0c"]]), Pd = {
  key: 1,
  class: "stmp-inline-expanded"
}, Vo = 3, Id = 500, Rd = /* @__PURE__ */ It({
  __name: "App",
  setup(e) {
    const t = he(), s = Me(), n = /* @__PURE__ */ pe(!1), i = /* @__PURE__ */ pe(null);
    let o = null;
    const r = Le(() => t.settings.widgetMode === "dock"), l = Le(() => t.settings.widgetMode === "inline"), a = Le(() => t.settings.widgetMode === "hidden"), u = /* @__PURE__ */ pe(window.innerWidth <= 768), f = /* @__PURE__ */ pe(!1), g = Le(() => t.settings.dockAlign.startsWith("top-")), b = Le(() => t.settings.customOpacity ? t.settings.opacity : 75), y = (ae) => {
      ae.key === "Escape" && (n.value = !1), ae.key === " " && ae.target === document.body && (ae.preventDefault(), s.togglePlay());
    };
    let C = 0, w = 0, H = 0, q = 0, W = !1, Z = !1, B = 0, F = !1, ee = null, J = null, G = 0, I = 0, V = 0, X = 0, R = 0, E = 0, v = 0;
    function x(ae) {
      if (r.value) return;
      const ye = ae.target;
      if (ye.closest("input, .stmp-result, .stmp-item, .stmp-upload-btn, .stmp-search-input, .stmp-controls, .stmp-lyrics, .stmp-overlay, .stmp-display, .stmp-overlay-close") || n.value && (!ye.closest(".stmp-drag-handle") || ye.closest("button")) || !n.value && ye.closest("button"))
        return;
      const Oe = i.value?.getBoundingClientRect();
      if (!Oe) return;
      C = ae.clientX, w = ae.clientY, H = Oe.left, q = Oe.top, W = !1, Z = !0, B = Date.now(), F = !1, i.value && (i.value.style.left = Oe.left + "px", i.value.style.top = Oe.top + "px", i.value.style.right = "auto", i.value.style.bottom = "auto"), ee = S, J = T;
      const ke = i.value;
      ke && (G = ke.offsetWidth || 60, I = ke.offsetHeight || 40, V = window.innerWidth - G, X = window.innerHeight - I, document.addEventListener("pointermove", ee), document.addEventListener("pointerup", J), ae.preventDefault());
    }
    function S(ae) {
      if (!i.value || !Z) return;
      const ye = ae.clientX - C, Oe = ae.clientY - w;
      (Math.abs(ye) > Vo || Math.abs(Oe) > Vo) && (W = !0);
      let ke = H + ye, Ae = q + Oe;
      ke = Math.max(0, Math.min(ke, V)), Ae = Math.max(0, Math.min(Ae, X)), E = ke, v = Ae, R || (R = requestAnimationFrame(() => {
        R = 0, i.value && (i.value.style.left = E + "px", i.value.style.top = v + "px");
      }));
    }
    function T() {
      Z = !1, R && (cancelAnimationFrame(R), R = 0, i.value && (i.value.style.left = E + "px", i.value.style.top = v + "px")), ee && document.removeEventListener("pointermove", ee), J && document.removeEventListener("pointerup", J), ee = null, J = null;
      const ae = Date.now() - B;
      if (W) {
        if (F = !0, i.value) {
          const ye = i.value.getBoundingClientRect();
          t.setPosition({ x: ye.left, y: ye.top }), n.value && Ne(() => Y());
        }
        return;
      }
      if (ae > Id) {
        F = !0;
        return;
      }
    }
    function Y() {
      if (!i.value) return;
      const ae = i.value.getBoundingClientRect(), ye = i.value.offsetWidth, Oe = i.value.offsetHeight;
      let ke = ae.left, Ae = ae.top;
      ke + ye > window.innerWidth && (ke = window.innerWidth - ye), Ae + Oe > window.innerHeight && (Ae = window.innerHeight - Oe), ke < 0 && (ke = 0), Ae < 0 && (Ae = 0), i.value.style.left = ke + "px", i.value.style.top = Ae + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", t.setPosition({ x: ke, y: Ae });
    }
    function ie() {
      if (!i.value || !r.value) return;
      const ae = t.settings.dockAlign, ye = ae.startsWith("top-"), Oe = ae.endsWith("-right"), ke = ye ? document.querySelector("#top-settings-holder") : document.querySelector("#send_form");
      if (!ke) return;
      const Ae = ke.getBoundingClientRect(), jt = i.value.offsetHeight || 38;
      if (ye) {
        const Ht = Math.max(80, window.innerHeight - Ae.bottom - 8);
        i.value.style.maxHeight = Ht + "px", i.value.style.top = Ae.bottom + "px";
      } else {
        const Ht = Math.max(80, Ae.top - 8);
        i.value.style.maxHeight = Ht + "px";
        let d = Ae.top - Math.min(jt, Ht);
        d < 4 && (d = 4), i.value.style.top = d + "px";
      }
      if (window.innerWidth <= 768)
        i.value.style.left = Ae.left + "px", i.value.style.width = Ae.width + "px";
      else {
        const Ht = i.value.offsetWidth;
        Oe ? i.value.style.left = Ae.right - Ht + "px" : i.value.style.left = Ae.left + "px", i.value.style.width = "";
      }
      i.value.style.right = "auto", i.value.style.bottom = "auto";
    }
    function Ie() {
      if (!i.value || r.value) return;
      const ae = t.settings.position;
      ae ? (i.value.style.left = ae.x + "px", i.value.style.top = ae.y + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", window.innerWidth <= 768 && Ne(() => Y())) : (i.value.style.left = window.innerWidth - i.value.offsetWidth - 16 + "px", i.value.style.top = "16px", i.value.style.right = "auto", i.value.style.bottom = "auto");
    }
    function Fe(ae) {
      if (F) {
        F = !1;
        return;
      }
      if (r.value && !n.value) {
        if (ae.target.closest("button, input")) return;
        xe();
        return;
      }
      if (!r.value && !n.value) {
        if (ae.target.closest("button, input")) return;
        xe();
      }
    }
    function ce(ae) {
      n.value || ae.target.closest("button, input") || xe();
    }
    function xe() {
      n.value = !n.value, Ne(() => {
        r.value ? ie() : l.value || t.settings.position && Y();
      });
    }
    Ke(() => t.settings.widgetMode, (ae) => {
      n.value = !1, i.value && (i.value.style.width = "", i.value.style.left = "", i.value.style.top = "", i.value.style.right = "", i.value.style.bottom = "", i.value.style.maxHeight = ""), ae === "inline" && (f.value = !!document.querySelector("#send_form")), Ne(() => {
        ae === "dock" ? ie() : ae === "drag" && Ie();
      });
    }), Ke(() => t.settings.dockAlign, () => {
      r.value && Ne(() => ie());
    }), Ws(() => {
      f.value = !!document.querySelector("#send_form"), Ne(() => {
        r.value ? ie() : l.value || Ie();
      }), i.value && typeof ResizeObserver < "u" && (o = new ResizeObserver(() => {
        r.value && ie();
      }), o.observe(i.value)), window.addEventListener("resize", Je), window.addEventListener("keydown", y);
    });
    function Je() {
      u.value = window.innerWidth <= 768, r.value ? Ne(() => ie()) : l.value || Ne(() => Y());
    }
    return Ks(() => {
      T(), o && (o.disconnect(), o = null), window.removeEventListener("resize", Je), window.removeEventListener("keydown", y);
    }), (ae, ye) => l.value ? (M(), N(re, { key: 0 }, [
      f.value ? (M(), lt(Ur, {
        key: 0,
        to: "#send_form"
      }, [
        n.value ? (M(), N("div", Pd, [
          oe(Bo, { onCollapse: xe })
        ])) : (M(), N("div", {
          key: 0,
          class: "stmp-inline-bar",
          onClick: ce
        }, [
          oe(Uo, {
            "is-dock": !0,
            "is-mobile": !0
          })
        ]))
      ])) : be("", !0)
    ], 64)) : a.value ? be("", !0) : (M(), N("div", {
      key: 1,
      ref_key: "widgetRef",
      ref: i,
      class: ue(["stmp-widget", {
        "stmp-expanded": n.value,
        "stmp-collapsed": !n.value,
        "stmp-dock": r.value,
        "stmp-dock-top": r.value && g.value,
        "stmp-dock-bottom": r.value && !g.value
      }]),
      style: Ut({ "--stmp-opacity": b.value + "%" }),
      onPointerdown: x,
      onClick: Fe
    }, [
      n.value ? (M(), lt(Bo, {
        key: 1,
        onCollapse: xe
      })) : (M(), lt(Uo, {
        key: 0,
        "is-dock": r.value,
        "is-mobile": u.value
      }, null, 8, ["is-dock", "is-mobile"]))
    ], 38));
  }
}), Ld = /* @__PURE__ */ Lt(Rd, [["__scopeId", "data-v-cf56cb18"]]);
var rs = class extends Error {
  constructor(e, t) {
    super("".concat(e, " at position ").concat(t)), this.position = t;
  }
};
function $d(e) {
  return /^[0-9A-Fa-f]$/.test(e);
}
function Jt(e) {
  return e >= "0" && e <= "9";
}
function Od(e) {
  return e >= " ";
}
function tn(e) {
  return `,:[]/{}()
+`.includes(e);
}
function jo(e) {
  return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e === "_" || e === "$";
}
function Ho(e) {
  return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e === "_" || e === "$" || e >= "0" && e <= "9";
}
var Go = /^(http|https|ftp|mailto|file|data|irc):\/\/$/, Wo = /^[A-Za-z0-9-._~:/?#@!$&'()*+;=]$/;
function Ko(e) {
  return `,[]/{}
+`.includes(e);
}
function zo(e) {
  return cn(e) || Nd.test(e);
}
var Nd = /^[[{\w-]$/;
function Dd(e) {
  return e === `
` || e === "\r" || e === "	" || e === "\b" || e === "\f";
}
function Qt(e, t) {
  let s = e.charCodeAt(t);
  return s === 32 || s === 10 || s === 9 || s === 13;
}
function Fd(e, t) {
  let s = e.charCodeAt(t);
  return s === 32 || s === 9 || s === 13;
}
function Ud(e, t) {
  let s = e.charCodeAt(t);
  return s === 160 || s >= 8192 && s <= 8202 || s === 8239 || s === 8287 || s === 12288;
}
function cn(e) {
  return Al(e) || Ti(e);
}
function Al(e) {
  return e === '"' || e === "“" || e === "”";
}
function Jo(e) {
  return e === '"';
}
function Ti(e) {
  return e === "'" || e === "‘" || e === "’" || e === "`" || e === "´";
}
function Yo(e) {
  return e === "'";
}
function bs(e, t) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = e.lastIndexOf(t);
  return n !== -1 ? e.substring(0, n) + (s ? "" : e.substring(n + 1)) : e;
}
function it(e, t) {
  let s = e.length;
  if (!Qt(e, s - 1)) return e + t;
  for (; Qt(e, s - 1); ) s--;
  return e.substring(0, s) + t + e.substring(s);
}
function Bd(e, t, s) {
  return e.substring(0, t) + e.substring(t + s);
}
function Vd(e) {
  return /[,\n][ \t\r]*$/.test(e);
}
var jd = { "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t" }, Hd = { '"': '"', "\\": "\\", "/": "/", b: "\b", f: "\f", n: `
`, r: "\r", t: "	" };
function qo(e) {
  let t = 0, s = "";
  a(), i() || R(), a();
  let n = u(",");
  for (n && o(), zo(e[t]) && Vd(s) ? (n || (s = it(s, ",")), w()) : n && (s = bs(s, ",")); e[t] === "}" || e[t] === "]"; ) t++, o();
  if (t >= e.length) return s;
  X();
  function i() {
    o();
    let S = y() || C() || H() || W() || Z() || F(!1) || ee();
    return o(), S;
  }
  function o() {
    let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, T = t, Y = r(S);
    do
      Y = l(), Y && (Y = r(S));
    while (Y);
    return t > T;
  }
  function r(S) {
    let T = S ? Qt : Fd, Y = "";
    for (; ; ) if (T(e, t)) Y += e[t], t++;
    else if (Ud(e, t)) Y += " ", t++;
    else break;
    return Y.length > 0 ? (s += Y, !0) : !1;
  }
  function l() {
    if (e[t] === "/" && e[t + 1] === "*") {
      for (; t < e.length && !Gd(e, t); ) t++;
      return t += 2, !0;
    }
    if (e[t] === "/" && e[t + 1] === "/") {
      for (; t < e.length && e[t] !== `
`; ) t++;
      return !0;
    }
    return !1;
  }
  function a() {
    if (e.slice(t, t + 3) === "```") {
      if (t += 3, jo(e[t])) for (; t < e.length && Ho(e[t]); ) t++;
      return o(), !0;
    }
    return !1;
  }
  function u(S) {
    return e[t] === S ? (s += e[t], t++, !0) : !1;
  }
  function f(S) {
    return e[t] === S ? (t++, !0) : !1;
  }
  function g() {
    return f("\\");
  }
  function b() {
    return o(), e[t] === "." && e[t + 1] === "." && e[t + 2] === "." ? (t += 3, o(), f(","), !0) : !1;
  }
  function y() {
    if (e[t] === "{") {
      s += "{", t++, o(), f(",") && o();
      let S = !0;
      for (; t < e.length && e[t] !== "}"; ) {
        let T;
        if (S ? (T = !0, S = !1) : (T = u(","), T || (s = it(s, ",")), o()), b(), !(H() || F(!0))) {
          e[t] === "}" || e[t] === "{" || e[t] === "]" || e[t] === "[" || e[t] === void 0 ? s = bs(s, ",") : E();
          break;
        }
        o();
        let Y = u(":"), ie = t >= e.length;
        Y || (zo(e[t]) || ie ? s = it(s, ":") : v()), i() || (Y || ie ? s += "null" : v());
      }
      return e[t] === "}" ? (s += "}", t++) : s = it(s, "}"), !0;
    }
    return !1;
  }
  function C() {
    if (e[t] === "[") {
      s += "[", t++, o(), f(",") && o();
      let S = !0;
      for (; t < e.length && e[t] !== "]"; ) if (S ? S = !1 : u(",") || (s = it(s, ",")), b(), !i()) {
        s = bs(s, ",");
        break;
      }
      return e[t] === "]" ? (s += "]", t++) : s = it(s, "]"), !0;
    }
    return !1;
  }
  function w() {
    let S = !0, T = !0;
    for (; T; ) S ? S = !1 : u(",") || (s = it(s, ",")), T = i();
    T || (s = bs(s, ",")), s = `[
`.concat(s, `
]`);
  }
  function H() {
    let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1, Y = e[t] === "\\";
    if (Y && (t++, Y = !0), cn(e[t])) {
      let ie = Jo(e[t]) ? Jo : Yo(e[t]) ? Yo : Ti(e[t]) ? Ti : Al, Ie = t, Fe = s.length, ce = '"';
      for (t++; ; ) {
        if (t >= e.length) {
          let xe = J(t - 1);
          return !S && tn(e.charAt(xe)) ? (t = Ie, s = s.substring(0, Fe), H(!0)) : (ce = it(ce, '"'), s += ce, !0);
        } else {
          if (t === T) return ce = it(ce, '"'), s += ce, !0;
          if (ie(e[t])) {
            let xe = t, Je = ce.length;
            if (ce += '"', t++, s += ce, o(!1), S || t >= e.length || tn(e[t]) || cn(e[t]) || Jt(e[t])) return q(), !0;
            let ae = J(xe - 1), ye = e.charAt(ae);
            if (ye === ",") return t = Ie, s = s.substring(0, Fe), H(!1, ae);
            if (tn(ye)) return t = Ie, s = s.substring(0, Fe), H(!0);
            s = s.substring(0, Fe), t = xe + 1, ce = "".concat(ce.substring(0, Je), "\\").concat(ce.substring(Je));
          } else if (S && Ko(e[t])) {
            if (e[t - 1] === ":" && Go.test(e.substring(Ie + 1, t + 2))) for (; t < e.length && Wo.test(e[t]); ) ce += e[t], t++;
            return ce = it(ce, '"'), s += ce, q(), !0;
          } else if (e[t] === "\\") {
            let xe = e.charAt(t + 1);
            if (Hd[xe] !== void 0) ce += e.slice(t, t + 2), t += 2;
            else if (xe === "u") {
              let Je = 2;
              for (; Je < 6 && $d(e[t + Je]); ) Je++;
              Je === 6 ? (ce += e.slice(t, t + 6), t += 6) : t + Je >= e.length ? t = e.length : x();
            } else ce += xe, t += 2;
          } else {
            let xe = e.charAt(t);
            xe === '"' && e[t - 1] !== "\\" ? (ce += "\\".concat(xe), t++) : Dd(xe) ? (ce += jd[xe], t++) : (Od(xe) || V(xe), ce += xe, t++);
          }
        }
        Y && g();
      }
    }
    return !1;
  }
  function q() {
    let S = !1;
    for (o(); e[t] === "+"; ) {
      S = !0, t++, o(), s = bs(s, '"', !0);
      let T = s.length;
      H() ? s = Bd(s, T, 1) : s = it(s, '"');
    }
    return S;
  }
  function W() {
    let S = t;
    if (e[t] === "-") {
      if (t++, G()) return I(S), !0;
      if (!Jt(e[t])) return t = S, !1;
    }
    for (; Jt(e[t]); ) t++;
    if (e[t] === ".") {
      if (t++, G()) return I(S), !0;
      if (!Jt(e[t])) return t = S, !1;
      for (; Jt(e[t]); ) t++;
    }
    if (e[t] === "e" || e[t] === "E") {
      if (t++, (e[t] === "-" || e[t] === "+") && t++, G()) return I(S), !0;
      if (!Jt(e[t])) return t = S, !1;
      for (; Jt(e[t]); ) t++;
    }
    if (!G()) return t = S, !1;
    if (t > S) {
      let T = e.slice(S, t), Y = /^0\d/.test(T);
      return s += Y ? '"'.concat(T, '"') : T, !0;
    }
    return !1;
  }
  function Z() {
    return B("true", "true") || B("false", "false") || B("null", "null") || B("True", "true") || B("False", "false") || B("None", "null");
  }
  function B(S, T) {
    return e.slice(t, t + S.length) === S ? (s += T, t += S.length, !0) : !1;
  }
  function F(S) {
    let T = t;
    if (jo(e[t])) {
      for (; t < e.length && Ho(e[t]); ) t++;
      let Y = t;
      for (; Qt(e, Y); ) Y++;
      if (e[Y] === "(") return t = Y + 1, i(), e[t] === ")" && (t++, e[t] === ";" && t++), !0;
    }
    for (; t < e.length && !Ko(e[t]) && !cn(e[t]) && (!S || e[t] !== ":"); ) t++;
    if (e[t - 1] === ":" && Go.test(e.substring(T, t + 2))) for (; t < e.length && Wo.test(e[t]); ) t++;
    if (t > T) {
      for (; Qt(e, t - 1) && t > 0; ) t--;
      let Y = e.slice(T, t);
      return s += Y === "undefined" ? "null" : JSON.stringify(Y), e[t] === '"' && t++, !0;
    }
  }
  function ee() {
    if (e[t] === "/") {
      let S = t;
      for (t++; t < e.length && (e[t] !== "/" || e[t - 1] === "\\"); ) t++;
      return t++, s += '"'.concat(e.substring(S, t), '"'), !0;
    }
  }
  function J(S) {
    let T = S;
    for (; T > 0 && Qt(e, T); ) T--;
    return T;
  }
  function G() {
    return t >= e.length || tn(e[t]) || Qt(e, t);
  }
  function I(S) {
    s += "".concat(e.slice(S, t), "0");
  }
  function V(S) {
    throw new rs("Invalid character ".concat(JSON.stringify(S)), t);
  }
  function X() {
    throw new rs("Unexpected character ".concat(JSON.stringify(e[t])), t);
  }
  function R() {
    throw new rs("Unexpected end of json string", e.length);
  }
  function E() {
    throw new rs("Object key expected", t);
  }
  function v() {
    throw new rs("Colon expected", t);
  }
  function x() {
    let S = e.slice(t, t + 6);
    throw new rs('Invalid unicode character "'.concat(S, '"'), t);
  }
}
function Gd(e, t) {
  return e[t] === "*" && e[t + 1] === "/";
}
function Wd(e) {
  if (!e) return null;
  let t = e.trim();
  t = t.replace(/^```(?:json)?\s*\n?/i, "").replace(/\n?```\s*$/i, "");
  try {
    return JSON.parse(t);
  } catch {
  }
  try {
    const n = qo(t);
    return JSON.parse(n);
  } catch {
  }
  const s = Kd(t);
  if (s)
    try {
      return JSON.parse(s);
    } catch {
      try {
        return JSON.parse(qo(s));
      } catch {
      }
    }
  return z.warn("Failed to parse JSON after all repair attempts:", e.slice(0, 200)), null;
}
function Kd(e) {
  let t = 0, s = -1, n = !1, i = !1;
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    if (i) {
      i = !1;
      continue;
    }
    if (r === "\\" && n) {
      i = !0;
      continue;
    }
    if (r === '"') {
      n = !n;
      continue;
    }
    if (!n) {
      if (r === "{")
        t === 0 && (s = o), t++;
      else if (r === "}" && (t--, t === 0 && s >= 0))
        return e.slice(s, o + 1);
    }
  }
  return null;
}
class zd {
  hasST() {
    return typeof SillyTavern < "u" && typeof SillyTavern.getContext == "function";
  }
  ctx() {
    return SillyTavern.getContext();
  }
  // ===== extensionSettings =====
  getSettings() {
    if (this.hasST())
      return this.ctx().extensionSettings[Ct] ?? null;
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
      s.extensionSettings[Ct] = t, s.saveSettingsDebounced();
      return;
    }
    localStorage.setItem(this.settingsKey(), JSON.stringify(t));
  }
  // ===== playlist data (separate key in extensionSettings) =====
  getPlaylistData() {
    if (this.hasST())
      return this.ctx().extensionSettings[`${Ct}-playlist`] ?? null;
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
      s.extensionSettings[`${Ct}-playlist`] = t, s.saveSettingsDebounced();
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
      const n = this.ctx(), i = n.chatMetadata;
      i[t] = s, n.saveMetadata();
      return;
    }
  }
  // ----- key helpers -----
  settingsKey() {
    return `${Ct}__settings`;
  }
  playlistKey() {
    return `${Ct}__playlist`;
  }
}
function Jd() {
  return new zd();
}
const Ct = "st-little-player", Gi = "stmp_bgm_history", Xo = 50;
function Cl() {
  const t = he().storage;
  if (!t) return [];
  const s = t.getMetadata(Gi);
  return Array.isArray(s) ? s : [];
}
function Wi(e, t, s) {
  const n = Cl();
  n.push({ song: e, artist: t, messageId: s, playedAt: Date.now() }), n.length > Xo && n.splice(0, n.length - Xo);
  const o = he().storage;
  o && o.setMetadata(Gi, n);
}
function kl(e) {
  return Cl().slice(-5).reverse().map((s) => `${s.song}${s.artist ? " - " + s.artist : ""}`);
}
function Ml(e) {
  let t = e;
  try {
    const s = Me(), n = s.currentTrack?.name ?? "", i = s.currentTrack?.artist ?? "", o = String(s.isPlaying), r = String(!!s.currentTrack), l = kl(5).join(", ");
    t = t.replace(/\{\{xiaoyueCurrentSong\}\}/gi, n).replace(/\{\{xiaoyueCurrentArtist\}\}/gi, i ? " - " + i : "").replace(/\{\{xiaoyueIsPlaying\}\}/gi, o).replace(/\{\{xiaoyueHasTrack\}\}/gi, r).replace(/\{\{xiaoyueRecentPlayed\}\}/gi, l);
  } catch {
  }
  return t;
}
const xn = "<!--XY_BGM_START-->", Ai = "<!--XY_BGM_END-->", Yd = `You need to manage background music for a roleplay chat session. You have access to tools for searching and playing music.

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
- When uncertain whether to change, keep the current track.`, qd = "## Conversation", Xd = "Analyze the above conversation and manage background music using the available tools.", El = `Background music control is needed for this roleplay session. After writing your narrative, append a BGM marker at the end of your response.

## Output Format (must follow strictly)

After your narrative, append exactly:
${xn}
{"song":"song name","artist":"artist name","action":"play"}
${Ai}

For "keep" (no change needed), omit song and artist:
${xn}
{"action":"keep"}
${Ai}

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
- Recently played: {{xiaoyueRecentPlayed}}`, Zd = `Background music control is available for this roleplay session.

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
- Recently played: {{xiaoyueRecentPlayed}}`, Tn = "search_music", Pl = "Search a music platform for songs by keyword. Returns up to 5 matches with IDs, names, artists, and durations.", Il = "Search keyword — song name, artist name, or both.", An = "play_music", Rl = "Play a song by its search result ID. The ID must come from a prior search_music result. Returns playback status.", Ll = "The ID from a search_music result entry.", Cn = "stop_music", $l = "Stop the currently playing music. Use only when the scene explicitly calls for silence.", kn = "get_current_track", Ol = "Get information about the currently playing track, including song name, artist, and playback status.", Qd = "播放音乐", ep = "播放音乐: {song}{artist}", tp = "停止音乐", sp = "停止音乐", Nl = (e) => e.length === 0 ? "No results found. Try different keywords." : JSON.stringify(e.map((t) => ({
  id: t.id,
  name: t.name,
  artist: t.artist,
  ...t.duration ? { duration: t.duration } : {}
}))), Dl = "Missing required parameter: keyword", Fl = 'No results found for: "{keyword}". Try different keywords.', Ul = "Missing required parameter: result_id", Bl = 'Invalid result_id: "{id}". This ID does not match any prior search result. Call search_music first.', Vl = "Now playing: {name}{artist}", jl = "Music stopped.", Hl = "No music is currently playing.", Gl = (e, t, s) => JSON.stringify({ song: e, artist: t, is_playing: s }), Wl = "No track is currently loaded.";
function np() {
  return Yd;
}
function ip(e) {
  const t = [];
  return t.push(qd), t.push(e), t.push(""), t.push(Xd), t.join(`
`);
}
function op(e, t) {
  return Ml(e && t ? t : El);
}
function rp() {
  return Ml(Zd);
}
const lp = /<!--XY_BGM_START-->[\s\S]*?<!--XY_BGM_END-->/g;
class ap {
  constructor() {
    this.interceptor = null, this.onGenerationEndedBound = (t) => {
      this.onGenerationEnded(t);
    };
  }
  init() {
    this.interceptor = (s, n, i, o) => {
      const l = SillyTavern.getContext().extensionSettings["st-little-player"];
      if (!l || l.aiMode !== "together") return;
      const a = he(), u = op(
        a.settings.togetherCustomPromptEnabled,
        a.settings.togetherCustomPrompt
      ), g = (l.togetherPromptRole || "system") === "system";
      s.splice(Math.max(0, s.length - 1), 0, {
        is_user: !g,
        is_system: g,
        name: "晓乐",
        mes: u,
        extra: { isSmallSys: g }
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
      const s = SillyTavern.getContext(), n = t > 0 ? t - 1 : 0, i = s.chat[n];
      if (!i) {
        z.warn("Together: GENERATION_ENDED but message not found", { messageId: t, actualId: n, chatLen: s.chat.length });
        return;
      }
      const o = i.mes ?? "", r = o.indexOf(xn);
      if (r === -1) return;
      z.debug("Together: marker found in message " + n);
      const l = o.indexOf(Ai, r);
      if (l === -1) {
        z.warn("Together: MARKER_END not found, marker may be truncated");
        return;
      }
      const a = o.slice(r + xn.length, l).trim();
      z.debug("Together: extracted marker content:", a);
      const u = Wd(a);
      if (z.debug("Together: parsed recommendation:", u), !u) {
        this.cleanupMarker(n, i);
        return;
      }
      if (u.action === "keep") {
        z.debug("Together: action=keep, no change"), this.cleanupMarker(n, i);
        return;
      }
      if (u.action === "play" && u.song) {
        z.debug("Together: searching for: " + u.song, u.artist);
        const f = he(), b = await ss(f.settings.providers).searchAll(u.artist ? `${u.song} ${u.artist}` : u.song);
        b.length > 0 ? (Ze().addFromAi(b[0], !0), Wi(u.song, u.artist, n), z.debug("Together: playing: " + b[0].name + " - " + b[0].artist), typeof toastr < "u" && toastr.success(`${m("AI selected:")}：${u.song}`, "晓乐")) : (z.warn("Together: track not found: " + u.song), typeof toastr < "u" && toastr.warning(`${m("Cannot play")}：${u.song}`, "晓乐"));
      }
      this.cleanupMarker(n, i);
    } catch (s) {
      z.error("Together: onGenerationEnded error:", s);
    }
  }
  cleanupMarker(t, s) {
    s.mes = (s.mes ?? "").replace(lp, "").trim();
    const n = SillyTavern.getContext();
    if (typeof n.updateMessageBlock == "function")
      try {
        n.updateMessageBlock(t, s);
      } catch (i) {
        z.warn("Together: failed to update message block", i);
      }
  }
}
let sn = null;
async function cp() {
  if (sn) return sn;
  try {
    const e = await Function("return import")()(
      /* @vite-ignore */
      "/scripts/extensions/regex/engine.js"
    );
    if (e?.getRegexedString && e?.regex_placement)
      return sn = e, sn;
  } catch {
  }
  return null;
}
const up = /<!--XY_BGM_START-->[\s\S]*?<!--XY_BGM_END-->/g;
function fp(e) {
  return e.replace(up, "").trim();
}
async function dp(e) {
  try {
    const t = SillyTavern.getContext(), s = t.chat;
    if (!s || s.length === 0) return "";
    const n = await cp(), i = s.slice(-e), o = [];
    for (const r of i) {
      const l = r.is_user ? t.name1 : r.name || t.name2 || "Character";
      let a = r.mes ?? "";
      if (n) {
        const u = r.is_user ? n.regex_placement.USER_INPUT : n.regex_placement.AI_OUTPUT;
        try {
          a = n.getRegexedString(a, u, { isPrompt: !0 });
        } catch {
        }
      }
      a = fp(a), a.trim() && o.push(`${l}: ${a}`);
    }
    return o.join(`

`);
  } catch {
    return "";
  }
}
const Zo = 5, pp = [
  {
    type: "function",
    function: {
      name: Tn,
      description: Pl,
      parameters: {
        type: "object",
        properties: {
          keyword: { type: "string", description: Il }
        },
        required: ["keyword"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: An,
      description: Rl,
      parameters: {
        type: "object",
        properties: {
          result_id: { type: "string", description: Ll }
        },
        required: ["result_id"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: Cn,
      description: $l,
      parameters: {
        type: "object",
        properties: {}
      }
    }
  },
  {
    type: "function",
    function: {
      name: kn,
      description: Ol,
      parameters: {
        type: "object",
        properties: {}
      }
    }
  }
];
async function hp() {
  const e = he().settings, t = e.aiApiUrl.replace(/\/$/, "") + "/models", s = await fetch(t, {
    method: "GET",
    headers: {
      ...e.aiApiKey ? { Authorization: `Bearer ${e.aiApiKey}` } : {}
    }
  });
  if (!s.ok) {
    const o = await s.text().catch(() => "");
    throw new Error(`API ${s.status}: ${o}`);
  }
  return ((await s.json())?.data ?? []).map((o) => o.id).filter(Boolean).sort();
}
async function gp(e) {
  const t = he().settings, s = t.aiApiUrl.replace(/\/$/, "") + "/chat/completions", n = {
    model: t.aiModel,
    messages: e,
    max_tokens: 4096,
    stream: !1,
    temperature: 0.7,
    tools: pp,
    tool_choice: "auto",
    thinking: { type: "disabled" }
  };
  z.debug("BGM API request:", { model: t.aiModel, messageCount: e.length });
  const i = await fetch(s, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...t.aiApiKey ? { Authorization: `Bearer ${t.aiApiKey}` } : {}
    },
    body: JSON.stringify(n)
  });
  if (!i.ok) {
    const l = await i.text().catch(() => "");
    throw z.warn("BGM API error: " + i.status, l), new Error(`API ${i.status}: ${l}`);
  }
  const r = (await i.json())?.choices?.[0]?.message;
  return {
    content: r?.content ?? null,
    tool_calls: r?.tool_calls
  };
}
async function mp(e, t, s) {
  switch (e) {
    case Tn: {
      const n = t.keyword;
      if (!n) return Dl;
      const i = he(), r = await ss(i.settings.providers).searchAll(n);
      if (r.length === 0)
        return Fl.replace("{keyword}", n);
      const l = r.slice(0, 5);
      for (const u of l)
        s.set(u.id, u);
      const a = Nl(
        l.map((u) => ({
          id: u.id,
          name: u.name,
          artist: u.artist,
          duration: u.duration
        }))
      );
      return z.debug("search_music results: " + l.length + " items for: " + n), a;
    }
    case An: {
      const n = t.result_id;
      if (!n) return Ul;
      const i = s.get(n);
      return i ? (Ze().addFromAi(i, !0), Wi(i.name, i.artist), typeof toastr < "u" && toastr.success(`${m("AI selected:")}：${i.name}`, "晓乐"), z.debug("play_music success: " + i.name + " - " + i.artist), Vl.replace("{name}", i.name).replace("{artist}", i.artist ? " - " + i.artist : "")) : Bl.replace("{id}", n);
    }
    case Cn: {
      const n = Me();
      return n.currentTrack ? (n.pause(), z.debug("stop_music success"), jl) : Hl;
    }
    case kn: {
      const n = Me();
      if (!n.currentTrack) return Wl;
      const i = Gl(
        n.currentTrack.name,
        n.currentTrack.artist ?? null,
        n.isPlaying
      );
      return z.debug("get_current_track:", i), i;
    }
    default:
      return `Unknown tool: ${e}`;
  }
}
async function yp(e, t) {
  const s = [
    { role: "system", content: e },
    { role: "user", content: t }
  ], n = /* @__PURE__ */ new Map();
  for (let i = 0; i < Zo; i++) {
    z.debug("BGM agent loop iteration " + (i + 1) + "/" + Zo);
    const o = await gp(s), r = {
      role: "assistant",
      content: o.content,
      ...o.tool_calls ? { tool_calls: o.tool_calls } : {}
    };
    if (s.push(r), !o.tool_calls || o.tool_calls.length === 0) {
      z.debug("BGM agent loop ended — no tool calls"), o.content && z.debug("BGM agent final text:", o.content);
      return;
    }
    for (const l of o.tool_calls) {
      const a = l.function.name;
      let u = {};
      try {
        u = JSON.parse(l.function.arguments || "{}");
      } catch {
        z.warn("Failed to parse tool arguments:", l.function.arguments);
      }
      z.debug("Executing tool: " + a, u);
      const f = await mp(a, u, n);
      z.debug("Tool result:", f), s.push({
        role: "tool",
        content: f,
        tool_call_id: l.id
      });
    }
  }
  z.warn("BGM agent loop reached max iterations");
}
const Qo = "xiaoyue_fc", nn = /* @__PURE__ */ new Map();
class er {
  constructor() {
    this.isAnalyzing = !1, this.lastTriggerTime = 0, this.destroyed = !1, this.onGenerationStarted = () => {
      nn.clear();
    }, this.onCharacterMessageRendered = (t) => {
      const s = he();
      if (!s.settings.aiAutoTrigger) return;
      const n = SillyTavern.getContext();
      (t <= 0 || n.chat.filter((o) => o.is_user).length === 0) && !s.settings.aiTriggerOnGreeting || this.triggerAgent(t);
    }, this.onMessageSwiped = (t) => {
      const s = he();
      if (!s.settings.aiAutoTrigger) return;
      const n = Math.floor(s.settings.aiCooldownMs / 2);
      Date.now() - this.lastTriggerTime < n || this.triggerAgent(t, !0);
    };
  }
  init() {
    he().settings.aiUseCustomApi ? this.initCustomApiPath() : this.initMainApiPath();
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
      const i = he();
      return i.settings.aiMode === "function_call" && !i.settings.aiUseCustomApi;
    };
    t.registerFunctionTool({
      name: Tn,
      displayName: "搜索音乐",
      description: Pl,
      parameters: {
        type: "object",
        properties: {
          keyword: { type: "string", description: Il }
        },
        required: ["keyword"]
      },
      action: async ({ keyword: i }) => {
        if (!i) return Dl;
        const o = he(), l = await ss(o.settings.providers).searchAll(i);
        if (l.length === 0)
          return Fl.replace("{keyword}", i);
        const a = l.slice(0, 5);
        for (const f of a)
          nn.set(f.id, f);
        const u = Nl(
          a.map((f) => ({
            id: f.id,
            name: f.name,
            artist: f.artist,
            duration: f.duration
          }))
        );
        return z.debug("search_music results: " + a.length + " items for: " + i), u;
      },
      formatMessage: ({ keyword: i }) => `搜索音乐: ${i ?? ""}`,
      shouldRegister: s,
      stealth: !0
    }), t.registerFunctionTool({
      name: An,
      displayName: Qd,
      description: Rl,
      parameters: {
        type: "object",
        properties: {
          result_id: { type: "string", description: Ll }
        },
        required: ["result_id"]
      },
      action: async ({ result_id: i }) => {
        if (!i) return Ul;
        const o = nn.get(i);
        return o ? (Ze().addFromAi(o, !0), Wi(o.name, o.artist), typeof toastr < "u" && toastr.success(`${m("AI selected:")}：${o.name}`, "晓乐"), z.debug("play_music success: " + o.name + " - " + o.artist), Vl.replace("{name}", o.name).replace("{artist}", o.artist ? " - " + o.artist : "")) : Bl.replace("{id}", i);
      },
      formatMessage: ({ result_id: i }) => ep.replace("{song}", i ?? "").replace("{artist}", ""),
      shouldRegister: s,
      stealth: !0
    }), t.registerFunctionTool({
      name: Cn,
      displayName: tp,
      description: $l,
      parameters: {
        type: "object",
        properties: {}
      },
      action: async () => {
        const i = Me();
        return i.currentTrack ? (i.pause(), jl) : Hl;
      },
      formatMessage: () => sp,
      shouldRegister: s,
      stealth: !0
    }), t.registerFunctionTool({
      name: kn,
      displayName: "当前播放",
      description: Ol,
      parameters: {
        type: "object",
        properties: {}
      },
      action: async () => {
        const i = Me();
        return i.currentTrack ? Gl(
          i.currentTrack.name,
          i.currentTrack.artist ?? null,
          i.isPlaying
        ) : Wl;
      },
      formatMessage: () => "获取当前播放",
      shouldRegister: s,
      stealth: !0
    });
    const n = rp();
    t.setExtensionPrompt(Qo, n, 1, 0, !1, 0), z.info("Function Call (main API): 4 tools registered + aux prompt set");
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
    const n = he();
    if (!(!s && Date.now() - this.lastTriggerTime < n.settings.aiCooldownMs || SillyTavern.getContext().generationInProgress)) {
      if (!n.settings.aiApiUrl || !n.settings.aiModel) {
        z.warn("Custom API path requires API URL + Model");
        return;
      }
      this.isAnalyzing = !0, this.lastTriggerTime = Date.now(), z.info("BGM agent loop started");
      try {
        const o = await dp(n.settings.aiContextMessages), r = np(), l = ip(o);
        await yp(r, l);
      } catch (o) {
        z.error("AI agent loop failed:", o), typeof toastr < "u" && toastr.error(m("AI recommendation failed"), "晓乐");
      } finally {
        this.isAnalyzing = !1;
      }
    }
  }
  destroy() {
    const t = he(), s = t.settings.aiUseCustomApi ? "custom API" : "main API";
    z.info("Function Call destroyed: " + s), this.destroyed = !0;
    const n = SillyTavern.getContext();
    t.settings.aiUseCustomApi ? (n.eventSource.removeListener(
      n.event_types.CHARACTER_MESSAGE_RENDERED,
      this.onCharacterMessageRendered
    ), n.eventSource.removeListener(
      n.event_types.MESSAGE_SWIPED,
      this.onMessageSwiped
    )) : (n.eventSource.removeListener(n.event_types.GENERATION_STARTED, this.onGenerationStarted), n.unregisterFunctionTool(Tn), n.unregisterFunctionTool(An), n.unregisterFunctionTool(Cn), n.unregisterFunctionTool(kn), n.setExtensionPrompt(Qo, "", -1, 0), nn.clear());
  }
}
let Ci = null;
class vp {
  constructor() {
    this.together = null, this.functionCall = null, this.currentMode = "off";
  }
  init() {
    this.applyMode(he().settings.aiMode), Ci = this, z.info("BGM controller initialized, mode: " + this.currentMode);
  }
  setMode(t) {
    t !== this.currentMode && (z.info("BGM mode changing to: " + t), this.destroyCurrent(), this.applyMode(t));
  }
  resetFunctionCall() {
    this.functionCall && (this.functionCall.destroy(), this.functionCall = new er(), this.functionCall.init());
  }
  applyMode(t) {
    this.currentMode = t;
    try {
      switch (t) {
        case "function_call":
          this.functionCall = new er(), this.functionCall.init();
          break;
        case "together":
          this.together = new ap(), this.together.init();
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
    z.info("BGM controller destroyed"), this.destroyCurrent(), this.currentMode = "off", Ci = null;
  }
}
function un() {
  return Ci;
}
const _p = {
  key: 0,
  class: "stmp-switch-label"
}, bp = { class: "stmp-switch" }, wp = ["checked", "disabled"], Sp = /* @__PURE__ */ It({
  __name: "ToggleSwitch",
  props: {
    modelValue: { type: Boolean },
    label: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const s = e, n = t, i = /* @__PURE__ */ pe(null);
    function o() {
      const r = s.modelValue;
      n("update:modelValue", !r), Ne(() => {
        i.value && s.modelValue === r && i.value.checked !== r && (i.value.checked = r);
      });
    }
    return (r, l) => (M(), N("label", {
      class: ue(["stmp-switch-row", { "stmp-switch-disabled": e.disabled }])
    }, [
      e.label ? (M(), N("span", _p, O(e.label), 1)) : be("", !0),
      c("span", bp, [
        c("input", {
          ref_key: "inputRef",
          ref: i,
          type: "checkbox",
          checked: e.modelValue,
          disabled: e.disabled,
          onChange: o
        }, null, 40, wp),
        l[0] || (l[0] = c("span", { class: "stmp-switch-track" }, [
          c("span", { class: "stmp-switch-thumb" })
        ], -1))
      ])
    ], 2));
  }
}), pt = /* @__PURE__ */ Lt(Sp, [["__scopeId", "data-v-529649ca"]]), xp = ["value", "placeholder", "readonly"], Tp = ["onMousedown", "onMouseenter"], Ap = /* @__PURE__ */ It({
  __name: "ComboBox",
  props: {
    modelValue: {},
    options: {},
    placeholder: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const s = e, n = t, i = /* @__PURE__ */ pe(null), o = /* @__PURE__ */ pe(null), r = /* @__PURE__ */ pe(!1), l = /* @__PURE__ */ pe(-1), a = /* @__PURE__ */ pe({}), u = Le(() => s.options), f = Le(() => s.options.length > 0);
    function g() {
      const F = o.value;
      if (!F) return;
      const ee = F.getBoundingClientRect();
      a.value = {
        position: "fixed",
        left: `${ee.left}px`,
        top: `${ee.bottom + 2}px`,
        width: `${ee.width}px`,
        zIndex: "10000"
      };
    }
    function b() {
      s.options.length !== 0 && (r.value = !0, l.value = -1, Ne(g));
    }
    function y() {
      r.value = !1, l.value = -1;
    }
    function C() {
      r.value ? y() : b();
    }
    function w(F) {
      n("update:modelValue", F), y();
    }
    function H(F) {
      n("update:modelValue", F.target.value), !r.value && s.options.length > 0 && (r.value = !0), l.value = -1, Ne(g);
    }
    function q(F) {
      if (!r.value) return;
      const ee = u.value;
      F.key === "ArrowDown" ? (F.preventDefault(), l.value = Math.min(l.value + 1, ee.length - 1)) : F.key === "ArrowUp" ? (F.preventDefault(), l.value = Math.max(l.value - 1, 0)) : F.key === "Enter" ? l.value >= 0 && l.value < ee.length ? (F.preventDefault(), w(ee[l.value])) : y() : F.key === "Escape" && (F.preventDefault(), y());
    }
    function W(F) {
      const ee = F.target;
      i.value?.contains(ee) || document.getElementById("stmp-combobox-dropdown")?.contains(ee) || y();
    }
    function Z() {
      r.value && y();
    }
    function B() {
      r.value && Ne(g);
    }
    return Ws(() => {
      document.addEventListener("mousedown", W, !0), window.addEventListener("scroll", Z, !0), window.addEventListener("resize", B);
    }), Ks(() => {
      document.removeEventListener("mousedown", W, !0), window.removeEventListener("scroll", Z, !0), window.removeEventListener("resize", B);
    }), Ke(() => s.modelValue, (F) => {
      o.value && o.value.value !== F && (o.value.value = F);
    }), (F, ee) => (M(), N("div", {
      ref_key: "rootRef",
      ref: i,
      class: ue(["stmp-combobox", { "has-options": e.options.length > 0 }])
    }, [
      c("input", {
        ref_key: "inputRef",
        ref: o,
        class: "text_pole",
        type: "text",
        value: e.modelValue,
        placeholder: e.placeholder,
        readonly: f.value,
        autocomplete: "off",
        onFocus: b,
        onInput: H,
        onKeydown: q
      }, null, 40, xp),
      e.options.length > 0 ? (M(), N("i", {
        key: 0,
        class: ue(["fa-solid fa-chevron-down stmp-combobox-arrow", { rotated: r.value }]),
        onMousedown: Ft(C, ["prevent"])
      }, null, 34)) : be("", !0),
      (M(), lt(Ur, { to: "body" }, [
        r.value && u.value.length > 0 ? (M(), N("div", {
          key: 0,
          id: "stmp-combobox-dropdown",
          class: "stmp-combobox-dropdown",
          style: Ut(a.value)
        }, [
          (M(!0), N(re, null, ze(u.value, (J, G) => (M(), N("div", {
            key: J,
            class: ue(["stmp-combobox-option", { active: G === l.value }]),
            onMousedown: Ft((I) => w(J), ["prevent"]),
            onMouseenter: (I) => l.value = G
          }, O(J), 43, Tp))), 128))
        ], 4)) : be("", !0)
      ]))
    ], 2));
  }
}), Cp = /* @__PURE__ */ Lt(Ap, [["__scopeId", "data-v-804fa027"]]), kp = { class: "stmp-settings" }, Mp = { class: "stmp-tab-bar" }, Ep = ["onClick"], Pp = { class: "stmp-tab-content" }, Ip = { class: "stmp-tab-panel" }, Rp = { class: "stmp-row" }, Lp = { class: "stmp-row-info" }, $p = { class: "stmp-row-title" }, Op = { class: "stmp-row-desc" }, Np = { class: "stmp-chips" }, Dp = ["onClick"], Fp = {
  key: 0,
  class: "stmp-row"
}, Up = { class: "stmp-row-info" }, Bp = { class: "stmp-row-title" }, Vp = { class: "stmp-row-desc" }, jp = { class: "stmp-chips" }, Hp = ["onClick"], Gp = {
  key: 1,
  class: "stmp-row"
}, Wp = { class: "stmp-row-info" }, Kp = { class: "stmp-row-title" }, zp = { class: "stmp-row-desc" }, Jp = {
  key: 2,
  class: "stmp-row"
}, Yp = { class: "stmp-row-info" }, qp = { class: "stmp-row-title" }, Xp = { class: "stmp-row-desc" }, Zp = {
  key: 3,
  class: "stmp-row"
}, Qp = { class: "stmp-row-info" }, eh = { class: "stmp-row-title" }, th = { class: "stmp-slider-wrap" }, sh = ["value"], nh = { class: "stmp-slider-val" }, ih = { class: "stmp-tab-panel" }, oh = { class: "stmp-row" }, rh = { class: "stmp-row-info" }, lh = { class: "stmp-row-title" }, ah = { class: "stmp-slider-wrap" }, ch = ["value"], uh = { class: "stmp-slider-val" }, fh = { class: "stmp-row" }, dh = { class: "stmp-row-info" }, ph = { class: "stmp-row-title" }, hh = { class: "stmp-chips" }, gh = ["onClick"], mh = { class: "stmp-row" }, yh = { class: "stmp-row-info" }, vh = { class: "stmp-row-title" }, _h = { class: "stmp-row-desc" }, bh = { class: "stmp-row" }, wh = { class: "stmp-row-info" }, Sh = { class: "stmp-row-title" }, xh = { class: "stmp-row-desc" }, Th = {
  key: 0,
  class: "stmp-provider-fields"
}, Ah = ["onUpdate:modelValue", "placeholder"], Ch = ["onUpdate:modelValue", "placeholder"], kh = { class: "stmp-row" }, Mh = { class: "stmp-row-info" }, Eh = { class: "stmp-row-title" }, Ph = { class: "stmp-row-desc" }, Ih = { class: "stmp-row" }, Rh = { class: "stmp-row-info" }, Lh = { class: "stmp-row-title" }, $h = { class: "stmp-row-desc" }, Oh = { class: "stmp-tab-panel" }, Nh = { class: "stmp-row" }, Dh = { class: "stmp-row-info" }, Fh = { class: "stmp-row-title" }, Uh = { class: "stmp-row-desc" }, Bh = { class: "stmp-row" }, Vh = { class: "stmp-row-info" }, jh = { class: "stmp-row-title" }, Hh = { class: "stmp-row-desc" }, Gh = { class: "stmp-chips" }, Wh = ["onClick"], Kh = { class: "stmp-row" }, zh = { class: "stmp-row-info" }, Jh = { class: "stmp-row-title" }, Yh = { class: "stmp-row-desc" }, qh = { class: "stmp-row" }, Xh = { class: "stmp-row-info" }, Zh = { class: "stmp-row-title" }, Qh = { class: "stmp-row-desc" }, eg = ["value"], tg = { class: "stmp-row" }, sg = { class: "stmp-row-info" }, ng = { class: "stmp-row-title" }, ig = { class: "stmp-row-desc" }, og = ["value"], rg = { class: "stmp-row" }, lg = { class: "stmp-row-info" }, ag = { class: "stmp-row-title" }, cg = { class: "stmp-row-desc" }, ug = { class: "stmp-model-wrap" }, fg = ["title"], dg = { class: "stmp-row" }, pg = { class: "stmp-row-info" }, hg = { class: "stmp-row-title" }, gg = { class: "stmp-row-desc" }, mg = { class: "stmp-slider-wrap" }, yg = ["value"], vg = { class: "stmp-slider-val" }, _g = { class: "stmp-row" }, bg = { class: "stmp-row-info" }, wg = { class: "stmp-row-title" }, Sg = { class: "stmp-row-desc" }, xg = {
  key: 0,
  class: "stmp-row"
}, Tg = { class: "stmp-row-info" }, Ag = { class: "stmp-row-title" }, Cg = { class: "stmp-row-desc" }, kg = { class: "stmp-row" }, Mg = { class: "stmp-row-info" }, Eg = { class: "stmp-row-title" }, Pg = { class: "stmp-row-desc" }, Ig = { class: "stmp-chips" }, Rg = ["onClick"], Lg = { class: "stmp-row" }, $g = { class: "stmp-row-info" }, Og = { class: "stmp-row-title" }, Ng = { class: "stmp-row-desc" }, Dg = {
  key: 0,
  class: "stmp-row"
}, Fg = { class: "stmp-row-info" }, Ug = { class: "stmp-row-title" }, Bg = { class: "stmp-row-desc" }, Vg = ["title"], jg = { class: "stmp-tab-panel" }, Hg = { class: "stmp-row" }, Gg = { class: "stmp-row-info" }, Wg = { class: "stmp-row-title" }, Kg = { class: "stmp-row-desc" }, zg = { class: "stmp-row" }, Jg = { class: "stmp-row-info" }, Yg = { class: "stmp-row-title" }, qg = { class: "stmp-row-desc" }, Xg = { class: "stmp-row" }, Zg = { class: "stmp-row-info" }, Qg = { class: "stmp-row-title" }, em = { class: "stmp-row-desc" }, tm = { class: "stmp-about" }, sm = { class: "stmp-about-version" }, nm = { class: "stmp-about-desc" }, im = "https://github.com/vvb7456/ST-little-player", om = /* @__PURE__ */ It({
  __name: "SettingsView",
  setup(e) {
    const t = he(), s = Ze(), n = /* @__PURE__ */ pe("appearance"), i = [
      { id: "appearance", label: m("Appearance"), icon: "fa-solid fa-palette" },
      { id: "playback", label: m("Playback"), icon: "fa-solid fa-music" },
      { id: "ai", label: m("AI"), icon: "fa-solid fa-wand-magic-sparkles" },
      { id: "general", label: m("General"), icon: "fa-solid fa-sliders" }
    ], o = [
      { value: "dock", label: m("Dock"), icon: "fa-solid fa-grip-lines" },
      { value: "drag", label: m("Drag"), icon: "fa-solid fa-up-down-left-right" },
      { value: "inline", label: m("Inline"), icon: "fa-solid fa-puzzle-piece" },
      { value: "hidden", label: m("Hidden"), icon: "fa-solid fa-eye-slash" }
    ], r = [
      { value: "top-left", label: m("Top Left"), icon: "fa-solid fa-arrow-up-from-left" },
      { value: "top-right", label: m("Top Right"), icon: "fa-solid fa-arrow-up-from-right" },
      { value: "bottom-left", label: m("Bottom Left"), icon: "fa-solid fa-arrow-down-from-left" },
      { value: "bottom-right", label: m("Bottom Right"), icon: "fa-solid fa-arrow-down-from-right" }
    ], l = () => t.settings.widgetMode === "dock" || t.settings.widgetMode === "drag";
    function a(E) {
      const v = E.target;
      t.setOpacity(Number(v.value));
    }
    const u = [
      { value: "list", label: m("List Loop"), icon: "fa-solid fa-repeat" },
      { value: "random", label: m("Random"), icon: "fa-solid fa-shuffle" },
      { value: "single", label: m("Single Loop"), icon: "fa-solid fa-repeat" }
    ];
    function f(E) {
      const v = E.target;
      t.setVolume(Number(v.value));
    }
    const g = {
      netease: m("Network"),
      local: m("Upload"),
      custom: m("Custom API")
    }, b = {
      netease: m("Search and play songs from the network"),
      local: m("Upload and play songs from the server"),
      custom: m("Search and play songs from a custom API")
    }, y = [
      { value: "together", label: m("Together"), icon: "fa-solid fa-link" },
      { value: "function_call", label: m("Function Call"), icon: "fa-solid fa-screwdriver-wrench" }
    ];
    function C(E) {
      t.setAiMode(E), un()?.setMode(E);
    }
    function w(E) {
      t.setAiUseCustomApi(E), un()?.resetFunctionCall();
    }
    function H(E) {
      const v = E ? "function_call" : "off";
      t.setAiMode(v), un()?.setMode(v);
    }
    function q(E) {
      const v = E.target;
      t.setAiContextMessages(Number(v.value));
    }
    const W = /* @__PURE__ */ pe([]), Z = /* @__PURE__ */ pe(!1);
    async function B() {
      if (Z.value) return;
      if (!t.settings.aiApiUrl) {
        typeof toastr < "u" && toastr.warning(m("Please fill API URL"), "晓乐");
        return;
      }
      Z.value = !0;
      try {
        const v = await hp();
        W.value = v, v.length === 0 ? typeof toastr < "u" && toastr.info(m("No models returned"), "晓乐") : typeof toastr < "u" && toastr.success(`${m("models found")} ${v.length} 个模型`, "晓乐");
      } catch (v) {
        z.error("Failed to fetch models:", v), typeof toastr < "u" && toastr.error(m("Failed to fetch models"), "晓乐");
      } finally {
        Z.value = !1;
      }
    }
    function F(E) {
      const v = t.settings.providers.find((x) => x.id === E);
      if (v) {
        if (!v.enabled && E === "local") {
          const x = SillyTavern.getContext();
          if (x?.callGenericPopup && x?.POPUP_TYPE) {
            x.callGenericPopup(
              m("Upload warning text"),
              x.POPUP_TYPE.CONFIRM,
              "",
              { okButton: m("Confirm"), cancelButton: m("Cancel") }
            ).then((S) => {
              S === 1 && (v.enabled = !0, t.save(), typeof toastr < "u" && toastr.info(`${m("Source enabled")}：${g[E] || E}`, "晓乐"));
            });
            return;
          }
        }
        v.enabled = !v.enabled, t.save(), typeof toastr < "u" && toastr.info(`${v.enabled ? m("Source enabled") : m("Source disabled")}：${g[E] || E}`, "晓乐");
      }
    }
    const ee = ["aiApiUrl", "aiApiKey", "aiModel"], J = () => {
      const E = {};
      for (const [T, Y] of Object.entries(t.settings))
        ee.includes(T) || (E[T] = Y);
      const v = new Blob([JSON.stringify(E, null, 2)], { type: "application/json" }), x = URL.createObjectURL(v), S = document.createElement("a");
      S.href = x, S.download = "st-little-player-settings.json", S.click(), URL.revokeObjectURL(x), typeof toastr < "u" && toastr.success(m("Settings exported"), "晓乐");
    }, G = () => {
      const E = document.createElement("input");
      E.type = "file", E.accept = ".json", E.onchange = async (v) => {
        const x = v.target.files?.[0];
        if (!x) return;
        const S = await x.text();
        try {
          const T = JSON.parse(S);
          if (typeof T != "object" || T === null) throw new Error("Not an object");
          const Y = ["volume", "playMode", "crossfade", "position", "widgetMode", "dockAlign", "providers", "customOpacity", "opacity", "aiMode", "aiUseCustomApi", "aiContextMessages", "aiAutoTrigger", "aiTriggerOnGreeting", "aiCooldownMs", "togetherPromptRole", "togetherCustomPromptEnabled", "togetherCustomPrompt", "debug"], ie = {};
          for (const Ie of Y)
            Ie in T && (ie[Ie] = T[Ie]);
          if (typeof ie.volume != "number" || ie.volume < 0 || ie.volume > 100)
            throw new Error("Invalid volume");
          if (typeof ie.playMode != "string" || !["list", "random", "single"].includes(ie.playMode))
            throw new Error("Invalid playMode");
          if (ie.providers && !Array.isArray(ie.providers))
            throw new Error("Invalid providers");
          Object.assign(t.settings, ie), t.save(), typeof toastr < "u" && toastr.success(m("Settings imported"), "晓乐");
        } catch (T) {
          z.error("Settings import failed:", T), typeof toastr < "u" && toastr.error(`${m("Import failed")}：${T instanceof Error ? T.message : m("Invalid JSON")}`, "晓乐");
        }
      }, E.click();
    }, I = "0.1.2-beta", V = () => {
      const E = s.networkList.map((T) => ({
        song: T.song,
        artist: T.artist,
        providerId: T.providerId,
        providerTrackId: T.providerTrackId,
        providerPicId: T.providerPicId
      })), v = new Blob([JSON.stringify(E, null, 2)], { type: "application/json" }), x = URL.createObjectURL(v), S = document.createElement("a");
      S.href = x, S.download = "st-little-player-playlist.json", S.click(), URL.revokeObjectURL(x), typeof toastr < "u" && toastr.success(m("Playlist exported"), "晓乐");
    }, X = () => {
      const E = document.createElement("input");
      E.type = "file", E.accept = ".json", E.onchange = async (v) => {
        const x = v.target.files?.[0];
        if (!x) return;
        const S = await x.text();
        try {
          const T = JSON.parse(S);
          if (!Array.isArray(T)) throw new Error("Not an array");
          const Y = T.filter((ie) => ie && typeof ie.song == "string").map((ie) => ({
            id: `stmp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
            song: ie.song,
            artist: ie.artist,
            source: "network",
            providerId: ie.providerId,
            providerTrackId: ie.providerTrackId,
            providerPicId: ie.providerPicId,
            addedAt: Date.now()
          }));
          s.networkList = Y, s.savePlaylistData(), typeof toastr < "u" && toastr.success(m("Playlist imported"), "晓乐");
        } catch (T) {
          z.error("Playlist import failed:", T), typeof toastr < "u" && toastr.error(`${m("Import failed")}：${T instanceof Error ? T.message : m("Invalid JSON")}`, "晓乐");
        }
      }, E.click();
    };
    async function R() {
      const E = SillyTavern.getContext(), v = t.settings.togetherCustomPrompt || El, x = ["{{xiaoyueCurrentSong}}", "{{xiaoyueCurrentArtist}}", "{{xiaoyueIsPlaying}}", "{{xiaoyueHasTrack}}", "{{xiaoyueRecentPlayed}}"], S = `<div style="margin-bottom:6px;font-size:0.85em;opacity:0.8">${m("The prompt must contain the markers")} <code class="stmp-macro-hint">&lt;!--XY_BGM_START--&gt;</code> / <code class="stmp-macro-hint">&lt;!--XY_BGM_END--&gt;</code> ${m("for BGM control to work.")}</div>`, T = x.map((Fe) => `<code class="stmp-macro-hint">${Fe}</code>`).join(" "), Y = `<div style="margin-bottom:8px;font-size:0.85em;opacity:0.7">${m("Available macros:")} ${T}</div>`, ie = S + Y;
      $("#dialogue_popup_cancel").css("display", "flex"), $("#dialogue_popup_controls .menu_button").css("width", "unset");
      const Ie = await E.callPopup(ie, "input", v, { wide: !0, rows: 20, okButton: m("Save") });
      Ie !== !1 && t.setTogetherCustomPrompt(String(Ie).trim());
    }
    return (E, v) => (M(), N("div", kp, [
      c("div", Mp, [
        (M(), N(re, null, ze(i, (x) => c("div", {
          key: x.id,
          class: ue(["stmp-tab", { active: n.value === x.id }]),
          onClick: (S) => n.value = x.id
        }, [
          c("i", {
            class: ue(x.icon)
          }, null, 2),
          c("span", null, O(x.label), 1)
        ], 10, Ep)), 64))
      ]),
      c("div", Pp, [
        qt(c("div", Ip, [
          c("div", Rp, [
            c("div", Lp, [
              c("div", $p, O(h(m)("Widget Mode")), 1),
              c("div", Op, O(h(m)("Choose how the player widget is displayed")), 1)
            ]),
            c("div", Np, [
              (M(), N(re, null, ze(o, (x) => c("div", {
                key: x.value,
                class: ue(["stmp-chip", { active: h(t).settings.widgetMode === x.value }]),
                onClick: (S) => h(t).setWidgetMode(x.value)
              }, [
                c("i", {
                  class: ue(x.icon)
                }, null, 2),
                c("span", null, O(x.label), 1)
              ], 10, Dp)), 64))
            ])
          ]),
          h(t).settings.widgetMode === "dock" ? (M(), N("div", Fp, [
            c("div", Up, [
              c("div", Bp, O(h(m)("Dock Alignment")), 1),
              c("div", Vp, O(h(m)("Align the docked player to a corner of the screen")), 1)
            ]),
            c("div", jp, [
              (M(), N(re, null, ze(r, (x) => c("div", {
                key: x.value,
                class: ue(["stmp-chip", { active: h(t).settings.dockAlign === x.value }]),
                onClick: (S) => h(t).setDockAlign(x.value)
              }, [
                c("i", {
                  class: ue(x.icon)
                }, null, 2),
                c("span", null, O(x.label), 1)
              ], 10, Hp)), 64))
            ])
          ])) : be("", !0),
          h(t).settings.widgetMode === "drag" ? (M(), N("div", Gp, [
            c("div", Wp, [
              c("div", Kp, O(h(m)("Show track info in drag mini")), 1),
              c("div", zp, O(h(m)("Show song title and lyrics in the compact drag widget")), 1)
            ]),
            oe(pt, {
              "model-value": h(t).settings.showDragMiniText,
              "onUpdate:modelValue": h(t).setShowDragMiniText
            }, null, 8, ["model-value", "onUpdate:modelValue"])
          ])) : be("", !0),
          l() ? (M(), N("div", Jp, [
            c("div", Yp, [
              c("div", qp, O(h(m)("Custom opacity")), 1),
              c("div", Xp, O(h(m)("Adjust the player background opacity")), 1)
            ]),
            oe(pt, {
              "model-value": h(t).settings.customOpacity,
              "onUpdate:modelValue": h(t).setCustomOpacity
            }, null, 8, ["model-value", "onUpdate:modelValue"])
          ])) : be("", !0),
          h(t).settings.customOpacity ? (M(), N("div", Zp, [
            c("div", Qp, [
              c("div", eh, O(h(m)("Opacity")), 1)
            ]),
            c("div", th, [
              c("input", {
                type: "range",
                class: "stmp-slider",
                min: "0",
                max: "100",
                value: h(t).settings.opacity,
                onInput: a
              }, null, 40, sh),
              c("span", nh, O(h(t).settings.opacity) + "%", 1)
            ])
          ])) : be("", !0)
        ], 512), [
          [Qs, n.value === "appearance"]
        ]),
        qt(c("div", ih, [
          c("div", oh, [
            c("div", rh, [
              c("div", lh, O(h(m)("Default Volume")), 1)
            ]),
            c("div", ah, [
              c("input", {
                type: "range",
                class: "stmp-slider",
                min: "0",
                max: "100",
                value: h(t).settings.volume,
                onInput: f
              }, null, 40, ch),
              c("span", uh, O(h(t).settings.volume), 1)
            ])
          ]),
          c("div", fh, [
            c("div", dh, [
              c("div", ph, O(h(m)("Default Play Mode")), 1)
            ]),
            c("div", hh, [
              (M(), N(re, null, ze(u, (x) => c("div", {
                key: x.value,
                class: ue(["stmp-chip", { active: h(t).settings.playMode === x.value }]),
                onClick: (S) => h(t).setPlayMode(x.value)
              }, [
                c("i", {
                  class: ue(x.icon)
                }, null, 2),
                c("span", null, O(x.label), 1)
              ], 10, gh)), 64))
            ])
          ]),
          c("div", mh, [
            c("div", yh, [
              c("div", vh, O(h(m)("Crossfade")), 1),
              c("div", _h, O(h(m)("Smoothly fade in when starting playback and fade out when pausing or switching tracks")), 1)
            ]),
            oe(pt, {
              "model-value": h(t).settings.crossfade,
              "onUpdate:modelValue": h(t).setCrossfade
            }, null, 8, ["model-value", "onUpdate:modelValue"])
          ]),
          (M(!0), N(re, null, ze(h(t).settings.providers, (x) => (M(), N("div", {
            key: x.id
          }, [
            c("div", bh, [
              c("div", wh, [
                c("div", Sh, O(g[x.id] || x.id), 1),
                c("div", xh, O(b[x.id]), 1)
              ]),
              oe(pt, {
                "model-value": x.enabled,
                "onUpdate:modelValue": () => F(x.id)
              }, null, 8, ["model-value", "onUpdate:modelValue"])
            ]),
            x.id === "custom" && x.enabled ? (M(), N("div", Th, [
              qt(c("input", {
                class: "text_pole",
                "onUpdate:modelValue": (S) => x.config.searchURL = S,
                placeholder: h(m)("Search URL"),
                onChange: v[0] || (v[0] = (S) => h(t).save())
              }, null, 40, Ah), [
                [wi, x.config.searchURL]
              ]),
              qt(c("input", {
                class: "text_pole",
                "onUpdate:modelValue": (S) => x.config.resolveURL = S,
                placeholder: h(m)("Resolve URL"),
                onChange: v[1] || (v[1] = (S) => h(t).save())
              }, null, 40, Ch), [
                [wi, x.config.resolveURL]
              ])
            ])) : be("", !0)
          ]))), 128)),
          v[10] || (v[10] = c("div", { class: "stmp-separator" }, null, -1)),
          c("div", kh, [
            c("div", Mh, [
              c("div", Eh, O(h(m)("Export playlist")), 1),
              c("div", Ph, O(h(m)("Save network playlist to a JSON file")), 1)
            ]),
            c("div", {
              class: "menu_button menu_button_icon stmp-action-btn",
              onClick: V
            }, [...v[8] || (v[8] = [
              c("i", { class: "fa-solid fa-file-export" }, null, -1)
            ])])
          ]),
          c("div", Ih, [
            c("div", Rh, [
              c("div", Lh, O(h(m)("Import playlist")), 1),
              c("div", $h, O(h(m)("Load network playlist from a JSON file")), 1)
            ]),
            c("div", {
              class: "menu_button menu_button_icon stmp-action-btn",
              onClick: X
            }, [...v[9] || (v[9] = [
              c("i", { class: "fa-solid fa-file-import" }, null, -1)
            ])])
          ])
        ], 512), [
          [Qs, n.value === "playback"]
        ]),
        qt(c("div", Oh, [
          c("div", Nh, [
            c("div", Dh, [
              c("div", Fh, O(h(m)("AI BGM")), 1),
              c("div", Uh, O(h(m)("Enable AI-driven background music selection")), 1)
            ]),
            oe(pt, {
              "model-value": h(t).settings.aiMode !== "off",
              "onUpdate:modelValue": v[2] || (v[2] = (x) => H(x))
            }, null, 8, ["model-value"])
          ]),
          h(t).settings.aiMode !== "off" ? (M(), N(re, { key: 0 }, [
            c("div", Bh, [
              c("div", Vh, [
                c("div", jh, O(h(m)("AI Mode")), 1),
                c("div", Hh, O(h(m)("Choose how AI selects background music")), 1)
              ]),
              c("div", Gh, [
                (M(), N(re, null, ze(y, (x) => c("div", {
                  key: x.value,
                  class: ue(["stmp-chip", { active: h(t).settings.aiMode === x.value }]),
                  onClick: (S) => C(x.value)
                }, [
                  c("i", {
                    class: ue(x.icon)
                  }, null, 2),
                  c("span", null, O(x.label), 1)
                ], 10, Wh)), 64))
              ])
            ]),
            h(t).settings.aiMode === "function_call" ? (M(), N(re, { key: 0 }, [
              c("div", Kh, [
                c("div", zh, [
                  c("div", Jh, O(h(m)("Custom API")), 1),
                  c("div", Yh, O(h(m)("Use a separate API endpoint for BGM agent loop instead of main API function calling")), 1)
                ]),
                oe(pt, {
                  "model-value": h(t).settings.aiUseCustomApi,
                  "onUpdate:modelValue": w
                }, null, 8, ["model-value"])
              ]),
              h(t).settings.aiUseCustomApi ? (M(), N(re, { key: 0 }, [
                c("div", qh, [
                  c("div", Xh, [
                    c("div", Zh, O(h(m)("API URL")), 1),
                    c("div", Qh, O(h(m)("OpenAI-compatible endpoint that supports tool calling")), 1)
                  ]),
                  c("input", {
                    class: "text_pole stmp-text-input",
                    value: h(t).settings.aiApiUrl,
                    placeholder: "",
                    onChange: v[3] || (v[3] = (x) => h(t).setAiApiUrl(x.target.value.trim()))
                  }, null, 40, eg)
                ]),
                c("div", tg, [
                  c("div", sg, [
                    c("div", ng, O(h(m)("API Key")), 1),
                    c("div", ig, O(h(m)("Bearer token for the custom endpoint")), 1)
                  ]),
                  c("input", {
                    type: "password",
                    class: "text_pole stmp-text-input",
                    value: h(t).settings.aiApiKey,
                    placeholder: "",
                    onChange: v[4] || (v[4] = (x) => h(t).setAiApiKey(x.target.value.trim()))
                  }, null, 40, og)
                ]),
                c("div", rg, [
                  c("div", lg, [
                    c("div", ag, O(h(m)("Model")), 1),
                    c("div", cg, O(h(m)("Model that supports tool calling")), 1)
                  ]),
                  c("div", ug, [
                    oe(Cp, {
                      "model-value": h(t).settings.aiModel,
                      options: W.value,
                      placeholder: "",
                      "onUpdate:modelValue": v[5] || (v[5] = (x) => h(t).setAiModel(x))
                    }, null, 8, ["model-value", "options"]),
                    c("div", {
                      class: ue(["menu_button menu_button_icon stmp-model-fetch", { "stmp-spin": Z.value }]),
                      title: h(m)("Connect"),
                      onClick: B
                    }, [...v[11] || (v[11] = [
                      c("i", { class: "fa-solid fa-plug" }, null, -1)
                    ])], 10, fg)
                  ])
                ]),
                c("div", dg, [
                  c("div", pg, [
                    c("div", hg, O(h(m)("Context Messages")), 1),
                    c("div", gg, O(h(m)("Number of recent chat messages to send to AI")), 1)
                  ]),
                  c("div", mg, [
                    c("input", {
                      type: "range",
                      class: "stmp-slider",
                      min: "2",
                      max: "20",
                      value: h(t).settings.aiContextMessages,
                      onInput: q
                    }, null, 40, yg),
                    c("span", vg, O(h(t).settings.aiContextMessages), 1)
                  ])
                ]),
                c("div", _g, [
                  c("div", bg, [
                    c("div", wg, O(h(m)("Auto Trigger")), 1),
                    c("div", Sg, O(h(m)("Automatically analyze new messages and select music")), 1)
                  ]),
                  oe(pt, {
                    "model-value": h(t).settings.aiAutoTrigger,
                    "onUpdate:modelValue": v[6] || (v[6] = (x) => h(t).setAiAutoTrigger(x))
                  }, null, 8, ["model-value"])
                ]),
                h(t).settings.aiAutoTrigger ? (M(), N("div", xg, [
                  c("div", Tg, [
                    c("div", Ag, O(h(m)("Trigger on Greeting")), 1),
                    c("div", Cg, O(h(m)("Analyze BGM when loading a character card (first message)")), 1)
                  ]),
                  oe(pt, {
                    "model-value": h(t).settings.aiTriggerOnGreeting,
                    "onUpdate:modelValue": v[7] || (v[7] = (x) => h(t).setAiTriggerOnGreeting(x))
                  }, null, 8, ["model-value"])
                ])) : be("", !0)
              ], 64)) : be("", !0)
            ], 64)) : be("", !0),
            h(t).settings.aiMode === "together" ? (M(), N(re, { key: 1 }, [
              c("div", kg, [
                c("div", Mg, [
                  c("div", Eg, O(h(m)("Prompt Role")), 1),
                  c("div", Pg, O(h(m)("Role used when injecting BGM instructions into the main AI")), 1)
                ]),
                c("div", Ig, [
                  (M(!0), N(re, null, ze([{ v: "system", l: h(m)("System") }, { v: "user", l: h(m)("User") }], (x) => (M(), N("div", {
                    key: x.v,
                    class: ue(["stmp-chip", { active: h(t).settings.togetherPromptRole === x.v }]),
                    onClick: (S) => h(t).setTogetherPromptRole(x.v)
                  }, [
                    c("span", null, O(x.l), 1)
                  ], 10, Rg))), 128))
                ])
              ]),
              c("div", Lg, [
                c("div", $g, [
                  c("div", Og, O(h(m)("Custom Prompt")), 1),
                  c("div", Ng, [
                    an(O(h(m)("Edit the BGM instruction prompt. Use macros like ")) + " ", 1),
                    v[12] || (v[12] = c("code", null, "{{xiaoyueCurrentSong}}", -1)),
                    an(" " + O(h(m)(" for dynamic values.")), 1)
                  ])
                ]),
                oe(pt, {
                  "model-value": h(t).settings.togetherCustomPromptEnabled,
                  "onUpdate:modelValue": h(t).setTogetherCustomPromptEnabled
                }, null, 8, ["model-value", "onUpdate:modelValue"])
              ]),
              h(t).settings.togetherCustomPromptEnabled ? (M(), N("div", Dg, [
                c("div", Fg, [
                  c("div", Ug, O(h(m)("Edit Prompt")), 1),
                  c("div", Bg, O(h(m)("Click to edit the BGM instruction prompt")), 1)
                ]),
                c("div", {
                  class: "menu_button menu_button_icon stmp-action-btn",
                  title: h(m)("Edit Prompt"),
                  onClick: R
                }, [...v[13] || (v[13] = [
                  c("i", { class: "fa-solid fa-pen-to-square" }, null, -1)
                ])], 8, Vg)
              ])) : be("", !0)
            ], 64)) : be("", !0)
          ], 64)) : be("", !0)
        ], 512), [
          [Qs, n.value === "ai"]
        ]),
        qt(c("div", jg, [
          c("div", Hg, [
            c("div", Gg, [
              c("div", Wg, O(h(m)("Debug Mode")), 1),
              c("div", Kg, O(h(m)("Enable verbose console logging for troubleshooting")), 1)
            ]),
            oe(pt, {
              "model-value": h(t).settings.debug,
              "onUpdate:modelValue": h(t).setDebug
            }, null, 8, ["model-value", "onUpdate:modelValue"])
          ]),
          v[20] || (v[20] = c("div", { class: "stmp-separator" }, null, -1)),
          c("div", zg, [
            c("div", Jg, [
              c("div", Yg, O(h(m)("Export data")), 1),
              c("div", qg, O(h(m)("Save your settings to a JSON file")), 1)
            ]),
            c("div", {
              class: "menu_button menu_button_icon stmp-action-btn",
              onClick: J
            }, [...v[14] || (v[14] = [
              c("i", { class: "fa-solid fa-file-export" }, null, -1)
            ])])
          ]),
          c("div", Xg, [
            c("div", Zg, [
              c("div", Qg, O(h(m)("Import data")), 1),
              c("div", em, O(h(m)("Load settings from a JSON file")), 1)
            ]),
            c("div", {
              class: "menu_button menu_button_icon stmp-action-btn",
              onClick: G
            }, [...v[15] || (v[15] = [
              c("i", { class: "fa-solid fa-file-import" }, null, -1)
            ])])
          ]),
          c("div", tm, [
            v[17] || (v[17] = c("div", { class: "stmp-about-icon" }, [
              c("i", { class: "fa-solid fa-music" })
            ], -1)),
            v[18] || (v[18] = c("div", { class: "stmp-about-name" }, "晓乐", -1)),
            c("div", sm, O(h(m)("Version")) + " " + O(h(I)), 1),
            c("div", nm, O(h(m)("A scene-aware music player extension for SillyTavern")), 1),
            c("a", {
              href: im,
              target: "_blank",
              rel: "noopener",
              class: "stmp-about-link"
            }, [...v[16] || (v[16] = [
              c("i", { class: "fa-brands fa-github" }, null, -1),
              c("span", null, "GitHub", -1)
            ])]),
            v[19] || (v[19] = c("div", { class: "stmp-about-copyright" }, [
              c("a", {
                href: "https://www.erocraft.com",
                target: "_blank",
                rel: "noopener"
              }, "艾萝工坊"),
              an(" © 2015 - 2026")
            ], -1))
          ])
        ], 512), [
          [Qs, n.value === "general"]
        ])
      ])
    ]));
  }
}), rm = /* @__PURE__ */ Lt(om, [["__scopeId", "data-v-0e0d98e7"]]), ki = [
  {
    name: "xiaoyueCurrentSong",
    description: "Name of the currently loaded track. Empty if no track is loaded.",
    fn: () => {
      try {
        return Me().currentTrack?.name ?? "";
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
        return Me().currentTrack?.artist ?? "";
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
        return String(Me().isPlaying);
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
        return String(!!Me().currentTrack);
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
        return kl(5).join(", ");
      } catch {
        return "";
      }
    }
  }
];
function lm() {
  const e = SillyTavern.getContext(), t = e.macros, s = e.MacrosParser;
  if (!t?.register && !s?.registerMacro) {
    z.warn("Macros API not available, skipping registration");
    return;
  }
  for (const n of ki)
    t?.register ? t.register(n.name, {
      category: "misc",
      description: n.description,
      handler: n.fn
    }) : s?.registerMacro && s.registerMacro(n.name, n.fn, n.description);
  z.info("Macros registered:", ki.map((n) => n.name).join(", "));
}
function am() {
  const e = SillyTavern.getContext(), t = e.macros, s = e.MacrosParser;
  for (const n of ki)
    t?.registry?.unregisterMacro ? t.registry.unregisterMacro(n.name) : s?.unregisterMacro && s.unregisterMacro(n.name);
  z.info("Macros unregistered");
}
const ht = "xy", Be = "晓乐", Ls = [];
function li(e) {
  return e == null ? "" : typeof e == "string" ? e : Array.isArray(e) ? e.map(String).join(" ").trim() : String(e);
}
function cm() {
  const e = SillyTavern.getContext(), { SlashCommandParser: t, SlashCommand: s } = e, n = (i) => {
    const o = s.fromProps(i);
    if (t.addCommandObject(o), typeof i.name == "string" && Ls.push(i.name), Array.isArray(i.aliases))
      for (const r of i.aliases) Ls.push(String(r));
  };
  n({
    name: `${ht}play`,
    aliases: [`${ht}p`],
    helpString: "Toggle play/pause. With a song name argument, searches and plays it immediately.",
    callback: async (i, o) => {
      const r = li(o).trim(), l = Me();
      if (!r)
        return await l.togglePlay(), typeof toastr < "u" && toastr.success(l.isPlaying ? m("Now playing") : m("Paused"), Be), "";
      const a = he(), f = await ss(a.settings.providers).searchAndResolve(r);
      return f ? (f.name = r, await l.loadAndPlay(f), typeof toastr < "u" && toastr.success(`${m("Now playing")}：${f.name}`, Be)) : typeof toastr < "u" && toastr.warning(`${m("Cannot play")}：${r}`, Be), "";
    }
  }), n({
    name: `${ht}next`,
    aliases: [`${ht}n`],
    helpString: "Skip to the next track.",
    callback: async () => {
      const i = Ze();
      i.next();
      const o = i.current;
      return o && typeof toastr < "u" && toastr.success(`${m("Now playing")}：${o.song}`, Be), "";
    }
  }), n({
    name: `${ht}prev`,
    aliases: [`${ht}pp`],
    helpString: "Go back to the previous track.",
    callback: async () => {
      const i = Ze();
      i.prev();
      const o = i.current;
      return o && typeof toastr < "u" && toastr.success(`${m("Now playing")}：${o.song}`, Be), "";
    }
  }), n({
    name: `${ht}vol`,
    helpString: "Get or set the player volume (0-100). No argument shows the current volume.",
    callback: async (i, o) => {
      const r = li(o).trim(), l = Me();
      if (!r)
        return String(l.volume);
      const a = parseInt(r, 10);
      return Number.isNaN(a) || a < 0 || a > 100 ? (typeof toastr < "u" && toastr.warning(m("Volume must be 0-100"), Be), "") : (l.setVolume(a), he().setVolume(a), typeof toastr < "u" && toastr.success(`${m("Volume set to")} ${a}`, Be), "");
    }
  }), n({
    name: `${ht}add`,
    helpString: "Search for a song and add it to the playlist.",
    callback: async (i, o) => {
      const r = li(o).trim();
      if (!r)
        return typeof toastr < "u" && toastr.warning(m("Enter song name"), Be), "";
      const l = he(), u = await ss(l.settings.providers).searchAll(r);
      return u.length === 0 ? (typeof toastr < "u" && toastr.info(m("No results"), Be), "") : (Ze().addFromSearch(u[0], !1), typeof toastr < "u" && toastr.success(`${m("Added to playlist")}：${u[0].name} - ${u[0].artist}`, Be), "");
    }
  }), n({
    name: `${ht}bgm`,
    helpString: "Manually trigger AI BGM analysis for the current conversation.",
    callback: async () => {
      const i = un();
      if (!i)
        return typeof toastr < "u" && toastr.warning(m("AI BGM off"), Be), "";
      const o = he();
      return !o.settings.aiApiUrl || !o.settings.aiModel ? (typeof toastr < "u" && toastr.warning(m("AI not configured"), Be), "") : (typeof toastr < "u" && toastr.info(m("AI analyzing"), Be), await i.manualTrigger(), "");
    }
  }), n({
    name: `${ht}now`,
    helpString: "Show information about the currently playing track.",
    callback: async () => {
      const o = Me().currentTrack;
      if (!o)
        return typeof toastr < "u" && toastr.info(m("No Song"), Be), "";
      const r = o.artist ? ` - ${o.artist}` : "";
      return typeof toastr < "u" && toastr.info(`${m("Now playing track")}：${o.name}${r}`, Be), `${o.name}${r}`;
    }
  }), z.info("Slash commands registered: " + Ls.join(", "));
}
function um() {
  const e = SillyTavern.getContext(), { SlashCommandParser: t } = e;
  if (t?.commands) {
    for (const s of Ls)
      s in t.commands && delete t.commands[s];
    Ls.length = 0, z.info("Slash commands unregistered");
  }
}
let ds = null, $s = null, Os = null, ps = null, Mn = null, En = null;
const fm = `
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
function dm() {
  const e = $("#extensions_settings2");
  if (!e || !e.length) {
    z.warn("Settings container #extensions_settings2 not found");
    return;
  }
  if (e.append(fm), Os = e.children(".inline-drawer").last()[0] ?? null, !Os) return;
  const t = Os.querySelector("#stmp-settings-mount");
  t && Mn && (ps = yl(rm), ps.use(Mn), ps.mount(t));
}
function pm() {
  ps && (ps.unmount(), ps = null), Os?.remove(), Os = null;
}
async function gm() {
  try {
    const e = document.createElement("div");
    e.id = "st-little-player-root", document.body.appendChild(e);
    const t = ku();
    Mn = t, ds = yl(Ld), ds.use(t), ds.mount(e);
    const s = he(), n = Jd();
    s.init(n);
    const i = Me();
    i.init(), i.setVolume(s.settings.volume), Ze().init(), dm();
    const r = SillyTavern.getContext();
    $s = () => {
      lm(), cm(), En = new vp(), En.init();
    }, r.eventSource.on(r.event_types.APP_READY, $s), z.info("Player loaded");
  } catch (e) {
    z.error("Init failed:", e);
  }
}
function hm() {
  if (z.info("Player destroyed"), $s) {
    try {
      const t = SillyTavern.getContext();
      t.eventSource.removeListener(t.event_types.APP_READY, $s);
    } catch {
    }
    $s = null;
  }
  if (am(), um(), En?.destroy(), En = null, ds) {
    try {
      Me().destroy();
    } catch {
    }
    ds.unmount(), ds = null;
  }
  const e = document.getElementById("st-little-player-root");
  e && e.remove(), pm(), Mn = null;
}
function mm() {
  hm();
}
async function ym() {
  try {
    const e = SillyTavern.getContext(), t = e.extensionSettings[`${Ct}-playlist`];
    if (t && typeof t == "object") {
      const n = t.server;
      if (Array.isArray(n)) {
        const i = n.map((o) => o?.serverPath).filter((o) => !!o);
        await Promise.all(i.map((o) => xl(o).catch((r) => {
          z.warn("Clean: failed to delete file:", o, r);
        })));
      }
    }
    delete e.extensionSettings[Ct], delete e.extensionSettings[`${Ct}-playlist`], e.saveSettingsDebounced();
    const s = e.chatMetadata;
    s && typeof s == "object" && (delete s[Gi], delete s.stmp_cursor, await e.saveMetadata()), typeof toastr < "u" && toastr.success("Data cleaned", "晓乐");
  } catch (e) {
    z.error("Clean: failed to delete settings:", e);
  }
}
export {
  ym as clean,
  hm as destroy,
  mm as disable,
  gm as init
};
