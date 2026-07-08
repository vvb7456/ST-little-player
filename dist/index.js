/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function To(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const be = {}, ns = [], dt = () => {
}, Zi = () => !1, An = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), kn = (e) => e.startsWith("onUpdate:"), Ee = Object.assign, Ao = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Wl = Object.prototype.hasOwnProperty, pe = (e, t) => Wl.call(e, t), te = Array.isArray, os = (e) => Fs(e) === "[object Map]", Qi = (e) => Fs(e) === "[object Set]", zo = (e) => Fs(e) === "[object Date]", ie = (e) => typeof e == "function", Se = (e) => typeof e == "string", Ye = (e) => typeof e == "symbol", ge = (e) => e !== null && typeof e == "object", er = (e) => (ge(e) || ie(e)) && ie(e.then) && ie(e.catch), tr = Object.prototype.toString, Fs = (e) => tr.call(e), Kl = (e) => Fs(e).slice(8, -1), sr = (e) => Fs(e) === "[object Object]", In = (e) => Se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, _s = /* @__PURE__ */ To(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Mn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, zl = /-\w/g, Xe = Mn(
  (e) => e.replace(zl, (t) => t.slice(1).toUpperCase())
), Yl = /\B([A-Z])/g, Ft = Mn(
  (e) => e.replace(Yl, "-$1").toLowerCase()
), nr = Mn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Hn = Mn(
  (e) => e ? `on${nr(e)}` : ""
), ft = (e, t) => !Object.is(e, t), tn = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, or = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, ko = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Jl = (e) => {
  const t = Se(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Yo;
const En = () => Yo || (Yo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Dt(e) {
  if (te(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], o = Se(n) ? Ql(n) : Dt(n);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (Se(e) || ge(e))
    return e;
}
const ql = /;(?![^(]*\))/g, Xl = /:([^]+)/, Zl = /\/\*[^]*?\*\//g;
function Ql(e) {
  const t = {};
  return e.replace(Zl, "").split(ql).forEach((s) => {
    if (s) {
      const n = s.split(Xl);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function ue(e) {
  let t = "";
  if (Se(e))
    t = e;
  else if (te(e))
    for (let s = 0; s < e.length; s++) {
      const n = ue(e[s]);
      n && (t += n + " ");
    }
  else if (ge(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const ea = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ta = /* @__PURE__ */ To(ea);
function ir(e) {
  return !!e || e === "";
}
function sa(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = Io(e[n], t[n]);
  return s;
}
function Io(e, t) {
  if (e === t) return !0;
  let s = zo(e), n = zo(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = Ye(e), n = Ye(t), s || n)
    return e === t;
  if (s = te(e), n = te(t), s || n)
    return s && n ? sa(e, t) : !1;
  if (s = ge(e), n = ge(t), s || n) {
    if (!s || !n)
      return !1;
    const o = Object.keys(e).length, i = Object.keys(t).length;
    if (o !== i)
      return !1;
    for (const r in e) {
      const l = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
      if (l && !a || !l && a || !Io(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const rr = (e) => !!(e && e.__v_isRef === !0), N = (e) => Se(e) ? e : e == null ? "" : te(e) || ge(e) && (e.toString === tr || !ie(e.toString)) ? rr(e) ? N(e.value) : JSON.stringify(e, lr, 2) : String(e), lr = (e, t) => rr(t) ? lr(e, t.value) : os(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, o], i) => (s[Gn(n, i) + " =>"] = o, s),
    {}
  )
} : Qi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => Gn(s))
} : Ye(t) ? Gn(t) : ge(t) && !te(t) && !sr(t) ? String(t) : t, Gn = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ye(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Me;
class ar {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Me && (Me.active ? (this.parent = Me, this.index = (Me.scopes || (Me.scopes = [])).push(
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
      const s = Me;
      try {
        return Me = this, t();
      } finally {
        Me = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Me, Me = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Me === this)
        Me = this.prevScope;
      else {
        let t = Me;
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
function cr(e) {
  return new ar(e);
}
function ur() {
  return Me;
}
function na(e, t = !1) {
  Me && Me.cleanups.push(e);
}
let we;
const Wn = /* @__PURE__ */ new WeakSet();
class fr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Me && (Me.active ? Me.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Wn.has(this) && (Wn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || hr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Jo(this), pr(this);
    const t = we, s = Ze;
    we = this, Ze = !0;
    try {
      return this.fn();
    } finally {
      gr(this), we = t, Ze = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Po(t);
      this.deps = this.depsTail = void 0, Jo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Wn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    oo(this) && this.run();
  }
  get dirty() {
    return oo(this);
  }
}
let dr = 0, bs, ws;
function hr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ws, ws = e;
    return;
  }
  e.next = bs, bs = e;
}
function Mo() {
  dr++;
}
function Eo() {
  if (--dr > 0)
    return;
  if (ws) {
    let t = ws;
    for (ws = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; bs; ) {
    let t = bs;
    for (bs = void 0; t; ) {
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
function pr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function gr(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const o = n.prevDep;
    n.version === -1 ? (n === s && (s = o), Po(n), oa(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = o;
  }
  e.deps = t, e.depsTail = s;
}
function oo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (mr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function mr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ps) || (e.globalVersion = Ps, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !oo(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = we, n = Ze;
  we = e, Ze = !0;
  try {
    pr(e);
    const o = e.fn(e._value);
    (t.version === 0 || ft(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    we = s, Ze = n, gr(e), e.flags &= -3;
  }
}
function Po(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: o } = e;
  if (n && (n.nextSub = o, e.prevSub = void 0), o && (o.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let i = s.computed.deps; i; i = i.nextDep)
      Po(i, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function oa(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let Ze = !0;
const yr = [];
function pt() {
  yr.push(Ze), Ze = !1;
}
function gt() {
  const e = yr.pop();
  Ze = e === void 0 ? !0 : e;
}
function Jo(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = we;
    we = void 0;
    try {
      t();
    } finally {
      we = s;
    }
  }
}
let Ps = 0;
class ia {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ro {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!we || !Ze || we === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== we)
      s = this.activeLink = new ia(we, this), we.deps ? (s.prevDep = we.depsTail, we.depsTail.nextDep = s, we.depsTail = s) : we.deps = we.depsTail = s, vr(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = we.depsTail, s.nextDep = void 0, we.depsTail.nextDep = s, we.depsTail = s, we.deps === s && (we.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, Ps++, this.notify(t);
  }
  notify(t) {
    Mo();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Eo();
    }
  }
}
function vr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        vr(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const an = /* @__PURE__ */ new WeakMap(), Jt = /* @__PURE__ */ Symbol(
  ""
), io = /* @__PURE__ */ Symbol(
  ""
), Rs = /* @__PURE__ */ Symbol(
  ""
);
function Oe(e, t, s) {
  if (Ze && we) {
    let n = an.get(e);
    n || an.set(e, n = /* @__PURE__ */ new Map());
    let o = n.get(s);
    o || (n.set(s, o = new Ro()), o.map = n, o.key = s), o.track();
  }
}
function xt(e, t, s, n, o, i) {
  const r = an.get(e);
  if (!r) {
    Ps++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (Mo(), t === "clear")
    r.forEach(l);
  else {
    const a = te(e), c = a && In(s);
    if (a && s === "length") {
      const u = Number(n);
      r.forEach((p, _) => {
        (_ === "length" || _ === Rs || !Ye(_) && _ >= u) && l(p);
      });
    } else
      switch ((s !== void 0 || r.has(void 0)) && l(r.get(s)), c && l(r.get(Rs)), t) {
        case "add":
          a ? c && l(r.get("length")) : (l(r.get(Jt)), os(e) && l(r.get(io)));
          break;
        case "delete":
          a || (l(r.get(Jt)), os(e) && l(r.get(io)));
          break;
        case "set":
          os(e) && l(r.get(Jt));
          break;
      }
  }
  Eo();
}
function ra(e, t) {
  const s = an.get(e);
  return s && s.get(t);
}
function Xt(e) {
  const t = /* @__PURE__ */ ce(e);
  return t === e ? t : (Oe(t, "iterate", Rs), /* @__PURE__ */ Ge(e) ? t : t.map(et));
}
function Pn(e) {
  return Oe(e = /* @__PURE__ */ ce(e), "iterate", Rs), e;
}
function ct(e, t) {
  return /* @__PURE__ */ Tt(e) ? as(/* @__PURE__ */ Ct(e) ? et(t) : t) : et(t);
}
const la = {
  __proto__: null,
  [Symbol.iterator]() {
    return Kn(this, Symbol.iterator, (e) => ct(this, e));
  },
  concat(...e) {
    return Xt(this).concat(
      ...e.map((t) => te(t) ? Xt(t) : t)
    );
  },
  entries() {
    return Kn(this, "entries", (e) => (e[1] = ct(this, e[1]), e));
  },
  every(e, t) {
    return mt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return mt(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => ct(this, n)),
      arguments
    );
  },
  find(e, t) {
    return mt(
      this,
      "find",
      e,
      t,
      (s) => ct(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return mt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return mt(
      this,
      "findLast",
      e,
      t,
      (s) => ct(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return mt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return mt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return zn(this, "includes", e);
  },
  indexOf(...e) {
    return zn(this, "indexOf", e);
  },
  join(e) {
    return Xt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return zn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return mt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return fs(this, "pop");
  },
  push(...e) {
    return fs(this, "push", e);
  },
  reduce(e, ...t) {
    return qo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return qo(this, "reduceRight", e, t);
  },
  shift() {
    return fs(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return mt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return fs(this, "splice", e);
  },
  toReversed() {
    return Xt(this).toReversed();
  },
  toSorted(e) {
    return Xt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Xt(this).toSpliced(...e);
  },
  unshift(...e) {
    return fs(this, "unshift", e);
  },
  values() {
    return Kn(this, "values", (e) => ct(this, e));
  }
};
function Kn(e, t, s) {
  const n = Pn(e), o = n[t]();
  return n !== e && !/* @__PURE__ */ Ge(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.done || (i.value = s(i.value)), i;
  }), o;
}
const aa = Array.prototype;
function mt(e, t, s, n, o, i) {
  const r = Pn(e), l = r !== e && !/* @__PURE__ */ Ge(e), a = r[t];
  if (a !== aa[t]) {
    const p = a.apply(e, i);
    return l ? et(p) : p;
  }
  let c = s;
  r !== e && (l ? c = function(p, _) {
    return s.call(this, ct(e, p), _, e);
  } : s.length > 2 && (c = function(p, _) {
    return s.call(this, p, _, e);
  }));
  const u = a.call(r, c, n);
  return l && o ? o(u) : u;
}
function qo(e, t, s, n) {
  const o = Pn(e), i = o !== e && !/* @__PURE__ */ Ge(e);
  let r = s, l = !1;
  o !== e && (i ? (l = n.length === 0, r = function(c, u, p) {
    return l && (l = !1, c = ct(e, c)), s.call(this, c, ct(e, u), p, e);
  }) : s.length > 3 && (r = function(c, u, p) {
    return s.call(this, c, u, p, e);
  }));
  const a = o[t](r, ...n);
  return l ? ct(e, a) : a;
}
function zn(e, t, s) {
  const n = /* @__PURE__ */ ce(e);
  Oe(n, "iterate", Rs);
  const o = n[t](...s);
  return (o === -1 || o === !1) && /* @__PURE__ */ Ln(s[0]) ? (s[0] = /* @__PURE__ */ ce(s[0]), n[t](...s)) : o;
}
function fs(e, t, s = []) {
  pt(), Mo();
  const n = (/* @__PURE__ */ ce(e))[t].apply(e, s);
  return Eo(), gt(), n;
}
const ca = /* @__PURE__ */ To("__proto__,__v_isRef,__isVue"), _r = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ye)
);
function ua(e) {
  Ye(e) || (e = String(e));
  const t = /* @__PURE__ */ ce(this);
  return Oe(t, "has", e), t.hasOwnProperty(e);
}
class br {
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
      return n === (o ? i ? ba : Cr : i ? Sr : xr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const r = te(t);
    if (!o) {
      let a;
      if (r && (a = la[s]))
        return a;
      if (s === "hasOwnProperty")
        return ua;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Te(t) ? t : n
    );
    if ((Ye(s) ? _r.has(s) : ca(s)) || (o || Oe(t, "get", s), i))
      return l;
    if (/* @__PURE__ */ Te(l)) {
      const a = r && In(s) ? l : l.value;
      return o && ge(a) ? /* @__PURE__ */ lo(a) : a;
    }
    return ge(l) ? o ? /* @__PURE__ */ lo(l) : /* @__PURE__ */ Rn(l) : l;
  }
}
class wr extends br {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, o) {
    let i = t[s];
    const r = te(t) && In(s);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Tt(i);
      if (!/* @__PURE__ */ Ge(n) && !/* @__PURE__ */ Tt(n) && (i = /* @__PURE__ */ ce(i), n = /* @__PURE__ */ ce(n)), !r && /* @__PURE__ */ Te(i) && !/* @__PURE__ */ Te(n))
        return c || (i.value = n), !0;
    }
    const l = r ? Number(s) < t.length : pe(t, s), a = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ Te(t) ? t : o
    );
    return t === /* @__PURE__ */ ce(o) && a && (l ? ft(n, i) && xt(t, "set", s, n) : xt(t, "add", s, n)), a;
  }
  deleteProperty(t, s) {
    const n = pe(t, s);
    t[s];
    const o = Reflect.deleteProperty(t, s);
    return o && n && xt(t, "delete", s, void 0), o;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Ye(s) || !_r.has(s)) && Oe(t, "has", s), n;
  }
  ownKeys(t) {
    return Oe(
      t,
      "iterate",
      te(t) ? "length" : Jt
    ), Reflect.ownKeys(t);
  }
}
class fa extends br {
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
const da = /* @__PURE__ */ new wr(), ha = /* @__PURE__ */ new fa(), pa = /* @__PURE__ */ new wr(!0);
const ro = (e) => e, Gs = (e) => Reflect.getPrototypeOf(e);
function ga(e, t, s) {
  return function(...n) {
    const o = this.__v_raw, i = /* @__PURE__ */ ce(o), r = os(i), l = e === "entries" || e === Symbol.iterator && r, a = e === "keys" && r, c = o[e](...n), u = s ? ro : t ? as : et;
    return !t && Oe(
      i,
      "iterate",
      a ? io : Jt
    ), Ee(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: p, done: _ } = c.next();
          return _ ? { value: p, done: _ } : {
            value: l ? [u(p[0]), u(p[1])] : u(p),
            done: _
          };
        }
      }
    );
  };
}
function Ws(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ma(e, t) {
  const s = {
    get(o) {
      const i = this.__v_raw, r = /* @__PURE__ */ ce(i), l = /* @__PURE__ */ ce(o);
      e || (ft(o, l) && Oe(r, "get", o), Oe(r, "get", l));
      const { has: a } = Gs(r), c = t ? ro : e ? as : et;
      if (a.call(r, o))
        return c(i.get(o));
      if (a.call(r, l))
        return c(i.get(l));
      i !== r && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Oe(/* @__PURE__ */ ce(o), "iterate", Jt), o.size;
    },
    has(o) {
      const i = this.__v_raw, r = /* @__PURE__ */ ce(i), l = /* @__PURE__ */ ce(o);
      return e || (ft(o, l) && Oe(r, "has", o), Oe(r, "has", l)), o === l ? i.has(o) : i.has(o) || i.has(l);
    },
    forEach(o, i) {
      const r = this, l = r.__v_raw, a = /* @__PURE__ */ ce(l), c = t ? ro : e ? as : et;
      return !e && Oe(a, "iterate", Jt), l.forEach((u, p) => o.call(i, c(u), c(p), r));
    }
  };
  return Ee(
    s,
    e ? {
      add: Ws("add"),
      set: Ws("set"),
      delete: Ws("delete"),
      clear: Ws("clear")
    } : {
      add(o) {
        const i = /* @__PURE__ */ ce(this), r = Gs(i), l = /* @__PURE__ */ ce(o), a = !t && !/* @__PURE__ */ Ge(o) && !/* @__PURE__ */ Tt(o) ? l : o;
        return r.has.call(i, a) || ft(o, a) && r.has.call(i, o) || ft(l, a) && r.has.call(i, l) || (i.add(a), xt(i, "add", a, a)), this;
      },
      set(o, i) {
        !t && !/* @__PURE__ */ Ge(i) && !/* @__PURE__ */ Tt(i) && (i = /* @__PURE__ */ ce(i));
        const r = /* @__PURE__ */ ce(this), { has: l, get: a } = Gs(r);
        let c = l.call(r, o);
        c || (o = /* @__PURE__ */ ce(o), c = l.call(r, o));
        const u = a.call(r, o);
        return r.set(o, i), c ? ft(i, u) && xt(r, "set", o, i) : xt(r, "add", o, i), this;
      },
      delete(o) {
        const i = /* @__PURE__ */ ce(this), { has: r, get: l } = Gs(i);
        let a = r.call(i, o);
        a || (o = /* @__PURE__ */ ce(o), a = r.call(i, o)), l && l.call(i, o);
        const c = i.delete(o);
        return a && xt(i, "delete", o, void 0), c;
      },
      clear() {
        const o = /* @__PURE__ */ ce(this), i = o.size !== 0, r = o.clear();
        return i && xt(
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
    s[o] = ga(o, e, t);
  }), s;
}
function Lo(e, t) {
  const s = ma(e, t);
  return (n, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? n : Reflect.get(
    pe(s, o) && o in n ? s : n,
    o,
    i
  );
}
const ya = {
  get: /* @__PURE__ */ Lo(!1, !1)
}, va = {
  get: /* @__PURE__ */ Lo(!1, !0)
}, _a = {
  get: /* @__PURE__ */ Lo(!0, !1)
};
const xr = /* @__PURE__ */ new WeakMap(), Sr = /* @__PURE__ */ new WeakMap(), Cr = /* @__PURE__ */ new WeakMap(), ba = /* @__PURE__ */ new WeakMap();
function wa(e) {
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
function Rn(e) {
  return /* @__PURE__ */ Tt(e) ? e : Oo(
    e,
    !1,
    da,
    ya,
    xr
  );
}
// @__NO_SIDE_EFFECTS__
function xa(e) {
  return Oo(
    e,
    !1,
    pa,
    va,
    Sr
  );
}
// @__NO_SIDE_EFFECTS__
function lo(e) {
  return Oo(
    e,
    !0,
    ha,
    _a,
    Cr
  );
}
function Oo(e, t, s, n, o) {
  if (!ge(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const r = wa(Kl(e));
  if (r === 0)
    return e;
  const l = new Proxy(
    e,
    r === 2 ? n : s
  );
  return o.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function Ct(e) {
  return /* @__PURE__ */ Tt(e) ? /* @__PURE__ */ Ct(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Tt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ge(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ln(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ce(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ce(t) : e;
}
function $o(e) {
  return !pe(e, "__v_skip") && Object.isExtensible(e) && or(e, "__v_skip", !0), e;
}
const et = (e) => ge(e) ? /* @__PURE__ */ Rn(e) : e, as = (e) => ge(e) ? /* @__PURE__ */ lo(e) : e;
// @__NO_SIDE_EFFECTS__
function Te(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function de(e) {
  return Sa(e, !1);
}
function Sa(e, t) {
  return /* @__PURE__ */ Te(e) ? e : new Ca(e, t);
}
class Ca {
  constructor(t, s) {
    this.dep = new Ro(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ ce(t), this._value = s ? t : et(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Ge(t) || /* @__PURE__ */ Tt(t);
    t = n ? t : /* @__PURE__ */ ce(t), ft(t, s) && (this._rawValue = t, this._value = n ? t : et(t), this.dep.trigger());
  }
}
function g(e) {
  return /* @__PURE__ */ Te(e) ? e.value : e;
}
const Ta = {
  get: (e, t, s) => t === "__v_raw" ? e : g(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const o = e[t];
    return /* @__PURE__ */ Te(o) && !/* @__PURE__ */ Te(s) ? (o.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function Tr(e) {
  return /* @__PURE__ */ Ct(e) ? e : new Proxy(e, Ta);
}
// @__NO_SIDE_EFFECTS__
function Aa(e) {
  const t = te(e) ? new Array(e.length) : {};
  for (const s in e)
    t[s] = Ia(e, s);
  return t;
}
class ka {
  constructor(t, s, n) {
    this._object = t, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = Ye(s) ? s : String(s), this._raw = /* @__PURE__ */ ce(t);
    let o = !0, i = t;
    if (!te(t) || Ye(this._key) || !In(this._key))
      do
        o = !/* @__PURE__ */ Ln(i) || /* @__PURE__ */ Ge(i);
      while (o && (i = i.__v_raw));
    this._shallow = o;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = g(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ Te(this._raw[this._key])) {
      const s = this._object[this._key];
      if (/* @__PURE__ */ Te(s)) {
        s.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return ra(this._raw, this._key);
  }
}
function Ia(e, t, s) {
  return new ka(e, t, s);
}
class Ma {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Ro(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ps - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    we !== this)
      return hr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return mr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Ea(e, t, s = !1) {
  let n, o;
  return ie(e) ? n = e : (n = e.get, o = e.set), new Ma(n, o, s);
}
const Ks = {}, cn = /* @__PURE__ */ new WeakMap();
let Gt;
function Pa(e, t = !1, s = Gt) {
  if (s) {
    let n = cn.get(s);
    n || cn.set(s, n = []), n.push(e);
  }
}
function Ra(e, t, s = be) {
  const { immediate: n, deep: o, once: i, scheduler: r, augmentJob: l, call: a } = s, c = (j) => o ? j : /* @__PURE__ */ Ge(j) || o === !1 || o === 0 ? St(j, 1) : St(j);
  let u, p, _, y, k = !1, b = !1;
  if (/* @__PURE__ */ Te(e) ? (p = () => e.value, k = /* @__PURE__ */ Ge(e)) : /* @__PURE__ */ Ct(e) ? (p = () => c(e), k = !0) : te(e) ? (b = !0, k = e.some((j) => /* @__PURE__ */ Ct(j) || /* @__PURE__ */ Ge(j)), p = () => e.map((j) => {
    if (/* @__PURE__ */ Te(j))
      return j.value;
    if (/* @__PURE__ */ Ct(j))
      return c(j);
    if (ie(j))
      return a ? a(j, 2) : j();
  })) : ie(e) ? t ? p = a ? () => a(e, 2) : e : p = () => {
    if (_) {
      pt();
      try {
        _();
      } finally {
        gt();
      }
    }
    const j = Gt;
    Gt = u;
    try {
      return a ? a(e, 3, [y]) : e(y);
    } finally {
      Gt = j;
    }
  } : p = dt, t && o) {
    const j = p, q = o === !0 ? 1 / 0 : o;
    p = () => St(j(), q);
  }
  const H = ur(), F = () => {
    u.stop(), H && H.active && Ao(H.effects, u);
  };
  if (i && t) {
    const j = t;
    t = (...q) => {
      const le = j(...q);
      return F(), le;
    };
  }
  let B = b ? new Array(e.length).fill(Ks) : Ks;
  const J = (j) => {
    if (!(!(u.flags & 1) || !u.dirty && !j))
      if (t) {
        const q = u.run();
        if (j || o || k || (b ? q.some((le, Y) => ft(le, B[Y])) : ft(q, B))) {
          _ && _();
          const le = Gt;
          Gt = u;
          try {
            const Y = [
              q,
              // pass undefined as the old value when it's changed for the first time
              B === Ks ? void 0 : b && B[0] === Ks ? [] : B,
              y
            ];
            B = q, a ? a(t, 3, Y) : (
              // @ts-expect-error
              t(...Y)
            );
          } finally {
            Gt = le;
          }
        }
      } else
        u.run();
  };
  return l && l(J), u = new fr(p), u.scheduler = r ? () => r(J, !1) : J, y = (j) => Pa(j, !1, u), _ = u.onStop = () => {
    const j = cn.get(u);
    if (j) {
      if (a)
        a(j, 4);
      else
        for (const q of j) q();
      cn.delete(u);
    }
  }, t ? n ? J(!0) : B = u.run() : r ? r(J.bind(null, !0), !0) : u.run(), F.pause = u.pause.bind(u), F.resume = u.resume.bind(u), F.stop = F, F;
}
function St(e, t = 1 / 0, s) {
  if (t <= 0 || !ge(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ Te(e))
    St(e.value, t, s);
  else if (te(e))
    for (let n = 0; n < e.length; n++)
      St(e[n], t, s);
  else if (Qi(e) || os(e))
    e.forEach((n) => {
      St(n, t, s);
    });
  else if (sr(e)) {
    for (const n in e)
      St(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && St(e[n], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Us(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (o) {
    On(o, t, s);
  }
}
function Je(e, t, s, n) {
  if (ie(e)) {
    const o = Us(e, t, s, n);
    return o && er(o) && o.catch((i) => {
      On(i, t, s);
    }), o;
  }
  if (te(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(Je(e[i], t, s, n));
    return o;
  }
}
function On(e, t, s, n = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = t && t.appContext.config || be;
  if (t) {
    let l = t.parent;
    const a = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let p = 0; p < u.length; p++)
          if (u[p](e, a, c) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      pt(), Us(i, null, 10, [
        e,
        a,
        c
      ]), gt();
      return;
    }
  }
  La(e, s, o, n, r);
}
function La(e, t, s, n = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const Ne = [];
let at = -1;
const is = [];
let Ot = null, ts = 0;
const Ar = /* @__PURE__ */ Promise.resolve();
let un = null;
function Le(e) {
  const t = un || Ar;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Oa(e) {
  let t = at + 1, s = Ne.length;
  for (; t < s; ) {
    const n = t + s >>> 1, o = Ne[n], i = Ls(o);
    i < e || i === e && o.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function Do(e) {
  if (!(e.flags & 1)) {
    const t = Ls(e), s = Ne[Ne.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ls(s) ? Ne.push(e) : Ne.splice(Oa(t), 0, e), e.flags |= 1, kr();
  }
}
function kr() {
  un || (un = Ar.then(Mr));
}
function $a(e) {
  te(e) ? is.push(...e) : Ot && e.id === -1 ? Ot.splice(ts + 1, 0, e) : e.flags & 1 || (is.push(e), e.flags |= 1), kr();
}
function Xo(e, t, s = at + 1) {
  for (; s < Ne.length; s++) {
    const n = Ne[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      Ne.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Ir(e) {
  if (is.length) {
    const t = [...new Set(is)].sort(
      (s, n) => Ls(s) - Ls(n)
    );
    if (is.length = 0, Ot) {
      Ot.push(...t);
      return;
    }
    for (Ot = t, ts = 0; ts < Ot.length; ts++) {
      const s = Ot[ts];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Ot = null, ts = 0;
  }
}
const Ls = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Mr(e) {
  try {
    for (at = 0; at < Ne.length; at++) {
      const t = Ne[at];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Us(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; at < Ne.length; at++) {
      const t = Ne[at];
      t && (t.flags &= -2);
    }
    at = -1, Ne.length = 0, Ir(), un = null, (Ne.length || is.length) && Mr();
  }
}
let ze = null, Er = null;
function fn(e) {
  const t = ze;
  return ze = e, Er = e && e.type.__scopeId || null, t;
}
function Pr(e, t = ze, s) {
  if (!t || e._n)
    return e;
  const n = (...o) => {
    n._d && pn(-1);
    const i = fn(t);
    let r;
    try {
      r = e(...o);
    } finally {
      fn(i), n._d && pn(1);
    }
    return r;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Wt(e, t) {
  if (ze === null)
    return e;
  const s = Un(ze), n = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, r, l, a = be] = t[o];
    i && (ie(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && St(r), n.push({
      dir: i,
      instance: s,
      value: r,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function Ut(e, t, s, n) {
  const o = e.dirs, i = t && t.dirs;
  for (let r = 0; r < o.length; r++) {
    const l = o[r];
    i && (l.oldValue = i[r].value);
    let a = l.dir[n];
    a && (pt(), Je(a, s, 8, [
      e.el,
      l,
      e,
      t
    ]), gt());
  }
}
function Da(e, t) {
  if (Ue) {
    let s = Ue.provides;
    const n = Ue.parent && Ue.parent.provides;
    n === s && (s = Ue.provides = Object.create(n)), s[e] = t;
  }
}
function xs(e, t, s = !1) {
  const n = Bo();
  if (n || qt) {
    let o = qt ? qt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return s && ie(t) ? t.call(n && n.proxy) : t;
  }
}
function Na() {
  return !!(Bo() || qt);
}
const Fa = /* @__PURE__ */ Symbol.for("v-scx"), Ua = () => xs(Fa);
function Be(e, t, s) {
  return Rr(e, t, s);
}
function Rr(e, t, s = be) {
  const { immediate: n, deep: o, flush: i, once: r } = s, l = Ee({}, s), a = t && n || !t && i !== "post";
  let c;
  if (Ds) {
    if (i === "sync") {
      const y = Ua();
      c = y.__watcherHandles || (y.__watcherHandles = []);
    } else if (!a) {
      const y = () => {
      };
      return y.stop = dt, y.resume = dt, y.pause = dt, y;
    }
  }
  const u = Ue;
  l.call = (y, k, b) => Je(y, u, k, b);
  let p = !1;
  i === "post" ? l.scheduler = (y) => {
    De(y, u && u.suspense);
  } : i !== "sync" && (p = !0, l.scheduler = (y, k) => {
    k ? y() : Do(y);
  }), l.augmentJob = (y) => {
    t && (y.flags |= 4), p && (y.flags |= 2, u && (y.id = u.uid, y.i = u));
  };
  const _ = Ra(e, t, l);
  return Ds && (c ? c.push(_) : a && _()), _;
}
function Ba(e, t, s) {
  const n = this.proxy, o = Se(e) ? e.includes(".") ? Lr(n, e) : () => n[e] : e.bind(n, n);
  let i;
  ie(t) ? i = t : (i = t.handler, s = t);
  const r = js(this), l = Rr(o, i.bind(n), s);
  return r(), l;
}
function Lr(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let o = 0; o < s.length && n; o++)
      n = n[s[o]];
    return n;
  };
}
const Rt = /* @__PURE__ */ new WeakMap(), Or = /* @__PURE__ */ Symbol("_vte"), $r = (e) => e.__isTeleport, Kt = (e) => e && (e.disabled || e.disabled === ""), Va = (e) => e && (e.defer || e.defer === ""), Zo = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Qo = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ao = (e, t) => {
  const s = e && e.to;
  return Se(s) ? t ? t(s) : null : s;
}, ja = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, s, n, o, i, r, l, a, c) {
    const {
      mc: u,
      pc: p,
      pbc: _,
      o: { insert: y, querySelector: k, createText: b, createComment: H, parentNode: F }
    } = c, B = Kt(t.props);
    let { dynamicChildren: J } = t;
    const j = (Y, z, L) => {
      Y.shapeFlag & 16 && u(
        Y.children,
        z,
        L,
        o,
        i,
        r,
        l,
        a
      );
    }, q = (Y = t) => {
      const z = Kt(Y.props), L = Y.target = ao(Y.props, k), G = co(L, Y, b, y);
      L && (r !== "svg" && Zo(L) ? r = "svg" : r !== "mathml" && Qo(L) && (r = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(L), z || (j(Y, L, G), ms(Y, !1)));
    }, le = (Y) => {
      const z = () => {
        if (Rt.get(Y) === z) {
          if (Rt.delete(Y), Kt(Y.props)) {
            const L = F(Y.el) || s;
            j(Y, L, Y.anchor), ms(Y, !0);
          }
          q(Y);
        }
      };
      Rt.set(Y, z), De(z, i);
    };
    if (e == null) {
      const Y = t.el = b(""), z = t.anchor = b("");
      if (y(Y, s, n), y(z, s, n), Va(t.props) || i && i.pendingBranch) {
        le(t);
        return;
      }
      B && (j(t, s, z), ms(t, !0)), q();
    } else {
      t.el = e.el;
      const Y = t.anchor = e.anchor, z = Rt.get(e);
      if (z) {
        z.flags |= 8, Rt.delete(e), le(t);
        return;
      }
      t.targetStart = e.targetStart;
      const L = t.target = e.target, G = t.targetAnchor = e.targetAnchor, X = Kt(e.props), S = X ? s : L, C = X ? Y : G;
      if (r === "svg" || Zo(L) ? r = "svg" : (r === "mathml" || Qo(L)) && (r = "mathml"), J ? (_(
        e.dynamicChildren,
        J,
        S,
        o,
        i,
        r,
        l
      ), Uo(e, t, !0)) : a || p(
        e,
        t,
        S,
        C,
        o,
        i,
        r,
        l,
        !1
      ), B)
        X ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : zs(
          t,
          s,
          Y,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const w = ao(t.props, k);
        w && (t.target = w, zs(
          t,
          w,
          null,
          c,
          0
        ));
      } else X && zs(
        t,
        L,
        G,
        c,
        1
      );
      ms(t, B);
    }
  },
  remove(e, t, s, { um: n, o: { remove: o } }, i) {
    const {
      shapeFlag: r,
      children: l,
      anchor: a,
      targetStart: c,
      targetAnchor: u,
      target: p,
      props: _
    } = e, y = Kt(_), k = i || !y, b = Rt.get(e);
    if (b && (b.flags |= 8, Rt.delete(e)), p && (o(c), o(u)), i && o(a), !b && (y || p) && r & 16)
      for (let H = 0; H < l.length; H++) {
        const F = l[H];
        n(
          F,
          t,
          s,
          k,
          !!F.dynamicChildren
        );
      }
  },
  move: zs,
  hydrate: Ha
};
function zs(e, t, s, { o: { insert: n }, m: o }, i = 2) {
  i === 0 && n(e.targetAnchor, t, s);
  const { el: r, anchor: l, shapeFlag: a, children: c, props: u } = e, p = i === 2;
  if (p && n(r, t, s), !Rt.has(e) && (!p || Kt(u)) && a & 16)
    for (let _ = 0; _ < c.length; _++)
      o(
        c[_],
        t,
        s,
        2
      );
  p && n(l, t, s);
}
function Ha(e, t, s, n, o, i, {
  o: { nextSibling: r, parentNode: l, querySelector: a, insert: c, createText: u }
}, p) {
  function _(H, F) {
    let B = F;
    for (; B; ) {
      if (B && B.nodeType === 8) {
        if (B.data === "teleport start anchor")
          t.targetStart = B;
        else if (B.data === "teleport anchor") {
          t.targetAnchor = B, H._lpa = t.targetAnchor && r(t.targetAnchor);
          break;
        }
      }
      B = r(B);
    }
  }
  function y(H, F) {
    F.anchor = p(
      r(H),
      F,
      l(H),
      s,
      n,
      o,
      i
    );
  }
  const k = t.target = ao(
    t.props,
    a
  ), b = Kt(t.props);
  if (k) {
    const H = k._lpa || k.firstChild;
    t.shapeFlag & 16 && (b ? (y(e, t), _(k, H), t.targetAnchor || co(
      k,
      t,
      u,
      c,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      l(e) === k ? e : null
    )) : (t.anchor = r(e), _(k, H), t.targetAnchor || co(k, t, u, c), p(
      H && r(H),
      t,
      k,
      s,
      n,
      o,
      i
    ))), ms(t, b);
  } else b && t.shapeFlag & 16 && (y(e, t), t.targetStart = e, t.targetAnchor = r(e));
  return t.anchor && r(t.anchor);
}
const Dr = ja;
function ms(e, t) {
  const s = e.ctx;
  if (s && s.ut) {
    let n, o;
    for (t ? (n = e.el, o = e.anchor) : (n = e.targetStart, o = e.targetAnchor); n && n !== o; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", s.uid), n = n.nextSibling;
    s.ut();
  }
}
function co(e, t, s, n, o = null) {
  const i = t.targetStart = s(""), r = t.targetAnchor = s("");
  return i[Or] = r, e && (n(i, e, o), n(r, e, o)), r;
}
const Ke = /* @__PURE__ */ Symbol("_leaveCb"), ds = /* @__PURE__ */ Symbol("_enterCb");
function Ga() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Bs(() => {
    e.isMounted = !0;
  }), Vs(() => {
    e.isUnmounting = !0;
  }), e;
}
const We = [Function, Array], Nr = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: We,
  onEnter: We,
  onAfterEnter: We,
  onEnterCancelled: We,
  // leave
  onBeforeLeave: We,
  onLeave: We,
  onAfterLeave: We,
  onLeaveCancelled: We,
  // appear
  onBeforeAppear: We,
  onAppear: We,
  onAfterAppear: We,
  onAppearCancelled: We
}, Fr = (e) => {
  const t = e.subTree;
  return t.component ? Fr(t.component) : t;
}, Wa = {
  name: "BaseTransition",
  props: Nr,
  setup(e, { slots: t }) {
    const s = Bo(), n = Ga();
    return () => {
      const o = t.default && Vr(t.default(), !0), i = o && o.length ? Ur(o) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        s.subTree ? _e() : void 0
      );
      if (!i)
        return;
      const r = /* @__PURE__ */ ce(e), { mode: l } = r;
      if (n.isLeaving)
        return Yn(i);
      const a = ei(i);
      if (!a)
        return Yn(i);
      let c = uo(
        a,
        r,
        n,
        s,
        // #11061, ensure enterHooks is fresh after clone
        (p) => c = p
      );
      a.type !== Fe && Os(a, c);
      let u = s.subTree && ei(s.subTree);
      if (u && u.type !== Fe && !zt(u, a) && Fr(s).type !== Fe) {
        let p = uo(
          u,
          r,
          n,
          s
        );
        if (Os(u, p), l === "out-in" && a.type !== Fe)
          return n.isLeaving = !0, p.afterLeave = () => {
            n.isLeaving = !1, s.job.flags & 8 || s.update(), delete p.afterLeave, u = void 0;
          }, Yn(i);
        l === "in-out" && a.type !== Fe ? p.delayLeave = (_, y, k) => {
          const b = Br(
            n,
            u
          );
          b[String(u.key)] = u, _[Ke] = () => {
            y(), _[Ke] = void 0, delete c.delayedLeave, u = void 0;
          }, c.delayedLeave = () => {
            k(), delete c.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return i;
    };
  }
};
function Ur(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const s of e)
      if (s.type !== Fe) {
        t = s;
        break;
      }
  }
  return t;
}
const Ka = Wa;
function Br(e, t) {
  const { leavingVNodes: s } = e;
  let n = s.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), s.set(t.type, n)), n;
}
function uo(e, t, s, n, o) {
  const {
    appear: i,
    mode: r,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: c,
    onAfterEnter: u,
    onEnterCancelled: p,
    onBeforeLeave: _,
    onLeave: y,
    onAfterLeave: k,
    onLeaveCancelled: b,
    onBeforeAppear: H,
    onAppear: F,
    onAfterAppear: B,
    onAppearCancelled: J
  } = t, j = String(e.key), q = Br(s, e), le = (L, G) => {
    L && Je(
      L,
      n,
      9,
      G
    );
  }, Y = (L, G) => {
    const X = G[1];
    le(L, G), te(L) ? L.every((S) => S.length <= 1) && X() : L.length <= 1 && X();
  }, z = {
    mode: r,
    persisted: l,
    beforeEnter(L) {
      let G = a;
      if (!s.isMounted)
        if (i)
          G = H || a;
        else
          return;
      L[Ke] && L[Ke](
        !0
        /* cancelled */
      );
      const X = q[j];
      X && zt(e, X) && X.el[Ke] && X.el[Ke](), le(G, [L]);
    },
    enter(L) {
      if (q[j] === e) return;
      let G = c, X = u, S = p;
      if (!s.isMounted)
        if (i)
          G = F || c, X = B || u, S = J || p;
        else
          return;
      let C = !1;
      L[ds] = (T) => {
        C || (C = !0, T ? le(S, [L]) : le(X, [L]), z.delayedLeave && z.delayedLeave(), L[ds] = void 0);
      };
      const w = L[ds].bind(null, !1);
      G ? Y(G, [L, w]) : w();
    },
    leave(L, G) {
      const X = String(e.key);
      if (L[ds] && L[ds](
        !0
        /* cancelled */
      ), s.isUnmounting)
        return G();
      le(_, [L]);
      let S = !1;
      L[Ke] = (w) => {
        S || (S = !0, G(), w ? le(b, [L]) : le(k, [L]), L[Ke] = void 0, q[X] === e && delete q[X]);
      };
      const C = L[Ke].bind(null, !1);
      q[X] = e, y ? Y(y, [L, C]) : C();
    },
    clone(L) {
      const G = uo(
        L,
        t,
        s,
        n,
        o
      );
      return o && o(G), G;
    }
  };
  return z;
}
function Yn(e) {
  if ($n(e))
    return e = Nt(e), e.children = null, e;
}
function ei(e) {
  if (!$n(e))
    return $r(e.type) && e.children ? Ur(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: s } = e;
  if (s) {
    if (t & 16)
      return s[0];
    if (t & 32 && ie(s.default))
      return s.default();
  }
}
function Os(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Os(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Vr(e, t = !1, s) {
  let n = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    const l = s == null ? r.key : String(s) + String(r.key != null ? r.key : i);
    r.type === oe ? (r.patchFlag & 128 && o++, n = n.concat(
      Vr(r.children, t, l)
    )) : (t || r.type !== Fe) && n.push(l != null ? Nt(r, { key: l }) : r);
  }
  if (o > 1)
    for (let i = 0; i < n.length; i++)
      n[i].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function kt(e, t) {
  return ie(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ee({ name: e.name }, t, { setup: e })
  ) : e;
}
function jr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function ti(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const dn = /* @__PURE__ */ new WeakMap();
function Ss(e, t, s, n, o = !1) {
  if (te(e)) {
    e.forEach(
      (b, H) => Ss(
        b,
        t && (te(t) ? t[H] : t),
        s,
        n,
        o
      )
    );
    return;
  }
  if (Cs(n) && !o) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Ss(e, t, s, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? Un(n.component) : n.el, r = o ? null : i, { i: l, r: a } = e, c = t && t.r, u = l.refs === be ? l.refs = {} : l.refs, p = l.setupState, _ = /* @__PURE__ */ ce(p), y = p === be ? Zi : (b) => ti(u, b) ? !1 : pe(_, b), k = (b, H) => !(H && ti(u, H));
  if (c != null && c !== a) {
    if (si(t), Se(c))
      u[c] = null, y(c) && (p[c] = null);
    else if (/* @__PURE__ */ Te(c)) {
      const b = t;
      k(c, b.k) && (c.value = null), b.k && (u[b.k] = null);
    }
  }
  if (ie(a)) {
    pt();
    try {
      Us(a, l, 12, [r, u]);
    } finally {
      gt();
    }
  } else {
    const b = Se(a), H = /* @__PURE__ */ Te(a);
    if (b || H) {
      const F = () => {
        if (e.f) {
          const B = b ? y(a) ? p[a] : u[a] : k() || !e.k ? a.value : u[e.k];
          if (o)
            te(B) && Ao(B, i);
          else if (te(B))
            B.includes(i) || B.push(i);
          else if (b)
            u[a] = [i], y(a) && (p[a] = u[a]);
          else {
            const J = [i];
            k(a, e.k) && (a.value = J), e.k && (u[e.k] = J);
          }
        } else b ? (u[a] = r, y(a) && (p[a] = r)) : H && (k(a, e.k) && (a.value = r), e.k && (u[e.k] = r));
      };
      if (r) {
        const B = () => {
          F(), dn.delete(e);
        };
        B.id = -1, dn.set(e, B), De(B, s);
      } else
        si(e), F();
    }
  }
}
function si(e) {
  const t = dn.get(e);
  t && (t.flags |= 8, dn.delete(e));
}
En().requestIdleCallback;
En().cancelIdleCallback;
const Cs = (e) => !!e.type.__asyncLoader, $n = (e) => e.type.__isKeepAlive;
function za(e, t) {
  Hr(e, "a", t);
}
function Ya(e, t) {
  Hr(e, "da", t);
}
function Hr(e, t, s = Ue) {
  const n = e.__wdc || (e.__wdc = () => {
    let o = s;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Dn(t, n, s), s) {
    let o = s.parent;
    for (; o && o.parent; )
      $n(o.parent.vnode) && Ja(n, t, s, o), o = o.parent;
  }
}
function Ja(e, t, s, n) {
  const o = Dn(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Gr(() => {
    Ao(n[t], o);
  }, s);
}
function Dn(e, t, s = Ue, n = !1) {
  if (s) {
    const o = s[e] || (s[e] = []), i = t.__weh || (t.__weh = (...r) => {
      pt();
      const l = js(s), a = Je(t, s, e, r);
      return l(), gt(), a;
    });
    return n ? o.unshift(i) : o.push(i), i;
  }
}
const It = (e) => (t, s = Ue) => {
  (!Ds || e === "sp") && Dn(e, (...n) => t(...n), s);
}, qa = It("bm"), Bs = It("m"), Xa = It(
  "bu"
), Za = It("u"), Vs = It(
  "bum"
), Gr = It("um"), Qa = It(
  "sp"
), ec = It("rtg"), tc = It("rtc");
function sc(e, t = Ue) {
  Dn("ec", e, t);
}
const nc = /* @__PURE__ */ Symbol.for("v-ndc");
function Ve(e, t, s, n) {
  let o;
  const i = s, r = te(e);
  if (r || Se(e)) {
    const l = r && /* @__PURE__ */ Ct(e);
    let a = !1, c = !1;
    l && (a = !/* @__PURE__ */ Ge(e), c = /* @__PURE__ */ Tt(e), e = Pn(e)), o = new Array(e.length);
    for (let u = 0, p = e.length; u < p; u++)
      o[u] = t(
        a ? c ? as(et(e[u])) : et(e[u]) : e[u],
        u,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let l = 0; l < e; l++)
      o[l] = t(l + 1, l, void 0, i);
  } else if (ge(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (l, a) => t(l, a, void 0, i)
      );
    else {
      const l = Object.keys(e);
      o = new Array(l.length);
      for (let a = 0, c = l.length; a < c; a++) {
        const u = l[a];
        o[a] = t(e[u], u, a, i);
      }
    }
  else
    o = [];
  return o;
}
const fo = (e) => e ? cl(e) ? Un(e) : fo(e.parent) : null, Ts = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ee(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => fo(e.parent),
    $root: (e) => fo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Kr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Do(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Le.bind(e.proxy)),
    $watch: (e) => Ba.bind(e)
  })
), Jn = (e, t) => e !== be && !e.__isScriptSetup && pe(e, t), oc = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: o, props: i, accessCache: r, type: l, appContext: a } = e;
    if (t[0] !== "$") {
      const _ = r[t];
      if (_ !== void 0)
        switch (_) {
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
        if (Jn(n, t))
          return r[t] = 1, n[t];
        if (o !== be && pe(o, t))
          return r[t] = 2, o[t];
        if (pe(i, t))
          return r[t] = 3, i[t];
        if (s !== be && pe(s, t))
          return r[t] = 4, s[t];
        ho && (r[t] = 0);
      }
    }
    const c = Ts[t];
    let u, p;
    if (c)
      return t === "$attrs" && Oe(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (s !== be && pe(s, t))
      return r[t] = 4, s[t];
    if (
      // global properties
      p = a.config.globalProperties, pe(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: o, ctx: i } = e;
    return Jn(o, t) ? (o[t] = s, !0) : n !== be && pe(n, t) ? (n[t] = s, !0) : pe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: o, props: i, type: r }
  }, l) {
    let a;
    return !!(s[l] || e !== be && l[0] !== "$" && pe(e, l) || Jn(t, l) || pe(i, l) || pe(n, l) || pe(Ts, l) || pe(o.config.globalProperties, l) || (a = r.__cssModules) && a[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : pe(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function ni(e) {
  return te(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let ho = !0;
function ic(e) {
  const t = Kr(e), s = e.proxy, n = e.ctx;
  ho = !1, t.beforeCreate && oi(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: i,
    methods: r,
    watch: l,
    provide: a,
    inject: c,
    // lifecycle
    created: u,
    beforeMount: p,
    mounted: _,
    beforeUpdate: y,
    updated: k,
    activated: b,
    deactivated: H,
    beforeDestroy: F,
    beforeUnmount: B,
    destroyed: J,
    unmounted: j,
    render: q,
    renderTracked: le,
    renderTriggered: Y,
    errorCaptured: z,
    serverPrefetch: L,
    // public API
    expose: G,
    inheritAttrs: X,
    // assets
    components: S,
    directives: C,
    filters: w
  } = t;
  if (c && rc(c, n, null), r)
    for (const I in r) {
      const R = r[I];
      ie(R) && (n[I] = R.bind(s));
    }
  if (o) {
    const I = o.call(s, s);
    ge(I) && (e.data = /* @__PURE__ */ Rn(I));
  }
  if (ho = !0, i)
    for (const I in i) {
      const R = i[I], Z = ie(R) ? R.bind(s, s) : ie(R.get) ? R.get.bind(s, s) : dt, he = !ie(R) && ie(R.set) ? R.set.bind(s) : dt, me = Pe({
        get: Z,
        set: he
      });
      Object.defineProperty(n, I, {
        enumerable: !0,
        configurable: !0,
        get: () => me.value,
        set: (Q) => me.value = Q
      });
    }
  if (l)
    for (const I in l)
      Wr(l[I], n, s, I);
  if (a) {
    const I = ie(a) ? a.call(s) : a;
    Reflect.ownKeys(I).forEach((R) => {
      Da(R, I[R]);
    });
  }
  u && oi(u, e, "c");
  function x(I, R) {
    te(R) ? R.forEach((Z) => I(Z.bind(s))) : R && I(R.bind(s));
  }
  if (x(qa, p), x(Bs, _), x(Xa, y), x(Za, k), x(za, b), x(Ya, H), x(sc, z), x(tc, le), x(ec, Y), x(Vs, B), x(Gr, j), x(Qa, L), te(G))
    if (G.length) {
      const I = e.exposed || (e.exposed = {});
      G.forEach((R) => {
        Object.defineProperty(I, R, {
          get: () => s[R],
          set: (Z) => s[R] = Z,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  q && e.render === dt && (e.render = q), X != null && (e.inheritAttrs = X), S && (e.components = S), C && (e.directives = C), L && jr(e);
}
function rc(e, t, s = dt) {
  te(e) && (e = po(e));
  for (const n in e) {
    const o = e[n];
    let i;
    ge(o) ? "default" in o ? i = xs(
      o.from || n,
      o.default,
      !0
    ) : i = xs(o.from || n) : i = xs(o), /* @__PURE__ */ Te(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    }) : t[n] = i;
  }
}
function oi(e, t, s) {
  Je(
    te(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function Wr(e, t, s, n) {
  let o = n.includes(".") ? Lr(s, n) : () => s[n];
  if (Se(e)) {
    const i = t[e];
    ie(i) && Be(o, i);
  } else if (ie(e))
    Be(o, e.bind(s));
  else if (ge(e))
    if (te(e))
      e.forEach((i) => Wr(i, t, s, n));
    else {
      const i = ie(e.handler) ? e.handler.bind(s) : t[e.handler];
      ie(i) && Be(o, i, e);
    }
}
function Kr(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: r }
  } = e.appContext, l = i.get(t);
  let a;
  return l ? a = l : !o.length && !s && !n ? a = t : (a = {}, o.length && o.forEach(
    (c) => hn(a, c, r, !0)
  ), hn(a, t, r)), ge(t) && i.set(t, a), a;
}
function hn(e, t, s, n = !1) {
  const { mixins: o, extends: i } = t;
  i && hn(e, i, s, !0), o && o.forEach(
    (r) => hn(e, r, s, !0)
  );
  for (const r in t)
    if (!(n && r === "expose")) {
      const l = lc[r] || s && s[r];
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const lc = {
  data: ii,
  props: ri,
  emits: ri,
  // objects
  methods: ys,
  computed: ys,
  // lifecycle
  beforeCreate: $e,
  created: $e,
  beforeMount: $e,
  mounted: $e,
  beforeUpdate: $e,
  updated: $e,
  beforeDestroy: $e,
  beforeUnmount: $e,
  destroyed: $e,
  unmounted: $e,
  activated: $e,
  deactivated: $e,
  errorCaptured: $e,
  serverPrefetch: $e,
  // assets
  components: ys,
  directives: ys,
  // watch
  watch: cc,
  // provide / inject
  provide: ii,
  inject: ac
};
function ii(e, t) {
  return t ? e ? function() {
    return Ee(
      ie(e) ? e.call(this, this) : e,
      ie(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ac(e, t) {
  return ys(po(e), po(t));
}
function po(e) {
  if (te(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function $e(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ys(e, t) {
  return e ? Ee(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ri(e, t) {
  return e ? te(e) && te(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ee(
    /* @__PURE__ */ Object.create(null),
    ni(e),
    ni(t ?? {})
  ) : t;
}
function cc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = Ee(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = $e(e[n], t[n]);
  return s;
}
function zr() {
  return {
    app: null,
    config: {
      isNativeTag: Zi,
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
let uc = 0;
function fc(e, t) {
  return function(n, o = null) {
    ie(n) || (n = Ee({}, n)), o != null && !ge(o) && (o = null);
    const i = zr(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const c = i.app = {
      _uid: uc++,
      _component: n,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: Hc,
      get config() {
        return i.config;
      },
      set config(u) {
      },
      use(u, ...p) {
        return r.has(u) || (u && ie(u.install) ? (r.add(u), u.install(c, ...p)) : ie(u) && (r.add(u), u(c, ...p))), c;
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
      mount(u, p, _) {
        if (!a) {
          const y = c._ceVNode || re(n, o);
          return y.appContext = i, _ === !0 ? _ = "svg" : _ === !1 && (_ = void 0), e(y, u, _), a = !0, c._container = u, u.__vue_app__ = c, Un(y.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        a && (Je(
          l,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, p) {
        return i.provides[u] = p, c;
      },
      runWithContext(u) {
        const p = qt;
        qt = c;
        try {
          return u();
        } finally {
          qt = p;
        }
      }
    };
    return c;
  };
}
let qt = null;
const dc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Xe(t)}Modifiers`] || e[`${Ft(t)}Modifiers`];
function hc(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || be;
  let o = s;
  const i = t.startsWith("update:"), r = i && dc(n, t.slice(7));
  r && (r.trim && (o = s.map((u) => Se(u) ? u.trim() : u)), r.number && (o = s.map(ko)));
  let l, a = n[l = Hn(t)] || // also try camelCase event handler (#2249)
  n[l = Hn(Xe(t))];
  !a && i && (a = n[l = Hn(Ft(t))]), a && Je(
    a,
    e,
    6,
    o
  );
  const c = n[l + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Je(
      c,
      e,
      6,
      o
    );
  }
}
const pc = /* @__PURE__ */ new WeakMap();
function Yr(e, t, s = !1) {
  const n = s ? pc : t.emitsCache, o = n.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let r = {}, l = !1;
  if (!ie(e)) {
    const a = (c) => {
      const u = Yr(c, t, !0);
      u && (l = !0, Ee(r, u));
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !i && !l ? (ge(e) && n.set(e, null), null) : (te(i) ? i.forEach((a) => r[a] = null) : Ee(r, i), ge(e) && n.set(e, r), r);
}
function Nn(e, t) {
  return !e || !An(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), pe(e, t[0].toLowerCase() + t.slice(1)) || pe(e, Ft(t)) || pe(e, t));
}
function li(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: o,
    propsOptions: [i],
    slots: r,
    attrs: l,
    emit: a,
    render: c,
    renderCache: u,
    props: p,
    data: _,
    setupState: y,
    ctx: k,
    inheritAttrs: b
  } = e, H = fn(e);
  let F, B;
  try {
    if (s.shapeFlag & 4) {
      const j = o || n, q = j;
      F = ut(
        c.call(
          q,
          j,
          u,
          p,
          y,
          _,
          k
        )
      ), B = l;
    } else {
      const j = t;
      F = ut(
        j.length > 1 ? j(
          p,
          { attrs: l, slots: r, emit: a }
        ) : j(
          p,
          null
        )
      ), B = t.props ? l : gc(l);
    }
  } catch (j) {
    As.length = 0, On(j, e, 1), F = re(Fe);
  }
  let J = F;
  if (B && b !== !1) {
    const j = Object.keys(B), { shapeFlag: q } = J;
    j.length && q & 7 && (i && j.some(kn) && (B = mc(
      B,
      i
    )), J = Nt(J, B, !1, !0));
  }
  return s.dirs && (J = Nt(J, null, !1, !0), J.dirs = J.dirs ? J.dirs.concat(s.dirs) : s.dirs), s.transition && Os(J, s.transition), F = J, fn(H), F;
}
const gc = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || An(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, mc = (e, t) => {
  const s = {};
  for (const n in e)
    (!kn(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function yc(e, t, s) {
  const { props: n, children: o, component: i } = e, { props: r, children: l, patchFlag: a } = t, c = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return n ? ai(n, r, c) : !!r;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let p = 0; p < u.length; p++) {
        const _ = u[p];
        if (Jr(r, n, _) && !Nn(c, _))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : n === r ? !1 : n ? r ? ai(n, r, c) : !0 : !!r;
  return !1;
}
function ai(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < n.length; o++) {
    const i = n[o];
    if (Jr(t, e, i) && !Nn(s, i))
      return !0;
  }
  return !1;
}
function Jr(e, t, s) {
  const n = e[s], o = t[s];
  return s === "style" && ge(n) && ge(o) ? !Io(n, o) : n !== o;
}
function vc({ vnode: e, parent: t, suspense: s }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = n, e = o), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  s && s.activeBranch === e && (s.vnode.el = n);
}
const qr = {}, Xr = () => Object.create(qr), Zr = (e) => Object.getPrototypeOf(e) === qr;
function _c(e, t, s, n = !1) {
  const o = {}, i = Xr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Qr(e, t, o, i);
  for (const r in e.propsOptions[0])
    r in o || (o[r] = void 0);
  s ? e.props = n ? o : /* @__PURE__ */ xa(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function bc(e, t, s, n) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: r }
  } = e, l = /* @__PURE__ */ ce(o), [a] = e.propsOptions;
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
        let _ = u[p];
        if (Nn(e.emitsOptions, _))
          continue;
        const y = t[_];
        if (a)
          if (pe(i, _))
            y !== i[_] && (i[_] = y, c = !0);
          else {
            const k = Xe(_);
            o[k] = go(
              a,
              l,
              k,
              y,
              e,
              !1
            );
          }
        else
          y !== i[_] && (i[_] = y, c = !0);
      }
    }
  } else {
    Qr(e, t, o, i) && (c = !0);
    let u;
    for (const p in l)
      (!t || // for camelCase
      !pe(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Ft(p)) === p || !pe(t, u))) && (a ? s && // for camelCase
      (s[p] !== void 0 || // for kebab-case
      s[u] !== void 0) && (o[p] = go(
        a,
        l,
        p,
        void 0,
        e,
        !0
      )) : delete o[p]);
    if (i !== l)
      for (const p in i)
        (!t || !pe(t, p)) && (delete i[p], c = !0);
  }
  c && xt(e.attrs, "set", "");
}
function Qr(e, t, s, n) {
  const [o, i] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let a in t) {
      if (_s(a))
        continue;
      const c = t[a];
      let u;
      o && pe(o, u = Xe(a)) ? !i || !i.includes(u) ? s[u] = c : (l || (l = {}))[u] = c : Nn(e.emitsOptions, a) || (!(a in n) || c !== n[a]) && (n[a] = c, r = !0);
    }
  if (i) {
    const a = /* @__PURE__ */ ce(s), c = l || be;
    for (let u = 0; u < i.length; u++) {
      const p = i[u];
      s[p] = go(
        o,
        a,
        p,
        c[p],
        e,
        !pe(c, p)
      );
    }
  }
  return r;
}
function go(e, t, s, n, o, i) {
  const r = e[s];
  if (r != null) {
    const l = pe(r, "default");
    if (l && n === void 0) {
      const a = r.default;
      if (r.type !== Function && !r.skipFactory && ie(a)) {
        const { propsDefaults: c } = o;
        if (s in c)
          n = c[s];
        else {
          const u = js(o);
          n = c[s] = a.call(
            null,
            t
          ), u();
        }
      } else
        n = a;
      o.ce && o.ce._setProp(s, n);
    }
    r[
      0
      /* shouldCast */
    ] && (i && !l ? n = !1 : r[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Ft(s)) && (n = !0));
  }
  return n;
}
const wc = /* @__PURE__ */ new WeakMap();
function el(e, t, s = !1) {
  const n = s ? wc : t.propsCache, o = n.get(e);
  if (o)
    return o;
  const i = e.props, r = {}, l = [];
  let a = !1;
  if (!ie(e)) {
    const u = (p) => {
      a = !0;
      const [_, y] = el(p, t, !0);
      Ee(r, _), y && l.push(...y);
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!i && !a)
    return ge(e) && n.set(e, ns), ns;
  if (te(i))
    for (let u = 0; u < i.length; u++) {
      const p = Xe(i[u]);
      ci(p) && (r[p] = be);
    }
  else if (i)
    for (const u in i) {
      const p = Xe(u);
      if (ci(p)) {
        const _ = i[u], y = r[p] = te(_) || ie(_) ? { type: _ } : Ee({}, _), k = y.type;
        let b = !1, H = !0;
        if (te(k))
          for (let F = 0; F < k.length; ++F) {
            const B = k[F], J = ie(B) && B.name;
            if (J === "Boolean") {
              b = !0;
              break;
            } else J === "String" && (H = !1);
          }
        else
          b = ie(k) && k.name === "Boolean";
        y[
          0
          /* shouldCast */
        ] = b, y[
          1
          /* shouldCastTrue */
        ] = H, (b || pe(y, "default")) && l.push(p);
      }
    }
  const c = [r, l];
  return ge(e) && n.set(e, c), c;
}
function ci(e) {
  return e[0] !== "$" && !_s(e);
}
const No = (e) => e === "_" || e === "_ctx" || e === "$stable", Fo = (e) => te(e) ? e.map(ut) : [ut(e)], xc = (e, t, s) => {
  if (t._n)
    return t;
  const n = Pr((...o) => Fo(t(...o)), s);
  return n._c = !1, n;
}, tl = (e, t, s) => {
  const n = e._ctx;
  for (const o in e) {
    if (No(o)) continue;
    const i = e[o];
    if (ie(i))
      t[o] = xc(o, i, n);
    else if (i != null) {
      const r = Fo(i);
      t[o] = () => r;
    }
  }
}, sl = (e, t) => {
  const s = Fo(t);
  e.slots.default = () => s;
}, nl = (e, t, s) => {
  for (const n in t)
    (s || !No(n)) && (e[n] = t[n]);
}, Sc = (e, t, s) => {
  const n = e.slots = Xr();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (nl(n, t, s), s && or(n, "_", o, !0)) : tl(t, n);
  } else t && sl(e, t);
}, Cc = (e, t, s) => {
  const { vnode: n, slots: o } = e;
  let i = !0, r = be;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? i = !1 : nl(o, t, s) : (i = !t.$stable, tl(t, o)), r = t;
  } else t && (sl(e, t), r = { default: 1 });
  if (i)
    for (const l in o)
      !No(l) && r[l] == null && delete o[l];
}, De = Mc;
function Tc(e) {
  return Ac(e);
}
function Ac(e, t) {
  const s = En();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: o,
    patchProp: i,
    createElement: r,
    createText: l,
    createComment: a,
    setText: c,
    setElementText: u,
    parentNode: p,
    nextSibling: _,
    setScopeId: y = dt,
    insertStaticContent: k
  } = e, b = (d, h, v, O = null, P = null, A = null, W = void 0, V = null, U = !!h.dynamicChildren) => {
    if (d === h)
      return;
    d && !zt(d, h) && (O = Hs(d), Q(d, P, A, !0), d = null), h.patchFlag === -2 && (U = !1, h.dynamicChildren = null);
    const { type: M, ref: se, shapeFlag: K } = h;
    switch (M) {
      case Fn:
        H(d, h, v, O);
        break;
      case Fe:
        F(d, h, v, O);
        break;
      case sn:
        d == null && B(h, v, O, W);
        break;
      case oe:
        S(
          d,
          h,
          v,
          O,
          P,
          A,
          W,
          V,
          U
        );
        break;
      default:
        K & 1 ? q(
          d,
          h,
          v,
          O,
          P,
          A,
          W,
          V,
          U
        ) : K & 6 ? C(
          d,
          h,
          v,
          O,
          P,
          A,
          W,
          V,
          U
        ) : (K & 64 || K & 128) && M.process(
          d,
          h,
          v,
          O,
          P,
          A,
          W,
          V,
          U,
          cs
        );
    }
    se != null && P ? Ss(se, d && d.ref, A, h || d, !h) : se == null && d && d.ref != null && Ss(d.ref, null, A, d, !0);
  }, H = (d, h, v, O) => {
    if (d == null)
      n(
        h.el = l(h.children),
        v,
        O
      );
    else {
      const P = h.el = d.el;
      h.children !== d.children && c(P, h.children);
    }
  }, F = (d, h, v, O) => {
    d == null ? n(
      h.el = a(h.children || ""),
      v,
      O
    ) : h.el = d.el;
  }, B = (d, h, v, O) => {
    [d.el, d.anchor] = k(
      d.children,
      h,
      v,
      O,
      d.el,
      d.anchor
    );
  }, J = ({ el: d, anchor: h }, v, O) => {
    let P;
    for (; d && d !== h; )
      P = _(d), n(d, v, O), d = P;
    n(h, v, O);
  }, j = ({ el: d, anchor: h }) => {
    let v;
    for (; d && d !== h; )
      v = _(d), o(d), d = v;
    o(h);
  }, q = (d, h, v, O, P, A, W, V, U) => {
    if (h.type === "svg" ? W = "svg" : h.type === "math" && (W = "mathml"), d == null)
      le(
        h,
        v,
        O,
        P,
        A,
        W,
        V,
        U
      );
    else {
      const M = d.el && d.el._isVueCE ? d.el : null;
      try {
        M && M._beginPatch(), L(
          d,
          h,
          P,
          A,
          W,
          V,
          U
        );
      } finally {
        M && M._endPatch();
      }
    }
  }, le = (d, h, v, O, P, A, W, V) => {
    let U, M;
    const { props: se, shapeFlag: K, transition: ee, dirs: ne } = d;
    if (U = d.el = r(
      d.type,
      A,
      se && se.is,
      se
    ), K & 8 ? u(U, d.children) : K & 16 && z(
      d.children,
      U,
      null,
      O,
      P,
      qn(d, A),
      W,
      V
    ), ne && Ut(d, null, O, "created"), Y(U, d, d.scopeId, W, O), se) {
      for (const ve in se)
        ve !== "value" && !_s(ve) && i(U, ve, null, se[ve], A, O);
      "value" in se && i(U, "value", null, se.value, A), (M = se.onVnodeBeforeMount) && rt(M, O, d);
    }
    ne && Ut(d, null, O, "beforeMount");
    const ae = kc(P, ee);
    ae && ee.beforeEnter(U), n(U, h, v), ((M = se && se.onVnodeMounted) || ae || ne) && De(() => {
      try {
        M && rt(M, O, d), ae && ee.enter(U), ne && Ut(d, null, O, "mounted");
      } finally {
      }
    }, P);
  }, Y = (d, h, v, O, P) => {
    if (v && y(d, v), O)
      for (let A = 0; A < O.length; A++)
        y(d, O[A]);
    if (P) {
      let A = P.subTree;
      if (h === A || rl(A.type) && (A.ssContent === h || A.ssFallback === h)) {
        const W = P.vnode;
        Y(
          d,
          W,
          W.scopeId,
          W.slotScopeIds,
          P.parent
        );
      }
    }
  }, z = (d, h, v, O, P, A, W, V, U = 0) => {
    for (let M = U; M < d.length; M++) {
      const se = d[M] = V ? bt(d[M]) : ut(d[M]);
      b(
        null,
        se,
        h,
        v,
        O,
        P,
        A,
        W,
        V
      );
    }
  }, L = (d, h, v, O, P, A, W) => {
    const V = h.el = d.el;
    let { patchFlag: U, dynamicChildren: M, dirs: se } = h;
    U |= d.patchFlag & 16;
    const K = d.props || be, ee = h.props || be;
    let ne;
    if (v && Bt(v, !1), (ne = ee.onVnodeBeforeUpdate) && rt(ne, v, h, d), se && Ut(h, d, v, "beforeUpdate"), v && Bt(v, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    M && (!d.dynamicChildren || d.dynamicChildren.length !== M.length) && (U = 0, W = !1, M = null), (K.innerHTML && ee.innerHTML == null || K.textContent && ee.textContent == null) && u(V, ""), M ? G(
      d.dynamicChildren,
      M,
      V,
      v,
      O,
      qn(h, P),
      A
    ) : W || R(
      d,
      h,
      V,
      null,
      v,
      O,
      qn(h, P),
      A,
      !1
    ), U > 0) {
      if (U & 16)
        X(V, K, ee, v, P);
      else if (U & 2 && K.class !== ee.class && i(V, "class", null, ee.class, P), U & 4 && i(V, "style", K.style, ee.style, P), U & 8) {
        const ae = h.dynamicProps;
        for (let ve = 0; ve < ae.length; ve++) {
          const ye = ae[ve], Ae = K[ye], Re = ee[ye];
          (Re !== Ae || ye === "value") && i(V, ye, Ae, Re, P, v);
        }
      }
      U & 1 && d.children !== h.children && u(V, h.children);
    } else !W && M == null && X(V, K, ee, v, P);
    ((ne = ee.onVnodeUpdated) || se) && De(() => {
      ne && rt(ne, v, h, d), se && Ut(h, d, v, "updated");
    }, O);
  }, G = (d, h, v, O, P, A, W) => {
    for (let V = 0; V < h.length; V++) {
      const U = d[V], M = h[V], se = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        U.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (U.type === oe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !zt(U, M) || // - In the case of a component, it could contain anything.
        U.shapeFlag & 198) ? p(U.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      b(
        U,
        M,
        se,
        null,
        O,
        P,
        A,
        W,
        !0
      );
    }
  }, X = (d, h, v, O, P) => {
    if (h !== v) {
      if (h !== be)
        for (const A in h)
          !_s(A) && !(A in v) && i(
            d,
            A,
            h[A],
            null,
            P,
            O
          );
      for (const A in v) {
        if (_s(A)) continue;
        const W = v[A], V = h[A];
        W !== V && A !== "value" && i(d, A, V, W, P, O);
      }
      "value" in v && i(d, "value", h.value, v.value, P);
    }
  }, S = (d, h, v, O, P, A, W, V, U) => {
    const M = h.el = d ? d.el : l(""), se = h.anchor = d ? d.anchor : l("");
    let { patchFlag: K, dynamicChildren: ee, slotScopeIds: ne } = h;
    ne && (V = V ? V.concat(ne) : ne), d == null ? (n(M, v, O), n(se, v, O), z(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      v,
      se,
      P,
      A,
      W,
      V,
      U
    )) : K > 0 && K & 64 && ee && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    d.dynamicChildren && d.dynamicChildren.length === ee.length ? (G(
      d.dynamicChildren,
      ee,
      v,
      P,
      A,
      W,
      V
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || P && h === P.subTree) && Uo(
      d,
      h,
      !0
      /* shallow */
    )) : R(
      d,
      h,
      v,
      se,
      P,
      A,
      W,
      V,
      U
    );
  }, C = (d, h, v, O, P, A, W, V, U) => {
    h.slotScopeIds = V, d == null ? h.shapeFlag & 512 ? P.ctx.activate(
      h,
      v,
      O,
      W,
      U
    ) : w(
      h,
      v,
      O,
      P,
      A,
      W,
      U
    ) : T(d, h, U);
  }, w = (d, h, v, O, P, A, W) => {
    const V = d.component = Dc(
      d,
      O,
      P
    );
    if ($n(d) && (V.ctx.renderer = cs), Nc(V, !1, W), V.asyncDep) {
      if (P && P.registerDep(V, x, W), !d.el) {
        const U = V.subTree = re(Fe);
        F(null, U, h, v), d.placeholder = U.el;
      }
    } else
      x(
        V,
        d,
        h,
        v,
        P,
        A,
        W
      );
  }, T = (d, h, v) => {
    const O = h.component = d.component;
    if (yc(d, h, v))
      if (O.asyncDep && !O.asyncResolved) {
        I(O, h, v);
        return;
      } else
        O.next = h, O.update();
    else
      h.el = d.el, O.vnode = h;
  }, x = (d, h, v, O, P, A, W) => {
    const V = () => {
      if (d.isMounted) {
        let { next: K, bu: ee, u: ne, parent: ae, vnode: ve } = d;
        {
          const ot = ol(d);
          if (ot) {
            K && (K.el = ve.el, I(d, K, W)), ot.asyncDep.then(() => {
              De(() => {
                d.isUnmounted || M();
              }, P);
            });
            return;
          }
        }
        let ye = K, Ae;
        Bt(d, !1), K ? (K.el = ve.el, I(d, K, W)) : K = ve, ee && tn(ee), (Ae = K.props && K.props.onVnodeBeforeUpdate) && rt(Ae, ae, K, ve), Bt(d, !0);
        const Re = li(d), nt = d.subTree;
        d.subTree = Re, b(
          nt,
          Re,
          // parent may have changed if it's in a teleport
          p(nt.el),
          // anchor may have changed if it's in a fragment
          Hs(nt),
          d,
          P,
          A
        ), K.el = Re.el, ye === null && vc(d, Re.el), ne && De(ne, P), (Ae = K.props && K.props.onVnodeUpdated) && De(
          () => rt(Ae, ae, K, ve),
          P
        );
      } else {
        let K;
        const { el: ee, props: ne } = h, { bm: ae, m: ve, parent: ye, root: Ae, type: Re } = d, nt = Cs(h);
        Bt(d, !1), ae && tn(ae), !nt && (K = ne && ne.onVnodeBeforeMount) && rt(K, ye, h), Bt(d, !0);
        {
          Ae.ce && Ae.ce._hasShadowRoot() && Ae.ce._injectChildStyle(
            Re,
            d.parent ? d.parent.type : void 0
          );
          const ot = d.subTree = li(d);
          b(
            null,
            ot,
            v,
            O,
            d,
            P,
            A
          ), h.el = ot.el;
        }
        if (ve && De(ve, P), !nt && (K = ne && ne.onVnodeMounted)) {
          const ot = h;
          De(
            () => rt(K, ye, ot),
            P
          );
        }
        (h.shapeFlag & 256 || ye && Cs(ye.vnode) && ye.vnode.shapeFlag & 256) && d.a && De(d.a, P), d.isMounted = !0, h = v = O = null;
      }
    };
    d.scope.on();
    const U = d.effect = new fr(V);
    d.scope.off();
    const M = d.update = U.run.bind(U), se = d.job = U.runIfDirty.bind(U);
    se.i = d, se.id = d.uid, U.scheduler = () => Do(se), Bt(d, !0), M();
  }, I = (d, h, v) => {
    h.component = d;
    const O = d.vnode.props;
    d.vnode = h, d.next = null, bc(d, h.props, O, v), Cc(d, h.children, v), pt(), Xo(d), gt();
  }, R = (d, h, v, O, P, A, W, V, U = !1) => {
    const M = d && d.children, se = d ? d.shapeFlag : 0, K = h.children, { patchFlag: ee, shapeFlag: ne } = h;
    if (ee > 0) {
      if (ee & 128) {
        he(
          M,
          K,
          v,
          O,
          P,
          A,
          W,
          V,
          U
        );
        return;
      } else if (ee & 256) {
        Z(
          M,
          K,
          v,
          O,
          P,
          A,
          W,
          V,
          U
        );
        return;
      }
    }
    ne & 8 ? (se & 16 && st(M, P, A), K !== M && u(v, K)) : se & 16 ? ne & 16 ? he(
      M,
      K,
      v,
      O,
      P,
      A,
      W,
      V,
      U
    ) : st(M, P, A, !0) : (se & 8 && u(v, ""), ne & 16 && z(
      K,
      v,
      O,
      P,
      A,
      W,
      V,
      U
    ));
  }, Z = (d, h, v, O, P, A, W, V, U) => {
    d = d || ns, h = h || ns;
    const M = d.length, se = h.length, K = Math.min(M, se);
    let ee;
    for (ee = 0; ee < K; ee++) {
      const ne = h[ee] = U ? bt(h[ee]) : ut(h[ee]);
      b(
        d[ee],
        ne,
        v,
        null,
        P,
        A,
        W,
        V,
        U
      );
    }
    M > se ? st(
      d,
      P,
      A,
      !0,
      !1,
      K
    ) : z(
      h,
      v,
      O,
      P,
      A,
      W,
      V,
      U,
      K
    );
  }, he = (d, h, v, O, P, A, W, V, U) => {
    let M = 0;
    const se = h.length;
    let K = d.length - 1, ee = se - 1;
    for (; M <= K && M <= ee; ) {
      const ne = d[M], ae = h[M] = U ? bt(h[M]) : ut(h[M]);
      if (zt(ne, ae))
        b(
          ne,
          ae,
          v,
          null,
          P,
          A,
          W,
          V,
          U
        );
      else
        break;
      M++;
    }
    for (; M <= K && M <= ee; ) {
      const ne = d[K], ae = h[ee] = U ? bt(h[ee]) : ut(h[ee]);
      if (zt(ne, ae))
        b(
          ne,
          ae,
          v,
          null,
          P,
          A,
          W,
          V,
          U
        );
      else
        break;
      K--, ee--;
    }
    if (M > K) {
      if (M <= ee) {
        const ne = ee + 1, ae = ne < se ? h[ne].el : O;
        for (; M <= ee; )
          b(
            null,
            h[M] = U ? bt(h[M]) : ut(h[M]),
            v,
            ae,
            P,
            A,
            W,
            V,
            U
          ), M++;
      }
    } else if (M > ee)
      for (; M <= K; )
        Q(d[M], P, A, !0), M++;
    else {
      const ne = M, ae = M, ve = /* @__PURE__ */ new Map();
      for (M = ae; M <= ee; M++) {
        const je = h[M] = U ? bt(h[M]) : ut(h[M]);
        je.key != null && ve.set(je.key, M);
      }
      let ye, Ae = 0;
      const Re = ee - ae + 1;
      let nt = !1, ot = 0;
      const us = new Array(Re);
      for (M = 0; M < Re; M++) us[M] = 0;
      for (M = ne; M <= K; M++) {
        const je = d[M];
        if (Ae >= Re) {
          Q(je, P, A, !0);
          continue;
        }
        let it;
        if (je.key != null)
          it = ve.get(je.key);
        else
          for (ye = ae; ye <= ee; ye++)
            if (us[ye - ae] === 0 && zt(je, h[ye])) {
              it = ye;
              break;
            }
        it === void 0 ? Q(je, P, A, !0) : (us[it - ae] = M + 1, it >= ot ? ot = it : nt = !0, b(
          je,
          h[it],
          v,
          null,
          P,
          A,
          W,
          V,
          U
        ), Ae++);
      }
      const Go = nt ? Ic(us) : ns;
      for (ye = Go.length - 1, M = Re - 1; M >= 0; M--) {
        const je = ae + M, it = h[je], Wo = h[je + 1], Ko = je + 1 < se ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Wo.el || il(Wo)
        ) : O;
        us[M] === 0 ? b(
          null,
          it,
          v,
          Ko,
          P,
          A,
          W,
          V,
          U
        ) : nt && (ye < 0 || M !== Go[ye] ? me(it, v, Ko, 2) : ye--);
      }
    }
  }, me = (d, h, v, O, P = null) => {
    const { el: A, type: W, transition: V, children: U, shapeFlag: M } = d;
    if (M & 6) {
      me(d.component.subTree, h, v, O);
      return;
    }
    if (M & 128) {
      d.suspense.move(h, v, O);
      return;
    }
    if (M & 64) {
      W.move(d, h, v, cs);
      return;
    }
    if (W === oe) {
      n(A, h, v);
      for (let K = 0; K < U.length; K++)
        me(U[K], h, v, O);
      n(d.anchor, h, v);
      return;
    }
    if (W === sn) {
      J(d, h, v);
      return;
    }
    if (O !== 2 && M & 1 && V)
      if (O === 0)
        V.persisted && !A[Ke] ? n(A, h, v) : (V.beforeEnter(A), n(A, h, v), De(() => V.enter(A), P));
      else {
        const { leave: K, delayLeave: ee, afterLeave: ne } = V, ae = () => {
          d.ctx.isUnmounted ? o(A) : n(A, h, v);
        }, ve = () => {
          const ye = A._isLeaving || !!A[Ke];
          A._isLeaving && A[Ke](
            !0
            /* cancelled */
          ), V.persisted && !ye ? ae() : K(A, () => {
            ae(), ne && ne();
          });
        };
        ee ? ee(A, ae, ve) : ve();
      }
    else
      n(A, h, v);
  }, Q = (d, h, v, O = !1, P = !1) => {
    const {
      type: A,
      props: W,
      ref: V,
      children: U,
      dynamicChildren: M,
      shapeFlag: se,
      patchFlag: K,
      dirs: ee,
      cacheIndex: ne,
      memo: ae
    } = d;
    if (K === -2 && (P = !1), V != null && (pt(), Ss(V, null, v, d, !0), gt()), ne != null && (h.renderCache[ne] = void 0), se & 256) {
      h.ctx.deactivate(d);
      return;
    }
    const ve = se & 1 && ee, ye = !Cs(d);
    let Ae;
    if (ye && (Ae = W && W.onVnodeBeforeUnmount) && rt(Ae, h, d), se & 6)
      tt(d.component, v, O);
    else {
      if (se & 128) {
        d.suspense.unmount(v, O);
        return;
      }
      ve && Ut(d, null, h, "beforeUnmount"), se & 64 ? d.type.remove(
        d,
        h,
        v,
        cs,
        O
      ) : M && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !M.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (A !== oe || K > 0 && K & 64) ? st(
        M,
        h,
        v,
        !1,
        !0
      ) : (A === oe && K & 384 || !P && se & 16) && st(U, h, v), O && Ce(d);
    }
    const Re = ae != null && ne == null;
    (ye && (Ae = W && W.onVnodeUnmounted) || ve || Re) && De(() => {
      Ae && rt(Ae, h, d), ve && Ut(d, null, h, "unmounted"), Re && (d.el = null);
    }, v);
  }, Ce = (d) => {
    const { type: h, el: v, anchor: O, transition: P } = d;
    if (h === oe) {
      Ie(v, O);
      return;
    }
    if (h === sn) {
      j(d);
      return;
    }
    const A = () => {
      o(v), P && !P.persisted && P.afterLeave && P.afterLeave();
    };
    if (d.shapeFlag & 1 && P && !P.persisted) {
      const { leave: W, delayLeave: V } = P, U = () => W(v, A);
      V ? V(d.el, A, U) : U();
    } else
      A();
  }, Ie = (d, h) => {
    let v;
    for (; d !== h; )
      v = _(d), o(d), d = v;
    o(h);
  }, tt = (d, h, v) => {
    const { bum: O, scope: P, job: A, subTree: W, um: V, m: U, a: M } = d;
    ui(U), ui(M), O && tn(O), P.stop(), A && (A.flags |= 8, Q(W, d, h, v)), V && De(V, h), De(() => {
      d.isUnmounted = !0;
    }, h);
  }, st = (d, h, v, O = !1, P = !1, A = 0) => {
    for (let W = A; W < d.length; W++)
      Q(d[W], h, v, O, P);
  }, Hs = (d) => {
    if (d.shapeFlag & 6)
      return Hs(d.component.subTree);
    if (d.shapeFlag & 128)
      return d.suspense.next();
    const h = _(d.anchor || d.el), v = h && h[Or];
    return v ? _(v) : h;
  };
  let jn = !1;
  const Ho = (d, h, v) => {
    let O;
    d == null ? h._vnode && (Q(h._vnode, null, null, !0), O = h._vnode.component) : b(
      h._vnode || null,
      d,
      h,
      null,
      null,
      null,
      v
    ), h._vnode = d, jn || (jn = !0, Xo(O), Ir(), jn = !1);
  }, cs = {
    p: b,
    um: Q,
    m: me,
    r: Ce,
    mt: w,
    mc: z,
    pc: R,
    pbc: G,
    n: Hs,
    o: e
  };
  return {
    render: Ho,
    hydrate: void 0,
    createApp: fc(Ho)
  };
}
function qn({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function Bt({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function kc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Uo(e, t, s = !1) {
  const n = e.children, o = t.children;
  if (te(n) && te(o))
    for (let i = 0; i < n.length; i++) {
      const r = n[i];
      let l = o[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[i] = bt(o[i]), l.el = r.el), !s && l.patchFlag !== -2 && Uo(r, l)), l.type === Fn && (l.patchFlag === -1 && (l = o[i] = bt(l)), l.el = r.el), l.type === Fe && !l.el && (l.el = r.el);
    }
}
function Ic(e) {
  const t = e.slice(), s = [0];
  let n, o, i, r, l;
  const a = e.length;
  for (n = 0; n < a; n++) {
    const c = e[n];
    if (c !== 0) {
      if (o = s[s.length - 1], e[o] < c) {
        t[n] = o, s.push(n);
        continue;
      }
      for (i = 0, r = s.length - 1; i < r; )
        l = i + r >> 1, e[s[l]] < c ? i = l + 1 : r = l;
      c < e[s[i]] && (i > 0 && (t[n] = s[i - 1]), s[i] = n);
    }
  }
  for (i = s.length, r = s[i - 1]; i-- > 0; )
    s[i] = r, r = t[r];
  return s;
}
function ol(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ol(t);
}
function ui(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function il(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? il(t.subTree) : null;
}
const rl = (e) => e.__isSuspense;
function Mc(e, t) {
  t && t.pendingBranch ? te(e) ? t.effects.push(...e) : t.effects.push(e) : $a(e);
}
const oe = /* @__PURE__ */ Symbol.for("v-fgt"), Fn = /* @__PURE__ */ Symbol.for("v-txt"), Fe = /* @__PURE__ */ Symbol.for("v-cmt"), sn = /* @__PURE__ */ Symbol.for("v-stc"), As = [];
let He = null;
function E(e = !1) {
  As.push(He = e ? null : []);
}
function Ec() {
  As.pop(), He = As[As.length - 1] || null;
}
let $s = 1;
function pn(e, t = !1) {
  $s += e, e < 0 && He && t && (He.hasOnce = !0);
}
function ll(e) {
  return e.dynamicChildren = $s > 0 ? He || ns : null, Ec(), $s > 0 && He && He.push(e), e;
}
function D(e, t, s, n, o, i) {
  return ll(
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
function Qe(e, t, s, n, o) {
  return ll(
    re(
      e,
      t,
      s,
      n,
      o,
      !0
    )
  );
}
function gn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function zt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const al = ({ key: e }) => e ?? null, nn = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? Se(e) || /* @__PURE__ */ Te(e) || ie(e) ? { i: ze, r: e, k: t, f: !!s } : e : null);
function f(e, t = null, s = null, n = 0, o = null, i = e === oe ? 0 : 1, r = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && al(t),
    ref: t && nn(t),
    scopeId: Er,
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
    ctx: ze
  };
  return l ? (mn(a, s), i & 128 && e.normalize(a)) : s && (a.shapeFlag |= Se(s) ? 8 : 16), $s > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  He && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && He.push(a), a;
}
const re = Pc;
function Pc(e, t = null, s = null, n = 0, o = null, i = !1) {
  if ((!e || e === nc) && (e = Fe), gn(e)) {
    const l = Nt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && mn(l, s), $s > 0 && !i && He && (l.shapeFlag & 6 ? He[He.indexOf(e)] = l : He.push(l)), l.patchFlag = -2, l;
  }
  if (Vc(e) && (e = e.__vccOpts), t) {
    t = Rc(t);
    let { class: l, style: a } = t;
    l && !Se(l) && (t.class = ue(l)), ge(a) && (/* @__PURE__ */ Ln(a) && !te(a) && (a = Ee({}, a)), t.style = Dt(a));
  }
  const r = Se(e) ? 1 : rl(e) ? 128 : $r(e) ? 64 : ge(e) ? 4 : ie(e) ? 2 : 0;
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
function Rc(e) {
  return e ? /* @__PURE__ */ Ln(e) || Zr(e) ? Ee({}, e) : e : null;
}
function Nt(e, t, s = !1, n = !1) {
  const { props: o, ref: i, patchFlag: r, children: l, transition: a } = e, c = t ? Lc(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && al(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? te(i) ? i.concat(nn(t)) : [i, nn(t)] : nn(t)
    ) : i,
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
    patchFlag: t && e.type !== oe ? r === -1 ? 16 : r | 16 : r,
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
    ssContent: e.ssContent && Nt(e.ssContent),
    ssFallback: e.ssFallback && Nt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && n && Os(
    u,
    a.clone(u)
  ), u;
}
function on(e = " ", t = 0) {
  return re(Fn, null, e, t);
}
function Ys(e, t) {
  const s = re(sn, null, e);
  return s.staticCount = t, s;
}
function _e(e = "", t = !1) {
  return t ? (E(), Qe(Fe, null, e)) : re(Fe, null, e);
}
function ut(e) {
  return e == null || typeof e == "boolean" ? re(Fe) : te(e) ? re(
    oe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : gn(e) ? bt(e) : re(Fn, null, String(e));
}
function bt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Nt(e);
}
function mn(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (te(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), mn(e, o()), o._c && (o._d = !0));
      return;
    } else {
      s = 32;
      const o = t._;
      !o && !Zr(t) ? t._ctx = ze : o === 3 && ze && (ze.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ie(t)) {
    if (n & 65) {
      mn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: ze }, s = 32;
  } else
    t = String(t), n & 64 ? (s = 16, t = [on(t)]) : s = 8;
  e.children = t, e.shapeFlag |= s;
}
function Lc(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const o in n)
      if (o === "class")
        t.class !== n.class && (t.class = ue([t.class, n.class]));
      else if (o === "style")
        t.style = Dt([t.style, n.style]);
      else if (An(o)) {
        const i = t[o], r = n[o];
        r && i !== r && !(te(i) && i.includes(r)) ? t[o] = i ? [].concat(i, r) : r : r == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !kn(o) && (t[o] = r);
      } else o !== "" && (t[o] = n[o]);
  }
  return t;
}
function rt(e, t, s, n = null) {
  Je(e, t, 7, [
    s,
    n
  ]);
}
const Oc = zr();
let $c = 0;
function Dc(e, t, s) {
  const n = e.type, o = (t ? t.appContext : e.appContext) || Oc, i = {
    uid: $c++,
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
    scope: new ar(
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
    propsOptions: el(n, o),
    emitsOptions: Yr(n, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: be,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: be,
    data: be,
    props: be,
    attrs: be,
    slots: be,
    refs: be,
    setupState: be,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = hc.bind(null, i), e.ce && e.ce(i), i;
}
let Ue = null;
const Bo = () => Ue || ze;
let yn, mo;
{
  const e = En(), t = (s, n) => {
    let o;
    return (o = e[s]) || (o = e[s] = []), o.push(n), (i) => {
      o.length > 1 ? o.forEach((r) => r(i)) : o[0](i);
    };
  };
  yn = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => Ue = s
  ), mo = t(
    "__VUE_SSR_SETTERS__",
    (s) => Ds = s
  );
}
const js = (e) => {
  const t = Ue;
  return yn(e), e.scope.on(), () => {
    e.scope.off(), yn(t);
  };
}, fi = () => {
  Ue && Ue.scope.off(), yn(null);
};
function cl(e) {
  return e.vnode.shapeFlag & 4;
}
let Ds = !1;
function Nc(e, t = !1, s = !1) {
  t && mo(t);
  const { props: n, children: o } = e.vnode, i = cl(e);
  _c(e, n, i, t), Sc(e, o, s || t);
  const r = i ? Fc(e, t) : void 0;
  return t && mo(!1), r;
}
function Fc(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, oc);
  const { setup: n } = s;
  if (n) {
    pt();
    const o = e.setupContext = n.length > 1 ? Bc(e) : null, i = js(e), r = Us(
      n,
      e,
      0,
      [
        e.props,
        o
      ]
    ), l = er(r);
    if (gt(), i(), (l || e.sp) && !Cs(e) && jr(e), l) {
      if (r.then(fi, fi), t)
        return r.then((a) => {
          di(e, a);
        }).catch((a) => {
          On(a, e, 0);
        });
      e.asyncDep = r;
    } else
      di(e, r);
  } else
    ul(e);
}
function di(e, t, s) {
  ie(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ge(t) && (e.setupState = Tr(t)), ul(e);
}
function ul(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || dt);
  {
    const o = js(e);
    pt();
    try {
      ic(e);
    } finally {
      gt(), o();
    }
  }
}
const Uc = {
  get(e, t) {
    return Oe(e, "get", ""), e[t];
  }
};
function Bc(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, Uc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Un(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Tr($o(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in Ts)
        return Ts[s](e);
    },
    has(t, s) {
      return s in t || s in Ts;
    }
  })) : e.proxy;
}
function Vc(e) {
  return ie(e) && "__vccOpts" in e;
}
const Pe = (e, t) => /* @__PURE__ */ Ea(e, t, Ds);
function jc(e, t, s) {
  try {
    pn(-1);
    const n = arguments.length;
    return n === 2 ? ge(t) && !te(t) ? gn(t) ? re(e, null, [t]) : re(e, t) : re(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && gn(s) && (s = [s]), re(e, t, s));
  } finally {
    pn(1);
  }
}
const Hc = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let yo;
const hi = typeof window < "u" && window.trustedTypes;
if (hi)
  try {
    yo = /* @__PURE__ */ hi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const fl = yo ? (e) => yo.createHTML(e) : (e) => e, Gc = "http://www.w3.org/2000/svg", Wc = "http://www.w3.org/1998/Math/MathML", vt = typeof document < "u" ? document : null, pi = vt && /* @__PURE__ */ vt.createElement("template"), Kc = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const o = t === "svg" ? vt.createElementNS(Gc, e) : t === "mathml" ? vt.createElementNS(Wc, e) : s ? vt.createElement(e, { is: s }) : vt.createElement(e);
    return e === "select" && n && n.multiple != null && o.setAttribute("multiple", n.multiple), o;
  },
  createText: (e) => vt.createTextNode(e),
  createComment: (e) => vt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => vt.querySelector(e),
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
      pi.innerHTML = fl(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const l = pi.content;
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
}, Et = "transition", hs = "animation", Ns = /* @__PURE__ */ Symbol("_vtc"), dl = {
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
}, zc = /* @__PURE__ */ Ee(
  {},
  Nr,
  dl
), Yc = (e) => (e.displayName = "Transition", e.props = zc, e), Jc = /* @__PURE__ */ Yc(
  (e, { slots: t }) => jc(Ka, qc(e), t)
), Vt = (e, t = []) => {
  te(e) ? e.forEach((s) => s(...t)) : e && e(...t);
}, gi = (e) => e ? te(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function qc(e) {
  const t = {};
  for (const S in e)
    S in dl || (t[S] = e[S]);
  if (e.css === !1)
    return t;
  const {
    name: s = "v",
    type: n,
    duration: o,
    enterFromClass: i = `${s}-enter-from`,
    enterActiveClass: r = `${s}-enter-active`,
    enterToClass: l = `${s}-enter-to`,
    appearFromClass: a = i,
    appearActiveClass: c = r,
    appearToClass: u = l,
    leaveFromClass: p = `${s}-leave-from`,
    leaveActiveClass: _ = `${s}-leave-active`,
    leaveToClass: y = `${s}-leave-to`
  } = e, k = Xc(o), b = k && k[0], H = k && k[1], {
    onBeforeEnter: F,
    onEnter: B,
    onEnterCancelled: J,
    onLeave: j,
    onLeaveCancelled: q,
    onBeforeAppear: le = F,
    onAppear: Y = B,
    onAppearCancelled: z = J
  } = t, L = (S, C, w, T) => {
    S._enterCancelled = T, jt(S, C ? u : l), jt(S, C ? c : r), w && w();
  }, G = (S, C) => {
    S._isLeaving = !1, jt(S, p), jt(S, y), jt(S, _), C && C();
  }, X = (S) => (C, w) => {
    const T = S ? Y : B, x = () => L(C, S, w);
    Vt(T, [C, x]), mi(() => {
      jt(C, S ? a : i), yt(C, S ? u : l), gi(T) || yi(C, n, b, x);
    });
  };
  return Ee(t, {
    onBeforeEnter(S) {
      Vt(F, [S]), yt(S, i), yt(S, r);
    },
    onBeforeAppear(S) {
      Vt(le, [S]), yt(S, a), yt(S, c);
    },
    onEnter: X(!1),
    onAppear: X(!0),
    onLeave(S, C) {
      S._isLeaving = !0;
      const w = () => G(S, C);
      yt(S, p), S._enterCancelled ? (yt(S, _), bi(S)) : (bi(S), yt(S, _)), mi(() => {
        S._isLeaving && (jt(S, p), yt(S, y), gi(j) || yi(S, n, H, w));
      }), Vt(j, [S, w]);
    },
    onEnterCancelled(S) {
      L(S, !1, void 0, !0), Vt(J, [S]);
    },
    onAppearCancelled(S) {
      L(S, !0, void 0, !0), Vt(z, [S]);
    },
    onLeaveCancelled(S) {
      G(S), Vt(q, [S]);
    }
  });
}
function Xc(e) {
  if (e == null)
    return null;
  if (ge(e))
    return [Xn(e.enter), Xn(e.leave)];
  {
    const t = Xn(e);
    return [t, t];
  }
}
function Xn(e) {
  return Jl(e);
}
function yt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.add(s)), (e[Ns] || (e[Ns] = /* @__PURE__ */ new Set())).add(t);
}
function jt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const s = e[Ns];
  s && (s.delete(t), s.size || (e[Ns] = void 0));
}
function mi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Zc = 0;
function yi(e, t, s, n) {
  const o = e._endId = ++Zc, i = () => {
    o === e._endId && n();
  };
  if (s != null)
    return setTimeout(i, s);
  const { type: r, timeout: l, propCount: a } = Qc(e, t);
  if (!r)
    return n();
  const c = r + "end";
  let u = 0;
  const p = () => {
    e.removeEventListener(c, _), i();
  }, _ = (y) => {
    y.target === e && ++u >= a && p();
  };
  setTimeout(() => {
    u < a && p();
  }, l + 1), e.addEventListener(c, _);
}
function Qc(e, t) {
  const s = window.getComputedStyle(e), n = (k) => (s[k] || "").split(", "), o = n(`${Et}Delay`), i = n(`${Et}Duration`), r = vi(o, i), l = n(`${hs}Delay`), a = n(`${hs}Duration`), c = vi(l, a);
  let u = null, p = 0, _ = 0;
  t === Et ? r > 0 && (u = Et, p = r, _ = i.length) : t === hs ? c > 0 && (u = hs, p = c, _ = a.length) : (p = Math.max(r, c), u = p > 0 ? r > c ? Et : hs : null, _ = u ? u === Et ? i.length : a.length : 0);
  const y = u === Et && /\b(?:transform|all)(?:,|$)/.test(
    n(`${Et}Property`).toString()
  );
  return {
    type: u,
    timeout: p,
    propCount: _,
    hasTransform: y
  };
}
function vi(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((s, n) => _i(s) + _i(e[n])));
}
function _i(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function bi(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function eu(e, t, s) {
  const n = e[Ns];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const vn = /* @__PURE__ */ Symbol("_vod"), hl = /* @__PURE__ */ Symbol("_vsh"), Js = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: s }) {
    e[vn] = e.style.display === "none" ? "" : e.style.display, s && t ? s.beforeEnter(e) : ps(e, t);
  },
  mounted(e, { value: t }, { transition: s }) {
    s && t && s.enter(e);
  },
  updated(e, { value: t, oldValue: s }, { transition: n }) {
    !t != !s && (n ? t ? (n.beforeEnter(e), ps(e, !0), n.enter(e)) : n.leave(e, () => {
      ps(e, !1);
    }) : ps(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ps(e, t);
  }
};
function ps(e, t) {
  e.style.display = t ? e[vn] : "none", e[hl] = !t;
}
const tu = /* @__PURE__ */ Symbol(""), su = /(?:^|;)\s*display\s*:/;
function nu(e, t, s) {
  const n = e.style, o = Se(s);
  let i = !1;
  if (s && !o) {
    if (t)
      if (Se(t))
        for (const r of t.split(";")) {
          const l = r.slice(0, r.indexOf(":")).trim();
          s[l] == null && vs(n, l, "");
        }
      else
        for (const r in t)
          s[r] == null && vs(n, r, "");
    for (const r in s) {
      r === "display" && (i = !0);
      const l = s[r];
      l != null ? iu(
        e,
        r,
        !Se(t) && t ? t[r] : void 0,
        l
      ) || vs(n, r, l) : vs(n, r, "");
    }
  } else if (o) {
    if (t !== s) {
      const r = n[tu];
      r && (s += ";" + r), n.cssText = s, i = su.test(s);
    }
  } else t && e.removeAttribute("style");
  vn in e && (e[vn] = i ? n.display : "", e[hl] && (n.display = "none"));
}
const wi = /\s*!important$/;
function vs(e, t, s) {
  if (te(s))
    s.forEach((n) => vs(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = ou(e, t);
    wi.test(s) ? e.setProperty(
      Ft(n),
      s.replace(wi, ""),
      "important"
    ) : e[n] = s;
  }
}
const xi = ["Webkit", "Moz", "ms"], Zn = {};
function ou(e, t) {
  const s = Zn[t];
  if (s)
    return s;
  let n = Xe(t);
  if (n !== "filter" && n in e)
    return Zn[t] = n;
  n = nr(n);
  for (let o = 0; o < xi.length; o++) {
    const i = xi[o] + n;
    if (i in e)
      return Zn[t] = i;
  }
  return t;
}
function iu(e, t, s, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Se(n) && s === n;
}
const Si = "http://www.w3.org/1999/xlink";
function Ci(e, t, s, n, o, i = ta(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Si, t.slice(6, t.length)) : e.setAttributeNS(Si, t, s) : s == null || i && !ir(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Ye(s) ? String(s) : s
  );
}
function Ti(e, t, s, n, o) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? fl(s) : s);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, a = s == null ? (
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
    l === "boolean" ? s = ir(s) : s == null && l === "string" ? (s = "", r = !0) : l === "number" && (s = 0, r = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  r && e.removeAttribute(o || t);
}
function ss(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function ru(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Ai = /* @__PURE__ */ Symbol("_vei");
function lu(e, t, s, n, o = null) {
  const i = e[Ai] || (e[Ai] = {}), r = i[t];
  if (n && r)
    r.value = n;
  else {
    const [l, a] = uu(t);
    if (n) {
      const c = i[t] = hu(
        n,
        o
      );
      ss(e, l, c, a);
    } else r && (ru(e, l, r, a), i[t] = void 0);
  }
}
const au = /(Once|Passive|Capture)$/, cu = /^on:?(?:Once|Passive|Capture)$/;
function uu(e) {
  let t, s;
  for (; (s = e.match(au)) && !cu.test(e); )
    t || (t = {}), e = e.slice(0, e.length - s[1].length), t[s[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Ft(e.slice(2)), t];
}
let Qn = 0;
const fu = /* @__PURE__ */ Promise.resolve(), du = () => Qn || (fu.then(() => Qn = 0), Qn = Date.now());
function hu(e, t) {
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
      const r = o.slice(), l = [n];
      for (let a = 0; a < r.length && !n._stopped; a++) {
        const c = r[a];
        c && Je(
          c,
          t,
          5,
          l
        );
      }
    } else
      Je(
        o,
        t,
        5,
        [n]
      );
  };
  return s.value = e, s.attached = du(), s;
}
const ki = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, pu = (e, t, s, n, o, i) => {
  const r = o === "svg";
  t === "class" ? eu(e, n, r) : t === "style" ? nu(e, s, n) : An(t) ? kn(t) || lu(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : gu(e, t, n, r)) ? (Ti(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ci(e, t, n, r, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (mu(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Se(n))) ? Ti(e, Xe(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Ci(e, t, n, r));
};
function gu(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ki(t) && ie(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return ki(t) && Se(s) ? !1 : t in e;
}
function mu(e, t) {
  const s = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!s)
    return !1;
  const n = Xe(t);
  return Array.isArray(s) ? s.some((o) => Xe(o) === n) : Object.keys(s).some((o) => Xe(o) === n);
}
const Ii = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return te(t) ? (s) => tn(t, s) : t;
};
function yu(e) {
  e.target.composing = !0;
}
function Mi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const eo = /* @__PURE__ */ Symbol("_assign");
function Ei(e, t, s) {
  return t && (e = e.trim()), s && (e = ko(e)), e;
}
const vo = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, o) {
    e[eo] = Ii(o);
    const i = n || o.props && o.props.type === "number";
    ss(e, t ? "change" : "input", (r) => {
      r.target.composing || e[eo](Ei(e.value, s, i));
    }), (s || i) && ss(e, "change", () => {
      e.value = Ei(e.value, s, i);
    }), t || (ss(e, "compositionstart", yu), ss(e, "compositionend", Mi), ss(e, "change", Mi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: s, modifiers: { lazy: n, trim: o, number: i } }, r) {
    if (e[eo] = Ii(r), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? ko(e.value) : e.value, a = t ?? "";
    if (l === a)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (n && t === s || o && e.value.trim() === a) || (e.value = a);
  }
}, vu = ["ctrl", "shift", "alt", "meta"], _u = {
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
  exact: (e, t) => vu.some((s) => e[`${s}Key`] && !t.includes(s))
}, $t = (e, t) => {
  if (!e) return e;
  const s = e._withMods || (e._withMods = {}), n = t.join(".");
  return s[n] || (s[n] = (o, ...i) => {
    for (let r = 0; r < t.length; r++) {
      const l = _u[t[r]];
      if (l && l(o, t)) return;
    }
    return e(o, ...i);
  });
}, bu = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, wu = (e, t) => {
  const s = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return s[n] || (s[n] = (o) => {
    if (!("key" in o))
      return;
    const i = Ft(o.key);
    if (t.some(
      (r) => r === i || bu[r] === i
    ))
      return e(o);
  });
}, xu = /* @__PURE__ */ Ee({ patchProp: pu }, Kc);
let Pi;
function Su() {
  return Pi || (Pi = Tc(xu));
}
const pl = (...e) => {
  const t = Su().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const o = Tu(n);
    if (!o) return;
    const i = t._component;
    !ie(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const r = s(o, !1, Cu(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), r;
  }, t;
};
function Cu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Tu(e) {
  return Se(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let gl;
const Bn = (e) => gl = e, ml = (
  /* istanbul ignore next */
  Symbol()
);
function _o(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var ks;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(ks || (ks = {}));
function Au() {
  const e = cr(!0), t = e.run(() => /* @__PURE__ */ de({}));
  let s = [], n = [];
  const o = $o({
    install(i) {
      Bn(o), o._a = i, i.provide(ml, o), i.config.globalProperties.$pinia = o, n.forEach((r) => s.push(r)), n = [];
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
const yl = () => {
};
function Ri(e, t, s, n = yl) {
  e.push(t);
  const o = () => {
    const i = e.indexOf(t);
    i > -1 && (e.splice(i, 1), n());
  };
  return !s && ur() && na(o), o;
}
function Zt(e, ...t) {
  e.slice().forEach((s) => {
    s(...t);
  });
}
const ku = (e) => e(), Li = Symbol(), to = Symbol();
function bo(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((s, n) => e.set(n, s)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const s in t) {
    if (!t.hasOwnProperty(s))
      continue;
    const n = t[s], o = e[s];
    _o(o) && _o(n) && e.hasOwnProperty(s) && !/* @__PURE__ */ Te(n) && !/* @__PURE__ */ Ct(n) ? e[s] = bo(o, n) : e[s] = n;
  }
  return e;
}
const Iu = (
  /* istanbul ignore next */
  Symbol()
);
function Mu(e) {
  return !_o(e) || !e.hasOwnProperty(Iu);
}
const { assign: Lt } = Object;
function Eu(e) {
  return !!(/* @__PURE__ */ Te(e) && e.effect);
}
function Pu(e, t, s, n) {
  const { state: o, actions: i, getters: r } = t, l = s.state.value[e];
  let a;
  function c() {
    l || (s.state.value[e] = o ? o() : {});
    const u = /* @__PURE__ */ Aa(s.state.value[e]);
    return Lt(u, i, Object.keys(r || {}).reduce((p, _) => (p[_] = $o(Pe(() => {
      Bn(s);
      const y = s._s.get(e);
      return r[_].call(y, y);
    })), p), {}));
  }
  return a = vl(e, c, t, s, n, !0), a;
}
function vl(e, t, s = {}, n, o, i) {
  let r;
  const l = Lt({ actions: {} }, s), a = { deep: !0 };
  let c, u, p = [], _ = [], y;
  const k = n.state.value[e];
  !i && !k && (n.state.value[e] = {});
  let b;
  function H(z) {
    let L;
    c = u = !1, typeof z == "function" ? (z(n.state.value[e]), L = {
      type: ks.patchFunction,
      storeId: e,
      events: y
    }) : (bo(n.state.value[e], z), L = {
      type: ks.patchObject,
      payload: z,
      storeId: e,
      events: y
    });
    const G = b = Symbol();
    Le().then(() => {
      b === G && (c = !0);
    }), u = !0, Zt(p, L, n.state.value[e]);
  }
  const F = i ? function() {
    const { state: L } = s, G = L ? L() : {};
    this.$patch((X) => {
      Lt(X, G);
    });
  } : (
    /* istanbul ignore next */
    yl
  );
  function B() {
    r.stop(), p = [], _ = [], n._s.delete(e);
  }
  const J = (z, L = "") => {
    if (Li in z)
      return z[to] = L, z;
    const G = function() {
      Bn(n);
      const X = Array.from(arguments), S = [], C = [];
      function w(I) {
        S.push(I);
      }
      function T(I) {
        C.push(I);
      }
      Zt(_, {
        args: X,
        name: G[to],
        store: q,
        after: w,
        onError: T
      });
      let x;
      try {
        x = z.apply(this && this.$id === e ? this : q, X);
      } catch (I) {
        throw Zt(C, I), I;
      }
      return x instanceof Promise ? x.then((I) => (Zt(S, I), I)).catch((I) => (Zt(C, I), Promise.reject(I))) : (Zt(S, x), x);
    };
    return G[Li] = !0, G[to] = L, G;
  }, j = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: Ri.bind(null, _),
    $patch: H,
    $reset: F,
    $subscribe(z, L = {}) {
      const G = Ri(p, z, L.detached, () => X()), X = r.run(() => Be(() => n.state.value[e], (S) => {
        (L.flush === "sync" ? u : c) && z({
          storeId: e,
          type: ks.direct,
          events: y
        }, S);
      }, Lt({}, a, L)));
      return G;
    },
    $dispose: B
  }, q = /* @__PURE__ */ Rn(j);
  n._s.set(e, q);
  const Y = (n._a && n._a.runWithContext || ku)(() => n._e.run(() => (r = cr()).run(() => t({ action: J }))));
  for (const z in Y) {
    const L = Y[z];
    if (/* @__PURE__ */ Te(L) && !Eu(L) || /* @__PURE__ */ Ct(L))
      i || (k && Mu(L) && (/* @__PURE__ */ Te(L) ? L.value = k[z] : bo(L, k[z])), n.state.value[e][z] = L);
    else if (typeof L == "function") {
      const G = J(L, z);
      Y[z] = G, l.actions[z] = L;
    }
  }
  return Lt(q, Y), Lt(/* @__PURE__ */ ce(q), Y), Object.defineProperty(q, "$state", {
    get: () => n.state.value[e],
    set: (z) => {
      H((L) => {
        Lt(L, z);
      });
    }
  }), n._p.forEach((z) => {
    Lt(q, r.run(() => z({
      store: q,
      app: n._a,
      pinia: n,
      options: l
    })));
  }), k && i && s.hydrate && s.hydrate(q.$state, k), c = !0, u = !0, q;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Vn(e, t, s) {
  let n, o;
  const i = typeof t == "function";
  typeof e == "string" ? (n = e, o = i ? s : t) : (o = e, n = e.id);
  function r(l, a) {
    const c = Na();
    return l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    l || (c ? xs(ml, null) : null), l && Bn(l), l = gl, l._s.has(n) || (i ? vl(n, t, o, l) : Pu(n, o, l)), l._s.get(n);
  }
  return r.$id = n, r;
}
function Ru() {
  return [
    { id: "netease", enabled: !0, priority: 0, config: { baseURL: "" } },
    { id: "local", enabled: !1, priority: 1, config: {} },
    { id: "custom", enabled: !1, priority: 2, config: { searchURL: "", resolveURL: "" } }
  ];
}
function so() {
  return {
    volume: 65,
    playMode: "list",
    position: null,
    widgetMode: "dock",
    dockAlign: "bottom-left",
    showDragMiniText: !0,
    providers: Ru(),
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
    togetherCustomPrompt: ""
  };
}
const fe = /* @__PURE__ */ Vn("settings", {
  state: () => ({
    settings: so(),
    storage: null
  }),
  getters: {
    defaults: () => so()
  },
  actions: {
    init(e) {
      this.storage = e;
      const t = e.getSettings(), s = so();
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
    save() {
      this.storage && this.storage.setSettings(this.settings);
    }
  }
});
class Lu {
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
    const o = s;
    return n.add(o), this.audio.addEventListener(t, o), () => {
      this.audio.removeEventListener(t, o), n.delete(o);
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
const Oi = /\[(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?\]/g;
function Ou(e) {
  const t = e.split(/\r?\n/), s = [];
  for (const n of t) {
    const o = new RegExp(Oi.source, "g"), i = [];
    let r;
    for (; (r = o.exec(n)) !== null; ) {
      const a = parseInt(r[1], 10), c = parseInt(r[2], 10), u = r[3] ?? "", p = u ? parseInt(u.padEnd(3, "0"), 10) : 0;
      i.push(a * 60 + c + p / 1e3);
    }
    if (i.length === 0) continue;
    const l = n.replace(new RegExp(Oi.source, "g"), "").trim();
    if (l !== "")
      for (const a of i)
        s.push({ time: a, text: l });
  }
  s.sort((n, o) => n.time - o.time);
  for (let n = 0; n < s.length; n++)
    n < s.length - 1 && (s[n].next = s[n + 1]);
  return s;
}
function $u(e, t) {
  if (e.length === 0) return null;
  let s = null;
  for (const n of e)
    if (n.time <= t)
      s = n;
    else
      break;
  return s;
}
class Du {
  hasST() {
    return typeof SillyTavern < "u" && typeof SillyTavern.getContext == "function";
  }
  ctx() {
    return SillyTavern.getContext();
  }
  // ===== extensionSettings =====
  getSettings() {
    if (this.hasST())
      return this.ctx().extensionSettings[wt] ?? null;
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
      s.extensionSettings[wt] = t, s.saveSettingsDebounced();
      return;
    }
    localStorage.setItem(this.settingsKey(), JSON.stringify(t));
  }
  // ===== playlist data (separate key in extensionSettings) =====
  getPlaylistData() {
    if (this.hasST())
      return this.ctx().extensionSettings[`${wt}-playlist`] ?? null;
    const t = localStorage.getItem(this.playlistKey());
    if (t === null) return null;
    try {
      return JSON.parse(t);
    } catch {
      return null;
    }
  }
  setPlaylistData(t) {
    if (this.hasST()) {
      const s = this.ctx();
      s.extensionSettings[`${wt}-playlist`] = t, s.saveSettingsDebounced();
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
    return `${wt}__settings`;
  }
  playlistKey() {
    return `${wt}__playlist`;
  }
}
function Nu() {
  return new Du();
}
const wt = "st-little-player", wo = "stmp_cursor", Vo = "stmp_bgm_history";
class Fu {
  constructor(t) {
    this.providers = t;
  }
  async searchAll(t) {
    const s = await Promise.allSettled(
      this.providers.map((i) => i.search(t))
    ), n = [], o = /* @__PURE__ */ new Map();
    return s.forEach((i) => {
      if (i.status === "fulfilled")
        for (const r of i.value) {
          const l = `${r.name}__${r.artist}`;
          o.get(l) === void 0 && (o.set(l, n.length), n.push(r));
        }
    }), n;
  }
  async resolve(t, s, n) {
    const o = this.getProvider(s);
    return o ? new Promise((i) => {
      const r = setTimeout(() => i(null), 15e3);
      o.resolve(t, n).then((l) => {
        clearTimeout(r), i(l);
      }).catch(() => {
        clearTimeout(r), i(null);
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
        } catch {
        }
    return null;
  }
  getProvider(t) {
    return this.providers.find((s) => s.id === t);
  }
}
class Uu {
  constructor(t) {
    this.id = "netease", this.name = "网易云", this.apiBase = t?.apiBase?.trim() || "https://jgauby2m0k6n.erocraft.com", this.urlBase = t?.baseURL?.trim() || "https://music-api.gdstudio.xyz/api.php";
  }
  async fetchJson(t, s = 5e3) {
    try {
      const n = new AbortController(), o = setTimeout(() => n.abort(), s), i = await fetch(t, { signal: n.signal });
      return clearTimeout(o), i.ok ? await i.json() : null;
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
      const o = new Audio();
      let i = !1;
      const r = () => {
        o.removeEventListener("loadedmetadata", l), o.removeEventListener("error", a), clearTimeout(c), o.src = "";
      }, l = () => {
        i || (i = !0, r(), n(!0));
      }, a = () => {
        i || (i = !0, r(), n(!1));
      }, c = setTimeout(() => {
        i || (i = !0, r(), n(!1));
      }, s);
      o.preload = "metadata", o.addEventListener("loadedmetadata", l), o.addEventListener("error", a), o.src = t;
    });
  }
  async search(t) {
    const n = (await this.fetchJson(
      `${this.apiBase}/search?s=${encodeURIComponent(t)}&type=1&offset=0&limit=20`
    ))?.result?.songs;
    return Array.isArray(n) ? n.map((o) => ({
      id: String(o.id ?? ""),
      name: String(o.name ?? ""),
      artist: Array.isArray(o.artists) ? o.artists.map((i) => i.name).join(", ") : String(o.artists?.[0]?.name ?? ""),
      duration: o.duration ? Math.floor(o.duration / 1e3) : void 0,
      provider: this.id,
      picId: o.album?.picId ? String(o.album.picId) : void 0
    })) : [];
  }
  async resolve(t, s) {
    const n = await this.fetchJson(
      `${this.urlBase}?types=url&id=${encodeURIComponent(t)}`
    );
    if (!n || !n.url) return null;
    const [o, i] = await Promise.all([
      this.fetchJson(
        `${this.apiBase}/lyric?os=pc&id=${encodeURIComponent(t)}&lv=-1&kv=-1&tv=-1`
      ),
      this.fetchJson(
        `${this.apiBase}/detail?ids=%5B${encodeURIComponent(t)}%5D`
      )
    ]), r = i?.songs?.[0];
    return {
      url: String(n.url),
      lyric: o?.lrc?.lyric ? String(o.lrc.lyric) : void 0,
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
    const n = s ? `${t} ${s}` : t, o = await this.search(n);
    if (o.length === 0) return null;
    for (const i of o) {
      const r = await this.resolve(i.id, i.picId);
      if (!r) continue;
      if (!await this.probeAudio(r.url)) {
        console.warn(`[NetEase] audio probe failed for id=${i.id}, trying next`);
        continue;
      }
      return r.name = i.name, r.artist = i.artist, r;
    }
    return console.warn(`[NetEase] searchAndResolve: no playable result for "${n}"`), null;
  }
}
class Bu {
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
class Vu {
  constructor(t) {
    this.id = "custom", this.name = "自定义 API", this.searchURL = t?.searchURL, this.resolveURL = t?.resolveURL;
  }
  async fetchJson(t, s = 1e4) {
    try {
      const n = new AbortController(), o = setTimeout(() => n.abort(), s), i = await fetch(t, { signal: n.signal });
      return clearTimeout(o), i.ok ? await i.json() : null;
    } catch {
      return null;
    }
  }
  async search(t) {
    if (!this.searchURL) return [];
    const s = this.searchURL.replace("{keyword}", encodeURIComponent(t)), n = await this.fetchJson(s);
    return Array.isArray(n) ? n.map((o) => ({
      id: String(o.id ?? ""),
      name: String(o.name ?? ""),
      artist: String(o.artist ?? ""),
      duration: o.duration ? Number(o.duration) : void 0,
      provider: this.id
    })) : [];
  }
  async resolve(t, s) {
    if (!this.resolveURL) return null;
    const n = this.resolveURL.replace("{id}", encodeURIComponent(t)), o = await this.fetchJson(n);
    return !o || !o.url ? null : {
      url: String(o.url),
      lyric: o.lyric ? String(o.lyric) : void 0,
      cover: o.cover ? String(o.cover) : void 0,
      name: String(o.name ?? ""),
      artist: String(o.artist ?? ""),
      source: this.id
    };
  }
}
function At(e) {
  const s = e.filter((n) => n.enabled).sort((n, o) => n.priority - o.priority).map((n) => {
    const o = n.config ?? {};
    switch (n.id) {
      case "netease":
        return new Uu({ baseURL: o.baseURL, apiBase: o.apiBase });
      case "local":
        return new Bu({
          storage: o.storage ? o.storage : void 0
        });
      case "custom":
        return new Vu({
          searchURL: o.searchURL,
          resolveURL: o.resolveURL
        });
      default:
        return null;
    }
  }).filter((n) => n !== null);
  return new Fu(s);
}
const ju = {
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
  "Custom opacity": "自定义透明度",
  Opacity: "透明度",
  "Adjust the player background opacity": "调整播放器背景透明度",
  "Not available in inline mode": "集成模式下不可用",
  "Enable or disable music sources": "启用或禁用音乐来源",
  Data: "数据管理",
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
  "Data exported": "数据已导出",
  "Data imported": "数据已导入",
  "Import failed": "导入失败",
  "Invalid JSON": "JSON 格式错误",
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
  "AI selected:": "AI 已选择:",
  "AI recommendation failed": "AI 推荐失败",
  "No song selected by AI": "AI 未选择歌曲",
  "Fetch models": "获取模型列表",
  "Please fill API URL": "请先填写 API 地址",
  Connect: "连接",
  "No models returned by endpoint": "端点未返回任何模型",
  "models found": "个模型",
  "Failed to fetch models": "获取模型列表失败",
  "Custom Prompt": "自定义提示词",
  "Edit the BGM instruction prompt. Use macros like ": "编辑 BGM 指令提示词。可使用 ",
  " for dynamic values.": " 等变量插入动态值。",
  "Edit Prompt": "编辑提示词",
  "Click to edit the BGM instruction prompt": "点击编辑 BGM 指令提示词",
  "Available macros:": "可用变量：",
  "The prompt must contain the markers": "提示词必须包含标记",
  "for BGM control to work.": "才能生效。",
  Save: "保存",
  Volume: "音量",
  "Volume must be 0-100": "音量范围 0-100"
};
let Qt = null;
function Hu() {
  if (Qt) return Qt;
  try {
    if (typeof SillyTavern < "u") {
      const e = SillyTavern.getContext();
      e?.getCurrentLocale && (Qt = e.getCurrentLocale());
    }
  } catch {
  }
  return Qt || (Qt = (typeof navigator < "u" ? navigator.language || navigator.userLanguage : "en")?.toLowerCase() || "en"), Qt;
}
function m(e) {
  return Hu().startsWith("zh") ? ju[e] ?? e : e;
}
function _l() {
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
function Gu(e) {
  return new Promise((t, s) => {
    const n = new FileReader();
    n.onload = () => {
      const o = n.result, i = o.indexOf(",");
      t(i >= 0 ? o.slice(i + 1) : o);
    }, n.onerror = () => s(n.error), n.readAsDataURL(e);
  });
}
function Wu(e) {
  const t = e.lastIndexOf("."), s = t > 0 ? e.slice(0, t) : e, n = t > 0 ? e.slice(t) : "";
  return `${s.replace(/[^a-zA-Z0-9_\-.]/g, "_")}${n}`;
}
async function Ku(e) {
  const t = await Gu(e), s = Wu(e.name), n = await fetch("/api/files/upload", {
    method: "POST",
    headers: _l(),
    body: JSON.stringify({ name: s, data: t })
  });
  if (!n.ok)
    throw new Error(`Upload failed: ${n.status} ${n.statusText}`);
  return (await n.json()).path;
}
async function bl(e) {
  const t = await fetch("/api/files/delete", {
    method: "POST",
    headers: _l(),
    body: JSON.stringify({ path: e })
  });
  t.ok || console.warn(`[stmp] deleteFile failed: ${t.status}`);
}
function qs() {
  return `stmp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
const ht = /* @__PURE__ */ Vn("playlist", {
  state: () => ({
    networkList: [],
    serverList: [],
    chatList: [],
    activeTab: "network",
    currentList: "network",
    currentIndex: -1,
    chatIndexer: null,
    chatId: null
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
      return fe().settings.playMode;
    },
    activeList(e) {
      return e[`${e.activeTab}List`];
    },
    playingList(e) {
      return e[`${e.currentList}List`];
    }
  },
  actions: {
    init(e) {
      this.chatIndexer = e, this.loadFromStorage();
    },
    setChatId(e) {
      this.chatId = e, this.chatList = [];
      const s = fe().storage;
      if (s) {
        const n = s.getMetadata(wo);
        n && n.chatId === e && this.chatIndexer?.setCursor(e, n.lastScannedMessageId);
      }
    },
    loadFromStorage() {
      const t = fe().storage;
      if (!t) return;
      const s = t.getPlaylistData();
      s && (this.networkList = Array.isArray(s.network) ? s.network : [], this.serverList = Array.isArray(s.server) ? s.server : []);
    },
    savePlaylistData() {
      const t = fe().storage;
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
      (e === "network" || e === "server") && this.savePlaylistData(), e === "server" && n?.serverPath && bl(n.serverPath), e === this.currentList && t === this.currentIndex ? this.currentIndex = -1 : e === this.currentList && t < this.currentIndex && this.currentIndex--;
    },
    addFromCue(e, t) {
      const s = {
        id: qs(),
        song: e.song,
        artist: e.artist,
        source: "chat",
        messageId: t,
        addedAt: Date.now()
      };
      this.chatList.push(s);
    },
    addFromSearch(e, t = !0) {
      const s = this.networkList.findIndex(
        (o) => o.providerId === e.provider && o.providerTrackId === e.id
      );
      if (this.activeTab = "network", s >= 0)
        return t && (this.currentList = "network", this.play("network", s)), !1;
      const n = {
        id: qs(),
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
    async addServerFile(e, t) {
      const s = await Ku(t), n = {
        id: qs(),
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
      const i = At(fe().settings.providers);
      if (n.source === "server" && n.serverPath && (o = {
        url: n.serverPath,
        name: n.song,
        artist: n.artist ?? "",
        source: "server"
      }), !o && n.song && (o = await i.searchAndResolve(n.song, n.artist), o && (n.providerId = o.source)), !o) {
        console.warn(`[playlist] resolve failed for "${n.song}"`), typeof toastr < "u" && toastr.warning(`${m("Cannot play")}: ${n.song}`);
        return;
      }
      await xe().loadAndPlay(o);
    },
    handleNewCues(e) {
      if (e.length === 0) return;
      let t = null;
      for (const s of e)
        for (const n of s.cues) {
          console.log("[晓乐] cue found:", n.song, n.artist ?? "", "from message", s.messageId);
          const o = {
            id: qs(),
            song: n.song,
            artist: n.artist,
            source: "chat",
            messageId: s.messageId,
            addedAt: Date.now()
          };
          this.chatList.push(o), t = o;
        }
      if (t) {
        const s = this.chatList.indexOf(t);
        s >= 0 && (this.currentList = "chat", this.activeTab = "chat", this.play("chat", s));
      }
    },
    handleMessageUpdate(e) {
      if (!this.chatIndexer || !this.chatId) return;
      const t = this.chatIndexer.scanMessage(
        this.chatId,
        e
      ), s = this.chatList.map((i, r) => i.messageId === e ? r : -1).filter((i) => i >= 0);
      if (s.length === 0) {
        t.cue && this.addFromCue(t.cue, e);
        return;
      }
      if (!t.cue) {
        for (const i of [...s].reverse())
          this.chatList.splice(i, 1);
        if (this.currentList === "chat")
          for (const i of [...s].reverse())
            i === this.currentIndex ? this.currentIndex = -1 : i < this.currentIndex && this.currentIndex--;
        return;
      }
      const n = s[0], o = this.chatList[n];
      o.song = t.cue.song, o.artist = t.cue.artist;
      for (const i of [...s].reverse())
        i !== n && this.chatList.splice(i, 1);
      if (this.currentList === "chat") {
        const i = s.filter((r) => r !== n && r < this.currentIndex).length;
        this.currentIndex -= i, this.currentIndex < 0 && (this.currentIndex = -1);
      }
    },
    handleMessageDelete(e) {
      const t = this.chatList.map((s, n) => s.messageId === e ? n : -1).filter((s) => s >= 0);
      for (const s of [...t].reverse())
        this.chatList.splice(s, 1);
      if (this.currentList === "chat")
        for (const s of [...t].reverse())
          s === this.currentIndex ? this.currentIndex = -1 : s < this.currentIndex && this.currentIndex--;
    },
    getCursor() {
      return !this.chatIndexer || !this.chatId ? -1 : this.chatIndexer.getCursor(this.chatId);
    },
    setCursor(e) {
      if (!this.chatIndexer || !this.chatId) return;
      this.chatIndexer.setCursor(this.chatId, e);
      const s = fe().storage;
      s && s.setMetadata(wo, {
        chatId: this.chatId,
        lastScannedMessageId: e,
        updatedAt: Date.now()
      });
    },
    setActiveTab(e) {
      this.activeTab = e;
    }
  }
}), xe = /* @__PURE__ */ Vn("player", {
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
      const e = new Lu();
      this.audioEngine = e;
      const t = xe();
      e.on("timeupdate", () => {
        if (!e) return;
        t.currentTime = e.currentTime, t.duration = e.duration;
        const s = $u(t.lyrics, e.currentTime), n = s ? t.lyrics.indexOf(s) : -1;
        t.currentLyricIndex = n;
      }), e.on("ended", () => {
        ht().next();
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
      this.volume = e, this.audioEngine?.setVolume(e / 100);
    },
    updateLyrics(e) {
      this.lyrics = Ou(e), this.currentLyricIndex = -1;
    },
    destroy() {
      this.audioEngine?.destroy(), this.audioEngine = null, this.isPlaying = !1, this.currentTime = 0, this.duration = 0, this.lyrics = [], this.currentLyricIndex = -1, this.currentTrack = null;
    }
  }
}), zu = /* @__PURE__ */ Vn("search", {
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
});
function wl() {
  const e = /* @__PURE__ */ de(0), t = /* @__PURE__ */ de([]), s = /* @__PURE__ */ de(null);
  function n(r, l) {
    r && (t.value[l] = r);
  }
  async function o() {
    await Le();
    const l = xe().currentLyricIndex, a = s.value;
    if (!a || l < 0) {
      e.value = 0;
      return;
    }
    const c = t.value[l];
    if (!c) return;
    const u = c.offsetTop, p = c.offsetHeight, _ = a.clientHeight;
    e.value = u - _ / 2 + p / 2;
  }
  const i = xe();
  return Be(() => i.currentLyricIndex, o), Be(() => i.lyrics, () => {
    t.value = [], o();
  }), { scrollY: e, windowRef: s, setLineRef: n };
}
const Yu = ["width", "height"], Ju = {
  key: 0,
  points: "6 3 20 12 6 21 6 3",
  fill: "currentColor",
  stroke: "none"
}, qu = {
  key: 10,
  points: "6 9 12 15 18 9"
}, Xu = {
  key: 11,
  points: "18 15 12 9 6 15"
}, Zu = {
  key: 15,
  points: "20 6 9 17 4 12"
}, Qu = /* @__PURE__ */ kt({
  __name: "Icon",
  props: {
    name: {},
    size: {}
  },
  setup(e) {
    return (t, s) => (E(), D("svg", {
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
      e.name === "play" ? (E(), D("polygon", Ju)) : e.name === "pause" ? (E(), D(oe, { key: 1 }, [
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
      ], 64)) : e.name === "prev" ? (E(), D(oe, { key: 2 }, [
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
      ], 64)) : e.name === "next" ? (E(), D(oe, { key: 3 }, [
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
      ], 64)) : e.name === "repeat" ? (E(), D(oe, { key: 4 }, [
        s[6] || (s[6] = f("polyline", { points: "17 1 21 5 17 9" }, null, -1)),
        s[7] || (s[7] = f("path", { d: "M3 11V9a4 4 0 0 1 4-4h14" }, null, -1)),
        s[8] || (s[8] = f("polyline", { points: "7 23 3 19 7 15" }, null, -1)),
        s[9] || (s[9] = f("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" }, null, -1))
      ], 64)) : e.name === "repeat-one" ? (E(), D(oe, { key: 5 }, [
        s[10] || (s[10] = Ys('<polyline points="17 1 21 5 17 9" data-v-6d96ffa0></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14" data-v-6d96ffa0></path><polyline points="7 23 3 19 7 15" data-v-6d96ffa0></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3" data-v-6d96ffa0></path><text x="12" y="14" text-anchor="middle" font-size="8" fill="currentColor" stroke="none" font-weight="bold" data-v-6d96ffa0>1</text>', 5))
      ], 64)) : e.name === "shuffle" ? (E(), D(oe, { key: 6 }, [
        s[11] || (s[11] = Ys('<polyline points="16 3 21 3 21 8" data-v-6d96ffa0></polyline><line x1="4" y1="20" x2="21" y2="3" data-v-6d96ffa0></line><polyline points="21 16 21 21 16 21" data-v-6d96ffa0></polyline><line x1="15" y1="15" x2="21" y2="21" data-v-6d96ffa0></line><line x1="4" y1="4" x2="9" y2="9" data-v-6d96ffa0></line>', 5))
      ], 64)) : e.name === "search" ? (E(), D(oe, { key: 7 }, [
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
      ], 64)) : e.name === "plus" ? (E(), D(oe, { key: 8 }, [
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
      ], 64)) : e.name === "x" ? (E(), D(oe, { key: 9 }, [
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
      ], 64)) : e.name === "chevron-down" ? (E(), D("polyline", qu)) : e.name === "chevron-up" ? (E(), D("polyline", Xu)) : e.name === "music" ? (E(), D(oe, { key: 12 }, [
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
      ], 64)) : e.name === "volume" ? (E(), D(oe, { key: 13 }, [
        s[21] || (s[21] = f("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[22] || (s[22] = f("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1)),
        s[23] || (s[23] = f("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }, null, -1))
      ], 64)) : e.name === "volume-mute" ? (E(), D(oe, { key: 14 }, [
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
      ], 64)) : e.name === "check" ? (E(), D("polyline", Zu)) : e.name === "loader" ? (E(), D(oe, { key: 16 }, [
        s[27] || (s[27] = Ys('<line x1="12" y1="2" x2="12" y2="6" data-v-6d96ffa0></line><line x1="12" y1="18" x2="12" y2="22" data-v-6d96ffa0></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" data-v-6d96ffa0></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" data-v-6d96ffa0></line><line x1="2" y1="12" x2="6" y2="12" data-v-6d96ffa0></line><line x1="18" y1="12" x2="22" y2="12" data-v-6d96ffa0></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" data-v-6d96ffa0></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" data-v-6d96ffa0></line>', 8))
      ], 64)) : e.name === "list" ? (E(), D(oe, { key: 17 }, [
        s[28] || (s[28] = Ys('<line x1="8" y1="6" x2="21" y2="6" data-v-6d96ffa0></line><line x1="8" y1="12" x2="21" y2="12" data-v-6d96ffa0></line><line x1="8" y1="18" x2="21" y2="18" data-v-6d96ffa0></line><circle cx="3.5" cy="6" r="1.5" fill="currentColor" stroke="none" data-v-6d96ffa0></circle><circle cx="3.5" cy="12" r="1.5" fill="currentColor" stroke="none" data-v-6d96ffa0></circle><circle cx="3.5" cy="18" r="1.5" fill="currentColor" stroke="none" data-v-6d96ffa0></circle>', 6))
      ], 64)) : _e("", !0)
    ], 8, Yu));
  }
}), Mt = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, o] of t)
    s[n] = o;
  return s;
}, ke = /* @__PURE__ */ Mt(Qu, [["__scopeId", "data-v-6d96ffa0"]]), ef = { class: "stmp-mini-side stmp-mini-side-left" }, tf = {
  key: 0,
  class: "stmp-mini-cover"
}, sf = ["src"], nf = {
  key: 1,
  class: "stmp-mini-cover stmp-mini-cover-placeholder"
}, of = {
  key: 1,
  class: "stmp-mini-text stmp-mini-dock-fallback"
}, rf = { class: "stmp-mini-side stmp-mini-side-right" }, lf = { class: "stmp-mini-controls" }, af = ["aria-label"], cf = ["aria-label"], uf = {
  key: 1,
  class: "stmp-mini stmp-mini-drag stmp-mini-drag-idle"
}, ff = { class: "stmp-mini-cover stmp-mini-cover-square" }, df = ["src"], hf = {
  key: 2,
  class: "stmp-mini stmp-mini-drag"
}, pf = ["aria-label"], gf = ["src"], mf = { class: "stmp-mini-cover-overlay" }, yf = { class: "stmp-mini-drag-right" }, vf = { class: "stmp-mini-title-copy" }, _f = {
  class: "stmp-mini-title-copy",
  "aria-hidden": "true"
}, bf = {
  key: 0,
  class: "stmp-mini-lyric-segment"
}, wf = /* @__PURE__ */ kt({
  __name: "CollapsedBar",
  props: {
    isDock: { type: Boolean },
    isMobile: { type: Boolean }
  },
  setup(e) {
    const t = xe(), s = ht(), n = fe(), o = e, i = /* @__PURE__ */ de(!1), r = Pe(() => t.currentTrack?.cover || ""), l = Pe(() => !!t.currentTrack), a = Pe(() => n.settings.showDragMiniText), c = Pe(() => {
      const G = t.currentTrack;
      if (!G) return "";
      const X = G.name, S = G.artist || "";
      return S ? `${X} - ${S}` : X;
    }), { scrollY: u, windowRef: p, setLineRef: _ } = wl(), y = /* @__PURE__ */ de(null), k = /* @__PURE__ */ de(null), b = /* @__PURE__ */ de([]), H = /* @__PURE__ */ de(0), F = /* @__PURE__ */ de(0);
    function B(G, X) {
      G && (b.value[X] = G);
    }
    function J() {
      const G = y.value, X = t.currentLyricIndex;
      if (!G || X < 0 || X >= b.value.length) {
        F.value = 0, H.value = 0;
        return;
      }
      const S = b.value[X];
      if (!S) return;
      const C = G.clientWidth, w = S.offsetLeft, T = S.offsetWidth, x = t.lyrics[X], I = x?.next ? Math.max(500, (x.next.time - x.time) * 1e3) : 5e3;
      if (T <= C)
        F.value = Math.min(400, I), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            H.value = -w;
          });
        });
      else {
        const R = -(w + T - C), Z = Math.min(600, I * 0.2);
        F.value = Z, requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            H.value = -w;
          });
        }), setTimeout(() => {
          F.value = I - Z, requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              H.value = R;
            });
          });
        }, Z);
      }
    }
    Be(() => t.currentLyricIndex, J), Be(() => t.lyrics, () => {
      b.value = [], F.value = 0, H.value = 0, Le(() => J());
    });
    const j = /* @__PURE__ */ de(null), q = /* @__PURE__ */ de(!1);
    function le() {
      const G = j.value;
      if (!G) {
        q.value = !1;
        return;
      }
      const X = G.querySelector(".stmp-mini-title-copy");
      if (!X) {
        q.value = !1;
        return;
      }
      const S = X.offsetWidth - 30;
      q.value = S > G.clientWidth;
    }
    Be(c, () => {
      Le(() => le());
    });
    function Y() {
      i.value = !0;
    }
    Be(() => t.currentTrack?.url, () => {
      i.value = !1;
    });
    function z(G) {
      G.stopPropagation(), t.togglePlay();
    }
    function L(G) {
      G.stopPropagation(), s.next();
    }
    return Bs(() => {
      Le(() => {
        J(), le();
      });
    }), Vs(() => {
    }), (G, X) => o.isDock ? (E(), D("div", {
      key: 0,
      class: ue(["stmp-mini", o.isMobile ? "stmp-mini-dock-mobile" : "stmp-mini-dock-desktop"])
    }, [
      f("div", ef, [
        r.value && !i.value ? (E(), D("div", tf, [
          f("img", {
            src: r.value,
            alt: "",
            onError: Y
          }, null, 40, sf)
        ])) : (E(), D("div", nf, [
          re(ke, {
            name: "music",
            size: 14
          })
        ]))
      ]),
      f("div", {
        ref_key: "dockWindowRef",
        ref: p,
        class: "stmp-mini-dock-text"
      }, [
        g(t).lyrics.length > 0 ? (E(), D("div", {
          key: 0,
          class: "stmp-mini-dock-scroll",
          style: Dt({ transform: `translateY(-${g(u)}px)` })
        }, [
          (E(!0), D(oe, null, Ve(g(t).lyrics, (S, C) => (E(), D("span", {
            key: C,
            ref_for: !0,
            ref: (w) => g(_)(w, C),
            class: ue(["stmp-mini-dock-line", { "stmp-mini-dock-line-active": C === g(t).currentLyricIndex }])
          }, N(S.text), 3))), 128))
        ], 4)) : (E(), D("span", of, N(c.value), 1))
      ], 512),
      f("div", rf, [
        f("div", lf, [
          f("button", {
            class: "stmp-mini-btn",
            "aria-label": g(t).isPlaying ? g(m)("Pause") : g(m)("Play"),
            onClick: z
          }, [
            re(ke, {
              name: g(t).isPlaying ? "pause" : "play",
              size: o.isMobile ? 16 : 14
            }, null, 8, ["name", "size"])
          ], 8, af),
          f("button", {
            class: "stmp-mini-btn",
            "aria-label": g(m)("Next"),
            onClick: L
          }, [
            re(ke, {
              name: "next",
              size: o.isMobile ? 16 : 14
            }, null, 8, ["size"])
          ], 8, cf)
        ])
      ])
    ], 2)) : !l.value || !a.value ? (E(), D("div", uf, [
      f("div", ff, [
        r.value && !i.value ? (E(), D("img", {
          key: 0,
          src: r.value,
          alt: "",
          onError: Y
        }, null, 40, df)) : (E(), Qe(ke, {
          key: 1,
          name: "music",
          size: 20
        }))
      ])
    ])) : (E(), D("div", hf, [
      f("button", {
        class: "stmp-mini-cover stmp-mini-cover-square",
        "aria-label": g(t).isPlaying ? g(m)("Pause") : g(m)("Play"),
        onClick: z
      }, [
        r.value && !i.value ? (E(), D("img", {
          key: 0,
          src: r.value,
          alt: "",
          onError: Y
        }, null, 40, gf)) : (E(), Qe(ke, {
          key: 1,
          name: "music",
          size: 20
        })),
        f("div", mf, [
          re(ke, {
            name: g(t).isPlaying ? "pause" : "play",
            size: 18
          }, null, 8, ["name"])
        ])
      ], 8, pf),
      f("div", yf, [
        f("div", {
          ref_key: "titleContainerRef",
          ref: j,
          class: ue(["stmp-mini-title-drag", { overflowing: q.value }])
        }, [
          (E(), D("div", {
            class: "stmp-mini-title-track",
            key: c.value
          }, [
            f("span", vf, N(c.value), 1),
            f("span", _f, N(c.value), 1)
          ]))
        ], 2),
        f("div", {
          ref_key: "lyricContainerRef",
          ref: y,
          class: "stmp-mini-lyric"
        }, [
          f("div", {
            ref_key: "lyricTrackRef",
            ref: k,
            class: "stmp-mini-lyric-track",
            style: Dt({
              transform: `translateX(${H.value}px)`,
              transition: F.value > 0 ? `transform ${F.value}ms linear` : "none"
            })
          }, [
            (E(!0), D(oe, null, Ve(g(t).lyrics, (S, C) => (E(), D("span", {
              key: C,
              ref_for: !0,
              ref: (w) => B(w, C),
              class: ue(["stmp-mini-lyric-segment", { active: C === g(t).currentLyricIndex }])
            }, N(S.text) + "  ", 3))), 128)),
            g(t).lyrics.length === 0 ? (E(), D("span", bf, N(" "))) : _e("", !0)
          ], 4)
        ], 512)
      ])
    ]));
  }
}), $i = /* @__PURE__ */ Mt(wf, [["__scopeId", "data-v-0d196a3f"]]), xf = { class: "stmp-playlist" }, Sf = { class: "stmp-tabs" }, Cf = ["onClick"], Tf = {
  key: 0,
  class: "stmp-upload-area"
}, Af = ["disabled"], kf = {
  key: 1,
  class: "stmp-empty"
}, If = ["onClick"], Mf = { class: "stmp-item-index" }, Ef = { class: "stmp-item-info" }, Pf = { class: "stmp-item-song" }, Rf = {
  key: 0,
  class: "stmp-item-artist"
}, Lf = ["onClick"], Of = /* @__PURE__ */ kt({
  __name: "PlaylistView",
  setup(e) {
    const t = ht(), s = fe(), n = Pe(() => {
      const y = [
        { value: "network", label: m("Network") }
      ];
      return s.settings.providers.find((b) => b.id === "local")?.enabled && y.push({ value: "server", label: m("Upload") }), y.push({ value: "chat", label: m("Chat") }), y;
    });
    Be(n, (y) => {
      y.some((k) => k.value === t.activeTab) || t.setActiveTab("network");
    });
    const o = /* @__PURE__ */ de(null), i = /* @__PURE__ */ de(!1), r = () => {
      o.value?.click();
    }, l = async (y) => {
      const k = y.target;
      if (!k.files || !k.files[0]) return;
      const b = k.files[0];
      i.value = !0;
      try {
        await t.addServerFile(b.name, b), typeof toastr < "u" && toastr.success(m("Added"));
      } catch (H) {
        console.error("[stmp] upload failed", H), typeof toastr < "u" && toastr.error(m("Cannot play") + ": " + b.name);
      } finally {
        i.value = !1;
      }
      k.value = "";
    }, a = Pe(() => t.getListByTab(t.activeTab).map((k, b) => ({ index: b, item: k }))), c = Pe(() => a.value.length === 0);
    function u(y) {
      t.play(t.activeTab, y);
    }
    function p(y) {
      t.removeItem(t.activeTab, y);
    }
    function _(y) {
      t.setActiveTab(y);
    }
    return (y, k) => (E(), D("div", xf, [
      f("div", Sf, [
        (E(!0), D(oe, null, Ve(n.value, (b) => (E(), D("div", {
          key: b.value,
          class: ue(["stmp-tab", { active: g(t).activeTab === b.value }]),
          onClick: (H) => _(b.value)
        }, N(b.label), 11, Cf))), 128))
      ]),
      g(t).activeTab === "server" ? (E(), D("div", Tf, [
        f("input", {
          type: "file",
          accept: "audio/*",
          ref_key: "fileInputRef",
          ref: o,
          onChange: l,
          style: { display: "none" }
        }, null, 544),
        f("button", {
          class: "stmp-upload-btn",
          disabled: i.value,
          onClick: r
        }, N(i.value ? "..." : "+ " + g(m)("Upload audio file")), 9, Af)
      ])) : _e("", !0),
      c.value ? (E(), D("div", kf, N(g(m)("No Songs")), 1)) : (E(!0), D(oe, { key: 2 }, Ve(a.value, (b) => (E(), D("div", {
        key: b.item.id,
        class: ue(["stmp-item", { active: g(t).activeTab === g(t).currentList && b.index === g(t).currentIndex }]),
        onClick: (H) => u(b.index)
      }, [
        f("span", Mf, N(b.index + 1), 1),
        f("div", Ef, [
          f("span", Pf, N(b.item.song), 1),
          b.item.artist ? (E(), D("span", Rf, N(b.item.artist), 1)) : _e("", !0)
        ]),
        f("button", {
          class: "stmp-item-del",
          onClick: $t((H) => p(b.index), ["stop"])
        }, [
          re(ke, {
            name: "x",
            size: 14
          })
        ], 8, Lf)
      ], 10, If))), 128))
    ]));
  }
}), $f = /* @__PURE__ */ Mt(Of, [["__scopeId", "data-v-338ceb2a"]]), Df = { class: "stmp-search" }, Nf = { class: "stmp-search-bar" }, Ff = ["placeholder"], Uf = ["disabled"], Bf = {
  key: 0,
  class: "stmp-search-error"
}, Vf = ["aria-label"], jf = {
  key: 1,
  class: "stmp-search-loading"
}, Hf = {
  key: 2,
  class: "stmp-search-empty"
}, Gf = {
  key: 3,
  class: "stmp-search-hint"
}, Wf = {
  key: 4,
  class: "stmp-results"
}, Kf = ["onClick"], zf = { class: "stmp-result-name" }, Yf = {
  key: 0,
  class: "stmp-result-artist"
}, Jf = ["aria-label", "onClick"], qf = /* @__PURE__ */ kt({
  __name: "SearchView",
  setup(e) {
    const t = zu(), s = ht(), n = fe(), o = /* @__PURE__ */ de(t.keyword), i = /* @__PURE__ */ de(null);
    async function r() {
      t.setKeyword(o.value);
      const y = At(n.settings.providers);
      await t.search(y);
    }
    const l = () => {
      r();
    };
    function a(y) {
      return s.networkList.some(
        (k) => k.providerId === y.provider && k.providerTrackId === y.id
      );
    }
    function c(y) {
      return s.networkList.findIndex(
        (k) => k.providerId === y.provider && k.providerTrackId === y.id
      );
    }
    function u(y) {
      const k = y.provider + y.id;
      if (i.value === k) return;
      const b = c(y);
      if (b >= 0) {
        s.play("network", b), i.value = k, setTimeout(() => {
          i.value = null;
        }, 600);
        return;
      }
      i.value = k, s.addFromSearch(y), setTimeout(() => {
        i.value = null;
      }, 600);
    }
    function p(y) {
      if (a(y)) {
        const k = c(y);
        k >= 0 && s.play("network", k);
        return;
      }
      s.addFromSearch(y, !1);
    }
    function _(y) {
      return i.value === y.provider + y.id;
    }
    return (y, k) => (E(), D("div", Df, [
      f("div", Nf, [
        Wt(f("input", {
          "onUpdate:modelValue": k[0] || (k[0] = (b) => o.value = b),
          class: "stmp-search-input",
          placeholder: g(m)("Search Song..."),
          onKeydown: wu(r, ["enter"])
        }, null, 40, Ff), [
          [vo, o.value]
        ]),
        f("button", {
          class: "stmp-icon-btn",
          disabled: g(t).isSearching,
          onClick: r
        }, [
          g(t).isSearching ? (E(), Qe(ke, {
            key: 1,
            name: "loader",
            size: 16,
            class: "stmp-spin"
          })) : (E(), Qe(ke, {
            key: 0,
            name: "search",
            size: 16
          }))
        ], 8, Uf)
      ]),
      g(t).error ? (E(), D("div", Bf, [
        f("span", null, N(g(t).error), 1),
        f("button", {
          class: "stmp-retry-btn",
          "aria-label": g(m)("Retry"),
          onClick: l
        }, N(g(m)("Retry")), 9, Vf)
      ])) : _e("", !0),
      g(t).isSearching ? (E(), D("div", jf, N(g(m)("Searching...")), 1)) : o.value && !g(t).results.length ? (E(), D("div", Hf, N(g(m)("No results")), 1)) : !o.value && !g(t).results.length ? (E(), D("div", Gf, N(g(m)("Type a song name to search")), 1)) : _e("", !0),
      g(t).results.length ? (E(), D("div", Wf, [
        (E(!0), D(oe, null, Ve(g(t).results, (b) => (E(), D("div", {
          key: b.provider + b.id,
          class: ue(["stmp-result", { "stmp-result-playing": _(b) }])
        }, [
          f("div", {
            class: "stmp-result-info",
            onClick: (H) => u(b)
          }, [
            f("span", zf, N(b.name), 1),
            b.artist ? (E(), D("span", Yf, N(b.artist), 1)) : _e("", !0)
          ], 8, Kf),
          f("button", {
            class: ue(["stmp-icon-btn stmp-result-add", { added: a(b) }]),
            "aria-label": a(b) ? g(m)("Added") : g(m)("Add to list"),
            onClick: $t((H) => p(b), ["stop"])
          }, [
            re(ke, {
              name: a(b) ? "check" : "plus",
              size: 16
            }, null, 8, ["name"])
          ], 10, Jf)
        ], 2))), 128))
      ])) : _e("", !0)
    ]));
  }
}), Xf = /* @__PURE__ */ Mt(qf, [["__scopeId", "data-v-3ecc63a1"]]), Zf = { class: "stmp-panel" }, Qf = { class: "stmp-topbar stmp-drag-handle" }, ed = ["aria-label"], td = { class: "stmp-cover-large" }, sd = ["src"], nd = {
  key: 1,
  class: "stmp-cover-placeholder"
}, od = { class: "stmp-track-name" }, id = { class: "stmp-track-artist" }, rd = { class: "stmp-lyric-header" }, ld = { class: "stmp-track-name" }, ad = { class: "stmp-track-artist" }, cd = { class: "stmp-progress" }, ud = ["value"], fd = { class: "stmp-time" }, dd = { class: "stmp-controls" }, hd = { class: "stmp-ctrl-side stmp-search-side" }, pd = ["aria-label"], gd = ["aria-label"], md = ["aria-label"], yd = ["aria-label"], vd = ["aria-label"], _d = ["aria-label"], bd = { class: "stmp-ctrl-side stmp-volume-side" }, wd = ["aria-label"], xd = ["value"], Sd = {
  key: 0,
  class: "stmp-overlay"
}, Cd = { class: "stmp-overlay-header" }, Td = { class: "stmp-overlay-title" }, Ad = ["aria-label"], kd = { class: "stmp-overlay-body" }, Id = /* @__PURE__ */ kt({
  __name: "PlayerPanel",
  emits: ["collapse"],
  setup(e) {
    const t = xe(), s = ht(), n = fe(), o = Pe(
      () => n.settings.widgetMode === "dock" && n.settings.dockAlign.startsWith("top-")
    ), i = /* @__PURE__ */ de("cover"), r = /* @__PURE__ */ de(null), l = /* @__PURE__ */ de(!1), a = /* @__PURE__ */ de(!1);
    let c = null, u = 0;
    const p = Pe(() => t.currentTrack?.cover || ""), _ = () => {
      l.value = !0;
    };
    Be(
      () => t.currentTrack,
      () => {
        l.value = !1;
      }
    );
    const y = Pe(
      () => t.duration > 0 ? t.currentTime / t.duration * 100 : 0
    ), { scrollY: k, windowRef: b, setLineRef: H } = wl();
    function F(S) {
      const C = Math.floor(S / 60), w = Math.floor(S % 60);
      return C + ":" + w.toString().padStart(2, "0");
    }
    function B(S) {
      const C = S.target;
      t.seek(Number(C.value) / 100 * t.duration);
    }
    const J = ["list", "random", "single"], j = {
      list: "repeat",
      random: "shuffle",
      single: "repeat-one"
    };
    function q() {
      const S = n.settings.playMode, C = J.indexOf(S), w = J[(C + 1) % J.length];
      n.setPlayMode(w);
    }
    function le(S) {
      const C = S.target;
      t.setVolume(Number(C.value));
    }
    function Y() {
      c && clearTimeout(c), a.value = !0;
    }
    function z() {
      c = setTimeout(() => {
        a.value = !1;
      }, 300);
    }
    function L() {
      t.volume > 0 ? (u = t.volume, t.setVolume(0)) : t.setVolume(u || n.settings.volume);
    }
    function G(S) {
      r.value === S ? r.value = null : r.value = S;
    }
    function X() {
      r.value = null;
    }
    return (S, C) => (E(), D("div", Zf, [
      f("div", Qf, [
        C[7] || (C[7] = f("div", { class: "stmp-topbar-spacer" }, null, -1)),
        f("button", {
          class: "stmp-icon-btn",
          "aria-label": g(m)("Collapse panel"),
          onClick: C[0] || (C[0] = $t((w) => S.$emit("collapse"), ["stop"]))
        }, [
          re(ke, {
            name: o.value ? "chevron-up" : "chevron-down",
            size: 18
          }, null, 8, ["name"])
        ], 8, ed)
      ]),
      f("div", {
        class: "stmp-display",
        onClick: C[1] || (C[1] = (w) => i.value = i.value === "cover" ? "lyric" : "cover")
      }, [
        f("div", {
          class: ue(["stmp-cover-mode", { hidden: i.value !== "cover" }])
        }, [
          f("div", td, [
            p.value && !l.value ? (E(), D("img", {
              key: 0,
              src: p.value,
              alt: "cover",
              onError: _
            }, null, 40, sd)) : (E(), D("div", nd, [
              re(ke, {
                name: "music",
                size: 48
              })
            ]))
          ]),
          f("div", od, N(g(t).currentTrack?.name || g(m)("No Song")), 1),
          f("div", id, N((g(t).currentTrack?.artist || "").trim() || " "), 1)
        ], 2),
        f("div", {
          class: ue(["stmp-lyric-mode", { hidden: i.value !== "lyric" }])
        }, [
          f("div", rd, [
            f("div", ld, N(g(t).currentTrack?.name || g(m)("No Song")), 1),
            f("div", ad, N((g(t).currentTrack?.artist || "").trim() || " "), 1)
          ]),
          f("div", {
            ref_key: "lyricWindowRef",
            ref: b,
            class: "stmp-lyric-window"
          }, [
            g(t).lyrics.length > 0 ? (E(), D("div", {
              key: 0,
              class: "stmp-lyric-scroll",
              style: Dt({ transform: `translateY(-${g(k)}px)` })
            }, [
              (E(!0), D(oe, null, Ve(g(t).lyrics, (w, T) => (E(), D("div", {
                key: T,
                ref_for: !0,
                ref: (x) => g(H)(x, T),
                class: ue(["stmp-lyric-line", { "stmp-lyric-active": T === g(t).currentLyricIndex }])
              }, N(w.text), 3))), 128))
            ], 4)) : _e("", !0)
          ], 512)
        ], 2)
      ]),
      f("div", cd, [
        f("input", {
          type: "range",
          min: "0",
          max: "100",
          step: "0.1",
          value: y.value,
          class: "stmp-range",
          onInput: B
        }, null, 40, ud),
        f("div", fd, [
          f("span", null, N(F(g(t).currentTime)), 1),
          f("span", null, N(F(g(t).duration)), 1)
        ])
      ]),
      f("div", dd, [
        f("div", hd, [
          f("button", {
            class: ue(["stmp-ctrl-btn", { active: r.value === "search" }]),
            "aria-label": g(m)("Search"),
            onClick: C[2] || (C[2] = $t((w) => G("search"), ["stop"]))
          }, [
            re(ke, {
              name: "search",
              size: 18
            })
          ], 10, pd)
        ]),
        f("button", {
          class: "stmp-ctrl-btn",
          "aria-label": g(m)("Toggle play mode"),
          onClick: q
        }, [
          re(ke, {
            name: j[g(n).settings.playMode],
            size: 16
          }, null, 8, ["name"])
        ], 8, gd),
        f("button", {
          class: "stmp-ctrl-btn",
          "aria-label": g(m)("Previous"),
          onClick: C[3] || (C[3] = (w) => g(s).prev())
        }, [
          re(ke, {
            name: "prev",
            size: 18
          })
        ], 8, md),
        f("button", {
          class: "stmp-ctrl-btn stmp-play-btn",
          "aria-label": g(t).isPlaying ? g(m)("Pause") : g(m)("Play"),
          onClick: C[4] || (C[4] = (w) => g(t).togglePlay())
        }, [
          re(ke, {
            name: g(t).isPlaying ? "pause" : "play",
            size: 24
          }, null, 8, ["name"])
        ], 8, yd),
        f("button", {
          class: "stmp-ctrl-btn",
          "aria-label": g(m)("Next"),
          onClick: C[5] || (C[5] = (w) => g(s).next())
        }, [
          re(ke, {
            name: "next",
            size: 18
          })
        ], 8, vd),
        f("button", {
          class: ue(["stmp-ctrl-btn", { active: r.value === "list" }]),
          "aria-label": g(m)("Playlist"),
          onClick: C[6] || (C[6] = $t((w) => G("list"), ["stop"]))
        }, [
          re(ke, {
            name: "list",
            size: 16
          })
        ], 10, _d),
        f("div", bd, [
          f("div", {
            class: "stmp-volume-container",
            onMouseenter: Y,
            onMouseleave: z
          }, [
            f("button", {
              class: "stmp-ctrl-btn",
              "aria-label": g(m)("Mute / Unmute"),
              onClick: L
            }, [
              re(ke, {
                name: g(t).volume === 0 ? "volume-mute" : "volume",
                size: 18
              }, null, 8, ["name"])
            ], 8, wd),
            f("div", {
              class: ue(["stmp-volume-popup", { show: a.value }])
            }, [
              f("input", {
                type: "range",
                min: "0",
                max: "100",
                value: g(t).volume,
                class: "stmp-volume-vertical",
                orient: "vertical",
                onInput: le
              }, null, 40, xd)
            ], 2)
          ], 32)
        ])
      ]),
      re(Jc, { name: "stmp-overlay" }, {
        default: Pr(() => [
          r.value ? (E(), D("div", Sd, [
            f("div", Cd, [
              f("span", Td, N(r.value === "list" ? g(m)("Playlist") : g(m)("Search")), 1),
              f("button", {
                class: "stmp-overlay-close",
                "aria-label": g(m)("Close"),
                onClick: $t(X, ["stop"])
              }, [
                re(ke, {
                  name: "x",
                  size: 16
                })
              ], 8, Ad)
            ]),
            f("div", kd, [
              r.value === "list" ? (E(), Qe($f, { key: 0 })) : (E(), Qe(Xf, { key: 1 }))
            ])
          ])) : _e("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Di = /* @__PURE__ */ Mt(Id, [["__scopeId", "data-v-7f1745ff"]]), Md = {
  key: 1,
  class: "stmp-inline-expanded"
}, Ni = 3, Ed = 500, Pd = /* @__PURE__ */ kt({
  __name: "App",
  setup(e) {
    const t = fe(), s = xe(), n = /* @__PURE__ */ de(!1), o = /* @__PURE__ */ de(null);
    let i = null;
    const r = Pe(() => t.settings.widgetMode === "dock"), l = Pe(() => t.settings.widgetMode === "inline"), a = Pe(() => t.settings.widgetMode === "hidden"), c = /* @__PURE__ */ de(window.innerWidth <= 768), u = /* @__PURE__ */ de(!1), p = Pe(() => t.settings.dockAlign.startsWith("top-")), _ = Pe(() => t.settings.customOpacity ? t.settings.opacity : 75), y = (R) => {
      R.key === "Escape" && (n.value = !1), R.key === " " && R.target === document.body && (R.preventDefault(), s.togglePlay());
    };
    let k = 0, b = 0, H = 0, F = 0, B = !1, J = !1, j = 0, q = !1, le = null, Y = null;
    function z(R) {
      if (r.value) return;
      const Z = R.target;
      if (Z.closest("input, .stmp-result, .stmp-item, .stmp-upload-btn, .stmp-search-input, .stmp-controls, .stmp-lyrics, .stmp-overlay, .stmp-display, .stmp-overlay-close") || n.value && (!Z.closest(".stmp-drag-handle") || Z.closest("button")) || !n.value && Z.closest("button"))
        return;
      const he = o.value?.getBoundingClientRect();
      he && (k = R.clientX, b = R.clientY, H = he.left, F = he.top, B = !1, J = !0, j = Date.now(), q = !1, o.value && (o.value.style.left = he.left + "px", o.value.style.top = he.top + "px", o.value.style.right = "auto", o.value.style.bottom = "auto"), le = L, Y = G, document.addEventListener("pointermove", le), document.addEventListener("pointerup", Y), R.preventDefault());
    }
    function L(R) {
      if (!o.value || !J) return;
      const Z = R.clientX - k, he = R.clientY - b;
      (Math.abs(Z) > Ni || Math.abs(he) > Ni) && (B = !0);
      let me = H + Z, Q = F + he;
      const Ce = o.value.offsetWidth || 60, Ie = o.value.offsetHeight || 40, tt = window.innerWidth - Ce, st = window.innerHeight - Ie;
      me = Math.max(0, Math.min(me, tt)), Q = Math.max(0, Math.min(Q, st)), o.value.style.left = me + "px", o.value.style.top = Q + "px";
    }
    function G() {
      J = !1, le && document.removeEventListener("pointermove", le), Y && document.removeEventListener("pointerup", Y), le = null, Y = null;
      const R = Date.now() - j;
      if (B) {
        if (q = !0, o.value) {
          const Z = o.value.getBoundingClientRect();
          t.setPosition({ x: Z.left, y: Z.top }), n.value && Le(() => X());
        }
        return;
      }
      if (R > Ed) {
        q = !0;
        return;
      }
    }
    function X() {
      if (!o.value) return;
      const R = o.value.getBoundingClientRect(), Z = o.value.offsetWidth, he = o.value.offsetHeight;
      let me = R.left, Q = R.top;
      me + Z > window.innerWidth && (me = window.innerWidth - Z), Q + he > window.innerHeight && (Q = window.innerHeight - he), me < 0 && (me = 0), Q < 0 && (Q = 0), o.value.style.left = me + "px", o.value.style.top = Q + "px", o.value.style.right = "auto", o.value.style.bottom = "auto", t.setPosition({ x: me, y: Q });
    }
    function S() {
      if (!o.value || !r.value) return;
      const R = t.settings.dockAlign, Z = R.startsWith("top-"), he = R.endsWith("-right"), me = Z ? document.querySelector("#top-settings-holder") : document.querySelector("#send_form");
      if (!me) return;
      const Q = me.getBoundingClientRect(), Ce = o.value.offsetHeight || 38;
      if (Z) {
        const Ie = Math.max(80, window.innerHeight - Q.bottom - 8);
        o.value.style.maxHeight = Ie + "px", o.value.style.top = Q.bottom + "px";
      } else {
        const Ie = Math.max(80, Q.top - 8);
        o.value.style.maxHeight = Ie + "px";
        let tt = Q.top - Math.min(Ce, Ie);
        tt < 4 && (tt = 4), o.value.style.top = tt + "px";
      }
      if (window.innerWidth <= 768)
        o.value.style.left = Q.left + "px", o.value.style.width = Q.width + "px";
      else {
        const Ie = o.value.offsetWidth;
        he ? o.value.style.left = Q.right - Ie + "px" : o.value.style.left = Q.left + "px", o.value.style.width = "";
      }
      o.value.style.right = "auto", o.value.style.bottom = "auto";
    }
    function C() {
      if (!o.value || r.value) return;
      const R = t.settings.position;
      R ? (o.value.style.left = R.x + "px", o.value.style.top = R.y + "px", o.value.style.right = "auto", o.value.style.bottom = "auto", window.innerWidth <= 768 && Le(() => X())) : (o.value.style.left = window.innerWidth - o.value.offsetWidth - 16 + "px", o.value.style.top = "16px", o.value.style.right = "auto", o.value.style.bottom = "auto");
    }
    function w(R) {
      if (q) {
        q = !1;
        return;
      }
      if (r.value && !n.value) {
        if (R.target.closest("button, input")) return;
        x();
        return;
      }
      if (!r.value && !n.value) {
        if (R.target.closest("button, input")) return;
        x();
      }
    }
    function T(R) {
      n.value || R.target.closest("button, input") || x();
    }
    function x() {
      n.value = !n.value, Le(() => {
        r.value ? S() : l.value || t.settings.position && X();
      });
    }
    Be(() => t.settings.widgetMode, (R) => {
      n.value = !1, o.value && (o.value.style.width = "", o.value.style.left = "", o.value.style.top = "", o.value.style.right = "", o.value.style.bottom = "", o.value.style.maxHeight = ""), R === "inline" && (u.value = !!document.querySelector("#send_form")), Le(() => {
        R === "dock" ? S() : R === "drag" && C();
      });
    }), Be(() => t.settings.dockAlign, () => {
      r.value && Le(() => S());
    }), Bs(() => {
      u.value = !!document.querySelector("#send_form"), Le(() => {
        r.value ? S() : l.value || C();
      }), o.value && typeof ResizeObserver < "u" && (i = new ResizeObserver(() => {
        r.value && S();
      }), i.observe(o.value)), window.addEventListener("resize", I), window.addEventListener("keydown", y);
    });
    function I() {
      c.value = window.innerWidth <= 768, r.value ? Le(() => S()) : l.value || Le(() => X());
    }
    return Vs(() => {
      G(), i && (i.disconnect(), i = null), window.removeEventListener("resize", I), window.removeEventListener("keydown", y);
    }), (R, Z) => l.value ? (E(), D(oe, { key: 0 }, [
      u.value ? (E(), Qe(Dr, {
        key: 0,
        to: "#send_form"
      }, [
        n.value ? (E(), D("div", Md, [
          re(Di, { onCollapse: x })
        ])) : (E(), D("div", {
          key: 0,
          class: "stmp-inline-bar",
          onClick: T
        }, [
          re($i, {
            "is-dock": !0,
            "is-mobile": !0
          })
        ]))
      ])) : _e("", !0)
    ], 64)) : a.value ? _e("", !0) : (E(), D("div", {
      key: 1,
      ref_key: "widgetRef",
      ref: o,
      class: ue(["stmp-widget", {
        "stmp-expanded": n.value,
        "stmp-collapsed": !n.value,
        "stmp-dock": r.value,
        "stmp-dock-top": r.value && p.value,
        "stmp-dock-bottom": r.value && !p.value
      }]),
      style: Dt({ "--stmp-opacity": _.value + "%" }),
      onPointerdown: z,
      onClick: w
    }, [
      n.value ? (E(), Qe(Di, {
        key: 1,
        onCollapse: x
      })) : (E(), Qe($i, {
        key: 0,
        "is-dock": r.value,
        "is-mobile": c.value
      }, null, 8, ["is-dock", "is-mobile"]))
    ], 38));
  }
}), Rd = /* @__PURE__ */ Mt(Pd, [["__scopeId", "data-v-c12e113b"]]);
var es = class extends Error {
  constructor(e, t) {
    super("".concat(e, " at position ").concat(t)), this.position = t;
  }
};
function Ld(e) {
  return /^[0-9A-Fa-f]$/.test(e);
}
function Ht(e) {
  return e >= "0" && e <= "9";
}
function Od(e) {
  return e >= " ";
}
function Xs(e) {
  return `,:[]/{}()
+`.includes(e);
}
function Fi(e) {
  return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e === "_" || e === "$";
}
function Ui(e) {
  return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e === "_" || e === "$" || e >= "0" && e <= "9";
}
var Bi = /^(http|https|ftp|mailto|file|data|irc):\/\/$/, Vi = /^[A-Za-z0-9-._~:/?#@!$&'()*+;=]$/;
function ji(e) {
  return `,[]/{}
+`.includes(e);
}
function Hi(e) {
  return rn(e) || $d.test(e);
}
var $d = /^[[{\w-]$/;
function Dd(e) {
  return e === `
` || e === "\r" || e === "	" || e === "\b" || e === "\f";
}
function Yt(e, t) {
  let s = e.charCodeAt(t);
  return s === 32 || s === 10 || s === 9 || s === 13;
}
function Nd(e, t) {
  let s = e.charCodeAt(t);
  return s === 32 || s === 9 || s === 13;
}
function Fd(e, t) {
  let s = e.charCodeAt(t);
  return s === 160 || s >= 8192 && s <= 8202 || s === 8239 || s === 8287 || s === 12288;
}
function rn(e) {
  return xl(e) || xo(e);
}
function xl(e) {
  return e === '"' || e === "“" || e === "”";
}
function Gi(e) {
  return e === '"';
}
function xo(e) {
  return e === "'" || e === "‘" || e === "’" || e === "`" || e === "´";
}
function Wi(e) {
  return e === "'";
}
function gs(e, t) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = e.lastIndexOf(t);
  return n !== -1 ? e.substring(0, n) + (s ? "" : e.substring(n + 1)) : e;
}
function qe(e, t) {
  let s = e.length;
  if (!Yt(e, s - 1)) return e + t;
  for (; Yt(e, s - 1); ) s--;
  return e.substring(0, s) + t + e.substring(s);
}
function Ud(e, t, s) {
  return e.substring(0, t) + e.substring(t + s);
}
function Bd(e) {
  return /[,\n][ \t\r]*$/.test(e);
}
var Vd = { "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t" }, jd = { '"': '"', "\\": "\\", "/": "/", b: "\b", f: "\f", n: `
`, r: "\r", t: "	" };
function Ki(e) {
  let t = 0, s = "";
  a(), o() || S(), a();
  let n = c(",");
  for (n && i(), Hi(e[t]) && Bd(s) ? (n || (s = qe(s, ",")), b()) : n && (s = gs(s, ",")); e[t] === "}" || e[t] === "]"; ) t++, i();
  if (t >= e.length) return s;
  X();
  function o() {
    i();
    let x = y() || k() || H() || B() || J() || q(!1) || le();
    return i(), x;
  }
  function i() {
    let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, I = t, R = r(x);
    do
      R = l(), R && (R = r(x));
    while (R);
    return t > I;
  }
  function r(x) {
    let I = x ? Yt : Nd, R = "";
    for (; ; ) if (I(e, t)) R += e[t], t++;
    else if (Fd(e, t)) R += " ", t++;
    else break;
    return R.length > 0 ? (s += R, !0) : !1;
  }
  function l() {
    if (e[t] === "/" && e[t + 1] === "*") {
      for (; t < e.length && !Hd(e, t); ) t++;
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
      if (t += 3, Fi(e[t])) for (; t < e.length && Ui(e[t]); ) t++;
      return i(), !0;
    }
    return !1;
  }
  function c(x) {
    return e[t] === x ? (s += e[t], t++, !0) : !1;
  }
  function u(x) {
    return e[t] === x ? (t++, !0) : !1;
  }
  function p() {
    return u("\\");
  }
  function _() {
    return i(), e[t] === "." && e[t + 1] === "." && e[t + 2] === "." ? (t += 3, i(), u(","), !0) : !1;
  }
  function y() {
    if (e[t] === "{") {
      s += "{", t++, i(), u(",") && i();
      let x = !0;
      for (; t < e.length && e[t] !== "}"; ) {
        let I;
        if (x ? (I = !0, x = !1) : (I = c(","), I || (s = qe(s, ",")), i()), _(), !(H() || q(!0))) {
          e[t] === "}" || e[t] === "{" || e[t] === "]" || e[t] === "[" || e[t] === void 0 ? s = gs(s, ",") : C();
          break;
        }
        i();
        let R = c(":"), Z = t >= e.length;
        R || (Hi(e[t]) || Z ? s = qe(s, ":") : w()), o() || (R || Z ? s += "null" : w());
      }
      return e[t] === "}" ? (s += "}", t++) : s = qe(s, "}"), !0;
    }
    return !1;
  }
  function k() {
    if (e[t] === "[") {
      s += "[", t++, i(), u(",") && i();
      let x = !0;
      for (; t < e.length && e[t] !== "]"; ) if (x ? x = !1 : c(",") || (s = qe(s, ",")), _(), !o()) {
        s = gs(s, ",");
        break;
      }
      return e[t] === "]" ? (s += "]", t++) : s = qe(s, "]"), !0;
    }
    return !1;
  }
  function b() {
    let x = !0, I = !0;
    for (; I; ) x ? x = !1 : c(",") || (s = qe(s, ",")), I = o();
    I || (s = gs(s, ",")), s = `[
`.concat(s, `
]`);
  }
  function H() {
    let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1, R = e[t] === "\\";
    if (R && (t++, R = !0), rn(e[t])) {
      let Z = Gi(e[t]) ? Gi : Wi(e[t]) ? Wi : xo(e[t]) ? xo : xl, he = t, me = s.length, Q = '"';
      for (t++; ; ) {
        if (t >= e.length) {
          let Ce = Y(t - 1);
          return !x && Xs(e.charAt(Ce)) ? (t = he, s = s.substring(0, me), H(!0)) : (Q = qe(Q, '"'), s += Q, !0);
        } else {
          if (t === I) return Q = qe(Q, '"'), s += Q, !0;
          if (Z(e[t])) {
            let Ce = t, Ie = Q.length;
            if (Q += '"', t++, s += Q, i(!1), x || t >= e.length || Xs(e[t]) || rn(e[t]) || Ht(e[t])) return F(), !0;
            let tt = Y(Ce - 1), st = e.charAt(tt);
            if (st === ",") return t = he, s = s.substring(0, me), H(!1, tt);
            if (Xs(st)) return t = he, s = s.substring(0, me), H(!0);
            s = s.substring(0, me), t = Ce + 1, Q = "".concat(Q.substring(0, Ie), "\\").concat(Q.substring(Ie));
          } else if (x && ji(e[t])) {
            if (e[t - 1] === ":" && Bi.test(e.substring(he + 1, t + 2))) for (; t < e.length && Vi.test(e[t]); ) Q += e[t], t++;
            return Q = qe(Q, '"'), s += Q, F(), !0;
          } else if (e[t] === "\\") {
            let Ce = e.charAt(t + 1);
            if (jd[Ce] !== void 0) Q += e.slice(t, t + 2), t += 2;
            else if (Ce === "u") {
              let Ie = 2;
              for (; Ie < 6 && Ld(e[t + Ie]); ) Ie++;
              Ie === 6 ? (Q += e.slice(t, t + 6), t += 6) : t + Ie >= e.length ? t = e.length : T();
            } else Q += Ce, t += 2;
          } else {
            let Ce = e.charAt(t);
            Ce === '"' && e[t - 1] !== "\\" ? (Q += "\\".concat(Ce), t++) : Dd(Ce) ? (Q += Vd[Ce], t++) : (Od(Ce) || G(Ce), Q += Ce, t++);
          }
        }
        R && p();
      }
    }
    return !1;
  }
  function F() {
    let x = !1;
    for (i(); e[t] === "+"; ) {
      x = !0, t++, i(), s = gs(s, '"', !0);
      let I = s.length;
      H() ? s = Ud(s, I, 1) : s = qe(s, '"');
    }
    return x;
  }
  function B() {
    let x = t;
    if (e[t] === "-") {
      if (t++, z()) return L(x), !0;
      if (!Ht(e[t])) return t = x, !1;
    }
    for (; Ht(e[t]); ) t++;
    if (e[t] === ".") {
      if (t++, z()) return L(x), !0;
      if (!Ht(e[t])) return t = x, !1;
      for (; Ht(e[t]); ) t++;
    }
    if (e[t] === "e" || e[t] === "E") {
      if (t++, (e[t] === "-" || e[t] === "+") && t++, z()) return L(x), !0;
      if (!Ht(e[t])) return t = x, !1;
      for (; Ht(e[t]); ) t++;
    }
    if (!z()) return t = x, !1;
    if (t > x) {
      let I = e.slice(x, t), R = /^0\d/.test(I);
      return s += R ? '"'.concat(I, '"') : I, !0;
    }
    return !1;
  }
  function J() {
    return j("true", "true") || j("false", "false") || j("null", "null") || j("True", "true") || j("False", "false") || j("None", "null");
  }
  function j(x, I) {
    return e.slice(t, t + x.length) === x ? (s += I, t += x.length, !0) : !1;
  }
  function q(x) {
    let I = t;
    if (Fi(e[t])) {
      for (; t < e.length && Ui(e[t]); ) t++;
      let R = t;
      for (; Yt(e, R); ) R++;
      if (e[R] === "(") return t = R + 1, o(), e[t] === ")" && (t++, e[t] === ";" && t++), !0;
    }
    for (; t < e.length && !ji(e[t]) && !rn(e[t]) && (!x || e[t] !== ":"); ) t++;
    if (e[t - 1] === ":" && Bi.test(e.substring(I, t + 2))) for (; t < e.length && Vi.test(e[t]); ) t++;
    if (t > I) {
      for (; Yt(e, t - 1) && t > 0; ) t--;
      let R = e.slice(I, t);
      return s += R === "undefined" ? "null" : JSON.stringify(R), e[t] === '"' && t++, !0;
    }
  }
  function le() {
    if (e[t] === "/") {
      let x = t;
      for (t++; t < e.length && (e[t] !== "/" || e[t - 1] === "\\"); ) t++;
      return t++, s += '"'.concat(e.substring(x, t), '"'), !0;
    }
  }
  function Y(x) {
    let I = x;
    for (; I > 0 && Yt(e, I); ) I--;
    return I;
  }
  function z() {
    return t >= e.length || Xs(e[t]) || Yt(e, t);
  }
  function L(x) {
    s += "".concat(e.slice(x, t), "0");
  }
  function G(x) {
    throw new es("Invalid character ".concat(JSON.stringify(x)), t);
  }
  function X() {
    throw new es("Unexpected character ".concat(JSON.stringify(e[t])), t);
  }
  function S() {
    throw new es("Unexpected end of json string", e.length);
  }
  function C() {
    throw new es("Object key expected", t);
  }
  function w() {
    throw new es("Colon expected", t);
  }
  function T() {
    let x = e.slice(t, t + 6);
    throw new es('Invalid unicode character "'.concat(x, '"'), t);
  }
}
function Hd(e, t) {
  return e[t] === "*" && e[t + 1] === "/";
}
function Gd(e) {
  if (!e) return null;
  let t = e.trim();
  t = t.replace(/^```(?:json)?\s*\n?/i, "").replace(/\n?```\s*$/i, "");
  try {
    return JSON.parse(t);
  } catch {
  }
  try {
    const n = Ki(t);
    return JSON.parse(n);
  } catch {
  }
  const s = Wd(t);
  if (s)
    try {
      return JSON.parse(s);
    } catch {
      try {
        return JSON.parse(Ki(s));
      } catch {
      }
    }
  return null;
}
function Wd(e) {
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
const zi = 50;
function Sl() {
  const t = fe().storage;
  if (!t) return [];
  const s = t.getMetadata(Vo);
  return Array.isArray(s) ? s : [];
}
function jo(e, t, s) {
  const n = Sl();
  n.push({ song: e, artist: t, messageId: s, playedAt: Date.now() }), n.length > zi && n.splice(0, n.length - zi);
  const i = fe().storage;
  i && i.setMetadata(Vo, n);
}
function Cl(e) {
  return Sl().slice(-5).reverse().map((s) => `${s.song}${s.artist ? " - " + s.artist : ""}`);
}
function Tl(e) {
  let t = e;
  try {
    const s = xe(), n = s.currentTrack?.name ?? "", o = s.currentTrack?.artist ?? "", i = String(s.isPlaying), r = String(!!s.currentTrack), l = Cl(5).join(", ");
    t = t.replace(/\{\{xiaoyueCurrentSong\}\}/gi, n).replace(/\{\{xiaoyueCurrentArtist\}\}/gi, o ? " - " + o : "").replace(/\{\{xiaoyueIsPlaying\}\}/gi, i).replace(/\{\{xiaoyueHasTrack\}\}/gi, r).replace(/\{\{xiaoyueRecentPlayed\}\}/gi, l);
  } catch {
  }
  return t;
}
const _n = "<!--XY_BGM_START-->", So = "<!--XY_BGM_END-->", Kd = `You need to manage background music for a roleplay chat session. You have access to tools for searching and playing music.

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
- When uncertain whether to change, keep the current track.`, zd = "## Conversation", Yd = "Analyze the above conversation and manage background music using the available tools.", Al = `Background music control is needed for this roleplay session. After writing your narrative, append a BGM marker at the end of your response.

## Output Format (must follow strictly)

After your narrative, append exactly:
${_n}
{"song":"song name","artist":"artist name","action":"play"}
${So}

For "keep" (no change needed), omit song and artist:
${_n}
{"action":"keep"}
${So}

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
- Recently played: {{xiaoyueRecentPlayed}}`, Jd = `Background music control is available for this roleplay session.

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
- Recently played: {{xiaoyueRecentPlayed}}`, bn = "search_music", kl = "Search a music platform for songs by keyword. Returns up to 5 matches with IDs, names, artists, and durations.", Il = "Search keyword — song name, artist name, or both.", wn = "play_music", Ml = "Play a song by its search result ID. The ID must come from a prior search_music result. Returns playback status.", El = "The ID from a search_music result entry.", xn = "stop_music", Pl = "Stop the currently playing music. Use only when the scene explicitly calls for silence.", Sn = "get_current_track", Rl = "Get information about the currently playing track, including song name, artist, and playback status.", qd = "播放音乐", Xd = "播放音乐: {song}{artist}", Zd = "停止音乐", Qd = "停止音乐", Ll = (e) => e.length === 0 ? "No results found. Try different keywords." : JSON.stringify(e.map((t) => ({
  id: t.id,
  name: t.name,
  artist: t.artist,
  ...t.duration ? { duration: t.duration } : {}
}))), Ol = "Missing required parameter: keyword", $l = 'No results found for: "{keyword}". Try different keywords.', Dl = "Missing required parameter: result_id", Nl = 'Invalid result_id: "{id}". This ID does not match any prior search result. Call search_music first.', Fl = "Failed to resolve track: {name}{artist}. The track may be unavailable.", Ul = "Now playing: {name}{artist}", Bl = "Music stopped.", Vl = "No music is currently playing.", jl = (e, t, s) => JSON.stringify({ song: e, artist: t, is_playing: s }), Hl = "No track is currently loaded.";
function eh() {
  return Kd;
}
function th(e) {
  const t = [];
  return t.push(zd), t.push(e), t.push(""), t.push(Yd), t.join(`
`);
}
function sh(e, t) {
  return Tl(e && t ? t : Al);
}
function nh() {
  return Tl(Jd);
}
const oh = /<!--XY_BGM_START-->[\s\S]*?<!--XY_BGM_END-->/g;
class ih {
  constructor() {
    this.interceptor = null, this.onGenerationEndedBound = (t) => {
      this.onGenerationEnded(t);
    };
  }
  init() {
    this.interceptor = (s, n, o, i) => {
      const l = SillyTavern.getContext().extensionSettings["st-little-player"];
      if (!l || l.aiMode !== "together") return;
      const a = fe(), c = sh(
        a.settings.togetherCustomPromptEnabled,
        a.settings.togetherCustomPrompt
      ), p = (l.togetherPromptRole || "system") === "system";
      s.splice(Math.max(0, s.length - 1), 0, {
        is_user: !p,
        is_system: p,
        name: "晓乐",
        mes: c,
        extra: { isSmallSys: p }
      });
    }, globalThis.xiaoyueInterceptor = this.interceptor;
    const t = SillyTavern.getContext();
    t.eventSource.on(t.event_types.GENERATION_ENDED, this.onGenerationEndedBound);
  }
  destroy() {
    const t = SillyTavern.getContext();
    t.eventSource.removeListener(t.event_types.GENERATION_ENDED, this.onGenerationEndedBound), delete globalThis.xiaoyueInterceptor, this.interceptor = null;
  }
  async onGenerationEnded(t) {
    try {
      const s = SillyTavern.getContext(), n = t > 0 ? t - 1 : 0, o = s.chat[n];
      if (!o) {
        console.log("[晓乐] Together: GENERATION_ENDED but msg not found", { messageId: t, actualId: n, chatLen: s.chat.length });
        return;
      }
      const i = o.mes ?? "", r = i.indexOf(_n);
      if (r === -1) return;
      console.log("[晓乐] Together: marker found in message", n);
      const l = i.indexOf(So, r);
      if (l === -1) {
        console.warn("[晓乐] Together: MARKER_END not found, marker may be truncated");
        return;
      }
      const a = i.slice(r + _n.length, l).trim();
      console.log("[晓乐] Together: extracted marker content:", a);
      const c = Gd(a);
      if (console.log("[晓乐] Together: parsed recommendation:", c), !c) {
        this.cleanupMarker(n, o);
        return;
      }
      if (c.action === "keep") {
        console.log("[晓乐] Together: action=keep, no change"), this.cleanupMarker(n, o);
        return;
      }
      if (c.action === "play" && c.song) {
        console.log("[晓乐] Together: searching for:", c.song, c.artist);
        const u = fe(), _ = await At(u.settings.providers).searchAndResolve(c.song, c.artist);
        _ ? (await xe().loadAndPlay(_), jo(c.song, c.artist, n), console.log("[晓乐] Together: playing:", _.name, "-", _.artist), typeof toastr < "u" && toastr.success(m("AI selected:") + " " + c.song)) : (console.warn("[晓乐] Together: track not found:", c.song), typeof toastr < "u" && toastr.warning(m("Cannot play") + ": " + c.song));
      }
      this.cleanupMarker(n, o);
    } catch (s) {
      console.error("[晓乐] Together: onGenerationEnded error:", s);
    }
  }
  cleanupMarker(t, s) {
    s.mes = (s.mes ?? "").replace(oh, "").trim();
    const n = SillyTavern.getContext();
    typeof n.updateMessageBlock == "function" && n.updateMessageBlock(t, s);
  }
}
let Zs = null;
async function rh() {
  if (Zs) return Zs;
  try {
    const e = await Function("return import")()(
      /* @vite-ignore */
      "/scripts/extensions/regex/engine.js"
    );
    if (e?.getRegexedString && e?.regex_placement)
      return Zs = e, Zs;
  } catch {
  }
  return null;
}
const lh = /<!--XY_BGM_START-->[\s\S]*?<!--XY_BGM_END-->/g;
function ah(e) {
  return e.replace(lh, "").trim();
}
async function ch(e) {
  try {
    const t = SillyTavern.getContext(), s = t.chat;
    if (!s || s.length === 0) return "";
    const n = await rh(), o = s.slice(-e), i = [];
    for (const r of o) {
      const l = r.is_user ? t.name1 : r.name || t.name2 || "Character";
      let a = r.mes ?? "";
      if (n) {
        const c = r.is_user ? n.regex_placement.USER_INPUT : n.regex_placement.AI_OUTPUT;
        try {
          a = n.getRegexedString(a, c, { isPrompt: !0 });
        } catch {
        }
      }
      a = ah(a), a.trim() && i.push(`${l}: ${a}`);
    }
    return i.join(`

`);
  } catch {
    return "";
  }
}
const Yi = 4, uh = [
  {
    type: "function",
    function: {
      name: bn,
      description: kl,
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
      name: wn,
      description: Ml,
      parameters: {
        type: "object",
        properties: {
          result_id: { type: "string", description: El }
        },
        required: ["result_id"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: xn,
      description: Pl,
      parameters: {
        type: "object",
        properties: {}
      }
    }
  },
  {
    type: "function",
    function: {
      name: Sn,
      description: Rl,
      parameters: {
        type: "object",
        properties: {}
      }
    }
  }
];
async function fh() {
  const e = fe().settings, t = e.aiApiUrl.replace(/\/$/, "") + "/models", s = await fetch(t, {
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
async function dh(e) {
  const t = fe().settings, s = t.aiApiUrl.replace(/\/$/, "") + "/chat/completions", n = {
    model: t.aiModel,
    messages: e,
    max_tokens: 4096,
    stream: !1,
    temperature: 0.7,
    tools: uh,
    tool_choice: "auto",
    thinking: { type: "disabled" }
  };
  console.log("[晓乐] BGM API request:", { model: t.aiModel, messageCount: e.length });
  const o = await fetch(s, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...t.aiApiKey ? { Authorization: `Bearer ${t.aiApiKey}` } : {}
    },
    body: JSON.stringify(n)
  });
  if (!o.ok) {
    const l = await o.text().catch(() => "");
    throw new Error(`API ${o.status}: ${l}`);
  }
  const r = (await o.json())?.choices?.[0]?.message;
  return {
    content: r?.content ?? null,
    tool_calls: r?.tool_calls
  };
}
async function hh(e, t, s) {
  switch (e) {
    case bn: {
      const n = t.keyword;
      if (!n) return Ol;
      const o = fe(), r = await At(o.settings.providers).searchAll(n);
      if (r.length === 0)
        return $l.replace("{keyword}", n);
      const l = r.slice(0, 5);
      for (const c of l)
        s.set(c.id, c);
      const a = Ll(
        l.map((c) => ({
          id: c.id,
          name: c.name,
          artist: c.artist,
          duration: c.duration
        }))
      );
      return console.log("[晓乐] search_music results:", l.length, "items for:", n), a;
    }
    case wn: {
      const n = t.result_id;
      if (!n) return Dl;
      const o = s.get(n);
      if (!o)
        return Nl.replace("{id}", n);
      const i = fe(), l = await At(i.settings.providers).resolve(o.id, o.provider, o.picId);
      return l ? (l.name = o.name, l.artist = o.artist, await xe().loadAndPlay(l), jo(o.name, o.artist), typeof toastr < "u" && toastr.success(`${m("AI selected:")} ${o.name}`), console.log("[晓乐] play_music success:", o.name, "-", o.artist), Ul.replace("{name}", l.name).replace("{artist}", l.artist ? " - " + l.artist : "")) : Fl.replace("{name}", o.name).replace("{artist}", o.artist ? " - " + o.artist : "");
    }
    case xn: {
      const n = xe();
      return n.currentTrack ? (n.pause(), console.log("[晓乐] stop_music success"), Bl) : Vl;
    }
    case Sn: {
      const n = xe();
      if (!n.currentTrack) return Hl;
      const o = jl(
        n.currentTrack.name,
        n.currentTrack.artist ?? null,
        n.isPlaying
      );
      return console.log("[晓乐] get_current_track:", o), o;
    }
    default:
      return `Unknown tool: ${e}`;
  }
}
async function ph(e, t) {
  const s = [
    { role: "system", content: e },
    { role: "user", content: t }
  ], n = /* @__PURE__ */ new Map();
  for (let o = 0; o < Yi; o++) {
    console.log(`[晓乐] BGM agent loop iteration ${o + 1}/${Yi}`);
    const i = await dh(s), r = {
      role: "assistant",
      content: i.content,
      ...i.tool_calls ? { tool_calls: i.tool_calls } : {}
    };
    if (s.push(r), !i.tool_calls || i.tool_calls.length === 0) {
      console.log("[晓乐] BGM agent loop ended — no tool calls"), i.content && console.log("[晓乐] BGM agent final text:", i.content);
      return;
    }
    for (const l of i.tool_calls) {
      const a = l.function.name;
      let c = {};
      try {
        c = JSON.parse(l.function.arguments || "{}");
      } catch {
        console.warn("[晓乐] Failed to parse tool arguments:", l.function.arguments);
      }
      console.log(`[晓乐] Executing tool: ${a}`, c);
      const u = await hh(a, c, n);
      console.log("[晓乐] Tool result:", u), s.push({
        role: "tool",
        content: u,
        tool_call_id: l.id
      });
    }
  }
  console.warn("[晓乐] BGM agent loop reached max iterations");
}
const Ji = "xiaoyue_fc", Qs = /* @__PURE__ */ new Map();
class qi {
  constructor() {
    this.isAnalyzing = !1, this.lastTriggerTime = 0, this.destroyed = !1, this.onGenerationStarted = () => {
      Qs.clear();
    }, this.onCharacterMessageRendered = (t) => {
      const s = fe();
      if (!s.settings.aiAutoTrigger) return;
      const n = SillyTavern.getContext();
      (t <= 0 || n.chat.filter((i) => i.is_user).length === 0) && !s.settings.aiTriggerOnGreeting || this.triggerAgent(t);
    }, this.onMessageSwiped = (t) => {
      const s = fe();
      if (!s.settings.aiAutoTrigger) return;
      const n = Math.floor(s.settings.aiCooldownMs / 2);
      Date.now() - this.lastTriggerTime < n || this.triggerAgent(t, !0);
    };
  }
  init() {
    fe().settings.aiUseCustomApi ? this.initCustomApiPath() : this.initMainApiPath();
  }
  // ===== Main API path: register ST function tools =====
  initMainApiPath() {
    const t = SillyTavern.getContext();
    if (!t.isToolCallingSupported()) {
      console.warn("[晓乐] Function tool calling is not supported by the current API. Switch to custom API or use Together mode.");
      return;
    }
    t.eventSource.on(t.event_types.GENERATION_STARTED, this.onGenerationStarted);
    const s = () => {
      const o = fe();
      return o.settings.aiMode === "function_call" && !o.settings.aiUseCustomApi;
    };
    t.registerFunctionTool({
      name: bn,
      displayName: "搜索音乐",
      description: kl,
      parameters: {
        type: "object",
        properties: {
          keyword: { type: "string", description: Il }
        },
        required: ["keyword"]
      },
      action: async ({ keyword: o }) => {
        if (!o) return Ol;
        const i = fe(), l = await At(i.settings.providers).searchAll(o);
        if (l.length === 0)
          return $l.replace("{keyword}", o);
        const a = l.slice(0, 5);
        for (const u of a)
          Qs.set(u.id, u);
        const c = Ll(
          a.map((u) => ({
            id: u.id,
            name: u.name,
            artist: u.artist,
            duration: u.duration
          }))
        );
        return console.log("[晓乐] search_music results:", a.length, "items for:", o), c;
      },
      formatMessage: ({ keyword: o }) => `搜索音乐: ${o ?? ""}`,
      shouldRegister: s,
      stealth: !0
    }), t.registerFunctionTool({
      name: wn,
      displayName: qd,
      description: Ml,
      parameters: {
        type: "object",
        properties: {
          result_id: { type: "string", description: El }
        },
        required: ["result_id"]
      },
      action: async ({ result_id: o }) => {
        if (!o) return Dl;
        const i = Qs.get(o);
        if (!i)
          return Nl.replace("{id}", o);
        const r = fe(), a = await At(r.settings.providers).resolve(i.id, i.provider, i.picId);
        return a ? (a.name = i.name, a.artist = i.artist, await xe().loadAndPlay(a), jo(i.name, i.artist), typeof toastr < "u" && toastr.success(`${m("AI selected:")} ${i.name}`), console.log("[晓乐] play_music success:", a.name, "-", a.artist), Ul.replace("{name}", a.name).replace("{artist}", a.artist ? " - " + a.artist : "")) : Fl.replace("{name}", i.name).replace("{artist}", i.artist ? " - " + i.artist : "");
      },
      formatMessage: ({ result_id: o }) => Xd.replace("{song}", o ?? "").replace("{artist}", ""),
      shouldRegister: s,
      stealth: !0
    }), t.registerFunctionTool({
      name: xn,
      displayName: Zd,
      description: Pl,
      parameters: {
        type: "object",
        properties: {}
      },
      action: async () => {
        const o = xe();
        return o.currentTrack ? (o.pause(), Bl) : Vl;
      },
      formatMessage: () => Qd,
      shouldRegister: s,
      stealth: !0
    }), t.registerFunctionTool({
      name: Sn,
      displayName: "当前播放",
      description: Rl,
      parameters: {
        type: "object",
        properties: {}
      },
      action: async () => {
        const o = xe();
        return o.currentTrack ? jl(
          o.currentTrack.name,
          o.currentTrack.artist ?? null,
          o.isPlaying
        ) : Hl;
      },
      formatMessage: () => "获取当前播放",
      shouldRegister: s,
      stealth: !0
    });
    const n = nh();
    t.setExtensionPrompt(Ji, n, 1, 0, !1, 0), console.log("[晓乐] Function Call (main API): 4 tools registered + aux prompt set");
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
    ), console.log("[晓乐] Function Call (custom API): event listeners registered");
  }
  async manualTrigger() {
    if (this.destroyed || this.isAnalyzing) return;
    const s = SillyTavern.getContext().chat, n = s && s.length > 0 ? s.length - 1 : void 0;
    await this.triggerAgent(n, !0);
  }
  async triggerAgent(t, s = !1) {
    if (this.isAnalyzing) return;
    const n = fe();
    if (!(!s && Date.now() - this.lastTriggerTime < n.settings.aiCooldownMs || SillyTavern.getContext().generationInProgress)) {
      if (!n.settings.aiApiUrl || !n.settings.aiModel) {
        console.warn("[晓乐] Custom API path requires API URL + Model");
        return;
      }
      this.isAnalyzing = !0, this.lastTriggerTime = Date.now(), console.log("[晓乐] BGM agent loop started");
      try {
        const i = await ch(n.settings.aiContextMessages), r = eh(), l = th(i);
        await ph(r, l);
      } catch (i) {
        console.error("[晓乐] AI agent loop failed:", i), typeof toastr < "u" && toastr.error(m("AI recommendation failed"));
      } finally {
        this.isAnalyzing = !1;
      }
    }
  }
  destroy() {
    this.destroyed = !0;
    const t = SillyTavern.getContext();
    fe().settings.aiUseCustomApi ? (t.eventSource.removeListener(
      t.event_types.CHARACTER_MESSAGE_RENDERED,
      this.onCharacterMessageRendered
    ), t.eventSource.removeListener(
      t.event_types.MESSAGE_SWIPED,
      this.onMessageSwiped
    )) : (t.eventSource.removeListener(t.event_types.GENERATION_STARTED, this.onGenerationStarted), t.unregisterFunctionTool(bn), t.unregisterFunctionTool(wn), t.unregisterFunctionTool(xn), t.unregisterFunctionTool(Sn), t.setExtensionPrompt(Ji, "", -1, 0), Qs.clear());
  }
}
let Co = null;
class gh {
  constructor() {
    this.together = null, this.functionCall = null, this.currentMode = "off";
  }
  init() {
    this.applyMode(fe().settings.aiMode), Co = this;
  }
  setMode(t) {
    t !== this.currentMode && (this.destroyCurrent(), this.applyMode(t));
  }
  resetFunctionCall() {
    this.functionCall && (this.functionCall.destroy(), this.functionCall = new qi(), this.functionCall.init());
  }
  applyMode(t) {
    this.currentMode = t;
    try {
      switch (t) {
        case "function_call":
          this.functionCall = new qi(), this.functionCall.init();
          break;
        case "together":
          this.together = new ih(), this.together.init();
          break;
        case "off":
        default:
          break;
      }
    } catch (s) {
      console.error("[晓乐] BGM controller: failed to init mode", t, s);
    }
  }
  destroyCurrent() {
    this.together && (this.together.destroy(), this.together = null), this.functionCall && (this.functionCall.destroy(), this.functionCall = null);
  }
  async manualTrigger() {
    this.functionCall && await this.functionCall.manualTrigger();
  }
  destroy() {
    this.destroyCurrent(), this.currentMode = "off", Co = null;
  }
}
function ln() {
  return Co;
}
const mh = {
  key: 0,
  class: "stmp-switch-label"
}, yh = { class: "stmp-switch" }, vh = ["checked", "disabled"], _h = /* @__PURE__ */ kt({
  __name: "ToggleSwitch",
  props: {
    modelValue: { type: Boolean },
    label: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const s = e, n = t, o = /* @__PURE__ */ de(null);
    function i() {
      const r = s.modelValue;
      n("update:modelValue", !r), Le(() => {
        o.value && s.modelValue === r && o.value.checked !== r && (o.value.checked = r);
      });
    }
    return (r, l) => (E(), D("label", {
      class: ue(["stmp-switch-row", { "stmp-switch-disabled": e.disabled }])
    }, [
      e.label ? (E(), D("span", mh, N(e.label), 1)) : _e("", !0),
      f("span", yh, [
        f("input", {
          ref_key: "inputRef",
          ref: o,
          type: "checkbox",
          checked: e.modelValue,
          disabled: e.disabled,
          onChange: i
        }, null, 40, vh),
        l[0] || (l[0] = f("span", { class: "stmp-switch-track" }, [
          f("span", { class: "stmp-switch-thumb" })
        ], -1))
      ])
    ], 2));
  }
}), Pt = /* @__PURE__ */ Mt(_h, [["__scopeId", "data-v-529649ca"]]), bh = ["value", "placeholder"], wh = ["onMousedown", "onMouseenter"], xh = /* @__PURE__ */ kt({
  __name: "ComboBox",
  props: {
    modelValue: {},
    options: {},
    placeholder: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const s = e, n = t, o = /* @__PURE__ */ de(null), i = /* @__PURE__ */ de(!1), r = /* @__PURE__ */ de(-1), l = /* @__PURE__ */ de({}), a = Pe(() => s.options);
    function c() {
      const F = o.value;
      if (!F) return;
      const B = F.getBoundingClientRect();
      l.value = {
        position: "fixed",
        left: `${B.left}px`,
        top: `${B.bottom + 2}px`,
        width: `${B.width}px`,
        zIndex: "10000"
      };
    }
    function u() {
      s.options.length !== 0 && (i.value = !0, r.value = -1, Le(c));
    }
    function p() {
      i.value = !1, r.value = -1;
    }
    function _(F) {
      n("update:modelValue", F), p();
    }
    function y(F) {
      n("update:modelValue", F.target.value), !i.value && s.options.length > 0 && (i.value = !0), r.value = -1, Le(c);
    }
    function k(F) {
      if (!i.value) return;
      const B = a.value;
      F.key === "ArrowDown" ? (F.preventDefault(), r.value = Math.min(r.value + 1, B.length - 1)) : F.key === "ArrowUp" ? (F.preventDefault(), r.value = Math.max(r.value - 1, 0)) : F.key === "Enter" ? r.value >= 0 && r.value < B.length ? (F.preventDefault(), _(B[r.value])) : p() : F.key === "Escape" && (F.preventDefault(), p());
    }
    function b(F) {
      const B = F.target;
      o.value?.contains(B) || document.getElementById("stmp-combobox-dropdown")?.contains(B) || p();
    }
    function H() {
      i.value && p();
    }
    return Bs(() => {
      document.addEventListener("mousedown", b, !0), window.addEventListener("scroll", H, !0), window.addEventListener("resize", H);
    }), Vs(() => {
      document.removeEventListener("mousedown", b, !0), window.removeEventListener("scroll", H, !0), window.removeEventListener("resize", H);
    }), Be(() => s.modelValue, (F) => {
      o.value && o.value.value !== F && (o.value.value = F);
    }), (F, B) => (E(), D("div", {
      class: ue(["stmp-combobox", { "has-options": e.options.length > 0 }])
    }, [
      f("input", {
        ref_key: "inputRef",
        ref: o,
        class: "text_pole",
        type: "text",
        value: e.modelValue,
        placeholder: e.placeholder,
        autocomplete: "off",
        onFocus: u,
        onInput: y,
        onKeydown: k
      }, null, 40, bh),
      e.options.length > 0 ? (E(), D("i", {
        key: 0,
        class: "fa-solid fa-chevron-down stmp-combobox-arrow",
        onMousedown: B[0] || (B[0] = $t((J) => o.value?.focus(), ["prevent"]))
      }, null, 32)) : _e("", !0),
      (E(), Qe(Dr, { to: "body" }, [
        i.value && a.value.length > 0 ? (E(), D("div", {
          key: 0,
          id: "stmp-combobox-dropdown",
          class: "stmp-combobox-dropdown",
          style: Dt(l.value)
        }, [
          (E(!0), D(oe, null, Ve(a.value, (J, j) => (E(), D("div", {
            key: J,
            class: ue(["stmp-combobox-option", { active: j === r.value }]),
            onMousedown: $t((q) => _(J), ["prevent"]),
            onMouseenter: (q) => r.value = j
          }, N(J), 43, wh))), 128))
        ], 4)) : _e("", !0)
      ]))
    ], 2));
  }
}), Sh = /* @__PURE__ */ Mt(xh, [["__scopeId", "data-v-6f1efeac"]]), Ch = { class: "stmp-settings" }, Th = { class: "stmp-tab-bar" }, Ah = ["onClick"], kh = { class: "stmp-tab-content" }, Ih = { class: "stmp-tab-panel" }, Mh = { class: "stmp-row" }, Eh = { class: "stmp-row-info" }, Ph = { class: "stmp-row-title" }, Rh = { class: "stmp-row-desc" }, Lh = { class: "stmp-chips" }, Oh = ["onClick"], $h = {
  key: 0,
  class: "stmp-row"
}, Dh = { class: "stmp-row-info" }, Nh = { class: "stmp-row-title" }, Fh = { class: "stmp-row-desc" }, Uh = { class: "stmp-chips" }, Bh = ["onClick"], Vh = {
  key: 1,
  class: "stmp-row"
}, jh = { class: "stmp-row-info" }, Hh = { class: "stmp-row-title" }, Gh = { class: "stmp-row-desc" }, Wh = {
  key: 2,
  class: "stmp-row"
}, Kh = { class: "stmp-row-info" }, zh = { class: "stmp-row-title" }, Yh = { class: "stmp-row-desc" }, Jh = {
  key: 3,
  class: "stmp-row"
}, qh = { class: "stmp-row-info" }, Xh = { class: "stmp-row-title" }, Zh = { class: "stmp-slider-wrap" }, Qh = ["value"], ep = { class: "stmp-slider-val" }, tp = { class: "stmp-tab-panel" }, sp = { class: "stmp-row" }, np = { class: "stmp-row-info" }, op = { class: "stmp-row-title" }, ip = { class: "stmp-slider-wrap" }, rp = ["value"], lp = { class: "stmp-slider-val" }, ap = { class: "stmp-row" }, cp = { class: "stmp-row-info" }, up = { class: "stmp-row-title" }, fp = { class: "stmp-chips" }, dp = ["onClick"], hp = { class: "stmp-row" }, pp = { class: "stmp-row-info" }, gp = { class: "stmp-row-title" }, mp = { class: "stmp-row-desc" }, yp = {
  key: 0,
  class: "stmp-provider-fields"
}, vp = ["onUpdate:modelValue", "placeholder"], _p = ["onUpdate:modelValue", "placeholder"], bp = { class: "stmp-row" }, wp = { class: "stmp-row-info" }, xp = { class: "stmp-row-title" }, Sp = { class: "stmp-row-desc" }, Cp = { class: "stmp-row" }, Tp = { class: "stmp-row-info" }, Ap = { class: "stmp-row-title" }, kp = { class: "stmp-row-desc" }, Ip = { class: "stmp-tab-panel" }, Mp = { class: "stmp-row" }, Ep = { class: "stmp-row-info" }, Pp = { class: "stmp-row-title" }, Rp = { class: "stmp-row-desc" }, Lp = { class: "stmp-row" }, Op = { class: "stmp-row-info" }, $p = { class: "stmp-row-title" }, Dp = { class: "stmp-row-desc" }, Np = { class: "stmp-chips" }, Fp = ["onClick"], Up = { class: "stmp-row" }, Bp = { class: "stmp-row-info" }, Vp = { class: "stmp-row-title" }, jp = { class: "stmp-row-desc" }, Hp = { class: "stmp-row" }, Gp = { class: "stmp-row-info" }, Wp = { class: "stmp-row-title" }, Kp = { class: "stmp-row-desc" }, zp = ["value"], Yp = { class: "stmp-row" }, Jp = { class: "stmp-row-info" }, qp = { class: "stmp-row-title" }, Xp = { class: "stmp-row-desc" }, Zp = ["value"], Qp = { class: "stmp-row" }, eg = { class: "stmp-row-info" }, tg = { class: "stmp-row-title" }, sg = { class: "stmp-row-desc" }, ng = { class: "stmp-model-wrap" }, og = ["title"], ig = { class: "stmp-row" }, rg = { class: "stmp-row-info" }, lg = { class: "stmp-row-title" }, ag = { class: "stmp-row-desc" }, cg = { class: "stmp-slider-wrap" }, ug = ["value"], fg = { class: "stmp-slider-val" }, dg = { class: "stmp-row" }, hg = { class: "stmp-row-info" }, pg = { class: "stmp-row-title" }, gg = { class: "stmp-row-desc" }, mg = {
  key: 0,
  class: "stmp-row"
}, yg = { class: "stmp-row-info" }, vg = { class: "stmp-row-title" }, _g = { class: "stmp-row-desc" }, bg = { class: "stmp-row" }, wg = { class: "stmp-row-info" }, xg = { class: "stmp-row-title" }, Sg = { class: "stmp-row-desc" }, Cg = { class: "stmp-chips" }, Tg = ["onClick"], Ag = { class: "stmp-row" }, kg = { class: "stmp-row-info" }, Ig = { class: "stmp-row-title" }, Mg = { class: "stmp-row-desc" }, Eg = {
  key: 0,
  class: "stmp-row"
}, Pg = { class: "stmp-row-info" }, Rg = { class: "stmp-row-title" }, Lg = { class: "stmp-row-desc" }, Og = ["title"], $g = { class: "stmp-tab-panel" }, Dg = { class: "stmp-row" }, Ng = { class: "stmp-row-info" }, Fg = { class: "stmp-row-title" }, Ug = { class: "stmp-row-desc" }, Bg = { class: "stmp-row" }, Vg = { class: "stmp-row-info" }, jg = { class: "stmp-row-title" }, Hg = { class: "stmp-row-desc" }, Gg = { class: "stmp-about" }, Wg = { class: "stmp-about-version" }, Kg = { class: "stmp-about-desc" }, zg = "https://github.com/vvb7456/ST-little-player", Yg = /* @__PURE__ */ kt({
  __name: "SettingsView",
  setup(e) {
    const t = fe(), s = ht(), n = /* @__PURE__ */ de("appearance"), o = [
      { id: "appearance", label: m("Appearance"), icon: "fa-solid fa-palette" },
      { id: "playback", label: m("Playback"), icon: "fa-solid fa-music" },
      { id: "ai", label: m("AI"), icon: "fa-solid fa-wand-magic-sparkles" },
      { id: "general", label: m("General"), icon: "fa-solid fa-sliders" }
    ], i = [
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
    function a(C) {
      const w = C.target;
      t.setOpacity(Number(w.value));
    }
    const c = [
      { value: "list", label: m("List Loop"), icon: "fa-solid fa-repeat" },
      { value: "random", label: m("Random"), icon: "fa-solid fa-shuffle" },
      { value: "single", label: m("Single Loop"), icon: "fa-solid fa-repeat" }
    ];
    function u(C) {
      const w = C.target;
      t.setVolume(Number(w.value));
    }
    const p = {
      netease: m("Network"),
      local: m("Upload"),
      custom: m("Custom API")
    }, _ = {
      netease: m("Search and play songs from the network"),
      local: m("Upload and play songs from the server"),
      custom: m("Search and play songs from a custom API")
    }, y = [
      { value: "together", label: m("Together"), icon: "fa-solid fa-link" },
      { value: "function_call", label: m("Function Call"), icon: "fa-solid fa-screwdriver-wrench" }
    ];
    function k(C) {
      t.setAiMode(C), ln()?.setMode(C);
    }
    function b(C) {
      t.setAiUseCustomApi(C), ln()?.resetFunctionCall();
    }
    function H(C) {
      const w = C ? "function_call" : "off";
      t.setAiMode(w), ln()?.setMode(w);
    }
    function F(C) {
      const w = C.target;
      t.setAiContextMessages(Number(w.value));
    }
    const B = /* @__PURE__ */ de([]), J = /* @__PURE__ */ de(!1);
    async function j() {
      if (J.value) return;
      if (!t.settings.aiApiUrl) {
        typeof toastr < "u" && toastr.warning(m("Please fill API URL"));
        return;
      }
      J.value = !0;
      try {
        const w = await fh();
        B.value = w, w.length === 0 ? typeof toastr < "u" && toastr.info(m("No models returned by endpoint")) : typeof toastr < "u" && toastr.success(`${w.length} ${m("models found")}`);
      } catch (w) {
        console.error("[晓乐] Failed to fetch models:", w), typeof toastr < "u" && toastr.error(m("Failed to fetch models"));
      } finally {
        J.value = !1;
      }
    }
    function q(C) {
      const w = t.settings.providers.find((T) => T.id === C);
      if (w) {
        if (!w.enabled && C === "local") {
          const T = SillyTavern.getContext();
          if (T?.callGenericPopup && T?.POPUP_TYPE) {
            T.callGenericPopup(
              m("Upload warning text"),
              T.POPUP_TYPE.CONFIRM,
              "",
              { okButton: m("Confirm"), cancelButton: m("Cancel") }
            ).then((x) => {
              x === 1 && (w.enabled = !0, t.save());
            });
            return;
          }
        }
        w.enabled = !w.enabled, t.save();
      }
    }
    const le = ["aiApiUrl", "aiApiKey", "aiModel"], Y = () => {
      const C = {};
      for (const [I, R] of Object.entries(t.settings))
        le.includes(I) || (C[I] = R);
      const w = new Blob([JSON.stringify(C, null, 2)], { type: "application/json" }), T = URL.createObjectURL(w), x = document.createElement("a");
      x.href = T, x.download = "st-little-player-settings.json", x.click(), URL.revokeObjectURL(T);
    }, z = () => {
      const C = document.createElement("input");
      C.type = "file", C.accept = ".json", C.onchange = async (w) => {
        const T = w.target.files?.[0];
        if (!T) return;
        const x = await T.text();
        try {
          const I = JSON.parse(x);
          if (typeof I != "object" || I === null) throw new Error("Not an object");
          const R = ["volume", "playMode", "position", "widgetMode", "dockAlign", "providers", "customOpacity", "opacity", "aiMode", "aiUseCustomApi", "aiContextMessages", "aiAutoTrigger", "aiTriggerOnGreeting", "aiCooldownMs", "togetherPromptRole", "togetherCustomPromptEnabled", "togetherCustomPrompt"], Z = {};
          for (const he of R)
            he in I && (Z[he] = I[he]);
          if (typeof Z.volume != "number" || Z.volume < 0 || Z.volume > 100)
            throw new Error("Invalid volume");
          if (typeof Z.playMode != "string" || !["list", "random", "single"].includes(Z.playMode))
            throw new Error("Invalid playMode");
          if (Z.providers && !Array.isArray(Z.providers))
            throw new Error("Invalid providers");
          Object.assign(t.settings, Z), t.save(), typeof toastr < "u" && toastr.success(m("Data imported"));
        } catch (I) {
          console.error("Import failed", I), typeof toastr < "u" && toastr.error(m("Import failed") + ": " + (I instanceof Error ? I.message : m("Invalid JSON")));
        }
      }, C.click();
    }, L = "0.1.0-beta", G = () => {
      const C = s.networkList.map((I) => ({
        song: I.song,
        artist: I.artist,
        providerId: I.providerId,
        providerTrackId: I.providerTrackId,
        providerPicId: I.providerPicId
      })), w = new Blob([JSON.stringify(C, null, 2)], { type: "application/json" }), T = URL.createObjectURL(w), x = document.createElement("a");
      x.href = T, x.download = "st-little-player-playlist.json", x.click(), URL.revokeObjectURL(T), typeof toastr < "u" && toastr.success(m("Data exported"));
    }, X = () => {
      const C = document.createElement("input");
      C.type = "file", C.accept = ".json", C.onchange = async (w) => {
        const T = w.target.files?.[0];
        if (!T) return;
        const x = await T.text();
        try {
          const I = JSON.parse(x);
          if (!Array.isArray(I)) throw new Error("Not an array");
          const R = I.filter((Z) => Z && typeof Z.song == "string").map((Z) => ({
            id: `stmp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
            song: Z.song,
            artist: Z.artist,
            source: "network",
            providerId: Z.providerId,
            providerTrackId: Z.providerTrackId,
            providerPicId: Z.providerPicId,
            addedAt: Date.now()
          }));
          s.networkList = R, s.savePlaylistData(), typeof toastr < "u" && toastr.success(m("Data imported"));
        } catch (I) {
          console.error("Playlist import failed", I), typeof toastr < "u" && toastr.error(m("Import failed") + ": " + (I instanceof Error ? I.message : m("Invalid JSON")));
        }
      }, C.click();
    };
    async function S() {
      const C = SillyTavern.getContext(), w = t.settings.togetherCustomPrompt || Al, T = ["{{xiaoyueCurrentSong}}", "{{xiaoyueCurrentArtist}}", "{{xiaoyueIsPlaying}}", "{{xiaoyueHasTrack}}", "{{xiaoyueRecentPlayed}}"], x = `<div style="margin-bottom:6px;font-size:0.85em;opacity:0.8">${m("The prompt must contain the markers")} <code class="stmp-macro-hint">&lt;!--XY_BGM_START--&gt;</code> / <code class="stmp-macro-hint">&lt;!--XY_BGM_END--&gt;</code> ${m("for BGM control to work.")}</div>`, I = T.map((me) => `<code class="stmp-macro-hint">${me}</code>`).join(" "), R = `<div style="margin-bottom:8px;font-size:0.85em;opacity:0.7">${m("Available macros:")} ${I}</div>`, Z = x + R;
      $("#dialogue_popup_cancel").css("display", "flex"), $("#dialogue_popup_controls .menu_button").css("width", "unset");
      const he = await C.callPopup(Z, "input", w, { wide: !0, rows: 20, okButton: m("Save") });
      he !== !1 && t.setTogetherCustomPrompt(String(he).trim());
    }
    return (C, w) => (E(), D("div", Ch, [
      f("div", Th, [
        (E(), D(oe, null, Ve(o, (T) => f("div", {
          key: T.id,
          class: ue(["stmp-tab", { active: n.value === T.id }]),
          onClick: (x) => n.value = T.id
        }, [
          f("i", {
            class: ue(T.icon)
          }, null, 2),
          f("span", null, N(T.label), 1)
        ], 10, Ah)), 64))
      ]),
      f("div", kh, [
        Wt(f("div", Ih, [
          f("div", Mh, [
            f("div", Eh, [
              f("div", Ph, N(g(m)("Widget Mode")), 1),
              f("div", Rh, N(g(m)("Choose how the player widget is displayed")), 1)
            ]),
            f("div", Lh, [
              (E(), D(oe, null, Ve(i, (T) => f("div", {
                key: T.value,
                class: ue(["stmp-chip", { active: g(t).settings.widgetMode === T.value }]),
                onClick: (x) => g(t).setWidgetMode(T.value)
              }, [
                f("i", {
                  class: ue(T.icon)
                }, null, 2),
                f("span", null, N(T.label), 1)
              ], 10, Oh)), 64))
            ])
          ]),
          g(t).settings.widgetMode === "dock" ? (E(), D("div", $h, [
            f("div", Dh, [
              f("div", Nh, N(g(m)("Dock Alignment")), 1),
              f("div", Fh, N(g(m)("Align the docked player to a corner of the screen")), 1)
            ]),
            f("div", Uh, [
              (E(), D(oe, null, Ve(r, (T) => f("div", {
                key: T.value,
                class: ue(["stmp-chip", { active: g(t).settings.dockAlign === T.value }]),
                onClick: (x) => g(t).setDockAlign(T.value)
              }, [
                f("i", {
                  class: ue(T.icon)
                }, null, 2),
                f("span", null, N(T.label), 1)
              ], 10, Bh)), 64))
            ])
          ])) : _e("", !0),
          g(t).settings.widgetMode === "drag" ? (E(), D("div", Vh, [
            f("div", jh, [
              f("div", Hh, N(g(m)("Show track info in drag mini")), 1),
              f("div", Gh, N(g(m)("Show song title and lyrics in the compact drag widget")), 1)
            ]),
            re(Pt, {
              "model-value": g(t).settings.showDragMiniText,
              "onUpdate:modelValue": g(t).setShowDragMiniText
            }, null, 8, ["model-value", "onUpdate:modelValue"])
          ])) : _e("", !0),
          l() ? (E(), D("div", Wh, [
            f("div", Kh, [
              f("div", zh, N(g(m)("Custom opacity")), 1),
              f("div", Yh, N(g(m)("Adjust the player background opacity")), 1)
            ]),
            re(Pt, {
              "model-value": g(t).settings.customOpacity,
              "onUpdate:modelValue": g(t).setCustomOpacity
            }, null, 8, ["model-value", "onUpdate:modelValue"])
          ])) : _e("", !0),
          g(t).settings.customOpacity ? (E(), D("div", Jh, [
            f("div", qh, [
              f("div", Xh, N(g(m)("Opacity")), 1)
            ]),
            f("div", Zh, [
              f("input", {
                type: "range",
                class: "stmp-slider",
                min: "0",
                max: "100",
                value: g(t).settings.opacity,
                onInput: a
              }, null, 40, Qh),
              f("span", ep, N(g(t).settings.opacity) + "%", 1)
            ])
          ])) : _e("", !0)
        ], 512), [
          [Js, n.value === "appearance"]
        ]),
        Wt(f("div", tp, [
          f("div", sp, [
            f("div", np, [
              f("div", op, N(g(m)("Default Volume")), 1)
            ]),
            f("div", ip, [
              f("input", {
                type: "range",
                class: "stmp-slider",
                min: "0",
                max: "100",
                value: g(t).settings.volume,
                onInput: u
              }, null, 40, rp),
              f("span", lp, N(g(t).settings.volume), 1)
            ])
          ]),
          f("div", ap, [
            f("div", cp, [
              f("div", up, N(g(m)("Default Play Mode")), 1)
            ]),
            f("div", fp, [
              (E(), D(oe, null, Ve(c, (T) => f("div", {
                key: T.value,
                class: ue(["stmp-chip", { active: g(t).settings.playMode === T.value }]),
                onClick: (x) => g(t).setPlayMode(T.value)
              }, [
                f("i", {
                  class: ue(T.icon)
                }, null, 2),
                f("span", null, N(T.label), 1)
              ], 10, dp)), 64))
            ])
          ]),
          (E(!0), D(oe, null, Ve(g(t).settings.providers, (T) => (E(), D("div", {
            key: T.id
          }, [
            f("div", hp, [
              f("div", pp, [
                f("div", gp, N(p[T.id] || T.id), 1),
                f("div", mp, N(_[T.id]), 1)
              ]),
              re(Pt, {
                "model-value": T.enabled,
                "onUpdate:modelValue": () => q(T.id)
              }, null, 8, ["model-value", "onUpdate:modelValue"])
            ]),
            T.id === "custom" && T.enabled ? (E(), D("div", yp, [
              Wt(f("input", {
                class: "text_pole",
                "onUpdate:modelValue": (x) => T.config.searchURL = x,
                placeholder: g(m)("Search URL"),
                onChange: w[0] || (w[0] = (x) => g(t).save())
              }, null, 40, vp), [
                [vo, T.config.searchURL]
              ]),
              Wt(f("input", {
                class: "text_pole",
                "onUpdate:modelValue": (x) => T.config.resolveURL = x,
                placeholder: g(m)("Resolve URL"),
                onChange: w[1] || (w[1] = (x) => g(t).save())
              }, null, 40, _p), [
                [vo, T.config.resolveURL]
              ])
            ])) : _e("", !0)
          ]))), 128)),
          w[10] || (w[10] = f("div", { class: "stmp-separator" }, null, -1)),
          f("div", bp, [
            f("div", wp, [
              f("div", xp, N(g(m)("Export playlist")), 1),
              f("div", Sp, N(g(m)("Save network playlist to a JSON file")), 1)
            ]),
            f("div", {
              class: "menu_button menu_button_icon stmp-action-btn",
              onClick: G
            }, [...w[8] || (w[8] = [
              f("i", { class: "fa-solid fa-file-export" }, null, -1)
            ])])
          ]),
          f("div", Cp, [
            f("div", Tp, [
              f("div", Ap, N(g(m)("Import playlist")), 1),
              f("div", kp, N(g(m)("Load network playlist from a JSON file")), 1)
            ]),
            f("div", {
              class: "menu_button menu_button_icon stmp-action-btn",
              onClick: X
            }, [...w[9] || (w[9] = [
              f("i", { class: "fa-solid fa-file-import" }, null, -1)
            ])])
          ])
        ], 512), [
          [Js, n.value === "playback"]
        ]),
        Wt(f("div", Ip, [
          f("div", Mp, [
            f("div", Ep, [
              f("div", Pp, N(g(m)("AI BGM")), 1),
              f("div", Rp, N(g(m)("Enable AI-driven background music selection")), 1)
            ]),
            re(Pt, {
              "model-value": g(t).settings.aiMode !== "off",
              "onUpdate:modelValue": w[2] || (w[2] = (T) => H(T))
            }, null, 8, ["model-value"])
          ]),
          g(t).settings.aiMode !== "off" ? (E(), D(oe, { key: 0 }, [
            f("div", Lp, [
              f("div", Op, [
                f("div", $p, N(g(m)("AI Mode")), 1),
                f("div", Dp, N(g(m)("Choose how AI selects background music")), 1)
              ]),
              f("div", Np, [
                (E(), D(oe, null, Ve(y, (T) => f("div", {
                  key: T.value,
                  class: ue(["stmp-chip", { active: g(t).settings.aiMode === T.value }]),
                  onClick: (x) => k(T.value)
                }, [
                  f("i", {
                    class: ue(T.icon)
                  }, null, 2),
                  f("span", null, N(T.label), 1)
                ], 10, Fp)), 64))
              ])
            ]),
            g(t).settings.aiMode === "function_call" ? (E(), D(oe, { key: 0 }, [
              f("div", Up, [
                f("div", Bp, [
                  f("div", Vp, N(g(m)("Custom API")), 1),
                  f("div", jp, N(g(m)("Use a separate API endpoint for BGM agent loop instead of main API function calling")), 1)
                ]),
                re(Pt, {
                  "model-value": g(t).settings.aiUseCustomApi,
                  "onUpdate:modelValue": b
                }, null, 8, ["model-value"])
              ]),
              g(t).settings.aiUseCustomApi ? (E(), D(oe, { key: 0 }, [
                f("div", Hp, [
                  f("div", Gp, [
                    f("div", Wp, N(g(m)("API URL")), 1),
                    f("div", Kp, N(g(m)("OpenAI-compatible endpoint that supports tool calling")), 1)
                  ]),
                  f("input", {
                    class: "text_pole stmp-text-input",
                    value: g(t).settings.aiApiUrl,
                    placeholder: "",
                    onChange: w[3] || (w[3] = (T) => g(t).setAiApiUrl(T.target.value.trim()))
                  }, null, 40, zp)
                ]),
                f("div", Yp, [
                  f("div", Jp, [
                    f("div", qp, N(g(m)("API Key")), 1),
                    f("div", Xp, N(g(m)("Bearer token for the custom endpoint")), 1)
                  ]),
                  f("input", {
                    type: "password",
                    class: "text_pole stmp-text-input",
                    value: g(t).settings.aiApiKey,
                    placeholder: "",
                    onChange: w[4] || (w[4] = (T) => g(t).setAiApiKey(T.target.value.trim()))
                  }, null, 40, Zp)
                ]),
                f("div", Qp, [
                  f("div", eg, [
                    f("div", tg, N(g(m)("Model")), 1),
                    f("div", sg, N(g(m)("Model that supports tool calling")), 1)
                  ]),
                  f("div", ng, [
                    re(Sh, {
                      "model-value": g(t).settings.aiModel,
                      options: B.value,
                      placeholder: "",
                      "onUpdate:modelValue": w[5] || (w[5] = (T) => g(t).setAiModel(T))
                    }, null, 8, ["model-value", "options"]),
                    f("div", {
                      class: ue(["menu_button menu_button_icon stmp-model-fetch", { "stmp-spin": J.value }]),
                      title: g(m)("Connect"),
                      onClick: j
                    }, [...w[11] || (w[11] = [
                      f("i", { class: "fa-solid fa-plug" }, null, -1)
                    ])], 10, og)
                  ])
                ]),
                f("div", ig, [
                  f("div", rg, [
                    f("div", lg, N(g(m)("Context Messages")), 1),
                    f("div", ag, N(g(m)("Number of recent chat messages to send to AI")), 1)
                  ]),
                  f("div", cg, [
                    f("input", {
                      type: "range",
                      class: "stmp-slider",
                      min: "2",
                      max: "20",
                      value: g(t).settings.aiContextMessages,
                      onInput: F
                    }, null, 40, ug),
                    f("span", fg, N(g(t).settings.aiContextMessages), 1)
                  ])
                ]),
                f("div", dg, [
                  f("div", hg, [
                    f("div", pg, N(g(m)("Auto Trigger")), 1),
                    f("div", gg, N(g(m)("Automatically analyze new messages and select music")), 1)
                  ]),
                  re(Pt, {
                    "model-value": g(t).settings.aiAutoTrigger,
                    "onUpdate:modelValue": w[6] || (w[6] = (T) => g(t).setAiAutoTrigger(T))
                  }, null, 8, ["model-value"])
                ]),
                g(t).settings.aiAutoTrigger ? (E(), D("div", mg, [
                  f("div", yg, [
                    f("div", vg, N(g(m)("Trigger on Greeting")), 1),
                    f("div", _g, N(g(m)("Analyze BGM when loading a character card (first message)")), 1)
                  ]),
                  re(Pt, {
                    "model-value": g(t).settings.aiTriggerOnGreeting,
                    "onUpdate:modelValue": w[7] || (w[7] = (T) => g(t).setAiTriggerOnGreeting(T))
                  }, null, 8, ["model-value"])
                ])) : _e("", !0)
              ], 64)) : _e("", !0)
            ], 64)) : _e("", !0),
            g(t).settings.aiMode === "together" ? (E(), D(oe, { key: 1 }, [
              f("div", bg, [
                f("div", wg, [
                  f("div", xg, N(g(m)("Prompt Role")), 1),
                  f("div", Sg, N(g(m)("Role used when injecting BGM instructions into the main AI")), 1)
                ]),
                f("div", Cg, [
                  (E(!0), D(oe, null, Ve([{ v: "system", l: g(m)("System") }, { v: "user", l: g(m)("User") }], (T) => (E(), D("div", {
                    key: T.v,
                    class: ue(["stmp-chip", { active: g(t).settings.togetherPromptRole === T.v }]),
                    onClick: (x) => g(t).setTogetherPromptRole(T.v)
                  }, [
                    f("span", null, N(T.l), 1)
                  ], 10, Tg))), 128))
                ])
              ]),
              f("div", Ag, [
                f("div", kg, [
                  f("div", Ig, N(g(m)("Custom Prompt")), 1),
                  f("div", Mg, [
                    on(N(g(m)("Edit the BGM instruction prompt. Use macros like ")) + " ", 1),
                    w[12] || (w[12] = f("code", null, "{{xiaoyueCurrentSong}}", -1)),
                    on(" " + N(g(m)(" for dynamic values.")), 1)
                  ])
                ]),
                re(Pt, {
                  "model-value": g(t).settings.togetherCustomPromptEnabled,
                  "onUpdate:modelValue": g(t).setTogetherCustomPromptEnabled
                }, null, 8, ["model-value", "onUpdate:modelValue"])
              ]),
              g(t).settings.togetherCustomPromptEnabled ? (E(), D("div", Eg, [
                f("div", Pg, [
                  f("div", Rg, N(g(m)("Edit Prompt")), 1),
                  f("div", Lg, N(g(m)("Click to edit the BGM instruction prompt")), 1)
                ]),
                f("div", {
                  class: "menu_button menu_button_icon stmp-action-btn",
                  title: g(m)("Edit Prompt"),
                  onClick: S
                }, [...w[13] || (w[13] = [
                  f("i", { class: "fa-solid fa-pen-to-square" }, null, -1)
                ])], 8, Og)
              ])) : _e("", !0)
            ], 64)) : _e("", !0)
          ], 64)) : _e("", !0)
        ], 512), [
          [Js, n.value === "ai"]
        ]),
        Wt(f("div", $g, [
          f("div", Dg, [
            f("div", Ng, [
              f("div", Fg, N(g(m)("Export data")), 1),
              f("div", Ug, N(g(m)("Save your settings to a JSON file")), 1)
            ]),
            f("div", {
              class: "menu_button menu_button_icon stmp-action-btn",
              onClick: Y
            }, [...w[14] || (w[14] = [
              f("i", { class: "fa-solid fa-file-export" }, null, -1)
            ])])
          ]),
          f("div", Bg, [
            f("div", Vg, [
              f("div", jg, N(g(m)("Import data")), 1),
              f("div", Hg, N(g(m)("Load settings from a JSON file")), 1)
            ]),
            f("div", {
              class: "menu_button menu_button_icon stmp-action-btn",
              onClick: z
            }, [...w[15] || (w[15] = [
              f("i", { class: "fa-solid fa-file-import" }, null, -1)
            ])])
          ]),
          f("div", Gg, [
            w[17] || (w[17] = f("div", { class: "stmp-about-icon" }, [
              f("i", { class: "fa-solid fa-music" })
            ], -1)),
            w[18] || (w[18] = f("div", { class: "stmp-about-name" }, "晓乐", -1)),
            f("div", Wg, N(g(m)("Version")) + " " + N(g(L)), 1),
            f("div", Kg, N(g(m)("A scene-aware music player extension for SillyTavern")), 1),
            f("a", {
              href: zg,
              target: "_blank",
              rel: "noopener",
              class: "stmp-about-link"
            }, [...w[16] || (w[16] = [
              f("i", { class: "fa-brands fa-github" }, null, -1),
              f("span", null, "GitHub", -1)
            ])]),
            w[19] || (w[19] = f("div", { class: "stmp-about-copyright" }, [
              f("a", {
                href: "https://www.erocraft.com",
                target: "_blank",
                rel: "noopener"
              }, "艾萝工坊"),
              on(" © 2015 - 2026")
            ], -1))
          ])
        ], 512), [
          [Js, n.value === "general"]
        ])
      ])
    ]));
  }
}), Jg = /* @__PURE__ */ Mt(Yg, [["__scopeId", "data-v-e4c85494"]]);
class qg {
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
      const o = this.listeners.get(t);
      o && (o.delete(s), o.size === 0 && this.listeners.delete(t));
    };
  }
  /** Start bridging: register ST event listeners. Safe to call once. */
  start() {
    if (this.registered.length > 0) return;
    const t = SillyTavern.getContext(), s = t.eventSource, n = t.event_types, o = (i, r, l) => {
      const a = (...c) => {
        const u = l(c[0]);
        this.emit(r, u);
      };
      s.on(i, a), this.registered.push({ event: i, handler: a });
    };
    o(n.CHAT_CHANGED, "chat-changed", (i) => ({
      chatId: typeof i == "string" ? i : void 0
    })), o(n.GENERATION_ENDED, "message-generated", (i) => ({
      messageId: en(i)
    })), o(n.MESSAGE_UPDATED, "message-updated", (i) => ({
      messageId: en(i)
    })), o(n.MESSAGE_DELETED, "message-deleted", (i) => ({
      messageId: en(i)
    })), o(n.MESSAGE_SWIPED, "message-swiped", (i) => ({
      messageId: en(i)
    }));
  }
  /** Stop bridging: remove all ST event listeners. */
  stop() {
    if (this.registered.length === 0) return;
    const s = SillyTavern.getContext().eventSource;
    for (const { event: n, handler: o } of this.registered)
      s.removeListener(n, o);
    this.registered = [];
  }
  /** Invoke all listeners for an internal event. */
  emit(t, s) {
    const n = this.listeners.get(t);
    if (n)
      for (const o of n)
        try {
          o(s);
        } catch (i) {
          console.error("[STEventBridge] listener error:", i);
        }
  }
}
function en(e) {
  if (e == null) return;
  const t = typeof e == "number" ? e : parseInt(String(e), 10);
  return Number.isFinite(t) ? t : void 0;
}
function Xg() {
  return new qg();
}
const Zg = [
  /<bgm>当前bgm[:：](.+?) - (.+?)<\/bgm>/g,
  /<bgm>当前bgm[:：](.+?)<\/bgm>/g,
  /<bgm>(.+?) - (.+?)<\/bgm>/g,
  /<bgm>(.+?)<\/bgm>/g,
  /【BGM】(.+?)(?: - (.+?))?【\/BGM】/g,
  /\[music\](.+?)(?: - (.+?))?\[\/music\]/g
];
function Qg(e, t) {
  const s = [], n = new RegExp(e.source, "g");
  let o;
  for (; (o = n.exec(t)) !== null; ) {
    o.index === n.lastIndex && n.lastIndex++;
    const i = o[1];
    if (i === void 0 || i === "") continue;
    const r = o[2], l = {
      song: i.trim(),
      artist: r !== void 0 && r !== "" ? r.trim() : void 0,
      raw: o[0]
    };
    s.push({ index: o.index, cue: l });
  }
  return s;
}
function Xi(e) {
  const t = /* @__PURE__ */ new Map(), s = (n) => {
    t.has(n.index) || t.set(n.index, n);
  };
  for (const n of Zg)
    for (const o of Qg(n, e)) s(o);
  return [...t.values()].sort((n, o) => n.index - o.index).map((n) => n.cue);
}
class em {
  constructor(t) {
    this.cursors = /* @__PURE__ */ new Map(), this.getChatMessage = t;
  }
  scanIncremental(t, s, n) {
    const o = [];
    for (let i = s; i <= n; i++) {
      const r = this.getChatMessage(i);
      if (r === void 0) continue;
      const l = Xi(r);
      if (l.length === 0) continue;
      const a = l.at(-1);
      o.push({ messageId: i, cues: [a] });
    }
    return this.cursors.set(t, {
      chatId: t,
      lastScannedMessageId: n,
      updatedAt: Date.now()
    }), o;
  }
  scanMessage(t, s) {
    const n = this.getChatMessage(s);
    if (n === void 0)
      return { messageId: s, cue: null };
    const o = Xi(n), i = o.length > 0 ? o.at(-1) : null;
    return { messageId: s, cue: i };
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
const Gl = [
  {
    name: "xiaoyueCurrentSong",
    description: "Name of the currently loaded track. Empty if no track is loaded.",
    fn: () => {
      try {
        return xe().currentTrack?.name ?? "";
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
        return xe().currentTrack?.artist ?? "";
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
        return String(xe().isPlaying);
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
        return String(!!xe().currentTrack);
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
        return Cl(5).join(", ");
      } catch {
        return "";
      }
    }
  }
];
function tm() {
  const e = SillyTavern.getContext(), t = e.macros, s = e.MacrosParser;
  for (const n of Gl)
    t?.register ? t.register(n.name, {
      category: "misc",
      description: n.description,
      handler: n.fn
    }) : s?.registerMacro && s.registerMacro(n.name, n.fn, n.description);
}
function sm() {
  const e = SillyTavern.getContext(), t = e.macros, s = e.MacrosParser;
  for (const n of Gl)
    t?.registry?.unregisterMacro ? t.registry.unregisterMacro(n.name) : s?.unregisterMacro && s.unregisterMacro(n.name);
}
const lt = "xy", Is = [];
function no(e) {
  return e == null ? "" : typeof e == "string" ? e : Array.isArray(e) ? e.map(String).join(" ").trim() : String(e);
}
function nm() {
  const e = SillyTavern.getContext(), { SlashCommandParser: t, SlashCommand: s } = e, n = (o) => {
    const i = s.fromProps(o);
    if (t.addCommandObject(i), typeof o.name == "string" && Is.push(o.name), Array.isArray(o.aliases))
      for (const r of o.aliases) Is.push(String(r));
  };
  n({
    name: `${lt}play`,
    aliases: [`${lt}p`],
    helpString: "Toggle play/pause. With a song name argument, searches and plays it immediately.",
    callback: async (o, i) => {
      const r = no(i).trim();
      if (!r)
        return await xe().togglePlay(), "";
      const l = fe(), c = await At(l.settings.providers).searchAndResolve(r);
      return c ? (c.name = r, await xe().loadAndPlay(c), typeof toastr < "u" && toastr.success(c.name)) : typeof toastr < "u" && toastr.warning(`${m("Cannot play")}: ${r}`), "";
    }
  }), n({
    name: `${lt}next`,
    aliases: [`${lt}n`],
    helpString: "Skip to the next track.",
    callback: async () => (ht().next(), "")
  }), n({
    name: `${lt}prev`,
    aliases: [`${lt}pp`],
    helpString: "Go back to the previous track.",
    callback: async () => (ht().prev(), "")
  }), n({
    name: `${lt}vol`,
    helpString: "Get or set the player volume (0-100). No argument shows the current volume.",
    callback: async (o, i) => {
      const r = no(i).trim(), l = xe();
      if (!r)
        return String(l.volume);
      const a = parseInt(r, 10);
      return Number.isNaN(a) || a < 0 || a > 100 ? (typeof toastr < "u" && toastr.warning(m("Volume must be 0-100")), "") : (l.setVolume(a), fe().setVolume(a), typeof toastr < "u" && toastr.success(`${m("Volume")}: ${a}`), "");
    }
  }), n({
    name: `${lt}add`,
    helpString: "Search for a song and add it to the playlist.",
    callback: async (o, i) => {
      const r = no(i).trim();
      if (!r)
        return typeof toastr < "u" && toastr.warning(m("Search Song...")), "";
      const l = fe(), c = await At(l.settings.providers).searchAll(r);
      return c.length === 0 ? (typeof toastr < "u" && toastr.info(m("No results")), "") : (ht().addFromSearch(c[0], !1), typeof toastr < "u" && toastr.success(`${c[0].name} - ${c[0].artist}`), "");
    }
  }), n({
    name: `${lt}bgm`,
    helpString: "Manually trigger AI BGM analysis for the current conversation.",
    callback: async () => {
      const o = ln();
      return o ? (await o.manualTrigger(), "") : (typeof toastr < "u" && toastr.warning(m("AI BGM") + ": " + m("Off")), "");
    }
  }), n({
    name: `${lt}now`,
    helpString: "Show information about the currently playing track.",
    callback: async () => {
      const o = xe(), i = o.currentTrack;
      if (!i)
        return typeof toastr < "u" && toastr.info(m("No Song")), "";
      const r = i.artist ? ` - ${i.artist}` : "", l = o.isPlaying ? "▶" : "⏸";
      return typeof toastr < "u" && toastr.info(`${l} ${i.name}${r}`), `${i.name}${r}`;
    }
  }), console.log(`[晓乐] Slash commands registered: ${Is.join(", ")}`);
}
function om() {
  const e = SillyTavern.getContext(), { SlashCommandParser: t } = e;
  if (t?.commands) {
    for (const s of Is)
      s in t.commands && delete t.commands[s];
    Is.length = 0;
  }
}
let rs = null, _t = null, Ms = null, Es = null, ls = null, Cn = null, Tn = null;
const im = `
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
function rm() {
  const e = $("#extensions_settings2");
  if (!e || !e.length || (e.append(im), Es = e.children(".inline-drawer").last()[0] ?? null, !Es)) return;
  const t = Es.querySelector("#stmp-settings-mount");
  t && Cn && (ls = pl(Jg), ls.use(Cn), ls.mount(t));
}
function lm() {
  ls && (ls.unmount(), ls = null), Es?.remove(), Es = null;
}
function am(e, t) {
  _t = Xg(), _t.on("chat-changed", () => {
    const s = SillyTavern.getContext(), n = s.chatId ?? String(Date.now());
    if (t.setChatId(n), t.getCursor() < 0 && s.chat.length > 0) {
      const o = e.scanIncremental(
        n,
        0,
        s.chat.length - 1
      );
      console.log("[晓乐] chat-changed: scanned", s.chat.length, "messages, found", o.length, "cues"), t.handleNewCues(o), t.setCursor(s.chat.length - 1);
    }
  }), _t.on("message-generated", (s) => {
    const n = SillyTavern.getContext(), o = t.chatId ?? n.chatId ?? "";
    if (!o || s.messageId === void 0) return;
    const i = t.getCursor() + 1, r = s.messageId;
    if (r < i) return;
    const l = e.scanIncremental(
      o,
      i,
      r
    );
    console.log("[晓乐] message-generated: scanned", i, "-", r, "found", l.length, "cues"), t.handleNewCues(l), t.setCursor(r);
  }), _t.on("message-updated", (s) => {
    s.messageId !== void 0 && t.handleMessageUpdate(s.messageId);
  }), _t.on("message-deleted", (s) => {
    s.messageId !== void 0 && t.handleMessageDelete(s.messageId);
  }), _t.on("message-swiped", (s) => {
    s.messageId !== void 0 && t.handleMessageUpdate(s.messageId);
  }), _t.start();
}
function cm(e, t) {
  const s = SillyTavern.getContext();
  if (s.chatId && s.chat.length > 0 && (t.setChatId(s.chatId), t.getCursor() < 0)) {
    const n = e.scanIncremental(
      s.chatId,
      0,
      s.chat.length - 1
    );
    t.handleNewCues(n), t.setCursor(s.chat.length - 1);
  }
}
async function dm() {
  try {
    const e = document.createElement("div");
    e.id = "st-little-player-root", document.body.appendChild(e);
    const t = Au();
    Cn = t, rs = pl(Rd), rs.use(t), rs.mount(e);
    const s = fe(), n = Nu();
    s.init(n);
    const o = xe();
    o.init(), o.setVolume(s.settings.volume);
    const i = new em((a) => SillyTavern.getContext().chat[a]?.mes), r = ht();
    r.init(i), rm();
    const l = SillyTavern.getContext();
    Ms = () => {
      am(i, r), cm(i, r), tm(), nm(), Tn = new gh(), Tn.init();
    }, l.eventSource.on(l.event_types.APP_READY, Ms), console.log("[晓乐] 播放器加载完成");
  } catch (e) {
    console.error("[晓乐] init failed:", e);
  }
}
function um() {
  if (Ms) {
    try {
      const t = SillyTavern.getContext();
      t.eventSource.removeListener(t.event_types.APP_READY, Ms);
    } catch {
    }
    Ms = null;
  }
  if (_t?.stop(), _t = null, sm(), om(), Tn?.destroy(), Tn = null, rs) {
    try {
      xe().destroy();
    } catch {
    }
    rs.unmount(), rs = null;
  }
  const e = document.getElementById("st-little-player-root");
  e && e.remove(), lm(), Cn = null;
}
function hm() {
  um();
}
async function pm() {
  try {
    const e = SillyTavern.getContext(), t = e.extensionSettings[`${wt}-playlist`];
    if (t && typeof t == "object") {
      const n = t.server;
      if (Array.isArray(n)) {
        const o = n.map((i) => i?.serverPath).filter((i) => !!i);
        await Promise.all(o.map((i) => bl(i).catch((r) => {
          console.warn("[晓乐] clean: failed to delete file:", i, r);
        })));
      }
    }
    delete e.extensionSettings[wt], delete e.extensionSettings[`${wt}-playlist`], e.saveSettingsDebounced();
    const s = e.chatMetadata;
    s && typeof s == "object" && (delete s[wo], delete s[Vo], await e.saveMetadata());
  } catch (e) {
    console.error("[晓乐] clean: failed to delete settings:", e);
  }
}
export {
  pm as clean,
  um as destroy,
  hm as disable,
  dm as init
};
