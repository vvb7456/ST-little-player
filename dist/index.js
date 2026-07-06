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
const ne = {}, Tt = [], We = () => {
}, Ri = () => !1, Ls = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), $s = (e) => e.startsWith("onUpdate:"), pe = Object.assign, Sn = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Xr = Object.prototype.hasOwnProperty, Y = (e, t) => Xr.call(e, t), V = Array.isArray, Pt = (e) => cs(e) === "[object Map]", Mi = (e) => cs(e) === "[object Set]", Kn = (e) => cs(e) === "[object Date]", B = (e) => typeof e == "function", le = (e) => typeof e == "string", Me = (e) => typeof e == "symbol", ee = (e) => e !== null && typeof e == "object", Ai = (e) => (ee(e) || B(e)) && B(e.then) && B(e.catch), Li = Object.prototype.toString, cs = (e) => Li.call(e), Zr = (e) => cs(e).slice(8, -1), $i = (e) => cs(e) === "[object Object]", Os = (e) => le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Wt = /* @__PURE__ */ wn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ks = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Qr = /-\w/g, Ae = ks(
  (e) => e.replace(Qr, (t) => t.slice(1).toUpperCase())
), eo = /\B([A-Z])/g, at = ks(
  (e) => e.replace(eo, "-$1").toLowerCase()
), Oi = ks((e) => e.charAt(0).toUpperCase() + e.slice(1)), qs = ks(
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
  if (V(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], i = le(n) ? io(n) : In(n);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (le(e) || ee(e))
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
  else if (V(e))
    for (let s = 0; s < e.length; s++) {
      const n = ze(e[s]);
      n && (t += n + " ");
    }
  else if (ee(e))
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
  if (s = Me(e), n = Me(t), s || n)
    return e === t;
  if (s = V(e), n = V(t), s || n)
    return s && n ? lo(e, t) : !1;
  if (s = ee(e), n = ee(t), s || n) {
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
const Ui = (e) => !!(e && e.__v_isRef === !0), se = (e) => le(e) ? e : e == null ? "" : V(e) || ee(e) && (e.toString === Li || !B(e.toString)) ? Ui(e) ? se(e.value) : JSON.stringify(e, Ni, 2) : String(e), Ni = (e, t) => Ui(t) ? Ni(e, t.value) : Pt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], r) => (s[Ys(n, r) + " =>"] = i, s),
    {}
  )
} : Mi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => Ys(s))
} : Me(t) ? Ys(t) : ee(t) && !V(t) && !$i(t) ? String(t) : t, Ys = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Me(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
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
let re;
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
    const t = re, s = Le;
    re = this, Le = !0;
    try {
      return this.fn();
    } finally {
      zi(this), re = t, Le = s, this.flags &= -3;
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
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ns) || (e.globalVersion = ns, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !un(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = re, n = Le;
  re = e, Le = !0;
  try {
    Wi(e);
    const i = e.fn(e._value);
    (t.version === 0 || Be(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    re = s, Le = n, zi(e), e.flags &= -3;
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
    const s = re;
    re = void 0;
    try {
      t();
    } finally {
      re = s;
    }
  }
}
let ns = 0;
class uo {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Mn {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!re || !Le || re === this.computed)
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
const Ss = /* @__PURE__ */ new WeakMap(), gt = /* @__PURE__ */ Symbol(
  ""
), fn = /* @__PURE__ */ Symbol(
  ""
), is = /* @__PURE__ */ Symbol(
  ""
);
function me(e, t, s) {
  if (Le && re) {
    let n = Ss.get(e);
    n || Ss.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(s);
    i || (n.set(s, i = new Mn()), i.map = n, i.key = s), i.track();
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
    const c = V(e), d = c && Os(s);
    if (c && s === "length") {
      const u = Number(n);
      o.forEach((h, w) => {
        (w === "length" || w === is || !Me(w) && w >= u) && l(h);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), d && l(o.get(is)), t) {
        case "add":
          c ? d && l(o.get("length")) : (l(o.get(gt)), Pt(e) && l(o.get(fn)));
          break;
        case "delete":
          c || (l(o.get(gt)), Pt(e) && l(o.get(fn)));
          break;
        case "set":
          Pt(e) && l(o.get(gt));
          break;
      }
  }
  Pn();
}
function fo(e, t) {
  const s = Ss.get(e);
  return s && s.get(t);
}
function _t(e) {
  const t = /* @__PURE__ */ q(e);
  return t === e ? t : (me(t, "iterate", is), /* @__PURE__ */ Ee(e) ? t : t.map($e));
}
function Us(e) {
  return me(e = /* @__PURE__ */ q(e), "iterate", is), e;
}
function He(e, t) {
  return /* @__PURE__ */ st(e) ? $t(/* @__PURE__ */ tt(e) ? $e(t) : t) : $e(t);
}
const ho = {
  __proto__: null,
  [Symbol.iterator]() {
    return Zs(this, Symbol.iterator, (e) => He(this, e));
  },
  concat(...e) {
    return _t(this).concat(
      ...e.map((t) => V(t) ? _t(t) : t)
    );
  },
  entries() {
    return Zs(this, "entries", (e) => (e[1] = He(this, e[1]), e));
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
      (s) => s.map((n) => He(this, n)),
      arguments
    );
  },
  find(e, t) {
    return qe(
      this,
      "find",
      e,
      t,
      (s) => He(this, s),
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
      (s) => He(this, s),
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
    return _t(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Qs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return qe(this, "map", e, t, void 0, arguments);
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
    return qe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ft(this, "splice", e);
  },
  toReversed() {
    return _t(this).toReversed();
  },
  toSorted(e) {
    return _t(this).toSorted(e);
  },
  toSpliced(...e) {
    return _t(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ft(this, "unshift", e);
  },
  values() {
    return Zs(this, "values", (e) => He(this, e));
  }
};
function Zs(e, t, s) {
  const n = Us(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ Ee(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = s(r.value)), r;
  }), i;
}
const po = Array.prototype;
function qe(e, t, s, n, i, r) {
  const o = Us(e), l = o !== e && !/* @__PURE__ */ Ee(e), c = o[t];
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
  const i = Us(e), r = i !== e && !/* @__PURE__ */ Ee(e);
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
  const n = /* @__PURE__ */ q(e);
  me(n, "iterate", is);
  const i = n[t](...s);
  return (i === -1 || i === !1) && /* @__PURE__ */ Fs(s[0]) ? (s[0] = /* @__PURE__ */ q(s[0]), n[t](...s)) : i;
}
function Ft(e, t, s = []) {
  Je(), Tn();
  const n = (/* @__PURE__ */ q(e))[t].apply(e, s);
  return Pn(), Ge(), n;
}
const go = /* @__PURE__ */ wn("__proto__,__v_isRef,__isVue"), Yi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Me)
);
function mo(e) {
  Me(e) || (e = String(e));
  const t = /* @__PURE__ */ q(this);
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
    if ((Me(s) ? Yi.has(s) : go(s)) || (i || me(t, "get", s), r))
      return l;
    if (/* @__PURE__ */ ce(l)) {
      const c = o && Os(s) ? l : l.value;
      return i && ee(c) ? /* @__PURE__ */ hn(c) : c;
    }
    return ee(l) ? i ? /* @__PURE__ */ hn(l) : /* @__PURE__ */ Ns(l) : l;
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
      const d = /* @__PURE__ */ st(r);
      if (!/* @__PURE__ */ Ee(n) && !/* @__PURE__ */ st(n) && (r = /* @__PURE__ */ q(r), n = /* @__PURE__ */ q(n)), !o && /* @__PURE__ */ ce(r) && !/* @__PURE__ */ ce(n))
        return d || (r.value = n), !0;
    }
    const l = o ? Number(s) < t.length : Y(t, s), c = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ ce(t) ? t : i
    );
    return t === /* @__PURE__ */ q(i) && c && (l ? Be(n, r) && Qe(t, "set", s, n) : Qe(t, "add", s, n)), c;
  }
  deleteProperty(t, s) {
    const n = Y(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && Qe(t, "delete", s, void 0), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Me(s) || !Yi.has(s)) && me(t, "has", s), n;
  }
  ownKeys(t) {
    return me(
      t,
      "iterate",
      V(t) ? "length" : gt
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
    const i = this.__v_raw, r = /* @__PURE__ */ q(i), o = Pt(r), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, d = i[e](...n), u = s ? dn : t ? $t : $e;
    return !t && me(
      r,
      "iterate",
      c ? fn : gt
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
      const r = this.__v_raw, o = /* @__PURE__ */ q(r), l = /* @__PURE__ */ q(i);
      e || (Be(i, l) && me(o, "get", i), me(o, "get", l));
      const { has: c } = gs(o), d = t ? dn : e ? $t : $e;
      if (c.call(o, i))
        return d(r.get(i));
      if (c.call(o, l))
        return d(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && me(/* @__PURE__ */ q(i), "iterate", gt), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ q(r), l = /* @__PURE__ */ q(i);
      return e || (Be(i, l) && me(o, "has", i), me(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ q(l), d = t ? dn : e ? $t : $e;
      return !e && me(c, "iterate", gt), l.forEach((u, h) => i.call(r, d(u), d(h), o));
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
        const r = /* @__PURE__ */ q(this), o = gs(r), l = /* @__PURE__ */ q(i), c = !t && !/* @__PURE__ */ Ee(i) && !/* @__PURE__ */ st(i) ? l : i;
        return o.has.call(r, c) || Be(i, c) && o.has.call(r, i) || Be(l, c) && o.has.call(r, l) || (r.add(c), Qe(r, "add", c, c)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ Ee(r) && !/* @__PURE__ */ st(r) && (r = /* @__PURE__ */ q(r));
        const o = /* @__PURE__ */ q(this), { has: l, get: c } = gs(o);
        let d = l.call(o, i);
        d || (i = /* @__PURE__ */ q(i), d = l.call(o, i));
        const u = c.call(o, i);
        return o.set(i, r), d ? Be(r, u) && Qe(o, "set", i, r) : Qe(o, "add", i, r), this;
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
    Y(s, i) && i in n ? s : n,
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
function Ns(e) {
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
  if (!ee(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
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
  return !Y(e, "__v_skip") && Object.isExtensible(e) && ki(e, "__v_skip", !0), e;
}
const $e = (e) => ee(e) ? /* @__PURE__ */ Ns(e) : e, $t = (e) => ee(e) ? /* @__PURE__ */ hn(e) : e;
// @__NO_SIDE_EFFECTS__
function ce(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  return Ro(e, !1);
}
function Ro(e, t) {
  return /* @__PURE__ */ ce(e) ? e : new Mo(e, t);
}
class Mo {
  constructor(t, s) {
    this.dep = new Mn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ q(t), this._value = s ? t : $e(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Ee(t) || /* @__PURE__ */ st(t);
    t = n ? t : /* @__PURE__ */ q(t), Be(t, s) && (this._rawValue = t, this._value = n ? t : $e(t), this.dep.trigger());
  }
}
function L(e) {
  return /* @__PURE__ */ ce(e) ? e.value : e;
}
const Ao = {
  get: (e, t, s) => t === "__v_raw" ? e : L(Reflect.get(e, t, s)),
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
  const t = V(e) ? new Array(e.length) : {};
  for (const s in e)
    t[s] = Oo(e, s);
  return t;
}
class $o {
  constructor(t, s, n) {
    this._object = t, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = Me(s) ? s : String(s), this._raw = /* @__PURE__ */ q(t);
    let i = !0, r = t;
    if (!V(t) || Me(this._key) || !Os(this._key))
      do
        i = !/* @__PURE__ */ Fs(r) || /* @__PURE__ */ Ee(r);
      while (i && (r = r.__v_raw));
    this._shallow = i;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = L(t)), this._value = t === void 0 ? this._defaultValue : t;
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
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Mn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ns - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
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
  return B(e) ? n = e : (n = e.get, i = e.set), new ko(n, i, s);
}
const vs = {}, Cs = /* @__PURE__ */ new WeakMap();
let pt;
function Uo(e, t = !1, s = pt) {
  if (s) {
    let n = Cs.get(s);
    n || Cs.set(s, n = []), n.push(e);
  }
}
function No(e, t, s = ne) {
  const { immediate: n, deep: i, once: r, scheduler: o, augmentJob: l, call: c } = s, d = (R) => i ? R : /* @__PURE__ */ Ee(R) || i === !1 || i === 0 ? et(R, 1) : et(R);
  let u, h, w, g, S = !1, _ = !1;
  if (/* @__PURE__ */ ce(e) ? (h = () => e.value, S = /* @__PURE__ */ Ee(e)) : /* @__PURE__ */ tt(e) ? (h = () => d(e), S = !0) : V(e) ? (_ = !0, S = e.some((R) => /* @__PURE__ */ tt(R) || /* @__PURE__ */ Ee(R)), h = () => e.map((R) => {
    if (/* @__PURE__ */ ce(R))
      return R.value;
    if (/* @__PURE__ */ tt(R))
      return d(R);
    if (B(R))
      return c ? c(R, 2) : R();
  })) : B(e) ? t ? h = c ? () => c(e, 2) : e : h = () => {
    if (w) {
      Je();
      try {
        w();
      } finally {
        Ge();
      }
    }
    const R = pt;
    pt = u;
    try {
      return c ? c(e, 3, [g]) : e(g);
    } finally {
      pt = R;
    }
  } : h = We, t && i) {
    const R = h, A = i === !0 ? 1 / 0 : i;
    h = () => et(R(), A);
  }
  const M = Vi(), N = () => {
    u.stop(), M && M.active && Sn(M.effects, u);
  };
  if (r && t) {
    const R = t;
    t = (...A) => {
      const G = R(...A);
      return N(), G;
    };
  }
  let j = _ ? new Array(e.length).fill(vs) : vs;
  const W = (R) => {
    if (!(!(u.flags & 1) || !u.dirty && !R))
      if (t) {
        const A = u.run();
        if (R || i || S || (_ ? A.some((G, K) => Be(G, j[K])) : Be(A, j))) {
          w && w();
          const G = pt;
          pt = u;
          try {
            const K = [
              A,
              // pass undefined as the old value when it's changed for the first time
              j === vs ? void 0 : _ && j[0] === vs ? [] : j,
              g
            ];
            j = A, c ? c(t, 3, K) : (
              // @ts-expect-error
              t(...K)
            );
          } finally {
            pt = G;
          }
        }
      } else
        u.run();
  };
  return l && l(W), u = new Hi(h), u.scheduler = o ? () => o(W, !1) : W, g = (R) => Uo(R, !1, u), w = u.onStop = () => {
    const R = Cs.get(u);
    if (R) {
      if (c)
        c(R, 4);
      else
        for (const A of R) A();
      Cs.delete(u);
    }
  }, t ? n ? W(!0) : j = u.run() : o ? o(W.bind(null, !0), !0) : u.run(), N.pause = u.pause.bind(u), N.resume = u.resume.bind(u), N.stop = N, N;
}
function et(e, t = 1 / 0, s) {
  if (t <= 0 || !ee(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ ce(e))
    et(e.value, t, s);
  else if (V(e))
    for (let n = 0; n < e.length; n++)
      et(e[n], t, s);
  else if (Mi(e) || Pt(e))
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
  if (B(e)) {
    const i = as(e, t, s, n);
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
let rt = null, St = 0;
const nr = /* @__PURE__ */ Promise.resolve();
let Is = null;
function It(e) {
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
  V(e) ? Rt.push(...e) : rt && e.id === -1 ? rt.splice(St + 1, 0, e) : e.flags & 1 || (Rt.push(e), e.flags |= 1), ir();
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
    for (rt = t, St = 0; St < rt.length; St++) {
      const s = rt[St];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    rt = null, St = 0;
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
let Re = null, lr = null;
function Es(e) {
  const t = Re;
  return Re = e, lr = e && e.type.__scopeId || null, t;
}
function Ho(e, t = Re, s) {
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
  if (Re === null)
    return e;
  const s = Bs(Re), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, c = ne] = t[i];
    r && (B(r) && (r = {
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
function dt(e, t, s, n) {
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
  const n = Ur();
  if (n || mt) {
    let i = mt ? mt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return s && B(t) ? t.call(n && n.proxy) : t;
  }
}
function Bo() {
  return !!(Ur() || mt);
}
const Wo = /* @__PURE__ */ Symbol.for("v-scx"), zo = () => Gt(Wo);
function qt(e, t, s) {
  return cr(e, t, s);
}
function cr(e, t, s = ne) {
  const { immediate: n, deep: i, flush: r, once: o } = s, l = pe({}, s), c = t && n || !t && r !== "post";
  let d;
  if (ls) {
    if (r === "sync") {
      const g = zo();
      d = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!c) {
      const g = () => {
      };
      return g.stop = We, g.resume = We, g.pause = We, g;
    }
  }
  const u = be;
  l.call = (g, S, _) => Oe(g, u, S, _);
  let h = !1;
  r === "post" ? l.scheduler = (g) => {
    xe(g, u && u.suspense);
  } : r !== "sync" && (h = !0, l.scheduler = (g, S) => {
    S ? g() : On(g);
  }), l.augmentJob = (g) => {
    t && (g.flags |= 4), h && (g.flags |= 2, u && (g.id = u.uid, g.i = u));
  };
  const w = No(e, t, l);
  return ls && (d ? d.push(w) : c && w()), w;
}
function Jo(e, t, s) {
  const n = this.proxy, i = le(e) ? e.includes(".") ? ar(n, e) : () => n[e] : e.bind(n, n);
  let r;
  B(t) ? r = t : (r = t.handler, s = t);
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
const Go = /* @__PURE__ */ Symbol("_vte"), qo = (e) => e.__isTeleport, en = /* @__PURE__ */ Symbol("_leaveCb");
function kn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, kn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function vt(e, t) {
  return B(e) ? (
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
function Yt(e, t, s, n, i = !1) {
  if (V(e)) {
    e.forEach(
      (_, M) => Yt(
        _,
        t && (V(t) ? t[M] : t),
        s,
        n,
        i
      )
    );
    return;
  }
  if (Xt(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Yt(e, t, s, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? Bs(n.component) : n.el, o = i ? null : r, { i: l, r: c } = e, d = t && t.r, u = l.refs === ne ? l.refs = {} : l.refs, h = l.setupState, w = /* @__PURE__ */ q(h), g = h === ne ? Ri : (_) => Gn(u, _) ? !1 : Y(w, _), S = (_, M) => !(M && Gn(u, M));
  if (d != null && d !== c) {
    if (qn(t), le(d))
      u[d] = null, g(d) && (h[d] = null);
    else if (/* @__PURE__ */ ce(d)) {
      const _ = t;
      S(d, _.k) && (d.value = null), _.k && (u[_.k] = null);
    }
  }
  if (B(c)) {
    Je();
    try {
      as(c, l, 12, [o, u]);
    } finally {
      Ge();
    }
  } else {
    const _ = le(c), M = /* @__PURE__ */ ce(c);
    if (_ || M) {
      const N = () => {
        if (e.f) {
          const j = _ ? g(c) ? h[c] : u[c] : S() || !e.k ? c.value : u[e.k];
          if (i)
            V(j) && Sn(j, r);
          else if (V(j))
            j.includes(r) || j.push(r);
          else if (_)
            u[c] = [r], g(c) && (h[c] = u[c]);
          else {
            const W = [r];
            S(c, e.k) && (c.value = W), e.k && (u[e.k] = W);
          }
        } else _ ? (u[c] = o, g(c) && (h[c] = o)) : M && (S(c, e.k) && (c.value = o), e.k && (u[e.k] = o));
      };
      if (o) {
        const j = () => {
          N(), Ts.delete(e);
        };
        j.id = -1, Ts.set(e, j), xe(j, s);
      } else
        qn(e), N();
    }
  }
}
function qn(e) {
  const t = Ts.get(e);
  t && (t.flags |= 8, Ts.delete(e));
}
Ds().requestIdleCallback;
Ds().cancelIdleCallback;
const Xt = (e) => !!e.type.__asyncLoader, fr = (e) => e.type.__isKeepAlive;
function Yo(e, t) {
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
function Mt(e, t, s, n) {
  let i;
  const r = s, o = V(e);
  if (o || le(e)) {
    const l = o && /* @__PURE__ */ tt(e);
    let c = !1, d = !1;
    l && (c = !/* @__PURE__ */ Ee(e), d = /* @__PURE__ */ st(e), e = Us(e)), i = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      i[u] = t(
        c ? d ? $t($e(e[u])) : $e(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, r);
  } else if (ee(e))
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
const pn = (e) => e ? Nr(e) ? Bs(e) : pn(e.parent) : null, Zt = (
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
    $nextTick: (e) => e.n || (e.n = It.bind(e.proxy)),
    $watch: (e) => Jo.bind(e)
  })
), tn = (e, t) => e !== ne && !e.__isScriptSetup && Y(e, t), ll = {
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
        if (i !== ne && Y(i, t))
          return o[t] = 2, i[t];
        if (Y(r, t))
          return o[t] = 3, r[t];
        if (s !== ne && Y(s, t))
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
    if (s !== ne && Y(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      h = c.config.globalProperties, Y(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: i, ctx: r } = e;
    return tn(i, t) ? (i[t] = s, !0) : n !== ne && Y(n, t) ? (n[t] = s, !0) : Y(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: i, props: r, type: o }
  }, l) {
    let c;
    return !!(s[l] || e !== ne && l[0] !== "$" && Y(e, l) || tn(t, l) || Y(r, l) || Y(n, l) || Y(Zt, l) || Y(i.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : Y(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
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
    beforeUpdate: g,
    updated: S,
    activated: _,
    deactivated: M,
    beforeDestroy: N,
    beforeUnmount: j,
    destroyed: W,
    unmounted: R,
    render: A,
    renderTracked: G,
    renderTriggered: K,
    errorCaptured: E,
    serverPrefetch: k,
    // public API
    expose: oe,
    inheritAttrs: _e,
    // assets
    components: Te,
    directives: ke,
    filters: kt
  } = t;
  if (d && al(d, n, null), o)
    for (const z in o) {
      const ie = o[z];
      B(ie) && (n[z] = ie.bind(s));
    }
  if (i) {
    const z = i.call(s, s);
    ee(z) && (e.data = /* @__PURE__ */ Ns(z));
  }
  if (gn = !0, r)
    for (const z in r) {
      const ie = r[z], ut = B(ie) ? ie.bind(s, s) : B(ie.get) ? ie.get.bind(s, s) : We, hs = !B(ie) && B(ie.set) ? ie.set.bind(s) : We, ft = ot({
        get: ut,
        set: hs
      });
      Object.defineProperty(n, z, {
        enumerable: !0,
        configurable: !0,
        get: () => ft.value,
        set: (De) => ft.value = De
      });
    }
  if (l)
    for (const z in l)
      mr(l[z], n, s, z);
  if (c) {
    const z = B(c) ? c.call(s) : c;
    Reflect.ownKeys(z).forEach((ie) => {
      Ko(ie, z[ie]);
    });
  }
  u && Xn(u, e, "c");
  function ae(z, ie) {
    V(ie) ? ie.forEach((ut) => z(ut.bind(s))) : ie && z(ie.bind(s));
  }
  if (ae(Qo, h), ae(hr, w), ae(el, g), ae(tl, S), ae(Yo, _), ae(Xo, M), ae(rl, E), ae(il, G), ae(nl, K), ae(pr, j), ae(gr, R), ae(sl, k), V(oe))
    if (oe.length) {
      const z = e.exposed || (e.exposed = {});
      oe.forEach((ie) => {
        Object.defineProperty(z, ie, {
          get: () => s[ie],
          set: (ut) => s[ie] = ut,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  A && e.render === We && (e.render = A), _e != null && (e.inheritAttrs = _e), Te && (e.components = Te), ke && (e.directives = ke), k && ur(e);
}
function al(e, t, s = We) {
  V(e) && (e = mn(e));
  for (const n in e) {
    const i = e[n];
    let r;
    ee(i) ? "default" in i ? r = Gt(
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
    V(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function mr(e, t, s, n) {
  let i = n.includes(".") ? ar(s, n) : () => s[n];
  if (le(e)) {
    const r = t[e];
    B(r) && qt(i, r);
  } else if (B(e))
    qt(i, e.bind(s));
  else if (ee(e))
    if (V(e))
      e.forEach((r) => mr(r, t, s, n));
    else {
      const r = B(e.handler) ? e.handler.bind(s) : t[e.handler];
      B(r) && qt(i, r, e);
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
  ), Ps(c, t, o)), ee(t) && r.set(t, c), c;
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
      B(e) ? e.call(this, this) : e,
      B(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function fl(e, t) {
  return Ht(mn(e), mn(t));
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
function ve(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ht(e, t) {
  return e ? pe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Qn(e, t) {
  return e ? V(e) && V(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : pe(
    /* @__PURE__ */ Object.create(null),
    Yn(e),
    Yn(t ?? {})
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
    B(n) || (n = pe({}, n)), i != null && !ee(i) && (i = null);
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
        return o.has(u) || (u && B(u.install) ? (o.add(u), u.install(d, ...h)) : B(u) && (o.add(u), u(d, ...h))), d;
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
          const g = d._ceVNode || ue(n, i);
          return g.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(g, u, w), c = !0, d._container = u, u.__vue_app__ = d, Bs(g.component);
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
        const h = mt;
        mt = d;
        try {
          return u();
        } finally {
          mt = h;
        }
      }
    };
    return d;
  };
}
let mt = null;
const gl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ae(t)}Modifiers`] || e[`${at(t)}Modifiers`];
function ml(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || ne;
  let i = s;
  const r = t.startsWith("update:"), o = r && gl(n, t.slice(7));
  o && (o.trim && (i = s.map((u) => le(u) ? u.trim() : u)), o.number && (i = s.map(Cn)));
  let l, c = n[l = qs(t)] || // also try camelCase event handler (#2249)
  n[l = qs(Ae(t))];
  !c && r && (c = n[l = qs(at(t))]), c && Oe(
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
  if (!B(e)) {
    const c = (d) => {
      const u = br(d, t, !0);
      u && (l = !0, pe(o, u));
    };
    !s && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !l ? (ee(e) && n.set(e, null), null) : (V(r) ? r.forEach((c) => o[c] = null) : pe(o, r), ee(e) && n.set(e, o), o);
}
function Hs(e, t) {
  return !e || !Ls(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Y(e, t[0].toLowerCase() + t.slice(1)) || Y(e, at(t)) || Y(e, t));
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
    setupState: g,
    ctx: S,
    inheritAttrs: _
  } = e, M = Es(e);
  let N, j;
  try {
    if (s.shapeFlag & 4) {
      const R = i || n, A = R;
      N = Ke(
        d.call(
          A,
          R,
          u,
          h,
          g,
          w,
          S
        )
      ), j = l;
    } else {
      const R = t;
      N = Ke(
        R.length > 1 ? R(
          h,
          { attrs: l, slots: o, emit: c }
        ) : R(
          h,
          null
        )
      ), j = t.props ? l : yl(l);
    }
  } catch (R) {
    Qt.length = 0, js(R, e, 1), N = ue(ct);
  }
  let W = N;
  if (j && _ !== !1) {
    const R = Object.keys(j), { shapeFlag: A } = W;
    R.length && A & 7 && (r && R.some($s) && (j = bl(
      j,
      r
    )), W = Ot(W, j, !1, !0));
  }
  return s.dirs && (W = Ot(W, null, !1, !0), W.dirs = W.dirs ? W.dirs.concat(s.dirs) : s.dirs), s.transition && kn(W, s.transition), N = W, Es(M), N;
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
  return s === "style" && ee(n) && ee(i) ? !En(n, i) : n !== i;
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
        const g = t[w];
        if (c)
          if (Y(r, w))
            g !== r[w] && (r[w] = g, d = !0);
          else {
            const S = Ae(w);
            i[S] = vn(
              c,
              l,
              S,
              g,
              e,
              !1
            );
          }
        else
          g !== r[w] && (r[w] = g, d = !0);
      }
    }
  } else {
    Cr(e, t, i, r) && (d = !0);
    let u;
    for (const h in l)
      (!t || // for camelCase
      !Y(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = at(h)) === h || !Y(t, u))) && (c ? s && // for camelCase
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
        (!t || !Y(t, h)) && (delete r[h], d = !0);
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
      i && Y(i, u = Ae(c)) ? !r || !r.includes(u) ? s[u] = d : (l || (l = {}))[u] = d : Hs(e.emitsOptions, c) || (!(c in n) || d !== n[c]) && (n[c] = d, o = !0);
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
        !Y(d, h)
      );
    }
  }
  return o;
}
function vn(e, t, s, n, i, r) {
  const o = e[s];
  if (o != null) {
    const l = Y(o, "default");
    if (l && n === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && B(c)) {
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
  if (!B(e)) {
    const u = (h) => {
      c = !0;
      const [w, g] = Ir(h, t, !0);
      pe(o, w), g && l.push(...g);
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !c)
    return ee(e) && n.set(e, Tt), Tt;
  if (V(r))
    for (let u = 0; u < r.length; u++) {
      const h = Ae(r[u]);
      si(h) && (o[h] = ne);
    }
  else if (r)
    for (const u in r) {
      const h = Ae(u);
      if (si(h)) {
        const w = r[u], g = o[h] = V(w) || B(w) ? { type: w } : pe({}, w), S = g.type;
        let _ = !1, M = !0;
        if (V(S))
          for (let N = 0; N < S.length; ++N) {
            const j = S[N], W = B(j) && j.name;
            if (W === "Boolean") {
              _ = !0;
              break;
            } else W === "String" && (M = !1);
          }
        else
          _ = B(S) && S.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = _, g[
          1
          /* shouldCastTrue */
        ] = M, (_ || Y(g, "default")) && l.push(h);
      }
    }
  const d = [o, l];
  return ee(e) && n.set(e, d), d;
}
function si(e) {
  return e[0] !== "$" && !Wt(e);
}
const Dn = (e) => e === "_" || e === "_ctx" || e === "$stable", Un = (e) => V(e) ? e.map(Ke) : [Ke(e)], Il = (e, t, s) => {
  if (t._n)
    return t;
  const n = Ho((...i) => Un(t(...i)), s);
  return n._c = !1, n;
}, Er = (e, t, s) => {
  const n = e._ctx;
  for (const i in e) {
    if (Dn(i)) continue;
    const r = e[i];
    if (B(r))
      t[i] = Il(i, r, n);
    else if (r != null) {
      const o = Un(r);
      t[i] = () => o;
    }
  }
}, Tr = (e, t) => {
  const s = Un(t);
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
  let r = !0, o = ne;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? r = !1 : Pr(i, t, s) : (r = !t.$stable, Er(t, i)), o = t;
  } else t && (Tr(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !Dn(l) && o[l] == null && delete i[l];
}, xe = Ll;
function Pl(e) {
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
    setScopeId: g = We,
    insertStaticContent: S
  } = e, _ = (a, f, p, x = null, b = null, m = null, T = void 0, I = null, C = !!f.dynamicChildren) => {
    if (a === f)
      return;
    a && !jt(a, f) && (x = ps(a), De(a, b, m, !0), a = null), f.patchFlag === -2 && (C = !1, f.dynamicChildren = null);
    const { type: v, ref: F, shapeFlag: P } = f;
    switch (v) {
      case Ks:
        M(a, f, p, x);
        break;
      case ct:
        N(a, f, p, x);
        break;
      case xs:
        a == null && j(f, p, x, T);
        break;
      case X:
        Te(
          a,
          f,
          p,
          x,
          b,
          m,
          T,
          I,
          C
        );
        break;
      default:
        P & 1 ? A(
          a,
          f,
          p,
          x,
          b,
          m,
          T,
          I,
          C
        ) : P & 6 ? ke(
          a,
          f,
          p,
          x,
          b,
          m,
          T,
          I,
          C
        ) : (P & 64 || P & 128) && v.process(
          a,
          f,
          p,
          x,
          b,
          m,
          T,
          I,
          C,
          Ut
        );
    }
    F != null && b ? Yt(F, a && a.ref, m, f || a, !f) : F == null && a && a.ref != null && Yt(a.ref, null, m, a, !0);
  }, M = (a, f, p, x) => {
    if (a == null)
      n(
        f.el = l(f.children),
        p,
        x
      );
    else {
      const b = f.el = a.el;
      f.children !== a.children && d(b, f.children);
    }
  }, N = (a, f, p, x) => {
    a == null ? n(
      f.el = c(f.children || ""),
      p,
      x
    ) : f.el = a.el;
  }, j = (a, f, p, x) => {
    [a.el, a.anchor] = S(
      a.children,
      f,
      p,
      x,
      a.el,
      a.anchor
    );
  }, W = ({ el: a, anchor: f }, p, x) => {
    let b;
    for (; a && a !== f; )
      b = w(a), n(a, p, x), a = b;
    n(f, p, x);
  }, R = ({ el: a, anchor: f }) => {
    let p;
    for (; a && a !== f; )
      p = w(a), i(a), a = p;
    i(f);
  }, A = (a, f, p, x, b, m, T, I, C) => {
    if (f.type === "svg" ? T = "svg" : f.type === "math" && (T = "mathml"), a == null)
      G(
        f,
        p,
        x,
        b,
        m,
        T,
        I,
        C
      );
    else {
      const v = a.el && a.el._isVueCE ? a.el : null;
      try {
        v && v._beginPatch(), k(
          a,
          f,
          b,
          m,
          T,
          I,
          C
        );
      } finally {
        v && v._endPatch();
      }
    }
  }, G = (a, f, p, x, b, m, T, I) => {
    let C, v;
    const { props: F, shapeFlag: P, transition: D, dirs: H } = a;
    if (C = a.el = o(
      a.type,
      m,
      F && F.is,
      F
    ), P & 8 ? u(C, a.children) : P & 16 && E(
      a.children,
      C,
      null,
      x,
      b,
      sn(a, m),
      T,
      I
    ), H && dt(a, null, x, "created"), K(C, a, a.scopeId, T, x), F) {
      for (const te in F)
        te !== "value" && !Wt(te) && r(C, te, null, F[te], m, x);
      "value" in F && r(C, "value", null, F.value, m), (v = F.onVnodeBeforeMount) && je(v, x, a);
    }
    H && dt(a, null, x, "beforeMount");
    const J = Ml(b, D);
    J && D.beforeEnter(C), n(C, f, p), ((v = F && F.onVnodeMounted) || J || H) && xe(() => {
      try {
        v && je(v, x, a), J && D.enter(C), H && dt(a, null, x, "mounted");
      } finally {
      }
    }, b);
  }, K = (a, f, p, x, b) => {
    if (p && g(a, p), x)
      for (let m = 0; m < x.length; m++)
        g(a, x[m]);
    if (b) {
      let m = b.subTree;
      if (f === m || Lr(m.type) && (m.ssContent === f || m.ssFallback === f)) {
        const T = b.vnode;
        K(
          a,
          T,
          T.scopeId,
          T.slotScopeIds,
          b.parent
        );
      }
    }
  }, E = (a, f, p, x, b, m, T, I, C = 0) => {
    for (let v = C; v < a.length; v++) {
      const F = a[v] = I ? Ze(a[v]) : Ke(a[v]);
      _(
        null,
        F,
        f,
        p,
        x,
        b,
        m,
        T,
        I
      );
    }
  }, k = (a, f, p, x, b, m, T) => {
    const I = f.el = a.el;
    let { patchFlag: C, dynamicChildren: v, dirs: F } = f;
    C |= a.patchFlag & 16;
    const P = a.props || ne, D = f.props || ne;
    let H;
    if (p && ht(p, !1), (H = D.onVnodeBeforeUpdate) && je(H, p, f, a), F && dt(f, a, p, "beforeUpdate"), p && ht(p, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    v && (!a.dynamicChildren || a.dynamicChildren.length !== v.length) && (C = 0, T = !1, v = null), (P.innerHTML && D.innerHTML == null || P.textContent && D.textContent == null) && u(I, ""), v ? oe(
      a.dynamicChildren,
      v,
      I,
      p,
      x,
      sn(f, b),
      m
    ) : T || ie(
      a,
      f,
      I,
      null,
      p,
      x,
      sn(f, b),
      m,
      !1
    ), C > 0) {
      if (C & 16)
        _e(I, P, D, p, b);
      else if (C & 2 && P.class !== D.class && r(I, "class", null, D.class, b), C & 4 && r(I, "style", P.style, D.style, b), C & 8) {
        const J = f.dynamicProps;
        for (let te = 0; te < J.length; te++) {
          const Z = J[te], fe = P[Z], he = D[Z];
          (he !== fe || Z === "value") && r(I, Z, fe, he, b, p);
        }
      }
      C & 1 && a.children !== f.children && u(I, f.children);
    } else !T && v == null && _e(I, P, D, p, b);
    ((H = D.onVnodeUpdated) || F) && xe(() => {
      H && je(H, p, f, a), F && dt(f, a, p, "updated");
    }, x);
  }, oe = (a, f, p, x, b, m, T) => {
    for (let I = 0; I < f.length; I++) {
      const C = a[I], v = f[I], F = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        C.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (C.type === X || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !jt(C, v) || // - In the case of a component, it could contain anything.
        C.shapeFlag & 198) ? h(C.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      _(
        C,
        v,
        F,
        null,
        x,
        b,
        m,
        T,
        !0
      );
    }
  }, _e = (a, f, p, x, b) => {
    if (f !== p) {
      if (f !== ne)
        for (const m in f)
          !Wt(m) && !(m in p) && r(
            a,
            m,
            f[m],
            null,
            b,
            x
          );
      for (const m in p) {
        if (Wt(m)) continue;
        const T = p[m], I = f[m];
        T !== I && m !== "value" && r(a, m, I, T, b, x);
      }
      "value" in p && r(a, "value", f.value, p.value, b);
    }
  }, Te = (a, f, p, x, b, m, T, I, C) => {
    const v = f.el = a ? a.el : l(""), F = f.anchor = a ? a.anchor : l("");
    let { patchFlag: P, dynamicChildren: D, slotScopeIds: H } = f;
    H && (I = I ? I.concat(H) : H), a == null ? (n(v, p, x), n(F, p, x), E(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      p,
      F,
      b,
      m,
      T,
      I,
      C
    )) : P > 0 && P & 64 && D && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren && a.dynamicChildren.length === D.length ? (oe(
      a.dynamicChildren,
      D,
      p,
      b,
      m,
      T,
      I
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || b && f === b.subTree) && Rr(
      a,
      f,
      !0
      /* shallow */
    )) : ie(
      a,
      f,
      p,
      F,
      b,
      m,
      T,
      I,
      C
    );
  }, ke = (a, f, p, x, b, m, T, I, C) => {
    f.slotScopeIds = I, a == null ? f.shapeFlag & 512 ? b.ctx.activate(
      f,
      p,
      x,
      T,
      C
    ) : kt(
      f,
      p,
      x,
      b,
      m,
      T,
      C
    ) : ds(a, f, C);
  }, kt = (a, f, p, x, b, m, T) => {
    const I = a.component = Fl(
      a,
      x,
      b
    );
    if (fr(a) && (I.ctx.renderer = Ut), jl(I, !1, T), I.asyncDep) {
      if (b && b.registerDep(I, ae, T), !a.el) {
        const C = I.subTree = ue(ct);
        N(null, C, f, p), a.placeholder = C.el;
      }
    } else
      ae(
        I,
        a,
        f,
        p,
        b,
        m,
        T
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
  }, ae = (a, f, p, x, b, m, T) => {
    const I = () => {
      if (a.isMounted) {
        let { next: P, bu: D, u: H, parent: J, vnode: te } = a;
        {
          const Ne = Mr(a);
          if (Ne) {
            P && (P.el = te.el, z(a, P, T)), Ne.asyncDep.then(() => {
              xe(() => {
                a.isUnmounted || v();
              }, b);
            });
            return;
          }
        }
        let Z = P, fe;
        ht(a, !1), P ? (P.el = te.el, z(a, P, T)) : P = te, D && _s(D), (fe = P.props && P.props.onVnodeBeforeUpdate) && je(fe, J, P, te), ht(a, !0);
        const he = ei(a), Ue = a.subTree;
        a.subTree = he, _(
          Ue,
          he,
          // parent may have changed if it's in a teleport
          h(Ue.el),
          // anchor may have changed if it's in a fragment
          ps(Ue),
          a,
          b,
          m
        ), P.el = he.el, Z === null && xl(a, he.el), H && xe(H, b), (fe = P.props && P.props.onVnodeUpdated) && xe(
          () => je(fe, J, P, te),
          b
        );
      } else {
        let P;
        const { el: D, props: H } = f, { bm: J, m: te, parent: Z, root: fe, type: he } = a, Ue = Xt(f);
        ht(a, !1), J && _s(J), !Ue && (P = H && H.onVnodeBeforeMount) && je(P, Z, f), ht(a, !0);
        {
          fe.ce && fe.ce._hasShadowRoot() && fe.ce._injectChildStyle(
            he,
            a.parent ? a.parent.type : void 0
          );
          const Ne = a.subTree = ei(a);
          _(
            null,
            Ne,
            p,
            x,
            a,
            b,
            m
          ), f.el = Ne.el;
        }
        if (te && xe(te, b), !Ue && (P = H && H.onVnodeMounted)) {
          const Ne = f;
          xe(
            () => je(P, Z, Ne),
            b
          );
        }
        (f.shapeFlag & 256 || Z && Xt(Z.vnode) && Z.vnode.shapeFlag & 256) && a.a && xe(a.a, b), a.isMounted = !0, f = p = x = null;
      }
    };
    a.scope.on();
    const C = a.effect = new Hi(I);
    a.scope.off();
    const v = a.update = C.run.bind(C), F = a.job = C.runIfDirty.bind(C);
    F.i = a, F.id = a.uid, C.scheduler = () => On(F), ht(a, !0), v();
  }, z = (a, f, p) => {
    f.component = a;
    const x = a.vnode.props;
    a.vnode = f, a.next = null, Sl(a, f.props, x, p), Tl(a, f.children, p), Je(), Jn(a), Ge();
  }, ie = (a, f, p, x, b, m, T, I, C = !1) => {
    const v = a && a.children, F = a ? a.shapeFlag : 0, P = f.children, { patchFlag: D, shapeFlag: H } = f;
    if (D > 0) {
      if (D & 128) {
        hs(
          v,
          P,
          p,
          x,
          b,
          m,
          T,
          I,
          C
        );
        return;
      } else if (D & 256) {
        ut(
          v,
          P,
          p,
          x,
          b,
          m,
          T,
          I,
          C
        );
        return;
      }
    }
    H & 8 ? (F & 16 && Dt(v, b, m), P !== v && u(p, P)) : F & 16 ? H & 16 ? hs(
      v,
      P,
      p,
      x,
      b,
      m,
      T,
      I,
      C
    ) : Dt(v, b, m, !0) : (F & 8 && u(p, ""), H & 16 && E(
      P,
      p,
      x,
      b,
      m,
      T,
      I,
      C
    ));
  }, ut = (a, f, p, x, b, m, T, I, C) => {
    a = a || Tt, f = f || Tt;
    const v = a.length, F = f.length, P = Math.min(v, F);
    let D;
    for (D = 0; D < P; D++) {
      const H = f[D] = C ? Ze(f[D]) : Ke(f[D]);
      _(
        a[D],
        H,
        p,
        null,
        b,
        m,
        T,
        I,
        C
      );
    }
    v > F ? Dt(
      a,
      b,
      m,
      !0,
      !1,
      P
    ) : E(
      f,
      p,
      x,
      b,
      m,
      T,
      I,
      C,
      P
    );
  }, hs = (a, f, p, x, b, m, T, I, C) => {
    let v = 0;
    const F = f.length;
    let P = a.length - 1, D = F - 1;
    for (; v <= P && v <= D; ) {
      const H = a[v], J = f[v] = C ? Ze(f[v]) : Ke(f[v]);
      if (jt(H, J))
        _(
          H,
          J,
          p,
          null,
          b,
          m,
          T,
          I,
          C
        );
      else
        break;
      v++;
    }
    for (; v <= P && v <= D; ) {
      const H = a[P], J = f[D] = C ? Ze(f[D]) : Ke(f[D]);
      if (jt(H, J))
        _(
          H,
          J,
          p,
          null,
          b,
          m,
          T,
          I,
          C
        );
      else
        break;
      P--, D--;
    }
    if (v > P) {
      if (v <= D) {
        const H = D + 1, J = H < F ? f[H].el : x;
        for (; v <= D; )
          _(
            null,
            f[v] = C ? Ze(f[v]) : Ke(f[v]),
            p,
            J,
            b,
            m,
            T,
            I,
            C
          ), v++;
      }
    } else if (v > D)
      for (; v <= P; )
        De(a[v], b, m, !0), v++;
    else {
      const H = v, J = v, te = /* @__PURE__ */ new Map();
      for (v = J; v <= D; v++) {
        const Ce = f[v] = C ? Ze(f[v]) : Ke(f[v]);
        Ce.key != null && te.set(Ce.key, v);
      }
      let Z, fe = 0;
      const he = D - J + 1;
      let Ue = !1, Ne = 0;
      const Nt = new Array(he);
      for (v = 0; v < he; v++) Nt[v] = 0;
      for (v = H; v <= P; v++) {
        const Ce = a[v];
        if (fe >= he) {
          De(Ce, b, m, !0);
          continue;
        }
        let Fe;
        if (Ce.key != null)
          Fe = te.get(Ce.key);
        else
          for (Z = J; Z <= D; Z++)
            if (Nt[Z - J] === 0 && jt(Ce, f[Z])) {
              Fe = Z;
              break;
            }
        Fe === void 0 ? De(Ce, b, m, !0) : (Nt[Fe - J] = v + 1, Fe >= Ne ? Ne = Fe : Ue = !0, _(
          Ce,
          f[Fe],
          p,
          null,
          b,
          m,
          T,
          I,
          C
        ), fe++);
      }
      const jn = Ue ? Al(Nt) : Tt;
      for (Z = jn.length - 1, v = he - 1; v >= 0; v--) {
        const Ce = J + v, Fe = f[Ce], Vn = f[Ce + 1], Hn = Ce + 1 < F ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Vn.el || Ar(Vn)
        ) : x;
        Nt[v] === 0 ? _(
          null,
          Fe,
          p,
          Hn,
          b,
          m,
          T,
          I,
          C
        ) : Ue && (Z < 0 || v !== jn[Z] ? ft(Fe, p, Hn, 2) : Z--);
      }
    }
  }, ft = (a, f, p, x, b = null) => {
    const { el: m, type: T, transition: I, children: C, shapeFlag: v } = a;
    if (v & 6) {
      ft(a.component.subTree, f, p, x);
      return;
    }
    if (v & 128) {
      a.suspense.move(f, p, x);
      return;
    }
    if (v & 64) {
      T.move(a, f, p, Ut);
      return;
    }
    if (T === X) {
      n(m, f, p);
      for (let P = 0; P < C.length; P++)
        ft(C[P], f, p, x);
      n(a.anchor, f, p);
      return;
    }
    if (T === xs) {
      W(a, f, p);
      return;
    }
    if (x !== 2 && v & 1 && I)
      if (x === 0)
        I.persisted && !m[en] ? n(m, f, p) : (I.beforeEnter(m), n(m, f, p), xe(() => I.enter(m), b));
      else {
        const { leave: P, delayLeave: D, afterLeave: H } = I, J = () => {
          a.ctx.isUnmounted ? i(m) : n(m, f, p);
        }, te = () => {
          const Z = m._isLeaving || !!m[en];
          m._isLeaving && m[en](
            !0
            /* cancelled */
          ), I.persisted && !Z ? J() : P(m, () => {
            J(), H && H();
          });
        };
        D ? D(m, J, te) : te();
      }
    else
      n(m, f, p);
  }, De = (a, f, p, x = !1, b = !1) => {
    const {
      type: m,
      props: T,
      ref: I,
      children: C,
      dynamicChildren: v,
      shapeFlag: F,
      patchFlag: P,
      dirs: D,
      cacheIndex: H,
      memo: J
    } = a;
    if (P === -2 && (b = !1), I != null && (Je(), Yt(I, null, p, a, !0), Ge()), H != null && (f.renderCache[H] = void 0), F & 256) {
      f.ctx.deactivate(a);
      return;
    }
    const te = F & 1 && D, Z = !Xt(a);
    let fe;
    if (Z && (fe = T && T.onVnodeBeforeUnmount) && je(fe, f, a), F & 6)
      Yr(a.component, p, x);
    else {
      if (F & 128) {
        a.suspense.unmount(p, x);
        return;
      }
      te && dt(a, null, f, "beforeUnmount"), F & 64 ? a.type.remove(
        a,
        f,
        p,
        Ut,
        x
      ) : v && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !v.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (m !== X || P > 0 && P & 64) ? Dt(
        v,
        f,
        p,
        !1,
        !0
      ) : (m === X && P & 384 || !b && F & 16) && Dt(C, f, p), x && Nn(a);
    }
    const he = J != null && H == null;
    (Z && (fe = T && T.onVnodeUnmounted) || te || he) && xe(() => {
      fe && je(fe, f, a), te && dt(a, null, f, "unmounted"), he && (a.el = null);
    }, p);
  }, Nn = (a) => {
    const { type: f, el: p, anchor: x, transition: b } = a;
    if (f === X) {
      qr(p, x);
      return;
    }
    if (f === xs) {
      R(a);
      return;
    }
    const m = () => {
      i(p), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (a.shapeFlag & 1 && b && !b.persisted) {
      const { leave: T, delayLeave: I } = b, C = () => T(p, m);
      I ? I(a.el, m, C) : C();
    } else
      m();
  }, qr = (a, f) => {
    let p;
    for (; a !== f; )
      p = w(a), i(a), a = p;
    i(f);
  }, Yr = (a, f, p) => {
    const { bum: x, scope: b, job: m, subTree: T, um: I, m: C, a: v } = a;
    ni(C), ni(v), x && _s(x), b.stop(), m && (m.flags |= 8, De(T, a, f, p)), I && xe(I, f), xe(() => {
      a.isUnmounted = !0;
    }, f);
  }, Dt = (a, f, p, x = !1, b = !1, m = 0) => {
    for (let T = m; T < a.length; T++)
      De(a[T], f, p, x, b);
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
    a == null ? f._vnode && (De(f._vnode, null, null, !0), x = f._vnode.component) : _(
      f._vnode || null,
      a,
      f,
      null,
      null,
      null,
      p
    ), f._vnode = a, Gs || (Gs = !0, Jn(x), rr(), Gs = !1);
  }, Ut = {
    p: _,
    um: De,
    m: ft,
    r: Nn,
    mt: kt,
    mc: E,
    pc: ie,
    pbc: oe,
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
function ht({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ml(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Rr(e, t, s = !1) {
  const n = e.children, i = t.children;
  if (V(n) && V(i))
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = Ze(i[r]), l.el = o.el), !s && l.patchFlag !== -2 && Rr(o, l)), l.type === Ks && (l.patchFlag === -1 && (l = i[r] = Ze(l)), l.el = o.el), l.type === ct && !l.el && (l.el = o.el);
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
function Mr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Mr(t);
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
const X = /* @__PURE__ */ Symbol.for("v-fgt"), Ks = /* @__PURE__ */ Symbol.for("v-txt"), ct = /* @__PURE__ */ Symbol.for("v-cmt"), xs = /* @__PURE__ */ Symbol.for("v-stc"), Qt = [];
let Ie = null;
function O(e = !1) {
  Qt.push(Ie = e ? null : []);
}
function $l() {
  Qt.pop(), Ie = Qt[Qt.length - 1] || null;
}
let os = 1;
function ii(e, t = !1) {
  os += e, e < 0 && Ie && t && (Ie.hasOnce = !0);
}
function $r(e) {
  return e.dynamicChildren = os > 0 ? Ie || Tt : null, $l(), os > 0 && Ie && Ie.push(e), e;
}
function U(e, t, s, n, i, r) {
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
}) => (typeof e == "number" && (e = "" + e), e != null ? le(e) || /* @__PURE__ */ ce(e) || B(e) ? { i: Re, r: e, k: t, f: !!s } : e : null);
function y(e, t = null, s = null, n = 0, i = null, r = e === X ? 0 : 1, o = !1, l = !1) {
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
    ctx: Re
  };
  return l ? (Rs(c, s), r & 128 && e.normalize(c)) : s && (c.shapeFlag |= le(s) ? 8 : 16), os > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ie && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Ie.push(c), c;
}
const ue = Ol;
function Ol(e, t = null, s = null, n = 0, i = null, r = !1) {
  if ((!e || e === ol) && (e = ct), Or(e)) {
    const l = Ot(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Rs(l, s), os > 0 && !r && Ie && (l.shapeFlag & 6 ? Ie[Ie.indexOf(e)] = l : Ie.push(l)), l.patchFlag = -2, l;
  }
  if (Bl(e) && (e = e.__vccOpts), t) {
    t = kl(t);
    let { class: l, style: c } = t;
    l && !le(l) && (t.class = ze(l)), ee(c) && (/* @__PURE__ */ Fs(c) && !V(c) && (c = pe({}, c)), t.style = In(c));
  }
  const o = le(e) ? 1 : Lr(e) ? 128 : qo(e) ? 64 : ee(e) ? 4 : B(e) ? 2 : 0;
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
function Ot(e, t, s = !1, n = !1) {
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
    patchFlag: t && e.type !== X ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && Ot(e.ssContent),
    ssFallback: e.ssFallback && Ot(e.ssFallback),
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
  return t ? (O(), lt(ct, null, e)) : ue(ct, null, e);
}
function Ke(e) {
  return e == null || typeof e == "boolean" ? ue(ct) : V(e) ? ue(
    X,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Or(e) ? Ze(e) : ue(Ks, null, String(e));
}
function Ze(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ot(e);
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
      !i && !Sr(t) ? t._ctx = Re : i === 3 && Re && (Re.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (B(t)) {
    if (n & 65) {
      Rs(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Re }, s = 32;
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
        o && r !== o && !(V(r) && r.includes(o)) ? t[i] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
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
const Ul = yr();
let Nl = 0;
function Fl(e, t, s) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || Ul, r = {
    uid: Nl++,
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
let be = null;
const Ur = () => be || Re;
let Ms, yn;
{
  const e = Ds(), t = (s, n) => {
    let i;
    return (i = e[s]) || (i = e[s] = []), i.push(n), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  Ms = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => be = s
  ), yn = t(
    "__VUE_SSR_SETTERS__",
    (s) => ls = s
  );
}
const us = (e) => {
  const t = be;
  return Ms(e), e.scope.on(), () => {
    e.scope.off(), Ms(t);
  };
}, ri = () => {
  be && be.scope.off(), Ms(null);
};
function Nr(e) {
  return e.vnode.shapeFlag & 4;
}
let ls = !1;
function jl(e, t = !1, s = !1) {
  t && yn(t);
  const { props: n, children: i } = e.vnode, r = Nr(e);
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
  B(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ee(t) && (e.setupState = sr(t)), Fr(e);
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
  return B(e) && "__vccOpts" in e;
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
  if (V(s))
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
    r ? "" : Me(s) ? String(s) : s
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
function Ct(e, t, s, n) {
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
      Ct(e, l, d, c);
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
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !le(n))) ? pi(e, Ae(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), hi(e, t, n, o));
};
function dc(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && mi(t) && B(s));
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
const Bt = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, i) {
    e[ln] = vi(i);
    const r = n || i.props && i.props.type === "number";
    Ct(e, t ? "change" : "input", (o) => {
      o.target.composing || e[ln](bi(e.value, s, r));
    }), (s || r) && Ct(e, "change", () => {
      e.value = bi(e.value, s, r);
    }), t || (Ct(e, "compositionstart", pc), Ct(e, "compositionend", yi), Ct(e, "change", yi));
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
    !B(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
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
  const e = ji(!0), t = e.run(() => /* @__PURE__ */ Pe({}));
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
function xt(e, ...t) {
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
      const g = s._s.get(e);
      return o[w].call(g, g);
    })), h), {}));
  }
  return c = zr(e, d, t, s, n, !0), c;
}
function zr(e, t, s = {}, n, i, r) {
  let o;
  const l = it({ actions: {} }, s), c = { deep: !0 };
  let d, u, h = [], w = [], g;
  const S = n.state.value[e];
  !r && !S && (n.state.value[e] = {});
  let _;
  function M(E) {
    let k;
    d = u = !1, typeof E == "function" ? (E(n.state.value[e]), k = {
      type: es.patchFunction,
      storeId: e,
      events: g
    }) : (xn(n.state.value[e], E), k = {
      type: es.patchObject,
      payload: E,
      storeId: e,
      events: g
    });
    const oe = _ = Symbol();
    It().then(() => {
      _ === oe && (d = !0);
    }), u = !0, xt(h, k, n.state.value[e]);
  }
  const N = r ? function() {
    const { state: k } = s, oe = k ? k() : {};
    this.$patch((_e) => {
      it(_e, oe);
    });
  } : (
    /* istanbul ignore next */
    Wr
  );
  function j() {
    o.stop(), h = [], w = [], n._s.delete(e);
  }
  const W = (E, k = "") => {
    if (wi in E)
      return E[cn] = k, E;
    const oe = function() {
      zs(n);
      const _e = Array.from(arguments), Te = [], ke = [];
      function kt(z) {
        Te.push(z);
      }
      function ds(z) {
        ke.push(z);
      }
      xt(w, {
        args: _e,
        name: oe[cn],
        store: A,
        after: kt,
        onError: ds
      });
      let ae;
      try {
        ae = E.apply(this && this.$id === e ? this : A, _e);
      } catch (z) {
        throw xt(ke, z), z;
      }
      return ae instanceof Promise ? ae.then((z) => (xt(Te, z), z)).catch((z) => (xt(ke, z), Promise.reject(z))) : (xt(Te, ae), ae);
    };
    return oe[wi] = !0, oe[cn] = k, oe;
  }, R = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: xi.bind(null, w),
    $patch: M,
    $reset: N,
    $subscribe(E, k = {}) {
      const oe = xi(h, E, k.detached, () => _e()), _e = o.run(() => qt(() => n.state.value[e], (Te) => {
        (k.flush === "sync" ? u : d) && E({
          storeId: e,
          type: es.direct,
          events: g
        }, Te);
      }, it({}, c, k)));
      return oe;
    },
    $dispose: j
  }, A = /* @__PURE__ */ Ns(R);
  n._s.set(e, A);
  const K = (n._a && n._a.runWithContext || Sc)(() => n._e.run(() => (o = ji()).run(() => t({ action: W }))));
  for (const E in K) {
    const k = K[E];
    if (/* @__PURE__ */ ce(k) && !Ec(k) || /* @__PURE__ */ tt(k))
      r || (S && Ic(k) && (/* @__PURE__ */ ce(k) ? k.value = S[E] : xn(k, S[E])), n.state.value[e][E] = k);
    else if (typeof k == "function") {
      const oe = W(k, E);
      K[E] = oe, l.actions[E] = k;
    }
  }
  return it(A, K), it(/* @__PURE__ */ q(A), K), Object.defineProperty(A, "$state", {
    get: () => n.state.value[e],
    set: (E) => {
      M((k) => {
        it(k, E);
      });
    }
  }), n._p.forEach((E) => {
    it(A, o.run(() => E({
      store: A,
      app: n._a,
      pinia: n,
      options: l
    })));
  }), S && r && s.hydrate && s.hydrate(A.$state, S), d = !0, u = !0, A;
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
function Mc(e) {
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
      return this.ctx().extensionSettings[Et] ?? null;
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
      s.extensionSettings[Et] = t, s.saveSettingsDebounced();
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
    return `${Et}__settings`;
  }
  cachePrefix() {
    return `${Et}:cache:`;
  }
  cacheKey(t) {
    return `${this.cachePrefix()}${t}`;
  }
}
function Lc() {
  return new Ac();
}
const Et = "st-music-player", Ii = "stmp_cursor", Ei = "stmp_userlist";
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
const Uc = {
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
let wt = null;
function Nc() {
  if (wt) return wt;
  try {
    if (typeof SillyTavern < "u") {
      const e = SillyTavern.getContext();
      e?.getCurrentLocale && (wt = e.getCurrentLocale());
    }
  } catch {
  }
  return wt || (wt = (typeof navigator < "u" ? navigator.language || navigator.userLanguage : "en")?.toLowerCase() || "en"), wt;
}
function Q(e) {
  return Nc().startsWith("zh") ? Uc[e] ?? e : e;
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
        console.warn(`[playlist] resolve failed for "${t.song}"`), typeof toastr < "u" && toastr.warning(`${Q("Cannot play")}: ${t.song}`);
        return;
      }
      await yt().loadAndPlay(i);
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
}), yt = /* @__PURE__ */ Js("player", {
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
      const t = yt();
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
      this.lyrics = Mc(e), this.currentLyricIndex = -1;
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
}, Wc = /* @__PURE__ */ vt({
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
      e.name === "play" ? (O(), U("polygon", Vc)) : e.name === "pause" ? (O(), U(X, { key: 1 }, [
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
      ], 64)) : e.name === "prev" ? (O(), U(X, { key: 2 }, [
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
      ], 64)) : e.name === "next" ? (O(), U(X, { key: 3 }, [
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
      ], 64)) : e.name === "repeat" ? (O(), U(X, { key: 4 }, [
        s[6] || (s[6] = y("polyline", { points: "17 1 21 5 17 9" }, null, -1)),
        s[7] || (s[7] = y("path", { d: "M3 11V9a4 4 0 0 1 4-4h14" }, null, -1)),
        s[8] || (s[8] = y("polyline", { points: "7 23 3 19 7 15" }, null, -1)),
        s[9] || (s[9] = y("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" }, null, -1))
      ], 64)) : e.name === "repeat-one" ? (O(), U(X, { key: 5 }, [
        s[10] || (s[10] = nn('<polyline points="17 1 21 5 17 9" data-v-287bc27a></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14" data-v-287bc27a></path><polyline points="7 23 3 19 7 15" data-v-287bc27a></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3" data-v-287bc27a></path><text x="12" y="14" text-anchor="middle" font-size="8" fill="currentColor" stroke="none" font-weight="bold" data-v-287bc27a>1</text>', 5))
      ], 64)) : e.name === "shuffle" ? (O(), U(X, { key: 6 }, [
        s[11] || (s[11] = nn('<polyline points="16 3 21 3 21 8" data-v-287bc27a></polyline><line x1="4" y1="20" x2="21" y2="3" data-v-287bc27a></line><polyline points="21 16 21 21 16 21" data-v-287bc27a></polyline><line x1="15" y1="15" x2="21" y2="21" data-v-287bc27a></line><line x1="4" y1="4" x2="9" y2="9" data-v-287bc27a></line>', 5))
      ], 64)) : e.name === "search" ? (O(), U(X, { key: 7 }, [
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
      ], 64)) : e.name === "plus" ? (O(), U(X, { key: 8 }, [
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
      ], 64)) : e.name === "x" ? (O(), U(X, { key: 9 }, [
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
      ], 64)) : e.name === "chevron-down" ? (O(), U("polyline", Hc)) : e.name === "chevron-up" ? (O(), U("polyline", Kc)) : e.name === "music" ? (O(), U(X, { key: 12 }, [
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
      ], 64)) : e.name === "volume" ? (O(), U(X, { key: 13 }, [
        s[21] || (s[21] = y("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[22] || (s[22] = y("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1)),
        s[23] || (s[23] = y("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }, null, -1))
      ], 64)) : e.name === "volume-mute" ? (O(), U(X, { key: 14 }, [
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
      ], 64)) : e.name === "check" ? (O(), U("polyline", Bc)) : e.name === "loader" ? (O(), U(X, { key: 16 }, [
        s[27] || (s[27] = nn('<line x1="12" y1="2" x2="12" y2="6" data-v-287bc27a></line><line x1="12" y1="18" x2="12" y2="22" data-v-287bc27a></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" data-v-287bc27a></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" data-v-287bc27a></line><line x1="2" y1="12" x2="6" y2="12" data-v-287bc27a></line><line x1="18" y1="12" x2="22" y2="12" data-v-287bc27a></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" data-v-287bc27a></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" data-v-287bc27a></line>', 8))
      ], 64)) : Se("", !0)
    ], 8, jc));
  }
}), bt = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, i] of t)
    s[n] = i;
  return s;
}, we = /* @__PURE__ */ bt(Wc, [["__scopeId", "data-v-287bc27a"]]), zc = { class: "stmp-collapsed-bar" }, Jc = { class: "stmp-collapsed-title" }, Gc = ["aria-label"], qc = /* @__PURE__ */ vt({
  __name: "CollapsedBar",
  setup(e) {
    const t = yt(), s = ot(() => t.currentTrack?.name || Q("No Song"));
    return (n, i) => (O(), U("div", zc, [
      y("span", Jc, se(s.value), 1),
      y("button", {
        class: "stmp-icon-btn",
        "aria-label": L(t).isPlaying ? L(Q)("Pause") : L(Q)("Play"),
        onClick: i[0] || (i[0] = Ws((r) => L(t).togglePlay(), ["stop"]))
      }, [
        ue(we, {
          name: L(t).isPlaying ? "pause" : "play",
          size: 16
        }, null, 8, ["name"])
      ], 8, Gc)
    ]));
  }
}), Yc = /* @__PURE__ */ bt(qc, [["__scopeId", "data-v-d181b89b"]]), Xc = { class: "stmp-playlist" }, Zc = { class: "stmp-upload-area" }, Qc = ["aria-label"], ea = {
  key: 0,
  class: "stmp-empty"
}, ta = { class: "stmp-group-label" }, sa = ["onClick"], na = { class: "stmp-item-index" }, ia = { class: "stmp-item-info" }, ra = { class: "stmp-item-song" }, oa = {
  key: 0,
  class: "stmp-item-artist"
}, la = ["onClick"], ca = /* @__PURE__ */ vt({
  __name: "PlaylistView",
  setup(e) {
    const t = fs(), s = ge(), n = /* @__PURE__ */ Pe(null), i = () => {
      n.value?.click();
    }, r = async (u) => {
      const h = u.target;
      if (!h.files || !h.files[0]) return;
      const w = h.files[0], g = `stmp:audio:${Date.now()}-${w.name}`, S = s.storage;
      S && (await S.setBlob(g, w), t.addLocalFile(w.name, g)), h.value = "";
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
      chat: Q("From Chat"),
      user: Q("My List"),
      local: Q("Local Files")
    };
    function c(u) {
      t.play(u);
    }
    function d(u) {
      t.removeItem(u);
    }
    return (u, h) => (O(), U("div", Xc, [
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
          "aria-label": L(Q)("Add local file"),
          onClick: i
        }, " + " + se(L(Q)("Add local file")), 9, Qc)
      ]),
      L(t).isEmpty ? (O(), U("div", ea, se(L(Q)("No Songs")), 1)) : (O(), U(X, { key: 1 }, Mt(["chat", "user", "local"], (w) => y("div", {
        key: w,
        class: "stmp-group"
      }, [
        o.value[w].length ? (O(), U(X, { key: 0 }, [
          y("div", ta, se(l[w]), 1),
          (O(!0), U(X, null, Mt(o.value[w], (g) => (O(), U("div", {
            key: g.item.id,
            class: ze(["stmp-item", { active: g.index === L(t).currentIndex }]),
            onClick: (S) => c(g.index)
          }, [
            y("span", na, se(g.index + 1), 1),
            y("div", ia, [
              y("span", ra, se(g.item.song), 1),
              g.item.artist ? (O(), U("span", oa, se(g.item.artist), 1)) : Se("", !0)
            ]),
            y("button", {
              class: "stmp-item-del",
              onClick: Ws((S) => d(g.index), ["stop"])
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
}), aa = /* @__PURE__ */ bt(ca, [["__scopeId", "data-v-48d97d17"]]), ua = { class: "stmp-search" }, fa = { class: "stmp-search-bar" }, da = ["placeholder"], ha = ["disabled"], pa = {
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
}, wa = ["aria-label", "onClick"], Sa = /* @__PURE__ */ vt({
  __name: "SearchView",
  setup(e) {
    const t = Fc(), s = fs(), n = ge(), i = /* @__PURE__ */ Pe(t.keyword), r = /* @__PURE__ */ Pe(/* @__PURE__ */ new Set()), o = /* @__PURE__ */ Pe(null);
    async function l() {
      t.setKeyword(i.value);
      const g = Jr(n.settings.providers);
      await t.search(g);
    }
    const c = () => {
      l();
    };
    function d(g) {
      const S = g.provider + g.id;
      if (o.value === S) return;
      o.value = S;
      const _ = s.list.length;
      s.addFromSearch(g);
      const M = s.list.length - 1;
      M >= _ && s.play(M), setTimeout(() => {
        r.value.add(S), o.value = null;
      }, 600);
    }
    function u(g) {
      const S = g.provider + g.id;
      r.value.has(S) || (s.addFromSearch(g), r.value.add(S));
    }
    function h(g) {
      return r.value.has(g.provider + g.id);
    }
    function w(g) {
      return o.value === g.provider + g.id;
    }
    return (g, S) => (O(), U("div", ua, [
      y("div", fa, [
        Vt(y("input", {
          "onUpdate:modelValue": S[0] || (S[0] = (_) => i.value = _),
          class: "stmp-search-input",
          placeholder: L(Q)("Search Song..."),
          onKeydown: Vr(l, ["enter"])
        }, null, 40, da), [
          [Bt, i.value]
        ]),
        y("button", {
          class: "stmp-icon-btn",
          disabled: L(t).isSearching,
          onClick: l
        }, [
          L(t).isSearching ? (O(), lt(we, {
            key: 1,
            name: "loader",
            size: 16,
            class: "stmp-spin"
          })) : (O(), lt(we, {
            key: 0,
            name: "search",
            size: 16
          }))
        ], 8, ha)
      ]),
      L(t).error ? (O(), U("div", pa, [
        y("span", null, se(L(t).error), 1),
        y("button", {
          class: "stmp-retry-btn",
          "aria-label": L(Q)("Retry"),
          onClick: c
        }, se(L(Q)("Retry")), 9, ga)
      ])) : Se("", !0),
      L(t).isSearching ? (O(), U("div", ma, se(L(Q)("Searching...")), 1)) : i.value && !L(t).results.length ? (O(), U("div", va, se(L(Q)("No results")), 1)) : Se("", !0),
      L(t).results.length ? (O(), U("div", ya, [
        (O(!0), U(X, null, Mt(L(t).results, (_) => (O(), U("div", {
          key: _.provider + _.id,
          class: ze(["stmp-result", { "stmp-result-playing": w(_) }])
        }, [
          y("div", {
            class: "stmp-result-info",
            onClick: (M) => d(_)
          }, [
            y("span", _a, se(_.name), 1),
            _.artist ? (O(), U("span", xa, se(_.artist), 1)) : Se("", !0)
          ], 8, ba),
          y("button", {
            class: ze(["stmp-icon-btn stmp-result-add", { added: h(_) }]),
            "aria-label": h(_) ? L(Q)("Added") : L(Q)("Add to list"),
            onClick: Ws((M) => u(_), ["stop"])
          }, [
            ue(we, {
              name: h(_) ? "check" : "plus",
              size: 16
            }, null, 8, ["name"])
          ], 10, wa)
        ], 2))), 128))
      ])) : Se("", !0)
    ]));
  }
}), Ca = /* @__PURE__ */ bt(Sa, [["__scopeId", "data-v-077a0b5a"]]), Ia = { class: "stmp-panel" }, Ea = { class: "stmp-topbar stmp-drag-handle" }, Ta = { class: "stmp-cover" }, Pa = ["src"], Ra = { class: "stmp-track-info" }, Ma = { class: "stmp-track-name" }, Aa = {
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
}, Da = { class: "stmp-progress" }, Ua = ["value"], Na = { class: "stmp-time" }, Fa = { class: "stmp-controls" }, ja = ["aria-label"], Va = ["aria-label"], Ha = ["aria-label"], Ka = ["aria-label"], Ba = ["aria-label"], Wa = ["value"], za = { class: "stmp-tabs" }, Ja = { class: "stmp-tab-content" }, Ga = /* @__PURE__ */ vt({
  __name: "PlayerPanel",
  emits: ["collapse"],
  setup(e) {
    const t = yt(), s = fs(), n = ge(), i = /* @__PURE__ */ Pe("list"), r = /* @__PURE__ */ Pe(!0), o = /* @__PURE__ */ Pe(!1), l = /* @__PURE__ */ Pe(!1);
    let c = null;
    const d = ot(() => t.currentTrack?.cover || ""), u = () => {
      o.value = !0;
    };
    qt(
      () => t.currentTrack,
      () => {
        o.value = !1;
      }
    );
    const h = ot(
      () => t.duration > 0 ? t.currentTime / t.duration * 100 : 0
    ), w = ot(
      () => t.currentLyricIndex >= 0 ? t.lyrics[t.currentLyricIndex]?.text ?? null : null
    ), g = ot(() => {
      const K = t.currentLyricIndex;
      return K < 0 ? null : t.lyrics[K + 1]?.text ?? null;
    });
    function S(K) {
      const E = Math.floor(K / 60), k = Math.floor(K % 60);
      return E + ":" + k.toString().padStart(2, "0");
    }
    function _(K) {
      const E = K.target;
      t.seek(Number(E.value) / 100 * t.duration);
    }
    const M = ["list", "random", "single"], N = {
      list: "repeat",
      random: "shuffle",
      single: "repeat-one"
    };
    function j() {
      const K = n.settings.playMode, E = M.indexOf(K), k = M[(E + 1) % M.length];
      n.setPlayMode(k);
    }
    function W(K) {
      const E = K.target;
      t.setVolume(Number(E.value));
    }
    function R() {
      c && clearTimeout(c), l.value = !0;
    }
    function A() {
      c = setTimeout(() => {
        l.value = !1;
      }, 300);
    }
    function G() {
      t.volume > 0 ? t.setVolume(0) : t.setVolume(65);
    }
    return (K, E) => (O(), U("div", Ia, [
      y("div", Ea, [
        y("div", Ta, [
          d.value && !o.value ? (O(), U("img", {
            key: 0,
            src: d.value,
            alt: "cover",
            onError: u
          }, null, 40, Pa)) : (O(), lt(we, {
            key: 1,
            name: "music",
            size: 24
          }))
        ]),
        y("div", Ra, [
          y("div", Ma, se(L(t).currentTrack?.name || L(Q)("No Song")), 1),
          L(t).currentTrack?.artist ? (O(), U("div", Aa, se(L(t).currentTrack.artist), 1)) : Se("", !0)
        ]),
        y("button", {
          class: "stmp-icon-btn",
          "aria-label": L(Q)("Collapse panel"),
          onClick: E[0] || (E[0] = Ws((k) => K.$emit("collapse"), ["stop"]))
        }, [
          ue(we, {
            name: "chevron-down",
            size: 18
          })
        ], 8, La)
      ]),
      r.value ? (O(), U("div", {
        key: 0,
        class: "stmp-lyrics",
        onClick: E[1] || (E[1] = (k) => r.value = !1)
      }, [
        w.value ? (O(), U("div", $a, se(w.value), 1)) : Se("", !0),
        g.value ? (O(), U("div", Oa, se(g.value), 1)) : Se("", !0),
        !w.value && !g.value ? (O(), U("div", ka, [
          ue(we, {
            name: "music",
            size: 18
          })
        ])) : Se("", !0)
      ])) : (O(), U("div", {
        key: 1,
        class: "stmp-lyrics-toggle",
        onClick: E[2] || (E[2] = (k) => r.value = !0)
      }, [
        ue(we, {
          name: "chevron-up",
          size: 14
        }),
        Dr(" " + se(L(Q)("show lyrics")), 1)
      ])),
      y("div", Da, [
        y("input", {
          type: "range",
          min: "0",
          max: "100",
          step: "0.1",
          value: h.value,
          class: "stmp-range",
          onInput: _
        }, null, 40, Ua),
        y("div", Na, [
          y("span", null, se(S(L(t).currentTime)), 1),
          y("span", null, se(S(L(t).duration)), 1)
        ])
      ]),
      y("div", Fa, [
        y("button", {
          class: "stmp-ctrl-btn",
          "aria-label": L(Q)("Toggle play mode"),
          onClick: j
        }, [
          ue(we, {
            name: N[L(n).settings.playMode],
            size: 18
          }, null, 8, ["name"])
        ], 8, ja),
        y("button", {
          class: "stmp-ctrl-btn",
          "aria-label": L(Q)("Previous"),
          onClick: E[3] || (E[3] = (k) => L(s).prev())
        }, [
          ue(we, {
            name: "prev",
            size: 18
          })
        ], 8, Va),
        y("button", {
          class: "stmp-ctrl-btn stmp-play-btn",
          "aria-label": L(t).isPlaying ? L(Q)("Pause") : L(Q)("Play"),
          onClick: E[4] || (E[4] = (k) => L(t).togglePlay())
        }, [
          ue(we, {
            name: L(t).isPlaying ? "pause" : "play",
            size: 24
          }, null, 8, ["name"])
        ], 8, Ha),
        y("button", {
          class: "stmp-ctrl-btn",
          "aria-label": L(Q)("Next"),
          onClick: E[5] || (E[5] = (k) => L(s).next())
        }, [
          ue(we, {
            name: "next",
            size: 18
          })
        ], 8, Ka),
        y("div", {
          class: "stmp-volume-container",
          onMouseenter: R,
          onMouseleave: A
        }, [
          y("button", {
            class: "stmp-ctrl-btn",
            "aria-label": L(Q)("Mute / Unmute"),
            onClick: G
          }, [
            ue(we, {
              name: L(t).volume === 0 ? "volume-mute" : "volume",
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
              value: L(t).volume,
              class: "stmp-volume-vertical",
              orient: "vertical",
              onInput: W
            }, null, 40, Wa)
          ], 2)
        ], 32)
      ]),
      y("div", za, [
        y("button", {
          class: ze(["stmp-tab", { active: i.value === "list" }]),
          onClick: E[6] || (E[6] = (k) => i.value = "list")
        }, se(L(Q)("List")), 3),
        y("button", {
          class: ze(["stmp-tab", { active: i.value === "search" }]),
          onClick: E[7] || (E[7] = (k) => i.value = "search")
        }, se(L(Q)("Search")), 3)
      ]),
      y("div", Ja, [
        i.value === "list" ? (O(), lt(aa, { key: 0 })) : i.value === "search" ? (O(), lt(Ca, { key: 1 })) : Se("", !0)
      ])
    ]));
  }
}), qa = /* @__PURE__ */ bt(Ga, [["__scopeId", "data-v-6faaf198"]]), Ya = /* @__PURE__ */ vt({
  __name: "App",
  setup(e) {
    const t = ge(), s = yt(), n = /* @__PURE__ */ Pe(!1), i = /* @__PURE__ */ Pe(null), r = (A) => {
      A.key === "Escape" && (n.value = !1), A.key === " " && A.target === document.body && (A.preventDefault(), s.togglePlay());
    };
    let o = 0, l = 0, c = 0, d = 0, u = !1, h = !1, w = null, g = null, S = !1;
    function _(A) {
      const G = A.target;
      if (G.closest("input, .stmp-tab, .stmp-result, .stmp-item, .stmp-upload-btn, .stmp-search-input, .stmp-controls, .stmp-lyrics, .stmp-lyrics-toggle, .stmp-tabs, .stmp-tab-content") || n.value && (!G.closest(".stmp-drag-handle") || G.closest("button")) || !n.value && G.closest("button"))
        return;
      const K = i.value?.getBoundingClientRect();
      K && (o = A.clientX, l = A.clientY, c = K.left, d = K.top, u = !1, h = !0, i.value && (i.value.style.left = K.left + "px", i.value.style.top = K.top + "px", i.value.style.right = "auto", i.value.style.bottom = "auto"), w = M, g = N, document.addEventListener("pointermove", w), document.addEventListener("pointerup", g), A.preventDefault());
    }
    function M(A) {
      if (!i.value || !h) return;
      const G = A.clientX - o, K = A.clientY - l;
      (Math.abs(G) > 3 || Math.abs(K) > 3) && (u = !0);
      let E = c + G, k = d + K;
      const oe = i.value.offsetWidth || 60, _e = i.value.offsetHeight || 40, Te = window.innerWidth - oe, ke = window.innerHeight - _e;
      E = Math.max(0, Math.min(E, Te)), k = Math.max(0, Math.min(k, ke)), i.value.style.left = E + "px", i.value.style.top = k + "px";
    }
    function N() {
      if (h = !1, w && document.removeEventListener("pointermove", w), g && document.removeEventListener("pointerup", g), w = null, g = null, !u) {
        R();
        return;
      }
      if (S = !0, i.value) {
        const A = i.value.getBoundingClientRect();
        t.setPosition({ x: A.left, y: A.top }), n.value && It(() => j());
      }
    }
    function j() {
      if (!i.value) return;
      const A = i.value.getBoundingClientRect(), G = i.value.offsetWidth, K = i.value.offsetHeight;
      let E = A.left, k = A.top;
      E + G > window.innerWidth && (E = window.innerWidth - G), k + K > window.innerHeight && (k = window.innerHeight - K), E < 0 && (E = 0), k < 0 && (k = 0), i.value.style.left = E + "px", i.value.style.top = k + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", t.setPosition({ x: E, y: k });
    }
    function W() {
      if (!i.value || S) return;
      const A = document.querySelector("#send_form");
      let G = window.innerHeight;
      A && (G = A.getBoundingClientRect().top);
      const K = i.value.offsetHeight || 38;
      let E = G - K - 4;
      E < 4 && (E = 4), i.value.style.left = "8px", i.value.style.top = E + "px", i.value.style.right = "auto", i.value.style.bottom = "auto";
    }
    function R() {
      n.value = !n.value, It(() => {
        S ? j() : W();
      });
    }
    return hr(() => {
      const A = t.settings.position;
      A && A.x !== void 0 && i.value && (S = !0, i.value.style.left = A.x + "px", i.value.style.top = A.y + "px", i.value.style.right = "auto", i.value.style.bottom = "auto"), It(() => W()), window.addEventListener("resize", () => {
        S || It(() => W());
      }), window.addEventListener("keydown", r);
    }), pr(() => {
      N(), window.removeEventListener("keydown", r);
    }), (A, G) => (O(), U("div", {
      ref_key: "widgetRef",
      ref: i,
      class: ze(["stmp-widget", {
        "stmp-expanded": n.value,
        "stmp-collapsed": !n.value
      }]),
      onPointerdown: _
    }, [
      n.value ? (O(), lt(qa, {
        key: 1,
        onCollapse: R
      })) : (O(), lt(Yc, { key: 0 }))
    ], 34));
  }
}), Xa = /* @__PURE__ */ bt(Ya, [["__scopeId", "data-v-c9b78003"]]), Za = { class: "stmp-settings" }, Qa = { class: "stmp-setting-group" }, eu = { class: "stmp-setting-row" }, tu = ["checked", "onChange"], su = ["onUpdate:modelValue"], nu = ["onUpdate:modelValue"], iu = ["onUpdate:modelValue"], ru = { class: "stmp-setting-group" }, ou = { class: "stmp-setting-label" }, lu = ["value"], cu = { class: "stmp-setting-group" }, au = ["value"], uu = ["value"], fu = { class: "stmp-setting-group" }, du = { class: "stmp-setting-row" }, hu = ["checked"], pu = { class: "stmp-setting-group" }, gu = { class: "stmp-rules" }, mu = ["onClick"], vu = { class: "stmp-rule-add" }, yu = /* @__PURE__ */ vt({
  __name: "SettingsView",
  setup(e) {
    const t = ge(), s = /* @__PURE__ */ Pe(""), n = [
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
      const _ = S.target;
      t.setVolume(Number(_.value));
    }
    function c(S) {
      const _ = S.target;
      t.setPlayMode(_.value);
    }
    function d(S) {
      const _ = S.target;
      t.settings.autoPlayOnNewCue = _.checked, t.save();
    }
    const u = async () => {
      const S = t.storage;
      S && (await S.clearCache(), toastr.success("缓存已清理"));
    }, h = () => {
      const S = JSON.stringify(t.settings, null, 2), _ = new Blob([S], { type: "application/json" }), M = URL.createObjectURL(_), N = document.createElement("a");
      N.href = M, N.download = "st-music-player-settings.json", N.click(), URL.revokeObjectURL(M);
    }, w = () => {
      const S = document.createElement("input");
      S.type = "file", S.accept = ".json", S.onchange = async (_) => {
        const M = _.target.files?.[0];
        if (!M) return;
        const N = await M.text();
        try {
          const j = JSON.parse(N);
          if (typeof j != "object" || j === null) throw new Error("Not an object");
          const W = ["volume", "playMode", "position", "autoPlayOnNewCue", "providers", "customCueRules"], R = {};
          for (const G of W)
            G in j && (R[G] = j[G]);
          if (typeof R.volume != "number" || R.volume < 0 || R.volume > 100)
            throw new Error("Invalid volume");
          if (typeof R.playMode != "string" || !["list", "random", "single"].includes(R.playMode))
            throw new Error("Invalid playMode");
          if (R.providers && !Array.isArray(R.providers))
            throw new Error("Invalid providers");
          if (R.customCueRules && !Array.isArray(R.customCueRules))
            throw new Error("Invalid customCueRules");
          const A = ge();
          Object.assign(A.settings, R), A.save(), toastr.success("设置已导入");
        } catch (j) {
          console.error("Import failed", j), toastr.error("导入失败: " + (j instanceof Error ? j.message : "JSON 格式错误"));
        }
      }, S.click();
    };
    function g(S) {
      const _ = t.settings.providers.find((M) => M.id === S);
      _ && (_.enabled = !_.enabled, t.save());
    }
    return (S, _) => (O(), U("div", Za, [
      y("div", Qa, [
        _[4] || (_[4] = y("div", { class: "stmp-setting-label" }, "Providers", -1)),
        (O(!0), U(X, null, Mt(L(t).settings.providers, (M) => (O(), U("div", {
          key: M.id,
          class: "stmp-provider-config"
        }, [
          y("label", eu, [
            y("span", null, se(i[M.id] || M.id), 1),
            y("input", {
              type: "checkbox",
              checked: M.enabled,
              onChange: (N) => g(M.id)
            }, null, 40, tu)
          ]),
          M.id === "netease" ? Vt((O(), U("input", {
            key: 0,
            class: "stmp-provider-input",
            "onUpdate:modelValue": (N) => M.config.baseURL = N,
            placeholder: "API baseURL",
            onChange: _[0] || (_[0] = (N) => L(t).save())
          }, null, 40, su)), [
            [Bt, M.config.baseURL]
          ]) : Se("", !0),
          M.id === "custom" ? (O(), U(X, { key: 1 }, [
            Vt(y("input", {
              class: "stmp-provider-input",
              "onUpdate:modelValue": (N) => M.config.searchURL = N,
              placeholder: "Search URL",
              onChange: _[1] || (_[1] = (N) => L(t).save())
            }, null, 40, nu), [
              [Bt, M.config.searchURL]
            ]),
            Vt(y("input", {
              class: "stmp-provider-input",
              "onUpdate:modelValue": (N) => M.config.resolveURL = N,
              placeholder: "Resolve URL",
              onChange: _[2] || (_[2] = (N) => L(t).save())
            }, null, 40, iu), [
              [Bt, M.config.resolveURL]
            ])
          ], 64)) : Se("", !0)
        ]))), 128))
      ]),
      y("div", ru, [
        y("div", ou, "Default Volume: " + se(L(t).settings.volume), 1),
        y("input", {
          type: "range",
          min: "0",
          max: "100",
          value: L(t).settings.volume,
          class: "stmp-range",
          onInput: l
        }, null, 40, lu)
      ]),
      y("div", cu, [
        _[5] || (_[5] = y("div", { class: "stmp-setting-label" }, "Default Play Mode", -1)),
        y("select", {
          class: "stmp-select",
          value: L(t).settings.playMode,
          onChange: c
        }, [
          (O(), U(X, null, Mt(n, (M) => y("option", {
            key: M.value,
            value: M.value
          }, se(M.label), 9, uu)), 64))
        ], 40, au)
      ]),
      y("div", fu, [
        y("div", du, [
          _[6] || (_[6] = y("span", null, "Auto-play on new cue", -1)),
          y("input", {
            type: "checkbox",
            checked: L(t).settings.autoPlayOnNewCue,
            onChange: d
          }, null, 40, hu)
        ])
      ]),
      y("div", pu, [
        _[7] || (_[7] = y("div", { class: "stmp-setting-label" }, "Custom Cue Rules (Regex)", -1)),
        y("div", gu, [
          (O(!0), U(X, null, Mt(L(t).settings.customCueRules, (M, N) => (O(), U("div", {
            key: N,
            class: "stmp-rule"
          }, [
            y("code", null, se(M), 1),
            y("button", {
              class: "stmp-rule-del",
              onClick: (j) => o(N)
            }, "✕", 8, mu)
          ]))), 128))
        ]),
        y("div", vu, [
          Vt(y("input", {
            "onUpdate:modelValue": _[3] || (_[3] = (M) => s.value = M),
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
        _[8] || (_[8] = y("div", { class: "stmp-setting-label" }, "Data", -1)),
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
}), bu = /* @__PURE__ */ bt(yu, [["__scopeId", "data-v-32510a40"]]);
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
let At = null, Xe = null, ts = null, ss = null, Lt = null, As = null;
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
  t && As && (Lt = Hr(bu), Lt.use(As), Lt.mount(t));
}
function Eu() {
  Lt && (Lt.unmount(), Lt = null), ss?.remove(), ss = null;
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
    As = t, At = Hr(Xa), At.use(t), At.mount(e);
    const s = ge(), n = Lc();
    s.init(n);
    const i = yt();
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
  if (Xe?.stop(), Xe = null, At) {
    try {
      yt().destroy();
    } catch {
    }
    At.unmount(), At = null;
  }
  const e = document.getElementById("st-music-player-root");
  e && e.remove(), Eu(), As = null;
}
function Lu() {
  Gr();
}
async function Ru() {
  try {
    const e = SillyTavern.getContext();
    delete e.extensionSettings[Et], e.saveSettingsDebounced();
  } catch (e) {
    console.error("[ST-Music-Player] clean: failed to delete settings:", e);
  }
  try {
    const e = SillyTavern.libs?.localforage;
    if (e && typeof e.keys == "function") {
      const t = await e.keys();
      await Promise.all(
        t.filter((s) => s.startsWith(Et) || s.startsWith("stmp:")).map((s) => e.removeItem(s))
      );
    }
  } catch (e) {
    console.error("[ST-Music-Player] clean: failed to clear localforage:", e);
  }
}
async function $u() {
  await Ru(), Gr();
}
export {
  Ru as clean,
  $u as delete,
  Gr as destroy,
  Lu as disable,
  Au as init
};
