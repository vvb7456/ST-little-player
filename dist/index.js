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
const ne = {}, Rt = [], ze = () => {
}, Ri = () => !1, Ls = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), $s = (e) => e.startsWith("onUpdate:"), me = Object.assign, Sn = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Xr = Object.prototype.hasOwnProperty, Z = (e, t) => Xr.call(e, t), V = Array.isArray, Pt = (e) => as(e) === "[object Map]", Pi = (e) => as(e) === "[object Set]", Kn = (e) => as(e) === "[object Date]", K = (e) => typeof e == "function", fe = (e) => typeof e == "string", Le = (e) => typeof e == "symbol", te = (e) => e !== null && typeof e == "object", Ai = (e) => (te(e) || K(e)) && K(e.then) && K(e.catch), Li = Object.prototype.toString, as = (e) => Li.call(e), Zr = (e) => as(e).slice(8, -1), $i = (e) => as(e) === "[object Object]", Os = (e) => fe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Jt = /* @__PURE__ */ wn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ks = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Qr = /-\w/g, $e = ks(
  (e) => e.replace(Qr, (t) => t.slice(1).toUpperCase())
), eo = /\B([A-Z])/g, ut = ks(
  (e) => e.replace(eo, "-$1").toLowerCase()
), Oi = ks((e) => e.charAt(0).toUpperCase() + e.slice(1)), qs = ks(
  (e) => e ? `on${Oi(e)}` : ""
), We = (e, t) => !Object.is(e, t), bs = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, ki = (e, t, s, n = !1) => {
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
      const n = e[s], i = fe(n) ? io(n) : In(n);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (fe(e) || te(e))
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
function Ae(e) {
  let t = "";
  if (fe(e))
    t = e;
  else if (V(e))
    for (let s = 0; s < e.length; s++) {
      const n = Ae(e[s]);
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
  if (s = Le(e), n = Le(t), s || n)
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
const Ni = (e) => !!(e && e.__v_isRef === !0), B = (e) => fe(e) ? e : e == null ? "" : V(e) || te(e) && (e.toString === Li || !K(e.toString)) ? Ni(e) ? B(e.value) : JSON.stringify(e, Ui, 2) : String(e), Ui = (e, t) => Ni(t) ? Ui(e, t.value) : Pt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], r) => (s[Ys(n, r) + " =>"] = i, s),
    {}
  )
} : Pi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => Ys(s))
} : Le(t) ? Ys(t) : te(t) && !V(t) && !$i(t) ? String(t) : t, Ys = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Le(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let pe;
class Fi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && pe && (pe.active ? (this.parent = pe, this.index = (pe.scopes || (pe.scopes = [])).push(
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
      const s = pe;
      try {
        return pe = this, t();
      } finally {
        pe = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = pe, pe = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (pe === this)
        pe = this.prevScope;
      else {
        let t = pe;
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
  return pe;
}
function co(e, t = !1) {
  pe && pe.cleanups.push(e);
}
let oe;
const Xs = /* @__PURE__ */ new WeakSet();
class Hi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, pe && (pe.active ? pe.effects.push(this) : this.flags &= -2);
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
    const t = oe, s = Oe;
    oe = this, Oe = !0;
    try {
      return this.fn();
    } finally {
      zi(this), oe = t, Oe = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Rn(t);
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
    n.version === -1 ? (n === s && (s = i), Rn(n), ao(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
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
  const t = e.dep, s = oe, n = Oe;
  oe = e, Oe = !0;
  try {
    Wi(e);
    const i = e.fn(e._value);
    (t.version === 0 || We(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    oe = s, Oe = n, zi(e), e.flags &= -3;
  }
}
function Rn(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let r = s.computed.deps; r; r = r.nextDep)
      Rn(r, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function ao(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let Oe = !0;
const Gi = [];
function Je() {
  Gi.push(Oe), Oe = !1;
}
function Ge() {
  const e = Gi.pop();
  Oe = e === void 0 ? !0 : e;
}
function Wn(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = oe;
    oe = void 0;
    try {
      t();
    } finally {
      oe = s;
    }
  }
}
let is = 0;
class uo {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Pn {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!oe || !Oe || oe === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== oe)
      s = this.activeLink = new uo(oe, this), oe.deps ? (s.prevDep = oe.depsTail, oe.depsTail.nextDep = s, oe.depsTail = s) : oe.deps = oe.depsTail = s, qi(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = oe.depsTail, s.nextDep = void 0, oe.depsTail.nextDep = s, oe.depsTail = s, oe.deps === s && (oe.deps = n);
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
  if (Oe && oe) {
    let n = Ss.get(e);
    n || Ss.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(s);
    i || (n.set(s, i = new Pn()), i.map = n, i.key = s), i.track();
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
    const c = V(e), d = c && Os(s);
    if (c && s === "length") {
      const u = Number(n);
      o.forEach((h, w) => {
        (w === "length" || w === rs || !Le(w) && w >= u) && l(h);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), d && l(o.get(rs)), t) {
        case "add":
          c ? d && l(o.get("length")) : (l(o.get(vt)), Pt(e) && l(o.get(fn)));
          break;
        case "delete":
          c || (l(o.get(vt)), Pt(e) && l(o.get(fn)));
          break;
        case "set":
          Pt(e) && l(o.get(vt));
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
  const t = /* @__PURE__ */ X(e);
  return t === e ? t : (ve(t, "iterate", rs), /* @__PURE__ */ Me(e) ? t : t.map(ke));
}
function Ns(e) {
  return ve(e = /* @__PURE__ */ X(e), "iterate", rs), e;
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
  return n !== e && !/* @__PURE__ */ Me(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = s(r.value)), r;
  }), i;
}
const po = Array.prototype;
function qe(e, t, s, n, i, r) {
  const o = Ns(e), l = o !== e && !/* @__PURE__ */ Me(e), c = o[t];
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
  const i = Ns(e), r = i !== e && !/* @__PURE__ */ Me(e);
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
  const n = /* @__PURE__ */ X(e);
  ve(n, "iterate", rs);
  const i = n[t](...s);
  return (i === -1 || i === !1) && /* @__PURE__ */ Fs(s[0]) ? (s[0] = /* @__PURE__ */ X(s[0]), n[t](...s)) : i;
}
function Vt(e, t, s = []) {
  Je(), Tn();
  const n = (/* @__PURE__ */ X(e))[t].apply(e, s);
  return Mn(), Ge(), n;
}
const go = /* @__PURE__ */ wn("__proto__,__v_isRef,__isVue"), Yi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Le)
);
function mo(e) {
  Le(e) || (e = String(e));
  const t = /* @__PURE__ */ X(this);
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
      /* @__PURE__ */ de(t) ? t : n
    );
    if ((Le(s) ? Yi.has(s) : go(s)) || (i || ve(t, "get", s), r))
      return l;
    if (/* @__PURE__ */ de(l)) {
      const c = o && Os(s) ? l : l.value;
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
    const o = V(t) && Os(s);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ nt(r);
      if (!/* @__PURE__ */ Me(n) && !/* @__PURE__ */ nt(n) && (r = /* @__PURE__ */ X(r), n = /* @__PURE__ */ X(n)), !o && /* @__PURE__ */ de(r) && !/* @__PURE__ */ de(n))
        return d || (r.value = n), !0;
    }
    const l = o ? Number(s) < t.length : Z(t, s), c = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ de(t) ? t : i
    );
    return t === /* @__PURE__ */ X(i) && c && (l ? We(n, r) && Qe(t, "set", s, n) : Qe(t, "add", s, n)), c;
  }
  deleteProperty(t, s) {
    const n = Z(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && Qe(t, "delete", s, void 0), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Le(s) || !Yi.has(s)) && ve(t, "has", s), n;
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
const yo = /* @__PURE__ */ new Zi(), _o = /* @__PURE__ */ new vo(), bo = /* @__PURE__ */ new Zi(!0);
const dn = (e) => e, gs = (e) => Reflect.getPrototypeOf(e);
function xo(e, t, s) {
  return function(...n) {
    const i = this.__v_raw, r = /* @__PURE__ */ X(i), o = Pt(r), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, d = i[e](...n), u = s ? dn : t ? Dt : ke;
    return !t && ve(
      r,
      "iterate",
      c ? fn : vt
    ), me(
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
      const r = this.__v_raw, o = /* @__PURE__ */ X(r), l = /* @__PURE__ */ X(i);
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
      return !e && ve(/* @__PURE__ */ X(i), "iterate", vt), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ X(r), l = /* @__PURE__ */ X(i);
      return e || (We(i, l) && ve(o, "has", i), ve(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ X(l), d = t ? dn : e ? Dt : ke;
      return !e && ve(c, "iterate", vt), l.forEach((u, h) => i.call(r, d(u), d(h), o));
    }
  };
  return me(
    s,
    e ? {
      add: ms("add"),
      set: ms("set"),
      delete: ms("delete"),
      clear: ms("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ X(this), o = gs(r), l = /* @__PURE__ */ X(i), c = !t && !/* @__PURE__ */ Me(i) && !/* @__PURE__ */ nt(i) ? l : i;
        return o.has.call(r, c) || We(i, c) && o.has.call(r, i) || We(l, c) && o.has.call(r, l) || (r.add(c), Qe(r, "add", c, c)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ Me(r) && !/* @__PURE__ */ nt(r) && (r = /* @__PURE__ */ X(r));
        const o = /* @__PURE__ */ X(this), { has: l, get: c } = gs(o);
        let d = l.call(o, i);
        d || (i = /* @__PURE__ */ X(i), d = l.call(o, i));
        const u = c.call(o, i);
        return o.set(i, r), d ? We(r, u) && Qe(o, "set", i, r) : Qe(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ X(this), { has: o, get: l } = gs(r);
        let c = o.call(r, i);
        c || (i = /* @__PURE__ */ X(i), c = o.call(r, i)), l && l.call(r, i);
        const d = r.delete(i);
        return c && Qe(r, "delete", i, void 0), d;
      },
      clear() {
        const i = /* @__PURE__ */ X(this), r = i.size !== 0, o = i.clear();
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
    Z(s, i) && i in n ? s : n,
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
    bo,
    Co,
    er
  );
}
// @__NO_SIDE_EFFECTS__
function hn(e) {
  return Ln(
    e,
    !0,
    _o,
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
function Me(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Fs(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function X(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ X(t) : e;
}
function $n(e) {
  return !Z(e, "__v_skip") && Object.isExtensible(e) && ki(e, "__v_skip", !0), e;
}
const ke = (e) => te(e) ? /* @__PURE__ */ Us(e) : e, Dt = (e) => te(e) ? /* @__PURE__ */ hn(e) : e;
// @__NO_SIDE_EFFECTS__
function de(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Re(e) {
  return Ro(e, !1);
}
function Ro(e, t) {
  return /* @__PURE__ */ de(e) ? e : new Po(e, t);
}
class Po {
  constructor(t, s) {
    this.dep = new Pn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ X(t), this._value = s ? t : ke(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Me(t) || /* @__PURE__ */ nt(t);
    t = n ? t : /* @__PURE__ */ X(t), We(t, s) && (this._rawValue = t, this._value = n ? t : ke(t), this.dep.trigger());
  }
}
function S(e) {
  return /* @__PURE__ */ de(e) ? e.value : e;
}
const Ao = {
  get: (e, t, s) => t === "__v_raw" ? e : S(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t];
    return /* @__PURE__ */ de(i) && !/* @__PURE__ */ de(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function sr(e) {
  return /* @__PURE__ */ st(e) ? e : new Proxy(e, Ao);
}
// @__NO_SIDE_EFFECTS__
function Lo(e) {
  const t = V(e) ? new Array(e.length) : {};
  for (const s in e)
    t[s] = Oo(e, s);
  return t;
}
class $o {
  constructor(t, s, n) {
    this._object = t, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = Le(s) ? s : String(s), this._raw = /* @__PURE__ */ X(t);
    let i = !0, r = t;
    if (!V(t) || Le(this._key) || !Os(this._key))
      do
        i = !/* @__PURE__ */ Fs(r) || /* @__PURE__ */ Me(r);
      while (i && (r = r.__v_raw));
    this._shallow = i;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = S(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ de(this._raw[this._key])) {
      const s = this._object[this._key];
      if (/* @__PURE__ */ de(s)) {
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
function Oo(e, t, s) {
  return new $o(e, t, s);
}
class ko {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Pn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = is - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    oe !== this)
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
  return K(e) ? n = e : (n = e.get, i = e.set), new ko(n, i, s);
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
  const { immediate: n, deep: i, once: r, scheduler: o, augmentJob: l, call: c } = s, d = (P) => i ? P : /* @__PURE__ */ Me(P) || i === !1 || i === 0 ? et(P, 1) : et(P);
  let u, h, w, y, C = !1, b = !1;
  if (/* @__PURE__ */ de(e) ? (h = () => e.value, C = /* @__PURE__ */ Me(e)) : /* @__PURE__ */ st(e) ? (h = () => d(e), C = !0) : V(e) ? (b = !0, C = e.some((P) => /* @__PURE__ */ st(P) || /* @__PURE__ */ Me(P)), h = () => e.map((P) => {
    if (/* @__PURE__ */ de(P))
      return P.value;
    if (/* @__PURE__ */ st(P))
      return d(P);
    if (K(P))
      return c ? c(P, 2) : P();
  })) : K(e) ? t ? h = c ? () => c(e, 2) : e : h = () => {
    if (w) {
      Je();
      try {
        w();
      } finally {
        Ge();
      }
    }
    const P = mt;
    mt = u;
    try {
      return c ? c(e, 3, [y]) : e(y);
    } finally {
      mt = P;
    }
  } : h = ze, t && i) {
    const P = h, W = i === !0 ? 1 / 0 : i;
    h = () => et(P(), W);
  }
  const A = Vi(), F = () => {
    u.stop(), A && A.active && Sn(A.effects, u);
  };
  if (r && t) {
    const P = t;
    t = (...W) => {
      const ye = P(...W);
      return F(), ye;
    };
  }
  let j = b ? new Array(e.length).fill(vs) : vs;
  const G = (P) => {
    if (!(!(u.flags & 1) || !u.dirty && !P))
      if (t) {
        const W = u.run();
        if (P || i || C || (b ? W.some((ye, q) => We(ye, j[q])) : We(W, j))) {
          w && w();
          const ye = mt;
          mt = u;
          try {
            const q = [
              W,
              // pass undefined as the old value when it's changed for the first time
              j === vs ? void 0 : b && j[0] === vs ? [] : j,
              y
            ];
            j = W, c ? c(t, 3, q) : (
              // @ts-expect-error
              t(...q)
            );
          } finally {
            mt = ye;
          }
        }
      } else
        u.run();
  };
  return l && l(G), u = new Hi(h), u.scheduler = o ? () => o(G, !1) : G, y = (P) => No(P, !1, u), w = u.onStop = () => {
    const P = Cs.get(u);
    if (P) {
      if (c)
        c(P, 4);
      else
        for (const W of P) W();
      Cs.delete(u);
    }
  }, t ? n ? G(!0) : j = u.run() : o ? o(G.bind(null, !0), !0) : u.run(), F.pause = u.pause.bind(u), F.resume = u.resume.bind(u), F.stop = F, F;
}
function et(e, t = 1 / 0, s) {
  if (t <= 0 || !te(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ de(e))
    et(e.value, t, s);
  else if (V(e))
    for (let n = 0; n < e.length; n++)
      et(e[n], t, s);
  else if (Pi(e) || Pt(e))
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
function De(e, t, s, n) {
  if (K(e)) {
    const i = us(e, t, s, n);
    return i && Ai(i) && i.catch((r) => {
      js(r, t, s);
    }), i;
  }
  if (V(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(De(e[r], t, s, n));
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
const we = [];
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
  let t = He + 1, s = we.length;
  for (; t < s; ) {
    const n = t + s >>> 1, i = we[n], r = os(i);
    r < e || r === e && i.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function On(e) {
  if (!(e.flags & 1)) {
    const t = os(e), s = we[we.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= os(s) ? we.push(e) : we.splice(jo(t), 0, e), e.flags |= 1, ir();
  }
}
function ir() {
  Is || (Is = nr.then(or));
}
function Vo(e) {
  V(e) ? At.push(...e) : ot && e.id === -1 ? ot.splice(Et + 1, 0, e) : e.flags & 1 || (At.push(e), e.flags |= 1), ir();
}
function Jn(e, t, s = He + 1) {
  for (; s < we.length; s++) {
    const n = we[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      we.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
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
    for (He = 0; He < we.length; He++) {
      const t = we[He];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), us(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; He < we.length; He++) {
      const t = we[He];
      t && (t.flags &= -2);
    }
    He = -1, we.length = 0, rr(), Is = null, (we.length || At.length) && or();
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
    c && (Je(), De(c, s, 8, [
      e.el,
      l,
      e,
      t
    ]), Ge());
  }
}
function Ko(e, t) {
  if (Se) {
    let s = Se.provides;
    const n = Se.parent && Se.parent.provides;
    n === s && (s = Se.provides = Object.create(n)), s[e] = t;
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
  const { immediate: n, deep: i, flush: r, once: o } = s, l = me({}, s), c = t && n || !t && r !== "post";
  let d;
  if (cs) {
    if (r === "sync") {
      const y = zo();
      d = y.__watcherHandles || (y.__watcherHandles = []);
    } else if (!c) {
      const y = () => {
      };
      return y.stop = ze, y.resume = ze, y.pause = ze, y;
    }
  }
  const u = Se;
  l.call = (y, C, b) => De(y, u, C, b);
  let h = !1;
  r === "post" ? l.scheduler = (y) => {
    Ce(y, u && u.suspense);
  } : r !== "sync" && (h = !0, l.scheduler = (y, C) => {
    C ? y() : On(y);
  }), l.augmentJob = (y) => {
    t && (y.flags |= 4), h && (y.flags |= 2, u && (y.id = u.uid, y.i = u));
  };
  const w = Uo(e, t, l);
  return cs && (d ? d.push(w) : c && w()), w;
}
function Jo(e, t, s) {
  const n = this.proxy, i = fe(e) ? e.includes(".") ? ar(n, e) : () => n[e] : e.bind(n, n);
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
function kn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, kn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function _t(e, t) {
  return K(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    me({ name: e.name }, t, { setup: e })
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
      (b, A) => Xt(
        b,
        t && (V(t) ? t[A] : t),
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
  const r = n.shapeFlag & 4 ? Bs(n.component) : n.el, o = i ? null : r, { i: l, r: c } = e, d = t && t.r, u = l.refs === ne ? l.refs = {} : l.refs, h = l.setupState, w = /* @__PURE__ */ X(h), y = h === ne ? Ri : (b) => Gn(u, b) ? !1 : Z(w, b), C = (b, A) => !(A && Gn(u, A));
  if (d != null && d !== c) {
    if (qn(t), fe(d))
      u[d] = null, y(d) && (h[d] = null);
    else if (/* @__PURE__ */ de(d)) {
      const b = t;
      C(d, b.k) && (d.value = null), b.k && (u[b.k] = null);
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
    const b = fe(c), A = /* @__PURE__ */ de(c);
    if (b || A) {
      const F = () => {
        if (e.f) {
          const j = b ? y(c) ? h[c] : u[c] : C() || !e.k ? c.value : u[e.k];
          if (i)
            V(j) && Sn(j, r);
          else if (V(j))
            j.includes(r) || j.push(r);
          else if (b)
            u[c] = [r], y(c) && (h[c] = u[c]);
          else {
            const G = [r];
            C(c, e.k) && (c.value = G), e.k && (u[e.k] = G);
          }
        } else b ? (u[c] = o, y(c) && (h[c] = o)) : A && (C(c, e.k) && (c.value = o), e.k && (u[e.k] = o));
      };
      if (o) {
        const j = () => {
          F(), Ts.delete(e);
        };
        j.id = -1, Ts.set(e, j), Ce(j, s);
      } else
        qn(e), F();
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
function dr(e, t, s = Se) {
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
function Vs(e, t, s = Se, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []), r = t.__weh || (t.__weh = (...o) => {
      Je();
      const l = fs(s), c = De(t, s, e, o);
      return l(), Ge(), c;
    });
    return n ? i.unshift(r) : i.push(r), r;
  }
}
const it = (e) => (t, s = Se) => {
  (!cs || e === "sp") && Vs(e, (...n) => t(...n), s);
}, Qo = it("bm"), hr = it("m"), el = it(
  "bu"
), tl = it("u"), pr = it(
  "bum"
), gr = it("um"), sl = it(
  "sp"
), nl = it("rtg"), il = it("rtc");
function rl(e, t = Se) {
  Vs("ec", e, t);
}
const ol = /* @__PURE__ */ Symbol.for("v-ndc");
function $t(e, t, s, n) {
  let i;
  const r = s, o = V(e);
  if (o || fe(e)) {
    const l = o && /* @__PURE__ */ st(e);
    let c = !1, d = !1;
    l && (c = !/* @__PURE__ */ Me(e), d = /* @__PURE__ */ nt(e), e = Ns(e)), i = new Array(e.length);
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
  /* @__PURE__ */ me(/* @__PURE__ */ Object.create(null), {
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
      On(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = lt.bind(e.proxy)),
    $watch: (e) => Jo.bind(e)
  })
), tn = (e, t) => e !== ne && !e.__isScriptSetup && Z(e, t), ll = {
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
        if (i !== ne && Z(i, t))
          return o[t] = 2, i[t];
        if (Z(r, t))
          return o[t] = 3, r[t];
        if (s !== ne && Z(s, t))
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
    if (s !== ne && Z(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      h = c.config.globalProperties, Z(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: i, ctx: r } = e;
    return tn(i, t) ? (i[t] = s, !0) : n !== ne && Z(n, t) ? (n[t] = s, !0) : Z(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: i, props: r, type: o }
  }, l) {
    let c;
    return !!(s[l] || e !== ne && l[0] !== "$" && Z(e, l) || tn(t, l) || Z(r, l) || Z(n, l) || Z(Qt, l) || Z(i.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : Z(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
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
    beforeUpdate: y,
    updated: C,
    activated: b,
    deactivated: A,
    beforeDestroy: F,
    beforeUnmount: j,
    destroyed: G,
    unmounted: P,
    render: W,
    renderTracked: ye,
    renderTriggered: q,
    errorCaptured: L,
    serverPrefetch: T,
    // public API
    expose: z,
    inheritAttrs: ie,
    // assets
    components: le,
    directives: ce,
    filters: ft
  } = t;
  if (d && al(d, n, null), o)
    for (const J in o) {
      const re = o[J];
      K(re) && (n[J] = re.bind(s));
    }
  if (i) {
    const J = i.call(s, s);
    te(J) && (e.data = /* @__PURE__ */ Us(J));
  }
  if (gn = !0, r)
    for (const J in r) {
      const re = r[J], dt = K(re) ? re.bind(s, s) : K(re.get) ? re.get.bind(s, s) : ze, hs = !K(re) && K(re.set) ? re.set.bind(s) : ze, ht = tt({
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
    Reflect.ownKeys(J).forEach((re) => {
      Ko(re, J[re]);
    });
  }
  u && Xn(u, e, "c");
  function ae(J, re) {
    V(re) ? re.forEach((dt) => J(dt.bind(s))) : re && J(re.bind(s));
  }
  if (ae(Qo, h), ae(hr, w), ae(el, y), ae(tl, C), ae(Yo, b), ae(Xo, A), ae(rl, L), ae(il, ye), ae(nl, q), ae(pr, j), ae(gr, P), ae(sl, T), V(z))
    if (z.length) {
      const J = e.exposed || (e.exposed = {});
      z.forEach((re) => {
        Object.defineProperty(J, re, {
          get: () => s[re],
          set: (dt) => s[re] = dt,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  W && e.render === ze && (e.render = W), ie != null && (e.inheritAttrs = ie), le && (e.components = le), ce && (e.directives = ce), T && ur(e);
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
    ) : r = Yt(i.from || n) : r = Yt(i), /* @__PURE__ */ de(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[n] = r;
  }
}
function Xn(e, t, s) {
  De(
    V(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function mr(e, t, s, n) {
  let i = n.includes(".") ? ar(s, n) : () => s[n];
  if (fe(e)) {
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
  beforeCreate: _e,
  created: _e,
  beforeMount: _e,
  mounted: _e,
  beforeUpdate: _e,
  updated: _e,
  beforeDestroy: _e,
  beforeUnmount: _e,
  destroyed: _e,
  unmounted: _e,
  activated: _e,
  deactivated: _e,
  errorCaptured: _e,
  serverPrefetch: _e,
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
    return me(
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
function _e(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Bt(e, t) {
  return e ? me(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Qn(e, t) {
  return e ? V(e) && V(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : me(
    /* @__PURE__ */ Object.create(null),
    Yn(e),
    Yn(t ?? {})
  ) : t;
}
function dl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = me(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = _e(e[n], t[n]);
  return s;
}
function yr() {
  return {
    app: null,
    config: {
      isNativeTag: Ri,
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
    K(n) || (n = me({}, n)), i != null && !te(i) && (i = null);
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
          const y = d._ceVNode || ue(n, i);
          return y.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(y, u, w), c = !0, d._container = u, u.__vue_app__ = d, Bs(y.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        c && (De(
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
const gl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${$e(t)}Modifiers`] || e[`${ut(t)}Modifiers`];
function ml(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || ne;
  let i = s;
  const r = t.startsWith("update:"), o = r && gl(n, t.slice(7));
  o && (o.trim && (i = s.map((u) => fe(u) ? u.trim() : u)), o.number && (i = s.map(Cn)));
  let l, c = n[l = qs(t)] || // also try camelCase event handler (#2249)
  n[l = qs($e(t))];
  !c && r && (c = n[l = qs(ut(t))]), c && De(
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
    e.emitted[l] = !0, De(
      d,
      e,
      6,
      i
    );
  }
}
const vl = /* @__PURE__ */ new WeakMap();
function _r(e, t, s = !1) {
  const n = s ? vl : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {}, l = !1;
  if (!K(e)) {
    const c = (d) => {
      const u = _r(d, t, !0);
      u && (l = !0, me(o, u));
    };
    !s && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !l ? (te(e) && n.set(e, null), null) : (V(r) ? r.forEach((c) => o[c] = null) : me(o, r), te(e) && n.set(e, o), o);
}
function Hs(e, t) {
  return !e || !Ls(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Z(e, t[0].toLowerCase() + t.slice(1)) || Z(e, ut(t)) || Z(e, t));
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
    setupState: y,
    ctx: C,
    inheritAttrs: b
  } = e, A = Es(e);
  let F, j;
  try {
    if (s.shapeFlag & 4) {
      const P = i || n, W = P;
      F = Be(
        d.call(
          W,
          P,
          u,
          h,
          y,
          w,
          C
        )
      ), j = l;
    } else {
      const P = t;
      F = Be(
        P.length > 1 ? P(
          h,
          { attrs: l, slots: o, emit: c }
        ) : P(
          h,
          null
        )
      ), j = t.props ? l : yl(l);
    }
  } catch (P) {
    es.length = 0, js(P, e, 1), F = ue(at);
  }
  let G = F;
  if (j && b !== !1) {
    const P = Object.keys(j), { shapeFlag: W } = G;
    P.length && W & 7 && (r && P.some($s) && (j = _l(
      j,
      r
    )), G = Nt(G, j, !1, !0));
  }
  return s.dirs && (G = Nt(G, null, !1, !0), G.dirs = G.dirs ? G.dirs.concat(s.dirs) : s.dirs), s.transition && kn(G, s.transition), F = G, Es(A), F;
}
const yl = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Ls(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, _l = (e, t) => {
  const s = {};
  for (const n in e)
    (!$s(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function bl(e, t, s) {
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
        if (br(o, n, w) && !Hs(d, w))
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
    if (br(t, e, r) && !Hs(s, r))
      return !0;
  }
  return !1;
}
function br(e, t, s) {
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
  } = e, l = /* @__PURE__ */ X(i), [c] = e.propsOptions;
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
        const y = t[w];
        if (c)
          if (Z(r, w))
            y !== r[w] && (r[w] = y, d = !0);
          else {
            const C = $e(w);
            i[C] = vn(
              c,
              l,
              C,
              y,
              e,
              !1
            );
          }
        else
          y !== r[w] && (r[w] = y, d = !0);
      }
    }
  } else {
    Cr(e, t, i, r) && (d = !0);
    let u;
    for (const h in l)
      (!t || // for camelCase
      !Z(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = ut(h)) === h || !Z(t, u))) && (c ? s && // for camelCase
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
        (!t || !Z(t, h)) && (delete r[h], d = !0);
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
      i && Z(i, u = $e(c)) ? !r || !r.includes(u) ? s[u] = d : (l || (l = {}))[u] = d : Hs(e.emitsOptions, c) || (!(c in n) || d !== n[c]) && (n[c] = d, o = !0);
    }
  if (r) {
    const c = /* @__PURE__ */ X(s), d = l || ne;
    for (let u = 0; u < r.length; u++) {
      const h = r[u];
      s[h] = vn(
        i,
        c,
        h,
        d[h],
        e,
        !Z(d, h)
      );
    }
  }
  return o;
}
function vn(e, t, s, n, i, r) {
  const o = e[s];
  if (o != null) {
    const l = Z(o, "default");
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
      const [w, y] = Ir(h, t, !0);
      me(o, w), y && l.push(...y);
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !c)
    return te(e) && n.set(e, Rt), Rt;
  if (V(r))
    for (let u = 0; u < r.length; u++) {
      const h = $e(r[u]);
      si(h) && (o[h] = ne);
    }
  else if (r)
    for (const u in r) {
      const h = $e(u);
      if (si(h)) {
        const w = r[u], y = o[h] = V(w) || K(w) ? { type: w } : me({}, w), C = y.type;
        let b = !1, A = !0;
        if (V(C))
          for (let F = 0; F < C.length; ++F) {
            const j = C[F], G = K(j) && j.name;
            if (G === "Boolean") {
              b = !0;
              break;
            } else G === "String" && (A = !1);
          }
        else
          b = K(C) && C.name === "Boolean";
        y[
          0
          /* shouldCast */
        ] = b, y[
          1
          /* shouldCastTrue */
        ] = A, (b || Z(y, "default")) && l.push(h);
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
    i ? (Mr(n, t, s), s && ki(n, "_", i, !0)) : Er(t, n);
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
}, Ce = Ll;
function Ml(e) {
  return Rl(e);
}
function Rl(e, t) {
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
    setScopeId: y = ze,
    insertStaticContent: C
  } = e, b = (a, f, p, x = null, _ = null, m = null, M = void 0, E = null, I = !!f.dynamicChildren) => {
    if (a === f)
      return;
    a && !Ht(a, f) && (x = ps(a), Ne(a, _, m, !0), a = null), f.patchFlag === -2 && (I = !1, f.dynamicChildren = null);
    const { type: v, ref: U, shapeFlag: R } = f;
    switch (v) {
      case Ks:
        A(a, f, p, x);
        break;
      case at:
        F(a, f, p, x);
        break;
      case xs:
        a == null && j(f, p, x, M);
        break;
      case Q:
        le(
          a,
          f,
          p,
          x,
          _,
          m,
          M,
          E,
          I
        );
        break;
      default:
        R & 1 ? W(
          a,
          f,
          p,
          x,
          _,
          m,
          M,
          E,
          I
        ) : R & 6 ? ce(
          a,
          f,
          p,
          x,
          _,
          m,
          M,
          E,
          I
        ) : (R & 64 || R & 128) && v.process(
          a,
          f,
          p,
          x,
          _,
          m,
          M,
          E,
          I,
          Ft
        );
    }
    U != null && _ ? Xt(U, a && a.ref, m, f || a, !f) : U == null && a && a.ref != null && Xt(a.ref, null, m, a, !0);
  }, A = (a, f, p, x) => {
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
  }, F = (a, f, p, x) => {
    a == null ? n(
      f.el = c(f.children || ""),
      p,
      x
    ) : f.el = a.el;
  }, j = (a, f, p, x) => {
    [a.el, a.anchor] = C(
      a.children,
      f,
      p,
      x,
      a.el,
      a.anchor
    );
  }, G = ({ el: a, anchor: f }, p, x) => {
    let _;
    for (; a && a !== f; )
      _ = w(a), n(a, p, x), a = _;
    n(f, p, x);
  }, P = ({ el: a, anchor: f }) => {
    let p;
    for (; a && a !== f; )
      p = w(a), i(a), a = p;
    i(f);
  }, W = (a, f, p, x, _, m, M, E, I) => {
    if (f.type === "svg" ? M = "svg" : f.type === "math" && (M = "mathml"), a == null)
      ye(
        f,
        p,
        x,
        _,
        m,
        M,
        E,
        I
      );
    else {
      const v = a.el && a.el._isVueCE ? a.el : null;
      try {
        v && v._beginPatch(), T(
          a,
          f,
          _,
          m,
          M,
          E,
          I
        );
      } finally {
        v && v._endPatch();
      }
    }
  }, ye = (a, f, p, x, _, m, M, E) => {
    let I, v;
    const { props: U, shapeFlag: R, transition: D, dirs: H } = a;
    if (I = a.el = o(
      a.type,
      m,
      U && U.is,
      U
    ), R & 8 ? u(I, a.children) : R & 16 && L(
      a.children,
      I,
      null,
      x,
      _,
      sn(a, m),
      M,
      E
    ), H && pt(a, null, x, "created"), q(I, a, a.scopeId, M, x), U) {
      for (const se in U)
        se !== "value" && !Jt(se) && r(I, se, null, U[se], m, x);
      "value" in U && r(I, "value", null, U.value, m), (v = U.onVnodeBeforeMount) && Ve(v, x, a);
    }
    H && pt(a, null, x, "beforeMount");
    const Y = Pl(_, D);
    Y && D.beforeEnter(I), n(I, f, p), ((v = U && U.onVnodeMounted) || Y || H) && Ce(() => {
      try {
        v && Ve(v, x, a), Y && D.enter(I), H && pt(a, null, x, "mounted");
      } finally {
      }
    }, _);
  }, q = (a, f, p, x, _) => {
    if (p && y(a, p), x)
      for (let m = 0; m < x.length; m++)
        y(a, x[m]);
    if (_) {
      let m = _.subTree;
      if (f === m || Lr(m.type) && (m.ssContent === f || m.ssFallback === f)) {
        const M = _.vnode;
        q(
          a,
          M,
          M.scopeId,
          M.slotScopeIds,
          _.parent
        );
      }
    }
  }, L = (a, f, p, x, _, m, M, E, I = 0) => {
    for (let v = I; v < a.length; v++) {
      const U = a[v] = E ? Ze(a[v]) : Be(a[v]);
      b(
        null,
        U,
        f,
        p,
        x,
        _,
        m,
        M,
        E
      );
    }
  }, T = (a, f, p, x, _, m, M) => {
    const E = f.el = a.el;
    let { patchFlag: I, dynamicChildren: v, dirs: U } = f;
    I |= a.patchFlag & 16;
    const R = a.props || ne, D = f.props || ne;
    let H;
    if (p && gt(p, !1), (H = D.onVnodeBeforeUpdate) && Ve(H, p, f, a), U && pt(f, a, p, "beforeUpdate"), p && gt(p, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    v && (!a.dynamicChildren || a.dynamicChildren.length !== v.length) && (I = 0, M = !1, v = null), (R.innerHTML && D.innerHTML == null || R.textContent && D.textContent == null) && u(E, ""), v ? z(
      a.dynamicChildren,
      v,
      E,
      p,
      x,
      sn(f, _),
      m
    ) : M || re(
      a,
      f,
      E,
      null,
      p,
      x,
      sn(f, _),
      m,
      !1
    ), I > 0) {
      if (I & 16)
        ie(E, R, D, p, _);
      else if (I & 2 && R.class !== D.class && r(E, "class", null, D.class, _), I & 4 && r(E, "style", R.style, D.style, _), I & 8) {
        const Y = f.dynamicProps;
        for (let se = 0; se < Y.length; se++) {
          const ee = Y[se], he = R[ee], ge = D[ee];
          (ge !== he || ee === "value") && r(E, ee, he, ge, _, p);
        }
      }
      I & 1 && a.children !== f.children && u(E, f.children);
    } else !M && v == null && ie(E, R, D, p, _);
    ((H = D.onVnodeUpdated) || U) && Ce(() => {
      H && Ve(H, p, f, a), U && pt(f, a, p, "updated");
    }, x);
  }, z = (a, f, p, x, _, m, M) => {
    for (let E = 0; E < f.length; E++) {
      const I = a[E], v = f[E], U = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        I.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (I.type === Q || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ht(I, v) || // - In the case of a component, it could contain anything.
        I.shapeFlag & 198) ? h(I.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      b(
        I,
        v,
        U,
        null,
        x,
        _,
        m,
        M,
        !0
      );
    }
  }, ie = (a, f, p, x, _) => {
    if (f !== p) {
      if (f !== ne)
        for (const m in f)
          !Jt(m) && !(m in p) && r(
            a,
            m,
            f[m],
            null,
            _,
            x
          );
      for (const m in p) {
        if (Jt(m)) continue;
        const M = p[m], E = f[m];
        M !== E && m !== "value" && r(a, m, E, M, _, x);
      }
      "value" in p && r(a, "value", f.value, p.value, _);
    }
  }, le = (a, f, p, x, _, m, M, E, I) => {
    const v = f.el = a ? a.el : l(""), U = f.anchor = a ? a.anchor : l("");
    let { patchFlag: R, dynamicChildren: D, slotScopeIds: H } = f;
    H && (E = E ? E.concat(H) : H), a == null ? (n(v, p, x), n(U, p, x), L(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      p,
      U,
      _,
      m,
      M,
      E,
      I
    )) : R > 0 && R & 64 && D && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren && a.dynamicChildren.length === D.length ? (z(
      a.dynamicChildren,
      D,
      p,
      _,
      m,
      M,
      E
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || _ && f === _.subTree) && Rr(
      a,
      f,
      !0
      /* shallow */
    )) : re(
      a,
      f,
      p,
      U,
      _,
      m,
      M,
      E,
      I
    );
  }, ce = (a, f, p, x, _, m, M, E, I) => {
    f.slotScopeIds = E, a == null ? f.shapeFlag & 512 ? _.ctx.activate(
      f,
      p,
      x,
      M,
      I
    ) : ft(
      f,
      p,
      x,
      _,
      m,
      M,
      I
    ) : wt(a, f, I);
  }, ft = (a, f, p, x, _, m, M) => {
    const E = a.component = Fl(
      a,
      x,
      _
    );
    if (fr(a) && (E.ctx.renderer = Ft), jl(E, !1, M), E.asyncDep) {
      if (_ && _.registerDep(E, ae, M), !a.el) {
        const I = E.subTree = ue(at);
        F(null, I, f, p), a.placeholder = I.el;
      }
    } else
      ae(
        E,
        a,
        f,
        p,
        _,
        m,
        M
      );
  }, wt = (a, f, p) => {
    const x = f.component = a.component;
    if (bl(a, f, p))
      if (x.asyncDep && !x.asyncResolved) {
        J(x, f, p);
        return;
      } else
        x.next = f, x.update();
    else
      f.el = a.el, x.vnode = f;
  }, ae = (a, f, p, x, _, m, M) => {
    const E = () => {
      if (a.isMounted) {
        let { next: R, bu: D, u: H, parent: Y, vnode: se } = a;
        {
          const Fe = Pr(a);
          if (Fe) {
            R && (R.el = se.el, J(a, R, M)), Fe.asyncDep.then(() => {
              Ce(() => {
                a.isUnmounted || v();
              }, _);
            });
            return;
          }
        }
        let ee = R, he;
        gt(a, !1), R ? (R.el = se.el, J(a, R, M)) : R = se, D && bs(D), (he = R.props && R.props.onVnodeBeforeUpdate) && Ve(he, Y, R, se), gt(a, !0);
        const ge = ei(a), Ue = a.subTree;
        a.subTree = ge, b(
          Ue,
          ge,
          // parent may have changed if it's in a teleport
          h(Ue.el),
          // anchor may have changed if it's in a fragment
          ps(Ue),
          a,
          _,
          m
        ), R.el = ge.el, ee === null && xl(a, ge.el), H && Ce(H, _), (he = R.props && R.props.onVnodeUpdated) && Ce(
          () => Ve(he, Y, R, se),
          _
        );
      } else {
        let R;
        const { el: D, props: H } = f, { bm: Y, m: se, parent: ee, root: he, type: ge } = a, Ue = Zt(f);
        gt(a, !1), Y && bs(Y), !Ue && (R = H && H.onVnodeBeforeMount) && Ve(R, ee, f), gt(a, !0);
        {
          he.ce && he.ce._hasShadowRoot() && he.ce._injectChildStyle(
            ge,
            a.parent ? a.parent.type : void 0
          );
          const Fe = a.subTree = ei(a);
          b(
            null,
            Fe,
            p,
            x,
            a,
            _,
            m
          ), f.el = Fe.el;
        }
        if (se && Ce(se, _), !Ue && (R = H && H.onVnodeMounted)) {
          const Fe = f;
          Ce(
            () => Ve(R, ee, Fe),
            _
          );
        }
        (f.shapeFlag & 256 || ee && Zt(ee.vnode) && ee.vnode.shapeFlag & 256) && a.a && Ce(a.a, _), a.isMounted = !0, f = p = x = null;
      }
    };
    a.scope.on();
    const I = a.effect = new Hi(E);
    a.scope.off();
    const v = a.update = I.run.bind(I), U = a.job = I.runIfDirty.bind(I);
    U.i = a, U.id = a.uid, I.scheduler = () => On(U), gt(a, !0), v();
  }, J = (a, f, p) => {
    f.component = a;
    const x = a.vnode.props;
    a.vnode = f, a.next = null, Sl(a, f.props, x, p), Tl(a, f.children, p), Je(), Jn(a), Ge();
  }, re = (a, f, p, x, _, m, M, E, I = !1) => {
    const v = a && a.children, U = a ? a.shapeFlag : 0, R = f.children, { patchFlag: D, shapeFlag: H } = f;
    if (D > 0) {
      if (D & 128) {
        hs(
          v,
          R,
          p,
          x,
          _,
          m,
          M,
          E,
          I
        );
        return;
      } else if (D & 256) {
        dt(
          v,
          R,
          p,
          x,
          _,
          m,
          M,
          E,
          I
        );
        return;
      }
    }
    H & 8 ? (U & 16 && Ut(v, _, m), R !== v && u(p, R)) : U & 16 ? H & 16 ? hs(
      v,
      R,
      p,
      x,
      _,
      m,
      M,
      E,
      I
    ) : Ut(v, _, m, !0) : (U & 8 && u(p, ""), H & 16 && L(
      R,
      p,
      x,
      _,
      m,
      M,
      E,
      I
    ));
  }, dt = (a, f, p, x, _, m, M, E, I) => {
    a = a || Rt, f = f || Rt;
    const v = a.length, U = f.length, R = Math.min(v, U);
    let D;
    for (D = 0; D < R; D++) {
      const H = f[D] = I ? Ze(f[D]) : Be(f[D]);
      b(
        a[D],
        H,
        p,
        null,
        _,
        m,
        M,
        E,
        I
      );
    }
    v > U ? Ut(
      a,
      _,
      m,
      !0,
      !1,
      R
    ) : L(
      f,
      p,
      x,
      _,
      m,
      M,
      E,
      I,
      R
    );
  }, hs = (a, f, p, x, _, m, M, E, I) => {
    let v = 0;
    const U = f.length;
    let R = a.length - 1, D = U - 1;
    for (; v <= R && v <= D; ) {
      const H = a[v], Y = f[v] = I ? Ze(f[v]) : Be(f[v]);
      if (Ht(H, Y))
        b(
          H,
          Y,
          p,
          null,
          _,
          m,
          M,
          E,
          I
        );
      else
        break;
      v++;
    }
    for (; v <= R && v <= D; ) {
      const H = a[R], Y = f[D] = I ? Ze(f[D]) : Be(f[D]);
      if (Ht(H, Y))
        b(
          H,
          Y,
          p,
          null,
          _,
          m,
          M,
          E,
          I
        );
      else
        break;
      R--, D--;
    }
    if (v > R) {
      if (v <= D) {
        const H = D + 1, Y = H < U ? f[H].el : x;
        for (; v <= D; )
          b(
            null,
            f[v] = I ? Ze(f[v]) : Be(f[v]),
            p,
            Y,
            _,
            m,
            M,
            E,
            I
          ), v++;
      }
    } else if (v > D)
      for (; v <= R; )
        Ne(a[v], _, m, !0), v++;
    else {
      const H = v, Y = v, se = /* @__PURE__ */ new Map();
      for (v = Y; v <= D; v++) {
        const Ee = f[v] = I ? Ze(f[v]) : Be(f[v]);
        Ee.key != null && se.set(Ee.key, v);
      }
      let ee, he = 0;
      const ge = D - Y + 1;
      let Ue = !1, Fe = 0;
      const jt = new Array(ge);
      for (v = 0; v < ge; v++) jt[v] = 0;
      for (v = H; v <= R; v++) {
        const Ee = a[v];
        if (he >= ge) {
          Ne(Ee, _, m, !0);
          continue;
        }
        let je;
        if (Ee.key != null)
          je = se.get(Ee.key);
        else
          for (ee = Y; ee <= D; ee++)
            if (jt[ee - Y] === 0 && Ht(Ee, f[ee])) {
              je = ee;
              break;
            }
        je === void 0 ? Ne(Ee, _, m, !0) : (jt[je - Y] = v + 1, je >= Fe ? Fe = je : Ue = !0, b(
          Ee,
          f[je],
          p,
          null,
          _,
          m,
          M,
          E,
          I
        ), he++);
      }
      const jn = Ue ? Al(jt) : Rt;
      for (ee = jn.length - 1, v = ge - 1; v >= 0; v--) {
        const Ee = Y + v, je = f[Ee], Vn = f[Ee + 1], Hn = Ee + 1 < U ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Vn.el || Ar(Vn)
        ) : x;
        jt[v] === 0 ? b(
          null,
          je,
          p,
          Hn,
          _,
          m,
          M,
          E,
          I
        ) : Ue && (ee < 0 || v !== jn[ee] ? ht(je, p, Hn, 2) : ee--);
      }
    }
  }, ht = (a, f, p, x, _ = null) => {
    const { el: m, type: M, transition: E, children: I, shapeFlag: v } = a;
    if (v & 6) {
      ht(a.component.subTree, f, p, x);
      return;
    }
    if (v & 128) {
      a.suspense.move(f, p, x);
      return;
    }
    if (v & 64) {
      M.move(a, f, p, Ft);
      return;
    }
    if (M === Q) {
      n(m, f, p);
      for (let R = 0; R < I.length; R++)
        ht(I[R], f, p, x);
      n(a.anchor, f, p);
      return;
    }
    if (M === xs) {
      G(a, f, p);
      return;
    }
    if (x !== 2 && v & 1 && E)
      if (x === 0)
        E.persisted && !m[en] ? n(m, f, p) : (E.beforeEnter(m), n(m, f, p), Ce(() => E.enter(m), _));
      else {
        const { leave: R, delayLeave: D, afterLeave: H } = E, Y = () => {
          a.ctx.isUnmounted ? i(m) : n(m, f, p);
        }, se = () => {
          const ee = m._isLeaving || !!m[en];
          m._isLeaving && m[en](
            !0
            /* cancelled */
          ), E.persisted && !ee ? Y() : R(m, () => {
            Y(), H && H();
          });
        };
        D ? D(m, Y, se) : se();
      }
    else
      n(m, f, p);
  }, Ne = (a, f, p, x = !1, _ = !1) => {
    const {
      type: m,
      props: M,
      ref: E,
      children: I,
      dynamicChildren: v,
      shapeFlag: U,
      patchFlag: R,
      dirs: D,
      cacheIndex: H,
      memo: Y
    } = a;
    if (R === -2 && (_ = !1), E != null && (Je(), Xt(E, null, p, a, !0), Ge()), H != null && (f.renderCache[H] = void 0), U & 256) {
      f.ctx.deactivate(a);
      return;
    }
    const se = U & 1 && D, ee = !Zt(a);
    let he;
    if (ee && (he = M && M.onVnodeBeforeUnmount) && Ve(he, f, a), U & 6)
      Yr(a.component, p, x);
    else {
      if (U & 128) {
        a.suspense.unmount(p, x);
        return;
      }
      se && pt(a, null, f, "beforeUnmount"), U & 64 ? a.type.remove(
        a,
        f,
        p,
        Ft,
        x
      ) : v && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !v.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (m !== Q || R > 0 && R & 64) ? Ut(
        v,
        f,
        p,
        !1,
        !0
      ) : (m === Q && R & 384 || !_ && U & 16) && Ut(I, f, p), x && Un(a);
    }
    const ge = Y != null && H == null;
    (ee && (he = M && M.onVnodeUnmounted) || se || ge) && Ce(() => {
      he && Ve(he, f, a), se && pt(a, null, f, "unmounted"), ge && (a.el = null);
    }, p);
  }, Un = (a) => {
    const { type: f, el: p, anchor: x, transition: _ } = a;
    if (f === Q) {
      qr(p, x);
      return;
    }
    if (f === xs) {
      P(a);
      return;
    }
    const m = () => {
      i(p), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (a.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: M, delayLeave: E } = _, I = () => M(p, m);
      E ? E(a.el, m, I) : I();
    } else
      m();
  }, qr = (a, f) => {
    let p;
    for (; a !== f; )
      p = w(a), i(a), a = p;
    i(f);
  }, Yr = (a, f, p) => {
    const { bum: x, scope: _, job: m, subTree: M, um: E, m: I, a: v } = a;
    ni(I), ni(v), x && bs(x), _.stop(), m && (m.flags |= 8, Ne(M, a, f, p)), E && Ce(E, f), Ce(() => {
      a.isUnmounted = !0;
    }, f);
  }, Ut = (a, f, p, x = !1, _ = !1, m = 0) => {
    for (let M = m; M < a.length; M++)
      Ne(a[M], f, p, x, _);
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
    a == null ? f._vnode && (Ne(f._vnode, null, null, !0), x = f._vnode.component) : b(
      f._vnode || null,
      a,
      f,
      null,
      null,
      null,
      p
    ), f._vnode = a, Gs || (Gs = !0, Jn(x), rr(), Gs = !1);
  }, Ft = {
    p: b,
    um: Ne,
    m: ht,
    r: Un,
    mt: ft,
    mc: L,
    pc: re,
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
function Pl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Rr(e, t, s = !1) {
  const n = e.children, i = t.children;
  if (V(n) && V(i))
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = Ze(i[r]), l.el = o.el), !s && l.patchFlag !== -2 && Rr(o, l)), l.type === Ks && (l.patchFlag === -1 && (l = i[r] = Ze(l)), l.el = o.el), l.type === at && !l.el && (l.el = o.el);
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
function Pr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Pr(t);
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
const Q = /* @__PURE__ */ Symbol.for("v-fgt"), Ks = /* @__PURE__ */ Symbol.for("v-txt"), at = /* @__PURE__ */ Symbol.for("v-cmt"), xs = /* @__PURE__ */ Symbol.for("v-stc"), es = [];
let Te = null;
function O(e = !1) {
  es.push(Te = e ? null : []);
}
function $l() {
  es.pop(), Te = es[es.length - 1] || null;
}
let ls = 1;
function ii(e, t = !1) {
  ls += e, e < 0 && Te && t && (Te.hasOnce = !0);
}
function $r(e) {
  return e.dynamicChildren = ls > 0 ? Te || Rt : null, $l(), ls > 0 && Te && Te.push(e), e;
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
function Or(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ht(e, t) {
  return e.type === t.type && e.key === t.key;
}
const kr = ({ key: e }) => e ?? null, ws = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? fe(e) || /* @__PURE__ */ de(e) || K(e) ? { i: Pe, r: e, k: t, f: !!s } : e : null);
function g(e, t = null, s = null, n = 0, i = null, r = e === Q ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && kr(t),
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
  return l ? (Rs(c, s), r & 128 && e.normalize(c)) : s && (c.shapeFlag |= fe(s) ? 8 : 16), ls > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Te && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Te.push(c), c;
}
const ue = Ol;
function Ol(e, t = null, s = null, n = 0, i = null, r = !1) {
  if ((!e || e === ol) && (e = at), Or(e)) {
    const l = Nt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Rs(l, s), ls > 0 && !r && Te && (l.shapeFlag & 6 ? Te[Te.indexOf(e)] = l : Te.push(l)), l.patchFlag = -2, l;
  }
  if (Bl(e) && (e = e.__vccOpts), t) {
    t = kl(t);
    let { class: l, style: c } = t;
    l && !fe(l) && (t.class = Ae(l)), te(c) && (/* @__PURE__ */ Fs(c) && !V(c) && (c = me({}, c)), t.style = In(c));
  }
  const o = fe(e) ? 1 : Lr(e) ? 128 : qo(e) ? 64 : te(e) ? 4 : K(e) ? 2 : 0;
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
function kl(e) {
  return e ? /* @__PURE__ */ Fs(e) || Sr(e) ? me({}, e) : e : null;
}
function Nt(e, t, s = !1, n = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: c } = e, d = t ? Dl(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && kr(d),
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
    patchFlag: t && e.type !== Q ? o === -1 ? 16 : o | 16 : o,
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
  return c && n && kn(
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
function Ie(e = "", t = !1) {
  return t ? (O(), ct(at, null, e)) : ue(at, null, e);
}
function Be(e) {
  return e == null || typeof e == "boolean" ? ue(at) : V(e) ? ue(
    Q,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Or(e) ? Ze(e) : ue(Ks, null, String(e));
}
function Ze(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Nt(e);
}
function Rs(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (V(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Rs(e, i()), i._c && (i._d = !0));
      return;
    } else {
      s = 32;
      const i = t._;
      !i && !Sr(t) ? t._ctx = Pe : i === 3 && Pe && (Pe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (K(t)) {
    if (n & 65) {
      Rs(e, { default: t });
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
        t.class !== n.class && (t.class = Ae([t.class, n.class]));
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
  De(e, t, 7, [
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
    emitsOptions: _r(n, i),
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
let Se = null;
const Nr = () => Se || Pe;
let Ps, yn;
{
  const e = Ds(), t = (s, n) => {
    let i;
    return (i = e[s]) || (i = e[s] = []), i.push(n), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  Ps = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => Se = s
  ), yn = t(
    "__VUE_SSR_SETTERS__",
    (s) => cs = s
  );
}
const fs = (e) => {
  const t = Se;
  return Ps(e), e.scope.on(), () => {
    e.scope.off(), Ps(t);
  };
}, ri = () => {
  Se && Se.scope.off(), Ps(null);
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
let _n;
const li = typeof window < "u" && window.trustedTypes;
if (li)
  try {
    _n = /* @__PURE__ */ li.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const jr = _n ? (e) => _n.createHTML(e) : (e) => e, zl = "http://www.w3.org/2000/svg", Jl = "http://www.w3.org/1998/Math/MathML", Ye = typeof document < "u" ? document : null, ci = Ye && /* @__PURE__ */ Ye.createElement("template"), Gl = {
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
  const n = e.style, i = fe(s);
  let r = !1;
  if (s && !i) {
    if (t)
      if (fe(t))
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
        !fe(t) && t ? t[o] : void 0,
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
  let n = $e(t);
  if (n !== "filter" && n in e)
    return rn[t] = n;
  n = Oi(n);
  for (let i = 0; i < fi.length; i++) {
    const r = fi[i] + n;
    if (r in e)
      return rn[t] = r;
  }
  return t;
}
function sc(e, t, s, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && fe(n) && s === n;
}
const di = "http://www.w3.org/1999/xlink";
function hi(e, t, s, n, i, r = oo(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(di, t.slice(6, t.length)) : e.setAttributeNS(di, t, s) : s == null || r && !Di(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Le(s) ? String(s) : s
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
        d && De(
          d,
          t,
          5,
          l
        );
      }
    } else
      De(
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
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !fe(n))) ? pi(e, $e(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), hi(e, t, n, o));
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
  return mi(t) && fe(s) ? !1 : t in e;
}
function hc(e, t) {
  const s = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!s)
    return !1;
  const n = $e(t);
  return Array.isArray(s) ? s.some((i) => $e(i) === n) : Object.keys(s).some((i) => $e(i) === n);
}
const vi = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return V(t) ? (s) => bs(t, s) : t;
};
function pc(e) {
  e.target.composing = !0;
}
function yi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ln = /* @__PURE__ */ Symbol("_assign");
function _i(e, t, s) {
  return t && (e = e.trim()), s && (e = Cn(e)), e;
}
const zt = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, i) {
    e[ln] = vi(i);
    const r = n || i.props && i.props.type === "number";
    Tt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[ln](_i(e.value, s, r));
    }), (s || r) && Tt(e, "change", () => {
      e.value = _i(e.value, s, r);
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
}, yc = /* @__PURE__ */ me({ patchProp: fc }, Gl);
let bi;
function _c() {
  return bi || (bi = Ml(yc));
}
const Hr = (...e) => {
  const t = _c().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const i = xc(n);
    if (!i) return;
    const r = t._component;
    !K(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = s(i, !1, bc(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
};
function bc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function xc(e) {
  return fe(e) ? document.querySelector(e) : e;
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
function bn(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var ts;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(ts || (ts = {}));
function wc() {
  const e = ji(!0), t = e.run(() => /* @__PURE__ */ Re({}));
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
    bn(i) && bn(n) && e.hasOwnProperty(s) && !/* @__PURE__ */ de(n) && !/* @__PURE__ */ st(n) ? e[s] = xn(i, n) : e[s] = n;
  }
  return e;
}
const Cc = (
  /* istanbul ignore next */
  Symbol()
);
function Ic(e) {
  return !bn(e) || !e.hasOwnProperty(Cc);
}
const { assign: rt } = Object;
function Ec(e) {
  return !!(/* @__PURE__ */ de(e) && e.effect);
}
function Tc(e, t, s, n) {
  const { state: i, actions: r, getters: o } = t, l = s.state.value[e];
  let c;
  function d() {
    l || (s.state.value[e] = i ? i() : {});
    const u = /* @__PURE__ */ Lo(s.state.value[e]);
    return rt(u, r, Object.keys(o || {}).reduce((h, w) => (h[w] = $n(tt(() => {
      zs(s);
      const y = s._s.get(e);
      return o[w].call(y, y);
    })), h), {}));
  }
  return c = zr(e, d, t, s, n, !0), c;
}
function zr(e, t, s = {}, n, i, r) {
  let o;
  const l = rt({ actions: {} }, s), c = { deep: !0 };
  let d, u, h = [], w = [], y;
  const C = n.state.value[e];
  !r && !C && (n.state.value[e] = {});
  let b;
  function A(L) {
    let T;
    d = u = !1, typeof L == "function" ? (L(n.state.value[e]), T = {
      type: ts.patchFunction,
      storeId: e,
      events: y
    }) : (xn(n.state.value[e], L), T = {
      type: ts.patchObject,
      payload: L,
      storeId: e,
      events: y
    });
    const z = b = Symbol();
    lt().then(() => {
      b === z && (d = !0);
    }), u = !0, Ct(h, T, n.state.value[e]);
  }
  const F = r ? function() {
    const { state: T } = s, z = T ? T() : {};
    this.$patch((ie) => {
      rt(ie, z);
    });
  } : (
    /* istanbul ignore next */
    Wr
  );
  function j() {
    o.stop(), h = [], w = [], n._s.delete(e);
  }
  const G = (L, T = "") => {
    if (wi in L)
      return L[cn] = T, L;
    const z = function() {
      zs(n);
      const ie = Array.from(arguments), le = [], ce = [];
      function ft(J) {
        le.push(J);
      }
      function wt(J) {
        ce.push(J);
      }
      Ct(w, {
        args: ie,
        name: z[cn],
        store: W,
        after: ft,
        onError: wt
      });
      let ae;
      try {
        ae = L.apply(this && this.$id === e ? this : W, ie);
      } catch (J) {
        throw Ct(ce, J), J;
      }
      return ae instanceof Promise ? ae.then((J) => (Ct(le, J), J)).catch((J) => (Ct(ce, J), Promise.reject(J))) : (Ct(le, ae), ae);
    };
    return z[wi] = !0, z[cn] = T, z;
  }, P = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: xi.bind(null, w),
    $patch: A,
    $reset: F,
    $subscribe(L, T = {}) {
      const z = xi(h, L, T.detached, () => ie()), ie = o.run(() => Lt(() => n.state.value[e], (le) => {
        (T.flush === "sync" ? u : d) && L({
          storeId: e,
          type: ts.direct,
          events: y
        }, le);
      }, rt({}, c, T)));
      return z;
    },
    $dispose: j
  }, W = /* @__PURE__ */ Us(P);
  n._s.set(e, W);
  const q = (n._a && n._a.runWithContext || Sc)(() => n._e.run(() => (o = ji()).run(() => t({ action: G }))));
  for (const L in q) {
    const T = q[L];
    if (/* @__PURE__ */ de(T) && !Ec(T) || /* @__PURE__ */ st(T))
      r || (C && Ic(T) && (/* @__PURE__ */ de(T) ? T.value = C[L] : xn(T, C[L])), n.state.value[e][L] = T);
    else if (typeof T == "function") {
      const z = G(T, L);
      q[L] = z, l.actions[L] = T;
    }
  }
  return rt(W, q), rt(/* @__PURE__ */ X(W), q), Object.defineProperty(W, "$state", {
    get: () => n.state.value[e],
    set: (L) => {
      A((T) => {
        rt(T, L);
      });
    }
  }), n._p.forEach((L) => {
    rt(W, o.run(() => L({
      store: W,
      app: n._a,
      pinia: n,
      options: l
    })));
  }), C && r && s.hydrate && s.hydrate(W.$state, C), d = !0, u = !0, W;
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
const xe = /* @__PURE__ */ Js("settings", {
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
class Rc {
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
function Pc(e) {
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
class Oc {
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
class kc {
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
        return new Oc({ baseURL: i.baseURL, apiBase: i.apiBase });
      case "local":
        return new kc({
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
  "Invalid JSON": "JSON 格式错误"
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
function k(e) {
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
      return xe().settings.playMode;
    }
  },
  actions: {
    init(e) {
      this.chatIndexer = e;
    },
    setChatId(e) {
      this.chatId = e, this.list = this.list.filter((n) => n.source !== "chat"), this.loadFromStorage();
      const s = xe().storage;
      if (s) {
        const n = s.getMetadata(Ii);
        n && n.chatId === e && this.chatIndexer?.setCursor(e, n.lastScannedMessageId);
      }
    },
    loadFromStorage() {
      const t = xe().storage;
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
      const s = xe(), n = s.storage;
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
        console.warn(`[playlist] resolve failed for "${t.song}"`), typeof toastr < "u" && toastr.warning(`${k("Cannot play")}: ${t.song}`);
        return;
      }
      await bt().loadAndPlay(i);
    },
    handleNewCues(e) {
      if (e.length === 0) return;
      const t = xe();
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
      const t = xe(), s = this.chatIndexer.scanMessage(
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
      const t = xe().storage;
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
      const s = xe().storage;
      s && s.setMetadata(Ii, {
        chatId: this.chatId,
        lastScannedMessageId: e,
        updatedAt: Date.now()
      });
    }
  }
}), bt = /* @__PURE__ */ Js("player", {
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
      const e = new Rc();
      this.audioEngine = e;
      const t = bt();
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
      this.volume = e, this.audioEngine?.setVolume(e / 100), xe().setVolume(e);
    },
    updateLyrics(e) {
      this.lyrics = Pc(e), this.currentLyricIndex = -1;
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
}, Wc = /* @__PURE__ */ _t({
  __name: "Icon",
  props: {
    name: {},
    size: {}
  },
  setup(e) {
    return (t, s) => (O(), N("svg", {
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
      e.name === "play" ? (O(), N("polygon", Vc)) : e.name === "pause" ? (O(), N(Q, { key: 1 }, [
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
      ], 64)) : e.name === "prev" ? (O(), N(Q, { key: 2 }, [
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
      ], 64)) : e.name === "next" ? (O(), N(Q, { key: 3 }, [
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
      ], 64)) : e.name === "repeat" ? (O(), N(Q, { key: 4 }, [
        s[6] || (s[6] = g("polyline", { points: "17 1 21 5 17 9" }, null, -1)),
        s[7] || (s[7] = g("path", { d: "M3 11V9a4 4 0 0 1 4-4h14" }, null, -1)),
        s[8] || (s[8] = g("polyline", { points: "7 23 3 19 7 15" }, null, -1)),
        s[9] || (s[9] = g("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" }, null, -1))
      ], 64)) : e.name === "repeat-one" ? (O(), N(Q, { key: 5 }, [
        s[10] || (s[10] = nn('<polyline points="17 1 21 5 17 9" data-v-287bc27a></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14" data-v-287bc27a></path><polyline points="7 23 3 19 7 15" data-v-287bc27a></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3" data-v-287bc27a></path><text x="12" y="14" text-anchor="middle" font-size="8" fill="currentColor" stroke="none" font-weight="bold" data-v-287bc27a>1</text>', 5))
      ], 64)) : e.name === "shuffle" ? (O(), N(Q, { key: 6 }, [
        s[11] || (s[11] = nn('<polyline points="16 3 21 3 21 8" data-v-287bc27a></polyline><line x1="4" y1="20" x2="21" y2="3" data-v-287bc27a></line><polyline points="21 16 21 21 16 21" data-v-287bc27a></polyline><line x1="15" y1="15" x2="21" y2="21" data-v-287bc27a></line><line x1="4" y1="4" x2="9" y2="9" data-v-287bc27a></line>', 5))
      ], 64)) : e.name === "search" ? (O(), N(Q, { key: 7 }, [
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
      ], 64)) : e.name === "plus" ? (O(), N(Q, { key: 8 }, [
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
      ], 64)) : e.name === "x" ? (O(), N(Q, { key: 9 }, [
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
      ], 64)) : e.name === "chevron-down" ? (O(), N("polyline", Hc)) : e.name === "chevron-up" ? (O(), N("polyline", Kc)) : e.name === "music" ? (O(), N(Q, { key: 12 }, [
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
      ], 64)) : e.name === "volume" ? (O(), N(Q, { key: 13 }, [
        s[21] || (s[21] = g("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[22] || (s[22] = g("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1)),
        s[23] || (s[23] = g("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }, null, -1))
      ], 64)) : e.name === "volume-mute" ? (O(), N(Q, { key: 14 }, [
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
      ], 64)) : e.name === "check" ? (O(), N("polyline", Bc)) : e.name === "loader" ? (O(), N(Q, { key: 16 }, [
        s[27] || (s[27] = nn('<line x1="12" y1="2" x2="12" y2="6" data-v-287bc27a></line><line x1="12" y1="18" x2="12" y2="22" data-v-287bc27a></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" data-v-287bc27a></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" data-v-287bc27a></line><line x1="2" y1="12" x2="6" y2="12" data-v-287bc27a></line><line x1="18" y1="12" x2="22" y2="12" data-v-287bc27a></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" data-v-287bc27a></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" data-v-287bc27a></line>', 8))
      ], 64)) : Ie("", !0)
    ], 8, jc));
  }
}), xt = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, i] of t)
    s[n] = i;
  return s;
}, be = /* @__PURE__ */ xt(Wc, [["__scopeId", "data-v-287bc27a"]]), zc = { class: "stmp-collapsed-bar" }, Jc = { class: "stmp-collapsed-title" }, Gc = ["aria-label"], qc = /* @__PURE__ */ _t({
  __name: "CollapsedBar",
  setup(e) {
    const t = bt(), s = tt(() => t.currentTrack?.name || k("No Song"));
    return (n, i) => (O(), N("div", zc, [
      ue(be, {
        name: "music",
        size: 14,
        class: "stmp-collapsed-icon"
      }),
      g("span", Jc, B(s.value), 1),
      g("button", {
        class: "stmp-icon-btn",
        "aria-label": S(t).isPlaying ? S(k)("Pause") : S(k)("Play"),
        onClick: i[0] || (i[0] = Ws((r) => S(t).togglePlay(), ["stop"]))
      }, [
        ue(be, {
          name: S(t).isPlaying ? "pause" : "play",
          size: 16
        }, null, 8, ["name"])
      ], 8, Gc)
    ]));
  }
}), Yc = /* @__PURE__ */ xt(qc, [["__scopeId", "data-v-eb242a58"]]), Xc = { class: "stmp-playlist" }, Zc = { class: "stmp-upload-area" }, Qc = ["aria-label"], ea = {
  key: 0,
  class: "stmp-empty"
}, ta = { class: "stmp-group-label" }, sa = ["onClick"], na = { class: "stmp-item-index" }, ia = { class: "stmp-item-info" }, ra = { class: "stmp-item-song" }, oa = {
  key: 0,
  class: "stmp-item-artist"
}, la = ["onClick"], ca = /* @__PURE__ */ _t({
  __name: "PlaylistView",
  setup(e) {
    const t = ds(), s = xe(), n = /* @__PURE__ */ Re(null), i = () => {
      n.value?.click();
    }, r = async (u) => {
      const h = u.target;
      if (!h.files || !h.files[0]) return;
      const w = h.files[0], y = `stmp:audio:${Date.now()}-${w.name}`, C = s.storage;
      C && (await C.setBlob(y, w), t.addLocalFile(w.name, y)), h.value = "";
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
      chat: k("From Chat"),
      user: k("My List"),
      local: k("Local Files")
    };
    function c(u) {
      t.play(u);
    }
    function d(u) {
      t.removeItem(u);
    }
    return (u, h) => (O(), N("div", Xc, [
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
          "aria-label": S(k)("Add local file"),
          onClick: i
        }, " + " + B(S(k)("Add local file")), 9, Qc)
      ]),
      S(t).isEmpty ? (O(), N("div", ea, B(S(k)("No Songs")), 1)) : (O(), N(Q, { key: 1 }, $t(["chat", "user", "local"], (w) => g("div", {
        key: w,
        class: "stmp-group"
      }, [
        o.value[w].length ? (O(), N(Q, { key: 0 }, [
          g("div", ta, B(l[w]), 1),
          (O(!0), N(Q, null, $t(o.value[w], (y) => (O(), N("div", {
            key: y.item.id,
            class: Ae(["stmp-item", { active: y.index === S(t).currentIndex }]),
            onClick: (C) => c(y.index)
          }, [
            g("span", na, B(y.index + 1), 1),
            g("div", ia, [
              g("span", ra, B(y.item.song), 1),
              y.item.artist ? (O(), N("span", oa, B(y.item.artist), 1)) : Ie("", !0)
            ]),
            g("button", {
              class: "stmp-item-del",
              onClick: Ws((C) => d(y.index), ["stop"])
            }, [
              ue(be, {
                name: "x",
                size: 14
              })
            ], 8, la)
          ], 10, sa))), 128))
        ], 64)) : Ie("", !0)
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
  class: "stmp-search-hint"
}, _a = {
  key: 4,
  class: "stmp-results"
}, ba = ["onClick"], xa = { class: "stmp-result-name" }, wa = {
  key: 0,
  class: "stmp-result-artist"
}, Sa = ["aria-label", "onClick"], Ca = /* @__PURE__ */ _t({
  __name: "SearchView",
  setup(e) {
    const t = Fc(), s = ds(), n = xe(), i = /* @__PURE__ */ Re(t.keyword), r = /* @__PURE__ */ Re(/* @__PURE__ */ new Set()), o = /* @__PURE__ */ Re(null);
    async function l() {
      t.setKeyword(i.value);
      const y = Jr(n.settings.providers);
      await t.search(y);
    }
    const c = () => {
      l();
    };
    function d(y) {
      const C = y.provider + y.id;
      if (o.value === C) return;
      o.value = C;
      const b = s.list.length;
      s.addFromSearch(y);
      const A = s.list.length - 1;
      A >= b && s.play(A), setTimeout(() => {
        r.value.add(C), o.value = null;
      }, 600);
    }
    function u(y) {
      const C = y.provider + y.id;
      r.value.has(C) || (s.addFromSearch(y), r.value.add(C));
    }
    function h(y) {
      return r.value.has(y.provider + y.id);
    }
    function w(y) {
      return o.value === y.provider + y.id;
    }
    return (y, C) => (O(), N("div", ua, [
      g("div", fa, [
        Kt(g("input", {
          "onUpdate:modelValue": C[0] || (C[0] = (b) => i.value = b),
          class: "stmp-search-input",
          placeholder: S(k)("Search Song..."),
          onKeydown: Vr(l, ["enter"])
        }, null, 40, da), [
          [zt, i.value]
        ]),
        g("button", {
          class: "stmp-icon-btn",
          disabled: S(t).isSearching,
          onClick: l
        }, [
          S(t).isSearching ? (O(), ct(be, {
            key: 1,
            name: "loader",
            size: 16,
            class: "stmp-spin"
          })) : (O(), ct(be, {
            key: 0,
            name: "search",
            size: 16
          }))
        ], 8, ha)
      ]),
      S(t).error ? (O(), N("div", pa, [
        g("span", null, B(S(t).error), 1),
        g("button", {
          class: "stmp-retry-btn",
          "aria-label": S(k)("Retry"),
          onClick: c
        }, B(S(k)("Retry")), 9, ga)
      ])) : Ie("", !0),
      S(t).isSearching ? (O(), N("div", ma, B(S(k)("Searching...")), 1)) : i.value && !S(t).results.length ? (O(), N("div", va, B(S(k)("No results")), 1)) : !i.value && !S(t).results.length ? (O(), N("div", ya, B(S(k)("Type a song name to search")), 1)) : Ie("", !0),
      S(t).results.length ? (O(), N("div", _a, [
        (O(!0), N(Q, null, $t(S(t).results, (b) => (O(), N("div", {
          key: b.provider + b.id,
          class: Ae(["stmp-result", { "stmp-result-playing": w(b) }])
        }, [
          g("div", {
            class: "stmp-result-info",
            onClick: (A) => d(b)
          }, [
            g("span", xa, B(b.name), 1),
            b.artist ? (O(), N("span", wa, B(b.artist), 1)) : Ie("", !0)
          ], 8, ba),
          g("button", {
            class: Ae(["stmp-icon-btn stmp-result-add", { added: h(b) }]),
            "aria-label": h(b) ? S(k)("Added") : S(k)("Add to list"),
            onClick: Ws((A) => u(b), ["stop"])
          }, [
            ue(be, {
              name: h(b) ? "check" : "plus",
              size: 16
            }, null, 8, ["name"])
          ], 10, Sa)
        ], 2))), 128))
      ])) : Ie("", !0)
    ]));
  }
}), Ia = /* @__PURE__ */ xt(Ca, [["__scopeId", "data-v-2ca067b0"]]), Ea = { class: "stmp-panel" }, Ta = { class: "stmp-topbar stmp-drag-handle" }, Ma = { class: "stmp-cover" }, Ra = ["src"], Pa = { class: "stmp-track-info" }, Aa = { class: "stmp-track-name" }, La = {
  key: 0,
  class: "stmp-track-artist"
}, $a = ["aria-label"], Oa = {
  key: 0,
  class: "stmp-lyric-current"
}, ka = {
  key: 1,
  class: "stmp-lyric-next"
}, Da = {
  key: 2,
  class: "stmp-lyric-empty"
}, Na = { class: "stmp-progress" }, Ua = ["value"], Fa = { class: "stmp-time" }, ja = { class: "stmp-controls" }, Va = ["aria-label"], Ha = ["aria-label"], Ka = ["aria-label"], Ba = ["aria-label"], Wa = ["aria-label"], za = ["value"], Ja = { class: "stmp-tabs" }, Ga = { class: "stmp-tab-content" }, qa = /* @__PURE__ */ _t({
  __name: "PlayerPanel",
  emits: ["collapse"],
  setup(e) {
    const t = bt(), s = ds(), n = xe(), i = /* @__PURE__ */ Re("list"), r = /* @__PURE__ */ Re(!0), o = /* @__PURE__ */ Re(!1), l = /* @__PURE__ */ Re(!1);
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
    ), y = tt(() => {
      const q = t.currentLyricIndex;
      return q < 0 ? null : t.lyrics[q + 1]?.text ?? null;
    });
    function C(q) {
      const L = Math.floor(q / 60), T = Math.floor(q % 60);
      return L + ":" + T.toString().padStart(2, "0");
    }
    function b(q) {
      const L = q.target;
      t.seek(Number(L.value) / 100 * t.duration);
    }
    const A = ["list", "random", "single"], F = {
      list: "repeat",
      random: "shuffle",
      single: "repeat-one"
    };
    function j() {
      const q = n.settings.playMode, L = A.indexOf(q), T = A[(L + 1) % A.length];
      n.setPlayMode(T);
    }
    function G(q) {
      const L = q.target;
      t.setVolume(Number(L.value));
    }
    function P() {
      c && clearTimeout(c), l.value = !0;
    }
    function W() {
      c = setTimeout(() => {
        l.value = !1;
      }, 300);
    }
    function ye() {
      t.volume > 0 ? t.setVolume(0) : t.setVolume(65);
    }
    return (q, L) => (O(), N("div", Ea, [
      g("div", Ta, [
        g("div", Ma, [
          d.value && !o.value ? (O(), N("img", {
            key: 0,
            src: d.value,
            alt: "cover",
            onError: u
          }, null, 40, Ra)) : (O(), ct(be, {
            key: 1,
            name: "music",
            size: 24
          }))
        ]),
        g("div", Pa, [
          g("div", Aa, B(S(t).currentTrack?.name || S(k)("No Song")), 1),
          S(t).currentTrack?.artist ? (O(), N("div", La, B(S(t).currentTrack.artist), 1)) : Ie("", !0)
        ]),
        g("button", {
          class: "stmp-icon-btn",
          "aria-label": S(k)("Collapse panel"),
          onClick: L[0] || (L[0] = Ws((T) => q.$emit("collapse"), ["stop"]))
        }, [
          ue(be, {
            name: "chevron-down",
            size: 18
          })
        ], 8, $a)
      ]),
      r.value ? (O(), N("div", {
        key: 0,
        class: "stmp-lyrics",
        onClick: L[1] || (L[1] = (T) => r.value = !1)
      }, [
        w.value ? (O(), N("div", Oa, B(w.value), 1)) : Ie("", !0),
        y.value ? (O(), N("div", ka, B(y.value), 1)) : Ie("", !0),
        !w.value && !y.value ? (O(), N("div", Da, [
          ue(be, {
            name: "music",
            size: 18
          })
        ])) : Ie("", !0)
      ])) : (O(), N("div", {
        key: 1,
        class: "stmp-lyrics-toggle",
        onClick: L[2] || (L[2] = (T) => r.value = !0)
      }, [
        ue(be, {
          name: "chevron-up",
          size: 14
        }),
        Dr(" " + B(S(k)("show lyrics")), 1)
      ])),
      g("div", Na, [
        g("input", {
          type: "range",
          min: "0",
          max: "100",
          step: "0.1",
          value: h.value,
          class: "stmp-range",
          onInput: b
        }, null, 40, Ua),
        g("div", Fa, [
          g("span", null, B(C(S(t).currentTime)), 1),
          g("span", null, B(C(S(t).duration)), 1)
        ])
      ]),
      g("div", ja, [
        g("button", {
          class: "stmp-ctrl-btn",
          "aria-label": S(k)("Toggle play mode"),
          onClick: j
        }, [
          ue(be, {
            name: F[S(n).settings.playMode],
            size: 18
          }, null, 8, ["name"])
        ], 8, Va),
        g("button", {
          class: "stmp-ctrl-btn",
          "aria-label": S(k)("Previous"),
          onClick: L[3] || (L[3] = (T) => S(s).prev())
        }, [
          ue(be, {
            name: "prev",
            size: 18
          })
        ], 8, Ha),
        g("button", {
          class: "stmp-ctrl-btn stmp-play-btn",
          "aria-label": S(t).isPlaying ? S(k)("Pause") : S(k)("Play"),
          onClick: L[4] || (L[4] = (T) => S(t).togglePlay())
        }, [
          ue(be, {
            name: S(t).isPlaying ? "pause" : "play",
            size: 24
          }, null, 8, ["name"])
        ], 8, Ka),
        g("button", {
          class: "stmp-ctrl-btn",
          "aria-label": S(k)("Next"),
          onClick: L[5] || (L[5] = (T) => S(s).next())
        }, [
          ue(be, {
            name: "next",
            size: 18
          })
        ], 8, Ba),
        g("div", {
          class: "stmp-volume-container",
          onMouseenter: P,
          onMouseleave: W
        }, [
          g("button", {
            class: "stmp-ctrl-btn",
            "aria-label": S(k)("Mute / Unmute"),
            onClick: ye
          }, [
            ue(be, {
              name: S(t).volume === 0 ? "volume-mute" : "volume",
              size: 18
            }, null, 8, ["name"])
          ], 8, Wa),
          g("div", {
            class: Ae(["stmp-volume-popup", { show: l.value }])
          }, [
            g("input", {
              type: "range",
              min: "0",
              max: "100",
              value: S(t).volume,
              class: "stmp-volume-vertical",
              orient: "vertical",
              onInput: G
            }, null, 40, za)
          ], 2)
        ], 32)
      ]),
      g("div", Ja, [
        g("button", {
          class: Ae(["stmp-tab", { active: i.value === "list" }]),
          onClick: L[6] || (L[6] = (T) => i.value = "list")
        }, B(S(k)("List")), 3),
        g("button", {
          class: Ae(["stmp-tab", { active: i.value === "search" }]),
          onClick: L[7] || (L[7] = (T) => i.value = "search")
        }, B(S(k)("Search")), 3)
      ]),
      g("div", Ga, [
        i.value === "list" ? (O(), ct(aa, { key: 0 })) : i.value === "search" ? (O(), ct(Ia, { key: 1 })) : Ie("", !0)
      ])
    ]));
  }
}), Ya = /* @__PURE__ */ xt(qa, [["__scopeId", "data-v-5c4fa3a3"]]), Xa = /* @__PURE__ */ _t({
  __name: "App",
  setup(e) {
    const t = xe(), s = bt(), n = /* @__PURE__ */ Re(!1), i = /* @__PURE__ */ Re(null);
    let r = null;
    const o = tt(() => t.settings.widgetMode === "dock"), l = (T) => {
      T.key === "Escape" && (n.value = !1), T.key === " " && T.target === document.body && (T.preventDefault(), s.togglePlay());
    };
    let c = 0, d = 0, u = 0, h = 0, w = !1, y = !1, C = null, b = null;
    function A(T) {
      if (o.value) return;
      const z = T.target;
      if (z.closest("input, .stmp-tab, .stmp-result, .stmp-item, .stmp-upload-btn, .stmp-search-input, .stmp-controls, .stmp-lyrics, .stmp-lyrics-toggle, .stmp-tabs, .stmp-tab-content") || n.value && (!z.closest(".stmp-drag-handle") || z.closest("button")) || !n.value && z.closest("button"))
        return;
      const ie = i.value?.getBoundingClientRect();
      ie && (c = T.clientX, d = T.clientY, u = ie.left, h = ie.top, w = !1, y = !0, i.value && (i.value.style.left = ie.left + "px", i.value.style.top = ie.top + "px", i.value.style.right = "auto", i.value.style.bottom = "auto"), C = F, b = j, document.addEventListener("pointermove", C), document.addEventListener("pointerup", b), T.preventDefault());
    }
    function F(T) {
      if (!i.value || !y) return;
      const z = T.clientX - c, ie = T.clientY - d;
      (Math.abs(z) > 3 || Math.abs(ie) > 3) && (w = !0);
      let le = u + z, ce = h + ie;
      const ft = i.value.offsetWidth || 60, wt = i.value.offsetHeight || 40, ae = window.innerWidth - ft, J = window.innerHeight - wt;
      le = Math.max(0, Math.min(le, ae)), ce = Math.max(0, Math.min(ce, J)), i.value.style.left = le + "px", i.value.style.top = ce + "px";
    }
    function j() {
      if (y = !1, C && document.removeEventListener("pointermove", C), b && document.removeEventListener("pointerup", b), C = null, b = null, !w) {
        q();
        return;
      }
      if (i.value) {
        const T = i.value.getBoundingClientRect();
        t.setPosition({ x: T.left, y: T.top }), n.value && lt(() => G());
      }
    }
    function G() {
      if (!i.value) return;
      const T = i.value.getBoundingClientRect(), z = i.value.offsetWidth, ie = i.value.offsetHeight;
      let le = T.left, ce = T.top;
      le + z > window.innerWidth && (le = window.innerWidth - z), ce + ie > window.innerHeight && (ce = window.innerHeight - ie), le < 0 && (le = 0), ce < 0 && (ce = 0), i.value.style.left = le + "px", i.value.style.top = ce + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", t.setPosition({ x: le, y: ce });
    }
    function P() {
      if (!i.value || !o.value) return;
      const T = document.querySelector("#send_form");
      if (!T) return;
      const z = T.getBoundingClientRect(), ie = i.value.offsetHeight || 38, le = Math.max(80, z.top - 8);
      i.value.style.maxHeight = le + "px";
      let ce = z.top - Math.min(ie, le);
      ce < 4 && (ce = 4), window.innerWidth <= 768 ? (i.value.style.left = z.left + "px", i.value.style.width = z.width + "px") : (i.value.style.left = z.left + "px", i.value.style.width = ""), i.value.style.top = ce + "px", i.value.style.right = "auto", i.value.style.bottom = "auto";
    }
    function W() {
      if (!i.value || o.value) return;
      const T = t.settings.position;
      T ? (i.value.style.left = T.x + "px", i.value.style.top = T.y + "px") : (i.value.style.right = "16px", i.value.style.top = "16px", i.value.style.left = "auto", i.value.style.bottom = "auto");
    }
    function ye(T) {
      if (o.value && !n.value) {
        if (T.target.closest("button, input")) return;
        q();
      }
    }
    function q() {
      n.value = !n.value, lt(() => {
        o.value ? P() : t.settings.position && G();
      });
    }
    Lt(() => t.settings.widgetMode, (T) => {
      lt(() => {
        T === "dock" ? P() : W();
      });
    }), hr(() => {
      lt(() => {
        o.value ? P() : W();
      }), i.value && typeof ResizeObserver < "u" && (r = new ResizeObserver(() => {
        o.value && P();
      }), r.observe(i.value)), window.addEventListener("resize", L), window.addEventListener("keydown", l);
    });
    function L() {
      o.value ? lt(() => P()) : t.settings.position && lt(() => G());
    }
    return pr(() => {
      j(), r && (r.disconnect(), r = null), window.removeEventListener("resize", L), window.removeEventListener("keydown", l);
    }), (T, z) => (O(), N("div", {
      ref_key: "widgetRef",
      ref: i,
      class: Ae(["stmp-widget", {
        "stmp-expanded": n.value,
        "stmp-collapsed": !n.value,
        "stmp-dock": o.value
      }]),
      onPointerdown: A,
      onClick: ye
    }, [
      n.value ? (O(), ct(Ya, {
        key: 1,
        onCollapse: q
      })) : (O(), ct(Yc, { key: 0 }))
    ], 34));
  }
}), Za = /* @__PURE__ */ xt(Xa, [["__scopeId", "data-v-fffd3e62"]]), Qa = { class: "stmp-settings" }, eu = { class: "stmp-setting-group" }, tu = { class: "stmp-setting-label" }, su = { class: "stmp-setting-row" }, nu = ["checked", "onChange"], iu = ["onUpdate:modelValue", "placeholder"], ru = ["onUpdate:modelValue", "placeholder"], ou = ["onUpdate:modelValue", "placeholder"], lu = { class: "stmp-setting-group" }, cu = { class: "stmp-setting-label" }, au = ["value"], uu = { class: "stmp-setting-group" }, fu = { class: "stmp-setting-label" }, du = ["value"], hu = ["value"], pu = { class: "stmp-setting-group" }, gu = { class: "stmp-setting-label" }, mu = { class: "stmp-mode-toggle" }, vu = { class: "stmp-setting-group" }, yu = { class: "stmp-setting-row" }, _u = ["checked"], bu = { class: "stmp-setting-group" }, xu = { class: "stmp-setting-label" }, wu = { class: "stmp-rules" }, Su = ["onClick"], Cu = { class: "stmp-rule-add" }, Iu = ["placeholder"], Eu = { class: "stmp-setting-group" }, Tu = { class: "stmp-setting-label" }, Mu = { class: "stmp-data-btns" }, Ru = ["aria-label"], Pu = ["aria-label"], Au = ["aria-label"], Lu = /* @__PURE__ */ _t({
  __name: "SettingsView",
  setup(e) {
    const t = xe(), s = /* @__PURE__ */ Re(""), n = [
      { value: "list", label: k("List Loop") },
      { value: "random", label: k("Random") },
      { value: "single", label: k("Single Loop") }
    ], i = {
      netease: k("NetEase"),
      local: k("Local Files"),
      custom: k("Custom API")
    };
    function r() {
      const C = s.value.trim();
      C && (t.addCustomCueRule(C), s.value = "");
    }
    function o(C) {
      t.removeCustomCueRule(C);
    }
    function l(C) {
      const b = C.target;
      t.setVolume(Number(b.value));
    }
    function c(C) {
      const b = C.target;
      t.setPlayMode(b.value);
    }
    function d(C) {
      const b = C.target;
      t.settings.autoPlayOnNewCue = b.checked, t.save();
    }
    const u = async () => {
      const C = t.storage;
      C && (await C.clearCache(), toastr.success(k("Cache cleared")));
    }, h = () => {
      const C = JSON.stringify(t.settings, null, 2), b = new Blob([C], { type: "application/json" }), A = URL.createObjectURL(b), F = document.createElement("a");
      F.href = A, F.download = "st-music-player-settings.json", F.click(), URL.revokeObjectURL(A);
    }, w = () => {
      const C = document.createElement("input");
      C.type = "file", C.accept = ".json", C.onchange = async (b) => {
        const A = b.target.files?.[0];
        if (!A) return;
        const F = await A.text();
        try {
          const j = JSON.parse(F);
          if (typeof j != "object" || j === null) throw new Error("Not an object");
          const G = ["volume", "playMode", "position", "widgetMode", "autoPlayOnNewCue", "providers", "customCueRules"], P = {};
          for (const W of G)
            W in j && (P[W] = j[W]);
          if (typeof P.volume != "number" || P.volume < 0 || P.volume > 100)
            throw new Error("Invalid volume");
          if (typeof P.playMode != "string" || !["list", "random", "single"].includes(P.playMode))
            throw new Error("Invalid playMode");
          if (P.providers && !Array.isArray(P.providers))
            throw new Error("Invalid providers");
          if (P.customCueRules && !Array.isArray(P.customCueRules))
            throw new Error("Invalid customCueRules");
          Object.assign(t.settings, P), t.save(), toastr.success(k("Data imported"));
        } catch (j) {
          console.error("Import failed", j), toastr.error(k("Import failed") + ": " + (j instanceof Error ? j.message : k("Invalid JSON")));
        }
      }, C.click();
    };
    function y(C) {
      const b = t.settings.providers.find((A) => A.id === C);
      b && (b.enabled = !b.enabled, t.save());
    }
    return (C, b) => (O(), N("div", Qa, [
      g("div", eu, [
        g("div", tu, B(S(k)("Providers")), 1),
        (O(!0), N(Q, null, $t(S(t).settings.providers, (A) => (O(), N("div", {
          key: A.id,
          class: "stmp-provider-config"
        }, [
          g("label", su, [
            g("span", null, B(i[A.id] || A.id), 1),
            g("input", {
              type: "checkbox",
              checked: A.enabled,
              onChange: (F) => y(A.id)
            }, null, 40, nu)
          ]),
          A.id === "netease" ? Kt((O(), N("input", {
            key: 0,
            class: "stmp-provider-input",
            "onUpdate:modelValue": (F) => A.config.baseURL = F,
            placeholder: S(k)("API baseURL"),
            onChange: b[0] || (b[0] = (F) => S(t).save())
          }, null, 40, iu)), [
            [zt, A.config.baseURL]
          ]) : Ie("", !0),
          A.id === "custom" ? (O(), N(Q, { key: 1 }, [
            Kt(g("input", {
              class: "stmp-provider-input",
              "onUpdate:modelValue": (F) => A.config.searchURL = F,
              placeholder: S(k)("Search URL"),
              onChange: b[1] || (b[1] = (F) => S(t).save())
            }, null, 40, ru), [
              [zt, A.config.searchURL]
            ]),
            Kt(g("input", {
              class: "stmp-provider-input",
              "onUpdate:modelValue": (F) => A.config.resolveURL = F,
              placeholder: S(k)("Resolve URL"),
              onChange: b[2] || (b[2] = (F) => S(t).save())
            }, null, 40, ou), [
              [zt, A.config.resolveURL]
            ])
          ], 64)) : Ie("", !0)
        ]))), 128))
      ]),
      g("div", lu, [
        g("div", cu, B(S(k)("Default Volume")) + ": " + B(S(t).settings.volume), 1),
        g("input", {
          type: "range",
          min: "0",
          max: "100",
          value: S(t).settings.volume,
          class: "stmp-range",
          onInput: l
        }, null, 40, au)
      ]),
      g("div", uu, [
        g("div", fu, B(S(k)("Default Play Mode")), 1),
        g("select", {
          class: "stmp-select",
          value: S(t).settings.playMode,
          onChange: c
        }, [
          (O(), N(Q, null, $t(n, (A) => g("option", {
            key: A.value,
            value: A.value
          }, B(A.label), 9, hu)), 64))
        ], 40, du)
      ]),
      g("div", pu, [
        g("div", gu, B(S(k)("Widget Mode")), 1),
        g("div", mu, [
          g("button", {
            class: Ae(["stmp-mode-btn", { active: S(t).settings.widgetMode === "dock" }]),
            onClick: b[3] || (b[3] = (A) => S(t).setWidgetMode("dock"))
          }, B(S(k)("Dock")), 3),
          g("button", {
            class: Ae(["stmp-mode-btn", { active: S(t).settings.widgetMode === "drag" }]),
            onClick: b[4] || (b[4] = (A) => S(t).setWidgetMode("drag"))
          }, B(S(k)("Drag")), 3)
        ])
      ]),
      g("div", vu, [
        g("div", yu, [
          g("span", null, B(S(k)("Auto-play on new cue")), 1),
          g("input", {
            type: "checkbox",
            checked: S(t).settings.autoPlayOnNewCue,
            onChange: d
          }, null, 40, _u)
        ])
      ]),
      g("div", bu, [
        g("div", xu, B(S(k)("Custom Cue Rules (Regex)")), 1),
        g("div", wu, [
          (O(!0), N(Q, null, $t(S(t).settings.customCueRules, (A, F) => (O(), N("div", {
            key: F,
            class: "stmp-rule"
          }, [
            g("code", null, B(A), 1),
            g("button", {
              class: "stmp-rule-del",
              onClick: (j) => o(F)
            }, "✕", 8, Su)
          ]))), 128))
        ]),
        g("div", Cu, [
          Kt(g("input", {
            "onUpdate:modelValue": b[5] || (b[5] = (A) => s.value = A),
            class: "stmp-rule-input",
            placeholder: S(k)("Add regex rule..."),
            onKeydown: Vr(r, ["enter"])
          }, null, 40, Iu), [
            [zt, s.value]
          ]),
          g("button", {
            class: "stmp-rule-add-btn",
            onClick: r
          }, "+")
        ])
      ]),
      g("div", Eu, [
        g("div", Tu, B(S(k)("Data")), 1),
        g("div", Mu, [
          g("button", {
            class: "stmp-data-btn",
            "aria-label": S(k)("Clear cache"),
            onClick: u
          }, B(S(k)("Clear cache")), 9, Ru),
          g("button", {
            class: "stmp-data-btn",
            "aria-label": S(k)("Export data"),
            onClick: h
          }, B(S(k)("Export data")), 9, Pu),
          g("button", {
            class: "stmp-data-btn",
            "aria-label": S(k)("Import data"),
            onClick: w
          }, B(S(k)("Import data")), 9, Au)
        ])
      ])
    ]));
  }
}), $u = /* @__PURE__ */ xt(Lu, [["__scopeId", "data-v-1606c260"]]);
class Ou {
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
      messageId: _s(r)
    })), i(n.MESSAGE_UPDATED, "message-updated", (r) => ({
      messageId: _s(r)
    })), i(n.MESSAGE_DELETED, "message-deleted", (r) => ({
      messageId: _s(r)
    })), i(n.MESSAGE_SWIPED, "message-swiped", (r) => ({
      messageId: _s(r)
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
function _s(e) {
  if (e == null) return;
  const t = typeof e == "number" ? e : parseInt(String(e), 10);
  return Number.isFinite(t) ? t : void 0;
}
function ku() {
  return new Ou();
}
const Du = [
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
  for (const i of Du)
    for (const r of Ti(i, e)) n(r);
  for (const i of t)
    try {
      const r = new RegExp(i, "g");
      for (const o of Ti(r, e)) n(o);
    } catch {
    }
  return [...s.values()].sort((i, r) => i.index - r.index).map((i) => i.cue);
}
class Nu {
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
let Ot = null, Xe = null, ss = null, ns = null, kt = null, As = null;
const Uu = `
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
function Fu() {
  const e = $("#extensions_settings2");
  if (!e || !e.length || (e.append(Uu), ns = e.children(".inline-drawer").last()[0] ?? null, !ns)) return;
  const t = ns.querySelector("#stmp-settings-mount");
  t && As && (kt = Hr($u), kt.use(As), kt.mount(t));
}
function ju() {
  kt && (kt.unmount(), kt = null), ns?.remove(), ns = null;
}
function Vu(e, t, s) {
  Xe = ku(), Xe.on("chat-changed", () => {
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
function Hu(e, t, s) {
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
async function Wu() {
  try {
    const e = document.createElement("div");
    e.id = "st-music-player-root", document.documentElement.appendChild(e);
    const t = wc();
    As = t, Ot = Hr(Za), Ot.use(t), Ot.mount(e);
    const s = xe(), n = Lc();
    s.init(n);
    const i = bt();
    i.init(), i.setVolume(s.settings.volume);
    const r = new Nu((c) => SillyTavern.getContext().chat[c]?.mes), o = ds();
    o.init(r), Fu();
    const l = SillyTavern.getContext();
    ss = () => {
      Vu(r, o, s), Hu(r, o, s);
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
  if (Xe?.stop(), Xe = null, Ot) {
    try {
      bt().destroy();
    } catch {
    }
    Ot.unmount(), Ot = null;
  }
  const e = document.getElementById("st-music-player-root");
  e && e.remove(), ju(), As = null;
}
function zu() {
  Gr();
}
async function Ku() {
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
async function Ju() {
  await Ku(), Gr();
}
export {
  Ku as clean,
  Ju as delete,
  Gr as destroy,
  zu as disable,
  Wu as init
};
