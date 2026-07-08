/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function xo(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const s of t.split(",")) e[s] = 1;
  return (s) => s in e;
}
const bt = {}, ss = [], pe = () => {
}, Yi = () => !1, Sn = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), Tn = (t) => t.startsWith("onUpdate:"), It = Object.assign, So = (t, e) => {
  const s = t.indexOf(e);
  s > -1 && t.splice(s, 1);
}, Bl = Object.prototype.hasOwnProperty, pt = (t, e) => Bl.call(t, e), st = Array.isArray, ns = (t) => Ds(t) === "[object Map]", Ji = (t) => Ds(t) === "[object Set]", Go = (t) => Ds(t) === "[object Date]", rt = (t) => typeof t == "function", xt = (t) => typeof t == "string", Jt = (t) => typeof t == "symbol", ht = (t) => t !== null && typeof t == "object", qi = (t) => (ht(t) || rt(t)) && rt(t.then) && rt(t.catch), Xi = Object.prototype.toString, Ds = (t) => Xi.call(t), jl = (t) => Ds(t).slice(8, -1), Zi = (t) => Ds(t) === "[object Object]", Cn = (t) => xt(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, vs = /* @__PURE__ */ xo(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), An = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (s) => e[s] || (e[s] = t(s));
}, Vl = /-\w/g, Zt = An(
  (t) => t.replace(Vl, (e) => e.slice(1).toUpperCase())
), Hl = /\B([A-Z])/g, Ne = An(
  (t) => t.replace(Hl, "-$1").toLowerCase()
), Qi = An((t) => t.charAt(0).toUpperCase() + t.slice(1)), Bn = An(
  (t) => t ? `on${Qi(t)}` : ""
), de = (t, e) => !Object.is(t, e), Zs = (t, ...e) => {
  for (let s = 0; s < t.length; s++)
    t[s](...e);
}, tr = (t, e, s, n = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, To = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
}, Gl = (t) => {
  const e = xt(t) ? Number(t) : NaN;
  return isNaN(e) ? t : e;
};
let Wo;
const kn = () => Wo || (Wo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Le(t) {
  if (st(t)) {
    const e = {};
    for (let s = 0; s < t.length; s++) {
      const n = t[s], o = xt(n) ? Yl(n) : Le(n);
      if (o)
        for (const i in o)
          e[i] = o[i];
    }
    return e;
  } else if (xt(t) || ht(t))
    return t;
}
const Wl = /;(?![^(]*\))/g, Kl = /:([^]+)/, zl = /\/\*[^]*?\*\//g;
function Yl(t) {
  const e = {};
  return t.replace(zl, "").split(Wl).forEach((s) => {
    if (s) {
      const n = s.split(Kl);
      n.length > 1 && (e[n[0].trim()] = n[1].trim());
    }
  }), e;
}
function at(t) {
  let e = "";
  if (xt(t))
    e = t;
  else if (st(t))
    for (let s = 0; s < t.length; s++) {
      const n = at(t[s]);
      n && (e += n + " ");
    }
  else if (ht(t))
    for (const s in t)
      t[s] && (e += s + " ");
  return e.trim();
}
const Jl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ql = /* @__PURE__ */ xo(Jl);
function er(t) {
  return !!t || t === "";
}
function Xl(t, e) {
  if (t.length !== e.length) return !1;
  let s = !0;
  for (let n = 0; s && n < t.length; n++)
    s = Co(t[n], e[n]);
  return s;
}
function Co(t, e) {
  if (t === e) return !0;
  let s = Go(t), n = Go(e);
  if (s || n)
    return s && n ? t.getTime() === e.getTime() : !1;
  if (s = Jt(t), n = Jt(e), s || n)
    return t === e;
  if (s = st(t), n = st(e), s || n)
    return s && n ? Xl(t, e) : !1;
  if (s = ht(t), n = ht(e), s || n) {
    if (!s || !n)
      return !1;
    const o = Object.keys(t).length, i = Object.keys(e).length;
    if (o !== i)
      return !1;
    for (const r in t) {
      const l = t.hasOwnProperty(r), a = e.hasOwnProperty(r);
      if (l && !a || !l && a || !Co(t[r], e[r]))
        return !1;
    }
  }
  return String(t) === String(e);
}
const sr = (t) => !!(t && t.__v_isRef === !0), D = (t) => xt(t) ? t : t == null ? "" : st(t) || ht(t) && (t.toString === Xi || !rt(t.toString)) ? sr(t) ? D(t.value) : JSON.stringify(t, nr, 2) : String(t), nr = (t, e) => sr(e) ? nr(t, e.value) : ns(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (s, [n, o], i) => (s[jn(n, i) + " =>"] = o, s),
    {}
  )
} : Ji(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((s) => jn(s))
} : Jt(e) ? jn(e) : ht(e) && !st(e) && !Zi(e) ? String(e) : e, jn = (t, e = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Jt(t) ? `Symbol(${(s = t.description) != null ? s : e})` : t
  );
};
/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Mt;
class or {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && Mt && (Mt.active ? (this.parent = Mt, this.index = (Mt.scopes || (Mt.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let e, s;
      if (this.scopes)
        for (e = 0, s = this.scopes.length; e < s; e++)
          this.scopes[e].pause();
      for (e = 0, s = this.effects.length; e < s; e++)
        this.effects[e].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let e, s;
      if (this.scopes)
        for (e = 0, s = this.scopes.length; e < s; e++)
          this.scopes[e].resume();
      for (e = 0, s = this.effects.length; e < s; e++)
        this.effects[e].resume();
    }
  }
  run(e) {
    if (this._active) {
      const s = Mt;
      try {
        return Mt = this, e();
      } finally {
        Mt = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Mt, Mt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Mt === this)
        Mt = this.prevScope;
      else {
        let e = Mt;
        for (; e; ) {
          if (e.prevScope === this) {
            e.prevScope = this.prevScope;
            break;
          }
          e = e.prevScope;
        }
      }
      this.prevScope = void 0;
    }
  }
  stop(e) {
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
      if (!this.detached && this.parent && !e) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function ir(t) {
  return new or(t);
}
function rr() {
  return Mt;
}
function Zl(t, e = !1) {
  Mt && Mt.cleanups.push(t);
}
let wt;
const Vn = /* @__PURE__ */ new WeakSet();
class lr {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Mt && (Mt.active ? Mt.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Vn.has(this) && (Vn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || cr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ko(this), ur(this);
    const e = wt, s = Qt;
    wt = this, Qt = !0;
    try {
      return this.fn();
    } finally {
      fr(this), wt = e, Qt = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        Eo(e);
      this.deps = this.depsTail = void 0, Ko(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Vn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    so(this) && this.run();
  }
  get dirty() {
    return so(this);
  }
}
let ar = 0, _s, bs;
function cr(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = bs, bs = t;
    return;
  }
  t.next = _s, _s = t;
}
function Ao() {
  ar++;
}
function ko() {
  if (--ar > 0)
    return;
  if (bs) {
    let e = bs;
    for (bs = void 0; e; ) {
      const s = e.next;
      e.next = void 0, e.flags &= -9, e = s;
    }
  }
  let t;
  for (; _s; ) {
    let e = _s;
    for (_s = void 0; e; ) {
      const s = e.next;
      if (e.next = void 0, e.flags &= -9, e.flags & 1)
        try {
          e.trigger();
        } catch (n) {
          t || (t = n);
        }
      e = s;
    }
  }
  if (t) throw t;
}
function ur(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function fr(t) {
  let e, s = t.depsTail, n = s;
  for (; n; ) {
    const o = n.prevDep;
    n.version === -1 ? (n === s && (s = o), Eo(n), Ql(n)) : e = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = o;
  }
  t.deps = e, t.depsTail = s;
}
function so(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (dr(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function dr(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Ps) || (t.globalVersion = Ps, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !so(t))))
    return;
  t.flags |= 2;
  const e = t.dep, s = wt, n = Qt;
  wt = t, Qt = !0;
  try {
    ur(t);
    const o = t.fn(t._value);
    (e.version === 0 || de(o, t._value)) && (t.flags |= 128, t._value = o, e.version++);
  } catch (o) {
    throw e.version++, o;
  } finally {
    wt = s, Qt = n, fr(t), t.flags &= -3;
  }
}
function Eo(t, e = !1) {
  const { dep: s, prevSub: n, nextSub: o } = t;
  if (n && (n.nextSub = o, t.prevSub = void 0), o && (o.prevSub = n, t.nextSub = void 0), s.subs === t && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let i = s.computed.deps; i; i = i.nextDep)
      Eo(i, !0);
  }
  !e && !--s.sc && s.map && s.map.delete(s.key);
}
function Ql(t) {
  const { prevDep: e, nextDep: s } = t;
  e && (e.nextDep = s, t.prevDep = void 0), s && (s.prevDep = e, t.nextDep = void 0);
}
let Qt = !0;
const pr = [];
function he() {
  pr.push(Qt), Qt = !1;
}
function ge() {
  const t = pr.pop();
  Qt = t === void 0 ? !0 : t;
}
function Ko(t) {
  const { cleanup: e } = t;
  if (t.cleanup = void 0, e) {
    const s = wt;
    wt = void 0;
    try {
      e();
    } finally {
      wt = s;
    }
  }
}
let Ps = 0;
class ta {
  constructor(e, s) {
    this.sub = e, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Mo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
    if (!wt || !Qt || wt === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== wt)
      s = this.activeLink = new ta(wt, this), wt.deps ? (s.prevDep = wt.depsTail, wt.depsTail.nextDep = s, wt.depsTail = s) : wt.deps = wt.depsTail = s, hr(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = wt.depsTail, s.nextDep = void 0, wt.depsTail.nextDep = s, wt.depsTail = s, wt.deps === s && (wt.deps = n);
    }
    return s;
  }
  trigger(e) {
    this.version++, Ps++, this.notify(e);
  }
  notify(e) {
    Ao();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      ko();
    }
  }
}
function hr(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let n = e.deps; n; n = n.nextDep)
        hr(n);
    }
    const s = t.dep.subs;
    s !== t && (t.prevSub = s, s && (s.nextSub = t)), t.dep.subs = t;
  }
}
const on = /* @__PURE__ */ new WeakMap(), ze = /* @__PURE__ */ Symbol(
  ""
), no = /* @__PURE__ */ Symbol(
  ""
), Is = /* @__PURE__ */ Symbol(
  ""
);
function Lt(t, e, s) {
  if (Qt && wt) {
    let n = on.get(t);
    n || on.set(t, n = /* @__PURE__ */ new Map());
    let o = n.get(s);
    o || (n.set(s, o = new Mo()), o.map = n, o.key = s), o.track();
  }
}
function we(t, e, s, n, o, i) {
  const r = on.get(t);
  if (!r) {
    Ps++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (Ao(), e === "clear")
    r.forEach(l);
  else {
    const a = st(t), c = a && Cn(s);
    if (a && s === "length") {
      const f = Number(n);
      r.forEach((h, _) => {
        (_ === "length" || _ === Is || !Jt(_) && _ >= f) && l(h);
      });
    } else
      switch ((s !== void 0 || r.has(void 0)) && l(r.get(s)), c && l(r.get(Is)), e) {
        case "add":
          a ? c && l(r.get("length")) : (l(r.get(ze)), ns(t) && l(r.get(no)));
          break;
        case "delete":
          a || (l(r.get(ze)), ns(t) && l(r.get(no)));
          break;
        case "set":
          ns(t) && l(r.get(ze));
          break;
      }
  }
  ko();
}
function ea(t, e) {
  const s = on.get(t);
  return s && s.get(e);
}
function qe(t) {
  const e = /* @__PURE__ */ ut(t);
  return e === t ? e : (Lt(e, "iterate", Is), /* @__PURE__ */ Gt(t) ? e : e.map(ee));
}
function En(t) {
  return Lt(t = /* @__PURE__ */ ut(t), "iterate", Is), t;
}
function ue(t, e) {
  return /* @__PURE__ */ Te(t) ? ls(/* @__PURE__ */ Se(t) ? ee(e) : e) : ee(e);
}
const sa = {
  __proto__: null,
  [Symbol.iterator]() {
    return Hn(this, Symbol.iterator, (t) => ue(this, t));
  },
  concat(...t) {
    return qe(this).concat(
      ...t.map((e) => st(e) ? qe(e) : e)
    );
  },
  entries() {
    return Hn(this, "entries", (t) => (t[1] = ue(this, t[1]), t));
  },
  every(t, e) {
    return me(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return me(
      this,
      "filter",
      t,
      e,
      (s) => s.map((n) => ue(this, n)),
      arguments
    );
  },
  find(t, e) {
    return me(
      this,
      "find",
      t,
      e,
      (s) => ue(this, s),
      arguments
    );
  },
  findIndex(t, e) {
    return me(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return me(
      this,
      "findLast",
      t,
      e,
      (s) => ue(this, s),
      arguments
    );
  },
  findLastIndex(t, e) {
    return me(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return me(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return Gn(this, "includes", t);
  },
  indexOf(...t) {
    return Gn(this, "indexOf", t);
  },
  join(t) {
    return qe(this).join(t);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...t) {
    return Gn(this, "lastIndexOf", t);
  },
  map(t, e) {
    return me(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return us(this, "pop");
  },
  push(...t) {
    return us(this, "push", t);
  },
  reduce(t, ...e) {
    return zo(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return zo(this, "reduceRight", t, e);
  },
  shift() {
    return us(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return me(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return us(this, "splice", t);
  },
  toReversed() {
    return qe(this).toReversed();
  },
  toSorted(t) {
    return qe(this).toSorted(t);
  },
  toSpliced(...t) {
    return qe(this).toSpliced(...t);
  },
  unshift(...t) {
    return us(this, "unshift", t);
  },
  values() {
    return Hn(this, "values", (t) => ue(this, t));
  }
};
function Hn(t, e, s) {
  const n = En(t), o = n[e]();
  return n !== t && !/* @__PURE__ */ Gt(t) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.done || (i.value = s(i.value)), i;
  }), o;
}
const na = Array.prototype;
function me(t, e, s, n, o, i) {
  const r = En(t), l = r !== t && !/* @__PURE__ */ Gt(t), a = r[e];
  if (a !== na[e]) {
    const h = a.apply(t, i);
    return l ? ee(h) : h;
  }
  let c = s;
  r !== t && (l ? c = function(h, _) {
    return s.call(this, ue(t, h), _, t);
  } : s.length > 2 && (c = function(h, _) {
    return s.call(this, h, _, t);
  }));
  const f = a.call(r, c, n);
  return l && o ? o(f) : f;
}
function zo(t, e, s, n) {
  const o = En(t), i = o !== t && !/* @__PURE__ */ Gt(t);
  let r = s, l = !1;
  o !== t && (i ? (l = n.length === 0, r = function(c, f, h) {
    return l && (l = !1, c = ue(t, c)), s.call(this, c, ue(t, f), h, t);
  }) : s.length > 3 && (r = function(c, f, h) {
    return s.call(this, c, f, h, t);
  }));
  const a = o[e](r, ...n);
  return l ? ue(t, a) : a;
}
function Gn(t, e, s) {
  const n = /* @__PURE__ */ ut(t);
  Lt(n, "iterate", Is);
  const o = n[e](...s);
  return (o === -1 || o === !1) && /* @__PURE__ */ Pn(s[0]) ? (s[0] = /* @__PURE__ */ ut(s[0]), n[e](...s)) : o;
}
function us(t, e, s = []) {
  he(), Ao();
  const n = (/* @__PURE__ */ ut(t))[e].apply(t, s);
  return ko(), ge(), n;
}
const oa = /* @__PURE__ */ xo("__proto__,__v_isRef,__isVue"), gr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Jt)
);
function ia(t) {
  Jt(t) || (t = String(t));
  const e = /* @__PURE__ */ ut(this);
  return Lt(e, "has", t), e.hasOwnProperty(t);
}
class mr {
  constructor(e = !1, s = !1) {
    this._isReadonly = e, this._isShallow = s;
  }
  get(e, s, n) {
    if (s === "__v_skip") return e.__v_skip;
    const o = this._isReadonly, i = this._isShallow;
    if (s === "__v_isReactive")
      return !o;
    if (s === "__v_isReadonly")
      return o;
    if (s === "__v_isShallow")
      return i;
    if (s === "__v_raw")
      return n === (o ? i ? ga : br : i ? _r : vr).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
    const r = st(e);
    if (!o) {
      let a;
      if (r && (a = sa[s]))
        return a;
      if (s === "hasOwnProperty")
        return ia;
    }
    const l = Reflect.get(
      e,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ct(e) ? e : n
    );
    if ((Jt(s) ? gr.has(s) : oa(s)) || (o || Lt(e, "get", s), i))
      return l;
    if (/* @__PURE__ */ Ct(l)) {
      const a = r && Cn(s) ? l : l.value;
      return o && ht(a) ? /* @__PURE__ */ io(a) : a;
    }
    return ht(l) ? o ? /* @__PURE__ */ io(l) : /* @__PURE__ */ Mn(l) : l;
  }
}
class yr extends mr {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, s, n, o) {
    let i = e[s];
    const r = st(e) && Cn(s);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Te(i);
      if (!/* @__PURE__ */ Gt(n) && !/* @__PURE__ */ Te(n) && (i = /* @__PURE__ */ ut(i), n = /* @__PURE__ */ ut(n)), !r && /* @__PURE__ */ Ct(i) && !/* @__PURE__ */ Ct(n))
        return c || (i.value = n), !0;
    }
    const l = r ? Number(s) < e.length : pt(e, s), a = Reflect.set(
      e,
      s,
      n,
      /* @__PURE__ */ Ct(e) ? e : o
    );
    return e === /* @__PURE__ */ ut(o) && a && (l ? de(n, i) && we(e, "set", s, n) : we(e, "add", s, n)), a;
  }
  deleteProperty(e, s) {
    const n = pt(e, s);
    e[s];
    const o = Reflect.deleteProperty(e, s);
    return o && n && we(e, "delete", s, void 0), o;
  }
  has(e, s) {
    const n = Reflect.has(e, s);
    return (!Jt(s) || !gr.has(s)) && Lt(e, "has", s), n;
  }
  ownKeys(e) {
    return Lt(
      e,
      "iterate",
      st(e) ? "length" : ze
    ), Reflect.ownKeys(e);
  }
}
class ra extends mr {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, s) {
    return !0;
  }
  deleteProperty(e, s) {
    return !0;
  }
}
const la = /* @__PURE__ */ new yr(), aa = /* @__PURE__ */ new ra(), ca = /* @__PURE__ */ new yr(!0);
const oo = (t) => t, Hs = (t) => Reflect.getPrototypeOf(t);
function ua(t, e, s) {
  return function(...n) {
    const o = this.__v_raw, i = /* @__PURE__ */ ut(o), r = ns(i), l = t === "entries" || t === Symbol.iterator && r, a = t === "keys" && r, c = o[t](...n), f = s ? oo : e ? ls : ee;
    return !e && Lt(
      i,
      "iterate",
      a ? no : ze
    ), It(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: h, done: _ } = c.next();
          return _ ? { value: h, done: _ } : {
            value: l ? [f(h[0]), f(h[1])] : f(h),
            done: _
          };
        }
      }
    );
  };
}
function Gs(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function fa(t, e) {
  const s = {
    get(o) {
      const i = this.__v_raw, r = /* @__PURE__ */ ut(i), l = /* @__PURE__ */ ut(o);
      t || (de(o, l) && Lt(r, "get", o), Lt(r, "get", l));
      const { has: a } = Hs(r), c = e ? oo : t ? ls : ee;
      if (a.call(r, o))
        return c(i.get(o));
      if (a.call(r, l))
        return c(i.get(l));
      i !== r && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !t && Lt(/* @__PURE__ */ ut(o), "iterate", ze), o.size;
    },
    has(o) {
      const i = this.__v_raw, r = /* @__PURE__ */ ut(i), l = /* @__PURE__ */ ut(o);
      return t || (de(o, l) && Lt(r, "has", o), Lt(r, "has", l)), o === l ? i.has(o) : i.has(o) || i.has(l);
    },
    forEach(o, i) {
      const r = this, l = r.__v_raw, a = /* @__PURE__ */ ut(l), c = e ? oo : t ? ls : ee;
      return !t && Lt(a, "iterate", ze), l.forEach((f, h) => o.call(i, c(f), c(h), r));
    }
  };
  return It(
    s,
    t ? {
      add: Gs("add"),
      set: Gs("set"),
      delete: Gs("delete"),
      clear: Gs("clear")
    } : {
      add(o) {
        const i = /* @__PURE__ */ ut(this), r = Hs(i), l = /* @__PURE__ */ ut(o), a = !e && !/* @__PURE__ */ Gt(o) && !/* @__PURE__ */ Te(o) ? l : o;
        return r.has.call(i, a) || de(o, a) && r.has.call(i, o) || de(l, a) && r.has.call(i, l) || (i.add(a), we(i, "add", a, a)), this;
      },
      set(o, i) {
        !e && !/* @__PURE__ */ Gt(i) && !/* @__PURE__ */ Te(i) && (i = /* @__PURE__ */ ut(i));
        const r = /* @__PURE__ */ ut(this), { has: l, get: a } = Hs(r);
        let c = l.call(r, o);
        c || (o = /* @__PURE__ */ ut(o), c = l.call(r, o));
        const f = a.call(r, o);
        return r.set(o, i), c ? de(i, f) && we(r, "set", o, i) : we(r, "add", o, i), this;
      },
      delete(o) {
        const i = /* @__PURE__ */ ut(this), { has: r, get: l } = Hs(i);
        let a = r.call(i, o);
        a || (o = /* @__PURE__ */ ut(o), a = r.call(i, o)), l && l.call(i, o);
        const c = i.delete(o);
        return a && we(i, "delete", o, void 0), c;
      },
      clear() {
        const o = /* @__PURE__ */ ut(this), i = o.size !== 0, r = o.clear();
        return i && we(
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
    s[o] = ua(o, t, e);
  }), s;
}
function Po(t, e) {
  const s = fa(t, e);
  return (n, o, i) => o === "__v_isReactive" ? !t : o === "__v_isReadonly" ? t : o === "__v_raw" ? n : Reflect.get(
    pt(s, o) && o in n ? s : n,
    o,
    i
  );
}
const da = {
  get: /* @__PURE__ */ Po(!1, !1)
}, pa = {
  get: /* @__PURE__ */ Po(!1, !0)
}, ha = {
  get: /* @__PURE__ */ Po(!0, !1)
};
const vr = /* @__PURE__ */ new WeakMap(), _r = /* @__PURE__ */ new WeakMap(), br = /* @__PURE__ */ new WeakMap(), ga = /* @__PURE__ */ new WeakMap();
function ma(t) {
  switch (t) {
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
function Mn(t) {
  return /* @__PURE__ */ Te(t) ? t : Io(
    t,
    !1,
    la,
    da,
    vr
  );
}
// @__NO_SIDE_EFFECTS__
function ya(t) {
  return Io(
    t,
    !1,
    ca,
    pa,
    _r
  );
}
// @__NO_SIDE_EFFECTS__
function io(t) {
  return Io(
    t,
    !0,
    aa,
    ha,
    br
  );
}
function Io(t, e, s, n, o) {
  if (!ht(t) || t.__v_raw && !(e && t.__v_isReactive) || t.__v_skip || !Object.isExtensible(t))
    return t;
  const i = o.get(t);
  if (i)
    return i;
  const r = ma(jl(t));
  if (r === 0)
    return t;
  const l = new Proxy(
    t,
    r === 2 ? n : s
  );
  return o.set(t, l), l;
}
// @__NO_SIDE_EFFECTS__
function Se(t) {
  return /* @__PURE__ */ Te(t) ? /* @__PURE__ */ Se(t.__v_raw) : !!(t && t.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Te(t) {
  return !!(t && t.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Gt(t) {
  return !!(t && t.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Pn(t) {
  return t ? !!t.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ut(t) {
  const e = t && t.__v_raw;
  return e ? /* @__PURE__ */ ut(e) : t;
}
function Ro(t) {
  return !pt(t, "__v_skip") && Object.isExtensible(t) && tr(t, "__v_skip", !0), t;
}
const ee = (t) => ht(t) ? /* @__PURE__ */ Mn(t) : t, ls = (t) => ht(t) ? /* @__PURE__ */ io(t) : t;
// @__NO_SIDE_EFFECTS__
function Ct(t) {
  return t ? t.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ft(t) {
  return va(t, !1);
}
function va(t, e) {
  return /* @__PURE__ */ Ct(t) ? t : new _a(t, e);
}
class _a {
  constructor(e, s) {
    this.dep = new Mo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? e : /* @__PURE__ */ ut(e), this._value = s ? e : ee(e), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Gt(e) || /* @__PURE__ */ Te(e);
    e = n ? e : /* @__PURE__ */ ut(e), de(e, s) && (this._rawValue = e, this._value = n ? e : ee(e), this.dep.trigger());
  }
}
function g(t) {
  return /* @__PURE__ */ Ct(t) ? t.value : t;
}
const ba = {
  get: (t, e, s) => e === "__v_raw" ? t : g(Reflect.get(t, e, s)),
  set: (t, e, s, n) => {
    const o = t[e];
    return /* @__PURE__ */ Ct(o) && !/* @__PURE__ */ Ct(s) ? (o.value = s, !0) : Reflect.set(t, e, s, n);
  }
};
function wr(t) {
  return /* @__PURE__ */ Se(t) ? t : new Proxy(t, ba);
}
// @__NO_SIDE_EFFECTS__
function wa(t) {
  const e = st(t) ? new Array(t.length) : {};
  for (const s in t)
    e[s] = Sa(t, s);
  return e;
}
class xa {
  constructor(e, s, n) {
    this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = Jt(s) ? s : String(s), this._raw = /* @__PURE__ */ ut(e);
    let o = !0, i = e;
    if (!st(e) || Jt(this._key) || !Cn(this._key))
      do
        o = !/* @__PURE__ */ Pn(i) || /* @__PURE__ */ Gt(i);
      while (o && (i = i.__v_raw));
    this._shallow = o;
  }
  get value() {
    let e = this._object[this._key];
    return this._shallow && (e = g(e)), this._value = e === void 0 ? this._defaultValue : e;
  }
  set value(e) {
    if (this._shallow && /* @__PURE__ */ Ct(this._raw[this._key])) {
      const s = this._object[this._key];
      if (/* @__PURE__ */ Ct(s)) {
        s.value = e;
        return;
      }
    }
    this._object[this._key] = e;
  }
  get dep() {
    return ea(this._raw, this._key);
  }
}
function Sa(t, e, s) {
  return new xa(t, e, s);
}
class Ta {
  constructor(e, s, n) {
    this.fn = e, this.setter = s, this._value = void 0, this.dep = new Mo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ps - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    wt !== this)
      return cr(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return dr(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
// @__NO_SIDE_EFFECTS__
function Ca(t, e, s = !1) {
  let n, o;
  return rt(t) ? n = t : (n = t.get, o = t.set), new Ta(n, o, s);
}
const Ws = {}, rn = /* @__PURE__ */ new WeakMap();
let Ve;
function Aa(t, e = !1, s = Ve) {
  if (s) {
    let n = rn.get(s);
    n || rn.set(s, n = []), n.push(t);
  }
}
function ka(t, e, s = bt) {
  const { immediate: n, deep: o, once: i, scheduler: r, augmentJob: l, call: a } = s, c = (j) => o ? j : /* @__PURE__ */ Gt(j) || o === !1 || o === 0 ? xe(j, 1) : xe(j);
  let f, h, _, y, k = !1, b = !1;
  if (/* @__PURE__ */ Ct(t) ? (h = () => t.value, k = /* @__PURE__ */ Gt(t)) : /* @__PURE__ */ Se(t) ? (h = () => c(t), k = !0) : st(t) ? (b = !0, k = t.some((j) => /* @__PURE__ */ Se(j) || /* @__PURE__ */ Gt(j)), h = () => t.map((j) => {
    if (/* @__PURE__ */ Ct(j))
      return j.value;
    if (/* @__PURE__ */ Se(j))
      return c(j);
    if (rt(j))
      return a ? a(j, 2) : j();
  })) : rt(t) ? e ? h = a ? () => a(t, 2) : t : h = () => {
    if (_) {
      he();
      try {
        _();
      } finally {
        ge();
      }
    }
    const j = Ve;
    Ve = f;
    try {
      return a ? a(t, 3, [y]) : t(y);
    } finally {
      Ve = j;
    }
  } : h = pe, e && o) {
    const j = h, U = o === !0 ? 1 / 0 : o;
    h = () => xe(j(), U);
  }
  const G = rr(), J = () => {
    f.stop(), G && G.active && So(G.effects, f);
  };
  if (i && e) {
    const j = e;
    e = (...U) => {
      const et = j(...U);
      return J(), et;
    };
  }
  let K = b ? new Array(t.length).fill(Ws) : Ws;
  const X = (j) => {
    if (!(!(f.flags & 1) || !f.dirty && !j))
      if (e) {
        const U = f.run();
        if (j || o || k || (b ? U.some((et, Y) => de(et, K[Y])) : de(U, K))) {
          _ && _();
          const et = Ve;
          Ve = f;
          try {
            const Y = [
              U,
              // pass undefined as the old value when it's changed for the first time
              K === Ws ? void 0 : b && K[0] === Ws ? [] : K,
              y
            ];
            K = U, a ? a(e, 3, Y) : (
              // @ts-expect-error
              e(...Y)
            );
          } finally {
            Ve = et;
          }
        }
      } else
        f.run();
  };
  return l && l(X), f = new lr(h), f.scheduler = r ? () => r(X, !1) : X, y = (j) => Aa(j, !1, f), _ = f.onStop = () => {
    const j = rn.get(f);
    if (j) {
      if (a)
        a(j, 4);
      else
        for (const U of j) U();
      rn.delete(f);
    }
  }, e ? n ? X(!0) : K = f.run() : r ? r(X.bind(null, !0), !0) : f.run(), J.pause = f.pause.bind(f), J.resume = f.resume.bind(f), J.stop = J, J;
}
function xe(t, e = 1 / 0, s) {
  if (e <= 0 || !ht(t) || t.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(t) || 0) >= e))
    return t;
  if (s.set(t, e), e--, /* @__PURE__ */ Ct(t))
    xe(t.value, e, s);
  else if (st(t))
    for (let n = 0; n < t.length; n++)
      xe(t[n], e, s);
  else if (Ji(t) || ns(t))
    t.forEach((n) => {
      xe(n, e, s);
    });
  else if (Zi(t)) {
    for (const n in t)
      xe(t[n], e, s);
    for (const n of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, n) && xe(t[n], e, s);
  }
  return t;
}
/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Fs(t, e, s, n) {
  try {
    return n ? t(...n) : t();
  } catch (o) {
    In(o, e, s);
  }
}
function qt(t, e, s, n) {
  if (rt(t)) {
    const o = Fs(t, e, s, n);
    return o && qi(o) && o.catch((i) => {
      In(i, e, s);
    }), o;
  }
  if (st(t)) {
    const o = [];
    for (let i = 0; i < t.length; i++)
      o.push(qt(t[i], e, s, n));
    return o;
  }
}
function In(t, e, s, n = !0) {
  const o = e ? e.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = e && e.appContext.config || bt;
  if (e) {
    let l = e.parent;
    const a = e.proxy, c = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; l; ) {
      const f = l.ec;
      if (f) {
        for (let h = 0; h < f.length; h++)
          if (f[h](t, a, c) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      he(), Fs(i, null, 10, [
        t,
        a,
        c
      ]), ge();
      return;
    }
  }
  Ea(t, s, o, n, r);
}
function Ea(t, e, s, n = !0, o = !1) {
  if (o)
    throw t;
  console.error(t);
}
const Dt = [];
let ce = -1;
const os = [];
let Re = null, ts = 0;
const xr = /* @__PURE__ */ Promise.resolve();
let ln = null;
function Rt(t) {
  const e = ln || xr;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Ma(t) {
  let e = ce + 1, s = Dt.length;
  for (; e < s; ) {
    const n = e + s >>> 1, o = Dt[n], i = Rs(o);
    i < t || i === t && o.flags & 2 ? e = n + 1 : s = n;
  }
  return e;
}
function Oo(t) {
  if (!(t.flags & 1)) {
    const e = Rs(t), s = Dt[Dt.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= Rs(s) ? Dt.push(t) : Dt.splice(Ma(e), 0, t), t.flags |= 1, Sr();
  }
}
function Sr() {
  ln || (ln = xr.then(Cr));
}
function Pa(t) {
  st(t) ? os.push(...t) : Re && t.id === -1 ? Re.splice(ts + 1, 0, t) : t.flags & 1 || (os.push(t), t.flags |= 1), Sr();
}
function Yo(t, e, s = ce + 1) {
  for (; s < Dt.length; s++) {
    const n = Dt[s];
    if (n && n.flags & 2) {
      if (t && n.id !== t.uid)
        continue;
      Dt.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Tr(t) {
  if (os.length) {
    const e = [...new Set(os)].sort(
      (s, n) => Rs(s) - Rs(n)
    );
    if (os.length = 0, Re) {
      Re.push(...e);
      return;
    }
    for (Re = e, ts = 0; ts < Re.length; ts++) {
      const s = Re[ts];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Re = null, ts = 0;
  }
}
const Rs = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function Cr(t) {
  try {
    for (ce = 0; ce < Dt.length; ce++) {
      const e = Dt[ce];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Fs(
        e,
        e.i,
        e.i ? 15 : 14
      ), e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; ce < Dt.length; ce++) {
      const e = Dt[ce];
      e && (e.flags &= -2);
    }
    ce = -1, Dt.length = 0, Tr(), ln = null, (Dt.length || os.length) && Cr();
  }
}
let Yt = null, Ar = null;
function an(t) {
  const e = Yt;
  return Yt = t, Ar = t && t.type.__scopeId || null, e;
}
function kr(t, e = Yt, s) {
  if (!e || t._n)
    return t;
  const n = (...o) => {
    n._d && fn(-1);
    const i = an(e);
    let r;
    try {
      r = t(...o);
    } finally {
      an(i), n._d && fn(1);
    }
    return r;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function He(t, e) {
  if (Yt === null)
    return t;
  const s = Nn(Yt), n = t.dirs || (t.dirs = []);
  for (let o = 0; o < e.length; o++) {
    let [i, r, l, a = bt] = e[o];
    i && (rt(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && xe(r), n.push({
      dir: i,
      instance: s,
      value: r,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return t;
}
function De(t, e, s, n) {
  const o = t.dirs, i = e && e.dirs;
  for (let r = 0; r < o.length; r++) {
    const l = o[r];
    i && (l.oldValue = i[r].value);
    let a = l.dir[n];
    a && (he(), qt(a, s, 8, [
      t.el,
      l,
      t,
      e
    ]), ge());
  }
}
function Ia(t, e) {
  if (Ut) {
    let s = Ut.provides;
    const n = Ut.parent && Ut.parent.provides;
    n === s && (s = Ut.provides = Object.create(n)), s[t] = e;
  }
}
function ws(t, e, s = !1) {
  const n = Do();
  if (n || Ye) {
    let o = Ye ? Ye._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (o && t in o)
      return o[t];
    if (arguments.length > 1)
      return s && rt(e) ? e.call(n && n.proxy) : e;
  }
}
function Ra() {
  return !!(Do() || Ye);
}
const Oa = /* @__PURE__ */ Symbol.for("v-scx"), La = () => ws(Oa);
function Bt(t, e, s) {
  return Er(t, e, s);
}
function Er(t, e, s = bt) {
  const { immediate: n, deep: o, flush: i, once: r } = s, l = It({}, s), a = e && n || !e && i !== "post";
  let c;
  if ($s) {
    if (i === "sync") {
      const y = La();
      c = y.__watcherHandles || (y.__watcherHandles = []);
    } else if (!a) {
      const y = () => {
      };
      return y.stop = pe, y.resume = pe, y.pause = pe, y;
    }
  }
  const f = Ut;
  l.call = (y, k, b) => qt(y, f, k, b);
  let h = !1;
  i === "post" ? l.scheduler = (y) => {
    Nt(y, f && f.suspense);
  } : i !== "sync" && (h = !0, l.scheduler = (y, k) => {
    k ? y() : Oo(y);
  }), l.augmentJob = (y) => {
    e && (y.flags |= 4), h && (y.flags |= 2, f && (y.id = f.uid, y.i = f));
  };
  const _ = ka(t, e, l);
  return $s && (c ? c.push(_) : a && _()), _;
}
function $a(t, e, s) {
  const n = this.proxy, o = xt(t) ? t.includes(".") ? Mr(n, t) : () => n[t] : t.bind(n, n);
  let i;
  rt(e) ? i = e : (i = e.handler, s = e);
  const r = js(this), l = Er(o, i.bind(n), s);
  return r(), l;
}
function Mr(t, e) {
  const s = e.split(".");
  return () => {
    let n = t;
    for (let o = 0; o < s.length && n; o++)
      n = n[s[o]];
    return n;
  };
}
const Pe = /* @__PURE__ */ new WeakMap(), Pr = /* @__PURE__ */ Symbol("_vte"), Ir = (t) => t.__isTeleport, Ge = (t) => t && (t.disabled || t.disabled === ""), Na = (t) => t && (t.defer || t.defer === ""), Jo = (t) => typeof SVGElement < "u" && t instanceof SVGElement, qo = (t) => typeof MathMLElement == "function" && t instanceof MathMLElement, ro = (t, e) => {
  const s = t && t.to;
  return xt(s) ? e ? e(s) : null : s;
}, Da = {
  name: "Teleport",
  __isTeleport: !0,
  process(t, e, s, n, o, i, r, l, a, c) {
    const {
      mc: f,
      pc: h,
      pbc: _,
      o: { insert: y, querySelector: k, createText: b, createComment: G, parentNode: J }
    } = c, K = Ge(e.props);
    let { dynamicChildren: X } = e;
    const j = (Y, W, O) => {
      Y.shapeFlag & 16 && f(
        Y.children,
        W,
        O,
        o,
        i,
        r,
        l,
        a
      );
    }, U = (Y = e) => {
      const W = Ge(Y.props), O = Y.target = ro(Y.props, k), V = lo(O, Y, b, y);
      O && (r !== "svg" && Jo(O) ? r = "svg" : r !== "mathml" && qo(O) && (r = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(O), W || (j(Y, O, V), gs(Y, !1)));
    }, et = (Y) => {
      const W = () => {
        if (Pe.get(Y) === W) {
          if (Pe.delete(Y), Ge(Y.props)) {
            const O = J(Y.el) || s;
            j(Y, O, Y.anchor), gs(Y, !0);
          }
          U(Y);
        }
      };
      Pe.set(Y, W), Nt(W, i);
    };
    if (t == null) {
      const Y = e.el = b(""), W = e.anchor = b("");
      if (y(Y, s, n), y(W, s, n), Na(e.props) || i && i.pendingBranch) {
        et(e);
        return;
      }
      K && (j(e, s, W), gs(e, !0)), U();
    } else {
      e.el = t.el;
      const Y = e.anchor = t.anchor, W = Pe.get(t);
      if (W) {
        W.flags |= 8, Pe.delete(t), et(e);
        return;
      }
      e.targetStart = t.targetStart;
      const O = e.target = t.target, V = e.targetAnchor = t.targetAnchor, q = Ge(t.props), S = q ? s : O, T = q ? Y : V;
      if (r === "svg" || Jo(O) ? r = "svg" : (r === "mathml" || qo(O)) && (r = "mathml"), X ? (_(
        t.dynamicChildren,
        X,
        S,
        o,
        i,
        r,
        l
      ), No(t, e, !0)) : a || h(
        t,
        e,
        S,
        T,
        o,
        i,
        r,
        l,
        !1
      ), K)
        q ? e.props && t.props && e.props.to !== t.props.to && (e.props.to = t.props.to) : Ks(
          e,
          s,
          Y,
          c,
          1
        );
      else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
        const w = ro(e.props, k);
        w && (e.target = w, Ks(
          e,
          w,
          null,
          c,
          0
        ));
      } else q && Ks(
        e,
        O,
        V,
        c,
        1
      );
      gs(e, K);
    }
  },
  remove(t, e, s, { um: n, o: { remove: o } }, i) {
    const {
      shapeFlag: r,
      children: l,
      anchor: a,
      targetStart: c,
      targetAnchor: f,
      target: h,
      props: _
    } = t, y = Ge(_), k = i || !y, b = Pe.get(t);
    if (b && (b.flags |= 8, Pe.delete(t)), h && (o(c), o(f)), i && o(a), !b && (y || h) && r & 16)
      for (let G = 0; G < l.length; G++) {
        const J = l[G];
        n(
          J,
          e,
          s,
          k,
          !!J.dynamicChildren
        );
      }
  },
  move: Ks,
  hydrate: Fa
};
function Ks(t, e, s, { o: { insert: n }, m: o }, i = 2) {
  i === 0 && n(t.targetAnchor, e, s);
  const { el: r, anchor: l, shapeFlag: a, children: c, props: f } = t, h = i === 2;
  if (h && n(r, e, s), !Pe.has(t) && (!h || Ge(f)) && a & 16)
    for (let _ = 0; _ < c.length; _++)
      o(
        c[_],
        e,
        s,
        2
      );
  h && n(l, e, s);
}
function Fa(t, e, s, n, o, i, {
  o: { nextSibling: r, parentNode: l, querySelector: a, insert: c, createText: f }
}, h) {
  function _(G, J) {
    let K = J;
    for (; K; ) {
      if (K && K.nodeType === 8) {
        if (K.data === "teleport start anchor")
          e.targetStart = K;
        else if (K.data === "teleport anchor") {
          e.targetAnchor = K, G._lpa = e.targetAnchor && r(e.targetAnchor);
          break;
        }
      }
      K = r(K);
    }
  }
  function y(G, J) {
    J.anchor = h(
      r(G),
      J,
      l(G),
      s,
      n,
      o,
      i
    );
  }
  const k = e.target = ro(
    e.props,
    a
  ), b = Ge(e.props);
  if (k) {
    const G = k._lpa || k.firstChild;
    e.shapeFlag & 16 && (b ? (y(t, e), _(k, G), e.targetAnchor || lo(
      k,
      e,
      f,
      c,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      l(t) === k ? t : null
    )) : (e.anchor = r(t), _(k, G), e.targetAnchor || lo(k, e, f, c), h(
      G && r(G),
      e,
      k,
      s,
      n,
      o,
      i
    ))), gs(e, b);
  } else b && e.shapeFlag & 16 && (y(t, e), e.targetStart = t, e.targetAnchor = r(t));
  return e.anchor && r(e.anchor);
}
const Rr = Da;
function gs(t, e) {
  const s = t.ctx;
  if (s && s.ut) {
    let n, o;
    for (e ? (n = t.el, o = t.anchor) : (n = t.targetStart, o = t.targetAnchor); n && n !== o; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", s.uid), n = n.nextSibling;
    s.ut();
  }
}
function lo(t, e, s, n, o = null) {
  const i = e.targetStart = s(""), r = e.targetAnchor = s("");
  return i[Pr] = r, t && (n(i, t, o), n(r, t, o)), r;
}
const zt = /* @__PURE__ */ Symbol("_leaveCb"), fs = /* @__PURE__ */ Symbol("_enterCb");
function Ua() {
  const t = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Us(() => {
    t.isMounted = !0;
  }), Bs(() => {
    t.isUnmounting = !0;
  }), t;
}
const Kt = [Function, Array], Or = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Kt,
  onEnter: Kt,
  onAfterEnter: Kt,
  onEnterCancelled: Kt,
  // leave
  onBeforeLeave: Kt,
  onLeave: Kt,
  onAfterLeave: Kt,
  onLeaveCancelled: Kt,
  // appear
  onBeforeAppear: Kt,
  onAppear: Kt,
  onAfterAppear: Kt,
  onAppearCancelled: Kt
}, Lr = (t) => {
  const e = t.subTree;
  return e.component ? Lr(e.component) : e;
}, Ba = {
  name: "BaseTransition",
  props: Or,
  setup(t, { slots: e }) {
    const s = Do(), n = Ua();
    return () => {
      const o = e.default && Dr(e.default(), !0), i = o && o.length ? $r(o) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        s.subTree ? _t() : void 0
      );
      if (!i)
        return;
      const r = /* @__PURE__ */ ut(t), { mode: l } = r;
      if (n.isLeaving)
        return Wn(i);
      const a = Xo(i);
      if (!a)
        return Wn(i);
      let c = ao(
        a,
        r,
        n,
        s,
        // #11061, ensure enterHooks is fresh after clone
        (h) => c = h
      );
      a.type !== Ft && Os(a, c);
      let f = s.subTree && Xo(s.subTree);
      if (f && f.type !== Ft && !We(f, a) && Lr(s).type !== Ft) {
        let h = ao(
          f,
          r,
          n,
          s
        );
        if (Os(f, h), l === "out-in" && a.type !== Ft)
          return n.isLeaving = !0, h.afterLeave = () => {
            n.isLeaving = !1, s.job.flags & 8 || s.update(), delete h.afterLeave, f = void 0;
          }, Wn(i);
        l === "in-out" && a.type !== Ft ? h.delayLeave = (_, y, k) => {
          const b = Nr(
            n,
            f
          );
          b[String(f.key)] = f, _[zt] = () => {
            y(), _[zt] = void 0, delete c.delayedLeave, f = void 0;
          }, c.delayedLeave = () => {
            k(), delete c.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return i;
    };
  }
};
function $r(t) {
  let e = t[0];
  if (t.length > 1) {
    for (const s of t)
      if (s.type !== Ft) {
        e = s;
        break;
      }
  }
  return e;
}
const ja = Ba;
function Nr(t, e) {
  const { leavingVNodes: s } = t;
  let n = s.get(e.type);
  return n || (n = /* @__PURE__ */ Object.create(null), s.set(e.type, n)), n;
}
function ao(t, e, s, n, o) {
  const {
    appear: i,
    mode: r,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: c,
    onAfterEnter: f,
    onEnterCancelled: h,
    onBeforeLeave: _,
    onLeave: y,
    onAfterLeave: k,
    onLeaveCancelled: b,
    onBeforeAppear: G,
    onAppear: J,
    onAfterAppear: K,
    onAppearCancelled: X
  } = e, j = String(t.key), U = Nr(s, t), et = (O, V) => {
    O && qt(
      O,
      n,
      9,
      V
    );
  }, Y = (O, V) => {
    const q = V[1];
    et(O, V), st(O) ? O.every((S) => S.length <= 1) && q() : O.length <= 1 && q();
  }, W = {
    mode: r,
    persisted: l,
    beforeEnter(O) {
      let V = a;
      if (!s.isMounted)
        if (i)
          V = G || a;
        else
          return;
      O[zt] && O[zt](
        !0
        /* cancelled */
      );
      const q = U[j];
      q && We(t, q) && q.el[zt] && q.el[zt](), et(V, [O]);
    },
    enter(O) {
      if (U[j] === t) return;
      let V = c, q = f, S = h;
      if (!s.isMounted)
        if (i)
          V = J || c, q = K || f, S = X || h;
        else
          return;
      let T = !1;
      O[fs] = (C) => {
        T || (T = !0, C ? et(S, [O]) : et(q, [O]), W.delayedLeave && W.delayedLeave(), O[fs] = void 0);
      };
      const w = O[fs].bind(null, !1);
      V ? Y(V, [O, w]) : w();
    },
    leave(O, V) {
      const q = String(t.key);
      if (O[fs] && O[fs](
        !0
        /* cancelled */
      ), s.isUnmounting)
        return V();
      et(_, [O]);
      let S = !1;
      O[zt] = (w) => {
        S || (S = !0, V(), w ? et(b, [O]) : et(k, [O]), O[zt] = void 0, U[q] === t && delete U[q]);
      };
      const T = O[zt].bind(null, !1);
      U[q] = t, y ? Y(y, [O, T]) : T();
    },
    clone(O) {
      const V = ao(
        O,
        e,
        s,
        n,
        o
      );
      return o && o(V), V;
    }
  };
  return W;
}
function Wn(t) {
  if (Rn(t))
    return t = $e(t), t.children = null, t;
}
function Xo(t) {
  if (!Rn(t))
    return Ir(t.type) && t.children ? $r(t.children) : t;
  if (t.component)
    return t.component.subTree;
  const { shapeFlag: e, children: s } = t;
  if (s) {
    if (e & 16)
      return s[0];
    if (e & 32 && rt(s.default))
      return s.default();
  }
}
function Os(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, Os(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function Dr(t, e = !1, s) {
  let n = [], o = 0;
  for (let i = 0; i < t.length; i++) {
    let r = t[i];
    const l = s == null ? r.key : String(s) + String(r.key != null ? r.key : i);
    r.type === it ? (r.patchFlag & 128 && o++, n = n.concat(
      Dr(r.children, e, l)
    )) : (e || r.type !== Ft) && n.push(l != null ? $e(r, { key: l }) : r);
  }
  if (o > 1)
    for (let i = 0; i < n.length; i++)
      n[i].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function Ce(t, e) {
  return rt(t) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    It({ name: t.name }, e, { setup: t })
  ) : t;
}
function Fr(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function Zo(t, e) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(t, e)) && !s.configurable);
}
const cn = /* @__PURE__ */ new WeakMap();
function xs(t, e, s, n, o = !1) {
  if (st(t)) {
    t.forEach(
      (b, G) => xs(
        b,
        e && (st(e) ? e[G] : e),
        s,
        n,
        o
      )
    );
    return;
  }
  if (Ss(n) && !o) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && xs(t, e, s, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? Nn(n.component) : n.el, r = o ? null : i, { i: l, r: a } = t, c = e && e.r, f = l.refs === bt ? l.refs = {} : l.refs, h = l.setupState, _ = /* @__PURE__ */ ut(h), y = h === bt ? Yi : (b) => Zo(f, b) ? !1 : pt(_, b), k = (b, G) => !(G && Zo(f, G));
  if (c != null && c !== a) {
    if (Qo(e), xt(c))
      f[c] = null, y(c) && (h[c] = null);
    else if (/* @__PURE__ */ Ct(c)) {
      const b = e;
      k(c, b.k) && (c.value = null), b.k && (f[b.k] = null);
    }
  }
  if (rt(a)) {
    he();
    try {
      Fs(a, l, 12, [r, f]);
    } finally {
      ge();
    }
  } else {
    const b = xt(a), G = /* @__PURE__ */ Ct(a);
    if (b || G) {
      const J = () => {
        if (t.f) {
          const K = b ? y(a) ? h[a] : f[a] : k() || !t.k ? a.value : f[t.k];
          if (o)
            st(K) && So(K, i);
          else if (st(K))
            K.includes(i) || K.push(i);
          else if (b)
            f[a] = [i], y(a) && (h[a] = f[a]);
          else {
            const X = [i];
            k(a, t.k) && (a.value = X), t.k && (f[t.k] = X);
          }
        } else b ? (f[a] = r, y(a) && (h[a] = r)) : G && (k(a, t.k) && (a.value = r), t.k && (f[t.k] = r));
      };
      if (r) {
        const K = () => {
          J(), cn.delete(t);
        };
        K.id = -1, cn.set(t, K), Nt(K, s);
      } else
        Qo(t), J();
    }
  }
}
function Qo(t) {
  const e = cn.get(t);
  e && (e.flags |= 8, cn.delete(t));
}
kn().requestIdleCallback;
kn().cancelIdleCallback;
const Ss = (t) => !!t.type.__asyncLoader, Rn = (t) => t.type.__isKeepAlive;
function Va(t, e) {
  Ur(t, "a", e);
}
function Ha(t, e) {
  Ur(t, "da", e);
}
function Ur(t, e, s = Ut) {
  const n = t.__wdc || (t.__wdc = () => {
    let o = s;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return t();
  });
  if (On(e, n, s), s) {
    let o = s.parent;
    for (; o && o.parent; )
      Rn(o.parent.vnode) && Ga(n, e, s, o), o = o.parent;
  }
}
function Ga(t, e, s, n) {
  const o = On(
    e,
    t,
    n,
    !0
    /* prepend */
  );
  Br(() => {
    So(n[e], o);
  }, s);
}
function On(t, e, s = Ut, n = !1) {
  if (s) {
    const o = s[t] || (s[t] = []), i = e.__weh || (e.__weh = (...r) => {
      he();
      const l = js(s), a = qt(e, s, t, r);
      return l(), ge(), a;
    });
    return n ? o.unshift(i) : o.push(i), i;
  }
}
const Ae = (t) => (e, s = Ut) => {
  (!$s || t === "sp") && On(t, (...n) => e(...n), s);
}, Wa = Ae("bm"), Us = Ae("m"), Ka = Ae(
  "bu"
), za = Ae("u"), Bs = Ae(
  "bum"
), Br = Ae("um"), Ya = Ae(
  "sp"
), Ja = Ae("rtg"), qa = Ae("rtc");
function Xa(t, e = Ut) {
  On("ec", t, e);
}
const Za = /* @__PURE__ */ Symbol.for("v-ndc");
function jt(t, e, s, n) {
  let o;
  const i = s, r = st(t);
  if (r || xt(t)) {
    const l = r && /* @__PURE__ */ Se(t);
    let a = !1, c = !1;
    l && (a = !/* @__PURE__ */ Gt(t), c = /* @__PURE__ */ Te(t), t = En(t)), o = new Array(t.length);
    for (let f = 0, h = t.length; f < h; f++)
      o[f] = e(
        a ? c ? ls(ee(t[f])) : ee(t[f]) : t[f],
        f,
        void 0,
        i
      );
  } else if (typeof t == "number") {
    o = new Array(t);
    for (let l = 0; l < t; l++)
      o[l] = e(l + 1, l, void 0, i);
  } else if (ht(t))
    if (t[Symbol.iterator])
      o = Array.from(
        t,
        (l, a) => e(l, a, void 0, i)
      );
    else {
      const l = Object.keys(t);
      o = new Array(l.length);
      for (let a = 0, c = l.length; a < c; a++) {
        const f = l[a];
        o[a] = e(t[f], f, a, i);
      }
    }
  else
    o = [];
  return o;
}
const co = (t) => t ? il(t) ? Nn(t) : co(t.parent) : null, Ts = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ It(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => co(t.parent),
    $root: (t) => co(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => Vr(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      Oo(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = Rt.bind(t.proxy)),
    $watch: (t) => $a.bind(t)
  })
), Kn = (t, e) => t !== bt && !t.__isScriptSetup && pt(t, e), Qa = {
  get({ _: t }, e) {
    if (e === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: o, props: i, accessCache: r, type: l, appContext: a } = t;
    if (e[0] !== "$") {
      const _ = r[e];
      if (_ !== void 0)
        switch (_) {
          case 1:
            return n[e];
          case 2:
            return o[e];
          case 4:
            return s[e];
          case 3:
            return i[e];
        }
      else {
        if (Kn(n, e))
          return r[e] = 1, n[e];
        if (o !== bt && pt(o, e))
          return r[e] = 2, o[e];
        if (pt(i, e))
          return r[e] = 3, i[e];
        if (s !== bt && pt(s, e))
          return r[e] = 4, s[e];
        uo && (r[e] = 0);
      }
    }
    const c = Ts[e];
    let f, h;
    if (c)
      return e === "$attrs" && Lt(t.attrs, "get", ""), c(t);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[e])
    )
      return f;
    if (s !== bt && pt(s, e))
      return r[e] = 4, s[e];
    if (
      // global properties
      h = a.config.globalProperties, pt(h, e)
    )
      return h[e];
  },
  set({ _: t }, e, s) {
    const { data: n, setupState: o, ctx: i } = t;
    return Kn(o, e) ? (o[e] = s, !0) : n !== bt && pt(n, e) ? (n[e] = s, !0) : pt(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (i[e] = s, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: s, ctx: n, appContext: o, props: i, type: r }
  }, l) {
    let a;
    return !!(s[l] || t !== bt && l[0] !== "$" && pt(t, l) || Kn(e, l) || pt(i, l) || pt(n, l) || pt(Ts, l) || pt(o.config.globalProperties, l) || (a = r.__cssModules) && a[l]);
  },
  defineProperty(t, e, s) {
    return s.get != null ? t._.accessCache[e] = 0 : pt(s, "value") && this.set(t, e, s.value, null), Reflect.defineProperty(t, e, s);
  }
};
function ti(t) {
  return st(t) ? t.reduce(
    (e, s) => (e[s] = null, e),
    {}
  ) : t;
}
let uo = !0;
function tc(t) {
  const e = Vr(t), s = t.proxy, n = t.ctx;
  uo = !1, e.beforeCreate && ei(e.beforeCreate, t, "bc");
  const {
    // state
    data: o,
    computed: i,
    methods: r,
    watch: l,
    provide: a,
    inject: c,
    // lifecycle
    created: f,
    beforeMount: h,
    mounted: _,
    beforeUpdate: y,
    updated: k,
    activated: b,
    deactivated: G,
    beforeDestroy: J,
    beforeUnmount: K,
    destroyed: X,
    unmounted: j,
    render: U,
    renderTracked: et,
    renderTriggered: Y,
    errorCaptured: W,
    serverPrefetch: O,
    // public API
    expose: V,
    inheritAttrs: q,
    // assets
    components: S,
    directives: T,
    filters: w
  } = e;
  if (c && ec(c, n, null), r)
    for (const E in r) {
      const R = r[E];
      rt(R) && (n[E] = R.bind(s));
    }
  if (o) {
    const E = o.call(s, s);
    ht(E) && (t.data = /* @__PURE__ */ Mn(E));
  }
  if (uo = !0, i)
    for (const E in i) {
      const R = i[E], Z = rt(R) ? R.bind(s, s) : rt(R.get) ? R.get.bind(s, s) : pe, dt = !rt(R) && rt(R.set) ? R.set.bind(s) : pe, mt = Pt({
        get: Z,
        set: dt
      });
      Object.defineProperty(n, E, {
        enumerable: !0,
        configurable: !0,
        get: () => mt.value,
        set: (Q) => mt.value = Q
      });
    }
  if (l)
    for (const E in l)
      jr(l[E], n, s, E);
  if (a) {
    const E = rt(a) ? a.call(s) : a;
    Reflect.ownKeys(E).forEach((R) => {
      Ia(R, E[R]);
    });
  }
  f && ei(f, t, "c");
  function x(E, R) {
    st(R) ? R.forEach((Z) => E(Z.bind(s))) : R && E(R.bind(s));
  }
  if (x(Wa, h), x(Us, _), x(Ka, y), x(za, k), x(Va, b), x(Ha, G), x(Xa, W), x(qa, et), x(Ja, Y), x(Bs, K), x(Br, j), x(Ya, O), st(V))
    if (V.length) {
      const E = t.exposed || (t.exposed = {});
      V.forEach((R) => {
        Object.defineProperty(E, R, {
          get: () => s[R],
          set: (Z) => s[R] = Z,
          enumerable: !0
        });
      });
    } else t.exposed || (t.exposed = {});
  U && t.render === pe && (t.render = U), q != null && (t.inheritAttrs = q), S && (t.components = S), T && (t.directives = T), O && Fr(t);
}
function ec(t, e, s = pe) {
  st(t) && (t = fo(t));
  for (const n in t) {
    const o = t[n];
    let i;
    ht(o) ? "default" in o ? i = ws(
      o.from || n,
      o.default,
      !0
    ) : i = ws(o.from || n) : i = ws(o), /* @__PURE__ */ Ct(i) ? Object.defineProperty(e, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    }) : e[n] = i;
  }
}
function ei(t, e, s) {
  qt(
    st(t) ? t.map((n) => n.bind(e.proxy)) : t.bind(e.proxy),
    e,
    s
  );
}
function jr(t, e, s, n) {
  let o = n.includes(".") ? Mr(s, n) : () => s[n];
  if (xt(t)) {
    const i = e[t];
    rt(i) && Bt(o, i);
  } else if (rt(t))
    Bt(o, t.bind(s));
  else if (ht(t))
    if (st(t))
      t.forEach((i) => jr(i, e, s, n));
    else {
      const i = rt(t.handler) ? t.handler.bind(s) : e[t.handler];
      rt(i) && Bt(o, i, t);
    }
}
function Vr(t) {
  const e = t.type, { mixins: s, extends: n } = e, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: r }
  } = t.appContext, l = i.get(e);
  let a;
  return l ? a = l : !o.length && !s && !n ? a = e : (a = {}, o.length && o.forEach(
    (c) => un(a, c, r, !0)
  ), un(a, e, r)), ht(e) && i.set(e, a), a;
}
function un(t, e, s, n = !1) {
  const { mixins: o, extends: i } = e;
  i && un(t, i, s, !0), o && o.forEach(
    (r) => un(t, r, s, !0)
  );
  for (const r in e)
    if (!(n && r === "expose")) {
      const l = sc[r] || s && s[r];
      t[r] = l ? l(t[r], e[r]) : e[r];
    }
  return t;
}
const sc = {
  data: si,
  props: ni,
  emits: ni,
  // objects
  methods: ms,
  computed: ms,
  // lifecycle
  beforeCreate: $t,
  created: $t,
  beforeMount: $t,
  mounted: $t,
  beforeUpdate: $t,
  updated: $t,
  beforeDestroy: $t,
  beforeUnmount: $t,
  destroyed: $t,
  unmounted: $t,
  activated: $t,
  deactivated: $t,
  errorCaptured: $t,
  serverPrefetch: $t,
  // assets
  components: ms,
  directives: ms,
  // watch
  watch: oc,
  // provide / inject
  provide: si,
  inject: nc
};
function si(t, e) {
  return e ? t ? function() {
    return It(
      rt(t) ? t.call(this, this) : t,
      rt(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function nc(t, e) {
  return ms(fo(t), fo(e));
}
function fo(t) {
  if (st(t)) {
    const e = {};
    for (let s = 0; s < t.length; s++)
      e[t[s]] = t[s];
    return e;
  }
  return t;
}
function $t(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function ms(t, e) {
  return t ? It(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function ni(t, e) {
  return t ? st(t) && st(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : It(
    /* @__PURE__ */ Object.create(null),
    ti(t),
    ti(e ?? {})
  ) : e;
}
function oc(t, e) {
  if (!t) return e;
  if (!e) return t;
  const s = It(/* @__PURE__ */ Object.create(null), t);
  for (const n in e)
    s[n] = $t(t[n], e[n]);
  return s;
}
function Hr() {
  return {
    app: null,
    config: {
      isNativeTag: Yi,
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
let ic = 0;
function rc(t, e) {
  return function(n, o = null) {
    rt(n) || (n = It({}, n)), o != null && !ht(o) && (o = null);
    const i = Hr(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const c = i.app = {
      _uid: ic++,
      _component: n,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: Fc,
      get config() {
        return i.config;
      },
      set config(f) {
      },
      use(f, ...h) {
        return r.has(f) || (f && rt(f.install) ? (r.add(f), f.install(c, ...h)) : rt(f) && (r.add(f), f(c, ...h))), c;
      },
      mixin(f) {
        return i.mixins.includes(f) || i.mixins.push(f), c;
      },
      component(f, h) {
        return h ? (i.components[f] = h, c) : i.components[f];
      },
      directive(f, h) {
        return h ? (i.directives[f] = h, c) : i.directives[f];
      },
      mount(f, h, _) {
        if (!a) {
          const y = c._ceVNode || lt(n, o);
          return y.appContext = i, _ === !0 ? _ = "svg" : _ === !1 && (_ = void 0), t(y, f, _), a = !0, c._container = f, f.__vue_app__ = c, Nn(y.component);
        }
      },
      onUnmount(f) {
        l.push(f);
      },
      unmount() {
        a && (qt(
          l,
          c._instance,
          16
        ), t(null, c._container), delete c._container.__vue_app__);
      },
      provide(f, h) {
        return i.provides[f] = h, c;
      },
      runWithContext(f) {
        const h = Ye;
        Ye = c;
        try {
          return f();
        } finally {
          Ye = h;
        }
      }
    };
    return c;
  };
}
let Ye = null;
const lc = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${Zt(e)}Modifiers`] || t[`${Ne(e)}Modifiers`];
function ac(t, e, ...s) {
  if (t.isUnmounted) return;
  const n = t.vnode.props || bt;
  let o = s;
  const i = e.startsWith("update:"), r = i && lc(n, e.slice(7));
  r && (r.trim && (o = s.map((f) => xt(f) ? f.trim() : f)), r.number && (o = s.map(To)));
  let l, a = n[l = Bn(e)] || // also try camelCase event handler (#2249)
  n[l = Bn(Zt(e))];
  !a && i && (a = n[l = Bn(Ne(e))]), a && qt(
    a,
    t,
    6,
    o
  );
  const c = n[l + "Once"];
  if (c) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[l])
      return;
    t.emitted[l] = !0, qt(
      c,
      t,
      6,
      o
    );
  }
}
const cc = /* @__PURE__ */ new WeakMap();
function Gr(t, e, s = !1) {
  const n = s ? cc : e.emitsCache, o = n.get(t);
  if (o !== void 0)
    return o;
  const i = t.emits;
  let r = {}, l = !1;
  if (!rt(t)) {
    const a = (c) => {
      const f = Gr(c, e, !0);
      f && (l = !0, It(r, f));
    };
    !s && e.mixins.length && e.mixins.forEach(a), t.extends && a(t.extends), t.mixins && t.mixins.forEach(a);
  }
  return !i && !l ? (ht(t) && n.set(t, null), null) : (st(i) ? i.forEach((a) => r[a] = null) : It(r, i), ht(t) && n.set(t, r), r);
}
function Ln(t, e) {
  return !t || !Sn(e) ? !1 : (e = e.slice(2), e = e === "Once" ? e : e.replace(/Once$/, ""), pt(t, e[0].toLowerCase() + e.slice(1)) || pt(t, Ne(e)) || pt(t, e));
}
function oi(t) {
  const {
    type: e,
    vnode: s,
    proxy: n,
    withProxy: o,
    propsOptions: [i],
    slots: r,
    attrs: l,
    emit: a,
    render: c,
    renderCache: f,
    props: h,
    data: _,
    setupState: y,
    ctx: k,
    inheritAttrs: b
  } = t, G = an(t);
  let J, K;
  try {
    if (s.shapeFlag & 4) {
      const j = o || n, U = j;
      J = fe(
        c.call(
          U,
          j,
          f,
          h,
          y,
          _,
          k
        )
      ), K = l;
    } else {
      const j = e;
      J = fe(
        j.length > 1 ? j(
          h,
          { attrs: l, slots: r, emit: a }
        ) : j(
          h,
          null
        )
      ), K = e.props ? l : uc(l);
    }
  } catch (j) {
    Cs.length = 0, In(j, t, 1), J = lt(Ft);
  }
  let X = J;
  if (K && b !== !1) {
    const j = Object.keys(K), { shapeFlag: U } = X;
    j.length && U & 7 && (i && j.some(Tn) && (K = fc(
      K,
      i
    )), X = $e(X, K, !1, !0));
  }
  return s.dirs && (X = $e(X, null, !1, !0), X.dirs = X.dirs ? X.dirs.concat(s.dirs) : s.dirs), s.transition && Os(X, s.transition), J = X, an(G), J;
}
const uc = (t) => {
  let e;
  for (const s in t)
    (s === "class" || s === "style" || Sn(s)) && ((e || (e = {}))[s] = t[s]);
  return e;
}, fc = (t, e) => {
  const s = {};
  for (const n in t)
    (!Tn(n) || !(n.slice(9) in e)) && (s[n] = t[n]);
  return s;
};
function dc(t, e, s) {
  const { props: n, children: o, component: i } = t, { props: r, children: l, patchFlag: a } = e, c = i.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (s && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return n ? ii(n, r, c) : !!r;
    if (a & 8) {
      const f = e.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        const _ = f[h];
        if (Wr(r, n, _) && !Ln(c, _))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : n === r ? !1 : n ? r ? ii(n, r, c) : !0 : !!r;
  return !1;
}
function ii(t, e, s) {
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length)
    return !0;
  for (let o = 0; o < n.length; o++) {
    const i = n[o];
    if (Wr(e, t, i) && !Ln(s, i))
      return !0;
  }
  return !1;
}
function Wr(t, e, s) {
  const n = t[s], o = e[s];
  return s === "style" && ht(n) && ht(o) ? !Co(n, o) : n !== o;
}
function pc({ vnode: t, parent: e, suspense: s }, n) {
  for (; e; ) {
    const o = e.subTree;
    if (o.suspense && o.suspense.activeBranch === t && (o.suspense.vnode.el = o.el = n, t = o), o === t)
      (t = e.vnode).el = n, e = e.parent;
    else
      break;
  }
  s && s.activeBranch === t && (s.vnode.el = n);
}
const Kr = {}, zr = () => Object.create(Kr), Yr = (t) => Object.getPrototypeOf(t) === Kr;
function hc(t, e, s, n = !1) {
  const o = {}, i = zr();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), Jr(t, e, o, i);
  for (const r in t.propsOptions[0])
    r in o || (o[r] = void 0);
  s ? t.props = n ? o : /* @__PURE__ */ ya(o) : t.type.props ? t.props = o : t.props = i, t.attrs = i;
}
function gc(t, e, s, n) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: r }
  } = t, l = /* @__PURE__ */ ut(o), [a] = t.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const f = t.vnode.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        let _ = f[h];
        if (Ln(t.emitsOptions, _))
          continue;
        const y = e[_];
        if (a)
          if (pt(i, _))
            y !== i[_] && (i[_] = y, c = !0);
          else {
            const k = Zt(_);
            o[k] = po(
              a,
              l,
              k,
              y,
              t,
              !1
            );
          }
        else
          y !== i[_] && (i[_] = y, c = !0);
      }
    }
  } else {
    Jr(t, e, o, i) && (c = !0);
    let f;
    for (const h in l)
      (!e || // for camelCase
      !pt(e, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Ne(h)) === h || !pt(e, f))) && (a ? s && // for camelCase
      (s[h] !== void 0 || // for kebab-case
      s[f] !== void 0) && (o[h] = po(
        a,
        l,
        h,
        void 0,
        t,
        !0
      )) : delete o[h]);
    if (i !== l)
      for (const h in i)
        (!e || !pt(e, h)) && (delete i[h], c = !0);
  }
  c && we(t.attrs, "set", "");
}
function Jr(t, e, s, n) {
  const [o, i] = t.propsOptions;
  let r = !1, l;
  if (e)
    for (let a in e) {
      if (vs(a))
        continue;
      const c = e[a];
      let f;
      o && pt(o, f = Zt(a)) ? !i || !i.includes(f) ? s[f] = c : (l || (l = {}))[f] = c : Ln(t.emitsOptions, a) || (!(a in n) || c !== n[a]) && (n[a] = c, r = !0);
    }
  if (i) {
    const a = /* @__PURE__ */ ut(s), c = l || bt;
    for (let f = 0; f < i.length; f++) {
      const h = i[f];
      s[h] = po(
        o,
        a,
        h,
        c[h],
        t,
        !pt(c, h)
      );
    }
  }
  return r;
}
function po(t, e, s, n, o, i) {
  const r = t[s];
  if (r != null) {
    const l = pt(r, "default");
    if (l && n === void 0) {
      const a = r.default;
      if (r.type !== Function && !r.skipFactory && rt(a)) {
        const { propsDefaults: c } = o;
        if (s in c)
          n = c[s];
        else {
          const f = js(o);
          n = c[s] = a.call(
            null,
            e
          ), f();
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
    ] && (n === "" || n === Ne(s)) && (n = !0));
  }
  return n;
}
const mc = /* @__PURE__ */ new WeakMap();
function qr(t, e, s = !1) {
  const n = s ? mc : e.propsCache, o = n.get(t);
  if (o)
    return o;
  const i = t.props, r = {}, l = [];
  let a = !1;
  if (!rt(t)) {
    const f = (h) => {
      a = !0;
      const [_, y] = qr(h, e, !0);
      It(r, _), y && l.push(...y);
    };
    !s && e.mixins.length && e.mixins.forEach(f), t.extends && f(t.extends), t.mixins && t.mixins.forEach(f);
  }
  if (!i && !a)
    return ht(t) && n.set(t, ss), ss;
  if (st(i))
    for (let f = 0; f < i.length; f++) {
      const h = Zt(i[f]);
      ri(h) && (r[h] = bt);
    }
  else if (i)
    for (const f in i) {
      const h = Zt(f);
      if (ri(h)) {
        const _ = i[f], y = r[h] = st(_) || rt(_) ? { type: _ } : It({}, _), k = y.type;
        let b = !1, G = !0;
        if (st(k))
          for (let J = 0; J < k.length; ++J) {
            const K = k[J], X = rt(K) && K.name;
            if (X === "Boolean") {
              b = !0;
              break;
            } else X === "String" && (G = !1);
          }
        else
          b = rt(k) && k.name === "Boolean";
        y[
          0
          /* shouldCast */
        ] = b, y[
          1
          /* shouldCastTrue */
        ] = G, (b || pt(y, "default")) && l.push(h);
      }
    }
  const c = [r, l];
  return ht(t) && n.set(t, c), c;
}
function ri(t) {
  return t[0] !== "$" && !vs(t);
}
const Lo = (t) => t === "_" || t === "_ctx" || t === "$stable", $o = (t) => st(t) ? t.map(fe) : [fe(t)], yc = (t, e, s) => {
  if (e._n)
    return e;
  const n = kr((...o) => $o(e(...o)), s);
  return n._c = !1, n;
}, Xr = (t, e, s) => {
  const n = t._ctx;
  for (const o in t) {
    if (Lo(o)) continue;
    const i = t[o];
    if (rt(i))
      e[o] = yc(o, i, n);
    else if (i != null) {
      const r = $o(i);
      e[o] = () => r;
    }
  }
}, Zr = (t, e) => {
  const s = $o(e);
  t.slots.default = () => s;
}, Qr = (t, e, s) => {
  for (const n in e)
    (s || !Lo(n)) && (t[n] = e[n]);
}, vc = (t, e, s) => {
  const n = t.slots = zr();
  if (t.vnode.shapeFlag & 32) {
    const o = e._;
    o ? (Qr(n, e, s), s && tr(n, "_", o, !0)) : Xr(e, n);
  } else e && Zr(t, e);
}, _c = (t, e, s) => {
  const { vnode: n, slots: o } = t;
  let i = !0, r = bt;
  if (n.shapeFlag & 32) {
    const l = e._;
    l ? s && l === 1 ? i = !1 : Qr(o, e, s) : (i = !e.$stable, Xr(e, o)), r = e;
  } else e && (Zr(t, e), r = { default: 1 });
  if (i)
    for (const l in o)
      !Lo(l) && r[l] == null && delete o[l];
}, Nt = Tc;
function bc(t) {
  return wc(t);
}
function wc(t, e) {
  const s = kn();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: o,
    patchProp: i,
    createElement: r,
    createText: l,
    createComment: a,
    setText: c,
    setElementText: f,
    parentNode: h,
    nextSibling: _,
    setScopeId: y = pe,
    insertStaticContent: k
  } = t, b = (d, p, v, L = null, I = null, A = null, H = void 0, B = null, F = !!p.dynamicChildren) => {
    if (d === p)
      return;
    d && !We(d, p) && (L = Vs(d), Q(d, I, A, !0), d = null), p.patchFlag === -2 && (F = !1, p.dynamicChildren = null);
    const { type: M, ref: nt, shapeFlag: z } = p;
    switch (M) {
      case $n:
        G(d, p, v, L);
        break;
      case Ft:
        J(d, p, v, L);
        break;
      case Qs:
        d == null && K(p, v, L, H);
        break;
      case it:
        S(
          d,
          p,
          v,
          L,
          I,
          A,
          H,
          B,
          F
        );
        break;
      default:
        z & 1 ? U(
          d,
          p,
          v,
          L,
          I,
          A,
          H,
          B,
          F
        ) : z & 6 ? T(
          d,
          p,
          v,
          L,
          I,
          A,
          H,
          B,
          F
        ) : (z & 64 || z & 128) && M.process(
          d,
          p,
          v,
          L,
          I,
          A,
          H,
          B,
          F,
          as
        );
    }
    nt != null && I ? xs(nt, d && d.ref, A, p || d, !p) : nt == null && d && d.ref != null && xs(d.ref, null, A, d, !0);
  }, G = (d, p, v, L) => {
    if (d == null)
      n(
        p.el = l(p.children),
        v,
        L
      );
    else {
      const I = p.el = d.el;
      p.children !== d.children && c(I, p.children);
    }
  }, J = (d, p, v, L) => {
    d == null ? n(
      p.el = a(p.children || ""),
      v,
      L
    ) : p.el = d.el;
  }, K = (d, p, v, L) => {
    [d.el, d.anchor] = k(
      d.children,
      p,
      v,
      L,
      d.el,
      d.anchor
    );
  }, X = ({ el: d, anchor: p }, v, L) => {
    let I;
    for (; d && d !== p; )
      I = _(d), n(d, v, L), d = I;
    n(p, v, L);
  }, j = ({ el: d, anchor: p }) => {
    let v;
    for (; d && d !== p; )
      v = _(d), o(d), d = v;
    o(p);
  }, U = (d, p, v, L, I, A, H, B, F) => {
    if (p.type === "svg" ? H = "svg" : p.type === "math" && (H = "mathml"), d == null)
      et(
        p,
        v,
        L,
        I,
        A,
        H,
        B,
        F
      );
    else {
      const M = d.el && d.el._isVueCE ? d.el : null;
      try {
        M && M._beginPatch(), O(
          d,
          p,
          I,
          A,
          H,
          B,
          F
        );
      } finally {
        M && M._endPatch();
      }
    }
  }, et = (d, p, v, L, I, A, H, B) => {
    let F, M;
    const { props: nt, shapeFlag: z, transition: tt, dirs: ot } = d;
    if (F = d.el = r(
      d.type,
      A,
      nt && nt.is,
      nt
    ), z & 8 ? f(F, d.children) : z & 16 && W(
      d.children,
      F,
      null,
      L,
      I,
      zn(d, A),
      H,
      B
    ), ot && De(d, null, L, "created"), Y(F, d, d.scopeId, H, L), nt) {
      for (const vt in nt)
        vt !== "value" && !vs(vt) && i(F, vt, null, nt[vt], A, L);
      "value" in nt && i(F, "value", null, nt.value, A), (M = nt.onVnodeBeforeMount) && le(M, L, d);
    }
    ot && De(d, null, L, "beforeMount");
    const ct = xc(I, tt);
    ct && tt.beforeEnter(F), n(F, p, v), ((M = nt && nt.onVnodeMounted) || ct || ot) && Nt(() => {
      try {
        M && le(M, L, d), ct && tt.enter(F), ot && De(d, null, L, "mounted");
      } finally {
      }
    }, I);
  }, Y = (d, p, v, L, I) => {
    if (v && y(d, v), L)
      for (let A = 0; A < L.length; A++)
        y(d, L[A]);
    if (I) {
      let A = I.subTree;
      if (p === A || sl(A.type) && (A.ssContent === p || A.ssFallback === p)) {
        const H = I.vnode;
        Y(
          d,
          H,
          H.scopeId,
          H.slotScopeIds,
          I.parent
        );
      }
    }
  }, W = (d, p, v, L, I, A, H, B, F = 0) => {
    for (let M = F; M < d.length; M++) {
      const nt = d[M] = B ? _e(d[M]) : fe(d[M]);
      b(
        null,
        nt,
        p,
        v,
        L,
        I,
        A,
        H,
        B
      );
    }
  }, O = (d, p, v, L, I, A, H) => {
    const B = p.el = d.el;
    let { patchFlag: F, dynamicChildren: M, dirs: nt } = p;
    F |= d.patchFlag & 16;
    const z = d.props || bt, tt = p.props || bt;
    let ot;
    if (v && Fe(v, !1), (ot = tt.onVnodeBeforeUpdate) && le(ot, v, p, d), nt && De(p, d, v, "beforeUpdate"), v && Fe(v, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    M && (!d.dynamicChildren || d.dynamicChildren.length !== M.length) && (F = 0, H = !1, M = null), (z.innerHTML && tt.innerHTML == null || z.textContent && tt.textContent == null) && f(B, ""), M ? V(
      d.dynamicChildren,
      M,
      B,
      v,
      L,
      zn(p, I),
      A
    ) : H || R(
      d,
      p,
      B,
      null,
      v,
      L,
      zn(p, I),
      A,
      !1
    ), F > 0) {
      if (F & 16)
        q(B, z, tt, v, I);
      else if (F & 2 && z.class !== tt.class && i(B, "class", null, tt.class, I), F & 4 && i(B, "style", z.style, tt.style, I), F & 8) {
        const ct = p.dynamicProps;
        for (let vt = 0; vt < ct.length; vt++) {
          const yt = ct[vt], At = z[yt], Ot = tt[yt];
          (Ot !== At || yt === "value") && i(B, yt, At, Ot, I, v);
        }
      }
      F & 1 && d.children !== p.children && f(B, p.children);
    } else !H && M == null && q(B, z, tt, v, I);
    ((ot = tt.onVnodeUpdated) || nt) && Nt(() => {
      ot && le(ot, v, p, d), nt && De(p, d, v, "updated");
    }, L);
  }, V = (d, p, v, L, I, A, H) => {
    for (let B = 0; B < p.length; B++) {
      const F = d[B], M = p[B], nt = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        F.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (F.type === it || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !We(F, M) || // - In the case of a component, it could contain anything.
        F.shapeFlag & 198) ? h(F.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      b(
        F,
        M,
        nt,
        null,
        L,
        I,
        A,
        H,
        !0
      );
    }
  }, q = (d, p, v, L, I) => {
    if (p !== v) {
      if (p !== bt)
        for (const A in p)
          !vs(A) && !(A in v) && i(
            d,
            A,
            p[A],
            null,
            I,
            L
          );
      for (const A in v) {
        if (vs(A)) continue;
        const H = v[A], B = p[A];
        H !== B && A !== "value" && i(d, A, B, H, I, L);
      }
      "value" in v && i(d, "value", p.value, v.value, I);
    }
  }, S = (d, p, v, L, I, A, H, B, F) => {
    const M = p.el = d ? d.el : l(""), nt = p.anchor = d ? d.anchor : l("");
    let { patchFlag: z, dynamicChildren: tt, slotScopeIds: ot } = p;
    ot && (B = B ? B.concat(ot) : ot), d == null ? (n(M, v, L), n(nt, v, L), W(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      v,
      nt,
      I,
      A,
      H,
      B,
      F
    )) : z > 0 && z & 64 && tt && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    d.dynamicChildren && d.dynamicChildren.length === tt.length ? (V(
      d.dynamicChildren,
      tt,
      v,
      I,
      A,
      H,
      B
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (p.key != null || I && p === I.subTree) && No(
      d,
      p,
      !0
      /* shallow */
    )) : R(
      d,
      p,
      v,
      nt,
      I,
      A,
      H,
      B,
      F
    );
  }, T = (d, p, v, L, I, A, H, B, F) => {
    p.slotScopeIds = B, d == null ? p.shapeFlag & 512 ? I.ctx.activate(
      p,
      v,
      L,
      H,
      F
    ) : w(
      p,
      v,
      L,
      I,
      A,
      H,
      F
    ) : C(d, p, F);
  }, w = (d, p, v, L, I, A, H) => {
    const B = d.component = Ic(
      d,
      L,
      I
    );
    if (Rn(d) && (B.ctx.renderer = as), Rc(B, !1, H), B.asyncDep) {
      if (I && I.registerDep(B, x, H), !d.el) {
        const F = B.subTree = lt(Ft);
        J(null, F, p, v), d.placeholder = F.el;
      }
    } else
      x(
        B,
        d,
        p,
        v,
        I,
        A,
        H
      );
  }, C = (d, p, v) => {
    const L = p.component = d.component;
    if (dc(d, p, v))
      if (L.asyncDep && !L.asyncResolved) {
        E(L, p, v);
        return;
      } else
        L.next = p, L.update();
    else
      p.el = d.el, L.vnode = p;
  }, x = (d, p, v, L, I, A, H) => {
    const B = () => {
      if (d.isMounted) {
        let { next: z, bu: tt, u: ot, parent: ct, vnode: vt } = d;
        {
          const ie = tl(d);
          if (ie) {
            z && (z.el = vt.el, E(d, z, H)), ie.asyncDep.then(() => {
              Nt(() => {
                d.isUnmounted || M();
              }, I);
            });
            return;
          }
        }
        let yt = z, At;
        Fe(d, !1), z ? (z.el = vt.el, E(d, z, H)) : z = vt, tt && Zs(tt), (At = z.props && z.props.onVnodeBeforeUpdate) && le(At, ct, z, vt), Fe(d, !0);
        const Ot = oi(d), oe = d.subTree;
        d.subTree = Ot, b(
          oe,
          Ot,
          // parent may have changed if it's in a teleport
          h(oe.el),
          // anchor may have changed if it's in a fragment
          Vs(oe),
          d,
          I,
          A
        ), z.el = Ot.el, yt === null && pc(d, Ot.el), ot && Nt(ot, I), (At = z.props && z.props.onVnodeUpdated) && Nt(
          () => le(At, ct, z, vt),
          I
        );
      } else {
        let z;
        const { el: tt, props: ot } = p, { bm: ct, m: vt, parent: yt, root: At, type: Ot } = d, oe = Ss(p);
        Fe(d, !1), ct && Zs(ct), !oe && (z = ot && ot.onVnodeBeforeMount) && le(z, yt, p), Fe(d, !0);
        {
          At.ce && At.ce._hasShadowRoot() && At.ce._injectChildStyle(
            Ot,
            d.parent ? d.parent.type : void 0
          );
          const ie = d.subTree = oi(d);
          b(
            null,
            ie,
            v,
            L,
            d,
            I,
            A
          ), p.el = ie.el;
        }
        if (vt && Nt(vt, I), !oe && (z = ot && ot.onVnodeMounted)) {
          const ie = p;
          Nt(
            () => le(z, yt, ie),
            I
          );
        }
        (p.shapeFlag & 256 || yt && Ss(yt.vnode) && yt.vnode.shapeFlag & 256) && d.a && Nt(d.a, I), d.isMounted = !0, p = v = L = null;
      }
    };
    d.scope.on();
    const F = d.effect = new lr(B);
    d.scope.off();
    const M = d.update = F.run.bind(F), nt = d.job = F.runIfDirty.bind(F);
    nt.i = d, nt.id = d.uid, F.scheduler = () => Oo(nt), Fe(d, !0), M();
  }, E = (d, p, v) => {
    p.component = d;
    const L = d.vnode.props;
    d.vnode = p, d.next = null, gc(d, p.props, L, v), _c(d, p.children, v), he(), Yo(d), ge();
  }, R = (d, p, v, L, I, A, H, B, F = !1) => {
    const M = d && d.children, nt = d ? d.shapeFlag : 0, z = p.children, { patchFlag: tt, shapeFlag: ot } = p;
    if (tt > 0) {
      if (tt & 128) {
        dt(
          M,
          z,
          v,
          L,
          I,
          A,
          H,
          B,
          F
        );
        return;
      } else if (tt & 256) {
        Z(
          M,
          z,
          v,
          L,
          I,
          A,
          H,
          B,
          F
        );
        return;
      }
    }
    ot & 8 ? (nt & 16 && ne(M, I, A), z !== M && f(v, z)) : nt & 16 ? ot & 16 ? dt(
      M,
      z,
      v,
      L,
      I,
      A,
      H,
      B,
      F
    ) : ne(M, I, A, !0) : (nt & 8 && f(v, ""), ot & 16 && W(
      z,
      v,
      L,
      I,
      A,
      H,
      B,
      F
    ));
  }, Z = (d, p, v, L, I, A, H, B, F) => {
    d = d || ss, p = p || ss;
    const M = d.length, nt = p.length, z = Math.min(M, nt);
    let tt;
    for (tt = 0; tt < z; tt++) {
      const ot = p[tt] = F ? _e(p[tt]) : fe(p[tt]);
      b(
        d[tt],
        ot,
        v,
        null,
        I,
        A,
        H,
        B,
        F
      );
    }
    M > nt ? ne(
      d,
      I,
      A,
      !0,
      !1,
      z
    ) : W(
      p,
      v,
      L,
      I,
      A,
      H,
      B,
      F,
      z
    );
  }, dt = (d, p, v, L, I, A, H, B, F) => {
    let M = 0;
    const nt = p.length;
    let z = d.length - 1, tt = nt - 1;
    for (; M <= z && M <= tt; ) {
      const ot = d[M], ct = p[M] = F ? _e(p[M]) : fe(p[M]);
      if (We(ot, ct))
        b(
          ot,
          ct,
          v,
          null,
          I,
          A,
          H,
          B,
          F
        );
      else
        break;
      M++;
    }
    for (; M <= z && M <= tt; ) {
      const ot = d[z], ct = p[tt] = F ? _e(p[tt]) : fe(p[tt]);
      if (We(ot, ct))
        b(
          ot,
          ct,
          v,
          null,
          I,
          A,
          H,
          B,
          F
        );
      else
        break;
      z--, tt--;
    }
    if (M > z) {
      if (M <= tt) {
        const ot = tt + 1, ct = ot < nt ? p[ot].el : L;
        for (; M <= tt; )
          b(
            null,
            p[M] = F ? _e(p[M]) : fe(p[M]),
            v,
            ct,
            I,
            A,
            H,
            B,
            F
          ), M++;
      }
    } else if (M > tt)
      for (; M <= z; )
        Q(d[M], I, A, !0), M++;
    else {
      const ot = M, ct = M, vt = /* @__PURE__ */ new Map();
      for (M = ct; M <= tt; M++) {
        const Vt = p[M] = F ? _e(p[M]) : fe(p[M]);
        Vt.key != null && vt.set(Vt.key, M);
      }
      let yt, At = 0;
      const Ot = tt - ct + 1;
      let oe = !1, ie = 0;
      const cs = new Array(Ot);
      for (M = 0; M < Ot; M++) cs[M] = 0;
      for (M = ot; M <= z; M++) {
        const Vt = d[M];
        if (At >= Ot) {
          Q(Vt, I, A, !0);
          continue;
        }
        let re;
        if (Vt.key != null)
          re = vt.get(Vt.key);
        else
          for (yt = ct; yt <= tt; yt++)
            if (cs[yt - ct] === 0 && We(Vt, p[yt])) {
              re = yt;
              break;
            }
        re === void 0 ? Q(Vt, I, A, !0) : (cs[re - ct] = M + 1, re >= ie ? ie = re : oe = !0, b(
          Vt,
          p[re],
          v,
          null,
          I,
          A,
          H,
          B,
          F
        ), At++);
      }
      const jo = oe ? Sc(cs) : ss;
      for (yt = jo.length - 1, M = Ot - 1; M >= 0; M--) {
        const Vt = ct + M, re = p[Vt], Vo = p[Vt + 1], Ho = Vt + 1 < nt ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Vo.el || el(Vo)
        ) : L;
        cs[M] === 0 ? b(
          null,
          re,
          v,
          Ho,
          I,
          A,
          H,
          B,
          F
        ) : oe && (yt < 0 || M !== jo[yt] ? mt(re, v, Ho, 2) : yt--);
      }
    }
  }, mt = (d, p, v, L, I = null) => {
    const { el: A, type: H, transition: B, children: F, shapeFlag: M } = d;
    if (M & 6) {
      mt(d.component.subTree, p, v, L);
      return;
    }
    if (M & 128) {
      d.suspense.move(p, v, L);
      return;
    }
    if (M & 64) {
      H.move(d, p, v, as);
      return;
    }
    if (H === it) {
      n(A, p, v);
      for (let z = 0; z < F.length; z++)
        mt(F[z], p, v, L);
      n(d.anchor, p, v);
      return;
    }
    if (H === Qs) {
      X(d, p, v);
      return;
    }
    if (L !== 2 && M & 1 && B)
      if (L === 0)
        B.persisted && !A[zt] ? n(A, p, v) : (B.beforeEnter(A), n(A, p, v), Nt(() => B.enter(A), I));
      else {
        const { leave: z, delayLeave: tt, afterLeave: ot } = B, ct = () => {
          d.ctx.isUnmounted ? o(A) : n(A, p, v);
        }, vt = () => {
          const yt = A._isLeaving || !!A[zt];
          A._isLeaving && A[zt](
            !0
            /* cancelled */
          ), B.persisted && !yt ? ct() : z(A, () => {
            ct(), ot && ot();
          });
        };
        tt ? tt(A, ct, vt) : vt();
      }
    else
      n(A, p, v);
  }, Q = (d, p, v, L = !1, I = !1) => {
    const {
      type: A,
      props: H,
      ref: B,
      children: F,
      dynamicChildren: M,
      shapeFlag: nt,
      patchFlag: z,
      dirs: tt,
      cacheIndex: ot,
      memo: ct
    } = d;
    if (z === -2 && (I = !1), B != null && (he(), xs(B, null, v, d, !0), ge()), ot != null && (p.renderCache[ot] = void 0), nt & 256) {
      p.ctx.deactivate(d);
      return;
    }
    const vt = nt & 1 && tt, yt = !Ss(d);
    let At;
    if (yt && (At = H && H.onVnodeBeforeUnmount) && le(At, p, d), nt & 6)
      se(d.component, v, L);
    else {
      if (nt & 128) {
        d.suspense.unmount(v, L);
        return;
      }
      vt && De(d, null, p, "beforeUnmount"), nt & 64 ? d.type.remove(
        d,
        p,
        v,
        as,
        L
      ) : M && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !M.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (A !== it || z > 0 && z & 64) ? ne(
        M,
        p,
        v,
        !1,
        !0
      ) : (A === it && z & 384 || !I && nt & 16) && ne(F, p, v), L && St(d);
    }
    const Ot = ct != null && ot == null;
    (yt && (At = H && H.onVnodeUnmounted) || vt || Ot) && Nt(() => {
      At && le(At, p, d), vt && De(d, null, p, "unmounted"), Ot && (d.el = null);
    }, v);
  }, St = (d) => {
    const { type: p, el: v, anchor: L, transition: I } = d;
    if (p === it) {
      Et(v, L);
      return;
    }
    if (p === Qs) {
      j(d);
      return;
    }
    const A = () => {
      o(v), I && !I.persisted && I.afterLeave && I.afterLeave();
    };
    if (d.shapeFlag & 1 && I && !I.persisted) {
      const { leave: H, delayLeave: B } = I, F = () => H(v, A);
      B ? B(d.el, A, F) : F();
    } else
      A();
  }, Et = (d, p) => {
    let v;
    for (; d !== p; )
      v = _(d), o(d), d = v;
    o(p);
  }, se = (d, p, v) => {
    const { bum: L, scope: I, job: A, subTree: H, um: B, m: F, a: M } = d;
    li(F), li(M), L && Zs(L), I.stop(), A && (A.flags |= 8, Q(H, d, p, v)), B && Nt(B, p), Nt(() => {
      d.isUnmounted = !0;
    }, p);
  }, ne = (d, p, v, L = !1, I = !1, A = 0) => {
    for (let H = A; H < d.length; H++)
      Q(d[H], p, v, L, I);
  }, Vs = (d) => {
    if (d.shapeFlag & 6)
      return Vs(d.component.subTree);
    if (d.shapeFlag & 128)
      return d.suspense.next();
    const p = _(d.anchor || d.el), v = p && p[Pr];
    return v ? _(v) : p;
  };
  let Un = !1;
  const Bo = (d, p, v) => {
    let L;
    d == null ? p._vnode && (Q(p._vnode, null, null, !0), L = p._vnode.component) : b(
      p._vnode || null,
      d,
      p,
      null,
      null,
      null,
      v
    ), p._vnode = d, Un || (Un = !0, Yo(L), Tr(), Un = !1);
  }, as = {
    p: b,
    um: Q,
    m: mt,
    r: St,
    mt: w,
    mc: W,
    pc: R,
    pbc: V,
    n: Vs,
    o: t
  };
  return {
    render: Bo,
    hydrate: void 0,
    createApp: rc(Bo)
  };
}
function zn({ type: t, props: e }, s) {
  return s === "svg" && t === "foreignObject" || s === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : s;
}
function Fe({ effect: t, job: e }, s) {
  s ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function xc(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function No(t, e, s = !1) {
  const n = t.children, o = e.children;
  if (st(n) && st(o))
    for (let i = 0; i < n.length; i++) {
      const r = n[i];
      let l = o[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[i] = _e(o[i]), l.el = r.el), !s && l.patchFlag !== -2 && No(r, l)), l.type === $n && (l.patchFlag === -1 && (l = o[i] = _e(l)), l.el = r.el), l.type === Ft && !l.el && (l.el = r.el);
    }
}
function Sc(t) {
  const e = t.slice(), s = [0];
  let n, o, i, r, l;
  const a = t.length;
  for (n = 0; n < a; n++) {
    const c = t[n];
    if (c !== 0) {
      if (o = s[s.length - 1], t[o] < c) {
        e[n] = o, s.push(n);
        continue;
      }
      for (i = 0, r = s.length - 1; i < r; )
        l = i + r >> 1, t[s[l]] < c ? i = l + 1 : r = l;
      c < t[s[i]] && (i > 0 && (e[n] = s[i - 1]), s[i] = n);
    }
  }
  for (i = s.length, r = s[i - 1]; i-- > 0; )
    s[i] = r, r = e[r];
  return s;
}
function tl(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : tl(e);
}
function li(t) {
  if (t)
    for (let e = 0; e < t.length; e++)
      t[e].flags |= 8;
}
function el(t) {
  if (t.placeholder)
    return t.placeholder;
  const e = t.component;
  return e ? el(e.subTree) : null;
}
const sl = (t) => t.__isSuspense;
function Tc(t, e) {
  e && e.pendingBranch ? st(t) ? e.effects.push(...t) : e.effects.push(t) : Pa(t);
}
const it = /* @__PURE__ */ Symbol.for("v-fgt"), $n = /* @__PURE__ */ Symbol.for("v-txt"), Ft = /* @__PURE__ */ Symbol.for("v-cmt"), Qs = /* @__PURE__ */ Symbol.for("v-stc"), Cs = [];
let Ht = null;
function P(t = !1) {
  Cs.push(Ht = t ? null : []);
}
function Cc() {
  Cs.pop(), Ht = Cs[Cs.length - 1] || null;
}
let Ls = 1;
function fn(t, e = !1) {
  Ls += t, t < 0 && Ht && e && (Ht.hasOnce = !0);
}
function nl(t) {
  return t.dynamicChildren = Ls > 0 ? Ht || ss : null, Cc(), Ls > 0 && Ht && Ht.push(t), t;
}
function N(t, e, s, n, o, i) {
  return nl(
    u(
      t,
      e,
      s,
      n,
      o,
      i,
      !0
    )
  );
}
function te(t, e, s, n, o) {
  return nl(
    lt(
      t,
      e,
      s,
      n,
      o,
      !0
    )
  );
}
function dn(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function We(t, e) {
  return t.type === e.type && t.key === e.key;
}
const ol = ({ key: t }) => t ?? null, tn = ({
  ref: t,
  ref_key: e,
  ref_for: s
}) => (typeof t == "number" && (t = "" + t), t != null ? xt(t) || /* @__PURE__ */ Ct(t) || rt(t) ? { i: Yt, r: t, k: e, f: !!s } : t : null);
function u(t, e = null, s = null, n = 0, o = null, i = t === it ? 0 : 1, r = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && ol(e),
    ref: e && tn(e),
    scopeId: Ar,
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
    ctx: Yt
  };
  return l ? (pn(a, s), i & 128 && t.normalize(a)) : s && (a.shapeFlag |= xt(s) ? 8 : 16), Ls > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  Ht && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Ht.push(a), a;
}
const lt = Ac;
function Ac(t, e = null, s = null, n = 0, o = null, i = !1) {
  if ((!t || t === Za) && (t = Ft), dn(t)) {
    const l = $e(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return s && pn(l, s), Ls > 0 && !i && Ht && (l.shapeFlag & 6 ? Ht[Ht.indexOf(t)] = l : Ht.push(l)), l.patchFlag = -2, l;
  }
  if (Nc(t) && (t = t.__vccOpts), e) {
    e = kc(e);
    let { class: l, style: a } = e;
    l && !xt(l) && (e.class = at(l)), ht(a) && (/* @__PURE__ */ Pn(a) && !st(a) && (a = It({}, a)), e.style = Le(a));
  }
  const r = xt(t) ? 1 : sl(t) ? 128 : Ir(t) ? 64 : ht(t) ? 4 : rt(t) ? 2 : 0;
  return u(
    t,
    e,
    s,
    n,
    o,
    r,
    i,
    !0
  );
}
function kc(t) {
  return t ? /* @__PURE__ */ Pn(t) || Yr(t) ? It({}, t) : t : null;
}
function $e(t, e, s = !1, n = !1) {
  const { props: o, ref: i, patchFlag: r, children: l, transition: a } = t, c = e ? Ec(o || {}, e) : o, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: c,
    key: c && ol(c),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? st(i) ? i.concat(tn(e)) : [i, tn(e)] : tn(e)
    ) : i,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: l,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== it ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && $e(t.ssContent),
    ssFallback: t.ssFallback && $e(t.ssFallback),
    placeholder: t.placeholder,
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return a && n && Os(
    f,
    a.clone(f)
  ), f;
}
function en(t = " ", e = 0) {
  return lt($n, null, t, e);
}
function zs(t, e) {
  const s = lt(Qs, null, t);
  return s.staticCount = e, s;
}
function _t(t = "", e = !1) {
  return e ? (P(), te(Ft, null, t)) : lt(Ft, null, t);
}
function fe(t) {
  return t == null || typeof t == "boolean" ? lt(Ft) : st(t) ? lt(
    it,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : dn(t) ? _e(t) : lt($n, null, String(t));
}
function _e(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : $e(t);
}
function pn(t, e) {
  let s = 0;
  const { shapeFlag: n } = t;
  if (e == null)
    e = null;
  else if (st(e))
    s = 16;
  else if (typeof e == "object")
    if (n & 65) {
      const o = e.default;
      o && (o._c && (o._d = !1), pn(t, o()), o._c && (o._d = !0));
      return;
    } else {
      s = 32;
      const o = e._;
      !o && !Yr(e) ? e._ctx = Yt : o === 3 && Yt && (Yt.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else if (rt(e)) {
    if (n & 65) {
      pn(t, { default: e });
      return;
    }
    e = { default: e, _ctx: Yt }, s = 32;
  } else
    e = String(e), n & 64 ? (s = 16, e = [en(e)]) : s = 8;
  t.children = e, t.shapeFlag |= s;
}
function Ec(...t) {
  const e = {};
  for (let s = 0; s < t.length; s++) {
    const n = t[s];
    for (const o in n)
      if (o === "class")
        e.class !== n.class && (e.class = at([e.class, n.class]));
      else if (o === "style")
        e.style = Le([e.style, n.style]);
      else if (Sn(o)) {
        const i = e[o], r = n[o];
        r && i !== r && !(st(i) && i.includes(r)) ? e[o] = i ? [].concat(i, r) : r : r == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Tn(o) && (e[o] = r);
      } else o !== "" && (e[o] = n[o]);
  }
  return e;
}
function le(t, e, s, n = null) {
  qt(t, e, 7, [
    s,
    n
  ]);
}
const Mc = Hr();
let Pc = 0;
function Ic(t, e, s) {
  const n = t.type, o = (e ? e.appContext : t.appContext) || Mc, i = {
    uid: Pc++,
    vnode: t,
    type: n,
    parent: e,
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
    scope: new or(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(o.provides),
    ids: e ? e.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: qr(n, o),
    emitsOptions: Gr(n, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: bt,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: bt,
    data: bt,
    props: bt,
    attrs: bt,
    slots: bt,
    refs: bt,
    setupState: bt,
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
  return i.ctx = { _: i }, i.root = e ? e.root : i, i.emit = ac.bind(null, i), t.ce && t.ce(i), i;
}
let Ut = null;
const Do = () => Ut || Yt;
let hn, ho;
{
  const t = kn(), e = (s, n) => {
    let o;
    return (o = t[s]) || (o = t[s] = []), o.push(n), (i) => {
      o.length > 1 ? o.forEach((r) => r(i)) : o[0](i);
    };
  };
  hn = e(
    "__VUE_INSTANCE_SETTERS__",
    (s) => Ut = s
  ), ho = e(
    "__VUE_SSR_SETTERS__",
    (s) => $s = s
  );
}
const js = (t) => {
  const e = Ut;
  return hn(t), t.scope.on(), () => {
    t.scope.off(), hn(e);
  };
}, ai = () => {
  Ut && Ut.scope.off(), hn(null);
};
function il(t) {
  return t.vnode.shapeFlag & 4;
}
let $s = !1;
function Rc(t, e = !1, s = !1) {
  e && ho(e);
  const { props: n, children: o } = t.vnode, i = il(t);
  hc(t, n, i, e), vc(t, o, s || e);
  const r = i ? Oc(t, e) : void 0;
  return e && ho(!1), r;
}
function Oc(t, e) {
  const s = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, Qa);
  const { setup: n } = s;
  if (n) {
    he();
    const o = t.setupContext = n.length > 1 ? $c(t) : null, i = js(t), r = Fs(
      n,
      t,
      0,
      [
        t.props,
        o
      ]
    ), l = qi(r);
    if (ge(), i(), (l || t.sp) && !Ss(t) && Fr(t), l) {
      if (r.then(ai, ai), e)
        return r.then((a) => {
          ci(t, a);
        }).catch((a) => {
          In(a, t, 0);
        });
      t.asyncDep = r;
    } else
      ci(t, r);
  } else
    rl(t);
}
function ci(t, e, s) {
  rt(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : ht(e) && (t.setupState = wr(e)), rl(t);
}
function rl(t, e, s) {
  const n = t.type;
  t.render || (t.render = n.render || pe);
  {
    const o = js(t);
    he();
    try {
      tc(t);
    } finally {
      ge(), o();
    }
  }
}
const Lc = {
  get(t, e) {
    return Lt(t, "get", ""), t[e];
  }
};
function $c(t) {
  const e = (s) => {
    t.exposed = s || {};
  };
  return {
    attrs: new Proxy(t.attrs, Lc),
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function Nn(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(wr(Ro(t.exposed)), {
    get(e, s) {
      if (s in e)
        return e[s];
      if (s in Ts)
        return Ts[s](t);
    },
    has(e, s) {
      return s in e || s in Ts;
    }
  })) : t.proxy;
}
function Nc(t) {
  return rt(t) && "__vccOpts" in t;
}
const Pt = (t, e) => /* @__PURE__ */ Ca(t, e, $s);
function Dc(t, e, s) {
  try {
    fn(-1);
    const n = arguments.length;
    return n === 2 ? ht(e) && !st(e) ? dn(e) ? lt(t, null, [e]) : lt(t, e) : lt(t, null, e) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && dn(s) && (s = [s]), lt(t, e, s));
  } finally {
    fn(1);
  }
}
const Fc = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let go;
const ui = typeof window < "u" && window.trustedTypes;
if (ui)
  try {
    go = /* @__PURE__ */ ui.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const ll = go ? (t) => go.createHTML(t) : (t) => t, Uc = "http://www.w3.org/2000/svg", Bc = "http://www.w3.org/1998/Math/MathML", ve = typeof document < "u" ? document : null, fi = ve && /* @__PURE__ */ ve.createElement("template"), jc = {
  insert: (t, e, s) => {
    e.insertBefore(t, s || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, s, n) => {
    const o = e === "svg" ? ve.createElementNS(Uc, t) : e === "mathml" ? ve.createElementNS(Bc, t) : s ? ve.createElement(t, { is: s }) : ve.createElement(t);
    return t === "select" && n && n.multiple != null && o.setAttribute("multiple", n.multiple), o;
  },
  createText: (t) => ve.createTextNode(t),
  createComment: (t) => ve.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => ve.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, e, s, n, o, i) {
    const r = s ? s.previousSibling : e.lastChild;
    if (o && (o === i || o.nextSibling))
      for (; e.insertBefore(o.cloneNode(!0), s), !(o === i || !(o = o.nextSibling)); )
        ;
    else {
      fi.innerHTML = ll(
        n === "svg" ? `<svg>${t}</svg>` : n === "mathml" ? `<math>${t}</math>` : t
      );
      const l = fi.content;
      if (n === "svg" || n === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      e.insertBefore(l, s);
    }
    return [
      // first
      r ? r.nextSibling : e.firstChild,
      // last
      s ? s.previousSibling : e.lastChild
    ];
  }
}, Ee = "transition", ds = "animation", Ns = /* @__PURE__ */ Symbol("_vtc"), al = {
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
}, Vc = /* @__PURE__ */ It(
  {},
  Or,
  al
), Hc = (t) => (t.displayName = "Transition", t.props = Vc, t), Gc = /* @__PURE__ */ Hc(
  (t, { slots: e }) => Dc(ja, Wc(t), e)
), Ue = (t, e = []) => {
  st(t) ? t.forEach((s) => s(...e)) : t && t(...e);
}, di = (t) => t ? st(t) ? t.some((e) => e.length > 1) : t.length > 1 : !1;
function Wc(t) {
  const e = {};
  for (const S in t)
    S in al || (e[S] = t[S]);
  if (t.css === !1)
    return e;
  const {
    name: s = "v",
    type: n,
    duration: o,
    enterFromClass: i = `${s}-enter-from`,
    enterActiveClass: r = `${s}-enter-active`,
    enterToClass: l = `${s}-enter-to`,
    appearFromClass: a = i,
    appearActiveClass: c = r,
    appearToClass: f = l,
    leaveFromClass: h = `${s}-leave-from`,
    leaveActiveClass: _ = `${s}-leave-active`,
    leaveToClass: y = `${s}-leave-to`
  } = t, k = Kc(o), b = k && k[0], G = k && k[1], {
    onBeforeEnter: J,
    onEnter: K,
    onEnterCancelled: X,
    onLeave: j,
    onLeaveCancelled: U,
    onBeforeAppear: et = J,
    onAppear: Y = K,
    onAppearCancelled: W = X
  } = e, O = (S, T, w, C) => {
    S._enterCancelled = C, Be(S, T ? f : l), Be(S, T ? c : r), w && w();
  }, V = (S, T) => {
    S._isLeaving = !1, Be(S, h), Be(S, y), Be(S, _), T && T();
  }, q = (S) => (T, w) => {
    const C = S ? Y : K, x = () => O(T, S, w);
    Ue(C, [T, x]), pi(() => {
      Be(T, S ? a : i), ye(T, S ? f : l), di(C) || hi(T, n, b, x);
    });
  };
  return It(e, {
    onBeforeEnter(S) {
      Ue(J, [S]), ye(S, i), ye(S, r);
    },
    onBeforeAppear(S) {
      Ue(et, [S]), ye(S, a), ye(S, c);
    },
    onEnter: q(!1),
    onAppear: q(!0),
    onLeave(S, T) {
      S._isLeaving = !0;
      const w = () => V(S, T);
      ye(S, h), S._enterCancelled ? (ye(S, _), yi(S)) : (yi(S), ye(S, _)), pi(() => {
        S._isLeaving && (Be(S, h), ye(S, y), di(j) || hi(S, n, G, w));
      }), Ue(j, [S, w]);
    },
    onEnterCancelled(S) {
      O(S, !1, void 0, !0), Ue(X, [S]);
    },
    onAppearCancelled(S) {
      O(S, !0, void 0, !0), Ue(W, [S]);
    },
    onLeaveCancelled(S) {
      V(S), Ue(U, [S]);
    }
  });
}
function Kc(t) {
  if (t == null)
    return null;
  if (ht(t))
    return [Yn(t.enter), Yn(t.leave)];
  {
    const e = Yn(t);
    return [e, e];
  }
}
function Yn(t) {
  return Gl(t);
}
function ye(t, e) {
  e.split(/\s+/).forEach((s) => s && t.classList.add(s)), (t[Ns] || (t[Ns] = /* @__PURE__ */ new Set())).add(e);
}
function Be(t, e) {
  e.split(/\s+/).forEach((n) => n && t.classList.remove(n));
  const s = t[Ns];
  s && (s.delete(e), s.size || (t[Ns] = void 0));
}
function pi(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let zc = 0;
function hi(t, e, s, n) {
  const o = t._endId = ++zc, i = () => {
    o === t._endId && n();
  };
  if (s != null)
    return setTimeout(i, s);
  const { type: r, timeout: l, propCount: a } = Yc(t, e);
  if (!r)
    return n();
  const c = r + "end";
  let f = 0;
  const h = () => {
    t.removeEventListener(c, _), i();
  }, _ = (y) => {
    y.target === t && ++f >= a && h();
  };
  setTimeout(() => {
    f < a && h();
  }, l + 1), t.addEventListener(c, _);
}
function Yc(t, e) {
  const s = window.getComputedStyle(t), n = (k) => (s[k] || "").split(", "), o = n(`${Ee}Delay`), i = n(`${Ee}Duration`), r = gi(o, i), l = n(`${ds}Delay`), a = n(`${ds}Duration`), c = gi(l, a);
  let f = null, h = 0, _ = 0;
  e === Ee ? r > 0 && (f = Ee, h = r, _ = i.length) : e === ds ? c > 0 && (f = ds, h = c, _ = a.length) : (h = Math.max(r, c), f = h > 0 ? r > c ? Ee : ds : null, _ = f ? f === Ee ? i.length : a.length : 0);
  const y = f === Ee && /\b(?:transform|all)(?:,|$)/.test(
    n(`${Ee}Property`).toString()
  );
  return {
    type: f,
    timeout: h,
    propCount: _,
    hasTransform: y
  };
}
function gi(t, e) {
  for (; t.length < e.length; )
    t = t.concat(t);
  return Math.max(...e.map((s, n) => mi(s) + mi(t[n])));
}
function mi(t) {
  return t === "auto" ? 0 : Number(t.slice(0, -1).replace(",", ".")) * 1e3;
}
function yi(t) {
  return (t ? t.ownerDocument : document).body.offsetHeight;
}
function Jc(t, e, s) {
  const n = t[Ns];
  n && (e = (e ? [e, ...n] : [...n]).join(" ")), e == null ? t.removeAttribute("class") : s ? t.setAttribute("class", e) : t.className = e;
}
const gn = /* @__PURE__ */ Symbol("_vod"), cl = /* @__PURE__ */ Symbol("_vsh"), Ys = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(t, { value: e }, { transition: s }) {
    t[gn] = t.style.display === "none" ? "" : t.style.display, s && e ? s.beforeEnter(t) : ps(t, e);
  },
  mounted(t, { value: e }, { transition: s }) {
    s && e && s.enter(t);
  },
  updated(t, { value: e, oldValue: s }, { transition: n }) {
    !e != !s && (n ? e ? (n.beforeEnter(t), ps(t, !0), n.enter(t)) : n.leave(t, () => {
      ps(t, !1);
    }) : ps(t, e));
  },
  beforeUnmount(t, { value: e }) {
    ps(t, e);
  }
};
function ps(t, e) {
  t.style.display = e ? t[gn] : "none", t[cl] = !e;
}
const qc = /* @__PURE__ */ Symbol(""), Xc = /(?:^|;)\s*display\s*:/;
function Zc(t, e, s) {
  const n = t.style, o = xt(s);
  let i = !1;
  if (s && !o) {
    if (e)
      if (xt(e))
        for (const r of e.split(";")) {
          const l = r.slice(0, r.indexOf(":")).trim();
          s[l] == null && ys(n, l, "");
        }
      else
        for (const r in e)
          s[r] == null && ys(n, r, "");
    for (const r in s) {
      r === "display" && (i = !0);
      const l = s[r];
      l != null ? tu(
        t,
        r,
        !xt(e) && e ? e[r] : void 0,
        l
      ) || ys(n, r, l) : ys(n, r, "");
    }
  } else if (o) {
    if (e !== s) {
      const r = n[qc];
      r && (s += ";" + r), n.cssText = s, i = Xc.test(s);
    }
  } else e && t.removeAttribute("style");
  gn in t && (t[gn] = i ? n.display : "", t[cl] && (n.display = "none"));
}
const vi = /\s*!important$/;
function ys(t, e, s) {
  if (st(s))
    s.forEach((n) => ys(t, e, n));
  else if (s == null && (s = ""), e.startsWith("--"))
    t.setProperty(e, s);
  else {
    const n = Qc(t, e);
    vi.test(s) ? t.setProperty(
      Ne(n),
      s.replace(vi, ""),
      "important"
    ) : t[n] = s;
  }
}
const _i = ["Webkit", "Moz", "ms"], Jn = {};
function Qc(t, e) {
  const s = Jn[e];
  if (s)
    return s;
  let n = Zt(e);
  if (n !== "filter" && n in t)
    return Jn[e] = n;
  n = Qi(n);
  for (let o = 0; o < _i.length; o++) {
    const i = _i[o] + n;
    if (i in t)
      return Jn[e] = i;
  }
  return e;
}
function tu(t, e, s, n) {
  return t.tagName === "TEXTAREA" && (e === "width" || e === "height") && xt(n) && s === n;
}
const bi = "http://www.w3.org/1999/xlink";
function wi(t, e, s, n, o, i = ql(e)) {
  n && e.startsWith("xlink:") ? s == null ? t.removeAttributeNS(bi, e.slice(6, e.length)) : t.setAttributeNS(bi, e, s) : s == null || i && !er(s) ? t.removeAttribute(e) : t.setAttribute(
    e,
    i ? "" : Jt(s) ? String(s) : s
  );
}
function xi(t, e, s, n, o) {
  if (e === "innerHTML" || e === "textContent") {
    s != null && (t[e] = e === "innerHTML" ? ll(s) : s);
    return;
  }
  const i = t.tagName;
  if (e === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? t.getAttribute("value") || "" : t.value, a = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      t.type === "checkbox" ? "on" : ""
    ) : String(s);
    (l !== a || !("_value" in t)) && (t.value = a), s == null && t.removeAttribute(e), t._value = s;
    return;
  }
  let r = !1;
  if (s === "" || s == null) {
    const l = typeof t[e];
    l === "boolean" ? s = er(s) : s == null && l === "string" ? (s = "", r = !0) : l === "number" && (s = 0, r = !0);
  }
  try {
    t[e] = s;
  } catch {
  }
  r && t.removeAttribute(o || e);
}
function es(t, e, s, n) {
  t.addEventListener(e, s, n);
}
function eu(t, e, s, n) {
  t.removeEventListener(e, s, n);
}
const Si = /* @__PURE__ */ Symbol("_vei");
function su(t, e, s, n, o = null) {
  const i = t[Si] || (t[Si] = {}), r = i[e];
  if (n && r)
    r.value = n;
  else {
    const [l, a] = iu(e);
    if (n) {
      const c = i[e] = au(
        n,
        o
      );
      es(t, l, c, a);
    } else r && (eu(t, l, r, a), i[e] = void 0);
  }
}
const nu = /(Once|Passive|Capture)$/, ou = /^on:?(?:Once|Passive|Capture)$/;
function iu(t) {
  let e, s;
  for (; (s = t.match(nu)) && !ou.test(t); )
    e || (e = {}), t = t.slice(0, t.length - s[1].length), e[s[1].toLowerCase()] = !0;
  return [t[2] === ":" ? t.slice(3) : Ne(t.slice(2)), e];
}
let qn = 0;
const ru = /* @__PURE__ */ Promise.resolve(), lu = () => qn || (ru.then(() => qn = 0), qn = Date.now());
function au(t, e) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    const o = s.value;
    if (st(o)) {
      const i = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        i.call(n), n._stopped = !0;
      };
      const r = o.slice(), l = [n];
      for (let a = 0; a < r.length && !n._stopped; a++) {
        const c = r[a];
        c && qt(
          c,
          e,
          5,
          l
        );
      }
    } else
      qt(
        o,
        e,
        5,
        [n]
      );
  };
  return s.value = t, s.attached = lu(), s;
}
const Ti = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, cu = (t, e, s, n, o, i) => {
  const r = o === "svg";
  e === "class" ? Jc(t, n, r) : e === "style" ? Zc(t, s, n) : Sn(e) ? Tn(e) || su(t, e, s, n, i) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : uu(t, e, n, r)) ? (xi(t, e, n), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && wi(t, e, n, r, i, e !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (fu(t, e) || // @ts-expect-error _def is private
  t._def.__asyncLoader && (/[A-Z]/.test(e) || !xt(n))) ? xi(t, Zt(e), n, i, e) : (e === "true-value" ? t._trueValue = n : e === "false-value" && (t._falseValue = n), wi(t, e, n, r));
};
function uu(t, e, s, n) {
  if (n)
    return !!(e === "innerHTML" || e === "textContent" || e in t && Ti(e) && rt(s));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && t.tagName === "IFRAME" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const o = t.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Ti(e) && xt(s) ? !1 : e in t;
}
function fu(t, e) {
  const s = (
    // @ts-expect-error _def is private
    t._def.props
  );
  if (!s)
    return !1;
  const n = Zt(e);
  return Array.isArray(s) ? s.some((o) => Zt(o) === n) : Object.keys(s).some((o) => Zt(o) === n);
}
const Ci = (t) => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return st(e) ? (s) => Zs(e, s) : e;
};
function du(t) {
  t.target.composing = !0;
}
function Ai(t) {
  const e = t.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
const Xn = /* @__PURE__ */ Symbol("_assign");
function ki(t, e, s) {
  return e && (t = t.trim()), s && (t = To(t)), t;
}
const mo = {
  created(t, { modifiers: { lazy: e, trim: s, number: n } }, o) {
    t[Xn] = Ci(o);
    const i = n || o.props && o.props.type === "number";
    es(t, e ? "change" : "input", (r) => {
      r.target.composing || t[Xn](ki(t.value, s, i));
    }), (s || i) && es(t, "change", () => {
      t.value = ki(t.value, s, i);
    }), e || (es(t, "compositionstart", du), es(t, "compositionend", Ai), es(t, "change", Ai));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(t, { value: e }) {
    t.value = e ?? "";
  },
  beforeUpdate(t, { value: e, oldValue: s, modifiers: { lazy: n, trim: o, number: i } }, r) {
    if (t[Xn] = Ci(r), t.composing) return;
    const l = (i || t.type === "number") && !/^0\d/.test(t.value) ? To(t.value) : t.value, a = e ?? "";
    if (l === a)
      return;
    const c = t.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === t && t.type !== "range" && (n && e === s || o && t.value.trim() === a) || (t.value = a);
  }
}, pu = ["ctrl", "shift", "alt", "meta"], hu = {
  stop: (t) => t.stopPropagation(),
  prevent: (t) => t.preventDefault(),
  self: (t) => t.target !== t.currentTarget,
  ctrl: (t) => !t.ctrlKey,
  shift: (t) => !t.shiftKey,
  alt: (t) => !t.altKey,
  meta: (t) => !t.metaKey,
  left: (t) => "button" in t && t.button !== 0,
  middle: (t) => "button" in t && t.button !== 1,
  right: (t) => "button" in t && t.button !== 2,
  exact: (t, e) => pu.some((s) => t[`${s}Key`] && !e.includes(s))
}, Oe = (t, e) => {
  if (!t) return t;
  const s = t._withMods || (t._withMods = {}), n = e.join(".");
  return s[n] || (s[n] = (o, ...i) => {
    for (let r = 0; r < e.length; r++) {
      const l = hu[e[r]];
      if (l && l(o, e)) return;
    }
    return t(o, ...i);
  });
}, gu = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, mu = (t, e) => {
  const s = t._withKeys || (t._withKeys = {}), n = e.join(".");
  return s[n] || (s[n] = (o) => {
    if (!("key" in o))
      return;
    const i = Ne(o.key);
    if (e.some(
      (r) => r === i || gu[r] === i
    ))
      return t(o);
  });
}, yu = /* @__PURE__ */ It({ patchProp: cu }, jc);
let Ei;
function vu() {
  return Ei || (Ei = bc(yu));
}
const ul = (...t) => {
  const e = vu().createApp(...t), { mount: s } = e;
  return e.mount = (n) => {
    const o = bu(n);
    if (!o) return;
    const i = e._component;
    !rt(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const r = s(o, !1, _u(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), r;
  }, e;
};
function _u(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function bu(t) {
  return xt(t) ? document.querySelector(t) : t;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let fl;
const Dn = (t) => fl = t, dl = (
  /* istanbul ignore next */
  Symbol()
);
function yo(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var As;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(As || (As = {}));
function wu() {
  const t = ir(!0), e = t.run(() => /* @__PURE__ */ ft({}));
  let s = [], n = [];
  const o = Ro({
    install(i) {
      Dn(o), o._a = i, i.provide(dl, o), i.config.globalProperties.$pinia = o, n.forEach((r) => s.push(r)), n = [];
    },
    use(i) {
      return this._a ? s.push(i) : n.push(i), this;
    },
    _p: s,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: t,
    _s: /* @__PURE__ */ new Map(),
    state: e
  });
  return o;
}
const pl = () => {
};
function Mi(t, e, s, n = pl) {
  t.push(e);
  const o = () => {
    const i = t.indexOf(e);
    i > -1 && (t.splice(i, 1), n());
  };
  return !s && rr() && Zl(o), o;
}
function Xe(t, ...e) {
  t.slice().forEach((s) => {
    s(...e);
  });
}
const xu = (t) => t(), Pi = Symbol(), Zn = Symbol();
function vo(t, e) {
  t instanceof Map && e instanceof Map ? e.forEach((s, n) => t.set(n, s)) : t instanceof Set && e instanceof Set && e.forEach(t.add, t);
  for (const s in e) {
    if (!e.hasOwnProperty(s))
      continue;
    const n = e[s], o = t[s];
    yo(o) && yo(n) && t.hasOwnProperty(s) && !/* @__PURE__ */ Ct(n) && !/* @__PURE__ */ Se(n) ? t[s] = vo(o, n) : t[s] = n;
  }
  return t;
}
const Su = (
  /* istanbul ignore next */
  Symbol()
);
function Tu(t) {
  return !yo(t) || !t.hasOwnProperty(Su);
}
const { assign: Ie } = Object;
function Cu(t) {
  return !!(/* @__PURE__ */ Ct(t) && t.effect);
}
function Au(t, e, s, n) {
  const { state: o, actions: i, getters: r } = e, l = s.state.value[t];
  let a;
  function c() {
    l || (s.state.value[t] = o ? o() : {});
    const f = /* @__PURE__ */ wa(s.state.value[t]);
    return Ie(f, i, Object.keys(r || {}).reduce((h, _) => (h[_] = Ro(Pt(() => {
      Dn(s);
      const y = s._s.get(t);
      return r[_].call(y, y);
    })), h), {}));
  }
  return a = hl(t, c, e, s, n, !0), a;
}
function hl(t, e, s = {}, n, o, i) {
  let r;
  const l = Ie({ actions: {} }, s), a = { deep: !0 };
  let c, f, h = [], _ = [], y;
  const k = n.state.value[t];
  !i && !k && (n.state.value[t] = {});
  let b;
  function G(W) {
    let O;
    c = f = !1, typeof W == "function" ? (W(n.state.value[t]), O = {
      type: As.patchFunction,
      storeId: t,
      events: y
    }) : (vo(n.state.value[t], W), O = {
      type: As.patchObject,
      payload: W,
      storeId: t,
      events: y
    });
    const V = b = Symbol();
    Rt().then(() => {
      b === V && (c = !0);
    }), f = !0, Xe(h, O, n.state.value[t]);
  }
  const J = i ? function() {
    const { state: O } = s, V = O ? O() : {};
    this.$patch((q) => {
      Ie(q, V);
    });
  } : (
    /* istanbul ignore next */
    pl
  );
  function K() {
    r.stop(), h = [], _ = [], n._s.delete(t);
  }
  const X = (W, O = "") => {
    if (Pi in W)
      return W[Zn] = O, W;
    const V = function() {
      Dn(n);
      const q = Array.from(arguments), S = [], T = [];
      function w(E) {
        S.push(E);
      }
      function C(E) {
        T.push(E);
      }
      Xe(_, {
        args: q,
        name: V[Zn],
        store: U,
        after: w,
        onError: C
      });
      let x;
      try {
        x = W.apply(this && this.$id === t ? this : U, q);
      } catch (E) {
        throw Xe(T, E), E;
      }
      return x instanceof Promise ? x.then((E) => (Xe(S, E), E)).catch((E) => (Xe(T, E), Promise.reject(E))) : (Xe(S, x), x);
    };
    return V[Pi] = !0, V[Zn] = O, V;
  }, j = {
    _p: n,
    // _s: scope,
    $id: t,
    $onAction: Mi.bind(null, _),
    $patch: G,
    $reset: J,
    $subscribe(W, O = {}) {
      const V = Mi(h, W, O.detached, () => q()), q = r.run(() => Bt(() => n.state.value[t], (S) => {
        (O.flush === "sync" ? f : c) && W({
          storeId: t,
          type: As.direct,
          events: y
        }, S);
      }, Ie({}, a, O)));
      return V;
    },
    $dispose: K
  }, U = /* @__PURE__ */ Mn(j);
  n._s.set(t, U);
  const Y = (n._a && n._a.runWithContext || xu)(() => n._e.run(() => (r = ir()).run(() => e({ action: X }))));
  for (const W in Y) {
    const O = Y[W];
    if (/* @__PURE__ */ Ct(O) && !Cu(O) || /* @__PURE__ */ Se(O))
      i || (k && Tu(O) && (/* @__PURE__ */ Ct(O) ? O.value = k[W] : vo(O, k[W])), n.state.value[t][W] = O);
    else if (typeof O == "function") {
      const V = X(O, W);
      Y[W] = V, l.actions[W] = O;
    }
  }
  return Ie(U, Y), Ie(/* @__PURE__ */ ut(U), Y), Object.defineProperty(U, "$state", {
    get: () => n.state.value[t],
    set: (W) => {
      G((O) => {
        Ie(O, W);
      });
    }
  }), n._p.forEach((W) => {
    Ie(U, r.run(() => W({
      store: U,
      app: n._a,
      pinia: n,
      options: l
    })));
  }), k && i && s.hydrate && s.hydrate(U.$state, k), c = !0, f = !0, U;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Fn(t, e, s) {
  let n, o;
  const i = typeof e == "function";
  typeof t == "string" ? (n = t, o = i ? s : e) : (o = t, n = t.id);
  function r(l, a) {
    const c = Ra();
    return l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    l || (c ? ws(dl, null) : null), l && Dn(l), l = fl, l._s.has(n) || (i ? hl(n, e, o, l) : Au(n, o, l)), l._s.get(n);
  }
  return r.$id = n, r;
}
function ku() {
  return [
    { id: "netease", enabled: !0, priority: 0, config: { baseURL: "" } },
    { id: "local", enabled: !1, priority: 1, config: {} },
    { id: "custom", enabled: !1, priority: 2, config: { searchURL: "", resolveURL: "" } }
  ];
}
function Qn() {
  return {
    volume: 65,
    playMode: "list",
    position: null,
    widgetMode: "dock",
    dockAlign: "bottom-left",
    showDragMiniText: !0,
    providers: ku(),
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
const gt = /* @__PURE__ */ Fn("settings", {
  state: () => ({
    settings: Qn(),
    storage: null
  }),
  getters: {
    defaults: () => Qn()
  },
  actions: {
    init(t) {
      this.storage = t;
      const e = t.getSettings(), s = Qn();
      if (e) {
        const n = typeof SillyTavern < "u" && SillyTavern.getContext()?.libs?.lodash ? SillyTavern.getContext().libs.lodash : null;
        n ? this.settings = n.merge(structuredClone(s), e) : this.settings = {
          ...s,
          ...e,
          providers: s.providers.map((o) => {
            const i = e.providers?.find((r) => r.id === o.id);
            return i ? { ...i, config: i.config ?? o.config ?? {} } : o;
          })
        };
      } else
        this.settings = s;
    },
    setVolume(t) {
      this.settings.volume = t, this.save();
    },
    setPlayMode(t) {
      this.settings.playMode = t, this.save();
    },
    setPosition(t) {
      this.settings.position = t, this.save();
    },
    setWidgetMode(t) {
      this.settings.widgetMode = t, this.save();
    },
    setOpacity(t) {
      this.settings.opacity = t, this.save();
    },
    setCustomOpacity(t) {
      this.settings.customOpacity = t, this.save();
    },
    setDockAlign(t) {
      this.settings.dockAlign = t, this.save();
    },
    setShowDragMiniText(t) {
      this.settings.showDragMiniText = t, this.save();
    },
    setProviderConfig(t, e) {
      const s = this.settings.providers.find((n) => n.id === t);
      s && (s.enabled = e, this.save());
    },
    setAiMode(t) {
      this.settings.aiMode = t, this.save();
    },
    setAiUseCustomApi(t) {
      this.settings.aiUseCustomApi = t, this.save();
    },
    setAiContextMessages(t) {
      this.settings.aiContextMessages = t, this.save();
    },
    setAiAutoTrigger(t) {
      this.settings.aiAutoTrigger = t, this.save();
    },
    setAiTriggerOnGreeting(t) {
      this.settings.aiTriggerOnGreeting = t, this.save();
    },
    setAiApiUrl(t) {
      this.settings.aiApiUrl = t, this.save();
    },
    setAiApiKey(t) {
      this.settings.aiApiKey = t, this.save();
    },
    setAiModel(t) {
      this.settings.aiModel = t, this.save();
    },
    setTogetherPromptRole(t) {
      this.settings.togetherPromptRole = t, this.save();
    },
    setTogetherCustomPromptEnabled(t) {
      this.settings.togetherCustomPromptEnabled = t, this.save();
    },
    setTogetherCustomPrompt(t) {
      this.settings.togetherCustomPrompt = t, this.save();
    },
    save() {
      this.storage && this.storage.setSettings(this.settings);
    }
  }
});
class Eu {
  constructor() {
    this.listeners = /* @__PURE__ */ new Map(), this.audio = new Audio(), this.audio.crossOrigin = "anonymous", this.audio.preload = "auto";
  }
  load(e) {
    this.audio.src = e, this.audio.load();
  }
  async play() {
    try {
      await this.audio.play();
    } catch (e) {
      console.error("[AudioEngine] play() failed:", e);
    }
  }
  pause() {
    this.audio.pause();
  }
  seek(e) {
    this.audio.currentTime = e;
  }
  setVolume(e) {
    this.audio.volume = e;
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
  on(e, s) {
    let n = this.listeners.get(e);
    n || (n = /* @__PURE__ */ new Set(), this.listeners.set(e, n));
    const o = s;
    return n.add(o), this.audio.addEventListener(e, o), () => {
      this.audio.removeEventListener(e, o), n.delete(o);
    };
  }
  destroy() {
    for (const [e, s] of this.listeners) {
      for (const n of s)
        this.audio.removeEventListener(e, n);
      s.clear();
    }
    this.listeners.clear(), this.audio.src = "";
  }
}
const Ii = /\[(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?\]/g;
function Mu(t) {
  const e = t.split(/\r?\n/), s = [];
  for (const n of e) {
    const o = new RegExp(Ii.source, "g"), i = [];
    let r;
    for (; (r = o.exec(n)) !== null; ) {
      const a = parseInt(r[1], 10), c = parseInt(r[2], 10), f = r[3] ?? "", h = f ? parseInt(f.padEnd(3, "0"), 10) : 0;
      i.push(a * 60 + c + h / 1e3);
    }
    if (i.length === 0) continue;
    const l = n.replace(new RegExp(Ii.source, "g"), "").trim();
    if (l !== "")
      for (const a of i)
        s.push({ time: a, text: l });
  }
  s.sort((n, o) => n.time - o.time);
  for (let n = 0; n < s.length; n++)
    n < s.length - 1 && (s[n].next = s[n + 1]);
  return s;
}
function Pu(t, e) {
  if (t.length === 0) return null;
  let s = null;
  for (const n of t)
    if (n.time <= e)
      s = n;
    else
      break;
  return s;
}
class Iu {
  constructor(e) {
    this.providers = e;
  }
  async searchAll(e) {
    const s = await Promise.allSettled(
      this.providers.map((i) => i.search(e))
    ), n = [], o = /* @__PURE__ */ new Map();
    return s.forEach((i) => {
      if (i.status === "fulfilled")
        for (const r of i.value) {
          const l = `${r.name}__${r.artist}`;
          o.get(l) === void 0 && (o.set(l, n.length), n.push(r));
        }
    }), n;
  }
  async resolve(e, s, n) {
    const o = this.getProvider(s);
    return o ? new Promise((i) => {
      const r = setTimeout(() => i(null), 15e3);
      o.resolve(e, n).then((l) => {
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
  async searchAndResolve(e, s) {
    for (const n of this.providers)
      if (n.searchAndResolve)
        try {
          const o = await n.searchAndResolve(e, s);
          if (o) return o;
        } catch {
        }
    return null;
  }
  getProvider(e) {
    return this.providers.find((s) => s.id === e);
  }
}
class Ru {
  constructor(e) {
    this.id = "netease", this.name = "网易云", this.apiBase = e?.apiBase?.trim() || "https://jgauby2m0k6n.erocraft.com", this.urlBase = e?.baseURL?.trim() || "https://music-api.gdstudio.xyz/api.php";
  }
  async fetchJson(e, s = 5e3) {
    try {
      const n = new AbortController(), o = setTimeout(() => n.abort(), s), i = await fetch(e, { signal: n.signal });
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
  probeAudio(e, s = 3e3) {
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
      o.preload = "metadata", o.addEventListener("loadedmetadata", l), o.addEventListener("error", a), o.src = e;
    });
  }
  async search(e) {
    const n = (await this.fetchJson(
      `${this.apiBase}/search?s=${encodeURIComponent(e)}&type=1&offset=0&limit=20`
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
  async resolve(e, s) {
    const n = await this.fetchJson(
      `${this.urlBase}?types=url&id=${encodeURIComponent(e)}`
    );
    if (!n || !n.url) return null;
    const [o, i] = await Promise.all([
      this.fetchJson(
        `${this.apiBase}/lyric?os=pc&id=${encodeURIComponent(e)}&lv=-1&kv=-1&tv=-1`
      ),
      this.fetchJson(
        `${this.apiBase}/detail?ids=%5B${encodeURIComponent(e)}%5D`
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
  async searchAndResolve(e, s) {
    const n = s ? `${e} ${s}` : e, o = await this.search(n);
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
class Ou {
  constructor(e) {
    this.id = "local", this.name = "本地文件", this.storage = e?.storage ?? null;
  }
  async search(e) {
    return [];
  }
  async resolve(e, s) {
    if (!this.storage) return null;
    const n = await this.storage.getItem("stmp:audio:" + e);
    return n ? {
      url: URL.createObjectURL(n),
      name: "",
      artist: "",
      source: this.id
    } : null;
  }
}
class Lu {
  constructor(e) {
    this.id = "custom", this.name = "自定义 API", this.searchURL = e?.searchURL, this.resolveURL = e?.resolveURL;
  }
  async fetchJson(e, s = 1e4) {
    try {
      const n = new AbortController(), o = setTimeout(() => n.abort(), s), i = await fetch(e, { signal: n.signal });
      return clearTimeout(o), i.ok ? await i.json() : null;
    } catch {
      return null;
    }
  }
  async search(e) {
    if (!this.searchURL) return [];
    const s = this.searchURL.replace("{keyword}", encodeURIComponent(e)), n = await this.fetchJson(s);
    return Array.isArray(n) ? n.map((o) => ({
      id: String(o.id ?? ""),
      name: String(o.name ?? ""),
      artist: String(o.artist ?? ""),
      duration: o.duration ? Number(o.duration) : void 0,
      provider: this.id
    })) : [];
  }
  async resolve(e, s) {
    if (!this.resolveURL) return null;
    const n = this.resolveURL.replace("{id}", encodeURIComponent(e)), o = await this.fetchJson(n);
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
function Je(t) {
  const s = t.filter((n) => n.enabled).sort((n, o) => n.priority - o.priority).map((n) => {
    const o = n.config ?? {};
    switch (n.id) {
      case "netease":
        return new Ru({ baseURL: o.baseURL, apiBase: o.apiBase });
      case "local":
        return new Ou({
          storage: o.storage ? o.storage : void 0
        });
      case "custom":
        return new Lu({
          searchURL: o.searchURL,
          resolveURL: o.resolveURL
        });
      default:
        return null;
    }
  }).filter((n) => n !== null);
  return new Iu(s);
}
const $u = {
  "No Song": "未播放",
  "show lyrics": "显示歌词",
  List: "列表",
  Search: "搜索",
  "Search Song...": "搜索歌曲...",
  "Searching...": "搜索中...",
  "No results": "无结果",
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
let Ze = null;
function Nu() {
  if (Ze) return Ze;
  try {
    if (typeof SillyTavern < "u") {
      const t = SillyTavern.getContext();
      t?.getCurrentLocale && (Ze = t.getCurrentLocale());
    }
  } catch {
  }
  return Ze || (Ze = (typeof navigator < "u" ? navigator.language || navigator.userLanguage : "en")?.toLowerCase() || "en"), Ze;
}
function m(t) {
  return Nu().startsWith("zh") ? $u[t] ?? t : t;
}
function gl() {
  const t = { "Content-Type": "application/json" };
  if (typeof SillyTavern < "u" && SillyTavern.getContext) {
    const e = SillyTavern.getContext();
    if (e?.getRequestHeaders) {
      const s = e.getRequestHeaders();
      s && typeof s == "object" && Object.assign(t, s);
    }
  }
  return t;
}
function Du(t) {
  return new Promise((e, s) => {
    const n = new FileReader();
    n.onload = () => {
      const o = n.result, i = o.indexOf(",");
      e(i >= 0 ? o.slice(i + 1) : o);
    }, n.onerror = () => s(n.error), n.readAsDataURL(t);
  });
}
function Fu(t) {
  const e = t.lastIndexOf("."), s = e > 0 ? t.slice(0, e) : t, n = e > 0 ? t.slice(e) : "";
  return `${s.replace(/[^a-zA-Z0-9_\-.]/g, "_")}${n}`;
}
async function Uu(t) {
  const e = await Du(t), s = Fu(t.name), n = await fetch("/api/files/upload", {
    method: "POST",
    headers: gl(),
    body: JSON.stringify({ name: s, data: e })
  });
  if (!n.ok)
    throw new Error(`Upload failed: ${n.status} ${n.statusText}`);
  return (await n.json()).path;
}
async function ml(t) {
  const e = await fetch("/api/files/delete", {
    method: "POST",
    headers: gl(),
    body: JSON.stringify({ path: t })
  });
  e.ok || console.warn(`[stmp] deleteFile failed: ${e.status}`);
}
function to() {
  return `stmp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
const Wt = /* @__PURE__ */ Fn("playlist", {
  state: () => ({
    networkList: [],
    serverList: [],
    chatList: [],
    activeTab: "network",
    currentList: "network",
    currentIndex: -1
  }),
  getters: {
    current(t) {
      const e = t[`${t.currentList}List`];
      return t.currentIndex >= 0 ? e[t.currentIndex] ?? null : null;
    },
    isEmpty(t) {
      return t.networkList.length === 0 && t.serverList.length === 0 && t.chatList.length === 0;
    },
    playMode() {
      return gt().settings.playMode;
    },
    activeList(t) {
      return t[`${t.activeTab}List`];
    },
    playingList(t) {
      return t[`${t.currentList}List`];
    }
  },
  actions: {
    init() {
      this.loadFromStorage();
    },
    loadFromStorage() {
      const e = gt().storage;
      if (!e) return;
      const s = e.getPlaylistData();
      s && (this.networkList = Array.isArray(s.network) ? s.network : [], this.serverList = Array.isArray(s.server) ? s.server : []);
    },
    savePlaylistData() {
      const e = gt().storage;
      if (!e) return;
      const s = {
        network: this.networkList,
        server: this.serverList
      };
      e.setPlaylistData(s);
    },
    getListByTab(t) {
      return this[`${t}List`];
    },
    addItem(t) {
      t.source === "network" ? (this.networkList.push(t), this.savePlaylistData()) : t.source === "server" ? (this.serverList.push(t), this.savePlaylistData()) : t.source === "chat" && this.chatList.push(t);
    },
    removeItem(t, e) {
      const s = this.getListByTab(t);
      if (e < 0 || e >= s.length) return;
      const n = s.splice(e, 1)[0];
      (t === "network" || t === "server") && this.savePlaylistData(), t === "server" && n?.serverPath && ml(n.serverPath), t === this.currentList && e === this.currentIndex ? this.currentIndex = -1 : t === this.currentList && e < this.currentIndex && this.currentIndex--;
    },
    addFromSearch(t, e = !0) {
      const s = this.networkList.findIndex(
        (o) => o.providerId === t.provider && o.providerTrackId === t.id
      );
      if (this.activeTab = "network", s >= 0)
        return e && (this.currentList = "network", this.play("network", s)), !1;
      const n = {
        id: to(),
        song: t.name,
        artist: t.artist,
        source: "network",
        providerId: t.provider,
        providerTrackId: t.id,
        providerPicId: t.picId,
        addedAt: Date.now()
      };
      return this.networkList.push(n), this.savePlaylistData(), e && (this.currentList = "network", this.play("network", this.networkList.length - 1)), !0;
    },
    addFromAi(t, e = !0) {
      const s = this.chatList.findIndex(
        (o) => o.providerId === t.provider && o.providerTrackId === t.id
      );
      if (this.activeTab = "chat", s >= 0) {
        e && (this.currentList = "chat", this.play("chat", s));
        return;
      }
      const n = {
        id: to(),
        song: t.name,
        artist: t.artist,
        source: "chat",
        providerId: t.provider,
        providerTrackId: t.id,
        providerPicId: t.picId,
        addedAt: Date.now()
      };
      this.chatList.push(n), e && (this.currentList = "chat", this.play("chat", this.chatList.length - 1));
    },
    async addServerFile(t, e) {
      const s = await Uu(e), n = {
        id: to(),
        song: t,
        source: "server",
        serverPath: s,
        addedAt: Date.now()
      };
      this.serverList.push(n), this.savePlaylistData();
    },
    play(t, e) {
      const s = this.getListByTab(t);
      e < 0 || e >= s.length || (this.currentList = t, this.activeTab = t, this.currentIndex = e, this.resolveAndPlay(t, e));
    },
    next() {
      const t = this.playingList;
      if (t.length === 0) return;
      const e = this.playMode;
      let s = this.currentIndex;
      if (e === "single")
        s = this.currentIndex;
      else if (e === "random")
        if (t.length === 1)
          s = 0;
        else {
          for (let n = 0; n < 5; n++) {
            const o = Math.floor(Math.random() * t.length);
            if (o !== this.currentIndex) {
              s = o;
              break;
            }
          }
          s === this.currentIndex && (s = (this.currentIndex + 1) % t.length);
        }
      else
        s = this.currentIndex + 1, s >= t.length && (s = 0);
      this.currentIndex = s, this.resolveAndPlay(this.currentList, s);
    },
    prev() {
      const t = this.playingList;
      if (t.length === 0) return;
      let e = this.currentIndex - 1;
      e < 0 && (e = t.length - 1), this.currentIndex = e, this.resolveAndPlay(this.currentList, e);
    },
    async resolveAndPlay(t, e) {
      const n = this.getListByTab(t)[e];
      if (!n) return;
      let o = null;
      if (n.source === "server" && n.serverPath ? o = {
        url: n.serverPath,
        name: n.song,
        artist: n.artist ?? "",
        source: "server"
      } : n.providerId && n.providerTrackId && (o = await Je(gt().settings.providers).resolve(n.providerTrackId, n.providerId, n.providerPicId), o && (o.name = n.song, o.artist = n.artist ?? "")), !o) {
        console.warn(`[playlist] track unavailable (possibly delisted): "${n.song}"`), typeof toastr < "u" && toastr.warning(`${m("Cannot play")}: ${n.song}`);
        return;
      }
      await Tt().loadAndPlay(o);
    },
    setActiveTab(t) {
      this.activeTab = t;
    }
  }
}), Tt = /* @__PURE__ */ Fn("player", {
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
      const t = new Eu();
      this.audioEngine = t;
      const e = Tt();
      t.on("timeupdate", () => {
        if (!t) return;
        e.currentTime = t.currentTime, e.duration = t.duration;
        const s = Pu(e.lyrics, t.currentTime), n = s ? e.lyrics.indexOf(s) : -1;
        e.currentLyricIndex = n;
      }), t.on("ended", () => {
        Wt().next();
      }), t.on("play", () => {
        e.isPlaying = !0;
      }), t.on("pause", () => {
        e.isPlaying = !1;
      });
    },
    async loadAndPlay(t) {
      this.audioEngine || this.init();
      const e = this.audioEngine;
      e.load(t.url), this.currentTrack = t, t.lyric ? this.updateLyrics(t.lyric) : (this.lyrics = [], this.currentLyricIndex = -1), await e.play(), t.cover;
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
    seek(t) {
      this.audioEngine?.seek(t);
    },
    setVolume(t) {
      this.volume = t, this.audioEngine?.setVolume(t / 100);
    },
    updateLyrics(t) {
      this.lyrics = Mu(t), this.currentLyricIndex = -1;
    },
    destroy() {
      this.audioEngine?.destroy(), this.audioEngine = null, this.isPlaying = !1, this.currentTime = 0, this.duration = 0, this.lyrics = [], this.currentLyricIndex = -1, this.currentTrack = null;
    }
  }
}), Bu = /* @__PURE__ */ Fn("search", {
  state: () => ({
    keyword: "",
    results: [],
    isSearching: !1,
    error: null
  }),
  actions: {
    setKeyword(t) {
      this.keyword = t;
    },
    async search(t) {
      if (!this.keyword.trim()) {
        this.results = [];
        return;
      }
      this.isSearching = !0, this.error = null;
      try {
        this.results = await t.searchAll(this.keyword);
      } catch (e) {
        this.error = e instanceof Error ? e.message : String(e), this.results = [];
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
  const t = /* @__PURE__ */ ft(0), e = /* @__PURE__ */ ft([]), s = /* @__PURE__ */ ft(null);
  function n(r, l) {
    r && (e.value[l] = r);
  }
  async function o() {
    await Rt();
    const l = Tt().currentLyricIndex, a = s.value;
    if (!a || l < 0) {
      t.value = 0;
      return;
    }
    const c = e.value[l];
    if (!c) return;
    const f = c.offsetTop, h = c.offsetHeight, _ = a.clientHeight;
    t.value = f - _ / 2 + h / 2;
  }
  const i = Tt();
  return Bt(() => i.currentLyricIndex, o), Bt(() => i.lyrics, () => {
    e.value = [], o();
  }), { scrollY: t, windowRef: s, setLineRef: n };
}
const ju = ["width", "height"], Vu = {
  key: 0,
  points: "6 3 20 12 6 21 6 3",
  fill: "currentColor",
  stroke: "none"
}, Hu = {
  key: 10,
  points: "6 9 12 15 18 9"
}, Gu = {
  key: 11,
  points: "18 15 12 9 6 15"
}, Wu = {
  key: 15,
  points: "20 6 9 17 4 12"
}, Ku = /* @__PURE__ */ Ce({
  __name: "Icon",
  props: {
    name: {},
    size: {}
  },
  setup(t) {
    return (e, s) => (P(), N("svg", {
      width: t.size || 18,
      height: t.size || 18,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: "stmp-icon"
    }, [
      t.name === "play" ? (P(), N("polygon", Vu)) : t.name === "pause" ? (P(), N(it, { key: 1 }, [
        s[0] || (s[0] = u("rect", {
          x: "6",
          y: "4",
          width: "4",
          height: "16",
          rx: "1",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[1] || (s[1] = u("rect", {
          x: "14",
          y: "4",
          width: "4",
          height: "16",
          rx: "1",
          fill: "currentColor",
          stroke: "none"
        }, null, -1))
      ], 64)) : t.name === "prev" ? (P(), N(it, { key: 2 }, [
        s[2] || (s[2] = u("polygon", {
          points: "19 20 9 12 19 4 19 20",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[3] || (s[3] = u("line", {
          x1: "5",
          y1: "19",
          x2: "5",
          y2: "5"
        }, null, -1))
      ], 64)) : t.name === "next" ? (P(), N(it, { key: 3 }, [
        s[4] || (s[4] = u("polygon", {
          points: "5 4 15 12 5 20 5 4",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[5] || (s[5] = u("line", {
          x1: "19",
          y1: "5",
          x2: "19",
          y2: "19"
        }, null, -1))
      ], 64)) : t.name === "repeat" ? (P(), N(it, { key: 4 }, [
        s[6] || (s[6] = u("polyline", { points: "17 1 21 5 17 9" }, null, -1)),
        s[7] || (s[7] = u("path", { d: "M3 11V9a4 4 0 0 1 4-4h14" }, null, -1)),
        s[8] || (s[8] = u("polyline", { points: "7 23 3 19 7 15" }, null, -1)),
        s[9] || (s[9] = u("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" }, null, -1))
      ], 64)) : t.name === "repeat-one" ? (P(), N(it, { key: 5 }, [
        s[10] || (s[10] = zs('<polyline points="17 1 21 5 17 9" data-v-6d96ffa0></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14" data-v-6d96ffa0></path><polyline points="7 23 3 19 7 15" data-v-6d96ffa0></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3" data-v-6d96ffa0></path><text x="12" y="14" text-anchor="middle" font-size="8" fill="currentColor" stroke="none" font-weight="bold" data-v-6d96ffa0>1</text>', 5))
      ], 64)) : t.name === "shuffle" ? (P(), N(it, { key: 6 }, [
        s[11] || (s[11] = zs('<polyline points="16 3 21 3 21 8" data-v-6d96ffa0></polyline><line x1="4" y1="20" x2="21" y2="3" data-v-6d96ffa0></line><polyline points="21 16 21 21 16 21" data-v-6d96ffa0></polyline><line x1="15" y1="15" x2="21" y2="21" data-v-6d96ffa0></line><line x1="4" y1="4" x2="9" y2="9" data-v-6d96ffa0></line>', 5))
      ], 64)) : t.name === "search" ? (P(), N(it, { key: 7 }, [
        s[12] || (s[12] = u("circle", {
          cx: "11",
          cy: "11",
          r: "8"
        }, null, -1)),
        s[13] || (s[13] = u("line", {
          x1: "21",
          y1: "21",
          x2: "16.65",
          y2: "16.65"
        }, null, -1))
      ], 64)) : t.name === "plus" ? (P(), N(it, { key: 8 }, [
        s[14] || (s[14] = u("line", {
          x1: "12",
          y1: "5",
          x2: "12",
          y2: "19"
        }, null, -1)),
        s[15] || (s[15] = u("line", {
          x1: "5",
          y1: "12",
          x2: "19",
          y2: "12"
        }, null, -1))
      ], 64)) : t.name === "x" ? (P(), N(it, { key: 9 }, [
        s[16] || (s[16] = u("line", {
          x1: "18",
          y1: "6",
          x2: "6",
          y2: "18"
        }, null, -1)),
        s[17] || (s[17] = u("line", {
          x1: "6",
          y1: "6",
          x2: "18",
          y2: "18"
        }, null, -1))
      ], 64)) : t.name === "chevron-down" ? (P(), N("polyline", Hu)) : t.name === "chevron-up" ? (P(), N("polyline", Gu)) : t.name === "music" ? (P(), N(it, { key: 12 }, [
        s[18] || (s[18] = u("path", { d: "M9 18V5l12-2v13" }, null, -1)),
        s[19] || (s[19] = u("circle", {
          cx: "6",
          cy: "18",
          r: "3"
        }, null, -1)),
        s[20] || (s[20] = u("circle", {
          cx: "18",
          cy: "16",
          r: "3"
        }, null, -1))
      ], 64)) : t.name === "volume" ? (P(), N(it, { key: 13 }, [
        s[21] || (s[21] = u("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[22] || (s[22] = u("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1)),
        s[23] || (s[23] = u("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }, null, -1))
      ], 64)) : t.name === "volume-mute" ? (P(), N(it, { key: 14 }, [
        s[24] || (s[24] = u("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[25] || (s[25] = u("line", {
          x1: "23",
          y1: "9",
          x2: "17",
          y2: "15"
        }, null, -1)),
        s[26] || (s[26] = u("line", {
          x1: "17",
          y1: "9",
          x2: "23",
          y2: "15"
        }, null, -1))
      ], 64)) : t.name === "check" ? (P(), N("polyline", Wu)) : t.name === "loader" ? (P(), N(it, { key: 16 }, [
        s[27] || (s[27] = zs('<line x1="12" y1="2" x2="12" y2="6" data-v-6d96ffa0></line><line x1="12" y1="18" x2="12" y2="22" data-v-6d96ffa0></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" data-v-6d96ffa0></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" data-v-6d96ffa0></line><line x1="2" y1="12" x2="6" y2="12" data-v-6d96ffa0></line><line x1="18" y1="12" x2="22" y2="12" data-v-6d96ffa0></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" data-v-6d96ffa0></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" data-v-6d96ffa0></line>', 8))
      ], 64)) : t.name === "list" ? (P(), N(it, { key: 17 }, [
        s[28] || (s[28] = zs('<line x1="8" y1="6" x2="21" y2="6" data-v-6d96ffa0></line><line x1="8" y1="12" x2="21" y2="12" data-v-6d96ffa0></line><line x1="8" y1="18" x2="21" y2="18" data-v-6d96ffa0></line><circle cx="3.5" cy="6" r="1.5" fill="currentColor" stroke="none" data-v-6d96ffa0></circle><circle cx="3.5" cy="12" r="1.5" fill="currentColor" stroke="none" data-v-6d96ffa0></circle><circle cx="3.5" cy="18" r="1.5" fill="currentColor" stroke="none" data-v-6d96ffa0></circle>', 6))
      ], 64)) : _t("", !0)
    ], 8, ju));
  }
}), ke = (t, e) => {
  const s = t.__vccOpts || t;
  for (const [n, o] of e)
    s[n] = o;
  return s;
}, kt = /* @__PURE__ */ ke(Ku, [["__scopeId", "data-v-6d96ffa0"]]), zu = { class: "stmp-mini-side stmp-mini-side-left" }, Yu = {
  key: 0,
  class: "stmp-mini-cover"
}, Ju = ["src"], qu = {
  key: 1,
  class: "stmp-mini-cover stmp-mini-cover-placeholder"
}, Xu = {
  key: 1,
  class: "stmp-mini-text stmp-mini-dock-fallback"
}, Zu = { class: "stmp-mini-side stmp-mini-side-right" }, Qu = { class: "stmp-mini-controls" }, tf = ["aria-label"], ef = ["aria-label"], sf = {
  key: 1,
  class: "stmp-mini stmp-mini-drag stmp-mini-drag-idle"
}, nf = { class: "stmp-mini-cover stmp-mini-cover-square" }, of = ["src"], rf = {
  key: 2,
  class: "stmp-mini stmp-mini-drag"
}, lf = ["aria-label"], af = ["src"], cf = { class: "stmp-mini-cover-overlay" }, uf = { class: "stmp-mini-drag-right" }, ff = { class: "stmp-mini-title-copy" }, df = {
  class: "stmp-mini-title-copy",
  "aria-hidden": "true"
}, pf = {
  key: 0,
  class: "stmp-mini-lyric-segment"
}, hf = /* @__PURE__ */ Ce({
  __name: "CollapsedBar",
  props: {
    isDock: { type: Boolean },
    isMobile: { type: Boolean }
  },
  setup(t) {
    const e = Tt(), s = Wt(), n = gt(), o = t, i = /* @__PURE__ */ ft(!1), r = Pt(() => e.currentTrack?.cover || ""), l = Pt(() => !!e.currentTrack), a = Pt(() => n.settings.showDragMiniText), c = Pt(() => {
      const V = e.currentTrack;
      if (!V) return "";
      const q = V.name, S = V.artist || "";
      return S ? `${q} - ${S}` : q;
    }), { scrollY: f, windowRef: h, setLineRef: _ } = yl(), y = /* @__PURE__ */ ft(null), k = /* @__PURE__ */ ft(null), b = /* @__PURE__ */ ft([]), G = /* @__PURE__ */ ft(0), J = /* @__PURE__ */ ft(0);
    function K(V, q) {
      V && (b.value[q] = V);
    }
    function X() {
      const V = y.value, q = e.currentLyricIndex;
      if (!V || q < 0 || q >= b.value.length) {
        J.value = 0, G.value = 0;
        return;
      }
      const S = b.value[q];
      if (!S) return;
      const T = V.clientWidth, w = S.offsetLeft, C = S.offsetWidth, x = e.lyrics[q], E = x?.next ? Math.max(500, (x.next.time - x.time) * 1e3) : 5e3;
      if (C <= T)
        J.value = Math.min(400, E), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            G.value = -w;
          });
        });
      else {
        const R = -(w + C - T), Z = Math.min(600, E * 0.2);
        J.value = Z, requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            G.value = -w;
          });
        }), setTimeout(() => {
          J.value = E - Z, requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              G.value = R;
            });
          });
        }, Z);
      }
    }
    Bt(() => e.currentLyricIndex, X), Bt(() => e.lyrics, () => {
      b.value = [], J.value = 0, G.value = 0, Rt(() => X());
    });
    const j = /* @__PURE__ */ ft(null), U = /* @__PURE__ */ ft(!1);
    function et() {
      const V = j.value;
      if (!V) {
        U.value = !1;
        return;
      }
      const q = V.querySelector(".stmp-mini-title-copy");
      if (!q) {
        U.value = !1;
        return;
      }
      const S = q.offsetWidth - 30;
      U.value = S > V.clientWidth;
    }
    Bt(c, () => {
      Rt(() => et());
    });
    function Y() {
      i.value = !0;
    }
    Bt(() => e.currentTrack?.url, () => {
      i.value = !1;
    });
    function W(V) {
      V.stopPropagation(), e.togglePlay();
    }
    function O(V) {
      V.stopPropagation(), s.next();
    }
    return Us(() => {
      Rt(() => {
        X(), et();
      });
    }), Bs(() => {
    }), (V, q) => o.isDock ? (P(), N("div", {
      key: 0,
      class: at(["stmp-mini", o.isMobile ? "stmp-mini-dock-mobile" : "stmp-mini-dock-desktop"])
    }, [
      u("div", zu, [
        r.value && !i.value ? (P(), N("div", Yu, [
          u("img", {
            src: r.value,
            alt: "",
            onError: Y
          }, null, 40, Ju)
        ])) : (P(), N("div", qu, [
          lt(kt, {
            name: "music",
            size: 14
          })
        ]))
      ]),
      u("div", {
        ref_key: "dockWindowRef",
        ref: h,
        class: "stmp-mini-dock-text"
      }, [
        g(e).lyrics.length > 0 ? (P(), N("div", {
          key: 0,
          class: "stmp-mini-dock-scroll",
          style: Le({ transform: `translateY(-${g(f)}px)` })
        }, [
          (P(!0), N(it, null, jt(g(e).lyrics, (S, T) => (P(), N("span", {
            key: T,
            ref_for: !0,
            ref: (w) => g(_)(w, T),
            class: at(["stmp-mini-dock-line", { "stmp-mini-dock-line-active": T === g(e).currentLyricIndex }])
          }, D(S.text), 3))), 128))
        ], 4)) : (P(), N("span", Xu, D(c.value), 1))
      ], 512),
      u("div", Zu, [
        u("div", Qu, [
          u("button", {
            class: "stmp-mini-btn",
            "aria-label": g(e).isPlaying ? g(m)("Pause") : g(m)("Play"),
            onClick: W
          }, [
            lt(kt, {
              name: g(e).isPlaying ? "pause" : "play",
              size: o.isMobile ? 16 : 14
            }, null, 8, ["name", "size"])
          ], 8, tf),
          u("button", {
            class: "stmp-mini-btn",
            "aria-label": g(m)("Next"),
            onClick: O
          }, [
            lt(kt, {
              name: "next",
              size: o.isMobile ? 16 : 14
            }, null, 8, ["size"])
          ], 8, ef)
        ])
      ])
    ], 2)) : !l.value || !a.value ? (P(), N("div", sf, [
      u("div", nf, [
        r.value && !i.value ? (P(), N("img", {
          key: 0,
          src: r.value,
          alt: "",
          onError: Y
        }, null, 40, of)) : (P(), te(kt, {
          key: 1,
          name: "music",
          size: 20
        }))
      ])
    ])) : (P(), N("div", rf, [
      u("button", {
        class: "stmp-mini-cover stmp-mini-cover-square",
        "aria-label": g(e).isPlaying ? g(m)("Pause") : g(m)("Play"),
        onClick: W
      }, [
        r.value && !i.value ? (P(), N("img", {
          key: 0,
          src: r.value,
          alt: "",
          onError: Y
        }, null, 40, af)) : (P(), te(kt, {
          key: 1,
          name: "music",
          size: 20
        })),
        u("div", cf, [
          lt(kt, {
            name: g(e).isPlaying ? "pause" : "play",
            size: 18
          }, null, 8, ["name"])
        ])
      ], 8, lf),
      u("div", uf, [
        u("div", {
          ref_key: "titleContainerRef",
          ref: j,
          class: at(["stmp-mini-title-drag", { overflowing: U.value }])
        }, [
          (P(), N("div", {
            class: "stmp-mini-title-track",
            key: c.value
          }, [
            u("span", ff, D(c.value), 1),
            u("span", df, D(c.value), 1)
          ]))
        ], 2),
        u("div", {
          ref_key: "lyricContainerRef",
          ref: y,
          class: "stmp-mini-lyric"
        }, [
          u("div", {
            ref_key: "lyricTrackRef",
            ref: k,
            class: "stmp-mini-lyric-track",
            style: Le({
              transform: `translateX(${G.value}px)`,
              transition: J.value > 0 ? `transform ${J.value}ms linear` : "none"
            })
          }, [
            (P(!0), N(it, null, jt(g(e).lyrics, (S, T) => (P(), N("span", {
              key: T,
              ref_for: !0,
              ref: (w) => K(w, T),
              class: at(["stmp-mini-lyric-segment", { active: T === g(e).currentLyricIndex }])
            }, D(S.text) + "  ", 3))), 128)),
            g(e).lyrics.length === 0 ? (P(), N("span", pf, D(" "))) : _t("", !0)
          ], 4)
        ], 512)
      ])
    ]));
  }
}), Ri = /* @__PURE__ */ ke(hf, [["__scopeId", "data-v-0d196a3f"]]), gf = { class: "stmp-playlist" }, mf = { class: "stmp-tabs" }, yf = ["onClick"], vf = {
  key: 0,
  class: "stmp-upload-area"
}, _f = ["disabled"], bf = {
  key: 1,
  class: "stmp-empty"
}, wf = ["onClick"], xf = { class: "stmp-item-index" }, Sf = { class: "stmp-item-info" }, Tf = { class: "stmp-item-song" }, Cf = {
  key: 0,
  class: "stmp-item-artist"
}, Af = ["onClick"], kf = /* @__PURE__ */ Ce({
  __name: "PlaylistView",
  setup(t) {
    const e = Wt(), s = gt(), n = Pt(() => {
      const y = [
        { value: "network", label: m("Network") }
      ];
      return s.settings.providers.find((b) => b.id === "local")?.enabled && y.push({ value: "server", label: m("Upload") }), y.push({ value: "chat", label: m("Chat") }), y;
    });
    Bt(n, (y) => {
      y.some((k) => k.value === e.activeTab) || e.setActiveTab("network");
    });
    const o = /* @__PURE__ */ ft(null), i = /* @__PURE__ */ ft(!1), r = () => {
      o.value?.click();
    }, l = async (y) => {
      const k = y.target;
      if (!k.files || !k.files[0]) return;
      const b = k.files[0];
      i.value = !0;
      try {
        await e.addServerFile(b.name, b), typeof toastr < "u" && toastr.success(m("Added"));
      } catch (G) {
        console.error("[stmp] upload failed", G), typeof toastr < "u" && toastr.error(m("Cannot play") + ": " + b.name);
      } finally {
        i.value = !1;
      }
      k.value = "";
    }, a = Pt(() => e.getListByTab(e.activeTab).map((k, b) => ({ index: b, item: k }))), c = Pt(() => a.value.length === 0);
    function f(y) {
      e.play(e.activeTab, y);
    }
    function h(y) {
      e.removeItem(e.activeTab, y);
    }
    function _(y) {
      e.setActiveTab(y);
    }
    return (y, k) => (P(), N("div", gf, [
      u("div", mf, [
        (P(!0), N(it, null, jt(n.value, (b) => (P(), N("div", {
          key: b.value,
          class: at(["stmp-tab", { active: g(e).activeTab === b.value }]),
          onClick: (G) => _(b.value)
        }, D(b.label), 11, yf))), 128))
      ]),
      g(e).activeTab === "server" ? (P(), N("div", vf, [
        u("input", {
          type: "file",
          accept: "audio/*",
          ref_key: "fileInputRef",
          ref: o,
          onChange: l,
          style: { display: "none" }
        }, null, 544),
        u("button", {
          class: "stmp-upload-btn",
          disabled: i.value,
          onClick: r
        }, D(i.value ? "..." : "+ " + g(m)("Upload audio file")), 9, _f)
      ])) : _t("", !0),
      c.value ? (P(), N("div", bf, D(g(m)("No Songs")), 1)) : (P(!0), N(it, { key: 2 }, jt(a.value, (b) => (P(), N("div", {
        key: b.item.id,
        class: at(["stmp-item", { active: g(e).activeTab === g(e).currentList && b.index === g(e).currentIndex }]),
        onClick: (G) => f(b.index)
      }, [
        u("span", xf, D(b.index + 1), 1),
        u("div", Sf, [
          u("span", Tf, D(b.item.song), 1),
          b.item.artist ? (P(), N("span", Cf, D(b.item.artist), 1)) : _t("", !0)
        ]),
        u("button", {
          class: "stmp-item-del",
          onClick: Oe((G) => h(b.index), ["stop"])
        }, [
          lt(kt, {
            name: "x",
            size: 14
          })
        ], 8, Af)
      ], 10, wf))), 128))
    ]));
  }
}), Ef = /* @__PURE__ */ ke(kf, [["__scopeId", "data-v-338ceb2a"]]), Mf = { class: "stmp-search" }, Pf = { class: "stmp-search-bar" }, If = ["placeholder"], Rf = ["disabled"], Of = {
  key: 0,
  class: "stmp-search-error"
}, Lf = ["aria-label"], $f = {
  key: 1,
  class: "stmp-search-loading"
}, Nf = {
  key: 2,
  class: "stmp-search-empty"
}, Df = {
  key: 3,
  class: "stmp-search-hint"
}, Ff = {
  key: 4,
  class: "stmp-results"
}, Uf = ["onClick"], Bf = { class: "stmp-result-name" }, jf = {
  key: 0,
  class: "stmp-result-artist"
}, Vf = ["aria-label", "onClick"], Hf = /* @__PURE__ */ Ce({
  __name: "SearchView",
  setup(t) {
    const e = Bu(), s = Wt(), n = gt(), o = /* @__PURE__ */ ft(e.keyword), i = /* @__PURE__ */ ft(null);
    async function r() {
      e.setKeyword(o.value);
      const y = Je(n.settings.providers);
      await e.search(y);
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
    function f(y) {
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
    function h(y) {
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
    return (y, k) => (P(), N("div", Mf, [
      u("div", Pf, [
        He(u("input", {
          "onUpdate:modelValue": k[0] || (k[0] = (b) => o.value = b),
          class: "stmp-search-input",
          placeholder: g(m)("Search Song..."),
          onKeydown: mu(r, ["enter"])
        }, null, 40, If), [
          [mo, o.value]
        ]),
        u("button", {
          class: "stmp-icon-btn",
          disabled: g(e).isSearching,
          onClick: r
        }, [
          g(e).isSearching ? (P(), te(kt, {
            key: 1,
            name: "loader",
            size: 16,
            class: "stmp-spin"
          })) : (P(), te(kt, {
            key: 0,
            name: "search",
            size: 16
          }))
        ], 8, Rf)
      ]),
      g(e).error ? (P(), N("div", Of, [
        u("span", null, D(g(e).error), 1),
        u("button", {
          class: "stmp-retry-btn",
          "aria-label": g(m)("Retry"),
          onClick: l
        }, D(g(m)("Retry")), 9, Lf)
      ])) : _t("", !0),
      g(e).isSearching ? (P(), N("div", $f, D(g(m)("Searching...")), 1)) : o.value && !g(e).results.length ? (P(), N("div", Nf, D(g(m)("No results")), 1)) : !o.value && !g(e).results.length ? (P(), N("div", Df, D(g(m)("Type a song name to search")), 1)) : _t("", !0),
      g(e).results.length ? (P(), N("div", Ff, [
        (P(!0), N(it, null, jt(g(e).results, (b) => (P(), N("div", {
          key: b.provider + b.id,
          class: at(["stmp-result", { "stmp-result-playing": _(b) }])
        }, [
          u("div", {
            class: "stmp-result-info",
            onClick: (G) => f(b)
          }, [
            u("span", Bf, D(b.name), 1),
            b.artist ? (P(), N("span", jf, D(b.artist), 1)) : _t("", !0)
          ], 8, Uf),
          u("button", {
            class: at(["stmp-icon-btn stmp-result-add", { added: a(b) }]),
            "aria-label": a(b) ? g(m)("Added") : g(m)("Add to list"),
            onClick: Oe((G) => h(b), ["stop"])
          }, [
            lt(kt, {
              name: a(b) ? "check" : "plus",
              size: 16
            }, null, 8, ["name"])
          ], 10, Vf)
        ], 2))), 128))
      ])) : _t("", !0)
    ]));
  }
}), Gf = /* @__PURE__ */ ke(Hf, [["__scopeId", "data-v-3ecc63a1"]]), Wf = { class: "stmp-panel" }, Kf = { class: "stmp-topbar stmp-drag-handle" }, zf = ["aria-label"], Yf = { class: "stmp-cover-large" }, Jf = ["src"], qf = {
  key: 1,
  class: "stmp-cover-placeholder"
}, Xf = { class: "stmp-track-name" }, Zf = { class: "stmp-track-artist" }, Qf = { class: "stmp-lyric-header" }, td = { class: "stmp-track-name" }, ed = { class: "stmp-track-artist" }, sd = { class: "stmp-progress" }, nd = ["value"], od = { class: "stmp-time" }, id = { class: "stmp-controls" }, rd = { class: "stmp-ctrl-side stmp-search-side" }, ld = ["aria-label"], ad = ["aria-label"], cd = ["aria-label"], ud = ["aria-label"], fd = ["aria-label"], dd = ["aria-label"], pd = { class: "stmp-ctrl-side stmp-volume-side" }, hd = ["aria-label"], gd = ["value"], md = {
  key: 0,
  class: "stmp-overlay"
}, yd = { class: "stmp-overlay-header" }, vd = { class: "stmp-overlay-title" }, _d = ["aria-label"], bd = { class: "stmp-overlay-body" }, wd = /* @__PURE__ */ Ce({
  __name: "PlayerPanel",
  emits: ["collapse"],
  setup(t) {
    const e = Tt(), s = Wt(), n = gt(), o = Pt(
      () => n.settings.widgetMode === "dock" && n.settings.dockAlign.startsWith("top-")
    ), i = /* @__PURE__ */ ft("cover"), r = /* @__PURE__ */ ft(null), l = /* @__PURE__ */ ft(!1), a = /* @__PURE__ */ ft(!1);
    let c = null, f = 0;
    const h = Pt(() => e.currentTrack?.cover || ""), _ = () => {
      l.value = !0;
    };
    Bt(
      () => e.currentTrack,
      () => {
        l.value = !1;
      }
    );
    const y = Pt(
      () => e.duration > 0 ? e.currentTime / e.duration * 100 : 0
    ), { scrollY: k, windowRef: b, setLineRef: G } = yl();
    function J(S) {
      const T = Math.floor(S / 60), w = Math.floor(S % 60);
      return T + ":" + w.toString().padStart(2, "0");
    }
    function K(S) {
      const T = S.target;
      e.seek(Number(T.value) / 100 * e.duration);
    }
    const X = ["list", "random", "single"], j = {
      list: "repeat",
      random: "shuffle",
      single: "repeat-one"
    };
    function U() {
      const S = n.settings.playMode, T = X.indexOf(S), w = X[(T + 1) % X.length];
      n.setPlayMode(w);
    }
    function et(S) {
      const T = S.target;
      e.setVolume(Number(T.value));
    }
    function Y() {
      c && clearTimeout(c), a.value = !0;
    }
    function W() {
      c = setTimeout(() => {
        a.value = !1;
      }, 300);
    }
    function O() {
      e.volume > 0 ? (f = e.volume, e.setVolume(0)) : e.setVolume(f || n.settings.volume);
    }
    function V(S) {
      r.value === S ? r.value = null : r.value = S;
    }
    function q() {
      r.value = null;
    }
    return (S, T) => (P(), N("div", Wf, [
      u("div", Kf, [
        T[7] || (T[7] = u("div", { class: "stmp-topbar-spacer" }, null, -1)),
        u("button", {
          class: "stmp-icon-btn",
          "aria-label": g(m)("Collapse panel"),
          onClick: T[0] || (T[0] = Oe((w) => S.$emit("collapse"), ["stop"]))
        }, [
          lt(kt, {
            name: o.value ? "chevron-up" : "chevron-down",
            size: 18
          }, null, 8, ["name"])
        ], 8, zf)
      ]),
      u("div", {
        class: "stmp-display",
        onClick: T[1] || (T[1] = (w) => i.value = i.value === "cover" ? "lyric" : "cover")
      }, [
        u("div", {
          class: at(["stmp-cover-mode", { hidden: i.value !== "cover" }])
        }, [
          u("div", Yf, [
            h.value && !l.value ? (P(), N("img", {
              key: 0,
              src: h.value,
              alt: "cover",
              onError: _
            }, null, 40, Jf)) : (P(), N("div", qf, [
              lt(kt, {
                name: "music",
                size: 48
              })
            ]))
          ]),
          u("div", Xf, D(g(e).currentTrack?.name || g(m)("No Song")), 1),
          u("div", Zf, D((g(e).currentTrack?.artist || "").trim() || " "), 1)
        ], 2),
        u("div", {
          class: at(["stmp-lyric-mode", { hidden: i.value !== "lyric" }])
        }, [
          u("div", Qf, [
            u("div", td, D(g(e).currentTrack?.name || g(m)("No Song")), 1),
            u("div", ed, D((g(e).currentTrack?.artist || "").trim() || " "), 1)
          ]),
          u("div", {
            ref_key: "lyricWindowRef",
            ref: b,
            class: "stmp-lyric-window"
          }, [
            g(e).lyrics.length > 0 ? (P(), N("div", {
              key: 0,
              class: "stmp-lyric-scroll",
              style: Le({ transform: `translateY(-${g(k)}px)` })
            }, [
              (P(!0), N(it, null, jt(g(e).lyrics, (w, C) => (P(), N("div", {
                key: C,
                ref_for: !0,
                ref: (x) => g(G)(x, C),
                class: at(["stmp-lyric-line", { "stmp-lyric-active": C === g(e).currentLyricIndex }])
              }, D(w.text), 3))), 128))
            ], 4)) : _t("", !0)
          ], 512)
        ], 2)
      ]),
      u("div", sd, [
        u("input", {
          type: "range",
          min: "0",
          max: "100",
          step: "0.1",
          value: y.value,
          class: "stmp-range",
          onInput: K
        }, null, 40, nd),
        u("div", od, [
          u("span", null, D(J(g(e).currentTime)), 1),
          u("span", null, D(J(g(e).duration)), 1)
        ])
      ]),
      u("div", id, [
        u("div", rd, [
          u("button", {
            class: at(["stmp-ctrl-btn", { active: r.value === "search" }]),
            "aria-label": g(m)("Search"),
            onClick: T[2] || (T[2] = Oe((w) => V("search"), ["stop"]))
          }, [
            lt(kt, {
              name: "search",
              size: 18
            })
          ], 10, ld)
        ]),
        u("button", {
          class: "stmp-ctrl-btn",
          "aria-label": g(m)("Toggle play mode"),
          onClick: U
        }, [
          lt(kt, {
            name: j[g(n).settings.playMode],
            size: 16
          }, null, 8, ["name"])
        ], 8, ad),
        u("button", {
          class: "stmp-ctrl-btn",
          "aria-label": g(m)("Previous"),
          onClick: T[3] || (T[3] = (w) => g(s).prev())
        }, [
          lt(kt, {
            name: "prev",
            size: 18
          })
        ], 8, cd),
        u("button", {
          class: "stmp-ctrl-btn stmp-play-btn",
          "aria-label": g(e).isPlaying ? g(m)("Pause") : g(m)("Play"),
          onClick: T[4] || (T[4] = (w) => g(e).togglePlay())
        }, [
          lt(kt, {
            name: g(e).isPlaying ? "pause" : "play",
            size: 24
          }, null, 8, ["name"])
        ], 8, ud),
        u("button", {
          class: "stmp-ctrl-btn",
          "aria-label": g(m)("Next"),
          onClick: T[5] || (T[5] = (w) => g(s).next())
        }, [
          lt(kt, {
            name: "next",
            size: 18
          })
        ], 8, fd),
        u("button", {
          class: at(["stmp-ctrl-btn", { active: r.value === "list" }]),
          "aria-label": g(m)("Playlist"),
          onClick: T[6] || (T[6] = Oe((w) => V("list"), ["stop"]))
        }, [
          lt(kt, {
            name: "list",
            size: 16
          })
        ], 10, dd),
        u("div", pd, [
          u("div", {
            class: "stmp-volume-container",
            onMouseenter: Y,
            onMouseleave: W
          }, [
            u("button", {
              class: "stmp-ctrl-btn",
              "aria-label": g(m)("Mute / Unmute"),
              onClick: O
            }, [
              lt(kt, {
                name: g(e).volume === 0 ? "volume-mute" : "volume",
                size: 18
              }, null, 8, ["name"])
            ], 8, hd),
            u("div", {
              class: at(["stmp-volume-popup", { show: a.value }])
            }, [
              u("input", {
                type: "range",
                min: "0",
                max: "100",
                value: g(e).volume,
                class: "stmp-volume-vertical",
                orient: "vertical",
                onInput: et
              }, null, 40, gd)
            ], 2)
          ], 32)
        ])
      ]),
      lt(Gc, { name: "stmp-overlay" }, {
        default: kr(() => [
          r.value ? (P(), N("div", md, [
            u("div", yd, [
              u("span", vd, D(r.value === "list" ? g(m)("Playlist") : g(m)("Search")), 1),
              u("button", {
                class: "stmp-overlay-close",
                "aria-label": g(m)("Close"),
                onClick: Oe(q, ["stop"])
              }, [
                lt(kt, {
                  name: "x",
                  size: 16
                })
              ], 8, _d)
            ]),
            u("div", bd, [
              r.value === "list" ? (P(), te(Ef, { key: 0 })) : (P(), te(Gf, { key: 1 }))
            ])
          ])) : _t("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Oi = /* @__PURE__ */ ke(wd, [["__scopeId", "data-v-7f1745ff"]]), xd = {
  key: 1,
  class: "stmp-inline-expanded"
}, Li = 3, Sd = 500, Td = /* @__PURE__ */ Ce({
  __name: "App",
  setup(t) {
    const e = gt(), s = Tt(), n = /* @__PURE__ */ ft(!1), o = /* @__PURE__ */ ft(null);
    let i = null;
    const r = Pt(() => e.settings.widgetMode === "dock"), l = Pt(() => e.settings.widgetMode === "inline"), a = Pt(() => e.settings.widgetMode === "hidden"), c = /* @__PURE__ */ ft(window.innerWidth <= 768), f = /* @__PURE__ */ ft(!1), h = Pt(() => e.settings.dockAlign.startsWith("top-")), _ = Pt(() => e.settings.customOpacity ? e.settings.opacity : 75), y = (R) => {
      R.key === "Escape" && (n.value = !1), R.key === " " && R.target === document.body && (R.preventDefault(), s.togglePlay());
    };
    let k = 0, b = 0, G = 0, J = 0, K = !1, X = !1, j = 0, U = !1, et = null, Y = null;
    function W(R) {
      if (r.value) return;
      const Z = R.target;
      if (Z.closest("input, .stmp-result, .stmp-item, .stmp-upload-btn, .stmp-search-input, .stmp-controls, .stmp-lyrics, .stmp-overlay, .stmp-display, .stmp-overlay-close") || n.value && (!Z.closest(".stmp-drag-handle") || Z.closest("button")) || !n.value && Z.closest("button"))
        return;
      const dt = o.value?.getBoundingClientRect();
      dt && (k = R.clientX, b = R.clientY, G = dt.left, J = dt.top, K = !1, X = !0, j = Date.now(), U = !1, o.value && (o.value.style.left = dt.left + "px", o.value.style.top = dt.top + "px", o.value.style.right = "auto", o.value.style.bottom = "auto"), et = O, Y = V, document.addEventListener("pointermove", et), document.addEventListener("pointerup", Y), R.preventDefault());
    }
    function O(R) {
      if (!o.value || !X) return;
      const Z = R.clientX - k, dt = R.clientY - b;
      (Math.abs(Z) > Li || Math.abs(dt) > Li) && (K = !0);
      let mt = G + Z, Q = J + dt;
      const St = o.value.offsetWidth || 60, Et = o.value.offsetHeight || 40, se = window.innerWidth - St, ne = window.innerHeight - Et;
      mt = Math.max(0, Math.min(mt, se)), Q = Math.max(0, Math.min(Q, ne)), o.value.style.left = mt + "px", o.value.style.top = Q + "px";
    }
    function V() {
      X = !1, et && document.removeEventListener("pointermove", et), Y && document.removeEventListener("pointerup", Y), et = null, Y = null;
      const R = Date.now() - j;
      if (K) {
        if (U = !0, o.value) {
          const Z = o.value.getBoundingClientRect();
          e.setPosition({ x: Z.left, y: Z.top }), n.value && Rt(() => q());
        }
        return;
      }
      if (R > Sd) {
        U = !0;
        return;
      }
    }
    function q() {
      if (!o.value) return;
      const R = o.value.getBoundingClientRect(), Z = o.value.offsetWidth, dt = o.value.offsetHeight;
      let mt = R.left, Q = R.top;
      mt + Z > window.innerWidth && (mt = window.innerWidth - Z), Q + dt > window.innerHeight && (Q = window.innerHeight - dt), mt < 0 && (mt = 0), Q < 0 && (Q = 0), o.value.style.left = mt + "px", o.value.style.top = Q + "px", o.value.style.right = "auto", o.value.style.bottom = "auto", e.setPosition({ x: mt, y: Q });
    }
    function S() {
      if (!o.value || !r.value) return;
      const R = e.settings.dockAlign, Z = R.startsWith("top-"), dt = R.endsWith("-right"), mt = Z ? document.querySelector("#top-settings-holder") : document.querySelector("#send_form");
      if (!mt) return;
      const Q = mt.getBoundingClientRect(), St = o.value.offsetHeight || 38;
      if (Z) {
        const Et = Math.max(80, window.innerHeight - Q.bottom - 8);
        o.value.style.maxHeight = Et + "px", o.value.style.top = Q.bottom + "px";
      } else {
        const Et = Math.max(80, Q.top - 8);
        o.value.style.maxHeight = Et + "px";
        let se = Q.top - Math.min(St, Et);
        se < 4 && (se = 4), o.value.style.top = se + "px";
      }
      if (window.innerWidth <= 768)
        o.value.style.left = Q.left + "px", o.value.style.width = Q.width + "px";
      else {
        const Et = o.value.offsetWidth;
        dt ? o.value.style.left = Q.right - Et + "px" : o.value.style.left = Q.left + "px", o.value.style.width = "";
      }
      o.value.style.right = "auto", o.value.style.bottom = "auto";
    }
    function T() {
      if (!o.value || r.value) return;
      const R = e.settings.position;
      R ? (o.value.style.left = R.x + "px", o.value.style.top = R.y + "px", o.value.style.right = "auto", o.value.style.bottom = "auto", window.innerWidth <= 768 && Rt(() => q())) : (o.value.style.left = window.innerWidth - o.value.offsetWidth - 16 + "px", o.value.style.top = "16px", o.value.style.right = "auto", o.value.style.bottom = "auto");
    }
    function w(R) {
      if (U) {
        U = !1;
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
    function C(R) {
      n.value || R.target.closest("button, input") || x();
    }
    function x() {
      n.value = !n.value, Rt(() => {
        r.value ? S() : l.value || e.settings.position && q();
      });
    }
    Bt(() => e.settings.widgetMode, (R) => {
      n.value = !1, o.value && (o.value.style.width = "", o.value.style.left = "", o.value.style.top = "", o.value.style.right = "", o.value.style.bottom = "", o.value.style.maxHeight = ""), R === "inline" && (f.value = !!document.querySelector("#send_form")), Rt(() => {
        R === "dock" ? S() : R === "drag" && T();
      });
    }), Bt(() => e.settings.dockAlign, () => {
      r.value && Rt(() => S());
    }), Us(() => {
      f.value = !!document.querySelector("#send_form"), Rt(() => {
        r.value ? S() : l.value || T();
      }), o.value && typeof ResizeObserver < "u" && (i = new ResizeObserver(() => {
        r.value && S();
      }), i.observe(o.value)), window.addEventListener("resize", E), window.addEventListener("keydown", y);
    });
    function E() {
      c.value = window.innerWidth <= 768, r.value ? Rt(() => S()) : l.value || Rt(() => q());
    }
    return Bs(() => {
      V(), i && (i.disconnect(), i = null), window.removeEventListener("resize", E), window.removeEventListener("keydown", y);
    }), (R, Z) => l.value ? (P(), N(it, { key: 0 }, [
      f.value ? (P(), te(Rr, {
        key: 0,
        to: "#send_form"
      }, [
        n.value ? (P(), N("div", xd, [
          lt(Oi, { onCollapse: x })
        ])) : (P(), N("div", {
          key: 0,
          class: "stmp-inline-bar",
          onClick: C
        }, [
          lt(Ri, {
            "is-dock": !0,
            "is-mobile": !0
          })
        ]))
      ])) : _t("", !0)
    ], 64)) : a.value ? _t("", !0) : (P(), N("div", {
      key: 1,
      ref_key: "widgetRef",
      ref: o,
      class: at(["stmp-widget", {
        "stmp-expanded": n.value,
        "stmp-collapsed": !n.value,
        "stmp-dock": r.value,
        "stmp-dock-top": r.value && h.value,
        "stmp-dock-bottom": r.value && !h.value
      }]),
      style: Le({ "--stmp-opacity": _.value + "%" }),
      onPointerdown: W,
      onClick: w
    }, [
      n.value ? (P(), te(Oi, {
        key: 1,
        onCollapse: x
      })) : (P(), te(Ri, {
        key: 0,
        "is-dock": r.value,
        "is-mobile": c.value
      }, null, 8, ["is-dock", "is-mobile"]))
    ], 38));
  }
}), Cd = /* @__PURE__ */ ke(Td, [["__scopeId", "data-v-c12e113b"]]);
var Qe = class extends Error {
  constructor(t, e) {
    super("".concat(t, " at position ").concat(e)), this.position = e;
  }
};
function Ad(t) {
  return /^[0-9A-Fa-f]$/.test(t);
}
function je(t) {
  return t >= "0" && t <= "9";
}
function kd(t) {
  return t >= " ";
}
function Js(t) {
  return `,:[]/{}()
+`.includes(t);
}
function $i(t) {
  return t >= "a" && t <= "z" || t >= "A" && t <= "Z" || t === "_" || t === "$";
}
function Ni(t) {
  return t >= "a" && t <= "z" || t >= "A" && t <= "Z" || t === "_" || t === "$" || t >= "0" && t <= "9";
}
var Di = /^(http|https|ftp|mailto|file|data|irc):\/\/$/, Fi = /^[A-Za-z0-9-._~:/?#@!$&'()*+;=]$/;
function Ui(t) {
  return `,[]/{}
+`.includes(t);
}
function Bi(t) {
  return sn(t) || Ed.test(t);
}
var Ed = /^[[{\w-]$/;
function Md(t) {
  return t === `
` || t === "\r" || t === "	" || t === "\b" || t === "\f";
}
function Ke(t, e) {
  let s = t.charCodeAt(e);
  return s === 32 || s === 10 || s === 9 || s === 13;
}
function Pd(t, e) {
  let s = t.charCodeAt(e);
  return s === 32 || s === 9 || s === 13;
}
function Id(t, e) {
  let s = t.charCodeAt(e);
  return s === 160 || s >= 8192 && s <= 8202 || s === 8239 || s === 8287 || s === 12288;
}
function sn(t) {
  return vl(t) || _o(t);
}
function vl(t) {
  return t === '"' || t === "“" || t === "”";
}
function ji(t) {
  return t === '"';
}
function _o(t) {
  return t === "'" || t === "‘" || t === "’" || t === "`" || t === "´";
}
function Vi(t) {
  return t === "'";
}
function hs(t, e) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = t.lastIndexOf(e);
  return n !== -1 ? t.substring(0, n) + (s ? "" : t.substring(n + 1)) : t;
}
function Xt(t, e) {
  let s = t.length;
  if (!Ke(t, s - 1)) return t + e;
  for (; Ke(t, s - 1); ) s--;
  return t.substring(0, s) + e + t.substring(s);
}
function Rd(t, e, s) {
  return t.substring(0, e) + t.substring(e + s);
}
function Od(t) {
  return /[,\n][ \t\r]*$/.test(t);
}
var Ld = { "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t" }, $d = { '"': '"', "\\": "\\", "/": "/", b: "\b", f: "\f", n: `
`, r: "\r", t: "	" };
function Hi(t) {
  let e = 0, s = "";
  a(), o() || S(), a();
  let n = c(",");
  for (n && i(), Bi(t[e]) && Od(s) ? (n || (s = Xt(s, ",")), b()) : n && (s = hs(s, ",")); t[e] === "}" || t[e] === "]"; ) e++, i();
  if (e >= t.length) return s;
  q();
  function o() {
    i();
    let x = y() || k() || G() || K() || X() || U(!1) || et();
    return i(), x;
  }
  function i() {
    let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, E = e, R = r(x);
    do
      R = l(), R && (R = r(x));
    while (R);
    return e > E;
  }
  function r(x) {
    let E = x ? Ke : Pd, R = "";
    for (; ; ) if (E(t, e)) R += t[e], e++;
    else if (Id(t, e)) R += " ", e++;
    else break;
    return R.length > 0 ? (s += R, !0) : !1;
  }
  function l() {
    if (t[e] === "/" && t[e + 1] === "*") {
      for (; e < t.length && !Nd(t, e); ) e++;
      return e += 2, !0;
    }
    if (t[e] === "/" && t[e + 1] === "/") {
      for (; e < t.length && t[e] !== `
`; ) e++;
      return !0;
    }
    return !1;
  }
  function a() {
    if (t.slice(e, e + 3) === "```") {
      if (e += 3, $i(t[e])) for (; e < t.length && Ni(t[e]); ) e++;
      return i(), !0;
    }
    return !1;
  }
  function c(x) {
    return t[e] === x ? (s += t[e], e++, !0) : !1;
  }
  function f(x) {
    return t[e] === x ? (e++, !0) : !1;
  }
  function h() {
    return f("\\");
  }
  function _() {
    return i(), t[e] === "." && t[e + 1] === "." && t[e + 2] === "." ? (e += 3, i(), f(","), !0) : !1;
  }
  function y() {
    if (t[e] === "{") {
      s += "{", e++, i(), f(",") && i();
      let x = !0;
      for (; e < t.length && t[e] !== "}"; ) {
        let E;
        if (x ? (E = !0, x = !1) : (E = c(","), E || (s = Xt(s, ",")), i()), _(), !(G() || U(!0))) {
          t[e] === "}" || t[e] === "{" || t[e] === "]" || t[e] === "[" || t[e] === void 0 ? s = hs(s, ",") : T();
          break;
        }
        i();
        let R = c(":"), Z = e >= t.length;
        R || (Bi(t[e]) || Z ? s = Xt(s, ":") : w()), o() || (R || Z ? s += "null" : w());
      }
      return t[e] === "}" ? (s += "}", e++) : s = Xt(s, "}"), !0;
    }
    return !1;
  }
  function k() {
    if (t[e] === "[") {
      s += "[", e++, i(), f(",") && i();
      let x = !0;
      for (; e < t.length && t[e] !== "]"; ) if (x ? x = !1 : c(",") || (s = Xt(s, ",")), _(), !o()) {
        s = hs(s, ",");
        break;
      }
      return t[e] === "]" ? (s += "]", e++) : s = Xt(s, "]"), !0;
    }
    return !1;
  }
  function b() {
    let x = !0, E = !0;
    for (; E; ) x ? x = !1 : c(",") || (s = Xt(s, ",")), E = o();
    E || (s = hs(s, ",")), s = `[
`.concat(s, `
]`);
  }
  function G() {
    let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1, R = t[e] === "\\";
    if (R && (e++, R = !0), sn(t[e])) {
      let Z = ji(t[e]) ? ji : Vi(t[e]) ? Vi : _o(t[e]) ? _o : vl, dt = e, mt = s.length, Q = '"';
      for (e++; ; ) {
        if (e >= t.length) {
          let St = Y(e - 1);
          return !x && Js(t.charAt(St)) ? (e = dt, s = s.substring(0, mt), G(!0)) : (Q = Xt(Q, '"'), s += Q, !0);
        } else {
          if (e === E) return Q = Xt(Q, '"'), s += Q, !0;
          if (Z(t[e])) {
            let St = e, Et = Q.length;
            if (Q += '"', e++, s += Q, i(!1), x || e >= t.length || Js(t[e]) || sn(t[e]) || je(t[e])) return J(), !0;
            let se = Y(St - 1), ne = t.charAt(se);
            if (ne === ",") return e = dt, s = s.substring(0, mt), G(!1, se);
            if (Js(ne)) return e = dt, s = s.substring(0, mt), G(!0);
            s = s.substring(0, mt), e = St + 1, Q = "".concat(Q.substring(0, Et), "\\").concat(Q.substring(Et));
          } else if (x && Ui(t[e])) {
            if (t[e - 1] === ":" && Di.test(t.substring(dt + 1, e + 2))) for (; e < t.length && Fi.test(t[e]); ) Q += t[e], e++;
            return Q = Xt(Q, '"'), s += Q, J(), !0;
          } else if (t[e] === "\\") {
            let St = t.charAt(e + 1);
            if ($d[St] !== void 0) Q += t.slice(e, e + 2), e += 2;
            else if (St === "u") {
              let Et = 2;
              for (; Et < 6 && Ad(t[e + Et]); ) Et++;
              Et === 6 ? (Q += t.slice(e, e + 6), e += 6) : e + Et >= t.length ? e = t.length : C();
            } else Q += St, e += 2;
          } else {
            let St = t.charAt(e);
            St === '"' && t[e - 1] !== "\\" ? (Q += "\\".concat(St), e++) : Md(St) ? (Q += Ld[St], e++) : (kd(St) || V(St), Q += St, e++);
          }
        }
        R && h();
      }
    }
    return !1;
  }
  function J() {
    let x = !1;
    for (i(); t[e] === "+"; ) {
      x = !0, e++, i(), s = hs(s, '"', !0);
      let E = s.length;
      G() ? s = Rd(s, E, 1) : s = Xt(s, '"');
    }
    return x;
  }
  function K() {
    let x = e;
    if (t[e] === "-") {
      if (e++, W()) return O(x), !0;
      if (!je(t[e])) return e = x, !1;
    }
    for (; je(t[e]); ) e++;
    if (t[e] === ".") {
      if (e++, W()) return O(x), !0;
      if (!je(t[e])) return e = x, !1;
      for (; je(t[e]); ) e++;
    }
    if (t[e] === "e" || t[e] === "E") {
      if (e++, (t[e] === "-" || t[e] === "+") && e++, W()) return O(x), !0;
      if (!je(t[e])) return e = x, !1;
      for (; je(t[e]); ) e++;
    }
    if (!W()) return e = x, !1;
    if (e > x) {
      let E = t.slice(x, e), R = /^0\d/.test(E);
      return s += R ? '"'.concat(E, '"') : E, !0;
    }
    return !1;
  }
  function X() {
    return j("true", "true") || j("false", "false") || j("null", "null") || j("True", "true") || j("False", "false") || j("None", "null");
  }
  function j(x, E) {
    return t.slice(e, e + x.length) === x ? (s += E, e += x.length, !0) : !1;
  }
  function U(x) {
    let E = e;
    if ($i(t[e])) {
      for (; e < t.length && Ni(t[e]); ) e++;
      let R = e;
      for (; Ke(t, R); ) R++;
      if (t[R] === "(") return e = R + 1, o(), t[e] === ")" && (e++, t[e] === ";" && e++), !0;
    }
    for (; e < t.length && !Ui(t[e]) && !sn(t[e]) && (!x || t[e] !== ":"); ) e++;
    if (t[e - 1] === ":" && Di.test(t.substring(E, e + 2))) for (; e < t.length && Fi.test(t[e]); ) e++;
    if (e > E) {
      for (; Ke(t, e - 1) && e > 0; ) e--;
      let R = t.slice(E, e);
      return s += R === "undefined" ? "null" : JSON.stringify(R), t[e] === '"' && e++, !0;
    }
  }
  function et() {
    if (t[e] === "/") {
      let x = e;
      for (e++; e < t.length && (t[e] !== "/" || t[e - 1] === "\\"); ) e++;
      return e++, s += '"'.concat(t.substring(x, e), '"'), !0;
    }
  }
  function Y(x) {
    let E = x;
    for (; E > 0 && Ke(t, E); ) E--;
    return E;
  }
  function W() {
    return e >= t.length || Js(t[e]) || Ke(t, e);
  }
  function O(x) {
    s += "".concat(t.slice(x, e), "0");
  }
  function V(x) {
    throw new Qe("Invalid character ".concat(JSON.stringify(x)), e);
  }
  function q() {
    throw new Qe("Unexpected character ".concat(JSON.stringify(t[e])), e);
  }
  function S() {
    throw new Qe("Unexpected end of json string", t.length);
  }
  function T() {
    throw new Qe("Object key expected", e);
  }
  function w() {
    throw new Qe("Colon expected", e);
  }
  function C() {
    let x = t.slice(e, e + 6);
    throw new Qe('Invalid unicode character "'.concat(x, '"'), e);
  }
}
function Nd(t, e) {
  return t[e] === "*" && t[e + 1] === "/";
}
function Dd(t) {
  if (!t) return null;
  let e = t.trim();
  e = e.replace(/^```(?:json)?\s*\n?/i, "").replace(/\n?```\s*$/i, "");
  try {
    return JSON.parse(e);
  } catch {
  }
  try {
    const n = Hi(e);
    return JSON.parse(n);
  } catch {
  }
  const s = Fd(e);
  if (s)
    try {
      return JSON.parse(s);
    } catch {
      try {
        return JSON.parse(Hi(s));
      } catch {
      }
    }
  return null;
}
function Fd(t) {
  let e = 0, s = -1, n = !1, o = !1;
  for (let i = 0; i < t.length; i++) {
    const r = t[i];
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
        e === 0 && (s = i), e++;
      else if (r === "}" && (e--, e === 0 && s >= 0))
        return t.slice(s, i + 1);
    }
  }
  return null;
}
class Ud {
  hasST() {
    return typeof SillyTavern < "u" && typeof SillyTavern.getContext == "function";
  }
  ctx() {
    return SillyTavern.getContext();
  }
  // ===== extensionSettings =====
  getSettings() {
    if (this.hasST())
      return this.ctx().extensionSettings[be] ?? null;
    const e = localStorage.getItem(this.settingsKey());
    if (e === null) return null;
    try {
      return JSON.parse(e);
    } catch {
      return null;
    }
  }
  setSettings(e) {
    if (this.hasST()) {
      const s = this.ctx();
      s.extensionSettings[be] = e, s.saveSettingsDebounced();
      return;
    }
    localStorage.setItem(this.settingsKey(), JSON.stringify(e));
  }
  // ===== playlist data (separate key in extensionSettings) =====
  getPlaylistData() {
    if (this.hasST())
      return this.ctx().extensionSettings[`${be}-playlist`] ?? null;
    const e = localStorage.getItem(this.playlistKey());
    if (e === null) return null;
    try {
      return JSON.parse(e);
    } catch {
      return null;
    }
  }
  setPlaylistData(e) {
    if (this.hasST()) {
      const s = this.ctx();
      s.extensionSettings[`${be}-playlist`] = e, s.saveSettingsDebounced();
      return;
    }
    localStorage.setItem(this.playlistKey(), JSON.stringify(e));
  }
  // ===== chatMetadata =====
  getMetadata(e) {
    return this.hasST() ? this.ctx().chatMetadata[e] ?? null : null;
  }
  setMetadata(e, s) {
    if (this.hasST()) {
      const n = this.ctx(), o = n.chatMetadata;
      o[e] = s, n.saveMetadata();
      return;
    }
  }
  // ----- key helpers -----
  settingsKey() {
    return `${be}__settings`;
  }
  playlistKey() {
    return `${be}__playlist`;
  }
}
function Bd() {
  return new Ud();
}
const be = "st-little-player", Fo = "stmp_bgm_history", Gi = 50;
function _l() {
  const e = gt().storage;
  if (!e) return [];
  const s = e.getMetadata(Fo);
  return Array.isArray(s) ? s : [];
}
function Uo(t, e, s) {
  const n = _l();
  n.push({ song: t, artist: e, messageId: s, playedAt: Date.now() }), n.length > Gi && n.splice(0, n.length - Gi);
  const i = gt().storage;
  i && i.setMetadata(Fo, n);
}
function bl(t) {
  return _l().slice(-5).reverse().map((s) => `${s.song}${s.artist ? " - " + s.artist : ""}`);
}
function wl(t) {
  let e = t;
  try {
    const s = Tt(), n = s.currentTrack?.name ?? "", o = s.currentTrack?.artist ?? "", i = String(s.isPlaying), r = String(!!s.currentTrack), l = bl(5).join(", ");
    e = e.replace(/\{\{xiaoyueCurrentSong\}\}/gi, n).replace(/\{\{xiaoyueCurrentArtist\}\}/gi, o ? " - " + o : "").replace(/\{\{xiaoyueIsPlaying\}\}/gi, i).replace(/\{\{xiaoyueHasTrack\}\}/gi, r).replace(/\{\{xiaoyueRecentPlayed\}\}/gi, l);
  } catch {
  }
  return e;
}
const mn = "<!--XY_BGM_START-->", bo = "<!--XY_BGM_END-->", jd = `You need to manage background music for a roleplay chat session. You have access to tools for searching and playing music.

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
- When uncertain whether to change, keep the current track.`, Vd = "## Conversation", Hd = "Analyze the above conversation and manage background music using the available tools.", xl = `Background music control is needed for this roleplay session. After writing your narrative, append a BGM marker at the end of your response.

## Output Format (must follow strictly)

After your narrative, append exactly:
${mn}
{"song":"song name","artist":"artist name","action":"play"}
${bo}

For "keep" (no change needed), omit song and artist:
${mn}
{"action":"keep"}
${bo}

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
- Recently played: {{xiaoyueRecentPlayed}}`, Gd = `Background music control is available for this roleplay session.

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
- Recently played: {{xiaoyueRecentPlayed}}`, yn = "search_music", Sl = "Search a music platform for songs by keyword. Returns up to 5 matches with IDs, names, artists, and durations.", Tl = "Search keyword — song name, artist name, or both.", vn = "play_music", Cl = "Play a song by its search result ID. The ID must come from a prior search_music result. Returns playback status.", Al = "The ID from a search_music result entry.", _n = "stop_music", kl = "Stop the currently playing music. Use only when the scene explicitly calls for silence.", bn = "get_current_track", El = "Get information about the currently playing track, including song name, artist, and playback status.", Wd = "播放音乐", Kd = "播放音乐: {song}{artist}", zd = "停止音乐", Yd = "停止音乐", Ml = (t) => t.length === 0 ? "No results found. Try different keywords." : JSON.stringify(t.map((e) => ({
  id: e.id,
  name: e.name,
  artist: e.artist,
  ...e.duration ? { duration: e.duration } : {}
}))), Pl = "Missing required parameter: keyword", Il = 'No results found for: "{keyword}". Try different keywords.', Rl = "Missing required parameter: result_id", Ol = 'Invalid result_id: "{id}". This ID does not match any prior search result. Call search_music first.', Ll = "Now playing: {name}{artist}", $l = "Music stopped.", Nl = "No music is currently playing.", Dl = (t, e, s) => JSON.stringify({ song: t, artist: e, is_playing: s }), Fl = "No track is currently loaded.";
function Jd() {
  return jd;
}
function qd(t) {
  const e = [];
  return e.push(Vd), e.push(t), e.push(""), e.push(Hd), e.join(`
`);
}
function Xd(t, e) {
  return wl(t && e ? e : xl);
}
function Zd() {
  return wl(Gd);
}
const Qd = /<!--XY_BGM_START-->[\s\S]*?<!--XY_BGM_END-->/g;
class tp {
  constructor() {
    this.interceptor = null, this.onGenerationEndedBound = (e) => {
      this.onGenerationEnded(e);
    };
  }
  init() {
    this.interceptor = (s, n, o, i) => {
      const l = SillyTavern.getContext().extensionSettings["st-little-player"];
      if (!l || l.aiMode !== "together") return;
      const a = gt(), c = Xd(
        a.settings.togetherCustomPromptEnabled,
        a.settings.togetherCustomPrompt
      ), h = (l.togetherPromptRole || "system") === "system";
      s.splice(Math.max(0, s.length - 1), 0, {
        is_user: !h,
        is_system: h,
        name: "晓乐",
        mes: c,
        extra: { isSmallSys: h }
      });
    }, globalThis.xiaoyueInterceptor = this.interceptor;
    const e = SillyTavern.getContext();
    e.eventSource.on(e.event_types.GENERATION_ENDED, this.onGenerationEndedBound);
  }
  destroy() {
    const e = SillyTavern.getContext();
    e.eventSource.removeListener(e.event_types.GENERATION_ENDED, this.onGenerationEndedBound), delete globalThis.xiaoyueInterceptor, this.interceptor = null;
  }
  async onGenerationEnded(e) {
    try {
      const s = SillyTavern.getContext(), n = e > 0 ? e - 1 : 0, o = s.chat[n];
      if (!o) {
        console.log("[晓乐] Together: GENERATION_ENDED but msg not found", { messageId: e, actualId: n, chatLen: s.chat.length });
        return;
      }
      const i = o.mes ?? "", r = i.indexOf(mn);
      if (r === -1) return;
      console.log("[晓乐] Together: marker found in message", n);
      const l = i.indexOf(bo, r);
      if (l === -1) {
        console.warn("[晓乐] Together: MARKER_END not found, marker may be truncated");
        return;
      }
      const a = i.slice(r + mn.length, l).trim();
      console.log("[晓乐] Together: extracted marker content:", a);
      const c = Dd(a);
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
        const f = gt(), _ = await Je(f.settings.providers).searchAll(c.artist ? `${c.song} ${c.artist}` : c.song);
        _.length > 0 ? (Wt().addFromAi(_[0], !0), Uo(c.song, c.artist, n), console.log("[晓乐] Together: playing:", _[0].name, "-", _[0].artist), typeof toastr < "u" && toastr.success(m("AI selected:") + " " + c.song)) : (console.warn("[晓乐] Together: track not found:", c.song), typeof toastr < "u" && toastr.warning(m("Cannot play") + ": " + c.song));
      }
      this.cleanupMarker(n, o);
    } catch (s) {
      console.error("[晓乐] Together: onGenerationEnded error:", s);
    }
  }
  cleanupMarker(e, s) {
    s.mes = (s.mes ?? "").replace(Qd, "").trim();
    const n = SillyTavern.getContext();
    typeof n.updateMessageBlock == "function" && n.updateMessageBlock(e, s);
  }
}
let qs = null;
async function ep() {
  if (qs) return qs;
  try {
    const t = await Function("return import")()(
      /* @vite-ignore */
      "/scripts/extensions/regex/engine.js"
    );
    if (t?.getRegexedString && t?.regex_placement)
      return qs = t, qs;
  } catch {
  }
  return null;
}
const sp = /<!--XY_BGM_START-->[\s\S]*?<!--XY_BGM_END-->/g;
function np(t) {
  return t.replace(sp, "").trim();
}
async function op(t) {
  try {
    const e = SillyTavern.getContext(), s = e.chat;
    if (!s || s.length === 0) return "";
    const n = await ep(), o = s.slice(-t), i = [];
    for (const r of o) {
      const l = r.is_user ? e.name1 : r.name || e.name2 || "Character";
      let a = r.mes ?? "";
      if (n) {
        const c = r.is_user ? n.regex_placement.USER_INPUT : n.regex_placement.AI_OUTPUT;
        try {
          a = n.getRegexedString(a, c, { isPrompt: !0 });
        } catch {
        }
      }
      a = np(a), a.trim() && i.push(`${l}: ${a}`);
    }
    return i.join(`

`);
  } catch {
    return "";
  }
}
const Wi = 4, ip = [
  {
    type: "function",
    function: {
      name: yn,
      description: Sl,
      parameters: {
        type: "object",
        properties: {
          keyword: { type: "string", description: Tl }
        },
        required: ["keyword"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: vn,
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
      name: _n,
      description: kl,
      parameters: {
        type: "object",
        properties: {}
      }
    }
  },
  {
    type: "function",
    function: {
      name: bn,
      description: El,
      parameters: {
        type: "object",
        properties: {}
      }
    }
  }
];
async function rp() {
  const t = gt().settings, e = t.aiApiUrl.replace(/\/$/, "") + "/models", s = await fetch(e, {
    method: "GET",
    headers: {
      ...t.aiApiKey ? { Authorization: `Bearer ${t.aiApiKey}` } : {}
    }
  });
  if (!s.ok) {
    const i = await s.text().catch(() => "");
    throw new Error(`API ${s.status}: ${i}`);
  }
  return ((await s.json())?.data ?? []).map((i) => i.id).filter(Boolean).sort();
}
async function lp(t) {
  const e = gt().settings, s = e.aiApiUrl.replace(/\/$/, "") + "/chat/completions", n = {
    model: e.aiModel,
    messages: t,
    max_tokens: 4096,
    stream: !1,
    temperature: 0.7,
    tools: ip,
    tool_choice: "auto",
    thinking: { type: "disabled" }
  };
  console.log("[晓乐] BGM API request:", { model: e.aiModel, messageCount: t.length });
  const o = await fetch(s, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...e.aiApiKey ? { Authorization: `Bearer ${e.aiApiKey}` } : {}
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
async function ap(t, e, s) {
  switch (t) {
    case yn: {
      const n = e.keyword;
      if (!n) return Pl;
      const o = gt(), r = await Je(o.settings.providers).searchAll(n);
      if (r.length === 0)
        return Il.replace("{keyword}", n);
      const l = r.slice(0, 5);
      for (const c of l)
        s.set(c.id, c);
      const a = Ml(
        l.map((c) => ({
          id: c.id,
          name: c.name,
          artist: c.artist,
          duration: c.duration
        }))
      );
      return console.log("[晓乐] search_music results:", l.length, "items for:", n), a;
    }
    case vn: {
      const n = e.result_id;
      if (!n) return Rl;
      const o = s.get(n);
      return o ? (Wt().addFromAi(o, !0), Uo(o.name, o.artist), typeof toastr < "u" && toastr.success(`${m("AI selected:")} ${o.name}`), console.log("[晓乐] play_music success:", o.name, "-", o.artist), Ll.replace("{name}", o.name).replace("{artist}", o.artist ? " - " + o.artist : "")) : Ol.replace("{id}", n);
    }
    case _n: {
      const n = Tt();
      return n.currentTrack ? (n.pause(), console.log("[晓乐] stop_music success"), $l) : Nl;
    }
    case bn: {
      const n = Tt();
      if (!n.currentTrack) return Fl;
      const o = Dl(
        n.currentTrack.name,
        n.currentTrack.artist ?? null,
        n.isPlaying
      );
      return console.log("[晓乐] get_current_track:", o), o;
    }
    default:
      return `Unknown tool: ${t}`;
  }
}
async function cp(t, e) {
  const s = [
    { role: "system", content: t },
    { role: "user", content: e }
  ], n = /* @__PURE__ */ new Map();
  for (let o = 0; o < Wi; o++) {
    console.log(`[晓乐] BGM agent loop iteration ${o + 1}/${Wi}`);
    const i = await lp(s), r = {
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
      const f = await ap(a, c, n);
      console.log("[晓乐] Tool result:", f), s.push({
        role: "tool",
        content: f,
        tool_call_id: l.id
      });
    }
  }
  console.warn("[晓乐] BGM agent loop reached max iterations");
}
const Ki = "xiaoyue_fc", Xs = /* @__PURE__ */ new Map();
class zi {
  constructor() {
    this.isAnalyzing = !1, this.lastTriggerTime = 0, this.destroyed = !1, this.onGenerationStarted = () => {
      Xs.clear();
    }, this.onCharacterMessageRendered = (e) => {
      const s = gt();
      if (!s.settings.aiAutoTrigger) return;
      const n = SillyTavern.getContext();
      (e <= 0 || n.chat.filter((i) => i.is_user).length === 0) && !s.settings.aiTriggerOnGreeting || this.triggerAgent(e);
    }, this.onMessageSwiped = (e) => {
      const s = gt();
      if (!s.settings.aiAutoTrigger) return;
      const n = Math.floor(s.settings.aiCooldownMs / 2);
      Date.now() - this.lastTriggerTime < n || this.triggerAgent(e, !0);
    };
  }
  init() {
    gt().settings.aiUseCustomApi ? this.initCustomApiPath() : this.initMainApiPath();
  }
  // ===== Main API path: register ST function tools =====
  initMainApiPath() {
    const e = SillyTavern.getContext();
    if (!e.isToolCallingSupported()) {
      console.warn("[晓乐] Function tool calling is not supported by the current API. Switch to custom API or use Together mode.");
      return;
    }
    e.eventSource.on(e.event_types.GENERATION_STARTED, this.onGenerationStarted);
    const s = () => {
      const o = gt();
      return o.settings.aiMode === "function_call" && !o.settings.aiUseCustomApi;
    };
    e.registerFunctionTool({
      name: yn,
      displayName: "搜索音乐",
      description: Sl,
      parameters: {
        type: "object",
        properties: {
          keyword: { type: "string", description: Tl }
        },
        required: ["keyword"]
      },
      action: async ({ keyword: o }) => {
        if (!o) return Pl;
        const i = gt(), l = await Je(i.settings.providers).searchAll(o);
        if (l.length === 0)
          return Il.replace("{keyword}", o);
        const a = l.slice(0, 5);
        for (const f of a)
          Xs.set(f.id, f);
        const c = Ml(
          a.map((f) => ({
            id: f.id,
            name: f.name,
            artist: f.artist,
            duration: f.duration
          }))
        );
        return console.log("[晓乐] search_music results:", a.length, "items for:", o), c;
      },
      formatMessage: ({ keyword: o }) => `搜索音乐: ${o ?? ""}`,
      shouldRegister: s,
      stealth: !0
    }), e.registerFunctionTool({
      name: vn,
      displayName: Wd,
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
        const i = Xs.get(o);
        return i ? (Wt().addFromAi(i, !0), Uo(i.name, i.artist), typeof toastr < "u" && toastr.success(`${m("AI selected:")} ${i.name}`), console.log("[晓乐] play_music success:", i.name, "-", i.artist), Ll.replace("{name}", i.name).replace("{artist}", i.artist ? " - " + i.artist : "")) : Ol.replace("{id}", o);
      },
      formatMessage: ({ result_id: o }) => Kd.replace("{song}", o ?? "").replace("{artist}", ""),
      shouldRegister: s,
      stealth: !0
    }), e.registerFunctionTool({
      name: _n,
      displayName: zd,
      description: kl,
      parameters: {
        type: "object",
        properties: {}
      },
      action: async () => {
        const o = Tt();
        return o.currentTrack ? (o.pause(), $l) : Nl;
      },
      formatMessage: () => Yd,
      shouldRegister: s,
      stealth: !0
    }), e.registerFunctionTool({
      name: bn,
      displayName: "当前播放",
      description: El,
      parameters: {
        type: "object",
        properties: {}
      },
      action: async () => {
        const o = Tt();
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
    const n = Zd();
    e.setExtensionPrompt(Ki, n, 1, 0, !1, 0), console.log("[晓乐] Function Call (main API): 4 tools registered + aux prompt set");
  }
  // ===== Custom API path: event-driven agent loop =====
  initCustomApiPath() {
    const e = SillyTavern.getContext();
    e.eventSource.on(
      e.event_types.CHARACTER_MESSAGE_RENDERED,
      this.onCharacterMessageRendered
    ), e.eventSource.on(
      e.event_types.MESSAGE_SWIPED,
      this.onMessageSwiped
    ), console.log("[晓乐] Function Call (custom API): event listeners registered");
  }
  async manualTrigger() {
    if (this.destroyed || this.isAnalyzing) return;
    const s = SillyTavern.getContext().chat, n = s && s.length > 0 ? s.length - 1 : void 0;
    await this.triggerAgent(n, !0);
  }
  async triggerAgent(e, s = !1) {
    if (this.isAnalyzing) return;
    const n = gt();
    if (!(!s && Date.now() - this.lastTriggerTime < n.settings.aiCooldownMs || SillyTavern.getContext().generationInProgress)) {
      if (!n.settings.aiApiUrl || !n.settings.aiModel) {
        console.warn("[晓乐] Custom API path requires API URL + Model");
        return;
      }
      this.isAnalyzing = !0, this.lastTriggerTime = Date.now(), console.log("[晓乐] BGM agent loop started");
      try {
        const i = await op(n.settings.aiContextMessages), r = Jd(), l = qd(i);
        await cp(r, l);
      } catch (i) {
        console.error("[晓乐] AI agent loop failed:", i), typeof toastr < "u" && toastr.error(m("AI recommendation failed"));
      } finally {
        this.isAnalyzing = !1;
      }
    }
  }
  destroy() {
    this.destroyed = !0;
    const e = SillyTavern.getContext();
    gt().settings.aiUseCustomApi ? (e.eventSource.removeListener(
      e.event_types.CHARACTER_MESSAGE_RENDERED,
      this.onCharacterMessageRendered
    ), e.eventSource.removeListener(
      e.event_types.MESSAGE_SWIPED,
      this.onMessageSwiped
    )) : (e.eventSource.removeListener(e.event_types.GENERATION_STARTED, this.onGenerationStarted), e.unregisterFunctionTool(yn), e.unregisterFunctionTool(vn), e.unregisterFunctionTool(_n), e.unregisterFunctionTool(bn), e.setExtensionPrompt(Ki, "", -1, 0), Xs.clear());
  }
}
let wo = null;
class up {
  constructor() {
    this.together = null, this.functionCall = null, this.currentMode = "off";
  }
  init() {
    this.applyMode(gt().settings.aiMode), wo = this;
  }
  setMode(e) {
    e !== this.currentMode && (this.destroyCurrent(), this.applyMode(e));
  }
  resetFunctionCall() {
    this.functionCall && (this.functionCall.destroy(), this.functionCall = new zi(), this.functionCall.init());
  }
  applyMode(e) {
    this.currentMode = e;
    try {
      switch (e) {
        case "function_call":
          this.functionCall = new zi(), this.functionCall.init();
          break;
        case "together":
          this.together = new tp(), this.together.init();
          break;
        case "off":
        default:
          break;
      }
    } catch (s) {
      console.error("[晓乐] BGM controller: failed to init mode", e, s);
    }
  }
  destroyCurrent() {
    this.together && (this.together.destroy(), this.together = null), this.functionCall && (this.functionCall.destroy(), this.functionCall = null);
  }
  async manualTrigger() {
    this.functionCall && await this.functionCall.manualTrigger();
  }
  destroy() {
    this.destroyCurrent(), this.currentMode = "off", wo = null;
  }
}
function nn() {
  return wo;
}
const fp = {
  key: 0,
  class: "stmp-switch-label"
}, dp = { class: "stmp-switch" }, pp = ["checked", "disabled"], hp = /* @__PURE__ */ Ce({
  __name: "ToggleSwitch",
  props: {
    modelValue: { type: Boolean },
    label: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const s = t, n = e, o = /* @__PURE__ */ ft(null);
    function i() {
      const r = s.modelValue;
      n("update:modelValue", !r), Rt(() => {
        o.value && s.modelValue === r && o.value.checked !== r && (o.value.checked = r);
      });
    }
    return (r, l) => (P(), N("label", {
      class: at(["stmp-switch-row", { "stmp-switch-disabled": t.disabled }])
    }, [
      t.label ? (P(), N("span", fp, D(t.label), 1)) : _t("", !0),
      u("span", dp, [
        u("input", {
          ref_key: "inputRef",
          ref: o,
          type: "checkbox",
          checked: t.modelValue,
          disabled: t.disabled,
          onChange: i
        }, null, 40, pp),
        l[0] || (l[0] = u("span", { class: "stmp-switch-track" }, [
          u("span", { class: "stmp-switch-thumb" })
        ], -1))
      ])
    ], 2));
  }
}), Me = /* @__PURE__ */ ke(hp, [["__scopeId", "data-v-529649ca"]]), gp = ["value", "placeholder", "readonly"], mp = ["onMousedown", "onMouseenter"], yp = /* @__PURE__ */ Ce({
  __name: "ComboBox",
  props: {
    modelValue: {},
    options: {},
    placeholder: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const s = t, n = e, o = /* @__PURE__ */ ft(null), i = /* @__PURE__ */ ft(null), r = /* @__PURE__ */ ft(!1), l = /* @__PURE__ */ ft(-1), a = /* @__PURE__ */ ft({}), c = Pt(() => s.options), f = Pt(() => s.options.length > 0);
    function h() {
      const U = i.value;
      if (!U) return;
      const et = U.getBoundingClientRect();
      a.value = {
        position: "fixed",
        left: `${et.left}px`,
        top: `${et.bottom + 2}px`,
        width: `${et.width}px`,
        zIndex: "10000"
      };
    }
    function _() {
      s.options.length !== 0 && (r.value = !0, l.value = -1, Rt(h));
    }
    function y() {
      r.value = !1, l.value = -1;
    }
    function k() {
      r.value ? y() : _();
    }
    function b(U) {
      n("update:modelValue", U), y();
    }
    function G(U) {
      n("update:modelValue", U.target.value), !r.value && s.options.length > 0 && (r.value = !0), l.value = -1, Rt(h);
    }
    function J(U) {
      if (!r.value) return;
      const et = c.value;
      U.key === "ArrowDown" ? (U.preventDefault(), l.value = Math.min(l.value + 1, et.length - 1)) : U.key === "ArrowUp" ? (U.preventDefault(), l.value = Math.max(l.value - 1, 0)) : U.key === "Enter" ? l.value >= 0 && l.value < et.length ? (U.preventDefault(), b(et[l.value])) : y() : U.key === "Escape" && (U.preventDefault(), y());
    }
    function K(U) {
      const et = U.target;
      o.value?.contains(et) || document.getElementById("stmp-combobox-dropdown")?.contains(et) || y();
    }
    function X() {
      r.value && y();
    }
    function j() {
      r.value && Rt(h);
    }
    return Us(() => {
      document.addEventListener("mousedown", K, !0), window.addEventListener("scroll", X, !0), window.addEventListener("resize", j);
    }), Bs(() => {
      document.removeEventListener("mousedown", K, !0), window.removeEventListener("scroll", X, !0), window.removeEventListener("resize", j);
    }), Bt(() => s.modelValue, (U) => {
      i.value && i.value.value !== U && (i.value.value = U);
    }), (U, et) => (P(), N("div", {
      ref_key: "rootRef",
      ref: o,
      class: at(["stmp-combobox", { "has-options": t.options.length > 0 }])
    }, [
      u("input", {
        ref_key: "inputRef",
        ref: i,
        class: "text_pole",
        type: "text",
        value: t.modelValue,
        placeholder: t.placeholder,
        readonly: f.value,
        autocomplete: "off",
        onFocus: _,
        onInput: G,
        onKeydown: J
      }, null, 40, gp),
      t.options.length > 0 ? (P(), N("i", {
        key: 0,
        class: at(["fa-solid fa-chevron-down stmp-combobox-arrow", { rotated: r.value }]),
        onMousedown: Oe(k, ["prevent"])
      }, null, 34)) : _t("", !0),
      (P(), te(Rr, { to: "body" }, [
        r.value && c.value.length > 0 ? (P(), N("div", {
          key: 0,
          id: "stmp-combobox-dropdown",
          class: "stmp-combobox-dropdown",
          style: Le(a.value)
        }, [
          (P(!0), N(it, null, jt(c.value, (Y, W) => (P(), N("div", {
            key: Y,
            class: at(["stmp-combobox-option", { active: W === l.value }]),
            onMousedown: Oe((O) => b(Y), ["prevent"]),
            onMouseenter: (O) => l.value = W
          }, D(Y), 43, mp))), 128))
        ], 4)) : _t("", !0)
      ]))
    ], 2));
  }
}), vp = /* @__PURE__ */ ke(yp, [["__scopeId", "data-v-804fa027"]]), _p = { class: "stmp-settings" }, bp = { class: "stmp-tab-bar" }, wp = ["onClick"], xp = { class: "stmp-tab-content" }, Sp = { class: "stmp-tab-panel" }, Tp = { class: "stmp-row" }, Cp = { class: "stmp-row-info" }, Ap = { class: "stmp-row-title" }, kp = { class: "stmp-row-desc" }, Ep = { class: "stmp-chips" }, Mp = ["onClick"], Pp = {
  key: 0,
  class: "stmp-row"
}, Ip = { class: "stmp-row-info" }, Rp = { class: "stmp-row-title" }, Op = { class: "stmp-row-desc" }, Lp = { class: "stmp-chips" }, $p = ["onClick"], Np = {
  key: 1,
  class: "stmp-row"
}, Dp = { class: "stmp-row-info" }, Fp = { class: "stmp-row-title" }, Up = { class: "stmp-row-desc" }, Bp = {
  key: 2,
  class: "stmp-row"
}, jp = { class: "stmp-row-info" }, Vp = { class: "stmp-row-title" }, Hp = { class: "stmp-row-desc" }, Gp = {
  key: 3,
  class: "stmp-row"
}, Wp = { class: "stmp-row-info" }, Kp = { class: "stmp-row-title" }, zp = { class: "stmp-slider-wrap" }, Yp = ["value"], Jp = { class: "stmp-slider-val" }, qp = { class: "stmp-tab-panel" }, Xp = { class: "stmp-row" }, Zp = { class: "stmp-row-info" }, Qp = { class: "stmp-row-title" }, th = { class: "stmp-slider-wrap" }, eh = ["value"], sh = { class: "stmp-slider-val" }, nh = { class: "stmp-row" }, oh = { class: "stmp-row-info" }, ih = { class: "stmp-row-title" }, rh = { class: "stmp-chips" }, lh = ["onClick"], ah = { class: "stmp-row" }, ch = { class: "stmp-row-info" }, uh = { class: "stmp-row-title" }, fh = { class: "stmp-row-desc" }, dh = {
  key: 0,
  class: "stmp-provider-fields"
}, ph = ["onUpdate:modelValue", "placeholder"], hh = ["onUpdate:modelValue", "placeholder"], gh = { class: "stmp-row" }, mh = { class: "stmp-row-info" }, yh = { class: "stmp-row-title" }, vh = { class: "stmp-row-desc" }, _h = { class: "stmp-row" }, bh = { class: "stmp-row-info" }, wh = { class: "stmp-row-title" }, xh = { class: "stmp-row-desc" }, Sh = { class: "stmp-tab-panel" }, Th = { class: "stmp-row" }, Ch = { class: "stmp-row-info" }, Ah = { class: "stmp-row-title" }, kh = { class: "stmp-row-desc" }, Eh = { class: "stmp-row" }, Mh = { class: "stmp-row-info" }, Ph = { class: "stmp-row-title" }, Ih = { class: "stmp-row-desc" }, Rh = { class: "stmp-chips" }, Oh = ["onClick"], Lh = { class: "stmp-row" }, $h = { class: "stmp-row-info" }, Nh = { class: "stmp-row-title" }, Dh = { class: "stmp-row-desc" }, Fh = { class: "stmp-row" }, Uh = { class: "stmp-row-info" }, Bh = { class: "stmp-row-title" }, jh = { class: "stmp-row-desc" }, Vh = ["value"], Hh = { class: "stmp-row" }, Gh = { class: "stmp-row-info" }, Wh = { class: "stmp-row-title" }, Kh = { class: "stmp-row-desc" }, zh = ["value"], Yh = { class: "stmp-row" }, Jh = { class: "stmp-row-info" }, qh = { class: "stmp-row-title" }, Xh = { class: "stmp-row-desc" }, Zh = { class: "stmp-model-wrap" }, Qh = ["title"], tg = { class: "stmp-row" }, eg = { class: "stmp-row-info" }, sg = { class: "stmp-row-title" }, ng = { class: "stmp-row-desc" }, og = { class: "stmp-slider-wrap" }, ig = ["value"], rg = { class: "stmp-slider-val" }, lg = { class: "stmp-row" }, ag = { class: "stmp-row-info" }, cg = { class: "stmp-row-title" }, ug = { class: "stmp-row-desc" }, fg = {
  key: 0,
  class: "stmp-row"
}, dg = { class: "stmp-row-info" }, pg = { class: "stmp-row-title" }, hg = { class: "stmp-row-desc" }, gg = { class: "stmp-row" }, mg = { class: "stmp-row-info" }, yg = { class: "stmp-row-title" }, vg = { class: "stmp-row-desc" }, _g = { class: "stmp-chips" }, bg = ["onClick"], wg = { class: "stmp-row" }, xg = { class: "stmp-row-info" }, Sg = { class: "stmp-row-title" }, Tg = { class: "stmp-row-desc" }, Cg = {
  key: 0,
  class: "stmp-row"
}, Ag = { class: "stmp-row-info" }, kg = { class: "stmp-row-title" }, Eg = { class: "stmp-row-desc" }, Mg = ["title"], Pg = { class: "stmp-tab-panel" }, Ig = { class: "stmp-row" }, Rg = { class: "stmp-row-info" }, Og = { class: "stmp-row-title" }, Lg = { class: "stmp-row-desc" }, $g = { class: "stmp-row" }, Ng = { class: "stmp-row-info" }, Dg = { class: "stmp-row-title" }, Fg = { class: "stmp-row-desc" }, Ug = { class: "stmp-about" }, Bg = { class: "stmp-about-version" }, jg = { class: "stmp-about-desc" }, Vg = "https://github.com/vvb7456/ST-little-player", Hg = /* @__PURE__ */ Ce({
  __name: "SettingsView",
  setup(t) {
    const e = gt(), s = Wt(), n = /* @__PURE__ */ ft("appearance"), o = [
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
    ], l = () => e.settings.widgetMode === "dock" || e.settings.widgetMode === "drag";
    function a(T) {
      const w = T.target;
      e.setOpacity(Number(w.value));
    }
    const c = [
      { value: "list", label: m("List Loop"), icon: "fa-solid fa-repeat" },
      { value: "random", label: m("Random"), icon: "fa-solid fa-shuffle" },
      { value: "single", label: m("Single Loop"), icon: "fa-solid fa-repeat" }
    ];
    function f(T) {
      const w = T.target;
      e.setVolume(Number(w.value));
    }
    const h = {
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
    function k(T) {
      e.setAiMode(T), nn()?.setMode(T);
    }
    function b(T) {
      e.setAiUseCustomApi(T), nn()?.resetFunctionCall();
    }
    function G(T) {
      const w = T ? "function_call" : "off";
      e.setAiMode(w), nn()?.setMode(w);
    }
    function J(T) {
      const w = T.target;
      e.setAiContextMessages(Number(w.value));
    }
    const K = /* @__PURE__ */ ft([]), X = /* @__PURE__ */ ft(!1);
    async function j() {
      if (X.value) return;
      if (!e.settings.aiApiUrl) {
        typeof toastr < "u" && toastr.warning(m("Please fill API URL"));
        return;
      }
      X.value = !0;
      try {
        const w = await rp();
        K.value = w, w.length === 0 ? typeof toastr < "u" && toastr.info(m("No models returned by endpoint")) : typeof toastr < "u" && toastr.success(`${w.length} ${m("models found")}`);
      } catch (w) {
        console.error("[晓乐] Failed to fetch models:", w), typeof toastr < "u" && toastr.error(m("Failed to fetch models"));
      } finally {
        X.value = !1;
      }
    }
    function U(T) {
      const w = e.settings.providers.find((C) => C.id === T);
      if (w) {
        if (!w.enabled && T === "local") {
          const C = SillyTavern.getContext();
          if (C?.callGenericPopup && C?.POPUP_TYPE) {
            C.callGenericPopup(
              m("Upload warning text"),
              C.POPUP_TYPE.CONFIRM,
              "",
              { okButton: m("Confirm"), cancelButton: m("Cancel") }
            ).then((x) => {
              x === 1 && (w.enabled = !0, e.save());
            });
            return;
          }
        }
        w.enabled = !w.enabled, e.save();
      }
    }
    const et = ["aiApiUrl", "aiApiKey", "aiModel"], Y = () => {
      const T = {};
      for (const [E, R] of Object.entries(e.settings))
        et.includes(E) || (T[E] = R);
      const w = new Blob([JSON.stringify(T, null, 2)], { type: "application/json" }), C = URL.createObjectURL(w), x = document.createElement("a");
      x.href = C, x.download = "st-little-player-settings.json", x.click(), URL.revokeObjectURL(C);
    }, W = () => {
      const T = document.createElement("input");
      T.type = "file", T.accept = ".json", T.onchange = async (w) => {
        const C = w.target.files?.[0];
        if (!C) return;
        const x = await C.text();
        try {
          const E = JSON.parse(x);
          if (typeof E != "object" || E === null) throw new Error("Not an object");
          const R = ["volume", "playMode", "position", "widgetMode", "dockAlign", "providers", "customOpacity", "opacity", "aiMode", "aiUseCustomApi", "aiContextMessages", "aiAutoTrigger", "aiTriggerOnGreeting", "aiCooldownMs", "togetherPromptRole", "togetherCustomPromptEnabled", "togetherCustomPrompt"], Z = {};
          for (const dt of R)
            dt in E && (Z[dt] = E[dt]);
          if (typeof Z.volume != "number" || Z.volume < 0 || Z.volume > 100)
            throw new Error("Invalid volume");
          if (typeof Z.playMode != "string" || !["list", "random", "single"].includes(Z.playMode))
            throw new Error("Invalid playMode");
          if (Z.providers && !Array.isArray(Z.providers))
            throw new Error("Invalid providers");
          Object.assign(e.settings, Z), e.save(), typeof toastr < "u" && toastr.success(m("Data imported"));
        } catch (E) {
          console.error("Import failed", E), typeof toastr < "u" && toastr.error(m("Import failed") + ": " + (E instanceof Error ? E.message : m("Invalid JSON")));
        }
      }, T.click();
    }, O = "0.1.1-beta", V = () => {
      const T = s.networkList.map((E) => ({
        song: E.song,
        artist: E.artist,
        providerId: E.providerId,
        providerTrackId: E.providerTrackId,
        providerPicId: E.providerPicId
      })), w = new Blob([JSON.stringify(T, null, 2)], { type: "application/json" }), C = URL.createObjectURL(w), x = document.createElement("a");
      x.href = C, x.download = "st-little-player-playlist.json", x.click(), URL.revokeObjectURL(C), typeof toastr < "u" && toastr.success(m("Data exported"));
    }, q = () => {
      const T = document.createElement("input");
      T.type = "file", T.accept = ".json", T.onchange = async (w) => {
        const C = w.target.files?.[0];
        if (!C) return;
        const x = await C.text();
        try {
          const E = JSON.parse(x);
          if (!Array.isArray(E)) throw new Error("Not an array");
          const R = E.filter((Z) => Z && typeof Z.song == "string").map((Z) => ({
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
        } catch (E) {
          console.error("Playlist import failed", E), typeof toastr < "u" && toastr.error(m("Import failed") + ": " + (E instanceof Error ? E.message : m("Invalid JSON")));
        }
      }, T.click();
    };
    async function S() {
      const T = SillyTavern.getContext(), w = e.settings.togetherCustomPrompt || xl, C = ["{{xiaoyueCurrentSong}}", "{{xiaoyueCurrentArtist}}", "{{xiaoyueIsPlaying}}", "{{xiaoyueHasTrack}}", "{{xiaoyueRecentPlayed}}"], x = `<div style="margin-bottom:6px;font-size:0.85em;opacity:0.8">${m("The prompt must contain the markers")} <code class="stmp-macro-hint">&lt;!--XY_BGM_START--&gt;</code> / <code class="stmp-macro-hint">&lt;!--XY_BGM_END--&gt;</code> ${m("for BGM control to work.")}</div>`, E = C.map((mt) => `<code class="stmp-macro-hint">${mt}</code>`).join(" "), R = `<div style="margin-bottom:8px;font-size:0.85em;opacity:0.7">${m("Available macros:")} ${E}</div>`, Z = x + R;
      $("#dialogue_popup_cancel").css("display", "flex"), $("#dialogue_popup_controls .menu_button").css("width", "unset");
      const dt = await T.callPopup(Z, "input", w, { wide: !0, rows: 20, okButton: m("Save") });
      dt !== !1 && e.setTogetherCustomPrompt(String(dt).trim());
    }
    return (T, w) => (P(), N("div", _p, [
      u("div", bp, [
        (P(), N(it, null, jt(o, (C) => u("div", {
          key: C.id,
          class: at(["stmp-tab", { active: n.value === C.id }]),
          onClick: (x) => n.value = C.id
        }, [
          u("i", {
            class: at(C.icon)
          }, null, 2),
          u("span", null, D(C.label), 1)
        ], 10, wp)), 64))
      ]),
      u("div", xp, [
        He(u("div", Sp, [
          u("div", Tp, [
            u("div", Cp, [
              u("div", Ap, D(g(m)("Widget Mode")), 1),
              u("div", kp, D(g(m)("Choose how the player widget is displayed")), 1)
            ]),
            u("div", Ep, [
              (P(), N(it, null, jt(i, (C) => u("div", {
                key: C.value,
                class: at(["stmp-chip", { active: g(e).settings.widgetMode === C.value }]),
                onClick: (x) => g(e).setWidgetMode(C.value)
              }, [
                u("i", {
                  class: at(C.icon)
                }, null, 2),
                u("span", null, D(C.label), 1)
              ], 10, Mp)), 64))
            ])
          ]),
          g(e).settings.widgetMode === "dock" ? (P(), N("div", Pp, [
            u("div", Ip, [
              u("div", Rp, D(g(m)("Dock Alignment")), 1),
              u("div", Op, D(g(m)("Align the docked player to a corner of the screen")), 1)
            ]),
            u("div", Lp, [
              (P(), N(it, null, jt(r, (C) => u("div", {
                key: C.value,
                class: at(["stmp-chip", { active: g(e).settings.dockAlign === C.value }]),
                onClick: (x) => g(e).setDockAlign(C.value)
              }, [
                u("i", {
                  class: at(C.icon)
                }, null, 2),
                u("span", null, D(C.label), 1)
              ], 10, $p)), 64))
            ])
          ])) : _t("", !0),
          g(e).settings.widgetMode === "drag" ? (P(), N("div", Np, [
            u("div", Dp, [
              u("div", Fp, D(g(m)("Show track info in drag mini")), 1),
              u("div", Up, D(g(m)("Show song title and lyrics in the compact drag widget")), 1)
            ]),
            lt(Me, {
              "model-value": g(e).settings.showDragMiniText,
              "onUpdate:modelValue": g(e).setShowDragMiniText
            }, null, 8, ["model-value", "onUpdate:modelValue"])
          ])) : _t("", !0),
          l() ? (P(), N("div", Bp, [
            u("div", jp, [
              u("div", Vp, D(g(m)("Custom opacity")), 1),
              u("div", Hp, D(g(m)("Adjust the player background opacity")), 1)
            ]),
            lt(Me, {
              "model-value": g(e).settings.customOpacity,
              "onUpdate:modelValue": g(e).setCustomOpacity
            }, null, 8, ["model-value", "onUpdate:modelValue"])
          ])) : _t("", !0),
          g(e).settings.customOpacity ? (P(), N("div", Gp, [
            u("div", Wp, [
              u("div", Kp, D(g(m)("Opacity")), 1)
            ]),
            u("div", zp, [
              u("input", {
                type: "range",
                class: "stmp-slider",
                min: "0",
                max: "100",
                value: g(e).settings.opacity,
                onInput: a
              }, null, 40, Yp),
              u("span", Jp, D(g(e).settings.opacity) + "%", 1)
            ])
          ])) : _t("", !0)
        ], 512), [
          [Ys, n.value === "appearance"]
        ]),
        He(u("div", qp, [
          u("div", Xp, [
            u("div", Zp, [
              u("div", Qp, D(g(m)("Default Volume")), 1)
            ]),
            u("div", th, [
              u("input", {
                type: "range",
                class: "stmp-slider",
                min: "0",
                max: "100",
                value: g(e).settings.volume,
                onInput: f
              }, null, 40, eh),
              u("span", sh, D(g(e).settings.volume), 1)
            ])
          ]),
          u("div", nh, [
            u("div", oh, [
              u("div", ih, D(g(m)("Default Play Mode")), 1)
            ]),
            u("div", rh, [
              (P(), N(it, null, jt(c, (C) => u("div", {
                key: C.value,
                class: at(["stmp-chip", { active: g(e).settings.playMode === C.value }]),
                onClick: (x) => g(e).setPlayMode(C.value)
              }, [
                u("i", {
                  class: at(C.icon)
                }, null, 2),
                u("span", null, D(C.label), 1)
              ], 10, lh)), 64))
            ])
          ]),
          (P(!0), N(it, null, jt(g(e).settings.providers, (C) => (P(), N("div", {
            key: C.id
          }, [
            u("div", ah, [
              u("div", ch, [
                u("div", uh, D(h[C.id] || C.id), 1),
                u("div", fh, D(_[C.id]), 1)
              ]),
              lt(Me, {
                "model-value": C.enabled,
                "onUpdate:modelValue": () => U(C.id)
              }, null, 8, ["model-value", "onUpdate:modelValue"])
            ]),
            C.id === "custom" && C.enabled ? (P(), N("div", dh, [
              He(u("input", {
                class: "text_pole",
                "onUpdate:modelValue": (x) => C.config.searchURL = x,
                placeholder: g(m)("Search URL"),
                onChange: w[0] || (w[0] = (x) => g(e).save())
              }, null, 40, ph), [
                [mo, C.config.searchURL]
              ]),
              He(u("input", {
                class: "text_pole",
                "onUpdate:modelValue": (x) => C.config.resolveURL = x,
                placeholder: g(m)("Resolve URL"),
                onChange: w[1] || (w[1] = (x) => g(e).save())
              }, null, 40, hh), [
                [mo, C.config.resolveURL]
              ])
            ])) : _t("", !0)
          ]))), 128)),
          w[10] || (w[10] = u("div", { class: "stmp-separator" }, null, -1)),
          u("div", gh, [
            u("div", mh, [
              u("div", yh, D(g(m)("Export playlist")), 1),
              u("div", vh, D(g(m)("Save network playlist to a JSON file")), 1)
            ]),
            u("div", {
              class: "menu_button menu_button_icon stmp-action-btn",
              onClick: V
            }, [...w[8] || (w[8] = [
              u("i", { class: "fa-solid fa-file-export" }, null, -1)
            ])])
          ]),
          u("div", _h, [
            u("div", bh, [
              u("div", wh, D(g(m)("Import playlist")), 1),
              u("div", xh, D(g(m)("Load network playlist from a JSON file")), 1)
            ]),
            u("div", {
              class: "menu_button menu_button_icon stmp-action-btn",
              onClick: q
            }, [...w[9] || (w[9] = [
              u("i", { class: "fa-solid fa-file-import" }, null, -1)
            ])])
          ])
        ], 512), [
          [Ys, n.value === "playback"]
        ]),
        He(u("div", Sh, [
          u("div", Th, [
            u("div", Ch, [
              u("div", Ah, D(g(m)("AI BGM")), 1),
              u("div", kh, D(g(m)("Enable AI-driven background music selection")), 1)
            ]),
            lt(Me, {
              "model-value": g(e).settings.aiMode !== "off",
              "onUpdate:modelValue": w[2] || (w[2] = (C) => G(C))
            }, null, 8, ["model-value"])
          ]),
          g(e).settings.aiMode !== "off" ? (P(), N(it, { key: 0 }, [
            u("div", Eh, [
              u("div", Mh, [
                u("div", Ph, D(g(m)("AI Mode")), 1),
                u("div", Ih, D(g(m)("Choose how AI selects background music")), 1)
              ]),
              u("div", Rh, [
                (P(), N(it, null, jt(y, (C) => u("div", {
                  key: C.value,
                  class: at(["stmp-chip", { active: g(e).settings.aiMode === C.value }]),
                  onClick: (x) => k(C.value)
                }, [
                  u("i", {
                    class: at(C.icon)
                  }, null, 2),
                  u("span", null, D(C.label), 1)
                ], 10, Oh)), 64))
              ])
            ]),
            g(e).settings.aiMode === "function_call" ? (P(), N(it, { key: 0 }, [
              u("div", Lh, [
                u("div", $h, [
                  u("div", Nh, D(g(m)("Custom API")), 1),
                  u("div", Dh, D(g(m)("Use a separate API endpoint for BGM agent loop instead of main API function calling")), 1)
                ]),
                lt(Me, {
                  "model-value": g(e).settings.aiUseCustomApi,
                  "onUpdate:modelValue": b
                }, null, 8, ["model-value"])
              ]),
              g(e).settings.aiUseCustomApi ? (P(), N(it, { key: 0 }, [
                u("div", Fh, [
                  u("div", Uh, [
                    u("div", Bh, D(g(m)("API URL")), 1),
                    u("div", jh, D(g(m)("OpenAI-compatible endpoint that supports tool calling")), 1)
                  ]),
                  u("input", {
                    class: "text_pole stmp-text-input",
                    value: g(e).settings.aiApiUrl,
                    placeholder: "",
                    onChange: w[3] || (w[3] = (C) => g(e).setAiApiUrl(C.target.value.trim()))
                  }, null, 40, Vh)
                ]),
                u("div", Hh, [
                  u("div", Gh, [
                    u("div", Wh, D(g(m)("API Key")), 1),
                    u("div", Kh, D(g(m)("Bearer token for the custom endpoint")), 1)
                  ]),
                  u("input", {
                    type: "password",
                    class: "text_pole stmp-text-input",
                    value: g(e).settings.aiApiKey,
                    placeholder: "",
                    onChange: w[4] || (w[4] = (C) => g(e).setAiApiKey(C.target.value.trim()))
                  }, null, 40, zh)
                ]),
                u("div", Yh, [
                  u("div", Jh, [
                    u("div", qh, D(g(m)("Model")), 1),
                    u("div", Xh, D(g(m)("Model that supports tool calling")), 1)
                  ]),
                  u("div", Zh, [
                    lt(vp, {
                      "model-value": g(e).settings.aiModel,
                      options: K.value,
                      placeholder: "",
                      "onUpdate:modelValue": w[5] || (w[5] = (C) => g(e).setAiModel(C))
                    }, null, 8, ["model-value", "options"]),
                    u("div", {
                      class: at(["menu_button menu_button_icon stmp-model-fetch", { "stmp-spin": X.value }]),
                      title: g(m)("Connect"),
                      onClick: j
                    }, [...w[11] || (w[11] = [
                      u("i", { class: "fa-solid fa-plug" }, null, -1)
                    ])], 10, Qh)
                  ])
                ]),
                u("div", tg, [
                  u("div", eg, [
                    u("div", sg, D(g(m)("Context Messages")), 1),
                    u("div", ng, D(g(m)("Number of recent chat messages to send to AI")), 1)
                  ]),
                  u("div", og, [
                    u("input", {
                      type: "range",
                      class: "stmp-slider",
                      min: "2",
                      max: "20",
                      value: g(e).settings.aiContextMessages,
                      onInput: J
                    }, null, 40, ig),
                    u("span", rg, D(g(e).settings.aiContextMessages), 1)
                  ])
                ]),
                u("div", lg, [
                  u("div", ag, [
                    u("div", cg, D(g(m)("Auto Trigger")), 1),
                    u("div", ug, D(g(m)("Automatically analyze new messages and select music")), 1)
                  ]),
                  lt(Me, {
                    "model-value": g(e).settings.aiAutoTrigger,
                    "onUpdate:modelValue": w[6] || (w[6] = (C) => g(e).setAiAutoTrigger(C))
                  }, null, 8, ["model-value"])
                ]),
                g(e).settings.aiAutoTrigger ? (P(), N("div", fg, [
                  u("div", dg, [
                    u("div", pg, D(g(m)("Trigger on Greeting")), 1),
                    u("div", hg, D(g(m)("Analyze BGM when loading a character card (first message)")), 1)
                  ]),
                  lt(Me, {
                    "model-value": g(e).settings.aiTriggerOnGreeting,
                    "onUpdate:modelValue": w[7] || (w[7] = (C) => g(e).setAiTriggerOnGreeting(C))
                  }, null, 8, ["model-value"])
                ])) : _t("", !0)
              ], 64)) : _t("", !0)
            ], 64)) : _t("", !0),
            g(e).settings.aiMode === "together" ? (P(), N(it, { key: 1 }, [
              u("div", gg, [
                u("div", mg, [
                  u("div", yg, D(g(m)("Prompt Role")), 1),
                  u("div", vg, D(g(m)("Role used when injecting BGM instructions into the main AI")), 1)
                ]),
                u("div", _g, [
                  (P(!0), N(it, null, jt([{ v: "system", l: g(m)("System") }, { v: "user", l: g(m)("User") }], (C) => (P(), N("div", {
                    key: C.v,
                    class: at(["stmp-chip", { active: g(e).settings.togetherPromptRole === C.v }]),
                    onClick: (x) => g(e).setTogetherPromptRole(C.v)
                  }, [
                    u("span", null, D(C.l), 1)
                  ], 10, bg))), 128))
                ])
              ]),
              u("div", wg, [
                u("div", xg, [
                  u("div", Sg, D(g(m)("Custom Prompt")), 1),
                  u("div", Tg, [
                    en(D(g(m)("Edit the BGM instruction prompt. Use macros like ")) + " ", 1),
                    w[12] || (w[12] = u("code", null, "{{xiaoyueCurrentSong}}", -1)),
                    en(" " + D(g(m)(" for dynamic values.")), 1)
                  ])
                ]),
                lt(Me, {
                  "model-value": g(e).settings.togetherCustomPromptEnabled,
                  "onUpdate:modelValue": g(e).setTogetherCustomPromptEnabled
                }, null, 8, ["model-value", "onUpdate:modelValue"])
              ]),
              g(e).settings.togetherCustomPromptEnabled ? (P(), N("div", Cg, [
                u("div", Ag, [
                  u("div", kg, D(g(m)("Edit Prompt")), 1),
                  u("div", Eg, D(g(m)("Click to edit the BGM instruction prompt")), 1)
                ]),
                u("div", {
                  class: "menu_button menu_button_icon stmp-action-btn",
                  title: g(m)("Edit Prompt"),
                  onClick: S
                }, [...w[13] || (w[13] = [
                  u("i", { class: "fa-solid fa-pen-to-square" }, null, -1)
                ])], 8, Mg)
              ])) : _t("", !0)
            ], 64)) : _t("", !0)
          ], 64)) : _t("", !0)
        ], 512), [
          [Ys, n.value === "ai"]
        ]),
        He(u("div", Pg, [
          u("div", Ig, [
            u("div", Rg, [
              u("div", Og, D(g(m)("Export data")), 1),
              u("div", Lg, D(g(m)("Save your settings to a JSON file")), 1)
            ]),
            u("div", {
              class: "menu_button menu_button_icon stmp-action-btn",
              onClick: Y
            }, [...w[14] || (w[14] = [
              u("i", { class: "fa-solid fa-file-export" }, null, -1)
            ])])
          ]),
          u("div", $g, [
            u("div", Ng, [
              u("div", Dg, D(g(m)("Import data")), 1),
              u("div", Fg, D(g(m)("Load settings from a JSON file")), 1)
            ]),
            u("div", {
              class: "menu_button menu_button_icon stmp-action-btn",
              onClick: W
            }, [...w[15] || (w[15] = [
              u("i", { class: "fa-solid fa-file-import" }, null, -1)
            ])])
          ]),
          u("div", Ug, [
            w[17] || (w[17] = u("div", { class: "stmp-about-icon" }, [
              u("i", { class: "fa-solid fa-music" })
            ], -1)),
            w[18] || (w[18] = u("div", { class: "stmp-about-name" }, "晓乐", -1)),
            u("div", Bg, D(g(m)("Version")) + " " + D(g(O)), 1),
            u("div", jg, D(g(m)("A scene-aware music player extension for SillyTavern")), 1),
            u("a", {
              href: Vg,
              target: "_blank",
              rel: "noopener",
              class: "stmp-about-link"
            }, [...w[16] || (w[16] = [
              u("i", { class: "fa-brands fa-github" }, null, -1),
              u("span", null, "GitHub", -1)
            ])]),
            w[19] || (w[19] = u("div", { class: "stmp-about-copyright" }, [
              u("a", {
                href: "https://www.erocraft.com",
                target: "_blank",
                rel: "noopener"
              }, "艾萝工坊"),
              en(" © 2015 - 2026")
            ], -1))
          ])
        ], 512), [
          [Ys, n.value === "general"]
        ])
      ])
    ]));
  }
}), Gg = /* @__PURE__ */ ke(Hg, [["__scopeId", "data-v-e4c85494"]]), Ul = [
  {
    name: "xiaoyueCurrentSong",
    description: "Name of the currently loaded track. Empty if no track is loaded.",
    fn: () => {
      try {
        return Tt().currentTrack?.name ?? "";
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
        return Tt().currentTrack?.artist ?? "";
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
        return String(Tt().isPlaying);
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
        return String(!!Tt().currentTrack);
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
        return bl(5).join(", ");
      } catch {
        return "";
      }
    }
  }
];
function Wg() {
  const t = SillyTavern.getContext(), e = t.macros, s = t.MacrosParser;
  for (const n of Ul)
    e?.register ? e.register(n.name, {
      category: "misc",
      description: n.description,
      handler: n.fn
    }) : s?.registerMacro && s.registerMacro(n.name, n.fn, n.description);
}
function Kg() {
  const t = SillyTavern.getContext(), e = t.macros, s = t.MacrosParser;
  for (const n of Ul)
    e?.registry?.unregisterMacro ? e.registry.unregisterMacro(n.name) : s?.unregisterMacro && s.unregisterMacro(n.name);
}
const ae = "xy", ks = [];
function eo(t) {
  return t == null ? "" : typeof t == "string" ? t : Array.isArray(t) ? t.map(String).join(" ").trim() : String(t);
}
function zg() {
  const t = SillyTavern.getContext(), { SlashCommandParser: e, SlashCommand: s } = t, n = (o) => {
    const i = s.fromProps(o);
    if (e.addCommandObject(i), typeof o.name == "string" && ks.push(o.name), Array.isArray(o.aliases))
      for (const r of o.aliases) ks.push(String(r));
  };
  n({
    name: `${ae}play`,
    aliases: [`${ae}p`],
    helpString: "Toggle play/pause. With a song name argument, searches and plays it immediately.",
    callback: async (o, i) => {
      const r = eo(i).trim();
      if (!r)
        return await Tt().togglePlay(), "";
      const l = gt(), c = await Je(l.settings.providers).searchAndResolve(r);
      return c ? (c.name = r, await Tt().loadAndPlay(c), typeof toastr < "u" && toastr.success(c.name)) : typeof toastr < "u" && toastr.warning(`${m("Cannot play")}: ${r}`), "";
    }
  }), n({
    name: `${ae}next`,
    aliases: [`${ae}n`],
    helpString: "Skip to the next track.",
    callback: async () => (Wt().next(), "")
  }), n({
    name: `${ae}prev`,
    aliases: [`${ae}pp`],
    helpString: "Go back to the previous track.",
    callback: async () => (Wt().prev(), "")
  }), n({
    name: `${ae}vol`,
    helpString: "Get or set the player volume (0-100). No argument shows the current volume.",
    callback: async (o, i) => {
      const r = eo(i).trim(), l = Tt();
      if (!r)
        return String(l.volume);
      const a = parseInt(r, 10);
      return Number.isNaN(a) || a < 0 || a > 100 ? (typeof toastr < "u" && toastr.warning(m("Volume must be 0-100")), "") : (l.setVolume(a), gt().setVolume(a), typeof toastr < "u" && toastr.success(`${m("Volume")}: ${a}`), "");
    }
  }), n({
    name: `${ae}add`,
    helpString: "Search for a song and add it to the playlist.",
    callback: async (o, i) => {
      const r = eo(i).trim();
      if (!r)
        return typeof toastr < "u" && toastr.warning(m("Search Song...")), "";
      const l = gt(), c = await Je(l.settings.providers).searchAll(r);
      return c.length === 0 ? (typeof toastr < "u" && toastr.info(m("No results")), "") : (Wt().addFromSearch(c[0], !1), typeof toastr < "u" && toastr.success(`${c[0].name} - ${c[0].artist}`), "");
    }
  }), n({
    name: `${ae}bgm`,
    helpString: "Manually trigger AI BGM analysis for the current conversation.",
    callback: async () => {
      const o = nn();
      return o ? (await o.manualTrigger(), "") : (typeof toastr < "u" && toastr.warning(m("AI BGM") + ": " + m("Off")), "");
    }
  }), n({
    name: `${ae}now`,
    helpString: "Show information about the currently playing track.",
    callback: async () => {
      const o = Tt(), i = o.currentTrack;
      if (!i)
        return typeof toastr < "u" && toastr.info(m("No Song")), "";
      const r = i.artist ? ` - ${i.artist}` : "", l = o.isPlaying ? "▶" : "⏸";
      return typeof toastr < "u" && toastr.info(`${l} ${i.name}${r}`), `${i.name}${r}`;
    }
  }), console.log(`[晓乐] Slash commands registered: ${ks.join(", ")}`);
}
function Yg() {
  const t = SillyTavern.getContext(), { SlashCommandParser: e } = t;
  if (e?.commands) {
    for (const s of ks)
      s in e.commands && delete e.commands[s];
    ks.length = 0;
  }
}
let is = null, Es = null, Ms = null, rs = null, wn = null, xn = null;
const Jg = `
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
function qg() {
  const t = $("#extensions_settings2");
  if (!t || !t.length || (t.append(Jg), Ms = t.children(".inline-drawer").last()[0] ?? null, !Ms)) return;
  const e = Ms.querySelector("#stmp-settings-mount");
  e && wn && (rs = ul(Gg), rs.use(wn), rs.mount(e));
}
function Xg() {
  rs && (rs.unmount(), rs = null), Ms?.remove(), Ms = null;
}
async function tm() {
  try {
    const t = document.createElement("div");
    t.id = "st-little-player-root", document.body.appendChild(t);
    const e = wu();
    wn = e, is = ul(Cd), is.use(e), is.mount(t);
    const s = gt(), n = Bd();
    s.init(n);
    const o = Tt();
    o.init(), o.setVolume(s.settings.volume), Wt().init(), qg();
    const r = SillyTavern.getContext();
    Es = () => {
      Wg(), zg(), xn = new up(), xn.init();
    }, r.eventSource.on(r.event_types.APP_READY, Es), console.log("[晓乐] 播放器加载完成");
  } catch (t) {
    console.error("[晓乐] init failed:", t);
  }
}
function Zg() {
  if (Es) {
    try {
      const e = SillyTavern.getContext();
      e.eventSource.removeListener(e.event_types.APP_READY, Es);
    } catch {
    }
    Es = null;
  }
  if (Kg(), Yg(), xn?.destroy(), xn = null, is) {
    try {
      Tt().destroy();
    } catch {
    }
    is.unmount(), is = null;
  }
  const t = document.getElementById("st-little-player-root");
  t && t.remove(), Xg(), wn = null;
}
function em() {
  Zg();
}
async function sm() {
  try {
    const t = SillyTavern.getContext(), e = t.extensionSettings[`${be}-playlist`];
    if (e && typeof e == "object") {
      const n = e.server;
      if (Array.isArray(n)) {
        const o = n.map((i) => i?.serverPath).filter((i) => !!i);
        await Promise.all(o.map((i) => ml(i).catch((r) => {
          console.warn("[晓乐] clean: failed to delete file:", i, r);
        })));
      }
    }
    delete t.extensionSettings[be], delete t.extensionSettings[`${be}-playlist`], t.saveSettingsDebounced();
    const s = t.chatMetadata;
    s && typeof s == "object" && (delete s[Fo], delete s.stmp_cursor, await t.saveMetadata());
  } catch (t) {
    console.error("[晓乐] clean: failed to delete settings:", t);
  }
}
export {
  sm as clean,
  Zg as destroy,
  em as disable,
  tm as init
};
