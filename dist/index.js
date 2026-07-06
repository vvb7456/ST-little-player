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
const ie = {}, Pt = [], We = () => {
}, Mi = () => !1, Ls = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), $s = (e) => e.startsWith("onUpdate:"), pe = Object.assign, Sn = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Xr = Object.prototype.hasOwnProperty, X = (e, t) => Xr.call(e, t), j = Array.isArray, Mt = (e) => cs(e) === "[object Map]", Ri = (e) => cs(e) === "[object Set]", Kn = (e) => cs(e) === "[object Date]", K = (e) => typeof e == "function", le = (e) => typeof e == "string", Re = (e) => typeof e == "symbol", te = (e) => e !== null && typeof e == "object", Ai = (e) => (te(e) || K(e)) && K(e.then) && K(e.catch), Li = Object.prototype.toString, cs = (e) => Li.call(e), Zr = (e) => cs(e).slice(8, -1), $i = (e) => cs(e) === "[object Object]", Os = (e) => le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Wt = /* @__PURE__ */ wn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ks = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Qr = /-\w/g, Ae = ks(
  (e) => e.replace(Qr, (t) => t.slice(1).toUpperCase())
), eo = /\B([A-Z])/g, at = ks(
  (e) => e.replace(eo, "-$1").toLowerCase()
), Oi = ks((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ys = ks(
  (e) => e ? `on${Oi(e)}` : ""
), Be = (e, t) => !Object.is(e, t), _s = (e, ...t) => {
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
  if (j(e)) {
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
function ze(e) {
  let t = "";
  if (le(e))
    t = e;
  else if (j(e))
    for (let s = 0; s < e.length; s++) {
      const n = ze(e[s]);
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
  if (s = Re(e), n = Re(t), s || n)
    return e === t;
  if (s = j(e), n = j(t), s || n)
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
const Ni = (e) => !!(e && e.__v_isRef === !0), ne = (e) => le(e) ? e : e == null ? "" : j(e) || te(e) && (e.toString === Li || !K(e.toString)) ? Ni(e) ? ne(e.value) : JSON.stringify(e, Ui, 2) : String(e), Ui = (e, t) => Ni(t) ? Ui(e, t.value) : Mt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], r) => (s[qs(n, r) + " =>"] = i, s),
    {}
  )
} : Ri(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => qs(s))
} : Re(t) ? qs(t) : te(t) && !j(t) && !$i(t) ? String(t) : t, qs = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Re(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let de;
class Fi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && de && (de.active ? (this.parent = de, this.index = (de.scopes || (de.scopes = [])).push(
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
      const s = de;
      try {
        return de = this, t();
      } finally {
        de = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = de, de = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (de === this)
        de = this.prevScope;
      else {
        let t = de;
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
  return de;
}
function co(e, t = !1) {
  de && de.cleanups.push(e);
}
let oe;
const Xs = /* @__PURE__ */ new WeakSet();
class Hi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, de && (de.active ? de.effects.push(this) : this.flags &= -2);
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
    const t = oe, s = Le;
    oe = this, Le = !0;
    try {
      return this.fn();
    } finally {
      zi(this), oe = t, Le = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Mn(t);
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
let Ki = 0, zt, Jt;
function Bi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Jt, Jt = e;
    return;
  }
  e.next = zt, zt = e;
}
function Tn() {
  Ki++;
}
function Pn() {
  if (--Ki > 0)
    return;
  if (Jt) {
    let t = Jt;
    for (Jt = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; zt; ) {
    let t = zt;
    for (zt = void 0; t; ) {
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
    n.version === -1 ? (n === s && (s = i), Mn(n), ao(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
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
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ns) || (e.globalVersion = ns, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !un(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = oe, n = Le;
  oe = e, Le = !0;
  try {
    Wi(e);
    const i = e.fn(e._value);
    (t.version === 0 || Be(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    oe = s, Le = n, zi(e), e.flags &= -3;
  }
}
function Mn(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let r = s.computed.deps; r; r = r.nextDep)
      Mn(r, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function ao(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let Le = !0;
const Gi = [];
function Je() {
  Gi.push(Le), Le = !1;
}
function Ge() {
  const e = Gi.pop();
  Le = e === void 0 ? !0 : e;
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
let ns = 0;
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
    if (!oe || !Le || oe === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== oe)
      s = this.activeLink = new uo(oe, this), oe.deps ? (s.prevDep = oe.depsTail, oe.depsTail.nextDep = s, oe.depsTail = s) : oe.deps = oe.depsTail = s, Yi(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = oe.depsTail, s.nextDep = void 0, oe.depsTail.nextDep = s, oe.depsTail = s, oe.deps === s && (oe.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, ns++, this.notify(t);
  }
  notify(t) {
    Tn();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Pn();
    }
  }
}
function Yi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Yi(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const Ss = /* @__PURE__ */ new WeakMap(), vt = /* @__PURE__ */ Symbol(
  ""
), fn = /* @__PURE__ */ Symbol(
  ""
), is = /* @__PURE__ */ Symbol(
  ""
);
function me(e, t, s) {
  if (Le && oe) {
    let n = Ss.get(e);
    n || Ss.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(s);
    i || (n.set(s, i = new Rn()), i.map = n, i.key = s), i.track();
  }
}
function Qe(e, t, s, n, i, r) {
  const o = Ss.get(e);
  if (!o) {
    ns++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (Tn(), t === "clear")
    o.forEach(l);
  else {
    const c = j(e), d = c && Os(s);
    if (c && s === "length") {
      const u = Number(n);
      o.forEach((h, w) => {
        (w === "length" || w === is || !Re(w) && w >= u) && l(h);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), d && l(o.get(is)), t) {
        case "add":
          c ? d && l(o.get("length")) : (l(o.get(vt)), Mt(e) && l(o.get(fn)));
          break;
        case "delete":
          c || (l(o.get(vt)), Mt(e) && l(o.get(fn)));
          break;
        case "set":
          Mt(e) && l(o.get(vt));
          break;
      }
  }
  Pn();
}
function fo(e, t) {
  const s = Ss.get(e);
  return s && s.get(t);
}
function wt(e) {
  const t = /* @__PURE__ */ Y(e);
  return t === e ? t : (me(t, "iterate", is), /* @__PURE__ */ Te(e) ? t : t.map($e));
}
function Ns(e) {
  return me(e = /* @__PURE__ */ Y(e), "iterate", is), e;
}
function He(e, t) {
  return /* @__PURE__ */ st(e) ? Ot(/* @__PURE__ */ tt(e) ? $e(t) : t) : $e(t);
}
const ho = {
  __proto__: null,
  [Symbol.iterator]() {
    return Zs(this, Symbol.iterator, (e) => He(this, e));
  },
  concat(...e) {
    return wt(this).concat(
      ...e.map((t) => j(t) ? wt(t) : t)
    );
  },
  entries() {
    return Zs(this, "entries", (e) => (e[1] = He(this, e[1]), e));
  },
  every(e, t) {
    return Ye(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ye(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => He(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Ye(
      this,
      "find",
      e,
      t,
      (s) => He(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return Ye(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ye(
      this,
      "findLast",
      e,
      t,
      (s) => He(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ye(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ye(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Qs(this, "includes", e);
  },
  indexOf(...e) {
    return Qs(this, "indexOf", e);
  },
  join(e) {
    return wt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Qs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ye(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ft(this, "pop");
  },
  push(...e) {
    return Ft(this, "push", e);
  },
  reduce(e, ...t) {
    return zn(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return zn(this, "reduceRight", e, t);
  },
  shift() {
    return Ft(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ye(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ft(this, "splice", e);
  },
  toReversed() {
    return wt(this).toReversed();
  },
  toSorted(e) {
    return wt(this).toSorted(e);
  },
  toSpliced(...e) {
    return wt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ft(this, "unshift", e);
  },
  values() {
    return Zs(this, "values", (e) => He(this, e));
  }
};
function Zs(e, t, s) {
  const n = Ns(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ Te(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = s(r.value)), r;
  }), i;
}
const po = Array.prototype;
function Ye(e, t, s, n, i, r) {
  const o = Ns(e), l = o !== e && !/* @__PURE__ */ Te(e), c = o[t];
  if (c !== po[t]) {
    const h = c.apply(e, r);
    return l ? $e(h) : h;
  }
  let d = s;
  o !== e && (l ? d = function(h, w) {
    return s.call(this, He(e, h), w, e);
  } : s.length > 2 && (d = function(h, w) {
    return s.call(this, h, w, e);
  }));
  const u = c.call(o, d, n);
  return l && i ? i(u) : u;
}
function zn(e, t, s, n) {
  const i = Ns(e), r = i !== e && !/* @__PURE__ */ Te(e);
  let o = s, l = !1;
  i !== e && (r ? (l = n.length === 0, o = function(d, u, h) {
    return l && (l = !1, d = He(e, d)), s.call(this, d, He(e, u), h, e);
  }) : s.length > 3 && (o = function(d, u, h) {
    return s.call(this, d, u, h, e);
  }));
  const c = i[t](o, ...n);
  return l ? He(e, c) : c;
}
function Qs(e, t, s) {
  const n = /* @__PURE__ */ Y(e);
  me(n, "iterate", is);
  const i = n[t](...s);
  return (i === -1 || i === !1) && /* @__PURE__ */ Fs(s[0]) ? (s[0] = /* @__PURE__ */ Y(s[0]), n[t](...s)) : i;
}
function Ft(e, t, s = []) {
  Je(), Tn();
  const n = (/* @__PURE__ */ Y(e))[t].apply(e, s);
  return Pn(), Ge(), n;
}
const go = /* @__PURE__ */ wn("__proto__,__v_isRef,__isVue"), qi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Re)
);
function mo(e) {
  Re(e) || (e = String(e));
  const t = /* @__PURE__ */ Y(this);
  return me(t, "has", e), t.hasOwnProperty(e);
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
    const o = j(t);
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
    if ((Re(s) ? qi.has(s) : go(s)) || (i || me(t, "get", s), r))
      return l;
    if (/* @__PURE__ */ ce(l)) {
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
    const o = j(t) && Os(s);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ st(r);
      if (!/* @__PURE__ */ Te(n) && !/* @__PURE__ */ st(n) && (r = /* @__PURE__ */ Y(r), n = /* @__PURE__ */ Y(n)), !o && /* @__PURE__ */ ce(r) && !/* @__PURE__ */ ce(n))
        return d || (r.value = n), !0;
    }
    const l = o ? Number(s) < t.length : X(t, s), c = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ ce(t) ? t : i
    );
    return t === /* @__PURE__ */ Y(i) && c && (l ? Be(n, r) && Qe(t, "set", s, n) : Qe(t, "add", s, n)), c;
  }
  deleteProperty(t, s) {
    const n = X(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && Qe(t, "delete", s, void 0), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Re(s) || !qi.has(s)) && me(t, "has", s), n;
  }
  ownKeys(t) {
    return me(
      t,
      "iterate",
      j(t) ? "length" : vt
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
    const i = this.__v_raw, r = /* @__PURE__ */ Y(i), o = Mt(r), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, d = i[e](...n), u = s ? dn : t ? Ot : $e;
    return !t && me(
      r,
      "iterate",
      c ? fn : vt
    ), pe(
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
      const r = this.__v_raw, o = /* @__PURE__ */ Y(r), l = /* @__PURE__ */ Y(i);
      e || (Be(i, l) && me(o, "get", i), me(o, "get", l));
      const { has: c } = gs(o), d = t ? dn : e ? Ot : $e;
      if (c.call(o, i))
        return d(r.get(i));
      if (c.call(o, l))
        return d(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && me(/* @__PURE__ */ Y(i), "iterate", vt), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ Y(r), l = /* @__PURE__ */ Y(i);
      return e || (Be(i, l) && me(o, "has", i), me(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ Y(l), d = t ? dn : e ? Ot : $e;
      return !e && me(c, "iterate", vt), l.forEach((u, h) => i.call(r, d(u), d(h), o));
    }
  };
  return pe(
    s,
    e ? {
      add: ms("add"),
      set: ms("set"),
      delete: ms("delete"),
      clear: ms("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ Y(this), o = gs(r), l = /* @__PURE__ */ Y(i), c = !t && !/* @__PURE__ */ Te(i) && !/* @__PURE__ */ st(i) ? l : i;
        return o.has.call(r, c) || Be(i, c) && o.has.call(r, i) || Be(l, c) && o.has.call(r, l) || (r.add(c), Qe(r, "add", c, c)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ Te(r) && !/* @__PURE__ */ st(r) && (r = /* @__PURE__ */ Y(r));
        const o = /* @__PURE__ */ Y(this), { has: l, get: c } = gs(o);
        let d = l.call(o, i);
        d || (i = /* @__PURE__ */ Y(i), d = l.call(o, i));
        const u = c.call(o, i);
        return o.set(i, r), d ? Be(r, u) && Qe(o, "set", i, r) : Qe(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ Y(this), { has: o, get: l } = gs(r);
        let c = o.call(r, i);
        c || (i = /* @__PURE__ */ Y(i), c = o.call(r, i)), l && l.call(r, i);
        const d = r.delete(i);
        return c && Qe(r, "delete", i, void 0), d;
      },
      clear() {
        const i = /* @__PURE__ */ Y(this), r = i.size !== 0, o = i.clear();
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
  return /* @__PURE__ */ st(e) ? e : Ln(
    e,
    !1,
    yo,
    So,
    Qi
  );
}
// @__NO_SIDE_EFFECTS__
function Po(e) {
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
function tt(e) {
  return /* @__PURE__ */ st(e) ? /* @__PURE__ */ tt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function st(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Te(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Fs(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Y(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Y(t) : e;
}
function $n(e) {
  return !X(e, "__v_skip") && Object.isExtensible(e) && ki(e, "__v_skip", !0), e;
}
const $e = (e) => te(e) ? /* @__PURE__ */ Us(e) : e, Ot = (e) => te(e) ? /* @__PURE__ */ hn(e) : e;
// @__NO_SIDE_EFFECTS__
function ce(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ie(e) {
  return Mo(e, !1);
}
function Mo(e, t) {
  return /* @__PURE__ */ ce(e) ? e : new Ro(e, t);
}
class Ro {
  constructor(t, s) {
    this.dep = new Rn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ Y(t), this._value = s ? t : $e(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Te(t) || /* @__PURE__ */ st(t);
    t = n ? t : /* @__PURE__ */ Y(t), Be(t, s) && (this._rawValue = t, this._value = n ? t : $e(t), this.dep.trigger());
  }
}
function A(e) {
  return /* @__PURE__ */ ce(e) ? e.value : e;
}
const Ao = {
  get: (e, t, s) => t === "__v_raw" ? e : A(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t];
    return /* @__PURE__ */ ce(i) && !/* @__PURE__ */ ce(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function sr(e) {
  return /* @__PURE__ */ tt(e) ? e : new Proxy(e, Ao);
}
// @__NO_SIDE_EFFECTS__
function Lo(e) {
  const t = j(e) ? new Array(e.length) : {};
  for (const s in e)
    t[s] = Oo(e, s);
  return t;
}
class $o {
  constructor(t, s, n) {
    this._object = t, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = Re(s) ? s : String(s), this._raw = /* @__PURE__ */ Y(t);
    let i = !0, r = t;
    if (!j(t) || Re(this._key) || !Os(this._key))
      do
        i = !/* @__PURE__ */ Fs(r) || /* @__PURE__ */ Te(r);
      while (i && (r = r.__v_raw));
    this._shallow = i;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = A(t)), this._value = t === void 0 ? this._defaultValue : t;
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
function Oo(e, t, s) {
  return new $o(e, t, s);
}
class ko {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Rn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ns - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
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
let gt;
function No(e, t = !1, s = gt) {
  if (s) {
    let n = Cs.get(s);
    n || Cs.set(s, n = []), n.push(e);
  }
}
function Uo(e, t, s = ie) {
  const { immediate: n, deep: i, once: r, scheduler: o, augmentJob: l, call: c } = s, d = (M) => i ? M : /* @__PURE__ */ Te(M) || i === !1 || i === 0 ? et(M, 1) : et(M);
  let u, h, w, b, S = !1, g = !1;
  if (/* @__PURE__ */ ce(e) ? (h = () => e.value, S = /* @__PURE__ */ Te(e)) : /* @__PURE__ */ tt(e) ? (h = () => d(e), S = !0) : j(e) ? (g = !0, S = e.some((M) => /* @__PURE__ */ tt(M) || /* @__PURE__ */ Te(M)), h = () => e.map((M) => {
    if (/* @__PURE__ */ ce(M))
      return M.value;
    if (/* @__PURE__ */ tt(M))
      return d(M);
    if (K(M))
      return c ? c(M, 2) : M();
  })) : K(e) ? t ? h = c ? () => c(e, 2) : e : h = () => {
    if (w) {
      Je();
      try {
        w();
      } finally {
        Ge();
      }
    }
    const M = gt;
    gt = u;
    try {
      return c ? c(e, 3, [b]) : e(b);
    } finally {
      gt = M;
    }
  } : h = We, t && i) {
    const M = h, W = i === !0 ? 1 / 0 : i;
    h = () => et(M(), W);
  }
  const R = Vi(), U = () => {
    u.stop(), R && R.active && Sn(R.effects, u);
  };
  if (r && t) {
    const M = t;
    t = (...W) => {
      const B = M(...W);
      return U(), B;
    };
  }
  let F = g ? new Array(e.length).fill(vs) : vs;
  const J = (M) => {
    if (!(!(u.flags & 1) || !u.dirty && !M))
      if (t) {
        const W = u.run();
        if (M || i || S || (g ? W.some((B, H) => Be(B, F[H])) : Be(W, F))) {
          w && w();
          const B = gt;
          gt = u;
          try {
            const H = [
              W,
              // pass undefined as the old value when it's changed for the first time
              F === vs ? void 0 : g && F[0] === vs ? [] : F,
              b
            ];
            F = W, c ? c(t, 3, H) : (
              // @ts-expect-error
              t(...H)
            );
          } finally {
            gt = B;
          }
        }
      } else
        u.run();
  };
  return l && l(J), u = new Hi(h), u.scheduler = o ? () => o(J, !1) : J, b = (M) => No(M, !1, u), w = u.onStop = () => {
    const M = Cs.get(u);
    if (M) {
      if (c)
        c(M, 4);
      else
        for (const W of M) W();
      Cs.delete(u);
    }
  }, t ? n ? J(!0) : F = u.run() : o ? o(J.bind(null, !0), !0) : u.run(), U.pause = u.pause.bind(u), U.resume = u.resume.bind(u), U.stop = U, U;
}
function et(e, t = 1 / 0, s) {
  if (t <= 0 || !te(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ ce(e))
    et(e.value, t, s);
  else if (j(e))
    for (let n = 0; n < e.length; n++)
      et(e[n], t, s);
  else if (Ri(e) || Mt(e))
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
function as(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    js(i, t, s);
  }
}
function Oe(e, t, s, n) {
  if (K(e)) {
    const i = as(e, t, s, n);
    return i && Ai(i) && i.catch((r) => {
      js(r, t, s);
    }), i;
  }
  if (j(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(Oe(e[r], t, s, n));
    return i;
  }
}
function js(e, t, s, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || ie;
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
      Je(), as(r, null, 10, [
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
const ye = [];
let Ve = -1;
const Rt = [];
let rt = null, It = 0;
const nr = /* @__PURE__ */ Promise.resolve();
let Is = null;
function mt(e) {
  const t = Is || nr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function jo(e) {
  let t = Ve + 1, s = ye.length;
  for (; t < s; ) {
    const n = t + s >>> 1, i = ye[n], r = rs(i);
    r < e || r === e && i.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function On(e) {
  if (!(e.flags & 1)) {
    const t = rs(e), s = ye[ye.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= rs(s) ? ye.push(e) : ye.splice(jo(t), 0, e), e.flags |= 1, ir();
  }
}
function ir() {
  Is || (Is = nr.then(or));
}
function Vo(e) {
  j(e) ? Rt.push(...e) : rt && e.id === -1 ? rt.splice(It + 1, 0, e) : e.flags & 1 || (Rt.push(e), e.flags |= 1), ir();
}
function Jn(e, t, s = Ve + 1) {
  for (; s < ye.length; s++) {
    const n = ye[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ye.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function rr(e) {
  if (Rt.length) {
    const t = [...new Set(Rt)].sort(
      (s, n) => rs(s) - rs(n)
    );
    if (Rt.length = 0, rt) {
      rt.push(...t);
      return;
    }
    for (rt = t, It = 0; It < rt.length; It++) {
      const s = rt[It];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    rt = null, It = 0;
  }
}
const rs = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function or(e) {
  try {
    for (Ve = 0; Ve < ye.length; Ve++) {
      const t = ye[Ve];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), as(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ve < ye.length; Ve++) {
      const t = ye[Ve];
      t && (t.flags &= -2);
    }
    Ve = -1, ye.length = 0, rr(), Is = null, (ye.length || Rt.length) && or();
  }
}
let Me = null, lr = null;
function Es(e) {
  const t = Me;
  return Me = e, lr = e && e.type.__scopeId || null, t;
}
function Ho(e, t = Me, s) {
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
function Vt(e, t) {
  if (Me === null)
    return e;
  const s = Bs(Me), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, c = ie] = t[i];
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
function ht(e, t, s, n) {
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
  if (be) {
    let s = be.provides;
    const n = be.parent && be.parent.provides;
    n === s && (s = be.provides = Object.create(n)), s[e] = t;
  }
}
function Gt(e, t, s = !1) {
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
const Wo = /* @__PURE__ */ Symbol.for("v-scx"), zo = () => Gt(Wo);
function Yt(e, t, s) {
  return cr(e, t, s);
}
function cr(e, t, s = ie) {
  const { immediate: n, deep: i, flush: r, once: o } = s, l = pe({}, s), c = t && n || !t && r !== "post";
  let d;
  if (ls) {
    if (r === "sync") {
      const b = zo();
      d = b.__watcherHandles || (b.__watcherHandles = []);
    } else if (!c) {
      const b = () => {
      };
      return b.stop = We, b.resume = We, b.pause = We, b;
    }
  }
  const u = be;
  l.call = (b, S, g) => Oe(b, u, S, g);
  let h = !1;
  r === "post" ? l.scheduler = (b) => {
    xe(b, u && u.suspense);
  } : r !== "sync" && (h = !0, l.scheduler = (b, S) => {
    S ? b() : On(b);
  }), l.augmentJob = (b) => {
    t && (b.flags |= 4), h && (b.flags |= 2, u && (b.id = u.uid, b.i = u));
  };
  const w = Uo(e, t, l);
  return ls && (d ? d.push(w) : c && w()), w;
}
function Jo(e, t, s) {
  const n = this.proxy, i = le(e) ? e.includes(".") ? ar(n, e) : () => n[e] : e.bind(n, n);
  let r;
  K(t) ? r = t : (r = t.handler, s = t);
  const o = us(this), l = cr(i, r.bind(n), s);
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
const Go = /* @__PURE__ */ Symbol("_vte"), Yo = (e) => e.__isTeleport, en = /* @__PURE__ */ Symbol("_leaveCb");
function kn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, kn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function bt(e, t) {
  return K(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    pe({ name: e.name }, t, { setup: e })
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
function qt(e, t, s, n, i = !1) {
  if (j(e)) {
    e.forEach(
      (g, R) => qt(
        g,
        t && (j(t) ? t[R] : t),
        s,
        n,
        i
      )
    );
    return;
  }
  if (Xt(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && qt(e, t, s, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? Bs(n.component) : n.el, o = i ? null : r, { i: l, r: c } = e, d = t && t.r, u = l.refs === ie ? l.refs = {} : l.refs, h = l.setupState, w = /* @__PURE__ */ Y(h), b = h === ie ? Mi : (g) => Gn(u, g) ? !1 : X(w, g), S = (g, R) => !(R && Gn(u, R));
  if (d != null && d !== c) {
    if (Yn(t), le(d))
      u[d] = null, b(d) && (h[d] = null);
    else if (/* @__PURE__ */ ce(d)) {
      const g = t;
      S(d, g.k) && (d.value = null), g.k && (u[g.k] = null);
    }
  }
  if (K(c)) {
    Je();
    try {
      as(c, l, 12, [o, u]);
    } finally {
      Ge();
    }
  } else {
    const g = le(c), R = /* @__PURE__ */ ce(c);
    if (g || R) {
      const U = () => {
        if (e.f) {
          const F = g ? b(c) ? h[c] : u[c] : S() || !e.k ? c.value : u[e.k];
          if (i)
            j(F) && Sn(F, r);
          else if (j(F))
            F.includes(r) || F.push(r);
          else if (g)
            u[c] = [r], b(c) && (h[c] = u[c]);
          else {
            const J = [r];
            S(c, e.k) && (c.value = J), e.k && (u[e.k] = J);
          }
        } else g ? (u[c] = o, b(c) && (h[c] = o)) : R && (S(c, e.k) && (c.value = o), e.k && (u[e.k] = o));
      };
      if (o) {
        const F = () => {
          U(), Ts.delete(e);
        };
        F.id = -1, Ts.set(e, F), xe(F, s);
      } else
        Yn(e), U();
    }
  }
}
function Yn(e) {
  const t = Ts.get(e);
  t && (t.flags |= 8, Ts.delete(e));
}
Ds().requestIdleCallback;
Ds().cancelIdleCallback;
const Xt = (e) => !!e.type.__asyncLoader, fr = (e) => e.type.__isKeepAlive;
function qo(e, t) {
  dr(e, "a", t);
}
function Xo(e, t) {
  dr(e, "da", t);
}
function dr(e, t, s = be) {
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
function Vs(e, t, s = be, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []), r = t.__weh || (t.__weh = (...o) => {
      Je();
      const l = us(s), c = Oe(t, s, e, o);
      return l(), Ge(), c;
    });
    return n ? i.unshift(r) : i.push(r), r;
  }
}
const nt = (e) => (t, s = be) => {
  (!ls || e === "sp") && Vs(e, (...n) => t(...n), s);
}, Qo = nt("bm"), hr = nt("m"), el = nt(
  "bu"
), tl = nt("u"), pr = nt(
  "bum"
), gr = nt("um"), sl = nt(
  "sp"
), nl = nt("rtg"), il = nt("rtc");
function rl(e, t = be) {
  Vs("ec", e, t);
}
const ol = /* @__PURE__ */ Symbol.for("v-ndc");
function At(e, t, s, n) {
  let i;
  const r = s, o = j(e);
  if (o || le(e)) {
    const l = o && /* @__PURE__ */ tt(e);
    let c = !1, d = !1;
    l && (c = !/* @__PURE__ */ Te(e), d = /* @__PURE__ */ st(e), e = Ns(e)), i = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      i[u] = t(
        c ? d ? Ot($e(e[u])) : $e(e[u]) : e[u],
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
const pn = (e) => e ? Ur(e) ? Bs(e) : pn(e.parent) : null, Zt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ pe(/* @__PURE__ */ Object.create(null), {
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
    $nextTick: (e) => e.n || (e.n = mt.bind(e.proxy)),
    $watch: (e) => Jo.bind(e)
  })
), tn = (e, t) => e !== ie && !e.__isScriptSetup && X(e, t), ll = {
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
        if (i !== ie && X(i, t))
          return o[t] = 2, i[t];
        if (X(r, t))
          return o[t] = 3, r[t];
        if (s !== ie && X(s, t))
          return o[t] = 4, s[t];
        gn && (o[t] = 0);
      }
    }
    const d = Zt[t];
    let u, h;
    if (d)
      return t === "$attrs" && me(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (s !== ie && X(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      h = c.config.globalProperties, X(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: i, ctx: r } = e;
    return tn(i, t) ? (i[t] = s, !0) : n !== ie && X(n, t) ? (n[t] = s, !0) : X(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: i, props: r, type: o }
  }, l) {
    let c;
    return !!(s[l] || e !== ie && l[0] !== "$" && X(e, l) || tn(t, l) || X(r, l) || X(n, l) || X(Zt, l) || X(i.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : X(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function qn(e) {
  return j(e) ? e.reduce(
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
    beforeUpdate: b,
    updated: S,
    activated: g,
    deactivated: R,
    beforeDestroy: U,
    beforeUnmount: F,
    destroyed: J,
    unmounted: M,
    render: W,
    renderTracked: B,
    renderTriggered: H,
    errorCaptured: T,
    serverPrefetch: O,
    // public API
    expose: q,
    inheritAttrs: _e,
    // assets
    components: Pe,
    directives: ke,
    filters: ut
  } = t;
  if (d && al(d, n, null), o)
    for (const z in o) {
      const re = o[z];
      K(re) && (n[z] = re.bind(s));
    }
  if (i) {
    const z = i.call(s, s);
    te(z) && (e.data = /* @__PURE__ */ Us(z));
  }
  if (gn = !0, r)
    for (const z in r) {
      const re = r[z], ft = K(re) ? re.bind(s, s) : K(re.get) ? re.get.bind(s, s) : We, hs = !K(re) && K(re.set) ? re.set.bind(s) : We, dt = ot({
        get: ft,
        set: hs
      });
      Object.defineProperty(n, z, {
        enumerable: !0,
        configurable: !0,
        get: () => dt.value,
        set: (De) => dt.value = De
      });
    }
  if (l)
    for (const z in l)
      mr(l[z], n, s, z);
  if (c) {
    const z = K(c) ? c.call(s) : c;
    Reflect.ownKeys(z).forEach((re) => {
      Ko(re, z[re]);
    });
  }
  u && Xn(u, e, "c");
  function ae(z, re) {
    j(re) ? re.forEach((ft) => z(ft.bind(s))) : re && z(re.bind(s));
  }
  if (ae(Qo, h), ae(hr, w), ae(el, b), ae(tl, S), ae(qo, g), ae(Xo, R), ae(rl, T), ae(il, B), ae(nl, H), ae(pr, F), ae(gr, M), ae(sl, O), j(q))
    if (q.length) {
      const z = e.exposed || (e.exposed = {});
      q.forEach((re) => {
        Object.defineProperty(z, re, {
          get: () => s[re],
          set: (ft) => s[re] = ft,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  W && e.render === We && (e.render = W), _e != null && (e.inheritAttrs = _e), Pe && (e.components = Pe), ke && (e.directives = ke), O && ur(e);
}
function al(e, t, s = We) {
  j(e) && (e = mn(e));
  for (const n in e) {
    const i = e[n];
    let r;
    te(i) ? "default" in i ? r = Gt(
      i.from || n,
      i.default,
      !0
    ) : r = Gt(i.from || n) : r = Gt(i), /* @__PURE__ */ ce(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[n] = r;
  }
}
function Xn(e, t, s) {
  Oe(
    j(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function mr(e, t, s, n) {
  let i = n.includes(".") ? ar(s, n) : () => s[n];
  if (le(e)) {
    const r = t[e];
    K(r) && Yt(i, r);
  } else if (K(e))
    Yt(i, e.bind(s));
  else if (te(e))
    if (j(e))
      e.forEach((r) => mr(r, t, s, n));
    else {
      const r = K(e.handler) ? e.handler.bind(s) : t[e.handler];
      K(r) && Yt(i, r, e);
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
    (d) => Ps(c, d, o, !0)
  ), Ps(c, t, o)), te(t) && r.set(t, c), c;
}
function Ps(e, t, s, n = !1) {
  const { mixins: i, extends: r } = t;
  r && Ps(e, r, s, !0), i && i.forEach(
    (o) => Ps(e, o, s, !0)
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
  methods: Ht,
  computed: Ht,
  // lifecycle
  beforeCreate: ve,
  created: ve,
  beforeMount: ve,
  mounted: ve,
  beforeUpdate: ve,
  updated: ve,
  beforeDestroy: ve,
  beforeUnmount: ve,
  destroyed: ve,
  unmounted: ve,
  activated: ve,
  deactivated: ve,
  errorCaptured: ve,
  serverPrefetch: ve,
  // assets
  components: Ht,
  directives: Ht,
  // watch
  watch: dl,
  // provide / inject
  provide: Zn,
  inject: fl
};
function Zn(e, t) {
  return t ? e ? function() {
    return pe(
      K(e) ? e.call(this, this) : e,
      K(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function fl(e, t) {
  return Ht(mn(e), mn(t));
}
function mn(e) {
  if (j(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function ve(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ht(e, t) {
  return e ? pe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Qn(e, t) {
  return e ? j(e) && j(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : pe(
    /* @__PURE__ */ Object.create(null),
    qn(e),
    qn(t ?? {})
  ) : t;
}
function dl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = pe(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = ve(e[n], t[n]);
  return s;
}
function yr() {
  return {
    app: null,
    config: {
      isNativeTag: Mi,
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
    K(n) || (n = pe({}, n)), i != null && !te(i) && (i = null);
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
          const b = d._ceVNode || ue(n, i);
          return b.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(b, u, w), c = !0, d._container = u, u.__vue_app__ = d, Bs(b.component);
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
const gl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ae(t)}Modifiers`] || e[`${at(t)}Modifiers`];
function ml(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || ie;
  let i = s;
  const r = t.startsWith("update:"), o = r && gl(n, t.slice(7));
  o && (o.trim && (i = s.map((u) => le(u) ? u.trim() : u)), o.number && (i = s.map(Cn)));
  let l, c = n[l = Ys(t)] || // also try camelCase event handler (#2249)
  n[l = Ys(Ae(t))];
  !c && r && (c = n[l = Ys(at(t))]), c && Oe(
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
      u && (l = !0, pe(o, u));
    };
    !s && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !l ? (te(e) && n.set(e, null), null) : (j(r) ? r.forEach((c) => o[c] = null) : pe(o, r), te(e) && n.set(e, o), o);
}
function Hs(e, t) {
  return !e || !Ls(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), X(e, t[0].toLowerCase() + t.slice(1)) || X(e, at(t)) || X(e, t));
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
    setupState: b,
    ctx: S,
    inheritAttrs: g
  } = e, R = Es(e);
  let U, F;
  try {
    if (s.shapeFlag & 4) {
      const M = i || n, W = M;
      U = Ke(
        d.call(
          W,
          M,
          u,
          h,
          b,
          w,
          S
        )
      ), F = l;
    } else {
      const M = t;
      U = Ke(
        M.length > 1 ? M(
          h,
          { attrs: l, slots: o, emit: c }
        ) : M(
          h,
          null
        )
      ), F = t.props ? l : yl(l);
    }
  } catch (M) {
    Qt.length = 0, js(M, e, 1), U = ue(ct);
  }
  let J = U;
  if (F && g !== !1) {
    const M = Object.keys(F), { shapeFlag: W } = J;
    M.length && W & 7 && (r && M.some($s) && (F = bl(
      F,
      r
    )), J = kt(J, F, !1, !0));
  }
  return s.dirs && (J = kt(J, null, !1, !0), J.dirs = J.dirs ? J.dirs.concat(s.dirs) : s.dirs), s.transition && kn(J, s.transition), U = J, Es(R), U;
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
  s ? e.props = n ? i : /* @__PURE__ */ Po(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function Sl(e, t, s, n) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ Y(i), [c] = e.propsOptions;
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
        const b = t[w];
        if (c)
          if (X(r, w))
            b !== r[w] && (r[w] = b, d = !0);
          else {
            const S = Ae(w);
            i[S] = vn(
              c,
              l,
              S,
              b,
              e,
              !1
            );
          }
        else
          b !== r[w] && (r[w] = b, d = !0);
      }
    }
  } else {
    Cr(e, t, i, r) && (d = !0);
    let u;
    for (const h in l)
      (!t || // for camelCase
      !X(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = at(h)) === h || !X(t, u))) && (c ? s && // for camelCase
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
      if (Wt(c))
        continue;
      const d = t[c];
      let u;
      i && X(i, u = Ae(c)) ? !r || !r.includes(u) ? s[u] = d : (l || (l = {}))[u] = d : Hs(e.emitsOptions, c) || (!(c in n) || d !== n[c]) && (n[c] = d, o = !0);
    }
  if (r) {
    const c = /* @__PURE__ */ Y(s), d = l || ie;
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
          const u = us(i);
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
    ] && (n === "" || n === at(s)) && (n = !0));
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
      const [w, b] = Ir(h, t, !0);
      pe(o, w), b && l.push(...b);
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !c)
    return te(e) && n.set(e, Pt), Pt;
  if (j(r))
    for (let u = 0; u < r.length; u++) {
      const h = Ae(r[u]);
      si(h) && (o[h] = ie);
    }
  else if (r)
    for (const u in r) {
      const h = Ae(u);
      if (si(h)) {
        const w = r[u], b = o[h] = j(w) || K(w) ? { type: w } : pe({}, w), S = b.type;
        let g = !1, R = !0;
        if (j(S))
          for (let U = 0; U < S.length; ++U) {
            const F = S[U], J = K(F) && F.name;
            if (J === "Boolean") {
              g = !0;
              break;
            } else J === "String" && (R = !1);
          }
        else
          g = K(S) && S.name === "Boolean";
        b[
          0
          /* shouldCast */
        ] = g, b[
          1
          /* shouldCastTrue */
        ] = R, (g || X(b, "default")) && l.push(h);
      }
    }
  const d = [o, l];
  return te(e) && n.set(e, d), d;
}
function si(e) {
  return e[0] !== "$" && !Wt(e);
}
const Dn = (e) => e === "_" || e === "_ctx" || e === "$stable", Nn = (e) => j(e) ? e.map(Ke) : [Ke(e)], Il = (e, t, s) => {
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
}, Pr = (e, t, s) => {
  for (const n in t)
    (s || !Dn(n)) && (e[n] = t[n]);
}, El = (e, t, s) => {
  const n = e.slots = wr();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Pr(n, t, s), s && ki(n, "_", i, !0)) : Er(t, n);
  } else t && Tr(e, t);
}, Tl = (e, t, s) => {
  const { vnode: n, slots: i } = e;
  let r = !0, o = ie;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? r = !1 : Pr(i, t, s) : (r = !t.$stable, Er(t, i)), o = t;
  } else t && (Tr(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !Dn(l) && o[l] == null && delete i[l];
}, xe = Ll;
function Pl(e) {
  return Ml(e);
}
function Ml(e, t) {
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
    setScopeId: b = We,
    insertStaticContent: S
  } = e, g = (a, f, p, x = null, _ = null, m = null, E = void 0, I = null, C = !!f.dynamicChildren) => {
    if (a === f)
      return;
    a && !jt(a, f) && (x = ps(a), De(a, _, m, !0), a = null), f.patchFlag === -2 && (C = !1, f.dynamicChildren = null);
    const { type: v, ref: N, shapeFlag: P } = f;
    switch (v) {
      case Ks:
        R(a, f, p, x);
        break;
      case ct:
        U(a, f, p, x);
        break;
      case xs:
        a == null && F(f, p, x, E);
        break;
      case Z:
        Pe(
          a,
          f,
          p,
          x,
          _,
          m,
          E,
          I,
          C
        );
        break;
      default:
        P & 1 ? W(
          a,
          f,
          p,
          x,
          _,
          m,
          E,
          I,
          C
        ) : P & 6 ? ke(
          a,
          f,
          p,
          x,
          _,
          m,
          E,
          I,
          C
        ) : (P & 64 || P & 128) && v.process(
          a,
          f,
          p,
          x,
          _,
          m,
          E,
          I,
          C,
          Nt
        );
    }
    N != null && _ ? qt(N, a && a.ref, m, f || a, !f) : N == null && a && a.ref != null && qt(a.ref, null, m, a, !0);
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
  }, J = ({ el: a, anchor: f }, p, x) => {
    let _;
    for (; a && a !== f; )
      _ = w(a), n(a, p, x), a = _;
    n(f, p, x);
  }, M = ({ el: a, anchor: f }) => {
    let p;
    for (; a && a !== f; )
      p = w(a), i(a), a = p;
    i(f);
  }, W = (a, f, p, x, _, m, E, I, C) => {
    if (f.type === "svg" ? E = "svg" : f.type === "math" && (E = "mathml"), a == null)
      B(
        f,
        p,
        x,
        _,
        m,
        E,
        I,
        C
      );
    else {
      const v = a.el && a.el._isVueCE ? a.el : null;
      try {
        v && v._beginPatch(), O(
          a,
          f,
          _,
          m,
          E,
          I,
          C
        );
      } finally {
        v && v._endPatch();
      }
    }
  }, B = (a, f, p, x, _, m, E, I) => {
    let C, v;
    const { props: N, shapeFlag: P, transition: k, dirs: V } = a;
    if (C = a.el = o(
      a.type,
      m,
      N && N.is,
      N
    ), P & 8 ? u(C, a.children) : P & 16 && T(
      a.children,
      C,
      null,
      x,
      _,
      sn(a, m),
      E,
      I
    ), V && ht(a, null, x, "created"), H(C, a, a.scopeId, E, x), N) {
      for (const se in N)
        se !== "value" && !Wt(se) && r(C, se, null, N[se], m, x);
      "value" in N && r(C, "value", null, N.value, m), (v = N.onVnodeBeforeMount) && je(v, x, a);
    }
    V && ht(a, null, x, "beforeMount");
    const G = Rl(_, k);
    G && k.beforeEnter(C), n(C, f, p), ((v = N && N.onVnodeMounted) || G || V) && xe(() => {
      try {
        v && je(v, x, a), G && k.enter(C), V && ht(a, null, x, "mounted");
      } finally {
      }
    }, _);
  }, H = (a, f, p, x, _) => {
    if (p && b(a, p), x)
      for (let m = 0; m < x.length; m++)
        b(a, x[m]);
    if (_) {
      let m = _.subTree;
      if (f === m || Lr(m.type) && (m.ssContent === f || m.ssFallback === f)) {
        const E = _.vnode;
        H(
          a,
          E,
          E.scopeId,
          E.slotScopeIds,
          _.parent
        );
      }
    }
  }, T = (a, f, p, x, _, m, E, I, C = 0) => {
    for (let v = C; v < a.length; v++) {
      const N = a[v] = I ? Ze(a[v]) : Ke(a[v]);
      g(
        null,
        N,
        f,
        p,
        x,
        _,
        m,
        E,
        I
      );
    }
  }, O = (a, f, p, x, _, m, E) => {
    const I = f.el = a.el;
    let { patchFlag: C, dynamicChildren: v, dirs: N } = f;
    C |= a.patchFlag & 16;
    const P = a.props || ie, k = f.props || ie;
    let V;
    if (p && pt(p, !1), (V = k.onVnodeBeforeUpdate) && je(V, p, f, a), N && ht(f, a, p, "beforeUpdate"), p && pt(p, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    v && (!a.dynamicChildren || a.dynamicChildren.length !== v.length) && (C = 0, E = !1, v = null), (P.innerHTML && k.innerHTML == null || P.textContent && k.textContent == null) && u(I, ""), v ? q(
      a.dynamicChildren,
      v,
      I,
      p,
      x,
      sn(f, _),
      m
    ) : E || re(
      a,
      f,
      I,
      null,
      p,
      x,
      sn(f, _),
      m,
      !1
    ), C > 0) {
      if (C & 16)
        _e(I, P, k, p, _);
      else if (C & 2 && P.class !== k.class && r(I, "class", null, k.class, _), C & 4 && r(I, "style", P.style, k.style, _), C & 8) {
        const G = f.dynamicProps;
        for (let se = 0; se < G.length; se++) {
          const Q = G[se], fe = P[Q], he = k[Q];
          (he !== fe || Q === "value") && r(I, Q, fe, he, _, p);
        }
      }
      C & 1 && a.children !== f.children && u(I, f.children);
    } else !E && v == null && _e(I, P, k, p, _);
    ((V = k.onVnodeUpdated) || N) && xe(() => {
      V && je(V, p, f, a), N && ht(f, a, p, "updated");
    }, x);
  }, q = (a, f, p, x, _, m, E) => {
    for (let I = 0; I < f.length; I++) {
      const C = a[I], v = f[I], N = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        C.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (C.type === Z || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !jt(C, v) || // - In the case of a component, it could contain anything.
        C.shapeFlag & 198) ? h(C.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      g(
        C,
        v,
        N,
        null,
        x,
        _,
        m,
        E,
        !0
      );
    }
  }, _e = (a, f, p, x, _) => {
    if (f !== p) {
      if (f !== ie)
        for (const m in f)
          !Wt(m) && !(m in p) && r(
            a,
            m,
            f[m],
            null,
            _,
            x
          );
      for (const m in p) {
        if (Wt(m)) continue;
        const E = p[m], I = f[m];
        E !== I && m !== "value" && r(a, m, I, E, _, x);
      }
      "value" in p && r(a, "value", f.value, p.value, _);
    }
  }, Pe = (a, f, p, x, _, m, E, I, C) => {
    const v = f.el = a ? a.el : l(""), N = f.anchor = a ? a.anchor : l("");
    let { patchFlag: P, dynamicChildren: k, slotScopeIds: V } = f;
    V && (I = I ? I.concat(V) : V), a == null ? (n(v, p, x), n(N, p, x), T(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      p,
      N,
      _,
      m,
      E,
      I,
      C
    )) : P > 0 && P & 64 && k && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren && a.dynamicChildren.length === k.length ? (q(
      a.dynamicChildren,
      k,
      p,
      _,
      m,
      E,
      I
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || _ && f === _.subTree) && Mr(
      a,
      f,
      !0
      /* shallow */
    )) : re(
      a,
      f,
      p,
      N,
      _,
      m,
      E,
      I,
      C
    );
  }, ke = (a, f, p, x, _, m, E, I, C) => {
    f.slotScopeIds = I, a == null ? f.shapeFlag & 512 ? _.ctx.activate(
      f,
      p,
      x,
      E,
      C
    ) : ut(
      f,
      p,
      x,
      _,
      m,
      E,
      C
    ) : ds(a, f, C);
  }, ut = (a, f, p, x, _, m, E) => {
    const I = a.component = Fl(
      a,
      x,
      _
    );
    if (fr(a) && (I.ctx.renderer = Nt), jl(I, !1, E), I.asyncDep) {
      if (_ && _.registerDep(I, ae, E), !a.el) {
        const C = I.subTree = ue(ct);
        U(null, C, f, p), a.placeholder = C.el;
      }
    } else
      ae(
        I,
        a,
        f,
        p,
        _,
        m,
        E
      );
  }, ds = (a, f, p) => {
    const x = f.component = a.component;
    if (_l(a, f, p))
      if (x.asyncDep && !x.asyncResolved) {
        z(x, f, p);
        return;
      } else
        x.next = f, x.update();
    else
      f.el = a.el, x.vnode = f;
  }, ae = (a, f, p, x, _, m, E) => {
    const I = () => {
      if (a.isMounted) {
        let { next: P, bu: k, u: V, parent: G, vnode: se } = a;
        {
          const Ue = Rr(a);
          if (Ue) {
            P && (P.el = se.el, z(a, P, E)), Ue.asyncDep.then(() => {
              xe(() => {
                a.isUnmounted || v();
              }, _);
            });
            return;
          }
        }
        let Q = P, fe;
        pt(a, !1), P ? (P.el = se.el, z(a, P, E)) : P = se, k && _s(k), (fe = P.props && P.props.onVnodeBeforeUpdate) && je(fe, G, P, se), pt(a, !0);
        const he = ei(a), Ne = a.subTree;
        a.subTree = he, g(
          Ne,
          he,
          // parent may have changed if it's in a teleport
          h(Ne.el),
          // anchor may have changed if it's in a fragment
          ps(Ne),
          a,
          _,
          m
        ), P.el = he.el, Q === null && xl(a, he.el), V && xe(V, _), (fe = P.props && P.props.onVnodeUpdated) && xe(
          () => je(fe, G, P, se),
          _
        );
      } else {
        let P;
        const { el: k, props: V } = f, { bm: G, m: se, parent: Q, root: fe, type: he } = a, Ne = Xt(f);
        pt(a, !1), G && _s(G), !Ne && (P = V && V.onVnodeBeforeMount) && je(P, Q, f), pt(a, !0);
        {
          fe.ce && fe.ce._hasShadowRoot() && fe.ce._injectChildStyle(
            he,
            a.parent ? a.parent.type : void 0
          );
          const Ue = a.subTree = ei(a);
          g(
            null,
            Ue,
            p,
            x,
            a,
            _,
            m
          ), f.el = Ue.el;
        }
        if (se && xe(se, _), !Ne && (P = V && V.onVnodeMounted)) {
          const Ue = f;
          xe(
            () => je(P, Q, Ue),
            _
          );
        }
        (f.shapeFlag & 256 || Q && Xt(Q.vnode) && Q.vnode.shapeFlag & 256) && a.a && xe(a.a, _), a.isMounted = !0, f = p = x = null;
      }
    };
    a.scope.on();
    const C = a.effect = new Hi(I);
    a.scope.off();
    const v = a.update = C.run.bind(C), N = a.job = C.runIfDirty.bind(C);
    N.i = a, N.id = a.uid, C.scheduler = () => On(N), pt(a, !0), v();
  }, z = (a, f, p) => {
    f.component = a;
    const x = a.vnode.props;
    a.vnode = f, a.next = null, Sl(a, f.props, x, p), Tl(a, f.children, p), Je(), Jn(a), Ge();
  }, re = (a, f, p, x, _, m, E, I, C = !1) => {
    const v = a && a.children, N = a ? a.shapeFlag : 0, P = f.children, { patchFlag: k, shapeFlag: V } = f;
    if (k > 0) {
      if (k & 128) {
        hs(
          v,
          P,
          p,
          x,
          _,
          m,
          E,
          I,
          C
        );
        return;
      } else if (k & 256) {
        ft(
          v,
          P,
          p,
          x,
          _,
          m,
          E,
          I,
          C
        );
        return;
      }
    }
    V & 8 ? (N & 16 && Dt(v, _, m), P !== v && u(p, P)) : N & 16 ? V & 16 ? hs(
      v,
      P,
      p,
      x,
      _,
      m,
      E,
      I,
      C
    ) : Dt(v, _, m, !0) : (N & 8 && u(p, ""), V & 16 && T(
      P,
      p,
      x,
      _,
      m,
      E,
      I,
      C
    ));
  }, ft = (a, f, p, x, _, m, E, I, C) => {
    a = a || Pt, f = f || Pt;
    const v = a.length, N = f.length, P = Math.min(v, N);
    let k;
    for (k = 0; k < P; k++) {
      const V = f[k] = C ? Ze(f[k]) : Ke(f[k]);
      g(
        a[k],
        V,
        p,
        null,
        _,
        m,
        E,
        I,
        C
      );
    }
    v > N ? Dt(
      a,
      _,
      m,
      !0,
      !1,
      P
    ) : T(
      f,
      p,
      x,
      _,
      m,
      E,
      I,
      C,
      P
    );
  }, hs = (a, f, p, x, _, m, E, I, C) => {
    let v = 0;
    const N = f.length;
    let P = a.length - 1, k = N - 1;
    for (; v <= P && v <= k; ) {
      const V = a[v], G = f[v] = C ? Ze(f[v]) : Ke(f[v]);
      if (jt(V, G))
        g(
          V,
          G,
          p,
          null,
          _,
          m,
          E,
          I,
          C
        );
      else
        break;
      v++;
    }
    for (; v <= P && v <= k; ) {
      const V = a[P], G = f[k] = C ? Ze(f[k]) : Ke(f[k]);
      if (jt(V, G))
        g(
          V,
          G,
          p,
          null,
          _,
          m,
          E,
          I,
          C
        );
      else
        break;
      P--, k--;
    }
    if (v > P) {
      if (v <= k) {
        const V = k + 1, G = V < N ? f[V].el : x;
        for (; v <= k; )
          g(
            null,
            f[v] = C ? Ze(f[v]) : Ke(f[v]),
            p,
            G,
            _,
            m,
            E,
            I,
            C
          ), v++;
      }
    } else if (v > k)
      for (; v <= P; )
        De(a[v], _, m, !0), v++;
    else {
      const V = v, G = v, se = /* @__PURE__ */ new Map();
      for (v = G; v <= k; v++) {
        const Ce = f[v] = C ? Ze(f[v]) : Ke(f[v]);
        Ce.key != null && se.set(Ce.key, v);
      }
      let Q, fe = 0;
      const he = k - G + 1;
      let Ne = !1, Ue = 0;
      const Ut = new Array(he);
      for (v = 0; v < he; v++) Ut[v] = 0;
      for (v = V; v <= P; v++) {
        const Ce = a[v];
        if (fe >= he) {
          De(Ce, _, m, !0);
          continue;
        }
        let Fe;
        if (Ce.key != null)
          Fe = se.get(Ce.key);
        else
          for (Q = G; Q <= k; Q++)
            if (Ut[Q - G] === 0 && jt(Ce, f[Q])) {
              Fe = Q;
              break;
            }
        Fe === void 0 ? De(Ce, _, m, !0) : (Ut[Fe - G] = v + 1, Fe >= Ue ? Ue = Fe : Ne = !0, g(
          Ce,
          f[Fe],
          p,
          null,
          _,
          m,
          E,
          I,
          C
        ), fe++);
      }
      const jn = Ne ? Al(Ut) : Pt;
      for (Q = jn.length - 1, v = he - 1; v >= 0; v--) {
        const Ce = G + v, Fe = f[Ce], Vn = f[Ce + 1], Hn = Ce + 1 < N ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Vn.el || Ar(Vn)
        ) : x;
        Ut[v] === 0 ? g(
          null,
          Fe,
          p,
          Hn,
          _,
          m,
          E,
          I,
          C
        ) : Ne && (Q < 0 || v !== jn[Q] ? dt(Fe, p, Hn, 2) : Q--);
      }
    }
  }, dt = (a, f, p, x, _ = null) => {
    const { el: m, type: E, transition: I, children: C, shapeFlag: v } = a;
    if (v & 6) {
      dt(a.component.subTree, f, p, x);
      return;
    }
    if (v & 128) {
      a.suspense.move(f, p, x);
      return;
    }
    if (v & 64) {
      E.move(a, f, p, Nt);
      return;
    }
    if (E === Z) {
      n(m, f, p);
      for (let P = 0; P < C.length; P++)
        dt(C[P], f, p, x);
      n(a.anchor, f, p);
      return;
    }
    if (E === xs) {
      J(a, f, p);
      return;
    }
    if (x !== 2 && v & 1 && I)
      if (x === 0)
        I.persisted && !m[en] ? n(m, f, p) : (I.beforeEnter(m), n(m, f, p), xe(() => I.enter(m), _));
      else {
        const { leave: P, delayLeave: k, afterLeave: V } = I, G = () => {
          a.ctx.isUnmounted ? i(m) : n(m, f, p);
        }, se = () => {
          const Q = m._isLeaving || !!m[en];
          m._isLeaving && m[en](
            !0
            /* cancelled */
          ), I.persisted && !Q ? G() : P(m, () => {
            G(), V && V();
          });
        };
        k ? k(m, G, se) : se();
      }
    else
      n(m, f, p);
  }, De = (a, f, p, x = !1, _ = !1) => {
    const {
      type: m,
      props: E,
      ref: I,
      children: C,
      dynamicChildren: v,
      shapeFlag: N,
      patchFlag: P,
      dirs: k,
      cacheIndex: V,
      memo: G
    } = a;
    if (P === -2 && (_ = !1), I != null && (Je(), qt(I, null, p, a, !0), Ge()), V != null && (f.renderCache[V] = void 0), N & 256) {
      f.ctx.deactivate(a);
      return;
    }
    const se = N & 1 && k, Q = !Xt(a);
    let fe;
    if (Q && (fe = E && E.onVnodeBeforeUnmount) && je(fe, f, a), N & 6)
      qr(a.component, p, x);
    else {
      if (N & 128) {
        a.suspense.unmount(p, x);
        return;
      }
      se && ht(a, null, f, "beforeUnmount"), N & 64 ? a.type.remove(
        a,
        f,
        p,
        Nt,
        x
      ) : v && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !v.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (m !== Z || P > 0 && P & 64) ? Dt(
        v,
        f,
        p,
        !1,
        !0
      ) : (m === Z && P & 384 || !_ && N & 16) && Dt(C, f, p), x && Un(a);
    }
    const he = G != null && V == null;
    (Q && (fe = E && E.onVnodeUnmounted) || se || he) && xe(() => {
      fe && je(fe, f, a), se && ht(a, null, f, "unmounted"), he && (a.el = null);
    }, p);
  }, Un = (a) => {
    const { type: f, el: p, anchor: x, transition: _ } = a;
    if (f === Z) {
      Yr(p, x);
      return;
    }
    if (f === xs) {
      M(a);
      return;
    }
    const m = () => {
      i(p), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (a.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: E, delayLeave: I } = _, C = () => E(p, m);
      I ? I(a.el, m, C) : C();
    } else
      m();
  }, Yr = (a, f) => {
    let p;
    for (; a !== f; )
      p = w(a), i(a), a = p;
    i(f);
  }, qr = (a, f, p) => {
    const { bum: x, scope: _, job: m, subTree: E, um: I, m: C, a: v } = a;
    ni(C), ni(v), x && _s(x), _.stop(), m && (m.flags |= 8, De(E, a, f, p)), I && xe(I, f), xe(() => {
      a.isUnmounted = !0;
    }, f);
  }, Dt = (a, f, p, x = !1, _ = !1, m = 0) => {
    for (let E = m; E < a.length; E++)
      De(a[E], f, p, x, _);
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
    a == null ? f._vnode && (De(f._vnode, null, null, !0), x = f._vnode.component) : g(
      f._vnode || null,
      a,
      f,
      null,
      null,
      null,
      p
    ), f._vnode = a, Gs || (Gs = !0, Jn(x), rr(), Gs = !1);
  }, Nt = {
    p: g,
    um: De,
    m: dt,
    r: Un,
    mt: ut,
    mc: T,
    pc: re,
    pbc: q,
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
function pt({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Rl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Mr(e, t, s = !1) {
  const n = e.children, i = t.children;
  if (j(n) && j(i))
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = Ze(i[r]), l.el = o.el), !s && l.patchFlag !== -2 && Mr(o, l)), l.type === Ks && (l.patchFlag === -1 && (l = i[r] = Ze(l)), l.el = o.el), l.type === ct && !l.el && (l.el = o.el);
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
  t && t.pendingBranch ? j(e) ? t.effects.push(...e) : t.effects.push(e) : Vo(e);
}
const Z = /* @__PURE__ */ Symbol.for("v-fgt"), Ks = /* @__PURE__ */ Symbol.for("v-txt"), ct = /* @__PURE__ */ Symbol.for("v-cmt"), xs = /* @__PURE__ */ Symbol.for("v-stc"), Qt = [];
let Ee = null;
function L(e = !1) {
  Qt.push(Ee = e ? null : []);
}
function $l() {
  Qt.pop(), Ee = Qt[Qt.length - 1] || null;
}
let os = 1;
function ii(e, t = !1) {
  os += e, e < 0 && Ee && t && (Ee.hasOnce = !0);
}
function $r(e) {
  return e.dynamicChildren = os > 0 ? Ee || Pt : null, $l(), os > 0 && Ee && Ee.push(e), e;
}
function D(e, t, s, n, i, r) {
  return $r(
    y(
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
function lt(e, t, s, n, i) {
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
function jt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const kr = ({ key: e }) => e ?? null, ws = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? le(e) || /* @__PURE__ */ ce(e) || K(e) ? { i: Me, r: e, k: t, f: !!s } : e : null);
function y(e, t = null, s = null, n = 0, i = null, r = e === Z ? 0 : 1, o = !1, l = !1) {
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
    ctx: Me
  };
  return l ? (Ms(c, s), r & 128 && e.normalize(c)) : s && (c.shapeFlag |= le(s) ? 8 : 16), os > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ee && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Ee.push(c), c;
}
const ue = Ol;
function Ol(e, t = null, s = null, n = 0, i = null, r = !1) {
  if ((!e || e === ol) && (e = ct), Or(e)) {
    const l = kt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Ms(l, s), os > 0 && !r && Ee && (l.shapeFlag & 6 ? Ee[Ee.indexOf(e)] = l : Ee.push(l)), l.patchFlag = -2, l;
  }
  if (Bl(e) && (e = e.__vccOpts), t) {
    t = kl(t);
    let { class: l, style: c } = t;
    l && !le(l) && (t.class = ze(l)), te(c) && (/* @__PURE__ */ Fs(c) && !j(c) && (c = pe({}, c)), t.style = In(c));
  }
  const o = le(e) ? 1 : Lr(e) ? 128 : Yo(e) ? 64 : te(e) ? 4 : K(e) ? 2 : 0;
  return y(
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
  return e ? /* @__PURE__ */ Fs(e) || Sr(e) ? pe({}, e) : e : null;
}
function kt(e, t, s = !1, n = !1) {
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
      s && r ? j(r) ? r.concat(ws(t)) : [r, ws(t)] : ws(t)
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
    ssContent: e.ssContent && kt(e.ssContent),
    ssFallback: e.ssFallback && kt(e.ssFallback),
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
function Se(e = "", t = !1) {
  return t ? (L(), lt(ct, null, e)) : ue(ct, null, e);
}
function Ke(e) {
  return e == null || typeof e == "boolean" ? ue(ct) : j(e) ? ue(
    Z,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Or(e) ? Ze(e) : ue(Ks, null, String(e));
}
function Ze(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : kt(e);
}
function Ms(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (j(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Ms(e, i()), i._c && (i._d = !0));
      return;
    } else {
      s = 32;
      const i = t._;
      !i && !Sr(t) ? t._ctx = Me : i === 3 && Me && (Me.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (K(t)) {
    if (n & 65) {
      Ms(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Me }, s = 32;
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
        t.class !== n.class && (t.class = ze([t.class, n.class]));
      else if (i === "style")
        t.style = In([t.style, n.style]);
      else if (Ls(i)) {
        const r = t[i], o = n[i];
        o && r !== o && !(j(r) && r.includes(o)) ? t[i] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !$s(i) && (t[i] = o);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function je(e, t, s, n = null) {
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
    propsDefaults: ie,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: ie,
    data: ie,
    props: ie,
    attrs: ie,
    slots: ie,
    refs: ie,
    setupState: ie,
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
let be = null;
const Nr = () => be || Me;
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
    (s) => be = s
  ), yn = t(
    "__VUE_SSR_SETTERS__",
    (s) => ls = s
  );
}
const us = (e) => {
  const t = be;
  return Rs(e), e.scope.on(), () => {
    e.scope.off(), Rs(t);
  };
}, ri = () => {
  be && be.scope.off(), Rs(null);
};
function Ur(e) {
  return e.vnode.shapeFlag & 4;
}
let ls = !1;
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
    const i = e.setupContext = n.length > 1 ? Kl(e) : null, r = us(e), o = as(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = Ai(o);
    if (Ge(), r(), (l || e.sp) && !Xt(e) && ur(e), l) {
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
  e.render || (e.render = n.render || We);
  {
    const i = us(e);
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
    return me(e, "get", ""), e[t];
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
      if (s in Zt)
        return Zt[s](e);
    },
    has(t, s) {
      return s in t || s in Zt;
    }
  })) : e.proxy;
}
function Bl(e) {
  return K(e) && "__vccOpts" in e;
}
const ot = (e, t) => /* @__PURE__ */ Do(e, t, ls), Wl = "3.5.39";
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
const jr = bn ? (e) => bn.createHTML(e) : (e) => e, zl = "http://www.w3.org/2000/svg", Jl = "http://www.w3.org/1998/Math/MathML", qe = typeof document < "u" ? document : null, ci = qe && /* @__PURE__ */ qe.createElement("template"), Gl = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const i = t === "svg" ? qe.createElementNS(zl, e) : t === "mathml" ? qe.createElementNS(Jl, e) : s ? qe.createElement(e, { is: s }) : qe.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => qe.createTextNode(e),
  createComment: (e) => qe.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => qe.querySelector(e),
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
}, Yl = /* @__PURE__ */ Symbol("_vtc");
function ql(e, t, s) {
  const n = e[Yl];
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
          s[l] == null && Kt(n, l, "");
        }
      else
        for (const o in t)
          s[o] == null && Kt(n, o, "");
    for (const o in s) {
      o === "display" && (r = !0);
      const l = s[o];
      l != null ? sc(
        e,
        o,
        !le(t) && t ? t[o] : void 0,
        l
      ) || Kt(n, o, l) : Kt(n, o, "");
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
function Kt(e, t, s) {
  if (j(s))
    s.forEach((n) => Kt(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = tc(e, t);
    ui.test(s) ? e.setProperty(
      at(n),
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
  let n = Ae(t);
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
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && le(n) && s === n;
}
const di = "http://www.w3.org/1999/xlink";
function hi(e, t, s, n, i, r = oo(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(di, t.slice(6, t.length)) : e.setAttributeNS(di, t, s) : s == null || r && !Di(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Re(s) ? String(s) : s
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
function Et(e, t, s, n) {
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
      Et(e, l, d, c);
    } else o && (nc(e, l, o, c), r[t] = void 0);
  }
}
const rc = /(Once|Passive|Capture)$/, oc = /^on:?(?:Once|Passive|Capture)$/;
function lc(e) {
  let t, s;
  for (; (s = e.match(rc)) && !oc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - s[1].length), t[s[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : at(e.slice(2)), t];
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
    if (j(i)) {
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
  t === "class" ? ql(e, n, o) : t === "style" ? ec(e, s, n) : Ls(t) ? $s(t) || ic(e, t, s, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : dc(e, t, n, o)) ? (pi(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && hi(e, t, n, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (hc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !le(n))) ? pi(e, Ae(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), hi(e, t, n, o));
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
  const n = Ae(t);
  return Array.isArray(s) ? s.some((i) => Ae(i) === n) : Object.keys(s).some((i) => Ae(i) === n);
}
const vi = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return j(t) ? (s) => _s(t, s) : t;
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
const Bt = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, i) {
    e[ln] = vi(i);
    const r = n || i.props && i.props.type === "number";
    Et(e, t ? "change" : "input", (o) => {
      o.target.composing || e[ln](bi(e.value, s, r));
    }), (s || r) && Et(e, "change", () => {
      e.value = bi(e.value, s, r);
    }), t || (Et(e, "compositionstart", pc), Et(e, "compositionend", yi), Et(e, "change", yi));
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
    const r = at(i.key);
    if (t.some(
      (o) => o === r || vc[o] === r
    ))
      return e(i);
  });
}, yc = /* @__PURE__ */ pe({ patchProp: fc }, Gl);
let _i;
function bc() {
  return _i || (_i = Pl(yc));
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
var es;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(es || (es = {}));
function wc() {
  const e = ji(!0), t = e.run(() => /* @__PURE__ */ Ie({}));
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
function St(e, ...t) {
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
    _n(i) && _n(n) && e.hasOwnProperty(s) && !/* @__PURE__ */ ce(n) && !/* @__PURE__ */ tt(n) ? e[s] = xn(i, n) : e[s] = n;
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
const { assign: it } = Object;
function Ec(e) {
  return !!(/* @__PURE__ */ ce(e) && e.effect);
}
function Tc(e, t, s, n) {
  const { state: i, actions: r, getters: o } = t, l = s.state.value[e];
  let c;
  function d() {
    l || (s.state.value[e] = i ? i() : {});
    const u = /* @__PURE__ */ Lo(s.state.value[e]);
    return it(u, r, Object.keys(o || {}).reduce((h, w) => (h[w] = $n(ot(() => {
      zs(s);
      const b = s._s.get(e);
      return o[w].call(b, b);
    })), h), {}));
  }
  return c = zr(e, d, t, s, n, !0), c;
}
function zr(e, t, s = {}, n, i, r) {
  let o;
  const l = it({ actions: {} }, s), c = { deep: !0 };
  let d, u, h = [], w = [], b;
  const S = n.state.value[e];
  !r && !S && (n.state.value[e] = {});
  let g;
  function R(T) {
    let O;
    d = u = !1, typeof T == "function" ? (T(n.state.value[e]), O = {
      type: es.patchFunction,
      storeId: e,
      events: b
    }) : (xn(n.state.value[e], T), O = {
      type: es.patchObject,
      payload: T,
      storeId: e,
      events: b
    });
    const q = g = Symbol();
    mt().then(() => {
      g === q && (d = !0);
    }), u = !0, St(h, O, n.state.value[e]);
  }
  const U = r ? function() {
    const { state: O } = s, q = O ? O() : {};
    this.$patch((_e) => {
      it(_e, q);
    });
  } : (
    /* istanbul ignore next */
    Wr
  );
  function F() {
    o.stop(), h = [], w = [], n._s.delete(e);
  }
  const J = (T, O = "") => {
    if (wi in T)
      return T[cn] = O, T;
    const q = function() {
      zs(n);
      const _e = Array.from(arguments), Pe = [], ke = [];
      function ut(z) {
        Pe.push(z);
      }
      function ds(z) {
        ke.push(z);
      }
      St(w, {
        args: _e,
        name: q[cn],
        store: W,
        after: ut,
        onError: ds
      });
      let ae;
      try {
        ae = T.apply(this && this.$id === e ? this : W, _e);
      } catch (z) {
        throw St(ke, z), z;
      }
      return ae instanceof Promise ? ae.then((z) => (St(Pe, z), z)).catch((z) => (St(ke, z), Promise.reject(z))) : (St(Pe, ae), ae);
    };
    return q[wi] = !0, q[cn] = O, q;
  }, M = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: xi.bind(null, w),
    $patch: R,
    $reset: U,
    $subscribe(T, O = {}) {
      const q = xi(h, T, O.detached, () => _e()), _e = o.run(() => Yt(() => n.state.value[e], (Pe) => {
        (O.flush === "sync" ? u : d) && T({
          storeId: e,
          type: es.direct,
          events: b
        }, Pe);
      }, it({}, c, O)));
      return q;
    },
    $dispose: F
  }, W = /* @__PURE__ */ Us(M);
  n._s.set(e, W);
  const H = (n._a && n._a.runWithContext || Sc)(() => n._e.run(() => (o = ji()).run(() => t({ action: J }))));
  for (const T in H) {
    const O = H[T];
    if (/* @__PURE__ */ ce(O) && !Ec(O) || /* @__PURE__ */ tt(O))
      r || (S && Ic(O) && (/* @__PURE__ */ ce(O) ? O.value = S[T] : xn(O, S[T])), n.state.value[e][T] = O);
    else if (typeof O == "function") {
      const q = J(O, T);
      H[T] = q, l.actions[T] = O;
    }
  }
  return it(W, H), it(/* @__PURE__ */ Y(W), H), Object.defineProperty(W, "$state", {
    get: () => n.state.value[e],
    set: (T) => {
      R((O) => {
        it(O, T);
      });
    }
  }), n._p.forEach((T) => {
    it(W, o.run(() => T({
      store: W,
      app: n._a,
      pinia: n,
      options: l
    })));
  }), S && r && s.hydrate && s.hydrate(W.$state, S), d = !0, u = !0, W;
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
    l || (d ? Gt(Br, null) : null), l && zs(l), l = Kr, l._s.has(n) || (r ? zr(n, t, i, l) : Tc(n, i, l)), l._s.get(n);
  }
  return o.$id = n, o;
}
function Pc() {
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
    autoPlayOnNewCue: !0,
    providers: Pc(),
    customCueRules: []
  };
}
const ge = /* @__PURE__ */ Js("settings", {
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
class Mc {
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
      return this.ctx().extensionSettings[Tt] ?? null;
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
      s.extensionSettings[Tt] = t, s.saveSettingsDebounced();
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
    return `${Tt}__settings`;
  }
  cachePrefix() {
    return `${Tt}:cache:`;
  }
  cacheKey(t) {
    return `${this.cachePrefix()}${t}`;
  }
}
function Lc() {
  return new Ac();
}
const Tt = "st-music-player", Ii = "stmp_cursor", Ei = "stmp_userlist";
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
  "Cannot play": "无法播放"
};
let Ct = null;
function Uc() {
  if (Ct) return Ct;
  try {
    if (typeof SillyTavern < "u") {
      const e = SillyTavern.getContext();
      e?.getCurrentLocale && (Ct = e.getCurrentLocale());
    }
  } catch {
  }
  return Ct || (Ct = (typeof navigator < "u" ? navigator.language || navigator.userLanguage : "en")?.toLowerCase() || "en"), Ct;
}
function ee(e) {
  return Uc().startsWith("zh") ? Nc[e] ?? e : e;
}
function ys() {
  return `stmp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
const fs = /* @__PURE__ */ Js("playlist", {
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
      return ge().settings.playMode;
    }
  },
  actions: {
    init(e) {
      this.chatIndexer = e;
    },
    setChatId(e) {
      this.chatId = e, this.list = this.list.filter((n) => n.source !== "chat"), this.loadFromStorage();
      const s = ge().storage;
      if (s) {
        const n = s.getMetadata(Ii);
        n && n.chatId === e && this.chatIndexer?.setCursor(e, n.lastScannedMessageId);
      }
    },
    loadFromStorage() {
      const t = ge().storage;
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
      const s = ge(), n = s.storage;
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
        console.warn(`[playlist] resolve failed for "${t.song}"`), typeof toastr < "u" && toastr.warning(`${ee("Cannot play")}: ${t.song}`);
        return;
      }
      await _t().loadAndPlay(i);
    },
    handleNewCues(e) {
      if (e.length === 0) return;
      const t = ge();
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
      const t = ge(), s = this.chatIndexer.scanMessage(
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
      const t = ge().storage;
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
      const s = ge().storage;
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
      const e = new Mc();
      this.audioEngine = e;
      const t = _t();
      e.on("timeupdate", () => {
        if (!e) return;
        t.currentTime = e.currentTime, t.duration = e.duration;
        const s = Ci(t.lyrics, e.currentTime), n = s ? t.lyrics.indexOf(s) : -1;
        t.currentLyricIndex = n;
      }), e.on("ended", () => {
        fs().next();
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
      this.volume = e, this.audioEngine?.setVolume(e / 100), ge().setVolume(e);
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
    return (t, s) => (L(), D("svg", {
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
      e.name === "play" ? (L(), D("polygon", Vc)) : e.name === "pause" ? (L(), D(Z, { key: 1 }, [
        s[0] || (s[0] = y("rect", {
          x: "6",
          y: "4",
          width: "4",
          height: "16",
          rx: "1",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[1] || (s[1] = y("rect", {
          x: "14",
          y: "4",
          width: "4",
          height: "16",
          rx: "1",
          fill: "currentColor",
          stroke: "none"
        }, null, -1))
      ], 64)) : e.name === "prev" ? (L(), D(Z, { key: 2 }, [
        s[2] || (s[2] = y("polygon", {
          points: "19 20 9 12 19 4 19 20",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[3] || (s[3] = y("line", {
          x1: "5",
          y1: "19",
          x2: "5",
          y2: "5"
        }, null, -1))
      ], 64)) : e.name === "next" ? (L(), D(Z, { key: 3 }, [
        s[4] || (s[4] = y("polygon", {
          points: "5 4 15 12 5 20 5 4",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[5] || (s[5] = y("line", {
          x1: "19",
          y1: "5",
          x2: "19",
          y2: "19"
        }, null, -1))
      ], 64)) : e.name === "repeat" ? (L(), D(Z, { key: 4 }, [
        s[6] || (s[6] = y("polyline", { points: "17 1 21 5 17 9" }, null, -1)),
        s[7] || (s[7] = y("path", { d: "M3 11V9a4 4 0 0 1 4-4h14" }, null, -1)),
        s[8] || (s[8] = y("polyline", { points: "7 23 3 19 7 15" }, null, -1)),
        s[9] || (s[9] = y("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" }, null, -1))
      ], 64)) : e.name === "repeat-one" ? (L(), D(Z, { key: 5 }, [
        s[10] || (s[10] = nn('<polyline points="17 1 21 5 17 9" data-v-287bc27a></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14" data-v-287bc27a></path><polyline points="7 23 3 19 7 15" data-v-287bc27a></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3" data-v-287bc27a></path><text x="12" y="14" text-anchor="middle" font-size="8" fill="currentColor" stroke="none" font-weight="bold" data-v-287bc27a>1</text>', 5))
      ], 64)) : e.name === "shuffle" ? (L(), D(Z, { key: 6 }, [
        s[11] || (s[11] = nn('<polyline points="16 3 21 3 21 8" data-v-287bc27a></polyline><line x1="4" y1="20" x2="21" y2="3" data-v-287bc27a></line><polyline points="21 16 21 21 16 21" data-v-287bc27a></polyline><line x1="15" y1="15" x2="21" y2="21" data-v-287bc27a></line><line x1="4" y1="4" x2="9" y2="9" data-v-287bc27a></line>', 5))
      ], 64)) : e.name === "search" ? (L(), D(Z, { key: 7 }, [
        s[12] || (s[12] = y("circle", {
          cx: "11",
          cy: "11",
          r: "8"
        }, null, -1)),
        s[13] || (s[13] = y("line", {
          x1: "21",
          y1: "21",
          x2: "16.65",
          y2: "16.65"
        }, null, -1))
      ], 64)) : e.name === "plus" ? (L(), D(Z, { key: 8 }, [
        s[14] || (s[14] = y("line", {
          x1: "12",
          y1: "5",
          x2: "12",
          y2: "19"
        }, null, -1)),
        s[15] || (s[15] = y("line", {
          x1: "5",
          y1: "12",
          x2: "19",
          y2: "12"
        }, null, -1))
      ], 64)) : e.name === "x" ? (L(), D(Z, { key: 9 }, [
        s[16] || (s[16] = y("line", {
          x1: "18",
          y1: "6",
          x2: "6",
          y2: "18"
        }, null, -1)),
        s[17] || (s[17] = y("line", {
          x1: "6",
          y1: "6",
          x2: "18",
          y2: "18"
        }, null, -1))
      ], 64)) : e.name === "chevron-down" ? (L(), D("polyline", Hc)) : e.name === "chevron-up" ? (L(), D("polyline", Kc)) : e.name === "music" ? (L(), D(Z, { key: 12 }, [
        s[18] || (s[18] = y("path", { d: "M9 18V5l12-2v13" }, null, -1)),
        s[19] || (s[19] = y("circle", {
          cx: "6",
          cy: "18",
          r: "3"
        }, null, -1)),
        s[20] || (s[20] = y("circle", {
          cx: "18",
          cy: "16",
          r: "3"
        }, null, -1))
      ], 64)) : e.name === "volume" ? (L(), D(Z, { key: 13 }, [
        s[21] || (s[21] = y("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[22] || (s[22] = y("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1)),
        s[23] || (s[23] = y("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }, null, -1))
      ], 64)) : e.name === "volume-mute" ? (L(), D(Z, { key: 14 }, [
        s[24] || (s[24] = y("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[25] || (s[25] = y("line", {
          x1: "23",
          y1: "9",
          x2: "17",
          y2: "15"
        }, null, -1)),
        s[26] || (s[26] = y("line", {
          x1: "17",
          y1: "9",
          x2: "23",
          y2: "15"
        }, null, -1))
      ], 64)) : e.name === "check" ? (L(), D("polyline", Bc)) : e.name === "loader" ? (L(), D(Z, { key: 16 }, [
        s[27] || (s[27] = nn('<line x1="12" y1="2" x2="12" y2="6" data-v-287bc27a></line><line x1="12" y1="18" x2="12" y2="22" data-v-287bc27a></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" data-v-287bc27a></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" data-v-287bc27a></line><line x1="2" y1="12" x2="6" y2="12" data-v-287bc27a></line><line x1="18" y1="12" x2="22" y2="12" data-v-287bc27a></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" data-v-287bc27a></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" data-v-287bc27a></line>', 8))
      ], 64)) : Se("", !0)
    ], 8, jc));
  }
}), xt = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, i] of t)
    s[n] = i;
  return s;
}, we = /* @__PURE__ */ xt(Wc, [["__scopeId", "data-v-287bc27a"]]), zc = { class: "stmp-collapsed-bar" }, Jc = { class: "stmp-collapsed-title" }, Gc = ["aria-label"], Yc = /* @__PURE__ */ bt({
  __name: "CollapsedBar",
  setup(e) {
    const t = _t(), s = ot(() => t.currentTrack?.name || ee("No Song"));
    return (n, i) => (L(), D("div", zc, [
      y("span", Jc, ne(s.value), 1),
      y("button", {
        class: "stmp-icon-btn",
        "aria-label": A(t).isPlaying ? A(ee)("Pause") : A(ee)("Play"),
        onClick: i[0] || (i[0] = Ws((r) => A(t).togglePlay(), ["stop"]))
      }, [
        ue(we, {
          name: A(t).isPlaying ? "pause" : "play",
          size: 16
        }, null, 8, ["name"])
      ], 8, Gc)
    ]));
  }
}), qc = /* @__PURE__ */ xt(Yc, [["__scopeId", "data-v-aea4f08b"]]), Xc = { class: "stmp-playlist" }, Zc = { class: "stmp-upload-area" }, Qc = ["aria-label"], ea = {
  key: 0,
  class: "stmp-empty"
}, ta = { class: "stmp-group-label" }, sa = ["onClick"], na = { class: "stmp-item-index" }, ia = { class: "stmp-item-info" }, ra = { class: "stmp-item-song" }, oa = {
  key: 0,
  class: "stmp-item-artist"
}, la = ["onClick"], ca = /* @__PURE__ */ bt({
  __name: "PlaylistView",
  setup(e) {
    const t = fs(), s = ge(), n = /* @__PURE__ */ Ie(null), i = () => {
      n.value?.click();
    }, r = async (u) => {
      const h = u.target;
      if (!h.files || !h.files[0]) return;
      const w = h.files[0], b = `stmp:audio:${Date.now()}-${w.name}`, S = s.storage;
      S && (await S.setBlob(b, w), t.addLocalFile(w.name, b)), h.value = "";
    }, o = ot(() => {
      const u = {
        chat: [],
        user: [],
        local: []
      };
      return t.list.forEach((h, w) => {
        u[h.source] && u[h.source].push({ index: w, item: h });
      }), u;
    }), l = {
      chat: ee("From Chat"),
      user: ee("My List"),
      local: ee("Local Files")
    };
    function c(u) {
      t.play(u);
    }
    function d(u) {
      t.removeItem(u);
    }
    return (u, h) => (L(), D("div", Xc, [
      y("div", Zc, [
        y("input", {
          type: "file",
          accept: "audio/*",
          ref_key: "fileInputRef",
          ref: n,
          onChange: r,
          style: { display: "none" }
        }, null, 544),
        y("button", {
          class: "stmp-upload-btn",
          "aria-label": A(ee)("Add local file"),
          onClick: i
        }, " + " + ne(A(ee)("Add local file")), 9, Qc)
      ]),
      A(t).isEmpty ? (L(), D("div", ea, ne(A(ee)("No Songs")), 1)) : (L(), D(Z, { key: 1 }, At(["chat", "user", "local"], (w) => y("div", {
        key: w,
        class: "stmp-group"
      }, [
        o.value[w].length ? (L(), D(Z, { key: 0 }, [
          y("div", ta, ne(l[w]), 1),
          (L(!0), D(Z, null, At(o.value[w], (b) => (L(), D("div", {
            key: b.item.id,
            class: ze(["stmp-item", { active: b.index === A(t).currentIndex }]),
            onClick: (S) => c(b.index)
          }, [
            y("span", na, ne(b.index + 1), 1),
            y("div", ia, [
              y("span", ra, ne(b.item.song), 1),
              b.item.artist ? (L(), D("span", oa, ne(b.item.artist), 1)) : Se("", !0)
            ]),
            y("button", {
              class: "stmp-item-del",
              onClick: Ws((S) => d(b.index), ["stop"])
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
    const t = Fc(), s = fs(), n = ge(), i = /* @__PURE__ */ Ie(t.keyword), r = /* @__PURE__ */ Ie(/* @__PURE__ */ new Set()), o = /* @__PURE__ */ Ie(null);
    async function l() {
      t.setKeyword(i.value);
      const b = Jr(n.settings.providers);
      await t.search(b);
    }
    const c = () => {
      l();
    };
    function d(b) {
      const S = b.provider + b.id;
      if (o.value === S) return;
      o.value = S;
      const g = s.list.length;
      s.addFromSearch(b);
      const R = s.list.length - 1;
      R >= g && s.play(R), setTimeout(() => {
        r.value.add(S), o.value = null;
      }, 600);
    }
    function u(b) {
      const S = b.provider + b.id;
      r.value.has(S) || (s.addFromSearch(b), r.value.add(S));
    }
    function h(b) {
      return r.value.has(b.provider + b.id);
    }
    function w(b) {
      return o.value === b.provider + b.id;
    }
    return (b, S) => (L(), D("div", ua, [
      y("div", fa, [
        Vt(y("input", {
          "onUpdate:modelValue": S[0] || (S[0] = (g) => i.value = g),
          class: "stmp-search-input",
          placeholder: A(ee)("Search Song..."),
          onKeydown: Vr(l, ["enter"])
        }, null, 40, da), [
          [Bt, i.value]
        ]),
        y("button", {
          class: "stmp-icon-btn",
          disabled: A(t).isSearching,
          onClick: l
        }, [
          A(t).isSearching ? (L(), lt(we, {
            key: 1,
            name: "loader",
            size: 16,
            class: "stmp-spin"
          })) : (L(), lt(we, {
            key: 0,
            name: "search",
            size: 16
          }))
        ], 8, ha)
      ]),
      A(t).error ? (L(), D("div", pa, [
        y("span", null, ne(A(t).error), 1),
        y("button", {
          class: "stmp-retry-btn",
          "aria-label": A(ee)("Retry"),
          onClick: c
        }, ne(A(ee)("Retry")), 9, ga)
      ])) : Se("", !0),
      A(t).isSearching ? (L(), D("div", ma, ne(A(ee)("Searching...")), 1)) : i.value && !A(t).results.length ? (L(), D("div", va, ne(A(ee)("No results")), 1)) : Se("", !0),
      A(t).results.length ? (L(), D("div", ya, [
        (L(!0), D(Z, null, At(A(t).results, (g) => (L(), D("div", {
          key: g.provider + g.id,
          class: ze(["stmp-result", { "stmp-result-playing": w(g) }])
        }, [
          y("div", {
            class: "stmp-result-info",
            onClick: (R) => d(g)
          }, [
            y("span", _a, ne(g.name), 1),
            g.artist ? (L(), D("span", xa, ne(g.artist), 1)) : Se("", !0)
          ], 8, ba),
          y("button", {
            class: ze(["stmp-icon-btn stmp-result-add", { added: h(g) }]),
            "aria-label": h(g) ? A(ee)("Added") : A(ee)("Add to list"),
            onClick: Ws((R) => u(g), ["stop"])
          }, [
            ue(we, {
              name: h(g) ? "check" : "plus",
              size: 16
            }, null, 8, ["name"])
          ], 10, wa)
        ], 2))), 128))
      ])) : Se("", !0)
    ]));
  }
}), Ca = /* @__PURE__ */ xt(Sa, [["__scopeId", "data-v-077a0b5a"]]), Ia = { class: "stmp-panel" }, Ea = { class: "stmp-topbar stmp-drag-handle" }, Ta = { class: "stmp-cover" }, Pa = ["src"], Ma = { class: "stmp-track-info" }, Ra = { class: "stmp-track-name" }, Aa = {
  key: 0,
  class: "stmp-track-artist"
}, La = ["aria-label"], $a = {
  key: 0,
  class: "stmp-lyric-current"
}, Oa = {
  key: 1,
  class: "stmp-lyric-next"
}, ka = {
  key: 2,
  class: "stmp-lyric-empty"
}, Da = { class: "stmp-progress" }, Na = ["value"], Ua = { class: "stmp-time" }, Fa = { class: "stmp-controls" }, ja = ["aria-label"], Va = ["aria-label"], Ha = ["aria-label"], Ka = ["aria-label"], Ba = ["aria-label"], Wa = ["value"], za = { class: "stmp-tabs" }, Ja = { class: "stmp-tab-content" }, Ga = /* @__PURE__ */ bt({
  __name: "PlayerPanel",
  emits: ["collapse"],
  setup(e) {
    const t = _t(), s = fs(), n = ge(), i = /* @__PURE__ */ Ie("list"), r = /* @__PURE__ */ Ie(!0), o = /* @__PURE__ */ Ie(!1), l = /* @__PURE__ */ Ie(!1);
    let c = null;
    const d = ot(() => t.currentTrack?.cover || ""), u = () => {
      o.value = !0;
    };
    Yt(
      () => t.currentTrack,
      () => {
        o.value = !1;
      }
    );
    const h = ot(
      () => t.duration > 0 ? t.currentTime / t.duration * 100 : 0
    ), w = ot(
      () => t.currentLyricIndex >= 0 ? t.lyrics[t.currentLyricIndex]?.text ?? null : null
    ), b = ot(() => {
      const H = t.currentLyricIndex;
      return H < 0 ? null : t.lyrics[H + 1]?.text ?? null;
    });
    function S(H) {
      const T = Math.floor(H / 60), O = Math.floor(H % 60);
      return T + ":" + O.toString().padStart(2, "0");
    }
    function g(H) {
      const T = H.target;
      t.seek(Number(T.value) / 100 * t.duration);
    }
    const R = ["list", "random", "single"], U = {
      list: "repeat",
      random: "shuffle",
      single: "repeat-one"
    };
    function F() {
      const H = n.settings.playMode, T = R.indexOf(H), O = R[(T + 1) % R.length];
      n.setPlayMode(O);
    }
    function J(H) {
      const T = H.target;
      t.setVolume(Number(T.value));
    }
    function M() {
      c && clearTimeout(c), l.value = !0;
    }
    function W() {
      c = setTimeout(() => {
        l.value = !1;
      }, 300);
    }
    function B() {
      t.volume > 0 ? t.setVolume(0) : t.setVolume(65);
    }
    return (H, T) => (L(), D("div", Ia, [
      y("div", Ea, [
        y("div", Ta, [
          d.value && !o.value ? (L(), D("img", {
            key: 0,
            src: d.value,
            alt: "cover",
            onError: u
          }, null, 40, Pa)) : (L(), lt(we, {
            key: 1,
            name: "music",
            size: 24
          }))
        ]),
        y("div", Ma, [
          y("div", Ra, ne(A(t).currentTrack?.name || A(ee)("No Song")), 1),
          A(t).currentTrack?.artist ? (L(), D("div", Aa, ne(A(t).currentTrack.artist), 1)) : Se("", !0)
        ]),
        y("button", {
          class: "stmp-icon-btn",
          "aria-label": A(ee)("Collapse panel"),
          onClick: T[0] || (T[0] = Ws((O) => H.$emit("collapse"), ["stop"]))
        }, [
          ue(we, {
            name: "chevron-down",
            size: 18
          })
        ], 8, La)
      ]),
      r.value ? (L(), D("div", {
        key: 0,
        class: "stmp-lyrics",
        onClick: T[1] || (T[1] = (O) => r.value = !1)
      }, [
        w.value ? (L(), D("div", $a, ne(w.value), 1)) : Se("", !0),
        b.value ? (L(), D("div", Oa, ne(b.value), 1)) : Se("", !0),
        !w.value && !b.value ? (L(), D("div", ka, [
          ue(we, {
            name: "music",
            size: 18
          })
        ])) : Se("", !0)
      ])) : (L(), D("div", {
        key: 1,
        class: "stmp-lyrics-toggle",
        onClick: T[2] || (T[2] = (O) => r.value = !0)
      }, [
        ue(we, {
          name: "chevron-up",
          size: 14
        }),
        Dr(" " + ne(A(ee)("show lyrics")), 1)
      ])),
      y("div", Da, [
        y("input", {
          type: "range",
          min: "0",
          max: "100",
          step: "0.1",
          value: h.value,
          class: "stmp-range",
          onInput: g
        }, null, 40, Na),
        y("div", Ua, [
          y("span", null, ne(S(A(t).currentTime)), 1),
          y("span", null, ne(S(A(t).duration)), 1)
        ])
      ]),
      y("div", Fa, [
        y("button", {
          class: "stmp-ctrl-btn",
          "aria-label": A(ee)("Toggle play mode"),
          onClick: F
        }, [
          ue(we, {
            name: U[A(n).settings.playMode],
            size: 18
          }, null, 8, ["name"])
        ], 8, ja),
        y("button", {
          class: "stmp-ctrl-btn",
          "aria-label": A(ee)("Previous"),
          onClick: T[3] || (T[3] = (O) => A(s).prev())
        }, [
          ue(we, {
            name: "prev",
            size: 18
          })
        ], 8, Va),
        y("button", {
          class: "stmp-ctrl-btn stmp-play-btn",
          "aria-label": A(t).isPlaying ? A(ee)("Pause") : A(ee)("Play"),
          onClick: T[4] || (T[4] = (O) => A(t).togglePlay())
        }, [
          ue(we, {
            name: A(t).isPlaying ? "pause" : "play",
            size: 24
          }, null, 8, ["name"])
        ], 8, Ha),
        y("button", {
          class: "stmp-ctrl-btn",
          "aria-label": A(ee)("Next"),
          onClick: T[5] || (T[5] = (O) => A(s).next())
        }, [
          ue(we, {
            name: "next",
            size: 18
          })
        ], 8, Ka),
        y("div", {
          class: "stmp-volume-container",
          onMouseenter: M,
          onMouseleave: W
        }, [
          y("button", {
            class: "stmp-ctrl-btn",
            "aria-label": A(ee)("Mute / Unmute"),
            onClick: B
          }, [
            ue(we, {
              name: A(t).volume === 0 ? "volume-mute" : "volume",
              size: 18
            }, null, 8, ["name"])
          ], 8, Ba),
          y("div", {
            class: ze(["stmp-volume-popup", { show: l.value }])
          }, [
            y("input", {
              type: "range",
              min: "0",
              max: "100",
              value: A(t).volume,
              class: "stmp-volume-vertical",
              orient: "vertical",
              onInput: J
            }, null, 40, Wa)
          ], 2)
        ], 32)
      ]),
      y("div", za, [
        y("button", {
          class: ze(["stmp-tab", { active: i.value === "list" }]),
          onClick: T[6] || (T[6] = (O) => i.value = "list")
        }, ne(A(ee)("List")), 3),
        y("button", {
          class: ze(["stmp-tab", { active: i.value === "search" }]),
          onClick: T[7] || (T[7] = (O) => i.value = "search")
        }, ne(A(ee)("Search")), 3)
      ]),
      y("div", Ja, [
        i.value === "list" ? (L(), lt(aa, { key: 0 })) : i.value === "search" ? (L(), lt(Ca, { key: 1 })) : Se("", !0)
      ])
    ]));
  }
}), Ya = /* @__PURE__ */ xt(Ga, [["__scopeId", "data-v-6faaf198"]]), qa = /* @__PURE__ */ bt({
  __name: "App",
  setup(e) {
    const t = ge(), s = _t(), n = /* @__PURE__ */ Ie(!1), i = /* @__PURE__ */ Ie(null), r = /* @__PURE__ */ Ie(typeof window < "u" && window.innerWidth < 768), o = () => {
      r.value = window.innerWidth < 768;
    }, l = (B) => {
      B.key === "Escape" && (n.value = !1), B.key === " " && B.target === document.body && (B.preventDefault(), s.togglePlay());
    };
    let c = 0, d = 0, u = 0, h = 0, w = !1, b = !1, S = null, g = null;
    function R(B) {
      const H = B.target;
      if (r.value) {
        if (H.closest("button")) return;
        W();
        return;
      }
      if (H.closest("input, .stmp-tab, .stmp-result, .stmp-item, .stmp-upload-btn, .stmp-search-input, .stmp-controls, .stmp-lyrics, .stmp-lyrics-toggle, .stmp-tabs, .stmp-tab-content") || n.value && (!H.closest(".stmp-drag-handle") || H.closest("button")) || !n.value && H.closest("button"))
        return;
      const T = i.value?.getBoundingClientRect();
      T && (c = B.clientX, d = B.clientY, u = T.left, h = T.top, w = !1, b = !0, i.value && (i.value.style.left = T.left + "px", i.value.style.top = T.top + "px", i.value.style.right = "auto", i.value.style.bottom = "auto"), S = U, g = F, document.addEventListener("pointermove", S), document.addEventListener("pointerup", g), B.preventDefault());
    }
    function U(B) {
      if (!i.value || !b) return;
      const H = B.clientX - c, T = B.clientY - d;
      (Math.abs(H) > 3 || Math.abs(T) > 3) && (w = !0);
      let O = u + H, q = h + T;
      const _e = i.value.offsetWidth || 60, Pe = i.value.offsetHeight || 40, ke = window.innerWidth - _e, ut = window.innerHeight - Pe;
      O = Math.max(0, Math.min(O, ke)), q = Math.max(0, Math.min(q, ut)), i.value.style.left = O + "px", i.value.style.top = q + "px";
    }
    function F() {
      if (b = !1, S && document.removeEventListener("pointermove", S), g && document.removeEventListener("pointerup", g), S = null, g = null, !w) {
        W();
        return;
      }
      i.value && (t.setPosition({
        x: i.value.offsetLeft,
        y: i.value.offsetTop
      }), n.value && mt(() => J()));
    }
    function J() {
      if (!i.value || r.value) return;
      const B = i.value.getBoundingClientRect(), H = i.value.offsetWidth, T = i.value.offsetHeight;
      let O = B.left, q = B.top;
      O + H > window.innerWidth && (O = window.innerWidth - H), q + T > window.innerHeight && (q = window.innerHeight - T), O < 0 && (O = 0), q < 0 && (q = 0), i.value.style.left = O + "px", i.value.style.top = q + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", t.setPosition({ x: O, y: q });
    }
    function M() {
      if (!i.value || !r.value) return;
      const B = i.value.offsetHeight || 38;
      i.value.style.left = "0px", i.value.style.top = window.innerHeight - B + "px", i.value.style.right = "auto", i.value.style.bottom = "auto";
    }
    function W() {
      n.value = !n.value, n.value ? mt(() => {
        r.value ? M() : J();
      }) : mt(() => M());
    }
    return hr(() => {
      const B = t.settings.position;
      B && i.value && !r.value && (i.value.style.left = B.x + "px", i.value.style.top = B.y + "px", i.value.style.right = "auto", i.value.style.bottom = "auto"), r.value && mt(() => M()), window.addEventListener("resize", () => {
        o(), r.value && mt(() => M());
      }), window.addEventListener("keydown", l);
    }), pr(() => {
      F(), window.removeEventListener("resize", o), window.removeEventListener("keydown", l);
    }), (B, H) => (L(), D("div", {
      ref_key: "widgetRef",
      ref: i,
      class: ze(["stmp-widget", {
        "stmp-expanded": n.value,
        "stmp-collapsed": !n.value,
        "stmp-mobile": r.value
      }]),
      onPointerdown: R
    }, [
      n.value ? (L(), lt(Ya, {
        key: 1,
        onCollapse: W
      })) : (L(), lt(qc, { key: 0 }))
    ], 34));
  }
}), Xa = /* @__PURE__ */ xt(qa, [["__scopeId", "data-v-890a79d4"]]), Za = { class: "stmp-settings" }, Qa = { class: "stmp-setting-group" }, eu = { class: "stmp-setting-row" }, tu = ["checked", "onChange"], su = ["onUpdate:modelValue"], nu = ["onUpdate:modelValue"], iu = ["onUpdate:modelValue"], ru = { class: "stmp-setting-group" }, ou = { class: "stmp-setting-label" }, lu = ["value"], cu = { class: "stmp-setting-group" }, au = ["value"], uu = ["value"], fu = { class: "stmp-setting-group" }, du = { class: "stmp-setting-row" }, hu = ["checked"], pu = { class: "stmp-setting-group" }, gu = { class: "stmp-rules" }, mu = ["onClick"], vu = { class: "stmp-rule-add" }, yu = /* @__PURE__ */ bt({
  __name: "SettingsView",
  setup(e) {
    const t = ge(), s = /* @__PURE__ */ Ie(""), n = [
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
      const g = S.target;
      t.setVolume(Number(g.value));
    }
    function c(S) {
      const g = S.target;
      t.setPlayMode(g.value);
    }
    function d(S) {
      const g = S.target;
      t.settings.autoPlayOnNewCue = g.checked, t.save();
    }
    const u = async () => {
      const S = t.storage;
      S && (await S.clearCache(), toastr.success("缓存已清理"));
    }, h = () => {
      const S = JSON.stringify(t.settings, null, 2), g = new Blob([S], { type: "application/json" }), R = URL.createObjectURL(g), U = document.createElement("a");
      U.href = R, U.download = "st-music-player-settings.json", U.click(), URL.revokeObjectURL(R);
    }, w = () => {
      const S = document.createElement("input");
      S.type = "file", S.accept = ".json", S.onchange = async (g) => {
        const R = g.target.files?.[0];
        if (!R) return;
        const U = await R.text();
        try {
          const F = JSON.parse(U);
          if (typeof F != "object" || F === null) throw new Error("Not an object");
          const J = ["volume", "playMode", "position", "autoPlayOnNewCue", "providers", "customCueRules"], M = {};
          for (const B of J)
            B in F && (M[B] = F[B]);
          if (typeof M.volume != "number" || M.volume < 0 || M.volume > 100)
            throw new Error("Invalid volume");
          if (typeof M.playMode != "string" || !["list", "random", "single"].includes(M.playMode))
            throw new Error("Invalid playMode");
          if (M.providers && !Array.isArray(M.providers))
            throw new Error("Invalid providers");
          if (M.customCueRules && !Array.isArray(M.customCueRules))
            throw new Error("Invalid customCueRules");
          const W = ge();
          Object.assign(W.settings, M), W.save(), toastr.success("设置已导入");
        } catch (F) {
          console.error("Import failed", F), toastr.error("导入失败: " + (F instanceof Error ? F.message : "JSON 格式错误"));
        }
      }, S.click();
    };
    function b(S) {
      const g = t.settings.providers.find((R) => R.id === S);
      g && (g.enabled = !g.enabled, t.save());
    }
    return (S, g) => (L(), D("div", Za, [
      y("div", Qa, [
        g[4] || (g[4] = y("div", { class: "stmp-setting-label" }, "Providers", -1)),
        (L(!0), D(Z, null, At(A(t).settings.providers, (R) => (L(), D("div", {
          key: R.id,
          class: "stmp-provider-config"
        }, [
          y("label", eu, [
            y("span", null, ne(i[R.id] || R.id), 1),
            y("input", {
              type: "checkbox",
              checked: R.enabled,
              onChange: (U) => b(R.id)
            }, null, 40, tu)
          ]),
          R.id === "netease" ? Vt((L(), D("input", {
            key: 0,
            class: "stmp-provider-input",
            "onUpdate:modelValue": (U) => R.config.baseURL = U,
            placeholder: "API baseURL",
            onChange: g[0] || (g[0] = (U) => A(t).save())
          }, null, 40, su)), [
            [Bt, R.config.baseURL]
          ]) : Se("", !0),
          R.id === "custom" ? (L(), D(Z, { key: 1 }, [
            Vt(y("input", {
              class: "stmp-provider-input",
              "onUpdate:modelValue": (U) => R.config.searchURL = U,
              placeholder: "Search URL",
              onChange: g[1] || (g[1] = (U) => A(t).save())
            }, null, 40, nu), [
              [Bt, R.config.searchURL]
            ]),
            Vt(y("input", {
              class: "stmp-provider-input",
              "onUpdate:modelValue": (U) => R.config.resolveURL = U,
              placeholder: "Resolve URL",
              onChange: g[2] || (g[2] = (U) => A(t).save())
            }, null, 40, iu), [
              [Bt, R.config.resolveURL]
            ])
          ], 64)) : Se("", !0)
        ]))), 128))
      ]),
      y("div", ru, [
        y("div", ou, "Default Volume: " + ne(A(t).settings.volume), 1),
        y("input", {
          type: "range",
          min: "0",
          max: "100",
          value: A(t).settings.volume,
          class: "stmp-range",
          onInput: l
        }, null, 40, lu)
      ]),
      y("div", cu, [
        g[5] || (g[5] = y("div", { class: "stmp-setting-label" }, "Default Play Mode", -1)),
        y("select", {
          class: "stmp-select",
          value: A(t).settings.playMode,
          onChange: c
        }, [
          (L(), D(Z, null, At(n, (R) => y("option", {
            key: R.value,
            value: R.value
          }, ne(R.label), 9, uu)), 64))
        ], 40, au)
      ]),
      y("div", fu, [
        y("div", du, [
          g[6] || (g[6] = y("span", null, "Auto-play on new cue", -1)),
          y("input", {
            type: "checkbox",
            checked: A(t).settings.autoPlayOnNewCue,
            onChange: d
          }, null, 40, hu)
        ])
      ]),
      y("div", pu, [
        g[7] || (g[7] = y("div", { class: "stmp-setting-label" }, "Custom Cue Rules (Regex)", -1)),
        y("div", gu, [
          (L(!0), D(Z, null, At(A(t).settings.customCueRules, (R, U) => (L(), D("div", {
            key: U,
            class: "stmp-rule"
          }, [
            y("code", null, ne(R), 1),
            y("button", {
              class: "stmp-rule-del",
              onClick: (F) => o(U)
            }, "✕", 8, mu)
          ]))), 128))
        ]),
        y("div", vu, [
          Vt(y("input", {
            "onUpdate:modelValue": g[3] || (g[3] = (R) => s.value = R),
            class: "stmp-rule-input",
            placeholder: "Add regex rule...",
            onKeydown: Vr(r, ["enter"])
          }, null, 544), [
            [Bt, s.value]
          ]),
          y("button", {
            class: "stmp-rule-add-btn",
            onClick: r
          }, "+")
        ])
      ]),
      y("div", { class: "stmp-setting-group" }, [
        g[8] || (g[8] = y("div", { class: "stmp-setting-label" }, "Data", -1)),
        y("div", { class: "stmp-data-btns" }, [
          y("button", {
            class: "stmp-data-btn",
            "aria-label": "清理缓存",
            onClick: u
          }, "清理缓存"),
          y("button", {
            class: "stmp-data-btn",
            "aria-label": "导出数据",
            onClick: h
          }, "导出数据"),
          y("button", {
            class: "stmp-data-btn",
            "aria-label": "导入数据",
            onClick: w
          }, "导入数据")
        ])
      ])
    ]));
  }
}), bu = /* @__PURE__ */ xt(yu, [["__scopeId", "data-v-32510a40"]]);
class _u {
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
function xu() {
  return new _u();
}
const wu = [
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
function Pi(e, t = []) {
  const s = /* @__PURE__ */ new Map(), n = (i) => {
    s.has(i.index) || s.set(i.index, i);
  };
  for (const i of wu)
    for (const r of Ti(i, e)) n(r);
  for (const i of t)
    try {
      const r = new RegExp(i, "g");
      for (const o of Ti(r, e)) n(o);
    } catch {
    }
  return [...s.values()].sort((i, r) => i.index - r.index).map((i) => i.cue);
}
class Su {
  constructor(t) {
    this.cursors = /* @__PURE__ */ new Map(), this.getChatMessage = t;
  }
  scanIncremental(t, s, n, i = []) {
    const r = [];
    for (let o = s; o <= n; o++) {
      const l = this.getChatMessage(o);
      if (l === void 0) continue;
      const c = Pi(l, i);
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
    const r = Pi(i, n), o = r.length > 0 ? r.at(-1) : null;
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
let Lt = null, Xe = null, ts = null, ss = null, $t = null, As = null;
const Cu = `
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
function Iu() {
  const e = $("#extensions_settings2");
  if (!e || !e.length || (e.append(Cu), ss = e.children(".inline-drawer").last()[0] ?? null, !ss)) return;
  const t = ss.querySelector("#stmp-settings-mount");
  t && As && ($t = Hr(bu), $t.use(As), $t.mount(t));
}
function Eu() {
  $t && ($t.unmount(), $t = null), ss?.remove(), ss = null;
}
function Tu(e, t, s) {
  Xe = xu(), Xe.on("chat-changed", () => {
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
function Pu(e, t, s) {
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
async function Au() {
  try {
    const e = document.createElement("div");
    e.id = "st-music-player-root", document.documentElement.appendChild(e);
    const t = wc();
    As = t, Lt = Hr(Xa), Lt.use(t), Lt.mount(e);
    const s = ge(), n = Lc();
    s.init(n);
    const i = _t();
    i.init(), i.setVolume(s.settings.volume);
    const r = new Su((c) => SillyTavern.getContext().chat[c]?.mes), o = fs();
    o.init(r), Iu();
    const l = SillyTavern.getContext();
    ts = () => {
      Tu(r, o, s), Pu(r, o, s);
    }, l.eventSource.on(l.event_types.APP_READY, ts), console.log("[ST-Music-Player] 播放器加载完成");
  } catch (e) {
    console.error("[ST-Music-Player] init failed:", e);
  }
}
function Gr() {
  if (ts) {
    try {
      const t = SillyTavern.getContext();
      t.eventSource.removeListener(t.event_types.APP_READY, ts);
    } catch {
    }
    ts = null;
  }
  if (Xe?.stop(), Xe = null, Lt) {
    try {
      _t().destroy();
    } catch {
    }
    Lt.unmount(), Lt = null;
  }
  const e = document.getElementById("st-music-player-root");
  e && e.remove(), Eu(), As = null;
}
function Lu() {
  Gr();
}
async function Mu() {
  try {
    const e = SillyTavern.getContext();
    delete e.extensionSettings[Tt], e.saveSettingsDebounced();
  } catch (e) {
    console.error("[ST-Music-Player] clean: failed to delete settings:", e);
  }
  try {
    const e = SillyTavern.libs?.localforage;
    if (e && typeof e.keys == "function") {
      const t = await e.keys();
      await Promise.all(
        t.filter((s) => s.startsWith(Tt) || s.startsWith("stmp:")).map((s) => e.removeItem(s))
      );
    }
  } catch (e) {
    console.error("[ST-Music-Player] clean: failed to clear localforage:", e);
  }
}
async function $u() {
  await Mu(), Gr();
}
export {
  Mu as clean,
  $u as delete,
  Gr as destroy,
  Lu as disable,
  Au as init
};
