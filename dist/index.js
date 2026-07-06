/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function wn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const ne = {}, Pt = [], ze = () => {
}, Pi = () => !1, Ls = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), $s = (e) => e.startsWith("onUpdate:"), ge = Object.assign, Sn = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Xr = Object.prototype.hasOwnProperty, X = (e, t) => Xr.call(e, t), V = Array.isArray, Rt = (e) => as(e) === "[object Map]", Ri = (e) => as(e) === "[object Set]", Kn = (e) => as(e) === "[object Date]", K = (e) => typeof e == "function", le = (e) => typeof e == "string", Ae = (e) => typeof e == "symbol", te = (e) => e !== null && typeof e == "object", Ai = (e) => (te(e) || K(e)) && K(e.then) && K(e.catch), Li = Object.prototype.toString, as = (e) => Li.call(e), Zr = (e) => as(e).slice(8, -1), $i = (e) => as(e) === "[object Object]", ks = (e) => le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Jt = /* @__PURE__ */ wn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Os = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Qr = /-\w/g, Le = Os(
  (e) => e.replace(Qr, (t) => t.slice(1).toUpperCase())
), eo = /\B([A-Z])/g, ut = Os(
  (e) => e.replace(eo, "-$1").toLowerCase()
), ki = Os((e) => e.charAt(0).toUpperCase() + e.slice(1)), qs = Os(
  (e) => e ? `on${ki(e)}` : ""
), We = (e, t) => !Object.is(e, t), _s = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, Oi = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, Cn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Bn;
const Ds = () => Bn || (Bn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function In(e) {
  if (V(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], i = le(n) ? io(n) : In(n);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (le(e) || te(e))
    return e;
}
const to = /;(?![^(]*\))/g, so = /:([^]+)/, no = /\/\*[^]*?\*\//g;
function io(e) {
  const t = {};
  return e.replace(no, "").split(to).forEach((s) => {
    if (s) {
      const n = s.split(so);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Re(e) {
  let t = "";
  if (le(e))
    t = e;
  else if (V(e))
    for (let s = 0; s < e.length; s++) {
      const n = Re(e[s]);
      n && (t += n + " ");
    }
  else if (te(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const ro = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", oo = /* @__PURE__ */ wn(ro);
function Di(e) {
  return !!e || e === "";
}
function lo(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = En(e[n], t[n]);
  return s;
}
function En(e, t) {
  if (e === t) return !0;
  let s = Kn(e), n = Kn(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = Ae(e), n = Ae(t), s || n)
    return e === t;
  if (s = V(e), n = V(t), s || n)
    return s && n ? lo(e, t) : !1;
  if (s = te(e), n = te(t), s || n) {
    if (!s || !n)
      return !1;
    const i = Object.keys(e).length, r = Object.keys(t).length;
    if (i !== r)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !En(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Ni = (e) => !!(e && e.__v_isRef === !0), Q = (e) => le(e) ? e : e == null ? "" : V(e) || te(e) && (e.toString === Li || !K(e.toString)) ? Ni(e) ? Q(e.value) : JSON.stringify(e, Ui, 2) : String(e), Ui = (e, t) => Ni(t) ? Ui(e, t.value) : Rt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], r) => (s[Ys(n, r) + " =>"] = i, s),
    {}
  )
} : Ri(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => Ys(s))
} : Ae(t) ? Ys(t) : te(t) && !V(t) && !$i(t) ? String(t) : t, Ys = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ae(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let he;
class Fi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && he && (he.active ? (this.parent = he, this.index = (he.scopes || (he.scopes = [])).push(
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
      const s = he;
      try {
        return he = this, t();
      } finally {
        he = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = he, he = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (he === this)
        he = this.prevScope;
      else {
        let t = he;
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
function ji(e) {
  return new Fi(e);
}
function Vi() {
  return he;
}
function co(e, t = !1) {
  he && he.cleanups.push(e);
}
let re;
const Xs = /* @__PURE__ */ new WeakSet();
class Hi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, he && (he.active ? he.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Xs.has(this) && (Xs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Bi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Wn(this), Wi(this);
    const t = re, s = $e;
    re = this, $e = !0;
    try {
      return this.fn();
    } finally {
      zi(this), re = t, $e = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Pn(t);
      this.deps = this.depsTail = void 0, Wn(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Xs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    un(this) && this.run();
  }
  get dirty() {
    return un(this);
  }
}
let Ki = 0, Gt, qt;
function Bi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = qt, qt = e;
    return;
  }
  e.next = Gt, Gt = e;
}
function Tn() {
  Ki++;
}
function Mn() {
  if (--Ki > 0)
    return;
  if (qt) {
    let t = qt;
    for (qt = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; Gt; ) {
    let t = Gt;
    for (Gt = void 0; t; ) {
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
function Wi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function zi(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === s && (s = i), Pn(n), ao(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = s;
}
function un(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ji(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ji(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === is) || (e.globalVersion = is, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !un(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = re, n = $e;
  re = e, $e = !0;
  try {
    Wi(e);
    const i = e.fn(e._value);
    (t.version === 0 || We(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    re = s, $e = n, zi(e), e.flags &= -3;
  }
}
function Pn(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let r = s.computed.deps; r; r = r.nextDep)
      Pn(r, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function ao(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let $e = !0;
const Gi = [];
function Je() {
  Gi.push($e), $e = !1;
}
function Ge() {
  const e = Gi.pop();
  $e = e === void 0 ? !0 : e;
}
function Wn(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = re;
    re = void 0;
    try {
      t();
    } finally {
      re = s;
    }
  }
}
let is = 0;
class uo {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Rn {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!re || !$e || re === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== re)
      s = this.activeLink = new uo(re, this), re.deps ? (s.prevDep = re.depsTail, re.depsTail.nextDep = s, re.depsTail = s) : re.deps = re.depsTail = s, qi(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = re.depsTail, s.nextDep = void 0, re.depsTail.nextDep = s, re.depsTail = s, re.deps === s && (re.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, is++, this.notify(t);
  }
  notify(t) {
    Tn();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Mn();
    }
  }
}
function qi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        qi(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const Ss = /* @__PURE__ */ new WeakMap(), vt = /* @__PURE__ */ Symbol(
  ""
), fn = /* @__PURE__ */ Symbol(
  ""
), rs = /* @__PURE__ */ Symbol(
  ""
);
function ve(e, t, s) {
  if ($e && re) {
    let n = Ss.get(e);
    n || Ss.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(s);
    i || (n.set(s, i = new Rn()), i.map = n, i.key = s), i.track();
  }
}
function Qe(e, t, s, n, i, r) {
  const o = Ss.get(e);
  if (!o) {
    is++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (Tn(), t === "clear")
    o.forEach(l);
  else {
    const c = V(e), d = c && ks(s);
    if (c && s === "length") {
      const u = Number(n);
      o.forEach((h, w) => {
        (w === "length" || w === rs || !Ae(w) && w >= u) && l(h);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), d && l(o.get(rs)), t) {
        case "add":
          c ? d && l(o.get("length")) : (l(o.get(vt)), Rt(e) && l(o.get(fn)));
          break;
        case "delete":
          c || (l(o.get(vt)), Rt(e) && l(o.get(fn)));
          break;
        case "set":
          Rt(e) && l(o.get(vt));
          break;
      }
  }
  Mn();
}
function fo(e, t) {
  const s = Ss.get(e);
  return s && s.get(t);
}
function St(e) {
  const t = /* @__PURE__ */ q(e);
  return t === e ? t : (ve(t, "iterate", rs), /* @__PURE__ */ Ee(e) ? t : t.map(ke));
}
function Ns(e) {
  return ve(e = /* @__PURE__ */ q(e), "iterate", rs), e;
}
function Ke(e, t) {
  return /* @__PURE__ */ nt(e) ? Dt(/* @__PURE__ */ st(e) ? ke(t) : t) : ke(t);
}
const ho = {
  __proto__: null,
  [Symbol.iterator]() {
    return Zs(this, Symbol.iterator, (e) => Ke(this, e));
  },
  concat(...e) {
    return St(this).concat(
      ...e.map((t) => V(t) ? St(t) : t)
    );
  },
  entries() {
    return Zs(this, "entries", (e) => (e[1] = Ke(this, e[1]), e));
  },
  every(e, t) {
    return qe(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return qe(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => Ke(this, n)),
      arguments
    );
  },
  find(e, t) {
    return qe(
      this,
      "find",
      e,
      t,
      (s) => Ke(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return qe(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return qe(
      this,
      "findLast",
      e,
      t,
      (s) => Ke(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return qe(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return qe(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Qs(this, "includes", e);
  },
  indexOf(...e) {
    return Qs(this, "indexOf", e);
  },
  join(e) {
    return St(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Qs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return qe(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Vt(this, "pop");
  },
  push(...e) {
    return Vt(this, "push", e);
  },
  reduce(e, ...t) {
    return zn(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return zn(this, "reduceRight", e, t);
  },
  shift() {
    return Vt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return qe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Vt(this, "splice", e);
  },
  toReversed() {
    return St(this).toReversed();
  },
  toSorted(e) {
    return St(this).toSorted(e);
  },
  toSpliced(...e) {
    return St(this).toSpliced(...e);
  },
  unshift(...e) {
    return Vt(this, "unshift", e);
  },
  values() {
    return Zs(this, "values", (e) => Ke(this, e));
  }
};
function Zs(e, t, s) {
  const n = Ns(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ Ee(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = s(r.value)), r;
  }), i;
}
const po = Array.prototype;
function qe(e, t, s, n, i, r) {
  const o = Ns(e), l = o !== e && !/* @__PURE__ */ Ee(e), c = o[t];
  if (c !== po[t]) {
    const h = c.apply(e, r);
    return l ? ke(h) : h;
  }
  let d = s;
  o !== e && (l ? d = function(h, w) {
    return s.call(this, Ke(e, h), w, e);
  } : s.length > 2 && (d = function(h, w) {
    return s.call(this, h, w, e);
  }));
  const u = c.call(o, d, n);
  return l && i ? i(u) : u;
}
function zn(e, t, s, n) {
  const i = Ns(e), r = i !== e && !/* @__PURE__ */ Ee(e);
  let o = s, l = !1;
  i !== e && (r ? (l = n.length === 0, o = function(d, u, h) {
    return l && (l = !1, d = Ke(e, d)), s.call(this, d, Ke(e, u), h, e);
  }) : s.length > 3 && (o = function(d, u, h) {
    return s.call(this, d, u, h, e);
  }));
  const c = i[t](o, ...n);
  return l ? Ke(e, c) : c;
}
function Qs(e, t, s) {
  const n = /* @__PURE__ */ q(e);
  ve(n, "iterate", rs);
  const i = n[t](...s);
  return (i === -1 || i === !1) && /* @__PURE__ */ Fs(s[0]) ? (s[0] = /* @__PURE__ */ q(s[0]), n[t](...s)) : i;
}
function Vt(e, t, s = []) {
  Je(), Tn();
  const n = (/* @__PURE__ */ q(e))[t].apply(e, s);
  return Mn(), Ge(), n;
}
const go = /* @__PURE__ */ wn("__proto__,__v_isRef,__isVue"), Yi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ae)
);
function mo(e) {
  Ae(e) || (e = String(e));
  const t = /* @__PURE__ */ q(this);
  return ve(t, "has", e), t.hasOwnProperty(e);
}
class Xi {
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
      return n === (i ? r ? Eo : tr : r ? er : Qi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = V(t);
    if (!i) {
      let c;
      if (o && (c = ho[s]))
        return c;
      if (s === "hasOwnProperty")
        return mo;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ce(t) ? t : n
    );
    if ((Ae(s) ? Yi.has(s) : go(s)) || (i || ve(t, "get", s), r))
      return l;
    if (/* @__PURE__ */ ce(l)) {
      const c = o && ks(s) ? l : l.value;
      return i && te(c) ? /* @__PURE__ */ hn(c) : c;
    }
    return te(l) ? i ? /* @__PURE__ */ hn(l) : /* @__PURE__ */ Us(l) : l;
  }
}
class Zi extends Xi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, i) {
    let r = t[s];
    const o = V(t) && ks(s);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ nt(r);
      if (!/* @__PURE__ */ Ee(n) && !/* @__PURE__ */ nt(n) && (r = /* @__PURE__ */ q(r), n = /* @__PURE__ */ q(n)), !o && /* @__PURE__ */ ce(r) && !/* @__PURE__ */ ce(n))
        return d || (r.value = n), !0;
    }
    const l = o ? Number(s) < t.length : X(t, s), c = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ ce(t) ? t : i
    );
    return t === /* @__PURE__ */ q(i) && c && (l ? We(n, r) && Qe(t, "set", s, n) : Qe(t, "add", s, n)), c;
  }
  deleteProperty(t, s) {
    const n = X(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && Qe(t, "delete", s, void 0), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Ae(s) || !Yi.has(s)) && ve(t, "has", s), n;
  }
  ownKeys(t) {
    return ve(
      t,
      "iterate",
      V(t) ? "length" : vt
    ), Reflect.ownKeys(t);
  }
}
class vo extends Xi {
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
const yo = /* @__PURE__ */ new Zi(), bo = /* @__PURE__ */ new vo(), _o = /* @__PURE__ */ new Zi(!0);
const dn = (e) => e, gs = (e) => Reflect.getPrototypeOf(e);
function xo(e, t, s) {
  return function(...n) {
    const i = this.__v_raw, r = /* @__PURE__ */ q(i), o = Rt(r), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, d = i[e](...n), u = s ? dn : t ? Dt : ke;
    return !t && ve(
      r,
      "iterate",
      c ? fn : vt
    ), ge(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: h, done: w } = d.next();
          return w ? { value: h, done: w } : {
            value: l ? [u(h[0]), u(h[1])] : u(h),
            done: w
          };
        }
      }
    );
  };
}
function ms(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function wo(e, t) {
  const s = {
    get(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ q(r), l = /* @__PURE__ */ q(i);
      e || (We(i, l) && ve(o, "get", i), ve(o, "get", l));
      const { has: c } = gs(o), d = t ? dn : e ? Dt : ke;
      if (c.call(o, i))
        return d(r.get(i));
      if (c.call(o, l))
        return d(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && ve(/* @__PURE__ */ q(i), "iterate", vt), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ q(r), l = /* @__PURE__ */ q(i);
      return e || (We(i, l) && ve(o, "has", i), ve(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ q(l), d = t ? dn : e ? Dt : ke;
      return !e && ve(c, "iterate", vt), l.forEach((u, h) => i.call(r, d(u), d(h), o));
    }
  };
  return ge(
    s,
    e ? {
      add: ms("add"),
      set: ms("set"),
      delete: ms("delete"),
      clear: ms("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ q(this), o = gs(r), l = /* @__PURE__ */ q(i), c = !t && !/* @__PURE__ */ Ee(i) && !/* @__PURE__ */ nt(i) ? l : i;
        return o.has.call(r, c) || We(i, c) && o.has.call(r, i) || We(l, c) && o.has.call(r, l) || (r.add(c), Qe(r, "add", c, c)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ Ee(r) && !/* @__PURE__ */ nt(r) && (r = /* @__PURE__ */ q(r));
        const o = /* @__PURE__ */ q(this), { has: l, get: c } = gs(o);
        let d = l.call(o, i);
        d || (i = /* @__PURE__ */ q(i), d = l.call(o, i));
        const u = c.call(o, i);
        return o.set(i, r), d ? We(r, u) && Qe(o, "set", i, r) : Qe(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ q(this), { has: o, get: l } = gs(r);
        let c = o.call(r, i);
        c || (i = /* @__PURE__ */ q(i), c = o.call(r, i)), l && l.call(r, i);
        const d = r.delete(i);
        return c && Qe(r, "delete", i, void 0), d;
      },
      clear() {
        const i = /* @__PURE__ */ q(this), r = i.size !== 0, o = i.clear();
        return r && Qe(
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
    s[i] = xo(i, e, t);
  }), s;
}
function An(e, t) {
  const s = wo(e, t);
  return (n, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    X(s, i) && i in n ? s : n,
    i,
    r
  );
}
const So = {
  get: /* @__PURE__ */ An(!1, !1)
}, Co = {
  get: /* @__PURE__ */ An(!1, !0)
}, Io = {
  get: /* @__PURE__ */ An(!0, !1)
};
const Qi = /* @__PURE__ */ new WeakMap(), er = /* @__PURE__ */ new WeakMap(), tr = /* @__PURE__ */ new WeakMap(), Eo = /* @__PURE__ */ new WeakMap();
function To(e) {
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
function Us(e) {
  return /* @__PURE__ */ nt(e) ? e : Ln(
    e,
    !1,
    yo,
    So,
    Qi
  );
}
// @__NO_SIDE_EFFECTS__
function Mo(e) {
  return Ln(
    e,
    !1,
    _o,
    Co,
    er
  );
}
// @__NO_SIDE_EFFECTS__
function hn(e) {
  return Ln(
    e,
    !0,
    bo,
    Io,
    tr
  );
}
function Ln(e, t, s, n, i) {
  if (!te(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const o = To(Zr(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? n : s
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function st(e) {
  return /* @__PURE__ */ nt(e) ? /* @__PURE__ */ st(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function nt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ee(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Fs(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function q(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ q(t) : e;
}
function $n(e) {
  return !X(e, "__v_skip") && Object.isExtensible(e) && Oi(e, "__v_skip", !0), e;
}
const ke = (e) => te(e) ? /* @__PURE__ */ Us(e) : e, Dt = (e) => te(e) ? /* @__PURE__ */ hn(e) : e;
// @__NO_SIDE_EFFECTS__
function ce(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Me(e) {
  return Po(e, !1);
}
function Po(e, t) {
  return /* @__PURE__ */ ce(e) ? e : new Ro(e, t);
}
class Ro {
  constructor(t, s) {
    this.dep = new Rn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ q(t), this._value = s ? t : ke(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Ee(t) || /* @__PURE__ */ nt(t);
    t = n ? t : /* @__PURE__ */ q(t), We(t, s) && (this._rawValue = t, this._value = n ? t : ke(t), this.dep.trigger());
  }
}
function P(e) {
  return /* @__PURE__ */ ce(e) ? e.value : e;
}
const Ao = {
  get: (e, t, s) => t === "__v_raw" ? e : P(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t];
    return /* @__PURE__ */ ce(i) && !/* @__PURE__ */ ce(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function sr(e) {
  return /* @__PURE__ */ st(e) ? e : new Proxy(e, Ao);
}
// @__NO_SIDE_EFFECTS__
function Lo(e) {
  const t = V(e) ? new Array(e.length) : {};
  for (const s in e)
    t[s] = ko(e, s);
  return t;
}
class $o {
  constructor(t, s, n) {
    this._object = t, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = Ae(s) ? s : String(s), this._raw = /* @__PURE__ */ q(t);
    let i = !0, r = t;
    if (!V(t) || Ae(this._key) || !ks(this._key))
      do
        i = !/* @__PURE__ */ Fs(r) || /* @__PURE__ */ Ee(r);
      while (i && (r = r.__v_raw));
    this._shallow = i;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = P(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ ce(this._raw[this._key])) {
      const s = this._object[this._key];
      if (/* @__PURE__ */ ce(s)) {
        s.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return fo(this._raw, this._key);
  }
}
function ko(e, t, s) {
  return new $o(e, t, s);
}
class Oo {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Rn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = is - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    re !== this)
      return Bi(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ji(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Do(e, t, s = !1) {
  let n, i;
  return K(e) ? n = e : (n = e.get, i = e.set), new Oo(n, i, s);
}
const vs = {}, Cs = /* @__PURE__ */ new WeakMap();
let mt;
function No(e, t = !1, s = mt) {
  if (s) {
    let n = Cs.get(s);
    n || Cs.set(s, n = []), n.push(e);
  }
}
function Uo(e, t, s = ne) {
  const { immediate: n, deep: i, once: r, scheduler: o, augmentJob: l, call: c } = s, d = (A) => i ? A : /* @__PURE__ */ Ee(A) || i === !1 || i === 0 ? et(A, 1) : et(A);
  let u, h, w, v, S = !1, m = !1;
  if (/* @__PURE__ */ ce(e) ? (h = () => e.value, S = /* @__PURE__ */ Ee(e)) : /* @__PURE__ */ st(e) ? (h = () => d(e), S = !0) : V(e) ? (m = !0, S = e.some((A) => /* @__PURE__ */ st(A) || /* @__PURE__ */ Ee(A)), h = () => e.map((A) => {
    if (/* @__PURE__ */ ce(A))
      return A.value;
    if (/* @__PURE__ */ st(A))
      return d(A);
    if (K(A))
      return c ? c(A, 2) : A();
  })) : K(e) ? t ? h = c ? () => c(e, 2) : e : h = () => {
    if (w) {
      Je();
      try {
        w();
      } finally {
        Ge();
      }
    }
    const A = mt;
    mt = u;
    try {
      return c ? c(e, 3, [v]) : e(v);
    } finally {
      mt = A;
    }
  } : h = ze, t && i) {
    const A = h, B = i === !0 ? 1 / 0 : i;
    h = () => et(A(), B);
  }
  const R = Vi(), U = () => {
    u.stop(), R && R.active && Sn(R.effects, u);
  };
  if (r && t) {
    const A = t;
    t = (...B) => {
      const fe = A(...B);
      return U(), fe;
    };
  }
  let F = m ? new Array(e.length).fill(vs) : vs;
  const W = (A) => {
    if (!(!(u.flags & 1) || !u.dirty && !A))
      if (t) {
        const B = u.run();
        if (A || i || S || (m ? B.some((fe, L) => We(fe, F[L])) : We(B, F))) {
          w && w();
          const fe = mt;
          mt = u;
          try {
            const L = [
              B,
              // pass undefined as the old value when it's changed for the first time
              F === vs ? void 0 : m && F[0] === vs ? [] : F,
              v
            ];
            F = B, c ? c(t, 3, L) : (
              // @ts-expect-error
              t(...L)
            );
          } finally {
            mt = fe;
          }
        }
      } else
        u.run();
  };
  return l && l(W), u = new Hi(h), u.scheduler = o ? () => o(W, !1) : W, v = (A) => No(A, !1, u), w = u.onStop = () => {
    const A = Cs.get(u);
    if (A) {
      if (c)
        c(A, 4);
      else
        for (const B of A) B();
      Cs.delete(u);
    }
  }, t ? n ? W(!0) : F = u.run() : o ? o(W.bind(null, !0), !0) : u.run(), U.pause = u.pause.bind(u), U.resume = u.resume.bind(u), U.stop = U, U;
}
function et(e, t = 1 / 0, s) {
  if (t <= 0 || !te(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ ce(e))
    et(e.value, t, s);
  else if (V(e))
    for (let n = 0; n < e.length; n++)
      et(e[n], t, s);
  else if (Ri(e) || Rt(e))
    e.forEach((n) => {
      et(n, t, s);
    });
  else if ($i(e)) {
    for (const n in e)
      et(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && et(e[n], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function us(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    js(i, t, s);
  }
}
function Oe(e, t, s, n) {
  if (K(e)) {
    const i = us(e, t, s, n);
    return i && Ai(i) && i.catch((r) => {
      js(r, t, s);
    }), i;
  }
  if (V(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(Oe(e[r], t, s, n));
    return i;
  }
}
function js(e, t, s, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || ne;
  if (t) {
    let l = t.parent;
    const c = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let h = 0; h < u.length; h++)
          if (u[h](e, c, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      Je(), us(r, null, 10, [
        e,
        c,
        d
      ]), Ge();
      return;
    }
  }
  Fo(e, s, i, n, o);
}
function Fo(e, t, s, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const be = [];
let He = -1;
const At = [];
let ot = null, Et = 0;
const nr = /* @__PURE__ */ Promise.resolve();
let Is = null;
function lt(e) {
  const t = Is || nr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function jo(e) {
  let t = He + 1, s = be.length;
  for (; t < s; ) {
    const n = t + s >>> 1, i = be[n], r = os(i);
    r < e || r === e && i.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function kn(e) {
  if (!(e.flags & 1)) {
    const t = os(e), s = be[be.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= os(s) ? be.push(e) : be.splice(jo(t), 0, e), e.flags |= 1, ir();
  }
}
function ir() {
  Is || (Is = nr.then(or));
}
function Vo(e) {
  V(e) ? At.push(...e) : ot && e.id === -1 ? ot.splice(Et + 1, 0, e) : e.flags & 1 || (At.push(e), e.flags |= 1), ir();
}
function Jn(e, t, s = He + 1) {
  for (; s < be.length; s++) {
    const n = be[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      be.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function rr(e) {
  if (At.length) {
    const t = [...new Set(At)].sort(
      (s, n) => os(s) - os(n)
    );
    if (At.length = 0, ot) {
      ot.push(...t);
      return;
    }
    for (ot = t, Et = 0; Et < ot.length; Et++) {
      const s = ot[Et];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    ot = null, Et = 0;
  }
}
const os = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function or(e) {
  try {
    for (He = 0; He < be.length; He++) {
      const t = be[He];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), us(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; He < be.length; He++) {
      const t = be[He];
      t && (t.flags &= -2);
    }
    He = -1, be.length = 0, rr(), Is = null, (be.length || At.length) && or();
  }
}
let Pe = null, lr = null;
function Es(e) {
  const t = Pe;
  return Pe = e, lr = e && e.type.__scopeId || null, t;
}
function Ho(e, t = Pe, s) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && ii(-1);
    const r = Es(t);
    let o;
    try {
      o = e(...i);
    } finally {
      Es(r), n._d && ii(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Kt(e, t) {
  if (Pe === null)
    return e;
  const s = Bs(Pe), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, c = ne] = t[i];
    r && (K(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && et(o), n.push({
      dir: r,
      instance: s,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function pt(e, t, s, n) {
  const i = e.dirs, r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    r && (l.oldValue = r[o].value);
    let c = l.dir[n];
    c && (Je(), Oe(c, s, 8, [
      e.el,
      l,
      e,
      t
    ]), Ge());
  }
}
function Ko(e, t) {
  if (_e) {
    let s = _e.provides;
    const n = _e.parent && _e.parent.provides;
    n === s && (s = _e.provides = Object.create(n)), s[e] = t;
  }
}
function Yt(e, t, s = !1) {
  const n = Nr();
  if (n || yt) {
    let i = yt ? yt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return s && K(t) ? t.call(n && n.proxy) : t;
  }
}
function Bo() {
  return !!(Nr() || yt);
}
const Wo = /* @__PURE__ */ Symbol.for("v-scx"), zo = () => Yt(Wo);
function Lt(e, t, s) {
  return cr(e, t, s);
}
function cr(e, t, s = ne) {
  const { immediate: n, deep: i, flush: r, once: o } = s, l = ge({}, s), c = t && n || !t && r !== "post";
  let d;
  if (cs) {
    if (r === "sync") {
      const v = zo();
      d = v.__watcherHandles || (v.__watcherHandles = []);
    } else if (!c) {
      const v = () => {
      };
      return v.stop = ze, v.resume = ze, v.pause = ze, v;
    }
  }
  const u = _e;
  l.call = (v, S, m) => Oe(v, u, S, m);
  let h = !1;
  r === "post" ? l.scheduler = (v) => {
    xe(v, u && u.suspense);
  } : r !== "sync" && (h = !0, l.scheduler = (v, S) => {
    S ? v() : kn(v);
  }), l.augmentJob = (v) => {
    t && (v.flags |= 4), h && (v.flags |= 2, u && (v.id = u.uid, v.i = u));
  };
  const w = Uo(e, t, l);
  return cs && (d ? d.push(w) : c && w()), w;
}
function Jo(e, t, s) {
  const n = this.proxy, i = le(e) ? e.includes(".") ? ar(n, e) : () => n[e] : e.bind(n, n);
  let r;
  K(t) ? r = t : (r = t.handler, s = t);
  const o = fs(this), l = cr(i, r.bind(n), s);
  return o(), l;
}
function ar(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < s.length && n; i++)
      n = n[s[i]];
    return n;
  };
}
const Go = /* @__PURE__ */ Symbol("_vte"), qo = (e) => e.__isTeleport, en = /* @__PURE__ */ Symbol("_leaveCb");
function On(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, On(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function bt(e, t) {
  return K(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ge({ name: e.name }, t, { setup: e })
  ) : e;
}
function ur(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Gn(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const Ts = /* @__PURE__ */ new WeakMap();
function Xt(e, t, s, n, i = !1) {
  if (V(e)) {
    e.forEach(
      (m, R) => Xt(
        m,
        t && (V(t) ? t[R] : t),
        s,
        n,
        i
      )
    );
    return;
  }
  if (Zt(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Xt(e, t, s, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? Bs(n.component) : n.el, o = i ? null : r, { i: l, r: c } = e, d = t && t.r, u = l.refs === ne ? l.refs = {} : l.refs, h = l.setupState, w = /* @__PURE__ */ q(h), v = h === ne ? Pi : (m) => Gn(u, m) ? !1 : X(w, m), S = (m, R) => !(R && Gn(u, R));
  if (d != null && d !== c) {
    if (qn(t), le(d))
      u[d] = null, v(d) && (h[d] = null);
    else if (/* @__PURE__ */ ce(d)) {
      const m = t;
      S(d, m.k) && (d.value = null), m.k && (u[m.k] = null);
    }
  }
  if (K(c)) {
    Je();
    try {
      us(c, l, 12, [o, u]);
    } finally {
      Ge();
    }
  } else {
    const m = le(c), R = /* @__PURE__ */ ce(c);
    if (m || R) {
      const U = () => {
        if (e.f) {
          const F = m ? v(c) ? h[c] : u[c] : S() || !e.k ? c.value : u[e.k];
          if (i)
            V(F) && Sn(F, r);
          else if (V(F))
            F.includes(r) || F.push(r);
          else if (m)
            u[c] = [r], v(c) && (h[c] = u[c]);
          else {
            const W = [r];
            S(c, e.k) && (c.value = W), e.k && (u[e.k] = W);
          }
        } else m ? (u[c] = o, v(c) && (h[c] = o)) : R && (S(c, e.k) && (c.value = o), e.k && (u[e.k] = o));
      };
      if (o) {
        const F = () => {
          U(), Ts.delete(e);
        };
        F.id = -1, Ts.set(e, F), xe(F, s);
      } else
        qn(e), U();
    }
  }
}
function qn(e) {
  const t = Ts.get(e);
  t && (t.flags |= 8, Ts.delete(e));
}
Ds().requestIdleCallback;
Ds().cancelIdleCallback;
const Zt = (e) => !!e.type.__asyncLoader, fr = (e) => e.type.__isKeepAlive;
function Yo(e, t) {
  dr(e, "a", t);
}
function Xo(e, t) {
  dr(e, "da", t);
}
function dr(e, t, s = _e) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = s;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Vs(t, n, s), s) {
    let i = s.parent;
    for (; i && i.parent; )
      fr(i.parent.vnode) && Zo(n, t, s, i), i = i.parent;
  }
}
function Zo(e, t, s, n) {
  const i = Vs(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  gr(() => {
    Sn(n[t], i);
  }, s);
}
function Vs(e, t, s = _e, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []), r = t.__weh || (t.__weh = (...o) => {
      Je();
      const l = fs(s), c = Oe(t, s, e, o);
      return l(), Ge(), c;
    });
    return n ? i.unshift(r) : i.push(r), r;
  }
}
const it = (e) => (t, s = _e) => {
  (!cs || e === "sp") && Vs(e, (...n) => t(...n), s);
}, Qo = it("bm"), hr = it("m"), el = it(
  "bu"
), tl = it("u"), pr = it(
  "bum"
), gr = it("um"), sl = it(
  "sp"
), nl = it("rtg"), il = it("rtc");
function rl(e, t = _e) {
  Vs("ec", e, t);
}
const ol = /* @__PURE__ */ Symbol.for("v-ndc");
function $t(e, t, s, n) {
  let i;
  const r = s, o = V(e);
  if (o || le(e)) {
    const l = o && /* @__PURE__ */ st(e);
    let c = !1, d = !1;
    l && (c = !/* @__PURE__ */ Ee(e), d = /* @__PURE__ */ nt(e), e = Ns(e)), i = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      i[u] = t(
        c ? d ? Dt(ke(e[u])) : ke(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, r);
  } else if (te(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, c) => t(l, c, void 0, r)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let c = 0, d = l.length; c < d; c++) {
        const u = l[c];
        i[c] = t(e[u], u, c, r);
      }
    }
  else
    i = [];
  return i;
}
const pn = (e) => e ? Ur(e) ? Bs(e) : pn(e.parent) : null, Qt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ge(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => pn(e.parent),
    $root: (e) => pn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => vr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      kn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = lt.bind(e.proxy)),
    $watch: (e) => Jo.bind(e)
  })
), tn = (e, t) => e !== ne && !e.__isScriptSetup && X(e, t), ll = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: i, props: r, accessCache: o, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const w = o[t];
      if (w !== void 0)
        switch (w) {
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
        if (tn(n, t))
          return o[t] = 1, n[t];
        if (i !== ne && X(i, t))
          return o[t] = 2, i[t];
        if (X(r, t))
          return o[t] = 3, r[t];
        if (s !== ne && X(s, t))
          return o[t] = 4, s[t];
        gn && (o[t] = 0);
      }
    }
    const d = Qt[t];
    let u, h;
    if (d)
      return t === "$attrs" && ve(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (s !== ne && X(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      h = c.config.globalProperties, X(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: i, ctx: r } = e;
    return tn(i, t) ? (i[t] = s, !0) : n !== ne && X(n, t) ? (n[t] = s, !0) : X(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: i, props: r, type: o }
  }, l) {
    let c;
    return !!(s[l] || e !== ne && l[0] !== "$" && X(e, l) || tn(t, l) || X(r, l) || X(n, l) || X(Qt, l) || X(i.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : X(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function Yn(e) {
  return V(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let gn = !0;
function cl(e) {
  const t = vr(e), s = e.proxy, n = e.ctx;
  gn = !1, t.beforeCreate && Xn(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: o,
    watch: l,
    provide: c,
    inject: d,
    // lifecycle
    created: u,
    beforeMount: h,
    mounted: w,
    beforeUpdate: v,
    updated: S,
    activated: m,
    deactivated: R,
    beforeDestroy: U,
    beforeUnmount: F,
    destroyed: W,
    unmounted: A,
    render: B,
    renderTracked: fe,
    renderTriggered: L,
    errorCaptured: E,
    serverPrefetch: O,
    // public API
    expose: z,
    inheritAttrs: oe,
    // assets
    components: Te,
    directives: De,
    filters: ft
  } = t;
  if (d && al(d, n, null), o)
    for (const J in o) {
      const ie = o[J];
      K(ie) && (n[J] = ie.bind(s));
    }
  if (i) {
    const J = i.call(s, s);
    te(J) && (e.data = /* @__PURE__ */ Us(J));
  }
  if (gn = !0, r)
    for (const J in r) {
      const ie = r[J], dt = K(ie) ? ie.bind(s, s) : K(ie.get) ? ie.get.bind(s, s) : ze, hs = !K(ie) && K(ie.set) ? ie.set.bind(s) : ze, ht = tt({
        get: dt,
        set: hs
      });
      Object.defineProperty(n, J, {
        enumerable: !0,
        configurable: !0,
        get: () => ht.value,
        set: (Ne) => ht.value = Ne
      });
    }
  if (l)
    for (const J in l)
      mr(l[J], n, s, J);
  if (c) {
    const J = K(c) ? c.call(s) : c;
    Reflect.ownKeys(J).forEach((ie) => {
      Ko(ie, J[ie]);
    });
  }
  u && Xn(u, e, "c");
  function ae(J, ie) {
    V(ie) ? ie.forEach((dt) => J(dt.bind(s))) : ie && J(ie.bind(s));
  }
  if (ae(Qo, h), ae(hr, w), ae(el, v), ae(tl, S), ae(Yo, m), ae(Xo, R), ae(rl, E), ae(il, fe), ae(nl, L), ae(pr, F), ae(gr, A), ae(sl, O), V(z))
    if (z.length) {
      const J = e.exposed || (e.exposed = {});
      z.forEach((ie) => {
        Object.defineProperty(J, ie, {
          get: () => s[ie],
          set: (dt) => s[ie] = dt,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  B && e.render === ze && (e.render = B), oe != null && (e.inheritAttrs = oe), Te && (e.components = Te), De && (e.directives = De), O && ur(e);
}
function al(e, t, s = ze) {
  V(e) && (e = mn(e));
  for (const n in e) {
    const i = e[n];
    let r;
    te(i) ? "default" in i ? r = Yt(
      i.from || n,
      i.default,
      !0
    ) : r = Yt(i.from || n) : r = Yt(i), /* @__PURE__ */ ce(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[n] = r;
  }
}
function Xn(e, t, s) {
  Oe(
    V(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function mr(e, t, s, n) {
  let i = n.includes(".") ? ar(s, n) : () => s[n];
  if (le(e)) {
    const r = t[e];
    K(r) && Lt(i, r);
  } else if (K(e))
    Lt(i, e.bind(s));
  else if (te(e))
    if (V(e))
      e.forEach((r) => mr(r, t, s, n));
    else {
      const r = K(e.handler) ? e.handler.bind(s) : t[e.handler];
      K(r) && Lt(i, r, e);
    }
}
function vr(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = r.get(t);
  let c;
  return l ? c = l : !i.length && !s && !n ? c = t : (c = {}, i.length && i.forEach(
    (d) => Ms(c, d, o, !0)
  ), Ms(c, t, o)), te(t) && r.set(t, c), c;
}
function Ms(e, t, s, n = !1) {
  const { mixins: i, extends: r } = t;
  r && Ms(e, r, s, !0), i && i.forEach(
    (o) => Ms(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const l = ul[o] || s && s[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const ul = {
  data: Zn,
  props: Qn,
  emits: Qn,
  // objects
  methods: Bt,
  computed: Bt,
  // lifecycle
  beforeCreate: ye,
  created: ye,
  beforeMount: ye,
  mounted: ye,
  beforeUpdate: ye,
  updated: ye,
  beforeDestroy: ye,
  beforeUnmount: ye,
  destroyed: ye,
  unmounted: ye,
  activated: ye,
  deactivated: ye,
  errorCaptured: ye,
  serverPrefetch: ye,
  // assets
  components: Bt,
  directives: Bt,
  // watch
  watch: dl,
  // provide / inject
  provide: Zn,
  inject: fl
};
function Zn(e, t) {
  return t ? e ? function() {
    return ge(
      K(e) ? e.call(this, this) : e,
      K(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function fl(e, t) {
  return Bt(mn(e), mn(t));
}
function mn(e) {
  if (V(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function ye(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Bt(e, t) {
  return e ? ge(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Qn(e, t) {
  return e ? V(e) && V(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ge(
    /* @__PURE__ */ Object.create(null),
    Yn(e),
    Yn(t ?? {})
  ) : t;
}
function dl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = ge(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = ye(e[n], t[n]);
  return s;
}
function yr() {
  return {
    app: null,
    config: {
      isNativeTag: Pi,
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
let hl = 0;
function pl(e, t) {
  return function(n, i = null) {
    K(n) || (n = ge({}, n)), i != null && !te(i) && (i = null);
    const r = yr(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const d = r.app = {
      _uid: hl++,
      _component: n,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: Wl,
      get config() {
        return r.config;
      },
      set config(u) {
      },
      use(u, ...h) {
        return o.has(u) || (u && K(u.install) ? (o.add(u), u.install(d, ...h)) : K(u) && (o.add(u), u(d, ...h))), d;
      },
      mixin(u) {
        return r.mixins.includes(u) || r.mixins.push(u), d;
      },
      component(u, h) {
        return h ? (r.components[u] = h, d) : r.components[u];
      },
      directive(u, h) {
        return h ? (r.directives[u] = h, d) : r.directives[u];
      },
      mount(u, h, w) {
        if (!c) {
          const v = d._ceVNode || ue(n, i);
          return v.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(v, u, w), c = !0, d._container = u, u.__vue_app__ = d, Bs(v.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        c && (Oe(
          l,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(u, h) {
        return r.provides[u] = h, d;
      },
      runWithContext(u) {
        const h = yt;
        yt = d;
        try {
          return u();
        } finally {
          yt = h;
        }
      }
    };
    return d;
  };
}
let yt = null;
const gl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Le(t)}Modifiers`] || e[`${ut(t)}Modifiers`];
function ml(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || ne;
  let i = s;
  const r = t.startsWith("update:"), o = r && gl(n, t.slice(7));
  o && (o.trim && (i = s.map((u) => le(u) ? u.trim() : u)), o.number && (i = s.map(Cn)));
  let l, c = n[l = qs(t)] || // also try camelCase event handler (#2249)
  n[l = qs(Le(t))];
  !c && r && (c = n[l = qs(ut(t))]), c && Oe(
    c,
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
    e.emitted[l] = !0, Oe(
      d,
      e,
      6,
      i
    );
  }
}
const vl = /* @__PURE__ */ new WeakMap();
function br(e, t, s = !1) {
  const n = s ? vl : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {}, l = !1;
  if (!K(e)) {
    const c = (d) => {
      const u = br(d, t, !0);
      u && (l = !0, ge(o, u));
    };
    !s && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !l ? (te(e) && n.set(e, null), null) : (V(r) ? r.forEach((c) => o[c] = null) : ge(o, r), te(e) && n.set(e, o), o);
}
function Hs(e, t) {
  return !e || !Ls(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), X(e, t[0].toLowerCase() + t.slice(1)) || X(e, ut(t)) || X(e, t));
}
function ei(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: i,
    propsOptions: [r],
    slots: o,
    attrs: l,
    emit: c,
    render: d,
    renderCache: u,
    props: h,
    data: w,
    setupState: v,
    ctx: S,
    inheritAttrs: m
  } = e, R = Es(e);
  let U, F;
  try {
    if (s.shapeFlag & 4) {
      const A = i || n, B = A;
      U = Be(
        d.call(
          B,
          A,
          u,
          h,
          v,
          w,
          S
        )
      ), F = l;
    } else {
      const A = t;
      U = Be(
        A.length > 1 ? A(
          h,
          { attrs: l, slots: o, emit: c }
        ) : A(
          h,
          null
        )
      ), F = t.props ? l : yl(l);
    }
  } catch (A) {
    es.length = 0, js(A, e, 1), U = ue(at);
  }
  let W = U;
  if (F && m !== !1) {
    const A = Object.keys(F), { shapeFlag: B } = W;
    A.length && B & 7 && (r && A.some($s) && (F = bl(
      F,
      r
    )), W = Nt(W, F, !1, !0));
  }
  return s.dirs && (W = Nt(W, null, !1, !0), W.dirs = W.dirs ? W.dirs.concat(s.dirs) : s.dirs), s.transition && On(W, s.transition), U = W, Es(R), U;
}
const yl = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Ls(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, bl = (e, t) => {
  const s = {};
  for (const n in e)
    (!$s(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function _l(e, t, s) {
  const { props: n, children: i, component: r } = e, { props: o, children: l, patchFlag: c } = t, d = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return n ? ti(n, o, d) : !!o;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const w = u[h];
        if (_r(o, n, w) && !Hs(d, w))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? ti(n, o, d) : !0 : !!o;
  return !1;
}
function ti(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const r = n[i];
    if (_r(t, e, r) && !Hs(s, r))
      return !0;
  }
  return !1;
}
function _r(e, t, s) {
  const n = e[s], i = t[s];
  return s === "style" && te(n) && te(i) ? !En(n, i) : n !== i;
}
function xl({ vnode: e, parent: t, suspense: s }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  s && s.activeBranch === e && (s.vnode.el = n);
}
const xr = {}, wr = () => Object.create(xr), Sr = (e) => Object.getPrototypeOf(e) === xr;
function wl(e, t, s, n = !1) {
  const i = {}, r = wr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Cr(e, t, i, r);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  s ? e.props = n ? i : /* @__PURE__ */ Mo(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function Sl(e, t, s, n) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ q(i), [c] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const u = e.vnode.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        let w = u[h];
        if (Hs(e.emitsOptions, w))
          continue;
        const v = t[w];
        if (c)
          if (X(r, w))
            v !== r[w] && (r[w] = v, d = !0);
          else {
            const S = Le(w);
            i[S] = vn(
              c,
              l,
              S,
              v,
              e,
              !1
            );
          }
        else
          v !== r[w] && (r[w] = v, d = !0);
      }
    }
  } else {
    Cr(e, t, i, r) && (d = !0);
    let u;
    for (const h in l)
      (!t || // for camelCase
      !X(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = ut(h)) === h || !X(t, u))) && (c ? s && // for camelCase
      (s[h] !== void 0 || // for kebab-case
      s[u] !== void 0) && (i[h] = vn(
        c,
        l,
        h,
        void 0,
        e,
        !0
      )) : delete i[h]);
    if (r !== l)
      for (const h in r)
        (!t || !X(t, h)) && (delete r[h], d = !0);
  }
  d && Qe(e.attrs, "set", "");
}
function Cr(e, t, s, n) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (Jt(c))
        continue;
      const d = t[c];
      let u;
      i && X(i, u = Le(c)) ? !r || !r.includes(u) ? s[u] = d : (l || (l = {}))[u] = d : Hs(e.emitsOptions, c) || (!(c in n) || d !== n[c]) && (n[c] = d, o = !0);
    }
  if (r) {
    const c = /* @__PURE__ */ q(s), d = l || ne;
    for (let u = 0; u < r.length; u++) {
      const h = r[u];
      s[h] = vn(
        i,
        c,
        h,
        d[h],
        e,
        !X(d, h)
      );
    }
  }
  return o;
}
function vn(e, t, s, n, i, r) {
  const o = e[s];
  if (o != null) {
    const l = X(o, "default");
    if (l && n === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && K(c)) {
        const { propsDefaults: d } = i;
        if (s in d)
          n = d[s];
        else {
          const u = fs(i);
          n = d[s] = c.call(
            null,
            t
          ), u();
        }
      } else
        n = c;
      i.ce && i.ce._setProp(s, n);
    }
    o[
      0
      /* shouldCast */
    ] && (r && !l ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === ut(s)) && (n = !0));
  }
  return n;
}
const Cl = /* @__PURE__ */ new WeakMap();
function Ir(e, t, s = !1) {
  const n = s ? Cl : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, l = [];
  let c = !1;
  if (!K(e)) {
    const u = (h) => {
      c = !0;
      const [w, v] = Ir(h, t, !0);
      ge(o, w), v && l.push(...v);
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !c)
    return te(e) && n.set(e, Pt), Pt;
  if (V(r))
    for (let u = 0; u < r.length; u++) {
      const h = Le(r[u]);
      si(h) && (o[h] = ne);
    }
  else if (r)
    for (const u in r) {
      const h = Le(u);
      if (si(h)) {
        const w = r[u], v = o[h] = V(w) || K(w) ? { type: w } : ge({}, w), S = v.type;
        let m = !1, R = !0;
        if (V(S))
          for (let U = 0; U < S.length; ++U) {
            const F = S[U], W = K(F) && F.name;
            if (W === "Boolean") {
              m = !0;
              break;
            } else W === "String" && (R = !1);
          }
        else
          m = K(S) && S.name === "Boolean";
        v[
          0
          /* shouldCast */
        ] = m, v[
          1
          /* shouldCastTrue */
        ] = R, (m || X(v, "default")) && l.push(h);
      }
    }
  const d = [o, l];
  return te(e) && n.set(e, d), d;
}
function si(e) {
  return e[0] !== "$" && !Jt(e);
}
const Dn = (e) => e === "_" || e === "_ctx" || e === "$stable", Nn = (e) => V(e) ? e.map(Be) : [Be(e)], Il = (e, t, s) => {
  if (t._n)
    return t;
  const n = Ho((...i) => Nn(t(...i)), s);
  return n._c = !1, n;
}, Er = (e, t, s) => {
  const n = e._ctx;
  for (const i in e) {
    if (Dn(i)) continue;
    const r = e[i];
    if (K(r))
      t[i] = Il(i, r, n);
    else if (r != null) {
      const o = Nn(r);
      t[i] = () => o;
    }
  }
}, Tr = (e, t) => {
  const s = Nn(t);
  e.slots.default = () => s;
}, Mr = (e, t, s) => {
  for (const n in t)
    (s || !Dn(n)) && (e[n] = t[n]);
}, El = (e, t, s) => {
  const n = e.slots = wr();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Mr(n, t, s), s && Oi(n, "_", i, !0)) : Er(t, n);
  } else t && Tr(e, t);
}, Tl = (e, t, s) => {
  const { vnode: n, slots: i } = e;
  let r = !0, o = ne;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? r = !1 : Mr(i, t, s) : (r = !t.$stable, Er(t, i)), o = t;
  } else t && (Tr(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !Dn(l) && o[l] == null && delete i[l];
}, xe = Ll;
function Ml(e) {
  return Pl(e);
}
function Pl(e, t) {
  const s = Ds();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: r,
    createElement: o,
    createText: l,
    createComment: c,
    setText: d,
    setElementText: u,
    parentNode: h,
    nextSibling: w,
    setScopeId: v = ze,
    insertStaticContent: S
  } = e, m = (a, f, p, x = null, _ = null, y = null, T = void 0, I = null, C = !!f.dynamicChildren) => {
    if (a === f)
      return;
    a && !Ht(a, f) && (x = ps(a), Ne(a, _, y, !0), a = null), f.patchFlag === -2 && (C = !1, f.dynamicChildren = null);
    const { type: b, ref: j, shapeFlag: M } = f;
    switch (b) {
      case Ks:
        R(a, f, p, x);
        break;
      case at:
        U(a, f, p, x);
        break;
      case xs:
        a == null && F(f, p, x, T);
        break;
      case Z:
        Te(
          a,
          f,
          p,
          x,
          _,
          y,
          T,
          I,
          C
        );
        break;
      default:
        M & 1 ? B(
          a,
          f,
          p,
          x,
          _,
          y,
          T,
          I,
          C
        ) : M & 6 ? De(
          a,
          f,
          p,
          x,
          _,
          y,
          T,
          I,
          C
        ) : (M & 64 || M & 128) && b.process(
          a,
          f,
          p,
          x,
          _,
          y,
          T,
          I,
          C,
          Ft
        );
    }
    j != null && _ ? Xt(j, a && a.ref, y, f || a, !f) : j == null && a && a.ref != null && Xt(a.ref, null, y, a, !0);
  }, R = (a, f, p, x) => {
    if (a == null)
      n(
        f.el = l(f.children),
        p,
        x
      );
    else {
      const _ = f.el = a.el;
      f.children !== a.children && d(_, f.children);
    }
  }, U = (a, f, p, x) => {
    a == null ? n(
      f.el = c(f.children || ""),
      p,
      x
    ) : f.el = a.el;
  }, F = (a, f, p, x) => {
    [a.el, a.anchor] = S(
      a.children,
      f,
      p,
      x,
      a.el,
      a.anchor
    );
  }, W = ({ el: a, anchor: f }, p, x) => {
    let _;
    for (; a && a !== f; )
      _ = w(a), n(a, p, x), a = _;
    n(f, p, x);
  }, A = ({ el: a, anchor: f }) => {
    let p;
    for (; a && a !== f; )
      p = w(a), i(a), a = p;
    i(f);
  }, B = (a, f, p, x, _, y, T, I, C) => {
    if (f.type === "svg" ? T = "svg" : f.type === "math" && (T = "mathml"), a == null)
      fe(
        f,
        p,
        x,
        _,
        y,
        T,
        I,
        C
      );
    else {
      const b = a.el && a.el._isVueCE ? a.el : null;
      try {
        b && b._beginPatch(), O(
          a,
          f,
          _,
          y,
          T,
          I,
          C
        );
      } finally {
        b && b._endPatch();
      }
    }
  }, fe = (a, f, p, x, _, y, T, I) => {
    let C, b;
    const { props: j, shapeFlag: M, transition: D, dirs: H } = a;
    if (C = a.el = o(
      a.type,
      y,
      j && j.is,
      j
    ), M & 8 ? u(C, a.children) : M & 16 && E(
      a.children,
      C,
      null,
      x,
      _,
      sn(a, y),
      T,
      I
    ), H && pt(a, null, x, "created"), L(C, a, a.scopeId, T, x), j) {
      for (const se in j)
        se !== "value" && !Jt(se) && r(C, se, null, j[se], y, x);
      "value" in j && r(C, "value", null, j.value, y), (b = j.onVnodeBeforeMount) && Ve(b, x, a);
    }
    H && pt(a, null, x, "beforeMount");
    const G = Rl(_, D);
    G && D.beforeEnter(C), n(C, f, p), ((b = j && j.onVnodeMounted) || G || H) && xe(() => {
      try {
        b && Ve(b, x, a), G && D.enter(C), H && pt(a, null, x, "mounted");
      } finally {
      }
    }, _);
  }, L = (a, f, p, x, _) => {
    if (p && v(a, p), x)
      for (let y = 0; y < x.length; y++)
        v(a, x[y]);
    if (_) {
      let y = _.subTree;
      if (f === y || Lr(y.type) && (y.ssContent === f || y.ssFallback === f)) {
        const T = _.vnode;
        L(
          a,
          T,
          T.scopeId,
          T.slotScopeIds,
          _.parent
        );
      }
    }
  }, E = (a, f, p, x, _, y, T, I, C = 0) => {
    for (let b = C; b < a.length; b++) {
      const j = a[b] = I ? Ze(a[b]) : Be(a[b]);
      m(
        null,
        j,
        f,
        p,
        x,
        _,
        y,
        T,
        I
      );
    }
  }, O = (a, f, p, x, _, y, T) => {
    const I = f.el = a.el;
    let { patchFlag: C, dynamicChildren: b, dirs: j } = f;
    C |= a.patchFlag & 16;
    const M = a.props || ne, D = f.props || ne;
    let H;
    if (p && gt(p, !1), (H = D.onVnodeBeforeUpdate) && Ve(H, p, f, a), j && pt(f, a, p, "beforeUpdate"), p && gt(p, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    b && (!a.dynamicChildren || a.dynamicChildren.length !== b.length) && (C = 0, T = !1, b = null), (M.innerHTML && D.innerHTML == null || M.textContent && D.textContent == null) && u(I, ""), b ? z(
      a.dynamicChildren,
      b,
      I,
      p,
      x,
      sn(f, _),
      y
    ) : T || ie(
      a,
      f,
      I,
      null,
      p,
      x,
      sn(f, _),
      y,
      !1
    ), C > 0) {
      if (C & 16)
        oe(I, M, D, p, _);
      else if (C & 2 && M.class !== D.class && r(I, "class", null, D.class, _), C & 4 && r(I, "style", M.style, D.style, _), C & 8) {
        const G = f.dynamicProps;
        for (let se = 0; se < G.length; se++) {
          const ee = G[se], de = M[ee], pe = D[ee];
          (pe !== de || ee === "value") && r(I, ee, de, pe, _, p);
        }
      }
      C & 1 && a.children !== f.children && u(I, f.children);
    } else !T && b == null && oe(I, M, D, p, _);
    ((H = D.onVnodeUpdated) || j) && xe(() => {
      H && Ve(H, p, f, a), j && pt(f, a, p, "updated");
    }, x);
  }, z = (a, f, p, x, _, y, T) => {
    for (let I = 0; I < f.length; I++) {
      const C = a[I], b = f[I], j = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        C.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (C.type === Z || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ht(C, b) || // - In the case of a component, it could contain anything.
        C.shapeFlag & 198) ? h(C.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      m(
        C,
        b,
        j,
        null,
        x,
        _,
        y,
        T,
        !0
      );
    }
  }, oe = (a, f, p, x, _) => {
    if (f !== p) {
      if (f !== ne)
        for (const y in f)
          !Jt(y) && !(y in p) && r(
            a,
            y,
            f[y],
            null,
            _,
            x
          );
      for (const y in p) {
        if (Jt(y)) continue;
        const T = p[y], I = f[y];
        T !== I && y !== "value" && r(a, y, I, T, _, x);
      }
      "value" in p && r(a, "value", f.value, p.value, _);
    }
  }, Te = (a, f, p, x, _, y, T, I, C) => {
    const b = f.el = a ? a.el : l(""), j = f.anchor = a ? a.anchor : l("");
    let { patchFlag: M, dynamicChildren: D, slotScopeIds: H } = f;
    H && (I = I ? I.concat(H) : H), a == null ? (n(b, p, x), n(j, p, x), E(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      p,
      j,
      _,
      y,
      T,
      I,
      C
    )) : M > 0 && M & 64 && D && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren && a.dynamicChildren.length === D.length ? (z(
      a.dynamicChildren,
      D,
      p,
      _,
      y,
      T,
      I
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || _ && f === _.subTree) && Pr(
      a,
      f,
      !0
      /* shallow */
    )) : ie(
      a,
      f,
      p,
      j,
      _,
      y,
      T,
      I,
      C
    );
  }, De = (a, f, p, x, _, y, T, I, C) => {
    f.slotScopeIds = I, a == null ? f.shapeFlag & 512 ? _.ctx.activate(
      f,
      p,
      x,
      T,
      C
    ) : ft(
      f,
      p,
      x,
      _,
      y,
      T,
      C
    ) : wt(a, f, C);
  }, ft = (a, f, p, x, _, y, T) => {
    const I = a.component = Fl(
      a,
      x,
      _
    );
    if (fr(a) && (I.ctx.renderer = Ft), jl(I, !1, T), I.asyncDep) {
      if (_ && _.registerDep(I, ae, T), !a.el) {
        const C = I.subTree = ue(at);
        U(null, C, f, p), a.placeholder = C.el;
      }
    } else
      ae(
        I,
        a,
        f,
        p,
        _,
        y,
        T
      );
  }, wt = (a, f, p) => {
    const x = f.component = a.component;
    if (_l(a, f, p))
      if (x.asyncDep && !x.asyncResolved) {
        J(x, f, p);
        return;
      } else
        x.next = f, x.update();
    else
      f.el = a.el, x.vnode = f;
  }, ae = (a, f, p, x, _, y, T) => {
    const I = () => {
      if (a.isMounted) {
        let { next: M, bu: D, u: H, parent: G, vnode: se } = a;
        {
          const Fe = Rr(a);
          if (Fe) {
            M && (M.el = se.el, J(a, M, T)), Fe.asyncDep.then(() => {
              xe(() => {
                a.isUnmounted || b();
              }, _);
            });
            return;
          }
        }
        let ee = M, de;
        gt(a, !1), M ? (M.el = se.el, J(a, M, T)) : M = se, D && _s(D), (de = M.props && M.props.onVnodeBeforeUpdate) && Ve(de, G, M, se), gt(a, !0);
        const pe = ei(a), Ue = a.subTree;
        a.subTree = pe, m(
          Ue,
          pe,
          // parent may have changed if it's in a teleport
          h(Ue.el),
          // anchor may have changed if it's in a fragment
          ps(Ue),
          a,
          _,
          y
        ), M.el = pe.el, ee === null && xl(a, pe.el), H && xe(H, _), (de = M.props && M.props.onVnodeUpdated) && xe(
          () => Ve(de, G, M, se),
          _
        );
      } else {
        let M;
        const { el: D, props: H } = f, { bm: G, m: se, parent: ee, root: de, type: pe } = a, Ue = Zt(f);
        gt(a, !1), G && _s(G), !Ue && (M = H && H.onVnodeBeforeMount) && Ve(M, ee, f), gt(a, !0);
        {
          de.ce && de.ce._hasShadowRoot() && de.ce._injectChildStyle(
            pe,
            a.parent ? a.parent.type : void 0
          );
          const Fe = a.subTree = ei(a);
          m(
            null,
            Fe,
            p,
            x,
            a,
            _,
            y
          ), f.el = Fe.el;
        }
        if (se && xe(se, _), !Ue && (M = H && H.onVnodeMounted)) {
          const Fe = f;
          xe(
            () => Ve(M, ee, Fe),
            _
          );
        }
        (f.shapeFlag & 256 || ee && Zt(ee.vnode) && ee.vnode.shapeFlag & 256) && a.a && xe(a.a, _), a.isMounted = !0, f = p = x = null;
      }
    };
    a.scope.on();
    const C = a.effect = new Hi(I);
    a.scope.off();
    const b = a.update = C.run.bind(C), j = a.job = C.runIfDirty.bind(C);
    j.i = a, j.id = a.uid, C.scheduler = () => kn(j), gt(a, !0), b();
  }, J = (a, f, p) => {
    f.component = a;
    const x = a.vnode.props;
    a.vnode = f, a.next = null, Sl(a, f.props, x, p), Tl(a, f.children, p), Je(), Jn(a), Ge();
  }, ie = (a, f, p, x, _, y, T, I, C = !1) => {
    const b = a && a.children, j = a ? a.shapeFlag : 0, M = f.children, { patchFlag: D, shapeFlag: H } = f;
    if (D > 0) {
      if (D & 128) {
        hs(
          b,
          M,
          p,
          x,
          _,
          y,
          T,
          I,
          C
        );
        return;
      } else if (D & 256) {
        dt(
          b,
          M,
          p,
          x,
          _,
          y,
          T,
          I,
          C
        );
        return;
      }
    }
    H & 8 ? (j & 16 && Ut(b, _, y), M !== b && u(p, M)) : j & 16 ? H & 16 ? hs(
      b,
      M,
      p,
      x,
      _,
      y,
      T,
      I,
      C
    ) : Ut(b, _, y, !0) : (j & 8 && u(p, ""), H & 16 && E(
      M,
      p,
      x,
      _,
      y,
      T,
      I,
      C
    ));
  }, dt = (a, f, p, x, _, y, T, I, C) => {
    a = a || Pt, f = f || Pt;
    const b = a.length, j = f.length, M = Math.min(b, j);
    let D;
    for (D = 0; D < M; D++) {
      const H = f[D] = C ? Ze(f[D]) : Be(f[D]);
      m(
        a[D],
        H,
        p,
        null,
        _,
        y,
        T,
        I,
        C
      );
    }
    b > j ? Ut(
      a,
      _,
      y,
      !0,
      !1,
      M
    ) : E(
      f,
      p,
      x,
      _,
      y,
      T,
      I,
      C,
      M
    );
  }, hs = (a, f, p, x, _, y, T, I, C) => {
    let b = 0;
    const j = f.length;
    let M = a.length - 1, D = j - 1;
    for (; b <= M && b <= D; ) {
      const H = a[b], G = f[b] = C ? Ze(f[b]) : Be(f[b]);
      if (Ht(H, G))
        m(
          H,
          G,
          p,
          null,
          _,
          y,
          T,
          I,
          C
        );
      else
        break;
      b++;
    }
    for (; b <= M && b <= D; ) {
      const H = a[M], G = f[D] = C ? Ze(f[D]) : Be(f[D]);
      if (Ht(H, G))
        m(
          H,
          G,
          p,
          null,
          _,
          y,
          T,
          I,
          C
        );
      else
        break;
      M--, D--;
    }
    if (b > M) {
      if (b <= D) {
        const H = D + 1, G = H < j ? f[H].el : x;
        for (; b <= D; )
          m(
            null,
            f[b] = C ? Ze(f[b]) : Be(f[b]),
            p,
            G,
            _,
            y,
            T,
            I,
            C
          ), b++;
      }
    } else if (b > D)
      for (; b <= M; )
        Ne(a[b], _, y, !0), b++;
    else {
      const H = b, G = b, se = /* @__PURE__ */ new Map();
      for (b = G; b <= D; b++) {
        const Ce = f[b] = C ? Ze(f[b]) : Be(f[b]);
        Ce.key != null && se.set(Ce.key, b);
      }
      let ee, de = 0;
      const pe = D - G + 1;
      let Ue = !1, Fe = 0;
      const jt = new Array(pe);
      for (b = 0; b < pe; b++) jt[b] = 0;
      for (b = H; b <= M; b++) {
        const Ce = a[b];
        if (de >= pe) {
          Ne(Ce, _, y, !0);
          continue;
        }
        let je;
        if (Ce.key != null)
          je = se.get(Ce.key);
        else
          for (ee = G; ee <= D; ee++)
            if (jt[ee - G] === 0 && Ht(Ce, f[ee])) {
              je = ee;
              break;
            }
        je === void 0 ? Ne(Ce, _, y, !0) : (jt[je - G] = b + 1, je >= Fe ? Fe = je : Ue = !0, m(
          Ce,
          f[je],
          p,
          null,
          _,
          y,
          T,
          I,
          C
        ), de++);
      }
      const jn = Ue ? Al(jt) : Pt;
      for (ee = jn.length - 1, b = pe - 1; b >= 0; b--) {
        const Ce = G + b, je = f[Ce], Vn = f[Ce + 1], Hn = Ce + 1 < j ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Vn.el || Ar(Vn)
        ) : x;
        jt[b] === 0 ? m(
          null,
          je,
          p,
          Hn,
          _,
          y,
          T,
          I,
          C
        ) : Ue && (ee < 0 || b !== jn[ee] ? ht(je, p, Hn, 2) : ee--);
      }
    }
  }, ht = (a, f, p, x, _ = null) => {
    const { el: y, type: T, transition: I, children: C, shapeFlag: b } = a;
    if (b & 6) {
      ht(a.component.subTree, f, p, x);
      return;
    }
    if (b & 128) {
      a.suspense.move(f, p, x);
      return;
    }
    if (b & 64) {
      T.move(a, f, p, Ft);
      return;
    }
    if (T === Z) {
      n(y, f, p);
      for (let M = 0; M < C.length; M++)
        ht(C[M], f, p, x);
      n(a.anchor, f, p);
      return;
    }
    if (T === xs) {
      W(a, f, p);
      return;
    }
    if (x !== 2 && b & 1 && I)
      if (x === 0)
        I.persisted && !y[en] ? n(y, f, p) : (I.beforeEnter(y), n(y, f, p), xe(() => I.enter(y), _));
      else {
        const { leave: M, delayLeave: D, afterLeave: H } = I, G = () => {
          a.ctx.isUnmounted ? i(y) : n(y, f, p);
        }, se = () => {
          const ee = y._isLeaving || !!y[en];
          y._isLeaving && y[en](
            !0
            /* cancelled */
          ), I.persisted && !ee ? G() : M(y, () => {
            G(), H && H();
          });
        };
        D ? D(y, G, se) : se();
      }
    else
      n(y, f, p);
  }, Ne = (a, f, p, x = !1, _ = !1) => {
    const {
      type: y,
      props: T,
      ref: I,
      children: C,
      dynamicChildren: b,
      shapeFlag: j,
      patchFlag: M,
      dirs: D,
      cacheIndex: H,
      memo: G
    } = a;
    if (M === -2 && (_ = !1), I != null && (Je(), Xt(I, null, p, a, !0), Ge()), H != null && (f.renderCache[H] = void 0), j & 256) {
      f.ctx.deactivate(a);
      return;
    }
    const se = j & 1 && D, ee = !Zt(a);
    let de;
    if (ee && (de = T && T.onVnodeBeforeUnmount) && Ve(de, f, a), j & 6)
      Yr(a.component, p, x);
    else {
      if (j & 128) {
        a.suspense.unmount(p, x);
        return;
      }
      se && pt(a, null, f, "beforeUnmount"), j & 64 ? a.type.remove(
        a,
        f,
        p,
        Ft,
        x
      ) : b && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !b.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (y !== Z || M > 0 && M & 64) ? Ut(
        b,
        f,
        p,
        !1,
        !0
      ) : (y === Z && M & 384 || !_ && j & 16) && Ut(C, f, p), x && Un(a);
    }
    const pe = G != null && H == null;
    (ee && (de = T && T.onVnodeUnmounted) || se || pe) && xe(() => {
      de && Ve(de, f, a), se && pt(a, null, f, "unmounted"), pe && (a.el = null);
    }, p);
  }, Un = (a) => {
    const { type: f, el: p, anchor: x, transition: _ } = a;
    if (f === Z) {
      qr(p, x);
      return;
    }
    if (f === xs) {
      A(a);
      return;
    }
    const y = () => {
      i(p), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (a.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: T, delayLeave: I } = _, C = () => T(p, y);
      I ? I(a.el, y, C) : C();
    } else
      y();
  }, qr = (a, f) => {
    let p;
    for (; a !== f; )
      p = w(a), i(a), a = p;
    i(f);
  }, Yr = (a, f, p) => {
    const { bum: x, scope: _, job: y, subTree: T, um: I, m: C, a: b } = a;
    ni(C), ni(b), x && _s(x), _.stop(), y && (y.flags |= 8, Ne(T, a, f, p)), I && xe(I, f), xe(() => {
      a.isUnmounted = !0;
    }, f);
  }, Ut = (a, f, p, x = !1, _ = !1, y = 0) => {
    for (let T = y; T < a.length; T++)
      Ne(a[T], f, p, x, _);
  }, ps = (a) => {
    if (a.shapeFlag & 6)
      return ps(a.component.subTree);
    if (a.shapeFlag & 128)
      return a.suspense.next();
    const f = w(a.anchor || a.el), p = f && f[Go];
    return p ? w(p) : f;
  };
  let Gs = !1;
  const Fn = (a, f, p) => {
    let x;
    a == null ? f._vnode && (Ne(f._vnode, null, null, !0), x = f._vnode.component) : m(
      f._vnode || null,
      a,
      f,
      null,
      null,
      null,
      p
    ), f._vnode = a, Gs || (Gs = !0, Jn(x), rr(), Gs = !1);
  }, Ft = {
    p: m,
    um: Ne,
    m: ht,
    r: Un,
    mt: ft,
    mc: E,
    pc: ie,
    pbc: z,
    n: ps,
    o: e
  };
  return {
    render: Fn,
    hydrate: void 0,
    createApp: pl(Fn)
  };
}
function sn({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function gt({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Rl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Pr(e, t, s = !1) {
  const n = e.children, i = t.children;
  if (V(n) && V(i))
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = Ze(i[r]), l.el = o.el), !s && l.patchFlag !== -2 && Pr(o, l)), l.type === Ks && (l.patchFlag === -1 && (l = i[r] = Ze(l)), l.el = o.el), l.type === at && !l.el && (l.el = o.el);
    }
}
function Al(e) {
  const t = e.slice(), s = [0];
  let n, i, r, o, l;
  const c = e.length;
  for (n = 0; n < c; n++) {
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
function Rr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Rr(t);
}
function ni(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Ar(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Ar(t.subTree) : null;
}
const Lr = (e) => e.__isSuspense;
function Ll(e, t) {
  t && t.pendingBranch ? V(e) ? t.effects.push(...e) : t.effects.push(e) : Vo(e);
}
const Z = /* @__PURE__ */ Symbol.for("v-fgt"), Ks = /* @__PURE__ */ Symbol.for("v-txt"), at = /* @__PURE__ */ Symbol.for("v-cmt"), xs = /* @__PURE__ */ Symbol.for("v-stc"), es = [];
let Ie = null;
function k(e = !1) {
  es.push(Ie = e ? null : []);
}
function $l() {
  es.pop(), Ie = es[es.length - 1] || null;
}
let ls = 1;
function ii(e, t = !1) {
  ls += e, e < 0 && Ie && t && (Ie.hasOnce = !0);
}
function $r(e) {
  return e.dynamicChildren = ls > 0 ? Ie || Pt : null, $l(), ls > 0 && Ie && Ie.push(e), e;
}
function N(e, t, s, n, i, r) {
  return $r(
    g(
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
function ct(e, t, s, n, i) {
  return $r(
    ue(
      e,
      t,
      s,
      n,
      i,
      !0
    )
  );
}
function kr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ht(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Or = ({ key: e }) => e ?? null, ws = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? le(e) || /* @__PURE__ */ ce(e) || K(e) ? { i: Pe, r: e, k: t, f: !!s } : e : null);
function g(e, t = null, s = null, n = 0, i = null, r = e === Z ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Or(t),
    ref: t && ws(t),
    scopeId: lr,
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
    ctx: Pe
  };
  return l ? (Ps(c, s), r & 128 && e.normalize(c)) : s && (c.shapeFlag |= le(s) ? 8 : 16), ls > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ie && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Ie.push(c), c;
}
const ue = kl;
function kl(e, t = null, s = null, n = 0, i = null, r = !1) {
  if ((!e || e === ol) && (e = at), kr(e)) {
    const l = Nt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Ps(l, s), ls > 0 && !r && Ie && (l.shapeFlag & 6 ? Ie[Ie.indexOf(e)] = l : Ie.push(l)), l.patchFlag = -2, l;
  }
  if (Bl(e) && (e = e.__vccOpts), t) {
    t = Ol(t);
    let { class: l, style: c } = t;
    l && !le(l) && (t.class = Re(l)), te(c) && (/* @__PURE__ */ Fs(c) && !V(c) && (c = ge({}, c)), t.style = In(c));
  }
  const o = le(e) ? 1 : Lr(e) ? 128 : qo(e) ? 64 : te(e) ? 4 : K(e) ? 2 : 0;
  return g(
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
function Ol(e) {
  return e ? /* @__PURE__ */ Fs(e) || Sr(e) ? ge({}, e) : e : null;
}
function Nt(e, t, s = !1, n = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: c } = e, d = t ? Dl(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Or(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && r ? V(r) ? r.concat(ws(t)) : [r, ws(t)] : ws(t)
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
    patchFlag: t && e.type !== Z ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
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
  return c && n && On(
    u,
    c.clone(u)
  ), u;
}
function Dr(e = " ", t = 0) {
  return ue(Ks, null, e, t);
}
function nn(e, t) {
  const s = ue(xs, null, e);
  return s.staticCount = t, s;
}
function Se(e = "", t = !1) {
  return t ? (k(), ct(at, null, e)) : ue(at, null, e);
}
function Be(e) {
  return e == null || typeof e == "boolean" ? ue(at) : V(e) ? ue(
    Z,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : kr(e) ? Ze(e) : ue(Ks, null, String(e));
}
function Ze(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Nt(e);
}
function Ps(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (V(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Ps(e, i()), i._c && (i._d = !0));
      return;
    } else {
      s = 32;
      const i = t._;
      !i && !Sr(t) ? t._ctx = Pe : i === 3 && Pe && (Pe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (K(t)) {
    if (n & 65) {
      Ps(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Pe }, s = 32;
  } else
    t = String(t), n & 64 ? (s = 16, t = [Dr(t)]) : s = 8;
  e.children = t, e.shapeFlag |= s;
}
function Dl(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = Re([t.class, n.class]));
      else if (i === "style")
        t.style = In([t.style, n.style]);
      else if (Ls(i)) {
        const r = t[i], o = n[i];
        o && r !== o && !(V(r) && r.includes(o)) ? t[i] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !$s(i) && (t[i] = o);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function Ve(e, t, s, n = null) {
  Oe(e, t, 7, [
    s,
    n
  ]);
}
const Nl = yr();
let Ul = 0;
function Fl(e, t, s) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || Nl, r = {
    uid: Ul++,
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
    scope: new Fi(
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
    propsOptions: Ir(n, i),
    emitsOptions: br(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ne,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: ne,
    data: ne,
    props: ne,
    attrs: ne,
    slots: ne,
    refs: ne,
    setupState: ne,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = ml.bind(null, r), e.ce && e.ce(r), r;
}
let _e = null;
const Nr = () => _e || Pe;
let Rs, yn;
{
  const e = Ds(), t = (s, n) => {
    let i;
    return (i = e[s]) || (i = e[s] = []), i.push(n), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  Rs = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => _e = s
  ), yn = t(
    "__VUE_SSR_SETTERS__",
    (s) => cs = s
  );
}
const fs = (e) => {
  const t = _e;
  return Rs(e), e.scope.on(), () => {
    e.scope.off(), Rs(t);
  };
}, ri = () => {
  _e && _e.scope.off(), Rs(null);
};
function Ur(e) {
  return e.vnode.shapeFlag & 4;
}
let cs = !1;
function jl(e, t = !1, s = !1) {
  t && yn(t);
  const { props: n, children: i } = e.vnode, r = Ur(e);
  wl(e, n, r, t), El(e, i, s || t);
  const o = r ? Vl(e, t) : void 0;
  return t && yn(!1), o;
}
function Vl(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ll);
  const { setup: n } = s;
  if (n) {
    Je();
    const i = e.setupContext = n.length > 1 ? Kl(e) : null, r = fs(e), o = us(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = Ai(o);
    if (Ge(), r(), (l || e.sp) && !Zt(e) && ur(e), l) {
      if (o.then(ri, ri), t)
        return o.then((c) => {
          oi(e, c);
        }).catch((c) => {
          js(c, e, 0);
        });
      e.asyncDep = o;
    } else
      oi(e, o);
  } else
    Fr(e);
}
function oi(e, t, s) {
  K(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : te(t) && (e.setupState = sr(t)), Fr(e);
}
function Fr(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || ze);
  {
    const i = fs(e);
    Je();
    try {
      cl(e);
    } finally {
      Ge(), i();
    }
  }
}
const Hl = {
  get(e, t) {
    return ve(e, "get", ""), e[t];
  }
};
function Kl(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, Hl),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Bs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(sr($n(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in Qt)
        return Qt[s](e);
    },
    has(t, s) {
      return s in t || s in Qt;
    }
  })) : e.proxy;
}
function Bl(e) {
  return K(e) && "__vccOpts" in e;
}
const tt = (e, t) => /* @__PURE__ */ Do(e, t, cs), Wl = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let bn;
const li = typeof window < "u" && window.trustedTypes;
if (li)
  try {
    bn = /* @__PURE__ */ li.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const jr = bn ? (e) => bn.createHTML(e) : (e) => e, zl = "http://www.w3.org/2000/svg", Jl = "http://www.w3.org/1998/Math/MathML", Ye = typeof document < "u" ? document : null, ci = Ye && /* @__PURE__ */ Ye.createElement("template"), Gl = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const i = t === "svg" ? Ye.createElementNS(zl, e) : t === "mathml" ? Ye.createElementNS(Jl, e) : s ? Ye.createElement(e, { is: s }) : Ye.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => Ye.createTextNode(e),
  createComment: (e) => Ye.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ye.querySelector(e),
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
      ci.innerHTML = jr(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const l = ci.content;
      if (n === "svg" || n === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
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
}, ql = /* @__PURE__ */ Symbol("_vtc");
function Yl(e, t, s) {
  const n = e[ql];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const ai = /* @__PURE__ */ Symbol("_vod"), Xl = /* @__PURE__ */ Symbol("_vsh"), Zl = /* @__PURE__ */ Symbol(""), Ql = /(?:^|;)\s*display\s*:/;
function ec(e, t, s) {
  const n = e.style, i = le(s);
  let r = !1;
  if (s && !i) {
    if (t)
      if (le(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          s[l] == null && Wt(n, l, "");
        }
      else
        for (const o in t)
          s[o] == null && Wt(n, o, "");
    for (const o in s) {
      o === "display" && (r = !0);
      const l = s[o];
      l != null ? sc(
        e,
        o,
        !le(t) && t ? t[o] : void 0,
        l
      ) || Wt(n, o, l) : Wt(n, o, "");
    }
  } else if (i) {
    if (t !== s) {
      const o = n[Zl];
      o && (s += ";" + o), n.cssText = s, r = Ql.test(s);
    }
  } else t && e.removeAttribute("style");
  ai in e && (e[ai] = r ? n.display : "", e[Xl] && (n.display = "none"));
}
const ui = /\s*!important$/;
function Wt(e, t, s) {
  if (V(s))
    s.forEach((n) => Wt(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = tc(e, t);
    ui.test(s) ? e.setProperty(
      ut(n),
      s.replace(ui, ""),
      "important"
    ) : e[n] = s;
  }
}
const fi = ["Webkit", "Moz", "ms"], rn = {};
function tc(e, t) {
  const s = rn[t];
  if (s)
    return s;
  let n = Le(t);
  if (n !== "filter" && n in e)
    return rn[t] = n;
  n = ki(n);
  for (let i = 0; i < fi.length; i++) {
    const r = fi[i] + n;
    if (r in e)
      return rn[t] = r;
  }
  return t;
}
function sc(e, t, s, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && le(n) && s === n;
}
const di = "http://www.w3.org/1999/xlink";
function hi(e, t, s, n, i, r = oo(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(di, t.slice(6, t.length)) : e.setAttributeNS(di, t, s) : s == null || r && !Di(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Ae(s) ? String(s) : s
  );
}
function pi(e, t, s, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? jr(s) : s);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, c = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(s);
    (l !== c || !("_value" in e)) && (e.value = c), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let o = !1;
  if (s === "" || s == null) {
    const l = typeof e[t];
    l === "boolean" ? s = Di(s) : s == null && l === "string" ? (s = "", o = !0) : l === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function Tt(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function nc(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const gi = /* @__PURE__ */ Symbol("_vei");
function ic(e, t, s, n, i = null) {
  const r = e[gi] || (e[gi] = {}), o = r[t];
  if (n && o)
    o.value = n;
  else {
    const [l, c] = lc(t);
    if (n) {
      const d = r[t] = uc(
        n,
        i
      );
      Tt(e, l, d, c);
    } else o && (nc(e, l, o, c), r[t] = void 0);
  }
}
const rc = /(Once|Passive|Capture)$/, oc = /^on:?(?:Once|Passive|Capture)$/;
function lc(e) {
  let t, s;
  for (; (s = e.match(rc)) && !oc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - s[1].length), t[s[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : ut(e.slice(2)), t];
}
let on = 0;
const cc = /* @__PURE__ */ Promise.resolve(), ac = () => on || (cc.then(() => on = 0), on = Date.now());
function uc(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    const i = s.value;
    if (V(i)) {
      const r = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        r.call(n), n._stopped = !0;
      };
      const o = i.slice(), l = [n];
      for (let c = 0; c < o.length && !n._stopped; c++) {
        const d = o[c];
        d && Oe(
          d,
          t,
          5,
          l
        );
      }
    } else
      Oe(
        i,
        t,
        5,
        [n]
      );
  };
  return s.value = e, s.attached = ac(), s;
}
const mi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, fc = (e, t, s, n, i, r) => {
  const o = i === "svg";
  t === "class" ? Yl(e, n, o) : t === "style" ? ec(e, s, n) : Ls(t) ? $s(t) || ic(e, t, s, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : dc(e, t, n, o)) ? (pi(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && hi(e, t, n, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (hc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !le(n))) ? pi(e, Le(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), hi(e, t, n, o));
};
function dc(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && mi(t) && K(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return mi(t) && le(s) ? !1 : t in e;
}
function hc(e, t) {
  const s = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!s)
    return !1;
  const n = Le(t);
  return Array.isArray(s) ? s.some((i) => Le(i) === n) : Object.keys(s).some((i) => Le(i) === n);
}
const vi = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return V(t) ? (s) => _s(t, s) : t;
};
function pc(e) {
  e.target.composing = !0;
}
function yi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ln = /* @__PURE__ */ Symbol("_assign");
function bi(e, t, s) {
  return t && (e = e.trim()), s && (e = Cn(e)), e;
}
const zt = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, i) {
    e[ln] = vi(i);
    const r = n || i.props && i.props.type === "number";
    Tt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[ln](bi(e.value, s, r));
    }), (s || r) && Tt(e, "change", () => {
      e.value = bi(e.value, s, r);
    }), t || (Tt(e, "compositionstart", pc), Tt(e, "compositionend", yi), Tt(e, "change", yi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: s, modifiers: { lazy: n, trim: i, number: r } }, o) {
    if (e[ln] = vi(o), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? Cn(e.value) : e.value, c = t ?? "";
    if (l === c)
      return;
    const d = e.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === e && e.type !== "range" && (n && t === s || i && e.value.trim() === c) || (e.value = c);
  }
}, gc = ["ctrl", "shift", "alt", "meta"], mc = {
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
  exact: (e, t) => gc.some((s) => e[`${s}Key`] && !t.includes(s))
}, Ws = (e, t) => {
  if (!e) return e;
  const s = e._withMods || (e._withMods = {}), n = t.join(".");
  return s[n] || (s[n] = (i, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const l = mc[t[o]];
      if (l && l(i, t)) return;
    }
    return e(i, ...r);
  });
}, vc = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Vr = (e, t) => {
  const s = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return s[n] || (s[n] = (i) => {
    if (!("key" in i))
      return;
    const r = ut(i.key);
    if (t.some(
      (o) => o === r || vc[o] === r
    ))
      return e(i);
  });
}, yc = /* @__PURE__ */ ge({ patchProp: fc }, Gl);
let _i;
function bc() {
  return _i || (_i = Ml(yc));
}
const Hr = (...e) => {
  const t = bc().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const i = xc(n);
    if (!i) return;
    const r = t._component;
    !K(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
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
function xc(e) {
  return le(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Kr;
const zs = (e) => Kr = e, Br = (
  /* istanbul ignore next */
  Symbol()
);
function _n(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var ts;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(ts || (ts = {}));
function wc() {
  const e = ji(!0), t = e.run(() => /* @__PURE__ */ Me({}));
  let s = [], n = [];
  const i = $n({
    install(r) {
      zs(i), i._a = r, r.provide(Br, i), r.config.globalProperties.$pinia = i, n.forEach((o) => s.push(o)), n = [];
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
const Wr = () => {
};
function xi(e, t, s, n = Wr) {
  e.push(t);
  const i = () => {
    const r = e.indexOf(t);
    r > -1 && (e.splice(r, 1), n());
  };
  return !s && Vi() && co(i), i;
}
function Ct(e, ...t) {
  e.slice().forEach((s) => {
    s(...t);
  });
}
const Sc = (e) => e(), wi = Symbol(), cn = Symbol();
function xn(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((s, n) => e.set(n, s)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const s in t) {
    if (!t.hasOwnProperty(s))
      continue;
    const n = t[s], i = e[s];
    _n(i) && _n(n) && e.hasOwnProperty(s) && !/* @__PURE__ */ ce(n) && !/* @__PURE__ */ st(n) ? e[s] = xn(i, n) : e[s] = n;
  }
  return e;
}
const Cc = (
  /* istanbul ignore next */
  Symbol()
);
function Ic(e) {
  return !_n(e) || !e.hasOwnProperty(Cc);
}
const { assign: rt } = Object;
function Ec(e) {
  return !!(/* @__PURE__ */ ce(e) && e.effect);
}
function Tc(e, t, s, n) {
  const { state: i, actions: r, getters: o } = t, l = s.state.value[e];
  let c;
  function d() {
    l || (s.state.value[e] = i ? i() : {});
    const u = /* @__PURE__ */ Lo(s.state.value[e]);
    return rt(u, r, Object.keys(o || {}).reduce((h, w) => (h[w] = $n(tt(() => {
      zs(s);
      const v = s._s.get(e);
      return o[w].call(v, v);
    })), h), {}));
  }
  return c = zr(e, d, t, s, n, !0), c;
}
function zr(e, t, s = {}, n, i, r) {
  let o;
  const l = rt({ actions: {} }, s), c = { deep: !0 };
  let d, u, h = [], w = [], v;
  const S = n.state.value[e];
  !r && !S && (n.state.value[e] = {});
  let m;
  function R(E) {
    let O;
    d = u = !1, typeof E == "function" ? (E(n.state.value[e]), O = {
      type: ts.patchFunction,
      storeId: e,
      events: v
    }) : (xn(n.state.value[e], E), O = {
      type: ts.patchObject,
      payload: E,
      storeId: e,
      events: v
    });
    const z = m = Symbol();
    lt().then(() => {
      m === z && (d = !0);
    }), u = !0, Ct(h, O, n.state.value[e]);
  }
  const U = r ? function() {
    const { state: O } = s, z = O ? O() : {};
    this.$patch((oe) => {
      rt(oe, z);
    });
  } : (
    /* istanbul ignore next */
    Wr
  );
  function F() {
    o.stop(), h = [], w = [], n._s.delete(e);
  }
  const W = (E, O = "") => {
    if (wi in E)
      return E[cn] = O, E;
    const z = function() {
      zs(n);
      const oe = Array.from(arguments), Te = [], De = [];
      function ft(J) {
        Te.push(J);
      }
      function wt(J) {
        De.push(J);
      }
      Ct(w, {
        args: oe,
        name: z[cn],
        store: B,
        after: ft,
        onError: wt
      });
      let ae;
      try {
        ae = E.apply(this && this.$id === e ? this : B, oe);
      } catch (J) {
        throw Ct(De, J), J;
      }
      return ae instanceof Promise ? ae.then((J) => (Ct(Te, J), J)).catch((J) => (Ct(De, J), Promise.reject(J))) : (Ct(Te, ae), ae);
    };
    return z[wi] = !0, z[cn] = O, z;
  }, A = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: xi.bind(null, w),
    $patch: R,
    $reset: U,
    $subscribe(E, O = {}) {
      const z = xi(h, E, O.detached, () => oe()), oe = o.run(() => Lt(() => n.state.value[e], (Te) => {
        (O.flush === "sync" ? u : d) && E({
          storeId: e,
          type: ts.direct,
          events: v
        }, Te);
      }, rt({}, c, O)));
      return z;
    },
    $dispose: F
  }, B = /* @__PURE__ */ Us(A);
  n._s.set(e, B);
  const L = (n._a && n._a.runWithContext || Sc)(() => n._e.run(() => (o = ji()).run(() => t({ action: W }))));
  for (const E in L) {
    const O = L[E];
    if (/* @__PURE__ */ ce(O) && !Ec(O) || /* @__PURE__ */ st(O))
      r || (S && Ic(O) && (/* @__PURE__ */ ce(O) ? O.value = S[E] : xn(O, S[E])), n.state.value[e][E] = O);
    else if (typeof O == "function") {
      const z = W(O, E);
      L[E] = z, l.actions[E] = O;
    }
  }
  return rt(B, L), rt(/* @__PURE__ */ q(B), L), Object.defineProperty(B, "$state", {
    get: () => n.state.value[e],
    set: (E) => {
      R((O) => {
        rt(O, E);
      });
    }
  }), n._p.forEach((E) => {
    rt(B, o.run(() => E({
      store: B,
      app: n._a,
      pinia: n,
      options: l
    })));
  }), S && r && s.hydrate && s.hydrate(B.$state, S), d = !0, u = !0, B;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Js(e, t, s) {
  let n, i;
  const r = typeof t == "function";
  typeof e == "string" ? (n = e, i = r ? s : t) : (i = e, n = e.id);
  function o(l, c) {
    const d = Bo();
    return l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    l || (d ? Yt(Br, null) : null), l && zs(l), l = Kr, l._s.has(n) || (r ? zr(n, t, i, l) : Tc(n, i, l)), l._s.get(n);
  }
  return o.$id = n, o;
}
function Mc() {
  return [
    { id: "netease", enabled: !0, priority: 0, config: { baseURL: "" } },
    { id: "local", enabled: !0, priority: 1, config: {} },
    { id: "custom", enabled: !1, priority: 2, config: { searchURL: "", resolveURL: "" } }
  ];
}
function an() {
  return {
    volume: 65,
    playMode: "list",
    position: null,
    widgetMode: "dock",
    autoPlayOnNewCue: !0,
    providers: Mc(),
    customCueRules: []
  };
}
const me = /* @__PURE__ */ Js("settings", {
  state: () => ({
    settings: an(),
    storage: null
  }),
  getters: {
    defaults: () => an()
  },
  actions: {
    init(e) {
      this.storage = e;
      const t = e.getSettings(), s = an();
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
class Pc {
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
const Si = /\[(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?\]/g;
function Rc(e) {
  const t = e.split(/\r?\n/), s = [];
  for (const n of t) {
    const i = new RegExp(Si.source, "g"), r = [];
    let o;
    for (; (o = i.exec(n)) !== null; ) {
      const c = parseInt(o[1], 10), d = parseInt(o[2], 10), u = o[3] ?? "", h = u ? parseInt(u.padEnd(3, "0"), 10) : 0;
      r.push(c * 60 + d + h / 1e3);
    }
    if (r.length === 0) continue;
    const l = n.replace(new RegExp(Si.source, "g"), "").trim();
    if (l !== "")
      for (const c of r)
        s.push({ time: c, text: l });
  }
  s.sort((n, i) => n.time - i.time);
  for (let n = 0; n < s.length; n++)
    n < s.length - 1 && (s[n].next = s[n + 1]);
  return s;
}
function Ci(e, t) {
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
      return this.ctx().extensionSettings[Mt] ?? null;
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
      s.extensionSettings[Mt] = t, s.saveSettingsDebounced();
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
    return `${Mt}__settings`;
  }
  cachePrefix() {
    return `${Mt}:cache:`;
  }
  cacheKey(t) {
    return `${this.cachePrefix()}${t}`;
  }
}
function Lc() {
  return new Ac();
}
const Mt = "st-music-player", Ii = "stmp_cursor", Ei = "stmp_userlist";
class $c {
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
class kc {
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
        i.removeEventListener("loadedmetadata", l), i.removeEventListener("error", c), clearTimeout(d), i.src = "";
      }, l = () => {
        r || (r = !0, o(), n(!0));
      }, c = () => {
        r || (r = !0, o(), n(!1));
      }, d = setTimeout(() => {
        r || (r = !0, o(), n(!1));
      }, s);
      i.preload = "metadata", i.addEventListener("loadedmetadata", l), i.addEventListener("error", c), i.src = t;
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
class Oc {
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
class Dc {
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
function Jr(e) {
  const s = e.filter((n) => n.enabled).sort((n, i) => n.priority - i.priority).map((n) => {
    const i = n.config ?? {};
    switch (n.id) {
      case "netease":
        return new kc({ baseURL: i.baseURL, apiBase: i.apiBase });
      case "local":
        return new Oc({
          storage: i.storage ? i.storage : void 0
        });
      case "custom":
        return new Dc({
          searchURL: i.searchURL,
          resolveURL: i.resolveURL
        });
      default:
        return null;
    }
  }).filter((n) => n !== null);
  return new $c(s);
}
const Nc = {
  "No Song": "未播放",
  "show lyrics": "显示歌词",
  List: "列表",
  Search: "搜索",
  "Search Song...": "搜索歌曲...",
  "Searching...": "搜索中...",
  "No results": "无结果",
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
  Added: "已添加",
  "Add to list": "加入列表",
  "Cannot play": "无法播放",
  "Widget Mode": "播放器模式",
  "Dock to input bar": "吸附到输入框",
  "Free drag": "自由拖动",
  Dock: "吸附",
  Drag: "拖动"
};
let It = null;
function Uc() {
  if (It) return It;
  try {
    if (typeof SillyTavern < "u") {
      const e = SillyTavern.getContext();
      e?.getCurrentLocale && (It = e.getCurrentLocale());
    }
  } catch {
  }
  return It || (It = (typeof navigator < "u" ? navigator.language || navigator.userLanguage : "en")?.toLowerCase() || "en"), It;
}
function Y(e) {
  return Uc().startsWith("zh") ? Nc[e] ?? e : e;
}
function ys() {
  return `stmp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
const ds = /* @__PURE__ */ Js("playlist", {
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
      return me().settings.playMode;
    }
  },
  actions: {
    init(e) {
      this.chatIndexer = e;
    },
    setChatId(e) {
      this.chatId = e, this.list = this.list.filter((n) => n.source !== "chat"), this.loadFromStorage();
      const s = me().storage;
      if (s) {
        const n = s.getMetadata(Ii);
        n && n.chatId === e && this.chatIndexer?.setCursor(e, n.lastScannedMessageId);
      }
    },
    loadFromStorage() {
      const t = me().storage;
      if (!t || !this.chatId) return;
      const s = t.getMetadata(Ei);
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
        id: ys(),
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
        id: ys(),
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
        id: ys(),
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
      const s = me(), n = s.storage;
      if (!n) return;
      let i = null;
      const r = Jr(s.settings.providers);
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
        console.warn(`[playlist] resolve failed for "${t.song}"`), typeof toastr < "u" && toastr.warning(`${Y("Cannot play")}: ${t.song}`);
        return;
      }
      await _t().loadAndPlay(i);
    },
    handleNewCues(e) {
      if (e.length === 0) return;
      const t = me();
      let s = null;
      for (const n of e)
        for (const i of n.cues) {
          const r = {
            id: ys(),
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
      const t = me(), s = this.chatIndexer.scanMessage(
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
      const t = me().storage;
      if (!t || !this.chatId) return;
      const s = this.list.filter((n) => n.source === "user");
      t.setMetadata(Ei, s);
    },
    getCursor() {
      return !this.chatIndexer || !this.chatId ? -1 : this.chatIndexer.getCursor(this.chatId);
    },
    setCursor(e) {
      if (!this.chatIndexer || !this.chatId) return;
      this.chatIndexer.setCursor(this.chatId, e);
      const s = me().storage;
      s && s.setMetadata(Ii, {
        chatId: this.chatId,
        lastScannedMessageId: e,
        updatedAt: Date.now()
      });
    }
  }
}), _t = /* @__PURE__ */ Js("player", {
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
      const e = new Pc();
      this.audioEngine = e;
      const t = _t();
      e.on("timeupdate", () => {
        if (!e) return;
        t.currentTime = e.currentTime, t.duration = e.duration;
        const s = Ci(t.lyrics, e.currentTime), n = s ? t.lyrics.indexOf(s) : -1;
        t.currentLyricIndex = n;
      }), e.on("ended", () => {
        ds().next();
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
      this.volume = e, this.audioEngine?.setVolume(e / 100), me().setVolume(e);
    },
    updateLyrics(e) {
      this.lyrics = Rc(e), this.currentLyricIndex = -1;
    },
    getActiveLyric() {
      return Ci(this.lyrics, this.currentTime);
    },
    destroy() {
      this.audioEngine?.destroy(), this.audioEngine = null, this.isPlaying = !1, this.currentTime = 0, this.duration = 0, this.lyrics = [], this.currentLyricIndex = -1, this.currentTrack = null;
    }
  }
}), Fc = /* @__PURE__ */ Js("search", {
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
}), jc = ["width", "height"], Vc = {
  key: 0,
  points: "6 3 20 12 6 21 6 3",
  fill: "currentColor",
  stroke: "none"
}, Hc = {
  key: 10,
  points: "6 9 12 15 18 9"
}, Kc = {
  key: 11,
  points: "18 15 12 9 6 15"
}, Bc = {
  key: 15,
  points: "20 6 9 17 4 12"
}, Wc = /* @__PURE__ */ bt({
  __name: "Icon",
  props: {
    name: {},
    size: {}
  },
  setup(e) {
    return (t, s) => (k(), N("svg", {
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
      e.name === "play" ? (k(), N("polygon", Vc)) : e.name === "pause" ? (k(), N(Z, { key: 1 }, [
        s[0] || (s[0] = g("rect", {
          x: "6",
          y: "4",
          width: "4",
          height: "16",
          rx: "1",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[1] || (s[1] = g("rect", {
          x: "14",
          y: "4",
          width: "4",
          height: "16",
          rx: "1",
          fill: "currentColor",
          stroke: "none"
        }, null, -1))
      ], 64)) : e.name === "prev" ? (k(), N(Z, { key: 2 }, [
        s[2] || (s[2] = g("polygon", {
          points: "19 20 9 12 19 4 19 20",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[3] || (s[3] = g("line", {
          x1: "5",
          y1: "19",
          x2: "5",
          y2: "5"
        }, null, -1))
      ], 64)) : e.name === "next" ? (k(), N(Z, { key: 3 }, [
        s[4] || (s[4] = g("polygon", {
          points: "5 4 15 12 5 20 5 4",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[5] || (s[5] = g("line", {
          x1: "19",
          y1: "5",
          x2: "19",
          y2: "19"
        }, null, -1))
      ], 64)) : e.name === "repeat" ? (k(), N(Z, { key: 4 }, [
        s[6] || (s[6] = g("polyline", { points: "17 1 21 5 17 9" }, null, -1)),
        s[7] || (s[7] = g("path", { d: "M3 11V9a4 4 0 0 1 4-4h14" }, null, -1)),
        s[8] || (s[8] = g("polyline", { points: "7 23 3 19 7 15" }, null, -1)),
        s[9] || (s[9] = g("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" }, null, -1))
      ], 64)) : e.name === "repeat-one" ? (k(), N(Z, { key: 5 }, [
        s[10] || (s[10] = nn('<polyline points="17 1 21 5 17 9" data-v-287bc27a></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14" data-v-287bc27a></path><polyline points="7 23 3 19 7 15" data-v-287bc27a></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3" data-v-287bc27a></path><text x="12" y="14" text-anchor="middle" font-size="8" fill="currentColor" stroke="none" font-weight="bold" data-v-287bc27a>1</text>', 5))
      ], 64)) : e.name === "shuffle" ? (k(), N(Z, { key: 6 }, [
        s[11] || (s[11] = nn('<polyline points="16 3 21 3 21 8" data-v-287bc27a></polyline><line x1="4" y1="20" x2="21" y2="3" data-v-287bc27a></line><polyline points="21 16 21 21 16 21" data-v-287bc27a></polyline><line x1="15" y1="15" x2="21" y2="21" data-v-287bc27a></line><line x1="4" y1="4" x2="9" y2="9" data-v-287bc27a></line>', 5))
      ], 64)) : e.name === "search" ? (k(), N(Z, { key: 7 }, [
        s[12] || (s[12] = g("circle", {
          cx: "11",
          cy: "11",
          r: "8"
        }, null, -1)),
        s[13] || (s[13] = g("line", {
          x1: "21",
          y1: "21",
          x2: "16.65",
          y2: "16.65"
        }, null, -1))
      ], 64)) : e.name === "plus" ? (k(), N(Z, { key: 8 }, [
        s[14] || (s[14] = g("line", {
          x1: "12",
          y1: "5",
          x2: "12",
          y2: "19"
        }, null, -1)),
        s[15] || (s[15] = g("line", {
          x1: "5",
          y1: "12",
          x2: "19",
          y2: "12"
        }, null, -1))
      ], 64)) : e.name === "x" ? (k(), N(Z, { key: 9 }, [
        s[16] || (s[16] = g("line", {
          x1: "18",
          y1: "6",
          x2: "6",
          y2: "18"
        }, null, -1)),
        s[17] || (s[17] = g("line", {
          x1: "6",
          y1: "6",
          x2: "18",
          y2: "18"
        }, null, -1))
      ], 64)) : e.name === "chevron-down" ? (k(), N("polyline", Hc)) : e.name === "chevron-up" ? (k(), N("polyline", Kc)) : e.name === "music" ? (k(), N(Z, { key: 12 }, [
        s[18] || (s[18] = g("path", { d: "M9 18V5l12-2v13" }, null, -1)),
        s[19] || (s[19] = g("circle", {
          cx: "6",
          cy: "18",
          r: "3"
        }, null, -1)),
        s[20] || (s[20] = g("circle", {
          cx: "18",
          cy: "16",
          r: "3"
        }, null, -1))
      ], 64)) : e.name === "volume" ? (k(), N(Z, { key: 13 }, [
        s[21] || (s[21] = g("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[22] || (s[22] = g("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1)),
        s[23] || (s[23] = g("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }, null, -1))
      ], 64)) : e.name === "volume-mute" ? (k(), N(Z, { key: 14 }, [
        s[24] || (s[24] = g("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[25] || (s[25] = g("line", {
          x1: "23",
          y1: "9",
          x2: "17",
          y2: "15"
        }, null, -1)),
        s[26] || (s[26] = g("line", {
          x1: "17",
          y1: "9",
          x2: "23",
          y2: "15"
        }, null, -1))
      ], 64)) : e.name === "check" ? (k(), N("polyline", Bc)) : e.name === "loader" ? (k(), N(Z, { key: 16 }, [
        s[27] || (s[27] = nn('<line x1="12" y1="2" x2="12" y2="6" data-v-287bc27a></line><line x1="12" y1="18" x2="12" y2="22" data-v-287bc27a></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" data-v-287bc27a></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" data-v-287bc27a></line><line x1="2" y1="12" x2="6" y2="12" data-v-287bc27a></line><line x1="18" y1="12" x2="22" y2="12" data-v-287bc27a></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" data-v-287bc27a></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" data-v-287bc27a></line>', 8))
      ], 64)) : Se("", !0)
    ], 8, jc));
  }
}), xt = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, i] of t)
    s[n] = i;
  return s;
}, we = /* @__PURE__ */ xt(Wc, [["__scopeId", "data-v-287bc27a"]]), zc = { class: "stmp-collapsed-bar" }, Jc = { class: "stmp-collapsed-title" }, Gc = ["aria-label"], qc = /* @__PURE__ */ bt({
  __name: "CollapsedBar",
  setup(e) {
    const t = _t(), s = tt(() => t.currentTrack?.name || Y("No Song"));
    return (n, i) => (k(), N("div", zc, [
      g("span", Jc, Q(s.value), 1),
      g("button", {
        class: "stmp-icon-btn",
        "aria-label": P(t).isPlaying ? P(Y)("Pause") : P(Y)("Play"),
        onClick: i[0] || (i[0] = Ws((r) => P(t).togglePlay(), ["stop"]))
      }, [
        ue(we, {
          name: P(t).isPlaying ? "pause" : "play",
          size: 16
        }, null, 8, ["name"])
      ], 8, Gc)
    ]));
  }
}), Yc = /* @__PURE__ */ xt(qc, [["__scopeId", "data-v-d181b89b"]]), Xc = { class: "stmp-playlist" }, Zc = { class: "stmp-upload-area" }, Qc = ["aria-label"], ea = {
  key: 0,
  class: "stmp-empty"
}, ta = { class: "stmp-group-label" }, sa = ["onClick"], na = { class: "stmp-item-index" }, ia = { class: "stmp-item-info" }, ra = { class: "stmp-item-song" }, oa = {
  key: 0,
  class: "stmp-item-artist"
}, la = ["onClick"], ca = /* @__PURE__ */ bt({
  __name: "PlaylistView",
  setup(e) {
    const t = ds(), s = me(), n = /* @__PURE__ */ Me(null), i = () => {
      n.value?.click();
    }, r = async (u) => {
      const h = u.target;
      if (!h.files || !h.files[0]) return;
      const w = h.files[0], v = `stmp:audio:${Date.now()}-${w.name}`, S = s.storage;
      S && (await S.setBlob(v, w), t.addLocalFile(w.name, v)), h.value = "";
    }, o = tt(() => {
      const u = {
        chat: [],
        user: [],
        local: []
      };
      return t.list.forEach((h, w) => {
        u[h.source] && u[h.source].push({ index: w, item: h });
      }), u;
    }), l = {
      chat: Y("From Chat"),
      user: Y("My List"),
      local: Y("Local Files")
    };
    function c(u) {
      t.play(u);
    }
    function d(u) {
      t.removeItem(u);
    }
    return (u, h) => (k(), N("div", Xc, [
      g("div", Zc, [
        g("input", {
          type: "file",
          accept: "audio/*",
          ref_key: "fileInputRef",
          ref: n,
          onChange: r,
          style: { display: "none" }
        }, null, 544),
        g("button", {
          class: "stmp-upload-btn",
          "aria-label": P(Y)("Add local file"),
          onClick: i
        }, " + " + Q(P(Y)("Add local file")), 9, Qc)
      ]),
      P(t).isEmpty ? (k(), N("div", ea, Q(P(Y)("No Songs")), 1)) : (k(), N(Z, { key: 1 }, $t(["chat", "user", "local"], (w) => g("div", {
        key: w,
        class: "stmp-group"
      }, [
        o.value[w].length ? (k(), N(Z, { key: 0 }, [
          g("div", ta, Q(l[w]), 1),
          (k(!0), N(Z, null, $t(o.value[w], (v) => (k(), N("div", {
            key: v.item.id,
            class: Re(["stmp-item", { active: v.index === P(t).currentIndex }]),
            onClick: (S) => c(v.index)
          }, [
            g("span", na, Q(v.index + 1), 1),
            g("div", ia, [
              g("span", ra, Q(v.item.song), 1),
              v.item.artist ? (k(), N("span", oa, Q(v.item.artist), 1)) : Se("", !0)
            ]),
            g("button", {
              class: "stmp-item-del",
              onClick: Ws((S) => d(v.index), ["stop"])
            }, [
              ue(we, {
                name: "x",
                size: 14
              })
            ], 8, la)
          ], 10, sa))), 128))
        ], 64)) : Se("", !0)
      ])), 64))
    ]));
  }
}), aa = /* @__PURE__ */ xt(ca, [["__scopeId", "data-v-48d97d17"]]), ua = { class: "stmp-search" }, fa = { class: "stmp-search-bar" }, da = ["placeholder"], ha = ["disabled"], pa = {
  key: 0,
  class: "stmp-search-error"
}, ga = ["aria-label"], ma = {
  key: 1,
  class: "stmp-search-loading"
}, va = {
  key: 2,
  class: "stmp-search-empty"
}, ya = {
  key: 3,
  class: "stmp-results"
}, ba = ["onClick"], _a = { class: "stmp-result-name" }, xa = {
  key: 0,
  class: "stmp-result-artist"
}, wa = ["aria-label", "onClick"], Sa = /* @__PURE__ */ bt({
  __name: "SearchView",
  setup(e) {
    const t = Fc(), s = ds(), n = me(), i = /* @__PURE__ */ Me(t.keyword), r = /* @__PURE__ */ Me(/* @__PURE__ */ new Set()), o = /* @__PURE__ */ Me(null);
    async function l() {
      t.setKeyword(i.value);
      const v = Jr(n.settings.providers);
      await t.search(v);
    }
    const c = () => {
      l();
    };
    function d(v) {
      const S = v.provider + v.id;
      if (o.value === S) return;
      o.value = S;
      const m = s.list.length;
      s.addFromSearch(v);
      const R = s.list.length - 1;
      R >= m && s.play(R), setTimeout(() => {
        r.value.add(S), o.value = null;
      }, 600);
    }
    function u(v) {
      const S = v.provider + v.id;
      r.value.has(S) || (s.addFromSearch(v), r.value.add(S));
    }
    function h(v) {
      return r.value.has(v.provider + v.id);
    }
    function w(v) {
      return o.value === v.provider + v.id;
    }
    return (v, S) => (k(), N("div", ua, [
      g("div", fa, [
        Kt(g("input", {
          "onUpdate:modelValue": S[0] || (S[0] = (m) => i.value = m),
          class: "stmp-search-input",
          placeholder: P(Y)("Search Song..."),
          onKeydown: Vr(l, ["enter"])
        }, null, 40, da), [
          [zt, i.value]
        ]),
        g("button", {
          class: "stmp-icon-btn",
          disabled: P(t).isSearching,
          onClick: l
        }, [
          P(t).isSearching ? (k(), ct(we, {
            key: 1,
            name: "loader",
            size: 16,
            class: "stmp-spin"
          })) : (k(), ct(we, {
            key: 0,
            name: "search",
            size: 16
          }))
        ], 8, ha)
      ]),
      P(t).error ? (k(), N("div", pa, [
        g("span", null, Q(P(t).error), 1),
        g("button", {
          class: "stmp-retry-btn",
          "aria-label": P(Y)("Retry"),
          onClick: c
        }, Q(P(Y)("Retry")), 9, ga)
      ])) : Se("", !0),
      P(t).isSearching ? (k(), N("div", ma, Q(P(Y)("Searching...")), 1)) : i.value && !P(t).results.length ? (k(), N("div", va, Q(P(Y)("No results")), 1)) : Se("", !0),
      P(t).results.length ? (k(), N("div", ya, [
        (k(!0), N(Z, null, $t(P(t).results, (m) => (k(), N("div", {
          key: m.provider + m.id,
          class: Re(["stmp-result", { "stmp-result-playing": w(m) }])
        }, [
          g("div", {
            class: "stmp-result-info",
            onClick: (R) => d(m)
          }, [
            g("span", _a, Q(m.name), 1),
            m.artist ? (k(), N("span", xa, Q(m.artist), 1)) : Se("", !0)
          ], 8, ba),
          g("button", {
            class: Re(["stmp-icon-btn stmp-result-add", { added: h(m) }]),
            "aria-label": h(m) ? P(Y)("Added") : P(Y)("Add to list"),
            onClick: Ws((R) => u(m), ["stop"])
          }, [
            ue(we, {
              name: h(m) ? "check" : "plus",
              size: 16
            }, null, 8, ["name"])
          ], 10, wa)
        ], 2))), 128))
      ])) : Se("", !0)
    ]));
  }
}), Ca = /* @__PURE__ */ xt(Sa, [["__scopeId", "data-v-077a0b5a"]]), Ia = { class: "stmp-panel" }, Ea = { class: "stmp-topbar stmp-drag-handle" }, Ta = { class: "stmp-cover" }, Ma = ["src"], Pa = { class: "stmp-track-info" }, Ra = { class: "stmp-track-name" }, Aa = {
  key: 0,
  class: "stmp-track-artist"
}, La = ["aria-label"], $a = {
  key: 0,
  class: "stmp-lyric-current"
}, ka = {
  key: 1,
  class: "stmp-lyric-next"
}, Oa = {
  key: 2,
  class: "stmp-lyric-empty"
}, Da = { class: "stmp-progress" }, Na = ["value"], Ua = { class: "stmp-time" }, Fa = { class: "stmp-controls" }, ja = ["aria-label"], Va = ["aria-label"], Ha = ["aria-label"], Ka = ["aria-label"], Ba = ["aria-label"], Wa = ["value"], za = { class: "stmp-tabs" }, Ja = { class: "stmp-tab-content" }, Ga = /* @__PURE__ */ bt({
  __name: "PlayerPanel",
  emits: ["collapse"],
  setup(e) {
    const t = _t(), s = ds(), n = me(), i = /* @__PURE__ */ Me("list"), r = /* @__PURE__ */ Me(!0), o = /* @__PURE__ */ Me(!1), l = /* @__PURE__ */ Me(!1);
    let c = null;
    const d = tt(() => t.currentTrack?.cover || ""), u = () => {
      o.value = !0;
    };
    Lt(
      () => t.currentTrack,
      () => {
        o.value = !1;
      }
    );
    const h = tt(
      () => t.duration > 0 ? t.currentTime / t.duration * 100 : 0
    ), w = tt(
      () => t.currentLyricIndex >= 0 ? t.lyrics[t.currentLyricIndex]?.text ?? null : null
    ), v = tt(() => {
      const L = t.currentLyricIndex;
      return L < 0 ? null : t.lyrics[L + 1]?.text ?? null;
    });
    function S(L) {
      const E = Math.floor(L / 60), O = Math.floor(L % 60);
      return E + ":" + O.toString().padStart(2, "0");
    }
    function m(L) {
      const E = L.target;
      t.seek(Number(E.value) / 100 * t.duration);
    }
    const R = ["list", "random", "single"], U = {
      list: "repeat",
      random: "shuffle",
      single: "repeat-one"
    };
    function F() {
      const L = n.settings.playMode, E = R.indexOf(L), O = R[(E + 1) % R.length];
      n.setPlayMode(O);
    }
    function W(L) {
      const E = L.target;
      t.setVolume(Number(E.value));
    }
    function A() {
      c && clearTimeout(c), l.value = !0;
    }
    function B() {
      c = setTimeout(() => {
        l.value = !1;
      }, 300);
    }
    function fe() {
      t.volume > 0 ? t.setVolume(0) : t.setVolume(65);
    }
    return (L, E) => (k(), N("div", Ia, [
      g("div", Ea, [
        g("div", Ta, [
          d.value && !o.value ? (k(), N("img", {
            key: 0,
            src: d.value,
            alt: "cover",
            onError: u
          }, null, 40, Ma)) : (k(), ct(we, {
            key: 1,
            name: "music",
            size: 24
          }))
        ]),
        g("div", Pa, [
          g("div", Ra, Q(P(t).currentTrack?.name || P(Y)("No Song")), 1),
          P(t).currentTrack?.artist ? (k(), N("div", Aa, Q(P(t).currentTrack.artist), 1)) : Se("", !0)
        ]),
        g("button", {
          class: "stmp-icon-btn",
          "aria-label": P(Y)("Collapse panel"),
          onClick: E[0] || (E[0] = Ws((O) => L.$emit("collapse"), ["stop"]))
        }, [
          ue(we, {
            name: "chevron-down",
            size: 18
          })
        ], 8, La)
      ]),
      r.value ? (k(), N("div", {
        key: 0,
        class: "stmp-lyrics",
        onClick: E[1] || (E[1] = (O) => r.value = !1)
      }, [
        w.value ? (k(), N("div", $a, Q(w.value), 1)) : Se("", !0),
        v.value ? (k(), N("div", ka, Q(v.value), 1)) : Se("", !0),
        !w.value && !v.value ? (k(), N("div", Oa, [
          ue(we, {
            name: "music",
            size: 18
          })
        ])) : Se("", !0)
      ])) : (k(), N("div", {
        key: 1,
        class: "stmp-lyrics-toggle",
        onClick: E[2] || (E[2] = (O) => r.value = !0)
      }, [
        ue(we, {
          name: "chevron-up",
          size: 14
        }),
        Dr(" " + Q(P(Y)("show lyrics")), 1)
      ])),
      g("div", Da, [
        g("input", {
          type: "range",
          min: "0",
          max: "100",
          step: "0.1",
          value: h.value,
          class: "stmp-range",
          onInput: m
        }, null, 40, Na),
        g("div", Ua, [
          g("span", null, Q(S(P(t).currentTime)), 1),
          g("span", null, Q(S(P(t).duration)), 1)
        ])
      ]),
      g("div", Fa, [
        g("button", {
          class: "stmp-ctrl-btn",
          "aria-label": P(Y)("Toggle play mode"),
          onClick: F
        }, [
          ue(we, {
            name: U[P(n).settings.playMode],
            size: 18
          }, null, 8, ["name"])
        ], 8, ja),
        g("button", {
          class: "stmp-ctrl-btn",
          "aria-label": P(Y)("Previous"),
          onClick: E[3] || (E[3] = (O) => P(s).prev())
        }, [
          ue(we, {
            name: "prev",
            size: 18
          })
        ], 8, Va),
        g("button", {
          class: "stmp-ctrl-btn stmp-play-btn",
          "aria-label": P(t).isPlaying ? P(Y)("Pause") : P(Y)("Play"),
          onClick: E[4] || (E[4] = (O) => P(t).togglePlay())
        }, [
          ue(we, {
            name: P(t).isPlaying ? "pause" : "play",
            size: 24
          }, null, 8, ["name"])
        ], 8, Ha),
        g("button", {
          class: "stmp-ctrl-btn",
          "aria-label": P(Y)("Next"),
          onClick: E[5] || (E[5] = (O) => P(s).next())
        }, [
          ue(we, {
            name: "next",
            size: 18
          })
        ], 8, Ka),
        g("div", {
          class: "stmp-volume-container",
          onMouseenter: A,
          onMouseleave: B
        }, [
          g("button", {
            class: "stmp-ctrl-btn",
            "aria-label": P(Y)("Mute / Unmute"),
            onClick: fe
          }, [
            ue(we, {
              name: P(t).volume === 0 ? "volume-mute" : "volume",
              size: 18
            }, null, 8, ["name"])
          ], 8, Ba),
          g("div", {
            class: Re(["stmp-volume-popup", { show: l.value }])
          }, [
            g("input", {
              type: "range",
              min: "0",
              max: "100",
              value: P(t).volume,
              class: "stmp-volume-vertical",
              orient: "vertical",
              onInput: W
            }, null, 40, Wa)
          ], 2)
        ], 32)
      ]),
      g("div", za, [
        g("button", {
          class: Re(["stmp-tab", { active: i.value === "list" }]),
          onClick: E[6] || (E[6] = (O) => i.value = "list")
        }, Q(P(Y)("List")), 3),
        g("button", {
          class: Re(["stmp-tab", { active: i.value === "search" }]),
          onClick: E[7] || (E[7] = (O) => i.value = "search")
        }, Q(P(Y)("Search")), 3)
      ]),
      g("div", Ja, [
        i.value === "list" ? (k(), ct(aa, { key: 0 })) : i.value === "search" ? (k(), ct(Ca, { key: 1 })) : Se("", !0)
      ])
    ]));
  }
}), qa = /* @__PURE__ */ xt(Ga, [["__scopeId", "data-v-6faaf198"]]), Ya = /* @__PURE__ */ bt({
  __name: "App",
  setup(e) {
    const t = me(), s = _t(), n = /* @__PURE__ */ Me(!1), i = /* @__PURE__ */ Me(null), r = tt(() => t.settings.widgetMode === "dock"), o = (L) => {
      L.key === "Escape" && (n.value = !1), L.key === " " && L.target === document.body && (L.preventDefault(), s.togglePlay());
    };
    let l = 0, c = 0, d = 0, u = 0, h = !1, w = !1, v = null, S = null;
    function m(L) {
      if (r.value) {
        if (L.target.closest("button")) return;
        B();
        return;
      }
      const E = L.target;
      if (E.closest("input, .stmp-tab, .stmp-result, .stmp-item, .stmp-upload-btn, .stmp-search-input, .stmp-controls, .stmp-lyrics, .stmp-lyrics-toggle, .stmp-tabs, .stmp-tab-content") || n.value && (!E.closest(".stmp-drag-handle") || E.closest("button")) || !n.value && E.closest("button"))
        return;
      const O = i.value?.getBoundingClientRect();
      O && (l = L.clientX, c = L.clientY, d = O.left, u = O.top, h = !1, w = !0, i.value && (i.value.style.left = O.left + "px", i.value.style.top = O.top + "px", i.value.style.right = "auto", i.value.style.bottom = "auto"), v = R, S = U, document.addEventListener("pointermove", v), document.addEventListener("pointerup", S), L.preventDefault());
    }
    function R(L) {
      if (!i.value || !w) return;
      const E = L.clientX - l, O = L.clientY - c;
      (Math.abs(E) > 3 || Math.abs(O) > 3) && (h = !0);
      let z = d + E, oe = u + O;
      const Te = i.value.offsetWidth || 60, De = i.value.offsetHeight || 40, ft = window.innerWidth - Te, wt = window.innerHeight - De;
      z = Math.max(0, Math.min(z, ft)), oe = Math.max(0, Math.min(oe, wt)), i.value.style.left = z + "px", i.value.style.top = oe + "px";
    }
    function U() {
      if (w = !1, v && document.removeEventListener("pointermove", v), S && document.removeEventListener("pointerup", S), v = null, S = null, !h) {
        B();
        return;
      }
      if (i.value) {
        const L = i.value.getBoundingClientRect();
        t.setPosition({ x: L.left, y: L.top }), n.value && lt(() => F());
      }
    }
    function F() {
      if (!i.value) return;
      const L = i.value.getBoundingClientRect(), E = i.value.offsetWidth, O = i.value.offsetHeight;
      let z = L.left, oe = L.top;
      z + E > window.innerWidth && (z = window.innerWidth - E), oe + O > window.innerHeight && (oe = window.innerHeight - O), z < 0 && (z = 0), oe < 0 && (oe = 0), i.value.style.left = z + "px", i.value.style.top = oe + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", t.setPosition({ x: z, y: oe });
    }
    function W() {
      if (!i.value || !r.value) return;
      const L = document.querySelector("#send_form");
      if (!L) return;
      const E = L.getBoundingClientRect(), O = i.value.offsetHeight || 38;
      let z = E.top - O - 4;
      z < 4 && (z = 4), i.value.style.left = E.left + "px", i.value.style.top = z + "px", i.value.style.right = "auto", i.value.style.bottom = "auto";
    }
    function A() {
      if (!i.value || r.value) return;
      const L = t.settings.position;
      L ? (i.value.style.left = L.x + "px", i.value.style.top = L.y + "px") : (i.value.style.right = "16px", i.value.style.top = "16px", i.value.style.left = "auto", i.value.style.bottom = "auto");
    }
    function B() {
      n.value = !n.value, lt(() => {
        r.value ? W() : t.settings.position && F();
      });
    }
    Lt(() => t.settings.widgetMode, (L) => {
      lt(() => {
        L === "dock" ? W() : A();
      });
    }), hr(() => {
      lt(() => {
        r.value ? W() : A();
      }), window.addEventListener("resize", fe), window.addEventListener("keydown", o);
    });
    function fe() {
      r.value ? lt(() => W()) : t.settings.position && lt(() => F());
    }
    return pr(() => {
      U(), window.removeEventListener("resize", fe), window.removeEventListener("keydown", o);
    }), (L, E) => (k(), N("div", {
      ref_key: "widgetRef",
      ref: i,
      class: Re(["stmp-widget", {
        "stmp-expanded": n.value,
        "stmp-collapsed": !n.value,
        "stmp-dock": r.value
      }]),
      onPointerdown: m
    }, [
      n.value ? (k(), ct(qa, {
        key: 1,
        onCollapse: B
      })) : (k(), ct(Yc, { key: 0 }))
    ], 34));
  }
}), Xa = /* @__PURE__ */ xt(Ya, [["__scopeId", "data-v-88c37019"]]), Za = { class: "stmp-settings" }, Qa = { class: "stmp-setting-group" }, eu = { class: "stmp-setting-row" }, tu = ["checked", "onChange"], su = ["onUpdate:modelValue"], nu = ["onUpdate:modelValue"], iu = ["onUpdate:modelValue"], ru = { class: "stmp-setting-group" }, ou = { class: "stmp-setting-label" }, lu = ["value"], cu = { class: "stmp-setting-group" }, au = ["value"], uu = ["value"], fu = { class: "stmp-setting-group" }, du = { class: "stmp-setting-label" }, hu = { class: "stmp-mode-toggle" }, pu = { class: "stmp-setting-group" }, gu = { class: "stmp-setting-row" }, mu = ["checked"], vu = { class: "stmp-setting-group" }, yu = { class: "stmp-rules" }, bu = ["onClick"], _u = { class: "stmp-rule-add" }, xu = /* @__PURE__ */ bt({
  __name: "SettingsView",
  setup(e) {
    const t = me(), s = /* @__PURE__ */ Me(""), n = [
      { value: "list", label: "List Loop" },
      { value: "random", label: "Random" },
      { value: "single", label: "Single Loop" }
    ], i = {
      netease: "NetEase",
      local: "Local Files",
      custom: "Custom API"
    };
    function r() {
      const S = s.value.trim();
      S && (t.addCustomCueRule(S), s.value = "");
    }
    function o(S) {
      t.removeCustomCueRule(S);
    }
    function l(S) {
      const m = S.target;
      t.setVolume(Number(m.value));
    }
    function c(S) {
      const m = S.target;
      t.setPlayMode(m.value);
    }
    function d(S) {
      const m = S.target;
      t.settings.autoPlayOnNewCue = m.checked, t.save();
    }
    const u = async () => {
      const S = t.storage;
      S && (await S.clearCache(), toastr.success("缓存已清理"));
    }, h = () => {
      const S = JSON.stringify(t.settings, null, 2), m = new Blob([S], { type: "application/json" }), R = URL.createObjectURL(m), U = document.createElement("a");
      U.href = R, U.download = "st-music-player-settings.json", U.click(), URL.revokeObjectURL(R);
    }, w = () => {
      const S = document.createElement("input");
      S.type = "file", S.accept = ".json", S.onchange = async (m) => {
        const R = m.target.files?.[0];
        if (!R) return;
        const U = await R.text();
        try {
          const F = JSON.parse(U);
          if (typeof F != "object" || F === null) throw new Error("Not an object");
          const W = ["volume", "playMode", "position", "autoPlayOnNewCue", "providers", "customCueRules"], A = {};
          for (const fe of W)
            fe in F && (A[fe] = F[fe]);
          if (typeof A.volume != "number" || A.volume < 0 || A.volume > 100)
            throw new Error("Invalid volume");
          if (typeof A.playMode != "string" || !["list", "random", "single"].includes(A.playMode))
            throw new Error("Invalid playMode");
          if (A.providers && !Array.isArray(A.providers))
            throw new Error("Invalid providers");
          if (A.customCueRules && !Array.isArray(A.customCueRules))
            throw new Error("Invalid customCueRules");
          const B = me();
          Object.assign(B.settings, A), B.save(), toastr.success("设置已导入");
        } catch (F) {
          console.error("Import failed", F), toastr.error("导入失败: " + (F instanceof Error ? F.message : "JSON 格式错误"));
        }
      }, S.click();
    };
    function v(S) {
      const m = t.settings.providers.find((R) => R.id === S);
      m && (m.enabled = !m.enabled, t.save());
    }
    return (S, m) => (k(), N("div", Za, [
      g("div", Qa, [
        m[6] || (m[6] = g("div", { class: "stmp-setting-label" }, "Providers", -1)),
        (k(!0), N(Z, null, $t(P(t).settings.providers, (R) => (k(), N("div", {
          key: R.id,
          class: "stmp-provider-config"
        }, [
          g("label", eu, [
            g("span", null, Q(i[R.id] || R.id), 1),
            g("input", {
              type: "checkbox",
              checked: R.enabled,
              onChange: (U) => v(R.id)
            }, null, 40, tu)
          ]),
          R.id === "netease" ? Kt((k(), N("input", {
            key: 0,
            class: "stmp-provider-input",
            "onUpdate:modelValue": (U) => R.config.baseURL = U,
            placeholder: "API baseURL",
            onChange: m[0] || (m[0] = (U) => P(t).save())
          }, null, 40, su)), [
            [zt, R.config.baseURL]
          ]) : Se("", !0),
          R.id === "custom" ? (k(), N(Z, { key: 1 }, [
            Kt(g("input", {
              class: "stmp-provider-input",
              "onUpdate:modelValue": (U) => R.config.searchURL = U,
              placeholder: "Search URL",
              onChange: m[1] || (m[1] = (U) => P(t).save())
            }, null, 40, nu), [
              [zt, R.config.searchURL]
            ]),
            Kt(g("input", {
              class: "stmp-provider-input",
              "onUpdate:modelValue": (U) => R.config.resolveURL = U,
              placeholder: "Resolve URL",
              onChange: m[2] || (m[2] = (U) => P(t).save())
            }, null, 40, iu), [
              [zt, R.config.resolveURL]
            ])
          ], 64)) : Se("", !0)
        ]))), 128))
      ]),
      g("div", ru, [
        g("div", ou, "Default Volume: " + Q(P(t).settings.volume), 1),
        g("input", {
          type: "range",
          min: "0",
          max: "100",
          value: P(t).settings.volume,
          class: "stmp-range",
          onInput: l
        }, null, 40, lu)
      ]),
      g("div", cu, [
        m[7] || (m[7] = g("div", { class: "stmp-setting-label" }, "Default Play Mode", -1)),
        g("select", {
          class: "stmp-select",
          value: P(t).settings.playMode,
          onChange: c
        }, [
          (k(), N(Z, null, $t(n, (R) => g("option", {
            key: R.value,
            value: R.value
          }, Q(R.label), 9, uu)), 64))
        ], 40, au)
      ]),
      g("div", fu, [
        g("div", du, Q(P(Y)("Widget Mode")), 1),
        g("div", hu, [
          g("button", {
            class: Re(["stmp-mode-btn", { active: P(t).settings.widgetMode === "dock" }]),
            onClick: m[3] || (m[3] = (R) => P(t).setWidgetMode("dock"))
          }, Q(P(Y)("Dock")), 3),
          g("button", {
            class: Re(["stmp-mode-btn", { active: P(t).settings.widgetMode === "drag" }]),
            onClick: m[4] || (m[4] = (R) => P(t).setWidgetMode("drag"))
          }, Q(P(Y)("Drag")), 3)
        ])
      ]),
      g("div", pu, [
        g("div", gu, [
          m[8] || (m[8] = g("span", null, "Auto-play on new cue", -1)),
          g("input", {
            type: "checkbox",
            checked: P(t).settings.autoPlayOnNewCue,
            onChange: d
          }, null, 40, mu)
        ])
      ]),
      g("div", vu, [
        m[9] || (m[9] = g("div", { class: "stmp-setting-label" }, "Custom Cue Rules (Regex)", -1)),
        g("div", yu, [
          (k(!0), N(Z, null, $t(P(t).settings.customCueRules, (R, U) => (k(), N("div", {
            key: U,
            class: "stmp-rule"
          }, [
            g("code", null, Q(R), 1),
            g("button", {
              class: "stmp-rule-del",
              onClick: (F) => o(U)
            }, "✕", 8, bu)
          ]))), 128))
        ]),
        g("div", _u, [
          Kt(g("input", {
            "onUpdate:modelValue": m[5] || (m[5] = (R) => s.value = R),
            class: "stmp-rule-input",
            placeholder: "Add regex rule...",
            onKeydown: Vr(r, ["enter"])
          }, null, 544), [
            [zt, s.value]
          ]),
          g("button", {
            class: "stmp-rule-add-btn",
            onClick: r
          }, "+")
        ])
      ]),
      g("div", { class: "stmp-setting-group" }, [
        m[10] || (m[10] = g("div", { class: "stmp-setting-label" }, "Data", -1)),
        g("div", { class: "stmp-data-btns" }, [
          g("button", {
            class: "stmp-data-btn",
            "aria-label": "清理缓存",
            onClick: u
          }, "清理缓存"),
          g("button", {
            class: "stmp-data-btn",
            "aria-label": "导出数据",
            onClick: h
          }, "导出数据"),
          g("button", {
            class: "stmp-data-btn",
            "aria-label": "导入数据",
            onClick: w
          }, "导入数据")
        ])
      ])
    ]));
  }
}), wu = /* @__PURE__ */ xt(xu, [["__scopeId", "data-v-154059dd"]]);
class Su {
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
      const c = (...d) => {
        const u = l(d[0]);
        this.emit(o, u);
      };
      s.on(r, c), this.registered.push({ event: r, handler: c });
    };
    i(n.CHAT_CHANGED, "chat-changed", (r) => ({
      chatId: typeof r == "string" ? r : void 0
    })), i(n.GENERATION_ENDED, "message-generated", (r) => ({
      messageId: bs(r)
    })), i(n.MESSAGE_UPDATED, "message-updated", (r) => ({
      messageId: bs(r)
    })), i(n.MESSAGE_DELETED, "message-deleted", (r) => ({
      messageId: bs(r)
    })), i(n.MESSAGE_SWIPED, "message-swiped", (r) => ({
      messageId: bs(r)
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
function bs(e) {
  if (e == null) return;
  const t = typeof e == "number" ? e : parseInt(String(e), 10);
  return Number.isFinite(t) ? t : void 0;
}
function Cu() {
  return new Su();
}
const Iu = [
  /<bgm>当前bgm[:：](.+?) - (.+?)<\/bgm>/g,
  /<bgm>当前bgm[:：](.+?)<\/bgm>/g,
  /<bgm>(.+?) - (.+?)<\/bgm>/g,
  /<bgm>(.+?)<\/bgm>/g,
  /【BGM】(.+?)(?: - (.+?))?【\/BGM】/g,
  /\[music\](.+?)(?: - (.+?))?\[\/music\]/g
];
function Ti(e, t) {
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
function Mi(e, t = []) {
  const s = /* @__PURE__ */ new Map(), n = (i) => {
    s.has(i.index) || s.set(i.index, i);
  };
  for (const i of Iu)
    for (const r of Ti(i, e)) n(r);
  for (const i of t)
    try {
      const r = new RegExp(i, "g");
      for (const o of Ti(r, e)) n(o);
    } catch {
    }
  return [...s.values()].sort((i, r) => i.index - r.index).map((i) => i.cue);
}
class Eu {
  constructor(t) {
    this.cursors = /* @__PURE__ */ new Map(), this.getChatMessage = t;
  }
  scanIncremental(t, s, n, i = []) {
    const r = [];
    for (let o = s; o <= n; o++) {
      const l = this.getChatMessage(o);
      if (l === void 0) continue;
      const c = Mi(l, i);
      if (c.length === 0) continue;
      const d = c.at(-1);
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
    const r = Mi(i, n), o = r.length > 0 ? r.at(-1) : null;
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
let kt = null, Xe = null, ss = null, ns = null, Ot = null, As = null;
const Tu = `
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
function Mu() {
  const e = $("#extensions_settings2");
  if (!e || !e.length || (e.append(Tu), ns = e.children(".inline-drawer").last()[0] ?? null, !ns)) return;
  const t = ns.querySelector("#stmp-settings-mount");
  t && As && (Ot = Hr(wu), Ot.use(As), Ot.mount(t));
}
function Pu() {
  Ot && (Ot.unmount(), Ot = null), ns?.remove(), ns = null;
}
function Ru(e, t, s) {
  Xe = Cu(), Xe.on("chat-changed", () => {
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
  }), Xe.on("message-generated", (n) => {
    const i = SillyTavern.getContext(), r = t.chatId ?? i.chatId ?? "";
    if (!r || n.messageId === void 0) return;
    const o = t.getCursor() + 1, l = n.messageId;
    if (l < o) return;
    const c = e.scanIncremental(
      r,
      o,
      l,
      s.settings.customCueRules
    );
    t.handleNewCues(c), t.setCursor(l);
  }), Xe.on("message-updated", (n) => {
    n.messageId !== void 0 && t.handleMessageUpdate(n.messageId);
  }), Xe.on("message-deleted", (n) => {
    n.messageId !== void 0 && t.handleMessageDelete(n.messageId);
  }), Xe.on("message-swiped", (n) => {
    n.messageId !== void 0 && t.handleMessageUpdate(n.messageId);
  }), Xe.start();
}
function Au(e, t, s) {
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
async function ku() {
  try {
    const e = document.createElement("div");
    e.id = "st-music-player-root", document.documentElement.appendChild(e);
    const t = wc();
    As = t, kt = Hr(Xa), kt.use(t), kt.mount(e);
    const s = me(), n = Lc();
    s.init(n);
    const i = _t();
    i.init(), i.setVolume(s.settings.volume);
    const r = new Eu((c) => SillyTavern.getContext().chat[c]?.mes), o = ds();
    o.init(r), Mu();
    const l = SillyTavern.getContext();
    ss = () => {
      Ru(r, o, s), Au(r, o, s);
    }, l.eventSource.on(l.event_types.APP_READY, ss), console.log("[ST-Music-Player] 播放器加载完成");
  } catch (e) {
    console.error("[ST-Music-Player] init failed:", e);
  }
}
function Gr() {
  if (ss) {
    try {
      const t = SillyTavern.getContext();
      t.eventSource.removeListener(t.event_types.APP_READY, ss);
    } catch {
    }
    ss = null;
  }
  if (Xe?.stop(), Xe = null, kt) {
    try {
      _t().destroy();
    } catch {
    }
    kt.unmount(), kt = null;
  }
  const e = document.getElementById("st-music-player-root");
  e && e.remove(), Pu(), As = null;
}
function Ou() {
  Gr();
}
async function Lu() {
  try {
    const e = SillyTavern.getContext();
    delete e.extensionSettings[Mt], e.saveSettingsDebounced();
  } catch (e) {
    console.error("[ST-Music-Player] clean: failed to delete settings:", e);
  }
  try {
    const e = SillyTavern.libs?.localforage;
    if (e && typeof e.keys == "function") {
      const t = await e.keys();
      await Promise.all(
        t.filter((s) => s.startsWith(Mt) || s.startsWith("stmp:")).map((s) => e.removeItem(s))
      );
    }
  } catch (e) {
    console.error("[ST-Music-Player] clean: failed to clear localforage:", e);
  }
}
async function Du() {
  await Lu(), Gr();
}
export {
  Lu as clean,
  Du as delete,
  Gr as destroy,
  Ou as disable,
  ku as init
};
