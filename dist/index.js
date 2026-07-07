/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Yn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const fe = {}, Wt = [], it = () => {
}, pr = () => !1, tn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), sn = (e) => e.startsWith("onUpdate:"), Se = Object.assign, Xn = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Uo = Object.prototype.hasOwnProperty, le = (e, t) => Uo.call(e, t), J = Array.isArray, Kt = (e) => Ts(e) === "[object Map]", gr = (e) => Ts(e) === "[object Set]", vi = (e) => Ts(e) === "[object Date]", ee = (e) => typeof e == "function", ge = (e) => typeof e == "string", We = (e) => typeof e == "symbol", ae = (e) => e !== null && typeof e == "object", mr = (e) => (ae(e) || ee(e)) && ee(e.then) && ee(e.catch), vr = Object.prototype.toString, Ts = (e) => vr.call(e), Ho = (e) => Ts(e).slice(8, -1), yr = (e) => Ts(e) === "[object Object]", nn = (e) => ge(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ls = /* @__PURE__ */ Yn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), rn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Vo = /-\w/g, qe = rn(
  (e) => e.replace(Vo, (t) => t.slice(1).toUpperCase())
), jo = /\B([A-Z])/g, Ct = rn(
  (e) => e.replace(jo, "-$1").toLowerCase()
), _r = rn((e) => e.charAt(0).toUpperCase() + e.slice(1)), xn = rn(
  (e) => e ? `on${_r(e)}` : ""
), nt = (e, t) => !Object.is(e, t), Us = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, br = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, Zn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Bo = (e) => {
  const t = ge(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let yi;
const on = () => yi || (yi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function $t(e) {
  if (J(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], i = ge(n) ? qo(n) : $t(n);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (ge(e) || ae(e))
    return e;
}
const Wo = /;(?![^(]*\))/g, Ko = /:([^]+)/, zo = /\/\*[^]*?\*\//g;
function qo(e) {
  const t = {};
  return e.replace(zo, "").split(Wo).forEach((s) => {
    if (s) {
      const n = s.split(Ko);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function ye(e) {
  let t = "";
  if (ge(e))
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
const Jo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Go = /* @__PURE__ */ Yn(Jo);
function xr(e) {
  return !!e || e === "";
}
function Yo(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = Qn(e[n], t[n]);
  return s;
}
function Qn(e, t) {
  if (e === t) return !0;
  let s = vi(e), n = vi(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = We(e), n = We(t), s || n)
    return e === t;
  if (s = J(e), n = J(t), s || n)
    return s && n ? Yo(e, t) : !1;
  if (s = ae(e), n = ae(t), s || n) {
    if (!s || !n)
      return !1;
    const i = Object.keys(e).length, r = Object.keys(t).length;
    if (i !== r)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), a = t.hasOwnProperty(o);
      if (l && !a || !l && a || !Qn(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const wr = (e) => !!(e && e.__v_isRef === !0), te = (e) => ge(e) ? e : e == null ? "" : J(e) || ae(e) && (e.toString === vr || !ee(e.toString)) ? wr(e) ? te(e.value) : JSON.stringify(e, Sr, 2) : String(e), Sr = (e, t) => wr(t) ? Sr(e, t.value) : Kt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], r) => (s[wn(n, r) + " =>"] = i, s),
    {}
  )
} : gr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => wn(s))
} : We(t) ? wn(t) : ae(t) && !J(t) && !yr(t) ? String(t) : t, wn = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    We(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let we;
class Cr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && we && (we.active ? (this.parent = we, this.index = (we.scopes || (we.scopes = [])).push(
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
      const s = we;
      try {
        return we = this, t();
      } finally {
        we = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = we, we = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (we === this)
        we = this.prevScope;
      else {
        let t = we;
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
function Ir(e) {
  return new Cr(e);
}
function Tr() {
  return we;
}
function Xo(e, t = !1) {
  we && we.cleanups.push(e);
}
let de;
const Sn = /* @__PURE__ */ new WeakSet();
class Er {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, we && (we.active ? we.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Sn.has(this) && (Sn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ar(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, _i(this), Mr(this);
    const t = de, s = Je;
    de = this, Je = !0;
    try {
      return this.fn();
    } finally {
      Rr(this), de = t, Je = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        si(t);
      this.deps = this.depsTail = void 0, _i(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Sn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    On(this) && this.run();
  }
  get dirty() {
    return On(this);
  }
}
let kr = 0, as, cs;
function Ar(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = cs, cs = e;
    return;
  }
  e.next = as, as = e;
}
function ei() {
  kr++;
}
function ti() {
  if (--kr > 0)
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
function Mr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Rr(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === s && (s = i), si(n), Zo(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = s;
}
function On(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Pr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Pr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === _s) || (e.globalVersion = _s, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !On(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = de, n = Je;
  de = e, Je = !0;
  try {
    Mr(e);
    const i = e.fn(e._value);
    (t.version === 0 || nt(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    de = s, Je = n, Rr(e), e.flags &= -3;
  }
}
function si(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let r = s.computed.deps; r; r = r.nextDep)
      si(r, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function Zo(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let Je = !0;
const Lr = [];
function rt() {
  Lr.push(Je), Je = !1;
}
function ot() {
  const e = Lr.pop();
  Je = e === void 0 ? !0 : e;
}
function _i(e) {
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
let _s = 0;
class Qo {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ni {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!de || !Je || de === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== de)
      s = this.activeLink = new Qo(de, this), de.deps ? (s.prevDep = de.depsTail, de.depsTail.nextDep = s, de.depsTail = s) : de.deps = de.depsTail = s, $r(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = de.depsTail, s.nextDep = void 0, de.depsTail.nextDep = s, de.depsTail = s, de.deps === s && (de.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, _s++, this.notify(t);
  }
  notify(t) {
    ei();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      ti();
    }
  }
}
function $r(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        $r(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const Bs = /* @__PURE__ */ new WeakMap(), Ot = /* @__PURE__ */ Symbol(
  ""
), Dn = /* @__PURE__ */ Symbol(
  ""
), bs = /* @__PURE__ */ Symbol(
  ""
);
function Ie(e, t, s) {
  if (Je && de) {
    let n = Bs.get(e);
    n || Bs.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(s);
    i || (n.set(s, i = new ni()), i.map = n, i.key = s), i.track();
  }
}
function dt(e, t, s, n, i, r) {
  const o = Bs.get(e);
  if (!o) {
    _s++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (ei(), t === "clear")
    o.forEach(l);
  else {
    const a = J(e), f = a && nn(s);
    if (a && s === "length") {
      const c = Number(n);
      o.forEach((h, m) => {
        (m === "length" || m === bs || !We(m) && m >= c) && l(h);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), f && l(o.get(bs)), t) {
        case "add":
          a ? f && l(o.get("length")) : (l(o.get(Ot)), Kt(e) && l(o.get(Dn)));
          break;
        case "delete":
          a || (l(o.get(Ot)), Kt(e) && l(o.get(Dn)));
          break;
        case "set":
          Kt(e) && l(o.get(Ot));
          break;
      }
  }
  ti();
}
function el(e, t) {
  const s = Bs.get(e);
  return s && s.get(t);
}
function Ft(e) {
  const t = /* @__PURE__ */ oe(e);
  return t === e ? t : (Ie(t, "iterate", bs), /* @__PURE__ */ Ue(e) ? t : t.map(Ge));
}
function ln(e) {
  return Ie(e = /* @__PURE__ */ oe(e), "iterate", bs), e;
}
function tt(e, t) {
  return /* @__PURE__ */ mt(e) ? Gt(/* @__PURE__ */ pt(e) ? Ge(t) : t) : Ge(t);
}
const tl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Cn(this, Symbol.iterator, (e) => tt(this, e));
  },
  concat(...e) {
    return Ft(this).concat(
      ...e.map((t) => J(t) ? Ft(t) : t)
    );
  },
  entries() {
    return Cn(this, "entries", (e) => (e[1] = tt(this, e[1]), e));
  },
  every(e, t) {
    return lt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return lt(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => tt(this, n)),
      arguments
    );
  },
  find(e, t) {
    return lt(
      this,
      "find",
      e,
      t,
      (s) => tt(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return lt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return lt(
      this,
      "findLast",
      e,
      t,
      (s) => tt(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return lt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return lt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return In(this, "includes", e);
  },
  indexOf(...e) {
    return In(this, "indexOf", e);
  },
  join(e) {
    return Ft(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return In(this, "lastIndexOf", e);
  },
  map(e, t) {
    return lt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return es(this, "pop");
  },
  push(...e) {
    return es(this, "push", e);
  },
  reduce(e, ...t) {
    return bi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return bi(this, "reduceRight", e, t);
  },
  shift() {
    return es(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return lt(this, "some", e, t, void 0, arguments);
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
    return Cn(this, "values", (e) => tt(this, e));
  }
};
function Cn(e, t, s) {
  const n = ln(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ Ue(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = s(r.value)), r;
  }), i;
}
const sl = Array.prototype;
function lt(e, t, s, n, i, r) {
  const o = ln(e), l = o !== e && !/* @__PURE__ */ Ue(e), a = o[t];
  if (a !== sl[t]) {
    const h = a.apply(e, r);
    return l ? Ge(h) : h;
  }
  let f = s;
  o !== e && (l ? f = function(h, m) {
    return s.call(this, tt(e, h), m, e);
  } : s.length > 2 && (f = function(h, m) {
    return s.call(this, h, m, e);
  }));
  const c = a.call(o, f, n);
  return l && i ? i(c) : c;
}
function bi(e, t, s, n) {
  const i = ln(e), r = i !== e && !/* @__PURE__ */ Ue(e);
  let o = s, l = !1;
  i !== e && (r ? (l = n.length === 0, o = function(f, c, h) {
    return l && (l = !1, f = tt(e, f)), s.call(this, f, tt(e, c), h, e);
  }) : s.length > 3 && (o = function(f, c, h) {
    return s.call(this, f, c, h, e);
  }));
  const a = i[t](o, ...n);
  return l ? tt(e, a) : a;
}
function In(e, t, s) {
  const n = /* @__PURE__ */ oe(e);
  Ie(n, "iterate", bs);
  const i = n[t](...s);
  return (i === -1 || i === !1) && /* @__PURE__ */ cn(s[0]) ? (s[0] = /* @__PURE__ */ oe(s[0]), n[t](...s)) : i;
}
function es(e, t, s = []) {
  rt(), ei();
  const n = (/* @__PURE__ */ oe(e))[t].apply(e, s);
  return ti(), ot(), n;
}
const nl = /* @__PURE__ */ Yn("__proto__,__v_isRef,__isVue"), Or = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(We)
);
function il(e) {
  We(e) || (e = String(e));
  const t = /* @__PURE__ */ oe(this);
  return Ie(t, "has", e), t.hasOwnProperty(e);
}
class Dr {
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
      return n === (i ? r ? pl : Hr : r ? Ur : Fr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = J(t);
    if (!i) {
      let a;
      if (o && (a = tl[s]))
        return a;
      if (s === "hasOwnProperty")
        return il;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ me(t) ? t : n
    );
    if ((We(s) ? Or.has(s) : nl(s)) || (i || Ie(t, "get", s), r))
      return l;
    if (/* @__PURE__ */ me(l)) {
      const a = o && nn(s) ? l : l.value;
      return i && ae(a) ? /* @__PURE__ */ Fn(a) : a;
    }
    return ae(l) ? i ? /* @__PURE__ */ Fn(l) : /* @__PURE__ */ an(l) : l;
  }
}
class Nr extends Dr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, i) {
    let r = t[s];
    const o = J(t) && nn(s);
    if (!this._isShallow) {
      const f = /* @__PURE__ */ mt(r);
      if (!/* @__PURE__ */ Ue(n) && !/* @__PURE__ */ mt(n) && (r = /* @__PURE__ */ oe(r), n = /* @__PURE__ */ oe(n)), !o && /* @__PURE__ */ me(r) && !/* @__PURE__ */ me(n))
        return f || (r.value = n), !0;
    }
    const l = o ? Number(s) < t.length : le(t, s), a = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ me(t) ? t : i
    );
    return t === /* @__PURE__ */ oe(i) && a && (l ? nt(n, r) && dt(t, "set", s, n) : dt(t, "add", s, n)), a;
  }
  deleteProperty(t, s) {
    const n = le(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && dt(t, "delete", s, void 0), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!We(s) || !Or.has(s)) && Ie(t, "has", s), n;
  }
  ownKeys(t) {
    return Ie(
      t,
      "iterate",
      J(t) ? "length" : Ot
    ), Reflect.ownKeys(t);
  }
}
class rl extends Dr {
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
const ol = /* @__PURE__ */ new Nr(), ll = /* @__PURE__ */ new rl(), al = /* @__PURE__ */ new Nr(!0);
const Nn = (e) => e, Rs = (e) => Reflect.getPrototypeOf(e);
function cl(e, t, s) {
  return function(...n) {
    const i = this.__v_raw, r = /* @__PURE__ */ oe(i), o = Kt(r), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, f = i[e](...n), c = s ? Nn : t ? Gt : Ge;
    return !t && Ie(
      r,
      "iterate",
      a ? Dn : Ot
    ), Se(
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
function ul(e, t) {
  const s = {
    get(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ oe(r), l = /* @__PURE__ */ oe(i);
      e || (nt(i, l) && Ie(o, "get", i), Ie(o, "get", l));
      const { has: a } = Rs(o), f = t ? Nn : e ? Gt : Ge;
      if (a.call(o, i))
        return f(r.get(i));
      if (a.call(o, l))
        return f(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Ie(/* @__PURE__ */ oe(i), "iterate", Ot), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ oe(r), l = /* @__PURE__ */ oe(i);
      return e || (nt(i, l) && Ie(o, "has", i), Ie(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, a = /* @__PURE__ */ oe(l), f = t ? Nn : e ? Gt : Ge;
      return !e && Ie(a, "iterate", Ot), l.forEach((c, h) => i.call(r, f(c), f(h), o));
    }
  };
  return Se(
    s,
    e ? {
      add: Ps("add"),
      set: Ps("set"),
      delete: Ps("delete"),
      clear: Ps("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ oe(this), o = Rs(r), l = /* @__PURE__ */ oe(i), a = !t && !/* @__PURE__ */ Ue(i) && !/* @__PURE__ */ mt(i) ? l : i;
        return o.has.call(r, a) || nt(i, a) && o.has.call(r, i) || nt(l, a) && o.has.call(r, l) || (r.add(a), dt(r, "add", a, a)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ Ue(r) && !/* @__PURE__ */ mt(r) && (r = /* @__PURE__ */ oe(r));
        const o = /* @__PURE__ */ oe(this), { has: l, get: a } = Rs(o);
        let f = l.call(o, i);
        f || (i = /* @__PURE__ */ oe(i), f = l.call(o, i));
        const c = a.call(o, i);
        return o.set(i, r), f ? nt(r, c) && dt(o, "set", i, r) : dt(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ oe(this), { has: o, get: l } = Rs(r);
        let a = o.call(r, i);
        a || (i = /* @__PURE__ */ oe(i), a = o.call(r, i)), l && l.call(r, i);
        const f = r.delete(i);
        return a && dt(r, "delete", i, void 0), f;
      },
      clear() {
        const i = /* @__PURE__ */ oe(this), r = i.size !== 0, o = i.clear();
        return r && dt(
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
    s[i] = cl(i, e, t);
  }), s;
}
function ii(e, t) {
  const s = ul(e, t);
  return (n, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    le(s, i) && i in n ? s : n,
    i,
    r
  );
}
const fl = {
  get: /* @__PURE__ */ ii(!1, !1)
}, dl = {
  get: /* @__PURE__ */ ii(!1, !0)
}, hl = {
  get: /* @__PURE__ */ ii(!0, !1)
};
const Fr = /* @__PURE__ */ new WeakMap(), Ur = /* @__PURE__ */ new WeakMap(), Hr = /* @__PURE__ */ new WeakMap(), pl = /* @__PURE__ */ new WeakMap();
function gl(e) {
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
function an(e) {
  return /* @__PURE__ */ mt(e) ? e : ri(
    e,
    !1,
    ol,
    fl,
    Fr
  );
}
// @__NO_SIDE_EFFECTS__
function ml(e) {
  return ri(
    e,
    !1,
    al,
    dl,
    Ur
  );
}
// @__NO_SIDE_EFFECTS__
function Fn(e) {
  return ri(
    e,
    !0,
    ll,
    hl,
    Hr
  );
}
function ri(e, t, s, n, i) {
  if (!ae(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const o = gl(Ho(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? n : s
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function pt(e) {
  return /* @__PURE__ */ mt(e) ? /* @__PURE__ */ pt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function mt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ue(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function cn(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function oe(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ oe(t) : e;
}
function oi(e) {
  return !le(e, "__v_skip") && Object.isExtensible(e) && br(e, "__v_skip", !0), e;
}
const Ge = (e) => ae(e) ? /* @__PURE__ */ an(e) : e, Gt = (e) => ae(e) ? /* @__PURE__ */ Fn(e) : e;
// @__NO_SIDE_EFFECTS__
function me(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function he(e) {
  return vl(e, !1);
}
function vl(e, t) {
  return /* @__PURE__ */ me(e) ? e : new yl(e, t);
}
class yl {
  constructor(t, s) {
    this.dep = new ni(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ oe(t), this._value = s ? t : Ge(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Ue(t) || /* @__PURE__ */ mt(t);
    t = n ? t : /* @__PURE__ */ oe(t), nt(t, s) && (this._rawValue = t, this._value = n ? t : Ge(t), this.dep.trigger());
  }
}
function w(e) {
  return /* @__PURE__ */ me(e) ? e.value : e;
}
const _l = {
  get: (e, t, s) => t === "__v_raw" ? e : w(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t];
    return /* @__PURE__ */ me(i) && !/* @__PURE__ */ me(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function Vr(e) {
  return /* @__PURE__ */ pt(e) ? e : new Proxy(e, _l);
}
// @__NO_SIDE_EFFECTS__
function bl(e) {
  const t = J(e) ? new Array(e.length) : {};
  for (const s in e)
    t[s] = wl(e, s);
  return t;
}
class xl {
  constructor(t, s, n) {
    this._object = t, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = We(s) ? s : String(s), this._raw = /* @__PURE__ */ oe(t);
    let i = !0, r = t;
    if (!J(t) || We(this._key) || !nn(this._key))
      do
        i = !/* @__PURE__ */ cn(r) || /* @__PURE__ */ Ue(r);
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
    return el(this._raw, this._key);
  }
}
function wl(e, t, s) {
  return new xl(e, t, s);
}
class Sl {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new ni(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = _s - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    de !== this)
      return Ar(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Pr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Cl(e, t, s = !1) {
  let n, i;
  return ee(e) ? n = e : (n = e.get, i = e.set), new Sl(n, i, s);
}
const Ls = {}, Ws = /* @__PURE__ */ new WeakMap();
let Rt;
function Il(e, t = !1, s = Rt) {
  if (s) {
    let n = Ws.get(s);
    n || Ws.set(s, n = []), n.push(e);
  }
}
function Tl(e, t, s = fe) {
  const { immediate: n, deep: i, once: r, scheduler: o, augmentJob: l, call: a } = s, f = (R) => i ? R : /* @__PURE__ */ Ue(R) || i === !1 || i === 0 ? ht(R, 1) : ht(R);
  let c, h, m, v, C = !1, I = !1;
  if (/* @__PURE__ */ me(e) ? (h = () => e.value, C = /* @__PURE__ */ Ue(e)) : /* @__PURE__ */ pt(e) ? (h = () => f(e), C = !0) : J(e) ? (I = !0, C = e.some((R) => /* @__PURE__ */ pt(R) || /* @__PURE__ */ Ue(R)), h = () => e.map((R) => {
    if (/* @__PURE__ */ me(R))
      return R.value;
    if (/* @__PURE__ */ pt(R))
      return f(R);
    if (ee(R))
      return a ? a(R, 2) : R();
  })) : ee(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (m) {
      rt();
      try {
        m();
      } finally {
        ot();
      }
    }
    const R = Rt;
    Rt = c;
    try {
      return a ? a(e, 3, [v]) : e(v);
    } finally {
      Rt = R;
    }
  } : h = it, t && i) {
    const R = h, z = i === !0 ? 1 / 0 : i;
    h = () => ht(R(), z);
  }
  const D = Tr(), A = () => {
    c.stop(), D && D.active && Xn(D.effects, c);
  };
  if (r && t) {
    const R = t;
    t = (...z) => {
      const Q = R(...z);
      return A(), Q;
    };
  }
  let y = I ? new Array(e.length).fill(Ls) : Ls;
  const H = (R) => {
    if (!(!(c.flags & 1) || !c.dirty && !R))
      if (t) {
        const z = c.run();
        if (R || i || C || (I ? z.some((Q, P) => nt(Q, y[P])) : nt(z, y))) {
          m && m();
          const Q = Rt;
          Rt = c;
          try {
            const P = [
              z,
              // pass undefined as the old value when it's changed for the first time
              y === Ls ? void 0 : I && y[0] === Ls ? [] : y,
              v
            ];
            y = z, a ? a(t, 3, P) : (
              // @ts-expect-error
              t(...P)
            );
          } finally {
            Rt = Q;
          }
        }
      } else
        c.run();
  };
  return l && l(H), c = new Er(h), c.scheduler = o ? () => o(H, !1) : H, v = (R) => Il(R, !1, c), m = c.onStop = () => {
    const R = Ws.get(c);
    if (R) {
      if (a)
        a(R, 4);
      else
        for (const z of R) z();
      Ws.delete(c);
    }
  }, t ? n ? H(!0) : y = c.run() : o ? o(H.bind(null, !0), !0) : c.run(), A.pause = c.pause.bind(c), A.resume = c.resume.bind(c), A.stop = A, A;
}
function ht(e, t = 1 / 0, s) {
  if (t <= 0 || !ae(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ me(e))
    ht(e.value, t, s);
  else if (J(e))
    for (let n = 0; n < e.length; n++)
      ht(e[n], t, s);
  else if (gr(e) || Kt(e))
    e.forEach((n) => {
      ht(n, t, s);
    });
  else if (yr(e)) {
    for (const n in e)
      ht(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && ht(e[n], t, s);
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
    un(i, t, s);
  }
}
function Ke(e, t, s, n) {
  if (ee(e)) {
    const i = Es(e, t, s, n);
    return i && mr(i) && i.catch((r) => {
      un(r, t, s);
    }), i;
  }
  if (J(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(Ke(e[r], t, s, n));
    return i;
  }
}
function un(e, t, s, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || fe;
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
      rt(), Es(r, null, 10, [
        e,
        a,
        f
      ]), ot();
      return;
    }
  }
  El(e, s, i, n, o);
}
function El(e, t, s, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Ae = [];
let et = -1;
const zt = [];
let wt = null, Vt = 0;
const jr = /* @__PURE__ */ Promise.resolve();
let Ks = null;
function De(e) {
  const t = Ks || jr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function kl(e) {
  let t = et + 1, s = Ae.length;
  for (; t < s; ) {
    const n = t + s >>> 1, i = Ae[n], r = xs(i);
    r < e || r === e && i.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function li(e) {
  if (!(e.flags & 1)) {
    const t = xs(e), s = Ae[Ae.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= xs(s) ? Ae.push(e) : Ae.splice(kl(t), 0, e), e.flags |= 1, Br();
  }
}
function Br() {
  Ks || (Ks = jr.then(Kr));
}
function Al(e) {
  J(e) ? zt.push(...e) : wt && e.id === -1 ? wt.splice(Vt + 1, 0, e) : e.flags & 1 || (zt.push(e), e.flags |= 1), Br();
}
function xi(e, t, s = et + 1) {
  for (; s < Ae.length; s++) {
    const n = Ae[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      Ae.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Wr(e) {
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
function Kr(e) {
  try {
    for (et = 0; et < Ae.length; et++) {
      const t = Ae[et];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Es(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; et < Ae.length; et++) {
      const t = Ae[et];
      t && (t.flags &= -2);
    }
    et = -1, Ae.length = 0, Wr(), Ks = null, (Ae.length || zt.length) && Kr();
  }
}
let Be = null, zr = null;
function zs(e) {
  const t = Be;
  return Be = e, zr = e && e.type.__scopeId || null, t;
}
function qr(e, t = Be, s) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Gs(-1);
    const r = zs(t);
    let o;
    try {
      o = e(...i);
    } finally {
      zs(r), n._d && Gs(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function _t(e, t) {
  if (Be === null)
    return e;
  const s = mn(Be), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, a = fe] = t[i];
    r && (ee(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && ht(o), n.push({
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
    a && (rt(), Ke(a, s, 8, [
      e.el,
      l,
      e,
      t
    ]), ot());
  }
}
function Ml(e, t) {
  if (Re) {
    let s = Re.provides;
    const n = Re.parent && Re.parent.provides;
    n === s && (s = Re.provides = Object.create(n)), s[e] = t;
  }
}
function us(e, t, s = !1) {
  const n = di();
  if (n || Dt) {
    let i = Dt ? Dt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return s && ee(t) ? t.call(n && n.proxy) : t;
  }
}
function Rl() {
  return !!(di() || Dt);
}
const Pl = /* @__PURE__ */ Symbol.for("v-scx"), Ll = () => us(Pl);
function Ne(e, t, s) {
  return Jr(e, t, s);
}
function Jr(e, t, s = fe) {
  const { immediate: n, deep: i, flush: r, once: o } = s, l = Se({}, s), a = t && n || !t && r !== "post";
  let f;
  if (Cs) {
    if (r === "sync") {
      const v = Ll();
      f = v.__watcherHandles || (v.__watcherHandles = []);
    } else if (!a) {
      const v = () => {
      };
      return v.stop = it, v.resume = it, v.pause = it, v;
    }
  }
  const c = Re;
  l.call = (v, C, I) => Ke(v, c, C, I);
  let h = !1;
  r === "post" ? l.scheduler = (v) => {
    Ee(v, c && c.suspense);
  } : r !== "sync" && (h = !0, l.scheduler = (v, C) => {
    C ? v() : li(v);
  }), l.augmentJob = (v) => {
    t && (v.flags |= 4), h && (v.flags |= 2, c && (v.id = c.uid, v.i = c));
  };
  const m = Tl(e, t, l);
  return Cs && (f ? f.push(m) : a && m()), m;
}
function $l(e, t, s) {
  const n = this.proxy, i = ge(e) ? e.includes(".") ? Gr(n, e) : () => n[e] : e.bind(n, n);
  let r;
  ee(t) ? r = t : (r = t.handler, s = t);
  const o = ks(this), l = Jr(i, r.bind(n), s);
  return o(), l;
}
function Gr(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < s.length && n; i++)
      n = n[s[i]];
    return n;
  };
}
const bt = /* @__PURE__ */ new WeakMap(), Yr = /* @__PURE__ */ Symbol("_vte"), Xr = (e) => e.__isTeleport, Pt = (e) => e && (e.disabled || e.disabled === ""), Ol = (e) => e && (e.defer || e.defer === ""), wi = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Si = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Un = (e, t) => {
  const s = e && e.to;
  return ge(s) ? t ? t(s) : null : s;
}, Dl = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, s, n, i, r, o, l, a, f) {
    const {
      mc: c,
      pc: h,
      pbc: m,
      o: { insert: v, querySelector: C, createText: I, createComment: D, parentNode: A }
    } = f, y = Pt(t.props);
    let { dynamicChildren: H } = t;
    const R = (P, N, _) => {
      P.shapeFlag & 16 && c(
        P.children,
        N,
        _,
        i,
        r,
        o,
        l,
        a
      );
    }, z = (P = t) => {
      const N = Pt(P.props), _ = P.target = Un(P.props, C), j = Hn(_, P, I, v);
      _ && (o !== "svg" && wi(_) ? o = "svg" : o !== "mathml" && Si(_) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(_), N || (R(P, _, j), is(P, !1)));
    }, Q = (P) => {
      const N = () => {
        if (bt.get(P) === N) {
          if (bt.delete(P), Pt(P.props)) {
            const _ = A(P.el) || s;
            R(P, _, P.anchor), is(P, !0);
          }
          z(P);
        }
      };
      bt.set(P, N), Ee(N, r);
    };
    if (e == null) {
      const P = t.el = I(""), N = t.anchor = I("");
      if (v(P, s, n), v(N, s, n), Ol(t.props) || r && r.pendingBranch) {
        Q(t);
        return;
      }
      y && (R(t, s, N), is(t, !0)), z();
    } else {
      t.el = e.el;
      const P = t.anchor = e.anchor, N = bt.get(e);
      if (N) {
        N.flags |= 8, bt.delete(e), Q(t);
        return;
      }
      t.targetStart = e.targetStart;
      const _ = t.target = e.target, j = t.targetAnchor = e.targetAnchor, Y = Pt(e.props), E = Y ? s : _, B = Y ? P : j;
      if (o === "svg" || wi(_) ? o = "svg" : (o === "mathml" || Si(_)) && (o = "mathml"), H ? (m(
        e.dynamicChildren,
        H,
        E,
        i,
        r,
        o,
        l
      ), fi(e, t, !0)) : a || h(
        e,
        t,
        E,
        B,
        i,
        r,
        o,
        l,
        !1
      ), y)
        Y ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : $s(
          t,
          s,
          P,
          f,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const Z = Un(t.props, C);
        Z && (t.target = Z, $s(
          t,
          Z,
          null,
          f,
          0
        ));
      } else Y && $s(
        t,
        _,
        j,
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
    } = e, v = Pt(m), C = r || !v, I = bt.get(e);
    if (I && (I.flags |= 8, bt.delete(e)), h && (i(f), i(c)), r && i(a), !I && (v || h) && o & 16)
      for (let D = 0; D < l.length; D++) {
        const A = l[D];
        n(
          A,
          t,
          s,
          C,
          !!A.dynamicChildren
        );
      }
  },
  move: $s,
  hydrate: Nl
};
function $s(e, t, s, { o: { insert: n }, m: i }, r = 2) {
  r === 0 && n(e.targetAnchor, t, s);
  const { el: o, anchor: l, shapeFlag: a, children: f, props: c } = e, h = r === 2;
  if (h && n(o, t, s), !bt.has(e) && (!h || Pt(c)) && a & 16)
    for (let m = 0; m < f.length; m++)
      i(
        f[m],
        t,
        s,
        2
      );
  h && n(l, t, s);
}
function Nl(e, t, s, n, i, r, {
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
  const C = t.target = Un(
    t.props,
    a
  ), I = Pt(t.props);
  if (C) {
    const D = C._lpa || C.firstChild;
    t.shapeFlag & 16 && (I ? (v(e, t), m(C, D), t.targetAnchor || Hn(
      C,
      t,
      c,
      f,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      l(e) === C ? e : null
    )) : (t.anchor = o(e), m(C, D), t.targetAnchor || Hn(C, t, c, f), h(
      D && o(D),
      t,
      C,
      s,
      n,
      i,
      r
    ))), is(t, I);
  } else I && t.shapeFlag & 16 && (v(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const Fl = Dl;
function is(e, t) {
  const s = e.ctx;
  if (s && s.ut) {
    let n, i;
    for (t ? (n = e.el, i = e.anchor) : (n = e.targetStart, i = e.targetAnchor); n && n !== i; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", s.uid), n = n.nextSibling;
    s.ut();
  }
}
function Hn(e, t, s, n, i = null) {
  const r = t.targetStart = s(""), o = t.targetAnchor = s("");
  return r[Yr] = o, e && (n(r, e, i), n(o, e, i)), o;
}
const Ve = /* @__PURE__ */ Symbol("_leaveCb"), ts = /* @__PURE__ */ Symbol("_enterCb");
function Ul() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return hn(() => {
    e.isMounted = !0;
  }), ai(() => {
    e.isUnmounting = !0;
  }), e;
}
const He = [Function, Array], Zr = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: He,
  onEnter: He,
  onAfterEnter: He,
  onEnterCancelled: He,
  // leave
  onBeforeLeave: He,
  onLeave: He,
  onAfterLeave: He,
  onLeaveCancelled: He,
  // appear
  onBeforeAppear: He,
  onAppear: He,
  onAfterAppear: He,
  onAppearCancelled: He
}, Qr = (e) => {
  const t = e.subTree;
  return t.component ? Qr(t.component) : t;
}, Hl = {
  name: "BaseTransition",
  props: Zr,
  setup(e, { slots: t }) {
    const s = di(), n = Ul();
    return () => {
      const i = t.default && so(t.default(), !0), r = i && i.length ? eo(i) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        s.subTree ? Pe() : void 0
      );
      if (!r)
        return;
      const o = /* @__PURE__ */ oe(e), { mode: l } = o;
      if (n.isLeaving)
        return Tn(r);
      const a = Ci(r);
      if (!a)
        return Tn(r);
      let f = Vn(
        a,
        o,
        n,
        s,
        // #11061, ensure enterHooks is fresh after clone
        (h) => f = h
      );
      a.type !== Me && ws(a, f);
      let c = s.subTree && Ci(s.subTree);
      if (c && c.type !== Me && !Lt(c, a) && Qr(s).type !== Me) {
        let h = Vn(
          c,
          o,
          n,
          s
        );
        if (ws(c, h), l === "out-in" && a.type !== Me)
          return n.isLeaving = !0, h.afterLeave = () => {
            n.isLeaving = !1, s.job.flags & 8 || s.update(), delete h.afterLeave, c = void 0;
          }, Tn(r);
        l === "in-out" && a.type !== Me ? h.delayLeave = (m, v, C) => {
          const I = to(
            n,
            c
          );
          I[String(c.key)] = c, m[Ve] = () => {
            v(), m[Ve] = void 0, delete f.delayedLeave, c = void 0;
          }, f.delayedLeave = () => {
            C(), delete f.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return r;
    };
  }
};
function eo(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const s of e)
      if (s.type !== Me) {
        t = s;
        break;
      }
  }
  return t;
}
const Vl = Hl;
function to(e, t) {
  const { leavingVNodes: s } = e;
  let n = s.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), s.set(t.type, n)), n;
}
function Vn(e, t, s, n, i) {
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
    onAfterLeave: C,
    onLeaveCancelled: I,
    onBeforeAppear: D,
    onAppear: A,
    onAfterAppear: y,
    onAppearCancelled: H
  } = t, R = String(e.key), z = to(s, e), Q = (_, j) => {
    _ && Ke(
      _,
      n,
      9,
      j
    );
  }, P = (_, j) => {
    const Y = j[1];
    Q(_, j), J(_) ? _.every((E) => E.length <= 1) && Y() : _.length <= 1 && Y();
  }, N = {
    mode: o,
    persisted: l,
    beforeEnter(_) {
      let j = a;
      if (!s.isMounted)
        if (r)
          j = D || a;
        else
          return;
      _[Ve] && _[Ve](
        !0
        /* cancelled */
      );
      const Y = z[R];
      Y && Lt(e, Y) && Y.el[Ve] && Y.el[Ve](), Q(j, [_]);
    },
    enter(_) {
      if (z[R] === e) return;
      let j = f, Y = c, E = h;
      if (!s.isMounted)
        if (r)
          j = A || f, Y = y || c, E = H || h;
        else
          return;
      let B = !1;
      _[ts] = (_e) => {
        B || (B = !0, _e ? Q(E, [_]) : Q(Y, [_]), N.delayedLeave && N.delayedLeave(), _[ts] = void 0);
      };
      const Z = _[ts].bind(null, !1);
      j ? P(j, [_, Z]) : Z();
    },
    leave(_, j) {
      const Y = String(e.key);
      if (_[ts] && _[ts](
        !0
        /* cancelled */
      ), s.isUnmounting)
        return j();
      Q(m, [_]);
      let E = !1;
      _[Ve] = (Z) => {
        E || (E = !0, j(), Z ? Q(I, [_]) : Q(C, [_]), _[Ve] = void 0, z[Y] === e && delete z[Y]);
      };
      const B = _[Ve].bind(null, !1);
      z[Y] = e, v ? P(v, [_, B]) : B();
    },
    clone(_) {
      const j = Vn(
        _,
        t,
        s,
        n,
        i
      );
      return i && i(j), j;
    }
  };
  return N;
}
function Tn(e) {
  if (fn(e))
    return e = St(e), e.children = null, e;
}
function Ci(e) {
  if (!fn(e))
    return Xr(e.type) && e.children ? eo(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: s } = e;
  if (s) {
    if (t & 16)
      return s[0];
    if (t & 32 && ee(s.default))
      return s.default();
  }
}
function ws(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ws(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function so(e, t = !1, s) {
  let n = [], i = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const l = s == null ? o.key : String(s) + String(o.key != null ? o.key : r);
    o.type === ie ? (o.patchFlag & 128 && i++, n = n.concat(
      so(o.children, t, l)
    )) : (t || o.type !== Me) && n.push(l != null ? St(o, { key: l }) : o);
  }
  if (i > 1)
    for (let r = 0; r < n.length; r++)
      n[r].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function It(e, t) {
  return ee(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Se({ name: e.name }, t, { setup: e })
  ) : e;
}
function no(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ii(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const qs = /* @__PURE__ */ new WeakMap();
function fs(e, t, s, n, i = !1) {
  if (J(e)) {
    e.forEach(
      (I, D) => fs(
        I,
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
  const r = n.shapeFlag & 4 ? mn(n.component) : n.el, o = i ? null : r, { i: l, r: a } = e, f = t && t.r, c = l.refs === fe ? l.refs = {} : l.refs, h = l.setupState, m = /* @__PURE__ */ oe(h), v = h === fe ? pr : (I) => Ii(c, I) ? !1 : le(m, I), C = (I, D) => !(D && Ii(c, D));
  if (f != null && f !== a) {
    if (Ti(t), ge(f))
      c[f] = null, v(f) && (h[f] = null);
    else if (/* @__PURE__ */ me(f)) {
      const I = t;
      C(f, I.k) && (f.value = null), I.k && (c[I.k] = null);
    }
  }
  if (ee(a)) {
    rt();
    try {
      Es(a, l, 12, [o, c]);
    } finally {
      ot();
    }
  } else {
    const I = ge(a), D = /* @__PURE__ */ me(a);
    if (I || D) {
      const A = () => {
        if (e.f) {
          const y = I ? v(a) ? h[a] : c[a] : C() || !e.k ? a.value : c[e.k];
          if (i)
            J(y) && Xn(y, r);
          else if (J(y))
            y.includes(r) || y.push(r);
          else if (I)
            c[a] = [r], v(a) && (h[a] = c[a]);
          else {
            const H = [r];
            C(a, e.k) && (a.value = H), e.k && (c[e.k] = H);
          }
        } else I ? (c[a] = o, v(a) && (h[a] = o)) : D && (C(a, e.k) && (a.value = o), e.k && (c[e.k] = o));
      };
      if (o) {
        const y = () => {
          A(), qs.delete(e);
        };
        y.id = -1, qs.set(e, y), Ee(y, s);
      } else
        Ti(e), A();
    }
  }
}
function Ti(e) {
  const t = qs.get(e);
  t && (t.flags |= 8, qs.delete(e));
}
on().requestIdleCallback;
on().cancelIdleCallback;
const ds = (e) => !!e.type.__asyncLoader, fn = (e) => e.type.__isKeepAlive;
function jl(e, t) {
  io(e, "a", t);
}
function Bl(e, t) {
  io(e, "da", t);
}
function io(e, t, s = Re) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = s;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (dn(t, n, s), s) {
    let i = s.parent;
    for (; i && i.parent; )
      fn(i.parent.vnode) && Wl(n, t, s, i), i = i.parent;
  }
}
function Wl(e, t, s, n) {
  const i = dn(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  ro(() => {
    Xn(n[t], i);
  }, s);
}
function dn(e, t, s = Re, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []), r = t.__weh || (t.__weh = (...o) => {
      rt();
      const l = ks(s), a = Ke(t, s, e, o);
      return l(), ot(), a;
    });
    return n ? i.unshift(r) : i.push(r), r;
  }
}
const vt = (e) => (t, s = Re) => {
  (!Cs || e === "sp") && dn(e, (...n) => t(...n), s);
}, Kl = vt("bm"), hn = vt("m"), zl = vt(
  "bu"
), ql = vt("u"), ai = vt(
  "bum"
), ro = vt("um"), Jl = vt(
  "sp"
), Gl = vt("rtg"), Yl = vt("rtc");
function Xl(e, t = Re) {
  dn("ec", e, t);
}
const Zl = /* @__PURE__ */ Symbol.for("v-ndc");
function je(e, t, s, n) {
  let i;
  const r = s, o = J(e);
  if (o || ge(e)) {
    const l = o && /* @__PURE__ */ pt(e);
    let a = !1, f = !1;
    l && (a = !/* @__PURE__ */ Ue(e), f = /* @__PURE__ */ mt(e), e = ln(e)), i = new Array(e.length);
    for (let c = 0, h = e.length; c < h; c++)
      i[c] = t(
        a ? f ? Gt(Ge(e[c])) : Ge(e[c]) : e[c],
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
const jn = (e) => e ? Io(e) ? mn(e) : jn(e.parent) : null, hs = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Se(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => jn(e.parent),
    $root: (e) => jn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => lo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      li(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = De.bind(e.proxy)),
    $watch: (e) => $l.bind(e)
  })
), En = (e, t) => e !== fe && !e.__isScriptSetup && le(e, t), Ql = {
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
        if (En(n, t))
          return o[t] = 1, n[t];
        if (i !== fe && le(i, t))
          return o[t] = 2, i[t];
        if (le(r, t))
          return o[t] = 3, r[t];
        if (s !== fe && le(s, t))
          return o[t] = 4, s[t];
        Bn && (o[t] = 0);
      }
    }
    const f = hs[t];
    let c, h;
    if (f)
      return t === "$attrs" && Ie(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (c = l.__cssModules) && (c = c[t])
    )
      return c;
    if (s !== fe && le(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      h = a.config.globalProperties, le(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: i, ctx: r } = e;
    return En(i, t) ? (i[t] = s, !0) : n !== fe && le(n, t) ? (n[t] = s, !0) : le(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: i, props: r, type: o }
  }, l) {
    let a;
    return !!(s[l] || e !== fe && l[0] !== "$" && le(e, l) || En(t, l) || le(r, l) || le(n, l) || le(hs, l) || le(i.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : le(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function Ei(e) {
  return J(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let Bn = !0;
function ea(e) {
  const t = lo(e), s = e.proxy, n = e.ctx;
  Bn = !1, t.beforeCreate && ki(t.beforeCreate, e, "bc");
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
    updated: C,
    activated: I,
    deactivated: D,
    beforeDestroy: A,
    beforeUnmount: y,
    destroyed: H,
    unmounted: R,
    render: z,
    renderTracked: Q,
    renderTriggered: P,
    errorCaptured: N,
    serverPrefetch: _,
    // public API
    expose: j,
    inheritAttrs: Y,
    // assets
    components: E,
    directives: B,
    filters: Z
  } = t;
  if (f && ta(f, n, null), o)
    for (const K in o) {
      const se = o[K];
      ee(se) && (n[K] = se.bind(s));
    }
  if (i) {
    const K = i.call(s, s);
    ae(K) && (e.data = /* @__PURE__ */ an(K));
  }
  if (Bn = !0, r)
    for (const K in r) {
      const se = r[K], ve = ee(se) ? se.bind(s, s) : ee(se.get) ? se.get.bind(s, s) : it, xe = !ee(se) && ee(se.set) ? se.set.bind(s) : it, ze = $e({
        get: ve,
        set: xe
      });
      Object.defineProperty(n, K, {
        enumerable: !0,
        configurable: !0,
        get: () => ze.value,
        set: (Le) => ze.value = Le
      });
    }
  if (l)
    for (const K in l)
      oo(l[K], n, s, K);
  if (a) {
    const K = ee(a) ? a.call(s) : a;
    Reflect.ownKeys(K).forEach((se) => {
      Ml(se, K[se]);
    });
  }
  c && ki(c, e, "c");
  function W(K, se) {
    J(se) ? se.forEach((ve) => K(ve.bind(s))) : se && K(se.bind(s));
  }
  if (W(Kl, h), W(hn, m), W(zl, v), W(ql, C), W(jl, I), W(Bl, D), W(Xl, N), W(Yl, Q), W(Gl, P), W(ai, y), W(ro, R), W(Jl, _), J(j))
    if (j.length) {
      const K = e.exposed || (e.exposed = {});
      j.forEach((se) => {
        Object.defineProperty(K, se, {
          get: () => s[se],
          set: (ve) => s[se] = ve,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  z && e.render === it && (e.render = z), Y != null && (e.inheritAttrs = Y), E && (e.components = E), B && (e.directives = B), _ && no(e);
}
function ta(e, t, s = it) {
  J(e) && (e = Wn(e));
  for (const n in e) {
    const i = e[n];
    let r;
    ae(i) ? "default" in i ? r = us(
      i.from || n,
      i.default,
      !0
    ) : r = us(i.from || n) : r = us(i), /* @__PURE__ */ me(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[n] = r;
  }
}
function ki(e, t, s) {
  Ke(
    J(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function oo(e, t, s, n) {
  let i = n.includes(".") ? Gr(s, n) : () => s[n];
  if (ge(e)) {
    const r = t[e];
    ee(r) && Ne(i, r);
  } else if (ee(e))
    Ne(i, e.bind(s));
  else if (ae(e))
    if (J(e))
      e.forEach((r) => oo(r, t, s, n));
    else {
      const r = ee(e.handler) ? e.handler.bind(s) : t[e.handler];
      ee(r) && Ne(i, r, e);
    }
}
function lo(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !i.length && !s && !n ? a = t : (a = {}, i.length && i.forEach(
    (f) => Js(a, f, o, !0)
  ), Js(a, t, o)), ae(t) && r.set(t, a), a;
}
function Js(e, t, s, n = !1) {
  const { mixins: i, extends: r } = t;
  r && Js(e, r, s, !0), i && i.forEach(
    (o) => Js(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const l = sa[o] || s && s[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const sa = {
  data: Ai,
  props: Mi,
  emits: Mi,
  // objects
  methods: rs,
  computed: rs,
  // lifecycle
  beforeCreate: Te,
  created: Te,
  beforeMount: Te,
  mounted: Te,
  beforeUpdate: Te,
  updated: Te,
  beforeDestroy: Te,
  beforeUnmount: Te,
  destroyed: Te,
  unmounted: Te,
  activated: Te,
  deactivated: Te,
  errorCaptured: Te,
  serverPrefetch: Te,
  // assets
  components: rs,
  directives: rs,
  // watch
  watch: ia,
  // provide / inject
  provide: Ai,
  inject: na
};
function Ai(e, t) {
  return t ? e ? function() {
    return Se(
      ee(e) ? e.call(this, this) : e,
      ee(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function na(e, t) {
  return rs(Wn(e), Wn(t));
}
function Wn(e) {
  if (J(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function Te(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function rs(e, t) {
  return e ? Se(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Mi(e, t) {
  return e ? J(e) && J(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Se(
    /* @__PURE__ */ Object.create(null),
    Ei(e),
    Ei(t ?? {})
  ) : t;
}
function ia(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = Se(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = Te(e[n], t[n]);
  return s;
}
function ao() {
  return {
    app: null,
    config: {
      isNativeTag: pr,
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
let ra = 0;
function oa(e, t) {
  return function(n, i = null) {
    ee(n) || (n = Se({}, n)), i != null && !ae(i) && (i = null);
    const r = ao(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const f = r.app = {
      _uid: ra++,
      _component: n,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: Ua,
      get config() {
        return r.config;
      },
      set config(c) {
      },
      use(c, ...h) {
        return o.has(c) || (c && ee(c.install) ? (o.add(c), c.install(f, ...h)) : ee(c) && (o.add(c), c(f, ...h))), f;
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
          return v.appContext = r, m === !0 ? m = "svg" : m === !1 && (m = void 0), e(v, c, m), a = !0, f._container = c, c.__vue_app__ = f, mn(v.component);
        }
      },
      onUnmount(c) {
        l.push(c);
      },
      unmount() {
        a && (Ke(
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
const la = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${qe(t)}Modifiers`] || e[`${Ct(t)}Modifiers`];
function aa(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || fe;
  let i = s;
  const r = t.startsWith("update:"), o = r && la(n, t.slice(7));
  o && (o.trim && (i = s.map((c) => ge(c) ? c.trim() : c)), o.number && (i = s.map(Zn)));
  let l, a = n[l = xn(t)] || // also try camelCase event handler (#2249)
  n[l = xn(qe(t))];
  !a && r && (a = n[l = xn(Ct(t))]), a && Ke(
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
    e.emitted[l] = !0, Ke(
      f,
      e,
      6,
      i
    );
  }
}
const ca = /* @__PURE__ */ new WeakMap();
function co(e, t, s = !1) {
  const n = s ? ca : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {}, l = !1;
  if (!ee(e)) {
    const a = (f) => {
      const c = co(f, t, !0);
      c && (l = !0, Se(o, c));
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (ae(e) && n.set(e, null), null) : (J(r) ? r.forEach((a) => o[a] = null) : Se(o, r), ae(e) && n.set(e, o), o);
}
function pn(e, t) {
  return !e || !tn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), le(e, t[0].toLowerCase() + t.slice(1)) || le(e, Ct(t)) || le(e, t));
}
function Ri(e) {
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
    ctx: C,
    inheritAttrs: I
  } = e, D = zs(e);
  let A, y;
  try {
    if (s.shapeFlag & 4) {
      const R = i || n, z = R;
      A = st(
        f.call(
          z,
          R,
          c,
          h,
          v,
          m,
          C
        )
      ), y = l;
    } else {
      const R = t;
      A = st(
        R.length > 1 ? R(
          h,
          { attrs: l, slots: o, emit: a }
        ) : R(
          h,
          null
        )
      ), y = t.props ? l : ua(l);
    }
  } catch (R) {
    ps.length = 0, un(R, e, 1), A = ne(Me);
  }
  let H = A;
  if (y && I !== !1) {
    const R = Object.keys(y), { shapeFlag: z } = H;
    R.length && z & 7 && (r && R.some(sn) && (y = fa(
      y,
      r
    )), H = St(H, y, !1, !0));
  }
  return s.dirs && (H = St(H, null, !1, !0), H.dirs = H.dirs ? H.dirs.concat(s.dirs) : s.dirs), s.transition && ws(H, s.transition), A = H, zs(D), A;
}
const ua = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || tn(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, fa = (e, t) => {
  const s = {};
  for (const n in e)
    (!sn(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function da(e, t, s) {
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
        if (uo(o, n, m) && !pn(f, m))
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
    if (uo(t, e, r) && !pn(s, r))
      return !0;
  }
  return !1;
}
function uo(e, t, s) {
  const n = e[s], i = t[s];
  return s === "style" && ae(n) && ae(i) ? !Qn(n, i) : n !== i;
}
function ha({ vnode: e, parent: t, suspense: s }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  s && s.activeBranch === e && (s.vnode.el = n);
}
const fo = {}, ho = () => Object.create(fo), po = (e) => Object.getPrototypeOf(e) === fo;
function pa(e, t, s, n = !1) {
  const i = {}, r = ho();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), go(e, t, i, r);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  s ? e.props = n ? i : /* @__PURE__ */ ml(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function ga(e, t, s, n) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ oe(i), [a] = e.propsOptions;
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
        if (pn(e.emitsOptions, m))
          continue;
        const v = t[m];
        if (a)
          if (le(r, m))
            v !== r[m] && (r[m] = v, f = !0);
          else {
            const C = qe(m);
            i[C] = Kn(
              a,
              l,
              C,
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
    go(e, t, i, r) && (f = !0);
    let c;
    for (const h in l)
      (!t || // for camelCase
      !le(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Ct(h)) === h || !le(t, c))) && (a ? s && // for camelCase
      (s[h] !== void 0 || // for kebab-case
      s[c] !== void 0) && (i[h] = Kn(
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
  f && dt(e.attrs, "set", "");
}
function go(e, t, s, n) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (ls(a))
        continue;
      const f = t[a];
      let c;
      i && le(i, c = qe(a)) ? !r || !r.includes(c) ? s[c] = f : (l || (l = {}))[c] = f : pn(e.emitsOptions, a) || (!(a in n) || f !== n[a]) && (n[a] = f, o = !0);
    }
  if (r) {
    const a = /* @__PURE__ */ oe(s), f = l || fe;
    for (let c = 0; c < r.length; c++) {
      const h = r[c];
      s[h] = Kn(
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
function Kn(e, t, s, n, i, r) {
  const o = e[s];
  if (o != null) {
    const l = le(o, "default");
    if (l && n === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && ee(a)) {
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
const ma = /* @__PURE__ */ new WeakMap();
function mo(e, t, s = !1) {
  const n = s ? ma : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, l = [];
  let a = !1;
  if (!ee(e)) {
    const c = (h) => {
      a = !0;
      const [m, v] = mo(h, t, !0);
      Se(o, m), v && l.push(...v);
    };
    !s && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!r && !a)
    return ae(e) && n.set(e, Wt), Wt;
  if (J(r))
    for (let c = 0; c < r.length; c++) {
      const h = qe(r[c]);
      Li(h) && (o[h] = fe);
    }
  else if (r)
    for (const c in r) {
      const h = qe(c);
      if (Li(h)) {
        const m = r[c], v = o[h] = J(m) || ee(m) ? { type: m } : Se({}, m), C = v.type;
        let I = !1, D = !0;
        if (J(C))
          for (let A = 0; A < C.length; ++A) {
            const y = C[A], H = ee(y) && y.name;
            if (H === "Boolean") {
              I = !0;
              break;
            } else H === "String" && (D = !1);
          }
        else
          I = ee(C) && C.name === "Boolean";
        v[
          0
          /* shouldCast */
        ] = I, v[
          1
          /* shouldCastTrue */
        ] = D, (I || le(v, "default")) && l.push(h);
      }
    }
  const f = [o, l];
  return ae(e) && n.set(e, f), f;
}
function Li(e) {
  return e[0] !== "$" && !ls(e);
}
const ci = (e) => e === "_" || e === "_ctx" || e === "$stable", ui = (e) => J(e) ? e.map(st) : [st(e)], va = (e, t, s) => {
  if (t._n)
    return t;
  const n = qr((...i) => ui(t(...i)), s);
  return n._c = !1, n;
}, vo = (e, t, s) => {
  const n = e._ctx;
  for (const i in e) {
    if (ci(i)) continue;
    const r = e[i];
    if (ee(r))
      t[i] = va(i, r, n);
    else if (r != null) {
      const o = ui(r);
      t[i] = () => o;
    }
  }
}, yo = (e, t) => {
  const s = ui(t);
  e.slots.default = () => s;
}, _o = (e, t, s) => {
  for (const n in t)
    (s || !ci(n)) && (e[n] = t[n]);
}, ya = (e, t, s) => {
  const n = e.slots = ho();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (_o(n, t, s), s && br(n, "_", i, !0)) : vo(t, n);
  } else t && yo(e, t);
}, _a = (e, t, s) => {
  const { vnode: n, slots: i } = e;
  let r = !0, o = fe;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? r = !1 : _o(i, t, s) : (r = !t.$stable, vo(t, i)), o = t;
  } else t && (yo(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !ci(l) && o[l] == null && delete i[l];
}, Ee = Ca;
function ba(e) {
  return xa(e);
}
function xa(e, t) {
  const s = on();
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
    setScopeId: v = it,
    insertStaticContent: C
  } = e, I = (u, d, g, T = null, S = null, b = null, F = void 0, L = null, M = !!d.dynamicChildren) => {
    if (u === d)
      return;
    u && !Lt(u, d) && (T = Ms(u), Le(u, S, b, !0), u = null), d.patchFlag === -2 && (M = !1, d.dynamicChildren = null);
    const { type: x, ref: G, shapeFlag: U } = d;
    switch (x) {
      case gn:
        D(u, d, g, T);
        break;
      case Me:
        A(u, d, g, T);
        break;
      case Hs:
        u == null && y(d, g, T, F);
        break;
      case ie:
        E(
          u,
          d,
          g,
          T,
          S,
          b,
          F,
          L,
          M
        );
        break;
      default:
        U & 1 ? z(
          u,
          d,
          g,
          T,
          S,
          b,
          F,
          L,
          M
        ) : U & 6 ? B(
          u,
          d,
          g,
          T,
          S,
          b,
          F,
          L,
          M
        ) : (U & 64 || U & 128) && x.process(
          u,
          d,
          g,
          T,
          S,
          b,
          F,
          L,
          M,
          Zt
        );
    }
    G != null && S ? fs(G, u && u.ref, b, d || u, !d) : G == null && u && u.ref != null && fs(u.ref, null, b, u, !0);
  }, D = (u, d, g, T) => {
    if (u == null)
      n(
        d.el = l(d.children),
        g,
        T
      );
    else {
      const S = d.el = u.el;
      d.children !== u.children && f(S, d.children);
    }
  }, A = (u, d, g, T) => {
    u == null ? n(
      d.el = a(d.children || ""),
      g,
      T
    ) : d.el = u.el;
  }, y = (u, d, g, T) => {
    [u.el, u.anchor] = C(
      u.children,
      d,
      g,
      T,
      u.el,
      u.anchor
    );
  }, H = ({ el: u, anchor: d }, g, T) => {
    let S;
    for (; u && u !== d; )
      S = m(u), n(u, g, T), u = S;
    n(d, g, T);
  }, R = ({ el: u, anchor: d }) => {
    let g;
    for (; u && u !== d; )
      g = m(u), i(u), u = g;
    i(d);
  }, z = (u, d, g, T, S, b, F, L, M) => {
    if (d.type === "svg" ? F = "svg" : d.type === "math" && (F = "mathml"), u == null)
      Q(
        d,
        g,
        T,
        S,
        b,
        F,
        L,
        M
      );
    else {
      const x = u.el && u.el._isVueCE ? u.el : null;
      try {
        x && x._beginPatch(), _(
          u,
          d,
          S,
          b,
          F,
          L,
          M
        );
      } finally {
        x && x._endPatch();
      }
    }
  }, Q = (u, d, g, T, S, b, F, L) => {
    let M, x;
    const { props: G, shapeFlag: U, transition: q, dirs: X } = u;
    if (M = u.el = o(
      u.type,
      b,
      G && G.is,
      G
    ), U & 8 ? c(M, u.children) : U & 16 && N(
      u.children,
      M,
      null,
      T,
      S,
      kn(u, b),
      F,
      L
    ), X && Et(u, null, T, "created"), P(M, u, u.scopeId, F, T), G) {
      for (const ue in G)
        ue !== "value" && !ls(ue) && r(M, ue, null, G[ue], b, T);
      "value" in G && r(M, "value", null, G.value, b), (x = G.onVnodeBeforeMount) && Qe(x, T, u);
    }
    X && Et(u, null, T, "beforeMount");
    const re = wa(S, q);
    re && q.beforeEnter(M), n(M, d, g), ((x = G && G.onVnodeMounted) || re || X) && Ee(() => {
      try {
        x && Qe(x, T, u), re && q.enter(M), X && Et(u, null, T, "mounted");
      } finally {
      }
    }, S);
  }, P = (u, d, g, T, S) => {
    if (g && v(u, g), T)
      for (let b = 0; b < T.length; b++)
        v(u, T[b]);
    if (S) {
      let b = S.subTree;
      if (d === b || wo(b.type) && (b.ssContent === d || b.ssFallback === d)) {
        const F = S.vnode;
        P(
          u,
          F,
          F.scopeId,
          F.slotScopeIds,
          S.parent
        );
      }
    }
  }, N = (u, d, g, T, S, b, F, L, M = 0) => {
    for (let x = M; x < u.length; x++) {
      const G = u[x] = L ? ft(u[x]) : st(u[x]);
      I(
        null,
        G,
        d,
        g,
        T,
        S,
        b,
        F,
        L
      );
    }
  }, _ = (u, d, g, T, S, b, F) => {
    const L = d.el = u.el;
    let { patchFlag: M, dynamicChildren: x, dirs: G } = d;
    M |= u.patchFlag & 16;
    const U = u.props || fe, q = d.props || fe;
    let X;
    if (g && kt(g, !1), (X = q.onVnodeBeforeUpdate) && Qe(X, g, d, u), G && Et(d, u, g, "beforeUpdate"), g && kt(g, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    x && (!u.dynamicChildren || u.dynamicChildren.length !== x.length) && (M = 0, F = !1, x = null), (U.innerHTML && q.innerHTML == null || U.textContent && q.textContent == null) && c(L, ""), x ? j(
      u.dynamicChildren,
      x,
      L,
      g,
      T,
      kn(d, S),
      b
    ) : F || se(
      u,
      d,
      L,
      null,
      g,
      T,
      kn(d, S),
      b,
      !1
    ), M > 0) {
      if (M & 16)
        Y(L, U, q, g, S);
      else if (M & 2 && U.class !== q.class && r(L, "class", null, q.class, S), M & 4 && r(L, "style", U.style, q.style, S), M & 8) {
        const re = d.dynamicProps;
        for (let ue = 0; ue < re.length; ue++) {
          const ce = re[ue], be = U[ce], Ce = q[ce];
          (Ce !== be || ce === "value") && r(L, ce, be, Ce, S, g);
        }
      }
      M & 1 && u.children !== d.children && c(L, d.children);
    } else !F && x == null && Y(L, U, q, g, S);
    ((X = q.onVnodeUpdated) || G) && Ee(() => {
      X && Qe(X, g, d, u), G && Et(d, u, g, "updated");
    }, T);
  }, j = (u, d, g, T, S, b, F) => {
    for (let L = 0; L < d.length; L++) {
      const M = u[L], x = d[L], G = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        M.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (M.type === ie || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Lt(M, x) || // - In the case of a component, it could contain anything.
        M.shapeFlag & 198) ? h(M.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      I(
        M,
        x,
        G,
        null,
        T,
        S,
        b,
        F,
        !0
      );
    }
  }, Y = (u, d, g, T, S) => {
    if (d !== g) {
      if (d !== fe)
        for (const b in d)
          !ls(b) && !(b in g) && r(
            u,
            b,
            d[b],
            null,
            S,
            T
          );
      for (const b in g) {
        if (ls(b)) continue;
        const F = g[b], L = d[b];
        F !== L && b !== "value" && r(u, b, L, F, S, T);
      }
      "value" in g && r(u, "value", d.value, g.value, S);
    }
  }, E = (u, d, g, T, S, b, F, L, M) => {
    const x = d.el = u ? u.el : l(""), G = d.anchor = u ? u.anchor : l("");
    let { patchFlag: U, dynamicChildren: q, slotScopeIds: X } = d;
    X && (L = L ? L.concat(X) : X), u == null ? (n(x, g, T), n(G, g, T), N(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      g,
      G,
      S,
      b,
      F,
      L,
      M
    )) : U > 0 && U & 64 && q && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === q.length ? (j(
      u.dynamicChildren,
      q,
      g,
      S,
      b,
      F,
      L
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || S && d === S.subTree) && fi(
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
      F,
      L,
      M
    );
  }, B = (u, d, g, T, S, b, F, L, M) => {
    d.slotScopeIds = L, u == null ? d.shapeFlag & 512 ? S.ctx.activate(
      d,
      g,
      T,
      F,
      M
    ) : Z(
      d,
      g,
      T,
      S,
      b,
      F,
      M
    ) : _e(u, d, M);
  }, Z = (u, d, g, T, S, b, F) => {
    const L = u.component = Pa(
      u,
      T,
      S
    );
    if (fn(u) && (L.ctx.renderer = Zt), La(L, !1, F), L.asyncDep) {
      if (S && S.registerDep(L, W, F), !u.el) {
        const M = L.subTree = ne(Me);
        A(null, M, d, g), u.placeholder = M.el;
      }
    } else
      W(
        L,
        u,
        d,
        g,
        S,
        b,
        F
      );
  }, _e = (u, d, g) => {
    const T = d.component = u.component;
    if (da(u, d, g))
      if (T.asyncDep && !T.asyncResolved) {
        K(T, d, g);
        return;
      } else
        T.next = d, T.update();
    else
      d.el = u.el, T.vnode = d;
  }, W = (u, d, g, T, S, b, F) => {
    const L = () => {
      if (u.isMounted) {
        let { next: U, bu: q, u: X, parent: re, vnode: ue } = u;
        {
          const Xe = bo(u);
          if (Xe) {
            U && (U.el = ue.el, K(u, U, F)), Xe.asyncDep.then(() => {
              Ee(() => {
                u.isUnmounted || x();
              }, S);
            });
            return;
          }
        }
        let ce = U, be;
        kt(u, !1), U ? (U.el = ue.el, K(u, U, F)) : U = ue, q && Us(q), (be = U.props && U.props.onVnodeBeforeUpdate) && Qe(be, re, U, ue), kt(u, !0);
        const Ce = Ri(u), Ye = u.subTree;
        u.subTree = Ce, I(
          Ye,
          Ce,
          // parent may have changed if it's in a teleport
          h(Ye.el),
          // anchor may have changed if it's in a fragment
          Ms(Ye),
          u,
          S,
          b
        ), U.el = Ce.el, ce === null && ha(u, Ce.el), X && Ee(X, S), (be = U.props && U.props.onVnodeUpdated) && Ee(
          () => Qe(be, re, U, ue),
          S
        );
      } else {
        let U;
        const { el: q, props: X } = d, { bm: re, m: ue, parent: ce, root: be, type: Ce } = u, Ye = ds(d);
        kt(u, !1), re && Us(re), !Ye && (U = X && X.onVnodeBeforeMount) && Qe(U, ce, d), kt(u, !0);
        {
          be.ce && be.ce._hasShadowRoot() && be.ce._injectChildStyle(
            Ce,
            u.parent ? u.parent.type : void 0
          );
          const Xe = u.subTree = Ri(u);
          I(
            null,
            Xe,
            g,
            T,
            u,
            S,
            b
          ), d.el = Xe.el;
        }
        if (ue && Ee(ue, S), !Ye && (U = X && X.onVnodeMounted)) {
          const Xe = d;
          Ee(
            () => Qe(U, ce, Xe),
            S
          );
        }
        (d.shapeFlag & 256 || ce && ds(ce.vnode) && ce.vnode.shapeFlag & 256) && u.a && Ee(u.a, S), u.isMounted = !0, d = g = T = null;
      }
    };
    u.scope.on();
    const M = u.effect = new Er(L);
    u.scope.off();
    const x = u.update = M.run.bind(M), G = u.job = M.runIfDirty.bind(M);
    G.i = u, G.id = u.uid, M.scheduler = () => li(G), kt(u, !0), x();
  }, K = (u, d, g) => {
    d.component = u;
    const T = u.vnode.props;
    u.vnode = d, u.next = null, ga(u, d.props, T, g), _a(u, d.children, g), rt(), xi(u), ot();
  }, se = (u, d, g, T, S, b, F, L, M = !1) => {
    const x = u && u.children, G = u ? u.shapeFlag : 0, U = d.children, { patchFlag: q, shapeFlag: X } = d;
    if (q > 0) {
      if (q & 128) {
        xe(
          x,
          U,
          g,
          T,
          S,
          b,
          F,
          L,
          M
        );
        return;
      } else if (q & 256) {
        ve(
          x,
          U,
          g,
          T,
          S,
          b,
          F,
          L,
          M
        );
        return;
      }
    }
    X & 8 ? (G & 16 && Xt(x, S, b), U !== x && c(g, U)) : G & 16 ? X & 16 ? xe(
      x,
      U,
      g,
      T,
      S,
      b,
      F,
      L,
      M
    ) : Xt(x, S, b, !0) : (G & 8 && c(g, ""), X & 16 && N(
      U,
      g,
      T,
      S,
      b,
      F,
      L,
      M
    ));
  }, ve = (u, d, g, T, S, b, F, L, M) => {
    u = u || Wt, d = d || Wt;
    const x = u.length, G = d.length, U = Math.min(x, G);
    let q;
    for (q = 0; q < U; q++) {
      const X = d[q] = M ? ft(d[q]) : st(d[q]);
      I(
        u[q],
        X,
        g,
        null,
        S,
        b,
        F,
        L,
        M
      );
    }
    x > G ? Xt(
      u,
      S,
      b,
      !0,
      !1,
      U
    ) : N(
      d,
      g,
      T,
      S,
      b,
      F,
      L,
      M,
      U
    );
  }, xe = (u, d, g, T, S, b, F, L, M) => {
    let x = 0;
    const G = d.length;
    let U = u.length - 1, q = G - 1;
    for (; x <= U && x <= q; ) {
      const X = u[x], re = d[x] = M ? ft(d[x]) : st(d[x]);
      if (Lt(X, re))
        I(
          X,
          re,
          g,
          null,
          S,
          b,
          F,
          L,
          M
        );
      else
        break;
      x++;
    }
    for (; x <= U && x <= q; ) {
      const X = u[U], re = d[q] = M ? ft(d[q]) : st(d[q]);
      if (Lt(X, re))
        I(
          X,
          re,
          g,
          null,
          S,
          b,
          F,
          L,
          M
        );
      else
        break;
      U--, q--;
    }
    if (x > U) {
      if (x <= q) {
        const X = q + 1, re = X < G ? d[X].el : T;
        for (; x <= q; )
          I(
            null,
            d[x] = M ? ft(d[x]) : st(d[x]),
            g,
            re,
            S,
            b,
            F,
            L,
            M
          ), x++;
      }
    } else if (x > q)
      for (; x <= U; )
        Le(u[x], S, b, !0), x++;
    else {
      const X = x, re = x, ue = /* @__PURE__ */ new Map();
      for (x = re; x <= q; x++) {
        const Oe = d[x] = M ? ft(d[x]) : st(d[x]);
        Oe.key != null && ue.set(Oe.key, x);
      }
      let ce, be = 0;
      const Ce = q - re + 1;
      let Ye = !1, Xe = 0;
      const Qt = new Array(Ce);
      for (x = 0; x < Ce; x++) Qt[x] = 0;
      for (x = X; x <= U; x++) {
        const Oe = u[x];
        if (be >= Ce) {
          Le(Oe, S, b, !0);
          continue;
        }
        let Ze;
        if (Oe.key != null)
          Ze = ue.get(Oe.key);
        else
          for (ce = re; ce <= q; ce++)
            if (Qt[ce - re] === 0 && Lt(Oe, d[ce])) {
              Ze = ce;
              break;
            }
        Ze === void 0 ? Le(Oe, S, b, !0) : (Qt[Ze - re] = x + 1, Ze >= Xe ? Xe = Ze : Ye = !0, I(
          Oe,
          d[Ze],
          g,
          null,
          S,
          b,
          F,
          L,
          M
        ), be++);
      }
      const pi = Ye ? Sa(Qt) : Wt;
      for (ce = pi.length - 1, x = Ce - 1; x >= 0; x--) {
        const Oe = re + x, Ze = d[Oe], gi = d[Oe + 1], mi = Oe + 1 < G ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          gi.el || xo(gi)
        ) : T;
        Qt[x] === 0 ? I(
          null,
          Ze,
          g,
          mi,
          S,
          b,
          F,
          L,
          M
        ) : Ye && (ce < 0 || x !== pi[ce] ? ze(Ze, g, mi, 2) : ce--);
      }
    }
  }, ze = (u, d, g, T, S = null) => {
    const { el: b, type: F, transition: L, children: M, shapeFlag: x } = u;
    if (x & 6) {
      ze(u.component.subTree, d, g, T);
      return;
    }
    if (x & 128) {
      u.suspense.move(d, g, T);
      return;
    }
    if (x & 64) {
      F.move(u, d, g, Zt);
      return;
    }
    if (F === ie) {
      n(b, d, g);
      for (let U = 0; U < M.length; U++)
        ze(M[U], d, g, T);
      n(u.anchor, d, g);
      return;
    }
    if (F === Hs) {
      H(u, d, g);
      return;
    }
    if (T !== 2 && x & 1 && L)
      if (T === 0)
        L.persisted && !b[Ve] ? n(b, d, g) : (L.beforeEnter(b), n(b, d, g), Ee(() => L.enter(b), S));
      else {
        const { leave: U, delayLeave: q, afterLeave: X } = L, re = () => {
          u.ctx.isUnmounted ? i(b) : n(b, d, g);
        }, ue = () => {
          const ce = b._isLeaving || !!b[Ve];
          b._isLeaving && b[Ve](
            !0
            /* cancelled */
          ), L.persisted && !ce ? re() : U(b, () => {
            re(), X && X();
          });
        };
        q ? q(b, re, ue) : ue();
      }
    else
      n(b, d, g);
  }, Le = (u, d, g, T = !1, S = !1) => {
    const {
      type: b,
      props: F,
      ref: L,
      children: M,
      dynamicChildren: x,
      shapeFlag: G,
      patchFlag: U,
      dirs: q,
      cacheIndex: X,
      memo: re
    } = u;
    if (U === -2 && (S = !1), L != null && (rt(), fs(L, null, g, u, !0), ot()), X != null && (d.renderCache[X] = void 0), G & 256) {
      d.ctx.deactivate(u);
      return;
    }
    const ue = G & 1 && q, ce = !ds(u);
    let be;
    if (ce && (be = F && F.onVnodeBeforeUnmount) && Qe(be, d, u), G & 6)
      Fo(u.component, g, T);
    else {
      if (G & 128) {
        u.suspense.unmount(g, T);
        return;
      }
      ue && Et(u, null, d, "beforeUnmount"), G & 64 ? u.type.remove(
        u,
        d,
        g,
        Zt,
        T
      ) : x && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !x.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== ie || U > 0 && U & 64) ? Xt(
        x,
        d,
        g,
        !1,
        !0
      ) : (b === ie && U & 384 || !S && G & 16) && Xt(M, d, g), T && As(u);
    }
    const Ce = re != null && X == null;
    (ce && (be = F && F.onVnodeUnmounted) || ue || Ce) && Ee(() => {
      be && Qe(be, d, u), ue && Et(u, null, d, "unmounted"), Ce && (u.el = null);
    }, g);
  }, As = (u) => {
    const { type: d, el: g, anchor: T, transition: S } = u;
    if (d === ie) {
      _n(g, T);
      return;
    }
    if (d === Hs) {
      R(u);
      return;
    }
    const b = () => {
      i(g), S && !S.persisted && S.afterLeave && S.afterLeave();
    };
    if (u.shapeFlag & 1 && S && !S.persisted) {
      const { leave: F, delayLeave: L } = S, M = () => F(g, b);
      L ? L(u.el, b, M) : M();
    } else
      b();
  }, _n = (u, d) => {
    let g;
    for (; u !== d; )
      g = m(u), i(u), u = g;
    i(d);
  }, Fo = (u, d, g) => {
    const { bum: T, scope: S, job: b, subTree: F, um: L, m: M, a: x } = u;
    $i(M), $i(x), T && Us(T), S.stop(), b && (b.flags |= 8, Le(F, u, d, g)), L && Ee(L, d), Ee(() => {
      u.isUnmounted = !0;
    }, d);
  }, Xt = (u, d, g, T = !1, S = !1, b = 0) => {
    for (let F = b; F < u.length; F++)
      Le(u[F], d, g, T, S);
  }, Ms = (u) => {
    if (u.shapeFlag & 6)
      return Ms(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const d = m(u.anchor || u.el), g = d && d[Yr];
    return g ? m(g) : d;
  };
  let bn = !1;
  const hi = (u, d, g) => {
    let T;
    u == null ? d._vnode && (Le(d._vnode, null, null, !0), T = d._vnode.component) : I(
      d._vnode || null,
      u,
      d,
      null,
      null,
      null,
      g
    ), d._vnode = u, bn || (bn = !0, xi(T), Wr(), bn = !1);
  }, Zt = {
    p: I,
    um: Le,
    m: ze,
    r: As,
    mt: Z,
    mc: N,
    pc: se,
    pbc: j,
    n: Ms,
    o: e
  };
  return {
    render: hi,
    hydrate: void 0,
    createApp: oa(hi)
  };
}
function kn({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function kt({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function wa(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function fi(e, t, s = !1) {
  const n = e.children, i = t.children;
  if (J(n) && J(i))
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = ft(i[r]), l.el = o.el), !s && l.patchFlag !== -2 && fi(o, l)), l.type === gn && (l.patchFlag === -1 && (l = i[r] = ft(l)), l.el = o.el), l.type === Me && !l.el && (l.el = o.el);
    }
}
function Sa(e) {
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
function bo(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : bo(t);
}
function $i(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function xo(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? xo(t.subTree) : null;
}
const wo = (e) => e.__isSuspense;
function Ca(e, t) {
  t && t.pendingBranch ? J(e) ? t.effects.push(...e) : t.effects.push(e) : Al(e);
}
const ie = /* @__PURE__ */ Symbol.for("v-fgt"), gn = /* @__PURE__ */ Symbol.for("v-txt"), Me = /* @__PURE__ */ Symbol.for("v-cmt"), Hs = /* @__PURE__ */ Symbol.for("v-stc"), ps = [];
let Fe = null;
function k(e = !1) {
  ps.push(Fe = e ? null : []);
}
function Ia() {
  ps.pop(), Fe = ps[ps.length - 1] || null;
}
let Ss = 1;
function Gs(e, t = !1) {
  Ss += e, e < 0 && Fe && t && (Fe.hasOnce = !0);
}
function So(e) {
  return e.dynamicChildren = Ss > 0 ? Fe || Wt : null, Ia(), Ss > 0 && Fe && Fe.push(e), e;
}
function O(e, t, s, n, i, r) {
  return So(
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
function gt(e, t, s, n, i) {
  return So(
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
function Ys(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Lt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Co = ({ key: e }) => e ?? null, Vs = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? ge(e) || /* @__PURE__ */ me(e) || ee(e) ? { i: Be, r: e, k: t, f: !!s } : e : null);
function p(e, t = null, s = null, n = 0, i = null, r = e === ie ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Co(t),
    ref: t && Vs(t),
    scopeId: zr,
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
    ctx: Be
  };
  return l ? (Xs(a, s), r & 128 && e.normalize(a)) : s && (a.shapeFlag |= ge(s) ? 8 : 16), Ss > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Fe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Fe.push(a), a;
}
const ne = Ta;
function Ta(e, t = null, s = null, n = 0, i = null, r = !1) {
  if ((!e || e === Zl) && (e = Me), Ys(e)) {
    const l = St(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Xs(l, s), Ss > 0 && !r && Fe && (l.shapeFlag & 6 ? Fe[Fe.indexOf(e)] = l : Fe.push(l)), l.patchFlag = -2, l;
  }
  if (Na(e) && (e = e.__vccOpts), t) {
    t = Ea(t);
    let { class: l, style: a } = t;
    l && !ge(l) && (t.class = ye(l)), ae(a) && (/* @__PURE__ */ cn(a) && !J(a) && (a = Se({}, a)), t.style = $t(a));
  }
  const o = ge(e) ? 1 : wo(e) ? 128 : Xr(e) ? 64 : ae(e) ? 4 : ee(e) ? 2 : 0;
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
function Ea(e) {
  return e ? /* @__PURE__ */ cn(e) || po(e) ? Se({}, e) : e : null;
}
function St(e, t, s = !1, n = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: a } = e, f = t ? Aa(i || {}, t) : i, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && Co(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && r ? J(r) ? r.concat(Vs(t)) : [r, Vs(t)] : Vs(t)
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
    patchFlag: t && e.type !== ie ? o === -1 ? 16 : o | 16 : o,
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
function ka(e = " ", t = 0) {
  return ne(gn, null, e, t);
}
function Os(e, t) {
  const s = ne(Hs, null, e);
  return s.staticCount = t, s;
}
function Pe(e = "", t = !1) {
  return t ? (k(), gt(Me, null, e)) : ne(Me, null, e);
}
function st(e) {
  return e == null || typeof e == "boolean" ? ne(Me) : J(e) ? ne(
    ie,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ys(e) ? ft(e) : ne(gn, null, String(e));
}
function ft(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : St(e);
}
function Xs(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (J(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Xs(e, i()), i._c && (i._d = !0));
      return;
    } else {
      s = 32;
      const i = t._;
      !i && !po(t) ? t._ctx = Be : i === 3 && Be && (Be.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ee(t)) {
    if (n & 65) {
      Xs(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Be }, s = 32;
  } else
    t = String(t), n & 64 ? (s = 16, t = [ka(t)]) : s = 8;
  e.children = t, e.shapeFlag |= s;
}
function Aa(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = ye([t.class, n.class]));
      else if (i === "style")
        t.style = $t([t.style, n.style]);
      else if (tn(i)) {
        const r = t[i], o = n[i];
        o && r !== o && !(J(r) && r.includes(o)) ? t[i] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !sn(i) && (t[i] = o);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function Qe(e, t, s, n = null) {
  Ke(e, t, 7, [
    s,
    n
  ]);
}
const Ma = ao();
let Ra = 0;
function Pa(e, t, s) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || Ma, r = {
    uid: Ra++,
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
    scope: new Cr(
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
    propsOptions: mo(n, i),
    emitsOptions: co(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: fe,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: fe,
    data: fe,
    props: fe,
    attrs: fe,
    slots: fe,
    refs: fe,
    setupState: fe,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = aa.bind(null, r), e.ce && e.ce(r), r;
}
let Re = null;
const di = () => Re || Be;
let Zs, zn;
{
  const e = on(), t = (s, n) => {
    let i;
    return (i = e[s]) || (i = e[s] = []), i.push(n), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  Zs = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => Re = s
  ), zn = t(
    "__VUE_SSR_SETTERS__",
    (s) => Cs = s
  );
}
const ks = (e) => {
  const t = Re;
  return Zs(e), e.scope.on(), () => {
    e.scope.off(), Zs(t);
  };
}, Oi = () => {
  Re && Re.scope.off(), Zs(null);
};
function Io(e) {
  return e.vnode.shapeFlag & 4;
}
let Cs = !1;
function La(e, t = !1, s = !1) {
  t && zn(t);
  const { props: n, children: i } = e.vnode, r = Io(e);
  pa(e, n, r, t), ya(e, i, s || t);
  const o = r ? $a(e, t) : void 0;
  return t && zn(!1), o;
}
function $a(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ql);
  const { setup: n } = s;
  if (n) {
    rt();
    const i = e.setupContext = n.length > 1 ? Da(e) : null, r = ks(e), o = Es(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = mr(o);
    if (ot(), r(), (l || e.sp) && !ds(e) && no(e), l) {
      if (o.then(Oi, Oi), t)
        return o.then((a) => {
          Di(e, a);
        }).catch((a) => {
          un(a, e, 0);
        });
      e.asyncDep = o;
    } else
      Di(e, o);
  } else
    To(e);
}
function Di(e, t, s) {
  ee(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ae(t) && (e.setupState = Vr(t)), To(e);
}
function To(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || it);
  {
    const i = ks(e);
    rt();
    try {
      ea(e);
    } finally {
      ot(), i();
    }
  }
}
const Oa = {
  get(e, t) {
    return Ie(e, "get", ""), e[t];
  }
};
function Da(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, Oa),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function mn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Vr(oi(e.exposed)), {
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
function Na(e) {
  return ee(e) && "__vccOpts" in e;
}
const $e = (e, t) => /* @__PURE__ */ Cl(e, t, Cs);
function Fa(e, t, s) {
  try {
    Gs(-1);
    const n = arguments.length;
    return n === 2 ? ae(t) && !J(t) ? Ys(t) ? ne(e, null, [t]) : ne(e, t) : ne(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && Ys(s) && (s = [s]), ne(e, t, s));
  } finally {
    Gs(1);
  }
}
const Ua = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let qn;
const Ni = typeof window < "u" && window.trustedTypes;
if (Ni)
  try {
    qn = /* @__PURE__ */ Ni.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Eo = qn ? (e) => qn.createHTML(e) : (e) => e, Ha = "http://www.w3.org/2000/svg", Va = "http://www.w3.org/1998/Math/MathML", ct = typeof document < "u" ? document : null, Fi = ct && /* @__PURE__ */ ct.createElement("template"), ja = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const i = t === "svg" ? ct.createElementNS(Ha, e) : t === "mathml" ? ct.createElementNS(Va, e) : s ? ct.createElement(e, { is: s }) : ct.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => ct.createTextNode(e),
  createComment: (e) => ct.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ct.querySelector(e),
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
      Fi.innerHTML = Eo(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Fi.content;
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
}, yt = "transition", ss = "animation", Is = /* @__PURE__ */ Symbol("_vtc"), ko = {
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
}, Ba = /* @__PURE__ */ Se(
  {},
  Zr,
  ko
), Wa = (e) => (e.displayName = "Transition", e.props = Ba, e), Ka = /* @__PURE__ */ Wa(
  (e, { slots: t }) => Fa(Vl, za(e), t)
), At = (e, t = []) => {
  J(e) ? e.forEach((s) => s(...t)) : e && e(...t);
}, Ui = (e) => e ? J(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function za(e) {
  const t = {};
  for (const E in e)
    E in ko || (t[E] = e[E]);
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
  } = e, C = qa(i), I = C && C[0], D = C && C[1], {
    onBeforeEnter: A,
    onEnter: y,
    onEnterCancelled: H,
    onLeave: R,
    onLeaveCancelled: z,
    onBeforeAppear: Q = A,
    onAppear: P = y,
    onAppearCancelled: N = H
  } = t, _ = (E, B, Z, _e) => {
    E._enterCancelled = _e, Mt(E, B ? c : l), Mt(E, B ? f : o), Z && Z();
  }, j = (E, B) => {
    E._isLeaving = !1, Mt(E, h), Mt(E, v), Mt(E, m), B && B();
  }, Y = (E) => (B, Z) => {
    const _e = E ? P : y, W = () => _(B, E, Z);
    At(_e, [B, W]), Hi(() => {
      Mt(B, E ? a : r), at(B, E ? c : l), Ui(_e) || Vi(B, n, I, W);
    });
  };
  return Se(t, {
    onBeforeEnter(E) {
      At(A, [E]), at(E, r), at(E, o);
    },
    onBeforeAppear(E) {
      At(Q, [E]), at(E, a), at(E, f);
    },
    onEnter: Y(!1),
    onAppear: Y(!0),
    onLeave(E, B) {
      E._isLeaving = !0;
      const Z = () => j(E, B);
      at(E, h), E._enterCancelled ? (at(E, m), Wi(E)) : (Wi(E), at(E, m)), Hi(() => {
        E._isLeaving && (Mt(E, h), at(E, v), Ui(R) || Vi(E, n, D, Z));
      }), At(R, [E, Z]);
    },
    onEnterCancelled(E) {
      _(E, !1, void 0, !0), At(H, [E]);
    },
    onAppearCancelled(E) {
      _(E, !0, void 0, !0), At(N, [E]);
    },
    onLeaveCancelled(E) {
      j(E), At(z, [E]);
    }
  });
}
function qa(e) {
  if (e == null)
    return null;
  if (ae(e))
    return [An(e.enter), An(e.leave)];
  {
    const t = An(e);
    return [t, t];
  }
}
function An(e) {
  return Bo(e);
}
function at(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.add(s)), (e[Is] || (e[Is] = /* @__PURE__ */ new Set())).add(t);
}
function Mt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const s = e[Is];
  s && (s.delete(t), s.size || (e[Is] = void 0));
}
function Hi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ja = 0;
function Vi(e, t, s, n) {
  const i = e._endId = ++Ja, r = () => {
    i === e._endId && n();
  };
  if (s != null)
    return setTimeout(r, s);
  const { type: o, timeout: l, propCount: a } = Ga(e, t);
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
function Ga(e, t) {
  const s = window.getComputedStyle(e), n = (C) => (s[C] || "").split(", "), i = n(`${yt}Delay`), r = n(`${yt}Duration`), o = ji(i, r), l = n(`${ss}Delay`), a = n(`${ss}Duration`), f = ji(l, a);
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
function ji(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((s, n) => Bi(s) + Bi(e[n])));
}
function Bi(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Wi(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ya(e, t, s) {
  const n = e[Is];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const Qs = /* @__PURE__ */ Symbol("_vod"), Ao = /* @__PURE__ */ Symbol("_vsh"), Ds = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: s }) {
    e[Qs] = e.style.display === "none" ? "" : e.style.display, s && t ? s.beforeEnter(e) : ns(e, t);
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
  e.style.display = t ? e[Qs] : "none", e[Ao] = !t;
}
const Xa = /* @__PURE__ */ Symbol(""), Za = /(?:^|;)\s*display\s*:/;
function Qa(e, t, s) {
  const n = e.style, i = ge(s);
  let r = !1;
  if (s && !i) {
    if (t)
      if (ge(t))
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
      l != null ? tc(
        e,
        o,
        !ge(t) && t ? t[o] : void 0,
        l
      ) || os(n, o, l) : os(n, o, "");
    }
  } else if (i) {
    if (t !== s) {
      const o = n[Xa];
      o && (s += ";" + o), n.cssText = s, r = Za.test(s);
    }
  } else t && e.removeAttribute("style");
  Qs in e && (e[Qs] = r ? n.display : "", e[Ao] && (n.display = "none"));
}
const Ki = /\s*!important$/;
function os(e, t, s) {
  if (J(s))
    s.forEach((n) => os(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = ec(e, t);
    Ki.test(s) ? e.setProperty(
      Ct(n),
      s.replace(Ki, ""),
      "important"
    ) : e[n] = s;
  }
}
const zi = ["Webkit", "Moz", "ms"], Mn = {};
function ec(e, t) {
  const s = Mn[t];
  if (s)
    return s;
  let n = qe(t);
  if (n !== "filter" && n in e)
    return Mn[t] = n;
  n = _r(n);
  for (let i = 0; i < zi.length; i++) {
    const r = zi[i] + n;
    if (r in e)
      return Mn[t] = r;
  }
  return t;
}
function tc(e, t, s, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && ge(n) && s === n;
}
const qi = "http://www.w3.org/1999/xlink";
function Ji(e, t, s, n, i, r = Go(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(qi, t.slice(6, t.length)) : e.setAttributeNS(qi, t, s) : s == null || r && !xr(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : We(s) ? String(s) : s
  );
}
function Gi(e, t, s, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? Eo(s) : s);
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
    l === "boolean" ? s = xr(s) : s == null && l === "string" ? (s = "", o = !0) : l === "number" && (s = 0, o = !0);
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
function sc(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Yi = /* @__PURE__ */ Symbol("_vei");
function nc(e, t, s, n, i = null) {
  const r = e[Yi] || (e[Yi] = {}), o = r[t];
  if (n && o)
    o.value = n;
  else {
    const [l, a] = oc(t);
    if (n) {
      const f = r[t] = cc(
        n,
        i
      );
      jt(e, l, f, a);
    } else o && (sc(e, l, o, a), r[t] = void 0);
  }
}
const ic = /(Once|Passive|Capture)$/, rc = /^on:?(?:Once|Passive|Capture)$/;
function oc(e) {
  let t, s;
  for (; (s = e.match(ic)) && !rc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - s[1].length), t[s[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Ct(e.slice(2)), t];
}
let Rn = 0;
const lc = /* @__PURE__ */ Promise.resolve(), ac = () => Rn || (lc.then(() => Rn = 0), Rn = Date.now());
function cc(e, t) {
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
        f && Ke(
          f,
          t,
          5,
          l
        );
      }
    } else
      Ke(
        i,
        t,
        5,
        [n]
      );
  };
  return s.value = e, s.attached = ac(), s;
}
const Xi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, uc = (e, t, s, n, i, r) => {
  const o = i === "svg";
  t === "class" ? Ya(e, n, o) : t === "style" ? Qa(e, s, n) : tn(t) ? sn(t) || nc(e, t, s, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : fc(e, t, n, o)) ? (Gi(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ji(e, t, n, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (dc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ge(n))) ? Gi(e, qe(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Ji(e, t, n, o));
};
function fc(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Xi(t) && ee(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Xi(t) && ge(s) ? !1 : t in e;
}
function dc(e, t) {
  const s = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!s)
    return !1;
  const n = qe(t);
  return Array.isArray(s) ? s.some((i) => qe(i) === n) : Object.keys(s).some((i) => qe(i) === n);
}
const Zi = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return J(t) ? (s) => Us(t, s) : t;
};
function hc(e) {
  e.target.composing = !0;
}
function Qi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Pn = /* @__PURE__ */ Symbol("_assign");
function er(e, t, s) {
  return t && (e = e.trim()), s && (e = Zn(e)), e;
}
const js = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, i) {
    e[Pn] = Zi(i);
    const r = n || i.props && i.props.type === "number";
    jt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Pn](er(e.value, s, r));
    }), (s || r) && jt(e, "change", () => {
      e.value = er(e.value, s, r);
    }), t || (jt(e, "compositionstart", hc), jt(e, "compositionend", Qi), jt(e, "change", Qi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: s, modifiers: { lazy: n, trim: i, number: r } }, o) {
    if (e[Pn] = Zi(o), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? Zn(e.value) : e.value, a = t ?? "";
    if (l === a)
      return;
    const f = e.getRootNode();
    (f instanceof Document || f instanceof ShadowRoot) && f.activeElement === e && e.type !== "range" && (n && t === s || i && e.value.trim() === a) || (e.value = a);
  }
}, pc = ["ctrl", "shift", "alt", "meta"], gc = {
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
  exact: (e, t) => pc.some((s) => e[`${s}Key`] && !t.includes(s))
}, Bt = (e, t) => {
  if (!e) return e;
  const s = e._withMods || (e._withMods = {}), n = t.join(".");
  return s[n] || (s[n] = (i, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const l = gc[t[o]];
      if (l && l(i, t)) return;
    }
    return e(i, ...r);
  });
}, mc = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Mo = (e, t) => {
  const s = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return s[n] || (s[n] = (i) => {
    if (!("key" in i))
      return;
    const r = Ct(i.key);
    if (t.some(
      (o) => o === r || mc[o] === r
    ))
      return e(i);
  });
}, vc = /* @__PURE__ */ Se({ patchProp: uc }, ja);
let tr;
function yc() {
  return tr || (tr = ba(vc));
}
const Ro = (...e) => {
  const t = yc().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const i = bc(n);
    if (!i) return;
    const r = t._component;
    !ee(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = s(i, !1, _c(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
};
function _c(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function bc(e) {
  return ge(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Po;
const vn = (e) => Po = e, Lo = (
  /* istanbul ignore next */
  Symbol()
);
function Jn(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var gs;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(gs || (gs = {}));
function xc() {
  const e = Ir(!0), t = e.run(() => /* @__PURE__ */ he({}));
  let s = [], n = [];
  const i = oi({
    install(r) {
      vn(i), i._a = r, r.provide(Lo, i), r.config.globalProperties.$pinia = i, n.forEach((o) => s.push(o)), n = [];
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
const $o = () => {
};
function sr(e, t, s, n = $o) {
  e.push(t);
  const i = () => {
    const r = e.indexOf(t);
    r > -1 && (e.splice(r, 1), n());
  };
  return !s && Tr() && Xo(i), i;
}
function Ut(e, ...t) {
  e.slice().forEach((s) => {
    s(...t);
  });
}
const wc = (e) => e(), nr = Symbol(), Ln = Symbol();
function Gn(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((s, n) => e.set(n, s)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const s in t) {
    if (!t.hasOwnProperty(s))
      continue;
    const n = t[s], i = e[s];
    Jn(i) && Jn(n) && e.hasOwnProperty(s) && !/* @__PURE__ */ me(n) && !/* @__PURE__ */ pt(n) ? e[s] = Gn(i, n) : e[s] = n;
  }
  return e;
}
const Sc = (
  /* istanbul ignore next */
  Symbol()
);
function Cc(e) {
  return !Jn(e) || !e.hasOwnProperty(Sc);
}
const { assign: xt } = Object;
function Ic(e) {
  return !!(/* @__PURE__ */ me(e) && e.effect);
}
function Tc(e, t, s, n) {
  const { state: i, actions: r, getters: o } = t, l = s.state.value[e];
  let a;
  function f() {
    l || (s.state.value[e] = i ? i() : {});
    const c = /* @__PURE__ */ bl(s.state.value[e]);
    return xt(c, r, Object.keys(o || {}).reduce((h, m) => (h[m] = oi($e(() => {
      vn(s);
      const v = s._s.get(e);
      return o[m].call(v, v);
    })), h), {}));
  }
  return a = Oo(e, f, t, s, n, !0), a;
}
function Oo(e, t, s = {}, n, i, r) {
  let o;
  const l = xt({ actions: {} }, s), a = { deep: !0 };
  let f, c, h = [], m = [], v;
  const C = n.state.value[e];
  !r && !C && (n.state.value[e] = {});
  let I;
  function D(N) {
    let _;
    f = c = !1, typeof N == "function" ? (N(n.state.value[e]), _ = {
      type: gs.patchFunction,
      storeId: e,
      events: v
    }) : (Gn(n.state.value[e], N), _ = {
      type: gs.patchObject,
      payload: N,
      storeId: e,
      events: v
    });
    const j = I = Symbol();
    De().then(() => {
      I === j && (f = !0);
    }), c = !0, Ut(h, _, n.state.value[e]);
  }
  const A = r ? function() {
    const { state: _ } = s, j = _ ? _() : {};
    this.$patch((Y) => {
      xt(Y, j);
    });
  } : (
    /* istanbul ignore next */
    $o
  );
  function y() {
    o.stop(), h = [], m = [], n._s.delete(e);
  }
  const H = (N, _ = "") => {
    if (nr in N)
      return N[Ln] = _, N;
    const j = function() {
      vn(n);
      const Y = Array.from(arguments), E = [], B = [];
      function Z(K) {
        E.push(K);
      }
      function _e(K) {
        B.push(K);
      }
      Ut(m, {
        args: Y,
        name: j[Ln],
        store: z,
        after: Z,
        onError: _e
      });
      let W;
      try {
        W = N.apply(this && this.$id === e ? this : z, Y);
      } catch (K) {
        throw Ut(B, K), K;
      }
      return W instanceof Promise ? W.then((K) => (Ut(E, K), K)).catch((K) => (Ut(B, K), Promise.reject(K))) : (Ut(E, W), W);
    };
    return j[nr] = !0, j[Ln] = _, j;
  }, R = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: sr.bind(null, m),
    $patch: D,
    $reset: A,
    $subscribe(N, _ = {}) {
      const j = sr(h, N, _.detached, () => Y()), Y = o.run(() => Ne(() => n.state.value[e], (E) => {
        (_.flush === "sync" ? c : f) && N({
          storeId: e,
          type: gs.direct,
          events: v
        }, E);
      }, xt({}, a, _)));
      return j;
    },
    $dispose: y
  }, z = /* @__PURE__ */ an(R);
  n._s.set(e, z);
  const P = (n._a && n._a.runWithContext || wc)(() => n._e.run(() => (o = Ir()).run(() => t({ action: H }))));
  for (const N in P) {
    const _ = P[N];
    if (/* @__PURE__ */ me(_) && !Ic(_) || /* @__PURE__ */ pt(_))
      r || (C && Cc(_) && (/* @__PURE__ */ me(_) ? _.value = C[N] : Gn(_, C[N])), n.state.value[e][N] = _);
    else if (typeof _ == "function") {
      const j = H(_, N);
      P[N] = j, l.actions[N] = _;
    }
  }
  return xt(z, P), xt(/* @__PURE__ */ oe(z), P), Object.defineProperty(z, "$state", {
    get: () => n.state.value[e],
    set: (N) => {
      D((_) => {
        xt(_, N);
      });
    }
  }), n._p.forEach((N) => {
    xt(z, o.run(() => N({
      store: z,
      app: n._a,
      pinia: n,
      options: l
    })));
  }), C && r && s.hydrate && s.hydrate(z.$state, C), f = !0, c = !0, z;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function yn(e, t, s) {
  let n, i;
  const r = typeof t == "function";
  typeof e == "string" ? (n = e, i = r ? s : t) : (i = e, n = e.id);
  function o(l, a) {
    const f = Rl();
    return l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    l || (f ? us(Lo, null) : null), l && vn(l), l = Po, l._s.has(n) || (r ? Oo(n, t, i, l) : Tc(n, i, l)), l._s.get(n);
  }
  return o.$id = n, o;
}
function Ec() {
  return [
    { id: "netease", enabled: !0, priority: 0, config: { baseURL: "" } },
    { id: "local", enabled: !0, priority: 1, config: {} },
    { id: "custom", enabled: !1, priority: 2, config: { searchURL: "", resolveURL: "" } }
  ];
}
function $n() {
  return {
    volume: 65,
    playMode: "list",
    position: null,
    widgetMode: "dock",
    dockAlign: "left",
    autoPlayOnNewCue: !0,
    providers: Ec(),
    customCueRules: []
  };
}
const ke = /* @__PURE__ */ yn("settings", {
  state: () => ({
    settings: $n(),
    storage: null
  }),
  getters: {
    defaults: () => $n()
  },
  actions: {
    init(e) {
      this.storage = e;
      const t = e.getSettings(), s = $n();
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
class kc {
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
const ir = /\[(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?\]/g;
function Ac(e) {
  const t = e.split(/\r?\n/), s = [];
  for (const n of t) {
    const i = new RegExp(ir.source, "g"), r = [];
    let o;
    for (; (o = i.exec(n)) !== null; ) {
      const a = parseInt(o[1], 10), f = parseInt(o[2], 10), c = o[3] ?? "", h = c ? parseInt(c.padEnd(3, "0"), 10) : 0;
      r.push(a * 60 + f + h / 1e3);
    }
    if (r.length === 0) continue;
    const l = n.replace(new RegExp(ir.source, "g"), "").trim();
    if (l !== "")
      for (const a of r)
        s.push({ time: a, text: l });
  }
  s.sort((n, i) => n.time - i.time);
  for (let n = 0; n < s.length; n++)
    n < s.length - 1 && (s[n].next = s[n + 1]);
  return s;
}
function rr(e, t) {
  if (e.length === 0) return null;
  let s = null;
  for (const n of e)
    if (n.time <= t)
      s = n;
    else
      break;
  return s;
}
class Mc {
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
function Rc() {
  return new Mc();
}
const ms = "st-music-player", or = "stmp_cursor", lr = "stmp_userlist";
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
class Lc {
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
class $c {
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
class Oc {
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
function Do(e) {
  const s = e.filter((n) => n.enabled).sort((n, i) => n.priority - i.priority).map((n) => {
    const i = n.config ?? {};
    switch (n.id) {
      case "netease":
        return new Lc({ baseURL: i.baseURL, apiBase: i.apiBase });
      case "local":
        return new $c({
          storage: i.storage ? i.storage : void 0
        });
      case "custom":
        return new Oc({
          searchURL: i.searchURL,
          resolveURL: i.resolveURL
        });
      default:
        return null;
    }
  }).filter((n) => n !== null);
  return new Pc(s);
}
const Dc = {
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
function Nc() {
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
function V(e) {
  return Nc().startsWith("zh") ? Dc[e] ?? e : e;
}
function Ns() {
  return `stmp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
const Yt = /* @__PURE__ */ yn("playlist", {
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
      return ke().settings.playMode;
    }
  },
  actions: {
    init(e) {
      this.chatIndexer = e;
    },
    setChatId(e) {
      this.chatId = e, this.list = this.list.filter((n) => n.source !== "chat"), this.loadFromStorage();
      const s = ke().storage;
      if (s) {
        const n = s.getMetadata(or);
        n && n.chatId === e && this.chatIndexer?.setCursor(e, n.lastScannedMessageId);
      }
    },
    loadFromStorage() {
      const t = ke().storage;
      if (!t || !this.chatId) return;
      const s = t.getMetadata(lr);
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
        id: Ns(),
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
        id: Ns(),
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
        id: Ns(),
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
      const s = ke(), n = s.storage;
      if (!n) return;
      let i = null;
      const r = Do(s.settings.providers);
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
        console.warn(`[playlist] resolve failed for "${t.song}"`), typeof toastr < "u" && toastr.warning(`${V("Cannot play")}: ${t.song}`);
        return;
      }
      await Nt().loadAndPlay(i);
    },
    handleNewCues(e) {
      if (e.length === 0) return;
      const t = ke();
      let s = null;
      for (const n of e)
        for (const i of n.cues) {
          const r = {
            id: Ns(),
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
      const t = ke(), s = this.chatIndexer.scanMessage(
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
      const t = ke().storage;
      if (!t || !this.chatId) return;
      const s = this.list.filter((n) => n.source === "user" || n.source === "local");
      t.setMetadata(lr, s);
    },
    getCursor() {
      return !this.chatIndexer || !this.chatId ? -1 : this.chatIndexer.getCursor(this.chatId);
    },
    setCursor(e) {
      if (!this.chatIndexer || !this.chatId) return;
      this.chatIndexer.setCursor(this.chatId, e);
      const s = ke().storage;
      s && s.setMetadata(or, {
        chatId: this.chatId,
        lastScannedMessageId: e,
        updatedAt: Date.now()
      });
    }
  }
}), Nt = /* @__PURE__ */ yn("player", {
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
      const e = new kc();
      this.audioEngine = e;
      const t = Nt();
      e.on("timeupdate", () => {
        if (!e) return;
        t.currentTime = e.currentTime, t.duration = e.duration;
        const s = rr(t.lyrics, e.currentTime), n = s ? t.lyrics.indexOf(s) : -1;
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
      this.volume = e, this.audioEngine?.setVolume(e / 100), ke().setVolume(e);
    },
    updateLyrics(e) {
      this.lyrics = Ac(e), this.currentLyricIndex = -1;
    },
    getActiveLyric() {
      return rr(this.lyrics, this.currentTime);
    },
    destroy() {
      this.audioEngine?.destroy(), this.audioEngine = null, this.isPlaying = !1, this.currentTime = 0, this.duration = 0, this.lyrics = [], this.currentLyricIndex = -1, this.currentTrack = null;
    }
  }
}), Fc = /* @__PURE__ */ yn("search", {
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
}), Uc = ["width", "height"], Hc = {
  key: 0,
  points: "6 3 20 12 6 21 6 3",
  fill: "currentColor",
  stroke: "none"
}, Vc = {
  key: 10,
  points: "6 9 12 15 18 9"
}, jc = {
  key: 11,
  points: "18 15 12 9 6 15"
}, Bc = {
  key: 15,
  points: "20 6 9 17 4 12"
}, Wc = /* @__PURE__ */ It({
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
      e.name === "play" ? (k(), O("polygon", Hc)) : e.name === "pause" ? (k(), O(ie, { key: 1 }, [
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
      ], 64)) : e.name === "prev" ? (k(), O(ie, { key: 2 }, [
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
      ], 64)) : e.name === "next" ? (k(), O(ie, { key: 3 }, [
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
      ], 64)) : e.name === "repeat" ? (k(), O(ie, { key: 4 }, [
        s[6] || (s[6] = p("polyline", { points: "17 1 21 5 17 9" }, null, -1)),
        s[7] || (s[7] = p("path", { d: "M3 11V9a4 4 0 0 1 4-4h14" }, null, -1)),
        s[8] || (s[8] = p("polyline", { points: "7 23 3 19 7 15" }, null, -1)),
        s[9] || (s[9] = p("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" }, null, -1))
      ], 64)) : e.name === "repeat-one" ? (k(), O(ie, { key: 5 }, [
        s[10] || (s[10] = Os('<polyline points="17 1 21 5 17 9" data-v-4bfc4099></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14" data-v-4bfc4099></path><polyline points="7 23 3 19 7 15" data-v-4bfc4099></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3" data-v-4bfc4099></path><text x="12" y="14" text-anchor="middle" font-size="8" fill="currentColor" stroke="none" font-weight="bold" data-v-4bfc4099>1</text>', 5))
      ], 64)) : e.name === "shuffle" ? (k(), O(ie, { key: 6 }, [
        s[11] || (s[11] = Os('<polyline points="16 3 21 3 21 8" data-v-4bfc4099></polyline><line x1="4" y1="20" x2="21" y2="3" data-v-4bfc4099></line><polyline points="21 16 21 21 16 21" data-v-4bfc4099></polyline><line x1="15" y1="15" x2="21" y2="21" data-v-4bfc4099></line><line x1="4" y1="4" x2="9" y2="9" data-v-4bfc4099></line>', 5))
      ], 64)) : e.name === "search" ? (k(), O(ie, { key: 7 }, [
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
      ], 64)) : e.name === "plus" ? (k(), O(ie, { key: 8 }, [
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
      ], 64)) : e.name === "x" ? (k(), O(ie, { key: 9 }, [
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
      ], 64)) : e.name === "chevron-down" ? (k(), O("polyline", Vc)) : e.name === "chevron-up" ? (k(), O("polyline", jc)) : e.name === "music" ? (k(), O(ie, { key: 12 }, [
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
      ], 64)) : e.name === "volume" ? (k(), O(ie, { key: 13 }, [
        s[21] || (s[21] = p("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[22] || (s[22] = p("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1)),
        s[23] || (s[23] = p("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }, null, -1))
      ], 64)) : e.name === "volume-mute" ? (k(), O(ie, { key: 14 }, [
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
      ], 64)) : e.name === "check" ? (k(), O("polyline", Bc)) : e.name === "loader" ? (k(), O(ie, { key: 16 }, [
        s[27] || (s[27] = Os('<line x1="12" y1="2" x2="12" y2="6" data-v-4bfc4099></line><line x1="12" y1="18" x2="12" y2="22" data-v-4bfc4099></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" data-v-4bfc4099></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" data-v-4bfc4099></line><line x1="2" y1="12" x2="6" y2="12" data-v-4bfc4099></line><line x1="18" y1="12" x2="22" y2="12" data-v-4bfc4099></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" data-v-4bfc4099></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" data-v-4bfc4099></line>', 8))
      ], 64)) : e.name === "list-music" ? (k(), O(ie, { key: 17 }, [
        s[28] || (s[28] = Os('<path d="M3 12h11" data-v-4bfc4099></path><path d="M3 6h11" data-v-4bfc4099></path><path d="M3 18h7" data-v-4bfc4099></path><path d="M16 8v13" data-v-4bfc4099></path><circle cx="14" cy="21" r="2" data-v-4bfc4099></circle><path d="M16 8l5-2v3" data-v-4bfc4099></path>', 6))
      ], 64)) : Pe("", !0)
    ], 8, Uc));
  }
}), Tt = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, i] of t)
    s[n] = i;
  return s;
}, pe = /* @__PURE__ */ Tt(Wc, [["__scopeId", "data-v-4bfc4099"]]), Kc = {
  key: 0,
  class: "stmp-mini stmp-mini-dock-desktop"
}, zc = {
  key: 0,
  class: "stmp-mini-cover"
}, qc = ["src"], Jc = {
  key: 1,
  class: "stmp-mini-cover stmp-mini-cover-placeholder"
}, Gc = {
  key: 1,
  class: "stmp-mini-text stmp-mini-dock-fallback"
}, Yc = { class: "stmp-mini-controls" }, Xc = ["aria-label"], Zc = ["aria-label"], Qc = {
  key: 1,
  class: "stmp-mini stmp-mini-dock-mobile"
}, eu = {
  key: 0,
  class: "stmp-mini-cover"
}, tu = ["src"], su = {
  key: 1,
  class: "stmp-mini-cover stmp-mini-cover-placeholder"
}, nu = {
  key: 1,
  class: "stmp-mini-text stmp-mini-dock-fallback"
}, iu = { class: "stmp-mini-controls" }, ru = ["aria-label"], ou = ["aria-label"], lu = {
  key: 2,
  class: "stmp-mini stmp-mini-drag stmp-mini-drag-idle"
}, au = { class: "stmp-mini-cover stmp-mini-cover-square" }, cu = {
  key: 3,
  class: "stmp-mini stmp-mini-drag"
}, uu = ["aria-label"], fu = ["src"], du = { class: "stmp-mini-cover-overlay" }, hu = { class: "stmp-mini-drag-right" }, pu = { class: "stmp-mini-text stmp-mini-text-drag" }, gu = /* @__PURE__ */ It({
  __name: "CollapsedBar",
  props: {
    isDock: { type: Boolean },
    isMobile: { type: Boolean }
  },
  setup(e) {
    const t = Nt(), s = Yt(), n = e, i = /* @__PURE__ */ he(!1), r = $e(() => t.currentTrack?.cover || ""), o = $e(() => !!t.currentTrack), l = $e(() => {
      const P = t.currentTrack;
      if (!P) return "";
      const N = P.name, _ = P.artist || "";
      return _ ? `${N} - ${_}` : N;
    }), a = $e(() => {
      const P = t.currentLyricIndex;
      return P < 0 || P >= t.lyrics.length ? "" : t.lyrics[P].text;
    }), f = $e(() => {
      const P = t.currentLyricIndex;
      if (P < 0 || P >= t.lyrics.length) return 0;
      const N = t.lyrics[P];
      return N.next ? Math.max(500, (N.next.time - N.time) * 1e3) : 5e3;
    }), c = /* @__PURE__ */ he(0), h = /* @__PURE__ */ he([]), m = /* @__PURE__ */ he(null);
    function v(P, N) {
      P && (h.value[N] = P);
    }
    async function C() {
      await De();
      const P = t.currentLyricIndex, N = m.value;
      if (!N || P < 0) {
        c.value = 0;
        return;
      }
      const _ = h.value[P];
      if (!_) return;
      const j = _.offsetTop, Y = _.offsetHeight, E = N.clientHeight;
      c.value = j - E / 2 + Y / 2;
    }
    Ne(() => t.currentLyricIndex, C), Ne(() => t.lyrics, () => {
      h.value = [], C();
    });
    const I = /* @__PURE__ */ he(null), D = /* @__PURE__ */ he(null), A = /* @__PURE__ */ he(0), y = /* @__PURE__ */ he(0);
    function H() {
      const P = I.value, N = D.value;
      if (!P || !N) {
        A.value = 0;
        return;
      }
      const _ = P.scrollWidth - N.clientWidth;
      _ > 3 && f.value > 0 ? (y.value = Math.max(200, f.value - 200), requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          A.value = -_;
        });
      })) : A.value = 0;
    }
    Ne(a, () => {
      y.value = 0, A.value = 0, De(() => requestAnimationFrame(H));
    });
    function R() {
      i.value = !0;
    }
    Ne(() => t.currentTrack?.url, () => {
      i.value = !1;
    });
    function z(P) {
      P.stopPropagation(), t.togglePlay();
    }
    function Q(P) {
      P.stopPropagation(), s.next();
    }
    return hn(() => {
      C(), requestAnimationFrame(H);
    }), (P, N) => n.isDock && !n.isMobile ? (k(), O("div", Kc, [
      r.value && !i.value ? (k(), O("div", zc, [
        p("img", {
          src: r.value,
          alt: "",
          onError: R
        }, null, 40, qc)
      ])) : (k(), O("div", Jc, [
        ne(pe, {
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
          (k(!0), O(ie, null, je(w(t).lyrics, (_, j) => (k(), O("span", {
            key: j,
            ref_for: !0,
            ref: (Y) => v(Y, j),
            class: ye(["stmp-mini-dock-line", { "stmp-mini-dock-line-active": j === w(t).currentLyricIndex }])
          }, te(_.text), 3))), 128))
        ], 4)) : (k(), O("span", Gc, te(l.value), 1))
      ], 512),
      p("div", Yc, [
        p("button", {
          class: "stmp-mini-btn",
          "aria-label": w(t).isPlaying ? w(V)("Pause") : w(V)("Play"),
          onClick: z
        }, [
          ne(pe, {
            name: w(t).isPlaying ? "pause" : "play",
            size: 14
          }, null, 8, ["name"])
        ], 8, Xc),
        p("button", {
          class: "stmp-mini-btn",
          "aria-label": w(V)("Next"),
          onClick: Q
        }, [
          ne(pe, {
            name: "next",
            size: 14
          })
        ], 8, Zc)
      ])
    ])) : n.isDock && n.isMobile ? (k(), O("div", Qc, [
      r.value && !i.value ? (k(), O("div", eu, [
        p("img", {
          src: r.value,
          alt: "",
          onError: R
        }, null, 40, tu)
      ])) : (k(), O("div", su, [
        ne(pe, {
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
          (k(!0), O(ie, null, je(w(t).lyrics, (_, j) => (k(), O("span", {
            key: j,
            ref_for: !0,
            ref: (Y) => v(Y, j),
            class: ye(["stmp-mini-dock-line", { "stmp-mini-dock-line-active": j === w(t).currentLyricIndex }])
          }, te(_.text), 3))), 128))
        ], 4)) : (k(), O("span", nu, te(l.value), 1))
      ], 512),
      p("div", iu, [
        p("button", {
          class: "stmp-mini-btn",
          "aria-label": w(t).isPlaying ? w(V)("Pause") : w(V)("Play"),
          onClick: z
        }, [
          ne(pe, {
            name: w(t).isPlaying ? "pause" : "play",
            size: 16
          }, null, 8, ["name"])
        ], 8, ru),
        p("button", {
          class: "stmp-mini-btn",
          "aria-label": w(V)("Next"),
          onClick: Q
        }, [
          ne(pe, {
            name: "next",
            size: 16
          })
        ], 8, ou)
      ])
    ])) : o.value ? (k(), O("div", cu, [
      p("button", {
        class: "stmp-mini-cover stmp-mini-cover-square",
        "aria-label": w(t).isPlaying ? w(V)("Pause") : w(V)("Play"),
        onClick: z
      }, [
        r.value && !i.value ? (k(), O("img", {
          key: 0,
          src: r.value,
          alt: "",
          onError: R
        }, null, 40, fu)) : (k(), gt(pe, {
          key: 1,
          name: "music",
          size: 20
        })),
        p("div", du, [
          ne(pe, {
            name: w(t).isPlaying ? "pause" : "play",
            size: 18
          }, null, 8, ["name"])
        ])
      ], 8, uu),
      p("div", hu, [
        p("span", pu, te(l.value), 1),
        p("div", {
          ref_key: "lyricContainerRef",
          ref: D,
          class: "stmp-mini-lyric"
        }, [
          p("span", {
            ref_key: "lyricScrollRef",
            ref: I,
            class: "stmp-mini-lyric-scroll",
            style: $t({
              transform: `translateX(${A.value}px)`,
              transition: y.value > 0 ? `transform ${y.value}ms linear` : "none"
            })
          }, te(a.value || " "), 5)
        ], 512)
      ])
    ])) : (k(), O("div", lu, [
      p("div", au, [
        ne(pe, {
          name: "music",
          size: 20
        })
      ])
    ]));
  }
}), ar = /* @__PURE__ */ Tt(gu, [["__scopeId", "data-v-f2316395"]]), mu = { class: "stmp-playlist" }, vu = {
  key: 0,
  class: "stmp-upload-area"
}, yu = ["aria-label"], _u = {
  key: 1,
  class: "stmp-empty"
}, bu = { class: "stmp-group-label" }, xu = ["onClick"], wu = { class: "stmp-item-index" }, Su = { class: "stmp-item-info" }, Cu = { class: "stmp-item-song" }, Iu = {
  key: 0,
  class: "stmp-item-artist"
}, Tu = ["onClick"], Eu = /* @__PURE__ */ It({
  __name: "PlaylistView",
  setup(e) {
    const t = Yt(), s = ke(), n = $e(() => s.settings.providers.find((h) => h.id === "local")?.enabled ?? !1), i = /* @__PURE__ */ he(null), r = () => {
      i.value?.click();
    }, o = async (h) => {
      const m = h.target;
      if (!m.files || !m.files[0]) return;
      const v = m.files[0], C = `stmp:audio:${Date.now()}-${v.name}`, I = s.storage;
      I && (await I.setBlob(C, v), t.addLocalFile(v.name, C)), m.value = "";
    }, l = $e(() => {
      const h = {
        chat: [],
        user: [],
        local: []
      };
      return t.list.forEach((m, v) => {
        h[m.source] && h[m.source].push({ index: v, item: m });
      }), h;
    }), a = {
      chat: V("From Chat"),
      user: V("My List"),
      local: V("Local Files")
    };
    function f(h) {
      t.play(h);
    }
    function c(h) {
      t.removeItem(h);
    }
    return (h, m) => (k(), O("div", mu, [
      n.value ? (k(), O("div", vu, [
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
          "aria-label": w(V)("Add local file"),
          onClick: r
        }, " + " + te(w(V)("Add local file")), 9, yu)
      ])) : Pe("", !0),
      w(t).isEmpty ? (k(), O("div", _u, te(w(V)("No Songs")), 1)) : (k(), O(ie, { key: 2 }, je(["chat", "user", "local"], (v) => p("div", {
        key: v,
        class: "stmp-group"
      }, [
        l.value[v].length ? (k(), O(ie, { key: 0 }, [
          p("div", bu, te(a[v]), 1),
          (k(!0), O(ie, null, je(l.value[v], (C) => (k(), O("div", {
            key: C.item.id,
            class: ye(["stmp-item", { active: C.index === w(t).currentIndex }]),
            onClick: (I) => f(C.index)
          }, [
            p("span", wu, te(C.index + 1), 1),
            p("div", Su, [
              p("span", Cu, te(C.item.song), 1),
              C.item.artist ? (k(), O("span", Iu, te(C.item.artist), 1)) : Pe("", !0)
            ]),
            p("button", {
              class: "stmp-item-del",
              onClick: Bt((I) => c(C.index), ["stop"])
            }, [
              ne(pe, {
                name: "x",
                size: 14
              })
            ], 8, Tu)
          ], 10, xu))), 128))
        ], 64)) : Pe("", !0)
      ])), 64))
    ]));
  }
}), ku = /* @__PURE__ */ Tt(Eu, [["__scopeId", "data-v-a0435f62"]]), Au = { class: "stmp-search" }, Mu = { class: "stmp-search-bar" }, Ru = ["placeholder"], Pu = ["disabled"], Lu = {
  key: 0,
  class: "stmp-search-error"
}, $u = ["aria-label"], Ou = {
  key: 1,
  class: "stmp-search-loading"
}, Du = {
  key: 2,
  class: "stmp-search-empty"
}, Nu = {
  key: 3,
  class: "stmp-search-hint"
}, Fu = {
  key: 4,
  class: "stmp-results"
}, Uu = ["onClick"], Hu = { class: "stmp-result-name" }, Vu = {
  key: 0,
  class: "stmp-result-artist"
}, ju = ["aria-label", "onClick"], Bu = /* @__PURE__ */ It({
  __name: "SearchView",
  setup(e) {
    const t = Fc(), s = Yt(), n = ke(), i = /* @__PURE__ */ he(t.keyword), r = /* @__PURE__ */ he(/* @__PURE__ */ new Set()), o = /* @__PURE__ */ he(null);
    async function l() {
      t.setKeyword(i.value);
      const v = Do(n.settings.providers);
      await t.search(v);
    }
    const a = () => {
      l();
    };
    function f(v) {
      const C = v.provider + v.id;
      if (o.value === C) return;
      o.value = C;
      const I = s.list.length;
      s.addFromSearch(v);
      const D = s.list.length - 1;
      D >= I && s.play(D), setTimeout(() => {
        r.value.add(C), o.value = null;
      }, 600);
    }
    function c(v) {
      const C = v.provider + v.id;
      r.value.has(C) || (s.addFromSearch(v), r.value.add(C));
    }
    function h(v) {
      return r.value.has(v.provider + v.id);
    }
    function m(v) {
      return o.value === v.provider + v.id;
    }
    return (v, C) => (k(), O("div", Au, [
      p("div", Mu, [
        _t(p("input", {
          "onUpdate:modelValue": C[0] || (C[0] = (I) => i.value = I),
          class: "stmp-search-input",
          placeholder: w(V)("Search Song..."),
          onKeydown: Mo(l, ["enter"])
        }, null, 40, Ru), [
          [js, i.value]
        ]),
        p("button", {
          class: "stmp-icon-btn",
          disabled: w(t).isSearching,
          onClick: l
        }, [
          w(t).isSearching ? (k(), gt(pe, {
            key: 1,
            name: "loader",
            size: 16,
            class: "stmp-spin"
          })) : (k(), gt(pe, {
            key: 0,
            name: "search",
            size: 16
          }))
        ], 8, Pu)
      ]),
      w(t).error ? (k(), O("div", Lu, [
        p("span", null, te(w(t).error), 1),
        p("button", {
          class: "stmp-retry-btn",
          "aria-label": w(V)("Retry"),
          onClick: a
        }, te(w(V)("Retry")), 9, $u)
      ])) : Pe("", !0),
      w(t).isSearching ? (k(), O("div", Ou, te(w(V)("Searching...")), 1)) : i.value && !w(t).results.length ? (k(), O("div", Du, te(w(V)("No results")), 1)) : !i.value && !w(t).results.length ? (k(), O("div", Nu, te(w(V)("Type a song name to search")), 1)) : Pe("", !0),
      w(t).results.length ? (k(), O("div", Fu, [
        (k(!0), O(ie, null, je(w(t).results, (I) => (k(), O("div", {
          key: I.provider + I.id,
          class: ye(["stmp-result", { "stmp-result-playing": m(I) }])
        }, [
          p("div", {
            class: "stmp-result-info",
            onClick: (D) => f(I)
          }, [
            p("span", Hu, te(I.name), 1),
            I.artist ? (k(), O("span", Vu, te(I.artist), 1)) : Pe("", !0)
          ], 8, Uu),
          p("button", {
            class: ye(["stmp-icon-btn stmp-result-add", { added: h(I) }]),
            "aria-label": h(I) ? w(V)("Added") : w(V)("Add to list"),
            onClick: Bt((D) => c(I), ["stop"])
          }, [
            ne(pe, {
              name: h(I) ? "check" : "plus",
              size: 16
            }, null, 8, ["name"])
          ], 10, ju)
        ], 2))), 128))
      ])) : Pe("", !0)
    ]));
  }
}), Wu = /* @__PURE__ */ Tt(Bu, [["__scopeId", "data-v-a8d156af"]]), Ku = { class: "stmp-panel" }, zu = { class: "stmp-topbar stmp-drag-handle" }, qu = ["aria-label"], Ju = { class: "stmp-cover-large" }, Gu = ["src"], Yu = {
  key: 1,
  class: "stmp-cover-placeholder"
}, Xu = { class: "stmp-track-name" }, Zu = { class: "stmp-track-artist" }, Qu = { class: "stmp-lyric-header" }, ef = { class: "stmp-track-name" }, tf = { class: "stmp-track-artist" }, sf = {
  key: 0,
  class: "stmp-lyric-empty"
}, nf = { class: "stmp-progress" }, rf = ["value"], of = { class: "stmp-time" }, lf = { class: "stmp-controls" }, af = { class: "stmp-ctrl-side stmp-search-side" }, cf = ["aria-label"], uf = ["aria-label"], ff = ["aria-label"], df = ["aria-label"], hf = ["aria-label"], pf = ["aria-label"], gf = { class: "stmp-ctrl-side stmp-volume-side" }, mf = ["aria-label"], vf = ["value"], yf = {
  key: 0,
  class: "stmp-overlay"
}, _f = { class: "stmp-overlay-header" }, bf = { class: "stmp-overlay-title" }, xf = ["aria-label"], wf = { class: "stmp-overlay-body" }, Sf = /* @__PURE__ */ It({
  __name: "PlayerPanel",
  emits: ["collapse"],
  setup(e) {
    const t = Nt(), s = Yt(), n = ke(), i = /* @__PURE__ */ he("cover"), r = /* @__PURE__ */ he(null), o = /* @__PURE__ */ he(!1), l = /* @__PURE__ */ he(!1);
    let a = null;
    const f = $e(() => t.currentTrack?.cover || ""), c = () => {
      o.value = !0;
    };
    Ne(
      () => t.currentTrack,
      () => {
        o.value = !1;
      }
    );
    const h = $e(
      () => t.duration > 0 ? t.currentTime / t.duration * 100 : 0
    ), m = /* @__PURE__ */ he(0), v = /* @__PURE__ */ he([]), C = /* @__PURE__ */ he(null);
    function I(E, B) {
      E && (v.value[B] = E);
    }
    async function D() {
      await De();
      const E = t.currentLyricIndex, B = C.value;
      if (!B || E < 0) {
        m.value = 0;
        return;
      }
      const Z = v.value[E];
      if (!Z) return;
      const _e = Z.offsetTop, W = Z.offsetHeight, K = B.clientHeight;
      m.value = _e - K / 2 + W / 2;
    }
    Ne(() => t.currentLyricIndex, D), Ne(() => t.lyrics, () => {
      v.value = [], D();
    });
    function A(E) {
      const B = Math.floor(E / 60), Z = Math.floor(E % 60);
      return B + ":" + Z.toString().padStart(2, "0");
    }
    function y(E) {
      const B = E.target;
      t.seek(Number(B.value) / 100 * t.duration);
    }
    const H = ["list", "random", "single"], R = {
      list: "repeat",
      random: "shuffle",
      single: "repeat-one"
    };
    function z() {
      const E = n.settings.playMode, B = H.indexOf(E), Z = H[(B + 1) % H.length];
      n.setPlayMode(Z);
    }
    function Q(E) {
      const B = E.target;
      t.setVolume(Number(B.value));
    }
    function P() {
      a && clearTimeout(a), l.value = !0;
    }
    function N() {
      a = setTimeout(() => {
        l.value = !1;
      }, 300);
    }
    function _() {
      t.volume > 0 ? t.setVolume(0) : t.setVolume(65);
    }
    function j(E) {
      r.value === E ? r.value = null : r.value = E;
    }
    function Y() {
      r.value = null;
    }
    return (E, B) => (k(), O("div", Ku, [
      p("div", zu, [
        B[7] || (B[7] = p("div", { class: "stmp-topbar-spacer" }, null, -1)),
        p("button", {
          class: "stmp-icon-btn",
          "aria-label": w(V)("Collapse panel"),
          onClick: B[0] || (B[0] = Bt((Z) => E.$emit("collapse"), ["stop"]))
        }, [
          ne(pe, {
            name: "chevron-down",
            size: 18
          })
        ], 8, qu)
      ]),
      p("div", {
        class: "stmp-display",
        onClick: B[1] || (B[1] = (Z) => i.value = i.value === "cover" ? "lyric" : "cover")
      }, [
        p("div", {
          class: ye(["stmp-cover-mode", { hidden: i.value !== "cover" }])
        }, [
          p("div", Ju, [
            f.value && !o.value ? (k(), O("img", {
              key: 0,
              src: f.value,
              alt: "cover",
              onError: c
            }, null, 40, Gu)) : (k(), O("div", Yu, [
              ne(pe, {
                name: "music",
                size: 48
              })
            ]))
          ]),
          p("div", Xu, te(w(t).currentTrack?.name || w(V)("No Song")), 1),
          p("div", Zu, te(w(t).currentTrack?.artist || " "), 1)
        ], 2),
        p("div", {
          class: ye(["stmp-lyric-mode", { hidden: i.value !== "lyric" }])
        }, [
          p("div", Qu, [
            p("div", ef, te(w(t).currentTrack?.name || w(V)("No Song")), 1),
            p("div", tf, te(w(t).currentTrack?.artist || " "), 1)
          ]),
          p("div", {
            ref_key: "lyricWindowRef",
            ref: C,
            class: "stmp-lyric-window"
          }, [
            w(t).lyrics.length === 0 ? (k(), O("div", sf, [
              ne(pe, {
                name: "music",
                size: 18
              })
            ])) : (k(), O("div", {
              key: 1,
              class: "stmp-lyric-scroll",
              style: $t({ transform: `translateY(-${m.value}px)` })
            }, [
              (k(!0), O(ie, null, je(w(t).lyrics, (Z, _e) => (k(), O("div", {
                key: _e,
                ref_for: !0,
                ref: (W) => I(W, _e),
                class: ye(["stmp-lyric-line", { "stmp-lyric-active": _e === w(t).currentLyricIndex }])
              }, te(Z.text), 3))), 128))
            ], 4))
          ], 512)
        ], 2)
      ]),
      p("div", nf, [
        p("input", {
          type: "range",
          min: "0",
          max: "100",
          step: "0.1",
          value: h.value,
          class: "stmp-range",
          onInput: y
        }, null, 40, rf),
        p("div", of, [
          p("span", null, te(A(w(t).currentTime)), 1),
          p("span", null, te(A(w(t).duration)), 1)
        ])
      ]),
      p("div", lf, [
        p("div", af, [
          p("button", {
            class: ye(["stmp-ctrl-btn", { active: r.value === "search" }]),
            "aria-label": w(V)("Search"),
            onClick: B[2] || (B[2] = Bt((Z) => j("search"), ["stop"]))
          }, [
            ne(pe, {
              name: "search",
              size: 18
            })
          ], 10, cf)
        ]),
        p("button", {
          class: "stmp-ctrl-btn",
          "aria-label": w(V)("Toggle play mode"),
          onClick: z
        }, [
          ne(pe, {
            name: R[w(n).settings.playMode],
            size: 18
          }, null, 8, ["name"])
        ], 8, uf),
        p("button", {
          class: "stmp-ctrl-btn",
          "aria-label": w(V)("Previous"),
          onClick: B[3] || (B[3] = (Z) => w(s).prev())
        }, [
          ne(pe, {
            name: "prev",
            size: 18
          })
        ], 8, ff),
        p("button", {
          class: "stmp-ctrl-btn stmp-play-btn",
          "aria-label": w(t).isPlaying ? w(V)("Pause") : w(V)("Play"),
          onClick: B[4] || (B[4] = (Z) => w(t).togglePlay())
        }, [
          ne(pe, {
            name: w(t).isPlaying ? "pause" : "play",
            size: 24
          }, null, 8, ["name"])
        ], 8, df),
        p("button", {
          class: "stmp-ctrl-btn",
          "aria-label": w(V)("Next"),
          onClick: B[5] || (B[5] = (Z) => w(s).next())
        }, [
          ne(pe, {
            name: "next",
            size: 18
          })
        ], 8, hf),
        p("button", {
          class: ye(["stmp-ctrl-btn", { active: r.value === "list" }]),
          "aria-label": w(V)("Playlist"),
          onClick: B[6] || (B[6] = Bt((Z) => j("list"), ["stop"]))
        }, [
          ne(pe, {
            name: "list-music",
            size: 18
          })
        ], 10, pf),
        p("div", gf, [
          p("div", {
            class: "stmp-volume-container",
            onMouseenter: P,
            onMouseleave: N
          }, [
            p("button", {
              class: "stmp-ctrl-btn",
              "aria-label": w(V)("Mute / Unmute"),
              onClick: _
            }, [
              ne(pe, {
                name: w(t).volume === 0 ? "volume-mute" : "volume",
                size: 18
              }, null, 8, ["name"])
            ], 8, mf),
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
                onInput: Q
              }, null, 40, vf)
            ], 2)
          ], 32)
        ])
      ]),
      ne(Ka, { name: "stmp-overlay" }, {
        default: qr(() => [
          r.value ? (k(), O("div", yf, [
            p("div", _f, [
              p("span", bf, te(r.value === "list" ? w(V)("Playlist") : w(V)("Search")), 1),
              p("button", {
                class: "stmp-overlay-close",
                "aria-label": w(V)("Close"),
                onClick: Bt(Y, ["stop"])
              }, [
                ne(pe, {
                  name: "x",
                  size: 16
                })
              ], 8, xf)
            ]),
            p("div", wf, [
              r.value === "list" ? (k(), gt(ku, { key: 0 })) : (k(), gt(Wu, { key: 1 }))
            ])
          ])) : Pe("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), cr = /* @__PURE__ */ Tt(Sf, [["__scopeId", "data-v-b6793b97"]]), Cf = {
  key: 1,
  class: "stmp-inline-expanded"
}, ur = 3, If = 500, Tf = /* @__PURE__ */ It({
  __name: "App",
  setup(e) {
    const t = ke(), s = Nt(), n = /* @__PURE__ */ he(!1), i = /* @__PURE__ */ he(null);
    let r = null;
    const o = $e(() => t.settings.widgetMode === "dock"), l = $e(() => t.settings.widgetMode === "inline"), a = $e(() => t.settings.widgetMode === "hidden"), f = /* @__PURE__ */ he(window.innerWidth <= 768), c = /* @__PURE__ */ he(!1), h = (W) => {
      W.key === "Escape" && (n.value = !1), W.key === " " && W.target === document.body && (W.preventDefault(), s.togglePlay());
    };
    let m = 0, v = 0, C = 0, I = 0, D = !1, A = !1, y = 0, H = !1, R = null, z = null;
    function Q(W) {
      if (o.value) return;
      const K = W.target;
      if (K.closest("input, .stmp-result, .stmp-item, .stmp-upload-btn, .stmp-search-input, .stmp-controls, .stmp-lyrics, .stmp-overlay, .stmp-display, .stmp-overlay-close") || n.value && (!K.closest(".stmp-drag-handle") || K.closest("button")) || !n.value && K.closest("button"))
        return;
      const se = i.value?.getBoundingClientRect();
      se && (m = W.clientX, v = W.clientY, C = se.left, I = se.top, D = !1, A = !0, y = Date.now(), H = !1, i.value && (i.value.style.left = se.left + "px", i.value.style.top = se.top + "px", i.value.style.right = "auto", i.value.style.bottom = "auto"), R = P, z = N, document.addEventListener("pointermove", R), document.addEventListener("pointerup", z), W.preventDefault());
    }
    function P(W) {
      if (!i.value || !A) return;
      const K = W.clientX - m, se = W.clientY - v;
      (Math.abs(K) > ur || Math.abs(se) > ur) && (D = !0);
      let ve = C + K, xe = I + se;
      const ze = i.value.offsetWidth || 60, Le = i.value.offsetHeight || 40, As = window.innerWidth - ze, _n = window.innerHeight - Le;
      ve = Math.max(0, Math.min(ve, As)), xe = Math.max(0, Math.min(xe, _n)), i.value.style.left = ve + "px", i.value.style.top = xe + "px";
    }
    function N() {
      A = !1, R && document.removeEventListener("pointermove", R), z && document.removeEventListener("pointerup", z), R = null, z = null;
      const W = Date.now() - y;
      if (D) {
        if (H = !0, i.value) {
          const K = i.value.getBoundingClientRect();
          t.setPosition({ x: K.left, y: K.top }), n.value && De(() => _());
        }
        return;
      }
      if (W > If) {
        H = !0;
        return;
      }
    }
    function _() {
      if (!i.value) return;
      const W = i.value.getBoundingClientRect(), K = i.value.offsetWidth, se = i.value.offsetHeight;
      let ve = W.left, xe = W.top;
      ve + K > window.innerWidth && (ve = window.innerWidth - K), xe + se > window.innerHeight && (xe = window.innerHeight - se), ve < 0 && (ve = 0), xe < 0 && (xe = 0), i.value.style.left = ve + "px", i.value.style.top = xe + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", t.setPosition({ x: ve, y: xe });
    }
    function j() {
      if (!i.value || !o.value) return;
      const W = document.querySelector("#send_form");
      if (!W) return;
      const K = W.getBoundingClientRect(), se = i.value.offsetHeight || 38, ve = Math.max(80, K.top - 8);
      i.value.style.maxHeight = ve + "px";
      let xe = K.top - Math.min(se, ve);
      if (xe < 4 && (xe = 4), window.innerWidth <= 768)
        i.value.style.left = K.left + "px", i.value.style.width = K.width + "px";
      else {
        const ze = t.settings.dockAlign === "right", Le = i.value.offsetWidth;
        ze ? i.value.style.left = K.right - Le + "px" : i.value.style.left = K.left + "px", i.value.style.width = "";
      }
      i.value.style.top = xe + "px", i.value.style.right = "auto", i.value.style.bottom = "auto";
    }
    function Y() {
      if (!i.value || o.value) return;
      const W = t.settings.position;
      W ? (i.value.style.left = W.x + "px", i.value.style.top = W.y + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", window.innerWidth <= 768 && De(() => _())) : (i.value.style.right = "16px", i.value.style.top = "16px", i.value.style.left = "auto", i.value.style.bottom = "auto");
    }
    function E(W) {
      if (H) {
        H = !1;
        return;
      }
      if (o.value && !n.value) {
        if (W.target.closest("button, input")) return;
        Z();
        return;
      }
      !o.value && !n.value && !s.currentTrack && Z();
    }
    function B(W) {
      n.value || W.target.closest("button, input") || Z();
    }
    function Z() {
      n.value = !n.value, De(() => {
        o.value ? j() : l.value || t.settings.position && _();
      });
    }
    Ne(() => t.settings.widgetMode, (W) => {
      n.value = !1, i.value && (i.value.style.width = "", i.value.style.left = "", i.value.style.top = "", i.value.style.right = "", i.value.style.bottom = "", i.value.style.maxHeight = ""), W === "inline" && (c.value = !!document.querySelector("#send_form")), De(() => {
        W === "dock" ? j() : W === "drag" && Y();
      });
    }), Ne(() => t.settings.dockAlign, () => {
      o.value && De(() => j());
    }), hn(() => {
      c.value = !!document.querySelector("#send_form"), De(() => {
        o.value ? j() : l.value || Y();
      }), i.value && typeof ResizeObserver < "u" && (r = new ResizeObserver(() => {
        o.value && j();
      }), r.observe(i.value)), window.addEventListener("resize", _e), window.addEventListener("keydown", h);
    });
    function _e() {
      f.value = window.innerWidth <= 768, o.value ? De(() => j()) : l.value || De(() => _());
    }
    return ai(() => {
      N(), r && (r.disconnect(), r = null), window.removeEventListener("resize", _e), window.removeEventListener("keydown", h);
    }), (W, K) => l.value ? (k(), O(ie, { key: 0 }, [
      c.value ? (k(), gt(Fl, {
        key: 0,
        to: "#send_form"
      }, [
        n.value ? (k(), O("div", Cf, [
          ne(cr, { onCollapse: Z })
        ])) : (k(), O("div", {
          key: 0,
          class: "stmp-inline-bar",
          onClick: B
        }, [
          ne(ar, {
            "is-dock": !0,
            "is-mobile": !0
          })
        ]))
      ])) : Pe("", !0)
    ], 64)) : a.value ? Pe("", !0) : (k(), O("div", {
      key: 1,
      ref_key: "widgetRef",
      ref: i,
      class: ye(["stmp-widget", {
        "stmp-expanded": n.value,
        "stmp-collapsed": !n.value,
        "stmp-dock": o.value
      }]),
      onPointerdown: Q,
      onClick: E
    }, [
      n.value ? (k(), gt(cr, {
        key: 1,
        onCollapse: Z
      })) : (k(), gt(ar, {
        key: 0,
        "is-dock": o.value,
        "is-mobile": f.value
      }, null, 8, ["is-dock", "is-mobile"]))
    ], 34));
  }
}), Ef = /* @__PURE__ */ Tt(Tf, [["__scopeId", "data-v-3231c454"]]), kf = { class: "stmp-switch-row" }, Af = {
  key: 0,
  class: "stmp-switch-label"
}, Mf = { class: "stmp-switch" }, Rf = ["checked"], Pf = /* @__PURE__ */ It({
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
    return (i, r) => (k(), O("label", kf, [
      e.label ? (k(), O("span", Af, te(e.label), 1)) : Pe("", !0),
      p("span", Mf, [
        p("input", {
          type: "checkbox",
          checked: e.modelValue,
          onChange: n
        }, null, 40, Rf),
        r[0] || (r[0] = p("span", { class: "stmp-switch-track" }, [
          p("span", { class: "stmp-switch-thumb" })
        ], -1))
      ])
    ]));
  }
}), fr = /* @__PURE__ */ Tt(Pf, [["__scopeId", "data-v-d86a29bd"]]), Lf = { class: "stmp-settings" }, $f = { class: "stmp-tab-bar" }, Of = ["onClick"], Df = { class: "stmp-tab-content" }, Nf = { class: "stmp-tab-panel" }, Ff = { class: "stmp-setting-group" }, Uf = { class: "stmp-setting-label" }, Hf = { class: "stmp-mode-toggle" }, Vf = ["onClick"], jf = {
  key: 0,
  class: "stmp-setting-group"
}, Bf = { class: "stmp-setting-label" }, Wf = { class: "stmp-mode-toggle" }, Kf = ["onClick"], zf = { class: "stmp-setting-group" }, qf = { class: "stmp-setting-label" }, Jf = ["value"], Gf = { class: "stmp-setting-group" }, Yf = {
  class: "stmp-setting-label",
  for: "stmp-playmode"
}, Xf = ["value"], Zf = ["value"], Qf = { class: "stmp-tab-panel" }, ed = {
  key: 0,
  class: "stmp-provider-fields"
}, td = ["onUpdate:modelValue", "placeholder"], sd = ["onUpdate:modelValue", "placeholder"], nd = { class: "stmp-tab-panel" }, id = { class: "stmp-setting-group" }, rd = { class: "stmp-setting-label" }, od = { class: "stmp-rules" }, ld = ["onClick"], ad = { class: "stmp-rule-add" }, cd = ["placeholder"], ud = { class: "stmp-tab-panel" }, fd = { class: "stmp-data-btns" }, dd = /* @__PURE__ */ It({
  __name: "SettingsView",
  setup(e) {
    const t = ke(), s = /* @__PURE__ */ he("playback"), n = [
      { id: "playback", label: V("Playback"), icon: "fa-solid fa-music" },
      { id: "providers", label: V("Providers"), icon: "fa-solid fa-cloud" },
      { id: "cue", label: V("AI Cue"), icon: "fa-solid fa-wand-magic-sparkles" },
      { id: "data", label: V("Data"), icon: "fa-solid fa-database" }
    ], i = [
      { value: "list", label: V("List Loop") },
      { value: "random", label: V("Random") },
      { value: "single", label: V("Single Loop") }
    ], r = [
      { value: "dock", label: V("Dock"), icon: "fa-solid fa-grip-lines" },
      { value: "drag", label: V("Drag"), icon: "fa-solid fa-up-down-left-right" },
      { value: "inline", label: V("Inline"), icon: "fa-solid fa-puzzle-piece" },
      { value: "hidden", label: V("Hidden"), icon: "fa-solid fa-eye-slash" }
    ], o = [
      { value: "left", label: V("Left"), icon: "fa-solid fa-align-left" },
      { value: "right", label: V("Right"), icon: "fa-solid fa-align-right" }
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
      netease: V("NetEase"),
      local: V("Local Files"),
      custom: V("Custom API")
    };
    function c(D) {
      const A = t.settings.providers.find((y) => y.id === D);
      A && (A.enabled = !A.enabled, t.save());
    }
    const h = /* @__PURE__ */ he("");
    function m() {
      const D = h.value.trim();
      D && (t.addCustomCueRule(D), h.value = "");
    }
    function v(D) {
      t.removeCustomCueRule(D);
    }
    const C = () => {
      const D = JSON.stringify(t.settings, null, 2), A = new Blob([D], { type: "application/json" }), y = URL.createObjectURL(A), H = document.createElement("a");
      H.href = y, H.download = "st-music-player-settings.json", H.click(), URL.revokeObjectURL(y);
    }, I = () => {
      const D = document.createElement("input");
      D.type = "file", D.accept = ".json", D.onchange = async (A) => {
        const y = A.target.files?.[0];
        if (!y) return;
        const H = await y.text();
        try {
          const R = JSON.parse(H);
          if (typeof R != "object" || R === null) throw new Error("Not an object");
          const z = ["volume", "playMode", "position", "widgetMode", "autoPlayOnNewCue", "providers", "customCueRules"], Q = {};
          for (const P of z)
            P in R && (Q[P] = R[P]);
          if (typeof Q.volume != "number" || Q.volume < 0 || Q.volume > 100)
            throw new Error("Invalid volume");
          if (typeof Q.playMode != "string" || !["list", "random", "single"].includes(Q.playMode))
            throw new Error("Invalid playMode");
          if (Q.providers && !Array.isArray(Q.providers))
            throw new Error("Invalid providers");
          if (Q.customCueRules && !Array.isArray(Q.customCueRules))
            throw new Error("Invalid customCueRules");
          Object.assign(t.settings, Q), t.save(), toastr.success(V("Data imported"));
        } catch (R) {
          console.error("Import failed", R), toastr.error(V("Import failed") + ": " + (R instanceof Error ? R.message : V("Invalid JSON")));
        }
      }, D.click();
    };
    return (D, A) => (k(), O("div", Lf, [
      p("div", $f, [
        (k(), O(ie, null, je(n, (y) => p("div", {
          key: y.id,
          class: ye(["stmp-tab", { active: s.value === y.id }]),
          onClick: (H) => s.value = y.id
        }, [
          p("i", {
            class: ye(y.icon)
          }, null, 2),
          p("span", null, te(y.label), 1)
        ], 10, Of)), 64))
      ]),
      p("div", Df, [
        _t(p("div", Nf, [
          p("div", Ff, [
            p("label", Uf, te(w(V)("Widget Mode")), 1),
            p("div", Hf, [
              (k(), O(ie, null, je(r, (y) => p("div", {
                key: y.value,
                class: ye(["menu_button menu_button_icon stmp-mode-btn", { toggled: w(t).settings.widgetMode === y.value }]),
                onClick: (H) => w(t).setWidgetMode(y.value)
              }, [
                p("i", {
                  class: ye(y.icon)
                }, null, 2),
                p("span", null, te(y.label), 1)
              ], 10, Vf)), 64))
            ])
          ]),
          w(t).settings.widgetMode === "dock" ? (k(), O("div", jf, [
            p("label", Bf, te(w(V)("Dock Alignment")), 1),
            p("div", Wf, [
              (k(), O(ie, null, je(o, (y) => p("div", {
                key: y.value,
                class: ye(["menu_button menu_button_icon stmp-mode-btn", { toggled: w(t).settings.dockAlign === y.value }]),
                onClick: (H) => w(t).setDockAlign(y.value)
              }, [
                p("i", {
                  class: ye(y.icon)
                }, null, 2),
                p("span", null, te(y.label), 1)
              ], 10, Kf)), 64))
            ])
          ])) : Pe("", !0),
          p("div", zf, [
            p("label", qf, te(w(V)("Default Volume")) + ": " + te(w(t).settings.volume), 1),
            p("input", {
              type: "range",
              min: "0",
              max: "100",
              value: w(t).settings.volume,
              onInput: l
            }, null, 40, Jf)
          ]),
          p("div", Gf, [
            p("label", Yf, te(w(V)("Default Play Mode")), 1),
            p("select", {
              id: "stmp-playmode",
              class: "text_pole",
              value: w(t).settings.playMode,
              onChange: a
            }, [
              (k(), O(ie, null, je(i, (y) => p("option", {
                key: y.value,
                value: y.value
              }, te(y.label), 9, Zf)), 64))
            ], 40, Xf)
          ]),
          ne(fr, {
            "model-value": w(t).settings.autoPlayOnNewCue,
            label: w(V)("Auto-play on new cue"),
            "onUpdate:modelValue": A[0] || (A[0] = (y) => {
              w(t).settings.autoPlayOnNewCue = y, w(t).save();
            })
          }, null, 8, ["model-value", "label"])
        ], 512), [
          [Ds, s.value === "playback"]
        ]),
        _t(p("div", Qf, [
          (k(!0), O(ie, null, je(w(t).settings.providers, (y) => (k(), O("div", {
            key: y.id,
            class: "stmp-provider-card"
          }, [
            ne(fr, {
              "model-value": y.enabled,
              label: f[y.id] || y.id,
              "onUpdate:modelValue": () => c(y.id)
            }, null, 8, ["model-value", "label", "onUpdate:modelValue"]),
            y.id === "custom" && y.enabled ? (k(), O("div", ed, [
              _t(p("input", {
                class: "text_pole",
                "onUpdate:modelValue": (H) => y.config.searchURL = H,
                placeholder: w(V)("Search URL"),
                onChange: A[1] || (A[1] = (H) => w(t).save())
              }, null, 40, td), [
                [js, y.config.searchURL]
              ]),
              _t(p("input", {
                class: "text_pole",
                "onUpdate:modelValue": (H) => y.config.resolveURL = H,
                placeholder: w(V)("Resolve URL"),
                onChange: A[2] || (A[2] = (H) => w(t).save())
              }, null, 40, sd), [
                [js, y.config.resolveURL]
              ])
            ])) : Pe("", !0)
          ]))), 128))
        ], 512), [
          [Ds, s.value === "providers"]
        ]),
        _t(p("div", nd, [
          p("div", id, [
            p("label", rd, te(w(V)("Custom Cue Rules (Regex)")), 1),
            p("div", od, [
              (k(!0), O(ie, null, je(w(t).settings.customCueRules, (y, H) => (k(), O("div", {
                key: H,
                class: "stmp-rule"
              }, [
                p("code", null, te(y), 1),
                p("div", {
                  class: "menu_button menu_button_icon stmp-rule-del",
                  onClick: (R) => v(H)
                }, [...A[4] || (A[4] = [
                  p("i", { class: "fa-solid fa-xmark" }, null, -1)
                ])], 8, ld)
              ]))), 128))
            ]),
            p("div", ad, [
              _t(p("input", {
                "onUpdate:modelValue": A[3] || (A[3] = (y) => h.value = y),
                class: "text_pole",
                placeholder: w(V)("Add regex rule..."),
                onKeydown: Mo(m, ["enter"])
              }, null, 40, cd), [
                [js, h.value]
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
          [Ds, s.value === "cue"]
        ]),
        _t(p("div", ud, [
          p("div", fd, [
            p("div", {
              class: "menu_button menu_button_icon stmp-data-btn",
              onClick: C
            }, [
              A[6] || (A[6] = p("i", { class: "fa-solid fa-file-export" }, null, -1)),
              p("span", null, te(w(V)("Export data")), 1)
            ]),
            p("div", {
              class: "menu_button menu_button_icon stmp-data-btn",
              onClick: I
            }, [
              A[7] || (A[7] = p("i", { class: "fa-solid fa-file-import" }, null, -1)),
              p("span", null, te(w(V)("Import data")), 1)
            ])
          ])
        ], 512), [
          [Ds, s.value === "data"]
        ])
      ])
    ]));
  }
}), hd = /* @__PURE__ */ Tt(dd, [["__scopeId", "data-v-0a41a45c"]]);
class pd {
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
      messageId: Fs(r)
    })), i(n.MESSAGE_UPDATED, "message-updated", (r) => ({
      messageId: Fs(r)
    })), i(n.MESSAGE_DELETED, "message-deleted", (r) => ({
      messageId: Fs(r)
    })), i(n.MESSAGE_SWIPED, "message-swiped", (r) => ({
      messageId: Fs(r)
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
function Fs(e) {
  if (e == null) return;
  const t = typeof e == "number" ? e : parseInt(String(e), 10);
  return Number.isFinite(t) ? t : void 0;
}
function gd() {
  return new pd();
}
const md = [
  /<bgm>当前bgm[:：](.+?) - (.+?)<\/bgm>/g,
  /<bgm>当前bgm[:：](.+?)<\/bgm>/g,
  /<bgm>(.+?) - (.+?)<\/bgm>/g,
  /<bgm>(.+?)<\/bgm>/g,
  /【BGM】(.+?)(?: - (.+?))?【\/BGM】/g,
  /\[music\](.+?)(?: - (.+?))?\[\/music\]/g
];
function dr(e, t) {
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
function hr(e, t = []) {
  const s = /* @__PURE__ */ new Map(), n = (i) => {
    s.has(i.index) || s.set(i.index, i);
  };
  for (const i of md)
    for (const r of dr(i, e)) n(r);
  for (const i of t)
    try {
      const r = new RegExp(i, "g");
      for (const o of dr(r, e)) n(o);
    } catch {
    }
  return [...s.values()].sort((i, r) => i.index - r.index).map((i) => i.cue);
}
class vd {
  constructor(t) {
    this.cursors = /* @__PURE__ */ new Map(), this.getChatMessage = t;
  }
  scanIncremental(t, s, n, i = []) {
    const r = [];
    for (let o = s; o <= n; o++) {
      const l = this.getChatMessage(o);
      if (l === void 0) continue;
      const a = hr(l, i);
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
    const r = hr(i, n), o = r.length > 0 ? r.at(-1) : null;
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
let qt = null, ut = null, vs = null, ys = null, Jt = null, en = null;
const yd = `
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
function _d() {
  const e = $("#extensions_settings2");
  if (!e || !e.length || (e.append(yd), ys = e.children(".inline-drawer").last()[0] ?? null, !ys)) return;
  const t = ys.querySelector("#stmp-settings-mount");
  t && en && (Jt = Ro(hd), Jt.use(en), Jt.mount(t));
}
function bd() {
  Jt && (Jt.unmount(), Jt = null), ys?.remove(), ys = null;
}
function xd(e, t, s) {
  ut = gd(), ut.on("chat-changed", () => {
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
  }), ut.on("message-generated", (n) => {
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
  }), ut.on("message-updated", (n) => {
    n.messageId !== void 0 && t.handleMessageUpdate(n.messageId);
  }), ut.on("message-deleted", (n) => {
    n.messageId !== void 0 && t.handleMessageDelete(n.messageId);
  }), ut.on("message-swiped", (n) => {
    n.messageId !== void 0 && t.handleMessageUpdate(n.messageId);
  }), ut.start();
}
function wd(e, t, s) {
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
async function Id() {
  try {
    const e = document.createElement("div");
    e.id = "st-music-player-root", document.documentElement.appendChild(e);
    const t = xc();
    en = t, qt = Ro(Ef), qt.use(t), qt.mount(e);
    const s = ke(), n = Rc();
    s.init(n);
    const i = Nt();
    i.init(), i.setVolume(s.settings.volume);
    const r = new vd((a) => SillyTavern.getContext().chat[a]?.mes), o = Yt();
    o.init(r), _d();
    const l = SillyTavern.getContext();
    vs = () => {
      xd(r, o, s), wd(r, o, s);
    }, l.eventSource.on(l.event_types.APP_READY, vs), console.log("[ST-Music-Player] 播放器加载完成");
  } catch (e) {
    console.error("[ST-Music-Player] init failed:", e);
  }
}
function No() {
  if (vs) {
    try {
      const t = SillyTavern.getContext();
      t.eventSource.removeListener(t.event_types.APP_READY, vs);
    } catch {
    }
    vs = null;
  }
  if (ut?.stop(), ut = null, qt) {
    try {
      Nt().destroy();
    } catch {
    }
    qt.unmount(), qt = null;
  }
  const e = document.getElementById("st-music-player-root");
  e && e.remove(), bd(), en = null;
}
function Td() {
  No();
}
async function Sd() {
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
async function Ed() {
  await Sd(), No();
}
export {
  Sd as clean,
  Ed as delete,
  No as destroy,
  Td as disable,
  Id as init
};
