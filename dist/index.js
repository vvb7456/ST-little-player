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
const de = {}, Ht = [], Qe = () => {
}, to = () => !1, Gs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ys = (e) => e.startsWith("onUpdate:"), _e = Object.assign, jn = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Tr = Object.prototype.hasOwnProperty, le = (e, t) => Tr.call(e, t), B = Array.isArray, jt = (e) => ws(e) === "[object Map]", so = (e) => ws(e) === "[object Set]", ci = (e) => ws(e) === "[object Date]", Y = (e) => typeof e == "function", pe = (e) => typeof e == "string", Ne = (e) => typeof e == "symbol", ae = (e) => e !== null && typeof e == "object", no = (e) => (ae(e) || Y(e)) && Y(e.then) && Y(e.catch), io = Object.prototype.toString, ws = (e) => io.call(e), Ar = (e) => ws(e).slice(8, -1), oo = (e) => ws(e) === "[object Object]", Xs = (e) => pe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, is = /* @__PURE__ */ Hn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Zs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Mr = /-\w/g, Ue = Zs(
  (e) => e.replace(Mr, (t) => t.slice(1).toUpperCase())
), Pr = /\B([A-Z])/g, xt = Zs(
  (e) => e.replace(Pr, "-$1").toLowerCase()
), ro = Zs((e) => e.charAt(0).toUpperCase() + e.slice(1)), pn = Zs(
  (e) => e ? `on${ro(e)}` : ""
), Ze = (e, t) => !Object.is(e, t), Ls = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, lo = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, Bn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Rr = (e) => {
  const t = pe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ui;
const Qs = () => ui || (ui = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function en(e) {
  if (B(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], i = pe(n) ? Or(n) : en(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (pe(e) || ae(e))
    return e;
}
const kr = /;(?![^(]*\))/g, $r = /:([^]+)/, Lr = /\/\*[^]*?\*\//g;
function Or(e) {
  const t = {};
  return e.replace(Lr, "").split(kr).forEach((s) => {
    if (s) {
      const n = s.split($r);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function be(e) {
  let t = "";
  if (pe(e))
    t = e;
  else if (B(e))
    for (let s = 0; s < e.length; s++) {
      const n = be(e[s]);
      n && (t += n + " ");
    }
  else if (ae(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const Dr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Nr = /* @__PURE__ */ Hn(Dr);
function ao(e) {
  return !!e || e === "";
}
function Fr(e, t) {
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
  if (s = Ne(e), n = Ne(t), s || n)
    return e === t;
  if (s = B(e), n = B(t), s || n)
    return s && n ? Fr(e, t) : !1;
  if (s = ae(e), n = ae(t), s || n) {
    if (!s || !n)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const r in e) {
      const l = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
      if (l && !a || !l && a || !Kn(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const co = (e) => !!(e && e.__v_isRef === !0), Z = (e) => pe(e) ? e : e == null ? "" : B(e) || ae(e) && (e.toString === io || !Y(e.toString)) ? co(e) ? Z(e.value) : JSON.stringify(e, uo, 2) : String(e), uo = (e, t) => co(t) ? uo(e, t.value) : jt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], o) => (s[gn(n, o) + " =>"] = i, s),
    {}
  )
} : so(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => gn(s))
} : Ne(t) ? gn(t) : ae(t) && !B(t) && !oo(t) ? String(t) : t, gn = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ne(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ye;
class fo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && ye && (ye.active ? (this.parent = ye, this.index = (ye.scopes || (ye.scopes = [])).push(
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
      const s = ye;
      try {
        return ye = this, t();
      } finally {
        ye = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ye, ye = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (ye === this)
        ye = this.prevScope;
      else {
        let t = ye;
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
function ho(e) {
  return new fo(e);
}
function po() {
  return ye;
}
function Ur(e, t = !1) {
  ye && ye.cleanups.push(e);
}
let he;
const mn = /* @__PURE__ */ new WeakSet();
class go {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ye && (ye.active ? ye.effects.push(this) : this.flags &= -2);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || vo(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, fi(this), yo(this);
    const t = he, s = Ve;
    he = this, Ve = !0;
    try {
      return this.fn();
    } finally {
      bo(this), he = t, Ve = s, this.flags &= -3;
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
let mo = 0, os, rs;
function vo(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = rs, rs = e;
    return;
  }
  e.next = os, os = e;
}
function Wn() {
  mo++;
}
function zn() {
  if (--mo > 0)
    return;
  if (rs) {
    let t = rs;
    for (rs = void 0; t; ) {
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
function yo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function bo(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === s && (s = i), Jn(n), Vr(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = s;
}
function An(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (_o(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function _o(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === gs) || (e.globalVersion = gs, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !An(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = he, n = Ve;
  he = e, Ve = !0;
  try {
    yo(e);
    const i = e.fn(e._value);
    (t.version === 0 || Ze(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    he = s, Ve = n, bo(e), e.flags &= -3;
  }
}
function Jn(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let o = s.computed.deps; o; o = o.nextDep)
      Jn(o, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function Vr(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let Ve = !0;
const xo = [];
function tt() {
  xo.push(Ve), Ve = !1;
}
function st() {
  const e = xo.pop();
  Ve = e === void 0 ? !0 : e;
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
class Hr {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class qn {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!he || !Ve || he === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== he)
      s = this.activeLink = new Hr(he, this), he.deps ? (s.prevDep = he.depsTail, he.depsTail.nextDep = s, he.depsTail = s) : he.deps = he.depsTail = s, wo(s);
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
    Wn();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      zn();
    }
  }
}
function wo(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        wo(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const Ns = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ Symbol(
  ""
), Mn = /* @__PURE__ */ Symbol(
  ""
), ms = /* @__PURE__ */ Symbol(
  ""
);
function Se(e, t, s) {
  if (Ve && he) {
    let n = Ns.get(e);
    n || Ns.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(s);
    i || (n.set(s, i = new qn()), i.map = n, i.key = s), i.track();
  }
}
function ut(e, t, s, n, i, o) {
  const r = Ns.get(e);
  if (!r) {
    gs++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (Wn(), t === "clear")
    r.forEach(l);
  else {
    const a = B(e), f = a && Xs(s);
    if (a && s === "length") {
      const c = Number(n);
      r.forEach((h, v) => {
        (v === "length" || v === ms || !Ne(v) && v >= c) && l(h);
      });
    } else
      switch ((s !== void 0 || r.has(void 0)) && l(r.get(s)), f && l(r.get(ms)), t) {
        case "add":
          a ? f && l(r.get("length")) : (l(r.get(Rt)), jt(e) && l(r.get(Mn)));
          break;
        case "delete":
          a || (l(r.get(Rt)), jt(e) && l(r.get(Mn)));
          break;
        case "set":
          jt(e) && l(r.get(Rt));
          break;
      }
  }
  zn();
}
function jr(e, t) {
  const s = Ns.get(e);
  return s && s.get(t);
}
function Lt(e) {
  const t = /* @__PURE__ */ ne(e);
  return t === e ? t : (Se(t, "iterate", ms), /* @__PURE__ */ $e(e) ? t : t.map(He));
}
function tn(e) {
  return Se(e = /* @__PURE__ */ ne(e), "iterate", ms), e;
}
function Ge(e, t) {
  return /* @__PURE__ */ pt(e) ? zt(/* @__PURE__ */ dt(e) ? He(t) : t) : He(t);
}
const Br = {
  __proto__: null,
  [Symbol.iterator]() {
    return vn(this, Symbol.iterator, (e) => Ge(this, e));
  },
  concat(...e) {
    return Lt(this).concat(
      ...e.map((t) => B(t) ? Lt(t) : t)
    );
  },
  entries() {
    return vn(this, "entries", (e) => (e[1] = Ge(this, e[1]), e));
  },
  every(e, t) {
    return it(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return it(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => Ge(this, n)),
      arguments
    );
  },
  find(e, t) {
    return it(
      this,
      "find",
      e,
      t,
      (s) => Ge(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return it(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return it(
      this,
      "findLast",
      e,
      t,
      (s) => Ge(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return it(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return it(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return yn(this, "includes", e);
  },
  indexOf(...e) {
    return yn(this, "indexOf", e);
  },
  join(e) {
    return Lt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return yn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return it(this, "map", e, t, void 0, arguments);
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
    return it(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Xt(this, "splice", e);
  },
  toReversed() {
    return Lt(this).toReversed();
  },
  toSorted(e) {
    return Lt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Lt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Xt(this, "unshift", e);
  },
  values() {
    return vn(this, "values", (e) => Ge(this, e));
  }
};
function vn(e, t, s) {
  const n = tn(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ $e(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = s(o.value)), o;
  }), i;
}
const Kr = Array.prototype;
function it(e, t, s, n, i, o) {
  const r = tn(e), l = r !== e && !/* @__PURE__ */ $e(e), a = r[t];
  if (a !== Kr[t]) {
    const h = a.apply(e, o);
    return l ? He(h) : h;
  }
  let f = s;
  r !== e && (l ? f = function(h, v) {
    return s.call(this, Ge(e, h), v, e);
  } : s.length > 2 && (f = function(h, v) {
    return s.call(this, h, v, e);
  }));
  const c = a.call(r, f, n);
  return l && i ? i(c) : c;
}
function di(e, t, s, n) {
  const i = tn(e), o = i !== e && !/* @__PURE__ */ $e(e);
  let r = s, l = !1;
  i !== e && (o ? (l = n.length === 0, r = function(f, c, h) {
    return l && (l = !1, f = Ge(e, f)), s.call(this, f, Ge(e, c), h, e);
  }) : s.length > 3 && (r = function(f, c, h) {
    return s.call(this, f, c, h, e);
  }));
  const a = i[t](r, ...n);
  return l ? Ge(e, a) : a;
}
function yn(e, t, s) {
  const n = /* @__PURE__ */ ne(e);
  Se(n, "iterate", ms);
  const i = n[t](...s);
  return (i === -1 || i === !1) && /* @__PURE__ */ nn(s[0]) ? (s[0] = /* @__PURE__ */ ne(s[0]), n[t](...s)) : i;
}
function Xt(e, t, s = []) {
  tt(), Wn();
  const n = (/* @__PURE__ */ ne(e))[t].apply(e, s);
  return zn(), st(), n;
}
const Wr = /* @__PURE__ */ Hn("__proto__,__v_isRef,__isVue"), So = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ne)
);
function zr(e) {
  Ne(e) || (e = String(e));
  const t = /* @__PURE__ */ ne(this);
  return Se(t, "has", e), t.hasOwnProperty(e);
}
class Co {
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
      return n === (i ? o ? sl : Ao : o ? To : Eo).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const r = B(t);
    if (!i) {
      let a;
      if (r && (a = Br[s]))
        return a;
      if (s === "hasOwnProperty")
        return zr;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ me(t) ? t : n
    );
    if ((Ne(s) ? So.has(s) : Wr(s)) || (i || Se(t, "get", s), o))
      return l;
    if (/* @__PURE__ */ me(l)) {
      const a = r && Xs(s) ? l : l.value;
      return i && ae(a) ? /* @__PURE__ */ Rn(a) : a;
    }
    return ae(l) ? i ? /* @__PURE__ */ Rn(l) : /* @__PURE__ */ sn(l) : l;
  }
}
class Io extends Co {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, i) {
    let o = t[s];
    const r = B(t) && Xs(s);
    if (!this._isShallow) {
      const f = /* @__PURE__ */ pt(o);
      if (!/* @__PURE__ */ $e(n) && !/* @__PURE__ */ pt(n) && (o = /* @__PURE__ */ ne(o), n = /* @__PURE__ */ ne(n)), !r && /* @__PURE__ */ me(o) && !/* @__PURE__ */ me(n))
        return f || (o.value = n), !0;
    }
    const l = r ? Number(s) < t.length : le(t, s), a = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ me(t) ? t : i
    );
    return t === /* @__PURE__ */ ne(i) && a && (l ? Ze(n, o) && ut(t, "set", s, n) : ut(t, "add", s, n)), a;
  }
  deleteProperty(t, s) {
    const n = le(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && ut(t, "delete", s, void 0), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Ne(s) || !So.has(s)) && Se(t, "has", s), n;
  }
  ownKeys(t) {
    return Se(
      t,
      "iterate",
      B(t) ? "length" : Rt
    ), Reflect.ownKeys(t);
  }
}
class Jr extends Co {
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
const qr = /* @__PURE__ */ new Io(), Gr = /* @__PURE__ */ new Jr(), Yr = /* @__PURE__ */ new Io(!0);
const Pn = (e) => e, Ts = (e) => Reflect.getPrototypeOf(e);
function Xr(e, t, s) {
  return function(...n) {
    const i = this.__v_raw, o = /* @__PURE__ */ ne(i), r = jt(o), l = e === "entries" || e === Symbol.iterator && r, a = e === "keys" && r, f = i[e](...n), c = s ? Pn : t ? zt : He;
    return !t && Se(
      o,
      "iterate",
      a ? Mn : Rt
    ), _e(
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
function Zr(e, t) {
  const s = {
    get(i) {
      const o = this.__v_raw, r = /* @__PURE__ */ ne(o), l = /* @__PURE__ */ ne(i);
      e || (Ze(i, l) && Se(r, "get", i), Se(r, "get", l));
      const { has: a } = Ts(r), f = t ? Pn : e ? zt : He;
      if (a.call(r, i))
        return f(o.get(i));
      if (a.call(r, l))
        return f(o.get(l));
      o !== r && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Se(/* @__PURE__ */ ne(i), "iterate", Rt), i.size;
    },
    has(i) {
      const o = this.__v_raw, r = /* @__PURE__ */ ne(o), l = /* @__PURE__ */ ne(i);
      return e || (Ze(i, l) && Se(r, "has", i), Se(r, "has", l)), i === l ? o.has(i) : o.has(i) || o.has(l);
    },
    forEach(i, o) {
      const r = this, l = r.__v_raw, a = /* @__PURE__ */ ne(l), f = t ? Pn : e ? zt : He;
      return !e && Se(a, "iterate", Rt), l.forEach((c, h) => i.call(o, f(c), f(h), r));
    }
  };
  return _e(
    s,
    e ? {
      add: As("add"),
      set: As("set"),
      delete: As("delete"),
      clear: As("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ ne(this), r = Ts(o), l = /* @__PURE__ */ ne(i), a = !t && !/* @__PURE__ */ $e(i) && !/* @__PURE__ */ pt(i) ? l : i;
        return r.has.call(o, a) || Ze(i, a) && r.has.call(o, i) || Ze(l, a) && r.has.call(o, l) || (o.add(a), ut(o, "add", a, a)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ $e(o) && !/* @__PURE__ */ pt(o) && (o = /* @__PURE__ */ ne(o));
        const r = /* @__PURE__ */ ne(this), { has: l, get: a } = Ts(r);
        let f = l.call(r, i);
        f || (i = /* @__PURE__ */ ne(i), f = l.call(r, i));
        const c = a.call(r, i);
        return r.set(i, o), f ? Ze(o, c) && ut(r, "set", i, o) : ut(r, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ ne(this), { has: r, get: l } = Ts(o);
        let a = r.call(o, i);
        a || (i = /* @__PURE__ */ ne(i), a = r.call(o, i)), l && l.call(o, i);
        const f = o.delete(i);
        return a && ut(o, "delete", i, void 0), f;
      },
      clear() {
        const i = /* @__PURE__ */ ne(this), o = i.size !== 0, r = i.clear();
        return o && ut(
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
    s[i] = Xr(i, e, t);
  }), s;
}
function Gn(e, t) {
  const s = Zr(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    le(s, i) && i in n ? s : n,
    i,
    o
  );
}
const Qr = {
  get: /* @__PURE__ */ Gn(!1, !1)
}, el = {
  get: /* @__PURE__ */ Gn(!1, !0)
}, tl = {
  get: /* @__PURE__ */ Gn(!0, !1)
};
const Eo = /* @__PURE__ */ new WeakMap(), To = /* @__PURE__ */ new WeakMap(), Ao = /* @__PURE__ */ new WeakMap(), sl = /* @__PURE__ */ new WeakMap();
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
  return /* @__PURE__ */ pt(e) ? e : Yn(
    e,
    !1,
    qr,
    Qr,
    Eo
  );
}
// @__NO_SIDE_EFFECTS__
function il(e) {
  return Yn(
    e,
    !1,
    Yr,
    el,
    To
  );
}
// @__NO_SIDE_EFFECTS__
function Rn(e) {
  return Yn(
    e,
    !0,
    Gr,
    tl,
    Ao
  );
}
function Yn(e, t, s, n, i) {
  if (!ae(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const r = nl(Ar(e));
  if (r === 0)
    return e;
  const l = new Proxy(
    e,
    r === 2 ? n : s
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function dt(e) {
  return /* @__PURE__ */ pt(e) ? /* @__PURE__ */ dt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function pt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function $e(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function nn(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ne(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ne(t) : e;
}
function Xn(e) {
  return !le(e, "__v_skip") && Object.isExtensible(e) && lo(e, "__v_skip", !0), e;
}
const He = (e) => ae(e) ? /* @__PURE__ */ sn(e) : e, zt = (e) => ae(e) ? /* @__PURE__ */ Rn(e) : e;
// @__NO_SIDE_EFFECTS__
function me(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function xe(e) {
  return ol(e, !1);
}
function ol(e, t) {
  return /* @__PURE__ */ me(e) ? e : new rl(e, t);
}
class rl {
  constructor(t, s) {
    this.dep = new qn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ ne(t), this._value = s ? t : He(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ $e(t) || /* @__PURE__ */ pt(t);
    t = n ? t : /* @__PURE__ */ ne(t), Ze(t, s) && (this._rawValue = t, this._value = n ? t : He(t), this.dep.trigger());
  }
}
function w(e) {
  return /* @__PURE__ */ me(e) ? e.value : e;
}
const ll = {
  get: (e, t, s) => t === "__v_raw" ? e : w(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t];
    return /* @__PURE__ */ me(i) && !/* @__PURE__ */ me(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function Mo(e) {
  return /* @__PURE__ */ dt(e) ? e : new Proxy(e, ll);
}
// @__NO_SIDE_EFFECTS__
function al(e) {
  const t = B(e) ? new Array(e.length) : {};
  for (const s in e)
    t[s] = ul(e, s);
  return t;
}
class cl {
  constructor(t, s, n) {
    this._object = t, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = Ne(s) ? s : String(s), this._raw = /* @__PURE__ */ ne(t);
    let i = !0, o = t;
    if (!B(t) || Ne(this._key) || !Xs(this._key))
      do
        i = !/* @__PURE__ */ nn(o) || /* @__PURE__ */ $e(o);
      while (i && (o = o.__v_raw));
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
    return jr(this._raw, this._key);
  }
}
function ul(e, t, s) {
  return new cl(e, t, s);
}
class fl {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new qn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = gs - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    he !== this)
      return vo(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return _o(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function dl(e, t, s = !1) {
  let n, i;
  return Y(e) ? n = e : (n = e.get, i = e.set), new fl(n, i, s);
}
const Ms = {}, Fs = /* @__PURE__ */ new WeakMap();
let Mt;
function hl(e, t = !1, s = Mt) {
  if (s) {
    let n = Fs.get(s);
    n || Fs.set(s, n = []), n.push(e);
  }
}
function pl(e, t, s = de) {
  const { immediate: n, deep: i, once: o, scheduler: r, augmentJob: l, call: a } = s, f = (E) => i ? E : /* @__PURE__ */ $e(E) || i === !1 || i === 0 ? ft(E, 1) : ft(E);
  let c, h, v, m, O = !1, A = !1;
  if (/* @__PURE__ */ me(e) ? (h = () => e.value, O = /* @__PURE__ */ $e(e)) : /* @__PURE__ */ dt(e) ? (h = () => f(e), O = !0) : B(e) ? (A = !0, O = e.some((E) => /* @__PURE__ */ dt(E) || /* @__PURE__ */ $e(E)), h = () => e.map((E) => {
    if (/* @__PURE__ */ me(E))
      return E.value;
    if (/* @__PURE__ */ dt(E))
      return f(E);
    if (Y(E))
      return a ? a(E, 2) : E();
  })) : Y(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (v) {
      tt();
      try {
        v();
      } finally {
        st();
      }
    }
    const E = Mt;
    Mt = c;
    try {
      return a ? a(e, 3, [m]) : e(m);
    } finally {
      Mt = E;
    }
  } : h = Qe, t && i) {
    const E = h, H = i === !0 ? 1 / 0 : i;
    h = () => ft(E(), H);
  }
  const G = po(), V = () => {
    c.stop(), G && G.active && jn(G.effects, c);
  };
  if (o && t) {
    const E = t;
    t = (...H) => {
      const re = E(...H);
      return V(), re;
    };
  }
  let M = A ? new Array(e.length).fill(Ms) : Ms;
  const C = (E) => {
    if (!(!(c.flags & 1) || !c.dirty && !E))
      if (t) {
        const H = c.run();
        if (E || i || O || (A ? H.some((re, Q) => Ze(re, M[Q])) : Ze(H, M))) {
          v && v();
          const re = Mt;
          Mt = c;
          try {
            const Q = [
              H,
              // pass undefined as the old value when it's changed for the first time
              M === Ms ? void 0 : A && M[0] === Ms ? [] : M,
              m
            ];
            M = H, a ? a(t, 3, Q) : (
              // @ts-expect-error
              t(...Q)
            );
          } finally {
            Mt = re;
          }
        }
      } else
        c.run();
  };
  return l && l(C), c = new go(h), c.scheduler = r ? () => r(C, !1) : C, m = (E) => hl(E, !1, c), v = c.onStop = () => {
    const E = Fs.get(c);
    if (E) {
      if (a)
        a(E, 4);
      else
        for (const H of E) H();
      Fs.delete(c);
    }
  }, t ? n ? C(!0) : M = c.run() : r ? r(C.bind(null, !0), !0) : c.run(), V.pause = c.pause.bind(c), V.resume = c.resume.bind(c), V.stop = V, V;
}
function ft(e, t = 1 / 0, s) {
  if (t <= 0 || !ae(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ me(e))
    ft(e.value, t, s);
  else if (B(e))
    for (let n = 0; n < e.length; n++)
      ft(e[n], t, s);
  else if (so(e) || jt(e))
    e.forEach((n) => {
      ft(n, t, s);
    });
  else if (oo(e)) {
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
    on(i, t, s);
  }
}
function Fe(e, t, s, n) {
  if (Y(e)) {
    const i = Ss(e, t, s, n);
    return i && no(i) && i.catch((o) => {
      on(o, t, s);
    }), i;
  }
  if (B(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(Fe(e[o], t, s, n));
    return i;
  }
}
function on(e, t, s, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: r } = t && t.appContext.config || de;
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
    if (o) {
      tt(), Ss(o, null, 10, [
        e,
        a,
        f
      ]), st();
      return;
    }
  }
  gl(e, s, i, n, r);
}
function gl(e, t, s, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Ee = [];
let Je = -1;
const Bt = [];
let yt = null, Nt = 0;
const Po = /* @__PURE__ */ Promise.resolve();
let Us = null;
function qe(e) {
  const t = Us || Po;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ml(e) {
  let t = Je + 1, s = Ee.length;
  for (; t < s; ) {
    const n = t + s >>> 1, i = Ee[n], o = vs(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function Zn(e) {
  if (!(e.flags & 1)) {
    const t = vs(e), s = Ee[Ee.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= vs(s) ? Ee.push(e) : Ee.splice(ml(t), 0, e), e.flags |= 1, Ro();
  }
}
function Ro() {
  Us || (Us = Po.then($o));
}
function vl(e) {
  B(e) ? Bt.push(...e) : yt && e.id === -1 ? yt.splice(Nt + 1, 0, e) : e.flags & 1 || (Bt.push(e), e.flags |= 1), Ro();
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
function ko(e) {
  if (Bt.length) {
    const t = [...new Set(Bt)].sort(
      (s, n) => vs(s) - vs(n)
    );
    if (Bt.length = 0, yt) {
      yt.push(...t);
      return;
    }
    for (yt = t, Nt = 0; Nt < yt.length; Nt++) {
      const s = yt[Nt];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    yt = null, Nt = 0;
  }
}
const vs = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function $o(e) {
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
    Je = -1, Ee.length = 0, ko(), Us = null, (Ee.length || Bt.length) && $o();
  }
}
let De = null, Lo = null;
function Vs(e) {
  const t = De;
  return De = e, Lo = e && e.type.__scopeId || null, t;
}
function Oo(e, t = De, s) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Bs(-1);
    const o = Vs(t);
    let r;
    try {
      r = e(...i);
    } finally {
      Vs(o), n._d && Bs(1);
    }
    return r;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function rt(e, t) {
  if (De === null)
    return e;
  const s = un(De), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, r, l, a = de] = t[i];
    o && (Y(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && ft(r), n.push({
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
function It(e, t, s, n) {
  const i = e.dirs, o = t && t.dirs;
  for (let r = 0; r < i.length; r++) {
    const l = i[r];
    o && (l.oldValue = o[r].value);
    let a = l.dir[n];
    a && (tt(), Fe(a, s, 8, [
      e.el,
      l,
      e,
      t
    ]), st());
  }
}
function yl(e, t) {
  if (Ae) {
    let s = Ae.provides;
    const n = Ae.parent && Ae.parent.provides;
    n === s && (s = Ae.provides = Object.create(n)), s[e] = t;
  }
}
function ls(e, t, s = !1) {
  const n = ni();
  if (n || kt) {
    let i = kt ? kt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return s && Y(t) ? t.call(n && n.proxy) : t;
  }
}
function bl() {
  return !!(ni() || kt);
}
const _l = /* @__PURE__ */ Symbol.for("v-scx"), xl = () => ls(_l);
function ht(e, t, s) {
  return Do(e, t, s);
}
function Do(e, t, s = de) {
  const { immediate: n, deep: i, flush: o, once: r } = s, l = _e({}, s), a = t && n || !t && o !== "post";
  let f;
  if (_s) {
    if (o === "sync") {
      const m = xl();
      f = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = Qe, m.resume = Qe, m.pause = Qe, m;
    }
  }
  const c = Ae;
  l.call = (m, O, A) => Fe(m, c, O, A);
  let h = !1;
  o === "post" ? l.scheduler = (m) => {
    Me(m, c && c.suspense);
  } : o !== "sync" && (h = !0, l.scheduler = (m, O) => {
    O ? m() : Zn(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), h && (m.flags |= 2, c && (m.id = c.uid, m.i = c));
  };
  const v = pl(e, t, l);
  return _s && (f ? f.push(v) : a && v()), v;
}
function wl(e, t, s) {
  const n = this.proxy, i = pe(e) ? e.includes(".") ? No(n, e) : () => n[e] : e.bind(n, n);
  let o;
  Y(t) ? o = t : (o = t.handler, s = t);
  const r = Cs(this), l = Do(i, o.bind(n), s);
  return r(), l;
}
function No(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < s.length && n; i++)
      n = n[s[i]];
    return n;
  };
}
const Sl = /* @__PURE__ */ Symbol("_vte"), Fo = (e) => e.__isTeleport, Oe = /* @__PURE__ */ Symbol("_leaveCb"), Zt = /* @__PURE__ */ Symbol("_enterCb");
function Cl() {
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
const Le = [Function, Array], Uo = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Le,
  onEnter: Le,
  onAfterEnter: Le,
  onEnterCancelled: Le,
  // leave
  onBeforeLeave: Le,
  onLeave: Le,
  onAfterLeave: Le,
  onLeaveCancelled: Le,
  // appear
  onBeforeAppear: Le,
  onAppear: Le,
  onAfterAppear: Le,
  onAppearCancelled: Le
}, Vo = (e) => {
  const t = e.subTree;
  return t.component ? Vo(t.component) : t;
}, Il = {
  name: "BaseTransition",
  props: Uo,
  setup(e, { slots: t }) {
    const s = ni(), n = Cl();
    return () => {
      const i = t.default && Bo(t.default(), !0), o = i && i.length ? Ho(i) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        s.subTree ? Pe() : void 0
      );
      if (!o)
        return;
      const r = /* @__PURE__ */ ne(e), { mode: l } = r;
      if (n.isLeaving)
        return bn(o);
      const a = pi(o);
      if (!a)
        return bn(o);
      let f = kn(
        a,
        r,
        n,
        s,
        // #11061, ensure enterHooks is fresh after clone
        (h) => f = h
      );
      a.type !== Te && ys(a, f);
      let c = s.subTree && pi(s.subTree);
      if (c && c.type !== Te && !Pt(c, a) && Vo(s).type !== Te) {
        let h = kn(
          c,
          r,
          n,
          s
        );
        if (ys(c, h), l === "out-in" && a.type !== Te)
          return n.isLeaving = !0, h.afterLeave = () => {
            n.isLeaving = !1, s.job.flags & 8 || s.update(), delete h.afterLeave, c = void 0;
          }, bn(o);
        l === "in-out" && a.type !== Te ? h.delayLeave = (v, m, O) => {
          const A = jo(
            n,
            c
          );
          A[String(c.key)] = c, v[Oe] = () => {
            m(), v[Oe] = void 0, delete f.delayedLeave, c = void 0;
          }, f.delayedLeave = () => {
            O(), delete f.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return o;
    };
  }
};
function Ho(e) {
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
function jo(e, t) {
  const { leavingVNodes: s } = e;
  let n = s.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), s.set(t.type, n)), n;
}
function kn(e, t, s, n, i) {
  const {
    appear: o,
    mode: r,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: f,
    onAfterEnter: c,
    onEnterCancelled: h,
    onBeforeLeave: v,
    onLeave: m,
    onAfterLeave: O,
    onLeaveCancelled: A,
    onBeforeAppear: G,
    onAppear: V,
    onAfterAppear: M,
    onAppearCancelled: C
  } = t, E = String(e.key), H = jo(s, e), re = (R, J) => {
    R && Fe(
      R,
      n,
      9,
      J
    );
  }, Q = (R, J) => {
    const U = J[1];
    re(R, J), B(R) ? R.every((y) => y.length <= 1) && U() : R.length <= 1 && U();
  }, z = {
    mode: r,
    persisted: l,
    beforeEnter(R) {
      let J = a;
      if (!s.isMounted)
        if (o)
          J = G || a;
        else
          return;
      R[Oe] && R[Oe](
        !0
        /* cancelled */
      );
      const U = H[E];
      U && Pt(e, U) && U.el[Oe] && U.el[Oe](), re(J, [R]);
    },
    enter(R) {
      if (H[E] === e) return;
      let J = f, U = c, y = h;
      if (!s.isMounted)
        if (o)
          J = V || f, U = M || c, y = C || h;
        else
          return;
      let k = !1;
      R[Zt] = (ie) => {
        k || (k = !0, ie ? re(y, [R]) : re(U, [R]), z.delayedLeave && z.delayedLeave(), R[Zt] = void 0);
      };
      const W = R[Zt].bind(null, !1);
      J ? Q(J, [R, W]) : W();
    },
    leave(R, J) {
      const U = String(e.key);
      if (R[Zt] && R[Zt](
        !0
        /* cancelled */
      ), s.isUnmounting)
        return J();
      re(v, [R]);
      let y = !1;
      R[Oe] = (W) => {
        y || (y = !0, J(), W ? re(A, [R]) : re(O, [R]), R[Oe] = void 0, H[U] === e && delete H[U]);
      };
      const k = R[Oe].bind(null, !1);
      H[U] = e, m ? Q(m, [R, k]) : k();
    },
    clone(R) {
      const J = kn(
        R,
        t,
        s,
        n,
        i
      );
      return i && i(J), J;
    }
  };
  return z;
}
function bn(e) {
  if (rn(e))
    return e = _t(e), e.children = null, e;
}
function pi(e) {
  if (!rn(e))
    return Fo(e.type) && e.children ? Ho(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: s } = e;
  if (s) {
    if (t & 16)
      return s[0];
    if (t & 32 && Y(s.default))
      return s.default();
  }
}
function ys(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ys(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Bo(e, t = !1, s) {
  let n = [], i = 0;
  for (let o = 0; o < e.length; o++) {
    let r = e[o];
    const l = s == null ? r.key : String(s) + String(r.key != null ? r.key : o);
    r.type === te ? (r.patchFlag & 128 && i++, n = n.concat(
      Bo(r.children, t, l)
    )) : (t || r.type !== Te) && n.push(l != null ? _t(r, { key: l }) : r);
  }
  if (i > 1)
    for (let o = 0; o < n.length; o++)
      n[o].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function wt(e, t) {
  return Y(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    _e({ name: e.name }, t, { setup: e })
  ) : e;
}
function Ko(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function gi(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const Hs = /* @__PURE__ */ new WeakMap();
function as(e, t, s, n, i = !1) {
  if (B(e)) {
    e.forEach(
      (A, G) => as(
        A,
        t && (B(t) ? t[G] : t),
        s,
        n,
        i
      )
    );
    return;
  }
  if (cs(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && as(e, t, s, n.component.subTree);
    return;
  }
  const o = n.shapeFlag & 4 ? un(n.component) : n.el, r = i ? null : o, { i: l, r: a } = e, f = t && t.r, c = l.refs === de ? l.refs = {} : l.refs, h = l.setupState, v = /* @__PURE__ */ ne(h), m = h === de ? to : (A) => gi(c, A) ? !1 : le(v, A), O = (A, G) => !(G && gi(c, G));
  if (f != null && f !== a) {
    if (mi(t), pe(f))
      c[f] = null, m(f) && (h[f] = null);
    else if (/* @__PURE__ */ me(f)) {
      const A = t;
      O(f, A.k) && (f.value = null), A.k && (c[A.k] = null);
    }
  }
  if (Y(a)) {
    tt();
    try {
      Ss(a, l, 12, [r, c]);
    } finally {
      st();
    }
  } else {
    const A = pe(a), G = /* @__PURE__ */ me(a);
    if (A || G) {
      const V = () => {
        if (e.f) {
          const M = A ? m(a) ? h[a] : c[a] : O() || !e.k ? a.value : c[e.k];
          if (i)
            B(M) && jn(M, o);
          else if (B(M))
            M.includes(o) || M.push(o);
          else if (A)
            c[a] = [o], m(a) && (h[a] = c[a]);
          else {
            const C = [o];
            O(a, e.k) && (a.value = C), e.k && (c[e.k] = C);
          }
        } else A ? (c[a] = r, m(a) && (h[a] = r)) : G && (O(a, e.k) && (a.value = r), e.k && (c[e.k] = r));
      };
      if (r) {
        const M = () => {
          V(), Hs.delete(e);
        };
        M.id = -1, Hs.set(e, M), Me(M, s);
      } else
        mi(e), V();
    }
  }
}
function mi(e) {
  const t = Hs.get(e);
  t && (t.flags |= 8, Hs.delete(e));
}
Qs().requestIdleCallback;
Qs().cancelIdleCallback;
const cs = (e) => !!e.type.__asyncLoader, rn = (e) => e.type.__isKeepAlive;
function Tl(e, t) {
  Wo(e, "a", t);
}
function Al(e, t) {
  Wo(e, "da", t);
}
function Wo(e, t, s = Ae) {
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
      rn(i.parent.vnode) && Ml(n, t, s, i), i = i.parent;
  }
}
function Ml(e, t, s, n) {
  const i = ln(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  zo(() => {
    jn(n[t], i);
  }, s);
}
function ln(e, t, s = Ae, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []), o = t.__weh || (t.__weh = (...r) => {
      tt();
      const l = Cs(s), a = Fe(t, s, e, r);
      return l(), st(), a;
    });
    return n ? i.unshift(o) : i.push(o), o;
  }
}
const gt = (e) => (t, s = Ae) => {
  (!_s || e === "sp") && ln(e, (...n) => t(...n), s);
}, Pl = gt("bm"), Qn = gt("m"), Rl = gt(
  "bu"
), kl = gt("u"), ei = gt(
  "bum"
), zo = gt("um"), $l = gt(
  "sp"
), Ll = gt("rtg"), Ol = gt("rtc");
function Dl(e, t = Ae) {
  ln("ec", e, t);
}
const Nl = /* @__PURE__ */ Symbol.for("v-ndc");
function Ye(e, t, s, n) {
  let i;
  const o = s, r = B(e);
  if (r || pe(e)) {
    const l = r && /* @__PURE__ */ dt(e);
    let a = !1, f = !1;
    l && (a = !/* @__PURE__ */ $e(e), f = /* @__PURE__ */ pt(e), e = tn(e)), i = new Array(e.length);
    for (let c = 0, h = e.length; c < h; c++)
      i[c] = t(
        a ? f ? zt(He(e[c])) : He(e[c]) : e[c],
        c,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, o);
  } else if (ae(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, a) => t(l, a, void 0, o)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let a = 0, f = l.length; a < f; a++) {
        const c = l[a];
        i[a] = t(e[c], c, a, o);
      }
    }
  else
    i = [];
  return i;
}
const $n = (e) => e ? dr(e) ? un(e) : $n(e.parent) : null, us = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ _e(/* @__PURE__ */ Object.create(null), {
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
    $options: (e) => qo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Zn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = qe.bind(e.proxy)),
    $watch: (e) => wl.bind(e)
  })
), _n = (e, t) => e !== de && !e.__isScriptSetup && le(e, t), Fl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: i, props: o, accessCache: r, type: l, appContext: a } = e;
    if (t[0] !== "$") {
      const v = r[t];
      if (v !== void 0)
        switch (v) {
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
        if (_n(n, t))
          return r[t] = 1, n[t];
        if (i !== de && le(i, t))
          return r[t] = 2, i[t];
        if (le(o, t))
          return r[t] = 3, o[t];
        if (s !== de && le(s, t))
          return r[t] = 4, s[t];
        Ln && (r[t] = 0);
      }
    }
    const f = us[t];
    let c, h;
    if (f)
      return t === "$attrs" && Se(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (c = l.__cssModules) && (c = c[t])
    )
      return c;
    if (s !== de && le(s, t))
      return r[t] = 4, s[t];
    if (
      // global properties
      h = a.config.globalProperties, le(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: i, ctx: o } = e;
    return _n(i, t) ? (i[t] = s, !0) : n !== de && le(n, t) ? (n[t] = s, !0) : le(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: i, props: o, type: r }
  }, l) {
    let a;
    return !!(s[l] || e !== de && l[0] !== "$" && le(e, l) || _n(t, l) || le(o, l) || le(n, l) || le(us, l) || le(i.config.globalProperties, l) || (a = r.__cssModules) && a[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : le(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function vi(e) {
  return B(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let Ln = !0;
function Ul(e) {
  const t = qo(e), s = e.proxy, n = e.ctx;
  Ln = !1, t.beforeCreate && yi(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: r,
    watch: l,
    provide: a,
    inject: f,
    // lifecycle
    created: c,
    beforeMount: h,
    mounted: v,
    beforeUpdate: m,
    updated: O,
    activated: A,
    deactivated: G,
    beforeDestroy: V,
    beforeUnmount: M,
    destroyed: C,
    unmounted: E,
    render: H,
    renderTracked: re,
    renderTriggered: Q,
    errorCaptured: z,
    serverPrefetch: R,
    // public API
    expose: J,
    inheritAttrs: U,
    // assets
    components: y,
    directives: k,
    filters: W
  } = t;
  if (f && Vl(f, n, null), r)
    for (const X in r) {
      const ce = r[X];
      Y(ce) && (n[X] = ce.bind(s));
    }
  if (i) {
    const X = i.call(s, s);
    ae(X) && (e.data = /* @__PURE__ */ sn(X));
  }
  if (Ln = !0, o)
    for (const X in o) {
      const ce = o[X], nt = Y(ce) ? ce.bind(s, s) : Y(ce.get) ? ce.get.bind(s, s) : Qe, Is = !Y(ce) && Y(ce.set) ? ce.set.bind(s) : Qe, Ct = et({
        get: nt,
        set: Is
      });
      Object.defineProperty(n, X, {
        enumerable: !0,
        configurable: !0,
        get: () => Ct.value,
        set: (je) => Ct.value = je
      });
    }
  if (l)
    for (const X in l)
      Jo(l[X], n, s, X);
  if (a) {
    const X = Y(a) ? a.call(s) : a;
    Reflect.ownKeys(X).forEach((ce) => {
      yl(ce, X[ce]);
    });
  }
  c && yi(c, e, "c");
  function oe(X, ce) {
    B(ce) ? ce.forEach((nt) => X(nt.bind(s))) : ce && X(ce.bind(s));
  }
  if (oe(Pl, h), oe(Qn, v), oe(Rl, m), oe(kl, O), oe(Tl, A), oe(Al, G), oe(Dl, z), oe(Ol, re), oe(Ll, Q), oe(ei, M), oe(zo, E), oe($l, R), B(J))
    if (J.length) {
      const X = e.exposed || (e.exposed = {});
      J.forEach((ce) => {
        Object.defineProperty(X, ce, {
          get: () => s[ce],
          set: (nt) => s[ce] = nt,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  H && e.render === Qe && (e.render = H), U != null && (e.inheritAttrs = U), y && (e.components = y), k && (e.directives = k), R && Ko(e);
}
function Vl(e, t, s = Qe) {
  B(e) && (e = On(e));
  for (const n in e) {
    const i = e[n];
    let o;
    ae(i) ? "default" in i ? o = ls(
      i.from || n,
      i.default,
      !0
    ) : o = ls(i.from || n) : o = ls(i), /* @__PURE__ */ me(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (r) => o.value = r
    }) : t[n] = o;
  }
}
function yi(e, t, s) {
  Fe(
    B(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function Jo(e, t, s, n) {
  let i = n.includes(".") ? No(s, n) : () => s[n];
  if (pe(e)) {
    const o = t[e];
    Y(o) && ht(i, o);
  } else if (Y(e))
    ht(i, e.bind(s));
  else if (ae(e))
    if (B(e))
      e.forEach((o) => Jo(o, t, s, n));
    else {
      const o = Y(e.handler) ? e.handler.bind(s) : t[e.handler];
      Y(o) && ht(i, o, e);
    }
}
function qo(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: r }
  } = e.appContext, l = o.get(t);
  let a;
  return l ? a = l : !i.length && !s && !n ? a = t : (a = {}, i.length && i.forEach(
    (f) => js(a, f, r, !0)
  ), js(a, t, r)), ae(t) && o.set(t, a), a;
}
function js(e, t, s, n = !1) {
  const { mixins: i, extends: o } = t;
  o && js(e, o, s, !0), i && i.forEach(
    (r) => js(e, r, s, !0)
  );
  for (const r in t)
    if (!(n && r === "expose")) {
      const l = Hl[r] || s && s[r];
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const Hl = {
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
    return _e(
      Y(e) ? e.call(this, this) : e,
      Y(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function jl(e, t) {
  return ts(On(e), On(t));
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
function ts(e, t) {
  return e ? _e(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function _i(e, t) {
  return e ? B(e) && B(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : _e(
    /* @__PURE__ */ Object.create(null),
    vi(e),
    vi(t ?? {})
  ) : t;
}
function Bl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = _e(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = Ce(e[n], t[n]);
  return s;
}
function Go() {
  return {
    app: null,
    config: {
      isNativeTag: to,
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
    Y(n) || (n = _e({}, n)), i != null && !ae(i) && (i = null);
    const o = Go(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const f = o.app = {
      _uid: Kl++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Ca,
      get config() {
        return o.config;
      },
      set config(c) {
      },
      use(c, ...h) {
        return r.has(c) || (c && Y(c.install) ? (r.add(c), c.install(f, ...h)) : Y(c) && (r.add(c), c(f, ...h))), f;
      },
      mixin(c) {
        return o.mixins.includes(c) || o.mixins.push(c), f;
      },
      component(c, h) {
        return h ? (o.components[c] = h, f) : o.components[c];
      },
      directive(c, h) {
        return h ? (o.directives[c] = h, f) : o.directives[c];
      },
      mount(c, h, v) {
        if (!a) {
          const m = f._ceVNode || ee(n, i);
          return m.appContext = o, v === !0 ? v = "svg" : v === !1 && (v = void 0), e(m, c, v), a = !0, f._container = c, c.__vue_app__ = f, un(m.component);
        }
      },
      onUnmount(c) {
        l.push(c);
      },
      unmount() {
        a && (Fe(
          l,
          f._instance,
          16
        ), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(c, h) {
        return o.provides[c] = h, f;
      },
      runWithContext(c) {
        const h = kt;
        kt = f;
        try {
          return c();
        } finally {
          kt = h;
        }
      }
    };
    return f;
  };
}
let kt = null;
const zl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ue(t)}Modifiers`] || e[`${xt(t)}Modifiers`];
function Jl(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || de;
  let i = s;
  const o = t.startsWith("update:"), r = o && zl(n, t.slice(7));
  r && (r.trim && (i = s.map((c) => pe(c) ? c.trim() : c)), r.number && (i = s.map(Bn)));
  let l, a = n[l = pn(t)] || // also try camelCase event handler (#2249)
  n[l = pn(Ue(t))];
  !a && o && (a = n[l = pn(xt(t))]), a && Fe(
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
    e.emitted[l] = !0, Fe(
      f,
      e,
      6,
      i
    );
  }
}
const ql = /* @__PURE__ */ new WeakMap();
function Yo(e, t, s = !1) {
  const n = s ? ql : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let r = {}, l = !1;
  if (!Y(e)) {
    const a = (f) => {
      const c = Yo(f, t, !0);
      c && (l = !0, _e(r, c));
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !o && !l ? (ae(e) && n.set(e, null), null) : (B(o) ? o.forEach((a) => r[a] = null) : _e(r, o), ae(e) && n.set(e, r), r);
}
function an(e, t) {
  return !e || !Gs(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), le(e, t[0].toLowerCase() + t.slice(1)) || le(e, xt(t)) || le(e, t));
}
function xi(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: i,
    propsOptions: [o],
    slots: r,
    attrs: l,
    emit: a,
    render: f,
    renderCache: c,
    props: h,
    data: v,
    setupState: m,
    ctx: O,
    inheritAttrs: A
  } = e, G = Vs(e);
  let V, M;
  try {
    if (s.shapeFlag & 4) {
      const E = i || n, H = E;
      V = Xe(
        f.call(
          H,
          E,
          c,
          h,
          m,
          v,
          O
        )
      ), M = l;
    } else {
      const E = t;
      V = Xe(
        E.length > 1 ? E(
          h,
          { attrs: l, slots: r, emit: a }
        ) : E(
          h,
          null
        )
      ), M = t.props ? l : Gl(l);
    }
  } catch (E) {
    fs.length = 0, on(E, e, 1), V = ee(Te);
  }
  let C = V;
  if (M && A !== !1) {
    const E = Object.keys(M), { shapeFlag: H } = C;
    E.length && H & 7 && (o && E.some(Ys) && (M = Yl(
      M,
      o
    )), C = _t(C, M, !1, !0));
  }
  return s.dirs && (C = _t(C, null, !1, !0), C.dirs = C.dirs ? C.dirs.concat(s.dirs) : s.dirs), s.transition && ys(C, s.transition), V = C, Vs(G), V;
}
const Gl = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Gs(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, Yl = (e, t) => {
  const s = {};
  for (const n in e)
    (!Ys(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function Xl(e, t, s) {
  const { props: n, children: i, component: o } = e, { props: r, children: l, patchFlag: a } = t, f = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return n ? wi(n, r, f) : !!r;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        const v = c[h];
        if (Xo(r, n, v) && !an(f, v))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : n === r ? !1 : n ? r ? wi(n, r, f) : !0 : !!r;
  return !1;
}
function wi(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (Xo(t, e, o) && !an(s, o))
      return !0;
  }
  return !1;
}
function Xo(e, t, s) {
  const n = e[s], i = t[s];
  return s === "style" && ae(n) && ae(i) ? !Kn(n, i) : n !== i;
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
const Zo = {}, Qo = () => Object.create(Zo), er = (e) => Object.getPrototypeOf(e) === Zo;
function Ql(e, t, s, n = !1) {
  const i = {}, o = Qo();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), tr(e, t, i, o);
  for (const r in e.propsOptions[0])
    r in i || (i[r] = void 0);
  s ? e.props = n ? i : /* @__PURE__ */ il(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function ea(e, t, s, n) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: r }
  } = e, l = /* @__PURE__ */ ne(i), [a] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const c = e.vnode.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        let v = c[h];
        if (an(e.emitsOptions, v))
          continue;
        const m = t[v];
        if (a)
          if (le(o, v))
            m !== o[v] && (o[v] = m, f = !0);
          else {
            const O = Ue(v);
            i[O] = Dn(
              a,
              l,
              O,
              m,
              e,
              !1
            );
          }
        else
          m !== o[v] && (o[v] = m, f = !0);
      }
    }
  } else {
    tr(e, t, i, o) && (f = !0);
    let c;
    for (const h in l)
      (!t || // for camelCase
      !le(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = xt(h)) === h || !le(t, c))) && (a ? s && // for camelCase
      (s[h] !== void 0 || // for kebab-case
      s[c] !== void 0) && (i[h] = Dn(
        a,
        l,
        h,
        void 0,
        e,
        !0
      )) : delete i[h]);
    if (o !== l)
      for (const h in o)
        (!t || !le(t, h)) && (delete o[h], f = !0);
  }
  f && ut(e.attrs, "set", "");
}
function tr(e, t, s, n) {
  const [i, o] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let a in t) {
      if (is(a))
        continue;
      const f = t[a];
      let c;
      i && le(i, c = Ue(a)) ? !o || !o.includes(c) ? s[c] = f : (l || (l = {}))[c] = f : an(e.emitsOptions, a) || (!(a in n) || f !== n[a]) && (n[a] = f, r = !0);
    }
  if (o) {
    const a = /* @__PURE__ */ ne(s), f = l || de;
    for (let c = 0; c < o.length; c++) {
      const h = o[c];
      s[h] = Dn(
        i,
        a,
        h,
        f[h],
        e,
        !le(f, h)
      );
    }
  }
  return r;
}
function Dn(e, t, s, n, i, o) {
  const r = e[s];
  if (r != null) {
    const l = le(r, "default");
    if (l && n === void 0) {
      const a = r.default;
      if (r.type !== Function && !r.skipFactory && Y(a)) {
        const { propsDefaults: f } = i;
        if (s in f)
          n = f[s];
        else {
          const c = Cs(i);
          n = f[s] = a.call(
            null,
            t
          ), c();
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
    ] && (n === "" || n === xt(s)) && (n = !0));
  }
  return n;
}
const ta = /* @__PURE__ */ new WeakMap();
function sr(e, t, s = !1) {
  const n = s ? ta : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, r = {}, l = [];
  let a = !1;
  if (!Y(e)) {
    const c = (h) => {
      a = !0;
      const [v, m] = sr(h, t, !0);
      _e(r, v), m && l.push(...m);
    };
    !s && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!o && !a)
    return ae(e) && n.set(e, Ht), Ht;
  if (B(o))
    for (let c = 0; c < o.length; c++) {
      const h = Ue(o[c]);
      Si(h) && (r[h] = de);
    }
  else if (o)
    for (const c in o) {
      const h = Ue(c);
      if (Si(h)) {
        const v = o[c], m = r[h] = B(v) || Y(v) ? { type: v } : _e({}, v), O = m.type;
        let A = !1, G = !0;
        if (B(O))
          for (let V = 0; V < O.length; ++V) {
            const M = O[V], C = Y(M) && M.name;
            if (C === "Boolean") {
              A = !0;
              break;
            } else C === "String" && (G = !1);
          }
        else
          A = Y(O) && O.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = A, m[
          1
          /* shouldCastTrue */
        ] = G, (A || le(m, "default")) && l.push(h);
      }
    }
  const f = [r, l];
  return ae(e) && n.set(e, f), f;
}
function Si(e) {
  return e[0] !== "$" && !is(e);
}
const ti = (e) => e === "_" || e === "_ctx" || e === "$stable", si = (e) => B(e) ? e.map(Xe) : [Xe(e)], sa = (e, t, s) => {
  if (t._n)
    return t;
  const n = Oo((...i) => si(t(...i)), s);
  return n._c = !1, n;
}, nr = (e, t, s) => {
  const n = e._ctx;
  for (const i in e) {
    if (ti(i)) continue;
    const o = e[i];
    if (Y(o))
      t[i] = sa(i, o, n);
    else if (o != null) {
      const r = si(o);
      t[i] = () => r;
    }
  }
}, ir = (e, t) => {
  const s = si(t);
  e.slots.default = () => s;
}, or = (e, t, s) => {
  for (const n in t)
    (s || !ti(n)) && (e[n] = t[n]);
}, na = (e, t, s) => {
  const n = e.slots = Qo();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (or(n, t, s), s && lo(n, "_", i, !0)) : nr(t, n);
  } else t && ir(e, t);
}, ia = (e, t, s) => {
  const { vnode: n, slots: i } = e;
  let o = !0, r = de;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? o = !1 : or(i, t, s) : (o = !t.$stable, nr(t, i)), r = t;
  } else t && (ir(e, t), r = { default: 1 });
  if (o)
    for (const l in i)
      !ti(l) && r[l] == null && delete i[l];
}, Me = ca;
function oa(e) {
  return ra(e);
}
function ra(e, t) {
  const s = Qs();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: o,
    createElement: r,
    createText: l,
    createComment: a,
    setText: f,
    setElementText: c,
    parentNode: h,
    nextSibling: v,
    setScopeId: m = Qe,
    insertStaticContent: O
  } = e, A = (u, d, g, S = null, x = null, b = null, P = void 0, T = null, I = !!d.dynamicChildren) => {
    if (u === d)
      return;
    u && !Pt(u, d) && (S = Es(u), je(u, x, b, !0), u = null), d.patchFlag === -2 && (I = !1, d.dynamicChildren = null);
    const { type: _, ref: K, shapeFlag: N } = d;
    switch (_) {
      case cn:
        G(u, d, g, S);
        break;
      case Te:
        V(u, d, g, S);
        break;
      case Os:
        u == null && M(d, g, S, P);
        break;
      case te:
        y(
          u,
          d,
          g,
          S,
          x,
          b,
          P,
          T,
          I
        );
        break;
      default:
        N & 1 ? H(
          u,
          d,
          g,
          S,
          x,
          b,
          P,
          T,
          I
        ) : N & 6 ? k(
          u,
          d,
          g,
          S,
          x,
          b,
          P,
          T,
          I
        ) : (N & 64 || N & 128) && _.process(
          u,
          d,
          g,
          S,
          x,
          b,
          P,
          T,
          I,
          Gt
        );
    }
    K != null && x ? as(K, u && u.ref, b, d || u, !d) : K == null && u && u.ref != null && as(u.ref, null, b, u, !0);
  }, G = (u, d, g, S) => {
    if (u == null)
      n(
        d.el = l(d.children),
        g,
        S
      );
    else {
      const x = d.el = u.el;
      d.children !== u.children && f(x, d.children);
    }
  }, V = (u, d, g, S) => {
    u == null ? n(
      d.el = a(d.children || ""),
      g,
      S
    ) : d.el = u.el;
  }, M = (u, d, g, S) => {
    [u.el, u.anchor] = O(
      u.children,
      d,
      g,
      S,
      u.el,
      u.anchor
    );
  }, C = ({ el: u, anchor: d }, g, S) => {
    let x;
    for (; u && u !== d; )
      x = v(u), n(u, g, S), u = x;
    n(d, g, S);
  }, E = ({ el: u, anchor: d }) => {
    let g;
    for (; u && u !== d; )
      g = v(u), i(u), u = g;
    i(d);
  }, H = (u, d, g, S, x, b, P, T, I) => {
    if (d.type === "svg" ? P = "svg" : d.type === "math" && (P = "mathml"), u == null)
      re(
        d,
        g,
        S,
        x,
        b,
        P,
        T,
        I
      );
    else {
      const _ = u.el && u.el._isVueCE ? u.el : null;
      try {
        _ && _._beginPatch(), R(
          u,
          d,
          x,
          b,
          P,
          T,
          I
        );
      } finally {
        _ && _._endPatch();
      }
    }
  }, re = (u, d, g, S, x, b, P, T) => {
    let I, _;
    const { props: K, shapeFlag: N, transition: j, dirs: q } = u;
    if (I = u.el = r(
      u.type,
      b,
      K && K.is,
      K
    ), N & 8 ? c(I, u.children) : N & 16 && z(
      u.children,
      I,
      null,
      S,
      x,
      xn(u, b),
      P,
      T
    ), q && It(u, null, S, "created"), Q(I, u, u.scopeId, P, S), K) {
      for (const fe in K)
        fe !== "value" && !is(fe) && o(I, fe, null, K[fe], b, S);
      "value" in K && o(I, "value", null, K.value, b), (_ = K.onVnodeBeforeMount) && ze(_, S, u);
    }
    q && It(u, null, S, "beforeMount");
    const se = la(x, j);
    se && j.beforeEnter(I), n(I, d, g), ((_ = K && K.onVnodeMounted) || se || q) && Me(() => {
      try {
        _ && ze(_, S, u), se && j.enter(I), q && It(u, null, S, "mounted");
      } finally {
      }
    }, x);
  }, Q = (u, d, g, S, x) => {
    if (g && m(u, g), S)
      for (let b = 0; b < S.length; b++)
        m(u, S[b]);
    if (x) {
      let b = x.subTree;
      if (d === b || cr(b.type) && (b.ssContent === d || b.ssFallback === d)) {
        const P = x.vnode;
        Q(
          u,
          P,
          P.scopeId,
          P.slotScopeIds,
          x.parent
        );
      }
    }
  }, z = (u, d, g, S, x, b, P, T, I = 0) => {
    for (let _ = I; _ < u.length; _++) {
      const K = u[_] = T ? ct(u[_]) : Xe(u[_]);
      A(
        null,
        K,
        d,
        g,
        S,
        x,
        b,
        P,
        T
      );
    }
  }, R = (u, d, g, S, x, b, P) => {
    const T = d.el = u.el;
    let { patchFlag: I, dynamicChildren: _, dirs: K } = d;
    I |= u.patchFlag & 16;
    const N = u.props || de, j = d.props || de;
    let q;
    if (g && Et(g, !1), (q = j.onVnodeBeforeUpdate) && ze(q, g, d, u), K && It(d, u, g, "beforeUpdate"), g && Et(g, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    _ && (!u.dynamicChildren || u.dynamicChildren.length !== _.length) && (I = 0, P = !1, _ = null), (N.innerHTML && j.innerHTML == null || N.textContent && j.textContent == null) && c(T, ""), _ ? J(
      u.dynamicChildren,
      _,
      T,
      g,
      S,
      xn(d, x),
      b
    ) : P || ce(
      u,
      d,
      T,
      null,
      g,
      S,
      xn(d, x),
      b,
      !1
    ), I > 0) {
      if (I & 16)
        U(T, N, j, g, x);
      else if (I & 2 && N.class !== j.class && o(T, "class", null, j.class, x), I & 4 && o(T, "style", N.style, j.style, x), I & 8) {
        const se = d.dynamicProps;
        for (let fe = 0; fe < se.length; fe++) {
          const ue = se[fe], ve = N[ue], we = j[ue];
          (we !== ve || ue === "value") && o(T, ue, ve, we, x, g);
        }
      }
      I & 1 && u.children !== d.children && c(T, d.children);
    } else !P && _ == null && U(T, N, j, g, x);
    ((q = j.onVnodeUpdated) || K) && Me(() => {
      q && ze(q, g, d, u), K && It(d, u, g, "updated");
    }, S);
  }, J = (u, d, g, S, x, b, P) => {
    for (let T = 0; T < d.length; T++) {
      const I = u[T], _ = d[T], K = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        I.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (I.type === te || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Pt(I, _) || // - In the case of a component, it could contain anything.
        I.shapeFlag & 198) ? h(I.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      A(
        I,
        _,
        K,
        null,
        S,
        x,
        b,
        P,
        !0
      );
    }
  }, U = (u, d, g, S, x) => {
    if (d !== g) {
      if (d !== de)
        for (const b in d)
          !is(b) && !(b in g) && o(
            u,
            b,
            d[b],
            null,
            x,
            S
          );
      for (const b in g) {
        if (is(b)) continue;
        const P = g[b], T = d[b];
        P !== T && b !== "value" && o(u, b, T, P, x, S);
      }
      "value" in g && o(u, "value", d.value, g.value, x);
    }
  }, y = (u, d, g, S, x, b, P, T, I) => {
    const _ = d.el = u ? u.el : l(""), K = d.anchor = u ? u.anchor : l("");
    let { patchFlag: N, dynamicChildren: j, slotScopeIds: q } = d;
    q && (T = T ? T.concat(q) : q), u == null ? (n(_, g, S), n(K, g, S), z(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      g,
      K,
      x,
      b,
      P,
      T,
      I
    )) : N > 0 && N & 64 && j && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === j.length ? (J(
      u.dynamicChildren,
      j,
      g,
      x,
      b,
      P,
      T
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || x && d === x.subTree) && rr(
      u,
      d,
      !0
      /* shallow */
    )) : ce(
      u,
      d,
      g,
      K,
      x,
      b,
      P,
      T,
      I
    );
  }, k = (u, d, g, S, x, b, P, T, I) => {
    d.slotScopeIds = T, u == null ? d.shapeFlag & 512 ? x.ctx.activate(
      d,
      g,
      S,
      P,
      I
    ) : W(
      d,
      g,
      S,
      x,
      b,
      P,
      I
    ) : ie(u, d, I);
  }, W = (u, d, g, S, x, b, P) => {
    const T = u.component = va(
      u,
      S,
      x
    );
    if (rn(u) && (T.ctx.renderer = Gt), ya(T, !1, P), T.asyncDep) {
      if (x && x.registerDep(T, oe, P), !u.el) {
        const I = T.subTree = ee(Te);
        V(null, I, d, g), u.placeholder = I.el;
      }
    } else
      oe(
        T,
        u,
        d,
        g,
        x,
        b,
        P
      );
  }, ie = (u, d, g) => {
    const S = d.component = u.component;
    if (Xl(u, d, g))
      if (S.asyncDep && !S.asyncResolved) {
        X(S, d, g);
        return;
      } else
        S.next = d, S.update();
    else
      d.el = u.el, S.vnode = d;
  }, oe = (u, d, g, S, x, b, P) => {
    const T = () => {
      if (u.isMounted) {
        let { next: N, bu: j, u: q, parent: se, vnode: fe } = u;
        {
          const Ke = lr(u);
          if (Ke) {
            N && (N.el = fe.el, X(u, N, P)), Ke.asyncDep.then(() => {
              Me(() => {
                u.isUnmounted || _();
              }, x);
            });
            return;
          }
        }
        let ue = N, ve;
        Et(u, !1), N ? (N.el = fe.el, X(u, N, P)) : N = fe, j && Ls(j), (ve = N.props && N.props.onVnodeBeforeUpdate) && ze(ve, se, N, fe), Et(u, !0);
        const we = xi(u), Be = u.subTree;
        u.subTree = we, A(
          Be,
          we,
          // parent may have changed if it's in a teleport
          h(Be.el),
          // anchor may have changed if it's in a fragment
          Es(Be),
          u,
          x,
          b
        ), N.el = we.el, ue === null && Zl(u, we.el), q && Me(q, x), (ve = N.props && N.props.onVnodeUpdated) && Me(
          () => ze(ve, se, N, fe),
          x
        );
      } else {
        let N;
        const { el: j, props: q } = d, { bm: se, m: fe, parent: ue, root: ve, type: we } = u, Be = cs(d);
        Et(u, !1), se && Ls(se), !Be && (N = q && q.onVnodeBeforeMount) && ze(N, ue, d), Et(u, !0);
        {
          ve.ce && ve.ce._hasShadowRoot() && ve.ce._injectChildStyle(
            we,
            u.parent ? u.parent.type : void 0
          );
          const Ke = u.subTree = xi(u);
          A(
            null,
            Ke,
            g,
            S,
            u,
            x,
            b
          ), d.el = Ke.el;
        }
        if (fe && Me(fe, x), !Be && (N = q && q.onVnodeMounted)) {
          const Ke = d;
          Me(
            () => ze(N, ue, Ke),
            x
          );
        }
        (d.shapeFlag & 256 || ue && cs(ue.vnode) && ue.vnode.shapeFlag & 256) && u.a && Me(u.a, x), u.isMounted = !0, d = g = S = null;
      }
    };
    u.scope.on();
    const I = u.effect = new go(T);
    u.scope.off();
    const _ = u.update = I.run.bind(I), K = u.job = I.runIfDirty.bind(I);
    K.i = u, K.id = u.uid, I.scheduler = () => Zn(K), Et(u, !0), _();
  }, X = (u, d, g) => {
    d.component = u;
    const S = u.vnode.props;
    u.vnode = d, u.next = null, ea(u, d.props, S, g), ia(u, d.children, g), tt(), hi(u), st();
  }, ce = (u, d, g, S, x, b, P, T, I = !1) => {
    const _ = u && u.children, K = u ? u.shapeFlag : 0, N = d.children, { patchFlag: j, shapeFlag: q } = d;
    if (j > 0) {
      if (j & 128) {
        Is(
          _,
          N,
          g,
          S,
          x,
          b,
          P,
          T,
          I
        );
        return;
      } else if (j & 256) {
        nt(
          _,
          N,
          g,
          S,
          x,
          b,
          P,
          T,
          I
        );
        return;
      }
    }
    q & 8 ? (K & 16 && qt(_, x, b), N !== _ && c(g, N)) : K & 16 ? q & 16 ? Is(
      _,
      N,
      g,
      S,
      x,
      b,
      P,
      T,
      I
    ) : qt(_, x, b, !0) : (K & 8 && c(g, ""), q & 16 && z(
      N,
      g,
      S,
      x,
      b,
      P,
      T,
      I
    ));
  }, nt = (u, d, g, S, x, b, P, T, I) => {
    u = u || Ht, d = d || Ht;
    const _ = u.length, K = d.length, N = Math.min(_, K);
    let j;
    for (j = 0; j < N; j++) {
      const q = d[j] = I ? ct(d[j]) : Xe(d[j]);
      A(
        u[j],
        q,
        g,
        null,
        x,
        b,
        P,
        T,
        I
      );
    }
    _ > K ? qt(
      u,
      x,
      b,
      !0,
      !1,
      N
    ) : z(
      d,
      g,
      S,
      x,
      b,
      P,
      T,
      I,
      N
    );
  }, Is = (u, d, g, S, x, b, P, T, I) => {
    let _ = 0;
    const K = d.length;
    let N = u.length - 1, j = K - 1;
    for (; _ <= N && _ <= j; ) {
      const q = u[_], se = d[_] = I ? ct(d[_]) : Xe(d[_]);
      if (Pt(q, se))
        A(
          q,
          se,
          g,
          null,
          x,
          b,
          P,
          T,
          I
        );
      else
        break;
      _++;
    }
    for (; _ <= N && _ <= j; ) {
      const q = u[N], se = d[j] = I ? ct(d[j]) : Xe(d[j]);
      if (Pt(q, se))
        A(
          q,
          se,
          g,
          null,
          x,
          b,
          P,
          T,
          I
        );
      else
        break;
      N--, j--;
    }
    if (_ > N) {
      if (_ <= j) {
        const q = j + 1, se = q < K ? d[q].el : S;
        for (; _ <= j; )
          A(
            null,
            d[_] = I ? ct(d[_]) : Xe(d[_]),
            g,
            se,
            x,
            b,
            P,
            T,
            I
          ), _++;
      }
    } else if (_ > j)
      for (; _ <= N; )
        je(u[_], x, b, !0), _++;
    else {
      const q = _, se = _, fe = /* @__PURE__ */ new Map();
      for (_ = se; _ <= j; _++) {
        const Re = d[_] = I ? ct(d[_]) : Xe(d[_]);
        Re.key != null && fe.set(Re.key, _);
      }
      let ue, ve = 0;
      const we = j - se + 1;
      let Be = !1, Ke = 0;
      const Yt = new Array(we);
      for (_ = 0; _ < we; _++) Yt[_] = 0;
      for (_ = q; _ <= N; _++) {
        const Re = u[_];
        if (ve >= we) {
          je(Re, x, b, !0);
          continue;
        }
        let We;
        if (Re.key != null)
          We = fe.get(Re.key);
        else
          for (ue = se; ue <= j; ue++)
            if (Yt[ue - se] === 0 && Pt(Re, d[ue])) {
              We = ue;
              break;
            }
        We === void 0 ? je(Re, x, b, !0) : (Yt[We - se] = _ + 1, We >= Ke ? Ke = We : Be = !0, A(
          Re,
          d[We],
          g,
          null,
          x,
          b,
          P,
          T,
          I
        ), ve++);
      }
      const ri = Be ? aa(Yt) : Ht;
      for (ue = ri.length - 1, _ = we - 1; _ >= 0; _--) {
        const Re = se + _, We = d[Re], li = d[Re + 1], ai = Re + 1 < K ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          li.el || ar(li)
        ) : S;
        Yt[_] === 0 ? A(
          null,
          We,
          g,
          ai,
          x,
          b,
          P,
          T,
          I
        ) : Be && (ue < 0 || _ !== ri[ue] ? Ct(We, g, ai, 2) : ue--);
      }
    }
  }, Ct = (u, d, g, S, x = null) => {
    const { el: b, type: P, transition: T, children: I, shapeFlag: _ } = u;
    if (_ & 6) {
      Ct(u.component.subTree, d, g, S);
      return;
    }
    if (_ & 128) {
      u.suspense.move(d, g, S);
      return;
    }
    if (_ & 64) {
      P.move(u, d, g, Gt);
      return;
    }
    if (P === te) {
      n(b, d, g);
      for (let N = 0; N < I.length; N++)
        Ct(I[N], d, g, S);
      n(u.anchor, d, g);
      return;
    }
    if (P === Os) {
      C(u, d, g);
      return;
    }
    if (S !== 2 && _ & 1 && T)
      if (S === 0)
        T.persisted && !b[Oe] ? n(b, d, g) : (T.beforeEnter(b), n(b, d, g), Me(() => T.enter(b), x));
      else {
        const { leave: N, delayLeave: j, afterLeave: q } = T, se = () => {
          u.ctx.isUnmounted ? i(b) : n(b, d, g);
        }, fe = () => {
          const ue = b._isLeaving || !!b[Oe];
          b._isLeaving && b[Oe](
            !0
            /* cancelled */
          ), T.persisted && !ue ? se() : N(b, () => {
            se(), q && q();
          });
        };
        j ? j(b, se, fe) : fe();
      }
    else
      n(b, d, g);
  }, je = (u, d, g, S = !1, x = !1) => {
    const {
      type: b,
      props: P,
      ref: T,
      children: I,
      dynamicChildren: _,
      shapeFlag: K,
      patchFlag: N,
      dirs: j,
      cacheIndex: q,
      memo: se
    } = u;
    if (N === -2 && (x = !1), T != null && (tt(), as(T, null, g, u, !0), st()), q != null && (d.renderCache[q] = void 0), K & 256) {
      d.ctx.deactivate(u);
      return;
    }
    const fe = K & 1 && j, ue = !cs(u);
    let ve;
    if (ue && (ve = P && P.onVnodeBeforeUnmount) && ze(ve, d, u), K & 6)
      Er(u.component, g, S);
    else {
      if (K & 128) {
        u.suspense.unmount(g, S);
        return;
      }
      fe && It(u, null, d, "beforeUnmount"), K & 64 ? u.type.remove(
        u,
        d,
        g,
        Gt,
        S
      ) : _ && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !_.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== te || N > 0 && N & 64) ? qt(
        _,
        d,
        g,
        !1,
        !0
      ) : (b === te && N & 384 || !x && K & 16) && qt(I, d, g), S && ii(u);
    }
    const we = se != null && q == null;
    (ue && (ve = P && P.onVnodeUnmounted) || fe || we) && Me(() => {
      ve && ze(ve, d, u), fe && It(u, null, d, "unmounted"), we && (u.el = null);
    }, g);
  }, ii = (u) => {
    const { type: d, el: g, anchor: S, transition: x } = u;
    if (d === te) {
      Ir(g, S);
      return;
    }
    if (d === Os) {
      E(u);
      return;
    }
    const b = () => {
      i(g), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (u.shapeFlag & 1 && x && !x.persisted) {
      const { leave: P, delayLeave: T } = x, I = () => P(g, b);
      T ? T(u.el, b, I) : I();
    } else
      b();
  }, Ir = (u, d) => {
    let g;
    for (; u !== d; )
      g = v(u), i(u), u = g;
    i(d);
  }, Er = (u, d, g) => {
    const { bum: S, scope: x, job: b, subTree: P, um: T, m: I, a: _ } = u;
    Ci(I), Ci(_), S && Ls(S), x.stop(), b && (b.flags |= 8, je(P, u, d, g)), T && Me(T, d), Me(() => {
      u.isUnmounted = !0;
    }, d);
  }, qt = (u, d, g, S = !1, x = !1, b = 0) => {
    for (let P = b; P < u.length; P++)
      je(u[P], d, g, S, x);
  }, Es = (u) => {
    if (u.shapeFlag & 6)
      return Es(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const d = v(u.anchor || u.el), g = d && d[Sl];
    return g ? v(g) : d;
  };
  let hn = !1;
  const oi = (u, d, g) => {
    let S;
    u == null ? d._vnode && (je(d._vnode, null, null, !0), S = d._vnode.component) : A(
      d._vnode || null,
      u,
      d,
      null,
      null,
      null,
      g
    ), d._vnode = u, hn || (hn = !0, hi(S), ko(), hn = !1);
  }, Gt = {
    p: A,
    um: je,
    m: Ct,
    r: ii,
    mt: W,
    mc: z,
    pc: ce,
    pbc: J,
    n: Es,
    o: e
  };
  return {
    render: oi,
    hydrate: void 0,
    createApp: Wl(oi)
  };
}
function xn({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function Et({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function la(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function rr(e, t, s = !1) {
  const n = e.children, i = t.children;
  if (B(n) && B(i))
    for (let o = 0; o < n.length; o++) {
      const r = n[o];
      let l = i[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[o] = ct(i[o]), l.el = r.el), !s && l.patchFlag !== -2 && rr(r, l)), l.type === cn && (l.patchFlag === -1 && (l = i[o] = ct(l)), l.el = r.el), l.type === Te && !l.el && (l.el = r.el);
    }
}
function aa(e) {
  const t = e.slice(), s = [0];
  let n, i, o, r, l;
  const a = e.length;
  for (n = 0; n < a; n++) {
    const f = e[n];
    if (f !== 0) {
      if (i = s[s.length - 1], e[i] < f) {
        t[n] = i, s.push(n);
        continue;
      }
      for (o = 0, r = s.length - 1; o < r; )
        l = o + r >> 1, e[s[l]] < f ? o = l + 1 : r = l;
      f < e[s[o]] && (o > 0 && (t[n] = s[o - 1]), s[o] = n);
    }
  }
  for (o = s.length, r = s[o - 1]; o-- > 0; )
    s[o] = r, r = t[r];
  return s;
}
function lr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : lr(t);
}
function Ci(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function ar(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? ar(t.subTree) : null;
}
const cr = (e) => e.__isSuspense;
function ca(e, t) {
  t && t.pendingBranch ? B(e) ? t.effects.push(...e) : t.effects.push(e) : vl(e);
}
const te = /* @__PURE__ */ Symbol.for("v-fgt"), cn = /* @__PURE__ */ Symbol.for("v-txt"), Te = /* @__PURE__ */ Symbol.for("v-cmt"), Os = /* @__PURE__ */ Symbol.for("v-stc"), fs = [];
let ke = null;
function L(e = !1) {
  fs.push(ke = e ? null : []);
}
function ua() {
  fs.pop(), ke = fs[fs.length - 1] || null;
}
let bs = 1;
function Bs(e, t = !1) {
  bs += e, e < 0 && ke && t && (ke.hasOnce = !0);
}
function ur(e) {
  return e.dynamicChildren = bs > 0 ? ke || Ht : null, ua(), bs > 0 && ke && ke.push(e), e;
}
function F(e, t, s, n, i, o) {
  return ur(
    p(
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
function bt(e, t, s, n, i) {
  return ur(
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
function Ks(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Pt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const fr = ({ key: e }) => e ?? null, Ds = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? pe(e) || /* @__PURE__ */ me(e) || Y(e) ? { i: De, r: e, k: t, f: !!s } : e : null);
function p(e, t = null, s = null, n = 0, i = null, o = e === te ? 0 : 1, r = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && fr(t),
    ref: t && Ds(t),
    scopeId: Lo,
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
    ctx: De
  };
  return l ? (Ws(a, s), o & 128 && e.normalize(a)) : s && (a.shapeFlag |= pe(s) ? 8 : 16), bs > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  ke && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && ke.push(a), a;
}
const ee = fa;
function fa(e, t = null, s = null, n = 0, i = null, o = !1) {
  if ((!e || e === Nl) && (e = Te), Ks(e)) {
    const l = _t(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Ws(l, s), bs > 0 && !o && ke && (l.shapeFlag & 6 ? ke[ke.indexOf(e)] = l : ke.push(l)), l.patchFlag = -2, l;
  }
  if (wa(e) && (e = e.__vccOpts), t) {
    t = da(t);
    let { class: l, style: a } = t;
    l && !pe(l) && (t.class = be(l)), ae(a) && (/* @__PURE__ */ nn(a) && !B(a) && (a = _e({}, a)), t.style = en(a));
  }
  const r = pe(e) ? 1 : cr(e) ? 128 : Fo(e) ? 64 : ae(e) ? 4 : Y(e) ? 2 : 0;
  return p(
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
function da(e) {
  return e ? /* @__PURE__ */ nn(e) || er(e) ? _e({}, e) : e : null;
}
function _t(e, t, s = !1, n = !1) {
  const { props: i, ref: o, patchFlag: r, children: l, transition: a } = e, f = t ? pa(i || {}, t) : i, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && fr(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && o ? B(o) ? o.concat(Ds(t)) : [o, Ds(t)] : Ds(t)
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
    patchFlag: t && e.type !== te ? r === -1 ? 16 : r | 16 : r,
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
    c,
    a.clone(c)
  ), c;
}
function ha(e = " ", t = 0) {
  return ee(cn, null, e, t);
}
function Ps(e, t) {
  const s = ee(Os, null, e);
  return s.staticCount = t, s;
}
function Pe(e = "", t = !1) {
  return t ? (L(), bt(Te, null, e)) : ee(Te, null, e);
}
function Xe(e) {
  return e == null || typeof e == "boolean" ? ee(Te) : B(e) ? ee(
    te,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ks(e) ? ct(e) : ee(cn, null, String(e));
}
function ct(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : _t(e);
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
      !i && !er(t) ? t._ctx = De : i === 3 && De && (De.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Y(t)) {
    if (n & 65) {
      Ws(e, { default: t });
      return;
    }
    t = { default: t, _ctx: De }, s = 32;
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
        t.class !== n.class && (t.class = be([t.class, n.class]));
      else if (i === "style")
        t.style = en([t.style, n.style]);
      else if (Gs(i)) {
        const o = t[i], r = n[i];
        r && o !== r && !(B(o) && o.includes(r)) ? t[i] = o ? [].concat(o, r) : r : r == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ys(i) && (t[i] = r);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function ze(e, t, s, n = null) {
  Fe(e, t, 7, [
    s,
    n
  ]);
}
const ga = Go();
let ma = 0;
function va(e, t, s) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || ga, o = {
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
    scope: new fo(
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
    propsOptions: sr(n, i),
    emitsOptions: Yo(n, i),
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Jl.bind(null, o), e.ce && e.ce(o), o;
}
let Ae = null;
const ni = () => Ae || De;
let zs, Nn;
{
  const e = Qs(), t = (s, n) => {
    let i;
    return (i = e[s]) || (i = e[s] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((r) => r(o)) : i[0](o);
    };
  };
  zs = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => Ae = s
  ), Nn = t(
    "__VUE_SSR_SETTERS__",
    (s) => _s = s
  );
}
const Cs = (e) => {
  const t = Ae;
  return zs(e), e.scope.on(), () => {
    e.scope.off(), zs(t);
  };
}, Ii = () => {
  Ae && Ae.scope.off(), zs(null);
};
function dr(e) {
  return e.vnode.shapeFlag & 4;
}
let _s = !1;
function ya(e, t = !1, s = !1) {
  t && Nn(t);
  const { props: n, children: i } = e.vnode, o = dr(e);
  Ql(e, n, o, t), na(e, i, s || t);
  const r = o ? ba(e, t) : void 0;
  return t && Nn(!1), r;
}
function ba(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Fl);
  const { setup: n } = s;
  if (n) {
    tt();
    const i = e.setupContext = n.length > 1 ? xa(e) : null, o = Cs(e), r = Ss(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = no(r);
    if (st(), o(), (l || e.sp) && !cs(e) && Ko(e), l) {
      if (r.then(Ii, Ii), t)
        return r.then((a) => {
          Ei(e, a);
        }).catch((a) => {
          on(a, e, 0);
        });
      e.asyncDep = r;
    } else
      Ei(e, r);
  } else
    hr(e);
}
function Ei(e, t, s) {
  Y(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ae(t) && (e.setupState = Mo(t)), hr(e);
}
function hr(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || Qe);
  {
    const i = Cs(e);
    tt();
    try {
      Ul(e);
    } finally {
      st(), i();
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
function un(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Mo(Xn(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in us)
        return us[s](e);
    },
    has(t, s) {
      return s in t || s in us;
    }
  })) : e.proxy;
}
function wa(e) {
  return Y(e) && "__vccOpts" in e;
}
const et = (e, t) => /* @__PURE__ */ dl(e, t, _s);
function Sa(e, t, s) {
  try {
    Bs(-1);
    const n = arguments.length;
    return n === 2 ? ae(t) && !B(t) ? Ks(t) ? ee(e, null, [t]) : ee(e, t) : ee(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && Ks(s) && (s = [s]), ee(e, t, s));
  } finally {
    Bs(1);
  }
}
const Ca = "3.5.39";
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
const pr = Fn ? (e) => Fn.createHTML(e) : (e) => e, Ia = "http://www.w3.org/2000/svg", Ea = "http://www.w3.org/1998/Math/MathML", lt = typeof document < "u" ? document : null, Ai = lt && /* @__PURE__ */ lt.createElement("template"), Ta = {
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
  insertStaticContent(e, t, s, n, i, o) {
    const r = s ? s.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), s), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      Ai.innerHTML = pr(
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
      r ? r.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, mt = "transition", Qt = "animation", xs = /* @__PURE__ */ Symbol("_vtc"), gr = {
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
}, Aa = /* @__PURE__ */ _e(
  {},
  Uo,
  gr
), Ma = (e) => (e.displayName = "Transition", e.props = Aa, e), Pa = /* @__PURE__ */ Ma(
  (e, { slots: t }) => Sa(El, Ra(e), t)
), Tt = (e, t = []) => {
  B(e) ? e.forEach((s) => s(...t)) : e && e(...t);
}, Mi = (e) => e ? B(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Ra(e) {
  const t = {};
  for (const y in e)
    y in gr || (t[y] = e[y]);
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
    appearActiveClass: f = r,
    appearToClass: c = l,
    leaveFromClass: h = `${s}-leave-from`,
    leaveActiveClass: v = `${s}-leave-active`,
    leaveToClass: m = `${s}-leave-to`
  } = e, O = ka(i), A = O && O[0], G = O && O[1], {
    onBeforeEnter: V,
    onEnter: M,
    onEnterCancelled: C,
    onLeave: E,
    onLeaveCancelled: H,
    onBeforeAppear: re = V,
    onAppear: Q = M,
    onAppearCancelled: z = C
  } = t, R = (y, k, W, ie) => {
    y._enterCancelled = ie, At(y, k ? c : l), At(y, k ? f : r), W && W();
  }, J = (y, k) => {
    y._isLeaving = !1, At(y, h), At(y, m), At(y, v), k && k();
  }, U = (y) => (k, W) => {
    const ie = y ? Q : M, oe = () => R(k, y, W);
    Tt(ie, [k, oe]), Pi(() => {
      At(k, y ? a : o), ot(k, y ? c : l), Mi(ie) || Ri(k, n, A, oe);
    });
  };
  return _e(t, {
    onBeforeEnter(y) {
      Tt(V, [y]), ot(y, o), ot(y, r);
    },
    onBeforeAppear(y) {
      Tt(re, [y]), ot(y, a), ot(y, f);
    },
    onEnter: U(!1),
    onAppear: U(!0),
    onLeave(y, k) {
      y._isLeaving = !0;
      const W = () => J(y, k);
      ot(y, h), y._enterCancelled ? (ot(y, v), Li(y)) : (Li(y), ot(y, v)), Pi(() => {
        y._isLeaving && (At(y, h), ot(y, m), Mi(E) || Ri(y, n, G, W));
      }), Tt(E, [y, W]);
    },
    onEnterCancelled(y) {
      R(y, !1, void 0, !0), Tt(C, [y]);
    },
    onAppearCancelled(y) {
      R(y, !0, void 0, !0), Tt(z, [y]);
    },
    onLeaveCancelled(y) {
      J(y), Tt(H, [y]);
    }
  });
}
function ka(e) {
  if (e == null)
    return null;
  if (ae(e))
    return [wn(e.enter), wn(e.leave)];
  {
    const t = wn(e);
    return [t, t];
  }
}
function wn(e) {
  return Rr(e);
}
function ot(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.add(s)), (e[xs] || (e[xs] = /* @__PURE__ */ new Set())).add(t);
}
function At(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const s = e[xs];
  s && (s.delete(t), s.size || (e[xs] = void 0));
}
function Pi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let $a = 0;
function Ri(e, t, s, n) {
  const i = e._endId = ++$a, o = () => {
    i === e._endId && n();
  };
  if (s != null)
    return setTimeout(o, s);
  const { type: r, timeout: l, propCount: a } = La(e, t);
  if (!r)
    return n();
  const f = r + "end";
  let c = 0;
  const h = () => {
    e.removeEventListener(f, v), o();
  }, v = (m) => {
    m.target === e && ++c >= a && h();
  };
  setTimeout(() => {
    c < a && h();
  }, l + 1), e.addEventListener(f, v);
}
function La(e, t) {
  const s = window.getComputedStyle(e), n = (O) => (s[O] || "").split(", "), i = n(`${mt}Delay`), o = n(`${mt}Duration`), r = ki(i, o), l = n(`${Qt}Delay`), a = n(`${Qt}Duration`), f = ki(l, a);
  let c = null, h = 0, v = 0;
  t === mt ? r > 0 && (c = mt, h = r, v = o.length) : t === Qt ? f > 0 && (c = Qt, h = f, v = a.length) : (h = Math.max(r, f), c = h > 0 ? r > f ? mt : Qt : null, v = c ? c === mt ? o.length : a.length : 0);
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
function ki(e, t) {
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
const Js = /* @__PURE__ */ Symbol("_vod"), mr = /* @__PURE__ */ Symbol("_vsh"), Rs = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: s }) {
    e[Js] = e.style.display === "none" ? "" : e.style.display, s && t ? s.beforeEnter(e) : es(e, t);
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
  e.style.display = t ? e[Js] : "none", e[mr] = !t;
}
const Da = /* @__PURE__ */ Symbol(""), Na = /(?:^|;)\s*display\s*:/;
function Fa(e, t, s) {
  const n = e.style, i = pe(s);
  let o = !1;
  if (s && !i) {
    if (t)
      if (pe(t))
        for (const r of t.split(";")) {
          const l = r.slice(0, r.indexOf(":")).trim();
          s[l] == null && ss(n, l, "");
        }
      else
        for (const r in t)
          s[r] == null && ss(n, r, "");
    for (const r in s) {
      r === "display" && (o = !0);
      const l = s[r];
      l != null ? Va(
        e,
        r,
        !pe(t) && t ? t[r] : void 0,
        l
      ) || ss(n, r, l) : ss(n, r, "");
    }
  } else if (i) {
    if (t !== s) {
      const r = n[Da];
      r && (s += ";" + r), n.cssText = s, o = Na.test(s);
    }
  } else t && e.removeAttribute("style");
  Js in e && (e[Js] = o ? n.display : "", e[mr] && (n.display = "none"));
}
const Oi = /\s*!important$/;
function ss(e, t, s) {
  if (B(s))
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
const Di = ["Webkit", "Moz", "ms"], Sn = {};
function Ua(e, t) {
  const s = Sn[t];
  if (s)
    return s;
  let n = Ue(t);
  if (n !== "filter" && n in e)
    return Sn[t] = n;
  n = ro(n);
  for (let i = 0; i < Di.length; i++) {
    const o = Di[i] + n;
    if (o in e)
      return Sn[t] = o;
  }
  return t;
}
function Va(e, t, s, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && pe(n) && s === n;
}
const Ni = "http://www.w3.org/1999/xlink";
function Fi(e, t, s, n, i, o = Nr(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Ni, t.slice(6, t.length)) : e.setAttributeNS(Ni, t, s) : s == null || o && !ao(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Ne(s) ? String(s) : s
  );
}
function Ui(e, t, s, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? pr(s) : s);
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
    l === "boolean" ? s = ao(s) : s == null && l === "string" ? (s = "", r = !0) : l === "number" && (s = 0, r = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  r && e.removeAttribute(i || t);
}
function Ft(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function Ha(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Vi = /* @__PURE__ */ Symbol("_vei");
function ja(e, t, s, n, i = null) {
  const o = e[Vi] || (e[Vi] = {}), r = o[t];
  if (n && r)
    r.value = n;
  else {
    const [l, a] = Wa(t);
    if (n) {
      const f = o[t] = qa(
        n,
        i
      );
      Ft(e, l, f, a);
    } else r && (Ha(e, l, r, a), o[t] = void 0);
  }
}
const Ba = /(Once|Passive|Capture)$/, Ka = /^on:?(?:Once|Passive|Capture)$/;
function Wa(e) {
  let t, s;
  for (; (s = e.match(Ba)) && !Ka.test(e); )
    t || (t = {}), e = e.slice(0, e.length - s[1].length), t[s[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : xt(e.slice(2)), t];
}
let Cn = 0;
const za = /* @__PURE__ */ Promise.resolve(), Ja = () => Cn || (za.then(() => Cn = 0), Cn = Date.now());
function qa(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    const i = s.value;
    if (B(i)) {
      const o = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        o.call(n), n._stopped = !0;
      };
      const r = i.slice(), l = [n];
      for (let a = 0; a < r.length && !n._stopped; a++) {
        const f = r[a];
        f && Fe(
          f,
          t,
          5,
          l
        );
      }
    } else
      Fe(
        i,
        t,
        5,
        [n]
      );
  };
  return s.value = e, s.attached = Ja(), s;
}
const Hi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ga = (e, t, s, n, i, o) => {
  const r = i === "svg";
  t === "class" ? Oa(e, n, r) : t === "style" ? Fa(e, s, n) : Gs(t) ? Ys(t) || ja(e, t, s, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ya(e, t, n, r)) ? (Ui(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Fi(e, t, n, r, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Xa(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !pe(n))) ? Ui(e, Ue(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Fi(e, t, n, r));
};
function Ya(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Hi(t) && Y(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Hi(t) && pe(s) ? !1 : t in e;
}
function Xa(e, t) {
  const s = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!s)
    return !1;
  const n = Ue(t);
  return Array.isArray(s) ? s.some((i) => Ue(i) === n) : Object.keys(s).some((i) => Ue(i) === n);
}
const ji = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return B(t) ? (s) => Ls(t, s) : t;
};
function Za(e) {
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
const ns = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, i) {
    e[In] = ji(i);
    const o = n || i.props && i.props.type === "number";
    Ft(e, t ? "change" : "input", (r) => {
      r.target.composing || e[In](Ki(e.value, s, o));
    }), (s || o) && Ft(e, "change", () => {
      e.value = Ki(e.value, s, o);
    }), t || (Ft(e, "compositionstart", Za), Ft(e, "compositionend", Bi), Ft(e, "change", Bi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: s, modifiers: { lazy: n, trim: i, number: o } }, r) {
    if (e[In] = ji(r), e.composing) return;
    const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? Bn(e.value) : e.value, a = t ?? "";
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
}, Ut = (e, t) => {
  if (!e) return e;
  const s = e._withMods || (e._withMods = {}), n = t.join(".");
  return s[n] || (s[n] = (i, ...o) => {
    for (let r = 0; r < t.length; r++) {
      const l = ec[t[r]];
      if (l && l(i, t)) return;
    }
    return e(i, ...o);
  });
}, tc = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, vr = (e, t) => {
  const s = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return s[n] || (s[n] = (i) => {
    if (!("key" in i))
      return;
    const o = xt(i.key);
    if (t.some(
      (r) => r === o || tc[r] === o
    ))
      return e(i);
  });
}, sc = /* @__PURE__ */ _e({ patchProp: Ga }, Ta);
let Wi;
function nc() {
  return Wi || (Wi = oa(sc));
}
const yr = (...e) => {
  const t = nc().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const i = oc(n);
    if (!i) return;
    const o = t._component;
    !Y(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const r = s(i, !1, ic(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), r;
  }, t;
};
function ic(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function oc(e) {
  return pe(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let br;
const fn = (e) => br = e, _r = (
  /* istanbul ignore next */
  Symbol()
);
function Un(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var ds;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(ds || (ds = {}));
function rc() {
  const e = ho(!0), t = e.run(() => /* @__PURE__ */ xe({}));
  let s = [], n = [];
  const i = Xn({
    install(o) {
      fn(i), i._a = o, o.provide(_r, i), o.config.globalProperties.$pinia = i, n.forEach((r) => s.push(r)), n = [];
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
const xr = () => {
};
function zi(e, t, s, n = xr) {
  e.push(t);
  const i = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), n());
  };
  return !s && po() && Ur(i), i;
}
function Ot(e, ...t) {
  e.slice().forEach((s) => {
    s(...t);
  });
}
const lc = (e) => e(), Ji = Symbol(), En = Symbol();
function Vn(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((s, n) => e.set(n, s)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const s in t) {
    if (!t.hasOwnProperty(s))
      continue;
    const n = t[s], i = e[s];
    Un(i) && Un(n) && e.hasOwnProperty(s) && !/* @__PURE__ */ me(n) && !/* @__PURE__ */ dt(n) ? e[s] = Vn(i, n) : e[s] = n;
  }
  return e;
}
const ac = (
  /* istanbul ignore next */
  Symbol()
);
function cc(e) {
  return !Un(e) || !e.hasOwnProperty(ac);
}
const { assign: vt } = Object;
function uc(e) {
  return !!(/* @__PURE__ */ me(e) && e.effect);
}
function fc(e, t, s, n) {
  const { state: i, actions: o, getters: r } = t, l = s.state.value[e];
  let a;
  function f() {
    l || (s.state.value[e] = i ? i() : {});
    const c = /* @__PURE__ */ al(s.state.value[e]);
    return vt(c, o, Object.keys(r || {}).reduce((h, v) => (h[v] = Xn(et(() => {
      fn(s);
      const m = s._s.get(e);
      return r[v].call(m, m);
    })), h), {}));
  }
  return a = wr(e, f, t, s, n, !0), a;
}
function wr(e, t, s = {}, n, i, o) {
  let r;
  const l = vt({ actions: {} }, s), a = { deep: !0 };
  let f, c, h = [], v = [], m;
  const O = n.state.value[e];
  !o && !O && (n.state.value[e] = {});
  let A;
  function G(z) {
    let R;
    f = c = !1, typeof z == "function" ? (z(n.state.value[e]), R = {
      type: ds.patchFunction,
      storeId: e,
      events: m
    }) : (Vn(n.state.value[e], z), R = {
      type: ds.patchObject,
      payload: z,
      storeId: e,
      events: m
    });
    const J = A = Symbol();
    qe().then(() => {
      A === J && (f = !0);
    }), c = !0, Ot(h, R, n.state.value[e]);
  }
  const V = o ? function() {
    const { state: R } = s, J = R ? R() : {};
    this.$patch((U) => {
      vt(U, J);
    });
  } : (
    /* istanbul ignore next */
    xr
  );
  function M() {
    r.stop(), h = [], v = [], n._s.delete(e);
  }
  const C = (z, R = "") => {
    if (Ji in z)
      return z[En] = R, z;
    const J = function() {
      fn(n);
      const U = Array.from(arguments), y = [], k = [];
      function W(X) {
        y.push(X);
      }
      function ie(X) {
        k.push(X);
      }
      Ot(v, {
        args: U,
        name: J[En],
        store: H,
        after: W,
        onError: ie
      });
      let oe;
      try {
        oe = z.apply(this && this.$id === e ? this : H, U);
      } catch (X) {
        throw Ot(k, X), X;
      }
      return oe instanceof Promise ? oe.then((X) => (Ot(y, X), X)).catch((X) => (Ot(k, X), Promise.reject(X))) : (Ot(y, oe), oe);
    };
    return J[Ji] = !0, J[En] = R, J;
  }, E = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: zi.bind(null, v),
    $patch: G,
    $reset: V,
    $subscribe(z, R = {}) {
      const J = zi(h, z, R.detached, () => U()), U = r.run(() => ht(() => n.state.value[e], (y) => {
        (R.flush === "sync" ? c : f) && z({
          storeId: e,
          type: ds.direct,
          events: m
        }, y);
      }, vt({}, a, R)));
      return J;
    },
    $dispose: M
  }, H = /* @__PURE__ */ sn(E);
  n._s.set(e, H);
  const Q = (n._a && n._a.runWithContext || lc)(() => n._e.run(() => (r = ho()).run(() => t({ action: C }))));
  for (const z in Q) {
    const R = Q[z];
    if (/* @__PURE__ */ me(R) && !uc(R) || /* @__PURE__ */ dt(R))
      o || (O && cc(R) && (/* @__PURE__ */ me(R) ? R.value = O[z] : Vn(R, O[z])), n.state.value[e][z] = R);
    else if (typeof R == "function") {
      const J = C(R, z);
      Q[z] = J, l.actions[z] = R;
    }
  }
  return vt(H, Q), vt(/* @__PURE__ */ ne(H), Q), Object.defineProperty(H, "$state", {
    get: () => n.state.value[e],
    set: (z) => {
      G((R) => {
        vt(R, z);
      });
    }
  }), n._p.forEach((z) => {
    vt(H, r.run(() => z({
      store: H,
      app: n._a,
      pinia: n,
      options: l
    })));
  }), O && o && s.hydrate && s.hydrate(H.$state, O), f = !0, c = !0, H;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function dn(e, t, s) {
  let n, i;
  const o = typeof t == "function";
  typeof e == "string" ? (n = e, i = o ? s : t) : (i = e, n = e.id);
  function r(l, a) {
    const f = bl();
    return l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    l || (f ? ls(_r, null) : null), l && fn(l), l = br, l._s.has(n) || (o ? wr(n, t, i, l) : fc(n, i, l)), l._s.get(n);
  }
  return r.$id = n, r;
}
function dc() {
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
    dockAlign: "left",
    autoPlayOnNewCue: !0,
    providers: dc(),
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
            const o = t.providers?.find((r) => r.id === i.id);
            return o ? { ...o, config: o.config ?? i.config ?? {} } : i;
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
    const i = new RegExp(qi.source, "g"), o = [];
    let r;
    for (; (r = i.exec(n)) !== null; ) {
      const a = parseInt(r[1], 10), f = parseInt(r[2], 10), c = r[3] ?? "", h = c ? parseInt(c.padEnd(3, "0"), 10) : 0;
      o.push(a * 60 + f + h / 1e3);
    }
    if (o.length === 0) continue;
    const l = n.replace(new RegExp(qi.source, "g"), "").trim();
    if (l !== "")
      for (const a of o)
        s.push({ time: a, text: l });
  }
  s.sort((n, i) => n.time - i.time);
  for (let n = 0; n < s.length; n++)
    n < s.length - 1 && (s[n].next = s[n + 1]);
  return s;
}
function Gi(e, t) {
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
const Vt = "st-music-player", Yi = "stmp_cursor", Xi = "stmp_userlist";
class vc {
  constructor(t) {
    this.providers = t;
  }
  async searchAll(t) {
    const s = await Promise.allSettled(
      this.providers.map((o) => o.search(t))
    ), n = [], i = /* @__PURE__ */ new Map();
    return s.forEach((o) => {
      if (o.status === "fulfilled")
        for (const r of o.value) {
          const l = `${r.name}__${r.artist}`;
          i.get(l) === void 0 && (i.set(l, n.length), n.push(r));
        }
    }), n;
  }
  async resolve(t, s, n) {
    const i = this.getProvider(s);
    return i ? new Promise((o) => {
      const r = setTimeout(() => o(null), 15e3);
      i.resolve(t, n).then((l) => {
        clearTimeout(r), o(l);
      }).catch(() => {
        clearTimeout(r), o(null);
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
      const n = new AbortController(), i = setTimeout(() => n.abort(), s), o = await fetch(t, { signal: n.signal });
      return clearTimeout(i), o.ok ? await o.json() : null;
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
      let o = !1;
      const r = () => {
        i.removeEventListener("loadedmetadata", l), i.removeEventListener("error", a), clearTimeout(f), i.src = "";
      }, l = () => {
        o || (o = !0, r(), n(!0));
      }, a = () => {
        o || (o = !0, r(), n(!1));
      }, f = setTimeout(() => {
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
        console.warn(`[NetEase] audio probe failed for id=${o.id}, trying next`);
        continue;
      }
      return r.name = o.name, r.artist = o.artist, r;
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
      const n = new AbortController(), i = setTimeout(() => n.abort(), s), o = await fetch(t, { signal: n.signal });
      return clearTimeout(i), o.ok ? await o.json() : null;
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
function Sr(e) {
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
let Dt = null;
function wc() {
  if (Dt) return Dt;
  try {
    if (typeof SillyTavern < "u") {
      const e = SillyTavern.getContext();
      e?.getCurrentLocale && (Dt = e.getCurrentLocale());
    }
  } catch {
  }
  return Dt || (Dt = (typeof navigator < "u" ? navigator.language || navigator.userLanguage : "en")?.toLowerCase() || "en"), Dt;
}
function D(e) {
  return wc().startsWith("zh") ? xc[e] ?? e : e;
}
function ks() {
  return `stmp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
const Jt = /* @__PURE__ */ dn("playlist", {
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
        id: ks(),
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
        id: ks(),
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
        id: ks(),
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
      const o = Sr(s.settings.providers);
      if (t.source === "local" && t.localBlobKey) {
        const l = await n.getBlob(t.localBlobKey);
        l && (i = {
          url: URL.createObjectURL(l),
          name: t.song,
          artist: t.artist ?? "",
          source: "local"
        });
      }
      if (!i && t.song && (i = await o.searchAndResolve(t.song, t.artist), i && (t.providerId = i.source)), !i) {
        console.warn(`[playlist] resolve failed for "${t.song}"`), typeof toastr < "u" && toastr.warning(`${D("Cannot play")}: ${t.song}`);
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
          const o = {
            id: ks(),
            song: i.song,
            artist: i.artist,
            source: "chat",
            messageId: n.messageId,
            addedAt: Date.now()
          };
          this.list.push(o), s = o;
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
      ), n = this.list.map((r, l) => r.messageId === e ? l : -1).filter((r) => r >= 0);
      if (n.length === 0) {
        s.cue && this.addFromCue(s.cue, e);
        return;
      }
      if (!s.cue) {
        for (const r of [...n].reverse())
          this.removeItem(r);
        return;
      }
      const i = n[0], o = this.list[i];
      o.song = s.cue.song, o.artist = s.cue.artist;
      for (const r of [...n].reverse())
        r !== i && this.removeItem(r);
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
      const e = new hc();
      this.audioEngine = e;
      const t = $t();
      e.on("timeupdate", () => {
        if (!e) return;
        t.currentTime = e.currentTime, t.duration = e.duration;
        const s = Gi(t.lyrics, e.currentTime), n = s ? t.lyrics.indexOf(s) : -1;
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
      return Gi(this.lyrics, this.currentTime);
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
}, Ac = {
  key: 15,
  points: "20 6 9 17 4 12"
}, Mc = /* @__PURE__ */ wt({
  __name: "Icon",
  props: {
    name: {},
    size: {}
  },
  setup(e) {
    return (t, s) => (L(), F("svg", {
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
      e.name === "play" ? (L(), F("polygon", Ic)) : e.name === "pause" ? (L(), F(te, { key: 1 }, [
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
      ], 64)) : e.name === "prev" ? (L(), F(te, { key: 2 }, [
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
      ], 64)) : e.name === "next" ? (L(), F(te, { key: 3 }, [
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
      ], 64)) : e.name === "repeat" ? (L(), F(te, { key: 4 }, [
        s[6] || (s[6] = p("polyline", { points: "17 1 21 5 17 9" }, null, -1)),
        s[7] || (s[7] = p("path", { d: "M3 11V9a4 4 0 0 1 4-4h14" }, null, -1)),
        s[8] || (s[8] = p("polyline", { points: "7 23 3 19 7 15" }, null, -1)),
        s[9] || (s[9] = p("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" }, null, -1))
      ], 64)) : e.name === "repeat-one" ? (L(), F(te, { key: 5 }, [
        s[10] || (s[10] = Ps('<polyline points="17 1 21 5 17 9" data-v-4bfc4099></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14" data-v-4bfc4099></path><polyline points="7 23 3 19 7 15" data-v-4bfc4099></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3" data-v-4bfc4099></path><text x="12" y="14" text-anchor="middle" font-size="8" fill="currentColor" stroke="none" font-weight="bold" data-v-4bfc4099>1</text>', 5))
      ], 64)) : e.name === "shuffle" ? (L(), F(te, { key: 6 }, [
        s[11] || (s[11] = Ps('<polyline points="16 3 21 3 21 8" data-v-4bfc4099></polyline><line x1="4" y1="20" x2="21" y2="3" data-v-4bfc4099></line><polyline points="21 16 21 21 16 21" data-v-4bfc4099></polyline><line x1="15" y1="15" x2="21" y2="21" data-v-4bfc4099></line><line x1="4" y1="4" x2="9" y2="9" data-v-4bfc4099></line>', 5))
      ], 64)) : e.name === "search" ? (L(), F(te, { key: 7 }, [
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
      ], 64)) : e.name === "plus" ? (L(), F(te, { key: 8 }, [
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
      ], 64)) : e.name === "x" ? (L(), F(te, { key: 9 }, [
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
      ], 64)) : e.name === "chevron-down" ? (L(), F("polyline", Ec)) : e.name === "chevron-up" ? (L(), F("polyline", Tc)) : e.name === "music" ? (L(), F(te, { key: 12 }, [
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
      ], 64)) : e.name === "volume" ? (L(), F(te, { key: 13 }, [
        s[21] || (s[21] = p("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[22] || (s[22] = p("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1)),
        s[23] || (s[23] = p("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }, null, -1))
      ], 64)) : e.name === "volume-mute" ? (L(), F(te, { key: 14 }, [
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
      ], 64)) : e.name === "check" ? (L(), F("polyline", Ac)) : e.name === "loader" ? (L(), F(te, { key: 16 }, [
        s[27] || (s[27] = Ps('<line x1="12" y1="2" x2="12" y2="6" data-v-4bfc4099></line><line x1="12" y1="18" x2="12" y2="22" data-v-4bfc4099></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" data-v-4bfc4099></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" data-v-4bfc4099></line><line x1="2" y1="12" x2="6" y2="12" data-v-4bfc4099></line><line x1="18" y1="12" x2="22" y2="12" data-v-4bfc4099></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" data-v-4bfc4099></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" data-v-4bfc4099></line>', 8))
      ], 64)) : e.name === "list-music" ? (L(), F(te, { key: 17 }, [
        s[28] || (s[28] = Ps('<path d="M3 12h11" data-v-4bfc4099></path><path d="M3 6h11" data-v-4bfc4099></path><path d="M3 18h7" data-v-4bfc4099></path><path d="M16 8v13" data-v-4bfc4099></path><circle cx="14" cy="21" r="2" data-v-4bfc4099></circle><path d="M16 8l5-2v3" data-v-4bfc4099></path>', 6))
      ], 64)) : Pe("", !0)
    ], 8, Cc));
  }
}), St = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, i] of t)
    s[n] = i;
  return s;
}, ge = /* @__PURE__ */ St(Mc, [["__scopeId", "data-v-4bfc4099"]]), Pc = {
  key: 0,
  class: "stmp-mini stmp-mini-dock-desktop"
}, Rc = {
  key: 0,
  class: "stmp-mini-cover"
}, kc = ["src"], $c = {
  key: 1,
  class: "stmp-mini-cover stmp-mini-cover-placeholder"
}, Lc = { class: "stmp-mini-text" }, Oc = { class: "stmp-mini-controls" }, Dc = ["aria-label"], Nc = ["aria-label"], Fc = {
  key: 1,
  class: "stmp-mini stmp-mini-dock-mobile"
}, Uc = { class: "stmp-mini-text" }, Vc = { class: "stmp-mini-controls" }, Hc = ["aria-label"], jc = ["aria-label"], Bc = {
  key: 2,
  class: "stmp-mini stmp-mini-drag"
}, Kc = ["aria-label"], Wc = ["src"], zc = { class: "stmp-mini-cover-overlay" }, Jc = { class: "stmp-mini-drag-right" }, qc = { class: "stmp-mini-text stmp-mini-text-drag" }, Gc = { class: "stmp-mini-lyric" }, Yc = /* @__PURE__ */ wt({
  __name: "CollapsedBar",
  props: {
    isDock: { type: Boolean },
    isMobile: { type: Boolean }
  },
  setup(e) {
    const t = $t(), s = Jt(), n = e, i = /* @__PURE__ */ xe(!1), o = et(() => t.currentTrack?.cover || ""), r = et(() => {
      const h = t.currentTrack;
      if (!h) return D("No Song");
      const v = h.name, m = h.artist || "";
      return m ? `${v} - ${m}` : v;
    }), l = et(() => {
      const h = t.currentLyricIndex;
      return h < 0 || h >= t.lyrics.length ? "" : t.lyrics[h].text;
    });
    function a() {
      i.value = !0;
    }
    ht(() => t.currentTrack?.url, () => {
      i.value = !1;
    });
    function f(h) {
      h.stopPropagation(), t.togglePlay();
    }
    function c(h) {
      h.stopPropagation(), s.next();
    }
    return (h, v) => n.isDock && !n.isMobile ? (L(), F("div", Pc, [
      o.value && !i.value ? (L(), F("div", Rc, [
        p("img", {
          src: o.value,
          alt: "",
          onError: a
        }, null, 40, kc)
      ])) : (L(), F("div", $c, [
        ee(ge, {
          name: "music",
          size: 14
        })
      ])),
      p("span", Lc, Z(r.value), 1),
      p("div", Oc, [
        p("button", {
          class: "stmp-mini-btn",
          "aria-label": w(t).isPlaying ? w(D)("Pause") : w(D)("Play"),
          onClick: f
        }, [
          ee(ge, {
            name: w(t).isPlaying ? "pause" : "play",
            size: 14
          }, null, 8, ["name"])
        ], 8, Dc),
        p("button", {
          class: "stmp-mini-btn",
          "aria-label": w(D)("Next"),
          onClick: c
        }, [
          ee(ge, {
            name: "next",
            size: 14
          })
        ], 8, Nc)
      ])
    ])) : n.isDock && n.isMobile ? (L(), F("div", Fc, [
      p("span", Uc, Z(r.value), 1),
      p("div", Vc, [
        p("button", {
          class: "stmp-mini-btn",
          "aria-label": w(t).isPlaying ? w(D)("Pause") : w(D)("Play"),
          onClick: f
        }, [
          ee(ge, {
            name: w(t).isPlaying ? "pause" : "play",
            size: 16
          }, null, 8, ["name"])
        ], 8, Hc),
        p("button", {
          class: "stmp-mini-btn",
          "aria-label": w(D)("Next"),
          onClick: c
        }, [
          ee(ge, {
            name: "next",
            size: 16
          })
        ], 8, jc)
      ])
    ])) : (L(), F("div", Bc, [
      p("button", {
        class: "stmp-mini-cover stmp-mini-cover-square",
        "aria-label": w(t).isPlaying ? w(D)("Pause") : w(D)("Play"),
        onClick: f
      }, [
        o.value && !i.value ? (L(), F("img", {
          key: 0,
          src: o.value,
          alt: "",
          onError: a
        }, null, 40, Wc)) : (L(), bt(ge, {
          key: 1,
          name: "music",
          size: 20
        })),
        p("div", zc, [
          ee(ge, {
            name: w(t).isPlaying ? "pause" : "play",
            size: 18
          }, null, 8, ["name"])
        ])
      ], 8, Kc),
      p("div", Jc, [
        p("span", qc, Z(r.value), 1),
        p("span", Gc, Z(l.value || " "), 1)
      ])
    ]));
  }
}), Xc = /* @__PURE__ */ St(Yc, [["__scopeId", "data-v-d99f492a"]]), Zc = { class: "stmp-playlist" }, Qc = { class: "stmp-upload-area" }, eu = ["aria-label"], tu = {
  key: 0,
  class: "stmp-empty"
}, su = { class: "stmp-group-label" }, nu = ["onClick"], iu = { class: "stmp-item-index" }, ou = { class: "stmp-item-info" }, ru = { class: "stmp-item-song" }, lu = {
  key: 0,
  class: "stmp-item-artist"
}, au = ["onClick"], cu = /* @__PURE__ */ wt({
  __name: "PlaylistView",
  setup(e) {
    const t = Jt(), s = Ie(), n = /* @__PURE__ */ xe(null), i = () => {
      n.value?.click();
    }, o = async (c) => {
      const h = c.target;
      if (!h.files || !h.files[0]) return;
      const v = h.files[0], m = `stmp:audio:${Date.now()}-${v.name}`, O = s.storage;
      O && (await O.setBlob(m, v), t.addLocalFile(v.name, m)), h.value = "";
    }, r = et(() => {
      const c = {
        chat: [],
        user: [],
        local: []
      };
      return t.list.forEach((h, v) => {
        c[h.source] && c[h.source].push({ index: v, item: h });
      }), c;
    }), l = {
      chat: D("From Chat"),
      user: D("My List"),
      local: D("Local Files")
    };
    function a(c) {
      t.play(c);
    }
    function f(c) {
      t.removeItem(c);
    }
    return (c, h) => (L(), F("div", Zc, [
      p("div", Qc, [
        p("input", {
          type: "file",
          accept: "audio/*",
          ref_key: "fileInputRef",
          ref: n,
          onChange: o,
          style: { display: "none" }
        }, null, 544),
        p("button", {
          class: "stmp-upload-btn",
          "aria-label": w(D)("Add local file"),
          onClick: i
        }, " + " + Z(w(D)("Add local file")), 9, eu)
      ]),
      w(t).isEmpty ? (L(), F("div", tu, Z(w(D)("No Songs")), 1)) : (L(), F(te, { key: 1 }, Ye(["chat", "user", "local"], (v) => p("div", {
        key: v,
        class: "stmp-group"
      }, [
        r.value[v].length ? (L(), F(te, { key: 0 }, [
          p("div", su, Z(l[v]), 1),
          (L(!0), F(te, null, Ye(r.value[v], (m) => (L(), F("div", {
            key: m.item.id,
            class: be(["stmp-item", { active: m.index === w(t).currentIndex }]),
            onClick: (O) => a(m.index)
          }, [
            p("span", iu, Z(m.index + 1), 1),
            p("div", ou, [
              p("span", ru, Z(m.item.song), 1),
              m.item.artist ? (L(), F("span", lu, Z(m.item.artist), 1)) : Pe("", !0)
            ]),
            p("button", {
              class: "stmp-item-del",
              onClick: Ut((O) => f(m.index), ["stop"])
            }, [
              ee(ge, {
                name: "x",
                size: 14
              })
            ], 8, au)
          ], 10, nu))), 128))
        ], 64)) : Pe("", !0)
      ])), 64))
    ]));
  }
}), uu = /* @__PURE__ */ St(cu, [["__scopeId", "data-v-6157de27"]]), fu = { class: "stmp-search" }, du = { class: "stmp-search-bar" }, hu = ["placeholder"], pu = ["disabled"], gu = {
  key: 0,
  class: "stmp-search-error"
}, mu = ["aria-label"], vu = {
  key: 1,
  class: "stmp-search-loading"
}, yu = {
  key: 2,
  class: "stmp-search-empty"
}, bu = {
  key: 3,
  class: "stmp-search-hint"
}, _u = {
  key: 4,
  class: "stmp-results"
}, xu = ["onClick"], wu = { class: "stmp-result-name" }, Su = {
  key: 0,
  class: "stmp-result-artist"
}, Cu = ["aria-label", "onClick"], Iu = /* @__PURE__ */ wt({
  __name: "SearchView",
  setup(e) {
    const t = Sc(), s = Jt(), n = Ie(), i = /* @__PURE__ */ xe(t.keyword), o = /* @__PURE__ */ xe(/* @__PURE__ */ new Set()), r = /* @__PURE__ */ xe(null);
    async function l() {
      t.setKeyword(i.value);
      const m = Sr(n.settings.providers);
      await t.search(m);
    }
    const a = () => {
      l();
    };
    function f(m) {
      const O = m.provider + m.id;
      if (r.value === O) return;
      r.value = O;
      const A = s.list.length;
      s.addFromSearch(m);
      const G = s.list.length - 1;
      G >= A && s.play(G), setTimeout(() => {
        o.value.add(O), r.value = null;
      }, 600);
    }
    function c(m) {
      const O = m.provider + m.id;
      o.value.has(O) || (s.addFromSearch(m), o.value.add(O));
    }
    function h(m) {
      return o.value.has(m.provider + m.id);
    }
    function v(m) {
      return r.value === m.provider + m.id;
    }
    return (m, O) => (L(), F("div", fu, [
      p("div", du, [
        rt(p("input", {
          "onUpdate:modelValue": O[0] || (O[0] = (A) => i.value = A),
          class: "stmp-search-input",
          placeholder: w(D)("Search Song..."),
          onKeydown: vr(l, ["enter"])
        }, null, 40, hu), [
          [ns, i.value]
        ]),
        p("button", {
          class: "stmp-icon-btn",
          disabled: w(t).isSearching,
          onClick: l
        }, [
          w(t).isSearching ? (L(), bt(ge, {
            key: 1,
            name: "loader",
            size: 16,
            class: "stmp-spin"
          })) : (L(), bt(ge, {
            key: 0,
            name: "search",
            size: 16
          }))
        ], 8, pu)
      ]),
      w(t).error ? (L(), F("div", gu, [
        p("span", null, Z(w(t).error), 1),
        p("button", {
          class: "stmp-retry-btn",
          "aria-label": w(D)("Retry"),
          onClick: a
        }, Z(w(D)("Retry")), 9, mu)
      ])) : Pe("", !0),
      w(t).isSearching ? (L(), F("div", vu, Z(w(D)("Searching...")), 1)) : i.value && !w(t).results.length ? (L(), F("div", yu, Z(w(D)("No results")), 1)) : !i.value && !w(t).results.length ? (L(), F("div", bu, Z(w(D)("Type a song name to search")), 1)) : Pe("", !0),
      w(t).results.length ? (L(), F("div", _u, [
        (L(!0), F(te, null, Ye(w(t).results, (A) => (L(), F("div", {
          key: A.provider + A.id,
          class: be(["stmp-result", { "stmp-result-playing": v(A) }])
        }, [
          p("div", {
            class: "stmp-result-info",
            onClick: (G) => f(A)
          }, [
            p("span", wu, Z(A.name), 1),
            A.artist ? (L(), F("span", Su, Z(A.artist), 1)) : Pe("", !0)
          ], 8, xu),
          p("button", {
            class: be(["stmp-icon-btn stmp-result-add", { added: h(A) }]),
            "aria-label": h(A) ? w(D)("Added") : w(D)("Add to list"),
            onClick: Ut((G) => c(A), ["stop"])
          }, [
            ee(ge, {
              name: h(A) ? "check" : "plus",
              size: 16
            }, null, 8, ["name"])
          ], 10, Cu)
        ], 2))), 128))
      ])) : Pe("", !0)
    ]));
  }
}), Eu = /* @__PURE__ */ St(Iu, [["__scopeId", "data-v-a8d156af"]]), Tu = { class: "stmp-panel" }, Au = { class: "stmp-topbar stmp-drag-handle" }, Mu = ["aria-label"], Pu = { class: "stmp-cover-large" }, Ru = ["src"], ku = {
  key: 1,
  class: "stmp-cover-placeholder"
}, $u = { class: "stmp-track-name" }, Lu = { class: "stmp-track-artist" }, Ou = { class: "stmp-lyric-header" }, Du = { class: "stmp-track-name" }, Nu = { class: "stmp-track-artist" }, Fu = {
  key: 0,
  class: "stmp-lyric-empty"
}, Uu = { class: "stmp-progress" }, Vu = ["value"], Hu = { class: "stmp-time" }, ju = { class: "stmp-controls" }, Bu = { class: "stmp-ctrl-side stmp-search-side" }, Ku = ["aria-label"], Wu = ["aria-label"], zu = ["aria-label"], Ju = ["aria-label"], qu = ["aria-label"], Gu = ["aria-label"], Yu = { class: "stmp-ctrl-side stmp-volume-side" }, Xu = ["aria-label"], Zu = ["value"], Qu = {
  key: 0,
  class: "stmp-overlay"
}, ef = { class: "stmp-overlay-header" }, tf = { class: "stmp-overlay-title" }, sf = ["aria-label"], nf = { class: "stmp-overlay-body" }, of = /* @__PURE__ */ wt({
  __name: "PlayerPanel",
  emits: ["collapse"],
  setup(e) {
    const t = $t(), s = Jt(), n = Ie(), i = /* @__PURE__ */ xe("cover"), o = /* @__PURE__ */ xe(null), r = /* @__PURE__ */ xe(!1), l = /* @__PURE__ */ xe(!1);
    let a = null;
    const f = et(() => t.currentTrack?.cover || ""), c = () => {
      r.value = !0;
    };
    ht(
      () => t.currentTrack,
      () => {
        r.value = !1;
      }
    );
    const h = et(
      () => t.duration > 0 ? t.currentTime / t.duration * 100 : 0
    ), v = /* @__PURE__ */ xe(0), m = /* @__PURE__ */ xe([]), O = /* @__PURE__ */ xe(null);
    function A(y, k) {
      y && (m.value[k] = y);
    }
    async function G() {
      await qe();
      const y = t.currentLyricIndex, k = O.value;
      if (!k || y < 0) {
        v.value = 0;
        return;
      }
      const W = m.value[y];
      if (!W) return;
      const ie = W.offsetTop, oe = W.offsetHeight, X = k.clientHeight;
      v.value = ie - X / 2 + oe / 2;
    }
    ht(() => t.currentLyricIndex, G), ht(() => t.lyrics, () => {
      m.value = [], G();
    });
    function V(y) {
      const k = Math.floor(y / 60), W = Math.floor(y % 60);
      return k + ":" + W.toString().padStart(2, "0");
    }
    function M(y) {
      const k = y.target;
      t.seek(Number(k.value) / 100 * t.duration);
    }
    const C = ["list", "random", "single"], E = {
      list: "repeat",
      random: "shuffle",
      single: "repeat-one"
    };
    function H() {
      const y = n.settings.playMode, k = C.indexOf(y), W = C[(k + 1) % C.length];
      n.setPlayMode(W);
    }
    function re(y) {
      const k = y.target;
      t.setVolume(Number(k.value));
    }
    function Q() {
      a && clearTimeout(a), l.value = !0;
    }
    function z() {
      a = setTimeout(() => {
        l.value = !1;
      }, 300);
    }
    function R() {
      t.volume > 0 ? t.setVolume(0) : t.setVolume(65);
    }
    function J(y) {
      o.value === y ? o.value = null : o.value = y;
    }
    function U() {
      o.value = null;
    }
    return (y, k) => (L(), F("div", Tu, [
      p("div", Au, [
        k[7] || (k[7] = p("div", { class: "stmp-topbar-spacer" }, null, -1)),
        p("button", {
          class: "stmp-icon-btn",
          "aria-label": w(D)("Collapse panel"),
          onClick: k[0] || (k[0] = Ut((W) => y.$emit("collapse"), ["stop"]))
        }, [
          ee(ge, {
            name: "chevron-down",
            size: 18
          })
        ], 8, Mu)
      ]),
      p("div", {
        class: "stmp-display",
        onClick: k[1] || (k[1] = (W) => i.value = i.value === "cover" ? "lyric" : "cover")
      }, [
        p("div", {
          class: be(["stmp-cover-mode", { hidden: i.value !== "cover" }])
        }, [
          p("div", Pu, [
            f.value && !r.value ? (L(), F("img", {
              key: 0,
              src: f.value,
              alt: "cover",
              onError: c
            }, null, 40, Ru)) : (L(), F("div", ku, [
              ee(ge, {
                name: "music",
                size: 48
              })
            ]))
          ]),
          p("div", $u, Z(w(t).currentTrack?.name || w(D)("No Song")), 1),
          p("div", Lu, Z(w(t).currentTrack?.artist || " "), 1)
        ], 2),
        p("div", {
          class: be(["stmp-lyric-mode", { hidden: i.value !== "lyric" }])
        }, [
          p("div", Ou, [
            p("div", Du, Z(w(t).currentTrack?.name || w(D)("No Song")), 1),
            p("div", Nu, Z(w(t).currentTrack?.artist || " "), 1)
          ]),
          p("div", {
            ref_key: "lyricWindowRef",
            ref: O,
            class: "stmp-lyric-window"
          }, [
            w(t).lyrics.length === 0 ? (L(), F("div", Fu, [
              ee(ge, {
                name: "music",
                size: 18
              })
            ])) : (L(), F("div", {
              key: 1,
              class: "stmp-lyric-scroll",
              style: en({ transform: `translateY(-${v.value}px)` })
            }, [
              (L(!0), F(te, null, Ye(w(t).lyrics, (W, ie) => (L(), F("div", {
                key: ie,
                ref_for: !0,
                ref: (oe) => A(oe, ie),
                class: be(["stmp-lyric-line", { "stmp-lyric-active": ie === w(t).currentLyricIndex }])
              }, Z(W.text), 3))), 128))
            ], 4))
          ], 512)
        ], 2)
      ]),
      p("div", Uu, [
        p("input", {
          type: "range",
          min: "0",
          max: "100",
          step: "0.1",
          value: h.value,
          class: "stmp-range",
          onInput: M
        }, null, 40, Vu),
        p("div", Hu, [
          p("span", null, Z(V(w(t).currentTime)), 1),
          p("span", null, Z(V(w(t).duration)), 1)
        ])
      ]),
      p("div", ju, [
        p("div", Bu, [
          p("button", {
            class: be(["stmp-ctrl-btn", { active: o.value === "search" }]),
            "aria-label": w(D)("Search"),
            onClick: k[2] || (k[2] = Ut((W) => J("search"), ["stop"]))
          }, [
            ee(ge, {
              name: "search",
              size: 18
            })
          ], 10, Ku)
        ]),
        p("button", {
          class: "stmp-ctrl-btn",
          "aria-label": w(D)("Toggle play mode"),
          onClick: H
        }, [
          ee(ge, {
            name: E[w(n).settings.playMode],
            size: 18
          }, null, 8, ["name"])
        ], 8, Wu),
        p("button", {
          class: "stmp-ctrl-btn",
          "aria-label": w(D)("Previous"),
          onClick: k[3] || (k[3] = (W) => w(s).prev())
        }, [
          ee(ge, {
            name: "prev",
            size: 18
          })
        ], 8, zu),
        p("button", {
          class: "stmp-ctrl-btn stmp-play-btn",
          "aria-label": w(t).isPlaying ? w(D)("Pause") : w(D)("Play"),
          onClick: k[4] || (k[4] = (W) => w(t).togglePlay())
        }, [
          ee(ge, {
            name: w(t).isPlaying ? "pause" : "play",
            size: 24
          }, null, 8, ["name"])
        ], 8, Ju),
        p("button", {
          class: "stmp-ctrl-btn",
          "aria-label": w(D)("Next"),
          onClick: k[5] || (k[5] = (W) => w(s).next())
        }, [
          ee(ge, {
            name: "next",
            size: 18
          })
        ], 8, qu),
        p("button", {
          class: be(["stmp-ctrl-btn", { active: o.value === "list" }]),
          "aria-label": w(D)("Playlist"),
          onClick: k[6] || (k[6] = Ut((W) => J("list"), ["stop"]))
        }, [
          ee(ge, {
            name: "list-music",
            size: 18
          })
        ], 10, Gu),
        p("div", Yu, [
          p("div", {
            class: "stmp-volume-container",
            onMouseenter: Q,
            onMouseleave: z
          }, [
            p("button", {
              class: "stmp-ctrl-btn",
              "aria-label": w(D)("Mute / Unmute"),
              onClick: R
            }, [
              ee(ge, {
                name: w(t).volume === 0 ? "volume-mute" : "volume",
                size: 18
              }, null, 8, ["name"])
            ], 8, Xu),
            p("div", {
              class: be(["stmp-volume-popup", { show: l.value }])
            }, [
              p("input", {
                type: "range",
                min: "0",
                max: "100",
                value: w(t).volume,
                class: "stmp-volume-vertical",
                orient: "vertical",
                onInput: re
              }, null, 40, Zu)
            ], 2)
          ], 32)
        ])
      ]),
      ee(Pa, { name: "stmp-overlay" }, {
        default: Oo(() => [
          o.value ? (L(), F("div", Qu, [
            p("div", ef, [
              p("span", tf, Z(o.value === "list" ? w(D)("Playlist") : w(D)("Search")), 1),
              p("button", {
                class: "stmp-overlay-close",
                "aria-label": w(D)("Close"),
                onClick: Ut(U, ["stop"])
              }, [
                ee(ge, {
                  name: "x",
                  size: 16
                })
              ], 8, sf)
            ]),
            p("div", nf, [
              o.value === "list" ? (L(), bt(uu, { key: 0 })) : (L(), bt(Eu, { key: 1 }))
            ])
          ])) : Pe("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), rf = /* @__PURE__ */ St(of, [["__scopeId", "data-v-b6793b97"]]), lf = /* @__PURE__ */ wt({
  __name: "App",
  setup(e) {
    const t = Ie(), s = $t(), n = /* @__PURE__ */ xe(!1), i = /* @__PURE__ */ xe(null);
    let o = null;
    const r = et(() => t.settings.widgetMode === "dock"), l = et(() => t.settings.widgetMode === "hidden"), a = /* @__PURE__ */ xe(window.innerWidth <= 768), f = (U) => {
      U.key === "Escape" && (n.value = !1), U.key === " " && U.target === document.body && (U.preventDefault(), s.togglePlay());
    };
    let c = 0, h = 0, v = 0, m = 0, O = !1, A = !1, G = null, V = null;
    function M(U) {
      if (r.value) return;
      const y = U.target;
      if (y.closest("input, .stmp-result, .stmp-item, .stmp-upload-btn, .stmp-search-input, .stmp-controls, .stmp-lyrics, .stmp-overlay, .stmp-display, .stmp-overlay-close") || n.value && (!y.closest(".stmp-drag-handle") || y.closest("button")) || !n.value && y.closest("button"))
        return;
      const k = i.value?.getBoundingClientRect();
      k && (c = U.clientX, h = U.clientY, v = k.left, m = k.top, O = !1, A = !0, i.value && (i.value.style.left = k.left + "px", i.value.style.top = k.top + "px", i.value.style.right = "auto", i.value.style.bottom = "auto"), G = C, V = E, document.addEventListener("pointermove", G), document.addEventListener("pointerup", V), U.preventDefault());
    }
    function C(U) {
      if (!i.value || !A) return;
      const y = U.clientX - c, k = U.clientY - h;
      (Math.abs(y) > 3 || Math.abs(k) > 3) && (O = !0);
      let W = v + y, ie = m + k;
      const oe = i.value.offsetWidth || 60, X = i.value.offsetHeight || 40, ce = window.innerWidth - oe, nt = window.innerHeight - X;
      W = Math.max(0, Math.min(W, ce)), ie = Math.max(0, Math.min(ie, nt)), i.value.style.left = W + "px", i.value.style.top = ie + "px";
    }
    function E() {
      if (A = !1, G && document.removeEventListener("pointermove", G), V && document.removeEventListener("pointerup", V), G = null, V = null, !O) {
        R();
        return;
      }
      if (i.value) {
        const U = i.value.getBoundingClientRect();
        t.setPosition({ x: U.left, y: U.top }), n.value && qe(() => H());
      }
    }
    function H() {
      if (!i.value) return;
      const U = i.value.getBoundingClientRect(), y = i.value.offsetWidth, k = i.value.offsetHeight;
      let W = U.left, ie = U.top;
      W + y > window.innerWidth && (W = window.innerWidth - y), ie + k > window.innerHeight && (ie = window.innerHeight - k), W < 0 && (W = 0), ie < 0 && (ie = 0), i.value.style.left = W + "px", i.value.style.top = ie + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", t.setPosition({ x: W, y: ie });
    }
    function re() {
      if (!i.value || !r.value) return;
      const U = document.querySelector("#send_form");
      if (!U) return;
      const y = U.getBoundingClientRect(), k = i.value.offsetHeight || 38, W = Math.max(80, y.top - 8);
      i.value.style.maxHeight = W + "px";
      let ie = y.top - Math.min(k, W);
      if (ie < 4 && (ie = 4), window.innerWidth <= 768)
        i.value.style.left = y.left + "px", i.value.style.width = y.width + "px";
      else {
        const oe = t.settings.dockAlign === "right", X = i.value.offsetWidth;
        oe ? i.value.style.left = y.right - X + "px" : i.value.style.left = y.left + "px", i.value.style.width = "";
      }
      i.value.style.top = ie + "px", i.value.style.right = "auto", i.value.style.bottom = "auto";
    }
    function Q() {
      if (!i.value || r.value) return;
      const U = t.settings.position;
      U ? (i.value.style.left = U.x + "px", i.value.style.top = U.y + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", window.innerWidth <= 768 && qe(() => H())) : (i.value.style.right = "16px", i.value.style.top = "16px", i.value.style.left = "auto", i.value.style.bottom = "auto");
    }
    function z(U) {
      if (r.value && !n.value) {
        if (U.target.closest("button, input")) return;
        R();
      }
    }
    function R() {
      n.value = !n.value, qe(() => {
        r.value ? re() : t.settings.position && H();
      });
    }
    ht(() => t.settings.widgetMode, (U) => {
      qe(() => {
        U === "dock" ? re() : Q();
      });
    }), Qn(() => {
      qe(() => {
        r.value ? re() : Q();
      }), i.value && typeof ResizeObserver < "u" && (o = new ResizeObserver(() => {
        r.value && re();
      }), o.observe(i.value)), window.addEventListener("resize", J), window.addEventListener("keydown", f);
    });
    function J() {
      a.value = window.innerWidth <= 768, r.value ? qe(() => re()) : qe(() => H());
    }
    return ei(() => {
      E(), o && (o.disconnect(), o = null), window.removeEventListener("resize", J), window.removeEventListener("keydown", f);
    }), (U, y) => l.value ? Pe("", !0) : (L(), F("div", {
      key: 0,
      ref_key: "widgetRef",
      ref: i,
      class: be(["stmp-widget", {
        "stmp-expanded": n.value,
        "stmp-collapsed": !n.value,
        "stmp-dock": r.value
      }]),
      onPointerdown: M,
      onClick: z
    }, [
      n.value ? (L(), bt(rf, {
        key: 1,
        onCollapse: R
      })) : (L(), bt(Xc, {
        key: 0,
        "is-dock": r.value,
        "is-mobile": a.value
      }, null, 8, ["is-dock", "is-mobile"]))
    ], 34));
  }
}), af = /* @__PURE__ */ St(lf, [["__scopeId", "data-v-582b167e"]]), cf = { class: "stmp-switch-row" }, uf = {
  key: 0,
  class: "stmp-switch-label"
}, ff = { class: "stmp-switch" }, df = ["checked"], hf = /* @__PURE__ */ wt({
  __name: "ToggleSwitch",
  props: {
    modelValue: { type: Boolean },
    label: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const s = t;
    function n(i) {
      const o = i.target;
      s("update:modelValue", o.checked);
    }
    return (i, o) => (L(), F("label", cf, [
      e.label ? (L(), F("span", uf, Z(e.label), 1)) : Pe("", !0),
      p("span", ff, [
        p("input", {
          type: "checkbox",
          checked: e.modelValue,
          onChange: n
        }, null, 40, df),
        o[0] || (o[0] = p("span", { class: "stmp-switch-track" }, [
          p("span", { class: "stmp-switch-thumb" })
        ], -1))
      ])
    ]));
  }
}), Zi = /* @__PURE__ */ St(hf, [["__scopeId", "data-v-d86a29bd"]]), pf = { class: "stmp-settings" }, gf = { class: "stmp-tab-bar" }, mf = ["onClick"], vf = { class: "stmp-tab-content" }, yf = { class: "stmp-tab-panel" }, bf = { class: "stmp-setting-group" }, _f = { class: "stmp-setting-label" }, xf = { class: "stmp-mode-toggle" }, wf = ["onClick"], Sf = {
  key: 0,
  class: "stmp-setting-group"
}, Cf = { class: "stmp-setting-label" }, If = { class: "stmp-mode-toggle" }, Ef = ["onClick"], Tf = { class: "stmp-setting-group" }, Af = { class: "stmp-setting-label" }, Mf = ["value"], Pf = { class: "stmp-setting-group" }, Rf = {
  class: "stmp-setting-label",
  for: "stmp-playmode"
}, kf = ["value"], $f = ["value"], Lf = { class: "stmp-tab-panel" }, Of = {
  key: 0,
  class: "stmp-provider-fields"
}, Df = ["onUpdate:modelValue", "placeholder"], Nf = {
  key: 1,
  class: "stmp-provider-fields"
}, Ff = ["onUpdate:modelValue", "placeholder"], Uf = ["onUpdate:modelValue", "placeholder"], Vf = { class: "stmp-tab-panel" }, Hf = { class: "stmp-setting-group" }, jf = { class: "stmp-setting-label" }, Bf = { class: "stmp-rules" }, Kf = ["onClick"], Wf = { class: "stmp-rule-add" }, zf = ["placeholder"], Jf = { class: "stmp-tab-panel" }, qf = { class: "stmp-data-btns" }, Gf = /* @__PURE__ */ wt({
  __name: "SettingsView",
  setup(e) {
    const t = Ie(), s = /* @__PURE__ */ xe("playback"), n = [
      { id: "playback", label: D("Playback"), icon: "fa-solid fa-music" },
      { id: "providers", label: D("Providers"), icon: "fa-solid fa-cloud" },
      { id: "cue", label: D("AI Cue"), icon: "fa-solid fa-wand-magic-sparkles" },
      { id: "data", label: D("Data"), icon: "fa-solid fa-database" }
    ], i = [
      { value: "list", label: D("List Loop") },
      { value: "random", label: D("Random") },
      { value: "single", label: D("Single Loop") }
    ], o = [
      { value: "dock", label: D("Dock"), icon: "fa-solid fa-grip-lines" },
      { value: "drag", label: D("Drag"), icon: "fa-solid fa-up-down-left-right" },
      { value: "hidden", label: D("Hidden"), icon: "fa-solid fa-eye-slash" }
    ], r = [
      { value: "left", label: D("Left"), icon: "fa-solid fa-align-left" },
      { value: "right", label: D("Right"), icon: "fa-solid fa-align-right" }
    ];
    function l(V) {
      const M = V.target;
      t.setVolume(Number(M.value));
    }
    function a(V) {
      const M = V.target;
      t.setPlayMode(M.value);
    }
    const f = {
      netease: D("NetEase"),
      local: D("Local Files"),
      custom: D("Custom API")
    };
    function c(V) {
      const M = t.settings.providers.find((C) => C.id === V);
      M && (M.enabled = !M.enabled, t.save());
    }
    const h = /* @__PURE__ */ xe("");
    function v() {
      const V = h.value.trim();
      V && (t.addCustomCueRule(V), h.value = "");
    }
    function m(V) {
      t.removeCustomCueRule(V);
    }
    const O = async () => {
      const V = t.storage;
      V && (await V.clearCache(), toastr.success(D("Cache cleared")));
    }, A = () => {
      const V = JSON.stringify(t.settings, null, 2), M = new Blob([V], { type: "application/json" }), C = URL.createObjectURL(M), E = document.createElement("a");
      E.href = C, E.download = "st-music-player-settings.json", E.click(), URL.revokeObjectURL(C);
    }, G = () => {
      const V = document.createElement("input");
      V.type = "file", V.accept = ".json", V.onchange = async (M) => {
        const C = M.target.files?.[0];
        if (!C) return;
        const E = await C.text();
        try {
          const H = JSON.parse(E);
          if (typeof H != "object" || H === null) throw new Error("Not an object");
          const re = ["volume", "playMode", "position", "widgetMode", "autoPlayOnNewCue", "providers", "customCueRules"], Q = {};
          for (const z of re)
            z in H && (Q[z] = H[z]);
          if (typeof Q.volume != "number" || Q.volume < 0 || Q.volume > 100)
            throw new Error("Invalid volume");
          if (typeof Q.playMode != "string" || !["list", "random", "single"].includes(Q.playMode))
            throw new Error("Invalid playMode");
          if (Q.providers && !Array.isArray(Q.providers))
            throw new Error("Invalid providers");
          if (Q.customCueRules && !Array.isArray(Q.customCueRules))
            throw new Error("Invalid customCueRules");
          Object.assign(t.settings, Q), t.save(), toastr.success(D("Data imported"));
        } catch (H) {
          console.error("Import failed", H), toastr.error(D("Import failed") + ": " + (H instanceof Error ? H.message : D("Invalid JSON")));
        }
      }, V.click();
    };
    return (V, M) => (L(), F("div", pf, [
      p("div", gf, [
        (L(), F(te, null, Ye(n, (C) => p("div", {
          key: C.id,
          class: be(["stmp-tab", { active: s.value === C.id }]),
          onClick: (E) => s.value = C.id
        }, [
          p("i", {
            class: be(C.icon)
          }, null, 2),
          p("span", null, Z(C.label), 1)
        ], 10, mf)), 64))
      ]),
      p("div", vf, [
        rt(p("div", yf, [
          p("div", bf, [
            p("label", _f, Z(w(D)("Widget Mode")), 1),
            p("div", xf, [
              (L(), F(te, null, Ye(o, (C) => p("div", {
                key: C.value,
                class: be(["menu_button menu_button_icon stmp-mode-btn", { toggled: w(t).settings.widgetMode === C.value }]),
                onClick: (E) => w(t).setWidgetMode(C.value)
              }, [
                p("i", {
                  class: be(C.icon)
                }, null, 2),
                p("span", null, Z(C.label), 1)
              ], 10, wf)), 64))
            ])
          ]),
          w(t).settings.widgetMode === "dock" ? (L(), F("div", Sf, [
            p("label", Cf, Z(w(D)("Dock Alignment")), 1),
            p("div", If, [
              (L(), F(te, null, Ye(r, (C) => p("div", {
                key: C.value,
                class: be(["menu_button menu_button_icon stmp-mode-btn", { toggled: w(t).settings.dockAlign === C.value }]),
                onClick: (E) => w(t).setDockAlign(C.value)
              }, [
                p("i", {
                  class: be(C.icon)
                }, null, 2),
                p("span", null, Z(C.label), 1)
              ], 10, Ef)), 64))
            ])
          ])) : Pe("", !0),
          p("div", Tf, [
            p("label", Af, Z(w(D)("Default Volume")) + ": " + Z(w(t).settings.volume), 1),
            p("input", {
              type: "range",
              min: "0",
              max: "100",
              value: w(t).settings.volume,
              onInput: l
            }, null, 40, Mf)
          ]),
          p("div", Pf, [
            p("label", Rf, Z(w(D)("Default Play Mode")), 1),
            p("select", {
              id: "stmp-playmode",
              class: "text_pole",
              value: w(t).settings.playMode,
              onChange: a
            }, [
              (L(), F(te, null, Ye(i, (C) => p("option", {
                key: C.value,
                value: C.value
              }, Z(C.label), 9, $f)), 64))
            ], 40, kf)
          ]),
          ee(Zi, {
            "model-value": w(t).settings.autoPlayOnNewCue,
            label: w(D)("Auto-play on new cue"),
            "onUpdate:modelValue": M[0] || (M[0] = (C) => {
              w(t).settings.autoPlayOnNewCue = C, w(t).save();
            })
          }, null, 8, ["model-value", "label"])
        ], 512), [
          [Rs, s.value === "playback"]
        ]),
        rt(p("div", Lf, [
          (L(!0), F(te, null, Ye(w(t).settings.providers, (C) => (L(), F("div", {
            key: C.id,
            class: "stmp-provider-card"
          }, [
            ee(Zi, {
              "model-value": C.enabled,
              label: f[C.id] || C.id,
              "onUpdate:modelValue": () => c(C.id)
            }, null, 8, ["model-value", "label", "onUpdate:modelValue"]),
            C.id === "netease" && C.enabled ? (L(), F("div", Of, [
              rt(p("input", {
                class: "text_pole",
                "onUpdate:modelValue": (E) => C.config.baseURL = E,
                placeholder: w(D)("API baseURL"),
                onChange: M[1] || (M[1] = (E) => w(t).save())
              }, null, 40, Df), [
                [ns, C.config.baseURL]
              ])
            ])) : Pe("", !0),
            C.id === "custom" && C.enabled ? (L(), F("div", Nf, [
              rt(p("input", {
                class: "text_pole",
                "onUpdate:modelValue": (E) => C.config.searchURL = E,
                placeholder: w(D)("Search URL"),
                onChange: M[2] || (M[2] = (E) => w(t).save())
              }, null, 40, Ff), [
                [ns, C.config.searchURL]
              ]),
              rt(p("input", {
                class: "text_pole",
                "onUpdate:modelValue": (E) => C.config.resolveURL = E,
                placeholder: w(D)("Resolve URL"),
                onChange: M[3] || (M[3] = (E) => w(t).save())
              }, null, 40, Uf), [
                [ns, C.config.resolveURL]
              ])
            ])) : Pe("", !0)
          ]))), 128))
        ], 512), [
          [Rs, s.value === "providers"]
        ]),
        rt(p("div", Vf, [
          p("div", Hf, [
            p("label", jf, Z(w(D)("Custom Cue Rules (Regex)")), 1),
            p("div", Bf, [
              (L(!0), F(te, null, Ye(w(t).settings.customCueRules, (C, E) => (L(), F("div", {
                key: E,
                class: "stmp-rule"
              }, [
                p("code", null, Z(C), 1),
                p("div", {
                  class: "menu_button menu_button_icon stmp-rule-del",
                  onClick: (H) => m(E)
                }, [...M[5] || (M[5] = [
                  p("i", { class: "fa-solid fa-xmark" }, null, -1)
                ])], 8, Kf)
              ]))), 128))
            ]),
            p("div", Wf, [
              rt(p("input", {
                "onUpdate:modelValue": M[4] || (M[4] = (C) => h.value = C),
                class: "text_pole",
                placeholder: w(D)("Add regex rule..."),
                onKeydown: vr(v, ["enter"])
              }, null, 40, zf), [
                [ns, h.value]
              ]),
              p("div", {
                class: "menu_button menu_button_icon stmp-rule-add-btn",
                onClick: v
              }, [...M[6] || (M[6] = [
                p("i", { class: "fa-solid fa-plus" }, null, -1)
              ])])
            ])
          ])
        ], 512), [
          [Rs, s.value === "cue"]
        ]),
        rt(p("div", Jf, [
          p("div", qf, [
            p("div", {
              class: "menu_button menu_button_icon stmp-data-btn",
              onClick: O
            }, [
              M[7] || (M[7] = p("i", { class: "fa-solid fa-trash-can" }, null, -1)),
              p("span", null, Z(w(D)("Clear cache")), 1)
            ]),
            p("div", {
              class: "menu_button menu_button_icon stmp-data-btn",
              onClick: A
            }, [
              M[8] || (M[8] = p("i", { class: "fa-solid fa-file-export" }, null, -1)),
              p("span", null, Z(w(D)("Export data")), 1)
            ]),
            p("div", {
              class: "menu_button menu_button_icon stmp-data-btn",
              onClick: G
            }, [
              M[9] || (M[9] = p("i", { class: "fa-solid fa-file-import" }, null, -1)),
              p("span", null, Z(w(D)("Import data")), 1)
            ])
          ])
        ], 512), [
          [Rs, s.value === "data"]
        ])
      ])
    ]));
  }
}), Yf = /* @__PURE__ */ St(Gf, [["__scopeId", "data-v-b7fca2b6"]]);
class Xf {
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
    const t = SillyTavern.getContext(), s = t.eventSource, n = t.event_types, i = (o, r, l) => {
      const a = (...f) => {
        const c = l(f[0]);
        this.emit(r, c);
      };
      s.on(o, a), this.registered.push({ event: o, handler: a });
    };
    i(n.CHAT_CHANGED, "chat-changed", (o) => ({
      chatId: typeof o == "string" ? o : void 0
    })), i(n.GENERATION_ENDED, "message-generated", (o) => ({
      messageId: $s(o)
    })), i(n.MESSAGE_UPDATED, "message-updated", (o) => ({
      messageId: $s(o)
    })), i(n.MESSAGE_DELETED, "message-deleted", (o) => ({
      messageId: $s(o)
    })), i(n.MESSAGE_SWIPED, "message-swiped", (o) => ({
      messageId: $s(o)
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
        } catch (o) {
          console.error("[STEventBridge] listener error:", o);
        }
  }
}
function $s(e) {
  if (e == null) return;
  const t = typeof e == "number" ? e : parseInt(String(e), 10);
  return Number.isFinite(t) ? t : void 0;
}
function Zf() {
  return new Xf();
}
const Qf = [
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
    const o = i[1];
    if (o === void 0 || o === "") continue;
    const r = i[2], l = {
      song: o.trim(),
      artist: r !== void 0 && r !== "" ? r.trim() : void 0,
      raw: i[0]
    };
    s.push({ index: i.index, cue: l });
  }
  return s;
}
function eo(e, t = []) {
  const s = /* @__PURE__ */ new Map(), n = (i) => {
    s.has(i.index) || s.set(i.index, i);
  };
  for (const i of Qf)
    for (const o of Qi(i, e)) n(o);
  for (const i of t)
    try {
      const o = new RegExp(i, "g");
      for (const r of Qi(o, e)) n(r);
    } catch {
    }
  return [...s.values()].sort((i, o) => i.index - o.index).map((i) => i.cue);
}
class ed {
  constructor(t) {
    this.cursors = /* @__PURE__ */ new Map(), this.getChatMessage = t;
  }
  scanIncremental(t, s, n, i = []) {
    const o = [];
    for (let r = s; r <= n; r++) {
      const l = this.getChatMessage(r);
      if (l === void 0) continue;
      const a = eo(l, i);
      if (a.length === 0) continue;
      const f = a.at(-1);
      o.push({ messageId: r, cues: [f] });
    }
    return this.cursors.set(t, {
      chatId: t,
      lastScannedMessageId: n,
      updatedAt: Date.now()
    }), o;
  }
  scanMessage(t, s, n = []) {
    const i = this.getChatMessage(s);
    if (i === void 0)
      return { messageId: s, cue: null };
    const o = eo(i, n), r = o.length > 0 ? o.at(-1) : null;
    return { messageId: s, cue: r };
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
let Kt = null, at = null, hs = null, ps = null, Wt = null, qs = null;
const td = `
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
function sd() {
  const e = $("#extensions_settings2");
  if (!e || !e.length || (e.append(td), ps = e.children(".inline-drawer").last()[0] ?? null, !ps)) return;
  const t = ps.querySelector("#stmp-settings-mount");
  t && qs && (Wt = yr(Yf), Wt.use(qs), Wt.mount(t));
}
function nd() {
  Wt && (Wt.unmount(), Wt = null), ps?.remove(), ps = null;
}
function id(e, t, s) {
  at = Zf(), at.on("chat-changed", () => {
    const n = SillyTavern.getContext(), i = n.chatId ?? String(Date.now());
    if (t.setChatId(i), t.getCursor() < 0 && n.chat.length > 0) {
      const o = e.scanIncremental(
        i,
        0,
        n.chat.length - 1,
        s.settings.customCueRules
      );
      t.handleNewCues(o), t.setCursor(n.chat.length - 1);
    }
  }), at.on("message-generated", (n) => {
    const i = SillyTavern.getContext(), o = t.chatId ?? i.chatId ?? "";
    if (!o || n.messageId === void 0) return;
    const r = t.getCursor() + 1, l = n.messageId;
    if (l < r) return;
    const a = e.scanIncremental(
      o,
      r,
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
function od(e, t, s) {
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
async function ad() {
  try {
    const e = document.createElement("div");
    e.id = "st-music-player-root", document.documentElement.appendChild(e);
    const t = rc();
    qs = t, Kt = yr(af), Kt.use(t), Kt.mount(e);
    const s = Ie(), n = mc();
    s.init(n);
    const i = $t();
    i.init(), i.setVolume(s.settings.volume);
    const o = new ed((a) => SillyTavern.getContext().chat[a]?.mes), r = Jt();
    r.init(o), sd();
    const l = SillyTavern.getContext();
    hs = () => {
      id(o, r, s), od(o, r, s);
    }, l.eventSource.on(l.event_types.APP_READY, hs), console.log("[ST-Music-Player] 播放器加载完成");
  } catch (e) {
    console.error("[ST-Music-Player] init failed:", e);
  }
}
function Cr() {
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
      $t().destroy();
    } catch {
    }
    Kt.unmount(), Kt = null;
  }
  const e = document.getElementById("st-music-player-root");
  e && e.remove(), nd(), qs = null;
}
function cd() {
  Cr();
}
async function rd() {
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
async function ud() {
  await rd(), Cr();
}
export {
  rd as clean,
  ud as delete,
  Cr as destroy,
  cd as disable,
  ad as init
};
